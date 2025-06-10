import { HWProvider } from '@multiversx/sdk-hw-provider/out';

import { LedgerConnectStateManager } from 'managers/internal/LedgerConnectStateManager';

import { ILedgerAccount } from '../../types/ledger.types';

export type UpdateAccountObjectType = Record<string, ILedgerAccount>;
export interface IUpdateAccountsList {
  manager: LedgerConnectStateManager | null;
  provider: HWProvider | null;
}
