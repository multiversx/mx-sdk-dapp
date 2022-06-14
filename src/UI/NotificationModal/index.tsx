import React from 'react';

import { useGetNotification } from 'hooks';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactBootstrap from 'optionalPackages/react-bootstrap';
import { NotificationTypesEnum } from 'types';

import PageState from '../PageState';

const typedIcons: any = icons;

const notificationTypesToIcons = {
  [NotificationTypesEnum.warning]: typedIcons.faExclamationTriangle
};
const defaultIcon = typedIcons.faExclamationTriangle;

export function NotificationModal() {
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
    <ReactBootstrap.Modal
      show={showModal}
      backdrop={true}
      onHide={notification}
      className={`modal-container`}
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
    </ReactBootstrap.Modal>
  ) : null;
}

export default NotificationModal;
