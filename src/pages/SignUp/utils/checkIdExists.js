import { getUserInfo } from 'services/LocalStorageWorker';

const checkIdExist = id => {
  const userInfos = getUserInfo();
  const idList = userInfos.map(user => user.id);
  if (idList.includes(id)) return true;
  else return false;
};

export default checkIdExist;
