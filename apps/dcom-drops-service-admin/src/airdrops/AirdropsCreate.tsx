import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CommentsTitle } from "../comments/CommentsTitle";

export const AirdropsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="commentsItems"
          reference="Comments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentsTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="partakeLink" source="partakeLink" />
        <DateTimeInput label="postedAt" source="postedAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
