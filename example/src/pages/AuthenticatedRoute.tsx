import React, { useEffect, useState } from 'react';
import { logout, getAccountBalance, useGetAccountInfo } from 'dapp-core';
import PingPongPage from './PingPong';

export default function AuthenticatedRoute() {
  const [userBalance, setUserBalance] = useState<any>(null);
  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const account = useGetAccountInfo();

  const updateUserDenominateBalance = async () => {
    if (!account.address) {
      return;
    }
    const { address } = account;
    const denominateBalance = await getAccountBalance(address, true);

    setUserBalance(denominateBalance);
  };

  useEffect(() => {
    updateUserDenominateBalance();
  }, [account]);

  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto' data-testid='unlockPage'>
        <div className='card my-4 text-center'>
          <div className='card-body py-4 px-2 px-sm-2 mx-lg-4'>
            <p className='mb-4'>You are now authenticated </p>
            <p>{`address: ${account.address}`}</p>
            {userBalance != null && <p>{`balance: ${userBalance}`}</p>}
            <PingPongPage />
            <button onClick={handleLogout}>
              <span>logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
