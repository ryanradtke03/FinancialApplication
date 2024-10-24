import React from "react";
import LoginForm from "./components/LoginForm";
import "./themes/App.css";

function App() {
  const handleLogin = (credentials) => {
    console.log("Logging in with:", credentials);
  };

  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default App;
