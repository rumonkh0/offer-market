import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="in-br-pa">
          <h3>Contract With Us</h3>
          <ul>
            <li>
              <a href="/#"> Faccebook </a>
            </li>
            <li>
              <a href="/#"> Instagram </a>
            </li>
            <li>
              <a href="/#"> Whatsapp </a>
            </li>
            <li>
              <a href="/#"> Linked In </a>
            </li>
          </ul>
        </div>
        <div className="in-br-pa">
          <h3>Popular Brands & Stores</h3>
          <div className="in-br-pa-x">
            <ul>
              <li>
                <a href="/#"> Twelve </a>
              </li>
              <li>
                <a href="/#"> Infinity </a>
              </li>
              <li>
                <a href="/#"> Easy </a>
              </li>
              <li>
                <a href="/#"> Richman </a>
              </li>
              <li>
                <a href="/#"> Kay Kraft </a>
              </li>
              <li>
                <a href="/#"> Sara </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/#"> Apex</a>
              </li>
              <li>
                <a href="/#"> Bata </a>
              </li>
              <li>
                <a href="/#"> Bay </a>
              </li>
              <li>
                <a href="/#"> Lotto </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/#"> Samsung </a>
              </li>
              <li>
                <a href="/#"> Walton </a>
              </li>
              <li>
                <a href="/#"> Marcell </a>
              </li>
              <li>
                <a href="/#"> Click </a>
              </li>
              <li>
                <a href="/#"> BRB </a>
              </li>
              <li>
                <a href="/#"> Vision </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="in-br-pa">
          <h3> Payment Method </h3>
          <ul>
            <li> Bkash </li>
            <li> Rocket</li>
            <li> Nogod </li>
          </ul>
        </div> */}
      </div>
      <p className="copyRight">© 2023 Rummon&Afique</p>
    </footer>
  );
}

export default Footer;
