import BigNumber from 'bignumber.js';
import { TransactionTypesEnum } from '../../types/transactions';

const noData = {
  tokenId: '',
  amount: ''
};

// TODO: add tests
export function getTokenFromData(data?: string): {
  tokenId: string;
  amount: string;
} {
  const multiESDTNFTTransfer = data?.includes(
    TransactionTypesEnum.MultiESDTNFTTransfer
  );
  const tokenTransfer = data?.includes(TransactionTypesEnum.ESDTTransfer);
  const nftTransfer =
    data?.includes(TransactionTypesEnum.ESDTNFTTransfer) &&
    !multiESDTNFTTransfer;

  if (data != null) {
    if (tokenTransfer || nftTransfer) {
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
    } else if (multiESDTNFTTransfer) {
      try {
        const encodedToken = data.split('@')[3];
        const encodedAmount = data.split('@')[5];
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
  }
  return noData;
}
export default getTokenFromData;
