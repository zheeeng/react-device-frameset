import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DeviceOptions, DeviceFramesetProps } from './DeviceFrameset'
import { DeviceName, DeviceNames } from './DeviceOptions'

export type DeviceEmulatorProps = React.HTMLAttributes<HTMLDivElement> & {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceName,
    onChange?: (deviceName: DeviceName) => void,
}

export const DeviceEmulator = React.memo<DeviceEmulatorProps>(function DeviceEmulator ({ children, value, onChange, banDevices = [], ...divProps }) {
    const deviceNames = useMemo(() => DeviceNames.filter(devName => !banDevices.includes(devName)) as Array<keyof typeof DeviceOptions>, [])
    const [deviceName, setDeviceName] = useState<DeviceName>(deviceNames[0] ?? '')
    const selectedDeviceName = useMemo(() => value ?? deviceName, [value, deviceName])

    const handleSelectChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const newDeviceName = event.target.value as DeviceName
            if (!deviceNames.includes(newDeviceName)) throw new Error(`Invalid device name for ${newDeviceName}`)

            onChange?.(newDeviceName)
            setDeviceName(newDeviceName)
        },
        [deviceNames, onChange],
    )

    const { colors, hasLandscape, width, height } = useMemo(() => DeviceOptions[selectedDeviceName], [selectedDeviceName])

    const firstColor = useMemo(() => colors[0]!, [colors])

    const [isLandscape, setIsLandscape] = useState<boolean | undefined>(undefined)

    const isLandscapeChecked = useMemo(() => hasLandscape ? isLandscape : undefined, [hasLandscape, isLandscape])

    const handleIsLandscapeChange = useCallback(
        () => {
            if (!hasLandscape) return

            setIsLandscape(is => !is)
        },
        [hasLandscape]
    )

    const deviceFramesetProps = useMemo(
        () => ({
            device: selectedDeviceName,
            color: firstColor,
            landscape: isLandscapeChecked,
            width,
            height,
        }) as DeviceFramesetProps,
        [selectedDeviceName, firstColor, isLandscapeChecked, width, height],
    )

    return (
        <div className="device-emulator" {...divProps}>
            <section>
                <select value={selectedDeviceName} onChange={handleSelectChange}>
                    {deviceNames.map((devName) => (
                        <option
                            key={devName}
                            value={devName}
                        >{devName}</option>
                    ))}
                </select>
                <input disabled value={width} />
                <span>x</span>
                <input disabled value={height} />
                <label>Landscape:</label>
                <input type="checkbox" checked={!!isLandscapeChecked} disabled={!hasLandscape} onChange={handleIsLandscapeChange}/>
            </section>
        
            <div className="device-emulator-container">
                {children(deviceFramesetProps)}
            </div>
        </div>
    )
})
