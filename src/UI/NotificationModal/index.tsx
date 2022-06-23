import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import globalStyles from 'assets/sass/main.scss';
import { useGetNotification } from 'hooks';
import { NotificationTypesEnum } from 'types';
import { ModalContainer } from '../ModalContainer';
import { PageState } from '../PageState';
import styles from './notification-modal.scss';

const notificationTypesToIcons = {
  [NotificationTypesEnum.warning]: faExclamationTriangle
};
const defaultIcon = faExclamationTriangle;

export function NotificationModal() {
  const { notification, clearNotification } = useGetNotification();

  const onDone = () => {
    clearNotification();
  };

  const type = notification?.type as NotificationTypesEnum.warning;

  const icon = notification
    ? notificationTypesToIcons[type] || defaultIcon
    : null;

  return (
    <ModalContainer onClose={clearNotification} visible={Boolean(notification)}>
      <div
        className={`${globalStyles.card} ${globalStyles.w100} ${styles.notificationModal}`}
      >
        <PageState
          icon={icon}
          iconClass={notification?.iconClassName}
          iconBgClass={`${globalStyles.p4} ${globalStyles.roundedBgCircle}`}
          iconSize='3x'
          title={notification?.title}
          description={notification?.description}
          action={
            <button
              className={`${globalStyles.btn} ${globalStyles.btnPrimary}`}
              onClick={onDone}
            >
              Done
            </button>
          }
        />
      </div>
    </ModalContainer>
  );
}
