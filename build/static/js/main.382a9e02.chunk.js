(window["webpackJsonpreact-example"]=window["webpackJsonpreact-example"]||[]).push([[1],{30:function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"f",(function(){return u})),r.d(t,"e",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"g",(function(){return l}));var n=r(23);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i="aspire/ajaxStatus/fetchDataServerError",c="aspire/ajaxStatus/fetchPending",o="aspire/ajaxStatus/fetchComplete",u="aspire/ajaxStatus/submitPending",d="aspire/ajaxStatus/submitComplete",p="aspire/ajaxStatus/resetStatus",f={isServerError:!1,isLoading:!1,isSubmitting:!1,isSubmitSuccess:!1,serverStatus:"",serverMessage:"",serverErrors:[],sendForm:"",actionName:""};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case i:return s({},e,{isServerError:!0,isLoading:!1,isSubmitting:!1,serverStatus:t.serverStatus,serverMessage:t.serverMessage,serverErrors:t.serverErrors});case c:return s({},e,{isLoading:!0,actionName:t.actionName});case o:return s({},e,{isLoading:!1,isServerError:!1,isSubmitSuccess:!1,serverStatus:""});case u:return s({},e,{isSubmitting:!0,sendForm:t.sendForm});case d:return s({},e,{isSubmitting:!1,isSubmitSuccess:!0,isServerError:!1,serverMessage:t.message||""});case p:return s({},e,{isServerError:!1,isLoading:!1,isSubmitting:!1,isSubmitSuccess:!1,serverStatus:"",serverMessage:"",sendForm:""});default:return e}}},31:function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return p}));var n=r(23),a=r(39);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c="aspire/loan/fetchDetails",o="weather/fetchCurrentForecast",u="weather/fetchFiveDaysForecast",d={profile:{image:{},redInvoice:{}},currentCityId:1819729,currentForeCastData:a,fiveDaysForeCastData:{}};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case c:return i({},e,{profile:t.details});case o:return i({},e,{currentCityId:t.currentCityId,currentForeCastData:t.currentForeCastData});case u:return i({},e,{fiveDaysForeCastData:t.fiveDaysForeCastData});default:return e}}},32:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(13),a=r(14),s=r(16),i=r(15),c=r(17),o=r(1),u=r.n(o),d=(r(62),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"spinner"},u.a.createElement("div",{className:"bounce1"}),u.a.createElement("div",{className:"bounce2"}),u.a.createElement("div",{className:"bounce3"}))}}]),t}(o.Component))},39:function(e){e.exports=JSON.parse('{"coord":{"lon":114.16,"lat":22.28},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":26.13,"pressure":1015,"humidity":65,"temp_min":23.89,"temp_max":28.33},"visibility":10000,"wind":{"speed":4.6,"deg":150},"clouds":{"all":0},"dt":1571566783,"sys":{"type":1,"id":9154,"message":0.0073,"country":"CN","sunrise":1571523674,"sunset":1571565299},"timezone":28800,"id":1819729,"name":"Hong Kong","cod":200}')},43:function(e,t,r){e.exports=r(63)},61:function(e,t,r){},62:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(34),i=r(13),c=r(14),o=r(16),u=r(15),d=r(17),p=r(19),f=r(11),l=r(38),b=r(7),m=r(66),v=r(30),O=r(31),g=Object(f.c)({ajaxStatus:v.g,store:O.d,form:m.a}),y=Object(b.a)(),j=[l.a,Object(p.routerMiddleware)(y)],S=f.d.apply(void 0,[f.a.apply(void 0,j)].concat([])),h=Object(f.e)(Object(p.connectRouter)(y)(g),{},S),w=(r(60),r(61),r(41)),E=r.n(w),D=r(32),P=E()({loader:function(){return Promise.all([r.e(4),r.e(0)]).then(r.bind(null,110))},loading:D.a}),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(P,null)}}]),t}(n.Component),F=r(25),x=document.getElementById("root");Object(s.render)(a.a.createElement(F.Provider,{store:h},a.a.createElement(C,null)),x)}},[[43,2,3]]]);
//# sourceMappingURL=main.382a9e02.chunk.js.map