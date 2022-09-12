import { matchPath } from 'wrappers/AuthenticatedRoutesWrapper/helpers/matchPath';

export function getIsPathameEqualToCallbackRoute(callbackRoute?: string) {
  const isPathameEqualToCallbackRoute =
    callbackRoute != null &&
    matchPath(callbackRoute, window.location.pathname) != null;
  return isPathameEqualToCallbackRoute;
}
