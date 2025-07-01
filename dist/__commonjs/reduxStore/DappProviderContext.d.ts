/// <reference types="react" />
import { ReactReduxContextValue } from 'react-redux';
export declare const DappCoreContext: import("react").Context<ReactReduxContextValue<any, import("redux").AnyAction>>;
export declare const useStore: <State = any, Action extends import("redux").Action<any> = import("redux").AnyAction>() => import("redux").Store<State, Action>;
export declare const useDispatch: <AppDispatch extends import("redux").Dispatch<import("redux").AnyAction> = import("redux").Dispatch<import("redux").AnyAction>>() => AppDispatch;
export declare const useSelector: <TState = unknown, Selected = unknown>(selector: (state: TState) => Selected, equalityFn?: import("react-redux").EqualityFn<Selected> | undefined) => Selected;
//# sourceMappingURL=DappProviderContext.d.ts.map