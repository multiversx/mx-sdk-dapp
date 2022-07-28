import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { PairingTypes } from '@elrondnetwork/erdjs-wallet-connect-provider';

interface PairingListPropsType {
  connectExisting: (pairing: PairingTypes.Struct) => Promise<void>;
  activePairings: PairingTypes.Struct[];
  className: string;
}

export const Pairinglist = ({
  connectExisting,
  activePairings,
  className = 'dapp-wallet-connect-pairing-list'
}: PairingListPropsType) => {
  const classes = {
    pairsContainer: className,
    leadText: '',
    pairList: ` ${globalStyles.dFlex} ${globalStyles.flexColumn} ${globalStyles.mt3} ${globalStyles.pairList}`,
    pairButton: `${globalStyles.btn} ${globalStyles.btnLight} ${globalStyles.dFlex} ${globalStyles.flexRow} ${globalStyles.alignItemsCenter} ${globalStyles.border} ${globalStyles.rounded} ${globalStyles.mb2}`,
    pairImage: globalStyles.pairImage,
    pairDetails: `${globalStyles.dFlex} ${globalStyles.flexColumn} ${globalStyles.alignItemsStart} ${globalStyles.ml3}`
  };

  return (
    <div className={classes.pairsContainer}>
      <p className={classes.leadText}>or choose an existing pairing:</p>
      <div className={classes.pairList}>
        {activePairings.map((pairing) => (
          <button
            type='button'
            key={pairing.topic}
            onClick={() => connectExisting(pairing)}
            className={classes.pairButton}
          >
            {pairing.peerMetadata && (
              <>
                <img
                  src={pairing.peerMetadata.icons[0]}
                  alt={pairing.peerMetadata.name}
                  className={classes.pairImage}
                />
                <div className={classes.pairDetails}>
                  <strong>{pairing.peerMetadata.name}</strong>
                  <span>{pairing.peerMetadata.description}</span>
                  <span>{pairing.peerMetadata.url}</span>
                </div>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
