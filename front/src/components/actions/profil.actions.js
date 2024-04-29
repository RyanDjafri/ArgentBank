import axios from "axios";

export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("jwt");
      if (!token) throw new Error("No token found");
      const res = await axios.post(
        `http://localhost:3001/api/v1/user/profile`,
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
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("jwt");
      if (!token) throw new Error("No token found");
      const res = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName: data.firstName,
          lastName: data.lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({ type: UPDATE_PROFILE, payload: res.data });
    } catch (error) {
      console.error("Error editing profile:", error);
    }
  };
};
