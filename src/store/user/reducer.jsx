// Set initial state
const initialState = {
  users: [],
  userDetails: {},
  transactionDetails: [],
  getNotification:[]
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
    case "SAVE_ALL_TRANSACTIONS": {
      return { ...state, transactionDetails: action.data.data };
    }
    case"GET_NOTOFICATION":{
      return { ...state, getNotification: action.data.data };
    }

    default:
      return state;
  }

}
