import{_ as C}from"../chunks/18.5e31fd5f.js";import{S as E,i as H,s as I,e as P,t as L,a as T,H as h,c as j,b as x,d as N,f as u,g as D,h as O,j as m,k as V,B as q,I as S,C as d,D as g,P as v,Q as y,R as z,T as $,M,U as k,V as B}from"../chunks/index.790599f6.js";const Q=3,R=async({params:_})=>{const o=Object.assign({"./posts/9710-n-cliff-view-pl/+page.md":C}),n=[];for(const t in o){const i=o[t];i&&n.push({...i.metadata,page:i.default,sortTime:new Date(i.metadata.date).getTime()})}return{posts:n.filter(t=>!t.hidden).filter(t=>Date.now()>t.sortTime).sort((t,i)=>i.sortTime-t.sortTime).slice(0,Q)}},J=Object.freeze(Object.defineProperty({__proto__:null,load:R},Symbol.toStringTag,{value:"Module"}));function b(_,o,n){const l=_.slice();return l[1]=o[n],l}function w(_,o){let n,l,t,i,r;var c=o[1].page;function p(a){return{}}return c&&(t=v(c,p())),{key:_,first:null,c(){n=P("div"),l=T(),t&&y(t.$$.fragment),i=h(),this.h()},l(a){n=j(a,"DIV",{class:!0}),x(n).forEach(u),l=D(a),t&&z(t.$$.fragment,a),i=h(),this.h()},h(){O(n,"class","spacer svelte-j8vt7c"),this.first=n},m(a,e){m(a,n,e),m(a,l,e),t&&$(t,a,e),m(a,i,e),r=!0},p(a,e){if(o=a,e&1&&c!==(c=o[1].page)){if(t){M();const s=t;g(s.$$.fragment,1,0,()=>{k(s,1)}),S()}c?(t=v(c,p()),y(t.$$.fragment),d(t.$$.fragment,1),$(t,i.parentNode,i)):t=null}},i(a){r||(t&&d(t.$$.fragment,a),r=!0)},o(a){t&&g(t.$$.fragment,a),r=!1},d(a){a&&u(n),a&&u(l),a&&u(i),t&&k(t,a)}}}function U(_){let o,n,l,t=[],i=new Map,r,c,p=_[0].posts;const a=e=>e[1].date;for(let e=0;e<p.length;e+=1){let s=b(_,p,e),f=a(s);i.set(f,t[e]=w(f,s))}return{c(){o=P("h1"),n=L("Latest Properties"),l=T();for(let e=0;e<t.length;e+=1)t[e].c();r=h(),this.h()},l(e){o=j(e,"H1",{class:!0});var s=x(o);n=N(s,"Latest Properties"),s.forEach(u),l=D(e);for(let f=0;f<t.length;f+=1)t[f].l(e);r=h(),this.h()},h(){O(o,"class","svelte-j8vt7c")},m(e,s){m(e,o,s),V(o,n),m(e,l,s);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,s);m(e,r,s),c=!0},p(e,[s]){s&1&&(p=e[0].posts,M(),t=q(t,s,a,1,e,p,i,r.parentNode,B,w,r,b),S())},i(e){if(!c){for(let s=0;s<p.length;s+=1)d(t[s]);c=!0}},o(e){for(let s=0;s<t.length;s+=1)g(t[s]);c=!1},d(e){e&&u(o),e&&u(l);for(let s=0;s<t.length;s+=1)t[s].d(e);e&&u(r)}}}function A(_,o,n){let{data:l}=o;return _.$$set=t=>{"data"in t&&n(0,l=t.data)},[l]}class K extends E{constructor(o){super(),H(this,o,A,U,I,{data:0})}}export{K as component,J as universal};
