(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"BOO",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959139_249px.jpg?1434263202"},{id:2,name:"Sulley",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959148_249px.jpg?1434263202"},{id:3,name:"Mike",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959143_249px.jpg?1434263202"},{id:4,name:"Roz",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959146_249px.jpg?1434263202"},{id:5,name:"Celia",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959140_249px.jpg?1434263202"},{id:6,name:"Randall",image:"https://assets.metrolatam.com/mx/2013/02/21/monstersuniversitypersonajeshardscrabble-1200x800.jpg"},{id:7,name:"fungus",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959149_249px.jpg?1434263202"},{id:8,name:"Bagel doge",image:"https://vignette.wikia.nocookie.net/cinemasins/images/d/da/Johnny.png/revision/latest?cb=20170131203232"},{id:9,name:"Smity",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959144_249px.jpg?1434263202"},{id:10,name:"Scott",image:"https://assets.metrolatam.com/mx/2013/02/21/monstersuniversitypersonajessquishy-1200x800.jpg"},{id:11,name:"Yeti",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959141_249px.jpg?1434263202"},{id:12,name:"George Sanderson",image:"https://st-listas.20minutos.es/images/2013-03/357802/3959142_249px.jpg?1434263202"}]},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(3),o=n.n(s),r=(n(15),n(4)),c=n(5),l=n(7),m=n(6),u=n(8),g=(n(16),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),d=(n(17),function(e){return i.a.createElement("ul",{className:"nav nav-fill"},i.a.createElement("img",{src:"https://www.logolynx.com/images/logolynx/c5/c571df5228a873a78445bf7b0fcf23d0.png",width:"200px",height:"10px",id:"logo",class:"d-inline-block align-top",alt:""}),i.a.createElement("li",{className:"nav-item nav-text text-right"},"score: ",e.currentScore," | high score: ",e.highScore))}),h=function(e){return i.a.createElement("div",null,i.a.createElement("h5",{className:"text-center"},e.note))},p=function(e){return i.a.createElement("div",{className:"container"},e.children)},f=(n(18),function(e){return i.a.createElement("div",{className:"card mx-auto"},i.a.createElement("a",{href:!0,onClick:function(){return e.cardClick(e.id)}},i.a.createElement("img",{alt:e.name,src:e.image})))}),v=n(1),w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={cards:v,guessedCards:v,currentScore:0,highScore:0,note:"Don't click the same photo twice or you lose."},n.sortCards=function(){v.sort(function(e,t){return.5-Math.random()})},n.cardClick=function(e){if(console.log(n.state.cards),console.log(n.state.guessedCards),void 0===n.state.guessedCards.find(function(t){return t.id===e}))n.setState({guessedCards:v,highScore:n.state.currentScore>n.state.highScore?n.state.currentScore:n.state.highScore,currentScore:0,note:"Click a photo to start again"});else{var t=n.state.guessedCards.filter(function(t){return t.id!==e});n.setState({guessedCards:t,currentScore:n.state.currentScore+1,note:"Correct!!"})}n.sortCards()},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(d,{currentScore:this.state.currentScore,highScore:this.state.highScore}),i.a.createElement(h,{note:this.state.note}),i.a.createElement(p,null,this.state.cards.map(function(t){return i.a.createElement(f,{cardClick:e.cardClick,id:t.id,key:t.id,name:t.name,image:t.image})})))}}]),t}(a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.445a9738.chunk.js.map