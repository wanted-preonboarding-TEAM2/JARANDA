import { createSlice } from '@reduxjs/toolkit';

import LS_KEY from 'constants/localStorageKey';
import ROLE from 'constants/role.js';

import { localStorageHelper as LSHelper } from 'utils/localStorageHelper';
import { findLoginUser } from 'utils/user';

const initialState = {
  id: '',
  name: '',
  uid: '',
  role: ROLE.ADMIN,
  loginStatus: {
    loading: false,
    success: false,
    failure: null,
  },
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    loginStatusReset: function (state) {
      state.loginStatus.loading = false;
      state.loginStatus.success = false;
      state.loginStatus.failure = false;
    },
    loginRequest: function (state) {
      state.loginStatus.loading = true;
      state.loginStatus.success = false;
      state.loginStatus.failure = false;
    },
    loginSuccess: function (state, action) {
      const { id, uid, name, role } = action.payload;

      state.id = id;
      state.uid = uid;
      state.name = name;
      state.role = role;

      state.loginStatus.loading = false;
      state.loginStatus.success = true;
      state.loginStatus.failure = false;
    },
    loginFailure: function (state, action) {
      state.loginStatus.loading = false;
      state.loginStatus.success = false;
      state.loginStatus.failure = action.payload.errorMessage;
    },
    logout: function (state) {
      state.id = '';
      state.uid = '';
      state.name = '';
      state.role = ROLE.NO_LOGIN;
    },
  },
});

export const postLogin =
  ({ id, password }) =>
  dispatch => {
    dispatch(loginRequest());

    const user = findLoginUser({ id, password });

    if (!user) {
      dispatch(
        loginFailure({
          errorMessage:
            '아이디 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요.',
        }),
      );
      return;
    }

    if (user) {
      const { id, uid, name, role } = user;

      const loginValidation = {
        id,
        uid,
        name,
        role,
      };

      dispatch(loginSuccess(loginValidation));

      LSHelper.setItem(LS_KEY.LOGIN_VALIDATION, loginValidation);

      return;
    }
  };

export const { loginStatusReset, loginRequest, loginSuccess, loginFailure } =
  userSlice.actions;

export const selectUser = state => state.user;
export const selectCurrentUserRole = state => state.user.role;
