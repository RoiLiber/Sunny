(this.webpackJsonpsunny=this.webpackJsonpsunny||[]).push([[0],{100:function(e,t,a){e.exports=a(175)},109:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,l=a(15),o=a(19),u=a(80),m=a(81),p=a(22),h=a(218),d={setCity:"SET_CITY",setCityDetails:"SET_CITY_DETAILS",setFavoriteCities:"SET_FAVORITE_CITIES",removeFavoriteCity:"REMOVE_FAVORITE_CITY",updateFavorites:"UPDATE_FAVORITES",tampToggle:"TAMP_TOGGLE",setDarkMode:"SET_DARK_MODE",requestError:"REQUEST_ERROR"},f="".concat("https://cors-anywhere.herokuapp.com/").concat("https://dataservice.accuweather.com"),y="https://developer.accuweather.com/sites/default/files",v="Sorry, unable to fetch the weather, maybe it's to cloudy",E="/home",x="/favorites",b=Object({NODE_ENV:"production",PUBLIC_URL:"/Sunny",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY||"saWWFAfScoxhIexu7ayAU90tvkAvcGJz",g=a(82),w=a.n(g),k=localStorage.getItem("favorites"),O=w()({city:{label:"Tel Aviv",key:"215854",country:"Israel"}||{},cityDetails:{currWeatherInfo:{},forecast:[]},favoriteCities:JSON.parse(k)||[],metric:!0,darkMode:!0,requestError:""}),N=Object(h.a)((s={},Object(p.a)(s,d.setCity,(function(e,t){var a=t.value;return e.setIn(["city"],a)})),Object(p.a)(s,d.setCityDetails,(function(e,t){var a=t.key,n=t.value;return e.setIn(["cityDetails",a],n)})),Object(p.a)(s,d.updateFavorites,(function(e,t){var a=t.favorites;return e.set("favoriteCities",a)})),Object(p.a)(s,d.tampToggle,(function(e,t){var a=t.bool;return e.setIn(["metric"],a)})),Object(p.a)(s,d.setDarkMode,(function(e,t){var a=t.bool;return e.setIn(["darkMode"],a)})),Object(p.a)(s,d.requestError,(function(e,t){var a=t.errMsg;return e.setIn(["requestError"],a)})),s),O),_=Object(o.combineReducers)({mainReducer:N}),C=Object(o.createStore)(_,{},Object(m.composeWithDevTools)(Object(o.applyMiddleware)(u.a))),j=a(35),S=a(13),M=a(176),D=a(83),F=a.n(D);a(109);var T=Object(o.compose)(Object(l.b)((function(e){return{darkMode:e.mainReducer.darkMode}})),S.g)((function(e){var t=e.location.pathname,a=e.darkMode;return r.a.createElement("div",{className:"header ".concat(a?"":"header_light_mode")},r.a.createElement("div",{className:"logo_wrapper"},r.a.createElement("img",{src:F.a,alt:"logo"}),r.a.createElement("span",{className:"logo"},"Sunny")),r.a.createElement("div",{className:"app_nav_buttons"},r.a.createElement(j.b,{to:E},r.a.createElement(M.a,{variant:"text",className:t===E?"active":""},"Home")),r.a.createElement(j.b,{to:x},r.a.createElement(M.a,{variant:"text",className:t===x?"active":""},"Favorites"))))})),I=a(12),R=a.n(I),P=a(17),A=a(20),z=a(215),B=a(58),W=a.n(B),L=a(89),q=a.n(L),V=a(91),H=function(e){return{type:d.setCity,value:e}},J=function(e,t){return{type:d.setCityDetails,key:e,value:t}},K=function(e){var t=C.getState().mainReducer.favoriteCities.filter((function(t){return t.key!==e}));return localStorage.setItem("favorites",JSON.stringify(t)),{type:d.updateFavorites,favorites:t}},U=a(34),Y=a.n(U);function G(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(P.a)(R.a.mark((function e(t){var a,n,r,c,i,s,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/currentconditions/v1/").concat(t,"?apikey=").concat(b));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r=n[0]||[],c=r.WeatherText,i=r.Temperature,s=r.WeatherIcon,l=s&&"".concat(y,"/").concat(s.toString().padStart(2,"0"),"-s.png"),e.abrupt("return",{tempC:Y()(i,["Metric","Value"],""),tempF:Y()(i,["Imperial","Value"],""),description:c,img:l});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(P.a)(R.a.mark((function e(t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:a=e.sent,C.dispatch(J("currWeatherInfo",a));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(P.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/locations/v1/cities/autocomplete?apikey=").concat(b,"&q=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t){return ae.apply(this,arguments)}function ae(){return(ae=Object(P.a)(R.a.mark((function e(t,a){var n,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/forecasts/v1/daily/5day/").concat(t,"?apikey=").concat(b,"&metric=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,c=(r||{}).DailyForecasts,e.abrupt("return",c.map((function(e){return{date:e.Date,temp:{min:Y()(e.Temperature,["Minimum","Value"],""),max:Y()(e.Temperature,["Maximum","Value"],"")},dayTemp:{icon:Y()(e.Day,["Icon"],""),text:Y()(e.Day,["IconPhrase"],"")}}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=Object(P.a)(R.a.mark((function e(t,a){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(t,a);case 2:n=e.sent,C.dispatch(J("forecast",n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=a(38),ie=a(5),se=a(217),le=a(219),oe="#FFD60A",ue=(a(153),/^[a-zA-Z]+(-[a-zA-Z]+)*$/);var me=Object(o.compose)(Object(l.b)((function(e){return{darkMode:e.mainReducer.darkMode}}),{setCity:H,setCityDetails:J}),Object(ie.a)((function(e){return{textField:{"& fieldset, &:hover fieldset":{borderColor:"".concat(oe," !important")}},invisible:{display:"none"}}})))((function(e){var t=e.classes,a=e.darkMode,c=Object(n.useState)(!1),i=Object(A.a)(c,2),s=i[0],l=i[1],o=Object(n.useState)([]),u=Object(A.a)(o,2),m=u[0],p=u[1],h=Object(n.useState)(!1),d=Object(A.a)(h,2),f=d[0],y=d[1],v=Object(n.useState)(""),E=Object(A.a)(v,2),x=E[0],b=E[1],g=s&&0===m.length;function w(){return(w=Object(P.a)(R.a.mark((function e(t,a){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(a),!(a.length<1)){e.next=3;break}return e.abrupt("return",l(!1));case 3:if(!(a.length<2&&s)){e.next=5;break}return e.abrupt("return",l(!1));case 5:return s||l(!0),e.prev=6,e.next=9,X(a);case 9:n=e.sent,y(!1),p(n.map((function(e){return{label:e.LocalizedName,key:e.Key,country:e.Country.LocalizedName}}))),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),y(!0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){s||p([])}),[s]),r.a.createElement(le.a,{className:"".concat(t.autoComplete," auto_complete ").concat(a?"":"light_mode"),open:s,onClose:function(){return l(!1)},onChange:function(t,a){a&&e.setCity(a||{})},value:x,onInputChange:function(e,t){return w.apply(this,arguments)},getOptionLabel:function(e){return e&&e.label},options:m,loading:g,classes:{popupIndicator:t.invisible},renderInput:function(e){return r.a.createElement(se.a,Object.assign({},e,{placeholder:"Search city",fullWidth:!0,value:x,onChange:function(e){ue.test(e.target.value)&&b(x)},variant:"outlined",helperText:f?"Sorry, unable to fetch the cities list, maybe it's to cloudy":" ",InputProps:Object(ce.a)(Object(ce.a)({},e.InputProps),{},{classes:{root:t.textField},endAdornment:r.a.createElement(r.a.Fragment,null,g?r.a.createElement(z.a,{color:"primary",size:20}):null,e.InputProps.endAdornment)})}))}})})),pe=a(216);a(154);var he=Object(l.b)((function(e){return{city:e.mainReducer.city,cityDetails:e.mainReducer.cityDetails,metric:e.mainReducer.metric,darkMode:e.mainReducer.darkMode}}),{setTampMetric:function(e){return{type:d.tampToggle,bool:e}},setDarkMode:function(e){return{type:d.setDarkMode,bool:e}}})((function(e){var t=e.city,a=t.label,n=t.country,c=e.cityDetails,i=e.metric,s=e.darkMode,l=(c||{}).currWeatherInfo||{},o=l.tempC,u=l.tempF,m=l.description,p=l.img,h=i?o:u;return r.a.createElement("div",{className:"current_weather_wrapper ".concat(s?"":"current_weather_light_mode")},r.a.createElement("div",{className:"cityName"},"".concat(a,", ").concat(n)),r.a.createElement("div",{className:"description"},m),r.a.createElement("div",{className:"temp_icon_wrapper"},p&&r.a.createElement("img",{src:p,alt:"weather icon",className:"img"}),r.a.createElement("div",{className:"degree"},Math.round(h),"\xb0",r.a.createElement("span",{className:"degree_symbol"},i?"C":"F"))),r.a.createElement("div",{className:"set_tamp_type"},r.a.createElement(pe.a,{disableElevation:!0,variant:"contained"},r.a.createElement(M.a,{className:"".concat(i?"active":""),onClick:function(){return e.setTampMetric(!0)}},"Celsius"),r.a.createElement(M.a,{className:"".concat(i?"":"active"),onClick:function(){return e.setTampMetric(!1)}},"Fahrenheit"))),r.a.createElement("div",{className:"set_dark_mode"},r.a.createElement(pe.a,{disableElevation:!0,variant:"contained"},r.a.createElement(M.a,{className:"".concat(s?"active":""),onClick:function(){return e.setDarkMode(!0)}},"Dark"),r.a.createElement(M.a,{className:"".concat(s?"":"active"),onClick:function(){return e.setDarkMode(!1)}},"Light"))))})),de=a(220),fe=a(57);a(164);var ye=Object(l.b)((function(e){return{metric:e.mainReducer.metric,darkMode:e.mainReducer.darkMode}}))((function(e){var t=e.dayDetails,a=e.currDay,n=e.index,c=e.metric,i=e.darkMode,s=t.temp,l=t.dayTemp,o=t.date,u=s.min,m=s.max;return r.a.createElement(fe.Fade,{cascade:!0,delay:150*n},r.a.createElement("div",{className:"card_wrapper ".concat(i?"":"card_light_mode")},r.a.createElement("div",{className:"day_name ".concat(a?"today":"")},new Date(o).toString().split(" ")[0]),r.a.createElement("img",{src:"".concat(y,"/").concat(l.icon.toString().padStart(2,"0"),"-s.png"),alt:"daily weather icon",className:"icon"}),r.a.createElement("div",{className:"day_tamp"},r.a.createElement("span",{className:"low_tamp_symbol"},"L:"),Math.round(u),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F"),r.a.createElement("span",{className:"high_tamp_symbol"},"H:"),Math.round(m),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F"))))}));a(165);var ve=Object(l.b)((function(e){return{cityDetails:e.mainReducer.cityDetails}}))((function(e){var t=e.cityDetails;return r.a.createElement("div",{className:"forecast_wrapper"},r.a.createElement("div",{className:"cards"},t.forecast.map((function(e,t){return r.a.createElement(ye,{dayDetails:e,key:Object(de.a)(),currDay:!t,index:t})}))))}));a(166);var Ee={sunShower:function(){return r.a.createElement("div",{className:"weather_icon sun-shower"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"sun"},r.a.createElement("div",{className:"rays"})),r.a.createElement("div",{className:"rain"}))},thunderStorm:function(){return r.a.createElement("div",{className:"weather_icon thunder-storm"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"lightning"},r.a.createElement("div",{className:"bolt"}),r.a.createElement("div",{className:"bolt"})))},cloudy:function(){return r.a.createElement("div",{className:"weather_icon cloudy"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"cloud"}))},flurries:function(){return r.a.createElement("div",{className:"weather_icon flurries"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"snow"},r.a.createElement("div",{className:"flake"}),r.a.createElement("div",{className:"flake"})))},sunny:function(){return r.a.createElement("div",{className:"weather_icon sunny"},r.a.createElement("div",{className:"sun"},r.a.createElement("div",{className:"rays"})))},rainy:function(){return r.a.createElement("div",{className:"weather_icon rainy"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"rain"}))}};a(167);function xe(e){return r.a.createElement("div",{className:"visualisation-container"},r.a.createElement("div",{className:"rain_effect ".concat(3===e?"blnk":"")},e>=1&&r.a.createElement(n.Fragment,null,r.a.createElement("i",{style:{left:"693px",top:"844px"}}),r.a.createElement("i",{style:{left:"1307px",top:"-31px"}}),r.a.createElement("i",{style:{left:"984px",top:"101px"}}),r.a.createElement("i",{style:{left:"1662px",top:"-64px"}}),r.a.createElement("i",{style:{left:"999px",top:"1371px"}}),r.a.createElement("i",{style:{left:"960px",top:"-820px"}}),r.a.createElement("i",{style:{left:"1288px",top:"185px"}}),r.a.createElement("i",{style:{left:"1618px",top:"103px"}}),r.a.createElement("i",{style:{left:"659px",top:"1180px"}}),r.a.createElement("i",{style:{left:"648px",top:"-408px"}}),r.a.createElement("i",{style:{left:"844px",top:"10px"}}),r.a.createElement("i",{style:{left:"662px",top:"-1098px"}}),r.a.createElement("i",{style:{left:"471px",top:"55px"}}),r.a.createElement("i",{style:{left:"811px",top:"-752px"}})),e>=2&&r.a.createElement(n.Fragment,null,r.a.createElement("i",{style:{left:"281px",top:"1300px"}}),r.a.createElement("i",{style:{left:"117px",top:"153px"}}),r.a.createElement("i",{style:{left:"579px",top:"942px"}}),r.a.createElement("i",{style:{left:"657px",top:"-977px"}}),r.a.createElement("i",{style:{left:"1757px",top:"808px"}}),r.a.createElement("i",{style:{left:"1334px",top:"116px"}}),r.a.createElement("i",{style:{left:"1089px",top:"-59px"}}),r.a.createElement("i",{style:{left:"615px",top:"661px"}}),r.a.createElement("i",{style:{left:"1303px",top:"-163px"}}),r.a.createElement("i",{style:{left:"60px",top:"789px"}}),r.a.createElement("i",{style:{left:"1038px",top:"-686px"}}),r.a.createElement("i",{style:{left:"920px",top:"1190px"}}),r.a.createElement("i",{style:{left:"1174px",top:"-21px"}}),r.a.createElement("i",{style:{left:"1031px",top:"-762px"}}),r.a.createElement("i",{style:{left:"1541px",top:"432px"}}),r.a.createElement("i",{style:{left:"72px",top:"286px"}})),3===e&&r.a.createElement(n.Fragment,null,r.a.createElement("i",{style:{left:"1746px",top:"34px"}}),r.a.createElement("i",{style:{left:"900px",top:"566px"}}),r.a.createElement("i",{style:{left:"1045px",top:"-666px"}}),r.a.createElement("i",{style:{left:"224px",top:"370px"}}),r.a.createElement("i",{style:{left:"206px",top:"-904px"}}),r.a.createElement("i",{style:{left:"1586px",top:"-521px"}}),r.a.createElement("i",{style:{left:"410px",top:"-962px"}}),r.a.createElement("i",{style:{left:"223px",top:"604px"}}),r.a.createElement("i",{style:{left:"457px",top:"-558px"}}),r.a.createElement("i",{style:{left:"516px",top:"163px"}}),r.a.createElement("i",{style:{left:"1474px",top:"380px"}}),r.a.createElement("i",{style:{left:"1363px",top:"748px"}}),r.a.createElement("i",{style:{left:"35px",top:"1337px"}}),r.a.createElement("i",{style:{left:"1029px",top:"263px"}}),r.a.createElement("i",{style:{left:"360px",top:"443px"}}),r.a.createElement("i",{style:{left:"1343px",top:"825px"}}))))}var be=a(43),ge=a(44),we=a(68),ke=a.n(we);a(168);function Oe(){return function(){var e=function(){return(new Date).getTime()},t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?2*(Math.random()-.5)*e:Math.random()*e},a=document.getElementById("lightning"),n=a&&a.getContext("2d"),r=document.getElementById("cloudlightning"),c=r&&r.getContext("2d"),i=document.getElementById("lightningSheet"),s=i&&i.getContext("2d"),l=[],o=[],u=[],m=[],p=0,h=0,d=e(),f=function(){function e(a,n,r){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4?arguments[4]:void 0;Object(be.a)(this,e);var s,l=a||t(p),m=n||40+t(100);this.paths=[],this.red=255,this.green=255,this.blue=255,this.alpha=1,this.hasEnded=!1,this.width=r||t(3)+1,this.isBranch=c,this.xDeviation=c?1.3:1,this.branchDirection=i||2*(Math.random()-.5),this.flickerCount=0,this.clouds=[],this.paths.push({x:l,y:m}),u.push(new y(this.width)),this.isBranch||(s=new E(l,m,this.width),o.push(s),this.clouds.push(s)),this.isBranch&&(this.width=1)}return Object(ge.a)(e,[{key:"animate",value:function(){var a=3+t(5),n=this.isBranch?.9:.01;if(!this.hasEnded){for(var r,c,i=this.getLastPoint(),s=i.x,o=i.y,u=0;u<a;u++)s=r=s+9*(this.isBranch?this.branchDirection:2*(Math.random()-.5))*this.xDeviation,o=c=o+t(8)+2,this.paths.push({x:r,y:c}),this.isBranch&&t()<.03&&l.push(new e(s,o,this.width,!0));this.hasEnded=o/h>.8||t()>.6&&this.paths.length>90||this.paths.length>120||this.isBranch&&this.paths.length>5,t()>n&&this.paths.length>5&&this.paths.length<80&&l.push(new e(s,o,this.width,!0))}this.alpha>0&&(this.alpha-=.013,this.alpha<.5&&(this.green-=4.5),this.isBranch&&(this.alpha-=.0065)),!this.isBranch&&t()<.023&&this.flickerCount<2&&this.alpha>.3&&(this.alpha=1,this.green=240,this.flickerCount++,this.clouds.map((function(e){return e.alpha=t(.6)+.3,e.alpha}))),(this.isBranch&&this.flickerCount>0||this.alpha<0)&&(this.alpha=0)}},{key:"render",value:function(){var e=this.getColour();n&&n.beginPath(),n&&(n.strokeStyle=e),n&&(n.lineWidth=this.width),0===this.flickerCount&&(n&&(n.shadowBlur=3*this.width),n&&(n.shadowColor=e)),this.paths.forEach((function(e){n&&n.lineTo(e.x,e.y)})),n&&n.stroke()}},{key:"getColour",value:function(e,t,a,n){return"rgba(".concat(e||this.red,", ").concat(t||this.green,", ").concat(a||this.blue,", ").concat(n||this.alpha,")")}},{key:"getLastPoint",value:function(){if(this.paths.length>0){var e=this.paths[this.paths.length-1];return{x:e.x,y:e.y}}return{x:0,y:0}}}]),e}(),y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(be.a)(this,e),this.alpha=.09*t}return Object(ge.a)(e,[{key:"animate",value:function(){this.alpha-=.026}},{key:"render",value:function(){n&&n.beginPath(),n&&(n.fillStyle="rgba(50, 48, 51, ".concat(this.alpha,")")),n&&n.fillRect(0,0,p,h)}}]),e}(),v=function(){function e(a,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(Object(be.a)(this,e),this.alpha=t(.6)+.2,this.x=a||t(p),this.y=n||t(.6*h)-100,this.size=t(50)+40,this.size=(1-this.y/h*.6)*this.size,r)for(var c,i,s=0;s<t(12)+4;s++)c=this.x+t(300,!0),i=this.y+t(80,!0),m.push(new e(c,i,!1))}return Object(ge.a)(e,[{key:"animate",value:function(){this.alpha-=.0104,this.alpha<.3&&t()<.025&&(this.alpha+=t(.4))}},{key:"render",value:function(){s&&s.save(),s&&s.scale(2,1),s&&s.beginPath(),s&&s.arc(this.x/2,this.y,this.size,2*Math.PI,!1),s&&s.closePath(),s&&s.restore(),s&&(s.filter="blur(".concat(this.size,"px)")),s&&(s.fillStyle="rgba(100, 100, 100, ".concat(this.alpha,")")),s&&s.fill(),s&&(s.shadowColor="#999999"),s&&(s.shadowBlur=this.size)}}]),e}(),E=function(){function e(a,n,r){Object(be.a)(this,e),this.x=a,this.y=n,this.size=3*r*t(2)+10,this.alpha=1}return Object(ge.a)(e,[{key:"animate",value:function(){this.alpha-=.013}},{key:"render",value:function(){c&&c.save(),c&&c.scale(2.5,1),c&&c.beginPath(),c&&c.arc(this.x/2.5,this.y,this.size,2*Math.PI,!1),c&&c.restore(),c&&(c.filter="blur(".concat(this.size,"px)")),c&&(c.fillStyle="rgba(255, 255, 255, ".concat(this.alpha,")")),c&&c.fill(),c&&(c.shadowColor="#eeeeff"),c&&(c.shadowBlur=8*this.size+50)}}]),e}(),x=function(){p=window.innerWidth,h=window.innerHeight,a&&(a.width=p),a&&(a.height=h),r&&(r.width=p),r&&(r.height=h),i&&(i.width=p),i&&(i.height=.8*h)};ke()(window).on("mousedown",(function(e){l.push(new f(e.clientX,e.clientY))})),x(),ke()(window).resize(x),l.push(new f(400,100)),function a(){n&&n.clearRect(0,0,p,h),c&&c.clearRect(0,0,p,h),s&&s.clearRect(0,0,p,h),l.forEach((function(e){e.animate(),e.render()})),o.forEach((function(e){e.animate(),e.render()})),m.forEach((function(e){e.animate(),e.render()})),u.forEach((function(e){e.animate(),e.render()})),t()<.03&&e()-d>1e3&&(t()>.4?l.push(new f):m.push(new v),d=e()),l=l.filter((function(e){return e.alpha>0})),o=o.filter((function(e){return e.alpha>0})),u=u.filter((function(e){return e.alpha>0})),m=m.filter((function(e){return e.alpha>0})),requestAnimationFrame(a)}()}(),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:"lightning"}))}a(169);var Ne=Object(l.b)((function(e){return{city:e.mainReducer.city,cityDetails:e.mainReducer.cityDetails,favoriteCities:e.mainReducer.favoriteCities,metric:e.mainReducer.metric,darkMode:e.mainReducer.darkMode,requestError:e.mainReducer.requestError}}),{setCityDetails:J,setFavoriteCities:function(e){var t=C.getState().mainReducer.favoriteCities,a=[].concat(Object(V.a)(t),[e]);return localStorage.setItem("favorites",JSON.stringify(a)),{type:d.updateFavorites,favorites:a}},removeFavoriteCity:K})((function(e){var t=e.city,a=t.key,c=void 0===a?"":a,i=t.label,s=e.favoriteCities,l=e.metric,o=e.darkMode,u=e.requestError,m=Object(n.useState)(!1),p=Object(A.a)(m,2),h=p[0],d=p[1],f=Object(n.useState)(!1),y=Object(A.a)(f,2),E=y[0],x=y[1];function b(){c&&Object(P.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,X(i);case 4:return e.next=6,$(c);case 6:return e.next=8,ne(c,l);case 8:x(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),x(!0);case 14:return e.prev=14,d(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()}Object(n.useEffect)((function(){Object(P.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,ne(c,l);case 4:x(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x(!0);case 10:return e.prev=10,d(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[l,c]),Object(n.useEffect)(b,[c]);var g=e.cityDetails.currWeatherInfo.description;return r.a.createElement("div",{className:"home_page ".concat(o?"":"home_page_light_mode")},r.a.createElement(me,null),function(){var t=!!s.find((function(t){return t.key===e.city.key}));return E?null:t?r.a.createElement(q.a,{className:"favorite_icon favorite",onClick:function(){t?e.removeFavoriteCity(c):e.setFavoriteCities(e.city)}}):r.a.createElement(W.a,{className:"favorite_icon",onClick:function(){t?e.removeFavoriteCity(c):e.setFavoriteCities(e.city)}})}(),r.a.createElement("div",{className:"city_weather_wrapper"},h?r.a.createElement("div",{className:"loader"},r.a.createElement(z.a,null)):E?r.a.createElement("div",{className:"error_wrapper"},r.a.createElement("div",{className:"storm"},xe(3),Oe()),r.a.createElement("div",{className:"error_msg"},u||v),r.a.createElement(M.a,{variant:"text",onClick:b},"Try again")):[r.a.createElement(he,{key:"currentWeather"}),r.a.createElement(ve,{key:"forecast"})],!E&&!h&&function(e){switch(e){case"Hazy Sunshine":case"Intermittent Clouds":case"Cloudy":case"Dreary (Overcast)":case"Flurries":case"Mostly Cloudy w/ Flurries":case"Partly Sunny w/ Flurries":case"Mostly Cloudy":case"Windy":case"Fog":return Ee.cloudy();case"Showers":case"Rain":case"Sleet":case"Freezing Rain":case"Partly Cloudy w/ Showers":return r.a.createElement(n.Fragment,null,xe(2),Ee.rainy());case"Mostly Cloudy w/ Showers":case"Partly Sunny w/ Showers":return r.a.createElement(n.Fragment,null,xe(1),Ee.sunShower());case"T-Storms":case"Mostly Cloudy w/ T-Storms":case"Partly Sunny w/ T-Storms":return r.a.createElement(n.Fragment,null,xe(3),Oe(),Ee.thunderStorm());case"Ice":case"Snow":case"Rain and Snow":case"Mostly Cloudy w/ Snow":return Ee.flurries();default:return Ee.sunny()}}(g)))})),_e=a(90),Ce=a.n(_e);a(171);var je=Object(l.b)((function(e){return{favoriteCities:e.mainReducer.favoriteCities,cityDetails:e.mainReducer.cityDetails,metric:e.mainReducer.metric,darkMode:e.mainReducer.darkMode}}),{setCity:H,removeFavoriteCity:K})((function(e){var t=e.favoriteCities,a=void 0===t?[]:t,c=e.metric,i=e.darkMode,s=Object(n.useState)(!0),l=Object(A.a)(s,2),o=l[0],u=l[1],m=Object(n.useState)(!1),h=Object(A.a)(m,2),d=h[0],f=h[1],y=Object(n.useState)({}),x=Object(A.a)(y,2),b=x[0],g=x[1];function w(){Object(P.a)(R.a.mark((function e(){var t,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,Promise.all(a.map((function(e){return G(e.key,c)})));case 4:if(t=e.sent,n=t.reduce((function(e,t,n){return Object(ce.a)(Object(ce.a)({},e),{},Object(p.a)({},a[n].key,t))}),{}),(!a.length||Object.keys(n).length)&&Object.keys(n).description){e.next=8;break}throw new Error;case 8:g(n),f(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),f(!0);case 15:return e.prev=15,u(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))()}function k(){return a.length?a.map((function(t,a){var n=c?b[t.key].tempC:b[t.key].tempF;return r.a.createElement(fe.Fade,{cascade:!0,delay:200*a,key:t.key},r.a.createElement("div",{key:t.key,className:"fav_city_container"},r.a.createElement("div",{className:"city_details",role:"button",tabIndex:0,onClick:function(){return function(t){e.setCity(t),e.history.push(E)}(t)}},r.a.createElement("div",{className:"city_name"},t.label),r.a.createElement("div",{className:"description"},b[t.key].description),r.a.createElement("div",{className:"temp"},Math.round(n),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F")),b[t.key].img&&r.a.createElement("img",{src:b[t.key].img,alt:"weather icon",className:"img"})),r.a.createElement(Ce.a,{className:"remove_icon",onClick:function(){e.removeFavoriteCity(t.key)}})))})):r.a.createElement("div",{className:"no_favorites_container"},r.a.createElement("span",null,"There is no favorites cities saved yet, go to the home page search a cite and click her"),r.a.createElement(W.a,{className:"favorite_icon"}))}return Object(n.useEffect)(w,[]),r.a.createElement("div",{className:"favorites_wrapper ".concat(i?"":"favorites_light_mode")},o?r.a.createElement(z.a,{className:"loader"}):d?r.a.createElement("div",{className:"error_wrapper"},r.a.createElement("div",{className:"storm"},xe(3),Oe()),r.a.createElement("div",{className:"error_msg"},v),r.a.createElement(M.a,{variant:"text",onClick:w},"Try again")):k())}));a(172);var Se=Object(l.b)((function(e){return{darkMode:e.mainReducer.darkMode}}))((function(e){var t=e.darkMode;return r.a.createElement("div",{className:"weather_container ".concat(t?"":"weather_container_light_mode")},r.a.createElement(T,null),r.a.createElement(S.d,null,r.a.createElement(S.b,{exect:!0,path:E,component:Ne}),r.a.createElement(S.b,{exect:!0,path:x,component:je}),r.a.createElement(S.b,{path:"/",render:function(){return r.a.createElement(S.a,{to:"/home"})}})))}));a(173);function Me(){return r.a.createElement(j.a,{basename:"/Sunny"},r.a.createElement("div",{className:"App"},r.a.createElement(Se,null)))}a(174);i.a.render(r.a.createElement(l.a,{store:C},r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a.p+"static/media/icon.9118e9d8.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.290c356d.chunk.js.map