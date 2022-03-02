import { Address, TransactionPayload } from '@elrondnetwork/erdjs';
import { SmartContractResult, TypesOfSmartContractCallsEnum } from 'types';

const okInHex = '6f6b';

export const ESDTTransferTypes = [
  'ESDTNFTTransfer',
  'ESDTNFTBurn',
  'ESDTNFTAddQuantity',
  'ESDTNFTCreate',
  'MultiESDTNFTTransfer',
  'ESDTTransfer',
  'ESDTBurn',
  'ESDTLocalMint',
  'ESDTLocalBurn',
  'ESDTWipe',
  'ESDTFreeze'
];

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

export function isContract(
  receiver: string,
  sender?: string,
  data = ''
): boolean {
  try {
    const extractedAddress = getAddressFromDataField({ receiver, data });
    if (!extractedAddress) {
      return false;
    }
    const isContract = new Address(extractedAddress).isContractAddress();
    return isContract || isSelfESDTContract(receiver, sender, data);
  } catch (err) {
    console.log('err', err);
    return false;
  }
}

const isHexValidCharacters = (str: string) => {
  return str.toLowerCase().match(/[0-9a-f]/g);
};
const isHexValidLength = (str: string) => {
  return str.length % 2 === 0;
};

export function isSelfESDTContract(
  receiver: string,
  sender?: string,
  data?: string
) {
  const parts = data?.split('@');
  if (parts == null) {
    return false;
  }
  const [type, ...restParts] = parts;
  const isSelfTransaction =
    sender != null && receiver != null && receiver === sender;
  const isCorrectESDTType = ESDTTransferTypes.includes(type);
  const areDataPartsValid = restParts.every(
    (part) => isHexValidCharacters(part) && isHexValidLength(part)
  );
  return isSelfTransaction && isCorrectESDTType && areDataPartsValid;
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
    const parsedData = TransactionPayload.fromEncoded(data).toString();
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
