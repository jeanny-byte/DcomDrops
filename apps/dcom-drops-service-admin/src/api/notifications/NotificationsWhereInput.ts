import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationsWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  notificationMessage?: StringNullableFilter;
  relUserNotification?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userNotification?: StringNullableFilter;
};
