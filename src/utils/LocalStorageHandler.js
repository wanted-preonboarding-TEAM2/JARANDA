export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = key => {
  return localStorage.getItem(JSON.parse(key));
};
