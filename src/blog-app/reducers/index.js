import { combineReducers } from "redux";
import postsReducer from './postsReducer';
import usersReducer from './userReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
