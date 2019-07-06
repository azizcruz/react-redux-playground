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
      newState.num -= 1;
      break;
    default:
      return newState;
  }

  return newState;
};

export default reducer;
