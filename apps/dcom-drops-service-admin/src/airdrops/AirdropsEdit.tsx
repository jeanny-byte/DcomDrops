import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CommentsTitle } from "../comments/CommentsTitle";

export const AirdropsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
