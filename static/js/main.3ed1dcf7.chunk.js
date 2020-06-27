(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{18:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(11),s=a.n(r),i=a(12),c=a(13),o=a(14),u=a(8),m=a(17),h=a(16),p=a(15),y=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(p.a)(t[a],3),l=n[0],r=n[1],s=n[2];if(e[l]&&e[l]===e[r]&&e[l]===e[s])return e[l]}return null},d=a(27),f=function(e){return l.a.createElement(d.a,{outline:!0,color:"primary",style:{height:"3em",padding:"10px",width:"3em",fontWeight:"bold",fontSize:"4vw",color:"black"},className:"square",onClick:function(){return e.onClick()}},e.value)},E=a(28),g=function(e){function t(t){return l.a.createElement(f,{value:e.squares[t],onClick:function(){return e.onClick(t)}})}return l.a.createElement("div",null,l.a.createElement(E.a,null,t(0),t(1),t(2)),l.a.createElement(E.a,null,t(3),t(4),t(5)),l.a.createElement(E.a,null,t(6),t(7),t(8)))},v=a(29),b=a(30),x=a(31),O=a(32),k=function(e){return l.a.createElement("div",null,l.a.createElement(v.a,{fluid:!0},l.a.createElement(b.a,null,l.a.createElement("h1",{className:"display-3"},"Tic Tac Toe !"),l.a.createElement(x.a,null,l.a.createElement(O.a,null,l.a.createElement("p",{className:"lead"},"This is a simple game in which there is a 3X3 matrix and players fill it with 'X' or 'O', now as soon as any one symbol alligns along a row, column or diagonal, the player with that symbol wins")),l.a.createElement(O.a,null,l.a.createElement("p",null,"This game has a unique feature of time travel, player can revert to the previous steps and then change its move, if the matrox is completely filled and nobody wins, then it is considered as draw"),l.a.createElement("p",{className:"lead"},l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Tic-tac-toe",className:"btn btn-primary",role:"button"},"Learn More")))))))},N=a(33),C=a(34),w=function(e){var t=e.playerX,a=e.playerO,n=e.handleChange;return l.a.createElement("div",null,l.a.createElement(N.a,null,"Player for X: ",t),l.a.createElement(C.a,{name:"playerX",placeholder:"Name of Player X",onChange:n}),l.a.createElement(N.a,null,"Player for O: ",a),l.a.createElement(C.a,{name:"playerO",placeholder:"Name of Player O",onChange:n}))},X=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0,playerX:"X",playerO:"O"},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(i.a)({},a,n))}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();y(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"jumpTo",value:function(e){console.log("Jumped to move number ",e),this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=y(n.squares),s=a.map((function(e,a){var n=a?"Go to move #"+a:"Go to Game start";return l.a.createElement(d.a,{style:{margin:"5px"},block:!0,color:"success",key:a,onClick:function(){return t.jumpTo(a)}},n)}));return e=r?"O"===r?"Winner is : "+this.state.playerO:"Winner is : "+this.state.playerX:10!==this.state.history.length||r?"Next Player: "+(this.state.xIsNext?this.state.playerX:this.state.playerO):"This match is draw",l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement(b.a,{style:{paddingBottom:"25px"}},l.a.createElement(x.a,null,l.a.createElement(O.a,{xs:{size:6,offset:3},md:{size:6,offset:0}},l.a.createElement(g,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),l.a.createElement(O.a,{xs:"12",md:"6"},l.a.createElement("h3",{style:{marginBottom:"20px"}},e),l.a.createElement(x.a,null,l.a.createElement(O.a,null,l.a.createElement(w,{playerX:this.state.playerX,playerO:this.state.playerO,handleChange:this.handleChange})),l.a.createElement(O.a,null,s))))))}}]),a}(l.a.Component);a(25);s.a.render(l.a.createElement(X,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3ed1dcf7.chunk.js.map