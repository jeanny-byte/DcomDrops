import { User } from "../user/User";

export type Notifications = {
  createdAt: Date;
  id: string;
  message: string | null;
  notificationMessage: string | null;
  relUserNotification: string | null;
  updatedAt: Date;
  user?: User | null;
  userNotification: string | null;
};
