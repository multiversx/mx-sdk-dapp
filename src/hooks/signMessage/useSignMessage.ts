import { useEffect, useState } from 'react';
import {
  CANCELLED,
  ERROR_SIGNING,
  PROVIDER_NOT_INITIALIZED
} from 'constants/index';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { signedMessageInfoSliceSelector } from 'reduxStore/selectors';
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
import { parseNavigationParams } from 'utils';
import {
  signMessage as signMessageWithProvider,
  SignMessageType
} from 'utils/account/signMessage';
import { useGetSignMessageInfoStatus } from './useGetSignedMessageStatus';

export interface CancelPropsType {
  callbackUrl?: string;
  sessionId: string;
  errorMessage: string;
}

export interface SignedMessageParamsType {
  status: SignedMessageStatusesEnum;
  sessionId: string;
  signature: string;
  message: string;
  callbackUrl?: string;
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
  const { search } = window.location;
  const { provider, providerType } = useGetAccountProvider();

  // Clears the state
  const onAbort = () => {
    dispatch(clearSignedMessageInfo());
  };

  // Cancel signing
  const onCancel = ({
    callbackUrl,
    sessionId,
    errorMessage = CANCELLED
  }: CancelPropsType) => {
    const isCancelled = errorMessage.includes(CANCELLED);

    if (sessionId !== currentSessionId) {
      setCurrentSessionId(sessionId);
    }

    dispatch(
      setSignSessionState({
        errorMessage,
        isSigning: false
      })
    );

    dispatch(
      setSignSession({
        sessionId,
        signedSession: {
          callbackUrl,
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

    return `${callbackUrl.pathname}${callbackUrl.search}`;
  };

  const checkProviderIsInitialized = async () => {
    if (providerType !== LoginMethodsEnum.wallet) {
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
    }
  };

  const signMessage = async (props: SignMessageType) => {
    dispatch(setSignSessionState({ isSigning: true }));

    const sessionId = Date.now().toString();
    setCurrentSessionId(sessionId);

    const callbackRoute = checkCallbackSessionId(
      props.callbackRoute,
      sessionId
    );

    try {
      await checkProviderIsInitialized();
    } catch (error) {
      return onCancel({
        errorMessage: String(error),
        callbackUrl: callbackRoute,
        sessionId
      });
    }

    try {
      const signedMessage = await signMessageWithProvider({
        ...props,
        callbackRoute
      });

      if (signedMessage.signature) {
        dispatch(
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

        return dispatch(setSignSessionState({ isSigning: false }));
      }

      return onCancel({
        errorMessage: CANCELLED,
        callbackUrl: callbackRoute,
        sessionId
      });
    } catch (error) {
      const errorMessage =
        (error as Error)?.message || (error as string) || ERROR_SIGNING;

      return onCancel({
        errorMessage,
        callbackUrl: callbackRoute,
        sessionId
      });
    }
  };

  // Init signed session based on URL params in web wallet
  const setSignedSessionFromUrl = ({
    status,
    message,
    sessionId,
    signature,
    callbackUrl
  }: SignedMessageParamsType) => {
    if (!sessionId) {
      return;
    }

    const session = signedMessageInfo.signedSessions[sessionId];

    if (session) {
      if (
        [
          SignedMessageStatusesEnum.cancelled,
          SignedMessageStatusesEnum.failed
        ].includes(status)
      ) {
        // Failed to sign message
        return onCancel({
          errorMessage:
            status === SignedMessageStatusesEnum.cancelled
              ? CANCELLED
              : ERROR_SIGNING,
          sessionId
        });
      }

      if (signature && status === SignedMessageStatusesEnum.signed) {
        // Message was signed successfully
        return dispatch(
          setSignSession({
            sessionId,
            signedSession: {
              signature,
              status
            }
          })
        );
      }
    }

    if (message) {
      // Message sign request through hook
      return dispatch(
        setSignSession({
          sessionId,
          signedSession: {
            message,
            status: SignedMessageStatusesEnum.pending,
            callbackUrl
          }
        })
      );
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
        remainingParams: { signature, sessionId, status, message, callbackUrl },
        clearNavigationHistory
      } = parseNavigationParams(Object.values(SignedMessageQueryParamsEnum));

      if (sessionId) {
        setCurrentSessionId(sessionId);

        setSignedSessionFromUrl({
          status: status as SignedMessageStatusesEnum,
          sessionId,
          signature,
          message,
          callbackUrl
        });

        if (signature ?? status) {
          clearNavigationHistory();
        }
      }
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
    sessionId: currentSessionId
  };
};
