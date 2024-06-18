import { CommentsListRelationFilter } from "../comments/CommentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationsListRelationFilter } from "../notifications/NotificationsListRelationFilter";

export type UserWhereInput = {
  commentsItems?: CommentsListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notificationsItems?: NotificationsListRelationFilter;
  username?: StringFilter;
};
