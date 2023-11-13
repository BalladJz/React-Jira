import React, { useState } from "react";
import RegisterPage from "./register";
import LoginPage from "./login";

/**
 * 控制登录注册
 *
 */
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <RegisterPage /> : <LoginPage />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换至{isRegister ? "登录" : "注册"}
      </button>
    </div>
  );
};
