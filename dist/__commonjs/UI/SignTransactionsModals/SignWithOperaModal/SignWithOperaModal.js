"use strict";var ir=Object.create;var _e=Object.defineProperty,cr=Object.defineProperties,_r=Object.getOwnPropertyDescriptor,mr=Object.getOwnPropertyDescriptors,dr=Object.getOwnPropertyNames,rn=Object.getOwnPropertySymbols,sr=Object.getPrototypeOf,cn=Object.prototype.hasOwnProperty,lr=Object.prototype.propertyIsEnumerable;var pn=(o,e,n)=>e in o?_e(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,x=(o,e)=>{for(var n in e||(e={}))cn.call(e,n)&&pn(o,n,e[n]);if(rn)for(var n of rn(e))lr.call(e,n)&&pn(o,n,e[n]);return o},I=(o,e)=>cr(o,mr(e));var u=(o,e)=>()=>(o&&(e=o(o=0)),e);var we=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),B=(o,e)=>{for(var n in e)_e(o,n,{get:e[n],enumerable:!0})},_n=(o,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of dr(e))!cn.call(o,a)&&a!==n&&_e(o,a,{get:()=>e[a],enumerable:!(t=_r(e,a))||t.enumerable});return o};var b=(o,e,n)=>(n=o!=null?ir(sr(o)):{},_n(e||!o||!o.__esModule?_e(n,"default",{value:o,enumerable:!0}):n,o)),C=o=>_n(_e({},"__esModule",{value:!0}),o);var po=(o,e,n)=>new Promise((t,a)=>{var i=_=>{try{l(n.next(_))}catch(g){a(g)}},p=_=>{try{l(n.throw(_))}catch(g){a(g)}},l=_=>_.done?t(_.value):Promise.resolve(_.value).then(i,p);l((n=n.apply(o,e)).next())});var sn=we(Te=>{"use strict";r();Te.byteLength=ur;Te.toByteArray=hr;Te.fromByteArray=yr;var F=[],L=[],gr=typeof Uint8Array!="undefined"?Uint8Array:Array,io="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Y=0,mn=io.length;Y<mn;++Y)F[Y]=io[Y],L[io.charCodeAt(Y)]=Y;var Y,mn;L["-".charCodeAt(0)]=62;L["_".charCodeAt(0)]=63;function dn(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=o.indexOf("=");n===-1&&(n=e);var t=n===e?0:4-n%4;return[n,t]}function ur(o){var e=dn(o),n=e[0],t=e[1];return(n+t)*3/4-t}function fr(o,e,n){return(e+n)*3/4-n}function hr(o){var e,n=dn(o),t=n[0],a=n[1],i=new gr(fr(o,t,a)),p=0,l=a>0?t-4:t,_;for(_=0;_<l;_+=4)e=L[o.charCodeAt(_)]<<18|L[o.charCodeAt(_+1)]<<12|L[o.charCodeAt(_+2)]<<6|L[o.charCodeAt(_+3)],i[p++]=e>>16&255,i[p++]=e>>8&255,i[p++]=e&255;return a===2&&(e=L[o.charCodeAt(_)]<<2|L[o.charCodeAt(_+1)]>>4,i[p++]=e&255),a===1&&(e=L[o.charCodeAt(_)]<<10|L[o.charCodeAt(_+1)]<<4|L[o.charCodeAt(_+2)]>>2,i[p++]=e>>8&255,i[p++]=e&255),i}function xr(o){return F[o>>18&63]+F[o>>12&63]+F[o>>6&63]+F[o&63]}function br(o,e,n){for(var t,a=[],i=e;i<n;i+=3)t=(o[i]<<16&16711680)+(o[i+1]<<8&65280)+(o[i+2]&255),a.push(xr(t));return a.join("")}function yr(o){for(var e,n=o.length,t=n%3,a=[],i=16383,p=0,l=n-t;p<l;p+=i)a.push(br(o,p,p+i>l?l:p+i));return t===1?(e=o[n-1],a.push(F[e>>2]+F[e<<4&63]+"==")):t===2&&(e=(o[n-2]<<8)+o[n-1],a.push(F[e>>10]+F[e>>4&63]+F[e<<2&63]+"=")),a.join("")}});var ln=we(co=>{r();co.read=function(o,e,n,t,a){var i,p,l=a*8-t-1,_=(1<<l)-1,g=_>>1,h=-7,f=n?a-1:0,T=n?-1:1,S=o[e+f];for(f+=T,i=S&(1<<-h)-1,S>>=-h,h+=l;h>0;i=i*256+o[e+f],f+=T,h-=8);for(p=i&(1<<-h)-1,i>>=-h,h+=t;h>0;p=p*256+o[e+f],f+=T,h-=8);if(i===0)i=1-g;else{if(i===_)return p?NaN:(S?-1:1)*(1/0);p=p+Math.pow(2,t),i=i-g}return(S?-1:1)*p*Math.pow(2,i-t)};co.write=function(o,e,n,t,a,i){var p,l,_,g=i*8-a-1,h=(1<<g)-1,f=h>>1,T=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,S=t?0:i-1,E=t?1:-1,ee=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,p=h):(p=Math.floor(Math.log(e)/Math.LN2),e*(_=Math.pow(2,-p))<1&&(p--,_*=2),p+f>=1?e+=T/_:e+=T*Math.pow(2,1-f),e*_>=2&&(p++,_/=2),p+f>=h?(l=0,p=h):p+f>=1?(l=(e*_-1)*Math.pow(2,a),p=p+f):(l=e*Math.pow(2,f-1)*Math.pow(2,a),p=0));a>=8;o[n+S]=l&255,S+=E,l/=256,a-=8);for(p=p<<a|l,g+=a;g>0;o[n+S]=p&255,S+=E,p/=256,g-=8);o[n+S-E]|=ee*128}});var An=we(ne=>{"use strict";r();var _o=sn(),oe=ln(),gn=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ne.Buffer=c;ne.SlowBuffer=Ar;ne.INSPECT_MAX_BYTES=50;var Se=2147483647;ne.kMaxLength=Se;c.TYPED_ARRAY_SUPPORT=wr();!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function wr(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(n){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.buffer}});Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.byteOffset}});function G(o){if(o>Se)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,c.prototype),e}function c(o,e,n){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return go(o)}return hn(o,e,n)}c.poolSize=8192;function hn(o,e,n){if(typeof o=="string")return Sr(o,e);if(ArrayBuffer.isView(o))return vr(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(D(o,ArrayBuffer)||o&&D(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(D(o,SharedArrayBuffer)||o&&D(o.buffer,SharedArrayBuffer)))return so(o,e,n);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=o.valueOf&&o.valueOf();if(t!=null&&t!==o)return c.from(t,e,n);var a=kr(o);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return c.from(o[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}c.from=function(o,e,n){return hn(o,e,n)};Object.setPrototypeOf(c.prototype,Uint8Array.prototype);Object.setPrototypeOf(c,Uint8Array);function xn(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function Tr(o,e,n){return xn(o),o<=0?G(o):e!==void 0?typeof n=="string"?G(o).fill(e,n):G(o).fill(e):G(o)}c.alloc=function(o,e,n){return Tr(o,e,n)};function go(o){return xn(o),G(o<0?0:uo(o)|0)}c.allocUnsafe=function(o){return go(o)};c.allocUnsafeSlow=function(o){return go(o)};function Sr(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!c.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=bn(o,e)|0,t=G(n),a=t.write(o,e);return a!==n&&(t=t.slice(0,a)),t}function mo(o){for(var e=o.length<0?0:uo(o.length)|0,n=G(e),t=0;t<e;t+=1)n[t]=o[t]&255;return n}function vr(o){if(D(o,Uint8Array)){var e=new Uint8Array(o);return so(e.buffer,e.byteOffset,e.byteLength)}return mo(o)}function so(o,e,n){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var t;return e===void 0&&n===void 0?t=new Uint8Array(o):n===void 0?t=new Uint8Array(o,e):t=new Uint8Array(o,e,n),Object.setPrototypeOf(t,c.prototype),t}function kr(o){if(c.isBuffer(o)){var e=uo(o.length)|0,n=G(e);return n.length===0||o.copy(n,0,0,e),n}if(o.length!==void 0)return typeof o.length!="number"||fo(o.length)?G(0):mo(o);if(o.type==="Buffer"&&Array.isArray(o.data))return mo(o.data)}function uo(o){if(o>=Se)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Se.toString(16)+" bytes");return o|0}function Ar(o){return+o!=o&&(o=0),c.alloc(+o)}c.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==c.prototype};c.compare=function(e,n){if(D(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),D(n,Uint8Array)&&(n=c.from(n,n.offset,n.byteLength)),!c.isBuffer(e)||!c.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;for(var t=e.length,a=n.length,i=0,p=Math.min(t,a);i<p;++i)if(e[i]!==n[i]){t=e[i],a=n[i];break}return t<a?-1:a<t?1:0};c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};c.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return c.alloc(0);var t;if(n===void 0)for(n=0,t=0;t<e.length;++t)n+=e[t].length;var a=c.allocUnsafe(n),i=0;for(t=0;t<e.length;++t){var p=e[t];if(D(p,Uint8Array))i+p.length>a.length?c.from(p).copy(a,i):Uint8Array.prototype.set.call(a,p,i);else if(c.isBuffer(p))p.copy(a,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return a};function bn(o,e){if(c.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||D(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var n=o.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&n===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return lo(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return kn(o).length;default:if(a)return t?-1:lo(o).length;e=(""+e).toLowerCase(),a=!0}}c.byteLength=bn;function Ir(o,e,n){var t=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return Dr(this,e,n);case"utf8":case"utf-8":return wn(this,e,n);case"ascii":return Pr(this,e,n);case"latin1":case"binary":return Fr(this,e,n);case"base64":return Mr(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Wr(this,e,n);default:if(t)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),t=!0}}c.prototype._isBuffer=!0;function J(o,e,n){var t=o[e];o[e]=o[n],o[n]=t}c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<e;n+=2)J(this,n,n+1);return this};c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<e;n+=4)J(this,n,n+3),J(this,n+1,n+2);return this};c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<e;n+=8)J(this,n,n+7),J(this,n+1,n+6),J(this,n+2,n+5),J(this,n+3,n+4);return this};c.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?wn(this,0,e):Ir.apply(this,arguments)};c.prototype.toLocaleString=c.prototype.toString;c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:c.compare(this,e)===0};c.prototype.inspect=function(){var e="",n=ne.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};gn&&(c.prototype[gn]=c.prototype.inspect);c.prototype.compare=function(e,n,t,a,i){if(D(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),t===void 0&&(t=e?e.length:0),a===void 0&&(a=0),i===void 0&&(i=this.length),n<0||t>e.length||a<0||i>this.length)throw new RangeError("out of range index");if(a>=i&&n>=t)return 0;if(a>=i)return-1;if(n>=t)return 1;if(n>>>=0,t>>>=0,a>>>=0,i>>>=0,this===e)return 0;for(var p=i-a,l=t-n,_=Math.min(p,l),g=this.slice(a,i),h=e.slice(n,t),f=0;f<_;++f)if(g[f]!==h[f]){p=g[f],l=h[f];break}return p<l?-1:l<p?1:0};function yn(o,e,n,t,a){if(o.length===0)return-1;if(typeof n=="string"?(t=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,fo(n)&&(n=a?0:o.length-1),n<0&&(n=o.length+n),n>=o.length){if(a)return-1;n=o.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof e=="string"&&(e=c.from(e,t)),c.isBuffer(e))return e.length===0?-1:un(o,e,n,t,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(o,e,n):Uint8Array.prototype.lastIndexOf.call(o,e,n):un(o,[e],n,t,a);throw new TypeError("val must be string, number or Buffer")}function un(o,e,n,t,a){var i=1,p=o.length,l=e.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(o.length<2||e.length<2)return-1;i=2,p/=2,l/=2,n/=2}function _(S,E){return i===1?S[E]:S.readUInt16BE(E*i)}var g;if(a){var h=-1;for(g=n;g<p;g++)if(_(o,g)===_(e,h===-1?0:g-h)){if(h===-1&&(h=g),g-h+1===l)return h*i}else h!==-1&&(g-=g-h),h=-1}else for(n+l>p&&(n=p-l),g=n;g>=0;g--){for(var f=!0,T=0;T<l;T++)if(_(o,g+T)!==_(e,T)){f=!1;break}if(f)return g}return-1}c.prototype.includes=function(e,n,t){return this.indexOf(e,n,t)!==-1};c.prototype.indexOf=function(e,n,t){return yn(this,e,n,t,!0)};c.prototype.lastIndexOf=function(e,n,t){return yn(this,e,n,t,!1)};function Cr(o,e,n,t){n=Number(n)||0;var a=o.length-n;t?(t=Number(t),t>a&&(t=a)):t=a;var i=e.length;t>i/2&&(t=i/2);for(var p=0;p<t;++p){var l=parseInt(e.substr(p*2,2),16);if(fo(l))return p;o[n+p]=l}return p}function Lr(o,e,n,t){return ve(lo(e,o.length-n),o,n,t)}function Rr(o,e,n,t){return ve(Gr(e),o,n,t)}function Nr(o,e,n,t){return ve(kn(e),o,n,t)}function Er(o,e,n,t){return ve(zr(e,o.length-n),o,n,t)}c.prototype.write=function(e,n,t,a){if(n===void 0)a="utf8",t=this.length,n=0;else if(t===void 0&&typeof n=="string")a=n,t=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(t)?(t=t>>>0,a===void 0&&(a="utf8")):(a=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-n;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var p=!1;;)switch(a){case"hex":return Cr(this,e,n,t);case"utf8":case"utf-8":return Lr(this,e,n,t);case"ascii":case"latin1":case"binary":return Rr(this,e,n,t);case"base64":return Nr(this,e,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Er(this,e,n,t);default:if(p)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),p=!0}};c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Mr(o,e,n){return e===0&&n===o.length?_o.fromByteArray(o):_o.fromByteArray(o.slice(e,n))}function wn(o,e,n){n=Math.min(o.length,n);for(var t=[],a=e;a<n;){var i=o[a],p=null,l=i>239?4:i>223?3:i>191?2:1;if(a+l<=n){var _,g,h,f;switch(l){case 1:i<128&&(p=i);break;case 2:_=o[a+1],(_&192)===128&&(f=(i&31)<<6|_&63,f>127&&(p=f));break;case 3:_=o[a+1],g=o[a+2],(_&192)===128&&(g&192)===128&&(f=(i&15)<<12|(_&63)<<6|g&63,f>2047&&(f<55296||f>57343)&&(p=f));break;case 4:_=o[a+1],g=o[a+2],h=o[a+3],(_&192)===128&&(g&192)===128&&(h&192)===128&&(f=(i&15)<<18|(_&63)<<12|(g&63)<<6|h&63,f>65535&&f<1114112&&(p=f))}}p===null?(p=65533,l=1):p>65535&&(p-=65536,t.push(p>>>10&1023|55296),p=56320|p&1023),t.push(p),a+=l}return Br(t)}var fn=4096;function Br(o){var e=o.length;if(e<=fn)return String.fromCharCode.apply(String,o);for(var n="",t=0;t<e;)n+=String.fromCharCode.apply(String,o.slice(t,t+=fn));return n}function Pr(o,e,n){var t="";n=Math.min(o.length,n);for(var a=e;a<n;++a)t+=String.fromCharCode(o[a]&127);return t}function Fr(o,e,n){var t="";n=Math.min(o.length,n);for(var a=e;a<n;++a)t+=String.fromCharCode(o[a]);return t}function Dr(o,e,n){var t=o.length;(!e||e<0)&&(e=0),(!n||n<0||n>t)&&(n=t);for(var a="",i=e;i<n;++i)a+=Hr[o[i]];return a}function Wr(o,e,n){for(var t=o.slice(e,n),a="",i=0;i<t.length-1;i+=2)a+=String.fromCharCode(t[i]+t[i+1]*256);return a}c.prototype.slice=function(e,n){var t=this.length;e=~~e,n=n===void 0?t:~~n,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),n<0?(n+=t,n<0&&(n=0)):n>t&&(n=t),n<e&&(n=e);var a=this.subarray(e,n);return Object.setPrototypeOf(a,c.prototype),a};function v(o,e,n){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>n)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(e,n,t){e=e>>>0,n=n>>>0,t||v(e,n,this.length);for(var a=this[e],i=1,p=0;++p<n&&(i*=256);)a+=this[e+p]*i;return a};c.prototype.readUintBE=c.prototype.readUIntBE=function(e,n,t){e=e>>>0,n=n>>>0,t||v(e,n,this.length);for(var a=this[e+--n],i=1;n>0&&(i*=256);)a+=this[e+--n]*i;return a};c.prototype.readUint8=c.prototype.readUInt8=function(e,n){return e=e>>>0,n||v(e,1,this.length),this[e]};c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||v(e,2,this.length),this[e]|this[e+1]<<8};c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||v(e,2,this.length),this[e]<<8|this[e+1]};c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||v(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||v(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};c.prototype.readIntLE=function(e,n,t){e=e>>>0,n=n>>>0,t||v(e,n,this.length);for(var a=this[e],i=1,p=0;++p<n&&(i*=256);)a+=this[e+p]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*n)),a};c.prototype.readIntBE=function(e,n,t){e=e>>>0,n=n>>>0,t||v(e,n,this.length);for(var a=n,i=1,p=this[e+--a];a>0&&(i*=256);)p+=this[e+--a]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*n)),p};c.prototype.readInt8=function(e,n){return e=e>>>0,n||v(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};c.prototype.readInt16LE=function(e,n){e=e>>>0,n||v(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t};c.prototype.readInt16BE=function(e,n){e=e>>>0,n||v(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t};c.prototype.readInt32LE=function(e,n){return e=e>>>0,n||v(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};c.prototype.readInt32BE=function(e,n){return e=e>>>0,n||v(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};c.prototype.readFloatLE=function(e,n){return e=e>>>0,n||v(e,4,this.length),oe.read(this,e,!0,23,4)};c.prototype.readFloatBE=function(e,n){return e=e>>>0,n||v(e,4,this.length),oe.read(this,e,!1,23,4)};c.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||v(e,8,this.length),oe.read(this,e,!0,52,8)};c.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||v(e,8,this.length),oe.read(this,e,!1,52,8)};function k(o,e,n,t,a,i){if(!c.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<i)throw new RangeError('"value" argument is out of bounds');if(n+t>o.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,n,t,a){if(e=+e,n=n>>>0,t=t>>>0,!a){var i=Math.pow(2,8*t)-1;k(this,e,n,t,i,0)}var p=1,l=0;for(this[n]=e&255;++l<t&&(p*=256);)this[n+l]=e/p&255;return n+t};c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,n,t,a){if(e=+e,n=n>>>0,t=t>>>0,!a){var i=Math.pow(2,8*t)-1;k(this,e,n,t,i,0)}var p=t-1,l=1;for(this[n+p]=e&255;--p>=0&&(l*=256);)this[n+p]=e/l&255;return n+t};c.prototype.writeUint8=c.prototype.writeUInt8=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,1,255,0),this[n]=e&255,n+1};c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};c.prototype.writeIntLE=function(e,n,t,a){if(e=+e,n=n>>>0,!a){var i=Math.pow(2,8*t-1);k(this,e,n,t,i-1,-i)}var p=0,l=1,_=0;for(this[n]=e&255;++p<t&&(l*=256);)e<0&&_===0&&this[n+p-1]!==0&&(_=1),this[n+p]=(e/l>>0)-_&255;return n+t};c.prototype.writeIntBE=function(e,n,t,a){if(e=+e,n=n>>>0,!a){var i=Math.pow(2,8*t-1);k(this,e,n,t,i-1,-i)}var p=t-1,l=1,_=0;for(this[n+p]=e&255;--p>=0&&(l*=256);)e<0&&_===0&&this[n+p+1]!==0&&(_=1),this[n+p]=(e/l>>0)-_&255;return n+t};c.prototype.writeInt8=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};c.prototype.writeInt16LE=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};c.prototype.writeInt16BE=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};c.prototype.writeInt32LE=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};c.prototype.writeInt32BE=function(e,n,t){return e=+e,n=n>>>0,t||k(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function Tn(o,e,n,t,a,i){if(n+t>o.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Sn(o,e,n,t,a){return e=+e,n=n>>>0,a||Tn(o,e,n,4,34028234663852886e22,-34028234663852886e22),oe.write(o,e,n,t,23,4),n+4}c.prototype.writeFloatLE=function(e,n,t){return Sn(this,e,n,!0,t)};c.prototype.writeFloatBE=function(e,n,t){return Sn(this,e,n,!1,t)};function vn(o,e,n,t,a){return e=+e,n=n>>>0,a||Tn(o,e,n,8,17976931348623157e292,-17976931348623157e292),oe.write(o,e,n,t,52,8),n+8}c.prototype.writeDoubleLE=function(e,n,t){return vn(this,e,n,!0,t)};c.prototype.writeDoubleBE=function(e,n,t){return vn(this,e,n,!1,t)};c.prototype.copy=function(e,n,t,a){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!a&&a!==0&&(a=this.length),n>=e.length&&(n=e.length),n||(n=0),a>0&&a<t&&(a=t),a===t||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-n<a-t&&(a=e.length-n+t);var i=a-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,t,a):Uint8Array.prototype.set.call(e,this.subarray(t,a),n),i};c.prototype.fill=function(e,n,t,a){if(typeof e=="string"){if(typeof n=="string"?(a=n,n=0,t=this.length):typeof t=="string"&&(a=t,t=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!c.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var i=e.charCodeAt(0);(a==="utf8"&&i<128||a==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<t)throw new RangeError("Out of range index");if(t<=n)return this;n=n>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=n;p<t;++p)this[p]=e;else{var l=c.isBuffer(e)?e:c.from(e,a),_=l.length;if(_===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-n;++p)this[p+n]=l[p%_]}return this};var Or=/[^+/0-9A-Za-z-_]/g;function Ur(o){if(o=o.split("=")[0],o=o.trim().replace(Or,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function lo(o,e){e=e||1/0;for(var n,t=o.length,a=null,i=[],p=0;p<t;++p){if(n=o.charCodeAt(p),n>55295&&n<57344){if(!a){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(p+1===t){(e-=3)>-1&&i.push(239,191,189);continue}a=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(e-=3)>-1&&i.push(239,191,189);if(a=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return i}function Gr(o){for(var e=[],n=0;n<o.length;++n)e.push(o.charCodeAt(n)&255);return e}function zr(o,e){for(var n,t,a,i=[],p=0;p<o.length&&!((e-=2)<0);++p)n=o.charCodeAt(p),t=n>>8,a=n%256,i.push(a),i.push(t);return i}function kn(o){return _o.toByteArray(Ur(o))}function ve(o,e,n,t){for(var a=0;a<t&&!(a+n>=e.length||a>=o.length);++a)e[a+n]=o[a];return a}function D(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function fo(o){return o!==o}var Hr=function(){for(var o="0123456789abcdef",e=new Array(256),n=0;n<16;++n)for(var t=n*16,a=0;a<16;++a)e[t+a]=o[n]+o[a];return e}()});var Nn=we((mi,Rn)=>{r();var y=Rn.exports={},W,O;function ho(){throw new Error("setTimeout has not been defined")}function xo(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?W=setTimeout:W=ho}catch(o){W=ho}try{typeof clearTimeout=="function"?O=clearTimeout:O=xo}catch(o){O=xo}})();function In(o){if(W===setTimeout)return setTimeout(o,0);if((W===ho||!W)&&setTimeout)return W=setTimeout,setTimeout(o,0);try{return W(o,0)}catch(e){try{return W.call(null,o,0)}catch(n){return W.call(this,o,0)}}}function jr(o){if(O===clearTimeout)return clearTimeout(o);if((O===xo||!O)&&clearTimeout)return O=clearTimeout,clearTimeout(o);try{return O(o)}catch(e){try{return O.call(null,o)}catch(n){return O.call(this,o)}}}var z=[],te=!1,$,ke=-1;function Vr(){!te||!$||(te=!1,$.length?z=$.concat(z):ke=-1,z.length&&Cn())}function Cn(){if(!te){var o=In(Vr);te=!0;for(var e=z.length;e;){for($=z,z=[];++ke<e;)$&&$[ke].run();ke=-1,e=z.length}$=null,te=!1,jr(o)}}y.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];z.push(new Ln(o,e)),z.length===1&&!te&&In(Cn)};function Ln(o,e){this.fun=o,this.array=e}Ln.prototype.run=function(){this.fun.apply(null,this.array)};y.title="browser";y.browser=!0;y.env={};y.argv=[];y.version="";y.versions={};function H(){}y.on=H;y.addListener=H;y.once=H;y.off=H;y.removeListener=H;y.removeAllListeners=H;y.emit=H;y.prependListener=H;y.prependOnceListener=H;y.listeners=function(o){return[]};y.binding=function(o){throw new Error("process.binding is not supported")};y.cwd=function(){return"/"};y.chdir=function(o){throw new Error("process.chdir is not supported")};y.umask=function(){return 0}});var m,d,di,r=u(()=>{m=b(An()),d=b(Nn()),di=function(o){function e(){var t=this||self;return delete o.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var n=__magic__;return n}(Object)});var En=u(()=>{"use strict";r()});var Mn,bo=u(()=>{"use strict";r();Mn="Transaction canceled"});var Bn=u(()=>{"use strict";r()});var Pn=u(()=>{"use strict";r()});var Fn=u(()=>{"use strict";r()});var yo=u(()=>{"use strict";r()});var Dn=u(()=>{"use strict";r()});var Wn=u(()=>{"use strict";r()});var On=u(()=>{"use strict";r()});var Un=u(()=>{"use strict";r()});var qr,ae,Gn=u(()=>{"use strict";r();qr=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),ae=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var zn,Si,Hn,vi,me=u(()=>{"use strict";r();Gn();zn=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(zn||{}),Si=x(x({},ae.WindowProviderRequestEnums),zn),Hn=(e=>(e.reloginResponse="RELOGIN_RESPONSE",e))(Hn||{}),vi=x(x({},ae.WindowProviderResponseEnums),Hn)});var jn=u(()=>{"use strict";r()});var Vn=u(()=>{"use strict";r()});var qn=u(()=>{"use strict";r()});var Xn=u(()=>{"use strict";r()});var Kn=u(()=>{"use strict";r()});var Yn=u(()=>{"use strict";r()});var Ae=u(()=>{"use strict";r();Wn();On();Un();me();jn();Vn();qn();Xn();Kn();Yn()});var wo,Jn,Gi,$n,zi,Zn,Hi,ji,Vi,Qn=u(()=>{"use strict";r();Ae();wo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Jn,egldLabel:Gi}=wo["devnet"],{chainId:$n,egldLabel:zi}=wo["testnet"],{chainId:Zn,egldLabel:Hi}=wo["mainnet"],ji={["devnet"]:Jn,["testnet"]:$n,["mainnet"]:Zn},Vi={[Jn]:"devnet",[$n]:"testnet",[Zn]:"mainnet"}});var To=u(()=>{"use strict";r()});var U,et=u(()=>{"use strict";r();U=require("@multiversx/sdk-web-wallet-provider")});var Ie,So=u(()=>{"use strict";r();Ie=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ot,nt,vo,$i,Zi,tt=u(()=>{"use strict";r();So();vo=String((nt=(ot=Ie.safeWindow)==null?void 0:ot.navigator)==null?void 0:nt.userAgent),$i=/^((?!chrome|android).)*safari/i.test(vo),Zi=/firefox/i.test(vo)&&/windows/i.test(vo)});var Ce,at,rt,re=u(()=>{"use strict";r();En();bo();Bn();Pn();Fn();yo();Dn();Qn();To();et();tt();Ce="logout",at="login",rt="0"});var ko,Ao=u(()=>{"use strict";r();ko=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Io={};B(Io,{css:()=>it,default:()=>Xr});var it,Xr,Co=u(()=>{"use strict";r();it=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(it));Xr={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Le,Ro=u(()=>{"use strict";r();Le=()=>Date.now()/1e3});var mt=u(()=>{"use strict";r()});var dt=u(()=>{"use strict";r()});var st=u(()=>{"use strict";r();Ro();mt();dt()});var No={};B(No,{clear:()=>Qr,getItem:()=>$r,localStorageKeys:()=>Z,removeItem:()=>Zr,setItem:()=>Jr});var Z,Re,Jr,$r,Zr,Qr,se=u(()=>{"use strict";r();st();Z={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Re=typeof localStorage!="undefined",Jr=({key:o,data:e,expires:n})=>{!Re||localStorage.setItem(String(o),JSON.stringify({expires:n,data:e}))},$r=o=>{if(!Re)return;let e=localStorage.getItem(String(o));if(!e)return null;let n=JSON.parse(e);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Le()>=n.expires?(localStorage.removeItem(String(o)),null):n.data},Zr=o=>{!Re||localStorage.removeItem(String(o))},Qr=()=>{!Re||localStorage.clear()}});var Eo={};B(Eo,{clear:()=>ft,getItem:()=>gt,removeItem:()=>ut,setItem:()=>lt,storage:()=>ep});var lt,gt,ut,ft,ep,ht=u(()=>{"use strict";r();lt=({key:o,data:e,expires:n})=>{sessionStorage.setItem(String(o),JSON.stringify({expires:n,data:e}))},gt=o=>{let e=sessionStorage.getItem(String(o));if(!e)return null;let n=JSON.parse(e);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(o)),null):n.data},ut=o=>sessionStorage.removeItem(String(o)),ft=()=>sessionStorage.clear(),ep={setItem:lt,getItem:gt,removeItem:ut,clear:ft}});var pe,Ne=u(()=>{"use strict";r();se();ht();pe={session:Eo,local:No}});var Mo,w,Ee,P=u(()=>{"use strict";r();Mo=require("@reduxjs/toolkit");re();w=(0,Mo.createAction)(Ce),Ee=(0,Mo.createAction)(at,o=>({payload:o}))});var Po,xt,bt,yt,Bo,wt,Tt,Dc,St,Wc,Oc,Uc,Gc,zc,Hc,jc,Vc,Me,Be=u(()=>{"use strict";r();Po=require("@multiversx/sdk-core"),xt=require("@reduxjs/toolkit"),bt=require("redux-persist");re();Ne();se();P();yt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:rt},Bo={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":yt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},wt=(0,xt.createSlice)({name:"accountInfoSlice",initialState:Bo,reducers:{setAddress:(o,e)=>{let n=e.payload;o.address=n,o.publicKey=n?new Po.Address(n).hex():""},setAccount:(o,e)=>{let n=o.address===e.payload.address;o.accounts={[o.address]:n?e.payload:yt},o.shard=e.payload.shard,o.isAccountLoading=!1,o.accountLoadingError=null},setAccountNonce:(o,e)=>{let{address:n}=o;o.accounts[n].nonce=e.payload},setAccountShard:(o,e)=>{o.shard=e.payload},setLedgerAccount:(o,e)=>{o.ledgerAccount=e.payload},updateLedgerAccount:(o,e)=>{o.ledgerAccount!=null&&(o.ledgerAccount.index=e.payload.index,o.ledgerAccount.address=e.payload.address)},setWalletConnectAccount:(o,e)=>{o.walletConnectAccount=e.payload},setIsAccountLoading:(o,e)=>{o.isAccountLoading=e.payload,o.accountLoadingError=null},setAccountLoadingError:(o,e)=>{o.accountLoadingError=e.payload,o.isAccountLoading=!1},setWebsocketEvent:(o,e)=>{o.websocketEvent={timestamp:Date.now(),message:e.payload}},setWebsocketBatchEvent:(o,e)=>{o.websocketBatchEvent={timestamp:Date.now(),data:e.payload}}},extraReducers:o=>{o.addCase(w,()=>(pe.local.removeItem(Z.loginExpiresAt),Bo)),o.addCase(Ee,(e,n)=>{let{address:t}=n.payload;e.address=t,e.publicKey=new Po.Address(t).hex()}),o.addCase(bt.REHYDRATE,(e,n)=>{var g;if(!((g=n.payload)!=null&&g.account))return;let{account:t}=n.payload,{address:a,shard:i,accounts:p,publicKey:l}=t;e.address=a,e.shard=i;let _=p&&a in p;e.accounts=_?p:Bo.accounts,e.publicKey=l})}}),{setAccount:Tt,setAddress:Dc,setAccountNonce:St,setAccountShard:Wc,setLedgerAccount:Oc,updateLedgerAccount:Uc,setWalletConnectAccount:Gc,setIsAccountLoading:zc,setAccountLoadingError:Hc,setWebsocketEvent:jc,setWebsocketBatchEvent:Vc}=wt.actions,Me=wt.reducer});function le(){return new Date().setHours(new Date().getHours()+24)}function ge(o){pe.local.setItem({key:Z.loginExpiresAt,data:o,expires:o})}var Fo=u(()=>{"use strict";r();Ne();se()});var kt,vt,At,n_,t_,a_,r_,p_,i_,It,c_,__,m_,Pe,Fe=u(()=>{"use strict";r();kt=require("@reduxjs/toolkit");Fo();me();P();vt={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},At=(0,kt.createSlice)({name:"loginInfoSlice",initialState:vt,reducers:{setLoginMethod:(o,e)=>{o.loginMethod=e.payload},setTokenLogin:(o,e)=>{o.tokenLogin=e.payload},setTokenLoginSignature:(o,e)=>{(o==null?void 0:o.tokenLogin)!=null&&(o.tokenLogin.signature=e.payload)},setWalletLogin:(o,e)=>{o.walletLogin=e.payload},setWalletConnectLogin:(o,e)=>{o.walletConnectLogin=e.payload},setLedgerLogin:(o,e)=>{o.ledgerLogin=e.payload},setWebviewLogin:(o,e)=>{o.webviewLogin=e.payload},invalidateLoginSession:o=>{o.isLoginSessionInvalid=!0},setLogoutRoute:(o,e)=>{o.logoutRoute=e.payload},setIsWalletConnectV2Initialized:(o,e)=>{o.isWalletConnectV2Initialized=e.payload}},extraReducers:o=>{o.addCase(w,()=>vt),o.addCase(Ee,(e,n)=>{e.isLoginSessionInvalid=!1,e.loginMethod=n.payload.loginMethod,e.iframeLoginType=n.payload.iframeLoginType,ge(le())})}}),{setLoginMethod:n_,setWalletConnectLogin:t_,setLedgerLogin:a_,setTokenLogin:r_,setTokenLoginSignature:p_,setWalletLogin:i_,invalidateLoginSession:It,setLogoutRoute:c_,setIsWalletConnectV2Initialized:__,setWebviewLogin:m_}=At.actions,Pe=At.reducer});var Lt,Ct,Rt,g_,u_,f_,h_,De,We=u(()=>{"use strict";r();Lt=require("@reduxjs/toolkit");P();Ct={},Rt=(0,Lt.createSlice)({name:"modalsSlice",initialState:Ct,reducers:{setTxSubmittedModal:(o,e)=>{o.txSubmittedModal=e.payload},setNotificationModal:(o,e)=>{o.notificationModal=e.payload},clearTxSubmittedModal:o=>{o.txSubmittedModal=void 0},clearNotificationModal:o=>{o.notificationModal=void 0}},extraReducers:o=>{o.addCase(w,()=>Ct)}}),{setTxSubmittedModal:g_,setNotificationModal:u_,clearTxSubmittedModal:f_,clearNotificationModal:h_}=Rt.actions,De=Rt.reducer});var Do=u(()=>{"use strict";r();Ao()});var Nt=u(()=>{"use strict";r();Do()});var Et=u(()=>{"use strict";r();Wo()});var Mt=u(()=>{"use strict";r();So()});var Wo=u(()=>{"use strict";r();Nt();Et();Do();Mt()});var Bt=u(()=>{"use strict";r();Wo()});var Pt=u(()=>{"use strict";r();Bt()});function Ft(o){return o[Math.floor(Math.random()*o.length)]}var Dt=u(()=>{"use strict";r()});var Wt=u(()=>{"use strict";r();yo()});var Ot=u(()=>{"use strict";r();Pt();Dt();Wt()});var Ut,Gt,zt,Oo,tp,Ht,J_,$_,Z_,Oe,Ue=u(()=>{"use strict";r();Ut=require("@reduxjs/toolkit"),Gt=b(require("lodash.omit")),zt=require("redux-persist");To();P();Ot();Oo={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},tp={network:Oo},Ht=(0,Ut.createSlice)({name:"appConfig",initialState:tp,reducers:{initializeNetworkConfig:(o,e)=>{let n=Ft(e.payload.walletConnectV2RelayAddresses),t=(0,Gt.default)(e.payload,"walletConnectV2RelayAddresses");o.network=I(x(x({},o.network),t),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(o,e)=>{o.network=x(x({},o.network),e.payload)},setCustomWalletAddress:(o,e)=>{o.network.customWalletAddress=e.payload}},extraReducers:o=>{o.addCase(w,e=>{e.network.customWalletAddress=void 0}),o.addCase(zt.REHYDRATE,(e,n)=>{var a,i;if(!((i=(a=n.payload)==null?void 0:a.network)!=null&&i.customWalletAddress))return;let{network:{customWalletAddress:t}}=n.payload;e.network.customWalletAddress=t})}}),{initializeNetworkConfig:J_,updateNetworkConfig:$_,setCustomWalletAddress:Z_}=Ht.actions,Oe=Ht.reducer});var jt,Uo,Vt,am,rm,pm,Ge,ze=u(()=>{"use strict";r();jt=require("@reduxjs/toolkit");Ae();P();Uo={isSigning:!1,signedSessions:{}},Vt=(0,jt.createSlice)({name:"signedMessageInfoSliceState",initialState:Uo,reducers:{setSignSession:(o,e)=>{let{sessionId:n,signedSession:t,errorMessage:a}=e.payload;a&&(o.errorMessage=a),o.isSigning=t.status==="pending",o.signedSessions[n]=x(x({},o.signedSessions[n]),t)},setSignSessionState:(o,e)=>x(x({},o),e.payload),clearSignedMessageInfo:()=>Uo},extraReducers:o=>{o.addCase(w,()=>Uo)}}),{setSignSession:am,clearSignedMessageInfo:rm,setSignSessionState:pm}=Vt.actions,Ge=Vt.reducer});var Xt,Kt,qt,Yt,lm,gm,um,fm,He,je=u(()=>{"use strict";r();Xt=require("@reduxjs/toolkit"),Kt=require("redux-persist");Ae();Ro();P();qt={customToasts:[],transactionToasts:[]},Yt=(0,Xt.createSlice)({name:"toastsSlice",initialState:qt,reducers:{addCustomToast:(o,e)=>{let n=e.payload.toastId||`custom-toast-${o.customToasts.length+1}`,t=o.customToasts.findIndex(a=>a.toastId===n);if(t!==-1){o.customToasts[t]=I(x(x({},o.customToasts[t]),e.payload),{type:"custom",toastId:n});return}o.customToasts.push(I(x({},e.payload),{type:"custom",toastId:n}))},removeCustomToast:(o,e)=>{o.customToasts=o.customToasts.filter(n=>n.toastId!==e.payload)},addTransactionToast:(o,e)=>{o.transactionToasts.push({type:"transaction",startTimestamp:Le(),toastId:e.payload||`custom-toast-${o.transactionToasts.length+1}`})},removeTransactionToast:(o,e)=>{o.transactionToasts=o.transactionToasts.filter(n=>n.toastId!==e.payload)}},extraReducers:o=>{o.addCase(w,()=>qt),o.addCase(Kt.REHYDRATE,(e,n)=>{var a,i;let t=(i=(a=n.customToasts)==null?void 0:a.filter(p=>!("component"in p)))!=null?i:[];e.customToasts=t})}}),{addCustomToast:lm,removeCustomToast:gm,addTransactionToast:um,removeTransactionToast:fm}=Yt.actions,He=Yt.reducer});var Jt,ap,rp,pp,ip,Go,$t,ym,wm,Zt,Ve,qe=u(()=>{"use strict";r();Jt=require("@reduxjs/toolkit");P();ap="Transaction failed",rp="Transaction successful",pp="Processing transaction",ip="Transaction submitted",Go={},$t=(0,Jt.createSlice)({name:"transactionsInfo",initialState:Go,reducers:{setTransactionsDisplayInfo(o,e){let{sessionId:n,transactionsDisplayInfo:t}=e.payload;n!=null&&(o[n]={errorMessage:(t==null?void 0:t.errorMessage)||ap,successMessage:(t==null?void 0:t.successMessage)||rp,processingMessage:(t==null?void 0:t.processingMessage)||pp,submittedMessage:(t==null?void 0:t.submittedMessage)||ip,transactionDuration:t==null?void 0:t.transactionDuration})},clearTransactionsInfoForSessionId(o,e){e.payload!=null&&delete o[e.payload]},clearTransactionsInfo:()=>Go},extraReducers:o=>{o.addCase(w,()=>Go)}}),{clearTransactionsInfo:ym,setTransactionsDisplayInfo:wm,clearTransactionsInfoForSessionId:Zt}=$t.actions,Ve=$t.reducer});function Qt(o){return o!=null&&(up(o)||xp(o))}function ea(o){return o!=null&&(fp(o)||bp(o))}function oa(o){return o!=null&&(hp(o)||yp(o))}function up(o){return o!=null&&_p.includes(o)}function fp(o){return o!=null&&mp.includes(o)}function hp(o){return o!=null&&dp.includes(o)}function xp(o){return o!=null&&sp.includes(o)}function bp(o){return o!=null&&lp.includes(o)}function yp(o){return o!=null&&gp.includes(o)}var km,_p,mp,dp,Am,Im,sp,lp,gp,na=u(()=>{"use strict";r();me();km=["sent"],_p=["success"],mp=["fail","cancelled","timedOut"],dp=["invalid"],Am=["timedOut"],Im=["pending"],sp=["success"],lp=["fail","invalid"],gp=["not executed"]});var ta,aa,ue,wp,ra,Bm,Pm,Fm,pa,Dm,Wm,Om,Um,ia,Gm,zm,Xe,Ke=u(()=>{"use strict";r();ta=require("@reduxjs/toolkit"),aa=require("redux-persist");me();na();P();ue={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},wp={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ra=(0,ta.createSlice)({name:"transactionsSlice",initialState:ue,reducers:{moveTransactionsToSignedState:(o,e)=>{var _,g;let{sessionId:n,transactions:t,errorMessage:a,status:i,redirectRoute:p,customTransactionInformation:l}=e.payload;o.customTransactionInformationForSessionId[n]=x(x(x({},wp),((_=o.signedTransactions[n])==null?void 0:_.customTransactionInformation)||{}),o.customTransactionInformationForSessionId[n]||{}),o.signedTransactions[n]={transactions:t,status:i,errorMessage:a,redirectRoute:p,customTransactionInformation:x(x({},o.customTransactionInformationForSessionId[n]),l!=null?l:{})},((g=o==null?void 0:o.transactionsToSign)==null?void 0:g.sessionId)===n&&(o.transactionsToSign=ue.transactionsToSign)},clearSignedTransaction:(o,e)=>{o.signedTransactions[e.payload]&&delete o.signedTransactions[e.payload]},clearTransactionToSign:o=>{o!=null&&o.transactionsToSign&&(o.transactionsToSign=null)},updateSignedTransaction:(o,e)=>{o.signedTransactions=x(x({},o.signedTransactions),e.payload)},updateSignedTransactions:(o,e)=>{let{sessionId:n,status:t,errorMessage:a,transactions:i}=e.payload;o.signedTransactions[n]!=null&&(o.signedTransactions[n].status=t,a!=null&&(o.signedTransactions[n].errorMessage=a),i!=null&&(o.signedTransactions[n].transactions=i))},updateSignedTransactionStatus:(o,e)=>{var g,h,f,T,S,E,ee,ye;let{sessionId:n,status:t,errorMessage:a,transactionHash:i,serverTransaction:p,inTransit:l}=e.payload,_=(h=(g=o.signedTransactions)==null?void 0:g[n])==null?void 0:h.transactions;if(_!=null){o.signedTransactions[n].transactions=_.map(M=>M.hash===i?I(x(x({},p!=null?p:{}),M),{status:t,errorMessage:a,inTransit:l}):M);let to=(T=(f=o.signedTransactions[n])==null?void 0:f.transactions)==null?void 0:T.every(M=>Qt(M.status)),ao=(E=(S=o.signedTransactions[n])==null?void 0:S.transactions)==null?void 0:E.some(M=>ea(M.status)),ro=(ye=(ee=o.signedTransactions[n])==null?void 0:ee.transactions)==null?void 0:ye.every(M=>oa(M.status));to&&(o.signedTransactions[n].status="success"),ao&&(o.signedTransactions[n].status="fail"),ro&&(o.signedTransactions[n].status="invalid")}},setTransactionsToSign:(o,e)=>{o.transactionsToSign=e.payload;let{sessionId:n,customTransactionInformation:t}=e.payload;o.customTransactionInformationForSessionId[n]=t,o.signTransactionsError=null},clearAllTransactionsToSign:o=>{o.transactionsToSign=ue.transactionsToSign,o.signTransactionsError=null},clearAllSignedTransactions:o=>{o.signedTransactions=ue.signedTransactions},setSignTransactionsError:(o,e)=>{o.signTransactionsError=e.payload},setSignTransactionsCancelMessage:(o,e)=>{o.signTransactionsCancelMessage=e.payload},updateSignedTransactionsCustomTransactionInformation:(o,e)=>{let{sessionId:n,customTransactionInformationOverrides:t}=e.payload;o.signedTransactions[n]!=null&&(o.signedTransactions[n].customTransactionInformation=x(x({},o.signedTransactions[n].customTransactionInformation),t))}},extraReducers:o=>{o.addCase(w,()=>ue),o.addCase(aa.REHYDRATE,(e,n)=>{var p;if(e.signTransactionsCancelMessage=null,!((p=n.payload)!=null&&p.transactions))return;let{signedTransactions:t,customTransactionInformationForSessionId:a}=n.payload.transactions,i=Object.entries(t).reduce((l,[_,g])=>{let h=new Date(_),f=new Date;return f.setHours(f.getHours()+5),f-h>0||(l[_]=g),l},{});a!=null&&(e.customTransactionInformationForSessionId=a),t!=null&&(e.signedTransactions=i)})}}),{updateSignedTransactionStatus:Bm,updateSignedTransactions:Pm,setTransactionsToSign:Fm,clearAllTransactionsToSign:pa,clearAllSignedTransactions:Dm,clearSignedTransaction:Wm,clearTransactionToSign:Om,setSignTransactionsError:Um,setSignTransactionsCancelMessage:ia,moveTransactionsToSignedState:Gm,updateSignedTransactionsCustomTransactionInformation:zm}=ra.actions,Xe=ra.reducer});var ca,zo,_a,qm,Xm,Km,Ym,Ye,Je=u(()=>{"use strict";r();ca=require("@reduxjs/toolkit");P();zo={},_a=(0,ca.createSlice)({name:"batchTransactionsSlice",initialState:zo,reducers:{setBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},updateBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},clearBatchTransactions:(o,e)=>{delete o[e.payload.batchId]},clearAllBatchTransactions:()=>zo},extraReducers:o=>{o.addCase(w,()=>zo)}}),{setBatchTransactions:qm,updateBatchTransactions:Xm,clearBatchTransactions:Km,clearAllBatchTransactions:Ym}=_a.actions,Ye=_a.reducer});var da,ma,sa,Qm,la,Ho=u(()=>{"use strict";r();da=require("@reduxjs/toolkit");P();ma={},sa=(0,da.createSlice)({name:"dappConfigSlice",initialState:ma,reducers:{setDappConfig:(o,e)=>e.payload},extraReducers:o=>{o.addCase(w,()=>ma)}}),{setDappConfig:Qm}=sa.actions,la=sa.reducer});var fe=u(()=>{"use strict";r();Be();Fe();We();Ue();ze();je();qe();Ke();Je();Ho()});var jo=u(()=>{"use strict";r()});var fa,kp,Ap,Q,Qe=u(()=>{"use strict";r();fa=require("@reduxjs/toolkit");jo();Be();Je();Ho();Fe();We();Ue();ze();je();qe();Ke();kp={["account"]:Me,["dappConfig"]:la,["loginInfo"]:Pe,["modals"]:De,["networkConfig"]:Oe,["signedMessageInfo"]:Ge,["toasts"]:He,["transactionsInfo"]:Ve,["transactions"]:Xe,["batchTransactions"]:Ye},Ap=(o={})=>(0,fa.combineReducers)(x(x({},kp),o)),Q=Ap});var ya={};B(ya,{default:()=>zp,sessionStorageReducers:()=>Vo});function j(o,e=[]){return{key:o,version:1,storage:xa.default,blacklist:e}}var A,ha,xa,Ip,he,Cp,Lp,Rp,Np,Ep,Mp,Bp,Pp,Fp,Dp,ba,Wp,Vo,Op,Up,Gp,zp,wa=u(()=>{"use strict";r();A=require("redux-persist"),ha=b(require("redux-persist/lib/storage")),xa=b(require("redux-persist/lib/storage/session"));Qe();fe();Be();Je();Fe();We();Ue();ze();je();qe();Ke();jo();Ip={persistReducersStorageType:"localStorage"},he={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Cp=j(he["account"]),Lp=j(he["loginInfo"]),Rp=j(he["modals"]),Np=j(he["networkConfig"]),Ep={2:o=>I(x({},o),{networkConfig:Oo})};Mp=j("sdk-dapp-transactionsInfo"),Bp=j("sdk-dapp-transactions",["transactionsToSign"]),Pp=j("sdk-dapp-batchTransactions",["batchTransactions"]),Fp=j("sdk-dapp-toasts"),Dp=j("sdk-dapp-signedMessageInfo"),ba={key:"sdk-dapp-store",version:2,storage:ha.default,whitelist:Object.keys(he),migrate:(0,A.createMigrate)(Ep,{debug:!1})},Wp=I(x({},ba),{whitelist:[]}),Vo={["toasts"]:(0,A.persistReducer)(Fp,He),["transactions"]:(0,A.persistReducer)(Bp,Xe),["transactionsInfo"]:(0,A.persistReducer)(Mp,Ve),["batchTransactions"]:(0,A.persistReducer)(Pp,Ye),["signedMessageInfo"]:(0,A.persistReducer)(Dp,Ge)},Op=I(x({},Vo),{["account"]:(0,A.persistReducer)(Cp,Me),["loginInfo"]:(0,A.persistReducer)(Lp,Pe),["modals"]:(0,A.persistReducer)(Rp,De),["networkConfig"]:(0,A.persistReducer)(Np,Oe)}),Up=Ip.persistReducersStorageType==="localStorage",Gp=Up?(0,A.persistReducer)(ba,Q(Vo)):(0,A.persistReducer)(Wp,Q(Op)),zp=Gp});var Ta={};B(Ta,{default:()=>Hp});var Hp,Sa=u(()=>{"use strict";r();Qe();Hp=Q()});var va={};B(va,{default:()=>Vp});var N,jp,Vp,ka=u(()=>{"use strict";r();N=require("redux-persist"),jp=[N.FLUSH,N.REHYDRATE,N.PAUSE,N.PERSIST,N.PURGE,N.REGISTER],Vp=jp});var Ca={};B(Ca,{default:()=>Ia});function Ia(o){return(0,Aa.persistStore)(o)}var Aa,La=u(()=>{"use strict";r();Aa=require("redux-persist")});var V={};B(V,{css:()=>Wa,default:()=>Xp});var Wa,Xp,q=u(()=>{"use strict";r();Wa=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wa));Xp={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var en={};B(en,{css:()=>Ja,default:()=>ei});var Ja,ei,on=u(()=>{"use strict";r();Ja=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ja));ei={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var nn={};B(nn,{css:()=>Qa,default:()=>ni});var Qa,ni,tn=u(()=>{"use strict";r();Qa=`.dapp-core-component__signWithOperaModalStyles__extension-modal {
  color: inherit;
}

.dapp-core-component__signWithOperaModalStyles__modal-container {
  color: inherit;
}

.dapp-core-component__signWithOperaModalStyles__extension {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qa));ni={"extension-modal":"dapp-core-component__signWithOperaModalStyles__extension-modal",extensionModal:"dapp-core-component__signWithOperaModalStyles__extension-modal","modal-container":"dapp-core-component__signWithOperaModalStyles__modal-container",modalContainer:"dapp-core-component__signWithOperaModalStyles__modal-container",extension:"dapp-core-component__signWithOperaModalStyles__extension"}});var ri={};B(ri,{SignWithOperaModal:()=>ai});module.exports=C(ri);r();var no=b(require("react")),er=require("@fortawesome/free-solid-svg-icons"),an=b(require("classnames"));re();r();var _t=b(require("react"));r();var de=b(require("react"));r();Ao();var pt=()=>!ko();var Kr=()=>po(void 0,null,function*(){return yield Promise.resolve().then(()=>(Co(),Io))}),Yr=()=>(Co(),C(Io)).default,Lo=pt();function ct({ssrGlobalImportCallback:o,ssrImportCallback:e,clientImportCallback:n}){let[t,a]=de.default.useState(Lo?void 0:Yr()),[i,p]=de.default.useState(Lo||n==null?void 0:n()),l=()=>po(this,null,function*(){(o?o():Kr()).then(_=>a(_.default)),e==null||e().then(_=>p(_.default))});return(0,de.useEffect)(()=>{Lo&&l()},[]),{globalStyles:t,styles:i}}function R(o,e){return n=>{let{globalStyles:t,styles:a}=ct({ssrGlobalImportCallback:e.ssrGlobalStyles,ssrImportCallback:e.ssrStyles,clientImportCallback:e.clientStyles});return _t.default.createElement(o,I(x({},n),{globalStyles:t!=null?t:{},styles:a!=null?a:{}}))}}r();bo();r();var Pa=require("react"),ie=require("react-redux");r();var qo=require("@reduxjs/toolkit"),Ma=require("react-redux/lib/utils/Subscription");fe();r();var ga=b(require("lodash.throttle"));re();fe();Fo();Ne();se();var Tp=[Ce],$e=!1,Sp=(0,ga.default)(()=>{ge(le())},5e3),ua=o=>e=>n=>{if(Tp.includes(n.type))return e(n);let t=o.getState(),a=pe.local.getItem(Z.loginExpiresAt);if(!Boolean(t==null?void 0:t.account.address))return e(n);if(a==null)return ge(le());let p=Date.now();return a-p<0&&!$e?setTimeout(()=>{$e=!0,o.dispatch(It())},1e3):($e&&($e=!1),Sp()),e(n)};r();r();function Ze(){return typeof sessionStorage!="undefined"}var Ra=Ze()?(wa(),C(ya)).default:(Sa(),C(Ta)).default,Na=Ze()?(ka(),C(va)).default:[],Ea=Ze()?(La(),C(Ca)).default:o=>o;Qe();var eo=(0,qo.configureStore)({reducer:Ra,middleware:o=>o({serializableCheck:{ignoredActions:[...Na,St.type,Tt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(ua)}),Ba=(0,Ma.createSubscription)(eo),$d=Ea(eo),Zd=(0,qo.configureStore)({reducer:Q});var qp={store:eo,subscription:Ba},Xo=(0,Pa.createContext)(qp),ns=(0,ie.createStoreHook)(Xo),Fa=(0,ie.createDispatchHook)(Xo),ts=(0,ie.createSelectorHook)(Xo);fe();function Da(){let o=Fa();return e=>{o(pa()),o(Zt(e)),o(ia(Mn))}}r();var Ka=b(require("react"));r();r();r();var X=b(require("react")),ja=require("react"),Va=require("react"),Zo=b(require("classnames")),qa=require("react-dom");re();r();var Oa=b(require("react")),Ua=b(require("classnames"));var Kp=({className:o,children:e,styles:n})=>Oa.default.createElement("div",{className:(0,Ua.default)(n==null?void 0:n.dappModalBody,o)},e),Ko=R(Kp,{ssrStyles:()=>Promise.resolve().then(()=>(q(),V)),clientStyles:()=>(q(),C(V)).default});r();var Yo=b(require("react")),Ga=b(require("classnames"));var Yp=({visible:o,customFooter:e,className:n,footerText:t,styles:a})=>o?Yo.default.createElement("div",{className:(0,Ga.default)(a==null?void 0:a.dappModalFooter,n)},e!=null?e:Yo.default.createElement("div",null,t)):null,Jo=R(Yp,{ssrStyles:()=>Promise.resolve().then(()=>(q(),V)),clientStyles:()=>(q(),C(V)).default});r();var ce=b(require("react")),za=require("@fortawesome/free-solid-svg-icons"),Ha=require("@fortawesome/react-fontawesome"),xe=b(require("classnames"));var Jp=({visible:o,headerText:e,customHeader:n,className:t,closeButtonClassName:a,headerTextClassName:i,onHide:p,globalStyles:l,styles:_})=>o?n?ce.default.createElement("div",{className:(0,xe.default)(_==null?void 0:_.dappModalHeader,t)},n):ce.default.createElement("div",{className:(0,xe.default)(_==null?void 0:_.dappModalHeader,t)},ce.default.createElement("div",{className:(0,xe.default)(_==null?void 0:_.dappModalHeaderText,i)},e),ce.default.createElement("button",{onClick:p,className:(0,xe.default)(_==null?void 0:_.dappModalCloseButton,l==null?void 0:l.btn,l==null?void 0:l.btnLight,a)},ce.default.createElement(Ha.FontAwesomeIcon,{size:"lg",icon:za.faTimes}))):null,$o=R(Jp,{ssrStyles:()=>Promise.resolve().then(()=>(q(),V)),clientStyles:()=>(q(),C(V)).default});var Zp={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Qp=({"data-testid":o="dappModal",children:e,className:n="dapp-modal-dialog-wrapper",closeOnEscape:t,config:a=Zp,id:i="dapp-modal",onHide:p,parentElement:l,visible:_,styles:g})=>{let[h,f]=(0,ja.useState)(!1);if((0,Va.useEffect)(()=>{f(!0)},[]),!_)return null;let{showHeader:T,showFooter:S,headerText:E,footerText:ee,modalDialogClassName:ye="dapp-modal-dialog",modalContentClassName:to="dapp-modal-dialog-content",modalHeaderClassName:ao="dapp-modal-dialog-header",modalHeaderTextClassName:ro="dapp-modal-dialog-header-text",modalCloseButtonClassName:M="dapp-modal-dialog-close-button",modalBodyClassName:or="dapp-modal-dialog-content-body",modalFooterClassName:nr="dapp-modal-dialog-footer",customModalHeader:tr,customModalFooter:ar}=a,rr=pr=>{pr.key==="Escape"&&t&&(p==null||p())};return X.default.createElement(X.default.Fragment,null,h&&(0,qa.createPortal)(X.default.createElement("div",{id:i,role:"dialog","aria-modal":"true",className:(0,Zo.default)(ye,g==null?void 0:g.dappModal,n),"data-testid":o,onKeyDown:rr},X.default.createElement("div",{className:(0,Zo.default)(g==null?void 0:g.dappModalContent,to)},X.default.createElement($o,{visible:T,headerText:E,customHeader:tr,className:ao,headerTextClassName:ro,closeButtonClassName:M,onHide:p}),X.default.createElement(Ko,{className:or},e),X.default.createElement(Jo,{visible:S,customFooter:ar,footerText:ee,className:nr}))),l!=null?l:document==null?void 0:document.body))},Qo=R(Qp,{ssrStyles:()=>Promise.resolve().then(()=>(q(),V)),clientStyles:()=>(q(),C(V)).default});r();r();var oo=require("react"),Xa=o=>{let[e,n]=(0,oo.useState)(!1),t=()=>{n(!0)},a=()=>{n(!1)};return(0,oo.useEffect)(()=>{(o==null?void 0:o.visible)===!0?t():(o==null?void 0:o.visible)===!1&&a()},[o==null?void 0:o.visible]),{handleShowModal:t,handleHideModal:a,showModal:e}};r();var Ya=o=>{let{showModal:e}=Xa({visible:o.visible}),n=()=>{var t;(t=o.onClose)==null||t.call(o)};return Ka.default.createElement(Qo,{className:o.className,closeOnEscape:o.closeOnEscape,config:o.modalConfig,onHide:n,visible:e},o.children)};r();r();var K=b(require("react")),$a=require("@fortawesome/react-fontawesome"),be=b(require("classnames"));var oi=({icon:o,title:e,action:n,iconClass:t,"data-testid":a,description:i,iconBgClass:p,iconSize:l="5x",className:_="dapp-page-state",globalStyles:g,styles:h})=>{let f=(0,K.useMemo)(()=>({wrapper:(0,be.default)(h==null?void 0:h.state,g==null?void 0:g.mAuto,g==null?void 0:g.p4,g==null?void 0:g.textCenter,_),iconContainer:(0,be.default)(g==null?void 0:g.iconState,g==null?void 0:g.mxAuto,{[p!=null?p:""]:Boolean(p)}),iconClass:(0,be.default)(t!=null&&t),title:(0,be.default)(g==null?void 0:g.h4,g==null?void 0:g.my4),description:g==null?void 0:g.mb3}),[g,h,_,p,t]);return K.default.createElement("div",{className:f.wrapper,"data-testid":a},o&&K.default.createElement("span",{className:f.iconContainer},K.default.createElement($a.FontAwesomeIcon,{icon:o,className:f.iconClass,size:l})),e&&K.default.createElement("p",{className:f.title},e),i&&K.default.createElement("div",{className:f.description},i),n)},Za=R(oi,{ssrStyles:()=>Promise.resolve().then(()=>(on(),en)),clientStyles:()=>(on(),C(en)).default});var ti=({handleClose:o,error:e,transactions:n,sessionId:t,className:a="dapp-opera-modal",modalContentClassName:i,globalStyles:p,styles:l})=>{let _=Da(),g={wrapper:(0,an.default)(l==null?void 0:l.modalContainer,l==null?void 0:l.opera,a),icon:p==null?void 0:p.textWhite,closeBtn:(0,an.default)(p==null?void 0:p.btn,p==null?void 0:p.btnCloseLink,p==null?void 0:p.btnDark,p==null?void 0:p.textWhite,p==null?void 0:p.mt2)},h=e||(n&&n.length>1?"Check your Opera Crypto Wallet to sign the transactions":"Check your Opera Crypto Wallet to sign the transaction"),f=T=>{T.preventDefault(),o(),_(t)};return no.default.createElement(Ya,{onClose:o,modalConfig:{modalDialogClassName:g.wrapper},visible:!0},no.default.createElement(Za,{icon:e?er.faTimes:null,iconClass:g.icon,className:i,iconBgClass:e?p==null?void 0:p.bgDanger:p==null?void 0:p.bgWarning,iconSize:"3x",title:"Confirm on Opera Crypto Wallet",description:h,action:no.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:f,className:g.closeBtn},"Close")}))},ai=R(ti,{ssrStyles:()=>Promise.resolve().then(()=>(tn(),nn)),clientStyles:()=>(tn(),C(nn)).default});0&&(module.exports={SignWithOperaModal});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=SignWithOperaModal.js.map
