import React from "react";
import { useEffect, useState } from "react";
import * as qs from "qs";

import { List } from "./List";
import { SearchPanel } from "./SearchPanel";
import { cleanObject, useMount, useDebounce } from "../utils";
import { useHttp } from "views/utils/http";

export const ProjectList = () => {
  // param 指的是 输入框输入的名称以及下拉框的值
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 500);
  // 下拉框选择的选项
  const [users, setUsers] = useState([]);
  // 渲染的列表
  const [list, setList] = useState([]);

  const client = useHttp();

  useEffect(() => {
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`,
    // ).then(async (res) => {
    //   if (res.ok) {
    //     setList(await res.json());
    //   }
    // });

    // 测试封装的 useHttp
    client("projects", { data: cleanObject(debounceParam) }).then((list) =>
      setList(list),
    );
  }, [debounceParam]);

  useMount(() => {
    // fetch(`${apiUrl}/users`).then(async (res) => {
    //   if (res.ok) {
    //     setUsers(await res.json());
    //   }
    // });
    client("users").then((user) => setUsers(user));
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};
