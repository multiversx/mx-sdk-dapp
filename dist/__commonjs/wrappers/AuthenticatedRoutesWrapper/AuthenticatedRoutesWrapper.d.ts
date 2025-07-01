import { ReactNode } from 'react';
import { RouteType } from 'types';
export declare const AuthenticatedRoutesWrapper: ({ children, routes, pathName, unlockRoute, onRedirect }: {
    children: ReactNode;
    routes: RouteType[];
    pathName?: string | undefined;
    unlockRoute: string;
    onRedirect?: ((unlockRoute?: string) => void) | undefined;
}) => JSX.Element | null;
//# sourceMappingURL=AuthenticatedRoutesWrapper.d.ts.map