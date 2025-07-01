import { ReactNode } from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { WithClassnameType } from '../types';
export interface PageStateProps extends WithClassnameType {
    title?: ReactNode;
    icon?: IconProp | IconDefinition | null;
    iconClass?: string;
    iconSize?: SizeProp;
    iconBgClass?: string;
    action?: ReactNode;
    description?: string | ReactNode;
}
export declare const PageState: (props: PageStateProps) => JSX.Element;
//# sourceMappingURL=PageState.d.ts.map