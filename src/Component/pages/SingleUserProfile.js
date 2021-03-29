import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserProfiles } from "../pages/Arrays";

function SingleUserProfile() {
  const { userId } = useParams();
  const [singleUserRecord, setSingleUserRecord] = useState({});

  useEffect(() => {
    const res = UserProfiles.find((item) => {
      return item.id == userId;
    });
    setSingleUserRecord(res);
  }, []);
  return (
    <>
      <section className="container">
        <Link to={`/developers`} className="btn btn-success">
          Go to Profile
        </Link>

        <div className="profile-grid my-1">
          {/* top */}
          <div className="profile-top bg-primary p-2">
            <img
              src={singleUserRecord.userimg}
              alt="user-image"
              className="round-img  my-1"
            />
            <h1 className="large">{singleUserRecord.userName}</h1>
            <p className="lead">{singleUserRecord.post}</p>
            <p>{singleUserRecord.address}</p>
            <div className="icons my-1">
              <Link to="">
                <i className="fas fa-globe fa-2x"></i>
              </Link>
              <Link to="">
                <i className="fab fa-twitter fa-2x"></i>
              </Link>

              <Link to="">
                <i className="fab fa-linkedin fa-2x"></i>
              </Link>
              <Link to="">
                <i className="fab fa-facebook fa-2x"></i>
              </Link>
            </div>
          </div>
          {/* about */}
          <div className="about-profile my-1 bg-light p-2">
            <h2 className="text-primary">{singleUserRecord.userName}</h2>
            <p>
              Es un hecho establecido hace demasiado tiempo que un lector se
              distraerá con el contenido del texto de un sitio mientras que mira
              su diseño.
            </p>
            <div className="line"></div>
            <h2 className="text-primary">Skill Set</h2>
            <div className="skills">
              {singleUserRecord.coarses &&
                singleUserRecord.coarses.map((items, index) => {
                  return (
                    <div key={index} className="p-1">
                      <i className="fas fa-check icon-m"></i>
                      {items}
                    </div>
                  );
                })}
            </div>
          </div>
          {/* Experiance */}
          <div className="exp-edu my-1">
            <div className="experiance-profile bg-white p-2">
              <h2 className="text-primary my-1">Experiances</h2>
              <div>
                <h3>Microsoft</h3>
                <p>Oct 2019 -Current</p>
                <p>
                  <strong>Position:</strong>Senior Developer
                </p>
                <p>
                  <strong>Description:</strong> Es un hecho establecido hace
                  demasiado tiempo que un lector se distraerá con e
                </p>
              </div>

              <div>
                <h3>Microsoft</h3>
                <p>Oct 2019 -Current</p>
                <p>
                  <strong> Position:</strong>Senior Developer
                </p>
                <p>
                  <strong>Description:</strong> Es un hecho establecido hace
                  demasiado tiempo que un lector se distraerá con e
                </p>
              </div>
            </div>
            {/* Education Profile */}
            <div className="education-profile bg-white p-2">
              <h2 className="text-primary my-1">Education</h2>

              <div>
                <h3>University</h3>
                <p>Sep 1999 - June 2004</p>
                <p>
                  <strong>Degree:</strong>Master
                </p>
                <p>
                  <strong>Field Of Study:</strong>Computer Science
                </p>
                <p>
                  <strong>Description:</strong> Es un hecho establecido hace
                  demasiado tiempo que un lector se distraerá con e
                </p>
              </div>
            </div>
          </div>
          {/* Github Profile */}
          <div className="github-profile ">
            <h2 className="text-primary my-2 ">
              <i className="fab fa-github icon-m"></i>
              Github Repos
            </h2>

            <div className="repo bg-white p-2 my-1">
              <div className="repo-text">
                <h4>
                  <Link to="">Repo Three</Link>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at mauris egestas, ultricies odio nec, tristique
                  felis. Aliquam ac neque efficitur massa elementum pulvinar
                </p>
              </div>

              <div className="repo-list p-1">
                <ul>
                  <li className="badge badge-primary">Stars:44</li>
                  <li className="badge badge-dark">Watchers:22</li>
                  <li className="badge badge-success">Forks:12</li>
                </ul>
              </div>
            </div>

            <div className="repo bg-white p-2 my-1">
              <div className="repo-text">
                <h4>
                  <Link to="">Repo Three</Link>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at mauris egestas, ultricies odio nec, tristique
                  felis. Aliquam ac neque efficitur massa elementum pulvinar
                </p>
              </div>

              <div className="repo-list p-1">
                <ul>
                  <li className="badge badge-primary">Stars:44</li>
                  <li className="badge badge-dark">Watchers:22</li>
                  <li className="badge badge-success">Forks:12</li>
                </ul>
              </div>
            </div>

            <div className="repo bg-white p-2 my-1">
              <div className="repo-text">
                <h4>
                  <Link to="">Repo Three</Link>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at mauris egestas, ultricies odio nec, tristique
                  felis. Aliquam ac neque efficitur massa elementum pulvinar
                </p>
              </div>

              <div className="repo-list p-1">
                <ul>
                  <li className="badge badge-primary">Stars:44</li>
                  <li className="badge badge-dark">Watchers:22</li>
                  <li className="badge badge-success">Forks:12</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleUserProfile;
