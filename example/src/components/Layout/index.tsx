import React from 'react';
import { AuthenticatedRoutesWrapper } from 'dapp-core';
import Footer from './Footer';
import Navbar from './Navbar';
import routes, { routeNames } from 'routes';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-light d-flex flex-column flex-fill wrapper'>
      <Navbar />
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={routeNames.unlock}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
