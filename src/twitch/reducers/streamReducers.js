import { CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM,
} from '../actions/';

function getKeysMapObj(streamsArray = []) {
  let returnObj = {};
  streamsArray.forEach(element => {
    returnObj[element.id] = element;
  });
  return returnObj;
}

export default (state = {}, action = {}) => {
  let newState = {};
  switch(action.type) {
    case FETCH_STREAM:
    case CREATE_STREAM:
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      newState = {...state};
      delete newState[action.payload];
      return newState; 
    case FETCH_STREAMS:
      return {...state, ...(getKeysMapObj(action.payload)) };
    default:
      return state;
  }
};