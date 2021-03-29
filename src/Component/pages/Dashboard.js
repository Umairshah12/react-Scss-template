import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <section className="container">
        <h1 className="x-large text-primary">Dashboard</h1>

        <p className="lead link-color">
          <i className="fas fa-user icon-m"></i>
          Welcome John Doa!
        </p>
        <div className="dash-buttons">
          <Link to="/createProfile" className="btn dash-btn">
            <i className="fas fa-user-circle text-primary dash-btn"></i>
            Edit Profile
          </Link>

          <Link to="/addExperiance" className="btn dash-btn ">
            <i className="fab fa-black-tie text-primary dash-btn"></i>
            Add Experiance
          </Link>

          <Link to="/addEducation" className="btn dash-btn">
            <i className="fas fa-graduation-cap text-primary dash-btn"></i>
            Add Education
          </Link>
        </div>

        <h2 className="my-2">Experiance Credentials!</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hide-sm">Title</th>
              <th className="hide-sm">Year</th>
              <th className="hide-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Microsoft</td>
              <td className="hide-sm">Senior Developer</td>
              <td className="hide-sm">Oct-2019</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Sun Microsystem Senior</td>
              <td className="hide-sm">System Engineer</td>
              <td className="hide-sm">March-1999</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="my-2">Educational Credentials!</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Schoole</th>
              <th className="hide-sm">Degree</th>
              <th className="hide-sm">Year</th>
              <th className="hide-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New York</td>
              <td className="hide-sm">Masters</td>
              <td className="hide-sm">Oct-2019</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-2">
          <button className="btn btn-danger">
            <i className="fas fa-user-minus mr-1"></i>
            Delete My Account
          </button>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
