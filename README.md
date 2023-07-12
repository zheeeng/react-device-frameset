# React Device Frameset

[![NPM](https://nodei.co/npm/react-device-frameset.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-device-frameset/)

![publish workflow](https://github.com/zheeeng/react-device-frameset/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/zheeeng/react-device-frameset/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/react-device-frameset.svg)](https://www.npmjs.com/package/react-device-frameset)

This is yet another device frameset component for React.

## [Demo](https://react-device-frameset.zheeeng.me)

## Features

* Powered by pure css device prototype showcase [Marvel Devices.css](http://marvelapp.github.io/devices.css/)
* [![language](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](http://typescriptlang.org/) Type Safe and under maintainable
* Sample for reference

  * Device Selector
![frameset-screenshot](https://user-images.githubusercontent.com/1303154/120062053-a58a6200-c092-11eb-9fec-fa0dd3609645.png)

  * Device Emulator
![frameset-screenshot](https://user-images.githubusercontent.com/1303154/132490604-f6d05da8-835d-437f-9b10-5ffec76e661f.png)

## Installation

```bash
yarn add react-device-frameset (or npm/pnpm)
```

## Usage

### Stylesheet importing

`react-device-frameset` supports [conditional exports](https://nodejs.org/api/packages.html#conditional-exports).

If the application bundler supports this feature and above node v12.11.0, you can import the stylesheet through the recommended path `react-device-frameset/styles`, it is largely supported in real developing environments, otherwise, you need to import it from `react-device-frameset/dist/styles`.

### Basic Example

```tsx
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

export const App = () => {
    return (
        <DeviceFrameset device="iPhone 8" color="gold" landscape>
            <div>Hello world</div>
        </DeviceFrameset>
    )
}
```

### Props Signature

DeviceFramesetProps:

```ts (signature)
| { device: 'iPhone X', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 8', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 8 Plus', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 5s', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 5c', color: 'white' | 'red' | 'yellow' | 'green' | 'blue', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 4s', color: 'black' | 'silver', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Galaxy Note 8', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Nexus 5', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Lumia 920', color: 'black' | 'white' | 'yellow' | 'red' | 'blue', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Samsung Galaxy S5', color: 'white' | 'black', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'HTC One', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPad Mini', color: 'black' | 'silver', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'MacBook Pro', width?: number, height?: number, zoom?: number }
```

## If you like the frameset selector?

```ts (signature)
type DeviceName = "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 5c" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro"

type DeviceEmulatorProps = {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceName,
    onChange?: (deviceName: DeviceName) => void, 
}
```

```tsx
import { DeviceFrameset, DeviceSelector } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import 'react-device-frameset/styles/device-selector.min.css'

export const App = () => {
    return (
        <DeviceSelector>
            {props => <DeviceFrameset {...props} />}
        </DeviceSelector>
    )
}
```

## If you like the frameset emulator?

```ts (signature)
type DeviceName = "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 5c" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro"

type DeviceEmulatorProps = {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceFramesetProps,
    onChange?: (deviceConfig: DeviceFramesetProps) => void, 
}
```

```tsx
import { DeviceFrameset, DeviceEmulator } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import 'react-device-frameset/styles/device-emulator.min.css'

export const App = () => {
    return (
        <DeviceEmulator banDevices={["HTC One"]}>
            {props => <DeviceFrameset {...props} />}
        </DeviceEmulator>
    )
}
```
