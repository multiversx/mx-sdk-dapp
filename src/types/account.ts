export interface AccountType {
  address: string;
  balance: string;
  nonce: number;
  code?: string;
  username?: string;
}

export type ScamInfoType = {
  scamInfo?: {
    type: string;
    info: string;
  };
  code: string;
};
