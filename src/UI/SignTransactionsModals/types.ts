import { Transaction } from '@elrondnetwork/erdjs';

export interface SignModalType {
  handleClose: () => void;
  error: string | null;
  callbackRoute: string;
  transactions: Transaction[];
  className?: string;
}
