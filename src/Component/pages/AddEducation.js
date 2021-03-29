import React from "react";
import { Link } from "react-router-dom";

function AddExperiance() {
  return (
    <>
      <section className="container">
        <h1 className="x-large text-primary">Add Your Education</h1>
        <p className="lead link-color">
          <i className="fas fa-graduation-cap icon-m"></i>
          Add any schoool, bootcamp etc that you have attended
        </p>
        <small>* Required Fields</small>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Field of Study"
              name="study"
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
              Current School
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
