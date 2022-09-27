import React, { MouseEvent, useState, Fragment } from 'react';

import { N_A } from 'constants/index';
import { ScamInfoType } from 'types/account.types';
import { DataDecode } from 'UI/TransactionInfo/components/DataDecode/index';
import { truncate } from 'utils/operations/truncate';
import { getScamFlag } from 'utils/transactions/transactionInfoHelpers/getScamFlag';
import { useDataDecodeMethod } from 'utils/transactions/transactionInfoHelpers/useDataDecodeMethod';
import { Anchorme, ModalLink } from './components';

import globalStyles from 'assets/sass/main.scss';
import styles from './dataField.module.scss';
import classNames from 'classnames';

const DISPLAYED_DATA_LENGTH = 1000000;

export const DataField = ({
  data,
  scamInfo
}: {
  data?: string;
  scamInfo?: ScamInfoType;
}) => {
  const { initialDecodeMethod, setDecodeMethod } = useDataDecodeMethod();
  const [showData, setShowData] = useState(false);

  const show = (event: MouseEvent) => {
    event.preventDefault();
    setShowData((existing) => !existing);
  };

  const dataString = data ? Buffer.from(data, 'base64').toString() : N_A;
  const { stringWithLinks, output, found } = getScamFlag(dataString, scamInfo);

  return (
    <Fragment>
      {showData ? (
        <div
          className={classNames(
            globalStyles.formControl,
            globalStyles.col,
            globalStyles.mt1
          )}
        >
          <Anchorme
            linkComponent={ModalLink}
            target='_blank'
            rel='noreferrer noopener'
          >
            {stringWithLinks}
          </Anchorme>
        </div>
      ) : (
        <DataDecode
          value={truncate(output, DISPLAYED_DATA_LENGTH)}
          initialDecodeMethod={initialDecodeMethod}
          setDecodeMethod={setDecodeMethod}
        />
      )}

      {found && (
        <a
          href='/#'
          onClick={show}
          className={classNames(globalStyles.textMuted, styles.smallFont)}
        >
          {!showData ? 'Show' : 'Hide'} original message
        </a>
      )}
    </Fragment>
  );
};
