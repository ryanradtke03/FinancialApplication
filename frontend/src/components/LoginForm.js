import React, { useState } from "react";
import "../themes/LoginForm.css";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    onSubmit(data);
    setSubmittedData(data); // Display the submitted data on the page
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-4 p-4 bg-yellow-100 rounded-md">
          <h3 className="text-yellow-800">Submitted Data:</h3>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
