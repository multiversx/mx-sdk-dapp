import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { getAllDecodedFormats } from '../decodeDataField';

const DATA_FIELD =
  'MultiESDTNFTTransfer@00000000000000000500139ed7ae4aa03792e6bcb332394a40fe746eefa47ceb@02@5745474c442d613238633539@@8ac7230489e80000@4d45582d613635396430@@07bc5d6e31347ea7f1111d@6164644c6971756964697479@8963dd8c2c5e0000@07a88fb235d53ff30fefa9';

const HIGHLIGHT_RAW = '5745474c442d613238633539@@8ac7230489e80000';

const DECODED_DATA = {
  [DecodeMethodEnum.raw]: {
    displayValue: DATA_FIELD,
    highlight: HIGHLIGHT_RAW
  },
  [DecodeMethodEnum.text]: {
    displayValue:
      'MultiESDTNFTTransfer@\x00\x00\x00\x00\x00\x00\x00\x00\x05\x00\x13�׮J�7�漳29J@�tn�|�@\x02@WEGLD-a28c59@@��#\x04��\x00\x00@MEX-a659d0@@\x07�]n14~��\x11\x1D@addLiquidity@�c݌,^\x00\x00@\x07���5�?�\x0F�',
    highlight: 'WEGLD-a28c59@@'
  },
  [DecodeMethodEnum.decimal]: {
    displayValue:
      'MultiESDTNFTTransfer@122606984161813630683000759836492172880332059259659648235@2@27008948430895953375700137273@@10000000000000000000@364901398363583379235888@@9352009123466089130430749@30141412180830754292089058425@9900000000000000000@9258489032231428239126441',
    highlight: '27008948430895953375700137273@@10000000000000000000'
  },
  [DecodeMethodEnum.smart]: {
    displayValue:
      'MultiESDTNFTTransfer@erd1qqqqqqqqqqqqqpgqzw0d0tj25qme9e4ukverjjjqle6xamay0n4s5r0v9g@\x02@WEGLD-a28c59@@10000000000000000000@MEX-a659d0@@9352009123466089130430749@addLiquidity@9900000000000000000@9258489032231428239126441',
    highlight: 'WEGLD-a28c59@@10000000000000000000'
  }
};

describe('getAllDecodedFormats', () => {
  it('should decode raw format', () => {
    const decoded = getAllDecodedFormats({
      data: DATA_FIELD,
      highlight: HIGHLIGHT_RAW
    });
    const raw = decoded[DecodeMethodEnum.raw];

    expect(raw?.displayValue).toBe(
      DECODED_DATA[DecodeMethodEnum.raw].displayValue
    );
    expect(raw?.highlight).toBe(DECODED_DATA[DecodeMethodEnum.raw].highlight);
  });

  it('should decode text format', () => {
    const decoded = getAllDecodedFormats({
      data: DATA_FIELD,
      highlight: HIGHLIGHT_RAW
    });
    const text = decoded[DecodeMethodEnum.text];

    expect(text?.displayValue).toBe(
      DECODED_DATA[DecodeMethodEnum.text].displayValue
    );
    expect(text?.highlight).toContain(
      DECODED_DATA[DecodeMethodEnum.text].highlight
    );
  });

  it('should decode decimal format', () => {
    const decoded = getAllDecodedFormats({
      data: DATA_FIELD,
      highlight: HIGHLIGHT_RAW
    });
    const decimal = decoded[DecodeMethodEnum.decimal];

    expect(decimal?.displayValue).toBe(
      DECODED_DATA[DecodeMethodEnum.decimal].displayValue
    );
    expect(decimal?.highlight).toBe(
      DECODED_DATA[DecodeMethodEnum.decimal].highlight
    );
  });

  it('should decode smart format', () => {
    const decoded = getAllDecodedFormats({
      data: DATA_FIELD,
      highlight: HIGHLIGHT_RAW
    });
    const smart = decoded[DecodeMethodEnum.smart];

    expect(smart?.displayValue).toBe(
      DECODED_DATA[DecodeMethodEnum.smart].displayValue
    );
    expect(smart?.highlight).toBe(
      DECODED_DATA[DecodeMethodEnum.smart].highlight
    );
    expect(Array.isArray(smart?.validationWarnings)).toBe(true);
  });

  it('should return null highlights when highlight is null', () => {
    const decoded = getAllDecodedFormats({ data: DATA_FIELD, highlight: null });

    expect(decoded[DecodeMethodEnum.raw]?.highlight).toBe(null);
    expect(decoded[DecodeMethodEnum.text]?.highlight).toBe(null);
    expect(decoded[DecodeMethodEnum.decimal]?.highlight).toBe(null);
    expect(decoded[DecodeMethodEnum.smart]?.highlight).toBe(null);
    expect(
      Array.isArray(decoded[DecodeMethodEnum.smart]?.validationWarnings)
    ).toBe(true);
  });
});
