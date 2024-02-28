export type ConnectionType =
  | "fiftyConnection"
  | "fiveHundredConnection"
  | "hundredConnection"
  | "nineConnection"
  | "oneThousandConnection"
  | "tenConnection"
  | "threeHundredConnection"
  | "twoHundredConnection"
  | "twoThousandConnection";

type DurationType =
  | "sevenDays"
  | "fifteenDays"
  | "thirtyDays"
  | "threeMonths"
  | "sixMonths"
  | "oneYear"
  | "fourYear"
  | "tenYear"
  | "moreThanTenYear";

type PricingValue = string;

type ConnectionPricing = Partial<Record<DurationType, PricingValue>>;

export type TManualPrice = Partial<
  Record<ConnectionType, ConnectionPricing>
> & {
  _id?: string;
  updatedAt?: string;
};
