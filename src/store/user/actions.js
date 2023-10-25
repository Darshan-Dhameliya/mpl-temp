import {UserAction} from './types';

export const retriveSessionFromLocal = () => ({
  type: UserAction.GET_LOCAL_SESSION,
});

export const setUserData = payload => ({
  type: UserAction.SET_USER_DATA,
  payload,
});

export const updateUserData = payload => ({
  type: UserAction.UPDTAE_USER_DATA,
  payload,
});

export const updateUserDataAfterUpdte = payload => ({
  type: UserAction.SET_USER_AFTER_UPDATE,
  payload,
});
