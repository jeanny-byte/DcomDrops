import { CommentsCreateNestedManyWithoutUsersInput } from "./CommentsCreateNestedManyWithoutUsersInput";
import { NotificationsCreateNestedManyWithoutUsersInput } from "./NotificationsCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  commentsItems?: CommentsCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notificationsItems?: NotificationsCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
