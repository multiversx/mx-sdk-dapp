export interface TransactionToastPropsType {
  title?: string;
  toastId: string;
  className?: string;
  errorMessage?: string;
  successMessage?: string;
  processingMessage?: string;
  shouldRenderDefaultCss?: boolean;
  onClose?: (toastId: string) => void;
}
