import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CreateRestService from '../components/CreateRestService'
const TopNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      style={{ marginBottom: "100px" }}
    >

      <a className="navbar-brand" href="/">
        Service Catalog
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="status" className="btn btn-light"

            >
              סטטוס הקמת שירות
              </Link>
          </li>
          <li className="nav-item">
            <CreateRestService />

            <button
              data-toggle="modal"
              data-target="#CreateRestService"

              className="btn btn-light">
              REST חשיפת שירות
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-light">
              SOAP חשיפת שירות
              </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;