import { useEffect, useState } from "react";

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("").then((res) => {
      console.log(res);
    });
  }, [param]);

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setParam({
      ...param,
      name: evt.target.value,
    });
  };

  return (
    <form>
      <div>
        <input type="text" value={param.name} onChange={handleChange} />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
