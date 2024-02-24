import React, { useState } from "react";
import "./Forgotpassword.css";
import { changePasswordService } from "../../services/AuthService";
import { useNavigate, useParams } from "react-router-dom";
export default function ForgotPassword() {
  const value =  useParams()
  const navigate = useNavigate()
  const [userdetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const triggerChnagePassword = (e)=>{
    e.preventDefault();
   changePasswordService(userdetails , value)
   .then(
    res => {
      if(res.success === true) {
        navigate('/signin')
      }
      console.log(res);
    }
 
   )
    
  }
  return (
    <div className="forgotpasswor-container">
      <div className="glass-shade">
        <h1 className="forgotpasswor-heading">Forgot Password</h1>
        <div className="sub-container">
          <form className="forgotpasswor-form">
            <div className="input-field">
              <h2 className="side-head">Email :</h2>
              <input
                type="email"
                placeholder="Enter your email"
                value={userdetails.email}
                onChange={(e) => setUserDetails({ ...userdetails, email: e.target.value })}
                className="forgotpasswor-input"
              />
            </div>
            <div className="input-field">
              <h1 className="side-head"> Password :</h1>
              <input
                type="password"
                value={userdetails.password}
                onChange={(e) => setUserDetails({ ...userdetails, password: e.target.value })}
                placeholder="Password"
                className="forgotpasswor-input"
              />
            </div>
            <div className="input-field">
              <h2 className="side-head">ConfirmPassword :</h2>
              <input
                type="password"
                value={userdetails.confirmpassword}
                onChange={(e) => setUserDetails({ ...userdetails, confirmpassword: e.target.value })}
                placeholder="Confirm Password"
                className="forgotpasswor-input"
              />
            </div>
            <div className="forgotpasswor-btn">
              <button type="submit" onClick={triggerChnagePassword} className="forgotpassword-btn">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
