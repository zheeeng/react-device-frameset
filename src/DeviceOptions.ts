import type { Compute, OptionField, OmitFieldByType } from './helper'

type DeviceType<Device extends string, Colors extends readonly string[]> = {
    device: Device,
    colors: Colors,
    hasLandscape: boolean,
    width?: number,
    height?: number,
}

export const defineDevice = <
    Device extends string,
    Colors extends readonly string[],
    Def extends DeviceType<Device, Colors>
>(definition: Def) => definition

export const DeviceOptions = {
    ['iPhone X']: defineDevice({
        device: 'iphone-x',
        colors: [] as const,
        hasLandscape: true,
		width: 375,
		height: 812,
    }),
    ['iPhone 8']: defineDevice({
        device: 'iphone8',
        colors: ['black', 'silver', 'gold'] as const,
        hasLandscape: true,
		width: 375,
		height: 667,
    }),
    ['iPhone 8 Plus']: defineDevice({
        device: 'iphone8plus',
        colors: ['black', 'silver', 'gold'] as const,
        hasLandscape: true,
		width: 414,
		height: 736,
    }),
    ['iPhone 5s']: defineDevice({
        device: 'iphone5s',
        colors: ['black', 'silver', 'gold'] as const,
        hasLandscape: true,
		width: 320,
		height: 568,
    }),
    ['iPhone 5c']: defineDevice({
        device: 'iphone5c',
        colors: ['white', 'red', 'yellow', 'green', 'blue'] as const,
        hasLandscape: true,
		width: 320,
		height: 568,
    }),
    ['iPhone 4s']: defineDevice({
        device: 'iphone4s',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 320,
		height: 480,
    }),
    ['Galaxy Note 8']: defineDevice({
        device: 'note8',
        colors: [] as const,
        hasLandscape: true,
		width: 400,
		height: 822,
    }),
    ['Nexus 5']: defineDevice({
        device: 'nexus5',
        colors: [] as const,
        hasLandscape: true,
		width: 320,
		height: 568,
    }),
    ['Lumia 920']: defineDevice({
        device: 'lumia920',
        colors: ['black', 'white', 'yellow', 'red', 'blue'] as const,
        hasLandscape: true,
		width: 320,
		height: 533,
    }),
    ['Samsung Galaxy S5']: defineDevice({
        device: 's5',
        colors: ['white', 'black'] as const,
        hasLandscape: true,
		width: 320,
		height: 568,
    }),
    ['HTC One']: defineDevice({
        device: 'nexus5',
        colors: [] as const,
        hasLandscape: true,
		width: 320,
		height: 568,
    }),
    ['iPad Mini']: defineDevice({
        device: 'ipad',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 576,
		height: 768,
    }),
    ['MacBook Pro']: defineDevice({
        device: 'macbook',
        colors: [] as const,
        hasLandscape: false,
		width: 960,
		height: 600,
    }),
}

export type DeviceName = keyof typeof DeviceOptions

export const DeviceNames = Object.keys(DeviceOptions) as DeviceName[]

type DevicesType<R extends Record<string, DeviceType<string, readonly string[]>>> = {
    [key in keyof R]: Compute<OptionField<OmitFieldByType<{
        device: key,
        color: R[key]['colors'][number],
        landscape: R[key]['hasLandscape'] extends true ? (boolean | undefined) : never
        width?: number,
        height?: number,
        zoom?: number,
    }, never>>>
}[keyof R]

export type DeviceFramesetProps = DevicesType<typeof DeviceOptions> & React.HTMLAttributes<HTMLDivElement>
