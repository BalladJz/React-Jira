import React from "react";
import "./App.css";
import { ProjectList } from "views/projectList/index";
import TryUseArray from "views/tryUseArray/index";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "views/unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
