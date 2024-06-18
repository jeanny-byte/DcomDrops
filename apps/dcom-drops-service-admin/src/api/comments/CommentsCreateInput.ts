import { AirdropsWhereUniqueInput } from "../airdrops/AirdropsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsCreateInput = {
  airdrop?: AirdropsWhereUniqueInput | null;
  airdropRelation?: string | null;
  content?: string | null;
  downvotes?: number | null;
  relAirdrop?: string | null;
  relUser?: string | null;
  upvotes?: number | null;
  user?: UserWhereUniqueInput | null;
  userRelation?: string | null;
};
