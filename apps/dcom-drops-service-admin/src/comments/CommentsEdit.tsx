import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AirdropsTitle } from "../airdrops/AirdropsTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="airdrop.id"
          reference="Airdrops"
          label="Airdrop"
        >
          <SelectInput optionText={AirdropsTitle} />
        </ReferenceInput>
        <TextInput label="AirdropRelation" source="airdropRelation" />
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="downvotes" source="downvotes" />
        <TextInput label="relAirdrop" source="relAirdrop" />
        <TextInput label="relUser" source="relUser" />
        <NumberInput step={1} label="upvotes" source="upvotes" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="UserRelation" source="userRelation" />
      </SimpleForm>
    </Edit>
  );
};
