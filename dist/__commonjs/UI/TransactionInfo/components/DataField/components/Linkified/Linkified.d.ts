/// <reference types="react" />
import { LinkifiedProps, LinkComponent } from './linkified.types';
export interface LinkifiedPropsType extends LinkifiedProps {
    children: string;
    linkComponent?: LinkComponent;
}
export declare const Linkified: ({ children, ...rest }: LinkifiedPropsType) => JSX.Element;
//# sourceMappingURL=Linkified.d.ts.map