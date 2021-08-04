import { localStorageHelper as LSHelper } from 'utils/localStorageHelper';
import LS_KEY from 'constants/localStorageKey';

export const saveUserInfo = data => {
  const userInfos = getUserInfo();
  const uid = userInfos.length + 1;

  userInfos.push({ ...data, uid });

  LSHelper.setItem(LS_KEY.USER_INFO, userInfos);
};

export const checkIdExist = () => {
  const userInfos = getUserInfo();
  const idList = userInfos.map(user => user.id);
  //console.log(idList);
};

const getUserInfo = () => {
  const data = LSHelper.getItem(LS_KEY.USER_INFO) ?? [];

  return data;
};
