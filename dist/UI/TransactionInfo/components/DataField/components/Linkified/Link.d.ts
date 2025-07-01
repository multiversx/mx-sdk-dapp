/// <reference types="react" />
import { LinkComponent, LinkComponentProps } from './linkified.types';
export interface LinkPropsType extends LinkComponentProps {
    linkComponent?: LinkComponent;
}
export declare const Link: ({ href, linkComponent, truncate, ...rest }: LinkPropsType) => JSX.Element;
//# sourceMappingURL=Link.d.ts.map