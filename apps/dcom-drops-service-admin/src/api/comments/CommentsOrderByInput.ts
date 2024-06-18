import { SortOrder } from "../../util/SortOrder";

export type CommentsOrderByInput = {
  airdropId?: SortOrder;
  airdropRelation?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  downvotes?: SortOrder;
  id?: SortOrder;
  relAirdrop?: SortOrder;
  relUser?: SortOrder;
  updatedAt?: SortOrder;
  upvotes?: SortOrder;
  userId?: SortOrder;
  userRelation?: SortOrder;
};
