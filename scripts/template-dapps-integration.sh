#!/bin/sh

# Exit with nonzero exit code if anything fails
set -e

# Install prerequisites
echo "Installing yarn..."
npm install --global yarn
echo "Installing yalc..."
npm install -global yalc


# Prepare mx-sdk-dapp for publishing
git clone https://github.com/multiversx/mx-sdk-dapp.git

echo "cd mx-sdk-dapp..."
cd mx-sdk-dapp
git checkout development

echo "Installing dependencies for mx-sdk-dapp..."
yarn install

echo "Building mx-sdk-dapp..."
yarn build

echo "Publishing mx-sdk-dapp..."
cd dist
yalc publish
cd ../..


# Consume mx-sdk-dapp in mx-template-dapp
git clone https://github.com/multiversx/mx-template-dapp.git

echo "cd mx-template-dapp..."
cd mx-template-dapp

echo "Installing dependencies mx-template-dapp..."
yarn install

echo "Linking mx-sdk-dapp..."
yalc add @multiversx/sdk-dapp

echo "Building mx-template-dapp..."
yarn build:devnet


# Consume mx-sdk-dapp in mx-template-dapp-nextjs
git clone https://github.com/multiversx/mx-template-dapp-nextjs.git

echo "cd mx-template-dapp-nextjs..."
cd mx-template-dapp-nextjs

echo "Installing dependencies mx-template-dapp-nextjs..."
yarn install

echo "Linking mx-sdk-dapp..."
yalc add @multiversx/sdk-dapp

echo "Building mx-template-dapp-nextjs..."
yarn build-devnet

echo "Script executed successfully!"
