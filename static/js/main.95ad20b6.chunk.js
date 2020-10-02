(this.webpackJsonpsunny=this.webpackJsonpsunny||[]).push([[0],{100:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,o=a(14),l=a(19),u=a(71),m=a(72),h=a(26),d=a(169),p={setCity:"SET_CITY",setCityDetails:"SET_CITY_DETAILS",setFavoriteCities:"SET_FAVORITE_CITIES",removeFavoriteCity:"REMOVE_FAVORITE_CITY",updateFavorites:"UPDATE_FAVORITES",tampToggle:"TAMP_TOGGLE",setDarkMode:"SET_DARK_MODE"},f="https://cors-anywhere.herokuapp.com/",v="".concat(f).concat("https://dataservice.accuweather.com"),y="".concat(f).concat("http://api.ipstack.com"),E="https://developer.accuweather.com/sites/default/files",b="Sorry, unable to fetch the weather, maybe it's too cloudy",g="/home",k="/favorites",w=Object({NODE_ENV:"production",PUBLIC_URL:"/Sunny",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY||"07a6835d0ab442a7ebf372dd744b19ab",O=Object({NODE_ENV:"production",PUBLIC_URL:"/Sunny",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY||"dXe0jgHVKxwAEA7OZ1W7Dk37vR97DUEN",_=a(73),N=a.n(_),C=localStorage.getItem("favorites"),j=localStorage.getItem("metricPreferences"),S=localStorage.getItem("darkModePreferences"),x=N()({city:{},cityDetails:{currWeatherInfo:{},forecast:[]},favoriteCities:JSON.parse(C)||[],metric:null===JSON.parse(j)||JSON.parse(j),darkMode:null===JSON.parse(S)||JSON.parse(S)}),M=Object(d.a)((s={},Object(h.a)(s,p.setCity,(function(e,t){var a=t.value;return e.setIn(["city"],a)})),Object(h.a)(s,p.setCityDetails,(function(e,t){var a=t.key,n=t.value;return e.setIn(["cityDetails",a],n)})),Object(h.a)(s,p.updateFavorites,(function(e,t){var a=t.favorites;return e.set("favoriteCities",a)})),Object(h.a)(s,p.tampToggle,(function(e,t){var a=t.bool;return e.setIn(["metric"],a)})),Object(h.a)(s,p.setDarkMode,(function(e,t){var a=t.bool;return e.setIn(["darkMode"],a)})),s),x),D=Object(l.combineReducers)({mainReducer:M}),T=Object(l.createStore)(D,{},Object(m.composeWithDevTools)(Object(l.applyMiddleware)(u.a))),I=a(35),F=a(13),R=a(127),P=a(74),A=a.n(P);a(100);var W=Object(l.compose)(Object(o.b)((function(e){return{darkMode:e.mainReducer.darkMode}})),F.g)((function(e){var t=e.location.pathname,a=e.darkMode;return r.a.createElement("div",{className:"header ".concat(a?"":"header_light_mode")},r.a.createElement("div",{className:"logo_wrapper"},r.a.createElement("img",{src:A.a,alt:"logo"}),r.a.createElement("span",{className:"logo"},"Sunny")),r.a.createElement("div",{className:"app_nav_buttons"},r.a.createElement(I.b,{to:g},r.a.createElement(R.a,{variant:"text",className:t===g?"active":""},"Home")),r.a.createElement(I.b,{to:k},r.a.createElement(R.a,{variant:"text",className:t===k?"active":""},"Favorites"))))})),z=a(10),B=a.n(z),L=a(16),K=a(20),J=a(166),V=a(55),H=a.n(V),U=a(80),Y=a.n(U),Z=a(57),q=function(e){return{type:p.setCity,value:e}},G=function(e,t){return{type:p.setCityDetails,key:e,value:t}},X=function(e){var t=T.getState().mainReducer.favoriteCities.filter((function(t){return t.key!==e}));return localStorage.setItem("favorites",JSON.stringify(t)),{type:p.updateFavorites,favorites:t}},$=a(33);function Q(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(L.a)(B.a.mark((function e(t){var a,n,r,c,i,s,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/currentconditions/v1/").concat(t,"?apikey=").concat(O));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r=n[0]||[],c=r.WeatherText,i=r.Temperature,s=r.WeatherIcon,o=s&&"".concat(E,"/").concat(s.toString().padStart(2,"0"),"-s.png"),e.abrupt("return",{tempC:Object($.get)(i,["Metric","Value"],""),tempF:Object($.get)(i,["Imperial","Value"],""),description:c,img:o});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(L.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:a=e.sent,T.dispatch(G("currWeatherInfo",a));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return re.apply(this,arguments)}function re(){return(re=Object(L.a)(B.a.mark((function e(){var t,a,n,r,c,i,s,o,l,u,m;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/109.65.26.126?access_key=").concat(w));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=(a||{}).city,e.next=9,ce(Object($.lowerCase)(n));case 9:return r=e.sent,e.next=12,r[0];case 12:c=e.sent,s=(i=c||{}).LocalizedName,o=i.Country,l=i.Key,u=o.LocalizedName,m={label:s,key:l,country:u},T.dispatch(q(m));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(L.a)(B.a.mark((function e(t){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/locations/v1/cities/autocomplete?apikey=").concat(O,"&q=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e,t){return oe.apply(this,arguments)}function oe(){return(oe=Object(L.a)(B.a.mark((function e(t,a){var n,r,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/forecasts/v1/daily/5day/").concat(t,"?apikey=").concat(O,"&metric=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,c=(r||{}).DailyForecasts,e.abrupt("return",c.map((function(e){return{date:e.Date,temp:{min:Object($.get)(e.Temperature,["Minimum","Value"],""),max:Object($.get)(e.Temperature,["Maximum","Value"],"")},dayTemp:{icon:Object($.get)(e.Day,["Icon"],""),text:Object($.get)(e.Day,["IconPhrase"],"")}}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(L.a)(B.a.mark((function e(t,a){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(t,a);case 2:n=e.sent,T.dispatch(G("forecast",n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me=a(38),he=a(5),de=a(168),pe=a(170),fe="#FFD60A",ve="#34C759",ye=(a(104),/^[a-zA-Z]+(-[a-zA-Z]+)*$/);var Ee=Object(l.compose)(Object(o.b)((function(e){return{darkMode:e.mainReducer.darkMode}}),{setCity:q,setCityDetails:G}),Object(he.a)((function(){return{textField:{"& fieldset, &:hover fieldset":{borderColor:"".concat(fe," !important")}},invisible:{display:"none"},paper:{backgroundColor:"".concat(ve," !important"),"& div:hover":{backgroundColor:"".concat(fe," !important")}}}})))((function(e){var t=e.classes,a=e.darkMode,c=Object(n.useState)(!1),i=Object(K.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)([]),u=Object(K.a)(l,2),m=u[0],h=u[1],d=Object(n.useState)(!1),p=Object(K.a)(d,2),f=p[0],v=p[1],y=Object(n.useState)(""),E=Object(K.a)(y,2),b=E[0],g=E[1],k=s&&0===m.length;function w(){return(w=Object(L.a)(B.a.mark((function e(t,a){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(a),!(a.length<1)){e.next=3;break}return e.abrupt("return",o(!1));case 3:if(!(a.length<2&&s)){e.next=5;break}return e.abrupt("return",o(!1));case 5:return s||o(!0),e.prev=6,e.next=9,ce(a);case 9:n=e.sent,v(!1),h(n.map((function(e){return{label:e.LocalizedName,key:e.Key,country:e.Country.LocalizedName}}))),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),v(!0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){s||h([])}),[s]),r.a.createElement(pe.a,{className:"auto_complete ".concat(a?"":"light_mode"),open:s,onClose:function(){return o(!1)},onChange:function(t,a){a&&e.setCity(a||{})},value:b,onInputChange:function(e,t){return w.apply(this,arguments)},getOptionLabel:function(e){return e&&e.label&&"".concat(e.label,", ").concat(e.country)},options:m,loading:k,classes:{popupIndicator:t.invisible,paper:t.paper},renderInput:function(e){return r.a.createElement(de.a,Object.assign({},e,{placeholder:"Search city",fullWidth:!0,value:b,onChange:function(e){ye.test(e.target.value)&&g(b)},variant:"outlined",helperText:f?"Sorry, unable to fetch the cities list, maybe it's to cloudy":" ",InputProps:Object(me.a)(Object(me.a)({},e.InputProps),{},{classes:{root:t.textField},endAdornment:r.a.createElement(r.a.Fragment,null,k?r.a.createElement(J.a,{color:"primary",size:20}):null,e.InputProps.endAdornment)})}))}})})),be=a(167);a(105);var ge=Object(o.b)((function(e){return{city:e.mainReducer.city,cityDetails:e.mainReducer.cityDetails,metric:e.mainReducer.metric,darkMode:e.mainReducer.darkMode}}),{setTampMetric:function(e){return localStorage.setItem("metricPreferences",JSON.stringify(e)),{type:p.tampToggle,bool:e}},setDarkMode:function(e){return localStorage.setItem("darkModePreferences",JSON.stringify(e)),{type:p.setDarkMode,bool:e}}})((function(e){var t=e.city,a=t.label,n=t.country,c=e.cityDetails,i=e.metric,s=e.darkMode,o=(c||{}).currWeatherInfo||{},l=o.tempC,u=o.tempF,m=o.description,h=o.img,d=i?l:u;return r.a.createElement("div",{className:"current_weather_wrapper ".concat(s?"":"current_weather_light_mode")},r.a.createElement("div",{className:"cityName"},"".concat(a,", ").concat(n)),r.a.createElement("div",{className:"description"},m),r.a.createElement("div",{className:"temp_icon_wrapper"},h&&r.a.createElement("img",{src:h,alt:"weather icon",className:"img"}),r.a.createElement("div",{className:"degree"},Math.round(d),"\xb0",r.a.createElement("span",{className:"degree_symbol"},i?"C":"F"))),r.a.createElement("div",{className:"set_tamp_type"},r.a.createElement(be.a,{disableElevation:!0,variant:"contained"},r.a.createElement(R.a,{className:"".concat(i?"active":""),onClick:function(){return e.setTampMetric(!0)}},"Celsius"),r.a.createElement(R.a,{className:"".concat(i?"":"active"),onClick:function(){return e.setTampMetric(!1)}},"Fahrenheit"))),r.a.createElement("div",{className:"set_dark_mode"},r.a.createElement(be.a,{disableElevation:!0,variant:"contained"},r.a.createElement(R.a,{className:"".concat(s?"active":""),onClick:function(){return e.setDarkMode(!0)}},"Dark"),r.a.createElement(R.a,{className:"".concat(s?"":"active"),onClick:function(){return e.setDarkMode(!1)}},"Light"))))})),ke=a(171),we=a(54);a(115);var Oe=Object(o.b)((function(e){return{metric:e.mainReducer.metric,darkMode:e.mainReducer.darkMode}}))((function(e){var t=e.dayDetails,a=e.currDay,n=e.index,c=e.metric,i=e.darkMode,s=t.temp,o=t.dayTemp,l=t.date,u=s.min,m=s.max;return r.a.createElement(we.Fade,{cascade:!0,delay:150*n},r.a.createElement("div",{className:"card_wrapper ".concat(i?"":"card_light_mode")},r.a.createElement("div",{className:"day_name ".concat(a?"today":"")},new Date(l).toString().split(" ")[0]),r.a.createElement("div",{className:"weather_img"},r.a.createElement("img",{src:"".concat(E,"/").concat(o.icon.toString().padStart(2,"0"),"-s.png"),alt:"daily weather icon",className:"icon"})),r.a.createElement("div",{className:"day_tamp"},r.a.createElement("span",{className:"low_tamp_symbol"},"L:"),Math.round(u),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F"),r.a.createElement("span",{className:"high_tamp_symbol"},"H:"),Math.round(m),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F"))))}));a(116);var _e=Object(o.b)((function(e){return{cityDetails:e.mainReducer.cityDetails,darkMode:e.mainReducer.darkMode}}))((function(e){var t=e.cityDetails,a=e.darkMode;return r.a.createElement("div",{className:"forecast_wrapper ".concat(a?"":"forecast_light_mode")},r.a.createElement("div",{className:"cards"},t.forecast.map((function(e,t){return r.a.createElement(Oe,{dayDetails:e,key:Object(ke.a)(),currDay:!t,index:t})}))))}));a(117);function Ne(e){function t(){var e=1===Math.floor(2*Math.random())?1:-1,t=Math.floor(e*(1e3*Math.random())),a="".concat(t,"px"),n=Math.floor(2e3*Math.random());return{left:"".concat(n,"px"),top:a}}return r.a.createElement("div",{className:"visualisation-container"},r.a.createElement("div",{className:"rain_effect ".concat(3===e?"blnk":"")},Object(Z.a)(Array(50*e)).map((function(e,a){return r.a.createElement("i",{key:a,style:t()})}))))}var Ce=a(43),je=a(44),Se=a(62),xe=a.n(Se);a(118);function Me(){return function(){var e=function(){return(new Date).getTime()},t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?2*(Math.random()-.5)*e:Math.random()*e},a=document.getElementById("lightning"),n=a&&a.getContext("2d"),r=document.getElementById("cloudlightning"),c=r&&r.getContext("2d"),i=document.getElementById("lightningSheet"),s=i&&i.getContext("2d"),o=[],l=[],u=[],m=[],h=0,d=0,p=e(),f=function(){function e(a,n,r){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4?arguments[4]:void 0;Object(Ce.a)(this,e);var s,o=a||t(h),m=n||40+t(100);this.paths=[],this.red=255,this.green=255,this.blue=255,this.alpha=1,this.hasEnded=!1,this.width=r||t(3)+1,this.isBranch=c,this.xDeviation=c?1.3:1,this.branchDirection=i||2*(Math.random()-.5),this.flickerCount=0,this.clouds=[],this.paths.push({x:o,y:m}),u.push(new v(this.width)),this.isBranch||(s=new E(o,m,this.width),l.push(s),this.clouds.push(s)),this.isBranch&&(this.width=1)}return Object(je.a)(e,[{key:"animate",value:function(){var a=3+t(5),n=this.isBranch?.9:.01;if(!this.hasEnded){for(var r,c,i=this.getLastPoint(),s=i.x,l=i.y,u=0;u<a;u++)s=r=s+9*(this.isBranch?this.branchDirection:2*(Math.random()-.5))*this.xDeviation,l=c=l+t(8)+2,this.paths.push({x:r,y:c}),this.isBranch&&t()<.03&&o.push(new e(s,l,this.width,!0));this.hasEnded=l/d>.8||t()>.6&&this.paths.length>90||this.paths.length>120||this.isBranch&&this.paths.length>5,t()>n&&this.paths.length>5&&this.paths.length<80&&o.push(new e(s,l,this.width,!0))}this.alpha>0&&(this.alpha-=.013,this.alpha<.5&&(this.green-=4.5),this.isBranch&&(this.alpha-=.0065)),!this.isBranch&&t()<.023&&this.flickerCount<2&&this.alpha>.3&&(this.alpha=1,this.green=240,this.flickerCount++,this.clouds.map((function(e){return e.alpha=t(.6)+.3,e.alpha}))),(this.isBranch&&this.flickerCount>0||this.alpha<0)&&(this.alpha=0)}},{key:"render",value:function(){var e=this.getColour();n&&n.beginPath(),n&&(n.strokeStyle=e),n&&(n.lineWidth=this.width),0===this.flickerCount&&(n&&(n.shadowBlur=3*this.width),n&&(n.shadowColor=e)),this.paths.forEach((function(e){n&&n.lineTo(e.x,e.y)})),n&&n.stroke()}},{key:"getColour",value:function(e,t,a,n){return"rgba(".concat(e||this.red,", ").concat(t||this.green,", ").concat(a||this.blue,", ").concat(n||this.alpha,")")}},{key:"getLastPoint",value:function(){if(this.paths.length>0){var e=this.paths[this.paths.length-1];return{x:e.x,y:e.y}}return{x:0,y:0}}}]),e}(),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(Ce.a)(this,e),this.alpha=.09*t}return Object(je.a)(e,[{key:"animate",value:function(){this.alpha-=.026}},{key:"render",value:function(){n&&n.beginPath(),n&&(n.fillStyle="rgba(50, 48, 51, ".concat(this.alpha,")")),n&&n.fillRect(0,0,h,d)}}]),e}(),y=function(){function e(a,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(Object(Ce.a)(this,e),this.alpha=t(.6)+.2,this.x=a||t(h),this.y=n||t(.6*d)-100,this.size=t(50)+40,this.size=(1-this.y/d*.6)*this.size,r)for(var c,i,s=0;s<t(12)+4;s++)c=this.x+t(300,!0),i=this.y+t(80,!0),m.push(new e(c,i,!1))}return Object(je.a)(e,[{key:"animate",value:function(){this.alpha-=.0104,this.alpha<.3&&t()<.025&&(this.alpha+=t(.4))}},{key:"render",value:function(){s&&s.save(),s&&s.scale(2,1),s&&s.beginPath(),s&&s.arc(this.x/2,this.y,this.size,2*Math.PI,!1),s&&s.closePath(),s&&s.restore(),s&&(s.filter="blur(".concat(this.size,"px)")),s&&(s.fillStyle="rgba(100, 100, 100, ".concat(this.alpha,")")),s&&s.fill(),s&&(s.shadowColor="#999999"),s&&(s.shadowBlur=this.size)}}]),e}(),E=function(){function e(a,n,r){Object(Ce.a)(this,e),this.x=a,this.y=n,this.size=3*r*t(2)+10,this.alpha=1}return Object(je.a)(e,[{key:"animate",value:function(){this.alpha-=.013}},{key:"render",value:function(){c&&c.save(),c&&c.scale(2.5,1),c&&c.beginPath(),c&&c.arc(this.x/2.5,this.y,this.size,2*Math.PI,!1),c&&c.restore(),c&&(c.filter="blur(".concat(this.size,"px)")),c&&(c.fillStyle="rgba(255, 255, 255, ".concat(this.alpha,")")),c&&c.fill(),c&&(c.shadowColor="#eeeeff"),c&&(c.shadowBlur=8*this.size+50)}}]),e}(),b=function(){h=window.innerWidth,d=window.innerHeight,a&&(a.width=h),a&&(a.height=d),r&&(r.width=h),r&&(r.height=d),i&&(i.width=h),i&&(i.height=.8*d)};xe()(window).on("mousedown",(function(e){o.push(new f(e.clientX,e.clientY))})),b(),xe()(window).resize(b),o.push(new f(400,100)),function a(){n&&n.clearRect(0,0,h,d),c&&c.clearRect(0,0,h,d),s&&s.clearRect(0,0,h,d),o.forEach((function(e){e.animate(),e.render()})),l.forEach((function(e){e.animate(),e.render()})),m.forEach((function(e){e.animate(),e.render()})),u.forEach((function(e){e.animate(),e.render()})),t()<.03&&e()-p>1e3&&(t()>.4?o.push(new f):m.push(new y),p=e()),o=o.filter((function(e){return e.alpha>0})),l=l.filter((function(e){return e.alpha>0})),u=u.filter((function(e){return e.alpha>0})),m=m.filter((function(e){return e.alpha>0})),requestAnimationFrame(a)}()}(),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:"lightning"}))}a(119);var De=Object(o.b)((function(e){return{darkMode:e.mainReducer.darkMode}}))((function(e){var t=e.weatherDescription,a=e.darkMode?"":"weather_icon_light_mode";switch(t){case"Hazy Sunshine":case"Intermittent Clouds":case"Cloudy":case"Mostly cloudy":case"Dreary (Overcast)":case"Flurries":case"Mostly Cloudy w/ Flurries":case"Partly Sunny w/ Flurries":case"Windy":case"Fog":return r.a.createElement("div",{className:"weather_icon cloudy ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"cloud"}));case"Showers":case"Rain":case"Sleet":case"Freezing Rain":case"Partly Cloudy w/ Showers":return r.a.createElement(n.Fragment,null,Ne(2),r.a.createElement("div",{className:"weather_icon rainy ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"rain"})));case"Mostly Cloudy w/ Showers":case"Partly Sunny w/ Showers":return r.a.createElement(n.Fragment,null,Ne(1),r.a.createElement("div",{className:"weather_icon sun-shower ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"sun"},r.a.createElement("div",{className:"rays"})),r.a.createElement("div",{className:"rain"})));case"T-Storms":case"Thunderstorm":case"Mostly Cloudy w/ T-Storms":case"Partly Sunny w/ T-Storms":return r.a.createElement(n.Fragment,null,Ne(3),Me(),r.a.createElement("div",{className:"weather_icon thunder-storm ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"lightning"},r.a.createElement("div",{className:"bolt"}),r.a.createElement("div",{className:"bolt"}))));case"Ice":case"Snow":case"Rain and Snow":case"Mostly Cloudy w/ Snow":return r.a.createElement("div",{className:"weather_icon flurries ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"snow"},r.a.createElement("div",{className:"flake"}),r.a.createElement("div",{className:"flake"})));default:return r.a.createElement("div",{className:"weather_icon sunny ".concat(a)},r.a.createElement("div",{className:"sun"},r.a.createElement("div",{className:"rays"})))}}));a(120);var Te=Object(o.b)((function(e){return{city:e.mainReducer.city,cityDetails:e.mainReducer.cityDetails,favoriteCities:e.mainReducer.favoriteCities,metric:e.mainReducer.metric,darkMode:e.mainReducer.darkMode}}),{setCityDetails:G,setFavoriteCities:function(e){var t=T.getState().mainReducer.favoriteCities,a=[].concat(Object(Z.a)(t),[e]);return localStorage.setItem("favorites",JSON.stringify(a)),{type:p.updateFavorites,favorites:a}},removeFavoriteCity:X})((function(e){var t=e.city,a=t.key,c=void 0===a?"":a,i=t.label,s=e.favoriteCities,o=e.metric,l=e.darkMode,u=Object(n.useState)(!1),m=Object(K.a)(u,2),h=m[0],d=m[1],p=Object(n.useState)(!1),f=Object(K.a)(p,2),v=f[0],y=f[1];function E(){c&&Object(L.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,ce(i);case 4:return e.next=6,te(c);case 6:return e.next=8,le(c,o);case 8:y(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),y(!0);case 14:return e.prev=14,d(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()}Object(n.useEffect)((function(){Object(L.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,ne();case 4:y(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),y(!0);case 10:return e.prev=10,d(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[]),Object(n.useEffect)((function(){Object(L.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,le(c,o);case 4:y(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),y(!0);case 10:return e.prev=10,d(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[o,c]),Object(n.useEffect)(E,[c]);var g=e.cityDetails.currWeatherInfo.description;return r.a.createElement("div",{className:"home_page ".concat(l?"":"home_page_light_mode")},r.a.createElement(Ee,null),function(){var t=!!s.find((function(t){return t.key===e.city.key}));return v?null:t?r.a.createElement(Y.a,{className:"favorite_icon favorite",onClick:function(){t?e.removeFavoriteCity(c):e.setFavoriteCities(e.city)}}):r.a.createElement(H.a,{className:"favorite_icon",onClick:function(){t?e.removeFavoriteCity(c):e.setFavoriteCities(e.city)}})}(),r.a.createElement("div",{className:"city_weather_wrapper"},h?r.a.createElement("div",{className:"loader"},r.a.createElement(J.a,null)):v?r.a.createElement("div",{className:"error_wrapper"},r.a.createElement("div",{className:"error_msg"},b),r.a.createElement(R.a,{variant:"text",onClick:E},"Try again")):[r.a.createElement(ge,{key:"currentWeather"}),r.a.createElement(_e,{key:"forecast"})],!v&&!h&&r.a.createElement(De,{weatherDescription:g})),v&&r.a.createElement("div",{className:"storm"},Ne(3),Me()))})),Ie=a(82),Fe=a.n(Ie),Re=a(81),Pe=a.n(Re);a(122);var Ae=Object(o.b)((function(e){return{favoriteCities:e.mainReducer.favoriteCities,cityDetails:e.mainReducer.cityDetails,metric:e.mainReducer.metric,darkMode:e.mainReducer.darkMode}}),{setCity:q,removeFavoriteCity:X})((function(e){var t=e.favoriteCities,a=void 0===t?[]:t,c=e.metric,i=e.darkMode,s=Object(n.useState)(!0),o=Object(K.a)(s,2),l=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(K.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)({}),y=Object(K.a)(v,2),E=y[0],k=y[1];function w(){Object(L.a)(B.a.mark((function e(){var t,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,Promise.all(a.map((function(e){return Q(e.key,c)})));case 4:if(t=e.sent,n=t.reduce((function(e,t,n){return Object(me.a)(Object(me.a)({},e),{},Object(h.a)({},a[n].key,t))}),{}),!a.length||Object.keys(n).length){e.next=8;break}throw new Error;case 8:k(n),f(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),f(!0);case 15:return e.prev=15,u(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))()}function O(){return a.length?a.map((function(t,a){var n=c?E[t.key].tempC:E[t.key].tempF;return r.a.createElement(we.Fade,{cascade:!0,delay:200*a,key:t.key},r.a.createElement("div",{key:t.key,className:"fav_city_container"},r.a.createElement("div",{className:"city_details",role:"button",tabIndex:0,onClick:function(){return function(t){e.setCity(t),e.history.push(g)}(t)}},r.a.createElement("div",{className:"city_name"},t.label),r.a.createElement("div",{className:"temp"},Math.round(n),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F")),r.a.createElement("div",{className:"description"},E[t.key].description)),E[t.key].img&&r.a.createElement("div",{className:"fav_weather_img"},r.a.createElement("img",{src:E[t.key].img,alt:"weather icon",className:"img"})),r.a.createElement("div",{className:"remove_icon_wrapper"},r.a.createElement(Fe.a,{className:"remove_icon",onClick:function(){e.removeFavoriteCity(t.key)}}))))})):r.a.createElement("div",{className:"no_favorites_container"},r.a.createElement("span",null,"There are no favorite cities saved yet, go to the home page, search for a city and click the heart to add it to your favorites list"),r.a.createElement(Pe.a,{forever:!0,duration:750},r.a.createElement(H.a,{className:"favorite_icon"})))}return Object(n.useEffect)(w,[]),r.a.createElement("div",{className:"favorites_wrapper ".concat(i?"":"favorites_light_mode")},l?r.a.createElement(J.a,{className:"loader"}):p?r.a.createElement("div",{className:"error_wrapper"},r.a.createElement("div",{className:"error_msg"},b),r.a.createElement(R.a,{variant:"text",onClick:w},"Try again")):O(),p&&r.a.createElement("div",{className:"storm"},Ne(3),Me()))}));a(123);var We=Object(o.b)((function(e){return{darkMode:e.mainReducer.darkMode}}))((function(e){var t=e.darkMode;return r.a.createElement("div",{className:"weather_container ".concat(t?"":"weather_container_light_mode")},r.a.createElement(W,null),r.a.createElement(F.d,null,r.a.createElement(F.b,{exect:!0,path:g,component:Te}),r.a.createElement(F.b,{exect:!0,path:k,component:Ae}),r.a.createElement(F.b,{path:"/",render:function(){return r.a.createElement(F.a,{to:"/home"})}})))}));a(124);function ze(){return r.a.createElement(I.a,{basename:"/Sunny"},r.a.createElement("div",{className:"App"},r.a.createElement(We,null)))}a(125);i.a.render(r.a.createElement(o.a,{store:T},r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a.p+"static/media/icon.9118e9d8.png"},91:function(e,t,a){e.exports=a(126)}},[[91,1,2]]]);
//# sourceMappingURL=main.95ad20b6.chunk.js.map