(this["webpackJsonpgithub-job-list"]=this["webpackJsonpgithub-job-list"]||[]).push([[0],{168:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(20),s=a.n(r),i=a(27),o=a(9),j=a(16),l=a(17),b=a.n(l),u="make-request",d="get-data",h="error",O="update-has-next-page",x="https://jobs.github.com/positions.json";function m(e,t){switch(t.type){case u:return{loading:!0,jobs:[]};case d:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case h:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case O:return Object(o.a)(Object(o.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}}var p=a(172),g=a(175),f=a(170),y=a(171),v=a(173),k=a(39),N=a.n(k),C=a(2);function P(e){var t=e.job,a=Object(c.useState)(!1),n=Object(j.a)(a,2),r=n[0],s=n[1];return Object(C.jsx)(g.a,{className:"mb-3",children:Object(C.jsxs)(g.a.Body,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(g.a.Title,{children:[t.title," - ",Object(C.jsx)("span",{className:"text-muted font-weight-light",children:t.company})]}),Object(C.jsx)(g.a.Subtitle,{className:"text-muted mb-2",children:new Date(t.created_at).toLocaleDateString()}),Object(C.jsx)(f.a,{variant:"secondary",className:"mr-2",children:t.type}),Object(C.jsx)(f.a,{variant:"secondary",children:t.location}),Object(C.jsx)("div",{style:{wordBreak:"break-all"},children:Object(C.jsx)(N.a,{source:t.how_to_apply})})]}),Object(C.jsx)("img",{className:"d-none d-md-block",height:"50",alt:t.company,src:t.company_logo})]}),Object(C.jsx)(g.a.Text,{children:Object(C.jsx)(y.a,{onClick:function(){return s((function(e){return!e}))},variant:"primary",children:r?"Hide Details":"View Details"})}),Object(C.jsx)(v.a,{in:r,children:Object(C.jsx)("div",{className:"mt-4",children:Object(C.jsx)(N.a,{source:t.description})})})]})})}var w=a(176);function T(e){var t=e.page,a=e.setPage,c=e.hasNextPage;function n(e){a((function(t){return t+e}))}return Object(C.jsxs)(w.a,{children:[1!==t&&Object(C.jsx)(w.a.Prev,{onClick:function(){return n(-1)}}),1!==t&&Object(C.jsx)(w.a.Item,{onClick:function(){return a(1)},children:"1"}),t>2&&Object(C.jsx)(w.a.Ellipsis,{}),t>2&&Object(C.jsx)(w.a.Item,{onClick:function(){return n(-1)},children:t-1}),Object(C.jsx)(w.a.Item,{active:!0,children:t}),c&&Object(C.jsx)(w.a.Item,{onClick:function(){return n(1)},children:t+1}),c&&Object(C.jsx)(w.a.Next,{onClick:function(){return n(1)}})]})}var S=a(174),_=a(66);function D(e){var t=e.params,a=e.onParamChange;return Object(C.jsx)(S.a,{className:"mb-4",children:Object(C.jsxs)(S.a.Row,{className:"align-items-end",children:[Object(C.jsxs)(S.a.Group,{as:_.a,children:[Object(C.jsx)(S.a.Label,{children:"Description"}),Object(C.jsx)(S.a.Control,{onChange:a,value:t.description,name:"description",type:"text"})]}),Object(C.jsxs)(S.a.Group,{as:_.a,children:[Object(C.jsx)(S.a.Label,{children:"Location"}),Object(C.jsx)(S.a.Control,{onChange:a,value:t.location,name:"location",type:"text"})]}),Object(C.jsx)(S.a.Group,{as:_.a,xs:"auto",className:"ml-2",children:Object(C.jsx)(S.a.Check,{OnChange:a,value:t.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"})})]})})}var I=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(1),s=Object(j.a)(r,2),l=s[0],g=s[1],f=function(e,t){var a=Object(c.useReducer)(m,{jobs:[],loading:!0}),n=Object(j.a)(a,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var a=b.a.CancelToken.source();s({type:u}),b.a.get(x,{cancelToken:a.token,params:Object(o.a)({markdown:!0,page:t},e)}).then((function(e){s({type:d,payload:{jobs:e.data}})})).catch((function(e){b.a.isCancel(e)||s({type:h,payload:{error:e}})}));var c=b.a.CancelToken.source();return b.a.get(x,{cancelToken:c.token,params:Object(o.a)({markdown:!0,page:t+1},e)}).then((function(e){s({type:O,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){b.a.isCancel(e)||s({type:h,payload:{error:e}})})),function(){a.cancel(),c.cancel()}}),[e,t]),r}(a,l),y=f.jobs,v=f.loading,k=f.error,N=f.hasNextPage;return Object(C.jsxs)(p.a,{className:"my-4",children:[Object(C.jsx)("h1",{className:"mb-4",children:"Github Jobs"}),Object(C.jsx)(D,{params:a,onParamChange:function(e){var t=e.target.name,a=e.target.value;g(1),n((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t,a))}))}}),Object(C.jsx)(T,{page:l,setPage:g,hasNextPage:N}),v&&Object(C.jsx)("h1",{children:"Loading..."}),k&&Object(C.jsx)("h1",{children:"Error. Try Refreshing."}),y.map((function(e){return Object(C.jsx)(P,{job:e},e.id)})),Object(C.jsx)(T,{page:l,setPage:g,hasNextPage:N})]})};s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.06aa2095.chunk.js.map