import JSONAPI from "../API/PlaceHolderJSONAPI";

export const fetchPosts = (payload) => {
  return {
    type: "FETCH_POSTS",
    payload
  };
};

export const initiateFetchPosts = () => async dispatch => {
  const response = await JSONAPI.get('/posts');

  dispatch(fetchPosts(response));
}
