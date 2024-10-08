"use strict";(self.webpackChunkmy_docusaurus_project=self.webpackChunkmy_docusaurus_project||[]).push([[467],{418:(e,t,n)=>{n.d(t,{A:()=>a});const a=()=>null},6359:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},467:(e,t,n)=>{n.d(t,{A:()=>_e});var a=n(6540),r=n(53),l=n(6347),o=n(4798),c=n(9777);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.W6)();return(0,c.$G)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.A,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(8168);function d(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.A)({className:r,viewBox:"0 0 24 24",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}const h="announcementBar_axC9",f="announcementBarPlaceholder_xYHE",b="announcementBarClose_A3A1",g="announcementBarContent_6uhP";const v=function(){const{isClosed:e,close:t}=(0,c.Mj)(),{announcementBar:n}=(0,c.pN)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return!l||m&&e?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:f}),a.createElement("div",{className:g,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.A)("clean-btn close",b),onClick:t,"aria-label":(0,o.T)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(d,{width:14,height:14})):null)};var E=n(418),p=n(2303);const A={toggle:"toggle_iYfV"},k=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.A)(A.toggle,A.dark),style:n},t)},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.A)(A.toggle,A.light),style:n},t)},N=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.A)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>d.current?.click()},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{"Enter"===e.key&&d.current?.click()}}))}));function w(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.pN)(),o=(0,p.A)();return a.createElement(N,(0,u.A)({disabled:!o,icons:{checked:a.createElement(k,{icon:t,style:n}),unchecked:a.createElement(_,{icon:r,style:l})}},e))}var y=n(4785),C=n(5515);const S=e=>{const t=(0,l.zy)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),m=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,C.A)(((t,n)=>{const a=t.scrollY,l=n?.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.$G)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}};const D=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var L=n(9312),T=n(4098),I=n(6897),B=n(1773);const x=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,u.A)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function M(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.A)({className:r,viewBox:"0 0 413.348 413.348",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}const R="toggle_2i4l",V="navbarHideable_RReh",z="navbarHidden_FBwS",P="navbarSidebarToggle_AVbO",$="navbarSidebarCloseSvg_+9jJ",H="right";function U(){return(0,c.pN)().navbar.items}function W(){const{colorMode:{disableSwitch:e}}=(0,c.pN)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,y.A)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function G(e){let{sidebarShown:t,toggleSidebar:n}=e;D(t);const l=U(),s=W(),i=function(e){let{sidebarShown:t,toggleSidebar:n}=e;const r=(0,c.Ko)()?.({toggleSidebar:n}),l=(0,c.ZC)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(B.A,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(w,{className:P,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(M,{width:20,height:20,className:$}))),a.createElement("div",{className:(0,r.A)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(I.A,(0,u.A)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.A,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const K=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.pN)(),n=function(){const e=(0,L.A)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.$Z)((()=>{n&&r(!1)}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=W(),o=(0,T.vT)(),{navbarRef:s,isNavbarVisible:i}=S(e),m=U(),d=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:f}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??H))),rightItems:e.filter((e=>"right"===(e.position??H)))}}(m);return a.createElement("nav",{ref:s,className:(0,r.A)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[V]:e,[z]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(m?.length>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(x,null)),a.createElement(B.A,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(I.A,(0,u.A)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},f.map(((e,t)=>a.createElement(I.A,(0,u.A)({},e,{key:t})))),!l.disabled&&a.createElement(w,{className:R,checked:l.isDarkTheme,onChange:l.toggle}),!d&&a.createElement(E.A,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(G,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var O=n(4676),j=n(6025),Y=n(6654);const q="footerLogoLink_SRtH";var F=n(1101),Q=n(6359);function Z(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,j.A)(t),s=(0,j.A)(n,{forcePrependBaseUrl:!0});return a.createElement(O.A,(0,u.A)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,Y.A)(n)?a.createElement("span",null,r,a.createElement(Q.A,null)):r)}const X=e=>{let{sources:t,alt:n}=e;return a.createElement(F.A,{className:"footer__logo",alt:n,sources:t})};const J=function(){const{footer:e}=(0,c.pN)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,j.A)(l.src),dark:(0,j.A)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.A)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(Z,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(O.A,{href:l.href,className:q},a.createElement(X,{alt:l.alt,sources:o})):a.createElement(X,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var ee=n(8193);const te=(0,c.Wf)("theme"),ne="light",ae="dark",re=e=>e===ae?ae:ne,le=e=>{(0,c.Wf)("theme").set(re(e))},oe=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.pN)(),[r,l]=(0,a.useState)((e=>ee.A.canUseDOM?re(document.documentElement.getAttribute("data-theme")):re(e))(e)),o=(0,a.useCallback)((()=>{l(ne),le(ne)}),[]),s=(0,a.useCallback)((()=>{l(ae),le(ae)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",re(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=te.get();null!==e&&l(re(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?ae:ne)}))}),[]),{isDarkTheme:r===ae,setLightTheme:o,setDarkTheme:s}};var ce=n(493);const se=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=oe();return a.createElement(ce.A.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},ie="docusaurus.tab.",me=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.Wf)(`${ie}${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c.Eo)().forEach((t=>{if(t.startsWith(ie)){const n=t.substring(15);e[n]=(0,c.Wf)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},ue=(0,a.createContext)(void 0);const de=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=me();return a.createElement(ue.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function he(e){let{children:t}=e;return a.createElement(se,null,a.createElement(c.oq,null,a.createElement(de,null,a.createElement(c.VQ,null,a.createElement(c.pM,null,t)))))}var fe=n(2602),be=n(4586);function ge(e){let{locale:t,version:n,tag:r}=e;return a.createElement(fe.A,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var ve=n(8139);function Ee(){const{i18n:{defaultLocale:e,locales:t}}=(0,be.A)(),n=(0,c.oK)();return a.createElement(fe.A,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function pe(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,be.A)(),r=function(){const{siteConfig:{url:e}}=(0,be.A)(),{pathname:t}=(0,l.zy)();return e+(0,j.A)(t)}(),o=t?`${n}${t}`:r;return a.createElement(fe.A,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function Ae(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,be.A)(),{metadatas:l,image:o}=(0,c.pN)(),{title:s,description:i,image:m,keywords:d,searchMetadatas:h}=e,f=(0,j.A)(t),b=(0,c.s$)(s),g=n,v=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(fe.A,null,a.createElement("html",{lang:g,dir:v}),t&&a.createElement("link",{rel:"shortcut icon",href:f}),a.createElement("title",null,b),a.createElement("meta",{property:"og:title",content:b}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(ve.A,{image:o}),m&&a.createElement(ve.A,{image:m}),a.createElement(ve.A,{description:i,keywords:d}),a.createElement(pe,null),a.createElement(Ee,null),a.createElement(ge,(0,u.A)({tag:c.Cy,locale:n},h)),a.createElement(fe.A,null,l.map(((e,t)=>a.createElement("meta",(0,u.A)({key:`metadata_${t}`},e))))))}const ke=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const _e=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return ke(),a.createElement(he,null,a.createElement(Ae,e),a.createElement(m,null),a.createElement(v,null),a.createElement(K,null),a.createElement("div",{className:(0,r.A)(c.GN.wrapper.main,l,o)},t),!n&&a.createElement(J,null))}},1773:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(8168),r=n(6540),l=n(4676),o=n(1101),c=n(6025),s=n(4586),i=n(9777);const m=e=>{const{siteConfig:{title:t}}=(0,s.A)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.pN)(),{imageClassName:u,titleClassName:d,...h}=e,f=(0,c.A)(m.href||"/"),b={light:(0,c.A)(m.src),dark:(0,c.A)(m.srcDark||m.src)};return r.createElement(l.A,(0,a.A)({to:f},h,m.target&&{target:m.target}),m.src&&r.createElement(o.A,{className:u,sources:b,alt:m.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},3031:(e,t,n)=>{n.d(t,{A:()=>b,k:()=>d});var a=n(8168),r=n(6540),l=n(53),o=n(4676),c=n(6025),s=n(6359),i=n(6654),m=n(6897);const u="dropdown__link--active";function d(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:m,label:d,activeClassName:h="",prependBaseUrlToHref:f,...b}=e;const g=(0,c.A)(l),v=(0,c.A)(t),E=(0,c.A)(m,{forcePrependBaseUrl:!0}),p=d&&m&&!(0,i.A)(m),A=h===u;return r.createElement(o.A,(0,a.A)({},m?{href:f?E:m}:{isNavLink:!0,activeClassName:b.className?.includes(h)?"":h,to:g,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(v)}:null},b),p?r.createElement("span",null,d,r.createElement(s.A,A&&{width:12,height:12})):d)}function h(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(d,(0,a.A)({className:(0,l.A)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function f(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(d,(0,a.A)({className:(0,l.A)("menu__link",t)},o)))}const b=function(e){let{mobile:t=!1,position:n,...l}=e;const o=t?f:h;return r.createElement(o,(0,a.A)({},l,{activeClassName:l.activeClassName??(0,m.S)(t)}))}},8240:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(8168),r=n(6540),l=n(3031),o=n(4098),c=n(53),s=n(6897),i=n(9777),m=n(440);function u(e){let{docId:t,label:n,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.zK)(u),{preferredVersion:b}=(0,i.g1)(u),g=(0,o.r7)(u),v=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,m.uniq)([h,b,g].filter(Boolean)),t),E=(0,s.S)(d.mobile);return r.createElement(l.A,(0,a.A)({exact:!0},d,{className:(0,c.A)(d.className,{[E]:f?.sidebar&&f.sidebar===v.sidebar}),activeClassName:E,label:n??v.id,to:v.path}))}},7754:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(8168),r=n(6540),l=n(3031),o=n(1175),c=n(4098),s=n(9777),i=n(4798);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:u,dropdownItemsBefore:d,dropdownItemsAfter:h,...f}=e;const b=(0,c.zK)(n),g=(0,c.jh)(n),v=(0,c.r7)(n),{preferredVersion:E,savePreferredVersionName:p}=(0,s.g1)(n);const A=function(){const e=g.map((e=>{const t=b?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===b?.activeVersion,onClick:()=>{p(e.name)}}}));return[...d,...e,...h]}(),k=b.activeVersion??E??v,_=t&&A?(0,i.T)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):k.label,N=t&&A?void 0:m(k).path;return A.length<=1?r.createElement(l.A,(0,a.A)({},f,{mobile:t,label:_,to:N,isActive:u?()=>!1:void 0})):r.createElement(o.A,(0,a.A)({},f,{mobile:t,label:_,to:N,items:A,isActive:u?()=>!1:void 0}))}},6467:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(8168),r=n(6540),l=n(3031),o=n(4098),c=n(9777);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:n,docsPluginId:i,...m}=e;const u=(0,o.ir)(i),{preferredVersion:d}=(0,c.g1)(i),h=(0,o.r7)(i),f=u??d??h,b=t??f.label,g=n??s(f).path;return r.createElement(l.A,(0,a.A)({},m,{label:b,to:g}))}},1175:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(8168),r=n(6540),l=n(53),o=n(9777),c=n(3031),s=n(6897);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.ys)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:n,className:o,...i}=e;const m=(0,r.useRef)(null),u=(0,r.useRef)(null),[d,h]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,l.A)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":d})},r.createElement(c.k,(0,a.A)({className:(0,l.A)("navbar__link",o)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),h(!d))}}),i.children??i.label),r.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.A,(0,a.A)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:n}))))))}function u(e){let{items:t,className:n,position:m,...u}=e;const d=(0,o.BH)(),h=i(t,d),{collapsed:f,toggleCollapsed:b,setCollapsed:g}=(0,o.uW)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&g(!h)}),[d,h]),r.createElement("li",{className:(0,l.A)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement(c.k,(0,a.A)({role:"button",className:(0,l.A)("menu__link menu__link--sublist",n)},u,{onClick:e=>{e.preventDefault(),b()}}),u.children??u.label),r.createElement(o.Nt,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},t.map(((e,t)=>r.createElement(s.A,(0,a.A)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const d=function(e){let{mobile:t=!1,...n}=e;const a=t?u:m;return r.createElement(a,n)}},6897:(e,t,n)=>{n.d(t,{A:()=>v,S:()=>g});var a=n(6540),r=n(3031),l=n(1175),o=n(8168);const c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.A)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(4586),i=n(9777);const m="iconLanguage_EbrZ";function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:f}}=(0,s.A)(),b=(0,i.oK)();function g(e){return f[e].label}const v=[...n,...h.map((e=>{const t=`pathname://${b.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:g(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":g(d);return a.createElement(l.A,(0,o.A)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,E)),items:v}))}var d=n(418);function h(e){let{mobile:t}=e;return t?null:a.createElement(d.A,null)}const f={default:()=>r.A,localeDropdown:()=>u,search:()=>h,dropdown:()=>l.A,docsVersion:()=>n(6467).A,docsVersionDropdown:()=>n(7754).A,doc:()=>n(8240).A},b=e=>{const t=f[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};const g=e=>e?"menu__link--active":"navbar__link--active";function v(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=b(r);return a.createElement(l,n)}},493:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(6540).createContext(void 0)},1101:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(8168),r=n(6540),l=n(53),o=n(2303),c=n(4785);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,o.A)(),{isDarkTheme:n}=(0,c.A)(),{sources:i,className:m,alt:u="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.A)({key:e,src:i[e],alt:u,className:(0,l.A)(s.themedImage,s[`themedImage--${e}`],m)},d)))))}},5515:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),r=n(8193);const l=()=>r.A.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},4785:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540),r=n(493);const l=function(){const e=(0,a.useContext)(r.A);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);