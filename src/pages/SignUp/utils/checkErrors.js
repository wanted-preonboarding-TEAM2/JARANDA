import { omitBy, isEmpty } from 'lodash';
import { getUserInfo } from 'services/utils/LocalStorageWorker';

const checkIdExist = id => {
  const userInfos = getUserInfo();
  const idList = userInfos.map(user => user.id);
  if (idList.includes(id)) return true;
  else return false;
};

const checkErrorExists = errors => {
  return Object.values(omitBy(errors, isEmpty));
};

const checkErrors = (errors, id) => {
  const errorList = checkErrorExists(errors);
  const isDuplicatedId = checkIdExist(id);
  if (!errorList.length && !isDuplicatedId) return true;
  if (errorList.length) window.alert(errorList.join('\n'));
  if (isDuplicatedId) window.alert('중복되는 아이디가 있습니다!');
  return false;
};

export default checkErrors;
