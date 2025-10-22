import { providerLabels } from 'constants/providerFactory.constants';

import {
  ICustomProvider,
  IProviderBase,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';
import { getProvidersList } from '../getProviderList';

const typeACustomProvider: ICustomProvider = {
  type: 'typeA',
  name: 'Custom A',
  iconUrl: 'icon-a.png',
  constructor: jest.fn()
};
const typeBCustomProvider: ICustomProvider = {
  type: 'typeB',
  name: 'Custom B',
  iconUrl: 'icon-b.png',
  constructor: jest.fn()
};

// Default provider types excluding hidden ones (none, webview)
const displayedProviders: string[] = [
  ProviderTypeEnum.extension,
  ProviderTypeEnum.metamask,
  ProviderTypeEnum.passkey,
  ProviderTypeEnum.walletConnect,
  ProviderTypeEnum.ledger,
  ProviderTypeEnum.crossWindow
];

describe('getProvidersList tests', () => {
  test('returns default providers with proper labels when no custom or allowed list provided', () => {
    const addedCustomProviders: ICustomProvider[] = [];
    const list = getProvidersList(addedCustomProviders);

    const types = list.map((p) => p.type);
    expect(types).toEqual(displayedProviders);

    // Ensure labels come from providerLabels
    const names = list.map((p) => p.name);
    const expectedNames = displayedProviders.map(
      (t) => providerLabels[t as keyof typeof providerLabels]
    );
    expect(names).toEqual(expectedNames);
  });

  test('appends custom providers after defaults and preserves custom object fields', () => {
    const list = getProvidersList([typeACustomProvider, typeBCustomProvider]);

    const types = list.map((p) => p.type);
    expect(types).toEqual([...displayedProviders, 'typeA', 'typeB']);

    // The custom objects should be returned as-is (not reconstructed)
    const lastTwo: IProviderBase[] = list.slice(-2);
    expect(lastTwo[0]).toBe(typeACustomProvider);
    expect(lastTwo[1]).toBe(typeBCustomProvider);
  });

  test('filters by allowed providers and preserves allowed order', () => {
    const allowed = [
      'typeA', // valid custom
      ProviderTypeEnum.extension, // valid default
      'INVALID_TYPE' // invalid, should be ignored
    ];

    const list = getProvidersList([typeACustomProvider], allowed);
    const types = list.map((p) => p.type);
    expect(types).toEqual(['typeA', ProviderTypeEnum.extension]);

    // Ensure correct names mapping (custom keeps its own name, default uses label)
    const names = list.map((p) => p.name);
    expect(names).toEqual([
      'Custom A',
      providerLabels[ProviderTypeEnum.extension]
    ]);
  });

  test('null allowedProviders behaves like undefined (returns all available)', () => {
    const listWithUndefined = getProvidersList([]);
    const listWithNull = getProvidersList([], null);

    expect(listWithNull).toEqual(listWithUndefined);
  });
});
