"use strict";var Cn=Object.create;var ee=Object.defineProperty,In=Object.defineProperties,En=Object.getOwnPropertyDescriptor,Rn=Object.getOwnPropertyDescriptors,Fn=Object.getOwnPropertyNames,te=Object.getOwnPropertySymbols,Dn=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var Xe=(n,e,o)=>e in n?ee(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,S=(n,e)=>{for(var o in e||(e={}))xe.call(e,o)&&Xe(n,o,e[o]);if(te)for(var o of te(e))Ke.call(e,o)&&Xe(n,o,e[o]);return n},z=(n,e)=>In(n,Rn(e));var pe=(n,e)=>{var o={};for(var r in n)xe.call(n,r)&&e.indexOf(r)<0&&(o[r]=n[r]);if(n!=null&&te)for(var r of te(n))e.indexOf(r)<0&&Ke.call(n,r)&&(o[r]=n[r]);return o};var oe=(n,e)=>()=>(n&&(e=n(n=0)),e);var _e=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),ne=(n,e)=>{for(var o in e)ee(n,o,{get:e[o],enumerable:!0})},Ye=(n,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Fn(e))!xe.call(n,a)&&a!==o&&ee(n,a,{get:()=>e[a],enumerable:!(r=En(e,a))||r.enumerable});return n};var h=(n,e,o)=>(o=n!=null?Cn(Dn(n)):{},Ye(e||!n||!n.__esModule?ee(o,"default",{value:n,enumerable:!0}):o,n)),H=n=>Ye(ee({},"__esModule",{value:!0}),n);var be=(n,e,o)=>new Promise((r,a)=>{var t=c=>{try{m(o.next(c))}catch(g){a(g)}},p=c=>{try{m(o.throw(c))}catch(g){a(g)}},m=c=>c.done?r(c.value):Promise.resolve(c.value).then(t,p);m((o=o.apply(n,e)).next())});var Ze=_e(ie=>{"use strict";_();ie.byteLength=Bn;ie.toByteArray=Un;ie.fromByteArray=Gn;var N=[],A=[],Mn=typeof Uint8Array!="undefined"?Uint8Array:Array,ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(V=0,$e=ye.length;V<$e;++V)N[V]=ye[V],A[ye.charCodeAt(V)]=V;var V,$e;A["-".charCodeAt(0)]=62;A["_".charCodeAt(0)]=63;function Je(n){var e=n.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=n.indexOf("=");o===-1&&(o=e);var r=o===e?0:4-o%4;return[o,r]}function Bn(n){var e=Je(n),o=e[0],r=e[1];return(o+r)*3/4-r}function Pn(n,e,o){return(e+o)*3/4-o}function Un(n){var e,o=Je(n),r=o[0],a=o[1],t=new Mn(Pn(n,r,a)),p=0,m=a>0?r-4:r,c;for(c=0;c<m;c+=4)e=A[n.charCodeAt(c)]<<18|A[n.charCodeAt(c+1)]<<12|A[n.charCodeAt(c+2)]<<6|A[n.charCodeAt(c+3)],t[p++]=e>>16&255,t[p++]=e>>8&255,t[p++]=e&255;return a===2&&(e=A[n.charCodeAt(c)]<<2|A[n.charCodeAt(c+1)]>>4,t[p++]=e&255),a===1&&(e=A[n.charCodeAt(c)]<<10|A[n.charCodeAt(c+1)]<<4|A[n.charCodeAt(c+2)]>>2,t[p++]=e>>8&255,t[p++]=e&255),t}function Wn(n){return N[n>>18&63]+N[n>>12&63]+N[n>>6&63]+N[n&63]}function On(n,e,o){for(var r,a=[],t=e;t<o;t+=3)r=(n[t]<<16&16711680)+(n[t+1]<<8&65280)+(n[t+2]&255),a.push(Wn(r));return a.join("")}function Gn(n){for(var e,o=n.length,r=o%3,a=[],t=16383,p=0,m=o-r;p<m;p+=t)a.push(On(n,p,p+t>m?m:p+t));return r===1?(e=n[o-1],a.push(N[e>>2]+N[e<<4&63]+"==")):r===2&&(e=(n[o-2]<<8)+n[o-1],a.push(N[e>>10]+N[e>>4&63]+N[e<<2&63]+"=")),a.join("")}});var Qe=_e(we=>{_();we.read=function(n,e,o,r,a){var t,p,m=a*8-r-1,c=(1<<m)-1,g=c>>1,u=-7,f=o?a-1:0,k=o?-1:1,y=n[e+f];for(f+=k,t=y&(1<<-u)-1,y>>=-u,u+=m;u>0;t=t*256+n[e+f],f+=k,u-=8);for(p=t&(1<<-u)-1,t>>=-u,u+=r;u>0;p=p*256+n[e+f],f+=k,u-=8);if(t===0)t=1-g;else{if(t===c)return p?NaN:(y?-1:1)*(1/0);p=p+Math.pow(2,r),t=t-g}return(y?-1:1)*p*Math.pow(2,t-r)};we.write=function(n,e,o,r,a,t){var p,m,c,g=t*8-a-1,u=(1<<g)-1,f=u>>1,k=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=r?0:t-1,L=r?1:-1,he=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(m=isNaN(e)?1:0,p=u):(p=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-p))<1&&(p--,c*=2),p+f>=1?e+=k/c:e+=k*Math.pow(2,1-f),e*c>=2&&(p++,c/=2),p+f>=u?(m=0,p=u):p+f>=1?(m=(e*c-1)*Math.pow(2,a),p=p+f):(m=e*Math.pow(2,f-1)*Math.pow(2,a),p=0));a>=8;n[o+y]=m&255,y+=L,m/=256,a-=8);for(p=p<<a|m,g+=a;g>0;n[o+y]=p&255,y+=L,p/=256,g-=8);n[o+y-L]|=he*128}});var so=_e(Y=>{"use strict";_();var ke=Ze(),K=Qe(),eo=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Y.Buffer=i;Y.SlowBuffer=Xn;Y.INSPECT_MAX_BYTES=50;var ce=2147483647;Y.kMaxLength=ce;i.TYPED_ARRAY_SUPPORT=zn();!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function zn(){try{var n=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(n,e),n.foo()===42}catch(o){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}});Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function D(n){if(n>ce)throw new RangeError('The value "'+n+'" is invalid for option "size"');var e=new Uint8Array(n);return Object.setPrototypeOf(e,i.prototype),e}function i(n,e,o){if(typeof n=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Ae(n)}return ro(n,e,o)}i.poolSize=8192;function ro(n,e,o){if(typeof n=="string")return jn(n,e);if(ArrayBuffer.isView(n))return Vn(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(C(n,ArrayBuffer)||n&&C(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(C(n,SharedArrayBuffer)||n&&C(n.buffer,SharedArrayBuffer)))return Te(n,e,o);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=n.valueOf&&n.valueOf();if(r!=null&&r!==n)return i.from(r,e,o);var a=qn(n);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return i.from(n[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}i.from=function(n,e,o){return ro(n,e,o)};Object.setPrototypeOf(i.prototype,Uint8Array.prototype);Object.setPrototypeOf(i,Uint8Array);function ao(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function Hn(n,e,o){return ao(n),n<=0?D(n):e!==void 0?typeof o=="string"?D(n).fill(e,o):D(n).fill(e):D(n)}i.alloc=function(n,e,o){return Hn(n,e,o)};function Ae(n){return ao(n),D(n<0?0:Le(n)|0)}i.allocUnsafe=function(n){return Ae(n)};i.allocUnsafeSlow=function(n){return Ae(n)};function jn(n,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=to(n,e)|0,r=D(o),a=r.write(n,e);return a!==o&&(r=r.slice(0,a)),r}function ve(n){for(var e=n.length<0?0:Le(n.length)|0,o=D(e),r=0;r<e;r+=1)o[r]=n[r]&255;return o}function Vn(n){if(C(n,Uint8Array)){var e=new Uint8Array(n);return Te(e.buffer,e.byteOffset,e.byteLength)}return ve(n)}function Te(n,e,o){if(e<0||n.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&o===void 0?r=new Uint8Array(n):o===void 0?r=new Uint8Array(n,e):r=new Uint8Array(n,e,o),Object.setPrototypeOf(r,i.prototype),r}function qn(n){if(i.isBuffer(n)){var e=Le(n.length)|0,o=D(e);return o.length===0||n.copy(o,0,0,e),o}if(n.length!==void 0)return typeof n.length!="number"||Ne(n.length)?D(0):ve(n);if(n.type==="Buffer"&&Array.isArray(n.data))return ve(n.data)}function Le(n){if(n>=ce)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ce.toString(16)+" bytes");return n|0}function Xn(n){return+n!=n&&(n=0),i.alloc(+n)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype};i.compare=function(e,o){if(C(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),C(o,Uint8Array)&&(o=i.from(o,o.offset,o.byteLength)),!i.isBuffer(e)||!i.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var r=e.length,a=o.length,t=0,p=Math.min(r,a);t<p;++t)if(e[t]!==o[t]){r=e[t],a=o[t];break}return r<a?-1:a<r?1:0};i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};i.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);var r;if(o===void 0)for(o=0,r=0;r<e.length;++r)o+=e[r].length;var a=i.allocUnsafe(o),t=0;for(r=0;r<e.length;++r){var p=e[r];if(C(p,Uint8Array))t+p.length>a.length?i.from(p).copy(a,t):Uint8Array.prototype.set.call(a,p,t);else if(i.isBuffer(p))p.copy(a,t);else throw new TypeError('"list" argument must be an Array of Buffers');t+=p.length}return a};function to(n,e){if(i.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||C(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var o=n.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&o===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Se(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return lo(n).length;default:if(a)return r?-1:Se(n).length;e=(""+e).toLowerCase(),a=!0}}i.byteLength=to;function Kn(n,e,o){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(n||(n="utf8");;)switch(n){case"hex":return ar(this,e,o);case"utf8":case"utf-8":return _o(this,e,o);case"ascii":return nr(this,e,o);case"latin1":case"binary":return rr(this,e,o);case"base64":return er(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tr(this,e,o);default:if(r)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),r=!0}}i.prototype._isBuffer=!0;function q(n,e,o){var r=n[e];n[e]=n[o],n[o]=r}i.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)q(this,o,o+1);return this};i.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)q(this,o,o+3),q(this,o+1,o+2);return this};i.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)q(this,o,o+7),q(this,o+1,o+6),q(this,o+2,o+5),q(this,o+3,o+4);return this};i.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?_o(this,0,e):Kn.apply(this,arguments)};i.prototype.toLocaleString=i.prototype.toString;i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0};i.prototype.inspect=function(){var e="",o=Y.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};eo&&(i.prototype[eo]=i.prototype.inspect);i.prototype.compare=function(e,o,r,a,t){if(C(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),r===void 0&&(r=e?e.length:0),a===void 0&&(a=0),t===void 0&&(t=this.length),o<0||r>e.length||a<0||t>this.length)throw new RangeError("out of range index");if(a>=t&&o>=r)return 0;if(a>=t)return-1;if(o>=r)return 1;if(o>>>=0,r>>>=0,a>>>=0,t>>>=0,this===e)return 0;for(var p=t-a,m=r-o,c=Math.min(p,m),g=this.slice(a,t),u=e.slice(o,r),f=0;f<c;++f)if(g[f]!==u[f]){p=g[f],m=u[f];break}return p<m?-1:m<p?1:0};function po(n,e,o,r,a){if(n.length===0)return-1;if(typeof o=="string"?(r=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Ne(o)&&(o=a?0:n.length-1),o<0&&(o=n.length+o),o>=n.length){if(a)return-1;o=n.length-1}else if(o<0)if(a)o=0;else return-1;if(typeof e=="string"&&(e=i.from(e,r)),i.isBuffer(e))return e.length===0?-1:oo(n,e,o,r,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(n,e,o):Uint8Array.prototype.lastIndexOf.call(n,e,o):oo(n,[e],o,r,a);throw new TypeError("val must be string, number or Buffer")}function oo(n,e,o,r,a){var t=1,p=n.length,m=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(n.length<2||e.length<2)return-1;t=2,p/=2,m/=2,o/=2}function c(y,L){return t===1?y[L]:y.readUInt16BE(L*t)}var g;if(a){var u=-1;for(g=o;g<p;g++)if(c(n,g)===c(e,u===-1?0:g-u)){if(u===-1&&(u=g),g-u+1===m)return u*t}else u!==-1&&(g-=g-u),u=-1}else for(o+m>p&&(o=p-m),g=o;g>=0;g--){for(var f=!0,k=0;k<m;k++)if(c(n,g+k)!==c(e,k)){f=!1;break}if(f)return g}return-1}i.prototype.includes=function(e,o,r){return this.indexOf(e,o,r)!==-1};i.prototype.indexOf=function(e,o,r){return po(this,e,o,r,!0)};i.prototype.lastIndexOf=function(e,o,r){return po(this,e,o,r,!1)};function Yn(n,e,o,r){o=Number(o)||0;var a=n.length-o;r?(r=Number(r),r>a&&(r=a)):r=a;var t=e.length;r>t/2&&(r=t/2);for(var p=0;p<r;++p){var m=parseInt(e.substr(p*2,2),16);if(Ne(m))return p;n[o+p]=m}return p}function $n(n,e,o,r){return me(Se(e,n.length-o),n,o,r)}function Jn(n,e,o,r){return me(ir(e),n,o,r)}function Zn(n,e,o,r){return me(lo(e),n,o,r)}function Qn(n,e,o,r){return me(cr(e,n.length-o),n,o,r)}i.prototype.write=function(e,o,r,a){if(o===void 0)a="utf8",r=this.length,o=0;else if(r===void 0&&typeof o=="string")a=o,r=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var t=this.length-o;if((r===void 0||r>t)&&(r=t),e.length>0&&(r<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var p=!1;;)switch(a){case"hex":return Yn(this,e,o,r);case"utf8":case"utf-8":return $n(this,e,o,r);case"ascii":case"latin1":case"binary":return Jn(this,e,o,r);case"base64":return Zn(this,e,o,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Qn(this,e,o,r);default:if(p)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),p=!0}};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function er(n,e,o){return e===0&&o===n.length?ke.fromByteArray(n):ke.fromByteArray(n.slice(e,o))}function _o(n,e,o){o=Math.min(n.length,o);for(var r=[],a=e;a<o;){var t=n[a],p=null,m=t>239?4:t>223?3:t>191?2:1;if(a+m<=o){var c,g,u,f;switch(m){case 1:t<128&&(p=t);break;case 2:c=n[a+1],(c&192)===128&&(f=(t&31)<<6|c&63,f>127&&(p=f));break;case 3:c=n[a+1],g=n[a+2],(c&192)===128&&(g&192)===128&&(f=(t&15)<<12|(c&63)<<6|g&63,f>2047&&(f<55296||f>57343)&&(p=f));break;case 4:c=n[a+1],g=n[a+2],u=n[a+3],(c&192)===128&&(g&192)===128&&(u&192)===128&&(f=(t&15)<<18|(c&63)<<12|(g&63)<<6|u&63,f>65535&&f<1114112&&(p=f))}}p===null?(p=65533,m=1):p>65535&&(p-=65536,r.push(p>>>10&1023|55296),p=56320|p&1023),r.push(p),a+=m}return or(r)}var no=4096;function or(n){var e=n.length;if(e<=no)return String.fromCharCode.apply(String,n);for(var o="",r=0;r<e;)o+=String.fromCharCode.apply(String,n.slice(r,r+=no));return o}function nr(n,e,o){var r="";o=Math.min(n.length,o);for(var a=e;a<o;++a)r+=String.fromCharCode(n[a]&127);return r}function rr(n,e,o){var r="";o=Math.min(n.length,o);for(var a=e;a<o;++a)r+=String.fromCharCode(n[a]);return r}function ar(n,e,o){var r=n.length;(!e||e<0)&&(e=0),(!o||o<0||o>r)&&(o=r);for(var a="",t=e;t<o;++t)a+=mr[n[t]];return a}function tr(n,e,o){for(var r=n.slice(e,o),a="",t=0;t<r.length-1;t+=2)a+=String.fromCharCode(r[t]+r[t+1]*256);return a}i.prototype.slice=function(e,o){var r=this.length;e=~~e,o=o===void 0?r:~~o,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),o<e&&(o=e);var a=this.subarray(e,o);return Object.setPrototypeOf(a,i.prototype),a};function b(n,e,o){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+e>o)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,o,r){e=e>>>0,o=o>>>0,r||b(e,o,this.length);for(var a=this[e],t=1,p=0;++p<o&&(t*=256);)a+=this[e+p]*t;return a};i.prototype.readUintBE=i.prototype.readUIntBE=function(e,o,r){e=e>>>0,o=o>>>0,r||b(e,o,this.length);for(var a=this[e+--o],t=1;o>0&&(t*=256);)a+=this[e+--o]*t;return a};i.prototype.readUint8=i.prototype.readUInt8=function(e,o){return e=e>>>0,o||b(e,1,this.length),this[e]};i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||b(e,2,this.length),this[e]|this[e+1]<<8};i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||b(e,2,this.length),this[e]<<8|this[e+1]};i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||b(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};i.prototype.readIntLE=function(e,o,r){e=e>>>0,o=o>>>0,r||b(e,o,this.length);for(var a=this[e],t=1,p=0;++p<o&&(t*=256);)a+=this[e+p]*t;return t*=128,a>=t&&(a-=Math.pow(2,8*o)),a};i.prototype.readIntBE=function(e,o,r){e=e>>>0,o=o>>>0,r||b(e,o,this.length);for(var a=o,t=1,p=this[e+--a];a>0&&(t*=256);)p+=this[e+--a]*t;return t*=128,p>=t&&(p-=Math.pow(2,8*o)),p};i.prototype.readInt8=function(e,o){return e=e>>>0,o||b(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};i.prototype.readInt16LE=function(e,o){e=e>>>0,o||b(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};i.prototype.readInt16BE=function(e,o){e=e>>>0,o||b(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};i.prototype.readInt32LE=function(e,o){return e=e>>>0,o||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};i.prototype.readInt32BE=function(e,o){return e=e>>>0,o||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};i.prototype.readFloatLE=function(e,o){return e=e>>>0,o||b(e,4,this.length),K.read(this,e,!0,23,4)};i.prototype.readFloatBE=function(e,o){return e=e>>>0,o||b(e,4,this.length),K.read(this,e,!1,23,4)};i.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||b(e,8,this.length),K.read(this,e,!0,52,8)};i.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||b(e,8,this.length),K.read(this,e,!1,52,8)};function v(n,e,o,r,a,t){if(!i.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<t)throw new RangeError('"value" argument is out of bounds');if(o+r>n.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,o,r,a){if(e=+e,o=o>>>0,r=r>>>0,!a){var t=Math.pow(2,8*r)-1;v(this,e,o,r,t,0)}var p=1,m=0;for(this[o]=e&255;++m<r&&(p*=256);)this[o+m]=e/p&255;return o+r};i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,o,r,a){if(e=+e,o=o>>>0,r=r>>>0,!a){var t=Math.pow(2,8*r)-1;v(this,e,o,r,t,0)}var p=r-1,m=1;for(this[o+p]=e&255;--p>=0&&(m*=256);)this[o+p]=e/m&255;return o+r};i.prototype.writeUint8=i.prototype.writeUInt8=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,1,255,0),this[o]=e&255,o+1};i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};i.prototype.writeIntLE=function(e,o,r,a){if(e=+e,o=o>>>0,!a){var t=Math.pow(2,8*r-1);v(this,e,o,r,t-1,-t)}var p=0,m=1,c=0;for(this[o]=e&255;++p<r&&(m*=256);)e<0&&c===0&&this[o+p-1]!==0&&(c=1),this[o+p]=(e/m>>0)-c&255;return o+r};i.prototype.writeIntBE=function(e,o,r,a){if(e=+e,o=o>>>0,!a){var t=Math.pow(2,8*r-1);v(this,e,o,r,t-1,-t)}var p=r-1,m=1,c=0;for(this[o+p]=e&255;--p>=0&&(m*=256);)e<0&&c===0&&this[o+p+1]!==0&&(c=1),this[o+p]=(e/m>>0)-c&255;return o+r};i.prototype.writeInt8=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};i.prototype.writeInt16LE=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeInt16BE=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeInt32LE=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};i.prototype.writeInt32BE=function(e,o,r){return e=+e,o=o>>>0,r||v(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function io(n,e,o,r,a,t){if(o+r>n.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function co(n,e,o,r,a){return e=+e,o=o>>>0,a||io(n,e,o,4,34028234663852886e22,-34028234663852886e22),K.write(n,e,o,r,23,4),o+4}i.prototype.writeFloatLE=function(e,o,r){return co(this,e,o,!0,r)};i.prototype.writeFloatBE=function(e,o,r){return co(this,e,o,!1,r)};function mo(n,e,o,r,a){return e=+e,o=o>>>0,a||io(n,e,o,8,17976931348623157e292,-17976931348623157e292),K.write(n,e,o,r,52,8),o+8}i.prototype.writeDoubleLE=function(e,o,r){return mo(this,e,o,!0,r)};i.prototype.writeDoubleBE=function(e,o,r){return mo(this,e,o,!1,r)};i.prototype.copy=function(e,o,r,a){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),o>=e.length&&(o=e.length),o||(o=0),a>0&&a<r&&(a=r),a===r||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-o<a-r&&(a=e.length-o+r);var t=a-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,r,a):Uint8Array.prototype.set.call(e,this.subarray(r,a),o),t};i.prototype.fill=function(e,o,r,a){if(typeof e=="string"){if(typeof o=="string"?(a=o,o=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!i.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var t=e.charCodeAt(0);(a==="utf8"&&t<128||a==="latin1")&&(e=t)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<r)throw new RangeError("Out of range index");if(r<=o)return this;o=o>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<r;++p)this[p]=e;else{var m=i.isBuffer(e)?e:i.from(e,a),c=m.length;if(c===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<r-o;++p)this[p+o]=m[p%c]}return this};var pr=/[^+/0-9A-Za-z-_]/g;function _r(n){if(n=n.split("=")[0],n=n.trim().replace(pr,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function Se(n,e){e=e||1/0;for(var o,r=n.length,a=null,t=[],p=0;p<r;++p){if(o=n.charCodeAt(p),o>55295&&o<57344){if(!a){if(o>56319){(e-=3)>-1&&t.push(239,191,189);continue}else if(p+1===r){(e-=3)>-1&&t.push(239,191,189);continue}a=o;continue}if(o<56320){(e-=3)>-1&&t.push(239,191,189),a=o;continue}o=(a-55296<<10|o-56320)+65536}else a&&(e-=3)>-1&&t.push(239,191,189);if(a=null,o<128){if((e-=1)<0)break;t.push(o)}else if(o<2048){if((e-=2)<0)break;t.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;t.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;t.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return t}function ir(n){for(var e=[],o=0;o<n.length;++o)e.push(n.charCodeAt(o)&255);return e}function cr(n,e){for(var o,r,a,t=[],p=0;p<n.length&&!((e-=2)<0);++p)o=n.charCodeAt(p),r=o>>8,a=o%256,t.push(a),t.push(r);return t}function lo(n){return ke.toByteArray(_r(n))}function me(n,e,o,r){for(var a=0;a<r&&!(a+o>=e.length||a>=n.length);++a)e[a+o]=n[a];return a}function C(n,e){return n instanceof e||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===e.name}function Ne(n){return n!==n}var mr=function(){for(var n="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var r=o*16,a=0;a<16;++a)e[r+a]=n[o]+n[a];return e}()});var xo=_e((zr,ho)=>{_();var x=ho.exports={},I,E;function Ce(){throw new Error("setTimeout has not been defined")}function Ie(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?I=setTimeout:I=Ce}catch(n){I=Ce}try{typeof clearTimeout=="function"?E=clearTimeout:E=Ie}catch(n){E=Ie}})();function go(n){if(I===setTimeout)return setTimeout(n,0);if((I===Ce||!I)&&setTimeout)return I=setTimeout,setTimeout(n,0);try{return I(n,0)}catch(e){try{return I.call(null,n,0)}catch(o){return I.call(this,n,0)}}}function dr(n){if(E===clearTimeout)return clearTimeout(n);if((E===Ie||!E)&&clearTimeout)return E=clearTimeout,clearTimeout(n);try{return E(n)}catch(e){try{return E.call(null,n)}catch(o){return E.call(this,n)}}}var M=[],$=!1,X,de=-1;function lr(){!$||!X||($=!1,X.length?M=X.concat(M):de=-1,M.length&&uo())}function uo(){if(!$){var n=go(lr);$=!0;for(var e=M.length;e;){for(X=M,M=[];++de<e;)X&&X[de].run();de=-1,e=M.length}X=null,$=!1,dr(n)}}x.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];M.push(new fo(n,e)),M.length===1&&!$&&go(uo)};function fo(n,e){this.fun=n,this.array=e}fo.prototype.run=function(){this.fun.apply(null,this.array)};x.title="browser";x.browser=!0;x.env={};x.argv=[];x.version="";x.versions={};function B(){}x.on=B;x.addListener=B;x.once=B;x.off=B;x.removeListener=B;x.removeAllListeners=B;x.emit=B;x.prependListener=B;x.prependOnceListener=B;x.listeners=function(n){return[]};x.binding=function(n){throw new Error("process.binding is not supported")};x.cwd=function(){return"/"};x.chdir=function(n){throw new Error("process.chdir is not supported")};x.umask=function(){return 0}});var d,l,Hr,_=oe(()=>{d=h(so()),l=h(xo()),Hr=function(n){function e(){var r=this||self;return delete n.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var De={};ne(De,{css:()=>Lo,default:()=>gr});var Lo,gr,Me=oe(()=>{"use strict";_();Lo=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lo));gr={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var We={};ne(We,{css:()=>Po,default:()=>wr});var Po,wr,Oe=oe(()=>{"use strict";_();Po=`.dapp-core-component__styles__decode {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Po));wr={decode:"dapp-core-component__styles__decode",textarea:"dapp-core-component__styles__textarea",select:"dapp-core-component__styles__select",dropdown:"dapp-core-component__styles__dropdown",warnings:"dapp-core-component__styles__warnings",icon:"dapp-core-component__styles__icon",warning:"dapp-core-component__styles__warning"}});var W={};ne(W,{css:()=>en,default:()=>Ar});var en,Ar,O=oe(()=>{"use strict";_();en=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(en));Ar={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var je={};ne(je,{css:()=>hn,default:()=>Fr});var hn,Fr,Ve=oe(()=>{"use strict";_();hn=`.dapp-core-component__dataField-module__data-field .dapp-core-component__dataField-module__form-control:disabled,
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hn));Fr={"data-field":"dapp-core-component__dataField-module__data-field",dataField:"dapp-core-component__dataField-module__data-field","form-control":"dapp-core-component__dataField-module__form-control",formControl:"dapp-core-component__dataField-module__form-control","small-font":"dapp-core-component__dataField-module__small-font",smallFont:"dapp-core-component__dataField-module__small-font","modal-container":"dapp-core-component__dataField-module__modal-container",modalContainer:"dapp-core-component__dataField-module__modal-container","modal-dialog":"dapp-core-component__dataField-module__modal-dialog",modalDialog:"dapp-core-component__dataField-module__modal-dialog","modal-content":"dapp-core-component__dataField-module__modal-content",modalContent:"dapp-core-component__dataField-module__modal-content",card:"dapp-core-component__dataField-module__card","card-body":"dapp-core-component__dataField-module__card-body",cardBody:"dapp-core-component__dataField-module__card-body"}});var Pr={};ne(Pr,{DataField:()=>Br});module.exports=H(Pr);_();var G=h(require("react")),qe=h(require("classnames"));_();_();_();_();_();_();_();_();_();_();_();_();_();_();_();var sr=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),J=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums");var bo=(o=>(o.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",o.reloginRequest="RELOGIN_REQUEST",o))(bo||{}),oa=S(S({},J.WindowProviderRequestEnums),bo),yo=(e=>(e.reloginResponse="RELOGIN_RESPONSE",e))(yo||{}),na=S(S({},J.WindowProviderResponseEnums),yo);_();_();_();var R=(a=>(a.raw="raw",a.text="text",a.decimal="decimal",a.smart="smart",a))(R||{});_();_();_();var Ee={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:wo,egldLabel:ba}=Ee["devnet"],{chainId:ko,egldLabel:ya}=Ee["testnet"],{chainId:vo,egldLabel:wa}=Ee["mainnet"];var ka={["devnet"]:wo,["testnet"]:ko,["mainnet"]:vo},va={[wo]:"devnet",[ko]:"testnet",[vo]:"mainnet"};_();_();var F=require("@multiversx/sdk-web-wallet-provider");_();_();var Re=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants");var To,So,Fe=String((So=(To=Re.safeWindow)==null?void 0:To.navigator)==null?void 0:So.userAgent),Ca=/^((?!chrome|android).)*safari/i.test(Fe),Ia=/firefox/i.test(Fe)&&/windows/i.test(Fe);var le="N/A";_();var Co=h(require("react"));_();var re=h(require("react"));_();_();var se=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined";var Ao=()=>!se();var ur=()=>be(void 0,null,function*(){return yield Promise.resolve().then(()=>(Me(),De))}),fr=()=>(Me(),H(De)).default,Be=Ao();function No({ssrGlobalImportCallback:n,ssrImportCallback:e,clientImportCallback:o}){let[r,a]=re.default.useState(Be?void 0:fr()),[t,p]=re.default.useState(Be||o==null?void 0:o()),m=()=>be(this,null,function*(){(n?n():ur()).then(c=>a(c.default)),e==null||e().then(c=>p(c.default))});return(0,re.useEffect)(()=>{Be&&m()},[]),{globalStyles:r,styles:t}}function T(n,e){return o=>{let{globalStyles:r,styles:a}=No({ssrGlobalImportCallback:e.ssrGlobalStyles,ssrImportCallback:e.ssrStyles,clientImportCallback:e.clientStyles});return Co.default.createElement(n,z(S({},o),{globalStyles:r!=null?r:{},styles:a!=null?a:{}}))}}_();var U=h(require("react")),Uo=require("@fortawesome/free-solid-svg-icons"),Wo=require("@fortawesome/react-fontawesome"),Oo=h(require("classnames"));_();var ue=require("react");_();_();_();_();var Ro=require("@multiversx/sdk-core/out"),Ue=h(require("bignumber.js"));_();var Io=require("@multiversx/sdk-core");function hr(n){try{let e=new Io.Address(n);return Boolean(e.bech32())}catch(e){return!1}}function Eo(n){return(n==null?void 0:n.length)===62&&/^\w+$/.test(n)&&hr(n)}_();_();_();_();function Pe(n){for(let e=0;e<n.length;e++)if(n.charCodeAt(e)>127)return!1;return!0}_();_();var P=(n,e,o)=>{switch(e){case"text":try{return d.Buffer.from(n,"hex").toString("utf8")}catch(r){}return n;case"decimal":return n!==""?new Ue.default(n,16).toString(10):"";case"smart":try{let r=Ro.Address.fromHex(n).toString();if(Eo(r))return r}catch(r){}try{let r=d.Buffer.from(n,"hex").toString("utf8");if(Pe(r))return r;{if(o&&[...o.esdts,...o.nfts].some(p=>r.includes(p)))return r;let a=new Ue.default(n,16);return a.isFinite()?a.toString(10):n}}catch(r){}return n;case"raw":default:return n}};_();_();var xr=n=>n.toLowerCase().match(/^[0-9a-f]+$/i),br=n=>n.length%2===0,Fo=n=>{let e=[];return n&&!xr(n)&&e.push(`Invalid Hex characters on argument @${n}`),n&&!br(n)&&e.push(`Odd number of Hex characters on argument @${n}`),e};_();var ge=({parts:n,decodedParts:e,identifier:o})=>{let r=[...e];if(n[0]==="ESDTNFTTransfer"&&n[2]&&(r[2]=P(n[2],"decimal")),o==="ESDTNFTTransfer"&&n[1]){let a=d.Buffer.from(String(n[1]),"base64");r[1]=P(a.toString("hex"),"decimal")}return r};var Do=({parts:n,decodeMethod:e,identifier:o,display:r})=>{let a=n.map((p,m)=>{if(n.length>=2&&(m===0&&p.length<64||m===1&&!n[0]))return/[^a-z0-9]/gi.test(p)?P(p,e):p;{let c=Fo(p);return c.length&&(r.validationWarnings=Array.from(new Set([...r.validationWarnings,...c]))),P(p,e)}});return e==="smart"?ge({parts:n,decodedParts:a,identifier:o}):a};var Mo=({input:n,decodeMethod:e,identifier:o})=>{let r={displayValue:"",validationWarnings:[]};if(!n.includes("@")&&!n.includes(`
`))return r.displayValue=P(n,e),r;if(n.includes("@")){let a=n.split("@"),t=Do({parts:a,identifier:o,decodeMethod:e,display:r});r.displayValue=t.join("@")}if(n.includes(`
`)){let a=n.split(`
`),t=a.map(m=>{let c=d.Buffer.from(m,"base64");return e==="raw"?m:P(c.toString("hex"),e)}),p=e==="smart"?ge({parts:a,decodedParts:t,identifier:o}):t;r.displayValue=p.join(`
`)}return r};var yr=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}],Bo=({value:n,initialDecodeMethod:e,setDecodeMethod:o,identifier:r})=>{let[a,t]=(0,ue.useState)(e&&Object.values(R).includes(e)?e:"raw"),{displayValue:p,validationWarnings:m}=Mo({input:n,decodeMethod:a,identifier:r});return(0,ue.useEffect)(()=>{o&&o(a)},[a]),{displayValue:p,validationWarnings:m,setActiveKey:t,decodeOptions:yr}};var kr=n=>{let{className:e,value:o,styles:r}=n,{displayValue:a,validationWarnings:t,setActiveKey:p,decodeOptions:m}=Bo(n),c=o&&o!==le,g=u=>u?p(u.target.value):"raw";return U.default.createElement("div",{className:r==null?void 0:r.decode},U.default.createElement("div",{className:(0,Oo.default)(r==null?void 0:r.textarea,e)},a),c&&U.default.createElement("div",{className:r==null?void 0:r.select},U.default.createElement("select",{className:r==null?void 0:r.dropdown,onChange:g},m.map(u=>U.default.createElement("option",{key:u.value,value:u.value},u.label)))),t.map((u,f)=>U.default.createElement("div",{key:f,className:r==null?void 0:r.warnings},U.default.createElement(Wo.FontAwesomeIcon,{icon:Uo.faExclamationTriangle,className:r==null?void 0:r.icon,size:"xs"}),U.default.createElement("small",{className:r==null?void 0:r.warning},u))))},Go=T(kr,{ssrStyles:()=>Promise.resolve().then(()=>(Oe(),We)),clientStyles:()=>(Oe(),H(We)).default});_();function zo(n,e,o="..."){return isNaN(e)&&(e=10),o||(o="..."),n!=null&&(n.length<=e||n.length-o.length<=e)?n:String(n).substring(0,e-o.length)+o}_();var Ho=h(require("linkifyjs")),vr=n=>{let e=Ho.find(n);if(!e.length)return{textWithLinks:n,hasLinks:!1};let o=n;for(let r of e){let a=n.substring(r.start,r.end);o=o.replace(a,r.value)}return{textWithLinks:o,hasLinks:!0}},jo=({message:n,scamInfo:e,isNsfw:o,verified:r,messagePrefix:a="Message hidden due to suspicious content - "})=>{var c;if(r)return{message:"",textWithLinks:"",isSuspicious:!1};let t=`${a}${(c=e==null?void 0:e.info)!=null?c:"suspicious content"}`,{textWithLinks:p,hasLinks:m}=vr(n);return m||o||e?{message:t,textWithLinks:p,isSuspicious:!0}:{message:"",textWithLinks:p,isSuspicious:!1}};_();var fe=require("react");_();var Vo=()=>{if(!se())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:e,hash:o,origin:r,href:a,search:t}}=window;return{pathname:e,hash:o,origin:r,href:a,search:t}};var qo=()=>{let{hash:n,pathname:e}=Vo(),o=n.replace("#",""),r=o&&Object.values(R).includes(o)?o:"raw",[a,t]=(0,fe.useState)(o);return(0,fe.useEffect)(()=>{a&&a!=="raw"&&(window==null||window.history.replaceState({},document==null?void 0:document.title,`${e}#${a}`))},[a,e]),{initialDecodeMethod:r,decodeMethod:a,setDecodeMethod:t}};_();_();_();var Ge=h(require("react")),Zo=h(require("linkify-react"));_();var $o=h(require("react"));_();var Xo=h(require("linkifyjs")),Tr=/^((file:\/\/\/)|(https?:|ftps?:)\/\/|(mailto:))/i,Sr=n=>Tr.test(n),Ko=n=>Sr(n)?"":Xo.find(n).some(e=>e.type==="email")?"mailto:":"http://",Yo=(n,e)=>n.length>e?n.substring(0,e)+"\u2026":n;var Jo=a=>{var t=a,{href:n,linkComponent:e,truncate:o}=t,r=pe(t,["href","linkComponent","truncate"]);let p=e!=null?e:"a",m=Ko(n),c=o?Yo(n,o):n;return $o.default.createElement(p,z(S({},r),{href:`${m}${n}`}),c)};var Qo=o=>{var r=o,{children:n}=r,e=pe(r,["children"]);return Ge.default.createElement(Zo.default,{options:{render:({attributes:t})=>{let{href:p}=t;return Ge.default.createElement(Jo,z(S({},e),{href:p}))}}},n)};_();_();_();var w=h(require("react")),gn=require("@fortawesome/free-solid-svg-icons"),un=require("@fortawesome/react-fontawesome"),Q=h(require("classnames"));_();var j=h(require("react")),mn=require("react"),dn=require("react"),He=h(require("classnames")),ln=require("react-dom");_();var on=h(require("react")),nn=h(require("classnames"));var Lr=({className:n,children:e,styles:o})=>on.default.createElement("div",{className:(0,nn.default)(o==null?void 0:o.dappModalBody,n)},e),rn=T(Lr,{ssrStyles:()=>Promise.resolve().then(()=>(O(),W)),clientStyles:()=>(O(),H(W)).default});_();var ze=h(require("react")),an=h(require("classnames"));var Nr=({visible:n,customFooter:e,className:o,footerText:r,styles:a})=>n?ze.default.createElement("div",{className:(0,an.default)(a==null?void 0:a.dappModalFooter,o)},e!=null?e:ze.default.createElement("div",null,r)):null,tn=T(Nr,{ssrStyles:()=>Promise.resolve().then(()=>(O(),W)),clientStyles:()=>(O(),H(W)).default});_();var Z=h(require("react")),pn=require("@fortawesome/free-solid-svg-icons"),_n=require("@fortawesome/react-fontawesome"),ae=h(require("classnames"));var Cr=({visible:n,headerText:e,customHeader:o,className:r,closeButtonClassName:a,headerTextClassName:t,onHide:p,globalStyles:m,styles:c})=>n?o?Z.default.createElement("div",{className:(0,ae.default)(c==null?void 0:c.dappModalHeader,r)},o):Z.default.createElement("div",{className:(0,ae.default)(c==null?void 0:c.dappModalHeader,r)},Z.default.createElement("div",{className:(0,ae.default)(c==null?void 0:c.dappModalHeaderText,t)},e),Z.default.createElement("button",{onClick:p,className:(0,ae.default)(c==null?void 0:c.dappModalCloseButton,m==null?void 0:m.btn,m==null?void 0:m.btnLight,a)},Z.default.createElement(_n.FontAwesomeIcon,{size:"lg",icon:pn.faTimes}))):null,cn=T(Cr,{ssrStyles:()=>Promise.resolve().then(()=>(O(),W)),clientStyles:()=>(O(),H(W)).default});var Ir={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Er=({"data-testid":n="dappModal",children:e,className:o="dapp-modal-dialog-wrapper",closeOnEscape:r,config:a=Ir,id:t="dapp-modal",onHide:p,parentElement:m,visible:c,styles:g})=>{let[u,f]=(0,mn.useState)(!1);if((0,dn.useEffect)(()=>{f(!0)},[]),!c)return null;let{showHeader:k,showFooter:y,headerText:L,footerText:he,modalDialogClassName:xn="dapp-modal-dialog",modalContentClassName:bn="dapp-modal-dialog-content",modalHeaderClassName:yn="dapp-modal-dialog-header",modalHeaderTextClassName:wn="dapp-modal-dialog-header-text",modalCloseButtonClassName:kn="dapp-modal-dialog-close-button",modalBodyClassName:vn="dapp-modal-dialog-content-body",modalFooterClassName:Tn="dapp-modal-dialog-footer",customModalHeader:Sn,customModalFooter:An}=a,Ln=Nn=>{Nn.key==="Escape"&&r&&(p==null||p())};return j.default.createElement(j.default.Fragment,null,u&&(0,ln.createPortal)(j.default.createElement("div",{id:t,role:"dialog","aria-modal":"true",className:(0,He.default)(xn,g==null?void 0:g.dappModal,o),"data-testid":n,onKeyDown:Ln},j.default.createElement("div",{className:(0,He.default)(g==null?void 0:g.dappModalContent,bn)},j.default.createElement(cn,{visible:k,headerText:L,customHeader:Sn,className:yn,headerTextClassName:wn,closeButtonClassName:kn,onHide:p}),j.default.createElement(rn,{className:vn},e),j.default.createElement(tn,{visible:y,customFooter:An,footerText:he,className:Tn}))),m!=null?m:document==null?void 0:document.body))},sn=T(Er,{ssrStyles:()=>Promise.resolve().then(()=>(O(),W)),clientStyles:()=>(O(),H(W)).default});var Rr=n=>{let{globalStyles:e}=n,[o,r]=(0,w.useState)(!1),a=m=>{m.preventDefault(),r(!0)},t=()=>{r(!1)},p=n.href.replace("https://","").replace("http://","");return w.default.createElement(w.default.Fragment,null,w.default.createElement("a",z(S({},n),{onClick:a})),w.default.createElement(sn,{visible:o,onHide:t},w.default.createElement("div",{className:e==null?void 0:e.card},w.default.createElement("div",{className:(0,Q.default)(e==null?void 0:e.cardBody,e==null?void 0:e.textCenter)},w.default.createElement("p",{className:(0,Q.default)(e==null?void 0:e.h3,e==null?void 0:e.pt1)},w.default.createElement(un.FontAwesomeIcon,{icon:gn.faExclamationTriangle,className:(0,Q.default)(e==null?void 0:e.textWarning,e==null?void 0:e.mr2)}),"Caution!"),w.default.createElement("p",{className:e==null?void 0:e.lead},"You are about to navigate to an external website."),w.default.createElement("div",{className:e==null?void 0:e.mxAuto},w.default.createElement("p",null,"This link is not part of MultiversX. Do not enter your private words, your keystore file or any of your MultiversX account information.")),w.default.createElement("div",{className:(0,Q.default)(e==null?void 0:e.dFlex,e==null?void 0:e.alignItemsCenter,e==null?void 0:e.flexColumn)},w.default.createElement("button",{type:"button",className:(0,Q.default)(e==null?void 0:e.btn,e==null?void 0:e.btnPrimary),onClick:t},"Back to safety"),w.default.createElement("a",{href:n.href,target:"_blank",className:e==null?void 0:e.mt3,rel:"noreferrer noopener"},"Continue to ",p))))))},fn=T(Rr,{});var Dr=1e6,Mr=({data:n,scamInfo:e,globalStyles:o,styles:r})=>{let{initialDecodeMethod:a,setDecodeMethod:t}=qo(),[p,m]=(0,G.useState)(!1),c=y=>{y.preventDefault(),m(L=>!L)},g=n?d.Buffer.from(n,"base64").toString():le,{textWithLinks:u,message:f,isSuspicious:k}=jo({message:g,scamInfo:e});return G.default.createElement(G.default.Fragment,null,p?G.default.createElement("div",{className:(0,qe.default)(o==null?void 0:o.formControl,o==null?void 0:o.col,o==null?void 0:o.mt1)},G.default.createElement(Qo,{linkComponent:fn,target:"_blank",rel:"noreferrer noopener"},u)):G.default.createElement(Go,{value:zo(f,Dr),initialDecodeMethod:a,setDecodeMethod:t}),k&&G.default.createElement("a",{href:"/#",onClick:c,className:(0,qe.default)(o==null?void 0:o.textMuted,r==null?void 0:r.smallFont)},p?"Hide":"Show"," original message"))},Br=T(Mr,{ssrStyles:()=>Promise.resolve().then(()=>(Ve(),je)),clientStyles:()=>(Ve(),H(je)).default});0&&(module.exports={DataField});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=DataField.js.map
