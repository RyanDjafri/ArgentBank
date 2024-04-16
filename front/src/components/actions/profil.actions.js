import axios from "axios";

export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("jwt");
      if (!token) throw new Error("No token found");
      const res = await axios.post(
        `${process.env.REACT_APP_URL}profile`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: USER_PROFILE, payload: res.data });
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
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
