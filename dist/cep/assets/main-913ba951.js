"use strict"if (typeof exports === 'undefined') { var exports = {}; };function p(){}function C(e){return e()}function k(){return Object.create(null)}function y(e){e.forEach(C)}function M(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function A(e){return Object.keys(e).length===0}function B(e,t,n){e.insertBefore(t,n||null)}function W(e){e.parentNode&&e.parentNode.removeChild(e)}function j(e){return document.createElement(e)}function D(e){return Array.from(e.childNodes)}function R(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let b;function _(e){b=e}const u=[],$=[];let l=[];const N=[],F=Promise.resolve();let m=!1;function J(){m||(m=!0,F.then(P))}function v(e){l.push(e)}const h=new Set;let f=0;function P(){if(f!==0)return;const e=b;do{try{for(;f<u.length;){const t=u[f];f++,_(t),H(t.$$)}}catch(t){throw u.length=0,f=0,t}for(_(null),u.length=0,f=0;$.length;)$.pop()();for(let t=0;t<l.length;t+=1){const n=l[t];h.has(n)||(h.add(n),n())}l.length=0}while(u.length);for(;N.length;)N.pop()();m=!1,h.clear(),_(e)}function H(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}function U(e){const t=[],n=[];l.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),l=t}const X=new Set;function z(e,t){e&&e.i&&(X.delete(e),e.i(t))}function G(e,t,n,o){const{fragment:r,after_update:d}=e.$$;r&&r.m(t,n),o||v(()=>{const c=e.$$.on_mount.map(C).filter(M);e.$$.on_destroy?e.$$.on_destroy.push(...c):y(c),e.$$.on_mount=[]}),d.forEach(v)}function V(e,t){const n=e.$$;n.fragment!==null&&(U(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(u.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,o,r,d,c,g=[-1]){const w=b;_(e);const s=e.$$={fragment:null,ctx:[],props:d,update:p,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(w?w.$$.context:[])),callbacks:k(),dirty:g,skip_bound:!1,root:t.target||w.$$.root};c&&c(s.root);let x=!1;if(s.ctx=n?n(e,t.props||{},(a,O,...S)=>{const E=S.length?S[0]:O;return s.ctx&&r(s.ctx[a],s.ctx[a]=E)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](E),x&&Z(e,a)),O}):[],s.update(),x=!0,y(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const a=D(t.target);s.fragment&&s.fragment.l(a),a.forEach(W)}else s.fragment&&s.fragment.c();t.intro&&z(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),P()}_(w)}class Y{$destroy(){V(this,1),this.$destroy=p}$on(t,n){if(!M(n))return p;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!A(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(e){let t;return{c(){t=j("h1"),t.textContent="Welcome to Bolt CEP! Bro",R(t,"color","#ff5b3b")},m(n,o){B(n,t,o)},p,i:p,o:p,d(n){n&&W(t)}}}class ee extends Y{constructor(t){super(),Q(this,t,null,K,T,{})}}function te(e,t,n){this.menuItemLabel=e,this.enabled=t,this.checked=n}function ne(e,t,n){this.menuItemID=e,this.enabled=t,this.checked=n}function i(){}i.THEME_COLOR_CHANGED_EVENT="com.adobe.csxs.events.ThemeColorChanged";i.prototype.hostEnvironment=window.__adobe_cep__?JSON.parse(window.__adobe_cep__.getHostEnvironment()):null;i.prototype.getHostEnvironment=function(){return this.hostEnvironment=JSON.parse(window.__adobe_cep__.getHostEnvironment()),this.hostEnvironment};i.prototype.loadBinAsync=function(e,t){try{var n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("GET",e,!0),n.onerror=function(){return console.log("Unable to load snapshot from given URL"),!1},n.send(),n.onload=()=>{window.__adobe_cep__.loadSnapshot(n.response),typeof t=="function"?t():typeof t<"u"&&console.log("Provided callback is not a function")}}catch(o){return console.log(o),!1}return!0};i.prototype.loadBinSync=function(e){try{var t=this.getOSInformation();if(e.startsWith("file://"))return t.indexOf("Windows")>=0?e=e.replace("file:///",""):t.indexOf("Mac")>=0&&(e=e.replace("file://","")),window.__adobe_cep__.loadSnapshot(e),!0}catch(n){return console.log(n),!1}return!1};i.prototype.closeExtension=function(){window.__adobe_cep__.closeExtension()};i.prototype.getSystemPath=function(e){var t=decodeURI(window.__adobe_cep__.getSystemPath(e)),n=this.getOSInformation();return n.indexOf("Windows")>=0?t=t.replace("file:///",""):n.indexOf("Mac")>=0&&(t=t.replace("file://","")),t};i.prototype.evalScript=function(e,t){t==null&&(t=function(n){}),window.__adobe_cep__.evalScript(e,t)};i.prototype.getApplicationID=function(){var e=this.hostEnvironment.appId;return e};i.prototype.getHostCapabilities=function(){var e=JSON.parse(window.__adobe_cep__.getHostCapabilities());return e};i.prototype.dispatchEvent=function(e){typeof e.data=="object"&&(e.data=JSON.stringify(e.data)),window.__adobe_cep__.dispatchEvent(e)};i.prototype.addEventListener=function(e,t,n){window.__adobe_cep__.addEventListener(e,t,n)};i.prototype.removeEventListener=function(e,t,n){window.__adobe_cep__.removeEventListener(e,t,n)};i.prototype.requestOpenExtension=function(e,t){window.__adobe_cep__.requestOpenExtension(e,t)};i.prototype.getExtensions=function(e){var t=JSON.stringify(e),n=window.__adobe_cep__.getExtensions(t),o=JSON.parse(n);return o};i.prototype.getNetworkPreferences=function(){var e=window.__adobe_cep__.getNetworkPreferences(),t=JSON.parse(e);return t};i.prototype.initResourceBundle=function(){for(var e=JSON.parse(window.__adobe_cep__.initResourceBundle()),t=document.querySelectorAll("[data-locale]"),n=0;n<t.length;n++){var o=t[n],r=o.getAttribute("data-locale");if(r){for(var d in e)if(d.indexOf(r)===0){var c=e[d];if(d.length==r.length)o.innerHTML=c;else if(d.charAt(r.length)=="."){var g=d.substring(r.length+1);o[g]=c}}}}return e};i.prototype.dumpInstallationInfo=function(){return window.__adobe_cep__.dumpInstallationInfo()};i.prototype.getOSInformation=function(){var e=navigator.userAgent;if(navigator.platform=="Win32"||navigator.platform=="Windows"){var t="Windows",n="";return e.indexOf("Windows")>-1&&(e.indexOf("Windows NT 5.0")>-1?t="Windows 2000":e.indexOf("Windows NT 5.1")>-1?t="Windows XP":e.indexOf("Windows NT 5.2")>-1?t="Windows Server 2003":e.indexOf("Windows NT 6.0")>-1?t="Windows Vista":e.indexOf("Windows NT 6.1")>-1?t="Windows 7":e.indexOf("Windows NT 6.2")>-1?t="Windows 8":e.indexOf("Windows NT 6.3")>-1?t="Windows 8.1":e.indexOf("Windows NT 10")>-1&&(t="Windows 10"),e.indexOf("WOW64")>-1||e.indexOf("Win64")>-1?n=" 64-bit":n=" 32-bit"),t+n}else if(navigator.platform=="MacIntel"||navigator.platform=="Macintosh"){var o="Mac OS X";return e.indexOf("Mac OS X")>-1&&(o=e.substring(e.indexOf("Mac OS X"),e.indexOf(")")),o=o.replace(/_/g,".")),o}return"Unknown Operation System"};i.prototype.openURLInDefaultBrowser=function(e){return cep.util.openURLInDefaultBrowser(e)};i.prototype.getExtensionID=function(){return window.__adobe_cep__.getExtensionId()};i.prototype.getScaleFactor=function(){return window.__adobe_cep__.getScaleFactor()};navigator.appVersion.toLowerCase().indexOf("windows")>=0&&(i.prototype.getMonitorScaleFactor=function(){return window.__adobe_cep__.getMonitorScaleFactor()});i.prototype.setScaleFactorChangedHandler=function(e){window.__adobe_cep__.setScaleFactorChangedHandler(e)};i.prototype.getCurrentApiVersion=function(){var e=JSON.parse(window.__adobe_cep__.getCurrentApiVersion());return e};i.prototype.setPanelFlyoutMenu=function(e){typeof e=="string"&&window.__adobe_cep__.invokeSync("setPanelFlyoutMenu",e)};i.prototype.updatePanelMenuItem=function(e,t,n){var o=!1;if(this.getHostCapabilities().EXTENDED_PANEL_MENU){var r=new te(e,t,n);o=window.__adobe_cep__.invokeSync("updatePanelMenuItem",JSON.stringify(r))}return o};i.prototype.setContextMenu=function(e,t){typeof e=="string"&&window.__adobe_cep__.invokeAsync("setContextMenu",e,t)};i.prototype.setContextMenuByJSON=function(e,t){typeof e=="string"&&window.__adobe_cep__.invokeAsync("setContextMenuByJSON",e,t)};i.prototype.updateContextMenuItem=function(e,t,n){var o=new ne(e,t,n);ret=window.__adobe_cep__.invokeSync("updateContextMenuItem",JSON.stringify(o))};i.prototype.isWindowVisible=function(){return window.__adobe_cep__.invokeSync("isWindowVisible","")};i.prototype.resizeContent=function(e,t){window.__adobe_cep__.resizeContent(e,t)};i.prototype.registerInvalidCertificateCallback=function(e){return window.__adobe_cep__.registerInvalidCertificateCallback(e)};i.prototype.registerKeyEventsInterest=function(e){return window.__adobe_cep__.registerKeyEventsInterest(e)};i.prototype.setWindowTitle=function(e){window.__adobe_cep__.invokeSync("setWindowTitle",e)};i.prototype.getWindowTitle=function(){return window.__adobe_cep__.invokeSync("getWindowTitle","")};String.format=function(e){if(arguments.length===0)return null;var t=Array.prototype.slice.call(arguments,1);return e.replace(/\{(\d+)\}/g,function(n,o){return t[o]})};const oe="0.0.1",ie={version:oe,id:"com.dry-bones.cep",displayName:"Dry Bones",symlink:"local",port:3e3,servePort:5e3,startingDebugPort:8860,extensionManifestVersion:6,requiredRuntimeVersion:9,hosts:[{name:"PPRO",version:"[0.0,99.9]"}],type:"Panel",iconDarkNormal:"./src/assets/light-icon.png",iconNormal:"./src/assets/dark-icon.png",iconDarkNormalRollOver:"./src/assets/light-icon.png",iconNormalRollOver:"./src/assets/dark-icon.png",parameters:["--v=0","--enable-nodejs","--mixed-context"],width:500,height:550,panels:[{mainPath:"./main/index.html",name:"main",panelDisplayName:"Dry Bones",autoVisible:!0,width:600,height:650}],build:{jsxBin:"off",sourceMap:!0},zxp:{country:"US",province:"CA",org:"MyCompany",password:"mypassword",tsa:"http://timestamp.digicert.com/",sourceMap:!1,jsxBin:"off"},installModules:[],copyAssets:[],copyZipAssets:[]},re=ie.id;typeof window.cep<"u"&&require("crypto");typeof window.cep<"u"&&require("assert");typeof window.cep<"u"&&require("buffer");typeof window.cep<"u"&&require("child_process");typeof window.cep<"u"&&require("cluster");typeof window.cep<"u"&&require("dgram");typeof window.cep<"u"&&require("dns");typeof window.cep<"u"&&require("domain");typeof window.cep<"u"&&require("events");const q=typeof window.cep<"u"?require("fs"):{};typeof window.cep<"u"&&require("http");typeof window.cep<"u"&&require("https");typeof window.cep<"u"&&require("net");typeof window.cep<"u"&&require("os");typeof window.cep<"u"&&require("path");typeof window.cep<"u"&&require("punycode");typeof window.cep<"u"&&require("querystring");typeof window.cep<"u"&&require("readline");typeof window.cep<"u"&&require("stream");typeof window.cep<"u"&&require("string_decoder");typeof window.cep<"u"&&require("timers");typeof window.cep<"u"&&require("tls");typeof window.cep<"u"&&require("tty");typeof window.cep<"u"&&require("url");typeof window.cep<"u"&&require("util");typeof window.cep<"u"&&require("v8");typeof window.cep<"u"&&require("vm");typeof window.cep<"u"&&require("zlib");const L=new i,se=(e,t=!1)=>new Promise(function(n,o){const d=(t?"":`var host = typeof $ !== 'undefined' ? $ : window; host["${re}"].`)+e;L.evalScript("try{"+d+"}catch(e){alert(e);}",c=>{n(c)})}),I=e=>se(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),de=(e=!0)=>{if(window.cep){const t=L.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;q.existsSync(n)?(e&&console.log(n),I(n)):q.existsSync(o)&&(e&&console.log(o),I(o))}};de();new ee({target:document.getElementById("root")});
//# sourceMappingURL=main-913ba951.js.map
