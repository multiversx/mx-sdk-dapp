import { TypedResult, Address } from '@elrondnetwork/erdjs';
import { TypesOfSmartContractCallsEnum } from 'types';

const okInHex = '6f6b';

export function areScCallsSuccessful(scResults?: TypedResult[]) {
  if (!scResults) {
    return true;
  }
  let success = false;
  scResults.forEach((result) => {
    if (result?.data) {
      const decoded = Buffer.from(result.data, 'base64').toString().split('@');
      const hasOkPart = Boolean(decoded.find((part) => part === okInHex));
      if (hasOkPart) {
        success = true;
        return;
      }
    }
  });
  return success;
}

export function isContract(receiver: string, data = ''): boolean {
  try {
    return new Address(
      getAddressFromDataField({ receiver, data })
    ).isContractAddress();
  } catch (err) {
    console.log('err', err);
    return false;
  }
}

export function getAddressFromDataField({
  receiver,
  data
}: {
  receiver: string;
  data: string;
}) {
  try {
    const addressIndex = getAddressIndex(data);
    const parts = data.split('@');
    return addressIndex > -1 ? parts[addressIndex] : receiver;
  } catch (err) {
    console.log(err);
    return;
  }
}

function getAddressIndex(data: string) {
  return data.includes(TypesOfSmartContractCallsEnum.multiESDTTransfer)
    ? 1
    : data.includes(TypesOfSmartContractCallsEnum.ESDTNFTTransfer)
    ? 4
    : -1;
}

export default isContract;
