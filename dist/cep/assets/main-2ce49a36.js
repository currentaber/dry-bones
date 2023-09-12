"use strict"if (typeof exports === 'undefined') { var exports = {}; };function h(){}function T(e){return e()}function M(){return Object.create(null)}function S(e){e.forEach(T)}function j(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function D(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function H(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function I(){return U(" ")}function X(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function z(e){return Array.from(e.childNodes)}function q(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let m;function y(e){m=e}function G(){if(!m)throw new Error("Function called outside component initialization");return m}function V(e){G().$$.on_mount.push(e)}const _=[],P=[];let w=[];const W=[],Z=Promise.resolve();let E=!1;function Q(){E||(E=!0,Z.then(R))}function $(e){w.push(e)}const O=new Set;let p=0;function R(){if(p!==0)return;const e=m;do{try{for(;p<_.length;){const t=_[p];p++,y(t),Y(t.$$)}}catch(t){throw _.length=0,p=0,t}for(y(null),_.length=0,p=0;P.length;)P.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];O.has(n)||(O.add(n),n())}w.length=0}while(_.length);for(;W.length;)W.pop()();E=!1,O.clear(),y(e)}function Y(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}function K(e){const t=[],n=[];w.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),w=t}const ee=new Set;function te(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function ne(e,t,n,o){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),o||$(()=>{const d=e.$$.on_mount.map(T).filter(j);e.$$.on_destroy?e.$$.on_destroy.push(...d):S(d),e.$$.on_mount=[]}),s.forEach($)}function oe(e,t){const n=e.$$;n.fragment!==null&&(K(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){e.$$.dirty[0]===-1&&(_.push(e),Q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,o,i,s,d,u=[-1]){const f=m;y(e);const c=e.$$={fragment:null,ctx:[],props:s,update:h,not_equal:i,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:t.target||f.$$.root};d&&d(c.root);let l=!1;if(c.ctx=n?n(e,t.props||{},(a,k,...N)=>{const C=N.length?N[0]:k;return c.ctx&&i(c.ctx[a],c.ctx[a]=C)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](C),l&&re(e,a)),k}):[],c.update(),l=!0,S(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const a=z(t.target);c.fragment&&c.fragment.l(a),a.forEach(B)}else c.fragment&&c.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),R()}y(f)}class se{$destroy(){oe(this,1),this.$destroy=h}$on(t,n){if(!j(n))return h;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ce(e,t,n){this.menuItemLabel=e,this.enabled=t,this.checked=n}function de(e,t,n){this.menuItemID=e,this.enabled=t,this.checked=n}function r(){}r.THEME_COLOR_CHANGED_EVENT="com.adobe.csxs.events.ThemeColorChanged";r.prototype.hostEnvironment=window.__adobe_cep__?JSON.parse(window.__adobe_cep__.getHostEnvironment()):null;r.prototype.getHostEnvironment=function(){return this.hostEnvironment=JSON.parse(window.__adobe_cep__.getHostEnvironment()),this.hostEnvironment};r.prototype.loadBinAsync=function(e,t){try{var n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("GET",e,!0),n.onerror=function(){return console.log("Unable to load snapshot from given URL"),!1},n.send(),n.onload=()=>{window.__adobe_cep__.loadSnapshot(n.response),typeof t=="function"?t():typeof t<"u"&&console.log("Provided callback is not a function")}}catch(o){return console.log(o),!1}return!0};r.prototype.loadBinSync=function(e){try{var t=this.getOSInformation();if(e.startsWith("file://"))return t.indexOf("Windows")>=0?e=e.replace("file:///",""):t.indexOf("Mac")>=0&&(e=e.replace("file://","")),window.__adobe_cep__.loadSnapshot(e),!0}catch(n){return console.log(n),!1}return!1};r.prototype.closeExtension=function(){window.__adobe_cep__.closeExtension()};r.prototype.getSystemPath=function(e){var t=decodeURI(window.__adobe_cep__.getSystemPath(e)),n=this.getOSInformation();return n.indexOf("Windows")>=0?t=t.replace("file:///",""):n.indexOf("Mac")>=0&&(t=t.replace("file://","")),t};r.prototype.evalScript=function(e,t){t==null&&(t=function(n){}),window.__adobe_cep__.evalScript(e,t)};r.prototype.getApplicationID=function(){var e=this.hostEnvironment.appId;return e};r.prototype.getHostCapabilities=function(){var e=JSON.parse(window.__adobe_cep__.getHostCapabilities());return e};r.prototype.dispatchEvent=function(e){typeof e.data=="object"&&(e.data=JSON.stringify(e.data)),window.__adobe_cep__.dispatchEvent(e)};r.prototype.addEventListener=function(e,t,n){window.__adobe_cep__.addEventListener(e,t,n)};r.prototype.removeEventListener=function(e,t,n){window.__adobe_cep__.removeEventListener(e,t,n)};r.prototype.requestOpenExtension=function(e,t){window.__adobe_cep__.requestOpenExtension(e,t)};r.prototype.getExtensions=function(e){var t=JSON.stringify(e),n=window.__adobe_cep__.getExtensions(t),o=JSON.parse(n);return o};r.prototype.getNetworkPreferences=function(){var e=window.__adobe_cep__.getNetworkPreferences(),t=JSON.parse(e);return t};r.prototype.initResourceBundle=function(){for(var e=JSON.parse(window.__adobe_cep__.initResourceBundle()),t=document.querySelectorAll("[data-locale]"),n=0;n<t.length;n++){var o=t[n],i=o.getAttribute("data-locale");if(i){for(var s in e)if(s.indexOf(i)===0){var d=e[s];if(s.length==i.length)o.innerHTML=d;else if(s.charAt(i.length)=="."){var u=s.substring(i.length+1);o[u]=d}}}}return e};r.prototype.dumpInstallationInfo=function(){return window.__adobe_cep__.dumpInstallationInfo()};r.prototype.getOSInformation=function(){var e=navigator.userAgent;if(navigator.platform=="Win32"||navigator.platform=="Windows"){var t="Windows",n="";return e.indexOf("Windows")>-1&&(e.indexOf("Windows NT 5.0")>-1?t="Windows 2000":e.indexOf("Windows NT 5.1")>-1?t="Windows XP":e.indexOf("Windows NT 5.2")>-1?t="Windows Server 2003":e.indexOf("Windows NT 6.0")>-1?t="Windows Vista":e.indexOf("Windows NT 6.1")>-1?t="Windows 7":e.indexOf("Windows NT 6.2")>-1?t="Windows 8":e.indexOf("Windows NT 6.3")>-1?t="Windows 8.1":e.indexOf("Windows NT 10")>-1&&(t="Windows 10"),e.indexOf("WOW64")>-1||e.indexOf("Win64")>-1?n=" 64-bit":n=" 32-bit"),t+n}else if(navigator.platform=="MacIntel"||navigator.platform=="Macintosh"){var o="Mac OS X";return e.indexOf("Mac OS X")>-1&&(o=e.substring(e.indexOf("Mac OS X"),e.indexOf(")")),o=o.replace(/_/g,".")),o}return"Unknown Operation System"};r.prototype.openURLInDefaultBrowser=function(e){return cep.util.openURLInDefaultBrowser(e)};r.prototype.getExtensionID=function(){return window.__adobe_cep__.getExtensionId()};r.prototype.getScaleFactor=function(){return window.__adobe_cep__.getScaleFactor()};navigator.appVersion.toLowerCase().indexOf("windows")>=0&&(r.prototype.getMonitorScaleFactor=function(){return window.__adobe_cep__.getMonitorScaleFactor()});r.prototype.setScaleFactorChangedHandler=function(e){window.__adobe_cep__.setScaleFactorChangedHandler(e)};r.prototype.getCurrentApiVersion=function(){var e=JSON.parse(window.__adobe_cep__.getCurrentApiVersion());return e};r.prototype.setPanelFlyoutMenu=function(e){typeof e=="string"&&window.__adobe_cep__.invokeSync("setPanelFlyoutMenu",e)};r.prototype.updatePanelMenuItem=function(e,t,n){var o=!1;if(this.getHostCapabilities().EXTENDED_PANEL_MENU){var i=new ce(e,t,n);o=window.__adobe_cep__.invokeSync("updatePanelMenuItem",JSON.stringify(i))}return o};r.prototype.setContextMenu=function(e,t){typeof e=="string"&&window.__adobe_cep__.invokeAsync("setContextMenu",e,t)};r.prototype.setContextMenuByJSON=function(e,t){typeof e=="string"&&window.__adobe_cep__.invokeAsync("setContextMenuByJSON",e,t)};r.prototype.updateContextMenuItem=function(e,t,n){var o=new de(e,t,n);ret=window.__adobe_cep__.invokeSync("updateContextMenuItem",JSON.stringify(o))};r.prototype.isWindowVisible=function(){return window.__adobe_cep__.invokeSync("isWindowVisible","")};r.prototype.resizeContent=function(e,t){window.__adobe_cep__.resizeContent(e,t)};r.prototype.registerInvalidCertificateCallback=function(e){return window.__adobe_cep__.registerInvalidCertificateCallback(e)};r.prototype.registerKeyEventsInterest=function(e){return window.__adobe_cep__.registerKeyEventsInterest(e)};r.prototype.setWindowTitle=function(e){window.__adobe_cep__.invokeSync("setWindowTitle",e)};r.prototype.getWindowTitle=function(){return window.__adobe_cep__.invokeSync("getWindowTitle","")};String.format=function(e){if(arguments.length===0)return null;var t=Array.prototype.slice.call(arguments,1);return e.replace(/\{(\d+)\}/g,function(n,o){return t[o]})};const ae="0.0.1",ue={version:ae,id:"com.dry-bones.cep",displayName:"Dry Bones",symlink:"local",port:3e3,servePort:5e3,startingDebugPort:8860,extensionManifestVersion:6,requiredRuntimeVersion:9,hosts:[{name:"PPRO",version:"[0.0,99.9]"}],type:"Panel",iconDarkNormal:"./src/assets/light-icon.png",iconNormal:"./src/assets/dark-icon.png",iconDarkNormalRollOver:"./src/assets/light-icon.png",iconNormalRollOver:"./src/assets/dark-icon.png",parameters:["--v=0","--enable-nodejs","--mixed-context"],width:500,height:550,panels:[{mainPath:"./main/index.html",name:"main",panelDisplayName:"Dry Bones",autoVisible:!0,width:600,height:650}],build:{jsxBin:"off",sourceMap:!0},zxp:{country:"US",province:"CA",org:"MyCompany",password:"mypassword",tsa:"http://timestamp.digicert.com/",sourceMap:!1,jsxBin:"off"},installModules:[],copyAssets:[],copyZipAssets:[]},J=ue.id;typeof window.cep<"u"&&require("crypto");typeof window.cep<"u"&&require("assert");typeof window.cep<"u"&&require("buffer");typeof window.cep<"u"&&require("child_process");typeof window.cep<"u"&&require("cluster");typeof window.cep<"u"&&require("dgram");typeof window.cep<"u"&&require("dns");typeof window.cep<"u"&&require("domain");typeof window.cep<"u"&&require("events");const L=typeof window.cep<"u"?require("fs"):{};typeof window.cep<"u"&&require("http");typeof window.cep<"u"&&require("https");typeof window.cep<"u"&&require("net");typeof window.cep<"u"&&require("os");typeof window.cep<"u"&&require("path");typeof window.cep<"u"&&require("punycode");typeof window.cep<"u"&&require("querystring");typeof window.cep<"u"&&require("readline");typeof window.cep<"u"&&require("stream");typeof window.cep<"u"&&require("string_decoder");typeof window.cep<"u"&&require("timers");typeof window.cep<"u"&&require("tls");typeof window.cep<"u"&&require("tty");typeof window.cep<"u"&&require("url");typeof window.cep<"u"&&require("util");typeof window.cep<"u"&&require("v8");typeof window.cep<"u"&&require("vm");typeof window.cep<"u"&&require("zlib");const x=new r,fe=(e,t=!1)=>new Promise(function(n,o){const s=(t?"":`var host = typeof $ !== 'undefined' ? $ : window; host["${J}"].`)+e;x.evalScript("try{"+s+"}catch(e){alert(e);}",d=>{n(d)})}),le=(e,...t)=>new Promise(function(n,o){const i=t.map(s=>(console.log(JSON.stringify(s)),`${JSON.stringify(s)}`)).join(",");x.evalScript(`try{
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${J}"].${e}(${i});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`,s=>{try{if(s==="undefined")return n();const d=JSON.parse(s);d.name==="ReferenceError"?(console.error("REFERENCE ERROR"),o(d)):n(d)}catch{o(s)}})}),A=e=>fe(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),pe=(e=!0)=>{if(window.cep){const t=x.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;L.existsSync(n)?(e&&console.log(n),A(n)):L.existsSync(o)&&(e&&console.log(o),A(o))}},_e=()=>{const{green:e,blue:t,red:n}=JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return{rgb:{r:n,g:e,b:t},hex:`#${n.toString(16)}${e.toString(16)}${t.toString(16)}`}},we=e=>{const t=()=>{const n=_e();console.log("BG Color Updated: ",{rgb:n.rgb});const{r:o,g:i,b:s}=n.rgb;return`rgb(${o}, ${i}, ${s})`};e(t()),x.addEventListener("com.adobe.csxs.events.ThemeColorChanged",()=>e(t()),{})};function ge(e){let t,n,o,i,s,d,u,f;return{c(){t=v("div"),n=v("h1"),n.textContent="Dry Bones",o=I(),i=v("p"),i.innerHTML='Press the button to add structure to your <span style="text-decoration: line-through;">body</span> project.',s=I(),d=v("button"),d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="bone" class="svelte-ncujbo"><path d="M27.67,7.87a3.48,3.48,0,0,0-2.47-1h0a3.49,3.49,0,1,0-6.29,2l-10,10a3.51,3.51,0,0,0-2.1-.7,3.46,3.46,0,0,0-2.46,1,3.5,3.5,0,0,0,2.47,6h0a3.49,3.49,0,1,0,6.29-2l10-10a3.51,3.51,0,0,0,2.1.7,3.46,3.46,0,0,0,2.46-1A3.5,3.5,0,0,0,27.67,7.87Z"></path></svg>',b(n,"class","svelte-ncujbo"),b(i,"class","svelte-ncujbo"),b(d,"class","svelte-ncujbo"),b(t,"class","app svelte-ncujbo"),q(t,"--background-color",e[0])},m(c,l){H(c,t,l),g(t,n),g(t,o),g(t,i),g(t,s),g(t,d),u||(f=X(d,"click",e[1]),u=!0)},p(c,[l]){l&1&&q(t,"--background-color",c[0])},i:h,o:h,d(c){c&&B(t),u=!1,f()}}}function ye(e,t,n){let o="#282c34";const i=()=>le("createFolderStructure");return V(()=>{window.cep&&we(s=>n(0,o=s))}),[o,i]}class he extends se{constructor(t){super(),ie(this,t,ye,ge,F,{})}}pe();new he({target:document.getElementById("root")});
//# sourceMappingURL=main-2ce49a36.js.map
