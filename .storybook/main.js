const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules',
    '@storybook/addon-jest'
  ],
  features: {
    interactionsDebugger: true
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src')
    ];

    // walletConnectV2Provider has compliation errors for storybook
    config.resolve.alias[
      '@multiversx/sdk-wallet-connect-provider/out/walletConnectV2Provider'
    ] = require.resolve(
      '@multiversx/sdk-wallet-connect-provider/out/walletConnectProvider'
    );

    config.node = {
      ...config.node,
      fs: 'empty'
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {}
          }
        },
        'sass-loader'
      ]
    });

    return config;
  },
  framework: '@storybook/react'
};
