// == Initial State
const initialState = {
  message: 'Hello',
};

// == Types
export const FETCH_DATA = 'FETCH_DATA';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchData = () => ({
  type: FETCH_DATA,
});


// == Selectors


// == Export
export default reducer;
