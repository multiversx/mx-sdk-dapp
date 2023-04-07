import axios from 'axios';

export async function getWebsocketUrl(apiAddress: string) {
  try {
    // @ts-ignore
    const { data } = await axios.get<{ url: string }>(
      `${apiAddress}/websocket/config`
    );
    return `wss://${data.url}`;
    // return `wss://testnet-socket-extras-api.multiversx.com`;
  } catch (err) {
    console.error(err);
    throw new Error('Can not get websocket url');
  }
}
