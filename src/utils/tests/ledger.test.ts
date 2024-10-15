import {
  openTransportReplayer,
  RecordStore
} from '@ledgerhq/hw-transport-mocker';
import { HWProvider } from '@multiversx/sdk-hw-provider/out/hwProvider';
import LedgerApp from '@multiversx/sdk-hw-provider/out/ledgerApp';

// Mock the LedgerApp class
jest.mock('@multiversx/sdk-hw-provider/out/ledgerApp', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAddress: jest.fn().mockResolvedValue({ address: 'mockAddress' }),
      setAddress: jest.fn().mockResolvedValue({}),
      signTransaction: jest.fn().mockResolvedValue('mockSignature'),
      signMessage: jest.fn().mockResolvedValue('mockSignature'),
      getAppConfiguration: jest.fn().mockResolvedValue({ version: '1.0.0' })
      // ...mock other methods as necessary...
    };
  });
});

test('HWProvider login', async () => {
  // Create a mock transport
  const store = RecordStore.fromString(`
    => e016000000
    <= 000000050107426974636f696e034254439000
  `);
  const transport = await openTransportReplayer(store);

  // Create a mock LedgerApp
  const ledgerApp = new LedgerApp(transport);

  // Create the HWProvider with the mocked LedgerApp
  const provider = new HWProvider(ledgerApp);

  // Test the login method
  const { address } = await provider.login({ addressIndex: 0 });
  expect(address).toBe('mockAddress');
});
