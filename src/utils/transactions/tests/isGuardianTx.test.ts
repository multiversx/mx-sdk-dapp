import { GuardianActionsEnum } from 'types/enums.types';
import { isGuardianTx } from '../isGuardianTx';

describe('isGuardianTx tests', () => {
  // Test Valid Actions
  Object.values(GuardianActionsEnum).forEach((action) => {
    test(`should return true for valid action starting with "${action}"`, () => {
      expect(isGuardianTx({ data: `${action}ExtraInfo` })).toBe(true);
    });
  });

  // Test when onlySetGuardian is true
  test('should return true only for SetGuardian action when onlySetGuardian is true', () => {
    expect(
      isGuardianTx({ data: 'SetGuardianExtraInfo', onlySetGuardian: true })
    ).toBe(true);
    expect(
      isGuardianTx({
        data: 'GuardAccountAdditionalData',
        onlySetGuardian: true
      })
    ).toBe(false);
    expect(
      isGuardianTx({
        data: 'UnGuardAccountSomethingElse',
        onlySetGuardian: true
      })
    ).toBe(false);
  });

  // Test Invalid Actions
  test('should return false for invalid actions', () => {
    expect(isGuardianTx({ data: 'InvalidAction' })).toBe(false);
    expect(isGuardianTx({ data: 'SetAccountGuard' })).toBe(false);
    expect(isGuardianTx({ data: 'AccountUnGuard' })).toBe(false);
  });

  // Test Empty String
  test('should return false for an empty string', () => {
    expect(isGuardianTx({ data: '' })).toBe(false);
  });

  // Test Null or Undefined
  test('should return false for null or undefined data', () => {
    expect(isGuardianTx({ data: undefined })).toBe(false);
  });

  // Test Partial Matches
  test('should return false for partial matches', () => {
    expect(isGuardianTx({ data: 'Set' })).toBe(false);
    expect(isGuardianTx({ data: 'Guard' })).toBe(false);
    expect(isGuardianTx({ data: 'UnGuard' })).toBe(false);
  });
});
