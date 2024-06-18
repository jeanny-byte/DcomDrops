import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AIRDROPS_TITLE_FIELD } from "../airdrops/AirdropsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
