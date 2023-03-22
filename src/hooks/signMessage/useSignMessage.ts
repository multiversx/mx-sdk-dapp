import { useEffect, useState } from 'react';
import {
  CANCELLED,
  ERROR_SIGNING,
  PROVIDER_NOT_INITIALIZED
} from 'constants/index';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  lastSignedSessionId,
  signedMessageInfoSliceSelector
} from 'reduxStore/selectors';
import {
  clearSignedMessageInfo,
  setSignSession,
  setSignSessionState
} from 'reduxStore/slices';
import {
  LoginMethodsEnum,
  SignedMessageQueryParamsEnum,
  SignedMessageStatusesEnum
} from 'types';
import {
  signMessage as signMessageWithProvider,
  SignMessageType
} from 'utils/account/signMessage';
import { parseNavigationParams } from 'utils/parseNavigationParams';
import { useGetSignMessageInfoStatus } from './useGetSignedMessageStatus';

export interface CancelPropsType {
  callbackRoute?: string;
  errorMessage: string;
}

export interface SignedMessageParamsType {
  status: SignedMessageStatusesEnum;
  signature: string;
}

/**
 * Used to sign message with providers
 * 1. Signing simply from dapp without redirect (with providers)
 * 2. Signing from dapp logged in with web wallet (redirect to web wallet)
 * 3. Signing from web wallet as hook after redirect and replying back with signature
 */
export const useSignMessage = () => {
  const dispatch = useDispatch();
  const [currentSessionId, setCurrentSessionId] = useState<string>('');
  const signedMessageInfo = useSelector(signedMessageInfoSliceSelector);
  const currentSession = signedMessageInfo.signedSessions[currentSessionId];
  const { isPending, errorMessage } = useGetSignMessageInfoStatus();
  const search = window?.location.search;
  const { provider, providerType } = useGetAccountProvider();
  const isWalletLogin = providerType === LoginMethodsEnum.wallet;
  const lastSignSession = useSelector(lastSignedSessionId);

  // Clears the state
  const onAbort = () => {
    dispatch(clearSignedMessageInfo());
  };

  // Cancel signing
  const onCancel = ({
    callbackRoute,
    errorMessage = CANCELLED
  }: CancelPropsType) => {
    const isCancelled = errorMessage.includes(CANCELLED);
    const sessionId = Date.now().toString();

    if (!currentSession) {
      setCurrentSessionId(sessionId);
    }

    dispatch(
      setSignSession({
        errorMessage,
        sessionId,
        signedSession: {
          callbackUrl: callbackRoute,
          status: isCancelled
            ? SignedMessageStatusesEnum.cancelled
            : SignedMessageStatusesEnum.failed
        }
      })
    );
  };

  const checkCallbackSessionId = (
    callbackRoute: string | undefined,
    sessionId: string
  ) => {
    if (!callbackRoute) {
      return '';
    }

    // Make sure callbackURL has sessionId
    const callbackUrl = new URL(callbackRoute);

    if (!callbackUrl.searchParams.get(SignedMessageQueryParamsEnum.sessionId)) {
      callbackUrl.searchParams.append(
        SignedMessageQueryParamsEnum.sessionId,
        sessionId
      );
    }

    return `${isWalletLogin ? window?.location.origin : ''}${
      callbackUrl.pathname
    }${callbackUrl.search}`;
  };

  const checkProviderIsInitialized = async () => {
    if (isWalletLogin) {
      return;
    }

    try {
      const isProviderInitialized = await provider?.init?.();

      if (!isProviderInitialized) {
        throw Error(PROVIDER_NOT_INITIALIZED);
      }
    } catch (error) {
      const errorMessage =
        (error as Error)?.message ||
        (error as string) ||
        PROVIDER_NOT_INITIALIZED;

      throw Error(errorMessage);
    }
  };

  const signMessageWithWallet = (props: SignMessageType) => {
    return provider.signMessage(props.message as any, {
      callbackUrl: encodeURIComponent(String(props.callbackRoute))
    });
  };

  const signMessage = async (props: SignMessageType) => {
    const sessionId = Date.now().toString();
    setCurrentSessionId(sessionId);

    const callbackRoute = checkCallbackSessionId(
      props.callbackRoute,
      sessionId
    );

    dispatch(
      setSignSession({
        sessionId,
        signedSession: {
          status: SignedMessageStatusesEnum.pending,
          message: props.message,
          callbackUrl: callbackRoute
        }
      })
    );

    if (isWalletLogin) {
      return signMessageWithWallet({
        ...props,
        callbackRoute
      });
    }

    try {
      await checkProviderIsInitialized();
    } catch (error) {
      return onCancel({
        errorMessage: String(error),
        callbackRoute
      });
    }

    try {
      const signedMessage = await signMessageWithProvider({
        ...props,
        callbackRoute
      });

      if (signedMessage.signature) {
        return dispatch(
          setSignSession({
            sessionId,
            signedSession: {
              status: SignedMessageStatusesEnum.signed,
              callbackUrl: callbackRoute,
              message: props.message,
              signature: signedMessage.signature.hex()
            }
          })
        );
      }

      return onCancel({
        errorMessage: CANCELLED,
        callbackRoute
      });
    } catch (error) {
      const errorMessage =
        (error as Error)?.message || (error as string) || ERROR_SIGNING;

      return onCancel({
        errorMessage,
        callbackRoute
      });
    }
  };

  /**
   * Used for getting signed message info from query params
   * 1. Parse query params on hook redirect from dapp to web wallet
   * 2. Parse query params on hook reply back to dapp from web wallet
   */
  const parseSingnedMessageFromUrl = () => {
    if (search) {
      const {
        remainingParams: { signature, sessionId, status },
        clearNavigationHistory
      } = parseNavigationParams(Object.values(SignedMessageQueryParamsEnum));

      if (!sessionId) {
        return;
      }

      setCurrentSessionId(sessionId);

      if (
        [
          SignedMessageStatusesEnum.cancelled,
          SignedMessageStatusesEnum.failed
        ].includes(status as SignedMessageStatusesEnum)
      ) {
        // Failed to sign message
        return onCancel({
          errorMessage:
            status === SignedMessageStatusesEnum.cancelled
              ? CANCELLED
              : ERROR_SIGNING
        });
      }

      if (signature && status === SignedMessageStatusesEnum.signed) {
        // Message was signed successfully
        return dispatch(
          setSignSession({
            sessionId: currentSessionId,
            signedSession: {
              signature,
              status
            }
          })
        );
      }

      clearNavigationHistory();
    }
  };

  // Parse the signed message info from URL (after callback was triggered from provider)
  useEffect(() => {
    parseSingnedMessageFromUrl();
  }, [search]);

  // Reply to the dapp when message was signed, cancel, or failed
  useEffect(() => {
    // Reset isSigning state
    if ((isPending || errorMessage) && !currentSession) {
      dispatch(setSignSessionState({ isSigning: false, errorMessage: '' }));
    }
  }, []);

  // Clear state when session is not found
  useEffect(() => {
    if (currentSessionId && !currentSession && !isPending) {
      dispatch(setSignSessionState({ isSigning: false, errorMessage: '' }));
    }
  }, [currentSessionId]);

  return {
    onAbort,
    onCancel,
    signMessage,
    sessionId: currentSessionId || lastSignSession
  };
};
