import React from "react";
import { useEffect, useState } from "react";
import qs from "qs";

import { List } from "./List";
import { SearchPanel } from "./SearchPanel";
import { cleanObject } from "../utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  console.log(apiUrl);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:9001/projects?${qs.stringify(cleanObject(param))}`,
    ).then(async (res) => {
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
