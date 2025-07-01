/// <reference types="react" />
import { AssetType } from 'types/account.types';
export interface AccountNamePropsType {
    address: string;
    assets?: AssetType;
    color?: 'muted' | 'secondary' | string;
    ['data-testid']?: string;
}
export declare const AccountName: (props: AccountNamePropsType) => JSX.Element;
//# sourceMappingURL=AccountName.d.ts.map