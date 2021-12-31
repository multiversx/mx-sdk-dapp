import * as React from 'react';
import { DappUI, useGetAccountInfo, getAccountBalance } from 'dapp-core';
import { contractAddress } from 'config';
import { useEffect, useState } from 'react';

const TopInfo = () => {
  const account = useGetAccountInfo();
  // TODO: why keep local state ?
  const [userBalance, setUserBalance] = useState<any>(null);

  const updateUserDenominateBalance = async () => {
    // TODO: must not be checked
    if (!account.address) {
      return;
    }
    const { address } = account;
    // TODO: must work out of the box
    const denominateBalance = await getAccountBalance(address);

    setUserBalance(denominateBalance);
  };

  useEffect(() => {
    updateUserDenominateBalance();
  }, [account]);

  return (
    <div className='text-white' data-testid='topInfo'>
      <div className='mb-1'>
        <span className='opacity-6 mr-1'>Your address:</span>
        <span data-testid='accountAddress'> {account.address}</span>
      </div>
      <div className='mb-4'>
        <span className='opacity-6 mr-1'>Contract address:</span>
        <span data-testid='contractAddress'> {contractAddress}</span>
      </div>
      <div>
        <h3 className='py-2'>
          <DappUI.Denominate value={userBalance} data-testid='balance' />
        </h3>
      </div>
    </div>
  );
};

export default TopInfo;
