import React from 'react';
import platform from 'platform';
import { ReactComponent as Lightning } from './lightning.svg';
import { LoginModalPropsType } from './types';

const WalletConnectLoginModal = ({
  title = 'Maiar Login',
  lead = 'Scan the QR code using Maiar',
  qrSvg,
  loginUri,
  error
}: LoginModalPropsType) => {
  const isMobile =
    platform?.os?.family === 'iOS' || platform?.os?.family === 'Android';

  return (
    <div className='m-auto login-container'>
      <div className='card my-3 text-center'>
        <div className='card-body p-4 mx-lg-4'>
          <div
            className='mx-auto mb-3'
            dangerouslySetInnerHTML={{
              __html: qrSvg
            }}
            style={{
              width: '15rem',
              height: '15rem'
            }}
          />
          <h4 className='mb-3'>{title}</h4>
          {isMobile ? (
            <React.Fragment>
              <p className='lead mb-0'>
                Scan the QR code using Maiar or click the button below to open
                the App
              </p>
              <a
                id='accessWalletBtn'
                data-testid='accessWalletBtn'
                className='btn btn-primary px-4 mt-4'
                href={loginUri}
                rel='noopener noreferrer nofollow'
                target='_blank'
              >
                <Lightning
                  className='mr-2'
                  style={{
                    width: '0.7rem',
                    height: '0.7rem'
                  }}
                />
                {title}
              </a>
            </React.Fragment>
          ) : (
            <p className='lead mb-0'>{lead}</p>
          )}
          <div>
            {error && (
              <p className='text-danger d-flex justify-content-center align-items-center'>
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectLoginModal;
