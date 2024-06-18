import { Comments as TComments } from "../api/comments/Comments";

export const COMMENTS_TITLE_FIELD = "airdropRelation";

export const CommentsTitle = (record: TComments): string => {
  return record.airdropRelation?.toString() || String(record.id);
};
