import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (data) => {
  return async (dispatch) => {
    axios.post(`${process.env.REACT_APP_URL}api/v1/user`, data).then((res) => {
      dispatch({ type: LOGIN_USER, payload: res.data }).catch((err) =>
        console.log(err)
      );
    });
  };
};
