# GenoME

The PGP-UK GenoME app.

## Setup

```bash
brew install asdf cocoapods fastlane ngrok
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git

asdf install nodejs 18.10.0
asdf install ruby 3.1.2

asdf global nodejs 18.10.0
asdf global ruby 3.1.2

npm install -g expo-cli eas-cli ngrok react-devtools
```

## Install

```bash
yarn install
```

## Development on IOS (Mac Only)

First, login into the EAS Account.

```bash
eas login
```

Next, build the app locally

```bash
eas build --platform ios --profile simulator --local
```

This will generate a .tar.gz file, which you need to uncompress and then drag over to the IOS simulator.

Next start the dev-client:

```bash
expo start --ios --dev-client
```

## Development For Android

> TODO

## Development using EAS Build (Remote)

> Note, these builds can take some time.

Here you can run the following two commands. The development profile is for development and requires that you also run `expo start --dev-client`, while the preview command includes the entire app in its current state.

```bash
eas build --platform all --profile development
eas build --platform all --profile preview
```

### Adding IOS Devices

```bash
eas device:create
```
