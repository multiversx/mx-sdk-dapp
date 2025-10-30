import { encodeToBase64 } from 'utils/decoders';
import { getDataPayloadForTransaction } from '../getDataPayloadForTransaction';

describe('getDataPayloadForTransaction', () => {
  it('should return empty string when data is not provided', async () => {
    const data = '';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when a string with letters is provided', async () => {
    const data = 'test data';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the decoded base64 string with emoji', async () => {
    const data = 'dGVzdCB0cmFuc2FjdGlvbiDwn5mA';
    const decoded = 'test transaction 🙀';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded base64 string of another base64 string', async () => {
    const data = 'ZEdWemRDQjBjbUZ1YzJGamRHbHZiaUR3bjVtQQ==';
    const decoded = 'dGVzdCB0cmFuc2FjdGlvbiDwn5mA';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded base64 string of transaction sign data', async () => {
    const data = 'bGVuZGVnYXRlQDAx';
    const decoded = 'lendegate@01';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded base64 string with chinese characters', async () => {
    const data = '5aeT5ZCN';
    const decoded = '姓名';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the data unmodified when ESDT data is provided', async () => {
    const data =
      'ESDTNFTTransfer@524f424f54532d316365303334@01@01@0000000000000000050006bdc61ebbec719b07b4a7ebfd1fb215c0706e3c7ceb';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when non-ASCII string is provided', async () => {
    const data =
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when chinese string is provided', async () => {
    const data = '姓名';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should properly decode base64 with em dash Unicode character', async () => {
    const unicodeText = 'Test — em dash';
    const base64Data = encodeToBase64(unicodeText);
    const result = getDataPayloadForTransaction(base64Data);
    expect(result.toString()).toContain('—');
  });

  it('should properly decode base64 with curly apostrophe Unicode character', async () => {
    const unicodeText = "We're back";
    const base64Data = encodeToBase64(unicodeText);
    const result = getDataPayloadForTransaction(base64Data);
    expect(result.toString()).toContain("'");
  });

  it('should properly decode base64 with bullet point Unicode character', async () => {
    const unicodeText = '• First item';
    const base64Data = encodeToBase64(unicodeText);
    const result = getDataPayloadForTransaction(base64Data);
    expect(result.toString()).toContain('•');
  });

  it('should properly decode full problematic text with Unicode characters', async () => {
    const unicodeText = `We are so back!

A short recap of the temporary account breach — what happened, how we responded, and what's being done to prevent this in the future:

• Despite having 2FA enabled, the hackers were able to gain access to the X account using a malicious link

• Upon detection, we immediately secured all associated account data and worked with X Support to limit the reach of the malicious post, identify the attacker's onchain and offchain traces, and ensure no user damage occurred

• Access to the account was then temporarily restricted while X removed the post and banned the offending accounts

• We also issued a takedown request for the fraudulent website

• No user wallets or funds were affected

• Additional security measures have now been implemented across xExchange and all connected accounts

Thank you for your patience and continued trust!`;
    const base64Data = encodeToBase64(unicodeText);
    const result = getDataPayloadForTransaction(base64Data);
    expect(result.toString()).toContain('—');
    expect(result.toString()).toContain("'");
    expect(result.toString()).toContain('•');
    expect(result.toString()).toContain("attacker's");
  });
});
