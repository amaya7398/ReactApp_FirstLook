(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{21:function(t){t.exports=JSON.parse('[{"id":0,"title":"task one","description":"lorem ipsum","done":false},{"id":1,"title":"task 2","description":"lorem ipsum","done":false},{"id":2,"title":"task #3","description":"lorem ipsum","done":false}]')},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),c=n(20),r=n.n(c),i=(n(30),n(25)),o=n(4),d=n(5),p=n(7),l=n(6),u=n(13),j=n(2),b=(n(31),n(21)),h=(n(32),n(1)),O=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"StyleCompleted",value:function(){return{fontSize:"20px",color:this.props.task.done?"gray":"black",textDecoration:this.props.task.done?"line-through":"none"}}},{key:"render",value:function(){var t=this.props.task;return Object(h.jsxs)("div",{style:this.StyleCompleted(),children:[t.title," -",t.description," -",t.done," -",t.id,Object(h.jsx)("input",{type:"checkbox",onChange:this.props.checkDone.bind(this,t.id)}),Object(h.jsx)("button",{style:f,onClick:this.props.deleteTask.bind(this,t.id),children:"x"})]})}}]),n}(s.Component),f={fontSize:"18px",background:"#ea2027",color:"#fff",border:"none",padding:"10px 15px",borderRadius:"50%",cursor:"pointer"},x=O,m=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.tasks.map((function(e){return Object(h.jsx)(x,{task:e,deleteTask:t.props.deleteTask,checkDone:t.props.checkDone},e.id)}))}}]),n}(s.Component),k=n(22),v=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={title:"",description:""},t.onSubmit=function(e){t.props.addTask(t.state.title,t.state.description),e.preventDefault()},t.onChange=function(e){t.setState(Object(k.a)({},e.target.name,e.target.value))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsx)("input",{type:"text",name:"title",placeholder:"Write a Task",onChange:this.onChange,value:this.state.title}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{name:"description",placeholder:"Write a Description",onChange:this.onChange,value:this.state.description}),Object(h.jsx)("input",{type:"submit"})]})}}]),n}(s.Component),y=n(16),g=n.n(y),C=n(23),S=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"card text-center bg-dark mb-1 border border-info",children:Object(h.jsxs)("div",{className:"card-body text-light",children:[Object(h.jsx)("h4",{className:"card-title",children:this.props.title}),Object(h.jsx)("p",{className:"card-text text-secondary",children:this.props.body}),Object(h.jsx)("a",{href:"#!",className:"btn btn-outline-secondary ",children:"More information"})]})})}}]),n}(s.Component),T=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container d-flex justify-content-center align-items-center h-100",children:Object(h.jsx)("div",{className:"row",children:this.props.posts.map((function(t){return Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsx)(S,{title:t.title,body:t.body})},t.id)}))})})}}]),n}(s.Component),N=(n(35),function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={posts:[]},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(C.a)(g.a.mark((function t(){var e,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({posts:n});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Post",children:[Object(h.jsx)("h1",{children:"Posts"}),Object(h.jsx)(T,{posts:this.state.posts})]})}}]),n}(s.Component)),D=n.p+"static/media/logo.de34d485.svg",w=(n(36),function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:D,className:"App-logo",alt:"logo"}),Object(h.jsx)("p",{children:"React Template"})]})})}}]),n}(s.Component)),A=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={tasks:b},t.addTask=function(e,n){var s={title:e,description:n,id:t.state.tasks.length,done:!1};t.setState({tasks:[].concat(Object(i.a)(t.state.tasks),[s])})},t.deleteTask=function(e){var n=t.state.tasks.filter((function(t){return t.id!==e}));t.setState({tasks:n})},t.checkDone=function(e){var n=t.state.tasks.map((function(t){return t.id===e&&(t.done=!t.done),t}));t.setState({tasks:n})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(u.b,{to:"/home",children:"Home"}),"    ",Object(h.jsx)("br",{}),Object(h.jsx)(u.b,{to:"/posts",children:"Posts"}),"  ",Object(h.jsx)("br",{}),Object(h.jsx)(j.b,{exact:!0,path:"/",component:w}),Object(h.jsx)(j.b,{path:"/home",render:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{addTask:t.addTask}),Object(h.jsx)(m,{tasks:t.state.tasks,deleteTask:t.deleteTask,checkDone:t.checkDone})]})}}),Object(h.jsx)(j.b,{path:"/posts",component:N}),Object(h.jsx)(j.a,{to:"/"})]})})}}]),n}(s.Component),P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),s(t),a(t),c(t),r(t)}))};n(42);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),P()}},[[43,1,2]]]);
//# sourceMappingURL=main.5d9bd3db.chunk.js.map