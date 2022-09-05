import { matchPath } from 'react-router-dom';
import { RouteType } from 'types';

export const matchRoute = (routes: RouteType[], pathname: string) => {
  const authenticatedRoutes = routes.filter(({ authenticatedRoute }) =>
    Boolean(authenticatedRoute)
  );

  const isOnAuthenticatedRoute = authenticatedRoutes.some(
    ({ path }) => matchPath(path, pathname) !== null
  );

  return isOnAuthenticatedRoute;
};
