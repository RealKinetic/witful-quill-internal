let t,e,n,l=0,o=!1,s=!1,r=!1,c=!1;const i=window,a=document,u={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},f=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),m=new WeakMap,p=t=>m.get(t),$=(t,e)=>m.set(e.o=t,e),d=t=>console.error(t),h=new Map,w=new Map,y=[],b=[],_=[],g=(t,e)=>n=>{t.push(n),o||(o=!0,e&&4&u.t?S(v):u.raf(v))},j=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){d(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},v=()=>{l++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){d(e)}t.length=0})(y);const t=2==(6&u.t)?performance.now()+10*Math.ceil(l*(1/22)):1/0;j(b,t),j(_,t),b.length>0&&(_.push(...b),b.length=0),(o=y.length+b.length+_.length>0)?u.raf(v):l=0},S=t=>Promise.resolve().then(t),M=g(b,!0),k={},R=t=>"object"==(t=typeof t)||"function"===t,U=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_quill_components("./p-d8631f0b.js").then(()=>{u.s=i.__stencil_cssshim}),O=async()=>{u.s=i.__stencil_cssshim;const t=new RegExp("/quill-components(\\.esm)?\\.js($|\\?|#)"),e=Array.from(a.querySelectorAll("script")).find(e=>t.test(e.src)||"quill-components"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,i.location.href));return q(t.href),window.customElements||await __sc_import_quill_components("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},q=t=>{const e=(()=>`__sc_import_${"quill-components".replace(/\s|-/g,"_")}`)();try{i[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;i[e]=n=>{const o=new URL(n,t).href;let s=l.get(o);if(!s){const t=a.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${e}.m = m;`],{type:"application/javascript"})),s=new Promise(n=>{t.onload=()=>{n(i[e].m),t.remove()}}),l.set(o,s),a.head.appendChild(t)}return s}}},L=new WeakMap,P=t=>"sc-"+t,C=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!R(l))&&(l=String(l)),s&&r?c[c.length-1].i+=l:c.push(s?x(null,l):l),r=s)};if(i(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=x(t,null);return a.u=e,c.length>0&&(a.p=c),a.$=o,a},x=(t,e)=>({t:0,h:t,i:e,_:null,p:null,u:null,$:null}),E={},T=(t,e,n,l,o,s)=>{if(n===l)return;let r=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,o=D(n),s=D(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if("ref"===e)l&&l(t);else{const i=R(l);if((r||i&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(c){}null==l||!1===l?t.removeAttribute(e):(!r||4&s||o)&&!i&&t.setAttribute(e,l=!0===l?"":l)}},A=/\s/,D=t=>t?t.split(A):[],F=(t,e,n,l)=>{const o=11===e._.nodeType&&e._.host?e._.host:e._,s=t&&t.u||k,r=e.u||k;for(l in s)l in r||T(o,l,s[l],void 0,n,e.t);for(l in r)T(o,l,s[l],r[l],n,e.t)},N=(l,o,r,i)=>{let u,f,m,p=o.p[r],$=0;if(s||(c=!0,"slot"===p.h&&(t&&i.classList.add(t+"-s"),p.t|=p.p?2:1)),1&p.t)u=p._=a.createTextNode("");else if(u=p._=a.createElement(2&p.t?"slot-fb":p.h),F(null,p,!1),(t=>null!=t)(t)&&u["s-si"]!==t&&u.classList.add(u["s-si"]=t),p.p)for($=0;$<p.p.length;++$)(f=N(l,p,$,u))&&u.appendChild(f);return u["s-hn"]=n,3&p.t&&(u["s-sr"]=!0,u["s-cr"]=e,u["s-sn"]=p.$||"",(m=l&&l.p&&l.p[r])&&m.h===p.h&&l._&&W(l._,!1)),u},W=(t,e)=>{u.t|=1;const l=t.childNodes;for(let o=l.length-1;o>=0;o--){const t=l[o];t["s-hn"]!==n&&t["s-ol"]&&(G(t).insertBefore(t,z(t)),t["s-ol"].remove(),t["s-ol"]=void 0,c=!0),e&&W(t,e)}u.t&=-2},B=(t,e,n,l,o,s)=>{let r,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(;o<=s;++o)l[o]&&(r=N(null,n,o,t))&&(l[o]._=r,c.insertBefore(r,z(e)))},H=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(o=l._,X(l),r=!0,o["s-ol"]?o["s-ol"].remove():W(o,!0),o.remove())},V=(t,e)=>t.h===e.h&&("slot"!==t.h||t.$===e.$),z=t=>t&&t["s-ol"]||t,G=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,I=(t,e)=>{const n=e._=t._,l=t.p,o=e.p;"slot"===e.h||F(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],m=l[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==a?a=e[--c]:null==f?f=l[++r]:null==m?m=l[--u]:V(i,f)?(I(i,f),i=e[++s],f=l[++r]):V(a,m)?(I(a,m),a=e[--c],m=l[--u]):V(i,m)?("slot"!==i.h&&"slot"!==m.h||W(i._.parentNode,!1),I(i,m),t.insertBefore(i._,a._.nextSibling),i=e[++s],m=l[--u]):V(a,f)?("slot"!==i.h&&"slot"!==m.h||W(a._.parentNode,!1),I(a,f),t.insertBefore(a._,i._),a=e[--c],f=l[++r]):(o=N(e&&e[r],n,r,t),f=l[++r],o&&G(i._).insertBefore(o,z(i._)));s>c?B(t,null==l[u+1]?null:l[u+1]._,n,l,r,u):r>u&&H(e,s,c)})(n,l,e,o):null!==o?B(n,null,e,o,0,o.length-1):null!==l&&H(l,0,l.length-1)},J=t=>{let e,n,l,o,s,r,c=t.childNodes;for(n=0,l=c.length;n<l;n++)if(1===(e=c[n]).nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==e["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){e.hidden=!0;break}J(e)}},K=[],Q=t=>{let e,n,l,o,s=t.childNodes,c=s.length,i=0,a=0,u=0;for(c=s.length;i<c;i++){if((e=s[i])["s-sr"]&&(n=e["s-cr"]))for(o=e["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(u=n.nodeType)||8===u)&&""===o||1===u&&null===n.getAttribute("slot")&&""===o||1===u&&n.getAttribute("slot")===o)&&(K.some(t=>t.g===n)||(r=!0,n["s-sn"]=o,K.push({j:e,g:n})));1===e.nodeType&&Q(e)}},X=t=>{t.u&&t.u.ref&&t.u.ref(null),t.p&&t.p.forEach(X)},Y=(t,e)=>{e&&!t.v&&e["s-p"].push(new Promise(e=>t.v=e))},Z=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>tt(t,e,n,o,l);return Y(e,e.S),ot(void 0,()=>M(s))},tt=(l,o,i,f,m)=>{const p=l["s-rc"];m&&((t,e)=>{const n=((t,e)=>{let n=P(e.M),l=w.get(n);if(t=11===t.nodeType?t:a,l)if("string"==typeof l){let e,o=L.get(t=t.head||t);o||L.set(t,o=new Set),o.has(n)||((e=a.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"),2&e.t&&t.classList.add(n+"-s"))})(l,i);try{((l,o,i,f)=>{n=l.tagName;const m=o.k||x(null,null),p=(t=>t&&t.h===E)(f)?f:C(null,null,f);if(p.h=null,p.t|=4,o.k=p,p._=m._=l,t=l["s-sc"],e=l["s-cr"],s=!1,c=r=!1,I(m,p),c){Q(p._);for(let t=0;t<K.length;t++){const e=K[t];if(!e.g["s-ol"]){const t=a.createTextNode("");t["s-nr"]=e.g,e.g.parentNode.insertBefore(e.g["s-ol"]=t,e.g)}}u.t|=1;for(let t=0;t<K.length;t++){const e=K[t],n=e.j.parentNode;let l=e.j.nextSibling,o=e.g["s-ol"];for(;o=o.previousSibling;){let t=o["s-nr"];if(t&&t["s-sn"]===e.g["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){l=t;break}}(!l&&n!==e.g.parentNode||e.g.nextSibling!==l)&&e.g!==l&&n.insertBefore(e.g,l)}u.t&=-2}r&&J(p._),K.length=0})(l,o,0,f.render())}catch($){d($)}o.t&=-17,o.t|=2,p&&(p.forEach(t=>t()),l["s-rc"]=void 0);{const t=l["s-p"],e=()=>et(l,o,i);0===t.length?e():(Promise.all(t).then(e),o.t|=4,t.length=0)}},et=(t,e,n)=>{const l=e.o,o=e.S;64&e.t||(e.t|=64,t.classList.add("hydrated"),lt(l,"componentDidLoad"),e.R(t),o||nt()),e.v&&(e.v(),e.v=void 0),512&e.t&&S(()=>Z(t,e,n,!1)),e.t&=-517},nt=()=>{a.documentElement.classList.add("hydrated"),u.t|=2},lt=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){d(l)}},ot=(t,e)=>t&&t.then?t.then(e):e(),st=(t,e,n)=>{if(e.U){t.watchers&&(e.O=t.watchers);const l=Object.entries(e.U),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>p(t).q.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=p(this),s=o.L,r=o.q.get(e),c=o.t,i=o.o;if(!((n=((t,e)=>null==t||R(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?String(t):t)(n,l.U[e][0]))===r||8&c&&void 0!==r)&&(o.q.set(e,n),i)){if(l.O&&128&c){const t=l.O[e];t&&t.forEach(t=>{try{i[t](n,r,e)}catch(l){d(l)}})}2==(18&c)&&Z(s,o,l,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){u.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},rt=(t,e={})=>{const n=[],l=e.exclude||[],o=a.head,s=i.customElements,r=o.querySelector("meta[charset]"),c=a.createElement("style"),$=[];let y,b=!0;Object.assign(u,e),u.l=new URL(e.resourcesUrl||"./",a.baseURI).href,e.syncQueue&&(u.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],M:e[1],U:e[2],P:e[3]};o.U=e[2],o.O={};const r=o.M,c=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,L:t,q:new Map};e.C=new Promise(t=>e.R=t),t["s-p"]=[],t["s-rc"]=[],m.set(t,e)})(t=this)}connectedCallback(){y&&(clearTimeout(y),y=null),b?$.push(this):u.jmp(()=>((t,e)=>{if(0==(1&u.t)){const n=()=>{},l=p(t);if(!(1&l.t)){let n;l.t|=1,n||4&e.t&&(t=>{const e=t["s-cr"]=a.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){Y(l,l.S=e);break}}e.U&&Object.entries(e.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),S(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.M.replace(/-/g,"_"),n=t.T,l=h.get(n);return l?l[e]:__sc_import_quill_components(`./${n}.entry.js`).then(t=>(h.set(n,t),t[e]),d)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.O=o.watchers,st(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(c){d(c)}e.t&=-9,e.t|=128,t()}const t=P(n.M);if(!w.has(t)&&o.style){const e=()=>{};((t,e,n)=>{let l=w.get(t);f&&n?(l=l||new CSSStyleSheet).replace(e):l=e,w.set(t,l)})(t,o.style,!!(1&n.t)),e()}}const s=e.S,r=()=>Z(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){u.jmp(()=>(()=>{0==(1&u.t)&&lt(p(this).o,"componentDidUnload")})())}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=p(t);2==(18&n.t)&&Z(t,n,e,!1)}})(this,o)}componentOnReady(){return p(this).C}};o.T=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,st(c,o,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,r?r.nextSibling:o.firstChild),b=!1,$.length>0?$.forEach(t=>t.connectedCallback()):u.jmp(()=>y=setTimeout(nt,30,"timeout"))},ct=(t,e,n)=>{const l=it(t);return{emit:t=>l.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},it=t=>p(t).L;export{U as a,rt as b,ct as c,it as g,C as h,O as p,$ as r};