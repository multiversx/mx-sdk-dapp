/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  AuthenticateOptions,
  AuthenticationEncoded,
  AuthenticationExtensionsClientOutputsWithPrf,
  AuthenticatorAttestationResponseWithData,
  AuthenticatorAttestationResponseWithPublicKey,
  AuthenticatorResponseWithAlgorithm,
  AuthType,
  NamedAlgo,
  NumAlgo,
  PublicKeyCredentialCreationOptions,
  PublicKeyCredentialRequestOptions,
  RegisterOptions,
  RegistrationEncoded
} from './types.js';
import * as utils from './utils.js';

//generated with crypto.getRandomValues
const randomness =
  '125,31,50,6,242,196,44,99,212,140,13,135,165,76,139,234,130,235,189,246,131,38,217,236,172,174,67,82,180,79,137,150';
const salt = new Uint8Array(randomness.split(',').map((str) => parseInt(str)))
  .buffer;

/**
 * Returns whether passwordless authentication is available on this browser/platform or not.
 */
export function isAvailable(): boolean {
  return !!window.PublicKeyCredential;
}

/**
 * Returns whether the device itself can be used as authenticator.
 */
export async function isLocalAuthenticator(): Promise<boolean> {
  return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
}

async function getAuthAttachment(
  authType: AuthType
): Promise<AuthenticatorAttachment | undefined> {
  if (authType === 'local') return 'platform';
  if (authType === 'roaming' || authType === 'extern') return 'cross-platform';
  if (authType === 'both') return undefined; // The webauthn protocol considers `null` as invalid but `undefined` as "both"!

  // the default case: "auto", depending on device capabilities
  try {
    if (await isLocalAuthenticator()) return 'platform';
    else return 'cross-platform';
  } catch (e) {
    // might happen due to some security policies
    // see https://w3c.github.io/webauthn/#sctn-isUserVerifyingPlatformAuthenticatorAvailable
    return undefined; // The webauthn protocol considers `null` as invalid but `undefined` as "both"!
  }
}

function getAlgoName(num: NumAlgo): NamedAlgo {
  switch (num) {
    case -7:
      return 'ES256';
    // case -8 ignored to to its rarity
    case -257:
      return 'RS256';
    default:
      throw new Error(`Unknown algorithm code: ${num}`);
  }
}

/**
 * Creates a cryptographic key pair, in order to register the public key for later passwordless authentication.
 *
 * @param {string} username
 * @param {string} challenge A server-side randomly generated string.
 * @param {Object} [options] Optional parameters.
 * @param {number} [options.timeout=60000] Number of milliseconds the user has to respond to the biometric/PIN check.
 * @param {'required'|'preferred'|'discouraged'} [options.userVerification='required'] Whether to prompt for biometric/PIN check or not.
 * @param {'auto'|'local'|'roaming'|'both'}       [options.authenticatorType='auto'] Which device to use as authenticator.
 *          'auto': if the local device can be used as authenticator it will be preferred. Otherwise it will prompt for a roaming device.
 *          'local': use the local device (using TouchID, FaceID, Windows Hello or PIN)
 *          'roaming': use a roaming device (security key or connected phone)
 *          'both': prompt the user to choose between local or roaming device. The UI and user interaction in this case is platform specific.
 * @param {boolean} [attestation=false] If enabled, the device attestation and clientData will be provided as Base64url encoded binary data.
 *                                Note that this is not available on some platforms.
 */
