import { ECONOMICS_ENDPOINT } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils/getCleanApiAddress';
import axios from 'axios';

export interface EconomicsInfoType {
  totalSupply: number;
  circulatingSupply: number;
  staked: number;
  price: number;
  marketCap: number;
  apr: number;
  topUpApr: number;
}

export function getEconomics(url = ECONOMICS_ENDPOINT) {
  const apiAddress = getCleanApiAddress();
  const configUrl = `${apiAddress}/${url}`;

  return axios.get<EconomicsInfoType>(configUrl);
}

export async function getEconomicsInfo() {
  try {
    const { data } = await getEconomics();
    return data;
  } catch (err) {
    console.error('err fetching economics info', err);
    return null;
  }
}
