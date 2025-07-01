"use strict";var Pn=Object.create;var ne=Object.defineProperty,Un=Object.defineProperties,Wn=Object.getOwnPropertyDescriptor,On=Object.getOwnPropertyDescriptors,Gn=Object.getOwnPropertyNames,ae=Object.getOwnPropertySymbols,zn=Object.getPrototypeOf,ye=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var Ze=(n,e,o)=>e in n?ne(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,S=(n,e)=>{for(var o in e||(e={}))ye.call(e,o)&&Ze(n,o,e[o]);if(ae)for(var o of ae(e))Qe.call(e,o)&&Ze(n,o,e[o]);return n},H=(n,e)=>Un(n,On(e));var pe=(n,e)=>{var o={};for(var r in n)ye.call(n,r)&&e.indexOf(r)<0&&(o[r]=n[r]);if(n!=null&&ae)for(var r of ae(n))e.indexOf(r)<0&&Qe.call(n,r)&&(o[r]=n[r]);return o};var K=(n,e)=>()=>(n&&(e=n(n=0)),e);var _e=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),Y=(n,e)=>{for(var o in e)ne(n,o,{get:e[o],enumerable:!0})},eo=(n,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of Gn(e))!ye.call(n,t)&&t!==o&&ne(n,t,{get:()=>e[t],enumerable:!(r=Wn(e,t))||r.enumerable});return n};var h=(n,e,o)=>(o=n!=null?Pn(zn(n)):{},eo(e||!n||!n.__esModule?ne(o,"default",{value:n,enumerable:!0}):o,n)),F=n=>eo(ne({},"__esModule",{value:!0}),n);var we=(n,e,o)=>new Promise((r,t)=>{var a=c=>{try{m(o.next(c))}catch(g){t(g)}},p=c=>{try{m(o.throw(c))}catch(g){t(g)}},m=c=>c.done?r(c.value):Promise.resolve(c.value).then(a,p);m((o=o.apply(n,e)).next())});var ro=_e(ie=>{"use strict";_();ie.byteLength=jn;ie.toByteArray=qn;ie.fromByteArray=Yn;var N=[],A=[],Hn=typeof Uint8Array!="undefined"?Uint8Array:Array,ke="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(V=0,oo=ke.length;V<oo;++V)N[V]=ke[V],A[ke.charCodeAt(V)]=V;var V,oo;A["-".charCodeAt(0)]=62;A["_".charCodeAt(0)]=63;function no(n){var e=n.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=n.indexOf("=");o===-1&&(o=e);var r=o===e?0:4-o%4;return[o,r]}function jn(n){var e=no(n),o=e[0],r=e[1];return(o+r)*3/4-r}function Vn(n,e,o){return(e+o)*3/4-o}function qn(n){var e,o=no(n),r=o[0],t=o[1],a=new Hn(Vn(n,r,t)),p=0,m=t>0?r-4:r,c;for(c=0;c<m;c+=4)e=A[n.charCodeAt(c)]<<18|A[n.charCodeAt(c+1)]<<12|A[n.charCodeAt(c+2)]<<6|A[n.charCodeAt(c+3)],a[p++]=e>>16&255,a[p++]=e>>8&255,a[p++]=e&255;return t===2&&(e=A[n.charCodeAt(c)]<<2|A[n.charCodeAt(c+1)]>>4,a[p++]=e&255),t===1&&(e=A[n.charCodeAt(c)]<<10|A[n.charCodeAt(c+1)]<<4|A[n.charCodeAt(c+2)]>>2,a[p++]=e>>8&255,a[p++]=e&255),a}function Xn(n){return N[n>>18&63]+N[n>>12&63]+N[n>>6&63]+N[n&63]}function Kn(n,e,o){for(var r,t=[],a=e;a<o;a+=3)r=(n[a]<<16&16711680)+(n[a+1]<<8&65280)+(n[a+2]&255),t.push(Xn(r));return t.join("")}function Yn(n){for(var e,o=n.length,r=o%3,t=[],a=16383,p=0,m=o-r;p<m;p+=a)t.push(Kn(n,p,p+a>m?m:p+a));return r===1?(e=n[o-1],t.push(N[e>>2]+N[e<<4&63]+"==")):r===2&&(e=(n[o-2]<<8)+n[o-1],t.push(N[e>>10]+N[e>>4&63]+N[e<<2&63]+"=")),t.join("")}});var to=_e(ve=>{_();ve.read=function(n,e,o,r,t){var a,p,m=t*8-r-1,c=(1<<m)-1,g=c>>1,u=-7,f=o?t-1:0,v=o?-1:1,y=n[e+f];for(f+=v,a=y&(1<<-u)-1,y>>=-u,u+=m;u>0;a=a*256+n[e+f],f+=v,u-=8);for(p=a&(1<<-u)-1,a>>=-u,u+=r;u>0;p=p*256+n[e+f],f+=v,u-=8);if(a===0)a=1-g;else{if(a===c)return p?NaN:(y?-1:1)*(1/0);p=p+Math.pow(2,r),a=a-g}return(y?-1:1)*p*Math.pow(2,a-r)};ve.write=function(n,e,o,r,t,a){var p,m,c,g=a*8-t-1,u=(1<<g)-1,f=u>>1,v=t===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=r?0:a-1,L=r?1:-1,be=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(m=isNaN(e)?1:0,p=u):(p=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-p))<1&&(p--,c*=2),p+f>=1?e+=v/c:e+=v*Math.pow(2,1-f),e*c>=2&&(p++,c/=2),p+f>=u?(m=0,p=u):p+f>=1?(m=(e*c-1)*Math.pow(2,t),p=p+f):(m=e*Math.pow(2,f-1)*Math.pow(2,t),p=0));t>=8;n[o+y]=m&255,y+=L,m/=256,t-=8);for(p=p<<t|m,g+=t;g>0;n[o+y]=p&255,y+=L,p/=256,g-=8);n[o+y-L]|=be*128}});var xo=_e(J=>{"use strict";_();var Te=ro(),$=to(),ao=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;J.Buffer=i;J.SlowBuffer=or;J.INSPECT_MAX_BYTES=50;var ce=2147483647;J.kMaxLength=ce;i.TYPED_ARRAY_SUPPORT=$n();!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function $n(){try{var n=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(n,e),n.foo()===42}catch(o){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}});Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function M(n){if(n>ce)throw new RangeError('The value "'+n+'" is invalid for option "size"');var e=new Uint8Array(n);return Object.setPrototypeOf(e,i.prototype),e}function i(n,e,o){if(typeof n=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Ne(n)}return io(n,e,o)}i.poolSize=8192;function io(n,e,o){if(typeof n=="string")return Zn(n,e);if(ArrayBuffer.isView(n))return Qn(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(I(n,ArrayBuffer)||n&&I(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(I(n,SharedArrayBuffer)||n&&I(n.buffer,SharedArrayBuffer)))return Ae(n,e,o);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=n.valueOf&&n.valueOf();if(r!=null&&r!==n)return i.from(r,e,o);var t=er(n);if(t)return t;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return i.from(n[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}i.from=function(n,e,o){return io(n,e,o)};Object.setPrototypeOf(i.prototype,Uint8Array.prototype);Object.setPrototypeOf(i,Uint8Array);function co(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function Jn(n,e,o){return co(n),n<=0?M(n):e!==void 0?typeof o=="string"?M(n).fill(e,o):M(n).fill(e):M(n)}i.alloc=function(n,e,o){return Jn(n,e,o)};function Ne(n){return co(n),M(n<0?0:Ie(n)|0)}i.allocUnsafe=function(n){return Ne(n)};i.allocUnsafeSlow=function(n){return Ne(n)};function Zn(n,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=mo(n,e)|0,r=M(o),t=r.write(n,e);return t!==o&&(r=r.slice(0,t)),r}function Se(n){for(var e=n.length<0?0:Ie(n.length)|0,o=M(e),r=0;r<e;r+=1)o[r]=n[r]&255;return o}function Qn(n){if(I(n,Uint8Array)){var e=new Uint8Array(n);return Ae(e.buffer,e.byteOffset,e.byteLength)}return Se(n)}function Ae(n,e,o){if(e<0||n.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&o===void 0?r=new Uint8Array(n):o===void 0?r=new Uint8Array(n,e):r=new Uint8Array(n,e,o),Object.setPrototypeOf(r,i.prototype),r}function er(n){if(i.isBuffer(n)){var e=Ie(n.length)|0,o=M(e);return o.length===0||n.copy(o,0,0,e),o}if(n.length!==void 0)return typeof n.length!="number"||Ce(n.length)?M(0):Se(n);if(n.type==="Buffer"&&Array.isArray(n.data))return Se(n.data)}function Ie(n){if(n>=ce)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ce.toString(16)+" bytes");return n|0}function or(n){return+n!=n&&(n=0),i.alloc(+n)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype};i.compare=function(e,o){if(I(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),I(o,Uint8Array)&&(o=i.from(o,o.offset,o.byteLength)),!i.isBuffer(e)||!i.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var r=e.length,t=o.length,a=0,p=Math.min(r,t);a<p;++a)if(e[a]!==o[a]){r=e[a],t=o[a];break}return r<t?-1:t<r?1:0};i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};i.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);var r;if(o===void 0)for(o=0,r=0;r<e.length;++r)o+=e[r].length;var t=i.allocUnsafe(o),a=0;for(r=0;r<e.length;++r){var p=e[r];if(I(p,Uint8Array))a+p.length>t.length?i.from(p).copy(t,a):Uint8Array.prototype.set.call(t,p,a);else if(i.isBuffer(p))p.copy(t,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=p.length}return t};function mo(n,e){if(i.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||I(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var o=n.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&o===0)return 0;for(var t=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Le(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return ho(n).length;default:if(t)return r?-1:Le(n).length;e=(""+e).toLowerCase(),t=!0}}i.byteLength=mo;function nr(n,e,o){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(n||(n="utf8");;)switch(n){case"hex":return sr(this,e,o);case"utf8":case"utf-8":return lo(this,e,o);case"ascii":return mr(this,e,o);case"latin1":case"binary":return dr(this,e,o);case"base64":return ir(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return lr(this,e,o);default:if(r)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),r=!0}}i.prototype._isBuffer=!0;function q(n,e,o){var r=n[e];n[e]=n[o],n[o]=r}i.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)q(this,o,o+1);return this};i.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)q(this,o,o+3),q(this,o+1,o+2);return this};i.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)q(this,o,o+7),q(this,o+1,o+6),q(this,o+2,o+5),q(this,o+3,o+4);return this};i.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?lo(this,0,e):nr.apply(this,arguments)};i.prototype.toLocaleString=i.prototype.toString;i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0};i.prototype.inspect=function(){var e="",o=J.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};ao&&(i.prototype[ao]=i.prototype.inspect);i.prototype.compare=function(e,o,r,t,a){if(I(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),r===void 0&&(r=e?e.length:0),t===void 0&&(t=0),a===void 0&&(a=this.length),o<0||r>e.length||t<0||a>this.length)throw new RangeError("out of range index");if(t>=a&&o>=r)return 0;if(t>=a)return-1;if(o>=r)return 1;if(o>>>=0,r>>>=0,t>>>=0,a>>>=0,this===e)return 0;for(var p=a-t,m=r-o,c=Math.min(p,m),g=this.slice(t,a),u=e.slice(o,r),f=0;f<c;++f)if(g[f]!==u[f]){p=g[f],m=u[f];break}return p<m?-1:m<p?1:0};function so(n,e,o,r,t){if(n.length===0)return-1;if(typeof o=="string"?(r=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Ce(o)&&(o=t?0:n.length-1),o<0&&(o=n.length+o),o>=n.length){if(t)return-1;o=n.length-1}else if(o<0)if(t)o=0;else return-1;if(typeof e=="string"&&(e=i.from(e,r)),i.isBuffer(e))return e.length===0?-1:po(n,e,o,r,t);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?t?Uint8Array.prototype.indexOf.call(n,e,o):Uint8Array.prototype.lastIndexOf.call(n,e,o):po(n,[e],o,r,t);throw new TypeError("val must be string, number or Buffer")}function po(n,e,o,r,t){var a=1,p=n.length,m=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(n.length<2||e.length<2)return-1;a=2,p/=2,m/=2,o/=2}function c(y,L){return a===1?y[L]:y.readUInt16BE(L*a)}var g;if(t){var u=-1;for(g=o;g<p;g++)if(c(n,g)===c(e,u===-1?0:g-u)){if(u===-1&&(u=g),g-u+1===m)return u*a}else u!==-1&&(g-=g-u),u=-1}else for(o+m>p&&(o=p-m),g=o;g>=0;g--){for(var f=!0,v=0;v<m;v++)if(c(n,g+v)!==c(e,v)){f=!1;break}if(f)return g}return-1}i.prototype.includes=function(e,o,r){return this.indexOf(e,o,r)!==-1};i.prototype.indexOf=function(e,o,r){return so(this,e,o,r,!0)};i.prototype.lastIndexOf=function(e,o,r){return so(this,e,o,r,!1)};function rr(n,e,o,r){o=Number(o)||0;var t=n.length-o;r?(r=Number(r),r>t&&(r=t)):r=t;var a=e.length;r>a/2&&(r=a/2);for(var p=0;p<r;++p){var m=parseInt(e.substr(p*2,2),16);if(Ce(m))return p;n[o+p]=m}return p}function tr(n,e,o,r){return me(Le(e,n.length-o),n,o,r)}function ar(n,e,o,r){return me(fr(e),n,o,r)}function pr(n,e,o,r){return me(ho(e),n,o,r)}function _r(n,e,o,r){return me(hr(e,n.length-o),n,o,r)}i.prototype.write=function(e,o,r,t){if(o===void 0)t="utf8",r=this.length,o=0;else if(r===void 0&&typeof o=="string")t=o,r=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(r)?(r=r>>>0,t===void 0&&(t="utf8")):(t=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((r===void 0||r>a)&&(r=a),e.length>0&&(r<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");t||(t="utf8");for(var p=!1;;)switch(t){case"hex":return rr(this,e,o,r);case"utf8":case"utf-8":return tr(this,e,o,r);case"ascii":case"latin1":case"binary":return ar(this,e,o,r);case"base64":return pr(this,e,o,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _r(this,e,o,r);default:if(p)throw new TypeError("Unknown encoding: "+t);t=(""+t).toLowerCase(),p=!0}};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ir(n,e,o){return e===0&&o===n.length?Te.fromByteArray(n):Te.fromByteArray(n.slice(e,o))}function lo(n,e,o){o=Math.min(n.length,o);for(var r=[],t=e;t<o;){var a=n[t],p=null,m=a>239?4:a>223?3:a>191?2:1;if(t+m<=o){var c,g,u,f;switch(m){case 1:a<128&&(p=a);break;case 2:c=n[t+1],(c&192)===128&&(f=(a&31)<<6|c&63,f>127&&(p=f));break;case 3:c=n[t+1],g=n[t+2],(c&192)===128&&(g&192)===128&&(f=(a&15)<<12|(c&63)<<6|g&63,f>2047&&(f<55296||f>57343)&&(p=f));break;case 4:c=n[t+1],g=n[t+2],u=n[t+3],(c&192)===128&&(g&192)===128&&(u&192)===128&&(f=(a&15)<<18|(c&63)<<12|(g&63)<<6|u&63,f>65535&&f<1114112&&(p=f))}}p===null?(p=65533,m=1):p>65535&&(p-=65536,r.push(p>>>10&1023|55296),p=56320|p&1023),r.push(p),t+=m}return cr(r)}var _o=4096;function cr(n){var e=n.length;if(e<=_o)return String.fromCharCode.apply(String,n);for(var o="",r=0;r<e;)o+=String.fromCharCode.apply(String,n.slice(r,r+=_o));return o}function mr(n,e,o){var r="";o=Math.min(n.length,o);for(var t=e;t<o;++t)r+=String.fromCharCode(n[t]&127);return r}function dr(n,e,o){var r="";o=Math.min(n.length,o);for(var t=e;t<o;++t)r+=String.fromCharCode(n[t]);return r}function sr(n,e,o){var r=n.length;(!e||e<0)&&(e=0),(!o||o<0||o>r)&&(o=r);for(var t="",a=e;a<o;++a)t+=xr[n[a]];return t}function lr(n,e,o){for(var r=n.slice(e,o),t="",a=0;a<r.length-1;a+=2)t+=String.fromCharCode(r[a]+r[a+1]*256);return t}i.prototype.slice=function(e,o){var r=this.length;e=~~e,o=o===void 0?r:~~o,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),o<e&&(o=e);var t=this.subarray(e,o);return Object.setPrototypeOf(t,i.prototype),t};function b(n,e,o){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+e>o)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,o,r){e=e>>>0,o=o>>>0,r||b(e,o,this.length);for(var t=this[e],a=1,p=0;++p<o&&(a*=256);)t+=this[e+p]*a;return t};i.prototype.readUintBE=i.prototype.readUIntBE=function(e,o,r){e=e>>>0,o=o>>>0,r||b(e,o,this.length);for(var t=this[e+--o],a=1;o>0&&(a*=256);)t+=this[e+--o]*a;return t};i.prototype.readUint8=i.prototype.readUInt8=function(e,o){return e=e>>>0,o||b(e,1,this.length),this[e]};i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||b(e,2,this.length),this[e]|this[e+1]<<8};i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||b(e,2,this.length),this[e]<<8|this[e+1]};i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||b(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};i.prototype.readIntLE=function(e,o,r){e=e>>>0,o=o>>>0,r||b(e,o,this.length);for(var t=this[e],a=1,p=0;++p<o&&(a*=256);)t+=this[e+p]*a;return a*=128,t>=a&&(t-=Math.pow(2,8*o)),t};i.prototype.readIntBE=function(e,o,r){e=e>>>0,o=o>>>0,r||b(e,o,this.length);for(var t=o,a=1,p=this[e+--t];t>0&&(a*=256);)p+=this[e+--t]*a;return a*=128,p>=a&&(p-=Math.pow(2,8*o)),p};i.prototype.readInt8=function(e,o){return e=e>>>0,o||b(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};i.prototype.readInt16LE=function(e,o){e=e>>>0,o||b(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};i.prototype.readInt16BE=function(e,o){e=e>>>0,o||b(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};i.prototype.readInt32LE=function(e,o){return e=e>>>0,o||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};i.prototype.readInt32BE=function(e,o){return e=e>>>0,o||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};i.prototype.readFloatLE=function(e,o){return e=e>>>0,o||b(e,4,this.length),$.read(this,e,!0,23,4)};i.prototype.readFloatBE=function(e,o){return e=e>>>0,o||b(e,4,this.length),$.read(this,e,!1,23,4)};i.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||b(e,8,this.length),$.read(this,e,!0,52,8)};i.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||b(e,8,this.length),$.read(this,e,!1,52,8)};function T(n,e,o,r,t,a){if(!i.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>t||e<a)throw new RangeError('"value" argument is out of bounds');if(o+r>n.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,o,r,t){if(e=+e,o=o>>>0,r=r>>>0,!t){var a=Math.pow(2,8*r)-1;T(this,e,o,r,a,0)}var p=1,m=0;for(this[o]=e&255;++m<r&&(p*=256);)this[o+m]=e/p&255;return o+r};i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,o,r,t){if(e=+e,o=o>>>0,r=r>>>0,!t){var a=Math.pow(2,8*r)-1;T(this,e,o,r,a,0)}var p=r-1,m=1;for(this[o+p]=e&255;--p>=0&&(m*=256);)this[o+p]=e/m&255;return o+r};i.prototype.writeUint8=i.prototype.writeUInt8=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,1,255,0),this[o]=e&255,o+1};i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};i.prototype.writeIntLE=function(e,o,r,t){if(e=+e,o=o>>>0,!t){var a=Math.pow(2,8*r-1);T(this,e,o,r,a-1,-a)}var p=0,m=1,c=0;for(this[o]=e&255;++p<r&&(m*=256);)e<0&&c===0&&this[o+p-1]!==0&&(c=1),this[o+p]=(e/m>>0)-c&255;return o+r};i.prototype.writeIntBE=function(e,o,r,t){if(e=+e,o=o>>>0,!t){var a=Math.pow(2,8*r-1);T(this,e,o,r,a-1,-a)}var p=r-1,m=1,c=0;for(this[o+p]=e&255;--p>=0&&(m*=256);)e<0&&c===0&&this[o+p+1]!==0&&(c=1),this[o+p]=(e/m>>0)-c&255;return o+r};i.prototype.writeInt8=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};i.prototype.writeInt16LE=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeInt16BE=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeInt32LE=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};i.prototype.writeInt32BE=function(e,o,r){return e=+e,o=o>>>0,r||T(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function go(n,e,o,r,t,a){if(o+r>n.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function uo(n,e,o,r,t){return e=+e,o=o>>>0,t||go(n,e,o,4,34028234663852886e22,-34028234663852886e22),$.write(n,e,o,r,23,4),o+4}i.prototype.writeFloatLE=function(e,o,r){return uo(this,e,o,!0,r)};i.prototype.writeFloatBE=function(e,o,r){return uo(this,e,o,!1,r)};function fo(n,e,o,r,t){return e=+e,o=o>>>0,t||go(n,e,o,8,17976931348623157e292,-17976931348623157e292),$.write(n,e,o,r,52,8),o+8}i.prototype.writeDoubleLE=function(e,o,r){return fo(this,e,o,!0,r)};i.prototype.writeDoubleBE=function(e,o,r){return fo(this,e,o,!1,r)};i.prototype.copy=function(e,o,r,t){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!t&&t!==0&&(t=this.length),o>=e.length&&(o=e.length),o||(o=0),t>0&&t<r&&(t=r),t===r||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("sourceEnd out of bounds");t>this.length&&(t=this.length),e.length-o<t-r&&(t=e.length-o+r);var a=t-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,r,t):Uint8Array.prototype.set.call(e,this.subarray(r,t),o),a};i.prototype.fill=function(e,o,r,t){if(typeof e=="string"){if(typeof o=="string"?(t=o,o=0,r=this.length):typeof r=="string"&&(t=r,r=this.length),t!==void 0&&typeof t!="string")throw new TypeError("encoding must be a string");if(typeof t=="string"&&!i.isEncoding(t))throw new TypeError("Unknown encoding: "+t);if(e.length===1){var a=e.charCodeAt(0);(t==="utf8"&&a<128||t==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<r)throw new RangeError("Out of range index");if(r<=o)return this;o=o>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<r;++p)this[p]=e;else{var m=i.isBuffer(e)?e:i.from(e,t),c=m.length;if(c===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<r-o;++p)this[p+o]=m[p%c]}return this};var gr=/[^+/0-9A-Za-z-_]/g;function ur(n){if(n=n.split("=")[0],n=n.trim().replace(gr,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function Le(n,e){e=e||1/0;for(var o,r=n.length,t=null,a=[],p=0;p<r;++p){if(o=n.charCodeAt(p),o>55295&&o<57344){if(!t){if(o>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(p+1===r){(e-=3)>-1&&a.push(239,191,189);continue}t=o;continue}if(o<56320){(e-=3)>-1&&a.push(239,191,189),t=o;continue}o=(t-55296<<10|o-56320)+65536}else t&&(e-=3)>-1&&a.push(239,191,189);if(t=null,o<128){if((e-=1)<0)break;a.push(o)}else if(o<2048){if((e-=2)<0)break;a.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;a.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;a.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return a}function fr(n){for(var e=[],o=0;o<n.length;++o)e.push(n.charCodeAt(o)&255);return e}function hr(n,e){for(var o,r,t,a=[],p=0;p<n.length&&!((e-=2)<0);++p)o=n.charCodeAt(p),r=o>>8,t=o%256,a.push(t),a.push(r);return a}function ho(n){return Te.toByteArray(ur(n))}function me(n,e,o,r){for(var t=0;t<r&&!(t+o>=e.length||t>=n.length);++t)e[t+o]=n[t];return t}function I(n,e){return n instanceof e||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===e.name}function Ce(n){return n!==n}var xr=function(){for(var n="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var r=o*16,t=0;t<16;++t)e[r+t]=n[o]+n[t];return e}()});var vo=_e((Zr,ko)=>{_();var x=ko.exports={},C,E;function Ee(){throw new Error("setTimeout has not been defined")}function Re(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?C=setTimeout:C=Ee}catch(n){C=Ee}try{typeof clearTimeout=="function"?E=clearTimeout:E=Re}catch(n){E=Re}})();function bo(n){if(C===setTimeout)return setTimeout(n,0);if((C===Ee||!C)&&setTimeout)return C=setTimeout,setTimeout(n,0);try{return C(n,0)}catch(e){try{return C.call(null,n,0)}catch(o){return C.call(this,n,0)}}}function br(n){if(E===clearTimeout)return clearTimeout(n);if((E===Re||!E)&&clearTimeout)return E=clearTimeout,clearTimeout(n);try{return E(n)}catch(e){try{return E.call(null,n)}catch(o){return E.call(this,n)}}}var B=[],Z=!1,X,de=-1;function yr(){!Z||!X||(Z=!1,X.length?B=X.concat(B):de=-1,B.length&&yo())}function yo(){if(!Z){var n=bo(yr);Z=!0;for(var e=B.length;e;){for(X=B,B=[];++de<e;)X&&X[de].run();de=-1,e=B.length}X=null,Z=!1,br(n)}}x.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];B.push(new wo(n,e)),B.length===1&&!Z&&bo(yo)};function wo(n,e){this.fun=n,this.array=e}wo.prototype.run=function(){this.fun.apply(null,this.array)};x.title="browser";x.browser=!0;x.env={};x.argv=[];x.version="";x.versions={};function P(){}x.on=P;x.addListener=P;x.once=P;x.off=P;x.removeListener=P;x.removeAllListeners=P;x.emit=P;x.prependListener=P;x.prependOnceListener=P;x.listeners=function(n){return[]};x.binding=function(n){throw new Error("process.binding is not supported")};x.cwd=function(){return"/"};x.chdir=function(n){throw new Error("process.chdir is not supported")};x.umask=function(){return 0}});var d,s,Qr,_=K(()=>{d=h(xo()),s=h(vo()),Qr=function(n){function e(){var r=this||self;return delete n.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var Be={};Y(Be,{css:()=>Ro,default:()=>kr});var Ro,kr,Pe=K(()=>{"use strict";_();Ro=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ro));kr={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Ge={};Y(Ge,{css:()=>zo,default:()=>Ir});var zo,Ir,ze=K(()=>{"use strict";_();zo=`.dapp-core-component__styles__decode {
  margin-top: 0.25rem;
  position: relative;
  max-width: 100%;
  flex: 1;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea {
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  border: 1px solid #dee2e6;
  background-color: #fafafa;
  font-size: 0.8125rem;
  min-height: 3.125rem;
  height: 4.5rem;
  overflow: auto;
  padding: 0.375rem 6rem 0.375rem 0.75rem;
  word-wrap: break-word;
  white-space: pre-wrap;
  resize: vertical;
  scrollbar-width: thin;
  overflow-x: hidden;
  width: 100%;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea:hover {
  border: 1px solid #dee2e6;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .dapp-core-component__styles__decode .dapp-core-component__styles__textarea:before {
    background: #fafafa;
    content: "";
    bottom: 1px;
    right: 1px;
    width: 16px;
    height: 16px;
    position: absolute;
    cursor: ns-resize;
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .dapp-core-component__styles__decode .dapp-core-component__styles__textarea:after {
    content: "";
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    -webkit-clip-path: polygon(80% 0, 80% 80%, 0 80%);
    clip-path: polygon(80% 0, 80% 80%, 0 80%);
    cursor: ns-resize;
    background: repeating-linear-gradient(135deg, #dee2e6, #dee2e6 1px, transparent 0, transparent 3px);
  }
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar {
  background-color: #fafafa;
  width: 1rem;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-track {
  background-color: #fafafa;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-track:hover {
  background-color: #fafafa;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-thumb {
  background-color: #dee2e6;
  border-radius: 1rem;
  border: 5px solid #fafafa;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a5;
  border: 4px solid #fafafa;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-resizer {
  background-color: transparent;
}
@-moz-document url-prefix() {
  .dapp-core-component__styles__decode:before, .dapp-core-component__styles__decode:after {
    display: none;
  }
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select {
  right: 0.313rem;
  top: 0.313rem;
  position: absolute;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select:after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  top: calc(50% + 1px);
  transform: translateY(-50%);
  left: calc(50% + 0.5rem);
  border-top: 0.25rem solid;
  border-right: 0.25rem solid transparent;
  border-bottom: 0;
  border-left: 0.25rem solid transparent;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select .dapp-core-component__styles__dropdown {
  appearance: none;
  text-align: center;
  padding: 0.25rem 0.5rem;
  text-indent: -10px;
  font-size: 0.6875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: transparent;
  border: 1px solid #e4e5e5;
  transition: all 400ms ease;
  cursor: pointer;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select .dapp-core-component__styles__dropdown:hover {
  background-color: #eeeeee;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select .dapp-core-component__styles__dropdown:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.13);
  background-color: #eeeeee;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select .dapp-core-component__styles__dropdown:focus {
  outline: none;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__warnings {
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__warnings .dapp-core-component__styles__icon {
  margin-right: 0.25rem;
  color: #f0ad4e;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__warnings .dapp-core-component__styles__warning {
  color: #f0ad4e;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zo));Ir={decode:"dapp-core-component__styles__decode",textarea:"dapp-core-component__styles__textarea",select:"dapp-core-component__styles__select",dropdown:"dapp-core-component__styles__dropdown",warnings:"dapp-core-component__styles__warnings",icon:"dapp-core-component__styles__icon",warning:"dapp-core-component__styles__warning"}});var O={};Y(O,{css:()=>an,default:()=>Fr});var an,Fr,G=K(()=>{"use strict";_();an=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(an));Fr={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var qe={};Y(qe,{css:()=>kn,default:()=>Gr});var kn,Gr,Xe=K(()=>{"use strict";_();kn=`.dapp-core-component__dataField-module__data-field .dapp-core-component__dataField-module__form-control:disabled,
.dapp-core-component__dataField-module__data-field .dapp-core-component__dataField-module__form-control[readonly] {
  background-color: #fafafa;
}
.dapp-core-component__dataField-module__data-field .dapp-core-component__dataField-module__small-font {
  font-size: 0.8125rem;
}

.dapp-core-component__dataField-module__modal-container .dapp-core-component__dataField-module__modal-dialog .dapp-core-component__dataField-module__modal-content {
  align-items: center;
  border-radius: 0.25rem;
}
.dapp-core-component__dataField-module__modal-container .dapp-core-component__dataField-module__modal-dialog .dapp-core-component__dataField-module__card .dapp-core-component__dataField-module__card-body {
  box-shadow: inset 0 4px 0 0 #1b46c2;
  border-radius: 0.25rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kn));Gr={"data-field":"dapp-core-component__dataField-module__data-field",dataField:"dapp-core-component__dataField-module__data-field","form-control":"dapp-core-component__dataField-module__form-control",formControl:"dapp-core-component__dataField-module__form-control","small-font":"dapp-core-component__dataField-module__small-font",smallFont:"dapp-core-component__dataField-module__small-font","modal-container":"dapp-core-component__dataField-module__modal-container",modalContainer:"dapp-core-component__dataField-module__modal-container","modal-dialog":"dapp-core-component__dataField-module__modal-dialog",modalDialog:"dapp-core-component__dataField-module__modal-dialog","modal-content":"dapp-core-component__dataField-module__modal-content",modalContent:"dapp-core-component__dataField-module__modal-content",card:"dapp-core-component__dataField-module__card","card-body":"dapp-core-component__dataField-module__card-body",cardBody:"dapp-core-component__dataField-module__card-body"}});var Ye={};Y(Ye,{css:()=>Tn,default:()=>jr});var Tn,jr,$e=K(()=>{"use strict";_();Tn=`.dapp-core-component__detailItem-module__detail-item:last-child {
  border-bottom: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tn));jr={"detail-item":"dapp-core-component__detailItem-module__detail-item",detailItem:"dapp-core-component__detailItem-module__detail-item"}});var Xr={};Y(Xr,{TransactionInfoInputData:()=>qr});module.exports=F(Xr);_();var Je=h(require("react"));_();_();var z=h(require("react")),Ke=h(require("classnames"));_();_();_();_();_();_();_();_();_();_();_();_();_();_();_();var wr=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Q=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums");var To=(o=>(o.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",o.reloginRequest="RELOGIN_REQUEST",o))(To||{}),dt=S(S({},Q.WindowProviderRequestEnums),To),So=(e=>(e.reloginResponse="RELOGIN_RESPONSE",e))(So||{}),st=S(S({},Q.WindowProviderResponseEnums),So);_();_();_();var R=(t=>(t.raw="raw",t.text="text",t.decimal="decimal",t.smart="smart",t))(R||{});_();_();_();var De={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ao,egldLabel:It}=De["devnet"],{chainId:Lo,egldLabel:Ct}=De["testnet"],{chainId:No,egldLabel:Et}=De["mainnet"];var Rt={["devnet"]:Ao,["testnet"]:Lo,["mainnet"]:No},Dt={[Ao]:"devnet",[Lo]:"testnet",[No]:"mainnet"};_();_();var D=require("@multiversx/sdk-web-wallet-provider");_();_();var Fe=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants");var Io,Co,Me=String((Co=(Io=Fe.safeWindow)==null?void 0:Io.navigator)==null?void 0:Co.userAgent),Wt=/^((?!chrome|android).)*safari/i.test(Me),Ot=/firefox/i.test(Me)&&/windows/i.test(Me);var se="N/A";_();var Fo=h(require("react"));_();var re=h(require("react"));_();_();var le=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined";var Eo=()=>!le();var vr=()=>we(void 0,null,function*(){return yield Promise.resolve().then(()=>(Pe(),Be))}),Tr=()=>(Pe(),F(Be)).default,Ue=Eo();function Do({ssrGlobalImportCallback:n,ssrImportCallback:e,clientImportCallback:o}){let[r,t]=re.default.useState(Ue?void 0:Tr()),[a,p]=re.default.useState(Ue||o==null?void 0:o()),m=()=>we(this,null,function*(){(n?n():vr()).then(c=>t(c.default)),e==null||e().then(c=>p(c.default))});return(0,re.useEffect)(()=>{Ue&&m()},[]),{globalStyles:r,styles:a}}function k(n,e){return o=>{let{globalStyles:r,styles:t}=Do({ssrGlobalImportCallback:e.ssrGlobalStyles,ssrImportCallback:e.ssrStyles,clientImportCallback:e.clientStyles});return Fo.default.createElement(n,H(S({},o),{globalStyles:r!=null?r:{},styles:t!=null?t:{}}))}}_();var W=h(require("react")),Ho=require("@fortawesome/free-solid-svg-icons"),jo=require("@fortawesome/react-fontawesome"),Vo=h(require("classnames"));_();var ue=require("react");_();_();_();_();var Po=require("@multiversx/sdk-core/out"),Oe=h(require("bignumber.js"));_();var Mo=require("@multiversx/sdk-core");function Sr(n){try{let e=new Mo.Address(n);return Boolean(e.bech32())}catch(e){return!1}}function Bo(n){return(n==null?void 0:n.length)===62&&/^\w+$/.test(n)&&Sr(n)}_();_();_();_();function We(n){for(let e=0;e<n.length;e++)if(n.charCodeAt(e)>127)return!1;return!0}_();_();var U=(n,e,o)=>{switch(e){case"text":try{return d.Buffer.from(n,"hex").toString("utf8")}catch(r){}return n;case"decimal":return n!==""?new Oe.default(n,16).toString(10):"";case"smart":try{let r=Po.Address.fromHex(n).toString();if(Bo(r))return r}catch(r){}try{let r=d.Buffer.from(n,"hex").toString("utf8");if(We(r))return r;{if(o&&[...o.esdts,...o.nfts].some(p=>r.includes(p)))return r;let t=new Oe.default(n,16);return t.isFinite()?t.toString(10):n}}catch(r){}return n;case"raw":default:return n}};_();_();var Ar=n=>n.toLowerCase().match(/^[0-9a-f]+$/i),Lr=n=>n.length%2===0,Uo=n=>{let e=[];return n&&!Ar(n)&&e.push(`Invalid Hex characters on argument @${n}`),n&&!Lr(n)&&e.push(`Odd number of Hex characters on argument @${n}`),e};_();var ge=({parts:n,decodedParts:e,identifier:o})=>{let r=[...e];if(n[0]==="ESDTNFTTransfer"&&n[2]&&(r[2]=U(n[2],"decimal")),o==="ESDTNFTTransfer"&&n[1]){let t=d.Buffer.from(String(n[1]),"base64");r[1]=U(t.toString("hex"),"decimal")}return r};var Wo=({parts:n,decodeMethod:e,identifier:o,display:r})=>{let t=n.map((p,m)=>{if(n.length>=2&&(m===0&&p.length<64||m===1&&!n[0]))return/[^a-z0-9]/gi.test(p)?U(p,e):p;{let c=Uo(p);return c.length&&(r.validationWarnings=Array.from(new Set([...r.validationWarnings,...c]))),U(p,e)}});return e==="smart"?ge({parts:n,decodedParts:t,identifier:o}):t};var Oo=({input:n,decodeMethod:e,identifier:o})=>{let r={displayValue:"",validationWarnings:[]};if(!n.includes("@")&&!n.includes(`
`))return r.displayValue=U(n,e),r;if(n.includes("@")){let t=n.split("@"),a=Wo({parts:t,identifier:o,decodeMethod:e,display:r});r.displayValue=a.join("@")}if(n.includes(`
`)){let t=n.split(`
`),a=t.map(m=>{let c=d.Buffer.from(m,"base64");return e==="raw"?m:U(c.toString("hex"),e)}),p=e==="smart"?ge({parts:t,decodedParts:a,identifier:o}):a;r.displayValue=p.join(`
`)}return r};var Nr=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}],Go=({value:n,initialDecodeMethod:e,setDecodeMethod:o,identifier:r})=>{let[t,a]=(0,ue.useState)(e&&Object.values(R).includes(e)?e:"raw"),{displayValue:p,validationWarnings:m}=Oo({input:n,decodeMethod:t,identifier:r});return(0,ue.useEffect)(()=>{o&&o(t)},[t]),{displayValue:p,validationWarnings:m,setActiveKey:a,decodeOptions:Nr}};var Cr=n=>{let{className:e,value:o,styles:r}=n,{displayValue:t,validationWarnings:a,setActiveKey:p,decodeOptions:m}=Go(n),c=o&&o!==se,g=u=>u?p(u.target.value):"raw";return W.default.createElement("div",{className:r==null?void 0:r.decode},W.default.createElement("div",{className:(0,Vo.default)(r==null?void 0:r.textarea,e)},t),c&&W.default.createElement("div",{className:r==null?void 0:r.select},W.default.createElement("select",{className:r==null?void 0:r.dropdown,onChange:g},m.map(u=>W.default.createElement("option",{key:u.value,value:u.value},u.label)))),a.map((u,f)=>W.default.createElement("div",{key:f,className:r==null?void 0:r.warnings},W.default.createElement(jo.FontAwesomeIcon,{icon:Ho.faExclamationTriangle,className:r==null?void 0:r.icon,size:"xs"}),W.default.createElement("small",{className:r==null?void 0:r.warning},u))))},qo=k(Cr,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),Ge)),clientStyles:()=>(ze(),F(Ge)).default});_();function Xo(n,e,o="..."){return isNaN(e)&&(e=10),o||(o="..."),n!=null&&(n.length<=e||n.length-o.length<=e)?n:String(n).substring(0,e-o.length)+o}_();var Ko=h(require("linkifyjs")),Er=n=>{let e=Ko.find(n);if(!e.length)return{textWithLinks:n,hasLinks:!1};let o=n;for(let r of e){let t=n.substring(r.start,r.end);o=o.replace(t,r.value)}return{textWithLinks:o,hasLinks:!0}},Yo=({message:n,scamInfo:e,isNsfw:o,verified:r,messagePrefix:t="Message hidden due to suspicious content - "})=>{var c;if(r)return{message:"",textWithLinks:"",isSuspicious:!1};let a=`${t}${(c=e==null?void 0:e.info)!=null?c:"suspicious content"}`,{textWithLinks:p,hasLinks:m}=Er(n);return m||o||e?{message:a,textWithLinks:p,isSuspicious:!0}:{message:"",textWithLinks:p,isSuspicious:!1}};_();var fe=require("react");_();var $o=()=>{if(!le())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:e,hash:o,origin:r,href:t,search:a}}=window;return{pathname:e,hash:o,origin:r,href:t,search:a}};var Jo=()=>{let{hash:n,pathname:e}=$o(),o=n.replace("#",""),r=o&&Object.values(R).includes(o)?o:"raw",[t,a]=(0,fe.useState)(o);return(0,fe.useEffect)(()=>{t&&t!=="raw"&&(window==null||window.history.replaceState({},document==null?void 0:document.title,`${e}#${t}`))},[t,e]),{initialDecodeMethod:r,decodeMethod:t,setDecodeMethod:a}};_();_();_();var He=h(require("react")),rn=h(require("linkify-react"));_();var on=h(require("react"));_();var Zo=h(require("linkifyjs")),Rr=/^((file:\/\/\/)|(https?:|ftps?:)\/\/|(mailto:))/i,Dr=n=>Rr.test(n),Qo=n=>Dr(n)?"":Zo.find(n).some(e=>e.type==="email")?"mailto:":"http://",en=(n,e)=>n.length>e?n.substring(0,e)+"\u2026":n;var nn=t=>{var a=t,{href:n,linkComponent:e,truncate:o}=a,r=pe(a,["href","linkComponent","truncate"]);let p=e!=null?e:"a",m=Qo(n),c=o?en(n,o):n;return on.default.createElement(p,H(S({},r),{href:`${m}${n}`}),c)};var tn=o=>{var r=o,{children:n}=r,e=pe(r,["children"]);return He.default.createElement(rn.default,{options:{render:({attributes:a})=>{let{href:p}=a;return He.default.createElement(nn,H(S({},e),{href:p}))}}},n)};_();_();_();var w=h(require("react")),bn=require("@fortawesome/free-solid-svg-icons"),yn=require("@fortawesome/react-fontawesome"),oe=h(require("classnames"));_();var j=h(require("react")),un=require("react"),fn=require("react"),Ve=h(require("classnames")),hn=require("react-dom");_();var pn=h(require("react")),_n=h(require("classnames"));var Mr=({className:n,children:e,styles:o})=>pn.default.createElement("div",{className:(0,_n.default)(o==null?void 0:o.dappModalBody,n)},e),cn=k(Mr,{ssrStyles:()=>Promise.resolve().then(()=>(G(),O)),clientStyles:()=>(G(),F(O)).default});_();var je=h(require("react")),mn=h(require("classnames"));var Br=({visible:n,customFooter:e,className:o,footerText:r,styles:t})=>n?je.default.createElement("div",{className:(0,mn.default)(t==null?void 0:t.dappModalFooter,o)},e!=null?e:je.default.createElement("div",null,r)):null,dn=k(Br,{ssrStyles:()=>Promise.resolve().then(()=>(G(),O)),clientStyles:()=>(G(),F(O)).default});_();var ee=h(require("react")),sn=require("@fortawesome/free-solid-svg-icons"),ln=require("@fortawesome/react-fontawesome"),te=h(require("classnames"));var Pr=({visible:n,headerText:e,customHeader:o,className:r,closeButtonClassName:t,headerTextClassName:a,onHide:p,globalStyles:m,styles:c})=>n?o?ee.default.createElement("div",{className:(0,te.default)(c==null?void 0:c.dappModalHeader,r)},o):ee.default.createElement("div",{className:(0,te.default)(c==null?void 0:c.dappModalHeader,r)},ee.default.createElement("div",{className:(0,te.default)(c==null?void 0:c.dappModalHeaderText,a)},e),ee.default.createElement("button",{onClick:p,className:(0,te.default)(c==null?void 0:c.dappModalCloseButton,m==null?void 0:m.btn,m==null?void 0:m.btnLight,t)},ee.default.createElement(ln.FontAwesomeIcon,{size:"lg",icon:sn.faTimes}))):null,gn=k(Pr,{ssrStyles:()=>Promise.resolve().then(()=>(G(),O)),clientStyles:()=>(G(),F(O)).default});var Ur={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Wr=({"data-testid":n="dappModal",children:e,className:o="dapp-modal-dialog-wrapper",closeOnEscape:r,config:t=Ur,id:a="dapp-modal",onHide:p,parentElement:m,visible:c,styles:g})=>{let[u,f]=(0,un.useState)(!1);if((0,fn.useEffect)(()=>{f(!0)},[]),!c)return null;let{showHeader:v,showFooter:y,headerText:L,footerText:be,modalDialogClassName:An="dapp-modal-dialog",modalContentClassName:Ln="dapp-modal-dialog-content",modalHeaderClassName:Nn="dapp-modal-dialog-header",modalHeaderTextClassName:In="dapp-modal-dialog-header-text",modalCloseButtonClassName:Cn="dapp-modal-dialog-close-button",modalBodyClassName:En="dapp-modal-dialog-content-body",modalFooterClassName:Rn="dapp-modal-dialog-footer",customModalHeader:Dn,customModalFooter:Fn}=t,Mn=Bn=>{Bn.key==="Escape"&&r&&(p==null||p())};return j.default.createElement(j.default.Fragment,null,u&&(0,hn.createPortal)(j.default.createElement("div",{id:a,role:"dialog","aria-modal":"true",className:(0,Ve.default)(An,g==null?void 0:g.dappModal,o),"data-testid":n,onKeyDown:Mn},j.default.createElement("div",{className:(0,Ve.default)(g==null?void 0:g.dappModalContent,Ln)},j.default.createElement(gn,{visible:v,headerText:L,customHeader:Dn,className:Nn,headerTextClassName:In,closeButtonClassName:Cn,onHide:p}),j.default.createElement(cn,{className:En},e),j.default.createElement(dn,{visible:y,customFooter:Fn,footerText:be,className:Rn}))),m!=null?m:document==null?void 0:document.body))},xn=k(Wr,{ssrStyles:()=>Promise.resolve().then(()=>(G(),O)),clientStyles:()=>(G(),F(O)).default});var Or=n=>{let{globalStyles:e}=n,[o,r]=(0,w.useState)(!1),t=m=>{m.preventDefault(),r(!0)},a=()=>{r(!1)},p=n.href.replace("https://","").replace("http://","");return w.default.createElement(w.default.Fragment,null,w.default.createElement("a",H(S({},n),{onClick:t})),w.default.createElement(xn,{visible:o,onHide:a},w.default.createElement("div",{className:e==null?void 0:e.card},w.default.createElement("div",{className:(0,oe.default)(e==null?void 0:e.cardBody,e==null?void 0:e.textCenter)},w.default.createElement("p",{className:(0,oe.default)(e==null?void 0:e.h3,e==null?void 0:e.pt1)},w.default.createElement(yn.FontAwesomeIcon,{icon:bn.faExclamationTriangle,className:(0,oe.default)(e==null?void 0:e.textWarning,e==null?void 0:e.mr2)}),"Caution!"),w.default.createElement("p",{className:e==null?void 0:e.lead},"You are about to navigate to an external website."),w.default.createElement("div",{className:e==null?void 0:e.mxAuto},w.default.createElement("p",null,"This link is not part of MultiversX. Do not enter your private words, your keystore file or any of your MultiversX account information.")),w.default.createElement("div",{className:(0,oe.default)(e==null?void 0:e.dFlex,e==null?void 0:e.alignItemsCenter,e==null?void 0:e.flexColumn)},w.default.createElement("button",{type:"button",className:(0,oe.default)(e==null?void 0:e.btn,e==null?void 0:e.btnPrimary),onClick:a},"Back to safety"),w.default.createElement("a",{href:n.href,target:"_blank",className:e==null?void 0:e.mt3,rel:"noreferrer noopener"},"Continue to ",p))))))},wn=k(Or,{});var zr=1e6,Hr=({data:n,scamInfo:e,globalStyles:o,styles:r})=>{let{initialDecodeMethod:t,setDecodeMethod:a}=Jo(),[p,m]=(0,z.useState)(!1),c=y=>{y.preventDefault(),m(L=>!L)},g=n?d.Buffer.from(n,"base64").toString():se,{textWithLinks:u,message:f,isSuspicious:v}=Yo({message:g,scamInfo:e});return z.default.createElement(z.default.Fragment,null,p?z.default.createElement("div",{className:(0,Ke.default)(o==null?void 0:o.formControl,o==null?void 0:o.col,o==null?void 0:o.mt1)},z.default.createElement(tn,{linkComponent:wn,target:"_blank",rel:"noreferrer noopener"},u)):z.default.createElement(qo,{value:Xo(f,zr),initialDecodeMethod:t,setDecodeMethod:a}),v&&z.default.createElement("a",{href:"/#",onClick:c,className:(0,Ke.default)(o==null?void 0:o.textMuted,r==null?void 0:r.smallFont)},p?"Hide":"Show"," original message"))},vn=k(Hr,{ssrStyles:()=>Promise.resolve().then(()=>(Xe(),qe)),clientStyles:()=>(Xe(),F(qe)).default});_();var he=h(require("react")),xe=h(require("classnames"));var Vr=({children:n,title:e,className:o="",colWidth:r="2",noBorder:t=!1,globalStyles:a,styles:p})=>{var m,c,g,u;return he.default.createElement("div",{className:(0,xe.default)(a==null?void 0:a.row,p==null?void 0:p.detailItem,o,{[(m=a==null?void 0:a.pt3)!=null?m:""]:t,[(c=a==null?void 0:a.pb1)!=null?c:""]:t,[(g=a==null?void 0:a.borderBottom)!=null?g:""]:!t,[(u=a==null?void 0:a.py3)!=null?u:""]:!t})},he.default.createElement("div",{className:(0,xe.default)(a==null?void 0:a.textSecondary,a==null?void 0:a.textLgRight,a==null?void 0:a.fontWeightMedium,a==null?void 0:a[`colLg${r}`])},e),he.default.createElement("div",{className:(0,xe.default)(a==null?void 0:a.fontWeightMedium,a==null?void 0:a[`colLg${12-Number(r)}`])},n))},Sn=k(Vr,{ssrStyles:()=>Promise.resolve().then(()=>($e(),Ye)),clientStyles:()=>($e(),F(Ye)).default});var qr=({className:n,transaction:e})=>Je.default.createElement(Sn,{className:n,title:"Input Data"},Je.default.createElement(vn,{data:e.data,scamInfo:e.scamInfo}));0&&(module.exports={TransactionInfoInputData});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=TransactionInfoInputData.js.map
