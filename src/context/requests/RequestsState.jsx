import React, { useReducer } from "react";
import axios from "axios";
import RequestsContext from "./requestsContext";
import requestsReducer from "./requestsReducer";
import {
  CREATE_REQUEST,
  GET_REQUESTS,
  SET_LOADING,
  APPROVE,
  REJECT,
} from "../types";

const RequestsState = (props) => {
  const initialState = {
    requests: [],
    loading: true,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(requestsReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const createRequest = async (formData, file) => {
    try {
      const res = await axios.post(
        "/api/requests/",
        { formData, file: file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: CREATE_REQUEST, payload: res.data });
    } catch (error) {}
  };

  const getRequests = async (controllerId) => {
    try {
      const res = await axios.get(`/api/controllers/${controllerId}/requests/`);
      dispatch({ type: GET_REQUESTS, payload: res.data.data });
    } catch (error) {}
  };

  const getRequestsAll = async () => {
    try {
      const res = await axios.get(`/api/requests/`);
      dispatch({ type: GET_REQUESTS, payload: res.data.data });
    } catch (error) {}
  };

  const approveRequest = async (requestId) => {
    try {
      await axios.put(`/api/requests/${requestId}/approve`);
      setLoading();
      getRequestsAll();
      // dispatch({ type: APPROVE });
    } catch (error) {}
  };
  const rejectRequest = async (requestId) => {
    try {
      await axios.put(`/api/requests/${requestId}/reject`);
      setLoading();
      getRequestsAll();
      // dispatch({ type: REJECT });
    } catch (error) {}
  };

  return (
    <RequestsContext.Provider
      value={{
        state,
        createRequest,
        getRequests,
        getRequestsAll,
        approveRequest,
        rejectRequest,
      }}
    >
      {props.children}
    </RequestsContext.Provider>
  );
};

export default RequestsState;
