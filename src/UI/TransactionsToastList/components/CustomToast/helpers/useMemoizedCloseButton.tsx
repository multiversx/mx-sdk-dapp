import React, { useMemo } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { DefaultToastDeleteButton } from '../../TransactionToast/components';
import { CustomToastPropsType } from '../customToast.types';

interface MemoizedCloseButtonPropsType {
  CustomCloseButton: CustomToastPropsType['CustomCloseButton'];
  onDelete: CustomToastPropsType['onDelete'];
}

const useMemoizedCloseButtonHook = ({
  CustomCloseButton,
  onDelete,
  styles
}: MemoizedCloseButtonPropsType & WithStylesImportType) => {
  const closeButton = useMemo(() => {
    return CustomCloseButton ? (
      <CustomCloseButton onClick={onDelete} />
    ) : (
      <DefaultToastDeleteButton onClick={onDelete} className={styles?.close} />
    );
  }, [CustomCloseButton, onDelete]);

  return closeButton;
};

export const useMemoizedCloseButton = withStyles(useMemoizedCloseButtonHook, {
  local: () =>
    import(
      'UI/TransactionsToastList/components/CustomToast/customToast.styles.scss'
    )
});
