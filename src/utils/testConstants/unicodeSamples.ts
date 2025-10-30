// Constants shared across tests to avoid duplication and ensure DRY principle

export const unicodeText = `We are so back!

A short recap of the temporary account breach — what happened, how we responded, and what's being done to prevent this in the future:

• Despite having 2FA enabled, the hackers were able to gain access to the X account using a malicious link

• Upon detection, we immediately secured all associated account data and worked with X Support to limit the reach of the malicious post, identify the attacker's onchain and offchain traces, and ensure no user damage occurred`;

export const textWithEmDash = 'Test — em dash';
export const textWithApostrophe = "We're back";
export const textWithBullet = '• First item';
export const chineseText = '姓名';
export const emojiText = 'test transaction 🙀';
export const ascii =
  '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
export const nonAsciiSample =
  '🙀!"#$%&\\() * +, -./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_`abcdefghijklmnopqrstuvwxyz{|}~������';
export const atSeparatedString = 'short';
export const tokenDataSample = 'token1'; // for token decode test
export const esdtPayload =
  'ESDTNFTTransfer@524f424f54532d316365303334@01@01@0000000000000000050006bdc61ebbec719b07b4a7ebfd1fb215c0706e3c7ceb';

export const unicodeParts = [
  'We are so back!',
  "A short recap — what's being done",
  '• Despite having 2FA'
];
