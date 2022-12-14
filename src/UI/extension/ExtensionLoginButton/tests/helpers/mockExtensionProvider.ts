import { testAddress } from '__mocks__';

export const ExtensionProvider = {
  getInstance: () => {
    const provider = {
      init: async () => true,
      login: async () => true,
      setAddress: () => provider,
      account: {
        address: testAddress
      }
    };
    return provider;
  }
};
