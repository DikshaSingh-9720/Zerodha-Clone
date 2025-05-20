import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";


const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) => {
  toast.success(msg);
};

const handleError = (msg) => {
  toast.error(msg);
};

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form submitted");
  try {
    const res = await axios.post(
      "https://zerodha-clone-backend-i5le.onrender.com/login",
      { email, password },
      { withCredentials: true }
    );

    if (res.data.status) {
      handleSuccess("Login successful!");
      localStorage.setItem("authToken", res.data.token);
      setTimeout(() => {
        window.location.href = "https://zerodha-clone-kappa-ivory.vercel.app//dashboard";
      }, 1000);
    } else {
      handleError(res.data.message || "Invalid credentials");
    }


    setInputValue({ email: "", password: "" });
  } catch (err) {
    handleError("Something went wrong. Try again!");
    console.error(err);
  }
};

  return (
    <div className="form_container">
      <img src="\media\images\logo (3).png" alt="kiteimg" style={{height:"50px" ,width:"100px"}} />
      <h2 className="mt-4">Login to Kite</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            autoComplete=""            
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            autoComplete=""
          />
        </div>
        <button type="submit" style={{backgroundColor:"#DD571c"}}>Login</button>
        <span>
          Don't have an account? <Link to={"/signup"} style={{color:"#DD571c"}}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;