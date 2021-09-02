import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DeviceOptions, DeviceFramesetProps } from './DeviceFrameset'
import { DeviceName, DeviceNames } from './DeviceOptions'

export type DeviceEmulatorProps = React.HTMLAttributes<HTMLDivElement> & {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
}

export const DeviceEmulator = React.memo<DeviceEmulatorProps>(function DeviceEmulator ({ children, banDevices = [], ...divProps }) {
    const deviceNames = useMemo(() => DeviceNames.filter(devName => !banDevices.includes(devName)) as Array<keyof typeof DeviceOptions>, [])
    const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0)

    const handleSelectChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const index = +event.target.value
            setSelectedDeviceIndex(index)
        },
        [],
    )

    const deviceName = useMemo(() => deviceNames[selectedDeviceIndex], [selectedDeviceIndex])

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

    const props = {
        device: deviceName,
        color: selectedColor,
        landscape: isLandscape,
        width,
        height,
    } as DeviceFramesetProps

    return (
        <div className="device-emulator" {...divProps}>
            <section>
                <select value={deviceName} onChange={handleSelectChange}>
                    {deviceNames.map((devName, index) => (
                        <option
                            key={devName}
                            value={index}
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
                {children(props)}
            </div>
        </div>
    )
})
