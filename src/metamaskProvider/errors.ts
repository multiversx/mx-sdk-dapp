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
    super('Cannot sign single transaction.');
  }
}

export class ErrAccountNotConnected extends Err {
  public constructor() {
    super('Account is not connected.');
  }
}

export class ErrCannotEstablishHandshake extends Err {
  public constructor() {
    super('Handshake could not be established');
  }
}

export class ErrInstantiationFailed extends Err {
  public constructor() {
    super(
      'Error: Instantiation failed: Use CrossWindowProvider.getInstance() instead of new.'
    );
  }
}

export class ErrWalletWindowNotInstantiated extends Err {
  public constructor() {
    super('Wallet window is not instantiated');
  }
}

export class ErrProviderNotInitialized extends Err {
  public constructor() {
    super('Wallet cross window provider is not initialised, call init() first');
  }
}

export class ErrCouldNotLogin extends Err {
  public constructor() {
    super('Could not login');
  }
}

export class ErrTransactionCancelled extends Err {
  public constructor() {
    super('Transaction canceled.');
  }
}

export class ErrCouldNotSignTransactions extends Err {
  public constructor() {
    super('Could not sign transactions');
  }
}
export class ErrCouldNotGuardTransactions extends Err {
  public constructor() {
    super('Could not guard transactions');
  }
}
export class ErrCouldNotSignMessage extends Err {
  public constructor() {
    super('Could not sign message');
  }
}
