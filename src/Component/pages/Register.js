import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <section className="container">
        {/* alert dailogs */}
        {/* <div className="alert alert-danger">Invalid Credentials!</div> */}
        <h1 className="x-large text-primary">Sign Up</h1>
        <p className="lead link-color">
          <i className="fas fa-user icon-m"></i>
          Create Your Account!
        </p>
        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
            <p className="form-text">Please fill the correct Email !</p>
          </div>

          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Register" />
          </div>
          <p className="my-1 link-color">
            Already have an Account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </>
  );
}

export default Register;
