import React from "react";

export type Users = {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
};

type SearchPanelProps = {
  param: {
    name: string;
    personId: string;
  };
  users: Array<Users>;
  setParam: (param: SearchPanelProps["param"]) => void;
};

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  const handleChange = (evt: any) => {
    // console.log(evt.target.value);
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
