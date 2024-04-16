import axios from "axios";

export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const getUserProfile = (data) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_URL}profile`, data)
      .then((res) => {
        dispatch({ type: USER_PROFILE, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateProfile = (data) => {
  return (dispatch) => {
    axios
      .put(`${process.env.REACT_APP_URL}profile`, data)
      .then((res) => {
        dispatch({ type: UPDATE_PROFILE, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
