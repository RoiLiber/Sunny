(this.webpackJsonpsunny=this.webpackJsonpsunny||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,s=a(7),l=a(30),u=a(72),m=a(73),h=a(22),d=a(170),p={setCity:"SET_CITY",setCityDetails:"SET_CITY_DETAILS",setFavoriteCities:"SET_FAVORITE_CITIES",removeFavoriteCity:"REMOVE_FAVORITE_CITY",updateFavorites:"UPDATE_FAVORITES",tampToggle:"TAMP_TOGGLE",setDarkMode:"SET_DARK_MODE",setGeoLocationApproval:"SET_GEO_LOCATION_APPROVAL"},f=a(74),v=a.n(f),y=localStorage.getItem("favorites"),b=localStorage.getItem("metricPreferences"),E=localStorage.getItem("darkModePreferences"),g=localStorage.getItem("geoLocationApproved"),O=v()({city:{},cityDetails:{currWeatherInfo:{},forecast:[]},favoriteCities:JSON.parse(y)||[],metric:null===JSON.parse(b)||JSON.parse(b),darkMode:null===JSON.parse(E)||JSON.parse(E),geoLocation:JSON.parse(g)||!1}),w=Object(d.a)((o={},Object(h.a)(o,p.setCity,(function(e,t){var a=t.value;return e.setIn(["city"],a)})),Object(h.a)(o,p.setCityDetails,(function(e,t){var a=t.key,n=t.value;return e.setIn(["cityDetails",a],n)})),Object(h.a)(o,p.updateFavorites,(function(e,t){var a=t.favorites;return e.set("favoriteCities",a)})),Object(h.a)(o,p.tampToggle,(function(e,t){var a=t.bool;return e.setIn(["metric"],a)})),Object(h.a)(o,p.setDarkMode,(function(e,t){var a=t.bool;return e.setIn(["darkMode"],a)})),Object(h.a)(o,p.setGeoLocationApproval,(function(e,t){var a=t.bool;return e.setIn(["geoLocation"],a)})),o),O),k=Object(l.combineReducers)({mainReducer:w}),N=Object(l.createStore)(k,{},Object(m.composeWithDevTools)(Object(l.applyMiddleware)(u.a))),_=a(35),j=a(14),x="".concat("https://cors-anywhere.herokuapp.com/").concat("https://dataservice.accuweather.com"),S="https://developer.accuweather.com/sites/default/files",C="Sorry, unable to fetch the weather, maybe it's too cloudy",I="/home",T="/favorites",M=Object({NODE_ENV:"production",PUBLIC_URL:"/Sunny",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY||"pMuQWrHHC0dgSiyf23IDAfTVGdDsVyG3",R=a(58),D=function(e){return{type:p.setCity,value:e}},F=function(e,t){return{type:p.setCityDetails,key:e,value:t}},P=function(e){return localStorage.setItem("metricPreferences",JSON.stringify(e)),{type:p.tampToggle,bool:e}},A=function(e){return localStorage.setItem("darkModePreferences",JSON.stringify(e)),{type:p.setDarkMode,bool:e}},L=function(e){var t=N.getState().mainReducer.favoriteCities,a=[].concat(Object(R.a)(t),[e]);return localStorage.setItem("favorites",JSON.stringify(a)),{type:p.updateFavorites,favorites:a}},z=function(e){var t=N.getState().mainReducer.favoriteCities.filter((function(t){return t.key!==e}));return localStorage.setItem("favorites",JSON.stringify(t)),{type:p.updateFavorites,favorites:t}},B=a(11),W=a.n(B),J=a(16),V=a(128),G=a(75),H=a.n(G),K=a(34);function Y(e){return U.apply(this,arguments)}function U(){return(U=Object(J.a)(W.a.mark((function e(t){var a,n,r,c,i,o,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/currentconditions/v1/").concat(t,"?apikey=").concat(M));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r=n[0]||[],c=r.WeatherText,i=r.Temperature,o=r.WeatherIcon,s=o&&"".concat(S,"/").concat(o.toString().padStart(2,"0"),"-s.png"),e.abrupt("return",{tempC:Object(K.get)(i,["Metric","Value"],""),tempF:Object(K.get)(i,["Imperial","Value"],""),description:c,img:s});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(J.a)(W.a.mark((function e(t){var a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:a=e.sent,N.dispatch(F("currWeatherInfo",a));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return Q.apply(this,arguments)}function Q(){return(Q=Object(J.a)(W.a.mark((function e(){var t,a,n,r,c,i,o,s,l,u;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/locations/v1/cities/ipaddress?apikey=").concat(M));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r=(n=a||{}).ParentCity,c=n.Country,o=(i=r||{}).Key,s=i.LocalizedName,l=c.LocalizedName,u={label:s,key:o,country:l},N.dispatch(D(u));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(J.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/locations/v1/cities/autocomplete?apikey=").concat(M,"&q=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t){return ae.apply(this,arguments)}function ae(){return(ae=Object(J.a)(W.a.mark((function e(t,a){var n,r,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/forecasts/v1/daily/5day/").concat(t,"?apikey=").concat(M,"&metric=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,c=(r||{}).DailyForecasts,e.abrupt("return",c.map((function(e){return{date:e.Date,temp:{min:Object(K.get)(e.Temperature,["Minimum","Value"],""),max:Object(K.get)(e.Temperature,["Maximum","Value"],"")},dayTemp:{icon:Object(K.get)(e.Day,["Icon"],""),text:Object(K.get)(e.Day,["IconPhrase"],"")}}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=Object(J.a)(W.a.mark((function e(t,a){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(t,a);case 2:n=e.sent,N.dispatch(F("forecast",n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(102);var ce=Object(j.g)((function(e){var t=e.location.pathname,a=Object(s.c)((function(e){return e.mainReducer.darkMode})),c=Object(s.c)((function(e){return e.mainReducer.geoLocation}));return Object(n.useEffect)((function(){!0===c&&Object(J.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("geoLocationCity error");case 8:return e.prev=8,console.log("geoLocationCity set"),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,5,8,11]])})))()}),[c]),r.a.createElement("div",{className:"header ".concat(a?"":"header_light_mode")},r.a.createElement("div",{className:"logo_wrapper"},r.a.createElement("img",{src:H.a,alt:"logo"}),r.a.createElement("span",{className:"logo"},"Sunny")),r.a.createElement("div",{className:"app_nav_buttons"},r.a.createElement(_.b,{to:I},r.a.createElement(V.a,{variant:"text",className:t===I?"active":""},"Home")),r.a.createElement(_.b,{to:T},r.a.createElement(V.a,{variant:"text",className:t===T?"active":""},"Favorites"))))})),ie=a(19),oe=a(167),se=a(56),le=a.n(se),ue=a(81),me=a.n(ue),he=a(38),de=a(5),pe=a(169),fe=a(171),ve="#FFD60A",ye="#34C759",be=(a(104),/^[a-zA-Z ]+(-[a-zA-Z ]+)*$/);var Ee=Object(de.a)((function(){return{textField:{"& fieldset, &:hover fieldset":{borderColor:"".concat(ve," !important")}},invisible:{display:"none"},paper:{backgroundColor:"".concat(ye," !important"),"& div:hover":{backgroundColor:"".concat(ve," !important")}}}}))((function(e){var t=e.classes,a=Object(s.b)(),c=Object(s.c)((function(e){return e.mainReducer.darkMode})),i=Object(n.useState)(!1),o=Object(ie.a)(i,2),l=o[0],u=o[1],m=Object(n.useState)([]),h=Object(ie.a)(m,2),d=h[0],p=h[1],f=Object(n.useState)(!1),v=Object(ie.a)(f,2),y=v[0],b=v[1],E=Object(n.useState)(""),g=Object(ie.a)(E,2),O=g[0],w=g[1],k=l&&0===d.length;function N(){return(N=Object(J.a)(W.a.mark((function e(t,a){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(a),!(a.length<1)){e.next=3;break}return e.abrupt("return",u(!1));case 3:if(!(a.length<2&&l)){e.next=5;break}return e.abrupt("return",u(!1));case 5:return l||u(!0),e.prev=6,e.next=9,X(a);case 9:n=e.sent,b(!1),p(n.map((function(e){return{label:e.LocalizedName,key:e.Key,country:e.Country.LocalizedName}}))),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),b(!0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){l||p([])}),[l]),r.a.createElement(fe.a,{className:"auto_complete ".concat(c?"":"light_mode"),open:l,onClose:function(){return u(!1)},onChange:function(e,t){t&&a(D(t||{}))},value:O,onInputChange:function(e,t){return N.apply(this,arguments)},getOptionLabel:function(e){return e&&e.label&&"".concat(e.label,", ").concat(e.country)},options:d,loading:k,classes:{popupIndicator:t.invisible,paper:t.paper},renderInput:function(e){return r.a.createElement(pe.a,Object.assign({},e,{placeholder:"Search city",fullWidth:!0,value:O,onChange:function(e){be.test(e.target.value)&&w(O)},variant:"outlined",helperText:y?"Sorry, unable to fetch the cities list, maybe it's to cloudy":" ",InputProps:Object(he.a)(Object(he.a)({},e.InputProps),{},{classes:{root:t.textField},endAdornment:r.a.createElement(r.a.Fragment,null,k?r.a.createElement(oe.a,{color:"primary",size:20}):null,e.InputProps.endAdornment)})}))}})})),ge=a(168);a(105);var Oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.mainReducer.city})),a=Object(s.c)((function(e){return e.mainReducer.cityDetails})),n=Object(s.c)((function(e){return e.mainReducer.metric})),c=Object(s.c)((function(e){return e.mainReducer.darkMode})),i=t.label,o=t.country,l=(a||{}).currWeatherInfo||{},u=l.tempC,m=l.tempF,h=l.description,d=l.img,p=n?u:m;return r.a.createElement("div",{className:"current_weather_wrapper ".concat(c?"":"current_weather_light_mode")},r.a.createElement("div",{className:"cityName"},"".concat(i,", ").concat(o)),r.a.createElement("div",{className:"description"},h),r.a.createElement("div",{className:"temp_icon_wrapper"},d&&r.a.createElement("img",{src:d,alt:"weather icon",className:"img"}),r.a.createElement("div",{className:"degree"},Math.round(p),"\xb0",r.a.createElement("span",{className:"degree_symbol"},n?"C":"F"))),r.a.createElement("div",{className:"set_tamp_type"},r.a.createElement(ge.a,{disableElevation:!0,variant:"contained"},r.a.createElement(V.a,{className:"".concat(n?"active":""),onClick:function(){return e(P(!0))}},"Celsius"),r.a.createElement(V.a,{className:"".concat(n?"":"active"),onClick:function(){return e(P(!1))}},"Fahrenheit"))),r.a.createElement("div",{className:"set_dark_mode"},r.a.createElement(ge.a,{disableElevation:!0,variant:"contained"},r.a.createElement(V.a,{className:"".concat(c?"active":""),onClick:function(){return e(A(!0))}},"Dark"),r.a.createElement(V.a,{className:"".concat(c?"":"active"),onClick:function(){return e(A(!1))}},"Light"))))},we=a(172),ke=a(55);a(115);var Ne=function(e){var t=e.dayDetails,a=e.currDay,n=e.index,c=Object(s.c)((function(e){return e.mainReducer.metric})),i=Object(s.c)((function(e){return e.mainReducer.darkMode})),o=t.temp,l=t.dayTemp,u=t.date,m=o.min,h=o.max;return r.a.createElement(ke.Fade,{cascade:!0,delay:150*n},r.a.createElement("div",{className:"card_wrapper ".concat(i?"":"card_light_mode")},r.a.createElement("div",{className:"day_name ".concat(a?"today":"")},new Date(u).toString().split(" ")[0]),r.a.createElement("div",{className:"weather_img"},r.a.createElement("img",{src:"".concat(S,"/").concat(l.icon.toString().padStart(2,"0"),"-s.png"),alt:"daily weather icon",className:"icon"})),r.a.createElement("div",{className:"day_tamp"},r.a.createElement("span",{className:"low_tamp_symbol"},"L:"),Math.round(m),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F"),r.a.createElement("span",{className:"high_tamp_symbol"},"H:"),Math.round(h),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F"))))};a(116);var _e=function(){var e=Object(s.c)((function(e){return e.mainReducer.cityDetails})),t=Object(s.c)((function(e){return e.mainReducer.darkMode}));return r.a.createElement("div",{className:"forecast_wrapper ".concat(t?"":"forecast_light_mode")},r.a.createElement("div",{className:"cards"},e.forecast.map((function(e,t){return r.a.createElement(Ne,{dayDetails:e,key:Object(we.a)(),currDay:!t,index:t})}))))};a(117);function je(e){function t(){var e=1===Math.floor(2*Math.random())?1:-1,t=Math.floor(e*(1e3*Math.random())),a="".concat(t,"px"),n=Math.floor(2e3*Math.random());return{left:"".concat(n,"px"),top:a}}return r.a.createElement("div",{className:"visualisation-container"},r.a.createElement("div",{className:"rain_effect ".concat(3===e?"blnk":"")},Object(R.a)(Array(50*e)).map((function(e,a){return r.a.createElement("i",{key:a,style:t()})}))))}var xe=a(45),Se=a(46),Ce=a(63),Ie=a.n(Ce);a(118);function Te(){return function(){var e=function(){return(new Date).getTime()},t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?2*(Math.random()-.5)*e:Math.random()*e},a=document.getElementById("lightning"),n=a&&a.getContext("2d"),r=document.getElementById("cloudlightning"),c=r&&r.getContext("2d"),i=document.getElementById("lightningSheet"),o=i&&i.getContext("2d"),s=[],l=[],u=[],m=[],h=0,d=0,p=e(),f=function(){function e(a,n,r){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4?arguments[4]:void 0;Object(xe.a)(this,e);var o,s=a||t(h),m=n||40+t(100);this.paths=[],this.red=255,this.green=255,this.blue=255,this.alpha=1,this.hasEnded=!1,this.width=r||t(3)+1,this.isBranch=c,this.xDeviation=c?1.3:1,this.branchDirection=i||2*(Math.random()-.5),this.flickerCount=0,this.clouds=[],this.paths.push({x:s,y:m}),u.push(new v(this.width)),this.isBranch||(o=new b(s,m,this.width),l.push(o),this.clouds.push(o)),this.isBranch&&(this.width=1)}return Object(Se.a)(e,[{key:"animate",value:function(){var a=3+t(5),n=this.isBranch?.9:.01;if(!this.hasEnded){for(var r,c,i=this.getLastPoint(),o=i.x,l=i.y,u=0;u<a;u++)o=r=o+9*(this.isBranch?this.branchDirection:2*(Math.random()-.5))*this.xDeviation,l=c=l+t(8)+2,this.paths.push({x:r,y:c}),this.isBranch&&t()<.03&&s.push(new e(o,l,this.width,!0));this.hasEnded=l/d>.8||t()>.6&&this.paths.length>90||this.paths.length>120||this.isBranch&&this.paths.length>5,t()>n&&this.paths.length>5&&this.paths.length<80&&s.push(new e(o,l,this.width,!0))}this.alpha>0&&(this.alpha-=.013,this.alpha<.5&&(this.green-=4.5),this.isBranch&&(this.alpha-=.0065)),!this.isBranch&&t()<.023&&this.flickerCount<2&&this.alpha>.3&&(this.alpha=1,this.green=240,this.flickerCount++,this.clouds.map((function(e){return e.alpha=t(.6)+.3,e.alpha}))),(this.isBranch&&this.flickerCount>0||this.alpha<0)&&(this.alpha=0)}},{key:"render",value:function(){var e=this.getColour();n&&n.beginPath(),n&&(n.strokeStyle=e),n&&(n.lineWidth=this.width),0===this.flickerCount&&(n&&(n.shadowBlur=3*this.width),n&&(n.shadowColor=e)),this.paths.forEach((function(e){n&&n.lineTo(e.x,e.y)})),n&&n.stroke()}},{key:"getColour",value:function(e,t,a,n){return"rgba(".concat(e||this.red,", ").concat(t||this.green,", ").concat(a||this.blue,", ").concat(n||this.alpha,")")}},{key:"getLastPoint",value:function(){if(this.paths.length>0){var e=this.paths[this.paths.length-1];return{x:e.x,y:e.y}}return{x:0,y:0}}}]),e}(),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(xe.a)(this,e),this.alpha=.09*t}return Object(Se.a)(e,[{key:"animate",value:function(){this.alpha-=.026}},{key:"render",value:function(){n&&n.beginPath(),n&&(n.fillStyle="rgba(50, 48, 51, ".concat(this.alpha,")")),n&&n.fillRect(0,0,h,d)}}]),e}(),y=function(){function e(a,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(Object(xe.a)(this,e),this.alpha=t(.6)+.2,this.x=a||t(h),this.y=n||t(.6*d)-100,this.size=t(50)+40,this.size=(1-this.y/d*.6)*this.size,r)for(var c,i,o=0;o<t(12)+4;o++)c=this.x+t(300,!0),i=this.y+t(80,!0),m.push(new e(c,i,!1))}return Object(Se.a)(e,[{key:"animate",value:function(){this.alpha-=.0104,this.alpha<.3&&t()<.025&&(this.alpha+=t(.4))}},{key:"render",value:function(){o&&o.save(),o&&o.scale(2,1),o&&o.beginPath(),o&&o.arc(this.x/2,this.y,this.size,2*Math.PI,!1),o&&o.closePath(),o&&o.restore(),o&&(o.filter="blur(".concat(this.size,"px)")),o&&(o.fillStyle="rgba(100, 100, 100, ".concat(this.alpha,")")),o&&o.fill(),o&&(o.shadowColor="#999999"),o&&(o.shadowBlur=this.size)}}]),e}(),b=function(){function e(a,n,r){Object(xe.a)(this,e),this.x=a,this.y=n,this.size=3*r*t(2)+10,this.alpha=1}return Object(Se.a)(e,[{key:"animate",value:function(){this.alpha-=.013}},{key:"render",value:function(){c&&c.save(),c&&c.scale(2.5,1),c&&c.beginPath(),c&&c.arc(this.x/2.5,this.y,this.size,2*Math.PI,!1),c&&c.restore(),c&&(c.filter="blur(".concat(this.size,"px)")),c&&(c.fillStyle="rgba(255, 255, 255, ".concat(this.alpha,")")),c&&c.fill(),c&&(c.shadowColor="#eeeeff"),c&&(c.shadowBlur=8*this.size+50)}}]),e}(),E=function(){h=window.innerWidth,d=window.innerHeight,a&&(a.width=h),a&&(a.height=d),r&&(r.width=h),r&&(r.height=d),i&&(i.width=h),i&&(i.height=.8*d)};Ie()(window).on("mousedown",(function(e){s.push(new f(e.clientX,e.clientY))})),E(),Ie()(window).resize(E),s.push(new f(400,100)),function a(){n&&n.clearRect(0,0,h,d),c&&c.clearRect(0,0,h,d),o&&o.clearRect(0,0,h,d),s.forEach((function(e){e.animate(),e.render()})),l.forEach((function(e){e.animate(),e.render()})),m.forEach((function(e){e.animate(),e.render()})),u.forEach((function(e){e.animate(),e.render()})),t()<.03&&e()-p>1e3&&(t()>.4?s.push(new f):m.push(new y),p=e()),s=s.filter((function(e){return e.alpha>0})),l=l.filter((function(e){return e.alpha>0})),u=u.filter((function(e){return e.alpha>0})),m=m.filter((function(e){return e.alpha>0})),requestAnimationFrame(a)}()}(),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:"lightning"}))}a(119);function Me(e){var t=e.weatherDescription,a=Object(s.c)((function(e){return e.mainReducer.darkMode}))?"":"weather_icon_light_mode";switch(t){case"Hazy Sunshine":case"Intermittent Clouds":case"Cloudy":case"Mostly cloudy":case"Dreary (Overcast)":case"Flurries":case"Mostly Cloudy w/ Flurries":case"Partly Sunny w/ Flurries":case"Windy":case"Fog":return r.a.createElement("div",{className:"weather_icon cloudy ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"cloud"}));case"Showers":case"Rain":case"Light rain":case"Sleet":case"Freezing Rain":case"Partly Cloudy w/ Showers":return r.a.createElement(n.Fragment,null,je(2),r.a.createElement("div",{className:"weather_icon rainy ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"rain"})));case"Mostly Cloudy w/ Showers":case"Partly Sunny w/ Showers":return r.a.createElement(n.Fragment,null,je(1),r.a.createElement("div",{className:"weather_icon sun-shower ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"sun"},r.a.createElement("div",{className:"rays"})),r.a.createElement("div",{className:"rain"})));case"T-Storms":case"Thunderstorm":case"Mostly Cloudy w/ T-Storms":case"Partly Sunny w/ T-Storms":return r.a.createElement(n.Fragment,null,je(3),Te(),r.a.createElement("div",{className:"weather_icon thunder-storm ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"lightning"},r.a.createElement("div",{className:"bolt"}),r.a.createElement("div",{className:"bolt"}))));case"Ice":case"Snow":case"Rain and Snow":case"Mostly Cloudy w/ Snow":return r.a.createElement("div",{className:"weather_icon flurries ".concat(a)},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"snow"},r.a.createElement("div",{className:"flake"}),r.a.createElement("div",{className:"flake"})));default:return r.a.createElement("div",{className:"weather_icon sunny ".concat(a)},r.a.createElement("div",{className:"sun"},r.a.createElement("div",{className:"rays"})))}}a(120);var Re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.mainReducer.city})),a=Object(s.c)((function(e){return e.mainReducer.cityDetails})),c=Object(s.c)((function(e){return e.mainReducer.favoriteCities})),i=Object(s.c)((function(e){return e.mainReducer.metric})),o=Object(s.c)((function(e){return e.mainReducer.darkMode})),l=t.key,u=void 0===l?"":l,m=t.label,h=Object(n.useState)(!1),d=Object(ie.a)(h,2),p=d[0],f=d[1],v=Object(n.useState)(!1),y=Object(ie.a)(v,2),b=y[0],E=y[1];function g(){u&&Object(J.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,X(m);case 4:return e.next=6,q(u);case 6:return e.next=8,ne(u,i);case 8:E(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),E(!0);case 14:return e.prev=14,f(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()}Object(n.useEffect)((function(){u&&Object(J.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,ne(u,i);case 4:E(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),E(!0);case 10:return e.prev=10,f(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[i,u]),Object(n.useEffect)(g,[u]);var O=a.currWeatherInfo.description;return r.a.createElement("div",{className:"home_page ".concat(o?"":"home_page_light_mode")},r.a.createElement(Ee,null),function(){var a=!!c.find((function(e){return e.key===t.key}));return b?null:a?r.a.createElement(me.a,{className:"favorite_icon favorite",onClick:function(){e(a?z(u):L(t))}}):r.a.createElement(le.a,{className:"favorite_icon",onClick:function(){e(a?z(u):L(t))}})}(),r.a.createElement("div",{className:"city_weather_wrapper"},p?r.a.createElement("div",{className:"loader"},r.a.createElement(oe.a,null)):b?r.a.createElement("div",{className:"error_wrapper"},r.a.createElement("div",{className:"error_msg"},C),r.a.createElement(V.a,{variant:"text",onClick:g},"Try again")):[r.a.createElement(Oe,{key:"currentWeather"}),r.a.createElement(_e,{key:"forecast"})],!b&&!p&&r.a.createElement(Me,{weatherDescription:O})),b&&r.a.createElement("div",{className:"storm"},je(3),Te()))},De=a(82),Fe=a.n(De),Pe=a(44),Ae=a.n(Pe);a(122);var Le=function(e){var t=Object(s.b)(),a=Object(s.c)((function(e){return e.mainReducer.favoriteCities})),c=Object(s.c)((function(e){return e.mainReducer.metric})),i=Object(s.c)((function(e){return e.mainReducer.darkMode})),o=Object(n.useState)(!0),l=Object(ie.a)(o,2),u=l[0],m=l[1],d=Object(n.useState)(!1),p=Object(ie.a)(d,2),f=p[0],v=p[1],y=Object(n.useState)({}),b=Object(ie.a)(y,2),E=b[0],g=b[1];function O(){Object(J.a)(W.a.mark((function e(){var t,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,Promise.all(a.map((function(e){return Y(e.key,c)})));case 4:if(t=e.sent,n=t.reduce((function(e,t,n){return Object(he.a)(Object(he.a)({},e),{},Object(h.a)({},a[n].key,t))}),{}),!a.length||Object.keys(n).length){e.next=8;break}throw new Error;case 8:g(n),v(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),v(!0);case 15:return e.prev=15,m(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))()}function w(){return a.length?a.map((function(a,n){var i=c?E[a.key].tempC:E[a.key].tempF;return r.a.createElement(ke.Fade,{cascade:!0,delay:200*n,key:a.key},r.a.createElement("div",{key:a.key,className:"fav_city_container"},r.a.createElement("div",{className:"city_details",role:"button",tabIndex:0,onClick:function(){return function(a){t(D(a)),e.history.push(I)}(a)}},r.a.createElement("div",{className:"city_name"},a.label),r.a.createElement("div",{className:"temp"},Math.round(i),"\xb0",r.a.createElement("span",{className:"tamp_symbol"},c?"C":"F")),r.a.createElement("div",{className:"description"},E[a.key].description)),E[a.key].img&&r.a.createElement("div",{className:"fav_weather_img"},r.a.createElement("img",{src:E[a.key].img,alt:"weather icon",className:"img"})),r.a.createElement("div",{className:"remove_icon_wrapper"},r.a.createElement(Fe.a,{className:"remove_icon",onClick:function(){t(z(a.key))}}))))})):r.a.createElement("div",{className:"no_favorites_container"},r.a.createElement("span",null,"There are no favorite cities saved yet, go to the home page, search for a city and click the heart to add it to your favorites list"),r.a.createElement(Ae.a,{forever:!0,duration:750},r.a.createElement(le.a,{className:"favorite_icon"})))}return Object(n.useEffect)(O,[]),r.a.createElement("div",{className:"favorites_wrapper ".concat(i?"":"favorites_light_mode")},u?r.a.createElement(oe.a,{className:"loader"}):f?r.a.createElement("div",{className:"error_wrapper"},r.a.createElement("div",{className:"error_msg"},C),r.a.createElement(V.a,{variant:"text",onClick:O},"Try again")):w(),f&&r.a.createElement("div",{className:"storm"},je(3),Te()))};a(123);function ze(e){var t=e.text,a=e.btnText,n=e.onClick,c=Object(s.c)((function(e){return e.mainReducer.darkMode}));return r.a.createElement("div",{className:"message_wrapper ".concat(c?"":"message_light_mode")},r.a.createElement(Ae.a,null,r.a.createElement("div",{className:"msg"},t)),r.a.createElement("div",{className:"message_button_wrapper"},r.a.createElement(Ae.a,null,r.a.createElement(V.a,{variant:"text",onClick:function(){return n()}},a))))}a(124);var Be=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.mainReducer.geoLocation})),a=Object(s.c)((function(e){return e.mainReducer.darkMode}));return r.a.createElement("div",{className:"weather_container ".concat(a?"":"weather_container_light_mode")},r.a.createElement(ce,null),!0!==t?r.a.createElement(ze,{text:"Sunny want to know your location, can we?",btnText:"Approve",onClick:function(){return e((t=!0,localStorage.setItem("geoLocationApproved",JSON.stringify(t)),{type:p.setGeoLocationApproval,bool:t}));var t}}):r.a.createElement(j.d,null,r.a.createElement(j.b,{exect:!0,path:I,component:Re}),r.a.createElement(j.b,{exect:!0,path:T,component:Le}),r.a.createElement(j.b,{path:"/",render:function(){return r.a.createElement(j.a,{to:"/home"})}})))};a(125);function We(){return r.a.createElement(_.a,{basename:"/Sunny"},r.a.createElement("div",{className:"App"},r.a.createElement(Be,null)))}a(126);i.a.render(r.a.createElement(s.a,{store:N},r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a.p+"static/media/icon.9118e9d8.png"},91:function(e,t,a){e.exports=a(127)}},[[91,1,2]]]);
//# sourceMappingURL=main.5d0933a6.chunk.js.map