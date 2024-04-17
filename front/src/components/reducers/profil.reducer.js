import { USER_PROFILE, UPDATE_PROFILE } from "../actions/profil.actions";

const initialState = {
  userInfo: {
    firstName: "",
    lastName: "",
  },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        userInfo: action.payload.body,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        userInfo: action.payload.body,
      };
    default:
      return state;
  }
};
