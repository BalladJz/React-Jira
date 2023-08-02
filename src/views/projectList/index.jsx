import React from "react";
import { useEffect, useState } from "react";

import { List } from "./List";
import { SearchPanel } from "./SearchPannel";

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9001/projects`).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
        // console.log(res.json());
      }
    });
  }, [param]);

  useEffect(() => {
    fetch("http://localhost:9001/users").then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
        setUsers={setUsers}
      />
      <List users={users} list={list} />
    </div>
  );
};
