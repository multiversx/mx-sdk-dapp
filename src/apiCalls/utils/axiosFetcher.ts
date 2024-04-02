import { axiosInstance } from 'apiCalls/utils/axiosInstance';

export const axiosFetcher = (url: string) =>
  axiosInstance.get(url).then((response) => response.data);
