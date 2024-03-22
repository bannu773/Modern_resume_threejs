import React, { useState } from "react";
// import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
// import logingif from "../../assets/undraw_stand_out_-1-oag.svg";
import { LoginService, forgotPasswordLinkService } from "../../services/AuthService";
import { message } from "antd";

export default function Login() {

  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  }

  const triggerForgotpassword = (data) => {
    if (data.email === "") {
      message.error("Please enter your email address");
    }
    const forgotpasswordlink = forgotPasswordLinkService(data)
    if(forgotpasswordlink.success === true) {
      navigate('/login')
    }
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginRes = await LoginService(loginDetails);
    console.log(loginRes.success);
    if (loginRes.success) {
      navigate("/chat");
    }
  };

  return (
    <div className=" login-container">
      <div className="left-container">
        {/* <img className="login-gif" src={logingif} /> */}
      </div>
      <div className="right-container">
        <div className="login-head-container">
          <h1 className="login-heading">LOGIN</h1>
          {/* <img src={loginboy} className="login-boy" /> */}
          <form className="login-data" onSubmit={handleSubmit}>
            <div className="username input-field">
              <input
                type="text"
                name="email"
                value={loginDetails.email}
                onChange={(e) => handleChange(e)}
                placeholder="  🤵 |  Username"
              />
            </div>
            <div className="password input-field">
              <input
                type="password"
                name="password"
                value={loginDetails.password}
                onChange={(e) => handleChange(e)}
                placeholder="   🔒 | Password"
              />
            </div>
            <p
              className=" input-field forgotpassword"
              onClick={() =>
                triggerForgotpassword({ email: loginDetails.email })
              }
            >
              Forgot password ?
            </p>
            <div className="lg-btn input-field">
              <button className="login-btn" type="submit">
                LOGIN
              </button>
              <h4 className="switch-signup">
                Don't have an account?
                <Link to="/signup">Register</Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
