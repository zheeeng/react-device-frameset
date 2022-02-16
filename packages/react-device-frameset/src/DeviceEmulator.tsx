import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DeviceOptions, DeviceFramesetProps } from './DeviceFrameset'
import { DeviceName, DeviceNames } from './DeviceOptions'

export type DeviceEmulatorProps = React.HTMLAttributes<HTMLDivElement> & {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceFramesetProps,
    onChange?: (deviceConfig: DeviceFramesetProps) => void,
}

const zooms = [
    0.5, 0.75, 1, 1.25, 1.5
]

export const DeviceEmulator = React.memo<DeviceEmulatorProps>(function DeviceEmulator ({ children, value, onChange, banDevices = [], ...divProps }) {
    const deviceNames = useMemo(() => DeviceNames.filter(devName => !banDevices.includes(devName)), [banDevices])
    const [deviceName, setDeviceName] = useState<DeviceName>(deviceNames[0] ?? '')

    const selectedDeviceName = useMemo(() => value?.device ?? deviceName, [value, deviceName])

    const handleSelectChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const newDeviceName = event.target.value as DeviceName
            if (!deviceNames.includes(newDeviceName)) throw new Error(`Invalid device name for ${newDeviceName}`)

            setDeviceName(newDeviceName)
        },
        [deviceNames],
    )

    const [selectedZoom, setSelectedZoom] = useState(zooms[2])

    const handleSelectZoomChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const newZoom = +event.target.value
            if (!zooms.includes(newZoom)) throw new Error(`Invalid device zoom for ${newZoom}`)

            setSelectedZoom(newZoom)
        },
        [],
    )

    const { colors, hasLandscape, width, height } = useMemo(() => DeviceOptions[selectedDeviceName], [selectedDeviceName])

    const firstColor = useMemo(() => colors[0], [colors])

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
        () => value ?? ({
            device: selectedDeviceName,
            color: firstColor,
            landscape: isLandscapeChecked,
            width,
            height,
            zoom: selectedZoom,
        }) as DeviceFramesetProps,
        [value, selectedDeviceName, firstColor, isLandscapeChecked, width, height, selectedZoom],
    )

    useEffect(
        () => {
            onChange?.(deviceFramesetProps)
        },
        [onChange, deviceFramesetProps]
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
                <select value={selectedZoom} onChange={handleSelectZoomChange}>
                    {zooms.map((zoom) => (
                        <option
                            key={zoom}
                            value={zoom}
                        >{zoom * 100}%</option>
                    ))}
                </select>
                <label>Landscape:</label>
                <input type="checkbox" checked={!!isLandscapeChecked} disabled={!hasLandscape} onChange={handleIsLandscapeChange}/>
            </section>
        
            <div className="device-emulator-container">
                {children(deviceFramesetProps)}
            </div>
        </div>
    )
})
