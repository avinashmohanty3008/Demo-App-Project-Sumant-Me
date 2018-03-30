import {UserAuthWrapper} from 'redux-auth-wrapper';
import {routerActions} from 'react-router-redux';

// TODO: we might replace logic to store and read the token from cookie or
// localStorage to avoid need to re-authenticate on page reload
// https://github.com/mjrussell/redux-auth-wrapper/tree/master/examples/localStorage
export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: (state) => state.authLogin, // get user from the Store
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
});

export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.authLogin,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  // run predicate on auth selector - if it fails, run failureRedirectPath -
  // - redirect either to original page or home page
  predicate: user => user.access_token === null || user.access_token === undefined,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
  allowRedirectBack: false
});
