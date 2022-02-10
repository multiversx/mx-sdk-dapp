import { Address } from '@elrondnetwork/erdjs';
import { SmartContractResult, TypesOfSmartContractCallsEnum } from 'types';
import { decodeBase64 } from 'utils/decoders';

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
    let parsedData = data;
    try {
      parsedData = decodeBase64(data);
    } catch (err) {}
    const addressIndex = getAddressIndex(parsedData);
    const parts = parsedData.split('@');
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
