import { Address } from '@elrondnetwork/erdjs';
import { SmartContractResult, TypesOfSmartContractCallsEnum } from 'types';
import { decodeBase64 } from 'utils/decoders';

const okInHex = '6f6b';

export function areScCallsSuccessful(
  scResults?: SmartContractResult[],
  completedThreshold = 1
) {
  if (!scResults) {
    return true;
  }
  let numberOfOkParts = 0;
  scResults.forEach((result) => {
    if (result?.data) {
      const decoded = Buffer.from(result.data, 'base64').toString().split('@');
      const hasOkPart = Boolean(decoded.find((part) => part === okInHex));
      if (hasOkPart) {
        numberOfOkParts++;
      }
    }
  });
  return numberOfOkParts >= completedThreshold;
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
