import { createSlice } from '@reduxjs/toolkit';
import ROLE from 'constants/role.js';

const initialState = {
  id: '',
  name: '',
  uid: '',
  role: ROLE.NO_LOGIN,
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

export const { loginRequest, loginSuccess, loginFailure } = userSlice.actions;

export const selectUser = state => state.user;
export const selectCurrentUserRole = state => state.user.role;
