(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(17),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),m=(n(19),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"main tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))}),d=function(e){var t=e.robots;return r.a.createElement("div",{className:"main2"},t.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})}))},b=(n(21),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"box"},r.a.createElement("input",{className:"ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))}),f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"80vh"}},e.children)},g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong"):this.props.children}}]),t}(a.Component),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange})),r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(d,{robots:a})))):r.a.createElement("h1",null,"Loading")}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}}]),t}(r.a.Component),E=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,26)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})};n(23);o.a.createRoot(document.getElementById("root")).render(r.a.createElement("div",null,r.a.createElement(p,null))),E()},8:function(e,t,n){e.exports=n(25)}},[[8,3,2]]]);
//# sourceMappingURL=main.b14130c0.chunk.js.map