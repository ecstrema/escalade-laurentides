function N(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(D)}function K(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function dt(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function Q(t){return Object.keys(t).length===0}function U(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t,n,e){t.$$.on_destroy.push(U(n,e))}function mt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function pt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,u){if(r){const l=O(n,e,i,u);t.p(l,r)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function xt(t,n,e){return t.set(e),n}let E=!1;function V(){E=!0}function X(){E=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=s?r+1:Y(1,r,y=>n[e[y]].claim_order,s))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const u=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);u.reverse(),l.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<l.length;c++){for(;s<u.length&&l[c].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(l[c],f)}}function tt(t,n){if(E){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){E&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function P(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function wt(){return S(" ")}function $t(){return S("")}function Et(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Tt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function rt(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function F(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||u.push(o.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(n))}function At(t,n,e){return F(t,n,e,P)}function Nt(t,n,e){return F(t,n,e,it)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function St(t){return ct(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function kt(t){const n=H(t,"HTML_TAG_START",0),e=H(t,"HTML_TAG_END",n);if(n===e)return new L;G(t);const i=t.splice(n,e-n+1);$(i[0]),$(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(r)}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Mt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ct(t,n=document.body){return Array.from(n.querySelectorAll(t))}class lt{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=P(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach($)}}class L extends lt{constructor(n){super(),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}let m;function h(t){m=t}function k(){if(!m)throw new Error("Function called outside component initialization");return m}function Ht(t){k().$$.on_mount.push(t)}function Lt(t){k().$$.after_update.push(t)}function qt(t,n){k().$$.context.set(t,n)}const d=[],q=[],b=[],B=[],I=Promise.resolve();let v=!1;function R(){v||(v=!0,I.then(W))}function Bt(){return R(),I}function A(t){b.push(t)}const T=new Set;let x=0;function W(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),ot(n.$$)}for(h(null),d.length=0,x=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];T.has(e)||(T.add(e),e())}b.length=0}while(d.length);for(;B.length;)B.pop()();v=!1,T.clear(),h(t)}function ot(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Ot(){_.r||p(_.c),_=_.p}function st(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Pt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}const Gt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function zt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=n[u];if(o){for(const c in l)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[u]=o}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function It(t){t&&t.c()}function Rt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:l,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const c=u.map(D).filter(K);l?l.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(A)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(d.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Wt(t,n,e,i,r,u,l,o=[-1]){const c=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,y,...j)=>{const M=j.length?j[0]:y;return s.ctx&&r(s.ctx[a],s.ctx[a]=M)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](M),f&&ft(t,a)),y}):[],s.update(),f=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){V();const a=rt(n.target);s.fragment&&s.fragment.l(a),a.forEach($)}else s.fragment&&s.fragment.c();n.intro&&st(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),X(),W()}h(c)}class Jt{$destroy(){at(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ft as A,at as B,J as C,Bt as D,N as E,U as F,p as G,K as H,it as I,Nt as J,tt as K,Et as L,Tt as M,bt as N,ht as O,xt as P,Ct as Q,Gt as R,Jt as S,mt as T,yt as U,gt as V,pt as W,L as X,kt as Y,dt as Z,q as _,rt as a,vt as b,At as c,$ as d,P as e,Mt as f,et as g,ct as h,Wt as i,jt as j,wt as k,$t as l,St as m,Dt as n,Pt as o,Ot as p,st as q,qt as r,_t as s,S as t,Lt as u,Ht as v,It as w,Rt as x,ut as y,zt as z};
