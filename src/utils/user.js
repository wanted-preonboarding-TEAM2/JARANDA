import { getUserInfo } from 'services/LocalStorageWorker';

export const findLoginUser = id => {
  const userInfo = getUserInfo();
  const result = userInfo.find(user => user.id === id);

  return result;
};
