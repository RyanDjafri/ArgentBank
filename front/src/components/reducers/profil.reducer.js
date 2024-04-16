import { USER_PROFILE, UPDATE_PROFILE } from "../actions/profil.actions";

const initialState = {};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        payload: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};
