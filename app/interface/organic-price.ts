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
  | "sixMonths"
  | "oneYear"
  | "fourYear"
  | "tenYear"
  | "moreThanTenYear";

type PricingValue = string;

type ConnectionPricing = Partial<Record<DurationType, PricingValue>>;

export type TOrganicPrice = Partial<
  Record<ConnectionType, ConnectionPricing>
> & {
  _id?: string;
  updatedAt?: string;
};
