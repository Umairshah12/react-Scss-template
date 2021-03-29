import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="container">
        {/* alert dailogs */}
        {/* <div className="alert alert-danger">Invalid Credentials!</div> */}
        <h1 className="x-large text-primary">Login</h1>

        <p className="lead link-color">
          <i className="fas fa-user icon-m"></i>
          Login to Your Account!
        </p>
        <form className="form">
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
            <p className="form-text">Please fill the correct Email !</p>
          </div>

          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
          <p className="my-1 link-color">
            Don't have an Account? <Link to="/Register">Register</Link>
          </p>
        </form>
      </section>
    </>
  );
}

export default Login;
