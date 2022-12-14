// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const createSubscription = (store, parentSub) => {
  function defaultNoopBatch(callback) {
    callback();
  }

  const batch = defaultNoopBatch; // Allow injecting another batching function later

  const getBatch = () => batch;
  function createListenerCollection() {
    const batch = getBatch();
    let first = null;
    let last = null;
    return {
      clear() {
        first = null;
        last = null;
      },

      notify() {
        batch(() => {
          let listener = first;

          while (listener) {
            listener.callback();
            listener = listener.next;
          }
        });
      },

      get() {
        const listeners = [];
        let listener = first;

        while (listener) {
          listeners.push(listener);
          listener = listener.next;
        }

        return listeners;
      },

      subscribe(callback) {
        let isSubscribed = true;
        const listener = (last = {
          callback,
          next: null,
          prev: last
        });

        if (listener.prev) {
          listener.prev.next = listener;
        } else {
          first = listener;
        }

        return function unsubscribe() {
          if (!isSubscribed || first === null) return;
          isSubscribed = false;

          if (listener.next) {
            listener.next.prev = listener.prev;
          } else {
            last = listener.prev;
          }

          if (listener.prev) {
            listener.prev.next = listener.next;
          } else {
            first = listener.next;
          }
        };
      }
    };
  }
  const nullListeners = {
    notify: () => ({}),

    get: () => []
  };
  let unsubscribe;
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (subscription.onStateChange) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub
        ? parentSub.addNestedSub(handleChangeWrapper)
        : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
};
