import React, { useState, MouseEvent } from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { DappModal } from 'UI/DappModal/components/DappModal';
import { LinkComponentProps } from '../Anchorme/anchorme.types';

import globalStyles from 'assets/sass/main.scss';

export const ModalLink = (props: LinkComponentProps) => {
  const [show, setShow] = useState(false);

  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const link = props.href.replace('https://', '').replace('http://', '');

  return (
    <>
      <a {...props} onClick={onClick} />

      <DappModal visible={show} onHide={handleClose}>
        <div className='card card-small'>
          <div className='card-body text-center p-spacer'>
            <p className='h3 pt-1'>
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className={classNames(
                  globalStyles.textWarning,
                  globalStyles.mr2
                )}
              />
              Caution!
            </p>

            <p className={globalStyles.lead}>
              You are about to navigate to an external website.
            </p>

            <div className='mx-auto mb-spacer'>
              <p>
                This link is not part of Elrond. Do not enter your private
                words, your keystore file or any of your Elrond account
                information.
              </p>
            </div>

            <div className='d-flex align-items-center flex-column mt-spacer'>
              <button
                type='button'
                className='btn btn-primary px-spacer'
                onClick={handleClose}
              >
                Back to safety
              </button>

              <a
                href={props.href}
                target='_blank'
                className={globalStyles.mt3}
                rel='noreferrer noopener'
              >
                Continue to {link}
              </a>
            </div>
          </div>
        </div>
      </DappModal>
    </>
  );
};
