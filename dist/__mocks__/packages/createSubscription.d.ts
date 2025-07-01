export declare const createSubscription: (store: any, parentSub: any) => {
    addNestedSub: (listener: any) => any;
    notifyNestedSubs: () => void;
    handleChangeWrapper: () => void;
    isSubscribed: () => boolean;
    trySubscribe: () => void;
    tryUnsubscribe: () => void;
    getListeners: () => {
        notify: () => {};
        get: () => never[];
    };
};
//# sourceMappingURL=createSubscription.d.ts.map