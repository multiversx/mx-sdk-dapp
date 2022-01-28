export interface Props {
  className?: string;
  title?: React.ReactNode;
  shouldRenderDefaultCss?: boolean;
  isTimedOut?: boolean;
  transactions: Array<any>;
}
