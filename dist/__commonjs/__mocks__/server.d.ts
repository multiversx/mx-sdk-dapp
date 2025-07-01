import { DefaultBodyType, PathParams, ResponseComposition, rest, RestContext, RestRequest } from 'msw';
export declare const mockResponse: <T extends DefaultBodyType>(body: T) => (_req: RestRequest<never, PathParams<string>>, res: ResponseComposition<DefaultBodyType>, ctx: RestContext) => import("msw/lib/glossary-de6278a9").m<DefaultBodyType> | Promise<import("msw/lib/glossary-de6278a9").m<DefaultBodyType>>;
declare const server: import("msw/lib/glossary-de6278a9").K;
export { server, rest };
//# sourceMappingURL=server.d.ts.map