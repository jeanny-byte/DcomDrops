import { Notifications as TNotifications } from "../api/notifications/Notifications";

export const NOTIFICATIONS_TITLE_FIELD = "relUserNotification";

export const NotificationsTitle = (record: TNotifications): string => {
  return record.relUserNotification?.toString() || String(record.id);
};
