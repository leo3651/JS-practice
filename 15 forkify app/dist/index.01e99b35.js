function e(e){return e&&e.__esModule?e.default:e}var t,r,n,o,i,a,s,c,u,l,d,p,h,f,g,m,v,y,b,_=globalThis,w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof _&&_)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},F={};S=!(F=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},O={};O=!F(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;$=O?j.bind(j):function(){return j.apply(j,arguments)};var L={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;a=x&&!L.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:L;var M={};M=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var T={},P={},I={},q=Function.prototype,A=q.call,H=O&&q.bind.bind(A,A),N={},U=(I=O?H:function(e){return function(){return A.apply(e,arguments)}})({}.toString),C=I("".slice);N=function(e){return C(U(e),8,-1)};var R=Object,D=I("".split);P=F(function(){return!R("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?D(e,""):R(e)}:R;var z={},W={};W=function(e){return null==e};var G=TypeError;z=function(e){if(W(e))throw new G("Can't call method on "+e);return e},T=function(e){return P(z(e))};var B={},Q={},Y={},J={},V="object"==typeof document&&document.all;J=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},Y=function(e){return"object"==typeof e?null!==e:J(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],J(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=I({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eo=k.process,ei=k.Deno,ea=eo&&eo.versions||ei&&ei.version,es=ea&&ea.v8;es&&(c=(s=es.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!c&&en&&(!(s=en.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=en.match(/Chrome\/(\d+)/))&&(c=+s[1]),er=c;var ec=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!F(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return J(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},eh=String;ep=function(e){try{return eh(e)}catch(e){return"Object"}};var ef=TypeError;ed=function(e){if(J(e))return e;throw new ef(ep(e)+" is not a function")},el=function(e,t){var r=e[t];return W(r)?void 0:ed(r)};var eg={},em=TypeError;eg=function(e,t){var r,n;if("string"===t&&J(r=e.toString)&&!Y(n=$(r,e))||J(r=e.valueOf)&&!Y(n=$(r,e))||"string"!==t&&J(r=e.toString)&&!Y(n=$(r,e)))return n;throw new em("Can't convert object to primitive value")};var ev={},ey={},eb={};eb=!1;var e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__",eE=ey=k[ek]||e_(ek,{});(eE.versions||(eE.versions=[])).push({version:"3.36.0",mode:eb?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return ey[e]||(ey[e]=t||{})};var eS={},eF={},e$=Object;eF=function(e){return e$(z(e))};var eO=I({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return eO(eF(e),t)};var ej={},eL=0,ex=Math.random(),eM=I(1..toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++eL+ex,36)};var eT=k.Symbol,eP=ev("wks"),eI=ee?eT.for||eT:eT&&eT.withoutSetter||ej,eq=TypeError,eA=(eS(eP,t="toPrimitive")||(eP[t]=et&&eS(eT,t)?eT[t]:eI("Symbol."+t)),eP[t]);Q=function(e,t){if(!Y(e)||K(e))return e;var r,n=el(e,eA);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!Y(r)||K(r))return r;throw new eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},B=function(e){var t=Q(e,"string");return K(t)?t:t+""};var eH={},eN={},eU=k.document,eC=Y(eU)&&Y(eU.createElement);eN=function(e){return eC?eU.createElement(e):{}},eH=!S&&!F(function(){return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});var eR=Object.getOwnPropertyDescriptor;i=S?eR:function(e,t){if(e=T(e),t=B(t),eH)try{return eR(e,t)}catch(e){}if(eS(e,t))return M(!$(a,e,t),e[t])};var eD={},ez={};ez=S&&F(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eG=String,eB=TypeError;eW=function(e){if(Y(e))return e;throw new eB(eG(e)+" is not an object")};var eQ=TypeError,eY=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eV="enumerable",eK="configurable",eX="writable";u=S?ez?function(e,t,r){if(eW(e),t=B(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eX in r&&!r[eX]){var n=eJ(e,t);n&&n[eX]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eW(e),t=B(t),eW(r),eH)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=S?function(e,t,r){return u(e,t,M(1,r))}:function(e,t,r){return e[t]=r,e};var eZ={},e0={},e1=Function.prototype,e2=S&&Object.getOwnPropertyDescriptor,e3=eS(e1,"name")&&(!S||S&&e2(e1,"name").configurable),e4={},e5=I(Function.toString);J(ey.inspectSource)||(ey.inspectSource=function(e){return e5(e)}),e4=ey.inspectSource;var e6={},e9={},e7=k.WeakMap;e9=J(e7)&&/native code/.test(String(e7));var e8={},te=ev("keys");e8=function(e){return te[e]||(te[e]=ej(e))};var tt={};tt={};var tr="Object already initialized",tn=k.TypeError,to=k.WeakMap;if(e9||ey.state){var ti=ey.state||(ey.state=new to);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,l=function(e,t){if(ti.has(e))throw new tn(tr);return t.facade=e,ti.set(e,t),t},d=function(e){return ti.get(e)||{}},p=function(e){return ti.has(e)}}else{var ta=e8("state");tt[ta]=!0,l=function(e,t){if(eS(e,ta))throw new tn(tr);return t.facade=e,eD(e,ta,t),t},d=function(e){return eS(e,ta)?e[ta]:{}},p=function(e){return eS(e,ta)}}var ts=(e6={set:l,get:d,has:p,enforce:function(e){return p(e)?d(e):l(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=d(t)).type!==e)throw new tn("Incompatible receiver, "+e+" required");return r}}}).enforce,tc=e6.get,tu=String,tl=Object.defineProperty,tp=I("".slice),th=I("".replace),tf=I([].join),tg=S&&!F(function(){return 8!==tl(function(){},"length",{value:8}).length}),tm=String(String).split("String"),tv=e0=function(e,t,r){"Symbol("===tp(tu(t),0,7)&&(t="["+th(tu(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e3&&e.name!==t)&&(S?tl(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eS(r,"arity")&&e.length!==r.arity&&tl(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?S&&tl(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ts(e);return eS(n,"source")||(n.source=tf(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=tv(function(){return J(this)&&tc(this).source||e4(this)},"toString"),eZ=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(J(r)&&e0(r,i,n),n.global)o?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:u(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tE={},tS=Math.ceil,tF=Math.floor;tE=Math.trunc||function(e){var t=+e;return(t>0?tF:tS)(t)},tk=function(e){var t=+e;return t!=t||0===t?0:tE(t)};var t$=Math.max,tO=Math.min;tw=function(e,t){var r=tk(e);return r<0?t$(r+t,0):tO(r,t)};var tj={},tL={},tx=Math.min;tL=function(e){var t=tk(e);return t>0?tx(t,9007199254740991):0},tj=function(e){return tL(e.length)};var tM=function(e){return function(t,r,n){var o,i=T(t),a=tj(i);if(0===a)return!e&&-1;var s=tw(n,a);if(e&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tT={includes:tM(!0),indexOf:tM(!1)}.indexOf,tP=I([].push);t_=function(e,t){var r,n=T(e),o=0,i=[];for(r in n)!eS(tt,r)&&eS(n,r)&&tP(i,r);for(;t.length>o;)eS(n,r=t[o++])&&(~tT(i,r)||tP(i,r));return i};var tI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");h=Object.getOwnPropertyNames||function(e){return t_(e,tI)},f=Object.getOwnPropertySymbols;var tq=I([].concat);tb=X("Reflect","ownKeys")||function(e){var t=h(eW(e));return f?tq(t,f(e)):t},ty=function(e,t,r){for(var n=tb(t),o=0;o<n.length;o++){var a=n[o];eS(e,a)||r&&eS(r,a)||u(e,a,i(t,a))}};var tA={},tH=/#|\.prototype\./,tN=function(e,t){var r=tC[tU(e)];return r===tD||r!==tR&&(J(t)?F(t):!!t)},tU=tN.normalize=function(e){return String(e).replace(tH,".").toLowerCase()},tC=tN.data={},tR=tN.NATIVE="N",tD=tN.POLYFILL="P";tA=tN,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||e_(c,{}):k[c]&&k[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tA(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ty(a,o)}(e.sham||o&&o.sham)&&eD(a,"sham",!0),eZ(r,n,a,e)}};var tz={},tW={},tG=Function.prototype,tB=tG.apply,tQ=tG.call;tW="object"==typeof Reflect&&Reflect.apply||(O?tQ.bind(tB):function(){return tQ.apply(tB,arguments)});var tY={},tJ={},tV=(tJ=function(e){if("Function"===N(e))return I(e)})(tJ.bind);tY=function(e,t){return ed(e),void 0===t?e:O?tV(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=X("document","documentElement");var tX={};tX=I([].slice);var tZ={},t0=TypeError;tZ=function(e,t){if(e<t)throw new t0("Not enough arguments");return e};var t1={};t1=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t2={};t2="process"===N(k.process);var t3=k.setImmediate,t4=k.clearImmediate,t5=k.process,t6=k.Dispatch,t9=k.Function,t7=k.MessageChannel,t8=k.String,re=0,rt={},rr="onreadystatechange";F(function(){g=k.location});var rn=function(e){if(eS(rt,e)){var t=rt[e];delete rt[e],t()}},ro=function(e){return function(){rn(e)}},ri=function(e){rn(e.data)},ra=function(e){k.postMessage(t8(e),g.protocol+"//"+g.host)};t3&&t4||(t3=function(e){tZ(arguments.length,1);var t=J(e)?e:t9(e),r=tX(arguments,1);return rt[++re]=function(){tW(t,void 0,r)},m(re),re},t4=function(e){delete rt[e]},t2?m=function(e){t5.nextTick(ro(e))}:t6&&t6.now?m=function(e){t6.now(ro(e))}:t7&&!t1?(y=(v=new t7).port2,v.port1.onmessage=ri,m=tY(y.postMessage,y)):k.addEventListener&&J(k.postMessage)&&!k.importScripts&&g&&"file:"!==g.protocol&&!F(ra)?(m=ra,k.addEventListener("message",ri,!1)):m=rr in eN("script")?function(e){tK.appendChild(eN("script"))[rr]=function(){tK.removeChild(this),rn(e)}}:function(e){setTimeout(ro(e),0)});var rs=(tz={set:t3,clear:t4}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rs},{clearImmediate:rs});var rc=tz.set,ru={},rl={};rl="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rd=k.Function,rp=/MSIE .\./.test(en)||rl&&((r=k.Bun.version.split(".")).length<3||"0"===r[0]&&(r[1]<3||"3"===r[1]&&"0"===r[2]));ru=function(e,t){var r=t?2:1;return rp?function(n,o){var i=tZ(arguments.length,1)>r,a=J(n)?n:rd(n),s=i?tX(arguments,r):[],c=i?function(){tW(a,this,s)}:a;return t?e(c,o):e(c)}:e};var rh=k.setImmediate?ru(rc,!1):rc;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rh},{setImmediate:rh});var rf=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return o(c,"_invoke",{value:(a=new O(i||[]),s=p,function(r,o){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw o;return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var a=d(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};function m(){}function v(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=d(e[o],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function j(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return v.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rf}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rf:Function("r","regeneratorRuntime = r")(rf)}var rg={};rg=new URL("icons.c14567a0.svg",import.meta.url).toString();const rm="https://forkify-api.herokuapp.com/api/v2/recipes/",rv="a9a2d361-1b59-4f06-9e81-c473d8eacb7f",ry=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),o=await n.json();if(console.log(n),console.log(o),!n.ok)throw Error(`${o.message} (${n.status})`);return o}catch(e){throw e}},rb={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},r_=function(e){let{recipe:t}=e.data;return{id:t.id,cookingTime:t.cooking_time,imageUrl:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,sourceUrl:t.source_url,title:t.title,bookmarked:!1,...t.key&&{key:t.key}}},rw=async function(e){try{let t=await ry(`${rm}${e}?key=${rv}`);rb.recipe=r_(t),rb.bookmarks.some(e=>e.id===rb.recipe.id)&&(rb.recipe.bookmarked=!0),console.log(rb.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rk=async function(e){try{rb.search.query=e;let t=await ry(`${rm}?search=${e}&key=${rv}`);console.log(t),rb.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,imageUrl:e.image_url,publisher:e.publisher,...e.key&&{key:e.key}})),console.log(rb)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rE=function(e=rb.search.page){rb.search.page=e;let t=(e-1)*rb.search.resultsPerPage,r=e*rb.search.resultsPerPage;return rb.search.results.slice(t,r)},rS=function(e){rb.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rb.recipe.servings}),rb.recipe.servings=e},rF=function(){localStorage.setItem("bookmarks",JSON.stringify(rb.bookmarks))},r$=function(e){rb.bookmarks.push(e),e.id===rb.recipe.id&&(rb.recipe.bookmarked=!0),rF()},rO=function(e){let t=rb.bookmarks.findIndex(t=>t.id===e);rb.bookmarks.splice(t,1),rb.recipe.bookmarked=!1,rF()};!function(){let e=localStorage.getItem("bookmarks");e&&(rb.bookmarks=JSON.parse(e))}(),console.log(rb.bookmarks);const rj=async function(e){try{let t=Object.entries(e).filter(([e,t])=>e.startsWith("ingredient")&&""!==t).map(([e,t])=>{console.log(t);let r=t.split(",").map(e=>e.trim());if(3!==r.length)throw Error("Please choose the correct format");let[n,o,i]=r;return{quantity:+n||null,unit:o,description:i}}),r={title:e.title,cooking_time:+e.cookingTime,image_url:e.image,source_url:e.sourceUrl,servings:+e.servings,publisher:e.publisher,ingredients:t};console.log(r);let n=await ry(`${rm}?key=${rv}`,r);console.log(n),rb.recipe=r_(n),r$(rb.recipe),console.log(rb.recipe)}catch(e){throw e}};(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,o=num.split(" ");if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},o=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(n(this.denominator)){var e=o(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(n(this.numerator)){var e=o(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},b=Fraction;class rL{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t);console.log(r);let n=Array.from(r.querySelectorAll("*"));console.log(n);let o=Array.from(this._parentElement.querySelectorAll("*"));console.log(o),n.forEach((e,t)=>{let r=o[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||(console.log(e.attributes),Array.from(e.attributes).forEach((e,t,n)=>{r.setAttribute(e.name,e.value)}))})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let t=`
      <div class="spinner">
        <svg>
          <use href="${e(rg)}#icon-loader"></use>
        </svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)};renderError(t=this._errorMessage){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${e(rg)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${e(rg)}#icon-smile"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class rx extends rL{_parentElement=document.querySelector(".recipe");_errorMessage="No recipe found! Try another one!";_message="";_generateMarkup(){return` 
    <figure class="recipe__fig">
      <img src="${this._data.imageUrl}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">

      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(rg)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>

      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(rg)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(rg)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-update-to="${this._data.servings+1}" class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(rg)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${e(rg)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${e(rg)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      
      ${this._data.ingredients?.reduce(this._generateMarkupIngredient,"")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${e(rg)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}_generateMarkupIngredient(t,r){return t+=`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${e(rg)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${r.quantity?new b(r.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${r.unit}</span>
          ${r.description}
        </div>
      </li>`}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;console.log(r);let n=+r.dataset.updateTo;n<1||e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}}var rM=new rx;class rT{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}_clearInput(){this._parentElement.querySelector(".search__field").value=""}}var rP=new rT,rI=new class extends rL{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`
    <li class="preview">
      <a class="preview__link ${t===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.imageUrl}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>

          <div  class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${e(rg)}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>`}};class rq extends rL{_parentElement=document.querySelector(".results");_errorMessage="No recipes found! Try another one!";_message="";_generateMarkup(){return this._data.map(e=>rI.render(e,!1)).join("")}}var rA=new rq;class rH extends rL{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;console.log(r),console.log(r.dataset.goto);let n=Number(r.dataset.goto);console.log(e),e(n)})}_generateMarkup(){console.log(this._data);let t=Math.ceil(this._data.results.length/this._data.resultsPerPage),r=this._data.page;return 1===r&&t>1?(console.log("page 1 and other pages"),`
        <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
          <span>Page ${r+1}</span>
          <svg class="search__icon">
            <use href="${e(rg)}#icon-arrow-right"></use>
          </svg>
        </button>`):r===t&&t>1?(console.log("last page"),`
        <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${e(rg)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${r-1}</span>
        </button>`):r<t?(console.log("some other page"),`
      <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${e(rg)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${r-1}</span>
      </button>
      <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
        <span>Page ${r+1}</span>
        <svg class="search__icon">
          <use href="${e(rg)}#icon-arrow-right"></use>
        </svg>
      </button>`):""}}var rN=new rH;class rU extends rL{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet! Find a recipe and bookmark it!";_message="";addHandlerBookmark(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rI.render(e,!1)).join("")}}var rC=new rU;class rR extends rL{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpenModal=document.querySelector(".nav__btn--add-recipe");_btnCloseModal=document.querySelector(".btn--close-modal");_message="You successfully uploaded the recipe!";constructor(){super(),this.addHandlerShowWindow(),this.addHandlerHideWindow()}_toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}addHandlerShowWindow(){this._btnOpenModal.addEventListener("click",(function(e){e.target.closest(".nav__btn--add-recipe")&&this._toggleWindow()}).bind(this))}addHandlerHideWindow(){this._btnCloseModal.addEventListener("click",this._toggleWindow.bind(this)),this._overlay.addEventListener("click",this._toggleWindow.bind(this))}addHandlerUploadNewRecipe(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);console.log(r),e(n)})}_generateMarkup(){return`
      <form class="upload" action="submit">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST23" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST23" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST23" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${e(rg)}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>`}}var rD=new rR;document.querySelector(".recipe"),console.log(e(rg));const rz=async function(){try{let e=window.location.hash.slice(1);if(console.log(e),!e)return;rM.renderSpinner(),rA.update(rE()),rC.update(rb.bookmarks),await rw(e),console.log(rb);let{recipe:t}=rb;rM.render(rb.recipe)}catch(e){console.error(`${e} \u{2622}\u{2622}\u{2622}\u{2622}\u{2622}`),rM.renderError()}},rW=async function(){try{rA.renderSpinner();let e=rP.getQuery();if(!e)return;await rk(e),console.log(rb),rA.render(rE(1)),rN.render(rb.search)}catch(e){console.log(e)}},rG=async function(e){try{rD.renderSpinner(),console.log(e),await rj(e),rM.render(rb.recipe),rC.render(rb.bookmarks),rD.renderMessage(),setTimeout(()=>{rD._toggleWindow(),setTimeout(()=>{rD.render(rb.recipe)},1e3)},2e3),window.history.pushState(null,"",`#${rb.recipe.id}`)}catch(e){console.log(e),rD.renderError(e.message)}};rC.addHandlerBookmark(function(){rC.render(rb.bookmarks),console.log(rb.bookmarks)}),rM.addHandlerRender(rz),rM.addHandlerUpdateServings(function(e){rS(e),rM.update(rb.recipe)}),rM.addHandlerAddBookmark(function(){rb.recipe.bookmarked?rO(rb.recipe.id):r$(rb.recipe),rM.update(rb.recipe),rC.render(rb.bookmarks)}),rP.addHandlerSearch(rW),rN.addHandlerClick(function(e){rA.render(rE(e)),rN.render(rb.search)}),rD.addHandlerUploadNewRecipe(rG);
//# sourceMappingURL=index.01e99b35.js.map
