export interface NativeAuthConfigType {
  origin?: string;
  apiAddress?: string;
  expirySeconds?: number;
  blockHashShard?: number;
  gatewayUrl?: string;
  extraRequestHeaders?: { [key: string]: string };
  extraInfo?: {
    [key: string]: string;
  };
  /**
   * Displays a logout toast warning before token expiration. Defaults to 5 minutes.
   *
   * If set to `null`, will not trigger any warning.
   */
  tokenExpirationToastWarningSeconds?: number | null;
}
