import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./moderatornav/Nav";
import Request from "./requestForm/Request";
import Requests from "./requests/Requests";
import Products from "./products/Products";

function Moderatorh() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/createrequest" element={<Request />}></Route>
        <Route path="/requests" element={<Requests />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default Moderatorh;
