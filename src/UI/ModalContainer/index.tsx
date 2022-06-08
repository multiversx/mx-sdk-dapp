import React from 'react';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
// import ReactBootstrap from 'optionalPackages/react-bootstrap';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
// import { wrapperClassName } from 'utils';
import useAwesomeModal from '../AwesomeModal/hooks/useAwesomeModal';
import AwesomeModal from '../AwesomeModal/components/AwesomeModal';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ModalContainer = ({
  title,
  noSpacer,
  onClose,
  children
}: {
  children: React.ReactNode;
  noSpacer?: boolean;
  className?: string;
  title: React.ReactNode;
  onClose?: () => void;
}) => {
  const { toggle, visible } = useAwesomeModal();

  return (
    <AwesomeModal visible={visible} toggle={() => toggle()}>
      <div className='modal-card card w-100'>
        <div className='card-title h5 mb-0'>
          <div className='d-flex justify-content-between align-items-center pt-spacer px-spacer mb-0'>
            <div className={'px-3'}>{title}</div>
            <button
              type='button'
              className='btn btn-light px-3 py-2'
              onClick={onClose}
            >
              <ReactFontawesome.FontAwesomeIcon
                size='lg'
                icon={icons.faTimes}
              />
            </button>
          </div>
        </div>

        <div
          className={`modal-card-body text-center ${
            noSpacer ? 'p-0' : 'p-spacer'
          }`}
        >
          {children}
        </div>
      </div>
    </AwesomeModal>
  );
  //
  // return (
  //   <ReactBootstrap.Modal
  //     show
  //     backdrop='static'
  //     onHide={onClose}
  //     className={`modal-container ${
  //       className ? className : ''
  //     } ${wrapperClassName}`}
  //     animation={false}
  //     centered
  //   >
  //     <div className='modal-card card w-100'>
  //       <div className='card-title h5 mb-0'>
  //         <div className='d-flex justify-content-between align-items-center pt-spacer px-spacer mb-0'>
  //           <div className={'px-3'}>{title}</div>
  //           <button
  //             type='button'
  //             className='btn btn-light px-3 py-2'
  //             onClick={onClose}
  //           >
  //             <ReactFontawesome.FontAwesomeIcon
  //               size='lg'
  //               icon={icons.faTimes}
  //             />
  //           </button>
  //         </div>
  //       </div>
  //
  //       <div
  //         className={`modal-card-body text-center ${
  //           noSpacer ? 'p-0' : 'p-spacer'
  //         }`}
  //       >
  //         {children}
  //       </div>
  //     </div>
  //   </ReactBootstrap.Modal>
  // );
};

export default ModalContainer;
