!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(function(){return function(e){function t(t){for(var n,r,i=t[0],s=t[1],a=0,c=[];a<i.length;a++)r=i[a],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);c.length;)c.shift()()}var n={},o={2:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+""+({0:"dialog",1:"dialog-styles"}[e]||e)+".js"}(e);var l=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var i=this.webpackJsonp=this.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=s;return r(r.s=0)}([function(e,t,n){"use strict";n.r(t);try{self["workbox:window:5.0.0"]&&_()}catch(e){}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}try{self["workbox:core:5.0.0"]&&_()}catch(e){}var r=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function i(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var s=function(e,t){this.type=e,Object.assign(this,t)};function a(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function l(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}function c(){}var u,d=function(e){var t,n;function c(t,n){var o;return void 0===n&&(n={}),(o=e.call(this)||this).t={},o.i=0,o.o=new r,o.u=new r,o.s=new r,o.v=0,o.h=new Set,o.l=function(){var e=o.g,t=e.installing;o.i>0||!i(t.scriptURL,o.m)||performance.now()>o.v+6e4?(o.p=t,e.removeEventListener("updatefound",o.l)):(o.P=t,o.h.add(t),o.o.resolve(t)),++o.i,t.addEventListener("statechange",o.k)},o.k=function(e){var t=o.g,n=e.target,r=n.state,i=n===o.p,a=i?"external":"",l={sw:n,originalEvent:e};!i&&o.j&&(l.isUpdate=!0),o.dispatchEvent(new s(a+r,l)),"installed"===r?o.O=self.setTimeout((function(){"installed"===r&&t.waiting===n&&o.dispatchEvent(new s(a+"waiting",l))}),200):"activating"===r&&(clearTimeout(o.O),i||o.u.resolve(n))},o.R=function(e){var t=o.P;t===navigator.serviceWorker.controller&&(o.dispatchEvent(new s("controlling",{sw:t,originalEvent:e,isUpdate:o.j})),o.s.resolve(t))},o.S=l((function(e){var t=e.data,n=e.source;return a(o.getSW(),(function(){o.h.has(n)&&o.dispatchEvent(new s("message",{data:t,sw:n,originalEvent:e}))}))})),o.m=t,o.t=n,navigator.serviceWorker.addEventListener("message",o.S),o}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var u,d,f=c.prototype;return f.register=l((function(e){var t=this,n=(void 0===e?{}:e).immediate,o=void 0!==n&&n;return function(e,t){var n=function(){if(!o&&"complete"!==document.readyState)return h(new Promise((function(e){return window.addEventListener("load",e)})))}();return n&&n.then?n.then(t):t()}(0,(function(){return t.j=Boolean(navigator.serviceWorker.controller),t.U=t.B(),a(t.L(),(function(e){t.g=e,t.U&&(t.P=t.U,t.u.resolve(t.U),t.s.resolve(t.U),t.U.addEventListener("statechange",t.k,{once:!0}));var n=t.g.waiting;return n&&i(n.scriptURL,t.m)&&(t.P=n,Promise.resolve().then((function(){t.dispatchEvent(new s("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),t.P&&(t.o.resolve(t.P),t.h.add(t.P)),t.g.addEventListener("updatefound",t.l),navigator.serviceWorker.addEventListener("controllerchange",t.R,{once:!0}),t.g}))}))})),f.update=l((function(){if(this.g)return h(this.g.update())})),f.getSW=l((function(){return void 0!==this.P?this.P:this.o.promise})),f.messageSW=l((function(e){return a(this.getSW(),(function(t){return function(e,t){return new Promise((function(n){var o=new MessageChannel;o.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[o.port2])}))}(t,e)}))})),f.B=function(){var e=navigator.serviceWorker.controller;return e&&i(e.scriptURL,this.m)?e:void 0},f.L=l((function(){var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return a(navigator.serviceWorker.register(e.m,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))})),u=c,(d=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&o(u.prototype,d),c}(function(){function e(){this.M=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this._(e).add(t)},t.removeEventListener=function(e,t){this._(e).delete(t)},t.dispatchEvent=function(e){e.target=this;var t=this._(e.type),n=Array.isArray(t),o=0;for(t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if((o=t.next()).done)break;r=o.value}r(e)}},t._=function(e){return this.M.has(e)||this.M.set(e,new Set),this.M.get(e)},e}());function h(e,t){if(!t)return e&&e.then?e.then(c):Promise.resolve()}class f extends HTMLElement{constructor(){super(),this.logInfo=""===this.getAttribute("dev")?console.info.bind(console):()=>{},this.logWarn=""===this.getAttribute("dev")?console.warn.bind(console):()=>{},this.open=this.open.bind(this),this.dismiss=this.dismiss.bind(this),this.attachShadow({mode:"open"}),this.swUrl=this.getAttribute("sw-url"),this.swScope=this.getAttribute("sw-scope"),"serviceWorker"in navigator&&(u=new d(this.swUrl,{scope:this.swScope}),this.listenForNewVersion(),u.register())}get dialog(){return this._dialog||this.shadowRoot.querySelector(".dialog")}set dialog(e){this._dialog=e}get timeout(){return this._timeout||6e3}set timeout(e){this._timeout=e}get swUrl(){return this._swUrl||"./sw.js"}set swUrl(e){this._swUrl=e}get swScope(){return this._swScope||"/"}set swScope(e){this._swScope=e}get labelText(){return this._labelText||"A new version is available 💎"}set labelText(e){this._labelText=e}get color(){return this._color||"#303f9f"}set color(e){this._color=e}get backgroundColor(){return this._backgroundColor||"#ff4081"}set backgroundColor(e){this._backgroundColor=e}static get observedAttributes(){return["sw-url","sw-scope","timeout","color","background-color","on-dismiss"]}attributeChangedCallback(e,t,n){switch(e){case"sw-url":this.swUrl=n;break;case"sw-scope":this.swScope=n;break;case"timeout":this.timeout=n;break;case"label-text":this.labelText=n;break;case"color":this.color=n;break;case"background-color":this.backgroundColor=n;break;default:this.logWarn("PwaReloadDialog -> Unknown attribute has been added",e)}}disconnectedCallback(){this.logInfo("PwaReloadDialog -> Web component removed from page.")}async listenForNewVersion(){this.logInfo("PwaReloadDialog -> Attaching Service Worker event listeners for any new versions."),u.addEventListener("waiting",()=>{this.logWarn("PwaReloadDialog -> Make sure you include the following in your Service Worker JS file:\n                addEventListener('message', event => {\n                    if (event.data && event.data.type === 'NEW_VERSION') {\n                        skipWaiting();\n                    }\n                });\n            "),this.onNewVersionFound()})}async onNewVersionFound(){this.logInfo("PwaReloadDialog -> New version has been found! Opening snackbar..."),await this.createNewDialogElement(),this.attachDialogToShadowRoot(),this.open()}async createNewDialogElement(){const e=await n.e(0).then(n.bind(null,3));this.dialog=e.create(this.labelText,{timeout:this.timeout,dismiss:this.dismiss,eventListener:this.updateAndReload.bind(this),eventListenerLabel:"Reload page for the new version"})}async attachDialogToShadowRoot(){this.logInfo("PwaReloadDialog -> Appending dialog content and styles into shadow root.");const e=await n.e(1).then(n.t.bind(null,4,7)),t=document.createElement("template");t.innerHTML=`\n            <style>\n                :host {\n                    --pwa-reload-dialog-color: ${this.color};\n                    --pwa-reload-dialog-bg-color: ${this.backgroundColor};\n                }\n                ${e.default}\n            </style>\n        `,this.logInfo("PwaReloadDialog -> Opening dialog..."),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.appendChild(this.dialog)}open(){this.dialog.setAttributeNode(document.createAttribute("open")),this.dialog.setAttribute("aria-hidden","false"),this.logInfo("PwaReloadDialog -> Opened"),this.timeout&&setTimeout(()=>{this.dismiss()},this.timeout)}dismiss(){this.dialog.removeAttribute("open"),this.dialog.setAttribute("aria-hidden","true"),this.logInfo("PwaReloadDialog -> Dismissed")}updateAndReload(){this.logInfo("PwaReloadDialog -> Updating service worker and reloading the page."),u.addEventListener("controlling",()=>window.location.reload()),u.messageSW({type:"NEW_VERSION"})}}window.customElements.get("pwa-reload-dialog")||window.customElements.define("pwa-reload-dialog",f)}])}));