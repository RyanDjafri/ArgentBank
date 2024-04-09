import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/v1/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          window.location = "/profile";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="./user" className="sign-in-button">
              Sign In
            </a>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
