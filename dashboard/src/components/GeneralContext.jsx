import React, { useState } from "react";
import {BuyActionWindow} from "./BuyActionWindow.jsx";

export const GeneralContext = React.createContext({
  openBuyWindow: (uid,mode) => {},
  closeBuyWindow: () => {}
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedMode, setSelectedMode] = useState("BUY"); 
  
  const handleOpenBuyWindow = (uid,mode) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedMode(mode);
  };

  
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedMode("BUY"); 
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={selectedMode}/>}
    </GeneralContext.Provider>
  );
};

