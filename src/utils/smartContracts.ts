import { Address } from '@elrondnetwork/erdjs';
import { SmartContractResult, TypesOfSmartContractCallsEnum } from 'types';

const okInHex = '6f6b';

export function areScCallsSuccessful(scResults?: SmartContractResult[]) {
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
    const extractedAddress = getAddressFromDataField({ receiver, data });
    if (!extractedAddress) {
      return false;
    }
    return new Address(extractedAddress).isContractAddress();
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
    if (!data) {
      return receiver;
    }
    const addressIndex = getAddressIndex(data);
    const parts = data.split('@');
    return addressIndex > -1 ? parts[addressIndex] : receiver;
  } catch (err) {
    console.log(err);
    return;
  }
}

function getAddressIndex(data: string) {
  return data.includes(TypesOfSmartContractCallsEnum.MultiESDTNFTTransfer)
    ? 1
    : data.includes(TypesOfSmartContractCallsEnum.ESDTNFTTransfer)
    ? 4
    : -1;
}

export default isContract;
