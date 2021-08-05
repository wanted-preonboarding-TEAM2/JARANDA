import { localStorageHelper } from '../../utils/localStorageHelper';
import LS_KEY from 'constants/localStorageKey';

const searchUsersByOption = (value, selectedOption) => {
  const users = localStorageHelper.getItem(LS_KEY.USER_INFO);
  return users?.filter(users =>
    `${users[selectedOption]}`.toLowerCase().includes(value.toLowerCase()),
  );
};

export { searchUsersByOption };
