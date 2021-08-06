const arrowHandler = (prev, sign, totalPage) => {
  const PAGES_PER_LIST = 5;
  const nextIndex = prev.end + PAGES_PER_LIST;
  let res;
  if (sign === 1) {
    res = nextIndex > totalPage ? totalPage : nextIndex;
  } else if (sign === -1) {
    res =
      prev.end - prev.start < 4
        ? prev.start + 4 - PAGES_PER_LIST
        : prev.end - PAGES_PER_LIST;
  }
  return { ...prev, start: prev.start + PAGES_PER_LIST * sign, end: res };
};

export default arrowHandler;
