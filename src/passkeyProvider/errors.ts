/**
 * The base class for exceptions (errors).
 */
export class Err extends Error {
  inner: Error | undefined = undefined;

  public constructor(message: string, inner?: Error) {
    super(message);
    this.inner = inner;
  }
}

export class ErrCannotSignSingleTransaction extends Err {
  public constructor() {
    super("Cannot sign single transaction.");
  }
}

export class ErrAccountNotConnected extends Err {
  public constructor() {
    super("Account is not connected.");
  }
}

export class AuthenticatorNotSupported extends Err {
  public constructor() {
    super("Passkey authenticator does not support PRF.");
  }
}
