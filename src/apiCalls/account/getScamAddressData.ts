import axios from 'axios';
import { getCleanApiAddress } from 'apiCalls/configuration/getCleanApiAddress';
import { scamAddressSchema } from 'apiCalls/utils/apiResponseSchemas';
import { validateApiResponse } from 'apiCalls/utils/validateApiResponse';
import { TIMEOUT } from 'constants/network.constants';
import { ScamInfoType } from 'types/account.types';
import { ACCOUNTS_ENDPOINT } from '../endpoints';

export async function getScamAddressData({
  addressToVerify,
  baseURL
}: {
  addressToVerify: string;
  baseURL: string;
}) {
  const apiAddress = getCleanApiAddress(baseURL);

  const { data } = await axios.get<{
    scamInfo?: ScamInfoType;
    code?: string;
  }>(`${apiAddress}/${ACCOUNTS_ENDPOINT}/${addressToVerify}`, {
    timeout: TIMEOUT
  });

  validateApiResponse({
    data,
    schema: scamAddressSchema,
    source: ACCOUNTS_ENDPOINT
  });

  return data;
}
