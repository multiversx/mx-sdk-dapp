import { isContract } from '../isContract';

const userAddress =
  'erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax';
const contractAddress =
  'erd1qqqqqqqqqqqqqpgqv9gxgq8nurz754spjfck6rdwlg9etpcp0n4sjg2dhc';

describe('isContract tests', () => {
  it('returns false for user account', () => {
    const valid = isContract(userAddress);
    expect(valid).toBe(false);
  });
  it('returns true for smart contract', () => {
    const valid = isContract(contractAddress);
    expect(valid).toBe(true);
  });
  it('returns false for invalid address', () => {
    const valid = isContract('erd1qqqqqqqqqqqqqqqpq');
    expect(valid).toBe(false);
  });
  it('returns true for contract address in data', () => {
    const valid = isContract(
      userAddress,
      undefined,
      'MultiESDTNFTTransfer@0000000000000000050061506400f3e0c5ea560192716d0daefa0b9587017ceb@02@5745474c442d383836303061@@8ac7230489e80000@555344432d613332393036@@464e61d6@6164644c6971756964697479@8963dd8c2c5e0000@459a65fa'
    );
    expect(valid).toBe(true);
  });
});
