"use strict";var Yi=Object.create;var Be=Object.defineProperty,Zi=Object.defineProperties,Ji=Object.getOwnPropertyDescriptor,Qi=Object.getOwnPropertyDescriptors,ep=Object.getOwnPropertyNames,io=Object.getOwnPropertySymbols,op=Object.getPrototypeOf,nn=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var ut=(e,o,n)=>o in e?Be(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,f=(e,o)=>{for(var n in o||(o={}))nn.call(o,n)&&ut(e,n,o[n]);if(io)for(var n of io(o))gt.call(o,n)&&ut(e,n,o[n]);return e},w=(e,o)=>Zi(e,Qi(o));var po=(e,o)=>{var n={};for(var t in e)nn.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&io)for(var t of io(e))o.indexOf(t)<0&&gt.call(e,t)&&(n[t]=e[t]);return n};var u=(e,o)=>()=>(e&&(o=e(e=0)),o);var co=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),M=(e,o)=>{for(var n in o)Be(e,n,{get:o[n],enumerable:!0})},ft=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of ep(o))!nn.call(e,a)&&a!==n&&Be(e,a,{get:()=>o[a],enumerable:!(t=Ji(o,a))||t.enumerable});return e};var b=(e,o,n)=>(n=e!=null?Yi(op(e)):{},ft(o||!e||!e.__esModule?Be(n,"default",{value:e,enumerable:!0}):n,e)),F=e=>ft(Be({},"__esModule",{value:!0}),e);var tn=(e,o,n)=>new Promise((t,a)=>{var p=l=>{try{d(n.next(l))}catch(g){a(g)}},m=l=>{try{d(n.throw(l))}catch(g){a(g)}},d=l=>l.done?t(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var Tt=co(so=>{"use strict";r();so.byteLength=tp;so.toByteArray=ap;so.fromByteArray=cp;var z=[],B=[],np=typeof Uint8Array!="undefined"?Uint8Array:Array,rn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ge=0,ht=rn.length;ge<ht;++ge)z[ge]=rn[ge],B[rn.charCodeAt(ge)]=ge;var ge,ht;B["-".charCodeAt(0)]=62;B["_".charCodeAt(0)]=63;function xt(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var t=n===o?0:4-n%4;return[n,t]}function tp(e){var o=xt(e),n=o[0],t=o[1];return(n+t)*3/4-t}function rp(e,o,n){return(o+n)*3/4-n}function ap(e){var o,n=xt(e),t=n[0],a=n[1],p=new np(rp(e,t,a)),m=0,d=a>0?t-4:t,l;for(l=0;l<d;l+=4)o=B[e.charCodeAt(l)]<<18|B[e.charCodeAt(l+1)]<<12|B[e.charCodeAt(l+2)]<<6|B[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return a===2&&(o=B[e.charCodeAt(l)]<<2|B[e.charCodeAt(l+1)]>>4,p[m++]=o&255),a===1&&(o=B[e.charCodeAt(l)]<<10|B[e.charCodeAt(l+1)]<<4|B[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function ip(e){return z[e>>18&63]+z[e>>12&63]+z[e>>6&63]+z[e&63]}function pp(e,o,n){for(var t,a=[],p=o;p<n;p+=3)t=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),a.push(ip(t));return a.join("")}function cp(e){for(var o,n=e.length,t=n%3,a=[],p=16383,m=0,d=n-t;m<d;m+=p)a.push(pp(e,m,m+p>d?d:m+p));return t===1?(o=e[n-1],a.push(z[o>>2]+z[o<<4&63]+"==")):t===2&&(o=(e[n-2]<<8)+e[n-1],a.push(z[o>>10]+z[o>>4&63]+z[o<<2&63]+"=")),a.join("")}});var yt=co(an=>{r();an.read=function(e,o,n,t,a){var p,m,d=a*8-t-1,l=(1<<d)-1,g=l>>1,x=-7,T=n?a-1:0,y=n?-1:1,k=e[o+T];for(T+=y,p=k&(1<<-x)-1,k>>=-x,x+=d;x>0;p=p*256+e[o+T],T+=y,x-=8);for(m=p&(1<<-x)-1,p>>=-x,x+=t;x>0;m=m*256+e[o+T],T+=y,x-=8);if(p===0)p=1-g;else{if(p===l)return m?NaN:(k?-1:1)*(1/0);m=m+Math.pow(2,t),p=p-g}return(k?-1:1)*m*Math.pow(2,p-t)};an.write=function(e,o,n,t,a,p){var m,d,l,g=p*8-a-1,x=(1<<g)-1,T=x>>1,y=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=t?0:p-1,I=t?1:-1,O=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=x):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+T>=1?o+=y/l:o+=y*Math.pow(2,1-T),o*l>=2&&(m++,l/=2),m+T>=x?(d=0,m=x):m+T>=1?(d=(o*l-1)*Math.pow(2,a),m=m+T):(d=o*Math.pow(2,T-1)*Math.pow(2,a),m=0));a>=8;e[n+k]=d&255,k+=I,d/=256,a-=8);for(m=m<<a|d,g+=a;g>0;e[n+k]=m&255,k+=I,m/=256,g-=8);e[n+k-I]|=O*128}});var Dt=co(ve=>{"use strict";r();var pn=Tt(),ke=yt(),bt=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ve.Buffer=_;ve.SlowBuffer=up;ve.INSPECT_MAX_BYTES=50;var mo=2147483647;ve.kMaxLength=mo;_.TYPED_ARRAY_SUPPORT=sp();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function sp(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function oe(e){if(e>mo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _n(e)}return kt(e,o,n)}_.poolSize=8192;function kt(e,o,n){if(typeof e=="string")return _p(e,o);if(ArrayBuffer.isView(e))return dp(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(q(e,ArrayBuffer)||e&&q(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(q(e,SharedArrayBuffer)||e&&q(e.buffer,SharedArrayBuffer)))return sn(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=e.valueOf&&e.valueOf();if(t!=null&&t!==e)return _.from(t,o,n);var a=lp(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,n){return kt(e,o,n)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function vt(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function mp(e,o,n){return vt(e),e<=0?oe(e):o!==void 0?typeof n=="string"?oe(e).fill(o,n):oe(e).fill(o):oe(e)}_.alloc=function(e,o,n){return mp(e,o,n)};function _n(e){return vt(e),oe(e<0?0:dn(e)|0)}_.allocUnsafe=function(e){return _n(e)};_.allocUnsafeSlow=function(e){return _n(e)};function _p(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=At(e,o)|0,t=oe(n),a=t.write(e,o);return a!==n&&(t=t.slice(0,a)),t}function cn(e){for(var o=e.length<0?0:dn(e.length)|0,n=oe(o),t=0;t<o;t+=1)n[t]=e[t]&255;return n}function dp(e){if(q(e,Uint8Array)){var o=new Uint8Array(e);return sn(o.buffer,o.byteOffset,o.byteLength)}return cn(e)}function sn(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var t;return o===void 0&&n===void 0?t=new Uint8Array(e):n===void 0?t=new Uint8Array(e,o):t=new Uint8Array(e,o,n),Object.setPrototypeOf(t,_.prototype),t}function lp(e){if(_.isBuffer(e)){var o=dn(e.length)|0,n=oe(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||ln(e.length)?oe(0):cn(e);if(e.type==="Buffer"&&Array.isArray(e.data))return cn(e.data)}function dn(e){if(e>=mo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+mo.toString(16)+" bytes");return e|0}function up(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,n){if(q(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),q(n,Uint8Array)&&(n=_.from(n,n.offset,n.byteLength)),!_.isBuffer(o)||!_.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var t=o.length,a=n.length,p=0,m=Math.min(t,a);p<m;++p)if(o[p]!==n[p]){t=o[p],a=n[p];break}return t<a?-1:a<t?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var t;if(n===void 0)for(n=0,t=0;t<o.length;++t)n+=o[t].length;var a=_.allocUnsafe(n),p=0;for(t=0;t<o.length;++t){var m=o[t];if(q(m,Uint8Array))p+m.length>a.length?_.from(m).copy(a,p):Uint8Array.prototype.set.call(a,m,p);else if(_.isBuffer(m))m.copy(a,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return a};function At(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||q(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&n===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return mn(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Rt(e).length;default:if(a)return t?-1:mn(e).length;o=(""+o).toLowerCase(),a=!0}}_.byteLength=At;function gp(e,o,n){var t=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return vp(this,o,n);case"utf8":case"utf-8":return Lt(this,o,n);case"ascii":return Sp(this,o,n);case"latin1":case"binary":return kp(this,o,n);case"base64":return bp(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ap(this,o,n);default:if(t)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),t=!0}}_.prototype._isBuffer=!0;function fe(e,o,n){var t=e[o];e[o]=e[n],e[n]=t}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)fe(this,n,n+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)fe(this,n,n+3),fe(this,n+1,n+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)fe(this,n,n+7),fe(this,n+1,n+6),fe(this,n+2,n+5),fe(this,n+3,n+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Lt(this,0,o):gp.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",n=ve.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};bt&&(_.prototype[bt]=_.prototype.inspect);_.prototype.compare=function(o,n,t,a,p){if(q(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),t===void 0&&(t=o?o.length:0),a===void 0&&(a=0),p===void 0&&(p=this.length),n<0||t>o.length||a<0||p>this.length)throw new RangeError("out of range index");if(a>=p&&n>=t)return 0;if(a>=p)return-1;if(n>=t)return 1;if(n>>>=0,t>>>=0,a>>>=0,p>>>=0,this===o)return 0;for(var m=p-a,d=t-n,l=Math.min(m,d),g=this.slice(a,p),x=o.slice(n,t),T=0;T<l;++T)if(g[T]!==x[T]){m=g[T],d=x[T];break}return m<d?-1:d<m?1:0};function It(e,o,n,t,a){if(e.length===0)return-1;if(typeof n=="string"?(t=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,ln(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1;n=e.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof o=="string"&&(o=_.from(o,t)),_.isBuffer(o))return o.length===0?-1:wt(e,o,n,t,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):wt(e,[o],n,t,a);throw new TypeError("val must be string, number or Buffer")}function wt(e,o,n,t,a){var p=1,m=e.length,d=o.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(k,I){return p===1?k[I]:k.readUInt16BE(I*p)}var g;if(a){var x=-1;for(g=n;g<m;g++)if(l(e,g)===l(o,x===-1?0:g-x)){if(x===-1&&(x=g),g-x+1===d)return x*p}else x!==-1&&(g-=g-x),x=-1}else for(n+d>m&&(n=m-d),g=n;g>=0;g--){for(var T=!0,y=0;y<d;y++)if(l(e,g+y)!==l(o,y)){T=!1;break}if(T)return g}return-1}_.prototype.includes=function(o,n,t){return this.indexOf(o,n,t)!==-1};_.prototype.indexOf=function(o,n,t){return It(this,o,n,t,!0)};_.prototype.lastIndexOf=function(o,n,t){return It(this,o,n,t,!1)};function fp(e,o,n,t){n=Number(n)||0;var a=e.length-n;t?(t=Number(t),t>a&&(t=a)):t=a;var p=o.length;t>p/2&&(t=p/2);for(var m=0;m<t;++m){var d=parseInt(o.substr(m*2,2),16);if(ln(d))return m;e[n+m]=d}return m}function hp(e,o,n,t){return _o(mn(o,e.length-n),e,n,t)}function xp(e,o,n,t){return _o(Ep(o),e,n,t)}function Tp(e,o,n,t){return _o(Rt(o),e,n,t)}function yp(e,o,n,t){return _o(Np(o,e.length-n),e,n,t)}_.prototype.write=function(o,n,t,a){if(n===void 0)a="utf8",t=this.length,n=0;else if(t===void 0&&typeof n=="string")a=n,t=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(t)?(t=t>>>0,a===void 0&&(a="utf8")):(a=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((t===void 0||t>p)&&(t=p),o.length>0&&(t<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var m=!1;;)switch(a){case"hex":return fp(this,o,n,t);case"utf8":case"utf-8":return hp(this,o,n,t);case"ascii":case"latin1":case"binary":return xp(this,o,n,t);case"base64":return Tp(this,o,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yp(this,o,n,t);default:if(m)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function bp(e,o,n){return o===0&&n===e.length?pn.fromByteArray(e):pn.fromByteArray(e.slice(o,n))}function Lt(e,o,n){n=Math.min(e.length,n);for(var t=[],a=o;a<n;){var p=e[a],m=null,d=p>239?4:p>223?3:p>191?2:1;if(a+d<=n){var l,g,x,T;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[a+1],(l&192)===128&&(T=(p&31)<<6|l&63,T>127&&(m=T));break;case 3:l=e[a+1],g=e[a+2],(l&192)===128&&(g&192)===128&&(T=(p&15)<<12|(l&63)<<6|g&63,T>2047&&(T<55296||T>57343)&&(m=T));break;case 4:l=e[a+1],g=e[a+2],x=e[a+3],(l&192)===128&&(g&192)===128&&(x&192)===128&&(T=(p&15)<<18|(l&63)<<12|(g&63)<<6|x&63,T>65535&&T<1114112&&(m=T))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,t.push(m>>>10&1023|55296),m=56320|m&1023),t.push(m),a+=d}return wp(t)}var St=4096;function wp(e){var o=e.length;if(o<=St)return String.fromCharCode.apply(String,e);for(var n="",t=0;t<o;)n+=String.fromCharCode.apply(String,e.slice(t,t+=St));return n}function Sp(e,o,n){var t="";n=Math.min(e.length,n);for(var a=o;a<n;++a)t+=String.fromCharCode(e[a]&127);return t}function kp(e,o,n){var t="";n=Math.min(e.length,n);for(var a=o;a<n;++a)t+=String.fromCharCode(e[a]);return t}function vp(e,o,n){var t=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>t)&&(n=t);for(var a="",p=o;p<n;++p)a+=Cp[e[p]];return a}function Ap(e,o,n){for(var t=e.slice(o,n),a="",p=0;p<t.length-1;p+=2)a+=String.fromCharCode(t[p]+t[p+1]*256);return a}_.prototype.slice=function(o,n){var t=this.length;o=~~o,n=n===void 0?t:~~n,o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),n<0?(n+=t,n<0&&(n=0)):n>t&&(n=t),n<o&&(n=o);var a=this.subarray(o,n);return Object.setPrototypeOf(a,_.prototype),a};function E(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,n,t){o=o>>>0,n=n>>>0,t||E(o,n,this.length);for(var a=this[o],p=1,m=0;++m<n&&(p*=256);)a+=this[o+m]*p;return a};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,n,t){o=o>>>0,n=n>>>0,t||E(o,n,this.length);for(var a=this[o+--n],p=1;n>0&&(p*=256);)a+=this[o+--n]*p;return a};_.prototype.readUint8=_.prototype.readUInt8=function(o,n){return o=o>>>0,n||E(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||E(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||E(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||E(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||E(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,n,t){o=o>>>0,n=n>>>0,t||E(o,n,this.length);for(var a=this[o],p=1,m=0;++m<n&&(p*=256);)a+=this[o+m]*p;return p*=128,a>=p&&(a-=Math.pow(2,8*n)),a};_.prototype.readIntBE=function(o,n,t){o=o>>>0,n=n>>>0,t||E(o,n,this.length);for(var a=n,p=1,m=this[o+--a];a>0&&(p*=256);)m+=this[o+--a]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};_.prototype.readInt8=function(o,n){return o=o>>>0,n||E(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,n){o=o>>>0,n||E(o,2,this.length);var t=this[o]|this[o+1]<<8;return t&32768?t|4294901760:t};_.prototype.readInt16BE=function(o,n){o=o>>>0,n||E(o,2,this.length);var t=this[o+1]|this[o]<<8;return t&32768?t|4294901760:t};_.prototype.readInt32LE=function(o,n){return o=o>>>0,n||E(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,n){return o=o>>>0,n||E(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,n){return o=o>>>0,n||E(o,4,this.length),ke.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,n){return o=o>>>0,n||E(o,4,this.length),ke.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||E(o,8,this.length),ke.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||E(o,8,this.length),ke.read(this,o,!1,52,8)};function R(e,o,n,t,a,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<p)throw new RangeError('"value" argument is out of bounds');if(n+t>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,n,t,a){if(o=+o,n=n>>>0,t=t>>>0,!a){var p=Math.pow(2,8*t)-1;R(this,o,n,t,p,0)}var m=1,d=0;for(this[n]=o&255;++d<t&&(m*=256);)this[n+d]=o/m&255;return n+t};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,n,t,a){if(o=+o,n=n>>>0,t=t>>>0,!a){var p=Math.pow(2,8*t)-1;R(this,o,n,t,p,0)}var m=t-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+t};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,1,255,0),this[n]=o&255,n+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};_.prototype.writeIntLE=function(o,n,t,a){if(o=+o,n=n>>>0,!a){var p=Math.pow(2,8*t-1);R(this,o,n,t,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<t&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+t};_.prototype.writeIntBE=function(o,n,t,a){if(o=+o,n=n>>>0,!a){var p=Math.pow(2,8*t-1);R(this,o,n,t,p-1,-p)}var m=t-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+t};_.prototype.writeInt8=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};_.prototype.writeInt16LE=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeInt16BE=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeInt32LE=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};_.prototype.writeInt32BE=function(o,n,t){return o=+o,n=n>>>0,t||R(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function Et(e,o,n,t,a,p){if(n+t>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Nt(e,o,n,t,a){return o=+o,n=n>>>0,a||Et(e,o,n,4,34028234663852886e22,-34028234663852886e22),ke.write(e,o,n,t,23,4),n+4}_.prototype.writeFloatLE=function(o,n,t){return Nt(this,o,n,!0,t)};_.prototype.writeFloatBE=function(o,n,t){return Nt(this,o,n,!1,t)};function Ct(e,o,n,t,a){return o=+o,n=n>>>0,a||Et(e,o,n,8,17976931348623157e292,-17976931348623157e292),ke.write(e,o,n,t,52,8),n+8}_.prototype.writeDoubleLE=function(o,n,t){return Ct(this,o,n,!0,t)};_.prototype.writeDoubleBE=function(o,n,t){return Ct(this,o,n,!1,t)};_.prototype.copy=function(o,n,t,a){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(t||(t=0),!a&&a!==0&&(a=this.length),n>=o.length&&(n=o.length),n||(n=0),a>0&&a<t&&(a=t),a===t||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),o.length-n<a-t&&(a=o.length-n+t);var p=a-t;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,t,a):Uint8Array.prototype.set.call(o,this.subarray(t,a),n),p};_.prototype.fill=function(o,n,t,a){if(typeof o=="string"){if(typeof n=="string"?(a=n,n=0,t=this.length):typeof t=="string"&&(a=t,t=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!_.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(o.length===1){var p=o.charCodeAt(0);(a==="utf8"&&p<128||a==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<t)throw new RangeError("Out of range index");if(t<=n)return this;n=n>>>0,t=t===void 0?this.length:t>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<t;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,a),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<t-n;++m)this[m+n]=d[m%l]}return this};var Ip=/[^+/0-9A-Za-z-_]/g;function Lp(e){if(e=e.split("=")[0],e=e.trim().replace(Ip,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function mn(e,o){o=o||1/0;for(var n,t=e.length,a=null,p=[],m=0;m<t;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!a){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===t){(o-=3)>-1&&p.push(239,191,189);continue}a=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(o-=3)>-1&&p.push(239,191,189);if(a=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function Ep(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function Np(e,o){for(var n,t,a,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),t=n>>8,a=n%256,p.push(a),p.push(t);return p}function Rt(e){return pn.toByteArray(Lp(e))}function _o(e,o,n,t){for(var a=0;a<t&&!(a+n>=o.length||a>=e.length);++a)o[a+n]=e[a];return a}function q(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function ln(e){return e!==e}var Cp=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var t=n*16,a=0;a<16;++a)o[t+a]=e[n]+e[a];return o}()});var Bt=co((Cs,Ft)=>{r();var A=Ft.exports={},K,X;function un(){throw new Error("setTimeout has not been defined")}function gn(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?K=setTimeout:K=un}catch(e){K=un}try{typeof clearTimeout=="function"?X=clearTimeout:X=gn}catch(e){X=gn}})();function Pt(e){if(K===setTimeout)return setTimeout(e,0);if((K===un||!K)&&setTimeout)return K=setTimeout,setTimeout(e,0);try{return K(e,0)}catch(o){try{return K.call(null,e,0)}catch(n){return K.call(this,e,0)}}}function Rp(e){if(X===clearTimeout)return clearTimeout(e);if((X===gn||!X)&&clearTimeout)return X=clearTimeout,clearTimeout(e);try{return X(e)}catch(o){try{return X.call(null,e)}catch(n){return X.call(this,e)}}}var ne=[],Ae=!1,he,lo=-1;function Dp(){!Ae||!he||(Ae=!1,he.length?ne=he.concat(ne):lo=-1,ne.length&&Ot())}function Ot(){if(!Ae){var e=Pt(Dp);Ae=!0;for(var o=ne.length;o;){for(he=ne,ne=[];++lo<o;)he&&he[lo].run();lo=-1,o=ne.length}he=null,Ae=!1,Rp(e)}}A.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];ne.push(new Mt(e,o)),ne.length===1&&!Ae&&Pt(Ot)};function Mt(e,o){this.fun=e,this.array=o}Mt.prototype.run=function(){this.fun.apply(null,this.array)};A.title="browser";A.browser=!0;A.env={};A.argv=[];A.version="";A.versions={};function te(){}A.on=te;A.addListener=te;A.once=te;A.off=te;A.removeListener=te;A.removeAllListeners=te;A.emit=te;A.prependListener=te;A.prependOnceListener=te;A.listeners=function(e){return[]};A.binding=function(e){throw new Error("process.binding is not supported")};A.cwd=function(){return"/"};A.chdir=function(e){throw new Error("process.chdir is not supported")};A.umask=function(){return 0}});var i,c,Rs,r=u(()=>{i=b(Dt()),c=b(Bt()),Rs=function(e){function o(){var t=this||self;return delete e.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object)});var Ut=u(()=>{"use strict";r()});var Wt=u(()=>{"use strict";r()});var Vt=u(()=>{"use strict";r()});var fn,Gt=u(()=>{"use strict";r();fn=(t=>(t.SetGuardian="SetGuardian",t.GuardAccount="GuardAccount",t.UnGuardAccount="UnGuardAccount",t))(fn||{})});var $t=u(()=>{"use strict";r()});var hn=u(()=>{"use strict";r()});var Ht=u(()=>{"use strict";r()});var jt=u(()=>{"use strict";r()});var zt=u(()=>{"use strict";r()});var qt=u(()=>{"use strict";r()});var Pp,Ie,Kt=u(()=>{"use strict";r();Pp=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Ie=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Xt,Hs,Yt,js,re=u(()=>{"use strict";r();Kt();Xt=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(Xt||{}),Hs=f(f({},Ie.WindowProviderRequestEnums),Xt),Yt=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Yt||{}),js=f(f({},Ie.WindowProviderResponseEnums),Yt)});var Zt=u(()=>{"use strict";r()});var Jt=u(()=>{"use strict";r()});var xn,D=u(()=>{"use strict";r();xn=(t=>(t.nft="nft",t.esdt="esdt",t.egld="egld",t))(xn||{})});var Qt=u(()=>{"use strict";r()});var er=u(()=>{"use strict";r()});var or=u(()=>{"use strict";r()});var V=u(()=>{"use strict";r();jt();zt();qt();re();Zt();Jt();D();Qt();er();or()});var Tn,nr,cm,tr,sm,rr,mm,_m,dm,ar=u(()=>{"use strict";r();V();Tn={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:nr,egldLabel:cm}=Tn["devnet"],{chainId:tr,egldLabel:sm}=Tn["testnet"],{chainId:rr,egldLabel:mm}=Tn["mainnet"],_m={["devnet"]:nr,["testnet"]:tr,["mainnet"]:rr},dm={[nr]:"devnet",[tr]:"testnet",[rr]:"mainnet"}});var yn=u(()=>{"use strict";r()});var Y,ir=u(()=>{"use strict";r();Y=require("@multiversx/sdk-web-wallet-provider")});var uo,bn=u(()=>{"use strict";r();uo=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var pr,cr,wn,xm,Tm,sr=u(()=>{"use strict";r();bn();wn=String((cr=(pr=uo.safeWindow)==null?void 0:pr.navigator)==null?void 0:cr.userAgent),xm=/^((?!chrome|android).)*safari/i.test(wn),Tm=/firefox/i.test(wn)&&/windows/i.test(wn)});var Sn,kn,N,xe,mr,go,_r,Z,S=u(()=>{"use strict";r();Ut();Wt();Vt();Gt();$t();hn();Ht();ar();yn();ir();sr();Sn=5e4,kn=1e9,N=18,xe=4,mr=1,go="logout",_r="login",Z="0"});var Le,Ue=u(()=>{"use strict";r();Le=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var vn={};M(vn,{css:()=>lr,default:()=>Op});var lr,Op,An=u(()=>{"use strict";r();lr=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(lr));Op={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var fo,Ln=u(()=>{"use strict";r();fo=()=>Date.now()/1e3});var fr=u(()=>{"use strict";r()});var hr=u(()=>{"use strict";r()});var xr=u(()=>{"use strict";r();Ln();fr();hr()});var En={};M(En,{clear:()=>Vp,getItem:()=>Up,localStorageKeys:()=>Te,removeItem:()=>Wp,setItem:()=>Bp});var Te,ho,Bp,Up,Wp,Vp,Ge=u(()=>{"use strict";r();xr();Te={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},ho=typeof localStorage!="undefined",Bp=({key:e,data:o,expires:n})=>{!ho||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Up=e=>{if(!ho)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:fo()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},Wp=e=>{!ho||localStorage.removeItem(String(e))},Vp=()=>{!ho||localStorage.clear()}});var Nn={};M(Nn,{clear:()=>wr,getItem:()=>yr,removeItem:()=>br,setItem:()=>Tr,storage:()=>Gp});var Tr,yr,br,wr,Gp,Sr=u(()=>{"use strict";r();Tr=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},yr=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},br=e=>sessionStorage.removeItem(String(e)),wr=()=>sessionStorage.clear(),Gp={setItem:Tr,getItem:yr,removeItem:br,clear:wr}});var Ee,xo=u(()=>{"use strict";r();Ge();Sr();Ee={session:Nn,local:En}});var Cn,L,To,G=u(()=>{"use strict";r();Cn=require("@reduxjs/toolkit");S();L=(0,Cn.createAction)(go),To=(0,Cn.createAction)(_r,e=>({payload:e}))});var Dn,kr,vr,yo,Rn,Ar,Ir,a_,Lr,i_,p_,c_,s_,m_,__,d_,l_,bo,wo=u(()=>{"use strict";r();Dn=require("@multiversx/sdk-core"),kr=require("@reduxjs/toolkit"),vr=require("redux-persist");S();xo();Ge();G();yo={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Z},Rn={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":yo},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ar=(0,kr.createSlice)({name:"accountInfoSlice",initialState:Rn,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Dn.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:yo},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(L,()=>(Ee.local.removeItem(Te.loginExpiresAt),Rn)),e.addCase(To,(o,n)=>{let{address:t}=n.payload;o.address=t,o.publicKey=new Dn.Address(t).hex()}),e.addCase(vr.REHYDRATE,(o,n)=>{var g;if(!((g=n.payload)!=null&&g.account))return;let{account:t}=n.payload,{address:a,shard:p,accounts:m,publicKey:d}=t;o.address=a,o.shard=p;let l=m&&a in m;o.accounts=l?m:Rn.accounts,o.publicKey=d})}}),{setAccount:Ir,setAddress:a_,setAccountNonce:Lr,setAccountShard:i_,setLedgerAccount:p_,updateLedgerAccount:c_,setWalletConnectAccount:s_,setIsAccountLoading:m_,setAccountLoadingError:__,setWebsocketEvent:d_,setWebsocketBatchEvent:l_}=Ar.actions,bo=Ar.reducer});function $e(){return new Date().setHours(new Date().getHours()+24)}function He(e){Ee.local.setItem({key:Te.loginExpiresAt,data:e,expires:e})}var Pn=u(()=>{"use strict";r();xo();Ge()});var Nr,Er,Cr,k_,v_,A_,I_,L_,E_,Rr,N_,C_,R_,So,ko=u(()=>{"use strict";r();Nr=require("@reduxjs/toolkit");Pn();re();G();Er={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Cr=(0,Nr.createSlice)({name:"loginInfoSlice",initialState:Er,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(L,()=>Er),e.addCase(To,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,He($e())})}}),{setLoginMethod:k_,setWalletConnectLogin:v_,setLedgerLogin:A_,setTokenLogin:I_,setTokenLoginSignature:L_,setWalletLogin:E_,invalidateLoginSession:Rr,setLogoutRoute:N_,setIsWalletConnectV2Initialized:C_,setWebviewLogin:R_}=Cr.actions,So=Cr.reducer});var Pr,Dr,Or,M_,F_,B_,U_,vo,Ao=u(()=>{"use strict";r();Pr=require("@reduxjs/toolkit");G();Dr={},Or=(0,Pr.createSlice)({name:"modalsSlice",initialState:Dr,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(L,()=>Dr)}}),{setTxSubmittedModal:M_,setNotificationModal:F_,clearTxSubmittedModal:B_,clearNotificationModal:U_}=Or.actions,vo=Or.reducer});var Ne=u(()=>{"use strict";r();Ue()});var Mr=u(()=>{"use strict";r();Ne()});var Fr=u(()=>{"use strict";r();Io()});var Br=u(()=>{"use strict";r();bn()});var Io=u(()=>{"use strict";r();Mr();Fr();Ne();Br()});var Ur=u(()=>{"use strict";r();Io()});var Wr=u(()=>{"use strict";r();Ur()});function Vr(e){return e[Math.floor(Math.random()*e.length)]}var Gr=u(()=>{"use strict";r()});var $r=u(()=>{"use strict";r();hn()});var Hr=u(()=>{"use strict";r();Wr();Gr();$r()});var jr,zr,qr,On,Hp,Kr,xd,Td,yd,Lo,Eo=u(()=>{"use strict";r();jr=require("@reduxjs/toolkit"),zr=b(require("lodash.omit")),qr=require("redux-persist");yn();G();Hr();On={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Hp={network:On},Kr=(0,jr.createSlice)({name:"appConfig",initialState:Hp,reducers:{initializeNetworkConfig:(e,o)=>{let n=Vr(o.payload.walletConnectV2RelayAddresses),t=(0,zr.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(f(f({},e.network),t),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=f(f({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(L,o=>{o.network.customWalletAddress=void 0}),e.addCase(qr.REHYDRATE,(o,n)=>{var a,p;if(!((p=(a=n.payload)==null?void 0:a.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:t}}=n.payload;o.network.customWalletAddress=t})}}),{initializeNetworkConfig:xd,updateNetworkConfig:Td,setCustomWalletAddress:yd}=Kr.actions,Lo=Kr.reducer});var Xr,Mn,Yr,Ad,Id,Ld,No,Co=u(()=>{"use strict";r();Xr=require("@reduxjs/toolkit");V();G();Mn={isSigning:!1,signedSessions:{}},Yr=(0,Xr.createSlice)({name:"signedMessageInfoSliceState",initialState:Mn,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:t,errorMessage:a}=o.payload;a&&(e.errorMessage=a),e.isSigning=t.status==="pending",e.signedSessions[n]=f(f({},e.signedSessions[n]),t)},setSignSessionState:(e,o)=>f(f({},e),o.payload),clearSignedMessageInfo:()=>Mn},extraReducers:e=>{e.addCase(L,()=>Mn)}}),{setSignSession:Ad,clearSignedMessageInfo:Id,setSignSessionState:Ld}=Yr.actions,No=Yr.reducer});var Jr,Qr,Zr,ea,Od,Md,Fd,Bd,Ro,Do=u(()=>{"use strict";r();Jr=require("@reduxjs/toolkit"),Qr=require("redux-persist");V();Ln();G();Zr={customToasts:[],transactionToasts:[]},ea=(0,Jr.createSlice)({name:"toastsSlice",initialState:Zr,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,t=e.customToasts.findIndex(a=>a.toastId===n);if(t!==-1){e.customToasts[t]=w(f(f({},e.customToasts[t]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(w(f({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:fo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(L,()=>Zr),e.addCase(Qr.REHYDRATE,(o,n)=>{var a,p;let t=(p=(a=n.customToasts)==null?void 0:a.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=t})}}),{addCustomToast:Od,removeCustomToast:Md,addTransactionToast:Fd,removeTransactionToast:Bd}=ea.actions,Ro=ea.reducer});var oa,Bn,Un,Wn,jp,Fn,na,Gd,$d,Hd,Po,Oo=u(()=>{"use strict";r();oa=require("@reduxjs/toolkit");G();Bn="Transaction failed",Un="Transaction successful",Wn="Processing transaction",jp="Transaction submitted",Fn={},na=(0,oa.createSlice)({name:"transactionsInfo",initialState:Fn,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:t}=o.payload;n!=null&&(e[n]={errorMessage:(t==null?void 0:t.errorMessage)||Bn,successMessage:(t==null?void 0:t.successMessage)||Un,processingMessage:(t==null?void 0:t.processingMessage)||Wn,submittedMessage:(t==null?void 0:t.submittedMessage)||jp,transactionDuration:t==null?void 0:t.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Fn},extraReducers:e=>{e.addCase(L,()=>Fn)}}),{clearTransactionsInfo:Gd,setTransactionsDisplayInfo:$d,clearTransactionsInfoForSessionId:Hd}=na.actions,Po=na.reducer});function ta(e){return e!=null&&(nc(e)||pc(e))}function Mo(e){return e!=null&&(tc(e)||cc(e))}function Fo(e){return e!=null&&(rc(e)||sc(e))}function ra(e){return e!=null&&(ac(e)||mc(e))}function aa(e){return e!=null&&ic(e)}function nc(e){return e!=null&&qp.includes(e)}function tc(e){return e!=null&&Kp.includes(e)}function rc(e){return e!=null&&Xp.includes(e)}function ac(e){return e!=null&&Yp.includes(e)}function ic(e){return e!=null&&Zp.includes(e)}function pc(e){return e!=null&&Jp.includes(e)}function cc(e){return e!=null&&Qp.includes(e)}function sc(e){return e!=null&&ec.includes(e)}function mc(e){return e!=null&&oc.includes(e)}var qp,Kp,Xp,Yp,Zp,Jp,Qp,ec,oc,Gn=u(()=>{"use strict";r();re();qp=["sent"],Kp=["success"],Xp=["fail","cancelled","timedOut"],Yp=["invalid"],Zp=["timedOut"],Jp=["pending"],Qp=["success"],ec=["fail","invalid"],oc=["not executed"]});var ia,pa,ze,_c,ca,Qd,el,ol,nl,tl,rl,al,il,pl,cl,sl,Bo,Uo=u(()=>{"use strict";r();ia=require("@reduxjs/toolkit"),pa=require("redux-persist");re();Gn();G();ze={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},_c={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ca=(0,ia.createSlice)({name:"transactionsSlice",initialState:ze,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,g;let{sessionId:n,transactions:t,errorMessage:a,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=f(f(f({},_c),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:t,status:p,errorMessage:a,redirectRoute:m,customTransactionInformation:f(f({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===n&&(e.transactionsToSign=ze.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=f(f({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:t,errorMessage:a,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=t,a!=null&&(e.signedTransactions[n].errorMessage=a),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,x,T,y,k,I,O,j;let{sessionId:n,status:t,errorMessage:a,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(x=(g=e.signedTransactions)==null?void 0:g[n])==null?void 0:x.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(v=>v.hash===p?w(f(f({},m!=null?m:{}),v),{status:t,errorMessage:a,inTransit:d}):v);let Fe=(y=(T=e.signedTransactions[n])==null?void 0:T.transactions)==null?void 0:y.every(v=>Mo(v.status)),Se=(I=(k=e.signedTransactions[n])==null?void 0:k.transactions)==null?void 0:I.some(v=>Fo(v.status)),ue=(j=(O=e.signedTransactions[n])==null?void 0:O.transactions)==null?void 0:j.every(v=>ra(v.status));Fe&&(e.signedTransactions[n].status="success"),Se&&(e.signedTransactions[n].status="fail"),ue&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:t}=o.payload;e.customTransactionInformationForSessionId[n]=t,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=ze.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=ze.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:t}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=f(f({},e.signedTransactions[n].customTransactionInformation),t))}},extraReducers:e=>{e.addCase(L,()=>ze),e.addCase(pa.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:t,customTransactionInformationForSessionId:a}=n.payload.transactions,p=Object.entries(t).reduce((d,[l,g])=>{let x=new Date(l),T=new Date;return T.setHours(T.getHours()+5),T-x>0||(d[l]=g),d},{});a!=null&&(o.customTransactionInformationForSessionId=a),t!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Qd,updateSignedTransactions:el,setTransactionsToSign:ol,clearAllTransactionsToSign:nl,clearAllSignedTransactions:tl,clearSignedTransaction:rl,clearTransactionToSign:al,setSignTransactionsError:il,setSignTransactionsCancelMessage:pl,moveTransactionsToSignedState:cl,updateSignedTransactionsCustomTransactionInformation:sl}=ca.actions,Bo=ca.reducer});var sa,$n,ma,ll,ul,gl,fl,Wo,Vo=u(()=>{"use strict";r();sa=require("@reduxjs/toolkit");G();$n={},ma=(0,sa.createSlice)({name:"batchTransactionsSlice",initialState:$n,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>$n},extraReducers:e=>{e.addCase(L,()=>$n)}}),{setBatchTransactions:ll,updateBatchTransactions:ul,clearBatchTransactions:gl,clearAllBatchTransactions:fl}=ma.actions,Wo=ma.reducer});var da,_a,la,yl,ua,Hn=u(()=>{"use strict";r();da=require("@reduxjs/toolkit");G();_a={},la=(0,da.createSlice)({name:"dappConfigSlice",initialState:_a,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(L,()=>_a)}}),{setDappConfig:yl}=la.actions,ua=la.reducer});var Ce=u(()=>{"use strict";r();wo();ko();Ao();Eo();Co();Do();Oo();Uo();Vo();Hn()});var Xn=u(()=>{"use strict";r()});var va,Tc,yc,ye,Ko=u(()=>{"use strict";r();va=require("@reduxjs/toolkit");Xn();wo();Vo();Hn();ko();Ao();Eo();Co();Do();Oo();Uo();Tc={["account"]:bo,["dappConfig"]:ua,["loginInfo"]:So,["modals"]:vo,["networkConfig"]:Lo,["signedMessageInfo"]:No,["toasts"]:Ro,["transactionsInfo"]:Po,["transactions"]:Bo,["batchTransactions"]:Wo},yc=(e={})=>(0,va.combineReducers)(f(f({},Tc),e)),ye=yc});var Ea={};M(Ea,{default:()=>Mc,sessionStorageReducers:()=>Yn});function ie(e,o=[]){return{key:e,version:1,storage:Ia.default,blacklist:o}}var P,Aa,Ia,bc,Ke,wc,Sc,kc,vc,Ac,Ic,Lc,Ec,Nc,Cc,La,Rc,Yn,Dc,Pc,Oc,Mc,Na=u(()=>{"use strict";r();P=require("redux-persist"),Aa=b(require("redux-persist/lib/storage")),Ia=b(require("redux-persist/lib/storage/session"));Ko();Ce();wo();Vo();ko();Ao();Eo();Co();Do();Oo();Uo();Xn();bc={persistReducersStorageType:"localStorage"},Ke={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},wc=ie(Ke["account"]),Sc=ie(Ke["loginInfo"]),kc=ie(Ke["modals"]),vc=ie(Ke["networkConfig"]),Ac={2:e=>w(f({},e),{networkConfig:On})};Ic=ie("sdk-dapp-transactionsInfo"),Lc=ie("sdk-dapp-transactions",["transactionsToSign"]),Ec=ie("sdk-dapp-batchTransactions",["batchTransactions"]),Nc=ie("sdk-dapp-toasts"),Cc=ie("sdk-dapp-signedMessageInfo"),La={key:"sdk-dapp-store",version:2,storage:Aa.default,whitelist:Object.keys(Ke),migrate:(0,P.createMigrate)(Ac,{debug:!1})},Rc=w(f({},La),{whitelist:[]}),Yn={["toasts"]:(0,P.persistReducer)(Nc,Ro),["transactions"]:(0,P.persistReducer)(Lc,Bo),["transactionsInfo"]:(0,P.persistReducer)(Ic,Po),["batchTransactions"]:(0,P.persistReducer)(Ec,Wo),["signedMessageInfo"]:(0,P.persistReducer)(Cc,No)},Dc=w(f({},Yn),{["account"]:(0,P.persistReducer)(wc,bo),["loginInfo"]:(0,P.persistReducer)(Sc,So),["modals"]:(0,P.persistReducer)(kc,vo),["networkConfig"]:(0,P.persistReducer)(vc,Lo)}),Pc=bc.persistReducersStorageType==="localStorage",Oc=Pc?(0,P.persistReducer)(La,ye(Yn)):(0,P.persistReducer)(Rc,ye(Dc)),Mc=Oc});var Ca={};M(Ca,{default:()=>Fc});var Fc,Ra=u(()=>{"use strict";r();Ko();Fc=ye()});var Da={};M(Da,{default:()=>Uc});var U,Bc,Uc,Pa=u(()=>{"use strict";r();U=require("redux-persist"),Bc=[U.FLUSH,U.REHYDRATE,U.PAUSE,U.PERSIST,U.PURGE,U.REGISTER],Uc=Bc});var Fa={};M(Fa,{default:()=>Ma});function Ma(e){return(0,Oa.persistStore)(e)}var Oa,Ba=u(()=>{"use strict";r();Oa=require("redux-persist")});var at={};M(at,{css:()=>Li,default:()=>ss});var Li,ss,it=u(()=>{"use strict";r();Li=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Li));ss={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var st={};M(st,{css:()=>Di,default:()=>gs});var Di,gs,mt=u(()=>{"use strict";r();Di=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Di));gs={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Qe={};M(Qe,{css:()=>Fi,default:()=>hs});var Fi,hs,eo=u(()=>{"use strict";r();Fi=`.dapp-core-component__styles__transaction-action-collection {
  color: #1f43f4;
  display: inline-flex;
  margin-left: 0;
}
.dapp-core-component__styles__transaction-action-collection:hover {
  text-decoration: none;
}

.dapp-core-component__styles__transaction-action-nft {
  display: contents;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer {
  margin-left: 0;
  color: #1f43f4;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer .dapp-core-component__styles__data {
  margin: 0;
  margin-right: 0.25rem;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fi));hs={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var no={};M(no,{css:()=>Hi,default:()=>ws});var Hi,ws,to=u(()=>{"use strict";r();Hi=`.dapp-core-component__transactionsTable-styles__transactions-table {
  border: none;
  box-shadow: 0 0.75rem 1.875rem 0 rgba(90, 97, 105, 0.05);
  border-radius: 0.75rem;
  color: #000;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__transactions-table-header {
  border-bottom: none;
  border-radius: 0.75rem;
  padding: 1.75rem 2rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__transactions-table-header h6 {
  margin-bottom: 0;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper {
  overflow-x: auto;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table {
  white-space: nowrap;
  max-height: 500px;
  width: 100%;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table tr {
  border-top: 1px solid #e2e2e2;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table th {
  white-space: nowrap;
  padding: 0.75rem;
  background-color: #fbfbfb;
  border: 0;
  vertical-align: middle;
  font-weight: 400;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table th:first-child {
  padding-left: 2rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table td {
  white-space: nowrap;
  width: 0.1%;
  white-space: nowrap;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table td:first-child {
  padding-left: 1.25rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell {
  padding: 0;
  margin: 0.75rem;
  font-variant-numeric: slashed-zero;
  color: #000;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell a {
  color: #1f43f4;
  font-weight: 500;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin {
  margin-left: 0;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=left] span,
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=ellipsis] {
  color: #1f43f4;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-overflow {
  max-width: 9rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-link {
  position: relative;
  text-decoration: none;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-font-small {
  font-size: 0.75rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hi));ws={"transactions-table":"dapp-core-component__transactionsTable-styles__transactions-table",transactionsTable:"dapp-core-component__transactionsTable-styles__transactions-table","transactions-table-header":"dapp-core-component__transactionsTable-styles__transactions-table-header",transactionsTableHeader:"dapp-core-component__transactionsTable-styles__transactions-table-header","table-wrapper":"dapp-core-component__transactionsTable-styles__table-wrapper",tableWrapper:"dapp-core-component__transactionsTable-styles__table-wrapper",table:"dapp-core-component__transactionsTable-styles__table","transaction-cell":"dapp-core-component__transactionsTable-styles__transaction-cell",transactionCell:"dapp-core-component__transactionsTable-styles__transaction-cell","transaction-cell-margin":"dapp-core-component__transactionsTable-styles__transaction-cell-margin",transactionCellMargin:"dapp-core-component__transactionsTable-styles__transaction-cell-margin","transaction-cell-overflow":"dapp-core-component__transactionsTable-styles__transaction-cell-overflow",transactionCellOverflow:"dapp-core-component__transactionsTable-styles__transaction-cell-overflow","transaction-cell-link":"dapp-core-component__transactionsTable-styles__transaction-cell-link",transactionCellLink:"dapp-core-component__transactionsTable-styles__transaction-cell-link","transaction-cell-font-small":"dapp-core-component__transactionsTable-styles__transaction-cell-font-small",transactionCellFontSmall:"dapp-core-component__transactionsTable-styles__transaction-cell-font-small"}});var As={};M(As,{TransactionValue:()=>vs});module.exports=F(As);r();r();var H=b(require("react")),zi=require("@fortawesome/free-solid-svg-icons"),qi=require("@fortawesome/react-fontawesome"),lt=b(require("classnames"));S();r();var gr=b(require("react"));r();var We=b(require("react"));r();Ue();var dr=()=>!Le();var Mp=()=>tn(void 0,null,function*(){return yield Promise.resolve().then(()=>(An(),vn))}),Fp=()=>(An(),F(vn)).default,In=dr();function ur({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[t,a]=We.default.useState(In?void 0:Fp()),[p,m]=We.default.useState(In||n==null?void 0:n()),d=()=>tn(this,null,function*(){(e?e():Mp()).then(l=>a(l.default)),o==null||o().then(l=>m(l.default))});return(0,We.useEffect)(()=>{In&&d()},[]),{globalStyles:t,styles:p}}function C(e,o){return n=>{let{globalStyles:t,styles:a}=ur({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return gr.default.createElement(e,w(f({},n),{globalStyles:t!=null?t:{},styles:a!=null?a:{}}))}}r();var Ve=(t=>(t.NonFungibleESDT="NonFungibleESDT",t.SemiFungibleESDT="SemiFungibleESDT",t.MetaESDT="MetaESDT",t))(Ve||{});r();r();var le=b(require("react")),Ei=b(require("classnames"));S();r();r();r();Ce();r();var ga=b(require("lodash.isequal")),Go=require("reselect"),h=(0,Go.createSelectorCreator)(Go.defaultMemoize,ga.default);var J=e=>e.account,jn=h(J,e=>e.address),zn=h(J,jn,(e,o)=>o in e.accounts?e.accounts[o]:yo),Ml=h(J,zn,(e,o)=>{let a=e,{accounts:n}=a,t=po(a,["accounts"]);return w(f({},t),{address:o.address,account:o})}),Fl=h(zn,e=>e.balance),Bl=h(zn,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Ul=h(J,e=>e.shard),Wl=h(J,e=>e.ledgerAccount),Vl=h(J,e=>e.walletConnectAccount),Gl=h(J,e=>e.isAccountLoading),$l=h(J,e=>e.accountLoadingError),Hl=h(J,e=>e.websocketEvent),jl=h(J,e=>e.websocketBatchEvent);r();var dc=e=>e.dappConfig,Kl=h(dc,e=>e.shouldUseWebViewProvider);r();var ae=e=>e.loginInfo,Jl=h(ae,e=>e.loginMethod),Ql=h(ae,jn,(e,o)=>Boolean(o)),eu=h(ae,e=>e.walletConnectLogin),ou=h(ae,e=>e.ledgerLogin),nu=h(ae,e=>e.walletLogin),tu=h(ae,e=>e.isLoginSessionInvalid),ru=h(ae,e=>e.tokenLogin),au=h(ae,e=>e.logoutRoute),iu=h(ae,e=>e.isWalletConnectV2Initialized);r();var fa=e=>e.modals,su=h(fa,e=>e.txSubmittedModal),mu=h(fa,e=>e.notificationModal);r();var Q=e=>e.networkConfig,lu=h(Q,e=>e.network.chainId),uu=h(Q,e=>e.network.roundDuration),gu=h(Q,e=>e.network.walletConnectBridgeAddress),fu=h(Q,e=>e.network.walletConnectV2RelayAddress),hu=h(Q,e=>e.network.walletConnectV2ProjectId),xu=h(Q,e=>e.network.walletConnectV2Options),Tu=h(Q,e=>e.network.walletConnectDeepLink),qe=h(Q,e=>e.network),yu=h(qe,e=>e.apiAddress),ha=h(qe,e=>e.explorerAddress),bu=h(qe,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),wu=h(qe,e=>e.xAliasAddress),xa=h(qe,e=>e.egldLabel);r();var $o=e=>e.signedMessageInfo,vu=h($o,e=>e.isSigning),Au=h($o,e=>e.errorMessage),Iu=h($o,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),Lu=h($o,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});r();var Ta=e=>e.toasts,Cu=h(Ta,e=>e.customToasts),Ru=h(Ta,e=>e.transactionToasts);r();Ce();var ya={errorMessage:Bn,successMessage:Un,processingMessage:Wn},lc=e=>e.transactionsInfo,Mu=h(lc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||ya);r();r();var ee=require("@multiversx/sdk-core");S();r();var qn=require("@multiversx/sdk-core/out");r();r();function Ho(e){try{let o=atob(e),n=btoa(o),t=i.Buffer.from(e,"base64").toString(),a=i.Buffer.from(t).toString("base64"),p=e===n||n.startsWith(e),m=e===a||a.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function ba(e){return Ho(e)?atob(e):e}r();r();r();r();var wa=e=>{let o=e!=null?e:"";return Ho(o)?qn.TransactionPayload.fromEncoded(o):new qn.TransactionPayload(o)};r();S();var jo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(fn).some(n=>e.startsWith(n)):!1;function Kn(e){var t,a,p;let o=f({},e);jo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new ee.Transaction(f(f(w(f(w(f({value:o.value.valueOf(),data:wa(o.data),nonce:o.nonce.valueOf(),receiver:new ee.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ee.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(t=o.gasLimit.valueOf())!=null?t:Sn,gasPrice:(a=o.gasPrice.valueOf())!=null?a:kn,chainID:o.chainID.valueOf(),version:new ee.TransactionVersion((p=o.version)!=null?p:mr)}),o.options?{options:new ee.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ee.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(i.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(i.Buffer.from(o.signature,"hex")),n}r();r();S();r();r();var Zn=require("@reduxjs/toolkit"),Ga=require("react-redux/lib/utils/Subscription");Ce();r();var Sa=b(require("lodash.throttle"));S();Ce();Pn();xo();Ge();var fc=[go],zo=!1,hc=(0,Sa.default)(()=>{He($e())},5e3),ka=e=>o=>n=>{if(fc.includes(n.type))return o(n);let t=e.getState(),a=Ee.local.getItem(Te.loginExpiresAt);if(!Boolean(t==null?void 0:t.account.address))return o(n);if(a==null)return He($e());let m=Date.now();return a-m<0&&!zo?setTimeout(()=>{zo=!0,e.dispatch(Rr())},1e3):(zo&&(zo=!1),hc()),o(n)};r();r();function qo(){return typeof sessionStorage!="undefined"}var Ua=qo()?(Na(),F(Ea)).default:(Ra(),F(Ca)).default,Wa=qo()?(Pa(),F(Da)).default:[],Va=qo()?(Ba(),F(Fa)).default:e=>e;Ko();var me=(0,Zn.configureStore)({reducer:Ua,middleware:e=>e({serializableCheck:{ignoredActions:[...Wa,Lr.type,Ir.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(ka)}),$a=(0,Ga.createSubscription)(me),jg=Va(me),zg=(0,Zn.configureStore)({reducer:ye});r();r();var Vc=require("@multiversx/sdk-core/out");r();S();r();var ja=require("@multiversx/sdk-core");V();r();var Gc=require("@multiversx/sdk-core");r();r();r();var $c=require("@multiversx/sdk-core"),Hc=b(require("bignumber.js"));re();r();r();r();var _e="accounts";var Ka="blocks",Xa="code",Ya="collections";var Za="contracts";var Ja="identities";var Qa="locked-accounts",ei="logs",oi="miniblocks";var Jn="nfts",ni="nodes",Qn="providers",ti="roles",et="sc-results";var Re="tokens";var be="transactions";var we={shard:e=>`/${Ka}?shard=${e}`,receiverShard:e=>`/${be}?receivershard=${e}`,senderShard:e=>`/${be}?sendershard=${e}`,transactionDetails:e=>`/${be}/${e}`,transactionDetailsScResults:e=>`/${be}/${e}/${et}`,transactionDetailsLogs:e=>`/${be}/${e}/${ei}`,nodeDetails:e=>`/${ni}/${e}`,accountDetails:e=>`/${_e}/${e}`,accountDetailsContractCode:e=>`/${_e}/${e}/${Xa}`,accountDetailsTokens:e=>`/${_e}/${e}/${Re}`,accountDetailsNfts:e=>`/${_e}/${e}/${Jn}`,accountDetailsScResults:e=>`/${_e}/${e}/${et}`,accountDetailsContracts:e=>`/${_e}/${e}/${Za}`,identityDetails:e=>`/${Ja}/${e}`,tokenDetails:e=>`/${Re}/${e}`,tokenDetailsAccounts:e=>`/${Re}/${e}/${_e}`,tokenDetailsLockedAccounts:e=>`/${Re}/${e}/${Qa}`,tokenDetailsRoles:e=>`/${Re}/${e}/${ti}`,collectionDetails:e=>`/${Ya}/${e}`,nftDetails:e=>`/${Jn}/${e}`,providerDetails:e=>`/${Qn}/${e}`,providerDetailsTransactions:e=>`/${Qn}/${e}/${be}`,miniblockDetails:e=>`/${oi}/${e}`};r();var ot=e=>{var o,n,t,a;if(e.action){let p=[(o=e.action.arguments)==null?void 0:o.token,(n=e.action.arguments)==null?void 0:n.token1,(t=e.action.arguments)==null?void 0:t.token2,(a=e.action.arguments)==null?void 0:a.transfers].filter(d=>d!=null);return[].concat(...p)}return[]};r();r();r();D();r();var ri=!1;function qc(e){ri||(console.error(e),ri=!0)}function nt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(n){return o.startsWith("/")||(qc(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}r();D();r();r();r();var Kc=b(require("bignumber.js"));S();r();var pi=require("@multiversx/sdk-core"),de=b(require("bignumber.js"));S();r();var ii=b(require("bignumber.js")),Xe=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let t=new ii.default(n),a=o?0:-1;return t.toString(10)===n&&t.comparedTo(0)>=a};r();function pe(e){return{if:function(o){return o?{then:n=>n instanceof Function?pe(n(e)):pe(n)}:{then:()=>pe(e)}},then:o=>o instanceof Function?pe(o(e)):pe(o),valueOf:function(){return e}}}de.default.config({ROUNDING_MODE:de.default.ROUND_FLOOR});function $({input:e,decimals:o=N,digits:n=xe,showLastNonZeroDecimal:t=!0,showIsLessThanDecimalsLabel:a=!1,addCommas:p=!1}){if(!Xe(e,!1))throw new Error("Invalid input");let m=new de.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),pe(d).then(()=>pi.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let g=new de.default(l);if(g.isZero())return Z;let x=g.toString(10),[T,y]=x.split("."),k=new de.default(y||0),I=pe(0).if(Boolean(y&&t)).then(()=>Math.max(y.length,n)).if(k.isZero()&&!t).then(0).if(Boolean(y&&!t)).then(()=>Math.min(y.length,n)).valueOf(),O=y&&n>=1&&n<=y.length&&k.isGreaterThan(0)&&new de.default(y.substring(0,n)).isZero(),j=g.toFormat(I);return pe(x).if(p).then(j).if(Boolean(O)).then(Se=>{let ue=new de.default(T).isZero(),[v,ro]=Se.split("."),ao=new Array(n-1).fill(0),Ki=[...ao,0].join(""),Xi=[...ao,1].join("");return ue?a?`<${v}.${Xi}`:t?`${v}.${ro}`:v:`${v}.${Ki}`}).if(Boolean(!O&&y)).then(Se=>{let[ue]=Se.split("."),v=y.substring(0,I);if(t){let ro=n-v.length;if(ro>0){let ao=Array(ro).fill(0).join("");return v=`${v}${ao}`,`${ue}.${v}`}return Se}return v?`${ue}.${v}`:ue}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}r();r();r();S();r();r();r();S();r();S();r();var Xc=require("@multiversx/sdk-core");S();r();var Ye=require("@multiversx/sdk-core"),Zc=b(require("bignumber.js"));S();r();r();var Yc=b(require("bignumber.js"));S();r();S();r();var tt={isEsdt:!1,isNft:!1,isEgld:!1};function ci(e){let o=e==null?void 0:e.split("-").length;return o===2?w(f({},tt),{isEsdt:!0}):o===3?w(f({},tt),{isNft:!0}):w(f({},tt),{isEgld:!0})}r();r();r();r();r();S();r();S();function Yo({token:e,noValue:o,showLastNonZeroDecimal:n}){var g;let t=!o&&e.value&&e.type!=="NonFungibleESDT",a=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let m="";t&&a&&(m=a?$({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:n}):Number(e.value).toLocaleString("en"));let d=we.nftDetails(String(e.identifier)),l=e.ticker===e.collection&&(g=e.identifier)!=null?g:e.ticker;return{badgeText:p,tokenFormattedAmount:t?m:null,tokenExplorerLink:d,tokenLinkText:l,token:e,noValue:o,showLastNonZeroDecimal:n}}r();S();function Zo({token:e,noValue:o,showLastNonZeroDecimal:n}){var d;let t=Boolean(!o&&e.value),a=t?$({input:e.value,decimals:(d=e.decimals)!=null?d:N,digits:2,showLastNonZeroDecimal:n,addCommas:!0}):null,p=we.tokenDetails(String(e.token)),m=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:a,showFormattedAmount:t,tokenLinkText:m,token:e,showLastNonZeroDecimal:n}}r();D();var si=["reDelegateRewards","claimRewards","unBond"],mi=["wrapEgld","unwrapEgld"],_i=["unStake"],di=["unDelegate"];r();r();var li=e=>{let o=e.map(t=>{let{isNft:a}=ci(t.type);if(a){let{badgeText:x,tokenFormattedAmount:T,tokenLinkText:y}=Yo({token:t});return`${x!=null?`(${x}) `:""}${T} ${y}`}let{tokenFormattedAmount:p,tokenLinkText:m,token:d}=Zo({token:t}),l=d.collection?d.identifier:d.token;return`${p} ${m} (${l})`});return decodeURI(o.join("%0A"))};r();S();var W=e=>({egldValueData:{value:e,formattedValue:$({input:e}),decimals:N}});r();var gi=b(require("bignumber.js"));var ui=!1;function fi(e){var o;try{let t=ba(e.data).replace(`${(o=e.action)==null?void 0:o.name}@`,""),a=new gi.default(t,16);if(!a.isNaN())return W(a.toString(10))}catch(n){ui||(console.error(`Unable to extract value for txHash: ${e.txHash}`),ui=!0)}return W(e.value)}r();r();D();var rt=e=>{var n,t;return(t=(n=e==null?void 0:e.operations)==null?void 0:n.filter(a=>Object.values(xn).includes(a.type)))!=null?t:[]};var hi=!1,xi=e=>{hi||(console.error(`Operations field missing for txHash: ${e}.
        Unable to compute value field.`),hi=!0)};function Ti(e){try{if(e.operations){let[o]=rt(e);return W(o==null?void 0:o.value)}else xi(e.txHash)}catch(o){xi(e.txHash)}return W(e.value)}r();var bi=b(require("bignumber.js"));var yi=!1;function wi(e){var n,t,a,p,m;return new bi.default((t=(n=e.action)==null?void 0:n.arguments)==null?void 0:t.value).isNaN()?(yi||(console.error(`Unable to interpret ${(m=e.action)==null?void 0:m.name} data for txHash: ${e.txHash}`),yi=!0),W(e.value)):W((p=(a=e.action)==null?void 0:a.arguments)==null?void 0:p.value)}var Si=({transaction:e,hideMultipleBadge:o})=>{var n;if(e.action){if(mi.includes(e.action.name))return W(e.value);if(_i.includes(e.action.name))return fi(e);if(si.includes(e.action.name))return Ti(e);if(di.includes(e.action.name))return wi(e);let t=ot(e);if(t.length){let a=t[0],p=Object.values(Ve).includes(a.type),d=!o&&t.length>1?li(t):"";if(p){let{badgeText:k,tokenFormattedAmount:I,tokenExplorerLink:O,tokenLinkText:j}=Yo({token:a});return{nftValueData:{badgeText:k,tokenFormattedAmount:I,tokenExplorerLink:O,tokenLinkText:j,transactionTokens:t,token:a,value:I!=null?a.value:null,decimals:I!=null?a.decimals:null,titleText:d}}}let{tokenExplorerLink:l,showFormattedAmount:g,tokenFormattedAmount:x,tokenLinkText:T,token:y}=Zo({token:a});return{tokenValueData:{tokenExplorerLink:l,showFormattedAmount:g,tokenFormattedAmount:x,tokenLinkText:T,transactionTokens:t,token:y,value:a.value,decimals:(n=a.decimals)!=null?n:N,titleText:d}}}}return W(e.value)};r();r();r();r();var Jc=b(require("bignumber.js"));V();r();r();r();r();re();r();var os=require("@multiversx/sdk-web-wallet-provider");S();r();var es=b(require("qs"));r();Io();Ue();r();Ue();var BT={search:Le()?window.location.search:"",removeParams:[]};r();r();r();Ne();r();D();r();r();Ne();r();var ns=b(require("linkifyjs"));r();S();r();var ts=b(require("bignumber.js"));r();V();r();r();re();r();re();r();r();r();D();r();D();r();var rs=b(require("bignumber.js"));S();D();r();D();r();var vi=require("react");V();r();r();D();r();r();var as=require("@multiversx/sdk-core/out"),is=b(require("bignumber.js"));D();r();V();r();r();V();var Cy=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];r();var Ai=require("react");V();Ne();r();var cs=require("react");D();var Uy=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Gn();r();var Jo=e=>e.transactions,Je=h(Jo,e=>e.signedTransactions),Eb=h(Jo,e=>e.signTransactionsError),Nb=h(Jo,e=>e.signTransactionsCancelMessage),Qo=e=>o=>Object.entries(o).reduce((n,[t,a])=>(e(a.status)&&(n[t]=a),n),{}),Cb=h(Je,Qo(ta)),Rb=h(Je,Qo(Mo)),Db=h(Je,Qo(Fo)),Pb=h(Je,Qo(aa)),Ob=h(Jo,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(f({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>Kn(n)))||[]})}),Mb=h(Je,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});function Ii(){return xa(me.getState())}var ms=e=>{var n;let o=(n=e.styles)!=null?n:{};return le.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},le.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},_s=(e,o)=>{var k,I,O;let{value:n,showLastNonZeroDecimal:t=!1,showLabel:a=!0}=e,p=e.digits!=null?e.digits:xe,m=e.decimals!=null?e.decimals:N,d=(k=e.styles)!=null?k:{},l=(I=e.globalStyles)!=null?I:{},g=$({input:n,decimals:m,digits:p,showLastNonZeroDecimal:t,addCommas:!0}),x=g.split("."),T=x.length===1,y=g!==Z;if(p>0&&T&&y){let j="";for(let Fe=1;Fe<=p;Fe++)j=j+Z;x.push(j)}return le.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},le.default.createElement("span",{className:d["int-amount"],"data-testid":"formatAmountInt"},x[0]),x.length>1&&le.default.createElement("span",{className:d.decimals,"data-testid":"formatAmountDecimals"},".",x[1]),a&&le.default.createElement("span",{className:(0,Ei.default)(d.symbol,e.token&&l.textMuted),"data-testid":"formatAmountSymbol"},` ${(O=e.token)!=null?O:o}`))},ds=e=>{let{value:o}=e;return Xe(o)?_s(e,e.egldLabel||""):ms(e)},ls=e=>{let o=e.egldLabel||Ii(),n=w(f({},e),{egldLabel:o});return le.default.createElement(ds,f({},n))},De=C(ls,{ssrStyles:()=>Promise.resolve().then(()=>(it(),at)),clientStyles:()=>(it(),F(at)).default});r();r();r();var oo=b(require("react")),en=b(require("classnames"));r();var _t=b(require("react")),Pi=require("@fortawesome/free-solid-svg-icons"),Oi=require("@fortawesome/react-fontawesome"),Mi=b(require("classnames"));r();r();var Ni=require("react"),Pe=require("react-redux");var us={store:me,subscription:$a},ct=(0,Ni.createContext)(us),sw=(0,Pe.createStoreHook)(ct),mw=(0,Pe.createDispatchHook)(ct),Ci=(0,Pe.createSelectorHook)(ct);var Ri=()=>Ci(Q);var fs=l=>{var g=l,{page:e,text:o,className:n="dapp-explorer-link",children:t,globalStyles:a,customExplorerIcon:p,styles:m}=g,d=po(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:x}}=Ri(),T=o!=null?o:_t.default.createElement(Oi.FontAwesomeIcon,{icon:p!=null?p:Pi.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),y=nt({explorerAddress:String(x),to:e});return _t.default.createElement("a",f({href:y,target:"_blank",className:(0,Mi.default)(m==null?void 0:m.link,a==null?void 0:a.ml2,n),rel:"noreferrer"},d),t!=null?t:T)},Oe=C(fs,{ssrStyles:()=>Promise.resolve().then(()=>(mt(),st)),clientStyles:()=>(mt(),F(st)).default});var xs=({token:e,globalStyles:o,styles:n})=>e.collection?oo.default.createElement(Oe,{page:we.collectionDetails(e.collection),className:(0,en.default)(n==null?void 0:n.transactionActionCollection)},oo.default.createElement("div",{className:(0,en.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter)},e.svgUrl&&oo.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,en.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1)}),oo.default.createElement("span",null,e.ticker))):null,Bi=C(xs,{ssrStyles:()=>Promise.resolve().then(()=>(eo(),Qe)),clientStyles:()=>(eo(),F(Qe)).default});r();var ce=b(require("react")),Me=b(require("classnames"));S();r();r();var Ui=b(require("react")),Wi=b(require("classnames"));var Ts=({text:e,className:o,"data-testid":n="nftBadge",globalStyles:t})=>Ui.default.createElement("div",{"data-testid":n,className:(0,Wi.default)(t==null?void 0:t.badge,t==null?void 0:t.badgeSecondary,t==null?void 0:t.badgePill,t==null?void 0:t.fontWeightLight,o)},e),Vi=C(Ts,{});var ys=({badgeText:e,tokenFormattedAmount:o,tokenExplorerLink:n,tokenLinkText:t,token:a,showLastNonZeroDecimal:p,globalStyles:m,styles:d})=>{var l,g,x,T,y;return a.identifier?ce.default.createElement("div",{className:d==null?void 0:d.transactionActionNft},e!=null&&ce.default.createElement(Vi,{text:e,className:(0,Me.default)(m==null?void 0:m.mr1,m==null?void 0:m.myAuto)}),o!=null&&ce.default.createElement("div",{className:(0,Me.default)(m==null?void 0:m.mr1,{[(l=m==null?void 0:m.textTruncate)!=null?l:""]:a.svgUrl})},ce.default.createElement(De,{value:a.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:a.decimals,"data-testid":"nftFormattedAmount"})),ce.default.createElement(Oe,{page:n,"data-testid":"nftExplorerLink",className:(0,Me.default)(d==null?void 0:d.explorer,{[(g=m==null?void 0:m.sideLink)!=null?g:""]:a.svgUrl,[(x=m==null?void 0:m.dFlex)!=null?x:""]:a.svgUrl,[(T=m==null?void 0:m.textTruncate)!=null?T:""]:!a.svgUrl})},ce.default.createElement("div",{className:d==null?void 0:d.data},a.svgUrl&&ce.default.createElement("img",{src:a.svgUrl,alt:a.name,className:(0,Me.default)(m==null?void 0:m.sideIcon,m==null?void 0:m.mr1)}),ce.default.createElement("span",{className:(0,Me.default)({[(y=d==null?void 0:d.truncate)!=null?y:""]:a.ticker===a.collection})},t)))):null},Gi=C(ys,{ssrStyles:()=>Promise.resolve().then(()=>(eo(),Qe)),clientStyles:()=>(eo(),F(Qe)).default});r();var se=b(require("react")),on=b(require("classnames"));S();var bs=({tokenExplorerLink:e,showFormattedAmount:o,tokenLinkText:n,token:t,showLastNonZeroDecimal:a,globalStyles:p})=>{var m,d;return t.token?se.default.createElement(se.default.Fragment,null,o&&se.default.createElement("div",{className:p==null?void 0:p.textTruncate},se.default.createElement(De,{value:t.value,digits:2,showLabel:!1,decimals:(m=t.decimals)!=null?m:N,showLastNonZeroDecimal:a,"data-testid":"tokenFormattedAmount"})),se.default.createElement(Oe,{page:e,"data-testid":"tokenExplorerLink",className:(0,on.default)(p==null?void 0:p.dFlex,{[(d=p==null?void 0:p.sideLink)!=null?d:""]:t.svgUrl})},se.default.createElement("div",{className:(0,on.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},t.svgUrl&&se.default.createElement("img",{src:t.svgUrl,alt:t.name,className:(0,on.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),se.default.createElement("span",null,n)))):null},$i=C(bs,{});var dt={Collection:Bi,Nft:Gi,Token:$i};var Ss=({children:e,titleText:o,globalStyles:n})=>H.default.createElement("div",{className:(0,lt.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter),"data-testid":"transactionValue"},e,o&&H.default.createElement(qi.FontAwesomeIcon,{icon:zi.faLayerGroup,"data-testid":"transactionValueIcon",className:(0,lt.default)(n==null?void 0:n.ml2,n==null?void 0:n.textSecondary),title:o})),ji=C(Ss,{ssrStyles:()=>Promise.resolve().then(()=>(to(),no)),clientStyles:()=>(to(),F(no)).default}),ks=({transaction:e,hideMultipleBadge:o,styles:n})=>{let{egldValueData:t,tokenValueData:a,nftValueData:p}=Si({transaction:e,hideMultipleBadge:o});if(a)return H.default.createElement("div",{className:n==null?void 0:n.transactionCell},H.default.createElement(ji,{titleText:a.titleText},H.default.createElement(dt.Token,f({},a))));if(p){let d=p.token.type==="MetaESDT"?null:p.badgeText;return H.default.createElement("div",{className:n==null?void 0:n.transactionCell},H.default.createElement(ji,{titleText:p.titleText},H.default.createElement(dt.Nft,w(f({},p),{badgeText:d}))))}return t?H.default.createElement("div",{className:n==null?void 0:n.transactionCell},H.default.createElement(De,{value:t.value,digits:2,"data-testid":"transactionValue"})):null},vs=C(ks,{ssrStyles:()=>Promise.resolve().then(()=>(to(),no)),clientStyles:()=>(to(),F(no)).default});0&&(module.exports={TransactionValue});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
