import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { DeviceOptions, DeviceFramesetProps } from './DeviceFrameset'
import { DeviceName, DeviceNames } from './DeviceOptions'

export type DeviceSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
    banDevices?: DeviceName[],
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceName,
    onChange?: (deviceName: DeviceName) => void,
}

export const DeviceSelector = React.memo<DeviceSelectorProps>(function DeviceSelector ({ children, value, onChange, banDevices = [], ...divProps }) {
    const deviceNames = useMemo(() => DeviceNames.filter(devName => !banDevices.includes(devName)), [banDevices])
    const [deviceName, setDeviceName] = useState<DeviceName>(deviceNames[0] ?? '')
    const selectedDeviceName = useMemo(() => value ?? deviceName, [value, deviceName])

    const handleSelectChange = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {

            const newDeviceName = event.currentTarget.dataset['deviceName'] as DeviceName
            if (!deviceNames.includes(newDeviceName)) throw new Error(`Invalid device name for ${newDeviceName}`)

            onChange?.(newDeviceName)
            setDeviceName(newDeviceName)
        },
        [deviceNames, onChange],
    )

    const [showMenu, setShowMenu] = useState(true)

    const { colors, hasLandscape, width, height } = useMemo(() => DeviceOptions[selectedDeviceName], [selectedDeviceName])

    const firstColor = useMemo(() => colors[0], [colors])

    const [selectedColor, setSelectedColor] = useState<typeof colors[number] | undefined>(firstColor)

    const handleColorChange = useCallback(
        (event: React.MouseEvent<HTMLLIElement>) => {

            const newDeviceColor = event.currentTarget.dataset['deviceColor'] as typeof colors[number]

            setSelectedColor(newDeviceColor)
        },
        [],
    )

    useEffect(() => { setSelectedColor(firstColor) }, [firstColor])

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
            color: selectedColor,
            landscape: isLandscapeChecked,
            width,
            height,
        }) as DeviceFramesetProps,
        [selectedDeviceName, selectedColor, isLandscapeChecked, width, height],
    )

    return (
        <div className="device-selector" {...divProps}>
            <dl>
                <dt>
                    <p>The Chosen: {selectedDeviceName}</p>
                    <span
                        className={(showMenu ? 'active' : '')}
                        onClick={() => setShowMenu(is => !is)}
                    >
                        show all devices
                    </span>
                </dt>
                {showMenu && deviceNames.map((devName) => (
                    <dd
                        key={devName}
                        data-device-name={devName}
                        onClick={handleSelectChange}
                        className={devName === selectedDeviceName ? 'active' : ''}
                    >
                        <input type="radio" id={devName} />
                        <label htmlFor={devName}>
                            <div>
                                <p>{devName}</p>
                                {DeviceOptions[devName].hasLandscape && (
                                    <span
                                        className={(devName === deviceName && isLandscape) ? 'active' : ''}
                                        onClick={handleIsLandscapeChange}
                                    >
                                        landscape
                                    </span>
                                )}
                            </div>
                            <ul>
                                {DeviceOptions[devName].colors.map(
                                    (color: string) => (
                                        <li
                                            key={color}
                                            title={color}
                                            data-device-color={color}
                                            onClick={handleColorChange}
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
                {children(deviceFramesetProps)}
            </div>
        </div>
    )
})