import React, { ReactNode, useState } from "react";
import * as auth from "auth-provider";
import { Users } from "views/projectList/SearchPanel";
import { http } from "views/utils/http";
import { useMount } from "views/utils";

type AuthForm = {
  username: string;
  password: string;
};

type _AuthContext = {
  user: Users | null;
  login: (form: AuthForm) => Promise<void>;
  register: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
};

// 在登录装填下 页面刷新 会退出至登录页 所以 初始化User
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

/** React.createContext 创建 AuthContext 组件 */
const AuthContext = React.createContext<_AuthContext | undefined>(undefined);
// 主要是用在devtool里
AuthContext.displayName = "AuthContext";

/** 通过 AuthProvider 向子级的组件 传递 Auth 的信息 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, serUser] = useState<Users | null>(null);

  const login = (form: AuthForm) =>
    auth.login(form).then((user) => serUser(user));

  const register = (form: AuthForm) =>
    auth.register(form).then((user) => serUser(user));

  const logout = () => auth.logout().then(() => serUser(null));

  useMount(() => {
    bootstrapUser().then((user) => serUser(user));
  });

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

/** 获取用户的 Hooks */
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
