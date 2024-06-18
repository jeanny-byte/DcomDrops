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

import { AIRDROPS_TITLE_FIELD } from "../airdrops/AirdropsTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Comments"
          target="userId"
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
        <ReferenceManyField
          reference="Notifications"
          target="userId"
          label="NotificationsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <TextField
              label="NotificationMessage"
              source="notificationMessage"
            />
            <TextField
              label="relUserNotification"
              source="relUserNotification"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="UserNotification" source="userNotification" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
