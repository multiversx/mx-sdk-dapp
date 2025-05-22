import {
  ICustomProvider,
  IProviderBase,
  IProviderFactory,
  ProviderTypeEnum
} from 'core/providers/types/providerFactory.types';

export enum UnlockPanelEventsEnum {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  LOGIN = 'LOGIN',
  CANCEL_LOGIN = 'CANCEL_LOGIN',
  CANCEL_IN_PROVIDER = 'CANCEL_IN_PROVIDER',
  /**
   * User clicks Close button inside mounted provider
   */
  ANCHOR_CLOSE = 'ANCHOR_CLOSE'
}

export interface IUnlockPanel {
  isOpen: boolean;
  allowedProviders?: IProviderBase[] | null;
}

export type LoginFunctonType = ({
  type,
  anchor
}: IProviderFactory) => Promise<void>;

export type AllowedProviderType = ICustomProvider['type'];

export type CustomProviderViewType<
  T extends ProviderTypeEnum = ProviderTypeEnum
> = Omit<ICustomProvider<T>, 'constructor'>;

export type LoginCallbackType = () => void;

export type LoginHandlerType = LoginFunctonType | LoginCallbackType;
export type CloseCallbackType = () => void;

export type UnlockPanelManagerInitParamsType = {
  /**
     * Handle the full login process or provide a callback to be executed after login is performed
     * @example
     * ```ts
        async ({ type, anchor }: IProviderFactory) => {
          const provider = await ProviderFactory.create({
            type,
            anchor
          });
          await provider?.login();
          navigate('/dashboard');
        };

        // or

        () => {
          navigate('/dashboard');
        };
   *  ```
   */
  loginHandler: LoginHandlerType;
  /**
   * List of allowed providers
   */
  allowedProviders?: AllowedProviderType[] | null;
  /**
   * Callback function to handle UI behavior when the unlock panel is closed
   * without completing the login process.
   *
   * Common use case: redirecting the user away from the `/unlock` route
   * (e.g., back to the homepage or a previous screen) when login is cancelled or skipped.
   */
  closeCallback?: CloseCallbackType;
};
