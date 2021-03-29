import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code mr-1"></i>
            DevCommunity
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/developers">Developers</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/dashboard">
              <i className="fas fa-user  mr-1"></i>
              <span className="hide-sm">Dashboard</span>
            </Link>
          </li>

          {/* <li>
            <Link to="/">
              <i className="fas fa-sign-out-alt  mr-1"></i>
              <span className="hide-sm">Logout</span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
