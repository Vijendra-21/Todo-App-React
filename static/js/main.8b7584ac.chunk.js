(this.webpackJsonpreact_application=this.webpackJsonpreact_application||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),s=c.n(i),r=(c(13),c(8)),l=c(6),d=c(3),o=(c(14),c(0)),j=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(function(){var e=localStorage.getItem("mytodolist");return e?JSON.parse(e):[]}()),s=Object(d.a)(i,2),j=s[0],b=s[1],u=Object(n.useState)(""),f=Object(d.a)(u,2),m=f[0],O=f[1],h=Object(n.useState)(!1),x=Object(d.a)(h,2),p=x[0],v=x[1],g=function(){if(c)if(c&&p)b(j.map((function(e){return e.id===m?Object(l.a)(Object(l.a)({},e),{},{name:c}):e}))),a(""),O(null),v(!1);else{var e={id:(new Date).getTime().toString(),name:c};b([].concat(Object(r.a)(j),[e])),a("")}else alert("plz fill the data")};return Object(n.useEffect)((function(){localStorage.setItem("mytodolist",JSON.stringify(j))}),[j]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main-div",children:Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:"./images/todo.svg",alt:"todologo"}),Object(o.jsx)("figcaption",{children:"Add Your List Here \u270c"})]}),Object(o.jsxs)("div",{className:"addItems",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u270d Add Item",className:"form-control",value:c,onChange:function(e){return a(e.target.value)}}),p?Object(o.jsx)("i",{className:"far fa-edit add-btn",onClick:g}):Object(o.jsx)("i",{className:"fa fa-plus add-btn",onClick:g})]}),Object(o.jsx)("div",{className:"showItems",children:j.map((function(e){return Object(o.jsxs)("div",{className:"eachItem",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("div",{className:"todo-btn",children:[Object(o.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=j.find((function(t){return t.id===e}));a(t.name),O(e),v(!0)}(e.id)}}),Object(o.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=j.filter((function(t){return t.id!==e}));b(t)}(e.id)}})]})]},e.id)}))}),Object(o.jsx)("div",{className:"showItems",children:Object(o.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:Object(o.jsx)("span",{children:" CHECK LIST"})})})]})})})},b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j,{})})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8b7584ac.chunk.js.map