# React Device Frameset

This is yet another device frameset component for React.

## Features

* Powered by pure css device prototype showcase [Marvel Devices.css](http://marvelapp.github.io/devices.css/)
* [![language](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](http://typescriptlang.org/) Type Safe and under maintainable
* Sample for reference

![frameset-screenshot](https://user-images.githubusercontent.com/1303154/120062053-a58a6200-c092-11eb-9fec-fa0dd3609645.png)


## Installation

```bash
yarn add react-device-frameset (or npm)
```

## Usage

```tsx
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/lib/css/marvel-devices.min.css'

<DeviceFrameset device="iPhone 8" color="gold" landscape>
    <div>Hello world</div>
</DeviceFrameset>
```

## If you like our Device Selector Component

```tsx
import { DeviceFrameset } from 'react-device-frameset'
import { DeviceSelector } from 'react-device-frameset/lib/DeviceSelector'
import 'react-device-frameset/lib/css/marvel-devices.min.css'
import 'react-device-frameset/lib/css/device-selector.min.css'

<DeviceSelector>
    {props => <DeviceFrameset {...props} />}
</DeviceSelector>
```

## Signature
