"use strict";var Kp=Object.create;var lo=Object.defineProperty,Xp=Object.defineProperties,Yp=Object.getOwnPropertyDescriptor,Jp=Object.getOwnPropertyDescriptors,Zp=Object.getOwnPropertyNames,Oo=Object.getOwnPropertySymbols,Qp=Object.getPrototypeOf,Wn=Object.prototype.hasOwnProperty,mr=Object.prototype.propertyIsEnumerable;var pr=(e,o,t)=>o in e?lo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Wn.call(o,t)&&pr(e,t,o[t]);if(Oo)for(var t of Oo(o))mr.call(o,t)&&pr(e,t,o[t]);return e},w=(e,o)=>Xp(e,Jp(o));var Ie=(e,o)=>{var t={};for(var s in e)Wn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Oo)for(var s of Oo(e))o.indexOf(s)<0&&mr.call(e,s)&&(t[s]=e[s]);return t};var f=(e,o)=>()=>(e&&(o=e(e=0)),o);var x=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),ee=(e,o)=>{for(var t in o)lo(e,t,{get:o[t],enumerable:!0})},dr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Zp(o))!Wn.call(e,c)&&c!==t&&lo(e,c,{get:()=>o[c],enumerable:!(s=Yp(o,c))||s.enumerable});return e};var y=(e,o,t)=>(t=e!=null?Kp(Qp(e)):{},dr(o||!e||!e.__esModule?lo(t,"default",{value:e,enumerable:!0}):t,e)),Z=e=>dr(lo({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((s,c)=>{var p=l=>{try{_(t.next(l))}catch(T){c(T)}},m=l=>{try{_(t.throw(l))}catch(T){c(T)}},_=l=>l.done?s(l.value):Promise.resolve(l.value).then(p,m);_((t=t.apply(e,o)).next())});var ur=x(Fo=>{"use strict";n();Fo.byteLength=om;Fo.toByteArray=tm;Fo.fromByteArray=im;var oe=[],X=[],em=typeof Uint8Array!="undefined"?Uint8Array:Array,Gn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ae=0,lr=Gn.length;Ae<lr;++Ae)oe[Ae]=Gn[Ae],X[Gn.charCodeAt(Ae)]=Ae;var Ae,lr;X["-".charCodeAt(0)]=62;X["_".charCodeAt(0)]=63;function _r(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function om(e){var o=_r(e),t=o[0],s=o[1];return(t+s)*3/4-s}function nm(e,o,t){return(o+t)*3/4-t}function tm(e){var o,t=_r(e),s=t[0],c=t[1],p=new em(nm(e,s,c)),m=0,_=c>0?s-4:s,l;for(l=0;l<_;l+=4)o=X[e.charCodeAt(l)]<<18|X[e.charCodeAt(l+1)]<<12|X[e.charCodeAt(l+2)]<<6|X[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=X[e.charCodeAt(l)]<<2|X[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=X[e.charCodeAt(l)]<<10|X[e.charCodeAt(l+1)]<<4|X[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function rm(e){return oe[e>>18&63]+oe[e>>12&63]+oe[e>>6&63]+oe[e&63]}function am(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(rm(s));return c.join("")}function im(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,_=t-s;m<_;m+=p)c.push(am(e,m,m+p>_?_:m+p));return s===1?(o=e[t-1],c.push(oe[o>>2]+oe[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(oe[o>>10]+oe[o>>4&63]+oe[o<<2&63]+"=")),c.join("")}});var gr=x(Hn=>{n();Hn.read=function(e,o,t,s,c){var p,m,_=c*8-s-1,l=(1<<_)-1,T=l>>1,b=-7,S=t?c-1:0,E=t?-1:1,N=e[o+S];for(S+=E,p=N&(1<<-b)-1,N>>=-b,b+=_;b>0;p=p*256+e[o+S],S+=E,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+S],S+=E,b-=8);if(p===0)p=1-T;else{if(p===l)return m?NaN:(N?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-T}return(N?-1:1)*m*Math.pow(2,p-s)};Hn.write=function(e,o,t,s,c,p){var m,_,l,T=p*8-c-1,b=(1<<T)-1,S=b>>1,E=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,N=s?0:p-1,K=s?1:-1,xe=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+S>=1?o+=E/l:o+=E*Math.pow(2,1-S),o*l>=2&&(m++,l/=2),m+S>=b?(_=0,m=b):m+S>=1?(_=(o*l-1)*Math.pow(2,c),m=m+S):(_=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+N]=_&255,N+=K,_/=256,c-=8);for(m=m<<c|_,T+=c;T>0;e[t+N]=m&255,N+=K,m/=256,T-=8);e[t+N-K]|=xe*128}});var Lr=x(We=>{"use strict";n();var Vn=ur(),Be=gr(),fr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;We.Buffer=d;We.SlowBuffer=lm;We.INSPECT_MAX_BYTES=50;var Uo=2147483647;We.kMaxLength=Uo;d.TYPED_ARRAY_SUPPORT=sm();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function sm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function de(e){if(e>Uo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return zn(e)}return xr(e,o,t)}d.poolSize=8192;function xr(e,o,t){if(typeof e=="string")return pm(e,o);if(ArrayBuffer.isView(e))return mm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ne(e,ArrayBuffer)||e&&ne(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ne(e,SharedArrayBuffer)||e&&ne(e.buffer,SharedArrayBuffer)))return jn(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=dm(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return xr(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function yr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function cm(e,o,t){return yr(e),e<=0?de(e):o!==void 0?typeof t=="string"?de(e).fill(o,t):de(e).fill(o):de(e)}d.alloc=function(e,o,t){return cm(e,o,t)};function zn(e){return yr(e),de(e<0?0:Kn(e)|0)}d.allocUnsafe=function(e){return zn(e)};d.allocUnsafeSlow=function(e){return zn(e)};function pm(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Sr(e,o)|0,s=de(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function $n(e){for(var o=e.length<0?0:Kn(e.length)|0,t=de(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function mm(e){if(ne(e,Uint8Array)){var o=new Uint8Array(e);return jn(o.buffer,o.byteOffset,o.byteLength)}return $n(e)}function jn(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function dm(e){if(d.isBuffer(e)){var o=Kn(e.length)|0,t=de(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Xn(e.length)?de(0):$n(e);if(e.type==="Buffer"&&Array.isArray(e.data))return $n(e.data)}function Kn(e){if(e>=Uo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Uo.toString(16)+" bytes");return e|0}function lm(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ne(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ne(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ne(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Sr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ne(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return qn(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return kr(e).length;default:if(c)return s?-1:qn(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=Sr;function _m(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return wm(this,o,t);case"utf8":case"utf-8":return wr(this,o,t);case"ascii":return Sm(this,o,t);case"latin1":case"binary":return bm(this,o,t);case"base64":return xm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vm(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function ke(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)ke(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)ke(this,t,t+3),ke(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)ke(this,t,t+7),ke(this,t+1,t+6),ke(this,t+2,t+5),ke(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?wr(this,0,o):_m.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=We.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};fr&&(d.prototype[fr]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(ne(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=s-t,l=Math.min(m,_),T=this.slice(c,p),b=o.slice(t,s),S=0;S<l;++S)if(T[S]!==b[S]){m=T[S],_=b[S];break}return m<_?-1:_<m?1:0};function br(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Xn(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:hr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):hr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function hr(e,o,t,s,c){var p=1,m=e.length,_=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function l(N,K){return p===1?N[K]:N.readUInt16BE(K*p)}var T;if(c){var b=-1;for(T=t;T<m;T++)if(l(e,T)===l(o,b===-1?0:T-b)){if(b===-1&&(b=T),T-b+1===_)return b*p}else b!==-1&&(T-=T-b),b=-1}else for(t+_>m&&(t=m-_),T=t;T>=0;T--){for(var S=!0,E=0;E<_;E++)if(l(e,T+E)!==l(o,E)){S=!1;break}if(S)return T}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return br(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return br(this,o,t,s,!1)};function um(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var _=parseInt(o.substr(m*2,2),16);if(Xn(_))return m;e[t+m]=_}return m}function gm(e,o,t,s){return Bo(qn(o,e.length-t),e,t,s)}function fm(e,o,t,s){return Bo(km(o),e,t,s)}function hm(e,o,t,s){return Bo(kr(o),e,t,s)}function Tm(e,o,t,s){return Bo(Lm(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return um(this,o,t,s);case"utf8":case"utf-8":return gm(this,o,t,s);case"ascii":case"latin1":case"binary":return fm(this,o,t,s);case"base64":return hm(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Tm(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function xm(e,o,t){return o===0&&t===e.length?Vn.fromByteArray(e):Vn.fromByteArray(e.slice(o,t))}function wr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var l,T,b,S;switch(_){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(S=(p&31)<<6|l&63,S>127&&(m=S));break;case 3:l=e[c+1],T=e[c+2],(l&192)===128&&(T&192)===128&&(S=(p&15)<<12|(l&63)<<6|T&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:l=e[c+1],T=e[c+2],b=e[c+3],(l&192)===128&&(T&192)===128&&(b&192)===128&&(S=(p&15)<<18|(l&63)<<12|(T&63)<<6|b&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=_}return ym(s)}var Tr=4096;function ym(e){var o=e.length;if(o<=Tr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Tr));return t}function Sm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function bm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function wm(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Em[e[p]];return c}function vm(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function F(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||F(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||F(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||F(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||F(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||F(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||F(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||F(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||F(o,4,this.length),Be.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||F(o,4,this.length),Be.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||F(o,8,this.length),Be.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||F(o,8,this.length),Be.read(this,o,!1,52,8)};function H(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;H(this,o,t,s,p,0)}var m=1,_=0;for(this[t]=o&255;++_<s&&(m*=256);)this[t+_]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;H(this,o,t,s,p,0)}var m=s-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);H(this,o,t,s,p-1,-p)}var m=0,_=1,l=0;for(this[t]=o&255;++m<s&&(_*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);H(this,o,t,s,p-1,-p)}var m=s-1,_=1,l=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function vr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ir(e,o,t,s,c){return o=+o,t=t>>>0,c||vr(e,o,t,4,34028234663852886e22,-34028234663852886e22),Be.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return Ir(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return Ir(this,o,t,!1,s)};function Ar(e,o,t,s,c){return o=+o,t=t>>>0,c||vr(e,o,t,8,17976931348623157e292,-17976931348623157e292),Be.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return Ar(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return Ar(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var _=d.isBuffer(o)?o:d.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=_[m%l]}return this};var Im=/[^+/0-9A-Za-z-_]/g;function Am(e){if(e=e.split("=")[0],e=e.trim().replace(Im,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function qn(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function km(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Lm(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function kr(e){return Vn.toByteArray(Am(e))}function Bo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ne(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Xn(e){return e!==e}var Em=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Rr=x((gT,Nr)=>{n();var R=Nr.exports={},te,re;function Yn(){throw new Error("setTimeout has not been defined")}function Jn(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?te=setTimeout:te=Yn}catch(e){te=Yn}try{typeof clearTimeout=="function"?re=clearTimeout:re=Jn}catch(e){re=Jn}})();function Er(e){if(te===setTimeout)return setTimeout(e,0);if((te===Yn||!te)&&setTimeout)return te=setTimeout,setTimeout(e,0);try{return te(e,0)}catch(o){try{return te.call(null,e,0)}catch(t){return te.call(this,e,0)}}}function Pm(e){if(re===clearTimeout)return clearTimeout(e);if((re===Jn||!re)&&clearTimeout)return re=clearTimeout,clearTimeout(e);try{return re(e)}catch(o){try{return re.call(null,e)}catch(t){return re.call(this,e)}}}var le=[],Ge=!1,Le,Wo=-1;function Cm(){!Ge||!Le||(Ge=!1,Le.length?le=Le.concat(le):Wo=-1,le.length&&Pr())}function Pr(){if(!Ge){var e=Er(Cm);Ge=!0;for(var o=le.length;o;){for(Le=le,le=[];++Wo<o;)Le&&Le[Wo].run();Wo=-1,o=le.length}Le=null,Ge=!1,Pm(e)}}R.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];le.push(new Cr(e,o)),le.length===1&&!Ge&&Er(Pr)};function Cr(e,o){this.fun=e,this.array=o}Cr.prototype.run=function(){this.fun.apply(null,this.array)};R.title="browser";R.browser=!0;R.env={};R.argv=[];R.version="";R.versions={};function _e(){}R.on=_e;R.addListener=_e;R.once=_e;R.off=_e;R.removeListener=_e;R.removeAllListeners=_e;R.emit=_e;R.prependListener=_e;R.prependOnceListener=_e;R.listeners=function(e){return[]};R.binding=function(e){throw new Error("process.binding is not supported")};R.cwd=function(){return"/"};R.chdir=function(e){throw new Error("process.chdir is not supported")};R.umask=function(){return 0}});var r,i,Nm,a,n=f(()=>{r=y(Lr()),i=y(Rr()),Nm=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Nm});var Dr=f(()=>{"use strict";n()});var ae=f(()=>{"use strict";n()});var Mr=f(()=>{"use strict";n()});var Zn,Or=f(()=>{"use strict";n();Zn=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(Zn||{})});var Fr=f(()=>{"use strict";n()});var Qn=f(()=>{"use strict";n()});var Ur=f(()=>{"use strict";n()});var et=f(()=>{"use strict";n()});var Br=f(()=>{"use strict";n()});var Wr=f(()=>{"use strict";n()});var Ee,He,ye=f(()=>{"use strict";n();Ee=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),He=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Gr,kT,Hr,LT,L=f(()=>{"use strict";n();ye();Gr=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Gr||{}),kT=u(u({},He.WindowProviderRequestEnums),Gr),Hr=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Hr||{}),LT=u(u({},He.WindowProviderResponseEnums),Hr)});var Vr=f(()=>{"use strict";n()});var $r=f(()=>{"use strict";n()});var V=f(()=>{"use strict";n()});var jr=f(()=>{"use strict";n()});var qr=f(()=>{"use strict";n()});var zr=f(()=>{"use strict";n()});var D=f(()=>{"use strict";n();et();Br();Wr();L();Vr();$r();V();jr();qr();zr()});var Ve,Kr,jT,Xr,qT,Yr,zT,KT,Rm,$e=f(()=>{"use strict";n();D();Ve={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Kr,egldLabel:jT}=Ve["devnet"],{chainId:Xr,egldLabel:qT}=Ve["testnet"],{chainId:Yr,egldLabel:zT}=Ve["mainnet"],KT={["devnet"]:Kr,["testnet"]:Xr,["mainnet"]:Yr},Rm={[Kr]:"devnet",[Xr]:"testnet",[Yr]:"mainnet"}});var Go=f(()=>{"use strict";n()});var ie,Jr=f(()=>{"use strict";n();ie=require("@multiversx/sdk-web-wallet-provider")});var Pe,_o=f(()=>{"use strict";n();Pe=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Zr,Qr,ot,ex,ox,nt=f(()=>{"use strict";n();_o();ot=String((Qr=(Zr=Pe.safeWindow)==null?void 0:Zr.navigator)==null?void 0:Qr.userAgent),ex=/^((?!chrome|android).)*safari/i.test(ot),ox=/firefox/i.test(ot)&&/windows/i.test(ot)});var Ho,Vo,ea,$o,oa,je,na,I=f(()=>{"use strict";n();Dr();ae();Mr();Or();Fr();Qn();Ur();$e();Go();Jr();nt();Ho=5e4,Vo=1e9,ea=1,$o="logout",oa="login",je="0",na="..."});var Ce,qe=f(()=>{"use strict";n();Ce=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var tt={};ee(tt,{css:()=>ra,default:()=>Dm});var ra,Dm,rt=f(()=>{"use strict";n();ra=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ra));Dm={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var go,jo=f(()=>{"use strict";n();go=()=>Date.now()/1e3});var sa=f(()=>{"use strict";n()});var ca=f(()=>{"use strict";n()});var it=f(()=>{"use strict";n();jo();sa();ca()});var st={};ee(st,{clear:()=>Wm,getItem:()=>Um,localStorageKeys:()=>Se,removeItem:()=>Bm,setItem:()=>Fm});var Se,qo,Fm,Um,Bm,Wm,ze=f(()=>{"use strict";n();it();Se={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},qo=typeof localStorage!="undefined",Fm=({key:e,data:o,expires:t})=>{!qo||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Um=e=>{if(!qo)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:go()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Bm=e=>{!qo||localStorage.removeItem(String(e))},Wm=()=>{!qo||localStorage.clear()}});var ct={};ee(ct,{clear:()=>la,getItem:()=>ma,removeItem:()=>da,setItem:()=>pa,storage:()=>Gm});var pa,ma,da,la,Gm,_a=f(()=>{"use strict";n();pa=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ma=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},da=e=>sessionStorage.removeItem(String(e)),la=()=>sessionStorage.clear(),Gm={setItem:pa,getItem:ma,removeItem:da,clear:la}});var Ne,Ke=f(()=>{"use strict";n();ze();_a();Ne={session:ct,local:st}});var pt,P,j,C=f(()=>{"use strict";n();pt=require("@reduxjs/toolkit");I();P=(0,pt.createAction)($o),j=(0,pt.createAction)(oa,e=>({payload:e}))});var dt,ua,ga,zo,mt,fa,Ko,Hm,lt,Wx,Vm,$m,Gx,Hx,Vx,jm,qm,Xo,Yo=f(()=>{"use strict";n();dt=require("@multiversx/sdk-core"),ua=require("@reduxjs/toolkit"),ga=require("redux-persist");I();Ke();ze();C();zo={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:je},mt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":zo},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},fa=(0,ua.createSlice)({name:"accountInfoSlice",initialState:mt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new dt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:zo},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(P,()=>(Ne.local.removeItem(Se.loginExpiresAt),mt)),e.addCase(j,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new dt.Address(s).hex()}),e.addCase(ga.REHYDRATE,(o,t)=>{var T;if(!((T=t.payload)!=null&&T.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=s;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:mt.accounts,o.publicKey=_})}}),{setAccount:Ko,setAddress:Hm,setAccountNonce:lt,setAccountShard:Wx,setLedgerAccount:Vm,updateLedgerAccount:$m,setWalletConnectAccount:Gx,setIsAccountLoading:Hx,setAccountLoadingError:Vx,setWebsocketEvent:jm,setWebsocketBatchEvent:qm}=fa.actions,Xo=fa.reducer});function fo(){return new Date().setHours(new Date().getHours()+24)}function ho(e){Ne.local.setItem({key:Se.loginExpiresAt,data:e,expires:e})}var _t=f(()=>{"use strict";n();Ke();ze()});var Ta,ha,xa,Qx,zm,Km,ya,ey,Xm,Sa,oy,ny,ty,Jo,Zo=f(()=>{"use strict";n();Ta=require("@reduxjs/toolkit");_t();L();C();ha={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},xa=(0,Ta.createSlice)({name:"loginInfoSlice",initialState:ha,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(P,()=>ha),e.addCase(j,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,ho(fo())})}}),{setLoginMethod:Qx,setWalletConnectLogin:zm,setLedgerLogin:Km,setTokenLogin:ya,setTokenLoginSignature:ey,setWalletLogin:Xm,invalidateLoginSession:Sa,setLogoutRoute:oy,setIsWalletConnectV2Initialized:ny,setWebviewLogin:ty}=xa.actions,Jo=xa.reducer});var wa,ba,va,sy,Ym,cy,Jm,Qo,en=f(()=>{"use strict";n();wa=require("@reduxjs/toolkit");C();ba={},va=(0,wa.createSlice)({name:"modalsSlice",initialState:ba,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(P,()=>ba)}}),{setTxSubmittedModal:sy,setNotificationModal:Ym,clearTxSubmittedModal:cy,clearNotificationModal:Jm}=va.actions,Qo=va.reducer});var M,B=f(()=>{"use strict";n();qe();M=()=>{if(!Ce())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Ia=f(()=>{"use strict";n();B()});var Aa=f(()=>{"use strict";n();W()});var ka=f(()=>{"use strict";n();_o()});var W=f(()=>{"use strict";n();Ia();Aa();B();ka()});var To=f(()=>{"use strict";n();W()});var Ea=f(()=>{"use strict";n();To()});function Pa(e){return e[Math.floor(Math.random()*e.length)]}var Ca=f(()=>{"use strict";n()});var ut=f(()=>{"use strict";n();Qn()});var ue=f(()=>{"use strict";n();Ea();Ca();ut()});var Na,Ra,Da,gt,Qm,Ma,Wy,Gy,ed,on,nn=f(()=>{"use strict";n();Na=require("@reduxjs/toolkit"),Ra=y(require("lodash.omit")),Da=require("redux-persist");Go();C();ue();gt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Qm={network:gt},Ma=(0,Na.createSlice)({name:"appConfig",initialState:Qm,reducers:{initializeNetworkConfig:(e,o)=>{let t=Pa(o.payload.walletConnectV2RelayAddresses),s=(0,Ra.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(P,o=>{o.network.customWalletAddress=void 0}),e.addCase(Da.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:Wy,updateNetworkConfig:Gy,setCustomWalletAddress:ed}=Ma.actions,on=Ma.reducer});var Oa,ft,Fa,zy,Ky,Xy,tn,rn=f(()=>{"use strict";n();Oa=require("@reduxjs/toolkit");D();C();ft={isSigning:!1,signedSessions:{}},Fa=(0,Oa.createSlice)({name:"signedMessageInfoSliceState",initialState:ft,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>ft},extraReducers:e=>{e.addCase(P,()=>ft)}}),{setSignSession:zy,clearSignedMessageInfo:Ky,setSignSessionState:Xy}=Fa.actions,tn=Fa.reducer});var Ba,Wa,Ua,Ga,od,nd,nS,td,an,sn=f(()=>{"use strict";n();Ba=require("@reduxjs/toolkit"),Wa=require("redux-persist");D();jo();C();Ua={customToasts:[],transactionToasts:[]},Ga=(0,Ba.createSlice)({name:"toastsSlice",initialState:Ua,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:go(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(P,()=>Ua),e.addCase(Wa.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:od,removeCustomToast:nd,addTransactionToast:nS,removeTransactionToast:td}=Ga.actions,an=Ga.reducer});var Ha,Tt,xt,yt,rd,ht,Va,iS,ad,St,cn,pn=f(()=>{"use strict";n();Ha=require("@reduxjs/toolkit");C();Tt="Transaction failed",xt="Transaction successful",yt="Processing transaction",rd="Transaction submitted",ht={},Va=(0,Ha.createSlice)({name:"transactionsInfo",initialState:ht,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Tt,successMessage:(s==null?void 0:s.successMessage)||xt,processingMessage:(s==null?void 0:s.processingMessage)||yt,submittedMessage:(s==null?void 0:s.submittedMessage)||rd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>ht},extraReducers:e=>{e.addCase(P,()=>ht)}}),{clearTransactionsInfo:iS,setTransactionsDisplayInfo:ad,clearTransactionsInfoForSessionId:St}=Va.actions,cn=Va.reducer});function Ye(e){return e!=null&&(gd(e)||yd(e))}function Je(e){return e!=null&&(fd(e)||Sd(e))}function Ze(e){return e!=null&&(hd(e)||bd(e))}function $a(e){return e!=null&&(Td(e)||wd(e))}function bt(e){return e!=null&&xd(e)}function gd(e){return e!=null&&id.includes(e)}function fd(e){return e!=null&&sd.includes(e)}function hd(e){return e!=null&&cd.includes(e)}function Td(e){return e!=null&&pd.includes(e)}function xd(e){return e!=null&&md.includes(e)}function yd(e){return e!=null&&dd.includes(e)}function Sd(e){return e!=null&&ld.includes(e)}function bd(e){return e!=null&&_d.includes(e)}function wd(e){return e!=null&&ud.includes(e)}var id,sd,cd,pd,md,dd,ld,_d,ud,Qe=f(()=>{"use strict";n();L();id=["sent"],sd=["success"],cd=["fail","cancelled","timedOut"],pd=["invalid"],md=["timedOut"],dd=["pending"],ld=["success"],_d=["fail","invalid"],ud=["not executed"]});var ja,qa,xo,vd,za,Ka,Xa,Id,mn,Ad,kd,gS,Ld,yo,wt,fS,dn,ln=f(()=>{"use strict";n();ja=require("@reduxjs/toolkit"),qa=require("redux-persist");L();Qe();C();xo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},vd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},za=(0,ja.createSlice)({name:"transactionsSlice",initialState:xo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,T;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},vd),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((T=e==null?void 0:e.transactionsToSign)==null?void 0:T.sessionId)===t&&(e.transactionsToSign=xo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var T,b,S,E,N,K,xe,Mo;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,l=(b=(T=e.signedTransactions)==null?void 0:T[t])==null?void 0:b.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(J=>J.hash===p?w(u(u({},m!=null?m:{}),J),{status:s,errorMessage:c,inTransit:_}):J);let Fn=(E=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:E.every(J=>Je(J.status)),Un=(K=(N=e.signedTransactions[t])==null?void 0:N.transactions)==null?void 0:K.some(J=>Ze(J.status)),Bn=(Mo=(xe=e.signedTransactions[t])==null?void 0:xe.transactions)==null?void 0:Mo.every(J=>$a(J.status));Fn&&(e.signedTransactions[t].status="success"),Un&&(e.signedTransactions[t].status="fail"),Bn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=xo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=xo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(P,()=>xo),e.addCase(qa.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((_,[l,T])=>{let b=new Date(l),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(_[l]=T),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Ka,updateSignedTransactions:Xa,setTransactionsToSign:Id,clearAllTransactionsToSign:mn,clearAllSignedTransactions:Ad,clearSignedTransaction:kd,clearTransactionToSign:gS,setSignTransactionsError:Ld,setSignTransactionsCancelMessage:yo,moveTransactionsToSignedState:wt,updateSignedTransactionsCustomTransactionInformation:fS}=za.actions,dn=za.reducer});var Ya,vt,Ja,yS,SS,Ed,bS,_n,un=f(()=>{"use strict";n();Ya=require("@reduxjs/toolkit");C();vt={},Ja=(0,Ya.createSlice)({name:"batchTransactionsSlice",initialState:vt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>vt},extraReducers:e=>{e.addCase(P,()=>vt)}}),{setBatchTransactions:yS,updateBatchTransactions:SS,clearBatchTransactions:Ed,clearAllBatchTransactions:bS}=Ja.actions,_n=Ja.reducer});var Qa,Za,ei,AS,oi,It=f(()=>{"use strict";n();Qa=require("@reduxjs/toolkit");C();Za={},ei=(0,Qa.createSlice)({name:"dappConfigSlice",initialState:Za,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(P,()=>Za)}}),{setDappConfig:AS}=ei.actions,oi=ei.reducer});var k=f(()=>{"use strict";n();Yo();Zo();en();nn();rn();sn();pn();ln();un();It()});var At=f(()=>{"use strict";n()});var ri,Rd,Dd,Re,hn=f(()=>{"use strict";n();ri=require("@reduxjs/toolkit");At();Yo();un();It();Zo();en();nn();rn();sn();pn();ln();Rd={["account"]:Xo,["dappConfig"]:oi,["loginInfo"]:Jo,["modals"]:Qo,["networkConfig"]:on,["signedMessageInfo"]:tn,["toasts"]:an,["transactionsInfo"]:cn,["transactions"]:dn,["batchTransactions"]:_n},Dd=(e={})=>(0,ri.combineReducers)(u(u({},Rd),e)),Re=Dd});var ci={};ee(ci,{default:()=>Yd,sessionStorageReducers:()=>kt});function ge(e,o=[]){return{key:e,version:1,storage:ii.default,blacklist:o}}var $,ai,ii,Md,So,Od,Fd,Ud,Bd,Wd,Gd,Hd,Vd,$d,jd,si,qd,kt,zd,Kd,Xd,Yd,pi=f(()=>{"use strict";n();$=require("redux-persist"),ai=y(require("redux-persist/lib/storage")),ii=y(require("redux-persist/lib/storage/session"));hn();k();Yo();un();Zo();en();nn();rn();sn();pn();ln();At();Md={persistReducersStorageType:"localStorage"},So={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Od=ge(So["account"]),Fd=ge(So["loginInfo"]),Ud=ge(So["modals"]),Bd=ge(So["networkConfig"]),Wd={2:e=>w(u({},e),{networkConfig:gt})};Gd=ge("sdk-dapp-transactionsInfo"),Hd=ge("sdk-dapp-transactions",["transactionsToSign"]),Vd=ge("sdk-dapp-batchTransactions",["batchTransactions"]),$d=ge("sdk-dapp-toasts"),jd=ge("sdk-dapp-signedMessageInfo"),si={key:"sdk-dapp-store",version:2,storage:ai.default,whitelist:Object.keys(So),migrate:(0,$.createMigrate)(Wd,{debug:!1})},qd=w(u({},si),{whitelist:[]}),kt={["toasts"]:(0,$.persistReducer)($d,an),["transactions"]:(0,$.persistReducer)(Hd,dn),["transactionsInfo"]:(0,$.persistReducer)(Gd,cn),["batchTransactions"]:(0,$.persistReducer)(Vd,_n),["signedMessageInfo"]:(0,$.persistReducer)(jd,tn)},zd=w(u({},kt),{["account"]:(0,$.persistReducer)(Od,Xo),["loginInfo"]:(0,$.persistReducer)(Fd,Jo),["modals"]:(0,$.persistReducer)(Ud,Qo),["networkConfig"]:(0,$.persistReducer)(Bd,on)}),Kd=Md.persistReducersStorageType==="localStorage",Xd=Kd?(0,$.persistReducer)(si,Re(kt)):(0,$.persistReducer)(qd,Re(zd)),Yd=Xd});var mi={};ee(mi,{default:()=>Jd});var Jd,di=f(()=>{"use strict";n();hn();Jd=Re()});var li={};ee(li,{default:()=>Qd});var Y,Zd,Qd,_i=f(()=>{"use strict";n();Y=require("redux-persist"),Zd=[Y.FLUSH,Y.REHYDRATE,Y.PAUSE,Y.PERSIST,Y.PURGE,Y.REGISTER],Qd=Zd});var fi={};ee(fi,{default:()=>gi});function gi(e){return(0,ui.persistStore)(e)}var ui,hi=f(()=>{"use strict";n();ui=require("redux-persist")});var ms=x((vD,ps)=>{n();var X_=typeof a=="object"&&a&&a.Object===Object&&a;ps.exports=X_});var ko=x((ID,ds)=>{n();var Y_=ms(),J_=typeof self=="object"&&self&&self.Object===Object&&self,Z_=Y_||J_||Function("return this")();ds.exports=Z_});var jt=x((AD,ls)=>{n();var Q_=ko(),eu=Q_.Symbol;ls.exports=eu});var fs=x((kD,gs)=>{n();var _s=jt(),us=Object.prototype,ou=us.hasOwnProperty,nu=us.toString,Lo=_s?_s.toStringTag:void 0;function tu(e){var o=ou.call(e,Lo),t=e[Lo];try{e[Lo]=void 0;var s=!0}catch(p){}var c=nu.call(e);return s&&(o?e[Lo]=t:delete e[Lo]),c}gs.exports=tu});var Ts=x((LD,hs)=>{n();var ru=Object.prototype,au=ru.toString;function iu(e){return au.call(e)}hs.exports=iu});var qt=x((ED,Ss)=>{n();var xs=jt(),su=fs(),cu=Ts(),pu="[object Null]",mu="[object Undefined]",ys=xs?xs.toStringTag:void 0;function du(e){return e==null?e===void 0?mu:pu:ys&&ys in Object(e)?su(e):cu(e)}Ss.exports=du});var ws=x((PD,bs)=>{n();var lu=Array.isArray;bs.exports=lu});var Is=x((CD,vs)=>{n();function _u(e){return e!=null&&typeof e=="object"}vs.exports=_u});var ks=x((ND,As)=>{n();var uu=qt(),gu=ws(),fu=Is(),hu="[object String]";function Tu(e){return typeof e=="string"||!gu(e)&&fu(e)&&uu(e)==hu}As.exports=Tu});var Nn=x((C3,Ns)=>{n();function Fu(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Ns.exports=Fu});var Ds=x((N3,Rs)=>{n();var Uu=qt(),Bu=Nn(),Wu="[object AsyncFunction]",Gu="[object Function]",Hu="[object GeneratorFunction]",Vu="[object Proxy]";function $u(e){if(!Bu(e))return!1;var o=Uu(e);return o==Gu||o==Hu||o==Wu||o==Vu}Rs.exports=$u});var Os=x((R3,Ms)=>{n();var ju=ko(),qu=ju["__core-js_shared__"];Ms.exports=qu});var Bs=x((D3,Us)=>{n();var Yt=Os(),Fs=function(){var e=/[^.]+$/.exec(Yt&&Yt.keys&&Yt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function zu(e){return!!Fs&&Fs in e}Us.exports=zu});var Gs=x((M3,Ws)=>{n();var Ku=Function.prototype,Xu=Ku.toString;function Yu(e){if(e!=null){try{return Xu.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Ws.exports=Yu});var Vs=x((O3,Hs)=>{n();var Ju=Ds(),Zu=Bs(),Qu=Nn(),eg=Gs(),og=/[\\^$.*+?()[\]{}|]/g,ng=/^\[object .+?Constructor\]$/,tg=Function.prototype,rg=Object.prototype,ag=tg.toString,ig=rg.hasOwnProperty,sg=RegExp("^"+ag.call(ig).replace(og,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function cg(e){if(!Qu(e)||Zu(e))return!1;var o=Ju(e)?sg:ng;return o.test(eg(e))}Hs.exports=cg});var js=x((F3,$s)=>{n();function pg(e,o){return e==null?void 0:e[o]}$s.exports=pg});var Rn=x((U3,qs)=>{n();var mg=Vs(),dg=js();function lg(e,o){var t=dg(e,o);return mg(t)?t:void 0}qs.exports=lg});var Eo=x((B3,zs)=>{n();var _g=Rn(),ug=_g(Object,"create");zs.exports=ug});var Ys=x((W3,Xs)=>{n();var Ks=Eo();function gg(){this.__data__=Ks?Ks(null):{},this.size=0}Xs.exports=gg});var Zs=x((G3,Js)=>{n();function fg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Js.exports=fg});var ec=x((H3,Qs)=>{n();var hg=Eo(),Tg="__lodash_hash_undefined__",xg=Object.prototype,yg=xg.hasOwnProperty;function Sg(e){var o=this.__data__;if(hg){var t=o[e];return t===Tg?void 0:t}return yg.call(o,e)?o[e]:void 0}Qs.exports=Sg});var nc=x((V3,oc)=>{n();var bg=Eo(),wg=Object.prototype,vg=wg.hasOwnProperty;function Ig(e){var o=this.__data__;return bg?o[e]!==void 0:vg.call(o,e)}oc.exports=Ig});var rc=x(($3,tc)=>{n();var Ag=Eo(),kg="__lodash_hash_undefined__";function Lg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ag&&o===void 0?kg:o,this}tc.exports=Lg});var ic=x((j3,ac)=>{n();var Eg=Ys(),Pg=Zs(),Cg=ec(),Ng=nc(),Rg=rc();function ao(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}ao.prototype.clear=Eg;ao.prototype.delete=Pg;ao.prototype.get=Cg;ao.prototype.has=Ng;ao.prototype.set=Rg;ac.exports=ao});var cc=x((q3,sc)=>{n();function Dg(){this.__data__=[],this.size=0}sc.exports=Dg});var mc=x((z3,pc)=>{n();function Mg(e,o){return e===o||e!==e&&o!==o}pc.exports=Mg});var Po=x((K3,dc)=>{n();var Og=mc();function Fg(e,o){for(var t=e.length;t--;)if(Og(e[t][0],o))return t;return-1}dc.exports=Fg});var _c=x((X3,lc)=>{n();var Ug=Po(),Bg=Array.prototype,Wg=Bg.splice;function Gg(e){var o=this.__data__,t=Ug(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():Wg.call(o,t,1),--this.size,!0}lc.exports=Gg});var gc=x((Y3,uc)=>{n();var Hg=Po();function Vg(e){var o=this.__data__,t=Hg(o,e);return t<0?void 0:o[t][1]}uc.exports=Vg});var hc=x((J3,fc)=>{n();var $g=Po();function jg(e){return $g(this.__data__,e)>-1}fc.exports=jg});var xc=x((Z3,Tc)=>{n();var qg=Po();function zg(e,o){var t=this.__data__,s=qg(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Tc.exports=zg});var Sc=x((Q3,yc)=>{n();var Kg=cc(),Xg=_c(),Yg=gc(),Jg=hc(),Zg=xc();function io(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}io.prototype.clear=Kg;io.prototype.delete=Xg;io.prototype.get=Yg;io.prototype.has=Jg;io.prototype.set=Zg;yc.exports=io});var wc=x((eM,bc)=>{n();var Qg=Rn(),ef=ko(),of=Qg(ef,"Map");bc.exports=of});var Ac=x((oM,Ic)=>{n();var vc=ic(),nf=Sc(),tf=wc();function rf(){this.size=0,this.__data__={hash:new vc,map:new(tf||nf),string:new vc}}Ic.exports=rf});var Lc=x((nM,kc)=>{n();function af(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}kc.exports=af});var Co=x((tM,Ec)=>{n();var sf=Lc();function cf(e,o){var t=e.__data__;return sf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Ec.exports=cf});var Cc=x((rM,Pc)=>{n();var pf=Co();function mf(e){var o=pf(this,e).delete(e);return this.size-=o?1:0,o}Pc.exports=mf});var Rc=x((aM,Nc)=>{n();var df=Co();function lf(e){return df(this,e).get(e)}Nc.exports=lf});var Mc=x((iM,Dc)=>{n();var _f=Co();function uf(e){return _f(this,e).has(e)}Dc.exports=uf});var Fc=x((sM,Oc)=>{n();var gf=Co();function ff(e,o){var t=gf(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Oc.exports=ff});var Bc=x((cM,Uc)=>{n();var hf=Ac(),Tf=Cc(),xf=Rc(),yf=Mc(),Sf=Fc();function so(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}so.prototype.clear=hf;so.prototype.delete=Tf;so.prototype.get=xf;so.prototype.has=yf;so.prototype.set=Sf;Uc.exports=so});var Gc=x((pM,Wc)=>{n();var bf="__lodash_hash_undefined__";function wf(e){return this.__data__.set(e,bf),this}Wc.exports=wf});var Vc=x((mM,Hc)=>{n();function vf(e){return this.__data__.has(e)}Hc.exports=vf});var jc=x((dM,$c)=>{n();var If=Bc(),Af=Gc(),kf=Vc();function Dn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new If;++o<t;)this.add(e[o])}Dn.prototype.add=Dn.prototype.push=Af;Dn.prototype.has=kf;$c.exports=Dn});var zc=x((lM,qc)=>{n();function Lf(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}qc.exports=Lf});var Xc=x((_M,Kc)=>{n();function Ef(e){return e!==e}Kc.exports=Ef});var Jc=x((uM,Yc)=>{n();function Pf(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}Yc.exports=Pf});var Qc=x((gM,Zc)=>{n();var Cf=zc(),Nf=Xc(),Rf=Jc();function Df(e,o,t){return o===o?Rf(e,o,t):Cf(e,Nf,t)}Zc.exports=Df});var op=x((fM,ep)=>{n();var Mf=Qc();function Of(e,o){var t=e==null?0:e.length;return!!t&&Mf(e,o,0)>-1}ep.exports=Of});var tp=x((hM,np)=>{n();function Ff(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}np.exports=Ff});var ap=x((TM,rp)=>{n();function Uf(e,o){return e.has(o)}rp.exports=Uf});var sp=x((xM,ip)=>{n();var Bf=Rn(),Wf=ko(),Gf=Bf(Wf,"Set");ip.exports=Gf});var pp=x((yM,cp)=>{n();function Hf(){}cp.exports=Hf});var Jt=x((SM,mp)=>{n();function Vf(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}mp.exports=Vf});var lp=x((bM,dp)=>{n();var Zt=sp(),$f=pp(),jf=Jt(),qf=1/0,zf=Zt&&1/jf(new Zt([,-0]))[1]==qf?function(e){return new Zt(e)}:$f;dp.exports=zf});var up=x((wM,_p)=>{n();var Kf=jc(),Xf=op(),Yf=tp(),Jf=ap(),Zf=lp(),Qf=Jt(),eh=200;function oh(e,o,t){var s=-1,c=Xf,p=e.length,m=!0,_=[],l=_;if(t)m=!1,c=Yf;else if(p>=eh){var T=o?null:Zf(e);if(T)return Qf(T);m=!1,c=Jf,l=new Kf}else l=o?[]:_;e:for(;++s<p;){var b=e[s],S=o?o(b):b;if(b=t||b!==0?b:0,m&&S===S){for(var E=l.length;E--;)if(l[E]===S)continue e;o&&l.push(S),_.push(b)}else c(l,S,t)||(l!==_&&l.push(S),_.push(b))}return _}_p.exports=oh});var fp=x((vM,gp)=>{n();var nh=up();function th(e){return e&&e.length?nh(e):[]}gp.exports=th});var he={};ee(he,{css:()=>kp,default:()=>Bh});var kp,Bh,Te=f(()=>{"use strict";n();kp=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kp));Bh={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var sr={};ee(sr,{css:()=>Wp,default:()=>sT});var Wp,sT,cr=f(()=>{"use strict";n();Wp=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wp));sT={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var mT={};ee(mT,{Trim:()=>pT});module.exports=Z(mT);n();var O=y(require("react")),Gp=y(require("classnames"));I();n();var ia=y(require("react"));n();var uo=y(require("react"));n();qe();var ta=()=>!Ce();var Mm=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(rt(),tt))}),Om=()=>(rt(),Z(tt)).default,at=ta();function aa({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=uo.default.useState(at?void 0:Om()),[p,m]=uo.default.useState(at||t==null?void 0:t()),_=()=>g(this,null,function*(){(e?e():Mm()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,uo.useEffect)(()=>{at&&_()},[]),{globalStyles:s,styles:p}}function se(e,o){return t=>{let{globalStyles:s,styles:c}=aa({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return ia.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();n();var wi=require("react"),eo=require("react-redux");n();var Lt=require("@reduxjs/toolkit"),Si=require("react-redux/lib/utils/Subscription");k();n();var ni=y(require("lodash.throttle"));I();k();_t();Ke();ze();var Pd=[$o],gn=!1,Cd=(0,ni.default)(()=>{ho(fo())},5e3),ti=e=>o=>t=>{if(Pd.includes(t.type))return o(t);let s=e.getState(),c=Ne.local.getItem(Se.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return ho(fo());let m=Date.now();return c-m<0&&!gn?setTimeout(()=>{gn=!0,e.dispatch(Sa())},1e3):(gn&&(gn=!1),Cd()),o(t)};n();n();function fn(){return typeof sessionStorage!="undefined"}var Ti=fn()?(pi(),Z(ci)).default:(di(),Z(mi)).default,xi=fn()?(_i(),Z(li)).default:[],yi=fn()?(hi(),Z(fi)).default:e=>e;hn();var v=(0,Lt.configureStore)({reducer:Ti,middleware:e=>e({serializableCheck:{ignoredActions:[...xi,lt.type,Ko.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(ti)}),bi=(0,Si.createSubscription)(v),vb=yi(v),Ib=(0,Lt.configureStore)({reducer:Re});var el={store:v,subscription:bi},Et=(0,wi.createContext)(el),Eb=(0,eo.createStoreHook)(Et),G=(0,eo.createDispatchHook)(Et),A=(0,eo.createSelectorHook)(Et);n();n();k();n();var vi=y(require("lodash.isequal")),Tn=require("reselect"),h=(0,Tn.createSelectorCreator)(Tn.defaultMemoize,vi.default);var ce=e=>e.account,De=h(ce,e=>e.address),oo=h(ce,De,(e,o)=>o in e.accounts?e.accounts[o]:zo),ol=h(ce,oo,(e,o)=>{let c=e,{accounts:t}=c,s=Ie(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),Db=h(oo,e=>e.balance),nl=h(oo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Mb=h(ce,e=>e.shard),tl=h(ce,e=>e.ledgerAccount),Ob=h(ce,e=>e.walletConnectAccount),Fb=h(ce,e=>e.isAccountLoading),Ub=h(ce,e=>e.accountLoadingError),rl=h(ce,e=>e.websocketEvent),al=h(ce,e=>e.websocketBatchEvent);n();var Ii=e=>e.dappConfig,Gb=h(Ii,e=>e.shouldUseWebViewProvider);n();var q=e=>e.loginInfo,il=h(q,e=>e.loginMethod),xn=h(q,De,(e,o)=>Boolean(o)),jb=h(q,e=>e.walletConnectLogin),sl=h(q,e=>e.ledgerLogin),cl=h(q,e=>e.walletLogin),qb=h(q,e=>e.isLoginSessionInvalid),Pt=h(q,e=>e.tokenLogin),Ai=h(q,e=>e.logoutRoute),pl=h(q,e=>e.isWalletConnectV2Initialized);n();var ki=e=>e.modals,Xb=h(ki,e=>e.txSubmittedModal),ml=h(ki,e=>e.notificationModal);n();var pe=e=>e.networkConfig,yn=h(pe,e=>e.network.chainId),dl=h(pe,e=>e.network.roundDuration),Zb=h(pe,e=>e.network.walletConnectBridgeAddress),ll=h(pe,e=>e.network.walletConnectV2RelayAddress),_l=h(pe,e=>e.network.walletConnectV2ProjectId),ul=h(pe,e=>e.network.walletConnectV2Options),gl=h(pe,e=>e.network.walletConnectDeepLink),z=h(pe,e=>e.network),Li=h(z,e=>e.apiAddress),Ei=h(z,e=>e.explorerAddress),Pi=h(z,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),fl=h(z,e=>e.xAliasAddress),Ci=h(z,e=>e.egldLabel);n();var Sn=e=>e.signedMessageInfo,o0=h(Sn,e=>e.isSigning),n0=h(Sn,e=>e.errorMessage),t0=h(Sn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),r0=h(Sn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Ni=e=>e.toasts,hl=h(Ni,e=>e.customToasts),Ri=h(Ni,e=>e.transactionToasts);n();k();var Di={errorMessage:Tt,successMessage:xt,processingMessage:yt},Mi=e=>e.transactionsInfo,Tl=h(Mi,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Di);n();n();var me=require("@multiversx/sdk-core");I();n();var Nt=require("@multiversx/sdk-core/out");n();n();function Ct(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Oi=e=>{let o=e!=null?e:"";return Ct(o)?Nt.TransactionPayload.fromEncoded(o):new Nt.TransactionPayload(o)};n();I();var bo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Zn).some(t=>e.startsWith(t)):!1;function bn(e){var s,c,p;let o=u({},e);bo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new me.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Oi(o.data),nonce:o.nonce.valueOf(),receiver:new me.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new me.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Ho,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Vo,chainID:o.chainID.valueOf(),version:new me.TransactionVersion((p=o.version)!=null?p:ea)}),o.options?{options:new me.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new me.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();I();n();n();n();var bl=require("@multiversx/sdk-core/out");n();I();n();var Fi=require("@multiversx/sdk-core");D();n();var wl=require("@multiversx/sdk-core");n();n();n();var vl=require("@multiversx/sdk-core"),Il=y(require("bignumber.js"));L();n();n();n();var Dt="blocks";n();n();n();n();V();n();n();V();n();n();n();var Rl=y(require("bignumber.js"));I();n();var Nl=require("@multiversx/sdk-core"),Ot=y(require("bignumber.js"));I();n();var Pl=y(require("bignumber.js"));n();Ot.default.config({ROUNDING_MODE:Ot.default.ROUND_FLOOR});n();n();n();I();n();n();n();n();I();n();I();n();var Dl=require("@multiversx/sdk-core");I();n();var vo=require("@multiversx/sdk-core"),Fl=y(require("bignumber.js"));I();n();n();var Ml=y(require("bignumber.js"));I();n();I();n();n();n();n();n();n();I();n();I();n();I();n();V();var Bl=["reDelegateRewards","claimRewards","unBond"],Wl=["wrapEgld","unwrapEgld"],Gl=["unStake"],Hl=["unDelegate"];n();n();n();I();n();var ql=y(require("bignumber.js"));n();n();V();n();var Kl=y(require("bignumber.js"));n();n();n();n();var Jl=y(require("bignumber.js"));D();n();n();n();n();L();n();var o_=require("@multiversx/sdk-web-wallet-provider");I();n();var Ql=y(require("qs"));n();W();qe();n();qe();var BA={search:Ce()?window.location.search:"",removeParams:[]};n();n();n();B();n();V();n();n();B();n();var n_=y(require("linkifyjs"));n();I();n();var t_=y(require("bignumber.js"));n();D();n();n();L();n();L();n();n();n();V();n();V();n();var r_=y(require("bignumber.js"));I();V();n();V();n();var $i=require("react");D();n();n();V();n();n();var a_=require("@multiversx/sdk-core/out"),i_=y(require("bignumber.js"));V();n();D();n();n();D();var PL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var ji=require("react");D();B();n();var c_=require("react");V();var UL=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Qe();n();var In=e=>e.transactions,no=h(In,e=>e.signedTransactions),p_=h(In,e=>e.signTransactionsError),qi=h(In,e=>e.signTransactionsCancelMessage),An=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),zi=h(no,An(Ye)),Ki=h(no,An(Je)),Xi=h(no,An(Ze)),m_=h(no,An(bt)),Yi=h(In,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>bn(t)))||[]})}),d_=h(no,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var Ji=require("react");n();k();n();n();n();n();n();n();n();n();var __=require("@multiversx/sdk-extension-provider"),u_=require("@multiversx/sdk-hw-provider"),g_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),f_=require("@multiversx/sdk-opera-provider"),h_=require("@multiversx/sdk-passkey-provider/out"),T_=require("@multiversx/sdk-web-wallet-provider");I();ye();n();var to=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Zi=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");L();n();var Q=e=>`Unable to perform ${e}, Provider not initialized`,kn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Q("getAccount"))}setAccount(o){throw new Error(Q(`setAccount: ${o}`))}login(o){throw new Error(Q(`login with options: ${o}`))}logout(o){throw new Error(Q(`logout with options: ${o}`))}getAddress(){throw new Error(Q("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(Q(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(Q(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(Q(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(Q(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(Q(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(Q(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Qi=new kn;k();n();n();n();n();n();var es=require("@lifeomic/axios-fetch"),Wt=y(require("axios")),Gt=(0,es.buildAxiosFetch)(Wt.default),Ht=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function x_(e,o,t){return g(this,null,function*(){try{let s=yield Gt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Ht(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function y_(e,o){return g(this,null,function*(){try{let t=yield Gt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Ht(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function S_(e,o,t){return g(this,null,function*(){try{let s=yield Gt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Ht(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var ro=Wt.default.create();ro.get=y_;ro.post=x_;ro.patch=S_;n();n();var b_=y(require("axios"));n();var w_=y(require("swr"));n();L();n();n();n();B();n();Qe();n();n();n();var v_=y(require("axios"));n();var A_=y(require("axios"));$e();n();I();n();var k_=y(require("axios"));n();var E_=y(require("axios"));n();n();var P_=y(require("axios"));n();var C_=y(require("axios"));n();n();k();L();n();n();n();n();B();n();C();D();n();k();n();var rs=require("@multiversx/sdk-core");D();W();n();Qe();n();k();L();n();k();D();n();n();n();D();n();Go();n();n();n();n();var M_=y(require("swr"));n();n();n();n();var as=require("react");n();n();var O_=require("react"),F_=require("@multiversx/sdk-web-wallet-provider"),U_=require("@multiversx/sdk-web-wallet-provider"),B_=y(require("qs"));I();k();L();et();B();var wR=M();n();var Cs=require("react"),Xt=require("@multiversx/sdk-core");n();I();ut();n();n();n();n();n();n();n();n();n();n();$e();n();var V_=y(require("axios"));n();var j_=y(require("axios"));n();$e();n();$e();n();n();n();n();var z_=require("@multiversx/sdk-opera-provider");n();var K_=require("@multiversx/sdk-extension-provider");n();ye();n();n();n();n();var xu=y(ks());n();var wu=require("@multiversx/sdk-native-auth-client");n();var Ps=y(require("axios"));n();n();n();function Ls(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Es=(e,o,t,s=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield Ls(o.delay)),yield Es(e,o,t,s+1)):null}}),zt=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield Es(e,o,t)});var yu=4;var $D=zt((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield Ps.default.get(`${e}/${Dt}?from=${yu}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();jo();n();n();B();var e2={origin:M().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Iu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Au=require("@multiversx/sdk-passkey-provider/out");I();B();n();n();n();var Nu=require("react"),Ru=require("@multiversx/sdk-hw-provider");n();C();D();n();To();Ke();ze();W();n();n();var yp=require("react"),Sp=require("@multiversx/sdk-core"),Sh=require("@multiversx/sdk-extension-provider"),bh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),wh=require("@multiversx/sdk-passkey-provider/out"),vh=y(fp());I();n();n();n();n();n();n();n();n();n();n();var No=y(require("react"));var WM=(0,No.createContext)({}),GM=v.getState();n();var Tp=y(require("react"));n();var Qt=y(require("react")),rh=y(require("axios"));n();n();ye();n();n();var mh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),dh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");C();n();C();k();D();n();n();k();n();W();n();k();D();n();n();var ih=require("@multiversx/sdk-core"),sh=y(require("bignumber.js"));I();n();var ch=y(require("bignumber.js"));I();k();L();W();B();n();var xp=require("react"),gh=require("@multiversx/sdk-extension-provider"),fh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),hh=require("@multiversx/sdk-passkey-provider/out");ye();k();n();k();D();To();B();n();ae();k();n();n();var Ah=require("react");n();n();L();Qe();n();var On=require("react"),bp=(e,o)=>{let[t,s]=(0,On.useState)(e);return(0,On.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var Lh=require("react"),Eh=require("@multiversx/sdk-extension-provider");ae();C();L();n();ue();W();W();n();n();ye();D();n();var kh=require("react"),wp=require("@multiversx/sdk-core");k();n();var Ph=require("react"),Ch=require("@multiversx/sdk-opera-provider");ae();C();L();ue();W();B();n();var Nh=require("react");nt();ae();ye();C();k();L();ue();B();n();var Fh=require("react");ae();k();n();n();it();n();n();var Rh=y(require("platform"));qe();n();n();n();n();n();n();n();_o();L();n();n();var Dh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();To();Ke();n();n();n();k();n();n();var Mh=y(require("axios"));W();n();n();var Oh=y(Nn());_o();var vp,Ip,Ap,CB=(Ap=(Ip=(vp=Pe.safeWindow)==null?void 0:vp.location)==null?void 0:Ip.origin)==null?void 0:Ap.includes("localhost");n();B();n();n();var zh=require("react");I();n();n();I();n();n();n();var Uh=y(require("bignumber.js"));n();n();n();var ve=y(require("react")),Rp=require("react"),Dp=require("react"),rr=y(require("classnames")),Mp=require("react-dom");I();n();var Lp=y(require("react")),Ep=y(require("classnames"));var Wh=({className:e,children:o,styles:t})=>Lp.default.createElement("div",{className:(0,Ep.default)(t==null?void 0:t.dappModalBody,e)},o),er=se(Wh,{ssrStyles:()=>Promise.resolve().then(()=>(Te(),he)),clientStyles:()=>(Te(),Z(he)).default});n();var or=y(require("react")),Pp=y(require("classnames"));var Gh=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?or.default.createElement("div",{className:(0,Pp.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:or.default.createElement("div",null,s)):null,nr=se(Gh,{ssrStyles:()=>Promise.resolve().then(()=>(Te(),he)),clientStyles:()=>(Te(),Z(he)).default});n();var mo=y(require("react")),Cp=require("@fortawesome/free-solid-svg-icons"),Np=require("@fortawesome/react-fontawesome"),Do=y(require("classnames"));var Hh=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:l})=>e?t?mo.default.createElement("div",{className:(0,Do.default)(l==null?void 0:l.dappModalHeader,s)},t):mo.default.createElement("div",{className:(0,Do.default)(l==null?void 0:l.dappModalHeader,s)},mo.default.createElement("div",{className:(0,Do.default)(l==null?void 0:l.dappModalHeaderText,p)},o),mo.default.createElement("button",{onClick:m,className:(0,Do.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},mo.default.createElement(Np.FontAwesomeIcon,{size:"lg",icon:Cp.faTimes}))):null,tr=se(Hh,{ssrStyles:()=>Promise.resolve().then(()=>(Te(),he)),clientStyles:()=>(Te(),Z(he)).default});var $h={showHeader:!0,showFooter:!1,headerText:"",footerText:""},jh=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=$h,id:p="dapp-modal",onHide:m,parentElement:_,visible:l,styles:T})=>{let[b,S]=(0,Rp.useState)(!1);if((0,Dp.useEffect)(()=>{S(!0)},[]),!l)return null;let{showHeader:E,showFooter:N,headerText:K,footerText:xe,modalDialogClassName:Mo="dapp-modal-dialog",modalContentClassName:Fn="dapp-modal-dialog-content",modalHeaderClassName:Un="dapp-modal-dialog-header",modalHeaderTextClassName:Bn="dapp-modal-dialog-header-text",modalCloseButtonClassName:J="dapp-modal-dialog-close-button",modalBodyClassName:Hp="dapp-modal-dialog-content-body",modalFooterClassName:Vp="dapp-modal-dialog-footer",customModalHeader:$p,customModalFooter:jp}=c,qp=zp=>{zp.key==="Escape"&&s&&(m==null||m())};return ve.default.createElement(ve.default.Fragment,null,b&&(0,Mp.createPortal)(ve.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,rr.default)(Mo,T==null?void 0:T.dappModal,t),"data-testid":e,onKeyDown:qp},ve.default.createElement("div",{className:(0,rr.default)(T==null?void 0:T.dappModalContent,Fn)},ve.default.createElement(tr,{visible:E,headerText:K,customHeader:$p,className:Un,headerTextClassName:Bn,closeButtonClassName:J,onHide:m}),ve.default.createElement(er,{className:Hp},o),ve.default.createElement(nr,{visible:N,customFooter:jp,footerText:xe,className:Vp}))),_!=null?_:document==null?void 0:document.body))},qh=se(jh,{ssrStyles:()=>Promise.resolve().then(()=>(Te(),he)),clientStyles:()=>(Te(),Z(he)).default});n();n();var Op=require("react");n();n();var Fp=require("react"),Xh=require("@multiversx/sdk-hw-provider");ae();C();k();L();ue();n();var Kh=require("react");n();n();var ar=require("react");C();k();L();ue();B();n();var Jh=require("react"),Zh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ae();C();L();ue();W();W();n();var Qh=require("react"),eT=require("@multiversx/sdk-passkey-provider/out");ae();C();L();ue();W();W();n();n();var Up=require("react");n();var tT=require("react");n();var ir=require("react"),nT=require("socket.io-client");k();n();n();n();var rT=require("react");D();n();n();n();var iT=y(require("swr"));n();n();n();n();var aT=y(require("axios"));n();var cT=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,O.useState)(0),[_,l]=(0,O.useState)(!1),T=(0,O.useRef)(document==null?void 0:document.createElement("span")),b=(0,O.useRef)(document==null?void 0:document.createElement("span")),S=bp(p,300),E=()=>{if(T.current&&b.current){let xe=b.current.offsetWidth-T.current.offsetWidth;l(xe>1)}},N=()=>{m(p+1)};return(0,O.useEffect)(()=>(window==null||window.addEventListener("resize",N),()=>{window==null||window.removeEventListener("resize",N)})),(0,O.useEffect)(()=>{E()},[S]),O.default.createElement("span",{ref:T,className:(0,Gp.default)(c==null?void 0:c.trim,s,o,{overflow:_}),"data-testid":t},O.default.createElement("span",{ref:b,className:c==null?void 0:c.hiddenTextRef},e),_?O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:c==null?void 0:c.left},O.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),O.default.createElement("span",{className:c==null?void 0:c.ellipsis},na),O.default.createElement("span",{className:c==null?void 0:c.right},O.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):O.default.createElement("span",null,e))},pT=se(cT,{ssrStyles:()=>Promise.resolve().then(()=>(cr(),sr)),clientStyles:()=>(cr(),Z(sr)).default});0&&(module.exports={Trim});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=Trim.js.map
