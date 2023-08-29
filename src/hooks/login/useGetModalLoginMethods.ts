import { useState } from 'react';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/index';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { useDappModal } from 'UI/DappModal';
import { useGetIsLoggedIn } from '../account';

export interface UseGetModalLoginMethodsPropsType {
  hideButtonWhenModalOpens?: boolean;
  onContentHide?: (props?: any) => void;
  onContentShow?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  onModalOpens?: (props?: any) => void;
  token: string | undefined;
  wrapContentInsideModal: boolean;
}

export const useGetModalLoginMethods = ({
  hideButtonWhenModalOpens,
  onContentHide,
  onContentShow,
  onModalCloses,
  onModalOpens,
  token,
  wrapContentInsideModal
}: UseGetModalLoginMethodsPropsType) => {
  const isLoggedIn = useGetIsLoggedIn();
  const [showContent, setShowContent] = useState(false);
  const { handleShowModal, handleHideModal } = useDappModal();
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);
  const shouldRenderButton = !hideButtonWhenModalOpens || !showContent;

  const handleOpenModal = () => {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }

    // Hide the content if already open
    if (showContent) {
      return handleHideModal();
    }

    setShowContent(true);
    onContentShow?.();

    if (wrapContentInsideModal) {
      handleShowModal();
      onModalOpens?.();
    }
  };

  const handleCloseModal = () => {
    setShowContent(false);
    onContentHide?.();

    if (wrapContentInsideModal) {
      handleHideModal();
      onModalCloses?.();
    }
  };

  return {
    disabledConnectButton,
    handleCloseModal,
    handleOpenModal,
    shouldRenderButton,
    showContent
  };
};
