import { Address } from 'lib/sdkCore';
import { ESDTTransferTypesEnum, TypesOfSmartContractCallsEnum } from 'types';
import { decodeBase64, isStringBase64 } from 'utils/decoders/base64Utils';
import { addressIsValid } from './addressIsValid';
import { isHexValidCharacters, isHexValidLength } from './hex';

export function isContract(
  receiver: string,
  sender?: string,
  data = ''
): boolean {
  const isValid = addressIsValid(receiver);

  if (!isValid) {
    return false;
  }

  const isContractAddress = new Address(receiver).isSmartContract();

  if (isContractAddress) {
    return true;
  }

  const extractedAddress = getAddressFromDataField({ receiver, data });

  if (!extractedAddress) {
    return false;
  }

  const isExtractedAddressContractCall = new Address(
    extractedAddress
  ).isSmartContract();

  return (
    isExtractedAddressContractCall || isSelfESDTContract(receiver, sender, data)
  );
}

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
  const isCorrectESDTType = Object.values(ESDTTransferTypesEnum).includes(
    type as ESDTTransferTypesEnum
  );
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
    const parsedData = isStringBase64(data) ? decodeBase64(data) : data;

    const addressIndex = getAddressIndex(parsedData);

    const parts = parsedData.split('@');
    return addressIndex > -1 ? parts[addressIndex] : receiver;
  } catch (err) {
    console.log(err);
    return;
  }
}

function getAddressIndex(data: string) {
  if (data.includes(TypesOfSmartContractCallsEnum.MultiESDTNFTTransfer)) {
    return 1;
  }
  if (data.includes(TypesOfSmartContractCallsEnum.ESDTNFTTransfer)) {
    return 4;
  }
  return -1;
}
