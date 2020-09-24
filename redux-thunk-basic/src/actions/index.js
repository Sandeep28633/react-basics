import Post from "../api/posts";
import _ from "lodash";

export const fetchUserAndPost = () => async (dispatch, getState) => {
  await dispatch(getPost());
  const userID = _.uniq(_.map(getState().posts, "userId"));
  userID.forEach((id) => dispatch(getUser(id)));
};

export const getPost = () => {
  return async (dispatch) => {
    const { data } = await Post.get("/posts");
    dispatch({
      type: "GET_POST",
      payload: data,
    });
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    const response = await Post.get(`/users/${id}`);
    dispatch({
      type: "GET_USER",
      payload: response.data,
    });
  };
};

//one way to solve problem by using memorize lodash function

// export const getUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await Post.get(`/users/${id}`);
//   dispatch({
//     type: "GET_USER",
//     payload: response.data,
//   });
// });
