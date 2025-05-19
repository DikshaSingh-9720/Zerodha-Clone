import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Funds } from "./Funds.jsx";
import { Holdings } from "./Holdings.jsx";
import { Orders } from "./Orders.jsx";
import { Positions } from "./Positions.jsx";
import { Summary } from "./Summary.jsx";
import { WatchList } from "./WatchList.jsx";
import { Apps } from "./Apps.jsx";
import { Routes, Route } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext.jsx";

export const Dashboard = () => {
  const navigate = useNavigate();

  const verifyUser = async () => {
    try {
      const res = await axios.post("http://localhost:3000/", {}, { withCredentials: true });
      if (!res.data.status) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    verifyUser();
  }, []); 

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};
