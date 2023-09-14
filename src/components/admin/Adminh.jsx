import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./adminnav/Nav";
import Moderators from "./modetators/Moderators";
import Requests from "./requests/Requests";
import Products from "./products/Products";

function Adminh() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/controllers/*" element={<Moderators />}></Route>
        <Route path="/requests" element={<Requests />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default Adminh;
