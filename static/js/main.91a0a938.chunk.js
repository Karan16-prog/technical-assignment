(this["webpackJsonptechnical-assignment"]=this["webpackJsonptechnical-assignment"]||[]).push([[0],{162:function(e,t,a){},163:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(24),c=a.n(r),l=(a(162),a(3)),s=a(108),d=a(8),o=(a(163),a(259)),j=a(263),u=a(264),m=a(265),h=a(267),b=a(271),O=a(125),x=a(111),p=a(2);function v(e){var t=Object(i.useState)(""),a=Object(d.a)(t,2),n=a[0],r=a[1],c=[{id:1,values:"First Name",data:"".concat(e.data.FirstName)},{id:2,values:"Last name",data:"".concat(e.data.LastName)},{id:3,values:"Email",data:"".concat(e.data.Email)}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x.a,{style:{position:"relative",top:"10px",width:"90%"},label:"Search",variant:"outlined",onChange:function(e){r(e.target.value)}}),Object(p.jsx)("div",{style:{height:"100%",width:"90%",margin:"0 auto",position:"relative",top:30,textAlign:"center"},children:Object(p.jsx)(O.a,{xs:12,rows:function(e,t){return 0===t.length?e:e.filter((function(e){return e.values.includes(t)||e.data.includes(t)}))}(c,n),columns:[{field:"id",headerName:"ID",width:90},{field:"values",headerName:"Values",width:150},{field:"data",headerName:"Data",width:150}],pageSize:3,rowsPerPageOptions:[5],disableSelectionOnClick:!0,style:{width:"100%"},components:{NoRowsOverlay:function(){return Object(p.jsx)("div",{style:{positon:"relative",top:50},children:"Custom Filter returns no result"})}}})})]})}var f=Object.freeze({FirstName:"",LastName:"",Email:""});var g=function(){var e=Object(i.useState)(f),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(!1),c=Object(d.a)(r,2),O=c[0],x=c[1],g=function(e){n(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},e.target.name,e.target.value.trim())))};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(o.a,{style:{maxWidth:500,margin:"0 auto",padding:"25px 10px"},children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(j.a,{gutterBottom:!0,variant:"h5",children:"Please Fill the Form"}),Object(p.jsx)("form",{children:Object(p.jsxs)(u.a,{container:!0,spacing:1,children:[Object(p.jsx)(u.a,{xs:12,sm:6,item:!0,children:Object(p.jsx)(m.a,{label:"FirstName",name:"FirstName",placeholder:"Enter First Name",variant:"outlined",onChange:g,fullWidth:!0,required:!0})}),Object(p.jsx)(u.a,{xs:12,sm:6,item:!0,children:Object(p.jsx)(m.a,{label:"LastName",name:"LastName",placeholder:"Enter Last Name",variant:"outlined",onChange:g,fullWidth:!0,required:!0})}),Object(p.jsx)(u.a,{xs:12,item:!0,children:Object(p.jsx)(m.a,{type:"email",label:"Email",name:"Email",placeholder:"Enter Email",variant:"outlined",onChange:g,fullWidth:!0,required:!0})}),Object(p.jsx)(u.a,{xs:12,item:!0,children:Object(p.jsx)(h.a,{type:"submit",variant:"contained",onClick:function(e){e.preventDefault(),console.log(a);x(!0)},color:"primary",fullWidth:!0,children:"Submit"})})]})})]})}),O&&Object(p.jsx)(v,{data:a})]})};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.91a0a938.chunk.js.map