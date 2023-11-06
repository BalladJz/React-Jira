import React from "react";
import { useEffect, useState } from "react";
import qs from "qs";

import { List } from "./List";
import { SearchPanel } from "./SearchPanel";
import { cleanObject } from "../utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  // param 指的是 输入框输入的名称以及下拉框的值
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  // 下拉框选择的选项
  const [users, setUsers] = useState([]);
  // 渲染的列表
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      },
    );
  }, [param]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
    // ! 当组件初始化时，会执行一次
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
