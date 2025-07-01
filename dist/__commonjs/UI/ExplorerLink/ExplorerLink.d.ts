import { PropsWithChildren } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { WithClassnameType } from '../types';
export interface ExplorerLinkPropsType extends PropsWithChildren, WithClassnameType {
    page: string;
    text?: any;
    customExplorerIcon?: IconProp;
    title?: string;
    onClick?: () => void;
    'data-testid'?: string;
}
export declare const ExplorerLink: (props: ExplorerLinkPropsType) => JSX.Element;
//# sourceMappingURL=ExplorerLink.d.ts.map