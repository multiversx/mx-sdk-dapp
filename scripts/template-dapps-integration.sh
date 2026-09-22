#!/bin/sh

# Exit with nonzero exit code if anything fails
set -e

SDK_DAPP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATES_BRANCH="${TEMPLATES_BRANCH:-development}"
WORK_DIR="$(mktemp -d)"

# Install prerequisites
echo "Installing pnpm..."
corepack enable
corepack prepare --activate
echo "Installing yalc..."
npm install --global yalc@1.0.0-pre.53

# Publish the checked out mx-sdk-dapp, so the templates build the code under review
echo "cd $SDK_DAPP_DIR..."
cd "$SDK_DAPP_DIR"
echo "mx-sdk-dapp revision: $(git rev-parse HEAD)"

echo "Installing dependencies for mx-sdk-dapp..."
pnpm install --frozen-lockfile

echo "Building mx-sdk-dapp..."
pnpm build

echo "Publishing mx-sdk-dapp..."
yalc publish

cd "$WORK_DIR"

# Consume mx-sdk-dapp in mx-template-dapp
git clone --branch "$TEMPLATES_BRANCH" https://github.com/multiversx/mx-template-dapp.git

echo "cd mx-template-dapp..."
cd mx-template-dapp
echo "mx-template-dapp revision: $(git rev-parse HEAD)"

echo "Installing dependencies mx-template-dapp..."
pnpm install --no-frozen-lockfile

echo "Linking mx-sdk-dapp..."
yalc add --pure @multiversx/sdk-dapp

echo "Building mx-template-dapp..."
pnpm build-devnet
cd "$WORK_DIR"

# Consume mx-sdk-dapp in mx-template-dapp-nextjs
git clone --branch "$TEMPLATES_BRANCH" https://github.com/multiversx/mx-template-dapp-nextjs.git

echo "cd mx-template-dapp-nextjs..."
cd mx-template-dapp-nextjs
echo "mx-template-dapp-nextjs revision: $(git rev-parse HEAD)"

echo "Installing dependencies mx-template-dapp-nextjs..."
pnpm install --no-frozen-lockfile

echo "Linking mx-sdk-dapp..."
yalc add --pure @multiversx/sdk-dapp

echo "Building mx-template-dapp-nextjs..."
pnpm build:devnet

echo "Script executed successfully!"
