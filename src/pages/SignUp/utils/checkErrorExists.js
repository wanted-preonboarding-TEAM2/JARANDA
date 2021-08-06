const checkErrorExists = errors => {
  const errorListFlat = Object.values(errors)
    .map(error => {
      if (typeof error === 'object') {
        return Object.values(error);
      }
      return error;
    })
    .flat();

  return errorListFlat.every(list => list === '');
};

export default checkErrorExists;
