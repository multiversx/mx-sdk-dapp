import { IconNamesEnum } from 'types/enums.types';
import { getTransactionIconInfo } from '../getTransactionIconInfo';
import * as getTransactionMessagesModule from '../getTransactionMessages';
import * as getTransactionStatusModule from '../getTransactionStatus';

jest.mock('../getTransactionMessages');
jest.mock('../getTransactionStatus');

describe('getTransactionIconInfo', () => {
  const mockTransaction = { status: 'pending' } as any;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return hourglass icon for pending transactions', () => {
    jest
      .spyOn(getTransactionStatusModule, 'getTransactionStatus')
      .mockReturnValue({
        pending: true,
        failed: false,
        invalid: false,
        success: false
      });
    jest
      .spyOn(getTransactionMessagesModule, 'getTransactionMessages')
      .mockReturnValue([]);

    const result = getTransactionIconInfo(mockTransaction);

    expect(result.icon).toEqual(IconNamesEnum.hourglass);
    expect(result.tooltip).toBe('Pending ');
  });

  it('should return times icon for failed transactions', () => {
    jest
      .spyOn(getTransactionStatusModule, 'getTransactionStatus')
      .mockReturnValue({
        pending: false,
        failed: true,
        invalid: false,
        success: false
      });
    jest
      .spyOn(getTransactionMessagesModule, 'getTransactionMessages')
      .mockReturnValue(['Error message']);

    const result = getTransactionIconInfo(mockTransaction);

    expect(result.icon).toEqual(IconNamesEnum.close);
    expect(result.tooltip).toBe('Pending Error message');
  });

  it('should return ban icon for invalid transactions', () => {
    jest
      .spyOn(getTransactionStatusModule, 'getTransactionStatus')
      .mockReturnValue({
        pending: false,
        failed: false,
        invalid: true,
        success: false
      });
    jest
      .spyOn(getTransactionMessagesModule, 'getTransactionMessages')
      .mockReturnValue(['Invalid message']);

    const result = getTransactionIconInfo(mockTransaction);

    expect(result.icon).toEqual(IconNamesEnum.ban);
    expect(result.tooltip).toBe('Pending Invalid message');
  });

  it('should not include error messages in tooltip if transaction is not failed or invalid', () => {
    jest
      .spyOn(getTransactionStatusModule, 'getTransactionStatus')
      .mockReturnValue({
        pending: true,
        failed: false,
        invalid: false,
        success: false
      });
    jest
      .spyOn(getTransactionMessagesModule, 'getTransactionMessages')
      .mockReturnValue(['Some message']);

    const result = getTransactionIconInfo(mockTransaction);

    expect(result.tooltip).toBe('Pending ');
  });

  it('should handle multiple error messages', () => {
    jest
      .spyOn(getTransactionStatusModule, 'getTransactionStatus')
      .mockReturnValue({
        pending: false,
        failed: true,
        invalid: false,
        success: false
      });
    jest
      .spyOn(getTransactionMessagesModule, 'getTransactionMessages')
      .mockReturnValue(['Error 1', 'Error 2']);

    const result = getTransactionIconInfo(mockTransaction);

    expect(result.tooltip).toBe('Pending Error 1,Error 2');
  });

  it('should handle transactions with no icon', () => {
    jest
      .spyOn(getTransactionStatusModule, 'getTransactionStatus')
      .mockReturnValue({
        pending: false,
        failed: false,
        invalid: false,
        success: true
      });
    jest
      .spyOn(getTransactionMessagesModule, 'getTransactionMessages')
      .mockReturnValue([]);

    const result = getTransactionIconInfo(mockTransaction);

    expect(result.icon).toBe(undefined);
    expect(result.tooltip).toBe('Pending ');
  });
});
