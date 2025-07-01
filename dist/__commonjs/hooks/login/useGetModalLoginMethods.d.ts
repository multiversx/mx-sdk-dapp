export interface UseGetModalLoginMethodsPropsType {
    hideButtonWhenModalOpens?: boolean;
    onContentHide?: (props?: any) => void;
    onContentShow?: (props?: any) => void;
    onModalCloses?: (props?: any) => void;
    onModalOpens?: (props?: any) => void;
    token: string | undefined;
    wrapContentInsideModal: boolean;
}
export declare const useGetModalLoginMethods: ({ hideButtonWhenModalOpens, onContentHide, onContentShow, onModalCloses, onModalOpens, token, wrapContentInsideModal }: UseGetModalLoginMethodsPropsType) => {
    disabledConnectButton: boolean | undefined;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    shouldRenderButton: boolean;
    showContent: boolean;
    showModal: boolean;
};
//# sourceMappingURL=useGetModalLoginMethods.d.ts.map