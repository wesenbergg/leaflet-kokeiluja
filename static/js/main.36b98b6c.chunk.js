(this["webpackJsonpleaflet-kokeiluja"]=this["webpackJsonpleaflet-kokeiluja"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),c=a.n(l),o=(a(25),a(7)),i=a(33),s=a(35),m=a(9),u=a(10),p=a(15),h=a(14),d=a(34),f=a(36),E=a(16),b=a(0),g=a.n(b),w=(a(26),a(31),a(6)),j=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"createLeafletElement",value:function(){console.log("Routing: called");var e=this.props.map;return g.a.Routing.control({waypoints:[g.a.latLng(60.21825196984328,25.05910387617357),g.a.latLng(60.21825196984328,25.05910387617357)],routeWhileDragging:!0,geocoder:g.a.Control.Geocoder.nominatim()}).addTo(e.leafletElement).getPlan()}}]),a}(E.a),v=Object(w.b)(j),k=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={lat:60.21825196984328,lng:25.05910387617357,zoom:15},e.saveMap=function(t){e.map=t},e}return Object(u.a)(a,[{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{center:e,zoom:this.state.zoom,ref:this.saveMap},r.a.createElement(f.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),this.props.showMarkers(),this.map&&r.a.createElement(v,{map:this.map})))}}]),a}(n.Component),y=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(!0),p=Object(o.a)(u,2),h=p[0],d=p[1];if(Object(n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?lat=60.169&lon=24.938&appid=44ebf4647bda393b62fec194d66559e5").then((function(e){return e.json()})).then((function(e){return l(e)})),setTimeout((function(){return d(!1)}),2500)}),[]),!a)return r.a.createElement(r.a.Fragment,null,"asd");return r.a.createElement("div",{id:"weather",className:"pt-2 bg-dark text-light p-1 justify-content-center transparent ".concat(s?"":"hide"),onClick:function(){return m(!s)}},h?r.a.createElement("small",{className:"text-light exp-txt"},"Click to expand"):"",r.a.createElement("div",{id:"wHead",className:"container-fluid row"},r.a.createElement("span",{className:"col-6 col-sm-5 pb-5"},r.a.createElement("h3",null,"Weather"),r.a.createElement("h4",null,a.name,", ",a.sys.country),r.a.createElement("small",{className:"text-light"},function(){var e=Date(a.dt).split(" ").slice(0,5).join(" ");return e.slice(0,e.length-3)}())),r.a.createElement("div",{className:"col-6 d-none d-md-block p-0 m-0"},r.a.createElement("div",{className:"bg-blue w-100 ml-3"},r.a.createElement("img",{id:"wicon",src:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),alt:"Weather icon"})),r.a.createElement("div",{className:"celsius d-inline-block text-right"},r.a.createElement("h3",{className:"font-300"},Math.round(a.main.temp-273.15),"\u2103")))),r.a.createElement("div",{id:"wData",className:"container-fluid ".concat(s?"":"d-none")},r.a.createElement("table",{class:"table table-striped table-dark transparent"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Description"),r.a.createElement("td",null," ",a.weather[0].main,", ",a.weather[0].description)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Wind"),r.a.createElement("td",null,a.wind.speed," m/s")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Humidity"),r.a.createElement("td",null,a.main.humidity,"%"))))))},O=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){fetch("https://api.citybik.es/v2/networks/citybikes-helsinki").then((function(e){return e.json()})).then((function(e){return l(e.network.stations)}))}),[]);return r.a.createElement("div",{className:"container-fluid row p-0 m-0"},r.a.createElement(k,{showMarkers:function(){return a.map((function(e){return r.a.createElement(i.a,{position:[e.latitude,e.longitude]},r.a.createElement(s.a,null,r.a.createElement("h3",null,e.name),r.a.createElement("p",{className:"my-0"},"Py\xf6ri\xe4 j\xe4ljell\xe4: ",e.free_bikes),r.a.createElement("p",{className:"my-0"},"Paikkoja vapaana: ",e.empty_slots)))}))}}),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.36b98b6c.chunk.js.map