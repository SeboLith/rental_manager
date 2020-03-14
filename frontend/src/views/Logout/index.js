import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import types from "types";
import logoutUser from "actions/logoutUser";

export default function Logout({ history }) {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    logoutUser(token)
      .then(res => {
        dispatch({
          type: types.LOGGED_OUT
        });
        dispatch({
          type: types.IS_LOADING,
          payload: false
        });
        // on a successful logout redirect to the home page
        history.push("/");
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
  }, []);

  return <></>;
}
