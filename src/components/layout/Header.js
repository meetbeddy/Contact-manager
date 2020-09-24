import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.message}
        </a>
        <div>
          <ul className="navbar-nav mr-auto ">
            <li
              className="nav-item  "
              style={{ cursor: "pointer", color: "red", float: "right" }}
            >
              <Link to="/">
                {" "}
                <i className="fas fa-home"></i>Home{" "}
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to="/about">
                {" "}
                <i className="fas fa-question"></i>
                About{" "}
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to="/contact/add">
                {" "}
                <i className="fas fa-plus"></i>
                Add{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
