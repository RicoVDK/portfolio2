"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[501],{294:function(e,t,l){var a=l(7294);t.Z=function(e){var t=e.id,l=void 0===t?"":t,r=e.className,n=void 0===r?"":r,i=e.children;return a.createElement("div",{id:l,className:"relative flex w-full justify-center text-left "+n},a.createElement("div",null,i))}},3875:function(e,t,l){var a=l(7294);t.Z=function(e){var t=e.id,l=void 0===t?"":t,r=e.wrapClassName,n=void 0===r?"":r,i=e.textClassName,s=void 0===i?"":i,c=e.children;return a.createElement("div",{id:l,className:"relative w-full p-12 text-2xl text-primary text-center font-bold "+n},a.createElement("div",{className:"relative mx-auto "+s},c))}},4089:function(e,t,l){var a=l(7294);t.Z=function(e){var t=e.id,l=void 0===t?"":t,r=e.className,n=void 0===r?"":r,i=e.children;return a.createElement("ul",{id:l,className:"list-disc list-outside "+n},i)}},659:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=l(7294),r=l(3875),n=l(8362),i=l(6786),s=l(2637),c=function(e){e.id;var t=e.className,l=void 0===t?"":t,r=e.children,n=(0,a.useState)(!1),i=n[0],c=n[1],o=(0,a.useRef)(null);return(0,a.useLayoutEffect)((function(){return function(){clearTimeout(o.current)}}),[o]),a.createElement("span",{className:"relative hover:text-primary-3 cursor-pointer "+l,onClick:function(e){i||(navigator.clipboard.writeText(e.target.innerText),c(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){return c(!1)}),1500))}},i?a.createElement("span",{className:"text-primary"},"Copied!"):a.createElement(s.Z,null,r))},o=function(e){var t=e.id,l=void 0===t?"":t,r=e.className,n=void 0===r?"":r,i=e.contents,s=void 0===i?[]:i;return a.createElement("div",{id:l,className:"relative flex flex-col w-full "+n},s.map((function(e,t){return a.createElement("div",{key:t,className:"relative flex w-full rounded-full overflow-hidden mb-4 last:mb-0"},a.createElement("div",{className:"absolute w-full h-full border border-gray-700 rounded-full"}),a.createElement("div",{className:"relative h-12 bg-gray-800 rounded-full"},a.createElement("div",{className:"absolute w-full h-full border border-gray-700 rounded-full"}),a.createElement("div",{className:"absolute flex h-12 w-12 items-center justify-center text-xl border border-gray-700 rounded-full"},a.createElement("i",{className:e.icon})),a.createElement("div",{className:"relative flex h-full pl-14 pr-4 tablet:pl-16 tablet:pr-6 items-center font-bold whitespace-nowrap"},e.displayName)),a.createElement("div",{className:"relative flex flex-grow h-12 justify-center items-center px-2 truncate"},e.child))})))},u=l(7022),m=l(294),d=l(4089),f=l(3751),b=function(e){return!0===e.tnf?"fas fa-check text-green-400":!1===e.tnf?"fas fa-times text-red-500":"fas fa-question text-primary-3"},v=function(e){var t=e.entry,l=e.index,r=function(e){return 0===e?"":"border-t"};return a.createElement(a.Fragment,null,a.createElement("div",{className:"relative py-2 px-4 text-right font-bold bg-gray-800 border-r border-gray-700 "+r(l)},t.displayName),a.createElement("div",{className:"relative flex justify-center items-center text-lg border-gray-700 "+r(l)},a.createElement("i",{className:b(t)})))},p=function(e){var t=e.id,l=void 0===t?"":t,r=e.className,n=void 0===r?"":r,i=e.contents,s=void 0===i?[]:i;return a.createElement("div",{id:l,className:"relative grid grid-cols-2 grid-flow-row-dense w-full max-w-400px rounded-3xl border border-gray-700 overflow-hidden "+n},s.map((function(e,t){return a.createElement(v,{key:t,entry:e,index:t})})))},E=l(8072),h=function(e){var t=e.location,l=e.setContents;return(0,a.useLayoutEffect)((function(){l([{displayName:"Availability",id:"availability",children:[]},{displayName:"When Contacting",id:"when-contacting",children:[{displayName:"For business & hiring",id:"business-hiring",children:[]},{displayName:"For general questions",id:"general-questions",children:[]},{displayName:"For website feature suggestions",id:"feature-suggestions",children:[]},{displayName:"For reporting website-related issues",id:"website-issues",children:[]}]},{displayName:"Contact Information",id:"contact-info",children:[]}])}),[l]),a.createElement("div",{id:"contact"},a.createElement(f.Z,{pageTitle:"Contact",desc:"Contact me for hiring or questions.",location:t}),a.createElement(r.Z,{id:"availability"},"Availability"),a.createElement("div",{className:"w-full px-4 pb-4 text-center"},a.createElement(n.Z,null,"Updated 08/09/2021"),a.createElement("br",null)),a.createElement(p,{className:"m-auto",contents:[{displayName:"Full time",tnf:!1},{displayName:"Part time",tnf:!0},{displayName:"Commission",tnf:!1},{displayName:"Volunteer",tnf:!1}]}),a.createElement("br",null),a.createElement(m.Z,null,a.createElement(d.Z,null,a.createElement("li",null,"Able to and preferrably work remote."),a.createElement("li",null,"Able to meet face-to-face using public transport within the Netherlands."))),a.createElement(r.Z,{id:"when-contacting"},"When Contacting"),a.createElement("div",{className:"w-full text-center px-4"},"Please include the following information depending on your goal...",a.createElement("br",null),a.createElement("br",null),a.createElement(i.Z,{id:"business-hiring"},"For business ","&"," hiring:"),a.createElement("br",null),a.createElement("div",{className:"relative text-center text-base italic"},"- The name of the company/business you represent. -",a.createElement("br",null),"- A link to your official website, or social media if the former is not applicable. -",a.createElement("br",null),"- What does the job include? What will I be responsible for? -"),a.createElement("br",null),a.createElement(i.Z,{id:"general-questions"},"For general questions:"),a.createElement("br",null),a.createElement("div",{className:"relative text-center text-base italic"},"- Your questions, obviously! -"),a.createElement("br",null),a.createElement(i.Z,{id:"feature-suggestions"},"For website feature suggestions:"),a.createElement("br",null),a.createElement("div",{className:"relative text-center text-base italic"},"- What feature you would like to see on this website. -",a.createElement("br",null),"- Why you think it should be implemented. -"),a.createElement("br",null),a.createElement(i.Z,{id:"website-issues"},"For reporting website-related issues:"),a.createElement("br",null),a.createElement("div",{className:"relative text-center text-base italic"},"- The name of the browser you're using. -",a.createElement("br",null),"- What you were doing when said issue occurred. -",a.createElement("br",null),"- Screenshots that display the issue (Optional). -",a.createElement("br",null),"- A recording showing a replication of the issue (Optional). -",a.createElement("br",null),"- The build number of the browser you're currently using (Optional). -")),a.createElement(r.Z,{id:"contact-info"},"Contact Information"),a.createElement(o,{className:"m-auto max-w-500px pb-12",contents:[{icon:"fas fa-envelope",displayName:"E-Mail",child:a.createElement(c,{className:"block text-center w-full truncate"},E.siteMetadata.socials.mail,a.createElement("i",{className:"far fa-copy text-sm pl-2"}))},{icon:"fab fa-twitter",displayName:"Twitter",child:a.createElement(u.Z,{className:"block text-center w-full truncate",to:E.siteMetadata.socials.twitter,external:!0},"@ricovdk",a.createElement("i",{className:"fas fa-external-link-alt text-xs pl-2"}))}]}))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-b29ad8a779b6446de0bd.js.map