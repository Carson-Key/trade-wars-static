(this["webpackJsonptrade-wars-static"]=this["webpackJsonptrade-wars-static"]||[]).push([[0],{41:function(e,t,a){e.exports=a(67)},46:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),c=a.n(r),s=(a(46),a(47),a(48),a(7)),o=a(8),l=a(10),m=a(9),u=a(11),h=a(23),p=a(20),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.routes;return Object.keys(e).map((function(t,a){return e[t].disabled?null:i.a.createElement(p.b,{key:a,exact:!0,path:e[t].path,component:e[t].component})}))}}]),t}(n.Component),g=a(5),y=a(69),b=a(70),f=a(72),v=a(71),j=(a(53),a(22)),O="ADD_PLAYERNAME";var E=a(30),N=a.n(E);var k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={playerName:-1},a.tempPlayerName="",a.setPlayerName=a.setPlayerName.bind(Object(g.a)(a)),a.changeTempPlayerName=a.changeTempPlayerName.bind(Object(g.a)(a)),a.readyForRedirect=a.readyForRedirect.bind(Object(g.a)(a)),a.findCookieCallSign=a.findCookieCallSign.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"changeTempPlayerName",value:function(e){this.tempPlayerName=e.target.value}},{key:"setPlayerName",value:function(){var e=this;""!==this.tempPlayerName&&this.setState({playerName:this.tempPlayerName},(function(){var t=e.tempPlayerName;N.a.set("callsign",t,{expires:5}),e.props.addPlayername(t)}))}},{key:"findCookieCallSign",value:function(){var e=this;void 0!==N.a.get("callsign")&&this.setState({playerName:this.tempPlayerName},(function(){var t=N.a.get("callsign");e.props.addPlayername(t)}))}},{key:"readyForRedirect",value:function(){if(-1!==this.state.playerName)return i.a.createElement(p.a,{to:"/game"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"get-name-background"},this.findCookieCallSign(),this.readyForRedirect(),i.a.createElement("div",{className:"username-card"},i.a.createElement("h1",null,"Trade Wars!"),i.a.createElement(y.a,null,i.a.createElement(b.a,{onChange:this.changeTempPlayerName,placeholder:"Username"}),i.a.createElement(f.a,{addonType:"append"},i.a.createElement(v.a,{onClick:this.setPlayerName},"Play")))))}}]),t}(n.Component),P=Object(j.b)(null,(function(e){return{addPlayername:function(t){return e({type:O,payload:t})}}}))(k),w=(a(55),a(21)),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(w.Sprite,{image:"https://cdn1.iconfinder.com/data/icons/space-133/64/spaceship-planet-space-colony-city-512.png",x:this.props.x,y:this.props.y,scale:{x:.05,y:.05}})}}]),t}(n.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(w.Sprite,{image:"https://www.gfxmag.com/wp-content/uploads/2017/01/satellite-emoji-vector-icon-1.png",x:this.props.x,y:this.props.y,scale:{x:.5,y:.5}})}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={gameWidth:a.props.gameWidth,gameHeight:a.props.gameHeight,playerLocation:{x:0,y:0}},a.updatePlayerLocation=a.updatePlayerLocation.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({gameWidth:this.state.gameWidth-.012*this.state.gameWidth,gameHeight:this.state.gameHeight-.015*this.state.gameHeight})}},{key:"updatePlayerLocation",value:function(e){var t=e.data.global;this.setState({playerLocation:t})}},{key:"render",value:function(){var e=this;return i.a.createElement(w.Stage,{width:this.state.gameWidth,height:this.state.gameHeight,options:{backgroundColor:1909296}},i.a.createElement(w.Graphics,{x:0,y:0,interactive:!0,pointerdown:function(t){e.updatePlayerLocation(t)},draw:function(t){t.beginFill(1909296),t.drawRect(0,0,e.state.gameWidth,e.state.gameHeight),t.endFill()}}),i.a.createElement(W,{x:100,y:100}),i.a.createElement(S,{x:this.state.playerLocation.x,y:this.state.playerLocation.y}))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state=a.props.parentDivDimensions,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({gameWidth:this.state.gameWidth-.012*this.state.gameWidth,gameHeight:this.state.gameHeight-.015*this.state.gameHeight})}},{key:"render",value:function(){return i.a.createElement(C,{gameWidth:this.state.gameWidth,gameHeight:this.state.gameHeight})}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={gameWidth:-1,gameHeight:-1},a.isPlayernameSet=a.isPlayernameSet.bind(Object(g.a)(a)),a.renderGameStage=a.renderGameStage.bind(Object(g.a)(a)),a.GameDiv=i.a.createRef(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"isPlayernameSet",value:function(){if(-1===this.props.playerName)return i.a.createElement(p.a,{to:"/"})}},{key:"componentDidMount",value:function(){this.setState({gameWidth:this.GameDiv.current.offsetWidth,gameHeight:this.GameDiv.current.offsetHeight})}},{key:"renderGameStage",value:function(){if(-1!==this.state.gameWidth&&-1!==this.state.gameHeight)return i.a.createElement(x,{parentDivDimensions:this.state})}},{key:"render",value:function(){return i.a.createElement("div",{className:"game-background"},this.isPlayernameSet(),i.a.createElement("h1",{className:"game-title"},"Welcome ",i.a.createElement("u",null,i.a.createElement("b",null,this.props.playerName))," to Trade Wars"),i.a.createElement("div",{className:"game-window-container"},i.a.createElement("div",{ref:this.GameDiv,className:"render-container"},this.renderGameStage()),i.a.createElement("div",{className:"game-status-container"},i.a.createElement("div",{className:"game-cargo-container"},i.a.createElement("p",{className:"game-status-title"},"Cargo")),i.a.createElement("div",{className:"game-status-text-container"},i.a.createElement("p",{className:"game-status-title"},"Messages")))))}}]),t}(n.Component),D={GetName:{path:"/",component:P,disabled:!1},MainGame:{path:"/game",component:H=Object(j.b)((function(e){return{playerName:e.playerName}}))(H),disabled:!1}},G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(d,{routes:D}))}}]),t}(n.Component);var L=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("main",null,i.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(29),T={playerName:-1};var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object.assign({},e,{playerName:e.playerName=t.payload})}return e},M=Object(R.b)(F);c.a.render(i.a.createElement(j.a,{store:M},i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ec67ae36.chunk.js.map