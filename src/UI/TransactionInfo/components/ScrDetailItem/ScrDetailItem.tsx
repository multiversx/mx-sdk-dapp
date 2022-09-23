import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { ResultType } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { DetailItem } from '../DetailItem';

import globalStyles from 'assets/sass/main.scss';

interface ScrDetailItemPropsTypes {
  result: ResultType;
}

export const ScrDetailItem = (props: ScrDetailItemPropsTypes) => {
  const { result } = props;

  return (
    <DetailItem title='SC Result Hash' noBorder>
      <div
        className={classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter
        )}
      >
        <Trim text={result.hash} />

        <CopyButton className={globalStyles.ml2} text={result.hash} />

        <ExplorerLink
          page={explorerUrlBuilder.transactionDetails(
            `${result.originalTxHash}#${result.hash}`
          )}
          className='side-action ml-2'
        >
          <FontAwesomeIcon icon={faSearch} />
        </ExplorerLink>
      </div>
    </DetailItem>
  );
};
