import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
export const ListUser = (props) => (
  <List {...props}>
    <Datagrid style={{ overflowX: "auto" }}>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      {/* <TextField source="phone" />
      <TextField source="username" /> */}
      <TextField source="password" />
      <EditButton />
    </Datagrid>
  </List>
);

export const editUser = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="password" type="password" />
      </SimpleForm>
    </Edit>
  );
};

export const createUser = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
