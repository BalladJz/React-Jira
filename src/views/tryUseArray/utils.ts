import { useState } from "react";

const useArray = (array: any[]) => {
  const [value, setValue] = useState(array);
  const add = (addValue: any) => {
    setValue([...value, addValue]);
  };

  const removeIndex = (index: number) => {
    const remove = value.filter((v, i) => i !== index);
    setValue([...remove]);
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
