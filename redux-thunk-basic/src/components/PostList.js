import React, { useEffect } from "react";
import { fetchUserAndPost } from "../actions";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";

const PostList = (props) => {
  useEffect(() => {
    props.fetchUserAndPost();
  }, []);

  const renderList = props.posts.map((post) => {
    return (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user"></i>
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <UserHeader id={post.userId} />
          </div>
        </div>
      </div>
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchUserAndPost })(PostList);