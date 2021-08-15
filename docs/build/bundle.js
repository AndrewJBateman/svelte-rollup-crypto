var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,a;function i(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function _(t){a=t}function x(t){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(t)}const w=[],v=[],k=[],C=[],E=Promise.resolve();let L=!1;function S(t){k.push(t)}let A=!1;const P=new Set;function j(){if(!A){A=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];_(e),N(e.$$)}for(_(null),w.length=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];P.has(e)||(P.add(e),e())}k.length=0}while(w.length);for(;C.length;)C.pop()();L=!1,A=!1,P.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const M=new Set;function O(t,e){-1===t.$$.dirty[0]&&(w.push(t),L||(L=!0,E.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(c,l,i,s,u,h,d,p=[-1]){const g=a;_(c);const m=c.$$={fragment:null,ctx:null,props:h,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:l.context||[]),callbacks:n(),dirty:p,skip_bound:!1,root:l.target||g.$$.root};d&&d(m.root);let b=!1;if(m.ctx=i?i(c,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),b&&O(c,t)),e})):[],m.update(),b=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();l.intro&&((y=c.$$.fragment)&&y.i&&(M.delete(y),y.i($))),function(t,n,c,l){const{fragment:a,on_mount:i,on_destroy:s,after_update:u}=t.$$;a&&a.m(n,c),l||S((()=>{const n=i.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(S)}(c,l.target,l.anchor,l.customElement),j()}var y,$;_(g)}function H(t,e,n){const o=t.slice();return o[10]=e[n],o[12]=n,o}function q(t,e,n){const o=t.slice();return o[13]=e[n],o}function z(e){let n,o,r,c=e[13]+"";return{c(){n=d("th"),o=p(c),b(n,"class",r="Coin"==e[13]?"px-3":"")},m(t,e){u(t,n,e),s(n,o)},p:t,d(t){t&&f(n)}}}function B(t){let e,n,o,r,c,l,a,h,m,$,_,x,w,v,k,C,E,L,S,A,P,j,N,M,O=t[10].name+"",T=t[10].symbol+"",H=t[10].current_price.toLocaleString()+"",q=t[10].price_change_percentage_24h+"",z=t[10].market_cap.toLocaleString()+"";return{c(){var s,u,f;e=d("tr"),n=d("td"),o=d("img"),l=g(),a=d("span"),h=p(O),m=g(),$=d("span"),_=p("("),x=p(T),w=p(")"),v=g(),k=d("td"),C=p(H),E=g(),L=d("td"),S=p(q),P=g(),j=d("td"),N=p(z),M=g(),i(o.src,r=t[10].image)||b(o,"src",r),b(o,"alt",c=t[10].name),s="width",u="1.5rem",o.style.setProperty(s,u,f?"important":""),b(o,"class","img-fluid mx-2"),b(a,"class","ms-3"),b($,"class","text-uppercase"),b(L,"class",A=t[10].price_change_24h>0?"bg-success text-white font-weight-bold":"bg-danger text-white font-weight-bold")},m(t,r){u(t,e,r),s(e,n),s(n,o),s(n,l),s(n,a),s(a,h),s(n,m),s(n,$),s($,_),s($,x),s($,w),s(e,v),s(e,k),s(k,C),s(e,E),s(e,L),s(L,S),s(e,P),s(e,j),s(j,N),s(e,M)},p(t,e){2&e&&!i(o.src,r=t[10].image)&&b(o,"src",r),2&e&&c!==(c=t[10].name)&&b(o,"alt",c),2&e&&O!==(O=t[10].name+"")&&y(h,O),2&e&&T!==(T=t[10].symbol+"")&&y(x,T),2&e&&H!==(H=t[10].current_price.toLocaleString()+"")&&y(C,H),2&e&&q!==(q=t[10].price_change_percentage_24h+"")&&y(S,q),2&e&&A!==(A=t[10].price_change_24h>0?"bg-success text-white font-weight-bold":"bg-danger text-white font-weight-bold")&&b(L,"class",A),2&e&&z!==(z=t[10].market_cap.toLocaleString()+"")&&y(N,z)},d(t){t&&f(e)}}}function F(e){let n,r,c,l,a,i,y,_,x,w,v,k,C,E,L,S,A=e[3],P=[];for(let t=0;t<A.length;t+=1)P[t]=z(q(e,A,t));let j=e[1],N=[];for(let t=0;t<j.length;t+=1)N[t]=B(H(e,j,t));return{c(){n=d("main"),r=d("head"),r.innerHTML='<meta name="description" content="Home page shows cryptocurrency details from an API"/>',c=g(),l=d("body"),a=d("h1"),a.textContent="CryptoCurrency Prices",i=g(),y=d("input"),_=g(),x=d("table"),w=d("thead"),v=d("tr");for(let t=0;t<P.length;t+=1)P[t].c();k=g(),C=d("tbody");for(let t=0;t<N.length;t+=1)N[t].c();E=p("\n\nº"),b(a,"class","text-center"),b(y,"type","text"),b(y,"placeholder","search cryptos by name or symbol"),b(y,"class","form-control bg-light rounded-0 my-4"),b(x,"class","table table-light table-hover my-4"),b(n,"class","container p-4")},m(t,o){u(t,n,o),s(n,r),s(n,c),s(n,l),s(l,a),s(l,i),s(l,y),$(y,e[0]),e[7](y),s(l,_),s(l,x),s(x,w),s(w,v);for(let t=0;t<P.length;t+=1)P[t].m(v,null);s(x,k),s(x,C);for(let t=0;t<N.length;t+=1)N[t].m(C,null);u(t,E,o),L||(S=[m(y,"input",e[5]),m(y,"keyup",e[6])],L=!0)},p(t,[e]){if(1&e&&y.value!==t[0]&&$(y,t[0]),8&e){let n;for(A=t[3],n=0;n<A.length;n+=1){const o=q(t,A,n);P[n]?P[n].p(o,e):(P[n]=z(o),P[n].c(),P[n].m(v,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=A.length}if(2&e){let n;for(j=t[1],n=0;n<j.length;n+=1){const o=H(t,j,n);N[n]?N[n].p(o,e):(N[n]=B(o),N[n].c(),N[n].m(C,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=j.length}},i:t,o:t,d(t){t&&f(n),e[7](null),h(P,t),h(N,t),t&&f(E),L=!1,o(S)}}}function I(t,e,n){let o=[],r="",c=[],l=null;(async()=>{const t=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"),e=await t.json();o=e,n(1,c=e)})();const a=t=>{t=t.toLowerCase(),n(1,c=o.filter((e=>e.name.toLowerCase().includes(t)||e.symbol.toLowerCase().includes(t))))};x((()=>{l.focus()}));return[r,c,l,["Crypto. Name","Price (€)","Chg/24hrs (%)","Market Cap. (€)"],a,function(){r=this.value,n(0,r)},({target:{value:t}})=>a(t),function(t){v[t?"unshift":"push"]((()=>{l=t,n(2,l)}))}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,I,F,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
