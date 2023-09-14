import React, { useState } from "react";
import { createModerator, useAuth } from "../../../context/auth/AuthState";

function CreateModerator() {
  const [formData, setFormData] = useState({});
  const [, authDispatch] = useAuth();
  // const { CreateModerator } = authState;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    // formData.createdBy = user._id;
    createModerator(authDispatch, formData);
    e.preventDefault();
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
              htmlFor="price"
              className="form-label text-white fw-semibold"
            >
              Category
            </label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              className="form-control"
              id="price"
              placeholder="password"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="role" className="form-label text-white fw-semibold">
              Image
            </label>
            <select
              className="form-select"
              name="role"
              id="role"
              onChange={onChange}
              aria-label="Default select example"
            >
              <option defaultValue="select">Select</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>
        </div>

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

export default CreateModerator;
