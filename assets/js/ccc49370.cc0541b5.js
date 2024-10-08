"use strict";(self.webpackChunkmy_docusaurus_project=self.webpackChunkmy_docusaurus_project||[]).push([[249],{19:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(6540),r=a(53),l=a(467),o=a(4676);const s="sidebar_q+wC",i="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",m="sidebarItem_cjdF",d="sidebarItemLink_zyXk",u="sidebarItemLinkActive_wcJs";var g=a(4798);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.A)(s,"thin-scrollbar"),"aria-label":(0,g.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.A)(i,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((e=>n.createElement("li",{key:e.permalink,className:m},n.createElement(o.A,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}var h=a(1461);const E=function(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return n.createElement(l.A,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},i&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,r.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},n.createElement(h.A,{toc:a})))))}},1715:(e,t,a)=>{a.d(t,{A:()=>_});var n=a(6540),r=a(53),l=a(5680),o=a(4798),s=a(4676),i=a(6025),c=a(9777),m=a(5582),d=a(6458);const u="blogPostTitle_d4p0",g="blogPostData_-Im+",p="blogPostDetailsFull_xD8n";var h=a(2853);const E="image_9q7L";const v=function(e){let{author:t}=e;const{name:a,title:r,url:l,imageURL:o}=t;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(s.A,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:E,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s.A,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b="authorCol_8c0z";function f(e){let{authors:t,assets:a}=e;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>n.createElement("div",{className:(0,r.A)("col col--6",b),key:t},n.createElement(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const _=function(e){const t=function(){const{selectMessage:e}=(0,c.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,o.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.h)(),{children:E,frontMatter:v,assets:b,metadata:_,truncated:N,isBlogPostPage:A=!1}=e,{date:k,formattedDate:P,permalink:T,tags:y,readingTime:w,title:L,editUrl:C,authors:I}=_,x=b.image??v.image;return n.createElement("article",{className:A?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=A?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:u,itemProp:"headline"},A?L:n.createElement(s.A,{itemProp:"url",to:T},L)),n.createElement("div",{className:(0,r.A)(g,"margin-vert--md")},n.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==w&&n.createElement(n.Fragment,null," \xb7 ",t(w))),n.createElement(f,{authors:I,assets:b}))})(),x&&n.createElement("meta",{itemProp:"image",content:a(x,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.xA,{components:m.A},E)),(y.length>0||N)&&n.createElement("footer",{className:(0,r.A)("row docusaurus-mt-lg",{[p]:A})},y.length>0&&n.createElement("div",{className:(0,r.A)("col",{"col--9":!A})},n.createElement(h.A,{tags:y})),A&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.A,{editUrl:C})),!A&&N&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(s.A,{to:_.permalink,"aria-label":`Read more about ${L}`},n.createElement("b",null,n.createElement(o.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},2111:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(6540),r=a(8139),l=a(19),o=a(1715),s=a(4798),i=a(4676);const c=function(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.A,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(i.A,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var m=a(9777);const d=function(e){const{content:t,sidebar:a}=e,{frontMatter:s,assets:i,metadata:d}=t,{title:u,description:g,nextItem:p,prevItem:h,date:E,tags:v,authors:b}=d,{hide_table_of_contents:f,keywords:_}=s,N=i.image??s.image;return n.createElement(l.A,{wrapperClassName:m.GN.wrapper.blogPages,pageClassName:m.GN.page.blogPostPage,sidebar:a,toc:!f&&t.toc?t.toc:void 0},n.createElement(r.A,{title:u,description:g,keywords:_,image:N},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:E}),b.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:b.map((e=>e.url)).filter(Boolean).join(",")}),v.length>0&&n.createElement("meta",{property:"article:tag",content:v.map((e=>e.label)).join(",")})),n.createElement(o.A,{frontMatter:s,assets:i,metadata:d,isBlogPostPage:!0},n.createElement(t,null)),(p||h)&&n.createElement(c,{nextItem:p,prevItem:h}))}},6458:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(6540),r=a(4798),l=a(8168),o=a(53);const s="iconEdit_mS5F",i=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,l.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.A)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(9777);function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.GN.common.editThisPage},n.createElement(i,null),n.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1461:(e,t,a)=>{a.d(t,{m:()=>g,A:()=>p});var n=a(6540),r=a(53),l=a(9777);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>o(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(n))?n:a[a.indexOf(n)-1]??null}return a[a.length-1]}function i(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.pN)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,n.useRef)(void 0),a=i();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=s({anchorTopOffset:a.current}),o=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current?.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_vrFS",d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function g(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))))):null}const p=function(e){let{toc:t}=e;return c(u),n.createElement("div",{className:(0,r.A)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},3373:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(6540),r=a(53),l=a(4676);const o="tag_WK-t",s="tagRegular_LXbV",i="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(l.A,{href:t,className:(0,r.A)(o,{[s]:!c,[i]:c})},a,c&&n.createElement("span",null,c))}},2853:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(53),l=a(4798),o=a(3373);const s={tags:"tags_NBRY",tag:"tag_F03v"};function i(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.A)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s.tag},n.createElement(o.A,{name:t,permalink:a}))}))))}}}]);