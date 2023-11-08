import React from "react";
import { useArray } from "./utils";

type Person = {
  name: string;
  age: number;
};

const TryUseArray = () => {
  const person: Array<Person> = [
    { name: "jack", age: 18 },
    { name: "ma", age: 20 },
  ];

  const { value, add, removeIndex, clear } = useArray(person);

  return (
    <div>
      {/* add */}
      <button onClick={() => add({ name: "tom", age: 24 })}>add</button>
      <button onClick={() => removeIndex(0)}>remove</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>

      {value.map((person: Person, index: number) => (
        <div>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};

export default TryUseArray;
