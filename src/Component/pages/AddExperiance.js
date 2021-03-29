import React from "react";
import { Link } from "react-router-dom";

function AddExperiance() {
  return (
    <>
      <section className="container">
        <h1 className="x-large text-primary">Add an Experiance</h1>
        <p className="lead link-color">
          <i className="fab fa-black-tie icon-m"></i>
          Add any developer/programming postions that you had in the past!
        </p>
        <small>* Required Fields</small>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Job Title"
              name="jobTitle"
              required
            />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Company" name="company" required />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              required
            />
          </div>

          <div className="form-group">
            <h4>From Date</h4>
            <input type="date" name="from" required />
          </div>

          <div className="form-group">
            <h4>To Date</h4>
            <input type="date" name="to" required />
          </div>

          <div className="form-group">
            <p>
              <input
                type="checkbox"
                className="icon-m"
                name="current"
                value=""
              />
              Current Job
            </p>
          </div>

          <div className="form-group">
            <textarea
              placeholder="Job Description"
              name="Jobdescription"
              cols="30"
              rows="5"
            ></textarea>
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

export default AddExperiance;
