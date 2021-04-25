import * as actionTypes from "../actions";

const initialState = {
  results: []
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.payload })
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter(
        (result) => result.id !== action.payload
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default resultsReducer;
