"use strict";var gm=Object.create;var To=Object.defineProperty,fm=Object.defineProperties,hm=Object.getOwnPropertyDescriptor,Tm=Object.getOwnPropertyDescriptors,xm=Object.getOwnPropertyNames,$o=Object.getOwnPropertySymbols,ym=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty,yr=Object.prototype.propertyIsEnumerable;var xr=(e,o,t)=>o in e?To(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Yn.call(o,t)&&xr(e,t,o[t]);if($o)for(var t of $o(o))yr.call(o,t)&&xr(e,t,o[t]);return e},w=(e,o)=>fm(e,Tm(o));var Ee=(e,o)=>{var t={};for(var s in e)Yn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&$o)for(var s of $o(e))o.indexOf(s)<0&&yr.call(e,s)&&(t[s]=e[s]);return t};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var y=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),_e=(e,o)=>{for(var t in o)To(e,t,{get:o[t],enumerable:!0})},Sr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of xm(o))!Yn.call(e,c)&&c!==t&&To(e,c,{get:()=>o[c],enumerable:!(s=hm(o,c))||s.enumerable});return e};var S=(e,o,t)=>(t=e!=null?gm(ym(e)):{},Sr(o||!e||!e.__esModule?To(t,"default",{value:e,enumerable:!0}):t,e)),ne=e=>Sr(To({},"__esModule",{value:!0}),e);var f=(e,o,t)=>new Promise((s,c)=>{var p=_=>{try{d(t.next(_))}catch(g){c(g)}},m=_=>{try{d(t.throw(_))}catch(g){c(g)}},d=_=>_.done?s(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(e,o)).next())});var vr=y(jo=>{"use strict";n();jo.byteLength=bm;jo.toByteArray=vm;jo.fromByteArray=km;var te=[],K=[],Sm=typeof Uint8Array!="undefined"?Uint8Array:Array,Jn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Pe=0,br=Jn.length;Pe<br;++Pe)te[Pe]=Jn[Pe],K[Jn.charCodeAt(Pe)]=Pe;var Pe,br;K["-".charCodeAt(0)]=62;K["_".charCodeAt(0)]=63;function wr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function bm(e){var o=wr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function wm(e,o,t){return(o+t)*3/4-t}function vm(e){var o,t=wr(e),s=t[0],c=t[1],p=new Sm(wm(e,s,c)),m=0,d=c>0?s-4:s,_;for(_=0;_<d;_+=4)o=K[e.charCodeAt(_)]<<18|K[e.charCodeAt(_+1)]<<12|K[e.charCodeAt(_+2)]<<6|K[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=K[e.charCodeAt(_)]<<2|K[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=K[e.charCodeAt(_)]<<10|K[e.charCodeAt(_+1)]<<4|K[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Im(e){return te[e>>18&63]+te[e>>12&63]+te[e>>6&63]+te[e&63]}function Am(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Im(s));return c.join("")}function km(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,d=t-s;m<d;m+=p)c.push(Am(e,m,m+p>d?d:m+p));return s===1?(o=e[t-1],c.push(te[o>>2]+te[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(te[o>>10]+te[o>>4&63]+te[o<<2&63]+"=")),c.join("")}});var Ir=y(Zn=>{n();Zn.read=function(e,o,t,s,c){var p,m,d=c*8-s-1,_=(1<<d)-1,g=_>>1,b=-7,T=t?c-1:0,L=t?-1:1,N=e[o+T];for(T+=L,p=N&(1<<-b)-1,N>>=-b,b+=d;b>0;p=p*256+e[o+T],T+=L,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+T],T+=L,b-=8);if(p===0)p=1-g;else{if(p===_)return m?NaN:(N?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-g}return(N?-1:1)*m*Math.pow(2,p-s)};Zn.write=function(e,o,t,s,c,p){var m,d,_,g=p*8-c-1,b=(1<<g)-1,T=b>>1,L=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,N=s?0:p-1,H=s?1:-1,oe=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+T>=1?o+=L/_:o+=L*Math.pow(2,1-T),o*_>=2&&(m++,_/=2),m+T>=b?(d=0,m=b):m+T>=1?(d=(o*_-1)*Math.pow(2,c),m=m+T):(d=o*Math.pow(2,T-1)*Math.pow(2,c),m=0));c>=8;e[t+N]=d&255,N+=H,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[t+N]=m&255,N+=H,m/=256,g-=8);e[t+N-H]|=oe*128}});var Ur=y(Ve=>{"use strict";n();var Qn=vr(),He=Ir(),Ar=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ve.Buffer=l;Ve.SlowBuffer=Rm;Ve.INSPECT_MAX_BYTES=50;var qo=2147483647;Ve.kMaxLength=qo;l.TYPED_ARRAY_SUPPORT=Lm();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Lm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function ue(e){if(e>qo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return tt(e)}return Er(e,o,t)}l.poolSize=8192;function Er(e,o,t){if(typeof e=="string")return Pm(e,o);if(ArrayBuffer.isView(e))return Cm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(re(e,ArrayBuffer)||e&&re(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(re(e,SharedArrayBuffer)||e&&re(e.buffer,SharedArrayBuffer)))return ot(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return l.from(s,o,t);var c=Nm(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,t){return Er(e,o,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function Pr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Em(e,o,t){return Pr(e),e<=0?ue(e):o!==void 0?typeof t=="string"?ue(e).fill(o,t):ue(e).fill(o):ue(e)}l.alloc=function(e,o,t){return Em(e,o,t)};function tt(e){return Pr(e),ue(e<0?0:rt(e)|0)}l.allocUnsafe=function(e){return tt(e)};l.allocUnsafeSlow=function(e){return tt(e)};function Pm(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Cr(e,o)|0,s=ue(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function et(e){for(var o=e.length<0?0:rt(e.length)|0,t=ue(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function Cm(e){if(re(e,Uint8Array)){var o=new Uint8Array(e);return ot(o.buffer,o.byteOffset,o.byteLength)}return et(e)}function ot(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,l.prototype),s}function Nm(e){if(l.isBuffer(e)){var o=rt(e.length)|0,t=ue(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||at(e.length)?ue(0):et(e);if(e.type==="Buffer"&&Array.isArray(e.data))return et(e.data)}function rt(e){if(e>=qo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+qo.toString(16)+" bytes");return e|0}function Rm(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,t){if(re(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),re(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(o)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=l.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(re(m,Uint8Array))p+m.length>c.length?l.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(l.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Cr(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||re(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return nt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Fr(e).length;default:if(c)return s?-1:nt(e).length;o=(""+o).toLowerCase(),c=!0}}l.byteLength=Cr;function Dm(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return $m(this,o,t);case"utf8":case"utf-8":return Rr(this,o,t);case"ascii":return Hm(this,o,t);case"latin1":case"binary":return Vm(this,o,t);case"base64":return Wm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return jm(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}l.prototype._isBuffer=!0;function Ce(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ce(this,t,t+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ce(this,t,t+3),Ce(this,t+1,t+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ce(this,t,t+7),Ce(this,t+1,t+6),Ce(this,t+2,t+5),Ce(this,t+3,t+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Rr(this,0,o):Dm.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",t=Ve.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Ar&&(l.prototype[Ar]=l.prototype.inspect);l.prototype.compare=function(o,t,s,c,p){if(re(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=s-t,_=Math.min(m,d),g=this.slice(c,p),b=o.slice(t,s),T=0;T<_;++T)if(g[T]!==b[T]){m=g[T],d=b[T];break}return m<d?-1:d<m?1:0};function Nr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,at(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=l.from(o,s)),l.isBuffer(o))return o.length===0?-1:kr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):kr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function kr(e,o,t,s,c){var p=1,m=e.length,d=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(N,H){return p===1?N[H]:N.readUInt16BE(H*p)}var g;if(c){var b=-1;for(g=t;g<m;g++)if(_(e,g)===_(o,b===-1?0:g-b)){if(b===-1&&(b=g),g-b+1===d)return b*p}else b!==-1&&(g-=g-b),b=-1}else for(t+d>m&&(t=m-d),g=t;g>=0;g--){for(var T=!0,L=0;L<d;L++)if(_(e,g+L)!==_(o,L)){T=!1;break}if(T)return g}return-1}l.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};l.prototype.indexOf=function(o,t,s){return Nr(this,o,t,s,!0)};l.prototype.lastIndexOf=function(o,t,s){return Nr(this,o,t,s,!1)};function Mm(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var d=parseInt(o.substr(m*2,2),16);if(at(d))return m;e[t+m]=d}return m}function Om(e,o,t,s){return zo(nt(o,e.length-t),e,t,s)}function Fm(e,o,t,s){return zo(Km(o),e,t,s)}function Um(e,o,t,s){return zo(Fr(o),e,t,s)}function Bm(e,o,t,s){return zo(Xm(o,e.length-t),e,t,s)}l.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Mm(this,o,t,s);case"utf8":case"utf-8":return Om(this,o,t,s);case"ascii":case"latin1":case"binary":return Fm(this,o,t,s);case"base64":return Um(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bm(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Wm(e,o,t){return o===0&&t===e.length?Qn.fromByteArray(e):Qn.fromByteArray(e.slice(o,t))}function Rr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var _,g,b,T;switch(d){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(T=(p&31)<<6|_&63,T>127&&(m=T));break;case 3:_=e[c+1],g=e[c+2],(_&192)===128&&(g&192)===128&&(T=(p&15)<<12|(_&63)<<6|g&63,T>2047&&(T<55296||T>57343)&&(m=T));break;case 4:_=e[c+1],g=e[c+2],b=e[c+3],(_&192)===128&&(g&192)===128&&(b&192)===128&&(T=(p&15)<<18|(_&63)<<12|(g&63)<<6|b&63,T>65535&&T<1114112&&(m=T))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=d}return Gm(s)}var Lr=4096;function Gm(e){var o=e.length;if(o<=Lr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Lr));return t}function Hm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function Vm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function $m(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Ym[e[p]];return c}function jm(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}l.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,l.prototype),c};function O(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};l.prototype.readUint8=l.prototype.readUInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};l.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};l.prototype.readInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};l.prototype.readInt16BE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};l.prototype.readInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,t){return o=o>>>0,t||O(o,4,this.length),He.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,t){return o=o>>>0,t||O(o,4,this.length),He.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||O(o,8,this.length),He.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||O(o,8,this.length),He.read(this,o,!1,52,8)};function V(e,o,t,s,c,p){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;V(this,o,t,s,p,0)}var m=1,d=0;for(this[t]=o&255;++d<s&&(m*=256);)this[t+d]=o/m&255;return t+s};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;V(this,o,t,s,p,0)}var m=s-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+s};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,1,255,0),this[t]=o&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};l.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);V(this,o,t,s,p-1,-p)}var m=0,d=1,_=0;for(this[t]=o&255;++m<s&&(d*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+s};l.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);V(this,o,t,s,p-1,-p)}var m=s-1,d=1,_=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+s};l.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};l.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};l.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Dr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Mr(e,o,t,s,c){return o=+o,t=t>>>0,c||Dr(e,o,t,4,34028234663852886e22,-34028234663852886e22),He.write(e,o,t,s,23,4),t+4}l.prototype.writeFloatLE=function(o,t,s){return Mr(this,o,t,!0,s)};l.prototype.writeFloatBE=function(o,t,s){return Mr(this,o,t,!1,s)};function Or(e,o,t,s,c){return o=+o,t=t>>>0,c||Dr(e,o,t,8,17976931348623157e292,-17976931348623157e292),He.write(e,o,t,s,52,8),t+8}l.prototype.writeDoubleLE=function(o,t,s){return Or(this,o,t,!0,s)};l.prototype.writeDoubleBE=function(o,t,s){return Or(this,o,t,!1,s)};l.prototype.copy=function(o,t,s,c){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};l.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!l.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var d=l.isBuffer(o)?o:l.from(o,c),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=d[m%_]}return this};var qm=/[^+/0-9A-Za-z-_]/g;function zm(e){if(e=e.split("=")[0],e=e.trim().replace(qm,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function nt(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Km(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Xm(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Fr(e){return Qn.toByteArray(zm(e))}function zo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function re(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function at(e){return e!==e}var Ym=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Vr=y((kT,Hr)=>{n();var D=Hr.exports={},ae,ie;function it(){throw new Error("setTimeout has not been defined")}function st(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ae=setTimeout:ae=it}catch(e){ae=it}try{typeof clearTimeout=="function"?ie=clearTimeout:ie=st}catch(e){ie=st}})();function Br(e){if(ae===setTimeout)return setTimeout(e,0);if((ae===it||!ae)&&setTimeout)return ae=setTimeout,setTimeout(e,0);try{return ae(e,0)}catch(o){try{return ae.call(null,e,0)}catch(t){return ae.call(this,e,0)}}}function Jm(e){if(ie===clearTimeout)return clearTimeout(e);if((ie===st||!ie)&&clearTimeout)return ie=clearTimeout,clearTimeout(e);try{return ie(e)}catch(o){try{return ie.call(null,e)}catch(t){return ie.call(this,e)}}}var ge=[],$e=!1,Ne,Ko=-1;function Zm(){!$e||!Ne||($e=!1,Ne.length?ge=Ne.concat(ge):Ko=-1,ge.length&&Wr())}function Wr(){if(!$e){var e=Br(Zm);$e=!0;for(var o=ge.length;o;){for(Ne=ge,ge=[];++Ko<o;)Ne&&Ne[Ko].run();Ko=-1,o=ge.length}Ne=null,$e=!1,Jm(e)}}D.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ge.push(new Gr(e,o)),ge.length===1&&!$e&&Br(Wr)};function Gr(e,o){this.fun=e,this.array=o}Gr.prototype.run=function(){this.fun.apply(null,this.array)};D.title="browser";D.browser=!0;D.env={};D.argv=[];D.version="";D.versions={};function fe(){}D.on=fe;D.addListener=fe;D.once=fe;D.off=fe;D.removeListener=fe;D.removeAllListeners=fe;D.emit=fe;D.prependListener=fe;D.prependOnceListener=fe;D.listeners=function(e){return[]};D.binding=function(e){throw new Error("process.binding is not supported")};D.cwd=function(){return"/"};D.chdir=function(e){throw new Error("process.chdir is not supported")};D.umask=function(){return 0}});var r,i,Qm,a,n=h(()=>{r=S(Ur()),i=S(Vr()),Qm=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Qm});var $r=h(()=>{"use strict";n()});var se=h(()=>{"use strict";n()});var jr=h(()=>{"use strict";n()});var ct,qr=h(()=>{"use strict";n();ct=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(ct||{})});var zr=h(()=>{"use strict";n()});var pt=h(()=>{"use strict";n()});var Kr=h(()=>{"use strict";n()});var mt=h(()=>{"use strict";n()});var Xr=h(()=>{"use strict";n()});var Yr=h(()=>{"use strict";n()});var be,je,we=h(()=>{"use strict";n();be=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),je=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Jr,BT,Zr,WT,E=h(()=>{"use strict";n();we();Jr=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Jr||{}),BT=u(u({},je.WindowProviderRequestEnums),Jr),Zr=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Zr||{}),WT=u(u({},je.WindowProviderResponseEnums),Zr)});var Qr=h(()=>{"use strict";n()});var ea=h(()=>{"use strict";n()});var $=h(()=>{"use strict";n()});var oa=h(()=>{"use strict";n()});var na=h(()=>{"use strict";n()});var ta=h(()=>{"use strict";n()});var M=h(()=>{"use strict";n();mt();Xr();Yr();E();Qr();ea();$();oa();na();ta()});var qe,ra,tx,aa,rx,ia,ax,ix,ed,ze=h(()=>{"use strict";n();M();qe={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ra,egldLabel:tx}=qe["devnet"],{chainId:aa,egldLabel:rx}=qe["testnet"],{chainId:ia,egldLabel:ax}=qe["mainnet"],ix={["devnet"]:ra,["testnet"]:aa,["mainnet"]:ia},ed={[ra]:"devnet",[aa]:"testnet",[ia]:"mainnet"}});var Xo=h(()=>{"use strict";n()});var ce,sa=h(()=>{"use strict";n();ce=require("@multiversx/sdk-web-wallet-provider")});var Z,xo=h(()=>{"use strict";n();Z=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ca,pa,dt,lx,_x,lt=h(()=>{"use strict";n();xo();dt=String((pa=(ca=Z.safeWindow)==null?void 0:ca.navigator)==null?void 0:pa.userAgent),lx=/^((?!chrome|android).)*safari/i.test(dt),_x=/firefox/i.test(dt)&&/windows/i.test(dt)});var Yo,Jo,ma,Zo,da,Ke,A=h(()=>{"use strict";n();$r();se();jr();qr();zr();pt();Kr();ze();Xo();sa();lt();Yo=5e4,Jo=1e9,ma=1,Zo="logout",da="login",Ke="0"});var Xe,Qo=h(()=>{"use strict";n();Xe=()=>Date.now()/1e3});var la=h(()=>{"use strict";n()});var _a=h(()=>{"use strict";n()});var _t=h(()=>{"use strict";n();Qo();la();_a()});var ut={};_e(ut,{clear:()=>rd,getItem:()=>nd,localStorageKeys:()=>Q,removeItem:()=>td,setItem:()=>od});var Q,en,od,nd,td,rd,Ye=h(()=>{"use strict";n();_t();Q={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},en=typeof localStorage!="undefined",od=({key:e,data:o,expires:t})=>{!en||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},nd=e=>{if(!en)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Xe()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},td=e=>{!en||localStorage.removeItem(String(e))},rd=()=>{!en||localStorage.clear()}});var gt={};_e(gt,{clear:()=>ha,getItem:()=>ga,removeItem:()=>fa,setItem:()=>ua,storage:()=>ad});var ua,ga,fa,ha,ad,Ta=h(()=>{"use strict";n();ua=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ga=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},fa=e=>sessionStorage.removeItem(String(e)),ha=()=>sessionStorage.clear(),ad={setItem:ua,getItem:ga,removeItem:fa,clear:ha}});var pe,Je=h(()=>{"use strict";n();Ye();Ta();pe={session:gt,local:ut}});var ft,C,q,R=h(()=>{"use strict";n();ft=require("@reduxjs/toolkit");A();C=(0,ft.createAction)(Zo),q=(0,ft.createAction)(da,e=>({payload:e}))});var Tt,xa,ya,on,ht,Sa,nn,id,xt,$x,sd,cd,jx,qx,zx,pd,md,tn,rn=h(()=>{"use strict";n();Tt=require("@multiversx/sdk-core"),xa=require("@reduxjs/toolkit"),ya=require("redux-persist");A();Je();Ye();R();on={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ke},ht={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":on},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Sa=(0,xa.createSlice)({name:"accountInfoSlice",initialState:ht,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Tt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:on},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(C,()=>(pe.local.removeItem(Q.loginExpiresAt),ht)),e.addCase(q,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new Tt.Address(s).hex()}),e.addCase(ya.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=s;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:ht.accounts,o.publicKey=d})}}),{setAccount:nn,setAddress:id,setAccountNonce:xt,setAccountShard:$x,setLedgerAccount:sd,updateLedgerAccount:cd,setWalletConnectAccount:jx,setIsAccountLoading:qx,setAccountLoadingError:zx,setWebsocketEvent:pd,setWebsocketBatchEvent:md}=Sa.actions,tn=Sa.reducer});function yo(){return new Date().setHours(new Date().getHours()+24)}function So(e){pe.local.setItem({key:Q.loginExpiresAt,data:e,expires:e})}var yt=h(()=>{"use strict";n();Je();Ye()});var wa,ba,va,ty,dd,ld,Ia,ry,_d,Aa,ay,iy,sy,an,sn=h(()=>{"use strict";n();wa=require("@reduxjs/toolkit");yt();E();R();ba={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},va=(0,wa.createSlice)({name:"loginInfoSlice",initialState:ba,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(C,()=>ba),e.addCase(q,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,So(yo())})}}),{setLoginMethod:ty,setWalletConnectLogin:dd,setLedgerLogin:ld,setTokenLogin:Ia,setTokenLoginSignature:ry,setWalletLogin:_d,invalidateLoginSession:Aa,setLogoutRoute:ay,setIsWalletConnectV2Initialized:iy,setWebviewLogin:sy}=va.actions,an=va.reducer});var La,ka,Ea,dy,ud,ly,gd,cn,pn=h(()=>{"use strict";n();La=require("@reduxjs/toolkit");R();ka={},Ea=(0,La.createSlice)({name:"modalsSlice",initialState:ka,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(C,()=>ka)}}),{setTxSubmittedModal:dy,setNotificationModal:ud,clearTxSubmittedModal:ly,clearNotificationModal:gd}=Ea.actions,cn=Ea.reducer});var Re,Ze=h(()=>{"use strict";n();Re=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var P,U=h(()=>{"use strict";n();Ze();P=()=>{if(!Re())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Qe,Pa=h(()=>{"use strict";n();U();Qe=(e="")=>{let o=P(),t=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||t?e:`${o.origin}/${e.replace("/","")}`}});var Ca=h(()=>{"use strict";n();B()});var Na,Ra=h(()=>{"use strict";n();xo();Na=e=>{if(!Z.safeWindow.location)return;if(!new URL(Z.safeWindow.location.href).protocol.startsWith("http"))return Z.safeWindow.location.reload();Z.safeWindow.location.assign(e)}});var B=h(()=>{"use strict";n();Pa();Ca();U();Ra()});var Da,Ma,mn,bo=h(()=>{"use strict";n();B();Da=!1,Ma=(e=!0)=>{Da=e},mn=({timeout:e=0,url:o})=>{Da||setTimeout(()=>{if(!!window)return Na(o)},e)}});var Oa=h(()=>{"use strict";n();bo()});function Fa(e){return e[Math.floor(Math.random()*e.length)]}var Ua=h(()=>{"use strict";n()});var St=h(()=>{"use strict";n();pt()});var he=h(()=>{"use strict";n();Oa();Ua();St()});var Ba,Wa,Ga,bt,hd,Ha,$y,jy,Td,dn,ln=h(()=>{"use strict";n();Ba=require("@reduxjs/toolkit"),Wa=S(require("lodash.omit")),Ga=require("redux-persist");Xo();R();he();bt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},hd={network:bt},Ha=(0,Ba.createSlice)({name:"appConfig",initialState:hd,reducers:{initializeNetworkConfig:(e,o)=>{let t=Fa(o.payload.walletConnectV2RelayAddresses),s=(0,Wa.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(C,o=>{o.network.customWalletAddress=void 0}),e.addCase(Ga.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:$y,updateNetworkConfig:jy,setCustomWalletAddress:Td}=Ha.actions,dn=Ha.reducer});var Va,wt,$a,Jy,Zy,Qy,_n,un=h(()=>{"use strict";n();Va=require("@reduxjs/toolkit");M();R();wt={isSigning:!1,signedSessions:{}},$a=(0,Va.createSlice)({name:"signedMessageInfoSliceState",initialState:wt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>wt},extraReducers:e=>{e.addCase(C,()=>wt)}}),{setSignSession:Jy,clearSignedMessageInfo:Zy,setSignSessionState:Qy}=$a.actions,_n=$a.reducer});var qa,za,ja,Ka,xd,yd,iS,Sd,gn,fn=h(()=>{"use strict";n();qa=require("@reduxjs/toolkit"),za=require("redux-persist");M();Qo();R();ja={customToasts:[],transactionToasts:[]},Ka=(0,qa.createSlice)({name:"toastsSlice",initialState:ja,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Xe(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(C,()=>ja),e.addCase(za.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:xd,removeCustomToast:yd,addTransactionToast:iS,removeTransactionToast:Sd}=Ka.actions,gn=Ka.reducer});var Xa,It,At,kt,bd,vt,Ya,mS,wd,Lt,hn,Tn=h(()=>{"use strict";n();Xa=require("@reduxjs/toolkit");R();It="Transaction failed",At="Transaction successful",kt="Processing transaction",bd="Transaction submitted",vt={},Ya=(0,Xa.createSlice)({name:"transactionsInfo",initialState:vt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||It,successMessage:(s==null?void 0:s.successMessage)||At,processingMessage:(s==null?void 0:s.processingMessage)||kt,submittedMessage:(s==null?void 0:s.submittedMessage)||bd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>vt},extraReducers:e=>{e.addCase(C,()=>vt)}}),{clearTransactionsInfo:mS,setTransactionsDisplayInfo:wd,clearTransactionsInfoForSessionId:Lt}=Ya.actions,hn=Ya.reducer});function oo(e){return e!=null&&(Rd(e)||Ud(e))}function no(e){return e!=null&&(Dd(e)||Bd(e))}function to(e){return e!=null&&(Md(e)||Wd(e))}function Ja(e){return e!=null&&(Od(e)||Gd(e))}function Et(e){return e!=null&&Fd(e)}function Rd(e){return e!=null&&vd.includes(e)}function Dd(e){return e!=null&&Id.includes(e)}function Md(e){return e!=null&&Ad.includes(e)}function Od(e){return e!=null&&kd.includes(e)}function Fd(e){return e!=null&&Ld.includes(e)}function Ud(e){return e!=null&&Ed.includes(e)}function Bd(e){return e!=null&&Pd.includes(e)}function Wd(e){return e!=null&&Cd.includes(e)}function Gd(e){return e!=null&&Nd.includes(e)}var vd,Id,Ad,kd,Ld,Ed,Pd,Cd,Nd,ro=h(()=>{"use strict";n();E();vd=["sent"],Id=["success"],Ad=["fail","cancelled","timedOut"],kd=["invalid"],Ld=["timedOut"],Ed=["pending"],Pd=["success"],Cd=["fail","invalid"],Nd=["not executed"]});var Za,Qa,wo,Hd,ei,oi,ni,Vd,xn,$d,jd,xS,qd,vo,Pt,yS,yn,Sn=h(()=>{"use strict";n();Za=require("@reduxjs/toolkit"),Qa=require("redux-persist");E();ro();R();wo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Hd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ei=(0,Za.createSlice)({name:"transactionsSlice",initialState:wo,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,g;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Hd),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=wo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,b,T,L,N,H,oe,Vo;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,_=(b=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:b.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(J=>J.hash===p?w(u(u({},m!=null?m:{}),J),{status:s,errorMessage:c,inTransit:d}):J);let zn=(L=(T=e.signedTransactions[t])==null?void 0:T.transactions)==null?void 0:L.every(J=>no(J.status)),Kn=(H=(N=e.signedTransactions[t])==null?void 0:N.transactions)==null?void 0:H.some(J=>to(J.status)),Xn=(Vo=(oe=e.signedTransactions[t])==null?void 0:oe.transactions)==null?void 0:Vo.every(J=>Ja(J.status));zn&&(e.signedTransactions[t].status="success"),Kn&&(e.signedTransactions[t].status="fail"),Xn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=wo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=wo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(C,()=>wo),e.addCase(Qa.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((d,[_,g])=>{let b=new Date(_),T=new Date;return T.setHours(T.getHours()+5),T-b>0||(d[_]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:oi,updateSignedTransactions:ni,setTransactionsToSign:Vd,clearAllTransactionsToSign:xn,clearAllSignedTransactions:$d,clearSignedTransaction:jd,clearTransactionToSign:xS,setSignTransactionsError:qd,setSignTransactionsCancelMessage:vo,moveTransactionsToSignedState:Pt,updateSignedTransactionsCustomTransactionInformation:yS}=ei.actions,yn=ei.reducer});var ti,Ct,ri,vS,IS,zd,AS,bn,wn=h(()=>{"use strict";n();ti=require("@reduxjs/toolkit");R();Ct={},ri=(0,ti.createSlice)({name:"batchTransactionsSlice",initialState:Ct,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ct},extraReducers:e=>{e.addCase(C,()=>Ct)}}),{setBatchTransactions:vS,updateBatchTransactions:IS,clearBatchTransactions:zd,clearAllBatchTransactions:AS}=ri.actions,bn=ri.reducer});var ii,ai,si,PS,ci,Nt=h(()=>{"use strict";n();ii=require("@reduxjs/toolkit");R();ai={},si=(0,ii.createSlice)({name:"dappConfigSlice",initialState:ai,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(C,()=>ai)}}),{setDappConfig:PS}=si.actions,ci=si.reducer});var k=h(()=>{"use strict";n();rn();sn();pn();ln();un();fn();Tn();Sn();wn();Nt()});var Rt=h(()=>{"use strict";n()});var di,Jd,Zd,De,An=h(()=>{"use strict";n();di=require("@reduxjs/toolkit");Rt();rn();wn();Nt();sn();pn();ln();un();fn();Tn();Sn();Jd={["account"]:tn,["dappConfig"]:ci,["loginInfo"]:an,["modals"]:cn,["networkConfig"]:dn,["signedMessageInfo"]:_n,["toasts"]:gn,["transactionsInfo"]:hn,["transactions"]:yn,["batchTransactions"]:bn},Zd=(e={})=>(0,di.combineReducers)(u(u({},Jd),e)),De=Zd});var gi={};_e(gi,{default:()=>ul,sessionStorageReducers:()=>Dt});function Te(e,o=[]){return{key:e,version:1,storage:_i.default,blacklist:o}}var j,li,_i,Qd,Io,el,ol,nl,tl,rl,al,il,sl,cl,pl,ui,ml,Dt,dl,ll,_l,ul,fi=h(()=>{"use strict";n();j=require("redux-persist"),li=S(require("redux-persist/lib/storage")),_i=S(require("redux-persist/lib/storage/session"));An();k();rn();wn();sn();pn();ln();un();fn();Tn();Sn();Rt();Qd={persistReducersStorageType:"localStorage"},Io={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},el=Te(Io["account"]),ol=Te(Io["loginInfo"]),nl=Te(Io["modals"]),tl=Te(Io["networkConfig"]),rl={2:e=>w(u({},e),{networkConfig:bt})};al=Te("sdk-dapp-transactionsInfo"),il=Te("sdk-dapp-transactions",["transactionsToSign"]),sl=Te("sdk-dapp-batchTransactions",["batchTransactions"]),cl=Te("sdk-dapp-toasts"),pl=Te("sdk-dapp-signedMessageInfo"),ui={key:"sdk-dapp-store",version:2,storage:li.default,whitelist:Object.keys(Io),migrate:(0,j.createMigrate)(rl,{debug:!1})},ml=w(u({},ui),{whitelist:[]}),Dt={["toasts"]:(0,j.persistReducer)(cl,gn),["transactions"]:(0,j.persistReducer)(il,yn),["transactionsInfo"]:(0,j.persistReducer)(al,hn),["batchTransactions"]:(0,j.persistReducer)(sl,bn),["signedMessageInfo"]:(0,j.persistReducer)(pl,_n)},dl=w(u({},Dt),{["account"]:(0,j.persistReducer)(el,tn),["loginInfo"]:(0,j.persistReducer)(ol,an),["modals"]:(0,j.persistReducer)(nl,cn),["networkConfig"]:(0,j.persistReducer)(tl,dn)}),ll=Qd.persistReducersStorageType==="localStorage",_l=ll?(0,j.persistReducer)(ui,De(Dt)):(0,j.persistReducer)(ml,De(dl)),ul=_l});var hi={};_e(hi,{default:()=>gl});var gl,Ti=h(()=>{"use strict";n();An();gl=De()});var xi={};_e(xi,{default:()=>hl});var X,fl,hl,yi=h(()=>{"use strict";n();X=require("redux-persist"),fl=[X.FLUSH,X.REHYDRATE,X.PAUSE,X.PERSIST,X.PURGE,X.REGISTER],hl=fl});var wi={};_e(wi,{default:()=>bi});function bi(e){return(0,Si.persistStore)(e)}var Si,vi=h(()=>{"use strict";n();Si=require("redux-persist")});var vs=y((ID,ws)=>{n();var au=typeof a=="object"&&a&&a.Object===Object&&a;ws.exports=au});var No=y((AD,Is)=>{n();var iu=vs(),su=typeof self=="object"&&self&&self.Object===Object&&self,cu=iu||su||Function("return this")();Is.exports=cu});var Jt=y((kD,As)=>{n();var pu=No(),mu=pu.Symbol;As.exports=mu});var Ps=y((LD,Es)=>{n();var ks=Jt(),Ls=Object.prototype,du=Ls.hasOwnProperty,lu=Ls.toString,Ro=ks?ks.toStringTag:void 0;function _u(e){var o=du.call(e,Ro),t=e[Ro];try{e[Ro]=void 0;var s=!0}catch(p){}var c=lu.call(e);return s&&(o?e[Ro]=t:delete e[Ro]),c}Es.exports=_u});var Ns=y((ED,Cs)=>{n();var uu=Object.prototype,gu=uu.toString;function fu(e){return gu.call(e)}Cs.exports=fu});var Zt=y((PD,Ms)=>{n();var Rs=Jt(),hu=Ps(),Tu=Ns(),xu="[object Null]",yu="[object Undefined]",Ds=Rs?Rs.toStringTag:void 0;function Su(e){return e==null?e===void 0?yu:xu:Ds&&Ds in Object(e)?hu(e):Tu(e)}Ms.exports=Su});var Fs=y((CD,Os)=>{n();var bu=Array.isArray;Os.exports=bu});var Bs=y((ND,Us)=>{n();function wu(e){return e!=null&&typeof e=="object"}Us.exports=wu});var Gs=y((RD,Ws)=>{n();var vu=Zt(),Iu=Fs(),Au=Bs(),ku="[object String]";function Lu(e){return typeof e=="string"||!Iu(e)&&Au(e)&&vu(e)==ku}Ws.exports=Lu});var Vn=y((L3,Ys)=>{n();function Xu(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Ys.exports=Xu});var Zs=y((E3,Js)=>{n();var Yu=Zt(),Ju=Vn(),Zu="[object AsyncFunction]",Qu="[object Function]",eg="[object GeneratorFunction]",og="[object Proxy]";function ng(e){if(!Ju(e))return!1;var o=Yu(e);return o==Qu||o==eg||o==Zu||o==og}Js.exports=ng});var ec=y((P3,Qs)=>{n();var tg=No(),rg=tg["__core-js_shared__"];Qs.exports=rg});var tc=y((C3,nc)=>{n();var rr=ec(),oc=function(){var e=/[^.]+$/.exec(rr&&rr.keys&&rr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ag(e){return!!oc&&oc in e}nc.exports=ag});var ac=y((N3,rc)=>{n();var ig=Function.prototype,sg=ig.toString;function cg(e){if(e!=null){try{return sg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}rc.exports=cg});var sc=y((R3,ic)=>{n();var pg=Zs(),mg=tc(),dg=Vn(),lg=ac(),_g=/[\\^$.*+?()[\]{}|]/g,ug=/^\[object .+?Constructor\]$/,gg=Function.prototype,fg=Object.prototype,hg=gg.toString,Tg=fg.hasOwnProperty,xg=RegExp("^"+hg.call(Tg).replace(_g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function yg(e){if(!dg(e)||mg(e))return!1;var o=pg(e)?xg:ug;return o.test(lg(e))}ic.exports=yg});var pc=y((D3,cc)=>{n();function Sg(e,o){return e==null?void 0:e[o]}cc.exports=Sg});var $n=y((M3,mc)=>{n();var bg=sc(),wg=pc();function vg(e,o){var t=wg(e,o);return bg(t)?t:void 0}mc.exports=vg});var Oo=y((O3,dc)=>{n();var Ig=$n(),Ag=Ig(Object,"create");dc.exports=Ag});var uc=y((F3,_c)=>{n();var lc=Oo();function kg(){this.__data__=lc?lc(null):{},this.size=0}_c.exports=kg});var fc=y((U3,gc)=>{n();function Lg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}gc.exports=Lg});var Tc=y((B3,hc)=>{n();var Eg=Oo(),Pg="__lodash_hash_undefined__",Cg=Object.prototype,Ng=Cg.hasOwnProperty;function Rg(e){var o=this.__data__;if(Eg){var t=o[e];return t===Pg?void 0:t}return Ng.call(o,e)?o[e]:void 0}hc.exports=Rg});var yc=y((W3,xc)=>{n();var Dg=Oo(),Mg=Object.prototype,Og=Mg.hasOwnProperty;function Fg(e){var o=this.__data__;return Dg?o[e]!==void 0:Og.call(o,e)}xc.exports=Fg});var bc=y((G3,Sc)=>{n();var Ug=Oo(),Bg="__lodash_hash_undefined__";function Wg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ug&&o===void 0?Bg:o,this}Sc.exports=Wg});var vc=y((H3,wc)=>{n();var Gg=uc(),Hg=fc(),Vg=Tc(),$g=yc(),jg=bc();function mo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}mo.prototype.clear=Gg;mo.prototype.delete=Hg;mo.prototype.get=Vg;mo.prototype.has=$g;mo.prototype.set=jg;wc.exports=mo});var Ac=y((V3,Ic)=>{n();function qg(){this.__data__=[],this.size=0}Ic.exports=qg});var Lc=y(($3,kc)=>{n();function zg(e,o){return e===o||e!==e&&o!==o}kc.exports=zg});var Fo=y((j3,Ec)=>{n();var Kg=Lc();function Xg(e,o){for(var t=e.length;t--;)if(Kg(e[t][0],o))return t;return-1}Ec.exports=Xg});var Cc=y((q3,Pc)=>{n();var Yg=Fo(),Jg=Array.prototype,Zg=Jg.splice;function Qg(e){var o=this.__data__,t=Yg(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():Zg.call(o,t,1),--this.size,!0}Pc.exports=Qg});var Rc=y((z3,Nc)=>{n();var ef=Fo();function of(e){var o=this.__data__,t=ef(o,e);return t<0?void 0:o[t][1]}Nc.exports=of});var Mc=y((K3,Dc)=>{n();var nf=Fo();function tf(e){return nf(this.__data__,e)>-1}Dc.exports=tf});var Fc=y((X3,Oc)=>{n();var rf=Fo();function af(e,o){var t=this.__data__,s=rf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Oc.exports=af});var Bc=y((Y3,Uc)=>{n();var sf=Ac(),cf=Cc(),pf=Rc(),mf=Mc(),df=Fc();function lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}lo.prototype.clear=sf;lo.prototype.delete=cf;lo.prototype.get=pf;lo.prototype.has=mf;lo.prototype.set=df;Uc.exports=lo});var Gc=y((J3,Wc)=>{n();var lf=$n(),_f=No(),uf=lf(_f,"Map");Wc.exports=uf});var $c=y((Z3,Vc)=>{n();var Hc=vc(),gf=Bc(),ff=Gc();function hf(){this.size=0,this.__data__={hash:new Hc,map:new(ff||gf),string:new Hc}}Vc.exports=hf});var qc=y((Q3,jc)=>{n();function Tf(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}jc.exports=Tf});var Uo=y((eM,zc)=>{n();var xf=qc();function yf(e,o){var t=e.__data__;return xf(o)?t[typeof o=="string"?"string":"hash"]:t.map}zc.exports=yf});var Xc=y((oM,Kc)=>{n();var Sf=Uo();function bf(e){var o=Sf(this,e).delete(e);return this.size-=o?1:0,o}Kc.exports=bf});var Jc=y((nM,Yc)=>{n();var wf=Uo();function vf(e){return wf(this,e).get(e)}Yc.exports=vf});var Qc=y((tM,Zc)=>{n();var If=Uo();function Af(e){return If(this,e).has(e)}Zc.exports=Af});var op=y((rM,ep)=>{n();var kf=Uo();function Lf(e,o){var t=kf(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}ep.exports=Lf});var tp=y((aM,np)=>{n();var Ef=$c(),Pf=Xc(),Cf=Jc(),Nf=Qc(),Rf=op();function _o(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}_o.prototype.clear=Ef;_o.prototype.delete=Pf;_o.prototype.get=Cf;_o.prototype.has=Nf;_o.prototype.set=Rf;np.exports=_o});var ap=y((iM,rp)=>{n();var Df="__lodash_hash_undefined__";function Mf(e){return this.__data__.set(e,Df),this}rp.exports=Mf});var sp=y((sM,ip)=>{n();function Of(e){return this.__data__.has(e)}ip.exports=Of});var pp=y((cM,cp)=>{n();var Ff=tp(),Uf=ap(),Bf=sp();function jn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Ff;++o<t;)this.add(e[o])}jn.prototype.add=jn.prototype.push=Uf;jn.prototype.has=Bf;cp.exports=jn});var dp=y((pM,mp)=>{n();function Wf(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}mp.exports=Wf});var _p=y((mM,lp)=>{n();function Gf(e){return e!==e}lp.exports=Gf});var gp=y((dM,up)=>{n();function Hf(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}up.exports=Hf});var hp=y((lM,fp)=>{n();var Vf=dp(),$f=_p(),jf=gp();function qf(e,o,t){return o===o?jf(e,o,t):Vf(e,$f,t)}fp.exports=qf});var xp=y((_M,Tp)=>{n();var zf=hp();function Kf(e,o){var t=e==null?0:e.length;return!!t&&zf(e,o,0)>-1}Tp.exports=Kf});var Sp=y((uM,yp)=>{n();function Xf(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}yp.exports=Xf});var wp=y((gM,bp)=>{n();function Yf(e,o){return e.has(o)}bp.exports=Yf});var Ip=y((fM,vp)=>{n();var Jf=$n(),Zf=No(),Qf=Jf(Zf,"Set");vp.exports=Qf});var kp=y((hM,Ap)=>{n();function eh(){}Ap.exports=eh});var ar=y((TM,Lp)=>{n();function oh(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Lp.exports=oh});var Pp=y((xM,Ep)=>{n();var ir=Ip(),nh=kp(),th=ar(),rh=1/0,ah=ir&&1/th(new ir([,-0]))[1]==rh?function(e){return new ir(e)}:nh;Ep.exports=ah});var Np=y((yM,Cp)=>{n();var ih=pp(),sh=xp(),ch=Sp(),ph=wp(),mh=Pp(),dh=ar(),lh=200;function _h(e,o,t){var s=-1,c=sh,p=e.length,m=!0,d=[],_=d;if(t)m=!1,c=ch;else if(p>=lh){var g=o?null:mh(e);if(g)return dh(g);m=!1,c=ph,_=new ih}else _=o?[]:d;e:for(;++s<p;){var b=e[s],T=o?o(b):b;if(b=t||b!==0?b:0,m&&T===T){for(var L=_.length;L--;)if(_[L]===T)continue e;o&&_.push(T),d.push(b)}else c(_,T,t)||(_!==d&&_.push(T),d.push(b))}return d}Cp.exports=_h});var Dp=y((SM,Rp)=>{n();var uh=Np();function gh(e){return e&&e.length?uh(e):[]}Rp.exports=gh});var pr={};_e(pr,{css:()=>qp,default:()=>Jh});var qp,Jh,mr=h(()=>{"use strict";n();qp=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qp));Jh={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ye={};_e(ye,{css:()=>Xp,default:()=>eT});var Xp,eT,Se=h(()=>{"use strict";n();Xp=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xp));eT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var bT={};_e(bT,{useNativeAuthLogout:()=>ST});module.exports=ne(bT);n();var ho=require("react"),cm=S(require("bignumber.js"));n();n();n();var Pi=require("react"),ao=require("react-redux");n();var Mt=require("@reduxjs/toolkit"),Li=require("react-redux/lib/utils/Subscription");k();n();var pi=S(require("lodash.throttle"));A();k();yt();Je();Ye();var Kd=[Zo],vn=!1,Xd=(0,pi.default)(()=>{So(yo())},5e3),mi=e=>o=>t=>{if(Kd.includes(t.type))return o(t);let s=e.getState(),c=pe.local.getItem(Q.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return So(yo());let m=Date.now();return c-m<0&&!vn?setTimeout(()=>{vn=!0,e.dispatch(Aa())},1e3):(vn&&(vn=!1),Xd()),o(t)};n();n();function In(){return typeof sessionStorage!="undefined"}var Ii=In()?(fi(),ne(gi)).default:(Ti(),ne(hi)).default,Ai=In()?(yi(),ne(xi)).default:[],ki=In()?(vi(),ne(wi)).default:e=>e;An();var v=(0,Mt.configureStore)({reducer:Ii,middleware:e=>e({serializableCheck:{ignoredActions:[...Ai,xt.type,nn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(mi)}),Ei=(0,Li.createSubscription)(v),Lb=ki(v),Eb=(0,Mt.configureStore)({reducer:De});var Tl={store:v,subscription:Ei},Ot=(0,Pi.createContext)(Tl),Rb=(0,ao.createStoreHook)(Ot),W=(0,ao.createDispatchHook)(Ot),I=(0,ao.createSelectorHook)(Ot);n();n();k();n();var Ci=S(require("lodash.isequal")),kn=require("reselect"),x=(0,kn.createSelectorCreator)(kn.defaultMemoize,Ci.default);var me=e=>e.account,Ie=x(me,e=>e.address),io=x(me,Ie,(e,o)=>o in e.accounts?e.accounts[o]:on),Ni=x(me,io,(e,o)=>{let c=e,{accounts:t}=c,s=Ee(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),Ub=x(io,e=>e.balance),xl=x(io,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Bb=x(me,e=>e.shard),yl=x(me,e=>e.ledgerAccount),Wb=x(me,e=>e.walletConnectAccount),Gb=x(me,e=>e.isAccountLoading),Hb=x(me,e=>e.accountLoadingError),Sl=x(me,e=>e.websocketEvent),bl=x(me,e=>e.websocketBatchEvent);n();var Ri=e=>e.dappConfig,jb=x(Ri,e=>e.shouldUseWebViewProvider);n();var G=e=>e.loginInfo,wl=x(G,e=>e.loginMethod),Ao=x(G,Ie,(e,o)=>Boolean(o)),Xb=x(G,e=>e.walletConnectLogin),vl=x(G,e=>e.ledgerLogin),Di=x(G,e=>e.walletLogin),Yb=x(G,e=>e.isLoginSessionInvalid),Ft=x(G,e=>e.tokenLogin),Ln=x(G,e=>e.logoutRoute),Il=x(G,e=>e.isWalletConnectV2Initialized);n();var Mi=e=>e.modals,Qb=x(Mi,e=>e.txSubmittedModal),Al=x(Mi,e=>e.notificationModal);n();var de=e=>e.networkConfig,En=x(de,e=>e.network.chainId),kl=x(de,e=>e.network.roundDuration),n0=x(de,e=>e.network.walletConnectBridgeAddress),Ll=x(de,e=>e.network.walletConnectV2RelayAddress),El=x(de,e=>e.network.walletConnectV2ProjectId),Pl=x(de,e=>e.network.walletConnectV2Options),Cl=x(de,e=>e.network.walletConnectDeepLink),z=x(de,e=>e.network),Oi=x(z,e=>e.apiAddress),Fi=x(z,e=>e.explorerAddress),Ui=x(z,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Nl=x(z,e=>e.xAliasAddress),Bi=x(z,e=>e.egldLabel);n();var Pn=e=>e.signedMessageInfo,a0=x(Pn,e=>e.isSigning),i0=x(Pn,e=>e.errorMessage),s0=x(Pn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),c0=x(Pn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Wi=e=>e.toasts,Rl=x(Wi,e=>e.customToasts),Gi=x(Wi,e=>e.transactionToasts);n();k();var Hi={errorMessage:It,successMessage:At,processingMessage:kt},Vi=e=>e.transactionsInfo,Dl=x(Vi,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Hi);n();n();var le=require("@multiversx/sdk-core");A();n();var Ut=require("@multiversx/sdk-core/out");n();n();function Cn(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function Me(e){return Cn(e)?atob(e):e}n();n();n();n();var $i=e=>{let o=e!=null?e:"";return Cn(o)?Ut.TransactionPayload.fromEncoded(o):new Ut.TransactionPayload(o)};n();A();var ko=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ct).some(t=>e.startsWith(t)):!1;function Nn(e){var s,c,p;let o=u({},e);ko({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new le.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:$i(o.data),nonce:o.nonce.valueOf(),receiver:new le.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new le.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Yo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Jo,chainID:o.chainID.valueOf(),version:new le.TransactionVersion((p=o.version)!=null?p:ma)}),o.options?{options:new le.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new le.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();n();var Ul=require("@multiversx/sdk-core/out");n();A();n();var qi=require("@multiversx/sdk-core");M();n();var ji=require("@multiversx/sdk-core");function Bl(e){try{let o=new ji.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Lo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Bl(e)}n();n();n();var Wl=require("@multiversx/sdk-core"),Gl=S(require("bignumber.js"));E();n();n();n();var Bt="blocks";n();n();n();n();$();n();n();$();n();n();n();var Xl=S(require("bignumber.js"));A();n();var Kl=require("@multiversx/sdk-core"),Gt=S(require("bignumber.js"));A();n();var ql=S(require("bignumber.js"));n();Gt.default.config({ROUNDING_MODE:Gt.default.ROUND_FLOOR});n();n();n();A();n();n();n();n();A();n();A();n();var Yl=require("@multiversx/sdk-core");A();n();var Po=require("@multiversx/sdk-core"),Ql=S(require("bignumber.js"));A();n();n();var Jl=S(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();n();A();n();$();var o_=["reDelegateRewards","claimRewards","unBond"],n_=["wrapEgld","unwrapEgld"],t_=["unStake"],r_=["unDelegate"];n();n();n();A();n();var c_=S(require("bignumber.js"));n();n();$();n();var m_=S(require("bignumber.js"));n();n();n();n();var __=S(require("bignumber.js"));M();n();n();n();n();E();n();var h_=require("@multiversx/sdk-web-wallet-provider");A();n();var g_=S(require("qs"));n();B();Ze();n();Ze();var VA={search:Re()?window.location.search:"",removeParams:[]};n();n();n();U();n();$();n();n();U();n();var T_=S(require("linkifyjs"));n();A();n();var x_=S(require("bignumber.js"));n();M();n();n();E();n();E();n();n();n();$();n();$();n();var y_=S(require("bignumber.js"));A();$();n();$();n();var Zi=require("react");M();n();n();$();n();n();var S_=require("@multiversx/sdk-core/out"),b_=S(require("bignumber.js"));$();n();M();n();n();M();var DL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Qi=require("react");M();U();n();var v_=require("react");$();var HL=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];ro();n();var Mn=e=>e.transactions,so=x(Mn,e=>e.signedTransactions),I_=x(Mn,e=>e.signTransactionsError),es=x(Mn,e=>e.signTransactionsCancelMessage),On=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),os=x(so,On(oo)),ns=x(so,On(no)),ts=x(so,On(to)),A_=x(so,On(Et)),rs=x(Mn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Nn(t)))||[]})}),k_=x(so,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var as=require("react");n();k();n();n();n();n();n();n();n();n();var ss=require("@multiversx/sdk-extension-provider"),cs=require("@multiversx/sdk-hw-provider"),ps=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),ms=require("@multiversx/sdk-opera-provider"),ds=require("@multiversx/sdk-passkey-provider/out"),ls=require("@multiversx/sdk-web-wallet-provider");A();we();n();var Oe=require("@multiversx/sdk-web-wallet-iframe-provider/out"),is=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");E();n();var jt=co;var Ae=e=>{switch(e==null?void 0:e.constructor){case ls.WalletProvider:return"wallet";case jt:return"walletconnectv2";case cs.HWProvider:return"ledger";case ss.ExtensionProvider:return"extension";case ds.PasskeyProvider:return"passkey";case ps.MetamaskProvider:return"metamask";case ms.OperaProvider:return"opera";case be.CrossWindowProvider:return"crossWindow";case Oe.IframeProvider:return"iframe";case co:return"";default:return"extra"}};var ee=e=>`Unable to perform ${e}, Provider not initialized`,co=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ee("getAccount"))}setAccount(o){throw new Error(ee(`setAccount: ${o}`))}login(o){throw new Error(ee(`login with options: ${o}`))}logout(o){throw new Error(ee(`logout with options: ${o}`))}getAddress(){throw new Error(ee("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(ee(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(ee(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(ee(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(ee(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(ee(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(ee(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Fn=new co;var L_=Fn;function Y(){return L_||Fn}k();n();n();n();n();n();var _s=require("@lifeomic/axios-fetch"),qt=S(require("axios")),zt=(0,_s.buildAxiosFetch)(qt.default),Kt=(e,o)=>f(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function E_(e,o,t){return f(this,null,function*(){try{let s=yield zt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Kt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function P_(e,o){return f(this,null,function*(){try{let t=yield zt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Kt(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function C_(e,o,t){return f(this,null,function*(){try{let s=yield zt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Kt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var po=qt.default.create();po.get=P_;po.post=E_;po.patch=C_;n();n();var N_=S(require("axios"));n();var R_=S(require("swr"));n();E();n();n();function us(){let e=Y();return Ae(e)}function Fe(e){return us()===e}n();U();var gs=()=>{let{search:e}=P(),o=new URLSearchParams(e),t=Object.fromEntries(o),s=t==null?void 0:t.address;return Lo(s)?s:null};function Un(){let e=v.getState(),o=Y(),t=Ie(e),s=Ao(e),c=Di(e);if(!o)throw"provider not initialized";return Fe("ledger")&&s?new Promise(p=>{p(t)}):!Fe("")&&!Fe("wallet")&&!Fe("extra")?o.getAddress():new Promise(p=>{let m=gs();c!=null&&m&&p(m),s&&p(t),p("")})}n();ro();n();n();n();var D_=S(require("axios"));n();var O_=S(require("axios"));ze();n();A();n();var F_=S(require("axios"));n();var B_=S(require("axios"));n();n();var W_=S(require("axios"));n();var G_=S(require("axios"));n();n();k();E();n();n();n();n();U();var hs=()=>{let{search:e}=P(),o=new URLSearchParams(e),t=Object.fromEntries(o);return t==null?void 0:t.accessToken};var Gn=()=>{var t;let e=hs(),o=G(v.getState());return e!=null?e:(t=o.webviewLogin)==null?void 0:t.data};n();R();M();n();k();n();var Ts=require("@multiversx/sdk-core");M();B();n();ro();n();k();E();n();k();M();n();n();n();M();n();Xo();n();n();n();n();var j_=S(require("swr"));n();n();n();n();var xs=require("react");n();n();var q_=require("react"),z_=require("@multiversx/sdk-web-wallet-provider"),K_=require("@multiversx/sdk-web-wallet-provider"),X_=S(require("qs"));A();k();E();mt();U();var vR=P();n();var Xs=require("react"),tr=require("@multiversx/sdk-core");n();A();St();n();n();n();n();n();n();n();n();n();n();ze();n();var Q_=S(require("axios"));n();var ou=S(require("axios"));n();ze();n();ze();n();n();n();n();var tu=require("@multiversx/sdk-opera-provider");n();var ru=require("@multiversx/sdk-extension-provider");n();we();n();n();n();n();var Hs=S(Gs());var Do=e=>{if(!e||!(0,Hs.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,s,c,p]=o,m=JSON.parse(Me(p)),d=Me(t);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:s}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var Nu=require("@multiversx/sdk-native-auth-client");n();var js=S(require("axios"));n();n();n();function Vs(e){return f(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var $s=(e,o,t,s=0)=>f(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield Vs(o.delay)),yield $s(e,o,t,s+1)):null}}),Qt=(e,o={retries:5,delay:500})=>(...t)=>f(void 0,null,function*(){return yield $s(e,o,t)});var Eu=4;var jD=Qt((e,o,t)=>f(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield js.default.get(`${e}/${Bt}?from=${Eu}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();Qo();n();function Pu(e){return Object.prototype.toString.call(e)==="[object String]"}var er=e=>{var t;if(!e||!Pu(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[s,c,p]=o,m=Me(s),d=Me(c),_=Do(d);if(!_)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let g=w(u({},_),{address:m,body:d,signature:p});return(t=_.extraInfo)!=null&&t.timestamp||delete g.extraInfo,g}catch(s){return null}};var or={isExpired:!1},nr=e=>{if(!e)return or;let o=er(e);if(!o)return or;let t=Xe(),{ttl:s,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return or;let m=p+s,d=t>m,_=m-t;return{isExpired:d,expiresAt:m,secondsUntilExpires:_}};n();U();var o2={origin:P().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Du=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Mu=require("@multiversx/sdk-passkey-provider/out");A();U();n();n();n();var $u=require("react"),ju=require("@multiversx/sdk-hw-provider");n();R();M();n();function qs(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(t){}}}function zs(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=Bu(e.path,e.caseSensitive,e.end),c=o.match(t);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),d=c.slice(1);return{params:s.reduce((g,b,T)=>{if(b==="*"){let L=d[T]||"";m=p.slice(0,p.length-L.length).replace(/(.)\/+$/,"$1")}return g[b]=Wu(d[T]||"",b),g},{}),pathname:p,pathnameBase:m,pattern:e}}function Bu(e,o=!1,t=!0){qs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(s.push(d),"([^\\/]+)"));return e.endsWith("*")?(s.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=t?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),s]}function Wu(e,o){try{return decodeURIComponent(e)}catch(t){return qs(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}bo();Je();Ye();B();var Ks=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&mn({url:e})},Gu=e=>{let o=pe.local.getItem(Q.logoutEvent),{data:t}=o?JSON.parse(o):{data:e};e===t&&(pe.local.setItem({key:Q.logoutEvent,data:e,expires:0}),pe.local.removeItem(Q.logoutEvent))},Hu=500;function Mo(c,p){return f(this,arguments,function*(e,o,t=Boolean(Gn()),s={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var H;let m="",d=Y(),_=Ae(d),g=_==="wallet",b=((H=d==null?void 0:d.isInitialized)==null?void 0:H.call(d))===!0;if(t&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(s.shouldBroadcastLogoutAcrossTabs)try{m=yield Un(),Gu(m)}catch(oe){console.error("error fetching logout address",oe)}let T=Qe(e),L=P(),N=new URL(decodeURIComponent(T)).pathname;if((zs(L.pathname,N)||g&&b)&&Ma(),!m&&!b)return Ks({callbackUrl:T,onRedirect:o});try{if(v.dispatch(C()),g)return setTimeout(()=>{d.logout({callbackUrl:T})},Hu);s.hasConsentPopup&&_==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:T})}catch(oe){console.error("Logging out error:",oe)}finally{g||Ks({callbackUrl:T,onRedirect:o})}})}n();n();var Up=require("react"),Bp=require("@multiversx/sdk-core"),Rh=require("@multiversx/sdk-extension-provider"),Dh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Mh=require("@multiversx/sdk-passkey-provider/out"),Oh=S(Dp());A();n();n();n();var sr=()=>I(Ni);n();n();n();n();n();n();n();var Bo=S(require("react"));var FM=(0,Bo.createContext)({}),UM=v.getState();n();var Op=S(require("react"));n();var cr=S(require("react")),fh=S(require("axios"));n();n();we();n();n();var bh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),wh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");R();n();R();k();M();n();n();k();n();B();n();k();M();n();n();var Th=require("@multiversx/sdk-core"),xh=S(require("bignumber.js"));A();n();var yh=S(require("bignumber.js"));A();k();E();B();U();n();var Fp=require("react"),kh=require("@multiversx/sdk-extension-provider"),Lh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Eh=require("@multiversx/sdk-passkey-provider/out");we();k();n();k();M();bo();U();n();se();k();n();n();var Uh=require("react");n();n();E();ro();n();var Wp=require("react");n();n();var Wh=require("react"),Gh=require("@multiversx/sdk-extension-provider");se();R();E();n();he();B();B();n();n();we();M();n();var Bh=require("react"),Gp=require("@multiversx/sdk-core");k();n();var Hh=require("react"),Vh=require("@multiversx/sdk-opera-provider");se();R();E();he();B();U();n();var $h=require("react");lt();se();we();R();k();E();he();U();n();var Xh=require("react");se();k();n();n();_t();n();n();var jh=S(require("platform"));Ze();n();n();n();n();n();n();n();xo();E();n();n();var qh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();bo();Je();n();n();n();k();n();n();var zh=S(require("axios"));B();n();n();var Kh=S(Vn());xo();var Hp,Vp,$p,kB=($p=(Vp=(Hp=Z.safeWindow)==null?void 0:Hp.location)==null?void 0:Vp.origin)==null?void 0:$p.includes("localhost");n();U();n();n();var sT=require("react");A();n();n();A();n();n();n();var Yh=S(require("bignumber.js"));n();n();n();var Le=S(require("react")),om=require("react"),nm=require("react"),fr=S(require("classnames")),tm=require("react-dom");A();n();var Kp=S(require("react"));n();var Go=S(require("react"));n();Ze();var jp=()=>!Re();var Zh=()=>f(void 0,null,function*(){return yield Promise.resolve().then(()=>(mr(),pr))}),Qh=()=>(mr(),ne(pr)).default,dr=jp();function zp({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=Go.default.useState(dr?void 0:Qh()),[p,m]=Go.default.useState(dr||t==null?void 0:t()),d=()=>f(this,null,function*(){(e?e():Zh()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,Go.useEffect)(()=>{dr&&d()},[]),{globalStyles:s,styles:p}}function ke(e,o){return t=>{let{globalStyles:s,styles:c}=zp({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Kp.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();var Yp=S(require("react")),Jp=S(require("classnames"));var oT=({className:e,children:o,styles:t})=>Yp.default.createElement("div",{className:(0,Jp.default)(t==null?void 0:t.dappModalBody,e)},o),lr=ke(oT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),ne(ye)).default});n();var _r=S(require("react")),Zp=S(require("classnames"));var nT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?_r.default.createElement("div",{className:(0,Zp.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:_r.default.createElement("div",null,s)):null,ur=ke(nT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),ne(ye)).default});n();var fo=S(require("react")),Qp=require("@fortawesome/free-solid-svg-icons"),em=require("@fortawesome/react-fontawesome"),Ho=S(require("classnames"));var tT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>e?t?fo.default.createElement("div",{className:(0,Ho.default)(_==null?void 0:_.dappModalHeader,s)},t):fo.default.createElement("div",{className:(0,Ho.default)(_==null?void 0:_.dappModalHeader,s)},fo.default.createElement("div",{className:(0,Ho.default)(_==null?void 0:_.dappModalHeaderText,p)},o),fo.default.createElement("button",{onClick:m,className:(0,Ho.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},fo.default.createElement(em.FontAwesomeIcon,{size:"lg",icon:Qp.faTimes}))):null,gr=ke(tT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),ne(ye)).default});var rT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},aT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=rT,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:g})=>{let[b,T]=(0,om.useState)(!1);if((0,nm.useEffect)(()=>{T(!0)},[]),!_)return null;let{showHeader:L,showFooter:N,headerText:H,footerText:oe,modalDialogClassName:Vo="dapp-modal-dialog",modalContentClassName:zn="dapp-modal-dialog-content",modalHeaderClassName:Kn="dapp-modal-dialog-header",modalHeaderTextClassName:Xn="dapp-modal-dialog-header-text",modalCloseButtonClassName:J="dapp-modal-dialog-close-button",modalBodyClassName:pm="dapp-modal-dialog-content-body",modalFooterClassName:mm="dapp-modal-dialog-footer",customModalHeader:dm,customModalFooter:lm}=c,_m=um=>{um.key==="Escape"&&s&&(m==null||m())};return Le.default.createElement(Le.default.Fragment,null,b&&(0,tm.createPortal)(Le.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,fr.default)(Vo,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:_m},Le.default.createElement("div",{className:(0,fr.default)(g==null?void 0:g.dappModalContent,zn)},Le.default.createElement(gr,{visible:L,headerText:H,customHeader:dm,className:Kn,headerTextClassName:Xn,closeButtonClassName:J,onHide:m}),Le.default.createElement(lr,{className:pm},o),Le.default.createElement(ur,{visible:N,customFooter:lm,footerText:oe,className:mm}))),d!=null?d:document==null?void 0:document.body))},iT=ke(aT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),ne(ye)).default});n();n();var rm=require("react");n();n();var am=require("react"),pT=require("@multiversx/sdk-hw-provider");se();R();k();E();he();n();var cT=require("react");n();n();var hr=require("react");R();k();E();he();U();n();var dT=require("react"),lT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");se();R();E();he();B();B();n();var _T=require("react"),uT=require("@multiversx/sdk-passkey-provider/out");se();R();E();he();B();B();n();n();var im=require("react");n();var hT=require("react");n();var Tr=require("react"),fT=require("socket.io-client");k();n();n();n();var TT=require("react");M();n();n();n();var yT=S(require("swr"));n();n();n();n();var xT=S(require("axios"));n();var ST=()=>{let{address:e}=sr(),{tokenLogin:o}=I(G),t=I(Ln),{isExpired:s,secondsUntilExpires:c,expiresAt:p}=nr(o==null?void 0:o.nativeAuthToken),m=(0,ho.useRef)(""),d=(0,ho.useRef)();return(0,ho.useEffect)(()=>{e&&s&&Mo(t)},[s,e,t]),(0,ho.useEffect)(()=>{let _=Boolean(Gn());if(!e||_)return;let g=new cm.default(String(c)),b=`${e}_${p}`,T=m.current===b;if(!(c&&g.isGreaterThan(0))||T)return;m.current=b,clearTimeout(d.current);let N=g.times(1e3);return d.current=setTimeout(()=>{Mo(t)},N.toNumber()),()=>{clearTimeout(d.current)}},[p,e,t]),null};0&&(module.exports={useNativeAuthLogout});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=useNativeAuthLogout.js.map
