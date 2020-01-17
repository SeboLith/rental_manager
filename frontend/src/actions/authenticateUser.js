import axios from "axios";

import types from "../types";


export const authenticateUser = (user, { history }) => dispatch => {
  
  axios.defaults.withCredentials = true;

  dispatch({
    type: types.IS_LOADING,
    payload: true
  });
  
  axios
    .post("/auth/login/", JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      dispatch({
        type: types.GET_TOKEN,
        payload: res.data.token
      });
      dispatch({
        type: types.GET_USER,
        payload: res.data.user
      });
      dispatch({
        type: types.IS_LOADING,
        payload: false
      });
      // on a successful login redirect to the admin
      history.push('/admin');
    })
    .catch(err => {
      dispatch({
        type: types.AUTH_ERROR,
        payload: err
      });
      dispatch({
        type: types.IS_LOADING,
        payload: false
      });
    })
    .finally(data => data);
};
