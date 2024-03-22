import { BrowserRouter, Route,Routes } from "react-router-dom";

import Land from "./components/Land";
import Login from "./components/login/Login";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import Chatbot from "./components/features/chatbot/Chatbot";
import Animated_LogIn_up from "./components/login/Animated_Login_up";



const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/signIn" element ={<Animated_LogIn_up />} />

        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
