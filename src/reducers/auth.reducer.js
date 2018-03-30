import cookie from 'cookie-machine';
import config from '../config/config';
const {identifiers} = config;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const USER_DETAILS = 'USER_DETAILS';

const initialState = {
};

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      cookie.set(identifiers.OAUTH_TOKEN, JSON.stringify(payload));
      return {...state, loginSucess: payload};
    }
    case USER_DETAILS: {
      let authentication = payload;
      return {...state, authentication};
    }
    default:
      return state;
  }
};
