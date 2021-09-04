import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "./constants";
//5. Set up the initial state for the search field
const initialStateSearch = {
  searchField: "",
};
//6. Set up a reducer function to handle the incoming function. We usually use switch statement to handle the incoming function
// When the incoming action match the case, we return a new state
export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
//7. Set up the initial state of the ajax call
const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};
//8. Set up the reducer function to handle the ajax call action
export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };

    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };

    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };

    default:
      return state;
  }
};
