import axios from "axios";

export const logoutUser = (token) => {

  axios.defaults.withCredentials = true;

  return axios
    .post("/auth/logout/", null, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    });
};

export default logoutUser;
