import { Airdrops } from "../airdrops/Airdrops";
import { User } from "../user/User";

export type Comments = {
  airdrop?: Airdrops | null;
  airdropRelation: string | null;
  content: string | null;
  createdAt: Date;
  downvotes: number | null;
  id: string;
  relAirdrop: string | null;
  relUser: string | null;
  updatedAt: Date;
  upvotes: number | null;
  user?: User | null;
  userRelation: string | null;
};
