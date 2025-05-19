
import { ToastContainer } from 'react-toastify';
import React from "react"; 
import ReactDOM from "react-dom/client"; 
import 'react-toastify/dist/ReactToastify.css';


import './index.css'
import { CookiesProvider } from "react-cookie";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
       <Routes>
      <Route path="/*" element = {<Home/>} ></Route>
    </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000}/>
    </CookiesProvider>
  </React.StrictMode>
);
