import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { WithClassnameType } from '../../types';
export interface WalletConnectConnectionStatusType {
    icon?: IconProp | IconDefinition | null;
    iconClassName?: string;
    description?: string | ReactNode;
    details?: string | ReactNode;
}
export declare const WalletConnectConnectionDescription: (props: WalletConnectConnectionStatusType & WithClassnameType) => JSX.Element;
//# sourceMappingURL=WalletConnectConnectionDescription.d.ts.map