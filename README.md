# React Device Frameset

This is yet another device frameset component for React.

## [Demo](https://react-device-frameset.zheeeng.me)

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

### Signature

```ts (signature)
| { device: 'iPhone X', landscape: boolean }
| { device: 'iPhone 8', color: 'black' | 'silver' | 'gold', landscape: boolean }
| { device: 'iPhone 8 Plus', color: 'black' | 'silver' | 'gold', landscape: boolean }
| { device: 'iPhone 5s', color: 'black' | 'silver' | 'gold', landscape: boolean }
| { device: 'iPhone 5c', color: 'white' | 'red' | 'yellow' | 'green' | 'blue', landscape: boolean }
| { device: 'iPhone 4s', color: 'black' | 'silver', landscape: boolean }
| { device: 'Galaxy Note 8', landscape: boolean }
| { device: 'Nexus 5', landscape: boolean }
| { device: 'Lumia 920', color: 'black' | 'white' | 'yellow' | 'red' | 'blue', landscape: boolean }
| { device: 'Samsung Galaxy S5', color: 'white' | 'black', landscape: boolean }
| { device: 'HTC One', landscape: boolean }
| { device: 'iPad Mini', color: 'black' | 'silver', landscape: boolean }
| { device: 'MacBook Pro' }
```
