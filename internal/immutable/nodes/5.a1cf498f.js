import{_ as C}from"../chunks/6.4b32e64d.js";import{_ as E}from"../chunks/7.6bfc4282.js";import{_ as H}from"../chunks/8.4b107811.js";import{_ as I}from"../chunks/9.c13ff0bd.js";import{_ as L}from"../chunks/10.2332c0e9.js";import{_ as N}from"../chunks/11.8a82c776.js";import{_ as q}from"../chunks/12.f9b6a8a5.js";import{_ as z}from"../chunks/13.f7989145.js";import{_ as B}from"../chunks/14.2e06ebb6.js";import{S as Q,i as R,s as U,e as P,t as V,a as T,H as h,c as j,b as x,d as A,f,g as O,h as D,j as u,k as F,B as G,I as S,C as d,D as g,O as v,P as b,Q as J,R as y,M,T as w,U as K}from"../chunks/index.16ae46de.js";const W=3,X=async({params:m})=>{const a=Object.assign({"./posts/10-bathroom-materials/+page.md":C,"./posts/a-bit-about-oro-valley/+page.md":E,"./posts/buying-new-construction/+page.md":H,"./posts/desert-patio-life/+page.md":I,"./posts/getting-to-know-a-new-community/+page.md":L,"./posts/hiring-a-contractor/+page.md":N,"./posts/how-to-proceed-with-your-next-real-estate-decision/+page.md":q,"./posts/news-from-beth/+page.md":z,"./posts/to-buy-or-not-to-buy/+page.md":B}),i=[];for(const t in a){const n=a[t];n&&i.push({...n.metadata,page:n.default,sortTime:new Date(n.metadata.date).getTime()})}return{posts:i.filter(t=>!t.hidden).filter(t=>Date.now()>t.sortTime).sort((t,n)=>n.sortTime-t.sortTime).slice(0,W)}},ct=Object.freeze(Object.defineProperty({__proto__:null,load:X},Symbol.toStringTag,{value:"Module"}));function $(m,a,i){const r=m.slice();return r[1]=a[i],r}function k(m,a){let i,r,t,n,_;var l=a[1].page;function p(o){return{}}return l&&(t=v(l,p())),{key:m,first:null,c(){i=P("div"),r=T(),t&&b(t.$$.fragment),n=h(),this.h()},l(o){i=j(o,"DIV",{class:!0}),x(i).forEach(f),r=O(o),t&&J(t.$$.fragment,o),n=h(),this.h()},h(){D(i,"class","spacer svelte-j8vt7c"),this.first=i},m(o,e){u(o,i,e),u(o,r,e),t&&y(t,o,e),u(o,n,e),_=!0},p(o,e){if(a=o,e&1&&l!==(l=a[1].page)){if(t){M();const s=t;g(s.$$.fragment,1,0,()=>{w(s,1)}),S()}l?(t=v(l,p()),b(t.$$.fragment),d(t.$$.fragment,1),y(t,n.parentNode,n)):t=null}},i(o){_||(t&&d(t.$$.fragment,o),_=!0)},o(o){t&&g(t.$$.fragment,o),_=!1},d(o){o&&f(i),o&&f(r),o&&f(n),t&&w(t,o)}}}function Y(m){let a,i,r,t=[],n=new Map,_,l,p=m[0].posts;const o=e=>e[1].date;for(let e=0;e<p.length;e+=1){let s=$(m,p,e),c=o(s);n.set(c,t[e]=k(c,s))}return{c(){a=P("h1"),i=V("Latest Posts"),r=T();for(let e=0;e<t.length;e+=1)t[e].c();_=h(),this.h()},l(e){a=j(e,"H1",{class:!0});var s=x(a);i=A(s,"Latest Posts"),s.forEach(f),r=O(e);for(let c=0;c<t.length;c+=1)t[c].l(e);_=h(),this.h()},h(){D(a,"class","svelte-j8vt7c")},m(e,s){u(e,a,s),F(a,i),u(e,r,s);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,s);u(e,_,s),l=!0},p(e,[s]){s&1&&(p=e[0].posts,M(),t=G(t,s,o,1,e,p,n,_.parentNode,K,k,_,$),S())},i(e){if(!l){for(let s=0;s<p.length;s+=1)d(t[s]);l=!0}},o(e){for(let s=0;s<t.length;s+=1)g(t[s]);l=!1},d(e){e&&f(a),e&&f(r);for(let s=0;s<t.length;s+=1)t[s].d(e);e&&f(_)}}}function Z(m,a,i){let{data:r}=a;return m.$$set=t=>{"data"in t&&i(0,r=t.data)},[r]}class mt extends Q{constructor(a){super(),R(this,a,Z,Y,U,{data:0})}}export{mt as component,ct as universal};
