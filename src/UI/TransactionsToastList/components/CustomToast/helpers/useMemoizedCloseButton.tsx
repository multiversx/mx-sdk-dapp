import React, { useMemo } from 'react';
import { useStyles } from 'hocs/useStyles';
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
  const { styles } = useStyles({
    ssrImportCallback: () =>
      import(
        'UI/TransactionsToastList/components/CustomToast/customToast.styles.scss'
      ),
    clientImportCallback: () =>
      require('UI/TransactionsToastList/components/CustomToast/customToast.styles.scss')
        .default
  });

  const closeButton = useMemo(() => {
    return CustomCloseButton ? (
      <CustomCloseButton onClick={onDelete} />
    ) : (
      <DefaultToastDeleteButton onClick={onDelete} className={styles?.close} />
    );
  }, [CustomCloseButton, onDelete, styles]);

  return closeButton;
};
