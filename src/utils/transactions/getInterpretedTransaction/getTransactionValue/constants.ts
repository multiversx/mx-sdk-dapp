import { TransactionActionsEnum } from 'types/serverTransactions.types';

/**
 * If `action.name` or `function` is in `ACTIONS_WITH_MANDATORY_OPERATIONS[]`, transaction value will be computed based `operations` field
 */
export const ACTIONS_WITH_MANDATORY_OPERATIONS = [
  TransactionActionsEnum.reDelegateRewards,
  TransactionActionsEnum.claimRewards,
  TransactionActionsEnum.unBond
];

/**
 * If `action.name` is in `ACTIONS_WITH_EGLD_VALUE[]`, transaction value will be returned directly
 */
export const ACTIONS_WITH_EGLD_VALUE = [
  TransactionActionsEnum.wrapEgld,
  TransactionActionsEnum.unwrapEgld
];

/**
 * If `action.name` is in `ACTIONS_WITH_VALUE_IN_DATA_FIELD[]`, transaction value will be computed based on `data` field
 */
export const ACTIONS_WITH_VALUE_IN_DATA_FIELD = [
  TransactionActionsEnum.unStake
];

/**
 * If `action.name` is in `ACTIONS_WITH_VALUE_IN_ACTION_FIELD[]`, transaction value will be computed based on `action` field
 */
export const ACTIONS_WITH_VALUE_IN_ACTION_FIELD = [
  TransactionActionsEnum.unDelegate
];
