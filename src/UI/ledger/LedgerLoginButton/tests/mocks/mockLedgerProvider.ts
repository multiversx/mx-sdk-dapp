//  https://github.com/multiversx/mx-sdk-js-hw-provider/blob/main/src/hwProvider.ts
//  https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-mocker

import { HWProvider } from '@multiversx/sdk-hw-provider/out/hwProvider';
import { testAddress } from '__mocks__';

const signature =
  'e4c98dd01020118b13db9dd5db9e5b56ff0c4a0141306918a9d3eea964a21ada5d566f58cdf6c921ed3405bf5685d1e87545dbcc86ea3c27a43aa3abee8c2b0e';

class HwAppMock {
  version = '1.0';
  contractData = 1;
  accountIndex = 0;
  addressIndex = 0;
  address = testAddress;
  transactionSignature = signature;
  messageSignature = signature;
  authTokenSignature = signature;

  async getAddress() {
    return { address: this.address };
  }

  async setAddress() {
    return { address: this.address };
  }

  async signTransaction(): Promise<string> {
    return this.transactionSignature;
  }

  async signMessage() {
    return this.messageSignature;
  }

  async getAppConfiguration() {
    return {
      version: this.version,
      contractData: this.contractData,
      accountIndex: this.accountIndex,
      addressIndex: this.addressIndex
    };
  }

  async getAddressAndSignAuthToken() {
    return {
      address: this.address,
      signature: this.authTokenSignature
    };
  }
}

export const mockLedgerProvider = async () => {
  jest
    .spyOn(HWProvider.prototype, 'hwApp', 'get')
    .mockImplementation(() => new HwAppMock());

  jest.spyOn(HWProvider.prototype, 'init').mockResolvedValue(true);
  jest.spyOn(HWProvider.prototype, 'isInitialized').mockReturnValue(true);
  jest.spyOn(HWProvider.prototype, 'isConnected').mockReturnValue(true);
  jest
    .spyOn(HWProvider.prototype, 'getAccounts')
    .mockResolvedValue([testAddress]);
};
