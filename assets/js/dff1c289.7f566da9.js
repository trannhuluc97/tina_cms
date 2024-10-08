"use strict";(self.webpackChunkmy_docusaurus_project=self.webpackChunkmy_docusaurus_project||[]).push([[724],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>m});var t=r(6540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return r?t.createElement(m,i(i({ref:n},d),{},{components:r})):t.createElement(m,i({ref:n},d))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7034:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(8168),o=(r(6540),r(5680));const a={sidebar_position:1},i="Manage Docs Versions",s={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",isDocsHomePage:!1,title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/tina_cms/docs/tutorial-extras/manage-docs-versions",editUrl:"https://github.com/trannhuluc97/tina_cms/edit/main/website/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/tina_cms/docs/tutorial-basics/congratulations"},next:{title:"Translate your site",permalink:"/tina_cms/docs/tutorial-extras/translate-your-site"}},l=[{value:"Create a docs version",id:"create-a-docs-version",children:[]},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",children:[]},{value:"Update an existing version",id:"update-an-existing-version",children:[]}],c={toc:l},d="wrapper";function u(e){let{components:n,...a}=e;return(0,o.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,o.yg)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,o.yg)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,o.yg)("p",null,"Release a version 1.0 of your project:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,o.yg)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,o.yg)("p",null,"Your docs now have 2 versions:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"1.0")," at ",(0,o.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"current")," at ",(0,o.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,o.yg)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,o.yg)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,o.yg)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,o.yg)("p",null,"Modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,o.yg)("p",null,"The docs version dropdown appears in your navbar:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Docs Version Dropdown",src:r(141).A})),(0,o.yg)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,o.yg)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,o.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,o.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}u.isMDXComponent=!0},141:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);