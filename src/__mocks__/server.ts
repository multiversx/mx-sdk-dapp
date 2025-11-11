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
  blocks,
  dappConfig,
  economics,
  networkConfig,
  socketResponse,
  websocketConfig
} from './data';
import { testToken } from './data/testToken';
import { wrapEgldContract } from './data/wrapEgldContract';

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
  rest.get(`${testNetwork.apiAddress}/economics`, mockResponse(economics)),
  rest.get(
    `${testNetwork.apiAddress}/accounts/${testAddress}`,
    mockResponse({ ...account, address: testAddress })
  ),
  rest.get(
    `${testNetwork.apiAddress}/accounts/${account.address}`,
    mockResponse(account)
  ),
  rest.get(
    `${testNetwork.apiAddress}/tokens/${testToken.identifier}`,
    mockResponse(testToken)
  ),
  rest.get(
    `${testNetwork.apiAddress}/accounts/${wrapEgldContract.address}`,
    mockResponse(wrapEgldContract)
  ),
  rest.get(`${testNetwork.apiAddress}/blocks`, mockResponse(blocks))
];

// This configures a request mocking server with the given request handlers.
const server = setupServer(...handlers);

export { server, rest };
