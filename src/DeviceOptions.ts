export const i = 11

type DeviceType<Device extends string, Colors extends readonly string[]> = {
    device: Device,
    colors: Colors,
    hasLandscape: boolean,
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
    }),
    ['iPhone 8']: defineDevice({
        device: 'iphone8',
        colors: ['black', 'silver', 'gold'] as const,
        hasLandscape: true,
    }),
    ['iPhone 8 Plus']: defineDevice({
        device: 'iphone8plus',
        colors: ['black', 'silver', 'gold'] as const,
        hasLandscape: true,
    }),
    ['iPhone 5s']: defineDevice({
        device: 'iphone5s',
        colors: ['black', 'silver', 'gold'] as const,
        hasLandscape: true,
    }),
    ['iPhone 5c']: defineDevice({
        device: 'iphone5c',
        colors: ['white', 'red', 'yellow', 'green', 'blue'] as const,
        hasLandscape: true,
    }),
    ['iPhone 4s']: defineDevice({
        device: 'iphone4s',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
    }),
    ['Galaxy Note 8']: defineDevice({
        device: 'note8',
        colors: [] as const,
        hasLandscape: true,
    }),
    ['Nexus 5']: defineDevice({
        device: 'nexus5',
        colors: [] as const,
        hasLandscape: true,
    }),
    ['Lumia 920']: defineDevice({
        device: 'lumia920',
        colors: ['black', 'white', 'yellow', 'red', 'blue'] as const,
        hasLandscape: true,
    }),
    ['Samsung Galaxy S5']: defineDevice({
        device: 's5',
        colors: ['white', 'black'] as const,
        hasLandscape: true,
    }),
    ['HTC One']: defineDevice({
        device: 'nexus5',
        colors: [] as const,
        hasLandscape: true,
    }),
    ['iPad Mini']: defineDevice({
        device: 'ipad',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
    }),
    ['MacBook Pro']: defineDevice({
        device: 'macbook',
        colors: [] as const,
        hasLandscape: false,
    }),
}

type DefaultTypeForNever<T, D> = T[] extends never[] ? D : T


type DevicesType<R extends Record<string, DeviceType<string, readonly string[]>>> = {
    [key in keyof R]: {
        device: key,
        color: DefaultTypeForNever<R[key]['colors'][number], undefined>,
        landscape: R[key]['hasLandscape'] extends true ? (boolean | undefined) : never
    } 
}[keyof R]

export type DeviceFramesetProps = DevicesType<typeof DeviceOptions>
