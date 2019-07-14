export const btnUpAsync = () => {
  return { type: "increaseNum" };
};

export const btnUp = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(btnUpAsync());
    }, 2000);
  };
};

export const btnDown = () => {
  return { type: "decreaseNum" };
};
