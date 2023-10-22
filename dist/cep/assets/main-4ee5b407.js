"use strict"
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${H}"].${e}(${i});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`,c=>{try{if(c==="undefined")return n();const a=JSON.parse(c);a.name==="ReferenceError"?(console.error("REFERENCE ERROR"),o(a)):n(a)}catch{o(c)}})}),Q=e=>Pe(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),Me=(e=!0)=>{if(window.cep){const t=P.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;h.existsSync(n)?(e&&console.log(n),Q(n)):h.existsSync(o)&&(e&&console.log(o),Q(o))}},qe=()=>{const{green:e,blue:t,red:n}=JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return{rgb:{r:n,g:e,b:t},hex:`#${n.toString(16)}${e.toString(16)}${t.toString(16)}`}},Te=e=>{const t=()=>{const n=qe();console.log("BG Color Updated: ",{rgb:n.rgb});const{r:o,g:i,b:c}=n.rgb;return`rgb(${o}, ${i}, ${c})`};e(t()),P.addEventListener("com.adobe.csxs.events.ThemeColorChanged",()=>e(t()),{})},x=[];function ie(e,t=m){let n;const o=new Set;function i(d){if(ee(e,d)&&(e=d,n)){const u=!x.length;for(const s of o)s[1](),x.push(s,e);if(u){for(let s=0;s<x.length;s+=2)x[s][0](x[s+1]);x.length=0}}}function c(d){i(d(e))}function a(d,u=m){const s=[d,u];return o.add(s),o.size===1&&(n=t(i)||m),d(e),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:i,update:c,subscribe:a}}const G=ie({name:"After Effects",id:"aeft",version:"23.5"}),re={init:!1,index:0,bones:[`# Sample 1
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
        `]},$=ie(re),Re=Ie.platform(),se=Re==="darwin"?`${{}.HOME||window.cep_node.process.env.HOME}/Library/Preferences`:{}.APPDATA||window.cep_node.process.env.APPDATA,N=window.cep?oe.join(se,H):"",B=window.cep?oe.join(N,"prefs.json"):"",ce=()=>{window.cep&&(console.log("main dir is: ",se),console.log("prefs is: ",N),h.mkdirSync(N,{recursive:!0}))},$e=e=>{window.cep&&(h.existsSync(N)||h.mkdirSync(N,{recursive:!0}),h.writeFileSync(B,JSON.stringify(e),{encoding:"utf-8"}))},Le=()=>{if(window.cep&&h.existsSync(B)){const e=h.readFileSync(B,{encoding:"utf-8"});try{const t=JSON.parse(e);return{...re,...t}}catch{return!1}}return!1};function We(e){let t,n,o,i,c,a,d,u,s,f,l,w,b,p,q,J;return{c(){t=g("div"),n=g("p"),n.textContent="Window too small.",o=A(),i=g("div"),c=g("div"),c.innerHTML=`<img class="logo svelte-1i1es47" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2du2sVQRSHP1ZRb1BMbBRfpY29UUuxCoJaiJ2VIIJ2YqMWSkBBRTHKTSs2IoKVguB/4KMKWNj6AvNQY4zGx8rgDF4ku7m7d7M7mfl9cKp7d2b2Y5jdObucBSGEEEII8Y8twDDwHPgCTAPPgAvA5o7/iZKsAa4Bc0CaEd+Bq8Dqsp3EzjbgZY7g/+MVsL3pQS81hoCPBSS7+AwcaHrwS4VjwK8Skl2YY482fRK+c6RHyS5+S3Y2h4GfFUh2Ydo6lNNflOwCvlUo2cUssLPpk/OFjcCbRZDs4p3utWEV8GIRJbt4CqwkYm7VINnFdSJln707qEu06Ws/kbEBmKhRsosPwHoi4n4Dkl3cJaIlI204DhI4a4HXHoh+CwwQMDc8kOzCjCVYJj0Q7GKcgJnwQHDnHUiwXPFAsAszlmBZYU9wvOEl47Idi5iHLHGiYlKJrodUoiU6KFLNaIn2jj6b7C/zzkZVMQXcBFoEzKgHGxUXZixBkgBfPRDsYsaOKTgSiY5z6WgTMC1gxF6QmhI8aXPRQV8MeyFLnKiYVKLrIZVoiQ6KVDNaor2mr8a8RxT5DZ82L8HmN3zbjs+Emt/IIpHosJeONhHSqjHvofxGAbIkiopJJboeUomW6KBINaMlOrocyFTMOY0mNjLR5TSa2prPxJbTKEoi0Utr6WjXON4ocyCTemejd3QfXROpNiwSHQwDOTO6v+nBhcTuHNGmwpioiJEc0dHWSqqarbbmaJboTyq31jvLgcdd3D8/ApZV0F+02/E7BTYrt5XfKI6p5PWwxM7wCbCpRH/RsQ44u0ABlR82sn43x56xbQn+JvjNhW4QOAk8sPX7F5q1pr708S7+N23bPAHssH2ZPqOgr8c3SM93tDVcso0onsKMlpRjinefmqe90z0U9g72KUxSMqlvatTtyWl3L/C+RLvBPoVJCoqes58G6SaX0W93iHmfEYlGdLdLhymsfdF+5KYo5phLXc7wdixPT2atkDHgnr2tG6xoliW25Pw52/aY7cv0qacwQgghhBBCCEEHfwAEI1+0Z6xilQAAAABJRU5ErkJggg=="/> 
            <h1 class="svelte-1i1es47">Dry Bones</h1>`,a=A(),d=g("textarea"),u=A(),s=g("div"),f=g("button"),f.textContent="Load",l=A(),w=g("button"),w.textContent="Run",b=A(),p=g("div"),p.innerHTML='<a href="https://icons8.com/icon/DIMe9ZTnqdy3/fish-bone" class="svelte-1i1es47">Fish Bone</a> icon by <a href="https://icons8.com" class="svelte-1i1es47">Icons8</a>',y(n,"class","alert svelte-1i1es47"),y(c,"class","header svelte-1i1es47"),y(d,"class","text-editor svelte-1i1es47"),y(f,"class","button-outline svelte-1i1es47"),y(w,"class","button-solid svelte-1i1es47"),y(s,"class","button-container svelte-1i1es47"),y(p,"class","credit"),y(i,"class","container svelte-1i1es47"),y(t,"class","app svelte-1i1es47"),Y(t,"--background-color",e[1])},m(v,M){fe(v,t,M),_(t,n),_(t,o),_(t,i),_(i,c),_(i,a),_(i,d),U(d,e[0]),_(i,u),_(i,s),_(s,f),_(s,l),_(s,w),_(i,b),_(i,p),q||(J=[T(d,"input",e[3]),T(f,"click",ce),T(w,"click",e[2])],q=!0)},p(v,[M]){M&1&&U(d,v[0]),M&2&&Y(t,"--background-color",v[1])},i:m,o:m,d(v){v&&te(t),q=!1,I(J)}}}function Be(e,t,n){let o,i;F(e,$,f=>n(4,o=f)),F(e,G,f=>n(5,i=f));let c="",a="#282c34";const d=()=>{c.length===0?u("Empty Text Editor"):X("parseText",c)},u=f=>{X("alertUser",f)};_e(()=>{if(window.cep){Te(p=>n(1,a=p)),ce();const f=Le();let{appVersion:l,appId:w}=P.getHostEnvironment();w=w.toLowerCase(),j(G,i={name:"ppro",id:w,version:l},i),f&&j($,o=f,o),$.subscribe(p=>{console.log("state changed",p),n(0,c=p.bones[0]),$e(p)})}});function s(){c=this.value,n(0,c)}return[c,a,d,s]}class He extends Ee{constructor(t){super(),Oe(this,t,Be,We,ee,{})}}Me();new He({target:document.getElementById("root")});
//# sourceMappingURL=main-4ee5b407.js.map