import React, { useEffect, useState, useContext } from "react";
import RequestsContext from "../../../context/requests/requestsContext";

function Requests() {
  const [filtered, setFiltered] = useState("pending");
  const { state, getRequestsAll, approveRequest, rejectRequest } =
    useContext(RequestsContext);
  useEffect(() => {
    getRequestsAll();
    // eslint-disable-next-line
  }, [state.loading]);

  const filter = (e) => {
    setFiltered(e.target.value);
  };

  const approve = (id) => {
    approveRequest(id);
  };

  const reject = (id) => {
    rejectRequest(id);
  };

  if (state.loading) {
    return <div>loading</div>;
  }

  var requests = state.requests;
  if (filtered === "pending") requests = state.filtered;

  return (
    <div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="image" className="form-label text-white fw-semibold">
            Image
          </label>
          <select
            className="form-select"
            id="image"
            value={filtered}
            onChange={filter}
            aria-label="Default select example"
          >
            <option value="pending">pending</option>
            <option value="all">all</option>
          </select>
        </div>
      </div>
      {requests.length > 0 ? (
        <div>
          {requests.map((item) => (
            <div key={item._id} className="container-fulid">
              <div className="row m-2 p-3">
                <div className="col-lg-3">
                  <p className="text-color fs-5 text-center my-2 py-1">
                    {item.name}
                  </p>
                </div>

                <div className="col-lg-3">
                  <p className="text-color fs-5 text-center my-2 py-1">
                    {new Date(item.requestedAt).toLocaleDateString("en-GB")}
                  </p>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-3 me-5 text-center my-2">
                      <button className="btn btn-primary">details</button>
                    </div>

                    <div className="col-md-3 me-5 text-center my-2">
                      <button onClick={() => approve(item._id)} className={`btn btn-success ${
                          item.status === "pending" ? "" : "disabled"
                        }`}>
                        {item.status === "approved" ? "approved" : "approve"}
                      </button>
                    </div>

                    <div className="col-md-3 text-center my-2">
                      <button
                        onClick={() => reject(item._id)}
                        className={`btn btn-danger ${
                          item.status === "pending" ? "" : "disabled"
                        }`}
                      >
                        {item.status === "rejected" ? "rejected" : "reject"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>no item</div>
      )}
    </div>
  );
}

export default Requests;
