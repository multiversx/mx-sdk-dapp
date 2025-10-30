import {
  textWithEmDash,
  textWithApostrophe,
  textWithBullet,
  chineseText,
  esdtPayload,
  ascii,
  nonAsciiSample
} from '__mocks__/data/unicodeSamples';
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
    const data = encodeToBase64('test transaction 🙀');
    const decoded = 'test transaction 🙀';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded base64 string of another base64 string', async () => {
    const inner = encodeToBase64('test transaction 🙀');
    const data = encodeToBase64(inner);
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(inner);
  });

  it('should return the decoded base64 string of transaction sign data', async () => {
    const data = encodeToBase64('lendegate@01');
    const decoded = 'lendegate@01';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded base64 string with chinese characters', async () => {
    const data = encodeToBase64(chineseText);
    const decoded = chineseText;
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the data unmodified when ESDT data is provided', async () => {
    const data = esdtPayload;
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when non-ASCII string is provided', async () => {
    const data = ascii + nonAsciiSample;
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when chinese string is provided', async () => {
    const data = chineseText;
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should properly decode base64 with em dash Unicode character', async () => {
    const base64Data = encodeToBase64(textWithEmDash);
    const result = getDataPayloadForTransaction(base64Data);
    expect(result.toString()).toContain('—');
  });

  it('should properly decode base64 with curly apostrophe Unicode character', async () => {
    const base64Data = encodeToBase64(textWithApostrophe);
    const result = getDataPayloadForTransaction(base64Data);
    expect(result.toString()).toContain("'");
  });

  it('should properly decode base64 with bullet point Unicode character', async () => {
    const base64Data = encodeToBase64(textWithBullet);
    const result = getDataPayloadForTransaction(base64Data);
    expect(result.toString()).toContain('•');
  });
});
