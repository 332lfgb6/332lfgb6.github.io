if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,f,i)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const a={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return s;case"module":return a;default:return e(c)}})).then(e=>{const c=i(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"weibo"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/css/10.21188b97.css",revision:"d95d3d43439e96edc7282302624e2b8b"},{url:"/css/11.2ed0cd25.css",revision:"fcc76bec383cdc376a1994ec243a1e65"},{url:"/css/12.b7b0b7d4.css",revision:"1cb6232b41f8d96ddd88b8dfc11621fd"},{url:"/css/13.29e4b3f9.css",revision:"dce0c3d8be0cf186bd3a986cc595e346"},{url:"/css/14.70736159.css",revision:"142b0a3e2ca7e35928494acbaf132d6c"},{url:"/css/15.d8997be5.css",revision:"fa39f7533423bb39c92a51b47fd29ba4"},{url:"/css/16.5ff439b3.css",revision:"467aaf66022e93b036027daadeab27b8"},{url:"/css/17.2eadf1d2.css",revision:"76528a3902b17b398628c81910cb9445"},{url:"/css/18.98ba06a0.css",revision:"8b3eaae7c44316f637ff7565d804be7e"},{url:"/css/19.240e6d4a.css",revision:"43a3eff7568410c70f22a60b87304992"},{url:"/css/20.42db5304.css",revision:"6527d0d4efc7899d56e28f03b1ef12f5"},{url:"/css/21.f5c5fd12.css",revision:"c992bf0549f7b1ee76a5d8b7e6ff8597"},{url:"/css/22.388f32c6.css",revision:"476988635733766c92b1ec109b3a4a7f"},{url:"/css/23.6d5365ff.css",revision:"4e87be4008eb67125cb6c30c09cd5960"},{url:"/css/24.3e41a109.css",revision:"4b0d2dfaa72640296330abc6b9bd14a4"},{url:"/css/25.fdc65606.css",revision:"2c38df7d86a7a9cf0278d39b473347d6"},{url:"/css/26.36d1de26.css",revision:"3dc5640cf0ab19a00938a1f672797766"},{url:"/css/3.b9f73e0a.css",revision:"c32ad3271cb9a83b3635c202f06c6d10"},{url:"/css/4.f84d23c5.css",revision:"573b08633b439445a55a36b72b30f264"},{url:"/css/5.06086535.css",revision:"224ca518bfc984b50133f7a536a9c8a1"},{url:"/css/6.c3dc5e21.css",revision:"a0c2a864fc64469b0778e2d04482f656"},{url:"/css/7.e948f47f.css",revision:"712002b6ee1c3742d1489f735848cddf"},{url:"/css/8.08eb1efe.css",revision:"722b11143df9f7eb760f04adfe565f35"},{url:"/css/9.b16d7690.css",revision:"df15ccfa16a8ce630ab9558e2cea0e79"},{url:"/css/app.8705f70a.css",revision:"22e762ad0ba884baa158deb510eab810"},{url:"/css/chunk-common.8e42ff85.css",revision:"9ed1ec725a06d0d1e6de40e5cc5a999a"},{url:"/css/vendor.4e81db59.css",revision:"1e6256fd5663923714b738429e2fa1d4"},{url:"/favicon.ico",revision:"7cfb7b6da2496ea66bdb0c4f3f6e6e28"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.0cd122a9.woff",revision:"3e818a94fbf09bb3f988bf070952b382"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.2987c5cc.woff2",revision:"945837e0b4566b601ce571159eb59e07"},{url:"/fonts/iconfont.d6e0a1ad.eot",revision:"e3bf12beb5d814cf4a026dfc40d58392"},{url:"/fonts/iconfont.fcf7ed9a.ttf",revision:"f0c77a5847cfc847ebe0e2079c22d08e"},{url:"/icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"/icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"/icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"/icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"/icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"/icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"/icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"/icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"/icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"/icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"/icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"/icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"/icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"/icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"/icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"/img/iconfont.4768e93b.svg",revision:"4da219dec405b06ff6fdc9b124ae0ac1"},{url:"/index.html",revision:"04f61fc24ba75c2073cb81b6addc5d4a"},{url:"/js/10.ca54c7e6.js",revision:"2846069b0f542b1fc99eadf9cbf3a1ec"},{url:"/js/11.5f8b55f0.js",revision:"2f06ebd3bf6860d023f28c9df9dcfb0d"},{url:"/js/12.f2af8948.js",revision:"6f026d5a2961dfb274416ef98568edb6"},{url:"/js/13.c21304ea.js",revision:"db0a75b4aaaf381b692f018d7ab2906a"},{url:"/js/14.81c1ade0.js",revision:"b7dabd568b9de12818c2a167395cbe9b"},{url:"/js/15.4761557b.js",revision:"290aa8d46ffa6945a2634cf3436addd8"},{url:"/js/16.207f8304.js",revision:"d06f59a7b35418bcb46e303904216cf4"},{url:"/js/17.d24d623f.js",revision:"4458567a36a8d41550c590eef5144df2"},{url:"/js/18.fe25683b.js",revision:"0e2aa1a86ed25ad21c0f06e454513d30"},{url:"/js/19.a42ed003.js",revision:"c2cc6cca7795b38a1d0d69f8e42b4447"},{url:"/js/20.b6ef159b.js",revision:"dfb89cc43bba2ecc48e7debf8dd4fea4"},{url:"/js/21.9c7b49a8.js",revision:"6c6833902daf2be2a04d1511ddbfa212"},{url:"/js/22.ed923d02.js",revision:"ce3c4c90bea39a8ce9be7afc14c0c2eb"},{url:"/js/23.db221442.js",revision:"5ecd2d2ecb26311015aa40667f47d95d"},{url:"/js/24.ee57cca6.js",revision:"662087b3aad4365208876a2fb2d584ba"},{url:"/js/25.f60f3214.js",revision:"e1e4354ca2dfa43c5d2c869c2c1e7fce"},{url:"/js/26.959440fd.js",revision:"706e343c0c426410d0a3cb8bf0b6e8b8"},{url:"/js/27.17336d53.js",revision:"26a616dd31df476356ef09e12bd81486"},{url:"/js/3.73a53148.js",revision:"f8a2d5a951a2f9e2c88f46e8cd438c2f"},{url:"/js/4.c8c67c77.js",revision:"f99913bdf24d47961bd341d3aac7cc46"},{url:"/js/5.24f6a119.js",revision:"c800ba6368569cc5287c4793a7c07ab0"},{url:"/js/6.e40279af.js",revision:"eb6bd7f402f511317bc1eda56745a379"},{url:"/js/7.be38b735.js",revision:"156043adb327ed9d538226aa77025c46"},{url:"/js/8.adf80218.js",revision:"58c86bbe436e22c9164a27745bd95fd8"},{url:"/js/9.cafeed5c.js",revision:"a829cccbe4a405b6751ebf88f24cf29f"},{url:"/js/app.c02c259b.js",revision:"942c2844a1f40147e301363a8233e8ef"},{url:"/js/chunk-common.e1496b5b.js",revision:"1901a0604860b3ac8150a981471d389a"},{url:"/js/vendor.f707b16c.js",revision:"58e3ec81d6280651d5e641ca5c194fac"},{url:"/manifest.json",revision:"07b6a702abef36be0a8027e03f2b9a02"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
