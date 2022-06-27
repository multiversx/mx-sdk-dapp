import { getAccountProviderType } from 'utils/account/getAccountProviderType';

export function getIsProviderEqualTo(comparedProviderType: any) {
  const providerType = getAccountProviderType();
  return providerType === comparedProviderType;
}
