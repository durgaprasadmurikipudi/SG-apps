import JSONAPI from "../API/PlaceHolderJSONAPI";

export const fetchPosts = () => {
  console.log("Fetching posts..");
  return async dispatch => {
    const response = await JSONAPI.get("/posts");
    console.log("Response:", response);
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = id => {
  return async dispatch => {
    const response = await JSONAPI.get(`users/${id}`);
    dispatch({ type: "FETCH_USER_BY_ID", payload: response.data });
  };
};
