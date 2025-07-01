import { HTMLProps, ElementType } from 'react';
export declare type LinkifiedProps = Omit<HTMLProps<HTMLAnchorElement>, 'href'> & {
    truncate?: number;
};
export declare type LinkComponentProps = {
    href: string;
} & LinkifiedProps;
export declare type LinkComponent = ElementType<LinkComponentProps>;
//# sourceMappingURL=linkified.types.d.ts.map