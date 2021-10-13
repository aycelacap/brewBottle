import * as APIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

// action creator POJOS

const receiveCurrentUser = (currentUser) => {
    return {
      type: RECEIVE_CURRENT_USER,
      currentUser
    };
};

const logoutCurrentUser = () => {
    return {
      type: LOGOUT_CURRENT_USER
    };
};

// errors is an object
const receiveErrors = (errors) => {
    return {
      type: RECEIVE_SESSION_ERRORS,
      errors // [invalid info, try again] // null
    };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}



// export const signup = (user) => dispatch => {
//     return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(currentUser)))
// }

// export const login = (user) => dispatch => {
//     return APIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)));
// }

// export const logoutCurrentUser = () => dispatch => {
//     return APIUtil.logout().then((currentUser) => dispatch(logoutCurrentUser(currentUser)))
// }

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  APIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  APIUtil.logout().then((user) => dispatch(logoutCurrentUser()));



