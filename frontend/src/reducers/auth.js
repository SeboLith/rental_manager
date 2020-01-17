import { loadState } from "utils";
import types from "../types";

// initialize the state with values from localStorage or initial values
const state = loadState() || {
  auth: {
    isAuthenticated: false,
    isLoading: false,
    isSubmitting: false,
    isLoggingOut: false,
    formValidationErrors: { username: '', password: '' },
    authError: undefined,
    token: "",
    user: {
      id: "",
      username: "",
      email: "",
      first_name: "",
      last_name: ""
    }
  }
};

const initialState = {
  ...state.auth
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case types.GET_TOKEN:
      return {
        ...state,
        token: actions.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggingOut: true
      };
    case types.GET_USER:
      return {
        ...state,
        user: actions.payload
      };
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: actions.payload
      };
    case types.IS_SUBMITTING:
      return {
        ...state,
        isSubmitting: actions.payload
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        formValidationErrors: {
          username: (((actions.payload || {}).response || {}).data || {})
            .non_field_errors,
          password: (((actions.payload || {}).response || {}).data || {})
            .non_field_errors
        }
      };
    case types.FORM_VALIDATION_ERRORS:
      return {
        ...state,
        formValidationErrors: actions.payload
      };
    default:
      return state;
  }
}
