import React, { useEffect, useState, useContext } from "react";
import RequestsContext from "../../../context/requests/requestsContext";

function Requests() {
  const [filtered, setFiltered] = useState("pending");
  const { state, getRequestsAll, approveRequest, rejectRequest } =
    useContext(RequestsContext);
  useEffect(() => {
    getRequestsAll();
    console.log(state);
    // eslint-disable-next-line
  }, [state.loading]);

  const filter = (e) => {
    console.log(e.target.value);
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

  return (
    <div>
      <div class="row mb-3">
        <div class="col">
          <label for="image" class="form-label text-white fw-semibold">
            Image
          </label>
          <select
            class="form-select"
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
      {state.requests.length > 0 ? (
        <div>
          {state.requests.map((item) => (
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
                    {item.status === "pending" ? (
                      <div className="col-md-3 me-5 text-center my-2">
                        <button
                          onClick={() => approve(item._id)}
                          className="btn btn-success"
                        >
                          Approve
                        </button>
                      </div>
                    ) : (
                      <div className="col-md-3 me-5 text-center my-2">
                        <button className="btn btn-success disabled">
                          Approved
                        </button>
                      </div>
                    )}

                    <div className="col-md-3 text-center my-2">
                      <button
                        onClick={() => reject(item._id)}
                        className={`btn btn-danger ${
                          item.status === "pending" ? "" : "disabled"
                        }`}
                      >
                        Reject
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
