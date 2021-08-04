import { getUserInfo } from 'services/LocalStorageWorker';

export const findLoginUser = ({ id, password }) => {
  const userInfo = getUserInfo();

  const result = userInfo.find(user => {
    return user.id === id && user.password === password;
  });

  return result;
};
