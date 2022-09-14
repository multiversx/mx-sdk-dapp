import * as React from 'react';
import { ScamInfoType } from 'types/account.types';
import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { getScamFlag } from 'utils/transactions/transactionInfoHelpers/getScamFlag';
import { DataDecode } from '../DataDecode/index';
import { Anchorme, ModalLink } from './components';
import { truncate } from './helpers/truncate';

export const DISPLAYED_DATA_LENGTH = 1000000;

export const DataField = ({
  data,
  scamInfo
}: {
  data?: string;
  scamInfo?: ScamInfoType;
}) => {
  const { hash, pathname } = window.location;
  const hashDecodeMethod = hash.replace('#', '');
  const initialDecodeMethod =
    hashDecodeMethod &&
    Object.values<string>(DecodeMethodEnum).includes(hashDecodeMethod)
      ? hashDecodeMethod
      : DecodeMethodEnum.raw;
  const [decodeMethod, setDecodeMethod] = React.useState<string>(
    hashDecodeMethod
  );

  const [showData, setShowData] = React.useState(false);

  const show = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowData((existing) => !existing);
  };

  const dataString = data ? Buffer.from(data, 'base64').toString() : 'N/A';
  const { stringWithLinks, output, found } = getScamFlag(dataString, scamInfo);

  React.useEffect(() => {
    if (decodeMethod && decodeMethod !== DecodeMethodEnum.raw) {
      window.history.replaceState(
        {},
        document.title,
        `${pathname}#${decodeMethod}`
      );
    }
  }, [decodeMethod, pathname]);

  return (
    <>
      {showData ? (
        <div className='textarea form-control col cursor-text mt-1'>
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
        <a href='/#' onClick={show} className='small-font text-muted'>
          {!showData ? 'Show' : 'Hide'} original message
        </a>
      )}
    </>
  );
};
