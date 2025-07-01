"use strict";var km=Object.create;var bo=Object.defineProperty,Lm=Object.defineProperties,Em=Object.getOwnPropertyDescriptor,Pm=Object.getOwnPropertyDescriptors,Cm=Object.getOwnPropertyNames,Ko=Object.getOwnPropertySymbols,Nm=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty,Ir=Object.prototype.propertyIsEnumerable;var vr=(e,o,t)=>o in e?bo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))et.call(o,t)&&vr(e,t,o[t]);if(Ko)for(var t of Ko(o))Ir.call(o,t)&&vr(e,t,o[t]);return e},w=(e,o)=>Lm(e,Pm(o));var be=(e,o)=>{var t={};for(var s in e)et.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Ko)for(var s of Ko(e))o.indexOf(s)<0&&Ir.call(e,s)&&(t[s]=e[s]);return t};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var y=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),_e=(e,o)=>{for(var t in o)bo(e,t,{get:o[t],enumerable:!0})},Ar=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Cm(o))!et.call(e,c)&&c!==t&&bo(e,c,{get:()=>o[c],enumerable:!(s=Em(o,c))||s.enumerable});return e};var S=(e,o,t)=>(t=e!=null?km(Nm(e)):{},Ar(o||!e||!e.__esModule?bo(t,"default",{value:e,enumerable:!0}):t,e)),ne=e=>Ar(bo({},"__esModule",{value:!0}),e);var f=(e,o,t)=>new Promise((s,c)=>{var p=_=>{try{d(t.next(_))}catch(g){c(g)}},m=_=>{try{d(t.throw(_))}catch(g){c(g)}},d=_=>_.done?s(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(e,o)).next())});var Er=y(Xo=>{"use strict";n();Xo.byteLength=Dm;Xo.toByteArray=Om;Xo.fromByteArray=Bm;var te=[],X=[],Rm=typeof Uint8Array!="undefined"?Uint8Array:Array,ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Pe=0,kr=ot.length;Pe<kr;++Pe)te[Pe]=ot[Pe],X[ot.charCodeAt(Pe)]=Pe;var Pe,kr;X["-".charCodeAt(0)]=62;X["_".charCodeAt(0)]=63;function Lr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function Dm(e){var o=Lr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function Mm(e,o,t){return(o+t)*3/4-t}function Om(e){var o,t=Lr(e),s=t[0],c=t[1],p=new Rm(Mm(e,s,c)),m=0,d=c>0?s-4:s,_;for(_=0;_<d;_+=4)o=X[e.charCodeAt(_)]<<18|X[e.charCodeAt(_+1)]<<12|X[e.charCodeAt(_+2)]<<6|X[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=X[e.charCodeAt(_)]<<2|X[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=X[e.charCodeAt(_)]<<10|X[e.charCodeAt(_+1)]<<4|X[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Fm(e){return te[e>>18&63]+te[e>>12&63]+te[e>>6&63]+te[e&63]}function Um(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Fm(s));return c.join("")}function Bm(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,d=t-s;m<d;m+=p)c.push(Um(e,m,m+p>d?d:m+p));return s===1?(o=e[t-1],c.push(te[o>>2]+te[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(te[o>>10]+te[o>>4&63]+te[o<<2&63]+"=")),c.join("")}});var Pr=y(nt=>{n();nt.read=function(e,o,t,s,c){var p,m,d=c*8-s-1,_=(1<<d)-1,g=_>>1,b=-7,T=t?c-1:0,k=t?-1:1,N=e[o+T];for(T+=k,p=N&(1<<-b)-1,N>>=-b,b+=d;b>0;p=p*256+e[o+T],T+=k,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+T],T+=k,b-=8);if(p===0)p=1-g;else{if(p===_)return m?NaN:(N?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-g}return(N?-1:1)*m*Math.pow(2,p-s)};nt.write=function(e,o,t,s,c,p){var m,d,_,g=p*8-c-1,b=(1<<g)-1,T=b>>1,k=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,N=s?0:p-1,H=s?1:-1,oe=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+T>=1?o+=k/_:o+=k*Math.pow(2,1-T),o*_>=2&&(m++,_/=2),m+T>=b?(d=0,m=b):m+T>=1?(d=(o*_-1)*Math.pow(2,c),m=m+T):(d=o*Math.pow(2,T-1)*Math.pow(2,c),m=0));c>=8;e[t+N]=d&255,N+=H,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[t+N]=m&255,N+=H,m/=256,g-=8);e[t+N-H]|=oe*128}});var Vr=y(ze=>{"use strict";n();var tt=Er(),je=Pr(),Cr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ze.Buffer=l;ze.SlowBuffer=qm;ze.INSPECT_MAX_BYTES=50;var Yo=2147483647;ze.kMaxLength=Yo;l.TYPED_ARRAY_SUPPORT=Wm();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Wm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function ue(e){if(e>Yo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return st(e)}return Dr(e,o,t)}l.poolSize=8192;function Dr(e,o,t){if(typeof e=="string")return Hm(e,o);if(ArrayBuffer.isView(e))return Vm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(re(e,ArrayBuffer)||e&&re(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(re(e,SharedArrayBuffer)||e&&re(e.buffer,SharedArrayBuffer)))return at(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return l.from(s,o,t);var c=$m(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,t){return Dr(e,o,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function Mr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Gm(e,o,t){return Mr(e),e<=0?ue(e):o!==void 0?typeof t=="string"?ue(e).fill(o,t):ue(e).fill(o):ue(e)}l.alloc=function(e,o,t){return Gm(e,o,t)};function st(e){return Mr(e),ue(e<0?0:ct(e)|0)}l.allocUnsafe=function(e){return st(e)};l.allocUnsafeSlow=function(e){return st(e)};function Hm(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Or(e,o)|0,s=ue(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function rt(e){for(var o=e.length<0?0:ct(e.length)|0,t=ue(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function Vm(e){if(re(e,Uint8Array)){var o=new Uint8Array(e);return at(o.buffer,o.byteOffset,o.byteLength)}return rt(e)}function at(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,l.prototype),s}function $m(e){if(l.isBuffer(e)){var o=ct(e.length)|0,t=ue(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||pt(e.length)?ue(0):rt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return rt(e.data)}function ct(e){if(e>=Yo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Yo.toString(16)+" bytes");return e|0}function qm(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,t){if(re(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),re(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(o)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=l.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(re(m,Uint8Array))p+m.length>c.length?l.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(l.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Or(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||re(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return it(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Hr(e).length;default:if(c)return s?-1:it(e).length;o=(""+o).toLowerCase(),c=!0}}l.byteLength=Or;function jm(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return nd(this,o,t);case"utf8":case"utf-8":return Ur(this,o,t);case"ascii":return ed(this,o,t);case"latin1":case"binary":return od(this,o,t);case"base64":return Zm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return td(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}l.prototype._isBuffer=!0;function Ce(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ce(this,t,t+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ce(this,t,t+3),Ce(this,t+1,t+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ce(this,t,t+7),Ce(this,t+1,t+6),Ce(this,t+2,t+5),Ce(this,t+3,t+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ur(this,0,o):jm.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",t=ze.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Cr&&(l.prototype[Cr]=l.prototype.inspect);l.prototype.compare=function(o,t,s,c,p){if(re(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=s-t,_=Math.min(m,d),g=this.slice(c,p),b=o.slice(t,s),T=0;T<_;++T)if(g[T]!==b[T]){m=g[T],d=b[T];break}return m<d?-1:d<m?1:0};function Fr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,pt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=l.from(o,s)),l.isBuffer(o))return o.length===0?-1:Nr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Nr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Nr(e,o,t,s,c){var p=1,m=e.length,d=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(N,H){return p===1?N[H]:N.readUInt16BE(H*p)}var g;if(c){var b=-1;for(g=t;g<m;g++)if(_(e,g)===_(o,b===-1?0:g-b)){if(b===-1&&(b=g),g-b+1===d)return b*p}else b!==-1&&(g-=g-b),b=-1}else for(t+d>m&&(t=m-d),g=t;g>=0;g--){for(var T=!0,k=0;k<d;k++)if(_(e,g+k)!==_(o,k)){T=!1;break}if(T)return g}return-1}l.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};l.prototype.indexOf=function(o,t,s){return Fr(this,o,t,s,!0)};l.prototype.lastIndexOf=function(o,t,s){return Fr(this,o,t,s,!1)};function zm(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var d=parseInt(o.substr(m*2,2),16);if(pt(d))return m;e[t+m]=d}return m}function Km(e,o,t,s){return Jo(it(o,e.length-t),e,t,s)}function Xm(e,o,t,s){return Jo(id(o),e,t,s)}function Ym(e,o,t,s){return Jo(Hr(o),e,t,s)}function Jm(e,o,t,s){return Jo(sd(o,e.length-t),e,t,s)}l.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return zm(this,o,t,s);case"utf8":case"utf-8":return Km(this,o,t,s);case"ascii":case"latin1":case"binary":return Xm(this,o,t,s);case"base64":return Ym(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Jm(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Zm(e,o,t){return o===0&&t===e.length?tt.fromByteArray(e):tt.fromByteArray(e.slice(o,t))}function Ur(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var _,g,b,T;switch(d){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(T=(p&31)<<6|_&63,T>127&&(m=T));break;case 3:_=e[c+1],g=e[c+2],(_&192)===128&&(g&192)===128&&(T=(p&15)<<12|(_&63)<<6|g&63,T>2047&&(T<55296||T>57343)&&(m=T));break;case 4:_=e[c+1],g=e[c+2],b=e[c+3],(_&192)===128&&(g&192)===128&&(b&192)===128&&(T=(p&15)<<18|(_&63)<<12|(g&63)<<6|b&63,T>65535&&T<1114112&&(m=T))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=d}return Qm(s)}var Rr=4096;function Qm(e){var o=e.length;if(o<=Rr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Rr));return t}function ed(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function od(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function nd(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=cd[e[p]];return c}function td(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}l.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,l.prototype),c};function O(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};l.prototype.readUint8=l.prototype.readUInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};l.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};l.prototype.readInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};l.prototype.readInt16BE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};l.prototype.readInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,t){return o=o>>>0,t||O(o,4,this.length),je.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,t){return o=o>>>0,t||O(o,4,this.length),je.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||O(o,8,this.length),je.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||O(o,8,this.length),je.read(this,o,!1,52,8)};function V(e,o,t,s,c,p){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;V(this,o,t,s,p,0)}var m=1,d=0;for(this[t]=o&255;++d<s&&(m*=256);)this[t+d]=o/m&255;return t+s};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;V(this,o,t,s,p,0)}var m=s-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+s};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,1,255,0),this[t]=o&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};l.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);V(this,o,t,s,p-1,-p)}var m=0,d=1,_=0;for(this[t]=o&255;++m<s&&(d*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+s};l.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);V(this,o,t,s,p-1,-p)}var m=s-1,d=1,_=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+s};l.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};l.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};l.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Br(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Wr(e,o,t,s,c){return o=+o,t=t>>>0,c||Br(e,o,t,4,34028234663852886e22,-34028234663852886e22),je.write(e,o,t,s,23,4),t+4}l.prototype.writeFloatLE=function(o,t,s){return Wr(this,o,t,!0,s)};l.prototype.writeFloatBE=function(o,t,s){return Wr(this,o,t,!1,s)};function Gr(e,o,t,s,c){return o=+o,t=t>>>0,c||Br(e,o,t,8,17976931348623157e292,-17976931348623157e292),je.write(e,o,t,s,52,8),t+8}l.prototype.writeDoubleLE=function(o,t,s){return Gr(this,o,t,!0,s)};l.prototype.writeDoubleBE=function(o,t,s){return Gr(this,o,t,!1,s)};l.prototype.copy=function(o,t,s,c){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};l.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!l.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var d=l.isBuffer(o)?o:l.from(o,c),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=d[m%_]}return this};var rd=/[^+/0-9A-Za-z-_]/g;function ad(e){if(e=e.split("=")[0],e=e.trim().replace(rd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function it(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function id(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function sd(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Hr(e){return tt.toByteArray(ad(e))}function Jo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function re(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function pt(e){return e!==e}var cd=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Kr=y((WT,zr)=>{n();var D=zr.exports={},ae,ie;function mt(){throw new Error("setTimeout has not been defined")}function dt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ae=setTimeout:ae=mt}catch(e){ae=mt}try{typeof clearTimeout=="function"?ie=clearTimeout:ie=dt}catch(e){ie=dt}})();function $r(e){if(ae===setTimeout)return setTimeout(e,0);if((ae===mt||!ae)&&setTimeout)return ae=setTimeout,setTimeout(e,0);try{return ae(e,0)}catch(o){try{return ae.call(null,e,0)}catch(t){return ae.call(this,e,0)}}}function pd(e){if(ie===clearTimeout)return clearTimeout(e);if((ie===dt||!ie)&&clearTimeout)return ie=clearTimeout,clearTimeout(e);try{return ie(e)}catch(o){try{return ie.call(null,e)}catch(t){return ie.call(this,e)}}}var ge=[],Ke=!1,Ne,Zo=-1;function md(){!Ke||!Ne||(Ke=!1,Ne.length?ge=Ne.concat(ge):Zo=-1,ge.length&&qr())}function qr(){if(!Ke){var e=$r(md);Ke=!0;for(var o=ge.length;o;){for(Ne=ge,ge=[];++Zo<o;)Ne&&Ne[Zo].run();Zo=-1,o=ge.length}Ne=null,Ke=!1,pd(e)}}D.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ge.push(new jr(e,o)),ge.length===1&&!Ke&&$r(qr)};function jr(e,o){this.fun=e,this.array=o}jr.prototype.run=function(){this.fun.apply(null,this.array)};D.title="browser";D.browser=!0;D.env={};D.argv=[];D.version="";D.versions={};function fe(){}D.on=fe;D.addListener=fe;D.once=fe;D.off=fe;D.removeListener=fe;D.removeAllListeners=fe;D.emit=fe;D.prependListener=fe;D.prependOnceListener=fe;D.listeners=function(e){return[]};D.binding=function(e){throw new Error("process.binding is not supported")};D.cwd=function(){return"/"};D.chdir=function(e){throw new Error("process.chdir is not supported")};D.umask=function(){return 0}});var r,i,dd,a,n=h(()=>{r=S(Vr()),i=S(Kr()),dd=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=dd});var Xr=h(()=>{"use strict";n()});var se=h(()=>{"use strict";n()});var Yr=h(()=>{"use strict";n()});var lt,Jr=h(()=>{"use strict";n();lt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(lt||{})});var Zr=h(()=>{"use strict";n()});var _t=h(()=>{"use strict";n()});var Qr=h(()=>{"use strict";n()});var ut=h(()=>{"use strict";n()});var ea=h(()=>{"use strict";n()});var oa=h(()=>{"use strict";n()});var we,Xe,ve=h(()=>{"use strict";n();we=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Xe=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var na,ZT,ta,QT,E=h(()=>{"use strict";n();ve();na=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(na||{}),ZT=u(u({},Xe.WindowProviderRequestEnums),na),ta=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ta||{}),QT=u(u({},Xe.WindowProviderResponseEnums),ta)});var ra=h(()=>{"use strict";n()});var aa=h(()=>{"use strict";n()});var $=h(()=>{"use strict";n()});var ia=h(()=>{"use strict";n()});var sa=h(()=>{"use strict";n()});var ca=h(()=>{"use strict";n()});var M=h(()=>{"use strict";n();ut();ea();oa();E();ra();aa();$();ia();sa();ca()});var Ye,pa,fx,ma,hx,da,Tx,xx,ld,Je=h(()=>{"use strict";n();M();Ye={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:pa,egldLabel:fx}=Ye["devnet"],{chainId:ma,egldLabel:hx}=Ye["testnet"],{chainId:da,egldLabel:Tx}=Ye["mainnet"],xx={["devnet"]:pa,["testnet"]:ma,["mainnet"]:da},ld={[pa]:"devnet",[ma]:"testnet",[da]:"mainnet"}});var Qo=h(()=>{"use strict";n()});var ce,la=h(()=>{"use strict";n();ce=require("@multiversx/sdk-web-wallet-provider")});var Q,wo=h(()=>{"use strict";n();Q=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var _a,ua,gt,Ix,Ax,ft=h(()=>{"use strict";n();wo();gt=String((ua=(_a=Q.safeWindow)==null?void 0:_a.navigator)==null?void 0:ua.userAgent),Ix=/^((?!chrome|android).)*safari/i.test(gt),Ax=/firefox/i.test(gt)&&/windows/i.test(gt)});var en,on,ga,nn,fa,Ze,A=h(()=>{"use strict";n();Xr();se();Yr();Jr();Zr();_t();Qr();Je();Qo();la();ft();en=5e4,on=1e9,ga=1,nn="logout",fa="login",Ze="0"});var Qe,tn=h(()=>{"use strict";n();Qe=()=>Date.now()/1e3});var ha=h(()=>{"use strict";n()});var Ta=h(()=>{"use strict";n()});var ht=h(()=>{"use strict";n();tn();ha();Ta()});var Tt={};_e(Tt,{clear:()=>fd,getItem:()=>ud,localStorageKeys:()=>j,removeItem:()=>gd,setItem:()=>_d});var j,rn,_d,ud,gd,fd,Re=h(()=>{"use strict";n();ht();j={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},rn=typeof localStorage!="undefined",_d=({key:e,data:o,expires:t})=>{!rn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ud=e=>{if(!rn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Qe()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},gd=e=>{!rn||localStorage.removeItem(String(e))},fd=()=>{!rn||localStorage.clear()}});var xt={};_e(xt,{clear:()=>ba,getItem:()=>ya,removeItem:()=>Sa,setItem:()=>xa,storage:()=>hd});var xa,ya,Sa,ba,hd,wa=h(()=>{"use strict";n();xa=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ya=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Sa=e=>sessionStorage.removeItem(String(e)),ba=()=>sessionStorage.clear(),hd={setItem:xa,getItem:ya,removeItem:Sa,clear:ba}});var pe,eo=h(()=>{"use strict";n();Re();wa();pe={session:xt,local:Tt}});var yt,C,z,R=h(()=>{"use strict";n();yt=require("@reduxjs/toolkit");A();C=(0,yt.createAction)(nn),z=(0,yt.createAction)(fa,e=>({payload:e}))});var bt,va,Ia,an,St,Aa,sn,Td,wt,ty,xd,yd,ry,ay,iy,Sd,bd,cn,pn=h(()=>{"use strict";n();bt=require("@multiversx/sdk-core"),va=require("@reduxjs/toolkit"),Ia=require("redux-persist");A();eo();Re();R();an={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ze},St={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":an},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Aa=(0,va.createSlice)({name:"accountInfoSlice",initialState:St,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new bt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:an},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(C,()=>(pe.local.removeItem(j.loginExpiresAt),St)),e.addCase(z,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new bt.Address(s).hex()}),e.addCase(Ia.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=s;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:St.accounts,o.publicKey=d})}}),{setAccount:sn,setAddress:Td,setAccountNonce:wt,setAccountShard:ty,setLedgerAccount:xd,updateLedgerAccount:yd,setWalletConnectAccount:ry,setIsAccountLoading:ay,setAccountLoadingError:iy,setWebsocketEvent:Sd,setWebsocketBatchEvent:bd}=Aa.actions,cn=Aa.reducer});function vo(){return new Date().setHours(new Date().getHours()+24)}function Io(e){pe.local.setItem({key:j.loginExpiresAt,data:e,expires:e})}var vt=h(()=>{"use strict";n();eo();Re()});var La,ka,Ea,fy,wd,vd,Pa,hy,Id,Ca,Ty,xy,yy,mn,dn=h(()=>{"use strict";n();La=require("@reduxjs/toolkit");vt();E();R();ka={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ea=(0,La.createSlice)({name:"loginInfoSlice",initialState:ka,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(C,()=>ka),e.addCase(z,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Io(vo())})}}),{setLoginMethod:fy,setWalletConnectLogin:wd,setLedgerLogin:vd,setTokenLogin:Pa,setTokenLoginSignature:hy,setWalletLogin:Id,invalidateLoginSession:Ca,setLogoutRoute:Ty,setIsWalletConnectV2Initialized:xy,setWebviewLogin:yy}=Ea.actions,mn=Ea.reducer});var Ra,Na,Da,vy,Ad,Iy,kd,ln,_n=h(()=>{"use strict";n();Ra=require("@reduxjs/toolkit");R();Na={},Da=(0,Ra.createSlice)({name:"modalsSlice",initialState:Na,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(C,()=>Na)}}),{setTxSubmittedModal:vy,setNotificationModal:Ad,clearTxSubmittedModal:Iy,clearNotificationModal:kd}=Da.actions,ln=Da.reducer});var De,oo=h(()=>{"use strict";n();De=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var P,B=h(()=>{"use strict";n();oo();P=()=>{if(!De())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var no,Ma=h(()=>{"use strict";n();B();no=(e="")=>{let o=P(),t=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||t?e:`${o.origin}/${e.replace("/","")}`}});var Oa=h(()=>{"use strict";n();W()});var Fa,Ua=h(()=>{"use strict";n();wo();Fa=e=>{if(!Q.safeWindow.location)return;if(!new URL(Q.safeWindow.location.href).protocol.startsWith("http"))return Q.safeWindow.location.reload();Q.safeWindow.location.assign(e)}});var W=h(()=>{"use strict";n();Ma();Oa();B();Ua()});var Ba,Wa,un,Ao=h(()=>{"use strict";n();W();Ba=!1,Wa=(e=!0)=>{Ba=e},un=({timeout:e=0,url:o})=>{Ba||setTimeout(()=>{if(!!window)return Fa(o)},e)}});var Ga=h(()=>{"use strict";n();Ao()});function Ha(e){return e[Math.floor(Math.random()*e.length)]}var Va=h(()=>{"use strict";n()});var It=h(()=>{"use strict";n();_t()});var he=h(()=>{"use strict";n();Ga();Va();It()});var $a,qa,ja,At,Ed,za,tS,rS,Pd,gn,fn=h(()=>{"use strict";n();$a=require("@reduxjs/toolkit"),qa=S(require("lodash.omit")),ja=require("redux-persist");Qo();R();he();At={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Ed={network:At},za=(0,$a.createSlice)({name:"appConfig",initialState:Ed,reducers:{initializeNetworkConfig:(e,o)=>{let t=Ha(o.payload.walletConnectV2RelayAddresses),s=(0,qa.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(C,o=>{o.network.customWalletAddress=void 0}),e.addCase(ja.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:tS,updateNetworkConfig:rS,setCustomWalletAddress:Pd}=za.actions,gn=za.reducer});var Ka,kt,Xa,mS,dS,lS,hn,Tn=h(()=>{"use strict";n();Ka=require("@reduxjs/toolkit");M();R();kt={isSigning:!1,signedSessions:{}},Xa=(0,Ka.createSlice)({name:"signedMessageInfoSliceState",initialState:kt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>kt},extraReducers:e=>{e.addCase(C,()=>kt)}}),{setSignSession:mS,clearSignedMessageInfo:dS,setSignSessionState:lS}=Xa.actions,hn=Xa.reducer});var Ja,Za,Ya,Qa,Lt,Cd,xS,Nd,xn,yn=h(()=>{"use strict";n();Ja=require("@reduxjs/toolkit"),Za=require("redux-persist");M();tn();R();Ya={customToasts:[],transactionToasts:[]},Qa=(0,Ja.createSlice)({name:"toastsSlice",initialState:Ya,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Qe(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(C,()=>Ya),e.addCase(Za.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:Lt,removeCustomToast:Cd,addTransactionToast:xS,removeTransactionToast:Nd}=Qa.actions,xn=Qa.reducer});var ei,Pt,Ct,Nt,Rd,Et,oi,wS,Dd,Rt,Sn,bn=h(()=>{"use strict";n();ei=require("@reduxjs/toolkit");R();Pt="Transaction failed",Ct="Transaction successful",Nt="Processing transaction",Rd="Transaction submitted",Et={},oi=(0,ei.createSlice)({name:"transactionsInfo",initialState:Et,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Pt,successMessage:(s==null?void 0:s.successMessage)||Ct,processingMessage:(s==null?void 0:s.processingMessage)||Nt,submittedMessage:(s==null?void 0:s.submittedMessage)||Rd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Et},extraReducers:e=>{e.addCase(C,()=>Et)}}),{clearTransactionsInfo:wS,setTransactionsDisplayInfo:Dd,clearTransactionsInfoForSessionId:Rt}=oi.actions,Sn=oi.reducer});function ro(e){return e!=null&&($d(e)||Xd(e))}function ao(e){return e!=null&&(qd(e)||Yd(e))}function io(e){return e!=null&&(jd(e)||Jd(e))}function ni(e){return e!=null&&(zd(e)||Zd(e))}function Dt(e){return e!=null&&Kd(e)}function $d(e){return e!=null&&Md.includes(e)}function qd(e){return e!=null&&Od.includes(e)}function jd(e){return e!=null&&Fd.includes(e)}function zd(e){return e!=null&&Ud.includes(e)}function Kd(e){return e!=null&&Bd.includes(e)}function Xd(e){return e!=null&&Wd.includes(e)}function Yd(e){return e!=null&&Gd.includes(e)}function Jd(e){return e!=null&&Hd.includes(e)}function Zd(e){return e!=null&&Vd.includes(e)}var Md,Od,Fd,Ud,Bd,Wd,Gd,Hd,Vd,so=h(()=>{"use strict";n();E();Md=["sent"],Od=["success"],Fd=["fail","cancelled","timedOut"],Ud=["invalid"],Bd=["timedOut"],Wd=["pending"],Gd=["success"],Hd=["fail","invalid"],Vd=["not executed"]});var ti,ri,ko,Qd,ai,ii,si,el,wn,ol,nl,NS,tl,Lo,Mt,RS,vn,In=h(()=>{"use strict";n();ti=require("@reduxjs/toolkit"),ri=require("redux-persist");E();so();R();ko={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Qd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ai=(0,ti.createSlice)({name:"transactionsSlice",initialState:ko,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,g;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Qd),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=ko.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,b,T,k,N,H,oe,zo;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,_=(b=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:b.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(Z=>Z.hash===p?w(u(u({},m!=null?m:{}),Z),{status:s,errorMessage:c,inTransit:d}):Z);let Jn=(k=(T=e.signedTransactions[t])==null?void 0:T.transactions)==null?void 0:k.every(Z=>ao(Z.status)),Zn=(H=(N=e.signedTransactions[t])==null?void 0:N.transactions)==null?void 0:H.some(Z=>io(Z.status)),Qn=(zo=(oe=e.signedTransactions[t])==null?void 0:oe.transactions)==null?void 0:zo.every(Z=>ni(Z.status));Jn&&(e.signedTransactions[t].status="success"),Zn&&(e.signedTransactions[t].status="fail"),Qn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=ko.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=ko.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(C,()=>ko),e.addCase(ri.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((d,[_,g])=>{let b=new Date(_),T=new Date;return T.setHours(T.getHours()+5),T-b>0||(d[_]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ii,updateSignedTransactions:si,setTransactionsToSign:el,clearAllTransactionsToSign:wn,clearAllSignedTransactions:ol,clearSignedTransaction:nl,clearTransactionToSign:NS,setSignTransactionsError:tl,setSignTransactionsCancelMessage:Lo,moveTransactionsToSignedState:Mt,updateSignedTransactionsCustomTransactionInformation:RS}=ai.actions,vn=ai.reducer});var ci,Ot,pi,FS,US,rl,BS,An,kn=h(()=>{"use strict";n();ci=require("@reduxjs/toolkit");R();Ot={},pi=(0,ci.createSlice)({name:"batchTransactionsSlice",initialState:Ot,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ot},extraReducers:e=>{e.addCase(C,()=>Ot)}}),{setBatchTransactions:FS,updateBatchTransactions:US,clearBatchTransactions:rl,clearAllBatchTransactions:BS}=pi.actions,An=pi.reducer});var di,mi,li,VS,_i,Ft=h(()=>{"use strict";n();di=require("@reduxjs/toolkit");R();mi={},li=(0,di.createSlice)({name:"dappConfigSlice",initialState:mi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(C,()=>mi)}}),{setDappConfig:VS}=li.actions,_i=li.reducer});var L=h(()=>{"use strict";n();pn();dn();_n();fn();Tn();yn();bn();In();kn();Ft()});var Ut=h(()=>{"use strict";n()});var fi,cl,pl,Me,Pn=h(()=>{"use strict";n();fi=require("@reduxjs/toolkit");Ut();pn();kn();Ft();dn();_n();fn();Tn();yn();bn();In();cl={["account"]:cn,["dappConfig"]:_i,["loginInfo"]:mn,["modals"]:ln,["networkConfig"]:gn,["signedMessageInfo"]:hn,["toasts"]:xn,["transactionsInfo"]:Sn,["transactions"]:vn,["batchTransactions"]:An},pl=(e={})=>(0,fi.combineReducers)(u(u({},cl),e)),Me=pl});var yi={};_e(yi,{default:()=>Il,sessionStorageReducers:()=>Bt});function Te(e,o=[]){return{key:e,version:1,storage:Ti.default,blacklist:o}}var q,hi,Ti,ml,Eo,dl,ll,_l,ul,gl,fl,hl,Tl,xl,yl,xi,Sl,Bt,bl,wl,vl,Il,Si=h(()=>{"use strict";n();q=require("redux-persist"),hi=S(require("redux-persist/lib/storage")),Ti=S(require("redux-persist/lib/storage/session"));Pn();L();pn();kn();dn();_n();fn();Tn();yn();bn();In();Ut();ml={persistReducersStorageType:"localStorage"},Eo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},dl=Te(Eo["account"]),ll=Te(Eo["loginInfo"]),_l=Te(Eo["modals"]),ul=Te(Eo["networkConfig"]),gl={2:e=>w(u({},e),{networkConfig:At})};fl=Te("sdk-dapp-transactionsInfo"),hl=Te("sdk-dapp-transactions",["transactionsToSign"]),Tl=Te("sdk-dapp-batchTransactions",["batchTransactions"]),xl=Te("sdk-dapp-toasts"),yl=Te("sdk-dapp-signedMessageInfo"),xi={key:"sdk-dapp-store",version:2,storage:hi.default,whitelist:Object.keys(Eo),migrate:(0,q.createMigrate)(gl,{debug:!1})},Sl=w(u({},xi),{whitelist:[]}),Bt={["toasts"]:(0,q.persistReducer)(xl,xn),["transactions"]:(0,q.persistReducer)(hl,vn),["transactionsInfo"]:(0,q.persistReducer)(fl,Sn),["batchTransactions"]:(0,q.persistReducer)(Tl,An),["signedMessageInfo"]:(0,q.persistReducer)(yl,hn)},bl=w(u({},Bt),{["account"]:(0,q.persistReducer)(dl,cn),["loginInfo"]:(0,q.persistReducer)(ll,mn),["modals"]:(0,q.persistReducer)(_l,ln),["networkConfig"]:(0,q.persistReducer)(ul,gn)}),wl=ml.persistReducersStorageType==="localStorage",vl=wl?(0,q.persistReducer)(xi,Me(Bt)):(0,q.persistReducer)(Sl,Me(bl)),Il=vl});var bi={};_e(bi,{default:()=>Al});var Al,wi=h(()=>{"use strict";n();Pn();Al=Me()});var vi={};_e(vi,{default:()=>Ll});var Y,kl,Ll,Ii=h(()=>{"use strict";n();Y=require("redux-persist"),kl=[Y.FLUSH,Y.REHYDRATE,Y.PAUSE,Y.PERSIST,Y.PURGE,Y.REGISTER],Ll=kl});var Li={};_e(Li,{default:()=>ki});function ki(e){return(0,Ai.persistStore)(e)}var Ai,Ei=h(()=>{"use strict";n();Ai=require("redux-persist")});var Es=y((UD,Ls)=>{n();var fu=typeof a=="object"&&a&&a.Object===Object&&a;Ls.exports=fu});var Oo=y((BD,Ps)=>{n();var hu=Es(),Tu=typeof self=="object"&&self&&self.Object===Object&&self,xu=hu||Tu||Function("return this")();Ps.exports=xu});var nr=y((WD,Cs)=>{n();var yu=Oo(),Su=yu.Symbol;Cs.exports=Su});var Ms=y((GD,Ds)=>{n();var Ns=nr(),Rs=Object.prototype,bu=Rs.hasOwnProperty,wu=Rs.toString,Fo=Ns?Ns.toStringTag:void 0;function vu(e){var o=bu.call(e,Fo),t=e[Fo];try{e[Fo]=void 0;var s=!0}catch(p){}var c=wu.call(e);return s&&(o?e[Fo]=t:delete e[Fo]),c}Ds.exports=vu});var Fs=y((HD,Os)=>{n();var Iu=Object.prototype,Au=Iu.toString;function ku(e){return Au.call(e)}Os.exports=ku});var tr=y((VD,Ws)=>{n();var Us=nr(),Lu=Ms(),Eu=Fs(),Pu="[object Null]",Cu="[object Undefined]",Bs=Us?Us.toStringTag:void 0;function Nu(e){return e==null?e===void 0?Cu:Pu:Bs&&Bs in Object(e)?Lu(e):Eu(e)}Ws.exports=Nu});var Hs=y(($D,Gs)=>{n();var Ru=Array.isArray;Gs.exports=Ru});var $s=y((qD,Vs)=>{n();function Du(e){return e!=null&&typeof e=="object"}Vs.exports=Du});var js=y((jD,qs)=>{n();var Mu=tr(),Ou=Hs(),Fu=$s(),Uu="[object String]";function Bu(e){return typeof e=="string"||!Ou(e)&&Fu(e)&&Mu(e)==Uu}qs.exports=Bu});var jn=y((G3,oc)=>{n();function ig(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}oc.exports=ig});var tc=y((H3,nc)=>{n();var sg=tr(),cg=jn(),pg="[object AsyncFunction]",mg="[object Function]",dg="[object GeneratorFunction]",lg="[object Proxy]";function _g(e){if(!cg(e))return!1;var o=sg(e);return o==mg||o==dg||o==pg||o==lg}nc.exports=_g});var ac=y((V3,rc)=>{n();var ug=Oo(),gg=ug["__core-js_shared__"];rc.exports=gg});var cc=y(($3,sc)=>{n();var cr=ac(),ic=function(){var e=/[^.]+$/.exec(cr&&cr.keys&&cr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function fg(e){return!!ic&&ic in e}sc.exports=fg});var mc=y((q3,pc)=>{n();var hg=Function.prototype,Tg=hg.toString;function xg(e){if(e!=null){try{return Tg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}pc.exports=xg});var lc=y((j3,dc)=>{n();var yg=tc(),Sg=cc(),bg=jn(),wg=mc(),vg=/[\\^$.*+?()[\]{}|]/g,Ig=/^\[object .+?Constructor\]$/,Ag=Function.prototype,kg=Object.prototype,Lg=Ag.toString,Eg=kg.hasOwnProperty,Pg=RegExp("^"+Lg.call(Eg).replace(vg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Cg(e){if(!bg(e)||Sg(e))return!1;var o=yg(e)?Pg:Ig;return o.test(wg(e))}dc.exports=Cg});var uc=y((z3,_c)=>{n();function Ng(e,o){return e==null?void 0:e[o]}_c.exports=Ng});var zn=y((K3,gc)=>{n();var Rg=lc(),Dg=uc();function Mg(e,o){var t=Dg(e,o);return Rg(t)?t:void 0}gc.exports=Mg});var Wo=y((X3,fc)=>{n();var Og=zn(),Fg=Og(Object,"create");fc.exports=Fg});var xc=y((Y3,Tc)=>{n();var hc=Wo();function Ug(){this.__data__=hc?hc(null):{},this.size=0}Tc.exports=Ug});var Sc=y((J3,yc)=>{n();function Bg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}yc.exports=Bg});var wc=y((Z3,bc)=>{n();var Wg=Wo(),Gg="__lodash_hash_undefined__",Hg=Object.prototype,Vg=Hg.hasOwnProperty;function $g(e){var o=this.__data__;if(Wg){var t=o[e];return t===Gg?void 0:t}return Vg.call(o,e)?o[e]:void 0}bc.exports=$g});var Ic=y((Q3,vc)=>{n();var qg=Wo(),jg=Object.prototype,zg=jg.hasOwnProperty;function Kg(e){var o=this.__data__;return qg?o[e]!==void 0:zg.call(o,e)}vc.exports=Kg});var kc=y((eM,Ac)=>{n();var Xg=Wo(),Yg="__lodash_hash_undefined__";function Jg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Xg&&o===void 0?Yg:o,this}Ac.exports=Jg});var Ec=y((oM,Lc)=>{n();var Zg=xc(),Qg=Sc(),ef=wc(),of=Ic(),nf=kc();function go(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}go.prototype.clear=Zg;go.prototype.delete=Qg;go.prototype.get=ef;go.prototype.has=of;go.prototype.set=nf;Lc.exports=go});var Cc=y((nM,Pc)=>{n();function tf(){this.__data__=[],this.size=0}Pc.exports=tf});var Rc=y((tM,Nc)=>{n();function rf(e,o){return e===o||e!==e&&o!==o}Nc.exports=rf});var Go=y((rM,Dc)=>{n();var af=Rc();function sf(e,o){for(var t=e.length;t--;)if(af(e[t][0],o))return t;return-1}Dc.exports=sf});var Oc=y((aM,Mc)=>{n();var cf=Go(),pf=Array.prototype,mf=pf.splice;function df(e){var o=this.__data__,t=cf(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():mf.call(o,t,1),--this.size,!0}Mc.exports=df});var Uc=y((iM,Fc)=>{n();var lf=Go();function _f(e){var o=this.__data__,t=lf(o,e);return t<0?void 0:o[t][1]}Fc.exports=_f});var Wc=y((sM,Bc)=>{n();var uf=Go();function gf(e){return uf(this.__data__,e)>-1}Bc.exports=gf});var Hc=y((cM,Gc)=>{n();var ff=Go();function hf(e,o){var t=this.__data__,s=ff(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Gc.exports=hf});var $c=y((pM,Vc)=>{n();var Tf=Cc(),xf=Oc(),yf=Uc(),Sf=Wc(),bf=Hc();function fo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}fo.prototype.clear=Tf;fo.prototype.delete=xf;fo.prototype.get=yf;fo.prototype.has=Sf;fo.prototype.set=bf;Vc.exports=fo});var jc=y((mM,qc)=>{n();var wf=zn(),vf=Oo(),If=wf(vf,"Map");qc.exports=If});var Xc=y((dM,Kc)=>{n();var zc=Ec(),Af=$c(),kf=jc();function Lf(){this.size=0,this.__data__={hash:new zc,map:new(kf||Af),string:new zc}}Kc.exports=Lf});var Jc=y((lM,Yc)=>{n();function Ef(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Yc.exports=Ef});var Ho=y((_M,Zc)=>{n();var Pf=Jc();function Cf(e,o){var t=e.__data__;return Pf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Zc.exports=Cf});var ep=y((uM,Qc)=>{n();var Nf=Ho();function Rf(e){var o=Nf(this,e).delete(e);return this.size-=o?1:0,o}Qc.exports=Rf});var np=y((gM,op)=>{n();var Df=Ho();function Mf(e){return Df(this,e).get(e)}op.exports=Mf});var rp=y((fM,tp)=>{n();var Of=Ho();function Ff(e){return Of(this,e).has(e)}tp.exports=Ff});var ip=y((hM,ap)=>{n();var Uf=Ho();function Bf(e,o){var t=Uf(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}ap.exports=Bf});var cp=y((TM,sp)=>{n();var Wf=Xc(),Gf=ep(),Hf=np(),Vf=rp(),$f=ip();function ho(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}ho.prototype.clear=Wf;ho.prototype.delete=Gf;ho.prototype.get=Hf;ho.prototype.has=Vf;ho.prototype.set=$f;sp.exports=ho});var mp=y((xM,pp)=>{n();var qf="__lodash_hash_undefined__";function jf(e){return this.__data__.set(e,qf),this}pp.exports=jf});var lp=y((yM,dp)=>{n();function zf(e){return this.__data__.has(e)}dp.exports=zf});var up=y((SM,_p)=>{n();var Kf=cp(),Xf=mp(),Yf=lp();function Kn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Kf;++o<t;)this.add(e[o])}Kn.prototype.add=Kn.prototype.push=Xf;Kn.prototype.has=Yf;_p.exports=Kn});var fp=y((bM,gp)=>{n();function Jf(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}gp.exports=Jf});var Tp=y((wM,hp)=>{n();function Zf(e){return e!==e}hp.exports=Zf});var yp=y((vM,xp)=>{n();function Qf(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}xp.exports=Qf});var bp=y((IM,Sp)=>{n();var eh=fp(),oh=Tp(),nh=yp();function th(e,o,t){return o===o?nh(e,o,t):eh(e,oh,t)}Sp.exports=th});var vp=y((AM,wp)=>{n();var rh=bp();function ah(e,o){var t=e==null?0:e.length;return!!t&&rh(e,o,0)>-1}wp.exports=ah});var Ap=y((kM,Ip)=>{n();function ih(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}Ip.exports=ih});var Lp=y((LM,kp)=>{n();function sh(e,o){return e.has(o)}kp.exports=sh});var Pp=y((EM,Ep)=>{n();var ch=zn(),ph=Oo(),mh=ch(ph,"Set");Ep.exports=mh});var Np=y((PM,Cp)=>{n();function dh(){}Cp.exports=dh});var pr=y((CM,Rp)=>{n();function lh(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Rp.exports=lh});var Mp=y((NM,Dp)=>{n();var mr=Pp(),_h=Np(),uh=pr(),gh=1/0,fh=mr&&1/uh(new mr([,-0]))[1]==gh?function(e){return new mr(e)}:_h;Dp.exports=fh});var Fp=y((RM,Op)=>{n();var hh=up(),Th=vp(),xh=Ap(),yh=Lp(),Sh=Mp(),bh=pr(),wh=200;function vh(e,o,t){var s=-1,c=Th,p=e.length,m=!0,d=[],_=d;if(t)m=!1,c=xh;else if(p>=wh){var g=o?null:Sh(e);if(g)return bh(g);m=!1,c=yh,_=new hh}else _=o?[]:d;e:for(;++s<p;){var b=e[s],T=o?o(b):b;if(b=t||b!==0?b:0,m&&T===T){for(var k=_.length;k--;)if(_[k]===T)continue e;o&&_.push(T),d.push(b)}else c(_,T,t)||(_!==d&&_.push(T),d.push(b))}return d}Op.exports=vh});var Bp=y((DM,Up)=>{n();var Ih=Fp();function Ah(e){return e&&e.length?Ih(e):[]}Up.exports=Ah});var _r={};_e(_r,{css:()=>Zp,default:()=>pT});var Zp,pT,ur=h(()=>{"use strict";n();Zp=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zp));pT={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ye={};_e(ye,{css:()=>om,default:()=>lT});var om,lT,Se=h(()=>{"use strict";n();om=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(om));lT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var MT={};_e(MT,{LogoutListener:()=>DT});module.exports=ne(MT);n();n();n();var gm=require("react");n();n();n();var Mi=require("react"),co=require("react-redux");n();var Wt=require("@reduxjs/toolkit"),Ri=require("react-redux/lib/utils/Subscription");L();n();var ui=S(require("lodash.throttle"));A();L();vt();eo();Re();var al=[nn],Ln=!1,il=(0,ui.default)(()=>{Io(vo())},5e3),gi=e=>o=>t=>{if(al.includes(t.type))return o(t);let s=e.getState(),c=pe.local.getItem(j.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return Io(vo());let m=Date.now();return c-m<0&&!Ln?setTimeout(()=>{Ln=!0,e.dispatch(Ca())},1e3):(Ln&&(Ln=!1),il()),o(t)};n();n();function En(){return typeof sessionStorage!="undefined"}var Pi=En()?(Si(),ne(yi)).default:(wi(),ne(bi)).default,Ci=En()?(Ii(),ne(vi)).default:[],Ni=En()?(Ei(),ne(Li)).default:e=>e;Pn();var v=(0,Wt.configureStore)({reducer:Pi,middleware:e=>e({serializableCheck:{ignoredActions:[...Ci,wt.type,sn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(gi)}),Di=(0,Ri.createSubscription)(v),Gb=Ni(v),Hb=(0,Wt.configureStore)({reducer:Me});var El={store:v,subscription:Di},Gt=(0,Mi.createContext)(El),jb=(0,co.createStoreHook)(Gt),G=(0,co.createDispatchHook)(Gt),I=(0,co.createSelectorHook)(Gt);n();n();L();n();var Oi=S(require("lodash.isequal")),Cn=require("reselect"),x=(0,Cn.createSelectorCreator)(Cn.defaultMemoize,Oi.default);var me=e=>e.account,Ae=x(me,e=>e.address),po=x(me,Ae,(e,o)=>o in e.accounts?e.accounts[o]:an),Fi=x(me,po,(e,o)=>{let c=e,{accounts:t}=c,s=be(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),Jb=x(po,e=>e.balance),Pl=x(po,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Zb=x(me,e=>e.shard),Cl=x(me,e=>e.ledgerAccount),Qb=x(me,e=>e.walletConnectAccount),e0=x(me,e=>e.isAccountLoading),o0=x(me,e=>e.accountLoadingError),Nl=x(me,e=>e.websocketEvent),Rl=x(me,e=>e.websocketBatchEvent);n();var Ui=e=>e.dappConfig,r0=x(Ui,e=>e.shouldUseWebViewProvider);n();var F=e=>e.loginInfo,Dl=x(F,e=>e.loginMethod),Po=x(F,Ae,(e,o)=>Boolean(o)),c0=x(F,e=>e.walletConnectLogin),Ml=x(F,e=>e.ledgerLogin),Bi=x(F,e=>e.walletLogin),p0=x(F,e=>e.isLoginSessionInvalid),Ht=x(F,e=>e.tokenLogin),mo=x(F,e=>e.logoutRoute),Ol=x(F,e=>e.isWalletConnectV2Initialized);n();var Wi=e=>e.modals,l0=x(Wi,e=>e.txSubmittedModal),Fl=x(Wi,e=>e.notificationModal);n();var de=e=>e.networkConfig,Nn=x(de,e=>e.network.chainId),Ul=x(de,e=>e.network.roundDuration),g0=x(de,e=>e.network.walletConnectBridgeAddress),Bl=x(de,e=>e.network.walletConnectV2RelayAddress),Wl=x(de,e=>e.network.walletConnectV2ProjectId),Gl=x(de,e=>e.network.walletConnectV2Options),Hl=x(de,e=>e.network.walletConnectDeepLink),K=x(de,e=>e.network),Gi=x(K,e=>e.apiAddress),Hi=x(K,e=>e.explorerAddress),Vi=x(K,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Vl=x(K,e=>e.xAliasAddress),$i=x(K,e=>e.egldLabel);n();var Rn=e=>e.signedMessageInfo,T0=x(Rn,e=>e.isSigning),x0=x(Rn,e=>e.errorMessage),y0=x(Rn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),S0=x(Rn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var qi=e=>e.toasts,$l=x(qi,e=>e.customToasts),ji=x(qi,e=>e.transactionToasts);n();L();var zi={errorMessage:Pt,successMessage:Ct,processingMessage:Nt},Ki=e=>e.transactionsInfo,ql=x(Ki,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||zi);n();n();var le=require("@multiversx/sdk-core");A();n();var Vt=require("@multiversx/sdk-core/out");n();n();function Dn(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function Oe(e){return Dn(e)?atob(e):e}n();n();n();n();var Xi=e=>{let o=e!=null?e:"";return Dn(o)?Vt.TransactionPayload.fromEncoded(o):new Vt.TransactionPayload(o)};n();A();var Co=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(lt).some(t=>e.startsWith(t)):!1;function Mn(e){var s,c,p;let o=u({},e);Co({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new le.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Xi(o.data),nonce:o.nonce.valueOf(),receiver:new le.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new le.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:en,gasPrice:(c=o.gasPrice.valueOf())!=null?c:on,chainID:o.chainID.valueOf(),version:new le.TransactionVersion((p=o.version)!=null?p:ga)}),o.options?{options:new le.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new le.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();n();var Xl=require("@multiversx/sdk-core/out");n();A();n();var Ji=require("@multiversx/sdk-core");M();n();var Yi=require("@multiversx/sdk-core");function Yl(e){try{let o=new Yi.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function No(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Yl(e)}n();n();n();var Jl=require("@multiversx/sdk-core"),Zl=S(require("bignumber.js"));E();n();n();n();var $t="blocks";n();n();n();n();$();n();n();$();n();n();n();var i_=S(require("bignumber.js"));A();n();var a_=require("@multiversx/sdk-core"),jt=S(require("bignumber.js"));A();n();var t_=S(require("bignumber.js"));n();jt.default.config({ROUNDING_MODE:jt.default.ROUND_FLOOR});n();n();n();A();n();n();n();n();A();n();A();n();var s_=require("@multiversx/sdk-core");A();n();var Do=require("@multiversx/sdk-core"),m_=S(require("bignumber.js"));A();n();n();var c_=S(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();n();A();n();$();var l_=["reDelegateRewards","claimRewards","unBond"],__=["wrapEgld","unwrapEgld"],u_=["unStake"],g_=["unDelegate"];n();n();n();A();n();var x_=S(require("bignumber.js"));n();n();$();n();var S_=S(require("bignumber.js"));n();n();n();n();var v_=S(require("bignumber.js"));M();n();n();n();n();E();n();var L_=require("@multiversx/sdk-web-wallet-provider");A();n();var A_=S(require("qs"));n();W();oo();n();oo();var nk={search:De()?window.location.search:"",removeParams:[]};n();n();n();B();n();$();n();n();B();n();var E_=S(require("linkifyjs"));n();A();n();var P_=S(require("bignumber.js"));n();M();n();n();E();n();E();n();n();n();$();n();$();n();var C_=S(require("bignumber.js"));A();$();n();$();n();var ts=require("react");M();n();n();$();n();n();var N_=require("@multiversx/sdk-core/out"),R_=S(require("bignumber.js"));$();n();M();n();n();M();var zL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var rs=require("react");M();B();n();var M_=require("react");$();var o1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];so();n();var Un=e=>e.transactions,lo=x(Un,e=>e.signedTransactions),O_=x(Un,e=>e.signTransactionsError),as=x(Un,e=>e.signTransactionsCancelMessage),Bn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),is=x(lo,Bn(ro)),ss=x(lo,Bn(ao)),cs=x(lo,Bn(io)),F_=x(lo,Bn(Dt)),ps=x(Un,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Mn(t)))||[]})}),U_=x(lo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var ms=require("react");n();L();n();n();n();n();n();n();n();n();var ls=require("@multiversx/sdk-extension-provider"),_s=require("@multiversx/sdk-hw-provider"),us=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),gs=require("@multiversx/sdk-opera-provider"),fs=require("@multiversx/sdk-passkey-provider/out"),hs=require("@multiversx/sdk-web-wallet-provider");A();ve();n();var Fe=require("@multiversx/sdk-web-wallet-iframe-provider/out"),ds=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");E();n();var Yt=_o;var ke=e=>{switch(e==null?void 0:e.constructor){case hs.WalletProvider:return"wallet";case Yt:return"walletconnectv2";case _s.HWProvider:return"ledger";case ls.ExtensionProvider:return"extension";case fs.PasskeyProvider:return"passkey";case us.MetamaskProvider:return"metamask";case gs.OperaProvider:return"opera";case we.CrossWindowProvider:return"crossWindow";case Fe.IframeProvider:return"iframe";case _o:return"";default:return"extra"}};var ee=e=>`Unable to perform ${e}, Provider not initialized`,_o=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ee("getAccount"))}setAccount(o){throw new Error(ee(`setAccount: ${o}`))}login(o){throw new Error(ee(`login with options: ${o}`))}logout(o){throw new Error(ee(`logout with options: ${o}`))}getAddress(){throw new Error(ee("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(ee(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(ee(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(ee(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(ee(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(ee(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(ee(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Wn=new _o;var B_=Wn;function J(){return B_||Wn}L();n();n();n();n();n();var Ts=require("@lifeomic/axios-fetch"),Jt=S(require("axios")),Zt=(0,Ts.buildAxiosFetch)(Jt.default),Qt=(e,o)=>f(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function W_(e,o,t){return f(this,null,function*(){try{let s=yield Zt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Qt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function G_(e,o){return f(this,null,function*(){try{let t=yield Zt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Qt(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function H_(e,o,t){return f(this,null,function*(){try{let s=yield Zt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Qt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var uo=Jt.default.create();uo.get=G_;uo.post=W_;uo.patch=H_;n();n();var V_=S(require("axios"));n();var $_=S(require("swr"));n();E();n();n();function xs(){let e=J();return ke(e)}function Ue(e){return xs()===e}n();B();var ys=()=>{let{search:e}=P(),o=new URLSearchParams(e),t=Object.fromEntries(o),s=t==null?void 0:t.address;return No(s)?s:null};function Gn(){let e=v.getState(),o=J(),t=Ae(e),s=Po(e),c=Bi(e);if(!o)throw"provider not initialized";return Ue("ledger")&&s?new Promise(p=>{p(t)}):!Ue("")&&!Ue("wallet")&&!Ue("extra")?o.getAddress():new Promise(p=>{let m=ys();c!=null&&m&&p(m),s&&p(t),p("")})}n();so();n();n();n();var q_=S(require("axios"));n();var z_=S(require("axios"));Je();n();A();n();var K_=S(require("axios"));n();var Y_=S(require("axios"));n();n();var J_=S(require("axios"));n();var Z_=S(require("axios"));n();n();L();E();n();n();n();n();B();var bs=()=>{let{search:e}=P(),o=new URLSearchParams(e),t=Object.fromEntries(o);return t==null?void 0:t.accessToken};var $n=()=>{var t;let e=bs(),o=F(v.getState());return e!=null?e:(t=o.webviewLogin)==null?void 0:t.data};n();R();M();n();L();n();var ws=require("@multiversx/sdk-core");M();W();n();so();n();L();E();n();L();M();n();n();n();M();n();Qo();n();n();n();n();var nu=S(require("swr"));n();n();n();n();var vs=require("react");n();n();var tu=require("react"),ru=require("@multiversx/sdk-web-wallet-provider"),au=require("@multiversx/sdk-web-wallet-provider"),iu=S(require("qs"));A();L();E();ut();B();var FR=P();n();var ec=require("react"),sr=require("@multiversx/sdk-core");n();A();It();n();n();n();n();n();n();n();n();n();n();Je();n();var mu=S(require("axios"));n();var lu=S(require("axios"));n();Je();n();Je();n();n();n();n();var uu=require("@multiversx/sdk-opera-provider");n();var gu=require("@multiversx/sdk-extension-provider");n();ve();n();n();n();n();var zs=S(js());var Uo=e=>{if(!e||!(0,zs.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,s,c,p]=o,m=JSON.parse(Oe(p)),d=Oe(t);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:s}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var Vu=require("@multiversx/sdk-native-auth-client");n();var Ys=S(require("axios"));n();n();n();function Ks(e){return f(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Xs=(e,o,t,s=0)=>f(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield Ks(o.delay)),yield Xs(e,o,t,s+1)):null}}),rr=(e,o={retries:5,delay:500})=>(...t)=>f(void 0,null,function*(){return yield Xs(e,o,t)});var Wu=4;var r2=rr((e,o,t)=>f(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield Ys.default.get(`${e}/${$t}?from=${Wu}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();tn();n();function Gu(e){return Object.prototype.toString.call(e)==="[object String]"}var ar=e=>{var t;if(!e||!Gu(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[s,c,p]=o,m=Oe(s),d=Oe(c),_=Uo(d);if(!_)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let g=w(u({},_),{address:m,body:d,signature:p});return(t=_.extraInfo)!=null&&t.timestamp||delete g.extraInfo,g}catch(s){return null}};var ir={isExpired:!1},Bo=e=>{if(!e)return ir;let o=ar(e);if(!o)return ir;let t=Qe(),{ttl:s,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return ir;let m=p+s,d=t>m,_=m-t;return{isExpired:d,expiresAt:m,secondsUntilExpires:_}};n();B();var u2={origin:P().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var qu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var ju=require("@multiversx/sdk-passkey-provider/out");A();B();n();n();n();var og=require("react"),ng=require("@multiversx/sdk-hw-provider");n();R();M();n();function Js(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(t){}}}function Zs(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=Yu(e.path,e.caseSensitive,e.end),c=o.match(t);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),d=c.slice(1);return{params:s.reduce((g,b,T)=>{if(b==="*"){let k=d[T]||"";m=p.slice(0,p.length-k.length).replace(/(.)\/+$/,"$1")}return g[b]=Ju(d[T]||"",b),g},{}),pathname:p,pathnameBase:m,pattern:e}}function Yu(e,o=!1,t=!0){Js(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(s.push(d),"([^\\/]+)"));return e.endsWith("*")?(s.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=t?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),s]}function Ju(e,o){try{return decodeURIComponent(e)}catch(t){return Js(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}Ao();eo();Re();W();var Qs=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&un({url:e})},Zu=e=>{let o=pe.local.getItem(j.logoutEvent),{data:t}=o?JSON.parse(o):{data:e};e===t&&(pe.local.setItem({key:j.logoutEvent,data:e,expires:0}),pe.local.removeItem(j.logoutEvent))},Qu=500;function Be(c,p){return f(this,arguments,function*(e,o,t=Boolean($n()),s={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var H;let m="",d=J(),_=ke(d),g=_==="wallet",b=((H=d==null?void 0:d.isInitialized)==null?void 0:H.call(d))===!0;if(t&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(s.shouldBroadcastLogoutAcrossTabs)try{m=yield Gn(),Zu(m)}catch(oe){console.error("error fetching logout address",oe)}let T=no(e),k=P(),N=new URL(decodeURIComponent(T)).pathname;if((Zs(k.pathname,N)||g&&b)&&Wa(),!m&&!b)return Qs({callbackUrl:T,onRedirect:o});try{if(v.dispatch(C()),g)return setTimeout(()=>{d.logout({callbackUrl:T})},Qu);s.hasConsentPopup&&_==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:T})}catch(oe){console.error("Logging out error:",oe)}finally{g||Qs({callbackUrl:T,onRedirect:o})}})}n();n();var Vp=require("react"),$p=require("@multiversx/sdk-core"),$h=require("@multiversx/sdk-extension-provider"),qh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),jh=require("@multiversx/sdk-passkey-provider/out"),zh=S(Bp());A();n();n();n();var Ge=()=>I(Fi);n();n();n();n();n();n();n();var Vo=S(require("react"));var YM=(0,Vo.createContext)({}),JM=v.getState();n();var Gp=S(require("react"));n();var dr=S(require("react")),kh=S(require("axios"));n();n();ve();n();n();var Rh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Dh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");R();n();R();L();M();n();n();L();n();W();n();L();M();n();n();var Eh=require("@multiversx/sdk-core"),Ph=S(require("bignumber.js"));A();n();var Ch=S(require("bignumber.js"));A();L();E();W();B();n();var Hp=require("react"),Uh=require("@multiversx/sdk-extension-provider"),Bh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Wh=require("@multiversx/sdk-passkey-provider/out");ve();L();n();L();M();Ao();B();n();se();L();n();n();var Xh=require("react");n();n();E();so();n();var qp=require("react");n();n();var Jh=require("react"),Zh=require("@multiversx/sdk-extension-provider");se();R();E();n();he();W();W();n();n();ve();M();n();var Yh=require("react"),jp=require("@multiversx/sdk-core");L();n();var Qh=require("react"),eT=require("@multiversx/sdk-opera-provider");se();R();E();he();W();B();n();var oT=require("react");ft();se();ve();R();L();E();he();B();n();var cT=require("react");se();L();n();n();ht();n();n();var nT=S(require("platform"));oo();n();n();n();n();n();n();n();wo();E();n();n();var tT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Ao();eo();n();n();n();L();var rT={},aT={};var zp=e=>{if(e.component!=null){let o=e,{component:t,onClose:s}=o,c=be(o,["component","onClose"]),p=v.dispatch(Lt(w(u({},c),{component:null,onClose:void 0})));return rT[p==null?void 0:p.payload.toastId]=t,s&&(aT[p==null?void 0:p.payload.toastId]=s),p==null?void 0:p.payload}return v.dispatch(Lt(e)).payload};n();n();var iT=S(require("axios"));W();n();n();var sT=S(jn());wo();var Kp,Xp,Yp,WB=(Yp=(Xp=(Kp=Q.safeWindow)==null?void 0:Kp.location)==null?void 0:Xp.origin)==null?void 0:Yp.includes("localhost");n();B();n();n();var xT=require("react");A();n();n();A();n();n();n();var qe=S(require("bignumber.js")),lr=e=>{let o=new qe.default(e).dividedBy(1e3).integerValue(qe.default.ROUND_FLOOR),t=new qe.default(o).dividedBy(60).integerValue(qe.default.ROUND_FLOOR),s=new qe.default(t).dividedBy(60).integerValue(qe.default.ROUND_FLOOR),c=s.modulo(60).isGreaterThan(1),p=t.modulo(60).isGreaterThan(1),m=t.modulo(60).isLessThan(1);return c?`${s} hours`:p?`${t} minutes`:m?"less than 1 minute":`${t} minute`};n();n();n();var Ee=S(require("react")),sm=require("react"),cm=require("react"),yr=S(require("classnames")),pm=require("react-dom");A();n();var em=S(require("react"));n();var qo=S(require("react"));n();oo();var Jp=()=>!De();var mT=()=>f(void 0,null,function*(){return yield Promise.resolve().then(()=>(ur(),_r))}),dT=()=>(ur(),ne(_r)).default,gr=Jp();function Qp({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=qo.default.useState(gr?void 0:dT()),[p,m]=qo.default.useState(gr||t==null?void 0:t()),d=()=>f(this,null,function*(){(e?e():mT()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,qo.useEffect)(()=>{gr&&d()},[]),{globalStyles:s,styles:p}}function Le(e,o){return t=>{let{globalStyles:s,styles:c}=Qp({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return em.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();var nm=S(require("react")),tm=S(require("classnames"));var _T=({className:e,children:o,styles:t})=>nm.default.createElement("div",{className:(0,tm.default)(t==null?void 0:t.dappModalBody,e)},o),fr=Le(_T,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),ne(ye)).default});n();var hr=S(require("react")),rm=S(require("classnames"));var uT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?hr.default.createElement("div",{className:(0,rm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:hr.default.createElement("div",null,s)):null,Tr=Le(uT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),ne(ye)).default});n();var yo=S(require("react")),am=require("@fortawesome/free-solid-svg-icons"),im=require("@fortawesome/react-fontawesome"),jo=S(require("classnames"));var gT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>e?t?yo.default.createElement("div",{className:(0,jo.default)(_==null?void 0:_.dappModalHeader,s)},t):yo.default.createElement("div",{className:(0,jo.default)(_==null?void 0:_.dappModalHeader,s)},yo.default.createElement("div",{className:(0,jo.default)(_==null?void 0:_.dappModalHeaderText,p)},o),yo.default.createElement("button",{onClick:m,className:(0,jo.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},yo.default.createElement(im.FontAwesomeIcon,{size:"lg",icon:am.faTimes}))):null,xr=Le(gT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),ne(ye)).default});var fT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},hT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=fT,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:g})=>{let[b,T]=(0,sm.useState)(!1);if((0,cm.useEffect)(()=>{T(!0)},[]),!_)return null;let{showHeader:k,showFooter:N,headerText:H,footerText:oe,modalDialogClassName:zo="dapp-modal-dialog",modalContentClassName:Jn="dapp-modal-dialog-content",modalHeaderClassName:Zn="dapp-modal-dialog-header",modalHeaderTextClassName:Qn="dapp-modal-dialog-header-text",modalCloseButtonClassName:Z="dapp-modal-dialog-close-button",modalBodyClassName:Sm="dapp-modal-dialog-content-body",modalFooterClassName:bm="dapp-modal-dialog-footer",customModalHeader:wm,customModalFooter:vm}=c,Im=Am=>{Am.key==="Escape"&&s&&(m==null||m())};return Ee.default.createElement(Ee.default.Fragment,null,b&&(0,pm.createPortal)(Ee.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,yr.default)(zo,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:Im},Ee.default.createElement("div",{className:(0,yr.default)(g==null?void 0:g.dappModalContent,Jn)},Ee.default.createElement(xr,{visible:k,headerText:H,customHeader:wm,className:Zn,headerTextClassName:Qn,closeButtonClassName:Z,onHide:m}),Ee.default.createElement(fr,{className:Sm},o),Ee.default.createElement(Tr,{visible:N,customFooter:vm,footerText:oe,className:bm}))),d!=null?d:document==null?void 0:document.body))},TT=Le(hT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),ne(ye)).default});n();n();var mm=require("react");n();n();var dm=require("react"),ST=require("@multiversx/sdk-hw-provider");se();R();L();E();he();n();var yT=require("react");n();n();var Sr=require("react");R();L();E();he();B();n();var wT=require("react"),vT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");se();R();E();he();W();W();n();var IT=require("react"),AT=require("@multiversx/sdk-passkey-provider/out");se();R();E();he();W();W();n();n();var lm=require("react");n();var ET=require("react");n();var br=require("react"),LT=require("socket.io-client");L();n();n();n();var PT=require("react");M();n();n();n();var NT=S(require("swr"));n();n();n();n();var CT=S(require("axios"));n();Re();var{logoutEvent:RT}=j,um="storage",fm=()=>{let{address:e}=Ge(),o=I(mo);(0,gm.useEffect)(()=>{let t=s=>{if(!(s.key!==RT||!s.newValue))try{let{data:c}=JSON.parse(s.newValue);c===e&&Be(o)}catch(c){return}};return window==null||window.addEventListener(um,t),()=>{window==null||window.removeEventListener(um,t)}},[e,o])};n();n();var Yn=require("react"),hm=require("@fortawesome/free-solid-svg-icons"),wr=S(require("bignumber.js"));var Tm=()=>{let{address:e}=Ge(),{tokenLogin:o}=I(F),{secondsUntilExpires:t,expiresAt:s}=Bo(o==null?void 0:o.nativeAuthToken),c=(0,Yn.useRef)();return(0,Yn.useEffect)(()=>{var d;let p=new wr.default(String(t)),m=p.times(1e3);if(!(!t||p.isLessThanOrEqualTo(0))){if((d=o==null?void 0:o.nativeAuthConfig)!=null&&d.tokenExpirationToastWarningSeconds){clearTimeout(c.current);let g=new wr.default(o.nativeAuthConfig.tokenExpirationToastWarningSeconds).times(1e3),b=p.times(1e3).minus(g),T=lr(m.toNumber()),k=b.isLessThanOrEqualTo(0)?0:b.toNumber();c.current=setTimeout(()=>{zp({toastId:"nativeAuthTokenExpiration",type:"custom",title:"Session Expiration Warning",icon:hm.faRefresh,message:`Your token will expire in ${T}!`})},k)}return()=>{clearTimeout(c.current)}}},[s,e,o==null?void 0:o.nativeAuthConfig]),null};n();var So=require("react"),xm=S(require("bignumber.js"));var ym=()=>{let{address:e}=Ge(),{tokenLogin:o}=I(F),t=I(mo),{isExpired:s,secondsUntilExpires:c,expiresAt:p}=Bo(o==null?void 0:o.nativeAuthToken),m=(0,So.useRef)(""),d=(0,So.useRef)();return(0,So.useEffect)(()=>{e&&s&&Be(t)},[s,e,t]),(0,So.useEffect)(()=>{let _=Boolean($n());if(!e||_)return;let g=new xm.default(String(c)),b=`${e}_${p}`,T=m.current===b;if(!(c&&g.isGreaterThan(0))||T)return;m.current=b,clearTimeout(d.current);let N=g.times(1e3);return d.current=setTimeout(()=>{Be(t)},N.toNumber()),()=>{clearTimeout(d.current)}},[p,e,t]),null};var DT=()=>(Tm(),fm(),ym(),null);0&&(module.exports={LogoutListener});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=LogoutListener.js.map
