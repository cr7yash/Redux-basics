const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat(state.counter)
      };
    // case "DELETE_RESULT":
    //   return {
    //     ...state,
    //     results: state.results.remove(state.counter)

    //   };

    default:
      return state;
  }
};

export default reducer;
