(this["webpackJsonpen2fa-dictionary"]=this["webpackJsonpen2fa-dictionary"]||[]).push([[0],{23:function(e,c,n){},24:function(e,c,n){},25:function(e,c,n){},29:function(e,c,n){},33:function(e,c,n){},34:function(e,c,n){"use strict";n.r(c);var t=n(2),s=n.n(t),i=n(16),l=n.n(i),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,i=c.getLCP,l=c.getTTFB;n(e),t(e),s(e),i(e),l(e)}))},r=(n(22),n(23),n(24),n(25),n(35)),j=n(36),o=n(37),d=n.p+"static/media/logoipsum.611858e8.svg",h=n(1),u=function(){return Object(h.jsx)(r.a,{className:"",children:Object(h.jsx)("header",{className:"site-header",children:Object(h.jsxs)(j.a,{className:"justify-content-center align-self-center align-items-center",children:[Object(h.jsx)(o.a,{className:"site-header-left ",children:Object(h.jsx)("a",{href:"/",className:"logo",children:Object(h.jsx)("img",{src:d,alt:""})})}),Object(h.jsx)(o.a,{className:"site-header-right"})]})})})},b=n(8),O=(n(29),n(38)),x=n(39),m=n(40),f=n(11),v=n(14),g=n(17),p=function(){var e=Object(t.useRef)(null),c=Object(t.useState)(!1),n=Object(b.a)(c,2),s=n[0],i=n[1],l=Object(t.useState)(),a=Object(b.a)(l,2),j=a[0],o=a[1],d=Object(t.useState)(),u=Object(b.a)(d,2),p=u[0],N=u[1],y=Object(t.useState)(),S=Object(b.a)(y,2),C=S[0],E=S[1],F=Object(t.useState)(),w=Object(b.a)(F,2),A=w[0],L=w[1];return Object(t.useEffect)((function(){fetch("data/words.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){N(e)})).catch((function(e){console.error(e)}))}),[]),console.log(C),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(r.a,{className:"mt-5 mb-5",children:[Object(h.jsx)("h1",{className:"search-title",children:"Search for a Word"}),Object(h.jsxs)(O.a,{className:"search-form mt-5",children:[Object(h.jsxs)(x.a,{className:"custom-search-box",children:[Object(h.jsx)(m.a,{type:"tel",bsSize:"lg",placeholder:"English Word",onChange:function(){var c,n,t,s,i=null===e||void 0===e||null===(c=e.current)||void 0===c?void 0:c.value;(o(i),i)&&(n=null===p||void 0===p||null===(t=p.sort((function(e,c){return e.English.localeCompare(c.English)})))||void 0===t||null===(s=t.filter((function(e){var c,n,t,s,l=!1;return 0===(null===e||void 0===e||null===(c=e.English)||void 0===c||null===(n=c.toLowerCase())||void 0===n||null===(t=n.trim())||void 0===t?void 0:t.search(null===(s=i.toLowerCase())||void 0===s?void 0:s.trim()))&&(l=!0),l})))||void 0===s?void 0:s.slice(0,10));L(n)},innerRef:e,onFocus:function(){return i(!0)}}),Object(h.jsx)(f.a,{icon:v.faSearch}),j&&(null===j||void 0===j?void 0:j.length)>0&&s&&Object(h.jsx)("ul",{className:"search-result",children:A&&(null===A||void 0===A?void 0:A.length)>0?null===A||void 0===A?void 0:A.map((function(e,c){return Object(h.jsx)("li",{onClick:function(){console.log(e),E(e),i(!1)},children:e.English},c)})):Object(h.jsx)("li",{className:"no_match_found",children:"No match found"})})]}),C?Object(h.jsxs)("div",{className:"selected-result",children:[Object(h.jsx)("div",{className:"word-title",children:C.English}),Object(h.jsxs)("div",{className:"meaning-box",children:[Object(h.jsx)("div",{className:"meaning-label",children:"Meaning in Farsi"}),Object(h.jsx)("div",{className:"meaning-title",children:C.Farsi}),Object(h.jsxs)("div",{className:"meaning-pronunciation",children:[Object(h.jsx)("span",{children:C.Transliteration}),C.Audio&&Object(h.jsx)("span",{className:"audio-icon",children:Object(h.jsx)(f.a,{icon:g.faVolumeUp,onClick:function(){new Audio("Audio/".concat(C.Audio)).play().then((function(){}))}})})]})]})]}):Object(h.jsx)("div",{className:"selected-no-result",children:Object(h.jsx)(f.a,{icon:v.faSearch})})]})]})})},N=(n(33),function(){return Object(h.jsxs)("div",{className:"footer-section",children:[Object(h.jsx)(r.a,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsxs)(o.a,{xs:8,md:6,children:[Object(h.jsx)("a",{href:"/",className:"footer-logo",children:Object(h.jsx)("img",{src:d,alt:""})}),Object(h.jsx)("p",{className:"footer-tagline",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})]}),Object(h.jsx)(o.a,{xs:4,md:3,children:Object(h.jsxs)("ul",{className:"footer-menu",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"About Us"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Privacy"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Terms"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Terms"})})]})}),Object(h.jsx)(o.a,{xs:12,md:3,children:Object(h.jsxs)("ul",{className:"footer-menu",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Instagram"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Linkedin"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Email"})})]})})]})}),Object(h.jsx)("div",{className:"copyright-text",children:"2021 Dictionary Inc. All rights reserved."})]})}),y=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(u,{}),Object(h.jsx)(p,{}),Object(h.jsx)(N,{})]})},S=function(){return Object(h.jsx)("div",{className:"",children:Object(h.jsx)(y,{})})};l.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),a()}},[[34,1,2]]]);
//# sourceMappingURL=main.ebaec591.chunk.js.map