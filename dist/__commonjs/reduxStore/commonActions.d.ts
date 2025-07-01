import { IframeLoginTypes } from 'lib/sdkWebWalletIframeProvider';
import { LoginMethodsEnum } from 'types/enums.types';
export interface LoginActionPayloadType {
    address: string;
    loginMethod: LoginMethodsEnum;
    iframeLoginType?: IframeLoginTypes;
}
export declare const logoutAction: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"logout">;
export declare const loginAction: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: LoginActionPayloadType], LoginActionPayloadType, "login", never, never>;
//# sourceMappingURL=commonActions.d.ts.map