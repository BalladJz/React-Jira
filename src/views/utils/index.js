// 对参数为零进行处理
export const isFalsy = (value) => (value === 0 ? true : !!value);

// 在一个函数里，改变传入函数本身是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (!isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
