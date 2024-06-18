import { CommentsUpdateManyWithoutUsersInput } from "./CommentsUpdateManyWithoutUsersInput";
import { NotificationsUpdateManyWithoutUsersInput } from "./NotificationsUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  commentsItems?: CommentsUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notificationsItems?: NotificationsUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
