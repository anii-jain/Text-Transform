import React from "react";
import "./navbar.css";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h4>{props.title}</h4>
        </a>

        
        <div className= {`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toogleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end text-bg-${props.mode}`}
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h4 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Utilities
            </h4>
            <button
              type="button"
              className={`btn-close btn-close-${props.mode==='light'?'dark':'white'}`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <h5>Home</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <h5>About</h5>
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
            </ul>
            <form className="searchIt" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success mybtn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Set Title Here",
};
