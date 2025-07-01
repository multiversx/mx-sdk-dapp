import { ReactNode } from 'react';
export interface AuthorizationInfo {
    url: string;
    duration: string;
    className?: string;
}
export interface ScamPhishingAlertPropsType {
    url: string;
    className?: string;
    icon?: ReactNode;
    authorizationInfo?: AuthorizationInfo;
}
export declare const ScamPhishingAlert: (props: ScamPhishingAlertPropsType) => JSX.Element;
//# sourceMappingURL=ScamPhishingAlert.d.ts.map