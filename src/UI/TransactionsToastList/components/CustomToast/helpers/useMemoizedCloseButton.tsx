import React, { useMemo } from 'react';
import { DefaultToastDeleteButton } from '../../TransactionToast/components';
import { CustomToastPropsType } from '../customToast.types';

interface MemoizedCloseButtonPropsType {
  CustomCloseButton: CustomToastPropsType['CustomCloseButton'];
  onDelete: CustomToastPropsType['onDelete'];
}

export const useMemoizedCloseButton = ({
  CustomCloseButton,
  onDelete
}: MemoizedCloseButtonPropsType) => {
  const closeButton = useMemo(() => {
    return CustomCloseButton ? (
      <CustomCloseButton onClick={onDelete} />
    ) : (
      <DefaultToastDeleteButton onClick={onDelete} />
    );
  }, [CustomCloseButton, onDelete]);

  return closeButton;
};
