var N=Object.defineProperty,l=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,s=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&T(e,o,t[o]);if(i)for(var o of i(t))a.call(t,o)&&T(e,o,t[o]);return e},O=(e,t)=>l(e,A(t));var E=(e,t)=>{var o={};for(var n in e)r.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&i)for(var n of i(e))t.indexOf(n)<0&&a.call(e,n)&&(o[n]=e[n]);return o};import{c as I}from"./index.f1c8731c.js";const S=`MIT License

Copyright (c) 2022 Zheeeng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,c={},h="wrapper";function R(o){var n=o,{components:e}=n,t=E(n,["components"]);return I(h,O(s(s({},c),t),{components:e,mdxType:"MDXLayout"}),I("div",{style:{whiteSpace:"pre-line"}},S))}R.isMDXComponent=!0;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const u={};u.main=p;export{u as default};
