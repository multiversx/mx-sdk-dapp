import { OnLoginRedirectOptionsType, OnProviderLoginType } from '../../types';
interface OptionalRedirectType extends Omit<OnProviderLoginType, 'token'> {
    options?: OnLoginRedirectOptionsType;
}
export declare function optionalRedirect({ callbackRoute, onLoginRedirect, options }: OptionalRedirectType): void;
export {};
//# sourceMappingURL=optionalRedirect.d.ts.map