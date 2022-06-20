import * as React from 'react';
import globalStyles from 'assets/sass/main.scss';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import styles from 'UI/TokenDetails/TokenSymbol/token-symbol.scss';

export const Simple = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.tokenSymbol}>{children}</div>
);

export const Combined = ({
  small,
  children
}: {
  small: boolean | undefined;
  children: React.ReactNode;
}) => (
  <div className={`${styles.tokenSymbolCombined} ${small ? styles.small : ''}`}>
    {children}
  </div>
);

export const Wrapped = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.tokenSymbolWrapped}>
    <div className={`${globalStyles.roundedCircle} ${globalStyles.shadow}`}>
      <div className={globalStyles.lockedIcon}>
        <ReactFontawesome.FontAwesomeIcon icon={icons.faDollarSign} size='sm' />
      </div>
      {children}
    </div>
  </div>
);

export const Pool = ({
  first,
  second
}: {
  first: React.ReactNode;
  second: React.ReactNode;
}) => (
  <div className={styles.tokenSymbolPool}>
    <div
      className={`${styles.pool} ${globalStyles.roundedCircle} ${globalStyles.shadow}`}
    >
      {first}
      <div className={styles.poolIcon}>{second}</div>
    </div>
  </div>
);

export const Locked = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.tokenSymbolLocked}>
    {/*<div className='locked rounded-circle shadow'>*/}
    <div
      className={`${styles.locked} ${globalStyles.roundedCircle} ${globalStyles.shadow}`}
    >
      <div className={globalStyles.lockedIcon}>
        <ReactFontawesome.FontAwesomeIcon icon={icons.faLock} size='sm' />
      </div>
      {children}
    </div>
  </div>
);
