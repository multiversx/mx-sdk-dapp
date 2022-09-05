import { RouteType } from 'types';
import { matchPath } from './matchPath';

export const matchRoute = (routes: RouteType[], pathname: string) => {
  const authenticatedRoutes = routes.filter(({ authenticatedRoute }) =>
    Boolean(authenticatedRoute)
  );

  const isOnAuthenticatedRoute = authenticatedRoutes.some(
    ({ path }) => matchPath(path, pathname) !== null
  );

  return isOnAuthenticatedRoute;
};
