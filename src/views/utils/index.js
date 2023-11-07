import { useEffect, useState } from "react";

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

/** 对 useEffect初始化时进行封装 */
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

/** 封装输入框的防抖 */
export const useDebounce = (value, delay) => {
  // 准备一个debounce变量
  const [debounceValue, setDebounceValue] = useState(value);

  // 每次value变化时， 调用 useDebounce 通过 useEffect  触发
  useEffect(() => {
    // 设置一个定时器
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // 每次在上一个useEffect 处理完以后在运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  // 最后返回出内部的 debounceValue
  return debounceValue;
};
