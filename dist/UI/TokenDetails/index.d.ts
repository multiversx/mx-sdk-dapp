import { Component } from 'react';
import { WithClassnameType } from '../types';
export interface TokenIconPropsType {
    token: string;
    combined?: boolean | undefined;
    small?: boolean | undefined;
    tokenAvatar?: string;
}
export interface TokenIconType extends TokenIconPropsType {
    symbol: string;
    label: string;
    icon: () => JSX.Element;
}
export declare class TokenDetails extends Component {
    static Token: (props: TokenIconPropsType) => JSX.Element;
    static Symbol: (props: TokenIconPropsType) => JSX.Element;
    static Label: (props: TokenIconPropsType) => JSX.Element;
    static Icon: (props: TokenIconPropsType & WithClassnameType) => JSX.Element;
    render(): null;
}
//# sourceMappingURL=index.d.ts.map