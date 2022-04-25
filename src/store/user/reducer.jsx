// Set initial state
const initialState = {
  
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "SIGNIN": {
 
            return {
              
              ...state,
             logindata :action.data
            };
            
          }
    default:
      return state;
  }
}
