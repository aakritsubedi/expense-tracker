import React, { useState } from "react";

import "assets/css/Form.css";

function LoginForm({ toggleForm, forgetPassword, login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let userLogin = (e) => {
    login(e, email, password);
  };
  let resetPassword = (e) => {
    forgetPassword(e, email);
  }
  return (
    <form className="login-form">
      <div className="form-control">
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <button type="submit" onClick={userLogin}>
          Login
        </button>
      </div>
      <br />
      <div>
        <span className="form-help">
          <span onClick={resetPassword}>Forget a Password</span><br/>(Type your email in above email field.)
        </span>
        <br/>
        <hr/>
        <span className="form-help">
          Create an account? <span onClick={toggleForm}>SignUp</span>
        </span>
      </div>
    </form>
  );
}

export default LoginForm;
