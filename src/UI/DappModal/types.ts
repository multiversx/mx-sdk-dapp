export type DappModalConfig = {
  showHeader?: boolean;
  showFooter?: boolean;
  headerText?: string;
  footerText?: string;
  modalDialogClassName?: string;
  modalContentClassName?: string;
  modalHeaderClassName?: string;
  modalCloseButtonClassName?: string;
  modalBodyClassName?: string;
  modalFooterClassName?: string;
  customModalHeader?: JSX.Element;
  customModalFooter?: JSX.Element;
};

export type DappModalInteractionConfig = {
  openOnMount?: boolean;
};
