import axios, { InternalAxiosRequestConfig } from 'axios';
import { setAxiosInterceptors } from '../setAxiosInterceptors';

const API = 'https://api.multiversx.com';
const TOKEN = 'native-auth-token';

const runRequestInterceptor = async (
  config: Partial<InternalAxiosRequestConfig>
) => {
  const handlers = (axios.interceptors.request as any).handlers.filter(Boolean);
  const handler = handlers[handlers.length - 1];

  return (await handler.fulfilled({
    headers: {},
    ...config
  })) as InternalAxiosRequestConfig;
};

describe('setAxiosInterceptors', () => {
  afterEach(() => {
    axios.interceptors.request.clear();
    axios.interceptors.response.clear();
  });

  it('attaches the bearer token for a request inside an authenticated domain', async () => {
    setAxiosInterceptors({
      authenticatedDomains: [API],
      bearerToken: TOKEN
    });

    const config = await runRequestInterceptor({
      baseURL: API,
      url: `${API}/accounts/erd1qqq`
    });

    expect(config.headers.Authorization).toEqual(`Bearer ${TOKEN}`);
  });

  it('does not attach the bearer token when an absolute url points off-domain', async () => {
    setAxiosInterceptors({
      authenticatedDomains: [API],
      bearerToken: TOKEN
    });

    const config = await runRequestInterceptor({
      baseURL: API,
      url: 'https://attacker.example/collect'
    });

    expect(config.headers.Authorization).toBeUndefined();
  });

  it('resolves relative urls against baseURL', async () => {
    setAxiosInterceptors({
      authenticatedDomains: [API],
      bearerToken: TOKEN
    });

    const config = await runRequestInterceptor({
      baseURL: API,
      url: '/accounts/erd1qqq'
    });

    expect(config.headers.Authorization).toEqual(`Bearer ${TOKEN}`);
  });

  it('checks the path axios actually requests when baseURL has a path', async () => {
    setAxiosInterceptors({
      authenticatedDomains: [`${API}/v1`],
      bearerToken: TOKEN
    });

    const inside = await runRequestInterceptor({
      baseURL: `${API}/v1`,
      url: '/accounts/erd1qqq'
    });
    const outside = await runRequestInterceptor({
      baseURL: `${API}/v2`,
      url: '/accounts/erd1qqq'
    });

    expect(inside.headers.Authorization).toEqual(`Bearer ${TOKEN}`);
    expect(outside.headers.Authorization).toBeUndefined();
  });

  it('does not attach the token when absolute urls are disabled and baseURL is off-domain', async () => {
    setAxiosInterceptors({
      authenticatedDomains: [API],
      bearerToken: TOKEN
    });

    const config = await runRequestInterceptor({
      baseURL: 'https://other.example',
      url: `${API}/accounts/erd1qqq`,
      allowAbsoluteUrls: false
    } as Partial<InternalAxiosRequestConfig>);

    expect(config.headers.Authorization).toBeUndefined();
  });

  it('does not attach anything without a bearer token', async () => {
    setAxiosInterceptors({ authenticatedDomains: [API] });

    const config = await runRequestInterceptor({
      baseURL: API,
      url: `${API}/accounts/erd1qqq`
    });

    expect(config.headers.Authorization).toBeUndefined();
  });

  it('preserves interceptors registered by the host app', async () => {
    const hostInterceptor = jest.fn((config) => config);
    axios.interceptors.request.use(hostInterceptor);

    setAxiosInterceptors({
      authenticatedDomains: [API],
      bearerToken: TOKEN
    });
    // a second call must replace only our own handlers
    setAxiosInterceptors({
      authenticatedDomains: [API],
      bearerToken: TOKEN
    });

    const handlers = (axios.interceptors.request as any).handlers.filter(
      Boolean
    );

    expect(handlers.some((h: any) => h.fulfilled === hostInterceptor)).toBe(
      true
    );
  });
});
