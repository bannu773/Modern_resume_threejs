import axios from 'axios';
import { BASE_URL } from '../Api/api';
import {message} from 'antd'
export const LoginService = async(data) =>{
    try {
        console.log(data);
        const res = await axios.post(`${BASE_URL}login`,  data);
        if(res.data.success === true) {
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
        localStorage.setItem("token" , `Bearer ${res.data.token}`);
        return res.data;
    } catch (error) {
        return error.message;
    } 
}

export const SignUpService =  async(signupData)=>{
    
    try{
        const res = await axios.post(`${BASE_URL}signup`, signupData);
        if(res.data.success === true) {
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
       
        return res.data;
    }
    catch(error){
        return error.message
    }
}

 export const OTPService =  async(otpData)=>{
    try{
        const otpCredintials = {
            email: otpData
        };
        const res = await axios.post(`${BASE_URL}sendotp`, otpCredintials);
        if(res.data.success === true) {
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
        return res.data;
    }
    catch(error){
        return error.message
    }
 }


 export const forgotPasswordLinkService = async(forgotpasswrodLinkData)=>{
    try{
        console.log(forgotpasswrodLinkData);
        const res = await axios.post(`${BASE_URL}resetpasswordtoken`, forgotpasswrodLinkData);
        if(res.data.success === true) {
            console.log("lll")
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
        console.log(res.data);
        return res.data;
    }
    catch(error){
        return error.message
    }
 }

 export const changePasswordService = async(changePasswordData , value)=>{
    try{
        console.log(`${BASE_URL}/resetpassword/${value.id}`);

        const res = await axios.post(`${BASE_URL}resetpassword/${value.id}`, changePasswordData); 
        if(res.data.success === true) {
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
        return res.data;
    }
    catch(error){ 
        return error.message
    }
 }