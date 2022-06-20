import React from 'react';

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { useGetNotification } from 'hooks';
import { NotificationTypesEnum } from 'types';

import PageState from '../PageState';

const notificationTypesToIcons = {
  [NotificationTypesEnum.warning]: faExclamationTriangle
};
const defaultIcon = faExclamationTriangle;

export const NotificationModal = () => {
  const { notification, clearNotification } = useGetNotification();

  const showModal = Boolean(notification);
  const onDone = () => {
    clearNotification();
  };

  const type = notification?.type as NotificationTypesEnum.warning;

  const icon = notification
    ? notificationTypesToIcons[type] || defaultIcon
    : null;

  return notification ? (
    <Modal
      show={showModal}
      backdrop={true}
      onHide={notification}
      className={'modal-container'}
      animation={false}
      centered
    >
      <div className='card w-100 notification-modal'>
        <PageState
          icon={icon}
          iconClass={notification.iconClassName}
          iconBgClass='p-4 rounded-bg-circle'
          iconSize='3x'
          title={notification.title}
          description={notification.description}
          action={
            <button className='btn btn-primary' onClick={onDone}>
              Done
            </button>
          }
        />
      </div>
    </Modal>
  ) : null;
};

export default NotificationModal;
