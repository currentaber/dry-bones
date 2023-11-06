"use strict"if (typeof exports === 'undefined') { var exports = {}; };function h(){}function Z(e){return e()}function D(){return Object.create(null)}function P(e){e.forEach(Z)}function ee(e){return typeof e=="function"}function te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function de(e){return Object.keys(e).length===0}function fe(e,...t){if(e==null)return h;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function F(e,t,n){e.$$.on_destroy.push(fe(t,n))}function j(e,t,n){return e.set(n),t}function l(e,t){e.appendChild(t)}function ue(e,t,n){e.insertBefore(t,n||null)}function ne(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function le(e){return document.createTextNode(e)}function C(){return le(" ")}function T(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function U(e,t){e.value=t==null?"":t}function Y(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let N;function k(e){N=e}function _e(){if(!N)throw new Error("Function called outside component initialization");return N}function we(e){_e().$$.on_mount.push(e)}const E=[],K=[];let A=[];const V=[],ge=Promise.resolve();let L=!1;function ye(){L||(L=!0,ge.then(oe))}function W(e){A.push(e)}const $=new Set;let x=0;function oe(){if(x!==0)return;const e=N;do{try{for(;x<E.length;){const t=E[x];x++,k(t),me(t.$$)}}catch(t){throw E.length=0,x=0,t}for(k(null),E.length=0,x=0;K.length;)K.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];$.has(n)||($.add(n),n())}A.length=0}while(E.length);for(;V.length;)V.pop()();L=!1,$.clear(),k(e)}function me(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function he(e){const t=[],n=[];A.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),A=t}const be=new Set;function ve(e,t){e&&e.i&&(be.delete(e),e.i(t))}function Se(e,t,n,o){const{fragment:i,after_update:c}=e.$$;i&&i.m(t,n),o||W(()=>{const a=e.$$.on_mount.map(Z).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...a):P(a),e.$$.on_mount=[]}),c.forEach(W)}function xe(e,t){const n=e.$$;n.fragment!==null&&(he(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(E.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,o,i,c,a,f=[-1]){const u=N;k(e);const s=e.$$={fragment:null,ctx:[],props:c,update:h,not_equal:i,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:D(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};a&&a(s.root);let p=!1;if(s.ctx=n?n(e,t.props||{},(d,_,...w)=>{const b=w.length?w[0]:_;return s.ctx&&i(s.ctx[d],s.ctx[d]=b)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](b),p&&Oe(e,d)),_}):[],s.update(),p=!0,P(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const d=pe(t.target);s.fragment&&s.fragment.l(d),d.forEach(ne)}else s.fragment&&s.fragment.c();t.intro&&ve(e.$$.fragment),Se(e,t.target,t.anchor,t.customElement),oe()}k(u)}class Ae{$destroy(){xe(this,1),this.$destroy=h}$on(t,n){if(!ee(n))return h;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ce(e,t,n){this.menuItemLabel=e,this.enabled=t,this.checked=n}function ke(e,t,n){this.menuItemID=e,this.enabled=t,this.checked=n}function r(){}r.THEME_COLOR_CHANGED_EVENT="com.adobe.csxs.events.ThemeColorChanged";r.prototype.hostEnvironment=window.__adobe_cep__?JSON.parse(window.__adobe_cep__.getHostEnvironment()):null;r.prototype.getHostEnvironment=function(){return this.hostEnvironment=JSON.parse(window.__adobe_cep__.getHostEnvironment()),this.hostEnvironment};r.prototype.loadBinAsync=function(e,t){try{var n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("GET",e,!0),n.onerror=function(){return console.log("Unable to load snapshot from given URL"),!1},n.send(),n.onload=()=>{window.__adobe_cep__.loadSnapshot(n.response),typeof t=="function"?t():typeof t<"u"&&console.log("Provided callback is not a function")}}catch(o){return console.log(o),!1}return!0};r.prototype.loadBinSync=function(e){try{var t=this.getOSInformation();if(e.startsWith("file://"))return t.indexOf("Windows")>=0?e=e.replace("file:///",""):t.indexOf("Mac")>=0&&(e=e.replace("file://","")),window.__adobe_cep__.loadSnapshot(e),!0}catch(n){return console.log(n),!1}return!1};r.prototype.closeExtension=function(){window.__adobe_cep__.closeExtension()};r.prototype.getSystemPath=function(e){var t=decodeURI(window.__adobe_cep__.getSystemPath(e)),n=this.getOSInformation();return n.indexOf("Windows")>=0?t=t.replace("file:///",""):n.indexOf("Mac")>=0&&(t=t.replace("file://","")),t};r.prototype.evalScript=function(e,t){t==null&&(t=function(n){}),window.__adobe_cep__.evalScript(e,t)};r.prototype.getApplicationID=function(){var e=this.hostEnvironment.appId;return e};r.prototype.getHostCapabilities=function(){var e=JSON.parse(window.__adobe_cep__.getHostCapabilities());return e};r.prototype.dispatchEvent=function(e){typeof e.data=="object"&&(e.data=JSON.stringify(e.data)),window.__adobe_cep__.dispatchEvent(e)};r.prototype.addEventListener=function(e,t,n){window.__adobe_cep__.addEventListener(e,t,n)};r.prototype.removeEventListener=function(e,t,n){window.__adobe_cep__.removeEventListener(e,t,n)};r.prototype.requestOpenExtension=function(e,t){window.__adobe_cep__.requestOpenExtension(e,t)};r.prototype.getExtensions=function(e){var t=JSON.stringify(e),n=window.__adobe_cep__.getExtensions(t),o=JSON.parse(n);return o};r.prototype.getNetworkPreferences=function(){var e=window.__adobe_cep__.getNetworkPreferences(),t=JSON.parse(e);return t};r.prototype.initResourceBundle=function(){for(var e=JSON.parse(window.__adobe_cep__.initResourceBundle()),t=document.querySelectorAll("[data-locale]"),n=0;n<t.length;n++){var o=t[n],i=o.getAttribute("data-locale");if(i){for(var c in e)if(c.indexOf(i)===0){var a=e[c];if(c.length==i.length)o.innerHTML=a;else if(c.charAt(i.length)=="."){var f=c.substring(i.length+1);o[f]=a}}}}return e};r.prototype.dumpInstallationInfo=function(){return window.__adobe_cep__.dumpInstallationInfo()};r.prototype.getOSInformation=function(){var e=navigator.userAgent;if(navigator.platform=="Win32"||navigator.platform=="Windows"){var t="Windows",n="";return e.indexOf("Windows")>-1&&(e.indexOf("Windows NT 5.0")>-1?t="Windows 2000":e.indexOf("Windows NT 5.1")>-1?t="Windows XP":e.indexOf("Windows NT 5.2")>-1?t="Windows Server 2003":e.indexOf("Windows NT 6.0")>-1?t="Windows Vista":e.indexOf("Windows NT 6.1")>-1?t="Windows 7":e.indexOf("Windows NT 6.2")>-1?t="Windows 8":e.indexOf("Windows NT 6.3")>-1?t="Windows 8.1":e.indexOf("Windows NT 10")>-1&&(t="Windows 10"),e.indexOf("WOW64")>-1||e.indexOf("Win64")>-1?n=" 64-bit":n=" 32-bit"),t+n}else if(navigator.platform=="MacIntel"||navigator.platform=="Macintosh"){var o="Mac OS X";return e.indexOf("Mac OS X")>-1&&(o=e.substring(e.indexOf("Mac OS X"),e.indexOf(")")),o=o.replace(/_/g,".")),o}return"Unknown Operation System"};r.prototype.openURLInDefaultBrowser=function(e){return cep.util.openURLInDefaultBrowser(e)};r.prototype.getExtensionID=function(){return window.__adobe_cep__.getExtensionId()};r.prototype.getScaleFactor=function(){return window.__adobe_cep__.getScaleFactor()};navigator.appVersion.toLowerCase().indexOf("windows")>=0&&(r.prototype.getMonitorScaleFactor=function(){return window.__adobe_cep__.getMonitorScaleFactor()});r.prototype.setScaleFactorChangedHandler=function(e){window.__adobe_cep__.setScaleFactorChangedHandler(e)};r.prototype.getCurrentApiVersion=function(){var e=JSON.parse(window.__adobe_cep__.getCurrentApiVersion());return e};r.prototype.setPanelFlyoutMenu=function(e){typeof e=="string"&&window.__adobe_cep__.invokeSync("setPanelFlyoutMenu",e)};r.prototype.updatePanelMenuItem=function(e,t,n){var o=!1;if(this.getHostCapabilities().EXTENDED_PANEL_MENU){var i=new Ce(e,t,n);o=window.__adobe_cep__.invokeSync("updatePanelMenuItem",JSON.stringify(i))}return o};r.prototype.setContextMenu=function(e,t){typeof e=="string"&&window.__adobe_cep__.invokeAsync("setContextMenu",e,t)};r.prototype.setContextMenuByJSON=function(e,t){typeof e=="string"&&window.__adobe_cep__.invokeAsync("setContextMenuByJSON",e,t)};r.prototype.updateContextMenuItem=function(e,t,n){var o=new ke(e,t,n);ret=window.__adobe_cep__.invokeSync("updateContextMenuItem",JSON.stringify(o))};r.prototype.isWindowVisible=function(){return window.__adobe_cep__.invokeSync("isWindowVisible","")};r.prototype.resizeContent=function(e,t){window.__adobe_cep__.resizeContent(e,t)};r.prototype.registerInvalidCertificateCallback=function(e){return window.__adobe_cep__.registerInvalidCertificateCallback(e)};r.prototype.registerKeyEventsInterest=function(e){return window.__adobe_cep__.registerKeyEventsInterest(e)};r.prototype.setWindowTitle=function(e){window.__adobe_cep__.invokeSync("setWindowTitle",e)};r.prototype.getWindowTitle=function(){return window.__adobe_cep__.invokeSync("getWindowTitle","")};String.format=function(e){if(arguments.length===0)return null;var t=Array.prototype.slice.call(arguments,1);return e.replace(/\{(\d+)\}/g,function(n,o){return t[o]})};const Ne="0.0.1",Ie={version:Ne,id:"com.dry-bones.cep",displayName:"Dry Bones",symlink:"local",port:3e3,servePort:5e3,startingDebugPort:8860,extensionManifestVersion:6,requiredRuntimeVersion:9,hosts:[{name:"PPRO",version:"[0.0,99.9]"}],type:"Panel",iconDarkNormal:"./src/assets/light-icon.png",iconNormal:"./src/assets/dark-icon.png",iconDarkNormalRollOver:"./src/assets/light-icon.png",iconNormalRollOver:"./src/assets/dark-icon.png",parameters:["--v=0","--enable-nodejs","--mixed-context"],width:500,height:550,panels:[{mainPath:"./main/index.html",name:"main",panelDisplayName:"Dry Bones",autoVisible:!0,width:600,height:650}],build:{jsxBin:"off",sourceMap:!0},zxp:{country:"US",province:"CA",org:"MyCompany",password:"mypassword",tsa:"http://timestamp.digicert.com/",sourceMap:!1,jsxBin:"off"},installModules:[],copyAssets:[],copyZipAssets:[]},H=Ie.id;typeof window.cep<"u"&&require("crypto");typeof window.cep<"u"&&require("assert");typeof window.cep<"u"&&require("buffer");typeof window.cep<"u"&&require("child_process");typeof window.cep<"u"&&require("cluster");typeof window.cep<"u"&&require("dgram");typeof window.cep<"u"&&require("dns");typeof window.cep<"u"&&require("domain");typeof window.cep<"u"&&require("events");const v=typeof window.cep<"u"?require("fs"):{};typeof window.cep<"u"&&require("http");typeof window.cep<"u"&&require("https");typeof window.cep<"u"&&require("net");const Pe=typeof window.cep<"u"?require("os"):{},ie=typeof window.cep<"u"?require("path"):{};typeof window.cep<"u"&&require("punycode");typeof window.cep<"u"&&require("querystring");typeof window.cep<"u"&&require("readline");typeof window.cep<"u"&&require("stream");typeof window.cep<"u"&&require("string_decoder");typeof window.cep<"u"&&require("timers");typeof window.cep<"u"&&require("tls");typeof window.cep<"u"&&require("tty");typeof window.cep<"u"&&require("url");typeof window.cep<"u"&&require("util");typeof window.cep<"u"&&require("v8");typeof window.cep<"u"&&require("vm");typeof window.cep<"u"&&require("zlib");const M=new r,Me=(e,t=!1)=>new Promise(function(n,o){const c=(t?"":`var host = typeof $ !== 'undefined' ? $ : window; host["${H}"].`)+e;M.evalScript("try{"+c+"}catch(e){alert(e);}",a=>{n(a)})}),X=(e,...t)=>new Promise(function(n,o){const i=t.map(c=>(console.log(JSON.stringify(c)),`${JSON.stringify(c)}`)).join(",");M.evalScript(`try{
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${H}"].${e}(${i});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`,c=>{try{if(c==="undefined")return n();const a=JSON.parse(c);a.name==="ReferenceError"?(console.error("REFERENCE ERROR"),o(a)):n(a)}catch{o(c)}})}),Q=e=>Me(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),qe=(e=!0)=>{if(window.cep){const t=M.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;v.existsSync(n)?(e&&console.log(n),Q(n)):v.existsSync(o)&&(e&&console.log(o),Q(o))}},Te=()=>{const{green:e,blue:t,red:n}=JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return{rgb:{r:n,g:e,b:t},hex:`#${n.toString(16)}${e.toString(16)}${t.toString(16)}`}},Re=e=>{const t=()=>{const n=Te();console.log("BG Color Updated: ",{rgb:n.rgb});const{r:o,g:i,b:c}=n.rgb;return`rgb(${o}, ${i}, ${c})`};e(t()),M.addEventListener("com.adobe.csxs.events.ThemeColorChanged",()=>e(t()),{})},O=[];function re(e,t=h){let n;const o=new Set;function i(f){if(te(e,f)&&(e=f,n)){const u=!O.length;for(const s of o)s[1](),O.push(s,e);if(u){for(let s=0;s<O.length;s+=2)O[s][0](O[s+1]);O.length=0}}}function c(f){i(f(e))}function a(f,u=h){const s=[f,u];return o.add(s),o.size===1&&(n=t(i)||h),f(e),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:i,update:c,subscribe:a}}const G=re({name:"After Effects",id:"aeft",version:"23.5"}),se={init:!1,index:0,bones:[`# Sample 1
# Comments start with "#"
# Subfolders start with "|"

00 Creative
|01 Client
|02 Internal

01 Cuts
|00 Archive

02 Footage
|01 Raw
|02 Proxies
|03 Transcodes
|04 Reference
|05 Exports

03 Audio
|01 Location
|02 VO
||01 Temp
||02 Final
|03 Music
||01 Temp
||02 Final
|04 SFX
|05 Mixes
||01 Temp
||02 Final

04 Graphics
|01 Vector
|02 Raster
|03 Exports

05 2D
|01 Projects
|02 Assets
|03 Exports

05 3D
|01 Projects
|02 Assets
|03 Renders

07 Color
|01 Projects
|02 Looks
|03 Conforms
|04 Exports

08 Output
|01 Rough
|02 Final
`]},R=re(se),$e=Pe.platform(),ce=$e==="darwin"?`${{}.HOME||window.cep_node.process.env.HOME}/Library/Preferences`:{}.APPDATA||window.cep_node.process.env.APPDATA,I=window.cep?ie.join(ce,H):"",B=window.cep?ie.join(I,"prefs.json"):"",ae=()=>{window.cep&&(console.log("main dir is: ",ce),console.log("prefs is: ",I),v.mkdirSync(I,{recursive:!0}))},z=e=>{window.cep&&(v.existsSync(I)||v.mkdirSync(I,{recursive:!0}),v.writeFileSync(B,JSON.stringify(e),{encoding:"utf-8"}))},Le=()=>{if(window.cep&&v.existsSync(B)){const e=v.readFileSync(B,{encoding:"utf-8"});try{const t=JSON.parse(e);return{...se,...t}}catch{return!1}}return!1};function We(e){let t,n,o,i,c,a,f,u,s,p,d,_,w,b,g,J;return{c(){t=y("div"),n=y("p"),n.textContent="Window too small.",o=C(),i=y("div"),c=y("div"),c.innerHTML=`<img class="logo svelte-1i1es47" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2du2sVQRSHP1ZRb1BMbBRfpY29UUuxCoJaiJ2VIIJ2YqMWSkBBRTHKTSs2IoKVguB/4KMKWNj6AvNQY4zGx8rgDF4ku7m7d7M7mfl9cKp7d2b2Y5jdObucBSGEEEII8Y8twDDwHPgCTAPPgAvA5o7/iZKsAa4Bc0CaEd+Bq8Dqsp3EzjbgZY7g/+MVsL3pQS81hoCPBSS7+AwcaHrwS4VjwK8Skl2YY482fRK+c6RHyS5+S3Y2h4GfFUh2Ydo6lNNflOwCvlUo2cUssLPpk/OFjcCbRZDs4p3utWEV8GIRJbt4CqwkYm7VINnFdSJln707qEu06Ws/kbEBmKhRsosPwHoi4n4Dkl3cJaIlI204DhI4a4HXHoh+CwwQMDc8kOzCjCVYJj0Q7GKcgJnwQHDnHUiwXPFAsAszlmBZYU9wvOEl47Idi5iHLHGiYlKJrodUoiU6KFLNaIn2jj6b7C/zzkZVMQXcBFoEzKgHGxUXZixBkgBfPRDsYsaOKTgSiY5z6WgTMC1gxF6QmhI8aXPRQV8MeyFLnKiYVKLrIZVoiQ6KVDNaor2mr8a8RxT5DZ82L8HmN3zbjs+Emt/IIpHosJeONhHSqjHvofxGAbIkiopJJboeUomW6KBINaMlOrocyFTMOY0mNjLR5TSa2prPxJbTKEoi0Utr6WjXON4ocyCTemejd3QfXROpNiwSHQwDOTO6v+nBhcTuHNGmwpioiJEc0dHWSqqarbbmaJboTyq31jvLgcdd3D8/ApZV0F+02/E7BTYrt5XfKI6p5PWwxM7wCbCpRH/RsQ44u0ABlR82sn43x56xbQn+JvjNhW4QOAk8sPX7F5q1pr708S7+N23bPAHssH2ZPqOgr8c3SM93tDVcso0onsKMlpRjinefmqe90z0U9g72KUxSMqlvatTtyWl3L/C+RLvBPoVJCoqes58G6SaX0W93iHmfEYlGdLdLhymsfdF+5KYo5phLXc7wdixPT2atkDHgnr2tG6xoliW25Pw52/aY7cv0qacwQgghhBBCCEEHfwAEI1+0Z6xilQAAAABJRU5ErkJggg=="/> 
            <h1 class="svelte-1i1es47">Dry Bones</h1>`,a=C(),f=y("textarea"),u=C(),s=y("div"),p=y("button"),p.textContent="Load",d=C(),_=y("button"),_.textContent="Run",w=C(),b=y("div"),b.innerHTML='<a href="https://icons8.com/icon/DIMe9ZTnqdy3/fish-bone" class="svelte-1i1es47">Fish Bone</a> icon by <a href="https://icons8.com" class="svelte-1i1es47">Icons8</a>',m(n,"class","alert svelte-1i1es47"),m(c,"class","header svelte-1i1es47"),m(f,"class","text-editor svelte-1i1es47"),m(p,"class","button-outline svelte-1i1es47"),m(_,"class","button-solid svelte-1i1es47"),m(s,"class","button-container svelte-1i1es47"),m(b,"class","credit"),m(i,"class","container svelte-1i1es47"),m(t,"class","app svelte-1i1es47"),Y(t,"--background-color",e[1])},m(S,q){ue(S,t,q),l(t,n),l(t,o),l(t,i),l(i,c),l(i,a),l(i,f),U(f,e[0]),l(i,u),l(i,s),l(s,p),l(s,d),l(s,_),l(i,w),l(i,b),g||(J=[T(f,"input",e[4]),T(f,"change",e[3]),T(p,"click",ae),T(_,"click",e[2])],g=!0)},p(S,[q]){q&1&&U(f,S[0]),q&2&&Y(t,"--background-color",S[1])},i:h,o:h,d(S){S&&ne(t),g=!1,P(J)}}}function Be(e,t,n){let o,i;F(e,R,d=>n(5,o=d)),F(e,G,d=>n(6,i=d));let c="",a="#282c34";const f=()=>{c.length===0?u("Empty Text Editor"):X("parseText",c)},u=d=>{X("alertUser",d)};we(()=>{if(window.cep){Re(g=>n(1,a=g)),ae();const d=Le();let{appVersion:_,appId:w}=M.getHostEnvironment();w=w.toLowerCase(),j(G,i={name:"ppro",id:w,version:_},i),d&&j(R,o=d,o),R.subscribe(g=>{console.log("state changed",g),n(0,c=g.bones[0]),z(g)})}});const s=()=>{R.subscribe(d=>{console.log("state changed",d),z(d)})};function p(){c=this.value,n(0,c)}return[c,a,f,s,p]}class He extends Ae{constructor(t){super(),Ee(this,t,Be,We,te,{})}}qe();new He({target:document.getElementById("root")});
//# sourceMappingURL=main-ee9412e0.js.map
