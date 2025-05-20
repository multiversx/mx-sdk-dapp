import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';

export interface OnProviderLoginType {
  token?: string;
  /**
   * If set to `true`, will fallback on default configuration
   */
  nativeAuth?: NativeAuthConfigType | boolean;
}

export interface TokenLoginType {
  loginToken: string;
  signature?: string;
  nativeAuthToken?: string;
}
