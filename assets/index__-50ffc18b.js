import{p as c}from"./_-84723408.js";import{u as r,j as e}from"./index-e974fee3.js";function i(s){const n=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"react-device-frameset",children:"React Device Frameset"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://nodei.co/npm/react-device-frameset/",children:e.jsx(n.img,{src:"https://nodei.co/npm/react-device-frameset.png?downloads=true&downloadRank=true&stars=true",alt:"NPM"})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.img,{src:"https://github.com/zheeeng/react-device-frameset/actions/workflows/publish.yml/badge.svg",alt:"publish workflow"}),`
`,e.jsx(n.img,{src:"https://github.com/zheeeng/react-device-frameset/actions/workflows/pages.yml/badge.svg",alt:"pages workflow"}),`
`,e.jsx(n.a,{href:"https://www.npmjs.com/package/react-device-frameset",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/react-device-frameset.svg",alt:"npm version"})})]}),`
`,e.jsx(n.p,{children:"This is yet another device frameset component for React."}),`
`,e.jsx(n.h2,{id:"demo",children:e.jsx(n.a,{href:"https://react-device-frameset.zheeeng.me",children:"Demo"})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Powered by pure css device prototype showcase ",e.jsx(n.a,{href:"http://marvelapp.github.io/devices.css/",children:"Marvel Devices.css"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"http://typescriptlang.org/",children:e.jsx(n.img,{src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"language"})})," Type Safe and under maintainable"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Sample for reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Device Selector
`,e.jsx(n.img,{src:"https://user-images.githubusercontent.com/1303154/120062053-a58a6200-c092-11eb-9fec-fa0dd3609645.png",alt:"frameset-screenshot"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Device Emulator
`,e.jsx(n.img,{src:"https://user-images.githubusercontent.com/1303154/132490604-f6d05da8-835d-437f-9b10-5ffec76e661f.png",alt:"frameset-screenshot"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add react-device-frameset (or npm/pnpm)
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"stylesheet-importing",children:"Stylesheet importing"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"react-device-frameset"})," supports ",e.jsx(n.a,{href:"https://nodejs.org/api/packages.html#conditional-exports",children:"conditional exports"}),"."]}),`
`,e.jsxs(n.p,{children:["If the application bundler supports this feature and above node v12.11.0, you can import the stylesheet through the recommended path ",e.jsx(n.code,{children:"react-device-frameset/styles"}),", it is largely supported in real developing environments, otherwise, you need to import it from ",e.jsx(n.code,{children:"react-device-frameset/dist/styles"}),"."]}),`
`,e.jsx(n.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

export const App = () => {
    return (
        <DeviceFrameset device="iPhone 8" color="gold" landscape>
            <div>Hello world</div>
        </DeviceFrameset>
    )
}
`})}),`
`,e.jsx(n.h3,{id:"props-signature",children:"Props Signature"}),`
`,e.jsx(n.p,{children:"DeviceFramesetProps:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`| { device: 'iPhone X', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 8', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 8 Plus', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 5s', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 5c', color: 'white' | 'red' | 'yellow' | 'green' | 'blue', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 4s', color: 'black' | 'silver', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Galaxy Note 8', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Nexus 5', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Lumia 920', color: 'black' | 'white' | 'yellow' | 'red' | 'blue', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Samsung Galaxy S5', color: 'white' | 'black', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'HTC One', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPad Mini', color: 'black' | 'silver', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'MacBook Pro', width?: number, height?: number, zoom?: number }
`})}),`
`,e.jsx(n.h2,{id:"if-you-like-the-frameset-selector",children:"If you like the frameset selector?"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type DeviceName = "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 5c" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro"

type DeviceEmulatorProps = {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceName,
    onChange?: (deviceName: DeviceName) => void, 
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DeviceFrameset, DeviceSelector } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import 'react-device-frameset/styles/device-selector.min.css'

export const App = () => {
    return (
        <DeviceSelector>
            {props => <DeviceFrameset {...props} />}
        </DeviceSelector>
    )
}
`})}),`
`,e.jsx(n.h2,{id:"if-you-like-the-frameset-emulator",children:"If you like the frameset emulator?"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type DeviceName = "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 5c" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro"

type DeviceEmulatorProps = {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceFramesetProps,
    onChange?: (deviceConfig: DeviceFramesetProps) => void, 
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DeviceFrameset, DeviceEmulator } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import 'react-device-frameset/styles/device-emulator.min.css'

export const App = () => {
    return (
        <DeviceEmulator banDevices={["HTC One"]}>
            {props => <DeviceFrameset {...props} />}
        </DeviceEmulator>
    )
}
`})})]})}function o(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}function t(s){return e.jsx(o,{})}function l(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t()}const d=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=c;a.main=d;export{a as default};
