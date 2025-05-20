import { getPersistedTokenDetails } from 'apiCalls/tokens/getPersistedTokenDetails';
import { addressIsValid } from '../../../validation';

interface IGetLockedAccountNameParams {
  receiver: string;
  sender: string;
  tokenId?: string;
}

export const getLockedAccountName = async ({
  receiver,
  sender,
  tokenId
}: IGetLockedAccountNameParams) => {
  let senderLockedAccount = null,
    receiverLockedAccount = null;

  if (!tokenId) {
    return {
      senderLockedAccount,
      receiverLockedAccount
    };
  }

  try {
    const tokenDetails = await getPersistedTokenDetails({ tokenId });
    const lockedAccounts = tokenDetails?.assets?.lockedAccounts;

    if (!lockedAccounts) {
      return {
        senderLockedAccount,
        receiverLockedAccount
      };
    }

    for (let account in lockedAccounts) {
      if (addressIsValid(account)) {
        if (sender === account) {
          senderLockedAccount = account;
        }

        if (receiver === account) {
          receiverLockedAccount = account;
        }
      }

      if (addressIsValid(lockedAccounts[account])) {
        if (sender === lockedAccounts[account]) {
          senderLockedAccount = lockedAccounts[account];
        }

        if (receiver === lockedAccounts[account]) {
          receiverLockedAccount = lockedAccounts[account];
        }
      }

      if (senderLockedAccount && receiverLockedAccount) {
        return {
          senderLockedAccount,
          receiverLockedAccount
        };
      }
    }
  } catch (error) {
    console.error('Error getting token details', error);
  }

  return {
    senderLockedAccount,
    receiverLockedAccount
  };
};
