import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./components/layout/Index";
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import Home from "./pages/Home";
import Error from "./pages/Error";
import Group from "./pages/Group";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="/group" element={<Group />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
