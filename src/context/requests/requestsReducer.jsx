import {
  CREATE_REQUEST,
  GET_REQUESTS,
  SET_LOADING,
  APPROVE,
  REJECT,
} from "../types";

const requestsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_REQUEST:
      return {
        ...state,
        loading: false,
        requests: [action.payload, ...state.requests],
      };
    case GET_REQUESTS:
      return {
        ...state,
        loading: false,
        requests: action.payload,
      };
    case APPROVE:
    case REJECT:
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error(`Unsupported type of: ${action.type}`);
  }
};
export default requestsReducer;
