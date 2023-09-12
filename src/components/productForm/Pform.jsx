import React from "react";

function Pform() {
  return (
    <div class="formContainer">
      <div class="container vh-100 p-5">
        <div class="row mb-3">
          <div class="col">
            <label for="name" class="form-label text-white fw-semibold">
              Name
            </label>
            <input
              type="email"
              class="form-control"
              id="name"
              placeholder="name"
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label for="details" class="form-label text-white fw-semibold">
              Deatails
            </label>
            <textarea
              class="form-control"
              id="details"
              rows="3"
              placeholder="deatails"
            ></textarea>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label for="price" class="form-label text-white fw-semibold">
              Price
            </label>
            <input
              type="email"
              class="form-control"
              id="price"
              placeholder="price"
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label for="image" class="form-label text-white fw-semibold">
              Image
            </label>
            <select
              class="form-select"
              id="image"
              aria-label="Default select example"
            >
              <option selected>Select</option>
              <option value="1">One</option>
              <option value="2">two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div class="row mb-3 text-center">
          <div class="col d-grid gap-2">
            <button class="btn btn-primary fw-semibold">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pform;
