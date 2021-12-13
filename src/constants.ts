export enum LoginMethodsEnum {
  ledger = 'ledger',
  walletconnect = 'walletconnect',
  wallet = 'wallet',
  extension = 'extension',
  none = ''
}

export const gasPriceModifier = '0.01';
export const gasPerDataByte = '1500';
export const gasLimit = '50000';

export const ledgerErrorCodes = {
  0x9000: {
    code: 'codeSuccess',
    message: 'Success'
  },
  0x6985: {
    code: 'ERR_USER_DENIED',
    message: 'Rejected by user'
  },
  0x6d00: {
    code: 'ERR_UNKNOWN_INSTRUCTION',
    message: 'Unknown instruction'
  },
  0x6e00: {
    code: 'ERR_WRONG_CLA',
    message: 'Wrong CLA'
  },
  0x6e01: {
    code: 'ERR_INVALID_ARGUMENTS',
    message: 'Invalid arguments'
  },
  0x6e02: {
    code: 'ERR_INVALID_MESSAGE',
    message: 'Invalid message'
  },
  0x6e03: {
    code: 'ERR_INVALID_P1',
    message: 'Invalid P1'
  },
  0x6e04: {
    code: 'ERR_MESSAGE_TOO_LONG',
    message: 'Message too long'
  },
  0x6e05: {
    code: 'ERR_RECEIVER_TOO_LONG',
    message: 'Receiver too long'
  },
  0x6e06: {
    code: 'ERR_AMOUNT_TOO_LONG',
    message: 'Amount too long'
  },
  0x6e07: {
    code: 'ERR_CONTRACT_DATA_DISABLED',
    message: 'Contract data disabled in app options'
  },
  0x6e08: {
    code: 'ERR_MESSAGE_INCOMPLETE',
    message: 'Message incomplete'
  },
  0x6e10: {
    code: 'ERR_SIGNATURE_FAILED',
    message: 'Signature failed'
  },
  0x6e09: {
    code: 'ERR_WRONG_TX_VERSION',
    message: 'Wrong TX version'
  },
  0x6e0a: {
    code: 'ERR_NONCE_TOO_LONG',
    message: 'Nonce too long'
  },
  0x6e0b: {
    code: 'ERR_INVALID_AMOUNT',
    message: 'Invalid amount'
  },
  0x6e0c: {
    code: 'ERR_INVALID_FEE',
    message: 'Invalid fee'
  },
  0x6e0d: {
    code: 'ERR_PRETTY_FAILED',
    message: 'Pretty failed'
  },
  0x6e0e: {
    code: 'ERR_DATA_TOO_LONG',
    message: 'Data too long'
  },
  0x6e0f: {
    code: 'ERR_WRONG_TX_OPTIONS',
    message: 'Invalid transaction options'
  },
  0x6e11: {
    code: 'ERR_SIGN_TX_DEPRECATED',
    message:
      'Regular transaction signing is deprecated in this version. Use hash signing.'
  }
};
