import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest
} from 'msw';
import { setupServer } from 'msw/node';
import { testAddress, testNetwork } from './accountConfig';
import {
  account,
  dappConfig,
  networkConfig,
  socketResponse,
  websocketConfig
} from './data';

export const mockResponse =
  <T extends DefaultBodyType>(body: T) =>
  (
    _req: RestRequest<never, PathParams<string>>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext
  ) => {
    return res(ctx.status(200), ctx.json(body));
  };

const handlers = [
  rest.get(`${testNetwork.apiAddress}/dapp/config`, mockResponse(dappConfig)),

  rest.get(
    `${testNetwork.apiAddress}/network/config`,
    mockResponse(networkConfig)
  ),
  rest.get(
    `https://${websocketConfig.url}/socket.io/`,
    mockResponse(socketResponse)
  ),
  rest.get(
    `${testNetwork.apiAddress}/websocket/config`,
    mockResponse(websocketConfig)
  ),
  rest.get(
    `${testNetwork.apiAddress}/accounts/${testAddress}`,
    mockResponse(account)
  )
];

// This configures a request mocking server with the given request handlers.
const server = setupServer(...handlers);

export { server, rest };
