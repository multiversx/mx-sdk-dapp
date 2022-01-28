export interface TransactionToastPropsType {
  title?: string;
  toastId: string;
  className?: string;
  errorMessage?: string;
  successMessage?: string;
  processingMessage?: string;
  withTxNonce?: boolean;
  shouldRenderDefaultCss?: boolean;
  onClose?: (toastId: string) => void;
}
