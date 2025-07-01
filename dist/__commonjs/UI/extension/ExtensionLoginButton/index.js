"use strict";var zi=Object.create;var Be=Object.defineProperty,qi=Object.defineProperties,Ki=Object.getOwnPropertyDescriptor,Xi=Object.getOwnPropertyDescriptors,Yi=Object.getOwnPropertyNames,oo=Object.getOwnPropertySymbols,Zi=Object.getPrototypeOf,Jo=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var st=(e,o,n)=>o in e?Be(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,g=(e,o)=>{for(var n in o||(o={}))Jo.call(o,n)&&st(e,n,o[n]);if(oo)for(var n of oo(o))mt.call(o,n)&&st(e,n,o[n]);return e},w=(e,o)=>qi(e,Xi(o));var _t=(e,o)=>{var n={};for(var r in e)Jo.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&oo)for(var r of oo(e))o.indexOf(r)<0&&mt.call(e,r)&&(n[r]=e[r]);return n};var f=(e,o)=>()=>(e&&(o=e(e=0)),o);var M=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),z=(e,o)=>{for(var n in o)Be(e,n,{get:o[n],enumerable:!0})},dt=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Yi(o))!Jo.call(e,a)&&a!==n&&Be(e,a,{get:()=>o[a],enumerable:!(r=Ki(o,a))||r.enumerable});return e};var b=(e,o,n)=>(n=e!=null?zi(Zi(e)):{},dt(o||!e||!e.__esModule?Be(n,"default",{value:e,enumerable:!0}):n,e)),se=e=>dt(Be({},"__esModule",{value:!0}),e);var L=(e,o,n)=>new Promise((r,a)=>{var s=l=>{try{d(n.next(l))}catch(h){a(h)}},m=l=>{try{d(n.throw(l))}catch(h){a(h)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,m);d((n=n.apply(e,o)).next())});var gt=M(no=>{"use strict";t();no.byteLength=Qi;no.toByteArray=op;no.fromByteArray=rp;var q=[],F=[],Ji=typeof Uint8Array!="undefined"?Uint8Array:Array,Qo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(de=0,lt=Qo.length;de<lt;++de)q[de]=Qo[de],F[Qo.charCodeAt(de)]=de;var de,lt;F["-".charCodeAt(0)]=62;F["_".charCodeAt(0)]=63;function ut(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function Qi(e){var o=ut(e),n=o[0],r=o[1];return(n+r)*3/4-r}function ep(e,o,n){return(o+n)*3/4-n}function op(e){var o,n=ut(e),r=n[0],a=n[1],s=new Ji(ep(e,r,a)),m=0,d=a>0?r-4:r,l;for(l=0;l<d;l+=4)o=F[e.charCodeAt(l)]<<18|F[e.charCodeAt(l+1)]<<12|F[e.charCodeAt(l+2)]<<6|F[e.charCodeAt(l+3)],s[m++]=o>>16&255,s[m++]=o>>8&255,s[m++]=o&255;return a===2&&(o=F[e.charCodeAt(l)]<<2|F[e.charCodeAt(l+1)]>>4,s[m++]=o&255),a===1&&(o=F[e.charCodeAt(l)]<<10|F[e.charCodeAt(l+1)]<<4|F[e.charCodeAt(l+2)]>>2,s[m++]=o>>8&255,s[m++]=o&255),s}function np(e){return q[e>>18&63]+q[e>>12&63]+q[e>>6&63]+q[e&63]}function tp(e,o,n){for(var r,a=[],s=o;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(e[s+2]&255),a.push(np(r));return a.join("")}function rp(e){for(var o,n=e.length,r=n%3,a=[],s=16383,m=0,d=n-r;m<d;m+=s)a.push(tp(e,m,m+s>d?d:m+s));return r===1?(o=e[n-1],a.push(q[o>>2]+q[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],a.push(q[o>>10]+q[o>>4&63]+q[o<<2&63]+"=")),a.join("")}});var ft=M(en=>{t();en.read=function(e,o,n,r,a){var s,m,d=a*8-r-1,l=(1<<d)-1,h=l>>1,x=-7,u=n?a-1:0,T=n?-1:1,k=e[o+u];for(u+=T,s=k&(1<<-x)-1,k>>=-x,x+=d;x>0;s=s*256+e[o+u],u+=T,x-=8);for(m=s&(1<<-x)-1,s>>=-x,x+=r;x>0;m=m*256+e[o+u],u+=T,x-=8);if(s===0)s=1-h;else{if(s===l)return m?NaN:(k?-1:1)*(1/0);m=m+Math.pow(2,r),s=s-h}return(k?-1:1)*m*Math.pow(2,s-r)};en.write=function(e,o,n,r,a,s){var m,d,l,h=s*8-a-1,x=(1<<h)-1,u=x>>1,T=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=r?0:s-1,S=r?1:-1,A=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=x):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+u>=1?o+=T/l:o+=T*Math.pow(2,1-u),o*l>=2&&(m++,l/=2),m+u>=x?(d=0,m=x):m+u>=1?(d=(o*l-1)*Math.pow(2,a),m=m+u):(d=o*Math.pow(2,u-1)*Math.pow(2,a),m=0));a>=8;e[n+k]=d&255,k+=S,d/=256,a-=8);for(m=m<<a|d,h+=a;h>0;e[n+k]=m&255,k+=S,m/=256,h-=8);e[n+k-S]|=A*128}});var Et=M(ve=>{"use strict";t();var on=gt(),Se=ft(),xt=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ve.Buffer=_;ve.SlowBuffer=mp;ve.INSPECT_MAX_BYTES=50;var to=2147483647;ve.kMaxLength=to;_.TYPED_ARRAY_SUPPORT=ap();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ap(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function te(e){if(e>to)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return an(e)}return Tt(e,o,n)}_.poolSize=8192;function Tt(e,o,n){if(typeof e=="string")return pp(e,o);if(ArrayBuffer.isView(e))return cp(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(K(e,ArrayBuffer)||e&&K(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(K(e,SharedArrayBuffer)||e&&K(e.buffer,SharedArrayBuffer)))return tn(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return _.from(r,o,n);var a=sp(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,n){return Tt(e,o,n)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function bt(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ip(e,o,n){return bt(e),e<=0?te(e):o!==void 0?typeof n=="string"?te(e).fill(o,n):te(e).fill(o):te(e)}_.alloc=function(e,o,n){return ip(e,o,n)};function an(e){return bt(e),te(e<0?0:pn(e)|0)}_.allocUnsafe=function(e){return an(e)};_.allocUnsafeSlow=function(e){return an(e)};function pp(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=wt(e,o)|0,r=te(n),a=r.write(e,o);return a!==n&&(r=r.slice(0,a)),r}function nn(e){for(var o=e.length<0?0:pn(e.length)|0,n=te(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function cp(e){if(K(e,Uint8Array)){var o=new Uint8Array(e);return tn(o.buffer,o.byteOffset,o.byteLength)}return nn(e)}function tn(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,_.prototype),r}function sp(e){if(_.isBuffer(e)){var o=pn(e.length)|0,n=te(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||cn(e.length)?te(0):nn(e);if(e.type==="Buffer"&&Array.isArray(e.data))return nn(e.data)}function pn(e){if(e>=to)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+to.toString(16)+" bytes");return e|0}function mp(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,n){if(K(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),K(n,Uint8Array)&&(n=_.from(n,n.offset,n.byteLength)),!_.isBuffer(o)||!_.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,a=n.length,s=0,m=Math.min(r,a);s<m;++s)if(o[s]!==n[s]){r=o[s],a=n[s];break}return r<a?-1:a<r?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var a=_.allocUnsafe(n),s=0;for(r=0;r<o.length;++r){var m=o[r];if(K(m,Uint8Array))s+m.length>a.length?_.from(m).copy(a,s):Uint8Array.prototype.set.call(a,m,s);else if(_.isBuffer(m))m.copy(a,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=m.length}return a};function wt(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||K(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return rn(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Lt(e).length;default:if(a)return r?-1:rn(e).length;o=(""+o).toLowerCase(),a=!0}}_.byteLength=wt;function _p(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return bp(this,o,n);case"utf8":case"utf-8":return vt(this,o,n);case"ascii":return yp(this,o,n);case"latin1":case"binary":return Tp(this,o,n);case"base64":return xp(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wp(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function le(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)le(this,n,n+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)le(this,n,n+3),le(this,n+1,n+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)le(this,n,n+7),le(this,n+1,n+6),le(this,n+2,n+5),le(this,n+3,n+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?vt(this,0,o):_p.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",n=ve.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};xt&&(_.prototype[xt]=_.prototype.inspect);_.prototype.compare=function(o,n,r,a,s){if(K(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),a===void 0&&(a=0),s===void 0&&(s=this.length),n<0||r>o.length||a<0||s>this.length)throw new RangeError("out of range index");if(a>=s&&n>=r)return 0;if(a>=s)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,a>>>=0,s>>>=0,this===o)return 0;for(var m=s-a,d=r-n,l=Math.min(m,d),h=this.slice(a,s),x=o.slice(n,r),u=0;u<l;++u)if(h[u]!==x[u]){m=h[u],d=x[u];break}return m<d?-1:d<m?1:0};function St(e,o,n,r,a){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,cn(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1;n=e.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof o=="string"&&(o=_.from(o,r)),_.isBuffer(o))return o.length===0?-1:ht(e,o,n,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):ht(e,[o],n,r,a);throw new TypeError("val must be string, number or Buffer")}function ht(e,o,n,r,a){var s=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,m/=2,d/=2,n/=2}function l(k,S){return s===1?k[S]:k.readUInt16BE(S*s)}var h;if(a){var x=-1;for(h=n;h<m;h++)if(l(e,h)===l(o,x===-1?0:h-x)){if(x===-1&&(x=h),h-x+1===d)return x*s}else x!==-1&&(h-=h-x),x=-1}else for(n+d>m&&(n=m-d),h=n;h>=0;h--){for(var u=!0,T=0;T<d;T++)if(l(e,h+T)!==l(o,T)){u=!1;break}if(u)return h}return-1}_.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};_.prototype.indexOf=function(o,n,r){return St(this,o,n,r,!0)};_.prototype.lastIndexOf=function(o,n,r){return St(this,o,n,r,!1)};function dp(e,o,n,r){n=Number(n)||0;var a=e.length-n;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(cn(d))return m;e[n+m]=d}return m}function lp(e,o,n,r){return ro(rn(o,e.length-n),e,n,r)}function up(e,o,n,r){return ro(kp(o),e,n,r)}function gp(e,o,n,r){return ro(Lt(o),e,n,r)}function fp(e,o,n,r){return ro(Ap(o,e.length-n),e,n,r)}_.prototype.write=function(o,n,r,a){if(n===void 0)a="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")a=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var s=this.length-n;if((r===void 0||r>s)&&(r=s),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var m=!1;;)switch(a){case"hex":return dp(this,o,n,r);case"utf8":case"utf-8":return lp(this,o,n,r);case"ascii":case"latin1":case"binary":return up(this,o,n,r);case"base64":return gp(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fp(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function xp(e,o,n){return o===0&&n===e.length?on.fromByteArray(e):on.fromByteArray(e.slice(o,n))}function vt(e,o,n){n=Math.min(e.length,n);for(var r=[],a=o;a<n;){var s=e[a],m=null,d=s>239?4:s>223?3:s>191?2:1;if(a+d<=n){var l,h,x,u;switch(d){case 1:s<128&&(m=s);break;case 2:l=e[a+1],(l&192)===128&&(u=(s&31)<<6|l&63,u>127&&(m=u));break;case 3:l=e[a+1],h=e[a+2],(l&192)===128&&(h&192)===128&&(u=(s&15)<<12|(l&63)<<6|h&63,u>2047&&(u<55296||u>57343)&&(m=u));break;case 4:l=e[a+1],h=e[a+2],x=e[a+3],(l&192)===128&&(h&192)===128&&(x&192)===128&&(u=(s&15)<<18|(l&63)<<12|(h&63)<<6|x&63,u>65535&&u<1114112&&(m=u))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),a+=d}return hp(r)}var yt=4096;function hp(e){var o=e.length;if(o<=yt)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=yt));return n}function yp(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]&127);return r}function Tp(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]);return r}function bp(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var a="",s=o;s<n;++s)a+=Ip[e[s]];return a}function wp(e,o,n){for(var r=e.slice(o,n),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}_.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var a=this.subarray(o,n);return Object.setPrototypeOf(a,_.prototype),a};function C(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||C(o,n,this.length);for(var a=this[o],s=1,m=0;++m<n&&(s*=256);)a+=this[o+m]*s;return a};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||C(o,n,this.length);for(var a=this[o+--n],s=1;n>0&&(s*=256);)a+=this[o+--n]*s;return a};_.prototype.readUint8=_.prototype.readUInt8=function(o,n){return o=o>>>0,n||C(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||C(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||C(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||C(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||C(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||C(o,n,this.length);for(var a=this[o],s=1,m=0;++m<n&&(s*=256);)a+=this[o+m]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*n)),a};_.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||C(o,n,this.length);for(var a=n,s=1,m=this[o+--a];a>0&&(s*=256);)m+=this[o+--a]*s;return s*=128,m>=s&&(m-=Math.pow(2,8*n)),m};_.prototype.readInt8=function(o,n){return o=o>>>0,n||C(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,n){o=o>>>0,n||C(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(o,n){o=o>>>0,n||C(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(o,n){return o=o>>>0,n||C(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,n){return o=o>>>0,n||C(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,n){return o=o>>>0,n||C(o,4,this.length),Se.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,n){return o=o>>>0,n||C(o,4,this.length),Se.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||C(o,8,this.length),Se.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||C(o,8,this.length),Se.read(this,o,!1,52,8)};function P(e,o,n,r,a,s){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var s=Math.pow(2,8*r)-1;P(this,o,n,r,s,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var s=Math.pow(2,8*r)-1;P(this,o,n,r,s,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,1,255,0),this[n]=o&255,n+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};_.prototype.writeIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var s=Math.pow(2,8*r-1);P(this,o,n,r,s-1,-s)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};_.prototype.writeIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var s=Math.pow(2,8*r-1);P(this,o,n,r,s-1,-s)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};_.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};_.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};_.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||P(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function kt(e,o,n,r,a,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function At(e,o,n,r,a){return o=+o,n=n>>>0,a||kt(e,o,n,4,34028234663852886e22,-34028234663852886e22),Se.write(e,o,n,r,23,4),n+4}_.prototype.writeFloatLE=function(o,n,r){return At(this,o,n,!0,r)};_.prototype.writeFloatBE=function(o,n,r){return At(this,o,n,!1,r)};function It(e,o,n,r,a){return o=+o,n=n>>>0,a||kt(e,o,n,8,17976931348623157e292,-17976931348623157e292),Se.write(e,o,n,r,52,8),n+8}_.prototype.writeDoubleLE=function(o,n,r){return It(this,o,n,!0,r)};_.prototype.writeDoubleBE=function(o,n,r){return It(this,o,n,!1,r)};_.prototype.copy=function(o,n,r,a){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),n>=o.length&&(n=o.length),n||(n=0),a>0&&a<r&&(a=r),a===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),o.length-n<a-r&&(a=o.length-n+r);var s=a-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,a):Uint8Array.prototype.set.call(o,this.subarray(r,a),n),s};_.prototype.fill=function(o,n,r,a){if(typeof o=="string"){if(typeof n=="string"?(a=n,n=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!_.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(o.length===1){var s=o.charCodeAt(0);(a==="utf8"&&s<128||a==="latin1")&&(o=s)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,a),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var Sp=/[^+/0-9A-Za-z-_]/g;function vp(e){if(e=e.split("=")[0],e=e.trim().replace(Sp,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function rn(e,o){o=o||1/0;for(var n,r=e.length,a=null,s=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!a){if(n>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=n;continue}if(n<56320){(o-=3)>-1&&s.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,n<128){if((o-=1)<0)break;s.push(n)}else if(n<2048){if((o-=2)<0)break;s.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;s.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return s}function kp(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function Ap(e,o){for(var n,r,a,s=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,a=n%256,s.push(a),s.push(r);return s}function Lt(e){return on.toByteArray(vp(e))}function ro(e,o,n,r){for(var a=0;a<r&&!(a+n>=o.length||a>=e.length);++a)o[a+n]=e[a];return a}function K(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function cn(e){return e!==e}var Ip=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,a=0;a<16;++a)o[r+a]=e[n]+e[a];return o}()});var Dt=M((bm,Pt)=>{t();var I=Pt.exports={},X,Y;function sn(){throw new Error("setTimeout has not been defined")}function mn(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?X=setTimeout:X=sn}catch(e){X=sn}try{typeof clearTimeout=="function"?Y=clearTimeout:Y=mn}catch(e){Y=mn}})();function Nt(e){if(X===setTimeout)return setTimeout(e,0);if((X===sn||!X)&&setTimeout)return X=setTimeout,setTimeout(e,0);try{return X(e,0)}catch(o){try{return X.call(null,e,0)}catch(n){return X.call(this,e,0)}}}function Lp(e){if(Y===clearTimeout)return clearTimeout(e);if((Y===mn||!Y)&&clearTimeout)return Y=clearTimeout,clearTimeout(e);try{return Y(e)}catch(o){try{return Y.call(null,e)}catch(n){return Y.call(this,e)}}}var re=[],ke=!1,ue,ao=-1;function Ep(){!ke||!ue||(ke=!1,ue.length?re=ue.concat(re):ao=-1,re.length&&Ct())}function Ct(){if(!ke){var e=Nt(Ep);ke=!0;for(var o=re.length;o;){for(ue=re,re=[];++ao<o;)ue&&ue[ao].run();ao=-1,o=re.length}ue=null,ke=!1,Lp(e)}}I.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];re.push(new Rt(e,o)),re.length===1&&!ke&&Nt(Ct)};function Rt(e,o){this.fun=e,this.array=o}Rt.prototype.run=function(){this.fun.apply(null,this.array)};I.title="browser";I.browser=!0;I.env={};I.argv=[];I.version="";I.versions={};function ae(){}I.on=ae;I.addListener=ae;I.once=ae;I.off=ae;I.removeListener=ae;I.removeAllListeners=ae;I.emit=ae;I.prependListener=ae;I.prependOnceListener=ae;I.listeners=function(e){return[]};I.binding=function(e){throw new Error("process.binding is not supported")};I.cwd=function(){return"/"};I.chdir=function(e){throw new Error("process.chdir is not supported")};I.umask=function(){return 0}});var i,c,Np,p,t=f(()=>{i=b(Et()),c=b(Dt()),Np=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),p=Np});var Ot=f(()=>{"use strict";t()});var Bt,_n=f(()=>{"use strict";t();Bt="Action not allowed. User is logged in. Call logout() first"});var Mt,Ft,Ut=f(()=>{"use strict";t();Mt="https://addons.mozilla.org/en-US/firefox/addon/multiversx-defi-wallet",Ft="https://chrome.google.com/webstore/detail/multiversx-defi-wallet/dngmlblcodfobpdpecaadgfbcggfjfnm"});var dn,Wt=f(()=>{"use strict";t();dn=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(dn||{})});var Vt=f(()=>{"use strict";t()});var ln=f(()=>{"use strict";t()});var Gt=f(()=>{"use strict";t()});var $t=f(()=>{"use strict";t()});var Ht=f(()=>{"use strict";t()});var jt=f(()=>{"use strict";t()});var io,Ae,po=f(()=>{"use strict";t();io=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Ae=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Ie,zt,Pm,qt,Dm,$=f(()=>{"use strict";t();po();Ie=(T=>(T.ledger="ledger",T.walletconnect="walletconnect",T.walletconnectv2="walletconnectv2",T.wallet="wallet",T.crossWindow="crossWindow",T.iframe="iframe",T.extension="extension",T.passkey="passkey",T.metamask="metamask",T.opera="opera",T.extra="extra",T.none="",T))(Ie||{}),zt=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(zt||{}),Pm=g(g({},Ae.WindowProviderRequestEnums),zt),qt=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(qt||{}),Dm=g(g({},Ae.WindowProviderResponseEnums),qt)});var Kt=f(()=>{"use strict";t()});var Xt=f(()=>{"use strict";t()});var D=f(()=>{"use strict";t()});var Yt=f(()=>{"use strict";t()});var Zt=f(()=>{"use strict";t()});var Jt=f(()=>{"use strict";t()});var U=f(()=>{"use strict";t();$t();Ht();jt();$();Kt();Xt();D();Yt();Zt();Jt()});var un,Qt,Zm,er,Jm,or,Qm,e_,o_,nr,tr=f(()=>{"use strict";t();U();un={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Qt,egldLabel:Zm}=un["devnet"],{chainId:er,egldLabel:Jm}=un["testnet"],{chainId:or,egldLabel:Qm}=un["mainnet"],e_={["devnet"]:Qt,["testnet"]:er,["mainnet"]:or},o_={[Qt]:"devnet",[er]:"testnet",[or]:"mainnet"},nr="multiversx://"});var gn=f(()=>{"use strict";t()});var Z,rr=f(()=>{"use strict";t();Z=require("@multiversx/sdk-web-wallet-provider")});var me,fn=f(()=>{"use strict";t();me=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ar,ir,xn,p_,c_,pr=f(()=>{"use strict";t();fn();xn=String((ir=(ar=me.safeWindow)==null?void 0:ar.navigator)==null?void 0:ir.userAgent),p_=/^((?!chrome|android).)*safari/i.test(xn),c_=/firefox/i.test(xn)&&/windows/i.test(xn)});var hn,yn,cr,co,sr,Le,v=f(()=>{"use strict";t();Ot();_n();Ut();Wt();Vt();ln();Gt();tr();gn();rr();pr();hn=5e4,yn=1e9,cr=1,co="logout",sr="login",Le="0"});var ie,Ee=f(()=>{"use strict";t();ie=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Tn={};z(Tn,{css:()=>_r,default:()=>Cp});var _r,Cp,bn=f(()=>{"use strict";t();_r=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_r));Cp={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Sn,E,Ne,W=f(()=>{"use strict";t();Sn=require("@reduxjs/toolkit");v();E=(0,Sn.createAction)(co),Ne=(0,Sn.createAction)(sr,e=>({payload:e}))});var Ce,lo=f(()=>{"use strict";t();Ce=()=>Date.now()/1e3});var fr=f(()=>{"use strict";t()});var xr=f(()=>{"use strict";t()});var hr=f(()=>{"use strict";t();lo();fr();xr()});var vn={};z(vn,{clear:()=>zp,getItem:()=>Hp,localStorageKeys:()=>ge,removeItem:()=>jp,setItem:()=>$p});var ge,uo,$p,Hp,jp,zp,Fe=f(()=>{"use strict";t();hr();ge={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},uo=typeof localStorage!="undefined",$p=({key:e,data:o,expires:n})=>{!uo||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Hp=e=>{if(!uo)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Ce()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},jp=e=>{!uo||localStorage.removeItem(String(e))},zp=()=>{!uo||localStorage.clear()}});var kn={};z(kn,{clear:()=>wr,getItem:()=>Tr,removeItem:()=>br,setItem:()=>yr,storage:()=>qp});var yr,Tr,br,wr,qp,Sr=f(()=>{"use strict";t();yr=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Tr=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},br=e=>sessionStorage.removeItem(String(e)),wr=()=>sessionStorage.clear(),qp={setItem:yr,getItem:Tr,removeItem:br,clear:wr}});var Re,go=f(()=>{"use strict";t();Fe();Sr();Re={session:kn,local:vn}});var In,vr,kr,fo,An,Ar,Ir,_d,Lr,dd,ld,ud,gd,fd,xd,hd,yd,xo,ho=f(()=>{"use strict";t();In=require("@multiversx/sdk-core"),vr=require("@reduxjs/toolkit"),kr=require("redux-persist");v();go();Fe();W();fo={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Le},An={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":fo},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ar=(0,vr.createSlice)({name:"accountInfoSlice",initialState:An,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new In.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:fo},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(E,()=>(Re.local.removeItem(ge.loginExpiresAt),An)),e.addCase(Ne,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new In.Address(r).hex()}),e.addCase(kr.REHYDRATE,(o,n)=>{var h;if(!((h=n.payload)!=null&&h.account))return;let{account:r}=n.payload,{address:a,shard:s,accounts:m,publicKey:d}=r;o.address=a,o.shard=s;let l=m&&a in m;o.accounts=l?m:An.accounts,o.publicKey=d})}}),{setAccount:Ir,setAddress:_d,setAccountNonce:Lr,setAccountShard:dd,setLedgerAccount:ld,updateLedgerAccount:ud,setWalletConnectAccount:gd,setIsAccountLoading:fd,setAccountLoadingError:xd,setWebsocketEvent:hd,setWebsocketBatchEvent:yd}=Ar.actions,xo=Ar.reducer});function Ue(){return new Date().setHours(new Date().getHours()+24)}function We(e){Re.local.setItem({key:ge.loginExpiresAt,data:e,expires:e})}var Ln=f(()=>{"use strict";t();go();Fe()});var Nr,Er,Cr,Ed,Nd,Cd,yo,Rd,Pd,Rr,Dd,Od,Bd,To,bo=f(()=>{"use strict";t();Nr=require("@reduxjs/toolkit");Ln();$();W();Er={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Cr=(0,Nr.createSlice)({name:"loginInfoSlice",initialState:Er,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(E,()=>Er),e.addCase(Ne,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,We(Ue())})}}),{setLoginMethod:Ed,setWalletConnectLogin:Nd,setLedgerLogin:Cd,setTokenLogin:yo,setTokenLoginSignature:Rd,setWalletLogin:Pd,invalidateLoginSession:Rr,setLogoutRoute:Dd,setIsWalletConnectV2Initialized:Od,setWebviewLogin:Bd}=Cr.actions,To=Cr.reducer});var Dr,Pr,Or,Wd,Vd,Gd,$d,wo,So=f(()=>{"use strict";t();Dr=require("@reduxjs/toolkit");W();Pr={},Or=(0,Dr.createSlice)({name:"modalsSlice",initialState:Pr,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(E,()=>Pr)}}),{setTxSubmittedModal:Wd,setNotificationModal:Vd,clearTxSubmittedModal:Gd,clearNotificationModal:$d}=Or.actions,wo=Or.reducer});var J,fe=f(()=>{"use strict";t();Ee();J=()=>{if(!ie())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:a,search:s}}=window;return{pathname:o,hash:n,origin:r,href:a,search:s}}});var Br,Mr=f(()=>{"use strict";t();fe();Br=(e="")=>{let o=J(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var Fr,Ur=f(()=>{"use strict";t();Pe();Fr=()=>{let{pathname:e,search:o,hash:n}=J();return`${e!=null?e:""}${o!=null?o:""}${n!=null?n:""}`}});var Wr,Vr=f(()=>{"use strict";t();fn();Wr=e=>{if(!me.safeWindow.location)return;if(!new URL(me.safeWindow.location.href).protocol.startsWith("http"))return me.safeWindow.location.reload();me.safeWindow.location.assign(e)}});var Pe=f(()=>{"use strict";t();Mr();Ur();fe();Vr()});var Kp,Gr,$r=f(()=>{"use strict";t();Pe();Kp=!1,Gr=({timeout:e=0,url:o})=>{Kp||setTimeout(()=>{if(!!window)return Wr(o)},e)}});function Hr({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),a=typeof o=="function";if(r&&e!=null){if(a)return o(e,n);Gr({url:e,timeout:Xp})}}var Xp,jr=f(()=>{"use strict";t();$r();Xp=200});function zr(e){return e[Math.floor(Math.random()*e.length)]}var qr=f(()=>{"use strict";t()});var Kr=f(()=>{"use strict";t();ln()});var En=f(()=>{"use strict";t();jr();qr();Kr()});var Xr,Yr,Zr,Nn,Zp,Jr,Tl,bl,wl,vo,ko=f(()=>{"use strict";t();Xr=require("@reduxjs/toolkit"),Yr=b(require("lodash.omit")),Zr=require("redux-persist");gn();W();En();Nn={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Zp={network:Nn},Jr=(0,Xr.createSlice)({name:"appConfig",initialState:Zp,reducers:{initializeNetworkConfig:(e,o)=>{let n=zr(o.payload.walletConnectV2RelayAddresses),r=(0,Yr.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(g(g({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=g(g({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(E,o=>{o.network.customWalletAddress=void 0}),e.addCase(Zr.REHYDRATE,(o,n)=>{var a,s;if(!((s=(a=n.payload)==null?void 0:a.network)!=null&&s.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Tl,updateNetworkConfig:bl,setCustomWalletAddress:wl}=Jr.actions,vo=Jr.reducer});var Qr,Cn,ea,Ll,El,Nl,Ao,Io=f(()=>{"use strict";t();Qr=require("@reduxjs/toolkit");U();W();Cn={isSigning:!1,signedSessions:{}},ea=(0,Qr.createSlice)({name:"signedMessageInfoSliceState",initialState:Cn,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:a}=o.payload;a&&(e.errorMessage=a),e.isSigning=r.status==="pending",e.signedSessions[n]=g(g({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>g(g({},e),o.payload),clearSignedMessageInfo:()=>Cn},extraReducers:e=>{e.addCase(E,()=>Cn)}}),{setSignSession:Ll,clearSignedMessageInfo:El,setSignSessionState:Nl}=ea.actions,Ao=ea.reducer});var na,ta,oa,ra,Ml,Fl,Ul,Wl,Lo,Eo=f(()=>{"use strict";t();na=require("@reduxjs/toolkit"),ta=require("redux-persist");U();lo();W();oa={customToasts:[],transactionToasts:[]},ra=(0,na.createSlice)({name:"toastsSlice",initialState:oa,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(a=>a.toastId===n);if(r!==-1){e.customToasts[r]=w(g(g({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(w(g({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Ce(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(E,()=>oa),e.addCase(ta.REHYDRATE,(o,n)=>{var a,s;let r=(s=(a=n.customToasts)==null?void 0:a.filter(m=>!("component"in m)))!=null?s:[];o.customToasts=r})}}),{addCustomToast:Ml,removeCustomToast:Fl,addTransactionToast:Ul,removeTransactionToast:Wl}=ra.actions,Lo=ra.reducer});var aa,Pn,Dn,On,Jp,Rn,ia,Hl,jl,zl,No,Co=f(()=>{"use strict";t();aa=require("@reduxjs/toolkit");W();Pn="Transaction failed",Dn="Transaction successful",On="Processing transaction",Jp="Transaction submitted",Rn={},ia=(0,aa.createSlice)({name:"transactionsInfo",initialState:Rn,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Pn,successMessage:(r==null?void 0:r.successMessage)||Dn,processingMessage:(r==null?void 0:r.processingMessage)||On,submittedMessage:(r==null?void 0:r.submittedMessage)||Jp,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Rn},extraReducers:e=>{e.addCase(E,()=>Rn)}}),{clearTransactionsInfo:Hl,setTransactionsDisplayInfo:jl,clearTransactionsInfoForSessionId:zl}=ia.actions,No=ia.reducer});function pa(e){return e!=null&&(sc(e)||uc(e))}function Ro(e){return e!=null&&(mc(e)||gc(e))}function Po(e){return e!=null&&(_c(e)||fc(e))}function ca(e){return e!=null&&(dc(e)||xc(e))}function sa(e){return e!=null&&lc(e)}function sc(e){return e!=null&&ec.includes(e)}function mc(e){return e!=null&&oc.includes(e)}function _c(e){return e!=null&&nc.includes(e)}function dc(e){return e!=null&&tc.includes(e)}function lc(e){return e!=null&&rc.includes(e)}function uc(e){return e!=null&&ac.includes(e)}function gc(e){return e!=null&&ic.includes(e)}function fc(e){return e!=null&&pc.includes(e)}function xc(e){return e!=null&&cc.includes(e)}var ec,oc,nc,tc,rc,ac,ic,pc,cc,Mn=f(()=>{"use strict";t();$();ec=["sent"],oc=["success"],nc=["fail","cancelled","timedOut"],tc=["invalid"],rc=["timedOut"],ac=["pending"],ic=["success"],pc=["fail","invalid"],cc=["not executed"]});var ma,_a,Ve,hc,da,ou,nu,tu,ru,au,iu,pu,cu,su,mu,_u,Do,Oo=f(()=>{"use strict";t();ma=require("@reduxjs/toolkit"),_a=require("redux-persist");$();Mn();W();Ve={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},hc={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},da=(0,ma.createSlice)({name:"transactionsSlice",initialState:Ve,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,h;let{sessionId:n,transactions:r,errorMessage:a,status:s,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=g(g(g({},hc),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:s,errorMessage:a,redirectRoute:m,customTransactionInformation:g(g({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((h=e==null?void 0:e.transactionsToSign)==null?void 0:h.sessionId)===n&&(e.transactionsToSign=Ve.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=g(g({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:a,transactions:s}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,a!=null&&(e.signedTransactions[n].errorMessage=a),s!=null&&(e.signedTransactions[n].transactions=s))},updateSignedTransactionStatus:(e,o)=>{var h,x,u,T,k,S,A,R;let{sessionId:n,status:r,errorMessage:a,transactionHash:s,serverTransaction:m,inTransit:d}=o.payload,l=(x=(h=e.signedTransactions)==null?void 0:h[n])==null?void 0:x.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(N=>N.hash===s?w(g(g({},m!=null?m:{}),N),{status:r,errorMessage:a,inTransit:d}):N);let j=(T=(u=e.signedTransactions[n])==null?void 0:u.transactions)==null?void 0:T.every(N=>Ro(N.status)),ne=(S=(k=e.signedTransactions[n])==null?void 0:k.transactions)==null?void 0:S.some(N=>Po(N.status)),we=(R=(A=e.signedTransactions[n])==null?void 0:A.transactions)==null?void 0:R.every(N=>ca(N.status));j&&(e.signedTransactions[n].status="success"),ne&&(e.signedTransactions[n].status="fail"),we&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Ve.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Ve.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=g(g({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(E,()=>Ve),e.addCase(_a.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:a}=n.payload.transactions,s=Object.entries(r).reduce((d,[l,h])=>{let x=new Date(l),u=new Date;return u.setHours(u.getHours()+5),u-x>0||(d[l]=h),d},{});a!=null&&(o.customTransactionInformationForSessionId=a),r!=null&&(o.signedTransactions=s)})}}),{updateSignedTransactionStatus:ou,updateSignedTransactions:nu,setTransactionsToSign:tu,clearAllTransactionsToSign:ru,clearAllSignedTransactions:au,clearSignedTransaction:iu,clearTransactionToSign:pu,setSignTransactionsError:cu,setSignTransactionsCancelMessage:su,moveTransactionsToSignedState:mu,updateSignedTransactionsCustomTransactionInformation:_u}=da.actions,Do=da.reducer});var la,Fn,ua,gu,fu,xu,hu,Bo,Mo=f(()=>{"use strict";t();la=require("@reduxjs/toolkit");W();Fn={},ua=(0,la.createSlice)({name:"batchTransactionsSlice",initialState:Fn,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Fn},extraReducers:e=>{e.addCase(E,()=>Fn)}}),{setBatchTransactions:gu,updateBatchTransactions:fu,clearBatchTransactions:xu,clearAllBatchTransactions:hu}=ua.actions,Bo=ua.reducer});var fa,ga,xa,wu,ha,Un=f(()=>{"use strict";t();fa=require("@reduxjs/toolkit");W();ga={},xa=(0,fa.createSlice)({name:"dappConfigSlice",initialState:ga,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(E,()=>ga)}}),{setDappConfig:wu}=xa.actions,ha=xa.reducer});var xe=f(()=>{"use strict";t();ho();bo();So();ko();Io();Eo();Co();Oo();Mo();Un()});var Wn=f(()=>{"use strict";t()});var ba,wc,Sc,he,Wo=f(()=>{"use strict";t();ba=require("@reduxjs/toolkit");Wn();ho();Mo();Un();bo();So();ko();Io();Eo();Co();Oo();wc={["account"]:xo,["dappConfig"]:ha,["loginInfo"]:To,["modals"]:wo,["networkConfig"]:vo,["signedMessageInfo"]:Ao,["toasts"]:Lo,["transactionsInfo"]:No,["transactions"]:Do,["batchTransactions"]:Bo},Sc=(e={})=>(0,ba.combineReducers)(g(g({},wc),e)),he=Sc});var ka={};z(ka,{default:()=>Uc,sessionStorageReducers:()=>Vn});function pe(e,o=[]){return{key:e,version:1,storage:Sa.default,blacklist:o}}var O,wa,Sa,vc,Ge,kc,Ac,Ic,Lc,Ec,Nc,Cc,Rc,Pc,Dc,va,Oc,Vn,Bc,Mc,Fc,Uc,Aa=f(()=>{"use strict";t();O=require("redux-persist"),wa=b(require("redux-persist/lib/storage")),Sa=b(require("redux-persist/lib/storage/session"));Wo();xe();ho();Mo();bo();So();ko();Io();Eo();Co();Oo();Wn();vc={persistReducersStorageType:"localStorage"},Ge={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},kc=pe(Ge["account"]),Ac=pe(Ge["loginInfo"]),Ic=pe(Ge["modals"]),Lc=pe(Ge["networkConfig"]),Ec={2:e=>w(g({},e),{networkConfig:Nn})};Nc=pe("sdk-dapp-transactionsInfo"),Cc=pe("sdk-dapp-transactions",["transactionsToSign"]),Rc=pe("sdk-dapp-batchTransactions",["batchTransactions"]),Pc=pe("sdk-dapp-toasts"),Dc=pe("sdk-dapp-signedMessageInfo"),va={key:"sdk-dapp-store",version:2,storage:wa.default,whitelist:Object.keys(Ge),migrate:(0,O.createMigrate)(Ec,{debug:!1})},Oc=w(g({},va),{whitelist:[]}),Vn={["toasts"]:(0,O.persistReducer)(Pc,Lo),["transactions"]:(0,O.persistReducer)(Cc,Do),["transactionsInfo"]:(0,O.persistReducer)(Nc,No),["batchTransactions"]:(0,O.persistReducer)(Rc,Bo),["signedMessageInfo"]:(0,O.persistReducer)(Dc,Ao)},Bc=w(g({},Vn),{["account"]:(0,O.persistReducer)(kc,xo),["loginInfo"]:(0,O.persistReducer)(Ac,To),["modals"]:(0,O.persistReducer)(Ic,wo),["networkConfig"]:(0,O.persistReducer)(Lc,vo)}),Mc=vc.persistReducersStorageType==="localStorage",Fc=Mc?(0,O.persistReducer)(va,he(Vn)):(0,O.persistReducer)(Oc,he(Bc)),Uc=Fc});var Ia={};z(Ia,{default:()=>Wc});var Wc,La=f(()=>{"use strict";t();Wo();Wc=he()});var Ea={};z(Ea,{default:()=>Gc});var V,Vc,Gc,Na=f(()=>{"use strict";t();V=require("redux-persist"),Vc=[V.FLUSH,V.REHYDRATE,V.PAUSE,V.PERSIST,V.PURGE,V.REGISTER],Gc=Vc});var Pa={};z(Pa,{default:()=>Ra});function Ra(e){return(0,Ca.persistStore)(e)}var Ca,Da=f(()=>{"use strict";t();Ca=require("redux-persist")});var di=M((Kv,_i)=>{t();var Fs=typeof p=="object"&&p&&p.Object===Object&&p;_i.exports=Fs});var ui=M((Xv,li)=>{t();var Us=di(),Ws=typeof self=="object"&&self&&self.Object===Object&&self,Vs=Us||Ws||Function("return this")();li.exports=Vs});var et=M((Yv,gi)=>{t();var Gs=ui(),$s=Gs.Symbol;gi.exports=$s});var yi=M((Zv,hi)=>{t();var fi=et(),xi=Object.prototype,Hs=xi.hasOwnProperty,js=xi.toString,Ye=fi?fi.toStringTag:void 0;function zs(e){var o=Hs.call(e,Ye),n=e[Ye];try{e[Ye]=void 0;var r=!0}catch(s){}var a=js.call(e);return r&&(o?e[Ye]=n:delete e[Ye]),a}hi.exports=zs});var bi=M((Jv,Ti)=>{t();var qs=Object.prototype,Ks=qs.toString;function Xs(e){return Ks.call(e)}Ti.exports=Xs});var ki=M((Qv,vi)=>{t();var wi=et(),Ys=yi(),Zs=bi(),Js="[object Null]",Qs="[object Undefined]",Si=wi?wi.toStringTag:void 0;function em(e){return e==null?e===void 0?Qs:Js:Si&&Si in Object(e)?Ys(e):Zs(e)}vi.exports=em});var Ii=M((e1,Ai)=>{t();var om=Array.isArray;Ai.exports=om});var Ei=M((o1,Li)=>{t();function nm(e){return e!=null&&typeof e=="object"}Li.exports=nm});var Ci=M((n1,Ni)=>{t();var tm=ki(),rm=Ii(),am=Ei(),im="[object String]";function pm(e){return typeof e=="string"||!rm(e)&&am(e)&&tm(e)==im}Ni.exports=pm});var rt={};z(rt,{css:()=>Vi,default:()=>_m});var Vi,_m,at=f(()=>{"use strict";t();Vi=`.dapp-core-component__loginButtonStyles__default-login-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vi));_m={"default-login-button":"dapp-core-component__loginButtonStyles__default-login-button",defaultLoginButton:"dapp-core-component__loginButtonStyles__default-login-button",wrapper:"dapp-core-component__loginButtonStyles__wrapper","login-text":"dapp-core-component__loginButtonStyles__login-text",loginText:"dapp-core-component__loginButtonStyles__login-text","button-wrapper":"dapp-core-component__loginButtonStyles__button-wrapper",buttonWrapper:"dapp-core-component__loginButtonStyles__button-wrapper","button-content":"dapp-core-component__loginButtonStyles__button-content",buttonContent:"dapp-core-component__loginButtonStyles__button-content","button-title":"dapp-core-component__loginButtonStyles__button-title",buttonTitle:"dapp-core-component__loginButtonStyles__button-title","button-icon":"dapp-core-component__loginButtonStyles__button-icon",buttonIcon:"dapp-core-component__loginButtonStyles__button-icon"}});var it={};z(it,{css:()=>ji,default:()=>lm});var ji,lm,pt=f(()=>{"use strict";t();ji=`.dapp-core-component__extensionLoginButton-styles__extension-login {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ji));lm={"extension-login":"dapp-core-component__extensionLoginButton-styles__extension-login",extensionLogin:"dapp-core-component__extensionLoginButton-styles__extension-login","login-text":"dapp-core-component__extensionLoginButton-styles__login-text",loginText:"dapp-core-component__extensionLoginButton-styles__login-text","no-extension-button-wrapper":"dapp-core-component__extensionLoginButton-styles__no-extension-button-wrapper",noExtensionButtonWrapper:"dapp-core-component__extensionLoginButton-styles__no-extension-button-wrapper",noExtensionButtonContent:"dapp-core-component__extensionLoginButton-styles__noExtensionButtonContent","no-extension-button-title":"dapp-core-component__extensionLoginButton-styles__no-extension-button-title",noExtensionButtonTitle:"dapp-core-component__extensionLoginButton-styles__no-extension-button-title"}});var fm={};z(fm,{ExtensionLoginButton:()=>gm});module.exports=se(fm);t();t();var Zo=b(require("react")),ct=b(require("classnames"));v();t();var lr=b(require("react"));t();var Me=b(require("react"));t();Ee();var mr=()=>!ie();var Rp=()=>L(void 0,null,function*(){return yield Promise.resolve().then(()=>(bn(),Tn))}),Pp=()=>(bn(),se(Tn)).default,wn=mr();function dr({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,a]=Me.default.useState(wn?void 0:Pp()),[s,m]=Me.default.useState(wn||n==null?void 0:n()),d=()=>L(this,null,function*(){(e?e():Rp()).then(l=>a(l.default)),o==null||o().then(l=>m(l.default))});return(0,Me.useEffect)(()=>{wn&&d()},[]),{globalStyles:r,styles:s}}function so(e,o){return n=>{let{globalStyles:r,styles:a}=dr({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return lr.default.createElement(e,w(g({},n),{globalStyles:r!=null?r:{},styles:a!=null?a:{}}))}}t();var tt=require("react"),Fi=require("@multiversx/sdk-extension-provider");_n();t();t();var Bp=require("@multiversx/sdk-extension-provider"),Mp=require("@multiversx/sdk-hw-provider"),Fp=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Up=require("@multiversx/sdk-opera-provider"),Wp=require("@multiversx/sdk-passkey-provider/out"),Vp=require("@multiversx/sdk-web-wallet-provider");v();po();t();var mo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Dp=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");$();t();t();var H=e=>`Unable to perform ${e}, Provider not initialized`,_o=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(H("getAccount"))}setAccount(o){throw new Error(H(`setAccount: ${o}`))}login(o){throw new Error(H(`login with options: ${o}`))}logout(o){throw new Error(H(`logout with options: ${o}`))}getAddress(){throw new Error(H("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(H(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(H(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(H(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(H(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(H(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(H(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},ur=new _o;var Gp=ur;function gr(e){Gp=e}W();t();var Wa=require("react"),De=require("react-redux");t();var Gn=require("@reduxjs/toolkit"),Fa=require("react-redux/lib/utils/Subscription");xe();t();var ya=b(require("lodash.throttle"));v();xe();Ln();go();Fe();var yc=[co],Fo=!1,Tc=(0,ya.default)(()=>{We(Ue())},5e3),Ta=e=>o=>n=>{if(yc.includes(n.type))return o(n);let r=e.getState(),a=Re.local.getItem(ge.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(a==null)return We(Ue());let m=Date.now();return a-m<0&&!Fo?setTimeout(()=>{Fo=!0,e.dispatch(Rr())},1e3):(Fo&&(Fo=!1),Tc()),o(n)};t();t();function Uo(){return typeof sessionStorage!="undefined"}var Oa=Uo()?(Aa(),se(ka)).default:(La(),se(Ia)).default,Ba=Uo()?(Na(),se(Ea)).default:[],Ma=Uo()?(Da(),se(Pa)).default:e=>e;Wo();var Q=(0,Gn.configureStore)({reducer:Oa,middleware:e=>e({serializableCheck:{ignoredActions:[...Ba,Lr.type,Ir.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ta)}),Ua=(0,Fa.createSubscription)(Q),Tg=Ma(Q),bg=(0,Gn.configureStore)({reducer:he});var $c={store:Q,subscription:Ua},$n=(0,Wa.createContext)($c),kg=(0,De.createStoreHook)($n),Vo=(0,De.createDispatchHook)($n),B=(0,De.createSelectorHook)($n);$();t();t();t();xe();t();var Va=b(require("lodash.isequal")),Go=require("reselect"),y=(0,Go.createSelectorCreator)(Go.defaultMemoize,Va.default);var ee=e=>e.account,Hn=y(ee,e=>e.address),$e=y(ee,Hn,(e,o)=>o in e.accounts?e.accounts[o]:fo),Hc=y(ee,$e,(e,o)=>{let a=e,{accounts:n}=a,r=_t(a,["accounts"]);return w(g({},r),{address:o.address,account:o})}),Ng=y($e,e=>e.balance),Cg=y($e,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Rg=y(ee,e=>e.shard),Pg=y(ee,e=>e.ledgerAccount),Dg=y(ee,e=>e.walletConnectAccount),Og=y(ee,e=>e.isAccountLoading),Bg=y(ee,e=>e.accountLoadingError),jc=y(ee,e=>e.websocketEvent),zc=y(ee,e=>e.websocketBatchEvent);t();var qc=e=>e.dappConfig,Ug=y(qc,e=>e.shouldUseWebViewProvider);t();var G=e=>e.loginInfo,$g=y(G,e=>e.loginMethod),jn=y(G,Hn,(e,o)=>Boolean(o)),Hg=y(G,e=>e.walletConnectLogin),jg=y(G,e=>e.ledgerLogin),zg=y(G,e=>e.walletLogin),qg=y(G,e=>e.isLoginSessionInvalid),He=y(G,e=>e.tokenLogin),Kg=y(G,e=>e.logoutRoute),Kc=y(G,e=>e.isWalletConnectV2Initialized);t();var Ga=e=>e.modals,Zg=y(Ga,e=>e.txSubmittedModal),Jg=y(Ga,e=>e.notificationModal);t();var _e=e=>e.networkConfig,of=y(_e,e=>e.network.chainId),nf=y(_e,e=>e.network.roundDuration),tf=y(_e,e=>e.network.walletConnectBridgeAddress),rf=y(_e,e=>e.network.walletConnectV2RelayAddress),af=y(_e,e=>e.network.walletConnectV2ProjectId),pf=y(_e,e=>e.network.walletConnectV2Options),cf=y(_e,e=>e.network.walletConnectDeepLink),ye=y(_e,e=>e.network),sf=y(ye,e=>e.apiAddress),$a=y(ye,e=>e.explorerAddress),mf=y(ye,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),_f=y(ye,e=>e.xAliasAddress),df=y(ye,e=>e.egldLabel);t();var $o=e=>e.signedMessageInfo,gf=y($o,e=>e.isSigning),ff=y($o,e=>e.errorMessage),xf=y($o,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),hf=y($o,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var Ha=e=>e.toasts,bf=y(Ha,e=>e.customToasts),wf=y(Ha,e=>e.transactionToasts);t();xe();var ja={errorMessage:Pn,successMessage:Dn,processingMessage:On},Xc=e=>e.transactionsInfo,Af=y(Xc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||ja);t();t();var oe=require("@multiversx/sdk-core");v();t();var zn=require("@multiversx/sdk-core/out");t();t();function Ho(e){try{let o=atob(e),n=btoa(o),r=i.Buffer.from(e,"base64").toString(),a=i.Buffer.from(r).toString("base64"),s=e===n||n.startsWith(e),m=e===a||a.startsWith(e);if(s&&m)return!0}catch(o){return!1}return!1}function Te(e){return Ho(e)?atob(e):e}t();t();t();t();var za=e=>{let o=e!=null?e:"";return Ho(o)?zn.TransactionPayload.fromEncoded(o):new zn.TransactionPayload(o)};t();v();var jo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(dn).some(n=>e.startsWith(n)):!1;function qn(e){var r,a,s;let o=g({},e);jo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new oe.Transaction(g(g(w(g(w(g({value:o.value.valueOf(),data:za(o.data),nonce:o.nonce.valueOf(),receiver:new oe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new oe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:hn,gasPrice:(a=o.gasPrice.valueOf())!=null?a:yn,chainID:o.chainID.valueOf(),version:new oe.TransactionVersion((s=o.version)!=null?s:cr)}),o.options?{options:new oe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new oe.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(i.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(i.Buffer.from(o.signature,"hex")),n}t();t();v();t();t();t();var Qc=require("@multiversx/sdk-core/out");t();v();t();var Ka=require("@multiversx/sdk-core");U();t();var es=require("@multiversx/sdk-core");t();t();t();var os=require("@multiversx/sdk-core"),ns=b(require("bignumber.js"));$();t();t();t();var Kn="blocks";t();t();t();t();D();t();t();D();t();t();t();var cs=b(require("bignumber.js"));v();t();var ps=require("@multiversx/sdk-core"),Xn=b(require("bignumber.js"));v();t();var as=b(require("bignumber.js"));t();Xn.default.config({ROUNDING_MODE:Xn.default.ROUND_FLOOR});t();t();t();v();t();t();t();t();v();t();v();t();var ss=require("@multiversx/sdk-core");v();t();var ze=require("@multiversx/sdk-core"),_s=b(require("bignumber.js"));v();t();t();var ms=b(require("bignumber.js"));v();t();v();t();t();t();t();t();t();v();t();v();t();v();t();D();var ls=["reDelegateRewards","claimRewards","unBond"],us=["wrapEgld","unwrapEgld"],gs=["unStake"],fs=["unDelegate"];t();t();t();v();t();var ys=b(require("bignumber.js"));t();t();D();t();var bs=b(require("bignumber.js"));t();t();t();t();var Ss=b(require("bignumber.js"));U();t();t();t();t();$();t();var As=require("@multiversx/sdk-web-wallet-provider");v();t();var ks=b(require("qs"));t();Pe();Ee();t();Ee();var sb={search:ie()?window.location.search:"",removeParams:[]};t();t();t();fe();t();D();t();t();fe();t();var Is=b(require("linkifyjs"));t();v();t();var Ls=b(require("bignumber.js"));t();U();t();t();$();t();$();t();t();t();D();t();D();t();var Es=b(require("bignumber.js"));v();D();t();D();t();var ei=require("react");U();t();t();D();t();t();var Ns=require("@multiversx/sdk-core/out"),Cs=b(require("bignumber.js"));D();t();U();t();t();U();var nw=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var oi=require("react");U();fe();t();var Ps=require("react");D();var mw=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Mn();t();var qo=e=>e.transactions,Ke=y(qo,e=>e.signedTransactions),eS=y(qo,e=>e.signTransactionsError),oS=y(qo,e=>e.signTransactionsCancelMessage),Ko=e=>o=>Object.entries(o).reduce((n,[r,a])=>(e(a.status)&&(n[r]=a),n),{}),nS=y(Ke,Ko(pa)),tS=y(Ke,Ko(Ro)),rS=y(Ke,Ko(Po)),aS=y(Ke,Ko(sa)),iS=y(qo,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(g({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>qn(n)))||[]})}),pS=y(Ke,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});function ni(){return jn(Q.getState())}En();Pe();Pe();t();t();po();U();var ti=e=>(Object.values(Ie).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=io.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=mo.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);t();var Bi=require("react"),Yo=require("@multiversx/sdk-core");t();t();var Jn=()=>B($e);t();t();t();t();t();t();t();t();t();var Xe=b(require("react"));var zS=(0,Xe.createContext)({}),qS=Q.getState();t();var ai=b(require("react"));t();var Qn=b(require("react")),Ds=b(require("axios"));t();t();xe();t();t();var Oi=require("@multiversx/sdk-native-auth-client");t();var si=b(require("axios"));t();t();t();function ii(e){return L(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var pi=(e,o,n,r=0)=>L(void 0,null,function*(){try{return yield e(...n)}catch(a){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield ii(o.delay)),yield pi(e,o,n,r+1)):null}}),ci=(e,o={retries:5,delay:500})=>(...n)=>L(void 0,null,function*(){return yield pi(e,o,n)});var Os=4,Bs=3e4,Xo={current:null},be={current:null},Ms=ci((e,o,n)=>L(void 0,null,function*(){if(n){let s=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:s}}let{data:r}=yield si.default.get(`${e}/${Kn}?from=${Os}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[a]=r;return a}));function mi(e,o,n,r){return L(this,null,function*(){if(e==null)throw new Error("missing api url");let a=Date.now();if(Xo.current!=null&&a<Xo.current.timestamp*1e3+Bs&&!r)return Xo.current;if(be.current!=null)return yield be.current;be.current=Ms(e,o,n);try{let s=yield be.current;if(s==null)throw be.current=null,new Error("could not get block hash");return Xo.current={hash:s.hash,timestamp:s.timestamp},be.current=null,s}catch(s){return be.current=null,null}})}t();t();lo();t();t();var Ri=b(Ci());var Ze=e=>{if(!e||!(0,Ri.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,a,s]=o,m=JSON.parse(Te(s)),d=Te(n);return{ttl:Number(a),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};function cm(e){return Object.prototype.toString.call(e)==="[object String]"}var Pi=e=>{var n;if(!e||!cm(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,a,s]=o,m=Te(r),d=Te(a),l=Ze(d);if(!l)return{address:m,body:d,signature:s,blockHash:"",origin:"",ttl:0};let h=w(g({},l),{address:m,body:d,signature:s});return(n=l.extraInfo)!=null&&n.timestamp||delete h.extraInfo,h}catch(r){return null}};var ot={isExpired:!1},Di=e=>{if(!e)return ot;let o=Pi(e);if(!o)return ot;let n=Ce(),{ttl:r,extraInfo:a}=o,s=a==null?void 0:a.timestamp;if(!s)return ot;let m=s+r,d=n>m,l=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};t();fe();var Je={origin:J().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},Qe=e=>{var n,r,a,s,m,d;return e===!0?Je:{origin:(n=e==null?void 0:e.origin)!=null?n:Je.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:Je.expirySeconds,apiAddress:(a=e==null?void 0:e.apiAddress)!=null?a:Je.apiAddress,tokenExpirationToastWarningSeconds:(s=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?s:Je.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var nt=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:a,extraInfo:s,gatewayUrl:m,extraRequestHeaders:d}=Qe(e),l=new Oi.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:a,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:Qe,initialize:u=>L(void 0,null,function*(){var k,S;if(!n||!o)return"";let T=()=>l.getCurrentBlockHash();try{let A=(k=u==null?void 0:u.latestBlockInfo)!=null?k:yield mi(n,a,T,u==null?void 0:u.noCache);if(!A)return"";let{hash:R,timestamp:j}=A,ne=l.encodeValue(JSON.stringify(g(g({},(S=u==null?void 0:u.extraInfo)!=null?S:s),j?{timestamp:j}:{})));return`${l.encodeValue(o)}.${R}.${r}.${ne}`}catch(A){return console.error("Error getting native auth token: ",A.toString()),""}}),getToken:({address:u,token:T,signature:k})=>l.getToken(u,T,k),getTokenExpiration:Di}};var sm=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},Mi=e=>{let o=B(ye),n=B(He),r=(0,Bi.useRef)(n==null?void 0:n.loginToken),a=sm(o.apiAddress,e),s=Qe(g(g({},e===!0?{}:e),a?{apiAddress:a}:{})),m=Boolean(e),d=nt(s),{address:l}=Jn(),h=Vo(),x=S=>{r.current=S,h(yo(g(w(g({},n),{loginToken:S}),a?{nativeAuthConfig:s}:{})))},u=()=>{try{return d.initialize()}catch(S){console.error("Unable to get block. Login failed.",S);return}},T=({address:S,signature:A})=>{let R=r.current;if(!R)throw"Token not found. Call `setLoginToken` first.";if(!m){h(yo({loginToken:R,signature:A}));return}let j=d.getToken({address:S,token:R,signature:A});return h(yo(g({loginToken:R,signature:A,nativeAuthToken:j},a?{nativeAuthConfig:s}:{}))),j};return{configuration:s,setLoginToken:x,getNativeAuthLoginToken:u,setTokenLoginInfo:T,refreshNativeAuthTokenLogin:R=>L(void 0,[R],function*({signMessageCallback:S,nativeAuthClientConfig:A}){let ne=yield nt(A||s).initialize({noCache:Boolean(A)});if(r.current=ne,!ne)return;let we=new Yo.Message({address:new Yo.Address(l),data:i.Buffer.from(`${l}${ne}`)}),N=yield S(we,{});if(!(N!=null&&N.signature))throw"Message not signed";return T({address:l,signature:i.Buffer.from(N.signature).toString("hex")})})}};var Ui=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,s]=(0,tt.useState)(""),[m,d]=(0,tt.useState)(!1),l=n!=null,h=Mi(n),x=o,u=Vo(),T=ni();function k(){return L(this,null,function*(){if(T)throw new Error(Bt);ti(),d(!0);let A=Fi.ExtensionProvider.getInstance();try{if(!(yield A.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let j=Fr(),ne=encodeURIComponent(Br(e!=null?e:j));if(l&&!x&&(x=yield h.getNativeAuthLoginToken(),!x)){console.warn("Fetching block failed. Login cancelled.");return}x&&h.setLoginToken(x);let we=g({callbackUrl:ne},x&&{token:x}),{signature:N,address:Oe}=yield A.login(we);if(gr(A),!Oe){d(!1),console.warn("Login cancelled."),s("Login cancelled");return}N&&x&&h.setTokenLoginInfo({signature:N,address:Oe}),u(Ne({address:Oe,loginMethod:"extension"})),Hr({callbackRoute:e,onLoginRedirect:r,options:{signature:N,address:Oe}})}catch(R){console.error("error logging in",R),s("error logging in"+R.message)}finally{d(!1)}})}let S=Boolean(a);return[k,{loginFailed:S,error:a,isLoading:m&&!S,isLoggedIn:T&&!S}]};t();t();v();var Wi=e=>{var a;let o=B(He),n=(a=o==null?void 0:o.loginToken)!=null?a:e;if(!n)return;let r=Ze(n);if(!!r)return r.origin.toLowerCase().startsWith(nr)};t();t();t();var mm=b(require("bignumber.js"));t();var eo=b(require("react")),Gi=b(require("classnames"));var dm=({onLogin:e,text:o="Default Login Button",className:n="dapp-login-button",btnClassName:r="dapp-default-login-button",disabled:a,"data-testid":s,children:m,globalStyles:d,styles:l})=>{let h=(0,eo.useMemo)(()=>({wrapper:(0,Gi.default)(d==null?void 0:d.btn,d==null?void 0:d.btnPrimary,d==null?void 0:d.px4,d==null?void 0:d.m1,d==null?void 0:d.mx3,{[r]:r!=null},n),loginText:l==null?void 0:l.loginText,wrapperClassName:n}),[d,l]);return eo.default.createElement("button",{"data-testid":s,disabled:a,className:h.wrapper,onClick:e},m||eo.default.createElement("span",{className:h.loginText},o))},$i=so(dm,{ssrStyles:()=>Promise.resolve().then(()=>(at(),rt)),clientStyles:()=>(at(),se(rt)).default});Ee();t();t();var Hi=()=>{let e=typeof window!="undefined"?window:{};return Boolean(e==null?void 0:e.elrondWallet)};var um=({token:e,className:o="dapp-extension-login",children:n,callbackRoute:r,buttonClassName:a="dapp-default-login-button",nativeAuth:s,loginButtonText:m="MultiversX DeFi Wallet",onLoginRedirect:d,disabled:l,"data-testid":h="extensionLoginButton",globalStyles:x,styles:u})=>{let[T]=Ui({callbackRoute:r,token:e,onLoginRedirect:d,nativeAuth:s}),k=Wi(e),S=ie()&&navigator.userAgent.indexOf("Firefox")!=-1,A={wrapper:(0,ct.default)(x==null?void 0:x.btn,x==null?void 0:x.btnPrimary,x==null?void 0:x.px4,x==null?void 0:x.m1,x==null?void 0:x.mx3,u==null?void 0:u.noExtensionButtonWrapper,{[a]:a!=null},o),loginText:(0,ct.default)(u==null?void 0:u.loginText,u==null?void 0:u.noExtensionButtonContent),wrapperClassName:o},R=()=>{T()};return Hi()?Zo.default.createElement($i,{onLogin:R,className:o,btnClassName:a,text:m,disabled:l||k,"data-testid":h},n):Zo.default.createElement("a",{rel:"noreferrer",href:S?Mt:Ft,target:"_blank",className:A.wrapper},n||Zo.default.createElement("span",{className:A.loginText},m))},gm=so(um,{ssrStyles:()=>Promise.resolve().then(()=>(pt(),it)),clientStyles:()=>(pt(),se(it)).default});0&&(module.exports={ExtensionLoginButton});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
