import { LoginHandlerType } from '../../UnlockPanelManager.types';
import { getIsSimpleLoginCallback } from '../getIsSimpleLoginCallback';

describe('getIsSimpleLoginCallback tests', () => {
  it('should return true for a function with zero parameters', () => {
    const simpleCallback: LoginHandlerType = () => {};

    const result = getIsSimpleLoginCallback(simpleCallback);

    expect(result).toBe(true);
  });

  it('should return false for a function with one parameter', () => {
    const loginHandler: LoginHandlerType = async (_props: {
      type: string;
      anchor?: HTMLElement;
    }) => {};
    const result = getIsSimpleLoginCallback(loginHandler);

    expect(result).toBe(false);
  });
});
