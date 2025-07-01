"use strict";var ZI=Object.create;var Ra=Object.defineProperty,JI=Object.defineProperties,QI=Object.getOwnPropertyDescriptor,eP=Object.getOwnPropertyDescriptors,nP=Object.getOwnPropertyNames,ps=Object.getOwnPropertySymbols,oP=Object.getPrototypeOf,jp=Object.prototype.hasOwnProperty,pg=Object.prototype.propertyIsEnumerable;var cg=(n,t,a)=>t in n?Ra(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,k=(n,t)=>{for(var a in t||(t={}))jp.call(t,a)&&cg(n,a,t[a]);if(ps)for(var a of ps(t))pg.call(t,a)&&cg(n,a,t[a]);return n},ne=(n,t)=>JI(n,eP(t));var Eo=(n,t)=>{var a={};for(var s in n)jp.call(n,s)&&t.indexOf(s)<0&&(a[s]=n[s]);if(n!=null&&ps)for(var s of ps(n))t.indexOf(s)<0&&pg.call(n,s)&&(a[s]=n[s]);return a};var G=(n,t)=>()=>(n&&(t=n(n=0)),t);var $=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Ee=(n,t)=>{for(var a in t)Ra(n,a,{get:t[a],enumerable:!0})},dg=(n,t,a,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of nP(t))!jp.call(n,l)&&l!==a&&Ra(n,l,{get:()=>t[l],enumerable:!(s=QI(t,l))||s.enumerable});return n};var M=(n,t,a)=>(a=n!=null?ZI(oP(n)):{},dg(t||!n||!n.__esModule?Ra(a,"default",{value:n,enumerable:!0}):a,n)),we=n=>dg(Ra({},"__esModule",{value:!0}),n);var F=(n,t,a)=>new Promise((s,l)=>{var _=y=>{try{T(a.next(y))}catch(x){l(x)}},f=y=>{try{T(a.throw(y))}catch(x){l(x)}},T=y=>y.done?s(y.value):Promise.resolve(y.value).then(_,f);T((a=a.apply(n,t)).next())});var _g=$(ds=>{"use strict";r();ds.byteLength=rP;ds.toByteArray=iP;ds.fromByteArray=pP;var Ro=[],go=[],tP=typeof Uint8Array!="undefined"?Uint8Array:Array,Xp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Zt=0,mg=Xp.length;Zt<mg;++Zt)Ro[Zt]=Xp[Zt],go[Xp.charCodeAt(Zt)]=Zt;var Zt,mg;go["-".charCodeAt(0)]=62;go["_".charCodeAt(0)]=63;function lg(n){var t=n.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=n.indexOf("=");a===-1&&(a=t);var s=a===t?0:4-a%4;return[a,s]}function rP(n){var t=lg(n),a=t[0],s=t[1];return(a+s)*3/4-s}function aP(n,t,a){return(t+a)*3/4-a}function iP(n){var t,a=lg(n),s=a[0],l=a[1],_=new tP(aP(n,s,l)),f=0,T=l>0?s-4:s,y;for(y=0;y<T;y+=4)t=go[n.charCodeAt(y)]<<18|go[n.charCodeAt(y+1)]<<12|go[n.charCodeAt(y+2)]<<6|go[n.charCodeAt(y+3)],_[f++]=t>>16&255,_[f++]=t>>8&255,_[f++]=t&255;return l===2&&(t=go[n.charCodeAt(y)]<<2|go[n.charCodeAt(y+1)]>>4,_[f++]=t&255),l===1&&(t=go[n.charCodeAt(y)]<<10|go[n.charCodeAt(y+1)]<<4|go[n.charCodeAt(y+2)]>>2,_[f++]=t>>8&255,_[f++]=t&255),_}function sP(n){return Ro[n>>18&63]+Ro[n>>12&63]+Ro[n>>6&63]+Ro[n&63]}function cP(n,t,a){for(var s,l=[],_=t;_<a;_+=3)s=(n[_]<<16&16711680)+(n[_+1]<<8&65280)+(n[_+2]&255),l.push(sP(s));return l.join("")}function pP(n){for(var t,a=n.length,s=a%3,l=[],_=16383,f=0,T=a-s;f<T;f+=_)l.push(cP(n,f,f+_>T?T:f+_));return s===1?(t=n[a-1],l.push(Ro[t>>2]+Ro[t<<4&63]+"==")):s===2&&(t=(n[a-2]<<8)+n[a-1],l.push(Ro[t>>10]+Ro[t>>4&63]+Ro[t<<2&63]+"=")),l.join("")}});var ug=$(Yp=>{r();Yp.read=function(n,t,a,s,l){var _,f,T=l*8-s-1,y=(1<<T)-1,x=y>>1,v=-7,b=a?l-1:0,I=a?-1:1,N=n[t+b];for(b+=I,_=N&(1<<-v)-1,N>>=-v,v+=T;v>0;_=_*256+n[t+b],b+=I,v-=8);for(f=_&(1<<-v)-1,_>>=-v,v+=s;v>0;f=f*256+n[t+b],b+=I,v-=8);if(_===0)_=1-x;else{if(_===y)return f?NaN:(N?-1:1)*(1/0);f=f+Math.pow(2,s),_=_-x}return(N?-1:1)*f*Math.pow(2,_-s)};Yp.write=function(n,t,a,s,l,_){var f,T,y,x=_*8-l-1,v=(1<<x)-1,b=v>>1,I=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,N=s?0:_-1,O=s?1:-1,A=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(T=isNaN(t)?1:0,f=v):(f=Math.floor(Math.log(t)/Math.LN2),t*(y=Math.pow(2,-f))<1&&(f--,y*=2),f+b>=1?t+=I/y:t+=I*Math.pow(2,1-b),t*y>=2&&(f++,y/=2),f+b>=v?(T=0,f=v):f+b>=1?(T=(t*y-1)*Math.pow(2,l),f=f+b):(T=t*Math.pow(2,b-1)*Math.pow(2,l),f=0));l>=8;n[a+N]=T&255,N+=O,T/=256,l-=8);for(f=f<<l|T,x+=l;x>0;n[a+N]=f&255,N+=O,f/=256,x-=8);n[a+N-O]|=A*128}});var Ag=$(Nr=>{"use strict";r();var Zp=_g(),kr=ug(),gg=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Nr.Buffer=R;Nr.SlowBuffer=gP;Nr.INSPECT_MAX_BYTES=50;var ms=2147483647;Nr.kMaxLength=ms;R.TYPED_ARRAY_SUPPORT=dP();!R.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function dP(){try{var n=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(n,t),n.foo()===42}catch(a){return!1}}Object.defineProperty(R.prototype,"parent",{enumerable:!0,get:function(){if(!!R.isBuffer(this))return this.buffer}});Object.defineProperty(R.prototype,"offset",{enumerable:!0,get:function(){if(!!R.isBuffer(this))return this.byteOffset}});function tt(n){if(n>ms)throw new RangeError('The value "'+n+'" is invalid for option "size"');var t=new Uint8Array(n);return Object.setPrototypeOf(t,R.prototype),t}function R(n,t,a){if(typeof n=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return nd(n)}return xg(n,t,a)}R.poolSize=8192;function xg(n,t,a){if(typeof n=="string")return lP(n,t);if(ArrayBuffer.isView(n))return _P(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(Do(n,ArrayBuffer)||n&&Do(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Do(n,SharedArrayBuffer)||n&&Do(n.buffer,SharedArrayBuffer)))return Qp(n,t,a);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=n.valueOf&&n.valueOf();if(s!=null&&s!==n)return R.from(s,t,a);var l=uP(n);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return R.from(n[Symbol.toPrimitive]("string"),t,a);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}R.from=function(n,t,a){return xg(n,t,a)};Object.setPrototypeOf(R.prototype,Uint8Array.prototype);Object.setPrototypeOf(R,Uint8Array);function Tg(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function mP(n,t,a){return Tg(n),n<=0?tt(n):t!==void 0?typeof a=="string"?tt(n).fill(t,a):tt(n).fill(t):tt(n)}R.alloc=function(n,t,a){return mP(n,t,a)};function nd(n){return Tg(n),tt(n<0?0:od(n)|0)}R.allocUnsafe=function(n){return nd(n)};R.allocUnsafeSlow=function(n){return nd(n)};function lP(n,t){if((typeof t!="string"||t==="")&&(t="utf8"),!R.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var a=yg(n,t)|0,s=tt(a),l=s.write(n,t);return l!==a&&(s=s.slice(0,l)),s}function Jp(n){for(var t=n.length<0?0:od(n.length)|0,a=tt(t),s=0;s<t;s+=1)a[s]=n[s]&255;return a}function _P(n){if(Do(n,Uint8Array)){var t=new Uint8Array(n);return Qp(t.buffer,t.byteOffset,t.byteLength)}return Jp(n)}function Qp(n,t,a){if(t<0||n.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<t+(a||0))throw new RangeError('"length" is outside of buffer bounds');var s;return t===void 0&&a===void 0?s=new Uint8Array(n):a===void 0?s=new Uint8Array(n,t):s=new Uint8Array(n,t,a),Object.setPrototypeOf(s,R.prototype),s}function uP(n){if(R.isBuffer(n)){var t=od(n.length)|0,a=tt(t);return a.length===0||n.copy(a,0,0,t),a}if(n.length!==void 0)return typeof n.length!="number"||td(n.length)?tt(0):Jp(n);if(n.type==="Buffer"&&Array.isArray(n.data))return Jp(n.data)}function od(n){if(n>=ms)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ms.toString(16)+" bytes");return n|0}function gP(n){return+n!=n&&(n=0),R.alloc(+n)}R.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==R.prototype};R.compare=function(t,a){if(Do(t,Uint8Array)&&(t=R.from(t,t.offset,t.byteLength)),Do(a,Uint8Array)&&(a=R.from(a,a.offset,a.byteLength)),!R.isBuffer(t)||!R.isBuffer(a))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===a)return 0;for(var s=t.length,l=a.length,_=0,f=Math.min(s,l);_<f;++_)if(t[_]!==a[_]){s=t[_],l=a[_];break}return s<l?-1:l<s?1:0};R.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};R.concat=function(t,a){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return R.alloc(0);var s;if(a===void 0)for(a=0,s=0;s<t.length;++s)a+=t[s].length;var l=R.allocUnsafe(a),_=0;for(s=0;s<t.length;++s){var f=t[s];if(Do(f,Uint8Array))_+f.length>l.length?R.from(f).copy(l,_):Uint8Array.prototype.set.call(l,f,_);else if(R.isBuffer(f))f.copy(l,_);else throw new TypeError('"list" argument must be an Array of Buffers');_+=f.length}return l};function yg(n,t){if(R.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||Do(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var a=n.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&a===0)return 0;for(var l=!1;;)switch(t){case"ascii":case"latin1":case"binary":return a;case"utf8":case"utf-8":return ed(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a*2;case"hex":return a>>>1;case"base64":return Lg(n).length;default:if(l)return s?-1:ed(n).length;t=(""+t).toLowerCase(),l=!0}}R.byteLength=yg;function fP(n,t,a){var s=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((a===void 0||a>this.length)&&(a=this.length),a<=0)||(a>>>=0,t>>>=0,a<=t))return"";for(n||(n="utf8");;)switch(n){case"hex":return LP(this,t,a);case"utf8":case"utf-8":return bg(this,t,a);case"ascii":return vP(this,t,a);case"latin1":case"binary":return CP(this,t,a);case"base64":return bP(this,t,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return AP(this,t,a);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),s=!0}}R.prototype._isBuffer=!0;function Jt(n,t,a){var s=n[t];n[t]=n[a],n[a]=s}R.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var a=0;a<t;a+=2)Jt(this,a,a+1);return this};R.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var a=0;a<t;a+=4)Jt(this,a,a+3),Jt(this,a+1,a+2);return this};R.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var a=0;a<t;a+=8)Jt(this,a,a+7),Jt(this,a+1,a+6),Jt(this,a+2,a+5),Jt(this,a+3,a+4);return this};R.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?bg(this,0,t):fP.apply(this,arguments)};R.prototype.toLocaleString=R.prototype.toString;R.prototype.equals=function(t){if(!R.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:R.compare(this,t)===0};R.prototype.inspect=function(){var t="",a=Nr.INSPECT_MAX_BYTES;return t=this.toString("hex",0,a).replace(/(.{2})/g,"$1 ").trim(),this.length>a&&(t+=" ... "),"<Buffer "+t+">"};gg&&(R.prototype[gg]=R.prototype.inspect);R.prototype.compare=function(t,a,s,l,_){if(Do(t,Uint8Array)&&(t=R.from(t,t.offset,t.byteLength)),!R.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(a===void 0&&(a=0),s===void 0&&(s=t?t.length:0),l===void 0&&(l=0),_===void 0&&(_=this.length),a<0||s>t.length||l<0||_>this.length)throw new RangeError("out of range index");if(l>=_&&a>=s)return 0;if(l>=_)return-1;if(a>=s)return 1;if(a>>>=0,s>>>=0,l>>>=0,_>>>=0,this===t)return 0;for(var f=_-l,T=s-a,y=Math.min(f,T),x=this.slice(l,_),v=t.slice(a,s),b=0;b<y;++b)if(x[b]!==v[b]){f=x[b],T=v[b];break}return f<T?-1:T<f?1:0};function Sg(n,t,a,s,l){if(n.length===0)return-1;if(typeof a=="string"?(s=a,a=0):a>2147483647?a=2147483647:a<-2147483648&&(a=-2147483648),a=+a,td(a)&&(a=l?0:n.length-1),a<0&&(a=n.length+a),a>=n.length){if(l)return-1;a=n.length-1}else if(a<0)if(l)a=0;else return-1;if(typeof t=="string"&&(t=R.from(t,s)),R.isBuffer(t))return t.length===0?-1:fg(n,t,a,s,l);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(n,t,a):Uint8Array.prototype.lastIndexOf.call(n,t,a):fg(n,[t],a,s,l);throw new TypeError("val must be string, number or Buffer")}function fg(n,t,a,s,l){var _=1,f=n.length,T=t.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(n.length<2||t.length<2)return-1;_=2,f/=2,T/=2,a/=2}function y(N,O){return _===1?N[O]:N.readUInt16BE(O*_)}var x;if(l){var v=-1;for(x=a;x<f;x++)if(y(n,x)===y(t,v===-1?0:x-v)){if(v===-1&&(v=x),x-v+1===T)return v*_}else v!==-1&&(x-=x-v),v=-1}else for(a+T>f&&(a=f-T),x=a;x>=0;x--){for(var b=!0,I=0;I<T;I++)if(y(n,x+I)!==y(t,I)){b=!1;break}if(b)return x}return-1}R.prototype.includes=function(t,a,s){return this.indexOf(t,a,s)!==-1};R.prototype.indexOf=function(t,a,s){return Sg(this,t,a,s,!0)};R.prototype.lastIndexOf=function(t,a,s){return Sg(this,t,a,s,!1)};function hP(n,t,a,s){a=Number(a)||0;var l=n.length-a;s?(s=Number(s),s>l&&(s=l)):s=l;var _=t.length;s>_/2&&(s=_/2);for(var f=0;f<s;++f){var T=parseInt(t.substr(f*2,2),16);if(td(T))return f;n[a+f]=T}return f}function xP(n,t,a,s){return ls(ed(t,n.length-a),n,a,s)}function TP(n,t,a,s){return ls(kP(t),n,a,s)}function yP(n,t,a,s){return ls(Lg(t),n,a,s)}function SP(n,t,a,s){return ls(NP(t,n.length-a),n,a,s)}R.prototype.write=function(t,a,s,l){if(a===void 0)l="utf8",s=this.length,a=0;else if(s===void 0&&typeof a=="string")l=a,s=this.length,a=0;else if(isFinite(a))a=a>>>0,isFinite(s)?(s=s>>>0,l===void 0&&(l="utf8")):(l=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var _=this.length-a;if((s===void 0||s>_)&&(s=_),t.length>0&&(s<0||a<0)||a>this.length)throw new RangeError("Attempt to write outside buffer bounds");l||(l="utf8");for(var f=!1;;)switch(l){case"hex":return hP(this,t,a,s);case"utf8":case"utf-8":return xP(this,t,a,s);case"ascii":case"latin1":case"binary":return TP(this,t,a,s);case"base64":return yP(this,t,a,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return SP(this,t,a,s);default:if(f)throw new TypeError("Unknown encoding: "+l);l=(""+l).toLowerCase(),f=!0}};R.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function bP(n,t,a){return t===0&&a===n.length?Zp.fromByteArray(n):Zp.fromByteArray(n.slice(t,a))}function bg(n,t,a){a=Math.min(n.length,a);for(var s=[],l=t;l<a;){var _=n[l],f=null,T=_>239?4:_>223?3:_>191?2:1;if(l+T<=a){var y,x,v,b;switch(T){case 1:_<128&&(f=_);break;case 2:y=n[l+1],(y&192)===128&&(b=(_&31)<<6|y&63,b>127&&(f=b));break;case 3:y=n[l+1],x=n[l+2],(y&192)===128&&(x&192)===128&&(b=(_&15)<<12|(y&63)<<6|x&63,b>2047&&(b<55296||b>57343)&&(f=b));break;case 4:y=n[l+1],x=n[l+2],v=n[l+3],(y&192)===128&&(x&192)===128&&(v&192)===128&&(b=(_&15)<<18|(y&63)<<12|(x&63)<<6|v&63,b>65535&&b<1114112&&(f=b))}}f===null?(f=65533,T=1):f>65535&&(f-=65536,s.push(f>>>10&1023|55296),f=56320|f&1023),s.push(f),l+=T}return wP(s)}var hg=4096;function wP(n){var t=n.length;if(t<=hg)return String.fromCharCode.apply(String,n);for(var a="",s=0;s<t;)a+=String.fromCharCode.apply(String,n.slice(s,s+=hg));return a}function vP(n,t,a){var s="";a=Math.min(n.length,a);for(var l=t;l<a;++l)s+=String.fromCharCode(n[l]&127);return s}function CP(n,t,a){var s="";a=Math.min(n.length,a);for(var l=t;l<a;++l)s+=String.fromCharCode(n[l]);return s}function LP(n,t,a){var s=n.length;(!t||t<0)&&(t=0),(!a||a<0||a>s)&&(a=s);for(var l="",_=t;_<a;++_)l+=EP[n[_]];return l}function AP(n,t,a){for(var s=n.slice(t,a),l="",_=0;_<s.length-1;_+=2)l+=String.fromCharCode(s[_]+s[_+1]*256);return l}R.prototype.slice=function(t,a){var s=this.length;t=~~t,a=a===void 0?s:~~a,t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),a<0?(a+=s,a<0&&(a=0)):a>s&&(a=s),a<t&&(a=t);var l=this.subarray(t,a);return Object.setPrototypeOf(l,R.prototype),l};function un(n,t,a){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+t>a)throw new RangeError("Trying to access beyond buffer length")}R.prototype.readUintLE=R.prototype.readUIntLE=function(t,a,s){t=t>>>0,a=a>>>0,s||un(t,a,this.length);for(var l=this[t],_=1,f=0;++f<a&&(_*=256);)l+=this[t+f]*_;return l};R.prototype.readUintBE=R.prototype.readUIntBE=function(t,a,s){t=t>>>0,a=a>>>0,s||un(t,a,this.length);for(var l=this[t+--a],_=1;a>0&&(_*=256);)l+=this[t+--a]*_;return l};R.prototype.readUint8=R.prototype.readUInt8=function(t,a){return t=t>>>0,a||un(t,1,this.length),this[t]};R.prototype.readUint16LE=R.prototype.readUInt16LE=function(t,a){return t=t>>>0,a||un(t,2,this.length),this[t]|this[t+1]<<8};R.prototype.readUint16BE=R.prototype.readUInt16BE=function(t,a){return t=t>>>0,a||un(t,2,this.length),this[t]<<8|this[t+1]};R.prototype.readUint32LE=R.prototype.readUInt32LE=function(t,a){return t=t>>>0,a||un(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216};R.prototype.readUint32BE=R.prototype.readUInt32BE=function(t,a){return t=t>>>0,a||un(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])};R.prototype.readIntLE=function(t,a,s){t=t>>>0,a=a>>>0,s||un(t,a,this.length);for(var l=this[t],_=1,f=0;++f<a&&(_*=256);)l+=this[t+f]*_;return _*=128,l>=_&&(l-=Math.pow(2,8*a)),l};R.prototype.readIntBE=function(t,a,s){t=t>>>0,a=a>>>0,s||un(t,a,this.length);for(var l=a,_=1,f=this[t+--l];l>0&&(_*=256);)f+=this[t+--l]*_;return _*=128,f>=_&&(f-=Math.pow(2,8*a)),f};R.prototype.readInt8=function(t,a){return t=t>>>0,a||un(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]};R.prototype.readInt16LE=function(t,a){t=t>>>0,a||un(t,2,this.length);var s=this[t]|this[t+1]<<8;return s&32768?s|4294901760:s};R.prototype.readInt16BE=function(t,a){t=t>>>0,a||un(t,2,this.length);var s=this[t+1]|this[t]<<8;return s&32768?s|4294901760:s};R.prototype.readInt32LE=function(t,a){return t=t>>>0,a||un(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24};R.prototype.readInt32BE=function(t,a){return t=t>>>0,a||un(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]};R.prototype.readFloatLE=function(t,a){return t=t>>>0,a||un(t,4,this.length),kr.read(this,t,!0,23,4)};R.prototype.readFloatBE=function(t,a){return t=t>>>0,a||un(t,4,this.length),kr.read(this,t,!1,23,4)};R.prototype.readDoubleLE=function(t,a){return t=t>>>0,a||un(t,8,this.length),kr.read(this,t,!0,52,8)};R.prototype.readDoubleBE=function(t,a){return t=t>>>0,a||un(t,8,this.length),kr.read(this,t,!1,52,8)};function Un(n,t,a,s,l,_){if(!R.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>l||t<_)throw new RangeError('"value" argument is out of bounds');if(a+s>n.length)throw new RangeError("Index out of range")}R.prototype.writeUintLE=R.prototype.writeUIntLE=function(t,a,s,l){if(t=+t,a=a>>>0,s=s>>>0,!l){var _=Math.pow(2,8*s)-1;Un(this,t,a,s,_,0)}var f=1,T=0;for(this[a]=t&255;++T<s&&(f*=256);)this[a+T]=t/f&255;return a+s};R.prototype.writeUintBE=R.prototype.writeUIntBE=function(t,a,s,l){if(t=+t,a=a>>>0,s=s>>>0,!l){var _=Math.pow(2,8*s)-1;Un(this,t,a,s,_,0)}var f=s-1,T=1;for(this[a+f]=t&255;--f>=0&&(T*=256);)this[a+f]=t/T&255;return a+s};R.prototype.writeUint8=R.prototype.writeUInt8=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,1,255,0),this[a]=t&255,a+1};R.prototype.writeUint16LE=R.prototype.writeUInt16LE=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,2,65535,0),this[a]=t&255,this[a+1]=t>>>8,a+2};R.prototype.writeUint16BE=R.prototype.writeUInt16BE=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,2,65535,0),this[a]=t>>>8,this[a+1]=t&255,a+2};R.prototype.writeUint32LE=R.prototype.writeUInt32LE=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,4,4294967295,0),this[a+3]=t>>>24,this[a+2]=t>>>16,this[a+1]=t>>>8,this[a]=t&255,a+4};R.prototype.writeUint32BE=R.prototype.writeUInt32BE=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,4,4294967295,0),this[a]=t>>>24,this[a+1]=t>>>16,this[a+2]=t>>>8,this[a+3]=t&255,a+4};R.prototype.writeIntLE=function(t,a,s,l){if(t=+t,a=a>>>0,!l){var _=Math.pow(2,8*s-1);Un(this,t,a,s,_-1,-_)}var f=0,T=1,y=0;for(this[a]=t&255;++f<s&&(T*=256);)t<0&&y===0&&this[a+f-1]!==0&&(y=1),this[a+f]=(t/T>>0)-y&255;return a+s};R.prototype.writeIntBE=function(t,a,s,l){if(t=+t,a=a>>>0,!l){var _=Math.pow(2,8*s-1);Un(this,t,a,s,_-1,-_)}var f=s-1,T=1,y=0;for(this[a+f]=t&255;--f>=0&&(T*=256);)t<0&&y===0&&this[a+f+1]!==0&&(y=1),this[a+f]=(t/T>>0)-y&255;return a+s};R.prototype.writeInt8=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,1,127,-128),t<0&&(t=255+t+1),this[a]=t&255,a+1};R.prototype.writeInt16LE=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,2,32767,-32768),this[a]=t&255,this[a+1]=t>>>8,a+2};R.prototype.writeInt16BE=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,2,32767,-32768),this[a]=t>>>8,this[a+1]=t&255,a+2};R.prototype.writeInt32LE=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,4,2147483647,-2147483648),this[a]=t&255,this[a+1]=t>>>8,this[a+2]=t>>>16,this[a+3]=t>>>24,a+4};R.prototype.writeInt32BE=function(t,a,s){return t=+t,a=a>>>0,s||Un(this,t,a,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[a]=t>>>24,this[a+1]=t>>>16,this[a+2]=t>>>8,this[a+3]=t&255,a+4};function wg(n,t,a,s,l,_){if(a+s>n.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("Index out of range")}function vg(n,t,a,s,l){return t=+t,a=a>>>0,l||wg(n,t,a,4,34028234663852886e22,-34028234663852886e22),kr.write(n,t,a,s,23,4),a+4}R.prototype.writeFloatLE=function(t,a,s){return vg(this,t,a,!0,s)};R.prototype.writeFloatBE=function(t,a,s){return vg(this,t,a,!1,s)};function Cg(n,t,a,s,l){return t=+t,a=a>>>0,l||wg(n,t,a,8,17976931348623157e292,-17976931348623157e292),kr.write(n,t,a,s,52,8),a+8}R.prototype.writeDoubleLE=function(t,a,s){return Cg(this,t,a,!0,s)};R.prototype.writeDoubleBE=function(t,a,s){return Cg(this,t,a,!1,s)};R.prototype.copy=function(t,a,s,l){if(!R.isBuffer(t))throw new TypeError("argument should be a Buffer");if(s||(s=0),!l&&l!==0&&(l=this.length),a>=t.length&&(a=t.length),a||(a=0),l>0&&l<s&&(l=s),l===s||t.length===0||this.length===0)return 0;if(a<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(l<0)throw new RangeError("sourceEnd out of bounds");l>this.length&&(l=this.length),t.length-a<l-s&&(l=t.length-a+s);var _=l-s;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(a,s,l):Uint8Array.prototype.set.call(t,this.subarray(s,l),a),_};R.prototype.fill=function(t,a,s,l){if(typeof t=="string"){if(typeof a=="string"?(l=a,a=0,s=this.length):typeof s=="string"&&(l=s,s=this.length),l!==void 0&&typeof l!="string")throw new TypeError("encoding must be a string");if(typeof l=="string"&&!R.isEncoding(l))throw new TypeError("Unknown encoding: "+l);if(t.length===1){var _=t.charCodeAt(0);(l==="utf8"&&_<128||l==="latin1")&&(t=_)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(a<0||this.length<a||this.length<s)throw new RangeError("Out of range index");if(s<=a)return this;a=a>>>0,s=s===void 0?this.length:s>>>0,t||(t=0);var f;if(typeof t=="number")for(f=a;f<s;++f)this[f]=t;else{var T=R.isBuffer(t)?t:R.from(t,l),y=T.length;if(y===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(f=0;f<s-a;++f)this[f+a]=T[f%y]}return this};var IP=/[^+/0-9A-Za-z-_]/g;function PP(n){if(n=n.split("=")[0],n=n.trim().replace(IP,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function ed(n,t){t=t||1/0;for(var a,s=n.length,l=null,_=[],f=0;f<s;++f){if(a=n.charCodeAt(f),a>55295&&a<57344){if(!l){if(a>56319){(t-=3)>-1&&_.push(239,191,189);continue}else if(f+1===s){(t-=3)>-1&&_.push(239,191,189);continue}l=a;continue}if(a<56320){(t-=3)>-1&&_.push(239,191,189),l=a;continue}a=(l-55296<<10|a-56320)+65536}else l&&(t-=3)>-1&&_.push(239,191,189);if(l=null,a<128){if((t-=1)<0)break;_.push(a)}else if(a<2048){if((t-=2)<0)break;_.push(a>>6|192,a&63|128)}else if(a<65536){if((t-=3)<0)break;_.push(a>>12|224,a>>6&63|128,a&63|128)}else if(a<1114112){if((t-=4)<0)break;_.push(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}else throw new Error("Invalid code point")}return _}function kP(n){for(var t=[],a=0;a<n.length;++a)t.push(n.charCodeAt(a)&255);return t}function NP(n,t){for(var a,s,l,_=[],f=0;f<n.length&&!((t-=2)<0);++f)a=n.charCodeAt(f),s=a>>8,l=a%256,_.push(l),_.push(s);return _}function Lg(n){return Zp.toByteArray(PP(n))}function ls(n,t,a,s){for(var l=0;l<s&&!(l+a>=t.length||l>=n.length);++l)t[l+a]=n[l];return l}function Do(n,t){return n instanceof t||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===t.name}function td(n){return n!==n}var EP=function(){for(var n="0123456789abcdef",t=new Array(256),a=0;a<16;++a)for(var s=a*16,l=0;l<16;++l)t[s+l]=n[a]+n[l];return t}()});var Eg=$((b5,Ng)=>{r();var Ze=Ng.exports={},Mo,Bo;function rd(){throw new Error("setTimeout has not been defined")}function ad(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Mo=setTimeout:Mo=rd}catch(n){Mo=rd}try{typeof clearTimeout=="function"?Bo=clearTimeout:Bo=ad}catch(n){Bo=ad}})();function Ig(n){if(Mo===setTimeout)return setTimeout(n,0);if((Mo===rd||!Mo)&&setTimeout)return Mo=setTimeout,setTimeout(n,0);try{return Mo(n,0)}catch(t){try{return Mo.call(null,n,0)}catch(a){return Mo.call(this,n,0)}}}function RP(n){if(Bo===clearTimeout)return clearTimeout(n);if((Bo===ad||!Bo)&&clearTimeout)return Bo=clearTimeout,clearTimeout(n);try{return Bo(n)}catch(t){try{return Bo.call(null,n)}catch(a){return Bo.call(this,n)}}}var rt=[],Er=!1,Qt,_s=-1;function DP(){!Er||!Qt||(Er=!1,Qt.length?rt=Qt.concat(rt):_s=-1,rt.length&&Pg())}function Pg(){if(!Er){var n=Ig(DP);Er=!0;for(var t=rt.length;t;){for(Qt=rt,rt=[];++_s<t;)Qt&&Qt[_s].run();_s=-1,t=rt.length}Qt=null,Er=!1,RP(n)}}Ze.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];rt.push(new kg(n,t)),rt.length===1&&!Er&&Ig(Pg)};function kg(n,t){this.fun=n,this.array=t}kg.prototype.run=function(){this.fun.apply(null,this.array)};Ze.title="browser";Ze.browser=!0;Ze.env={};Ze.argv=[];Ze.version="";Ze.versions={};function at(){}Ze.on=at;Ze.addListener=at;Ze.once=at;Ze.off=at;Ze.removeListener=at;Ze.removeAllListeners=at;Ze.emit=at;Ze.prependListener=at;Ze.prependOnceListener=at;Ze.listeners=function(n){return[]};Ze.binding=function(n){throw new Error("process.binding is not supported")};Ze.cwd=function(){return"/"};Ze.chdir=function(n){throw new Error("process.chdir is not supported")};Ze.umask=function(){return 0}});var d,m,MP,p,r=G(()=>{d=M(Ag()),m=M(Eg()),MP=function(n){function t(){var s=this||self;return delete n.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return t();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:t});var a=__magic__;return a}(Object),p=MP});var it,er=G(()=>{"use strict";r();it=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var id={};Ee(id,{css:()=>Dg,default:()=>BP});var Dg,BP,sd=G(()=>{"use strict";r();Dg=`.dapp-core-component__main__link-style {
  color: #1392ff;
}

.dapp-core-component__main__link-second-style {
  color: #9dabbd;
}
.dapp-core-component__main__link-second-style:hover {
  color: #1392ff;
}
.dapp-core-component__main__link-second-style:hover svg {
  color: #1392ff;
}

.dapp-core-component__main__wrapper {
  min-height: 100vh;
}

.dapp-core-component__main__opacity-6 {
  opacity: 0.6;
}

.dapp-core-component__main__qr-code-svg-container {
  width: 15rem;
  height: 15rem;
}

.dapp-core-component__main__pair-list {
  max-height: 20rem;
  overflow-y: auto;
  margin-bottom: -0.5rem;
}

.dapp-core-component__main__pair-loader,
.dapp-core-component__main__pair-image {
  width: 4rem;
  overflow: hidden;
  height: auto;
  min-width: 2rem;
  margin: 0;
  padding: 0;
}

.dapp-core-component__main__pair-remove {
  padding: 0 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
}

.dapp-core-component__main__dapp-icon {
  padding: 5px;
  border-radius: 50%;
  background-color: #fafafa;
  width: calc(65 / 14)rem;
  height: calc(65 / 14)rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.dapp-core-component__main__dapp-icon.dapp-core-component__main__icon-medium {
  width: 80px;
  height: 80px;
}

.dapp-core-component__main__centering {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dapp-core-component__main__border-n {
  border: none;
}

.dapp-core-component__main__t-shadow {
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
}

.dapp-core-component__main__btn {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}

.dapp-core-component__main__media {
  display: flex;
  align-items: flex-start;
}

.dapp-core-component__main__media-body {
  flex: 1;
}

.dapp-core-component__main__connect-btns .dapp-core-component__main__btn {
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #1392ff;
  padding: 15px 20px 15px 16px;
  border-radius: 6px;
  gap: 8px;
}
.dapp-core-component__main__connect-btns .dapp-core-component__main__btn:hover, .dapp-core-component__main__connect-btns .dapp-core-component__main__btn:active {
  background-color: #1392ff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
}
.dapp-core-component__main__connect-btns .dapp-core-component__main__info {
  color: #1392ff;
  margin-left: 48px;
}

.dapp-core-component__main__btn {
  transition: none;
}

.dapp-core-component__main__trust-badge {
  width: 20px;
  height: 20px;
}

/* Navbar
  -------------------------------------------------- */
.dapp-core-component__main__navbar .dapp-core-component__main__dapp-name {
  display: flex;
  align-items: center;
  font-size: calc(24 / 14)rem;
  font-weight: 400;
  color: #9ba5b4;
  margin-left: 1.6428571429rem;
}
.dapp-core-component__main__navbar .dapp-core-component__main__dapp-name:before {
  content: "";
  display: block;
  width: 1px;
  height: calc(42 / 14)rem;
  margin-right: calc(24 / 14)rem;
}

/* Dashboard
  -------------------------------------------------- */
.dapp-core-component__main__action-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 0 7px;
}
.dapp-core-component__main__action-btn button {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #fff;
}
.dapp-core-component__main__action-btn button:hover {
  opacity: 0.9;
}

.dapp-core-component__main__transactions .dapp-core-component__main__transaction-icon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.dapp-core-component__main__transactions.dapp-core-component__main__table td {
  white-space: nowrap;
  vertical-align: middle;
}
.dapp-core-component__main__transactions.dapp-core-component__main__table tr:last-of-type td {
  border-bottom: 1px solid #dee2e6;
}

/* Loader, Transaction Success/Fail
  -------------------------------------------------- */
.dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.dapp-core-component__main__page-state .dapp-core-component__main__bg-blue .dapp-core-component__main__lds-ellipsis div {
  background: rgba(255, 255, 255, 0.4);
}
.dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: dapp-core-component__main__lds-ellipsis1 0.6s infinite;
}
.dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: dapp-core-component__main__lds-ellipsis2 0.6s infinite;
}
.dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: dapp-core-component__main__lds-ellipsis2 0.6s infinite;
}
.dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: dapp-core-component__main__lds-ellipsis3 0.6s infinite;
}
@keyframes dapp-core-component__main__lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes dapp-core-component__main__lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes dapp-core-component__main__lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

.dapp-core-component__main__btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
}

.dapp-core-component__main__btn .dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(27, 70, 194, 0.25);
}

.dapp-core-component__main__btn .dapp-core-component__main__disabled {
  opacity: 0.65;
  cursor: default;
}

.dapp-core-component__main__btn:hover {
  color: #212529;
  text-decoration: none;
}

.dapp-core-component__main__btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(27, 70, 194, 0.25);
}

.dapp-core-component__main__btn:disabled {
  opacity: 0.65;
  cursor: default;
}

.dapp-core-component__main__btn-primary {
  color: #fff;
  background-color: #1b46c2;
  border-color: #007bff;
}

.dapp-core-component__main__btn-primary .dapp-core-component__main__focus {
  color: #fff;
  background-color: #1b46c2;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.dapp-core-component__main__btn-primary .dapp-core-component__main__disabled {
  color: #fff;
  background-color: #1b46c2;
  border-color: #007bff;
}

.dapp-core-component__main__btn-primary:hover {
  color: #fff;
  background-color: #1b46c2;
  border-color: #0062cc;
}

.dapp-core-component__main__btn-primary:focus {
  color: #fff;
  background-color: #1b46c2;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.dapp-core-component__main__btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #007bff;
}

.dapp-core-component__main__btn-secondary .dapp-core-component__main__focus {
  color: #fff;
  background-color: #6c757d;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.dapp-core-component__main__btn-secondary .dapp-core-component__main__disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #007bff;
}

.dapp-core-component__main__btn-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #0062cc;
}

.dapp-core-component__main__btn-secondary:focus {
  color: #fff;
  background-color: #6c757d;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.dapp-core-component__main__btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.dapp-core-component__main__btn-warning .dapp-core-component__main__focus {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
}

.dapp-core-component__main__btn-warning .dapp-core-component__main__disabled {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.dapp-core-component__main__btn-warning:hover {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
}

.dapp-core-component__main__btn-warning:focus {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
}

.dapp-core-component__main__btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.dapp-core-component__main__btn-dark .dapp-core-component__main__focus {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
}

.dapp-core-component__main__btn-dark .dapp-core-component__main__disabled {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.dapp-core-component__main__btn-dark:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}

.dapp-core-component__main__btn-dark:focus {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
}

.dapp-core-component__main__btn-link {
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
}

.dapp-core-component__main__btn-link:hover {
  color: rgb(0, 86.1, 178.5);
  text-decoration: underline;
}

.dapp-core-component__main__btn-link:focus, .dapp-core-component__main__btn-link.dapp-core-component__main__focus {
  text-decoration: underline;
}

.dapp-core-component__main__btn-link:disabled, .dapp-core-component__main__btn-link.dapp-core-component__main__disabled {
  color: #6c757d;
  pointer-events: none;
}

.dapp-core-component__main__btn-light {
  color: #212529;
  background-color: #fafafa;
  border-color: #fafafa;
}

.dapp-core-component__main__btn-light .dapp-core-component__main__focus {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
}

.dapp-core-component__main__btn-light .dapp-core-component__main__disabled {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.dapp-core-component__main__btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}

.dapp-core-component__main__btn-light:focus {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
}

.dapp-core-component__main__badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: pre-wrap;
  word-break: break-all;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .dapp-core-component__main__badge {
    transition: none;
  }
}
a.dapp-core-component__main__badge:hover, a.dapp-core-component__main__badge:focus {
  text-decoration: none;
}

.dapp-core-component__main__badge:empty {
  display: none;
}

.dapp-core-component__main__btn .dapp-core-component__main__badge {
  position: relative;
  top: -1px;
}

.dapp-core-component__main__badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.dapp-core-component__main__badge-primary {
  color: #fff;
  background-color: #007bff;
}

a.dapp-core-component__main__badge-primary:hover, a.dapp-core-component__main__badge-primary:focus {
  color: #fff;
  background-color: #0062cc;
}

a.dapp-core-component__main__badge-primary:focus, a.dapp-core-component__main__badge-primary.dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.dapp-core-component__main__badge-secondary {
  color: #fff;
  background-color: #6c757d;
}

a.dapp-core-component__main__badge-secondary:hover, a.dapp-core-component__main__badge-secondary:focus {
  color: #fff;
  background-color: #545b62;
}

a.dapp-core-component__main__badge-secondary:focus, a.dapp-core-component__main__badge-secondary.dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.dapp-core-component__main__badge-success {
  color: #fff;
  background-color: #28a745;
}

a.dapp-core-component__main__badge-success:hover, a.dapp-core-component__main__badge-success:focus {
  color: #fff;
  background-color: #1e7e34;
}

a.dapp-core-component__main__badge-success:focus, a.dapp-core-component__main__badge-success.dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.dapp-core-component__main__badge-info {
  color: #fff;
  background-color: #17a2b8;
}

a.dapp-core-component__main__badge-info:hover, a.dapp-core-component__main__badge-info:focus {
  color: #fff;
  background-color: #117a8b;
}

a.dapp-core-component__main__badge-info:focus, a.dapp-core-component__main__badge-info.dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.dapp-core-component__main__badge-warning {
  color: #212529;
  background-color: #ffc107;
}

a.dapp-core-component__main__badge-warning:hover, a.dapp-core-component__main__badge-warning:focus {
  color: #212529;
  background-color: #d39e00;
}

a.dapp-core-component__main__badge-warning:focus, a.dapp-core-component__main__badge-warning.dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.dapp-core-component__main__badge-danger {
  color: #fff;
  background-color: #dc3545;
}

a.dapp-core-component__main__badge-danger:hover, a.dapp-core-component__main__badge-danger:focus {
  color: #fff;
  background-color: #bd2130;
}

a.dapp-core-component__main__badge-danger:focus, a.dapp-core-component__main__badge-danger.dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.dapp-core-component__main__badge-light {
  color: #212529;
  background-color: #f8f9fa;
}

a.dapp-core-component__main__badge-light:hover, a.dapp-core-component__main__badge-light:focus {
  color: #212529;
  background-color: #dae0e5;
}

a.dapp-core-component__main__badge-light:focus, a.dapp-core-component__main__badge-light.dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.dapp-core-component__main__badge-dark {
  color: #fff;
  background-color: #343a40;
}

a.dapp-core-component__main__badge-dark:hover, a.dapp-core-component__main__badge-dark:focus {
  color: #fff;
  background-color: #1d2124;
}

a.dapp-core-component__main__badge-dark:focus, a.dapp-core-component__main__badge-dark.dapp-core-component__main__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.dapp-core-component__main__card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
}

.dapp-core-component__main__card > hr {
  margin-right: 0;
  margin-left: 0;
}

.dapp-core-component__main__card > .dapp-core-component__main__list-group {
  border-top: inherit;
  border-bottom: inherit;
}

.dapp-core-component__main__card > .dapp-core-component__main__list-group:first-child {
  border-top-width: 0;
}

.dapp-core-component__main__card > .dapp-core-component__main__list-group:last-child {
  border-bottom-width: 0;
}

.dapp-core-component__main__card > .dapp-core-component__main__card-header + .dapp-core-component__main__list-group,
.dapp-core-component__main__card > .dapp-core-component__main__list-group + .dapp-core-component__main__card-footer {
  border-top: 0;
}

.dapp-core-component__main__card .dapp-core-component__main__card-header {
  border: 0;
  padding: 0;
}

.dapp-core-component__main__card .dapp-core-component__main__card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.dapp-core-component__main__card .dapp-core-component__main__card-header .dapp-core-component__main__card-header-item {
  border-bottom: 1px solid #dee2e6;
  padding: 1.1rem 1rem;
}

.dapp-core-component__main__card .dapp-core-component__main__card-header .dapp-core-component__main__card-header-item h6,
.dapp-core-component__main__card .dapp-core-component__main__card-header .dapp-core-component__main__card-header-item .dapp-core-component__main__h6 {
  line-height: 2.5rem;
  letter-spacing: unset;
  margin: 0;
}

.dapp-core-component__main__card .dapp-core-component__main__card-header .dapp-core-component__main__card-header-item.dapp-core-component__main__compact {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: #fafafa;
}

.dapp-core-component__main__card-body {
  flex: 1 1 auto;
  height: 100%;
  min-height: 1px;
  padding: 1.25rem;
}

.dapp-core-component__main__card-title {
  margin-bottom: 0.75rem;
}

.dapp-core-component__main__card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.dapp-core-component__main__card-text:last-child {
  margin-bottom: 0;
}

.dapp-core-component__main__card-link:hover {
  text-decoration: none;
}

.dapp-core-component__main__card-link + .dapp-core-component__main__card-link {
  margin-left: 1.25rem;
}

.dapp-core-component__main__card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.dapp-core-component__main__card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.dapp-core-component__main__text {
  color: #9dabbd;
}

.dapp-core-component__main__text-white {
  color: #fff;
}

.dapp-core-component__main__text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.dapp-core-component__main__table .dapp-core-component__main__trim-size-xl .dapp-core-component__main__trim {
  max-width: 13rem;
}

.dapp-core-component__main__table .dapp-core-component__main__trim {
  max-width: 10rem;
}

.dapp-core-component__main__table .dapp-core-component__main__trim-only-sm .dapp-core-component__main__trim {
  max-width: none;
}

.dapp-core-component__main__text-justify {
  text-align: justify;
}

.dapp-core-component__main__text-wrap {
  white-space: normal;
}

.dapp-core-component__main__text-nowrap {
  white-space: nowrap;
}

.dapp-core-component__main__text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dapp-core-component__main__text-left {
  text-align: left;
}

.dapp-core-component__main__text-right {
  text-align: right;
}

.dapp-core-component__main__text-center {
  text-align: center;
}

.dapp-core-component__main__text-primary {
  color: #1b46c2;
}

.dapp-core-component__main__text-secondary {
  color: #6c757d;
}

.dapp-core-component__main__text-primary-highlight {
  color: #1b46c2;
}

.dapp-core-component__main__text-muted {
  color: #6c757d;
}

.dapp-core-component__main__text-success {
  color: #28a745;
}

.dapp-core-component__main__text-justify {
  text-align: justify;
}

.dapp-core-component__main__text-wrap {
  white-space: normal;
}

.dapp-core-component__main__text-nowrap {
  white-space: nowrap;
}

.dapp-core-component__main__text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dapp-core-component__main__text-body {
  color: #212529;
}

.dapp-core-component__main__text-muted {
  color: #6c757d;
}

.dapp-core-component__main__text-black-50 {
  color: rgba(0, 0, 0, 0.5);
}

.dapp-core-component__main__text-white-50 {
  color: rgba(255, 255, 255, 0.5);
}

@media (min-width: 992px) {
  .dapp-core-component__main__text-lg-right {
    text-align: right;
  }
}
.dapp-core-component__main__text-hide {
  font: 0/0 a;
  color: rgba(0, 0, 0, 0);
  text-shadow: none;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

.dapp-core-component__main__text-decoration-none {
  text-decoration: none;
}

.dapp-core-component__main__text-break {
  word-break: break-word;
  word-wrap: break-word;
}

.dapp-core-component__main__text-reset {
  color: inherit;
}

.dapp-core-component__main__text-lowercase {
  text-transform: lowercase;
}

.dapp-core-component__main__text-uppercase {
  text-transform: uppercase;
}

.dapp-core-component__main__text-capitalize {
  text-transform: capitalize;
}

.dapp-core-component__main__text-danger {
  color: #d9534f;
}

.dapp-core-component__main__text-warning {
  color: #f0ad4e;
}

.dapp-core-component__main__trim-fs-sm {
  color: inherit;
}

.dapp-core-component__main__text-break {
  word-break: break-word;
  word-wrap: break-word;
}

.dapp-core-component__main__mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.dapp-core-component__main__m-0 {
  margin: 0;
}

.dapp-core-component__main__mt-0 {
  margin-top: 0;
}

.dapp-core-component__main__my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.dapp-core-component__main__mr-0 {
  margin-right: 0;
}

.dapp-core-component__main__mx-0 {
  margin-right: 0;
  margin-left: 0;
}

.dapp-core-component__main__mb-0 {
  margin-bottom: 0;
}

.dapp-core-component__main__my-0 {
  margin-bottom: 0;
  margin-top: 0;
}

.dapp-core-component__main__ml-0 {
  margin-left: 0;
}

.dapp-core-component__main__mx-0 {
  margin-left: 0;
  margin-right: 0;
}

.dapp-core-component__main__m-1 {
  margin: 0.25rem;
}

.dapp-core-component__main__mt-1 {
  margin-top: 0.25rem;
}

.dapp-core-component__main__my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.dapp-core-component__main__mr-1 {
  margin-right: 0.25rem;
}

.dapp-core-component__main__mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.dapp-core-component__main__mb-1 {
  margin-bottom: 0.25rem;
}

.dapp-core-component__main__my-1 {
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
}

.dapp-core-component__main__ml-1 {
  margin-left: 0.25rem;
}

.dapp-core-component__main__mx-1 {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}

.dapp-core-component__main__m-2 {
  margin: 0.5rem;
}

.dapp-core-component__main__mt-2 {
  margin-top: 0.5rem;
}

.dapp-core-component__main__my-2 {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.dapp-core-component__main__mr-2 {
  margin-right: 0.5rem;
}

.dapp-core-component__main__mx-2 {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.dapp-core-component__main__mb-2 {
  margin-bottom: 0.5rem;
}

.dapp-core-component__main__my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.dapp-core-component__main__ml-2 {
  margin-left: 0.5rem;
}

.dapp-core-component__main__mx-2 {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.dapp-core-component__main__m-3 {
  margin: 1rem;
}

.dapp-core-component__main__mt-3,
.dapp-core-component__main__my-3 {
  margin-top: 1rem;
}

.dapp-core-component__main__mr-3 {
  margin-right: 1rem;
}

.dapp-core-component__main__mx-3 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.dapp-core-component__main__mb-3 {
  margin-bottom: 1rem;
}

.dapp-core-component__main__my-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.dapp-core-component__main__ml-3 {
  margin-left: 1rem;
}

.dapp-core-component__main__mx-3 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.dapp-core-component__main__m-4 {
  margin: 1.5rem;
}

.dapp-core-component__main__mt-4 {
  margin-top: 1.5rem;
}

.dapp-core-component__main__my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.dapp-core-component__main__mr-4 {
  margin-right: 1.5rem;
}

.dapp-core-component__main__mx-4 {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.dapp-core-component__main__mb-4 {
  margin-bottom: 1.5rem;
}

.dapp-core-component__main__my-4 {
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

.dapp-core-component__main__ml-4 {
  margin-left: 1.5rem;
}

.dapp-core-component__main__mx-4 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.dapp-core-component__main__m-5 {
  margin: 3rem;
}

.dapp-core-component__main__mt-5 {
  margin-top: 3rem;
}

.dapp-core-component__main__my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.dapp-core-component__main__mr-5 {
  margin-right: 3rem;
}

.dapp-core-component__main__mx-5 {
  margin-right: 3rem;
  margin-left: 3rem;
}

.dapp-core-component__main__mb-5 {
  margin-bottom: 3rem;
}

.dapp-core-component__main__my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.dapp-core-component__main__ml-5 {
  margin-left: 3rem;
}

.dapp-core-component__main__mx-5 {
  margin-left: 3rem;
  margin-right: 3rem;
}

.dapp-core-component__main__p-0 {
  padding: 0;
}

.dapp-core-component__main__pt-0 {
  padding-top: 0;
}

.dapp-core-component__main__py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.dapp-core-component__main__pr-0 {
  padding-right: 0;
}

.dapp-core-component__main__px-0 {
  padding-left: 0;
  padding-right: 0;
}

.dapp-core-component__main__pb-0 {
  padding-bottom: 0;
}

.dapp-core-component__main__py-0 {
  padding-bottom: 0;
  padding-top: 0;
}

.dapp-core-component__main__pl-0 {
  padding-left: 0;
}

.dapp-core-component__main__px-0 {
  padding-left: 0;
  padding-right: 0;
}

.dapp-core-component__main__p-1 {
  padding: 0.25rem;
}

.dapp-core-component__main__pt-1 {
  padding-top: 0.25rem;
}

.dapp-core-component__main__py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.dapp-core-component__main__pr-1 {
  padding-right: 0.25rem;
}

.dapp-core-component__main__px-1 {
  padding-right: 0.25rem;
  padding-left: 0.25rem;
}

.dapp-core-component__main__pb-1 {
  padding-bottom: 0.25rem;
}

.dapp-core-component__main__py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.dapp-core-component__main__pl-1 {
  padding-left: 0.25rem;
}

.dapp-core-component__main__px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.dapp-core-component__main__p-2 {
  padding: 0.5rem;
}

.dapp-core-component__main__pt-2 {
  padding-top: 0.5rem;
}

.dapp-core-component__main__py-2 {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.dapp-core-component__main__pr-2 {
  padding-right: 0.5rem;
}

.dapp-core-component__main__px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.dapp-core-component__main__pb-2 {
  padding-bottom: 0.5rem;
}

.dapp-core-component__main__py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.dapp-core-component__main__pl-2 {
  padding-left: 0.5rem;
}

.dapp-core-component__main__px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.dapp-core-component__main__p-3 {
  padding: 1rem;
}

.dapp-core-component__main__pt-3 {
  padding-top: 1rem;
}

.dapp-core-component__main__py-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.dapp-core-component__main__pr-3 {
  padding-right: 1rem;
}

.dapp-core-component__main__px-3 {
  padding-right: 1rem;
  padding-left: 1rem;
}

.dapp-core-component__main__pb-3 {
  padding-bottom: 1rem;
}

.dapp-core-component__main__py-3 {
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.dapp-core-component__main__pl-3 {
  padding-left: 1rem;
}

.dapp-core-component__main__px-3 {
  padding-right: 1rem;
  padding-left: 1rem;
}

.dapp-core-component__main__p-4 {
  padding: 1.5rem;
}

.dapp-core-component__main__pt-4 {
  padding-top: 1.5rem;
}

.dapp-core-component__main__py-4 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.dapp-core-component__main__pr-4 {
  padding-right: 1.5rem;
}

.dapp-core-component__main__px-4 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.dapp-core-component__main__pb-4 {
  padding-bottom: 1.5rem;
}

.dapp-core-component__main__py-4 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.dapp-core-component__main__pl-4 {
  padding-left: 1.5rem;
}

.dapp-core-component__main__px-4 {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

.dapp-core-component__main__p-5 {
  padding: 3rem;
}

.dapp-core-component__main__pt-5 {
  padding-top: 3rem;
}

.dapp-core-component__main__py-5 {
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.dapp-core-component__main__pr-5 {
  padding-right: 3rem;
}

.dapp-core-component__main__px-5 {
  padding-right: 3rem;
  padding-left: 3rem;
}

.dapp-core-component__main__pb-5 {
  padding-right: 3rem;
}

.dapp-core-component__main__py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.dapp-core-component__main__pl-5 {
  padding-left: 3rem;
}

.dapp-core-component__main__px-5 {
  padding-right: 3rem;
  padding-left: 3rem;
}

.dapp-core-component__main__m-n1 {
  margin: -0.25rem;
}

.dapp-core-component__main__mt-n1 {
  margin-top: -0.25rem;
}

.dapp-core-component__main__my-n1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}

.dapp-core-component__main__mr-n1 {
  margin-right: -0.25rem;
}

.dapp-core-component__main__mx-n1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.dapp-core-component__main__mb-n1 {
  margin-bottom: -0.25rem;
}

.dapp-core-component__main__my-n1 {
  margin-bottom: -0.25rem;
  margin-top: -0.25rem;
}

.dapp-core-component__main__ml-n1 {
  margin-left: -0.25rem;
}

.dapp-core-component__main__mx-n1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.dapp-core-component__main__m-n2 {
  margin: -0.5rem;
}

.dapp-core-component__main__mt-n2 {
  margin-top: -0.5rem;
}

.dapp-core-component__main__my-n2 {
  margin-top: -0.5rem;
  margin-left: -0.5rem;
}

.dapp-core-component__main__mr-n2 {
  margin-right: -0.5rem;
}

.dapp-core-component__main__mx-n2 {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.dapp-core-component__main__mb-n2 {
  margin-bottom: -0.5rem;
}

.dapp-core-component__main__my-n2 {
  margin-bottom: -0.5rem;
  margin-top: -0.5rem;
}

.dapp-core-component__main__ml-n2 {
  margin-left: -0.5rem;
}

.dapp-core-component__main__mx-n2 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.dapp-core-component__main__m-n3 {
  margin: -1rem;
}

.dapp-core-component__main__mt-n3 {
  margin-top: -1rem;
}

.dapp-core-component__main__my-n3 {
  margin-top: -1rem;
  margin-bottom: -1rem;
}

.dapp-core-component__main__mr-n3 {
  margin-right: -1rem;
}

.dapp-core-component__main__mx-n3 {
  margin-right: -1rem;
  margin-left: -1rem;
}

.dapp-core-component__main__mb-n3 {
  margin-bottom: -1rem;
}

.dapp-core-component__main__my-n3 {
  margin-bottom: -1rem;
  margin-top: -1rem;
}

.dapp-core-component__main__ml-n3 {
  margin-left: -1rem;
}

.dapp-core-component__main__mx-n3 {
  margin-left: -1rem;
  margin-right: -1rem;
}

.dapp-core-component__main__m-n4 {
  margin: -1.5rem;
}

.dapp-core-component__main__mt-n4 {
  margin-top: -1.5rem;
}

.dapp-core-component__main__my-n4 {
  margin-top: -1.5rem;
  margin-bottom: -1.5rem;
}

.dapp-core-component__main__mr-n4 {
  margin-right: -1.5rem;
}

.dapp-core-component__main__mx-n4 {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

.dapp-core-component__main__mb-n4 {
  margin-bottom: -1.5rem;
}

.dapp-core-component__main__my-n4 {
  margin-bottom: -1.5rem;
  margin-top: -1.5rem;
}

.dapp-core-component__main__ml-n4 {
  margin-left: -1.5rem;
}

.dapp-core-component__main__mx-n4 {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

.dapp-core-component__main__m-n5 {
  margin: -3rem;
}

.dapp-core-component__main__mt-n5 {
  margin-top: -3rem;
}

.dapp-core-component__main__my-n5 {
  margin-bottom: -3rem;
  margin-top: -3rem;
}

.dapp-core-component__main__mr-n5 {
  margin-right: -3rem;
}

.dapp-core-component__main__mx-n5 {
  margin-left: -3rem;
  margin-right: -3rem;
}

.dapp-core-component__main__mb-n5 {
  margin-bottom: -3rem;
}

.dapp-core-component__main__my-n5 {
  margin-top: -3rem;
  margin-bottom: -3rem;
}

.dapp-core-component__main__ml-n5 {
  margin-left: -3rem;
}

.dapp-core-component__main__mx-n5 {
  margin-right: -3rem;
  margin-left: -3rem;
}

.dapp-core-component__main__m-auto {
  margin: auto;
}

.dapp-core-component__main__mt-auto {
  margin-top: auto;
}

.dapp-core-component__main__my-auto {
  margin-bottom: auto;
  margin-top: auto;
}

.dapp-core-component__main__mr-auto {
  margin-right: auto;
}

.dapp-core-component__main__mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.dapp-core-component__main__mb-auto {
  margin-bottom: auto;
}

.dapp-core-component__main__my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.dapp-core-component__main__ml-auto {
  margin-left: auto;
}

.dapp-core-component__main__mx-auto {
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 992px) {
  .dapp-core-component__main__mr-lg-1 {
    margin-right: 0.25rem;
  }
}
@media (min-width: 992px) {
  .dapp-core-component__main__mr-lg-4 {
    margin-right: 1.5rem;
  }
}
@media (min-width: 992px) {
  .dapp-core-component__main__mx-lg-4 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}
@media (min-width: 1200px) {
  .dapp-core-component__main__mb-xl-2 {
    margin-bottom: 0.5rem;
  }
}
@media (min-width: 576px) {
  .dapp-core-component__main__pr-sm-2 {
    padding-right: 0.5rem;
  }
}
@media (min-width: 576px) {
  .dapp-core-component__main__px-sm-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
@media (min-width: 1200px) {
  .dapp-core-component__main__pr-xl-0,
  .dapp-core-component__main__px-xl-0 {
    padding-right: 0;
  }
}
.dapp-core-component__main__col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}

.dapp-core-component__main__row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.dapp-core-component__main__col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.dapp-core-component__main__col-xl,
.dapp-core-component__main__col-xl-auto,
.dapp-core-component__main__col-xl-12,
.dapp-core-component__main__col-xl-11,
.dapp-core-component__main__col-xl-10,
.dapp-core-component__main__col-xl-9,
.dapp-core-component__main__col-xl-8,
.dapp-core-component__main__col-xl-7,
.dapp-core-component__main__col-xl-6,
.dapp-core-component__main__col-xl-5,
.dapp-core-component__main__col-xl-4,
.dapp-core-component__main__col-xl-3,
.dapp-core-component__main__col-xl-2,
.dapp-core-component__main__col-xl-1,
.dapp-core-component__main__col-lg,
.dapp-core-component__main__col-lg-auto,
.dapp-core-component__main__col-lg-12,
.dapp-core-component__main__col-lg-11,
.dapp-core-component__main__col-lg-10,
.dapp-core-component__main__col-lg-9,
.dapp-core-component__main__col-lg-8,
.dapp-core-component__main__col-lg-7,
.dapp-core-component__main__col-lg-6,
.dapp-core-component__main__col-lg-5,
.dapp-core-component__main__col-lg-4,
.dapp-core-component__main__col-lg-3,
.dapp-core-component__main__col-lg-2,
.dapp-core-component__main__col-lg-1,
.dapp-core-component__main__col-md,
.dapp-core-component__main__col-md-auto,
.dapp-core-component__main__col-md-12,
.dapp-core-component__main__col-md-11,
.dapp-core-component__main__col-md-10,
.dapp-core-component__main__col-md-9,
.dapp-core-component__main__col-md-8,
.dapp-core-component__main__col-md-7,
.dapp-core-component__main__col-md-6,
.dapp-core-component__main__col-md-5,
.dapp-core-component__main__col-md-4,
.dapp-core-component__main__col-md-3,
.dapp-core-component__main__col-md-2,
.dapp-core-component__main__col-md-1,
.dapp-core-component__main__col-sm,
.dapp-core-component__main__col-sm-auto,
.dapp-core-component__main__col-sm-12,
.dapp-core-component__main__col-sm-11,
.dapp-core-component__main__col-sm-10,
.dapp-core-component__main__col-sm-9,
.dapp-core-component__main__col-sm-8,
.dapp-core-component__main__col-sm-7,
.dapp-core-component__main__col-sm-6,
.dapp-core-component__main__col-sm-5,
.dapp-core-component__main__col-sm-4,
.dapp-core-component__main__col-sm-3,
.dapp-core-component__main__col-sm-2,
.dapp-core-component__main__col-sm-1,
.dapp-core-component__main__col,
.dapp-core-component__main__col-auto,
.dapp-core-component__main__col-12,
.dapp-core-component__main__col-11,
.dapp-core-component__main__col-10,
.dapp-core-component__main__col-9,
.dapp-core-component__main__col-8,
.dapp-core-component__main__col-7,
.dapp-core-component__main__col-6,
.dapp-core-component__main__col-5,
.dapp-core-component__main__col-4,
.dapp-core-component__main__col-3,
.dapp-core-component__main__col-2,
.dapp-core-component__main__col-1 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.dapp-core-component__main__col-1 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
}

@media (min-width: 576px) {
  .dapp-core-component__main__col-sm-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .dapp-core-component__main__col-sm-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .dapp-core-component__main__col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dapp-core-component__main__col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .dapp-core-component__main__col-sm-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .dapp-core-component__main__col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dapp-core-component__main__col-sm-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .dapp-core-component__main__col-sm-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .dapp-core-component__main__col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dapp-core-component__main__col-sm-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .dapp-core-component__main__col-sm-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .dapp-core-component__main__col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .dapp-core-component__main__col-md-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .dapp-core-component__main__col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .dapp-core-component__main__col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dapp-core-component__main__col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .dapp-core-component__main__col-md-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .dapp-core-component__main__col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dapp-core-component__main__col-md-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .dapp-core-component__main__col-md-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .dapp-core-component__main__col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dapp-core-component__main__col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .dapp-core-component__main__col-md-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .dapp-core-component__main__col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .dapp-core-component__main__col-lg-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .dapp-core-component__main__col-lg-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .dapp-core-component__main__col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dapp-core-component__main__col-lg-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .dapp-core-component__main__col-lg-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .dapp-core-component__main__col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dapp-core-component__main__col-lg-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .dapp-core-component__main__col-lg-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .dapp-core-component__main__col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dapp-core-component__main__col-lg-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .dapp-core-component__main__col-lg-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .dapp-core-component__main__col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 1200px) {
  .dapp-core-component__main__col-xl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .dapp-core-component__main__col-xl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .dapp-core-component__main__col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dapp-core-component__main__col-xl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .dapp-core-component__main__col-xl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .dapp-core-component__main__col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dapp-core-component__main__col-xl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .dapp-core-component__main__col-xl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .dapp-core-component__main__col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dapp-core-component__main__col-xl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .dapp-core-component__main__col-xl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .dapp-core-component__main__col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.dapp-core-component__main__flex-row {
  flex-direction: row;
}

.dapp-core-component__main__flex-column {
  flex-direction: column;
}

.dapp-core-component__main__flex-row-reverse {
  flex-direction: row-reverse;
}

.dapp-core-component__main__flex-column-reverse {
  flex-direction: column-reverse;
}

.dapp-core-component__main__flex-wrap {
  flex-wrap: wrap;
}

.dapp-core-component__main__flex-nowrap {
  flex-wrap: nowrap;
}

.dapp-core-component__main__flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}

.dapp-core-component__main__flex-fill {
  flex: 1 1 auto;
}

.dapp-core-component__main__flex-grow-0 {
  flex-grow: 0;
}

.dapp-core-component__main__flex-grow-1 {
  flex-grow: 1;
}

.dapp-core-component__main__flex-shrink-0 {
  flex-shrink: 0;
}

.dapp-core-component__main__flex-shrink-1 {
  flex-shrink: 1;
}

.dapp-core-component__main__justify-content-start {
  justify-content: flex-start;
}

.dapp-core-component__main__justify-content-end {
  justify-content: flex-end;
}

.dapp-core-component__main__justify-content-center {
  justify-content: center;
}

.dapp-core-component__main__justify-content-between {
  justify-content: space-between;
}

.dapp-core-component__main__justify-content-around {
  justify-content: space-around;
}

.dapp-core-component__main__align-items-start {
  align-items: flex-start;
}

.dapp-core-component__main__align-items-end {
  align-items: flex-end;
}

.dapp-core-component__main__align-items-center {
  align-items: center;
}

.dapp-core-component__main__align-items-baseline {
  align-items: baseline;
}

.dapp-core-component__main__align-items-stretch {
  align-items: stretch;
}

.dapp-core-component__main__align-content-start {
  align-content: flex-start;
}

.dapp-core-component__main__align-content-end {
  align-content: flex-end;
}

.dapp-core-component__main__align-content-center {
  align-content: center;
}

.dapp-core-component__main__align-content-between {
  align-content: space-between;
}

.dapp-core-component__main__align-content-around {
  align-content: space-around;
}

.dapp-core-component__main__align-content-stretch {
  align-content: stretch;
}

.dapp-core-component__main__align-self-auto {
  align-self: auto;
}

.dapp-core-component__main__align-self-start {
  align-self: flex-start;
}

.dapp-core-component__main__align-self-end {
  align-self: flex-end;
}

.dapp-core-component__main__align-self-center {
  align-self: center;
}

.dapp-core-component__main__align-self-baseline {
  align-self: baseline;
}

.dapp-core-component__main__align-self-stretch {
  align-self: stretch;
}

@media (min-width: 576px) {
  .dapp-core-component__main__flex-sm-row {
    flex-direction: row;
  }
}
@media (min-width: 992px) {
  .dapp-core-component__main__flex-lg-row {
    flex-direction: row;
  }
}
@media (min-width: 992px) {
  .dapp-core-component__main__flex-lg-wrap {
    flex-wrap: wrap;
  }
}
.dapp-core-component__main__form-check {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  padding-left: 0;
}

.dapp-core-component__main__form-check-label {
  margin-bottom: 0;
}

.dapp-core-component__main__form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.dapp-core-component__main__form-check-input[disabled] ~ .dapp-core-component__main__form-check-label, .dapp-core-component__main__form-check-input:disabled ~ .dapp-core-component__main__form-check-label {
  color: #6c757d;
}

.dapp-core-component__main__form-group {
  display: flex;
  flex: 0 0 auto;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 0;
}

.dapp-core-component__main__form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.dapp-core-component__main__form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.dapp-core-component__main__form-group {
  margin-bottom: 1rem;
}

.dapp-core-component__main__form-text {
  display: block;
  margin-top: 0.25rem;
  color: inherit;
}

.dapp-core-component__main__border {
  border: 1px solid #dee2e6;
}

.dapp-core-component__main__border-top {
  border-top: 1px solid #dee2e6;
}

.dapp-core-component__main__border-right {
  border-right: 1px solid #dee2e6;
}

.dapp-core-component__main__border-bottom {
  border-bottom: 1px solid #dee2e6;
}

.dapp-core-component__main__border-left {
  border-left: 1px solid #dee2e6;
}

.dapp-core-component__main__border-0 {
  border: 0;
}

.dapp-core-component__main__border-top-0 {
  border-top: 0;
}

.dapp-core-component__main__border-right-0 {
  border-right: 0;
}

.dapp-core-component__main__border-bottom-0 {
  border-bottom: 0;
}

.dapp-core-component__main__border-left-0 {
  border-left: 0;
}

.dapp-core-component__main__rounded-sm {
  border-radius: 0.2rem;
}

.dapp-core-component__main__rounded {
  border-radius: 0.25rem;
}

.dapp-core-component__main__rounded-top {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.dapp-core-component__main__rounded-right {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.dapp-core-component__main__rounded-bottom {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.dapp-core-component__main__rounded-left {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.dapp-core-component__main__rounded-lg {
  border-radius: 0.3rem;
}

.dapp-core-component__main__rounded-circle {
  border-radius: 50%;
}

.dapp-core-component__main__rounded-pill {
  border-radius: 50rem;
}

.dapp-core-component__main__rounded-0 {
  border-radius: 0;
}

.dapp-core-component__main__h1,
.dapp-core-component__main__h2,
.dapp-core-component__main__h3,
.dapp-core-component__main__h4,
.dapp-core-component__main__h5,
.dapp-core-component__main__h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.dapp-core-component__main__h1 {
  font-size: 2.5rem;
}

.dapp-core-component__main__h2 {
  font-size: 2rem;
}

.dapp-core-component__main__h3 {
  font-size: 1.75rem;
}

.dapp-core-component__main__h4 {
  font-size: 1.5rem;
}

.dapp-core-component__main__h5 {
  font-size: 1.25rem;
}

.dapp-core-component__main__h6 {
  font-size: 1rem;
}

.dapp-core-component__main__lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.dapp-core-component__main__bg-primary {
  background-color: #1b46c2;
}

.dapp-core-component__main__bg-warning,
.dapp-core-component__main__warning {
  background-color: #f0ad4e;
}

.dapp-core-component__main__bg-danger,
.dapp-core-component__main__danger {
  background-color: #d9534f;
}

.dapp-core-component__main__bg-success,
.dapp-core-component__main__success {
  background-color: #5cb85c;
}

.dapp-core-component__main__position-relative {
  position: relative;
}

.dapp-core-component__main__position-absolute {
  position: absolute;
}

.dapp-core-component__main__w-25 {
  width: 25%;
}

.dapp-core-component__main__w-50 {
  width: 50%;
}

.dapp-core-component__main__w-75 {
  width: 75%;
}

.dapp-core-component__main__w-100 {
  width: 100%;
}

.dapp-core-component__main__w-auto {
  width: auto;
}

.dapp-core-component__main__h-25 {
  height: 25%;
}

.dapp-core-component__main__h-50 {
  height: 50%;
}

.dapp-core-component__main__h-75 {
  height: 75%;
}

.dapp-core-component__main__h-100 {
  height: 100%;
}

.dapp-core-component__main__h-auto {
  height: auto;
}

.dapp-core-component__main__mw-100 {
  max-width: 100%;
}

.dapp-core-component__main__mh-100 {
  max-height: 100%;
}

.dapp-core-component__main__min-vw-100 {
  min-width: 100vw;
}

.dapp-core-component__main__min-vh-100 {
  min-height: 100vh;
}

.dapp-core-component__main__vw-100 {
  width: 100vw;
}

.dapp-core-component__main__vh-100 {
  height: 100vh;
}

@media (min-width: 768px) {
  .dapp-core-component__main__w-md-auto {
    width: auto;
  }
}
.dapp-core-component__main__locked-icon {
  color: inherit;
}

.dapp-core-component__main__shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.dapp-core-component__main__shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.dapp-core-component__main__shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

.dapp-core-component__main__shadow-none {
  box-shadow: none;
}

.dapp-core-component__main__d-none {
  display: none;
}

.dapp-core-component__main__d-inline {
  display: inline;
}

.dapp-core-component__main__d-inline-block {
  display: inline-block;
}

.dapp-core-component__main__d-block {
  display: block;
}

.dapp-core-component__main__d-table {
  display: table;
}

.dapp-core-component__main__d-table-row {
  display: table-row;
}

.dapp-core-component__main__d-table-cell {
  display: table-cell;
}

.dapp-core-component__main__d-flex {
  display: -ms-flexbox;
  display: flex;
}

.dapp-core-component__main__d-inline-flex {
  display: -ms-inline-flexbox;
  display: inline-flex;
}

@media (min-width: 576px) {
  .dapp-core-component__main__d-sm-flex {
    display: flex;
  }
}
.dapp-core-component__main__table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.dapp-core-component__main__table th,
.dapp-core-component__main__table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.dapp-core-component__main__table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.dapp-core-component__main__table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.dapp-core-component__main__table-sm th,
.dapp-core-component__main__table-sm td {
  padding: 0.3rem;
}

.dapp-core-component__main__table-bordered {
  border: 1px solid #dee2e6;
}

.dapp-core-component__main__table-bordered th,
.dapp-core-component__main__table-bordered td {
  border: 1px solid #dee2e6;
}

.dapp-core-component__main__table-bordered thead th,
.dapp-core-component__main__table-bordered thead td {
  border-bottom-width: 2px;
}

.dapp-core-component__main__table-borderless th,
.dapp-core-component__main__table-borderless td,
.dapp-core-component__main__table-borderless thead th,
.dapp-core-component__main__table-borderless tbody + tbody {
  border: 0;
}

.dapp-core-component__main__table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.dapp-core-component__main__table .dapp-core-component__main__thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: rgb(69.1465517241, 77.125, 85.1034482759);
}

.dapp-core-component__main__table .dapp-core-component__main__thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.dapp-core-component__main__table-dark {
  color: #fff;
  background-color: #343a40;
}

.dapp-core-component__main__table-dark th,
.dapp-core-component__main__table-dark td,
.dapp-core-component__main__table-dark thead th {
  border-color: rgb(69.1465517241, 77.125, 85.1034482759);
}

.dapp-core-component__main__table-dark.dapp-core-component__main__table-bordered {
  border: 0;
}

.dapp-core-component__main__table-dark.dapp-core-component__main__table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

.dapp-core-component__main__table-dark.dapp-core-component__main__table-hover tbody tr {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.075);
}

.dapp-core-component__main__table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.dapp-core-component__main__table-responsive > .dapp-core-component__main__table-bordered {
  border: 0;
}

@media (max-width: 767.98px) {
  .dapp-core-component__main__transactions.dapp-core-component__main__table .dapp-core-component__main__transaction-hash .dapp-core-component__main__trim {
    max-width: 8rem;
  }
}
.dapp-core-component__main__font-weight-light {
  font-weight: 300;
}

.dapp-core-component__main__font-weight-lighter {
  font-weight: lighter;
}

.dapp-core-component__main__font-weight-normal {
  font-weight: 400;
}

.dapp-core-component__main__font-weight-medium {
  font-weight: 500;
}

.dapp-core-component__main__font-weight-bold {
  font-weight: 700;
}

.dapp-core-component__main__font-weight-bolder {
  font-weight: bolder;
}

.dapp-core-component__main__font-italic {
  font-style: italic;
}

.dapp-core-component__main__icon-state {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
.dapp-core-component__main__icon-state.dapp-core-component__main__half {
  width: 3rem;
  height: 3rem;
}

.dapp-core-component__main__side-icon {
  width: 1.5rem;
  height: 1.5rem;
  min-width: 1.5rem;
  min-height: 1.5rem;
  color: transparent;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #dee2e6;
}
.dapp-core-component__main__side-icon svg {
  color: #cacbcc;
}

div.dapp-core-component__main__side-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
div.dapp-core-component__main__side-icon img {
  transform: scale(0.75);
}

.dapp-core-component__main__toast-messages {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 9999;
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__toast {
  display: block;
  flex-basis: 4rem;
  width: 100%;
  max-width: 28.875rem;
  transition: transform 0.3s ease-in-out;
  transform: translateX(120%);
  background-color: #fff;
  border-radius: 0.25rem;
  border-color: #dee2e6;
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__clickable {
  cursor: pointer;
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__toast-visible {
  margin-bottom: 0.3rem;
  transform: translateX(0);
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__toast-visible .dapp-core-component__main__progress {
  background-color: rgba(0, 0, 0, 0);
  height: inherit;
  font-size: inherit;
  line-height: inherit;
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__toast-visible .dapp-core-component__main__progress .dapp-core-component__main__progress-bar {
  background-color: rgba(108, 117, 125, 0.2);
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__toast-visible .dapp-core-component__main__progress .dapp-core-component__main__progress-bar .dapp-core-component__main__content-height {
  z-index: -1;
  visibility: hidden;
  width: 0;
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__toast .dapp-core-component__main__tx-description {
  margin-bottom: 0.2rem;
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__close {
  opacity: 1;
}
.dapp-core-component__main__toast-messages .dapp-core-component__main__close svg {
  color: #6c757d;
}

.dapp-core-component__main__data-field .dapp-core-component__main__textarea {
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 5px;
  font: medium -moz-fixed;
  font-size: 0.8125rem;
  min-height: 5rem;
  overflow: auto;
  padding: 0.375rem 0.75rem;
  resize: both;
}
.dapp-core-component__main__data-field .dapp-core-component__main__textarea:hover {
  border: 1px solid #000;
}
.dapp-core-component__main__data-field .dapp-core-component__main__textarea .dapp-core-component__main__highlighted {
  font-size: 1rem;
}
.dapp-core-component__main__data-field .dapp-core-component__main__textarea.dapp-core-component__main__sc-call {
  min-height: 3rem;
}
.dapp-core-component__main__data-field .dapp-core-component__main__form-control:disabled,
.dapp-core-component__main__data-field .dapp-core-component__main__form-control[readonly] {
  background-color: #fafafa;
}
.dapp-core-component__main__data-field .dapp-core-component__main__small-font {
  font-size: 0.8125rem;
}

.dapp-core-component__main__progress-steps {
  display: flex;
}
.dapp-core-component__main__progress-steps .dapp-core-component__main__steps {
  display: flex;
}
.dapp-core-component__main__progress-steps .dapp-core-component__main__steps hr {
  background-color: #6c757d;
  border-color: #dee2e6;
  z-index: 2;
}
.dapp-core-component__main__progress-steps .dapp-core-component__main__steps .dapp-core-component__main__dot {
  height: 0.625rem;
  width: 0.625rem;
  border-radius: 50%;
  margin: 0 1rem;
  z-index: 5;
  background-color: #6c757d;
}
.dapp-core-component__main__progress-steps .dapp-core-component__main__steps .dapp-core-component__main__dot:first-of-type {
  margin-left: 0;
}
.dapp-core-component__main__progress-steps .dapp-core-component__main__steps .dapp-core-component__main__dot:last-of-type {
  margin-right: 0;
}
.dapp-core-component__main__progress-steps .dapp-core-component__main__steps .dapp-core-component__main__dot.dapp-core-component__main__bg-primary {
  background-color: #1b46c2;
}

a.dapp-core-component__main__side-link::after {
  right: 0;
  left: unset;
  width: calc(100% - 1.85rem);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dg));BP={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Og=G(()=>{"use strict";r()});var An,wo=G(()=>{"use strict";r();An="Action not allowed. User is logged in. Call logout() first"});var Wg,Fg,Ug=G(()=>{"use strict";r();Wg="https://addons.mozilla.org/en-US/firefox/addon/multiversx-defi-wallet",Fg="https://chrome.google.com/webstore/detail/multiversx-defi-wallet/dngmlblcodfobpdpecaadgfbcggfjfnm"});var pd,Gg=G(()=>{"use strict";r();pd=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(pd||{})});var dd,md,ld,_d,ud,gd,Hg=G(()=>{"use strict";r();dd="1.0.8",md="1.0.11",ld="1.0.15",_d="1.0.17",ud="1.0.22",gd="1.0.23"});var fd,hd=G(()=>{"use strict";r();fd={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var $g=G(()=>{"use strict";r()});var xd=G(()=>{"use strict";r()});var zg=G(()=>{"use strict";r()});var qg=G(()=>{"use strict";r()});var st,Rr,It=G(()=>{"use strict";r();st=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Rr=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Je,Vg,H5,Kg,$5,Ge=G(()=>{"use strict";r();It();Je=(I=>(I.ledger="ledger",I.walletconnect="walletconnect",I.walletconnectv2="walletconnectv2",I.wallet="wallet",I.crossWindow="crossWindow",I.iframe="iframe",I.extension="extension",I.passkey="passkey",I.metamask="metamask",I.opera="opera",I.extra="extra",I.none="",I))(Je||{}),Vg=(a=>(a.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",a.reloginRequest="RELOGIN_REQUEST",a))(Vg||{}),H5=k(k({},Rr.WindowProviderRequestEnums),Vg),Kg=(t=>(t.reloginResponse="RELOGIN_RESPONSE",t))(Kg||{}),$5=k(k({},Rr.WindowProviderResponseEnums),Kg)});var jg=G(()=>{"use strict";r()});var Xg=G(()=>{"use strict";r()});var Gn=G(()=>{"use strict";r()});var Yg=G(()=>{"use strict";r()});var Zg=G(()=>{"use strict";r()});var Jg=G(()=>{"use strict";r()});var Ke=G(()=>{"use strict";r();xd();zg();qg();Ge();jg();Xg();Gn();Yg();Zg();Jg()});var Dr,Qg,iB,ef,sB,nf,cB,pB,FP,of,Mr=G(()=>{"use strict";r();Ke();Dr={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Qg,egldLabel:iB}=Dr["devnet"],{chainId:ef,egldLabel:sB}=Dr["testnet"],{chainId:nf,egldLabel:cB}=Dr["mainnet"],pB={["devnet"]:Qg,["testnet"]:ef,["mainnet"]:nf},FP={[Qg]:"devnet",[ef]:"testnet",[nf]:"mainnet"},of="multiversx://"});var us=G(()=>{"use strict";r()});var Oo,tf=G(()=>{"use strict";r();Oo=require("@multiversx/sdk-web-wallet-provider")});var Hn,Br=G(()=>{"use strict";r();Hn=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var rf,af,Td,gB,fB,yd=G(()=>{"use strict";r();Br();Td=String((af=(rf=Hn.safeWindow)==null?void 0:rf.navigator)==null?void 0:af.userAgent),gB=/^((?!chrome|android).)*safari/i.test(Td),fB=/firefox/i.test(Td)&&/windows/i.test(Td)});var gs,fs,to,nr,sf,cf,hs,pf,Wo,Or,ae=G(()=>{"use strict";r();Og();wo();Ug();Gg();Hg();hd();$g();Mr();us();tf();yd();gs=5e4,fs=1e9,to=18,nr=4,sf=1,cf=1,hs="logout",pf="login",Wo="0",Or="..."});var Wr,xs=G(()=>{"use strict";r();Wr=()=>Date.now()/1e3});var df=G(()=>{"use strict";r()});var mf=G(()=>{"use strict";r()});var Sd=G(()=>{"use strict";r();xs();df();mf()});var bd={};Ee(bd,{clear:()=>$P,getItem:()=>GP,localStorageKeys:()=>vo,removeItem:()=>HP,setItem:()=>UP});var vo,Ts,UP,GP,HP,$P,Fr=G(()=>{"use strict";r();Sd();vo={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Ts=typeof localStorage!="undefined",UP=({key:n,data:t,expires:a})=>{!Ts||localStorage.setItem(String(n),JSON.stringify({expires:a,data:t}))},GP=n=>{if(!Ts)return;let t=localStorage.getItem(String(n));if(!t)return null;let a=JSON.parse(t);return!a||!a.hasOwnProperty("expires")||!a.hasOwnProperty("data")?null:Wr()>=a.expires?(localStorage.removeItem(String(n)),null):a.data},HP=n=>{!Ts||localStorage.removeItem(String(n))},$P=()=>{!Ts||localStorage.clear()}});var wd={};Ee(wd,{clear:()=>gf,getItem:()=>_f,removeItem:()=>uf,setItem:()=>lf,storage:()=>zP});var lf,_f,uf,gf,zP,ff=G(()=>{"use strict";r();lf=({key:n,data:t,expires:a})=>{sessionStorage.setItem(String(n),JSON.stringify({expires:a,data:t}))},_f=n=>{let t=sessionStorage.getItem(String(n));if(!t)return null;let a=JSON.parse(t);return!a||!a.hasOwnProperty("expires")||!a.hasOwnProperty("data")?null:Date.now()>=a.expires?(sessionStorage.removeItem(String(n)),null):a.data},uf=n=>sessionStorage.removeItem(String(n)),gf=()=>sessionStorage.clear(),zP={setItem:lf,getItem:_f,removeItem:uf,clear:gf}});var Fo,Ur=G(()=>{"use strict";r();Fr();ff();Fo={session:wd,local:bd}});var vd,$e,Qe,ze=G(()=>{"use strict";r();vd=require("@reduxjs/toolkit");ae();$e=(0,vd.createAction)(hs),Qe=(0,vd.createAction)(pf,n=>({payload:n}))});var Ld,hf,xf,ys,Cd,Tf,Gr,qP,Ad,KB,Id,yf,jB,XB,YB,VP,KP,Ss,bs=G(()=>{"use strict";r();Ld=require("@multiversx/sdk-core"),hf=require("@reduxjs/toolkit"),xf=require("redux-persist");ae();Ur();Fr();ze();ys={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Wo},Cd={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":ys},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Tf=(0,hf.createSlice)({name:"accountInfoSlice",initialState:Cd,reducers:{setAddress:(n,t)=>{let a=t.payload;n.address=a,n.publicKey=a?new Ld.Address(a).hex():""},setAccount:(n,t)=>{let a=n.address===t.payload.address;n.accounts={[n.address]:a?t.payload:ys},n.shard=t.payload.shard,n.isAccountLoading=!1,n.accountLoadingError=null},setAccountNonce:(n,t)=>{let{address:a}=n;n.accounts[a].nonce=t.payload},setAccountShard:(n,t)=>{n.shard=t.payload},setLedgerAccount:(n,t)=>{n.ledgerAccount=t.payload},updateLedgerAccount:(n,t)=>{n.ledgerAccount!=null&&(n.ledgerAccount.index=t.payload.index,n.ledgerAccount.address=t.payload.address)},setWalletConnectAccount:(n,t)=>{n.walletConnectAccount=t.payload},setIsAccountLoading:(n,t)=>{n.isAccountLoading=t.payload,n.accountLoadingError=null},setAccountLoadingError:(n,t)=>{n.accountLoadingError=t.payload,n.isAccountLoading=!1},setWebsocketEvent:(n,t)=>{n.websocketEvent={timestamp:Date.now(),message:t.payload}},setWebsocketBatchEvent:(n,t)=>{n.websocketBatchEvent={timestamp:Date.now(),data:t.payload}}},extraReducers:n=>{n.addCase($e,()=>(Fo.local.removeItem(vo.loginExpiresAt),Cd)),n.addCase(Qe,(t,a)=>{let{address:s}=a.payload;t.address=s,t.publicKey=new Ld.Address(s).hex()}),n.addCase(xf.REHYDRATE,(t,a)=>{var x;if(!((x=a.payload)!=null&&x.account))return;let{account:s}=a.payload,{address:l,shard:_,accounts:f,publicKey:T}=s;t.address=l,t.shard=_;let y=f&&l in f;t.accounts=y?f:Cd.accounts,t.publicKey=T})}}),{setAccount:Gr,setAddress:qP,setAccountNonce:Ad,setAccountShard:KB,setLedgerAccount:Id,updateLedgerAccount:yf,setWalletConnectAccount:jB,setIsAccountLoading:XB,setAccountLoadingError:YB,setWebsocketEvent:VP,setWebsocketBatchEvent:KP}=Tf.actions,Ss=Tf.reducer});function Ma(){return new Date().setHours(new Date().getHours()+24)}function Ba(n){Fo.local.setItem({key:vo.loginExpiresAt,data:n,expires:n})}var Pd=G(()=>{"use strict";r();Ur();Fr()});var bf,Sf,wf,i6,vf,Cf,Oa,s6,Lf,Af,c6,p6,d6,ws,vs=G(()=>{"use strict";r();bf=require("@reduxjs/toolkit");Pd();Ge();ze();Sf={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},wf=(0,bf.createSlice)({name:"loginInfoSlice",initialState:Sf,reducers:{setLoginMethod:(n,t)=>{n.loginMethod=t.payload},setTokenLogin:(n,t)=>{n.tokenLogin=t.payload},setTokenLoginSignature:(n,t)=>{(n==null?void 0:n.tokenLogin)!=null&&(n.tokenLogin.signature=t.payload)},setWalletLogin:(n,t)=>{n.walletLogin=t.payload},setWalletConnectLogin:(n,t)=>{n.walletConnectLogin=t.payload},setLedgerLogin:(n,t)=>{n.ledgerLogin=t.payload},setWebviewLogin:(n,t)=>{n.webviewLogin=t.payload},invalidateLoginSession:n=>{n.isLoginSessionInvalid=!0},setLogoutRoute:(n,t)=>{n.logoutRoute=t.payload},setIsWalletConnectV2Initialized:(n,t)=>{n.isWalletConnectV2Initialized=t.payload}},extraReducers:n=>{n.addCase($e,()=>Sf),n.addCase(Qe,(t,a)=>{t.isLoginSessionInvalid=!1,t.loginMethod=a.payload.loginMethod,t.iframeLoginType=a.payload.iframeLoginType,Ba(Ma())})}}),{setLoginMethod:i6,setWalletConnectLogin:vf,setLedgerLogin:Cf,setTokenLogin:Oa,setTokenLoginSignature:s6,setWalletLogin:Lf,invalidateLoginSession:Af,setLogoutRoute:c6,setIsWalletConnectV2Initialized:p6,setWebviewLogin:d6}=wf.actions,ws=wf.reducer});var Pf,If,kf,u6,jP,g6,XP,Cs,Ls=G(()=>{"use strict";r();Pf=require("@reduxjs/toolkit");ze();If={},kf=(0,Pf.createSlice)({name:"modalsSlice",initialState:If,reducers:{setTxSubmittedModal:(n,t)=>{n.txSubmittedModal=t.payload},setNotificationModal:(n,t)=>{n.notificationModal=t.payload},clearTxSubmittedModal:n=>{n.txSubmittedModal=void 0},clearNotificationModal:n=>{n.notificationModal=void 0}},extraReducers:n=>{n.addCase($e,()=>If)}}),{setTxSubmittedModal:u6,setNotificationModal:jP,clearTxSubmittedModal:g6,clearNotificationModal:XP}=kf.actions,Cs=kf.reducer});var Te,dn=G(()=>{"use strict";r();er();Te=()=>{if(!it())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:t,hash:a,origin:s,href:l,search:_}}=window;return{pathname:t,hash:a,origin:s,href:l,search:_}}});var Pt,Nf=G(()=>{"use strict";r();dn();Pt=(n="")=>{let t=Te(),a=n.startsWith("http")||n.startsWith("www.");return!t.origin||n.startsWith(t.origin)||a?n:`${t.origin}/${n.replace("/","")}`}});var ct,Ef=G(()=>{"use strict";r();gn();ct=()=>{let{pathname:n,search:t,hash:a}=Te();return`${n!=null?n:""}${t!=null?t:""}${a!=null?a:""}`}});var As,Rf=G(()=>{"use strict";r();Br();As=n=>{if(!Hn.safeWindow.location)return;if(!new URL(Hn.safeWindow.location.href).protocol.startsWith("http"))return Hn.safeWindow.location.reload();Hn.safeWindow.location.assign(n)}});var gn=G(()=>{"use strict";r();Nf();Ef();dn();Rf()});var Df,Mf,Wa,Fa=G(()=>{"use strict";r();gn();Df=!1,Mf=(n=!0)=>{Df=n},Wa=({timeout:n=0,url:t})=>{Df||setTimeout(()=>{if(!!window)return As(t)},n)}});function ro({callbackRoute:n,onLoginRedirect:t,options:a}){let s=Boolean(n),l=typeof t=="function";if(s&&n!=null){if(l)return t(n,a);Wa({url:n,timeout:YP})}}var YP,Bf=G(()=>{"use strict";r();Fa();YP=200});function Of(n){return n[Math.floor(Math.random()*n.length)]}var Wf=G(()=>{"use strict";r()});function kd(n){let t=null;if((n==null?void 0:n.statusCode)in fd){let a=n==null?void 0:n.statusCode,{message:s}=fd[a];t=QP.includes(a)?Ff:s}return{errorMessage:t,defaultErrorMessage:Ff}}var Ff,ZP,JP,QP,Nd=G(()=>{"use strict";r();hd();Ff="Check if the MultiversX app is open on Ledger",ZP=28161,JP=28160,QP=[ZP,JP]});var pt=G(()=>{"use strict";r();Bf();Wf();Nd()});var Uf,Gf,Hf,Ed,nk,$f,q6,V6,zf,Is,Ps=G(()=>{"use strict";r();Uf=require("@reduxjs/toolkit"),Gf=M(require("lodash.omit")),Hf=require("redux-persist");us();ze();pt();Ed={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},nk={network:Ed},$f=(0,Uf.createSlice)({name:"appConfig",initialState:nk,reducers:{initializeNetworkConfig:(n,t)=>{let a=Of(t.payload.walletConnectV2RelayAddresses),s=(0,Gf.default)(t.payload,"walletConnectV2RelayAddresses");n.network=ne(k(k({},n.network),s),{walletConnectV2RelayAddress:a})},updateNetworkConfig:(n,t)=>{n.network=k(k({},n.network),t.payload)},setCustomWalletAddress:(n,t)=>{n.network.customWalletAddress=t.payload}},extraReducers:n=>{n.addCase($e,t=>{t.network.customWalletAddress=void 0}),n.addCase(Hf.REHYDRATE,(t,a)=>{var l,_;if(!((_=(l=a.payload)==null?void 0:l.network)!=null&&_.customWalletAddress))return;let{network:{customWalletAddress:s}}=a.payload;t.network.customWalletAddress=s})}}),{initializeNetworkConfig:q6,updateNetworkConfig:V6,setCustomWalletAddress:zf}=$f.actions,Is=$f.reducer});var qf,Rd,Vf,J6,Q6,eO,ks,Ns=G(()=>{"use strict";r();qf=require("@reduxjs/toolkit");Ke();ze();Rd={isSigning:!1,signedSessions:{}},Vf=(0,qf.createSlice)({name:"signedMessageInfoSliceState",initialState:Rd,reducers:{setSignSession:(n,t)=>{let{sessionId:a,signedSession:s,errorMessage:l}=t.payload;l&&(n.errorMessage=l),n.isSigning=s.status==="pending",n.signedSessions[a]=k(k({},n.signedSessions[a]),s)},setSignSessionState:(n,t)=>k(k({},n),t.payload),clearSignedMessageInfo:()=>Rd},extraReducers:n=>{n.addCase($e,()=>Rd)}}),{setSignSession:J6,clearSignedMessageInfo:Q6,setSignSessionState:eO}=Vf.actions,ks=Vf.reducer});var jf,Xf,Kf,Yf,ok,tk,sO,rk,Es,Rs=G(()=>{"use strict";r();jf=require("@reduxjs/toolkit"),Xf=require("redux-persist");Ke();xs();ze();Kf={customToasts:[],transactionToasts:[]},Yf=(0,jf.createSlice)({name:"toastsSlice",initialState:Kf,reducers:{addCustomToast:(n,t)=>{let a=t.payload.toastId||`custom-toast-${n.customToasts.length+1}`,s=n.customToasts.findIndex(l=>l.toastId===a);if(s!==-1){n.customToasts[s]=ne(k(k({},n.customToasts[s]),t.payload),{type:"custom",toastId:a});return}n.customToasts.push(ne(k({},t.payload),{type:"custom",toastId:a}))},removeCustomToast:(n,t)=>{n.customToasts=n.customToasts.filter(a=>a.toastId!==t.payload)},addTransactionToast:(n,t)=>{n.transactionToasts.push({type:"transaction",startTimestamp:Wr(),toastId:t.payload||`custom-toast-${n.transactionToasts.length+1}`})},removeTransactionToast:(n,t)=>{n.transactionToasts=n.transactionToasts.filter(a=>a.toastId!==t.payload)}},extraReducers:n=>{n.addCase($e,()=>Kf),n.addCase(Xf.REHYDRATE,(t,a)=>{var l,_;let s=(_=(l=a.customToasts)==null?void 0:l.filter(f=>!("component"in f)))!=null?_:[];t.customToasts=s})}}),{addCustomToast:ok,removeCustomToast:tk,addTransactionToast:sO,removeTransactionToast:rk}=Yf.actions,Es=Yf.reducer});var Zf,Md,Bd,Od,ak,Dd,Jf,mO,ik,Wd,Ds,Ms=G(()=>{"use strict";r();Zf=require("@reduxjs/toolkit");ze();Md="Transaction failed",Bd="Transaction successful",Od="Processing transaction",ak="Transaction submitted",Dd={},Jf=(0,Zf.createSlice)({name:"transactionsInfo",initialState:Dd,reducers:{setTransactionsDisplayInfo(n,t){let{sessionId:a,transactionsDisplayInfo:s}=t.payload;a!=null&&(n[a]={errorMessage:(s==null?void 0:s.errorMessage)||Md,successMessage:(s==null?void 0:s.successMessage)||Bd,processingMessage:(s==null?void 0:s.processingMessage)||Od,submittedMessage:(s==null?void 0:s.submittedMessage)||ak,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(n,t){t.payload!=null&&delete n[t.payload]},clearTransactionsInfo:()=>Dd},extraReducers:n=>{n.addCase($e,()=>Dd)}}),{clearTransactionsInfo:mO,setTransactionsDisplayInfo:ik,clearTransactionsInfoForSessionId:Wd}=Jf.actions,Ds=Jf.reducer});function $r(n){return n!=null&&(fk(n)||Sk(n))}function zr(n){return n!=null&&(hk(n)||bk(n))}function qr(n){return n!=null&&(xk(n)||wk(n))}function Qf(n){return n!=null&&(Tk(n)||vk(n))}function Fd(n){return n!=null&&yk(n)}function fk(n){return n!=null&&sk.includes(n)}function hk(n){return n!=null&&ck.includes(n)}function xk(n){return n!=null&&pk.includes(n)}function Tk(n){return n!=null&&dk.includes(n)}function yk(n){return n!=null&&mk.includes(n)}function Sk(n){return n!=null&&lk.includes(n)}function bk(n){return n!=null&&_k.includes(n)}function wk(n){return n!=null&&uk.includes(n)}function vk(n){return n!=null&&gk.includes(n)}var sk,ck,pk,dk,mk,lk,_k,uk,gk,Vr=G(()=>{"use strict";r();Ge();sk=["sent"],ck=["success"],pk=["fail","cancelled","timedOut"],dk=["invalid"],mk=["timedOut"],lk=["pending"],_k=["success"],uk=["fail","invalid"],gk=["not executed"]});var eh,nh,Ua,Ck,oh,th,rh,Lk,Bs,Ak,Ik,yO,Pk,Ga,Ud,SO,Os,Ws=G(()=>{"use strict";r();eh=require("@reduxjs/toolkit"),nh=require("redux-persist");Ge();Vr();ze();Ua={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Ck={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},oh=(0,eh.createSlice)({name:"transactionsSlice",initialState:Ua,reducers:{moveTransactionsToSignedState:(n,t)=>{var y,x;let{sessionId:a,transactions:s,errorMessage:l,status:_,redirectRoute:f,customTransactionInformation:T}=t.payload;n.customTransactionInformationForSessionId[a]=k(k(k({},Ck),((y=n.signedTransactions[a])==null?void 0:y.customTransactionInformation)||{}),n.customTransactionInformationForSessionId[a]||{}),n.signedTransactions[a]={transactions:s,status:_,errorMessage:l,redirectRoute:f,customTransactionInformation:k(k({},n.customTransactionInformationForSessionId[a]),T!=null?T:{})},((x=n==null?void 0:n.transactionsToSign)==null?void 0:x.sessionId)===a&&(n.transactionsToSign=Ua.transactionsToSign)},clearSignedTransaction:(n,t)=>{n.signedTransactions[t.payload]&&delete n.signedTransactions[t.payload]},clearTransactionToSign:n=>{n!=null&&n.transactionsToSign&&(n.transactionsToSign=null)},updateSignedTransaction:(n,t)=>{n.signedTransactions=k(k({},n.signedTransactions),t.payload)},updateSignedTransactions:(n,t)=>{let{sessionId:a,status:s,errorMessage:l,transactions:_}=t.payload;n.signedTransactions[a]!=null&&(n.signedTransactions[a].status=s,l!=null&&(n.signedTransactions[a].errorMessage=l),_!=null&&(n.signedTransactions[a].transactions=_))},updateSignedTransactionStatus:(n,t)=>{var x,v,b,I,N,O,A,U;let{sessionId:a,status:s,errorMessage:l,transactionHash:_,serverTransaction:f,inTransit:T}=t.payload,y=(v=(x=n.signedTransactions)==null?void 0:x[a])==null?void 0:v.transactions;if(y!=null){n.signedTransactions[a].transactions=y.map(V=>V.hash===_?ne(k(k({},f!=null?f:{}),V),{status:s,errorMessage:l,inTransit:T}):V);let H=(I=(b=n.signedTransactions[a])==null?void 0:b.transactions)==null?void 0:I.every(V=>zr(V.status)),j=(O=(N=n.signedTransactions[a])==null?void 0:N.transactions)==null?void 0:O.some(V=>qr(V.status)),Y=(U=(A=n.signedTransactions[a])==null?void 0:A.transactions)==null?void 0:U.every(V=>Qf(V.status));H&&(n.signedTransactions[a].status="success"),j&&(n.signedTransactions[a].status="fail"),Y&&(n.signedTransactions[a].status="invalid")}},setTransactionsToSign:(n,t)=>{n.transactionsToSign=t.payload;let{sessionId:a,customTransactionInformation:s}=t.payload;n.customTransactionInformationForSessionId[a]=s,n.signTransactionsError=null},clearAllTransactionsToSign:n=>{n.transactionsToSign=Ua.transactionsToSign,n.signTransactionsError=null},clearAllSignedTransactions:n=>{n.signedTransactions=Ua.signedTransactions},setSignTransactionsError:(n,t)=>{n.signTransactionsError=t.payload},setSignTransactionsCancelMessage:(n,t)=>{n.signTransactionsCancelMessage=t.payload},updateSignedTransactionsCustomTransactionInformation:(n,t)=>{let{sessionId:a,customTransactionInformationOverrides:s}=t.payload;n.signedTransactions[a]!=null&&(n.signedTransactions[a].customTransactionInformation=k(k({},n.signedTransactions[a].customTransactionInformation),s))}},extraReducers:n=>{n.addCase($e,()=>Ua),n.addCase(nh.REHYDRATE,(t,a)=>{var f;if(t.signTransactionsCancelMessage=null,!((f=a.payload)!=null&&f.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:l}=a.payload.transactions,_=Object.entries(s).reduce((T,[y,x])=>{let v=new Date(y),b=new Date;return b.setHours(b.getHours()+5),b-v>0||(T[y]=x),T},{});l!=null&&(t.customTransactionInformationForSessionId=l),s!=null&&(t.signedTransactions=_)})}}),{updateSignedTransactionStatus:th,updateSignedTransactions:rh,setTransactionsToSign:Lk,clearAllTransactionsToSign:Bs,clearAllSignedTransactions:Ak,clearSignedTransaction:Ik,clearTransactionToSign:yO,setSignTransactionsError:Pk,setSignTransactionsCancelMessage:Ga,moveTransactionsToSignedState:Ud,updateSignedTransactionsCustomTransactionInformation:SO}=oh.actions,Os=oh.reducer});var ah,Gd,ih,CO,LO,kk,AO,Fs,Us=G(()=>{"use strict";r();ah=require("@reduxjs/toolkit");ze();Gd={},ih=(0,ah.createSlice)({name:"batchTransactionsSlice",initialState:Gd,reducers:{setBatchTransactions:(n,t)=>{n[t.payload.id]=t.payload},updateBatchTransactions:(n,t)=>{n[t.payload.id]=t.payload},clearBatchTransactions:(n,t)=>{delete n[t.payload.batchId]},clearAllBatchTransactions:()=>Gd},extraReducers:n=>{n.addCase($e,()=>Gd)}}),{setBatchTransactions:CO,updateBatchTransactions:LO,clearBatchTransactions:kk,clearAllBatchTransactions:AO}=ih.actions,Fs=ih.reducer});var ch,sh,ph,NO,dh,Hd=G(()=>{"use strict";r();ch=require("@reduxjs/toolkit");ze();sh={},ph=(0,ch.createSlice)({name:"dappConfigSlice",initialState:sh,reducers:{setDappConfig:(n,t)=>t.payload},extraReducers:n=>{n.addCase($e,()=>sh)}}),{setDappConfig:NO}=ph.actions,dh=ph.reducer});var Ie=G(()=>{"use strict";r();bs();vs();Ls();Ps();Ns();Rs();Ms();Ws();Us();Hd()});var $d=G(()=>{"use strict";r()});var _h,Dk,Mk,or,$s=G(()=>{"use strict";r();_h=require("@reduxjs/toolkit");$d();bs();Us();Hd();vs();Ls();Ps();Ns();Rs();Ms();Ws();Dk={["account"]:Ss,["dappConfig"]:dh,["loginInfo"]:ws,["modals"]:Cs,["networkConfig"]:Is,["signedMessageInfo"]:ks,["toasts"]:Es,["transactionsInfo"]:Ds,["transactions"]:Os,["batchTransactions"]:Fs},Mk=(n={})=>(0,_h.combineReducers)(k(k({},Dk),n)),or=Mk});var hh={};Ee(hh,{default:()=>Zk,sessionStorageReducers:()=>zd});function dt(n,t=[]){return{key:n,version:1,storage:gh.default,blacklist:t}}var $n,uh,gh,Bk,Ha,Ok,Wk,Fk,Uk,Gk,Hk,$k,zk,qk,Vk,fh,Kk,zd,jk,Xk,Yk,Zk,xh=G(()=>{"use strict";r();$n=require("redux-persist"),uh=M(require("redux-persist/lib/storage")),gh=M(require("redux-persist/lib/storage/session"));$s();Ie();bs();Us();vs();Ls();Ps();Ns();Rs();Ms();Ws();$d();Bk={persistReducersStorageType:"localStorage"},Ha={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Ok=dt(Ha["account"]),Wk=dt(Ha["loginInfo"]),Fk=dt(Ha["modals"]),Uk=dt(Ha["networkConfig"]),Gk={2:n=>ne(k({},n),{networkConfig:Ed})};Hk=dt("sdk-dapp-transactionsInfo"),$k=dt("sdk-dapp-transactions",["transactionsToSign"]),zk=dt("sdk-dapp-batchTransactions",["batchTransactions"]),qk=dt("sdk-dapp-toasts"),Vk=dt("sdk-dapp-signedMessageInfo"),fh={key:"sdk-dapp-store",version:2,storage:uh.default,whitelist:Object.keys(Ha),migrate:(0,$n.createMigrate)(Gk,{debug:!1})},Kk=ne(k({},fh),{whitelist:[]}),zd={["toasts"]:(0,$n.persistReducer)(qk,Es),["transactions"]:(0,$n.persistReducer)($k,Os),["transactionsInfo"]:(0,$n.persistReducer)(Hk,Ds),["batchTransactions"]:(0,$n.persistReducer)(zk,Fs),["signedMessageInfo"]:(0,$n.persistReducer)(Vk,ks)},jk=ne(k({},zd),{["account"]:(0,$n.persistReducer)(Ok,Ss),["loginInfo"]:(0,$n.persistReducer)(Wk,ws),["modals"]:(0,$n.persistReducer)(Fk,Cs),["networkConfig"]:(0,$n.persistReducer)(Uk,Is)}),Xk=Bk.persistReducersStorageType==="localStorage",Yk=Xk?(0,$n.persistReducer)(fh,or(zd)):(0,$n.persistReducer)(Kk,or(jk)),Zk=Yk});var Th={};Ee(Th,{default:()=>Jk});var Jk,yh=G(()=>{"use strict";r();$s();Jk=or()});var Sh={};Ee(Sh,{default:()=>eN});var fo,Qk,eN,bh=G(()=>{"use strict";r();fo=require("redux-persist"),Qk=[fo.FLUSH,fo.REHYDRATE,fo.PAUSE,fo.PERSIST,fo.PURGE,fo.REGISTER],eN=Qk});var Ch={};Ee(Ch,{default:()=>vh});function vh(n){return(0,wh.persistStore)(n)}var wh,Lh=G(()=>{"use strict";r();wh=require("redux-persist")});var Bx=$((hj,Mx)=>{r();var ME=typeof p=="object"&&p&&p.Object===Object&&p;Mx.exports=ME});var Za=$((xj,Ox)=>{r();var BE=Bx(),OE=typeof self=="object"&&self&&self.Object===Object&&self,WE=BE||OE||Function("return this")();Ox.exports=WE});var im=$((Tj,Wx)=>{r();var FE=Za(),UE=FE.Symbol;Wx.exports=UE});var Hx=$((yj,Gx)=>{r();var Fx=im(),Ux=Object.prototype,GE=Ux.hasOwnProperty,HE=Ux.toString,Ja=Fx?Fx.toStringTag:void 0;function $E(n){var t=GE.call(n,Ja),a=n[Ja];try{n[Ja]=void 0;var s=!0}catch(_){}var l=HE.call(n);return s&&(t?n[Ja]=a:delete n[Ja]),l}Gx.exports=$E});var zx=$((Sj,$x)=>{r();var zE=Object.prototype,qE=zE.toString;function VE(n){return qE.call(n)}$x.exports=VE});var tc=$((bj,Kx)=>{r();var qx=im(),KE=Hx(),jE=zx(),XE="[object Null]",YE="[object Undefined]",Vx=qx?qx.toStringTag:void 0;function ZE(n){return n==null?n===void 0?YE:XE:Vx&&Vx in Object(n)?KE(n):jE(n)}Kx.exports=ZE});var Xx=$((wj,jx)=>{r();var JE=Array.isArray;jx.exports=JE});var sm=$((vj,Yx)=>{r();function QE(n){return n!=null&&typeof n=="object"}Yx.exports=QE});var Jx=$((Cj,Zx)=>{r();var e2=tc(),n2=Xx(),o2=sm(),t2="[object String]";function r2(n){return typeof n=="string"||!n2(n)&&o2(n)&&e2(n)==t2}Zx.exports=r2});var Qr=$((fY,mT)=>{r();function S2(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}mT.exports=S2});var um=$((hY,lT)=>{r();var b2=tc(),w2=Qr(),v2="[object AsyncFunction]",C2="[object Function]",L2="[object GeneratorFunction]",A2="[object Proxy]";function I2(n){if(!w2(n))return!1;var t=b2(n);return t==C2||t==L2||t==v2||t==A2}lT.exports=I2});var uT=$((xY,_T)=>{r();var P2=Za(),k2=P2["__core-js_shared__"];_T.exports=k2});var hT=$((TY,fT)=>{r();var gm=uT(),gT=function(){var n=/[^.]+$/.exec(gm&&gm.keys&&gm.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function N2(n){return!!gT&&gT in n}fT.exports=N2});var TT=$((yY,xT)=>{r();var E2=Function.prototype,R2=E2.toString;function D2(n){if(n!=null){try{return R2.call(n)}catch(t){}try{return n+""}catch(t){}}return""}xT.exports=D2});var ST=$((SY,yT)=>{r();var M2=um(),B2=hT(),O2=Qr(),W2=TT(),F2=/[\\^$.*+?()[\]{}|]/g,U2=/^\[object .+?Constructor\]$/,G2=Function.prototype,H2=Object.prototype,$2=G2.toString,z2=H2.hasOwnProperty,q2=RegExp("^"+$2.call(z2).replace(F2,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function V2(n){if(!O2(n)||B2(n))return!1;var t=M2(n)?q2:U2;return t.test(W2(n))}yT.exports=V2});var wT=$((bY,bT)=>{r();function K2(n,t){return n==null?void 0:n[t]}bT.exports=K2});var ac=$((wY,vT)=>{r();var j2=ST(),X2=wT();function Y2(n,t){var a=X2(n,t);return j2(a)?a:void 0}vT.exports=Y2});var oi=$((vY,CT)=>{r();var Z2=ac(),J2=Z2(Object,"create");CT.exports=J2});var IT=$((CY,AT)=>{r();var LT=oi();function Q2(){this.__data__=LT?LT(null):{},this.size=0}AT.exports=Q2});var kT=$((LY,PT)=>{r();function e3(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}PT.exports=e3});var ET=$((AY,NT)=>{r();var n3=oi(),o3="__lodash_hash_undefined__",t3=Object.prototype,r3=t3.hasOwnProperty;function a3(n){var t=this.__data__;if(n3){var a=t[n];return a===o3?void 0:a}return r3.call(t,n)?t[n]:void 0}NT.exports=a3});var DT=$((IY,RT)=>{r();var i3=oi(),s3=Object.prototype,c3=s3.hasOwnProperty;function p3(n){var t=this.__data__;return i3?t[n]!==void 0:c3.call(t,n)}RT.exports=p3});var BT=$((PY,MT)=>{r();var d3=oi(),m3="__lodash_hash_undefined__";function l3(n,t){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=d3&&t===void 0?m3:t,this}MT.exports=l3});var WT=$((kY,OT)=>{r();var _3=IT(),u3=kT(),g3=ET(),f3=DT(),h3=BT();function ea(n){var t=-1,a=n==null?0:n.length;for(this.clear();++t<a;){var s=n[t];this.set(s[0],s[1])}}ea.prototype.clear=_3;ea.prototype.delete=u3;ea.prototype.get=g3;ea.prototype.has=f3;ea.prototype.set=h3;OT.exports=ea});var UT=$((NY,FT)=>{r();function x3(){this.__data__=[],this.size=0}FT.exports=x3});var fm=$((EY,GT)=>{r();function T3(n,t){return n===t||n!==n&&t!==t}GT.exports=T3});var ti=$((RY,HT)=>{r();var y3=fm();function S3(n,t){for(var a=n.length;a--;)if(y3(n[a][0],t))return a;return-1}HT.exports=S3});var zT=$((DY,$T)=>{r();var b3=ti(),w3=Array.prototype,v3=w3.splice;function C3(n){var t=this.__data__,a=b3(t,n);if(a<0)return!1;var s=t.length-1;return a==s?t.pop():v3.call(t,a,1),--this.size,!0}$T.exports=C3});var VT=$((MY,qT)=>{r();var L3=ti();function A3(n){var t=this.__data__,a=L3(t,n);return a<0?void 0:t[a][1]}qT.exports=A3});var jT=$((BY,KT)=>{r();var I3=ti();function P3(n){return I3(this.__data__,n)>-1}KT.exports=P3});var YT=$((OY,XT)=>{r();var k3=ti();function N3(n,t){var a=this.__data__,s=k3(a,n);return s<0?(++this.size,a.push([n,t])):a[s][1]=t,this}XT.exports=N3});var JT=$((WY,ZT)=>{r();var E3=UT(),R3=zT(),D3=VT(),M3=jT(),B3=YT();function na(n){var t=-1,a=n==null?0:n.length;for(this.clear();++t<a;){var s=n[t];this.set(s[0],s[1])}}na.prototype.clear=E3;na.prototype.delete=R3;na.prototype.get=D3;na.prototype.has=M3;na.prototype.set=B3;ZT.exports=na});var ey=$((FY,QT)=>{r();var O3=ac(),W3=Za(),F3=O3(W3,"Map");QT.exports=F3});var ty=$((UY,oy)=>{r();var ny=WT(),U3=JT(),G3=ey();function H3(){this.size=0,this.__data__={hash:new ny,map:new(G3||U3),string:new ny}}oy.exports=H3});var ay=$((GY,ry)=>{r();function $3(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}ry.exports=$3});var ri=$((HY,iy)=>{r();var z3=ay();function q3(n,t){var a=n.__data__;return z3(t)?a[typeof t=="string"?"string":"hash"]:a.map}iy.exports=q3});var cy=$(($Y,sy)=>{r();var V3=ri();function K3(n){var t=V3(this,n).delete(n);return this.size-=t?1:0,t}sy.exports=K3});var dy=$((zY,py)=>{r();var j3=ri();function X3(n){return j3(this,n).get(n)}py.exports=X3});var ly=$((qY,my)=>{r();var Y3=ri();function Z3(n){return Y3(this,n).has(n)}my.exports=Z3});var uy=$((VY,_y)=>{r();var J3=ri();function Q3(n,t){var a=J3(this,n),s=a.size;return a.set(n,t),this.size+=a.size==s?0:1,this}_y.exports=Q3});var fy=$((KY,gy)=>{r();var eR=ty(),nR=cy(),oR=dy(),tR=ly(),rR=uy();function oa(n){var t=-1,a=n==null?0:n.length;for(this.clear();++t<a;){var s=n[t];this.set(s[0],s[1])}}oa.prototype.clear=eR;oa.prototype.delete=nR;oa.prototype.get=oR;oa.prototype.has=tR;oa.prototype.set=rR;gy.exports=oa});var xy=$((jY,hy)=>{r();var aR="__lodash_hash_undefined__";function iR(n){return this.__data__.set(n,aR),this}hy.exports=iR});var yy=$((XY,Ty)=>{r();function sR(n){return this.__data__.has(n)}Ty.exports=sR});var by=$((YY,Sy)=>{r();var cR=fy(),pR=xy(),dR=yy();function ic(n){var t=-1,a=n==null?0:n.length;for(this.__data__=new cR;++t<a;)this.add(n[t])}ic.prototype.add=ic.prototype.push=pR;ic.prototype.has=dR;Sy.exports=ic});var vy=$((ZY,wy)=>{r();function mR(n,t,a,s){for(var l=n.length,_=a+(s?1:-1);s?_--:++_<l;)if(t(n[_],_,n))return _;return-1}wy.exports=mR});var Ly=$((JY,Cy)=>{r();function lR(n){return n!==n}Cy.exports=lR});var Iy=$((QY,Ay)=>{r();function _R(n,t,a){for(var s=a-1,l=n.length;++s<l;)if(n[s]===t)return s;return-1}Ay.exports=_R});var ky=$((eZ,Py)=>{r();var uR=vy(),gR=Ly(),fR=Iy();function hR(n,t,a){return t===t?fR(n,t,a):uR(n,gR,a)}Py.exports=hR});var Ey=$((nZ,Ny)=>{r();var xR=ky();function TR(n,t){var a=n==null?0:n.length;return!!a&&xR(n,t,0)>-1}Ny.exports=TR});var Dy=$((oZ,Ry)=>{r();function yR(n,t,a){for(var s=-1,l=n==null?0:n.length;++s<l;)if(a(t,n[s]))return!0;return!1}Ry.exports=yR});var By=$((tZ,My)=>{r();function SR(n,t){return n.has(t)}My.exports=SR});var Wy=$((rZ,Oy)=>{r();var bR=ac(),wR=Za(),vR=bR(wR,"Set");Oy.exports=vR});var Uy=$((aZ,Fy)=>{r();function CR(){}Fy.exports=CR});var hm=$((iZ,Gy)=>{r();function LR(n){var t=-1,a=Array(n.size);return n.forEach(function(s){a[++t]=s}),a}Gy.exports=LR});var $y=$((sZ,Hy)=>{r();var xm=Wy(),AR=Uy(),IR=hm(),PR=1/0,kR=xm&&1/IR(new xm([,-0]))[1]==PR?function(n){return new xm(n)}:AR;Hy.exports=kR});var qy=$((cZ,zy)=>{r();var NR=by(),ER=Ey(),RR=Dy(),DR=By(),MR=$y(),BR=hm(),OR=200;function WR(n,t,a){var s=-1,l=ER,_=n.length,f=!0,T=[],y=T;if(a)f=!1,l=RR;else if(_>=OR){var x=t?null:MR(n);if(x)return BR(x);f=!1,l=DR,y=new NR}else y=t?[]:T;e:for(;++s<_;){var v=n[s],b=t?t(v):v;if(v=a||v!==0?v:0,f&&b===b){for(var I=y.length;I--;)if(y[I]===b)continue e;t&&y.push(b),T.push(v)}else l(y,b,a)||(y!==T&&y.push(b),T.push(v))}return T}zy.exports=WR});var Ky=$((pZ,Vy)=>{r();var FR=qy();function UR(n){return n&&n.length?FR(n):[]}Vy.exports=UR});var lt={};Ee(lt,{css:()=>_0,default:()=>fD});var _0,fD,_t=G(()=>{"use strict";r();_0=`.dapp-core-component__dappModalStyles__dappModal {
  position: fixed;
  z-index: 999;
  padding-top: 100px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
}

.dapp-core-component__dappModalStyles__dappModalContent {
  background: #fff;
  border: 2px solid #aaa;
  border-radius: 5px;
  z-index: 999;
  max-width: 500px;
  margin: auto;
  padding: 0;
  position: relative;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.dapp-core-component__dappModalStyles__dappModalHeader {
  padding: 2px 16px;
  background-color: #fff;
  font-size: 1.25rem;
}

.dapp-core-component__dappModalStyles__dappModalHeaderText {
  padding: 0 1rem;
}

.dapp-core-component__dappModalStyles__dappModalBody {
  padding: 16px 0;
}

.dapp-core-component__dappModalStyles__dappModalFooter {
  background-color: #fff;
  padding: 1rem 0.5rem;
}

.dapp-core-component__dappModalStyles__dappModalCloseButton {
  position: absolute;
  top: 0;
  right: 0;
  float: right;
  font-weight: bold;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 0;
}

.dapp-core-component__dappModalStyles__dappModalCloseButton:hover,
.dapp-core-component__dappModalStyles__dappModalCloseButton:focus {
  text-decoration: none;
  cursor: pointer;
  color: #212529;
  background-color: #dee2e6;
  border-color: #e9ecef;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_0));fD={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Fm={};Ee(Fm,{css:()=>L0,default:()=>ND});var L0,ND,Um=G(()=>{"use strict";r();L0=`.dapp-core-component__loginButtonStyles__default-login-button {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__wrapper {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__login-text {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__button-wrapper {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__button-content {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__button-title {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__button-icon {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(L0));ND={"default-login-button":"dapp-core-component__loginButtonStyles__default-login-button",defaultLoginButton:"dapp-core-component__loginButtonStyles__default-login-button",wrapper:"dapp-core-component__loginButtonStyles__wrapper","login-text":"dapp-core-component__loginButtonStyles__login-text",loginText:"dapp-core-component__loginButtonStyles__login-text","button-wrapper":"dapp-core-component__loginButtonStyles__button-wrapper",buttonWrapper:"dapp-core-component__loginButtonStyles__button-wrapper","button-content":"dapp-core-component__loginButtonStyles__button-content",buttonContent:"dapp-core-component__loginButtonStyles__button-content","button-title":"dapp-core-component__loginButtonStyles__button-title",buttonTitle:"dapp-core-component__loginButtonStyles__button-title","button-icon":"dapp-core-component__loginButtonStyles__button-icon",buttonIcon:"dapp-core-component__loginButtonStyles__button-icon"}});var di={};Ee(di,{css:()=>I0,default:()=>RD});var I0,RD,mi=G(()=>{"use strict";r();I0=`.dapp-core-component__extensionLoginButton-styles__extension-login {
  box-sizing: border-box;
}

.dapp-core-component__extensionLoginButton-styles__login-text {
  box-sizing: border-box;
}

.dapp-core-component__extensionLoginButton-styles__no-extension-button-wrapper {
  box-sizing: border-box;
}

.dapp-core-component__extensionLoginButton-styles__noExtensionButtonContent {
  box-sizing: border-box;
}

.dapp-core-component__extensionLoginButton-styles__no-extension-button-title {
  box-sizing: border-box;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(I0));RD={"extension-login":"dapp-core-component__extensionLoginButton-styles__extension-login",extensionLogin:"dapp-core-component__extensionLoginButton-styles__extension-login","login-text":"dapp-core-component__extensionLoginButton-styles__login-text",loginText:"dapp-core-component__extensionLoginButton-styles__login-text","no-extension-button-wrapper":"dapp-core-component__extensionLoginButton-styles__no-extension-button-wrapper",noExtensionButtonWrapper:"dapp-core-component__extensionLoginButton-styles__no-extension-button-wrapper",noExtensionButtonContent:"dapp-core-component__extensionLoginButton-styles__noExtensionButtonContent","no-extension-button-title":"dapp-core-component__extensionLoginButton-styles__no-extension-button-title",noExtensionButtonTitle:"dapp-core-component__extensionLoginButton-styles__no-extension-button-title"}});var $m={};Ee($m,{css:()=>N0,default:()=>MD});var N0,MD,zm=G(()=>{"use strict";r();N0=`.dapp-core-component__iframeLoginButton-styles__metamask-proxy-login {
  box-sizing: border-box;
}

.dapp-core-component__iframeLoginButton-styles__login-text {
  box-sizing: border-box;
}

.dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-wrapper {
  box-sizing: border-box;
}

.dapp-core-component__iframeLoginButton-styles__noIframeButtonContent {
  box-sizing: border-box;
}

.dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-title {
  box-sizing: border-box;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(N0));MD={"metamask-proxy-login":"dapp-core-component__iframeLoginButton-styles__metamask-proxy-login",metamaskProxyLogin:"dapp-core-component__iframeLoginButton-styles__metamask-proxy-login","login-text":"dapp-core-component__iframeLoginButton-styles__login-text",loginText:"dapp-core-component__iframeLoginButton-styles__login-text","no-metamask-proxy-button-wrapper":"dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-wrapper",noMetamaskProxyButtonWrapper:"dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-wrapper",noIframeButtonContent:"dapp-core-component__iframeLoginButton-styles__noIframeButtonContent","no-metamask-proxy-button-title":"dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-title",noMetamaskProxyButtonTitle:"dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-title"}});var qm={};Ee(qm,{css:()=>M0,default:()=>OD});var M0,OD,Vm=G(()=>{"use strict";r();M0=`.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
  display: none;
  gap: 8px;
  align-items: center;
  color: #e5e5e5;
  transition: all 200ms ease;
  cursor: pointer;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
    padding: 0;
    margin: 0 4px;
    display: flex;
  }
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button.dapp-core-component__paginationEdgeButtonStyles__inactive {
  color: #737373;
  pointer-events: none;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button.dapp-core-component__paginationEdgeButtonStyles__inactive .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  color: #737373;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button:hover .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  color: #23f7dd;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text {
  display: none;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text.dapp-core-component__paginationEdgeButtonStyles__show {
  display: block;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text {
    display: block;
  }
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  transition: all 200ms ease;
  color: #e5e5e5;
  font-size: 12px;
}
@media (min-width: 375px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
    font-size: 16px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(M0));OD={"pagination-edge-button":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",inactive:"dapp-core-component__paginationEdgeButtonStyles__inactive","pagination-edge-button-icon":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon",paginationEdgeButtonIcon:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon","pagination-edge-button-text":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",paginationEdgeButtonText:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",show:"dapp-core-component__paginationEdgeButtonStyles__show"}});var W0=$((epe,O0)=>{r();var FD=Math.max,UD=Math.min;function GD(n,t,a){return n>=UD(t,a)&&n<FD(t,a)}O0.exports=GD});var U0=$((npe,F0)=>{r();var HD=/\s/;function $D(n){for(var t=n.length;t--&&HD.test(n.charAt(t)););return t}F0.exports=$D});var H0=$((ope,G0)=>{r();var zD=U0(),qD=/^\s+/;function VD(n){return n&&n.slice(0,zD(n)+1).replace(qD,"")}G0.exports=VD});var z0=$((tpe,$0)=>{r();var KD=tc(),jD=sm(),XD="[object Symbol]";function YD(n){return typeof n=="symbol"||jD(n)&&KD(n)==XD}$0.exports=YD});var Xm=$((rpe,K0)=>{r();var ZD=H0(),q0=Qr(),JD=z0(),V0=0/0,QD=/^[-+]0x[0-9a-f]+$/i,eM=/^0b[01]+$/i,nM=/^0o[0-7]+$/i,oM=parseInt;function tM(n){if(typeof n=="number")return n;if(JD(n))return V0;if(q0(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=q0(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=ZD(n);var a=eM.test(n);return a||nM.test(n)?oM(n.slice(2),a?2:8):QD.test(n)?V0:+n}K0.exports=tM});var Ym=$((ape,X0)=>{r();var rM=Xm(),j0=1/0,aM=17976931348623157e292;function iM(n){if(!n)return n===0?n:0;if(n=rM(n),n===j0||n===-j0){var t=n<0?-1:1;return t*aM}return n===n?n:0}X0.exports=iM});var J0=$((ipe,Z0)=>{r();var sM=W0(),Y0=Ym(),cM=Xm();function pM(n,t,a){return t=Y0(t),a===void 0?(a=t,t=0):a=Y0(a),n=cM(n),sM(n,t,a)}Z0.exports=pM});var eS=$((spe,Q0)=>{r();var dM=Math.ceil,mM=Math.max;function lM(n,t,a,s){for(var l=-1,_=mM(dM((t-n)/(a||1)),0),f=Array(_);_--;)f[s?_:++l]=n,n+=a;return f}Q0.exports=lM});var oS=$((cpe,nS)=>{r();var _M=9007199254740991;function uM(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=_M}nS.exports=uM});var rS=$((ppe,tS)=>{r();var gM=um(),fM=oS();function hM(n){return n!=null&&fM(n.length)&&!gM(n)}tS.exports=hM});var iS=$((dpe,aS)=>{r();var xM=9007199254740991,TM=/^(?:0|[1-9]\d*)$/;function yM(n,t){var a=typeof n;return t=t==null?xM:t,!!t&&(a=="number"||a!="symbol"&&TM.test(n))&&n>-1&&n%1==0&&n<t}aS.exports=yM});var cS=$((mpe,sS)=>{r();var SM=fm(),bM=rS(),wM=iS(),vM=Qr();function CM(n,t,a){if(!vM(a))return!1;var s=typeof t;return(s=="number"?bM(a)&&wM(t,a.length):s=="string"&&t in a)?SM(a[t],n):!1}sS.exports=CM});var dS=$((lpe,pS)=>{r();var LM=eS(),AM=cS(),Zm=Ym();function IM(n){return function(t,a,s){return s&&typeof s!="number"&&AM(t,a,s)&&(a=s=void 0),t=Zm(t),a===void 0?(a=t,t=0):a=Zm(a),s=s===void 0?t<a?1:-1:Zm(s),LM(t,a,s,n)}}pS.exports=IM});var lS=$((_pe,mS)=>{r();var PM=dS(),kM=PM();mS.exports=kM});var el={};Ee(el,{css:()=>fS,default:()=>NM});var fS,NM,nl=G(()=>{"use strict";r();fS=`.dapp-core-component__paginationStyles__pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  font-family: "Roobert Regular", sans-serif;
  line-height: 1;
  justify-content: center;
  font-size: 16px;
  max-width: 480px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination {
    gap: 16px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle {
  cursor: pointer;
  transition: all 200ms ease;
  display: none;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle {
    display: flex;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle.dapp-core-component__paginationStyles__disabled {
  color: #737373;
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle.dapp-core-component__paginationStyles__disabled .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #737373;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle:hover .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #e5e5e5;
  font-size: 12px;
}
@media (min-width: 375px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle .dapp-core-component__paginationStyles__pagination-angle-icon {
    font-size: 16px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button {
  margin: 0;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button.dapp-core-component__paginationStyles__disabled {
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button.dapp-core-component__paginationStyles__reversed {
  flex-direction: row-reverse;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items {
  display: flex;
  gap: 8px;
  margin: 0 4px;
  align-items: center;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper {
  cursor: pointer;
  text-align: center;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper {
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item {
  color: #e5e5e5;
  transition: color 0.2s ease-out;
  position: relative;
  border-radius: 4px;
  text-align: center;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  height: 28px;
  width: 28px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item {
    font-size: 16px;
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease;
  background-color: #0e0e0e;
  border-radius: 50%;
  height: 28px;
  width: 28px;
  pointer-events: none;
  z-index: 1;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:before {
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:hover:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__hundreds {
  font-size: 8px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__hundreds {
    font-size: 10px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__active {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__active:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__disabled {
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis {
  margin: 0;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis:before {
  background-color: transparent;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis:hover:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item .dapp-core-component__paginationStyles__pagination-item-text {
  position: relative;
  z-index: 2;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fS));NM={pagination:"dapp-core-component__paginationStyles__pagination","pagination-angle":"dapp-core-component__paginationStyles__pagination-angle",paginationAngle:"dapp-core-component__paginationStyles__pagination-angle",disabled:"dapp-core-component__paginationStyles__disabled","pagination-angle-icon":"dapp-core-component__paginationStyles__pagination-angle-icon",paginationAngleIcon:"dapp-core-component__paginationStyles__pagination-angle-icon","pagination-edge-button":"dapp-core-component__paginationStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationStyles__pagination-edge-button",reversed:"dapp-core-component__paginationStyles__reversed","pagination-items":"dapp-core-component__paginationStyles__pagination-items",paginationItems:"dapp-core-component__paginationStyles__pagination-items","pagination-item-wrapper":"dapp-core-component__paginationStyles__pagination-item-wrapper",paginationItemWrapper:"dapp-core-component__paginationStyles__pagination-item-wrapper","pagination-item":"dapp-core-component__paginationStyles__pagination-item",paginationItem:"dapp-core-component__paginationStyles__pagination-item",hundreds:"dapp-core-component__paginationStyles__hundreds",active:"dapp-core-component__paginationStyles__active",ellipsis:"dapp-core-component__paginationStyles__ellipsis","pagination-item-text":"dapp-core-component__paginationStyles__pagination-item-text",paginationItemText:"dapp-core-component__paginationStyles__pagination-item-text"}});var tl={};Ee(tl,{css:()=>xS,default:()=>RM});var xS,RM,rl=G(()=>{"use strict";r();xS=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xS));RM={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var al={};Ee(al,{css:()=>SS,default:()=>WM});var SS,WM,il=G(()=>{"use strict";r();SS=`.dapp-core-component__trim-styles__trim {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  /* IE fix */
  /* SAFARI fix */
}
.dapp-core-component__trim-styles__trim.dapp-core-component__trim-styles__overflow .dapp-core-component__trim-styles__ellipsis {
  display: block;
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__left {
  flex-shrink: 1;
  font-size: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right {
  flex-shrink: 1;
  font-size: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: rtl;
  text-align: right;
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__left span,
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right span {
  font-size: 0.875rem;
  pointer-events: none;
  user-select: none;
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__ellipsis {
  flex-shrink: 0;
  display: none;
  pointer-events: none;
  user-select: none;
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right {
    text-overflow: clip;
  }
}
@supports (-webkit-hyphens: none) {
  .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right,
  .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__left {
    letter-spacing: -0.001em;
  }
  .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right {
    text-overflow: clip;
  }
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__hidden-text-ref {
  position: absolute;
  display: block;
  color: transparent;
}
@media (max-width: 1199.98px) {
  .dapp-core-component__trim-styles__trim {
    max-width: 26rem;
  }
}
@media (max-width: 991.98px) {
  .dapp-core-component__trim-styles__trim {
    max-width: 12rem;
  }
}
@media (max-width: 768px) {
  .dapp-core-component__trim-styles__trim {
    max-width: 8rem;
  }
}

.dapp-core-component__trim-styles__trim-wrapper {
  display: flex;
  max-width: 100%;
  overflow: hidden;
}

a:hover > .dapp-core-component__trim-styles__trim span {
  color: rgb(0, 86.1, 178.5);
}
a:hover > .dapp-core-component__trim-styles__trim span.dapp-core-component__trim-styles__hidden-text-ref {
  color: transparent;
}

a > .dapp-core-component__trim-styles__trim span,
.dapp-core-component__trim-styles__text-primary > .dapp-core-component__trim-styles__trim span {
  color: #1b46c2;
}
a > .dapp-core-component__trim-styles__trim span.dapp-core-component__trim-styles__hidden-text-ref,
.dapp-core-component__trim-styles__text-primary > .dapp-core-component__trim-styles__trim span.dapp-core-component__trim-styles__hidden-text-ref {
  color: transparent;
}

.dapp-core-component__trim-styles__table .dapp-core-component__trim-styles__trim {
  max-width: 10rem;
}

.dapp-core-component__trim-styles__table .dapp-core-component__trim-styles__trim-only-sm .dapp-core-component__trim-styles__trim {
  max-width: none;
}
@media (max-width: 768px) {
  .dapp-core-component__trim-styles__table .dapp-core-component__trim-styles__trim-only-sm .dapp-core-component__trim-styles__trim {
    max-width: 13rem;
  }
}

.dapp-core-component__trim-styles__trim-fs-sm .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__left span,
.dapp-core-component__trim-styles__trim-fs-sm .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right span,
.dapp-core-component__trim-styles__trim-fs-sm .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__ellipsis {
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .dapp-core-component__trim-styles__table .dapp-core-component__trim-styles__trim-size-xl .dapp-core-component__trim-styles__trim {
    max-width: 13rem;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(SS));WM={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var sl={};Ee(sl,{css:()=>vS,default:()=>UM});var vS,UM,cl=G(()=>{"use strict";r();vS=`.dapp-core-component__addressRowStyles__ledger-address-table-body-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item:not(.dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected) {
  color: #6c757d;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data {
  font-size: 14px;
  line-height: 1;
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
  padding-right: 16px;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data:first-child {
  width: 55%;
  flex-basis: 55%;
  max-width: 55%;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data:last-child {
  width: 32px;
  max-width: 32px;
  flex-basis: 32px;
  text-align: center;
  justify-content: center;
  padding-right: 0;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input {
  position: relative;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  -webkit-appearance: none;
  appearance: none;
  min-height: auto;
}
@media (min-width: 480px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input {
    margin-right: 12px;
  }
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input:before {
  border: 2px solid #adb5bd;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input:checked:before {
  width: 12px;
  height: 12px;
  border: 4px solid #1b46c2;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label {
  margin-bottom: 0;
  flex: 1;
  display: flex;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value {
  flex: 1;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
  max-width: 84px;
  display: flex;
  align-items: flex-end;
}
@media (min-width: 480px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
    max-width: 112px;
  }
}
@media (min-width: 768px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
    max-width: 260px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vS));UM={"ledger-address-table-body-item":"dapp-core-component__addressRowStyles__ledger-address-table-body-item",ledgerAddressTableBodyItem:"dapp-core-component__addressRowStyles__ledger-address-table-body-item","ledger-address-table-body-item-selected":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected",ledgerAddressTableBodyItemSelected:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected","ledger-address-table-body-item-data":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data",ledgerAddressTableBodyItemData:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data","ledger-address-table-body-item-data-input":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input",ledgerAddressTableBodyItemDataInput:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input","ledger-address-table-body-item-data-label":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label",ledgerAddressTableBodyItemDataLabel:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label","ledger-address-table-body-item-data-value":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value",ledgerAddressTableBodyItemDataValue:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value"}});var dl={};Ee(dl,{css:()=>LS,default:()=>HM});var LS,HM,ml=G(()=>{"use strict";r();LS=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(LS));HM={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var ll={};Ee(ll,{css:()=>IS,default:()=>zM});var IS,zM,_l=G(()=>{"use strict";r();IS=`.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper {
  text-align: center;
  padding: 40px 16px 0;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-description {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner {
  margin: 120px 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(IS));zM={"ledger-loading-wrapper":"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper",ledgerLoadingWrapper:"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper","ledger-loading-heading":"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading",ledgerLoadingHeading:"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading","ledger-loading-description":"dapp-core-component__ledgerLoadingStyles__ledger-loading-description",ledgerLoadingDescription:"dapp-core-component__ledgerLoadingStyles__ledger-loading-description","ledger-loading-spinner":"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner",ledgerLoadingSpinner:"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner"}});var ul={};Ee(ul,{css:()=>kS,default:()=>VM});var kS,VM,gl=G(()=>{"use strict";r();kS=`.dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
  text-align: center;
  padding: 48px 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
    padding: 48px 40px;
  }
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-description {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table {
  margin-top: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header {
  display: flex;
  align-items: center;
  background-color: #ced4da;
  line-height: 1;
  padding: 16px;
  text-align: left;
  font-size: 14px;
  border-radius: 8px;
  padding-right: 20px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item {
  flex: 1;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item:first-child {
  width: 55%;
  flex-basis: 55%;
  max-width: 55%;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item:last-child {
  width: 32px;
  max-width: 32px;
  flex-basis: 32px;
  text-align: center;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body {
  overflow-y: scroll;
  overflow-x: hidden;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar {
  width: 4px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-track {
  background-color: transparent;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-thumb {
  background-color: #ced4da;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-thumb:hover {
  background-color: #ced4da;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-pagination {
  margin: 32px auto 0;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-button {
  border-radius: 6px;
  padding: 12px 16px;
  line-height: 1;
  font-size: 16px;
  font-weight: 600;
  margin-top: 40px !important;
  transition: all 200ms ease;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-button {
    width: auto;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kS));VM={"ledger-address-table-wrapper":"dapp-core-component__addressTableStyles__ledger-address-table-wrapper",ledgerAddressTableWrapper:"dapp-core-component__addressTableStyles__ledger-address-table-wrapper","ledger-address-table-heading":"dapp-core-component__addressTableStyles__ledger-address-table-heading",ledgerAddressTableHeading:"dapp-core-component__addressTableStyles__ledger-address-table-heading","ledger-address-table-description":"dapp-core-component__addressTableStyles__ledger-address-table-description",ledgerAddressTableDescription:"dapp-core-component__addressTableStyles__ledger-address-table-description","ledger-address-table":"dapp-core-component__addressTableStyles__ledger-address-table",ledgerAddressTable:"dapp-core-component__addressTableStyles__ledger-address-table","ledger-address-table-header":"dapp-core-component__addressTableStyles__ledger-address-table-header",ledgerAddressTableHeader:"dapp-core-component__addressTableStyles__ledger-address-table-header","ledger-address-table-header-item":"dapp-core-component__addressTableStyles__ledger-address-table-header-item",ledgerAddressTableHeaderItem:"dapp-core-component__addressTableStyles__ledger-address-table-header-item","ledger-address-table-body":"dapp-core-component__addressTableStyles__ledger-address-table-body",ledgerAddressTableBody:"dapp-core-component__addressTableStyles__ledger-address-table-body","ledger-address-table-pagination":"dapp-core-component__addressTableStyles__ledger-address-table-pagination",ledgerAddressTablePagination:"dapp-core-component__addressTableStyles__ledger-address-table-pagination","ledger-address-table-button":"dapp-core-component__addressTableStyles__ledger-address-table-button",ledgerAddressTableButton:"dapp-core-component__addressTableStyles__ledger-address-table-button"}});var RS=$((ma,ui)=>{r();(function(){var n,t="4.17.21",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",_="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",T=500,y="__lodash_placeholder__",x=1,v=2,b=4,I=1,N=2,O=1,A=2,U=4,H=8,j=16,Y=32,V=64,z=128,Q=256,Ce=512,Re=30,De="...",qe=800,de=16,Fe=1,wn=2,Yn=3,fe=1/0,Ae=9007199254740991,Pe=17976931348623157e292,nn=0/0,rn=4294967295,Ut=rn-1,Gt=rn>>>1,Ao=[["ary",z],["bind",O],["bindKey",A],["curry",H],["curryRight",j],["flip",Ce],["partial",Y],["partialRight",V],["rearg",Q]],an="[object Arguments]",Io="[object Array]",sn="[object AsyncFunction]",he="[object Boolean]",ye="[object Date]",se="[object DOMException]",Se="[object Error]",Me="[object Function]",je="[object GeneratorFunction]",ke="[object Map]",hn="[object Number]",Mn="[object Null]",vn="[object Object]",gr="[object Promise]",Ti="[object Proxy]",ua="[object RegExp]",xo="[object Set]",ga="[object String]",yi="[object Symbol]",fb="[object Undefined]",fa="[object WeakMap]",hb="[object WeakSet]",ha="[object ArrayBuffer]",fr="[object DataView]",Ac="[object Float32Array]",Ic="[object Float64Array]",Pc="[object Int8Array]",kc="[object Int16Array]",Nc="[object Int32Array]",Ec="[object Uint8Array]",Rc="[object Uint8ClampedArray]",Dc="[object Uint16Array]",Mc="[object Uint32Array]",xb=/\b__p \+= '';/g,Tb=/\b(__p \+=) '' \+/g,yb=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Rl=/&(?:amp|lt|gt|quot|#39);/g,Dl=/[&<>"']/g,Sb=RegExp(Rl.source),bb=RegExp(Dl.source),wb=/<%-([\s\S]+?)%>/g,vb=/<%([\s\S]+?)%>/g,Ml=/<%=([\s\S]+?)%>/g,Cb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Lb=/^\w*$/,Ab=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bc=/[\\^$.*+?()[\]{}|]/g,Ib=RegExp(Bc.source),Oc=/^\s+/,Pb=/\s/,kb=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Nb=/\{\n\/\* \[wrapped with (.+)\] \*/,Eb=/,? & /,Rb=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Db=/[()=,{}\[\]\/\s]/,Mb=/\\(\\)?/g,Bb=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Bl=/\w*$/,Ob=/^[-+]0x[0-9a-f]+$/i,Wb=/^0b[01]+$/i,Fb=/^\[object .+?Constructor\]$/,Ub=/^0o[0-7]+$/i,Gb=/^(?:0|[1-9]\d*)$/,Hb=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Si=/($^)/,$b=/['\n\r\u2028\u2029\\]/g,bi="\\ud800-\\udfff",zb="\\u0300-\\u036f",qb="\\ufe20-\\ufe2f",Vb="\\u20d0-\\u20ff",Ol=zb+qb+Vb,Wl="\\u2700-\\u27bf",Fl="a-z\\xdf-\\xf6\\xf8-\\xff",Kb="\\xac\\xb1\\xd7\\xf7",jb="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xb="\\u2000-\\u206f",Yb=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ul="A-Z\\xc0-\\xd6\\xd8-\\xde",Gl="\\ufe0e\\ufe0f",Hl=Kb+jb+Xb+Yb,Wc="['\u2019]",Zb="["+bi+"]",$l="["+Hl+"]",wi="["+Ol+"]",zl="\\d+",Jb="["+Wl+"]",ql="["+Fl+"]",Vl="[^"+bi+Hl+zl+Wl+Fl+Ul+"]",Fc="\\ud83c[\\udffb-\\udfff]",Qb="(?:"+wi+"|"+Fc+")",Kl="[^"+bi+"]",Uc="(?:\\ud83c[\\udde6-\\uddff]){2}",Gc="[\\ud800-\\udbff][\\udc00-\\udfff]",hr="["+Ul+"]",jl="\\u200d",Xl="(?:"+ql+"|"+Vl+")",ew="(?:"+hr+"|"+Vl+")",Yl="(?:"+Wc+"(?:d|ll|m|re|s|t|ve))?",Zl="(?:"+Wc+"(?:D|LL|M|RE|S|T|VE))?",Jl=Qb+"?",Ql="["+Gl+"]?",nw="(?:"+jl+"(?:"+[Kl,Uc,Gc].join("|")+")"+Ql+Jl+")*",ow="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",e_=Ql+Jl+nw,rw="(?:"+[Jb,Uc,Gc].join("|")+")"+e_,aw="(?:"+[Kl+wi+"?",wi,Uc,Gc,Zb].join("|")+")",iw=RegExp(Wc,"g"),sw=RegExp(wi,"g"),Hc=RegExp(Fc+"(?="+Fc+")|"+aw+e_,"g"),cw=RegExp([hr+"?"+ql+"+"+Yl+"(?="+[$l,hr,"$"].join("|")+")",ew+"+"+Zl+"(?="+[$l,hr+Xl,"$"].join("|")+")",hr+"?"+Xl+"+"+Yl,hr+"+"+Zl,tw,ow,zl,rw].join("|"),"g"),pw=RegExp("["+jl+bi+Ol+Gl+"]"),dw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,mw=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],lw=-1,Oe={};Oe[Ac]=Oe[Ic]=Oe[Pc]=Oe[kc]=Oe[Nc]=Oe[Ec]=Oe[Rc]=Oe[Dc]=Oe[Mc]=!0,Oe[an]=Oe[Io]=Oe[ha]=Oe[he]=Oe[fr]=Oe[ye]=Oe[Se]=Oe[Me]=Oe[ke]=Oe[hn]=Oe[vn]=Oe[ua]=Oe[xo]=Oe[ga]=Oe[fa]=!1;var Be={};Be[an]=Be[Io]=Be[ha]=Be[fr]=Be[he]=Be[ye]=Be[Ac]=Be[Ic]=Be[Pc]=Be[kc]=Be[Nc]=Be[ke]=Be[hn]=Be[vn]=Be[ua]=Be[xo]=Be[ga]=Be[yi]=Be[Ec]=Be[Rc]=Be[Dc]=Be[Mc]=!0,Be[Se]=Be[Me]=Be[fa]=!1;var _w={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},uw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gw={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fw={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},hw=parseFloat,xw=parseInt,n_=typeof p=="object"&&p&&p.Object===Object&&p,Tw=typeof self=="object"&&self&&self.Object===Object&&self,ln=n_||Tw||Function("return this")(),$c=typeof ma=="object"&&ma&&!ma.nodeType&&ma,Ht=$c&&typeof ui=="object"&&ui&&!ui.nodeType&&ui,o_=Ht&&Ht.exports===$c,zc=o_&&n_.process,io=function(){try{var C=Ht&&Ht.require&&Ht.require("util").types;return C||zc&&zc.binding&&zc.binding("util")}catch(E){}}(),t_=io&&io.isArrayBuffer,r_=io&&io.isDate,a_=io&&io.isMap,i_=io&&io.isRegExp,s_=io&&io.isSet,c_=io&&io.isTypedArray;function Zn(C,E,P){switch(P.length){case 0:return C.call(E);case 1:return C.call(E,P[0]);case 2:return C.call(E,P[0],P[1]);case 3:return C.call(E,P[0],P[1],P[2])}return C.apply(E,P)}function yw(C,E,P,K){for(var ce=-1,be=C==null?0:C.length;++ce<be;){var cn=C[ce];E(K,cn,P(cn),C)}return K}function so(C,E){for(var P=-1,K=C==null?0:C.length;++P<K&&E(C[P],P,C)!==!1;);return C}function Sw(C,E){for(var P=C==null?0:C.length;P--&&E(C[P],P,C)!==!1;);return C}function p_(C,E){for(var P=-1,K=C==null?0:C.length;++P<K;)if(!E(C[P],P,C))return!1;return!0}function xt(C,E){for(var P=-1,K=C==null?0:C.length,ce=0,be=[];++P<K;){var cn=C[P];E(cn,P,C)&&(be[ce++]=cn)}return be}function vi(C,E){var P=C==null?0:C.length;return!!P&&xr(C,E,0)>-1}function qc(C,E,P){for(var K=-1,ce=C==null?0:C.length;++K<ce;)if(P(E,C[K]))return!0;return!1}function Ue(C,E){for(var P=-1,K=C==null?0:C.length,ce=Array(K);++P<K;)ce[P]=E(C[P],P,C);return ce}function Tt(C,E){for(var P=-1,K=E.length,ce=C.length;++P<K;)C[ce+P]=E[P];return C}function Vc(C,E,P,K){var ce=-1,be=C==null?0:C.length;for(K&&be&&(P=C[++ce]);++ce<be;)P=E(P,C[ce],ce,C);return P}function bw(C,E,P,K){var ce=C==null?0:C.length;for(K&&ce&&(P=C[--ce]);ce--;)P=E(P,C[ce],ce,C);return P}function Kc(C,E){for(var P=-1,K=C==null?0:C.length;++P<K;)if(E(C[P],P,C))return!0;return!1}var ww=jc("length");function vw(C){return C.split("")}function Cw(C){return C.match(Rb)||[]}function d_(C,E,P){var K;return P(C,function(ce,be,cn){if(E(ce,be,cn))return K=be,!1}),K}function Ci(C,E,P,K){for(var ce=C.length,be=P+(K?1:-1);K?be--:++be<ce;)if(E(C[be],be,C))return be;return-1}function xr(C,E,P){return E===E?Ow(C,E,P):Ci(C,m_,P)}function Lw(C,E,P,K){for(var ce=P-1,be=C.length;++ce<be;)if(K(C[ce],E))return ce;return-1}function m_(C){return C!==C}function l_(C,E){var P=C==null?0:C.length;return P?Yc(C,E)/P:nn}function jc(C){return function(E){return E==null?n:E[C]}}function Xc(C){return function(E){return C==null?n:C[E]}}function __(C,E,P,K,ce){return ce(C,function(be,cn,Ne){P=K?(K=!1,be):E(P,be,cn,Ne)}),P}function Aw(C,E){var P=C.length;for(C.sort(E);P--;)C[P]=C[P].value;return C}function Yc(C,E){for(var P,K=-1,ce=C.length;++K<ce;){var be=E(C[K]);be!==n&&(P=P===n?be:P+be)}return P}function Zc(C,E){for(var P=-1,K=Array(C);++P<C;)K[P]=E(P);return K}function Iw(C,E){return Ue(E,function(P){return[P,C[P]]})}function u_(C){return C&&C.slice(0,x_(C)+1).replace(Oc,"")}function Jn(C){return function(E){return C(E)}}function Jc(C,E){return Ue(E,function(P){return C[P]})}function xa(C,E){return C.has(E)}function g_(C,E){for(var P=-1,K=C.length;++P<K&&xr(E,C[P],0)>-1;);return P}function f_(C,E){for(var P=C.length;P--&&xr(E,C[P],0)>-1;);return P}function Pw(C,E){for(var P=C.length,K=0;P--;)C[P]===E&&++K;return K}var kw=Xc(_w),Nw=Xc(uw);function Ew(C){return"\\"+fw[C]}function Rw(C,E){return C==null?n:C[E]}function Tr(C){return pw.test(C)}function Dw(C){return dw.test(C)}function Mw(C){for(var E,P=[];!(E=C.next()).done;)P.push(E.value);return P}function Qc(C){var E=-1,P=Array(C.size);return C.forEach(function(K,ce){P[++E]=[ce,K]}),P}function h_(C,E){return function(P){return C(E(P))}}function yt(C,E){for(var P=-1,K=C.length,ce=0,be=[];++P<K;){var cn=C[P];(cn===E||cn===y)&&(C[P]=y,be[ce++]=P)}return be}function Li(C){var E=-1,P=Array(C.size);return C.forEach(function(K){P[++E]=K}),P}function Bw(C){var E=-1,P=Array(C.size);return C.forEach(function(K){P[++E]=[K,K]}),P}function Ow(C,E,P){for(var K=P-1,ce=C.length;++K<ce;)if(C[K]===E)return K;return-1}function Ww(C,E,P){for(var K=P+1;K--;)if(C[K]===E)return K;return K}function yr(C){return Tr(C)?Uw(C):ww(C)}function To(C){return Tr(C)?Gw(C):vw(C)}function x_(C){for(var E=C.length;E--&&Pb.test(C.charAt(E)););return E}var Fw=Xc(gw);function Uw(C){for(var E=Hc.lastIndex=0;Hc.test(C);)++E;return E}function Gw(C){return C.match(Hc)||[]}function Hw(C){return C.match(cw)||[]}var $w=function C(E){E=E==null?ln:St.defaults(ln.Object(),E,St.pick(ln,mw));var P=E.Array,K=E.Date,ce=E.Error,be=E.Function,cn=E.Math,Ne=E.Object,ep=E.RegExp,zw=E.String,co=E.TypeError,Ai=P.prototype,qw=be.prototype,Sr=Ne.prototype,Ii=E["__core-js_shared__"],Pi=qw.toString,Le=Sr.hasOwnProperty,Vw=0,T_=function(){var e=/[^.]+$/.exec(Ii&&Ii.keys&&Ii.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ki=Sr.toString,Kw=Pi.call(Ne),jw=ln._,Xw=ep("^"+Pi.call(Le).replace(Bc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ni=o_?E.Buffer:n,bt=E.Symbol,Ei=E.Uint8Array,y_=Ni?Ni.allocUnsafe:n,Ri=h_(Ne.getPrototypeOf,Ne),S_=Ne.create,b_=Sr.propertyIsEnumerable,Di=Ai.splice,w_=bt?bt.isConcatSpreadable:n,Ta=bt?bt.iterator:n,$t=bt?bt.toStringTag:n,Mi=function(){try{var e=jt(Ne,"defineProperty");return e({},"",{}),e}catch(o){}}(),Yw=E.clearTimeout!==ln.clearTimeout&&E.clearTimeout,Zw=K&&K.now!==ln.Date.now&&K.now,Jw=E.setTimeout!==ln.setTimeout&&E.setTimeout,Bi=cn.ceil,Oi=cn.floor,np=Ne.getOwnPropertySymbols,Qw=Ni?Ni.isBuffer:n,v_=E.isFinite,ev=Ai.join,nv=h_(Ne.keys,Ne),pn=cn.max,Cn=cn.min,ov=K.now,tv=E.parseInt,C_=cn.random,rv=Ai.reverse,op=jt(E,"DataView"),ya=jt(E,"Map"),tp=jt(E,"Promise"),br=jt(E,"Set"),Sa=jt(E,"WeakMap"),ba=jt(Ne,"create"),Wi=Sa&&new Sa,wr={},av=Xt(op),iv=Xt(ya),sv=Xt(tp),cv=Xt(br),pv=Xt(Sa),Fi=bt?bt.prototype:n,wa=Fi?Fi.valueOf:n,L_=Fi?Fi.toString:n;function g(e){if(Ve(e)&&!pe(e)&&!(e instanceof ge)){if(e instanceof po)return e;if(Le.call(e,"__wrapped__"))return Au(e)}return new po(e)}var vr=function(){function e(){}return function(o){if(!He(o))return{};if(S_)return S_(o);e.prototype=o;var i=new e;return e.prototype=n,i}}();function Ui(){}function po(e,o){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=n}g.templateSettings={escape:wb,evaluate:vb,interpolate:Ml,variable:"",imports:{_:g}},g.prototype=Ui.prototype,g.prototype.constructor=g,po.prototype=vr(Ui.prototype),po.prototype.constructor=po;function ge(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=rn,this.__views__=[]}function dv(){var e=new ge(this.__wrapped__);return e.__actions__=Bn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Bn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Bn(this.__views__),e}function mv(){if(this.__filtered__){var e=new ge(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function lv(){var e=this.__wrapped__.value(),o=this.__dir__,i=pe(e),c=o<0,u=i?e.length:0,h=v1(0,u,this.__views__),S=h.start,w=h.end,L=w-S,D=c?w:S-1,B=this.__iteratees__,W=B.length,q=0,Z=Cn(L,this.__takeCount__);if(!i||!c&&u==L&&Z==L)return Y_(e,this.__actions__);var oe=[];e:for(;L--&&q<Z;){D+=o;for(var le=-1,te=e[D];++le<W;){var ue=B[le],xe=ue.iteratee,no=ue.type,En=xe(te);if(no==wn)te=En;else if(!En){if(no==Fe)continue e;break e}}oe[q++]=te}return oe}ge.prototype=vr(Ui.prototype),ge.prototype.constructor=ge;function zt(e){var o=-1,i=e==null?0:e.length;for(this.clear();++o<i;){var c=e[o];this.set(c[0],c[1])}}function _v(){this.__data__=ba?ba(null):{},this.size=0}function uv(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}function gv(e){var o=this.__data__;if(ba){var i=o[e];return i===f?n:i}return Le.call(o,e)?o[e]:n}function fv(e){var o=this.__data__;return ba?o[e]!==n:Le.call(o,e)}function hv(e,o){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=ba&&o===n?f:o,this}zt.prototype.clear=_v,zt.prototype.delete=uv,zt.prototype.get=gv,zt.prototype.has=fv,zt.prototype.set=hv;function jo(e){var o=-1,i=e==null?0:e.length;for(this.clear();++o<i;){var c=e[o];this.set(c[0],c[1])}}function xv(){this.__data__=[],this.size=0}function Tv(e){var o=this.__data__,i=Gi(o,e);if(i<0)return!1;var c=o.length-1;return i==c?o.pop():Di.call(o,i,1),--this.size,!0}function yv(e){var o=this.__data__,i=Gi(o,e);return i<0?n:o[i][1]}function Sv(e){return Gi(this.__data__,e)>-1}function bv(e,o){var i=this.__data__,c=Gi(i,e);return c<0?(++this.size,i.push([e,o])):i[c][1]=o,this}jo.prototype.clear=xv,jo.prototype.delete=Tv,jo.prototype.get=yv,jo.prototype.has=Sv,jo.prototype.set=bv;function Xo(e){var o=-1,i=e==null?0:e.length;for(this.clear();++o<i;){var c=e[o];this.set(c[0],c[1])}}function wv(){this.size=0,this.__data__={hash:new zt,map:new(ya||jo),string:new zt}}function vv(e){var o=Qi(this,e).delete(e);return this.size-=o?1:0,o}function Cv(e){return Qi(this,e).get(e)}function Lv(e){return Qi(this,e).has(e)}function Av(e,o){var i=Qi(this,e),c=i.size;return i.set(e,o),this.size+=i.size==c?0:1,this}Xo.prototype.clear=wv,Xo.prototype.delete=vv,Xo.prototype.get=Cv,Xo.prototype.has=Lv,Xo.prototype.set=Av;function qt(e){var o=-1,i=e==null?0:e.length;for(this.__data__=new Xo;++o<i;)this.add(e[o])}function Iv(e){return this.__data__.set(e,f),this}function Pv(e){return this.__data__.has(e)}qt.prototype.add=qt.prototype.push=Iv,qt.prototype.has=Pv;function yo(e){var o=this.__data__=new jo(e);this.size=o.size}function kv(){this.__data__=new jo,this.size=0}function Nv(e){var o=this.__data__,i=o.delete(e);return this.size=o.size,i}function Ev(e){return this.__data__.get(e)}function Rv(e){return this.__data__.has(e)}function Dv(e,o){var i=this.__data__;if(i instanceof jo){var c=i.__data__;if(!ya||c.length<a-1)return c.push([e,o]),this.size=++i.size,this;i=this.__data__=new Xo(c)}return i.set(e,o),this.size=i.size,this}yo.prototype.clear=kv,yo.prototype.delete=Nv,yo.prototype.get=Ev,yo.prototype.has=Rv,yo.prototype.set=Dv;function A_(e,o){var i=pe(e),c=!i&&Yt(e),u=!i&&!c&&At(e),h=!i&&!c&&!u&&Ir(e),S=i||c||u||h,w=S?Zc(e.length,zw):[],L=w.length;for(var D in e)(o||Le.call(e,D))&&!(S&&(D=="length"||u&&(D=="offset"||D=="parent")||h&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||Qo(D,L)))&&w.push(D);return w}function I_(e){var o=e.length;return o?e[up(0,o-1)]:n}function Mv(e,o){return es(Bn(e),Vt(o,0,e.length))}function Bv(e){return es(Bn(e))}function rp(e,o,i){(i!==n&&!So(e[o],i)||i===n&&!(o in e))&&Yo(e,o,i)}function va(e,o,i){var c=e[o];(!(Le.call(e,o)&&So(c,i))||i===n&&!(o in e))&&Yo(e,o,i)}function Gi(e,o){for(var i=e.length;i--;)if(So(e[i][0],o))return i;return-1}function Ov(e,o,i,c){return wt(e,function(u,h,S){o(c,u,i(u),S)}),c}function P_(e,o){return e&&ko(o,_n(o),e)}function Wv(e,o){return e&&ko(o,Wn(o),e)}function Yo(e,o,i){o=="__proto__"&&Mi?Mi(e,o,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[o]=i}function ap(e,o){for(var i=-1,c=o.length,u=P(c),h=e==null;++i<c;)u[i]=h?n:Fp(e,o[i]);return u}function Vt(e,o,i){return e===e&&(i!==n&&(e=e<=i?e:i),o!==n&&(e=e>=o?e:o)),e}function mo(e,o,i,c,u,h){var S,w=o&x,L=o&v,D=o&b;if(i&&(S=u?i(e,c,u,h):i(e)),S!==n)return S;if(!He(e))return e;var B=pe(e);if(B){if(S=L1(e),!w)return Bn(e,S)}else{var W=Ln(e),q=W==Me||W==je;if(At(e))return Q_(e,w);if(W==vn||W==an||q&&!u){if(S=L||q?{}:xu(e),!w)return L?g1(e,Wv(S,e)):u1(e,P_(S,e))}else{if(!Be[W])return u?e:{};S=A1(e,W,w)}}h||(h=new yo);var Z=h.get(e);if(Z)return Z;h.set(e,S),Ku(e)?e.forEach(function(te){S.add(mo(te,o,i,te,e,h))}):qu(e)&&e.forEach(function(te,ue){S.set(ue,mo(te,o,i,ue,e,h))});var oe=D?L?Cp:vp:L?Wn:_n,le=B?n:oe(e);return so(le||e,function(te,ue){le&&(ue=te,te=e[ue]),va(S,ue,mo(te,o,i,ue,e,h))}),S}function Fv(e){var o=_n(e);return function(i){return k_(i,e,o)}}function k_(e,o,i){var c=i.length;if(e==null)return!c;for(e=Ne(e);c--;){var u=i[c],h=o[u],S=e[u];if(S===n&&!(u in e)||!h(S))return!1}return!0}function N_(e,o,i){if(typeof e!="function")throw new co(l);return Na(function(){e.apply(n,i)},o)}function Ca(e,o,i,c){var u=-1,h=vi,S=!0,w=e.length,L=[],D=o.length;if(!w)return L;i&&(o=Ue(o,Jn(i))),c?(h=qc,S=!1):o.length>=a&&(h=xa,S=!1,o=new qt(o));e:for(;++u<w;){var B=e[u],W=i==null?B:i(B);if(B=c||B!==0?B:0,S&&W===W){for(var q=D;q--;)if(o[q]===W)continue e;L.push(B)}else h(o,W,c)||L.push(B)}return L}var wt=ru(Po),E_=ru(sp,!0);function Uv(e,o){var i=!0;return wt(e,function(c,u,h){return i=!!o(c,u,h),i}),i}function Hi(e,o,i){for(var c=-1,u=e.length;++c<u;){var h=e[c],S=o(h);if(S!=null&&(w===n?S===S&&!eo(S):i(S,w)))var w=S,L=h}return L}function Gv(e,o,i,c){var u=e.length;for(i=me(i),i<0&&(i=-i>u?0:u+i),c=c===n||c>u?u:me(c),c<0&&(c+=u),c=i>c?0:Xu(c);i<c;)e[i++]=o;return e}function R_(e,o){var i=[];return wt(e,function(c,u,h){o(c,u,h)&&i.push(c)}),i}function xn(e,o,i,c,u){var h=-1,S=e.length;for(i||(i=P1),u||(u=[]);++h<S;){var w=e[h];o>0&&i(w)?o>1?xn(w,o-1,i,c,u):Tt(u,w):c||(u[u.length]=w)}return u}var ip=au(),D_=au(!0);function Po(e,o){return e&&ip(e,o,_n)}function sp(e,o){return e&&D_(e,o,_n)}function $i(e,o){return xt(o,function(i){return et(e[i])})}function Kt(e,o){o=Ct(o,e);for(var i=0,c=o.length;e!=null&&i<c;)e=e[No(o[i++])];return i&&i==c?e:n}function M_(e,o,i){var c=o(e);return pe(e)?c:Tt(c,i(e))}function kn(e){return e==null?e===n?fb:Mn:$t&&$t in Ne(e)?w1(e):B1(e)}function cp(e,o){return e>o}function Hv(e,o){return e!=null&&Le.call(e,o)}function $v(e,o){return e!=null&&o in Ne(e)}function zv(e,o,i){return e>=Cn(o,i)&&e<pn(o,i)}function pp(e,o,i){for(var c=i?qc:vi,u=e[0].length,h=e.length,S=h,w=P(h),L=1/0,D=[];S--;){var B=e[S];S&&o&&(B=Ue(B,Jn(o))),L=Cn(B.length,L),w[S]=!i&&(o||u>=120&&B.length>=120)?new qt(S&&B):n}B=e[0];var W=-1,q=w[0];e:for(;++W<u&&D.length<L;){var Z=B[W],oe=o?o(Z):Z;if(Z=i||Z!==0?Z:0,!(q?xa(q,oe):c(D,oe,i))){for(S=h;--S;){var le=w[S];if(!(le?xa(le,oe):c(e[S],oe,i)))continue e}q&&q.push(oe),D.push(Z)}}return D}function qv(e,o,i,c){return Po(e,function(u,h,S){o(c,i(u),h,S)}),c}function La(e,o,i){o=Ct(o,e),e=bu(e,o);var c=e==null?e:e[No(_o(o))];return c==null?n:Zn(c,e,i)}function B_(e){return Ve(e)&&kn(e)==an}function Vv(e){return Ve(e)&&kn(e)==ha}function Kv(e){return Ve(e)&&kn(e)==ye}function Aa(e,o,i,c,u){return e===o?!0:e==null||o==null||!Ve(e)&&!Ve(o)?e!==e&&o!==o:jv(e,o,i,c,Aa,u)}function jv(e,o,i,c,u,h){var S=pe(e),w=pe(o),L=S?Io:Ln(e),D=w?Io:Ln(o);L=L==an?vn:L,D=D==an?vn:D;var B=L==vn,W=D==vn,q=L==D;if(q&&At(e)){if(!At(o))return!1;S=!0,B=!1}if(q&&!B)return h||(h=new yo),S||Ir(e)?gu(e,o,i,c,u,h):S1(e,o,L,i,c,u,h);if(!(i&I)){var Z=B&&Le.call(e,"__wrapped__"),oe=W&&Le.call(o,"__wrapped__");if(Z||oe){var le=Z?e.value():e,te=oe?o.value():o;return h||(h=new yo),u(le,te,i,c,h)}}return q?(h||(h=new yo),b1(e,o,i,c,u,h)):!1}function Xv(e){return Ve(e)&&Ln(e)==ke}function dp(e,o,i,c){var u=i.length,h=u,S=!c;if(e==null)return!h;for(e=Ne(e);u--;){var w=i[u];if(S&&w[2]?w[1]!==e[w[0]]:!(w[0]in e))return!1}for(;++u<h;){w=i[u];var L=w[0],D=e[L],B=w[1];if(S&&w[2]){if(D===n&&!(L in e))return!1}else{var W=new yo;if(c)var q=c(D,B,L,e,o,W);if(!(q===n?Aa(B,D,I|N,c,W):q))return!1}}return!0}function O_(e){if(!He(e)||N1(e))return!1;var o=et(e)?Xw:Fb;return o.test(Xt(e))}function Yv(e){return Ve(e)&&kn(e)==ua}function Zv(e){return Ve(e)&&Ln(e)==xo}function Jv(e){return Ve(e)&&is(e.length)&&!!Oe[kn(e)]}function W_(e){return typeof e=="function"?e:e==null?Fn:typeof e=="object"?pe(e)?G_(e[0],e[1]):U_(e):ig(e)}function mp(e){if(!ka(e))return nv(e);var o=[];for(var i in Ne(e))Le.call(e,i)&&i!="constructor"&&o.push(i);return o}function Qv(e){if(!He(e))return M1(e);var o=ka(e),i=[];for(var c in e)c=="constructor"&&(o||!Le.call(e,c))||i.push(c);return i}function lp(e,o){return e<o}function F_(e,o){var i=-1,c=On(e)?P(e.length):[];return wt(e,function(u,h,S){c[++i]=o(u,h,S)}),c}function U_(e){var o=Ap(e);return o.length==1&&o[0][2]?yu(o[0][0],o[0][1]):function(i){return i===e||dp(i,e,o)}}function G_(e,o){return Pp(e)&&Tu(o)?yu(No(e),o):function(i){var c=Fp(i,e);return c===n&&c===o?Up(i,e):Aa(o,c,I|N)}}function zi(e,o,i,c,u){e!==o&&ip(o,function(h,S){if(u||(u=new yo),He(h))e1(e,o,S,i,zi,c,u);else{var w=c?c(Np(e,S),h,S+"",e,o,u):n;w===n&&(w=h),rp(e,S,w)}},Wn)}function e1(e,o,i,c,u,h,S){var w=Np(e,i),L=Np(o,i),D=S.get(L);if(D){rp(e,i,D);return}var B=h?h(w,L,i+"",e,o,S):n,W=B===n;if(W){var q=pe(L),Z=!q&&At(L),oe=!q&&!Z&&Ir(L);B=L,q||Z||oe?pe(w)?B=w:Xe(w)?B=Bn(w):Z?(W=!1,B=Q_(L,!0)):oe?(W=!1,B=eu(L,!0)):B=[]:Ea(L)||Yt(L)?(B=w,Yt(w)?B=Yu(w):(!He(w)||et(w))&&(B=xu(L))):W=!1}W&&(S.set(L,B),u(B,L,c,h,S),S.delete(L)),rp(e,i,B)}function H_(e,o){var i=e.length;if(!!i)return o+=o<0?i:0,Qo(o,i)?e[o]:n}function $_(e,o,i){o.length?o=Ue(o,function(h){return pe(h)?function(S){return Kt(S,h.length===1?h[0]:h)}:h}):o=[Fn];var c=-1;o=Ue(o,Jn(ee()));var u=F_(e,function(h,S,w){var L=Ue(o,function(D){return D(h)});return{criteria:L,index:++c,value:h}});return Aw(u,function(h,S){return _1(h,S,i)})}function n1(e,o){return z_(e,o,function(i,c){return Up(e,c)})}function z_(e,o,i){for(var c=-1,u=o.length,h={};++c<u;){var S=o[c],w=Kt(e,S);i(w,S)&&Ia(h,Ct(S,e),w)}return h}function o1(e){return function(o){return Kt(o,e)}}function _p(e,o,i,c){var u=c?Lw:xr,h=-1,S=o.length,w=e;for(e===o&&(o=Bn(o)),i&&(w=Ue(e,Jn(i)));++h<S;)for(var L=0,D=o[h],B=i?i(D):D;(L=u(w,B,L,c))>-1;)w!==e&&Di.call(w,L,1),Di.call(e,L,1);return e}function q_(e,o){for(var i=e?o.length:0,c=i-1;i--;){var u=o[i];if(i==c||u!==h){var h=u;Qo(u)?Di.call(e,u,1):hp(e,u)}}return e}function up(e,o){return e+Oi(C_()*(o-e+1))}function t1(e,o,i,c){for(var u=-1,h=pn(Bi((o-e)/(i||1)),0),S=P(h);h--;)S[c?h:++u]=e,e+=i;return S}function gp(e,o){var i="";if(!e||o<1||o>Ae)return i;do o%2&&(i+=e),o=Oi(o/2),o&&(e+=e);while(o);return i}function _e(e,o){return Ep(Su(e,o,Fn),e+"")}function r1(e){return I_(Pr(e))}function a1(e,o){var i=Pr(e);return es(i,Vt(o,0,i.length))}function Ia(e,o,i,c){if(!He(e))return e;o=Ct(o,e);for(var u=-1,h=o.length,S=h-1,w=e;w!=null&&++u<h;){var L=No(o[u]),D=i;if(L==="__proto__"||L==="constructor"||L==="prototype")return e;if(u!=S){var B=w[L];D=c?c(B,L,w):n,D===n&&(D=He(B)?B:Qo(o[u+1])?[]:{})}va(w,L,D),w=w[L]}return e}var V_=Wi?function(e,o){return Wi.set(e,o),e}:Fn,i1=Mi?function(e,o){return Mi(e,"toString",{configurable:!0,enumerable:!1,value:Hp(o),writable:!0})}:Fn;function s1(e){return es(Pr(e))}function lo(e,o,i){var c=-1,u=e.length;o<0&&(o=-o>u?0:u+o),i=i>u?u:i,i<0&&(i+=u),u=o>i?0:i-o>>>0,o>>>=0;for(var h=P(u);++c<u;)h[c]=e[c+o];return h}function c1(e,o){var i;return wt(e,function(c,u,h){return i=o(c,u,h),!i}),!!i}function qi(e,o,i){var c=0,u=e==null?c:e.length;if(typeof o=="number"&&o===o&&u<=Gt){for(;c<u;){var h=c+u>>>1,S=e[h];S!==null&&!eo(S)&&(i?S<=o:S<o)?c=h+1:u=h}return u}return fp(e,o,Fn,i)}function fp(e,o,i,c){var u=0,h=e==null?0:e.length;if(h===0)return 0;o=i(o);for(var S=o!==o,w=o===null,L=eo(o),D=o===n;u<h;){var B=Oi((u+h)/2),W=i(e[B]),q=W!==n,Z=W===null,oe=W===W,le=eo(W);if(S)var te=c||oe;else D?te=oe&&(c||q):w?te=oe&&q&&(c||!Z):L?te=oe&&q&&!Z&&(c||!le):Z||le?te=!1:te=c?W<=o:W<o;te?u=B+1:h=B}return Cn(h,Ut)}function K_(e,o){for(var i=-1,c=e.length,u=0,h=[];++i<c;){var S=e[i],w=o?o(S):S;if(!i||!So(w,L)){var L=w;h[u++]=S===0?0:S}}return h}function j_(e){return typeof e=="number"?e:eo(e)?nn:+e}function Qn(e){if(typeof e=="string")return e;if(pe(e))return Ue(e,Qn)+"";if(eo(e))return L_?L_.call(e):"";var o=e+"";return o=="0"&&1/e==-fe?"-0":o}function vt(e,o,i){var c=-1,u=vi,h=e.length,S=!0,w=[],L=w;if(i)S=!1,u=qc;else if(h>=a){var D=o?null:T1(e);if(D)return Li(D);S=!1,u=xa,L=new qt}else L=o?[]:w;e:for(;++c<h;){var B=e[c],W=o?o(B):B;if(B=i||B!==0?B:0,S&&W===W){for(var q=L.length;q--;)if(L[q]===W)continue e;o&&L.push(W),w.push(B)}else u(L,W,i)||(L!==w&&L.push(W),w.push(B))}return w}function hp(e,o){return o=Ct(o,e),e=bu(e,o),e==null||delete e[No(_o(o))]}function X_(e,o,i,c){return Ia(e,o,i(Kt(e,o)),c)}function Vi(e,o,i,c){for(var u=e.length,h=c?u:-1;(c?h--:++h<u)&&o(e[h],h,e););return i?lo(e,c?0:h,c?h+1:u):lo(e,c?h+1:0,c?u:h)}function Y_(e,o){var i=e;return i instanceof ge&&(i=i.value()),Vc(o,function(c,u){return u.func.apply(u.thisArg,Tt([c],u.args))},i)}function xp(e,o,i){var c=e.length;if(c<2)return c?vt(e[0]):[];for(var u=-1,h=P(c);++u<c;)for(var S=e[u],w=-1;++w<c;)w!=u&&(h[u]=Ca(h[u]||S,e[w],o,i));return vt(xn(h,1),o,i)}function Z_(e,o,i){for(var c=-1,u=e.length,h=o.length,S={};++c<u;){var w=c<h?o[c]:n;i(S,e[c],w)}return S}function Tp(e){return Xe(e)?e:[]}function yp(e){return typeof e=="function"?e:Fn}function Ct(e,o){return pe(e)?e:Pp(e,o)?[e]:Lu(ve(e))}var p1=_e;function Lt(e,o,i){var c=e.length;return i=i===n?c:i,!o&&i>=c?e:lo(e,o,i)}var J_=Yw||function(e){return ln.clearTimeout(e)};function Q_(e,o){if(o)return e.slice();var i=e.length,c=y_?y_(i):new e.constructor(i);return e.copy(c),c}function Sp(e){var o=new e.constructor(e.byteLength);return new Ei(o).set(new Ei(e)),o}function d1(e,o){var i=o?Sp(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.byteLength)}function m1(e){var o=new e.constructor(e.source,Bl.exec(e));return o.lastIndex=e.lastIndex,o}function l1(e){return wa?Ne(wa.call(e)):{}}function eu(e,o){var i=o?Sp(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.length)}function nu(e,o){if(e!==o){var i=e!==n,c=e===null,u=e===e,h=eo(e),S=o!==n,w=o===null,L=o===o,D=eo(o);if(!w&&!D&&!h&&e>o||h&&S&&L&&!w&&!D||c&&S&&L||!i&&L||!u)return 1;if(!c&&!h&&!D&&e<o||D&&i&&u&&!c&&!h||w&&i&&u||!S&&u||!L)return-1}return 0}function _1(e,o,i){for(var c=-1,u=e.criteria,h=o.criteria,S=u.length,w=i.length;++c<S;){var L=nu(u[c],h[c]);if(L){if(c>=w)return L;var D=i[c];return L*(D=="desc"?-1:1)}}return e.index-o.index}function ou(e,o,i,c){for(var u=-1,h=e.length,S=i.length,w=-1,L=o.length,D=pn(h-S,0),B=P(L+D),W=!c;++w<L;)B[w]=o[w];for(;++u<S;)(W||u<h)&&(B[i[u]]=e[u]);for(;D--;)B[w++]=e[u++];return B}function tu(e,o,i,c){for(var u=-1,h=e.length,S=-1,w=i.length,L=-1,D=o.length,B=pn(h-w,0),W=P(B+D),q=!c;++u<B;)W[u]=e[u];for(var Z=u;++L<D;)W[Z+L]=o[L];for(;++S<w;)(q||u<h)&&(W[Z+i[S]]=e[u++]);return W}function Bn(e,o){var i=-1,c=e.length;for(o||(o=P(c));++i<c;)o[i]=e[i];return o}function ko(e,o,i,c){var u=!i;i||(i={});for(var h=-1,S=o.length;++h<S;){var w=o[h],L=c?c(i[w],e[w],w,i,e):n;L===n&&(L=e[w]),u?Yo(i,w,L):va(i,w,L)}return i}function u1(e,o){return ko(e,Ip(e),o)}function g1(e,o){return ko(e,fu(e),o)}function Ki(e,o){return function(i,c){var u=pe(i)?yw:Ov,h=o?o():{};return u(i,e,ee(c,2),h)}}function Cr(e){return _e(function(o,i){var c=-1,u=i.length,h=u>1?i[u-1]:n,S=u>2?i[2]:n;for(h=e.length>3&&typeof h=="function"?(u--,h):n,S&&Nn(i[0],i[1],S)&&(h=u<3?n:h,u=1),o=Ne(o);++c<u;){var w=i[c];w&&e(o,w,c,h)}return o})}function ru(e,o){return function(i,c){if(i==null)return i;if(!On(i))return e(i,c);for(var u=i.length,h=o?u:-1,S=Ne(i);(o?h--:++h<u)&&c(S[h],h,S)!==!1;);return i}}function au(e){return function(o,i,c){for(var u=-1,h=Ne(o),S=c(o),w=S.length;w--;){var L=S[e?w:++u];if(i(h[L],L,h)===!1)break}return o}}function f1(e,o,i){var c=o&O,u=Pa(e);function h(){var S=this&&this!==ln&&this instanceof h?u:e;return S.apply(c?i:this,arguments)}return h}function iu(e){return function(o){o=ve(o);var i=Tr(o)?To(o):n,c=i?i[0]:o.charAt(0),u=i?Lt(i,1).join(""):o.slice(1);return c[e]()+u}}function Lr(e){return function(o){return Vc(rg(tg(o).replace(iw,"")),e,"")}}function Pa(e){return function(){var o=arguments;switch(o.length){case 0:return new e;case 1:return new e(o[0]);case 2:return new e(o[0],o[1]);case 3:return new e(o[0],o[1],o[2]);case 4:return new e(o[0],o[1],o[2],o[3]);case 5:return new e(o[0],o[1],o[2],o[3],o[4]);case 6:return new e(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new e(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var i=vr(e.prototype),c=e.apply(i,o);return He(c)?c:i}}function h1(e,o,i){var c=Pa(e);function u(){for(var h=arguments.length,S=P(h),w=h,L=Ar(u);w--;)S[w]=arguments[w];var D=h<3&&S[0]!==L&&S[h-1]!==L?[]:yt(S,L);if(h-=D.length,h<i)return mu(e,o,ji,u.placeholder,n,S,D,n,n,i-h);var B=this&&this!==ln&&this instanceof u?c:e;return Zn(B,this,S)}return u}function su(e){return function(o,i,c){var u=Ne(o);if(!On(o)){var h=ee(i,3);o=_n(o),i=function(w){return h(u[w],w,u)}}var S=e(o,i,c);return S>-1?u[h?o[S]:S]:n}}function cu(e){return Jo(function(o){var i=o.length,c=i,u=po.prototype.thru;for(e&&o.reverse();c--;){var h=o[c];if(typeof h!="function")throw new co(l);if(u&&!S&&Ji(h)=="wrapper")var S=new po([],!0)}for(c=S?c:i;++c<i;){h=o[c];var w=Ji(h),L=w=="wrapper"?Lp(h):n;L&&kp(L[0])&&L[1]==(z|H|Y|Q)&&!L[4].length&&L[9]==1?S=S[Ji(L[0])].apply(S,L[3]):S=h.length==1&&kp(h)?S[w]():S.thru(h)}return function(){var D=arguments,B=D[0];if(S&&D.length==1&&pe(B))return S.plant(B).value();for(var W=0,q=i?o[W].apply(this,D):B;++W<i;)q=o[W].call(this,q);return q}})}function ji(e,o,i,c,u,h,S,w,L,D){var B=o&z,W=o&O,q=o&A,Z=o&(H|j),oe=o&Ce,le=q?n:Pa(e);function te(){for(var ue=arguments.length,xe=P(ue),no=ue;no--;)xe[no]=arguments[no];if(Z)var En=Ar(te),oo=Pw(xe,En);if(c&&(xe=ou(xe,c,u,Z)),h&&(xe=tu(xe,h,S,Z)),ue-=oo,Z&&ue<D){var Ye=yt(xe,En);return mu(e,o,ji,te.placeholder,i,xe,Ye,w,L,D-ue)}var bo=W?i:this,ot=q?bo[e]:e;return ue=xe.length,w?xe=O1(xe,w):oe&&ue>1&&xe.reverse(),B&&L<ue&&(xe.length=L),this&&this!==ln&&this instanceof te&&(ot=le||Pa(ot)),ot.apply(bo,xe)}return te}function pu(e,o){return function(i,c){return qv(i,e,o(c),{})}}function Xi(e,o){return function(i,c){var u;if(i===n&&c===n)return o;if(i!==n&&(u=i),c!==n){if(u===n)return c;typeof i=="string"||typeof c=="string"?(i=Qn(i),c=Qn(c)):(i=j_(i),c=j_(c)),u=e(i,c)}return u}}function bp(e){return Jo(function(o){return o=Ue(o,Jn(ee())),_e(function(i){var c=this;return e(o,function(u){return Zn(u,c,i)})})})}function Yi(e,o){o=o===n?" ":Qn(o);var i=o.length;if(i<2)return i?gp(o,e):o;var c=gp(o,Bi(e/yr(o)));return Tr(o)?Lt(To(c),0,e).join(""):c.slice(0,e)}function x1(e,o,i,c){var u=o&O,h=Pa(e);function S(){for(var w=-1,L=arguments.length,D=-1,B=c.length,W=P(B+L),q=this&&this!==ln&&this instanceof S?h:e;++D<B;)W[D]=c[D];for(;L--;)W[D++]=arguments[++w];return Zn(q,u?i:this,W)}return S}function du(e){return function(o,i,c){return c&&typeof c!="number"&&Nn(o,i,c)&&(i=c=n),o=nt(o),i===n?(i=o,o=0):i=nt(i),c=c===n?o<i?1:-1:nt(c),t1(o,i,c,e)}}function Zi(e){return function(o,i){return typeof o=="string"&&typeof i=="string"||(o=uo(o),i=uo(i)),e(o,i)}}function mu(e,o,i,c,u,h,S,w,L,D){var B=o&H,W=B?S:n,q=B?n:S,Z=B?h:n,oe=B?n:h;o|=B?Y:V,o&=~(B?V:Y),o&U||(o&=~(O|A));var le=[e,o,u,Z,W,oe,q,w,L,D],te=i.apply(n,le);return kp(e)&&wu(te,le),te.placeholder=c,vu(te,e,o)}function wp(e){var o=cn[e];return function(i,c){if(i=uo(i),c=c==null?0:Cn(me(c),292),c&&v_(i)){var u=(ve(i)+"e").split("e"),h=o(u[0]+"e"+(+u[1]+c));return u=(ve(h)+"e").split("e"),+(u[0]+"e"+(+u[1]-c))}return o(i)}}var T1=br&&1/Li(new br([,-0]))[1]==fe?function(e){return new br(e)}:qp;function lu(e){return function(o){var i=Ln(o);return i==ke?Qc(o):i==xo?Bw(o):Iw(o,e(o))}}function Zo(e,o,i,c,u,h,S,w){var L=o&A;if(!L&&typeof e!="function")throw new co(l);var D=c?c.length:0;if(D||(o&=~(Y|V),c=u=n),S=S===n?S:pn(me(S),0),w=w===n?w:me(w),D-=u?u.length:0,o&V){var B=c,W=u;c=u=n}var q=L?n:Lp(e),Z=[e,o,i,c,u,B,W,h,S,w];if(q&&D1(Z,q),e=Z[0],o=Z[1],i=Z[2],c=Z[3],u=Z[4],w=Z[9]=Z[9]===n?L?0:e.length:pn(Z[9]-D,0),!w&&o&(H|j)&&(o&=~(H|j)),!o||o==O)var oe=f1(e,o,i);else o==H||o==j?oe=h1(e,o,w):(o==Y||o==(O|Y))&&!u.length?oe=x1(e,o,i,c):oe=ji.apply(n,Z);var le=q?V_:wu;return vu(le(oe,Z),e,o)}function _u(e,o,i,c){return e===n||So(e,Sr[i])&&!Le.call(c,i)?o:e}function uu(e,o,i,c,u,h){return He(e)&&He(o)&&(h.set(o,e),zi(e,o,n,uu,h),h.delete(o)),e}function y1(e){return Ea(e)?n:e}function gu(e,o,i,c,u,h){var S=i&I,w=e.length,L=o.length;if(w!=L&&!(S&&L>w))return!1;var D=h.get(e),B=h.get(o);if(D&&B)return D==o&&B==e;var W=-1,q=!0,Z=i&N?new qt:n;for(h.set(e,o),h.set(o,e);++W<w;){var oe=e[W],le=o[W];if(c)var te=S?c(le,oe,W,o,e,h):c(oe,le,W,e,o,h);if(te!==n){if(te)continue;q=!1;break}if(Z){if(!Kc(o,function(ue,xe){if(!xa(Z,xe)&&(oe===ue||u(oe,ue,i,c,h)))return Z.push(xe)})){q=!1;break}}else if(!(oe===le||u(oe,le,i,c,h))){q=!1;break}}return h.delete(e),h.delete(o),q}function S1(e,o,i,c,u,h,S){switch(i){case fr:if(e.byteLength!=o.byteLength||e.byteOffset!=o.byteOffset)return!1;e=e.buffer,o=o.buffer;case ha:return!(e.byteLength!=o.byteLength||!h(new Ei(e),new Ei(o)));case he:case ye:case hn:return So(+e,+o);case Se:return e.name==o.name&&e.message==o.message;case ua:case ga:return e==o+"";case ke:var w=Qc;case xo:var L=c&I;if(w||(w=Li),e.size!=o.size&&!L)return!1;var D=S.get(e);if(D)return D==o;c|=N,S.set(e,o);var B=gu(w(e),w(o),c,u,h,S);return S.delete(e),B;case yi:if(wa)return wa.call(e)==wa.call(o)}return!1}function b1(e,o,i,c,u,h){var S=i&I,w=vp(e),L=w.length,D=vp(o),B=D.length;if(L!=B&&!S)return!1;for(var W=L;W--;){var q=w[W];if(!(S?q in o:Le.call(o,q)))return!1}var Z=h.get(e),oe=h.get(o);if(Z&&oe)return Z==o&&oe==e;var le=!0;h.set(e,o),h.set(o,e);for(var te=S;++W<L;){q=w[W];var ue=e[q],xe=o[q];if(c)var no=S?c(xe,ue,q,o,e,h):c(ue,xe,q,e,o,h);if(!(no===n?ue===xe||u(ue,xe,i,c,h):no)){le=!1;break}te||(te=q=="constructor")}if(le&&!te){var En=e.constructor,oo=o.constructor;En!=oo&&"constructor"in e&&"constructor"in o&&!(typeof En=="function"&&En instanceof En&&typeof oo=="function"&&oo instanceof oo)&&(le=!1)}return h.delete(e),h.delete(o),le}function Jo(e){return Ep(Su(e,n,ku),e+"")}function vp(e){return M_(e,_n,Ip)}function Cp(e){return M_(e,Wn,fu)}var Lp=Wi?function(e){return Wi.get(e)}:qp;function Ji(e){for(var o=e.name+"",i=wr[o],c=Le.call(wr,o)?i.length:0;c--;){var u=i[c],h=u.func;if(h==null||h==e)return u.name}return o}function Ar(e){var o=Le.call(g,"placeholder")?g:e;return o.placeholder}function ee(){var e=g.iteratee||$p;return e=e===$p?W_:e,arguments.length?e(arguments[0],arguments[1]):e}function Qi(e,o){var i=e.__data__;return k1(o)?i[typeof o=="string"?"string":"hash"]:i.map}function Ap(e){for(var o=_n(e),i=o.length;i--;){var c=o[i],u=e[c];o[i]=[c,u,Tu(u)]}return o}function jt(e,o){var i=Rw(e,o);return O_(i)?i:n}function w1(e){var o=Le.call(e,$t),i=e[$t];try{e[$t]=n;var c=!0}catch(h){}var u=ki.call(e);return c&&(o?e[$t]=i:delete e[$t]),u}var Ip=np?function(e){return e==null?[]:(e=Ne(e),xt(np(e),function(o){return b_.call(e,o)}))}:Vp,fu=np?function(e){for(var o=[];e;)Tt(o,Ip(e)),e=Ri(e);return o}:Vp,Ln=kn;(op&&Ln(new op(new ArrayBuffer(1)))!=fr||ya&&Ln(new ya)!=ke||tp&&Ln(tp.resolve())!=gr||br&&Ln(new br)!=xo||Sa&&Ln(new Sa)!=fa)&&(Ln=function(e){var o=kn(e),i=o==vn?e.constructor:n,c=i?Xt(i):"";if(c)switch(c){case av:return fr;case iv:return ke;case sv:return gr;case cv:return xo;case pv:return fa}return o});function v1(e,o,i){for(var c=-1,u=i.length;++c<u;){var h=i[c],S=h.size;switch(h.type){case"drop":e+=S;break;case"dropRight":o-=S;break;case"take":o=Cn(o,e+S);break;case"takeRight":e=pn(e,o-S);break}}return{start:e,end:o}}function C1(e){var o=e.match(Nb);return o?o[1].split(Eb):[]}function hu(e,o,i){o=Ct(o,e);for(var c=-1,u=o.length,h=!1;++c<u;){var S=No(o[c]);if(!(h=e!=null&&i(e,S)))break;e=e[S]}return h||++c!=u?h:(u=e==null?0:e.length,!!u&&is(u)&&Qo(S,u)&&(pe(e)||Yt(e)))}function L1(e){var o=e.length,i=new e.constructor(o);return o&&typeof e[0]=="string"&&Le.call(e,"index")&&(i.index=e.index,i.input=e.input),i}function xu(e){return typeof e.constructor=="function"&&!ka(e)?vr(Ri(e)):{}}function A1(e,o,i){var c=e.constructor;switch(o){case ha:return Sp(e);case he:case ye:return new c(+e);case fr:return d1(e,i);case Ac:case Ic:case Pc:case kc:case Nc:case Ec:case Rc:case Dc:case Mc:return eu(e,i);case ke:return new c;case hn:case ga:return new c(e);case ua:return m1(e);case xo:return new c;case yi:return l1(e)}}function I1(e,o){var i=o.length;if(!i)return e;var c=i-1;return o[c]=(i>1?"& ":"")+o[c],o=o.join(i>2?", ":" "),e.replace(kb,`{
/* [wrapped with `+o+`] */
`)}function P1(e){return pe(e)||Yt(e)||!!(w_&&e&&e[w_])}function Qo(e,o){var i=typeof e;return o=o==null?Ae:o,!!o&&(i=="number"||i!="symbol"&&Gb.test(e))&&e>-1&&e%1==0&&e<o}function Nn(e,o,i){if(!He(i))return!1;var c=typeof o;return(c=="number"?On(i)&&Qo(o,i.length):c=="string"&&o in i)?So(i[o],e):!1}function Pp(e,o){if(pe(e))return!1;var i=typeof e;return i=="number"||i=="symbol"||i=="boolean"||e==null||eo(e)?!0:Lb.test(e)||!Cb.test(e)||o!=null&&e in Ne(o)}function k1(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}function kp(e){var o=Ji(e),i=g[o];if(typeof i!="function"||!(o in ge.prototype))return!1;if(e===i)return!0;var c=Lp(i);return!!c&&e===c[0]}function N1(e){return!!T_&&T_ in e}var E1=Ii?et:Kp;function ka(e){var o=e&&e.constructor,i=typeof o=="function"&&o.prototype||Sr;return e===i}function Tu(e){return e===e&&!He(e)}function yu(e,o){return function(i){return i==null?!1:i[e]===o&&(o!==n||e in Ne(i))}}function R1(e){var o=rs(e,function(c){return i.size===T&&i.clear(),c}),i=o.cache;return o}function D1(e,o){var i=e[1],c=o[1],u=i|c,h=u<(O|A|z),S=c==z&&i==H||c==z&&i==Q&&e[7].length<=o[8]||c==(z|Q)&&o[7].length<=o[8]&&i==H;if(!(h||S))return e;c&O&&(e[2]=o[2],u|=i&O?0:U);var w=o[3];if(w){var L=e[3];e[3]=L?ou(L,w,o[4]):w,e[4]=L?yt(e[3],y):o[4]}return w=o[5],w&&(L=e[5],e[5]=L?tu(L,w,o[6]):w,e[6]=L?yt(e[5],y):o[6]),w=o[7],w&&(e[7]=w),c&z&&(e[8]=e[8]==null?o[8]:Cn(e[8],o[8])),e[9]==null&&(e[9]=o[9]),e[0]=o[0],e[1]=u,e}function M1(e){var o=[];if(e!=null)for(var i in Ne(e))o.push(i);return o}function B1(e){return ki.call(e)}function Su(e,o,i){return o=pn(o===n?e.length-1:o,0),function(){for(var c=arguments,u=-1,h=pn(c.length-o,0),S=P(h);++u<h;)S[u]=c[o+u];u=-1;for(var w=P(o+1);++u<o;)w[u]=c[u];return w[o]=i(S),Zn(e,this,w)}}function bu(e,o){return o.length<2?e:Kt(e,lo(o,0,-1))}function O1(e,o){for(var i=e.length,c=Cn(o.length,i),u=Bn(e);c--;){var h=o[c];e[c]=Qo(h,i)?u[h]:n}return e}function Np(e,o){if(!(o==="constructor"&&typeof e[o]=="function")&&o!="__proto__")return e[o]}var wu=Cu(V_),Na=Jw||function(e,o){return ln.setTimeout(e,o)},Ep=Cu(i1);function vu(e,o,i){var c=o+"";return Ep(e,I1(c,W1(C1(c),i)))}function Cu(e){var o=0,i=0;return function(){var c=ov(),u=de-(c-i);if(i=c,u>0){if(++o>=qe)return arguments[0]}else o=0;return e.apply(n,arguments)}}function es(e,o){var i=-1,c=e.length,u=c-1;for(o=o===n?c:o;++i<o;){var h=up(i,u),S=e[h];e[h]=e[i],e[i]=S}return e.length=o,e}var Lu=R1(function(e){var o=[];return e.charCodeAt(0)===46&&o.push(""),e.replace(Ab,function(i,c,u,h){o.push(u?h.replace(Mb,"$1"):c||i)}),o});function No(e){if(typeof e=="string"||eo(e))return e;var o=e+"";return o=="0"&&1/e==-fe?"-0":o}function Xt(e){if(e!=null){try{return Pi.call(e)}catch(o){}try{return e+""}catch(o){}}return""}function W1(e,o){return so(Ao,function(i){var c="_."+i[0];o&i[1]&&!vi(e,c)&&e.push(c)}),e.sort()}function Au(e){if(e instanceof ge)return e.clone();var o=new po(e.__wrapped__,e.__chain__);return o.__actions__=Bn(e.__actions__),o.__index__=e.__index__,o.__values__=e.__values__,o}function F1(e,o,i){(i?Nn(e,o,i):o===n)?o=1:o=pn(me(o),0);var c=e==null?0:e.length;if(!c||o<1)return[];for(var u=0,h=0,S=P(Bi(c/o));u<c;)S[h++]=lo(e,u,u+=o);return S}function U1(e){for(var o=-1,i=e==null?0:e.length,c=0,u=[];++o<i;){var h=e[o];h&&(u[c++]=h)}return u}function G1(){var e=arguments.length;if(!e)return[];for(var o=P(e-1),i=arguments[0],c=e;c--;)o[c-1]=arguments[c];return Tt(pe(i)?Bn(i):[i],xn(o,1))}var H1=_e(function(e,o){return Xe(e)?Ca(e,xn(o,1,Xe,!0)):[]}),$1=_e(function(e,o){var i=_o(o);return Xe(i)&&(i=n),Xe(e)?Ca(e,xn(o,1,Xe,!0),ee(i,2)):[]}),z1=_e(function(e,o){var i=_o(o);return Xe(i)&&(i=n),Xe(e)?Ca(e,xn(o,1,Xe,!0),n,i):[]});function q1(e,o,i){var c=e==null?0:e.length;return c?(o=i||o===n?1:me(o),lo(e,o<0?0:o,c)):[]}function V1(e,o,i){var c=e==null?0:e.length;return c?(o=i||o===n?1:me(o),o=c-o,lo(e,0,o<0?0:o)):[]}function K1(e,o){return e&&e.length?Vi(e,ee(o,3),!0,!0):[]}function j1(e,o){return e&&e.length?Vi(e,ee(o,3),!0):[]}function X1(e,o,i,c){var u=e==null?0:e.length;return u?(i&&typeof i!="number"&&Nn(e,o,i)&&(i=0,c=u),Gv(e,o,i,c)):[]}function Iu(e,o,i){var c=e==null?0:e.length;if(!c)return-1;var u=i==null?0:me(i);return u<0&&(u=pn(c+u,0)),Ci(e,ee(o,3),u)}function Pu(e,o,i){var c=e==null?0:e.length;if(!c)return-1;var u=c-1;return i!==n&&(u=me(i),u=i<0?pn(c+u,0):Cn(u,c-1)),Ci(e,ee(o,3),u,!0)}function ku(e){var o=e==null?0:e.length;return o?xn(e,1):[]}function Y1(e){var o=e==null?0:e.length;return o?xn(e,fe):[]}function Z1(e,o){var i=e==null?0:e.length;return i?(o=o===n?1:me(o),xn(e,o)):[]}function J1(e){for(var o=-1,i=e==null?0:e.length,c={};++o<i;){var u=e[o];c[u[0]]=u[1]}return c}function Nu(e){return e&&e.length?e[0]:n}function Q1(e,o,i){var c=e==null?0:e.length;if(!c)return-1;var u=i==null?0:me(i);return u<0&&(u=pn(c+u,0)),xr(e,o,u)}function eC(e){var o=e==null?0:e.length;return o?lo(e,0,-1):[]}var nC=_e(function(e){var o=Ue(e,Tp);return o.length&&o[0]===e[0]?pp(o):[]}),oC=_e(function(e){var o=_o(e),i=Ue(e,Tp);return o===_o(i)?o=n:i.pop(),i.length&&i[0]===e[0]?pp(i,ee(o,2)):[]}),tC=_e(function(e){var o=_o(e),i=Ue(e,Tp);return o=typeof o=="function"?o:n,o&&i.pop(),i.length&&i[0]===e[0]?pp(i,n,o):[]});function rC(e,o){return e==null?"":ev.call(e,o)}function _o(e){var o=e==null?0:e.length;return o?e[o-1]:n}function aC(e,o,i){var c=e==null?0:e.length;if(!c)return-1;var u=c;return i!==n&&(u=me(i),u=u<0?pn(c+u,0):Cn(u,c-1)),o===o?Ww(e,o,u):Ci(e,m_,u,!0)}function iC(e,o){return e&&e.length?H_(e,me(o)):n}var sC=_e(Eu);function Eu(e,o){return e&&e.length&&o&&o.length?_p(e,o):e}function cC(e,o,i){return e&&e.length&&o&&o.length?_p(e,o,ee(i,2)):e}function pC(e,o,i){return e&&e.length&&o&&o.length?_p(e,o,n,i):e}var dC=Jo(function(e,o){var i=e==null?0:e.length,c=ap(e,o);return q_(e,Ue(o,function(u){return Qo(u,i)?+u:u}).sort(nu)),c});function mC(e,o){var i=[];if(!(e&&e.length))return i;var c=-1,u=[],h=e.length;for(o=ee(o,3);++c<h;){var S=e[c];o(S,c,e)&&(i.push(S),u.push(c))}return q_(e,u),i}function Rp(e){return e==null?e:rv.call(e)}function lC(e,o,i){var c=e==null?0:e.length;return c?(i&&typeof i!="number"&&Nn(e,o,i)?(o=0,i=c):(o=o==null?0:me(o),i=i===n?c:me(i)),lo(e,o,i)):[]}function _C(e,o){return qi(e,o)}function uC(e,o,i){return fp(e,o,ee(i,2))}function gC(e,o){var i=e==null?0:e.length;if(i){var c=qi(e,o);if(c<i&&So(e[c],o))return c}return-1}function fC(e,o){return qi(e,o,!0)}function hC(e,o,i){return fp(e,o,ee(i,2),!0)}function xC(e,o){var i=e==null?0:e.length;if(i){var c=qi(e,o,!0)-1;if(So(e[c],o))return c}return-1}function TC(e){return e&&e.length?K_(e):[]}function yC(e,o){return e&&e.length?K_(e,ee(o,2)):[]}function SC(e){var o=e==null?0:e.length;return o?lo(e,1,o):[]}function bC(e,o,i){return e&&e.length?(o=i||o===n?1:me(o),lo(e,0,o<0?0:o)):[]}function wC(e,o,i){var c=e==null?0:e.length;return c?(o=i||o===n?1:me(o),o=c-o,lo(e,o<0?0:o,c)):[]}function vC(e,o){return e&&e.length?Vi(e,ee(o,3),!1,!0):[]}function CC(e,o){return e&&e.length?Vi(e,ee(o,3)):[]}var LC=_e(function(e){return vt(xn(e,1,Xe,!0))}),AC=_e(function(e){var o=_o(e);return Xe(o)&&(o=n),vt(xn(e,1,Xe,!0),ee(o,2))}),IC=_e(function(e){var o=_o(e);return o=typeof o=="function"?o:n,vt(xn(e,1,Xe,!0),n,o)});function PC(e){return e&&e.length?vt(e):[]}function kC(e,o){return e&&e.length?vt(e,ee(o,2)):[]}function NC(e,o){return o=typeof o=="function"?o:n,e&&e.length?vt(e,n,o):[]}function Dp(e){if(!(e&&e.length))return[];var o=0;return e=xt(e,function(i){if(Xe(i))return o=pn(i.length,o),!0}),Zc(o,function(i){return Ue(e,jc(i))})}function Ru(e,o){if(!(e&&e.length))return[];var i=Dp(e);return o==null?i:Ue(i,function(c){return Zn(o,n,c)})}var EC=_e(function(e,o){return Xe(e)?Ca(e,o):[]}),RC=_e(function(e){return xp(xt(e,Xe))}),DC=_e(function(e){var o=_o(e);return Xe(o)&&(o=n),xp(xt(e,Xe),ee(o,2))}),MC=_e(function(e){var o=_o(e);return o=typeof o=="function"?o:n,xp(xt(e,Xe),n,o)}),BC=_e(Dp);function OC(e,o){return Z_(e||[],o||[],va)}function WC(e,o){return Z_(e||[],o||[],Ia)}var FC=_e(function(e){var o=e.length,i=o>1?e[o-1]:n;return i=typeof i=="function"?(e.pop(),i):n,Ru(e,i)});function Du(e){var o=g(e);return o.__chain__=!0,o}function UC(e,o){return o(e),e}function ns(e,o){return o(e)}var GC=Jo(function(e){var o=e.length,i=o?e[0]:0,c=this.__wrapped__,u=function(h){return ap(h,e)};return o>1||this.__actions__.length||!(c instanceof ge)||!Qo(i)?this.thru(u):(c=c.slice(i,+i+(o?1:0)),c.__actions__.push({func:ns,args:[u],thisArg:n}),new po(c,this.__chain__).thru(function(h){return o&&!h.length&&h.push(n),h}))});function HC(){return Du(this)}function $C(){return new po(this.value(),this.__chain__)}function zC(){this.__values__===n&&(this.__values__=ju(this.value()));var e=this.__index__>=this.__values__.length,o=e?n:this.__values__[this.__index__++];return{done:e,value:o}}function qC(){return this}function VC(e){for(var o,i=this;i instanceof Ui;){var c=Au(i);c.__index__=0,c.__values__=n,o?u.__wrapped__=c:o=c;var u=c;i=i.__wrapped__}return u.__wrapped__=e,o}function KC(){var e=this.__wrapped__;if(e instanceof ge){var o=e;return this.__actions__.length&&(o=new ge(this)),o=o.reverse(),o.__actions__.push({func:ns,args:[Rp],thisArg:n}),new po(o,this.__chain__)}return this.thru(Rp)}function jC(){return Y_(this.__wrapped__,this.__actions__)}var XC=Ki(function(e,o,i){Le.call(e,i)?++e[i]:Yo(e,i,1)});function YC(e,o,i){var c=pe(e)?p_:Uv;return i&&Nn(e,o,i)&&(o=n),c(e,ee(o,3))}function ZC(e,o){var i=pe(e)?xt:R_;return i(e,ee(o,3))}var JC=su(Iu),QC=su(Pu);function eL(e,o){return xn(os(e,o),1)}function nL(e,o){return xn(os(e,o),fe)}function oL(e,o,i){return i=i===n?1:me(i),xn(os(e,o),i)}function Mu(e,o){var i=pe(e)?so:wt;return i(e,ee(o,3))}function Bu(e,o){var i=pe(e)?Sw:E_;return i(e,ee(o,3))}var tL=Ki(function(e,o,i){Le.call(e,i)?e[i].push(o):Yo(e,i,[o])});function rL(e,o,i,c){e=On(e)?e:Pr(e),i=i&&!c?me(i):0;var u=e.length;return i<0&&(i=pn(u+i,0)),ss(e)?i<=u&&e.indexOf(o,i)>-1:!!u&&xr(e,o,i)>-1}var aL=_e(function(e,o,i){var c=-1,u=typeof o=="function",h=On(e)?P(e.length):[];return wt(e,function(S){h[++c]=u?Zn(o,S,i):La(S,o,i)}),h}),iL=Ki(function(e,o,i){Yo(e,i,o)});function os(e,o){var i=pe(e)?Ue:F_;return i(e,ee(o,3))}function sL(e,o,i,c){return e==null?[]:(pe(o)||(o=o==null?[]:[o]),i=c?n:i,pe(i)||(i=i==null?[]:[i]),$_(e,o,i))}var cL=Ki(function(e,o,i){e[i?0:1].push(o)},function(){return[[],[]]});function pL(e,o,i){var c=pe(e)?Vc:__,u=arguments.length<3;return c(e,ee(o,4),i,u,wt)}function dL(e,o,i){var c=pe(e)?bw:__,u=arguments.length<3;return c(e,ee(o,4),i,u,E_)}function mL(e,o){var i=pe(e)?xt:R_;return i(e,as(ee(o,3)))}function lL(e){var o=pe(e)?I_:r1;return o(e)}function _L(e,o,i){(i?Nn(e,o,i):o===n)?o=1:o=me(o);var c=pe(e)?Mv:a1;return c(e,o)}function uL(e){var o=pe(e)?Bv:s1;return o(e)}function gL(e){if(e==null)return 0;if(On(e))return ss(e)?yr(e):e.length;var o=Ln(e);return o==ke||o==xo?e.size:mp(e).length}function fL(e,o,i){var c=pe(e)?Kc:c1;return i&&Nn(e,o,i)&&(o=n),c(e,ee(o,3))}var hL=_e(function(e,o){if(e==null)return[];var i=o.length;return i>1&&Nn(e,o[0],o[1])?o=[]:i>2&&Nn(o[0],o[1],o[2])&&(o=[o[0]]),$_(e,xn(o,1),[])}),ts=Zw||function(){return ln.Date.now()};function xL(e,o){if(typeof o!="function")throw new co(l);return e=me(e),function(){if(--e<1)return o.apply(this,arguments)}}function Ou(e,o,i){return o=i?n:o,o=e&&o==null?e.length:o,Zo(e,z,n,n,n,n,o)}function Wu(e,o){var i;if(typeof o!="function")throw new co(l);return e=me(e),function(){return--e>0&&(i=o.apply(this,arguments)),e<=1&&(o=n),i}}var Mp=_e(function(e,o,i){var c=O;if(i.length){var u=yt(i,Ar(Mp));c|=Y}return Zo(e,c,o,i,u)}),Fu=_e(function(e,o,i){var c=O|A;if(i.length){var u=yt(i,Ar(Fu));c|=Y}return Zo(o,c,e,i,u)});function Uu(e,o,i){o=i?n:o;var c=Zo(e,H,n,n,n,n,n,o);return c.placeholder=Uu.placeholder,c}function Gu(e,o,i){o=i?n:o;var c=Zo(e,j,n,n,n,n,n,o);return c.placeholder=Gu.placeholder,c}function Hu(e,o,i){var c,u,h,S,w,L,D=0,B=!1,W=!1,q=!0;if(typeof e!="function")throw new co(l);o=uo(o)||0,He(i)&&(B=!!i.leading,W="maxWait"in i,h=W?pn(uo(i.maxWait)||0,o):h,q="trailing"in i?!!i.trailing:q);function Z(Ye){var bo=c,ot=u;return c=u=n,D=Ye,S=e.apply(ot,bo),S}function oe(Ye){return D=Ye,w=Na(ue,o),B?Z(Ye):S}function le(Ye){var bo=Ye-L,ot=Ye-D,sg=o-bo;return W?Cn(sg,h-ot):sg}function te(Ye){var bo=Ye-L,ot=Ye-D;return L===n||bo>=o||bo<0||W&&ot>=h}function ue(){var Ye=ts();if(te(Ye))return xe(Ye);w=Na(ue,le(Ye))}function xe(Ye){return w=n,q&&c?Z(Ye):(c=u=n,S)}function no(){w!==n&&J_(w),D=0,c=L=u=w=n}function En(){return w===n?S:xe(ts())}function oo(){var Ye=ts(),bo=te(Ye);if(c=arguments,u=this,L=Ye,bo){if(w===n)return oe(L);if(W)return J_(w),w=Na(ue,o),Z(L)}return w===n&&(w=Na(ue,o)),S}return oo.cancel=no,oo.flush=En,oo}var TL=_e(function(e,o){return N_(e,1,o)}),yL=_e(function(e,o,i){return N_(e,uo(o)||0,i)});function SL(e){return Zo(e,Ce)}function rs(e,o){if(typeof e!="function"||o!=null&&typeof o!="function")throw new co(l);var i=function(){var c=arguments,u=o?o.apply(this,c):c[0],h=i.cache;if(h.has(u))return h.get(u);var S=e.apply(this,c);return i.cache=h.set(u,S)||h,S};return i.cache=new(rs.Cache||Xo),i}rs.Cache=Xo;function as(e){if(typeof e!="function")throw new co(l);return function(){var o=arguments;switch(o.length){case 0:return!e.call(this);case 1:return!e.call(this,o[0]);case 2:return!e.call(this,o[0],o[1]);case 3:return!e.call(this,o[0],o[1],o[2])}return!e.apply(this,o)}}function bL(e){return Wu(2,e)}var wL=p1(function(e,o){o=o.length==1&&pe(o[0])?Ue(o[0],Jn(ee())):Ue(xn(o,1),Jn(ee()));var i=o.length;return _e(function(c){for(var u=-1,h=Cn(c.length,i);++u<h;)c[u]=o[u].call(this,c[u]);return Zn(e,this,c)})}),Bp=_e(function(e,o){var i=yt(o,Ar(Bp));return Zo(e,Y,n,o,i)}),$u=_e(function(e,o){var i=yt(o,Ar($u));return Zo(e,V,n,o,i)}),vL=Jo(function(e,o){return Zo(e,Q,n,n,n,o)});function CL(e,o){if(typeof e!="function")throw new co(l);return o=o===n?o:me(o),_e(e,o)}function LL(e,o){if(typeof e!="function")throw new co(l);return o=o==null?0:pn(me(o),0),_e(function(i){var c=i[o],u=Lt(i,0,o);return c&&Tt(u,c),Zn(e,this,u)})}function AL(e,o,i){var c=!0,u=!0;if(typeof e!="function")throw new co(l);return He(i)&&(c="leading"in i?!!i.leading:c,u="trailing"in i?!!i.trailing:u),Hu(e,o,{leading:c,maxWait:o,trailing:u})}function IL(e){return Ou(e,1)}function PL(e,o){return Bp(yp(o),e)}function kL(){if(!arguments.length)return[];var e=arguments[0];return pe(e)?e:[e]}function NL(e){return mo(e,b)}function EL(e,o){return o=typeof o=="function"?o:n,mo(e,b,o)}function RL(e){return mo(e,x|b)}function DL(e,o){return o=typeof o=="function"?o:n,mo(e,x|b,o)}function ML(e,o){return o==null||k_(e,o,_n(o))}function So(e,o){return e===o||e!==e&&o!==o}var BL=Zi(cp),OL=Zi(function(e,o){return e>=o}),Yt=B_(function(){return arguments}())?B_:function(e){return Ve(e)&&Le.call(e,"callee")&&!b_.call(e,"callee")},pe=P.isArray,WL=t_?Jn(t_):Vv;function On(e){return e!=null&&is(e.length)&&!et(e)}function Xe(e){return Ve(e)&&On(e)}function FL(e){return e===!0||e===!1||Ve(e)&&kn(e)==he}var At=Qw||Kp,UL=r_?Jn(r_):Kv;function GL(e){return Ve(e)&&e.nodeType===1&&!Ea(e)}function HL(e){if(e==null)return!0;if(On(e)&&(pe(e)||typeof e=="string"||typeof e.splice=="function"||At(e)||Ir(e)||Yt(e)))return!e.length;var o=Ln(e);if(o==ke||o==xo)return!e.size;if(ka(e))return!mp(e).length;for(var i in e)if(Le.call(e,i))return!1;return!0}function $L(e,o){return Aa(e,o)}function zL(e,o,i){i=typeof i=="function"?i:n;var c=i?i(e,o):n;return c===n?Aa(e,o,n,i):!!c}function Op(e){if(!Ve(e))return!1;var o=kn(e);return o==Se||o==se||typeof e.message=="string"&&typeof e.name=="string"&&!Ea(e)}function qL(e){return typeof e=="number"&&v_(e)}function et(e){if(!He(e))return!1;var o=kn(e);return o==Me||o==je||o==sn||o==Ti}function zu(e){return typeof e=="number"&&e==me(e)}function is(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ae}function He(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}function Ve(e){return e!=null&&typeof e=="object"}var qu=a_?Jn(a_):Xv;function VL(e,o){return e===o||dp(e,o,Ap(o))}function KL(e,o,i){return i=typeof i=="function"?i:n,dp(e,o,Ap(o),i)}function jL(e){return Vu(e)&&e!=+e}function XL(e){if(E1(e))throw new ce(s);return O_(e)}function YL(e){return e===null}function ZL(e){return e==null}function Vu(e){return typeof e=="number"||Ve(e)&&kn(e)==hn}function Ea(e){if(!Ve(e)||kn(e)!=vn)return!1;var o=Ri(e);if(o===null)return!0;var i=Le.call(o,"constructor")&&o.constructor;return typeof i=="function"&&i instanceof i&&Pi.call(i)==Kw}var Wp=i_?Jn(i_):Yv;function JL(e){return zu(e)&&e>=-Ae&&e<=Ae}var Ku=s_?Jn(s_):Zv;function ss(e){return typeof e=="string"||!pe(e)&&Ve(e)&&kn(e)==ga}function eo(e){return typeof e=="symbol"||Ve(e)&&kn(e)==yi}var Ir=c_?Jn(c_):Jv;function QL(e){return e===n}function eA(e){return Ve(e)&&Ln(e)==fa}function nA(e){return Ve(e)&&kn(e)==hb}var oA=Zi(lp),tA=Zi(function(e,o){return e<=o});function ju(e){if(!e)return[];if(On(e))return ss(e)?To(e):Bn(e);if(Ta&&e[Ta])return Mw(e[Ta]());var o=Ln(e),i=o==ke?Qc:o==xo?Li:Pr;return i(e)}function nt(e){if(!e)return e===0?e:0;if(e=uo(e),e===fe||e===-fe){var o=e<0?-1:1;return o*Pe}return e===e?e:0}function me(e){var o=nt(e),i=o%1;return o===o?i?o-i:o:0}function Xu(e){return e?Vt(me(e),0,rn):0}function uo(e){if(typeof e=="number")return e;if(eo(e))return nn;if(He(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=He(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=u_(e);var i=Wb.test(e);return i||Ub.test(e)?xw(e.slice(2),i?2:8):Ob.test(e)?nn:+e}function Yu(e){return ko(e,Wn(e))}function rA(e){return e?Vt(me(e),-Ae,Ae):e===0?e:0}function ve(e){return e==null?"":Qn(e)}var aA=Cr(function(e,o){if(ka(o)||On(o)){ko(o,_n(o),e);return}for(var i in o)Le.call(o,i)&&va(e,i,o[i])}),Zu=Cr(function(e,o){ko(o,Wn(o),e)}),cs=Cr(function(e,o,i,c){ko(o,Wn(o),e,c)}),iA=Cr(function(e,o,i,c){ko(o,_n(o),e,c)}),sA=Jo(ap);function cA(e,o){var i=vr(e);return o==null?i:P_(i,o)}var pA=_e(function(e,o){e=Ne(e);var i=-1,c=o.length,u=c>2?o[2]:n;for(u&&Nn(o[0],o[1],u)&&(c=1);++i<c;)for(var h=o[i],S=Wn(h),w=-1,L=S.length;++w<L;){var D=S[w],B=e[D];(B===n||So(B,Sr[D])&&!Le.call(e,D))&&(e[D]=h[D])}return e}),dA=_e(function(e){return e.push(n,uu),Zn(Ju,n,e)});function mA(e,o){return d_(e,ee(o,3),Po)}function lA(e,o){return d_(e,ee(o,3),sp)}function _A(e,o){return e==null?e:ip(e,ee(o,3),Wn)}function uA(e,o){return e==null?e:D_(e,ee(o,3),Wn)}function gA(e,o){return e&&Po(e,ee(o,3))}function fA(e,o){return e&&sp(e,ee(o,3))}function hA(e){return e==null?[]:$i(e,_n(e))}function xA(e){return e==null?[]:$i(e,Wn(e))}function Fp(e,o,i){var c=e==null?n:Kt(e,o);return c===n?i:c}function TA(e,o){return e!=null&&hu(e,o,Hv)}function Up(e,o){return e!=null&&hu(e,o,$v)}var yA=pu(function(e,o,i){o!=null&&typeof o.toString!="function"&&(o=ki.call(o)),e[o]=i},Hp(Fn)),SA=pu(function(e,o,i){o!=null&&typeof o.toString!="function"&&(o=ki.call(o)),Le.call(e,o)?e[o].push(i):e[o]=[i]},ee),bA=_e(La);function _n(e){return On(e)?A_(e):mp(e)}function Wn(e){return On(e)?A_(e,!0):Qv(e)}function wA(e,o){var i={};return o=ee(o,3),Po(e,function(c,u,h){Yo(i,o(c,u,h),c)}),i}function vA(e,o){var i={};return o=ee(o,3),Po(e,function(c,u,h){Yo(i,u,o(c,u,h))}),i}var CA=Cr(function(e,o,i){zi(e,o,i)}),Ju=Cr(function(e,o,i,c){zi(e,o,i,c)}),LA=Jo(function(e,o){var i={};if(e==null)return i;var c=!1;o=Ue(o,function(h){return h=Ct(h,e),c||(c=h.length>1),h}),ko(e,Cp(e),i),c&&(i=mo(i,x|v|b,y1));for(var u=o.length;u--;)hp(i,o[u]);return i});function AA(e,o){return Qu(e,as(ee(o)))}var IA=Jo(function(e,o){return e==null?{}:n1(e,o)});function Qu(e,o){if(e==null)return{};var i=Ue(Cp(e),function(c){return[c]});return o=ee(o),z_(e,i,function(c,u){return o(c,u[0])})}function PA(e,o,i){o=Ct(o,e);var c=-1,u=o.length;for(u||(u=1,e=n);++c<u;){var h=e==null?n:e[No(o[c])];h===n&&(c=u,h=i),e=et(h)?h.call(e):h}return e}function kA(e,o,i){return e==null?e:Ia(e,o,i)}function NA(e,o,i,c){return c=typeof c=="function"?c:n,e==null?e:Ia(e,o,i,c)}var eg=lu(_n),ng=lu(Wn);function EA(e,o,i){var c=pe(e),u=c||At(e)||Ir(e);if(o=ee(o,4),i==null){var h=e&&e.constructor;u?i=c?new h:[]:He(e)?i=et(h)?vr(Ri(e)):{}:i={}}return(u?so:Po)(e,function(S,w,L){return o(i,S,w,L)}),i}function RA(e,o){return e==null?!0:hp(e,o)}function DA(e,o,i){return e==null?e:X_(e,o,yp(i))}function MA(e,o,i,c){return c=typeof c=="function"?c:n,e==null?e:X_(e,o,yp(i),c)}function Pr(e){return e==null?[]:Jc(e,_n(e))}function BA(e){return e==null?[]:Jc(e,Wn(e))}function OA(e,o,i){return i===n&&(i=o,o=n),i!==n&&(i=uo(i),i=i===i?i:0),o!==n&&(o=uo(o),o=o===o?o:0),Vt(uo(e),o,i)}function WA(e,o,i){return o=nt(o),i===n?(i=o,o=0):i=nt(i),e=uo(e),zv(e,o,i)}function FA(e,o,i){if(i&&typeof i!="boolean"&&Nn(e,o,i)&&(o=i=n),i===n&&(typeof o=="boolean"?(i=o,o=n):typeof e=="boolean"&&(i=e,e=n)),e===n&&o===n?(e=0,o=1):(e=nt(e),o===n?(o=e,e=0):o=nt(o)),e>o){var c=e;e=o,o=c}if(i||e%1||o%1){var u=C_();return Cn(e+u*(o-e+hw("1e-"+((u+"").length-1))),o)}return up(e,o)}var UA=Lr(function(e,o,i){return o=o.toLowerCase(),e+(i?og(o):o)});function og(e){return Gp(ve(e).toLowerCase())}function tg(e){return e=ve(e),e&&e.replace(Hb,kw).replace(sw,"")}function GA(e,o,i){e=ve(e),o=Qn(o);var c=e.length;i=i===n?c:Vt(me(i),0,c);var u=i;return i-=o.length,i>=0&&e.slice(i,u)==o}function HA(e){return e=ve(e),e&&bb.test(e)?e.replace(Dl,Nw):e}function $A(e){return e=ve(e),e&&Ib.test(e)?e.replace(Bc,"\\$&"):e}var zA=Lr(function(e,o,i){return e+(i?"-":"")+o.toLowerCase()}),qA=Lr(function(e,o,i){return e+(i?" ":"")+o.toLowerCase()}),VA=iu("toLowerCase");function KA(e,o,i){e=ve(e),o=me(o);var c=o?yr(e):0;if(!o||c>=o)return e;var u=(o-c)/2;return Yi(Oi(u),i)+e+Yi(Bi(u),i)}function jA(e,o,i){e=ve(e),o=me(o);var c=o?yr(e):0;return o&&c<o?e+Yi(o-c,i):e}function XA(e,o,i){e=ve(e),o=me(o);var c=o?yr(e):0;return o&&c<o?Yi(o-c,i)+e:e}function YA(e,o,i){return i||o==null?o=0:o&&(o=+o),tv(ve(e).replace(Oc,""),o||0)}function ZA(e,o,i){return(i?Nn(e,o,i):o===n)?o=1:o=me(o),gp(ve(e),o)}function JA(){var e=arguments,o=ve(e[0]);return e.length<3?o:o.replace(e[1],e[2])}var QA=Lr(function(e,o,i){return e+(i?"_":"")+o.toLowerCase()});function eI(e,o,i){return i&&typeof i!="number"&&Nn(e,o,i)&&(o=i=n),i=i===n?rn:i>>>0,i?(e=ve(e),e&&(typeof o=="string"||o!=null&&!Wp(o))&&(o=Qn(o),!o&&Tr(e))?Lt(To(e),0,i):e.split(o,i)):[]}var nI=Lr(function(e,o,i){return e+(i?" ":"")+Gp(o)});function oI(e,o,i){return e=ve(e),i=i==null?0:Vt(me(i),0,e.length),o=Qn(o),e.slice(i,i+o.length)==o}function tI(e,o,i){var c=g.templateSettings;i&&Nn(e,o,i)&&(o=n),e=ve(e),o=cs({},o,c,_u);var u=cs({},o.imports,c.imports,_u),h=_n(u),S=Jc(u,h),w,L,D=0,B=o.interpolate||Si,W="__p += '",q=ep((o.escape||Si).source+"|"+B.source+"|"+(B===Ml?Bb:Si).source+"|"+(o.evaluate||Si).source+"|$","g"),Z="//# sourceURL="+(Le.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++lw+"]")+`
`;e.replace(q,function(te,ue,xe,no,En,oo){return xe||(xe=no),W+=e.slice(D,oo).replace($b,Ew),ue&&(w=!0,W+=`' +
__e(`+ue+`) +
'`),En&&(L=!0,W+=`';
`+En+`;
__p += '`),xe&&(W+=`' +
((__t = (`+xe+`)) == null ? '' : __t) +
'`),D=oo+te.length,te}),W+=`';
`;var oe=Le.call(o,"variable")&&o.variable;if(!oe)W=`with (obj) {
`+W+`
}
`;else if(Db.test(oe))throw new ce(_);W=(L?W.replace(xb,""):W).replace(Tb,"$1").replace(yb,"$1;"),W="function("+(oe||"obj")+`) {
`+(oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(L?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+W+`return __p
}`;var le=ag(function(){return be(h,Z+"return "+W).apply(n,S)});if(le.source=W,Op(le))throw le;return le}function rI(e){return ve(e).toLowerCase()}function aI(e){return ve(e).toUpperCase()}function iI(e,o,i){if(e=ve(e),e&&(i||o===n))return u_(e);if(!e||!(o=Qn(o)))return e;var c=To(e),u=To(o),h=g_(c,u),S=f_(c,u)+1;return Lt(c,h,S).join("")}function sI(e,o,i){if(e=ve(e),e&&(i||o===n))return e.slice(0,x_(e)+1);if(!e||!(o=Qn(o)))return e;var c=To(e),u=f_(c,To(o))+1;return Lt(c,0,u).join("")}function cI(e,o,i){if(e=ve(e),e&&(i||o===n))return e.replace(Oc,"");if(!e||!(o=Qn(o)))return e;var c=To(e),u=g_(c,To(o));return Lt(c,u).join("")}function pI(e,o){var i=Re,c=De;if(He(o)){var u="separator"in o?o.separator:u;i="length"in o?me(o.length):i,c="omission"in o?Qn(o.omission):c}e=ve(e);var h=e.length;if(Tr(e)){var S=To(e);h=S.length}if(i>=h)return e;var w=i-yr(c);if(w<1)return c;var L=S?Lt(S,0,w).join(""):e.slice(0,w);if(u===n)return L+c;if(S&&(w+=L.length-w),Wp(u)){if(e.slice(w).search(u)){var D,B=L;for(u.global||(u=ep(u.source,ve(Bl.exec(u))+"g")),u.lastIndex=0;D=u.exec(B);)var W=D.index;L=L.slice(0,W===n?w:W)}}else if(e.indexOf(Qn(u),w)!=w){var q=L.lastIndexOf(u);q>-1&&(L=L.slice(0,q))}return L+c}function dI(e){return e=ve(e),e&&Sb.test(e)?e.replace(Rl,Fw):e}var mI=Lr(function(e,o,i){return e+(i?" ":"")+o.toUpperCase()}),Gp=iu("toUpperCase");function rg(e,o,i){return e=ve(e),o=i?n:o,o===n?Dw(e)?Hw(e):Cw(e):e.match(o)||[]}var ag=_e(function(e,o){try{return Zn(e,n,o)}catch(i){return Op(i)?i:new ce(i)}}),lI=Jo(function(e,o){return so(o,function(i){i=No(i),Yo(e,i,Mp(e[i],e))}),e});function _I(e){var o=e==null?0:e.length,i=ee();return e=o?Ue(e,function(c){if(typeof c[1]!="function")throw new co(l);return[i(c[0]),c[1]]}):[],_e(function(c){for(var u=-1;++u<o;){var h=e[u];if(Zn(h[0],this,c))return Zn(h[1],this,c)}})}function uI(e){return Fv(mo(e,x))}function Hp(e){return function(){return e}}function gI(e,o){return e==null||e!==e?o:e}var fI=cu(),hI=cu(!0);function Fn(e){return e}function $p(e){return W_(typeof e=="function"?e:mo(e,x))}function xI(e){return U_(mo(e,x))}function TI(e,o){return G_(e,mo(o,x))}var yI=_e(function(e,o){return function(i){return La(i,e,o)}}),SI=_e(function(e,o){return function(i){return La(e,i,o)}});function zp(e,o,i){var c=_n(o),u=$i(o,c);i==null&&!(He(o)&&(u.length||!c.length))&&(i=o,o=e,e=this,u=$i(o,_n(o)));var h=!(He(i)&&"chain"in i)||!!i.chain,S=et(e);return so(u,function(w){var L=o[w];e[w]=L,S&&(e.prototype[w]=function(){var D=this.__chain__;if(h||D){var B=e(this.__wrapped__),W=B.__actions__=Bn(this.__actions__);return W.push({func:L,args:arguments,thisArg:e}),B.__chain__=D,B}return L.apply(e,Tt([this.value()],arguments))})}),e}function bI(){return ln._===this&&(ln._=jw),this}function qp(){}function wI(e){return e=me(e),_e(function(o){return H_(o,e)})}var vI=bp(Ue),CI=bp(p_),LI=bp(Kc);function ig(e){return Pp(e)?jc(No(e)):o1(e)}function AI(e){return function(o){return e==null?n:Kt(e,o)}}var II=du(),PI=du(!0);function Vp(){return[]}function Kp(){return!1}function kI(){return{}}function NI(){return""}function EI(){return!0}function RI(e,o){if(e=me(e),e<1||e>Ae)return[];var i=rn,c=Cn(e,rn);o=ee(o),e-=rn;for(var u=Zc(c,o);++i<e;)o(i);return u}function DI(e){return pe(e)?Ue(e,No):eo(e)?[e]:Bn(Lu(ve(e)))}function MI(e){var o=++Vw;return ve(e)+o}var BI=Xi(function(e,o){return e+o},0),OI=wp("ceil"),WI=Xi(function(e,o){return e/o},1),FI=wp("floor");function UI(e){return e&&e.length?Hi(e,Fn,cp):n}function GI(e,o){return e&&e.length?Hi(e,ee(o,2),cp):n}function HI(e){return l_(e,Fn)}function $I(e,o){return l_(e,ee(o,2))}function zI(e){return e&&e.length?Hi(e,Fn,lp):n}function qI(e,o){return e&&e.length?Hi(e,ee(o,2),lp):n}var VI=Xi(function(e,o){return e*o},1),KI=wp("round"),jI=Xi(function(e,o){return e-o},0);function XI(e){return e&&e.length?Yc(e,Fn):0}function YI(e,o){return e&&e.length?Yc(e,ee(o,2)):0}return g.after=xL,g.ary=Ou,g.assign=aA,g.assignIn=Zu,g.assignInWith=cs,g.assignWith=iA,g.at=sA,g.before=Wu,g.bind=Mp,g.bindAll=lI,g.bindKey=Fu,g.castArray=kL,g.chain=Du,g.chunk=F1,g.compact=U1,g.concat=G1,g.cond=_I,g.conforms=uI,g.constant=Hp,g.countBy=XC,g.create=cA,g.curry=Uu,g.curryRight=Gu,g.debounce=Hu,g.defaults=pA,g.defaultsDeep=dA,g.defer=TL,g.delay=yL,g.difference=H1,g.differenceBy=$1,g.differenceWith=z1,g.drop=q1,g.dropRight=V1,g.dropRightWhile=K1,g.dropWhile=j1,g.fill=X1,g.filter=ZC,g.flatMap=eL,g.flatMapDeep=nL,g.flatMapDepth=oL,g.flatten=ku,g.flattenDeep=Y1,g.flattenDepth=Z1,g.flip=SL,g.flow=fI,g.flowRight=hI,g.fromPairs=J1,g.functions=hA,g.functionsIn=xA,g.groupBy=tL,g.initial=eC,g.intersection=nC,g.intersectionBy=oC,g.intersectionWith=tC,g.invert=yA,g.invertBy=SA,g.invokeMap=aL,g.iteratee=$p,g.keyBy=iL,g.keys=_n,g.keysIn=Wn,g.map=os,g.mapKeys=wA,g.mapValues=vA,g.matches=xI,g.matchesProperty=TI,g.memoize=rs,g.merge=CA,g.mergeWith=Ju,g.method=yI,g.methodOf=SI,g.mixin=zp,g.negate=as,g.nthArg=wI,g.omit=LA,g.omitBy=AA,g.once=bL,g.orderBy=sL,g.over=vI,g.overArgs=wL,g.overEvery=CI,g.overSome=LI,g.partial=Bp,g.partialRight=$u,g.partition=cL,g.pick=IA,g.pickBy=Qu,g.property=ig,g.propertyOf=AI,g.pull=sC,g.pullAll=Eu,g.pullAllBy=cC,g.pullAllWith=pC,g.pullAt=dC,g.range=II,g.rangeRight=PI,g.rearg=vL,g.reject=mL,g.remove=mC,g.rest=CL,g.reverse=Rp,g.sampleSize=_L,g.set=kA,g.setWith=NA,g.shuffle=uL,g.slice=lC,g.sortBy=hL,g.sortedUniq=TC,g.sortedUniqBy=yC,g.split=eI,g.spread=LL,g.tail=SC,g.take=bC,g.takeRight=wC,g.takeRightWhile=vC,g.takeWhile=CC,g.tap=UC,g.throttle=AL,g.thru=ns,g.toArray=ju,g.toPairs=eg,g.toPairsIn=ng,g.toPath=DI,g.toPlainObject=Yu,g.transform=EA,g.unary=IL,g.union=LC,g.unionBy=AC,g.unionWith=IC,g.uniq=PC,g.uniqBy=kC,g.uniqWith=NC,g.unset=RA,g.unzip=Dp,g.unzipWith=Ru,g.update=DA,g.updateWith=MA,g.values=Pr,g.valuesIn=BA,g.without=EC,g.words=rg,g.wrap=PL,g.xor=RC,g.xorBy=DC,g.xorWith=MC,g.zip=BC,g.zipObject=OC,g.zipObjectDeep=WC,g.zipWith=FC,g.entries=eg,g.entriesIn=ng,g.extend=Zu,g.extendWith=cs,zp(g,g),g.add=BI,g.attempt=ag,g.camelCase=UA,g.capitalize=og,g.ceil=OI,g.clamp=OA,g.clone=NL,g.cloneDeep=RL,g.cloneDeepWith=DL,g.cloneWith=EL,g.conformsTo=ML,g.deburr=tg,g.defaultTo=gI,g.divide=WI,g.endsWith=GA,g.eq=So,g.escape=HA,g.escapeRegExp=$A,g.every=YC,g.find=JC,g.findIndex=Iu,g.findKey=mA,g.findLast=QC,g.findLastIndex=Pu,g.findLastKey=lA,g.floor=FI,g.forEach=Mu,g.forEachRight=Bu,g.forIn=_A,g.forInRight=uA,g.forOwn=gA,g.forOwnRight=fA,g.get=Fp,g.gt=BL,g.gte=OL,g.has=TA,g.hasIn=Up,g.head=Nu,g.identity=Fn,g.includes=rL,g.indexOf=Q1,g.inRange=WA,g.invoke=bA,g.isArguments=Yt,g.isArray=pe,g.isArrayBuffer=WL,g.isArrayLike=On,g.isArrayLikeObject=Xe,g.isBoolean=FL,g.isBuffer=At,g.isDate=UL,g.isElement=GL,g.isEmpty=HL,g.isEqual=$L,g.isEqualWith=zL,g.isError=Op,g.isFinite=qL,g.isFunction=et,g.isInteger=zu,g.isLength=is,g.isMap=qu,g.isMatch=VL,g.isMatchWith=KL,g.isNaN=jL,g.isNative=XL,g.isNil=ZL,g.isNull=YL,g.isNumber=Vu,g.isObject=He,g.isObjectLike=Ve,g.isPlainObject=Ea,g.isRegExp=Wp,g.isSafeInteger=JL,g.isSet=Ku,g.isString=ss,g.isSymbol=eo,g.isTypedArray=Ir,g.isUndefined=QL,g.isWeakMap=eA,g.isWeakSet=nA,g.join=rC,g.kebabCase=zA,g.last=_o,g.lastIndexOf=aC,g.lowerCase=qA,g.lowerFirst=VA,g.lt=oA,g.lte=tA,g.max=UI,g.maxBy=GI,g.mean=HI,g.meanBy=$I,g.min=zI,g.minBy=qI,g.stubArray=Vp,g.stubFalse=Kp,g.stubObject=kI,g.stubString=NI,g.stubTrue=EI,g.multiply=VI,g.nth=iC,g.noConflict=bI,g.noop=qp,g.now=ts,g.pad=KA,g.padEnd=jA,g.padStart=XA,g.parseInt=YA,g.random=FA,g.reduce=pL,g.reduceRight=dL,g.repeat=ZA,g.replace=JA,g.result=PA,g.round=KI,g.runInContext=C,g.sample=lL,g.size=gL,g.snakeCase=QA,g.some=fL,g.sortedIndex=_C,g.sortedIndexBy=uC,g.sortedIndexOf=gC,g.sortedLastIndex=fC,g.sortedLastIndexBy=hC,g.sortedLastIndexOf=xC,g.startCase=nI,g.startsWith=oI,g.subtract=jI,g.sum=XI,g.sumBy=YI,g.template=tI,g.times=RI,g.toFinite=nt,g.toInteger=me,g.toLength=Xu,g.toLower=rI,g.toNumber=uo,g.toSafeInteger=rA,g.toString=ve,g.toUpper=aI,g.trim=iI,g.trimEnd=sI,g.trimStart=cI,g.truncate=pI,g.unescape=dI,g.uniqueId=MI,g.upperCase=mI,g.upperFirst=Gp,g.each=Mu,g.eachRight=Bu,g.first=Nu,zp(g,function(){var e={};return Po(g,function(o,i){Le.call(g.prototype,i)||(e[i]=o)}),e}(),{chain:!1}),g.VERSION=t,so(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){g[e].placeholder=g}),so(["drop","take"],function(e,o){ge.prototype[e]=function(i){i=i===n?1:pn(me(i),0);var c=this.__filtered__&&!o?new ge(this):this.clone();return c.__filtered__?c.__takeCount__=Cn(i,c.__takeCount__):c.__views__.push({size:Cn(i,rn),type:e+(c.__dir__<0?"Right":"")}),c},ge.prototype[e+"Right"]=function(i){return this.reverse()[e](i).reverse()}}),so(["filter","map","takeWhile"],function(e,o){var i=o+1,c=i==Fe||i==Yn;ge.prototype[e]=function(u){var h=this.clone();return h.__iteratees__.push({iteratee:ee(u,3),type:i}),h.__filtered__=h.__filtered__||c,h}}),so(["head","last"],function(e,o){var i="take"+(o?"Right":"");ge.prototype[e]=function(){return this[i](1).value()[0]}}),so(["initial","tail"],function(e,o){var i="drop"+(o?"":"Right");ge.prototype[e]=function(){return this.__filtered__?new ge(this):this[i](1)}}),ge.prototype.compact=function(){return this.filter(Fn)},ge.prototype.find=function(e){return this.filter(e).head()},ge.prototype.findLast=function(e){return this.reverse().find(e)},ge.prototype.invokeMap=_e(function(e,o){return typeof e=="function"?new ge(this):this.map(function(i){return La(i,e,o)})}),ge.prototype.reject=function(e){return this.filter(as(ee(e)))},ge.prototype.slice=function(e,o){e=me(e);var i=this;return i.__filtered__&&(e>0||o<0)?new ge(i):(e<0?i=i.takeRight(-e):e&&(i=i.drop(e)),o!==n&&(o=me(o),i=o<0?i.dropRight(-o):i.take(o-e)),i)},ge.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ge.prototype.toArray=function(){return this.take(rn)},Po(ge.prototype,function(e,o){var i=/^(?:filter|find|map|reject)|While$/.test(o),c=/^(?:head|last)$/.test(o),u=g[c?"take"+(o=="last"?"Right":""):o],h=c||/^find/.test(o);!u||(g.prototype[o]=function(){var S=this.__wrapped__,w=c?[1]:arguments,L=S instanceof ge,D=w[0],B=L||pe(S),W=function(ue){var xe=u.apply(g,Tt([ue],w));return c&&q?xe[0]:xe};B&&i&&typeof D=="function"&&D.length!=1&&(L=B=!1);var q=this.__chain__,Z=!!this.__actions__.length,oe=h&&!q,le=L&&!Z;if(!h&&B){S=le?S:new ge(this);var te=e.apply(S,w);return te.__actions__.push({func:ns,args:[W],thisArg:n}),new po(te,q)}return oe&&le?e.apply(this,w):(te=this.thru(W),oe?c?te.value()[0]:te.value():te)})}),so(["pop","push","shift","sort","splice","unshift"],function(e){var o=Ai[e],i=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);g.prototype[e]=function(){var u=arguments;if(c&&!this.__chain__){var h=this.value();return o.apply(pe(h)?h:[],u)}return this[i](function(S){return o.apply(pe(S)?S:[],u)})}}),Po(ge.prototype,function(e,o){var i=g[o];if(i){var c=i.name+"";Le.call(wr,c)||(wr[c]=[]),wr[c].push({name:o,func:i})}}),wr[ji(n,A).name]=[{name:"wrapper",func:n}],ge.prototype.clone=dv,ge.prototype.reverse=mv,ge.prototype.value=lv,g.prototype.at=GC,g.prototype.chain=HC,g.prototype.commit=$C,g.prototype.next=zC,g.prototype.plant=VC,g.prototype.reverse=KC,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=jC,g.prototype.first=g.prototype.head,Ta&&(g.prototype[Ta]=qC),g},St=$w();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ln._=St,define(function(){return St})):Ht?((Ht.exports=St)._=St,$c._=St):ln._=St}).call(ma)});var fl={};Ee(fl,{css:()=>OS,default:()=>XM});var OS,XM,hl=G(()=>{"use strict";r();OS=`.dapp-core-component__confirmAddressStyles__ledger-confirm-address {
  text-align: center;
  padding: 48px 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__confirmAddressStyles__ledger-confirm-address {
    padding: 48px 40px;
  }
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-section {
  line-height: 1.5;
  margin-top: 40px;
  font-size: 16px;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-section .dapp-core-component__confirmAddressStyles__ledger-confirm-address-description {
  color: #495057;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-section .dapp-core-component__confirmAddressStyles__ledger-confirm-address-data {
  color: #000;
  margin: 8px 0;
  word-break: break-word;
  background-color: #adb5bd;
  padding: 12px;
  border-radius: 8px;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer {
  font-size: 14px;
  color: #495057;
  line-height: 1.5;
  position: relative;
  margin-top: 40px;
  padding-top: 40px;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer:before {
  height: 1px;
  content: "";
  left: 0;
  bottom: 100%;
  right: 0;
  position: absolute;
  background-color: #495057;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer a {
  color: #1b46c2;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(OS));XM={"ledger-confirm-address":"dapp-core-component__confirmAddressStyles__ledger-confirm-address",ledgerConfirmAddress:"dapp-core-component__confirmAddressStyles__ledger-confirm-address","ledger-confirm-address-heading":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading",ledgerConfirmAddressHeading:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading","ledger-confirm-address-section":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section",ledgerConfirmAddressSection:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section","ledger-confirm-address-description":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description",ledgerConfirmAddressDescription:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description","ledger-confirm-address-data":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data",ledgerConfirmAddressData:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data","ledger-confirm-address-footer":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer",ledgerConfirmAddressFooter:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer"}});var xl={};Ee(xl,{css:()=>US,default:()=>JM});var US,JM,Tl=G(()=>{"use strict";r();US=`.dapp-core-component__ledgerConnectStyles__login-connect-container {
  color: inherit;
  width: 100%;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content {
  text-align: center;
  padding: 40px 16px;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-description {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-error {
  color: #d9534f;
  margin-bottom: 0;
  margin-top: 12px;
  line-height: 1;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-icon {
  width: 100%;
  max-width: 288px;
  margin: 48px auto;
}
@media (min-width: 480px) {
  .dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-icon {
    margin: 100px auto;
  }
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-button {
  border-radius: 6px;
  padding: 12px 16px;
  line-height: 1;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-button {
    width: auto;
  }
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-link {
  line-height: 1;
  font-size: 18px;
  margin-top: 32px;
  font-weight: 500;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-link:hover, .dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-link:active, .dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-link:focus {
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(US));JM={"login-connect-container":"dapp-core-component__ledgerConnectStyles__login-connect-container",loginConnectContainer:"dapp-core-component__ledgerConnectStyles__login-connect-container","login-connect-container-content":"dapp-core-component__ledgerConnectStyles__login-connect-container-content",loginConnectContainerContent:"dapp-core-component__ledgerConnectStyles__login-connect-container-content","login-connect-container-heading":"dapp-core-component__ledgerConnectStyles__login-connect-container-heading",loginConnectContainerHeading:"dapp-core-component__ledgerConnectStyles__login-connect-container-heading","login-connect-container-description":"dapp-core-component__ledgerConnectStyles__login-connect-container-description",loginConnectContainerDescription:"dapp-core-component__ledgerConnectStyles__login-connect-container-description","login-connect-container-error":"dapp-core-component__ledgerConnectStyles__login-connect-container-error",loginConnectContainerError:"dapp-core-component__ledgerConnectStyles__login-connect-container-error","login-connect-container-icon":"dapp-core-component__ledgerConnectStyles__login-connect-container-icon",loginConnectContainerIcon:"dapp-core-component__ledgerConnectStyles__login-connect-container-icon","login-connect-container-footer":"dapp-core-component__ledgerConnectStyles__login-connect-container-footer",loginConnectContainerFooter:"dapp-core-component__ledgerConnectStyles__login-connect-container-footer","login-connect-container-button":"dapp-core-component__ledgerConnectStyles__login-connect-container-button",loginConnectContainerButton:"dapp-core-component__ledgerConnectStyles__login-connect-container-button","login-connect-container-link":"dapp-core-component__ledgerConnectStyles__login-connect-container-link",loginConnectContainerLink:"dapp-core-component__ledgerConnectStyles__login-connect-container-link"}});var yl={};Ee(yl,{css:()=>$S,default:()=>e5});var $S,e5,Sl=G(()=>{"use strict";r();$S=`.dapp-core-component__progressBarStyles__ledger-progress-bar {
  position: relative;
  margin: 40px auto 0;
}
.dapp-core-component__progressBarStyles__ledger-progress-bar .dapp-core-component__progressBarStyles__ledger-progress-bar-track {
  max-width: 250px;
  width: 60vw;
  height: 4px;
  background-color: #adb5bd;
  border-radius: 2px;
}
.dapp-core-component__progressBarStyles__ledger-progress-bar .dapp-core-component__progressBarStyles__ledger-progress-bar-thumb {
  transition: all 400ms ease;
  height: 4px;
  border-radius: 2px;
  background-color: #495057;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($S));e5={"ledger-progress-bar":"dapp-core-component__progressBarStyles__ledger-progress-bar",ledgerProgressBar:"dapp-core-component__progressBarStyles__ledger-progress-bar","ledger-progress-bar-track":"dapp-core-component__progressBarStyles__ledger-progress-bar-track",ledgerProgressBarTrack:"dapp-core-component__progressBarStyles__ledger-progress-bar-track","ledger-progress-bar-thumb":"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb",ledgerProgressBarThumb:"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb"}});var wl={};Ee(wl,{css:()=>qS,default:()=>o5});var qS,o5,vl=G(()=>{"use strict";r();qS=`.dapp-core-component__scamPhishingStyles__scam-phishing-alert {
  margin: 40px auto 0;
  font-size: 12px;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  width: auto;
  align-items: center;
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon {
  color: #1b46c2;
  margin-right: 8px;
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text {
  text-align: left;
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text {
    flex-direction: row;
  }
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text strong {
  color: #1b46c2;
}
@media (min-width: 768px) {
  .dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text .dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix {
    margin-left: 4px;
  }
}

.dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization {
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text {
  text-align: center;
  flex-direction: row;
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization .dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration {
  margin-left: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qS));o5={"scam-phishing-alert":"dapp-core-component__scamPhishingStyles__scam-phishing-alert",scamPhishingAlert:"dapp-core-component__scamPhishingStyles__scam-phishing-alert","scam-phishing-alert-icon":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon",scamPhishingAlertIcon:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon","scam-phishing-alert-text":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text",scamPhishingAlertText:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text","scam-phishing-alert-prefix":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix",scamPhishingAlertPrefix:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix","scam-phishing-alert-authorization":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization",scamPhishingAlertAuthorization:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization","scam-phishing-alert-authorization-duration":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration",scamPhishingAlertAuthorizationDuration:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration"}});var Al={};Ee(Al,{css:()=>YS,default:()=>r5});var YS,r5,Il=G(()=>{"use strict";r();YS=`.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container {
  padding: 48px 16px;
}
@media (min-width: 768px) {
  .dapp-core-component__ledgerLoginContainerStyles__ledger-login-container {
    padding: 48px 40px;
  }
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content {
  border-radius: 24px;
  border: none;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  max-width: 400px;
}
@media (min-width: 768px) {
  .dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content {
    max-width: 730px;
  }
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header {
  position: absolute;
  background-color: transparent;
  padding: 0;
  right: 20px;
  top: 16px;
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text {
  display: none;
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button {
  float: none;
  position: relative;
  top: auto;
  padding: 0;
  cursor: pointer;
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button:hover {
  background-color: transparent;
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  overflow: hidden;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(YS));r5={"ledger-login-container":"dapp-core-component__ledgerLoginContainerStyles__ledger-login-container",ledgerLoginContainer:"dapp-core-component__ledgerLoginContainerStyles__ledger-login-container","ledger-modal-dialog-content":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content",ledgerModalDialogContent:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content","ledger-modal-header":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header",ledgerModalHeader:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header","ledger-modal-header-text":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text",ledgerModalHeaderText:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text","ledger-modal-close-button":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button",ledgerModalCloseButton:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button","ledger-modal-body":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body",ledgerModalBody:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body"}});var _r={};Ee(_r,{css:()=>sb,default:()=>d5});var sb,d5,ur=G(()=>{"use strict";r();sb=`.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container {
  padding: 48px 16px;
}
@media (min-width: 768px) {
  .dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container {
    padding: 48px 40px;
  }
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content {
  border-radius: 24px;
  border: none;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  max-width: 400px;
}
@media (min-width: 768px) {
  .dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content {
    max-width: 730px;
  }
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header {
  position: absolute;
  background-color: transparent;
  padding: 0;
  right: 20px;
  top: 16px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text {
  display: none;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button {
  float: none;
  cursor: pointer;
  position: relative;
  top: auto;
  padding: 0;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button:hover {
  background-color: transparent;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  overflow: hidden;
}

.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content {
  text-align: center;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error {
  color: #d9534f;
  margin-bottom: 0;
  margin-top: 12px;
  line-height: 1;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code {
  width: 100%;
  max-width: 290px;
  margin: 32px auto 0;
  border-radius: 16px;
  overflow: hidden;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader {
  margin-top: 48px;
  margin-bottom: 48px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button {
  border-radius: 6px;
  padding: 12px 16px;
  line-height: 1;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: -16px;
  justify-content: center;
}
@media (min-width: 768px) {
  .dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button {
    width: auto;
    align-self: center;
  }
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon {
  margin-right: 8px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings {
  margin-top: 32px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead {
  margin-bottom: 16px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list {
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button {
  display: flex;
  border: none;
  background-color: #dee2e6;
  border-radius: 6px;
  padding: 16px;
  align-items: center;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader {
  width: 48px;
  overflow: hidden;
  height: auto;
  min-width: 2rem;
  margin: 0;
  padding: 0;
  color: #1b46c2;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image {
  width: 48px;
  height: auto;
  max-height: 48px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-break: break-word;
  text-align: left;
  margin-left: 16px;
  gap: 4px;
  flex: 1;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove {
  margin-left: 16px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link {
  line-height: 1;
  font-size: 18px;
  margin-top: 32px;
  font-weight: 500;
  display: inline-block;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link:hover, .dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link:active, .dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link:focus {
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sb));d5={"xPortal-login-container":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container",xPortalLoginContainer:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container","xPortal-modal-dialog-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content",xPortalModalDialogContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content","xPortal-modal-header":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header",xPortalModalHeader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header","xPortal-modal-header-text":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text",xPortalModalHeaderText:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text","xPortal-modal-close-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button",xPortalModalCloseButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button","xPortal-modal-body":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body",xPortalModalBody:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body","xPortal-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content",xPortalContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content","xPortal-container-heading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading",xPortalContainerHeading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading","xPortal-container-subheading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading",xPortalContainerSubheading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading","xPortal-container-error":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error",xPortalContainerError:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error","xPortal-qr-code":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code",xPortalQrCode:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code","xPortal-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader",xPortalLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader","xPortal-container-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button",xPortalContainerButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button","xPortal-container-button-icon":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon",xPortalContainerButtonIcon:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon","xPortal-pairings":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings",xPortalPairings:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings","xPortal-pairings-lead":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead",xPortalPairingsLead:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead","xPortal-pairings-list":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list",xPortalPairingsList:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list","xPortal-pairing-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button",xPortalPairingButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button","xPortal-pairing-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader",xPortalPairingLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader","xPortal-pairing-image":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image",xPortalPairingImage:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image","xPortal-pairing-details":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details",xPortalPairingDetails:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details","xPortal-pairing-remove":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove",xPortalPairingRemove:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove","xPortal-legacy-link":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link",xPortalLegacyLink:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link"}});var Nl={};Ee(Nl,{css:()=>gb,default:()=>u5});var gb,u5,El=G(()=>{"use strict";r();gb=`.dapp-core-component__unlockPageStyles__wrapper {
  color: inherit;
}

.dapp-core-component__unlockPageStyles__home {
  color: inherit;
}

.dapp-core-component__unlockPageStyles__unlock-page {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gb));u5={wrapper:"dapp-core-component__unlockPageStyles__wrapper",home:"dapp-core-component__unlockPageStyles__home","unlock-page":"dapp-core-component__unlockPageStyles__unlock-page",unlockPage:"dapp-core-component__unlockPageStyles__unlock-page"}});var h5={};Ee(h5,{UnlockPage:()=>f5});module.exports=we(h5);r();var Pn=M(require("react")),xi=M(require("classnames"));r();var Bg=M(require("react"));r();var Da=M(require("react"));r();er();var Rg=()=>!it();var OP=()=>F(void 0,null,function*(){return yield Promise.resolve().then(()=>(sd(),id))}),WP=()=>(sd(),we(id)).default,cd=Rg();function Mg({ssrGlobalImportCallback:n,ssrImportCallback:t,clientImportCallback:a}){let[s,l]=Da.default.useState(cd?void 0:WP()),[_,f]=Da.default.useState(cd||a==null?void 0:a()),T=()=>F(this,null,function*(){(n?n():OP()).then(y=>l(y.default)),t==null||t().then(y=>f(y.default))});return(0,Da.useEffect)(()=>{cd&&T()},[]),{globalStyles:s,styles:_}}function re(n,t){return a=>{let{globalStyles:s,styles:l}=Mg({ssrGlobalImportCallback:t.ssrGlobalStyles,ssrImportCallback:t.ssrStyles,clientImportCallback:t.clientStyles});return Bg.default.createElement(n,ne(k({},a),{globalStyles:s!=null?s:{},styles:l!=null?l:{}}))}}r();r();r();var Eh=require("react"),Kr=require("react-redux");r();var qd=require("@reduxjs/toolkit"),kh=require("react-redux/lib/utils/Subscription");Ie();r();var mh=M(require("lodash.throttle"));ae();Ie();Pd();Ur();Fr();var Nk=[hs],Gs=!1,Ek=(0,mh.default)(()=>{Ba(Ma())},5e3),lh=n=>t=>a=>{if(Nk.includes(a.type))return t(a);let s=n.getState(),l=Fo.local.getItem(vo.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return t(a);if(l==null)return Ba(Ma());let f=Date.now();return l-f<0&&!Gs?setTimeout(()=>{Gs=!0,n.dispatch(Af())},1e3):(Gs&&(Gs=!1),Ek()),t(a)};r();r();function Hs(){return typeof sessionStorage!="undefined"}var Ah=Hs()?(xh(),we(hh)).default:(yh(),we(Th)).default,Ih=Hs()?(bh(),we(Sh)).default:[],Ph=Hs()?(Lh(),we(Ch)).default:n=>n;$s();var ie=(0,qd.configureStore)({reducer:Ah,middleware:n=>n({serializableCheck:{ignoredActions:[...Ih,Ad.type,Gr.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(lh)}),Nh=(0,kh.createSubscription)(ie),PW=Ph(ie),kW=(0,qd.configureStore)({reducer:or});var nN={store:ie,subscription:Nh},Vd=(0,Eh.createContext)(nN),DW=(0,Kr.createStoreHook)(Vd),We=(0,Kr.createDispatchHook)(Vd),J=(0,Kr.createSelectorHook)(Vd);r();r();Ie();r();var Rh=M(require("lodash.isequal")),zs=require("reselect"),X=(0,zs.createSelectorCreator)(zs.defaultMemoize,Rh.default);var Uo=n=>n.account,Nt=X(Uo,n=>n.address),Et=X(Uo,Nt,(n,t)=>t in n.accounts?n.accounts[t]:ys),Dh=X(Uo,Et,(n,t)=>{let l=n,{accounts:a}=l,s=Eo(l,["accounts"]);return ne(k({},s),{address:t.address,account:t})}),FW=X(Et,n=>n.balance),Mh=X(Et,n=>{var t;return((t=n==null?void 0:n.nonce)==null?void 0:t.valueOf())||0}),UW=X(Uo,n=>n.shard),Bh=X(Uo,n=>n.ledgerAccount),GW=X(Uo,n=>n.walletConnectAccount),HW=X(Uo,n=>n.isAccountLoading),$W=X(Uo,n=>n.accountLoadingError),oN=X(Uo,n=>n.websocketEvent),tN=X(Uo,n=>n.websocketBatchEvent);r();var Oh=n=>n.dappConfig,VW=X(Oh,n=>n.shouldUseWebViewProvider);r();var Rn=n=>n.loginInfo,Wh=X(Rn,n=>n.loginMethod),tr=X(Rn,Nt,(n,t)=>Boolean(t)),YW=X(Rn,n=>n.walletConnectLogin),rN=X(Rn,n=>n.ledgerLogin),Fh=X(Rn,n=>n.walletLogin),ZW=X(Rn,n=>n.isLoginSessionInvalid),Rt=X(Rn,n=>n.tokenLogin),Kd=X(Rn,n=>n.logoutRoute),aN=X(Rn,n=>n.isWalletConnectV2Initialized);r();var Uh=n=>n.modals,e4=X(Uh,n=>n.txSubmittedModal),iN=X(Uh,n=>n.notificationModal);r();var Go=n=>n.networkConfig,$a=X(Go,n=>n.network.chainId),sN=X(Go,n=>n.network.roundDuration),t4=X(Go,n=>n.network.walletConnectBridgeAddress),Gh=X(Go,n=>n.network.walletConnectV2RelayAddress),Hh=X(Go,n=>n.network.walletConnectV2ProjectId),$h=X(Go,n=>n.network.walletConnectV2Options),zh=X(Go,n=>n.network.walletConnectDeepLink),Tn=X(Go,n=>n.network),jd=X(Tn,n=>n.apiAddress),qh=X(Tn,n=>n.explorerAddress),Vh=X(Tn,n=>{var t;return(t=n.customWalletAddress)!=null?t:n.walletAddress}),cN=X(Tn,n=>n.xAliasAddress),Xd=X(Tn,n=>n.egldLabel);r();var qs=n=>n.signedMessageInfo,i4=X(qs,n=>n.isSigning),s4=X(qs,n=>n.errorMessage),c4=X(qs,n=>{let t=Object.keys(n.signedSessions),a=t.length;return n.signedSessions[t[a-1]]}),p4=X(qs,n=>{let t=Object.keys(n.signedSessions),a=t.length;return t.length>0?t[a-1]:""});r();var Kh=n=>n.toasts,pN=X(Kh,n=>n.customToasts),jh=X(Kh,n=>n.transactionToasts);r();Ie();var Xh={errorMessage:Md,successMessage:Bd,processingMessage:Od},Yh=n=>n.transactionsInfo,dN=X(Yh,(n,t)=>t,(n,t)=>t!=null&&(n==null?void 0:n[Number(t)])||Xh);r();r();var Ho=require("@multiversx/sdk-core");ae();r();var Yd=require("@multiversx/sdk-core/out");r();r();function Vs(n){try{let t=atob(n),a=btoa(t),s=d.Buffer.from(n,"base64").toString(),l=d.Buffer.from(s).toString("base64"),_=n===a||a.startsWith(n),f=n===l||l.startsWith(n);if(_&&f)return!0}catch(t){return!1}return!1}function rr(n){return Vs(n)?atob(n):n}r();r();r();r();var Zh=n=>{let t=n!=null?n:"";return Vs(t)?Yd.TransactionPayload.fromEncoded(t):new Yd.TransactionPayload(t)};r();ae();var za=({data:n,onlySetGuardian:t})=>n?t?n.startsWith("SetGuardian"):Object.values(pd).some(a=>n.startsWith(a)):!1;function Ks(n){var s,l,_;let t=k({},n);za({data:t.data,onlySetGuardian:!0})&&(delete t.senderUsername,delete t.receiverUsername);let a=new Ho.Transaction(k(k(ne(k(ne(k({value:t.value.valueOf(),data:Zh(t.data),nonce:t.nonce.valueOf(),receiver:new Ho.Address(t.receiver)},t.receiverUsername?{receiverUsername:t.receiverUsername}:{}),{sender:new Ho.Address(t.sender)}),t.senderUsername?{senderUsername:t.senderUsername}:{}),{gasLimit:(s=t.gasLimit.valueOf())!=null?s:gs,gasPrice:(l=t.gasPrice.valueOf())!=null?l:fs,chainID:t.chainID.valueOf(),version:new Ho.TransactionVersion((_=t.version)!=null?_:sf)}),t.options?{options:new Ho.TransactionOptions(t.options)}:{}),t.guardian?{guardian:new Ho.Address(t.guardian)}:{}));return t.guardianSignature&&a.applyGuardianSignature(d.Buffer.from(t.guardianSignature,"hex")),t.signature&&a.applySignature(d.Buffer.from(t.signature,"hex")),a}r();r();ae();r();r();r();var uN=require("@multiversx/sdk-core/out");r();ae();r();var Qh=require("@multiversx/sdk-core");Ke();r();var Jh=require("@multiversx/sdk-core");function gN(n){try{let t=new Jh.Address(n);return Boolean(t.bech32())}catch(t){return!1}}function qa(n){return(n==null?void 0:n.length)===62&&/^\w+$/.test(n)&&gN(n)}r();r();r();var fN=require("@multiversx/sdk-core"),hN=M(require("bignumber.js"));Ge();r();r();r();var Va="accounts";var Zd="blocks";r();r();r();r();Gn();r();r();Gn();r();r();r();var bN=M(require("bignumber.js"));ae();r();var rx=require("@multiversx/sdk-core"),Dt=M(require("bignumber.js"));ae();r();var tx=M(require("bignumber.js")),$o=(n,t=!0)=>{let a=String(n);if(!a.match(/^[-]?\d+$/))return!1;let s=new tx.default(a),l=t?0:-1;return s.toString(10)===a&&s.comparedTo(0)>=l};r();function mt(n){return{if:function(t){return t?{then:a=>a instanceof Function?mt(a(n)):mt(a)}:{then:()=>mt(n)}},then:t=>t instanceof Function?mt(t(n)):mt(t),valueOf:function(){return n}}}Dt.default.config({ROUNDING_MODE:Dt.default.ROUND_FLOOR});function Mt({input:n,decimals:t=to,digits:a=nr,showLastNonZeroDecimal:s=!0,showIsLessThanDecimalsLabel:l=!1,addCommas:_=!1}){if(!$o(n,!1))throw new Error("Invalid input");let f=new Dt.default(n).isNegative(),T=n;return f&&(T=n.substring(1)),mt(T).then(()=>rx.TokenTransfer.fungibleFromBigInteger("",T,t).amountAsBigInteger.shiftedBy(-t).toFixed(t)).then(y=>{let x=new Dt.default(y);if(x.isZero())return Wo;let v=x.toString(10),[b,I]=v.split("."),N=new Dt.default(I||0),O=mt(0).if(Boolean(I&&s)).then(()=>Math.max(I.length,a)).if(N.isZero()&&!s).then(0).if(Boolean(I&&!s)).then(()=>Math.min(I.length,a)).valueOf(),A=I&&a>=1&&a<=I.length&&N.isGreaterThan(0)&&new Dt.default(I.substring(0,a)).isZero(),U=x.toFormat(O);return mt(v).if(_).then(U).if(Boolean(A)).then(j=>{let Y=new Dt.default(b).isZero(),[V,z]=j.split("."),Q=new Array(a-1).fill(0),Ce=[...Q,0].join(""),Re=[...Q,1].join("");return Y?l?`<${V}.${Re}`:s?`${V}.${z}`:V:`${V}.${Ce}`}).if(Boolean(!A&&I)).then(j=>{let[Y]=j.split("."),V=I.substring(0,O);if(s){let z=a-V.length;if(z>0){let Q=Array(z).fill(0).join("");return V=`${V}${Q}`,`${Y}.${V}`}return j}return V?`${Y}.${V}`:Y}).valueOf()}).if(f).then(y=>`-${y}`).valueOf()}r();r();r();ae();r();r();r();r();ae();r();ae();r();var wN=require("@multiversx/sdk-core");ae();r();var Ka=require("@multiversx/sdk-core"),LN=M(require("bignumber.js"));ae();r();r();var vN=M(require("bignumber.js"));ae();r();ae();r();r();r();r();r();r();ae();function AN(n,t){let a,s,l=/(\.0+)+$/,_=n.replace(l,"").split("."),f=t.replace(l,"").split("."),T=Math.min(_.length,f.length);for(a=0;a<T;a++)if(s=parseInt(_[a],10)-parseInt(f[a],10),s)return s;return _.length-f.length}function IN(n){let t=[dd,md,ld,_d,ud,gd,n].sort((x,v)=>AN(x,v)),a=t.indexOf(dd),s=t.indexOf(md),l=t.indexOf(ld),_=t.indexOf(_d),f=t.indexOf(ud),T=t.indexOf(gd),y=t.indexOf(n);return{ledgerWithMultiAccount:y>=a,ledgerWithHashSign:y>=s,ledgerWithSignAuthToken:y>=l,ledgerWithWhitelistedTokens:y>=_,ledgerWithGuardians:y>=f,ledgerWithUsernames:y>=T}}var ax=IN;r();ae();r();ae();r();Gn();var kN=["reDelegateRewards","claimRewards","unBond"],NN=["wrapEgld","unwrapEgld"],EN=["unStake"],RN=["unDelegate"];r();r();r();ae();r();var ON=M(require("bignumber.js"));r();r();Gn();r();var FN=M(require("bignumber.js"));r();r();r();r();var HN=M(require("bignumber.js"));Ke();r();r();r();r();Ge();r();var VN=require("@multiversx/sdk-web-wallet-provider");ae();r();var zN=M(require("qs"));r();gn();er();r();er();var OG={search:it()?window.location.search:"",removeParams:[]};r();r();r();dn();r();Gn();r();r();dn();r();var KN=M(require("linkifyjs"));r();ae();r();var jN=M(require("bignumber.js"));r();Ke();r();r();Ge();r();Ge();r();r();r();Gn();r();Gn();r();var XN=M(require("bignumber.js"));ae();Gn();r();Gn();r();var cx=require("react");Ke();r();r();Gn();r();r();var YN=require("@multiversx/sdk-core/out"),ZN=M(require("bignumber.js"));Gn();r();Ke();r();r();Ke();var IH=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];r();var px=require("react");Ke();dn();r();var QN=require("react");Gn();var BH=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Vr();r();var Ys=n=>n.transactions,jr=X(Ys,n=>n.signedTransactions),eE=X(Ys,n=>n.signTransactionsError),dx=X(Ys,n=>n.signTransactionsCancelMessage),Zs=n=>t=>Object.entries(t).reduce((a,[s,l])=>(n(l.status)&&(a[s]=l),a),{}),mx=X(jr,Zs($r)),lx=X(jr,Zs(zr)),_x=X(jr,Zs(qr)),nE=X(jr,Zs(Fd)),ux=X(Ys,n=>{var t;return(n==null?void 0:n.transactionsToSign)==null?null:ne(k({},n.transactionsToSign),{transactions:((t=n==null?void 0:n.transactionsToSign)==null?void 0:t.transactions.map(a=>Ks(a)))||[]})}),oE=X(jr,(n,t)=>t,(n,t)=>t!=null?(n==null?void 0:n[t])||{}:{});r();var Js=require("react");function gx(n,t=[]){let a=(0,Js.useRef)(!0);(0,Js.useEffect)(()=>{a.current?a.current=!1:n()},t)}r();Ie();r();r();r();r();r();r();r();r();var fx=require("@multiversx/sdk-extension-provider"),hx=require("@multiversx/sdk-hw-provider"),xx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Tx=require("@multiversx/sdk-opera-provider"),yx=require("@multiversx/sdk-passkey-provider/out"),em=require("@multiversx/sdk-web-wallet-provider");ae();It();r();var zo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Xr=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");Ge();r();var Qs={},ec=Yr;var tE="/dapp/init",ho=n=>{switch(n==null?void 0:n.constructor){case em.WalletProvider:return"wallet";case ec:return"walletconnectv2";case hx.HWProvider:return"ledger";case fx.ExtensionProvider:return"extension";case yx.PasskeyProvider:return"passkey";case xx.MetamaskProvider:return"metamask";case Tx.OperaProvider:return"opera";case st.CrossWindowProvider:return"crossWindow";case zo.IframeProvider:return"iframe";case Yr:return"";default:return"extra"}},nm=n=>new em.WalletProvider(`${n}${tE}`),om=n=>F(void 0,null,function*(){if(!n.isInitialized())throw new Error("Unable to get version. Provider not initialized");let t=n.hwApp,{contractData:a,version:s}=yield t.getAppConfiguration();return{version:s,dataEnabled:a===cf}}),Co=n=>`Unable to perform ${n}, Provider not initialized`,Yr=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Co("getAccount"))}setAccount(t){throw new Error(Co(`setAccount: ${t}`))}login(t){throw new Error(Co(`login with options: ${t}`))}logout(t){throw new Error(Co(`logout with options: ${t}`))}getAddress(){throw new Error(Co("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(t,a){throw new Error(Co(`sendTransaction with transactions: ${t} options: ${a}`))}signTransaction(t,a){throw new Error(Co(`signTransaction with transactions: ${t} options: ${a}`))}signTransactions(t,a){throw new Error(Co(`signTransactions with transactions: ${t} options: ${a}`))}signMessage(t,a){throw new Error(Co(`signTransactions with ${t} and options ${a}`))}sendCustomMessage({method:t,params:a}){throw new Error(Co(`sendCustomMessage with method: ${t} params: ${a}`))}sendCustomRequest(t){throw new Error(Co(`sendSessionEvent with options: ${t}`))}ping(){return Promise.resolve(!1)}},Xa=new Yr;var Sx=Xa;function Dn(n){Sx=n}function zn(){return Sx||Xa}Ie();r();r();r();r();r();var bx=require("@lifeomic/axios-fetch"),tm=M(require("axios")),rm=(0,bx.buildAxiosFetch)(tm.default),am=(n,t)=>F(void 0,null,function*(){if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);let s=n.clone().json(),[l]=yield Promise.all([s]);return{data:l,status:n.status,statusText:n.statusText,headers:n.headers,config:t}});function rE(n,t,a){return F(this,null,function*(){try{let s=yield rm(n,k({method:"POST",body:t?JSON.stringify(t):void 0,headers:k({"Content-Type":"application/json"},(a==null?void 0:a.headers)||{})},a));return am(s,a)}catch(s){throw console.error("Fetch Error:",s),s}})}function aE(n,t){return F(this,null,function*(){try{let a=yield rm(n,t);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return am(a,t)}catch(a){throw console.error("Fetch Error:",a),a}})}function iE(n,t,a){return F(this,null,function*(){try{let s=yield rm(n,k({method:"PATCH",body:t?JSON.stringify(t):void 0,headers:(a==null?void 0:a.headers)||{}},a));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return am(s,a)}catch(s){throw console.error("Fetch Error:",s),s}})}var ar=tm.default.create();ar.get=aE;ar.post=rE;ar.patch=iE;r();var Ya=n=>{let t=n!=null?n:jd(ie.getState());return t.endsWith("/")?t.slice(0,-1):t};r();var sE=M(require("axios"));r();var cE=M(require("swr"));var pE=n=>{let a=`${Ya()}/${Va}/${n}?withGuardianInfo=true`;return ar.get(a)},wx=n=>F(void 0,null,function*(){if(!n)return null;try{let{data:t}=yield pE(n);return t}catch(t){console.error("error fetching configuration for ",n,t)}return null});var ir=n=>wx(n);r();Ge();r();r();function vx(){let n=zn();return ho(n)}function sr(n){return vx()===n}r();dn();var Cx=()=>{let{search:n}=Te(),t=new URLSearchParams(n),a=Object.fromEntries(t),s=a==null?void 0:a.address;return qa(s)?s:null};function nc(){let n=ie.getState(),t=zn(),a=Nt(n),s=tr(n),l=Fh(n);if(!t)throw"provider not initialized";return sr("ledger")&&s?new Promise(_=>{_(a)}):!sr("")&&!sr("wallet")&&!sr("extra")?t.getAddress():new Promise(_=>{let f=Cx();l!=null&&f&&_(f),s&&_(a),_("")})}r();function Zr(n){let t=ie.getState(),a=Mh(t);return n?a&&!isNaN(a)?Math.max(a,n.nonce):n.nonce:a}Vr();r();r();r();var dE=M(require("axios"));r();var lE=M(require("axios"));Mr();r();ae();r();var _E=M(require("axios"));r();var gE=M(require("axios"));r();r();var fE=M(require("axios"));r();var hE=M(require("axios"));r();r();Ie();Ge();r();r();function Ax(n){return F(this,null,function*(){let t=n;t==null&&(t=Et(ie.getState()).address);let a=yield ir(t);if(a==null)throw"Could not read account, user not logged in";return a==null?void 0:a.balance})}r();r();dn();var Ix=()=>{let{search:n}=Te(),t=new URLSearchParams(n),a=Object.fromEntries(t);return a==null?void 0:a.accessToken};var Px=()=>{var a;let n=Ix(),t=Rn(ie.getState());return n!=null?n:(a=t.webviewLogin)==null?void 0:a.data};r();ze();Ke();r();Ie();r();var kx=require("@multiversx/sdk-core");Ke();gn();r();Vr();r();Ie();Ge();r();Ie();Ke();r();r();r();Ke();r();us();r();r();r();r();var SE=M(require("swr"));r();r();r();r();var Nx=require("react");r();r();var bE=require("react"),wE=require("@multiversx/sdk-web-wallet-provider"),vE=require("@multiversx/sdk-web-wallet-provider"),CE=M(require("qs"));ae();Ie();Ge();xd();dn();var fK=Te();r();var dT=require("react"),_m=require("@multiversx/sdk-core");r();ae();Nd();r();r();r();r();r();r();r();r();r();r();Mr();r();var PE=M(require("axios"));r();var NE=M(require("axios"));r();Mr();r();Mr();r();r();r();r();var RE=require("@multiversx/sdk-opera-provider");r();var DE=require("@multiversx/sdk-extension-provider");r();It();r();r();r();r();var Qx=M(Jx());var qo=n=>{if(!n||!(0,Qx.default)(n))return null;let t=n.split(".");if(t.length!==4)return null;try{let[a,s,l,_]=t,f=JSON.parse(rr(_)),T=rr(a);return{ttl:Number(l),extraInfo:f,origin:T,blockHash:s}}catch(a){return console.error(`Error trying to decode ${n}:`,a),null}};r();var aT=require("@multiversx/sdk-native-auth-client");r();var oT=M(require("axios"));r();r();r();function eT(n){return F(this,null,function*(){return yield new Promise(t=>{setTimeout(()=>t(),n)})})}r();var nT=(n,t,a,s=0)=>F(void 0,null,function*(){try{return yield n(...a)}catch(l){return s<t.retries?((t==null?void 0:t.delay)!=null&&(yield eT(t.delay)),yield nT(n,t,a,s+1)):null}}),cm=(n,t={retries:5,delay:500})=>(...a)=>F(void 0,null,function*(){return yield nT(n,t,a)});var a2=4,i2=3e4,rc={current:null},cr={current:null},s2=cm((n,t,a)=>F(void 0,null,function*(){if(a){let _=Math.floor(Date.now()/1e3);return{hash:yield a(),timestamp:_}}let{data:s}=yield oT.default.get(`${n}/${Zd}?from=${a2}&size=1&fields=hash,timestamp${t?"&shard="+t:""}`),[l]=s;return l}));function tT(n,t,a,s){return F(this,null,function*(){if(n==null)throw new Error("missing api url");let l=Date.now();if(rc.current!=null&&l<rc.current.timestamp*1e3+i2&&!s)return rc.current;if(cr.current!=null)return yield cr.current;cr.current=s2(n,t,a);try{let _=yield cr.current;if(_==null)throw cr.current=null,new Error("could not get block hash");return rc.current={hash:_.hash,timestamp:_.timestamp},cr.current=null,_}catch(_){return cr.current=null,null}})}r();r();xs();r();function c2(n){return Object.prototype.toString.call(n)==="[object String]"}var pm=n=>{var a;if(!n||!c2(n))return null;let t=n.split(".");if(t.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[s,l,_]=t,f=rr(s),T=rr(l),y=qo(T);if(!y)return{address:f,body:T,signature:_,blockHash:"",origin:"",ttl:0};let x=ne(k({},y),{address:f,body:T,signature:_});return(a=y.extraInfo)!=null&&a.timestamp||delete x.extraInfo,x}catch(s){return null}};var dm={isExpired:!1},rT=n=>{if(!n)return dm;let t=pm(n);if(!t)return dm;let a=Wr(),{ttl:s,extraInfo:l}=t,_=l==null?void 0:l.timestamp;if(!_)return dm;let f=_+s,T=a>f,y=f-a;return{isExpired:T,expiresAt:f,secondsUntilExpires:y}};r();dn();var Qa={origin:Te().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},ei=n=>{var a,s,l,_,f,T;return n===!0?Qa:{origin:(a=n==null?void 0:n.origin)!=null?a:Qa.origin,blockHashShard:n==null?void 0:n.blockHashShard,expirySeconds:(s=n==null?void 0:n.expirySeconds)!=null?s:Qa.expirySeconds,apiAddress:(l=n==null?void 0:n.apiAddress)!=null?l:Qa.apiAddress,tokenExpirationToastWarningSeconds:(_=n==null?void 0:n.tokenExpirationToastWarningSeconds)!=null?_:Qa.tokenExpirationToastWarningSeconds,extraInfo:(f=n==null?void 0:n.extraInfo)!=null?f:{},gatewayUrl:n==null?void 0:n.gatewayUrl,extraRequestHeaders:(T=n==null?void 0:n.extraRequestHeaders)!=null?T:{}}};var ni=n=>{let{origin:t,apiAddress:a,expirySeconds:s,blockHashShard:l,extraInfo:_,gatewayUrl:f,extraRequestHeaders:T}=ei(n),y=new aT.NativeAuthClient({origin:t,apiUrl:a,expirySeconds:s,blockHashShard:l,gatewayUrl:f,extraRequestHeaders:T});return{getNativeAuthConfig:ei,initialize:b=>F(void 0,null,function*(){var N,O;if(!a||!t)return"";let I=()=>y.getCurrentBlockHash();try{let A=(N=b==null?void 0:b.latestBlockInfo)!=null?N:yield tT(a,l,I,b==null?void 0:b.noCache);if(!A)return"";let{hash:U,timestamp:H}=A,j=y.encodeValue(JSON.stringify(k(k({},(O=b==null?void 0:b.extraInfo)!=null?O:_),H?{timestamp:H}:{})));return`${y.encodeValue(t)}.${U}.${s}.${j}`}catch(A){return console.error("Error getting native auth token: ",A.toString()),""}}),getToken:({address:b,token:I,signature:N})=>y.getToken(b,I,N),getTokenExpiration:rT}};var iT=a=>F(void 0,[a],function*({loginToken:n,extraInfoData:t}){if(n==null||Object.keys(t).length===0)return null;let s=qo(String(n)),x=(s==null?void 0:s.extraInfo)||{},{timestamp:l}=x,_=Eo(x,["timestamp"]);if(!(s&&l!=null))return null;let T={hash:String(s==null?void 0:s.blockHash),timestamp:Number(l)};return yield ni({extraInfo:k(k({},_),t),expirySeconds:s==null?void 0:s.ttl,origin:s==null?void 0:s.origin}).initialize({latestBlockInfo:T})});var mm=_=>F(void 0,[_],function*({loginToken:n,extraInfoData:t,address:a,signature:s,loginService:l}){let f=yield iT({loginToken:n,extraInfoData:t}),T=t.multisig||t.impersonate||a,y=f!=null?T:a;return f!=null&&l.setLoginToken(f),s&&l.setTokenLoginInfo({signature:s,address:a}),yield ir(y)});r();var p2=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();var d2=require("@multiversx/sdk-passkey-provider/out");ae();dn();r();r();r();var h2=require("react"),x2=require("@multiversx/sdk-hw-provider");r();ze();Ke();r();function sT(n,t){if(!n){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch(a){}}}function cT(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[a,s]=_2(n.path,n.caseSensitive,n.end),l=t.match(a);if(!l)return null;let _=l[0],f=_.replace(/(.)\/+$/,"$1"),T=l.slice(1);return{params:s.reduce((x,v,b)=>{if(v==="*"){let I=T[b]||"";f=_.slice(0,_.length-I.length).replace(/(.)\/+$/,"$1")}return x[v]=u2(T[b]||"",v),x},{}),pathname:_,pathnameBase:f,pattern:n}}function _2(n,t=!1,a=!0){sT(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(f,T)=>(s.push(T),"([^\\/]+)"));return n.endsWith("*")?(s.push("*"),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l+=a?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(l,t?void 0:"i"),s]}function u2(n,t){try{return decodeURIComponent(n)}catch(a){return sT(!1,`The value for the URL param "${t}" will not be decoded because the string "${n}" is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}Fa();Ur();Fr();gn();var pT=({callbackUrl:n,onRedirect:t})=>{typeof t=="function"?t(n):n&&Wa({url:n})},g2=n=>{let t=Fo.local.getItem(vo.logoutEvent),{data:a}=t?JSON.parse(t):{data:n};n===a&&(Fo.local.setItem({key:vo.logoutEvent,data:n,expires:0}),Fo.local.removeItem(vo.logoutEvent))},f2=500;function lm(l,_){return F(this,arguments,function*(n,t,a=Boolean(Px()),s={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var O;let f="",T=zn(),y=ho(T),x=y==="wallet",v=((O=T==null?void 0:T.isInitialized)==null?void 0:O.call(T))===!0;if(a&&(T==null?void 0:T.relogin)!=null)return T.relogin();if(s.shouldBroadcastLogoutAcrossTabs)try{f=yield nc(),g2(f)}catch(A){console.error("error fetching logout address",A)}let b=Pt(n),I=Te(),N=new URL(decodeURIComponent(b)).pathname;if((cT(I.pathname,N)||x&&v)&&Mf(),!f&&!v)return pT({callbackUrl:b,onRedirect:t});try{if(ie.dispatch($e()),x)return setTimeout(()=>{T.logout({callbackUrl:b})},f2);s.hasConsentPopup&&y==="crossWindow"&&T.setShouldShowConsentPopup(!0),yield T.logout({callbackUrl:b})}catch(A){console.error("Logging out error:",A)}finally{x||pT({callbackUrl:b,onRedirect:t})}})}r();var Jr=()=>{let n=zn(),t=ho(n);return{provider:n,providerType:t}};r();var Zy=require("react"),Jy=require("@multiversx/sdk-core"),aD=require("@multiversx/sdk-extension-provider"),iD=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),sD=require("@multiversx/sdk-passkey-provider/out"),cD=M(Ky());ae();r();r();var ta=()=>J(Et);r();var ai=()=>J(Dh);r();r();r();r();r();r();r();var ra=M(require("react"));var GR=(0,ra.createContext)({}),CZ=ie.getState();function sc(){let n=(0,ra.useContext)(GR);if(n===void 0||Object.values(n).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return n}r();var jy=M(require("react"));r();var Tm=M(require("react")),HR=M(require("axios"));var cc=()=>{try{let{loginInfo:n,isLoggedIn:t}=sc();return ne(k({},n),{isLoggedIn:t})}catch(n){let t=J(Rn),a=J(tr);return ne(k({},t),{isLoggedIn:a})}};var Xy=()=>{let{isLoggedIn:n}=cc();return n};r();r();It();r();r();var jR=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),XR=require("@multiversx/sdk-webview-provider/out/WebviewProvider");ze();r();ze();Ie();Ke();r();r();Ie();r();gn();r();Ie();Ke();r();r();var zR=require("@multiversx/sdk-core"),qR=M(require("bignumber.js"));ae();r();var VR=M(require("bignumber.js"));ae();Ie();Ge();gn();dn();r();var Yy=require("react"),QR=require("@multiversx/sdk-extension-provider"),eD=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),nD=require("@multiversx/sdk-passkey-provider/out");It();Ie();r();Ie();Ke();Fa();dn();r();wo();Ie();r();r();var dD=require("react");r();r();Ge();Vr();r();var pc=require("react"),Qy=(n,t)=>{let[a,s]=(0,pc.useState)(n);return(0,pc.useEffect)(()=>{let _=setTimeout(()=>s(n),t);return()=>clearTimeout(_)},[n]),a};r();r();var ym=require("react"),n0=require("@multiversx/sdk-extension-provider");wo();ze();Ge();r();function yn(){return tr(ie.getState())}pt();gn();gn();r();r();It();Ke();var qn=n=>(Object.values(Je).forEach(t=>{if(t!==(n==null?void 0:n.skipLoginMethod))switch(t){case"crossWindow":{let a=st.CrossWindowProvider.getInstance();a.isInitialized()&&a.dispose();break}case"iframe":{let a=zo.IframeProvider.getInstance();a.isInitialized()&&a.dispose();break}default:break}}),null);r();var e0=require("react"),dc=require("@multiversx/sdk-core");Ie();var mD=(n,t)=>{var a;return t?t===!0?n:(a=t.apiAddress)!=null?a:n:null},In=n=>{let t=J(Tn),a=J(Rt),s=(0,e0.useRef)(a==null?void 0:a.loginToken),l=mD(t.apiAddress,n),_=ei(k(k({},n===!0?{}:n),l?{apiAddress:l}:{})),f=Boolean(n),T=ni(_),{address:y}=ta(),x=We(),v=O=>{s.current=O,x(Oa(k(ne(k({},a),{loginToken:O}),l?{nativeAuthConfig:_}:{})))},b=()=>{try{return T.initialize()}catch(O){console.error("Unable to get block. Login failed.",O);return}},I=({address:O,signature:A})=>{let U=s.current;if(!U)throw"Token not found. Call `setLoginToken` first.";if(!f){x(Oa({loginToken:U,signature:A}));return}let H=T.getToken({address:O,token:U,signature:A});return x(Oa(k({loginToken:U,signature:A,nativeAuthToken:H},l?{nativeAuthConfig:_}:{}))),H};return{configuration:_,setLoginToken:v,getNativeAuthLoginToken:b,setTokenLoginInfo:I,refreshNativeAuthTokenLogin:U=>F(void 0,[U],function*({signMessageCallback:O,nativeAuthClientConfig:A}){let j=yield ni(A||_).initialize({noCache:Boolean(A)});if(s.current=j,!j)return;let Y=new dc.Message({address:new dc.Address(y),data:d.Buffer.from(`${y}${j}`)}),V=yield O(Y,{});if(!(V!=null&&V.signature))throw"Message not signed";return I({address:y,signature:d.Buffer.from(V.signature).toString("hex")})})}};var Sm=({callbackRoute:n,token:t,nativeAuth:a,onLoginRedirect:s})=>{let[l,_]=(0,ym.useState)(""),[f,T]=(0,ym.useState)(!1),y=a!=null,x=In(a),v=t,b=We(),I=yn();function N(){return F(this,null,function*(){if(I)throw new Error(An);qn(),T(!0);let A=n0.ExtensionProvider.getInstance();try{if(!(yield A.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let H=ct(),j=encodeURIComponent(Pt(n!=null?n:H));if(y&&!v&&(v=yield x.getNativeAuthLoginToken(),!v)){console.warn("Fetching block failed. Login cancelled.");return}v&&x.setLoginToken(v);let Y=k({callbackUrl:j},v&&{token:v}),{signature:V,address:z}=yield A.login(Y);if(Dn(A),!z){T(!1),console.warn("Login cancelled."),_("Login cancelled");return}V&&v&&x.setTokenLoginInfo({signature:V,address:z}),b(Qe({address:z,loginMethod:"extension"})),ro({callbackRoute:n,onLoginRedirect:s,options:{signature:V,address:z}})}catch(U){console.error("error logging in",U),_("error logging in"+U.message)}finally{T(!1)}})}let O=Boolean(l);return[N,{loginFailed:O,error:l,isLoading:f&&!O,isLoggedIn:I&&!O}]};r();var bm=require("react"),o0=require("@multiversx/sdk-opera-provider");wo();ze();Ge();pt();gn();dn();var wm=({callbackRoute:n,token:t,nativeAuth:a,onLoginRedirect:s})=>{let[l,_]=(0,bm.useState)(""),[f,T]=(0,bm.useState)(!1),y=a!=null,x=In(a),v=t,b=We(),I=yn();function N(){return F(this,null,function*(){if(I)throw new Error(An);qn(),T(!0);let A=o0.OperaProvider.getInstance();try{if(!(yield A.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:H}=Te(),j=ct(),Y=encodeURIComponent(`${H}${n!=null?n:j}`);if(y&&!v&&(v=yield x.getNativeAuthLoginToken(),!v)){console.warn("Fetching block failed. Login cancelled.");return}v&&x.setLoginToken(v);let V=k({callbackUrl:Y},v&&{token:v});yield A.login(V),Dn(A);let{signature:z,address:Q}=A.account;if(!Q){T(!1),console.warn("Login cancelled.");return}z&&v&&x.setTokenLoginInfo({signature:z,address:Q}),b(Qe({address:Q,loginMethod:"opera"})),ro({callbackRoute:n,onLoginRedirect:s,options:{signature:z,address:Q}})}catch(U){console.error("error loging in",U),_("error logging in"+U.message)}finally{T(!1)}})}let O=Boolean(l);return[N,{loginFailed:O,error:l,isLoading:f&&!O,isLoggedIn:I&&!O}]};r();var lD=require("react");yd();wo();It();ze();Ie();Ge();pt();dn();r();var Cm=require("react");wo();Ie();r();r();Sd();r();r();var vm=M(require("platform"));function t0(){var n,t,a,s;return((t=(n=vm.default)==null?void 0:n.os)==null?void 0:t.family)==="iOS"||((s=(a=vm.default)==null?void 0:a.os)==null?void 0:s.family)==="Android"}er();r();r();r();r();r();function mc(){return Xd(ie.getState())}r();r();Br();Ge();r();var r0=()=>{let n=typeof window!="undefined"?window:{};return Boolean(n==null?void 0:n.elrondWallet)};r();var _D=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();r();Fa();Ur();r();r();r();Ie();r();r();var uD=M(require("axios"));gn();r();r();var c0=M(Qr());Br();var a0,i0,s0,gD=(s0=(i0=(a0=Hn.safeWindow)==null?void 0:a0.location)==null?void 0:i0.origin)==null?void 0:s0.includes("localhost"),p0=n=>{if(!(0,c0.default)(n))return Boolean(n);let a=k({},n);return Boolean(gD)&&delete a.origin,Object.keys(a).length>0};r();var d0=({maxRetries:n})=>new Promise((t,a)=>{let s=0,l=()=>{let _=$a(ie.getState());if(_){t(_);return}if(s<n){s++,setTimeout(l,1e3);return}a(null)};l()});dn();r();var m0=(n,t=["address"])=>{let a=new URL(n),s=new URLSearchParams(a.search);t.forEach(f=>s.delete(f));let l=Array.from(s.values()).length>0?"?":"",_=a.pathname==="/"&&!n.endsWith("/")?"":a.pathname;return a.protocol==="vscode:"?n:`${a.origin}${_}${l}${s.toString()}${a.hash}`};var lc=({callbackRoute:n,token:t,nativeAuth:a,redirectDelayMilliseconds:s=100,customWalletAddress:l})=>{let[_,f]=(0,Cm.useState)(""),[T,y]=(0,Cm.useState)(!1),x=J(Tn),v=We(),b=yn(),I=Boolean(a),N=In(a),O=t;function A(){return F(this,null,function*(){if(b)throw new Error(An);v(zf(l));try{y(!0);let H=nm(l!=null?l:x.walletAddress),j=new Date,Y=j.setMinutes(j.getMinutes()+3)/1e3,V={data:{},expires:Y};if(I&&!O&&(O=yield N.getNativeAuthLoginToken(),!O)){console.warn("Login cancelled.");return}O&&N.setLoginToken(O);let{origin:z}=Te(),Q=window!=null&&window.location?`${z}${n}`:`${n}`;new URLSearchParams(document==null?void 0:document.location.search).get("address")||v(Lf(V));let De=m0(Q),qe=encodeURIComponent(De),de=ne(k({callbackUrl:qe},O&&{token:O}),{redirectDelayMilliseconds:s});yield H.login(de)}catch(H){console.error(H),f("error logging in"+H.message)}finally{y(!1)}})}let U=Boolean(_);return[A,{error:_,loginFailed:U,isLoading:T&&!U,isLoggedIn:b&&!U}]};r();var b0=require("react");ae();r();r();ae();var Vn=n=>{var l;let t=J(Rt),a=(l=t==null?void 0:t.loginToken)!=null?l:n;if(!a)return;let s=qo(a);if(!!s)return s.origin.toLowerCase().startsWith(of)};r();r();r();var pr=M(require("bignumber.js")),l0=n=>{let t=new pr.default(n).dividedBy(1e3).integerValue(pr.default.ROUND_FLOOR),a=new pr.default(t).dividedBy(60).integerValue(pr.default.ROUND_FLOOR),s=new pr.default(a).dividedBy(60).integerValue(pr.default.ROUND_FLOOR),l=s.modulo(60).isGreaterThan(1),_=a.modulo(60).isGreaterThan(1),f=a.modulo(60).isLessThan(1);return l?`${s} hours`:_?`${a} minutes`:f?"less than 1 minute":`${a} minute`};var _c=(n,t)=>{var _;let a=J(Rt),s=(_=a==null?void 0:a.loginToken)!=null?_:n;if(!s)return;let l=qo(s);if(!!l)return{className:t,url:l.origin,duration:l0(l.ttl*1e3)}};r();r();r();var Bt=M(require("react")),T0=require("react"),y0=require("react"),km=M(require("classnames")),S0=require("react-dom");ae();r();var u0=M(require("react")),g0=M(require("classnames"));var hD=({className:n,children:t,styles:a})=>u0.default.createElement("div",{className:(0,g0.default)(a==null?void 0:a.dappModalBody,n)},t),Lm=re(hD,{ssrStyles:()=>Promise.resolve().then(()=>(_t(),lt)),clientStyles:()=>(_t(),we(lt)).default});r();var Am=M(require("react")),f0=M(require("classnames"));var xD=({visible:n,customFooter:t,className:a,footerText:s,styles:l})=>n?Am.default.createElement("div",{className:(0,f0.default)(l==null?void 0:l.dappModalFooter,a)},t!=null?t:Am.default.createElement("div",null,s)):null,Im=re(xD,{ssrStyles:()=>Promise.resolve().then(()=>(_t(),lt)),clientStyles:()=>(_t(),we(lt)).default});r();var aa=M(require("react")),h0=require("@fortawesome/free-solid-svg-icons"),x0=require("@fortawesome/react-fontawesome"),ii=M(require("classnames"));var TD=({visible:n,headerText:t,customHeader:a,className:s,closeButtonClassName:l,headerTextClassName:_,onHide:f,globalStyles:T,styles:y})=>n?a?aa.default.createElement("div",{className:(0,ii.default)(y==null?void 0:y.dappModalHeader,s)},a):aa.default.createElement("div",{className:(0,ii.default)(y==null?void 0:y.dappModalHeader,s)},aa.default.createElement("div",{className:(0,ii.default)(y==null?void 0:y.dappModalHeaderText,_)},t),aa.default.createElement("button",{onClick:f,className:(0,ii.default)(y==null?void 0:y.dappModalCloseButton,T==null?void 0:T.btn,T==null?void 0:T.btnLight,l)},aa.default.createElement(x0.FontAwesomeIcon,{size:"lg",icon:h0.faTimes}))):null,Pm=re(TD,{ssrStyles:()=>Promise.resolve().then(()=>(_t(),lt)),clientStyles:()=>(_t(),we(lt)).default});var yD={showHeader:!0,showFooter:!1,headerText:"",footerText:""},SD=({"data-testid":n="dappModal",children:t,className:a="dapp-modal-dialog-wrapper",closeOnEscape:s,config:l=yD,id:_="dapp-modal",onHide:f,parentElement:T,visible:y,styles:x})=>{let[v,b]=(0,T0.useState)(!1);if((0,y0.useEffect)(()=>{b(!0)},[]),!y)return null;let{showHeader:I,showFooter:N,headerText:O,footerText:A,modalDialogClassName:U="dapp-modal-dialog",modalContentClassName:H="dapp-modal-dialog-content",modalHeaderClassName:j="dapp-modal-dialog-header",modalHeaderTextClassName:Y="dapp-modal-dialog-header-text",modalCloseButtonClassName:V="dapp-modal-dialog-close-button",modalBodyClassName:z="dapp-modal-dialog-content-body",modalFooterClassName:Q="dapp-modal-dialog-footer",customModalHeader:Ce,customModalFooter:Re}=l,De=qe=>{qe.key==="Escape"&&s&&(f==null||f())};return Bt.default.createElement(Bt.default.Fragment,null,v&&(0,S0.createPortal)(Bt.default.createElement("div",{id:_,role:"dialog","aria-modal":"true",className:(0,km.default)(U,x==null?void 0:x.dappModal,a),"data-testid":n,onKeyDown:De},Bt.default.createElement("div",{className:(0,km.default)(x==null?void 0:x.dappModalContent,H)},Bt.default.createElement(Pm,{visible:I,headerText:O,customHeader:Ce,className:j,headerTextClassName:Y,closeButtonClassName:V,onHide:f}),Bt.default.createElement(Lm,{className:z},t),Bt.default.createElement(Im,{visible:N,customFooter:Re,footerText:A,className:Q}))),T!=null?T:document==null?void 0:document.body))},Nm=re(SD,{ssrStyles:()=>Promise.resolve().then(()=>(_t(),lt)),clientStyles:()=>(_t(),we(lt)).default});r();r();var uc=require("react"),gc=n=>{let[t,a]=(0,uc.useState)(!1),s=()=>{a(!0)},l=()=>{a(!1)};return(0,uc.useEffect)(()=>{(n==null?void 0:n.visible)===!0?s():(n==null?void 0:n.visible)===!1&&l()},[n==null?void 0:n.visible]),{handleShowModal:s,handleHideModal:l,showModal:t}};r();var si=({hideButtonWhenModalOpens:n,onContentHide:t,onContentShow:a,onModalCloses:s,onModalOpens:l,token:_,wrapContentInsideModal:f})=>{let T=Xy(),[y,x]=(0,b0.useState)(!1),{handleShowModal:v,handleHideModal:b,showModal:I}=gc(),N=Vn(_),O=!n||!y,A=()=>{x(!1),t==null||t(),f?(b(),s==null||s()):s&&(console.warn('Deprecated: "onModalCloses" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentHide" instead.'),s())};return{disabledConnectButton:N,handleCloseModal:A,handleOpenModal:()=>{if(T)throw new Error(An);if(y)return A();x(!0),a==null||a(),f?(v(),l==null||l()):l&&(console.warn('Deprecated: "onModalOpens" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentShow" instead.'),l())},shouldRenderButton:O,showContent:y,showModal:I}};r();var ia=require("react"),Em=require("@multiversx/sdk-hw-provider");wo();ze();Ie();Ge();pt();r();var dr=require("react"),bD=10,w0=()=>{let[n,t]=(0,dr.useState)(""),[a,s]=(0,dr.useState)(!1),[l,_]=(0,dr.useState)(0),[f,T]=(0,dr.useState)([]),[y,x]=(0,dr.useState)(null),[v,b]=(0,dr.useState)(!1);return{accounts:f,defaultAddressesPerPage:bD,error:n,isLoading:a,onGoToNextPage:()=>{x(null),_(U=>U+1)},onGoToPrevPage:()=>{x(null),_(U=>U===0?0:U-1)},onGoToSpecificPage:U=>{x(null),_(U)},onSelectAddress:U=>{x(U)},selectedAddress:y,setAccounts:T,setError:t,setIsLoading:s,setShowAddressList:b,showAddressList:v,startIndex:l}};var ci="Check if the MultiversX App is open on Ledger",Rm=({callbackRoute:n,token:t,addressesPerPage:a,nativeAuth:s,onLoginRedirect:l})=>{let _=J(Bh),f=zn(),T=We(),y=yn(),x=s!=null,v=In(s),b=t,{accounts:I,setAccounts:N,isLoading:O,setIsLoading:A,setShowAddressList:U,showAddressList:H,startIndex:j,selectedAddress:Y,onGoToPrevPage:V,onGoToNextPage:z,onGoToSpecificPage:Q,onSelectAddress:Ce,error:Re,setError:De,defaultAddressesPerPage:qe}=w0(),de=a!=null?a:qe,[Fe,wn]=(0,ia.useState)(""),[Yn,fe]=(0,ia.useState)(!1),Ae=({address:he,index:ye,signature:se})=>{T(Cf({index:ye,loginType:"ledger"})),se&&v.setTokenLoginInfo({signature:se,address:he}),T(Qe({address:he,loginMethod:"ledger"})),ro({callbackRoute:n,onLoginRedirect:l,options:{address:he,signature:se}})},Pe=(he,ye="")=>{var se;if(O){let{errorMessage:Se,defaultErrorMessage:Me}=kd(he),je=(se=Se!=null?Se:Me)!=null?se:ci;De(`${je}.${ye}`),A(!1),T(Id(null))}},nn=()=>F(void 0,null,function*(){try{if(f instanceof Em.HWProvider&&f.isInitialized())return f.isConnected()}catch(he){Pe(he)}return!1}),rn=()=>F(void 0,null,function*(){if(yield nn()){De(""),A(!1);return}try{let ye=new Em.HWProvider;(yield ye.init())&&Dn(ye),De(""),A(!1)}catch(ye){Pe(ye)}}),Ut=()=>F(void 0,null,function*(){let he=yield nn();if(!Y||!he)return Pe(ci);let{index:ye}=Y;if(x&&!b&&(b=yield v.getNativeAuthLoginToken(),!b)){console.warn("Fetching block failed. Login cancelled.");return}if(b){v.setLoginToken(b);try{let se=yield f.tokenLogin({token:d.Buffer.from(`${b}{}`),addressIndex:ye});Ae({address:se.address,index:ye,signature:se.signature.toString("hex")})}catch(se){Pe(se,". Update MultiversX App to continue.")}}else try{let{address:se}=yield f.login({addressIndex:ye});Ae({address:se,index:ye})}catch(se){return Pe(se),!1}return!0}),Gt=()=>F(void 0,null,function*(){try{if(A(!0),Y==null)return!1;T(_?yf(Y):Id(ne(k({},Y),{version:Fe,hasContractDataEnabled:Yn}))),A(!1),yield Ut()}catch(he){Pe(he)}return U(!1),!0}),Ao=()=>F(void 0,null,function*(){if(!(yield nn()))return Pe(Re);try{A(!0);let ye=yield f.getAccounts(j,de),se=yield om(f);wn(se.version),fe(se.dataEnabled),N(ye),A(!1)}catch(ye){Pe(ye)}}),an=()=>F(void 0,null,function*(){if(y)throw new Error(An);qn(),De("");try{if(A(!0),!(yield nn()))return Pe(ci);if(_!=null){if(!Y)return Pe(ci);let{address:ye}=yield f.login({addressIndex:Y.index.valueOf()});if(!ye)return Pe("Login cancelled.");T(Qe({address:ye,loginMethod:"ledger"})),ro({callbackRoute:n,onLoginRedirect:l})}else I!=null&&I.length||(yield Ao()),U(!0);A(!1)}catch(he){Pe(he)}}),Io=()=>F(void 0,null,function*(){try{let he=yield nn();if(he||(yield rn()),he=yield nn(),!he)return Pe(ci);(I.length===0||j>=0)&&(yield Ao())}catch(he){Pe(he)}});(0,ia.useEffect)(()=>{Io()},[j,H,f]),(0,ia.useEffect)(()=>{(I==null?void 0:I.length)>0&&!H&&U(!0)},[I]);let sn=Boolean(Re);return[an,{loginFailed:sn,isLoggedIn:y&&!sn,error:Re,isLoading:O&&!sn},{accounts:I,showAddressList:H,startIndex:j,selectedAddress:Y,version:Fe,contractDataEnabled:Yn,onGoToPrevPage:V,onGoToNextPage:z,onGoToSpecificPage:Q,onSelectAddress:Ce,onConfirmSelectedAddress:Gt}]};r();r();var Kn=require("react");ze();Ie();Ge();pt();dn();var Dm=({callbackRoute:n,token:t,nativeAuth:a,onLoginRedirect:s,logoutRoute:l,customRequestMethods:_=[]})=>{var ye;let f=We(),T=p0(a),y=In(T?a:!1),x=t,[v,b]=(0,Kn.useState)(""),[I,N]=(0,Kn.useState)(""),[O,A]=(0,Kn.useState)(!0),[U,H]=(0,Kn.useState)([]),[j,Y]=(0,Kn.useState)(null),{provider:V}=Jr(),z=J(Gh),Q=J(Hh),Ce=J($h),Re=J(zh),De=J(Kd),qe=J(Wh),de=(0,Kn.useRef)(V),Fe=(0,Kn.useRef)(!1),wn=(0,Kn.useRef)(!1),Yn=(ye=l!=null?l:De)!=null?ye:"/",fe=[Qs.CANCEL_ACTION,..._];t&&fe.push(Qs.SIGN_LOGIN_TOKEN),T&&fe.push(Qs.SIGN_NATIVE_AUTH_TOKEN);let Ae=O?"":`${Re}?wallet-connect=${encodeURIComponent(I)}`,Pe=Boolean(v),nn=yn(),rn=()=>{lm(Yn)},Ut=se=>{console.log("WalletConnect Session Event: ",se)},Gt=()=>F(void 0,null,function*(){var se,Se,Me,je;try{if(Fe.current||de.current==null)return;if(!wn.current){try{yield(se=de.current)==null?void 0:se.logout()}catch(gr){console.warn("Unable to logout")}return}let ke=yield(Me=(Se=de.current)==null?void 0:Se.getAddress)==null?void 0:Me.call(Se);if(!ke){console.warn("Login cancelled.");return}let hn=yield(je=de.current)==null?void 0:je.getSignature(),Mn={address:ke,loginMethod:"walletconnectv2"},vn={logoutRoute:Yn,loginType:"walletconnectv2",callbackRoute:n!=null?n:Te().href};f(vf(vn)),hn&&y.setTokenLoginInfo({signature:hn,address:ke}),f(Qe(Mn)),ro({callbackRoute:n,onLoginRedirect:s,options:{address:ke,signature:hn}})}catch(ke){b("User rejected connection proposal"),console.error(ke)}}),Ao=()=>F(void 0,null,function*(){var Se,Me,je,ke,hn;if(ho(de.current)==="walletconnectv2")try{((ke=(je=(Me=(Se=de.current)==null?void 0:Se.walletConnector)==null?void 0:Me.session)==null?void 0:je.getAll())!=null?ke:[]).length>0&&(yield(hn=de.current)==null?void 0:hn.logout()),de.current=Xa,Y(null)}catch(Mn){console.warn("Unable to logout")}}),an=se=>F(void 0,null,function*(){var Se,Me,je;if(!z||!Q){b("Invalid WalletConnect setup");return}if(!se||!se.topic){b("Expired connection");return}try{if((de.current?ho(de.current):!1)!=="walletconnectv2"){yield sn();return}if(A(!0),yield Ao(),T&&!x&&(x=yield y.getNativeAuthLoginToken(),!x)){console.warn("Fetching block failed. Login cancelled.");return}x&&y.setLoginToken(x),yield sn(!1);let{approval:hn}=yield(Se=de.current)==null?void 0:Se.connect({topic:se.topic,methods:fe});try{yield(Me=de.current)==null?void 0:Me.login({approval:hn,token:x})}catch(Mn){console.error("User rejected existing connection proposal",Mn),b("User rejected existing connection proposal"),A(!0),yield sn()}}catch(ke){console.error("Unable to connect to existing session",ke),b("Unable to connect to existing session")}finally{H((je=de.current)==null?void 0:je.pairings)}}),Io=se=>F(void 0,null,function*(){var Se,Me;try{se&&(yield(Se=de.current)==null?void 0:Se.logout({topic:se}))}catch(je){console.error("Unable to remove existing pairing",je),b("Unable to remove existing pairing")}finally{let je=yield(Me=de.current)==null?void 0:Me.getPairings();H(je)}});function sn(se=!0){return F(this,null,function*(){var vn,gr,Ti;qn();let Se=yield d0({maxRetries:15});if(!Se){console.error("Invalid chainID"),b("Invalid chainID");return}if(!Q||!z){console.error("Invalid WalletConnect setup"),b("Invalid WalletConnect setup");return}let Me=yn(),je=wn.current===!1&&!Me,ke=(gr=(vn=de.current)==null?void 0:vn.isInitialized)==null?void 0:gr.call(vn);if(Fe.current||je||ke)return;if(Fe.current=!0,(Ti=de.current)!=null&&Ti.walletConnector){yield de.current.init(),Y(de.current),Fe.current=!1,se&&(yield he());return}let hn={onClientLogin:Gt,onClientLogout:rn,onClientEvent:Ut},Mn=new ec(hn,Se,z,Q,Ce);yield Mn.init(),Y(Mn),de.current=Mn,Fe.current=!1,se&&(H(Mn.pairings),yield he())})}function he(){return F(this,null,function*(){var se,Se;if(!!de.current){if(!z||!Q){b("Invalid WalletConnect setup");return}try{if(!wn.current)return;let{uri:Me,approval:je}=yield(se=de.current)==null?void 0:se.connect({methods:fe});if(!Boolean(Me))return;if(N(Me),(Ce==null?void 0:Ce.logger)==="debug"&&console.log("WalletConnect uri: ",Me),T&&!x&&(x=yield y.getNativeAuthLoginToken(),!x)){console.warn("Fetching block failed. Login cancelled.");return}if(x&&y.setLoginToken(x),(de.current?ho(de.current):!1)!=="walletconnectv2"){A(!0),yield sn();return}try{yield(Se=de.current)==null?void 0:Se.login({approval:je,token:x})}catch(Mn){console.error("User rejected connection proposal",Mn),b("User rejected connection proposal"),A(!0)}}catch(Me){console.error("Unable to connect",Me)}}})}return gx(()=>{de.current=V},[V]),(0,Kn.useEffect)(()=>(wn.current=!0,()=>{wn.current=!1}),[]),(0,Kn.useEffect)(()=>{A(!I)},[I]),(0,Kn.useEffect)(()=>{if(!j)return;(Boolean(j.session)||qe==="walletconnectv2")&&nn&&Dn(j)},[j,nn]),[sn,{error:v,loginFailed:Pe,isLoading:O&&!Pe,isLoggedIn:nn&&!Pe},{uriDeepLink:Ae,walletConnectUri:I,cancelLogin:Ao,connectExisting:an,removeExistingPairing:Io,wcPairings:U}]};r();var wD=require("react"),vD=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");wo();ze();Ge();pt();gn();gn();r();var Mm=require("react"),Bm=require("@multiversx/sdk-passkey-provider/out");wo();ze();Ge();pt();gn();gn();var Om=({callbackRoute:n,token:t,nativeAuth:a,onLoginRedirect:s})=>{let[l,_]=(0,Mm.useState)(""),[f,T]=(0,Mm.useState)(!1),y=a!=null,x=In(a),v=t,b=We(),I=yn();function N(){return F(this,null,function*(){if(I)throw new Error(An);qn(),T(!0);let U=Bm.PasskeyProvider.getInstance();try{if(!(yield U.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let j=ct(),Y=encodeURIComponent(Pt(n!=null?n:j));if(y&&!v&&(v=yield x.getNativeAuthLoginToken(),!v)){console.warn("Fetching block failed. Login cancelled.");return}v&&x.setLoginToken(v);let V=k({callbackUrl:Y},v&&{token:v});yield U.login(V),Dn(U);let{signature:z,address:Q}=U.account;if(!Q){T(!1),console.warn("Login cancelled."),_("Login cancelled");return}z&&v&&x.setTokenLoginInfo({signature:z,address:Q}),b(Qe({address:Q,loginMethod:"passkey"})),ro({callbackRoute:n,onLoginRedirect:s,options:{signature:z,address:Q}})}catch(H){console.error("error logging in",H),_("Error logging in: "+H.message)}finally{T(!1)}})}let O=U=>F(void 0,null,function*(){let H=Bm.PasskeyProvider.getInstance();return yield H.init(),yield H.createAccount({walletName:U})}),A=Boolean(l);return[N,O,{loginFailed:A,error:l,isLoading:f&&!A,isLoggedIn:I&&!A}]};r();r();var v0=require("react");r();var AD=require("react");r();var Wm=require("react"),LD=require("socket.io-client");Ie();r();r();r();var ID=require("react");Ke();r();r();r();var kD=M(require("swr"));r();r();r();r();var PD=M(require("axios"));r();r();r();var fc=M(require("react")),Gm=M(require("classnames"));ae();r();var pi=M(require("react")),A0=M(require("classnames"));var ED=({onLogin:n,text:t="Default Login Button",className:a="dapp-login-button",btnClassName:s="dapp-default-login-button",disabled:l,"data-testid":_,children:f,globalStyles:T,styles:y})=>{let x=(0,pi.useMemo)(()=>({wrapper:(0,A0.default)(T==null?void 0:T.btn,T==null?void 0:T.btnPrimary,T==null?void 0:T.px4,T==null?void 0:T.m1,T==null?void 0:T.mx3,{[s]:s!=null},a),loginText:y==null?void 0:y.loginText,wrapperClassName:a}),[T,y]);return pi.default.createElement("button",{"data-testid":_,disabled:l,className:x.wrapper,onClick:n},f||pi.default.createElement("span",{className:x.loginText},t))},jn=re(ED,{ssrStyles:()=>Promise.resolve().then(()=>(Um(),Fm)),clientStyles:()=>(Um(),we(Fm)).default});er();r();var DD=({token:n,className:t="dapp-extension-login",children:a,callbackRoute:s,buttonClassName:l="dapp-default-login-button",nativeAuth:_,loginButtonText:f="MultiversX DeFi Wallet",onLoginRedirect:T,disabled:y,"data-testid":x="extensionLoginButton",globalStyles:v,styles:b})=>{let[I]=Sm({callbackRoute:s,token:n,onLoginRedirect:T,nativeAuth:_}),N=Vn(n),O=it()&&navigator.userAgent.indexOf("Firefox")!=-1,A={wrapper:(0,Gm.default)(v==null?void 0:v.btn,v==null?void 0:v.btnPrimary,v==null?void 0:v.px4,v==null?void 0:v.m1,v==null?void 0:v.mx3,b==null?void 0:b.noExtensionButtonWrapper,{[l]:l!=null},t),loginText:(0,Gm.default)(b==null?void 0:b.loginText,b==null?void 0:b.noExtensionButtonContent),wrapperClassName:t},U=()=>{I()};return r0()?fc.default.createElement(jn,{onLogin:U,className:t,btnClassName:l,text:f,disabled:y||N,"data-testid":x},a):fc.default.createElement("a",{rel:"noreferrer",href:O?Wg:Fg,target:"_blank",className:A.wrapper},a||fc.default.createElement("span",{className:A.loginText},f))},P0=re(DD,{ssrStyles:()=>Promise.resolve().then(()=>(mi(),di)),clientStyles:()=>(mi(),we(di)).default});r();r();var E0=M(require("react"));r();var Hm=require("react");wo();ze();Ie();Ke();dn();var k0=({callbackRoute:n,token:t,nativeAuth:a,walletAddress:s})=>{let[l,_]=(0,Hm.useState)(""),[f,T]=(0,Hm.useState)(!1),y=a!=null,x=In(a),v=t,b=J(Tn),I=We(),N=yn();function O(){return F(this,arguments,function*(U=Xr.IframeLoginTypes.metamask){if(N)throw new Error(An);qn({skipLoginMethod:"iframe"}),T(!0);let H=zo.IframeProvider.getInstance(),j=s!=null?s:b.metamaskSnapWalletAddress;if(!j){_("Iframe snap wallet URL is not set");return}H.setLoginType(U),H.setWalletUrl(j);let Y=yield H.init();try{if(!Y){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:V,pathname:z}=Te(),Q=encodeURIComponent(`${V}${n!=null?n:z}`);if(y&&!v&&(v=yield x.getNativeAuthLoginToken(),!v)){console.warn("Fetching block failed. Login cancelled.");return}v&&x.setLoginToken(v);let Ce=k({callbackUrl:Q},v&&{token:v}),{signature:Re,address:De,multisig:qe,impersonate:de}=yield H.login(Ce);if(Dn(H),!De){T(!1),console.warn("Login cancelled.");return}let Fe=yield mm({loginToken:v,extraInfoData:{multisig:qe,impersonate:de},address:De,signature:Re,loginService:x});if(!Fe)return;I(Qe({address:Fe.address,loginMethod:"iframe",iframeLoginType:U})),I(Gr(ne(k({},Fe),{nonce:Zr(Fe)})))}catch(V){console.error("error loging in",V),_("error logging in"+V.message)}finally{T(!1)}})}let A=Boolean(l);return[O,{loginFailed:A,error:l,isLoading:f&&!A,isLoggedIn:N&&!A}]};var BD=({token:n,className:t="dapp-metamask-proxy-login",children:a,callbackRoute:s,buttonClassName:l="dapp-default-login-button",nativeAuth:_,loginButtonText:f="Metamask Proxy",onLoginRedirect:T,disabled:y,loginType:x=Xr.IframeLoginTypes.metamask})=>{let[v]=k0({callbackRoute:s,token:n,onLoginRedirect:T,nativeAuth:_}),b=Vn(n);return E0.default.createElement(jn,{onLogin:()=>{v(x)},className:t,btnClassName:l,text:f,disabled:y||b},a)},R0=re(BD,{ssrStyles:()=>Promise.resolve().then(()=>(zm(),$m)),clientStyles:()=>(zm(),we($m)).default});r();r();var fi=M(require("react"));ae();r();r();var bc=M(require("react")),ZS=M(require("classnames"));r();r();var D0=M(require("react"));var li=n=>{let{showModal:t}=gc({visible:n.visible}),a=()=>{var s;(s=n.onClose)==null||s.call(n)};return D0.default.createElement(Nm,{className:n.className,closeOnEscape:n.closeOnEscape,config:n.modalConfig,onHide:a,visible:t},n.children)};r();r();var _a=M(require("react"));r();r();var gi=M(require("react"));r();r();var mn=M(require("react")),da=M(require("classnames"));ae();r();r();var Sn=M(require("react")),Ot=require("@fortawesome/free-solid-svg-icons"),ol=require("@fortawesome/react-fontawesome"),xc=M(require("bignumber.js")),mr=M(require("classnames"));ae();r();r();r();var hc=M(require("react")),B0=require("@fortawesome/react-fontawesome"),Km=M(require("classnames"));var WD=({label:n,onClick:t,showLabels:a,isInactive:s,paginationButtonIcon:l,className:_,"data-testid":f,styles:T})=>hc.default.createElement("div",{onClick:t,"data-testid":f,className:(0,Km.default)(T==null?void 0:T.paginationEdgeButton,_,{[T==null?void 0:T.inactive]:s})},hc.default.createElement(B0.FontAwesomeIcon,{icon:l,className:T==null?void 0:T.paginationEdgeButtonIcon}),hc.default.createElement("span",{className:(0,Km.default)(T==null?void 0:T.paginationEdgeButtonText,{[T==null?void 0:T.show]:a})},n)),jm=re(WD,{ssrStyles:()=>Promise.resolve().then(()=>(Vm(),qm)),clientStyles:()=>(Vm(),we(qm)).default});r();r();r();var Qm=M(J0()),sa=M(lS());ae();r();var gS=({currentPage:n,totalPages:t})=>{let a=n-1,s=n+1;if(t<=7)return(0,sa.default)(1,t+1).map(H=>String(H));let l=(H,j)=>H.includes(n)?H:H.slice(0,7-j.length-1),_=(0,Qm.default)(s-1,3,5),f=(0,Qm.default)(a+1,t-3,t-1),T=_?(0,sa.default)(1,s+1):(0,sa.default)(1,5-1),y=f?(0,sa.default)(a,t+1):(0,sa.default)(t-3+1,t+1),x=l(T,y),v=l(y.reverse(),T),b=x.concat(v),I=[Or,a,n,s,Or],[N]=x,[O]=v;return(b.includes(n)?[...x,Or,...v.reverse()]:[N,...I,O]).map(H=>String(H))};var EM=({currentPage:n=1,totalPages:t,className:a,disabledClassName:s,buttonsClassNames:l,onPageChange:_,isDisabled:f,showLabels:T,showEdgeButtons:y=!0,styles:x})=>{let[v,b]=(0,Sn.useState)(n),I=v===1,N=v===t,O=s?{[s]:f}:{},A=gS({currentPage:v,totalPages:t}),U=z=>{z!==v&&(b(z),_(z))},H=z=>{$o(z)&&U(new xc.default(z).toNumber())},j=z=>Q=>{Q.preventDefault(),U(z)},Y=z=>$o(z)&&new xc.default(z).isGreaterThanOrEqualTo(100),V=z=>new xc.default(z).isEqualTo(v);return(0,Sn.useEffect)(()=>{n!==v&&b(n)},[n,v]),t===1?null:Sn.default.createElement("div",{className:(0,mr.default)(x==null?void 0:x.pagination,a)},y&&Sn.default.createElement("span",{onClick:j(1),className:(0,mr.default)(x==null?void 0:x.paginationAngle,l,k({[x==null?void 0:x.disabled]:I},O))},Sn.default.createElement(ol.FontAwesomeIcon,{className:x==null?void 0:x.paginationAngleIcon,icon:Ot.faAnglesLeft})),Sn.default.createElement(jm,{label:"Prev",onClick:j(v-1),"data-testid":"prevBtn",paginationButtonIcon:Ot.faAngleLeft,isInactive:I,showLabels:T,className:(0,mr.default)(x==null?void 0:x.paginationEdgeButton,l,{[x==null?void 0:x.disabled]:f},O)}),Sn.default.createElement("div",{className:x==null?void 0:x.paginationItems},A.map((z,Q)=>Sn.default.createElement("div",{key:`page-item-${Q}`,className:x==null?void 0:x.paginationItemWrapper},$o(z)?Sn.default.createElement("div",{onClick:()=>H(z),className:(0,mr.default)(x==null?void 0:x.paginationItem,l,{[x==null?void 0:x.active]:V(z)},{[x==null?void 0:x.ellipsis]:!$o(z)},{[x==null?void 0:x.disabled]:f},{[x==null?void 0:x.hundreds]:Y(z)},O)},Sn.default.createElement("span",{className:x==null?void 0:x.paginationItemText},z)):Sn.default.createElement("span",{className:x==null?void 0:x.paginationItemText},z)))),Sn.default.createElement(jm,{label:"Next",onClick:j(v+1),"data-testid":"nextBtn",paginationButtonIcon:Ot.faAngleRight,isInactive:N,showLabels:T,className:(0,mr.default)(x==null?void 0:x.paginationEdgeButton,x==null?void 0:x.reversed,l,{[x==null?void 0:x.disabled]:f},O)}),y&&Sn.default.createElement("span",{onClick:j(t),className:(0,mr.default)(x==null?void 0:x.paginationAngle,l,k({[x==null?void 0:x.disabled]:N},O))},Sn.default.createElement(ol.FontAwesomeIcon,{className:x==null?void 0:x.paginationAngleIcon,icon:Ot.faAnglesRight})))},hS=re(EM,{ssrStyles:()=>Promise.resolve().then(()=>(nl(),el)),clientStyles:()=>(nl(),we(el)).default});r();r();var Vo=M(require("react")),pl=M(require("classnames"));r();var Wt=M(require("react")),TS=M(require("classnames"));ae();var DM=n=>{var a;let t=(a=n.styles)!=null?a:{};return Wt.default.createElement("span",{"data-testid":n["data-testid"]||"formatAmountComponent",className:n.className},Wt.default.createElement("span",{className:t["int-amount"],"data-testid":"formatAmountInt"},"..."))},MM=(n,t)=>{var N,O,A;let{value:a,showLastNonZeroDecimal:s=!1,showLabel:l=!0}=n,_=n.digits!=null?n.digits:nr,f=n.decimals!=null?n.decimals:to,T=(N=n.styles)!=null?N:{},y=(O=n.globalStyles)!=null?O:{},x=Mt({input:a,decimals:f,digits:_,showLastNonZeroDecimal:s,addCommas:!0}),v=x.split("."),b=v.length===1,I=x!==Wo;if(_>0&&b&&I){let U="";for(let H=1;H<=_;H++)U=U+Wo;v.push(U)}return Wt.default.createElement("span",{"data-testid":n["data-testid"]||"formatAmountComponent",className:n.className},Wt.default.createElement("span",{className:T["int-amount"],"data-testid":"formatAmountInt"},v[0]),v.length>1&&Wt.default.createElement("span",{className:T.decimals,"data-testid":"formatAmountDecimals"},".",v[1]),l&&Wt.default.createElement("span",{className:(0,TS.default)(T.symbol,n.token&&y.textMuted),"data-testid":"formatAmountSymbol"},` ${(A=n.token)!=null?A:t}`))},BM=n=>{let{value:t}=n;return $o(t)?MM(n,n.egldLabel||""):DM(n)},OM=n=>{let t=n.egldLabel||mc(),a=ne(k({},n),{egldLabel:t});return Wt.default.createElement(BM,k({},a))},yS=re(OM,{ssrStyles:()=>Promise.resolve().then(()=>(rl(),tl)),clientStyles:()=>(rl(),we(tl)).default});r();r();var on=M(require("react")),bS=M(require("classnames"));ae();var FM=({text:n,className:t="dapp-trim","data-testid":a="trim-text-component",color:s,styles:l})=>{let[_,f]=(0,on.useState)(0),[T,y]=(0,on.useState)(!1),x=(0,on.useRef)(document==null?void 0:document.createElement("span")),v=(0,on.useRef)(document==null?void 0:document.createElement("span")),b=Qy(_,300),I=()=>{if(x.current&&v.current){let A=v.current.offsetWidth-x.current.offsetWidth;y(A>1)}},N=()=>{f(_+1)};return(0,on.useEffect)(()=>(window==null||window.addEventListener("resize",N),()=>{window==null||window.removeEventListener("resize",N)})),(0,on.useEffect)(()=>{I()},[b]),on.default.createElement("span",{ref:x,className:(0,bS.default)(l==null?void 0:l.trim,s,t,{overflow:T}),"data-testid":a},on.default.createElement("span",{ref:v,className:l==null?void 0:l.hiddenTextRef},n),T?on.default.createElement(on.default.Fragment,null,on.default.createElement("span",{className:l==null?void 0:l.left},on.default.createElement("span",null,String(n).substring(0,Math.floor(n.length/2)))),on.default.createElement("span",{className:l==null?void 0:l.ellipsis},Or),on.default.createElement("span",{className:l==null?void 0:l.right},on.default.createElement("span",null,String(n).substring(Math.ceil(n.length/2))))):on.default.createElement("span",null,n))},wS=re(FM,{ssrStyles:()=>Promise.resolve().then(()=>(il(),al)),clientStyles:()=>(il(),we(al)).default});var GM=({address:n,index:t,balance:a,selectedAddress:s,onSelectAddress:l,className:_="dapp-ledger-address-row",ledgerModalTableSelectedItemClassName:f,disabled:T=!1,styles:y})=>{var x;return Vo.default.createElement("div",{onClick:()=>l({address:n,index:t}),className:(0,pl.default)(y==null?void 0:y.ledgerAddressTableBodyItem,{[f!=null?f:""]:s===n,[(x=y==null?void 0:y.ledgerAddressTableBodyItemSelected)!=null?x:""]:s===n},_)},Vo.default.createElement("div",{className:(0,pl.default)(y==null?void 0:y.ledgerAddressTableBodyItemData,{disabled:T})},Vo.default.createElement("input",{type:"radio",id:`check_${n}`,disabled:T,onChange:()=>l({address:n,index:t}),"data-testid":`check_${n}`,role:"button",checked:s===n,className:y==null?void 0:y.ledgerAddressTableBodyItemDataInput}),Vo.default.createElement("label",{htmlFor:`check_${t}`,role:"button","data-testid":`label_${t}`,className:y==null?void 0:y.ledgerAddressTableBodyItemDataLabel},Vo.default.createElement("div",{className:y==null?void 0:y.ledgerAddressTableBodyItemDataValue},Vo.default.createElement(wS,{text:n})))),Vo.default.createElement("div",{className:y==null?void 0:y.ledgerAddressTableBodyItemData},Vo.default.createElement(yS,{value:a,egldLabel:mc()})),Vo.default.createElement("div",{className:y==null?void 0:y.ledgerAddressTableBodyItemData},t))},CS=re(GM,{ssrStyles:()=>Promise.resolve().then(()=>(cl(),sl)),clientStyles:()=>(cl(),we(sl)).default});r();r();r();var ca=M(require("react")),PS=require("@fortawesome/free-solid-svg-icons"),pa=M(require("classnames"));ae();r();r();var Ft=M(require("react")),AS=require("@fortawesome/react-fontawesome"),_i=M(require("classnames"));var $M=({icon:n,title:t,action:a,iconClass:s,"data-testid":l,description:_,iconBgClass:f,iconSize:T="5x",className:y="dapp-page-state",globalStyles:x,styles:v})=>{let b=(0,Ft.useMemo)(()=>({wrapper:(0,_i.default)(v==null?void 0:v.state,x==null?void 0:x.mAuto,x==null?void 0:x.p4,x==null?void 0:x.textCenter,y),iconContainer:(0,_i.default)(x==null?void 0:x.iconState,x==null?void 0:x.mxAuto,{[f!=null?f:""]:Boolean(f)}),iconClass:(0,_i.default)(s!=null&&s),title:(0,_i.default)(x==null?void 0:x.h4,x==null?void 0:x.my4),description:x==null?void 0:x.mb3}),[x,v,y,f,s]);return Ft.default.createElement("div",{className:b.wrapper,"data-testid":l},n&&Ft.default.createElement("span",{className:b.iconContainer},Ft.default.createElement(AS.FontAwesomeIcon,{icon:n,className:b.iconClass,size:T})),t&&Ft.default.createElement("p",{className:b.title},t),_&&Ft.default.createElement("div",{className:b.description},_),a)},Tc=re($M,{ssrStyles:()=>Promise.resolve().then(()=>(ml(),dl)),clientStyles:()=>(ml(),we(dl)).default});var qM=({customSpinnerComponent:n,ledgerLoadingClassNames:t,customContentComponent:a,globalStyles:s,styles:l})=>{let{ledgerModalSubtitleClassName:_,ledgerModalTitleClassName:f,ledgerLoadingWrapper:T,ledgerLoadingSpinner:y}=t||{};return ca.default.createElement("div",{className:(0,pa.default)(l==null?void 0:l.ledgerLoadingWrapper,T),"data-testid":"ledgerLoading"},ca.default.createElement("div",{className:(0,pa.default)(l==null?void 0:l.ledgerLoadingHeading,f)},"Waiting for device..."),ca.default.createElement("p",{className:(0,pa.default)(l==null?void 0:l.ledgerLoadingDescription,_)},"It may take a few seconds..."),a,ca.default.createElement("div",{className:(0,pa.default)(l==null?void 0:l.ledgerLoadingSpinner,y)},n||ca.default.createElement(Tc,{iconSize:"10x",icon:PS.faCircleNotch,iconClass:(0,pa.default)("fa-spin",s==null?void 0:s.textPrimary)})))},yc=re(qM,{ssrStyles:()=>Promise.resolve().then(()=>(_l(),ll)),clientStyles:()=>(_l(),we(ll)).default});var NS=10,KM=500,jM=({accounts:n,addressTableClassNames:t,className:a="dapp-ledger-address-table",customContentComponent:s,dataTestId:l="addressTableContainer",loading:_,onConfirmSelectedAddress:f,onGoToSpecificPage:T,onGoToNextPage:y,onGoToPrevPage:x,onSelectAddress:v,selectedAddress:b,startIndex:I,disabledIndexes:N=[],globalStyles:O,styles:A})=>{let{ledgerModalTitleClassName:U,ledgerModalSubtitleClassName:H,ledgerModalTableHeadClassName:j,ledgerModalTableItemClassName:Y,ledgerModalButtonClassName:V,ledgerModalTableNavigationButtonClassName:z,ledgerModalTableSelectedItemClassName:Q,ledgerModalTableNavigationButtonDisabledClassName:Ce}=t||{},[Re,De]=(0,mn.useState)([]),qe=()=>{let fe=0;for(;N.includes(fe);)fe++;return fe};(0,mn.useEffect)(()=>{if(n.length>0&&!_&&(!b&&I===0)){let nn=qe(),rn=n[nn];v({address:rn,index:nn})}},[n,b,_,I]);let de=fe=>F(void 0,null,function*(){try{let Ae=yield Ax(fe);return{address:fe,balance:Ae}}catch(Ae){throw console.error("error fetching balance",Ae),Re}});if((0,mn.useEffect)(()=>{let fe=n.map(Ae=>de(Ae));De(n.map(Ae=>({address:Ae,balance:"..."}))),Promise.all(fe).then(Ae=>{De(Ae)})},[n]),_)return mn.default.createElement(yc,null);let Fe=()=>{!b||f()},wn=fe=>{if(fe-1===I+1){y();return}if(fe-1===I-1){x();return}T(fe-1)},Yn=["Address","Balance","#"];return mn.default.createElement("div",{className:(0,da.default)(A==null?void 0:A.ledgerAddressTableWrapper,a),"data-testid":l},mn.default.createElement("div",{className:A==null?void 0:A.ledgerAddressTableTop},mn.default.createElement("div",{className:(0,da.default)(A==null?void 0:A.ledgerAddressTableHeading,U),"data-testid":`${l}Title`},"Access your wallet"),mn.default.createElement("p",{className:(0,da.default)(A==null?void 0:A.ledgerAddressTableDescription,H),"data-testid":`${l}SubTitle`},"Choose the wallet you want to access")),s,mn.default.createElement("div",{className:A==null?void 0:A.ledgerAddressTable},mn.default.createElement("div",{className:(0,da.default)(A==null?void 0:A.ledgerAddressTableHeader,j)},Yn.map(fe=>mn.default.createElement("div",{key:fe,className:A==null?void 0:A.ledgerAddressTableHeaderItem},fe))),mn.default.createElement("div",{className:A==null?void 0:A.ledgerAddressTableBody},Re&&Re.map(({address:fe,balance:Ae},Pe)=>mn.default.createElement(CS,{address:fe,balance:Ae,disabled:N.includes(Pe),key:Pe+I*NS,index:Pe+I*NS,selectedAddress:b,onSelectAddress:v,className:Y,ledgerModalTableSelectedItemClassName:Q})))),mn.default.createElement("div",{className:A==null?void 0:A.ledgerAddressTableBottom},mn.default.createElement(hS,{className:A==null?void 0:A.ledgerAddressTablePagination,currentPage:I+1,totalPages:KM,onPageChange:wn,disabledClassName:Ce,buttonsClassNames:z}),mn.default.createElement("button",{disabled:!b,onClick:Fe,"data-testid":"confirmBtn",className:(0,da.default)(O==null?void 0:O.btn,O==null?void 0:O.btnPrimary,A==null?void 0:A.ledgerAddressTableButton,V)},"Access Wallet")))},ES=re(jM,{ssrStyles:()=>Promise.resolve().then(()=>(gl(),ul)),clientStyles:()=>(gl(),we(ul)).default});r();r();var Xn=M(require("react")),ut=M(require("classnames"));ae();r();r();r();var DS=M(RS()),MS=n=>{if(n<=0||isNaN(n)||!n||(0,DS.isString)(n))return"N/A time";if(n>=86400)return"more than one day";let t=Math.floor(n/3600),a=n%3600,s=Math.floor(a/60),l=a%60,_=[];return t>0&&_.push(`${t}h`),s>0&&_.push(`${s}min`),l>0&&_.push(`${l}sec`),_.join(" ")};var BS=({loginToken:n,version:t})=>{if(!n||!t)return null;let{ledgerWithUsernames:a}=ax(t),s=qo(n);if(s==null)return null;let l="For security, please confirm that your address:",_="and Auth Token:",f="are the one shown on your Ledger device screen now.";if(a){let T=MS(s.ttl),y="For security, please confirm your address:",x="and authorize:";return{data:`${s.origin} for ${T}.`,confirmAddressText:y,authText:x}}return{data:n,confirmAddressText:l,authText:_,areShownText:f}};var YM=({token:n,className:t="dapp-ledger-confirm-address",customContentComponent:a,confirmAddressClassNames:s,styles:l})=>{var O,A;let{ledgerAccount:_}=ai(),{ledgerModalTitleClassName:f,ledgerModalConfirmDescriptionClassName:T,ledgerModalConfirmDataClassName:y,ledgerModalConfirmFooterClassName:x,ledgerModalConfirmContentClassName:v}=s||{},b=J(Rt),I=(O=b==null?void 0:b.loginToken)!=null?O:n,N=BS({loginToken:I,version:_==null?void 0:_.version});return Xn.default.createElement("div",{className:(0,ut.default)(l==null?void 0:l.ledgerConfirmAddress,v,t),"data-testid":"ledgerConfirmAddress"},Xn.default.createElement("h4",{className:(0,ut.default)(l==null?void 0:l.ledgerConfirmAddressHeading,f)},"Confirm Ledger Address"),a,Xn.default.createElement("div",{className:l==null?void 0:l.ledgerConfirmAddressSection},Xn.default.createElement("div",{className:(0,ut.default)(l==null?void 0:l.ledgerConfirmAddressDescription,T)},N==null?void 0:N.confirmAddressText),Xn.default.createElement("div",{className:(0,ut.default)(l==null?void 0:l.ledgerConfirmAddressData,y)},(A=_==null?void 0:_.address)!=null?A:"")),Xn.default.createElement("div",{className:l==null?void 0:l.ledgerConfirmAddressSection},Xn.default.createElement("div",{className:(0,ut.default)(l==null?void 0:l.ledgerConfirmAddressDescription,T)},N==null?void 0:N.authText),Xn.default.createElement("div",{className:(0,ut.default)(l==null?void 0:l.ledgerConfirmAddressData,y)},N==null?void 0:N.data),Xn.default.createElement("div",{className:(0,ut.default)(l==null?void 0:l.ledgerConfirmAddressDescription,T)},N==null?void 0:N.areShownText)),Xn.default.createElement("div",{className:(0,ut.default)(l==null?void 0:l.ledgerConfirmAddressFooter,x)},Xn.default.createElement("div",null,"Select Approve on your device to confirm."),Xn.default.createElement("div",null,"Or, if it does not match, close this page and"," ",Xn.default.createElement("a",{href:"https://help.multiversx.com/en/",target:"_blank",rel:"noreferrer"},"contact support"),".")))},WS=re(YM,{ssrStyles:()=>Promise.resolve().then(()=>(hl(),fl)),clientStyles:()=>(hl(),we(fl)).default});r();r();var ao=M(require("react")),Ko=M(require("classnames"));r();var fn=M(require("react")),ZM=n=>fn.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 290 142.3",style:{enableBackground:"new 0 0 290 142.3"},xmlSpace:"preserve"},n),fn.createElement("style",{type:"text/css"},`
	.st0{filter:url(#Adobe_OpacityMaskFilter);}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_00000132080685600946463390000014083146887067534994_);}
	.st2{mask:url(#SVGID_1_);fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
`),fn.createElement("defs",null,fn.createElement("filter",{id:"Adobe_OpacityMaskFilter",filterUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3},fn.createElement("feColorMatrix",{type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"}))),fn.createElement("mask",{maskUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3,id:"SVGID_1_"},fn.createElement("g",{className:"st0"},fn.createElement("linearGradient",{id:"SVGID_00000042721603501377086220000002945655816276772283_",gradientUnits:"userSpaceOnUse",x1:1,y1:24.85,x2:92.9,y2:24.85},fn.createElement("stop",{offset:0,style:{stopColor:"#000000"}}),fn.createElement("stop",{offset:.1864,style:{stopColor:"#000000"}}),fn.createElement("stop",{offset:.8945,style:{stopColor:"#FFFFFF"}})),fn.createElement("rect",{x:1,y:21.7,style:{fillRule:"evenodd",clipRule:"evenodd",fill:"url(#SVGID_00000042721603501377086220000002945655816276772283_)"},width:91.9,height:6.3}))),fn.createElement("path",{className:"st2",d:"M1,26.6V28h92.7v-1.4H1z M1,21.7v1.4h92.7v-1.4H1z"}),fn.createElement("g",null,fn.createElement("path",{className:"st3",d:"M218.8,21h-38.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4v5.6c0,0.2,0.1,0.3,0.2,0.4   c0.1,0.1,0.2,0.2,0.4,0.2h38.1c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4v-5.6c0-0.1-0.1-0.3-0.2-0.4   C219.1,21.1,219,21,218.8,21z M185.2,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7   l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L185.2,25.4z M189.6,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6   l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L189.6,25.4z M194,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3   l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L194,25.4z M198.4,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8   l0,0l-1-0.3l0.1-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L198.4,25.4z M202.8,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9   l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L202.8,25.4z M207.1,25.4l-0.5,0.4l-0.6-0.9   l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L207.1,25.4z M211.5,25.4   l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L211.5,25.4z    M215.9,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3   l0,0L215.9,25.4z"}),fn.createElement("path",{className:"st3",d:"M283.8,9.2l-0.1-0.1c-0.2-0.2-0.3-0.3-0.5-0.5s-0.3-0.3-0.5-0.5c-0.1-0.1-0.3-0.3-0.4-0.4   c-0.6-0.6-1.2-1.1-1.8-1.6c-3.9-3-8.7-4.7-13.9-4.7h-28.1c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-42.3c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-13c-1.1,0-2.1,0.4-2.8,1.2c-0.7,0.7-1.2,1.8-1.2,2.8v8.8c-0.1,0-0.2,0-0.2,0   h-0.3h-29.1c-1.7,0-3.2,0.7-4.4,1.8c-1.2,1.2-1.8,2.8-1.8,4.4v0.3H92.9v8.4h12.7v0.7c0,1.7,0.7,3.2,1.8,4.4   c1.2,1.2,2.7,1.8,4.4,1.8h29.1h0.3c0.1,0,0.2,0,0.2,0v7.4c0,1.1,0.4,2.1,1.2,2.8s1.8,1.2,2.8,1.2h72.3l-0.4,0.5l-53.4,63.6   c-0.3,0.4-0.6,0.9-0.7,1.4c-0.2,0.5-0.2,1-0.2,1.5s0.2,1,0.4,1.5s0.6,0.9,1,1.2l28.9,24.3c0.4,0.3,0.9,0.6,1.4,0.7   c0.5,0.2,1,0.2,1.5,0.2s1-0.2,1.5-0.4s0.9-0.6,1.2-1l82.5-98.3l2.9-3.5C291.8,30.3,291.3,17.5,283.8,9.2z M105.1,27.9h-11v-6h11   V27.9z M277.7,45.1l-79.8,95c-0.2,0.3-0.5,0.5-0.8,0.7s-0.7,0.3-1,0.3c-0.4,0-0.7,0-1.1-0.1c-0.3-0.1-0.7-0.3-0.9-0.5l-29-24.3   c-0.3-0.2-0.5-0.5-0.7-0.8s-0.3-0.7-0.3-1c0-0.4,0-0.7,0.1-1.1c0.1-0.3,0.3-0.7,0.5-0.9l54-64.4l0.4-0.5l1-1.2l8.1-9.7l0.3-0.3   l0.3-0.3l5.2-6.2l0.3-0.4l0.3-0.4L250,10.6c4.8-5.7,11.8-8.3,18.6-7.6c0.2,0,0.5,0,0.7,0.1c0.3,0,0.6,0.1,0.9,0.1   c0.2,0,0.5,0.1,0.7,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.6,0.2,1.2,0.3,1.8,0.5c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.2,0.9,0.4   c0.2,0.1,0.4,0.2,0.6,0.3c0.6,0.3,1.2,0.7,1.9,1c0.4,0.2,0.8,0.5,1.2,0.8l0,0c0.4,0.3,0.8,0.6,1.1,0.9c0.1,0.1,0.2,0.2,0.3,0.2   c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.3,0.3,0.5,0.4c0.1,0.1,0.2,0.2,0.4,0.4c7.9,7.8,8.6,20.6,1.3,29.3l-4.7,5.6L277.7,45.1z    M234.2,27.8l-6.8,8.1h-60.6c-0.8,0-1.5-0.7-1.5-1.5v-20c0-0.8,0.7-1.5,1.5-1.5h65.9c0.8,0,1.5,0.7,1.5,1.5L234.2,27.8L234.2,27.8z    M141.2,34.9h-0.3h-29.1c-1.3,0-2.6-0.5-3.5-1.5c-0.9-0.9-1.5-2.2-1.5-3.5v-9.5c0-1.3,0.5-2.6,1.5-3.5c0.9-0.9,2.2-1.5,3.5-1.5   h29.1h0.3c0.1,0,0.2,0,0.2,0.1v19.4C141.3,34.8,141.3,34.9,141.2,34.9z M145.4,46.2c-0.7,0-1.4-0.3-2-0.8c-0.5-0.5-0.8-1.2-0.8-2   v-8.2v-3.4V18.1V15V5.4c0-0.7,0.3-1.4,0.8-1.9s1.2-0.8,2-0.8h12.9h19.2h42h19.2h21.4c-4.1,1.2-7.8,3.6-10.8,7.1l-14.5,17.3V14.4   c0-1.2-0.9-2.1-2.1-2.1h-65.9c-1.2,0-2.1,0.9-2.1,2.1v20c0,1.2,0.9,2.1,2.1,2.1h60.1l-8.2,9.7C218.7,46.2,145.4,46.2,145.4,46.2z"}),fn.createElement("path",{className:"st3",d:"M265.5,12.2c-6.8,0-12.2,5.4-12.2,12.2c0,6.7,5.5,12.2,12.2,12.2c6.8,0,12.2-5.4,12.2-12.2   C277.7,17.7,272.2,12.2,265.5,12.2z M265.5,35.9c-6.4,0-11.6-5.2-11.6-11.5s5.2-11.5,11.6-11.5s11.6,5.2,11.6,11.5   S271.9,35.9,265.5,35.9z"}))),FS=ZM;ae();var QM=({onClick:n,error:t,disabled:a,connectPageContent:s,customContentComponent:l,className:_="dapp-ledger-connect-button",ledgerConnectClassNames:f,globalStyles:T,styles:y})=>{let{ledgerModalTitleClassName:x,ledgerModalSubtitleClassName:v,ledgerModalErrorClassName:b,ledgerModalIconClassName:I,ledgerModalButtonClassName:N,ledgerModalFooterLinkClassName:O,ledgerModalFooterClassName:A,ledgerModalContentClassName:U}=f||{};return ao.default.createElement("div",{className:(0,Ko.default)(y==null?void 0:y.loginConnectContainer,_)},ao.default.createElement("div",{className:(0,Ko.default)(y==null?void 0:y.loginConnectContainerContent,U)},s||ao.default.createElement(ao.default.Fragment,null,ao.default.createElement("div",{className:(0,Ko.default)(y==null?void 0:y.loginConnectContainerHeading,x)},"Connect Ledger"),ao.default.createElement("p",{className:(0,Ko.default)(y==null?void 0:y.loginConnectContainerDescription,v)},"Unlock your device & open the MultiversX App"),t&&ao.default.createElement("p",{className:(0,Ko.default)(y==null?void 0:y.loginConnectContainerError,b)},t),l,ao.default.createElement("div",{className:(0,Ko.default)(y==null?void 0:y.loginConnectContainerIcon,I)},ao.default.createElement(FS,null))),ao.default.createElement("div",{className:(0,Ko.default)(y==null?void 0:y.loginConnectContainerFooter,A)},ao.default.createElement("button",{onClick:n,disabled:a,"data-testid":"ledgerConnectBtn",className:(0,Ko.default)(T==null?void 0:T.btn,T==null?void 0:T.btnPrimary,y==null?void 0:y.loginConnectContainerButton,N)},"Connect Ledger"),ao.default.createElement("a",{href:"https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux",target:"_blank",rel:"noopener noreferrer",className:(0,Ko.default)(y==null?void 0:y.loginConnectContainerLink,O)},"Having connection issues?"))))},GS=re(QM,{ssrStyles:()=>Promise.resolve().then(()=>(Tl(),xl)),clientStyles:()=>(Tl(),we(xl)).default});var HS=({isLoading:n,customSpinnerComponent:t,customContentComponent:a,ledgerLoadingClassNames:s,ledgerAccount:l,error:_,confirmAddressClassNames:f,token:T,showAddressList:y,accounts:x,addressTableClassNames:v,onConfirmSelectedAddress:b,onGoToSpecificPage:I,onGoToNextPage:N,onGoToPrevPage:O,onSelectAddress:A,selectedAddress:U,startIndex:H,disabledConnectButton:j,ledgerConnectClassNames:Y,onStartLogin:V})=>n?gi.default.createElement(yc,{customSpinnerComponent:t,customContentComponent:a,ledgerLoadingClassNames:s}):l!=null&&!_?gi.default.createElement(WS,{confirmAddressClassNames:f,customContentComponent:a,token:T}):y&&!_?gi.default.createElement(ES,{accounts:x,addressTableClassNames:v,customContentComponent:a,loading:n,onConfirmSelectedAddress:b,onGoToSpecificPage:I,onGoToNextPage:N,onGoToPrevPage:O,onSelectAddress:A,selectedAddress:U==null?void 0:U.address,startIndex:H}):gi.default.createElement(GS,{customContentComponent:a,disabled:j,error:_,ledgerConnectClassNames:Y,onClick:V});r();r();var la=M(require("react")),bl=M(require("classnames"));var n5=({error:n,ledgerAccount:t,ledgerProgressBarClassNames:a,showAddressList:s,showProgressBar:l,styles:_})=>{let f=[{percentage:33,conditions:!s&&!t},{conditions:s&&!n&&!t,percentage:66},{conditions:t!=null&&!n,percentage:100}],T=(0,la.useMemo)(()=>f.find(b=>b.conditions),[]),y=T?T.percentage:33;if(!l)return null;let{ledgerProgressBarTrackClassName:x,ledgerProgressBarThumbClassName:v}=a||{};return la.default.createElement("div",{className:_==null?void 0:_.ledgerProgressBar},la.default.createElement("div",{className:(0,bl.default)(_==null?void 0:_.ledgerProgressBarTrack,x)}),la.default.createElement("div",{className:(0,bl.default)(_==null?void 0:_.ledgerProgressBarThumb,v),style:{width:`${y}%`}}))},zS=re(n5,{ssrStyles:()=>Promise.resolve().then(()=>(Sl(),yl)),clientStyles:()=>(Sl(),we(yl)).default});r();r();var jS=M(require("react"));r();r();var bn=M(require("react")),VS=require("@fortawesome/free-solid-svg-icons"),KS=require("@fortawesome/react-fontawesome"),Cl=M(require("classnames"));var t5=n=>{let{className:t,url:a,icon:s,authorizationInfo:l,styles:_}=n,f=a.replace("https://","").replace(/\/$/,""),T=l!=null&&l.url?l.url.replace("https://","").replace(/\/$/,""):"";return bn.default.createElement(bn.default.Fragment,null,bn.default.createElement("p",{className:(0,Cl.default)(_==null?void 0:_.scamPhishingAlert,t)},s||bn.default.createElement(KS.FontAwesomeIcon,{className:_==null?void 0:_.scamPhishingAlertIcon,icon:VS.faLock}),bn.default.createElement("span",{className:_==null?void 0:_.scamPhishingAlertText},bn.default.createElement("span",null,"Scam/Phishing verification:")," ",bn.default.createElement("span",{className:_==null?void 0:_.scamPhishingAlertPrefix},bn.default.createElement("strong",null,"https://"),f))),l&&l.url&&bn.default.createElement("p",{className:(0,Cl.default)(_==null?void 0:_.scamPhishingAlert,_==null?void 0:_.scamPhishingAlertAuthorization,l.className)},bn.default.createElement("span",{className:_==null?void 0:_.scamPhishingAlertText},"Please confirm that you are indeed connecting to"),bn.default.createElement("span",{className:_==null?void 0:_.scamPhishingAlertText},bn.default.createElement("strong",null,"https://"),bn.default.createElement("span",null,T," for"),bn.default.createElement("strong",{className:_==null?void 0:_.scamPhishingAlertAuthorizationDuration},l.duration)),bn.default.createElement("span",{className:_==null?void 0:_.scamPhishingAlertText},"and that you trust this site. You might be sharing sensitive data."),bn.default.createElement("a",{href:"https://multiversx.com/faq"},"Learn more")))},Sc=re(t5,{ssrStyles:()=>Promise.resolve().then(()=>(vl(),wl)),clientStyles:()=>(vl(),we(wl)).default});gn();var XS=({showScamPhishingAlert:n,token:t,ledgerScamPhishingAlertClassName:a})=>{if(!n)return null;let s=_c(t,a);return jS.default.createElement(Sc,{authorizationInfo:s,className:a,url:Te().origin})};var Ll=({callbackRoute:n,customSpinnerComponent:t,customContentComponent:a,innerLedgerComponentsClasses:s,nativeAuth:l,onLoginRedirect:_,showProgressBar:f=!0,showScamPhishingAlert:T=!0,token:y})=>{let{ledgerAccount:x}=ai(),[v,{error:b,isLoading:I},{accounts:N,onConfirmSelectedAddress:O,onGoToSpecificPage:A,onGoToNextPage:U,onGoToPrevPage:H,onSelectAddress:j,selectedAddress:Y,showAddressList:V,startIndex:z}]=Rm({callbackRoute:n,token:y,onLoginRedirect:_,nativeAuth:l}),Q=Vn(y),{addressTableClassNames:Ce,confirmAddressClassNames:Re,ledgerConnectClassNames:De,ledgerLoadingClassNames:qe,ledgerProgressBarClassNames:de,ledgerScamPhishingAlertClassName:Fe}=s||{};return _a.default.createElement(_a.default.Fragment,null,_a.default.createElement(XS,{ledgerScamPhishingAlertClassName:Fe,showScamPhishingAlert:T,token:y}),_a.default.createElement(zS,{error:b,ledgerAccount:x,ledgerProgressBarClassNames:de,showAddressList:V,showProgressBar:f}),_a.default.createElement(HS,k({},{accounts:N,addressTableClassNames:Ce,confirmAddressClassNames:Re,customContentComponent:a,customSpinnerComponent:t,disabledConnectButton:Q,error:b,isLoading:I,ledgerAccount:x,ledgerConnectClassNames:De,ledgerLoadingClassNames:qe,onConfirmSelectedAddress:O,onGoToSpecificPage:A,onGoToNextPage:U,onGoToPrevPage:H,onSelectAddress:j,onStartLogin:v,selectedAddress:Y,showAddressList:V,startIndex:z,token:y})))};var a5=n=>{let{onClose:t,className:a,showLoginContent:s,wrapContentInsideModal:l,styles:_}=n;return s===!1?null:l?bc.default.createElement(li,{closeOnEscape:n.closeOnEscape,modalConfig:{headerText:"Login with ledger",showHeader:!0,modalContentClassName:_==null?void 0:_.ledgerModalDialogContent,modalHeaderClassName:_==null?void 0:_.ledgerModalHeader,modalHeaderTextClassName:_==null?void 0:_.ledgerModalHeaderText,modalCloseButtonClassName:_==null?void 0:_.ledgerModalCloseButton,modalBodyClassName:_==null?void 0:_.ledgerModalBody,modalDialogClassName:(0,ZS.default)(_==null?void 0:_.ledgerLoginContainer,a)},onClose:t,visible:n.showLoginModal},bc.default.createElement(Ll,k({},n))):bc.default.createElement(Ll,k({},n))},JS=re(a5,{ssrStyles:()=>Promise.resolve().then(()=>(Il(),Al)),clientStyles:()=>(Il(),we(Al)).default});var QS=({buttonClassName:n="dapp-ledger-login-button",callbackRoute:t,children:a,className:s="dapp-ledger-login",customSpinnerComponent:l,"data-testid":_="ledgerLoginButton",disabled:f,hideButtonWhenModalOpens:T=!1,innerLedgerComponentsClasses:y,loginButtonText:x="Ledger",modalClassName:v,nativeAuth:b,onLoginRedirect:I,onContentHide:N,onContentShow:O,onModalCloses:A,onModalOpens:U,showProgressBar:H=!0,showScamPhishingAlert:j=!0,token:Y,wrapContentInsideModal:V=!0})=>{let{disabledConnectButton:z,handleCloseModal:Q,handleOpenModal:Ce,shouldRenderButton:Re,showContent:De,showModal:qe}=si({hideButtonWhenModalOpens:T,onContentHide:N,onContentShow:O,onModalCloses:A,onModalOpens:U,token:Y,wrapContentInsideModal:V});return fi.default.createElement(fi.default.Fragment,null,Re&&fi.default.createElement(jn,{btnClassName:n,className:s,"data-testid":_,disabled:f||z,onLogin:Ce,text:x},a),fi.default.createElement(JS,{callbackRoute:t,className:v,customSpinnerComponent:l,innerLedgerComponentsClasses:y,nativeAuth:b,onClose:Q,onLoginRedirect:I,showLoginContent:De,showLoginModal:qe,showProgressBar:H,showScamPhishingAlert:j,token:Y,wrapContentInsideModal:V}))};r();r();var wc=M(require("react"));ae();r();r();Br();var eb=()=>{var n,t;return Boolean(((n=Hn.safeWindow)==null?void 0:n.isOpera)&&((t=Hn.safeWindow)==null?void 0:t.elrond))};var i5=eb(),nb=({token:n,className:t="dapp-opera-login",children:a,callbackRoute:s,buttonClassName:l,nativeAuth:_,loginButtonText:f="Opera Crypto Wallet",onLoginRedirect:T,disabled:y,"data-testid":x="operaLoginButton"})=>{let v=Vn(n),[b]=wm({callbackRoute:s,token:n,onLoginRedirect:T,nativeAuth:_});return i5?wc.default.createElement(jn,{onLogin:()=>{b()},className:t,btnClassName:l,text:f,disabled:y||v,"data-testid":x},a):wc.default.createElement(wc.default.Fragment,null)};r();r();var ob=M(require("react"));var s5=({token:n,className:t="dapp-passkey-login",children:a,callbackRoute:s,buttonClassName:l="dapp-default-login-button",nativeAuth:_,loginButtonText:f="Passkey",onLoginRedirect:T,disabled:y})=>{let[x]=Om({callbackRoute:s,token:n,onLoginRedirect:T,nativeAuth:_}),v=Vn(n);return ob.default.createElement(jn,{onLogin:()=>{x()},className:t,btnClassName:l,text:f,disabled:y||v},a)},tb=re(s5,{ssrStyles:()=>Promise.resolve().then(()=>(mi(),di)),clientStyles:()=>(mi(),we(di)).default});r();r();var hi=M(require("react"));r();r();var Lc=M(require("react"));r();r();var tn=M(require("react")),pb=require("@fortawesome/free-solid-svg-icons"),ht=M(require("classnames")),db=M(require("qrcode"));r();var lr=M(require("react")),c5=n=>lr.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 31.114 44.981",width:16,height:16},n),lr.createElement("g",{transform:"translate(-47.168 -21.519)"},lr.createElement("g",{transform:"translate(-247.872 -130.693)"},lr.createElement("path",{d:"M355.676,152.213l-3.832,17.8h-9.661Z",transform:"translate(-40.089 1)",fillRule:"evenodd",fill:"#fff"}),lr.createElement("path",{d:"M326.45,271.184l-7.053,9.379H295.04l7.054-9.379Z",transform:"translate(0 -101.17)",fillRule:"evenodd",fill:"#fff"}),lr.createElement("path",{d:"M381.139,333.864l-13.493,17.8,3.832-17.8Z",transform:"translate(-61.742 -155.472)",fillRule:"evenodd",fill:"#fff"})))),rb=c5;ae();dn();r();r();var en=M(require("react")),Cc=require("@fortawesome/free-solid-svg-icons"),Pl=require("@fortawesome/react-fontawesome"),ft=M(require("classnames"));r();var gt=M(require("react"));r();var vc=M(require("react")),p5=n=>vc.createElement("svg",k({width:235,height:235,viewBox:"0 0 235 235",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),vc.createElement("rect",{width:235,height:235,rx:72,fill:"#010101"}),vc.createElement("path",{d:"M126.493 117.923L200.962 78.0313L188.455 54L120.231 81.5772C118.479 82.2909 116.521 82.2909 114.769 81.5772L46.5451 54L34 78.1084L108.468 118L34 157.892L46.5451 182L114.769 154.211C116.521 153.497 118.479 153.497 120.231 154.211L188.455 181.865L201 157.757L126.493 117.923Z",fill:"#23F7DD"})),ab=p5;var ib=a=>{var s=a,{src:n}=s,t=Eo(s,["src"]);var f;let[l,_]=(0,gt.useState)(!1);return(0,gt.useEffect)(()=>{_(!1)},[n]),gt.default.createElement(gt.default.Fragment,null,l?gt.default.createElement(ab,{className:(f=t==null?void 0:t.className)!=null?f:""}):gt.default.createElement("img",k({onError:()=>{_(!0)},src:n},t)))};var m5=({connectExisting:n,removeExistingPairing:t,activePairings:a,className:s="dapp-wallet-connect-pairing-list",pairingListClasses:l,styles:_})=>{let[f,T]=(0,en.useState)(""),{leadClassName:y,wrapperClassName:x,buttonClassName:v,iconClassName:b,loaderClassName:I,detailsClassName:N,removeClassName:O}=l||{};return(0,en.useEffect)(()=>{T("")},[a]),en.default.createElement("div",{className:(0,ft.default)(_==null?void 0:_.xPortalPairings,s)},en.default.createElement("p",{className:(0,ft.default)(_==null?void 0:_.xPortalPairingsLead,y)},"or choose an existing pairing:"),en.default.createElement("div",{className:(0,ft.default)(_==null?void 0:_.xPortalPairingsList,x)},a.map(A=>{var U,H;return en.default.createElement("button",{type:"button",className:(0,ft.default)(_==null?void 0:_.xPortalPairingButton,v),key:A.topic,onClick:()=>{n(A),T(A.topic)}},A.peerMetadata&&en.default.createElement(en.default.Fragment,null,f===A.topic?en.default.createElement(Pl.FontAwesomeIcon,{icon:Cc.faCircleNotch,className:(0,ft.default)("fa-spin","slow-spin",_==null?void 0:_.xPortalPairingLoader,I)}):en.default.createElement(en.default.Fragment,null,((H=(U=A.peerMetadata)==null?void 0:U.icons)==null?void 0:H[0])&&en.default.createElement(ib,{src:A.peerMetadata.icons[0],alt:A.peerMetadata.name,className:(0,ft.default)(_==null?void 0:_.xPortalPairingImage,b)})),en.default.createElement("div",{className:(0,ft.default)(_==null?void 0:_.xPortalPairingDetails,N)},en.default.createElement("strong",{className:_==null?void 0:_.xPortalPairingDetail},f===A.topic?`Confirm on ${A.peerMetadata.name}`:A.peerMetadata.name),en.default.createElement("span",{className:_==null?void 0:_.xPortalPairingDetail},A.peerMetadata.description),en.default.createElement("span",{className:_==null?void 0:_.xPortalPairingDetail},A.peerMetadata.url)),en.default.createElement("div",{className:(0,ft.default)(_==null?void 0:_.xPortalPairingRemove,O),onClick:j=>{j.stopPropagation(),t(A.topic)}},en.default.createElement(Pl.FontAwesomeIcon,{icon:Cc.faTimes}))))})))},cb=re(m5,{ssrStyles:()=>Promise.resolve().then(()=>(ur(),_r)),clientStyles:()=>(ur(),we(_r)).default});var l5=({callbackRoute:n,className:t="dapp-wallet-connect-login-modal",customSpinnerComponent:a,innerWalletConnectComponentsClasses:s,lead:l="Scan the QR code using the xPortal App",loginButtonText:_="xPortal App",logoutRoute:f,nativeAuth:T,onLoginRedirect:y,showScamPhishingAlert:x=!0,title:v="Login with the xPortal App",token:b,globalStyles:I,styles:N,customRequestMethods:O=[]})=>{var Ao;let[A,{error:U,isLoading:H},{connectExisting:j,removeExistingPairing:Y,uriDeepLink:V,walletConnectUri:z,wcPairings:Q}]=Dm({callbackRoute:n,token:b,nativeAuth:T,onLoginRedirect:y,logoutRoute:f,customRequestMethods:O}),[Ce,Re]=(0,tn.useState)(""),{containerContentClassName:De,containerScamPhishingAlertClassName:qe,containerTitleClassName:de,containerSubtitleClassName:Fe,containerErrorClassName:wn,containerQrCodeClassName:Yn,containerLoaderClassName:fe,containerButtonClassName:Ae,walletConnectPairingListClassNames:Pe}=s||{},nn=t0(),rn=(Ao=Q==null?void 0:Q.filter(an=>{let Io=Q.some(sn=>{var he,ye,se,Se;return((he=an.peerMetadata)==null?void 0:he.name)===((ye=sn==null?void 0:sn.peerMetadata)==null?void 0:ye.name)&&((se=an.peerMetadata)==null?void 0:se.url)===((Se=sn==null?void 0:sn.peerMetadata)==null?void 0:Se.url)&&an.expiry<sn.expiry});return Boolean(an.active)&&an.peerMetadata&&!Io}))!=null?Ao:[],Ut=()=>F(void 0,null,function*(){if(!z)return;let an=yield db.default.toString(z,{type:"svg"});an&&Re(an)});(0,tn.useEffect)(()=>{Ut()},[z]),(0,tn.useEffect)(()=>{A()},[]);let Gt=x?_c(b,qe):void 0;return tn.default.createElement(tn.default.Fragment,null,x&&tn.default.createElement(Sc,{url:Te().origin,authorizationInfo:Gt,className:qe}),tn.default.createElement("div",{className:(0,ht.default)(N==null?void 0:N.xPortalContent,De)},tn.default.createElement("div",{className:(0,ht.default)(N==null?void 0:N.xPortalContainerHeading,de)},v),tn.default.createElement("div",{className:(0,ht.default)(N==null?void 0:N.xPortalContainerSubheading,Fe)},l),tn.default.createElement("div",null,U&&tn.default.createElement("p",{className:(0,ht.default)(N==null?void 0:N.xPortalContainerError,wn)},U)),H||!Ce?tn.default.createElement("div",{className:(0,ht.default)(N==null?void 0:N.xPortalLoader,fe)},a||tn.default.createElement(Tc,{iconSize:"10x",icon:pb.faCircleNotch,iconClass:(0,ht.default)("fa-spin",I==null?void 0:I.textPrimary)})):tn.default.createElement("div",{className:(0,ht.default)(N==null?void 0:N.xPortalQrCode,Yn),dangerouslySetInnerHTML:{__html:Ce}}),nn&&tn.default.createElement("a",{id:"accessWalletBtn","data-testid":"accessWalletBtn",href:V,rel:"noopener noreferrer nofollow",target:"_blank",className:(0,ht.default)(I==null?void 0:I.btn,I==null?void 0:I.btnPrimary,N==null?void 0:N.xPortalContainerButton,Ae)},tn.default.createElement(rb,{className:N==null?void 0:N.xPortalContainerButtonIcon}),_),rn.length>0&&tn.default.createElement(cb,{activePairings:rn,connectExisting:j,removeExistingPairing:Y,className:t,pairingListClasses:Pe})))},kl=re(l5,{ssrStyles:()=>Promise.resolve().then(()=>(ur(),_r)),clientStyles:()=>(ur(),we(_r)).default});var _5=n=>{let{className:t,onClose:a,showLoginContent:s,showLoginModal:l,wrapContentInsideModal:_,styles:f}=n,T=()=>{a==null||a()};return s===!1?null:_?Lc.default.createElement(li,{className:t,modalConfig:{headerText:"Login using the xPortal App",showHeader:!0,modalContentClassName:f==null?void 0:f.xPortalModalDialogContent,modalHeaderClassName:f==null?void 0:f.xPortalModalHeader,modalHeaderTextClassName:f==null?void 0:f.xPortalModalHeaderText,modalCloseButtonClassName:f==null?void 0:f.xPortalModalCloseButton,modalBodyClassName:f==null?void 0:f.xPortalModalBody,modalDialogClassName:f==null?void 0:f.xPortalLoginContainer},onClose:T,visible:l},Lc.default.createElement(kl,k({},n))):Lc.default.createElement(kl,k({},n))},mb=re(_5,{ssrStyles:()=>Promise.resolve().then(()=>(ur(),_r)),clientStyles:()=>(ur(),we(_r)).default});r();var lb=({buttonClassName:n="dapp-wallet-connect-login-button",callbackRoute:t,children:a,className:s="dapp-wallet-connect-login",customSpinnerComponent:l,"data-testid":_,disabled:f,hideButtonWhenModalOpens:T=!1,innerWalletConnectComponentsClasses:y,isWalletConnectV2:x=!0,lead:v="Scan the QR code using the xPortal App",loginButtonText:b="xPortal App",logoutRoute:I,modalClassName:N,nativeAuth:O,onLoginRedirect:A,onContentHide:U,onContentShow:H,onModalCloses:j,onModalOpens:Y,showScamPhishingAlert:V,title:z="Login with the xPortal App",token:Q,wrapContentInsideModal:Ce=!0,customRequestMethods:Re=[]})=>{let{disabledConnectButton:De,handleCloseModal:qe,handleOpenModal:de,shouldRenderButton:Fe,showContent:wn,showModal:Yn}=si({hideButtonWhenModalOpens:T,onContentHide:U,onContentShow:H,onModalCloses:j,onModalOpens:Y,token:Q,wrapContentInsideModal:Ce});return hi.default.createElement(hi.default.Fragment,null,Fe&&hi.default.createElement(jn,{btnClassName:n,className:s,"data-testid":_,disabled:f||De,onLogin:de,text:b},a),hi.default.createElement(mb,{callbackRoute:t,className:N,customSpinnerComponent:l,innerWalletConnectComponentsClasses:y,isWalletConnectV2:x,lead:v,loginButtonText:b,logoutRoute:I,nativeAuth:O,onClose:qe,onLoginRedirect:A,showLoginContent:wn,showLoginModal:Yn,showScamPhishingAlert:V,title:z,token:Q,wrapContentInsideModal:Ce,customRequestMethods:Re}))};r();r();r();var _b=M(require("react"));var ub=({children:n,token:t,className:a="dapp-web-wallet-login",callbackRoute:s,buttonClassName:l,nativeAuth:_,"data-testid":f,loginButtonText:T="MultiversX Web Wallet",disabled:y,customWalletAddress:x})=>{let[v]=lc({callbackRoute:s,nativeAuth:_,token:t,customWalletAddress:x}),b=Vn(t);return _b.default.createElement(jn,{onLogin:()=>{v()},className:a,btnClassName:l,text:T,"data-testid":f,disabled:y||b},n)};gn();var g5=({loginRoute:n,title:t="Login",className:a="dapp-unlock-page",LedgerLoginButtonText:s="Ledger",description:l="Pick a login method",WalletConnectLoginButtonText:_="xPortal App",ExtensionLoginButtonText:f="Extension",PasskeyLoginButtonText:T="Passkey",OperaWalletLoginButtonText:y="Opera Crypto Wallet",IframeLoginButtonText:x="Embeded web wallet",WebWalletLoginButtonText:v="Web wallet",globalStyles:b,styles:I})=>{let N={wrapper:(0,xi.default)(I==null?void 0:I.home,b==null?void 0:b.dFlex,b==null?void 0:b.flexFill,b==null?void 0:b.alignItemsCenter,a),title:b==null?void 0:b.mb4,description:b==null?void 0:b.mb4,cardContainer:b==null?void 0:b.mAuto,card:(0,xi.default)(b==null?void 0:b.card,b==null?void 0:b.my4,b==null?void 0:b.textCenter),cardBody:(0,xi.default)(b==null?void 0:b.cardBody,b==null?void 0:b.py4,b==null?void 0:b.px2,b==null?void 0:b.pxSm2,b==null?void 0:b.mxLg4)},{isLoggedIn:O}=cc();return(0,Pn.useEffect)(()=>{O&&window&&As(n)},[O]),Pn.default.createElement("div",{className:N.wrapper},Pn.default.createElement("div",{className:N.cardContainer},Pn.default.createElement("div",{className:N.card},Pn.default.createElement("div",{className:N.cardBody},Pn.default.createElement("h4",{className:(0,xi.default)(b==null?void 0:b.h4,b==null?void 0:b.title)},t),Pn.default.createElement("p",{className:N.description},l),Pn.default.createElement(P0,{callbackRoute:n,loginButtonText:f}),Pn.default.createElement(tb,{callbackRoute:n,loginButtonText:T}),Pn.default.createElement(R0,{callbackRoute:n,loginButtonText:x}),Pn.default.createElement(nb,{callbackRoute:n,loginButtonText:y}),Pn.default.createElement(ub,{callbackRoute:n,loginButtonText:v}),Pn.default.createElement(QS,{loginButtonText:s,callbackRoute:n}),Pn.default.createElement(lb,{callbackRoute:n,loginButtonText:_})))))},f5=re(g5,{ssrStyles:()=>Promise.resolve().then(()=>(El(),Nl)),clientStyles:()=>(El(),we(Nl)).default});0&&(module.exports={UnlockPage});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
//# sourceMappingURL=index.js.map
