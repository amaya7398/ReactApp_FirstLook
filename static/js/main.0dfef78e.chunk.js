(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{21:function(t){t.exports=JSON.parse('[{"id":0,"title":"task one","description":"lorem ipsum","done":false},{"id":1,"title":"task 2","description":"lorem ipsum","done":false},{"id":2,"title":"task #3","description":"lorem ipsum","done":false}]')},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},35:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),c=n(20),r=n.n(c),i=(n(30),n(25)),o=n(6),p=n(7),u=n(9),d=n(8),l=n(13),j=n(2),h=(n(31),n(21)),b=(n(32),n(1)),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"StyleCompleted",value:function(){return{fontSize:"20px",color:this.props.task.done?"gray":"black",textDecoration:this.props.task.done?"line-through":"none"}}},{key:"render",value:function(){var t=this.props.task;return Object(b.jsxs)("div",{style:this.StyleCompleted(),children:[t.title," -",t.description," -",t.done," -",t.id,Object(b.jsx)("input",{type:"checkbox",onChange:this.props.checkDone.bind(this,t.id)}),Object(b.jsx)("button",{style:f,onClick:this.props.deleteTask.bind(this,t.id),children:"x"})]})}}]),n}(s.Component),f={fontSize:"18px",background:"#ea2027",color:"#fff",border:"none",padding:"10px 15px",borderRadius:"50%",cursor:"pointer"},k=O,x=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return this.props.tasks.map((function(e){return Object(b.jsx)(k,{task:e,deleteTask:t.props.deleteTask,checkDone:t.props.checkDone},e.id)}))}}]),n}(s.Component),v=n(22),m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={title:"",description:""},t.onSubmit=function(e){t.props.addTask(t.state.title,t.state.description),e.preventDefault()},t.onChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t}return Object(p.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsx)("input",{type:"text",name:"title",placeholder:"Write a Task",onChange:this.onChange,value:this.state.title}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{name:"description",placeholder:"Write a Description",onChange:this.onChange,value:this.state.description}),Object(b.jsx)("input",{type:"submit"})]})}}]),n}(s.Component),y=n(16),g=n.n(y),C=n(23),S=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={posts:[]},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(C.a)(g.a.mark((function t(){var e,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({posts:n});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Posts"}),this.state.posts.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:t.title}),Object(b.jsx)("p",{children:t.body})]},t.id)}))]})}}]),n}(s.Component),T=n.p+"static/media/logo.de34d485.svg",D=(n(35),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:T,className:"App-logo",alt:"logo"}),Object(b.jsx)("p",{children:"React Template"})]})})}}]),n}(s.Component)),w=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={tasks:h},t.addTask=function(e,n){var s={title:e,description:n,id:t.state.tasks.length,done:!1};t.setState({tasks:[].concat(Object(i.a)(t.state.tasks),[s])})},t.deleteTask=function(e){var n=t.state.tasks.filter((function(t){return t.id!==e}));t.setState({tasks:n})},t.checkDone=function(e){var n=t.state.tasks.map((function(t){return t.id===e&&(t.done=!t.done),t}));t.setState({tasks:n})},t}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(l.b,{to:"/home",children:"Home"}),"    ",Object(b.jsx)("br",{}),Object(b.jsx)(l.b,{to:"/posts",children:"Posts"}),Object(b.jsx)(j.b,{exact:!0,path:"/",component:D}),Object(b.jsx)(j.b,{path:"/home",render:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{addTask:t.addTask}),Object(b.jsx)(x,{tasks:t.state.tasks,deleteTask:t.deleteTask,checkDone:t.checkDone})]})}}),Object(b.jsx)(j.b,{path:"/posts",component:S}),Object(b.jsx)(j.a,{to:"/"})]})})}}]),n}(s.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),s(t),a(t),c(t),r(t)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),A()}},[[41,1,2]]]);
//# sourceMappingURL=main.0dfef78e.chunk.js.map