import React, { useReducer, useContext } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  SET_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

// Create a custom hook to use the auth context

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return [state, dispatch];
};

const setLoading = (dispatch) => dispatch({ type: SET_LOADING });

// // Load User
export const loadUser = async (dispatch) => {
  try {
    const res = await axios.get("/auth/me");

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
  }
};

// Register User
// export const register = async (dispatch, formData) => {
//   try {
//     const res = await axios.post("/api/users", formData);

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data,
//     });

//     loadUser(dispatch);
//   } catch (err) {
//     dispatch({
//       type: REGISTER_FAIL,
//       payload: err.response.data.msg,
//     });
//   }
// };

// Login User
export const login = async (dispatch, formData) => {
  try {
    const res = await axios.post("/auth/login", formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    setLoading(dispatch);
    loadUser(dispatch);
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// Logout
export const logout = (dispatch) => {
  dispatch({ type: LOGOUT });
};

// Clear Errors
// export const clearErrors = (dispatch) => dispatch({ type: CLEAR_ERRORS });

// AuthState Provider Component

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // loadUser(dispatch);
  // load user on first run or refresh
  if (state.loading) {
    loadUser(dispatch);
  }

  return (
    <AuthContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
