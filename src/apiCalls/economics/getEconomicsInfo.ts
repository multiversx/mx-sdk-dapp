import axios from 'axios';
import { ECONOMICS_ENDPOINT } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils/getCleanApiAddress';

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
  return axios.get<EconomicsInfoType>(url, {
    baseURL: apiAddress
  });
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
