import { TransactionActionsEnum } from 'types/serverTransactions.types';
/**
 * If `action.name` or `function` is in `ACTIONS_WITH_MANDATORY_OPERATIONS[]`, transaction value will be computed based `operations` field
 */
export declare const ACTIONS_WITH_MANDATORY_OPERATIONS: TransactionActionsEnum[];
/**
 * If `action.name` is in `ACTIONS_WITH_EGLD_VALUE[]`, transaction value will be returned directly
 */
export declare const ACTIONS_WITH_EGLD_VALUE: TransactionActionsEnum[];
/**
 * If `action.name` is in `ACTIONS_WITH_VALUE_IN_DATA_FIELD[]`, transaction value will be computed based `data` field
 */
export declare const ACTIONS_WITH_VALUE_IN_DATA_FIELD: TransactionActionsEnum[];
/**
 * If `action.name` is in `ACTIONS_WITH_VALUE_IN_ACTION_FIELD[]`, transaction value will be computed based `action` field
 */
export declare const ACTIONS_WITH_VALUE_IN_ACTION_FIELD: TransactionActionsEnum[];
//# sourceMappingURL=constants.d.ts.map