import React, { useState, useEffect } from "react";
// import firebase from 'firebase';

import { auth } from "firebaseConfig";

import LoginForm from "components/LoginForm";
import SignUpForm from "components/SignUpForm";

import * as route from 'constants/routes';

import "assets/css/Login.css";
import { Logo } from "assets/image";

function Login(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //Logged in..
        setUser(authUser);
      } else {
        //Logged out ..
        setUser(null);
      }
    });
    return () => {
      //clean up action
      unsubscribe();
    };
  }, [user]);

  let toggleForm = () => {
    setIsLogin(!isLogin);
  };

  let userLogin = (e, email, password) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(authuser => {
        localStorage.setItem('user', JSON.stringify(authuser.user));
        props.history.push(route.DASHBOARD);
      })
      .catch((error) => alert(error));
  };
  let forgetPassword = (e, email) => {
    e.preventDefault();
    auth.sendPasswordResetEmail(email).catch((error) => alert(error));
  };
  let userSignup = (e, fullname, email, password) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          fullName: fullname,
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <div className="login-wrapper">
        <div className="login-image">
          <h1 className="login-title">
            Expense Tracker
            <span className="login-tagline">keep track of your money...</span>
          </h1>
        </div>
        <div className="login-signup">
          <img src={Logo} alt="Expense Tracker" className="logo" />
          {isLogin ? (
            <LoginForm
              toggleForm={toggleForm}
              forgetPassword={forgetPassword}
              login={userLogin}
            />
          ) : (
            <SignUpForm toggleForm={toggleForm} signup={userSignup} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
