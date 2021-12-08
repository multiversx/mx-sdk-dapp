import React from 'react';
import { logout, getAddress, getAccountBalance } from 'dapp-core';

export default function AuthenticatedRoute() {
  const [userAddress, setUserAddress] = React.useState('');
  const [userBalance, setUserBalance] = React.useState<any>(null);
  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };
  console.log(userBalance);

  React.useEffect(() => {
    getAddress().then((adr) => {
      setUserAddress(adr);
      getAccountBalance(adr, true).then((acc) => setUserBalance(acc));
    });
  }, []);
  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto' data-testid='unlockPage'>
        <div className='card my-4 text-center'>
          <div className='card-body py-4 px-2 px-sm-2 mx-lg-4'>
            <p className='mb-4'>You are now authenticated </p>
            <p>{`address: ${userAddress}`}</p>
            {userBalance != null && <p>{`balance: ${userBalance}`}</p>}
            <button onClick={handleLogout}>
              <span>logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
