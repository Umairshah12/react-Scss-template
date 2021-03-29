import React from "react";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <div className="button">
              <Link to="/Register" className="btn btn-primary">
                Sign Up
              </Link>

              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainLayout;
