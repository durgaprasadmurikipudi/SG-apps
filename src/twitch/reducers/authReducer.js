const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action = {}) => {
  const { type, payload: userId } = action;
  switch(type) {
    case 'SIGN_IN':
      return { isSignedIn: true, userId };
    case 'SIGN_OUT':
      return { isSignedIn: false };
    default:
      return state;
  }
}