(this.webpackJsonpstarswars=this.webpackJsonpstarswars||[]).push([[0],{106:function(e,t,c){"use strict";c.r(t);var n=c(28),r=c.n(n),a=c(63),s=c(31),i=c(0),o=c(121),j=c(127),u=c(75),l=c(72),d=c.n(l),b=c(82),h=c(123),O=c(120),p=c(5);var f=function(e){return function(t){var c=Object(i.useState)([]),n=Object(s.a)(c,2),r=n[0],o=n[1],j=Object(i.useState)(!1),l=Object(s.a)(j,2),f=l[0],x=l[1],m=Object(i.useState)(!1),v=Object(s.a)(m,2),g=v[0],k=v[1];Object(i.useEffect)((function(){t.category&&y(t.category)}),[t.category]);var w=function(e){o([].concat(Object(a.a)(r),[e])),x(!1)},y=function(){var e=Object(b.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,fetch("http://swapi.dev/api/".concat(t));case 4:if(!(c=e.sent).ok){e.next=12;break}return e.next=8,c.json();case 8:n=e.sent,w(n),e.next=13;break;case 12:throw new Error("Fetch request error");case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),x(!1),k(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return f?Object(p.jsx)(h.a,{active:!0,children:Object(p.jsx)(O.a,{inverted:!0,size:"big",style:{opacity:".8"},children:"Veuillez patienter..."})}):Object(p.jsx)(e,Object(u.a)(Object(u.a)({data:r,isLoading:f,isError:g},t),{},{cat:t.category}))}},x=c(126),m=c(124),v=function(e){var t=e.data;return Object(p.jsx)(x.a,{inverted:!0,style:{opacity:".8"},children:Object(p.jsx)(m.a,{selection:!0,inverted:!0,divided:!0,size:"big",children:t.map((function(e,t){return Object(p.jsx)(m.a.Item,{children:e.name||e.title},"name_".concat(t))}))})})},g=f((function(e){var t=e.data,c=e.cat,n=e.clicked;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.a,{fluid:!0,style:{width:"90vw"},children:Object(p.jsx)(j.a,{stackable:!0,centered:!0,columns:4,style:{height:"100vh",paddingTop:"20rem",justifyContent:"flex-start"},children:n.some((function(e){return e===c}))&&t.map((function(e,t){return Object(p.jsx)(j.a.Column,{children:Object(p.jsx)(v,{data:e.results,cat:e})},"".concat(e,"_").concat(t))}))})})})})),k=c(122),w=c(125),y=function(e){var t=e.fetch,c=function(e){t(e)};return Object(p.jsxs)(k.a,{secondary:!0,size:"massive",fixed:"top",stackable:!0,inverted:!0,style:{padding:"2rem 4rem 0"},children:[Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(w.a,{wrapped:!0,size:"small",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/1280px-Star_Wars_Yellow_Logo.svg.png",verticalAlign:"middle"})}),Object(p.jsxs)(k.a.Menu,{position:"right",children:[Object(p.jsx)(k.a.Item,{onClick:function(){return c("films")},children:"Films"}),Object(p.jsx)(k.a.Item,{onClick:function(){return c("planets")},children:"Plan\xe8tes"}),Object(p.jsx)(k.a.Item,{onClick:function(){return c("people")},children:"Personnes"}),Object(p.jsx)(k.a.Item,{onClick:function(){return c("starships")},children:"Vaisseaux"}),Object(p.jsx)(k.a.Item,{onClick:function(){return c("vehicles")},children:"Vehicules"}),Object(p.jsx)(k.a.Item,{onClick:function(){return c("species")},children:"Esp\xe8ces"})]})]})};var I=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(""),j=Object(s.a)(r,2),u=j[0],l=j[1];return Object(p.jsxs)(o.a,{fluid:!0,style:{minHeight:"100vw"},children:[Object(p.jsx)(y,{fetch:function(e){n([].concat(Object(a.a)(c),[e])),l(e)}}),Object(p.jsx)(g,{clicked:c,category:u})]})};c(105);r.a.render(Object(p.jsx)(I,{}),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.8361cb22.chunk.js.map