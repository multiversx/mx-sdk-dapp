import React from 'react';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { FormatAmount } from 'UI/FormatAmount';
import { TransactionActionBlock } from 'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock';
import { getTransactionValue } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionValue';

const TokenWrapper = ({
  children,
  titleText
}: {
  children: React.ReactNode;
  titleText?: string;
}) => {
  return (
    <div className='transaction-value d-flex align-items-center'>
      {children}
      {titleText && (
        <FontAwesomeIcon
          icon={faLayerGroup}
          className='ml-2 text-secondary'
          title={titleText}
        />
      )}
    </div>
  );
};

export const TransactionValue = ({
  transaction,
  hideMultipleBadge
}: {
  transaction: InterpretedTransactionType;
  hideMultipleBadge?: boolean;
}) => {
  const { egldValueData, tokenValueData, nftValueData } = getTransactionValue({
    transaction,
    hideMultipleBadge
  });

  if (tokenValueData) {
    return (
      <TokenWrapper titleText={tokenValueData.titleText}>
        <TransactionActionBlock.Token {...tokenValueData} />
      </TokenWrapper>
    );
  }

  if (nftValueData) {
    const hideBadgeForMetaESDT =
      nftValueData.token.type === NftEnumType.MetaESDT;
    const badgeText = hideBadgeForMetaESDT ? null : nftValueData.badgeText;

    return (
      <TokenWrapper titleText={nftValueData.titleText}>
        <TransactionActionBlock.Nft {...nftValueData} badgeText={badgeText} />
      </TokenWrapper>
    );
  }

  return <FormatAmount value={egldValueData.value} digits={2} />;
};
