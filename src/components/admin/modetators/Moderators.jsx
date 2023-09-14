import React from "react";
import CreateModerator from "../createmoderator/CreateModerator";
import { Route, Routes } from "react-router-dom";

function Moderators() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CreateModerator />} />
      </Routes>
    </div>
  );
}

export default Moderators;
