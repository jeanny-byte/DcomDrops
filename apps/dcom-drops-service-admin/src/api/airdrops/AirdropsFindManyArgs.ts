import { AirdropsWhereInput } from "./AirdropsWhereInput";
import { AirdropsOrderByInput } from "./AirdropsOrderByInput";

export type AirdropsFindManyArgs = {
  where?: AirdropsWhereInput;
  orderBy?: Array<AirdropsOrderByInput>;
  skip?: number;
  take?: number;
};
