export const setLocalStorage = (key, data) => {
  const datas = getLocalStorage(key) ?? [];
  const uid = !datas ? 1 : datas.length + 1;

  datas.push({ ...data, uid });
  localStorage.setItem(key, JSON.stringify(datas));
};

export const getLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};
