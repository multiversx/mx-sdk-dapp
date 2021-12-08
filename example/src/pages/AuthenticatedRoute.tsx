import React from 'react';
import { logout } from 'dapp-core';

export default function AuthenticatedRoute() {
  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  return (
    <div>
      You are now authenticated!
      <button onClick={handleLogout}>
        <span>logout</span>
      </button>
    </div>
  );
}
