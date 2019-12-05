(this["webpackJsonptrade-wars-static"]=this["webpackJsonptrade-wars-static"]||[]).push([[0],{43:function(e,t,a){e.exports=a(69)},48:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),s=a.n(i),o=(a(48),a(49),a(50),a(7)),c=a(8),l=a(11),m=a(9),d=a(10),h=a(24),u=a(21),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.routes;return Object.keys(e).map((function(t,a){return e[t].disabled?null:r.a.createElement(u.b,{key:a,exact:!0,path:e[t].path,component:e[t].component})}))}}]),t}(n.Component),p=a(5),g=a(70),v=a(71),b=a(73),f=a(72),k=(a(55),a(20)),O="ADD_PLAYERNAME",S="ADD_WEBSOCKET";function j(e){return{type:O,payload:e}}function N(e){return{type:S,payload:e}}var w=a(22),x=a.n(w);var E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={playerName:-1,socket:a.props.webSocket},a.tempPlayerName="",a.setPlayerName=a.setPlayerName.bind(Object(p.a)(a)),a.changeTempPlayerName=a.changeTempPlayerName.bind(Object(p.a)(a)),a.readyForRedirect=a.readyForRedirect.bind(Object(p.a)(a)),a.findCookieCallSign=a.findCookieCallSign.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.socket.onopen=function(){setInterval((function(){e.state.socket.send(JSON.stringify({command:"ping"}))}),1e4)},this.state.socket.onmessage=function(e){console.log(e)}}},{key:"changeTempPlayerName",value:function(e){this.tempPlayerName=e.target.value}},{key:"setPlayerName",value:function(){var e=this;""!==this.tempPlayerName&&this.setState({playerName:this.tempPlayerName},(function(){var t=e.tempPlayerName;x.a.set("callsign",t,{expires:5}),e.props.addPlayername(t)}))}},{key:"findCookieCallSign",value:function(){var e=this;void 0!==x.a.get("callsign")&&this.setState({playerName:this.tempPlayerName},(function(){var t=x.a.get("callsign");e.props.addPlayername(t),e.state.socket.onopen=function(){e.state.socket.send(JSON.stringify({command:"setCallsign",callsign:t})),setInterval((function(){e.state.socket.send(JSON.stringify({command:"ping"}))}),1e4)}}))}},{key:"readyForRedirect",value:function(){if(-1!==this.state.playerName)return r.a.createElement(u.a,{to:"/game"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"get-name-background"},this.findCookieCallSign(),this.readyForRedirect(),r.a.createElement("div",{className:"username-card"},r.a.createElement("h1",null,"Trade Wars!"),r.a.createElement(g.a,null,r.a.createElement(v.a,{onChange:this.changeTempPlayerName,placeholder:"Username"}),r.a.createElement(b.a,{addonType:"append"},r.a.createElement(f.a,{onClick:this.setPlayerName},"Play")))))}}]),t}(n.Component),C=Object(k.b)((function(e){return{webSocket:e.webSocket}}),(function(e){return{addPlayername:function(t){return e(j(t))},addWebSocket:function(t){return e(N(t))}}}))(E),P=(a(57),a(40)),W=a(23),M=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(W.Sprite,{image:"https://cdn1.iconfinder.com/data/icons/space-133/64/spaceship-planet-space-colony-city-512.png",x:this.props.x,y:this.props.y,scale:{x:.05,y:.05}})}}]),t}(n.Component);n.Component;var D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).xMove=0,a.yMove=0,a.state={gameWidth:a.props.gameWidth,gameHeight:a.props.gameHeight,playerLocation:{x:0,y:0},players:{}},a.handleKeyPress=a.handleKeyPress.bind(Object(p.a)(a)),a.moveX=a.moveX.bind(Object(p.a)(a)),a.moveY=a.moveY.bind(Object(p.a)(a)),a.convertCordsToGrid=a.convertCordsToGrid.bind(Object(p.a)(a)),a.drawPlayers=a.drawPlayers.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.findCookieCallSign(),this.props.webSocket.onopen=function(){setInterval((function(){e.props.webSocket.send(JSON.stringify({command:"ping"}))}),1e4)},this.props.webSocket.onmessage=function(t){var a=JSON.parse(t.data);"positionUpdate"===a.EventType&&a.Target!==x.a.get("callsign")&&e.setState({players:Object(P.a)({},a.Target,a.EventParams)})},this.setState({gameWidth:this.state.gameWidth-.012*this.state.gameWidth,gameHeight:this.state.gameHeight-.015*this.state.gameHeight},(function(){e.xMove=e.state.gameWidth/20,e.yMove=e.state.gameHeight/20,e.setState({playerLocation:{x:e.xMove,y:e.yMove-e.yMove/2},playerCords:{x:0,y:0}})})),window.addEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){switch(e.code){case"ArrowUp":this.moveY(-1*this.yMove,1);break;case"ArrowDown":this.moveY(this.yMove,-1);break;case"ArrowLeft":this.moveX(-1*this.xMove,1);break;case"ArrowRight":this.moveX(this.xMove,-1)}}},{key:"moveY",value:function(e,t){var a=this,n={y:this.state.playerLocation.y+e,x:this.state.playerLocation.x},r={y:this.state.playerCords.y+t,x:this.state.playerCords.x};n.y>=0&&n.y<=this.state.gameHeight&&this.setState({playerLocation:{x:n.x,y:n.y},playerCords:{x:r.x,y:r.y}},(function(){a.props.webSocket.send(JSON.stringify({command:"setOwnPosition",x:a.state.playerCords.x,y:a.state.playerCords.y}))}))}},{key:"moveX",value:function(e,t){var a=this,n={y:this.state.playerLocation.y,x:this.state.playerLocation.x+e},r={y:this.state.playerCords.y,x:this.state.playerCords.x+t};n.x+e>=0&&n.x<=this.state.gameWidth&&this.setState({playerLocation:{x:n.x,y:n.y},playerCords:{x:r.x,y:r.y}},(function(){a.props.webSocket.send(JSON.stringify({command:"setOwnPosition",x:a.state.playerCords.x,y:a.state.playerCords.y}))}))}},{key:"findCookieCallSign",value:function(){var e=this;void 0!==x.a.get("callsign")&&this.setState({playerName:this.tempPlayerName},(function(){var t=x.a.get("callsign");e.props.addPlayername(t),e.props.webSocket.onopen=function(){e.props.webSocket.send(JSON.stringify({command:"setCallsign",callsign:t})),setInterval((function(){e.props.webSocket.send(JSON.stringify({command:"ping"}))}),1e4),e.props.webSocket.send(JSON.stringify({command:"getAllPosition"}))}}))}},{key:"convertCordsToGrid",value:function(e,t){return{x:this.xMove*e*-1,y:this.yMove*t*-1}}},{key:"drawPlayers",value:function(){var e=this;return Object.keys(this.state.players).map((function(t,a){try{var n=e.convertCordsToGrid(e.state.players[t].x,e.state.players[t].y);return r.a.createElement(M,{key:t,x:n.x,y:n.y})}catch(i){}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W.Stage,{width:this.state.gameWidth,height:this.state.gameHeight,options:{backgroundColor:1909296}},r.a.createElement(W.Graphics,{x:0,y:0}),r.a.createElement(M,{x:this.state.playerLocation.x,y:this.state.playerLocation.y}),this.drawPlayers()))}}]),t}(n.Component),H=Object(k.b)((function(e){return{webSocket:e.webSocket}}),(function(e){return{addPlayername:function(t){return e(j(t))},addWebSocket:function(t){return e(N(t))}}}))(D),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state=a.props.parentDivDimensions,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({gameWidth:this.state.gameWidth-.012*this.state.gameWidth,gameHeight:this.state.gameHeight-.015*this.state.gameHeight})}},{key:"render",value:function(){return r.a.createElement(H,{gameWidth:this.state.gameWidth,gameHeight:this.state.gameHeight})}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={gameWidth:-1,gameHeight:-1},a.isPlayernameSet=a.isPlayernameSet.bind(Object(p.a)(a)),a.renderGameStage=a.renderGameStage.bind(Object(p.a)(a)),a.GameDiv=r.a.createRef(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isPlayernameSet",value:function(){if(-1===this.props.playerName)return r.a.createElement(u.a,{to:"/"})}},{key:"componentDidMount",value:function(){this.setState({gameWidth:this.GameDiv.current.offsetWidth,gameHeight:this.GameDiv.current.offsetHeight})}},{key:"renderGameStage",value:function(){if(-1!==this.state.gameWidth&&-1!==this.state.gameHeight)return r.a.createElement(G,{parentDivDimensions:this.state})}},{key:"render",value:function(){return r.a.createElement("div",{className:"game-background"},this.isPlayernameSet(),r.a.createElement("h1",{className:"game-title"},"Welcome ",r.a.createElement("u",null,r.a.createElement("b",null,this.props.playerName))," to Trade Wars"),r.a.createElement("div",{className:"game-window-container"},r.a.createElement("div",{ref:this.GameDiv,className:"render-container"},this.renderGameStage()),r.a.createElement("div",{className:"game-status-container"},r.a.createElement("div",{className:"game-cargo-container"},r.a.createElement("p",{className:"game-status-title"},"Cargo")),r.a.createElement("div",{className:"game-status-text-container"},r.a.createElement("p",{className:"game-status-title"},"Messages")))))}}]),t}(n.Component),L={GetName:{path:"/",component:C,disabled:!1},MainGame:{path:"/game",component:T=Object(k.b)((function(e){return{playerName:e.playerName}}))(T),disabled:!1}},J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(y,{routes:L}))}}]),t}(n.Component);var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(30),Y={playerName:-1,webSocket:new WebSocket("wss://trade-wars-backend.herokuapp.com/gameServer")};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object.assign({},e,{playerName:e.playerName=t.payload});case S:return Object.assign({},e,{webSocket:e.webSocket=t.payload})}return e},K=Object(R.b)(I);s.a.render(r.a.createElement(k.a,{store:K},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d313fe25.chunk.js.map