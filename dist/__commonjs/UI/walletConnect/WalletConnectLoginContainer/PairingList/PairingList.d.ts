/// <reference types="react" />
import { PairingTypes } from 'utils/walletconnect/__sdkWalletconnectProvider';
import { WithClassnameType } from '../../../types';
export interface WalletConnectPairingListClassesType {
    leadClassName?: string;
    wrapperClassName?: string;
    buttonClassName?: string;
    iconClassName?: string;
    loaderClassName?: string;
    detailsClassName?: string;
    removeClassName?: string;
}
export interface PairingListPropsType extends WithClassnameType {
    connectExisting: (pairing: PairingTypes.Struct) => Promise<void>;
    removeExistingPairing: (topic: string) => Promise<void>;
    activePairings: PairingTypes.Struct[];
    className: string;
    pairingListClasses?: WalletConnectPairingListClassesType;
}
export declare const Pairinglist: (props: PairingListPropsType) => JSX.Element;
//# sourceMappingURL=PairingList.d.ts.map