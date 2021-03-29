import React from "react";
import { Link } from "react-router-dom";

function CreateProfile() {
  return (
    <>
      <section className="container">
        <h1 className="x-large text-primary">Create Profile</h1>
        <p className="lead link-color">
          <i className="fas fa-user icon-m"></i>
          Create Your Profile!
        </p>
        <small>* Required Fields</small>
        <form className="form">
          <div className="form-group">
            <select name="status">
              <option value="0">* Select Professional Status</option>
              <option value="developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student of Learning">Student of Learning</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company Name" required />
            <small className="form-text">
              Could be your own Company or one you working for!
            </small>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Website Name" required />
            <small className="form-text">
              Could be your own Company or Company Website!
            </small>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Location" required />
            <small className="form-text">City & State Suggested!</small>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Skills" required />
            <small className="form-text">
              Please Use comma Seperated Values!
            </small>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Github UserName" required />
            <small className="form-text">Put Your github repo!</small>
          </div>

          <div className="form-group">
            <textarea placeholder="A short bio of Yourself"></textarea>
            {/* <input type="text" placeholder="Github UserName" required /> */}
            <small className="form-text">Put Your github repo!</small>
          </div>
          <div className="my-2">
            <button type="button" className="btn btn-light">
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>
          <div className="form-group social-inputs">
            <i className="fab fa-twitter fa-2x"></i>
            <input
              type="text"
              placeholder="Twitter Link"
              name="twitter"
              required
            />
          </div>

          <div className="form-group social-inputs">
            <i className="fab fa-facebook fa-2x"></i>
            <input
              type="text"
              placeholder="Facebook Link"
              name="facebook"
              required
            />
          </div>

          <div className="form-group social-inputs">
            <i className="fab fa-youtube fa-2x"></i>
            <input
              type="text"
              placeholder="Youtube Link"
              name="Youtube"
              required
            />
          </div>
          <div className="form-group social-inputs">
            <i className="fab fa-linkedin fa-2x"></i>
            <input
              type="text"
              placeholder="LinkdIn Link"
              name="LinkdIn"
              required
            />
          </div>

          <div className="form-group social-inputs">
            <i class="fab fa-instagram fa-2x"></i>
            <input
              type="text"
              placeholder="Instagram Link"
              name="instagram"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            ></input>
            <Link to="/dashboard" className="btn btn-light my-1">
              Go Back
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default CreateProfile;
