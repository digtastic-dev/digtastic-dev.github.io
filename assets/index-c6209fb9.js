(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function p(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function jt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function xt(t){return t()}function ut(){return Object.create(null)}function C(t){t.forEach(xt)}function ct(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ht(t){return Object.keys(t).length===0}function vt(t,...e){if(t==null)return p;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function z(t,e,n){t.$$.on_destroy.push(vt(e,n))}function St(t,e,n,r){if(t){const o=Ot(t,e,n,r);return t[0](o)}}function Ot(t,e,n,r){return t[1]&&r?G(n.ctx.slice(),t[1](r(e))):n.ctx}function Rt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],c=Math.max(e.dirty.length,o.length);for(let l=0;l<c;l+=1)s[l]=e.dirty[l]|o[l];return s}return e.dirty|o}return e.dirty}function Et(t,e,n,r,o,s){if(o){const c=Ot(e,n,r,s);t.p(c,o)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function lt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function P(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function Pt(t){return document.createElement(t)}function $t(t){return document.createTextNode(t)}function zt(){return $t(" ")}function K(){return $t("")}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ut(t){return Array.from(t.childNodes)}function at(t,e){return new t(e)}let B;function v(t){B=t}function q(){if(!B)throw new Error("Function called outside component initialization");return B}function Bt(t){q().$$.on_mount.push(t)}function Dt(t){q().$$.on_destroy.push(t)}function V(t,e){return q().$$.context.set(t,e),e}function et(t){return q().$$.context.get(t)}const T=[],ft=[];let I=[];const dt=[],qt=Promise.resolve();let nt=!1;function Wt(){nt||(nt=!0,qt.then(it))}function rt(t){I.push(t)}const X=new Set;let $=0;function it(){if($!==0)return;const t=B;do{try{for(;$<T.length;){const e=T[$];$++,v(e),Yt(e.$$)}}catch(e){throw T.length=0,$=0,e}for(v(null),T.length=0,$=0;ft.length;)ft.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];X.has(n)||(X.add(n),n())}I.length=0}while(T.length);for(;dt.length;)dt.pop()();nt=!1,X.clear(),v(t)}function Yt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}function Ft(t){const e=[],n=[];I.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),I=e}const F=new Set;let N;function J(){N={r:0,c:[],p:N}}function Q(){N.r||C(N.c),N=N.p}function b(t,e){t&&t.i&&(F.delete(t),t.i(e))}function y(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),N.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function ht(t,e){const n=e.token={};function r(o,s,c,l){if(e.token!==n)return;e.resolved=l;let i=e.ctx;c!==void 0&&(i=i.slice(),i[c]=l);const u=o&&(e.current=o)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((d,_)=>{_!==s&&d&&(J(),y(d,1,1,()=>{e.blocks[_]===d&&(e.blocks[_]=null)}),Q())}):e.block.d(1),u.c(),b(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[s]=u),f&&it()}if(jt(t)){const o=q();if(t.then(s=>{v(o),r(e.then,1,e.value,s),v(null)},s=>{if(v(o),r(e.catch,2,e.error,s),v(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Gt(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function Kt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=e[s];if(l){for(const i in c)i in l||(r[i]=1);for(const i in l)o[i]||(n[i]=l[i],o[i]=1);t[s]=l}else for(const i in c)o[i]=1}for(const c in r)c in n||(n[c]=void 0);return n}function pt(t){return typeof t=="object"&&t!==null?t:{}}function D(t){t&&t.c()}function L(t,e,n,r){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),r||rt(()=>{const c=t.$$.on_mount.map(xt).filter(ct);t.$$.on_destroy?t.$$.on_destroy.push(...c):C(c),t.$$.on_mount=[]}),s.forEach(rt)}function M(t,e){const n=t.$$;n.fragment!==null&&(Ft(n.after_update),C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(T.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,o,s,c,l=[-1]){const i=B;v(t);const u=t.$$={fragment:null,ctx:[],props:s,update:p,not_equal:o,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:ut(),dirty:l,skip_bound:!1,root:e.target||i.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return u.ctx&&o(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),f&&Jt(t,d)),_}):[],u.update(),f=!0,C(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const d=Ut(e.target);u.fragment&&u.fragment.l(d),d.forEach(O)}else u.fragment&&u.fragment.c();e.intro&&b(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),it()}v(i)}class Y{$destroy(){M(this,1),this.$destroy=p}$on(e,n){if(!ct(n))return p;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mt={},ot={},Qt={},Tt=/^:(.+)/,_t=4,Vt=3,Xt=2,Zt=1,te=1,st=t=>t.replace(/(^\/+|\/+$)/g,"").split("/"),Z=t=>t.replace(/(^\/+|\/+$)/g,""),ee=(t,e)=>{const n=t.default?0:st(t.path).reduce((r,o)=>(r+=_t,o===""?r+=te:Tt.test(o)?r+=Xt:o[0]==="*"?r-=_t+Zt:r+=Vt,r),0);return{route:t,score:n,index:e}},ne=t=>t.map(ee).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index),gt=(t,e)=>{let n,r;const[o]=e.split("?"),s=st(o),c=s[0]==="",l=ne(t);for(let i=0,u=l.length;i<u;i++){const f=l[i].route;let d=!1;if(f.default){r={route:f,params:{},uri:e};continue}const _=st(f.path),m={},h=Math.max(s.length,_.length);let g=0;for(;g<h;g++){const k=_[g],S=s[g];if(k&&k[0]==="*"){const H=k==="*"?"*":k.slice(1);m[H]=s.slice(g).map(decodeURIComponent).join("/");break}if(typeof S>"u"){d=!0;break}const R=Tt.exec(k);if(R&&!c){const H=decodeURIComponent(S);m[R[1]]=H}else if(k!==S){d=!0;break}}if(!d){n={route:f,params:m,uri:"/"+s.slice(0,g).join("/")};break}}return n||r||null},bt=(t,e)=>`${Z(e==="/"?t:`${Z(t)}/${Z(e)}`)}/`,It=()=>typeof window<"u"&&"document"in window&&"location"in window,re=t=>({params:t&4}),yt=t=>({params:t[2]});function kt(t){let e,n,r,o;const s=[se,oe],c=[];function l(i,u){return i[0]?0:1}return e=l(t),n=c[e]=s[e](t),{c(){n.c(),r=K()},m(i,u){c[e].m(i,u),P(i,r,u),o=!0},p(i,u){let f=e;e=l(i),e===f?c[e].p(i,u):(J(),y(c[f],1,1,()=>{c[f]=null}),Q(),n=c[e],n?n.p(i,u):(n=c[e]=s[e](i),n.c()),b(n,1),n.m(r.parentNode,r))},i(i){o||(b(n),o=!0)},o(i){y(n),o=!1},d(i){c[e].d(i),i&&O(r)}}}function oe(t){let e;const n=t[8].default,r=St(n,t,t[7],yt);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&132)&&Et(r,n,o,o[7],e?Rt(n,o[7],s,re):Nt(o[7]),yt)},i(o){e||(b(r,o),e=!0)},o(o){y(r,o),e=!1},d(o){r&&r.d(o)}}}function se(t){let e,n,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:ue,then:ie,catch:ce,value:12,blocks:[,,,]};return ht(n=t[0],o),{c(){e=K(),o.block.c()},m(s,c){P(s,e,c),o.block.m(s,o.anchor=c),o.mount=()=>e.parentNode,o.anchor=e,r=!0},p(s,c){t=s,o.ctx=t,c&1&&n!==(n=t[0])&&ht(n,o)||Gt(o,t,c)},i(s){r||(b(o.block),r=!0)},o(s){for(let c=0;c<3;c+=1){const l=o.blocks[c];y(l)}r=!1},d(s){s&&O(e),o.block.d(s),o.token=null,o=null}}}function ce(t){return{c:p,m:p,p,i:p,o:p,d:p}}function ie(t){var l;let e,n,r;const o=[t[2],t[3]];var s=((l=t[12])==null?void 0:l.default)||t[12];function c(i){let u={};for(let f=0;f<o.length;f+=1)u=G(u,o[f]);return{props:u}}return s&&(e=at(s,c())),{c(){e&&D(e.$$.fragment),n=K()},m(i,u){e&&L(e,i,u),P(i,n,u),r=!0},p(i,u){var d;const f=u&12?Kt(o,[u&4&&pt(i[2]),u&8&&pt(i[3])]):{};if(u&1&&s!==(s=((d=i[12])==null?void 0:d.default)||i[12])){if(e){J();const _=e;y(_.$$.fragment,1,0,()=>{M(_,1)}),Q()}s?(e=at(s,c()),D(e.$$.fragment),b(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(i){r||(e&&b(e.$$.fragment,i),r=!0)},o(i){e&&y(e.$$.fragment,i),r=!1},d(i){i&&O(n),e&&M(e,i)}}}function ue(t){return{c:p,m:p,p,i:p,o:p,d:p}}function le(t){let e,n,r=t[1]&&t[1].route===t[5]&&kt(t);return{c(){r&&r.c(),e=K()},m(o,s){r&&r.m(o,s),P(o,e,s),n=!0},p(o,[s]){o[1]&&o[1].route===o[5]?r?(r.p(o,s),s&2&&b(r,1)):(r=kt(o),r.c(),b(r,1),r.m(e.parentNode,e)):r&&(J(),y(r,1,1,()=>{r=null}),Q())},i(o){n||(b(r),n=!0)},o(o){y(r),n=!1},d(o){r&&r.d(o),o&&O(e)}}}function ae(t,e,n){let r,{$$slots:o={},$$scope:s}=e,{path:c=""}=e,{component:l=null}=e,i={},u={};const{registerRoute:f,unregisterRoute:d,activeRoute:_}=et(ot);z(t,_,h=>n(1,r=h));const m={path:c,default:c===""};return f(m),Dt(()=>{d(m)}),t.$$set=h=>{n(11,e=G(G({},e),lt(h))),"path"in h&&n(6,c=h.path),"component"in h&&n(0,l=h.component),"$$scope"in h&&n(7,s=h.$$scope)},t.$$.update=()=>{if(r&&r.route===m){n(2,i=r.params);const{component:h,path:g,...k}=e;n(3,u=k),h&&(h.toString().startsWith("class ")?n(0,l=h):n(0,l=h())),It()&&(window==null||window.scrollTo(0,0))}},e=lt(e),[l,r,i,u,_,m,c,s,o]}class fe extends Y{constructor(e){super(),W(this,e,ae,le,j,{path:6,component:0})}}const A=[];function de(t,e){return{subscribe:U(t,e).subscribe}}function U(t,e=p){let n;const r=new Set;function o(l){if(j(t,l)&&(t=l,n)){const i=!A.length;for(const u of r)u[1](),A.push(u,t);if(i){for(let u=0;u<A.length;u+=2)A[u][0](A[u+1]);A.length=0}}}function s(l){o(l(t))}function c(l,i=p){const u=[l,i];return r.add(u),r.size===1&&(n=e(o)||p),l(t),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:c}}function he(t,e,n){const r=!Array.isArray(t),o=r?[t]:t,s=e.length<2;return de(n,c=>{let l=!1;const i=[];let u=0,f=p;const d=()=>{if(u)return;f();const m=e(r?i[0]:i,c);s?c(m):f=ct(m)?m:p},_=o.map((m,h)=>vt(m,g=>{i[h]=g,u&=~(1<<h),l&&d()},()=>{u|=1<<h}));return l=!0,d(),function(){C(_),f(),l=!1}})}const tt=t=>({...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}),pe=t=>{const e=[];let n=tt(t);return{get location(){return n},listen(r){e.push(r);const o=()=>{n=tt(t),r({location:n,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const s=e.indexOf(r);e.splice(s,1)}},navigate(r,{state:o,replace:s=!1}={}){o={...o,key:Date.now()+""};try{s?t.history.replaceState(o,"",r):t.history.pushState(o,"",r)}catch{t.location[s?"replace":"assign"](r)}n=tt(t),e.forEach(c=>c({location:n,action:"PUSH"})),document.activeElement.blur()}}},me=(t="/")=>{let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(o,s){},removeEventListener(o,s){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(o,s,c){const[l,i=""]=c.split("?");e++,n.push({pathname:l,search:i}),r.push(o)},replaceState(o,s,c){const[l,i=""]=c.split("?");n[e]={pathname:l,search:i},r[e]=o}}}},_e=pe(It()?window:me()),ge=t=>({route:t&2,location:t&1}),wt=t=>({route:t[1]&&t[1].uri,location:t[0]});function be(t){let e;const n=t[12].default,r=St(n,t,t[11],wt);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),e=!0},p(o,[s]){r&&r.p&&(!e||s&2051)&&Et(r,n,o,o[11],e?Rt(n,o[11],s,ge):Nt(o[11]),wt)},i(o){e||(b(r,o),e=!0)},o(o){y(r,o),e=!1},d(o){r&&r.d(o)}}}function ye(t,e,n){let r,o,s,c,{$$slots:l={},$$scope:i}=e,{basepath:u="/"}=e,{url:f=null}=e,{history:d=_e}=e;V(Qt,d);const _=et(mt),m=et(ot),h=U([]);z(t,h,a=>n(9,o=a));const g=U(null);z(t,g,a=>n(1,c=a));let k=!1;const S=_||U(f?{pathname:f}:d.location);z(t,S,a=>n(0,r=a));const R=m?m.routerBase:U({path:u,uri:u});z(t,R,a=>n(10,s=a));const H=he([R,g],([a,w])=>{if(!w)return a;const{path:x}=a,{route:E,uri:Ct}=w;return{path:E.default?x:E.path.replace(/\*.*$/,""),uri:Ct}}),Lt=a=>{const{path:w}=s;let{path:x}=a;if(a._path=x,a.path=bt(w,x),typeof window>"u"){if(k)return;const E=gt([a],r.pathname);E&&(g.set(E),k=!0)}else h.update(E=>[...E,a])},Mt=a=>{h.update(w=>w.filter(x=>x!==a))};return _||(Bt(()=>d.listen(w=>{S.set(w.location)})),V(mt,S)),V(ot,{activeRoute:g,base:R,routerBase:H,registerRoute:Lt,unregisterRoute:Mt}),t.$$set=a=>{"basepath"in a&&n(6,u=a.basepath),"url"in a&&n(7,f=a.url),"history"in a&&n(8,d=a.history),"$$scope"in a&&n(11,i=a.$$scope)},t.$$.update=()=>{if(t.$$.dirty&1024){const{path:a}=s;h.update(w=>w.map(x=>Object.assign(x,{path:bt(a,x._path)})))}if(t.$$.dirty&513){const a=gt(o,r.pathname);g.set(a)}},[r,c,h,g,S,R,u,f,d,o,s,i,l]}class ke extends Y{constructor(e){super(),W(this,e,ye,be,j,{basepath:6,url:7,history:8})}}function we(t){let e;return{c(){e=Pt("div"),e.innerHTML=`<div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label> 
        
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a>Home</a></li> 
          <li><a>Wiki</a> 
            <ul class="p-2"><li><a>Home</a></li> 
              <li><a>Items</a></li> 
              <li><a>Progression</a></li></ul></li> 
          <li><a>Resources</a></li></ul></div> 
      <a class="btn btn-ghost normal-case text-xl">Digtastic</a></div> 
    <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li><a>Home</a></li> 
        
        <li tabindex="0"><details><summary>Wiki</summary> 
            <ul class="p-2"><li><a>Home</a></li> 
              <li><a>Items</a></li> 
              <li><a>Progression</a></li></ul></details></li> 
        <li><a>Resources</a></li></ul></div> 
    <div class="navbar-end"><a class="btn">Status</a></div>`,At(e,"class","navbar bg-base-100")},m(n,r){P(n,e,r)},p,i:p,o:p,d(n){n&&O(e)}}}class xe extends Y{constructor(e){super(),W(this,e,null,we,j,{})}}class ve extends Y{constructor(e){super(),W(this,e,null,null,j,{})}}function Se(t){let e,n,r,o;return e=new xe({}),r=new fe({props:{path:"/digtastic-dev/",component:ve}}),{c(){D(e.$$.fragment),n=zt(),D(r.$$.fragment)},m(s,c){L(e,s,c),P(s,n,c),L(r,s,c),o=!0},p,i(s){o||(b(e.$$.fragment,s),b(r.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),y(r.$$.fragment,s),o=!1},d(s){M(e,s),s&&O(n),M(r,s)}}}function Oe(t){let e,n,r;return n=new ke({props:{$$slots:{default:[Se]},$$scope:{ctx:t}}}),{c(){e=Pt("main"),D(n.$$.fragment),At(e,"class","bg-base-200 min-h-screen")},m(o,s){P(o,e,s),L(n,e,null),r=!0},p(o,[s]){const c={};s&1&&(c.$$scope={dirty:s,ctx:o}),n.$set(c)},i(o){r||(b(n.$$.fragment,o),r=!0)},o(o){y(n.$$.fragment,o),r=!1},d(o){o&&O(e),M(n)}}}class Re extends Y{constructor(e){super(),W(this,e,null,Oe,j,{})}}new Re({target:document.getElementById("app")});