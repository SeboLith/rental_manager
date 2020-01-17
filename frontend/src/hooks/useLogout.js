import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function({ history }) {
  const dispatch = useDispatch();

  function handleLogout() {
    const { token } = useSelector(state => state.auth);

    console.log(">>>>> in `logoutUser`");
    console.log(">>>>> token ::", token);
    console.log(">>>>> history ::", JSON.stringify(history));

    dispatch({
      type: types.IS_LOADING,
      payload: true
    });

    useEffect(() => {
      axios
        .post("/auth/logout/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          }
        })
        .then(res => {
          dispatch({
            type: types.LOGOUT
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
  }

  return [
    handleLogout
  ];
}
