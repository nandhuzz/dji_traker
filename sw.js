if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const o=e=>n(e,t),l={module:{uri:t},exports:d,require:o};i[t]=Promise.all(s.map((e=>l[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bemp_4hR.js",revision:null},{url:"assets/index-n_ryQ3BS.css",revision:null},{url:"index.html",revision:"210ce3112b91426b185eacb70e0c8a10"},{url:"registerSW.js",revision:"2dcf54e00a092c087e15c6e571c4d311"},{url:"pwa-192x192.png",revision:"de57c2b02976eadb3fd7dfefdf924208"},{url:"pwa-512x512.png",revision:"de57c2b02976eadb3fd7dfefdf924208"},{url:"manifest.webmanifest",revision:"8fca23f9f4e75d60b88831dd629739a9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));