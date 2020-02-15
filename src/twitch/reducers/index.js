import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import streamsReducer from './streamReducers';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
});