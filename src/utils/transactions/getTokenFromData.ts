import BigNumber from 'bignumber.js';

const noData = {
  tokenId: '',
  amount: ''
};

export function getTokenFromData(data?: string): {
  tokenId: string;
  amount: string;
} {
  const tokenTransfer = data?.includes('ESDTTransfer');
  const nftTransfer = data?.includes('ESDTNFTTransfer');

  if (data && (tokenTransfer || nftTransfer)) {
    try {
      const encodedToken = data.split('@')[1];
      const encodedAmount = data.split('@')[tokenTransfer ? 2 : 3];
      const tokenId = Buffer.from(encodedToken, 'hex').toString('ascii');

      if (tokenId) {
        const amount = new BigNumber(
          '0x' + encodedAmount.replace('0x', '')
        ).toString(10);
        return {
          tokenId,
          amount
        };
      } else {
        return noData;
      }
    } catch (e) {
      return noData;
    }
  }
  return noData;
}
export default getTokenFromData;
