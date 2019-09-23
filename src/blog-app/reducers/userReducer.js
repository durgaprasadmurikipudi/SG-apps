export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER_BY_ID":
      return [...state, action.payload];
    default:
      return state;
  }
};
