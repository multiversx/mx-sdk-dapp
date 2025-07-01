import { RouteType } from 'types';
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
export declare const matchRoute: (routes: RouteType[], pathname: string) => boolean;
//# sourceMappingURL=matchRoute.d.ts.map