import { TransactionActionCollection } from './components/TransactionActionCollection';
import { TransactionActionNft } from './components/TransactionActionNft';
import { TransactionActionToken } from './components/TransactionActionToken';
import './transactionActionBlock.scss';

export const TransactionActionBlock = {
  Collection: TransactionActionCollection,
  Nft: TransactionActionNft,
  Token: TransactionActionToken
};
