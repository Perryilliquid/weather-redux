(window["webpackJsonpreact-example"]=window["webpackJsonpreact-example"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),c=a(16),l=a(15),s=a(17),o=a(1),i=a.n(o),u=a(25),m=a(82),p=a.n(m),d=a(84),h=a(30),f=a(31),w=a(85),E=a.n(w),y="715ac60004286c422cbbbf1d407f9a12",C="https://api.openweathermap.org/data/2.5",g="type=like&sort=population&units=metric&cnt=7";var v=a(32),D=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.loading?i.a.createElement(v.a,null):this.props.children)}}]),t}(o.Component);D.defaultProps={loading:!1};var b=a(104),M=a(105),x=a(106),F=a(107),j=a(73),N=a.n(j),k=function(e){var t=e.city,a=e.windSpeed,n=e.clouds,r=e.tempCur,c=e.tempMin,l=e.tempMax,s=e.weatherMain,o=e.weatherIcon,u=e.weatherDesc,m=N()().format("YYYY-MM-DD, dddd");return i.a.createElement(b.a,{className:"currentForeCastContainer"},i.a.createElement(M.a,null,i.a.createElement(x.a,{className:"weatherIcon txt-right",src:"https://openweathermap.org/img/wn/".concat(o,".png"),alt:s}),i.a.createElement("h1",null,t," "),i.a.createElement("p",null,m),i.a.createElement("h2",null,r,"\xb0C"),i.a.createElement("span",null,"Min: ",c,"\xb0C / Max: ",l,"\xb0C"),i.a.createElement("h4",null,s),i.a.createElement(F.a,{className:"weatherDesc"},u),i.a.createElement(F.a,null,"Wind Speed: ",a," "),i.a.createElement(F.a,null,"Cloud: ",n," ")))},O=a(111),S=function(e){var t=e.date,a=e.tempCur,n=e.tempMin,r=e.tempMax,c=e.weatherMain,l=e.weatherIcon,s=e.showThreeHours,o=t.replace("00:00:00",""),u=N()(o).format("YYYY-MM-DD, dddd");return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{className:"forecast"},i.a.createElement(M.a,{className:""},i.a.createElement("h5",{className:"weatherDate"},u),i.a.createElement(x.a,{src:"https://openweathermap.org/img/wn/".concat(l,".png"),alt:c}),i.a.createElement("h2",null,a,"\xb0C"),i.a.createElement(F.a,null,n,"\xb0C / ",i.a.createElement("b",null,r,"\xb0C")),i.a.createElement(O.a,{color:"secondary",onClick:function(){return s(o)}},"Show Details"))))},Y=a(108),I=a(109),H=function(e){var t=e.date,a=e.tempCur,n=e.tempMin,r=e.tempMax,c=e.weatherMain,l=e.weatherIcon,s=e.weatherDesc,o=e.windSpeed,u=N()(t).format("YYYY-MM-DD, dddd hh:mm A");return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{className:"forecastDetails"},i.a.createElement(M.a,null,i.a.createElement(Y.a,null,i.a.createElement(I.a,null,i.a.createElement("h5",{className:"weatherDate"},u),i.a.createElement(x.a,{src:"https://openweathermap.org/img/wn/".concat(l,".png"),alt:c}),i.a.createElement("h2",null,a,"\xb0C"),i.a.createElement(F.a,null,n,"\xb0C / ",i.a.createElement("b",null,r,"\xb0C"))),i.a.createElement(I.a,null,i.a.createElement("h4",null,c),i.a.createElement(F.a,{className:"weatherDesc"},s),i.a.createElement(F.a,null,"Wind Speed: ",o," "))))))};o.Component;a.d(t,"MainContainer",(function(){return A}));var A=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={showModal:!1,city:"Hong Kong",currentCityId:1819729},a.searchCity=function(){console.log(a.state.city),a.props.fetchCurrentForecast(a.state.city)},a.changeHandler=function(e){var t=e.target.value;a.setState({city:t})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCurrentForecast(this.state.city)}},{key:"render",value:function(){var e=this.props,t=e.ajaxStatus,a=(e.profile,e.currentCity,e.currentForeCastData);e.fiveDaysForecastData;return console.log("temp: "+a),i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"header"},"Weather App "),i.a.createElement(D,{loading:t.isLoading},i.a.createElement("div",{className:"locationForm"},i.a.createElement("input",{name:"city",placeholder:"Hong Kong",onChange:this.changeHandler}),i.a.createElement("button",{onClick:this.searchCity}," ",i.a.createElement("i",{className:"fas fa-search"})," ")),i.a.createElement("div",{className:"dashboard"},i.a.createElement(k,{key:a.id,currentDate:a.dt,city:a.name,lat:a.coord.lat,lot:a.coord.lon,windSpeed:a.wind.speed,clouds:a.clouds.all,tempCur:a.main.temp,tempMin:a.main.temp_min,tempMax:a.main.temp_max,weatherMain:a.weather[0].main,weatherIcon:a.weather[0].icon,weatherDesc:a.weather[0].description}))))}}]),t}(o.Component);t.default=Object(u.connect)((function(e){return{ajaxStatus:e.ajaxStatus,currentCityId:e.store.currentCityId,currentForeCastData:e.store.currentForeCastData,fiveDaysForecastData:e.store.fiveDaysForecastData}}),{fetchCurrentForecast:function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.replace(/\s/g,"+"),r="".concat(C,"/weather?q=").concat(n,"&").concat(g,"&appid=").concat(y),a({type:h.b}),t.prev=3,t.next=6,E.a.get(r);case 6:c=t.sent,console.log("data: "+c.data),c.data&&(a({type:f.a,currentCityId:c.data.id,currentForeCastData:c.data}),a({type:h.a})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),a({type:h.d,serverStatus:t.t0.response.status,serverMessage:t.t0.response.data.message});case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}()},fetchFiveDaysForecast:function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(C,"/weather?id=").concat(e,"&").concat(g,"&appid=").concat(y),a({type:h.b}),t.prev=2,t.next=5,E.a.get(n);case 5:r=t.sent,a({type:f.b,fiveDaysForeCastData:r.data}),a({type:h.a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:h.d,serverStatus:t.t0.response.status,serverMessage:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}})(A)}}]);
//# sourceMappingURL=Home.fdbc7fba.chunk.js.map