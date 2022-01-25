import React from 'react';

import { useGetNotification } from 'hooks';
import { NotificationTypesEnum } from 'types';
import { optionalImport } from 'utils';
import PageState from '../PageState';

const { faExclamationTriangle } = optionalImport(
  '@fortawesome/free-solid-svg-icons/faExclamationTriangle'
);

const { Modal } = optionalImport('react-bootstrap');

const notificationTypesToIcons = {
  [NotificationTypesEnum.warning]: faExclamationTriangle
};
const defaultIcon = faExclamationTriangle;

export function NotificationModal() {
  const { notification, clearNotification } = useGetNotification();

  const showModal = Boolean(notification);
  const onDone = () => {
    clearNotification();
  };

  const icon = notification
    ? notificationTypesToIcons[notification?.type] || defaultIcon
    : null;

  return notification ? (
    <React.Fragment>
      <Modal
        show={showModal}
        backdrop={true}
        onHide={notification}
        className='modal-container'
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
    </React.Fragment>
  ) : null;
}

export default NotificationModal;
