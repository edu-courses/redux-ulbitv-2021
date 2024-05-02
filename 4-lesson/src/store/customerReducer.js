const defaultState = {
  customers: []
};

export const customerReducer = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_CASTOMER": 
      return {...state, cash: state.cash + action.payload};
    case "GET_CASTOMERS":
      return {...state, cash: state.cash - action.payload};
    default: return state; 
  }
}
