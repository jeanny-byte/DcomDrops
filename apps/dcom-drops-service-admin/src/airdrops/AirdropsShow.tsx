import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AIRDROPS_TITLE_FIELD } from "./AirdropsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AirdropsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="partakeLink" source="partakeLink" />
        <TextField label="postedAt" source="postedAt" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comments"
          target="airdropId"
          label="CommentsItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Airdrop"
              source="airdrops.id"
              reference="Airdrops"
            >
              <TextField source={AIRDROPS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="AirdropRelation" source="airdropRelation" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="downvotes" source="downvotes" />
            <TextField label="ID" source="id" />
            <TextField label="relAirdrop" source="relAirdrop" />
            <TextField label="relUser" source="relUser" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="upvotes" source="upvotes" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="UserRelation" source="userRelation" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
