import React, { ReactNode } from 'react';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InterpretedTransactionType } from 'types/serverTransactions.types';

import { NftEnumType } from 'types/tokens.types';
import { FormatAmount } from 'UI/FormatAmount';
import { TransactionActionBlock } from 'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock';
import { getTransactionValue } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionValue';

import styles from '../transactionsTable.styles.scss';

interface TokenWrapperPropsTypes {
  children: ReactNode;
  titleText?: string;
}

interface TransactionValuePropsTypes {
  transaction: InterpretedTransactionType;
  hideMultipleBadge?: boolean;
}

const TokenWrapper = (props: TokenWrapperPropsTypes) => {
  const { children, titleText } = props;

  return (
    <div
      className='transaction-value d-flex align-items-center'
      data-testid='transactionValue'
    >
      {children}

      {titleText && (
        <FontAwesomeIcon
          icon={faLayerGroup}
          data-testid='transactionValueIcon'
          className='ml-2 text-secondary'
          title={titleText}
        />
      )}
    </div>
  );
};

export const TransactionValue = (props: TransactionValuePropsTypes) => {
  const { transaction, hideMultipleBadge } = props;
  const { egldValueData, tokenValueData, nftValueData } = getTransactionValue({
    transaction,
    hideMultipleBadge
  });

  if (tokenValueData) {
    return (
      <div className={styles.transactionCell}>
        <TokenWrapper titleText={tokenValueData.titleText}>
          <TransactionActionBlock.Token {...tokenValueData} />
        </TokenWrapper>
      </div>
    );
  }

  if (nftValueData) {
    const hideBadgeForMetaESDT =
      nftValueData.token.type === NftEnumType.MetaESDT;
    const badgeText = hideBadgeForMetaESDT ? null : nftValueData.badgeText;

    return (
      <div className={styles.transactionCell}>
        <TokenWrapper titleText={nftValueData.titleText}>
          <TransactionActionBlock.Nft {...nftValueData} badgeText={badgeText} />
        </TokenWrapper>
      </div>
    );
  }

  return (
    <div className={styles.transactionCell}>
      <FormatAmount
        value={egldValueData.value}
        digits={2}
        data-testid='transactionValue'
      />
    </div>
  );
};
