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

export async function getEconomicsInfo() {
  try {
    const apiAddress = getCleanApiAddress();

    const { data } = await axios.get<EconomicsInfoType>(ECONOMICS_ENDPOINT, {
      baseURL: apiAddress
    });
    return data;
  } catch (err) {
    console.error('err fetching economics info', err);
    return null;
  }
}
