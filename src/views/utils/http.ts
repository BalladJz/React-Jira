import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

/**
 * @param endpoint 请求的路径
 * @param param1 请求的其余参数项 比如 token、method、data、等
 * @returns
 */
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {},
) => {
  // config 对请求方式 请求头 进行处理，默认是Get请求，后面的 customConfig 可以覆盖 method
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    // 如果是GET请求需要把参数拼接在 url 后
    endpoint += `?${qs.stringify(data)}`;
  } else {
    // 其他请求 参数放在请求体重
    config.body = JSON.stringify(data || {});
  }

  // fetch 不会异常请求抛出错误
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (res) => {
    // 对 token 无效时的处理
    if (res.status === 401) {
      // 此处需要退出登录
      await auth.logout();
      // 重新刷新界面
      window.location.reload();
      // 抛出异常
      return Promise.reject({ message: "请重新登录" });
    }

    const data = await res.json();
    // 如果返回的状态是ok的话
    if (res.ok) {
      return data;
    } else {
      // 其余错误需要抛出错误
      return Promise.reject(data);
    }
  });
};

/**
 * 此处再对http进行封装，自动携带token
 *
 * 如果一个函数要使用hook的话，那么这个函数本身(useHttp)就必须是个hook
 */
export const useHttp = () => {
  const { user } = useAuth();
  // Parameters 返回函数的参数类型
  // { ...config, token: user?.token } 这一步就是自动从 user中获取token，不需要每次请求手动携带
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
