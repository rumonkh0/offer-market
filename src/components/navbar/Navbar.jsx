import React from "react";
import "./style1.css";

function Navbar() {
  return (
    <body>
      <input type="checkbox" id="check" />
      <nav className="nav">
        <div className="first-container" id="brand-title">
          <h1>
            <a href="/#">Brand</a>
          </h1>
        </div>
        <div className="first-container" id="search-box">
          <form method="get">
            <input type="search" className="text" />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
        <label htmlFor="check" className="bar">
          <span className="fa fa-bars" id="bars"></span>
          <span className="fa fa-times" id="times"></span>
        </label>
      </nav>

      {/* <!-- menu section --> */}
      <div id="menu-section">
        <ul id="menu">
          <li>
            <a href="/#">Categories</a>
          </li>
          <li>
            <a href="/#">Brands</a>
          </li>
          <li>
            <a href="/#">Today's Deal</a>
          </li>
          <li>
            <a href="/#">Help</a>
          </li>
        </ul>
      </div>
    </body>
  );
}
{
  /* return (
    <div><input type="checkbox" id="check" />
    <nav>
      <div className="icon">Brand</div>
      <div className="search_box">
        <input type="search" placeholder="Search your brand" />
        <button type="submit" className="search-button">Search</button>
      </div>
      <ul>
        <li>
          <a href="/#">Categories </a>
          <ul>
            <li><a href="/#"> Fashion </a></li>
            <li><a href="/#"> Elecetronics </a></li>
          </ul>
        </li>
        <li><a href="/#">Brands</a></li>
        <li><a href="/#">Today's deal </a></li>
        <li><a href="/#">Help</a></li>
      </ul>
      <label htmlFor="check" className="bar">
        <span className="fa fa-bars" id="bars"></span>
        <span className="fa fa-times" id="times"></span>
      </label>
    </nav></div>
  ) */
}
export default Navbar;


