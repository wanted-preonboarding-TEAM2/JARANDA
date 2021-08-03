import { createSlice } from '@reduxjs/toolkit';
import ROLE from 'constants/role.js';

const initialState = {
  id: '',
  name: '',
  uid: '',
  role: ROLE.NO_LOGIN,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    login: function (state, action) {
      // NOTE: 로그인할 때 어떻게 이 유저가 teacher, parent, admin인지 알 수 있죠?
      state.id = action.payload.id;
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    logout: function (state) {
      state.id = '';
      state.uid = '';
      state.name = '';
      state.role = ROLE.NO_LOGIN;
    },
  },
});

export const selectUser = state => state.user;
