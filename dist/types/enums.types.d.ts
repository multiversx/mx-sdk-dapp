import { WindowProviderRequestEnums, WindowProviderResponseEnums } from 'lib/sdkWebWalletCrossWindowProvider';
export declare enum TransactionServerStatusesEnum {
    pending = "pending",
    fail = "fail",
    invalid = "invalid",
    success = "success",
    executed = "executed",
    notExecuted = "not executed",
    rewardReverted = "reward-reverted"
}
export declare enum SignedMessageStatusesEnum {
    pending = "pending",
    failed = "failed",
    signed = "signed",
    cancelled = "cancelled"
}
export declare enum TransactionBatchStatusesEnum {
    signed = "signed",
    cancelled = "cancelled",
    success = "success",
    sent = "sent",
    fail = "fail",
    timedOut = "timedOut",
    invalid = "invalid"
}
export declare enum LoginMethodsEnum {
    ledger = "ledger",
    walletconnect = "walletconnect",
    walletconnectv2 = "walletconnectv2",
    wallet = "wallet",
    crossWindow = "crossWindow",
    iframe = "iframe",
    extension = "extension",
    passkey = "passkey",
    metamask = "metamask",
    opera = "opera",
    extra = "extra",
    none = ""
}
export declare enum NotificationTypesEnum {
    warning = "warning",
    error = "error",
    success = "success"
}
export declare enum TypesOfSmartContractCallsEnum {
    MultiESDTNFTTransfer = "MultiESDTNFTTransfer",
    ESDTNFTTransfer = "ESDTNFTTransfer"
}
export declare enum EnvironmentsEnum {
    testnet = "testnet",
    devnet = "devnet",
    mainnet = "mainnet"
}
export declare enum ToastsEnum {
    custom = "custom",
    transaction = "transaction"
}
export declare enum TransactionTypesEnum {
    MultiESDTNFTTransfer = "MultiESDTNFTTransfer",
    ESDTTransfer = "ESDTTransfer",
    ESDTNFTBurn = "ESDTNFTBurn",
    ESDTNFTTransfer = "ESDTNFTTransfer",
    esdtTransaction = "esdtTransaction",
    nftTransaction = "nftTransaction",
    scCall = "scCall"
}
export declare enum TransactionsDefaultTitles {
    success = "Transaction successful",
    received = "Transaction received",
    failed = "Transaction failed",
    pending = "Processing transaction",
    timedOut = "Transaction timed out",
    invalid = "Transaction invalid"
}
export declare enum PlatformsEnum {
    ios = "ios",
    reactNative = "reactNative",
    web = "web",
    webWallet = "webWallet"
}
export declare enum WebViewProviderRequestBaseEnums {
    signTransactionsWithGuardianResponse = "SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",
    reloginRequest = "RELOGIN_REQUEST"
}
export declare const WebViewProviderRequestEnums: {
    signTransactionsWithGuardianResponse: WebViewProviderRequestBaseEnums.signTransactionsWithGuardianResponse;
    reloginRequest: WebViewProviderRequestBaseEnums.reloginRequest;
    signTransactionsRequest: WindowProviderRequestEnums.signTransactionsRequest;
    guardTransactionsRequest: WindowProviderRequestEnums.guardTransactionsRequest;
    signMessageRequest: WindowProviderRequestEnums.signMessageRequest;
    loginRequest: WindowProviderRequestEnums.loginRequest;
    logoutRequest: WindowProviderRequestEnums.logoutRequest;
    cancelAction: WindowProviderRequestEnums.cancelAction;
    finalizeHandshakeRequest: WindowProviderRequestEnums.finalizeHandshakeRequest;
    finalizeResetStateRequest: WindowProviderRequestEnums.finalizeResetStateRequest;
};
export declare enum WebViewProviderResponseBaseEnums {
    reloginResponse = "RELOGIN_RESPONSE"
}
export declare const WebViewProviderResponseEnums: {
    reloginResponse: WebViewProviderResponseBaseEnums.reloginResponse;
    handshakeResponse: WindowProviderResponseEnums.handshakeResponse;
    guardTransactionsResponse: WindowProviderResponseEnums.guardTransactionsResponse;
    loginResponse: WindowProviderResponseEnums.loginResponse;
    disconnectResponse: WindowProviderResponseEnums.disconnectResponse;
    cancelResponse: WindowProviderResponseEnums.cancelResponse;
    signTransactionsResponse: WindowProviderResponseEnums.signTransactionsResponse;
    signMessageResponse: WindowProviderResponseEnums.signMessageResponse;
    noneResponse: WindowProviderResponseEnums.noneResponse;
    resetStateResponse: WindowProviderResponseEnums.resetStateResponse;
};
//# sourceMappingURL=enums.types.d.ts.map