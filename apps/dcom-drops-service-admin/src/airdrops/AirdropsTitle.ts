import { Airdrops as TAirdrops } from "../api/airdrops/Airdrops";

export const AIRDROPS_TITLE_FIELD = "title";

export const AirdropsTitle = (record: TAirdrops): string => {
  return record.title?.toString() || String(record.id);
};
