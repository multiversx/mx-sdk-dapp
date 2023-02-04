export interface DappModalConfig {
  showHeader?: boolean;
  showFooter?: boolean;
  headerText?: string;
  footerText?: string;
  modalDialogClassName?: string;
  modalContentClassName?: string;
  modalHeaderClassName?: string;
  modalHeaderTextClassName?: string;
  modalCloseButtonClassName?: string;
  modalBodyClassName?: string;
  modalFooterClassName?: string;
  customModalHeader?: JSX.Element;
  customModalFooter?: JSX.Element;
}

export interface DappModalInteractionConfig {
  openOnMount?: boolean;
  visible?: boolean;
}
