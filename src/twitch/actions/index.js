import streams from "../apis/streams";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_STREAM = "CREATE_STREAM";
export const FETCH_STREAMS = "FETCH_STREAMS";
export const FETCH_STREAM = "FETCH_STREAM";
export const DELETE_STREAM = "DELETE_STREAM";
export const UPDATE_STREAM = "UPDATE_STREAM";

export const signIn = userId => ({ type: SIGN_IN, payload: userId });

export const signOut = () => ({ type: SIGN_OUT });

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const createdStream = await streams.post("/streams", {...formValues, userId});

  dispatch({
    type: CREATE_STREAM,
    payload: createdStream.data
  });
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  console.log('response after caling', response);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get("/stream/" + id);

  dispatch({ tpype: FETCH_STREAM, payload: response.data });
};

export const updateStream = (id, formValues) => async dispatch => {
  const response = await streams.put("/streams/" + id, formValues);

  dispatch({
    type: UPDATE_STREAM,
    payload: response.data
  });
};

export const deleteStream = id => async dispatch => {
  await streams.delete('/streams/'+id);
  
  dispatch({ type: DELETE_STREAM, payload: id});
}
