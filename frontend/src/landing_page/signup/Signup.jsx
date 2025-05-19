import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./signup.css";

const Signup = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      // const { success, message } = data;
      if (data.status) {
        handleSuccess("User signed up successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(res.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });

  };

  return (
    <div className="signup">
      <h1 className="mt-5 text-center">
        Open a free demat and trading account online
      </h1>
      <p className="mb-5 p-3">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>
      <div className="signupPart1">
        <div className="col-6">
          <img src="\media\images\account_open.svg" />
        </div>
        <div className="col-6">
          <h2 className="mb-3 mt-2">Signup now</h2>
          <p className="mb-3">Or track your existing application</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="email">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
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
              />
            </div>
            <button type="submit" className="mt-4 btn btn-primary">Signup</button>            
            <br />
            <span>
              Already have an account? <Link to={"/login"} style={{textDecoration:"none"}}>Login</Link>
            </span>
          <p className="mt-4" style={{ fontSize: "13px" }}>
            By proceeding, you agree to the Zerodha terms & privacy policy
          </p>
          </form>

        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;
