/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

type SvgrComponent = React.FunctionComponent<
  React.PropsWithChildren<
    React.PropsWithChildren<React.SVGAttributes<SVGElement>>
  >
>;

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgComponent;
}

declare module 'react-redux/lib/utils/Subscription' {
  declare type VoidFunc = () => void;
  declare type Listener = {
    callback: VoidFunc;
    next: Listener | null;
    prev: Listener | null;
  };
  declare function createListenerCollection(): {
    clear(): void;
    notify(): void;
    get(): Listener[];
    subscribe(callback: () => void): () => void;
  };
  declare type ListenerCollection = ReturnType<typeof createListenerCollection>;
  export interface Subscription {
    addNestedSub: (listener: VoidFunc) => VoidFunc;
    notifyNestedSubs: VoidFunc;
    handleChangeWrapper: VoidFunc;
    isSubscribed: () => boolean;
    onStateChange?: VoidFunc | null;
    trySubscribe: VoidFunc;
    tryUnsubscribe: VoidFunc;
    getListeners: () => ListenerCollection;
  }
  export declare function createSubscription(
    store: any,
    parentSub?: Subscription
  ): Subscription;
  export {};
}
