(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{16:function(e,t,a){e.exports=a(24)},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(8),i=a.n(c),r=(a(21),a(22),a(9)),s=a(10),o=a(13),u=a(14),m=a(26);function p(e){var t="function"===e.type?"btn-function":"expression"===e.type?"btn-expression":"number"===e.type&&"0"===e.value?"btn-number btn-zero":"btn-number";return l.a.createElement("button",{className:t,onClick:e.onClick,value:e.value},e.value)}function d(e){return l.a.createElement(l.a.Fragment,null,e.display)}var h=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClick=function(e){"+/-"===e.target.value?n.setState({display:"-"===n.state.display[0]?n.state.display.slice(1):"-".concat(n.state.display)}):"%"===e.target.value?n.setState({display:Object(m.a)("(".concat(n.state.display,")/100"))}):n.setState({display:"0"===n.state.display?e.target.value:n.state.display+e.target.value,ac:"C"})},n.allClear=function(e){n.setState({display:"0",ac:"AC"})},n.equal=function(e){var t=n.state.display.replace(/X/gi,"*");n.setState({display:Object(m.a)(t)})},n.state={ac:"AC",display:"0",expression:Array(3).fill(null)},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"row display"},l.a.createElement(d,{display:this.state.display})),l.a.createElement("div",{className:"row"},l.a.createElement(p,{onClick:this.allClear,value:this.state.ac,type:"function"}),l.a.createElement(p,{onClick:this.handleClick,value:"+/-",type:"function"}),l.a.createElement(p,{onClick:this.handleClick,value:"%",type:"function"}),l.a.createElement(p,{onClick:this.handleClick,value:"/",type:"expression"})),l.a.createElement("div",{className:"row"},l.a.createElement(p,{onClick:this.handleClick,value:7,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:8,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:9,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:"x",type:"expression"})),l.a.createElement("div",{className:"row"},l.a.createElement(p,{onClick:this.handleClick,value:4,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:5,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:6,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:"-",type:"expression"})),l.a.createElement("div",{className:"row"},l.a.createElement(p,{onClick:this.handleClick,value:1,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:2,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:3,type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:"+",type:"expression"})),l.a.createElement("div",{className:"row"},l.a.createElement(p,{onClick:this.handleClick,value:"0",type:"number"}),l.a.createElement(p,{onClick:this.handleClick,value:".",type:"number"}),l.a.createElement(p,{onClick:this.equal,value:"=",type:"expression"})))}}]),a}(n.Component);function v(){return l.a.createElement("div",{className:"container"},l.a.createElement(h,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.401e4ca7.chunk.js.map