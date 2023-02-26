# GenoME

The PGP-UK GenoME app.

## Installation

```bash
yarn install
```

Next, login into the EAS Account.

```bash
eas login
```

## Working with an iOS Simulator

### Setup

```bash
brew install cocoapods fastlane ngrok

# Install RTX runtime manager - https://github.com/jdxcode/rtx#installation
curl https://rtx.jdxcode.com/install.sh | sh

rtx install

npm install -g eas-cli
```

### Run

1. First, create the development client locally

```bash
eas build --platform ios --profile simulator --local
```

2. This will generate a `.tar.gz` file containing a `.app` file. Drag and drop this into the Simulator

3. Start the development server

```bash
APP_VARIANT=simulator yarn run start --ios --dev-client
```

## Development on a physical Device.

1. If using an IOS Device, for the first time, you will need to add this to the development profile

```bash
eas device:create
```

2. Next, Generate a development client using the online EAS service.

```bash
eas build --platform ios --profile development
eas build --platform android --profile development
```

3. Install the build development client on the physical device.

4. Start the development client

```bash
APP_VARIANT=development yarn run start --tunnel --dev-client
```

## Building a preview version of the app

This allows you to install a specific version of the app - i.e. it is similar to the final app.

```bash
eas build --platform ios --profile preview
eas build --platform android --profile preview
```

## Development For Android

> TODO
