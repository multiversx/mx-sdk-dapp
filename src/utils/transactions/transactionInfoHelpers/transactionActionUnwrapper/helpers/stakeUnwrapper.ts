import {
  TransactionActionType,
  UnwrapperType,
  TransactionActionsEnum
} from 'types/serverTransactions.types';

export const stakeUnwrapper = (
  action: TransactionActionType
): Array<string | UnwrapperType> => {
  switch (action.name) {
    case TransactionActionsEnum.delegate:
    case TransactionActionsEnum.stake:
      return [
        'Delegate',
        { egldValue: action.arguments?.value },
        'to staking provider',
        {
          providerName: action.arguments?.providerName,
          providerAvatar: action.arguments?.providerAvatar
        }
      ];
    case TransactionActionsEnum.unDelegate:
      return [
        'Undelegate',
        { egldValue: action.arguments?.value },
        'from staking provider',
        {
          providerName: action.arguments?.providerName,
          providerAvatar: action.arguments?.providerAvatar
        }
      ];
    case TransactionActionsEnum.stakeClaimRewards:
      return [
        'Claim rewards from staking provider',
        {
          providerName: action.arguments?.providerName,
          providerAvatar: action.arguments?.providerAvatar
        }
      ];
    case TransactionActionsEnum.reDelegateRewards:
      return [
        'Redelegate rewards from staking provider',
        {
          providerName: action.arguments?.providerName,
          providerAvatar: action.arguments?.providerAvatar
        }
      ];
    case TransactionActionsEnum.withdraw:
      return [
        'Withdraw from staking provider',
        {
          providerName: action.arguments?.providerName,
          providerAvatar: action.arguments?.providerAvatar
        }
      ];

    default:
      return [];
  }
};
