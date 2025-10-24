import { providerLabels } from 'constants/providerFactory.constants';
import {
  ICustomProvider,
  IProviderBase,
  ProviderType,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';

export function getProvidersList(
  addedCustomProviders: ICustomProvider[] = [],
  allowedProviders?: ProviderType[] | null
): IProviderBase[] {
  const defaultProviderTypes = (
    Object.values(ProviderTypeEnum) as ProviderType[]
  ).filter((type) => {
    const excludedProviders: ProviderType[] = [
      ProviderTypeEnum.none,
      ProviderTypeEnum.webview
    ];
    return !excludedProviders.includes(type);
  });

  const allAvailableProviderTypes: ProviderType[] = [
    ...defaultProviderTypes,
    ...addedCustomProviders.map((p) => p.type as ProviderType)
  ];

  const customProviderLabels = addedCustomProviders.reduce(
    (acc, provider) => {
      acc[provider.type as ProviderType] = provider.name;
      return acc;
    },
    {} as Record<ProviderType, string>
  );

  const allAvailableLabels = {
    ...providerLabels,
    ...customProviderLabels
  };

  const allowedProviderTypes: ProviderType[] = allowedProviders
    ? allowedProviders.filter((type) =>
        allAvailableProviderTypes.includes(type)
      )
    : allAvailableProviderTypes;

  const providerList: IProviderBase[] = allowedProviderTypes.map((type) => {
    const custom = addedCustomProviders.find(
      (customProvider) => customProvider.type === type
    );
    if (custom) {
      return custom;
    }

    return {
      name: type in allAvailableLabels ? allAvailableLabels[type] : type,
      type
    };
  });

  return providerList;
}
