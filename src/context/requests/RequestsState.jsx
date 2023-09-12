import React from "react";
import RequestsContext from "./requestsContext";
import requestsReducer from "./requestsReducer";
import { CREATE_REQUEST } from "../types";

const RequestsState = (props) => {
  const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(requestsReducer, initialState);
  return (
    <RequestsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </RequestsContext.Provider>
  );
};

export default RequestsState;
