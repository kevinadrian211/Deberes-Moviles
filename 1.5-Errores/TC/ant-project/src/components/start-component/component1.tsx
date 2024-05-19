import React from "react";
import { List, Table } from "antd";

const UserTable: React.FC = () => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Edad",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Dirección",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Kevin Naula",
      age: 21,
      address: "Rayo Loma",
    }
  ];

  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Table columns={columns} dataSource={[item]} />
        </List.Item>
      )}
    />
  );
};

export default UserTable;