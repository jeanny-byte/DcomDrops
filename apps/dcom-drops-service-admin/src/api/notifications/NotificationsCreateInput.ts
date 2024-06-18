import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationsCreateInput = {
  message?: string | null;
  notificationMessage?: string | null;
  relUserNotification?: string | null;
  user?: UserWhereUniqueInput | null;
  userNotification?: string | null;
};
