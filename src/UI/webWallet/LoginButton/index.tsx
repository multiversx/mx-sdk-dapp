import React from 'react';
import classNames from 'classnames';
import webWalletLogin from '../../../services/login/webWalletLogin';
import { Props } from './types';

export const WebWalletLoginButton: (props: Props) => JSX.Element = ({
    token,
    className,
    callbackRoute,
    loginButtonText,
    shouldRenderDefaultCss = true,
}) => {

    const generatedClasses = {

        wrapper: classNames(className, {
            "btn btn-primary px-sm-4 m-1 mx-sm-3": shouldRenderDefaultCss
        }),

        loginText: classNames(`${className}_login-text`, {
            "text-left": shouldRenderDefaultCss
        }),

    };

    const handleLogin = () => {

        webWalletLogin({
            token,
            callbackRoute
        });

    };

    return (
        
        <button onClick={handleLogin} className={generatedClasses.wrapper}>
            <span className={generatedClasses.loginText}>
                {loginButtonText}
            </span>
        </button>
 
    )

}


export default WebWalletLoginButton;
