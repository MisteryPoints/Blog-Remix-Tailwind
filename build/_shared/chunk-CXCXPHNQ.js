import{a as f}from"/build/_shared/chunk-IU4A746G.js";import{a as g}from"/build/_shared/chunk-TRZGYRXH.js";import{a as p,b as i}from"/build/_shared/chunk-H5YGW6VV.js";import{c as s,e as C,f as o,g as r,h as u,l as m}from"/build/_shared/chunk-NTB5FEMZ.js";r();var v=s(p());function k({src:t,className:e}){return o.createElement("div",{style:{backgroundImage:`url(${t})`},className:(0,v.default)(`w-16 h-16 bg-center bg-cover bg-no-repeat ${e?"":"rounded-full"} `,{[e]:e})})}r();var c=s(p());r();var d=s(C());r();function h({show:t,close:e,children:l}){return t?o.createElement("div",{className:"bg-black bg-opacity-60 fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 "},o.createElement("div",{className:"relative bg-slate-700 w-1/2 min-h-1/3 max-h-full rounded-md p-6 "},o.createElement("span",{className:"absolute -right-3 -top-3 font-bold bg-white px-3 py-1.5 rounded-full hover:cursor-pointer hover:bg-gray-600 transition-all",onClick:e},"X"),o.createElement("div",null,l))):null}function b(){let{category:t}=u(),[e,l]=(0,d.useState)(!1),[x,a]=(0,d.useState)(null),n=()=>l(y=>!y);return o.createElement(o.Fragment,null,o.createElement("div",{className:"bg-stone-800 flex items-center justify-between py-5 px-10"},o.createElement(m,{to:"/"},o.createElement("h1",{className:"text-white text-2xl hover:text-gray-600"},"Dev Blog")),o.createElement("div",{className:"grid grid-cols-1"},t!==void 0?o.createElement(i,{className:"border-red-600 hover:bg-red-600",onClick:()=>{a(o.createElement(g,{close:n})),n()}},"Crear Post"):o.createElement(i,{className:"border-blue-500 hover:bg-blue-500",onClick:()=>{a(o.createElement(f,{close:n})),n()}},"Crear Categor\xEDa"))),o.createElement(h,{show:e,close:n},x))}function w({children:t,className:e}){return o.createElement(o.Fragment,null,o.createElement(b,null),o.createElement("div",{className:(0,c.default)("container mx-auto",{[e]:e})},t))}r();var D="https://remix-blog-devpoint.netlify.app";export{k as a,w as b,D as c};