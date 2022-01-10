import React from 'react';
import { Modal } from 'react-bootstrap';
import { clearNotificationModal } from 'redux/slices';
import { useDispatch, useSelector } from 'redux/store';
import { notificationModalSelector } from '../../redux/selectors';
import PageState from '../PageState';

const NotificationModal = () => {
  const notificationModal = useSelector(notificationModalSelector);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    setShowModal(Boolean(notificationModal));
  }, [notificationModal]);

  const toggleModal = (show: boolean) => () => {
    setShowModal(show);
  };

  const onDone = () => {
    setShowModal(false);
    dispatch(clearNotificationModal());
  };
  return (
    <React.Fragment>
      {showModal && notificationModal && (
        <Modal
          show={showModal}
          backdrop={true}
          onHide={toggleModal(false)}
          className='modal-container'
          animation={false}
          centered
        >
          <div className='card w-100 notification-modal'>
            <PageState
              icon={notificationModal.icon}
              iconClass={notificationModal.iconClassName}
              iconBgClass='p-4 rounded-bg-circle'
              iconSize='3x'
              title={notificationModal.title}
              description={notificationModal.description}
              action={
                <button
                  className='btn btn-primary'
                  onClick={() => {
                    onDone();
                  }}
                >
                  Done
                </button>
              }
            />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default NotificationModal;
