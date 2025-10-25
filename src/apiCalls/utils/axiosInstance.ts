import { buildAxiosFetch } from '@lifeomic/axios-fetch';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type RequestInit = {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  [key: string]: any;
};

// Needs to be used because an async call made after cross-window user interaction makes the dapp unresponsive

const fetch = buildAxiosFetch(axios);

const getFormattedAxiosResponse = async <T>(response: Response, config?: T) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Clone the response to be able to read it twice (for status and data)
  const clonedResponse = response.clone();

  // Parse the JSON body asynchronously
  const jsonPromise = clonedResponse.json();

  // Return the standardized response object
  const [responseData] = await Promise.all([jsonPromise]);
  return {
    data: responseData,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    config
  };
};

async function customPost<T = any, R = AxiosResponse<T, any>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D> | undefined
): Promise<R> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...(config?.headers || {})
      },
      ...config
    } as RequestInit);

    return getFormattedAxiosResponse(response, config) as unknown as Promise<R>;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }
}

async function customGet<T = any, R = AxiosResponse<T, any>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D> | undefined
): Promise<R> {
  try {
    const response = await fetch(url, config as RequestInit);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return getFormattedAxiosResponse(response, config) as unknown as Promise<R>;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }
}

async function customPatch<T = any, R = AxiosResponse<T, any>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D> | undefined
): Promise<R> {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
      headers: config?.headers || {},
      ...config
    } as RequestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return getFormattedAxiosResponse(response, config) as unknown as Promise<R>;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }
}

const axiosInstance = axios.create();
axiosInstance.get = customGet;
axiosInstance.post = customPost;
axiosInstance.patch = customPatch;

export { axiosInstance };
