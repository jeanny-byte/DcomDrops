import { CommentsListRelationFilter } from "../comments/CommentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AirdropsWhereInput = {
  commentsItems?: CommentsListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  partakeLink?: StringNullableFilter;
  postedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
