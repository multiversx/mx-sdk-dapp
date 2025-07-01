import { FunctionComponent } from 'react';
declare type StylesType = typeof import('*.scss');
export declare type WithStylesImportType = {
    globalStyles?: Record<any, any>;
    styles?: Record<any, any>;
};
export declare function withStyles<TProps>(Component: FunctionComponent<TProps & WithStylesImportType>, imports: {
    ssrGlobalStyles?: () => Promise<StylesType>;
    ssrStyles?: () => Promise<StylesType>;
    clientStyles?: () => StylesType;
}): (props: TProps) => JSX.Element;
export {};
//# sourceMappingURL=withStyles.d.ts.map