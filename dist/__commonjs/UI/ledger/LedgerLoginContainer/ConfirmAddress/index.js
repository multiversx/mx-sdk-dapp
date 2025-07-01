"use strict";var Nv=Object.create;var cr=Object.defineProperty,Rv=Object.defineProperties,Dv=Object.getOwnPropertyDescriptor,Ov=Object.getOwnPropertyDescriptors,Mv=Object.getOwnPropertyNames,Li=Object.getOwnPropertySymbols,Fv=Object.getPrototypeOf,Zs=Object.prototype.hasOwnProperty,od=Object.prototype.propertyIsEnumerable;var td=(t,o,a)=>o in t?cr(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,C=(t,o)=>{for(var a in o||(o={}))Zs.call(o,a)&&td(t,a,o[a]);if(Li)for(var a of Li(o))od.call(o,a)&&td(t,a,o[a]);return t},j=(t,o)=>Rv(t,Ov(o));var Ot=(t,o)=>{var a={};for(var l in t)Zs.call(t,l)&&o.indexOf(l)<0&&(a[l]=t[l]);if(t!=null&&Li)for(var l of Li(t))o.indexOf(l)<0&&od.call(t,l)&&(a[l]=t[l]);return a};var O=(t,o)=>()=>(t&&(o=t(t=0)),o);var F=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports),Pn=(t,o)=>{for(var a in o)cr(t,a,{get:o[a],enumerable:!0})},rd=(t,o,a,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let u of Mv(o))!Zs.call(t,u)&&u!==a&&cr(t,u,{get:()=>o[u],enumerable:!(l=Dv(o,u))||l.enumerable});return t};var B=(t,o,a)=>(a=t!=null?Nv(Fv(t)):{},rd(o||!t||!t.__esModule?cr(a,"default",{value:t,enumerable:!0}):a,t)),vn=t=>rd(cr({},"__esModule",{value:!0}),t);var R=(t,o,a)=>new Promise((l,u)=>{var T=I=>{try{E(a.next(I))}catch(N){u(N)}},y=I=>{try{E(a.throw(I))}catch(N){u(N)}},E=I=>I.done?l(I.value):Promise.resolve(I.value).then(T,y);E((a=a.apply(t,o)).next())});var sd=F(ki=>{"use strict";i();ki.byteLength=Uv;ki.toByteArray=Gv;ki.fromByteArray=Vv;var Nn=[],fn=[],Bv=typeof Uint8Array!="undefined"?Uint8Array:Array,Js="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Mt=0,id=Js.length;Mt<id;++Mt)Nn[Mt]=Js[Mt],fn[Js.charCodeAt(Mt)]=Mt;var Mt,id;fn["-".charCodeAt(0)]=62;fn["_".charCodeAt(0)]=63;function ad(t){var o=t.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=t.indexOf("=");a===-1&&(a=o);var l=a===o?0:4-a%4;return[a,l]}function Uv(t){var o=ad(t),a=o[0],l=o[1];return(a+l)*3/4-l}function Wv(t,o,a){return(o+a)*3/4-a}function Gv(t){var o,a=ad(t),l=a[0],u=a[1],T=new Bv(Wv(t,l,u)),y=0,E=u>0?l-4:l,I;for(I=0;I<E;I+=4)o=fn[t.charCodeAt(I)]<<18|fn[t.charCodeAt(I+1)]<<12|fn[t.charCodeAt(I+2)]<<6|fn[t.charCodeAt(I+3)],T[y++]=o>>16&255,T[y++]=o>>8&255,T[y++]=o&255;return u===2&&(o=fn[t.charCodeAt(I)]<<2|fn[t.charCodeAt(I+1)]>>4,T[y++]=o&255),u===1&&(o=fn[t.charCodeAt(I)]<<10|fn[t.charCodeAt(I+1)]<<4|fn[t.charCodeAt(I+2)]>>2,T[y++]=o>>8&255,T[y++]=o&255),T}function Hv(t){return Nn[t>>18&63]+Nn[t>>12&63]+Nn[t>>6&63]+Nn[t&63]}function $v(t,o,a){for(var l,u=[],T=o;T<a;T+=3)l=(t[T]<<16&16711680)+(t[T+1]<<8&65280)+(t[T+2]&255),u.push(Hv(l));return u.join("")}function Vv(t){for(var o,a=t.length,l=a%3,u=[],T=16383,y=0,E=a-l;y<E;y+=T)u.push($v(t,y,y+T>E?E:y+T));return l===1?(o=t[a-1],u.push(Nn[o>>2]+Nn[o<<4&63]+"==")):l===2&&(o=(t[a-2]<<8)+t[a-1],u.push(Nn[o>>10]+Nn[o>>4&63]+Nn[o<<2&63]+"=")),u.join("")}});var cd=F(Qs=>{i();Qs.read=function(t,o,a,l,u){var T,y,E=u*8-l-1,I=(1<<E)-1,N=I>>1,G=-7,M=a?u-1:0,ae=a?-1:1,ee=t[o+M];for(M+=ae,T=ee&(1<<-G)-1,ee>>=-G,G+=E;G>0;T=T*256+t[o+M],M+=ae,G-=8);for(y=T&(1<<-G)-1,T>>=-G,G+=l;G>0;y=y*256+t[o+M],M+=ae,G-=8);if(T===0)T=1-N;else{if(T===I)return y?NaN:(ee?-1:1)*(1/0);y=y+Math.pow(2,l),T=T-N}return(ee?-1:1)*y*Math.pow(2,T-l)};Qs.write=function(t,o,a,l,u,T){var y,E,I,N=T*8-u-1,G=(1<<N)-1,M=G>>1,ae=u===23?Math.pow(2,-24)-Math.pow(2,-77):0,ee=l?0:T-1,ce=l?1:-1,Ce=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(E=isNaN(o)?1:0,y=G):(y=Math.floor(Math.log(o)/Math.LN2),o*(I=Math.pow(2,-y))<1&&(y--,I*=2),y+M>=1?o+=ae/I:o+=ae*Math.pow(2,1-M),o*I>=2&&(y++,I/=2),y+M>=G?(E=0,y=G):y+M>=1?(E=(o*I-1)*Math.pow(2,u),y=y+M):(E=o*Math.pow(2,M-1)*Math.pow(2,u),y=0));u>=8;t[a+ee]=E&255,ee+=ce,E/=256,u-=8);for(y=y<<u|E,N+=u;N>0;t[a+ee]=y&255,ee+=ce,y/=256,N-=8);t[a+ee-ce]|=Ce*128}});var Sd=F(lo=>{"use strict";i();var ec=sd(),mo=cd(),pd=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;lo.Buffer=v;lo.SlowBuffer=Yv;lo.INSPECT_MAX_BYTES=50;var Ei=2147483647;lo.kMaxLength=Ei;v.TYPED_ARRAY_SUPPORT=qv();!v.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function qv(){try{var t=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(t,o),t.foo()===42}catch(a){return!1}}Object.defineProperty(v.prototype,"parent",{enumerable:!0,get:function(){if(!!v.isBuffer(this))return this.buffer}});Object.defineProperty(v.prototype,"offset",{enumerable:!0,get:function(){if(!!v.isBuffer(this))return this.byteOffset}});function Jn(t){if(t>Ei)throw new RangeError('The value "'+t+'" is invalid for option "size"');var o=new Uint8Array(t);return Object.setPrototypeOf(o,v.prototype),o}function v(t,o,a){if(typeof t=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return rc(t)}return dd(t,o,a)}v.poolSize=8192;function dd(t,o,a){if(typeof t=="string")return Kv(t,o);if(ArrayBuffer.isView(t))return jv(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Rn(t,ArrayBuffer)||t&&Rn(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Rn(t,SharedArrayBuffer)||t&&Rn(t.buffer,SharedArrayBuffer)))return tc(t,o,a);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var l=t.valueOf&&t.valueOf();if(l!=null&&l!==t)return v.from(l,o,a);var u=Xv(t);if(u)return u;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return v.from(t[Symbol.toPrimitive]("string"),o,a);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}v.from=function(t,o,a){return dd(t,o,a)};Object.setPrototypeOf(v.prototype,Uint8Array.prototype);Object.setPrototypeOf(v,Uint8Array);function _d(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function zv(t,o,a){return _d(t),t<=0?Jn(t):o!==void 0?typeof a=="string"?Jn(t).fill(o,a):Jn(t).fill(o):Jn(t)}v.alloc=function(t,o,a){return zv(t,o,a)};function rc(t){return _d(t),Jn(t<0?0:ic(t)|0)}v.allocUnsafe=function(t){return rc(t)};v.allocUnsafeSlow=function(t){return rc(t)};function Kv(t,o){if((typeof o!="string"||o==="")&&(o="utf8"),!v.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var a=ud(t,o)|0,l=Jn(a),u=l.write(t,o);return u!==a&&(l=l.slice(0,u)),l}function nc(t){for(var o=t.length<0?0:ic(t.length)|0,a=Jn(o),l=0;l<o;l+=1)a[l]=t[l]&255;return a}function jv(t){if(Rn(t,Uint8Array)){var o=new Uint8Array(t);return tc(o.buffer,o.byteOffset,o.byteLength)}return nc(t)}function tc(t,o,a){if(o<0||t.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<o+(a||0))throw new RangeError('"length" is outside of buffer bounds');var l;return o===void 0&&a===void 0?l=new Uint8Array(t):a===void 0?l=new Uint8Array(t,o):l=new Uint8Array(t,o,a),Object.setPrototypeOf(l,v.prototype),l}function Xv(t){if(v.isBuffer(t)){var o=ic(t.length)|0,a=Jn(o);return a.length===0||t.copy(a,0,0,o),a}if(t.length!==void 0)return typeof t.length!="number"||ac(t.length)?Jn(0):nc(t);if(t.type==="Buffer"&&Array.isArray(t.data))return nc(t.data)}function ic(t){if(t>=Ei)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ei.toString(16)+" bytes");return t|0}function Yv(t){return+t!=t&&(t=0),v.alloc(+t)}v.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==v.prototype};v.compare=function(o,a){if(Rn(o,Uint8Array)&&(o=v.from(o,o.offset,o.byteLength)),Rn(a,Uint8Array)&&(a=v.from(a,a.offset,a.byteLength)),!v.isBuffer(o)||!v.isBuffer(a))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===a)return 0;for(var l=o.length,u=a.length,T=0,y=Math.min(l,u);T<y;++T)if(o[T]!==a[T]){l=o[T],u=a[T];break}return l<u?-1:u<l?1:0};v.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};v.concat=function(o,a){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return v.alloc(0);var l;if(a===void 0)for(a=0,l=0;l<o.length;++l)a+=o[l].length;var u=v.allocUnsafe(a),T=0;for(l=0;l<o.length;++l){var y=o[l];if(Rn(y,Uint8Array))T+y.length>u.length?v.from(y).copy(u,T):Uint8Array.prototype.set.call(u,y,T);else if(v.isBuffer(y))y.copy(u,T);else throw new TypeError('"list" argument must be an Array of Buffers');T+=y.length}return u};function ud(t,o){if(v.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Rn(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var a=t.length,l=arguments.length>2&&arguments[2]===!0;if(!l&&a===0)return 0;for(var u=!1;;)switch(o){case"ascii":case"latin1":case"binary":return a;case"utf8":case"utf-8":return oc(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a*2;case"hex":return a>>>1;case"base64":return yd(t).length;default:if(u)return l?-1:oc(t).length;o=(""+o).toLowerCase(),u=!0}}v.byteLength=ud;function Zv(t,o,a){var l=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((a===void 0||a>this.length)&&(a=this.length),a<=0)||(a>>>=0,o>>>=0,a<=o))return"";for(t||(t="utf8");;)switch(t){case"hex":return sA(this,o,a);case"utf8":case"utf-8":return gd(this,o,a);case"ascii":return iA(this,o,a);case"latin1":case"binary":return aA(this,o,a);case"base64":return oA(this,o,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return cA(this,o,a);default:if(l)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),l=!0}}v.prototype._isBuffer=!0;function Ft(t,o,a){var l=t[o];t[o]=t[a],t[a]=l}v.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var a=0;a<o;a+=2)Ft(this,a,a+1);return this};v.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var a=0;a<o;a+=4)Ft(this,a,a+3),Ft(this,a+1,a+2);return this};v.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var a=0;a<o;a+=8)Ft(this,a,a+7),Ft(this,a+1,a+6),Ft(this,a+2,a+5),Ft(this,a+3,a+4);return this};v.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?gd(this,0,o):Zv.apply(this,arguments)};v.prototype.toLocaleString=v.prototype.toString;v.prototype.equals=function(o){if(!v.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:v.compare(this,o)===0};v.prototype.inspect=function(){var o="",a=lo.INSPECT_MAX_BYTES;return o=this.toString("hex",0,a).replace(/(.{2})/g,"$1 ").trim(),this.length>a&&(o+=" ... "),"<Buffer "+o+">"};pd&&(v.prototype[pd]=v.prototype.inspect);v.prototype.compare=function(o,a,l,u,T){if(Rn(o,Uint8Array)&&(o=v.from(o,o.offset,o.byteLength)),!v.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(a===void 0&&(a=0),l===void 0&&(l=o?o.length:0),u===void 0&&(u=0),T===void 0&&(T=this.length),a<0||l>o.length||u<0||T>this.length)throw new RangeError("out of range index");if(u>=T&&a>=l)return 0;if(u>=T)return-1;if(a>=l)return 1;if(a>>>=0,l>>>=0,u>>>=0,T>>>=0,this===o)return 0;for(var y=T-u,E=l-a,I=Math.min(y,E),N=this.slice(u,T),G=o.slice(a,l),M=0;M<I;++M)if(N[M]!==G[M]){y=N[M],E=G[M];break}return y<E?-1:E<y?1:0};function fd(t,o,a,l,u){if(t.length===0)return-1;if(typeof a=="string"?(l=a,a=0):a>2147483647?a=2147483647:a<-2147483648&&(a=-2147483648),a=+a,ac(a)&&(a=u?0:t.length-1),a<0&&(a=t.length+a),a>=t.length){if(u)return-1;a=t.length-1}else if(a<0)if(u)a=0;else return-1;if(typeof o=="string"&&(o=v.from(o,l)),v.isBuffer(o))return o.length===0?-1:md(t,o,a,l,u);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?u?Uint8Array.prototype.indexOf.call(t,o,a):Uint8Array.prototype.lastIndexOf.call(t,o,a):md(t,[o],a,l,u);throw new TypeError("val must be string, number or Buffer")}function md(t,o,a,l,u){var T=1,y=t.length,E=o.length;if(l!==void 0&&(l=String(l).toLowerCase(),l==="ucs2"||l==="ucs-2"||l==="utf16le"||l==="utf-16le")){if(t.length<2||o.length<2)return-1;T=2,y/=2,E/=2,a/=2}function I(ee,ce){return T===1?ee[ce]:ee.readUInt16BE(ce*T)}var N;if(u){var G=-1;for(N=a;N<y;N++)if(I(t,N)===I(o,G===-1?0:N-G)){if(G===-1&&(G=N),N-G+1===E)return G*T}else G!==-1&&(N-=N-G),G=-1}else for(a+E>y&&(a=y-E),N=a;N>=0;N--){for(var M=!0,ae=0;ae<E;ae++)if(I(t,N+ae)!==I(o,ae)){M=!1;break}if(M)return N}return-1}v.prototype.includes=function(o,a,l){return this.indexOf(o,a,l)!==-1};v.prototype.indexOf=function(o,a,l){return fd(this,o,a,l,!0)};v.prototype.lastIndexOf=function(o,a,l){return fd(this,o,a,l,!1)};function Jv(t,o,a,l){a=Number(a)||0;var u=t.length-a;l?(l=Number(l),l>u&&(l=u)):l=u;var T=o.length;l>T/2&&(l=T/2);for(var y=0;y<l;++y){var E=parseInt(o.substr(y*2,2),16);if(ac(E))return y;t[a+y]=E}return y}function Qv(t,o,a,l){return Ci(oc(o,t.length-a),t,a,l)}function eA(t,o,a,l){return Ci(lA(o),t,a,l)}function nA(t,o,a,l){return Ci(yd(o),t,a,l)}function tA(t,o,a,l){return Ci(dA(o,t.length-a),t,a,l)}v.prototype.write=function(o,a,l,u){if(a===void 0)u="utf8",l=this.length,a=0;else if(l===void 0&&typeof a=="string")u=a,l=this.length,a=0;else if(isFinite(a))a=a>>>0,isFinite(l)?(l=l>>>0,u===void 0&&(u="utf8")):(u=l,l=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var T=this.length-a;if((l===void 0||l>T)&&(l=T),o.length>0&&(l<0||a<0)||a>this.length)throw new RangeError("Attempt to write outside buffer bounds");u||(u="utf8");for(var y=!1;;)switch(u){case"hex":return Jv(this,o,a,l);case"utf8":case"utf-8":return Qv(this,o,a,l);case"ascii":case"latin1":case"binary":return eA(this,o,a,l);case"base64":return nA(this,o,a,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tA(this,o,a,l);default:if(y)throw new TypeError("Unknown encoding: "+u);u=(""+u).toLowerCase(),y=!0}};v.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function oA(t,o,a){return o===0&&a===t.length?ec.fromByteArray(t):ec.fromByteArray(t.slice(o,a))}function gd(t,o,a){a=Math.min(t.length,a);for(var l=[],u=o;u<a;){var T=t[u],y=null,E=T>239?4:T>223?3:T>191?2:1;if(u+E<=a){var I,N,G,M;switch(E){case 1:T<128&&(y=T);break;case 2:I=t[u+1],(I&192)===128&&(M=(T&31)<<6|I&63,M>127&&(y=M));break;case 3:I=t[u+1],N=t[u+2],(I&192)===128&&(N&192)===128&&(M=(T&15)<<12|(I&63)<<6|N&63,M>2047&&(M<55296||M>57343)&&(y=M));break;case 4:I=t[u+1],N=t[u+2],G=t[u+3],(I&192)===128&&(N&192)===128&&(G&192)===128&&(M=(T&15)<<18|(I&63)<<12|(N&63)<<6|G&63,M>65535&&M<1114112&&(y=M))}}y===null?(y=65533,E=1):y>65535&&(y-=65536,l.push(y>>>10&1023|55296),y=56320|y&1023),l.push(y),u+=E}return rA(l)}var ld=4096;function rA(t){var o=t.length;if(o<=ld)return String.fromCharCode.apply(String,t);for(var a="",l=0;l<o;)a+=String.fromCharCode.apply(String,t.slice(l,l+=ld));return a}function iA(t,o,a){var l="";a=Math.min(t.length,a);for(var u=o;u<a;++u)l+=String.fromCharCode(t[u]&127);return l}function aA(t,o,a){var l="";a=Math.min(t.length,a);for(var u=o;u<a;++u)l+=String.fromCharCode(t[u]);return l}function sA(t,o,a){var l=t.length;(!o||o<0)&&(o=0),(!a||a<0||a>l)&&(a=l);for(var u="",T=o;T<a;++T)u+=_A[t[T]];return u}function cA(t,o,a){for(var l=t.slice(o,a),u="",T=0;T<l.length-1;T+=2)u+=String.fromCharCode(l[T]+l[T+1]*256);return u}v.prototype.slice=function(o,a){var l=this.length;o=~~o,a=a===void 0?l:~~a,o<0?(o+=l,o<0&&(o=0)):o>l&&(o=l),a<0?(a+=l,a<0&&(a=0)):a>l&&(a=l),a<o&&(a=o);var u=this.subarray(o,a);return Object.setPrototypeOf(u,v.prototype),u};function Ee(t,o,a){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+o>a)throw new RangeError("Trying to access beyond buffer length")}v.prototype.readUintLE=v.prototype.readUIntLE=function(o,a,l){o=o>>>0,a=a>>>0,l||Ee(o,a,this.length);for(var u=this[o],T=1,y=0;++y<a&&(T*=256);)u+=this[o+y]*T;return u};v.prototype.readUintBE=v.prototype.readUIntBE=function(o,a,l){o=o>>>0,a=a>>>0,l||Ee(o,a,this.length);for(var u=this[o+--a],T=1;a>0&&(T*=256);)u+=this[o+--a]*T;return u};v.prototype.readUint8=v.prototype.readUInt8=function(o,a){return o=o>>>0,a||Ee(o,1,this.length),this[o]};v.prototype.readUint16LE=v.prototype.readUInt16LE=function(o,a){return o=o>>>0,a||Ee(o,2,this.length),this[o]|this[o+1]<<8};v.prototype.readUint16BE=v.prototype.readUInt16BE=function(o,a){return o=o>>>0,a||Ee(o,2,this.length),this[o]<<8|this[o+1]};v.prototype.readUint32LE=v.prototype.readUInt32LE=function(o,a){return o=o>>>0,a||Ee(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};v.prototype.readUint32BE=v.prototype.readUInt32BE=function(o,a){return o=o>>>0,a||Ee(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};v.prototype.readIntLE=function(o,a,l){o=o>>>0,a=a>>>0,l||Ee(o,a,this.length);for(var u=this[o],T=1,y=0;++y<a&&(T*=256);)u+=this[o+y]*T;return T*=128,u>=T&&(u-=Math.pow(2,8*a)),u};v.prototype.readIntBE=function(o,a,l){o=o>>>0,a=a>>>0,l||Ee(o,a,this.length);for(var u=a,T=1,y=this[o+--u];u>0&&(T*=256);)y+=this[o+--u]*T;return T*=128,y>=T&&(y-=Math.pow(2,8*a)),y};v.prototype.readInt8=function(o,a){return o=o>>>0,a||Ee(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};v.prototype.readInt16LE=function(o,a){o=o>>>0,a||Ee(o,2,this.length);var l=this[o]|this[o+1]<<8;return l&32768?l|4294901760:l};v.prototype.readInt16BE=function(o,a){o=o>>>0,a||Ee(o,2,this.length);var l=this[o+1]|this[o]<<8;return l&32768?l|4294901760:l};v.prototype.readInt32LE=function(o,a){return o=o>>>0,a||Ee(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};v.prototype.readInt32BE=function(o,a){return o=o>>>0,a||Ee(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};v.prototype.readFloatLE=function(o,a){return o=o>>>0,a||Ee(o,4,this.length),mo.read(this,o,!0,23,4)};v.prototype.readFloatBE=function(o,a){return o=o>>>0,a||Ee(o,4,this.length),mo.read(this,o,!1,23,4)};v.prototype.readDoubleLE=function(o,a){return o=o>>>0,a||Ee(o,8,this.length),mo.read(this,o,!0,52,8)};v.prototype.readDoubleBE=function(o,a){return o=o>>>0,a||Ee(o,8,this.length),mo.read(this,o,!1,52,8)};function Ke(t,o,a,l,u,T){if(!v.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>u||o<T)throw new RangeError('"value" argument is out of bounds');if(a+l>t.length)throw new RangeError("Index out of range")}v.prototype.writeUintLE=v.prototype.writeUIntLE=function(o,a,l,u){if(o=+o,a=a>>>0,l=l>>>0,!u){var T=Math.pow(2,8*l)-1;Ke(this,o,a,l,T,0)}var y=1,E=0;for(this[a]=o&255;++E<l&&(y*=256);)this[a+E]=o/y&255;return a+l};v.prototype.writeUintBE=v.prototype.writeUIntBE=function(o,a,l,u){if(o=+o,a=a>>>0,l=l>>>0,!u){var T=Math.pow(2,8*l)-1;Ke(this,o,a,l,T,0)}var y=l-1,E=1;for(this[a+y]=o&255;--y>=0&&(E*=256);)this[a+y]=o/E&255;return a+l};v.prototype.writeUint8=v.prototype.writeUInt8=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,1,255,0),this[a]=o&255,a+1};v.prototype.writeUint16LE=v.prototype.writeUInt16LE=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,2,65535,0),this[a]=o&255,this[a+1]=o>>>8,a+2};v.prototype.writeUint16BE=v.prototype.writeUInt16BE=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,2,65535,0),this[a]=o>>>8,this[a+1]=o&255,a+2};v.prototype.writeUint32LE=v.prototype.writeUInt32LE=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,4,4294967295,0),this[a+3]=o>>>24,this[a+2]=o>>>16,this[a+1]=o>>>8,this[a]=o&255,a+4};v.prototype.writeUint32BE=v.prototype.writeUInt32BE=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,4,4294967295,0),this[a]=o>>>24,this[a+1]=o>>>16,this[a+2]=o>>>8,this[a+3]=o&255,a+4};v.prototype.writeIntLE=function(o,a,l,u){if(o=+o,a=a>>>0,!u){var T=Math.pow(2,8*l-1);Ke(this,o,a,l,T-1,-T)}var y=0,E=1,I=0;for(this[a]=o&255;++y<l&&(E*=256);)o<0&&I===0&&this[a+y-1]!==0&&(I=1),this[a+y]=(o/E>>0)-I&255;return a+l};v.prototype.writeIntBE=function(o,a,l,u){if(o=+o,a=a>>>0,!u){var T=Math.pow(2,8*l-1);Ke(this,o,a,l,T-1,-T)}var y=l-1,E=1,I=0;for(this[a+y]=o&255;--y>=0&&(E*=256);)o<0&&I===0&&this[a+y+1]!==0&&(I=1),this[a+y]=(o/E>>0)-I&255;return a+l};v.prototype.writeInt8=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,1,127,-128),o<0&&(o=255+o+1),this[a]=o&255,a+1};v.prototype.writeInt16LE=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,2,32767,-32768),this[a]=o&255,this[a+1]=o>>>8,a+2};v.prototype.writeInt16BE=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,2,32767,-32768),this[a]=o>>>8,this[a+1]=o&255,a+2};v.prototype.writeInt32LE=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,4,2147483647,-2147483648),this[a]=o&255,this[a+1]=o>>>8,this[a+2]=o>>>16,this[a+3]=o>>>24,a+4};v.prototype.writeInt32BE=function(o,a,l){return o=+o,a=a>>>0,l||Ke(this,o,a,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[a]=o>>>24,this[a+1]=o>>>16,this[a+2]=o>>>8,this[a+3]=o&255,a+4};function hd(t,o,a,l,u,T){if(a+l>t.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("Index out of range")}function Td(t,o,a,l,u){return o=+o,a=a>>>0,u||hd(t,o,a,4,34028234663852886e22,-34028234663852886e22),mo.write(t,o,a,l,23,4),a+4}v.prototype.writeFloatLE=function(o,a,l){return Td(this,o,a,!0,l)};v.prototype.writeFloatBE=function(o,a,l){return Td(this,o,a,!1,l)};function xd(t,o,a,l,u){return o=+o,a=a>>>0,u||hd(t,o,a,8,17976931348623157e292,-17976931348623157e292),mo.write(t,o,a,l,52,8),a+8}v.prototype.writeDoubleLE=function(o,a,l){return xd(this,o,a,!0,l)};v.prototype.writeDoubleBE=function(o,a,l){return xd(this,o,a,!1,l)};v.prototype.copy=function(o,a,l,u){if(!v.isBuffer(o))throw new TypeError("argument should be a Buffer");if(l||(l=0),!u&&u!==0&&(u=this.length),a>=o.length&&(a=o.length),a||(a=0),u>0&&u<l&&(u=l),u===l||o.length===0||this.length===0)return 0;if(a<0)throw new RangeError("targetStart out of bounds");if(l<0||l>=this.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("sourceEnd out of bounds");u>this.length&&(u=this.length),o.length-a<u-l&&(u=o.length-a+l);var T=u-l;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(a,l,u):Uint8Array.prototype.set.call(o,this.subarray(l,u),a),T};v.prototype.fill=function(o,a,l,u){if(typeof o=="string"){if(typeof a=="string"?(u=a,a=0,l=this.length):typeof l=="string"&&(u=l,l=this.length),u!==void 0&&typeof u!="string")throw new TypeError("encoding must be a string");if(typeof u=="string"&&!v.isEncoding(u))throw new TypeError("Unknown encoding: "+u);if(o.length===1){var T=o.charCodeAt(0);(u==="utf8"&&T<128||u==="latin1")&&(o=T)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(a<0||this.length<a||this.length<l)throw new RangeError("Out of range index");if(l<=a)return this;a=a>>>0,l=l===void 0?this.length:l>>>0,o||(o=0);var y;if(typeof o=="number")for(y=a;y<l;++y)this[y]=o;else{var E=v.isBuffer(o)?o:v.from(o,u),I=E.length;if(I===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(y=0;y<l-a;++y)this[y+a]=E[y%I]}return this};var pA=/[^+/0-9A-Za-z-_]/g;function mA(t){if(t=t.split("=")[0],t=t.trim().replace(pA,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function oc(t,o){o=o||1/0;for(var a,l=t.length,u=null,T=[],y=0;y<l;++y){if(a=t.charCodeAt(y),a>55295&&a<57344){if(!u){if(a>56319){(o-=3)>-1&&T.push(239,191,189);continue}else if(y+1===l){(o-=3)>-1&&T.push(239,191,189);continue}u=a;continue}if(a<56320){(o-=3)>-1&&T.push(239,191,189),u=a;continue}a=(u-55296<<10|a-56320)+65536}else u&&(o-=3)>-1&&T.push(239,191,189);if(u=null,a<128){if((o-=1)<0)break;T.push(a)}else if(a<2048){if((o-=2)<0)break;T.push(a>>6|192,a&63|128)}else if(a<65536){if((o-=3)<0)break;T.push(a>>12|224,a>>6&63|128,a&63|128)}else if(a<1114112){if((o-=4)<0)break;T.push(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}else throw new Error("Invalid code point")}return T}function lA(t){for(var o=[],a=0;a<t.length;++a)o.push(t.charCodeAt(a)&255);return o}function dA(t,o){for(var a,l,u,T=[],y=0;y<t.length&&!((o-=2)<0);++y)a=t.charCodeAt(y),l=a>>8,u=a%256,T.push(u),T.push(l);return T}function yd(t){return ec.toByteArray(mA(t))}function Ci(t,o,a,l){for(var u=0;u<l&&!(u+a>=o.length||u>=t.length);++u)o[u+a]=t[u];return u}function Rn(t,o){return t instanceof o||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===o.name}function ac(t){return t!==t}var _A=function(){for(var t="0123456789abcdef",o=new Array(256),a=0;a<16;++a)for(var l=a*16,u=0;u<16;++u)o[l+u]=t[a]+t[u];return o}()});var Id=F((JP,Ad)=>{i();var Se=Ad.exports={},Dn,On;function sc(){throw new Error("setTimeout has not been defined")}function cc(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Dn=setTimeout:Dn=sc}catch(t){Dn=sc}try{typeof clearTimeout=="function"?On=clearTimeout:On=cc}catch(t){On=cc}})();function bd(t){if(Dn===setTimeout)return setTimeout(t,0);if((Dn===sc||!Dn)&&setTimeout)return Dn=setTimeout,setTimeout(t,0);try{return Dn(t,0)}catch(o){try{return Dn.call(null,t,0)}catch(a){return Dn.call(this,t,0)}}}function uA(t){if(On===clearTimeout)return clearTimeout(t);if((On===cc||!On)&&clearTimeout)return On=clearTimeout,clearTimeout(t);try{return On(t)}catch(o){try{return On.call(null,t)}catch(a){return On.call(this,t)}}}var Qn=[],_o=!1,Bt,Pi=-1;function fA(){!_o||!Bt||(_o=!1,Bt.length?Qn=Bt.concat(Qn):Pi=-1,Qn.length&&wd())}function wd(){if(!_o){var t=bd(fA);_o=!0;for(var o=Qn.length;o;){for(Bt=Qn,Qn=[];++Pi<o;)Bt&&Bt[Pi].run();Pi=-1,o=Qn.length}Bt=null,_o=!1,uA(t)}}Se.nextTick=function(t){var o=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)o[a-1]=arguments[a];Qn.push(new vd(t,o)),Qn.length===1&&!_o&&bd(wd)};function vd(t,o){this.fun=t,this.array=o}vd.prototype.run=function(){this.fun.apply(null,this.array)};Se.title="browser";Se.browser=!0;Se.env={};Se.argv=[];Se.version="";Se.versions={};function et(){}Se.on=et;Se.addListener=et;Se.once=et;Se.off=et;Se.removeListener=et;Se.removeAllListeners=et;Se.emit=et;Se.prependListener=et;Se.prependOnceListener=et;Se.listeners=function(t){return[]};Se.binding=function(t){throw new Error("process.binding is not supported")};Se.cwd=function(){return"/"};Se.chdir=function(t){throw new Error("process.chdir is not supported")};Se.umask=function(){return 0}});var p,m,gA,c,i=O(()=>{p=B(Sd()),m=B(Id()),gA=function(t){function o(){var l=this||self;return delete t.prototype.__magic__,l}if(typeof globalThis=="object")return globalThis;if(this)return o();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:o});var a=__magic__;return a}(Object),c=gA});var Ld=O(()=>{"use strict";i()});var Mn=O(()=>{"use strict";i()});var kd=O(()=>{"use strict";i()});var pc,Ed=O(()=>{"use strict";i();pc=(l=>(l.SetGuardian="SetGuardian",l.GuardAccount="GuardAccount",l.UnGuardAccount="UnGuardAccount",l))(pc||{})});var mc,lc,dc,_c,uc,fc,Cd=O(()=>{"use strict";i();mc="1.0.8",lc="1.0.11",dc="1.0.15",_c="1.0.17",uc="1.0.22",fc="1.0.23"});var gc=O(()=>{"use strict";i()});var Pd=O(()=>{"use strict";i()});var hc=O(()=>{"use strict";i()});var Nd=O(()=>{"use strict";i()});var Rd=O(()=>{"use strict";i()});var Ut,uo,Tt=O(()=>{"use strict";i();Ut=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),uo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Dd,mN,Od,lN,ue=O(()=>{"use strict";i();Tt();Dd=(a=>(a.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",a.reloginRequest="RELOGIN_REQUEST",a))(Dd||{}),mN=C(C({},uo.WindowProviderRequestEnums),Dd),Od=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Od||{}),lN=C(C({},uo.WindowProviderResponseEnums),Od)});var Md=O(()=>{"use strict";i()});var Fd=O(()=>{"use strict";i()});var je=O(()=>{"use strict";i()});var Bd=O(()=>{"use strict";i()});var Ud=O(()=>{"use strict";i()});var Wd=O(()=>{"use strict";i()});var be=O(()=>{"use strict";i();hc();Nd();Rd();ue();Md();Fd();je();Bd();Ud();Wd()});var fo,Gd,kN,Hd,EN,$d,CN,PN,hA,go=O(()=>{"use strict";i();be();fo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Gd,egldLabel:kN}=fo["devnet"],{chainId:Hd,egldLabel:EN}=fo["testnet"],{chainId:$d,egldLabel:CN}=fo["mainnet"],PN={["devnet"]:Gd,["testnet"]:Hd,["mainnet"]:$d},hA={[Gd]:"devnet",[Hd]:"testnet",[$d]:"mainnet"}});var Ni=O(()=>{"use strict";i()});var Fn,Vd=O(()=>{"use strict";i();Fn=require("@multiversx/sdk-web-wallet-provider")});var Wt,pr=O(()=>{"use strict";i();Wt=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var qd,zd,Tc,FN,BN,xc=O(()=>{"use strict";i();pr();Tc=String((zd=(qd=Wt.safeWindow)==null?void 0:qd.navigator)==null?void 0:zd.userAgent),FN=/^((?!chrome|android).)*safari/i.test(Tc),BN=/firefox/i.test(Tc)&&/windows/i.test(Tc)});var Ri,Di,Kd,Oi,jd,ho,te=O(()=>{"use strict";i();Ld();Mn();kd();Ed();Cd();gc();Pd();go();Ni();Vd();xc();Ri=5e4,Di=1e9,Kd=1,Oi="logout",jd="login",ho="0"});var Gt,To=O(()=>{"use strict";i();Gt=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var yc={};Pn(yc,{css:()=>Yd,default:()=>TA});var Yd,TA,Sc=O(()=>{"use strict";i();Yd=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yd));TA={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var lr,Mi=O(()=>{"use strict";i();lr=()=>Date.now()/1e3});var Qd=O(()=>{"use strict";i()});var e_=O(()=>{"use strict";i()});var wc=O(()=>{"use strict";i();Mi();Qd();e_()});var vc={};Pn(vc,{clear:()=>vA,getItem:()=>bA,localStorageKeys:()=>xt,removeItem:()=>wA,setItem:()=>SA});var xt,Fi,SA,bA,wA,vA,xo=O(()=>{"use strict";i();wc();xt={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Fi=typeof localStorage!="undefined",SA=({key:t,data:o,expires:a})=>{!Fi||localStorage.setItem(String(t),JSON.stringify({expires:a,data:o}))},bA=t=>{if(!Fi)return;let o=localStorage.getItem(String(t));if(!o)return null;let a=JSON.parse(o);return!a||!a.hasOwnProperty("expires")||!a.hasOwnProperty("data")?null:lr()>=a.expires?(localStorage.removeItem(String(t)),null):a.data},wA=t=>{!Fi||localStorage.removeItem(String(t))},vA=()=>{!Fi||localStorage.clear()}});var Ac={};Pn(Ac,{clear:()=>r_,getItem:()=>t_,removeItem:()=>o_,setItem:()=>n_,storage:()=>AA});var n_,t_,o_,r_,AA,i_=O(()=>{"use strict";i();n_=({key:t,data:o,expires:a})=>{sessionStorage.setItem(String(t),JSON.stringify({expires:a,data:o}))},t_=t=>{let o=sessionStorage.getItem(String(t));if(!o)return null;let a=JSON.parse(o);return!a||!a.hasOwnProperty("expires")||!a.hasOwnProperty("data")?null:Date.now()>=a.expires?(sessionStorage.removeItem(String(t)),null):a.data},o_=t=>sessionStorage.removeItem(String(t)),r_=()=>sessionStorage.clear(),AA={setItem:n_,getItem:t_,removeItem:o_,clear:r_}});var Ht,yo=O(()=>{"use strict";i();xo();i_();Ht={session:Ac,local:vc}});var Ic,he,on,Te=O(()=>{"use strict";i();Ic=require("@reduxjs/toolkit");te();he=(0,Ic.createAction)(Oi),on=(0,Ic.createAction)(jd,t=>({payload:t}))});var kc,a_,s_,Bi,Lc,c_,Ui,IA,Ec,wR,LA,kA,vR,AR,IR,EA,CA,Wi,Gi=O(()=>{"use strict";i();kc=require("@multiversx/sdk-core"),a_=require("@reduxjs/toolkit"),s_=require("redux-persist");te();yo();xo();Te();Bi={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ho},Lc={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Bi},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},c_=(0,a_.createSlice)({name:"accountInfoSlice",initialState:Lc,reducers:{setAddress:(t,o)=>{let a=o.payload;t.address=a,t.publicKey=a?new kc.Address(a).hex():""},setAccount:(t,o)=>{let a=t.address===o.payload.address;t.accounts={[t.address]:a?o.payload:Bi},t.shard=o.payload.shard,t.isAccountLoading=!1,t.accountLoadingError=null},setAccountNonce:(t,o)=>{let{address:a}=t;t.accounts[a].nonce=o.payload},setAccountShard:(t,o)=>{t.shard=o.payload},setLedgerAccount:(t,o)=>{t.ledgerAccount=o.payload},updateLedgerAccount:(t,o)=>{t.ledgerAccount!=null&&(t.ledgerAccount.index=o.payload.index,t.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(t,o)=>{t.walletConnectAccount=o.payload},setIsAccountLoading:(t,o)=>{t.isAccountLoading=o.payload,t.accountLoadingError=null},setAccountLoadingError:(t,o)=>{t.accountLoadingError=o.payload,t.isAccountLoading=!1},setWebsocketEvent:(t,o)=>{t.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(t,o)=>{t.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:t=>{t.addCase(he,()=>(Ht.local.removeItem(xt.loginExpiresAt),Lc)),t.addCase(on,(o,a)=>{let{address:l}=a.payload;o.address=l,o.publicKey=new kc.Address(l).hex()}),t.addCase(s_.REHYDRATE,(o,a)=>{var N;if(!((N=a.payload)!=null&&N.account))return;let{account:l}=a.payload,{address:u,shard:T,accounts:y,publicKey:E}=l;o.address=u,o.shard=T;let I=y&&u in y;o.accounts=I?y:Lc.accounts,o.publicKey=E})}}),{setAccount:Ui,setAddress:IA,setAccountNonce:Ec,setAccountShard:wR,setLedgerAccount:LA,updateLedgerAccount:kA,setWalletConnectAccount:vR,setIsAccountLoading:AR,setAccountLoadingError:IR,setWebsocketEvent:EA,setWebsocketBatchEvent:CA}=c_.actions,Wi=c_.reducer});function dr(){return new Date().setHours(new Date().getHours()+24)}function _r(t){Ht.local.setItem({key:xt.loginExpiresAt,data:t,expires:t})}var Cc=O(()=>{"use strict";i();yo();xo()});var m_,p_,l_,MR,PA,NA,d_,FR,RA,__,BR,UR,WR,Hi,$i=O(()=>{"use strict";i();m_=require("@reduxjs/toolkit");Cc();ue();Te();p_={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},l_=(0,m_.createSlice)({name:"loginInfoSlice",initialState:p_,reducers:{setLoginMethod:(t,o)=>{t.loginMethod=o.payload},setTokenLogin:(t,o)=>{t.tokenLogin=o.payload},setTokenLoginSignature:(t,o)=>{(t==null?void 0:t.tokenLogin)!=null&&(t.tokenLogin.signature=o.payload)},setWalletLogin:(t,o)=>{t.walletLogin=o.payload},setWalletConnectLogin:(t,o)=>{t.walletConnectLogin=o.payload},setLedgerLogin:(t,o)=>{t.ledgerLogin=o.payload},setWebviewLogin:(t,o)=>{t.webviewLogin=o.payload},invalidateLoginSession:t=>{t.isLoginSessionInvalid=!0},setLogoutRoute:(t,o)=>{t.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(t,o)=>{t.isWalletConnectV2Initialized=o.payload}},extraReducers:t=>{t.addCase(he,()=>p_),t.addCase(on,(o,a)=>{o.isLoginSessionInvalid=!1,o.loginMethod=a.payload.loginMethod,o.iframeLoginType=a.payload.iframeLoginType,_r(dr())})}}),{setLoginMethod:MR,setWalletConnectLogin:PA,setLedgerLogin:NA,setTokenLogin:d_,setTokenLoginSignature:FR,setWalletLogin:RA,invalidateLoginSession:__,setLogoutRoute:BR,setIsWalletConnectV2Initialized:UR,setWebviewLogin:WR}=l_.actions,Hi=l_.reducer});var f_,u_,g_,VR,DA,qR,OA,Vi,qi=O(()=>{"use strict";i();f_=require("@reduxjs/toolkit");Te();u_={},g_=(0,f_.createSlice)({name:"modalsSlice",initialState:u_,reducers:{setTxSubmittedModal:(t,o)=>{t.txSubmittedModal=o.payload},setNotificationModal:(t,o)=>{t.notificationModal=o.payload},clearTxSubmittedModal:t=>{t.txSubmittedModal=void 0},clearNotificationModal:t=>{t.notificationModal=void 0}},extraReducers:t=>{t.addCase(he,()=>u_)}}),{setTxSubmittedModal:VR,setNotificationModal:DA,clearTxSubmittedModal:qR,clearNotificationModal:OA}=g_.actions,Vi=g_.reducer});var we,Re=O(()=>{"use strict";i();To();we=()=>{if(!Gt())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:a,origin:l,href:u,search:T}}=window;return{pathname:o,hash:a,origin:l,href:u,search:T}}});var h_=O(()=>{"use strict";i();Re()});var T_=O(()=>{"use strict";i();Me()});var x_=O(()=>{"use strict";i();pr()});var Me=O(()=>{"use strict";i();h_();T_();Re();x_()});var ur=O(()=>{"use strict";i();Me()});var S_=O(()=>{"use strict";i();ur()});function b_(t){return t[Math.floor(Math.random()*t.length)]}var w_=O(()=>{"use strict";i()});var Pc=O(()=>{"use strict";i();gc()});var nt=O(()=>{"use strict";i();S_();w_();Pc()});var v_,A_,I_,Nc,FA,L_,w2,v2,BA,zi,Ki=O(()=>{"use strict";i();v_=require("@reduxjs/toolkit"),A_=B(require("lodash.omit")),I_=require("redux-persist");Ni();Te();nt();Nc={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},FA={network:Nc},L_=(0,v_.createSlice)({name:"appConfig",initialState:FA,reducers:{initializeNetworkConfig:(t,o)=>{let a=b_(o.payload.walletConnectV2RelayAddresses),l=(0,A_.default)(o.payload,"walletConnectV2RelayAddresses");t.network=j(C(C({},t.network),l),{walletConnectV2RelayAddress:a})},updateNetworkConfig:(t,o)=>{t.network=C(C({},t.network),o.payload)},setCustomWalletAddress:(t,o)=>{t.network.customWalletAddress=o.payload}},extraReducers:t=>{t.addCase(he,o=>{o.network.customWalletAddress=void 0}),t.addCase(I_.REHYDRATE,(o,a)=>{var u,T;if(!((T=(u=a.payload)==null?void 0:u.network)!=null&&T.customWalletAddress))return;let{network:{customWalletAddress:l}}=a.payload;o.network.customWalletAddress=l})}}),{initializeNetworkConfig:w2,updateNetworkConfig:v2,setCustomWalletAddress:BA}=L_.actions,zi=L_.reducer});var k_,Rc,E_,C2,P2,N2,ji,Xi=O(()=>{"use strict";i();k_=require("@reduxjs/toolkit");be();Te();Rc={isSigning:!1,signedSessions:{}},E_=(0,k_.createSlice)({name:"signedMessageInfoSliceState",initialState:Rc,reducers:{setSignSession:(t,o)=>{let{sessionId:a,signedSession:l,errorMessage:u}=o.payload;u&&(t.errorMessage=u),t.isSigning=l.status==="pending",t.signedSessions[a]=C(C({},t.signedSessions[a]),l)},setSignSessionState:(t,o)=>C(C({},t),o.payload),clearSignedMessageInfo:()=>Rc},extraReducers:t=>{t.addCase(he,()=>Rc)}}),{setSignSession:C2,clearSignedMessageInfo:P2,setSignSessionState:N2}=E_.actions,ji=E_.reducer});var P_,N_,C_,R_,UA,WA,U2,GA,Yi,Zi=O(()=>{"use strict";i();P_=require("@reduxjs/toolkit"),N_=require("redux-persist");be();Mi();Te();C_={customToasts:[],transactionToasts:[]},R_=(0,P_.createSlice)({name:"toastsSlice",initialState:C_,reducers:{addCustomToast:(t,o)=>{let a=o.payload.toastId||`custom-toast-${t.customToasts.length+1}`,l=t.customToasts.findIndex(u=>u.toastId===a);if(l!==-1){t.customToasts[l]=j(C(C({},t.customToasts[l]),o.payload),{type:"custom",toastId:a});return}t.customToasts.push(j(C({},o.payload),{type:"custom",toastId:a}))},removeCustomToast:(t,o)=>{t.customToasts=t.customToasts.filter(a=>a.toastId!==o.payload)},addTransactionToast:(t,o)=>{t.transactionToasts.push({type:"transaction",startTimestamp:lr(),toastId:o.payload||`custom-toast-${t.transactionToasts.length+1}`})},removeTransactionToast:(t,o)=>{t.transactionToasts=t.transactionToasts.filter(a=>a.toastId!==o.payload)}},extraReducers:t=>{t.addCase(he,()=>C_),t.addCase(N_.REHYDRATE,(o,a)=>{var u,T;let l=(T=(u=a.customToasts)==null?void 0:u.filter(y=>!("component"in y)))!=null?T:[];o.customToasts=l})}}),{addCustomToast:UA,removeCustomToast:WA,addTransactionToast:U2,removeTransactionToast:GA}=R_.actions,Yi=R_.reducer});var D_,Oc,Mc,Fc,HA,Dc,O_,$2,$A,Bc,Ji,Qi=O(()=>{"use strict";i();D_=require("@reduxjs/toolkit");Te();Oc="Transaction failed",Mc="Transaction successful",Fc="Processing transaction",HA="Transaction submitted",Dc={},O_=(0,D_.createSlice)({name:"transactionsInfo",initialState:Dc,reducers:{setTransactionsDisplayInfo(t,o){let{sessionId:a,transactionsDisplayInfo:l}=o.payload;a!=null&&(t[a]={errorMessage:(l==null?void 0:l.errorMessage)||Oc,successMessage:(l==null?void 0:l.successMessage)||Mc,processingMessage:(l==null?void 0:l.processingMessage)||Fc,submittedMessage:(l==null?void 0:l.submittedMessage)||HA,transactionDuration:l==null?void 0:l.transactionDuration})},clearTransactionsInfoForSessionId(t,o){o.payload!=null&&delete t[o.payload]},clearTransactionsInfo:()=>Dc},extraReducers:t=>{t.addCase(he,()=>Dc)}}),{clearTransactionsInfo:$2,setTransactionsDisplayInfo:$A,clearTransactionsInfoForSessionId:Bc}=O_.actions,Ji=O_.reducer});function bo(t){return t!=null&&(QA(t)||r1(t))}function wo(t){return t!=null&&(e1(t)||i1(t))}function vo(t){return t!=null&&(n1(t)||a1(t))}function M_(t){return t!=null&&(t1(t)||s1(t))}function Uc(t){return t!=null&&o1(t)}function QA(t){return t!=null&&VA.includes(t)}function e1(t){return t!=null&&qA.includes(t)}function n1(t){return t!=null&&zA.includes(t)}function t1(t){return t!=null&&KA.includes(t)}function o1(t){return t!=null&&jA.includes(t)}function r1(t){return t!=null&&XA.includes(t)}function i1(t){return t!=null&&YA.includes(t)}function a1(t){return t!=null&&ZA.includes(t)}function s1(t){return t!=null&&JA.includes(t)}var VA,qA,zA,KA,jA,XA,YA,ZA,JA,Ao=O(()=>{"use strict";i();ue();VA=["sent"],qA=["success"],zA=["fail","cancelled","timedOut"],KA=["invalid"],jA=["timedOut"],XA=["pending"],YA=["success"],ZA=["fail","invalid"],JA=["not executed"]});var F_,B_,fr,c1,U_,W_,G_,p1,ea,m1,l1,J2,d1,gr,Wc,Q2,na,ta=O(()=>{"use strict";i();F_=require("@reduxjs/toolkit"),B_=require("redux-persist");ue();Ao();Te();fr={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},c1={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},U_=(0,F_.createSlice)({name:"transactionsSlice",initialState:fr,reducers:{moveTransactionsToSignedState:(t,o)=>{var I,N;let{sessionId:a,transactions:l,errorMessage:u,status:T,redirectRoute:y,customTransactionInformation:E}=o.payload;t.customTransactionInformationForSessionId[a]=C(C(C({},c1),((I=t.signedTransactions[a])==null?void 0:I.customTransactionInformation)||{}),t.customTransactionInformationForSessionId[a]||{}),t.signedTransactions[a]={transactions:l,status:T,errorMessage:u,redirectRoute:y,customTransactionInformation:C(C({},t.customTransactionInformationForSessionId[a]),E!=null?E:{})},((N=t==null?void 0:t.transactionsToSign)==null?void 0:N.sessionId)===a&&(t.transactionsToSign=fr.transactionsToSign)},clearSignedTransaction:(t,o)=>{t.signedTransactions[o.payload]&&delete t.signedTransactions[o.payload]},clearTransactionToSign:t=>{t!=null&&t.transactionsToSign&&(t.transactionsToSign=null)},updateSignedTransaction:(t,o)=>{t.signedTransactions=C(C({},t.signedTransactions),o.payload)},updateSignedTransactions:(t,o)=>{let{sessionId:a,status:l,errorMessage:u,transactions:T}=o.payload;t.signedTransactions[a]!=null&&(t.signedTransactions[a].status=l,u!=null&&(t.signedTransactions[a].errorMessage=u),T!=null&&(t.signedTransactions[a].transactions=T))},updateSignedTransactionStatus:(t,o)=>{var N,G,M,ae,ee,ce,Ce,wt;let{sessionId:a,status:l,errorMessage:u,transactionHash:T,serverTransaction:y,inTransit:E}=o.payload,I=(G=(N=t.signedTransactions)==null?void 0:N[a])==null?void 0:G.transactions;if(I!=null){t.signedTransactions[a].transactions=I.map(Ie=>Ie.hash===T?j(C(C({},y!=null?y:{}),Ie),{status:l,errorMessage:u,inTransit:E}):Ie);let Ge=(ae=(M=t.signedTransactions[a])==null?void 0:M.transactions)==null?void 0:ae.every(Ie=>wo(Ie.status)),In=(ce=(ee=t.signedTransactions[a])==null?void 0:ee.transactions)==null?void 0:ce.some(Ie=>vo(Ie.status)),He=(wt=(Ce=t.signedTransactions[a])==null?void 0:Ce.transactions)==null?void 0:wt.every(Ie=>M_(Ie.status));Ge&&(t.signedTransactions[a].status="success"),In&&(t.signedTransactions[a].status="fail"),He&&(t.signedTransactions[a].status="invalid")}},setTransactionsToSign:(t,o)=>{t.transactionsToSign=o.payload;let{sessionId:a,customTransactionInformation:l}=o.payload;t.customTransactionInformationForSessionId[a]=l,t.signTransactionsError=null},clearAllTransactionsToSign:t=>{t.transactionsToSign=fr.transactionsToSign,t.signTransactionsError=null},clearAllSignedTransactions:t=>{t.signedTransactions=fr.signedTransactions},setSignTransactionsError:(t,o)=>{t.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(t,o)=>{t.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(t,o)=>{let{sessionId:a,customTransactionInformationOverrides:l}=o.payload;t.signedTransactions[a]!=null&&(t.signedTransactions[a].customTransactionInformation=C(C({},t.signedTransactions[a].customTransactionInformation),l))}},extraReducers:t=>{t.addCase(he,()=>fr),t.addCase(B_.REHYDRATE,(o,a)=>{var y;if(o.signTransactionsCancelMessage=null,!((y=a.payload)!=null&&y.transactions))return;let{signedTransactions:l,customTransactionInformationForSessionId:u}=a.payload.transactions,T=Object.entries(l).reduce((E,[I,N])=>{let G=new Date(I),M=new Date;return M.setHours(M.getHours()+5),M-G>0||(E[I]=N),E},{});u!=null&&(o.customTransactionInformationForSessionId=u),l!=null&&(o.signedTransactions=T)})}}),{updateSignedTransactionStatus:W_,updateSignedTransactions:G_,setTransactionsToSign:p1,clearAllTransactionsToSign:ea,clearAllSignedTransactions:m1,clearSignedTransaction:l1,clearTransactionToSign:J2,setSignTransactionsError:d1,setSignTransactionsCancelMessage:gr,moveTransactionsToSignedState:Wc,updateSignedTransactionsCustomTransactionInformation:Q2}=U_.actions,na=U_.reducer});var H_,Gc,$_,oD,rD,_1,iD,oa,ra=O(()=>{"use strict";i();H_=require("@reduxjs/toolkit");Te();Gc={},$_=(0,H_.createSlice)({name:"batchTransactionsSlice",initialState:Gc,reducers:{setBatchTransactions:(t,o)=>{t[o.payload.id]=o.payload},updateBatchTransactions:(t,o)=>{t[o.payload.id]=o.payload},clearBatchTransactions:(t,o)=>{delete t[o.payload.batchId]},clearAllBatchTransactions:()=>Gc},extraReducers:t=>{t.addCase(he,()=>Gc)}}),{setBatchTransactions:oD,updateBatchTransactions:rD,clearBatchTransactions:_1,clearAllBatchTransactions:iD}=$_.actions,oa=$_.reducer});var q_,V_,z_,pD,K_,Hc=O(()=>{"use strict";i();q_=require("@reduxjs/toolkit");Te();V_={},z_=(0,q_.createSlice)({name:"dappConfigSlice",initialState:V_,reducers:{setDappConfig:(t,o)=>o.payload},extraReducers:t=>{t.addCase(he,()=>V_)}}),{setDappConfig:pD}=z_.actions,K_=z_.reducer});var me=O(()=>{"use strict";i();Gi();$i();qi();Ki();Xi();Zi();Qi();ta();ra();Hc()});var $c=O(()=>{"use strict";i()});var Y_,h1,T1,$t,sa=O(()=>{"use strict";i();Y_=require("@reduxjs/toolkit");$c();Gi();ra();Hc();$i();qi();Ki();Xi();Zi();Qi();ta();h1={["account"]:Wi,["dappConfig"]:K_,["loginInfo"]:Hi,["modals"]:Vi,["networkConfig"]:zi,["signedMessageInfo"]:ji,["toasts"]:Yi,["transactionsInfo"]:Ji,["transactions"]:na,["batchTransactions"]:oa},T1=(t={})=>(0,Y_.combineReducers)(C(C({},h1),t)),$t=T1});var eu={};Pn(eu,{default:()=>D1,sessionStorageReducers:()=>Vc});function tt(t,o=[]){return{key:t,version:1,storage:J_.default,blacklist:o}}var Xe,Z_,J_,x1,hr,y1,S1,b1,w1,v1,A1,I1,L1,k1,E1,Q_,C1,Vc,P1,N1,R1,D1,nu=O(()=>{"use strict";i();Xe=require("redux-persist"),Z_=B(require("redux-persist/lib/storage")),J_=B(require("redux-persist/lib/storage/session"));sa();me();Gi();ra();$i();qi();Ki();Xi();Zi();Qi();ta();$c();x1={persistReducersStorageType:"localStorage"},hr={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},y1=tt(hr["account"]),S1=tt(hr["loginInfo"]),b1=tt(hr["modals"]),w1=tt(hr["networkConfig"]),v1={2:t=>j(C({},t),{networkConfig:Nc})};A1=tt("sdk-dapp-transactionsInfo"),I1=tt("sdk-dapp-transactions",["transactionsToSign"]),L1=tt("sdk-dapp-batchTransactions",["batchTransactions"]),k1=tt("sdk-dapp-toasts"),E1=tt("sdk-dapp-signedMessageInfo"),Q_={key:"sdk-dapp-store",version:2,storage:Z_.default,whitelist:Object.keys(hr),migrate:(0,Xe.createMigrate)(v1,{debug:!1})},C1=j(C({},Q_),{whitelist:[]}),Vc={["toasts"]:(0,Xe.persistReducer)(k1,Yi),["transactions"]:(0,Xe.persistReducer)(I1,na),["transactionsInfo"]:(0,Xe.persistReducer)(A1,Ji),["batchTransactions"]:(0,Xe.persistReducer)(L1,oa),["signedMessageInfo"]:(0,Xe.persistReducer)(E1,ji)},P1=j(C({},Vc),{["account"]:(0,Xe.persistReducer)(y1,Wi),["loginInfo"]:(0,Xe.persistReducer)(S1,Hi),["modals"]:(0,Xe.persistReducer)(b1,Vi),["networkConfig"]:(0,Xe.persistReducer)(w1,zi)}),N1=x1.persistReducersStorageType==="localStorage",R1=N1?(0,Xe.persistReducer)(Q_,$t(Vc)):(0,Xe.persistReducer)(C1,$t(P1)),D1=R1});var tu={};Pn(tu,{default:()=>O1});var O1,ou=O(()=>{"use strict";i();sa();O1=$t()});var ru={};Pn(ru,{default:()=>F1});var gn,M1,F1,iu=O(()=>{"use strict";i();gn=require("redux-persist"),M1=[gn.FLUSH,gn.REHYDRATE,gn.PAUSE,gn.PERSIST,gn.PURGE,gn.REGISTER],F1=M1});var cu={};Pn(cu,{default:()=>su});function su(t){return(0,au.persistStore)(t)}var au,pu=O(()=>{"use strict";i();au=require("redux-persist")});var of=F((n7,tf)=>{i();var DL=typeof c=="object"&&c&&c.Object===Object&&c;tf.exports=DL});var Ar=F((t7,rf)=>{i();var OL=of(),ML=typeof self=="object"&&self&&self.Object===Object&&self,FL=OL||ML||Function("return this")();rf.exports=FL});var ap=F((o7,af)=>{i();var BL=Ar(),UL=BL.Symbol;af.exports=UL});var mf=F((r7,pf)=>{i();var sf=ap(),cf=Object.prototype,WL=cf.hasOwnProperty,GL=cf.toString,Ir=sf?sf.toStringTag:void 0;function HL(t){var o=WL.call(t,Ir),a=t[Ir];try{t[Ir]=void 0;var l=!0}catch(T){}var u=GL.call(t);return l&&(o?t[Ir]=a:delete t[Ir]),u}pf.exports=HL});var df=F((i7,lf)=>{i();var $L=Object.prototype,VL=$L.toString;function qL(t){return VL.call(t)}lf.exports=qL});var sp=F((a7,ff)=>{i();var _f=ap(),zL=mf(),KL=df(),jL="[object Null]",XL="[object Undefined]",uf=_f?_f.toStringTag:void 0;function YL(t){return t==null?t===void 0?XL:jL:uf&&uf in Object(t)?zL(t):KL(t)}ff.exports=YL});var hf=F((s7,gf)=>{i();var ZL=Array.isArray;gf.exports=ZL});var xf=F((c7,Tf)=>{i();function JL(t){return t!=null&&typeof t=="object"}Tf.exports=JL});var Sf=F((p7,yf)=>{i();var QL=sp(),ek=hf(),nk=xf(),tk="[object String]";function ok(t){return typeof t=="string"||!ek(t)&&nk(t)&&QL(t)==tk}yf.exports=ok});var wa=F((cq,Lf)=>{i();function Sk(t){var o=typeof t;return t!=null&&(o=="object"||o=="function")}Lf.exports=Sk});var Ef=F((pq,kf)=>{i();var bk=sp(),wk=wa(),vk="[object AsyncFunction]",Ak="[object Function]",Ik="[object GeneratorFunction]",Lk="[object Proxy]";function kk(t){if(!wk(t))return!1;var o=bk(t);return o==Ak||o==Ik||o==vk||o==Lk}kf.exports=kk});var Pf=F((mq,Cf)=>{i();var Ek=Ar(),Ck=Ek["__core-js_shared__"];Cf.exports=Ck});var Df=F((lq,Rf)=>{i();var mp=Pf(),Nf=function(){var t=/[^.]+$/.exec(mp&&mp.keys&&mp.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Pk(t){return!!Nf&&Nf in t}Rf.exports=Pk});var Mf=F((dq,Of)=>{i();var Nk=Function.prototype,Rk=Nk.toString;function Dk(t){if(t!=null){try{return Rk.call(t)}catch(o){}try{return t+""}catch(o){}}return""}Of.exports=Dk});var Bf=F((_q,Ff)=>{i();var Ok=Ef(),Mk=Df(),Fk=wa(),Bk=Mf(),Uk=/[\\^$.*+?()[\]{}|]/g,Wk=/^\[object .+?Constructor\]$/,Gk=Function.prototype,Hk=Object.prototype,$k=Gk.toString,Vk=Hk.hasOwnProperty,qk=RegExp("^"+$k.call(Vk).replace(Uk,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function zk(t){if(!Fk(t)||Mk(t))return!1;var o=Ok(t)?qk:Wk;return o.test(Bk(t))}Ff.exports=zk});var Wf=F((uq,Uf)=>{i();function Kk(t,o){return t==null?void 0:t[o]}Uf.exports=Kk});var va=F((fq,Gf)=>{i();var jk=Bf(),Xk=Wf();function Yk(t,o){var a=Xk(t,o);return jk(a)?a:void 0}Gf.exports=Yk});var Lr=F((gq,Hf)=>{i();var Zk=va(),Jk=Zk(Object,"create");Hf.exports=Jk});var qf=F((hq,Vf)=>{i();var $f=Lr();function Qk(){this.__data__=$f?$f(null):{},this.size=0}Vf.exports=Qk});var Kf=F((Tq,zf)=>{i();function eE(t){var o=this.has(t)&&delete this.__data__[t];return this.size-=o?1:0,o}zf.exports=eE});var Xf=F((xq,jf)=>{i();var nE=Lr(),tE="__lodash_hash_undefined__",oE=Object.prototype,rE=oE.hasOwnProperty;function iE(t){var o=this.__data__;if(nE){var a=o[t];return a===tE?void 0:a}return rE.call(o,t)?o[t]:void 0}jf.exports=iE});var Zf=F((yq,Yf)=>{i();var aE=Lr(),sE=Object.prototype,cE=sE.hasOwnProperty;function pE(t){var o=this.__data__;return aE?o[t]!==void 0:cE.call(o,t)}Yf.exports=pE});var Qf=F((Sq,Jf)=>{i();var mE=Lr(),lE="__lodash_hash_undefined__";function dE(t,o){var a=this.__data__;return this.size+=this.has(t)?0:1,a[t]=mE&&o===void 0?lE:o,this}Jf.exports=dE});var ng=F((bq,eg)=>{i();var _E=qf(),uE=Kf(),fE=Xf(),gE=Zf(),hE=Qf();function No(t){var o=-1,a=t==null?0:t.length;for(this.clear();++o<a;){var l=t[o];this.set(l[0],l[1])}}No.prototype.clear=_E;No.prototype.delete=uE;No.prototype.get=fE;No.prototype.has=gE;No.prototype.set=hE;eg.exports=No});var og=F((wq,tg)=>{i();function TE(){this.__data__=[],this.size=0}tg.exports=TE});var ig=F((vq,rg)=>{i();function xE(t,o){return t===o||t!==t&&o!==o}rg.exports=xE});var kr=F((Aq,ag)=>{i();var yE=ig();function SE(t,o){for(var a=t.length;a--;)if(yE(t[a][0],o))return a;return-1}ag.exports=SE});var cg=F((Iq,sg)=>{i();var bE=kr(),wE=Array.prototype,vE=wE.splice;function AE(t){var o=this.__data__,a=bE(o,t);if(a<0)return!1;var l=o.length-1;return a==l?o.pop():vE.call(o,a,1),--this.size,!0}sg.exports=AE});var mg=F((Lq,pg)=>{i();var IE=kr();function LE(t){var o=this.__data__,a=IE(o,t);return a<0?void 0:o[a][1]}pg.exports=LE});var dg=F((kq,lg)=>{i();var kE=kr();function EE(t){return kE(this.__data__,t)>-1}lg.exports=EE});var ug=F((Eq,_g)=>{i();var CE=kr();function PE(t,o){var a=this.__data__,l=CE(a,t);return l<0?(++this.size,a.push([t,o])):a[l][1]=o,this}_g.exports=PE});var gg=F((Cq,fg)=>{i();var NE=og(),RE=cg(),DE=mg(),OE=dg(),ME=ug();function Ro(t){var o=-1,a=t==null?0:t.length;for(this.clear();++o<a;){var l=t[o];this.set(l[0],l[1])}}Ro.prototype.clear=NE;Ro.prototype.delete=RE;Ro.prototype.get=DE;Ro.prototype.has=OE;Ro.prototype.set=ME;fg.exports=Ro});var Tg=F((Pq,hg)=>{i();var FE=va(),BE=Ar(),UE=FE(BE,"Map");hg.exports=UE});var Sg=F((Nq,yg)=>{i();var xg=ng(),WE=gg(),GE=Tg();function HE(){this.size=0,this.__data__={hash:new xg,map:new(GE||WE),string:new xg}}yg.exports=HE});var wg=F((Rq,bg)=>{i();function $E(t){var o=typeof t;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?t!=="__proto__":t===null}bg.exports=$E});var Er=F((Dq,vg)=>{i();var VE=wg();function qE(t,o){var a=t.__data__;return VE(o)?a[typeof o=="string"?"string":"hash"]:a.map}vg.exports=qE});var Ig=F((Oq,Ag)=>{i();var zE=Er();function KE(t){var o=zE(this,t).delete(t);return this.size-=o?1:0,o}Ag.exports=KE});var kg=F((Mq,Lg)=>{i();var jE=Er();function XE(t){return jE(this,t).get(t)}Lg.exports=XE});var Cg=F((Fq,Eg)=>{i();var YE=Er();function ZE(t){return YE(this,t).has(t)}Eg.exports=ZE});var Ng=F((Bq,Pg)=>{i();var JE=Er();function QE(t,o){var a=JE(this,t),l=a.size;return a.set(t,o),this.size+=a.size==l?0:1,this}Pg.exports=QE});var Dg=F((Uq,Rg)=>{i();var eC=Sg(),nC=Ig(),tC=kg(),oC=Cg(),rC=Ng();function Do(t){var o=-1,a=t==null?0:t.length;for(this.clear();++o<a;){var l=t[o];this.set(l[0],l[1])}}Do.prototype.clear=eC;Do.prototype.delete=nC;Do.prototype.get=tC;Do.prototype.has=oC;Do.prototype.set=rC;Rg.exports=Do});var Mg=F((Wq,Og)=>{i();var iC="__lodash_hash_undefined__";function aC(t){return this.__data__.set(t,iC),this}Og.exports=aC});var Bg=F((Gq,Fg)=>{i();function sC(t){return this.__data__.has(t)}Fg.exports=sC});var Wg=F((Hq,Ug)=>{i();var cC=Dg(),pC=Mg(),mC=Bg();function Aa(t){var o=-1,a=t==null?0:t.length;for(this.__data__=new cC;++o<a;)this.add(t[o])}Aa.prototype.add=Aa.prototype.push=pC;Aa.prototype.has=mC;Ug.exports=Aa});var Hg=F(($q,Gg)=>{i();function lC(t,o,a,l){for(var u=t.length,T=a+(l?1:-1);l?T--:++T<u;)if(o(t[T],T,t))return T;return-1}Gg.exports=lC});var Vg=F((Vq,$g)=>{i();function dC(t){return t!==t}$g.exports=dC});var zg=F((qq,qg)=>{i();function _C(t,o,a){for(var l=a-1,u=t.length;++l<u;)if(t[l]===o)return l;return-1}qg.exports=_C});var jg=F((zq,Kg)=>{i();var uC=Hg(),fC=Vg(),gC=zg();function hC(t,o,a){return o===o?gC(t,o,a):uC(t,fC,a)}Kg.exports=hC});var Yg=F((Kq,Xg)=>{i();var TC=jg();function xC(t,o){var a=t==null?0:t.length;return!!a&&TC(t,o,0)>-1}Xg.exports=xC});var Jg=F((jq,Zg)=>{i();function yC(t,o,a){for(var l=-1,u=t==null?0:t.length;++l<u;)if(a(o,t[l]))return!0;return!1}Zg.exports=yC});var eh=F((Xq,Qg)=>{i();function SC(t,o){return t.has(o)}Qg.exports=SC});var th=F((Yq,nh)=>{i();var bC=va(),wC=Ar(),vC=bC(wC,"Set");nh.exports=vC});var rh=F((Zq,oh)=>{i();function AC(){}oh.exports=AC});var lp=F((Jq,ih)=>{i();function IC(t){var o=-1,a=Array(t.size);return t.forEach(function(l){a[++o]=l}),a}ih.exports=IC});var sh=F((Qq,ah)=>{i();var dp=th(),LC=rh(),kC=lp(),EC=1/0,CC=dp&&1/kC(new dp([,-0]))[1]==EC?function(t){return new dp(t)}:LC;ah.exports=CC});var ph=F((ez,ch)=>{i();var PC=Wg(),NC=Yg(),RC=Jg(),DC=eh(),OC=sh(),MC=lp(),FC=200;function BC(t,o,a){var l=-1,u=NC,T=t.length,y=!0,E=[],I=E;if(a)y=!1,u=RC;else if(T>=FC){var N=o?null:OC(t);if(N)return MC(N);y=!1,u=DC,I=new PC}else I=o?[]:E;e:for(;++l<T;){var G=t[l],M=o?o(G):G;if(G=a||G!==0?G:0,y&&M===M){for(var ae=I.length;ae--;)if(I[ae]===M)continue e;o&&I.push(M),E.push(G)}else u(I,M,a)||(I!==E&&I.push(M),E.push(G))}return E}ch.exports=BC});var lh=F((nz,mh)=>{i();var UC=ph();function WC(t){return t&&t.length?UC(t):[]}mh.exports=WC});var rt={};Pn(rt,{css:()=>bh,default:()=>bP});var bh,bP,it=O(()=>{"use strict";i();bh=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bh));bP={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Oh=F((Bo,Rr)=>{i();(function(){var t,o="4.17.21",a=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",T="Invalid `variable` option passed into `_.template`",y="__lodash_hash_undefined__",E=500,I="__lodash_placeholder__",N=1,G=2,M=4,ae=1,ee=2,ce=1,Ce=2,wt=4,Ge=8,In=16,He=32,Ie=64,hn=128,vt=256,Uo=512,La=30,ka="...",Ea=800,Wh=16,vp=1,Gh=2,Hh=3,At=1/0,st=9007199254740991,$h=17976931348623157e292,Dr=0/0,Ln=4294967295,Vh=Ln-1,qh=Ln>>>1,zh=[["ary",hn],["bind",ce],["bindKey",Ce],["curry",Ge],["curryRight",In],["flip",Uo],["partial",He],["partialRight",Ie],["rearg",vt]],Xt="[object Arguments]",Or="[object Array]",Kh="[object AsyncFunction]",Wo="[object Boolean]",Go="[object Date]",jh="[object DOMException]",Mr="[object Error]",Fr="[object Function]",Ap="[object GeneratorFunction]",Tn="[object Map]",Ho="[object Number]",Xh="[object Null]",Hn="[object Object]",Ip="[object Promise]",Yh="[object Proxy]",$o="[object RegExp]",xn="[object Set]",Vo="[object String]",Br="[object Symbol]",Zh="[object Undefined]",qo="[object WeakMap]",Jh="[object WeakSet]",zo="[object ArrayBuffer]",Yt="[object DataView]",Ca="[object Float32Array]",Pa="[object Float64Array]",Na="[object Int8Array]",Ra="[object Int16Array]",Da="[object Int32Array]",Oa="[object Uint8Array]",Ma="[object Uint8ClampedArray]",Fa="[object Uint16Array]",Ba="[object Uint32Array]",Qh=/\b__p \+= '';/g,eT=/\b(__p \+=) '' \+/g,nT=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Lp=/&(?:amp|lt|gt|quot|#39);/g,kp=/[&<>"']/g,tT=RegExp(Lp.source),oT=RegExp(kp.source),rT=/<%-([\s\S]+?)%>/g,iT=/<%([\s\S]+?)%>/g,Ep=/<%=([\s\S]+?)%>/g,aT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sT=/^\w*$/,cT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ua=/[\\^$.*+?()[\]{}|]/g,pT=RegExp(Ua.source),Wa=/^\s+/,mT=/\s/,lT=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,dT=/\{\n\/\* \[wrapped with (.+)\] \*/,_T=/,? & /,uT=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fT=/[()=,{}\[\]\/\s]/,gT=/\\(\\)?/g,hT=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Cp=/\w*$/,TT=/^[-+]0x[0-9a-f]+$/i,xT=/^0b[01]+$/i,yT=/^\[object .+?Constructor\]$/,ST=/^0o[0-7]+$/i,bT=/^(?:0|[1-9]\d*)$/,wT=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ur=/($^)/,vT=/['\n\r\u2028\u2029\\]/g,Wr="\\ud800-\\udfff",AT="\\u0300-\\u036f",IT="\\ufe20-\\ufe2f",LT="\\u20d0-\\u20ff",Pp=AT+IT+LT,Np="\\u2700-\\u27bf",Rp="a-z\\xdf-\\xf6\\xf8-\\xff",kT="\\xac\\xb1\\xd7\\xf7",ET="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",CT="\\u2000-\\u206f",PT=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dp="A-Z\\xc0-\\xd6\\xd8-\\xde",Op="\\ufe0e\\ufe0f",Mp=kT+ET+CT+PT,Ga="['\u2019]",NT="["+Wr+"]",Fp="["+Mp+"]",Gr="["+Pp+"]",Bp="\\d+",RT="["+Np+"]",Up="["+Rp+"]",Wp="[^"+Wr+Mp+Bp+Np+Rp+Dp+"]",Ha="\\ud83c[\\udffb-\\udfff]",DT="(?:"+Gr+"|"+Ha+")",Gp="[^"+Wr+"]",$a="(?:\\ud83c[\\udde6-\\uddff]){2}",Va="[\\ud800-\\udbff][\\udc00-\\udfff]",Zt="["+Dp+"]",Hp="\\u200d",$p="(?:"+Up+"|"+Wp+")",OT="(?:"+Zt+"|"+Wp+")",Vp="(?:"+Ga+"(?:d|ll|m|re|s|t|ve))?",qp="(?:"+Ga+"(?:D|LL|M|RE|S|T|VE))?",zp=DT+"?",Kp="["+Op+"]?",MT="(?:"+Hp+"(?:"+[Gp,$a,Va].join("|")+")"+Kp+zp+")*",FT="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",BT="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",jp=Kp+zp+MT,UT="(?:"+[RT,$a,Va].join("|")+")"+jp,WT="(?:"+[Gp+Gr+"?",Gr,$a,Va,NT].join("|")+")",GT=RegExp(Ga,"g"),HT=RegExp(Gr,"g"),qa=RegExp(Ha+"(?="+Ha+")|"+WT+jp,"g"),$T=RegExp([Zt+"?"+Up+"+"+Vp+"(?="+[Fp,Zt,"$"].join("|")+")",OT+"+"+qp+"(?="+[Fp,Zt+$p,"$"].join("|")+")",Zt+"?"+$p+"+"+Vp,Zt+"+"+qp,BT,FT,Bp,UT].join("|"),"g"),VT=RegExp("["+Hp+Wr+Pp+Op+"]"),qT=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,zT=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],KT=-1,de={};de[Ca]=de[Pa]=de[Na]=de[Ra]=de[Da]=de[Oa]=de[Ma]=de[Fa]=de[Ba]=!0,de[Xt]=de[Or]=de[zo]=de[Wo]=de[Yt]=de[Go]=de[Mr]=de[Fr]=de[Tn]=de[Ho]=de[Hn]=de[$o]=de[xn]=de[Vo]=de[qo]=!1;var le={};le[Xt]=le[Or]=le[zo]=le[Yt]=le[Wo]=le[Go]=le[Ca]=le[Pa]=le[Na]=le[Ra]=le[Da]=le[Tn]=le[Ho]=le[Hn]=le[$o]=le[xn]=le[Vo]=le[Br]=le[Oa]=le[Ma]=le[Fa]=le[Ba]=!0,le[Mr]=le[Fr]=le[qo]=!1;var jT={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},XT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},YT={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ZT={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},JT=parseFloat,QT=parseInt,Xp=typeof c=="object"&&c&&c.Object===Object&&c,ex=typeof self=="object"&&self&&self.Object===Object&&self,Le=Xp||ex||Function("return this")(),za=typeof Bo=="object"&&Bo&&!Bo.nodeType&&Bo,It=za&&typeof Rr=="object"&&Rr&&!Rr.nodeType&&Rr,Yp=It&&It.exports===za,Ka=Yp&&Xp.process,sn=function(){try{var x=It&&It.require&&It.require("util").types;return x||Ka&&Ka.binding&&Ka.binding("util")}catch(w){}}(),Zp=sn&&sn.isArrayBuffer,Jp=sn&&sn.isDate,Qp=sn&&sn.isMap,em=sn&&sn.isRegExp,nm=sn&&sn.isSet,tm=sn&&sn.isTypedArray;function Ze(x,w,b){switch(b.length){case 0:return x.call(w);case 1:return x.call(w,b[0]);case 2:return x.call(w,b[0],b[1]);case 3:return x.call(w,b[0],b[1],b[2])}return x.apply(w,b)}function nx(x,w,b,D){for(var q=-1,re=x==null?0:x.length;++q<re;){var ve=x[q];w(D,ve,b(ve),x)}return D}function cn(x,w){for(var b=-1,D=x==null?0:x.length;++b<D&&w(x[b],b,x)!==!1;);return x}function tx(x,w){for(var b=x==null?0:x.length;b--&&w(x[b],b,x)!==!1;);return x}function om(x,w){for(var b=-1,D=x==null?0:x.length;++b<D;)if(!w(x[b],b,x))return!1;return!0}function ct(x,w){for(var b=-1,D=x==null?0:x.length,q=0,re=[];++b<D;){var ve=x[b];w(ve,b,x)&&(re[q++]=ve)}return re}function Hr(x,w){var b=x==null?0:x.length;return!!b&&Jt(x,w,0)>-1}function ja(x,w,b){for(var D=-1,q=x==null?0:x.length;++D<q;)if(b(w,x[D]))return!0;return!1}function _e(x,w){for(var b=-1,D=x==null?0:x.length,q=Array(D);++b<D;)q[b]=w(x[b],b,x);return q}function pt(x,w){for(var b=-1,D=w.length,q=x.length;++b<D;)x[q+b]=w[b];return x}function Xa(x,w,b,D){var q=-1,re=x==null?0:x.length;for(D&&re&&(b=x[++q]);++q<re;)b=w(b,x[q],q,x);return b}function ox(x,w,b,D){var q=x==null?0:x.length;for(D&&q&&(b=x[--q]);q--;)b=w(b,x[q],q,x);return b}function Ya(x,w){for(var b=-1,D=x==null?0:x.length;++b<D;)if(w(x[b],b,x))return!0;return!1}var rx=Za("length");function ix(x){return x.split("")}function ax(x){return x.match(uT)||[]}function rm(x,w,b){var D;return b(x,function(q,re,ve){if(w(q,re,ve))return D=re,!1}),D}function $r(x,w,b,D){for(var q=x.length,re=b+(D?1:-1);D?re--:++re<q;)if(w(x[re],re,x))return re;return-1}function Jt(x,w,b){return w===w?Tx(x,w,b):$r(x,im,b)}function sx(x,w,b,D){for(var q=b-1,re=x.length;++q<re;)if(D(x[q],w))return q;return-1}function im(x){return x!==x}function am(x,w){var b=x==null?0:x.length;return b?Qa(x,w)/b:Dr}function Za(x){return function(w){return w==null?t:w[x]}}function Ja(x){return function(w){return x==null?t:x[w]}}function sm(x,w,b,D,q){return q(x,function(re,ve,pe){b=D?(D=!1,re):w(b,re,ve,pe)}),b}function cx(x,w){var b=x.length;for(x.sort(w);b--;)x[b]=x[b].value;return x}function Qa(x,w){for(var b,D=-1,q=x.length;++D<q;){var re=w(x[D]);re!==t&&(b=b===t?re:b+re)}return b}function es(x,w){for(var b=-1,D=Array(x);++b<x;)D[b]=w(b);return D}function px(x,w){return _e(w,function(b){return[b,x[b]]})}function cm(x){return x&&x.slice(0,dm(x)+1).replace(Wa,"")}function Je(x){return function(w){return x(w)}}function ns(x,w){return _e(w,function(b){return x[b]})}function Ko(x,w){return x.has(w)}function pm(x,w){for(var b=-1,D=x.length;++b<D&&Jt(w,x[b],0)>-1;);return b}function mm(x,w){for(var b=x.length;b--&&Jt(w,x[b],0)>-1;);return b}function mx(x,w){for(var b=x.length,D=0;b--;)x[b]===w&&++D;return D}var lx=Ja(jT),dx=Ja(XT);function _x(x){return"\\"+ZT[x]}function ux(x,w){return x==null?t:x[w]}function Qt(x){return VT.test(x)}function fx(x){return qT.test(x)}function gx(x){for(var w,b=[];!(w=x.next()).done;)b.push(w.value);return b}function ts(x){var w=-1,b=Array(x.size);return x.forEach(function(D,q){b[++w]=[q,D]}),b}function lm(x,w){return function(b){return x(w(b))}}function mt(x,w){for(var b=-1,D=x.length,q=0,re=[];++b<D;){var ve=x[b];(ve===w||ve===I)&&(x[b]=I,re[q++]=b)}return re}function Vr(x){var w=-1,b=Array(x.size);return x.forEach(function(D){b[++w]=D}),b}function hx(x){var w=-1,b=Array(x.size);return x.forEach(function(D){b[++w]=[D,D]}),b}function Tx(x,w,b){for(var D=b-1,q=x.length;++D<q;)if(x[D]===w)return D;return-1}function xx(x,w,b){for(var D=b+1;D--;)if(x[D]===w)return D;return D}function eo(x){return Qt(x)?Sx(x):rx(x)}function yn(x){return Qt(x)?bx(x):ix(x)}function dm(x){for(var w=x.length;w--&&mT.test(x.charAt(w)););return w}var yx=Ja(YT);function Sx(x){for(var w=qa.lastIndex=0;qa.test(x);)++w;return w}function bx(x){return x.match(qa)||[]}function wx(x){return x.match($T)||[]}var vx=function x(w){w=w==null?Le:lt.defaults(Le.Object(),w,lt.pick(Le,zT));var b=w.Array,D=w.Date,q=w.Error,re=w.Function,ve=w.Math,pe=w.Object,os=w.RegExp,Ax=w.String,pn=w.TypeError,qr=b.prototype,Ix=re.prototype,no=pe.prototype,zr=w["__core-js_shared__"],Kr=Ix.toString,se=no.hasOwnProperty,Lx=0,_m=function(){var e=/[^.]+$/.exec(zr&&zr.keys&&zr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),jr=no.toString,kx=Kr.call(pe),Ex=Le._,Cx=os("^"+Kr.call(se).replace(Ua,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Xr=Yp?w.Buffer:t,dt=w.Symbol,Yr=w.Uint8Array,um=Xr?Xr.allocUnsafe:t,Zr=lm(pe.getPrototypeOf,pe),fm=pe.create,gm=no.propertyIsEnumerable,Jr=qr.splice,hm=dt?dt.isConcatSpreadable:t,jo=dt?dt.iterator:t,Lt=dt?dt.toStringTag:t,Qr=function(){try{var e=Nt(pe,"defineProperty");return e({},"",{}),e}catch(n){}}(),Px=w.clearTimeout!==Le.clearTimeout&&w.clearTimeout,Nx=D&&D.now!==Le.Date.now&&D.now,Rx=w.setTimeout!==Le.setTimeout&&w.setTimeout,ei=ve.ceil,ni=ve.floor,rs=pe.getOwnPropertySymbols,Dx=Xr?Xr.isBuffer:t,Tm=w.isFinite,Ox=qr.join,Mx=lm(pe.keys,pe),Ae=ve.max,De=ve.min,Fx=D.now,Bx=w.parseInt,xm=ve.random,Ux=qr.reverse,is=Nt(w,"DataView"),Xo=Nt(w,"Map"),as=Nt(w,"Promise"),to=Nt(w,"Set"),Yo=Nt(w,"WeakMap"),Zo=Nt(pe,"create"),ti=Yo&&new Yo,oo={},Wx=Rt(is),Gx=Rt(Xo),Hx=Rt(as),$x=Rt(to),Vx=Rt(Yo),oi=dt?dt.prototype:t,Jo=oi?oi.valueOf:t,ym=oi?oi.toString:t;function _(e){if(ge(e)&&!z(e)&&!(e instanceof ne)){if(e instanceof mn)return e;if(se.call(e,"__wrapped__"))return Sl(e)}return new mn(e)}var ro=function(){function e(){}return function(n){if(!fe(n))return{};if(fm)return fm(n);e.prototype=n;var r=new e;return e.prototype=t,r}}();function ri(){}function mn(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=t}_.templateSettings={escape:rT,evaluate:iT,interpolate:Ep,variable:"",imports:{_}},_.prototype=ri.prototype,_.prototype.constructor=_,mn.prototype=ro(ri.prototype),mn.prototype.constructor=mn;function ne(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ln,this.__views__=[]}function qx(){var e=new ne(this.__wrapped__);return e.__actions__=$e(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=$e(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=$e(this.__views__),e}function zx(){if(this.__filtered__){var e=new ne(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Kx(){var e=this.__wrapped__.value(),n=this.__dir__,r=z(e),s=n<0,d=r?e.length:0,f=i0(0,d,this.__views__),g=f.start,h=f.end,S=h-g,A=s?h:g-1,L=this.__iteratees__,k=L.length,P=0,W=De(S,this.__takeCount__);if(!r||!s&&d==S&&W==S)return Vm(e,this.__actions__);var $=[];e:for(;S--&&P<W;){A+=n;for(var X=-1,V=e[A];++X<k;){var Z=L[X],oe=Z.iteratee,nn=Z.type,We=oe(V);if(nn==Gh)V=We;else if(!We){if(nn==vp)continue e;break e}}$[P++]=V}return $}ne.prototype=ro(ri.prototype),ne.prototype.constructor=ne;function kt(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function jx(){this.__data__=Zo?Zo(null):{},this.size=0}function Xx(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function Yx(e){var n=this.__data__;if(Zo){var r=n[e];return r===y?t:r}return se.call(n,e)?n[e]:t}function Zx(e){var n=this.__data__;return Zo?n[e]!==t:se.call(n,e)}function Jx(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Zo&&n===t?y:n,this}kt.prototype.clear=jx,kt.prototype.delete=Xx,kt.prototype.get=Yx,kt.prototype.has=Zx,kt.prototype.set=Jx;function $n(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function Qx(){this.__data__=[],this.size=0}function ey(e){var n=this.__data__,r=ii(n,e);if(r<0)return!1;var s=n.length-1;return r==s?n.pop():Jr.call(n,r,1),--this.size,!0}function ny(e){var n=this.__data__,r=ii(n,e);return r<0?t:n[r][1]}function ty(e){return ii(this.__data__,e)>-1}function oy(e,n){var r=this.__data__,s=ii(r,e);return s<0?(++this.size,r.push([e,n])):r[s][1]=n,this}$n.prototype.clear=Qx,$n.prototype.delete=ey,$n.prototype.get=ny,$n.prototype.has=ty,$n.prototype.set=oy;function Vn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function ry(){this.size=0,this.__data__={hash:new kt,map:new(Xo||$n),string:new kt}}function iy(e){var n=hi(this,e).delete(e);return this.size-=n?1:0,n}function ay(e){return hi(this,e).get(e)}function sy(e){return hi(this,e).has(e)}function cy(e,n){var r=hi(this,e),s=r.size;return r.set(e,n),this.size+=r.size==s?0:1,this}Vn.prototype.clear=ry,Vn.prototype.delete=iy,Vn.prototype.get=ay,Vn.prototype.has=sy,Vn.prototype.set=cy;function Et(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Vn;++n<r;)this.add(e[n])}function py(e){return this.__data__.set(e,y),this}function my(e){return this.__data__.has(e)}Et.prototype.add=Et.prototype.push=py,Et.prototype.has=my;function Sn(e){var n=this.__data__=new $n(e);this.size=n.size}function ly(){this.__data__=new $n,this.size=0}function dy(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function _y(e){return this.__data__.get(e)}function uy(e){return this.__data__.has(e)}function fy(e,n){var r=this.__data__;if(r instanceof $n){var s=r.__data__;if(!Xo||s.length<a-1)return s.push([e,n]),this.size=++r.size,this;r=this.__data__=new Vn(s)}return r.set(e,n),this.size=r.size,this}Sn.prototype.clear=ly,Sn.prototype.delete=dy,Sn.prototype.get=_y,Sn.prototype.has=uy,Sn.prototype.set=fy;function Sm(e,n){var r=z(e),s=!r&&Dt(e),d=!r&&!s&&ht(e),f=!r&&!s&&!d&&co(e),g=r||s||d||f,h=g?es(e.length,Ax):[],S=h.length;for(var A in e)(n||se.call(e,A))&&!(g&&(A=="length"||d&&(A=="offset"||A=="parent")||f&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||jn(A,S)))&&h.push(A);return h}function bm(e){var n=e.length;return n?e[hs(0,n-1)]:t}function gy(e,n){return Ti($e(e),Ct(n,0,e.length))}function hy(e){return Ti($e(e))}function ss(e,n,r){(r!==t&&!bn(e[n],r)||r===t&&!(n in e))&&qn(e,n,r)}function Qo(e,n,r){var s=e[n];(!(se.call(e,n)&&bn(s,r))||r===t&&!(n in e))&&qn(e,n,r)}function ii(e,n){for(var r=e.length;r--;)if(bn(e[r][0],n))return r;return-1}function Ty(e,n,r,s){return _t(e,function(d,f,g){n(s,d,r(d),g)}),s}function wm(e,n){return e&&En(n,ke(n),e)}function xy(e,n){return e&&En(n,qe(n),e)}function qn(e,n,r){n=="__proto__"&&Qr?Qr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function cs(e,n){for(var r=-1,s=n.length,d=b(s),f=e==null;++r<s;)d[r]=f?t:Hs(e,n[r]);return d}function Ct(e,n,r){return e===e&&(r!==t&&(e=e<=r?e:r),n!==t&&(e=e>=n?e:n)),e}function ln(e,n,r,s,d,f){var g,h=n&N,S=n&G,A=n&M;if(r&&(g=d?r(e,s,d,f):r(e)),g!==t)return g;if(!fe(e))return e;var L=z(e);if(L){if(g=s0(e),!h)return $e(e,g)}else{var k=Oe(e),P=k==Fr||k==Ap;if(ht(e))return Km(e,h);if(k==Hn||k==Xt||P&&!d){if(g=S||P?{}:dl(e),!h)return S?Yy(e,xy(g,e)):Xy(e,wm(g,e))}else{if(!le[k])return d?e:{};g=c0(e,k,h)}}f||(f=new Sn);var W=f.get(e);if(W)return W;f.set(e,g),Gl(e)?e.forEach(function(V){g.add(ln(V,n,r,V,e,f))}):Ul(e)&&e.forEach(function(V,Z){g.set(Z,ln(V,n,r,Z,e,f))});var $=A?S?ks:Ls:S?qe:ke,X=L?t:$(e);return cn(X||e,function(V,Z){X&&(Z=V,V=e[Z]),Qo(g,Z,ln(V,n,r,Z,e,f))}),g}function yy(e){var n=ke(e);return function(r){return vm(r,e,n)}}function vm(e,n,r){var s=r.length;if(e==null)return!s;for(e=pe(e);s--;){var d=r[s],f=n[d],g=e[d];if(g===t&&!(d in e)||!f(g))return!1}return!0}function Am(e,n,r){if(typeof e!="function")throw new pn(u);return ar(function(){e.apply(t,r)},n)}function er(e,n,r,s){var d=-1,f=Hr,g=!0,h=e.length,S=[],A=n.length;if(!h)return S;r&&(n=_e(n,Je(r))),s?(f=ja,g=!1):n.length>=a&&(f=Ko,g=!1,n=new Et(n));e:for(;++d<h;){var L=e[d],k=r==null?L:r(L);if(L=s||L!==0?L:0,g&&k===k){for(var P=A;P--;)if(n[P]===k)continue e;S.push(L)}else f(n,k,s)||S.push(L)}return S}var _t=Jm(kn),Im=Jm(ms,!0);function Sy(e,n){var r=!0;return _t(e,function(s,d,f){return r=!!n(s,d,f),r}),r}function ai(e,n,r){for(var s=-1,d=e.length;++s<d;){var f=e[s],g=n(f);if(g!=null&&(h===t?g===g&&!en(g):r(g,h)))var h=g,S=f}return S}function by(e,n,r,s){var d=e.length;for(r=K(r),r<0&&(r=-r>d?0:d+r),s=s===t||s>d?d:K(s),s<0&&(s+=d),s=r>s?0:$l(s);r<s;)e[r++]=n;return e}function Lm(e,n){var r=[];return _t(e,function(s,d,f){n(s,d,f)&&r.push(s)}),r}function Pe(e,n,r,s,d){var f=-1,g=e.length;for(r||(r=m0),d||(d=[]);++f<g;){var h=e[f];n>0&&r(h)?n>1?Pe(h,n-1,r,s,d):pt(d,h):s||(d[d.length]=h)}return d}var ps=Qm(),km=Qm(!0);function kn(e,n){return e&&ps(e,n,ke)}function ms(e,n){return e&&km(e,n,ke)}function si(e,n){return ct(n,function(r){return Xn(e[r])})}function Pt(e,n){n=ft(n,e);for(var r=0,s=n.length;e!=null&&r<s;)e=e[Cn(n[r++])];return r&&r==s?e:t}function Em(e,n,r){var s=n(e);return z(e)?s:pt(s,r(e))}function Be(e){return e==null?e===t?Zh:Xh:Lt&&Lt in pe(e)?r0(e):h0(e)}function ls(e,n){return e>n}function wy(e,n){return e!=null&&se.call(e,n)}function vy(e,n){return e!=null&&n in pe(e)}function Ay(e,n,r){return e>=De(n,r)&&e<Ae(n,r)}function ds(e,n,r){for(var s=r?ja:Hr,d=e[0].length,f=e.length,g=f,h=b(f),S=1/0,A=[];g--;){var L=e[g];g&&n&&(L=_e(L,Je(n))),S=De(L.length,S),h[g]=!r&&(n||d>=120&&L.length>=120)?new Et(g&&L):t}L=e[0];var k=-1,P=h[0];e:for(;++k<d&&A.length<S;){var W=L[k],$=n?n(W):W;if(W=r||W!==0?W:0,!(P?Ko(P,$):s(A,$,r))){for(g=f;--g;){var X=h[g];if(!(X?Ko(X,$):s(e[g],$,r)))continue e}P&&P.push($),A.push(W)}}return A}function Iy(e,n,r,s){return kn(e,function(d,f,g){n(s,r(d),f,g)}),s}function nr(e,n,r){n=ft(n,e),e=gl(e,n);var s=e==null?e:e[Cn(_n(n))];return s==null?t:Ze(s,e,r)}function Cm(e){return ge(e)&&Be(e)==Xt}function Ly(e){return ge(e)&&Be(e)==zo}function ky(e){return ge(e)&&Be(e)==Go}function tr(e,n,r,s,d){return e===n?!0:e==null||n==null||!ge(e)&&!ge(n)?e!==e&&n!==n:Ey(e,n,r,s,tr,d)}function Ey(e,n,r,s,d,f){var g=z(e),h=z(n),S=g?Or:Oe(e),A=h?Or:Oe(n);S=S==Xt?Hn:S,A=A==Xt?Hn:A;var L=S==Hn,k=A==Hn,P=S==A;if(P&&ht(e)){if(!ht(n))return!1;g=!0,L=!1}if(P&&!L)return f||(f=new Sn),g||co(e)?pl(e,n,r,s,d,f):t0(e,n,S,r,s,d,f);if(!(r&ae)){var W=L&&se.call(e,"__wrapped__"),$=k&&se.call(n,"__wrapped__");if(W||$){var X=W?e.value():e,V=$?n.value():n;return f||(f=new Sn),d(X,V,r,s,f)}}return P?(f||(f=new Sn),o0(e,n,r,s,d,f)):!1}function Cy(e){return ge(e)&&Oe(e)==Tn}function _s(e,n,r,s){var d=r.length,f=d,g=!s;if(e==null)return!f;for(e=pe(e);d--;){var h=r[d];if(g&&h[2]?h[1]!==e[h[0]]:!(h[0]in e))return!1}for(;++d<f;){h=r[d];var S=h[0],A=e[S],L=h[1];if(g&&h[2]){if(A===t&&!(S in e))return!1}else{var k=new Sn;if(s)var P=s(A,L,S,e,n,k);if(!(P===t?tr(L,A,ae|ee,s,k):P))return!1}}return!0}function Pm(e){if(!fe(e)||d0(e))return!1;var n=Xn(e)?Cx:yT;return n.test(Rt(e))}function Py(e){return ge(e)&&Be(e)==$o}function Ny(e){return ge(e)&&Oe(e)==xn}function Ry(e){return ge(e)&&vi(e.length)&&!!de[Be(e)]}function Nm(e){return typeof e=="function"?e:e==null?ze:typeof e=="object"?z(e)?Om(e[0],e[1]):Dm(e):ed(e)}function us(e){if(!ir(e))return Mx(e);var n=[];for(var r in pe(e))se.call(e,r)&&r!="constructor"&&n.push(r);return n}function Dy(e){if(!fe(e))return g0(e);var n=ir(e),r=[];for(var s in e)s=="constructor"&&(n||!se.call(e,s))||r.push(s);return r}function fs(e,n){return e<n}function Rm(e,n){var r=-1,s=Ve(e)?b(e.length):[];return _t(e,function(d,f,g){s[++r]=n(d,f,g)}),s}function Dm(e){var n=Cs(e);return n.length==1&&n[0][2]?ul(n[0][0],n[0][1]):function(r){return r===e||_s(r,e,n)}}function Om(e,n){return Ns(e)&&_l(n)?ul(Cn(e),n):function(r){var s=Hs(r,e);return s===t&&s===n?$s(r,e):tr(n,s,ae|ee)}}function ci(e,n,r,s,d){e!==n&&ps(n,function(f,g){if(d||(d=new Sn),fe(f))Oy(e,n,g,r,ci,s,d);else{var h=s?s(Ds(e,g),f,g+"",e,n,d):t;h===t&&(h=f),ss(e,g,h)}},qe)}function Oy(e,n,r,s,d,f,g){var h=Ds(e,r),S=Ds(n,r),A=g.get(S);if(A){ss(e,r,A);return}var L=f?f(h,S,r+"",e,n,g):t,k=L===t;if(k){var P=z(S),W=!P&&ht(S),$=!P&&!W&&co(S);L=S,P||W||$?z(h)?L=h:xe(h)?L=$e(h):W?(k=!1,L=Km(S,!0)):$?(k=!1,L=jm(S,!0)):L=[]:sr(S)||Dt(S)?(L=h,Dt(h)?L=Vl(h):(!fe(h)||Xn(h))&&(L=dl(S))):k=!1}k&&(g.set(S,L),d(L,S,s,f,g),g.delete(S)),ss(e,r,L)}function Mm(e,n){var r=e.length;if(!!r)return n+=n<0?r:0,jn(n,r)?e[n]:t}function Fm(e,n,r){n.length?n=_e(n,function(f){return z(f)?function(g){return Pt(g,f.length===1?f[0]:f)}:f}):n=[ze];var s=-1;n=_e(n,Je(H()));var d=Rm(e,function(f,g,h){var S=_e(n,function(A){return A(f)});return{criteria:S,index:++s,value:f}});return cx(d,function(f,g){return jy(f,g,r)})}function My(e,n){return Bm(e,n,function(r,s){return $s(e,s)})}function Bm(e,n,r){for(var s=-1,d=n.length,f={};++s<d;){var g=n[s],h=Pt(e,g);r(h,g)&&or(f,ft(g,e),h)}return f}function Fy(e){return function(n){return Pt(n,e)}}function gs(e,n,r,s){var d=s?sx:Jt,f=-1,g=n.length,h=e;for(e===n&&(n=$e(n)),r&&(h=_e(e,Je(r)));++f<g;)for(var S=0,A=n[f],L=r?r(A):A;(S=d(h,L,S,s))>-1;)h!==e&&Jr.call(h,S,1),Jr.call(e,S,1);return e}function Um(e,n){for(var r=e?n.length:0,s=r-1;r--;){var d=n[r];if(r==s||d!==f){var f=d;jn(d)?Jr.call(e,d,1):ys(e,d)}}return e}function hs(e,n){return e+ni(xm()*(n-e+1))}function By(e,n,r,s){for(var d=-1,f=Ae(ei((n-e)/(r||1)),0),g=b(f);f--;)g[s?f:++d]=e,e+=r;return g}function Ts(e,n){var r="";if(!e||n<1||n>st)return r;do n%2&&(r+=e),n=ni(n/2),n&&(e+=e);while(n);return r}function Y(e,n){return Os(fl(e,n,ze),e+"")}function Uy(e){return bm(po(e))}function Wy(e,n){var r=po(e);return Ti(r,Ct(n,0,r.length))}function or(e,n,r,s){if(!fe(e))return e;n=ft(n,e);for(var d=-1,f=n.length,g=f-1,h=e;h!=null&&++d<f;){var S=Cn(n[d]),A=r;if(S==="__proto__"||S==="constructor"||S==="prototype")return e;if(d!=g){var L=h[S];A=s?s(L,S,h):t,A===t&&(A=fe(L)?L:jn(n[d+1])?[]:{})}Qo(h,S,A),h=h[S]}return e}var Wm=ti?function(e,n){return ti.set(e,n),e}:ze,Gy=Qr?function(e,n){return Qr(e,"toString",{configurable:!0,enumerable:!1,value:qs(n),writable:!0})}:ze;function Hy(e){return Ti(po(e))}function dn(e,n,r){var s=-1,d=e.length;n<0&&(n=-n>d?0:d+n),r=r>d?d:r,r<0&&(r+=d),d=n>r?0:r-n>>>0,n>>>=0;for(var f=b(d);++s<d;)f[s]=e[s+n];return f}function $y(e,n){var r;return _t(e,function(s,d,f){return r=n(s,d,f),!r}),!!r}function pi(e,n,r){var s=0,d=e==null?s:e.length;if(typeof n=="number"&&n===n&&d<=qh){for(;s<d;){var f=s+d>>>1,g=e[f];g!==null&&!en(g)&&(r?g<=n:g<n)?s=f+1:d=f}return d}return xs(e,n,ze,r)}function xs(e,n,r,s){var d=0,f=e==null?0:e.length;if(f===0)return 0;n=r(n);for(var g=n!==n,h=n===null,S=en(n),A=n===t;d<f;){var L=ni((d+f)/2),k=r(e[L]),P=k!==t,W=k===null,$=k===k,X=en(k);if(g)var V=s||$;else A?V=$&&(s||P):h?V=$&&P&&(s||!W):S?V=$&&P&&!W&&(s||!X):W||X?V=!1:V=s?k<=n:k<n;V?d=L+1:f=L}return De(f,Vh)}function Gm(e,n){for(var r=-1,s=e.length,d=0,f=[];++r<s;){var g=e[r],h=n?n(g):g;if(!r||!bn(h,S)){var S=h;f[d++]=g===0?0:g}}return f}function Hm(e){return typeof e=="number"?e:en(e)?Dr:+e}function Qe(e){if(typeof e=="string")return e;if(z(e))return _e(e,Qe)+"";if(en(e))return ym?ym.call(e):"";var n=e+"";return n=="0"&&1/e==-At?"-0":n}function ut(e,n,r){var s=-1,d=Hr,f=e.length,g=!0,h=[],S=h;if(r)g=!1,d=ja;else if(f>=a){var A=n?null:e0(e);if(A)return Vr(A);g=!1,d=Ko,S=new Et}else S=n?[]:h;e:for(;++s<f;){var L=e[s],k=n?n(L):L;if(L=r||L!==0?L:0,g&&k===k){for(var P=S.length;P--;)if(S[P]===k)continue e;n&&S.push(k),h.push(L)}else d(S,k,r)||(S!==h&&S.push(k),h.push(L))}return h}function ys(e,n){return n=ft(n,e),e=gl(e,n),e==null||delete e[Cn(_n(n))]}function $m(e,n,r,s){return or(e,n,r(Pt(e,n)),s)}function mi(e,n,r,s){for(var d=e.length,f=s?d:-1;(s?f--:++f<d)&&n(e[f],f,e););return r?dn(e,s?0:f,s?f+1:d):dn(e,s?f+1:0,s?d:f)}function Vm(e,n){var r=e;return r instanceof ne&&(r=r.value()),Xa(n,function(s,d){return d.func.apply(d.thisArg,pt([s],d.args))},r)}function Ss(e,n,r){var s=e.length;if(s<2)return s?ut(e[0]):[];for(var d=-1,f=b(s);++d<s;)for(var g=e[d],h=-1;++h<s;)h!=d&&(f[d]=er(f[d]||g,e[h],n,r));return ut(Pe(f,1),n,r)}function qm(e,n,r){for(var s=-1,d=e.length,f=n.length,g={};++s<d;){var h=s<f?n[s]:t;r(g,e[s],h)}return g}function bs(e){return xe(e)?e:[]}function ws(e){return typeof e=="function"?e:ze}function ft(e,n){return z(e)?e:Ns(e,n)?[e]:yl(ie(e))}var Vy=Y;function gt(e,n,r){var s=e.length;return r=r===t?s:r,!n&&r>=s?e:dn(e,n,r)}var zm=Px||function(e){return Le.clearTimeout(e)};function Km(e,n){if(n)return e.slice();var r=e.length,s=um?um(r):new e.constructor(r);return e.copy(s),s}function vs(e){var n=new e.constructor(e.byteLength);return new Yr(n).set(new Yr(e)),n}function qy(e,n){var r=n?vs(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function zy(e){var n=new e.constructor(e.source,Cp.exec(e));return n.lastIndex=e.lastIndex,n}function Ky(e){return Jo?pe(Jo.call(e)):{}}function jm(e,n){var r=n?vs(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Xm(e,n){if(e!==n){var r=e!==t,s=e===null,d=e===e,f=en(e),g=n!==t,h=n===null,S=n===n,A=en(n);if(!h&&!A&&!f&&e>n||f&&g&&S&&!h&&!A||s&&g&&S||!r&&S||!d)return 1;if(!s&&!f&&!A&&e<n||A&&r&&d&&!s&&!f||h&&r&&d||!g&&d||!S)return-1}return 0}function jy(e,n,r){for(var s=-1,d=e.criteria,f=n.criteria,g=d.length,h=r.length;++s<g;){var S=Xm(d[s],f[s]);if(S){if(s>=h)return S;var A=r[s];return S*(A=="desc"?-1:1)}}return e.index-n.index}function Ym(e,n,r,s){for(var d=-1,f=e.length,g=r.length,h=-1,S=n.length,A=Ae(f-g,0),L=b(S+A),k=!s;++h<S;)L[h]=n[h];for(;++d<g;)(k||d<f)&&(L[r[d]]=e[d]);for(;A--;)L[h++]=e[d++];return L}function Zm(e,n,r,s){for(var d=-1,f=e.length,g=-1,h=r.length,S=-1,A=n.length,L=Ae(f-h,0),k=b(L+A),P=!s;++d<L;)k[d]=e[d];for(var W=d;++S<A;)k[W+S]=n[S];for(;++g<h;)(P||d<f)&&(k[W+r[g]]=e[d++]);return k}function $e(e,n){var r=-1,s=e.length;for(n||(n=b(s));++r<s;)n[r]=e[r];return n}function En(e,n,r,s){var d=!r;r||(r={});for(var f=-1,g=n.length;++f<g;){var h=n[f],S=s?s(r[h],e[h],h,r,e):t;S===t&&(S=e[h]),d?qn(r,h,S):Qo(r,h,S)}return r}function Xy(e,n){return En(e,Ps(e),n)}function Yy(e,n){return En(e,ml(e),n)}function li(e,n){return function(r,s){var d=z(r)?nx:Ty,f=n?n():{};return d(r,e,H(s,2),f)}}function io(e){return Y(function(n,r){var s=-1,d=r.length,f=d>1?r[d-1]:t,g=d>2?r[2]:t;for(f=e.length>3&&typeof f=="function"?(d--,f):t,g&&Ue(r[0],r[1],g)&&(f=d<3?t:f,d=1),n=pe(n);++s<d;){var h=r[s];h&&e(n,h,s,f)}return n})}function Jm(e,n){return function(r,s){if(r==null)return r;if(!Ve(r))return e(r,s);for(var d=r.length,f=n?d:-1,g=pe(r);(n?f--:++f<d)&&s(g[f],f,g)!==!1;);return r}}function Qm(e){return function(n,r,s){for(var d=-1,f=pe(n),g=s(n),h=g.length;h--;){var S=g[e?h:++d];if(r(f[S],S,f)===!1)break}return n}}function Zy(e,n,r){var s=n&ce,d=rr(e);function f(){var g=this&&this!==Le&&this instanceof f?d:e;return g.apply(s?r:this,arguments)}return f}function el(e){return function(n){n=ie(n);var r=Qt(n)?yn(n):t,s=r?r[0]:n.charAt(0),d=r?gt(r,1).join(""):n.slice(1);return s[e]()+d}}function ao(e){return function(n){return Xa(Jl(Zl(n).replace(GT,"")),e,"")}}function rr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=ro(e.prototype),s=e.apply(r,n);return fe(s)?s:r}}function Jy(e,n,r){var s=rr(e);function d(){for(var f=arguments.length,g=b(f),h=f,S=so(d);h--;)g[h]=arguments[h];var A=f<3&&g[0]!==S&&g[f-1]!==S?[]:mt(g,S);if(f-=A.length,f<r)return il(e,n,di,d.placeholder,t,g,A,t,t,r-f);var L=this&&this!==Le&&this instanceof d?s:e;return Ze(L,this,g)}return d}function nl(e){return function(n,r,s){var d=pe(n);if(!Ve(n)){var f=H(r,3);n=ke(n),r=function(h){return f(d[h],h,d)}}var g=e(n,r,s);return g>-1?d[f?n[g]:g]:t}}function tl(e){return Kn(function(n){var r=n.length,s=r,d=mn.prototype.thru;for(e&&n.reverse();s--;){var f=n[s];if(typeof f!="function")throw new pn(u);if(d&&!g&&gi(f)=="wrapper")var g=new mn([],!0)}for(s=g?s:r;++s<r;){f=n[s];var h=gi(f),S=h=="wrapper"?Es(f):t;S&&Rs(S[0])&&S[1]==(hn|Ge|He|vt)&&!S[4].length&&S[9]==1?g=g[gi(S[0])].apply(g,S[3]):g=f.length==1&&Rs(f)?g[h]():g.thru(f)}return function(){var A=arguments,L=A[0];if(g&&A.length==1&&z(L))return g.plant(L).value();for(var k=0,P=r?n[k].apply(this,A):L;++k<r;)P=n[k].call(this,P);return P}})}function di(e,n,r,s,d,f,g,h,S,A){var L=n&hn,k=n&ce,P=n&Ce,W=n&(Ge|In),$=n&Uo,X=P?t:rr(e);function V(){for(var Z=arguments.length,oe=b(Z),nn=Z;nn--;)oe[nn]=arguments[nn];if(W)var We=so(V),tn=mx(oe,We);if(s&&(oe=Ym(oe,s,d,W)),f&&(oe=Zm(oe,f,g,W)),Z-=tn,W&&Z<A){var ye=mt(oe,We);return il(e,n,di,V.placeholder,r,oe,ye,h,S,A-Z)}var wn=k?r:this,Zn=P?wn[e]:e;return Z=oe.length,h?oe=T0(oe,h):$&&Z>1&&oe.reverse(),L&&S<Z&&(oe.length=S),this&&this!==Le&&this instanceof V&&(Zn=X||rr(Zn)),Zn.apply(wn,oe)}return V}function ol(e,n){return function(r,s){return Iy(r,e,n(s),{})}}function _i(e,n){return function(r,s){var d;if(r===t&&s===t)return n;if(r!==t&&(d=r),s!==t){if(d===t)return s;typeof r=="string"||typeof s=="string"?(r=Qe(r),s=Qe(s)):(r=Hm(r),s=Hm(s)),d=e(r,s)}return d}}function As(e){return Kn(function(n){return n=_e(n,Je(H())),Y(function(r){var s=this;return e(n,function(d){return Ze(d,s,r)})})})}function ui(e,n){n=n===t?" ":Qe(n);var r=n.length;if(r<2)return r?Ts(n,e):n;var s=Ts(n,ei(e/eo(n)));return Qt(n)?gt(yn(s),0,e).join(""):s.slice(0,e)}function Qy(e,n,r,s){var d=n&ce,f=rr(e);function g(){for(var h=-1,S=arguments.length,A=-1,L=s.length,k=b(L+S),P=this&&this!==Le&&this instanceof g?f:e;++A<L;)k[A]=s[A];for(;S--;)k[A++]=arguments[++h];return Ze(P,d?r:this,k)}return g}function rl(e){return function(n,r,s){return s&&typeof s!="number"&&Ue(n,r,s)&&(r=s=t),n=Yn(n),r===t?(r=n,n=0):r=Yn(r),s=s===t?n<r?1:-1:Yn(s),By(n,r,s,e)}}function fi(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=un(n),r=un(r)),e(n,r)}}function il(e,n,r,s,d,f,g,h,S,A){var L=n&Ge,k=L?g:t,P=L?t:g,W=L?f:t,$=L?t:f;n|=L?He:Ie,n&=~(L?Ie:He),n&wt||(n&=~(ce|Ce));var X=[e,n,d,W,k,$,P,h,S,A],V=r.apply(t,X);return Rs(e)&&hl(V,X),V.placeholder=s,Tl(V,e,n)}function Is(e){var n=ve[e];return function(r,s){if(r=un(r),s=s==null?0:De(K(s),292),s&&Tm(r)){var d=(ie(r)+"e").split("e"),f=n(d[0]+"e"+(+d[1]+s));return d=(ie(f)+"e").split("e"),+(d[0]+"e"+(+d[1]-s))}return n(r)}}var e0=to&&1/Vr(new to([,-0]))[1]==At?function(e){return new to(e)}:js;function al(e){return function(n){var r=Oe(n);return r==Tn?ts(n):r==xn?hx(n):px(n,e(n))}}function zn(e,n,r,s,d,f,g,h){var S=n&Ce;if(!S&&typeof e!="function")throw new pn(u);var A=s?s.length:0;if(A||(n&=~(He|Ie),s=d=t),g=g===t?g:Ae(K(g),0),h=h===t?h:K(h),A-=d?d.length:0,n&Ie){var L=s,k=d;s=d=t}var P=S?t:Es(e),W=[e,n,r,s,d,L,k,f,g,h];if(P&&f0(W,P),e=W[0],n=W[1],r=W[2],s=W[3],d=W[4],h=W[9]=W[9]===t?S?0:e.length:Ae(W[9]-A,0),!h&&n&(Ge|In)&&(n&=~(Ge|In)),!n||n==ce)var $=Zy(e,n,r);else n==Ge||n==In?$=Jy(e,n,h):(n==He||n==(ce|He))&&!d.length?$=Qy(e,n,r,s):$=di.apply(t,W);var X=P?Wm:hl;return Tl(X($,W),e,n)}function sl(e,n,r,s){return e===t||bn(e,no[r])&&!se.call(s,r)?n:e}function cl(e,n,r,s,d,f){return fe(e)&&fe(n)&&(f.set(n,e),ci(e,n,t,cl,f),f.delete(n)),e}function n0(e){return sr(e)?t:e}function pl(e,n,r,s,d,f){var g=r&ae,h=e.length,S=n.length;if(h!=S&&!(g&&S>h))return!1;var A=f.get(e),L=f.get(n);if(A&&L)return A==n&&L==e;var k=-1,P=!0,W=r&ee?new Et:t;for(f.set(e,n),f.set(n,e);++k<h;){var $=e[k],X=n[k];if(s)var V=g?s(X,$,k,n,e,f):s($,X,k,e,n,f);if(V!==t){if(V)continue;P=!1;break}if(W){if(!Ya(n,function(Z,oe){if(!Ko(W,oe)&&($===Z||d($,Z,r,s,f)))return W.push(oe)})){P=!1;break}}else if(!($===X||d($,X,r,s,f))){P=!1;break}}return f.delete(e),f.delete(n),P}function t0(e,n,r,s,d,f,g){switch(r){case Yt:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case zo:return!(e.byteLength!=n.byteLength||!f(new Yr(e),new Yr(n)));case Wo:case Go:case Ho:return bn(+e,+n);case Mr:return e.name==n.name&&e.message==n.message;case $o:case Vo:return e==n+"";case Tn:var h=ts;case xn:var S=s&ae;if(h||(h=Vr),e.size!=n.size&&!S)return!1;var A=g.get(e);if(A)return A==n;s|=ee,g.set(e,n);var L=pl(h(e),h(n),s,d,f,g);return g.delete(e),L;case Br:if(Jo)return Jo.call(e)==Jo.call(n)}return!1}function o0(e,n,r,s,d,f){var g=r&ae,h=Ls(e),S=h.length,A=Ls(n),L=A.length;if(S!=L&&!g)return!1;for(var k=S;k--;){var P=h[k];if(!(g?P in n:se.call(n,P)))return!1}var W=f.get(e),$=f.get(n);if(W&&$)return W==n&&$==e;var X=!0;f.set(e,n),f.set(n,e);for(var V=g;++k<S;){P=h[k];var Z=e[P],oe=n[P];if(s)var nn=g?s(oe,Z,P,n,e,f):s(Z,oe,P,e,n,f);if(!(nn===t?Z===oe||d(Z,oe,r,s,f):nn)){X=!1;break}V||(V=P=="constructor")}if(X&&!V){var We=e.constructor,tn=n.constructor;We!=tn&&"constructor"in e&&"constructor"in n&&!(typeof We=="function"&&We instanceof We&&typeof tn=="function"&&tn instanceof tn)&&(X=!1)}return f.delete(e),f.delete(n),X}function Kn(e){return Os(fl(e,t,vl),e+"")}function Ls(e){return Em(e,ke,Ps)}function ks(e){return Em(e,qe,ml)}var Es=ti?function(e){return ti.get(e)}:js;function gi(e){for(var n=e.name+"",r=oo[n],s=se.call(oo,n)?r.length:0;s--;){var d=r[s],f=d.func;if(f==null||f==e)return d.name}return n}function so(e){var n=se.call(_,"placeholder")?_:e;return n.placeholder}function H(){var e=_.iteratee||zs;return e=e===zs?Nm:e,arguments.length?e(arguments[0],arguments[1]):e}function hi(e,n){var r=e.__data__;return l0(n)?r[typeof n=="string"?"string":"hash"]:r.map}function Cs(e){for(var n=ke(e),r=n.length;r--;){var s=n[r],d=e[s];n[r]=[s,d,_l(d)]}return n}function Nt(e,n){var r=ux(e,n);return Pm(r)?r:t}function r0(e){var n=se.call(e,Lt),r=e[Lt];try{e[Lt]=t;var s=!0}catch(f){}var d=jr.call(e);return s&&(n?e[Lt]=r:delete e[Lt]),d}var Ps=rs?function(e){return e==null?[]:(e=pe(e),ct(rs(e),function(n){return gm.call(e,n)}))}:Xs,ml=rs?function(e){for(var n=[];e;)pt(n,Ps(e)),e=Zr(e);return n}:Xs,Oe=Be;(is&&Oe(new is(new ArrayBuffer(1)))!=Yt||Xo&&Oe(new Xo)!=Tn||as&&Oe(as.resolve())!=Ip||to&&Oe(new to)!=xn||Yo&&Oe(new Yo)!=qo)&&(Oe=function(e){var n=Be(e),r=n==Hn?e.constructor:t,s=r?Rt(r):"";if(s)switch(s){case Wx:return Yt;case Gx:return Tn;case Hx:return Ip;case $x:return xn;case Vx:return qo}return n});function i0(e,n,r){for(var s=-1,d=r.length;++s<d;){var f=r[s],g=f.size;switch(f.type){case"drop":e+=g;break;case"dropRight":n-=g;break;case"take":n=De(n,e+g);break;case"takeRight":e=Ae(e,n-g);break}}return{start:e,end:n}}function a0(e){var n=e.match(dT);return n?n[1].split(_T):[]}function ll(e,n,r){n=ft(n,e);for(var s=-1,d=n.length,f=!1;++s<d;){var g=Cn(n[s]);if(!(f=e!=null&&r(e,g)))break;e=e[g]}return f||++s!=d?f:(d=e==null?0:e.length,!!d&&vi(d)&&jn(g,d)&&(z(e)||Dt(e)))}function s0(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&se.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function dl(e){return typeof e.constructor=="function"&&!ir(e)?ro(Zr(e)):{}}function c0(e,n,r){var s=e.constructor;switch(n){case zo:return vs(e);case Wo:case Go:return new s(+e);case Yt:return qy(e,r);case Ca:case Pa:case Na:case Ra:case Da:case Oa:case Ma:case Fa:case Ba:return jm(e,r);case Tn:return new s;case Ho:case Vo:return new s(e);case $o:return zy(e);case xn:return new s;case Br:return Ky(e)}}function p0(e,n){var r=n.length;if(!r)return e;var s=r-1;return n[s]=(r>1?"& ":"")+n[s],n=n.join(r>2?", ":" "),e.replace(lT,`{
/* [wrapped with `+n+`] */
`)}function m0(e){return z(e)||Dt(e)||!!(hm&&e&&e[hm])}function jn(e,n){var r=typeof e;return n=n==null?st:n,!!n&&(r=="number"||r!="symbol"&&bT.test(e))&&e>-1&&e%1==0&&e<n}function Ue(e,n,r){if(!fe(r))return!1;var s=typeof n;return(s=="number"?Ve(r)&&jn(n,r.length):s=="string"&&n in r)?bn(r[n],e):!1}function Ns(e,n){if(z(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||en(e)?!0:sT.test(e)||!aT.test(e)||n!=null&&e in pe(n)}function l0(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Rs(e){var n=gi(e),r=_[n];if(typeof r!="function"||!(n in ne.prototype))return!1;if(e===r)return!0;var s=Es(r);return!!s&&e===s[0]}function d0(e){return!!_m&&_m in e}var _0=zr?Xn:Ys;function ir(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||no;return e===r}function _l(e){return e===e&&!fe(e)}function ul(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==t||e in pe(r))}}function u0(e){var n=bi(e,function(s){return r.size===E&&r.clear(),s}),r=n.cache;return n}function f0(e,n){var r=e[1],s=n[1],d=r|s,f=d<(ce|Ce|hn),g=s==hn&&r==Ge||s==hn&&r==vt&&e[7].length<=n[8]||s==(hn|vt)&&n[7].length<=n[8]&&r==Ge;if(!(f||g))return e;s&ce&&(e[2]=n[2],d|=r&ce?0:wt);var h=n[3];if(h){var S=e[3];e[3]=S?Ym(S,h,n[4]):h,e[4]=S?mt(e[3],I):n[4]}return h=n[5],h&&(S=e[5],e[5]=S?Zm(S,h,n[6]):h,e[6]=S?mt(e[5],I):n[6]),h=n[7],h&&(e[7]=h),s&hn&&(e[8]=e[8]==null?n[8]:De(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=d,e}function g0(e){var n=[];if(e!=null)for(var r in pe(e))n.push(r);return n}function h0(e){return jr.call(e)}function fl(e,n,r){return n=Ae(n===t?e.length-1:n,0),function(){for(var s=arguments,d=-1,f=Ae(s.length-n,0),g=b(f);++d<f;)g[d]=s[n+d];d=-1;for(var h=b(n+1);++d<n;)h[d]=s[d];return h[n]=r(g),Ze(e,this,h)}}function gl(e,n){return n.length<2?e:Pt(e,dn(n,0,-1))}function T0(e,n){for(var r=e.length,s=De(n.length,r),d=$e(e);s--;){var f=n[s];e[s]=jn(f,r)?d[f]:t}return e}function Ds(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var hl=xl(Wm),ar=Rx||function(e,n){return Le.setTimeout(e,n)},Os=xl(Gy);function Tl(e,n,r){var s=n+"";return Os(e,p0(s,x0(a0(s),r)))}function xl(e){var n=0,r=0;return function(){var s=Fx(),d=Wh-(s-r);if(r=s,d>0){if(++n>=Ea)return arguments[0]}else n=0;return e.apply(t,arguments)}}function Ti(e,n){var r=-1,s=e.length,d=s-1;for(n=n===t?s:n;++r<n;){var f=hs(r,d),g=e[f];e[f]=e[r],e[r]=g}return e.length=n,e}var yl=u0(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(cT,function(r,s,d,f){n.push(d?f.replace(gT,"$1"):s||r)}),n});function Cn(e){if(typeof e=="string"||en(e))return e;var n=e+"";return n=="0"&&1/e==-At?"-0":n}function Rt(e){if(e!=null){try{return Kr.call(e)}catch(n){}try{return e+""}catch(n){}}return""}function x0(e,n){return cn(zh,function(r){var s="_."+r[0];n&r[1]&&!Hr(e,s)&&e.push(s)}),e.sort()}function Sl(e){if(e instanceof ne)return e.clone();var n=new mn(e.__wrapped__,e.__chain__);return n.__actions__=$e(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function y0(e,n,r){(r?Ue(e,n,r):n===t)?n=1:n=Ae(K(n),0);var s=e==null?0:e.length;if(!s||n<1)return[];for(var d=0,f=0,g=b(ei(s/n));d<s;)g[f++]=dn(e,d,d+=n);return g}function S0(e){for(var n=-1,r=e==null?0:e.length,s=0,d=[];++n<r;){var f=e[n];f&&(d[s++]=f)}return d}function b0(){var e=arguments.length;if(!e)return[];for(var n=b(e-1),r=arguments[0],s=e;s--;)n[s-1]=arguments[s];return pt(z(r)?$e(r):[r],Pe(n,1))}var w0=Y(function(e,n){return xe(e)?er(e,Pe(n,1,xe,!0)):[]}),v0=Y(function(e,n){var r=_n(n);return xe(r)&&(r=t),xe(e)?er(e,Pe(n,1,xe,!0),H(r,2)):[]}),A0=Y(function(e,n){var r=_n(n);return xe(r)&&(r=t),xe(e)?er(e,Pe(n,1,xe,!0),t,r):[]});function I0(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===t?1:K(n),dn(e,n<0?0:n,s)):[]}function L0(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===t?1:K(n),n=s-n,dn(e,0,n<0?0:n)):[]}function k0(e,n){return e&&e.length?mi(e,H(n,3),!0,!0):[]}function E0(e,n){return e&&e.length?mi(e,H(n,3),!0):[]}function C0(e,n,r,s){var d=e==null?0:e.length;return d?(r&&typeof r!="number"&&Ue(e,n,r)&&(r=0,s=d),by(e,n,r,s)):[]}function bl(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var d=r==null?0:K(r);return d<0&&(d=Ae(s+d,0)),$r(e,H(n,3),d)}function wl(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var d=s-1;return r!==t&&(d=K(r),d=r<0?Ae(s+d,0):De(d,s-1)),$r(e,H(n,3),d,!0)}function vl(e){var n=e==null?0:e.length;return n?Pe(e,1):[]}function P0(e){var n=e==null?0:e.length;return n?Pe(e,At):[]}function N0(e,n){var r=e==null?0:e.length;return r?(n=n===t?1:K(n),Pe(e,n)):[]}function R0(e){for(var n=-1,r=e==null?0:e.length,s={};++n<r;){var d=e[n];s[d[0]]=d[1]}return s}function Al(e){return e&&e.length?e[0]:t}function D0(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var d=r==null?0:K(r);return d<0&&(d=Ae(s+d,0)),Jt(e,n,d)}function O0(e){var n=e==null?0:e.length;return n?dn(e,0,-1):[]}var M0=Y(function(e){var n=_e(e,bs);return n.length&&n[0]===e[0]?ds(n):[]}),F0=Y(function(e){var n=_n(e),r=_e(e,bs);return n===_n(r)?n=t:r.pop(),r.length&&r[0]===e[0]?ds(r,H(n,2)):[]}),B0=Y(function(e){var n=_n(e),r=_e(e,bs);return n=typeof n=="function"?n:t,n&&r.pop(),r.length&&r[0]===e[0]?ds(r,t,n):[]});function U0(e,n){return e==null?"":Ox.call(e,n)}function _n(e){var n=e==null?0:e.length;return n?e[n-1]:t}function W0(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var d=s;return r!==t&&(d=K(r),d=d<0?Ae(s+d,0):De(d,s-1)),n===n?xx(e,n,d):$r(e,im,d,!0)}function G0(e,n){return e&&e.length?Mm(e,K(n)):t}var H0=Y(Il);function Il(e,n){return e&&e.length&&n&&n.length?gs(e,n):e}function $0(e,n,r){return e&&e.length&&n&&n.length?gs(e,n,H(r,2)):e}function V0(e,n,r){return e&&e.length&&n&&n.length?gs(e,n,t,r):e}var q0=Kn(function(e,n){var r=e==null?0:e.length,s=cs(e,n);return Um(e,_e(n,function(d){return jn(d,r)?+d:d}).sort(Xm)),s});function z0(e,n){var r=[];if(!(e&&e.length))return r;var s=-1,d=[],f=e.length;for(n=H(n,3);++s<f;){var g=e[s];n(g,s,e)&&(r.push(g),d.push(s))}return Um(e,d),r}function Ms(e){return e==null?e:Ux.call(e)}function K0(e,n,r){var s=e==null?0:e.length;return s?(r&&typeof r!="number"&&Ue(e,n,r)?(n=0,r=s):(n=n==null?0:K(n),r=r===t?s:K(r)),dn(e,n,r)):[]}function j0(e,n){return pi(e,n)}function X0(e,n,r){return xs(e,n,H(r,2))}function Y0(e,n){var r=e==null?0:e.length;if(r){var s=pi(e,n);if(s<r&&bn(e[s],n))return s}return-1}function Z0(e,n){return pi(e,n,!0)}function J0(e,n,r){return xs(e,n,H(r,2),!0)}function Q0(e,n){var r=e==null?0:e.length;if(r){var s=pi(e,n,!0)-1;if(bn(e[s],n))return s}return-1}function eS(e){return e&&e.length?Gm(e):[]}function nS(e,n){return e&&e.length?Gm(e,H(n,2)):[]}function tS(e){var n=e==null?0:e.length;return n?dn(e,1,n):[]}function oS(e,n,r){return e&&e.length?(n=r||n===t?1:K(n),dn(e,0,n<0?0:n)):[]}function rS(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===t?1:K(n),n=s-n,dn(e,n<0?0:n,s)):[]}function iS(e,n){return e&&e.length?mi(e,H(n,3),!1,!0):[]}function aS(e,n){return e&&e.length?mi(e,H(n,3)):[]}var sS=Y(function(e){return ut(Pe(e,1,xe,!0))}),cS=Y(function(e){var n=_n(e);return xe(n)&&(n=t),ut(Pe(e,1,xe,!0),H(n,2))}),pS=Y(function(e){var n=_n(e);return n=typeof n=="function"?n:t,ut(Pe(e,1,xe,!0),t,n)});function mS(e){return e&&e.length?ut(e):[]}function lS(e,n){return e&&e.length?ut(e,H(n,2)):[]}function dS(e,n){return n=typeof n=="function"?n:t,e&&e.length?ut(e,t,n):[]}function Fs(e){if(!(e&&e.length))return[];var n=0;return e=ct(e,function(r){if(xe(r))return n=Ae(r.length,n),!0}),es(n,function(r){return _e(e,Za(r))})}function Ll(e,n){if(!(e&&e.length))return[];var r=Fs(e);return n==null?r:_e(r,function(s){return Ze(n,t,s)})}var _S=Y(function(e,n){return xe(e)?er(e,n):[]}),uS=Y(function(e){return Ss(ct(e,xe))}),fS=Y(function(e){var n=_n(e);return xe(n)&&(n=t),Ss(ct(e,xe),H(n,2))}),gS=Y(function(e){var n=_n(e);return n=typeof n=="function"?n:t,Ss(ct(e,xe),t,n)}),hS=Y(Fs);function TS(e,n){return qm(e||[],n||[],Qo)}function xS(e,n){return qm(e||[],n||[],or)}var yS=Y(function(e){var n=e.length,r=n>1?e[n-1]:t;return r=typeof r=="function"?(e.pop(),r):t,Ll(e,r)});function kl(e){var n=_(e);return n.__chain__=!0,n}function SS(e,n){return n(e),e}function xi(e,n){return n(e)}var bS=Kn(function(e){var n=e.length,r=n?e[0]:0,s=this.__wrapped__,d=function(f){return cs(f,e)};return n>1||this.__actions__.length||!(s instanceof ne)||!jn(r)?this.thru(d):(s=s.slice(r,+r+(n?1:0)),s.__actions__.push({func:xi,args:[d],thisArg:t}),new mn(s,this.__chain__).thru(function(f){return n&&!f.length&&f.push(t),f}))});function wS(){return kl(this)}function vS(){return new mn(this.value(),this.__chain__)}function AS(){this.__values__===t&&(this.__values__=Hl(this.value()));var e=this.__index__>=this.__values__.length,n=e?t:this.__values__[this.__index__++];return{done:e,value:n}}function IS(){return this}function LS(e){for(var n,r=this;r instanceof ri;){var s=Sl(r);s.__index__=0,s.__values__=t,n?d.__wrapped__=s:n=s;var d=s;r=r.__wrapped__}return d.__wrapped__=e,n}function kS(){var e=this.__wrapped__;if(e instanceof ne){var n=e;return this.__actions__.length&&(n=new ne(this)),n=n.reverse(),n.__actions__.push({func:xi,args:[Ms],thisArg:t}),new mn(n,this.__chain__)}return this.thru(Ms)}function ES(){return Vm(this.__wrapped__,this.__actions__)}var CS=li(function(e,n,r){se.call(e,r)?++e[r]:qn(e,r,1)});function PS(e,n,r){var s=z(e)?om:Sy;return r&&Ue(e,n,r)&&(n=t),s(e,H(n,3))}function NS(e,n){var r=z(e)?ct:Lm;return r(e,H(n,3))}var RS=nl(bl),DS=nl(wl);function OS(e,n){return Pe(yi(e,n),1)}function MS(e,n){return Pe(yi(e,n),At)}function FS(e,n,r){return r=r===t?1:K(r),Pe(yi(e,n),r)}function El(e,n){var r=z(e)?cn:_t;return r(e,H(n,3))}function Cl(e,n){var r=z(e)?tx:Im;return r(e,H(n,3))}var BS=li(function(e,n,r){se.call(e,r)?e[r].push(n):qn(e,r,[n])});function US(e,n,r,s){e=Ve(e)?e:po(e),r=r&&!s?K(r):0;var d=e.length;return r<0&&(r=Ae(d+r,0)),Ai(e)?r<=d&&e.indexOf(n,r)>-1:!!d&&Jt(e,n,r)>-1}var WS=Y(function(e,n,r){var s=-1,d=typeof n=="function",f=Ve(e)?b(e.length):[];return _t(e,function(g){f[++s]=d?Ze(n,g,r):nr(g,n,r)}),f}),GS=li(function(e,n,r){qn(e,r,n)});function yi(e,n){var r=z(e)?_e:Rm;return r(e,H(n,3))}function HS(e,n,r,s){return e==null?[]:(z(n)||(n=n==null?[]:[n]),r=s?t:r,z(r)||(r=r==null?[]:[r]),Fm(e,n,r))}var $S=li(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function VS(e,n,r){var s=z(e)?Xa:sm,d=arguments.length<3;return s(e,H(n,4),r,d,_t)}function qS(e,n,r){var s=z(e)?ox:sm,d=arguments.length<3;return s(e,H(n,4),r,d,Im)}function zS(e,n){var r=z(e)?ct:Lm;return r(e,wi(H(n,3)))}function KS(e){var n=z(e)?bm:Uy;return n(e)}function jS(e,n,r){(r?Ue(e,n,r):n===t)?n=1:n=K(n);var s=z(e)?gy:Wy;return s(e,n)}function XS(e){var n=z(e)?hy:Hy;return n(e)}function YS(e){if(e==null)return 0;if(Ve(e))return Ai(e)?eo(e):e.length;var n=Oe(e);return n==Tn||n==xn?e.size:us(e).length}function ZS(e,n,r){var s=z(e)?Ya:$y;return r&&Ue(e,n,r)&&(n=t),s(e,H(n,3))}var JS=Y(function(e,n){if(e==null)return[];var r=n.length;return r>1&&Ue(e,n[0],n[1])?n=[]:r>2&&Ue(n[0],n[1],n[2])&&(n=[n[0]]),Fm(e,Pe(n,1),[])}),Si=Nx||function(){return Le.Date.now()};function QS(e,n){if(typeof n!="function")throw new pn(u);return e=K(e),function(){if(--e<1)return n.apply(this,arguments)}}function Pl(e,n,r){return n=r?t:n,n=e&&n==null?e.length:n,zn(e,hn,t,t,t,t,n)}function Nl(e,n){var r;if(typeof n!="function")throw new pn(u);return e=K(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=t),r}}var Bs=Y(function(e,n,r){var s=ce;if(r.length){var d=mt(r,so(Bs));s|=He}return zn(e,s,n,r,d)}),Rl=Y(function(e,n,r){var s=ce|Ce;if(r.length){var d=mt(r,so(Rl));s|=He}return zn(n,s,e,r,d)});function Dl(e,n,r){n=r?t:n;var s=zn(e,Ge,t,t,t,t,t,n);return s.placeholder=Dl.placeholder,s}function Ol(e,n,r){n=r?t:n;var s=zn(e,In,t,t,t,t,t,n);return s.placeholder=Ol.placeholder,s}function Ml(e,n,r){var s,d,f,g,h,S,A=0,L=!1,k=!1,P=!0;if(typeof e!="function")throw new pn(u);n=un(n)||0,fe(r)&&(L=!!r.leading,k="maxWait"in r,f=k?Ae(un(r.maxWait)||0,n):f,P="trailing"in r?!!r.trailing:P);function W(ye){var wn=s,Zn=d;return s=d=t,A=ye,g=e.apply(Zn,wn),g}function $(ye){return A=ye,h=ar(Z,n),L?W(ye):g}function X(ye){var wn=ye-S,Zn=ye-A,nd=n-wn;return k?De(nd,f-Zn):nd}function V(ye){var wn=ye-S,Zn=ye-A;return S===t||wn>=n||wn<0||k&&Zn>=f}function Z(){var ye=Si();if(V(ye))return oe(ye);h=ar(Z,X(ye))}function oe(ye){return h=t,P&&s?W(ye):(s=d=t,g)}function nn(){h!==t&&zm(h),A=0,s=S=d=h=t}function We(){return h===t?g:oe(Si())}function tn(){var ye=Si(),wn=V(ye);if(s=arguments,d=this,S=ye,wn){if(h===t)return $(S);if(k)return zm(h),h=ar(Z,n),W(S)}return h===t&&(h=ar(Z,n)),g}return tn.cancel=nn,tn.flush=We,tn}var eb=Y(function(e,n){return Am(e,1,n)}),nb=Y(function(e,n,r){return Am(e,un(n)||0,r)});function tb(e){return zn(e,Uo)}function bi(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new pn(u);var r=function(){var s=arguments,d=n?n.apply(this,s):s[0],f=r.cache;if(f.has(d))return f.get(d);var g=e.apply(this,s);return r.cache=f.set(d,g)||f,g};return r.cache=new(bi.Cache||Vn),r}bi.Cache=Vn;function wi(e){if(typeof e!="function")throw new pn(u);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function ob(e){return Nl(2,e)}var rb=Vy(function(e,n){n=n.length==1&&z(n[0])?_e(n[0],Je(H())):_e(Pe(n,1),Je(H()));var r=n.length;return Y(function(s){for(var d=-1,f=De(s.length,r);++d<f;)s[d]=n[d].call(this,s[d]);return Ze(e,this,s)})}),Us=Y(function(e,n){var r=mt(n,so(Us));return zn(e,He,t,n,r)}),Fl=Y(function(e,n){var r=mt(n,so(Fl));return zn(e,Ie,t,n,r)}),ib=Kn(function(e,n){return zn(e,vt,t,t,t,n)});function ab(e,n){if(typeof e!="function")throw new pn(u);return n=n===t?n:K(n),Y(e,n)}function sb(e,n){if(typeof e!="function")throw new pn(u);return n=n==null?0:Ae(K(n),0),Y(function(r){var s=r[n],d=gt(r,0,n);return s&&pt(d,s),Ze(e,this,d)})}function cb(e,n,r){var s=!0,d=!0;if(typeof e!="function")throw new pn(u);return fe(r)&&(s="leading"in r?!!r.leading:s,d="trailing"in r?!!r.trailing:d),Ml(e,n,{leading:s,maxWait:n,trailing:d})}function pb(e){return Pl(e,1)}function mb(e,n){return Us(ws(n),e)}function lb(){if(!arguments.length)return[];var e=arguments[0];return z(e)?e:[e]}function db(e){return ln(e,M)}function _b(e,n){return n=typeof n=="function"?n:t,ln(e,M,n)}function ub(e){return ln(e,N|M)}function fb(e,n){return n=typeof n=="function"?n:t,ln(e,N|M,n)}function gb(e,n){return n==null||vm(e,n,ke(n))}function bn(e,n){return e===n||e!==e&&n!==n}var hb=fi(ls),Tb=fi(function(e,n){return e>=n}),Dt=Cm(function(){return arguments}())?Cm:function(e){return ge(e)&&se.call(e,"callee")&&!gm.call(e,"callee")},z=b.isArray,xb=Zp?Je(Zp):Ly;function Ve(e){return e!=null&&vi(e.length)&&!Xn(e)}function xe(e){return ge(e)&&Ve(e)}function yb(e){return e===!0||e===!1||ge(e)&&Be(e)==Wo}var ht=Dx||Ys,Sb=Jp?Je(Jp):ky;function bb(e){return ge(e)&&e.nodeType===1&&!sr(e)}function wb(e){if(e==null)return!0;if(Ve(e)&&(z(e)||typeof e=="string"||typeof e.splice=="function"||ht(e)||co(e)||Dt(e)))return!e.length;var n=Oe(e);if(n==Tn||n==xn)return!e.size;if(ir(e))return!us(e).length;for(var r in e)if(se.call(e,r))return!1;return!0}function vb(e,n){return tr(e,n)}function Ab(e,n,r){r=typeof r=="function"?r:t;var s=r?r(e,n):t;return s===t?tr(e,n,t,r):!!s}function Ws(e){if(!ge(e))return!1;var n=Be(e);return n==Mr||n==jh||typeof e.message=="string"&&typeof e.name=="string"&&!sr(e)}function Ib(e){return typeof e=="number"&&Tm(e)}function Xn(e){if(!fe(e))return!1;var n=Be(e);return n==Fr||n==Ap||n==Kh||n==Yh}function Bl(e){return typeof e=="number"&&e==K(e)}function vi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=st}function fe(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ge(e){return e!=null&&typeof e=="object"}var Ul=Qp?Je(Qp):Cy;function Lb(e,n){return e===n||_s(e,n,Cs(n))}function kb(e,n,r){return r=typeof r=="function"?r:t,_s(e,n,Cs(n),r)}function Eb(e){return Wl(e)&&e!=+e}function Cb(e){if(_0(e))throw new q(l);return Pm(e)}function Pb(e){return e===null}function Nb(e){return e==null}function Wl(e){return typeof e=="number"||ge(e)&&Be(e)==Ho}function sr(e){if(!ge(e)||Be(e)!=Hn)return!1;var n=Zr(e);if(n===null)return!0;var r=se.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Kr.call(r)==kx}var Gs=em?Je(em):Py;function Rb(e){return Bl(e)&&e>=-st&&e<=st}var Gl=nm?Je(nm):Ny;function Ai(e){return typeof e=="string"||!z(e)&&ge(e)&&Be(e)==Vo}function en(e){return typeof e=="symbol"||ge(e)&&Be(e)==Br}var co=tm?Je(tm):Ry;function Db(e){return e===t}function Ob(e){return ge(e)&&Oe(e)==qo}function Mb(e){return ge(e)&&Be(e)==Jh}var Fb=fi(fs),Bb=fi(function(e,n){return e<=n});function Hl(e){if(!e)return[];if(Ve(e))return Ai(e)?yn(e):$e(e);if(jo&&e[jo])return gx(e[jo]());var n=Oe(e),r=n==Tn?ts:n==xn?Vr:po;return r(e)}function Yn(e){if(!e)return e===0?e:0;if(e=un(e),e===At||e===-At){var n=e<0?-1:1;return n*$h}return e===e?e:0}function K(e){var n=Yn(e),r=n%1;return n===n?r?n-r:n:0}function $l(e){return e?Ct(K(e),0,Ln):0}function un(e){if(typeof e=="number")return e;if(en(e))return Dr;if(fe(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=fe(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=cm(e);var r=xT.test(e);return r||ST.test(e)?QT(e.slice(2),r?2:8):TT.test(e)?Dr:+e}function Vl(e){return En(e,qe(e))}function Ub(e){return e?Ct(K(e),-st,st):e===0?e:0}function ie(e){return e==null?"":Qe(e)}var Wb=io(function(e,n){if(ir(n)||Ve(n)){En(n,ke(n),e);return}for(var r in n)se.call(n,r)&&Qo(e,r,n[r])}),ql=io(function(e,n){En(n,qe(n),e)}),Ii=io(function(e,n,r,s){En(n,qe(n),e,s)}),Gb=io(function(e,n,r,s){En(n,ke(n),e,s)}),Hb=Kn(cs);function $b(e,n){var r=ro(e);return n==null?r:wm(r,n)}var Vb=Y(function(e,n){e=pe(e);var r=-1,s=n.length,d=s>2?n[2]:t;for(d&&Ue(n[0],n[1],d)&&(s=1);++r<s;)for(var f=n[r],g=qe(f),h=-1,S=g.length;++h<S;){var A=g[h],L=e[A];(L===t||bn(L,no[A])&&!se.call(e,A))&&(e[A]=f[A])}return e}),qb=Y(function(e){return e.push(t,cl),Ze(zl,t,e)});function zb(e,n){return rm(e,H(n,3),kn)}function Kb(e,n){return rm(e,H(n,3),ms)}function jb(e,n){return e==null?e:ps(e,H(n,3),qe)}function Xb(e,n){return e==null?e:km(e,H(n,3),qe)}function Yb(e,n){return e&&kn(e,H(n,3))}function Zb(e,n){return e&&ms(e,H(n,3))}function Jb(e){return e==null?[]:si(e,ke(e))}function Qb(e){return e==null?[]:si(e,qe(e))}function Hs(e,n,r){var s=e==null?t:Pt(e,n);return s===t?r:s}function ew(e,n){return e!=null&&ll(e,n,wy)}function $s(e,n){return e!=null&&ll(e,n,vy)}var nw=ol(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=jr.call(n)),e[n]=r},qs(ze)),tw=ol(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=jr.call(n)),se.call(e,n)?e[n].push(r):e[n]=[r]},H),ow=Y(nr);function ke(e){return Ve(e)?Sm(e):us(e)}function qe(e){return Ve(e)?Sm(e,!0):Dy(e)}function rw(e,n){var r={};return n=H(n,3),kn(e,function(s,d,f){qn(r,n(s,d,f),s)}),r}function iw(e,n){var r={};return n=H(n,3),kn(e,function(s,d,f){qn(r,d,n(s,d,f))}),r}var aw=io(function(e,n,r){ci(e,n,r)}),zl=io(function(e,n,r,s){ci(e,n,r,s)}),sw=Kn(function(e,n){var r={};if(e==null)return r;var s=!1;n=_e(n,function(f){return f=ft(f,e),s||(s=f.length>1),f}),En(e,ks(e),r),s&&(r=ln(r,N|G|M,n0));for(var d=n.length;d--;)ys(r,n[d]);return r});function cw(e,n){return Kl(e,wi(H(n)))}var pw=Kn(function(e,n){return e==null?{}:My(e,n)});function Kl(e,n){if(e==null)return{};var r=_e(ks(e),function(s){return[s]});return n=H(n),Bm(e,r,function(s,d){return n(s,d[0])})}function mw(e,n,r){n=ft(n,e);var s=-1,d=n.length;for(d||(d=1,e=t);++s<d;){var f=e==null?t:e[Cn(n[s])];f===t&&(s=d,f=r),e=Xn(f)?f.call(e):f}return e}function lw(e,n,r){return e==null?e:or(e,n,r)}function dw(e,n,r,s){return s=typeof s=="function"?s:t,e==null?e:or(e,n,r,s)}var jl=al(ke),Xl=al(qe);function _w(e,n,r){var s=z(e),d=s||ht(e)||co(e);if(n=H(n,4),r==null){var f=e&&e.constructor;d?r=s?new f:[]:fe(e)?r=Xn(f)?ro(Zr(e)):{}:r={}}return(d?cn:kn)(e,function(g,h,S){return n(r,g,h,S)}),r}function uw(e,n){return e==null?!0:ys(e,n)}function fw(e,n,r){return e==null?e:$m(e,n,ws(r))}function gw(e,n,r,s){return s=typeof s=="function"?s:t,e==null?e:$m(e,n,ws(r),s)}function po(e){return e==null?[]:ns(e,ke(e))}function hw(e){return e==null?[]:ns(e,qe(e))}function Tw(e,n,r){return r===t&&(r=n,n=t),r!==t&&(r=un(r),r=r===r?r:0),n!==t&&(n=un(n),n=n===n?n:0),Ct(un(e),n,r)}function xw(e,n,r){return n=Yn(n),r===t?(r=n,n=0):r=Yn(r),e=un(e),Ay(e,n,r)}function yw(e,n,r){if(r&&typeof r!="boolean"&&Ue(e,n,r)&&(n=r=t),r===t&&(typeof n=="boolean"?(r=n,n=t):typeof e=="boolean"&&(r=e,e=t)),e===t&&n===t?(e=0,n=1):(e=Yn(e),n===t?(n=e,e=0):n=Yn(n)),e>n){var s=e;e=n,n=s}if(r||e%1||n%1){var d=xm();return De(e+d*(n-e+JT("1e-"+((d+"").length-1))),n)}return hs(e,n)}var Sw=ao(function(e,n,r){return n=n.toLowerCase(),e+(r?Yl(n):n)});function Yl(e){return Vs(ie(e).toLowerCase())}function Zl(e){return e=ie(e),e&&e.replace(wT,lx).replace(HT,"")}function bw(e,n,r){e=ie(e),n=Qe(n);var s=e.length;r=r===t?s:Ct(K(r),0,s);var d=r;return r-=n.length,r>=0&&e.slice(r,d)==n}function ww(e){return e=ie(e),e&&oT.test(e)?e.replace(kp,dx):e}function vw(e){return e=ie(e),e&&pT.test(e)?e.replace(Ua,"\\$&"):e}var Aw=ao(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Iw=ao(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Lw=el("toLowerCase");function kw(e,n,r){e=ie(e),n=K(n);var s=n?eo(e):0;if(!n||s>=n)return e;var d=(n-s)/2;return ui(ni(d),r)+e+ui(ei(d),r)}function Ew(e,n,r){e=ie(e),n=K(n);var s=n?eo(e):0;return n&&s<n?e+ui(n-s,r):e}function Cw(e,n,r){e=ie(e),n=K(n);var s=n?eo(e):0;return n&&s<n?ui(n-s,r)+e:e}function Pw(e,n,r){return r||n==null?n=0:n&&(n=+n),Bx(ie(e).replace(Wa,""),n||0)}function Nw(e,n,r){return(r?Ue(e,n,r):n===t)?n=1:n=K(n),Ts(ie(e),n)}function Rw(){var e=arguments,n=ie(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var Dw=ao(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function Ow(e,n,r){return r&&typeof r!="number"&&Ue(e,n,r)&&(n=r=t),r=r===t?Ln:r>>>0,r?(e=ie(e),e&&(typeof n=="string"||n!=null&&!Gs(n))&&(n=Qe(n),!n&&Qt(e))?gt(yn(e),0,r):e.split(n,r)):[]}var Mw=ao(function(e,n,r){return e+(r?" ":"")+Vs(n)});function Fw(e,n,r){return e=ie(e),r=r==null?0:Ct(K(r),0,e.length),n=Qe(n),e.slice(r,r+n.length)==n}function Bw(e,n,r){var s=_.templateSettings;r&&Ue(e,n,r)&&(n=t),e=ie(e),n=Ii({},n,s,sl);var d=Ii({},n.imports,s.imports,sl),f=ke(d),g=ns(d,f),h,S,A=0,L=n.interpolate||Ur,k="__p += '",P=os((n.escape||Ur).source+"|"+L.source+"|"+(L===Ep?hT:Ur).source+"|"+(n.evaluate||Ur).source+"|$","g"),W="//# sourceURL="+(se.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++KT+"]")+`
`;e.replace(P,function(V,Z,oe,nn,We,tn){return oe||(oe=nn),k+=e.slice(A,tn).replace(vT,_x),Z&&(h=!0,k+=`' +
__e(`+Z+`) +
'`),We&&(S=!0,k+=`';
`+We+`;
__p += '`),oe&&(k+=`' +
((__t = (`+oe+`)) == null ? '' : __t) +
'`),A=tn+V.length,V}),k+=`';
`;var $=se.call(n,"variable")&&n.variable;if(!$)k=`with (obj) {
`+k+`
}
`;else if(fT.test($))throw new q(T);k=(S?k.replace(Qh,""):k).replace(eT,"$1").replace(nT,"$1;"),k="function("+($||"obj")+`) {
`+($?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(h?", __e = _.escape":"")+(S?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+k+`return __p
}`;var X=Ql(function(){return re(f,W+"return "+k).apply(t,g)});if(X.source=k,Ws(X))throw X;return X}function Uw(e){return ie(e).toLowerCase()}function Ww(e){return ie(e).toUpperCase()}function Gw(e,n,r){if(e=ie(e),e&&(r||n===t))return cm(e);if(!e||!(n=Qe(n)))return e;var s=yn(e),d=yn(n),f=pm(s,d),g=mm(s,d)+1;return gt(s,f,g).join("")}function Hw(e,n,r){if(e=ie(e),e&&(r||n===t))return e.slice(0,dm(e)+1);if(!e||!(n=Qe(n)))return e;var s=yn(e),d=mm(s,yn(n))+1;return gt(s,0,d).join("")}function $w(e,n,r){if(e=ie(e),e&&(r||n===t))return e.replace(Wa,"");if(!e||!(n=Qe(n)))return e;var s=yn(e),d=pm(s,yn(n));return gt(s,d).join("")}function Vw(e,n){var r=La,s=ka;if(fe(n)){var d="separator"in n?n.separator:d;r="length"in n?K(n.length):r,s="omission"in n?Qe(n.omission):s}e=ie(e);var f=e.length;if(Qt(e)){var g=yn(e);f=g.length}if(r>=f)return e;var h=r-eo(s);if(h<1)return s;var S=g?gt(g,0,h).join(""):e.slice(0,h);if(d===t)return S+s;if(g&&(h+=S.length-h),Gs(d)){if(e.slice(h).search(d)){var A,L=S;for(d.global||(d=os(d.source,ie(Cp.exec(d))+"g")),d.lastIndex=0;A=d.exec(L);)var k=A.index;S=S.slice(0,k===t?h:k)}}else if(e.indexOf(Qe(d),h)!=h){var P=S.lastIndexOf(d);P>-1&&(S=S.slice(0,P))}return S+s}function qw(e){return e=ie(e),e&&tT.test(e)?e.replace(Lp,yx):e}var zw=ao(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Vs=el("toUpperCase");function Jl(e,n,r){return e=ie(e),n=r?t:n,n===t?fx(e)?wx(e):ax(e):e.match(n)||[]}var Ql=Y(function(e,n){try{return Ze(e,t,n)}catch(r){return Ws(r)?r:new q(r)}}),Kw=Kn(function(e,n){return cn(n,function(r){r=Cn(r),qn(e,r,Bs(e[r],e))}),e});function jw(e){var n=e==null?0:e.length,r=H();return e=n?_e(e,function(s){if(typeof s[1]!="function")throw new pn(u);return[r(s[0]),s[1]]}):[],Y(function(s){for(var d=-1;++d<n;){var f=e[d];if(Ze(f[0],this,s))return Ze(f[1],this,s)}})}function Xw(e){return yy(ln(e,N))}function qs(e){return function(){return e}}function Yw(e,n){return e==null||e!==e?n:e}var Zw=tl(),Jw=tl(!0);function ze(e){return e}function zs(e){return Nm(typeof e=="function"?e:ln(e,N))}function Qw(e){return Dm(ln(e,N))}function ev(e,n){return Om(e,ln(n,N))}var nv=Y(function(e,n){return function(r){return nr(r,e,n)}}),tv=Y(function(e,n){return function(r){return nr(e,r,n)}});function Ks(e,n,r){var s=ke(n),d=si(n,s);r==null&&!(fe(n)&&(d.length||!s.length))&&(r=n,n=e,e=this,d=si(n,ke(n)));var f=!(fe(r)&&"chain"in r)||!!r.chain,g=Xn(e);return cn(d,function(h){var S=n[h];e[h]=S,g&&(e.prototype[h]=function(){var A=this.__chain__;if(f||A){var L=e(this.__wrapped__),k=L.__actions__=$e(this.__actions__);return k.push({func:S,args:arguments,thisArg:e}),L.__chain__=A,L}return S.apply(e,pt([this.value()],arguments))})}),e}function ov(){return Le._===this&&(Le._=Ex),this}function js(){}function rv(e){return e=K(e),Y(function(n){return Mm(n,e)})}var iv=As(_e),av=As(om),sv=As(Ya);function ed(e){return Ns(e)?Za(Cn(e)):Fy(e)}function cv(e){return function(n){return e==null?t:Pt(e,n)}}var pv=rl(),mv=rl(!0);function Xs(){return[]}function Ys(){return!1}function lv(){return{}}function dv(){return""}function _v(){return!0}function uv(e,n){if(e=K(e),e<1||e>st)return[];var r=Ln,s=De(e,Ln);n=H(n),e-=Ln;for(var d=es(s,n);++r<e;)n(r);return d}function fv(e){return z(e)?_e(e,Cn):en(e)?[e]:$e(yl(ie(e)))}function gv(e){var n=++Lx;return ie(e)+n}var hv=_i(function(e,n){return e+n},0),Tv=Is("ceil"),xv=_i(function(e,n){return e/n},1),yv=Is("floor");function Sv(e){return e&&e.length?ai(e,ze,ls):t}function bv(e,n){return e&&e.length?ai(e,H(n,2),ls):t}function wv(e){return am(e,ze)}function vv(e,n){return am(e,H(n,2))}function Av(e){return e&&e.length?ai(e,ze,fs):t}function Iv(e,n){return e&&e.length?ai(e,H(n,2),fs):t}var Lv=_i(function(e,n){return e*n},1),kv=Is("round"),Ev=_i(function(e,n){return e-n},0);function Cv(e){return e&&e.length?Qa(e,ze):0}function Pv(e,n){return e&&e.length?Qa(e,H(n,2)):0}return _.after=QS,_.ary=Pl,_.assign=Wb,_.assignIn=ql,_.assignInWith=Ii,_.assignWith=Gb,_.at=Hb,_.before=Nl,_.bind=Bs,_.bindAll=Kw,_.bindKey=Rl,_.castArray=lb,_.chain=kl,_.chunk=y0,_.compact=S0,_.concat=b0,_.cond=jw,_.conforms=Xw,_.constant=qs,_.countBy=CS,_.create=$b,_.curry=Dl,_.curryRight=Ol,_.debounce=Ml,_.defaults=Vb,_.defaultsDeep=qb,_.defer=eb,_.delay=nb,_.difference=w0,_.differenceBy=v0,_.differenceWith=A0,_.drop=I0,_.dropRight=L0,_.dropRightWhile=k0,_.dropWhile=E0,_.fill=C0,_.filter=NS,_.flatMap=OS,_.flatMapDeep=MS,_.flatMapDepth=FS,_.flatten=vl,_.flattenDeep=P0,_.flattenDepth=N0,_.flip=tb,_.flow=Zw,_.flowRight=Jw,_.fromPairs=R0,_.functions=Jb,_.functionsIn=Qb,_.groupBy=BS,_.initial=O0,_.intersection=M0,_.intersectionBy=F0,_.intersectionWith=B0,_.invert=nw,_.invertBy=tw,_.invokeMap=WS,_.iteratee=zs,_.keyBy=GS,_.keys=ke,_.keysIn=qe,_.map=yi,_.mapKeys=rw,_.mapValues=iw,_.matches=Qw,_.matchesProperty=ev,_.memoize=bi,_.merge=aw,_.mergeWith=zl,_.method=nv,_.methodOf=tv,_.mixin=Ks,_.negate=wi,_.nthArg=rv,_.omit=sw,_.omitBy=cw,_.once=ob,_.orderBy=HS,_.over=iv,_.overArgs=rb,_.overEvery=av,_.overSome=sv,_.partial=Us,_.partialRight=Fl,_.partition=$S,_.pick=pw,_.pickBy=Kl,_.property=ed,_.propertyOf=cv,_.pull=H0,_.pullAll=Il,_.pullAllBy=$0,_.pullAllWith=V0,_.pullAt=q0,_.range=pv,_.rangeRight=mv,_.rearg=ib,_.reject=zS,_.remove=z0,_.rest=ab,_.reverse=Ms,_.sampleSize=jS,_.set=lw,_.setWith=dw,_.shuffle=XS,_.slice=K0,_.sortBy=JS,_.sortedUniq=eS,_.sortedUniqBy=nS,_.split=Ow,_.spread=sb,_.tail=tS,_.take=oS,_.takeRight=rS,_.takeRightWhile=iS,_.takeWhile=aS,_.tap=SS,_.throttle=cb,_.thru=xi,_.toArray=Hl,_.toPairs=jl,_.toPairsIn=Xl,_.toPath=fv,_.toPlainObject=Vl,_.transform=_w,_.unary=pb,_.union=sS,_.unionBy=cS,_.unionWith=pS,_.uniq=mS,_.uniqBy=lS,_.uniqWith=dS,_.unset=uw,_.unzip=Fs,_.unzipWith=Ll,_.update=fw,_.updateWith=gw,_.values=po,_.valuesIn=hw,_.without=_S,_.words=Jl,_.wrap=mb,_.xor=uS,_.xorBy=fS,_.xorWith=gS,_.zip=hS,_.zipObject=TS,_.zipObjectDeep=xS,_.zipWith=yS,_.entries=jl,_.entriesIn=Xl,_.extend=ql,_.extendWith=Ii,Ks(_,_),_.add=hv,_.attempt=Ql,_.camelCase=Sw,_.capitalize=Yl,_.ceil=Tv,_.clamp=Tw,_.clone=db,_.cloneDeep=ub,_.cloneDeepWith=fb,_.cloneWith=_b,_.conformsTo=gb,_.deburr=Zl,_.defaultTo=Yw,_.divide=xv,_.endsWith=bw,_.eq=bn,_.escape=ww,_.escapeRegExp=vw,_.every=PS,_.find=RS,_.findIndex=bl,_.findKey=zb,_.findLast=DS,_.findLastIndex=wl,_.findLastKey=Kb,_.floor=yv,_.forEach=El,_.forEachRight=Cl,_.forIn=jb,_.forInRight=Xb,_.forOwn=Yb,_.forOwnRight=Zb,_.get=Hs,_.gt=hb,_.gte=Tb,_.has=ew,_.hasIn=$s,_.head=Al,_.identity=ze,_.includes=US,_.indexOf=D0,_.inRange=xw,_.invoke=ow,_.isArguments=Dt,_.isArray=z,_.isArrayBuffer=xb,_.isArrayLike=Ve,_.isArrayLikeObject=xe,_.isBoolean=yb,_.isBuffer=ht,_.isDate=Sb,_.isElement=bb,_.isEmpty=wb,_.isEqual=vb,_.isEqualWith=Ab,_.isError=Ws,_.isFinite=Ib,_.isFunction=Xn,_.isInteger=Bl,_.isLength=vi,_.isMap=Ul,_.isMatch=Lb,_.isMatchWith=kb,_.isNaN=Eb,_.isNative=Cb,_.isNil=Nb,_.isNull=Pb,_.isNumber=Wl,_.isObject=fe,_.isObjectLike=ge,_.isPlainObject=sr,_.isRegExp=Gs,_.isSafeInteger=Rb,_.isSet=Gl,_.isString=Ai,_.isSymbol=en,_.isTypedArray=co,_.isUndefined=Db,_.isWeakMap=Ob,_.isWeakSet=Mb,_.join=U0,_.kebabCase=Aw,_.last=_n,_.lastIndexOf=W0,_.lowerCase=Iw,_.lowerFirst=Lw,_.lt=Fb,_.lte=Bb,_.max=Sv,_.maxBy=bv,_.mean=wv,_.meanBy=vv,_.min=Av,_.minBy=Iv,_.stubArray=Xs,_.stubFalse=Ys,_.stubObject=lv,_.stubString=dv,_.stubTrue=_v,_.multiply=Lv,_.nth=G0,_.noConflict=ov,_.noop=js,_.now=Si,_.pad=kw,_.padEnd=Ew,_.padStart=Cw,_.parseInt=Pw,_.random=yw,_.reduce=VS,_.reduceRight=qS,_.repeat=Nw,_.replace=Rw,_.result=mw,_.round=kv,_.runInContext=x,_.sample=KS,_.size=YS,_.snakeCase=Dw,_.some=ZS,_.sortedIndex=j0,_.sortedIndexBy=X0,_.sortedIndexOf=Y0,_.sortedLastIndex=Z0,_.sortedLastIndexBy=J0,_.sortedLastIndexOf=Q0,_.startCase=Mw,_.startsWith=Fw,_.subtract=Ev,_.sum=Cv,_.sumBy=Pv,_.template=Bw,_.times=uv,_.toFinite=Yn,_.toInteger=K,_.toLength=$l,_.toLower=Uw,_.toNumber=un,_.toSafeInteger=Ub,_.toString=ie,_.toUpper=Ww,_.trim=Gw,_.trimEnd=Hw,_.trimStart=$w,_.truncate=Vw,_.unescape=qw,_.uniqueId=gv,_.upperCase=zw,_.upperFirst=Vs,_.each=El,_.eachRight=Cl,_.first=Al,Ks(_,function(){var e={};return kn(_,function(n,r){se.call(_.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),_.VERSION=o,cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){_[e].placeholder=_}),cn(["drop","take"],function(e,n){ne.prototype[e]=function(r){r=r===t?1:Ae(K(r),0);var s=this.__filtered__&&!n?new ne(this):this.clone();return s.__filtered__?s.__takeCount__=De(r,s.__takeCount__):s.__views__.push({size:De(r,Ln),type:e+(s.__dir__<0?"Right":"")}),s},ne.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),cn(["filter","map","takeWhile"],function(e,n){var r=n+1,s=r==vp||r==Hh;ne.prototype[e]=function(d){var f=this.clone();return f.__iteratees__.push({iteratee:H(d,3),type:r}),f.__filtered__=f.__filtered__||s,f}}),cn(["head","last"],function(e,n){var r="take"+(n?"Right":"");ne.prototype[e]=function(){return this[r](1).value()[0]}}),cn(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");ne.prototype[e]=function(){return this.__filtered__?new ne(this):this[r](1)}}),ne.prototype.compact=function(){return this.filter(ze)},ne.prototype.find=function(e){return this.filter(e).head()},ne.prototype.findLast=function(e){return this.reverse().find(e)},ne.prototype.invokeMap=Y(function(e,n){return typeof e=="function"?new ne(this):this.map(function(r){return nr(r,e,n)})}),ne.prototype.reject=function(e){return this.filter(wi(H(e)))},ne.prototype.slice=function(e,n){e=K(e);var r=this;return r.__filtered__&&(e>0||n<0)?new ne(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==t&&(n=K(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},ne.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ne.prototype.toArray=function(){return this.take(Ln)},kn(ne.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),s=/^(?:head|last)$/.test(n),d=_[s?"take"+(n=="last"?"Right":""):n],f=s||/^find/.test(n);!d||(_.prototype[n]=function(){var g=this.__wrapped__,h=s?[1]:arguments,S=g instanceof ne,A=h[0],L=S||z(g),k=function(Z){var oe=d.apply(_,pt([Z],h));return s&&P?oe[0]:oe};L&&r&&typeof A=="function"&&A.length!=1&&(S=L=!1);var P=this.__chain__,W=!!this.__actions__.length,$=f&&!P,X=S&&!W;if(!f&&L){g=X?g:new ne(this);var V=e.apply(g,h);return V.__actions__.push({func:xi,args:[k],thisArg:t}),new mn(V,P)}return $&&X?e.apply(this,h):(V=this.thru(k),$?s?V.value()[0]:V.value():V)})}),cn(["pop","push","shift","sort","splice","unshift"],function(e){var n=qr[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",s=/^(?:pop|shift)$/.test(e);_.prototype[e]=function(){var d=arguments;if(s&&!this.__chain__){var f=this.value();return n.apply(z(f)?f:[],d)}return this[r](function(g){return n.apply(z(g)?g:[],d)})}}),kn(ne.prototype,function(e,n){var r=_[n];if(r){var s=r.name+"";se.call(oo,s)||(oo[s]=[]),oo[s].push({name:n,func:r})}}),oo[di(t,Ce).name]=[{name:"wrapper",func:t}],ne.prototype.clone=qx,ne.prototype.reverse=zx,ne.prototype.value=Kx,_.prototype.at=bS,_.prototype.chain=wS,_.prototype.commit=vS,_.prototype.next=AS,_.prototype.plant=LS,_.prototype.reverse=kS,_.prototype.toJSON=_.prototype.valueOf=_.prototype.value=ES,_.prototype.first=_.prototype.head,jo&&(_.prototype[jo]=IS),_},lt=vx();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Le._=lt,define(function(){return lt})):It?((It.exports=lt)._=lt,za._=lt):Le._=lt}).call(Bo)});var bp={};Pn(bp,{css:()=>Uh,default:()=>VP});var Uh,VP,wp=O(()=>{"use strict";i();Uh=`.dapp-core-component__confirmAddressStyles__ledger-confirm-address {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Uh));VP={"ledger-confirm-address":"dapp-core-component__confirmAddressStyles__ledger-confirm-address",ledgerConfirmAddress:"dapp-core-component__confirmAddressStyles__ledger-confirm-address","ledger-confirm-address-heading":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading",ledgerConfirmAddressHeading:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading","ledger-confirm-address-section":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section",ledgerConfirmAddressSection:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section","ledger-confirm-address-description":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description",ledgerConfirmAddressDescription:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description","ledger-confirm-address-data":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data",ledgerConfirmAddressData:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data","ledger-confirm-address-footer":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer",ledgerConfirmAddressFooter:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer"}});var KP={};Pn(KP,{ConfirmAddress:()=>zP});module.exports=vn(KP);i();i();var Ye=B(require("react")),at=B(require("classnames"));te();i();var Jd=B(require("react"));i();var mr=B(require("react"));i();To();var Xd=()=>!Gt();var xA=()=>R(void 0,null,function*(){return yield Promise.resolve().then(()=>(Sc(),yc))}),yA=()=>(Sc(),vn(yc)).default,bc=Xd();function Zd({ssrGlobalImportCallback:t,ssrImportCallback:o,clientImportCallback:a}){let[l,u]=mr.default.useState(bc?void 0:yA()),[T,y]=mr.default.useState(bc||a==null?void 0:a()),E=()=>R(this,null,function*(){(t?t():xA()).then(I=>u(I.default)),o==null||o().then(I=>y(I.default))});return(0,mr.useEffect)(()=>{bc&&E()},[]),{globalStyles:l,styles:T}}function Bn(t,o){return a=>{let{globalStyles:l,styles:u}=Zd({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Jd.default.createElement(t,j(C({},a),{globalStyles:l!=null?l:{},styles:u!=null?u:{}}))}}i();i();i();var fu=require("react"),Io=require("react-redux");i();var qc=require("@reduxjs/toolkit"),_u=require("react-redux/lib/utils/Subscription");me();i();var j_=B(require("lodash.throttle"));te();me();Cc();yo();xo();var u1=[Oi],ia=!1,f1=(0,j_.default)(()=>{_r(dr())},5e3),X_=t=>o=>a=>{if(u1.includes(a.type))return o(a);let l=t.getState(),u=Ht.local.getItem(xt.loginExpiresAt);if(!Boolean(l==null?void 0:l.account.address))return o(a);if(u==null)return _r(dr());let y=Date.now();return u-y<0&&!ia?setTimeout(()=>{ia=!0,t.dispatch(__())},1e3):(ia&&(ia=!1),f1()),o(a)};i();i();function aa(){return typeof sessionStorage!="undefined"}var mu=aa()?(nu(),vn(eu)).default:(ou(),vn(tu)).default,lu=aa()?(iu(),vn(ru)).default:[],du=aa()?(pu(),vn(cu)).default:t=>t;sa();var J=(0,qc.configureStore)({reducer:mu,middleware:t=>t({serializableCheck:{ignoredActions:[...lu,Ec.type,Ui.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(X_)}),uu=(0,_u.createSubscription)(J),s3=du(J),c3=(0,qc.configureStore)({reducer:$t});var B1={store:J,subscription:uu},zc=(0,fu.createContext)(B1),d3=(0,Io.createStoreHook)(zc),Fe=(0,Io.createDispatchHook)(zc),Q=(0,Io.createSelectorHook)(zc);i();i();me();i();var gu=B(require("lodash.isequal")),ca=require("reselect"),U=(0,ca.createSelectorCreator)(ca.defaultMemoize,gu.default);var Un=t=>t.account,Vt=U(Un,t=>t.address),Lo=U(Un,Vt,(t,o)=>o in t.accounts?t.accounts[o]:Bi),hu=U(Un,Lo,(t,o)=>{let u=t,{accounts:a}=u,l=Ot(u,["accounts"]);return j(C({},l),{address:o.address,account:o})}),h3=U(Lo,t=>t.balance),U1=U(Lo,t=>{var o;return((o=t==null?void 0:t.nonce)==null?void 0:o.valueOf())||0}),T3=U(Un,t=>t.shard),W1=U(Un,t=>t.ledgerAccount),x3=U(Un,t=>t.walletConnectAccount),y3=U(Un,t=>t.isAccountLoading),S3=U(Un,t=>t.accountLoadingError),G1=U(Un,t=>t.websocketEvent),H1=U(Un,t=>t.websocketBatchEvent);i();var Tu=t=>t.dappConfig,v3=U(Tu,t=>t.shouldUseWebViewProvider);i();var rn=t=>t.loginInfo,$1=U(rn,t=>t.loginMethod),pa=U(rn,Vt,(t,o)=>Boolean(o)),k3=U(rn,t=>t.walletConnectLogin),V1=U(rn,t=>t.ledgerLogin),q1=U(rn,t=>t.walletLogin),E3=U(rn,t=>t.isLoginSessionInvalid),Tr=U(rn,t=>t.tokenLogin),xu=U(rn,t=>t.logoutRoute),z1=U(rn,t=>t.isWalletConnectV2Initialized);i();var yu=t=>t.modals,N3=U(yu,t=>t.txSubmittedModal),K1=U(yu,t=>t.notificationModal);i();var Wn=t=>t.networkConfig,ma=U(Wn,t=>t.network.chainId),j1=U(Wn,t=>t.network.roundDuration),O3=U(Wn,t=>t.network.walletConnectBridgeAddress),X1=U(Wn,t=>t.network.walletConnectV2RelayAddress),Y1=U(Wn,t=>t.network.walletConnectV2ProjectId),Z1=U(Wn,t=>t.network.walletConnectV2Options),J1=U(Wn,t=>t.network.walletConnectDeepLink),an=U(Wn,t=>t.network),Su=U(an,t=>t.apiAddress),bu=U(an,t=>t.explorerAddress),wu=U(an,t=>{var o;return(o=t.customWalletAddress)!=null?o:t.walletAddress}),Q1=U(an,t=>t.xAliasAddress),vu=U(an,t=>t.egldLabel);i();var la=t=>t.signedMessageInfo,B3=U(la,t=>t.isSigning),U3=U(la,t=>t.errorMessage),W3=U(la,t=>{let o=Object.keys(t.signedSessions),a=o.length;return t.signedSessions[o[a-1]]}),G3=U(la,t=>{let o=Object.keys(t.signedSessions),a=o.length;return o.length>0?o[a-1]:""});i();var Au=t=>t.toasts,eI=U(Au,t=>t.customToasts),Iu=U(Au,t=>t.transactionToasts);i();me();var Lu={errorMessage:Oc,successMessage:Mc,processingMessage:Fc},ku=t=>t.transactionsInfo,nI=U(ku,(t,o)=>o,(t,o)=>o!=null&&(t==null?void 0:t[Number(o)])||Lu);i();i();var Gn=require("@multiversx/sdk-core");te();i();var Kc=require("@multiversx/sdk-core/out");i();i();function da(t){try{let o=atob(t),a=btoa(o),l=p.Buffer.from(t,"base64").toString(),u=p.Buffer.from(l).toString("base64"),T=t===a||a.startsWith(t),y=t===u||u.startsWith(t);if(T&&y)return!0}catch(o){return!1}return!1}function xr(t){return da(t)?atob(t):t}i();i();i();i();var Eu=t=>{let o=t!=null?t:"";return da(o)?Kc.TransactionPayload.fromEncoded(o):new Kc.TransactionPayload(o)};i();te();var yr=({data:t,onlySetGuardian:o})=>t?o?t.startsWith("SetGuardian"):Object.values(pc).some(a=>t.startsWith(a)):!1;function _a(t){var l,u,T;let o=C({},t);yr({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let a=new Gn.Transaction(C(C(j(C(j(C({value:o.value.valueOf(),data:Eu(o.data),nonce:o.nonce.valueOf(),receiver:new Gn.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Gn.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(l=o.gasLimit.valueOf())!=null?l:Ri,gasPrice:(u=o.gasPrice.valueOf())!=null?u:Di,chainID:o.chainID.valueOf(),version:new Gn.TransactionVersion((T=o.version)!=null?T:Kd)}),o.options?{options:new Gn.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Gn.Address(o.guardian)}:{}));return o.guardianSignature&&a.applyGuardianSignature(p.Buffer.from(o.guardianSignature,"hex")),o.signature&&a.applySignature(p.Buffer.from(o.signature,"hex")),a}i();i();te();i();i();i();var iI=require("@multiversx/sdk-core/out");i();te();i();var Cu=require("@multiversx/sdk-core");be();i();var aI=require("@multiversx/sdk-core");i();i();i();var sI=require("@multiversx/sdk-core"),cI=B(require("bignumber.js"));ue();i();i();i();var Xc="blocks";i();i();i();i();je();i();i();je();i();i();i();var gI=B(require("bignumber.js"));te();i();var fI=require("@multiversx/sdk-core"),Zc=B(require("bignumber.js"));te();i();var _I=B(require("bignumber.js"));i();Zc.default.config({ROUNDING_MODE:Zc.default.ROUND_FLOOR});i();i();i();te();i();i();i();i();te();i();te();i();var hI=require("@multiversx/sdk-core");te();i();var br=require("@multiversx/sdk-core"),yI=B(require("bignumber.js"));te();i();i();var TI=B(require("bignumber.js"));te();i();te();i();i();i();i();i();i();te();function SI(t,o){let a,l,u=/(\.0+)+$/,T=t.replace(u,"").split("."),y=o.replace(u,"").split("."),E=Math.min(T.length,y.length);for(a=0;a<E;a++)if(l=parseInt(T[a],10)-parseInt(y[a],10),l)return l;return T.length-y.length}function bI(t){let o=[mc,lc,dc,_c,uc,fc,t].sort((N,G)=>SI(N,G)),a=o.indexOf(mc),l=o.indexOf(lc),u=o.indexOf(dc),T=o.indexOf(_c),y=o.indexOf(uc),E=o.indexOf(fc),I=o.indexOf(t);return{ledgerWithMultiAccount:I>=a,ledgerWithHashSign:I>=l,ledgerWithSignAuthToken:I>=u,ledgerWithWhitelistedTokens:I>=T,ledgerWithGuardians:I>=y,ledgerWithUsernames:I>=E}}var Du=bI;i();te();i();te();i();je();var vI=["reDelegateRewards","claimRewards","unBond"],AI=["wrapEgld","unwrapEgld"],II=["unStake"],LI=["unDelegate"];i();i();i();te();i();var PI=B(require("bignumber.js"));i();i();je();i();var RI=B(require("bignumber.js"));i();i();i();i();var MI=B(require("bignumber.js"));be();i();i();i();i();ue();i();var WI=require("@multiversx/sdk-web-wallet-provider");te();i();var BI=B(require("qs"));i();Me();To();i();To();var gF={search:Gt()?window.location.search:"",removeParams:[]};i();i();i();Re();i();je();i();i();Re();i();var GI=B(require("linkifyjs"));i();te();i();var HI=B(require("bignumber.js"));i();be();i();i();ue();i();ue();i();i();i();je();i();je();i();var $I=B(require("bignumber.js"));te();je();i();je();i();var Fu=require("react");be();i();i();je();i();i();var VI=require("@multiversx/sdk-core/out"),qI=B(require("bignumber.js"));je();i();be();i();i();be();var sU=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];i();var Bu=require("react");be();Re();i();var KI=require("react");je();var fU=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Ao();i();var ga=t=>t.transactions,ko=U(ga,t=>t.signedTransactions),jI=U(ga,t=>t.signTransactionsError),Uu=U(ga,t=>t.signTransactionsCancelMessage),ha=t=>o=>Object.entries(o).reduce((a,[l,u])=>(t(u.status)&&(a[l]=u),a),{}),Wu=U(ko,ha(bo)),Gu=U(ko,ha(wo)),Hu=U(ko,ha(vo)),XI=U(ko,ha(Uc)),$u=U(ga,t=>{var o;return(t==null?void 0:t.transactionsToSign)==null?null:j(C({},t.transactionsToSign),{transactions:((o=t==null?void 0:t.transactionsToSign)==null?void 0:o.transactions.map(a=>_a(a)))||[]})}),YI=U(ko,(t,o)=>o,(t,o)=>o!=null?(t==null?void 0:t[o])||{}:{});i();var Vu=require("react");i();me();i();i();i();i();i();i();i();i();var JI=require("@multiversx/sdk-extension-provider"),QI=require("@multiversx/sdk-hw-provider"),eL=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),nL=require("@multiversx/sdk-opera-provider"),tL=require("@multiversx/sdk-passkey-provider/out"),oL=require("@multiversx/sdk-web-wallet-provider");te();Tt();i();var Eo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),qu=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");ue();i();var An=t=>`Unable to perform ${t}, Provider not initialized`,Ta=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(An("getAccount"))}setAccount(o){throw new Error(An(`setAccount: ${o}`))}login(o){throw new Error(An(`login with options: ${o}`))}logout(o){throw new Error(An(`logout with options: ${o}`))}getAddress(){throw new Error(An("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,a){throw new Error(An(`sendTransaction with transactions: ${o} options: ${a}`))}signTransaction(o,a){throw new Error(An(`signTransaction with transactions: ${o} options: ${a}`))}signTransactions(o,a){throw new Error(An(`signTransactions with transactions: ${o} options: ${a}`))}signMessage(o,a){throw new Error(An(`signTransactions with ${o} and options ${a}`))}sendCustomMessage({method:o,params:a}){throw new Error(An(`sendCustomMessage with method: ${o} params: ${a}`))}sendCustomRequest(o){throw new Error(An(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},zu=new Ta;me();i();i();i();i();i();var Ku=require("@lifeomic/axios-fetch"),np=B(require("axios")),tp=(0,Ku.buildAxiosFetch)(np.default),op=(t,o)=>R(void 0,null,function*(){if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);let l=t.clone().json(),[u]=yield Promise.all([l]);return{data:u,status:t.status,statusText:t.statusText,headers:t.headers,config:o}});function rL(t,o,a){return R(this,null,function*(){try{let l=yield tp(t,C({method:"POST",body:o?JSON.stringify(o):void 0,headers:C({"Content-Type":"application/json"},(a==null?void 0:a.headers)||{})},a));return op(l,a)}catch(l){throw console.error("Fetch Error:",l),l}})}function iL(t,o){return R(this,null,function*(){try{let a=yield tp(t,o);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return op(a,o)}catch(a){throw console.error("Fetch Error:",a),a}})}function aL(t,o,a){return R(this,null,function*(){try{let l=yield tp(t,C({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(a==null?void 0:a.headers)||{}},a));if(!l.ok)throw new Error(`HTTP error! Status: ${l.status}`);return op(l,a)}catch(l){throw console.error("Fetch Error:",l),l}})}var Co=np.default.create();Co.get=iL;Co.post=rL;Co.patch=aL;i();i();var sL=B(require("axios"));i();var cL=B(require("swr"));i();ue();i();i();i();Re();i();Ao();i();i();i();var pL=B(require("axios"));i();var lL=B(require("axios"));go();i();te();i();var dL=B(require("axios"));i();var uL=B(require("axios"));i();i();var fL=B(require("axios"));i();var gL=B(require("axios"));i();i();me();ue();i();i();i();i();Re();i();Te();be();i();me();i();var Zu=require("@multiversx/sdk-core");be();Me();i();Ao();i();me();ue();i();me();be();i();i();i();be();i();Ni();i();i();i();i();var yL=B(require("swr"));i();i();i();i();var Ju=require("react");i();i();var SL=require("react"),bL=require("@multiversx/sdk-web-wallet-provider"),wL=require("@multiversx/sdk-web-wallet-provider"),vL=B(require("qs"));te();me();ue();hc();Re();var e$=we();i();var If=require("react"),pp=require("@multiversx/sdk-core");i();te();Pc();i();i();i();i();i();i();i();i();i();i();go();i();var kL=B(require("axios"));i();var CL=B(require("axios"));i();go();i();go();i();i();i();i();var NL=require("@multiversx/sdk-opera-provider");i();var RL=require("@multiversx/sdk-extension-provider");i();Tt();i();i();i();i();var bf=B(Sf());var Po=t=>{if(!t||!(0,bf.default)(t))return null;let o=t.split(".");if(o.length!==4)return null;try{let[a,l,u,T]=o,y=JSON.parse(xr(T)),E=xr(a);return{ttl:Number(u),extraInfo:y,origin:E,blockHash:l}}catch(a){return console.error(`Error trying to decode ${t}:`,a),null}};i();var sk=require("@multiversx/sdk-native-auth-client");i();var Af=B(require("axios"));i();i();i();function wf(t){return R(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),t)})})}i();var vf=(t,o,a,l=0)=>R(void 0,null,function*(){try{return yield t(...a)}catch(u){return l<o.retries?((o==null?void 0:o.delay)!=null&&(yield wf(o.delay)),yield vf(t,o,a,l+1)):null}}),cp=(t,o={retries:5,delay:500})=>(...a)=>R(void 0,null,function*(){return yield vf(t,o,a)});var rk=4;var S7=cp((t,o,a)=>R(void 0,null,function*(){if(a){let T=Math.floor(Date.now()/1e3);return{hash:yield a(),timestamp:T}}let{data:l}=yield Af.default.get(`${t}/${Xc}?from=${rk}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[u]=l;return u}));i();i();Mi();i();i();Re();var P7={origin:we().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};i();var pk=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");i();var mk=require("@multiversx/sdk-passkey-provider/out");te();Re();i();i();i();var gk=require("react"),hk=require("@multiversx/sdk-hw-provider");i();Te();be();i();ur();yo();xo();Me();i();i();var fh=require("react"),gh=require("@multiversx/sdk-core"),rP=require("@multiversx/sdk-extension-provider"),iP=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),aP=require("@multiversx/sdk-passkey-provider/out"),sP=B(lh());te();i();i();i();var _p=()=>Q(hu);i();i();i();i();i();i();i();var Cr=B(require("react"));var hz=(0,Cr.createContext)({}),Tz=J.getState();i();var _h=B(require("react"));i();var up=B(require("react")),GC=B(require("axios"));i();i();Tt();i();i();var KC=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),jC=require("@multiversx/sdk-webview-provider/out/WebviewProvider");Te();i();Te();me();be();i();i();me();i();Me();i();me();be();i();i();var $C=require("@multiversx/sdk-core"),VC=B(require("bignumber.js"));te();i();var qC=B(require("bignumber.js"));te();me();ue();Me();Re();i();var uh=require("react"),JC=require("@multiversx/sdk-extension-provider"),QC=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),eP=require("@multiversx/sdk-passkey-provider/out");Tt();me();i();me();be();ur();Re();i();Mn();me();i();i();var pP=require("react");i();i();ue();Ao();i();var hh=require("react");i();i();var lP=require("react"),dP=require("@multiversx/sdk-extension-provider");Mn();Te();ue();i();nt();Me();Me();i();i();Tt();be();i();var mP=require("react"),Th=require("@multiversx/sdk-core");me();i();var _P=require("react"),uP=require("@multiversx/sdk-opera-provider");Mn();Te();ue();nt();Me();Re();i();var fP=require("react");xc();Mn();Tt();Te();me();ue();nt();Re();i();var yP=require("react");Mn();me();i();i();wc();i();i();var gP=B(require("platform"));To();i();i();i();i();i();i();i();pr();ue();i();i();var hP=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");i();i();ur();yo();i();i();i();me();i();i();var TP=B(require("axios"));Me();i();i();var xP=B(wa());pr();var xh,yh,Sh,sZ=(Sh=(yh=(xh=Wt.safeWindow)==null?void 0:xh.location)==null?void 0:yh.origin)==null?void 0:Sh.includes("localhost");i();Re();i();i();var CP=require("react");te();i();i();te();i();i();i();var SP=B(require("bignumber.js"));i();i();i();var bt=B(require("react")),kh=require("react"),Eh=require("react"),xp=B(require("classnames")),Ch=require("react-dom");te();i();var wh=B(require("react")),vh=B(require("classnames"));var wP=({className:t,children:o,styles:a})=>wh.default.createElement("div",{className:(0,vh.default)(a==null?void 0:a.dappModalBody,t)},o),fp=Bn(wP,{ssrStyles:()=>Promise.resolve().then(()=>(it(),rt)),clientStyles:()=>(it(),vn(rt)).default});i();var gp=B(require("react")),Ah=B(require("classnames"));var vP=({visible:t,customFooter:o,className:a,footerText:l,styles:u})=>t?gp.default.createElement("div",{className:(0,Ah.default)(u==null?void 0:u.dappModalFooter,a)},o!=null?o:gp.default.createElement("div",null,l)):null,hp=Bn(vP,{ssrStyles:()=>Promise.resolve().then(()=>(it(),rt)),clientStyles:()=>(it(),vn(rt)).default});i();var Fo=B(require("react")),Ih=require("@fortawesome/free-solid-svg-icons"),Lh=require("@fortawesome/react-fontawesome"),Nr=B(require("classnames"));var AP=({visible:t,headerText:o,customHeader:a,className:l,closeButtonClassName:u,headerTextClassName:T,onHide:y,globalStyles:E,styles:I})=>t?a?Fo.default.createElement("div",{className:(0,Nr.default)(I==null?void 0:I.dappModalHeader,l)},a):Fo.default.createElement("div",{className:(0,Nr.default)(I==null?void 0:I.dappModalHeader,l)},Fo.default.createElement("div",{className:(0,Nr.default)(I==null?void 0:I.dappModalHeaderText,T)},o),Fo.default.createElement("button",{onClick:y,className:(0,Nr.default)(I==null?void 0:I.dappModalCloseButton,E==null?void 0:E.btn,E==null?void 0:E.btnLight,u)},Fo.default.createElement(Lh.FontAwesomeIcon,{size:"lg",icon:Ih.faTimes}))):null,Tp=Bn(AP,{ssrStyles:()=>Promise.resolve().then(()=>(it(),rt)),clientStyles:()=>(it(),vn(rt)).default});var LP={showHeader:!0,showFooter:!1,headerText:"",footerText:""},kP=({"data-testid":t="dappModal",children:o,className:a="dapp-modal-dialog-wrapper",closeOnEscape:l,config:u=LP,id:T="dapp-modal",onHide:y,parentElement:E,visible:I,styles:N})=>{let[G,M]=(0,kh.useState)(!1);if((0,Eh.useEffect)(()=>{M(!0)},[]),!I)return null;let{showHeader:ae,showFooter:ee,headerText:ce,footerText:Ce,modalDialogClassName:wt="dapp-modal-dialog",modalContentClassName:Ge="dapp-modal-dialog-content",modalHeaderClassName:In="dapp-modal-dialog-header",modalHeaderTextClassName:He="dapp-modal-dialog-header-text",modalCloseButtonClassName:Ie="dapp-modal-dialog-close-button",modalBodyClassName:hn="dapp-modal-dialog-content-body",modalFooterClassName:vt="dapp-modal-dialog-footer",customModalHeader:Uo,customModalFooter:La}=u,ka=Ea=>{Ea.key==="Escape"&&l&&(y==null||y())};return bt.default.createElement(bt.default.Fragment,null,G&&(0,Ch.createPortal)(bt.default.createElement("div",{id:T,role:"dialog","aria-modal":"true",className:(0,xp.default)(wt,N==null?void 0:N.dappModal,a),"data-testid":t,onKeyDown:ka},bt.default.createElement("div",{className:(0,xp.default)(N==null?void 0:N.dappModalContent,Ge)},bt.default.createElement(Tp,{visible:ae,headerText:ce,customHeader:Uo,className:In,headerTextClassName:He,closeButtonClassName:Ie,onHide:y}),bt.default.createElement(fp,{className:hn},o),bt.default.createElement(hp,{visible:ee,customFooter:La,footerText:Ce,className:vt}))),E!=null?E:document==null?void 0:document.body))},EP=Bn(kP,{ssrStyles:()=>Promise.resolve().then(()=>(it(),rt)),clientStyles:()=>(it(),vn(rt)).default});i();i();var Ph=require("react");i();i();var Nh=require("react"),NP=require("@multiversx/sdk-hw-provider");Mn();Te();me();ue();nt();i();var PP=require("react");i();i();var yp=require("react");Te();me();ue();nt();Re();i();var DP=require("react"),OP=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Mn();Te();ue();nt();Me();Me();i();var MP=require("react"),FP=require("@multiversx/sdk-passkey-provider/out");Mn();Te();ue();nt();Me();Me();i();i();var Rh=require("react");i();var WP=require("react");i();var Sp=require("react"),UP=require("socket.io-client");me();i();i();i();var GP=require("react");be();i();i();i();var $P=B(require("swr"));i();i();i();i();var HP=B(require("axios"));i();i();i();i();var Mh=B(Oh()),Fh=t=>{if(t<=0||isNaN(t)||!t||(0,Mh.isString)(t))return"N/A time";if(t>=86400)return"more than one day";let o=Math.floor(t/3600),a=t%3600,l=Math.floor(a/60),u=a%60,T=[];return o>0&&T.push(`${o}h`),l>0&&T.push(`${l}min`),u>0&&T.push(`${u}sec`),T.join(" ")};var Bh=({loginToken:t,version:o})=>{if(!t||!o)return null;let{ledgerWithUsernames:a}=Du(o),l=Po(t);if(l==null)return null;let u="For security, please confirm that your address:",T="and Auth Token:",y="are the one shown on your Ledger device screen now.";if(a){let E=Fh(l.ttl),I="For security, please confirm your address:",N="and authorize:";return{data:`${l.origin} for ${E}.`,confirmAddressText:I,authText:N}}return{data:t,confirmAddressText:u,authText:T,areShownText:y}};var qP=({token:t,className:o="dapp-ledger-confirm-address",customContentComponent:a,confirmAddressClassNames:l,styles:u})=>{var ce,Ce;let{ledgerAccount:T}=_p(),{ledgerModalTitleClassName:y,ledgerModalConfirmDescriptionClassName:E,ledgerModalConfirmDataClassName:I,ledgerModalConfirmFooterClassName:N,ledgerModalConfirmContentClassName:G}=l||{},M=Q(Tr),ae=(ce=M==null?void 0:M.loginToken)!=null?ce:t,ee=Bh({loginToken:ae,version:T==null?void 0:T.version});return Ye.default.createElement("div",{className:(0,at.default)(u==null?void 0:u.ledgerConfirmAddress,G,o),"data-testid":"ledgerConfirmAddress"},Ye.default.createElement("h4",{className:(0,at.default)(u==null?void 0:u.ledgerConfirmAddressHeading,y)},"Confirm Ledger Address"),a,Ye.default.createElement("div",{className:u==null?void 0:u.ledgerConfirmAddressSection},Ye.default.createElement("div",{className:(0,at.default)(u==null?void 0:u.ledgerConfirmAddressDescription,E)},ee==null?void 0:ee.confirmAddressText),Ye.default.createElement("div",{className:(0,at.default)(u==null?void 0:u.ledgerConfirmAddressData,I)},(Ce=T==null?void 0:T.address)!=null?Ce:"")),Ye.default.createElement("div",{className:u==null?void 0:u.ledgerConfirmAddressSection},Ye.default.createElement("div",{className:(0,at.default)(u==null?void 0:u.ledgerConfirmAddressDescription,E)},ee==null?void 0:ee.authText),Ye.default.createElement("div",{className:(0,at.default)(u==null?void 0:u.ledgerConfirmAddressData,I)},ee==null?void 0:ee.data),Ye.default.createElement("div",{className:(0,at.default)(u==null?void 0:u.ledgerConfirmAddressDescription,E)},ee==null?void 0:ee.areShownText)),Ye.default.createElement("div",{className:(0,at.default)(u==null?void 0:u.ledgerConfirmAddressFooter,N)},Ye.default.createElement("div",null,"Select Approve on your device to confirm."),Ye.default.createElement("div",null,"Or, if it does not match, close this page and"," ",Ye.default.createElement("a",{href:"https://help.multiversx.com/en/",target:"_blank",rel:"noreferrer"},"contact support"),".")))},zP=Bn(qP,{ssrStyles:()=>Promise.resolve().then(()=>(wp(),bp)),clientStyles:()=>(wp(),vn(bp)).default});0&&(module.exports={ConfirmAddress});
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
