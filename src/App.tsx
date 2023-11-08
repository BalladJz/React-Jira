import React from "react";
import "./App.css";
import { ProjectList } from "views/projectList/index";
import TryUseArray from "views/tryUseArray/index";
import LoginPage from "views/login/index";

function App() {
  return (
    <div className="App">
      {/* <ProjectList /> */}
      {/* <TryUseArray /> */}
      <LoginPage />
    </div>
  );
}

export default App;
