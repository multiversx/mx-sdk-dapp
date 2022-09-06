import React from 'react';

import { TokenArgumentType } from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { TransactionActionBlock } from './TransactionActionBlock/index';

export const ActionToken = ({
  token,
  noValue,
  showLastNonZeroDecimal
}: {
  token: TokenArgumentType;
  noValue?: boolean;
  showLastNonZeroDecimal?: boolean;
}) => {
  if (
    [
      NftEnumType.MetaESDT.toString(),
      NftEnumType.SemiFungibleESDT,
      NftEnumType.NonFungibleESDT
    ].includes(token.type)
  ) {
    switch (token.type) {
      case NftEnumType.SemiFungibleESDT:
        return (
          <div>
            <span>SFT quantity</span>
            <TransactionActionBlock.Nft
              token={token}
              noValue={noValue}
              showLastNonZeroDecimal={showLastNonZeroDecimal}
            />
            <span>of collection</span>
            <TransactionActionBlock.Collection token={token} />
          </div>
        );
      case NftEnumType.NonFungibleESDT:
        return (
          <div>
            <span>NFT</span>
            <TransactionActionBlock.Nft
              token={token}
              noValue={noValue}
              showLastNonZeroDecimal={showLastNonZeroDecimal}
            />
            <span>of collection</span>
            <TransactionActionBlock.Collection token={token} />
          </div>
        );
      case NftEnumType.MetaESDT:
        return (
          <TransactionActionBlock.Nft
            token={token}
            noValue={noValue}
            showLastNonZeroDecimal={showLastNonZeroDecimal}
          />
        );
      default:
        return null;
    }
  } else {
    return (
      <TransactionActionBlock.Token
        token={token}
        noValue={noValue}
        showLastNonZeroDecimal={showLastNonZeroDecimal}
      />
    );
  }
};
