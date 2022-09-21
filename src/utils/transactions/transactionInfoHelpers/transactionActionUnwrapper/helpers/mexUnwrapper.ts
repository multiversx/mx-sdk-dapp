import BigNumber from 'bignumber.js';
import {
  TransactionActionType,
  UnwrapperType,
  TransactionActionsEnum
} from 'types/serverTransactions.types';

export const mexUnwrapper = (
  action: TransactionActionType
): Array<string | UnwrapperType> => {
  switch (action.name) {
    // distribution
    case TransactionActionsEnum.claimLockedAssets:
      return ['Claim locked assets'];
    // farm
    case TransactionActionsEnum.enterFarm:
    case TransactionActionsEnum.enterFarmProxy: {
      return ['Enter farm with', { token: action.arguments?.transfers }];
    }
    case TransactionActionsEnum.enterFarmAndLockRewards:
    case TransactionActionsEnum.enterFarmAndLockRewardsProxy:
      return [
        'Enter farm and lock rewards with',
        { token: action.arguments?.transfers }
      ];
    case TransactionActionsEnum.exitFarm:
    case TransactionActionsEnum.exitFarmProxy:
      return ['Exit farm with', { token: action.arguments?.transfers }];
    case TransactionActionsEnum.claimRewards:
    case TransactionActionsEnum.claimRewardsProxy:
      return ['Claim rewards', { token: action.arguments?.transfers }];
    case TransactionActionsEnum.compoundRewards:
    case TransactionActionsEnum.compoundRewardsProxy:
      return ['Reinvest rewards', { token: action.arguments?.transfers }];
    // pairs
    case TransactionActionsEnum.swapTokensFixedInput:
    case TransactionActionsEnum.swap:
      return action.description ? [action.description] : [];
    case TransactionActionsEnum.swapTokensFixedOutput:
      return action.description ? [action.description] : [];
    case TransactionActionsEnum.addLiquidity:
    case TransactionActionsEnum.addLiquidityProxy:
      return [
        'Added liquidity for',
        { token: [action.arguments?.transfers[0]] },
        'and',
        { token: [action.arguments?.transfers[1]] }
      ];
    case TransactionActionsEnum.removeLiquidity:
    case TransactionActionsEnum.removeLiquidityProxy:
      return [
        'Removed liquidity with ',
        { token: action.arguments?.transfers }
      ];
    case TransactionActionsEnum.mergeLockedAssetTokens:
      let value = '0';
      if (action.arguments?.transfers) {
        const values = action.arguments.transfers.map(
          ({ value }: { value: string }) => value
        );
        value = BigNumber.sum.apply(null, values).toString(10);
      }
      return [
        `Merge ${action.arguments?.transfers.length}`,
        { tokenNoLink: [action.arguments?.transfers[0]] },
        'positions into a single',
        { tokenNoLink: [action.arguments?.transfers[0]] },
        'position of value',
        { value }
      ];
    case TransactionActionsEnum.wrapEgld:
    case TransactionActionsEnum.unwrapEgld:
    default:
      return action.description ? [action.description] : [];
  }
};
