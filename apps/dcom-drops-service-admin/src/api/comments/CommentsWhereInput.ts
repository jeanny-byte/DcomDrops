import { AirdropsWhereUniqueInput } from "../airdrops/AirdropsWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsWhereInput = {
  airdrop?: AirdropsWhereUniqueInput;
  airdropRelation?: StringNullableFilter;
  content?: StringNullableFilter;
  downvotes?: IntNullableFilter;
  id?: StringFilter;
  relAirdrop?: StringNullableFilter;
  relUser?: StringNullableFilter;
  upvotes?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  userRelation?: StringNullableFilter;
};
