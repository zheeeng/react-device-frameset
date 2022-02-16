import React, { useMemo } from 'react'

import type { DeviceFramesetProps } from './DeviceOptions'
import { DeviceOptions } from './DeviceOptions'

export { DeviceOptions, DeviceFramesetProps }

export const DeviceFrameset = React.memo<DeviceFramesetProps>(
    function DeviceFrameset(props) {
        const { children, device, width, height, zoom, ...restProps } = props
        // @ts-expect-error: wait for ts 4.8
        const { landscape: _l, color: _c, ...divProps } = restProps

        const color = 'color' in props ? props.color : undefined
        const landscape = 'landscape' in props ? props.landscape : undefined

        const style = useMemo(
            () => (landscape && DeviceOptions[device].hasLandscape)
                ? ({ width: height, height: width, transform: zoom !== undefined ? `scale(${zoom})` : undefined })
                : ({ width, height, transform: zoom !== undefined ? `scale(${zoom})` : undefined }),
            [width, height, landscape, device, zoom],
        )

        return (
            <div
                className={`marvel-device ${DeviceOptions[device].device} ${color ? color : ''} ${landscape ? 'landscape' : ''}`}
                {...divProps}
                style={style}
            >
                <div className="inner" />
                {device === 'Galaxy Note 8' ? <div className="overflow">
                    <div className="shadow" />
                </div> : null}
                {device === 'iPhone X' ? <div className="notch">
                    <div className="camera" />
                    <div className="speaker" />
                </div> : null}
                <div className="top-bar" />
                <div className="sleep" />
                <div className="bottom-bar" />
                <div className="volume" />
                <div className="camera" />
                <div className="sensor" />
                <div className="speaker" />
                <div className="sensors" />
                <div className="more-sensors" />
                {device === 'iPhone X' ? <div className="overflow">
                    <div className="shadow shadow--tr"></div>
                    <div className="shadow shadow--tl"></div>
                    <div className="shadow shadow--br"></div>
                    <div className="shadow shadow--bl"></div>
                </div> : null}
                <div className="inner-shadow"></div>
                <div className="screen">
                    {children}
                </div>
                <div className="home"></div>
                <div className="bottom-bar"></div>
            </div>
        )
    }
);