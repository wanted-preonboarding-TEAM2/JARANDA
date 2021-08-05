import { localStorageHelper as LSHelper } from 'utils/localStorageHelper';
import LS_KEY from 'constants/localStorageKey';

export const saveUserInfo = data => {
  const userInfos = getUserInfo();
  const uid = userInfos.length + 1;

  userInfos.push({ ...data, uid });

  LSHelper.setItem(LS_KEY.USER_INFO, userInfos);
};

export const setUserInfo = data => {
  const userInfos = getUserInfo();
  const id = userInfos.findIndex(user => user.id === data.id);
  if (id !== -1) {
    userInfos[id] = data;
    LSHelper.setItem(LS_KEY.USER_INFO, userInfos);
  }
};

export const checkIdExist = id => {
  const userInfos = getUserInfo();
  const idList = userInfos.map(user => user.id);
  if (idList.includes(id)) return true;
  else return false;
  //console.log(idList);
};

export const getUserInfo = () => {
  const data = LSHelper.getItem(LS_KEY.USER_INFO) ?? [];

  return data;
};

export const getLoginValidation = () => {
  const data = LSHelper.getItem(LS_KEY.LOGIN_VALIDATION);

  return data;
};
