import {
  IProviderFactory,
  ProviderType
} from 'providers/types/providerFactory.types';

export enum UnlockPanelEventsEnum {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  LOGIN = 'LOGIN',
  CANCEL_LOGIN = 'CANCEL_LOGIN',
  CANCEL_IN_PROVIDER = 'CANCEL_IN_PROVIDER',
  SELECT_PROVIDER = 'SELECT_PROVIDER',
  /**
   * User clicks Close button inside mounted provider
   */
  ANCHOR_CLOSE = 'ANCHOR_CLOSE'
}

export type LoginFunctonType = ({
  type,
  anchor
}: IProviderFactory) => Promise<void>;

export type LoginCallbackType = () => void;

export type LoginHandlerType = LoginFunctonType | LoginCallbackType;
export type OnCloseUnlockPanelType = () => void;

export type UnlockPanelManagerInitParamsType = {
  /**
     * Accepts:
     * - 1️⃣ a `callback` that is executed after login is performed
     * - 2️⃣ a `function` that handles the full login process
     * @example
     * ```ts
     *  // 1️⃣ callback
        () => {
          navigate('/dashboard');
        };
        // 2️⃣ login handler function
        async ({ type, anchor }: IProviderFactory) => {
          const provider = await ProviderFactory.create({
            type,
            anchor
          });
          await provider?.login();
          navigate('/dashboard');
        };
   *  ```
   */
  loginHandler: LoginHandlerType;
  /**
   * Controls which providers are shown in the unlock panel. By default, all providers are shown.
   * Editing this property will allow you to:
   * - Hide specific providers
   * - Show only specific providers
   * - Reorder the providers
   * @example
   * ```ts
   *  allowedProviders: [ProviderTypeEnum.walletConnect, 'inMemoryProvider']
   * ```
   */
  allowedProviders?: ProviderType[];
  /**
   * Callback function to handle UI behavior when the unlock panel is closed
   * without completing the login process.
   *
   * Common use case: redirecting the user away from the `/unlock` route
   * (e.g., back to the homepage or a previous screen) when login is cancelled or skipped.
   * 
   * @example
   * ```ts
     onClose: () => {
       navigate('/');
     }
   *  ```
   */
  onClose?: OnCloseUnlockPanelType;
  /**
   * Callback function to handle UI behavior when the login is cancelled
   * @example
   * ```ts
   *  onCancelLogin: () => {
   *    navigate('/');
   *  }
   *  ```
   */
  onCancelLogin?: () => void;
};
