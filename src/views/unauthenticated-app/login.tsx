import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

type Params = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { user, login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id={"password"} />
      </div>
      <div>
        <button type={"submit"}>登录</button>
      </div>
    </form>
  );
};

export default LoginPage;
