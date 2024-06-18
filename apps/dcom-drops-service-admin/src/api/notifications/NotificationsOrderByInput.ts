import { SortOrder } from "../../util/SortOrder";

export type NotificationsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  notificationMessage?: SortOrder;
  relUserNotification?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userNotification?: SortOrder;
};
