#!/bin/bash

echo 'Make sure you are using Node v16^ and have node_modules installed'
# Uncomment if using nvm
# nvm use 16

# Uncomment if you want to install node_modules as well
# echo 'Installing node_modules in mx-wallet-dapp'
# rm -rf node_modules
# rm -rf yarn.lock
# yar

cd ../mx-sdk-js-hw-provider

# Uncomment if you want to install node_modules as well
# echo 'Installing node_modules in mx-sdk-dapp'
# rm -rf node_modules
# rm -rf yarn.lock
# yarn

echo 'Linking mx-sdk-js-hw-provider'
npm run compile
yalc publish

echo 'Linking mx-sdk-dapp'
cd ../mx-sdk-dapp
yalc add @multiversx/sdk-hw-provider
