import { matchPath } from './matchPath';

/**
 * Allow detecting authenticated routes with pattern parameters
 * @example 
 * routes = [
  * {
      path: "/users/:id",
      component: () => <></>,
      authenticatedRoute: true
    }
]
 */
export const getIsAuthRoute = <
  T extends {
    authenticatedRoute: boolean;
    path: string;
  }
>(
  routes: Array<T>,
  pathname: string
) => {
  const authenticatedRoutes = routes.filter(({ authenticatedRoute }) =>
    Boolean(authenticatedRoute)
  );

  const isOnAuthenticatedRoute = authenticatedRoutes.some(
    ({ path }) => matchPath(path, pathname) !== null
  );

  return isOnAuthenticatedRoute;
};
