import React from 'react';

import {
  DataDecode,
  DataDecodePropsType
} from 'UI/TransactionInfo/components/DataDecode';

import ResultWrapper from '../ResultWrapper/ResultWrapper';

const ResultData = (props: DataDecodePropsType) => (
  <ResultWrapper label='Data'>
    <DataDecode {...props} />
  </ResultWrapper>
);

export default ResultData;
