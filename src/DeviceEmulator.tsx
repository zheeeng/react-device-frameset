import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DeviceOptions, DeviceFramesetProps } from './DeviceFrameset'
import { DeviceName, DeviceNames } from './DeviceOptions'

export type DeviceEmulatorProps = React.HTMLAttributes<HTMLDivElement> & {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
}

export const DeviceEmulator = React.memo<DeviceEmulatorProps>(function DeviceEmulator ({ children, banDevices = [], ...divProps }) {
    const deviceNames = useMemo(() => DeviceNames.filter(devName => !banDevices.includes(devName)) as Array<keyof typeof DeviceOptions>, [])
    const [deviceName, setDeviceName] = useState<DeviceName>(deviceNames[0] ?? '')

    const handleSelectChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            setDeviceName(event.target.value as DeviceName)
        },
        [],
    )

    const { colors, hasLandscape, width, height } = useMemo(() => DeviceOptions[deviceName], [deviceName])

    const [selectedColorIndex, setSelectedColorIndex] = useState(0) 
    const [isLandscape, setIsLandscape] = useState<boolean | undefined>(undefined)

    useEffect(
        () => { setSelectedColorIndex(0) },
        [colors],
    )
    useEffect(
        () => { setIsLandscape(hasLandscape ? false : undefined) },
        [hasLandscape],
    )

    const selectedColor = useMemo(() => colors[selectedColorIndex], [colors, selectedColorIndex])

    const deviceFramesetProps = useMemo(
        () => ({
            device: deviceName,
            color: selectedColor,
            landscape: isLandscape,
            width,
            height,
        }) as DeviceFramesetProps,
        [deviceName, selectedColor, isLandscape, width, height],
    )

    return (
        <div className="device-emulator" {...divProps}>
            <section>
                <select value={deviceName} onChange={handleSelectChange}>
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
                <input type="checkbox" checked={isLandscape} onClick={() => setIsLandscape(is => !is)}/>
            </section>
        
            <div className="device-emulator-container">
                {children(deviceFramesetProps)}
            </div>
        </div>
    )
})
