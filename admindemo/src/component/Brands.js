import React, { useRef } from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,

  Create,

  useNotify,
  useRedirect,
} from "react-admin";

import ImageUploadForm from "./ImageUploadForm";

export const listBrand = (props) => (
  <List {...props}>
    <Datagrid style={{ overflowX: "auto" }}>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="photo" />
   
      <EditButton />
    </Datagrid>
  </List>
);

export const editBrand = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="photo" />
      </SimpleForm>
    </Edit>
  );
};

export const CreateBrand = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const imageUploadFormRef = useRef();

  const onSuccess = (data) => {
    notify(`created successfully`);

    if (imageUploadFormRef.current) {
      imageUploadFormRef.current.handleImageUpload(data.photo);
    }
    redirect("list", "brands");
  };
  return (
    <Create {...props} mutationOptions={{ onSuccess }} redirect="brands">
      <SimpleForm>
        <TextInput source="title" />

        <TextInput source="photo" />

     
       
        <ImageUploadForm ref={imageUploadFormRef} />
      </SimpleForm>
    </Create>
  );
};
