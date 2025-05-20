import { testAddress } from '__mocks__';
import { ITransactionListItem } from 'lib/sdkDappUi';
import { TransactionServerStatusesEnum } from 'types';

export const baseTransactionMock: ITransactionListItem = {
  status: TransactionServerStatusesEnum.success,
  asset: null,
  action: { name: 'Transfer' },
  link: 'https://explorer.example.com/tx/123',
  hash: '123',
  interactor: testAddress,
  directionLabel: 'To',
  amount: '1 EGLD',
  timestamp: Date.now()
};
