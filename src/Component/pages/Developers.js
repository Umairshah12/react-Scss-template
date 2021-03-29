import React from "react";
import { Link } from "react-router-dom";
import { UserProfiles } from "../pages/Arrays";

function Developers() {
  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Developers</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop icon-m"></i>Browse and Connect
          With Developers!
        </p>
        {UserProfiles.map((users, userIndex) => {
          return (
            <div key={userIndex}>
              <div className="profiles bg-light ">
                <div className="profile">
                  <img src={users.userimg} className="round-img" />
                </div>
                <div>
                  <h2 className="large">{users.userName}</h2>
                  <p className="lead">{users.post}</p>
                  <p className="lead">{users.address}</p>
                  <Link
                    to={`/singleUserProfile/${users.id}`}
                    className="btn btn-primary"
                  >
                    Profile
                  </Link>
                </div>

                <ul>
                  {users.coarses.map((coarse, index) => {
                    return (
                      <div key={index}>
                        <li className="text-primary">
                          <i className="fas fa-check icon-m"></i>
                          {coarse}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Developers;
