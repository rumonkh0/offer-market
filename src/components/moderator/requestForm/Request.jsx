import React, { useState, useContext } from "react";
import RequestsContext from "../../../context/requests/requestsContext";
import { useAuth } from "../../../context/auth/AuthState";

function Request() {
  const [formData, setFormData] = useState({});
  const [authState] = useAuth();
  const { user } = authState;
  const { state, getRequests, createRequest } = useContext(RequestsContext);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formData.createdBy = user._id;
    formData.category = formData.categoryp.split(",");
    // console.log(formData);
    createRequest(formData);
  };

  return (
    <div className="formContainer" onSubmit={onSubmit}>
      <div className="container vh-100 p-5">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="name" className="form-label text-white fw-semibold">
              Name
            </label>
            <input
              type="email"
              onChange={onChange}
              name="name"
              className="form-control"
              id="name"
              placeholder="name"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="details"
              className="form-label text-white fw-semibold"
            >
              Deatails
            </label>
            <textarea
              className="form-control"
              onChange={onChange}
              name="details"
              id="details"
              rows="3"
              placeholder="deatails"
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              image
            </label>
            <input
              type="email"
              onChange={onChange}
              name="image"
              className="form-control"
              id="price"
              placeholder="image"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              URL
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="URL"
              onChange={onChange}
              name="url"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              Category
            </label>
            <input
              type="text"
              onChange={onChange}
              name="categoryp"
              className="form-control"
              id="price"
              placeholder="category"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              Offer Tag
            </label>
            <input
              type="email"
              onChange={onChange}
              name="offer_tag"
              className="form-control"
              id="price"
              placeholder="offer_tag"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              Regular Price
            </label>
            <input
              type="email"
              onChange={onChange}
              name="regular_price"
              className="form-control"
              id="price"
              placeholder="Regular price"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              Offer price
            </label>
            <input
              type="email"
              onChange={onChange}
              name="offer_price"
              className="form-control"
              id="price"
              placeholder="Offer price"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              Price
            </label>
            <input
              type="email"
              onChange={onChange}
              name="off"
              className="form-control"
              id="price"
              placeholder="off %"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              Free shipping
            </label>
            <input
              type="email"
              onChange={onChange}
              name="free_shipping"
              className="form-control"
              id="price"
              placeholder="free shipping"
            />
          </div>
        </div>

        {/* <div className="row mb-3">
          <div className="col">
            <label htmlFor="image" className="form-label text-white fw-semibold">
              Image
            </label>
            <select
              className="form-select"
              id="image"
              aria-label="Default select example"
            >
              <option selected>Select</option>
              <option value="1">One</option>
              <option value="2">two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div> */}

        <div className="row mb-3 text-center">
          <div className="col d-grid gap-2">
            <button onClick={onSubmit} className="btn btn-primary fw-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
