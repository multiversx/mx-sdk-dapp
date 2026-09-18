import axios from 'axios';

const buildWebsocketUrl = (host: string): string => {
  if (typeof host !== 'string' || host.length === 0) {
    throw new Error('Websocket config returned no url');
  }

  if (/[@?#]/.test(host) || host.includes('://')) {
    throw new Error(`Websocket config returned an unexpected url: "${host}"`);
  }

  const url = new URL(`wss://${host}`);

  if (url.protocol !== 'wss:') {
    throw new Error(`Websocket url must use wss, got "${url.protocol}//"`);
  }

  return url.toString().replace(/\/$/, '');
};

export async function getWebsocketUrl(apiAddress: string) {
  try {
    const { data } = await axios.get<{ url: string }>(
      `${apiAddress}/websocket/config`
    );

    return buildWebsocketUrl(data?.url);
  } catch (err) {
    console.error(err);
    throw new Error('Can not get websocket url');
  }
}
