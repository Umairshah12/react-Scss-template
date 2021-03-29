import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostsData } from "../pages/Arrays";

function SinglePost() {
  const [singlePostData, setSinglePostData] = useState();
  const { userId } = useParams();

  useEffect(() => {
    const res = PostsData.find((item) => item.id == userId);
    setSinglePostData(res);
  }, []);

  return (
    <section className="container">
      <div className="profile-grid my-1">
        <div className="profile-top bg-primary p-2">
          <div>
            <img
              src={singlePostData && singlePostData.UserImg}
              alt="user-image"
              className="round-img"
            />
            <h4>{singlePostData && singlePostData.userName}</h4>
            <p className="my-1">
              {singlePostData && singlePostData.description}
            </p>
            <button className="btn">
              <i className="fas fa-thumbs-up">
                <span>{singlePostData && singlePostData.thumbsUp}</span>
              </i>
            </button>
            <button className="btn">
              <i className="fas fa-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>

      <form className="form my-1">
        <textarea
          cols="30"
          rows="5"
          placeholder="Post Comment Here..."
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="btn btn-dark my-1"
        ></input>

        <Link to="/posts" className="btn btn-success my-1">
          Back to Posts
        </Link>
      </form>
    </section>
  );
}

export default SinglePost;
