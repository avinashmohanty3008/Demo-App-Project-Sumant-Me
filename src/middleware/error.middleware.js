import {ADD_MESSAGE} from '../reducers/messages.reducer';

export const crashReporter = () => (next) => async(action) => {
  try {
    return await Promise.resolve(next(action));
  } catch (err) {
    const displayError = getDisplayError(err);
    next({
      type: ADD_MESSAGE, payload: {
        toast: {toastLike: true, timeout: 3000},
        displayText: `Error: ${displayError}`,
        cssClass: 'error'
      }
    });
  }
};

//TODO adjust according to the format of the error real BE will be returning
const getDisplayError = (err) =>
  err.response && err.response.data && err.response.data.error || err.message || 'Unspecified error.';
