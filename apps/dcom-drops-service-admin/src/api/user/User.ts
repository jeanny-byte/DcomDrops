import { Comments } from "../comments/Comments";
import { Notifications } from "../notifications/Notifications";
import { JsonValue } from "type-fest";

export type User = {
  commentsItems?: Array<Comments>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notificationsItems?: Array<Notifications>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
