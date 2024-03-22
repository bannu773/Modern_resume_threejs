import React, { useState } from 'react';
import './sign.css'; // Import your CSS file
import LogIn from '../../assets/login.svg';
import SignUp from '../../assets/signup.svg';
import { useNavigate } from "react-router-dom";
import { LoginService, forgotPasswordLinkService } from "../../services/AuthService";
import { OTPService, SignUpService } from "../../services/AuthService";
import { Button, message } from "antd";

function Animated_LogIn_up() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const [signupDetails, setSignupDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        otp: "",
        password: "",
        // confirmpassword: "",
    });

    const [validation, setValidation] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmpassword: null,
    });

    function handleChangeUp(event) {
        const { name, value } = event.target;
        setSignupDetails({ ...signupDetails, [name]: value });
        console.log(signupDetails);
    }

    const triggerOtp = async (otpdata) => {
        const otpRes = await OTPService(otpdata)
        console.log(otpdata);
    }


    function handleChangeIn(event) {
        const { name, value } = event.target;
        console.log(name, value);
        setLoginDetails({ ...loginDetails, [name]: value });
    }
    const handleSubmitUp = async (e) => {
        e.preventDefault();
        console.log(signupDetails);

        let errors = validation;

        if (!signupDetails.firstName.trim()) {
            errors.firstName = 'First name is required';
        } else {
            errors.firstName = null;
        }
        //last Name validation
        if (!signupDetails.lastName.trim()) {
            errors.lastName = 'Last name is required';
        } else {
            errors.lName = null;
        }

        // email validation
        const emailCond =
            "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (!signupDetails.email.trim()) {
            errors.email = 'Email is required';
        } else if (!signupDetails.email.match(emailCond)) {
            errors.email = 'Please ingress a valid email address';
        } else {
            errors.email = null;
        }


        //password validation
        const cond1 = '/^(?=.*[a-z]).{6,20}$/';
        const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
        const cond3 = '/^(?=.*[0-9]).{6,20}$/';
        const password = signupDetails.password;
        if (!password) {
            errors.password = 'password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be longer than 6 characters';
        } else if (password.length >= 20) {
            errors.password = 'Password must shorter than 20 characters';
        } else if (!password.match(cond1)) {
            errors.password = 'Password must contain at least one lowercase';
        } else if (!password.match(cond2)) {
            errors.password = 'Password must contain at least one capital letter';
        } else if (!password.match(cond3)) {
            errors.password = 'Password must contain at least a number';
        } else {
            errors.password = null;
        }

        //matchPassword validation
        //  if (!signupDetails.confirmpassword) {
        //   errors.confirmpassword = 'Password confirmation is required';
        // } else if (signupDetails.confirmpassword !== signupDetails.Password) {
        //   errors.confirmpassword = 'Password does not match confirmation password';
        // } else {
        //   errors.password = null;
        // }
        const signupRes = await SignUpService(signupDetails)
        if (signupRes.success) {
            message.success("Signup Successfull Please Login to continue")
        }
        return setValidation(errors);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginRes = await LoginService(loginDetails);
        console.log(loginRes.success);
        if (loginRes.success) {
            navigate("/chat");
        }
    };
    const triggerForgotpassword = (data) => {
        if (data.email === "") {
            message.error("Please enter your email address");
        }
        const forgotpasswordlink = forgotPasswordLinkService(data)
        if (forgotpasswordlink.success === true) {
            navigate('/login')
        }
        // console.log(data);
    };


    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    return (
        <div className={`container1 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={handleSubmit}>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <input type="text" name='email' value={loginDetails.email} placeholder="Username" onChange={(e) => handleChangeIn(e)} />
                        </div>
                        <div className="input-field">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input type="password" name="password" value={loginDetails.password} placeholder="Password" onChange={(e) => handleChangeIn(e)} />
                        </div>
                        <p
                            className="forgotpassword"
                            onClick={() =>
                                triggerForgotpassword({ email: loginDetails.email })
                            }
                        >
                            Forgot password ?
                        </p>
                        <input type="submit" value="login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            {/* Your social media icons */}
                        </div>
                    </form>

                    <form action="" className="sign-up-form" onSubmit={handleSubmitUp}>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <input type="text" placeholder="🤵| First Name" value={signupDetails.firstName}
                                name="firstName" onChange={(e) => handleChangeUp(e)} />
                            {validation.firstName != null && <p className="error-msg">{validation.firstName}</p>}
                        </div>
                        <div className="input-field">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input type="text" value={signupDetails.lastName}
                                name="lastName" placeholder="🤵| Last Name" onChange={(e) => handleChangeUp(e)} />
                            {validation.lastName != null && <p className="error-msg">{validation.lastName}</p>}
                        </div>
                        <div className="input-field">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input type="email" value={signupDetails.email}
                                name="email" placeholder=" @ | Email" onChange={(e) => handleChangeUp(e)} />
                            {validation.email != null && <p className="error-msg">{validation.email}</p>}
                        </div>
                        <div className="" style={{display : "flex", justifyContent:"center" ,width : "100%", gap : "10px"}}>
                            {/* <button type="button" onClick={() => triggerOtp(signupDetails.email)} className="send-otp">Send Otp</button> */}
                            <Button onClick={() => triggerOtp(signupDetails.email)} size="large" className="send-otp text-white" >Send Otp</Button>
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input type="text" className="otpfield"
                                value={signupDetails.otp}
                                name="otp" required
                                onChange={(e) => handleChangeUp(e)}
                                placeholder="Enter Otp"
                            />

                        </div>
                        <div className="input-field">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input
                                type="password"
                                value={signupDetails.password}
                                name="password"
                                onChange={(e) => handleChangeUp(e)}
                                placeholder=" 🔒 | Password"
                                required
                            />
                            {validation.password != null && <p className="error-msg">{validation.password}</p>}
                        </div>

                        <input type="submit" value="Sign up" className="btn solid" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            {/* Your social media icons */}
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New Here ?</h3>
                        <p>There is Nothing Far from You.Get Grab your Things by _______</p>
                        <button className="btn transparent" onClick={handleSignUpClick}>Sign up</button>
                    </div>
                    <img src={SignUp} alt="Image" className="image" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us </h3>
                        <p>There is Nothing Far from You.Get Grab your Things by _______</p>
                        <button className="btn transparent" onClick={handleSignInClick}>Sign in</button>
                    </div>
                    <img src={LogIn} alt="Image" className="image" />
                </div>
            </div>
        </div>
    );
}

export default Animated_LogIn_up;
