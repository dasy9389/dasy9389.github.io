(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{131:function(t,e,a){},132:function(t,e,a){},133:function(t,e,a){},435:function(t,e,a){},437:function(t,e,a){"use strict";a.r(e);var s=a(6),n=a.n(s),c=a(16),i=a.n(c),r=(a(131),a(32)),o=a(33),d=a(35),l=a(34),j=(a(132),a(133),a(134),a(435),a(1)),u=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={data:t.data},s}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e="";return this.state.data.done||(e=Object(j.jsx)("img",{src:"/reactjs/todolist/assets/checked.png",alt:"Ho\xe0n th\xe0nh",width:"30",style:{cursor:"pointer"},title:"B\u1ea5m \u0111\u1ec3 ho\xe0n th\xe0nh",onClick:function(){return t.props.completeTask(t.props.data.id)}})),Object(j.jsxs)("div",{className:"App aligned",children:[e,"\xa0",Object(j.jsx)("img",{src:"/reactjs/todolist/assets/delete.png",alt:"X\xf3a",width:"30",style:{cursor:"pointer"},title:"B\u1ea5m \u0111\u1ec3 x\xf3a task",onClick:function(){return t.props.deleteTask(t.props.data.id)}}),"\xa0\xa0",Object(j.jsx)("span",{className:this.state.data.done?"done":"",children:this.state.data.name})]})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return{data:t.data}}}]),a}(n.a.Component),h=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).myTaskChangeHandler=function(t){s.setState({taskName:t.target.value})},s.addTask=function(){if(""!==s.state.taskName){var t=s.state.tasks.length,e=s.state.taskName;s.state.tasks.push({id:t,name:e,done:!1}),s.setState({taskName:""})}},s.deleteTask=function(t){var e=s.state.tasks.filter((function(e){return e.id!==t}));s.setState({tasks:e})},s.completeTask=function(t){var e=s.state.tasks;e.forEach((function(e){e.id===t&&(e.done=!0)})),s.setState({tasks:e})},s.state={todoListName:t.name,taskName:"",tasks:[]},s}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("br",{}),this.state.todoListName,Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"aligned",children:[Object(j.jsx)("img",{src:"/reactjs/todolist/assets/add.png",alt:"Add Task",width:"35",style:{cursor:"pointer"},title:"B\u1ea5m \u0111\u1ec3 th\xeam task",onClick:function(){return t.addTask()}}),"\xa0",Object(j.jsx)("input",{type:"text",value:this.state.taskName,onChange:this.myTaskChangeHandler})]}),Object(j.jsx)("ul",{style:{padding:"0"},children:this.state.tasks.map((function(e,a){return Object(j.jsx)(u,{ref:"todo",data:e,deleteTask:t.deleteTask,completeTask:t.completeTask},a)}))})]})}}]),a}(n.a.Component),b=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={taskName:"",tasks:[]},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("table",{border:"1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Nhiem vu 1"}),Object(j.jsx)("th",{children:"Nhiem vu 2"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{style:{verticalAlign:"top"},children:[Object(j.jsx)("td",{children:Object(j.jsx)(h,{name:"Di cho"})}),Object(j.jsx)("td",{children:Object(j.jsx)(h,{name:"Di shopping"})})]})})]})})}}]),a}(n.a.Component),p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,438)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),s(t),n(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[437,1,2]]]);
//# sourceMappingURL=main.e359b6ea.chunk.js.map