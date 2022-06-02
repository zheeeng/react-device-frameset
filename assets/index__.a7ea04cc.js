var h=Object.defineProperty,v=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var m=(a,t,r)=>t in a?h(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,o=(a,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(a,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&m(a,r,t[r]);return a},s=(a,t)=>v(a,g(t));var l=(a,t)=>{var r={};for(var n in a)c.call(a,n)&&t.indexOf(n)<0&&(r[n]=a[n]);if(a!=null&&i)for(var n of i(a))t.indexOf(n)<0&&p.call(a,n)&&(r[n]=a[n]);return r};import{c as e}from"./index.f1c8731c.js";const b={},f="wrapper";function u(r){var n=r,{components:a}=n,t=l(n,["components"]);return e(f,s(o(o({},b),t),{components:a,mdxType:"MDXLayout"}),e("h1",null,"React Device Frameset"),e("p",null,e("a",{parentName:"p",href:"https://nodei.co/npm/react-device-frameset/"},e("img",{parentName:"a",src:"https://nodei.co/npm/react-device-frameset.png?downloads=true&downloadRank=true&stars=true",alt:"NPM"}))),e("p",null,e("img",{parentName:"p",src:"https://github.com/zheeeng/react-device-frameset/actions/workflows/publish.yml/badge.svg",alt:"publish workflow"}),`
`,e("img",{parentName:"p",src:"https://github.com/zheeeng/react-device-frameset/actions/workflows/pages.yml/badge.svg",alt:"pages workflow"}),`
`,e("a",{parentName:"p",href:"https://www.npmjs.com/package/react-device-frameset"},e("img",{parentName:"a",src:"https://img.shields.io/npm/v/react-device-frameset.svg",alt:"npm version"}))),e("p",null,"This is yet another device frameset component for React."),e("h2",null,e("a",{parentName:"h2",href:"https://react-device-frameset.zheeeng.me"},"Demo")),e("h2",null,"Features"),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},"Powered by pure css device prototype showcase ",e("a",{parentName:"p",href:"http://marvelapp.github.io/devices.css/"},"Marvel Devices.css"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"http://typescriptlang.org/"},e("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"language"}))," Type Safe and under maintainable")),e("li",{parentName:"ul"},e("p",{parentName:"li"},"Sample for reference"),e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("p",{parentName:"li"},`Device Selector
`,e("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1303154/120062053-a58a6200-c092-11eb-9fec-fa0dd3609645.png",alt:"frameset-screenshot"}))),e("li",{parentName:"ul"},e("p",{parentName:"li"},`Device Emulator
`,e("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1303154/132490604-f6d05da8-835d-437f-9b10-5ffec76e661f.png",alt:"frameset-screenshot"})))))),e("h2",null,"Installation"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`yarn add react-device-frameset (or npm/pnpm)
`)),e("h2",null,"Usage"),e("h3",null,"Stylesheet importing"),e("p",null,e("inlineCode",{parentName:"p"},"react-device-frameset")," supports ",e("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#conditional-exports"},"conditional exports"),"."),e("p",null,"If the application bundler supports this feature and above node v12.11.0, you can import the stylesheet through the recommended path ",e("inlineCode",{parentName:"p"},"react-device-frameset/styles"),", it is largely supported in real developing environments, otherwise, you need to import it from ",e("inlineCode",{parentName:"p"},"react-device-frameset/dist/styles"),"."),e("h3",null,"Basic Example"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

export const App = () => {
    return (
        <DeviceFrameset device="iPhone 8" color="gold" landscape>
            <div>Hello world</div>
        </DeviceFrameset>
    )
}
`)),e("h3",null,"Prop Signature"),e("p",null,"DeviceFramesetProps:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts",metastring:"(signature)","(signature)":!0},`| { device: 'iPhone X', landscape?: boolean, width?: number, height?: number, zoom?: number }
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
`)),e("h2",null,"If you like the frameset selector?"),e("pre",null,e("code",{parentName:"pre",className:"language-ts",metastring:"(signature)","(signature)":!0},`type DeviceName = "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 5c" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro"

type DeviceEmulatorProps = {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceName,
    onChange?: (deviceName: DeviceName) => void, 
}
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { DeviceFrameset, DeviceSelector } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import 'react-device-frameset/styles/device-selector.min.css'

export const App = () => {
    return (
        <DeviceSelector>
            {props => <DeviceFrameset {...props} />}
        </DeviceSelector>
    )
}
`)),e("h2",null,"If you like the frameset emulator?"),e("pre",null,e("code",{parentName:"pre",className:"language-ts",metastring:"(signature)","(signature)":!0},`type DeviceName = "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 5c" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro"

type DeviceEmulatorProps = {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceFramesetProps,
    onChange?: (deviceConfig: DeviceFramesetProps) => void, 
}
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { DeviceFrameset, DeviceEmulator } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import 'react-device-frameset/styles/device-emulator.min.css'

export const App = () => {
    return (
        <DeviceEmulator banDevices={["HTC One"]}>
            {props => <DeviceFrameset {...props} />}
        </DeviceEmulator>
    )
}
`)))}u.isMDXComponent=!0;const N={},y="wrapper";function d(r){var n=r,{components:a}=n,t=l(n,["components"]);return e(y,s(o(o({},N),t),{components:a,mdxType:"MDXLayout"}),e(u,{mdxType:"README"}))}d.isMDXComponent=!0;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:d});const P={};P.main=D;export{P as default};
