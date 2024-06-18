import { CommentsCreateNestedManyWithoutAirdropsItemsInput } from "./CommentsCreateNestedManyWithoutAirdropsItemsInput";
import { InputJsonValue } from "../../types";

export type AirdropsCreateInput = {
  commentsItems?: CommentsCreateNestedManyWithoutAirdropsItemsInput;
  description?: string | null;
  image?: InputJsonValue;
  partakeLink?: string | null;
  postedAt?: Date | null;
  title?: string | null;
};
