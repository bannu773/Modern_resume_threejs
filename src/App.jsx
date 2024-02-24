import { BrowserRouter, Route,Routes } from "react-router-dom";

import Land from "./components/Land";
import Login from "./components/login/Login";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import Chatbot from "./components/features/chatbot/Chatbot";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/signIn" element ={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
