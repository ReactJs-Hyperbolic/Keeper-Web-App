(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(8),i=n.n(r),o=(n(14),n(9)),a=n(5),j=n(0);var u=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Keeper"})})};var l=function(){var t=(new Date).getFullYear();return Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{children:["Copyright \u24d2 ",t]})})};var s=function(t){return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("h1",{children:t.title}),Object(j.jsx)("p",{children:t.content}),Object(j.jsx)("button",{onClick:function(){t.onDelete(t.id)},children:"DELETE"})]})},b=n(4),d=n(7);var O=function(t){var e=Object(c.useState)({title:"",content:""}),n=Object(a.a)(e,2),r=n[0],i=n[1];function o(t){var e=t.target,n=e.name,c=e.value;i((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(b.a)({},n,c))}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{name:"title",value:r.title,onChange:o,placeholder:"Title"}),Object(j.jsx)("textarea",{name:"content",value:r.content,onChange:o,placeholder:"Take a note...",rows:"3"}),Object(j.jsx)("button",{onClick:function(e){t.onAdd(r),i({title:"",content:""}),e.preventDefault()},children:"Add"})]})})};var h=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1];function i(t){r((function(e){return e.filter((function(e,n){return n!==t}))}))}return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)(O,{onAdd:function(t){r((function(e){return[].concat(Object(o.a)(e),[t])}))}}),n.map((function(t,e){return Object(j.jsx)(s,{id:e,title:t.title,content:t.content,onDelete:i},e)})),Object(j.jsx)(l,{})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};i.a.render(Object(j.jsx)(h,{}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.1c74c5e4.chunk.js.map