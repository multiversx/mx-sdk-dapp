"use strict";var _s=Object.create;var Po=Object.defineProperty,ls=Object.defineProperties,gs=Object.getOwnPropertyDescriptor,us=Object.getOwnPropertyDescriptors,fs=Object.getOwnPropertyNames,rn=Object.getOwnPropertySymbols,hs=Object.getPrototypeOf,dt=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable;var Mr=(e,o,n)=>o in e?Po(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,f=(e,o)=>{for(var n in o||(o={}))dt.call(o,n)&&Mr(e,n,o[n]);if(rn)for(var n of rn(o))Or.call(o,n)&&Mr(e,n,o[n]);return e},k=(e,o)=>ls(e,us(o));var an=(e,o)=>{var n={};for(var r in e)dt.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&rn)for(var r of rn(e))o.indexOf(r)<0&&Or.call(e,r)&&(n[r]=e[r]);return n};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var Y=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),ie=(e,o)=>{for(var n in o)Po(e,n,{get:o[n],enumerable:!0})},Br=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of fs(o))!dt.call(e,a)&&a!==n&&Po(e,a,{get:()=>o[a],enumerable:!(r=gs(o,a))||r.enumerable});return e};var b=(e,o,n)=>(n=e!=null?_s(hs(e)):{},Br(o||!e||!e.__esModule?Po(n,"default",{value:e,enumerable:!0}):n,e)),K=e=>Br(Po({},"__esModule",{value:!0}),e);var v=(e,o,n)=>new Promise((r,a)=>{var s=_=>{try{d(n.next(_))}catch(g){a(g)}},m=_=>{try{d(n.throw(_))}catch(g){a(g)}},d=_=>_.done?r(_.value):Promise.resolve(_.value).then(s,m);d((n=n.apply(e,o)).next())});var Wr=Y(cn=>{"use strict";t();cn.byteLength=ys;cn.toByteArray=bs;cn.fromByteArray=vs;var ye=[],ce=[],xs=typeof Uint8Array!="undefined"?Uint8Array:Array,_t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ze=0,Fr=_t.length;ze<Fr;++ze)ye[ze]=_t[ze],ce[_t.charCodeAt(ze)]=ze;var ze,Fr;ce["-".charCodeAt(0)]=62;ce["_".charCodeAt(0)]=63;function Ur(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function ys(e){var o=Ur(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Ts(e,o,n){return(o+n)*3/4-n}function bs(e){var o,n=Ur(e),r=n[0],a=n[1],s=new xs(Ts(e,r,a)),m=0,d=a>0?r-4:r,_;for(_=0;_<d;_+=4)o=ce[e.charCodeAt(_)]<<18|ce[e.charCodeAt(_+1)]<<12|ce[e.charCodeAt(_+2)]<<6|ce[e.charCodeAt(_+3)],s[m++]=o>>16&255,s[m++]=o>>8&255,s[m++]=o&255;return a===2&&(o=ce[e.charCodeAt(_)]<<2|ce[e.charCodeAt(_+1)]>>4,s[m++]=o&255),a===1&&(o=ce[e.charCodeAt(_)]<<10|ce[e.charCodeAt(_+1)]<<4|ce[e.charCodeAt(_+2)]>>2,s[m++]=o>>8&255,s[m++]=o&255),s}function ws(e){return ye[e>>18&63]+ye[e>>12&63]+ye[e>>6&63]+ye[e&63]}function Ss(e,o,n){for(var r,a=[],s=o;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(e[s+2]&255),a.push(ws(r));return a.join("")}function vs(e){for(var o,n=e.length,r=n%3,a=[],s=16383,m=0,d=n-r;m<d;m+=s)a.push(Ss(e,m,m+s>d?d:m+s));return r===1?(o=e[n-1],a.push(ye[o>>2]+ye[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],a.push(ye[o>>10]+ye[o>>4&63]+ye[o<<2&63]+"=")),a.join("")}});var Vr=Y(lt=>{t();lt.read=function(e,o,n,r,a){var s,m,d=a*8-r-1,_=(1<<d)-1,g=_>>1,y=-7,u=n?a-1:0,T=n?-1:1,w=e[o+u];for(u+=T,s=w&(1<<-y)-1,w>>=-y,y+=d;y>0;s=s*256+e[o+u],u+=T,y-=8);for(m=s&(1<<-y)-1,s>>=-y,y+=r;y>0;m=m*256+e[o+u],u+=T,y-=8);if(s===0)s=1-g;else{if(s===_)return m?NaN:(w?-1:1)*(1/0);m=m+Math.pow(2,r),s=s-g}return(w?-1:1)*m*Math.pow(2,s-r)};lt.write=function(e,o,n,r,a,s){var m,d,_,g=s*8-a-1,y=(1<<g)-1,u=y>>1,T=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=r?0:s-1,C=r?1:-1,S=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=y):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+u>=1?o+=T/_:o+=T*Math.pow(2,1-u),o*_>=2&&(m++,_/=2),m+u>=y?(d=0,m=y):m+u>=1?(d=(o*_-1)*Math.pow(2,a),m=m+u):(d=o*Math.pow(2,u-1)*Math.pow(2,a),m=0));a>=8;e[n+w]=d&255,w+=C,d/=256,a-=8);for(m=m<<a|d,g+=a;g>0;e[n+w]=m&255,w+=C,m/=256,g-=8);e[n+w-C]|=S*128}});var ea=Y(so=>{"use strict";t();var gt=Wr(),po=Vr(),$r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;so.Buffer=l;so.SlowBuffer=Ls;so.INSPECT_MAX_BYTES=50;var pn=2147483647;so.kMaxLength=pn;l.TYPED_ARRAY_SUPPORT=Cs();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Cs(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function Ee(e){if(e>pn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return xt(e)}return jr(e,o,n)}l.poolSize=8192;function jr(e,o,n){if(typeof e=="string")return As(e,o);if(ArrayBuffer.isView(e))return Ps(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Te(e,ArrayBuffer)||e&&Te(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Te(e,SharedArrayBuffer)||e&&Te(e.buffer,SharedArrayBuffer)))return ft(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return l.from(r,o,n);var a=Is(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,n){return jr(e,o,n)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function zr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ks(e,o,n){return zr(e),e<=0?Ee(e):o!==void 0?typeof n=="string"?Ee(e).fill(o,n):Ee(e).fill(o):Ee(e)}l.alloc=function(e,o,n){return ks(e,o,n)};function xt(e){return zr(e),Ee(e<0?0:yt(e)|0)}l.allocUnsafe=function(e){return xt(e)};l.allocUnsafeSlow=function(e){return xt(e)};function As(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=qr(e,o)|0,r=Ee(n),a=r.write(e,o);return a!==n&&(r=r.slice(0,a)),r}function ut(e){for(var o=e.length<0?0:yt(e.length)|0,n=Ee(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function Ps(e){if(Te(e,Uint8Array)){var o=new Uint8Array(e);return ft(o.buffer,o.byteOffset,o.byteLength)}return ut(e)}function ft(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,l.prototype),r}function Is(e){if(l.isBuffer(e)){var o=yt(e.length)|0,n=Ee(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||Tt(e.length)?Ee(0):ut(e);if(e.type==="Buffer"&&Array.isArray(e.data))return ut(e.data)}function yt(e){if(e>=pn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+pn.toString(16)+" bytes");return e|0}function Ls(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,n){if(Te(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),Te(n,Uint8Array)&&(n=l.from(n,n.offset,n.byteLength)),!l.isBuffer(o)||!l.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,a=n.length,s=0,m=Math.min(r,a);s<m;++s)if(o[s]!==n[s]){r=o[s],a=n[s];break}return r<a?-1:a<r?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var a=l.allocUnsafe(n),s=0;for(r=0;r<o.length;++r){var m=o[r];if(Te(m,Uint8Array))s+m.length>a.length?l.from(m).copy(a,s):Uint8Array.prototype.set.call(a,m,s);else if(l.isBuffer(m))m.copy(a,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=m.length}return a};function qr(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Te(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ht(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Qr(e).length;default:if(a)return r?-1:ht(e).length;o=(""+o).toLowerCase(),a=!0}}l.byteLength=qr;function Es(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Vs(this,o,n);case"utf8":case"utf-8":return Xr(this,o,n);case"ascii":return Us(this,o,n);case"latin1":case"binary":return Ws(this,o,n);case"base64":return Bs(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $s(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}l.prototype._isBuffer=!0;function qe(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)qe(this,n,n+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)qe(this,n,n+3),qe(this,n+1,n+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)qe(this,n,n+7),qe(this,n+1,n+6),qe(this,n+2,n+5),qe(this,n+3,n+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Xr(this,0,o):Es.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",n=so.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};$r&&(l.prototype[$r]=l.prototype.inspect);l.prototype.compare=function(o,n,r,a,s){if(Te(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),a===void 0&&(a=0),s===void 0&&(s=this.length),n<0||r>o.length||a<0||s>this.length)throw new RangeError("out of range index");if(a>=s&&n>=r)return 0;if(a>=s)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,a>>>=0,s>>>=0,this===o)return 0;for(var m=s-a,d=r-n,_=Math.min(m,d),g=this.slice(a,s),y=o.slice(n,r),u=0;u<_;++u)if(g[u]!==y[u]){m=g[u],d=y[u];break}return m<d?-1:d<m?1:0};function Kr(e,o,n,r,a){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Tt(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1;n=e.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof o=="string"&&(o=l.from(o,r)),l.isBuffer(o))return o.length===0?-1:Hr(e,o,n,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):Hr(e,[o],n,r,a);throw new TypeError("val must be string, number or Buffer")}function Hr(e,o,n,r,a){var s=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,m/=2,d/=2,n/=2}function _(w,C){return s===1?w[C]:w.readUInt16BE(C*s)}var g;if(a){var y=-1;for(g=n;g<m;g++)if(_(e,g)===_(o,y===-1?0:g-y)){if(y===-1&&(y=g),g-y+1===d)return y*s}else y!==-1&&(g-=g-y),y=-1}else for(n+d>m&&(n=m-d),g=n;g>=0;g--){for(var u=!0,T=0;T<d;T++)if(_(e,g+T)!==_(o,T)){u=!1;break}if(u)return g}return-1}l.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};l.prototype.indexOf=function(o,n,r){return Kr(this,o,n,r,!0)};l.prototype.lastIndexOf=function(o,n,r){return Kr(this,o,n,r,!1)};function Ns(e,o,n,r){n=Number(n)||0;var a=e.length-n;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(Tt(d))return m;e[n+m]=d}return m}function Rs(e,o,n,r){return sn(ht(o,e.length-n),e,n,r)}function Ds(e,o,n,r){return sn(js(o),e,n,r)}function Ms(e,o,n,r){return sn(Qr(o),e,n,r)}function Os(e,o,n,r){return sn(zs(o,e.length-n),e,n,r)}l.prototype.write=function(o,n,r,a){if(n===void 0)a="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")a=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var s=this.length-n;if((r===void 0||r>s)&&(r=s),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var m=!1;;)switch(a){case"hex":return Ns(this,o,n,r);case"utf8":case"utf-8":return Rs(this,o,n,r);case"ascii":case"latin1":case"binary":return Ds(this,o,n,r);case"base64":return Ms(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Os(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Bs(e,o,n){return o===0&&n===e.length?gt.fromByteArray(e):gt.fromByteArray(e.slice(o,n))}function Xr(e,o,n){n=Math.min(e.length,n);for(var r=[],a=o;a<n;){var s=e[a],m=null,d=s>239?4:s>223?3:s>191?2:1;if(a+d<=n){var _,g,y,u;switch(d){case 1:s<128&&(m=s);break;case 2:_=e[a+1],(_&192)===128&&(u=(s&31)<<6|_&63,u>127&&(m=u));break;case 3:_=e[a+1],g=e[a+2],(_&192)===128&&(g&192)===128&&(u=(s&15)<<12|(_&63)<<6|g&63,u>2047&&(u<55296||u>57343)&&(m=u));break;case 4:_=e[a+1],g=e[a+2],y=e[a+3],(_&192)===128&&(g&192)===128&&(y&192)===128&&(u=(s&15)<<18|(_&63)<<12|(g&63)<<6|y&63,u>65535&&u<1114112&&(m=u))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),a+=d}return Fs(r)}var Gr=4096;function Fs(e){var o=e.length;if(o<=Gr)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=Gr));return n}function Us(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]&127);return r}function Ws(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]);return r}function Vs(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var a="",s=o;s<n;++s)a+=qs[e[s]];return a}function $s(e,o,n){for(var r=e.slice(o,n),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}l.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var a=this.subarray(o,n);return Object.setPrototypeOf(a,l.prototype),a};function H(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var a=this[o],s=1,m=0;++m<n&&(s*=256);)a+=this[o+m]*s;return a};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var a=this[o+--n],s=1;n>0&&(s*=256);)a+=this[o+--n]*s;return a};l.prototype.readUint8=l.prototype.readUInt8=function(o,n){return o=o>>>0,n||H(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||H(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||H(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||H(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var a=this[o],s=1,m=0;++m<n&&(s*=256);)a+=this[o+m]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*n)),a};l.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var a=n,s=1,m=this[o+--a];a>0&&(s*=256);)m+=this[o+--a]*s;return s*=128,m>=s&&(m-=Math.pow(2,8*n)),m};l.prototype.readInt8=function(o,n){return o=o>>>0,n||H(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,n){o=o>>>0,n||H(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};l.prototype.readInt16BE=function(o,n){o=o>>>0,n||H(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};l.prototype.readInt32LE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,n){return o=o>>>0,n||H(o,4,this.length),po.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,n){return o=o>>>0,n||H(o,4,this.length),po.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||H(o,8,this.length),po.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||H(o,8,this.length),po.read(this,o,!1,52,8)};function Z(e,o,n,r,a,s){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var s=Math.pow(2,8*r)-1;Z(this,o,n,r,s,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var s=Math.pow(2,8*r)-1;Z(this,o,n,r,s,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,1,255,0),this[n]=o&255,n+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};l.prototype.writeIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var s=Math.pow(2,8*r-1);Z(this,o,n,r,s-1,-s)}var m=0,d=1,_=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&_===0&&this[n+m-1]!==0&&(_=1),this[n+m]=(o/d>>0)-_&255;return n+r};l.prototype.writeIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var s=Math.pow(2,8*r-1);Z(this,o,n,r,s-1,-s)}var m=r-1,d=1,_=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[n+m+1]!==0&&(_=1),this[n+m]=(o/d>>0)-_&255;return n+r};l.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};l.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};l.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};l.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};l.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||Z(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function Yr(e,o,n,r,a,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Zr(e,o,n,r,a){return o=+o,n=n>>>0,a||Yr(e,o,n,4,34028234663852886e22,-34028234663852886e22),po.write(e,o,n,r,23,4),n+4}l.prototype.writeFloatLE=function(o,n,r){return Zr(this,o,n,!0,r)};l.prototype.writeFloatBE=function(o,n,r){return Zr(this,o,n,!1,r)};function Jr(e,o,n,r,a){return o=+o,n=n>>>0,a||Yr(e,o,n,8,17976931348623157e292,-17976931348623157e292),po.write(e,o,n,r,52,8),n+8}l.prototype.writeDoubleLE=function(o,n,r){return Jr(this,o,n,!0,r)};l.prototype.writeDoubleBE=function(o,n,r){return Jr(this,o,n,!1,r)};l.prototype.copy=function(o,n,r,a){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),n>=o.length&&(n=o.length),n||(n=0),a>0&&a<r&&(a=r),a===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),o.length-n<a-r&&(a=o.length-n+r);var s=a-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,a):Uint8Array.prototype.set.call(o,this.subarray(r,a),n),s};l.prototype.fill=function(o,n,r,a){if(typeof o=="string"){if(typeof n=="string"?(a=n,n=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!l.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(o.length===1){var s=o.charCodeAt(0);(a==="utf8"&&s<128||a==="latin1")&&(o=s)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=l.isBuffer(o)?o:l.from(o,a),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%_]}return this};var Hs=/[^+/0-9A-Za-z-_]/g;function Gs(e){if(e=e.split("=")[0],e=e.trim().replace(Hs,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ht(e,o){o=o||1/0;for(var n,r=e.length,a=null,s=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!a){if(n>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=n;continue}if(n<56320){(o-=3)>-1&&s.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,n<128){if((o-=1)<0)break;s.push(n)}else if(n<2048){if((o-=2)<0)break;s.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;s.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return s}function js(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function zs(e,o){for(var n,r,a,s=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,a=n%256,s.push(a),s.push(r);return s}function Qr(e){return gt.toByteArray(Gs(e))}function sn(e,o,n,r){for(var a=0;a<r&&!(a+n>=o.length||a>=e.length);++a)o[a+n]=e[a];return a}function Te(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Tt(e){return e!==e}var qs=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,a=0;a<16;++a)o[r+a]=e[n]+e[a];return o}()});var aa=Y((al,ra)=>{t();var D=ra.exports={},be,we;function bt(){throw new Error("setTimeout has not been defined")}function wt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?be=setTimeout:be=bt}catch(e){be=bt}try{typeof clearTimeout=="function"?we=clearTimeout:we=wt}catch(e){we=wt}})();function oa(e){if(be===setTimeout)return setTimeout(e,0);if((be===bt||!be)&&setTimeout)return be=setTimeout,setTimeout(e,0);try{return be(e,0)}catch(o){try{return be.call(null,e,0)}catch(n){return be.call(this,e,0)}}}function Ks(e){if(we===clearTimeout)return clearTimeout(e);if((we===wt||!we)&&clearTimeout)return we=clearTimeout,clearTimeout(e);try{return we(e)}catch(o){try{return we.call(null,e)}catch(n){return we.call(this,e)}}}var Ne=[],mo=!1,Ke,mn=-1;function Xs(){!mo||!Ke||(mo=!1,Ke.length?Ne=Ke.concat(Ne):mn=-1,Ne.length&&na())}function na(){if(!mo){var e=oa(Xs);mo=!0;for(var o=Ne.length;o;){for(Ke=Ne,Ne=[];++mn<o;)Ke&&Ke[mn].run();mn=-1,o=Ne.length}Ke=null,mo=!1,Ks(e)}}D.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];Ne.push(new ta(e,o)),Ne.length===1&&!mo&&oa(na)};function ta(e,o){this.fun=e,this.array=o}ta.prototype.run=function(){this.fun.apply(null,this.array)};D.title="browser";D.browser=!0;D.env={};D.argv=[];D.version="";D.versions={};function Re(){}D.on=Re;D.addListener=Re;D.once=Re;D.off=Re;D.removeListener=Re;D.removeAllListeners=Re;D.emit=Re;D.prependListener=Re;D.prependOnceListener=Re;D.listeners=function(e){return[]};D.binding=function(e){throw new Error("process.binding is not supported")};D.cwd=function(){return"/"};D.chdir=function(e){throw new Error("process.chdir is not supported")};D.umask=function(){return 0}});var i,p,Ys,c,t=h(()=>{i=b(ea()),p=b(aa()),Ys=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),c=Ys});var Xe,Io=h(()=>{"use strict";t();Xe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var St={};ie(St,{css:()=>ca,default:()=>Zs});var ca,Zs,vt=h(()=>{"use strict";t();ca=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ca));Zs={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ma=h(()=>{"use strict";t()});var da=h(()=>{"use strict";t()});var _a=h(()=>{"use strict";t()});var kt,la=h(()=>{"use strict";t();kt=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(kt||{})});var ga=h(()=>{"use strict";t()});var At=h(()=>{"use strict";t()});var ua=h(()=>{"use strict";t()});var fa=h(()=>{"use strict";t()});var ha=h(()=>{"use strict";t()});var xa=h(()=>{"use strict";t()});var Eo,_o,dn=h(()=>{"use strict";t();Eo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),_o=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Se,ya,Cl,Ta,kl,pe=h(()=>{"use strict";t();dn();Se=(T=>(T.ledger="ledger",T.walletconnect="walletconnect",T.walletconnectv2="walletconnectv2",T.wallet="wallet",T.crossWindow="crossWindow",T.iframe="iframe",T.extension="extension",T.passkey="passkey",T.metamask="metamask",T.opera="opera",T.extra="extra",T.none="",T))(Se||{}),ya=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(ya||{}),Cl=f(f({},_o.WindowProviderRequestEnums),ya),Ta=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ta||{}),kl=f(f({},_o.WindowProviderResponseEnums),Ta)});var ba=h(()=>{"use strict";t()});var wa=h(()=>{"use strict";t()});var J=h(()=>{"use strict";t()});var Sa=h(()=>{"use strict";t()});var va=h(()=>{"use strict";t()});var Ca=h(()=>{"use strict";t()});var X=h(()=>{"use strict";t();fa();ha();xa();pe();ba();wa();J();Sa();va();Ca()});var Pt,ka,Hl,Aa,Gl,Pa,jl,zl,ql,Ia=h(()=>{"use strict";t();X();Pt={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ka,egldLabel:Hl}=Pt["devnet"],{chainId:Aa,egldLabel:Gl}=Pt["testnet"],{chainId:Pa,egldLabel:jl}=Pt["mainnet"],zl={["devnet"]:ka,["testnet"]:Aa,["mainnet"]:Pa},ql={[ka]:"devnet",[Aa]:"testnet",[Pa]:"mainnet"}});var It=h(()=>{"use strict";t()});var ve,La=h(()=>{"use strict";t();ve=require("@multiversx/sdk-web-wallet-provider")});var Ce,_n=h(()=>{"use strict";t();Ce=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ea,Na,Lt,Ql,eg,Ra=h(()=>{"use strict";t();_n();Lt=String((Na=(Ea=Ce.safeWindow)==null?void 0:Ea.navigator)==null?void 0:Na.userAgent),Ql=/^((?!chrome|android).)*safari/i.test(Lt),eg=/firefox/i.test(Lt)&&/windows/i.test(Lt)});var Et,Nt,Da,ln,Ma,lo,P=h(()=>{"use strict";t();ma();da();_a();la();ga();At();ua();Ia();It();La();Ra();Et=5e4,Nt=1e9,Da=1,ln="logout",Ma="login",lo="0"});var De={};ie(De,{css:()=>Oa,default:()=>em});var Oa,em,Me=h(()=>{"use strict";t();Oa=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Oa));em={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var uo,un=h(()=>{"use strict";t();uo=()=>Date.now()/1e3});var Ka=h(()=>{"use strict";t()});var Xa=h(()=>{"use strict";t()});var Ya=h(()=>{"use strict";t();un();Ka();Xa()});var Wt={};ie(Wt,{clear:()=>dm,getItem:()=>sm,localStorageKeys:()=>le,removeItem:()=>mm,setItem:()=>pm});var le,fn,pm,sm,mm,dm,fo=h(()=>{"use strict";t();Ya();le={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},fn=typeof localStorage!="undefined",pm=({key:e,data:o,expires:n})=>{!fn||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},sm=e=>{if(!fn)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:uo()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},mm=e=>{!fn||localStorage.removeItem(String(e))},dm=()=>{!fn||localStorage.clear()}});var Vt={};ie(Vt,{clear:()=>ei,getItem:()=>Ja,removeItem:()=>Qa,setItem:()=>Za,storage:()=>_m});var Za,Ja,Qa,ei,_m,oi=h(()=>{"use strict";t();Za=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Ja=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},Qa=e=>sessionStorage.removeItem(String(e)),ei=()=>sessionStorage.clear(),_m={setItem:Za,getItem:Ja,removeItem:Qa,clear:ei}});var ke,Ro=h(()=>{"use strict";t();fo();oi();ke={session:Vt,local:Wt}});var $t,R,Ze,Q=h(()=>{"use strict";t();$t=require("@reduxjs/toolkit");P();R=(0,$t.createAction)(ln),Ze=(0,$t.createAction)(Ma,e=>({payload:e}))});var Gt,ni,ti,hn,Ht,ri,jt,fu,zt,hu,xu,yu,Tu,bu,wu,Su,vu,xn,yn=h(()=>{"use strict";t();Gt=require("@multiversx/sdk-core"),ni=require("@reduxjs/toolkit"),ti=require("redux-persist");P();Ro();fo();Q();hn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:lo},Ht={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":hn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},ri=(0,ni.createSlice)({name:"accountInfoSlice",initialState:Ht,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Gt.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:hn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(R,()=>(ke.local.removeItem(le.loginExpiresAt),Ht)),e.addCase(Ze,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new Gt.Address(r).hex()}),e.addCase(ti.REHYDRATE,(o,n)=>{var g;if(!((g=n.payload)!=null&&g.account))return;let{account:r}=n.payload,{address:a,shard:s,accounts:m,publicKey:d}=r;o.address=a,o.shard=s;let _=m&&a in m;o.accounts=_?m:Ht.accounts,o.publicKey=d})}}),{setAccount:jt,setAddress:fu,setAccountNonce:zt,setAccountShard:hu,setLedgerAccount:xu,updateLedgerAccount:yu,setWalletConnectAccount:Tu,setIsAccountLoading:bu,setAccountLoadingError:wu,setWebsocketEvent:Su,setWebsocketBatchEvent:vu}=ri.actions,xn=ri.reducer});function Do(){return new Date().setHours(new Date().getHours()+24)}function Mo(e){ke.local.setItem({key:le.loginExpiresAt,data:e,expires:e})}var qt=h(()=>{"use strict";t();Ro();fo()});var ii,ai,ci,Du,pi,Mu,Tn,Ou,Bu,si,Fu,Uu,Wu,bn,wn=h(()=>{"use strict";t();ii=require("@reduxjs/toolkit");qt();pe();Q();ai={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},ci=(0,ii.createSlice)({name:"loginInfoSlice",initialState:ai,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(R,()=>ai),e.addCase(Ze,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,Mo(Do())})}}),{setLoginMethod:Du,setWalletConnectLogin:pi,setLedgerLogin:Mu,setTokenLogin:Tn,setTokenLoginSignature:Ou,setWalletLogin:Bu,invalidateLoginSession:si,setLogoutRoute:Fu,setIsWalletConnectV2Initialized:Uu,setWebviewLogin:Wu}=ci.actions,bn=ci.reducer});var di,mi,_i,Gu,ju,zu,qu,Sn,vn=h(()=>{"use strict";t();di=require("@reduxjs/toolkit");Q();mi={},_i=(0,di.createSlice)({name:"modalsSlice",initialState:mi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(R,()=>mi)}}),{setTxSubmittedModal:Gu,setNotificationModal:ju,clearTxSubmittedModal:zu,clearNotificationModal:qu}=_i.actions,Sn=_i.reducer});var V,ge=h(()=>{"use strict";t();Io();V=()=>{if(!Xe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:a,search:s}}=window;return{pathname:o,hash:n,origin:r,href:a,search:s}}});var Kt,li=h(()=>{"use strict";t();ge();Kt=(e="")=>{let o=V(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var gi=h(()=>{"use strict";t();ho()});var ui,fi=h(()=>{"use strict";t();_n();ui=e=>{if(!Ce.safeWindow.location)return;if(!new URL(Ce.safeWindow.location.href).protocol.startsWith("http"))return Ce.safeWindow.location.reload();Ce.safeWindow.location.assign(e)}});var ho=h(()=>{"use strict";t();li();gi();ge();fi()});var hi,xi,Cn,Xt=h(()=>{"use strict";t();ho();hi=!1,xi=(e=!0)=>{hi=e},Cn=({timeout:e=0,url:o})=>{hi||setTimeout(()=>{if(!!window)return ui(o)},e)}});function yi({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),a=typeof o=="function";if(r&&e!=null){if(a)return o(e,n);Cn({url:e,timeout:lm})}}var lm,Ti=h(()=>{"use strict";t();Xt();lm=200});function bi(e){return e[Math.floor(Math.random()*e.length)]}var wi=h(()=>{"use strict";t()});var Si=h(()=>{"use strict";t();At()});var Yt=h(()=>{"use strict";t();Ti();wi();Si()});var vi,Ci,ki,Zt,um,Ai,Cf,kf,Af,kn,An=h(()=>{"use strict";t();vi=require("@reduxjs/toolkit"),Ci=b(require("lodash.omit")),ki=require("redux-persist");It();Q();Yt();Zt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},um={network:Zt},Ai=(0,vi.createSlice)({name:"appConfig",initialState:um,reducers:{initializeNetworkConfig:(e,o)=>{let n=bi(o.payload.walletConnectV2RelayAddresses),r=(0,Ci.default)(o.payload,"walletConnectV2RelayAddresses");e.network=k(f(f({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=f(f({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(R,o=>{o.network.customWalletAddress=void 0}),e.addCase(ki.REHYDRATE,(o,n)=>{var a,s;if(!((s=(a=n.payload)==null?void 0:a.network)!=null&&s.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Cf,updateNetworkConfig:kf,setCustomWalletAddress:Af}=Ai.actions,kn=Ai.reducer});var Pi,Jt,Ii,Rf,Df,Mf,Pn,In=h(()=>{"use strict";t();Pi=require("@reduxjs/toolkit");X();Q();Jt={isSigning:!1,signedSessions:{}},Ii=(0,Pi.createSlice)({name:"signedMessageInfoSliceState",initialState:Jt,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:a}=o.payload;a&&(e.errorMessage=a),e.isSigning=r.status==="pending",e.signedSessions[n]=f(f({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>f(f({},e),o.payload),clearSignedMessageInfo:()=>Jt},extraReducers:e=>{e.addCase(R,()=>Jt)}}),{setSignSession:Rf,clearSignedMessageInfo:Df,setSignSessionState:Mf}=Ii.actions,Pn=Ii.reducer});var Ei,Ni,Li,Ri,$f,Hf,Gf,jf,Ln,En=h(()=>{"use strict";t();Ei=require("@reduxjs/toolkit"),Ni=require("redux-persist");X();un();Q();Li={customToasts:[],transactionToasts:[]},Ri=(0,Ei.createSlice)({name:"toastsSlice",initialState:Li,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(a=>a.toastId===n);if(r!==-1){e.customToasts[r]=k(f(f({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(k(f({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:uo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(R,()=>Li),e.addCase(Ni.REHYDRATE,(o,n)=>{var a,s;let r=(s=(a=n.customToasts)==null?void 0:a.filter(m=>!("component"in m)))!=null?s:[];o.customToasts=r})}}),{addCustomToast:$f,removeCustomToast:Hf,addTransactionToast:Gf,removeTransactionToast:jf}=Ri.actions,Ln=Ri.reducer});var Di,er,or,nr,fm,Qt,Mi,Xf,Yf,Zf,Nn,Rn=h(()=>{"use strict";t();Di=require("@reduxjs/toolkit");Q();er="Transaction failed",or="Transaction successful",nr="Processing transaction",fm="Transaction submitted",Qt={},Mi=(0,Di.createSlice)({name:"transactionsInfo",initialState:Qt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||er,successMessage:(r==null?void 0:r.successMessage)||or,processingMessage:(r==null?void 0:r.processingMessage)||nr,submittedMessage:(r==null?void 0:r.submittedMessage)||fm,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Qt},extraReducers:e=>{e.addCase(R,()=>Qt)}}),{clearTransactionsInfo:Xf,setTransactionsDisplayInfo:Yf,clearTransactionsInfoForSessionId:Zf}=Mi.actions,Nn=Mi.reducer});function Oi(e){return e!=null&&(Am(e)||Nm(e))}function Dn(e){return e!=null&&(Pm(e)||Rm(e))}function Mn(e){return e!=null&&(Im(e)||Dm(e))}function Bi(e){return e!=null&&(Lm(e)||Mm(e))}function Fi(e){return e!=null&&Em(e)}function Am(e){return e!=null&&xm.includes(e)}function Pm(e){return e!=null&&ym.includes(e)}function Im(e){return e!=null&&Tm.includes(e)}function Lm(e){return e!=null&&bm.includes(e)}function Em(e){return e!=null&&wm.includes(e)}function Nm(e){return e!=null&&Sm.includes(e)}function Rm(e){return e!=null&&vm.includes(e)}function Dm(e){return e!=null&&Cm.includes(e)}function Mm(e){return e!=null&&km.includes(e)}var xm,ym,Tm,bm,wm,Sm,vm,Cm,km,rr=h(()=>{"use strict";t();pe();xm=["sent"],ym=["success"],Tm=["fail","cancelled","timedOut"],bm=["invalid"],wm=["timedOut"],Sm=["pending"],vm=["success"],Cm=["fail","invalid"],km=["not executed"]});var Ui,Wi,Oo,Om,Vi,ih,ch,ph,sh,mh,dh,_h,lh,gh,uh,fh,On,Bn=h(()=>{"use strict";t();Ui=require("@reduxjs/toolkit"),Wi=require("redux-persist");pe();rr();Q();Oo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Om={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Vi=(0,Ui.createSlice)({name:"transactionsSlice",initialState:Oo,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,g;let{sessionId:n,transactions:r,errorMessage:a,status:s,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=f(f(f({},Om),((_=e.signedTransactions[n])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:s,errorMessage:a,redirectRoute:m,customTransactionInformation:f(f({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===n&&(e.transactionsToSign=Oo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=f(f({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:a,transactions:s}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,a!=null&&(e.signedTransactions[n].errorMessage=a),s!=null&&(e.signedTransactions[n].transactions=s))},updateSignedTransactionStatus:(e,o)=>{var g,y,u,T,w,C,S,F;let{sessionId:n,status:r,errorMessage:a,transactionHash:s,serverTransaction:m,inTransit:d}=o.payload,_=(y=(g=e.signedTransactions)==null?void 0:g[n])==null?void 0:y.transactions;if(_!=null){e.signedTransactions[n].transactions=_.map(L=>L.hash===s?k(f(f({},m!=null?m:{}),L),{status:r,errorMessage:a,inTransit:d}):L);let U=(T=(u=e.signedTransactions[n])==null?void 0:u.transactions)==null?void 0:T.every(L=>Dn(L.status)),$=(C=(w=e.signedTransactions[n])==null?void 0:w.transactions)==null?void 0:C.some(L=>Mn(L.status)),re=(F=(S=e.signedTransactions[n])==null?void 0:S.transactions)==null?void 0:F.every(L=>Bi(L.status));U&&(e.signedTransactions[n].status="success"),$&&(e.signedTransactions[n].status="fail"),re&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Oo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Oo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=f(f({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(R,()=>Oo),e.addCase(Wi.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:a}=n.payload.transactions,s=Object.entries(r).reduce((d,[_,g])=>{let y=new Date(_),u=new Date;return u.setHours(u.getHours()+5),u-y>0||(d[_]=g),d},{});a!=null&&(o.customTransactionInformationForSessionId=a),r!=null&&(o.signedTransactions=s)})}}),{updateSignedTransactionStatus:ih,updateSignedTransactions:ch,setTransactionsToSign:ph,clearAllTransactionsToSign:sh,clearAllSignedTransactions:mh,clearSignedTransaction:dh,clearTransactionToSign:_h,setSignTransactionsError:lh,setSignTransactionsCancelMessage:gh,moveTransactionsToSignedState:uh,updateSignedTransactionsCustomTransactionInformation:fh}=Vi.actions,On=Vi.reducer});var $i,ar,Hi,Th,bh,wh,Sh,Fn,Un=h(()=>{"use strict";t();$i=require("@reduxjs/toolkit");Q();ar={},Hi=(0,$i.createSlice)({name:"batchTransactionsSlice",initialState:ar,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>ar},extraReducers:e=>{e.addCase(R,()=>ar)}}),{setBatchTransactions:Th,updateBatchTransactions:bh,clearBatchTransactions:wh,clearAllBatchTransactions:Sh}=Hi.actions,Fn=Hi.reducer});var ji,Gi,zi,Ah,qi,ir=h(()=>{"use strict";t();ji=require("@reduxjs/toolkit");Q();Gi={},zi=(0,ji.createSlice)({name:"dappConfigSlice",initialState:Gi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(R,()=>Gi)}}),{setDappConfig:Ah}=zi.actions,qi=zi.reducer});var Ae=h(()=>{"use strict";t();yn();wn();vn();An();In();En();Rn();Bn();Un();ir()});var cr=h(()=>{"use strict";t()});var Yi,Wm,Vm,Je,$n=h(()=>{"use strict";t();Yi=require("@reduxjs/toolkit");cr();yn();Un();ir();wn();vn();An();In();En();Rn();Bn();Wm={["account"]:xn,["dappConfig"]:qi,["loginInfo"]:bn,["modals"]:Sn,["networkConfig"]:kn,["signedMessageInfo"]:Pn,["toasts"]:Ln,["transactionsInfo"]:Nn,["transactions"]:On,["batchTransactions"]:Fn},Vm=(e={})=>(0,Yi.combineReducers)(f(f({},Wm),e)),Je=Vm});var ec={};ie(ec,{default:()=>td,sessionStorageReducers:()=>pr});function Oe(e,o=[]){return{key:e,version:1,storage:Ji.default,blacklist:o}}var ee,Zi,Ji,$m,Bo,Hm,Gm,jm,zm,qm,Km,Xm,Ym,Zm,Jm,Qi,Qm,pr,ed,od,nd,td,oc=h(()=>{"use strict";t();ee=require("redux-persist"),Zi=b(require("redux-persist/lib/storage")),Ji=b(require("redux-persist/lib/storage/session"));$n();Ae();yn();Un();wn();vn();An();In();En();Rn();Bn();cr();$m={persistReducersStorageType:"localStorage"},Bo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Hm=Oe(Bo["account"]),Gm=Oe(Bo["loginInfo"]),jm=Oe(Bo["modals"]),zm=Oe(Bo["networkConfig"]),qm={2:e=>k(f({},e),{networkConfig:Zt})};Km=Oe("sdk-dapp-transactionsInfo"),Xm=Oe("sdk-dapp-transactions",["transactionsToSign"]),Ym=Oe("sdk-dapp-batchTransactions",["batchTransactions"]),Zm=Oe("sdk-dapp-toasts"),Jm=Oe("sdk-dapp-signedMessageInfo"),Qi={key:"sdk-dapp-store",version:2,storage:Zi.default,whitelist:Object.keys(Bo),migrate:(0,ee.createMigrate)(qm,{debug:!1})},Qm=k(f({},Qi),{whitelist:[]}),pr={["toasts"]:(0,ee.persistReducer)(Zm,Ln),["transactions"]:(0,ee.persistReducer)(Xm,On),["transactionsInfo"]:(0,ee.persistReducer)(Km,Nn),["batchTransactions"]:(0,ee.persistReducer)(Ym,Fn),["signedMessageInfo"]:(0,ee.persistReducer)(Jm,Pn)},ed=k(f({},pr),{["account"]:(0,ee.persistReducer)(Hm,xn),["loginInfo"]:(0,ee.persistReducer)(Gm,bn),["modals"]:(0,ee.persistReducer)(jm,Sn),["networkConfig"]:(0,ee.persistReducer)(zm,kn)}),od=$m.persistReducersStorageType==="localStorage",nd=od?(0,ee.persistReducer)(Qi,Je(pr)):(0,ee.persistReducer)(Qm,Je(ed)),td=nd});var nc={};ie(nc,{default:()=>rd});var rd,tc=h(()=>{"use strict";t();$n();rd=Je()});var rc={};ie(rc,{default:()=>id});var se,ad,id,ac=h(()=>{"use strict";t();se=require("redux-persist"),ad=[se.FLUSH,se.REHYDRATE,se.PAUSE,se.PERSIST,se.PURGE,se.REGISTER],id=ad});var pc={};ie(pc,{default:()=>cc});function cc(e){return(0,ic.persistStore)(e)}var ic,sc=h(()=>{"use strict";t();ic=require("redux-persist")});var Qc=Y((Uk,Jc)=>{t();function n_(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Jc.exports=n_});var Sp=Y((pI,wp)=>{t();var x_=typeof c=="object"&&c&&c.Object===Object&&c;wp.exports=x_});var Cp=Y((sI,vp)=>{t();var y_=Sp(),T_=typeof self=="object"&&self&&self.Object===Object&&self,b_=y_||T_||Function("return this")();vp.exports=b_});var Sr=Y((mI,kp)=>{t();var w_=Cp(),S_=w_.Symbol;kp.exports=S_});var Lp=Y((dI,Ip)=>{t();var Ap=Sr(),Pp=Object.prototype,v_=Pp.hasOwnProperty,C_=Pp.toString,Zo=Ap?Ap.toStringTag:void 0;function k_(e){var o=v_.call(e,Zo),n=e[Zo];try{e[Zo]=void 0;var r=!0}catch(s){}var a=C_.call(e);return r&&(o?e[Zo]=n:delete e[Zo]),a}Ip.exports=k_});var Np=Y((_I,Ep)=>{t();var A_=Object.prototype,P_=A_.toString;function I_(e){return P_.call(e)}Ep.exports=I_});var Op=Y((lI,Mp)=>{t();var Rp=Sr(),L_=Lp(),E_=Np(),N_="[object Null]",R_="[object Undefined]",Dp=Rp?Rp.toStringTag:void 0;function D_(e){return e==null?e===void 0?R_:N_:Dp&&Dp in Object(e)?L_(e):E_(e)}Mp.exports=D_});var Fp=Y((gI,Bp)=>{t();var M_=Array.isArray;Bp.exports=M_});var Wp=Y((uI,Up)=>{t();function O_(e){return e!=null&&typeof e=="object"}Up.exports=O_});var $p=Y((fI,Vp)=>{t();var B_=Op(),F_=Fp(),U_=Wp(),W_="[object String]";function V_(e){return typeof e=="string"||!F_(e)&&U_(e)&&B_(e)==W_}Vp.exports=V_});var kr={};ie(kr,{css:()=>Jp,default:()=>G_});var Jp,G_,Ar=h(()=>{"use strict";t();Jp=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jp));G_={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var Pr={};ie(Pr,{css:()=>os,default:()=>z_});var os,z_,Ir=h(()=>{"use strict";t();os=`.dapp-core-component__scamPhishingStyles__scam-phishing-alert {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(os));z_={"scam-phishing-alert":"dapp-core-component__scamPhishingStyles__scam-phishing-alert",scamPhishingAlert:"dapp-core-component__scamPhishingStyles__scam-phishing-alert","scam-phishing-alert-icon":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon",scamPhishingAlertIcon:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon","scam-phishing-alert-text":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text",scamPhishingAlertText:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text","scam-phishing-alert-prefix":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix",scamPhishingAlertPrefix:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix","scam-phishing-alert-authorization":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization",scamPhishingAlertAuthorization:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization","scam-phishing-alert-authorization-duration":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration",scamPhishingAlertAuthorizationDuration:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration"}});var to={};ie(to,{css:()=>ps,default:()=>X_});var ps,X_,ro=h(()=>{"use strict";t();ps=`.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ps));X_={"xPortal-login-container":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container",xPortalLoginContainer:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container","xPortal-modal-dialog-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content",xPortalModalDialogContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content","xPortal-modal-header":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header",xPortalModalHeader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header","xPortal-modal-header-text":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text",xPortalModalHeaderText:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text","xPortal-modal-close-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button",xPortalModalCloseButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button","xPortal-modal-body":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body",xPortalModalBody:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body","xPortal-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content",xPortalContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content","xPortal-container-heading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading",xPortalContainerHeading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading","xPortal-container-subheading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading",xPortalContainerSubheading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading","xPortal-container-error":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error",xPortalContainerError:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error","xPortal-qr-code":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code",xPortalQrCode:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code","xPortal-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader",xPortalLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader","xPortal-container-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button",xPortalContainerButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button","xPortal-container-button-icon":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon",xPortalContainerButtonIcon:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon","xPortal-pairings":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings",xPortalPairings:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings","xPortal-pairings-lead":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead",xPortalPairingsLead:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead","xPortal-pairings-list":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list",xPortalPairingsList:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list","xPortal-pairing-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button",xPortalPairingButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button","xPortal-pairing-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader",xPortalPairingLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader","xPortal-pairing-image":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image",xPortalPairingImage:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image","xPortal-pairing-details":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details",xPortalPairingDetails:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details","xPortal-pairing-remove":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove",xPortalPairingRemove:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove","xPortal-legacy-link":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link",xPortalLegacyLink:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link"}});var el={};ie(el,{WalletConnectLoginContainer:()=>Q_});module.exports=K(el);t();t();var at=b(require("react"));t();var sa=b(require("react"));t();var Lo=b(require("react"));t();Io();var ia=()=>!Xe();var Js=()=>v(void 0,null,function*(){return yield Promise.resolve().then(()=>(vt(),St))}),Qs=()=>(vt(),K(St)).default,Ct=ia();function pa({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,a]=Lo.default.useState(Ct?void 0:Qs()),[s,m]=Lo.default.useState(Ct||n==null?void 0:n()),d=()=>v(this,null,function*(){(e?e():Js()).then(_=>a(_.default)),o==null||o().then(_=>m(_.default))});return(0,Lo.useEffect)(()=>{Ct&&d()},[]),{globalStyles:r,styles:s}}function G(e,o){return n=>{let{globalStyles:r,styles:a}=pa({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return sa.default.createElement(e,k(f({},n),{globalStyles:r!=null?r:{},styles:a!=null?a:{}}))}}t();t();var za=b(require("react"));t();t();t();var $e=b(require("react")),$a=require("react"),Ha=require("react"),Bt=b(require("classnames")),Ga=require("react-dom");P();t();var Ba=b(require("react")),Fa=b(require("classnames"));var om=({className:e,children:o,styles:n})=>Ba.default.createElement("div",{className:(0,Fa.default)(n==null?void 0:n.dappModalBody,e)},o),Rt=G(om,{ssrStyles:()=>Promise.resolve().then(()=>(Me(),De)),clientStyles:()=>(Me(),K(De)).default});t();var Dt=b(require("react")),Ua=b(require("classnames"));var nm=({visible:e,customFooter:o,className:n,footerText:r,styles:a})=>e?Dt.default.createElement("div",{className:(0,Ua.default)(a==null?void 0:a.dappModalFooter,n)},o!=null?o:Dt.default.createElement("div",null,r)):null,Mt=G(nm,{ssrStyles:()=>Promise.resolve().then(()=>(Me(),De)),clientStyles:()=>(Me(),K(De)).default});t();var go=b(require("react")),Wa=require("@fortawesome/free-solid-svg-icons"),Va=require("@fortawesome/react-fontawesome"),No=b(require("classnames"));var tm=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:a,headerTextClassName:s,onHide:m,globalStyles:d,styles:_})=>e?n?go.default.createElement("div",{className:(0,No.default)(_==null?void 0:_.dappModalHeader,r)},n):go.default.createElement("div",{className:(0,No.default)(_==null?void 0:_.dappModalHeader,r)},go.default.createElement("div",{className:(0,No.default)(_==null?void 0:_.dappModalHeaderText,s)},o),go.default.createElement("button",{onClick:m,className:(0,No.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,a)},go.default.createElement(Va.FontAwesomeIcon,{size:"lg",icon:Wa.faTimes}))):null,Ot=G(tm,{ssrStyles:()=>Promise.resolve().then(()=>(Me(),De)),clientStyles:()=>(Me(),K(De)).default});var am={showHeader:!0,showFooter:!1,headerText:"",footerText:""},im=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:a=am,id:s="dapp-modal",onHide:m,parentElement:d,visible:_,styles:g})=>{let[y,u]=(0,$a.useState)(!1);if((0,Ha.useEffect)(()=>{u(!0)},[]),!_)return null;let{showHeader:T,showFooter:w,headerText:C,footerText:S,modalDialogClassName:F="dapp-modal-dialog",modalContentClassName:U="dapp-modal-dialog-content",modalHeaderClassName:$="dapp-modal-dialog-header",modalHeaderTextClassName:re="dapp-modal-dialog-header-text",modalCloseButtonClassName:L="dapp-modal-dialog-close-button",modalBodyClassName:me="dapp-modal-dialog-content-body",modalFooterClassName:de="dapp-modal-dialog-footer",customModalHeader:Le,customModalFooter:bo}=a,wo=ao=>{ao.key==="Escape"&&r&&(m==null||m())};return $e.default.createElement($e.default.Fragment,null,y&&(0,Ga.createPortal)($e.default.createElement("div",{id:s,role:"dialog","aria-modal":"true",className:(0,Bt.default)(F,g==null?void 0:g.dappModal,n),"data-testid":e,onKeyDown:wo},$e.default.createElement("div",{className:(0,Bt.default)(g==null?void 0:g.dappModalContent,U)},$e.default.createElement(Ot,{visible:T,headerText:C,customHeader:Le,className:$,headerTextClassName:re,closeButtonClassName:L,onHide:m}),$e.default.createElement(Rt,{className:me},o),$e.default.createElement(Mt,{visible:w,customFooter:bo,footerText:S,className:de}))),d!=null?d:document==null?void 0:document.body))},Ft=G(im,{ssrStyles:()=>Promise.resolve().then(()=>(Me(),De)),clientStyles:()=>(Me(),K(De)).default});t();t();var gn=require("react"),ja=e=>{let[o,n]=(0,gn.useState)(!1),r=()=>{n(!0)},a=()=>{n(!1)};return(0,gn.useEffect)(()=>{(e==null?void 0:e.visible)===!0?r():(e==null?void 0:e.visible)===!1&&a()},[e==null?void 0:e.visible]),{handleShowModal:r,handleHideModal:a,showModal:o}};t();var Ut=e=>{let{showModal:o}=ja({visible:e.visible}),n=()=>{var r;(r=e.onClose)==null||r.call(e)};return za.default.createElement(Ft,{className:e.className,closeOnEscape:e.closeOnEscape,config:e.modalConfig,onHide:n,visible:o},e.children)};t();t();var B=b(require("react")),ms=require("@fortawesome/free-solid-svg-icons"),Ve=b(require("classnames")),ds=b(require("qrcode"));t();var Ye=b(require("react")),cm=e=>Ye.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 31.114 44.981",width:16,height:16},e),Ye.createElement("g",{transform:"translate(-47.168 -21.519)"},Ye.createElement("g",{transform:"translate(-247.872 -130.693)"},Ye.createElement("path",{d:"M355.676,152.213l-3.832,17.8h-9.661Z",transform:"translate(-40.089 1)",fillRule:"evenodd",fill:"#fff"}),Ye.createElement("path",{d:"M326.45,271.184l-7.053,9.379H295.04l7.054-9.379Z",transform:"translate(0 -101.17)",fillRule:"evenodd",fill:"#fff"}),Ye.createElement("path",{d:"M381.139,333.864l-13.493,17.8,3.832-17.8Z",transform:"translate(-61.742 -155.472)",fillRule:"evenodd",fill:"#fff"})))),qa=cm;P();t();var ne=require("react");t();t();t();var uc=require("react"),xo=require("react-redux");t();var sr=require("@reduxjs/toolkit"),lc=require("react-redux/lib/utils/Subscription");Ae();t();var Ki=b(require("lodash.throttle"));P();Ae();qt();Ro();fo();var Bm=[ln],Wn=!1,Fm=(0,Ki.default)(()=>{Mo(Do())},5e3),Xi=e=>o=>n=>{if(Bm.includes(n.type))return o(n);let r=e.getState(),a=ke.local.getItem(le.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(a==null)return Mo(Do());let m=Date.now();return a-m<0&&!Wn?setTimeout(()=>{Wn=!0,e.dispatch(si())},1e3):(Wn&&(Wn=!1),Fm()),o(n)};t();t();function Vn(){return typeof sessionStorage!="undefined"}var mc=Vn()?(oc(),K(ec)).default:(tc(),K(nc)).default,dc=Vn()?(ac(),K(rc)).default:[],_c=Vn()?(sc(),K(pc)).default:e=>e;$n();var I=(0,sr.configureStore)({reducer:mc,middleware:e=>e({serializableCheck:{ignoredActions:[...dc,zt.type,jt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Xi)}),gc=(0,lc.createSubscription)(I),Cx=_c(I),kx=(0,sr.configureStore)({reducer:Je});var cd={store:I,subscription:gc},mr=(0,uc.createContext)(cd),Lx=(0,xo.createStoreHook)(mr),Hn=(0,xo.createDispatchHook)(mr),M=(0,xo.createSelectorHook)(mr);t();t();Ae();t();var fc=b(require("lodash.isequal")),Gn=require("reselect"),x=(0,Gn.createSelectorCreator)(Gn.defaultMemoize,fc.default);var Pe=e=>e.account,Fo=x(Pe,e=>e.address),yo=x(Pe,Fo,(e,o)=>o in e.accounts?e.accounts[o]:hn),pd=x(Pe,yo,(e,o)=>{let a=e,{accounts:n}=a,r=an(a,["accounts"]);return k(f({},r),{address:o.address,account:o})}),Mx=x(yo,e=>e.balance),sd=x(yo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Ox=x(Pe,e=>e.shard),Bx=x(Pe,e=>e.ledgerAccount),Fx=x(Pe,e=>e.walletConnectAccount),Ux=x(Pe,e=>e.isAccountLoading),Wx=x(Pe,e=>e.accountLoadingError),md=x(Pe,e=>e.websocketEvent),dd=x(Pe,e=>e.websocketBatchEvent);t();var _d=e=>e.dappConfig,Hx=x(_d,e=>e.shouldUseWebViewProvider);t();var oe=e=>e.loginInfo,hc=x(oe,e=>e.loginMethod),Uo=x(oe,Fo,(e,o)=>Boolean(o)),qx=x(oe,e=>e.walletConnectLogin),Kx=x(oe,e=>e.ledgerLogin),xc=x(oe,e=>e.walletLogin),Xx=x(oe,e=>e.isLoginSessionInvalid),Wo=x(oe,e=>e.tokenLogin),yc=x(oe,e=>e.logoutRoute),ld=x(oe,e=>e.isWalletConnectV2Initialized);t();var Tc=e=>e.modals,Jx=x(Tc,e=>e.txSubmittedModal),Qx=x(Tc,e=>e.notificationModal);t();var Be=e=>e.networkConfig,bc=x(Be,e=>e.network.chainId),ny=x(Be,e=>e.network.roundDuration),ty=x(Be,e=>e.network.walletConnectBridgeAddress),wc=x(Be,e=>e.network.walletConnectV2RelayAddress),Sc=x(Be,e=>e.network.walletConnectV2ProjectId),vc=x(Be,e=>e.network.walletConnectV2Options),Cc=x(Be,e=>e.network.walletConnectDeepLink),Qe=x(Be,e=>e.network),gd=x(Qe,e=>e.apiAddress),kc=x(Qe,e=>e.explorerAddress),ry=x(Qe,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),ay=x(Qe,e=>e.xAliasAddress),iy=x(Qe,e=>e.egldLabel);t();var jn=e=>e.signedMessageInfo,sy=x(jn,e=>e.isSigning),my=x(jn,e=>e.errorMessage),dy=x(jn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),_y=x(jn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var Ac=e=>e.toasts,uy=x(Ac,e=>e.customToasts),fy=x(Ac,e=>e.transactionToasts);t();Ae();var Pc={errorMessage:er,successMessage:or,processingMessage:nr},ud=e=>e.transactionsInfo,Ty=x(ud,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Pc);t();t();var Ie=require("@multiversx/sdk-core");P();t();var dr=require("@multiversx/sdk-core/out");t();t();function zn(e){try{let o=atob(e),n=btoa(o),r=i.Buffer.from(e,"base64").toString(),a=i.Buffer.from(r).toString("base64"),s=e===n||n.startsWith(e),m=e===a||a.startsWith(e);if(s&&m)return!0}catch(o){return!1}return!1}function eo(e){return zn(e)?atob(e):e}t();t();t();t();var Ic=e=>{let o=e!=null?e:"";return zn(o)?dr.TransactionPayload.fromEncoded(o):new dr.TransactionPayload(o)};t();P();var qn=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(kt).some(n=>e.startsWith(n)):!1;function _r(e){var r,a,s;let o=f({},e);qn({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new Ie.Transaction(f(f(k(f(k(f({value:o.value.valueOf(),data:Ic(o.data),nonce:o.nonce.valueOf(),receiver:new Ie.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Ie.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Et,gasPrice:(a=o.gasPrice.valueOf())!=null?a:Nt,chainID:o.chainID.valueOf(),version:new Ie.TransactionVersion((s=o.version)!=null?s:Da)}),o.options?{options:new Ie.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Ie.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(i.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(i.Buffer.from(o.signature,"hex")),n}t();t();P();t();t();t();var yd=require("@multiversx/sdk-core/out");t();P();t();var Ec=require("@multiversx/sdk-core");X();t();var Lc=require("@multiversx/sdk-core");function Td(e){try{let o=new Lc.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Vo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Td(e)}t();t();t();var bd=require("@multiversx/sdk-core"),wd=b(require("bignumber.js"));pe();t();t();t();var lr="blocks";t();t();t();t();J();t();t();J();t();t();t();var Pd=b(require("bignumber.js"));P();t();var Ad=require("@multiversx/sdk-core"),gr=b(require("bignumber.js"));P();t();var Cd=b(require("bignumber.js"));t();gr.default.config({ROUNDING_MODE:gr.default.ROUND_FLOOR});t();t();t();P();t();t();t();t();P();t();P();t();var Id=require("@multiversx/sdk-core");P();t();var Ho=require("@multiversx/sdk-core"),Ed=b(require("bignumber.js"));P();t();t();var Ld=b(require("bignumber.js"));P();t();P();t();t();t();t();t();t();P();t();P();t();P();t();J();var Rd=["reDelegateRewards","claimRewards","unBond"],Dd=["wrapEgld","unwrapEgld"],Md=["unStake"],Od=["unDelegate"];t();t();t();P();t();var Ud=b(require("bignumber.js"));t();t();J();t();var Vd=b(require("bignumber.js"));t();t();t();t();var Hd=b(require("bignumber.js"));X();t();t();t();t();pe();t();var zd=require("@multiversx/sdk-web-wallet-provider");P();t();var jd=b(require("qs"));t();ho();Io();t();Io();var nS={search:Xe()?window.location.search:"",removeParams:[]};t();t();t();ge();t();J();t();t();ge();t();var qd=b(require("linkifyjs"));t();P();t();var Kd=b(require("bignumber.js"));t();X();t();t();pe();t();pe();t();t();t();J();t();J();t();var Xd=b(require("bignumber.js"));P();J();t();J();t();var Fc=require("react");X();t();t();J();t();t();var Yd=require("@multiversx/sdk-core/out"),Zd=b(require("bignumber.js"));J();t();X();t();t();X();var Xv=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var Uc=require("react");X();ge();t();var Qd=require("react");J();var t1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];rr();t();var Xn=e=>e.transactions,jo=x(Xn,e=>e.signedTransactions),q1=x(Xn,e=>e.signTransactionsError),K1=x(Xn,e=>e.signTransactionsCancelMessage),Yn=e=>o=>Object.entries(o).reduce((n,[r,a])=>(e(a.status)&&(n[r]=a),n),{}),X1=x(jo,Yn(Oi)),Y1=x(jo,Yn(Dn)),Z1=x(jo,Yn(Mn)),J1=x(jo,Yn(Fi)),Q1=x(Xn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:k(f({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>_r(n)))||[]})}),eC=x(jo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var hr=()=>M(yo);t();t();t();t();t();var Wc=require("@multiversx/sdk-extension-provider"),Vc=require("@multiversx/sdk-hw-provider"),$c=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Hc=require("@multiversx/sdk-opera-provider"),Gc=require("@multiversx/sdk-passkey-provider/out"),jc=require("@multiversx/sdk-web-wallet-provider");P();dn();t();var zo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),e_=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");pe();t();var Zn={},Jn=To;var fe=e=>{switch(e==null?void 0:e.constructor){case jc.WalletProvider:return"wallet";case Jn:return"walletconnectv2";case Vc.HWProvider:return"ledger";case Wc.ExtensionProvider:return"extension";case Gc.PasskeyProvider:return"passkey";case $c.MetamaskProvider:return"metamask";case Hc.OperaProvider:return"opera";case Eo.CrossWindowProvider:return"crossWindow";case zo.IframeProvider:return"iframe";case To:return"";default:return"extra"}};var ue=e=>`Unable to perform ${e}, Provider not initialized`,To=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ue("getAccount"))}setAccount(o){throw new Error(ue(`setAccount: ${o}`))}login(o){throw new Error(ue(`login with options: ${o}`))}logout(o){throw new Error(ue(`logout with options: ${o}`))}getAddress(){throw new Error(ue("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(ue(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(ue(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(ue(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(ue(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(ue(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(ue(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},qo=new To;var zc=qo;function qc(e){zc=e}function he(){return zc||qo}var Kc=()=>{let e=he(),o=fe(e);return{provider:e,providerType:o}};t();t();t();t();t();t();t();var Ko=b(require("react"));var zC=(0,Ko.createContext)({}),qC=I.getState();t();var Yc=b(require("react"));t();var xr=b(require("react")),o_=b(require("axios"));t();t();t();var Qn=require("react");function Zc(e,o=[]){let n=(0,Qn.useRef)(!0);(0,Qn.useEffect)(()=>{n.current?n.current=!1:e()},o)}Q();Ae();pe();t();t();var tp=b(Qc());_n();var ep,op,np,t_=(np=(op=(ep=Ce.safeWindow)==null?void 0:ep.location)==null?void 0:op.origin)==null?void 0:np.includes("localhost"),rp=e=>{if(!(0,tp.default)(e))return Boolean(e);let n=f({},e);return Boolean(t_)&&delete n.origin,Object.keys(n).length>0};t();function yr(){return Uo(I.getState())}Yt();t();Q();X();t();function ap(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function ip(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=r_(e.path,e.caseSensitive,e.end),a=o.match(n);if(!a)return null;let s=a[0],m=s.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((g,y,u)=>{if(y==="*"){let T=d[u]||"";m=s.slice(0,s.length-T.length).replace(/(.)\/+$/,"$1")}return g[y]=a_(d[u]||"",y),g},{}),pathname:s,pathnameBase:m,pattern:e}}function r_(e,o=!1,n=!0){ap(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,o?void 0:"i"),r]}function a_(e,o){try{return decodeURIComponent(e)}catch(n){return ap(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}t();t();ge();var cp=()=>{let{search:e}=V(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return Vo(r)?r:null};t();t();t();t();t();var pp=require("@lifeomic/axios-fetch"),Tr=b(require("axios")),br=(0,pp.buildAxiosFetch)(Tr.default),wr=(e,o)=>v(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[a]=yield Promise.all([r]);return{data:a,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function i_(e,o,n){return v(this,null,function*(){try{let r=yield br(e,f({method:"POST",body:o?JSON.stringify(o):void 0,headers:f({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return wr(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function c_(e,o){return v(this,null,function*(){try{let n=yield br(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return wr(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function p_(e,o,n){return v(this,null,function*(){try{let r=yield br(e,f({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return wr(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Xo=Tr.default.create();Xo.get=c_;Xo.post=i_;Xo.patch=p_;t();t();var s_=b(require("axios"));t();var d_=b(require("swr"));t();t();function sp(){let e=he();return fe(e)}t();pe();t();function Yo(e){return sp()===e}function et(){let e=I.getState(),o=he(),n=Fo(e),r=Uo(e),a=xc(e);if(!o)throw"provider not initialized";return Yo("ledger")&&r?new Promise(s=>{s(n)}):!Yo("")&&!Yo("wallet")&&!Yo("extra")?o.getAddress():new Promise(s=>{let m=cp();a!=null&&m&&s(m),r&&s(n),s("")})}t();t();t();ge();var mp=()=>{let{search:e}=V(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var dp=()=>{var n;let e=mp(),o=oe(I.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};t();Q();X();t();Ae();t();Ae();t();var _p=require("@multiversx/sdk-core");X();ho();Xt();Ro();fo();ho();var lp=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&Cn({url:e})},l_=e=>{let o=ke.local.getItem(le.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&(ke.local.setItem({key:le.logoutEvent,data:e,expires:0}),ke.local.removeItem(le.logoutEvent))},g_=500;function gp(a,s){return v(this,arguments,function*(e,o,n=Boolean(dp()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var C;let m="",d=he(),_=fe(d),g=_==="wallet",y=((C=d==null?void 0:d.isInitialized)==null?void 0:C.call(d))===!0;if(n&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield et(),l_(m)}catch(S){console.error("error fetching logout address",S)}let u=Kt(e),T=V(),w=new URL(decodeURIComponent(u)).pathname;if((ip(T.pathname,w)||g&&y)&&xi(),!m&&!y)return lp({callbackUrl:u,onRedirect:o});try{if(I.dispatch(R()),g)return setTimeout(()=>{d.logout({callbackUrl:u})},g_);r.hasConsentPopup&&_==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:u})}catch(S){console.error("Logging out error:",S)}finally{g||lp({callbackUrl:u,onRedirect:o})}})}t();var up=({maxRetries:e})=>new Promise((o,n)=>{let r=0,a=()=>{let s=bc(I.getState());if(s){o(s);return}if(r<e){r++,setTimeout(a,1e3);return}n(null)};a()});ge();t();t();dn();X();var fp=e=>(Object.values(Se).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=Eo.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=zo.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);t();var qp=require("react"),nt=require("@multiversx/sdk-core");Ae();t();t();var zp=require("@multiversx/sdk-native-auth-client");t();var Tp=b(require("axios"));t();t();t();function hp(e){return v(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var xp=(e,o,n,r=0)=>v(void 0,null,function*(){try{return yield e(...n)}catch(a){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield hp(o.delay)),yield xp(e,o,n,r+1)):null}}),yp=(e,o={retries:5,delay:500})=>(...n)=>v(void 0,null,function*(){return yield xp(e,o,n)});var u_=4,f_=3e4,ot={current:null},oo={current:null},h_=yp((e,o,n)=>v(void 0,null,function*(){if(n){let s=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:s}}let{data:r}=yield Tp.default.get(`${e}/${lr}?from=${u_}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[a]=r;return a}));function bp(e,o,n,r){return v(this,null,function*(){if(e==null)throw new Error("missing api url");let a=Date.now();if(ot.current!=null&&a<ot.current.timestamp*1e3+f_&&!r)return ot.current;if(oo.current!=null)return yield oo.current;oo.current=h_(e,o,n);try{let s=yield oo.current;if(s==null)throw oo.current=null,new Error("could not get block hash");return ot.current={hash:s.hash,timestamp:s.timestamp},oo.current=null,s}catch(s){return oo.current=null,null}})}t();t();un();t();t();var Hp=b($p());var Jo=e=>{if(!e||!(0,Hp.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,a,s]=o,m=JSON.parse(eo(s)),d=eo(n);return{ttl:Number(a),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};function $_(e){return Object.prototype.toString.call(e)==="[object String]"}var Gp=e=>{var n;if(!e||!$_(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,a,s]=o,m=eo(r),d=eo(a),_=Jo(d);if(!_)return{address:m,body:d,signature:s,blockHash:"",origin:"",ttl:0};let g=k(f({},_),{address:m,body:d,signature:s});return(n=_.extraInfo)!=null&&n.timestamp||delete g.extraInfo,g}catch(r){return null}};var vr={isExpired:!1},jp=e=>{if(!e)return vr;let o=Gp(e);if(!o)return vr;let n=uo(),{ttl:r,extraInfo:a}=o,s=a==null?void 0:a.timestamp;if(!s)return vr;let m=s+r,d=n>m,_=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:_}};t();ge();var Qo={origin:V().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},en=e=>{var n,r,a,s,m,d;return e===!0?Qo:{origin:(n=e==null?void 0:e.origin)!=null?n:Qo.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:Qo.expirySeconds,apiAddress:(a=e==null?void 0:e.apiAddress)!=null?a:Qo.apiAddress,tokenExpirationToastWarningSeconds:(s=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?s:Qo.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var Cr=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:a,extraInfo:s,gatewayUrl:m,extraRequestHeaders:d}=en(e),_=new zp.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:a,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:en,initialize:u=>v(void 0,null,function*(){var w,C;if(!n||!o)return"";let T=()=>_.getCurrentBlockHash();try{let S=(w=u==null?void 0:u.latestBlockInfo)!=null?w:yield bp(n,a,T,u==null?void 0:u.noCache);if(!S)return"";let{hash:F,timestamp:U}=S,$=_.encodeValue(JSON.stringify(f(f({},(C=u==null?void 0:u.extraInfo)!=null?C:s),U?{timestamp:U}:{})));return`${_.encodeValue(o)}.${F}.${r}.${$}`}catch(S){return console.error("Error getting native auth token: ",S.toString()),""}}),getToken:({address:u,token:T,signature:w})=>_.getToken(u,T,w),getTokenExpiration:jp}};var H_=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},Kp=e=>{let o=M(Qe),n=M(Wo),r=(0,qp.useRef)(n==null?void 0:n.loginToken),a=H_(o.apiAddress,e),s=en(f(f({},e===!0?{}:e),a?{apiAddress:a}:{})),m=Boolean(e),d=Cr(s),{address:_}=hr(),g=Hn(),y=C=>{r.current=C,g(Tn(f(k(f({},n),{loginToken:C}),a?{nativeAuthConfig:s}:{})))},u=()=>{try{return d.initialize()}catch(C){console.error("Unable to get block. Login failed.",C);return}},T=({address:C,signature:S})=>{let F=r.current;if(!F)throw"Token not found. Call `setLoginToken` first.";if(!m){g(Tn({loginToken:F,signature:S}));return}let U=d.getToken({address:C,token:F,signature:S});return g(Tn(f({loginToken:F,signature:S,nativeAuthToken:U},a?{nativeAuthConfig:s}:{}))),U};return{configuration:s,setLoginToken:y,getNativeAuthLoginToken:u,setTokenLoginInfo:T,refreshNativeAuthTokenLogin:F=>v(void 0,[F],function*({signMessageCallback:C,nativeAuthClientConfig:S}){let $=yield Cr(S||s).initialize({noCache:Boolean(S)});if(r.current=$,!$)return;let re=new nt.Message({address:new nt.Address(_),data:i.Buffer.from(`${_}${$}`)}),L=yield C(re,{});if(!(L!=null&&L.signature))throw"Message not signed";return T({address:_,signature:i.Buffer.from(L.signature).toString("hex")})})}};var Xp=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,logoutRoute:a,customRequestMethods:s=[]})=>{var Ao;let m=Hn(),d=rp(n),_=Kp(d?n:!1),g=o,[y,u]=(0,ne.useState)(""),[T,w]=(0,ne.useState)(""),[C,S]=(0,ne.useState)(!0),[F,U]=(0,ne.useState)([]),[$,re]=(0,ne.useState)(null),{provider:L}=Kc(),me=M(wc),de=M(Sc),Le=M(vc),bo=M(Cc),wo=M(yc),ao=M(hc),A=(0,ne.useRef)(L),Ge=(0,ne.useRef)(!1),je=(0,ne.useRef)(!1),nn=(Ao=a!=null?a:wo)!=null?Ao:"/",io=[Zn.CANCEL_ACTION,...s];o&&io.push(Zn.SIGN_LOGIN_TOKEN),d&&io.push(Zn.SIGN_NATIVE_AUTH_TOKEN);let it=C?"":`${bo}?wallet-connect=${encodeURIComponent(T)}`,So=Boolean(y),vo=yr(),tn=()=>{gp(nn)},ct=E=>{console.log("WalletConnect Session Event: ",E)},pt=()=>v(void 0,null,function*(){var E,N,W,z;try{if(Ge.current||A.current==null)return;if(!je.current){try{yield(E=A.current)==null?void 0:E.logout()}catch(mt){console.warn("Unable to logout")}return}let q=yield(W=(N=A.current)==null?void 0:N.getAddress)==null?void 0:W.call(N);if(!q){console.warn("Login cancelled.");return}let _e=yield(z=A.current)==null?void 0:z.getSignature(),ae={address:q,loginMethod:"walletconnectv2"},co={logoutRoute:nn,loginType:"walletconnectv2",callbackRoute:e!=null?e:V().href};m(pi(co)),_e&&_.setTokenLoginInfo({signature:_e,address:q}),m(Ze(ae)),yi({callbackRoute:e,onLoginRedirect:r,options:{address:q,signature:_e}})}catch(q){u("User rejected connection proposal"),console.error(q)}}),Co=()=>v(void 0,null,function*(){var N,W,z,q,_e;if(fe(A.current)==="walletconnectv2")try{((q=(z=(W=(N=A.current)==null?void 0:N.walletConnector)==null?void 0:W.session)==null?void 0:z.getAll())!=null?q:[]).length>0&&(yield(_e=A.current)==null?void 0:_e.logout()),A.current=qo,re(null)}catch(ae){console.warn("Unable to logout")}}),xe=E=>v(void 0,null,function*(){var N,W,z;if(!me||!de){u("Invalid WalletConnect setup");return}if(!E||!E.topic){u("Expired connection");return}try{if((A.current?fe(A.current):!1)!=="walletconnectv2"){yield te();return}if(S(!0),yield Co(),d&&!g&&(g=yield _.getNativeAuthLoginToken(),!g)){console.warn("Fetching block failed. Login cancelled.");return}g&&_.setLoginToken(g),yield te(!1);let{approval:_e}=yield(N=A.current)==null?void 0:N.connect({topic:E.topic,methods:io});try{yield(W=A.current)==null?void 0:W.login({approval:_e,token:g})}catch(ae){console.error("User rejected existing connection proposal",ae),u("User rejected existing connection proposal"),S(!0),yield te()}}catch(q){console.error("Unable to connect to existing session",q),u("Unable to connect to existing session")}finally{U((z=A.current)==null?void 0:z.pairings)}}),st=E=>v(void 0,null,function*(){var N,W;try{E&&(yield(N=A.current)==null?void 0:N.logout({topic:E}))}catch(z){console.error("Unable to remove existing pairing",z),u("Unable to remove existing pairing")}finally{let z=yield(W=A.current)==null?void 0:W.getPairings();U(z)}});function te(E=!0){return v(this,null,function*(){var co,mt,Dr;fp();let N=yield up({maxRetries:15});if(!N){console.error("Invalid chainID"),u("Invalid chainID");return}if(!de||!me){console.error("Invalid WalletConnect setup"),u("Invalid WalletConnect setup");return}let W=yr(),z=je.current===!1&&!W,q=(mt=(co=A.current)==null?void 0:co.isInitialized)==null?void 0:mt.call(co);if(Ge.current||z||q)return;if(Ge.current=!0,(Dr=A.current)!=null&&Dr.walletConnector){yield A.current.init(),re(A.current),Ge.current=!1,E&&(yield ko());return}let _e={onClientLogin:pt,onClientLogout:tn,onClientEvent:ct},ae=new Jn(_e,N,me,de,Le);yield ae.init(),re(ae),A.current=ae,Ge.current=!1,E&&(U(ae.pairings),yield ko())})}function ko(){return v(this,null,function*(){var E,N;if(!!A.current){if(!me||!de){u("Invalid WalletConnect setup");return}try{if(!je.current)return;let{uri:W,approval:z}=yield(E=A.current)==null?void 0:E.connect({methods:io});if(!Boolean(W))return;if(w(W),(Le==null?void 0:Le.logger)==="debug"&&console.log("WalletConnect uri: ",W),d&&!g&&(g=yield _.getNativeAuthLoginToken(),!g)){console.warn("Fetching block failed. Login cancelled.");return}if(g&&_.setLoginToken(g),(A.current?fe(A.current):!1)!=="walletconnectv2"){S(!0),yield te();return}try{yield(N=A.current)==null?void 0:N.login({approval:z,token:g})}catch(ae){console.error("User rejected connection proposal",ae),u("User rejected connection proposal"),S(!0)}}catch(W){console.error("Unable to connect",W)}}})}return Zc(()=>{A.current=L},[L]),(0,ne.useEffect)(()=>(je.current=!0,()=>{je.current=!1}),[]),(0,ne.useEffect)(()=>{S(!T)},[T]),(0,ne.useEffect)(()=>{if(!$)return;(Boolean($.session)||ao==="walletconnectv2")&&vo&&qc($)},[$,vo]),[te,{error:y,loginFailed:So,isLoading:C&&!So,isLoggedIn:vo&&!So},{uriDeepLink:it,walletConnectUri:T,cancelLogin:Co,connectExisting:xe,removeExistingPairing:st,wcPairings:F}]};t();t();P();t();t();t();var no=b(require("bignumber.js")),Yp=e=>{let o=new no.default(e).dividedBy(1e3).integerValue(no.default.ROUND_FLOOR),n=new no.default(o).dividedBy(60).integerValue(no.default.ROUND_FLOOR),r=new no.default(n).dividedBy(60).integerValue(no.default.ROUND_FLOOR),a=r.modulo(60).isGreaterThan(1),s=n.modulo(60).isGreaterThan(1),m=n.modulo(60).isLessThan(1);return a?`${r} hours`:s?`${n} minutes`:m?"less than 1 minute":`${n} minute`};var Zp=(e,o)=>{var s;let n=M(Wo),r=(s=n==null?void 0:n.loginToken)!=null?s:e;if(!r)return;let a=Jo(r);if(!!a)return{className:o,url:a.origin,duration:Yp(a.ttl*1e3)}};t();t();var He=b(require("react")),Qp=require("@fortawesome/react-fontawesome"),on=b(require("classnames"));var j_=({icon:e,title:o,action:n,iconClass:r,"data-testid":a,description:s,iconBgClass:m,iconSize:d="5x",className:_="dapp-page-state",globalStyles:g,styles:y})=>{let u=(0,He.useMemo)(()=>({wrapper:(0,on.default)(y==null?void 0:y.state,g==null?void 0:g.mAuto,g==null?void 0:g.p4,g==null?void 0:g.textCenter,_),iconContainer:(0,on.default)(g==null?void 0:g.iconState,g==null?void 0:g.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,on.default)(r!=null&&r),title:(0,on.default)(g==null?void 0:g.h4,g==null?void 0:g.my4),description:g==null?void 0:g.mb3}),[g,y,_,m,r]);return He.default.createElement("div",{className:u.wrapper,"data-testid":a},e&&He.default.createElement("span",{className:u.iconContainer},He.default.createElement(Qp.FontAwesomeIcon,{icon:e,className:u.iconClass,size:d})),o&&He.default.createElement("p",{className:u.title},o),s&&He.default.createElement("div",{className:u.description},s),n)},es=G(j_,{ssrStyles:()=>Promise.resolve().then(()=>(Ar(),kr)),clientStyles:()=>(Ar(),K(kr)).default});t();t();var j=b(require("react")),ns=require("@fortawesome/free-solid-svg-icons"),ts=require("@fortawesome/react-fontawesome"),Lr=b(require("classnames"));var q_=e=>{let{className:o,url:n,icon:r,authorizationInfo:a,styles:s}=e,m=n.replace("https://","").replace(/\/$/,""),d=a!=null&&a.url?a.url.replace("https://","").replace(/\/$/,""):"";return j.default.createElement(j.default.Fragment,null,j.default.createElement("p",{className:(0,Lr.default)(s==null?void 0:s.scamPhishingAlert,o)},r||j.default.createElement(ts.FontAwesomeIcon,{className:s==null?void 0:s.scamPhishingAlertIcon,icon:ns.faLock}),j.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertText},j.default.createElement("span",null,"Scam/Phishing verification:")," ",j.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertPrefix},j.default.createElement("strong",null,"https://"),m))),a&&a.url&&j.default.createElement("p",{className:(0,Lr.default)(s==null?void 0:s.scamPhishingAlert,s==null?void 0:s.scamPhishingAlertAuthorization,a.className)},j.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertText},"Please confirm that you are indeed connecting to"),j.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertText},j.default.createElement("strong",null,"https://"),j.default.createElement("span",null,d," for"),j.default.createElement("strong",{className:s==null?void 0:s.scamPhishingAlertAuthorizationDuration},a.duration)),j.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertText},"and that you trust this site. You might be sharing sensitive data."),j.default.createElement("a",{href:"https://multiversx.com/faq"},"Learn more")))},rs=G(q_,{ssrStyles:()=>Promise.resolve().then(()=>(Ir(),Pr)),clientStyles:()=>(Ir(),K(Pr)).default});t();var Er=b(require("platform"));function as(){var e,o,n,r;return((o=(e=Er.default)==null?void 0:e.os)==null?void 0:o.family)==="iOS"||((r=(n=Er.default)==null?void 0:n.os)==null?void 0:r.family)==="Android"}ge();t();t();var O=b(require("react")),rt=require("@fortawesome/free-solid-svg-icons"),Nr=require("@fortawesome/react-fontawesome"),We=b(require("classnames"));t();var Ue=b(require("react"));t();var tt=b(require("react")),K_=e=>tt.createElement("svg",f({width:235,height:235,viewBox:"0 0 235 235",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),tt.createElement("rect",{width:235,height:235,rx:72,fill:"#010101"}),tt.createElement("path",{d:"M126.493 117.923L200.962 78.0313L188.455 54L120.231 81.5772C118.479 82.2909 116.521 82.2909 114.769 81.5772L46.5451 54L34 78.1084L108.468 118L34 157.892L46.5451 182L114.769 154.211C116.521 153.497 118.479 153.497 120.231 154.211L188.455 181.865L201 157.757L126.493 117.923Z",fill:"#23F7DD"})),is=K_;var cs=n=>{var r=n,{src:e}=r,o=an(r,["src"]);var m;let[a,s]=(0,Ue.useState)(!1);return(0,Ue.useEffect)(()=>{s(!1)},[e]),Ue.default.createElement(Ue.default.Fragment,null,a?Ue.default.createElement(is,{className:(m=o==null?void 0:o.className)!=null?m:""}):Ue.default.createElement("img",f({onError:()=>{s(!0)},src:e},o)))};var Y_=({connectExisting:e,removeExistingPairing:o,activePairings:n,className:r="dapp-wallet-connect-pairing-list",pairingListClasses:a,styles:s})=>{let[m,d]=(0,O.useState)(""),{leadClassName:_,wrapperClassName:g,buttonClassName:y,iconClassName:u,loaderClassName:T,detailsClassName:w,removeClassName:C}=a||{};return(0,O.useEffect)(()=>{d("")},[n]),O.default.createElement("div",{className:(0,We.default)(s==null?void 0:s.xPortalPairings,r)},O.default.createElement("p",{className:(0,We.default)(s==null?void 0:s.xPortalPairingsLead,_)},"or choose an existing pairing:"),O.default.createElement("div",{className:(0,We.default)(s==null?void 0:s.xPortalPairingsList,g)},n.map(S=>{var F,U;return O.default.createElement("button",{type:"button",className:(0,We.default)(s==null?void 0:s.xPortalPairingButton,y),key:S.topic,onClick:()=>{e(S),d(S.topic)}},S.peerMetadata&&O.default.createElement(O.default.Fragment,null,m===S.topic?O.default.createElement(Nr.FontAwesomeIcon,{icon:rt.faCircleNotch,className:(0,We.default)("fa-spin","slow-spin",s==null?void 0:s.xPortalPairingLoader,T)}):O.default.createElement(O.default.Fragment,null,((U=(F=S.peerMetadata)==null?void 0:F.icons)==null?void 0:U[0])&&O.default.createElement(cs,{src:S.peerMetadata.icons[0],alt:S.peerMetadata.name,className:(0,We.default)(s==null?void 0:s.xPortalPairingImage,u)})),O.default.createElement("div",{className:(0,We.default)(s==null?void 0:s.xPortalPairingDetails,w)},O.default.createElement("strong",{className:s==null?void 0:s.xPortalPairingDetail},m===S.topic?`Confirm on ${S.peerMetadata.name}`:S.peerMetadata.name),O.default.createElement("span",{className:s==null?void 0:s.xPortalPairingDetail},S.peerMetadata.description),O.default.createElement("span",{className:s==null?void 0:s.xPortalPairingDetail},S.peerMetadata.url)),O.default.createElement("div",{className:(0,We.default)(s==null?void 0:s.xPortalPairingRemove,C),onClick:$=>{$.stopPropagation(),o(S.topic)}},O.default.createElement(Nr.FontAwesomeIcon,{icon:rt.faTimes}))))})))},ss=G(Y_,{ssrStyles:()=>Promise.resolve().then(()=>(ro(),to)),clientStyles:()=>(ro(),K(to)).default});var Z_=({callbackRoute:e,className:o="dapp-wallet-connect-login-modal",customSpinnerComponent:n,innerWalletConnectComponentsClasses:r,lead:a="Scan the QR code using the xPortal App",loginButtonText:s="xPortal App",logoutRoute:m,nativeAuth:d,onLoginRedirect:_,showScamPhishingAlert:g=!0,title:y="Login with the xPortal App",token:u,globalStyles:T,styles:w,customRequestMethods:C=[]})=>{var Co;let[S,{error:F,isLoading:U},{connectExisting:$,removeExistingPairing:re,uriDeepLink:L,walletConnectUri:me,wcPairings:de}]=Xp({callbackRoute:e,token:u,nativeAuth:d,onLoginRedirect:_,logoutRoute:m,customRequestMethods:C}),[Le,bo]=(0,B.useState)(""),{containerContentClassName:wo,containerScamPhishingAlertClassName:ao,containerTitleClassName:A,containerSubtitleClassName:Ge,containerErrorClassName:je,containerQrCodeClassName:nn,containerLoaderClassName:io,containerButtonClassName:it,walletConnectPairingListClassNames:So}=r||{},vo=as(),tn=(Co=de==null?void 0:de.filter(xe=>{let st=de.some(te=>{var ko,Ao,E,N;return((ko=xe.peerMetadata)==null?void 0:ko.name)===((Ao=te==null?void 0:te.peerMetadata)==null?void 0:Ao.name)&&((E=xe.peerMetadata)==null?void 0:E.url)===((N=te==null?void 0:te.peerMetadata)==null?void 0:N.url)&&xe.expiry<te.expiry});return Boolean(xe.active)&&xe.peerMetadata&&!st}))!=null?Co:[],ct=()=>v(void 0,null,function*(){if(!me)return;let xe=yield ds.default.toString(me,{type:"svg"});xe&&bo(xe)});(0,B.useEffect)(()=>{ct()},[me]),(0,B.useEffect)(()=>{S()},[]);let pt=g?Zp(u,ao):void 0;return B.default.createElement(B.default.Fragment,null,g&&B.default.createElement(rs,{url:V().origin,authorizationInfo:pt,className:ao}),B.default.createElement("div",{className:(0,Ve.default)(w==null?void 0:w.xPortalContent,wo)},B.default.createElement("div",{className:(0,Ve.default)(w==null?void 0:w.xPortalContainerHeading,A)},y),B.default.createElement("div",{className:(0,Ve.default)(w==null?void 0:w.xPortalContainerSubheading,Ge)},a),B.default.createElement("div",null,F&&B.default.createElement("p",{className:(0,Ve.default)(w==null?void 0:w.xPortalContainerError,je)},F)),U||!Le?B.default.createElement("div",{className:(0,Ve.default)(w==null?void 0:w.xPortalLoader,io)},n||B.default.createElement(es,{iconSize:"10x",icon:ms.faCircleNotch,iconClass:(0,Ve.default)("fa-spin",T==null?void 0:T.textPrimary)})):B.default.createElement("div",{className:(0,Ve.default)(w==null?void 0:w.xPortalQrCode,nn),dangerouslySetInnerHTML:{__html:Le}}),vo&&B.default.createElement("a",{id:"accessWalletBtn","data-testid":"accessWalletBtn",href:L,rel:"noopener noreferrer nofollow",target:"_blank",className:(0,Ve.default)(T==null?void 0:T.btn,T==null?void 0:T.btnPrimary,w==null?void 0:w.xPortalContainerButton,it)},B.default.createElement(qa,{className:w==null?void 0:w.xPortalContainerButtonIcon}),s),tn.length>0&&B.default.createElement(ss,{activePairings:tn,connectExisting:$,removeExistingPairing:re,className:o,pairingListClasses:So})))},Rr=G(Z_,{ssrStyles:()=>Promise.resolve().then(()=>(ro(),to)),clientStyles:()=>(ro(),K(to)).default});var J_=e=>{let{className:o,onClose:n,showLoginContent:r,showLoginModal:a,wrapContentInsideModal:s,styles:m}=e,d=()=>{n==null||n()};return r===!1?null:s?at.default.createElement(Ut,{className:o,modalConfig:{headerText:"Login using the xPortal App",showHeader:!0,modalContentClassName:m==null?void 0:m.xPortalModalDialogContent,modalHeaderClassName:m==null?void 0:m.xPortalModalHeader,modalHeaderTextClassName:m==null?void 0:m.xPortalModalHeaderText,modalCloseButtonClassName:m==null?void 0:m.xPortalModalCloseButton,modalBodyClassName:m==null?void 0:m.xPortalModalBody,modalDialogClassName:m==null?void 0:m.xPortalLoginContainer},onClose:d,visible:a},at.default.createElement(Rr,f({},e))):at.default.createElement(Rr,f({},e))},Q_=G(J_,{ssrStyles:()=>Promise.resolve().then(()=>(ro(),to)),clientStyles:()=>(ro(),K(to)).default});t();0&&(module.exports={WalletConnectLoginContainer});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
