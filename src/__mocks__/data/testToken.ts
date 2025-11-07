import { testAddress } from '__mocks__/accountConfig';

export const testToken = {
  type: 'FungibleESDT',
  identifier: 'TEST-e3d1b7',
  name: 'TEST',
  ticker: 'TEST',
  owner: testAddress,
  minted: '0',
  burnt: '0',
  initialMinted: '1000000000000000000000000000',
  decimals: 18,
  isPaused: false,
  assets: {
    website: 'https://test.io',
    description: 'Test token is a test token for testing the token details.',
    status: 'active',
    pngUrl:
      'https://tools.multiversx.com/assets-cdn/devnet/tokens/TEST-e3d1b7/icon.png',
    svgUrl:
      'https://tools.multiversx.com/assets-cdn/devnet/tokens/TEST-e3d1b7/icon.svg',
    lockedAccounts: {
      [testAddress]: 'Locked Account #1'
    },
    extraTokens: ['TEST-e3d1b7', 'TEST-e3d1b7'],
    ledgerSignature:
      '30450221009c58ae35af3a770221bd6e1fd8ad023d23e49e52cbca64f1a225c497935ee30402203fc97dae339a44872bc0415e684c35e0990720ba977ce6dabebfe72e6dc37591',
    social: {
      email: 'hello@test.io',
      blog: 'https://medium.com/@test',
      twitter: 'https://twitter.com/test',
      telegram: 'https://t.me/test',
      discord: 'https://discord.gg/test'
    }
  },
  transactions: 1754,
  transactionsLastUpdatedAt: 1762511057,
  transfers: 40882,
  transfersLastUpdatedAt: 1762511183,
  accounts: 416,
  accountsLastUpdatedAt: 1762513938,
  canUpgrade: true,
  canMint: false,
  canBurn: false,
  canChangeOwner: true,
  canAddSpecialRoles: true,
  canPause: true,
  canFreeze: true,
  canWipe: true,
  price: 3.114724747645395,
  marketCap: 3114724747.6453953,
  supply: '1000000000',
  circulatingSupply: '1000000000',
  mexPairType: 'core',
  totalLiquidity: 1963.9864633925347,
  totalVolume24h: 0,
  isLowLiquidity: true,
  lowLiquidityThresholdPercent: 0.5,
  tradesCount: 8273,
  balance: '663088410050705591065',
  valueUsd: 2065.3378806617707
};
