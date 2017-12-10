
export const forIn = (obj, fn) => {
  for (const key in obj) {
    fn(obj[key], key, obj);
  }
};

export const keys = (obj) => {
  if (isFunction(Object.keys)) {
    return Object.keys(obj);
  }

  const returnValues = [];
  forIn(obj, (val, key) => returnValues.push(key));
  return returnValues;
};
