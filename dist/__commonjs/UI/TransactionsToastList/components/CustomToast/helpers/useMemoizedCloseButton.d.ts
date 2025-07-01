/// <reference types="react" />
import { CustomToastPropsType } from '../customToast.types';
interface MemoizedCloseButtonPropsType {
    CustomCloseButton: CustomToastPropsType['CustomCloseButton'];
    onDelete: CustomToastPropsType['onDelete'];
}
export declare const useMemoizedCloseButton: ({ CustomCloseButton, onDelete }: MemoizedCloseButtonPropsType) => JSX.Element;
export {};
//# sourceMappingURL=useMemoizedCloseButton.d.ts.map