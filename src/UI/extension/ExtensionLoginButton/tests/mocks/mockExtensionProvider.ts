import { testAddress } from '__mocks__';

export const ExtensionProvider = {
  getInstance: () => {
    let signature: string | undefined = undefined;

    const provider = {
      init: async () => true,
      login: async ({ token }: { token?: string }) => {
        if (token) {
          signature =
            'e4c98dd01020118b13db9dd5db9e5b56ff0c4a0141306918a9d3eea964a21ada5d566f58cdf6c921ed3405bf5685d1e87545dbcc86ea3c27a43aa3abee8c2b0e';
        }
        return Promise.resolve({
          address: testAddress,
          signature
        });
      },
      setAddress: () => provider,
      logout: () => true
    };

    Object.defineProperty(provider, 'account', {
      get() {
        const account = {
          address: testAddress
        };
        if (signature) {
          return {
            ...account,
            signature
          };
        }
        return account;
      }
    });

    return provider;
  }
};
