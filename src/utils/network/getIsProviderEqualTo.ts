import { getAccountProviderType } from './getAccountProviderType';

export function getIsProviderEqualTo(comparedProviderType: any) {
  const providerType = getAccountProviderType();
  return providerType === comparedProviderType;
}
