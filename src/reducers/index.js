const intialState = {};

const loginReducer = (isLogged = false, action) => {
  switch (action.type) {
    case 'SING_IN':
      return {
        isLogged: !isLogged,
        data: action.payload,
      };
    default:
      return isLogged;
  }
};

export default loginReducer;
