// 在真实环境中，如果使用 firebase 这种第三方auth服务的话，本文件不需要开发者开发
import { Users } from "views/projectList/SearchPanel";

const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

/** 获取token */
export const getToken = () => window.localStorage.getItem(localStorageKey);

/** 存储token */
export const handleUserResponse = ({ user }: { user: Users }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

/** 登录 并且 调用存储token的方法 */
export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

/** 注册 并且 调用存储token的方法 */
export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

/** 退出 并且 移除token */
export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
