import React, { useEffect, useMemo, useState } from 'react'
import { DeviceOptions, DeviceFramesetProps } from './DeviceFrameset'
import { DeviceName, DeviceNames } from './DeviceOptions'

export type DeviceSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
    banDevices?: DeviceName[],
    children: (props: DeviceFramesetProps) => React.ReactNode,
}

export const DeviceSelector = React.memo<DeviceSelectorProps>(function DeviceSelector ({ children, banDevices = [], ...divProps }) {
    const deviceNames = useMemo(() => DeviceNames.filter(devName => !banDevices.includes(devName)) as Array<keyof typeof DeviceOptions>, [])
    const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0)
    const [showMenu, setShowMenu] = useState(true)

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
        <div className="device-selector" {...divProps}>
            <dl>
                <dt>
                    <p>The Chosen: {deviceName}</p>
                    <span
                        className={(showMenu ? 'active' : '')}
                        onClick={() => setShowMenu(is => !is)}
                    >
                        show all devices
                    </span>
                </dt>
                {showMenu && deviceNames.map((devName, index) => (
                    <dd
                        key={devName}
                        onClick={() => setSelectedDeviceIndex(index)}
                        className={devName === deviceName ? 'active' : ''}
                    >
                        <input type="radio" id={devName} />
                        <label htmlFor={devName}>
                            <div>
                                <p>{devName}</p>
                                {DeviceOptions[devName].hasLandscape && (
                                    <span
                                        className={(devName === deviceName && isLandscape) ? 'active' : ''}
                                        onClick={() => setIsLandscape(is => !is)}
                                    >
                                        landscape
                                    </span>
                                )}
                            </div>
                            <ul>
                                {DeviceOptions[devName].colors.map(
                                    (color: string, index: number) => (
                                        <li
                                            key={color}
                                            title={color}
                                            onClick={() => setSelectedColorIndex(index)}
                                            className={[((devName === deviceName && color === selectedColor) ? 'active' : ''), color].join(' ')}
                                        />
                                    )
                                )}
                            </ul>
                        </label>
                    </dd>
                ))}
            </dl>
        
            <div className="device-selector-container">
                {children(props)}
            </div>
        </div>
    )
})