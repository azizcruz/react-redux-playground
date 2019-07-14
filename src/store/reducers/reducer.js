const initState = {
  num: 0
};

const reducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "increaseNum":
      return {
        newState,
        num: newState.num + 1
      };
    case "decreaseNum":
      return {
        newState,
        num: newState.num - 1
      };
    default:
      return newState;
  }
};

export default reducer;
