import React, { useState } from "react";

import "assets/css/Form.css";

function SignUpForm({ toggleForm, signup }) {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  let userSignup = (e) => {
    signup(e, fullname,email, password);
  }
  return (
    <form className="login-form">
      <div className="form-control">
        <input type="text" placeholder="Enter your fullname" value={fullname} onChange={e => setFullname(e.target.value)}></input>
      </div>
      <div className="form-control">
        <input type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}></input>
      </div>
      <div className="form-control">
        <input type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)}></input>
      </div>
      <div className="form-control">
        <button type="submit" onClick={userSignup}>Signup</button>
      </div>
      <br />
      <hr/>
      <div>
        <span className="form-help">
          Already have an account? <span onClick={toggleForm}>Login</span>
        </span>
      </div>
    </form>
  );
}

export default SignUpForm;
