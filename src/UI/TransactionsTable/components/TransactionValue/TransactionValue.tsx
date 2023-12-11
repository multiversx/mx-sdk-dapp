import React, { ReactNode } from 'react';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { NftEnumType } from 'types/tokens.types';
import { FormatAmount } from 'UI/FormatAmount';
import { TransactionActionBlock } from 'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock';
import { WithTransactionType } from 'UI/types';
import { getTransactionValue } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionValue';

interface TokenWrapperPropsType {
  children: ReactNode;
  titleText?: string;
}

export interface TransactionValuePropsType extends WithTransactionType {
  hideMultipleBadge?: boolean;
}

const TokenWrapperComponent = ({
  children,
  titleText,
  globalStyles
}: TokenWrapperPropsType & WithStylesImportType) => (
  <div
    className={classNames(globalStyles?.dFlex, globalStyles?.alignItemsCenter)}
    data-testid={DataTestIdsEnum.transactionValue}
  >
    {children}

    {titleText && (
      <FontAwesomeIcon
        icon={faLayerGroup}
        data-testid={DataTestIdsEnum.transactionValueIcon}
        className={classNames(globalStyles?.ml2, globalStyles?.textSecondary)}
        title={titleText}
      />
    )}
  </div>
);

const TokenWrapper = withStyles(TokenWrapperComponent, {
  ssrStyles: () =>
    import('UI/TransactionsTable/components/transactionsTable.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionsTable/components/transactionsTable.styles.scss')
      .default
});

const TransactionValueComponent = ({
  transaction,
  hideMultipleBadge,
  styles
}: TransactionValuePropsType & WithStylesImportType) => {
  const { egldValueData, tokenValueData, nftValueData } = getTransactionValue({
    transaction,
    hideMultipleBadge
  });

  if (tokenValueData) {
    return (
      <div className={styles?.transactionCell}>
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
      <div className={styles?.transactionCell}>
        <TokenWrapper titleText={nftValueData.titleText}>
          <TransactionActionBlock.Nft {...nftValueData} badgeText={badgeText} />
        </TokenWrapper>
      </div>
    );
  }

  if (egldValueData) {
    return (
      <div className={styles?.transactionCell}>
        <FormatAmount
          value={egldValueData.value}
          digits={2}
          data-testid={DataTestIdsEnum.transactionValue}
        />
      </div>
    );
  }

  return null;
};

export const TransactionValue = withStyles(TransactionValueComponent, {
  ssrStyles: () =>
    import('UI/TransactionsTable/components/transactionsTable.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionsTable/components/transactionsTable.styles.scss')
      .default
});
