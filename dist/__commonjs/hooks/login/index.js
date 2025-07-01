"use strict";var vs=Object.create;var Bo=Object.defineProperty,ks=Object.defineProperties,As=Object.getOwnPropertyDescriptor,Is=Object.getOwnPropertyDescriptors,Ls=Object.getOwnPropertyNames,dn=Object.getOwnPropertySymbols,Es=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty,Gr=Object.prototype.propertyIsEnumerable;var Wr=(e,o,n)=>o in e?Bo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,h=(e,o)=>{for(var n in o||(o={}))ft.call(o,n)&&Wr(e,n,o[n]);if(dn)for(var n of dn(o))Gr.call(o,n)&&Wr(e,n,o[n]);return e},I=(e,o)=>ks(e,Is(o));var xo=(e,o)=>{var n={};for(var r in e)ft.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&dn)for(var r of dn(e))o.indexOf(r)<0&&Gr.call(e,r)&&(n[r]=e[r]);return n};var y=(e,o)=>()=>(e&&(o=e(e=0)),o);var pe=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),$e=(e,o)=>{for(var n in o)Bo(e,n,{get:o[n],enumerable:!0})},Vr=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Ls(o))!ft.call(e,a)&&a!==n&&Bo(e,a,{get:()=>o[a],enumerable:!(r=As(o,a))||r.enumerable});return e};var A=(e,o,n)=>(n=e!=null?vs(Es(e)):{},Vr(o||!e||!e.__esModule?Bo(n,"default",{value:e,enumerable:!0}):n,e)),Re=e=>Vr(Bo({},"__esModule",{value:!0}),e);var b=(e,o,n)=>new Promise((r,a)=>{var s=l=>{try{d(n.next(l))}catch(_){a(_)}},m=l=>{try{d(n.throw(l))}catch(_){a(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,m);d((n=n.apply(e,o)).next())});var jr=pe(ln=>{"use strict";t();ln.byteLength=Cs;ln.toByteArray=Rs;ln.fromByteArray=Os;var De=[],be=[],Ps=typeof Uint8Array!="undefined"?Uint8Array:Array,ht="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(io=0,Hr=ht.length;io<Hr;++io)De[io]=ht[io],be[ht.charCodeAt(io)]=io;var io,Hr;be["-".charCodeAt(0)]=62;be["_".charCodeAt(0)]=63;function $r(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function Cs(e){var o=$r(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Ns(e,o,n){return(o+n)*3/4-n}function Rs(e){var o,n=$r(e),r=n[0],a=n[1],s=new Ps(Ns(e,r,a)),m=0,d=a>0?r-4:r,l;for(l=0;l<d;l+=4)o=be[e.charCodeAt(l)]<<18|be[e.charCodeAt(l+1)]<<12|be[e.charCodeAt(l+2)]<<6|be[e.charCodeAt(l+3)],s[m++]=o>>16&255,s[m++]=o>>8&255,s[m++]=o&255;return a===2&&(o=be[e.charCodeAt(l)]<<2|be[e.charCodeAt(l+1)]>>4,s[m++]=o&255),a===1&&(o=be[e.charCodeAt(l)]<<10|be[e.charCodeAt(l+1)]<<4|be[e.charCodeAt(l+2)]>>2,s[m++]=o>>8&255,s[m++]=o&255),s}function Ds(e){return De[e>>18&63]+De[e>>12&63]+De[e>>6&63]+De[e&63]}function Ms(e,o,n){for(var r,a=[],s=o;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(e[s+2]&255),a.push(Ds(r));return a.join("")}function Os(e){for(var o,n=e.length,r=n%3,a=[],s=16383,m=0,d=n-r;m<d;m+=s)a.push(Ms(e,m,m+s>d?d:m+s));return r===1?(o=e[n-1],a.push(De[o>>2]+De[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],a.push(De[o>>10]+De[o>>4&63]+De[o<<2&63]+"=")),a.join("")}});var zr=pe(xt=>{t();xt.read=function(e,o,n,r,a){var s,m,d=a*8-r-1,l=(1<<d)-1,_=l>>1,f=-7,u=n?a-1:0,x=n?-1:1,k=e[o+u];for(u+=x,s=k&(1<<-f)-1,k>>=-f,f+=d;f>0;s=s*256+e[o+u],u+=x,f-=8);for(m=s&(1<<-f)-1,s>>=-f,f+=r;f>0;m=m*256+e[o+u],u+=x,f-=8);if(s===0)s=1-_;else{if(s===l)return m?NaN:(k?-1:1)*(1/0);m=m+Math.pow(2,r),s=s-_}return(k?-1:1)*m*Math.pow(2,s-r)};xt.write=function(e,o,n,r,a,s){var m,d,l,_=s*8-a-1,f=(1<<_)-1,u=f>>1,x=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=r?0:s-1,S=r?1:-1,T=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=f):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+u>=1?o+=x/l:o+=x*Math.pow(2,1-u),o*l>=2&&(m++,l/=2),m+u>=f?(d=0,m=f):m+u>=1?(d=(o*l-1)*Math.pow(2,a),m=m+u):(d=o*Math.pow(2,u-1)*Math.pow(2,a),m=0));a>=8;e[n+k]=d&255,k+=S,d/=256,a-=8);for(m=m<<a|d,_+=a;_>0;e[n+k]=m&255,k+=S,m/=256,_-=8);e[n+k-S]|=T*128}});var aa=pe(To=>{"use strict";t();var yt=jr(),yo=zr(),qr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;To.Buffer=g;To.SlowBuffer=Vs;To.INSPECT_MAX_BYTES=50;var _n=2147483647;To.kMaxLength=_n;g.TYPED_ARRAY_SUPPORT=Fs();!g.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Fs(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.buffer}});Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.byteOffset}});function je(e){if(e>_n)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,g.prototype),o}function g(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return St(e)}return Yr(e,o,n)}g.poolSize=8192;function Yr(e,o,n){if(typeof e=="string")return Us(e,o);if(ArrayBuffer.isView(e))return Ws(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Me(e,ArrayBuffer)||e&&Me(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Me(e,SharedArrayBuffer)||e&&Me(e.buffer,SharedArrayBuffer)))return bt(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return g.from(r,o,n);var a=Gs(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return g.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}g.from=function(e,o,n){return Yr(e,o,n)};Object.setPrototypeOf(g.prototype,Uint8Array.prototype);Object.setPrototypeOf(g,Uint8Array);function Jr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Bs(e,o,n){return Jr(e),e<=0?je(e):o!==void 0?typeof n=="string"?je(e).fill(o,n):je(e).fill(o):je(e)}g.alloc=function(e,o,n){return Bs(e,o,n)};function St(e){return Jr(e),je(e<0?0:vt(e)|0)}g.allocUnsafe=function(e){return St(e)};g.allocUnsafeSlow=function(e){return St(e)};function Us(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!g.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=Zr(e,o)|0,r=je(n),a=r.write(e,o);return a!==n&&(r=r.slice(0,a)),r}function Tt(e){for(var o=e.length<0?0:vt(e.length)|0,n=je(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function Ws(e){if(Me(e,Uint8Array)){var o=new Uint8Array(e);return bt(o.buffer,o.byteOffset,o.byteLength)}return Tt(e)}function bt(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,g.prototype),r}function Gs(e){if(g.isBuffer(e)){var o=vt(e.length)|0,n=je(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||kt(e.length)?je(0):Tt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Tt(e.data)}function vt(e){if(e>=_n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+_n.toString(16)+" bytes");return e|0}function Vs(e){return+e!=e&&(e=0),g.alloc(+e)}g.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==g.prototype};g.compare=function(o,n){if(Me(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),Me(n,Uint8Array)&&(n=g.from(n,n.offset,n.byteLength)),!g.isBuffer(o)||!g.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,a=n.length,s=0,m=Math.min(r,a);s<m;++s)if(o[s]!==n[s]){r=o[s],a=n[s];break}return r<a?-1:a<r?1:0};g.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};g.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return g.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var a=g.allocUnsafe(n),s=0;for(r=0;r<o.length;++r){var m=o[r];if(Me(m,Uint8Array))s+m.length>a.length?g.from(m).copy(a,s):Uint8Array.prototype.set.call(a,m,s);else if(g.isBuffer(m))m.copy(a,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=m.length}return a};function Zr(e,o){if(g.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Me(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return wt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return ra(e).length;default:if(a)return r?-1:wt(e).length;o=(""+o).toLowerCase(),a=!0}}g.byteLength=Zr;function Hs(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Qs(this,o,n);case"utf8":case"utf-8":return ea(this,o,n);case"ascii":return Js(this,o,n);case"latin1":case"binary":return Zs(this,o,n);case"base64":return Xs(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return em(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}g.prototype._isBuffer=!0;function co(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}g.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)co(this,n,n+1);return this};g.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)co(this,n,n+3),co(this,n+1,n+2);return this};g.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)co(this,n,n+7),co(this,n+1,n+6),co(this,n+2,n+5),co(this,n+3,n+4);return this};g.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ea(this,0,o):Hs.apply(this,arguments)};g.prototype.toLocaleString=g.prototype.toString;g.prototype.equals=function(o){if(!g.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:g.compare(this,o)===0};g.prototype.inspect=function(){var o="",n=To.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};qr&&(g.prototype[qr]=g.prototype.inspect);g.prototype.compare=function(o,n,r,a,s){if(Me(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),!g.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),a===void 0&&(a=0),s===void 0&&(s=this.length),n<0||r>o.length||a<0||s>this.length)throw new RangeError("out of range index");if(a>=s&&n>=r)return 0;if(a>=s)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,a>>>=0,s>>>=0,this===o)return 0;for(var m=s-a,d=r-n,l=Math.min(m,d),_=this.slice(a,s),f=o.slice(n,r),u=0;u<l;++u)if(_[u]!==f[u]){m=_[u],d=f[u];break}return m<d?-1:d<m?1:0};function Qr(e,o,n,r,a){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,kt(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1;n=e.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof o=="string"&&(o=g.from(o,r)),g.isBuffer(o))return o.length===0?-1:Kr(e,o,n,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):Kr(e,[o],n,r,a);throw new TypeError("val must be string, number or Buffer")}function Kr(e,o,n,r,a){var s=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,m/=2,d/=2,n/=2}function l(k,S){return s===1?k[S]:k.readUInt16BE(S*s)}var _;if(a){var f=-1;for(_=n;_<m;_++)if(l(e,_)===l(o,f===-1?0:_-f)){if(f===-1&&(f=_),_-f+1===d)return f*s}else f!==-1&&(_-=_-f),f=-1}else for(n+d>m&&(n=m-d),_=n;_>=0;_--){for(var u=!0,x=0;x<d;x++)if(l(e,_+x)!==l(o,x)){u=!1;break}if(u)return _}return-1}g.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};g.prototype.indexOf=function(o,n,r){return Qr(this,o,n,r,!0)};g.prototype.lastIndexOf=function(o,n,r){return Qr(this,o,n,r,!1)};function $s(e,o,n,r){n=Number(n)||0;var a=e.length-n;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(kt(d))return m;e[n+m]=d}return m}function js(e,o,n,r){return gn(wt(o,e.length-n),e,n,r)}function zs(e,o,n,r){return gn(tm(o),e,n,r)}function qs(e,o,n,r){return gn(ra(o),e,n,r)}function Ks(e,o,n,r){return gn(rm(o,e.length-n),e,n,r)}g.prototype.write=function(o,n,r,a){if(n===void 0)a="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")a=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var s=this.length-n;if((r===void 0||r>s)&&(r=s),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var m=!1;;)switch(a){case"hex":return $s(this,o,n,r);case"utf8":case"utf-8":return js(this,o,n,r);case"ascii":case"latin1":case"binary":return zs(this,o,n,r);case"base64":return qs(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ks(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),m=!0}};g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Xs(e,o,n){return o===0&&n===e.length?yt.fromByteArray(e):yt.fromByteArray(e.slice(o,n))}function ea(e,o,n){n=Math.min(e.length,n);for(var r=[],a=o;a<n;){var s=e[a],m=null,d=s>239?4:s>223?3:s>191?2:1;if(a+d<=n){var l,_,f,u;switch(d){case 1:s<128&&(m=s);break;case 2:l=e[a+1],(l&192)===128&&(u=(s&31)<<6|l&63,u>127&&(m=u));break;case 3:l=e[a+1],_=e[a+2],(l&192)===128&&(_&192)===128&&(u=(s&15)<<12|(l&63)<<6|_&63,u>2047&&(u<55296||u>57343)&&(m=u));break;case 4:l=e[a+1],_=e[a+2],f=e[a+3],(l&192)===128&&(_&192)===128&&(f&192)===128&&(u=(s&15)<<18|(l&63)<<12|(_&63)<<6|f&63,u>65535&&u<1114112&&(m=u))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),a+=d}return Ys(r)}var Xr=4096;function Ys(e){var o=e.length;if(o<=Xr)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=Xr));return n}function Js(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]&127);return r}function Zs(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]);return r}function Qs(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var a="",s=o;s<n;++s)a+=am[e[s]];return a}function em(e,o,n){for(var r=e.slice(o,n),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}g.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var a=this.subarray(o,n);return Object.setPrototypeOf(a,g.prototype),a};function J(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||J(o,n,this.length);for(var a=this[o],s=1,m=0;++m<n&&(s*=256);)a+=this[o+m]*s;return a};g.prototype.readUintBE=g.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||J(o,n,this.length);for(var a=this[o+--n],s=1;n>0&&(s*=256);)a+=this[o+--n]*s;return a};g.prototype.readUint8=g.prototype.readUInt8=function(o,n){return o=o>>>0,n||J(o,1,this.length),this[o]};g.prototype.readUint16LE=g.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||J(o,2,this.length),this[o]|this[o+1]<<8};g.prototype.readUint16BE=g.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||J(o,2,this.length),this[o]<<8|this[o+1]};g.prototype.readUint32LE=g.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||J(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};g.prototype.readUint32BE=g.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||J(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};g.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||J(o,n,this.length);for(var a=this[o],s=1,m=0;++m<n&&(s*=256);)a+=this[o+m]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*n)),a};g.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||J(o,n,this.length);for(var a=n,s=1,m=this[o+--a];a>0&&(s*=256);)m+=this[o+--a]*s;return s*=128,m>=s&&(m-=Math.pow(2,8*n)),m};g.prototype.readInt8=function(o,n){return o=o>>>0,n||J(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};g.prototype.readInt16LE=function(o,n){o=o>>>0,n||J(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};g.prototype.readInt16BE=function(o,n){o=o>>>0,n||J(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};g.prototype.readInt32LE=function(o,n){return o=o>>>0,n||J(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};g.prototype.readInt32BE=function(o,n){return o=o>>>0,n||J(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};g.prototype.readFloatLE=function(o,n){return o=o>>>0,n||J(o,4,this.length),yo.read(this,o,!0,23,4)};g.prototype.readFloatBE=function(o,n){return o=o>>>0,n||J(o,4,this.length),yo.read(this,o,!1,23,4)};g.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||J(o,8,this.length),yo.read(this,o,!0,52,8)};g.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||J(o,8,this.length),yo.read(this,o,!1,52,8)};function se(e,o,n,r,a,s){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var s=Math.pow(2,8*r)-1;se(this,o,n,r,s,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};g.prototype.writeUintBE=g.prototype.writeUIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var s=Math.pow(2,8*r)-1;se(this,o,n,r,s,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};g.prototype.writeUint8=g.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,1,255,0),this[n]=o&255,n+1};g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};g.prototype.writeIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var s=Math.pow(2,8*r-1);se(this,o,n,r,s-1,-s)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};g.prototype.writeIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var s=Math.pow(2,8*r-1);se(this,o,n,r,s-1,-s)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};g.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};g.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};g.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};g.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};g.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||se(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function oa(e,o,n,r,a,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function na(e,o,n,r,a){return o=+o,n=n>>>0,a||oa(e,o,n,4,34028234663852886e22,-34028234663852886e22),yo.write(e,o,n,r,23,4),n+4}g.prototype.writeFloatLE=function(o,n,r){return na(this,o,n,!0,r)};g.prototype.writeFloatBE=function(o,n,r){return na(this,o,n,!1,r)};function ta(e,o,n,r,a){return o=+o,n=n>>>0,a||oa(e,o,n,8,17976931348623157e292,-17976931348623157e292),yo.write(e,o,n,r,52,8),n+8}g.prototype.writeDoubleLE=function(o,n,r){return ta(this,o,n,!0,r)};g.prototype.writeDoubleBE=function(o,n,r){return ta(this,o,n,!1,r)};g.prototype.copy=function(o,n,r,a){if(!g.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),n>=o.length&&(n=o.length),n||(n=0),a>0&&a<r&&(a=r),a===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),o.length-n<a-r&&(a=o.length-n+r);var s=a-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,a):Uint8Array.prototype.set.call(o,this.subarray(r,a),n),s};g.prototype.fill=function(o,n,r,a){if(typeof o=="string"){if(typeof n=="string"?(a=n,n=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!g.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(o.length===1){var s=o.charCodeAt(0);(a==="utf8"&&s<128||a==="latin1")&&(o=s)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=g.isBuffer(o)?o:g.from(o,a),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var om=/[^+/0-9A-Za-z-_]/g;function nm(e){if(e=e.split("=")[0],e=e.trim().replace(om,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function wt(e,o){o=o||1/0;for(var n,r=e.length,a=null,s=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!a){if(n>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=n;continue}if(n<56320){(o-=3)>-1&&s.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,n<128){if((o-=1)<0)break;s.push(n)}else if(n<2048){if((o-=2)<0)break;s.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;s.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return s}function tm(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function rm(e,o){for(var n,r,a,s=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,a=n%256,s.push(a),s.push(r);return s}function ra(e){return yt.toByteArray(nm(e))}function gn(e,o,n,r){for(var a=0;a<r&&!(a+n>=o.length||a>=e.length);++a)o[a+n]=e[a];return a}function Me(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function kt(e){return e!==e}var am=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,a=0;a<16;++a)o[r+a]=e[n]+e[a];return o}()});var ma=pe((x_,sa)=>{t();var j=sa.exports={},Oe,Fe;function At(){throw new Error("setTimeout has not been defined")}function It(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Oe=setTimeout:Oe=At}catch(e){Oe=At}try{typeof clearTimeout=="function"?Fe=clearTimeout:Fe=It}catch(e){Fe=It}})();function ia(e){if(Oe===setTimeout)return setTimeout(e,0);if((Oe===At||!Oe)&&setTimeout)return Oe=setTimeout,setTimeout(e,0);try{return Oe(e,0)}catch(o){try{return Oe.call(null,e,0)}catch(n){return Oe.call(this,e,0)}}}function im(e){if(Fe===clearTimeout)return clearTimeout(e);if((Fe===It||!Fe)&&clearTimeout)return Fe=clearTimeout,clearTimeout(e);try{return Fe(e)}catch(o){try{return Fe.call(null,e)}catch(n){return Fe.call(this,e)}}}var ze=[],bo=!1,po,un=-1;function cm(){!bo||!po||(bo=!1,po.length?ze=po.concat(ze):un=-1,ze.length&&ca())}function ca(){if(!bo){var e=ia(cm);bo=!0;for(var o=ze.length;o;){for(po=ze,ze=[];++un<o;)po&&po[un].run();un=-1,o=ze.length}po=null,bo=!1,im(e)}}j.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];ze.push(new pa(e,o)),ze.length===1&&!bo&&ia(ca)};function pa(e,o){this.fun=e,this.array=o}pa.prototype.run=function(){this.fun.apply(null,this.array)};j.title="browser";j.browser=!0;j.env={};j.argv=[];j.version="";j.versions={};function qe(){}j.on=qe;j.addListener=qe;j.once=qe;j.off=qe;j.removeListener=qe;j.removeAllListeners=qe;j.emit=qe;j.prependListener=qe;j.prependOnceListener=qe;j.listeners=function(e){return[]};j.binding=function(e){throw new Error("process.binding is not supported")};j.cwd=function(){return"/"};j.chdir=function(e){throw new Error("process.chdir is not supported")};j.umask=function(){return 0}});var i,p,pm,c,t=y(()=>{i=A(aa()),p=A(ma()),pm=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),c=pm});var ee,Ke=y(()=>{"use strict";t();ee="Action not allowed. User is logged in. Call logout() first"});var da=y(()=>{"use strict";t()});var la=y(()=>{"use strict";t()});var Lt,_a=y(()=>{"use strict";t();Lt=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(Lt||{})});var ga=y(()=>{"use strict";t()});var Et,Pt=y(()=>{"use strict";t();Et={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var ua=y(()=>{"use strict";t()});var fa=y(()=>{"use strict";t()});var ha=y(()=>{"use strict";t()});var xa=y(()=>{"use strict";t()});var no,wo,Uo=y(()=>{"use strict";t();no=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),wo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var oe,ya,P_,Ta,C_,K=y(()=>{"use strict";t();Uo();oe=(x=>(x.ledger="ledger",x.walletconnect="walletconnect",x.walletconnectv2="walletconnectv2",x.wallet="wallet",x.crossWindow="crossWindow",x.iframe="iframe",x.extension="extension",x.passkey="passkey",x.metamask="metamask",x.opera="opera",x.extra="extra",x.none="",x))(oe||{}),ya=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(ya||{}),P_=h(h({},wo.WindowProviderRequestEnums),ya),Ta=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ta||{}),C_=h(h({},wo.WindowProviderResponseEnums),Ta)});var ba=y(()=>{"use strict";t()});var wa=y(()=>{"use strict";t()});var me=y(()=>{"use strict";t()});var Sa=y(()=>{"use strict";t()});var va=y(()=>{"use strict";t()});var ka=y(()=>{"use strict";t()});var re=y(()=>{"use strict";t();fa();ha();xa();K();ba();wa();me();Sa();va();ka()});var Ct,Aa,K_,Ia,X_,La,Y_,J_,Z_,Ea,Pa=y(()=>{"use strict";t();re();Ct={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Aa,egldLabel:K_}=Ct["devnet"],{chainId:Ia,egldLabel:X_}=Ct["testnet"],{chainId:La,egldLabel:Y_}=Ct["mainnet"],J_={["devnet"]:Aa,["testnet"]:Ia,["mainnet"]:La},Z_={[Aa]:"devnet",[Ia]:"testnet",[La]:"mainnet"},Ea="multiversx://"});var Nt=y(()=>{"use strict";t()});var Be,Ca=y(()=>{"use strict";t();Be=require("@multiversx/sdk-web-wallet-provider")});var Ae,Wo=y(()=>{"use strict";t();Ae=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Na,Ra,Rt,sm,mm,Da,Dt=y(()=>{"use strict";t();Wo();Rt=String((Ra=(Na=Ae.safeWindow)==null?void 0:Na.navigator)==null?void 0:Ra.userAgent),sm=/^((?!chrome|android).)*safari/i.test(Rt),mm=/firefox/i.test(Rt)&&/windows/i.test(Rt),Da=sm||mm});var Mt,Ot,Ma,Oa,fn,Fa,So,F=y(()=>{"use strict";t();da();Ke();la();_a();ga();Pt();ua();Pa();Nt();Ca();Dt();Mt=5e4,Ot=1e9,Ma=1,Oa=1,fn="logout",Fa="login",So="0"});var Bt,H,z,q=y(()=>{"use strict";t();Bt=require("@reduxjs/toolkit");F();H=(0,Bt.createAction)(fn),z=(0,Bt.createAction)(Fa,e=>({payload:e}))});var ko,yn=y(()=>{"use strict";t();ko=()=>Date.now()/1e3});var za=y(()=>{"use strict";t()});var qa=y(()=>{"use strict";t()});var Ut=y(()=>{"use strict";t();yn();za();qa()});var Wt={};$e(Wt,{clear:()=>fm,getItem:()=>gm,localStorageKeys:()=>Ee,removeItem:()=>um,setItem:()=>_m});var Ee,Tn,_m,gm,um,fm,Ao=y(()=>{"use strict";t();Ut();Ee={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Tn=typeof localStorage!="undefined",_m=({key:e,data:o,expires:n})=>{!Tn||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},gm=e=>{if(!Tn)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:ko()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},um=e=>{!Tn||localStorage.removeItem(String(e))},fm=()=>{!Tn||localStorage.clear()}});var Gt={};$e(Gt,{clear:()=>Ja,getItem:()=>Xa,removeItem:()=>Ya,setItem:()=>Ka,storage:()=>hm});var Ka,Xa,Ya,Ja,hm,Za=y(()=>{"use strict";t();Ka=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Xa=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},Ya=e=>sessionStorage.removeItem(String(e)),Ja=()=>sessionStorage.clear(),hm={setItem:Ka,getItem:Xa,removeItem:Ya,clear:Ja}});var Ue,Io=y(()=>{"use strict";t();Ao();Za();Ue={session:Gt,local:Wt}});var Ht,Qa,ei,bn,Vt,oi,Ho,ni,$t,Yg,jt,ti,Jg,Zg,Qg,eu,ou,wn,Sn=y(()=>{"use strict";t();Ht=require("@multiversx/sdk-core"),Qa=require("@reduxjs/toolkit"),ei=require("redux-persist");F();Io();Ao();q();bn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:So},Vt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":bn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},oi=(0,Qa.createSlice)({name:"accountInfoSlice",initialState:Vt,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Ht.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:bn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(H,()=>(Ue.local.removeItem(Ee.loginExpiresAt),Vt)),e.addCase(z,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new Ht.Address(r).hex()}),e.addCase(ei.REHYDRATE,(o,n)=>{var _;if(!((_=n.payload)!=null&&_.account))return;let{account:r}=n.payload,{address:a,shard:s,accounts:m,publicKey:d}=r;o.address=a,o.shard=s;let l=m&&a in m;o.accounts=l?m:Vt.accounts,o.publicKey=d})}}),{setAccount:Ho,setAddress:ni,setAccountNonce:$t,setAccountShard:Yg,setLedgerAccount:jt,updateLedgerAccount:ti,setWalletConnectAccount:Jg,setIsAccountLoading:Zg,setAccountLoadingError:Qg,setWebsocketEvent:eu,setWebsocketBatchEvent:ou}=oi.actions,wn=oi.reducer});function $o(){return new Date().setHours(new Date().getHours()+24)}function jo(e){Ue.local.setItem({key:Ee.loginExpiresAt,data:e,expires:e})}var zt=y(()=>{"use strict";t();Io();Ao()});var ai,ri,ii,du,ci,pi,vn,lu,si,mi,_u,gu,uu,kn,An=y(()=>{"use strict";t();ai=require("@reduxjs/toolkit");zt();K();q();ri={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},ii=(0,ai.createSlice)({name:"loginInfoSlice",initialState:ri,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(H,()=>ri),e.addCase(z,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,jo($o())})}}),{setLoginMethod:du,setWalletConnectLogin:ci,setLedgerLogin:pi,setTokenLogin:vn,setTokenLoginSignature:lu,setWalletLogin:si,invalidateLoginSession:mi,setLogoutRoute:_u,setIsWalletConnectV2Initialized:gu,setWebviewLogin:uu}=ii.actions,kn=ii.reducer});var li,di,_i,yu,Tu,bu,wu,In,Ln=y(()=>{"use strict";t();li=require("@reduxjs/toolkit");q();di={},_i=(0,li.createSlice)({name:"modalsSlice",initialState:di,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(H,()=>di)}}),{setTxSubmittedModal:yu,setNotificationModal:Tu,clearTxSubmittedModal:bu,clearNotificationModal:wu}=_i.actions,In=_i.reducer});var so,Lo=y(()=>{"use strict";t();so=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var U,ye=y(()=>{"use strict";t();Lo();U=()=>{if(!so())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:a,search:s}}=window;return{pathname:o,hash:n,origin:r,href:a,search:s}}});var Xe,gi=y(()=>{"use strict";t();ye();Xe=(e="")=>{let o=U(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var to,ui=y(()=>{"use strict";t();le();to=()=>{let{pathname:e,search:o,hash:n}=U();return`${e!=null?e:""}${o!=null?o:""}${n!=null?n:""}`}});var fi,hi=y(()=>{"use strict";t();Wo();fi=e=>{if(!Ae.safeWindow.location)return;if(!new URL(Ae.safeWindow.location.href).protocol.startsWith("http"))return Ae.safeWindow.location.reload();Ae.safeWindow.location.assign(e)}});var le=y(()=>{"use strict";t();gi();ui();ye();hi()});var xi,yi,En,Pn=y(()=>{"use strict";t();le();xi=!1,yi=(e=!0)=>{xi=e},En=({timeout:e=0,url:o})=>{xi||setTimeout(()=>{if(!!window)return fi(o)},e)}});function ae({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),a=typeof o=="function";if(r&&e!=null){if(a)return o(e,n);En({url:e,timeout:xm})}}var xm,Ti=y(()=>{"use strict";t();Pn();xm=200});function bi(e){return e[Math.floor(Math.random()*e.length)]}var wi=y(()=>{"use strict";t()});function vi(e){let o=null;if((e==null?void 0:e.statusCode)in Et){let n=e==null?void 0:e.statusCode,{message:r}=Et[n];o=bm.includes(n)?Si:r}return{errorMessage:o,defaultErrorMessage:Si}}var Si,ym,Tm,bm,ki=y(()=>{"use strict";t();Pt();Si="Check if the MultiversX app is open on Ledger",ym=28161,Tm=28160,bm=[ym,Tm]});var Ye=y(()=>{"use strict";t();Ti();wi();ki()});var Ai,Ii,Li,qt,Sm,Ei,Qu,ef,Pi,Cn,Nn=y(()=>{"use strict";t();Ai=require("@reduxjs/toolkit"),Ii=A(require("lodash.omit")),Li=require("redux-persist");Nt();q();Ye();qt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Sm={network:qt},Ei=(0,Ai.createSlice)({name:"appConfig",initialState:Sm,reducers:{initializeNetworkConfig:(e,o)=>{let n=bi(o.payload.walletConnectV2RelayAddresses),r=(0,Ii.default)(o.payload,"walletConnectV2RelayAddresses");e.network=I(h(h({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=h(h({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(H,o=>{o.network.customWalletAddress=void 0}),e.addCase(Li.REHYDRATE,(o,n)=>{var a,s;if(!((s=(a=n.payload)==null?void 0:a.network)!=null&&s.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Qu,updateNetworkConfig:ef,setCustomWalletAddress:Pi}=Ei.actions,Cn=Ei.reducer});var Ci,Kt,Ni,cf,pf,sf,Rn,Dn=y(()=>{"use strict";t();Ci=require("@reduxjs/toolkit");re();q();Kt={isSigning:!1,signedSessions:{}},Ni=(0,Ci.createSlice)({name:"signedMessageInfoSliceState",initialState:Kt,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:a}=o.payload;a&&(e.errorMessage=a),e.isSigning=r.status==="pending",e.signedSessions[n]=h(h({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>h(h({},e),o.payload),clearSignedMessageInfo:()=>Kt},extraReducers:e=>{e.addCase(H,()=>Kt)}}),{setSignSession:cf,clearSignedMessageInfo:pf,setSignSessionState:sf}=Ni.actions,Rn=Ni.reducer});var Di,Mi,Ri,Oi,vm,km,ff,hf,Mn,On=y(()=>{"use strict";t();Di=require("@reduxjs/toolkit"),Mi=require("redux-persist");re();yn();q();Ri={customToasts:[],transactionToasts:[]},Oi=(0,Di.createSlice)({name:"toastsSlice",initialState:Ri,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(a=>a.toastId===n);if(r!==-1){e.customToasts[r]=I(h(h({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(I(h({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:ko(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(H,()=>Ri),e.addCase(Mi.REHYDRATE,(o,n)=>{var a,s;let r=(s=(a=n.customToasts)==null?void 0:a.filter(m=>!("component"in m)))!=null?s:[];o.customToasts=r})}}),{addCustomToast:vm,removeCustomToast:km,addTransactionToast:ff,removeTransactionToast:hf}=Oi.actions,Mn=Oi.reducer});var Fi,Yt,Jt,Zt,Am,Xt,Bi,bf,wf,Sf,Fn,Bn=y(()=>{"use strict";t();Fi=require("@reduxjs/toolkit");q();Yt="Transaction failed",Jt="Transaction successful",Zt="Processing transaction",Am="Transaction submitted",Xt={},Bi=(0,Fi.createSlice)({name:"transactionsInfo",initialState:Xt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Yt,successMessage:(r==null?void 0:r.successMessage)||Jt,processingMessage:(r==null?void 0:r.processingMessage)||Zt,submittedMessage:(r==null?void 0:r.submittedMessage)||Am,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Xt},extraReducers:e=>{e.addCase(H,()=>Xt)}}),{clearTransactionsInfo:bf,setTransactionsDisplayInfo:wf,clearTransactionsInfoForSessionId:Sf}=Bi.actions,Fn=Bi.reducer});function Ui(e){return e!=null&&(Fm(e)||Vm(e))}function Un(e){return e!=null&&(Bm(e)||Hm(e))}function Wn(e){return e!=null&&(Um(e)||$m(e))}function Wi(e){return e!=null&&(Wm(e)||jm(e))}function Gi(e){return e!=null&&Gm(e)}function Fm(e){return e!=null&&Lm.includes(e)}function Bm(e){return e!=null&&Em.includes(e)}function Um(e){return e!=null&&Pm.includes(e)}function Wm(e){return e!=null&&Cm.includes(e)}function Gm(e){return e!=null&&Nm.includes(e)}function Vm(e){return e!=null&&Rm.includes(e)}function Hm(e){return e!=null&&Dm.includes(e)}function $m(e){return e!=null&&Mm.includes(e)}function jm(e){return e!=null&&Om.includes(e)}var Lm,Em,Pm,Cm,Nm,Rm,Dm,Mm,Om,er=y(()=>{"use strict";t();K();Lm=["sent"],Em=["success"],Pm=["fail","cancelled","timedOut"],Cm=["invalid"],Nm=["timedOut"],Rm=["pending"],Dm=["success"],Mm=["fail","invalid"],Om=["not executed"]});var Vi,Hi,zo,zm,$i,Nf,Rf,Df,Mf,Of,Ff,Bf,Uf,Wf,Gf,Vf,Gn,Vn=y(()=>{"use strict";t();Vi=require("@reduxjs/toolkit"),Hi=require("redux-persist");K();er();q();zo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},zm={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},$i=(0,Vi.createSlice)({name:"transactionsSlice",initialState:zo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:n,transactions:r,errorMessage:a,status:s,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=h(h(h({},zm),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:s,errorMessage:a,redirectRoute:m,customTransactionInformation:h(h({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===n&&(e.transactionsToSign=zo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=h(h({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:a,transactions:s}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,a!=null&&(e.signedTransactions[n].errorMessage=a),s!=null&&(e.signedTransactions[n].transactions=s))},updateSignedTransactionStatus:(e,o)=>{var _,f,u,x,k,S,T,v;let{sessionId:n,status:r,errorMessage:a,transactionHash:s,serverTransaction:m,inTransit:d}=o.payload,l=(f=(_=e.signedTransactions)==null?void 0:_[n])==null?void 0:f.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(L=>L.hash===s?I(h(h({},m!=null?m:{}),L),{status:r,errorMessage:a,inTransit:d}):L);let E=(x=(u=e.signedTransactions[n])==null?void 0:u.transactions)==null?void 0:x.every(L=>Un(L.status)),N=(S=(k=e.signedTransactions[n])==null?void 0:k.transactions)==null?void 0:S.some(L=>Wn(L.status)),C=(v=(T=e.signedTransactions[n])==null?void 0:T.transactions)==null?void 0:v.every(L=>Wi(L.status));E&&(e.signedTransactions[n].status="success"),N&&(e.signedTransactions[n].status="fail"),C&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=zo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=zo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=h(h({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(H,()=>zo),e.addCase(Hi.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:a}=n.payload.transactions,s=Object.entries(r).reduce((d,[l,_])=>{let f=new Date(l),u=new Date;return u.setHours(u.getHours()+5),u-f>0||(d[l]=_),d},{});a!=null&&(o.customTransactionInformationForSessionId=a),r!=null&&(o.signedTransactions=s)})}}),{updateSignedTransactionStatus:Nf,updateSignedTransactions:Rf,setTransactionsToSign:Df,clearAllTransactionsToSign:Mf,clearAllSignedTransactions:Of,clearSignedTransaction:Ff,clearTransactionToSign:Bf,setSignTransactionsError:Uf,setSignTransactionsCancelMessage:Wf,moveTransactionsToSignedState:Gf,updateSignedTransactionsCustomTransactionInformation:Vf}=$i.actions,Gn=$i.reducer});var ji,or,zi,zf,qf,Kf,Xf,Hn,$n=y(()=>{"use strict";t();ji=require("@reduxjs/toolkit");q();or={},zi=(0,ji.createSlice)({name:"batchTransactionsSlice",initialState:or,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>or},extraReducers:e=>{e.addCase(H,()=>or)}}),{setBatchTransactions:zf,updateBatchTransactions:qf,clearBatchTransactions:Kf,clearAllBatchTransactions:Xf}=zi.actions,Hn=zi.reducer});var Ki,qi,Xi,Qf,Yi,nr=y(()=>{"use strict";t();Ki=require("@reduxjs/toolkit");q();qi={},Xi=(0,Ki.createSlice)({name:"dappConfigSlice",initialState:qi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(H,()=>qi)}}),{setDappConfig:Qf}=Xi.actions,Yi=Xi.reducer});var _e=y(()=>{"use strict";t();Sn();An();Ln();Nn();Dn();On();Bn();Vn();$n();nr()});var tr=y(()=>{"use strict";t()});var Qi,Ym,Jm,mo,qn=y(()=>{"use strict";t();Qi=require("@reduxjs/toolkit");tr();Sn();$n();nr();An();Ln();Nn();Dn();On();Bn();Vn();Ym={["account"]:wn,["dappConfig"]:Yi,["loginInfo"]:kn,["modals"]:In,["networkConfig"]:Cn,["signedMessageInfo"]:Rn,["toasts"]:Mn,["transactionsInfo"]:Fn,["transactions"]:Gn,["batchTransactions"]:Hn},Jm=(e={})=>(0,Qi.combineReducers)(h(h({},Ym),e)),mo=Jm});var tc={};$e(tc,{default:()=>_d,sessionStorageReducers:()=>rr});function Je(e,o=[]){return{key:e,version:1,storage:oc.default,blacklist:o}}var ge,ec,oc,Zm,qo,Qm,ed,od,nd,td,rd,ad,id,cd,pd,nc,sd,rr,md,dd,ld,_d,rc=y(()=>{"use strict";t();ge=require("redux-persist"),ec=A(require("redux-persist/lib/storage")),oc=A(require("redux-persist/lib/storage/session"));qn();_e();Sn();$n();An();Ln();Nn();Dn();On();Bn();Vn();tr();Zm={persistReducersStorageType:"localStorage"},qo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Qm=Je(qo["account"]),ed=Je(qo["loginInfo"]),od=Je(qo["modals"]),nd=Je(qo["networkConfig"]),td={2:e=>I(h({},e),{networkConfig:qt})};rd=Je("sdk-dapp-transactionsInfo"),ad=Je("sdk-dapp-transactions",["transactionsToSign"]),id=Je("sdk-dapp-batchTransactions",["batchTransactions"]),cd=Je("sdk-dapp-toasts"),pd=Je("sdk-dapp-signedMessageInfo"),nc={key:"sdk-dapp-store",version:2,storage:ec.default,whitelist:Object.keys(qo),migrate:(0,ge.createMigrate)(td,{debug:!1})},sd=I(h({},nc),{whitelist:[]}),rr={["toasts"]:(0,ge.persistReducer)(cd,Mn),["transactions"]:(0,ge.persistReducer)(ad,Gn),["transactionsInfo"]:(0,ge.persistReducer)(rd,Fn),["batchTransactions"]:(0,ge.persistReducer)(id,Hn),["signedMessageInfo"]:(0,ge.persistReducer)(pd,Rn)},md=I(h({},rr),{["account"]:(0,ge.persistReducer)(Qm,wn),["loginInfo"]:(0,ge.persistReducer)(ed,kn),["modals"]:(0,ge.persistReducer)(od,In),["networkConfig"]:(0,ge.persistReducer)(nd,Cn)}),dd=Zm.persistReducersStorageType==="localStorage",ld=dd?(0,ge.persistReducer)(nc,mo(rr)):(0,ge.persistReducer)(sd,mo(md)),_d=ld});var ac={};$e(ac,{default:()=>gd});var gd,ic=y(()=>{"use strict";t();qn();gd=mo()});var cc={};$e(cc,{default:()=>fd});var we,ud,fd,pc=y(()=>{"use strict";t();we=require("redux-persist"),ud=[we.FLUSH,we.REHYDRATE,we.PAUSE,we.PERSIST,we.PURGE,we.REGISTER],fd=ud});var dc={};$e(dc,{default:()=>mc});function mc(e){return(0,sc.persistStore)(e)}var sc,lc=y(()=>{"use strict";t();sc=require("redux-persist")});var op=pe((cI,ep)=>{t();var gl=typeof c=="object"&&c&&c.Object===Object&&c;ep.exports=gl});var tp=pe((pI,np)=>{t();var ul=op(),fl=typeof self=="object"&&self&&self.Object===Object&&self,hl=ul||fl||Function("return this")();np.exports=hl});var fr=pe((sI,rp)=>{t();var xl=tp(),yl=xl.Symbol;rp.exports=yl});var pp=pe((mI,cp)=>{t();var ap=fr(),ip=Object.prototype,Tl=ip.hasOwnProperty,bl=ip.toString,on=ap?ap.toStringTag:void 0;function wl(e){var o=Tl.call(e,on),n=e[on];try{e[on]=void 0;var r=!0}catch(s){}var a=bl.call(e);return r&&(o?e[on]=n:delete e[on]),a}cp.exports=wl});var mp=pe((dI,sp)=>{t();var Sl=Object.prototype,vl=Sl.toString;function kl(e){return vl.call(e)}sp.exports=kl});var gp=pe((lI,_p)=>{t();var dp=fr(),Al=pp(),Il=mp(),Ll="[object Null]",El="[object Undefined]",lp=dp?dp.toStringTag:void 0;function Pl(e){return e==null?e===void 0?El:Ll:lp&&lp in Object(e)?Al(e):Il(e)}_p.exports=Pl});var fp=pe((_I,up)=>{t();var Cl=Array.isArray;up.exports=Cl});var xp=pe((gI,hp)=>{t();function Nl(e){return e!=null&&typeof e=="object"}hp.exports=Nl});var Tp=pe((uI,yp)=>{t();var Rl=gp(),Dl=fp(),Ml=xp(),Ol="[object String]";function Fl(e){return typeof e=="string"||!Dl(e)&&Ml(e)&&Rl(e)==Ol}yp.exports=Fl});var jp=pe((TP,$p)=>{t();function Ql(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}$p.exports=Ql});var Ir={};$e(Ir,{css:()=>os,default:()=>n_});var os,n_,Lr=y(()=>{"use strict";t();os=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(os));n_={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var eo={};$e(eo,{css:()=>rs,default:()=>a_});var rs,a_,oo=y(()=>{"use strict";t();rs=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rs));a_={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var __={};$e(__,{useCrossWindowLogin:()=>Dp,useExtensionLogin:()=>Ip,useGetModalLoginMethods:()=>us,useLedgerLogin:()=>hs,useMetamaskLogin:()=>ws,useOperaLogin:()=>Ep,usePasskeyLogin:()=>Ss,useWalletConnectV2Login:()=>Ts,useWebWalletLogin:()=>ct,useXaliasLogin:()=>xs});module.exports=Re(__);t();t();var xr=require("react"),Ap=require("@multiversx/sdk-extension-provider");Ke();t();t();var Ba=require("@multiversx/sdk-extension-provider"),Ua=require("@multiversx/sdk-hw-provider"),Wa=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Ga=require("@multiversx/sdk-opera-provider"),Va=require("@multiversx/sdk-passkey-provider/out"),Ft=require("@multiversx/sdk-web-wallet-provider");F();Uo();t();var Go=require("@multiversx/sdk-web-wallet-iframe-provider/out"),dm=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");K();t();t();var hn={},xn=vo;var lm="/dapp/init",Le=e=>{switch(e==null?void 0:e.constructor){case Ft.WalletProvider:return"wallet";case xn:return"walletconnectv2";case Ua.HWProvider:return"ledger";case Ba.ExtensionProvider:return"extension";case Va.PasskeyProvider:return"passkey";case Wa.MetamaskProvider:return"metamask";case Ga.OperaProvider:return"opera";case no.CrossWindowProvider:return"crossWindow";case Go.IframeProvider:return"iframe";case vo:return"";default:return"extra"}},Ha=e=>new Ft.WalletProvider(`${e}${lm}`),$a=e=>b(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:n,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:n===Oa}}),Ie=e=>`Unable to perform ${e}, Provider not initialized`,vo=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Ie("getAccount"))}setAccount(o){throw new Error(Ie(`setAccount: ${o}`))}login(o){throw new Error(Ie(`login with options: ${o}`))}logout(o){throw new Error(Ie(`logout with options: ${o}`))}getAddress(){throw new Error(Ie("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(Ie(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(Ie(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(Ie(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(Ie(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(Ie(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(Ie(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Vo=new vo;var ja=Vo;function de(e){ja=e}function xe(){return ja||Vo}q();t();var xc=require("react"),Eo=require("react-redux");t();var ar=require("@reduxjs/toolkit"),fc=require("react-redux/lib/utils/Subscription");_e();t();var Ji=A(require("lodash.throttle"));F();_e();zt();Io();Ao();var qm=[fn],jn=!1,Km=(0,Ji.default)(()=>{jo($o())},5e3),Zi=e=>o=>n=>{if(qm.includes(n.type))return o(n);let r=e.getState(),a=Ue.local.getItem(Ee.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(a==null)return jo($o());let m=Date.now();return a-m<0&&!jn?setTimeout(()=>{jn=!0,e.dispatch(mi())},1e3):(jn&&(jn=!1),Km()),o(n)};t();t();function zn(){return typeof sessionStorage!="undefined"}var _c=zn()?(rc(),Re(tc)).default:(ic(),Re(ac)).default,gc=zn()?(pc(),Re(cc)).default:[],uc=zn()?(lc(),Re(dc)).default:e=>e;qn();var M=(0,ar.configureStore)({reducer:_c,middleware:e=>e({serializableCheck:{ignoredActions:[...gc,$t.type,Ho.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Zi)}),hc=(0,fc.createSubscription)(M),Jh=uc(M),Zh=(0,ar.configureStore)({reducer:mo});var hd={store:M,subscription:hc},ir=(0,xc.createContext)(hd),nx=(0,Eo.createStoreHook)(ir),Z=(0,Eo.createDispatchHook)(ir),O=(0,Eo.createSelectorHook)(ir);K();t();t();t();_e();t();var yc=A(require("lodash.isequal")),Kn=require("reselect"),w=(0,Kn.createSelectorCreator)(Kn.defaultMemoize,yc.default);var We=e=>e.account,Ko=w(We,e=>e.address),Po=w(We,Ko,(e,o)=>o in e.accounts?e.accounts[o]:bn),xd=w(We,Po,(e,o)=>{let a=e,{accounts:n}=a,r=xo(a,["accounts"]);return I(h({},r),{address:o.address,account:o})}),cx=w(Po,e=>e.balance),Tc=w(Po,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),px=w(We,e=>e.shard),bc=w(We,e=>e.ledgerAccount),sx=w(We,e=>e.walletConnectAccount),mx=w(We,e=>e.isAccountLoading),dx=w(We,e=>e.accountLoadingError),yd=w(We,e=>e.websocketEvent),Td=w(We,e=>e.websocketBatchEvent);t();var bd=e=>e.dappConfig,gx=w(bd,e=>e.shouldUseWebViewProvider);t();var ie=e=>e.loginInfo,wc=w(ie,e=>e.loginMethod),Co=w(ie,Ko,(e,o)=>Boolean(o)),xx=w(ie,e=>e.walletConnectLogin),yx=w(ie,e=>e.ledgerLogin),Sc=w(ie,e=>e.walletLogin),Tx=w(ie,e=>e.isLoginSessionInvalid),Xo=w(ie,e=>e.tokenLogin),vc=w(ie,e=>e.logoutRoute),wd=w(ie,e=>e.isWalletConnectV2Initialized);t();var kc=e=>e.modals,Sx=w(kc,e=>e.txSubmittedModal),vx=w(kc,e=>e.notificationModal);t();var Ze=e=>e.networkConfig,cr=w(Ze,e=>e.network.chainId),Ix=w(Ze,e=>e.network.roundDuration),Lx=w(Ze,e=>e.network.walletConnectBridgeAddress),Ac=w(Ze,e=>e.network.walletConnectV2RelayAddress),Ic=w(Ze,e=>e.network.walletConnectV2ProjectId),Lc=w(Ze,e=>e.network.walletConnectV2Options),Ec=w(Ze,e=>e.network.walletConnectDeepLink),Se=w(Ze,e=>e.network),Pc=w(Se,e=>e.apiAddress),Cc=w(Se,e=>e.explorerAddress),Ex=w(Se,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Nc=w(Se,e=>e.xAliasAddress),Sd=w(Se,e=>e.egldLabel);t();var Xn=e=>e.signedMessageInfo,Nx=w(Xn,e=>e.isSigning),Rx=w(Xn,e=>e.errorMessage),Dx=w(Xn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),Mx=w(Xn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var Rc=e=>e.toasts,Bx=w(Rc,e=>e.customToasts),Ux=w(Rc,e=>e.transactionToasts);t();_e();var Dc={errorMessage:Yt,successMessage:Jt,processingMessage:Zt},vd=e=>e.transactionsInfo,Hx=w(vd,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Dc);t();t();var Ge=require("@multiversx/sdk-core");F();t();var pr=require("@multiversx/sdk-core/out");t();t();function Yn(e){try{let o=atob(e),n=btoa(o),r=i.Buffer.from(e,"base64").toString(),a=i.Buffer.from(r).toString("base64"),s=e===n||n.startsWith(e),m=e===a||a.startsWith(e);if(s&&m)return!0}catch(o){return!1}return!1}function lo(e){return Yn(e)?atob(e):e}t();t();t();t();var Mc=e=>{let o=e!=null?e:"";return Yn(o)?pr.TransactionPayload.fromEncoded(o):new pr.TransactionPayload(o)};t();F();var Jn=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Lt).some(n=>e.startsWith(n)):!1;function sr(e){var r,a,s;let o=h({},e);Jn({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new Ge.Transaction(h(h(I(h(I(h({value:o.value.valueOf(),data:Mc(o.data),nonce:o.nonce.valueOf(),receiver:new Ge.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Ge.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Mt,gasPrice:(a=o.gasPrice.valueOf())!=null?a:Ot,chainID:o.chainID.valueOf(),version:new Ge.TransactionVersion((s=o.version)!=null?s:Ma)}),o.options?{options:new Ge.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Ge.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(i.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(i.Buffer.from(o.signature,"hex")),n}t();t();F();t();t();t();var Ld=require("@multiversx/sdk-core/out");t();F();t();var Fc=require("@multiversx/sdk-core");re();t();var Oc=require("@multiversx/sdk-core");function Ed(e){try{let o=new Oc.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Yo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Ed(e)}t();t();t();var Pd=require("@multiversx/sdk-core"),Cd=A(require("bignumber.js"));K();t();t();t();var Zn="accounts";var mr="blocks";t();t();t();t();me();t();t();me();t();t();t();var Fd=A(require("bignumber.js"));F();t();var Od=require("@multiversx/sdk-core"),dr=A(require("bignumber.js"));F();t();var Dd=A(require("bignumber.js"));t();dr.default.config({ROUNDING_MODE:dr.default.ROUND_FLOOR});t();t();t();F();t();t();t();t();F();t();F();t();var Bd=require("@multiversx/sdk-core");F();t();var Zo=require("@multiversx/sdk-core"),Wd=A(require("bignumber.js"));F();t();t();var Ud=A(require("bignumber.js"));F();t();F();t();t();t();t();t();t();F();t();F();t();F();t();me();var Vd=["reDelegateRewards","claimRewards","unBond"],Hd=["wrapEgld","unwrapEgld"],$d=["unStake"],jd=["unDelegate"];t();t();t();F();t();var Kd=A(require("bignumber.js"));t();t();me();t();var Yd=A(require("bignumber.js"));t();t();t();t();var Zd=A(require("bignumber.js"));re();t();t();t();t();K();t();var ol=require("@multiversx/sdk-web-wallet-provider");F();t();var el=A(require("qs"));t();le();Lo();t();Lo();var kw={search:so()?window.location.search:"",removeParams:[]};t();t();t();ye();t();me();t();t();ye();t();var nl=A(require("linkifyjs"));t();F();t();var tl=A(require("bignumber.js"));t();re();t();t();K();t();K();t();t();t();me();t();me();t();var rl=A(require("bignumber.js"));F();me();t();me();t();var Hc=require("react");re();t();t();me();t();t();var al=require("@multiversx/sdk-core/out"),il=A(require("bignumber.js"));me();t();re();t();t();re();var xv=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var $c=require("react");re();ye();t();var pl=require("react");me();var Av=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];er();t();var et=e=>e.transactions,en=w(et,e=>e.signedTransactions),fk=w(et,e=>e.signTransactionsError),hk=w(et,e=>e.signTransactionsCancelMessage),ot=e=>o=>Object.entries(o).reduce((n,[r,a])=>(e(a.status)&&(n[r]=a),n),{}),xk=w(en,ot(Ui)),yk=w(en,ot(Un)),Tk=w(en,ot(Wn)),bk=w(en,ot(Gi)),wk=w(et,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:I(h({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>sr(n)))||[]})}),Sk=w(en,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});function Q(){return Co(M.getState())}Ye();le();le();t();t();Uo();re();var ue=e=>(Object.values(oe).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=no.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=Go.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);t();var kp=require("react"),rt=require("@multiversx/sdk-core");t();t();var gr=()=>O(Po);t();t();var jc=()=>{let e=xe(),o=Le(e);return{provider:e,providerType:o}};t();t();t();t();t();t();t();var No=A(require("react"));var sl=(0,No.createContext)({}),cA=M.getState();function nt(){let e=(0,No.useContext)(sl);if(e===void 0||Object.values(e).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return e}t();var zc=A(require("react"));t();var ur=A(require("react")),ml=A(require("axios"));var qc=()=>{try{let{loginInfo:e,isLoggedIn:o}=nt();return I(h({},e),{isLoggedIn:o})}catch(e){let o=O(ie),n=O(Co);return I(h({},o),{isLoggedIn:n})}};var Kc=()=>{let{isLoggedIn:e}=qc();return e};t();t();_e();t();t();var vp=require("@multiversx/sdk-native-auth-client");t();var Zc=A(require("axios"));t();t();t();function Xc(e){return b(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var Yc=(e,o,n,r=0)=>b(void 0,null,function*(){try{return yield e(...n)}catch(a){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Xc(o.delay)),yield Yc(e,o,n,r+1)):null}}),Jc=(e,o={retries:5,delay:500})=>(...n)=>b(void 0,null,function*(){return yield Yc(e,o,n)});var dl=4,ll=3e4,tt={current:null},_o={current:null},_l=Jc((e,o,n)=>b(void 0,null,function*(){if(n){let s=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:s}}let{data:r}=yield Zc.default.get(`${e}/${mr}?from=${dl}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[a]=r;return a}));function Qc(e,o,n,r){return b(this,null,function*(){if(e==null)throw new Error("missing api url");let a=Date.now();if(tt.current!=null&&a<tt.current.timestamp*1e3+ll&&!r)return tt.current;if(_o.current!=null)return yield _o.current;_o.current=_l(e,o,n);try{let s=yield _o.current;if(s==null)throw _o.current=null,new Error("could not get block hash");return tt.current={hash:s.hash,timestamp:s.timestamp},_o.current=null,s}catch(s){return _o.current=null,null}})}t();t();yn();t();t();var bp=A(Tp());var go=e=>{if(!e||!(0,bp.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,a,s]=o,m=JSON.parse(lo(s)),d=lo(n);return{ttl:Number(a),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};function Bl(e){return Object.prototype.toString.call(e)==="[object String]"}var wp=e=>{var n;if(!e||!Bl(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,a,s]=o,m=lo(r),d=lo(a),l=go(d);if(!l)return{address:m,body:d,signature:s,blockHash:"",origin:"",ttl:0};let _=I(h({},l),{address:m,body:d,signature:s});return(n=l.extraInfo)!=null&&n.timestamp||delete _.extraInfo,_}catch(r){return null}};var hr={isExpired:!1},Sp=e=>{if(!e)return hr;let o=wp(e);if(!o)return hr;let n=ko(),{ttl:r,extraInfo:a}=o,s=a==null?void 0:a.timestamp;if(!s)return hr;let m=s+r,d=n>m,l=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};t();ye();var nn={origin:U().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},tn=e=>{var n,r,a,s,m,d;return e===!0?nn:{origin:(n=e==null?void 0:e.origin)!=null?n:nn.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:nn.expirySeconds,apiAddress:(a=e==null?void 0:e.apiAddress)!=null?a:nn.apiAddress,tokenExpirationToastWarningSeconds:(s=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?s:nn.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var rn=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:a,extraInfo:s,gatewayUrl:m,extraRequestHeaders:d}=tn(e),l=new vp.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:a,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:tn,initialize:u=>b(void 0,null,function*(){var k,S;if(!n||!o)return"";let x=()=>l.getCurrentBlockHash();try{let T=(k=u==null?void 0:u.latestBlockInfo)!=null?k:yield Qc(n,a,x,u==null?void 0:u.noCache);if(!T)return"";let{hash:v,timestamp:E}=T,N=l.encodeValue(JSON.stringify(h(h({},(S=u==null?void 0:u.extraInfo)!=null?S:s),E?{timestamp:E}:{})));return`${l.encodeValue(o)}.${v}.${r}.${N}`}catch(T){return console.error("Error getting native auth token: ",T.toString()),""}}),getToken:({address:u,token:x,signature:k})=>l.getToken(u,x,k),getTokenExpiration:Sp}};var Ul=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},ne=e=>{let o=O(Se),n=O(Xo),r=(0,kp.useRef)(n==null?void 0:n.loginToken),a=Ul(o.apiAddress,e),s=tn(h(h({},e===!0?{}:e),a?{apiAddress:a}:{})),m=Boolean(e),d=rn(s),{address:l}=gr(),_=Z(),f=S=>{r.current=S,_(vn(h(I(h({},n),{loginToken:S}),a?{nativeAuthConfig:s}:{})))},u=()=>{try{return d.initialize()}catch(S){console.error("Unable to get block. Login failed.",S);return}},x=({address:S,signature:T})=>{let v=r.current;if(!v)throw"Token not found. Call `setLoginToken` first.";if(!m){_(vn({loginToken:v,signature:T}));return}let E=d.getToken({address:S,token:v,signature:T});return _(vn(h({loginToken:v,signature:T,nativeAuthToken:E},a?{nativeAuthConfig:s}:{}))),E};return{configuration:s,setLoginToken:f,getNativeAuthLoginToken:u,setTokenLoginInfo:x,refreshNativeAuthTokenLogin:v=>b(void 0,[v],function*({signMessageCallback:S,nativeAuthClientConfig:T}){let N=yield rn(T||s).initialize({noCache:Boolean(T)});if(r.current=N,!N)return;let C=new rt.Message({address:new rt.Address(l),data:i.Buffer.from(`${l}${N}`)}),L=yield S(C,{});if(!(L!=null&&L.signature))throw"Message not signed";return x({address:l,signature:i.Buffer.from(L.signature).toString("hex")})})}};var Ip=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,s]=(0,xr.useState)(""),[m,d]=(0,xr.useState)(!1),l=n!=null,_=ne(n),f=o,u=Z(),x=Q();function k(){return b(this,null,function*(){if(x)throw new Error(ee);ue(),d(!0);let T=Ap.ExtensionProvider.getInstance();try{if(!(yield T.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let E=to(),N=encodeURIComponent(Xe(e!=null?e:E));if(l&&!f&&(f=yield _.getNativeAuthLoginToken(),!f)){console.warn("Fetching block failed. Login cancelled.");return}f&&_.setLoginToken(f);let C=h({callbackUrl:N},f&&{token:f}),{signature:L,address:D}=yield T.login(C);if(de(T),!D){d(!1),console.warn("Login cancelled."),s("Login cancelled");return}L&&f&&_.setTokenLoginInfo({signature:L,address:D}),u(z({address:D,loginMethod:"extension"})),ae({callbackRoute:e,onLoginRedirect:r,options:{signature:L,address:D}})}catch(v){console.error("error logging in",v),s("error logging in"+v.message)}finally{d(!1)}})}let S=Boolean(a);return[k,{loginFailed:S,error:a,isLoading:m&&!S,isLoggedIn:x&&!S}]};t();var yr=require("react"),Lp=require("@multiversx/sdk-opera-provider");Ke();q();K();Ye();le();ye();var Ep=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,s]=(0,yr.useState)(""),[m,d]=(0,yr.useState)(!1),l=n!=null,_=ne(n),f=o,u=Z(),x=Q();function k(){return b(this,null,function*(){if(x)throw new Error(ee);ue(),d(!0);let T=Lp.OperaProvider.getInstance();try{if(!(yield T.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:E}=U(),N=to(),C=encodeURIComponent(`${E}${e!=null?e:N}`);if(l&&!f&&(f=yield _.getNativeAuthLoginToken(),!f)){console.warn("Fetching block failed. Login cancelled.");return}f&&_.setLoginToken(f);let L=h({callbackUrl:C},f&&{token:f});yield T.login(L),de(T);let{signature:D,address:V}=T.account;if(!V){d(!1),console.warn("Login cancelled.");return}D&&f&&_.setTokenLoginInfo({signature:D,address:V}),u(z({address:V,loginMethod:"opera"})),ae({callbackRoute:e,onLoginRedirect:r,options:{signature:D,address:V}})}catch(v){console.error("error loging in",v),s("error logging in"+v.message)}finally{d(!1)}})}let S=Boolean(a);return[k,{loginFailed:S,error:a,isLoading:m&&!S,isLoggedIn:x&&!S}]};t();var kr=require("react");t();t();t();t();t();t();var Pp=require("@lifeomic/axios-fetch"),Tr=A(require("axios")),br=(0,Pp.buildAxiosFetch)(Tr.default),wr=(e,o)=>b(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[a]=yield Promise.all([r]);return{data:a,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Wl(e,o,n){return b(this,null,function*(){try{let r=yield br(e,h({method:"POST",body:o?JSON.stringify(o):void 0,headers:h({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return wr(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function Gl(e,o){return b(this,null,function*(){try{let n=yield br(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return wr(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function Vl(e,o,n){return b(this,null,function*(){try{let r=yield br(e,h({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return wr(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Ro=Tr.default.create();Ro.get=Gl;Ro.post=Wl;Ro.patch=Vl;t();var Sr=e=>{let o=e!=null?e:Pc(M.getState());return o.endsWith("/")?o.slice(0,-1):o};t();var Hl=A(require("axios"));t();var $l=A(require("swr"));var jl=e=>{let n=`${Sr()}/${Zn}/${e}?withGuardianInfo=true`;return Ro.get(n)},Cp=e=>b(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield jl(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var at=e=>Cp(e);t();var Np=n=>b(void 0,[n],function*({loginToken:e,extraInfoData:o}){if(e==null||Object.keys(o).length===0)return null;let r=go(String(e)),_=(r==null?void 0:r.extraInfo)||{},{timestamp:a}=_,s=xo(_,["timestamp"]);if(!(r&&a!=null))return null;let d={hash:String(r==null?void 0:r.blockHash),timestamp:Number(a)};return yield rn({extraInfo:h(h({},s),o),expirySeconds:r==null?void 0:r.ttl,origin:r==null?void 0:r.origin}).initialize({latestBlockInfo:d})});var Rp=s=>b(void 0,[s],function*({loginToken:e,extraInfoData:o,address:n,signature:r,loginService:a}){let m=yield Np({loginToken:e,extraInfoData:o}),d=o.multisig||o.impersonate||n,l=m!=null?d:n;return m!=null&&a.setLoginToken(m),r&&a.setTokenLoginInfo({signature:r,address:n}),yield at(l)});Dt();Ke();Uo();q();_e();K();t();function vr(e){let o=M.getState(),n=Tc(o);return e?n&&!isNaN(n)?Math.max(n,e.nonce):e.nonce:n}Ye();ye();var Dp=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,hasConsentPopup:a,walletAddress:s})=>{let[m,d]=(0,kr.useState)(""),[l,_]=(0,kr.useState)(!1),f=n!=null,u=ne(n),x=o,k=O(Se),S=Z(),T=Q();function v(){return b(this,null,function*(){if(T)throw new Error(ee);ue({skipLoginMethod:"crossWindow"}),_(!0);let N=yield no.CrossWindowProvider.getInstance().init(),C=no.CrossWindowProvider.getInstance().setWalletUrl(s!=null?s:k.walletAddress);try{if(!N){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:L,pathname:D}=U(),V=encodeURIComponent(`${L}${e!=null?e:D}`);if(f&&!x&&(x=yield u.getNativeAuthLoginToken(),!x)){console.warn("Fetching block failed. Login cancelled.");return}x&&u.setLoginToken(x);let ve=h({callbackUrl:V},x&&{token:x});(Da&&f||a)&&C.setShouldShowConsentPopup(!0);let{signature:he,address:Pe,multisig:R,impersonate:Ce}=yield C.login(ve);if(de(C),!Pe){_(!1),console.warn("Login cancelled.");return}let ce=yield Rp({loginToken:x,extraInfoData:{multisig:R,impersonate:Ce},address:Pe,signature:he,loginService:u});if(!ce)return;S(z({address:ce.address,loginMethod:"crossWindow"})),S(ni(ce.address)),S(Ho(I(h({},ce),{nonce:vr(ce)}))),ae({callbackRoute:e,onLoginRedirect:r,options:{signature:he,address:ce.address}})}catch(L){console.error("error loging in",L),d("error logging in"+L.message)}finally{_(!1)}})}let E=Boolean(m);return[v,{loginFailed:E,error:m,isLoading:l&&!E,isLoggedIn:T&&!E}]};t();var Ar=require("react");Ke();_e();t();t();t();ye();var Mp=()=>{let{search:e}=U(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return Yo(r)?r:null};t();t();function Op(){let e=xe();return Le(e)}t();K();t();function an(e){return Op()===e}function it(){let e=M.getState(),o=xe(),n=Ko(e),r=Co(e),a=Sc(e);if(!o)throw"provider not initialized";return an("ledger")&&r?new Promise(s=>{s(n)}):!an("")&&!an("wallet")&&!an("extra")?o.getAddress():new Promise(s=>{let m=Mp();a!=null&&m&&s(m),r&&s(n),s("")})}t();t();ye();var Fp=()=>{let{search:e}=U(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var Bp=()=>{var n;let e=Fp(),o=ie(M.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};t();q();re();t();_e();t();_e();t();var Up=require("@multiversx/sdk-core");re();le();t();Ut();t();t();var zl=A(require("platform"));Lo();t();q();re();t();function Wp(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function Gp(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ql(e.path,e.caseSensitive,e.end),a=o.match(n);if(!a)return null;let s=a[0],m=s.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((_,f,u)=>{if(f==="*"){let x=d[u]||"";m=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}return _[f]=Kl(d[u]||"",f),_},{}),pathname:s,pathnameBase:m,pattern:e}}function ql(e,o=!1,n=!0){Wp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,o?void 0:"i"),r]}function Kl(e,o){try{return decodeURIComponent(e)}catch(n){return Wp(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}Pn();Io();Ao();le();var Vp=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&En({url:e})},Xl=e=>{let o=Ue.local.getItem(Ee.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&(Ue.local.setItem({key:Ee.logoutEvent,data:e,expires:0}),Ue.local.removeItem(Ee.logoutEvent))},Yl=500;function Hp(a,s){return b(this,arguments,function*(e,o,n=Boolean(Bp()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var S;let m="",d=xe(),l=Le(d),_=l==="wallet",f=((S=d==null?void 0:d.isInitialized)==null?void 0:S.call(d))===!0;if(n&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield it(),Xl(m)}catch(T){console.error("error fetching logout address",T)}let u=Xe(e),x=U(),k=new URL(decodeURIComponent(u)).pathname;if((Gp(x.pathname,k)||_&&f)&&yi(),!m&&!f)return Vp({callbackUrl:u,onRedirect:o});try{if(M.dispatch(H()),_)return setTimeout(()=>{d.logout({callbackUrl:u})},Yl);r.hasConsentPopup&&l==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:u})}catch(T){console.error("Logging out error:",T)}finally{_||Vp({callbackUrl:u,onRedirect:o})}})}t();t();t();t();t();t();t();Wo();K();t();t();var Jl=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();Pn();Io();t();t();t();_e();t();t();var Zl=A(require("axios"));le();t();t();var Xp=A(jp());Wo();var zp,qp,Kp,e_=(Kp=(qp=(zp=Ae.safeWindow)==null?void 0:zp.location)==null?void 0:qp.origin)==null?void 0:Kp.includes("localhost"),Yp=e=>{if(!(0,Xp.default)(e))return Boolean(e);let n=h({},e);return Boolean(e_)&&delete n.origin,Object.keys(n).length>0};t();var Jp=({maxRetries:e})=>new Promise((o,n)=>{let r=0,a=()=>{let s=cr(M.getState());if(s){o(s);return}if(r<e){r++,setTimeout(a,1e3);return}n(null)};a()});ye();t();var Zp=(e,o=["address"])=>{let n=new URL(e),r=new URLSearchParams(n.search);o.forEach(m=>r.delete(m));let a=Array.from(r.values()).length>0?"?":"",s=n.pathname==="/"&&!e.endsWith("/")?"":n.pathname;return n.protocol==="vscode:"?e:`${n.origin}${s}${a}${r.toString()}${n.hash}`};var ct=({callbackRoute:e,token:o,nativeAuth:n,redirectDelayMilliseconds:r=100,customWalletAddress:a})=>{let[s,m]=(0,Ar.useState)(""),[d,l]=(0,Ar.useState)(!1),_=O(Se),f=Z(),u=Q(),x=Boolean(n),k=ne(n),S=o;function T(){return b(this,null,function*(){if(u)throw new Error(ee);f(Pi(a));try{l(!0);let E=Ha(a!=null?a:_.walletAddress),N=new Date,C=N.setMinutes(N.getMinutes()+3)/1e3,L={data:{},expires:C};if(x&&!S&&(S=yield k.getNativeAuthLoginToken(),!S)){console.warn("Login cancelled.");return}S&&k.setLoginToken(S);let{origin:D}=U(),V=window!=null&&window.location?`${D}${e}`:`${e}`;new URLSearchParams(document==null?void 0:document.location.search).get("address")||f(si(L));let he=Zp(V),Pe=encodeURIComponent(he),R=I(h({callbackUrl:Pe},S&&{token:S}),{redirectDelayMilliseconds:r});yield E.login(R)}catch(E){console.error(E),m("error logging in"+E.message)}finally{l(!1)}})}let v=Boolean(s);return[T,{error:s,loginFailed:v,isLoading:d&&!v,isLoggedIn:u&&!v}]};t();var gs=require("react");F();t();t();F();var Qp=e=>{var a;let o=O(Xo),n=(a=o==null?void 0:o.loginToken)!=null?a:e;if(!n)return;let r=go(n);if(!!r)return r.origin.toLowerCase().startsWith(Ea)};t();t();t();var o_=A(require("bignumber.js"));t();t();t();var ao=A(require("react")),ms=require("react"),ds=require("react"),Dr=A(require("classnames")),ls=require("react-dom");F();t();var ts=A(require("react"));t();var cn=A(require("react"));t();Lo();var es=()=>!so();var t_=()=>b(void 0,null,function*(){return yield Promise.resolve().then(()=>(Lr(),Ir))}),r_=()=>(Lr(),Re(Ir)).default,Er=es();function ns({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,a]=cn.default.useState(Er?void 0:r_()),[s,m]=cn.default.useState(Er||n==null?void 0:n()),d=()=>b(this,null,function*(){(e?e():t_()).then(l=>a(l.default)),o==null||o().then(l=>m(l.default))});return(0,cn.useEffect)(()=>{Er&&d()},[]),{globalStyles:r,styles:s}}function ro(e,o){return n=>{let{globalStyles:r,styles:a}=ns({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return ts.default.createElement(e,I(h({},n),{globalStyles:r!=null?r:{},styles:a!=null?a:{}}))}}t();var as=A(require("react")),is=A(require("classnames"));var i_=({className:e,children:o,styles:n})=>as.default.createElement("div",{className:(0,is.default)(n==null?void 0:n.dappModalBody,e)},o),Pr=ro(i_,{ssrStyles:()=>Promise.resolve().then(()=>(oo(),eo)),clientStyles:()=>(oo(),Re(eo)).default});t();var Cr=A(require("react")),cs=A(require("classnames"));var c_=({visible:e,customFooter:o,className:n,footerText:r,styles:a})=>e?Cr.default.createElement("div",{className:(0,cs.default)(a==null?void 0:a.dappModalFooter,n)},o!=null?o:Cr.default.createElement("div",null,r)):null,Nr=ro(c_,{ssrStyles:()=>Promise.resolve().then(()=>(oo(),eo)),clientStyles:()=>(oo(),Re(eo)).default});t();var Do=A(require("react")),ps=require("@fortawesome/free-solid-svg-icons"),ss=require("@fortawesome/react-fontawesome"),pn=A(require("classnames"));var p_=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:a,headerTextClassName:s,onHide:m,globalStyles:d,styles:l})=>e?n?Do.default.createElement("div",{className:(0,pn.default)(l==null?void 0:l.dappModalHeader,r)},n):Do.default.createElement("div",{className:(0,pn.default)(l==null?void 0:l.dappModalHeader,r)},Do.default.createElement("div",{className:(0,pn.default)(l==null?void 0:l.dappModalHeaderText,s)},o),Do.default.createElement("button",{onClick:m,className:(0,pn.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,a)},Do.default.createElement(ss.FontAwesomeIcon,{size:"lg",icon:ps.faTimes}))):null,Rr=ro(p_,{ssrStyles:()=>Promise.resolve().then(()=>(oo(),eo)),clientStyles:()=>(oo(),Re(eo)).default});var s_={showHeader:!0,showFooter:!1,headerText:"",footerText:""},m_=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:a=s_,id:s="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[f,u]=(0,ms.useState)(!1);if((0,ds.useEffect)(()=>{u(!0)},[]),!l)return null;let{showHeader:x,showFooter:k,headerText:S,footerText:T,modalDialogClassName:v="dapp-modal-dialog",modalContentClassName:E="dapp-modal-dialog-content",modalHeaderClassName:N="dapp-modal-dialog-header",modalHeaderTextClassName:C="dapp-modal-dialog-header-text",modalCloseButtonClassName:L="dapp-modal-dialog-close-button",modalBodyClassName:D="dapp-modal-dialog-content-body",modalFooterClassName:V="dapp-modal-dialog-footer",customModalHeader:ve,customModalFooter:Ve}=a,he=Pe=>{Pe.key==="Escape"&&r&&(m==null||m())};return ao.default.createElement(ao.default.Fragment,null,f&&(0,ls.createPortal)(ao.default.createElement("div",{id:s,role:"dialog","aria-modal":"true",className:(0,Dr.default)(v,_==null?void 0:_.dappModal,n),"data-testid":e,onKeyDown:he},ao.default.createElement("div",{className:(0,Dr.default)(_==null?void 0:_.dappModalContent,E)},ao.default.createElement(Rr,{visible:x,headerText:S,customHeader:ve,className:N,headerTextClassName:C,closeButtonClassName:L,onHide:m}),ao.default.createElement(Pr,{className:D},o),ao.default.createElement(Nr,{visible:k,customFooter:Ve,footerText:T,className:V}))),d!=null?d:document==null?void 0:document.body))},d_=ro(m_,{ssrStyles:()=>Promise.resolve().then(()=>(oo(),eo)),clientStyles:()=>(oo(),Re(eo)).default});t();t();var pt=require("react"),_s=e=>{let[o,n]=(0,pt.useState)(!1),r=()=>{n(!0)},a=()=>{n(!1)};return(0,pt.useEffect)(()=>{(e==null?void 0:e.visible)===!0?r():(e==null?void 0:e.visible)===!1&&a()},[e==null?void 0:e.visible]),{handleShowModal:r,handleHideModal:a,showModal:o}};t();var us=({hideButtonWhenModalOpens:e,onContentHide:o,onContentShow:n,onModalCloses:r,onModalOpens:a,token:s,wrapContentInsideModal:m})=>{let d=Kc(),[l,_]=(0,gs.useState)(!1),{handleShowModal:f,handleHideModal:u,showModal:x}=_s(),k=Qp(s),S=!e||!l,T=()=>{_(!1),o==null||o(),m?(u(),r==null||r()):r&&(console.warn('Deprecated: "onModalCloses" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentHide" instead.'),r())};return{disabledConnectButton:k,handleCloseModal:T,handleOpenModal:()=>{if(d)throw new Error(ee);if(l)return T();_(!0),n==null||n(),m?(f(),a==null||a()):a&&(console.warn('Deprecated: "onModalOpens" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentShow" instead.'),a())},shouldRenderButton:S,showContent:l,showModal:x}};t();var Mo=require("react"),Mr=require("@multiversx/sdk-hw-provider");Ke();q();_e();K();Ye();t();var uo=require("react"),l_=10,fs=()=>{let[e,o]=(0,uo.useState)(""),[n,r]=(0,uo.useState)(!1),[a,s]=(0,uo.useState)(0),[m,d]=(0,uo.useState)([]),[l,_]=(0,uo.useState)(null),[f,u]=(0,uo.useState)(!1);return{accounts:m,defaultAddressesPerPage:l_,error:e,isLoading:n,onGoToNextPage:()=>{_(null),s(v=>v+1)},onGoToPrevPage:()=>{_(null),s(v=>v===0?0:v-1)},onGoToSpecificPage:v=>{_(null),s(v)},onSelectAddress:v=>{_(v)},selectedAddress:l,setAccounts:d,setError:o,setIsLoading:r,setShowAddressList:u,showAddressList:f,startIndex:a}};var sn="Check if the MultiversX App is open on Ledger",hs=({callbackRoute:e,token:o,addressesPerPage:n,nativeAuth:r,onLoginRedirect:a})=>{let s=O(bc),m=xe(),d=Z(),l=Q(),_=r!=null,f=ne(r),u=o,{accounts:x,setAccounts:k,isLoading:S,setIsLoading:T,setShowAddressList:v,showAddressList:E,startIndex:N,selectedAddress:C,onGoToPrevPage:L,onGoToNextPage:D,onGoToSpecificPage:V,onSelectAddress:ve,error:Ve,setError:he,defaultAddressesPerPage:Pe}=fs(),R=n!=null?n:Pe,[Ce,ce]=(0,Mo.useState)(""),[Oo,fo]=(0,Mo.useState)(!1),mn=({address:B,index:W,signature:P})=>{d(pi({index:W,loginType:"ledger"})),P&&f.setTokenLoginInfo({signature:P,address:B}),d(z({address:B,loginMethod:"ledger"})),ae({callbackRoute:e,onLoginRedirect:a,options:{address:B,signature:P}})},X=(B,W="")=>{var P;if(S){let{errorMessage:G,defaultErrorMessage:$}=vi(B),Y=(P=G!=null?G:$)!=null?P:sn;he(`${Y}.${W}`),T(!1),d(jt(null))}},Ne=()=>b(void 0,null,function*(){try{if(m instanceof Mr.HWProvider&&m.isInitialized())return m.isConnected()}catch(B){X(B)}return!1}),mt=()=>b(void 0,null,function*(){if(yield Ne()){he(""),T(!1);return}try{let W=new Mr.HWProvider;(yield W.init())&&de(W),he(""),T(!1)}catch(W){X(W)}}),dt=()=>b(void 0,null,function*(){let B=yield Ne();if(!C||!B)return X(sn);let{index:W}=C;if(_&&!u&&(u=yield f.getNativeAuthLoginToken(),!u)){console.warn("Fetching block failed. Login cancelled.");return}if(u){f.setLoginToken(u);try{let P=yield m.tokenLogin({token:i.Buffer.from(`${u}{}`),addressIndex:W});mn({address:P.address,index:W,signature:P.signature.toString("hex")})}catch(P){X(P,". Update MultiversX App to continue.")}}else try{let{address:P}=yield m.login({addressIndex:W});mn({address:P,index:W})}catch(P){return X(P),!1}return!0}),lt=()=>b(void 0,null,function*(){try{if(T(!0),C==null)return!1;d(s?ti(C):jt(I(h({},C),{version:Ce,hasContractDataEnabled:Oo}))),T(!1),yield dt()}catch(B){X(B)}return v(!1),!0}),Fo=()=>b(void 0,null,function*(){if(!(yield Ne()))return X(Ve);try{T(!0);let W=yield m.getAccounts(N,R),P=yield $a(m);ce(P.version),fo(P.dataEnabled),k(W),T(!1)}catch(W){X(W)}}),_t=()=>b(void 0,null,function*(){if(l)throw new Error(ee);ue(),he("");try{if(T(!0),!(yield Ne()))return X(sn);if(s!=null){if(!C)return X(sn);let{address:W}=yield m.login({addressIndex:C.index.valueOf()});if(!W)return X("Login cancelled.");d(z({address:W,loginMethod:"ledger"})),ae({callbackRoute:e,onLoginRedirect:a})}else x!=null&&x.length||(yield Fo()),v(!0);T(!1)}catch(B){X(B)}}),gt=()=>b(void 0,null,function*(){try{let B=yield Ne();if(B||(yield mt()),B=yield Ne(),!B)return X(sn);(x.length===0||N>=0)&&(yield Fo())}catch(B){X(B)}});(0,Mo.useEffect)(()=>{gt()},[N,E,m]),(0,Mo.useEffect)(()=>{(x==null?void 0:x.length)>0&&!E&&v(!0)},[x]);let He=Boolean(Ve);return[_t,{loginFailed:He,isLoggedIn:l&&!He,error:Ve,isLoading:S&&!He},{accounts:x,showAddressList:E,startIndex:N,selectedAddress:C,version:Ce,contractDataEnabled:Oo,onGoToPrevPage:L,onGoToNextPage:D,onGoToSpecificPage:V,onSelectAddress:ve,onConfirmSelectedAddress:lt}]};t();var xs=e=>{var n;let o=O(Nc);return ct(I(h({},e),{customWalletAddress:(n=e.customWalletAddress)!=null?n:o}))};t();var fe=require("react");t();var st=require("react");function ys(e,o=[]){let n=(0,st.useRef)(!0);(0,st.useEffect)(()=>{n.current?n.current=!1:e()},o)}q();_e();K();Ye();ye();var Ts=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,logoutRoute:a,customRequestMethods:s=[]})=>{var W;let m=Z(),d=Yp(n),l=ne(d?n:!1),_=o,[f,u]=(0,fe.useState)(""),[x,k]=(0,fe.useState)(""),[S,T]=(0,fe.useState)(!0),[v,E]=(0,fe.useState)([]),[N,C]=(0,fe.useState)(null),{provider:L}=jc(),D=O(Ac),V=O(Ic),ve=O(Lc),Ve=O(Ec),he=O(vc),Pe=O(wc),R=(0,fe.useRef)(L),Ce=(0,fe.useRef)(!1),ce=(0,fe.useRef)(!1),Oo=(W=a!=null?a:he)!=null?W:"/",fo=[hn.CANCEL_ACTION,...s];o&&fo.push(hn.SIGN_LOGIN_TOKEN),d&&fo.push(hn.SIGN_NATIVE_AUTH_TOKEN);let mn=S?"":`${Ve}?wallet-connect=${encodeURIComponent(x)}`,X=Boolean(f),Ne=Q(),mt=()=>{Hp(Oo)},dt=P=>{console.log("WalletConnect Session Event: ",P)},lt=()=>b(void 0,null,function*(){var P,G,$,Y;try{if(Ce.current||R.current==null)return;if(!ce.current){try{yield(P=R.current)==null?void 0:P.logout()}catch(ut){console.warn("Unable to logout")}return}let te=yield($=(G=R.current)==null?void 0:G.getAddress)==null?void 0:$.call(G);if(!te){console.warn("Login cancelled.");return}let ke=yield(Y=R.current)==null?void 0:Y.getSignature(),Te={address:te,loginMethod:"walletconnectv2"},ho={logoutRoute:Oo,loginType:"walletconnectv2",callbackRoute:e!=null?e:U().href};m(ci(ho)),ke&&l.setTokenLoginInfo({signature:ke,address:te}),m(z(Te)),ae({callbackRoute:e,onLoginRedirect:r,options:{address:te,signature:ke}})}catch(te){u("User rejected connection proposal"),console.error(te)}}),Fo=()=>b(void 0,null,function*(){var G,$,Y,te,ke;if(Le(R.current)==="walletconnectv2")try{((te=(Y=($=(G=R.current)==null?void 0:G.walletConnector)==null?void 0:$.session)==null?void 0:Y.getAll())!=null?te:[]).length>0&&(yield(ke=R.current)==null?void 0:ke.logout()),R.current=Vo,C(null)}catch(Te){console.warn("Unable to logout")}}),_t=P=>b(void 0,null,function*(){var G,$,Y;if(!D||!V){u("Invalid WalletConnect setup");return}if(!P||!P.topic){u("Expired connection");return}try{if((R.current?Le(R.current):!1)!=="walletconnectv2"){yield He();return}if(T(!0),yield Fo(),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}_&&l.setLoginToken(_),yield He(!1);let{approval:ke}=yield(G=R.current)==null?void 0:G.connect({topic:P.topic,methods:fo});try{yield($=R.current)==null?void 0:$.login({approval:ke,token:_})}catch(Te){console.error("User rejected existing connection proposal",Te),u("User rejected existing connection proposal"),T(!0),yield He()}}catch(te){console.error("Unable to connect to existing session",te),u("Unable to connect to existing session")}finally{E((Y=R.current)==null?void 0:Y.pairings)}}),gt=P=>b(void 0,null,function*(){var G,$;try{P&&(yield(G=R.current)==null?void 0:G.logout({topic:P}))}catch(Y){console.error("Unable to remove existing pairing",Y),u("Unable to remove existing pairing")}finally{let Y=yield($=R.current)==null?void 0:$.getPairings();E(Y)}});function He(P=!0){return b(this,null,function*(){var ho,ut,Ur;ue();let G=yield Jp({maxRetries:15});if(!G){console.error("Invalid chainID"),u("Invalid chainID");return}if(!V||!D){console.error("Invalid WalletConnect setup"),u("Invalid WalletConnect setup");return}let $=Q(),Y=ce.current===!1&&!$,te=(ut=(ho=R.current)==null?void 0:ho.isInitialized)==null?void 0:ut.call(ho);if(Ce.current||Y||te)return;if(Ce.current=!0,(Ur=R.current)!=null&&Ur.walletConnector){yield R.current.init(),C(R.current),Ce.current=!1,P&&(yield B());return}let ke={onClientLogin:lt,onClientLogout:mt,onClientEvent:dt},Te=new xn(ke,G,D,V,ve);yield Te.init(),C(Te),R.current=Te,Ce.current=!1,P&&(E(Te.pairings),yield B())})}function B(){return b(this,null,function*(){var P,G;if(!!R.current){if(!D||!V){u("Invalid WalletConnect setup");return}try{if(!ce.current)return;let{uri:$,approval:Y}=yield(P=R.current)==null?void 0:P.connect({methods:fo});if(!Boolean($))return;if(k($),(ve==null?void 0:ve.logger)==="debug"&&console.log("WalletConnect uri: ",$),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}if(_&&l.setLoginToken(_),(R.current?Le(R.current):!1)!=="walletconnectv2"){T(!0),yield He();return}try{yield(G=R.current)==null?void 0:G.login({approval:Y,token:_})}catch(Te){console.error("User rejected connection proposal",Te),u("User rejected connection proposal"),T(!0)}}catch($){console.error("Unable to connect",$)}}})}return ys(()=>{R.current=L},[L]),(0,fe.useEffect)(()=>(ce.current=!0,()=>{ce.current=!1}),[]),(0,fe.useEffect)(()=>{T(!x)},[x]),(0,fe.useEffect)(()=>{if(!N)return;(Boolean(N.session)||Pe==="walletconnectv2")&&Ne&&de(N)},[N,Ne]),[He,{error:f,loginFailed:X,isLoading:S&&!X,isLoggedIn:Ne&&!X},{uriDeepLink:mn,walletConnectUri:x,cancelLogin:Fo,connectExisting:_t,removeExistingPairing:gt,wcPairings:v}]};t();var Or=require("react"),bs=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Ke();q();K();Ye();le();le();var ws=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,s]=(0,Or.useState)(""),[m,d]=(0,Or.useState)(!1),l=n!=null,_=ne(n),f=o,u=Z(),x=Q();function k(){return b(this,null,function*(){if(x)throw new Error(ee);ue(),d(!0);let T=bs.MetamaskProvider.getInstance();try{if(!(yield T.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let E=to(),N=encodeURIComponent(Xe(e!=null?e:E));if(l&&!f&&(f=yield _.getNativeAuthLoginToken(),!f)){console.warn("Fetching block failed. Login cancelled.");return}f&&_.setLoginToken(f);let C=h({callbackUrl:N},f&&{token:f});yield T.login(C),de(T);let{signature:L,address:D}=T.account;if(!D){d(!1),console.warn("Login cancelled."),s("Login cancelled");return}L&&f&&_.setTokenLoginInfo({signature:L,address:D}),u(z({address:D,loginMethod:"metamask"})),ae({callbackRoute:e,onLoginRedirect:r,options:{signature:L,address:D}})}catch(v){console.error("error logging in",v),s("error logging in"+v.message)}finally{d(!1)}})}let S=Boolean(a);return[k,{loginFailed:S,error:a,isLoading:m&&!S,isLoggedIn:x&&!S}]};t();var Fr=require("react"),Br=require("@multiversx/sdk-passkey-provider/out");Ke();q();K();Ye();le();le();var Ss=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,s]=(0,Fr.useState)(""),[m,d]=(0,Fr.useState)(!1),l=n!=null,_=ne(n),f=o,u=Z(),x=Q();function k(){return b(this,null,function*(){if(x)throw new Error(ee);ue(),d(!0);let v=Br.PasskeyProvider.getInstance();try{if(!(yield v.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let N=to(),C=encodeURIComponent(Xe(e!=null?e:N));if(l&&!f&&(f=yield _.getNativeAuthLoginToken(),!f)){console.warn("Fetching block failed. Login cancelled.");return}f&&_.setLoginToken(f);let L=h({callbackUrl:C},f&&{token:f});yield v.login(L),de(v);let{signature:D,address:V}=v.account;if(!V){d(!1),console.warn("Login cancelled."),s("Login cancelled");return}D&&f&&_.setTokenLoginInfo({signature:D,address:V}),u(z({address:V,loginMethod:"passkey"})),ae({callbackRoute:e,onLoginRedirect:r,options:{signature:D,address:V}})}catch(E){console.error("error logging in",E),s("Error logging in: "+E.message)}finally{d(!1)}})}let S=v=>b(void 0,null,function*(){let E=Br.PasskeyProvider.getInstance();return yield E.init(),yield E.createAccount({walletName:v})}),T=Boolean(a);return[k,S,{loginFailed:T,error:a,isLoading:m&&!T,isLoggedIn:x&&!T}]};0&&(module.exports={useCrossWindowLogin,useExtensionLogin,useGetModalLoginMethods,useLedgerLogin,useMetamaskLogin,useOperaLogin,usePasskeyLogin,useWalletConnectV2Login,useWebWalletLogin,useXaliasLogin});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
