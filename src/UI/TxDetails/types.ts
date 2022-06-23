export interface Props {
  title?: React.ReactNode;
  isTimedOut?: boolean;
  transactions: Array<any>;
  className?: string;
  shouldRenderDefaultCss?: boolean;
}
