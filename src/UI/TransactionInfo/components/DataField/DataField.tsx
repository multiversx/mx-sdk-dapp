import React, { MouseEvent, useState } from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { N_A } from 'constants/index';
import { ScamInfoType } from 'types/account.types';
import { DataDecode } from 'UI/TransactionInfo/components/DataDecode/index';
import { truncate } from 'utils/operations/truncate';
import { getScamFlag } from 'utils/transactions/transactionInfoHelpers/getScamFlag';
import { useDataDecodeMethod } from 'utils/transactions/transactionInfoHelpers/useDataDecodeMethod';
import { Linkified, ModalLink } from './components';

import styles from './dataField.module.scss';

const DISPLAYED_DATA_LENGTH = 1000000;

export interface DataFieldPropsType {
  data?: string;
  scamInfo?: ScamInfoType;
}

export const DataField = ({ data, scamInfo }: DataFieldPropsType) => {
  const { initialDecodeMethod, setDecodeMethod } = useDataDecodeMethod();
  const [showData, setShowData] = useState(false);

  const show = (event: MouseEvent) => {
    event.preventDefault();
    setShowData((existing) => !existing);
  };

  const dataString = data ? Buffer.from(data, 'base64').toString() : N_A;
  const { textWithLinks, message, isSuspicious } = getScamFlag({
    message: dataString,
    scamInfo
  });

  return (
    <>
      {showData ? (
        <div
          className={classNames(
            globalStyles.formControl,
            globalStyles.col,
            globalStyles.mt1
          )}
        >
          <Linkified
            linkComponent={ModalLink}
            target='_blank'
            rel='noreferrer noopener'
          >
            {textWithLinks}
          </Linkified>
        </div>
      ) : (
        <DataDecode
          value={truncate(message, DISPLAYED_DATA_LENGTH)}
          initialDecodeMethod={initialDecodeMethod}
          setDecodeMethod={setDecodeMethod}
        />
      )}

      {isSuspicious && (
        <a
          href='/#'
          onClick={show}
          className={classNames(globalStyles.textMuted, styles.smallFont)}
        >
          {!showData ? 'Show' : 'Hide'} original message
        </a>
      )}
    </>
  );
};
