"use strict";(()=>{var $0=Object.defineProperty;var K0=(r,t,e)=>t in r?$0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var kt=(r,t,e)=>K0(r,typeof t!="symbol"?t+"":t,e);function er(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jo={duration:.5,overwrite:!1,delay:0},Pu,mn,Ne,gi=1e8,Ee=1/gi,yu=Math.PI*2,Q0=yu/4,j0=0,yp=Math.sqrt,tx=Math.cos,ex=Math.sin,en=function(t){return typeof t=="string"},He=function(t){return typeof t=="function"},ir=function(t){return typeof t=="number"},bl=function(t){return typeof t>"u"},zi=function(t){return typeof t=="object"},Zn=function(t){return t!==!1},Iu=function(){return typeof window<"u"},pl=function(t){return He(t)||en(t)},Sp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,nx=/random\([^)]+\)/g,ix=/,\s*/g,up=/(?:-?\.?\d|\.)+/gi,Lu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,du=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Du=/[+-]=-?[.\d]+/,rx=/[^,'"\[\]\s]+/gi,sx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,Bi,Su,Nu,ei={},xl={},Mp,bp=function(t){return(xl=Gs(t,ei))&&wn},wl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},$o=function(t,e){return!e&&console.warn(t)},wp=function(t,e){return t&&(ei[t]=e)&&xl&&(xl[t]=e)||ei},Ko=function(){return 0},ox={suppressEvents:!0,isStart:!0,kill:!1},ml={suppressEvents:!0,kill:!1},ax={suppressEvents:!0},Uu={},Cr=[],Mu={},Tp,qn={},pu={},fp=30,gl=[],Ou="",Fu=function(t){var e=t[0],n,i;if(zi(e)||He(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=gl.length;i--&&!gl[i].targetTest(e););n=gl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Vu(t[i],n)))||t.splice(i,1);return t},Rr=function(t){return t._gsap||Fu(_i(t))[0]._gsap},Bu=function(t,e,n){return(n=t[e])&&He(n)?t[e]():bl(n)&&t.getAttribute&&t.getAttribute(e)||n},On=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},hs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},lx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},vl=function(){var t=Cr.length,e=Cr.slice(0),n,i;for(Mu={},Cr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ku=function(t){return!!(t._initted||t._startAt||t.add)},Ep=function(t,e,n,i){Cr.length&&!mn&&vl(),t.render(e,n,i||!!(mn&&e<0&&ku(t))),Cr.length&&!mn&&vl()},Ap=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(rx).length<2?e:en(t)?t.trim():t},Cp=function(t){return t},ni=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},cx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Gs=function(t,e){for(var n in e)t[n]=e[n];return t},dp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=zi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},yl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},qo=function(t){var e=t.parent||Oe,n=t.keyframes?cx(bn(t.keyframes)):ni;if(Zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},hx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Rp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Pr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},os=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ux=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bu=function(t,e,n,i){return t._startAt&&(mn?t._startAt.revert(ml):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},fx=function r(t){return!t||t._ts&&r(t.parent)},pp=function(t){return t._repeat?Ws(t._tTime,t=t.duration()+t._rDelay)*t:0},Ws=function(t,e){var n=Math.floor(t=Ue(t/e));return t&&n===t?n-1:n},Sl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},El=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Al=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),El(t),n._dirty||os(n,t)),t},Pp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Sl(t.rawTime(),e),(!e._dur||ta(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),os(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},ki=function(t,e,n,i){return e.parent&&Pr(e),e._start=Ue((ir(n)?n:n||t!==Oe?mi(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Rp(t,e,"_first","_last",t._sort?"_start":0),wu(e)||(t._recent=e),i||Pp(t,e),t._ts<0&&Al(t,t._tTime),t},Ip=function(t,e){return(ei.ScrollTrigger||wl("scrollTrigger",e))&&ei.ScrollTrigger.create(e,t)},Lp=function(t,e,n,i,s){if(Wu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Tp!==Yn.frame)return Cr.push(t),t._lazy=[s,i],1},dx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},wu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},px=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&dx(t)&&!(!t._initted&&wu(t))||(t._ts<0||t._dp._ts<0)&&!wu(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ta(0,t._tDur,e),h=Ws(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ws(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||mn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&Lp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&bu(t,e,n,!0),t._onUpdate&&!n&&ti(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Pr(t,1),!n&&!mn&&(ti(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},mx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Xs=function(t,e,n,i){var s=t._repeat,o=Ue(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ue(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Al(t,t._tTime=t._tDur*a),t.parent&&El(t),n||os(t.parent,t),t},mp=function(t){return t instanceof Mn?os(t):Xs(t,t._dur)},gx={_start:0,endTime:Ko,totalDuration:Ko},mi=function r(t,e,n){var i=t.labels,s=t._recent||gx,o=t.duration()>=gi?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Yo=function(t,e,n){var i=ir(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ye(e[0],o,e[s+1])},Ir=function(t,e){return t||t===0?e(t):e},ta=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!en(t)||!(e=sx.exec(t))?"":e[1]},_x=function(t,e,n){return Ir(n,function(i){return ta(t,e,i)})},Tu=[].slice,Dp=function(t,e){return t&&zi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&zi(t[0]))&&!t.nodeType&&t!==Bi},xx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||Dp(i,1)?(s=n).push.apply(s,_i(i)):n.push(i)})||n},_i=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):en(t)&&!n&&(Su||!qs())?Tu.call((e||Nu).querySelectorAll(t),0):bn(t)?xx(t,n):Dp(t)?Tu.call(t,0):t?[t]:[]},Eu=function(t){return t=_i(t)[0]||$o("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return _i(e,n.querySelectorAll?n:n===t?$o("Invalid scope")||Nu.createElement("div"):t)}},Np=function(t){return t.sort(function(){return .5-Math.random()})},Up=function(t){if(He(t))return t;var e=zi(t)?t:{each:t},n=as(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return en(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var _=(p||e).length,m=o[_],g,b,A,y,S,M,w,x,T;if(!m){if(T=e.grid==="auto"?0:(e.grid||[1,gi])[1],!T){for(w=-gi;w<(w=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=o[_]=[],g=l?Math.min(T,_)*h-.5:i%T,b=T===gi?0:l?_*d/T-.5:i/T|0,w=0,x=gi,M=0;M<_;M++)A=M%T-g,y=b-(M/T|0),m[M]=S=c?Math.abs(c==="y"?y:A):yp(A*A+y*y),S>w&&(w=S),S<x&&(x=S);i==="random"&&Np(m),m.max=w-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=gn(e.amount||e.each)||0,n=n&&_<0?Ix(n):n}return _=(m[u]-m.min)/m.max||0,Ue(m.b+(n?n(_):_)*m.v)+m.u}},Au=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ir(n)?0:gn(n))}},Op=function(t,e){var n=bn(t),i,s;return!n&&zi(t)&&(i=n=t.radius||gi,t.values?(t=_i(t.values),(s=!ir(t[0]))&&(i*=i)):t=Au(t.increment)),Ir(e,n?He(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=gi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||ir(o)?h:h+gn(o)}:Au(t))},Fp=function(t,e,n,i){return Ir(bn(t)?!e:n===!0?!!(n=0):!i,function(){return bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},vx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},yx=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},Sx=function(t,e,n){return kp(t,e,0,1,n)},Bp=function(t,e,n){return Ir(n,function(i){return t[~~e(i)]})},Mx=function r(t,e,n){var i=e-t;return bn(t)?Bp(t,r(0,t.length),e):Ir(n,function(s){return(i+(s-t)%i)%i+t})},bx=function r(t,e,n){var i=e-t,s=i*2;return bn(t)?Bp(t,r(0,t.length-1),e):Ir(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ys=function(t){return t.replace(nx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ix);return Fp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},kp=function(t,e,n,i,s){var o=e-t,a=i-n;return Ir(s,function(l){return n+((l-t)/o*a||0)})},wx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=en(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(bn(t)&&!bn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=Gs(bn(t)?[]:{},t));if(!h){for(l in e)Hu.call(a,t,l,"get",e[l]);s=function(p){return Yu(p,a)||(o?t.p:t)}}}return Ir(n,s)},gp=function(t,e,n){var i=t.labels,s=gi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ti=function(t,e,n){var i=t.vars,s=i[e],o=Ne,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Cr.length&&vl(),a&&(Ne=a),h=l?s.apply(c,l):s.call(c),Ne=o,h},Wo=function(t){return Pr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&ti(t,"onInterrupt"),t},Hs,zp=[],Vp=function(t){if(t)if(t=!t.name&&t.default||t,Iu()||t.headless){var e=t.name,n=He(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ko,render:Yu,add:Hu,kill:Vx,modifier:zx,rawVars:0},o={targetTest:0,get:0,getSetter:Cl,aliases:{},register:0};if(qs(),t!==i){if(qn[e])return;ni(i,ni(yl(t,s),o)),Gs(i.prototype,Gs(s,yl(t,o))),qn[i.prop=e]=i,t.targetTest&&(gl.push(i),Uu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}wp(e,i),t.register&&t.register(wn,i,Fn)}else zp.push(t)},Te=255,Xo={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},mu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},Hp=function(t,e,n){var i=t?ir(t)?[t>>16,t>>8&Te,t&Te]:0:Xo.black,s,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Xo[t])i=Xo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(up),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=mu(l+1/3,s,o),i[1]=mu(l,s,o),i[2]=mu(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Lu),n&&i.length<4&&(i[3]=1),i}else i=t.match(up)||Xo.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Te,o=i[1]/Te,a=i[2]/Te,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Gp=function(t){var e=[],n=[],i=-1;return t.split(nr).forEach(function(s){var o=s.match(cs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},_p=function(t,e,n){var i="",s=(t+i).match(nr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Hp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Gp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(nr,"1").split(cs),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(nr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},nr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Xo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Tx=/hsl[a]?\(/,zu=function(t){var e=t.join(" "),n;if(nr.lastIndex=0,nr.test(e))return n=Tx.test(e),t[1]=_p(t[1],n),t[0]=_p(t[0],n,Gp(t[1])),!0},Qo,Yn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function _(m){var g=r()-i,b=m===!0,A,y,S,M;if((g>t||g<0)&&(n+=g-e),i+=g,S=i-n,A=S-o,(A>0||b)&&(M=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=A+(A>=s?4:s-A),y=1),b||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](S,u,M,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Mp&&(!Su&&Iu()&&(Bi=Su=window,Nu=Bi.document||{},ei.gsap=wn,(Bi.gsapVersions||(Bi.gsapVersions=[])).push(wn.version),bp(xl||Bi.GreenSockGlobals||!Bi.gsap&&Bi||{}),zp.forEach(Vp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Qo=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Qo=0,c=Ko},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,b){var A=g?function(y,S,M,w){m(y,S,M,w),d.remove(A)}:m;return d.remove(m),a[b?"unshift":"push"](A),qs(),A},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),qs=function(){return!Qo&&Yn.wake()},de={},Ex=/^[\d.\-M][\d.\-,\s]/,Ax=/["']/g,Cx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Ax,"").trim():+c,i=l.substr(a+1).trim();return e},Rx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Px=function(t){var e=(t+"").split("("),n=de[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Cx(e[1])]:Rx(t).split(",").map(Ap)):de._CE&&Ex.test(t)?de._CE("",t):n},Ix=function(t){return function(e){return 1-t(1-e)}},as=function(t,e){return t&&(He(t)?t:de[t]||Px(t))||e},us=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return On(t,function(a){de[a]=ei[a]=s,de[o=a.toLowerCase()]=n;for(var l in s)de[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=de[a+"."+l]=s[l]}),s},Wp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},gu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/yu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*ex((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Wp(a);return s=yu/s,l.config=function(c,h){return r(t,c,h)},l},_u=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Wp(n);return i.config=function(s){return r(t,s)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;us(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});de.Linear.easeNone=de.none=de.Linear.easeIn;us("Elastic",gu("in"),gu("out"),gu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};us("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});us("Circ",function(r){return-(yp(1-r*r)-1)});us("Sine",function(r){return r===1?1:-tx(r*Q0)+1});us("Back",_u("in"),_u("out"),_u());de.SteppedEase=de.steps=ei.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ee;return function(a){return((i*ta(0,o,a)|0)+s)*n}}};Jo.ease=de["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ou+=r+","+r+"Params,"});var Vu=function(t,e){this.id=j0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Bu,this.set=e?e.getSetter:Cl},jo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Xs(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),Qo||Yn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Al(this,n),!s._dp||s.parent||Pp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ep(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ws(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Sl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(ta(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),El(this),ux(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ki(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ax);var i=mn;return mn=n,ku(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(mi(this,n),Zn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=He(n)?n:Cp,l=function(){var h=i.then;i.then=null,s&&s(),He(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Wo(this)},r})();ni(jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var Mn=(function(r){vp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zn(n.sortChildren),Oe&&ki(n.parent||Oe,er(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ip(er(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Yo(0,arguments,this),this},e.from=function(i,s,o){return Yo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Yo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ye(i,s,mi(this,o),1),this},e.call=function(i,s,o){return ki(this,Ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,mi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,qo(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,qo(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ue(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,_,m,g,b,A,y,S,M,w;if(this!==Oe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,A=this._ts,g=!A,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Ue(h%m),h===l?(_=this._repeat,u=c):(S=Ue(h/m),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=Ws(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),M&&_&1&&(u=c-u,w=1),_!==S&&!this._lock){var x=M&&S&1,T=x===(M&&_&1);if(_<S&&(x=!x),a=x?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Ue(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=mx(this,Ue(a),Ue(u)),b&&(h-=u-(u=b._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!S&&(ti(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){b=0,p&&(h+=this._zTime=-Ee);break}}f=p}else{f=this._last;for(var R=i<0?i:u;f;){if(p=f._prev,(f._act||R<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,o||mn&&ku(f)),u!==this._time||!this._ts&&!g){b=0,p&&(h+=this._zTime=R?-Ee:Ee);break}}f=p}}if(b&&!s&&(this.pause(),b.render(u>=a?0:-Ee)._zTime=u>=a?1:-1,this._ts))return this._start=y,El(this),this.render(i,s,o);this._onUpdate&&!s&&ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Pr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ti(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ir(s)||(s=mi(this,s,i)),!(i instanceof jo)){if(bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(He(i))i=Ye.delayedCall(0,i);else return this}return this!==i?ki(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):He(i)?this.killTweensOf(i):(i.parent===this&&Tl(this,i),i===this._recent&&(this._recent=this._last),os(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=mi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ye.delayedCall(0,s||Ko,o);return a.data="isPause",this._hasPause=1,ki(this,a,mi(this,i))},e.removePause=function(i){var s=this._first;for(i=mi(this,i);s;)s._start===i&&s.data==="isPause"&&Pr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ar!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=_i(i),l=this._first,c=ir(s),h;l;)l instanceof Ye?lx(l._targets,a)&&(c?(!Ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=mi(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=Ye.to(o,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Xs(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ni({startAt:{time:mi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),gp(this,mi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),gp(this,mi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ue(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return os(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),os(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=gi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ki(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ue(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xs(o,o===Oe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Oe._ts&&(Ep(Oe,Sl(i,Oe)),Tp=Yn.frame),Yn.frame>=fp){fp+=Jn.autoSleep||120;var s=Oe._first;if((!s||!s._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},t})(jo);ni(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lx=function(t,e,n,i,s,o,a){var l=new Fn(this._pt,t,e,0,1,qu,null,s),c=0,h=0,d,u,f,p,_,m,g,b;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ys(i)),o&&(b=[n,i],o(b,t,e),n=b[0],i=b[1]),u=n.match(du)||[];d=du.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?hs(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=du.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Du.test(i)||g)&&(l.e=0),this._pt=l,l},Hu=function(t,e,n,i,s,o,a,l,c,h){He(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:He(d)?c?t[e.indexOf("set")||!He(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=He(d)?c?Fx:Yp:Xu,p;if(en(i)&&(~i.indexOf("random(")&&(i=Ys(i)),i.charAt(1)==="="&&(p=hs(u,i)+(gn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Cu)return!isNaN(u*i)&&i!==""?(p=new Fn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?kx:Zp,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&wl(e,i),Lx.call(this,t,e,u,i,f,l||Jn.stringFilter,c))},Dx=function(t,e,n,i,s){if(He(t)&&(t=Zo(t,s,e,n,i)),!zi(t)||t.style&&t.nodeType||bn(t)||Sp(t))return en(t)?Zo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Zo(t[a],s,e,n,i);return o},Gu=function(t,e,n,i,s,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(s,a.rawVars?e[t]:Dx(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Hs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ar,Cu,Wu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,b=g&&g.data==="nested"?g.vars.targets:m,A=t._overwrite==="auto"&&!Pu,y=t.timeline,S=i.easeReverse||d,M,w,x,T,R,D,I,F,L,O,W,U,$;if(y&&(!u||!s)&&(s="none"),t._ease=as(s,Jo.ease),t._rEase=S&&(as(S)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(F=m[0]?Rr(m[0]).harness:0,U=F&&i[F.prop],M=yl(i,Uu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?ml:ox),_._lazy=0),o){if(Pr(t._startAt=Ye.set(m,ni({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!a&&!f)&&t._startAt.revert(ml),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),x=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Zn(l),immediateRender:a,stagger:0,parent:g},M),U&&(x[F.prop]=U),Pr(t._startAt=Ye.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(ml):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Zn(l)||l&&!p,w=0;w<m.length;w++){if(R=m[w],I=R._gsap||Fu(m)[w]._gsap,t._ptLookup[w]=O={},Mu[I.id]&&Cr.length&&vl(),W=b===m?w:b.indexOf(R),F&&(L=new F).init(R,U||M,t,W,b)!==!1&&(t._pt=T=new Fn(t._pt,R,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(V){O[V]=T}),L.priority&&(D=1)),!F||U)for(x in M)qn[x]&&(L=Gu(x,M,t,W,R,b))?L.priority&&(D=1):O[x]=T=Hu.call(t,R,x,"get",M[x],W,b,0,i.stringFilter);t._op&&t._op[w]&&t.kill(R,t._op[w]),A&&t._pt&&(Ar=t,Oe.killTweensOf(R,O,t.globalTime(e)),$=!t.parent,Ar=0),t._pt&&l&&(Mu[I.id]=1)}D&&Zu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,u&&e<=0&&y.render(gi,!0,!0)},Nx=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Cu=1,t.vars[e]="+=0",Wu(t,a),Cu=0,l?$o(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ge(n)+gn(d.e)),d.b&&(d.b=h.s+gn(d.b))},Ux=function(t,e){var n=t[0]?Rr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Gs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ox=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(bn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Zo=function(t,e,n,i,s){return He(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?Ys(t):t},Xp=Ou+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",qp={};On(Xp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return qp[r]=1});var Ye=(function(r){vp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:qo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Oe,b=(bn(n)||Sp(n)?ir(n[0]):"length"in i)?[n]:_i(n),A,y,S,M,w,x,T,R;if(a._targets=b.length?Fu(b):$o("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||pl(c)||pl(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(A=a.timeline=new Mn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:b}),A.kill(),A.parent=A._dp=er(a),A._start=0,u||pl(c)||pl(h)){if(M=b.length,T=u&&Up(u),zi(u))for(w in u)~Xp.indexOf(w)&&(R||(R={}),R[w]=u[w]);for(y=0;y<M;y++)S=yl(i,qp),S.stagger=0,D&&(S.easeReverse=D),R&&Gs(S,R),x=b[y],S.duration=+Zo(c,er(a),y,x,b),S.delay=(+Zo(h,er(a),y,x,b)||0)-a._delay,!u&&M===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),A.to(x,S,T?T(y,x,b):0),A._ease=de.none;A.duration()?c=h=0:a.timeline=0}else if(p){qo(ni(A.vars.defaults,{ease:"none"})),A._ease=as(p.ease||i.ease||"none");var I=0,F,L,O;if(bn(p))p.forEach(function(W){return A.to(b,W,">")}),A.duration();else{S={};for(w in p)w==="ease"||w==="easeEach"||Ox(w,p[w],S,p.easeEach);for(w in S)for(F=S[w].sort(function(W,U){return W.t-U.t}),I=0,y=0;y<F.length;y++)L=F[y],O={ease:L.e,duration:(L.t-(y?F[y-1].t:0))/100*c},O[w]=L.v,A.to(b,O,I),I+=O.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return f===!0&&!Pu&&(Ar=er(a),Oe.killTweensOf(b),Ar=0),ki(g,er(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ue(g._time)&&Zn(d)&&fx(er(a))&&g.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-h)||0)),m&&Ip(er(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ee&&!h?l:i<Ee?0:i,u,f,p,_,m,g,b,A;if(!c)px(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Ue(d%_),d===l?(p=this._repeat,u=c):(m=Ue(d/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=Ws(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ue(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Lp(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var S=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(u/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(ti(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&bu(this,i,s,o),ti(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&ti(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&bu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Pr(this,1),!s&&!(h&&!a)&&(d||a||g)&&(ti(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Qo||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Wu(this,c),h=this._ease(c/this._dur),Nx(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Al(this,0),this.parent||Rp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Wo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ar&&Ar.vars.overwrite!==!0)._first||Wo(this),this.parent&&o!==this.timeline.totalDuration()&&Xs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?_i(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,m,g;if((!s||s==="all")&&hx(a,l))return s==="all"&&(this._pt=0),Wo(this);for(d=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},On(s,function(b){return _[b]=1}),s=_),s=Ux(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,p=u,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Tl(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Wo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Yo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Yo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Oe.killTweensOf(i,s,o)},t})(jo);ni(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new Mn,e=Tu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Xu=function(t,e,n){return t[e]=n},Yp=function(t,e,n){return t[e](n)},Fx=function(t,e,n,i){return t[e](i.fp,n)},Bx=function(t,e,n){return t.setAttribute(e,n)},Cl=function(t,e){return He(t[e])?Yp:bl(t[e])&&t.setAttribute?Bx:Xu},Zp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},kx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},qu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Yu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},zx=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Vx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Hx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Zu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Fn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Zp,this.d=l||this,this.set=c||Xu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Hx,this.m=n,this.mt=s,this.tween=i},r})();On(Ou+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Uu[r]=1});ei.TweenMax=ei.TweenLite=Ye;ei.TimelineLite=ei.TimelineMax=Mn;Oe=new Mn({sortChildren:!1,defaults:Jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=zu;var ls=[],_l={},Gx=[],xp=0,Wx=0,xu=function(t){return(_l[t]||Gx).map(function(e){return e()})},Ru=function(){var t=Date.now(),e=[];t-xp>2&&(xu("matchMediaInit"),ls.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Bi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),xu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xp=t,xu("matchMedia"))},Jp=(function(){function r(e,n){this.selector=n&&Eu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Wx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){He(n)&&(s=i,i=n,n=He);var o=this,a=function(){var c=Ne,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Eu(s)),Ne=o,d=i.apply(o,arguments),He(d)&&o._r.push(d),Ne=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===He?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ls.length;o--;)ls[o].id===this.id&&ls.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Xx=(function(){function r(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){zi(n)||(n={matches:n});var o=new Jp(0,s||this.scope),a=o.conditions={},l,c,h;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Bi.matchMedia(n[c]),l&&(ls.indexOf(o)<0&&ls.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ru):l.addEventListener("change",Ru)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ml={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Vp(i)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return Oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=_i(t)[0]);var s=Rr(t||{}).get,o=n?Cp:Ap;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||s)(t,e,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=_i(t),t.length>1){var i=t.map(function(h){return wn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=qn[e],a=Rr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Hs._pt=0,d.init(t,n?h+n:h,Hs,0,[t]),d.render(1,d),Hs._pt&&Yu(1,Hs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=wn.to(t,ni((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=as(t.ease,Jo.ease)),dp(Jo,t||{})},config:function(t){return dp(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ei[a]&&$o(e+" effect requires "+a+" plugin.")}),pu[e]=function(a,l,c){return n(_i(a),ni(l||{},s),c)},o&&(Mn.prototype[e]=function(a,l,c){return this.add(pu[e](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){de[t]=as(e)},parseEase:function(t,e){return arguments.length?as(t,e):de},getById:function(t){return Oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Mn(t),i,s;for(n.smoothChildTiming=Zn(t.smoothChildTiming),Oe.remove(n),n._dp=0,n._time=n._tTime=Oe._time,i=Oe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&ki(n,i,i._start-i._delay),i=s;return ki(Oe,n,0),n},context:function(t,e){return t?new Jp(t,e):Ne},matchMedia:function(t){return new Xx(t)},matchMediaRefresh:function(){return ls.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ru()},addEventListener:function(t,e){var n=_l[t]||(_l[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=_l[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Mx,wrapYoyo:bx,distribute:Up,random:Fp,snap:Op,normalize:Sx,getUnit:gn,clamp:_x,splitColor:Hp,toArray:_i,selector:Eu,mapRange:kp,pipe:vx,unitize:yx,interpolate:wx,shuffle:Np},install:bp,effects:pu,ticker:Yn,updateRoot:Mn.updateRoot,plugins:qn,globalTimeline:Oe,core:{PropTween:Fn,globals:wp,Tween:Ye,Timeline:Mn,Animation:jo,getCache:Rr,_removeLinkedListItem:Tl,reverting:function(){return mn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return Pu=t}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ml[r]=Ye[r]});Yn.add(Mn.updateRoot);Hs=Ml.to({},{duration:0});var qx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Yx=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=qx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},vu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},On(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Yx(a,s)}}}},wn=Ml.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},vu("roundProps",Au),vu("modifiers"),vu("snap",Op))||Ml;Ye.version=Mn.version=wn.version="3.15.0";Mp=1;Iu()&&qs();var Zx=de.Power0,Jx=de.Power1,$x=de.Power2,Kx=de.Power3,Qx=de.Power4,jx=de.Linear,tv=de.Quad,ev=de.Cubic,nv=de.Quart,iv=de.Quint,rv=de.Strong,sv=de.Elastic,ov=de.Back,av=de.SteppedEase,lv=de.Bounce,cv=de.Sine,hv=de.Expo,uv=de.Circ;var $p,Lr,Js,tf,ms,fv,Kp,ef,dv=function(){return typeof window<"u"},sr={},ps=180/Math.PI,$s=Math.PI/180,Zs=Math.atan2,Qp=1e8,nf=/([A-Z])/g,pv=/(left|right|width|margin|padding|x)/i,mv=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$u=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_v=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},vv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},om=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},am=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yv=function(t,e,n){return t.style[e]=n},Sv=function(t,e,n){return t.style.setProperty(e,n)},Mv=function(t,e,n){return t._gsap[e]=n},bv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},wv=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Tv=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Fe="transform",$n=Fe+"Origin",Ev=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in sr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Vi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=rr(i,a)}):this.tfm[t]=o.x?o[t]:rr(i,t),t===$n&&(this.tfm.zOrigin=o.zOrigin);else return Vi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Fe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=Fe}(s||e)&&this.props.push(t,e,s[t])},lm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Av=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(nf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ef(),(!s||!s.isStart)&&!n[Fe]&&(lm(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cm=function(t,e){var n={target:t,props:[],revert:Av,save:Ev};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},hm,Ku=function(t,e){var n=Lr.createElementNS?Lr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Lr.createElement(t);return n&&n.style?n:Lr.createElement(t)},ii=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(nf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ks(e)||e,1)||""},jp="O,Moz,ms,Ms,Webkit".split(","),Ks=function(t,e,n){var i=e||ms,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(jp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?jp[o]:"")+t},Qu=function(){dv()&&window.document&&($p=window,Lr=$p.document,Js=Lr.documentElement,ms=Ku("div")||{style:{}},fv=Ku("div"),Fe=Ks(Fe),$n=Fe+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hm=!!Ks("perspective"),ef=wn.core.reverting,tf=1)},tm=function(t){var e=t.ownerSVGElement,n=Ku("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Js.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Js.removeChild(n),s},em=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},um=function(t){var e,n;try{e=t.getBBox()}catch{e=tm(t),n=1}return e&&(e.width||e.height)||n||(e=tm(t)),e&&!e.width&&!e.x&&!e.y?{x:+em(t,["x","cx","x1"])||0,y:+em(t,["y","cy","y1"])||0,width:0,height:0}:e},fm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&um(t))},Nr=function(t,e){if(e){var n=t.style,i;e in sr&&e!==$n&&(e=Fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(nf,"-$1").toLowerCase())):n.removeAttribute(e)}},Dr=function(t,e,n,i,s,o){var a=new Fn(t._pt,e,n,0,1,o?am:om);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},nm={deg:1,rad:1,turn:1},Cv={grid:1,flex:1},Ur=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ms.style,l=pv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,_,m,g;if(i===o||!s||nm[i]||nm[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&fm(t),(f||o==="%")&&(sr[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Ge(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Lr||!_.appendChild)&&(_=Lr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Yn.time&&!m.uncache)return Ge(s/m.width*d);if(f&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=d+i,p=t[h],b?t.style[e]=b:Nr(t,e)}else(f||o==="%")&&!Cv[ii(_,"display")]&&(a.position=ii(t,"position")),_===t&&(a.position="static"),_.appendChild(ms),p=ms[h],_.removeChild(ms),a.position="absolute";return l&&f&&(m=Rr(_),m.time=Yn.time,m.width=_[h]),Ge(u?p*s/d:p&&s?d/p*s:0)},rr=function(t,e,n,i){var s;return tf||Qu(),e in Vi&&e!=="transform"&&(e=Vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),sr[e]&&e!=="transform"?(s=ia(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Pl(ii(t,$n))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Rl[e]&&Rl[e](t,e,n)||ii(t,e)||Bu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ur(t,e,s,n)+n:s},Rv=function(t,e,n,i){if(!n||n==="none"){var s=Ks(e,t,1),o=s&&ii(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ii(t,"borderTopColor"))}var a=new Fn(this._pt,t.style,e,0,1,qu),l=0,c=0,h,d,u,f,p,_,m,g,b,A,y,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ii(t,e)||i,_?t.style[e]=_:Nr(t,e)),h=[n,i],zu(h),n=h[0],i=h[1],u=n.match(cs)||[],S=i.match(cs)||[],S.length){for(;d=cs.exec(i);)m=d[0],b=i.substring(l,d.index),p?p=(p+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=hs(f,m)+y),g=parseFloat(m),A=m.substr((g+"").length),l=cs.lastIndex-A.length,A||(A=A||Jn.units[e]||y,l===i.length&&(i+=A,a.e+=A)),y!==A&&(f=Ur(t,e,_,A)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?am:om;return Du.test(i)&&(a.e=0),this._pt=a,a},im={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Pv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=im[n]||n,e[1]=im[i]||i,e.join(" ")},Iv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],sr[a]&&(l=1,a=a==="transformOrigin"?$n:Fe),Nr(n,a);l&&(Nr(n,Fe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ia(n,1),o.uncache=1,lm(i)))}},Rl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Fn(t._pt,e,n,0,0,Iv);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},na=[1,0,0,1,0,0],dm={},pm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},rm=function(t){var e=ii(t,Fe);return pm(e)?na:e.substr(7).match(Lu).map(Ge)},rf=function(t,e){var n=t._gsap||Rr(t),i=t.style,s=rm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?na:s):(s===na&&!t.offsetParent&&t!==Js&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Js.appendChild(t)),s=rm(t),l?i.display=l:Nr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Js.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ju=function(t,e,n,i,s,o){var a=t._gsap,l=s||rf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],b=l[5],A=e.split(" "),y=parseFloat(A[0])||0,S=parseFloat(A[1])||0,M,w,x,T;n?l!==na&&(w=f*m-p*_)&&(x=y*(m/w)+S*(-_/w)+(_*b-m*g)/w,T=y*(-p/w)+S*(f/w)-(f*b-p*g)/w,y=x,S=T):(M=um(t),y=M.x+(~A[0].indexOf("%")?y/100*M.width:y),S=M.y+(~(A[1]||A[0]).indexOf("%")?S/100*M.height:S)),i||i!==!1&&a.smooth?(g=y-c,b=S-h,a.xOffset=d+(g*f+b*_)-g,a.yOffset=u+(g*p+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[$n]="0px 0px",o&&(Dr(o,a,"xOrigin",c,y),Dr(o,a,"yOrigin",h,S),Dr(o,a,"xOffset",d,a.xOffset),Dr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},ia=function(t,e){var n=t._gsap||new Vu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ii(t,$n)||"0",h,d,u,f,p,_,m,g,b,A,y,S,M,w,x,T,R,D,I,F,L,O,W,U,$,V,C,Q,st,dt,At,Ct;return h=d=u=_=m=g=b=A=y=0,f=p=1,n.svg=!!(t.getCTM&&fm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Fe]!=="none"?l[Fe]:"")),i.scale=i.rotate=i.translate="none"),w=rf(t,n.svg),n.svg&&(n.uncache?($=t.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),ju(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,M=n.yOrigin||0,w!==na&&(D=w[0],I=w[1],F=w[2],L=w[3],h=O=w[4],d=W=w[5],w.length===6?(f=Math.sqrt(D*D+I*I),p=Math.sqrt(L*L+F*F),_=D||I?Zs(I,D)*ps:0,b=F||L?Zs(F,L)*ps+_:0,b&&(p*=Math.abs(Math.cos(b*$s))),n.svg&&(h-=S-(S*D+M*F),d-=M-(S*I+M*L))):(Ct=w[6],dt=w[7],C=w[8],Q=w[9],st=w[10],At=w[11],h=w[12],d=w[13],u=w[14],x=Zs(Ct,st),m=x*ps,x&&(T=Math.cos(-x),R=Math.sin(-x),U=O*T+C*R,$=W*T+Q*R,V=Ct*T+st*R,C=O*-R+C*T,Q=W*-R+Q*T,st=Ct*-R+st*T,At=dt*-R+At*T,O=U,W=$,Ct=V),x=Zs(-F,st),g=x*ps,x&&(T=Math.cos(-x),R=Math.sin(-x),U=D*T-C*R,$=I*T-Q*R,V=F*T-st*R,At=L*R+At*T,D=U,I=$,F=V),x=Zs(I,D),_=x*ps,x&&(T=Math.cos(x),R=Math.sin(x),U=D*T+I*R,$=O*T+W*R,I=I*T-D*R,W=W*T-O*R,D=U,O=$),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Ge(Math.sqrt(D*D+I*I+F*F)),p=Ge(Math.sqrt(W*W+Ct*Ct)),x=Zs(O,W),b=Math.abs(x)>2e-4?x*ps:0,y=At?1/(At<0?-At:At):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!pm(ii(t,Fe)),U&&t.setAttribute("transform",U))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ge(f),n.scaleY=Ge(p),n.rotation=Ge(_)+a,n.rotationX=Ge(m)+a,n.rotationY=Ge(g)+a,n.skewX=b+a,n.skewY=A+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$n]=Pl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?Dv:hm?mm:Lv,n.uncache=0,n},Pl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ju=function(t,e,n){var i=gn(e);return Ge(parseFloat(e)+parseFloat(Ur(t,"x",n+"px",i)))+i},Lv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mm(t,e)},fs="0deg",ea="0px",ds=") ",mm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,b=n.target,A=n.zOrigin,y="",S=g==="auto"&&t&&t!==1||g===!0;if(A&&(d!==fs||h!==fs)){var M=parseFloat(h)*$s,w=Math.sin(M),x=Math.cos(M),T;M=parseFloat(d)*$s,T=Math.cos(M),o=Ju(b,o,w*T*-A),a=Ju(b,a,-Math.sin(M)*-A),l=Ju(b,l,x*T*-A+A)}m!==ea&&(y+="perspective("+m+ds),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||o!==ea||a!==ea||l!==ea)&&(y+=l!==ea||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ds),c!==fs&&(y+="rotate("+c+ds),h!==fs&&(y+="rotateY("+h+ds),d!==fs&&(y+="rotateX("+d+ds),(u!==fs||f!==fs)&&(y+="skew("+u+", "+f+ds),(p!==1||_!==1)&&(y+="scale("+p+", "+_+ds),b.style[Fe]=y||"translate(0, 0)"},Dv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,b=n.forceCSS,A=parseFloat(o),y=parseFloat(a),S,M,w,x,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=$s,c*=$s,S=Math.cos(l)*d,M=Math.sin(l)*d,w=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=$s,T=Math.tan(c-h),T=Math.sqrt(1+T*T),w*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),S*=T,M*=T)),S=Ge(S),M=Ge(M),w=Ge(w),x=Ge(x)):(S=d,x=u,M=w=0),(A&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(A=Ur(f,"x",o,"px"),y=Ur(f,"y",a,"px")),(p||_||m||g)&&(A=Ge(A+p-(p*S+_*w)+m),y=Ge(y+_-(p*M+_*x)+g)),(i||s)&&(T=f.getBBox(),A=Ge(A+i/100*T.width),y=Ge(y+s/100*T.height)),T="matrix("+S+","+M+","+w+","+x+","+A+","+y+")",f.setAttribute("transform",T),b&&(f.style[Fe]=T)},Nv=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ps:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Qp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Qp)%o-~~(c/o)*o)),t._pt=u=new Fn(t._pt,e,n,i,c,gv),u.e=h,u.u="deg",t._props.push(n),u},sm=function(t,e){for(var n in e)t[n]=e[n];return t},Uv=function(t,e,n){var i=sm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Fe]=e,a=ia(n,1),Nr(n,Fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Fe],o[Fe]=e,a=ia(n,1),o[Fe]=c);for(l in sr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=gn(c),p=gn(h),d=f!==p?Ur(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Fn(t._pt,a,l,d,u-d,$u),t._pt.u=p||0,t._props.push(l));sm(a,i)};On("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Rl[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return rr(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var sf={name:"css",register:Qu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,_,m,g,b,A,y,S,M,w,x,T;tf||Qu(),this.styles=this.styles||cm(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(qn[_]&&Gu(_,e,n,i,t,s)))){if(f=typeof h,p=Rl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ys(h)),p)p(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",nr.lastIndex=0,nr.test(c)||(m=gn(c),g=gn(h),g?m!==g&&(c=Ur(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=Ys(c)),gn(c+"")||c==="auto"||(c+=Jn.units[_]||gn(rr(t,_))||""),(c+"").charAt(1)==="="&&(c=rr(t,_))):c=rr(t,_),u=parseFloat(c),b=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),d=parseFloat(h),_ in Vi&&(_==="autoAlpha"&&(u===1&&rr(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,a.visibility),Dr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in sr,A){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ii(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=ii(t,"perspective"),R?t.style.perspective=R:Nr(t,"perspective")}d=parseFloat(h)}if(y||(S=t._gsap,S.renderTransform&&!e.parseTransform||ia(t,e.parseTransform),M=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new Fn(this._pt,a,Fe,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Fn(this._pt,S,"scaleY",S.scaleY,(b?hs(S.scaleY,b+d):d)-S.scaleY||0,$u),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push($n,0,a[$n]),h=Pv(h),S.svg?ju(t,h,0,M,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&Dr(this,S,"zOrigin",S.zOrigin,g),Dr(this,a,_,Pl(c),Pl(h)));continue}else if(_==="svgOrigin"){ju(t,h,1,M,0,this);continue}else if(_ in dm){Nv(this,S,_,u,b?hs(u,b+h):h);continue}else if(_==="smoothOrigin"){Dr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Uv(this,h,t);continue}}else _ in a||(_=Ks(_)||_);if(A||(d||d===0)&&(u||u===0)&&!mv.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),g=gn(h)||(_ in Jn.units?Jn.units[_]:m),m!==g&&(u=Ur(t,_,c,g)),this._pt=new Fn(this._pt,A?S:a,_,u,(b?hs(u,b+d):d)-u,!A&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?vv:$u),this._pt.u=g||0,A&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=xv):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=_v);else if(_ in a)Rv.call(this,t,_,c,b?b+h:h);else if(_ in t)this.add(t,_,c||t[_],b?b+h:h,i,s);else if(_!=="parseTransform"){wl(_,h);continue}A||(_ in a?x.push(_,0,a[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),o.push(_)}}w&&Zu(this)},render:function(t,e){if(e.tween._time||!ef())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:rr,aliases:Vi,getSetter:function(t,e,n){var i=Vi[e];return i&&i.indexOf(",")<0&&(e=i),e in sr&&e!==$n&&(t._gsap.x||rr(t,"x"))?n&&Kp===n?e==="scale"?bv:Mv:(Kp=n||{})&&(e==="scale"?wv:Tv):t.style&&!bl(t.style[e])?yv:~e.indexOf("-")?Sv:Cl(t,e)},core:{_removeProperty:Nr,_getMatrix:rf}};wn.utils.checkPrefix=Ks;wn.core.getStyleSaver=cm;(function(r,t,e,n){var i=On(r+","+t+","+e,function(s){sr[s]=1});On(t,function(s){Jn.units[s]="deg",dm[s]=1}),Vi[i[13]]=r+","+t,On(n,function(s){var o=s.split(":");Vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});wn.registerPlugin(sf);var Et=wn.registerPlugin(sf)||wn,B1=Et.core.Tween;function gm(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ov(r,t,e){return t&&gm(r.prototype,t),e&&gm(r,e),r}var _n,Dl,Fv,ri,Or,Fr,js,xm,gs,to,vm,or,wi,ym,Sm=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Mm=1,Qs=[],se=[],Ti=[],sa=Date.now,of=function(t,e){return e},Bv=function(){var t=to.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,Ti),se=n,Ti=i,of=function(o,a){return e[o](a)}},lr=function(t,e){return~Ti.indexOf(t)&&Ti[Ti.indexOf(t)+1][e]},oa=function(t){return!!~vm.indexOf(t)},kn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Bn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Il="scrollLeft",Ll="scrollTop",af=function(){return or&&or.isPressed||se.cache++},Nl=function(t,e){var n=function i(s){if(s||s===0){Mm&&(ri.history.scrollRestoration="manual");var o=or&&or.isPressed;s=i.v=Math.round(s)||(or&&or.iOS?1:0),t(s),i.cacheID=se.cache,o&&of("ss",s)}else(e||se.cache!==i.cacheID||of("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Tn={s:Il,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Nl(function(r){return arguments.length?ri.scrollTo(r,Ke.sc()):ri.pageXOffset||Or[Il]||Fr[Il]||js[Il]||0})},Ke={s:Ll,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Tn,sc:Nl(function(r){return arguments.length?ri.scrollTo(Tn.sc(),r):ri.pageYOffset||Or[Ll]||Fr[Ll]||js[Ll]||0})},zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||_n.utils.toArray)(t)[0]||(typeof t=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},kv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ar=function(t,e){var n=e.s,i=e.sc;oa(t)&&(t=Or.scrollingElement||Fr);var s=se.indexOf(t),o=i===Ke.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||kn(t,"scroll",af);var a=se[s+o],l=a||(se[s+o]=Nl(lr(t,n),!0)||(oa(t)?i:Nl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=_n.getProperty(t,"scrollBehavior")==="smooth"),l},Ul=function(t,e,n){var i=t,s=t,o=sa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=sa();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(p){var _=a,m=s,g=sa();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},ra=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_m=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},bm=function(){to=_n.core.globals().ScrollTrigger,to&&to.core&&Bv()},wm=function(t){return _n=t||Sm(),!Dl&&_n&&typeof document<"u"&&document.body&&(ri=window,Or=document,Fr=Or.documentElement,js=Or.body,vm=[ri,Or,Fr,js],Fv=_n.utils.clamp,ym=_n.core.context||function(){},gs="onpointerenter"in js?"pointer":"mouse",xm=We.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,wi=We.eventTypes=("ontouchstart"in Fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Mm=0},500),Dl=1),to||bm(),Dl};Tn.op=Ke;se.cache=0;var We=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Dl||wm(_n)||console.warn("Please gsap.registerPlugin(Observer)"),to||bm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,b=n.onDrag,A=n.onPress,y=n.onRelease,S=n.onRight,M=n.onLeft,w=n.onUp,x=n.onDown,T=n.onChangeX,R=n.onChangeY,D=n.onChange,I=n.onToggleX,F=n.onToggleY,L=n.onHover,O=n.onHoverEnd,W=n.onMove,U=n.ignoreCheck,$=n.isNormalizer,V=n.onGestureStart,C=n.onGestureEnd,Q=n.onWheel,st=n.onEnable,dt=n.onDisable,At=n.onClick,Ct=n.scrollSpeed,Nt=n.capture,Z=n.allowClicks,K=n.lockAxis,ft=n.onLockAxis;this.target=a=zn(a)||Fr,this.vars=n,f&&(f=_n.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,Ct=Ct||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(js).lineHeight)||22);var Ut,ut,Ot,zt,Rt,Zt,jt,H=this,ee=0,ge=0,Ae=n.passive||!h&&n.passive!==!1,Jt=ar(a,Tn),pt=ar(a,Ke),N=Jt(),te=pt(),wt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&wi[0]==="pointerdown",P=oa(a),v=a.ownerDocument||Or,z=[0,0,0],G=[0,0,0],j=0,ht=function(){return j=sa()},at=function(rt,Gt){return(H.event=rt)&&f&&kv(rt.target,f)||Gt&&wt&&rt.pointerType!=="touch"||U&&U(rt,Gt)},tt=function(){H._vx.reset(),H._vy.reset(),ut.pause(),d&&d(H)},nt=function(){var rt=H.deltaX=_m(z),Gt=H.deltaY=_m(G),ot=Math.abs(rt)>=i,Xt=Math.abs(Gt)>=i;D&&(ot||Xt)&&D(H,rt,Gt,z,G),ot&&(S&&H.deltaX>0&&S(H),M&&H.deltaX<0&&M(H),T&&T(H),I&&H.deltaX<0!=ee<0&&I(H),ee=H.deltaX,z[0]=z[1]=z[2]=0),Xt&&(x&&H.deltaY>0&&x(H),w&&H.deltaY<0&&w(H),R&&R(H),F&&H.deltaY<0!=ge<0&&F(H),ge=H.deltaY,G[0]=G[1]=G[2]=0),(zt||Ot)&&(W&&W(H),Ot&&(m&&Ot===1&&m(H),b&&b(H),Ot=0),zt=!1),Zt&&!(Zt=!1)&&ft&&ft(H),Rt&&(Q(H),Rt=!1),Ut=0},_t=function(rt,Gt,ot){z[ot]+=rt,G[ot]+=Gt,H._vx.update(rt),H._vy.update(Gt),c?Ut||(Ut=requestAnimationFrame(nt)):nt()},Lt=function(rt,Gt){K&&!jt&&(H.axis=jt=Math.abs(rt)>Math.abs(Gt)?"x":"y",Zt=!0),jt!=="y"&&(z[2]+=rt,H._vx.update(rt,!0)),jt!=="x"&&(G[2]+=Gt,H._vy.update(Gt,!0)),c?Ut||(Ut=requestAnimationFrame(nt)):nt()},xt=function(rt){if(!at(rt,1)){rt=ra(rt,h);var Gt=rt.clientX,ot=rt.clientY,Xt=Gt-H.x,Dt=ot-H.y,Kt=H.isDragging;H.x=Gt,H.y=ot,(Kt||(Xt||Dt)&&(Math.abs(H.startX-Gt)>=s||Math.abs(H.startY-ot)>=s))&&(Ot||(Ot=Kt?2:1),Kt||(H.isDragging=!0),Lt(Xt,Dt))}},gt=H.onPress=function(lt){at(lt,1)||lt&&lt.button||(H.axis=jt=null,ut.pause(),H.isPressed=!0,lt=ra(lt),ee=ge=0,H.startX=H.x=lt.clientX,H.startY=H.y=lt.clientY,H._vx.reset(),H._vy.reset(),kn($?a:v,wi[1],xt,Ae,!0),H.deltaX=H.deltaY=0,A&&A(H))},ct=H.onRelease=function(lt){if(!at(lt,1)){Bn($?a:v,wi[1],xt,!0);var rt=!isNaN(H.y-H.startY),Gt=H.isDragging,ot=Gt&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Xt=ra(lt);!ot&&rt&&(H._vx.reset(),H._vy.reset(),h&&Z&&_n.delayedCall(.08,function(){if(sa()-j>300&&!lt.defaultPrevented){if(lt.target.click)lt.target.click();else if(v.createEvent){var Dt=v.createEvent("MouseEvents");Dt.initMouseEvent("click",!0,!0,ri,1,Xt.screenX,Xt.screenY,Xt.clientX,Xt.clientY,!1,!1,!1,!1,0,null),lt.target.dispatchEvent(Dt)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&Gt&&!$&&ut.restart(!0),Ot&&nt(),g&&Gt&&g(H),y&&y(H,ot)}},Vt=function(rt){return rt.touches&&rt.touches.length>1&&(H.isGesturing=!0)&&V(rt,H.isDragging)},qt=function(){return(H.isGesturing=!1)||C(H)},B=function(rt){if(!at(rt)){var Gt=Jt(),ot=pt();_t((Gt-N)*Ct,(ot-te)*Ct,1),N=Gt,te=ot,d&&ut.restart(!0)}},mt=function(rt){if(!at(rt)){rt=ra(rt,h),Q&&(Rt=!0);var Gt=(rt.deltaMode===1?l:rt.deltaMode===2?ri.innerHeight:1)*p;_t(rt.deltaX*Gt,rt.deltaY*Gt,0),d&&!$&&ut.restart(!0)}},et=function(rt){if(!at(rt)){var Gt=rt.clientX,ot=rt.clientY,Xt=Gt-H.x,Dt=ot-H.y;H.x=Gt,H.y=ot,zt=!0,d&&ut.restart(!0),(Xt||Dt)&&Lt(Xt,Dt)}},vt=function(rt){H.event=rt,L(H)},St=function(rt){H.event=rt,O(H)},it=function(rt){return at(rt)||ra(rt,h)&&At(H)};ut=H._dc=_n.delayedCall(u||.25,tt).pause(),H.deltaX=H.deltaY=0,H._vx=Ul(0,50,!0),H._vy=Ul(0,50,!0),H.scrollX=Jt,H.scrollY=pt,H.isDragging=H.isGesturing=H.isPressed=!1,ym(this),H.enable=function(lt){return H.isEnabled||(kn(P?v:a,"scroll",af),o.indexOf("scroll")>=0&&kn(P?v:a,"scroll",B,Ae,Nt),o.indexOf("wheel")>=0&&kn(a,"wheel",mt,Ae,Nt),(o.indexOf("touch")>=0&&xm||o.indexOf("pointer")>=0)&&(kn(a,wi[0],gt,Ae,Nt),kn(v,wi[2],ct),kn(v,wi[3],ct),Z&&kn(a,"click",ht,!0,!0),At&&kn(a,"click",it),V&&kn(v,"gesturestart",Vt),C&&kn(v,"gestureend",qt),L&&kn(a,gs+"enter",vt),O&&kn(a,gs+"leave",St),W&&kn(a,gs+"move",et)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=zt=Ot=!1,H._vx.reset(),H._vy.reset(),N=Jt(),te=pt(),lt&&lt.type&&gt(lt),st&&st(H)),H},H.disable=function(){H.isEnabled&&(Qs.filter(function(lt){return lt!==H&&oa(lt.target)}).length||Bn(P?v:a,"scroll",af),H.isPressed&&(H._vx.reset(),H._vy.reset(),Bn($?a:v,wi[1],xt,!0)),Bn(P?v:a,"scroll",B,Nt),Bn(a,"wheel",mt,Nt),Bn(a,wi[0],gt,Nt),Bn(v,wi[2],ct),Bn(v,wi[3],ct),Bn(a,"click",ht,!0),Bn(a,"click",it),Bn(v,"gesturestart",Vt),Bn(v,"gestureend",qt),Bn(a,gs+"enter",vt),Bn(a,gs+"leave",St),Bn(a,gs+"move",et),H.isEnabled=H.isPressed=H.isDragging=!1,dt&&dt(H))},H.kill=H.revert=function(){H.disable();var lt=Qs.indexOf(H);lt>=0&&Qs.splice(lt,1),or===H&&(or=0)},Qs.push(H),$&&oa(a)&&(or=H),H.enable(_)},Ov(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();We.version="3.15.0";We.create=function(r){return new We(r)};We.register=wm;We.getAll=function(){return Qs.slice()};We.getById=function(r){return Qs.filter(function(t){return t.vars.id===r})[0]};Sm()&&_n.registerPlugin(We);var It,ro,le,Se,ai,xe,Sf,Kl,ya,da,la,Ol,En,tc,pf,Hn,Tm,Em,so,Hm,lf,Gm,Vn,mf,Wm,Xm,Br,gf,Mf,oo,bf,pa,_f,cf,Fl=1,An=Date.now,hf=An(),yi=0,ca=0,Am=function(t,e,n){var i=oi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Cm=function(t,e){return e&&(!oi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},zv=function r(){return ca&&requestAnimationFrame(r)},Rm=function(){return tc=1},Pm=function(){return tc=0},Hi=function(t){return t},ha=function(t){return Math.round(t*1e5)/1e5||0},qm=function(){return typeof window<"u"},Ym=function(){return It||qm()&&(It=window.gsap)&&It.registerPlugin&&It},Ms=function(t){return!!~Sf.indexOf(t)},Zm=function(t){return(t==="Height"?bf:le["inner"+t])||ai["client"+t]||xe["client"+t]},Jm=function(t){return lr(t,"getBoundingClientRect")||(Ms(t)?function(){return $l.width=le.innerWidth,$l.height=bf,$l}:function(){return cr(t)})},Vv=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Zm(s):t["client"+s])||0}},Hv=function(t,e){return!e||~Ti.indexOf(t)?Jm(t):function(){return $l}},Gi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=lr(t,n))?o()-Jm(t)()[s]:Ms(t)?(ai[n]||xe[n])-Zm(i):t[n]-t["offset"+i])},Bl=function(t,e){for(var n=0;n<so.length;n+=3)(!e||~e.indexOf(so[n+1]))&&t(so[n],so[n+1],so[n+2])},oi=function(t){return typeof t=="string"},Cn=function(t){return typeof t=="function"},ua=function(t){return typeof t=="number"},_s=function(t){return typeof t=="object"},aa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},eo=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},no=Math.abs,$m="left",Km="top",wf="right",Tf="bottom",vs="width",ys="height",ma="Right",ga="Left",_a="Top",xa="Bottom",Qe="padding",xi="margin",lo="Width",Ef="Height",nn="px",vi=function(t){return le.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Gv=function(t){var e=vi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Im=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},cr=function(t,e){var n=e&&vi(t)[pf]!=="matrix(1, 0, 0, 1, 0, 0)"&&It.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ql=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Qm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Wv=function(t){return function(e){return It.utils.snap(Qm(t),e)}},Af=function(t){var e=It.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Xv=function(t){return function(e,n){return Af(Qm(t))(e,n.direction)}},kl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},hn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},zl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Lm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vl={toggleActions:"play",anticipatePin:0},jl={top:0,left:0,center:.5,bottom:1,right:1},ql=function(t,e){if(oi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in jl?jl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Hl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=Se.createElement("div"),_=Ms(n)||lr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?xe:n.tagName==="IFRAME"?n.contentDocument.body:n,b=t.indexOf("start")!==-1,A=b?c:h,y="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===Ke?wf:Tf)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],Yl(p,0,i,b),p},Yl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+lo]=1,s["border"+a+lo]=0,s[n.p]=e+"px",It.set(t,s)},oe=[],xf={},Sa,Dm=function(){return An()-yi>34&&(Sa||(Sa=requestAnimationFrame(hr)))},io=function(){(!Vn||!Vn.isPressed||Vn.startX>xe.clientWidth)&&(se.cache++,Vn?Sa||(Sa=requestAnimationFrame(hr)):hr(),yi||ws("scrollStart"),yi=An())},uf=function(){Xm=le.innerWidth,Wm=le.innerHeight},fa=function(t){se.cache++,(t===!0||!En&&!Gm&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!mf||Xm!==le.innerWidth||Math.abs(le.innerHeight-Wm)>le.innerHeight*.25))&&Kl.restart(!0)},bs={},qv=[],jm=function r(){return cn(Wt,"scrollEnd",r)||xs(!0)},ws=function(t){return bs[t]&&bs[t].map(function(e){return e()})||qv},si=[],tg=function(t){for(var e=0;e<si.length;e+=5)(!t||si[e+4]&&si[e+4].query===t)&&(si[e].style.cssText=si[e+1],si[e].getBBox&&si[e].setAttribute("transform",si[e+2]||""),si[e+3].uncache=1)},eg=function(){return se.forEach(function(t){return Cn(t)&&++t.cacheID&&(t.rec=t())})},Cf=function(t,e){var n;for(Hn=0;Hn<oe.length;Hn++)n=oe[Hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));pa=!0,e&&tg(e),e||ws("revert")},ng=function(t,e){se.cache++,(e||!Gn)&&se.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),oi(t)&&(le.history.scrollRestoration=Mf=t)},Gn,Ss=0,Nm,Yv=function(){if(Nm!==Ss){var t=Nm=Ss;requestAnimationFrame(function(){return t===Ss&&xs(!0)})}},ig=function(){xe.appendChild(oo),bf=!Vn&&oo.offsetHeight||le.innerHeight,xe.removeChild(oo)},Um=function(t){return ya(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},xs=function(t,e){if(ai=Se.documentElement,xe=Se.body,Sf=[le,Se,ai,xe],yi&&!t&&!pa){hn(Wt,"scrollEnd",jm);return}ig(),Gn=Wt.isRefreshing=!0,pa||eg();var n=ws("refreshInit");Hm&&Wt.sort(),e||Cf(),se.forEach(function(i){Cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),oe.slice(0).forEach(function(i){return i.refresh()}),pa=!1,oe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),_f=1,Um(!0),oe.forEach(function(i){var s=Gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Um(!1),_f=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){Cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ng(Mf,1),Kl.pause(),Ss++,Gn=2,hr(2),oe.forEach(function(i){return Cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=Wt.isRefreshing=!1,ws("refresh")},vf=0,Zl=1,va,hr=function(t){if(t===2||!Gn&&!pa){Wt.isUpdating=!0,va&&va.update(0);var e=oe.length,n=An(),i=n-hf>=50,s=e&&oe[0].scroll();if(Zl=vf>s?-1:1,Gn||(vf=s),i&&(yi&&!tc&&n-yi>200&&(yi=0,ws("scrollEnd")),la=hf,hf=n),Zl<0){for(Hn=e;Hn-- >0;)oe[Hn]&&oe[Hn].update(0,i);Zl=1}else for(Hn=0;Hn<e;Hn++)oe[Hn]&&oe[Hn].update(0,i);Wt.isUpdating=!1}Sa=0},yf=[$m,Km,Tf,wf,xi+xa,xi+ma,xi+_a,xi+ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Jl=yf.concat([vs,ys,"boxSizing","max"+lo,"max"+Ef,"position",xi,Qe,Qe+_a,Qe+ma,Qe+xa,Qe+ga]),Zv=function(t,e,n){ao(n);var i=t._gsap;if(i.spacerIsNative)ao(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},ff=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=yf.length,o=e.style,a=t.style,l;s--;)l=yf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Tf]=a[wf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vs]=Ql(t,Tn)+nn,o[ys]=Ql(t,Ke)+nn,o[Qe]=a[xi]=a[Km]=a[$m]="0",ao(i),a[vs]=a["max"+lo]=n[vs],a[ys]=a["max"+Ef]=n[ys],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Jv=/([A-Z])/g,ao=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||It.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Jv,"-$1").toLowerCase())}},Gl=function(t){for(var e=Jl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Jl[s],n[Jl[s]]);return i.t=t,i},$v=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},$l={left:0,top:0},Om=function(t,e,n,i,s,o,a,l,c,h,d,u,f,p){Cn(t)&&(t=t(l)),oi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?ql("0"+t.substr(3),n):0));var _=f?f.time():0,m,g,b;if(f&&f.seek(0),isNaN(t)||(t=+t),ua(t))f&&(t=It.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Yl(a,n,i,!0);else{Cn(e)&&(e=e(l));var A=(t||"0").split(" "),y,S,M,w;b=zn(e,l)||xe,y=cr(b)||{},(!y||!y.left&&!y.top)&&vi(b).display==="none"&&(w=b.style.display,b.style.display="block",y=cr(b),w?b.style.display=w:b.style.removeProperty("display")),S=ql(A[0],y[i.d]),M=ql(A[1]||"0",n),t=y[i.p]-c[i.p]-h+S+s-M,a&&Yl(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var x=t+n,T=o._isStart;m="scroll"+i.d2,Yl(o,x,i,T&&x>20||!T&&(d?Math.max(xe[m],ai[m]):o.parentNode[m])<=x+1),d&&(c=cr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return f&&b&&(m=cr(b),f.seek(u),g=cr(b),f._caScrollDist=m[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Kv=/(webkit|moz|length|cssText|inset)/i,Fm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===xe){t._stOrig=s.cssText,a=vi(t);for(o in a)!+o&&!Kv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;It.core.getCache(t).uncache=1,e.appendChild(t)}},rg=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wl=function(t,e,n){var i={};i[e.p]="+="+n,It.set(t,i)},Bm=function(t,e){var n=ar(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var _=rg(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){se.cache++,o.tween&&hr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=It.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(t,"wheel",n.wheelHandler),Wt.isTouch&&hn(t,"touchmove",n.wheelHandler),s},Wt=(function(){function r(e,n){ro||r.register(It)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),gf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ca){this.update=this.refresh=this.kill=Hi;return}n=Im(oi(n)||ua(n)||n.nodeType?{trigger:n}:n,Vl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,b=s.onSnapComplete,A=s.once,y=s.snap,S=s.pinReparent,M=s.pinSpacer,w=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Tn:Ke,D=!d&&d!==0,I=zn(n.scroller||le),F=It.core.getCache(I),L=Ms(I),O=("pinType"in n?n.pinType:lr(I,"pinType")||L&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=D&&n.toggleActions.split(" "),$="markers"in n?n.markers:Vl.markers,V=L?0:parseFloat(vi(I)["border"+R.p2+lo])||0,C=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(C)},st=Vv(I,L,R),dt=Hv(I,L),At=0,Ct=0,Nt=0,Z=ar(I,R),K,ft,Ut,ut,Ot,zt,Rt,Zt,jt,H,ee,ge,Ae,Jt,pt,N,te,wt,P,v,z,G,j,ht,at,tt,nt,_t,Lt,xt,gt,ct,Vt,qt,B,mt,et,vt,St;if(C._startClamp=C._endClamp=!1,C._dir=R,m*=45,C.scroller=I,C.scroll=w?w.time.bind(w):Z,ut=Z(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Hm=1,n.refreshPriority===-9999&&(va=C)),F.tweenScroll=F.tweenScroll||{top:Bm(I,Ke),left:Bm(I,Tn)},C.tweenTo=K=F.tweenScroll[R.p],C.scrubDuration=function(ot){Vt=ua(ot)&&ot,Vt?ct?ct.duration(ot):ct=It.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Vt,paused:!0,onComplete:function(){return g&&g(C)}}):(ct&&ct.progress(1).kill(),ct=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),xt=0,l||(l=i.vars.id)),y&&((!_s(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xe.style&&It.set(L?[xe,ai]:I,{scrollBehavior:"auto"}),se.forEach(function(ot){return Cn(ot)&&ot.target===(L?Se.scrollingElement||ai:I)&&(ot.smooth=!1)}),Ut=Cn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Wv(i):y.snapTo==="labelsDirectional"?Xv(i):y.directional!==!1?function(ot,Xt){return Af(y.snapTo)(ot,An()-Ct<500?0:Xt.direction)}:It.utils.snap(y.snapTo),qt=y.duration||{min:.1,max:2},qt=_s(qt)?da(qt.min,qt.max):da(qt,qt),B=It.delayedCall(y.delay||Vt/2||.1,function(){var ot=Z(),Xt=An()-Ct<500,Dt=K.tween;if((Xt||Math.abs(C.getVelocity())<10)&&!Dt&&!tc&&At!==ot){var Kt=(ot-zt)/Jt,Ze=i&&!D?i.totalProgress():Kt,ae=Xt?0:(Ze-gt)/(An()-la)*1e3||0,Pe=It.utils.clamp(-Kt,1-Kt,no(ae/2)*ae/.185),an=Kt+(y.inertia===!1?0:Pe),Ie,be,fe=y,Dn=fe.onStart,Ce=fe.onInterrupt,yn=fe.onComplete;if(Ie=Ut(an,C),ua(Ie)||(Ie=an),be=Math.max(0,Math.round(zt+Ie*Jt)),ot<=Rt&&ot>=zt&&be!==ot){if(Dt&&!Dt._initted&&Dt.data<=no(be-ot))return;y.inertia===!1&&(Pe=Ie-Kt),K(be,{duration:qt(no(Math.max(no(an-Ze),no(Ie-Ze))*.185/ae/.05||0)),ease:y.ease||"power3",data:no(be-ot),onInterrupt:function(){return B.restart(!0)&&Ce&&eo(C,Ce)},onComplete:function(){C.update(),At=Z(),i&&!D&&(ct?ct.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),xt=gt=i&&!D?i.totalProgress():C.progress,b&&b(C),yn&&eo(C,yn)}},ot,Pe*Jt,be-ot-Pe*Jt),Dn&&eo(C,Dn,K.tween)}}else C.isActive&&At!==ot&&B.restart(!0)}).pause()),l&&(xf[l]=C),u=C.trigger=zn(u||f!==!0&&f),St=u&&u._gsap&&u._gsap.stRevert,St&&(St=St(C)),f=f===!0?u:zn(f),oi(a)&&(a={targets:u,className:a}),f&&(p===!1||p===xi||(p=!p&&f.parentNode&&f.parentNode.style&&vi(f.parentNode).display==="flex"?!1:Qe),C.pin=f,ft=It.core.getCache(f),ft.spacer?pt=ft.pinState:(M&&(M=zn(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),ft.spacerIsNative=!!M,M&&(ft.spacerState=Gl(M))),ft.spacer=wt=M||Se.createElement("div"),wt.classList.add("pin-spacer"),l&&wt.classList.add("pin-spacer-"+l),ft.pinState=pt=Gl(f)),n.force3D!==!1&&It.set(f,{force3D:!0}),C.spacer=wt=ft.spacer,Lt=vi(f),ht=Lt[p+R.os2],v=It.getProperty(f),z=It.quickSetter(f,R.a,nn),ff(f,wt,Lt),te=Gl(f)),$){ge=_s($)?Im($,Lm):Lm,H=Hl("scroller-start",l,I,R,ge,0),ee=Hl("scroller-end",l,I,R,ge,0,H),P=H["offset"+R.op.d2];var it=zn(lr(I,"content")||I);Zt=this.markerStart=Hl("start",l,it,R,ge,P,0,w),jt=this.markerEnd=Hl("end",l,it,R,ge,P,0,w),w&&(vt=It.quickSetter([Zt,jt],R.a,nn)),!O&&!(Ti.length&&lr(I,"fixedMarkers")===!0)&&(Gv(L?xe:I),It.set([H,ee],{force3D:!0}),tt=It.quickSetter(H,R.a,nn),_t=It.quickSetter(ee,R.a,nn))}if(w){var lt=w.vars.onUpdate,rt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){C.update(0,0,1),lt&&lt.apply(w,rt||[])})}if(C.previous=function(){return oe[oe.indexOf(C)-1]},C.next=function(){return oe[oe.indexOf(C)+1]},C.revert=function(ot,Xt){if(!Xt)return C.kill(!0);var Dt=ot!==!1||!C.enabled,Kt=En;Dt!==C.isReverted&&(Dt&&(mt=Math.max(Z(),C.scroll.rec||0),Nt=C.progress,et=i&&i.progress()),Zt&&[Zt,jt,H,ee].forEach(function(Ze){return Ze.style.display=Dt?"none":"block"}),Dt&&(En=C,C.update(Dt)),f&&(!S||!C.isActive)&&(Dt?Zv(f,wt,pt):ff(f,wt,vi(f),at)),Dt||C.update(Dt),En=Kt,C.isReverted=Dt)},C.refresh=function(ot,Xt,Dt,Kt){if(!((En||!C.enabled)&&!Xt)){if(f&&ot&&yi){hn(r,"scrollEnd",jm);return}!Gn&&Q&&Q(C),En=C,K.tween&&!Dt&&(K.tween.kill(),K.tween=0),ct&&ct.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(yt){return yt.vars.immediateRender&&yt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ze=st(),ae=dt(),Pe=w?w.duration():Gi(I,R),an=Jt<=.01||!Jt,Ie=0,be=Kt||0,fe=_s(Dt)?Dt.end:n.end,Dn=n.endTrigger||u,Ce=_s(Dt)?Dt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),yn=C.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,C),Nn=u&&Math.max(0,oe.indexOf(C))||0,Je=Nn,Ve,tn,Oi,Bs,ln,Xe,di,ks,E,k,J,X,q;for($&&_s(Dt)&&(X=It.getProperty(H,R.p),q=It.getProperty(ee,R.p));Je-- >0;)Xe=oe[Je],Xe.end||Xe.refresh(0,1)||(En=C),di=Xe.pin,di&&(di===u||di===f||di===yn)&&!Xe.isReverted&&(k||(k=[]),k.unshift(Xe),Xe.revert(!0,!0)),Xe!==oe[Je]&&(Nn--,Je--);for(Cn(Ce)&&(Ce=Ce(C)),Ce=Am(Ce,"start",C),zt=Om(Ce,u,Ze,R,Z(),Zt,H,C,ae,V,O,Pe,w,C._startClamp&&"_startClamp")||(f?-.001:0),Cn(fe)&&(fe=fe(C)),oi(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(oi(Ce)?Ce.split(" ")[0]:"")+fe:(Ie=ql(fe.substr(2),Ze),fe=oi(Ce)?Ce:(w?It.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,zt):zt)+Ie,Dn=u)),fe=Am(fe,"end",C),Rt=Math.max(zt,Om(fe||(Dn?"100% 0":Pe),Dn,Ze,R,Z()+Ie,jt,ee,C,ae,V,O,Pe,w,C._endClamp&&"_endClamp"))||-.001,Ie=0,Je=Nn;Je--;)Xe=oe[Je]||{},di=Xe.pin,di&&Xe.start-Xe._pinPush<=zt&&!w&&Xe.end>0&&(Ve=Xe.end-(C._startClamp?Math.max(0,Xe.start):Xe.start),(di===u&&Xe.start-Xe._pinPush<zt||di===yn)&&isNaN(Ce)&&(Ie+=Ve*(1-Xe.progress)),di===f&&(be+=Ve));if(zt+=Ie,Rt+=Ie,C._startClamp&&(C._startClamp+=Ie),C._endClamp&&!Gn&&(C._endClamp=Rt||-.001,Rt=Math.min(Rt,Gi(I,R))),Jt=Rt-zt||(zt-=.01)&&.001,an&&(Nt=It.utils.clamp(0,1,It.utils.normalize(zt,Rt,mt))),C._pinPush=be,Zt&&Ie&&(Ve={},Ve[R.a]="+="+Ie,yn&&(Ve[R.p]="-="+Z()),It.set([Zt,jt],Ve)),f&&!(_f&&C.end>=Gi(I,R)))Ve=vi(f),Bs=R===Ke,Oi=Z(),G=parseFloat(v(R.a))+be,!Pe&&Rt>1&&(J=(L?Se.scrollingElement||ai:I).style,J={style:J,value:J["overflow"+R.a.toUpperCase()]},L&&vi(xe)["overflow"+R.a.toUpperCase()]!=="scroll"&&(J.style["overflow"+R.a.toUpperCase()]="scroll")),ff(f,wt,Ve),te=Gl(f),tn=cr(f,!0),ks=O&&ar(I,Bs?Tn:Ke)(),p?(at=[p+R.os2,Jt+be+nn],at.t=wt,Je=p===Qe?Ql(f,R)+Jt+be:0,Je&&(at.push(R.d,Je+nn),wt.style.flexBasis!=="auto"&&(wt.style.flexBasis=Je+nn)),ao(at),yn&&oe.forEach(function(yt){yt.pin===yn&&yt.vars.pinSpacing!==!1&&(yt._subPinOffset=!0)}),O&&Z(mt)):(Je=Ql(f,R),Je&&wt.style.flexBasis!=="auto"&&(wt.style.flexBasis=Je+nn)),O&&(ln={top:tn.top+(Bs?Oi-zt:ks)+nn,left:tn.left+(Bs?ks:Oi-zt)+nn,boxSizing:"border-box",position:"fixed"},ln[vs]=ln["max"+lo]=Math.ceil(tn.width)+nn,ln[ys]=ln["max"+Ef]=Math.ceil(tn.height)+nn,ln[xi]=ln[xi+_a]=ln[xi+ma]=ln[xi+xa]=ln[xi+ga]="0",ln[Qe]=Ve[Qe],ln[Qe+_a]=Ve[Qe+_a],ln[Qe+ma]=Ve[Qe+ma],ln[Qe+xa]=Ve[Qe+xa],ln[Qe+ga]=Ve[Qe+ga],N=$v(pt,ln,S),Gn&&Z(0)),i?(E=i._initted,lf(1),i.render(i.duration(),!0,!0),j=v(R.a)-G+Jt+be,nt=Math.abs(Jt-j)>1,O&&nt&&N.splice(N.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lf(0)):j=Jt,J&&(J.value?J.style["overflow"+R.a.toUpperCase()]=J.value:J.style.removeProperty("overflow-"+R.a));else if(u&&Z()&&!w)for(tn=u.parentNode;tn&&tn!==xe;)tn._pinOffset&&(zt-=tn._pinOffset,Rt-=tn._pinOffset),tn=tn.parentNode;k&&k.forEach(function(yt){return yt.revert(!1,!0)}),C.start=zt,C.end=Rt,ut=Ot=Gn?mt:Z(),!w&&!Gn&&(ut<mt&&Z(mt),C.scroll.rec=0),C.revert(!1,!0),Ct=An(),B&&(At=-1,B.restart(!0)),En=0,i&&D&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(an||Nt!==C.progress||w||_||i&&!i._initted)&&(i&&!D&&(i._initted||Nt||i.vars.immediateRender!==!1)&&i.totalProgress(w&&zt<-.001&&!Nt?It.utils.normalize(zt,Rt,0):Nt,!0),C.progress=an||(ut-zt)/Jt===Nt?0:Nt),f&&p&&(wt._pinOffset=Math.round(C.progress*j)),ct&&ct.invalidate(),isNaN(X)||(X-=It.getProperty(H,R.p),q-=It.getProperty(ee,R.p),Wl(H,R,X),Wl(Zt,R,X-(Kt||0)),Wl(ee,R,q),Wl(jt,R,q-(Kt||0))),an&&!Gn&&C.update(),h&&!Gn&&!Ae&&(Ae=!0,h(C),Ae=!1)}},C.getVelocity=function(){return(Z()-Ot)/(An()-la)*1e3||0},C.endAnimation=function(){aa(C.callbackAnimation),i&&(ct?ct.progress(1):i.paused()?D||aa(i,C.direction<0,1):aa(i,i.reversed()))},C.labelToScroll=function(ot){return i&&i.labels&&(zt||C.refresh()||zt)+i.labels[ot]/i.duration()*Jt||0},C.getTrailing=function(ot){var Xt=oe.indexOf(C),Dt=C.direction>0?oe.slice(0,Xt).reverse():oe.slice(Xt+1);return(oi(ot)?Dt.filter(function(Kt){return Kt.vars.preventOverlaps===ot}):Dt).filter(function(Kt){return C.direction>0?Kt.end<=zt:Kt.start>=Rt})},C.update=function(ot,Xt,Dt){if(!(w&&!Dt&&!ot)){var Kt=Gn===!0?mt:C.scroll(),Ze=ot?0:(Kt-zt)/Jt,ae=Ze<0?0:Ze>1?1:Ze||0,Pe=C.progress,an,Ie,be,fe,Dn,Ce,yn,Nn;if(Xt&&(Ot=ut,ut=w?Z():Kt,y&&(gt=xt,xt=i&&!D?i.totalProgress():ae)),m&&f&&!En&&!Fl&&yi&&(!ae&&zt<Kt+(Kt-Ot)/(An()-la)*m?ae=1e-4:ae===1&&Rt>Kt+(Kt-Ot)/(An()-la)*m&&(ae=.9999)),ae!==Pe&&C.enabled){if(an=C.isActive=!!ae&&ae<1,Ie=!!Pe&&Pe<1,Ce=an!==Ie,Dn=Ce||!!ae!=!!Pe,C.direction=ae>Pe?1:-1,C.progress=ae,Dn&&!En&&(be=ae&&!Pe?0:ae===1?1:Pe===1?2:3,D&&(fe=!Ce&&U[be+1]!=="none"&&U[be+1]||U[be],Nn=i&&(fe==="complete"||fe==="reset"||fe in i))),T&&(Ce||Nn)&&(Nn||d||!i)&&(Cn(T)?T(C):C.getTrailing(T).forEach(function(Oi){return Oi.endAnimation()})),D||(ct&&!En&&!Fl?(ct._dp._time-ct._start!==ct._time&&ct.render(ct._dp._time-ct._start),ct.resetTo?ct.resetTo("totalProgress",ae,i._tTime/i._tDur):(ct.vars.totalProgress=ae,ct.invalidate().restart())):i&&i.totalProgress(ae,!!(En&&(Ct||ot)))),f){if(ot&&p&&(wt.style[p+R.os2]=ht),!O)z(ha(G+j*ae));else if(Dn){if(yn=!ot&&ae>Pe&&Rt+1>Kt&&Kt+1>=Gi(I,R),S)if(!ot&&(an||yn)){var Je=cr(f,!0),Ve=Kt-zt;Fm(f,xe,Je.top+(R===Ke?Ve:0)+nn,Je.left+(R===Ke?0:Ve)+nn)}else Fm(f,wt);ao(an||yn?N:te),nt&&ae<1&&an||z(G+(ae===1&&!yn?j:0))}}y&&!K.tween&&!En&&!Fl&&B.restart(!0),a&&(Ce||A&&ae&&(ae<1||!cf))&&ya(a.targets).forEach(function(Oi){return Oi.classList[an||A?"add":"remove"](a.className)}),o&&!D&&!ot&&o(C),Dn&&!En?(D&&(Nn&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),o&&o(C)),(Ce||!cf)&&(c&&Ce&&eo(C,c),W[be]&&eo(C,W[be]),A&&(ae===1?C.kill(!1,1):W[be]=0),Ce||(be=ae===1?1:3,W[be]&&eo(C,W[be]))),x&&!an&&Math.abs(C.getVelocity())>(ua(x)?x:2500)&&(aa(C.callbackAnimation),ct?ct.progress(1):aa(i,fe==="reverse"?1:!ae,1))):D&&o&&!En&&o(C)}if(_t){var tn=w?Kt/w.duration()*(w._caScrollDist||0):Kt;tt(tn+(H._isFlipped?1:0)),_t(tn)}vt&&vt(-Kt/w.duration()*(w._caScrollDist||0))}},C.enable=function(ot,Xt){C.enabled||(C.enabled=!0,hn(I,"resize",fa),L||hn(I,"scroll",io),Q&&hn(r,"refreshInit",Q),ot!==!1&&(C.progress=Nt=0,ut=Ot=At=Z()),Xt!==!1&&C.refresh())},C.getTween=function(ot){return ot&&K?K.tween:ct},C.setPositions=function(ot,Xt,Dt,Kt){if(w){var Ze=w.scrollTrigger,ae=w.duration(),Pe=Ze.end-Ze.start;ot=Ze.start+Pe*ot/ae,Xt=Ze.start+Pe*Xt/ae}C.refresh(!1,!1,{start:Cm(ot,Dt&&!!C._startClamp),end:Cm(Xt,Dt&&!!C._endClamp)},Kt),C.update()},C.adjustPinSpacing=function(ot){if(at&&ot){var Xt=at.indexOf(R.d)+1;at[Xt]=parseFloat(at[Xt])+ot+nn,at[1]=parseFloat(at[1])+ot+nn,ao(at)}},C.disable=function(ot,Xt){if(ot!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Xt||ct&&ct.pause(),mt=0,ft&&(ft.uncache=1),Q&&cn(r,"refreshInit",Q),B&&(B.pause(),K.tween&&K.tween.kill()&&(K.tween=0)),!L)){for(var Dt=oe.length;Dt--;)if(oe[Dt].scroller===I&&oe[Dt]!==C)return;cn(I,"resize",fa),L||cn(I,"scroll",io)}},C.kill=function(ot,Xt){C.disable(ot,Xt),ct&&!Xt&&ct.kill(),l&&delete xf[l];var Dt=oe.indexOf(C);Dt>=0&&oe.splice(Dt,1),Dt===Hn&&Zl>0&&Hn--,Dt=0,oe.forEach(function(Kt){return Kt.scroller===C.scroller&&(Dt=1)}),Dt||Gn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ot&&i.revert({kill:!1}),Xt||i.kill()),Zt&&[Zt,jt,H,ee].forEach(function(Kt){return Kt.parentNode&&Kt.parentNode.removeChild(Kt)}),va===C&&(va=0),f&&(ft&&(ft.uncache=1),Dt=0,oe.forEach(function(Kt){return Kt.pin===f&&Dt++}),Dt||(ft.spacer=0)),n.onKill&&n.onKill(C)},oe.push(C),C.enable(!1,!1),St&&St(C),i&&i.add&&!Jt){var Gt=C.update;C.update=function(){C.update=Gt,se.cache++,zt||Rt||C.refresh()},It.delayedCall(.01,C.update),Jt=.01,zt=Rt=0}else C.refresh();f&&Yv()},r.register=function(n){return ro||(It=n||Ym(),qm()&&window.document&&r.enable(),ro=ca),ro},r.defaults=function(n){if(n)for(var i in n)Vl[i]=n[i];return Vl},r.disable=function(n,i){ca=0,oe.forEach(function(o){return o[i?"kill":"disable"](n)}),cn(le,"wheel",io),cn(Se,"scroll",io),clearInterval(Ol),cn(Se,"touchcancel",Hi),cn(xe,"touchstart",Hi),kl(cn,Se,"pointerdown,touchstart,mousedown",Rm),kl(cn,Se,"pointerup,touchend,mouseup",Pm),Kl.kill(),Bl(cn);for(var s=0;s<se.length;s+=3)zl(cn,se[s],se[s+1]),zl(cn,se[s],se[s+2])},r.enable=function(){if(le=window,Se=document,ai=Se.documentElement,xe=Se.body,It){if(ya=It.utils.toArray,da=It.utils.clamp,gf=It.core.context||Hi,lf=It.core.suppressOverwrites||Hi,Mf=le.history.scrollRestoration||"auto",vf=le.pageYOffset||0,It.core.globals("ScrollTrigger",r),xe){ca=1,oo=document.createElement("div"),oo.style.height="100vh",oo.style.position="absolute",ig(),zv(),We.register(It),r.isTouch=We.isTouch,Br=We.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mf=We.isTouch===1,hn(le,"wheel",io),Sf=[le,Se,ai,xe],It.matchMedia?(r.matchMedia=function(h){var d=It.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},It.addEventListener("matchMediaInit",function(){eg(),Cf()}),It.addEventListener("matchMediaRevert",function(){return tg()}),It.addEventListener("matchMedia",function(){xs(0,1),ws("matchMedia")}),It.matchMedia().add("(orientation: portrait)",function(){return uf(),uf})):console.warn("Requires GSAP 3.11.0 or later"),uf(),hn(Se,"scroll",io);var n=xe.hasAttribute("style"),i=xe.style,s=i.borderTopStyle,o=It.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=cr(xe),Ke.m=Math.round(a.top+Ke.sc())||0,Tn.m=Math.round(a.left+Tn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),Ol=setInterval(Dm,250),It.delayedCall(.5,function(){return Fl=0}),hn(Se,"touchcancel",Hi),hn(xe,"touchstart",Hi),kl(hn,Se,"pointerdown,touchstart,mousedown",Rm),kl(hn,Se,"pointerup,touchend,mouseup",Pm),pf=It.utils.checkPrefix("transform"),Jl.push(pf),ro=An(),Kl=It.delayedCall(.2,xs).pause(),so=[Se,"visibilitychange",function(){var h=le.innerWidth,d=le.innerHeight;Se.hidden?(Tm=h,Em=d):(Tm!==h||Em!==d)&&fa()},Se,"DOMContentLoaded",xs,le,"load",xs,le,"resize",fa],Bl(hn),oe.forEach(function(h){return h.enable(0,1)}),l=0;l<se.length;l+=3)zl(cn,se[l],se[l+1]),zl(cn,se[l],se[l+2])}else if(Se){var c=function h(){r.enable(),Se.removeEventListener("DOMContentLoaded",h)};Se.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(cf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ol)||(Ol=i)&&setInterval(Dm,i),"ignoreMobileResize"in n&&(mf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Bl(cn)||Bl(hn,n.autoRefreshEvents||"none"),Gm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),o=se.indexOf(s),a=Ms(s);~o&&se.splice(o,a?6:2),i&&(a?Ti.unshift(le,i,xe,i,ai,i):Ti.unshift(s,i))},r.clearMatchMedia=function(n){oe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(oi(n)?zn(n):n).getBoundingClientRect(),a=o[s?vs:ys]*i||0;return s?o.right-a>0&&o.left+a<le.innerWidth:o.bottom-a>0&&o.top+a<le.innerHeight},r.positionInViewport=function(n,i,s){oi(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[s?vs:ys],l=i==null?a/2:i in jl?jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/le.innerWidth:(o.top+l)/le.innerHeight},r.killAll=function(n){if(oe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=bs.killAll||[];bs={},i.forEach(function(s){return s()})}},r})();Wt.version="3.15.0";Wt.saveStyles=function(r){return r?ya(r).forEach(function(t){if(t&&t.style){var e=si.indexOf(t);e>=0&&si.splice(e,5),si.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),It.core.getCache(t),gf())}}):si};Wt.revert=function(r,t){return Cf(!r,t)};Wt.create=function(r,t){return new Wt(r,t)};Wt.refresh=function(r){return r?fa(!0):(ro||Wt.register())&&xs(!0)};Wt.update=function(r){return++se.cache&&hr(r===!0?2:0)};Wt.clearScrollMemory=ng;Wt.maxScroll=function(r,t){return Gi(r,t?Tn:Ke)};Wt.getScrollFunc=function(r,t){return ar(zn(r),t?Tn:Ke)};Wt.getById=function(r){return xf[r]};Wt.getAll=function(){return oe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Wt.isScrolling=function(){return!!yi};Wt.snapDirectional=Af;Wt.addEventListener=function(r,t){var e=bs[r]||(bs[r]=[]);~e.indexOf(t)||e.push(t)};Wt.removeEventListener=function(r,t){var e=bs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Wt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=It.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Cn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Cn(s)&&(s=s(),hn(Wt,"refresh",function(){return s=t.batchMax()})),ya(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Wt.create(c))}),e};var km=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},df=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(We.isTouch?" pinch-zoom":""):"none",t===ai&&r(xe,e)},Xl={auto:1,scroll:1},Qv=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||It.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xl[(l=vi(s)).overflowY]||Xl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ms(s)&&(Xl[(l=vi(s)).overflowY]||Xl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},sg=function(t,e,n,i){return We.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Qv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&hn(Se,We.eventTypes[0],Vm,!1,!0)},onDisable:function(){return cn(Se,We.eventTypes[0],Vm,!0)}})},jv=/(input|label|select|textarea)/i,zm,Vm=function(t){var e=jv.test(t.target.tagName);(e||zm)&&(t._gsapAllow=!0,zm=e)},ty=function(t){_s(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=zn(t.target)||ai,h=It.core.globals().ScrollSmoother,d=h&&h.get(),u=Br&&(t.content&&zn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ar(c,Ke),p=ar(c,Tn),_=1,m=(We.isTouch&&le.visualViewport?le.visualViewport.scale*le.visualViewport.width:le.outerWidth)/le.innerWidth,g=0,b=Cn(i)?function(){return i(a)}:function(){return i||2.8},A,y,S=sg(c,t.type,!0,s),M=function(){return y=!1},w=Hi,x=Hi,T=function(){l=Gi(c,Ke),x=da(Br?1:0,l),n&&(w=da(0,Gi(c,Tn))),A=Ss},R=function(){u._gsap.y=ha(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(M);var $=ha(a.deltaY/2),V=x(f.v-$);if(u&&V!==f.v+f.offset){f.offset=V-f.v;var C=ha((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",u._gsap.y=C+"px",f.cacheID=se.cache,hr()}return!0}f.offset&&R(),y=!0},I,F,L,O,W=function(){T(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&It.set(u,{y:"+=0"}),t.ignoreCheck=function(U){return Br&&U.type==="touchmove"&&D(U)||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){y=!1;var U=_;_=ha((le.visualViewport&&le.visualViewport.scale||1)/m),I.pause(),U!==_&&df(c,_>1.01?!0:n?!1:"x"),F=p(),L=f(),T(),A=Ss},t.onRelease=t.onGestureStart=function(U,$){if(f.offset&&R(),!$)O.restart(!0);else{se.cache++;var V=b(),C,Q;n&&(C=p(),Q=C+V*.05*-U.velocityX/.227,V*=km(p,C,Q,Gi(c,Tn)),I.vars.scrollX=w(Q)),C=f(),Q=C+V*.05*-U.velocityY/.227,V*=km(f,C,Q,Gi(c,Ke)),I.vars.scrollY=x(Q),I.invalidate().duration(V).play(.01),(Br&&I.vars.scrollY>=l||C>=l-1)&&It.to({},{onUpdate:W,duration:V})}o&&o(U)},t.onWheel=function(){I._ts&&I.pause(),An()-g>1e3&&(A=0,g=An())},t.onChange=function(U,$,V,C,Q){if(Ss!==A&&T(),$&&n&&p(w(C[2]===$?F+(U.startX-U.x):p()+$-C[1])),V){f.offset&&R();var st=Q[2]===V,dt=st?L+U.startY-U.y:f()+V-Q[1],At=x(dt);st&&dt!==At&&(L+=At-dt),f(At)}(V||$)&&hr()},t.onEnable=function(){df(c,n?!1:"x"),Wt.addEventListener("refresh",W),hn(le,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),S.enable()},t.onDisable=function(){df(c,!0),cn(le,"resize",W),Wt.removeEventListener("refresh",W),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new We(t),a.iOS=Br,Br&&!f()&&f(1),Br&&It.ticker.add(Hi),O=a._dc,I=It.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:rg(f,f(),function(){return I.pause()})},onUpdate:hr,onComplete:O.vars.onComplete}),a};Wt.sort=function(r){if(Cn(r))return oe.sort(r);var t=le.pageYOffset||0;return Wt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+le.innerHeight}),oe.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Wt.observe=function(r){return new We(r)};Wt.normalizeScroll=function(r){if(typeof r>"u")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var t=r instanceof We?r:ty(r);return Vn&&Vn.target===t.target&&Vn.kill(),Ms(t.target)&&(Vn=t),t};Wt.core={_getVelocityProp:Ul,_inputObserver:sg,_scrollers:se,_proxies:Ti,bridge:{ss:function(){yi||ws("scrollStart"),yi=An()},ref:function(){return En}}};Ym()&&It.registerPlugin(Wt);var Ma,ba,og=typeof Symbol=="function"?Symbol():"_split",Pf,ey=()=>Pf||ur.register(window.gsap),ag=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,wa=r=>r?typeof r=="string"?wa(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...wa(e)):t.push(e),t),[]):[r]:[],lg=r=>wa(r).filter(t=>t&&t.nodeType===1),If=[],Rf=function(){},ny={add:r=>r()},iy=/\s+/g,cg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),ec={left:0,top:0,width:0,height:0},ry=(r,t)=>{for(;++t<r.length&&r[t]===ec;);return r[t]||ec},hg=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},ug=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||If),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},fg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),co=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),Lf=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),u=e.length+1;return n&&(d.className=n+(l?" "+n+u:"")),o&&d.style.setProperty("--"+r,u+""),s!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},sy=(r,t,e,n)=>{let i=Lf("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},dg=(r,t,e,n,i,s,o,a,l,c)=>{var h;let d=Array.from(r.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:p=!0,prepareText:_}=t,m=r.getBoundingClientRect(),g=m,b=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",A=0,y=e.collection,S,M,w,x,T,R,D,I,F,L,O,W,U,$,V,C,Q,st;for(typeof f=="object"?(w=f.delimiter||f,M=f.replaceWith||""):M=f===""?"":f||" ",S=M!==" ";u<d.length;u++)if(x=d[u],x.nodeType===3){for(V=x.textContent||"",p?V=V.replace(iy," "):b&&(V=V.replace(/\n/g,M+`
`)),_&&(V=_(V,r)),x.textContent=V,T=M||w?V.split(w||M):V.match(a)||If,Q=T[T.length-1],I=S?Q.slice(-1)===" ":!Q,Q||T.pop(),g=m,D=S?T[0].charAt(0)===" ":!T[0],D&&co(" ",r,x),T[0]||T.shift(),ug(T,l),s&&c||(x.textContent=""),F=1;F<=T.length;F++)if(C=T[F-1],!p&&b&&C.charAt(0)===`
`&&((h=x.previousSibling)==null||h.remove(),co(document.createElement("br"),r,x),C=C.slice(1)),!p&&C==="")co(M,r,x);else if(C===" ")r.insertBefore(document.createTextNode(" "),x);else{if(S&&C.charAt(0)===" "&&co(" ",r,x),A&&F===1&&!D&&y.indexOf(A.parentNode)>-1?(R=y[y.length-1],R.appendChild(document.createTextNode(n?"":C))):(R=e(n?"":C),co(R,r,x),A&&F===1&&!D&&R.insertBefore(A,R.firstChild)),n)for(O=ag?ug([...ag.segment(C)].map(dt=>dt.segment),l):C.match(a)||If,st=0;st<O.length;st++)R.appendChild(O[st]===" "?document.createTextNode(" "):n(O[st]));if(s&&c){if(V=x.textContent=V.substring(C.length+1,V.length),L=R.getBoundingClientRect(),L.top>g.top&&L.left<=g.left){for(W=r.cloneNode(),U=r.childNodes[0];U&&U!==R;)$=U,U=U.nextSibling,W.appendChild($);r.parentNode.insertBefore(W,r),i&&fg(W)}g=L}(F<T.length||I)&&co(F>=T.length?" ":S&&C.slice(-1)===" "?" "+M:M,r,x)}r.removeChild(x),A=0}else x.nodeType===1&&(o&&o.indexOf(x)>-1?(y.indexOf(x.previousSibling)>-1&&y[y.length-1].appendChild(x),A=x):(dg(x,t,e,n,i,s,o,a,l,!0),A=0),i&&fg(x))},pg=class mg{constructor(t,e){this.isSplit=!1,ey(),this.elements=lg(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(o=>{var a;e.overwrite!==!1&&((a=o[og])==null||a._data.orig.filter(({element:l})=>l===o).forEach(hg)),o[og]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Rf(this),this.split(e)}split(t){return(this._ctx||ny).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+cg.source,"gu"):cg,m=!!t.ignore&&lg(t.ignore),{orig:g,animTime:b,obs:A}=this._data,y;(d||u||h)&&(this.elements.forEach((S,M)=>{g[M]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},n==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):n==="hidden"&&S.setAttribute("aria-hidden","true");let w=[],x=[],T=[],R=d?Lf("char",t,w):null,D=Lf("word",t,x),I,F,L,O;if(dg(S,t,D,R,f,i&&(h||f),m,_,p,!1),h){let W=wa(S.childNodes),U=sy(S,W,t,T),$,V=[],C=0,Q=W.map(At=>At.nodeType===1?At.getBoundingClientRect():ec),st=ec,dt;for(I=0;I<W.length;I++)$=W[I],$.nodeType===1&&($.nodeName==="BR"?((!I||W[I-1].nodeName!=="BR")&&(V.push($),U(C,I+1)),C=I+1,st=ry(Q,I)):(dt=Q[I],I&&dt.top>st.top&&dt.left<st.left+st.width-1&&(U(C,I),C=I),st=dt));C<I&&U(C,I),V.forEach(At=>{var Ct;return(Ct=At.parentNode)==null?void 0:Ct.removeChild(At)})}if(!u){for(I=0;I<x.length;I++)if(F=x[I],d||!F.nextSibling||F.nextSibling.nodeType!==3)if(s&&!h){for(L=document.createElement("span"),L.style.whiteSpace="nowrap";F.firstChild;)L.appendChild(F.firstChild);F.replaceWith(L)}else F.replaceWith(...F.childNodes);else O=F.nextSibling,O&&O.nodeType===3&&(O.textContent=(F.textContent||"")+(O.textContent||""),F.remove());x.length=0,S.normalize()}this.lines.push(...T),this.words.push(...x),this.chars.push(...w)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let M=S.cloneNode();return S.replaceWith(M),M.appendChild(S),S.className&&(M.className=S.className.trim().split(" ").map(w=>w+"-mask").join(" ")),M.style.overflow="clip",M}))),this.isSplit=!0,ba&&h&&a&&ba.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=b?y.totalTime(b):y),h&&a&&this.elements.forEach((S,M)=>{g[M].width=S.offsetWidth,A&&A.observe(S)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),ba?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(hg),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new mg(t,e)}static register(t){Ma=Ma||t||window.gsap,Ma&&(wa=Ma.utils.toArray,Rf=Ma.core.context||Rf),!Pf&&window.innerWidth>0&&(ba=document.fonts,Pf=!0)}};pg.version="3.15.0";var ur=pg;var Wi,Uf,oy,sc,Mg,bg,gg,Nf,wg,Tg=function(){return typeof window<"u"},Eg=function(){return Wi||Tg()&&(Wi=window.gsap)&&Wi.registerPlugin&&Wi},ay=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Df={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},Ts=function(t){return Math.round(t*1e4)/1e4},fr=function(t){return parseFloat(t)||0},_g=function(t,e){var n=fr(t);return~t.indexOf("%")?n/100*e:n},nc=function(t,e){return fr(t.getAttribute(e))},ic=Math.sqrt,xg=function(t,e,n,i,s,o){return ic(Math.pow((fr(n)-fr(t))*s,2)+Math.pow((fr(i)-fr(e))*o,2))},vg=function(t){return console.warn(t)},Ag=function(t){return t.getAttribute("vector-effect")==="non-scaling-stroke"},ly=1,cy=function(t,e,n){var i=t.indexOf(" "),s,o;return i<0?(s=n!==void 0?n+"":t,o=t):(s=t.substr(0,i),o=t.substr(i+1)),s=_g(s,e),o=_g(o,e),s>o?[o,s]:[s,o]},rc=function(t){if(t=Uf(t)[0],!t)return 0;var e=t.tagName.toLowerCase(),n=t.style,i=1,s=1,o,a,l,c,h,d,u;Ag(t)&&(s=t.getScreenCTM(),i=ic(s.a*s.a+s.b*s.b),s=ic(s.d*s.d+s.c*s.c));try{a=t.getBBox()}catch{vg("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var f=a||{x:0,y:0,width:0,height:0},p=f.x,_=f.y,m=f.width,g=f.height;if((!a||!m&&!g)&&Df[e]&&(m=nc(t,Df[e][0]),g=nc(t,Df[e][1]),e!=="rect"&&e!=="line"&&(m*=2,g*=2),e==="line"&&(p=nc(t,"x1"),_=nc(t,"y1"),m=Math.abs(m-p),g=Math.abs(g-_))),e==="path")c=n.strokeDasharray,n.strokeDasharray="none",o=t.getTotalLength()||0,Ts(i)!==Ts(s)&&!gg&&(gg=1)&&vg("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),o*=(i+s)/2,n.strokeDasharray=c;else if(e==="rect")o=m*2*i+g*2*s;else if(e==="line")o=xg(p,_,p+m,_+g,i,s);else if(e==="polyline"||e==="polygon")for(l=t.getAttribute("points").match(ay)||[],e==="polygon"&&l.push(l[0],l[1]),o=0,h=2;h<l.length;h+=2)o+=xg(l[h-2],l[h-1],l[h],l[h+1],i,s)||0;else(e==="circle"||e==="ellipse")&&(d=m/2*i,u=g/2*s,o=Math.PI*(3*(d+u)-ic((3*d+u)*(d+3*u))));return o||0},yg=function(t,e){if(t=Uf(t)[0],!t)return[0,0];e||(e=rc(t)+1);var n=sc.getComputedStyle(t),i=n.strokeDasharray||"",s=fr(n.strokeDashoffset),o=i.indexOf(",");return o<0&&(o=i.indexOf(" ")),i=o<0?e:fr(i.substr(0,o)),i>e&&(i=e),[-s||0,i-s||0]},Sg=function(){Tg()&&(oy=document,sc=window,bg=Wi=Eg(),Uf=Wi.utils.toArray,Nf=Wi.core.getStyleSaver,wg=Wi.core.reverting||function(){},Mg=((sc.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},Of={version:"3.15.0",name:"drawSVG",register:function(t){Wi=t,Sg()},init:function(t,e,n,i,s){if(!t.getBBox)return!1;bg||Sg();var o=rc(t),a,l,c;return this.styles=Nf&&Nf(t,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=n,this._style=t.style,this._target=t,e+""=="true"?e="0 100%":e?(e+"").indexOf(" ")===-1&&(e="0 "+e):e="0 0",a=yg(t,o),l=cy(e,o,a[0]),this._length=Ts(o),this._dash=Ts(a[1]-a[0]),this._offset=Ts(-a[0]),this._dashPT=this.add(this,"_dash",this._dash,Ts(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,Ts(-l[0]),0,0,0,0,0,1),Mg&&(c=sc.getComputedStyle(t),c.strokeLinecap!==c.strokeLinejoin&&(l=fr(c.strokeMiterlimit),this.add(t.style,"strokeMiterlimit",l,l+.01))),this._live=Ag(t)||~(e+"").indexOf("live"),this._nowrap=~(e+"").indexOf("nowrap"),this._props.push("drawSVG"),ly},render:function(t,e){if(e.tween._time||!wg()){var n=e._pt,i=e._style,s,o,a,l;if(n){for(e._live&&(s=rc(e._target),s!==e._length&&(o=s/e._length,e._length=s,e._offsetPT&&(e._offsetPT.s*=o,e._offsetPT.c*=o),e._dashPT?(e._dashPT.s*=o,e._dashPT.c*=o):e._dash*=o));n;)n.r(t,n.d),n=n._next;a=e._dash||t&&t!==1&&1e-4||0,s=e._length-a+.1,l=e._offset,a&&l&&a+Math.abs(l%e._length)>e._length-.05&&(l+=l<0?.005:-.005)&&(s+=.005),i.strokeDashoffset=a?l:l+.001,i.strokeDasharray=s<.1?"none":a?a+"px,"+(e._nowrap?999999:s)+"px":"0px, 999999px"}}else e.styles.revert()},getLength:rc,getPosition:yg};Eg()&&Wi.registerPlugin(Of);var Rn,Pg,dr,Xi,kr,Ig,ho,oc,Lg=function(){return typeof window<"u"},Dg=function(){return Rn||Lg()&&(Rn=window.gsap)&&Rn.registerPlugin&&Rn},Ng=function(t){return typeof t=="string"},Cg=function(t){return typeof t=="function"},Ta=function(t,e){var n=e==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return t===dr||t===Xi||t===kr?Math.max(Xi[i],kr[i])-(dr["inner"+n]||Xi[s]||kr[s]):t[i]-t["offset"+n]},Ea=function(t,e){var n="scroll"+(e==="x"?"Left":"Top");return t===dr&&(t.pageXOffset!=null?n="page"+e.toUpperCase()+"Offset":t=Xi[n]!=null?Xi:kr),function(){return t[n]}},hy=function(t,e,n,i){if(Cg(t)&&(t=t(e,n,i)),typeof t!="object")return Ng(t)&&t!=="max"&&t.charAt(1)!=="="?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var s={},o;for(o in t)s[o]=o!=="onAutoKill"&&Cg(t[o])?t[o](e,n,i):t[o];return s},Ug=function(t,e){if(t=Ig(t)[0],!t||!t.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=t.getBoundingClientRect(),i=!e||e===dr||e===kr,s=i?{top:Xi.clientTop-(dr.pageYOffset||Xi.scrollTop||kr.scrollTop||0),left:Xi.clientLeft-(dr.pageXOffset||Xi.scrollLeft||kr.scrollLeft||0)}:e.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&e&&(o.x+=Ea(e,"x")(),o.y+=Ea(e,"y")()),o},Rg=function(t,e,n,i,s){return!isNaN(t)&&typeof t!="object"?parseFloat(t)-s:Ng(t)&&t.charAt(1)==="="?parseFloat(t.substr(2))*(t.charAt(0)==="-"?-1:1)+i-s:t==="max"?Ta(e,n)-s:Math.min(Ta(e,n),Ug(t,e)[n]-s)},Ff=function(){Rn=Dg(),Lg()&&Rn&&typeof document<"u"&&document.body&&(dr=window,kr=document.body,Xi=document.documentElement,Ig=Rn.utils.toArray,Rn.config({autoKillThreshold:7}),ho=Rn.config(),Pg=1)},Es={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(t){Rn=t,Ff()},init:function(t,e,n,i,s){Pg||Ff();var o=this,a=Rn.getProperty(t,"scrollSnapType");o.isWin=t===dr,o.target=t,o.tween=n,e=hy(e,i,t,s),o.vars=e,o.autoKill=!!("autoKill"in e?e:ho).autoKill,o.getX=Ea(t,"x"),o.getY=Ea(t,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),oc||(oc=Rn.core.globals().ScrollTrigger),Rn.getProperty(t,"scrollBehavior")==="smooth"&&Rn.set(t,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=t.style.scrollSnapType,t.style.scrollSnapType="none"),e.x!=null?(o.add(o,"x",o.x,Rg(e.x,t,"x",o.x,e.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,e.y!=null?(o.add(o,"y",o.y,Rg(e.y,t,"y",o.y,e.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(t,e){for(var n=e._pt,i=e.target,s=e.tween,o=e.autoKill,a=e.xPrev,l=e.yPrev,c=e.isWin,h=e.snap,d=e.snapInline,u,f,p,_,m;n;)n.r(t,n.d),n=n._next;u=c||!e.skipX?e.getX():a,f=c||!e.skipY?e.getY():l,p=f-l,_=u-a,m=ho.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),o&&(!e.skipX&&(_>m||_<-m)&&u<Ta(i,"x")&&(e.skipX=1),!e.skipY&&(p>m||p<-m)&&f<Ta(i,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(s.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(s,e.vars.onAutoKillParams||[]))),c?dr.scrollTo(e.skipX?u:e.x,e.skipY?f:e.y):(e.skipY||(i.scrollTop=e.y),e.skipX||(i.scrollLeft=e.x)),h&&(t===1||t===0)&&(f=i.scrollTop,u=i.scrollLeft,d?i.style.scrollSnapType=d:i.style.removeProperty("scroll-snap-type"),i.scrollTop=f+1,i.scrollLeft=u+1,i.scrollTop=f,i.scrollLeft=u),e.xPrev=e.x,e.yPrev=e.y,oc&&oc.update()},kill:function(t){var e=t==="scrollTo",n=this._props.indexOf(t);return(e||t==="scrollTo_x")&&(this.skipX=1),(e||t==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Es.max=Ta;Es.getOffset=Ug;Es.buildGetter=Ea;Es.config=function(r){ho||Ff()||(ho=Rn.config());for(var t in r)ho[t]=r[t]};Dg()&&Rn.registerPlugin(Es);typeof window<"u"&&Et.registerPlugin(Wt,ur,Of,Es);var Be={motion:"(prefers-reduced-motion: no-preference)",reduce:"(prefers-reduced-motion: reduce)",desktop:"(min-width: 900px)",mobile:"(max-width: 899px)"},Aa={whole:"bottom 90%",text:"top 68%"},Og=r=>parseFloat(getComputedStyle(r).getPropertyValue("--ai-nav-h"))||0;var Fg="1.3.26";function zg(r,t,e){return Math.max(r,Math.min(t,e))}function uy(r,t,e){return(1-e)*r+e*t}function fy(r,t,e,n){return uy(r,t,1-Math.exp(-e*n))}function dy(r,t){return(r%t+t)%t}var py=class{constructor(){kt(this,"isRunning",!1);kt(this,"value",0);kt(this,"from",0);kt(this,"to",0);kt(this,"currentTime",0);kt(this,"lerp");kt(this,"duration");kt(this,"easing");kt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=zg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=fy(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function my(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var gy=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){kt(this,"width",0);kt(this,"height",0);kt(this,"scrollHeight",0);kt(this,"scrollWidth",0);kt(this,"debouncedResize");kt(this,"wrapperResizeObserver");kt(this,"contentResizeObserver");kt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});kt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});kt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=my(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Vg=class{constructor(){kt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},_y=100/6,zr={passive:!1};function Bg(r,t){return r===1?_y:r===2?t:1}var xy=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){kt(this,"touchStart",{x:0,y:0});kt(this,"lastDelta",{x:0,y:0});kt(this,"window",{width:0,height:0});kt(this,"emitter",new Vg);kt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});kt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});kt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});kt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Bg(n,this.window.width),s=Bg(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});kt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zr),this.element.addEventListener("touchstart",this.onTouchStart,zr),this.element.addEventListener("touchmove",this.onTouchMove,zr),this.element.addEventListener("touchend",this.onTouchEnd,zr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,zr),this.element.removeEventListener("touchstart",this.onTouchStart,zr),this.element.removeEventListener("touchmove",this.onTouchMove,zr),this.element.removeEventListener("touchend",this.onTouchEnd,zr)}},kg=r=>Math.min(1,1.001-2**(-10*r)),Hg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:b=!0,autoRaf:A=!1,anchors:y=!1,autoToggle:S=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:x=w,stopInertiaOnNavigate:T=!1,respectReducedMotion:R=!0}={}){kt(this,"_isScrolling",!1);kt(this,"_isStopped",!1);kt(this,"_isLocked",!1);kt(this,"_preventNextNativeScrollEvent",!1);kt(this,"_resetVelocityTimeout",null);kt(this,"_rafId",null);kt(this,"_isDraggingSelection",!1);kt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));kt(this,"isTouching");kt(this,"isIos");kt(this,"time",0);kt(this,"userData",{});kt(this,"lastVelocity",0);kt(this,"velocity",0);kt(this,"direction",0);kt(this,"options");kt(this,"targetScroll");kt(this,"animatedScroll");kt(this,"animate",new py);kt(this,"emitter",new Vg);kt(this,"dimensions");kt(this,"virtualScroll");kt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});kt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});kt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});kt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});kt(this,"onPointerDown",r=>{r.button===1&&this.reset()});kt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});kt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});kt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Fg,window.lenis||(window.lenis={}),window.lenis.version=Fg,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=kg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:b,autoRaf:A,anchors:y,autoToggle:S,allowNestedScroll:M,naiveDimensions:x,stopInertiaOnNavigate:T,respectReducedMotion:R},this.dimensions=new gy(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new xy(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(p=u),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),b=getComputedStyle(this.rootElement),A=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(A)?0:A)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=zg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=kg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,p;if(n-(i.time??0)>2e3){i.time=Date.now();let M=window.getComputedStyle(r);if(i.computedStyle=M,s=["auto","overlay","scroll"].includes(M.overflowX),o=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),h=["auto"].includes(M.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,b,A,y,S;if(_==="horizontal")m=Math.round(r.scrollLeft),g=d-f,b=t,A=s,y=a,S=c;else if(_==="vertical")m=Math.round(r.scrollTop),g=u-p,b=e,A=o,y=l,S=h;else return!1;return!S&&(m>=g||m<=0)?!0:(b>0?m<g:m>0)&&A&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?dy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function Gg({offset:r=72}={}){if(window.matchMedia(Be.reduce).matches)return()=>{};let t=new Hg({autoRaf:!1,anchors:{offset:-r}});t.on("scroll",Wt.update);let e=n=>t.raf(n*1e3);return Et.ticker.add(e),Et.ticker.lagSmoothing(0),()=>{Et.ticker.remove(e),Et.ticker.lagSmoothing(500,33),t.destroy()}}var g_=0,fd=1,__=2;var ja=1,x_=2,No=3,es=0,Xn=1,Ki=2,Qi=0,Uo=1,Sr=2,dd=3,pd=4,v_=5;var Ns=100,y_=101,S_=102,M_=103,b_=104,w_=200,T_=201,E_=202,A_=203,md=204,gd=205,C_=206,R_=207,P_=208,I_=209,L_=210,D_=211,N_=212,U_=213,O_=214,Lc=0,Dc=1,Nc=2,Ao=3,Uc=4,Oc=5,Fc=6,Bc=7,_d=0,F_=1,B_=2,Li=0,xd=1,vd=2,yd=3,Sd=4,Md=5,bd=6,wd=7;var Td=300,ns=301,Us=302,ph=303,mh=304,tl=306,kc=1e3,Yi=1001,zc=1002,dn=1003,k_=1004;var el=1005;var vn=1006,gh=1007;var is=1008;var fi=1009,Ed=1010,Ad=1011,Oo=1012,_h=1013,Di=1014,Ni=1015,Ui=1016,xh=1017,vh=1018,Fo=1020,Cd=35902,Rd=35899,Pd=1021,Id=1022,bi=1023,Zi=1026,rs=1027,Ld=1028,yh=1029,ss=1030,Sh=1031;var Mh=1033,nl=33776,il=33777,rl=33778,sl=33779,bh=35840,wh=35841,Th=35842,Eh=35843,Ah=36196,Ch=37492,Rh=37496,Ph=37488,Ih=37489,ol=37490,Lh=37491,Dh=37808,Nh=37809,Uh=37810,Oh=37811,Fh=37812,Bh=37813,kh=37814,zh=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,Xh=37820,qh=37821,Yh=36492,Zh=36494,Jh=36495,$h=36283,Kh=36284,al=36285,Qh=36286;var Ua=2300,Vc=2301,Pc=2302,sd=2303,od=2400,ad=2401,ld=2402;var z_=3200;var Dd=0,V_=1,Mr="",hi="srgb",Oa="srgb-linear",Fa="linear",ve="srgb";var Ic=7680;var H_=519,G_=512,W_=513,X_=514,jh=515,q_=516,Y_=517,tu=518,Z_=519,J_=35044;var Nd="300 es",Pi=2e3,Ba=2001;function vy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ka(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $_(){let r=ka("canvas");return r.style.display="block",r}var Wg={},Co=null;function Ud(...r){let t="THREE."+r.shift();Co?Co("log",t,...r):console.log(t,...r)}function K_(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Yt(...r){r=K_(r);let t="THREE."+r.shift();if(Co)Co("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function $t(...r){r=K_(r);let t="THREE."+r.shift();if(Co)Co("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Is(...r){let t=r.join(" ");t in Wg||(Wg[t]=!0,Yt(...r))}function Q_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var j_={[Lc]:Dc,[Nc]:Fc,[Uc]:Bc,[Ao]:Oc,[Dc]:Lc,[Fc]:Nc,[Bc]:Uc,[Oc]:Ao},Ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xg=1234567,Da=Math.PI/180,Ro=180/Math.PI;function Bo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function ue(r,t,e){return Math.max(t,Math.min(e,r))}function Od(r,t){return(r%t+t)%t}function Sy(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function My(r,t,e){return r!==t?(e-r)/(t-r):0}function Na(r,t,e){return(1-e)*r+e*t}function by(r,t,e,n){return Na(r,t,1-Math.exp(-e*n))}function wy(r,t=1){return t-Math.abs(Od(r,t*2)-t)}function Ty(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Ey(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Ay(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Cy(r,t){return r+Math.random()*(t-r)}function Ry(r){return r*(.5-Math.random())}function Py(r){r!==void 0&&(Xg=r);let t=Xg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Iy(r){return r*Da}function Ly(r){return r*Ro}function Dy(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Ny(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Uy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Oy(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function To(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fd={DEG2RAD:Da,RAD2DEG:Ro,generateUUID:Bo,clamp:ue,euclideanModulo:Od,mapLinear:Sy,inverseLerp:My,lerp:Na,damp:by,pingpong:wy,smoothstep:Ty,smootherstep:Ey,randInt:Ay,randFloat:Cy,randFloatSpread:Ry,seededRandom:Py,degToRad:Iy,radToDeg:Ly,isPowerOfTwo:Dy,ceilPowerOfTwo:Ny,floorPowerOfTwo:Uy,setQuaternionFromProperEuler:Oy,normalize:Wn,denormalize:To},Hd=class Hd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hd.prototype.isVector2=!0;var pe=Hd,$i=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);g=Math.sin(g*b)/A,a=Math.sin(a*b)/A,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gd=class Gd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bf.copy(this).projectOnVector(t),this.sub(Bf)}reflect(t){return this.sub(Bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gd.prototype.isVector3=!0;var Y=Gd,Bf=new Y,qg=new $i,Wd=class Wd{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],b=i[1],A=i[4],y=i[7],S=i[2],M=i[5],w=i[8];return s[0]=o*_+a*b+l*S,s[3]=o*m+a*A+l*M,s[6]=o*g+a*y+l*w,s[1]=c*_+h*b+d*S,s[4]=c*m+h*A+d*M,s[7]=c*g+h*y+d*w,s[2]=u*_+f*b+p*S,s[5]=u*m+f*A+p*M,s[8]=u*g+f*y+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kf.makeScale(t,e)),this}rotate(t){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kf.makeRotation(-t)),this}translate(t,e){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wd.prototype.isMatrix3=!0;var Qt=Wd,kf=new Qt,Yg=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zg=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fy(){let r={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ve&&(i.r=vr(i.r),i.g=vr(i.g),i.b=vr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(i.r=Eo(i.r),i.g=Eo(i.g),i.b=Eo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mr?Fa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Oa]:{primaries:t,whitePoint:n,transfer:Fa,toXYZ:Yg,fromXYZ:Zg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Yg,fromXYZ:Zg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}var he=Fy();function vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var uo,Hc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{uo===void 0&&(uo=ka("canvas")),uo.width=t.width,uo.height=t.height;let i=uo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=uo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ka("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=vr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vr(e[n]/255)*255):e[n]=vr(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},By=0,Po=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(zf(i[o].image)):s.push(zf(i[o]))}else s=zf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function zf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var ky=0,Vf=new Y,Kn=class r extends Ji{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Yi,i=Yi,s=vn,o=is,a=bi,l=fi,c=r.DEFAULT_ANISOTROPY,h=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Bo(),this.name="",this.source=new Po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vf).x}get height(){return this.source.getSize(Vf).y}get depth(){return this.source.getSize(Vf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kc:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kc:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Td;Kn.DEFAULT_ANISOTROPY=1;var Xd=class Xd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,S=(g+1)/2,M=(h+u)/4,w=(d+_)/4,x=(p+m)/4;return A>y&&A>S?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=M/n,s=w/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=M/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=w/s,i=x/s),this.set(n,i,s,e),this}let b=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xd.prototype.isVector4=!0;var ze=Xd,Gc=class extends Ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Kn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Po(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Gc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},za=class extends Kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wc=class extends Kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dh=class dh{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/fo.setFromMatrixColumn(t,0).length(),s=1/fo.setFromMatrixColumn(t,1).length(),o=1/fo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zy,t,Vy)}lookAt(t,e,n){let i=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),Vr.crossVectors(n,li),Vr.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Vr.crossVectors(n,li)),Vr.normalize(),ac.crossVectors(li,Vr),i[0]=Vr.x,i[4]=ac.x,i[8]=li.x,i[1]=Vr.y,i[5]=ac.y,i[9]=li.y,i[2]=Vr.z,i[6]=ac.z,i[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],b=n[3],A=n[7],y=n[11],S=n[15],M=i[0],w=i[4],x=i[8],T=i[12],R=i[1],D=i[5],I=i[9],F=i[13],L=i[2],O=i[6],W=i[10],U=i[14],$=i[3],V=i[7],C=i[11],Q=i[15];return s[0]=o*M+a*R+l*L+c*$,s[4]=o*w+a*D+l*O+c*V,s[8]=o*x+a*I+l*W+c*C,s[12]=o*T+a*F+l*U+c*Q,s[1]=h*M+d*R+u*L+f*$,s[5]=h*w+d*D+u*O+f*V,s[9]=h*x+d*I+u*W+f*C,s[13]=h*T+d*F+u*U+f*Q,s[2]=p*M+_*R+m*L+g*$,s[6]=p*w+_*D+m*O+g*V,s[10]=p*x+_*I+m*W+g*C,s[14]=p*T+_*F+m*U+g*Q,s[3]=b*M+A*R+y*L+S*$,s[7]=b*w+A*D+y*O+S*V,s[11]=b*x+A*I+y*W+S*C,s[15]=b*T+A*F+y*U+S*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],b=l*f-c*u,A=a*f-c*d,y=a*u-l*d,S=o*f-c*h,M=o*u-l*h,w=o*d-a*h;return e*(_*b-m*A+g*y)-n*(p*b-m*S+g*M)+i*(p*A-_*S+g*w)-s*(p*y-_*M+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],b=e*a-n*o,A=e*l-i*o,y=e*c-s*o,S=n*l-i*a,M=n*c-s*a,w=i*c-s*l,x=h*_-d*p,T=h*m-u*p,R=h*g-f*p,D=d*m-u*_,I=d*g-f*_,F=u*g-f*m,L=b*F-A*I+y*D+S*R-M*T+w*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(a*F-l*I+c*D)*O,t[1]=(i*I-n*F-s*D)*O,t[2]=(_*w-m*M+g*S)*O,t[3]=(u*M-d*w-f*S)*O,t[4]=(l*R-o*F-c*T)*O,t[5]=(e*F-i*R+s*T)*O,t[6]=(m*y-p*w-g*A)*O,t[7]=(h*w-u*y+f*A)*O,t[8]=(o*I-a*R+c*x)*O,t[9]=(n*R-e*I-s*x)*O,t[10]=(p*M-_*y+g*b)*O,t[11]=(d*y-h*M-f*b)*O,t[12]=(a*T-o*D-l*x)*O,t[13]=(e*D-n*T+i*x)*O,t[14]=(_*A-p*S-m*b)*O,t[15]=(h*S-d*A+u*b)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,_=o*h,m=o*d,g=a*d,b=l*c,A=l*h,y=l*d,S=n.x,M=n.y,w=n.z;return i[0]=(1-(_+g))*S,i[1]=(f+y)*S,i[2]=(p-A)*S,i[3]=0,i[4]=(f-y)*M,i[5]=(1-(u+g))*M,i[6]=(m+b)*M,i[7]=0,i[8]=(p+A)*w,i[9]=(m-b)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=fo.set(i[0],i[1],i[2]).length(),a=fo.set(i[4],i[5],i[6]).length(),l=fo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ei.copy(this);let c=1/o,h=1/a,d=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,e.setFromRotationMatrix(Ei),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Pi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Pi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ba)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Pi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ba)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};dh.prototype.isMatrix4=!0;var ke=dh,fo=new Y,Ei=new ke,zy=new Y(0,0,0),Vy=new Y(1,1,1),Vr=new Y,ac=new Y,li=new Y,Jg=new ke,$g=new $i,Yr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $g.setFromEuler(this),this.setFromQuaternion($g,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yr.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hy=0,Kg=new Y,po=new $i,pr=new ke,lc=new Y,Ca=new Y,Gy=new Y,Wy=new $i,Qg=new Y(1,0,0),jg=new Y(0,1,0),t_=new Y(0,0,1),e_={type:"added"},Xy={type:"removed"},mo={type:"childadded",child:null},Hf={type:"childremoved",child:null},jn=class r extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Y,e=new Yr,n=new $i,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Qt}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return po.setFromAxisAngle(t,e),this.quaternion.multiply(po),this}rotateOnWorldAxis(t,e){return po.setFromAxisAngle(t,e),this.quaternion.premultiply(po),this}rotateX(t){return this.rotateOnAxis(Qg,t)}rotateY(t){return this.rotateOnAxis(jg,t)}rotateZ(t){return this.rotateOnAxis(t_,t)}translateOnAxis(t,e){return Kg.copy(t).applyQuaternion(this.quaternion),this.position.add(Kg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qg,t)}translateY(t){return this.translateOnAxis(jg,t)}translateZ(t){return this.translateOnAxis(t_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lc.copy(t):lc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Ca,lc,this.up):pr.lookAt(lc,Ca,this.up),this.quaternion.setFromRotationMatrix(pr),i&&(pr.extractRotation(i.matrixWorld),po.setFromRotationMatrix(pr),this.quaternion.premultiply(po.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(e_),mo.child=t,this.dispatchEvent(mo),mo.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xy),Hf.child=t,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pr.multiply(t.parent.matrixWorld)),t.applyMatrix4(pr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(e_),mo.child=t,this.dispatchEvent(mo),mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,t,Gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,Wy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jn.DEFAULT_UP=new Y(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ii=class extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qy={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},t0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},cc={h:0,s:0,l:0};function Gf(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Od(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Gf(o,s,t+1/3),this.g=Gf(o,s,t),this.b=Gf(o,s,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=hi){function n(s){s!==void 0&&parseFloat(s)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hi){let n=t0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return he.workingToColorSpace(In.copy(this),t),Math.round(ue(In.r*255,0,255))*65536+Math.round(ue(In.g*255,0,255))*256+Math.round(ue(In.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(In.copy(this),e);let n=In.r,i=In.g,s=In.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=hi){he.workingToColorSpace(In.copy(this),t);let e=In.r,n=In.g,i=In.b;return t!==hi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hr),this.setHSL(Hr.h+t,Hr.s+e,Hr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hr),t.getHSL(cc);let n=Na(Hr.h,cc.h,e),i=Na(Hr.s,cc.s,e),s=Na(Hr.l,cc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new ne;ne.NAMES=t0;var Ls=class extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yr,this.environmentIntensity=1,this.environmentRotation=new Yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new Y,mr=new Y,Wf=new Y,gr=new Y,go=new Y,_o=new Y,n_=new Y,Xf=new Y,qf=new Y,Yf=new Y,Zf=new ze,Jf=new ze,$f=new ze,qr=class r{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ai.subVectors(t,e),i.cross(Ai);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ai.subVectors(i,e),mr.subVectors(n,e),Wf.subVectors(t,e);let o=Ai.dot(Ai),a=Ai.dot(mr),l=Ai.dot(Wf),c=mr.dot(mr),h=mr.dot(Wf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Zf.setScalar(0),Jf.setScalar(0),$f.setScalar(0),Zf.fromBufferAttribute(t,e),Jf.fromBufferAttribute(t,n),$f.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Zf,s.x),o.addScaledVector(Jf,s.y),o.addScaledVector($f,s.z),o}static isFrontFacing(t,e,n,i){return Ai.subVectors(n,e),mr.subVectors(t,e),Ai.cross(mr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Ai.cross(mr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;go.subVectors(i,n),_o.subVectors(s,n),Xf.subVectors(t,n);let l=go.dot(Xf),c=_o.dot(Xf);if(l<=0&&c<=0)return e.copy(n);qf.subVectors(t,i);let h=go.dot(qf),d=_o.dot(qf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(go,o);Yf.subVectors(t,s);let f=go.dot(Yf),p=_o.dot(Yf);if(p>=0&&f<=p)return e.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(_o,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return n_.subVectors(s,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(n_,a);let g=1/(m+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(go,o).addScaledVector(_o,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zr=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ci):Ci.fromBufferAttribute(s,o),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ra),uc.subVectors(this.max,Ra),xo.subVectors(t.a,Ra),vo.subVectors(t.b,Ra),yo.subVectors(t.c,Ra),Gr.subVectors(vo,xo),Wr.subVectors(yo,vo),As.subVectors(xo,yo);let e=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-As.z,As.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,As.z,0,-As.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-As.y,As.x,0];return!Kf(e,xo,vo,yo,uc)||(e=[1,0,0,0,1,0,0,0,1],!Kf(e,xo,vo,yo,uc))?!1:(fc.crossVectors(Gr,Wr),e=[fc.x,fc.y,fc.z],Kf(e,xo,vo,yo,uc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_r),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_r=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ci=new Y,hc=new Zr,xo=new Y,vo=new Y,yo=new Y,Gr=new Y,Wr=new Y,As=new Y,Ra=new Y,uc=new Y,fc=new Y,Cs=new Y;function Kf(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Cs.fromArray(r,s);let a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new Y,dc=new pe,Yy=0,ye=class extends Ji{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=J_,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dc.fromBufferAttribute(this,e),dc.applyMatrix3(t),this.setXY(e,dc.x,dc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=To(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=To(e,this.array)),e}setX(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=To(e,this.array)),e}setY(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=To(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=To(e,this.array)),e}setW(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),n=Wn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),n=Wn(n,this.array),i=Wn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),n=Wn(n,this.array),i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ha=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ga=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xn=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zy=new Zr,Pa=new Y,Qf=new Y,Jr=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zy.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pa.subVectors(t,this.center);let e=Pa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Pa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pa.copy(t.center).add(Qf)),this.expandByPoint(Pa.copy(t.center).sub(Qf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jy=0,Si=new ke,jf=new jn,So=new Y,ci=new Zr,Ia=new Zr,un=new Y,pn=class r extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vy(t)?Ga:Ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,n){return Si.makeTranslation(t,e,n),this.applyMatrix4(Si),this}scale(t,e,n){return Si.makeScale(t,e,n),this.applyMatrix4(Si),this}lookAt(t){return jf.lookAt(t),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ia.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ci.min,Ia.min),ci.expandByPoint(un),un.addVectors(ci.max,Ia.max),ci.expandByPoint(un)):(ci.expandByPoint(Ia.min),ci.expandByPoint(Ia.max))}ci.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)un.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(un));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(So.fromBufferAttribute(t,c),un.add(So)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new Y,l[x]=new Y;let c=new Y,h=new Y,d=new Y,u=new pe,f=new pe,p=new pe,_=new Y,m=new Y;function g(x,T,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[x].add(_),a[T].add(_),a[R].add(_),l[x].add(m),l[T].add(m),l[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,T=b.length;x<T;++x){let R=b[x],D=R.start,I=R.count;for(let F=D,L=D+I;F<L;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let A=new Y,y=new Y,S=new Y,M=new Y;function w(x){S.fromBufferAttribute(i,x),M.copy(S);let T=a[x];A.copy(T),A.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(M,T);let D=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,T=b.length;x<T;++x){let R=b[x],D=R.start,I=R.count;for(let F=D,L=D+I;F<L;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,d=new Y;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new ye(u,h,d)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var td=new Y,$y=new Y,Ky=new Qt,Ri=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=td.subVectors(n,e).cross($y.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(td),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ky.getNormalMatrix(t),i=this.coplanarPoint(td).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qy=0,yr=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Uo,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ic,this.stencilZFail=Ic,this.stencilZPass=Ic,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xr=new Y,ed=new Y,pc=new Y,mc=new Y,Lo=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xr.copy(this.origin).addScaledVector(this.direction,e),xr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ed.copy(t).add(e).multiplyScalar(.5),pc.copy(e).sub(t).normalize(),mc.copy(this.origin).sub(ed);let s=t.distanceTo(e)*.5,o=-this.direction.dot(pc),a=mc.dot(this.direction),l=-mc.dot(pc),c=mc.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ed).addScaledVector(pc,u),f}intersectSphere(t,e){if(t.radius<0)return null;xr.subVectors(t.center,this.origin);let n=xr.dot(this.direction),i=xr.dot(xr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,b=n.y-o.y,A=n.z-o.z,y=Math.abs(l),S=Math.abs(c),M=Math.abs(h),w,x,T,R,D,I,F,L,O,W,U,$;if(y>=S&&y>=M?(T=l,I=d,O=p,$=g,l>=0?(w=c,x=h,R=u,D=f,F=_,L=m,W=b,U=A):(w=h,x=c,R=f,D=u,F=m,L=_,W=A,U=b)):S>=M?(T=c,I=u,O=_,$=b,c>=0?(w=h,x=l,R=f,D=d,F=m,L=p,W=A,U=g):(w=l,x=h,R=d,D=f,F=p,L=m,W=g,U=A)):(T=h,I=f,O=m,$=A,h>=0?(w=l,x=c,R=d,D=u,F=p,L=_,W=g,U=b):(w=c,x=l,R=u,D=d,F=_,L=p,W=b,U=g)),T===0)return null;let V=w/T,C=x/T,Q=1/T,st=R-V*I,dt=D-C*I,At=F-V*O,Ct=L-C*O,Nt=W-V*$,Z=U-C*$,K=Nt*Ct-Z*At,ft=st*Z-dt*Nt,Ut=At*dt-Ct*st;if(i){if(K<0||ft<0||Ut<0)return null}else if((K<0||ft<0||Ut<0)&&(K>0||ft>0||Ut>0))return null;let ut=K+ft+Ut;if(ut===0)return null;let Ot=Q*(K*I+ft*O+Ut*$);return(ut>0?Ot<0:Ot>0)?null:this.at(Ot/ut,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wa=class extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},i_=new ke,Rs=new Lo,gc=new Jr,r_=new Y,_c=new Y,xc=new Y,vc=new Y,nd=new Y,yc=new Y,s_=new Y,Sc=new Y,Mi=class extends jn{constructor(t=new pn,e=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){yc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(nd.fromBufferAttribute(d,t),o?yc.addScaledVector(nd,h):yc.addScaledVector(nd.sub(e),h))}e.add(yc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(s),Rs.copy(t.ray).recast(t.near),!(gc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(gc,r_)===null||Rs.origin.distanceToSquared(r_)>(t.far-t.near)**2))&&(i_.copy(s).invert(),Rs.copy(t.ray).applyMatrix4(i_),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,S=A;y<S;y+=3){let M=a.getX(y),w=a.getX(y+1),x=a.getX(y+2);i=Mc(this,g,t,n,c,h,d,M,w,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let b=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);i=Mc(this,o,t,n,c,h,d,b,A,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,S=A;y<S;y+=3){let M=y,w=y+1,x=y+2;i=Mc(this,g,t,n,c,h,d,M,w,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let b=m,A=m+1,y=m+2;i=Mc(this,o,t,n,c,h,d,b,A,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function jy(r,t,e,n,i,s,o,a){let l;if(t.side===Xn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===es,a),l===null)return null;Sc.copy(a),Sc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Sc);return c<e.near||c>e.far?null:{distance:c,point:Sc.clone(),object:r}}function Mc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,_c),r.getVertexPosition(l,xc),r.getVertexPosition(c,vc);let h=jy(r,t,e,n,_c,xc,vc,s_);if(h){let d=new Y;qr.getBarycoord(s_,_c,xc,vc,d),i&&(h.uv=qr.getInterpolatedAttribute(i,a,l,c,d,new pe)),s&&(h.uv1=qr.getInterpolatedAttribute(s,a,l,c,d,new pe)),o&&(h.normal=qr.getInterpolatedAttribute(o,a,l,c,d,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Y,materialIndex:0};qr.getNormal(_c,xc,vc,u.normal),h.face=u,h.barycoord=d}return h}var Xc=class extends Kn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=dn,h=dn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ps=new Jr,tS=new pe(.5,.5),bc=new Y,Xa=class{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,s=new Ri,o=new Ri){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],b=s[12],A=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-o,f-h,g-p,S-b).normalize(),i[1].setComponents(c+o,f+h,g+p,S+b).normalize(),i[2].setComponents(c+a,f+d,g+_,S+A).normalize(),i[3].setComponents(c-a,f-d,g-_,S-A).normalize(),n)i[4].setComponents(l,u,m,y).normalize(),i[5].setComponents(c-l,f-u,g-m,S-y).normalize();else if(i[4].setComponents(c-l,f-u,g-m,S-y).normalize(),e===Pi)i[5].setComponents(c+l,f+u,g+m,S+y).normalize();else if(e===Ba)i[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);let e=tS.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(bc.x=i.normal.x>0?t.max.x:t.min.x,bc.y=i.normal.y>0?t.max.y:t.min.y,bc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qc=class extends yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yc=new Y,Zc=new Y,o_=new ke,La=new Lo,wc=new Jr,id=new Y,a_=new Y,Jc=class extends jn{constructor(t=new pn,e=new qc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Yc.fromBufferAttribute(e,i-1),Zc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Yc.distanceTo(Zc);t.setAttribute("lineDistance",new xn(n,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(i),wc.radius+=s,t.ray.intersectsSphere(wc)===!1)return;o_.copy(i).invert(),La.copy(t.ray).applyMatrix4(o_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=h.getX(_),b=h.getX(_+1),A=Tc(this,t,La,l,g,b,_);A&&e.push(A)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(f),g=Tc(this,t,La,l,_,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=Tc(this,t,La,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=Tc(this,t,La,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Tc(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(Yc.fromBufferAttribute(a,i),Zc.fromBufferAttribute(a,s),e.distanceSqToSegment(Yc,Zc,id,a_)>n)return;id.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(id);if(!(c<t.near||c>t.far))return{distance:c,point:a_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var l_=new Y,c_=new Y,qa=class extends Jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)l_.fromBufferAttribute(e,i),c_.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+l_.distanceTo(c_);t.setAttribute("lineDistance",new xn(n,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $c=class extends yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},h_=new ke,cd=new Lo,Ec=new Jr,Ac=new Y,$r=class extends jn{constructor(t=new pn,e=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(i),Ec.radius+=s,t.ray.intersectsSphere(Ec)===!1)return;h_.copy(i).invert(),cd.copy(t.ray).applyMatrix4(h_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let m=c.getX(p);Ac.fromBufferAttribute(d,m),u_(Ac,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)Ac.fromBufferAttribute(d,p),u_(Ac,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function u_(r,t,e,n,i,s,o){let a=cd.distanceSqToPoint(r);if(a<e){let l=new Y;cd.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ya=class extends Kn{constructor(t=[],e=ns,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Kr=class extends Kn{constructor(t,e,n=Di,i,s,o,a=dn,l=dn,c,h=Zi,d=1){if(h!==Zi&&h!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Po(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Kc=class extends Kr{constructor(t,e=Di,n=ns,i,s,o=dn,a=dn,l,c=Zi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Za=class extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Do=class r extends pn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(d,2));function p(_,m,g,b,A,y,S,M,w,x,T){let R=y/w,D=S/x,I=y/2,F=S/2,L=M/2,O=w+1,W=x+1,U=0,$=0,V=new Y;for(let C=0;C<W;C++){let Q=C*D-F;for(let st=0;st<O;st++){let dt=st*R-I;V[_]=dt*b,V[m]=Q*A,V[g]=L,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[g]=M>0?1:-1,h.push(V.x,V.y,V.z),d.push(st/w),d.push(1-C/x),U+=1}}for(let C=0;C<x;C++)for(let Q=0;Q<w;Q++){let st=u+Q+O*C,dt=u+Q+O*(C+1),At=u+(Q+1)+O*(C+1),Ct=u+(Q+1)+O*C;l.push(st,dt,Ct),l.push(dt,At,Ct),$+=6}a.addGroup(f,$,T),f+=$,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ja=class r extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let b=g*u-o;for(let A=0;A<c;A++){let y=A*d-s;p.push(y,-b,0),_.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let A=b+c*g,y=b+c*(g+1),S=b+1+c*(g+1),M=b+1+c*g;f.push(A,y,M),f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Os(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(f_(i))i.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(f_(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ln(r){let t={};for(let e=0;e<r.length;e++){let n=Os(r[e]);for(let i in n)t[i]=n[i]}return t}function f_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function eS(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Bd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var e0={clone:Os,merge:Ln},nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=eS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(i.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qc=class extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var jc=class extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},th=class extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function rd(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Qr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},eh=class extends Qr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:od,endingEnd:od}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ad:s=t,a=2*e-n;break;case ld:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ad:o=t,l=2*n-e;break;case ld:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,A=(-1-f)*m+(1.5+f)*_+.5*p,y=f*m-f*_;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+b*o[c+S]+A*o[l+S]+y*o[d+S];return s}},nh=class extends Qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},ih=class extends Qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},rh=class extends Qr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*u+p*2,b=d[g],A=d[g+1],y=t*u+p*2,S=h[y],M=h[y+1],w=sS(n,e,b,S,i);s[p]=n0(w,_,A,M,m)}return s}};function n0(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function rS(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function sS(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=n0(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=rS(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mo(e,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mo(t.times,Array),values:Mo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),rd(t.settings)&&(n.settings={inTangents:Mo(t.settings.inTangents,Array),outTangents:Mo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ua:e=this.InterpolantFactoryMethodDiscrete;break;case Vc:e=this.InterpolantFactoryMethodLinear;break;case Pc:e=this.InterpolantFactoryMethodSmooth;break;case sd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Vc;case this.InterpolantFactoryMethodSmooth:return Pc;case this.InterpolantFactoryMethodBezier:return sd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;rd(this.settings)&&(d_(this.settings.inTangents,t),d_(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&yy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,rd(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function d_(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Vc;var jr=class extends ui{constructor(t,e,n){super(t,e,n)}};jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=Ua;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};sh.prototype.ValueTypeName="color";var oh=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};oh.prototype.ValueTypeName="number";var ah=class extends Qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)$i.slerpFlat(s,0,o,c-a,o,c,l);return s}},$a=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ah(this.times,this.values,this.getValueSize(),t)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends ui{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ua;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var lh=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};lh.prototype.ValueTypeName="vector";var ch=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},i0=new ch,hh=class{constructor(t){this.manager=t!==void 0?t:i0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cc=new Y,Rc=new $i,qi=new Y,Ka=class extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cc,Rc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Rc,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Cc,Rc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Rc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xr=new Y,p_=new pe,m_=new pe,fn=class extends Ka{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xr.x,Xr.y).multiplyScalar(-t/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-t/Xr.z)}getViewSize(t,e){return this.getViewBounds(t,p_,m_),e.subVectors(m_,p_)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Da*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qa=class extends Ka{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var bo=-90,wo=1,uh=class extends jn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new fn(bo,wo,t,e);i.layers=this.layers,this.add(i);let s=new fn(bo,wo,t,e);s.layers=this.layers,this.add(s);let o=new fn(bo,wo,t,e);o.layers=this.layers,this.add(o);let a=new fn(bo,wo,t,e);a.layers=this.layers,this.add(a);let l=new fn(bo,wo,t,e);l.layers=this.layers,this.add(l);let c=new fn(bo,wo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fh=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ds=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=oS.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function oS(){this._document.hidden===!1&&this.reset()}var kd="\\[\\]\\.:\\/",aS=new RegExp("["+kd+"]","g"),zd="[^"+kd+"]",lS="[^"+kd.replace("\\.","")+"]",cS=/((?:WC+[\/:])*)/.source.replace("WC",zd),hS=/(WCOD+)?/.source.replace("WCOD",lS),uS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zd),fS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zd),dS=new RegExp("^"+cS+hS+uS+fS+"$"),pS=["material","materials","bones","map"],hd=class{constructor(t,e,n){let i=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(aS,"")}static parseTrackName(t){let e=dS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);pS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=hd;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lE=new Float32Array(1);var qd=class qd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};qd.prototype.isMatrix2=!0;var ud=qd;function Vd(r,t,e,n){let i=mS(n);switch(e){case Pd:return r*t;case Ld:return r*t/i.components*i.byteLength;case yh:return r*t/i.components*i.byteLength;case ss:return r*t*2/i.components*i.byteLength;case Sh:return r*t*2/i.components*i.byteLength;case Id:return r*t*3/i.components*i.byteLength;case bi:return r*t*4/i.components*i.byteLength;case Mh:return r*t*4/i.components*i.byteLength;case nl:case il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wh:case Eh:return Math.max(r,16)*Math.max(t,8)/4;case bh:case Th:return Math.max(r,8)*Math.max(t,8)/2;case Ah:case Ch:case Ph:case Ih:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rh:case ol:case Lh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case kh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Yh:case Zh:case Jh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case $h:case Kh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case al:case Qh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mS(r){switch(r){case fi:case Ed:return{byteLength:1,components:1};case Oo:case Ad:case Ui:return{byteLength:2,components:1};case xh:case vh:return{byteLength:2,components:4};case Di:case _h:case Ni:return{byteLength:4,components:1};case Cd:case Rd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function T0(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function _S(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var xS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ES=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,VS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZS="gl_FragColor = linearToOutputTexel( gl_FragColor );",JS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,db=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:xS,alphahash_pars_fragment:vS,alphamap_fragment:yS,alphamap_pars_fragment:SS,alphatest_fragment:MS,alphatest_pars_fragment:bS,aomap_fragment:wS,aomap_pars_fragment:TS,batching_pars_vertex:ES,batching_vertex:AS,begin_vertex:CS,beginnormal_vertex:RS,bsdfs:PS,iridescence_fragment:IS,bumpmap_pars_fragment:LS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:NS,clipping_planes_pars_vertex:US,clipping_planes_vertex:OS,color_fragment:FS,color_pars_fragment:BS,color_pars_vertex:kS,color_vertex:zS,common:VS,cube_uv_reflection_fragment:HS,defaultnormal_vertex:GS,displacementmap_pars_vertex:WS,displacementmap_vertex:XS,emissivemap_fragment:qS,emissivemap_pars_fragment:YS,colorspace_fragment:ZS,colorspace_pars_fragment:JS,envmap_fragment:$S,envmap_common_pars_fragment:KS,envmap_pars_fragment:QS,envmap_pars_vertex:jS,envmap_physical_pars_fragment:hM,envmap_vertex:tM,fog_vertex:eM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:uM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:xM,lights_fragment_end:vM,lightprobes_pars_fragment:yM,logdepthbuf_fragment:SM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:wM,map_fragment:TM,map_pars_fragment:EM,map_particle_fragment:AM,map_particle_pars_fragment:CM,metalnessmap_fragment:RM,metalnessmap_pars_fragment:PM,morphinstance_vertex:IM,morphcolor_vertex:LM,morphnormal_vertex:DM,morphtarget_pars_vertex:NM,morphtarget_vertex:UM,normal_fragment_begin:OM,normal_fragment_maps:FM,normal_pars_fragment:BM,normal_pars_vertex:kM,normal_vertex:zM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:XM,opaque_fragment:qM,packing:YM,premultiplied_alpha_fragment:ZM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:KM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:eb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:rb,skinning_pars_vertex:sb,skinning_vertex:ob,skinnormal_vertex:ab,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:hb,tonemapping_pars_fragment:ub,transmission_fragment:fb,transmission_pars_fragment:db,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:_b,background_vert:xb,background_frag:vb,backgroundCube_vert:yb,backgroundCube_frag:Sb,cube_vert:Mb,cube_frag:bb,depth_vert:wb,depth_frag:Tb,distance_vert:Eb,distance_frag:Ab,equirect_vert:Cb,equirect_frag:Rb,linedashed_vert:Pb,linedashed_frag:Ib,meshbasic_vert:Lb,meshbasic_frag:Db,meshlambert_vert:Nb,meshlambert_frag:Ub,meshmatcap_vert:Ob,meshmatcap_frag:Fb,meshnormal_vert:Bb,meshnormal_frag:kb,meshphong_vert:zb,meshphong_frag:Vb,meshphysical_vert:Hb,meshphysical_frag:Gb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:qb,points_frag:Yb,shadow_vert:Zb,shadow_frag:Jb,sprite_vert:$b,sprite_frag:Kb},Mt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},tr={basic:{uniforms:Ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Ln([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Ln([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Ln([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Ln([Mt.points,Mt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Ln([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Ln([Mt.common,Mt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Ln([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Ln([Mt.sprite,Mt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:Ln([Mt.common,Mt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:Ln([Mt.lights,Mt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};tr.physical={uniforms:Ln([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var eu={r:0,b:0,g:0},Qb=new ke,E0=new Qt;E0.set(-1,0,0,0,1,0,0,0,1);function jb(r,t,e,n,i,s){let o=new ne(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let y=b.backgroundBlurriness>0;A=t.get(A,y)}return A}function p(b){let A=!1,y=f(b);y===null?m(o,a):y&&y.isColor&&(m(y,1),A=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===tl)?(c===void 0&&(c=new Mi(new Do(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Os(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(E0),c.material.toneMapped=he.getTransfer(y.colorSpace)!==ve,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Mi(new Ja(2,2),new rn({name:"BackgroundMaterial",uniforms:Os(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=he.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(eu,Bd(r)),e.buffers.color.setClear(eu.r,eu.g,eu.b,A,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:_,dispose:g}}function tw(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(D,I,F,L,O){let W=!1,U=d(D,L,F,I);s!==U&&(s=U,c(s.object)),W=f(D,L,F,O),W&&p(D,L,F,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(D,I,F,L),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,I,F,L){let O=L.wireframe===!0,W=n[I.id];W===void 0&&(W={},n[I.id]=W);let U=D.isInstancedMesh===!0?D.id:0,$=W[U];$===void 0&&($={},W[U]=$);let V=$[F.id];V===void 0&&(V={},$[F.id]=V);let C=V[O];return C===void 0&&(C=u(l()),V[O]=C),C}function u(D){let I=[],F=[],L=[];for(let O=0;O<e;O++)I[O]=0,F[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,F,L){let O=s.attributes,W=I.attributes,U=0,$=F.getAttributes();for(let V in $)if($[V].location>=0){let Q=O[V],st=W[V];if(st===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(st=D.instanceColor)),Q===void 0||Q.attribute!==st||st&&Q.data!==st.data)return!0;U++}return s.attributesNum!==U||s.index!==L}function p(D,I,F,L){let O={},W=I.attributes,U=0,$=F.getAttributes();for(let V in $)if($[V].location>=0){let Q=W[V];Q===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let st={};st.attribute=Q,Q&&Q.data&&(st.data=Q.data),O[V]=st,U++}s.attributes=O,s.attributesNum=U,s.index=L}function _(){let D=s.newAttributes;for(let I=0,F=D.length;I<F;I++)D[I]=0}function m(D){g(D,0)}function g(D,I){let F=s.newAttributes,L=s.enabledAttributes,O=s.attributeDivisors;F[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),O[D]!==I&&(r.vertexAttribDivisor(D,I),O[D]=I)}function b(){let D=s.newAttributes,I=s.enabledAttributes;for(let F=0,L=I.length;F<L;F++)I[F]!==D[F]&&(r.disableVertexAttribArray(F),I[F]=0)}function A(D,I,F,L,O,W,U){U===!0?r.vertexAttribIPointer(D,I,F,O,W):r.vertexAttribPointer(D,I,F,L,O,W)}function y(D,I,F,L){_();let O=L.attributes,W=F.getAttributes(),U=I.defaultAttributeValues;for(let $ in W){let V=W[$];if(V.location>=0){let C=O[$];if(C===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(C=D.instanceColor)),C!==void 0){let Q=C.normalized,st=C.itemSize,dt=t.get(C);if(dt===void 0)continue;let At=dt.buffer,Ct=dt.type,Nt=dt.bytesPerElement,Z=Ct===r.INT||Ct===r.UNSIGNED_INT||C.gpuType===_h;if(C.isInterleavedBufferAttribute){let K=C.data,ft=K.stride,Ut=C.offset;if(K.isInstancedInterleavedBuffer){for(let ut=0;ut<V.locationSize;ut++)g(V.location+ut,K.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut);r.bindBuffer(r.ARRAY_BUFFER,At);for(let ut=0;ut<V.locationSize;ut++)A(V.location+ut,st/V.locationSize,Ct,Q,ft*Nt,(Ut+st/V.locationSize*ut)*Nt,Z)}else{if(C.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)g(V.location+K,C.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);r.bindBuffer(r.ARRAY_BUFFER,At);for(let K=0;K<V.locationSize;K++)A(V.location+K,st/V.locationSize,Ct,Q,st*Nt,st/V.locationSize*K*Nt,Z)}}else if(U!==void 0){let Q=U[$];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(V.location,Q);break;case 3:r.vertexAttrib3fv(V.location,Q);break;case 4:r.vertexAttrib4fv(V.location,Q);break;default:r.vertexAttrib1fv(V.location,Q)}}}}b()}function S(){T();for(let D in n){let I=n[D];for(let F in I){let L=I[F];for(let O in L){let W=L[O];for(let U in W)h(W[U].object),delete W[U];delete L[O]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let F in I){let L=I[F];for(let O in L){let W=L[O];for(let U in W)h(W[U].object),delete W[U];delete L[O]}}delete n[D.id]}function w(D){for(let I in n){let F=n[I];for(let L in F){let O=F[L];if(O[D.id]===void 0)continue;let W=O[D.id];for(let U in W)h(W[U].object),delete W[U];delete O[D.id]}}}function x(D){for(let I in n){let F=n[I],L=D.isInstancedMesh===!0?D.id:0,O=F[L];if(O!==void 0){for(let W in O){let U=O[W];for(let $ in U)h(U[$].object),delete U[$];delete O[W]}delete F[L],Object.keys(F).length===0&&delete n[I]}}}function T(){R(),o=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function ew(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function nw(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==bi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fi&&w!==Ni&&!x&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),M=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:M}}function iw(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ri,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let b=s?0:n,A=b*4,y=g.clippingState||null;l.value=y,y=h(p,u,A,f);for(let S=0;S!==A;++S)y[S]=e[S];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,y=f;A!==_;++A,y+=4)o.copy(d[A]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var zo=4,rw=6,sw=20,ow=256,ll=new Qa,r0=new ne,Yd=null,Zd=0,Jd=0,$d=!1,aw=new Y,Fs=new Y,iu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=aw}=s;Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yd,Zd,Jd),this._renderer.xr.enabled=$d,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ui,format:bi,colorSpace:Oa,depthBuffer:!1},i=s0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lw(s)),this._blurMaterial=hw(s,t,e),this._ggxMaterial=cw(s,t,e)}return i}_compileMaterial(t){let e=new Mi(new pn,t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,i,s){let l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(r0),d.toneMapping=Li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new Do,new Wa({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,g=!0):(m.color.copy(r0),g=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let S=this._cubeSize;ko(i,y*S,A>2?S:0,S,S),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ns||t.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ko(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-zo?n-p+zo:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,ko(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(a,ll),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ko(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(a,ll)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-zo?i-this._lodMax+zo:0),u=4*(this._cubeSize-h);ko(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,ll)}};function lw(r){let t=[],e=[],n=r,i=r-zo+1+rw;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){let b=g%3*2/3-1,A=g>2?0:-1,y=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];p.set(y,f*u*g);for(let S=0;S<u;S++){let M=h[S*2]*2-1,w=h[S*2+1]*2-1;g===0?Fs.set(1,w,M):g===1?Fs.set(-M,1,-w):g===2?Fs.set(-M,w,1):g===3?Fs.set(-1,w,-M):g===4?Fs.set(-M,-1,w):Fs.set(M,w,-1),Fs.toArray(_,(g*u+S)*f)}}let m=new pn;m.setAttribute("position",new ye(p,f)),m.setAttribute("outputDirection",new ye(_,f)),e.push(new Mi(m,null)),n>zo&&n--}return{lodMeshes:e,sizeLods:t}}function s0(r,t,e){let n=new Qn(r,t,e);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function cw(r,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ow,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function hw(r,t,e){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:sw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function o0(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function a0(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function su(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ru=class extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ya(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Do(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:Qi});s.uniforms.tEquirect.value=e;let o=new Mi(i,s),a=e.minFilter;return e.minFilter===is&&(e.minFilter=vn),new uh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function uw(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===ph||f===mh)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new ru(p.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===ph||f===mh,_=f===ns||f===Us;if(p||_){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new iu(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return p&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new iu(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ph?u.mapping=ns:f===mh&&(u.mapping=Us),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function fw(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Is("WebGLRenderer: "+n+" extension not supported."),i}}}function dw(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let A=0,y=b.length;A<y;A+=3){let S=b[A+0],M=b[A+1],w=b[A+2];u.push(S,M,M,w,w,S)}}else{let b=p.array;_=p.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let S=A+0,M=A+1,w=A+2;u.push(S,M,M,w,w,S)}}let m=new(p.count>=65535?Ga:Ha)(u,1);m.version=_;let g=s.get(d);g&&t.remove(g),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function pw(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mw(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gw(r,t,e){let n=new WeakMap,i=new ze;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let R=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let S=a.attributes.position.count*y,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*M*4*d),x=new za(w,S,M,d);x.type=Ni,x.needsUpdate=!0;let T=y*4;for(let D=0;D<d;D++){let I=g[D],F=b[D],L=A[D],O=S*M*4*D;for(let W=0;W<I.count;W++){let U=W*T;p===!0&&(i.fromBufferAttribute(I,W),w[O+U+0]=i.x,w[O+U+1]=i.y,w[O+U+2]=i.z,w[O+U+3]=0),_===!0&&(i.fromBufferAttribute(F,W),w[O+U+4]=i.x,w[O+U+5]=i.y,w[O+U+6]=i.z,w[O+U+7]=0),m===!0&&(i.fromBufferAttribute(L,W),w[O+U+8]=i.x,w[O+U+9]=i.y,w[O+U+10]=i.z,w[O+U+11]=L.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new pe(S,M)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function _w(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var xw={[xd]:"LINEAR_TONE_MAPPING",[vd]:"REINHARD_TONE_MAPPING",[yd]:"CINEON_TONE_MAPPING",[Sd]:"ACES_FILMIC_TONE_MAPPING",[bd]:"AGX_TONE_MAPPING",[wd]:"NEUTRAL_TONE_MAPPING",[Md]:"CUSTOM_TONE_MAPPING"};function vw(r,t,e,n,i,s){let o=new Qn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new pn;c.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xn([0,2,0,0,2,0],2));let h=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Mi(c,h),u=new Qa(-1,1,1,-1,0,1),f=null,p=null,_=!1,m,g=null,b=[],A=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),l!==null&&l.setSize(y,S);for(let M=0;M<b.length;M++){let w=b[M];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){b=y,A=b.length>0&&b[0].isRenderPass===!0;let S=o.width,M=o.height;b.length>0&&a===null&&(a=new Qn(S,M,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new Qn(S,M,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){let x=b[w];x.setSize&&x.setSize(S,M)}},this.begin=function(y,S){if(_||y.toneMapping===Li&&b.length===0)return!1;if(g=S,S!==null){let M=S.width,w=S.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return A===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Li,!0},this.hasRenderPass=function(){return A},this.end=function(y,S){y.toneMapping=m,_=!0;let M=o,w=a;for(let x=0;x<b.length;x++){let T=b[x];T.enabled!==!1&&(T.render(y,w,M,S),T.needsSwap!==!1&&(M=w,w=w===a?l:a))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},he.getTransfer(f)===ve&&(h.defines.SRGB_TRANSFER="");let x=xw[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(g),y.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var A0=new Kn,jd=new Kr(1,1),C0=new za,R0=new Wc,P0=new Ya,l0=[],c0=[],h0=new Float32Array(16),u0=new Float32Array(9),f0=new Float32Array(4);function Go(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=l0[i];if(s===void 0&&(s=new Float32Array(i),l0[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function sn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function on(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ou(r,t){let e=c0[t];e===void 0&&(e=new Int32Array(t),c0[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function yw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Sw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2fv(this.addr,t),on(e,t)}}function Mw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;r.uniform3fv(this.addr,t),on(e,t)}}function bw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4fv(this.addr,t),on(e,t)}}function ww(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;f0.set(n),r.uniformMatrix2fv(this.addr,!1,f0),on(e,n)}}function Tw(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;u0.set(n),r.uniformMatrix3fv(this.addr,!1,u0),on(e,n)}}function Ew(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;h0.set(n),r.uniformMatrix4fv(this.addr,!1,h0),on(e,n)}}function Aw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Cw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2iv(this.addr,t),on(e,t)}}function Rw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3iv(this.addr,t),on(e,t)}}function Pw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4iv(this.addr,t),on(e,t)}}function Iw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Lw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2uiv(this.addr,t),on(e,t)}}function Dw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3uiv(this.addr,t),on(e,t)}}function Nw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4uiv(this.addr,t),on(e,t)}}function Uw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jd.compareFunction=e.isReversedDepthBuffer()?tu:jh,s=jd):s=A0,e.setTexture2D(t||s,i)}function Ow(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||R0,i)}function Fw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||P0,i)}function Bw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||C0,i)}function kw(r){switch(r){case 5126:return yw;case 35664:return Sw;case 35665:return Mw;case 35666:return bw;case 35674:return ww;case 35675:return Tw;case 35676:return Ew;case 5124:case 35670:return Aw;case 35667:case 35671:return Cw;case 35668:case 35672:return Rw;case 35669:case 35673:return Pw;case 5125:return Iw;case 36294:return Lw;case 36295:return Dw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Bw}}function zw(r,t){r.uniform1fv(this.addr,t)}function Vw(r,t){let e=Go(t,this.size,2);r.uniform2fv(this.addr,e)}function Hw(r,t){let e=Go(t,this.size,3);r.uniform3fv(this.addr,e)}function Gw(r,t){let e=Go(t,this.size,4);r.uniform4fv(this.addr,e)}function Ww(r,t){let e=Go(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Xw(r,t){let e=Go(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function qw(r,t){let e=Go(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Yw(r,t){r.uniform1iv(this.addr,t)}function Zw(r,t){r.uniform2iv(this.addr,t)}function Jw(r,t){r.uniform3iv(this.addr,t)}function $w(r,t){r.uniform4iv(this.addr,t)}function Kw(r,t){r.uniform1uiv(this.addr,t)}function Qw(r,t){r.uniform2uiv(this.addr,t)}function jw(r,t){r.uniform3uiv(this.addr,t)}function tT(r,t){r.uniform4uiv(this.addr,t)}function eT(r,t,e){let n=this.cache,i=t.length,s=ou(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=jd:o=A0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function nT(r,t,e){let n=this.cache,i=t.length,s=ou(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||R0,s[o])}function iT(r,t,e){let n=this.cache,i=t.length,s=ou(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||P0,s[o])}function rT(r,t,e){let n=this.cache,i=t.length,s=ou(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||C0,s[o])}function sT(r){switch(r){case 5126:return zw;case 35664:return Vw;case 35665:return Hw;case 35666:return Gw;case 35674:return Ww;case 35675:return Xw;case 35676:return qw;case 5124:case 35670:return Yw;case 35667:case 35671:return Zw;case 35668:case 35672:return Jw;case 35669:case 35673:return $w;case 5125:return Kw;case 36294:return Qw;case 36295:return jw;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}var tp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kw(e.type)}},ep=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sT(e.type)}},np=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Kd=/(\w+)(\])?(\[|\.)?/g;function d0(r,t){r.seq.push(t),r.map[t.id]=t}function oT(r,t,e){let n=r.name,i=n.length;for(Kd.lastIndex=0;;){let s=Kd.exec(n),o=Kd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){d0(e,c===void 0?new tp(a,r,t):new ep(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new np(a),d0(e,d)),e=d}}}var Vo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);oT(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function p0(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var aT=37297,lT=0;function cT(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var m0=new Qt;function hT(r){he._getMatrix(m0,he.workingColorSpace,r);let t=`mat3( ${m0.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Fa:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function g0(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+cT(r.getShaderSource(t),a)}else return s}function uT(r,t){let e=hT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var fT={[xd]:"Linear",[vd]:"Reinhard",[yd]:"Cineon",[Sd]:"ACESFilmic",[bd]:"AgX",[wd]:"Neutral",[Md]:"Custom"};function dT(r,t){let e=fT[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nu=new Y;function pT(){he.getLuminanceCoefficients(nu);let r=nu.x.toFixed(4),t=nu.y.toFixed(4),e=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function gT(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _T(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function hl(r){return r!==""}function _0(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function x0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(xT,yT)}var vT=new Map;function yT(r,t){let e=re[t];if(e===void 0){let n=vT.get(t);if(n!==void 0)e=re[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ip(e)}var ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(r){return r.replace(ST,MT)}function MT(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function y0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var bT={[ja]:"SHADOWMAP_TYPE_PCF",[No]:"SHADOWMAP_TYPE_VSM"};function wT(r){return bT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var TT={[ns]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE_UV"};function ET(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":TT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var AT={[Us]:"ENVMAP_MODE_REFRACTION"};function CT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":AT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var RT={[_d]:"ENVMAP_BLENDING_MULTIPLY",[F_]:"ENVMAP_BLENDING_MIX",[B_]:"ENVMAP_BLENDING_ADD"};function PT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":RT[r.combine]||"ENVMAP_BLENDING_NONE"}function IT(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function LT(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=wT(e),c=ET(e),h=CT(e),d=PT(e),u=IT(e),f=mT(e),p=gT(s),_=i.createProgram(),m,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hl).join(`
`),g.length>0&&(g+=`
`)):(m=[y0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),g=[y0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?re.tonemapping_pars_fragment:"",e.toneMapping!==Li?dT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,uT("linearToOutputTexel",e.outputColorSpace),pT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hl).join(`
`)),o=ip(o),o=_0(o,e),o=x0(o,e),a=ip(a),a=_0(a,e),a=x0(a,e),o=v0(o),a=v0(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=b+m+o,y=b+g+a,S=p0(i,i.VERTEX_SHADER,A),M=p0(i,i.FRAGMENT_SHADER,y);i.attachShader(_,S),i.attachShader(_,M),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(D){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(M)||"",O=I.trim(),W=F.trim(),U=L.trim(),$=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,M);else{let C=g0(i,S,"vertex"),Q=g0(i,M,"fragment");$t("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+C+`
`+Q)}else O!==""?Yt("WebGLProgram: Program Info Log:",O):(W===""||U==="")&&(V=!1);V&&(D.diagnostics={runnable:$,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:U,prefix:g}})}i.deleteShader(S),i.deleteShader(M),x=new Vo(i,_),T=_T(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,aT)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=M,this}var DT=0,rp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sp(t),e.set(t,n)),n}},sp=class{constructor(t){this.id=DT++,this.code=t,this.usedTimes=0}};function NT(r){return r===ss||r===ol||r===al}function UT(r,t,e,n,i,s){let o=new Va,a=new rp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,D,I,F){let L=D.fog,O=I.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=t.get(x.envMap||W,U),V=$&&$.mapping===tl?$.image.height:null,C=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Yt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,st=Q!==void 0?Q.length:0,dt=0;O.morphAttributes.position!==void 0&&(dt=1),O.morphAttributes.normal!==void 0&&(dt=2),O.morphAttributes.color!==void 0&&(dt=3);let At,Ct,Nt,Z;if(C){let Gt=tr[C];At=Gt.vertexShader,Ct=Gt.fragmentShader}else{At=x.vertexShader,Ct=x.fragmentShader;let Gt=a.getVertexShaderStage(x),ot=a.getFragmentShaderStage(x);a.update(x,Gt,ot),Nt=Gt.id,Z=ot.id}let K=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),Ut=I.isInstancedMesh===!0,ut=I.isBatchedMesh===!0,Ot=!!x.map,zt=!!x.matcap,Rt=!!$,Zt=!!x.aoMap,jt=!!x.lightMap,H=!!x.bumpMap&&x.wireframe===!1,ee=!!x.normalMap,ge=!!x.displacementMap,Ae=!!x.emissiveMap,Jt=!!x.metalnessMap,pt=!!x.roughnessMap,N=x.anisotropy>0,te=x.clearcoat>0,wt=x.dispersion>0,P=x.retroreflectivity>0,v=x.iridescence>0,z=x.sheen>0,G=x.transmission>0,j=N&&!!x.anisotropyMap,ht=te&&!!x.clearcoatMap,at=te&&!!x.clearcoatNormalMap,tt=te&&!!x.clearcoatRoughnessMap,nt=v&&!!x.iridescenceMap,_t=v&&!!x.iridescenceThicknessMap,Lt=z&&!!x.sheenColorMap,xt=z&&!!x.sheenRoughnessMap,gt=!!x.specularMap,ct=!!x.specularColorMap,Vt=!!x.specularIntensityMap,qt=G&&!!x.transmissionMap,B=G&&!!x.thicknessMap,mt=!!x.gradientMap,et=!!x.alphaMap,vt=x.alphaTest>0,St=!!x.alphaHash,it=!!x.extensions,lt=Li;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(lt=r.toneMapping);let rt={shaderID:C,shaderType:x.type,shaderName:x.name,vertexShader:At,fragmentShader:Ct,defines:x.defines,customVertexShaderID:Nt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ut,batchingColor:ut&&I._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&I.instanceColor!==null,instancingMorph:Ut&&I.morphTexture!==null,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:zt,envMap:Rt,envMapMode:Rt&&$.mapping,envMapCubeUVHeight:V,aoMap:Zt,lightMap:jt,bumpMap:H,normalMap:ee,displacementMap:ge,emissiveMap:Ae,normalMapObjectSpace:ee&&x.normalMapType===V_,normalMapTangentSpace:ee&&x.normalMapType===Dd,packedNormalMap:ee&&x.normalMapType===Dd&&NT(x.normalMap.format),metalnessMap:Jt,roughnessMap:pt,anisotropy:N,anisotropyMap:j,clearcoat:te,clearcoatMap:ht,clearcoatNormalMap:at,clearcoatRoughnessMap:tt,dispersion:wt,retroreflection:P,iridescence:v,iridescenceMap:nt,iridescenceThicknessMap:_t,sheen:z,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:gt,specularColorMap:ct,specularIntensityMap:Vt,transmission:G,transmissionMap:qt,thicknessMap:B,gradientMap:mt,opaque:x.transparent===!1&&x.blending===Uo&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:St,combine:x.combine,mapUv:Ot&&p(x.map.channel),aoMapUv:Zt&&p(x.aoMap.channel),lightMapUv:jt&&p(x.lightMap.channel),bumpMapUv:H&&p(x.bumpMap.channel),normalMapUv:ee&&p(x.normalMap.channel),displacementMapUv:ge&&p(x.displacementMap.channel),emissiveMapUv:Ae&&p(x.emissiveMap.channel),metalnessMapUv:Jt&&p(x.metalnessMap.channel),roughnessMapUv:pt&&p(x.roughnessMap.channel),anisotropyMapUv:j&&p(x.anisotropyMap.channel),clearcoatMapUv:ht&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&p(x.sheenRoughnessMap.channel),specularMapUv:gt&&p(x.specularMap.channel),specularColorMapUv:ct&&p(x.specularColorMap.channel),specularIntensityMapUv:Vt&&p(x.specularIntensityMap.channel),transmissionMapUv:qt&&p(x.transmissionMap.channel),thicknessMapUv:B&&p(x.thicknessMap.channel),alphaMapUv:et&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ee||N),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Ot||et),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:dt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:Ae&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ki,flipSided:x.side===Xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(T,x),b(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let T=f[x.type],R;if(T){let D=tr[T];R=e0.clone(D.uniforms)}else R=x.uniforms;return R}function y(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new LT(r,T,x,i),c.push(R),h.set(T,R)),R}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:w}}function OT(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function FT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function S0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function M0(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let b=r[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=p,b.materialVariant=o(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=m,b.group=g),t++,b}function l(u,f,p,_,m,g,b){b.reversedDepth===!0&&(m=-m);let A=a(u,f,p,_,m,g);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):e.push(A)}function c(u,f,p,_,m,g){let b=a(u,f,p,_,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||FT),n.length>1&&n.sort(f||S0),i.length>1&&i.sort(f||S0)}function d(){for(let u=t,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function BT(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new M0,r.set(n,[o])):i>=s.length?(o=new M0,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function kT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new ne};break;case"SpotLight":e={position:new Y,direction:new Y,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function zT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var VT=0;function HT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function GT(r){let t=new kT,e=zT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let i=new Y,s=new ke,o=new ke;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,b=0,A=0,y=0,S=0,M=0,w=0,x=0,T=0,R=0;c.sort(HT);for(let I=0,F=c.length;I<F;I++){let L=c[I],O=L.color,W=L.intensity,U=L.distance,$=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ss?$=L.shadow.map.texture:$=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*W,d+=O.g*W,u+=O.b*W;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],W);R++}else if(L.isSunLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let C=L.shadow,Q=e.get(L);Q.shadowIntensity=C.intensity,Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[p]=Q,n.sunShadowMap[p]=$;let st=C.getViewportCount();for(let dt=0;dt<st;dt++)n.sunShadowMatrix[_+dt]=C.getMatrix(dt),n.sunShadowCascade[_+dt]=C._cascadeData[dt];_+=st,p++}n.sun[f]=V,f++}else if(L.isDirectionalLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let C=L.shadow,Q=e.get(L);Q.shadowIntensity=C.intensity,Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=V,m++}else if(L.isSpotLight){let V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(O).multiplyScalar(W),V.distance=U,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[b]=V;let C=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,C.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[b]=C.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=C.intensity,Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,n.spotShadow[b]=Q,n.spotShadowMap[b]=$,w++}b++}else if(L.isRectAreaLight){let V=t.get(L);V.color.copy(O).multiplyScalar(W),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=V,A++}else if(L.isPointLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let C=L.shadow,Q=e.get(L);Q.shadowIntensity=C.intensity,Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=V,g++}else if(L.isHemisphereLight){let V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(W),V.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[y]=V,y++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==b||D.rectAreaLength!==A||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==w||D.numSpotMaps!==x||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=A,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=b,D.rectAreaLength=A,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=w,D.numSpotMaps=x,D.numLightProbes=R,n.version=VT++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let y=c[b];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(y.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function b0(r){let t=new GT(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function WT(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new b0(r),t.set(i,[a])):s>=o.length?(a=new b0(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YT=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],ZT=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],w0=new ke,cl=new Y,Qd=new Y;function JT(r,t,e){let n=new Xa,i=new pe,s=new pe,o=new ze,a=new jc,l=new th,c={},h=e.maxTextureSize,d={[es]:Xn,[Xn]:es,[Ki]:Ki},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:XT,fragmentShader:qT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new pn;p.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Mi(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let g=this.type;this.render=function(M,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===x_&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ja);let T=r.getRenderTarget(),R=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Qi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=g!==this.type;F&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=M.length;L<O;L++){let W=M[L],U=W.shadow;if(U===void 0){Yt("WebGLShadowMap:",W,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let $=U.getFrameExtents();i.multiply($),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,U.mapSize.y=s.y));let V=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=V,U.map===null||F===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===No){if(W.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Qn(i.x,i.y,{format:ss,type:Ui,minFilter:vn,magFilter:vn,generateMipmaps:!1}),U.map.texture.name=W.name+".shadowMap",U.map.depthTexture=new Kr(i.x,i.y,Ni),U.map.depthTexture.name=W.name+".shadowMapDepth",U.map.depthTexture.format=Zi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=dn,U.map.depthTexture.magFilter=dn}else W.isPointLight?(U.map=new ru(i.x),U.map.depthTexture=new Kc(i.x,Di)):(U.map=new Qn(i.x,i.y),U.map.depthTexture=new Kr(i.x,i.y,Di)),U.map.depthTexture.name=W.name+".shadowMap",U.map.depthTexture.format=Zi,this.type===ja?(U.map.depthTexture.compareFunction=V?tu:jh,U.map.depthTexture.minFilter=vn,U.map.depthTexture.magFilter=vn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=dn,U.map.depthTexture.magFilter=dn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let C=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();W.isPointLight!==!0&&U.updateMatrices(W,x);for(let Q=0;Q<C;Q++){let st=U.getCamera(Q);if(W.isPointLight){let dt=U.camera,At=U.matrix,Ct=W.distance||dt.far;Ct!==dt.far&&(dt.far=Ct,dt.updateProjectionMatrix()),cl.setFromMatrixPosition(W.matrixWorld),dt.position.copy(cl),Qd.copy(dt.position),Qd.add(YT[Q]),dt.up.copy(ZT[Q]),dt.lookAt(Qd),dt.updateMatrixWorld(),At.makeTranslation(-cl.x,-cl.y,-cl.z),w0.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(w0,dt.coordinateSystem,dt.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,Q),r.clear();else{Q===0&&(r.setRenderTarget(U.map),r.clear());let dt=U.getViewport(Q);o.set(s.x*dt.x,s.y*dt.y,s.x*dt.z,s.y*dt.w),I.viewport(o)}n=U.getFrustum(Q),y(w,x,st,W,this.type)}U.isPointLightShadow!==!0&&this.type===No&&b(U,x),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(T,R,D)};function b(M,w){let x=t.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Qn(i.x,i.y,{format:ss,type:Ui}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,x,u,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,x,f,_,null)}function A(M,w,x,T){let R=null,D=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=R.uuid,F=w.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let O=L[F];O===void 0&&(O=R.clone(),L[F]=O,w.addEventListener("dispose",S)),R=O}if(R.visible=w.visible,R.wireframe=w.wireframe,T===No?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:d[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=r.properties.get(R);I.light=x}return R}function y(M,w,x,T,R){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===No)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let F=t.update(M),L=M.material;if(Array.isArray(L)){let O=F.groups;for(let W=0,U=O.length;W<U;W++){let $=O[W],V=L[$.materialIndex];if(V&&V.visible){let C=A(M,V,T,R);M.onBeforeShadow(r,M,w,x,F,C,$),r.renderBufferDirect(x,null,F,C,M,$),M.onAfterShadow(r,M,w,x,F,C,$)}}}else if(L.visible){let O=A(M,L,T,R);M.onBeforeShadow(r,M,w,x,F,O,null),r.renderBufferDirect(x,null,F,O,M,null),M.onAfterShadow(r,M,w,x,F,O,null)}}let I=M.children;for(let F=0,L=I.length;F<L;F++)y(I[F],w,x,T,R)}function S(M){M.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function $T(r,t){function e(){let B=!1,mt=new ze,et=null,vt=new ze(0,0,0,0);return{setMask:function(St){et!==St&&!B&&(r.colorMask(St,St,St,St),et=St)},setLocked:function(St){B=St},setClear:function(St,it,lt,rt,Gt){Gt===!0&&(St*=rt,it*=rt,lt*=rt),mt.set(St,it,lt,rt),vt.equals(mt)===!1&&(r.clearColor(St,it,lt,rt),vt.copy(mt))},reset:function(){B=!1,et=null,vt.set(-1,0,0,0)}}}function n(){let B=!1,mt=!1,et=null,vt=null,St=null;return{setReversed:function(it){if(mt!==it){let lt=t.get("EXT_clip_control");it?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),mt=it;let rt=St;St=null,this.setClear(rt)}},getReversed:function(){return mt},setTest:function(it){it?K(r.DEPTH_TEST):ft(r.DEPTH_TEST)},setMask:function(it){et!==it&&!B&&(r.depthMask(it),et=it)},setFunc:function(it){if(mt&&(it=j_[it]),vt!==it){switch(it){case Lc:r.depthFunc(r.NEVER);break;case Dc:r.depthFunc(r.ALWAYS);break;case Nc:r.depthFunc(r.LESS);break;case Ao:r.depthFunc(r.LEQUAL);break;case Uc:r.depthFunc(r.EQUAL);break;case Oc:r.depthFunc(r.GEQUAL);break;case Fc:r.depthFunc(r.GREATER);break;case Bc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=it}},setLocked:function(it){B=it},setClear:function(it){St!==it&&(St=it,mt&&(it=1-it),r.clearDepth(it))},reset:function(){B=!1,et=null,vt=null,St=null,mt=!1}}}function i(){let B=!1,mt=null,et=null,vt=null,St=null,it=null,lt=null,rt=null,Gt=null;return{setTest:function(ot){B||(ot?K(r.STENCIL_TEST):ft(r.STENCIL_TEST))},setMask:function(ot){mt!==ot&&!B&&(r.stencilMask(ot),mt=ot)},setFunc:function(ot,Xt,Dt){(et!==ot||vt!==Xt||St!==Dt)&&(r.stencilFunc(ot,Xt,Dt),et=ot,vt=Xt,St=Dt)},setOp:function(ot,Xt,Dt){(it!==ot||lt!==Xt||rt!==Dt)&&(r.stencilOp(ot,Xt,Dt),it=ot,lt=Xt,rt=Dt)},setLocked:function(ot){B=ot},setClear:function(ot){Gt!==ot&&(r.clearStencil(ot),Gt=ot)},reset:function(){B=!1,mt=null,et=null,vt=null,St=null,it=null,lt=null,rt=null,Gt=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,b=null,A=null,y=null,S=null,M=null,w=null,x=new ne(0,0,0),T=0,R=!1,D=null,I=null,F=null,L=null,O=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,$=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=$>=2);let C=null,Q={},st=r.getParameter(r.SCISSOR_BOX),dt=r.getParameter(r.VIEWPORT),At=new ze().fromArray(st),Ct=new ze().fromArray(dt);function Nt(B,mt,et,vt){let St=new Uint8Array(4),it=r.createTexture();r.bindTexture(B,it),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<et;lt++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(mt+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return it}let Z={};Z[r.TEXTURE_2D]=Nt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(r.DEPTH_TEST),o.setFunc(Ao),H(!1),ee(fd),K(r.CULL_FACE),Zt(Qi);function K(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function ft(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function Ut(B,mt){return u[B]!==mt?(r.bindFramebuffer(B,mt),u[B]=mt,B===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=mt),B===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function ut(B,mt){let et=p,vt=!1;if(B){et=f.get(mt),et===void 0&&(et=[],f.set(mt,et));let St=B.textures;if(et.length!==St.length||et[0]!==r.COLOR_ATTACHMENT0){for(let it=0,lt=St.length;it<lt;it++)et[it]=r.COLOR_ATTACHMENT0+it;et.length=St.length,vt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,vt=!0);vt&&r.drawBuffers(et)}function Ot(B){return _!==B?(r.useProgram(B),_=B,!0):!1}let zt={[Ns]:r.FUNC_ADD,[y_]:r.FUNC_SUBTRACT,[S_]:r.FUNC_REVERSE_SUBTRACT};zt[M_]=r.MIN,zt[b_]=r.MAX;let Rt={[w_]:r.ZERO,[T_]:r.ONE,[E_]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[L_]:r.SRC_ALPHA_SATURATE,[P_]:r.DST_COLOR,[C_]:r.DST_ALPHA,[A_]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[I_]:r.ONE_MINUS_DST_COLOR,[R_]:r.ONE_MINUS_DST_ALPHA,[D_]:r.CONSTANT_COLOR,[N_]:r.ONE_MINUS_CONSTANT_COLOR,[U_]:r.CONSTANT_ALPHA,[O_]:r.ONE_MINUS_CONSTANT_ALPHA};function Zt(B,mt,et,vt,St,it,lt,rt,Gt,ot){if(B===Qi){m===!0&&(ft(r.BLEND),m=!1);return}if(m===!1&&(K(r.BLEND),m=!0),B!==v_){if(B!==g||ot!==R){if((b!==Ns||S!==Ns)&&(r.blendEquation(r.FUNC_ADD),b=Ns,S=Ns),ot)switch(B){case Uo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sr:r.blendFunc(r.ONE,r.ONE);break;case dd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$t("WebGLState: Invalid blending: ",B);break}else switch(B){case Uo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dd:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pd:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",B);break}A=null,y=null,M=null,w=null,x.set(0,0,0),T=0,g=B,R=ot}return}St=St||mt,it=it||et,lt=lt||vt,(mt!==b||St!==S)&&(r.blendEquationSeparate(zt[mt],zt[St]),b=mt,S=St),(et!==A||vt!==y||it!==M||lt!==w)&&(r.blendFuncSeparate(Rt[et],Rt[vt],Rt[it],Rt[lt]),A=et,y=vt,M=it,w=lt),(rt.equals(x)===!1||Gt!==T)&&(r.blendColor(rt.r,rt.g,rt.b,Gt),x.copy(rt),T=Gt),g=B,R=!1}function jt(B,mt){B.side===Ki?ft(r.CULL_FACE):K(r.CULL_FACE);let et=B.side===Xn;mt&&(et=!et),H(et),B.blending===Uo&&B.transparent===!1?Zt(Qi):Zt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let vt=B.stencilWrite;a.setTest(vt),vt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function H(B){D!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),D=B)}function ee(B){B!==g_?(K(r.CULL_FACE),B!==I&&(B===fd?r.cullFace(r.BACK):B===__?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ft(r.CULL_FACE),I=B}function ge(B){B!==F&&(U&&r.lineWidth(B),F=B)}function Ae(B,mt,et){B?(K(r.POLYGON_OFFSET_FILL),(L!==mt||O!==et)&&(L=mt,O=et,o.getReversed()&&(mt=-mt),r.polygonOffset(mt,et))):ft(r.POLYGON_OFFSET_FILL)}function Jt(B){B?K(r.SCISSOR_TEST):ft(r.SCISSOR_TEST)}function pt(B){B===void 0&&(B=r.TEXTURE0+W-1),C!==B&&(r.activeTexture(B),C=B)}function N(B,mt,et){et===void 0&&(C===null?et=r.TEXTURE0+W-1:et=C);let vt=Q[et];vt===void 0&&(vt={type:void 0,texture:void 0},Q[et]=vt),(vt.type!==B||vt.texture!==mt)&&(C!==et&&(r.activeTexture(et),C=et),r.bindTexture(B,mt||Z[B]),vt.type=B,vt.texture=mt)}function te(){let B=Q[C];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function wt(){try{r.compressedTexImage2D(...arguments)}catch(B){$t("WebGLState:",B)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(B){$t("WebGLState:",B)}}function v(){try{r.texSubImage2D(...arguments)}catch(B){$t("WebGLState:",B)}}function z(){try{r.texSubImage3D(...arguments)}catch(B){$t("WebGLState:",B)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(B){$t("WebGLState:",B)}}function j(){try{r.compressedTexSubImage3D(...arguments)}catch(B){$t("WebGLState:",B)}}function ht(){try{r.texStorage2D(...arguments)}catch(B){$t("WebGLState:",B)}}function at(){try{r.texStorage3D(...arguments)}catch(B){$t("WebGLState:",B)}}function tt(){try{r.texImage2D(...arguments)}catch(B){$t("WebGLState:",B)}}function nt(){try{r.texImage3D(...arguments)}catch(B){$t("WebGLState:",B)}}function _t(B){return d[B]!==void 0?d[B]:r.getParameter(B)}function Lt(B,mt){d[B]!==mt&&(r.pixelStorei(B,mt),d[B]=mt)}function xt(B){At.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),At.copy(B))}function gt(B){Ct.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Ct.copy(B))}function ct(B,mt){let et=c.get(mt);et===void 0&&(et=new WeakMap,c.set(mt,et));let vt=et.get(B);vt===void 0&&(vt=r.getUniformBlockIndex(mt,B.name),et.set(B,vt))}function Vt(B,mt){let vt=c.get(mt).get(B);l.get(mt)!==vt&&(r.uniformBlockBinding(mt,vt,B.__bindingPointIndex),l.set(mt,vt))}function qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,Q={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,b=null,A=null,y=null,S=null,M=null,w=null,x=new ne(0,0,0),T=0,R=!1,D=null,I=null,F=null,L=null,O=null,At.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:ft,bindFramebuffer:Ut,drawBuffers:ut,useProgram:Ot,setBlending:Zt,setMaterial:jt,setFlipSided:H,setCullFace:ee,setLineWidth:ge,setPolygonOffset:Ae,setScissorTest:Jt,activeTexture:pt,bindTexture:N,unbindTexture:te,compressedTexImage2D:wt,compressedTexImage3D:P,texImage2D:tt,texImage3D:nt,pixelStorei:Lt,getParameter:_t,updateUBOMapping:ct,uniformBlockBinding:Vt,texStorage2D:ht,texStorage3D:at,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:xt,viewport:gt,reset:qt}}function KT(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,v){return p?new OffscreenCanvas(P,v):ka("canvas")}function m(P,v,z){let G=1,j=wt(P);if((j.width>z||j.height>z)&&(G=z/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ht=Math.floor(G*j.width),at=Math.floor(G*j.height);u===void 0&&(u=_(ht,at));let tt=v?_(ht,at):u;return tt.width=ht,tt.height=at,tt.getContext("2d").drawImage(P,0,0,ht,at),Yt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ht+"x"+at+")."),tt}else return"data"in P&&Yt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function g(P){return P.generateMipmaps}function b(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,v,z,G,j,ht=!1){if(P!==null){if(r[P]!==void 0)return r[P];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let at;G&&(at=t.get("EXT_texture_norm16"),at||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=v;if(v===r.RED&&(z===r.FLOAT&&(tt=r.R32F),z===r.HALF_FLOAT&&(tt=r.R16F),z===r.UNSIGNED_BYTE&&(tt=r.R8),z===r.UNSIGNED_SHORT&&at&&(tt=at.R16_EXT),z===r.SHORT&&at&&(tt=at.R16_SNORM_EXT)),v===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.R8UI),z===r.UNSIGNED_SHORT&&(tt=r.R16UI),z===r.UNSIGNED_INT&&(tt=r.R32UI),z===r.BYTE&&(tt=r.R8I),z===r.SHORT&&(tt=r.R16I),z===r.INT&&(tt=r.R32I)),v===r.RG&&(z===r.FLOAT&&(tt=r.RG32F),z===r.HALF_FLOAT&&(tt=r.RG16F),z===r.UNSIGNED_BYTE&&(tt=r.RG8),z===r.UNSIGNED_SHORT&&at&&(tt=at.RG16_EXT),z===r.SHORT&&at&&(tt=at.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.RG8UI),z===r.UNSIGNED_SHORT&&(tt=r.RG16UI),z===r.UNSIGNED_INT&&(tt=r.RG32UI),z===r.BYTE&&(tt=r.RG8I),z===r.SHORT&&(tt=r.RG16I),z===r.INT&&(tt=r.RG32I)),v===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),z===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),z===r.UNSIGNED_INT&&(tt=r.RGB32UI),z===r.BYTE&&(tt=r.RGB8I),z===r.SHORT&&(tt=r.RGB16I),z===r.INT&&(tt=r.RGB32I)),v===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),z===r.UNSIGNED_INT&&(tt=r.RGBA32UI),z===r.BYTE&&(tt=r.RGBA8I),z===r.SHORT&&(tt=r.RGBA16I),z===r.INT&&(tt=r.RGBA32I)),v===r.RGB&&(z===r.UNSIGNED_SHORT&&at&&(tt=at.RGB16_EXT),z===r.SHORT&&at&&(tt=at.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),v===r.RGBA){let nt=ht?Fa:he.getTransfer(j);z===r.FLOAT&&(tt=r.RGBA32F),z===r.HALF_FLOAT&&(tt=r.RGBA16F),z===r.UNSIGNED_BYTE&&(tt=nt===ve?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&at&&(tt=at.RGBA16_EXT),z===r.SHORT&&at&&(tt=at.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(P,v){let z;return P?v===null||v===Di||v===Fo?z=r.DEPTH24_STENCIL8:v===Ni?z=r.DEPTH32F_STENCIL8:v===Oo&&(z=r.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Di||v===Fo?z=r.DEPTH_COMPONENT24:v===Ni?z=r.DEPTH_COMPONENT32F:v===Oo&&(z=r.DEPTH_COMPONENT16),z}function M(P,v){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==dn&&P.minFilter!==vn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function w(P){let v=P.target;v.removeEventListener("dispose",w),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(P){let v=P.target;v.removeEventListener("dispose",x),D(v)}function T(P){let v=n.get(P);if(v.__webglInit===void 0)return;let z=P.source,G=f.get(z);if(G){let j=G[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(P),Object.keys(G).length===0&&f.delete(z)}n.remove(P)}function R(P){let v=n.get(P);r.deleteTexture(v.__webglTexture);let z=P.source,G=f.get(z);delete G[v.__cacheKey],o.memory.textures--}function D(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let j=0;j<v.__webglFramebuffer[G].length;j++)r.deleteFramebuffer(v.__webglFramebuffer[G][j]);else r.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)r.deleteFramebuffer(v.__webglFramebuffer[G]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let z=P.textures;for(let G=0,j=z.length;G<j;G++){let ht=n.get(z[G]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(z[G])}n.remove(P)}let I=0;function F(){I=0}function L(){return I}function O(P){I=P}function W(){let P=I;return P>=i.maxTextures&&Yt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function U(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function $(P,v){let z=n.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let G=P.image;if(G===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(z,P,v);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+v)}function V(P,v){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ft(z,P,v);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+v)}function C(P,v){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ft(z,P,v);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+v)}function Q(P,v){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Ut(z,P,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+v)}let st={[kc]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[zc]:r.MIRRORED_REPEAT},dt={[dn]:r.NEAREST,[k_]:r.NEAREST_MIPMAP_NEAREST,[el]:r.NEAREST_MIPMAP_LINEAR,[vn]:r.LINEAR,[gh]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},At={[G_]:r.NEVER,[Z_]:r.ALWAYS,[W_]:r.LESS,[jh]:r.LEQUAL,[X_]:r.EQUAL,[tu]:r.GEQUAL,[q_]:r.GREATER,[Y_]:r.NOTEQUAL};function Ct(P,v){if(v.type===Ni&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===vn||v.magFilter===gh||v.magFilter===el||v.magFilter===is||v.minFilter===vn||v.minFilter===gh||v.minFilter===el||v.minFilter===is)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,st[v.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,st[v.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,st[v.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,dt[v.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==el&&v.minFilter!==is||v.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Nt(P,v){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",w));let G=v.source,j=f.get(G);j===void 0&&(j={},f.set(G,j));let ht=U(v);if(ht!==P.__cacheKey){j[ht]===void 0&&(j[ht]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[ht].usedTimes++;let at=j[P.__cacheKey];at!==void 0&&(j[P.__cacheKey].usedTimes--,at.usedTimes===0&&R(v)),P.__cacheKey=ht,P.__webglTexture=j[ht].texture}return z}function Z(P,v,z){return Math.floor(Math.floor(P/z)/v)}function K(P,v,z,G){let ht=P.updateRanges;if(ht.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,z,G,v.data);else{ht.sort((Lt,xt)=>Lt.start-xt.start);let at=0;for(let Lt=1;Lt<ht.length;Lt++){let xt=ht[at],gt=ht[Lt],ct=xt.start+xt.count,Vt=Z(gt.start,v.width,4),qt=Z(xt.start,v.width,4);gt.start<=ct+1&&Vt===qt&&Z(gt.start+gt.count-1,v.width,4)===Vt?xt.count=Math.max(xt.count,gt.start+gt.count-xt.start):(++at,ht[at]=gt)}ht.length=at+1;let tt=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),_t=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Lt=0,xt=ht.length;Lt<xt;Lt++){let gt=ht[Lt],ct=Math.floor(gt.start/4),Vt=Math.ceil(gt.count/4),qt=ct%v.width,B=Math.floor(ct/v.width),mt=Vt,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(r.UNPACK_SKIP_ROWS,B),e.texSubImage2D(r.TEXTURE_2D,0,qt,B,mt,et,z,G,v.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,tt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,_t)}}function ft(P,v,z){let G=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=r.TEXTURE_3D);let j=Nt(P,v),ht=v.source;e.bindTexture(G,P.__webglTexture,r.TEXTURE0+z);let at=n.get(ht);if(ht.version!==at.__version||j===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let et=he.getPrimaries(he.workingColorSpace),vt=v.colorSpace===Mr?null:he.getPrimaries(v.colorSpace),St=v.colorSpace===Mr||et===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let nt=m(v.image,!1,i.maxTextureSize);nt=te(v,nt);let _t=s.convert(v.format,v.colorSpace),Lt=s.convert(v.type),xt=y(v.internalFormat,_t,Lt,v.normalized,v.colorSpace,v.isVideoTexture);Ct(G,v);let gt,ct=v.mipmaps,Vt=v.isVideoTexture!==!0,qt=at.__version===void 0||j===!0,B=ht.dataReady,mt=M(v,nt);if(v.isDepthTexture)xt=S(v.format===rs,v.type),qt&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,xt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,xt,nt.width,nt.height,0,_t,Lt,null));else if(v.isDataTexture)if(ct.length>0){Vt&&qt&&e.texStorage2D(r.TEXTURE_2D,mt,xt,ct[0].width,ct[0].height);for(let et=0,vt=ct.length;et<vt;et++)gt=ct[et],Vt?B&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,_t,Lt,gt.data):e.texImage2D(r.TEXTURE_2D,et,xt,gt.width,gt.height,0,_t,Lt,gt.data);v.generateMipmaps=!1}else Vt?(qt&&e.texStorage2D(r.TEXTURE_2D,mt,xt,nt.width,nt.height),B&&K(v,nt,_t,Lt)):e.texImage2D(r.TEXTURE_2D,0,xt,nt.width,nt.height,0,_t,Lt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,xt,ct[0].width,ct[0].height,nt.depth);for(let et=0,vt=ct.length;et<vt;et++)if(gt=ct[et],v.format!==bi)if(_t!==null)if(Vt){if(B)if(v.layerUpdates.size>0){let St=Vd(gt.width,gt.height,v.format,v.type);for(let it of v.layerUpdates){let lt=gt.data.subarray(it*St/gt.data.BYTES_PER_ELEMENT,(it+1)*St/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,it,gt.width,gt.height,1,_t,lt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,nt.depth,_t,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,xt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,nt.depth,_t,Lt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,xt,gt.width,gt.height,nt.depth,0,_t,Lt,gt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Vt&&qt&&e.texStorage2D(r.TEXTURE_2D,mt,xt,ct[0].width,ct[0].height);for(let et=0,vt=ct.length;et<vt;et++)gt=ct[et],v.format!==bi?_t!==null?Vt?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,_t,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,xt,gt.width,gt.height,0,gt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?B&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,_t,Lt,gt.data):e.texImage2D(r.TEXTURE_2D,et,xt,gt.width,gt.height,0,_t,Lt,gt.data)}else if(v.isDataArrayTexture)if(Vt){if(qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,xt,nt.width,nt.height,nt.depth),B)if(v.layerUpdates.size>0){let et=Vd(nt.width,nt.height,v.format,v.type);for(let vt of v.layerUpdates){let St=nt.data.subarray(vt*et/nt.data.BYTES_PER_ELEMENT,(vt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,nt.width,nt.height,1,_t,Lt,St)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,_t,Lt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,nt.width,nt.height,nt.depth,0,_t,Lt,nt.data);else if(v.isData3DTexture)Vt?(qt&&e.texStorage3D(r.TEXTURE_3D,mt,xt,nt.width,nt.height,nt.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,_t,Lt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,xt,nt.width,nt.height,nt.depth,0,_t,Lt,nt.data);else if(v.isFramebufferTexture){if(qt)if(Vt)e.texStorage2D(r.TEXTURE_2D,mt,xt,nt.width,nt.height);else{let et=nt.width,vt=nt.height;for(let St=0;St<mt;St++)e.texImage2D(r.TEXTURE_2D,St,xt,et,vt,0,_t,Lt,null),et>>=1,vt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(v),et.onpaint=vt=>{let St=vt.changedElements;for(let it of d)St.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let St=r.RGBA,it=r.RGBA,lt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,St,it,lt,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ct.length>0){if(Vt&&qt){let et=wt(ct[0]);e.texStorage2D(r.TEXTURE_2D,mt,xt,et.width,et.height)}for(let et=0,vt=ct.length;et<vt;et++)gt=ct[et],Vt?B&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,_t,Lt,gt):e.texImage2D(r.TEXTURE_2D,et,xt,_t,Lt,gt);v.generateMipmaps=!1}else if(Vt){if(qt){let et=wt(nt);e.texStorage2D(r.TEXTURE_2D,mt,xt,et.width,et.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Lt,nt)}else e.texImage2D(r.TEXTURE_2D,0,xt,_t,Lt,nt);g(v)&&b(G),at.__version=ht.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Ut(P,v,z){if(v.image.length!==6)return;let G=Nt(P,v),j=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);let ht=n.get(j);if(j.version!==ht.__version||G===!0){e.activeTexture(r.TEXTURE0+z);let at=he.getPrimaries(he.workingColorSpace),tt=v.colorSpace===Mr?null:he.getPrimaries(v.colorSpace),nt=v.colorSpace===Mr||at===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let _t=v.isCompressedTexture||v.image[0].isCompressedTexture,Lt=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let it=0;it<6;it++)!_t&&!Lt?xt[it]=m(v.image[it],!0,i.maxCubemapSize):xt[it]=Lt?v.image[it].image:v.image[it],xt[it]=te(v,xt[it]);let gt=xt[0],ct=s.convert(v.format,v.colorSpace),Vt=s.convert(v.type),qt=y(v.internalFormat,ct,Vt,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,mt=ht.__version===void 0||G===!0,et=j.dataReady,vt=M(v,gt);Ct(r.TEXTURE_CUBE_MAP,v);let St;if(_t){B&&mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,qt,gt.width,gt.height);for(let it=0;it<6;it++){St=xt[it].mipmaps;for(let lt=0;lt<St.length;lt++){let rt=St[lt];v.format!==bi?ct!==null?B?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt,0,0,rt.width,rt.height,ct,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt,qt,rt.width,rt.height,0,rt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt,0,0,rt.width,rt.height,ct,Vt,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt,qt,rt.width,rt.height,0,ct,Vt,rt.data)}}}else{if(St=v.mipmaps,B&&mt){St.length>0&&vt++;let it=wt(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,qt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,xt[it].width,xt[it].height,ct,Vt,xt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,xt[it].width,xt[it].height,0,ct,Vt,xt[it].data);for(let lt=0;lt<St.length;lt++){let Gt=St[lt].image[it].image;B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt+1,0,0,Gt.width,Gt.height,ct,Vt,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt+1,qt,Gt.width,Gt.height,0,ct,Vt,Gt.data)}}else{B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ct,Vt,xt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,ct,Vt,xt[it]);for(let lt=0;lt<St.length;lt++){let rt=St[lt];B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt+1,0,0,ct,Vt,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt+1,qt,ct,Vt,rt.image[it])}}}g(v)&&b(r.TEXTURE_CUBE_MAP),ht.__version=j.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function ut(P,v,z,G,j,ht){let at=s.convert(z.format,z.colorSpace),tt=s.convert(z.type),nt=y(z.internalFormat,at,tt,z.normalized,z.colorSpace),_t=n.get(v),Lt=n.get(z);if(Lt.__renderTarget=v,!_t.__hasExternalTextures){let xt=Math.max(1,v.width>>ht),gt=Math.max(1,v.height>>ht);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,ht,nt,xt,gt,v.depth,0,at,tt,null):e.texImage2D(j,ht,nt,xt,gt,0,at,tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,j,Lt.__webglTexture,0,Jt(v)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,j,Lt.__webglTexture,ht),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(P,v,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),v.depthBuffer){let G=v.depthTexture,j=G&&G.isDepthTexture?G.type:null,ht=S(v.stencilBuffer,j),at=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(v),ht,v.width,v.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(v),ht,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ht,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,P)}else{let G=v.textures;for(let j=0;j<G.length;j++){let ht=G[j],at=s.convert(ht.format,ht.colorSpace),tt=s.convert(ht.type),nt=y(ht.internalFormat,at,tt,ht.normalized,ht.colorSpace);pt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(v),nt,v.width,v.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(v),nt,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,nt,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(P,v,z){let G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,v.depthTexture);let _t=s.convert(v.depthTexture.format),Lt=s.convert(v.depthTexture.type),xt;v.depthTexture.format===Zi?xt=r.DEPTH_COMPONENT24:v.depthTexture.format===rs&&(xt=r.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,xt,v.width,v.height,0,_t,Lt,null)}}else $(v.depthTexture,0);let ht=j.__webglTexture,at=Jt(v),tt=G?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,nt=v.depthTexture.format===rs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Zi)pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,ht,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,ht,0);else if(v.depthTexture.format===rs)pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,ht,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(P){let v=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let G=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=G}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)zt(v.__webglFramebuffer[G],P,G);else{let G=P.texture.mipmaps;G&&G.length>0?zt(v.__webglFramebuffer[0],P,0):zt(v.__webglFramebuffer,P,0)}else if(z){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=r.createRenderbuffer(),Ot(v.__webglDepthbuffer[G],P,!1);else{let j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,ht)}}else{let G=P.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ot(v.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,ht)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(P,v,z){let G=n.get(P);v!==void 0&&ut(G.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Rt(P)}function jt(P){let v=P.texture,z=n.get(P),G=n.get(v);P.addEventListener("dispose",x);let j=P.textures,ht=P.isWebGLCubeRenderTarget===!0,at=j.length>1;if(at||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=v.version,o.memory.textures++),ht){z.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[tt]=[];for(let nt=0;nt<v.mipmaps.length;nt++)z.__webglFramebuffer[tt][nt]=r.createFramebuffer()}else z.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let tt=0;tt<v.mipmaps.length;tt++)z.__webglFramebuffer[tt]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(at)for(let tt=0,nt=j.length;tt<nt;tt++){let _t=n.get(j[tt]);_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&pt(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let nt=j[tt];z.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[tt]);let _t=s.convert(nt.format,nt.colorSpace),Lt=s.convert(nt.type),xt=y(nt.internalFormat,_t,Lt,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),gt=Jt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,xt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,z.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ot(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,v);for(let tt=0;tt<6;tt++)if(v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)ut(z.__webglFramebuffer[tt][nt],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else ut(z.__webglFramebuffer[tt],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(v)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let tt=0,nt=j.length;tt<nt;tt++){let _t=j[tt],Lt=n.get(_t),xt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(xt,Lt.__webglTexture),Ct(xt,_t),ut(z.__webglFramebuffer,P,_t,r.COLOR_ATTACHMENT0+tt,xt,0),g(_t)&&b(xt)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,G.__webglTexture),Ct(tt,v),v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)ut(z.__webglFramebuffer[nt],P,v,r.COLOR_ATTACHMENT0,tt,nt);else ut(z.__webglFramebuffer,P,v,r.COLOR_ATTACHMENT0,tt,0);g(v)&&b(tt),e.unbindTexture()}P.depthBuffer&&Rt(P)}function H(P){let v=P.textures;for(let z=0,G=v.length;z<G;z++){let j=v[z];if(g(j)){let ht=A(P),at=n.get(j).__webglTexture;e.bindTexture(ht,at),b(ht),e.unbindTexture()}}}let ee=[],ge=[];function Ae(P){if(P.samples>0){if(pt(P)===!1){let v=P.textures,z=P.width,G=P.height,j=r.COLOR_BUFFER_BIT,ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(P),tt=v.length>1;if(tt)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[_t]);let Lt=n.get(v[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Lt,0)}r.blitFramebuffer(0,0,z,G,0,0,z,G,j,r.NEAREST),l===!0&&(ee.length=0,ge.length=0,ee.push(r.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ee.push(ht),ge.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,at.__webglColorRenderbuffer[_t]);let Lt=n.get(v[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Lt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Jt(P){return Math.min(i.maxSamples,P.samples)}function pt(P){let v=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(P){let v=o.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function te(P,v){let z=P.colorSpace,G=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Oa&&z!==Mr&&(he.getTransfer(z)===ve?(G!==bi||j!==fi)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",z)),v}function wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=C,this.setTextureCube=Q,this.rebindTextures=Zt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function QT(r,t){function e(n,i=Mr){let s,o=he.getTransfer(i);if(n===fi)return r.UNSIGNED_BYTE;if(n===xh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Cd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ed)return r.BYTE;if(n===Ad)return r.SHORT;if(n===Oo)return r.UNSIGNED_SHORT;if(n===_h)return r.INT;if(n===Di)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===Ui)return r.HALF_FLOAT;if(n===Pd)return r.ALPHA;if(n===Id)return r.RGB;if(n===bi)return r.RGBA;if(n===Zi)return r.DEPTH_COMPONENT;if(n===rs)return r.DEPTH_STENCIL;if(n===Ld)return r.RED;if(n===yh)return r.RED_INTEGER;if(n===ss)return r.RG;if(n===Sh)return r.RG_INTEGER;if(n===Mh)return r.RGBA_INTEGER;if(n===nl||n===il||n===rl||n===sl)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bh||n===wh||n===Th||n===Eh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===ol||n===Lh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ah||n===Ch)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ph)return s.COMPRESSED_R11_EAC;if(n===Ih)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ol)return s.COMPRESSED_RG11_EAC;if(n===Lh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dh||n===Nh||n===Uh||n===Oh||n===Fh||n===Bh||n===kh||n===zh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yh||n===Zh||n===Jh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yh)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===Kh||n===al||n===Qh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===$h)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var jT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,op=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Za(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:jT,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mi(new Ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ap=class extends Ji{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new op,g={},b=e.getContextAttributes(),A=null,y=null,S=[],M=[],w=new pe,x=null,T=null,R=new fn;R.viewport=new ze;let D=new fn;D.viewport=new ze;let I=[R,D],F=new fh,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=S[Z];return K===void 0&&(K=new Io,S[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=S[Z];return K===void 0&&(K=new Io,S[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=S[Z];return K===void 0&&(K=new Io,S[Z]=K),K.getHandSpace()};function W(Z){let K=M.indexOf(Z.inputSource);if(K===-1)return;let ft=S[K];ft!==void 0&&(ft.update(Z.inputSource,Z.frame,c||o),ft.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",$);for(let Z=0;Z<S.length;Z++){let K=M[Z];K!==null&&(M[Z]=null,S[Z].disconnect(K))}L=null,O=null,m.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",U),i.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Ut=null,ut=null;b.depth&&(ut=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=b.stencil?rs:Zi,Ut=b.stencil?Fo:Di);let Ot={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ot),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Qn(u.textureWidth,u.textureHeight,{format:bi,type:fi,depthTexture:new Kr(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ft={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ft),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Qn(f.framebufferWidth,f.framebufferHeight,{format:bi,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Z){for(let K=0;K<Z.removed.length;K++){let ft=Z.removed[K],Ut=M.indexOf(ft);Ut>=0&&(M[Ut]=null,S[Ut].disconnect(ft))}for(let K=0;K<Z.added.length;K++){let ft=Z.added[K],Ut=M.indexOf(ft);if(Ut===-1){for(let Ot=0;Ot<S.length;Ot++)if(Ot>=M.length){M.push(ft),Ut=Ot;break}else if(M[Ot]===null){M[Ot]=ft,Ut=Ot;break}if(Ut===-1)break}let ut=S[Ut];ut&&ut.connect(ft)}}let V=new Y,C=new Y;function Q(Z,K,ft){V.setFromMatrixPosition(K.matrixWorld),C.setFromMatrixPosition(ft.matrixWorld);let Ut=V.distanceTo(C),ut=K.projectionMatrix.elements,Ot=ft.projectionMatrix.elements,zt=ut[14]/(ut[10]-1),Rt=ut[14]/(ut[10]+1),Zt=(ut[9]+1)/ut[5],jt=(ut[9]-1)/ut[5],H=(ut[8]-1)/ut[0],ee=(Ot[8]+1)/Ot[0],ge=zt*H,Ae=zt*ee,Jt=Ut/(-H+ee),pt=Jt*-H;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pt),Z.translateZ(Jt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ut[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let N=zt+Jt,te=Rt+Jt,wt=ge-pt,P=Ae+(Ut-pt),v=Zt*Rt/te*N,z=jt*Rt/te*N;Z.projectionMatrix.makePerspective(wt,P,v,z,N,te),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function st(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let K=Z.near,ft=Z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),F.near=D.near=R.near=K,F.far=D.far=R.far=ft,(L!==F.near||O!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,O=F.far),F.layers.mask=Z.layers.mask|6,R.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let Ut=Z.parent,ut=F.cameras;st(F,Ut);for(let Ot=0;Ot<ut.length;Ot++)st(ut[Ot],Ut);ut.length===2?Q(F,R,D):F.projectionMatrix.copy(R.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),dt(Z,F,Ut)};function dt(Z,K,ft){ft===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(ft.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ro*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return g[Z]};let At=null;function Ct(Z,K){if(h=K.getViewerPose(c||o),p=K,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ut=!1;ft.length!==F.cameras.length&&(F.cameras.length=0,Ut=!0);for(let Rt=0;Rt<ft.length;Rt++){let Zt=ft[Rt],jt=null;if(f!==null)jt=f.getViewport(Zt);else{let ee=d.getViewSubImage(u,Zt);jt=ee.viewport,Rt===0&&(t.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(y))}let H=I[Rt];H===void 0&&(H=new fn,H.layers.enable(Rt),H.viewport=new ze,I[Rt]=H),H.matrix.fromArray(Zt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(Zt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(jt.x,jt.y,jt.width,jt.height),Rt===0&&(F.matrix.copy(H.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ut===!0&&F.cameras.push(H)}let ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Rt=d.getDepthInformation(ft[0]);Rt&&Rt.isValid&&Rt.texture&&m.init(Rt,i.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Rt=0;Rt<ft.length;Rt++){let Zt=ft[Rt].camera;if(Zt){let jt=g[Zt];jt||(jt=new Za,g[Zt]=jt);let H=d.getCameraImage(Zt);jt.sourceTexture=H}}}}for(let ft=0;ft<S.length;ft++){let Ut=M[ft],ut=S[ft];Ut!==null&&ut!==void 0&&ut.update(Ut,K,c||o)}At&&At(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}let Nt=new T0;Nt.setAnimationLoop(Ct),this.setAnimationLoop=function(Z){At=Z},this.dispose=function(){}}},e1=new ke,I0=new Qt;I0.set(-1,0,0,0,1,0,0,0,1);function n1(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Bd(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,b,A,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=t.get(g),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(I0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let b=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function i1(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=i[y.id];M===void 0&&(m(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",b));let w=S.program;n.updateUBOMapping(y,w);let x=t.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function h(y){let S=d();y.__bindingPointIndex=S;let M=r.createBuffer(),w=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,w,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,M),M}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],M=y.uniforms,w=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,T=M.length;x<T;x++){let R=M[x];if(Array.isArray(R))for(let D=0,I=R.length;D<I;D++)f(R[D],x,D,w);else f(R,x,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,M,w){if(_(y,S,M,w)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let I=T[D],F=g(I);p(I,y.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function p(y,S,M){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,M)}function _(y,S,M,w){let x=y.value,T=S+"_"+M;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{let R=w[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let S=y.uniforms,M=0,w=16;for(let T=0,R=S.length;T<R;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,F=D.length;I<F;I++){let L=D[I],O=Array.isArray(L.value)?L.value:[L.value];for(let W=0,U=O.length;W<U;W++){let $=O[W],V=g($),C=M%w,Q=C%V.boundary,st=C+Q;M+=Q,st!==0&&w-st<V.storage&&(M+=w-st),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=V.storage}}}let x=M%w;return x>0&&(M+=w-x),y.__size=M,y.__cache={},this}function g(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){let S=y.target;S.removeEventListener("dispose",b);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function A(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:A}}var r1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function s1(){return ji===null&&(ji=new Xc(r1,16,16,ss,Ui),ji.name="DFG_LUT",ji.minFilter=vn,ji.magFilter=vn,ji.wrapS=Yi,ji.wrapT=Yi,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var Ho=class{constructor(t={}){let{canvas:e=$_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([Mh,Sh,yh]),g=new Set([fi,Di,Oo,Fo,xh,vh]),b=new Uint32Array(4),A=new Int32Array(4),y=new Y,S=null,M=null,w=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,I=null,F=null,L=null,O=null;this._outputColorSpace=hi;let W=0,U=0,$=null,V=-1,C=null,Q=new ze,st=new ze,dt=null,At=new ne(0),Ct=0,Nt=e.width,Z=e.height,K=1,ft=null,Ut=null,ut=new ze(0,0,Nt,Z),Ot=new ze(0,0,Nt,Z),zt=!1,Rt=new Xa,Zt=!1,jt=!1,H=new ke,ee=new Y,ge=new ze,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function pt(){return $===null?K:1}let N=n;function te(E,k){return e.getContext(E,k)}let wt,P,v,z,G,j,ht,at,tt,nt,_t,Lt,xt,gt,ct,Vt,qt,B,mt,et,vt,St,it;try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),N===null){let k="webgl2";if(N=te(k,E),N===null)throw te(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(E){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),$t("WebGLRenderer: "+E.message),E}function lt(){wt=new fw(N),wt.init(),vt=new QT(N,wt),P=new nw(N,wt,t,vt),v=new $T(N,wt),P.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),F=N.createFramebuffer(),L=N.createFramebuffer(),O=N.createFramebuffer(),z=new mw(N),G=new OT,j=new KT(N,wt,v,G,P,vt,z),ht=new uw(R),at=new _S(N),St=new tw(N,at),tt=new dw(N,at,z,St),nt=new _w(N,tt,at,St,z),B=new gw(N,P,j),ct=new iw(G),_t=new UT(R,ht,wt,P,St,ct),Lt=new n1(R,G),xt=new BT,gt=new WT(wt),qt=new jb(R,ht,v,nt,p,l),Vt=new JT(R,nt,P),it=new i1(N,z,P,v),mt=new ew(N,wt,z),et=new pw(N,wt,z),z.programs=_t.programs,R.capabilities=P,R.extensions=wt,R.properties=G,R.renderLists=xt,R.shadowMap=Vt,R.state=v,R.info=z}_!==fi&&(T=new vw(_,e.width,e.height,a,i,s));let rt=new ap(R,N);this.xr=rt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(Nt,Z,!1))},this.getSize=function(E){return E.set(Nt,Z)},this.setSize=function(E,k,J=!0){if(rt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Nt=E,Z=k,e.width=Math.floor(E*K),e.height=Math.floor(k*K),J===!0&&(e.style.width=E+"px",e.style.height=k+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Nt*K,Z*K).floor()},this.setDrawingBufferSize=function(E,k,J){Nt=E,Z=k,K=J,e.width=Math.floor(E*J),e.height=Math.floor(k*J),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(_===fi){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(ut)},this.setViewport=function(E,k,J,X){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,k,J,X),v.viewport(Q.copy(ut).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Ot)},this.setScissor=function(E,k,J,X){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,k,J,X),v.scissor(st.copy(Ot).multiplyScalar(K).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){v.setScissorTest(zt=E)},this.setOpaqueSort=function(E){ft=E},this.setTransparentSort=function(E){Ut=E},this.getClearColor=function(E){return E.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,J=!0){let X=0;if(E){let q=!1;if($!==null){let yt=$.texture.format;q=m.has(yt)}if(q){let yt=$.texture.type,Pt=g.has(yt),bt=qt.getClearColor(),Ft=qt.getClearAlpha(),Ht=bt.r,ie=bt.g,ce=bt.b;Pt?(b[0]=Ht,b[1]=ie,b[2]=ce,b[3]=Ft,N.clearBufferuiv(N.COLOR,0,b)):(A[0]=Ht,A[1]=ie,A[2]=ce,A[3]=Ft,N.clearBufferiv(N.COLOR,0,A))}else X|=N.COLOR_BUFFER_BIT}k&&(X|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),qt.dispose(),xt.dispose(),gt.dispose(),G.dispose(),ht.dispose(),nt.dispose(),St.dispose(),it.dispose(),_t.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ie),rt.removeEventListener("sessionend",be),fe.stop()};function Gt(E){E.preventDefault(),Ud("WebGLRenderer: Context Lost."),D=!0}function ot(){Ud("WebGLRenderer: Context Restored."),D=!1;let E=z.autoReset,k=Vt.enabled,J=Vt.autoUpdate,X=Vt.needsUpdate,q=Vt.type;lt(),z.autoReset=E,Vt.enabled=k,Vt.autoUpdate=J,Vt.needsUpdate=X,Vt.type=q}function Xt(E){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){let k=E.target;k.removeEventListener("dispose",Dt),Kt(k)}function Kt(E){Ze(E),G.remove(E)}function Ze(E){let k=G.get(E).programs;k!==void 0&&(k.forEach(function(J){_t.releaseProgram(J)}),E.isShaderMaterial&&_t.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,J,X,q,yt){k===null&&(k=Ae);let Pt=q.isMesh&&q.matrixWorld.determinantAffine()<0,bt=ln(E,k,J,X,q);v.setMaterial(X,Pt);let Ft=J.index,Ht=1;if(X.wireframe===!0){if(Ft=tt.getWireframeAttribute(J),Ft===void 0)return;Ht=2}let ie=J.drawRange,ce=J.attributes.position,Bt=ie.start*Ht,_e=(ie.start+ie.count)*Ht;yt!==null&&(Bt=Math.max(Bt,yt.start*Ht),_e=Math.min(_e,(yt.start+yt.count)*Ht)),Ft!==null?(Bt=Math.max(Bt,0),_e=Math.min(_e,Ft.count)):ce!=null&&(Bt=Math.max(Bt,0),_e=Math.min(_e,ce.count));let $e=_e-Bt;if($e<0||$e===1/0)return;St.setup(q,X,bt,J,Ft);let Le,we=mt;if(Ft!==null&&(Le=at.get(Ft),we=et,we.setIndex(Le)),q.isMesh)X.wireframe===!0?(v.setLineWidth(X.wireframeLinewidth*pt()),we.setMode(N.LINES)):we.setMode(N.TRIANGLES);else if(q.isLine){let Sn=X.linewidth;Sn===void 0&&(Sn=1),v.setLineWidth(Sn*pt()),q.isLineSegments?we.setMode(N.LINES):q.isLineLoop?we.setMode(N.LINE_LOOP):we.setMode(N.LINE_STRIP)}else q.isPoints?we.setMode(N.POINTS):q.isSprite&&we.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))we.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Sn=q._multiDrawStarts,Tt=q._multiDrawCounts,Un=q._multiDrawCount,me=Ft?at.get(Ft).bytesPerElement:1,pi=G.get(X).currentProgram.getUniforms();for(let Fi=0;Fi<Un;Fi++)pi.setValue(N,"_gl_DrawID",Fi),we.render(Sn[Fi]/me,Tt[Fi])}else if(q.isInstancedMesh)we.renderInstances(Bt,$e,q.count);else if(J.isInstancedBufferGeometry){let Sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Tt=Math.min(J.instanceCount,Sn);we.renderInstances(Bt,$e,Tt)}else we.render(Bt,$e)};function ae(E,k,J,X){I!==null&&E.isNodeMaterial&&I.setObject(X,E),Zt===!0&&ct.setState(E,J,!1),E.transparent===!0&&E.side===Ki&&E.forceSinglePass===!1?(E.side=Xn,E.needsUpdate=!0,Ve(E,k,X),E.side=es,E.needsUpdate=!0,Ve(E,k,X),E.side=Ki):Ve(E,k,X)}this.compile=function(E,k,J=null){J===null&&(J=E),I!==null&&I.renderStart(E,k,J),M=gt.get(J),M.init(k),x.push(M),J.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),E!==J&&E.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),jt=this.localClippingEnabled,Zt=ct.init(this.clippingPlanes,jt),Zt===!0&&ct.setGlobalState(this.clippingPlanes,k),I!==null&&Vt.render(M.state.shadowsArray,J,k);let X=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let yt=q.material;if(yt)if(Array.isArray(yt))for(let Pt=0;Pt<yt.length;Pt++){let bt=yt[Pt];ae(bt,J,k,q),X.add(bt)}else ae(yt,J,k,q),X.add(yt)}),M=x.pop(),I!==null&&I.renderEnd(),X},this.compileAsync=function(E,k,J=null){let X=this.compile(E,k,J);return new Promise(q=>{function yt(){if(X.forEach(function(Pt){let Ft=G.get(Pt).currentProgram;(Ft===void 0||Ft.isReady())&&X.delete(Pt)}),X.size===0){q(E);return}setTimeout(yt,10)}wt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Pe=null;function an(E){Pe&&Pe(E)}function Ie(){fe.stop()}function be(){fe.start()}let fe=new T0;fe.setAnimationLoop(an),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(E){Pe=E,rt.setAnimationLoop(E),E===null?fe.stop():fe.start()},rt.addEventListener("sessionstart",Ie),rt.addEventListener("sessionend",be),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(E,k);let J=rt.enabled===!0&&rt.isPresenting===!0,X=T!==null&&($===null||J)&&T.begin(R,$);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(k),k=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,k,$),M=gt.get(E,x.length),M.init(k),M.state.textureUnits=j.getTextureUnits(),x.push(M),H.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Rt.setFromProjectionMatrix(H,Pi,k.reversedDepth),jt=this.localClippingEnabled,Zt=ct.init(this.clippingPlanes,jt),S=xt.get(E,w.length),S.init(),w.push(S),rt.enabled===!0&&rt.isPresenting===!0){let Pt=R.xr.getDepthSensingMesh();Pt!==null&&Dn(Pt,k,-1/0,R.sortObjects)}Dn(E,k,0,R.sortObjects),S.finish(),I!==null&&I.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(ft,Ut),Jt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Jt&&qt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&ct.beginShadows();let q=M.state.shadowsArray;if(Vt.render(q,E,k),Zt===!0&&ct.endShadows(),(X&&T.hasRenderPass())===!1){let Pt=S.opaque,bt=S.transmissive;if(M.setupLights(),k.isArrayCamera){let Ft=k.cameras;if(bt.length>0)for(let Ht=0,ie=Ft.length;Ht<ie;Ht++){let ce=Ft[Ht];yn(Pt,bt,E,ce)}Jt&&qt.render(E);for(let Ht=0,ie=Ft.length;Ht<ie;Ht++){let ce=Ft[Ht];Ce(S,E,ce,ce.viewport)}}else bt.length>0&&yn(Pt,bt,E,k),Jt&&qt.render(E),Ce(S,E,k)}$!==null&&U===0&&(j.updateMultisampleRenderTarget($),j.updateRenderTargetMipmap($)),X&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,k),St.resetDefaultState(),V=-1,C=null,x.pop(),x.length>0?(M=x[x.length-1],j.setTextureUnits(M.state.textureUnits),Zt===!0&&ct.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,I!==null&&I.renderEnd()};function Dn(E,k,J,X){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Rt)){X&&ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);let Pt=nt.update(E),bt=E.material;bt.visible&&S.push(E,Pt,bt,J,ge.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Rt))){let Pt=nt.update(E),bt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ge.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ge.copy(Pt.boundingSphere.center)),ge.applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(bt)){let Ft=Pt.groups;for(let Ht=0,ie=Ft.length;Ht<ie;Ht++){let ce=Ft[Ht],Bt=bt[ce.materialIndex];Bt&&Bt.visible&&S.push(E,Pt,Bt,J,ge.z,ce,k)}}else bt.visible&&S.push(E,Pt,bt,J,ge.z,null,k)}}let yt=E.children;for(let Pt=0,bt=yt.length;Pt<bt;Pt++)Dn(yt[Pt],k,J,X)}function Ce(E,k,J,X){let{opaque:q,transmissive:yt,transparent:Pt}=E;M.setupLightsView(J),Zt===!0&&ct.setGlobalState(R.clippingPlanes,J),X&&v.viewport(Q.copy(X)),q.length>0&&Nn(q,k,J),yt.length>0&&Nn(yt,k,J),Pt.length>0&&Nn(Pt,k,J),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function yn(E,k,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){let Bt=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new Qn(1,1,{generateMipmaps:!0,type:Bt?Ui:fi,minFilter:is,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let yt=M.state.transmissionRenderTarget[X.id],Pt=X.viewport||Q;yt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),Ft=R.getActiveCubeFace(),Ht=R.getActiveMipmapLevel();R.setRenderTarget(yt),R.getClearColor(At),Ct=R.getClearAlpha(),Ct<1&&R.setClearColor(16777215,.5),R.clear(),Jt&&qt.render(J);let ie=R.toneMapping;R.toneMapping=Li;let ce=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),Zt===!0&&ct.setGlobalState(R.clippingPlanes,X),Nn(E,J,X),j.updateMultisampleRenderTarget(yt),j.updateRenderTargetMipmap(yt),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let _e=0,$e=k.length;_e<$e;_e++){let Le=k[_e],{object:we,geometry:Sn,material:Tt,group:Un}=Le;if(Tt.side===Ki&&we.layers.test(X.layers)){let me=Tt.side;Tt.side=Xn,Tt.needsUpdate=!0,Je(we,J,X,Sn,Tt,Un),Tt.side=me,Tt.needsUpdate=!0,Bt=!0}}Bt===!0&&(j.updateMultisampleRenderTarget(yt),j.updateRenderTargetMipmap(yt))}R.setRenderTarget(bt,Ft,Ht),R.setClearColor(At,Ct),ce!==void 0&&(X.viewport=ce),R.toneMapping=ie}function Nn(E,k,J){let X=k.isScene===!0?k.overrideMaterial:null;for(let q=0,yt=E.length;q<yt;q++){let Pt=E[q],{object:bt,geometry:Ft,group:Ht}=Pt,ie=Pt.material;ie.allowOverride===!0&&X!==null&&(ie=X),bt.layers.test(J.layers)&&Je(bt,k,J,Ft,ie,Ht)}}function Je(E,k,J,X,q,yt){I!==null&&q.isNodeMaterial&&I.setObject(E,q),E.onBeforeRender(R,k,J,X,q,yt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(R,k,J,X,E,yt),q.transparent===!0&&q.side===Ki&&q.forceSinglePass===!1?(q.side=Xn,q.needsUpdate=!0,R.renderBufferDirect(J,k,X,q,E,yt),q.side=es,q.needsUpdate=!0,R.renderBufferDirect(J,k,X,q,E,yt),q.side=Ki):R.renderBufferDirect(J,k,X,q,E,yt),E.onAfterRender(R,k,J,X,q,yt)}function Ve(E,k,J){k.isScene!==!0&&(k=Ae);let X=G.get(E),q=M.state.lights,yt=M.state.shadowsArray,Pt=q.state.version,bt=_t.getParameters(E,q.state,yt,k,J,M.state.lightProbeGridArray),Ft=_t.getProgramCacheKey(bt),Ht=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;let ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ht.get(E.envMap||X.environment,ie),X.envMapRotation=X.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",Dt),Ht=new Map,X.programs=Ht);let ce=Ht.get(Ft);if(ce!==void 0){if(X.currentProgram===ce&&X.lightsStateVersion===Pt)return Oi(E,bt),ce}else bt.uniforms=_t.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,J,bt),E.onBeforeCompile(bt,R),ce=_t.acquireProgram(bt,Ft),Ht.set(Ft,ce),X.uniforms=bt.uniforms;let Bt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=ct.uniform),Oi(E,bt),X.needsLights=di(E),X.lightsStateVersion=Pt,X.needsLights&&(Bt.ambientLightColor.value=q.state.ambient,Bt.lightProbe.value=q.state.probe,Bt.sunLights.value=q.state.sun,Bt.sunLightShadows.value=q.state.sunShadow,Bt.directionalLights.value=q.state.directional,Bt.directionalLightShadows.value=q.state.directionalShadow,Bt.spotLights.value=q.state.spot,Bt.spotLightShadows.value=q.state.spotShadow,Bt.rectAreaLights.value=q.state.rectArea,Bt.ltc_1.value=q.state.rectAreaLTC1,Bt.ltc_2.value=q.state.rectAreaLTC2,Bt.pointLights.value=q.state.point,Bt.pointLightShadows.value=q.state.pointShadow,Bt.hemisphereLights.value=q.state.hemi,Bt.sunShadowMatrix.value=q.state.sunShadowMatrix,Bt.sunShadowCascade.value=q.state.sunShadowCascade,Bt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Bt.spotLightMatrix.value=q.state.spotLightMatrix,Bt.spotLightMap.value=q.state.spotLightMap,Bt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=ce,X.uniformsList=null,ce}function tn(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Vo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Oi(E,k){let J=G.get(E);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Bs(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let J=0,X=E.length;J<X;J++){let q=E[J];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function ln(E,k,J,X,q){k.isScene!==!0&&(k=Ae),j.resetTextureUnits();let yt=k.fog,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,bt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:he.workingColorSpace,Ft=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ht=ht.get(X.envMap||Pt,Ft),ie=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ce=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Bt=!!J.morphAttributes.position,_e=!!J.morphAttributes.normal,$e=!!J.morphAttributes.color,Le=Li;X.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Le=R.toneMapping);let we=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Sn=we!==void 0?we.length:0,Tt=G.get(X),Un=M.state.lights;if(Zt===!0&&(jt===!0||E!==C)){let Re=E===C&&X.id===V;ct.setState(X,E,Re)}let me=!1;X.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Un.state.version||Tt.outputColorSpace!==bt||q.isBatchedMesh&&Tt.batching===!1||!q.isBatchedMesh&&Tt.batching===!0||q.isBatchedMesh&&Tt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Tt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Tt.instancing===!1||!q.isInstancedMesh&&Tt.instancing===!0||q.isSkinnedMesh&&Tt.skinning===!1||!q.isSkinnedMesh&&Tt.skinning===!0||q.isInstancedMesh&&Tt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Tt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Tt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Tt.instancingMorph===!1&&q.morphTexture!==null||Tt.envMap!==Ht||X.fog===!0&&Tt.fog!==yt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ct.numPlanes||Tt.numIntersection!==ct.numIntersection)||Tt.vertexAlphas!==ie||Tt.vertexTangents!==ce||Tt.morphTargets!==Bt||Tt.morphNormals!==_e||Tt.morphColors!==$e||Tt.toneMapping!==Le||Tt.morphTargetsCount!==Sn||!!Tt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Tt.__version=X.version);let pi=Tt.currentProgram;me===!0&&(pi=Ve(X,k,q),I&&X.isNodeMaterial&&I.onUpdateProgram(X,pi,Tt));let Fi=!1,wr=!1,zs=!1,Me=pi.getUniforms(),qe=Tt.uniforms;if(v.useProgram(pi.program)&&(Fi=!0,wr=!0,zs=!0),X.id!==V&&(V=X.id,wr=!0),Tt.needsLights){let Re=Bs(M.state.lightProbeGridArray,q);Tt.lightProbeGrid!==Re&&(Tt.lightProbeGrid=Re,wr=!0)}if(Fi||C!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Me.setValue(N,"projectionMatrix",E.projectionMatrix),Me.setValue(N,"viewMatrix",E.matrixWorldInverse);let Er=Me.map.cameraPosition;Er!==void 0&&Er.setValue(N,ee.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&Me.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Me.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,wr=!0,zs=!0)}if(Tt.needsLights&&(Un.state.sunShadowMap.length>0&&Me.setValue(N,"sunShadowMap",Un.state.sunShadowMap,j),Un.state.directionalShadowMap.length>0&&Me.setValue(N,"directionalShadowMap",Un.state.directionalShadowMap,j),Un.state.spotShadowMap.length>0&&Me.setValue(N,"spotShadowMap",Un.state.spotShadowMap,j),Un.state.pointShadowMap.length>0&&Me.setValue(N,"pointShadowMap",Un.state.pointShadowMap,j)),q.isSkinnedMesh){Me.setOptional(N,q,"bindMatrix"),Me.setOptional(N,q,"bindMatrixInverse");let Re=q.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Me.setValue(N,"boneTexture",Re.boneTexture,j))}q.isBatchedMesh&&(Me.setOptional(N,q,"batchingTexture"),Me.setValue(N,"batchingTexture",q._matricesTexture,j),Me.setOptional(N,q,"batchingIdTexture"),Me.setValue(N,"batchingIdTexture",q._indirectTexture,j),Me.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&Me.setValue(N,"batchingColorTexture",q._colorsTexture,j));let Tr=J.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&B.update(q,J,pi),(wr||Tt.receiveShadow!==q.receiveShadow)&&(Tt.receiveShadow=q.receiveShadow,Me.setValue(N,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(qe.envMapIntensity.value=k.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=s1()),wr){if(Me.setValue(N,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&Xe(qe,zs),yt&&X.fog===!0&&Lt.refreshFogUniforms(qe,yt),Lt.refreshMaterialUniforms(qe,X,K,Z,M.state.transmissionRenderTarget[E.id]),Tt.needsLights&&Tt.lightProbeGrid){let Re=Tt.lightProbeGrid;qe.probesSH.value=Re.texture,qe.probesMin.value.copy(Re.boundingBox.min),qe.probesMax.value.copy(Re.boundingBox.max),qe.probesResolution.value.copy(Re.resolution)}Vo.upload(N,tn(Tt),qe,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Vo.upload(N,tn(Tt),qe,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Me.setValue(N,"center",q.center),Me.setValue(N,"modelViewMatrix",q.modelViewMatrix),Me.setValue(N,"normalMatrix",q.normalMatrix),Me.setValue(N,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Re=X.uniformsGroups;for(let Er=0,Vs=Re.length;Er<Vs;Er++){let hp=Re[Er];it.update(hp,pi),it.bind(hp,pi)}}return pi}function Xe(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function di(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(E,k,J){let X=G.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=k,G.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let J=G.get(E);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,J=0){$=E,W=k,U=J;let X=null,q=!1,yt=!1;if(E){let bt=G.get(E);if(bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,bt.__webglFramebuffer),Q.copy(E.viewport),st.copy(E.scissor),dt=E.scissorTest,v.viewport(Q),v.scissor(st),v.setScissorTest(dt),V=-1;return}else if(bt.__webglFramebuffer===void 0)j.setupRenderTarget(E);else if(bt.__hasExternalTextures)j.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ie=E.depthTexture;if(bt.__boundDepthTexture!==ie){if(ie!==null&&G.has(ie)&&(E.width!==ie.image.width||E.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(E)}}let Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(yt=!0);let Ht=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[k])?X=Ht[k][J]:X=Ht[k],q=!0):E.samples>0&&j.useMultisampledRTT(E)===!1?X=G.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[J]:X=Ht,Q.copy(E.viewport),st.copy(E.scissor),dt=E.scissorTest}else Q.copy(ut).multiplyScalar(K).floor(),st.copy(Ot).multiplyScalar(K).floor(),dt=zt;if(J!==0&&(X=F),v.bindFramebuffer(N.FRAMEBUFFER,X)&&v.drawBuffers(E,X),v.viewport(Q),v.scissor(st),v.setScissorTest(dt),q){let bt=G.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,J)}else if(yt){let bt=k;for(let Ft=0;Ft<E.textures.length;Ft++){let Ht=G.get(E.textures[Ft]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ft,Ht.__webglTexture,J,bt)}}else if(E!==null&&J!==0){let bt=G.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,J)}V=-1};function ks(E){let k=G.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=P.textureFormatReadable(E.format),k.__typeReadable=P.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,J,X,q,yt,Pt,bt=0){if(!(E&&E.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft){v.bindFramebuffer(N.FRAMEBUFFER,Ft);try{let Ht=E.textures[bt],ie=Ht.format,ce=Ht.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+bt);let Bt=ks(Ht);if(Bt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-X&&J>=0&&J<=E.height-q&&N.readPixels(k,J,X,q,vt.convert(ie),vt.convert(ce),yt)}finally{let Ht=$!==null?G.get($).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(E,k,J,X,q,yt,Pt,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft)if(k>=0&&k<=E.width-X&&J>=0&&J<=E.height-q){v.bindFramebuffer(N.FRAMEBUFFER,Ft);let Ht=E.textures[bt],ie=Ht.format,ce=Ht.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+bt);let Bt=ks(Ht);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,yt.byteLength,N.STREAM_READ),N.readPixels(k,J,X,q,vt.convert(ie),vt.convert(ce),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let $e=$!==null?G.get($).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,$e);let Le=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Q_(N,Le,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,yt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(_e),N.deleteSync(Le),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,J=0){let X=Math.pow(2,-J),q=Math.floor(E.image.width*X),yt=Math.floor(E.image.height*X),Pt=k!==null?k.x:0,bt=k!==null?k.y:0;j.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Pt,bt,q,yt),v.unbindTexture()},this.copyTextureToTexture=function(E,k,J=null,X=null,q=0,yt=0){let Pt,bt,Ft,Ht,ie,ce,Bt,_e,$e,Le=E.isCompressedTexture?E.mipmaps[yt]:E.image;if(J!==null)Pt=J.max.x-J.min.x,bt=J.max.y-J.min.y,Ft=J.isBox3?J.max.z-J.min.z:1,Ht=J.min.x,ie=J.min.y,ce=J.isBox3?J.min.z:0;else{let qe=Math.pow(2,-q);Pt=Math.floor(Le.width*qe),bt=Math.floor(Le.height*qe),E.isDataArrayTexture?Ft=Le.depth:E.isData3DTexture?Ft=Math.floor(Le.depth*qe):Ft=1,Ht=0,ie=0,ce=0}X!==null?(Bt=X.x,_e=X.y,$e=X.z):(Bt=0,_e=0,$e=0);let we=vt.convert(k.format),Sn=vt.convert(k.type),Tt;k.isData3DTexture?(j.setTexture3D(k,0),Tt=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(j.setTexture2DArray(k,0),Tt=N.TEXTURE_2D_ARRAY):(j.setTexture2D(k,0),Tt=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);let Un=v.getParameter(N.UNPACK_ROW_LENGTH),me=v.getParameter(N.UNPACK_IMAGE_HEIGHT),pi=v.getParameter(N.UNPACK_SKIP_PIXELS),Fi=v.getParameter(N.UNPACK_SKIP_ROWS),wr=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Le.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Le.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),v.pixelStorei(N.UNPACK_SKIP_ROWS,ie),v.pixelStorei(N.UNPACK_SKIP_IMAGES,ce);let zs=E.isDataArrayTexture||E.isData3DTexture,Me=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let qe=G.get(E),Tr=G.get(k),Re=G.get(qe.__renderTarget),Er=G.get(Tr.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,Re.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Vs=0;Vs<Ft;Vs++)zs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(E).__webglTexture,q,ce+Vs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(k).__webglTexture,yt,$e+Vs)),N.blitFramebuffer(Ht,ie,Pt,bt,Bt,_e,Pt,bt,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||G.has(E)){let qe=G.get(E),Tr=G.get(k);v.bindFramebuffer(N.READ_FRAMEBUFFER,L),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let Re=0;Re<Ft;Re++)zs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qe.__webglTexture,q,ce+Re):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qe.__webglTexture,q),Me?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tr.__webglTexture,yt,$e+Re):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tr.__webglTexture,yt),q!==0?N.blitFramebuffer(Ht,ie,Pt,bt,Bt,_e,Pt,bt,N.COLOR_BUFFER_BIT,N.NEAREST):Me?N.copyTexSubImage3D(Tt,yt,Bt,_e,$e+Re,Ht,ie,Pt,bt):N.copyTexSubImage2D(Tt,yt,Bt,_e,Ht,ie,Pt,bt);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Me?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Tt,yt,Bt,_e,$e,Pt,bt,Ft,we,Sn,Le.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,yt,Bt,_e,$e,Pt,bt,Ft,we,Le.data):N.texSubImage3D(Tt,yt,Bt,_e,$e,Pt,bt,Ft,we,Sn,Le):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,yt,Bt,_e,Pt,bt,we,Sn,Le.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,yt,Bt,_e,Le.width,Le.height,we,Le.data):N.texSubImage2D(N.TEXTURE_2D,yt,Bt,_e,Pt,bt,we,Sn,Le);v.pixelStorei(N.UNPACK_ROW_LENGTH,Un),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me),v.pixelStorei(N.UNPACK_SKIP_PIXELS,pi),v.pixelStorei(N.UNPACK_SKIP_ROWS,Fi),v.pixelStorei(N.UNPACK_SKIP_IMAGES,wr),yt===0&&k.generateMipmaps&&N.generateMipmap(Tt),v.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&j.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){W=0,U=0,$=null,v.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var o1=new ne("#c9d6d2"),a1=new ne("#7fe0c4"),au=.6,cp=5.2,lp=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,3],[1,4],[2,5],[3,6],[0,5],[1,6]],D0=`
  uniform float uWave;
  uniform float uLit;
  float glowAt(float x) {
    float d = x / ${cp.toFixed(1)} - uWave;
    float band = exp(-d * d * 22.0);
    float behind = 1.0 - smoothstep(-0.3, 0.04, d);
    return clamp(band + behind * uLit, 0.0, 1.0);
  }
  float bandAt(float x) {
    float d = x / ${cp.toFixed(1)} - uWave;
    return exp(-d * d * 22.0);
  }
`,l1=`
  uniform float uTime;
  uniform float uIntro;
  uniform float uPixelRatio;
  uniform float uSize;
  attribute vec3 aStart;
  attribute float aRand;
  attribute float aScale;
  varying float vGlow;
  varying float vAlpha;
  ${D0}
  void main() {
    float t = clamp((uIntro - aRand * 0.35) / 0.65, 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);
    vec3 p = mix(aStart, position, t);
    p.x += sin(uTime * 0.5 + aRand * 40.0) * 0.025;
    p.y += cos(uTime * 0.4 + aRand * 30.0) * 0.025;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vGlow = glowAt(world.x);
    vAlpha = t;
    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * (1.0 + bandAt(world.x) * 1.4) * uPixelRatio / -mv.z;
  }
`,c1=`
  uniform vec3 uBase;
  uniform vec3 uGlow;
  varying float vGlow;
  uniform float uLight;
  varying float vAlpha;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    float a = 1.0 - smoothstep(0.0, 0.5, r);
    a = pow(a, 1.8);
    vec3 col = mix(uBase, uGlow, vGlow);
    gl_FragColor = vec4(col, a * vAlpha * (0.55 + vGlow * 0.45) * mix(${au.toFixed(2)}, 1.0, uLight));
    #include <colorspace_fragment>
  }
`,h1=`
  attribute float aInter;
  varying float vGlow;
  varying float vInter;
  ${D0}
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vGlow = glowAt(world.x);
    vInter = aInter;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,u1=`
  uniform vec3 uBase;
  uniform vec3 uGlow;
  uniform float uLines;
  uniform float uConnect;
  uniform float uLight;
  varying float vGlow;
  varying float vInter;
  void main() {
    float intra = uLines * (0.12 + vGlow * 0.3);
    float inter = uConnect * (0.04 + vGlow * 0.32);
    float a = mix(intra, inter, vInter) * mix(${au.toFixed(2)}, 1.0, uLight);
    gl_FragColor = vec4(mix(uBase, uGlow, vGlow), a);
    #include <colorspace_fragment>
  }
`,f1=`
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uFlow;
  attribute vec3 aFrom;
  attribute vec3 aTo;
  attribute float aOffset;
  attribute float aSpeed;
  varying float vAlpha;
  void main() {
    float f = fract(uTime * aSpeed + aOffset);
    vec3 p = mix(aFrom, aTo, f);
    p.y += sin(f * 3.14159) * 0.25;
    vAlpha = sin(f * 3.14159) * uFlow;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = 26.0 * uPixelRatio / -mv.z;
  }
`,d1=`
  uniform vec3 uGlow;
  varying float vAlpha;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    float a = pow(1.0 - smoothstep(0.0, 0.5, r), 2.2);
    gl_FragColor = vec4(uGlow, a * vAlpha);
    #include <colorspace_fragment>
  }
`;function p1(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function m1(r){let t=Math.max(r(),1e-6),e=r();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function g1(r){return[[-4.4,.9,-.6],[-2.6,-1.3,.4],[-1,1.6,-1.2],[.6,-.4,.6],[2.1,1.5,-.4],[3.4,-1.5,-.8],[4.8,.5,.2]].slice(0,r).map(([e,n,i])=>new Y(e,n,i))}function N0(r,t,{labels:e,still:n=!1}){let i;try{i=new Ho({canvas:r,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return null}let s=window.matchMedia("(max-width: 899px)").matches,o=Math.min(window.devicePixelRatio||1,s?1.5:1.75);i.setPixelRatio(o),i.setClearColor(0,0);let a=new Ls,l=new fn(38,1,.1,100);l.position.set(0,0,11);let c=new Ii;a.add(c);let h=p1(20261005),d=g1(e.length),u=s?150:260,f=s?600:1400,p=d.length*u+f,_=new Float32Array(p*3),m=new Float32Array(p*3),g=new Float32Array(p),b=new Float32Array(p),A=d.map(()=>[]),y=0;d.forEach((pt,N)=>{for(let te=0;te<u;te++,y++){let wt=h()<.35,P=wt?.9+h()*.18:Math.abs(m1(h))*.38,v=h()*Math.PI*2,z=Math.acos(2*h()-1),G=new Y(pt.x+P*Math.sin(z)*Math.cos(v),pt.y+P*Math.sin(z)*Math.sin(v)*.8,pt.z+P*Math.cos(z));_.set([G.x,G.y,G.z],y*3),m.set([(h()-.5)*22,(h()-.5)*14,(h()-.5)*12-2],y*3),g[y]=h(),b[y]=wt?.7+h()*.5:.9+h()*.9,A[N].push(G)}});for(let pt=0;pt<f;pt++,y++){let N=(h()-.5)*20,te=(h()-.5)*11,wt=-1-h()*7;_.set([N,te,wt],y*3),m.set([N+(h()-.5)*2,te+(h()-.5)*2,wt],y*3),g[y]=h(),b[y]=.35+h()*.45}let S=new pn;S.setAttribute("position",new ye(_,3)),S.setAttribute("aStart",new ye(m,3)),S.setAttribute("aRand",new ye(g,1)),S.setAttribute("aScale",new ye(b,1));let M={uTime:{value:0},uIntro:{value:0},uWave:{value:-1.4},uLit:{value:0},uLight:{value:0},uPixelRatio:{value:o},uBase:{value:o1},uGlow:{value:a1}},w=new rn({uniforms:{...M,uSize:{value:s?60:78}},vertexShader:l1,fragmentShader:c1,transparent:!0,depthWrite:!1,blending:Sr});c.add(new $r(S,w));let x=[],T=[];A.forEach(pt=>{for(let N=0;N<pt.length;N+=3){let te=-1,wt=1/0;for(let P=0;P<pt.length;P++){if(P===N)continue;let v=pt[N].distanceToSquared(pt[P]);v<wt&&(wt=v,te=P)}te>=0&&wt<.5&&(x.push(pt[N].x,pt[N].y,pt[N].z,pt[te].x,pt[te].y,pt[te].z),T.push(0,0))}});let R=pt=>pt[Math.floor(h()*pt.length)];lp.forEach(([pt,N])=>{if(!(!A[pt]||!A[N]))for(let te=0;te<4;te++){let wt=R(A[pt]),P=R(A[N]);x.push(wt.x,wt.y,wt.z,P.x,P.y,P.z),T.push(1,1)}});let D=new pn;D.setAttribute("position",new xn(x,3)),D.setAttribute("aInter",new xn(T,1));let I=new rn({uniforms:{...M,uLines:{value:0},uConnect:{value:0}},vertexShader:h1,fragmentShader:u1,transparent:!0,depthWrite:!1,blending:Sr});c.add(new qa(D,I));let F=3,L=lp.length*F,O=new Float32Array(L*3),W=new Float32Array(L*3),U=new Float32Array(L),$=new Float32Array(L);lp.forEach(([pt,N],te)=>{for(let wt=0;wt<F;wt++){let P=te*F+wt,v=h()<.5?d[pt]:d[N],z=v===d[pt]?d[N]:d[pt];O.set([v.x,v.y,v.z],P*3),W.set([z.x,z.y,z.z],P*3),U[P]=h(),$[P]=.12+h()*.18}});let V=new pn;V.setAttribute("position",new ye(O.slice(),3)),V.setAttribute("aFrom",new ye(O,3)),V.setAttribute("aTo",new ye(W,3)),V.setAttribute("aOffset",new ye(U,1)),V.setAttribute("aSpeed",new ye($,1));let C=new rn({uniforms:{uTime:M.uTime,uPixelRatio:M.uPixelRatio,uGlow:M.uGlow,uFlow:{value:0}},vertexShader:f1,fragmentShader:d1,transparent:!0,depthWrite:!1,blending:Sr}),Q=new $r(V,C);Q.frustumCulled=!1,c.add(Q),t.replaceChildren();let st=e.map(pt=>{let N=document.createElement("span");return N.className="ai-hero__label",N.textContent=pt,t.appendChild(N),N}),dt=0,At=0,Ct=1,Nt=1,Z=0,K={x:0,y:0,tx:0,ty:0},ft=new Y,Ut=new Y(0,.95,0);function ut(){let pt=At;M.uWave.value=-1.4+pt*2.8,M.uLit.value=Math.min(1,pt*1.6),I.uniforms.uLines.value=dt*(.4+pt*.6),I.uniforms.uConnect.value=pt,C.uniforms.uFlow.value=Math.min(1,Math.max(0,(pt-.15)*1.6)),l.position.z=11-pt*1.6,c.position.x=n?Z:Z*(1-Math.min(1,pt*1.8))}function Ot(){let pt=r.parentElement?.getBoundingClientRect();Ct=Math.max(1,Math.round(pt?.width??window.innerWidth)),Nt=Math.max(1,Math.round(pt?.height??window.innerHeight)),i.setSize(Ct,Nt,!1),l.aspect=Ct/Nt,l.updateProjectionMatrix();let N=l.aspect<1;Z=N?0:2.3,c.position.set(Z,N?1.9:.4,0),c.scale.setScalar(N?.52:l.aspect<1.4?.72:.86),ut()}function zt(){let pt=M.uWave.value,N=M.uLit.value;d.forEach((te,wt)=>{let P=st[wt];if(!P)return;ft.copy(te).add(Ut).applyMatrix4(c.matrixWorld);let v=ft.x;ft.project(l);let z=(ft.x*.5+.5)*Ct,G=(-ft.y*.5+.5)*Nt,j=v/cp-pt,ht=Math.min(1,Math.exp(-j*j*22)+(j<-.1?N:0));P.style.transform=`translate3d(${z.toFixed(1)}px, ${G.toFixed(1)}px, 0) translate(-50%, -100%)`;let at=au+(1-au)*M.uLight.value;P.style.opacity=String(Math.max(0,dt-.6)*2.5*(.45+ht*.55)*at),P.classList.toggle("ai-is-lit",ht>.5)})}function Rt(pt){M.uTime.value=pt,K.x+=(K.tx-K.x)*.04,K.y+=(K.ty-K.y)*.04,c.rotation.y=K.x*.16+Math.sin(pt*.12)*.04,c.rotation.x=K.y*.08,c.updateMatrixWorld(),i.render(a,l),zt()}let Zt=0,jt=!0,H=new Ds;H.connect(document);let ee=pt=>{Zt=requestAnimationFrame(ee),H.update(pt),jt&&Rt(H.getElapsed())},ge=new IntersectionObserver(([pt])=>{jt=pt.isIntersecting});ge.observe(r);let Ae=new ResizeObserver(()=>{Ot(),n&&Rt(0)});Ae.observe(r.parentElement??r);let Jt=pt=>{K.tx=pt.clientX/window.innerWidth*2-1,K.ty=pt.clientY/window.innerHeight*2-1};return Ot(),ut(),n?Rt(0):(window.addEventListener("pointermove",Jt,{passive:!0}),Zt=requestAnimationFrame(ee)),{setIntro(pt){dt=pt,M.uIntro.value=pt,ut(),n&&Rt(0)},setScroll(pt){At=pt,ut(),n&&Rt(0)},setLight(pt){M.uLight.value=pt,n&&Rt(0)},dispose(){cancelAnimationFrame(Zt),H.dispose(),ge.disconnect(),Ae.disconnect(),window.removeEventListener("pointermove",Jt),S.dispose(),D.dispose(),V.dispose(),w.dispose(),I.dispose(),C.dispose(),i.dispose(),t.replaceChildren()}}}var _1=.72;function U0(r){let t=r.querySelector(".ai-hero__canvas"),e=r.querySelector(".ai-hero__labels");if(!t||!e)return()=>{};let n=window.matchMedia(Be.reduce).matches,i=(r.dataset.aiLabels??"").split("|").filter(Boolean),s=N0(t,e,{labels:i,still:n});if(!s)return r.classList.add("ai-hero--static"),()=>r.classList.remove("ai-hero--static");let o=Et.context(()=>{let a=Et.matchMedia();a.add(Be.motion,()=>{let l={v:0};Et.to(l,{v:1,duration:2.8,ease:"power2.out",onUpdate:()=>s.setIntro(l.v)}),ur.create(".ai-hero__title",{type:"lines",mask:"lines",autoSplit:!0,onSplit:p=>Et.from(p.lines,{yPercent:110,duration:1.2,ease:"expo.out",stagger:.09,delay:.55})}),Et.from(".ai-hero__sub, .ai-hero__actions",{autoAlpha:0,y:18,duration:1,ease:"power3.out",stagger:.12,delay:1.15});let c={p:0},h={v:0},d=Et.timeline({scrollTrigger:{trigger:r,start:()=>`top ${Og(r)}px`,end:"+=130%",pin:!0,scrub:.7}}).to(c,{p:1,ease:"none",duration:1,onUpdate:()=>s.setScroll(c.p)},0).to(h,{v:1,duration:.4,ease:"power2.inOut",onUpdate:()=>s.setLight(h.v)},.06).to(".ai-hero__veil",{autoAlpha:0,duration:.35,ease:"power1.in"},.02).to(".ai-hero__content",{autoAlpha:0,y:-70,duration:.3,ease:"power1.in"},.04).fromTo(".ai-hero__mid",{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.25,ease:"power2.out"},.42).to(".ai-hero__scrollhint",{autoAlpha:0,duration:.1},0);Wt.sort();let u=p=>{let _=d.scrollTrigger;_&&(p.preventDefault(),p.stopPropagation(),Et.to(window,{scrollTo:_.start+(_.end-_.start)*_1,duration:1.6,ease:"power2.inOut"}))},f=r.querySelector(".ai-hero__discover");return f?.addEventListener("click",u),()=>f?.removeEventListener("click",u)}),a.add(Be.reduce,()=>{s.setIntro(1),s.setScroll(1),s.setLight(0)})},r);return()=>{o.revert(),s.dispose()}}var lu=(r,t=1)=>r.toLocaleString("it-IT",{minimumFractionDigits:t,maximumFractionDigits:t});function cu(r){r.textContent=lu(Number(r.dataset.value??0),Number(r.dataset.decimals??1))+(r.dataset.suffix??"")}function ul(r,t={}){let e=Number(r.dataset.value??0),n=Number(r.dataset.decimals??1),i=r.dataset.suffix??"",s={v:0};return r.textContent=lu(0,n)+i,Et.to(s,{v:e,duration:1.4,ease:"power2.out",...t,onUpdate:()=>{r.textContent=lu(s.v,n)+i}})}function O0(r){let t=Et.context(()=>{Et.matchMedia().add(Be.motion,()=>{ur.create(".ai-question__manifesto",{type:"words",autoSplit:!0,onSplit:s=>Et.fromTo(s.words,{opacity:.14},{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:r.querySelector(".ai-question__manifesto"),start:"top 78%",end:"bottom 40%",scrub:!0}})});let n=Et.timeline({scrollTrigger:{trigger:r.querySelector(".ai-growth svg"),start:Aa.whole}});n.from(".ai-growth__line",{drawSVG:"0%",duration:1.4,ease:"power2.inOut"}).from(".ai-growth__area",{opacity:0,duration:1},.4).from(".ai-growth__dot",{scale:0,transformOrigin:"50% 50%",stagger:.35,duration:.4,ease:"back.out(2)"},.1),Et.utils.toArray(".ai-growth__value").forEach((s,o)=>n.add(ul(s),.1+o*.35));let i=Et.timeline({scrollTrigger:{trigger:r.querySelector(".ai-gap"),start:Aa.whole}});return i.from(".ai-gap__fill",{scaleX:0,transformOrigin:"0 50%",duration:1.2,ease:"power3.out",stagger:.15}),Et.utils.toArray(".ai-gap__value").forEach((s,o)=>i.add(ul(s,{duration:1.2}),o*.15)),()=>r.querySelectorAll("[data-value]").forEach(cu)})},r);return()=>t.revert()}function x1(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function fl(r,{seed:t=1,onSpeaker:e}={}){let n=x1(t),i=Array.from(r.querySelectorAll("span")),s=i.length,o=new Float32Array(s).fill(.08),a=i.map(()=>5+n()*7),l=i.map(()=>11+n()*9),c=i.map(()=>n()*Math.PI*2),h=i.map(()=>n()*Math.PI*2),d=[],u=0,f=!1,p=null,_=[],m=!1;function g(S,M,w){let x=M,T=M+w;for(;x<T;){let R=1+Math.floor(n()*4);for(let D=0;D<R&&x<T;D++){let I=.08+n()*.16;d.push({start:x,end:x+I,peak:.5+n()*.5,shift:(n()-.5)*.5,speaker:S}),x+=I+.015+n()*.04}x+=n()<.18?.28+n()*.3:.06+n()*.14}return T}function b(S){let M=S;return _.forEach(w=>{M=g(w.speaker,M,w.duration),M+=w.pauseAfter}),M}let A=0;function y(S,M){u+=Math.min(M,50)/1e3,m&&u>A&&(d=d.filter(L=>L.end>u),A=b(u+.2));let w=d.find(L=>u>=L.start&&u<L.end),x=w?.speaker??null,T=d.find(L=>L.speaker&&u>=L.start-.35&&u<L.end+.35),R=x??T?.speaker??null;R!==p&&(p=R,r.dataset.speaker=R??"",e?.(R));let D=0,I=0;if(w){let L=(u-w.start)/(w.end-w.start);D=w.peak*Math.pow(Math.sin(Math.PI*L),.6),I=w.shift}let F=(s-1)*(.5+I*.3);for(let L=0;L<s;L++){let O=(L-F)/(s*.34),W=.3+.7*Math.exp(-O*O),U=.5+.5*(Math.sin(2*Math.PI*a[L]*u+c[L])*.6+Math.sin(2*Math.PI*l[L]*u+h[L])*.4),$=.05+.03*Math.sin(u*1.7+L*.4),V=Math.min(1,$+D*W*(.45+.55*U));o[L]+=(V-o[L])*(V>o[L]?.55:.2),i[L].style.transform=`scaleY(${o[L].toFixed(3)})`}}return{converse(S,M={}){_=S,m=!!M.loop,d=[],A=b(u+.05),this.start()},start(){f||(f=!0,Et.ticker.add(y))},stop(){f&&(f=!1,Et.ticker.remove(y))},dispose(){this.stop(),d=[]}}}function F0(r){return Array.from({length:r},(t,e)=>{let n=(e-(r-1)/2)/(r*.34),i=.15+.75*Math.exp(-n*n)*(.6+.4*Math.abs(Math.sin(e*1.9)));return Number(i.toFixed(3))})}var v1=26;function B0(r){let t=Et.context(()=>{r.querySelectorAll(".ai-solution").forEach(s=>Wt.create({trigger:s,start:"top 80%",end:"bottom 15%",toggleClass:"ai-is-inview"}));let e=r.querySelector(".ai-solution--voice"),n=e?.querySelector(".ai-viz-voice__wave");n&&!n.children.length&&F0(v1).forEach(s=>{let o=document.createElement("span");o.style.transform=`scaleY(${s})`,n.append(o)}),Et.matchMedia().add(Be.motion,()=>{let s=e?.querySelector(".ai-viz-voice__who"),o=e?.querySelector(".ai-viz-voice__time");if(!e||!n||!s||!o)return;let a={caller:e.dataset.aiCaller??"Cliente",ai:e.dataset.aiAgent??"Centralino AI"},l=fl(n,{seed:42,onSpeaker:u=>s.textContent=u?a[u]:""}),c=0,h=(u,f)=>{c+=Math.min(f,50)/1e3;let p=Math.floor(c);o.textContent=`${String(Math.floor(p/60)).padStart(2,"0")}:${String(p%60).padStart(2,"0")}`},d=!1;return Wt.create({trigger:e,start:"top 70%",end:"bottom 10%",onToggle:u=>{u.isActive?(d?l.start():(d=!0,l.converse([{speaker:"caller",duration:2.2,pauseAfter:.45},{speaker:"ai",duration:2.8,pauseAfter:.5},{speaker:"caller",duration:1.4,pauseAfter:.4},{speaker:"ai",duration:1.8,pauseAfter:1.2}],{loop:!0})),Et.ticker.add(h)):(l.stop(),Et.ticker.remove(h))}}),()=>{l.dispose(),Et.ticker.remove(h)}})},r);return()=>t.revert()}function dl(r,t={}){if(!r)return Et.timeline();let e=r.dataset.text??r.textContent??"";r.dataset.text=e,r.textContent="";let n={n:0};return Et.fromTo(n,{n:0},{n:e.length,duration:Math.min(2.2,.025*e.length+.3),ease:"none",...t,onUpdate:()=>{r.textContent=e.slice(0,Math.round(n.n))}})}function k0(r){let t=Et.utils.selector(r),e=p=>t(p)[0],n=r.dataset.kind,i=e(".ai-sw-approve"),[s,o]=t(".ai-sw-link"),a=e(".ai-sw-wave"),l=null;r.classList.remove("ai-is-linked"),i?.classList.remove("ai-is-approved");let c=Et.timeline({paused:!0}),h=p=>Et.timeline().fromTo(p,{"--p":0},{"--p":1,duration:.5,ease:"power2.inOut"}).fromTo(p.querySelector(".ai-sw-pulse"),{"--t":0,autoAlpha:1},{"--t":1,duration:.6,ease:"power2.in",immediateRender:!1},.1).to(p.querySelector(".ai-sw-pulse"),{autoAlpha:0,duration:.2});c.from(e(".ai-sw-situation")??[],{autoAlpha:0,y:10,duration:.5,ease:"power2.out"}).from(t(".ai-sw-stage__label"),{autoAlpha:0,stagger:.1,duration:.4},.1).from(e(".ai-sw-in__label")??[],{autoAlpha:0,duration:.3},.3);let d=-1,u=()=>{if(l?.stop(),!a)return;a.dataset.speaker="",Et.to(a.querySelectorAll("span"),{scaleY:.1,duration:.5,ease:"power2.out"});let p=e(".ai-sw-conv__who");p&&(p.textContent="")};switch(n){case"conversation":{let p=e(".ai-sw-conv__who"),_={caller:p?.dataset.caller??"",ai:p?.dataset.agent??""};a&&(l=fl(a,{seed:11,onSpeaker:m=>{p&&(p.textContent=m?_[m]:"")}})),c.from(e(".ai-sw-conv")??[],{autoAlpha:0,y:16,duration:.5,ease:"power3.out"},.3).call(()=>l?.converse([{speaker:"caller",duration:2.2,pauseAfter:.4},{speaker:"ai",duration:1.8,pauseAfter:0}])).add(dl(e(".ai-sw-conv__text")??null,{duration:2.1}),"<"),d=c.duration()+2.4;break}case"docs":c.from(t(".ai-sw-doc"),{autoAlpha:0,y:-18,stagger:.15,duration:.5,ease:"power3.out"},.3).fromTo(t(".ai-sw-doc__sheet"),{rotation:p=>[-12,9,-7][p]??0},{rotation:p=>[-4,3,-2][p]??0,stagger:.15,duration:.6,ease:"power3.out"},"<").from(e(".ai-sw-more")??[],{autoAlpha:0,y:6,duration:.4},"-=0.1");break;case"tender":{let p=e(".ai-sw-tender__count"),_={n:1};c.from(t(".ai-sw-tender__page"),{autoAlpha:0,y:-16,stagger:.12,duration:.45,ease:"power3.out"},.3).from(t(".ai-sw-tender__name, .ai-sw-tender__pages"),{autoAlpha:0,duration:.3},"-=0.2").fromTo(_,{n:1},{n:Number(p?.dataset.value??1),duration:1.4,ease:"power1.inOut",onUpdate:()=>{p&&(p.textContent=String(Math.round(_.n)))}});break}case"messages":{let p=e(".ai-sw-wave--mini");p&&(l=fl(p,{seed:5})),c.from(t(".ai-sw-msg"),{autoAlpha:0,x:-14,stagger:.22,duration:.45,ease:"power3.out"},.3).call(()=>l?.converse([{speaker:"caller",duration:1.4,pauseAfter:0}]),void 0,.45).from(e(".ai-sw-more")??[],{autoAlpha:0,y:6,duration:.4},"-=0.1"),d=c.duration()+.9;break}case"email":c.from(e(".ai-sw-mail")??[],{autoAlpha:0,y:-16,duration:.5,ease:"power3.out"},.3).add(dl(e(".ai-sw-mail__text")??null,{duration:1.6})).from(t(".ai-sw-file"),{autoAlpha:0,scale:.9,stagger:.15,duration:.35,ease:"back.out(2)"});break}if(n!=="conversation"){let p=e(".ai-sw-scan");c.fromTo(p??[],{top:"0%",autoAlpha:1},{top:"100%",duration:.9,ease:"power1.inOut",immediateRender:!1},"+=0.2"),n==="docs"&&c.fromTo(t(".ai-sw-doc__sheet"),{borderColor:"rgba(242, 244, 243, 0.12)"},{borderColor:"rgba(127, 224, 196, 0.7)",stagger:.22,duration:.3},"<0.1"),n==="tender"&&c.from(t(".ai-sw-hl"),{scaleX:0,transformOrigin:"0% 50%",stagger:.15,duration:.3},"<0.1"),n==="email"&&c.fromTo(t(".ai-sw-file"),{borderColor:"rgba(242, 244, 243, 0.12)"},{borderColor:"rgba(127, 224, 196, 0.7)",stagger:.22,duration:.3},"<0.3"),n==="messages"&&c.fromTo(t(".ai-sw-msg"),{borderColor:"rgba(242, 244, 243, 0.12)"},{borderColor:"rgba(127, 224, 196, 0.6)",stagger:.22,duration:.3},"<0.1"),c.to(p??[],{autoAlpha:0,duration:.2})}s&&c.add(h(s),"+=0.05"),c.from(e(".ai-sw-app")??[],{autoAlpha:0,y:18,duration:.5,ease:"power3.out"},"-=0.35"),t(".ai-sw-ai-step").forEach(p=>c.add(dl(p,{duration:.6}))),t(".ai-sw-field").forEach(p=>{c.from(p,{autoAlpha:0,y:6,duration:.2},"-=0.05").add(dl(p.querySelector(".ai-sw-field__value"),{duration:.3}),"<0.08")}),c.from(e(".ai-sw-check")??[],{autoAlpha:0,scale:.95,duration:.4,ease:"back.out(2)"},"+=0.15"),o&&c.add(h(o),"+=0.1"),c.from(t(".ai-sw-metric"),{autoAlpha:0,x:-8,stagger:.15,duration:.35},"-=0.3"),t(".ai-sw-metric [data-value]").forEach((p,_)=>c.add(ul(p,{duration:1}),`<${_?0:.1}`));let f=t(".ai-sw-metric__bar i");return f.length&&c.from(f,{scaleX:0,transformOrigin:"0% 50%",duration:1,ease:"power3.out"},"<"),c.from(i??[],{autoAlpha:0,duration:.3}).add(()=>i?.classList.add("ai-is-approved"),"+=0.5").fromTo(t(".ai-sw-approve__check"),{drawSVG:"0%"},{drawSVG:"100%",duration:.4,ease:"power2.out"}).add(()=>r.classList.add("ai-is-linked"),"-=0.2"),d>=0&&c.call(u,void 0,Math.min(d,c.duration())),{tl:c,dispose:()=>{l?.dispose(),r.querySelectorAll("[data-text]").forEach(p=>{p.textContent=p.dataset.text??p.textContent}),r.querySelectorAll("[data-value]").forEach(cu),r.classList.add("ai-is-linked"),i?.classList.add("ai-is-approved")}}}var y1=3.2;function z0(r){let t=r.querySelector(".ai-sw-stack"),e=Array.from(r.querySelectorAll(".ai-sw-demo")),n=Array.from(r.querySelectorAll(".ai-sw-tab"));if(!t||!e.length)return()=>{};let i=0,s=!0,o=!1,a=null,l=p=>{e.forEach((_,m)=>{let g=m===p;_.classList.toggle("ai-is-current",g),_.toggleAttribute("inert",!g),_.setAttribute("aria-hidden",String(!g))}),n.forEach((_,m)=>{_.classList.toggle("ai-is-active",m===p),_.setAttribute("aria-selected",String(m===p))})},c=p=>{let _=e[p],m=null,g=!1,b,A=Et.context(()=>{b=k0(_)},_),{tl:y,dispose:S}=b;s&&y.eventCallback("onComplete",()=>{m=Et.delayedCall(y1,()=>{Wt.isInViewport(t,.3)?d():g=!0})});let M=Wt.create({trigger:t,start:"top 60%",end:"bottom 25%",onToggle:w=>{w.isActive&&(y.progress()===0?y.play():g&&s&&(g=!1,d()))}});return Wt.isInViewport(t,.4)&&y.play(),()=>{m?.kill(),M.kill(),A.revert(),S()}},h=p=>{a?.(),a=null,i=p,l(p),o&&(a=c(p))},d=()=>h((i+1)%e.length),u=p=>{let _=n.indexOf(p.currentTarget);_<0||(p.preventDefault(),s=!1,h(_))};n.forEach(p=>p.addEventListener("click",u)),t.classList.add("ai-is-ready"),l(i);let f=Et.matchMedia();return f.add(Be.motion,()=>(o=!0,a=c(i),()=>{o=!1,a?.(),a=null})),()=>{n.forEach(p=>p.removeEventListener("click",u)),f.revert(),a?.(),t.classList.remove("ai-is-ready")}}var hu={closed:12,open:118},S1=250;function uu(r){let t=r.getBoundingClientRect(),e=Array.from(r.querySelectorAll(".ai-layer")),n=r.querySelectorAll(".ai-layer-label");e.map(s=>s.getBoundingClientRect()).forEach((s,o)=>{let a=n[o];if(!a)return;let l=s.top+s.height/2-t.top,c=Math.min(s.right-t.left+8,t.width-S1);a.style.left=`${c.toFixed(1)}px`,a.style.top=`${l.toFixed(1)}px`})}function V0(r){let t=Et.utils.selector(r),e=t(".ai-layer"),n=Et.timeline({onUpdate:()=>uu(r)});return e.forEach((i,s)=>{n.fromTo(i,{z:s*hu.closed},{z:s*hu.open,ease:"power2.inOut",duration:1},0)}),n.from(t(".ai-layer-label"),{autoAlpha:0,stagger:.12,duration:.35},.55).from(t(".ai-perimeter"),{autoAlpha:0,duration:.5},.4),n}function H0(r){let t=r.querySelector(".ai-localai__stage");if(!t)return()=>{};let e=Et.context(()=>{let i=Et.matchMedia();i.add(`${Be.motion} and ${Be.desktop}`,()=>{r.classList.add("ai-localai--placed");let s=V0(t);return Et.timeline({scrollTrigger:{trigger:r,start:"top top",end:"+=110%",pin:!0,scrub:.6}}).add(s),Wt.sort(),()=>r.classList.remove("ai-localai--placed")}),i.add(`${Be.reduce}, ${Be.mobile}`,()=>(Et.utils.toArray(".ai-layer",t).forEach((s,o)=>Et.set(s,{z:o*hu.open*.7})),window.matchMedia(Be.desktop).matches&&(r.classList.add("ai-localai--placed"),uu(t)),()=>r.classList.remove("ai-localai--placed")))},r),n=()=>r.classList.contains("ai-localai--placed")&&uu(t);return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),e.revert()}}function G0(r,t,e){let n=r.getBoundingClientRect(),i=Array.from(r.querySelectorAll(".ai-pathstep__dot"));if(!i.length)return;let s=i.map(c=>{let h=c.getBoundingClientRect();return{x:h.left+h.width/2-n.left,y:h.top+h.height/2-n.top}}),o=n.height,a=22,l=`M${s[0].x} 0 L${s[0].x} ${s[0].y}`;for(let c=1;c<s.length;c++){let h=s[c-1],d=s[c],u=c%2?1:-1,f=(h.y+d.y)/2;l+=` C${h.x+a*u} ${h.y+(f-h.y)*.6}, ${d.x+a*u} ${d.y-(d.y-f)*.6}, ${d.x} ${d.y}`}l+=` L${s[s.length-1].x} ${o}`,t.setAttribute("viewBox",`0 0 ${n.width} ${n.height}`),t.setAttribute("width",String(n.width)),t.setAttribute("height",String(n.height)),e.forEach(c=>c.setAttribute("d",l))}function W0(r){let t=r.querySelector(".ai-path__steps"),e=r.querySelector(".ai-path__svg"),n=r.querySelector(".ai-path__line--base"),i=r.querySelector(".ai-path__line--live"),s=r.querySelector(".ai-path__current"),o=r.querySelector(".ai-path__current-name");if(!t||!e||!n||!i||!s||!o)return()=>{};let a=()=>G0(t,e,[n,i]);a();let l=Et.context(()=>{Et.matchMedia().add(Be.motion,()=>{r.classList.add("ai-path--animated"),Wt.addEventListener("refreshInit",a),Et.fromTo(i,{drawSVG:"0%"},{drawSVG:"100%",ease:"none",scrollTrigger:{trigger:t,start:"top 60%",end:"bottom 60%",scrub:.4,invalidateOnRefresh:!0}});let d=Et.utils.toArray(".ai-pathstep",r),u=d.map(p=>p.querySelector(".ai-pathstep__title")?.textContent??""),f=p=>{s.textContent=String(p+1).padStart(2,"0"),o.textContent=u[p]};return d.forEach((p,_)=>{Wt.create({trigger:p,start:"top 60%",onEnter:()=>{p.classList.add("ai-is-active"),f(_)},onLeaveBack:()=>{p.classList.remove("ai-is-active"),f(Math.max(0,_-1))}})}),()=>{Wt.removeEventListener("refreshInit",a),r.classList.remove("ai-path--animated")}})},r),c=()=>a();return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),l.revert()}}var fu=[[2,15.97,1.5],[5.83,9.22,.84],[5.83,22.71,.84],[9.4,15.99,1.49],[9.44,2.46,.82],[9.49,29.5,.87],[13.28,9.26,.84],[13.28,22.71,.87],[16.78,15.92,2.13],[16.93,29.5,.85],[16.98,2.41,.88],[20.83,9.2,.9],[20.83,22.7,.9],[24.29,2.57,1.65],[24.29,15.99,2.5],[24.34,29.47,1.67],[28.19,9.16,2.5],[28.19,22.75,2.55],[31.72,15.99,2.52]],br={left:.5,top:1.58,width:33.74,height:28.84,cx:17.37,cy:16};var M1=new ne("#c9d6d2"),b1=new ne("#7fe0c4"),X0=10,q0=38,w1=16,T1=`
  uniform float uTime;
  uniform float uForm;
  uniform float uFlash;
  uniform float uPixelRatio;
  uniform float uSize;
  uniform vec2 uCloud;
  uniform vec2 uSpan;
  uniform vec3 uSymbolPos;
  uniform float uSymbolScale;
  attribute vec3 aCloud;
  attribute vec3 aTarget;
  attribute float aDelay;
  attribute float aRand;
  attribute float aScale;
  attribute float aDust;
  varying float vLit;
  varying float vAlpha;

  void main() {
    float ph = aRand * 6.2831853;

    // Nuvola: le particelle del simbolo stanno in una nebulosa attorno al simbolo (cos\xEC convergono
    // da tutte le direzioni); la polvere occupa tutta la fascia. Deriva lenta su traiettorie curve.
    vec3 cloud = aDust > 0.5
      ? vec3(aCloud.xy * uSpan, aCloud.z)
      : vec3(uSymbolPos.xy + aCloud.xy * uCloud, aCloud.z);
    cloud.x += sin(uTime * 0.13 + ph * 3.0) * 0.55 + sin(uTime * 0.071 + ph) * 0.35;
    cloud.y += cos(uTime * 0.11 + ph * 2.0) * 0.32 + sin(uTime * 0.05 + ph * 4.0) * 0.18;
    cloud.z += sin(uTime * 0.09 + ph * 5.0) * 0.4;

    // Avanzamento di questa particella verso il simbolo (prima il centro, poi l'esterno).
    float t = aDust > 0.5 ? 0.0 : smoothstep(aDelay * 0.45, aDelay * 0.45 + 0.55, uForm);

    vec3 target = uSymbolPos + aTarget * uSymbolScale;
    target.xy += vec2(sin(uTime * 1.7 + ph * 7.0), cos(uTime * 1.3 + ph * 5.0)) * 0.012;

    // Traiettoria arcuata: spostamento perpendicolare che si annulla all'arrivo.
    vec3 dir = target - cloud;
    vec2 perp = normalize(vec2(-dir.y, dir.x) + 0.0001);
    vec3 p = mix(cloud, target, t);
    p.xy += perp * sin(t * 3.14159) * length(dir.xy) * 0.2 * (aRand - 0.5) * 2.0;

    // Luce: respiro che parte dal centro + anello dello "scatto".
    float d = length(aTarget.xy);
    float ring = uFlash < 0.0 ? 0.0 : exp(-pow(d - uFlash, 2.0) * 0.35);
    float breath = 0.82 + 0.18 * sin(uTime * 1.1 - d * 0.25);
    vLit = t * (breath + ring * 0.9);
    vAlpha = aDust > 0.5 ? 0.32 : mix(0.4, 0.62, t) + ring * t * 0.3;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * (1.0 + ring * t * 0.8) * uPixelRatio / -mv.z;
  }
`,E1=`
  uniform vec3 uBase;
  uniform vec3 uGlow;
  varying float vLit;
  varying float vAlpha;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    float a = pow(1.0 - smoothstep(0.0, 0.5, r), 1.8);
    vec3 col = mix(uBase, uGlow, clamp(vLit, 0.0, 1.0)) + uGlow * max(vLit - 1.0, 0.0);
    gl_FragColor = vec4(col, a * vAlpha);
    #include <colorspace_fragment>
  }
`;function A1(r){let t=Math.max(r(),1e-6);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*r())}function C1(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Y0(r,t,{still:e=!1}={}){let n;try{n=new Ho({canvas:r,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return null}let i=window.matchMedia("(max-width: 899px)").matches,s=Math.min(window.devicePixelRatio||1,i?1.5:1.75);n.setPixelRatio(s),n.setClearColor(0,0);let o=new Ls,a=new fn(q0,1,.1,100);a.position.set(0,0,X0);let l=new Ii;o.add(l);let c=C1(20261006),h=i?1100:1800,d=i?260:500,u=fu.reduce((st,[,,dt])=>st+dt*dt,0),f=fu.map(([,,st])=>Math.max(18,Math.round(h*st*st/u))),p=f.reduce((st,dt)=>st+dt,0)+d,_=new Float32Array(p*3),m=new Float32Array(p*3),g=new Float32Array(p),b=new Float32Array(p),A=new Float32Array(p),y=new Float32Array(p),S=0;fu.forEach(([st,dt,At],Ct)=>{for(let Nt=0;Nt<f[Ct];Nt++,S++){let Z=c()*Math.PI*2,K=c()<.4?At*(.86+c()*.14):At*Math.sqrt(c())*.9,ft=st+Math.cos(Z)*K-br.cx,Ut=-(dt+Math.sin(Z)*K-br.cy);m.set([ft,Ut,(c()-.5)*.9],S*3);let ut=c()*Math.PI*2,Ot=.3+Math.abs(A1(c))*.55;_.set([Math.cos(ut)*Ot,Math.sin(ut)*Ot,-2.5+c()*3.8],S*3);let zt=Math.hypot(ft,Ut)/w1;g[S]=Math.min(1,zt*.7+c()*.3),b[S]=c(),A[S]=.75+c()*.6}});for(let st=0;st<d;st++,S++)_.set([c()-.5,c()-.5,-6+c()*5],S*3),b[S]=c(),A[S]=.45+c()*.4,y[S]=1;let M=new pn;M.setAttribute("position",new ye(new Float32Array(p*3),3)),M.setAttribute("aCloud",new ye(_,3)),M.setAttribute("aTarget",new ye(m,3)),M.setAttribute("aDelay",new ye(g,1)),M.setAttribute("aRand",new ye(b,1)),M.setAttribute("aScale",new ye(A,1)),M.setAttribute("aDust",new ye(y,1));let w={uTime:{value:0},uForm:{value:e?1:0},uFlash:{value:-1},uPixelRatio:{value:s},uSize:{value:i?56:68},uCloud:{value:new pe(1,1)},uSpan:{value:new pe(1,1)},uSymbolPos:{value:new Y},uSymbolScale:{value:.1},uBase:{value:M1},uGlow:{value:b1}},x=new rn({uniforms:w,vertexShader:T1,fragmentShader:E1,transparent:!0,depthWrite:!1,blending:Sr}),T=new $r(M,x);T.frustumCulled=!1,l.add(T);function R(){let st=r.getBoundingClientRect(),dt=Math.max(1,Math.round(st.width)),At=Math.max(1,Math.round(st.height));n.setSize(dt,At,!1),a.aspect=dt/At,a.updateProjectionMatrix();let Ct=2*X0*Math.tan(Fd.degToRad(q0/2)),Nt=Ct/At;w.uSpan.value.set(Ct*a.aspect*1.05,Ct*.9);let Z=dt<900,K=Z?140:220,ft=Z?40:64,Ut=K/br.height,ut=t.getBoundingClientRect(),Ot=ut.left-st.left+(br.cx-br.left)*Ut,zt=ut.top-st.top-ft-(br.top+br.height-br.cy)*Ut;w.uSymbolPos.value.set((Ot-dt/2)*Nt,-(zt-At/2)*Nt,0),w.uSymbolScale.value=Ut*Nt,w.uCloud.value.set(K*2.4*Nt,K*1.15*Nt)}let D=Et.timeline({repeat:-1,paused:!0});D.set(w.uFlash,{value:-1},0).to(w.uForm,{value:1,duration:3.2,ease:"power2.inOut"},.8).fromTo(w.uFlash,{value:0},{value:22,duration:1.4,ease:"power1.out",immediateRender:!1},3.5).set(w.uFlash,{value:-1},4.9).to(w.uForm,{value:0,duration:2.6,ease:"power2.in"},9.5).to({},{duration:.1},13.9);let I={x:0,y:0,tx:0,ty:0},F=new Ds;F.connect(document);let L=0,O=!1,W=!1;function U(st){w.uTime.value=st,I.x+=(I.tx-I.x)*.04,I.y+=(I.ty-I.y)*.04,l.rotation.y=I.x*.08,l.rotation.x=I.y*.05,n.render(o,a)}let $=st=>{L=requestAnimationFrame($),F.update(st),O&&U(F.getElapsed())},V=new IntersectionObserver(([st])=>{O=st.isIntersecting,!e&&(O?W?D.play():(W=!0,D.restart()):D.pause())});V.observe(r);let C=new ResizeObserver(()=>{R(),e&&U(0)});C.observe(r.parentElement??r);let Q=st=>{I.tx=st.clientX/window.innerWidth*2-1,I.ty=st.clientY/window.innerHeight*2-1};return R(),e?U(0):(window.addEventListener("pointermove",Q,{passive:!0}),L=requestAnimationFrame($)),{dispose(){cancelAnimationFrame(L),D.kill(),F.dispose(),V.disconnect(),C.disconnect(),window.removeEventListener("pointermove",Q),M.dispose(),x.dispose(),n.dispose()}}}function Z0(r){let t=r.querySelector(".ai-closing__canvas"),e=r.querySelector(".ai-closing__title");if(!t||!e)return()=>{};let n=window.matchMedia(Be.reduce).matches,i=Y0(t,e,{still:n}),s=Et.context(()=>{Et.matchMedia().add(Be.motion,()=>{ur.create(e,{type:"lines",mask:"lines",autoSplit:!0,onSplit:a=>Et.from(a.lines,{yPercent:110,duration:1.2,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:e,start:Aa.text}})})})},r);return()=>{s.revert(),i?.dispose()}}var R1={hero:U0,question:O0,solutions:B0,software:z0,localai:H0,path:W0,closing:Z0};function J0(){let r=document.querySelector(".ai-page");if(!r)return;r.querySelectorAll("[data-ai-style]").forEach(i=>{i.style.cssText+=`;${i.dataset.aiStyle}`});let t=()=>Math.max(0,Math.round(r.getBoundingClientRect().top+window.scrollY)),e=()=>r.style.setProperty("--ai-nav-h",`${t()}px`);e(),window.addEventListener("resize",e);let n=r.matches("[data-ai-offset]")?r:r.querySelector("[data-ai-offset]");Gg({offset:t()||Number(n?.dataset.aiOffset??72)}),r.querySelectorAll("[data-ai]").forEach(i=>{let s=R1[i.dataset.ai??""];if(s)try{s(i)}catch(o){console.error(`ai-page: sezione "${i.dataset.ai}"`,o)}}),document.fonts?.ready.then(()=>Wt.refresh())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",J0,{once:!0}):J0();})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   *)

gsap/DrawSVGPlugin.js:
  (*!
   * DrawSVGPlugin 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollToPlugin.js:
  (*!
   * ScrollToPlugin 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
