import { CommentsUpdateManyWithoutAirdropsItemsInput } from "./CommentsUpdateManyWithoutAirdropsItemsInput";
import { InputJsonValue } from "../../types";

export type AirdropsUpdateInput = {
  commentsItems?: CommentsUpdateManyWithoutAirdropsItemsInput;
  description?: string | null;
  image?: InputJsonValue;
  partakeLink?: string | null;
  postedAt?: Date | null;
  title?: string | null;
};
