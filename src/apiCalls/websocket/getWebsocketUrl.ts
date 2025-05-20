import axios from 'axios';

export async function getWebsocketUrl(apiAddress: string) {
  try {
    const { data } = await axios.get<{ url: string }>(
      `${apiAddress}/websocket/config`
    );
    return `wss://${data.url}`;
  } catch (err) {
    console.error(err);
    throw new Error('Can not get websocket url');
  }
}
