import React from 'react';
import { logout } from 'dapp-core';

export default function AuthenticatedRoute() {
  return (
    <div>
      You are now authenticated!
      <button onClick={() => logout()}>
        <span>logout</span>
      </button>
    </div>
  );
}
