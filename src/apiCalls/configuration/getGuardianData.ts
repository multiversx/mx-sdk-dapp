import axios from 'axios';
import { getCleanApiAddress } from 'apiCalls/utils';
import { GuardianDataType } from 'types';

export async function getGuardianData(address: string) {
  const apiAddress = getCleanApiAddress();

  const configUrl = `${apiAddress}/address/${address}/guardian-data`;

  try {
    const { data } = await axios.get<{
      data: { guardianData: GuardianDataType };
    }>(configUrl);
    if (data != null) {
      return data?.data?.guardianData;
    }
  } catch (err) {
    console.error('error fetching guardianData for ', address);
  }
  return null;
}
