"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[678],{181:function(e,t,l){var a=l(7294);t.Z=function(e){var t=e.id,l=void 0===t?"":t,n=e.className,r=void 0===n?"":n,i=e.children;return a.createElement("span",{id:l,className:"font-bold "+r},i)}},2444:function(e,t,l){var a=l(7294);t.Z=function(e){var t=e.id,l=void 0===t?"":t,n=e.wrapClassName,r=void 0===n?"":n,i=e.textClassName,o=void 0===i?"":i,s=e.children;return a.createElement("div",{id:l,className:"relative w-full text-base tablet:text-lg "+r},a.createElement("div",{className:"relative "+o},s))}},3875:function(e,t,l){var a=l(7294);t.Z=function(e){var t=e.id,l=void 0===t?"":t,n=e.wrapClassName,r=void 0===n?"":n,i=e.textClassName,o=void 0===i?"":i,s=e.children;return a.createElement("div",{id:l,className:"relative w-full p-12 text-2xl text-primary text-center font-bold "+r},a.createElement("div",{className:"relative mx-auto "+o},s))}},6170:function(e,t,l){l.r(t),l.d(t,{default:function(){return y}});var a=l(7294),n=l(5235),r=l(1554);function i(e,t){(0,r.Z)(2,arguments);var l=(0,n.Z)(e),a=(0,n.Z)(t);return l.getFullYear()-a.getFullYear()}function o(e,t){(0,r.Z)(2,arguments);var l=(0,n.Z)(e),a=(0,n.Z)(t),i=l.getTime()-a.getTime();return i<0?-1:i>0?1:i}var s=l(5419),c=l(3875),m=l(2444),d=l(6786),u=l(2637),h=l(181),b=l(7022),p=function(e){var t=e.faClassName,l=void 0===t?"":t,n=e.title,r=void 0===n?"No Title":n,i=e.children;return a.createElement("div",{className:"relative flex flex-col h-54 w-full items-center text-center bg-gray-800 p-6 rounded-3xl border border-gray-700 max-w-400px mx-auto tablet:m-0"},a.createElement("div",{className:"relative text-base text-primary-3 font-bold"},a.createElement("i",{className:"relative block fas "+l+" text-3xl"}),a.createElement("div",{className:"py-2"},r)),a.createElement("div",{className:"relative flex italic text-sm flex-grow items-center"},a.createElement("div",{className:"relative text-center"},i)))},f=l(3751),E=function(e){var t=e.id,l=void 0===t?"":t,n=e.date,r=void 0===n?"0000 Jan.":n,i=e.hasStripe,o=void 0!==i&&i,s=e.children;return a.createElement("div",{id:l,className:"relative w-full"},a.createElement("div",{className:"relative w-full"},a.createElement("div",{className:"absolute w-8 h-full pt-3"},a.createElement("div",{className:"relative h-full left-1/2 transform -translate-x-1/2 "+(o?"bg-gray-400 w-1":"w-0 border-l-4 border-dotted border-gray-400")})),a.createElement("div",{className:"absolute w-full"},a.createElement("div",{className:"flex absolute h-8 bg-gray-800 rounded-full border border-gray-700 items-center font-bold text-sm pl-10 pr-4"},r),a.createElement("div",{className:"flex absolute w-8 h-8 bg-gray-800 rounded-full border border-gray-700 items-center justify-center"},a.createElement("div",{className:"relative w-3 h-3 bg-primary-3 rounded-full"}))),a.createElement("div",{className:"relative w-full pt-14 pb-6 pl-8 min-h-16 italic text-xsm"},s)))},g=function(e){var t=e.children,l=(0,a.useRef)(a.Children.count(t));return a.createElement("div",{className:"relative w-full text-sm text-center"},a.createElement("div",{className:"relative w-full"},t.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hasStripe:l.current-1>t})}))))},y=function(e){var t=e.location,l=e.setContents,y=(0,a.useRef)(function(e,t){(0,r.Z)(2,arguments);var l=(0,n.Z)(e),a=(0,n.Z)(t),s=o(l,a),c=Math.abs(i(l,a));l.setFullYear(1584),a.setFullYear(1584);var m=o(l,a)===-s,d=s*(c-Number(m));return 0===d?0:d}(new Date,new Date("2001-10-15"))),v=(0,a.useRef)((0,s.Z)(new Date,"yyyy MMM"));return(0,a.useLayoutEffect)((function(){l([{displayName:"Introduction",id:"intro",children:[]},{displayName:"Affinities",id:"affinities",children:[]},{displayName:"History",id:"history",children:[{displayName:"Attending College",id:"history-college-year-one",children:[]},{displayName:"1st Internship",id:"history-first-internship",children:[]},{displayName:"Final Year of College",id:"history-college-final-year",children:[]},{displayName:"Writing Vibrant Venture Dialogue",id:"history-vv-dialogue",children:[]},{displayName:"Graduating",id:"history-graduating",children:[]},{displayName:"Rico's Softworks",id:"history-ricosoftworks",children:[]},{displayName:"Present Day",id:"history-present-day",children:[]}]}])}),[l]),a.createElement("div",{id:"index"},a.createElement(f.Z,{pageTitle:"About",desc:"Learn about who I am and what I do!",location:t}),a.createElement(m.Z,{id:"intro",wrapClassName:"text-center pt-4"},"Hello and welcome!",a.createElement("br",null),a.createElement("br",null),"I am a ",y.current," year old Dutch Software Developer who graduated MBO 4 at Landstede Harderwijk,",a.createElement("br",null),"(Equivalent to college on Associate level)",a.createElement("br",null),"and live in the Netherlands.",a.createElement("br",null),a.createElement("br",null),"My passion is to be working on video games, which is what I do as a hobby in my spare time. and my dream is to be able to live out the rest of my life working on video games that people can enjoy.",a.createElement("br",null)),a.createElement(c.Z,{id:"affinities"},"Affinities"),a.createElement("div",{className:"relative flex justify-center w-full"},a.createElement("div",{className:"relative grid grid-cols-1 tablet:grid-cols-2 gap-4 w-full max-w-700px align-center"},a.createElement(p,{faClassName:"fa-laptop-code",title:"Programming"},"4+ years of experience as well as a hobby.",a.createElement("br",null),"Familiar with ",a.createElement(h.Z,null,"object oriented principles ","&"," source control"),".",a.createElement("br",null),a.createElement("br",null),"Experienced in using languages such as:",a.createElement("br",null),a.createElement(h.Z,null,"C#, Python, GDScript, Php, Lua, JavaScript.",a.createElement("br",null))),a.createElement(p,{faClassName:"fa-chalkboard-teacher",title:"Direction & Management"},"2+ years of experience managing projects as a scrum master, while also being a part of their development teams.",a.createElement("br",null),a.createElement("br",null),a.createElement(h.Z,null,"Scrum ","&"," Agile")," is a norm.",a.createElement("br",null),"Also capable of working with ",a.createElement(h.Z,null,"Jira ","&"," Trello")," as well as the good old fashioned paper and markers."),a.createElement(p,{faClassName:"fa-gamepad",title:"Game Development"},"4+ years of experience as a hobby,",a.createElement("br",null),"ontop of having made 2 prototypes as part of a school project.",a.createElement("br",null),a.createElement("br",null),"Currently working on 2 additional prototypes of my own, which you can find ",a.createElement(b.Z,{to:"/projects"},"here"),".",a.createElement("br",null),a.createElement("br",null),"Experienced in using both ",a.createElement(h.Z,null,"Unity ","&"," Godot"),"."),a.createElement(p,{faClassName:"fa-file-code",title:"Web Development"},"4+ years of experience as well as 2 successfull internships, ",a.createElement(h.Z,null,"back-end ","&"," front-end"),".",a.createElement("br",null),a.createElement("br",null),"Capable of designing websites in a variety of styles,",a.createElement("br",null),"as well as being experienced in ",a.createElement(h.Z,null,"designing and implementing databases"),".",a.createElement("br",null),a.createElement("br",null),"Experience in using the following:",a.createElement("br",null),a.createElement(h.Z,null,"Laravel, ReactJS, Next, Gatsby, Wordpress, MySQL, Drupal, Django + REST, JQuery, Vue, HTML, JSX, CSS, SCSS, Tailwind")))),a.createElement(c.Z,{id:"history"},"History"),a.createElement("div",{className:"relative max-w-500px mx-auto"},a.createElement(g,null,a.createElement(E,{id:"history-college-year-one",date:"2018 Aug. - 2019 Jul."},a.createElement(d.Z,null,"Attending College"),a.createElement("br",null),a.createElement("br",null),"Enrolled as a first year in college,",a.createElement("br",null),"(MBO in the Netherlands)",a.createElement("br",null),"studying the course Software Development",a.createElement("br",null),a.createElement("br",null),"During my first year I learned the basics of object oriented programming, as well as how to work in a team by literally just being assigned a team and a project.",a.createElement("br",null),a.createElement("br",null),"We would have new projects and be assigned to a new team every 2-3 months, effectively repeating and honing our development process while we gained practical experience.",a.createElement("br",null),a.createElement("br",null),"Each team had their own responsibility of managing internal roles and planning, for both the project itself and meetings.",a.createElement("br",null),"Taking the initiative was actively encouraged."),a.createElement(E,{id:"history-first-internship",date:"2019 Aug. - 2020 Jul."},a.createElement(d.Z,null,"1st Internship"),a.createElement("br",null),a.createElement("br",null),"Began my first internship as a Web Developer in the 2nd year of college.",a.createElement("br",null),a.createElement("br",null),"Here I got to expand my knowledge in PHP ","&"," JS + JQuery by learning the CMS Wordpress, while making a one pager with Elementor, which would be the very first website I ever aired and singlehandedly created.",a.createElement("br",null),a.createElement("br",null),"Alongside that, I created about 1 to 4 websites every day using their custom CMS, which eventually ended up being a total of 80+ websites at the end of my internship.",a.createElement("br",null),a.createElement("br",null),"Inbetween my tasks there were also occurences where some of their clients' websites needed bugfixing,",a.createElement("br",null),"as well as new features, which I pushed through.",a.createElement("br",null),a.createElement("br",null),"After my internship I was tasked with making a game prototype, which we designed to be a ",a.createElement(b.Z,{to:"/projects/phantasma"},'2D "Luigi\'s Mansion" type of game'),"."),a.createElement(E,{id:"history-college-final-year",date:"2020 Aug. - 2021 Jul."},a.createElement(d.Z,null,"Final Year of College"),a.createElement("br",null),a.createElement("br",null),"One half of the school year was spent working on 2 projects.",a.createElement("br",null),"The first project being a ",a.createElement(b.Z,{to:"/projects/3d-printer-dashboard"},"3D printer dashboard"),", which could both be used by students and teachers.",a.createElement("br",null),"The second and last one was an early ",a.createElement(b.Z,{to:"/projects/2_5d-unity-prototype"},"Unity 2.5D prototype"),", in which I taught myself the basics of 3D ","&"," grid movement + more.",a.createElement("br",null),a.createElement("br",null),"The last half of the school year was an exam in the form of a final internship.",a.createElement("br",null),"Once again, Web Development, I learned Python + Django in the first two weeks, and got familiar with ReactJS afterwards.",a.createElement("br",null),a.createElement("br",null),"At the end of my internship I had designed ","&"," implemented ",a.createElement(b.Z,{to:"/projects/dartscore"},"a working KO tournament system")," for darting, for which I also implemented (and expanded on) its front-end."),a.createElement(E,{id:"history-vv-dialogue",date:"2021 Apr. - 2021 May."},a.createElement(d.Z,null,"Writing Vibrant Venture Dialogue"),a.createElement("br",null),a.createElement("br",null),"A good friend of mine and owner of ",a.createElement(u.Z,null,"Semag Games")," gave me the opportunity to write dialogue for his game ",a.createElement(b.Z,{external:!0,to:"https://store.steampowered.com/app/1264520/Vibrant_Venture/"},"Vibrant Venture"),".",a.createElement("br",null),a.createElement("br",null),"The task involved designing a group of characters' personalities based on the only thing available at the time, their artworks, and then writing a big batch of interactive dialogue for each of them.",a.createElement("br",null),a.createElement("br",null),"The final document consists out of more than 6000 words!",a.createElement("br",null),"You can play the game and view my contribution from the update Alpha 5 and on, by visiting the game's town."),a.createElement(E,{id:"history-graduating",date:"2021 Jul."},a.createElement(d.Z,null,"Graduating"),a.createElement("br",null),a.createElement("br",null),"I graduated college as a Software Developer on Associate level.",a.createElement("br",null),a.createElement("br",null),"Development on the prototype ",a.createElement(b.Z,{to:"/projects/eterna"},"Project Eterna")," was started.",a.createElement("br",null),"Development on the prototype ",a.createElement(b.Z,{to:"/projects/birds"},"Project Birds")," was started.",a.createElement("br",null)),a.createElement(E,{id:"history-ricosoftworks",date:"2021 Aug. - 2021 Sep."},a.createElement(d.Z,null,"Rico's Softworks"),a.createElement("br",null),a.createElement("br",null),"Development is started on the 2nd rendition of Rico's Softworks, alongside aiding development in a yet-to-be-announced project.",a.createElement("br",null),a.createElement("br",null),"Later that month, development on the website was completed, and writing the posts and polishing existing content began.",a.createElement("br",null),a.createElement("br",null),"You can read more about the development of this website ",a.createElement(b.Z,{to:"/projects/ricosoftworks"},"here"),"."),a.createElement(E,{id:"history-present-day",date:v.current+"."},a.createElement(d.Z,null,"Present Day"),a.createElement("br",null),a.createElement("br",null),"I am currently looking for work!",a.createElement("br",null),a.createElement("br",null),"Please ",a.createElement(b.Z,{to:"/contact"},"contact me")," if you're interested."))),a.createElement(m.Z,{wrapClassName:"pt-6 pb-12 text-center"},"Thank you for your interest thus far!",a.createElement("br",null),a.createElement("br",null),"personal details are excluded on this website for privacy reasons.",a.createElement("br",null),"For any additional questions, like requesting my CV, please feel free to contact me.",a.createElement("br",null),a.createElement("br",null),"Contact info is shared on ",a.createElement(b.Z,{to:"/contact"},"this page"),"."))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e39f18a036a8d3493315.js.map