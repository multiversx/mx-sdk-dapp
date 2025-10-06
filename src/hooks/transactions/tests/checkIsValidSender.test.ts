import { checkIsValidSender } from '../helpers/checkIsValidSender';

describe('checkIsValidSender tests', () => {
  test('should return true if senderAccount is null', () => {
    expect(
      checkIsValidSender(
        null,
        'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv'
      )
    ).toBe(true);
  });

  test('should return true if address matches senderAccount.address', () => {
    const mockAccount = {
      address: 'erd1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s2n5pk5'
    };

    expect(
      checkIsValidSender(
        mockAccount,
        'erd1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s2n5pk5'
      )
    ).toBe(true);
  });

  test('should return true if address matches senderAccount.activeGuardianAddress', () => {
    const mockAccount = {
      address: 'erd1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s2n5pk5',
      activeGuardianAddress:
        'erd1pu4ru4qu8jt2qmk8vh9xdp8wj234t3mhfwp4zu2fmkmvg8j4hqfqqzw7ud'
    };
    expect(
      checkIsValidSender(
        mockAccount,
        'erd1pu4ru4qu8jt2qmk8vh9xdp8wj234t3mhfwp4zu2fmkmvg8j4hqfqqzw7ud'
      )
    ).toBe(true);
  });

  test('should return false if address does not match any in senderAccount', () => {
    const mockAccount = {
      address: 'erd1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s2n5pk5',
      activeGuardianAddress:
        'erd1pu4ru4qu8jt2qmk8vh9xdp8wj234t3mhfwp4zu2fmkmvg8j4hqfqqzw7ud'
    };
    expect(
      checkIsValidSender(
        mockAccount,
        'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv'
      )
    ).toBe(false);
  });

  describe('originWhiteList functionality', () => {
    const mockAccount = {
      address: 'erd1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s2n5pk5',
      activeGuardianAddress:
        'erd1pu4ru4qu8jt2qmk8vh9xdp8wj234t3mhfwp4zu2fmkmvg8j4hqfqqzw7ud'
    };

    test('should return true if originWhiteList ends with multiversx.com', () => {
      expect(
        checkIsValidSender(
          mockAccount,
          'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv',
          'https://app.multiversx.com'
        )
      ).toBe(true);
    });

    test('should return true if originWhiteList is exactly multiversx.com', () => {
      expect(
        checkIsValidSender(
          mockAccount,
          'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv',
          'multiversx.com'
        )
      ).toBe(true);
    });

    test('should return true if originWhiteList ends with multiversx.com with subdomain', () => {
      expect(
        checkIsValidSender(
          mockAccount,
          'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv',
          'test.multiversx.com'
        )
      ).toBe(true);
    });

    test('should return false if originWhiteList does not end with multiversx.com', () => {
      expect(
        checkIsValidSender(
          mockAccount,
          'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv',
          'malicious.com'
        )
      ).toBe(false);
    });

    test('should return false if originWhiteList does not end with multiversx.com but contains it', () => {
      expect(
        checkIsValidSender(
          mockAccount,
          'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv',
          'multiversx.com.malicious.com'
        )
      ).toBe(false);
    });

    test('should return false if originWhiteList is empty string', () => {
      expect(
        checkIsValidSender(
          mockAccount,
          'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv',
          ''
        )
      ).toBe(false);
    });

    test('should fall back to normal validation when originWhiteList is not whitelisted', () => {
      expect(
        checkIsValidSender(
          mockAccount,
          'erd1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s2n5pk5',
          'malicious.com'
        )
      ).toBe(true);

      expect(
        checkIsValidSender(
          mockAccount,
          'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv',
          'malicious.com'
        )
      ).toBe(false);
    });
  });
});
