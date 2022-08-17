import { useEffect, useState } from 'react';
import { getWebsocketUrl } from 'utils';

export function useGetWebsocketUrl(apiAddress: string) {
  const [url, setUrl] = useState<string>();
  const [error, setError] = useState<unknown>();

  async function getUrl() {
    try {
      const fetchedUrl = await getWebsocketUrl(apiAddress);
      setUrl(fetchedUrl);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    getUrl();
  }, []);

  return { data: url, error, getUrl };
}
