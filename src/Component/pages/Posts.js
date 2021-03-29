import React from "react";
import { Link } from "react-router-dom";
import { PostsData } from "../pages/Arrays";

function Posts() {
  return (
    <>
      <section className="container">
        <h2 className="x-large text-primary">Posts</h2>

        <p className="lead link-color">
          <i className="fas fa-user icon-m"></i>
          Welcome to the Community!
        </p>

        <div className="post-form">
          <div className="post-form-header bg-primary p-1">
            <h4>Say Something!</h4>
          </div>
          <form className="form my-1">
            <textarea
              cols="30"
              rows="5"
              placeholder="Make Post Here..."
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="btn btn-dark my-1"
            ></input>
          </form>

          <div className="posts">
            {PostsData.map((post, key) => {
              return (
                <div className="post bg-white my-1 p-1" key={key}>
                  <div>
                    <Link to={`singlPost/${post.id}`}>
                      <img src={post.UserImg} className="round-img" />
                    </Link>
                    <h4>{post.userName}</h4>
                  </div>

                  <div>
                    <p className="my-1">{post.description}</p>
                    <button className="btn">
                      <i className="fas fa-thumbs-up">
                        <span className="ml-1">{post.thumbsUp}</span>
                      </i>
                    </button>
                    <button className="btn">
                      <i className="fas fa-thumbs-down"></i>
                    </button>
                    <Link
                      to={`singlPost/${post.id}`}
                      className="btn btn-primary"
                    >
                      Discussion
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Posts;
