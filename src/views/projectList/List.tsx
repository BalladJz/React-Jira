import React from "react";
import { Users } from "./SearchPanel";

interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  pin: boolean;
  created: number;
}

type ListProps = {
  users: Users[];
  list: Project[];
};

export const List = ({ users, list }: ListProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id == project.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
