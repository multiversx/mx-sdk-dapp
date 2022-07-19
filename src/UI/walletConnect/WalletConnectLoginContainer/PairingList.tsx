import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { PairingTypes } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { getGeneratedClasses } from 'UI/utils';

interface PairingListPropsType {
  connectExisting: (pairing: PairingTypes.Struct) => Promise<void>;
  activePairings: PairingTypes.Struct[];
  className: string;
}

export const Pairinglist = ({
  connectExisting,
  activePairings,
  className = 'wallet-connect-pairing-list'
}: PairingListPropsType) => {
  const generatedClasses = getGeneratedClasses(className, {
    pairList: ` ${globalStyles.dFlex} ${globalStyles.flexColumn} ${globalStyles.mt3} ${globalStyles.pairList}`,
    pairButton: `${globalStyles.btn} ${globalStyles.btnLight} ${globalStyles.dFlex} ${globalStyles.flexRow} ${globalStyles.alignItemsCenter} ${globalStyles.border} ${globalStyles.rounded} ${globalStyles.mb2}`,
    pairImage: globalStyles.pairImage,
    pairDetails: `${globalStyles.dFlex} ${globalStyles.flexColumn} ${globalStyles.alignItemsStart} ${globalStyles.ml3}`
  });

  return (
    <div className={generatedClasses.pairsContainer}>
      <p className={generatedClasses.leadText}>
        or choose an existing pairing:
      </p>
      <div className={generatedClasses.pairList}>
        {activePairings.map((pairing) => (
          <button
            type='button'
            key={pairing.topic}
            onClick={() => connectExisting(pairing)}
            className={generatedClasses.pairButton}
          >
            {pairing.peerMetadata && (
              <>
                <img
                  src={pairing.peerMetadata.icons[0]}
                  alt={pairing.peerMetadata.name}
                  className={generatedClasses.pairImage}
                />
                <div className={generatedClasses.pairDetails}>
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
