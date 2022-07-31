# GenoME

## Installation

```bash
yarn install
```

## Building

During development, it is best to Build IOS + Android Builds with Expo Development Client

```bash
eas login

eas build --platform all --profile development

# after installing the built app, start expo client
expo start --dev-client  --tunnel
```

Alternatively generate an app without the development client:

```bash
eas build --platform all --profile preview
```

### Adding IOS Devices

```bash
eas device:create
```
