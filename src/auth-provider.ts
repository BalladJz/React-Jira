// 在真实环境中，如果使用 firebase 这种第三方auth服务的话，本文件不需要开发者开发
import { Users } from "views/projectList/SearchPanel";

const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: Users }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/login `, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/register `, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
  });
};

export const logout = () => window.localStorage.removeItem(localStorageKey);
