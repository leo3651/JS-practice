function e(e){return e&&e.__esModule?e.default:e}var t,r,n,o,i,a,s,c,l,u,d,p,f,h,g,v,m=globalThis,y={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof m&&m)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var O={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;o=j&&!O.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:O;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},P={},M=Function.prototype,F=M.call,q=S&&M.bind.bind(F,F),I={},A=(P=S?q:function(e){return function(){return F.apply(e,arguments)}})({}.toString),H=P("".slice);I=function(e){return H(A(e),8,-1)};var N=Object,U=P("".split);T=k(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===I(e)?U(e,""):N(e)}:N;var C={},R={};R=function(e){return null==e};var D=TypeError;C=function(e){if(R(e))throw new D("Can't call method on "+e);return e},x=function(e){return T(C(e))};var W={},G={},B={},Q={},z="object"==typeof document&&document.all;Q=void 0===z&&void 0!==z?function(e){return"function"==typeof e||e===z}:function(e){return"function"==typeof e},B=function(e){return"object"==typeof e?null!==e:Q(e)};var Y={},J={};J=function(e,t){var r;return arguments.length<2?(r=b[e],Q(r)?r:void 0):b[e]&&b[e][t]};var V={};V=P({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,eo=en&&en.v8;eo&&(a=(i=eo.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(a=+i[1]),Z=a;var ei=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!ei(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;Y=K?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return Q(t)&&V(t.prototype,ea(e))};var es={},ec={},el={},eu=String;el=function(e){try{return eu(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(Q(e))return e;throw new ed(el(e)+" is not a function")},es=function(e,t){var r=e[t];return R(r)?void 0:ec(r)};var ep={},ef=TypeError;ep=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!B(n=E(r,e))||Q(r=e.valueOf)&&!B(n=E(r,e))||"string"!==t&&Q(r=e.toString)&&!B(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},eg={},ev={};ev=!1;var em={},ey=Object.defineProperty;em=function(e,t){try{ey(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||em(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.36.0",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eh=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(C(e))};var eS=P({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return eS(ek(e),t)};var e$={},eO=0,ej=Math.random(),eL=P(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++eO+ej,36)};var ex=b.Symbol,eT=eh("wks"),eP=K?ex.for||ex:ex&&ex.withoutSetter||e$,eM=TypeError,eF=(ew(eT,t="toPrimitive")||(eT[t]=X&&ew(ex,t)?ex[t]:eP("Symbol."+t)),eT[t]);G=function(e,t){if(!B(e)||Y(e))return e;var r,n=es(e,eF);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!B(r)||Y(r))return r;throw new eM("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},W=function(e){var t=G(e,"string");return Y(t)?t:t+""};var eq={},eI={},eA=b.document,eH=B(eA)&&B(eA.createElement);eI=function(e){return eH?eA.createElement(e):{}},eq=!w&&!k(function(){return 7!==Object.defineProperty(eI("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;n=w?eN:function(e,t){if(e=x(e),t=W(t),eq)try{return eN(e,t)}catch(e){}if(ew(e,t))return L(!E(o,e,t),e[t])};var eU={},eC={};eC=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eR={},eD=String,eW=TypeError;eR=function(e){if(B(e))return e;throw new eW(eD(e)+" is not an object")};var eG=TypeError,eB=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,ez="enumerable",eY="configurable",eJ="writable";s=w?eC?function(e,t,r){if(eR(e),t=W(t),eR(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eJ in r&&!r[eJ]){var n=eQ(e,t);n&&n[eJ]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:ez in r?r[ez]:n[ez],writable:!1})}return eB(e,t,r)}:eB:function(e,t,r){if(eR(e),t=W(t),eR(r),eq)try{return eB(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=w?function(e,t,r){return s(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eV={},eK={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e1=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e0={},e2=P(Function.toString);Q(eg.inspectSource)||(eg.inspectSource=function(e){return e2(e)}),e0=eg.inspectSource;var e3={},e4={},e5=b.WeakMap;e4=Q(e5)&&/native code/.test(String(e5));var e6={},e7=eh("keys");e6=function(e){return e7[e]||(e7[e]=e$(e))};var e9={};e9={};var e8="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e4||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,c=function(e,t){if(tr.has(e))throw new te(e8);return t.facade=e,tr.set(e,t),t},l=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e6("state");e9[tn]=!0,c=function(e,t){if(ew(e,tn))throw new te(e8);return t.facade=e,eU(e,tn,t),t},l=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var to=(e3={set:c,get:l,has:u,enforce:function(e){return u(e)?l(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!B(t)||(r=l(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,ti=e3.get,ta=String,ts=Object.defineProperty,tc=P("".slice),tl=P("".replace),tu=P([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tp=String(String).split("String"),tf=eK=function(e,t,r){"Symbol("===tc(ta(t),0,7)&&(t="["+tl(ta(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e1&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=to(e);return ew(n,"source")||(n.source=tu(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=tf(function(){return Q(this)&&ti(this).source||e0(this)},"toString"),eV=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(Q(r)&&eK(r,i,n),n.global)o?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:s(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var th={},tg={},tv={},tm={},ty={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},ty=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;tm=function(e,t){var r=ty(e);return r<0?tk(r+t,0):tE(r,t)};var tS={},t$={},tO=Math.min;t$=function(e){var t=ty(e);return t>0?tO(t,9007199254740991):0},tS=function(e){return t$(e.length)};var tj=function(e){return function(t,r,n){var o,i=x(t),a=tS(i);if(0===a)return!e&&-1;var s=tm(n,a);if(e&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tL={includes:tj(!0),indexOf:tj(!1)}.indexOf,tx=P([].push);tv=function(e,t){var r,n=x(e),o=0,i=[];for(r in n)!ew(e9,r)&&ew(n,r)&&tx(i,r);for(;t.length>o;)ew(n,r=t[o++])&&(~tL(i,r)||tx(i,r));return i};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");d=Object.getOwnPropertyNames||function(e){return tv(e,tT)},p=Object.getOwnPropertySymbols;var tP=P([].concat);tg=J("Reflect","ownKeys")||function(e){var t=d(eR(e));return p?tP(t,p(e)):t},th=function(e,t,r){for(var o=tg(t),i=0;i<o.length;i++){var a=o[i];ew(e,a)||r&&ew(r,a)||s(e,a,n(t,a))}};var tM={},tF=/#|\.prototype\./,tq=function(e,t){var r=tA[tI(e)];return r===tN||r!==tH&&(Q(t)?k(t):!!t)},tI=tq.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tA=tq.data={},tH=tq.NATIVE="N",tN=tq.POLYFILL="P";tM=tq,y=function(e,t){var r,o,i,a,s,c=e.target,l=e.global,u=e.stat;if(r=l?b:u?b[c]||em(c,{}):b[c]&&b[c].prototype)for(o in t){if(a=t[o],i=e.dontCallGetSet?(s=n(r,o))&&s.value:r[o],!tM(l?o:c+(u?".":"#")+o,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;th(a,i)}(e.sham||i&&i.sham)&&eU(a,"sham",!0),eV(r,o,a,e)}};var tU={},tC={},tR=Function.prototype,tD=tR.apply,tW=tR.call;tC="object"==typeof Reflect&&Reflect.apply||(S?tW.bind(tD):function(){return tW.apply(tD,arguments)});var tG={},tB={},tQ=(tB=function(e){if("Function"===I(e))return P(e)})(tB.bind);tG=function(e,t){return ec(e),void 0===t?e:S?tQ(e,t):function(){return e.apply(t,arguments)}};var tz={};tz=J("document","documentElement");var tY={};tY=P([].slice);var tJ={},tV=TypeError;tJ=function(e,t){if(e<t)throw new tV("Not enough arguments");return e};var tK={};tK=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===I(b.process);var tZ=b.setImmediate,t1=b.clearImmediate,t0=b.process,t2=b.Dispatch,t3=b.Function,t4=b.MessageChannel,t5=b.String,t6=0,t7={},t9="onreadystatechange";k(function(){f=b.location});var t8=function(e){if(ew(t7,e)){var t=t7[e];delete t7[e],t()}},re=function(e){return function(){t8(e)}},rt=function(e){t8(e.data)},rr=function(e){b.postMessage(t5(e),f.protocol+"//"+f.host)};tZ&&t1||(tZ=function(e){tJ(arguments.length,1);var t=Q(e)?e:t3(e),r=tY(arguments,1);return t7[++t6]=function(){tC(t,void 0,r)},h(t6),t6},t1=function(e){delete t7[e]},tX?h=function(e){t0.nextTick(re(e))}:t2&&t2.now?h=function(e){t2.now(re(e))}:t4&&!tK?(v=(g=new t4).port2,g.port1.onmessage=rt,h=tG(v.postMessage,v)):b.addEventListener&&Q(b.postMessage)&&!b.importScripts&&f&&"file:"!==f.protocol&&!k(rr)?(h=rr,b.addEventListener("message",rt,!1)):h=t9 in eI("script")?function(e){tz.appendChild(eI("script"))[t9]=function(){tz.removeChild(this),t8(e)}}:function(e){setTimeout(re(e),0)});var rn=(tU={set:tZ,clear:t1}).clear;y({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ro=tU.set,ri={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ra&&((r=b.Bun.version.split(".")).length<3||"0"===r[0]&&(r[1]<3||"3"===r[1]&&"0"===r[2]));ri=function(e,t){var r=t?2:1;return rc?function(n,o){var i=tJ(arguments.length,1)>r,a=Q(n)?n:rs(n),s=i?tY(arguments,r):[],c=i?function(){tC(a,this,s)}:a;return t?e(c,o):e(c)}:e};var rl=b.setImmediate?ri(ro,!1):ro;y({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rl},{setImmediate:rl});var ru=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return o(c,"_invoke",{value:(a=new j(i||[]),s=p,function(r,o){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw o;return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var a=d(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var l=d(e,n,a);if("normal"===l.type){if(s=a.done?h:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(s=h,a.method="throw",a.arg=l.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};l(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=d(e[o],e,i);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(u).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,s)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),l(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),l(k,c,"Generator"),l(k,a,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(l){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=ru}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=ru:Function("r","regeneratorRuntime = r")(ru)}var rd={};rd=new URL("icons.c14567a0.svg",import.meta.url).toString();const rp="https://forkify-api.herokuapp.com/api/v2/recipes/",rf="a9a2d361-1b59-4f06-9e81-c473d8eacb7f",rh=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),o=await n.json();if(console.log(n),console.log(o),!n.ok)throw Error(`${o.message} (${n.status})`);return o}catch(e){throw e}},rg={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rv=function(e){let{recipe:t}=e.data;return{id:t.id,cookingTime:t.cooking_time,imageUrl:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,sourceUrl:t.source_url,title:t.title,bookmarked:!1,...t.key&&{key:t.key}}},rm=async function(e){try{let t=await rh(`${rp}${e}?key=${rf}`);rg.recipe=rv(t),rg.bookmarks.some(e=>e.id===rg.recipe.id)&&(rg.recipe.bookmarked=!0),console.log(rg.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},ry=async function(e){try{rg.search.query=e;let t=await rh(`${rp}?search=${e}&key=${rf}`);console.log(t),rg.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,imageUrl:e.image_url,publisher:e.publisher,...e.key&&{key:e.key}})),console.log(rg)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rb=function(e=rg.search.page){rg.search.page=e;let t=(e-1)*rg.search.resultsPerPage,r=e*rg.search.resultsPerPage;return rg.search.results.slice(t,r)},r_=function(e){rg.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rg.recipe.servings}),rg.recipe.servings=e},rw=function(){localStorage.setItem("bookmarks",JSON.stringify(rg.bookmarks))},rk=function(e){rg.bookmarks.push(e),e.id===rg.recipe.id&&(rg.recipe.bookmarked=!0),rw()},rE=function(e){let t=rg.bookmarks.findIndex(t=>t.id===e);rg.bookmarks.splice(t,1),rg.recipe.bookmarked=!1,rw()};!function(){let e=localStorage.getItem("bookmarks");e&&(rg.bookmarks=JSON.parse(e))}(),console.log(rg.bookmarks);const rS=async function(e){try{let t=Object.entries(e).filter(([e,t])=>e.startsWith("ingredient")&&""!==t).map(([e,t])=>{console.log(t);let r=t.split(",").map(e=>e.trim());if(3!==r.length)throw Error("Please choose the correct format");let[n,o,i]=r;return{quantity:+n||null,unit:o,description:i}}),r={title:e.title,cooking_time:+e.cookingTime,image_url:e.image,source_url:e.sourceUrl,servings:+e.servings,publisher:e.publisher,ingredients:t};console.log(r);let n=await rh(`${rp}?key=${rf}`,r);console.log(n),rg.recipe=rv(n),rk(rg.recipe),console.log(rg.recipe)}catch(e){throw e}};class r${_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t);console.log(r);let n=Array.from(r.querySelectorAll("*"));console.log(n);let o=Array.from(this._parentElement.querySelectorAll("*"));console.log(o),n.forEach((e,t)=>{let r=o[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||(console.log(e.attributes),Array.from(e.attributes).forEach((e,t,n)=>{r.setAttribute(e.name,e.value)}))})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let t=`
      <div class="spinner">
        <svg>
          <use href="${e(rd)}#icon-loader"></use>
        </svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)};renderError(t=this._errorMessage){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${e(rd)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${e(rd)}#icon-smile"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class rO extends r${_parentElement=document.querySelector(".recipe");_errorMessage="No recipe found! Try another one!";_message="";_generateMarkup(){return` 
    <figure class="recipe__fig">
      <img src="${this._data.imageUrl}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">

      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(rd)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>

      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(rd)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(rd)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-update-to="${this._data.servings+1}" class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(rd)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${e(rd)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${e(rd)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
          <use href="${e(rd)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}_generateMarkupIngredient(t,r){return t+=`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${e(rd)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${r.quantity?r.quantity:""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${r.unit}</span>
          ${r.description}
        </div>
      </li>`}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;console.log(r);let n=+r.dataset.updateTo;n<1||e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}}var rj=new rO;class rL{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}_clearInput(){this._parentElement.querySelector(".search__field").value=""}}var rx=new rL,rT=new class extends r${_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`
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
              <use href="${e(rd)}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>`}};class rP extends r${_parentElement=document.querySelector(".results");_errorMessage="No recipes found! Try another one!";_message="";_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rM=new rP;class rF extends r${_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;console.log(r),console.log(r.dataset.goto);let n=Number(r.dataset.goto);console.log(e),e(n)})}_generateMarkup(){console.log(this._data);let t=Math.ceil(this._data.results.length/this._data.resultsPerPage),r=this._data.page;return 1===r&&t>1?(console.log("page 1 and other pages"),`
        <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
          <span>Page ${r+1}</span>
          <svg class="search__icon">
            <use href="${e(rd)}#icon-arrow-right"></use>
          </svg>
        </button>`):r===t&&t>1?(console.log("last page"),`
        <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${e(rd)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${r-1}</span>
        </button>`):r<t?(console.log("some other page"),`
      <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${e(rd)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${r-1}</span>
      </button>
      <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
        <span>Page ${r+1}</span>
        <svg class="search__icon">
          <use href="${e(rd)}#icon-arrow-right"></use>
        </svg>
      </button>`):""}}var rq=new rF;class rI extends r${_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet! Find a recipe and bookmark it!";_message="";addHandlerBookmark(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rA=new rI;class rH extends r${_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpenModal=document.querySelector(".nav__btn--add-recipe");_btnCloseModal=document.querySelector(".btn--close-modal");_message="You successfully uploaded the recipe!";constructor(){super(),this.addHandlerShowWindow(),this.addHandlerHideWindow()}_toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}addHandlerShowWindow(){this._btnOpenModal.addEventListener("click",(function(e){e.target.closest(".nav__btn--add-recipe")&&this._toggleWindow()}).bind(this))}addHandlerHideWindow(){this._btnCloseModal.addEventListener("click",this._toggleWindow.bind(this)),this._overlay.addEventListener("click",this._toggleWindow.bind(this))}addHandlerUploadNewRecipe(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);console.log(r),e(n)})}_generateMarkup(){return`
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
            <use href="${e(rd)}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>`}}var rN=new rH;document.querySelector(".recipe"),console.log(e(rd));const rU=async function(){try{let e=window.location.hash.slice(1);if(console.log(e),!e)return;rj.renderSpinner(),rM.update(rb()),rA.update(rg.bookmarks),await rm(e),console.log(rg);let{recipe:t}=rg;rj.render(rg.recipe)}catch(e){console.error(`${e} \u{2622}\u{2622}\u{2622}\u{2622}\u{2622}`),rj.renderError()}},rC=async function(){try{rM.renderSpinner();let e=rx.getQuery();if(!e)return;await ry(e),console.log(rg),rM.render(rb(1)),rq.render(rg.search)}catch(e){console.log(e)}},rR=async function(e){try{rN.renderSpinner(),console.log(e),await rS(e),rj.render(rg.recipe),rA.render(rg.bookmarks),rN.renderMessage(),setTimeout(()=>{rN._toggleWindow(),setTimeout(()=>{rN.render(rg.recipe)},1e3)},2e3),window.history.pushState(null,"",`#${rg.recipe.id}`)}catch(e){console.log(e),rN.renderError(e.message)}};rA.addHandlerBookmark(function(){rA.render(rg.bookmarks),console.log(rg.bookmarks)}),rj.addHandlerRender(rU),rj.addHandlerUpdateServings(function(e){r_(e),rj.update(rg.recipe)}),rj.addHandlerAddBookmark(function(){rg.recipe.bookmarked?rE(rg.recipe.id):rk(rg.recipe),rj.update(rg.recipe),rA.render(rg.bookmarks)}),rx.addHandlerSearch(rC),rq.addHandlerClick(function(e){rM.render(rb(e)),rq.render(rg.search)}),rN.addHandlerUploadNewRecipe(rR);
//# sourceMappingURL=index.b8b21136.js.map