export async function register(
  username: string,
  challenge: string,
  options?: RegisterOptions
): Promise<RegistrationEncoded> {
  options = options ?? {};

  if (!utils.isBase64url(challenge))
    throw new Error('Provided challenge is not properly encoded in Base64url');

  const creationOptions: PublicKeyCredentialCreationOptions = {
    challenge: utils.parseBase64url(challenge),
    rp: {
      id: window.location.hostname,
      name: window.location.hostname
    },
    user: {
      id: await utils.sha256(new TextEncoder().encode(username)), // ID should not be directly "identifiable" for privacy concerns
      name: username,
      displayName: username
    },
    pubKeyCredParams: [
      { alg: -7, type: 'public-key' }, // ES256 (Webauthn's default algorithm)
      { alg: -257, type: 'public-key' } // RS256 (for Windows Hello and others)
    ],
    timeout: options.timeout ?? 60000,
    authenticatorSelection: {
      userVerification: options.userVerification ?? 'required', // Webauthn default is "preferred"
      authenticatorAttachment: await getAuthAttachment(
        options.authenticatorType ?? 'auto'
      )
    },
    attestation: 'direct', // options.attestation ? "direct" : "none"
    extensions: {
      prf: {
        eval: {
          first: salt
        }
      }
    }
  };

  if (options.debug) console.debug(creationOptions);

  const credential = (await navigator.credentials.create({
    publicKey: creationOptions
  })) as PublicKeyCredential;

  if (options.debug) console.debug(credential);

  const response = credential.response as AuthenticatorAttestationResponse;

  const publicKey = (
    response as AuthenticatorAttestationResponseWithPublicKey
  ).getPublicKey();
  const publicKeyAlgorithm = (
    credential.response as AuthenticatorResponseWithAlgorithm
  ).getPublicKeyAlgorithm();
  if (!publicKey) {
    throw new Error('Could not retrieve public key');
  }

  if (!publicKeyAlgorithm) {
    throw new Error('Could not retrieve public key algorithm');
  }

  const registration: RegistrationEncoded = {
    username: username,
    credential: {
      id: credential.id,
      publicKey: utils.toBase64url(publicKey),
      algorithm: getAlgoName(publicKeyAlgorithm)
    },
    authenticatorData: utils.toBase64url(
      (
        response as AuthenticatorAttestationResponseWithData
      ).getAuthenticatorData()
    ),
    clientData: utils.toBase64url(response.clientDataJSON),
    extensionResults: new Uint8Array(
      (
        credential.getClientExtensionResults() as AuthenticationExtensionsClientOutputsWithPrf
      ).prf.results.first
    )
  };

  if (options.attestation) {
    registration.attestationData = utils.toBase64url(
      response.attestationObject
    );
  }

  return registration;
}

async function getTransports(
  authType: AuthType
): Promise<AuthenticatorTransport[]> {
  const local: AuthenticatorTransport[] = ['internal'];
  //@ts-ignore
  const roaming: AuthenticatorTransport[] = ['hybrid', 'usb', 'ble', 'nfc'];

  if (authType === 'local') return local;
  if (authType == 'roaming' || authType === 'extern') return roaming;
  if (authType === 'both') return [...local, ...roaming];

  // the default case: "auto", depending on device capabilities
  try {
    if (await isLocalAuthenticator()) return local;
    else return roaming;
  } catch (e) {
    return [...local, ...roaming];
  }
}

/**
 * Signs a challenge using one of the provided credentials IDs in order to authenticate the user.
 *
 * @param {string[]} credentialIds The list of credential IDs that can be used for signing.
 * @param {string} challenge A server-side randomly generated string, the base64 encoded version will be signed.
 * @param {Object} [options] Optional parameters.
 * @param {number} [options.timeout=60000] Number of milliseconds the user has to respond to the biometric/PIN check.
 * @param {'required'|'preferred'|'discouraged'} [options.userVerification='required'] Whether to prompt for biometric/PIN check or not.
 * @param {'optional'|'conditional'|'required'|'silent'} [options.mediation='optional'] https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/get#mediation
 */
export async function authenticate(
  credentialIds: string[],
  challenge: string,
  options?: AuthenticateOptions
): Promise<AuthenticationEncoded> {
  options = options ?? {};

  if (!utils.isBase64url(challenge))
    throw new Error('Provided challenge is not properly encoded in Base64url');

  const transports = await getTransports(options.authenticatorType ?? 'auto');

  const authOptions: PublicKeyCredentialRequestOptions = {
    challenge: utils.parseBase64url(challenge),
    rpId: window.location.hostname,
    allowCredentials: credentialIds.map((id) => {
      return {
        id: utils.parseBase64url(id),
        type: 'public-key',
        transports: transports
      };
    }),
    userVerification: options.userVerification ?? 'required',
    timeout: options.timeout ?? 60000,
    extensions: {
      prf: {
        eval: {
          first: salt
        }
      }
    }
  };

  if (options.debug) console.debug(authOptions);

  const auth = (await navigator.credentials.get({
    publicKey: authOptions,
    mediation: options.mediation
  })) as PublicKeyCredential;

  if (options.debug) console.debug(auth);

  const response = auth.response as AuthenticatorAssertionResponse;

  const authentication: AuthenticationEncoded = {
    credentialId: auth.id,
    //userHash: utils.toBase64url(response.userHandle), // unreliable, optional for authenticators
    authenticatorData: utils.toBase64url(response.authenticatorData),
    clientData: utils.toBase64url(response.clientDataJSON),
    signature: utils.toBase64url(response.signature),
    extensionResults: new Uint8Array(
      (
        auth.getClientExtensionResults() as AuthenticationExtensionsClientOutputsWithPrf
      ).prf.results.first
    )
  };

  return authentication;
}
