import React, { useContext, useEffect } from "react";
import RequestsContext from "../../../context/requests/requestsContext";
import { useAuth } from "../../../context/auth/AuthState";

function Requests() {
  const { state, getRequests } = useContext(RequestsContext);
  const [authState] = useAuth();
  const { user } = authState;

  useEffect(() => {
    getRequests(user._id);
    // eslint-disable-next-line
  }, []);

  console.log(state);
  if (state.loading) {
    return <div>loading</div>;
  }

  return state.requests.length > 0 ? (
    <div>
      {state.requests.map((item) => (
        <div className="container-fulid">
          <div className="row m-2 p-3">
            <div className="col-lg-3">
              <p className="text-color fs-5 text-center my-2 py-1">
                {item.name}
              </p>
            </div>

            <div className="col-lg-3">
              <p className="text-color fs-5 text-center my-2 py-1">
                {new Date(item.requestedAt).toLocaleDateString('en-GB')}
              </p>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-3 me-5 text-center my-2">
                  <button className="btn btn-primary">
                    {item.status}
                  </button>
                </div>
                {/* <div className="col-md-3 me-5 text-center my-2">
                  <button className="btn btn-success">Approve</button>
                </div>
                <div className="col-md-3 text-center my-2">
                  <button className="btn btn-danger ">Reject</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>no item</div>
  );
}

export default Requests;
