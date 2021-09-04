//2. import the variables from the constants,js
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";
//3. Set up the action function. Below is how a action function looks. It returns the action type and action payload.
// The action type is normally upper cased
export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};
//4. This is a action that handle ajax call. Remember it needs to return a function instead of object
//For a Ajax call, we normally have 3 states. Ajax call pending, Ajax call success & Ajax call fail
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
