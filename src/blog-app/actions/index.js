import JSONAPI from "../API/PlaceHolderJSONAPI";
import _ from "lodash";

export const fetchPosts = () => {
  console.log("Fetching posts..");
  return async dispatch => {
    const response = await JSONAPI.get("/posts");
    console.log("Response:", response);
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

const _fetchuser = _.memoize(async (id, dispatch) => {
  console.log('fectching request for user');
  const response = await JSONAPI.get(`users/${id}`);
  dispatch({ type: "FETCH_USER_BY_ID", payload: response.data });
});

export const fetchUser = id => {
  return dispatch => _fetchuser(id, dispatch);
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = [ ...new Set(getState().posts.map( post => post.userId))];
  console.log(userIds);
  userIds.forEach( userId => dispatch(fetchUser(userId))) ;
}
