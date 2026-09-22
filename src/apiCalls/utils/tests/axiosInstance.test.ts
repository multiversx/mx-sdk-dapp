import axios from 'axios';
import { axiosInstance } from '../axiosInstance';

describe('axiosInstance.get', () => {
  afterEach(() => jest.restoreAllMocks());

  it('passes timeout, params, baseURL and signal to the request', async () => {
    const request = jest.spyOn(axios, 'request').mockResolvedValue({
      data: new TextEncoder().encode(JSON.stringify({ ok: true })).buffer,
      status: 200,
      statusText: 'OK',
      headers: { 'content-type': 'application/json' }
    });
    const controller = new AbortController();

    const response = await axiosInstance.get('https://api.example/accounts', {
      timeout: 4000,
      params: { withGuardianInfo: true },
      baseURL: 'https://api.example',
      signal: controller.signal
    });

    expect(request).toHaveBeenCalledWith(
      expect.objectContaining({
        url: 'https://api.example/accounts',
        timeout: 4000,
        params: { withGuardianInfo: true },
        baseURL: 'https://api.example',
        signal: controller.signal
      })
    );
    expect(response.data).toEqual({ ok: true });
  });
});
