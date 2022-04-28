// Set initial state
const initialState = {
  users: [],
  userDetails: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        logindata: action.data,
      };
    }
    case "SAVE_ALL_USERS": {
      return {
        ...state,
        users: action.data,
      };
    }
    case "SAVE_USER": {
      return { ...state, userDetails: action.data };
    }
    case "GET_TRANSACTION": {
      return { ...state, userDetails: action.data };
    }
    
    default:
      return state;
  }
}
