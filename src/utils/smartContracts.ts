import { TransactionPayload } from '@elrondnetwork/erdjs';
import { TypesOfSmartContractCallsEnum } from 'types';

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
  if (data.includes(TypesOfSmartContractCallsEnum.MultiESDTNFTTransfer)) {
    return 1;
  }
  if (data.includes(TypesOfSmartContractCallsEnum.ESDTNFTTransfer)) {
    return 4;
  }
  return -1;
}
