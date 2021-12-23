export interface TransactionToastPropsType {
  title?: string;
  toastId: string;
  endTime: number;
  className?: string;
  startTime: number;
  errorMessage?: string;
  successMessage?: string;
  processingMessage?: string;
  shouldRenderDefaultCss?: boolean;
}
