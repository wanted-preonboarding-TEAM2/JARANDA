import ROLE from 'constants/role.js';

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
  cardNum: '',
  expiredDate: '',
  cvc: '',
  address: '',
  addressDetail: '',
  age: '',
};

const creditCardInfoInitialState = {
  cardNum: '',
  expiredDate: '',
  cvc: '',
};

const creditCardInitialError = {
  cardNum: '',
  expiredDate: '',
  cvc: '',
};

export {
  initialUserInfo,
  initialError,
  creditCardInfoInitialState,
  creditCardInitialError,
};
