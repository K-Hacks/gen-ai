"use strict";(self.webpackChunkdocusaurus_yt_example=self.webpackChunkdocusaurus_yt_example||[]).push([[5101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,p=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(p,o(o({ref:t},g),{},{components:n})):a.createElement(p,o({ref:t},g))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Image Generation",l={unversionedId:"imagegen/imagegenintro",id:"imagegen/imagegenintro",title:"Image Generation",description:"Image Generation is the task of generating new images from an existing dataset. It is a part of Generative AI that also uses diffusion models to generate images in various ways.",source:"@site/docs/imagegen/imagegenintro.md",sourceDirName:"imagegen",slug:"/imagegen/imagegenintro",permalink:"/gen-ai/docs/imagegen/imagegenintro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/imagegen/imagegenintro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebar",previous:{title:"Image Captioning App",permalink:"/gen-ai/docs/imgcap/intro"},next:{title:"What are Diffusion Models?",permalink:"/gen-ai/docs/imagegen/diffusionIntro"}},s={},m=[{value:"Unconditional Generation",id:"unconditional-generation",level:2},{value:"Conditional Generation",id:"conditional-generation",level:2},{value:"Few of the commonly used, top Image Generators used on the internet:",id:"few-of-the-commonly-used-top-image-generators-used-on-the-internet",level:3}],g={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-generation"},"Image Generation"),(0,i.kt)("p",null,"Image Generation is the task of generating new images from an existing dataset. It is a part of Generative AI that also uses diffusion models to generate images in various ways."),(0,i.kt)("p",null,"There are two kinds of image generation models:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conditional Generation"),(0,i.kt)("li",{parentName:"ul"},"Unconditional Generation")),(0,i.kt)("h2",{id:"unconditional-generation"},"Unconditional Generation"),(0,i.kt)("p",null,"Unconditional image generation is the task of generating images with no condition in any context (like a prompt text or another image). Once trained, the model will create images that resemble its training data distribution."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(6377).Z,width:"950",height:"415"})),(0,i.kt)("h2",{id:"conditional-generation"},"Conditional Generation"),(0,i.kt)("p",null,"Conditional image generation allows you to generate images from a text prompt. The text is converted into embeddings which are used to condition the model to generate an image from noise."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Text to Image"),(0,i.kt)("li",{parentName:"ul"},"Text-guided image to image"),(0,i.kt)("li",{parentName:"ul"},"Text-guided image-inpainting"),(0,i.kt)("li",{parentName:"ul"},"Image to image")),(0,i.kt)("h3",{id:"few-of-the-commonly-used-top-image-generators-used-on-the-internet"},"Few of the commonly used, top Image Generators used on the internet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dall-e2"),(0,i.kt)("li",{parentName:"ul"},"Midjourney"),(0,i.kt)("li",{parentName:"ul"},"DreamStudio by Stable Diffusion"),(0,i.kt)("li",{parentName:"ul"},"Bing Image Generator"),(0,i.kt)("li",{parentName:"ul"},"Clipdrop"),(0,i.kt)("li",{parentName:"ul"},"Google\u2019s Imagen"),(0,i.kt)("li",{parentName:"ul"},"Canva Image Generator")))}c.isMDXComponent=!0},6377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unconditional-image-generation-output-6a9431db3c41f734ddcda01f70f6f403.png"}}]);