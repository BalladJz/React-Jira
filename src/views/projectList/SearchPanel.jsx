import React from "react";

export const SearchPanel = ({ param, setParam, users }) => {
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
