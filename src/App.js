import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./components/Main";
import Payment from "./components/Payment";
import SelectedItems from "./components/SelectedItems";

const App = () => {
  return (
    <BrowserRouter basename={"/"}>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/payment" element={<SelectedItems/>}/>
      <Route path="/cart" element={<Payment/>}/>
    </Routes>
    </BrowserRouter>
  )
};

export default App;