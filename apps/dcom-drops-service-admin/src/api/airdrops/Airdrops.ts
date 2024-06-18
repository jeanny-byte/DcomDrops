import { Comments } from "../comments/Comments";
import { JsonValue } from "type-fest";

export type Airdrops = {
  commentsItems?: Array<Comments>;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  partakeLink: string | null;
  postedAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
