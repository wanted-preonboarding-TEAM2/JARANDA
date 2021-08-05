import { localStorageHelper } from '../../utils/localStorageHelper';
import LS_KEY from 'constants/localStorageKey';

const users = localStorageHelper.getItem(LS_KEY.USER_INFO);

const searchUsersByOption = (value, selectedOption) => {
  return users?.filter(users =>
    `${users[selectedOption]}`.toLowerCase().includes(value.toLowerCase()),
  );
};

export { searchUsersByOption };
