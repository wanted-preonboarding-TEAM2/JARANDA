const maxLengths = {
  cardNum: 16,
  expiredDate: 4,
  cvc: 3,
};

const cardInfoLengthChecker = (key, length) => {
  if (!maxLengths[key] || length > maxLengths[key]) return false;
  return true;
};
export default cardInfoLengthChecker;
