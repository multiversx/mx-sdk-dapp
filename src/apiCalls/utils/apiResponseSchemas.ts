import {
  FieldCheckType,
  ResponseSchemaType,
  equals,
  isNonNegativeInteger,
  isNonNegativeNumber,
  isNumeric,
  isObject,
  isString,
  optional
} from 'apiCalls/utils/validateApiResponse';

const MAX_TOKEN_DECIMALS = 18;

const isTokenDecimals: FieldCheckType = (value) =>
  isNonNegativeInteger(value) && (value as number) <= MAX_TOKEN_DECIMALS;

// `dapp/config`, after `egldDenomination` has been mapped onto `decimals`
export const dappConfigSchema: ResponseSchemaType = {
  chainId: isString,
  egldLabel: isString,
  decimals: isNumeric,
  digits: isNumeric,
  apiAddress: isString,
  walletAddress: optional(isString),
  explorerAddress: optional(isString)
};

// `network/config` → `data.config`
export const networkConfigSchema: ResponseSchemaType = {
  erd_chain_id: isString,
  erd_round_duration: isNonNegativeInteger
};

// the API can return `fast` / `faster` as null
export const gasStationSchema: ResponseSchemaType = {
  lastBlock: optional(isNonNegativeInteger),
  fast: optional(isNonNegativeNumber),
  faster: optional(isNonNegativeNumber)
};

// `tokens/:identifier` and `nfts/:identifier`
export const getTokenSchema = (identifier: string): ResponseSchemaType => ({
  identifier: equals(identifier),
  name: isString,
  ticker: optional(isString),
  decimals: optional(isTokenDecimals),
  assets: optional(isObject)
});

const isSameAddress =
  (address: string): FieldCheckType =>
  (value) =>
    typeof value === 'string' && value.toLowerCase() === address.toLowerCase();

export const getAccountSchema = (address: string): ResponseSchemaType => ({
  address: isSameAddress(address),
  balance: isNumeric,
  nonce: isNonNegativeInteger
});

export const scamAddressSchema: ResponseSchemaType = {
  scamInfo: optional(isObject)
};

export const economicsSchema: ResponseSchemaType = {
  price: optional(isNonNegativeNumber)
};

export const transactionSchema: ResponseSchemaType = {
  txHash: isString,
  sender: isString,
  receiver: isString,
  value: isNumeric,
  status: isString
};
