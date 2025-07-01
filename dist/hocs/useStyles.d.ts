declare type StylesType = typeof import('*.scss');
export declare type WithStylesImportType = {
    globalStyles?: Record<any, any>;
    styles?: Record<any, any>;
};
export declare function useStyles({ ssrGlobalImportCallback, ssrImportCallback, clientImportCallback }: {
    ssrGlobalImportCallback?: () => Promise<StylesType>;
    ssrImportCallback?: () => Promise<StylesType>;
    clientImportCallback?: () => StylesType;
}): {
    globalStyles: Record<any, any>;
    styles: Record<any, any> | undefined;
};
export {};
//# sourceMappingURL=useStyles.d.ts.map