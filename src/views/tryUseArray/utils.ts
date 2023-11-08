import { useState } from "react";

const useArray = <T>(initialValue: T[]) => {
  const [value, setValue] = useState(initialValue);
  const add = (addValue: T) => {
    setValue([...value, addValue]);
  };

  const removeIndex = (index: number) => {
    const remove = value.filter((v, i) => i !== index);
    setValue(remove);
  };

  const clear = () => {
    setValue([]);
  };

  return {
    value,
    add,
    removeIndex,
    clear,
  };
};

export { useArray };
