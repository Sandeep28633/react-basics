import {
  GET_SIGN_IN,
  GET_SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./types";
import StreamsAPI from "../apis/Streams";
import history from '../history';

export const onSignIn = (gId) => {
  return {
    type: GET_SIGN_IN,
    payload: gId,
  };
};

export const onSignOut = () => {
  return {
    type: GET_SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await StreamsAPI.post("/streams", {...formValues,userId});
  dispatch({ type: CREATE_STREAM, payload: res.data });
  history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
  const res = await StreamsAPI.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const res = await StreamsAPI.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const res = await StreamsAPI.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: res.data });
  history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await StreamsAPI.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};
