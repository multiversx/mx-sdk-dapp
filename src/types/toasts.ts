import React from 'react';

export interface CustomToastType {
  toastId: string;
  content: string | React.ReactNode;
  duration?: number;
  type: string;
}

export interface TransactionToastType {
  toastId: string;
  startTimestamp: number;
  type: string;
}
