const { default: ROLE } = require('constants/role.js');

const initialUserInfo = {
  id: '',
  password: '',
  passwordConfirm: '',
  name: '',
  cardInfo: {
    cardNum: '',
    expiredDate: '',
    cvc: '',
  },
  address: '',
  addressDetail: '',
  age: '',
  role: ROLE.TEACHER,
};

const initialError = {
  id: '',
  password: '',
  passwordConfirm: '',
  name: '',
  cardInfo: {
    cardNum: '',
    expiredDate: '',
    cvc: '',
  },
  address: '',
  addressDetail: '',
  age: '',
};

export { initialUserInfo, initialError };
