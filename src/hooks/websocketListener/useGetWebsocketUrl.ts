import axios from 'axios';
import { useEffect, useState } from 'react';

export function useGetWebsocketUrl(apiAddress: string) {
  const [url, setUrl] = useState<string>();
  const [error, setError] = useState<unknown>();

  async function getUrl() {
    try {
      const { data } = await axios.get<{ url: string }>(
        `${apiAddress}/websocket/config`
      );
      setUrl(`wss://${data.url}`);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    getUrl();
  }, []);

  return { data: url, error, getUrl };
}
