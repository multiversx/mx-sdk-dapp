"use strict";var yu=Object.create;var Mn=Object.defineProperty,Su=Object.defineProperties,bu=Object.getOwnPropertyDescriptor,wu=Object.getOwnPropertyDescriptors,vu=Object.getOwnPropertyNames,St=Object.getOwnPropertySymbols,Iu=Object.getPrototypeOf,Jr=Object.prototype.hasOwnProperty,os=Object.prototype.propertyIsEnumerable;var es=(e,o,n)=>o in e?Mn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,h=(e,o)=>{for(var n in o||(o={}))Jr.call(o,n)&&es(e,n,o[n]);if(St)for(var n of St(o))os.call(o,n)&&es(e,n,o[n]);return e},R=(e,o)=>Su(e,wu(o));var Eo=(e,o)=>{var n={};for(var r in e)Jr.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&St)for(var r of St(e))o.indexOf(r)<0&&os.call(e,r)&&(n[r]=e[r]);return n};var I=(e,o)=>()=>(e&&(o=e(e=0)),o);var E=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),_o=(e,o)=>{for(var n in o)Mn(e,n,{get:o[n],enumerable:!0})},ns=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of vu(o))!Jr.call(e,a)&&a!==n&&Mn(e,a,{get:()=>o[a],enumerable:!(r=bu(o,a))||r.enumerable});return e};var C=(e,o,n)=>(n=e!=null?yu(Iu(e)):{},ns(o||!e||!e.__esModule?Mn(n,"default",{value:e,enumerable:!0}):n,e)),Ze=e=>ns(Mn({},"__esModule",{value:!0}),e);var f=(e,o,n)=>new Promise((r,a)=>{var p=l=>{try{d(n.next(l))}catch(_){a(_)}},m=l=>{try{d(n.throw(l))}catch(_){a(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var as=E(bt=>{"use strict";t();bt.byteLength=ku;bt.toByteArray=Eu;bt.fromByteArray=Nu;var Qe=[],Ve=[],Au=typeof Uint8Array!="undefined"?Uint8Array:Array,Zr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Go=0,ts=Zr.length;Go<ts;++Go)Qe[Go]=Zr[Go],Ve[Zr.charCodeAt(Go)]=Go;var Go,ts;Ve["-".charCodeAt(0)]=62;Ve["_".charCodeAt(0)]=63;function rs(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function ku(e){var o=rs(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Lu(e,o,n){return(o+n)*3/4-n}function Eu(e){var o,n=rs(e),r=n[0],a=n[1],p=new Au(Lu(e,r,a)),m=0,d=a>0?r-4:r,l;for(l=0;l<d;l+=4)o=Ve[e.charCodeAt(l)]<<18|Ve[e.charCodeAt(l+1)]<<12|Ve[e.charCodeAt(l+2)]<<6|Ve[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return a===2&&(o=Ve[e.charCodeAt(l)]<<2|Ve[e.charCodeAt(l+1)]>>4,p[m++]=o&255),a===1&&(o=Ve[e.charCodeAt(l)]<<10|Ve[e.charCodeAt(l+1)]<<4|Ve[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Pu(e){return Qe[e>>18&63]+Qe[e>>12&63]+Qe[e>>6&63]+Qe[e&63]}function Cu(e,o,n){for(var r,a=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),a.push(Pu(r));return a.join("")}function Nu(e){for(var o,n=e.length,r=n%3,a=[],p=16383,m=0,d=n-r;m<d;m+=p)a.push(Cu(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],a.push(Qe[o>>2]+Qe[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],a.push(Qe[o>>10]+Qe[o>>4&63]+Qe[o<<2&63]+"=")),a.join("")}});var is=E(Qr=>{t();Qr.read=function(e,o,n,r,a){var p,m,d=a*8-r-1,l=(1<<d)-1,_=l>>1,u=-7,g=n?a-1:0,T=n?-1:1,v=e[o+g];for(g+=T,p=v&(1<<-u)-1,v>>=-u,u+=d;u>0;p=p*256+e[o+g],g+=T,u-=8);for(m=p&(1<<-u)-1,p>>=-u,u+=r;u>0;m=m*256+e[o+g],g+=T,u-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(v?-1:1)*m*Math.pow(2,p-r)};Qr.write=function(e,o,n,r,a,p){var m,d,l,_=p*8-a-1,u=(1<<_)-1,g=u>>1,T=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=r?0:p-1,y=r?1:-1,b=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=u):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+g>=1?o+=T/l:o+=T*Math.pow(2,1-g),o*l>=2&&(m++,l/=2),m+g>=u?(d=0,m=u):m+g>=1?(d=(o*l-1)*Math.pow(2,a),m=m+g):(d=o*Math.pow(2,g-1)*Math.pow(2,a),m=0));a>=8;e[n+v]=d&255,v+=y,d/=256,a-=8);for(m=m<<a|d,_+=a;_>0;e[n+v]=m&255,v+=y,m/=256,_-=8);e[n+v-y]|=b*128}});var xs=E(rn=>{"use strict";t();var ea=as(),tn=is(),ss=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;rn.Buffer=x;rn.SlowBuffer=Uu;rn.INSPECT_MAX_BYTES=50;var wt=2147483647;rn.kMaxLength=wt;x.TYPED_ARRAY_SUPPORT=Ru();!x.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Ru(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(x.prototype,"parent",{enumerable:!0,get:function(){if(!!x.isBuffer(this))return this.buffer}});Object.defineProperty(x.prototype,"offset",{enumerable:!0,get:function(){if(!!x.isBuffer(this))return this.byteOffset}});function uo(e){if(e>wt)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,x.prototype),o}function x(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ra(e)}return ms(e,o,n)}x.poolSize=8192;function ms(e,o,n){if(typeof e=="string")return Mu(e,o);if(ArrayBuffer.isView(e))return Ou(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(eo(e,ArrayBuffer)||e&&eo(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(eo(e,SharedArrayBuffer)||e&&eo(e.buffer,SharedArrayBuffer)))return na(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return x.from(r,o,n);var a=Fu(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return x.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}x.from=function(e,o,n){return ms(e,o,n)};Object.setPrototypeOf(x.prototype,Uint8Array.prototype);Object.setPrototypeOf(x,Uint8Array);function ds(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Du(e,o,n){return ds(e),e<=0?uo(e):o!==void 0?typeof n=="string"?uo(e).fill(o,n):uo(e).fill(o):uo(e)}x.alloc=function(e,o,n){return Du(e,o,n)};function ra(e){return ds(e),uo(e<0?0:aa(e)|0)}x.allocUnsafe=function(e){return ra(e)};x.allocUnsafeSlow=function(e){return ra(e)};function Mu(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!x.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=ls(e,o)|0,r=uo(n),a=r.write(e,o);return a!==n&&(r=r.slice(0,a)),r}function oa(e){for(var o=e.length<0?0:aa(e.length)|0,n=uo(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function Ou(e){if(eo(e,Uint8Array)){var o=new Uint8Array(e);return na(o.buffer,o.byteOffset,o.byteLength)}return oa(e)}function na(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,x.prototype),r}function Fu(e){if(x.isBuffer(e)){var o=aa(e.length)|0,n=uo(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||ia(e.length)?uo(0):oa(e);if(e.type==="Buffer"&&Array.isArray(e.data))return oa(e.data)}function aa(e){if(e>=wt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+wt.toString(16)+" bytes");return e|0}function Uu(e){return+e!=e&&(e=0),x.alloc(+e)}x.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==x.prototype};x.compare=function(o,n){if(eo(o,Uint8Array)&&(o=x.from(o,o.offset,o.byteLength)),eo(n,Uint8Array)&&(n=x.from(n,n.offset,n.byteLength)),!x.isBuffer(o)||!x.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,a=n.length,p=0,m=Math.min(r,a);p<m;++p)if(o[p]!==n[p]){r=o[p],a=n[p];break}return r<a?-1:a<r?1:0};x.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};x.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return x.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var a=x.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(eo(m,Uint8Array))p+m.length>a.length?x.from(m).copy(a,p):Uint8Array.prototype.set.call(a,m,p);else if(x.isBuffer(m))m.copy(a,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return a};function ls(e,o){if(x.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||eo(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ta(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Ts(e).length;default:if(a)return r?-1:ta(e).length;o=(""+o).toLowerCase(),a=!0}}x.byteLength=ls;function Bu(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Xu(this,o,n);case"utf8":case"utf-8":return us(this,o,n);case"ascii":return zu(this,o,n);case"latin1":case"binary":return Ku(this,o,n);case"base64":return ju(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yu(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}x.prototype._isBuffer=!0;function Ho(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}x.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)Ho(this,n,n+1);return this};x.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)Ho(this,n,n+3),Ho(this,n+1,n+2);return this};x.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)Ho(this,n,n+7),Ho(this,n+1,n+6),Ho(this,n+2,n+5),Ho(this,n+3,n+4);return this};x.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?us(this,0,o):Bu.apply(this,arguments)};x.prototype.toLocaleString=x.prototype.toString;x.prototype.equals=function(o){if(!x.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:x.compare(this,o)===0};x.prototype.inspect=function(){var o="",n=rn.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};ss&&(x.prototype[ss]=x.prototype.inspect);x.prototype.compare=function(o,n,r,a,p){if(eo(o,Uint8Array)&&(o=x.from(o,o.offset,o.byteLength)),!x.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),a===void 0&&(a=0),p===void 0&&(p=this.length),n<0||r>o.length||a<0||p>this.length)throw new RangeError("out of range index");if(a>=p&&n>=r)return 0;if(a>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,a>>>=0,p>>>=0,this===o)return 0;for(var m=p-a,d=r-n,l=Math.min(m,d),_=this.slice(a,p),u=o.slice(n,r),g=0;g<l;++g)if(_[g]!==u[g]){m=_[g],d=u[g];break}return m<d?-1:d<m?1:0};function _s(e,o,n,r,a){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,ia(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1;n=e.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof o=="string"&&(o=x.from(o,r)),x.isBuffer(o))return o.length===0?-1:cs(e,o,n,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):cs(e,[o],n,r,a);throw new TypeError("val must be string, number or Buffer")}function cs(e,o,n,r,a){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(v,y){return p===1?v[y]:v.readUInt16BE(y*p)}var _;if(a){var u=-1;for(_=n;_<m;_++)if(l(e,_)===l(o,u===-1?0:_-u)){if(u===-1&&(u=_),_-u+1===d)return u*p}else u!==-1&&(_-=_-u),u=-1}else for(n+d>m&&(n=m-d),_=n;_>=0;_--){for(var g=!0,T=0;T<d;T++)if(l(e,_+T)!==l(o,T)){g=!1;break}if(g)return _}return-1}x.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};x.prototype.indexOf=function(o,n,r){return _s(this,o,n,r,!0)};x.prototype.lastIndexOf=function(o,n,r){return _s(this,o,n,r,!1)};function Wu(e,o,n,r){n=Number(n)||0;var a=e.length-n;r?(r=Number(r),r>a&&(r=a)):r=a;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(ia(d))return m;e[n+m]=d}return m}function Gu(e,o,n,r){return vt(ta(o,e.length-n),e,n,r)}function Hu(e,o,n,r){return vt(Qu(o),e,n,r)}function Vu(e,o,n,r){return vt(Ts(o),e,n,r)}function $u(e,o,n,r){return vt(eg(o,e.length-n),e,n,r)}x.prototype.write=function(o,n,r,a){if(n===void 0)a="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")a=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var m=!1;;)switch(a){case"hex":return Wu(this,o,n,r);case"utf8":case"utf-8":return Gu(this,o,n,r);case"ascii":case"latin1":case"binary":return Hu(this,o,n,r);case"base64":return Vu(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $u(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),m=!0}};x.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ju(e,o,n){return o===0&&n===e.length?ea.fromByteArray(e):ea.fromByteArray(e.slice(o,n))}function us(e,o,n){n=Math.min(e.length,n);for(var r=[],a=o;a<n;){var p=e[a],m=null,d=p>239?4:p>223?3:p>191?2:1;if(a+d<=n){var l,_,u,g;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[a+1],(l&192)===128&&(g=(p&31)<<6|l&63,g>127&&(m=g));break;case 3:l=e[a+1],_=e[a+2],(l&192)===128&&(_&192)===128&&(g=(p&15)<<12|(l&63)<<6|_&63,g>2047&&(g<55296||g>57343)&&(m=g));break;case 4:l=e[a+1],_=e[a+2],u=e[a+3],(l&192)===128&&(_&192)===128&&(u&192)===128&&(g=(p&15)<<18|(l&63)<<12|(_&63)<<6|u&63,g>65535&&g<1114112&&(m=g))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),a+=d}return qu(r)}var ps=4096;function qu(e){var o=e.length;if(o<=ps)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=ps));return n}function zu(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]&127);return r}function Ku(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]);return r}function Xu(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var a="",p=o;p<n;++p)a+=og[e[p]];return a}function Yu(e,o,n){for(var r=e.slice(o,n),a="",p=0;p<r.length-1;p+=2)a+=String.fromCharCode(r[p]+r[p+1]*256);return a}x.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var a=this.subarray(o,n);return Object.setPrototypeOf(a,x.prototype),a};function he(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}x.prototype.readUintLE=x.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||he(o,n,this.length);for(var a=this[o],p=1,m=0;++m<n&&(p*=256);)a+=this[o+m]*p;return a};x.prototype.readUintBE=x.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||he(o,n,this.length);for(var a=this[o+--n],p=1;n>0&&(p*=256);)a+=this[o+--n]*p;return a};x.prototype.readUint8=x.prototype.readUInt8=function(o,n){return o=o>>>0,n||he(o,1,this.length),this[o]};x.prototype.readUint16LE=x.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||he(o,2,this.length),this[o]|this[o+1]<<8};x.prototype.readUint16BE=x.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||he(o,2,this.length),this[o]<<8|this[o+1]};x.prototype.readUint32LE=x.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||he(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};x.prototype.readUint32BE=x.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||he(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};x.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||he(o,n,this.length);for(var a=this[o],p=1,m=0;++m<n&&(p*=256);)a+=this[o+m]*p;return p*=128,a>=p&&(a-=Math.pow(2,8*n)),a};x.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||he(o,n,this.length);for(var a=n,p=1,m=this[o+--a];a>0&&(p*=256);)m+=this[o+--a]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};x.prototype.readInt8=function(o,n){return o=o>>>0,n||he(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};x.prototype.readInt16LE=function(o,n){o=o>>>0,n||he(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};x.prototype.readInt16BE=function(o,n){o=o>>>0,n||he(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};x.prototype.readInt32LE=function(o,n){return o=o>>>0,n||he(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};x.prototype.readInt32BE=function(o,n){return o=o>>>0,n||he(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};x.prototype.readFloatLE=function(o,n){return o=o>>>0,n||he(o,4,this.length),tn.read(this,o,!0,23,4)};x.prototype.readFloatBE=function(o,n){return o=o>>>0,n||he(o,4,this.length),tn.read(this,o,!1,23,4)};x.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||he(o,8,this.length),tn.read(this,o,!0,52,8)};x.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||he(o,8,this.length),tn.read(this,o,!1,52,8)};function Ne(e,o,n,r,a,p){if(!x.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}x.prototype.writeUintLE=x.prototype.writeUIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Ne(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};x.prototype.writeUintBE=x.prototype.writeUIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Ne(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};x.prototype.writeUint8=x.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,1,255,0),this[n]=o&255,n+1};x.prototype.writeUint16LE=x.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};x.prototype.writeUint16BE=x.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};x.prototype.writeUint32LE=x.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};x.prototype.writeUint32BE=x.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};x.prototype.writeIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var p=Math.pow(2,8*r-1);Ne(this,o,n,r,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};x.prototype.writeIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var p=Math.pow(2,8*r-1);Ne(this,o,n,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};x.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};x.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};x.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};x.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};x.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||Ne(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function gs(e,o,n,r,a,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function fs(e,o,n,r,a){return o=+o,n=n>>>0,a||gs(e,o,n,4,34028234663852886e22,-34028234663852886e22),tn.write(e,o,n,r,23,4),n+4}x.prototype.writeFloatLE=function(o,n,r){return fs(this,o,n,!0,r)};x.prototype.writeFloatBE=function(o,n,r){return fs(this,o,n,!1,r)};function hs(e,o,n,r,a){return o=+o,n=n>>>0,a||gs(e,o,n,8,17976931348623157e292,-17976931348623157e292),tn.write(e,o,n,r,52,8),n+8}x.prototype.writeDoubleLE=function(o,n,r){return hs(this,o,n,!0,r)};x.prototype.writeDoubleBE=function(o,n,r){return hs(this,o,n,!1,r)};x.prototype.copy=function(o,n,r,a){if(!x.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),n>=o.length&&(n=o.length),n||(n=0),a>0&&a<r&&(a=r),a===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),o.length-n<a-r&&(a=o.length-n+r);var p=a-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,a):Uint8Array.prototype.set.call(o,this.subarray(r,a),n),p};x.prototype.fill=function(o,n,r,a){if(typeof o=="string"){if(typeof n=="string"?(a=n,n=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!x.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(o.length===1){var p=o.charCodeAt(0);(a==="utf8"&&p<128||a==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=x.isBuffer(o)?o:x.from(o,a),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var Ju=/[^+/0-9A-Za-z-_]/g;function Zu(e){if(e=e.split("=")[0],e=e.trim().replace(Ju,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ta(e,o){o=o||1/0;for(var n,r=e.length,a=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!a){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}a=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(o-=3)>-1&&p.push(239,191,189);if(a=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function Qu(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function eg(e,o){for(var n,r,a,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,a=n%256,p.push(a),p.push(r);return p}function Ts(e){return ea.toByteArray(Zu(e))}function vt(e,o,n,r){for(var a=0;a<r&&!(a+n>=o.length||a>=e.length);++a)o[a+n]=e[a];return a}function eo(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function ia(e){return e!==e}var og=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,a=0;a<16;++a)o[r+a]=e[n]+e[a];return o}()});var vs=E((fS,ws)=>{t();var de=ws.exports={},oo,no;function sa(){throw new Error("setTimeout has not been defined")}function ca(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?oo=setTimeout:oo=sa}catch(e){oo=sa}try{typeof clearTimeout=="function"?no=clearTimeout:no=ca}catch(e){no=ca}})();function ys(e){if(oo===setTimeout)return setTimeout(e,0);if((oo===sa||!oo)&&setTimeout)return oo=setTimeout,setTimeout(e,0);try{return oo(e,0)}catch(o){try{return oo.call(null,e,0)}catch(n){return oo.call(this,e,0)}}}function ng(e){if(no===clearTimeout)return clearTimeout(e);if((no===ca||!no)&&clearTimeout)return no=clearTimeout,clearTimeout(e);try{return no(e)}catch(o){try{return no.call(null,e)}catch(n){return no.call(this,e)}}}var go=[],an=!1,Vo,It=-1;function tg(){!an||!Vo||(an=!1,Vo.length?go=Vo.concat(go):It=-1,go.length&&Ss())}function Ss(){if(!an){var e=ys(tg);an=!0;for(var o=go.length;o;){for(Vo=go,go=[];++It<o;)Vo&&Vo[It].run();It=-1,o=go.length}Vo=null,an=!1,ng(e)}}de.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];go.push(new bs(e,o)),go.length===1&&!an&&ys(Ss)};function bs(e,o){this.fun=e,this.array=o}bs.prototype.run=function(){this.fun.apply(null,this.array)};de.title="browser";de.browser=!0;de.env={};de.argv=[];de.version="";de.versions={};function fo(){}de.on=fo;de.addListener=fo;de.once=fo;de.off=fo;de.removeListener=fo;de.removeAllListeners=fo;de.emit=fo;de.prependListener=fo;de.prependOnceListener=fo;de.listeners=function(e){return[]};de.binding=function(e){throw new Error("process.binding is not supported")};de.cwd=function(){return"/"};de.chdir=function(e){throw new Error("process.chdir is not supported")};de.umask=function(){return 0}});var i,c,rg,s,t=I(()=>{i=C(xs()),c=C(vs()),rg=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),s=rg});var Is=I(()=>{"use strict";t()});var As,ho,ks,pa,Ls,we,On,to=I(()=>{"use strict";t();As="error when signing",ho="Transaction canceled",ks="error signing transaction",pa="provider not initialized",Ls="You need a signer/valid signer to send a transaction,use either WalletProvider, LedgerProvider or WalletConnect",we="Action not allowed. User is logged in. Call logout() first",On="You cannot sign transactions from a different account"});var Es=I(()=>{"use strict";t()});var ma,Ps=I(()=>{"use strict";t();ma=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(ma||{})});var Cs=I(()=>{"use strict";t()});var da,la=I(()=>{"use strict";t();da={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var Ns=I(()=>{"use strict";t()});var _a,ua=I(()=>{"use strict";t();_a=(a=>(a.signature="signature",a.sessionId="sessionId",a.status="status",a.address="address",a))(_a||{})});var Rs=I(()=>{"use strict";t()});var Ds=I(()=>{"use strict";t()});var Te,sn,Po=I(()=>{"use strict";t();Te=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),sn=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var _e,Ms,LS,Os,ES,ce=I(()=>{"use strict";t();Po();_e=(T=>(T.ledger="ledger",T.walletconnect="walletconnect",T.walletconnectv2="walletconnectv2",T.wallet="wallet",T.crossWindow="crossWindow",T.iframe="iframe",T.extension="extension",T.passkey="passkey",T.metamask="metamask",T.opera="opera",T.extra="extra",T.none="",T))(_e||{}),Ms=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(Ms||{}),LS=h(h({},sn.WindowProviderRequestEnums),Ms),Os=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Os||{}),ES=h(h({},sn.WindowProviderResponseEnums),Os)});var Fs=I(()=>{"use strict";t()});var Us=I(()=>{"use strict";t()});var Re=I(()=>{"use strict";t()});var Bs=I(()=>{"use strict";t()});var Ws=I(()=>{"use strict";t()});var Gs=I(()=>{"use strict";t()});var le=I(()=>{"use strict";t();ua();Rs();Ds();ce();Fs();Us();Re();Bs();Ws();Gs()});var $o,Hs,qS,Vs,zS,$s,KS,XS,js,qs,cn=I(()=>{"use strict";t();le();$o={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Hs,egldLabel:qS}=$o["devnet"],{chainId:Vs,egldLabel:zS}=$o["testnet"],{chainId:$s,egldLabel:KS}=$o["mainnet"],XS={["devnet"]:Hs,["testnet"]:Vs,["mainnet"]:$s},js={[Hs]:"devnet",[Vs]:"testnet",[$s]:"mainnet"},qs="multiversx://"});var At=I(()=>{"use strict";t()});var ro,zs=I(()=>{"use strict";t();ro=require("@multiversx/sdk-web-wallet-provider")});var ze,Fn=I(()=>{"use strict";t();ze=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ks,Xs,ga,ag,ig,Ys,fa=I(()=>{"use strict";t();Fn();ga=String((Xs=(Ks=ze.safeWindow)==null?void 0:Ks.navigator)==null?void 0:Xs.userAgent),ag=/^((?!chrome|android).)*safari/i.test(ga),ig=/firefox/i.test(ga)&&/windows/i.test(ga),Ys=ag||ig});var kt,Lt,Js,Zs,Qs,ao,Et,Pt,ec,pn,j=I(()=>{"use strict";t();Is();to();Es();Ps();Cs();la();Ns();cn();At();zs();fa();kt=5e4,Lt=1e9,Js=1,Zs=1,Qs="/dapp/init",ao="signSession",Et="sdk-dapp-version",Pt="logout",ec="login",pn="0"});var mn,Ct=I(()=>{"use strict";t();mn=()=>Date.now()/1e3});var oc=I(()=>{"use strict";t()});var nc=I(()=>{"use strict";t()});var ha=I(()=>{"use strict";t();Ct();oc();nc()});var Ta={};_o(Ta,{clear:()=>mg,getItem:()=>cg,localStorageKeys:()=>Ke,removeItem:()=>pg,setItem:()=>sg});var Ke,Nt,sg,cg,pg,mg,dn=I(()=>{"use strict";t();ha();Ke={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Nt=typeof localStorage!="undefined",sg=({key:e,data:o,expires:n})=>{!Nt||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},cg=e=>{if(!Nt)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:mn()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},pg=e=>{!Nt||localStorage.removeItem(String(e))},mg=()=>{!Nt||localStorage.clear()}});var xa={};_o(xa,{clear:()=>ic,getItem:()=>rc,removeItem:()=>ac,setItem:()=>tc,storage:()=>dg});var tc,rc,ac,ic,dg,sc=I(()=>{"use strict";t();tc=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},rc=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},ac=e=>sessionStorage.removeItem(String(e)),ic=()=>sessionStorage.clear(),dg={setItem:tc,getItem:rc,removeItem:ac,clear:ic}});var io,ln=I(()=>{"use strict";t();dn();sc();io={session:xa,local:Ta}});var ya,ae,pe,me=I(()=>{"use strict";t();ya=require("@reduxjs/toolkit");j();ae=(0,ya.createAction)(Pt),pe=(0,ya.createAction)(ec,e=>({payload:e}))});var ba,cc,pc,Rt,Sa,mc,_n,dc,wa,Cb,va,lc,Nb,Rb,Db,_c,uc,Dt,Mt=I(()=>{"use strict";t();ba=require("@multiversx/sdk-core"),cc=require("@reduxjs/toolkit"),pc=require("redux-persist");j();ln();dn();me();Rt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:pn},Sa={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Rt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},mc=(0,cc.createSlice)({name:"accountInfoSlice",initialState:Sa,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new ba.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:Rt},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(ae,()=>(io.local.removeItem(Ke.loginExpiresAt),Sa)),e.addCase(pe,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new ba.Address(r).hex()}),e.addCase(pc.REHYDRATE,(o,n)=>{var _;if(!((_=n.payload)!=null&&_.account))return;let{account:r}=n.payload,{address:a,shard:p,accounts:m,publicKey:d}=r;o.address=a,o.shard=p;let l=m&&a in m;o.accounts=l?m:Sa.accounts,o.publicKey=d})}}),{setAccount:_n,setAddress:dc,setAccountNonce:wa,setAccountShard:Cb,setLedgerAccount:va,updateLedgerAccount:lc,setWalletConnectAccount:Nb,setIsAccountLoading:Rb,setAccountLoadingError:Db,setWebsocketEvent:_c,setWebsocketBatchEvent:uc}=mc.actions,Dt=mc.reducer});function Un(){return new Date().setHours(new Date().getHours()+24)}function Bn(e){io.local.setItem({key:Ke.loginExpiresAt,data:e,expires:e})}var Ia=I(()=>{"use strict";t();ln();dn()});var fc,gc,hc,$b,Tc,xc,un,jb,yc,Sc,qb,zb,Kb,Ot,Ft=I(()=>{"use strict";t();fc=require("@reduxjs/toolkit");Ia();ce();me();gc={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},hc=(0,fc.createSlice)({name:"loginInfoSlice",initialState:gc,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(ae,()=>gc),e.addCase(pe,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,Bn(Un())})}}),{setLoginMethod:$b,setWalletConnectLogin:Tc,setLedgerLogin:xc,setTokenLogin:un,setTokenLoginSignature:jb,setWalletLogin:yc,invalidateLoginSession:Sc,setLogoutRoute:qb,setIsWalletConnectV2Initialized:zb,setWebviewLogin:Kb}=hc.actions,Ot=hc.reducer});var wc,bc,vc,Zb,lg,Qb,Ic,Ut,Bt=I(()=>{"use strict";t();wc=require("@reduxjs/toolkit");me();bc={},vc=(0,wc.createSlice)({name:"modalsSlice",initialState:bc,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(ae,()=>bc)}}),{setTxSubmittedModal:Zb,setNotificationModal:lg,clearTxSubmittedModal:Qb,clearNotificationModal:Ic}=vc.actions,Ut=vc.reducer});var To,gn=I(()=>{"use strict";t();To=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var q,Se=I(()=>{"use strict";t();gn();q=()=>{if(!To())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:a,search:p}}=window;return{pathname:o,hash:n,origin:r,href:a,search:p}}});var xo,Ac=I(()=>{"use strict";t();Se();xo=(e="")=>{let o=q(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var Xe,kc=I(()=>{"use strict";t();ve();Xe=()=>{let{pathname:e,search:o,hash:n}=q();return`${e!=null?e:""}${o!=null?o:""}${n!=null?n:""}`}});var Lc,Ec=I(()=>{"use strict";t();Fn();Lc=e=>{if(!ze.safeWindow.location)return;if(!new URL(ze.safeWindow.location.href).protocol.startsWith("http"))return ze.safeWindow.location.reload();ze.safeWindow.location.assign(e)}});var ve=I(()=>{"use strict";t();Ac();kc();Se();Ec()});var Pc,Cc,fn,Wn=I(()=>{"use strict";t();ve();Pc=!1,Cc=(e=!0)=>{Pc=e},fn=({timeout:e=0,url:o})=>{Pc||setTimeout(()=>{if(!!window)return Lc(o)},e)}});function Ee({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),a=typeof o=="function";if(r&&e!=null){if(a)return o(e,n);fn({url:e,timeout:_g})}}var _g,Nc=I(()=>{"use strict";t();Wn();_g=200});function Rc(e){return e[Math.floor(Math.random()*e.length)]}var Dc=I(()=>{"use strict";t()});function Wt(e){let o=null;if((e==null?void 0:e.statusCode)in da){let n=e==null?void 0:e.statusCode,{message:r}=da[n];o=fg.includes(n)?Mc:r}return{errorMessage:o,defaultErrorMessage:Mc}}var Mc,ug,gg,fg,Aa=I(()=>{"use strict";t();la();Mc="Check if the MultiversX app is open on Ledger",ug=28161,gg=28160,fg=[ug,gg]});var yo=I(()=>{"use strict";t();Nc();Dc();Aa()});var Oc,Fc,Uc,ka,Tg,Bc,P0,C0,Wc,Gt,Ht=I(()=>{"use strict";t();Oc=require("@reduxjs/toolkit"),Fc=C(require("lodash.omit")),Uc=require("redux-persist");At();me();yo();ka={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Tg={network:ka},Bc=(0,Oc.createSlice)({name:"appConfig",initialState:Tg,reducers:{initializeNetworkConfig:(e,o)=>{let n=Rc(o.payload.walletConnectV2RelayAddresses),r=(0,Fc.default)(o.payload,"walletConnectV2RelayAddresses");e.network=R(h(h({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=h(h({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(ae,o=>{o.network.customWalletAddress=void 0}),e.addCase(Uc.REHYDRATE,(o,n)=>{var a,p;if(!((p=(a=n.payload)==null?void 0:a.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:P0,updateNetworkConfig:C0,setCustomWalletAddress:Wc}=Bc.actions,Gt=Bc.reducer});var Gc,La,Hc,F0,U0,B0,Vt,$t=I(()=>{"use strict";t();Gc=require("@reduxjs/toolkit");le();me();La={isSigning:!1,signedSessions:{}},Hc=(0,Gc.createSlice)({name:"signedMessageInfoSliceState",initialState:La,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:a}=o.payload;a&&(e.errorMessage=a),e.isSigning=r.status==="pending",e.signedSessions[n]=h(h({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>h(h({},e),o.payload),clearSignedMessageInfo:()=>La},extraReducers:e=>{e.addCase(ae,()=>La)}}),{setSignSession:F0,clearSignedMessageInfo:U0,setSignSessionState:B0}=Hc.actions,Vt=Hc.reducer});var $c,jc,Vc,qc,xg,yg,q0,Sg,jt,qt=I(()=>{"use strict";t();$c=require("@reduxjs/toolkit"),jc=require("redux-persist");le();Ct();me();Vc={customToasts:[],transactionToasts:[]},qc=(0,$c.createSlice)({name:"toastsSlice",initialState:Vc,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(a=>a.toastId===n);if(r!==-1){e.customToasts[r]=R(h(h({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(R(h({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:mn(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(ae,()=>Vc),e.addCase(jc.REHYDRATE,(o,n)=>{var a,p;let r=(p=(a=n.customToasts)==null?void 0:a.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:xg,removeCustomToast:yg,addTransactionToast:q0,removeTransactionToast:Sg}=qc.actions,jt=qc.reducer});var zc,Pa,Ca,Na,bg,Ea,Kc,Y0,wg,hn,zt,Kt=I(()=>{"use strict";t();zc=require("@reduxjs/toolkit");me();Pa="Transaction failed",Ca="Transaction successful",Na="Processing transaction",bg="Transaction submitted",Ea={},Kc=(0,zc.createSlice)({name:"transactionsInfo",initialState:Ea,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Pa,successMessage:(r==null?void 0:r.successMessage)||Ca,processingMessage:(r==null?void 0:r.processingMessage)||Na,submittedMessage:(r==null?void 0:r.submittedMessage)||bg,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ea},extraReducers:e=>{e.addCase(ae,()=>Ea)}}),{clearTransactionsInfo:Y0,setTransactionsDisplayInfo:wg,clearTransactionsInfoForSessionId:hn}=Kc.actions,zt=Kc.reducer});function so(e){return e!=null&&(Rg(e)||Ug(e))}function No(e){return e!=null&&(Dg(e)||Bg(e))}function Ro(e){return e!=null&&(Mg(e)||Wg(e))}function Xc(e){return e!=null&&(Og(e)||Gg(e))}function Xt(e){return e!=null&&Fg(e)}function Rg(e){return e!=null&&vg.includes(e)}function Dg(e){return e!=null&&Ig.includes(e)}function Mg(e){return e!=null&&Ag.includes(e)}function Og(e){return e!=null&&kg.includes(e)}function Fg(e){return e!=null&&Lg.includes(e)}function Ug(e){return e!=null&&Eg.includes(e)}function Bg(e){return e!=null&&Pg.includes(e)}function Wg(e){return e!=null&&Cg.includes(e)}function Gg(e){return e!=null&&Ng.includes(e)}var vg,Ig,Ag,kg,Lg,Eg,Pg,Cg,Ng,xn=I(()=>{"use strict";t();ce();vg=["sent"],Ig=["success"],Ag=["fail","cancelled","timedOut"],kg=["invalid"],Lg=["timedOut"],Eg=["pending"],Pg=["success"],Cg=["fail","invalid"],Ng=["not executed"]});var Yc,Jc,Gn,Hg,Zc,yn,Yt,Vg,Do,Qc,$g,aw,ep,So,co,iw,Jt,Zt=I(()=>{"use strict";t();Yc=require("@reduxjs/toolkit"),Jc=require("redux-persist");ce();xn();me();Gn={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Hg={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Zc=(0,Yc.createSlice)({name:"transactionsSlice",initialState:Gn,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:n,transactions:r,errorMessage:a,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=h(h(h({},Hg),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:a,redirectRoute:m,customTransactionInformation:h(h({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===n&&(e.transactionsToSign=Gn.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=h(h({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:a,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,a!=null&&(e.signedTransactions[n].errorMessage=a),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,u,g,T,v,y,b,S;let{sessionId:n,status:r,errorMessage:a,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(u=(_=e.signedTransactions)==null?void 0:_[n])==null?void 0:u.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(A=>A.hash===p?R(h(h({},m!=null?m:{}),A),{status:r,errorMessage:a,inTransit:d}):A);let k=(T=(g=e.signedTransactions[n])==null?void 0:g.transactions)==null?void 0:T.every(A=>No(A.status)),D=(y=(v=e.signedTransactions[n])==null?void 0:v.transactions)==null?void 0:y.some(A=>Ro(A.status)),M=(S=(b=e.signedTransactions[n])==null?void 0:b.transactions)==null?void 0:S.every(A=>Xc(A.status));k&&(e.signedTransactions[n].status="success"),D&&(e.signedTransactions[n].status="fail"),M&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Gn.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Gn.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=h(h({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(ae,()=>Gn),e.addCase(Jc.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:a}=n.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let u=new Date(l),g=new Date;return g.setHours(g.getHours()+5),g-u>0||(d[l]=_),d},{});a!=null&&(o.customTransactionInformationForSessionId=a),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:yn,updateSignedTransactions:Yt,setTransactionsToSign:Vg,clearAllTransactionsToSign:Do,clearAllSignedTransactions:Qc,clearSignedTransaction:$g,clearTransactionToSign:aw,setSignTransactionsError:ep,setSignTransactionsCancelMessage:So,moveTransactionsToSignedState:co,updateSignedTransactionsCustomTransactionInformation:iw}=Zc.actions,Jt=Zc.reducer});var op,Ra,np,mw,dw,jg,lw,Qt,er=I(()=>{"use strict";t();op=require("@reduxjs/toolkit");me();Ra={},np=(0,op.createSlice)({name:"batchTransactionsSlice",initialState:Ra,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ra},extraReducers:e=>{e.addCase(ae,()=>Ra)}}),{setBatchTransactions:mw,updateBatchTransactions:dw,clearBatchTransactions:jg,clearAllBatchTransactions:lw}=np.actions,Qt=np.reducer});var rp,tp,ap,fw,ip,Da=I(()=>{"use strict";t();rp=require("@reduxjs/toolkit");me();tp={},ap=(0,rp.createSlice)({name:"dappConfigSlice",initialState:tp,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(ae,()=>tp)}}),{setDappConfig:fw}=ap.actions,ip=ap.reducer});var ee=I(()=>{"use strict";t();Mt();Ft();Bt();Ht();$t();qt();Kt();Zt();er();Da()});var Ma=I(()=>{"use strict";t()});var pp,Xg,Yg,jo,tr=I(()=>{"use strict";t();pp=require("@reduxjs/toolkit");Ma();Mt();er();Da();Ft();Bt();Ht();$t();qt();Kt();Zt();Xg={["account"]:Dt,["dappConfig"]:ip,["loginInfo"]:Ot,["modals"]:Ut,["networkConfig"]:Gt,["signedMessageInfo"]:Vt,["toasts"]:jt,["transactionsInfo"]:zt,["transactions"]:Jt,["batchTransactions"]:Qt},Yg=(e={})=>(0,pp.combineReducers)(h(h({},Xg),e)),jo=Yg});var _p={};_o(_p,{default:()=>_f,sessionStorageReducers:()=>Oa});function bo(e,o=[]){return{key:e,version:1,storage:dp.default,blacklist:o}}var De,mp,dp,Jg,Hn,Zg,Qg,ef,of,nf,tf,rf,af,sf,cf,lp,pf,Oa,mf,df,lf,_f,up=I(()=>{"use strict";t();De=require("redux-persist"),mp=C(require("redux-persist/lib/storage")),dp=C(require("redux-persist/lib/storage/session"));tr();ee();Mt();er();Ft();Bt();Ht();$t();qt();Kt();Zt();Ma();Jg={persistReducersStorageType:"localStorage"},Hn={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Zg=bo(Hn["account"]),Qg=bo(Hn["loginInfo"]),ef=bo(Hn["modals"]),of=bo(Hn["networkConfig"]),nf={2:e=>R(h({},e),{networkConfig:ka})};tf=bo("sdk-dapp-transactionsInfo"),rf=bo("sdk-dapp-transactions",["transactionsToSign"]),af=bo("sdk-dapp-batchTransactions",["batchTransactions"]),sf=bo("sdk-dapp-toasts"),cf=bo("sdk-dapp-signedMessageInfo"),lp={key:"sdk-dapp-store",version:2,storage:mp.default,whitelist:Object.keys(Hn),migrate:(0,De.createMigrate)(nf,{debug:!1})},pf=R(h({},lp),{whitelist:[]}),Oa={["toasts"]:(0,De.persistReducer)(sf,jt),["transactions"]:(0,De.persistReducer)(rf,Jt),["transactionsInfo"]:(0,De.persistReducer)(tf,zt),["batchTransactions"]:(0,De.persistReducer)(af,Qt),["signedMessageInfo"]:(0,De.persistReducer)(cf,Vt)},mf=R(h({},Oa),{["account"]:(0,De.persistReducer)(Zg,Dt),["loginInfo"]:(0,De.persistReducer)(Qg,Ot),["modals"]:(0,De.persistReducer)(ef,Ut),["networkConfig"]:(0,De.persistReducer)(of,Gt)}),df=Jg.persistReducersStorageType==="localStorage",lf=df?(0,De.persistReducer)(lp,jo(Oa)):(0,De.persistReducer)(pf,jo(mf)),_f=lf});var gp={};_o(gp,{default:()=>uf});var uf,fp=I(()=>{"use strict";t();tr();uf=jo()});var hp={};_o(hp,{default:()=>ff});var $e,gf,ff,Tp=I(()=>{"use strict";t();$e=require("redux-persist"),gf=[$e.FLUSH,$e.REHYDRATE,$e.PAUSE,$e.PERSIST,$e.PURGE,$e.REGISTER],ff=gf});var Sp={};_o(Sp,{default:()=>yp});function yp(e){return(0,xp.persistStore)(e)}var xp,bp=I(()=>{"use strict";t();xp=require("redux-persist")});var nd=E(($3,od)=>{t();var Ph=typeof s=="object"&&s&&s.Object===Object&&s;od.exports=Ph});var at=E((j3,td)=>{t();var Ch=nd(),Nh=typeof self=="object"&&self&&self.Object===Object&&self,Rh=Ch||Nh||Function("return this")();td.exports=Rh});var ui=E((q3,rd)=>{t();var Dh=at(),Mh=Dh.Symbol;rd.exports=Mh});var cd=E((z3,sd)=>{t();var ad=ui(),id=Object.prototype,Oh=id.hasOwnProperty,Fh=id.toString,it=ad?ad.toStringTag:void 0;function Uh(e){var o=Oh.call(e,it),n=e[it];try{e[it]=void 0;var r=!0}catch(p){}var a=Fh.call(e);return r&&(o?e[it]=n:delete e[it]),a}sd.exports=Uh});var md=E((K3,pd)=>{t();var Bh=Object.prototype,Wh=Bh.toString;function Gh(e){return Wh.call(e)}pd.exports=Gh});var gi=E((X3,_d)=>{t();var dd=ui(),Hh=cd(),Vh=md(),$h="[object Null]",jh="[object Undefined]",ld=dd?dd.toStringTag:void 0;function qh(e){return e==null?e===void 0?jh:$h:ld&&ld in Object(e)?Hh(e):Vh(e)}_d.exports=qh});var gd=E((Y3,ud)=>{t();var zh=Array.isArray;ud.exports=zh});var hd=E((J3,fd)=>{t();function Kh(e){return e!=null&&typeof e=="object"}fd.exports=Kh});var xd=E((Z3,Td)=>{t();var Xh=gi(),Yh=gd(),Jh=hd(),Zh="[object String]";function Qh(e){return typeof e=="string"||!Yh(e)&&Jh(e)&&Xh(e)==Zh}Td.exports=Qh});var Br=E((BO,Md)=>{t();function mT(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Md.exports=mT});var Fd=E((WO,Od)=>{t();var dT=gi(),lT=Br(),_T="[object AsyncFunction]",uT="[object Function]",gT="[object GeneratorFunction]",fT="[object Proxy]";function hT(e){if(!lT(e))return!1;var o=dT(e);return o==uT||o==gT||o==_T||o==fT}Od.exports=hT});var Bd=E((GO,Ud)=>{t();var TT=at(),xT=TT["__core-js_shared__"];Ud.exports=xT});var Hd=E((HO,Gd)=>{t();var xi=Bd(),Wd=function(){var e=/[^.]+$/.exec(xi&&xi.keys&&xi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function yT(e){return!!Wd&&Wd in e}Gd.exports=yT});var $d=E((VO,Vd)=>{t();var ST=Function.prototype,bT=ST.toString;function wT(e){if(e!=null){try{return bT.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Vd.exports=wT});var qd=E(($O,jd)=>{t();var vT=Fd(),IT=Hd(),AT=Br(),kT=$d(),LT=/[\\^$.*+?()[\]{}|]/g,ET=/^\[object .+?Constructor\]$/,PT=Function.prototype,CT=Object.prototype,NT=PT.toString,RT=CT.hasOwnProperty,DT=RegExp("^"+NT.call(RT).replace(LT,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function MT(e){if(!AT(e)||IT(e))return!1;var o=vT(e)?DT:ET;return o.test(kT(e))}jd.exports=MT});var Kd=E((jO,zd)=>{t();function OT(e,o){return e==null?void 0:e[o]}zd.exports=OT});var Wr=E((qO,Xd)=>{t();var FT=qd(),UT=Kd();function BT(e,o){var n=UT(e,o);return FT(n)?n:void 0}Xd.exports=BT});var dt=E((zO,Yd)=>{t();var WT=Wr(),GT=WT(Object,"create");Yd.exports=GT});var Qd=E((KO,Zd)=>{t();var Jd=dt();function HT(){this.__data__=Jd?Jd(null):{},this.size=0}Zd.exports=HT});var ol=E((XO,el)=>{t();function VT(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}el.exports=VT});var tl=E((YO,nl)=>{t();var $T=dt(),jT="__lodash_hash_undefined__",qT=Object.prototype,zT=qT.hasOwnProperty;function KT(e){var o=this.__data__;if($T){var n=o[e];return n===jT?void 0:n}return zT.call(o,e)?o[e]:void 0}nl.exports=KT});var al=E((JO,rl)=>{t();var XT=dt(),YT=Object.prototype,JT=YT.hasOwnProperty;function ZT(e){var o=this.__data__;return XT?o[e]!==void 0:JT.call(o,e)}rl.exports=ZT});var sl=E((ZO,il)=>{t();var QT=dt(),ex="__lodash_hash_undefined__";function ox(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=QT&&o===void 0?ex:o,this}il.exports=ox});var pl=E((QO,cl)=>{t();var nx=Qd(),tx=ol(),rx=tl(),ax=al(),ix=sl();function Ln(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Ln.prototype.clear=nx;Ln.prototype.delete=tx;Ln.prototype.get=rx;Ln.prototype.has=ax;Ln.prototype.set=ix;cl.exports=Ln});var dl=E((e5,ml)=>{t();function sx(){this.__data__=[],this.size=0}ml.exports=sx});var _l=E((o5,ll)=>{t();function cx(e,o){return e===o||e!==e&&o!==o}ll.exports=cx});var lt=E((n5,ul)=>{t();var px=_l();function mx(e,o){for(var n=e.length;n--;)if(px(e[n][0],o))return n;return-1}ul.exports=mx});var fl=E((t5,gl)=>{t();var dx=lt(),lx=Array.prototype,_x=lx.splice;function ux(e){var o=this.__data__,n=dx(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():_x.call(o,n,1),--this.size,!0}gl.exports=ux});var Tl=E((r5,hl)=>{t();var gx=lt();function fx(e){var o=this.__data__,n=gx(o,e);return n<0?void 0:o[n][1]}hl.exports=fx});var yl=E((a5,xl)=>{t();var hx=lt();function Tx(e){return hx(this.__data__,e)>-1}xl.exports=Tx});var bl=E((i5,Sl)=>{t();var xx=lt();function yx(e,o){var n=this.__data__,r=xx(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}Sl.exports=yx});var vl=E((s5,wl)=>{t();var Sx=dl(),bx=fl(),wx=Tl(),vx=yl(),Ix=bl();function En(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}En.prototype.clear=Sx;En.prototype.delete=bx;En.prototype.get=wx;En.prototype.has=vx;En.prototype.set=Ix;wl.exports=En});var Al=E((c5,Il)=>{t();var Ax=Wr(),kx=at(),Lx=Ax(kx,"Map");Il.exports=Lx});var El=E((p5,Ll)=>{t();var kl=pl(),Ex=vl(),Px=Al();function Cx(){this.size=0,this.__data__={hash:new kl,map:new(Px||Ex),string:new kl}}Ll.exports=Cx});var Cl=E((m5,Pl)=>{t();function Nx(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Pl.exports=Nx});var _t=E((d5,Nl)=>{t();var Rx=Cl();function Dx(e,o){var n=e.__data__;return Rx(o)?n[typeof o=="string"?"string":"hash"]:n.map}Nl.exports=Dx});var Dl=E((l5,Rl)=>{t();var Mx=_t();function Ox(e){var o=Mx(this,e).delete(e);return this.size-=o?1:0,o}Rl.exports=Ox});var Ol=E((_5,Ml)=>{t();var Fx=_t();function Ux(e){return Fx(this,e).get(e)}Ml.exports=Ux});var Ul=E((u5,Fl)=>{t();var Bx=_t();function Wx(e){return Bx(this,e).has(e)}Fl.exports=Wx});var Wl=E((g5,Bl)=>{t();var Gx=_t();function Hx(e,o){var n=Gx(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}Bl.exports=Hx});var Hl=E((f5,Gl)=>{t();var Vx=El(),$x=Dl(),jx=Ol(),qx=Ul(),zx=Wl();function Pn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Pn.prototype.clear=Vx;Pn.prototype.delete=$x;Pn.prototype.get=jx;Pn.prototype.has=qx;Pn.prototype.set=zx;Gl.exports=Pn});var $l=E((h5,Vl)=>{t();var Kx="__lodash_hash_undefined__";function Xx(e){return this.__data__.set(e,Kx),this}Vl.exports=Xx});var ql=E((T5,jl)=>{t();function Yx(e){return this.__data__.has(e)}jl.exports=Yx});var Kl=E((x5,zl)=>{t();var Jx=Hl(),Zx=$l(),Qx=ql();function Gr(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new Jx;++o<n;)this.add(e[o])}Gr.prototype.add=Gr.prototype.push=Zx;Gr.prototype.has=Qx;zl.exports=Gr});var Yl=E((y5,Xl)=>{t();function ey(e,o,n,r){for(var a=e.length,p=n+(r?1:-1);r?p--:++p<a;)if(o(e[p],p,e))return p;return-1}Xl.exports=ey});var Zl=E((S5,Jl)=>{t();function oy(e){return e!==e}Jl.exports=oy});var e_=E((b5,Ql)=>{t();function ny(e,o,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===o)return r;return-1}Ql.exports=ny});var n_=E((w5,o_)=>{t();var ty=Yl(),ry=Zl(),ay=e_();function iy(e,o,n){return o===o?ay(e,o,n):ty(e,ry,n)}o_.exports=iy});var r_=E((v5,t_)=>{t();var sy=n_();function cy(e,o){var n=e==null?0:e.length;return!!n&&sy(e,o,0)>-1}t_.exports=cy});var i_=E((I5,a_)=>{t();function py(e,o,n){for(var r=-1,a=e==null?0:e.length;++r<a;)if(n(o,e[r]))return!0;return!1}a_.exports=py});var c_=E((A5,s_)=>{t();function my(e,o){return e.has(o)}s_.exports=my});var m_=E((k5,p_)=>{t();var dy=Wr(),ly=at(),_y=dy(ly,"Set");p_.exports=_y});var l_=E((L5,d_)=>{t();function uy(){}d_.exports=uy});var yi=E((E5,__)=>{t();function gy(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}__.exports=gy});var g_=E((P5,u_)=>{t();var Si=m_(),fy=l_(),hy=yi(),Ty=1/0,xy=Si&&1/hy(new Si([,-0]))[1]==Ty?function(e){return new Si(e)}:fy;u_.exports=xy});var h_=E((C5,f_)=>{t();var yy=Kl(),Sy=r_(),by=i_(),wy=c_(),vy=g_(),Iy=yi(),Ay=200;function ky(e,o,n){var r=-1,a=Sy,p=e.length,m=!0,d=[],l=d;if(n)m=!1,a=by;else if(p>=Ay){var _=o?null:vy(e);if(_)return Iy(_);m=!1,a=wy,l=new yy}else l=o?[]:d;e:for(;++r<p;){var u=e[r],g=o?o(u):u;if(u=n||u!==0?u:0,m&&g===g){for(var T=l.length;T--;)if(l[T]===g)continue e;o&&l.push(g),d.push(u)}else a(l,g,n)||(l!==d&&l.push(g),d.push(u))}return d}f_.exports=ky});var x_=E((N5,T_)=>{t();var Ly=h_();function Ey(e){return e&&e.length?Ly(e):[]}T_.exports=Ey});var Bi={};_o(Bi,{css:()=>V_,default:()=>qy});var V_,qy,Wi=I(()=>{"use strict";t();V_=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V_));qy={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ko={};_o(ko,{css:()=>q_,default:()=>Xy});var q_,Xy,Lo=I(()=>{"use strict";t();q_=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(q_));Xy={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var dS={};_o(dS,{useCheckTransactionStatus:()=>lh,useCrossWindowLogin:()=>N_,useDebounce:()=>Wy,useExtensionLogin:()=>E_,useGetAccount:()=>lo,useGetAccountInfo:()=>bi,useGetAccountProvider:()=>Je,useGetActiveTransactionsStatus:()=>_h,useGetBatchWebsocketEvent:()=>wi,useGetEgldPrice:()=>mS,useGetFailedTransactions:()=>uh,useGetIsLoggedIn:()=>Ai,useGetIsWalletConnectV2Initialized:()=>Ny,useGetLastPendingTransactionHash:()=>gh,useGetLoginInfo:()=>Ii,useGetModalLoginMethods:()=>tu,useGetNetworkConfig:()=>Jn,useGetNotification:()=>Zf,useGetPendingTransactions:()=>Zn,useGetPollingInterval:()=>hh,useGetSignTransactionsError:()=>Th,useGetSignedTransactions:()=>ot,useGetSuccessfulTransactions:()=>xh,useGetToasts:()=>fu,useGetTokenDetails:()=>yh,useGetTransactionDisplayInfo:()=>Sh,useGetWebsocketEvent:()=>ki,useGetWebsocketUrl:()=>tS,useLedgerLogin:()=>au,useMetamaskLogin:()=>pu,useOperaLogin:()=>C_,useParseMultiEsdtTransferData:()=>di,useParseSignedTransactions:()=>tt,usePasskeyLogin:()=>mu,useRegisterWebsocketListener:()=>pS,useSignMultipleTransactions:()=>Ti,useSignTransactions:()=>Fy,useSignTransactionsCommonData:()=>ut,useSignTransactionsWithDevice:()=>Di,useSignTransactionsWithLedger:()=>Uy,useTrackTransactionStatus:()=>By,useTransactionsToasts:()=>gu,useUpdateEffect:()=>ni,useWalletConnectV2Login:()=>su,useWebWalletLogin:()=>Kr,useXaliasLogin:()=>iu});module.exports=Ze(dS);t();t();t();var Lp=require("react"),Sn=require("react-redux");t();var Fa=require("@reduxjs/toolkit"),Ap=require("react-redux/lib/utils/Subscription");ee();t();var sp=C(require("lodash.throttle"));j();ee();Ia();ln();dn();var qg=[Pt],or=!1,zg=(0,sp.default)(()=>{Bn(Un())},5e3),cp=e=>o=>n=>{if(qg.includes(n.type))return o(n);let r=e.getState(),a=io.local.getItem(Ke.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(a==null)return Bn(Un());let m=Date.now();return a-m<0&&!or?setTimeout(()=>{or=!0,e.dispatch(Sc())},1e3):(or&&(or=!1),zg()),o(n)};t();t();function nr(){return typeof sessionStorage!="undefined"}var wp=nr()?(up(),Ze(_p)).default:(fp(),Ze(gp)).default,vp=nr()?(Tp(),Ze(hp)).default:[],Ip=nr()?(bp(),Ze(Sp)).default:e=>e;tr();var P=(0,Fa.configureStore)({reducer:wp,middleware:e=>e({serializableCheck:{ignoredActions:[...vp,wa.type,_n.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(cp)}),kp=(0,Ap.createSubscription)(P),uv=Ip(P),gv=(0,Fa.configureStore)({reducer:jo});var hf={store:P,subscription:kp},Ua=(0,Lp.createContext)(hf),xv=(0,Sn.createStoreHook)(Ua),K=(0,Sn.createDispatchHook)(Ua),w=(0,Sn.createSelectorHook)(Ua);t();t();ee();t();var Ep=C(require("lodash.isequal")),rr=require("reselect"),L=(0,rr.createSelectorCreator)(rr.defaultMemoize,Ep.default);var po=e=>e.account,wo=L(po,e=>e.address),qo=L(po,wo,(e,o)=>o in e.accounts?e.accounts[o]:Rt),Pp=L(po,qo,(e,o)=>{let a=e,{accounts:n}=a,r=Eo(a,["accounts"]);return R(h({},r),{address:o.address,account:o})}),vv=L(qo,e=>e.balance),Cp=L(qo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Iv=L(po,e=>e.shard),Np=L(po,e=>e.ledgerAccount),Av=L(po,e=>e.walletConnectAccount),kv=L(po,e=>e.isAccountLoading),Lv=L(po,e=>e.accountLoadingError),Rp=L(po,e=>e.websocketEvent),Dp=L(po,e=>e.websocketBatchEvent);t();var Ba=e=>e.dappConfig,Cv=L(Ba,e=>e.shouldUseWebViewProvider);t();var Pe=e=>e.loginInfo,Mp=L(Pe,e=>e.loginMethod),Mo=L(Pe,wo,(e,o)=>Boolean(o)),Mv=L(Pe,e=>e.walletConnectLogin),Op=L(Pe,e=>e.ledgerLogin),Fp=L(Pe,e=>e.walletLogin),Ov=L(Pe,e=>e.isLoginSessionInvalid),Vn=L(Pe,e=>e.tokenLogin),ar=L(Pe,e=>e.logoutRoute),Up=L(Pe,e=>e.isWalletConnectV2Initialized);t();var Bp=e=>e.modals,Bv=L(Bp,e=>e.txSubmittedModal),Wp=L(Bp,e=>e.notificationModal);t();var je=e=>e.networkConfig,$n=L(je,e=>e.network.chainId),Gp=L(je,e=>e.network.roundDuration),Hv=L(je,e=>e.network.walletConnectBridgeAddress),Hp=L(je,e=>e.network.walletConnectV2RelayAddress),Vp=L(je,e=>e.network.walletConnectV2ProjectId),$p=L(je,e=>e.network.walletConnectV2Options),jp=L(je,e=>e.network.walletConnectDeepLink),xe=L(je,e=>e.network),ir=L(xe,e=>e.apiAddress),qp=L(xe,e=>e.explorerAddress),sr=L(xe,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),zp=L(xe,e=>e.xAliasAddress),Wa=L(xe,e=>e.egldLabel);t();var cr=e=>e.signedMessageInfo,jv=L(cr,e=>e.isSigning),qv=L(cr,e=>e.errorMessage),zv=L(cr,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),Kv=L(cr,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var Kp=e=>e.toasts,Xp=L(Kp,e=>e.customToasts),pr=L(Kp,e=>e.transactionToasts);t();ee();var Yp={errorMessage:Pa,successMessage:Ca,processingMessage:Na},Ga=e=>e.transactionsInfo,Jp=L(Ga,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Yp);t();t();var mo=require("@multiversx/sdk-core");j();t();var Va=require("@multiversx/sdk-core/out");t();t();function mr(e){try{let o=atob(e),n=btoa(o),r=i.Buffer.from(e,"base64").toString(),a=i.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===a||a.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function zo(e){return mr(e)?atob(e):e}t();t();function Ha(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}function jn(e){let o=e;try{let n=i.Buffer.from(e,"hex").toString();Ha(n)&&n.length>1&&(o=n)}catch(n){}return o}t();t();var Zp=e=>{let o=e!=null?e:"";return mr(o)?Va.TransactionPayload.fromEncoded(o):new Va.TransactionPayload(o)};t();j();var bn=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ma).some(n=>e.startsWith(n)):!1;function qn(e){var r,a,p;let o=h({},e);bn({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new mo.Transaction(h(h(R(h(R(h({value:o.value.valueOf(),data:Zp(o.data),nonce:o.nonce.valueOf(),receiver:new mo.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new mo.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:kt,gasPrice:(a=o.gasPrice.valueOf())!=null?a:Lt,chainID:o.chainID.valueOf(),version:new mo.TransactionVersion((p=o.version)!=null?p:Js)}),o.options?{options:new mo.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new mo.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(i.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(i.Buffer.from(o.signature,"hex")),n}t();t();j();function Tf(e,o){let n=new URLSearchParams(e),r=Object.fromEntries(n);return{nextUrlParams:new URLSearchParams(h(h({},r),o)).toString(),params:r}}var xf="3.1.0";function dr({callbackUrl:e,urlParams:o={}}){let n=e;if(Object.entries(o).length>0)try{let{search:r,origin:a,pathname:p,hash:m}=new URL(e),d=R(h({},o),{[Et]:xf}),{nextUrlParams:l}=Tf(r,d);n=`${a}${p}?${l}${m}`}catch(r){return console.error("Unable to construct URL from: ",e,r),n}return n}t();t();t();var Sf=require("@multiversx/sdk-core/out");t();j();t();var em=require("@multiversx/sdk-core");le();t();var Qp=require("@multiversx/sdk-core");function bf(e){try{let o=new Qp.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function wn(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&bf(e)}t();t();t();var ja=require("@multiversx/sdk-core"),lr=C(require("bignumber.js"));ce();var $a={tokenId:"",amount:""},om=e=>e.split("@").map((p,m)=>[2,3].includes(m)?p:jn(p));function qa(e){if(!e)return $a;let o=e.startsWith("ESDTTransfer"),n=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),r=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(o){let[,a,p]=e.split("@");try{let m=i.Buffer.from(a,"hex").toString("ascii");if(!m)return $a;let d=new lr.default("0x"+p.replace("0x","")).toString(10);return{tokenId:m,amount:d}}catch(m){console.error("Error getting token from transaction data",m)}}if(n)try{let[,a,p,m,d]=om(e);if([a,p,m,d].every(l=>Boolean(l))&&wn(new ja.Address(d).bech32()))return{tokenId:`${a}-${p}`,amount:new lr.default(m,16).toString(10),collection:a,nonce:p,receiver:new ja.Address(d).bech32()}}catch(a){}if(r)try{let[,a,p,m]=om(e);if([a,p,m].every(d=>Boolean(d)))return{tokenId:`${a}-${p}`,amount:new lr.default(m,16).toString(10),collection:a,nonce:p}}catch(a){}return $a}t();t();t();var Ko="accounts";var za="blocks";var zn="economics";var Ka="nfts";var Xa="tokens";var vn="transactions";t();t();t();t();Re();t();t();Re();t();t();t();var Lf=C(require("bignumber.js"));j();t();var kf=require("@multiversx/sdk-core"),Ya=C(require("bignumber.js"));j();t();var If=C(require("bignumber.js"));t();Ya.default.config({ROUNDING_MODE:Ya.default.ROUND_FLOOR});t();t();t();j();t();t();t();t();j();t();j();t();var Ef=require("@multiversx/sdk-core");j();t();var Xn=require("@multiversx/sdk-core"),Nf=C(require("bignumber.js"));j();t();t();var Pf=C(require("bignumber.js"));j();t();j();t();var Za={isEsdt:!1,isNft:!1,isEgld:!1};function Qa(e){let o=e==null?void 0:e.split("-").length;return o===2?R(h({},Za),{isEsdt:!0}):o===3?R(h({},Za),{isNft:!0}):R(h({},Za),{isEgld:!0})}t();t();t();t();t();j();t();j();t();j();t();Re();var Df=["reDelegateRewards","claimRewards","unBond"],Mf=["wrapEgld","unwrapEgld"],Of=["unStake"],Ff=["unDelegate"];t();t();t();j();t();var Wf=C(require("bignumber.js"));t();t();Re();t();var Hf=C(require("bignumber.js"));t();t();t();function am({tokenId:e,erdLabel:o}){return Boolean(e&&e!==o)}t();var oi=C(require("bignumber.js"));le();t();var im=(e,o)=>{let n=[],r=e.indexOf(o,0);for(;r>=0;)n.push(r),r=e.indexOf(o,r+1);return n};function sm(e){let o=[],n=0;try{if((e==null?void 0:e.startsWith("MultiESDTNFTTransfer"))&&(e==null?void 0:e.includes("@"))){let[,r,a,...p]=e==null?void 0:e.split("@");if(r){let m=new oi.default(a,16).toNumber();if(m>=Number.MAX_SAFE_INTEGER)return[];let d=0;for(let g=0;g<m;g++){let T={type:"nftTransaction",data:"",receiver:r};for(let v=0;v<3;v++){switch(v){case 0:T.token=jn(p[d]),T.data=p[d];break;case 1:{let y=p[d]&&p[d].length?p[d]:"";y&&y!=="00"?T.nonce=y:T.type="esdtTransaction",T.data=`${T.data}@${p[d]}`;break}case 2:T.amount=new oi.default(p[d],16).toString(10),T.data=`${T.data}@${p[d]}`;break;default:break}n=d+1,d++}o[g]=T}let l=o.length!==m,_=o.some(g=>im(g.data,"@").length!==2),u=o.some(g=>g.data.startsWith("@"));if(l||_||u)return[];if(p[n]){let g=p[n];for(let T=n+1;T<p.length;T++)g+="@"+p[T];o[m]={type:"scCall",data:g,receiver:r}}}}}catch(r){return console.error("failed parsing tx",r),o}return o}t();t();t();ce();function Oo(e){let n=Object.getPrototypeOf(e).toPlainObject!=null?e:qn(e),r=R(h({},n.toPlainObject()),{hash:n.getHash().hex(),senderUsername:n.getSenderUsername().valueOf(),receiverUsername:n.getReceiverUsername().valueOf(),status:"pending"});return bn({data:r.data,onlySetGuardian:!0})&&(delete r.senderUsername,delete r.receiverUsername),r}t();var mm=require("@multiversx/sdk-web-wallet-provider");j();t();var pm=C(require("qs"));t();ve();var ur=e=>{let o=new URLSearchParams(e).toString(),{pathname:n,hash:r}=q(),a=o?`?${o}`:"",p=n?`${n}${a}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};gn();t();gn();var $f={search:To()?window.location.search:"",removeParams:[]},cm=(e,o=$f)=>{var m;let n={},r=To()?window.location.search:"",a=(m=o.search)!=null?m:r;if(a){let d=a?new URLSearchParams(a):[];n=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=n[d],delete n[d]}),o.removeParams!=null&&Object.keys(n).forEach(d=>{var _,u;let[l]=d.split("[");(((_=o.removeParams)==null?void 0:_.includes(d))||((u=o.removeParams)==null?void 0:u.includes(l)))&&delete n[d]}),{remainingParams:p,params:n,clearNavigationHistory:()=>ur(n)}};var gr=({removeParams:e,search:o})=>{let n=To()?window.location.search:"",r=o!=null?o:n;if(!r)return{};let a=pm.default.parse(r.replace("?","")),p=Object.keys(a).filter(d=>!e.includes(d)),{remainingParams:m}=cm(p,{search:o,removeParams:e});return ur(m),m};var dm=({transaction:e,search:o})=>gr({removeParams:[...Object.keys(e),mm.WALLET_PROVIDER_CALLBACK_PARAM,ao,Et],search:o});t();t();t();Se();t();Re();t();t();Se();t();var jf=C(require("linkifyjs"));t();j();t();var qf=C(require("bignumber.js"));t();le();t();t();ce();t();ce();t();t();t();Re();t();Re();t();var zf=C(require("bignumber.js"));j();Re();t();Re();t();var _m=require("react");le();t();t();Re();t();t();var Kf=require("@multiversx/sdk-core/out"),Xf=C(require("bignumber.js"));Re();t();le();t();t();le();var hP=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var um=require("react");le();Se();t();var Jf=require("react");Re();var IP=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];xn();t();var fr=e=>e.transactions,Xo=L(fr,e=>e.signedTransactions),gm=L(fr,e=>e.signTransactionsError),hr=L(fr,e=>e.signTransactionsCancelMessage),Tr=e=>o=>Object.entries(o).reduce((n,[r,a])=>(e(a.status)&&(n[r]=a),n),{}),xr=L(Xo,Tr(so)),yr=L(Xo,Tr(No)),Sr=L(Xo,Tr(Ro)),fm=L(Xo,Tr(Xt)),br=L(fr,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:R(h({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>qn(n)))||[]})}),hm=L(Xo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Jn=()=>w(je);t();var wr=require("react");function ni(e,o=[]){let n=(0,wr.useRef)(!0);(0,wr.useEffect)(()=>{n.current?n.current=!1:e()},o)}t();ee();function Zf(){let e=w(Wp),o=K();return{notification:e,clearNotification:()=>o(Ic())}}t();t();t();t();function Zn(){let e=w(xr),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{pendingTransactions:e,pendingTransactionsArray:o,hasPendingTransactions:n}}t();t();t();t();var xm=require("@multiversx/sdk-extension-provider"),ym=require("@multiversx/sdk-hw-provider"),Sm=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),bm=require("@multiversx/sdk-opera-provider"),wm=require("@multiversx/sdk-passkey-provider/out"),ti=require("@multiversx/sdk-web-wallet-provider");j();Po();t();var qe=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Tm=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");ce();t();var vr={},Ir=In;var Qf="/dapp/init",Be=e=>{switch(e==null?void 0:e.constructor){case ti.WalletProvider:return"wallet";case Ir:return"walletconnectv2";case ym.HWProvider:return"ledger";case xm.ExtensionProvider:return"extension";case wm.PasskeyProvider:return"passkey";case Sm.MetamaskProvider:return"metamask";case bm.OperaProvider:return"opera";case Te.CrossWindowProvider:return"crossWindow";case qe.IframeProvider:return"iframe";case In:return"";default:return"extra"}},Ar=e=>new ti.WalletProvider(`${e}${Qf}`),kr=e=>f(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:n,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:n===Zs}}),Ye=e=>`Unable to perform ${e}, Provider not initialized`,In=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Ye("getAccount"))}setAccount(o){throw new Error(Ye(`setAccount: ${o}`))}login(o){throw new Error(Ye(`login with options: ${o}`))}logout(o){throw new Error(Ye(`logout with options: ${o}`))}getAddress(){throw new Error(Ye("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(Ye(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(Ye(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(Ye(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(Ye(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(Ye(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(Ye(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Qn=new In;var ri=Qn,vm=null;function Ie(e){ri=e}function Im(){vm!=null&&(ri=vm)}function Ae(){return ri||Qn}ee();t();t();t();t();t();var Am=require("@lifeomic/axios-fetch"),ai=C(require("axios")),ii=(0,Am.buildAxiosFetch)(ai.default),si=(e,o)=>f(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[a]=yield Promise.all([r]);return{data:a,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function eh(e,o,n){return f(this,null,function*(){try{let r=yield ii(e,h({method:"POST",body:o?JSON.stringify(o):void 0,headers:h({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return si(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function oh(e,o){return f(this,null,function*(){try{let n=yield ii(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return si(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function nh(e,o,n){return f(this,null,function*(){try{let r=yield ii(e,h({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return si(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Io=ai.default.create();Io.get=oh;Io.post=eh;Io.patch=nh;var km=e=>Io.get(e).then(o=>o.data);t();var Yo=e=>{let o=e!=null?e:ir(P.getState());return o.endsWith("/")?o.slice(0,-1):o};t();var Lm=C(require("axios"));function Em(e){return f(this,null,function*(){let{network:{apiAddress:o,apiTimeout:n}}=je(P.getState()),{data:r}=yield Lm.default.get(`${o}/${Ko}/${e}`,{timeout:Number(n)});return r})}t();var Pm=C(require("swr"));var An=({apiEndpoint:e})=>{let o=Yo(),n=e?`${o}/${e}`:null;return(0,Pm.default)(n,km)};var th=e=>{let n=`${Yo()}/${Ko}/${e}?withGuardianInfo=true`;return Io.get(n)},Cm=e=>f(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield th(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var Fo=e=>Cm(e);t();ce();t();t();function Nm(){let e=Ae();return Be(e)}function Ao(e){return Nm()===e}t();Se();var Rm=()=>{let{search:e}=q(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return wn(r)?r:null};function et(){let e=P.getState(),o=Ae(),n=wo(e),r=Mo(e),a=Fp(e);if(!o)throw"provider not initialized";return Ao("ledger")&&r?new Promise(p=>{p(n)}):!Ao("")&&!Ao("wallet")&&!Ao("extra")?o.getAddress():new Promise(p=>{let m=Rm();a!=null&&m&&p(m),r&&p(n),p("")})}t();function Jo(e){let o=P.getState(),n=Cp(o);return e?n&&!isNaN(n)?Math.max(n,e.nonce):e.nonce:n}var Dm=()=>f(void 0,null,function*(){try{let e=yield et();try{let o=yield Fo(e);if(o!=null){let n=R(h({},o),{nonce:Jo(o)});return P.dispatch(_n(n)),n}}catch(o){console.error("Failed getting account ",o)}}catch(e){console.error("Failed getting address ",e)}return null});function Lr(){return f(this,null,function*(){let e=Ae();if(e==null)throw"Provider not initialized";if(!e.isInitialized||e.isInitialized())return Dm();try{if(!e.init)throw"Current provider does not have init() function";return(yield e.init())?Dm():void 0}catch(o){console.error("Failed initializing provider ",o)}})}xn();t();t();t();var rh=C(require("axios"));t();var ih=C(require("axios"));cn();t();j();t();var Mm=C(require("axios"));var Om=e=>f(void 0,null,function*(){let o=ir(P.getState()),n=e.map(a=>a.hash),{data:r}=yield Mm.default.get(`${o}/${vn}`,{params:{hashes:n.join(","),withScResults:!0}});return e.map(({hash:a,previousStatus:p})=>{let m=r.find(d=>(d==null?void 0:d.txHash)===a);return{hash:a,data:m==null?void 0:m.data,invalidTransaction:m==null,status:m==null?void 0:m.status,results:m==null?void 0:m.results,sender:m==null?void 0:m.sender,receiver:m==null?void 0:m.receiver,previousStatus:p,hasStatusChanged:m&&m.status!==p}})});t();var ch=C(require("axios"));t();t();var ph=C(require("axios"));t();var mh=C(require("axios"));t();t();ee();ce();t();t();t();t();Se();var Um=()=>{let{search:e}=q(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var Bm=()=>{var n;let e=Um(),o=Pe(P.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};t();me();le();t();ee();t();var Wm=require("@multiversx/sdk-core");le();ve();t();xn();function Gm(e,o){return e.reduce((r,{status:a,hash:p})=>(p!=null&&!o.includes(p)&&so(a)&&r.push({hash:p,previousStatus:a}),r),[])}t();ee();ce();function Hm({results:e,hash:o,sessionId:n}){let r=e==null?void 0:e.find(a=>(a==null?void 0:a.returnMessage)!=="");P.dispatch(yn({transactionHash:o,sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage,inTransit:!1,serverTransaction:r})),P.dispatch(Yt({sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage}))}t();ee();le();function ci(e){P.dispatch(Yt({sessionId:e,status:"timedOut"}))}var Er={},pi=[];function dh({serverTransaction:e,sessionId:o,customTransactionInformation:n,shouldRefreshBalance:r,isSequential:a}){let{hash:p,status:m,inTransit:d,results:l,invalidTransaction:_,hasStatusChanged:u}=e;try{if(pi.includes(p))return;if(Er[p]>30){ci(o);return}if(_&&!a||so(m)){Er[p]=Er[p]?Er[p]+1:1;return}if(a&&!m){P.dispatch(yn({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}));return}u&&(No(m)&&(n==null?void 0:n.completedTransactionsDelay)!=null?(pi.push(p),setTimeout(()=>P.dispatch(yn({sessionId:o,status:"success",transactionHash:p,inTransit:d,serverTransaction:e})),n==null?void 0:n.completedTransactionsDelay)):P.dispatch(yn({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}))),r||Lr(),Ro(m)&&Hm({sessionId:o,hash:p,results:l})}catch(g){console.error(g),ci(o)}}function Vm(l){return f(this,arguments,function*({sessionId:e,transactionBatch:{transactions:o,customTransactionInformation:n},getTransactionsByHash:r=Om,shouldRefreshBalance:a,isSequential:p,onSuccess:m,onFail:d}){try{if(o==null)return;let _=Gm(o,pi),u=yield r(_);for(let T of u)dh({serverTransaction:T,sessionId:e,customTransactionInformation:n,shouldRefreshBalance:a,isSequential:p});if(u.every(T=>T.status!=="pending")&&!(n!=null&&n.grouping)){if(u.every(y=>y.status==="success"))return m==null?void 0:m(e);if(u.some(y=>y.status==="fail"))return d==null?void 0:d(e)}}catch(_){console.error(_)}})}function lh(){let{pendingTransactionsArray:e}=Zn();function o(n){return f(this,null,function*(){let r=e.filter(([,a])=>{var p;return!((p=a==null?void 0:a.customTransactionInformation)!=null&&p.grouping)}).filter(([a,p])=>a!=null&&so(p.status));if(r.length>0)for(let[a,p]of r)yield Vm(h({sessionId:a,transactionBatch:p},n));n.shouldRefreshBalance&&(yield Lr())})}return o}t();function _h(){var l,_,u;let e=w(fm),o=w(Sr),n=w(yr),r=w(xr),a=((l=Object.keys(r))==null?void 0:l.length)>0,p=!a&&((_=Object.keys(e))==null?void 0:_.length)>0,m=!a&&!p&&((u=Object.keys(o))==null?void 0:u.length)>0,d=!a&&!p&&!m&&Object.keys(n).length>0;return{pending:a,timedOut:p,fail:m,success:d}}t();function uh(){let e=w(Sr),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{failedTransactions:e,failedTransactionsArray:o,hasFailedTransactions:n}}t();le();var gh=()=>{var r,a;let{hasPendingTransactions:e,pendingTransactions:o}=Zn();if(!e)return"";let n=Object.keys(o).sort().reverse();for(let p of n){let d=(a=(r=o[p].transactions)==null?void 0:r.filter(l=>l.status==="pending"))!=null?a:[];if(d.length>0)return d[d.length-1].hash}return""};t();At();var hh=()=>{let e=w(Gp);return e?Math.max(1e3,e/2):9e4};t();var Th=()=>w(gm);t();function ot(){let e=w(Xo),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{signedTransactions:e,signedTransactionsArray:o,hasSignedTransactions:n}}t();function xh(){let e=w(yr),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{successfulTransactions:e,successfulTransactionsArray:o,hasSuccessfulTransactions:n}}t();var jm=C(require("swr"));t();t();var Pr={},mi={setItem:(e,o)=>f(void 0,null,function*(){try{Pr[e]=JSON.stringify(o)}catch(n){console.error("tokenDataStorage unable to serialize",n)}}),getItem:e=>f(void 0,null,function*(){try{return JSON.parse(Pr[e])}catch(o){console.error("tokenDataStorage unable to parse",o)}}),clear:()=>f(void 0,null,function*(){Pr={}}),removeItem:e=>f(void 0,null,function*(){delete Pr[e]})};function $m(e){return f(this,null,function*(){let{apiAddress:o,apiTimeout:n}=xe(P.getState()),r={baseURL:o,timeout:Number(n)},a=yield mi.getItem(e);if(a)return a;let p=yield Io.get(e,r);return yield mi.setItem(e,p.data),p.data})}function yh({tokenId:e}){var g,T,v,y;let{network:o}=Jn(),{isNft:n}=Qa(e),r=e,a=n?Ka:Xa,{data:p,error:m,isLoading:d}=(0,jm.default)(Boolean(r)?`${o.apiAddress}/${a}/${r}`:null,$m);if(!r)return{tokenDecimals:Number(o.decimals),tokenLabel:"",tokenAvatar:""};let l=p?p==null?void 0:p.decimals:Number(o.decimals),_=p?p==null?void 0:p.name:"",u=p?(y=(g=p==null?void 0:p.assets)==null?void 0:g.svgUrl)!=null?y:(v=(T=p==null?void 0:p.media)==null?void 0:T[0])==null?void 0:v.thumbnailUrl:"";return{isLoading:d,tokenDecimals:l,tokenLabel:_,type:p==null?void 0:p.type,tokenAvatar:u,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}t();function Sh(e){return w(o=>Jp(o,e))}t();var nt=require("react");t();function qm({parsedTransactionsByDataField:e,data:o,txInfo:n}){!e||(e[o]=n)}function zm({transactions:e}){let o={},n=[];return!e||e.length===0?{allTransactions:n,parsedTransactionsByDataField:o}:(e.forEach((r,a)=>{let p=r.getData().toString(),m=sm(p);if(m.length>0)m.forEach((d,l)=>{let _={transaction:r,multiTxData:d.data,transactionIndex:l};qm({parsedTransactionsByDataField:o,data:d.data,txInfo:{tokenId:d.token?d.token:"",amount:d.amount?d.amount:"",type:d.type,nonce:d.nonce?d.nonce:"",multiTxData:d.data,receiver:d.receiver}}),n.push(_)});else{let d=r.getData().toString(),{tokenId:l,amount:_}=qa(d);l&&qm({parsedTransactionsByDataField:o,data:d,txInfo:{tokenId:l,amount:_,receiver:r.getReceiver().bech32()}}),n.push({transaction:r,transactionIndex:a,multiTxData:d})}}),{allTransactions:n,parsedTransactionsByDataField:o})}var Km={tokenId:"",amount:"",type:"",multiTxData:"",receiver:""};function di({transactions:e}){let[o,n]=(0,nt.useState)({}),[r,a]=(0,nt.useState)([]);function p(d,l){return o==null?Km:d in o?o[d]:l!=null&&String(l)in o?o[l]:Km}function m(){let{allTransactions:d,parsedTransactionsByDataField:l}=zm({transactions:e});a(d),n(l)}return(0,nt.useEffect)(()=>{m()},[e==null?void 0:e.length]),{parsedTransactionsByDataField:o,getTxInfoByDataField:p,allTransactions:r}}t();var Xm=require("react"),Ym=require("@multiversx/sdk-web-wallet-provider"),Jm=require("@multiversx/sdk-web-wallet-provider"),Zm=C(require("qs"));j();ee();ce();ua();Se();var bh=q();function tt(e){let o=w(xe),n=K(),{shouldFetchWalletUrlOnLoad:r}=w(Ba),{search:a}=r?bh:q();(0,Xm.useEffect)(()=>{if(a!=null){let p=Zm.default.parse(a.replace("?",""));if(p&&ao in p){let m=String(p[ao]),d=new Ym.WalletProvider(`${o.walletAddress}${Qs}`).getTransactionsFromWalletUrl(a);if(p.status==="cancelled"){n(co({sessionId:m,status:"cancelled"})),e(),gr({removeParams:[...Object.keys(_a),Jm.WALLET_PROVIDER_CALLBACK_PARAM,ao,"address"],search:a}),n(So(ho));return}if(d.length>0){n(co({sessionId:m,status:"signed",transactions:d.map(_=>Oo(_))}));let[l]=d;dm({transaction:l,search:a})}}}},[a])}t();var en=require("react"),on=require("@multiversx/sdk-core");t();var kn=e=>An({apiEndpoint:e?`${Ko}/${e}?withGuardianInfo=true`:null});j();Aa();t();t();var Cr=(e,o)=>e?Array.isArray(o)?o.some(n=>e.address===n||e.activeGuardianAddress===n):e.address===o||e.activeGuardianAddress===o:!0;t();function Nr(e){let o=br(P.getState()),n=Object.keys(e).length===(o==null?void 0:o.transactions.length);return e&&(e&&n)}t();t();t();var li=({accountNonce:e,transactionNonce:o})=>o&&o>e?o:e;var Qm=({latestNonce:e,transactions:o})=>o.length===0?o:o.map((n,r)=>{let a=e+r,p=n.getNonce().valueOf(),m=li({accountNonce:a,transactionNonce:p});return n.setNonce(m),n});var Rr=()=>{let e=w(wo),{data:o}=kn(e);return n=>f(void 0,null,function*(){let r=o!=null?o:yield Fo(e),a=Jo(r);return Qm({latestNonce:a,transactions:n})})};t();var rt=({transactions:e,isGuarded:o})=>o?e.length===0?!1:e.every(n=>Boolean(n.getGuardianSignature().toString("hex"))):!0;t();t();t();cn();t();var Ih=C(require("axios"));t();var kh=C(require("axios"));t();cn();t();cn();function _i(e){return js[e]}t();t();t();t();var Lh=require("@multiversx/sdk-opera-provider");t();var Eh=require("@multiversx/sdk-extension-provider");t();Po();function ed(n){return f(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield Te.CrossWindowProvider.getInstance().init(),a=Te.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return a;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}t();t();t();t();var yd=C(xd());var Zo=e=>{if(!e||!(0,yd.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,a,p]=o,m=JSON.parse(zo(p)),d=zo(n);return{ttl:Number(a),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};t();var Ad=require("@multiversx/sdk-native-auth-client");t();var wd=C(require("axios"));t();t();t();function Sd(e){return f(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var bd=(e,o,n,r=0)=>f(void 0,null,function*(){try{return yield e(...n)}catch(a){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Sd(o.delay)),yield bd(e,o,n,r+1)):null}}),Dr=(e,o={retries:5,delay:500})=>(...n)=>f(void 0,null,function*(){return yield bd(e,o,n)});var eT=4,oT=3e4,Mr={current:null},Qo={current:null},nT=Dr((e,o,n)=>f(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield wd.default.get(`${e}/${za}?from=${eT}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[a]=r;return a}));function vd(e,o,n,r){return f(this,null,function*(){if(e==null)throw new Error("missing api url");let a=Date.now();if(Mr.current!=null&&a<Mr.current.timestamp*1e3+oT&&!r)return Mr.current;if(Qo.current!=null)return yield Qo.current;Qo.current=nT(e,o,n);try{let p=yield Qo.current;if(p==null)throw Qo.current=null,new Error("could not get block hash");return Mr.current={hash:p.hash,timestamp:p.timestamp},Qo.current=null,p}catch(p){return Qo.current=null,null}})}t();t();Ct();t();function tT(e){return Object.prototype.toString.call(e)==="[object String]"}var Or=e=>{var n;if(!e||!tT(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,a,p]=o,m=zo(r),d=zo(a),l=Zo(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let _=R(h({},l),{address:m,body:d,signature:p});return(n=l.extraInfo)!=null&&n.timestamp||delete _.extraInfo,_}catch(r){return null}};var fi={isExpired:!1},Id=e=>{if(!e)return fi;let o=Or(e);if(!o)return fi;let n=mn(),{ttl:r,extraInfo:a}=o,p=a==null?void 0:a.timestamp;if(!p)return fi;let m=p+r,d=n>m,l=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};t();Se();var st={origin:q().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},ct=e=>{var n,r,a,p,m,d;return e===!0?st:{origin:(n=e==null?void 0:e.origin)!=null?n:st.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:st.expirySeconds,apiAddress:(a=e==null?void 0:e.apiAddress)!=null?a:st.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:st.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var pt=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:a,extraInfo:p,gatewayUrl:m,extraRequestHeaders:d}=ct(e),l=new Ad.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:a,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:ct,initialize:g=>f(void 0,null,function*(){var v,y;if(!n||!o)return"";let T=()=>l.getCurrentBlockHash();try{let b=(v=g==null?void 0:g.latestBlockInfo)!=null?v:yield vd(n,a,T,g==null?void 0:g.noCache);if(!b)return"";let{hash:S,timestamp:k}=b,D=l.encodeValue(JSON.stringify(h(h({},(y=g==null?void 0:g.extraInfo)!=null?y:p),k?{timestamp:k}:{})));return`${l.encodeValue(o)}.${S}.${r}.${D}`}catch(b){return console.error("Error getting native auth token: ",b.toString()),""}}),getToken:({address:g,token:T,signature:v})=>l.getToken(g,T,v),getTokenExpiration:Id}};var kd=n=>f(void 0,[n],function*({loginToken:e,extraInfoData:o}){if(e==null||Object.keys(o).length===0)return null;let r=Zo(String(e)),_=(r==null?void 0:r.extraInfo)||{},{timestamp:a}=_,p=Eo(_,["timestamp"]);if(!(r&&a!=null))return null;let d={hash:String(r==null?void 0:r.blockHash),timestamp:Number(a)};return yield pt({extraInfo:h(h({},p),o),expirySeconds:r==null?void 0:r.ttl,origin:r==null?void 0:r.origin}).initialize({latestBlockInfo:d})});var Ld=p=>f(void 0,[p],function*({loginToken:e,extraInfoData:o,address:n,signature:r,loginService:a}){let m=yield kd({loginToken:e,extraInfoData:o}),d=o.multisig||o.impersonate||n,l=m!=null?d:n;return m!=null&&a.setLoginToken(m),r&&a.setTokenLoginInfo({signature:r,address:n}),yield Fo(l)});t();var rT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();var aT=require("@multiversx/sdk-passkey-provider/out");j();Se();var Fr=({transactions:e,hasGuardianScreen:o,callbackRoute:n,sessionId:r,walletAddress:a,isGuarded:p})=>{let m=rt({isGuarded:p,transactions:e}),d=e[0].getChainID().valueOf(),l=e[0].getSender().bech32().toString(),_=_i(d),u=a!=null?a:$o[_].walletAddress;return{needs2FaSigning:p?!o&&!m&&r:!1,sendTransactionsToGuardian:()=>{let y=Ar(u),b={[ao]:String(r)},{origin:S}=q(),k=window!=null&&window.location?`${S}${n}`:`${n}`,D=dr({callbackUrl:k,urlParams:b});y.guardTransactions(e,{callbackUrl:encodeURIComponent(D)})},guardTransactions:()=>f(void 0,null,function*(){let y=yield ed({address:l,walletUrl:u});return y==null||y.setShouldShowConsentPopup(!0),yield y==null?void 0:y.guardTransactions(e)})}};t();t();t();var Nd=require("react"),hi=require("@multiversx/sdk-hw-provider");t();me();le();t();function Ed(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function Pd(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=iT(e.path,e.caseSensitive,e.end),a=o.match(n);if(!a)return null;let p=a[0],m=p.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((_,u,g)=>{if(u==="*"){let T=d[g]||"";m=p.slice(0,p.length-T.length).replace(/(.)\/+$/,"$1")}return _[u]=sT(d[g]||"",u),_},{}),pathname:p,pathnameBase:m,pattern:e}}function iT(e,o=!1,n=!0){Ed(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,o?void 0:"i"),r]}function sT(e,o){try{return decodeURIComponent(e)}catch(n){return Ed(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}Wn();ln();dn();ve();var Cd=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&fn({url:e})},cT=e=>{let o=io.local.getItem(Ke.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&(io.local.setItem({key:Ke.logoutEvent,data:e,expires:0}),io.local.removeItem(Ke.logoutEvent))},pT=500;function mt(a,p){return f(this,arguments,function*(e,o,n=Boolean(Bm()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var y;let m="",d=Ae(),l=Be(d),_=l==="wallet",u=((y=d==null?void 0:d.isInitialized)==null?void 0:y.call(d))===!0;if(n&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield et(),cT(m)}catch(b){console.error("error fetching logout address",b)}let g=xo(e),T=q(),v=new URL(decodeURIComponent(g)).pathname;if((Pd(T.pathname,v)||_&&u)&&Cc(),!m&&!u)return Cd({callbackUrl:g,onRedirect:o});try{if(P.dispatch(ae()),_)return setTimeout(()=>{d.logout({callbackUrl:g})},pT);r.hasConsentPopup&&l==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:g})}catch(b){console.error("Logging out error:",b)}finally{_||Cd({callbackUrl:g,onRedirect:o})}})}var Rd=()=>{let e=w(ar),o=w(Mo),n=w(Op),r=Ae(),[a,p]=(0,Nd.useState)(),m=()=>f(void 0,null,function*(){let l=(n==null?void 0:n.index)!=null;try{if(r instanceof hi.HWProvider&&r.isInitialized())return l&&(yield r.setAddressIndex(n.index)),r;let _=new hi.HWProvider;return(yield _.init())?(l&&(yield _.setAddressIndex(n.index)),_):null}catch(_){return console.error("Failed to initialise Ledger Provider"),null}});function d(l){return f(this,null,function*(){let _,u=o&&!(l!=null&&l.isRelogin);try{if(_=yield m(),!_){console.warn("Could not initialise ledger app"),u&&mt(e);return}let g=yield kr(_);return Ie(_),p(g),_}catch(g){console.error("Could not initialise ledger app",g),u&&mt(e)}return null})}return{setLedgerProvider:d,ledgerData:a}};t();var Je=()=>{let e=Ae(),o=Be(e);return{provider:e,providerType:o}};var Dd=()=>{let{provider:e}=Je(),{setLedgerProvider:o}=Rd();return function(){return f(this,null,function*(){let r;try{let p=yield e.getAddress();r=Boolean(p)}catch(p){r=!1}if(r)return e;let a=yield o({isRelogin:!0});return a||e})}};var Ur={},Ti=({isLedger:e=!1,transactionsToSign:o,egldLabel:n,address:r,activeGuardianAddress:a,hasGuardianScreen:p,onCancel:m,onSignTransaction:d,onTransactionsSignError:l,onTransactionsSignSuccess:_,onGetScamAddressData:u})=>{var Ge,Ce,ne,fe;let g=Boolean(a),[T,v]=(0,en.useState)(0),[y,b]=(0,en.useState)(),[S,k]=(0,en.useState)(null),[D,M]=(0,en.useState)(!1),{getTxInfoByDataField:A,allTransactions:F}=di({transactions:a?o==null?void 0:o.map($=>{$.setSender(on.Address.fromBech32(r)),$.setVersion(on.TransactionVersion.withTxOptions()),$.setGuardian(on.Address.fromBech32(a));let Z=h({guarded:!0},e?{hashSign:!0}:{});return $.setOptions(on.TransactionOptions.withOptions(Z)),$}):o}),z=T===F.length-1,ie=F[T],U=(Ge=S==null?void 0:S.transaction)==null?void 0:Ge.getSender().toString(),{data:W}=kn(!U||U===r?null:U),J=()=>f(void 0,null,function*(){var Le;if(ie==null)return;let{transaction:$,multiTxData:Z,transactionIndex:H}=ie,X=$.getData().toString(),O=A($.getData().toString(),Z),{tokenId:Y}=O,Q=$.getReceiver().toString();if(U&&U!==r&&!Cr(W,r))return console.error(On),m==null?void 0:m();let te=r!==Q,ge=Q in Ur;if(Q&&te&&!ge&&u!=null){let He=yield u(Q);Ur=h(h({},Ur),He!=null&&He.scamInfo?{[Q]:He.scamInfo}:{})}let ye=Boolean(Y&&am({tokenId:Y,erdLabel:n}));k({transaction:$,receiverScamInfo:((Le=Ur[Q])==null?void 0:Le.info)||null,transactionTokenInfo:O,isTokenTransaction:ye,dataField:X,transactionIndex:H})});(0,en.useEffect)(()=>{J()},[ie,W]);let N=()=>{v(0),b(void 0),M(!1)},V=()=>f(void 0,null,function*(){let $=Object.values(y!=null?y:{}),Z=rt({isGuarded:g,transactions:$});if(g&&Z){_($),N();return}if(S==null)return;M(e);let H;try{H=yield d(S.transaction)}catch(te){console.error(te,"sign error");let{message:ge}=te,ye=e?Wt(te).errorMessage:null;N(),l(ye!=null?ye:ge);return}if(!H)return;let X={[T]:H},O=y?h(h({},y),X):X;if(b(O),!z){v(te=>te+1),M(!1);return}if(!O)return;let Y=Object.values(O);!rt({isGuarded:g,transactions:Y})&&p||(_(Y),N())}),B=()=>f(void 0,null,function*(){try{if(S==null)return;if(S.transaction.getSignature().toString("hex")&&!z){v(Z=>Z+1);return}yield V()}catch($){console.error("Error during signing transaction"),yield V()}}),se=T===0,re=()=>{se?m==null||m():v($=>$-1)},ue=Boolean(((Ce=S==null?void 0:S.transactionTokenInfo)==null?void 0:Ce.type)&&((ne=S==null?void 0:S.transactionTokenInfo)==null?void 0:ne.multiTxData)&&!(S!=null&&S.dataField.endsWith((fe=S==null?void 0:S.transactionTokenInfo)==null?void 0:fe.multiTxData)));return{allTransactions:F,onSignTransaction:()=>f(void 0,null,function*(){if(ue){v($=>$+1);return}yield B()}),onNext:()=>{v($=>{let Z=$+1;return Z>(F==null?void 0:F.length)?$:Z})},onPrev:()=>{v($=>{let Z=$-1;return Z<0?$:Z})},waitingForDevice:D,onAbort:re,isLastTransaction:z,isFirstTransaction:T===0,hasMultipleTransactions:F.length>1,shouldContinueWithoutSigning:ue,currentStep:T,signedTransactions:y,setSignedTransactions:b,currentTransaction:S}};t();var gt=require("react"),$r=require("@multiversx/sdk-core"),Ci=require("@multiversx/sdk-extension-provider"),Ni=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Ri=require("@multiversx/sdk-passkey-provider/out"),I_=C(x_());j();t();t();var lo=()=>w(qo);t();var bi=()=>w(Pp);t();var wi=()=>w(Dp);t();t();t();t();t();t();var Cn=C(require("react"));var Py=(0,Cn.createContext)({}),K5=P.getState();function Hr(){let e=(0,Cn.useContext)(Py);if(e===void 0||Object.values(e).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return e}t();var y_=C(require("react"));t();var vi=C(require("react")),Cy=C(require("axios"));var Ii=()=>{try{let{loginInfo:e,isLoggedIn:o}=Hr();return R(h({},e),{isLoggedIn:o})}catch(e){let o=w(Pe),n=w(Mo);return R(h({},o),{isLoggedIn:n})}};var Ai=()=>{let{isLoggedIn:e}=Ii();return e};t();var Ny=()=>w(Up);t();var ki=()=>w(Rp);Po();t();t();var w_=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),v_=require("@multiversx/sdk-webview-provider/out/WebviewProvider");me();t();me();ee();le();function S_(e,o=P.dispatch){let n=Or(e);if(n==null)return;let{signature:r,address:a}=n;r&&e&&a&&(o(un({loginToken:e,signature:r,nativeAuthToken:e})),o(pe({address:a,loginMethod:"extra"})))}t();t();ee();function b_(){P.dispatch(Qc())}function Vr(){P.dispatch(Do())}t();ve();t();ee();le();t();t();var Dy=require("@multiversx/sdk-core"),My=C(require("bignumber.js"));j();t();var Oy=C(require("bignumber.js"));j();var We=class{constructor(){this.init=()=>f(this,null,function*(){return yield this._provider.init()});this.login=()=>f(this,null,function*(){var n;let o=yield this._provider.login();return{address:(n=o==null?void 0:o.address)!=null?n:""}});this.logout=()=>f(this,null,function*(){return P.dispatch(ae()),yield this._provider.logout()});this.relogin=()=>f(this,null,function*(){let o=yield this._provider.relogin();return o?(S_(o),Im(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>f(this,null,function*(){let n=yield this._provider.signTransactions(o);return n||(Vr(),this._provider.cancelAction(),null)});this.signTransaction=o=>f(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>f(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>f(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>f(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,w_.providerNotInitializedError)("getAddress");this._provider=v_.WebviewProvider.getInstance({resetStateCallback:()=>P.dispatch(ae())})}static getInstance(){return We._instance||(We._instance=new We),We._instance}getAccount(){var n;let o=this._provider.getAccount();return{address:(n=o==null?void 0:o.address)!=null?n:""}}setAccount(o){this._provider.setAccount(o)}};ee();ce();ve();Se();t();var Nn=require("react"),Li=require("@multiversx/sdk-extension-provider"),Ei=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Pi=require("@multiversx/sdk-passkey-provider/out");Po();ee();var ut=()=>{let e=K(),{provider:o}=Je(),{nonce:n}=lo(),[r,a]=(0,Nn.useState)(null),[p,m]=(0,Nn.useState)(),[d,l]=(0,Nn.useState)([]),_=Rr(),u=w(br),g=w(hr),T=()=>f(void 0,null,function*(){var D,M;let S=Boolean(u==null?void 0:u.transactions),k=(D=u==null?void 0:u.transactions)!=null?D:[];if(S){let A=(M=u==null?void 0:u.customTransactionInformation)!=null&&M.skipUpdateNonces?k:yield _(k);l(A)}m(S)});(0,Nn.useEffect)(()=>{T()},[u,n]);let v=()=>{a(null),e(So(null))},y=S=>{v(),b(S)};tt(y);function b(S){var ie,U,W,J,N,V,B,se,re,ue,G,oe;let k=o instanceof Li.ExtensionProvider,D=o instanceof Pi.PasskeyProvider,M=o instanceof Te.CrossWindowProvider,A=o instanceof qe.IframeProvider,F=o instanceof Ei.MetamaskProvider,z=o instanceof We;e(Do()),e(hn(S)),!(!k&&!M&&!A&&!D&&!F)&&(v(),k&&((U=(ie=Li.ExtensionProvider.getInstance())==null?void 0:ie.cancelAction)==null||U.call(ie)),D&&((J=(W=Pi.PasskeyProvider.getInstance())==null?void 0:W.cancelAction)==null||J.call(W)),F&&((V=(N=Ei.MetamaskProvider.getInstance())==null?void 0:N.cancelAction)==null||V.call(N)),M&&((se=(B=Te.CrossWindowProvider.getInstance())==null?void 0:B.cancelAction)==null||se.call(B)),A&&((ue=(re=qe.IframeProvider.getInstance())==null?void 0:re.cancelAction)==null||ue.call(re)),z&&((oe=(G=We.getInstance())==null?void 0:G.cancelAction)==null||oe.call(G)))}return{error:r,canceledTransactionsMessage:g,clearTransactionStatusMessage:v,onAbort:y,setError:a,hasTransactions:p,transactionsToSign:u&&R(h({},u),{transactions:d})}};var Fy=()=>{let e=K(),o=(0,gt.useRef)("/"),{provider:n}=Je(),r=w(sr),a=Be(n),p=(0,gt.useRef)(!1),m=Rr(),{isGuarded:d,address:l}=lo(),_=w(hr),{transactionsToSign:u,error:g,setError:T,hasTransactions:v,onAbort:y,clearTransactionStatusMessage:b}=ut();tt(y);let S=(0,I_.default)(u==null?void 0:u.transactions.map(U=>U.getSender().toString()).filter(U=>U)),k=S==null?void 0:S[0],{data:D}=kn(!k||k===l?null:k),M=U=>{var re,ue,G,oe,Ue,Ge,Ce,ne,fe,$,Z,H;let W=n instanceof Ci.ExtensionProvider,J=n instanceof Ri.PasskeyProvider,N=n instanceof Te.CrossWindowProvider,V=n instanceof qe.IframeProvider,B=n instanceof Ni.MetamaskProvider,se=n instanceof We;e(Do()),e(hn(U)),p.current=!1,!(!W&&!N&&!V&&!J&&!B)&&(b(),W&&((ue=(re=Ci.ExtensionProvider.getInstance())==null?void 0:re.cancelAction)==null||ue.call(re)),J&&((oe=(G=Ri.PasskeyProvider.getInstance())==null?void 0:G.cancelAction)==null||oe.call(G)),B&&((Ge=(Ue=Ni.MetamaskProvider.getInstance())==null?void 0:Ue.cancelAction)==null||Ge.call(Ue)),N&&((ne=(Ce=Te.CrossWindowProvider.getInstance())==null?void 0:Ce.cancelAction)==null||ne.call(Ce)),V&&(($=(fe=qe.IframeProvider.getInstance())==null?void 0:fe.cancelAction)==null||$.call(fe)),se&&((H=(Z=We.getInstance())==null?void 0:Z.cancelAction)==null||H.call(Z)))},A=(U,W)=>{a==="walletconnectv2"&&(U=ho);let N=U.includes(ho);if(M(W),N){e(So(ho));return}T(U)},F=(U,W,J="")=>{let N={[ao]:W},V=J;if(window!=null&&window.location){let{search:se,origin:re}=q(),ue=new URLSearchParams(se);V=`${re}${J}`,ue.forEach((G,oe)=>{N[oe]=G})}let B=dr({callbackUrl:V,urlParams:N});n.signTransactions(U,{callbackUrl:encodeURIComponent(B)})},z=()=>f(void 0,null,function*(){var Ge,Ce;if(p.current||!u)return;let{sessionId:U,transactions:W,callbackRoute:J,customTransactionInformation:N}=u,{redirectAfterSign:V}=N,B=Xe(),se=J||B,re=B.includes(se),ue=V&&!re;try{if(!(yield(Ge=n==null?void 0:n.init)==null?void 0:Ge.call(n)))return}catch(ne){let fe=(ne==null?void 0:ne.message)||ne||pa;console.error(fe),A(pa,U);return}let G=!N.skipGuardian,oe=N.hasConsentPopup,Ue=n instanceof Te.CrossWindowProvider;try{p.current=!0,Ue&&oe&&n.setShouldShowConsentPopup(!0);let ne=(Ce=yield n.signTransactions(d&&G?W==null?void 0:W.map(O=>(O.setVersion($r.TransactionVersion.withTxOptions()),O.setOptions($r.TransactionOptions.withOptions({guarded:!0})),O)):W))!=null?Ce:[];if(p.current=!1,!Nr(ne))return;let $=Object.values(ne).map(O=>Oo(O)),{needs2FaSigning:Z,guardTransactions:H}=Fr({transactions:ne,sessionId:U,callbackRoute:J,isGuarded:d&&G,walletAddress:r});if(Z){let O=yield H();$=O?O.map(Y=>Oo(Y)):[]}let X={sessionId:U,transactions:$,status:"signed"};ue&&(X.redirectRoute=se),e(co(X))}catch(ne){p.current=!1;let fe=(ne==null?void 0:ne.message)||ne||ks;console.error(fe),e(co({sessionId:U,status:"cancelled"})),A(fe.includes("cancel")?ho:fe,U)}}),ie=()=>f(void 0,null,function*(){if(!u)return;b();let{sessionId:U,transactions:W,callbackRoute:J,customTransactionInformation:N}=u;if(!n){console.error(Ls);return}if(S.length>1)throw new Error("Multiple senders are not allowed");if(k&&k!==l&&!Cr(D,l))return console.error(On),A(On);o.current=J||q().pathname;try{let V=a==="wallet",B=N.skipUpdateNonces?W:yield m(W);if(V)return F(B,U,J);z()}catch(V){let se=(V==null?void 0:V.message)||As;console.error(se),A(se,U),e(co({sessionId:U,status:"cancelled"})),console.error(se,V)}});return(0,gt.useEffect)(()=>{v?ie():p.current=!1},[u,v,D]),{error:g,canceledTransactionsMessage:_,onAbort:y,hasTransactions:v,callbackRoute:o.current,sessionId:u==null?void 0:u.sessionId,transactions:u==null?void 0:u.transactions}};t();ee();le();Wn();Se();t();to();ee();function A_(){let e=K();return o=>{e(Do()),e(hn(o)),e(So(ho))}}function Di(e){let{onCancel:o,verifyReceiverScam:n=!0,hasGuardianScreen:r}=e,{transactionsToSign:a,hasTransactions:p}=ut(),m=w(sr),d=Dd(),l=w(Wa),{account:_}=bi(),{address:u,isGuarded:g,activeGuardianAddress:T}=_,{provider:v,providerType:y}=Je(),b=K(),S=A_(),{transactions:k,sessionId:D,callbackRoute:M,customTransactionInformation:A}=a||{};function F(B){D&&b(co({sessionId:D,status:"cancelled"})),b(ep(B))}let{pathname:z}=q(),ie=M!=null&&z.includes(M),U=!(A!=null&&A.skipGuardian);function W(B){return f(this,null,function*(){if(!Nr(B))return;let{needs2FaSigning:re,guardTransactions:ue}=Fr({transactions:B,sessionId:D,callbackRoute:M,isGuarded:g&&U,walletAddress:m}),G=B.map(oe=>Oo(oe));if(re){let oe=yield ue();G=oe?oe.map(Ue=>Oo(Ue)):[]}!D||(b(co({sessionId:D,status:"signed",transactions:G})),M!=null&&(A==null?void 0:A.redirectAfterSign)&&!ie&&fn({url:M}))})}function J(){o(),S(D)}function N(B){return f(this,null,function*(){let se=y!=="ledger"?v:yield d();return B?yield se.signTransaction(B):null})}let V=Ti({address:u,egldLabel:l,activeGuardianAddress:g&&U?T:void 0,transactionsToSign:p?k:[],onGetScamAddressData:n?Em:null,isLedger:Ao("ledger"),hasGuardianScreen:r,onCancel:J,onSignTransaction:N,onTransactionsSignError:F,onTransactionsSignSuccess:W});return R(h({},V),{callbackRoute:M,waitingForDevice:V.waitingForDevice})}t();function Uy(e){return Di(e)}t();var ft=require("react");t();t();ce();xn();function By({transactionId:e,onSuccess:o,onFail:n,onCancelled:r,onTimedOut:a}){var A;let{signedTransactionsArray:p}=ot(),m=Ao("wallet"),[d]=p.length>0?p[p.length-1]:[],l=(A=e!=null?e:d)!=null?A:null,_=m?l:e,u=w(F=>hm(F,_)),{status:g,transactions:T,errorMessage:v}=u,y=so(g),b=Ro(g),S=Xt(g),k=No(g),D=g==="cancelled";function M(){m&&(b_(),Vr())}return(0,ft.useEffect)(()=>{k&&o&&o(_)},[k]),(0,ft.useEffect)(()=>{b&&n&&(n(_,v),M())},[b]),(0,ft.useEffect)(()=>{D&&r&&(r(_),M())},[D]),(0,ft.useEffect)(()=>{S&&(a?a(_):n==null||n(_,"timeout"))},[S]),_==null?{}:u==null?{errorMessage:"No transaction to track"}:{isPending:y,isSuccessful:k,isFailed:b,isCancelled:D,errorMessage:v,status:g,transactions:T}}t();var jr=require("react"),Wy=(e,o)=>{let[n,r]=(0,jr.useState)(e);return(0,jr.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),n};t();t();var Mi=require("react"),L_=require("@multiversx/sdk-extension-provider");to();me();ce();t();function be(){return Mo(P.getState())}yo();ve();ve();t();t();Po();le();var Me=e=>(Object.values(_e).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=Te.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=qe.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);t();var k_=require("react"),qr=require("@multiversx/sdk-core");ee();var Gy=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},ke=e=>{let o=w(xe),n=w(Vn),r=(0,k_.useRef)(n==null?void 0:n.loginToken),a=Gy(o.apiAddress,e),p=ct(h(h({},e===!0?{}:e),a?{apiAddress:a}:{})),m=Boolean(e),d=pt(p),{address:l}=lo(),_=K(),u=y=>{r.current=y,_(un(h(R(h({},n),{loginToken:y}),a?{nativeAuthConfig:p}:{})))},g=()=>{try{return d.initialize()}catch(y){console.error("Unable to get block. Login failed.",y);return}},T=({address:y,signature:b})=>{let S=r.current;if(!S)throw"Token not found. Call `setLoginToken` first.";if(!m){_(un({loginToken:S,signature:b}));return}let k=d.getToken({address:y,token:S,signature:b});return _(un(h({loginToken:S,signature:b,nativeAuthToken:k},a?{nativeAuthConfig:p}:{}))),k};return{configuration:p,setLoginToken:u,getNativeAuthLoginToken:g,setTokenLoginInfo:T,refreshNativeAuthTokenLogin:S=>f(void 0,[S],function*({signMessageCallback:y,nativeAuthClientConfig:b}){let D=yield pt(b||p).initialize({noCache:Boolean(b)});if(r.current=D,!D)return;let M=new qr.Message({address:new qr.Address(l),data:i.Buffer.from(`${l}${D}`)}),A=yield y(M,{});if(!(A!=null&&A.signature))throw"Message not signed";return T({address:l,signature:i.Buffer.from(A.signature).toString("hex")})})}};var E_=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,p]=(0,Mi.useState)(""),[m,d]=(0,Mi.useState)(!1),l=n!=null,_=ke(n),u=o,g=K(),T=be();function v(){return f(this,null,function*(){if(T)throw new Error(we);Me(),d(!0);let b=L_.ExtensionProvider.getInstance();try{if(!(yield b.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let k=Xe(),D=encodeURIComponent(xo(e!=null?e:k));if(l&&!u&&(u=yield _.getNativeAuthLoginToken(),!u)){console.warn("Fetching block failed. Login cancelled.");return}u&&_.setLoginToken(u);let M=h({callbackUrl:D},u&&{token:u}),{signature:A,address:F}=yield b.login(M);if(Ie(b),!F){d(!1),console.warn("Login cancelled."),p("Login cancelled");return}A&&u&&_.setTokenLoginInfo({signature:A,address:F}),g(pe({address:F,loginMethod:"extension"})),Ee({callbackRoute:e,onLoginRedirect:r,options:{signature:A,address:F}})}catch(S){console.error("error logging in",S),p("error logging in"+S.message)}finally{d(!1)}})}let y=Boolean(a);return[v,{loginFailed:y,error:a,isLoading:m&&!y,isLoggedIn:T&&!y}]};t();var Oi=require("react"),P_=require("@multiversx/sdk-opera-provider");to();me();ce();yo();ve();Se();var C_=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,p]=(0,Oi.useState)(""),[m,d]=(0,Oi.useState)(!1),l=n!=null,_=ke(n),u=o,g=K(),T=be();function v(){return f(this,null,function*(){if(T)throw new Error(we);Me(),d(!0);let b=P_.OperaProvider.getInstance();try{if(!(yield b.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:k}=q(),D=Xe(),M=encodeURIComponent(`${k}${e!=null?e:D}`);if(l&&!u&&(u=yield _.getNativeAuthLoginToken(),!u)){console.warn("Fetching block failed. Login cancelled.");return}u&&_.setLoginToken(u);let A=h({callbackUrl:M},u&&{token:u});yield b.login(A),Ie(b);let{signature:F,address:z}=b.account;if(!z){d(!1),console.warn("Login cancelled.");return}F&&u&&_.setTokenLoginInfo({signature:F,address:z}),g(pe({address:z,loginMethod:"opera"})),Ee({callbackRoute:e,onLoginRedirect:r,options:{signature:F,address:z}})}catch(S){console.error("error loging in",S),p("error logging in"+S.message)}finally{d(!1)}})}let y=Boolean(a);return[v,{loginFailed:y,error:a,isLoading:m&&!y,isLoggedIn:T&&!y}]};t();var Fi=require("react");fa();to();Po();me();ee();ce();yo();Se();var N_=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,hasConsentPopup:a,walletAddress:p})=>{let[m,d]=(0,Fi.useState)(""),[l,_]=(0,Fi.useState)(!1),u=n!=null,g=ke(n),T=o,v=w(xe),y=K(),b=be();function S(){return f(this,null,function*(){if(b)throw new Error(we);Me({skipLoginMethod:"crossWindow"}),_(!0);let D=yield Te.CrossWindowProvider.getInstance().init(),M=Te.CrossWindowProvider.getInstance().setWalletUrl(p!=null?p:v.walletAddress);try{if(!D){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:A,pathname:F}=q(),z=encodeURIComponent(`${A}${e!=null?e:F}`);if(u&&!T&&(T=yield g.getNativeAuthLoginToken(),!T)){console.warn("Fetching block failed. Login cancelled.");return}T&&g.setLoginToken(T);let ie=h({callbackUrl:z},T&&{token:T});(Ys&&u||a)&&M.setShouldShowConsentPopup(!0);let{signature:W,address:J,multisig:N,impersonate:V}=yield M.login(ie);if(Ie(M),!J){_(!1),console.warn("Login cancelled.");return}let B=yield Ld({loginToken:T,extraInfoData:{multisig:N,impersonate:V},address:J,signature:W,loginService:g});if(!B)return;y(pe({address:B.address,loginMethod:"crossWindow"})),y(dc(B.address)),y(_n(R(h({},B),{nonce:Jo(B)}))),Ee({callbackRoute:e,onLoginRedirect:r,options:{signature:W,address:B.address}})}catch(A){console.error("error loging in",A),d("error logging in"+A.message)}finally{_(!1)}})}let k=Boolean(m);return[S,{loginFailed:k,error:m,isLoading:l&&!k,isLoggedIn:b&&!k}]};t();var Ui=require("react");to();ee();t();t();ha();t();t();var Hy=C(require("platform"));gn();t();t();t();t();t();t();t();Fn();ce();t();t();var Vy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();Wn();ln();t();t();t();ee();t();t();var R_=C(require("axios"));function zr(e){return f(this,null,function*(){try{let{data:o}=yield R_.default.get(`${e}/websocket/config`);return`wss://${o.url}`}catch(o){throw console.error(o),new Error("Can not get websocket url")}})}ve();t();t();var F_=C(Br());Fn();var D_,M_,O_,$y=(O_=(M_=(D_=ze.safeWindow)==null?void 0:D_.location)==null?void 0:M_.origin)==null?void 0:O_.includes("localhost"),U_=e=>{if(!(0,F_.default)(e))return Boolean(e);let n=h({},e);return Boolean($y)&&delete n.origin,Object.keys(n).length>0};t();var B_=({maxRetries:e})=>new Promise((o,n)=>{let r=0,a=()=>{let p=$n(P.getState());if(p){o(p);return}if(r<e){r++,setTimeout(a,1e3);return}n(null)};a()});Se();t();var W_=(e,o=["address"])=>{let n=new URL(e),r=new URLSearchParams(n.search);o.forEach(m=>r.delete(m));let a=Array.from(r.values()).length>0?"?":"",p=n.pathname==="/"&&!e.endsWith("/")?"":n.pathname;return n.protocol==="vscode:"?e:`${n.origin}${p}${a}${r.toString()}${n.hash}`};var Kr=({callbackRoute:e,token:o,nativeAuth:n,redirectDelayMilliseconds:r=100,customWalletAddress:a})=>{let[p,m]=(0,Ui.useState)(""),[d,l]=(0,Ui.useState)(!1),_=w(xe),u=K(),g=be(),T=Boolean(n),v=ke(n),y=o;function b(){return f(this,null,function*(){if(g)throw new Error(we);u(Wc(a));try{l(!0);let k=Ar(a!=null?a:_.walletAddress),D=new Date,M=D.setMinutes(D.getMinutes()+3)/1e3,A={data:{},expires:M};if(T&&!y&&(y=yield v.getNativeAuthLoginToken(),!y)){console.warn("Login cancelled.");return}y&&v.setLoginToken(y);let{origin:F}=q(),z=window!=null&&window.location?`${F}${e}`:`${e}`;new URLSearchParams(document==null?void 0:document.location.search).get("address")||u(yc(A));let W=W_(z),J=encodeURIComponent(W),N=R(h({callbackUrl:J},y&&{token:y}),{redirectDelayMilliseconds:r});yield k.login(N)}catch(k){console.error(k),m("error logging in"+k.message)}finally{l(!1)}})}let S=Boolean(p);return[b,{error:p,loginFailed:S,isLoading:d&&!S,isLoggedIn:g&&!S}]};t();var nu=require("react");j();t();t();j();var G_=e=>{var a;let o=w(Vn),n=(a=o==null?void 0:o.loginToken)!=null?a:e;if(!n)return;let r=Zo(n);if(!!r)return r.origin.toLowerCase().startsWith(qs)};t();t();t();var jy=C(require("bignumber.js"));t();t();t();var Bo=C(require("react")),Z_=require("react"),Q_=require("react"),qi=C(require("classnames")),eu=require("react-dom");j();t();var j_=C(require("react"));t();var ht=C(require("react"));t();gn();var H_=()=>!To();var zy=()=>f(void 0,null,function*(){return yield Promise.resolve().then(()=>(Wi(),Bi))}),Ky=()=>(Wi(),Ze(Bi)).default,Gi=H_();function $_({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,a]=ht.default.useState(Gi?void 0:Ky()),[p,m]=ht.default.useState(Gi||n==null?void 0:n()),d=()=>f(this,null,function*(){(e?e():zy()).then(l=>a(l.default)),o==null||o().then(l=>m(l.default))});return(0,ht.useEffect)(()=>{Gi&&d()},[]),{globalStyles:r,styles:p}}function Uo(e,o){return n=>{let{globalStyles:r,styles:a}=$_({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return j_.default.createElement(e,R(h({},n),{globalStyles:r!=null?r:{},styles:a!=null?a:{}}))}}t();var z_=C(require("react")),K_=C(require("classnames"));var Yy=({className:e,children:o,styles:n})=>z_.default.createElement("div",{className:(0,K_.default)(n==null?void 0:n.dappModalBody,e)},o),Hi=Uo(Yy,{ssrStyles:()=>Promise.resolve().then(()=>(Lo(),ko)),clientStyles:()=>(Lo(),Ze(ko)).default});t();var Vi=C(require("react")),X_=C(require("classnames"));var Jy=({visible:e,customFooter:o,className:n,footerText:r,styles:a})=>e?Vi.default.createElement("div",{className:(0,X_.default)(a==null?void 0:a.dappModalFooter,n)},o!=null?o:Vi.default.createElement("div",null,r)):null,$i=Uo(Jy,{ssrStyles:()=>Promise.resolve().then(()=>(Lo(),ko)),clientStyles:()=>(Lo(),Ze(ko)).default});t();var Rn=C(require("react")),Y_=require("@fortawesome/free-solid-svg-icons"),J_=require("@fortawesome/react-fontawesome"),Tt=C(require("classnames"));var Zy=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:a,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?n?Rn.default.createElement("div",{className:(0,Tt.default)(l==null?void 0:l.dappModalHeader,r)},n):Rn.default.createElement("div",{className:(0,Tt.default)(l==null?void 0:l.dappModalHeader,r)},Rn.default.createElement("div",{className:(0,Tt.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Rn.default.createElement("button",{onClick:m,className:(0,Tt.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,a)},Rn.default.createElement(J_.FontAwesomeIcon,{size:"lg",icon:Y_.faTimes}))):null,ji=Uo(Zy,{ssrStyles:()=>Promise.resolve().then(()=>(Lo(),ko)),clientStyles:()=>(Lo(),Ze(ko)).default});var Qy={showHeader:!0,showFooter:!1,headerText:"",footerText:""},eS=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:a=Qy,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[u,g]=(0,Z_.useState)(!1);if((0,Q_.useEffect)(()=>{g(!0)},[]),!l)return null;let{showHeader:T,showFooter:v,headerText:y,footerText:b,modalDialogClassName:S="dapp-modal-dialog",modalContentClassName:k="dapp-modal-dialog-content",modalHeaderClassName:D="dapp-modal-dialog-header",modalHeaderTextClassName:M="dapp-modal-dialog-header-text",modalCloseButtonClassName:A="dapp-modal-dialog-close-button",modalBodyClassName:F="dapp-modal-dialog-content-body",modalFooterClassName:z="dapp-modal-dialog-footer",customModalHeader:ie,customModalFooter:U}=a,W=J=>{J.key==="Escape"&&r&&(m==null||m())};return Bo.default.createElement(Bo.default.Fragment,null,u&&(0,eu.createPortal)(Bo.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,qi.default)(S,_==null?void 0:_.dappModal,n),"data-testid":e,onKeyDown:W},Bo.default.createElement("div",{className:(0,qi.default)(_==null?void 0:_.dappModalContent,k)},Bo.default.createElement(ji,{visible:T,headerText:y,customHeader:ie,className:D,headerTextClassName:M,closeButtonClassName:A,onHide:m}),Bo.default.createElement(Hi,{className:F},o),Bo.default.createElement($i,{visible:v,customFooter:U,footerText:b,className:z}))),d!=null?d:document==null?void 0:document.body))},oS=Uo(eS,{ssrStyles:()=>Promise.resolve().then(()=>(Lo(),ko)),clientStyles:()=>(Lo(),Ze(ko)).default});t();t();var Xr=require("react"),ou=e=>{let[o,n]=(0,Xr.useState)(!1),r=()=>{n(!0)},a=()=>{n(!1)};return(0,Xr.useEffect)(()=>{(e==null?void 0:e.visible)===!0?r():(e==null?void 0:e.visible)===!1&&a()},[e==null?void 0:e.visible]),{handleShowModal:r,handleHideModal:a,showModal:o}};t();var tu=({hideButtonWhenModalOpens:e,onContentHide:o,onContentShow:n,onModalCloses:r,onModalOpens:a,token:p,wrapContentInsideModal:m})=>{let d=Ai(),[l,_]=(0,nu.useState)(!1),{handleShowModal:u,handleHideModal:g,showModal:T}=ou(),v=G_(p),y=!e||!l,b=()=>{_(!1),o==null||o(),m?(g(),r==null||r()):r&&(console.warn('Deprecated: "onModalCloses" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentHide" instead.'),r())};return{disabledConnectButton:v,handleCloseModal:b,handleOpenModal:()=>{if(d)throw new Error(we);if(l)return b();_(!0),n==null||n(),m?(u(),a==null||a()):a&&(console.warn('Deprecated: "onModalOpens" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentShow" instead.'),a())},shouldRenderButton:y,showContent:l,showModal:T}};t();var Dn=require("react"),zi=require("@multiversx/sdk-hw-provider");to();me();ee();ce();yo();t();var nn=require("react"),nS=10,ru=()=>{let[e,o]=(0,nn.useState)(""),[n,r]=(0,nn.useState)(!1),[a,p]=(0,nn.useState)(0),[m,d]=(0,nn.useState)([]),[l,_]=(0,nn.useState)(null),[u,g]=(0,nn.useState)(!1);return{accounts:m,defaultAddressesPerPage:nS,error:e,isLoading:n,onGoToNextPage:()=>{_(null),p(S=>S+1)},onGoToPrevPage:()=>{_(null),p(S=>S===0?0:S-1)},onGoToSpecificPage:S=>{_(null),p(S)},onSelectAddress:S=>{_(S)},selectedAddress:l,setAccounts:d,setError:o,setIsLoading:r,setShowAddressList:g,showAddressList:u,startIndex:a}};var xt="Check if the MultiversX App is open on Ledger",au=({callbackRoute:e,token:o,addressesPerPage:n,nativeAuth:r,onLoginRedirect:a})=>{let p=w(Np),m=Ae(),d=K(),l=be(),_=r!=null,u=ke(r),g=o,{accounts:T,setAccounts:v,isLoading:y,setIsLoading:b,setShowAddressList:S,showAddressList:k,startIndex:D,selectedAddress:M,onGoToPrevPage:A,onGoToNextPage:F,onGoToSpecificPage:z,onSelectAddress:ie,error:U,setError:W,defaultAddressesPerPage:J}=ru(),N=n!=null?n:J,[V,B]=(0,Dn.useState)(""),[se,re]=(0,Dn.useState)(!1),ue=({address:H,index:X,signature:O})=>{d(xc({index:X,loginType:"ledger"})),O&&u.setTokenLoginInfo({signature:O,address:H}),d(pe({address:H,loginMethod:"ledger"})),Ee({callbackRoute:e,onLoginRedirect:a,options:{address:H,signature:O}})},G=(H,X="")=>{var O;if(y){let{errorMessage:Y,defaultErrorMessage:Q}=Wt(H),te=(O=Y!=null?Y:Q)!=null?O:xt;W(`${te}.${X}`),b(!1),d(va(null))}},oe=()=>f(void 0,null,function*(){try{if(m instanceof zi.HWProvider&&m.isInitialized())return m.isConnected()}catch(H){G(H)}return!1}),Ue=()=>f(void 0,null,function*(){if(yield oe()){W(""),b(!1);return}try{let X=new zi.HWProvider;(yield X.init())&&Ie(X),W(""),b(!1)}catch(X){G(X)}}),Ge=()=>f(void 0,null,function*(){let H=yield oe();if(!M||!H)return G(xt);let{index:X}=M;if(_&&!g&&(g=yield u.getNativeAuthLoginToken(),!g)){console.warn("Fetching block failed. Login cancelled.");return}if(g){u.setLoginToken(g);try{let O=yield m.tokenLogin({token:i.Buffer.from(`${g}{}`),addressIndex:X});ue({address:O.address,index:X,signature:O.signature.toString("hex")})}catch(O){G(O,". Update MultiversX App to continue.")}}else try{let{address:O}=yield m.login({addressIndex:X});ue({address:O,index:X})}catch(O){return G(O),!1}return!0}),Ce=()=>f(void 0,null,function*(){try{if(b(!0),M==null)return!1;d(p?lc(M):va(R(h({},M),{version:V,hasContractDataEnabled:se}))),b(!1),yield Ge()}catch(H){G(H)}return S(!1),!0}),ne=()=>f(void 0,null,function*(){if(!(yield oe()))return G(U);try{b(!0);let X=yield m.getAccounts(D,N),O=yield kr(m);B(O.version),re(O.dataEnabled),v(X),b(!1)}catch(X){G(X)}}),fe=()=>f(void 0,null,function*(){if(l)throw new Error(we);Me(),W("");try{if(b(!0),!(yield oe()))return G(xt);if(p!=null){if(!M)return G(xt);let{address:X}=yield m.login({addressIndex:M.index.valueOf()});if(!X)return G("Login cancelled.");d(pe({address:X,loginMethod:"ledger"})),Ee({callbackRoute:e,onLoginRedirect:a})}else T!=null&&T.length||(yield ne()),S(!0);b(!1)}catch(H){G(H)}}),$=()=>f(void 0,null,function*(){try{let H=yield oe();if(H||(yield Ue()),H=yield oe(),!H)return G(xt);(T.length===0||D>=0)&&(yield ne())}catch(H){G(H)}});(0,Dn.useEffect)(()=>{$()},[D,k,m]),(0,Dn.useEffect)(()=>{(T==null?void 0:T.length)>0&&!k&&S(!0)},[T]);let Z=Boolean(U);return[fe,{loginFailed:Z,isLoggedIn:l&&!Z,error:U,isLoading:y&&!Z},{accounts:T,showAddressList:k,startIndex:D,selectedAddress:M,version:V,contractDataEnabled:se,onGoToPrevPage:A,onGoToNextPage:F,onGoToSpecificPage:z,onSelectAddress:ie,onConfirmSelectedAddress:Ce}]};t();var iu=e=>{var n;let o=w(zp);return Kr(R(h({},e),{customWalletAddress:(n=e.customWalletAddress)!=null?n:o}))};t();var Oe=require("react");me();ee();ce();yo();Se();var su=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,logoutRoute:a,customRequestMethods:p=[]})=>{var X;let m=K(),d=U_(n),l=ke(d?n:!1),_=o,[u,g]=(0,Oe.useState)(""),[T,v]=(0,Oe.useState)(""),[y,b]=(0,Oe.useState)(!0),[S,k]=(0,Oe.useState)([]),[D,M]=(0,Oe.useState)(null),{provider:A}=Je(),F=w(Hp),z=w(Vp),ie=w($p),U=w(jp),W=w(ar),J=w(Mp),N=(0,Oe.useRef)(A),V=(0,Oe.useRef)(!1),B=(0,Oe.useRef)(!1),se=(X=a!=null?a:W)!=null?X:"/",re=[vr.CANCEL_ACTION,...p];o&&re.push(vr.SIGN_LOGIN_TOKEN),d&&re.push(vr.SIGN_NATIVE_AUTH_TOKEN);let ue=y?"":`${U}?wallet-connect=${encodeURIComponent(T)}`,G=Boolean(u),oe=be(),Ue=()=>{mt(se)},Ge=O=>{console.log("WalletConnect Session Event: ",O)},Ce=()=>f(void 0,null,function*(){var O,Y,Q,te;try{if(V.current||N.current==null)return;if(!B.current){try{yield(O=N.current)==null?void 0:O.logout()}catch(Yr){console.warn("Unable to logout")}return}let ge=yield(Q=(Y=N.current)==null?void 0:Y.getAddress)==null?void 0:Q.call(Y);if(!ge){console.warn("Login cancelled.");return}let ye=yield(te=N.current)==null?void 0:te.getSignature(),Le={address:ge,loginMethod:"walletconnectv2"},He={logoutRoute:se,loginType:"walletconnectv2",callbackRoute:e!=null?e:q().href};m(Tc(He)),ye&&l.setTokenLoginInfo({signature:ye,address:ge}),m(pe(Le)),Ee({callbackRoute:e,onLoginRedirect:r,options:{address:ge,signature:ye}})}catch(ge){g("User rejected connection proposal"),console.error(ge)}}),ne=()=>f(void 0,null,function*(){var Y,Q,te,ge,ye;if(Be(N.current)==="walletconnectv2")try{((ge=(te=(Q=(Y=N.current)==null?void 0:Y.walletConnector)==null?void 0:Q.session)==null?void 0:te.getAll())!=null?ge:[]).length>0&&(yield(ye=N.current)==null?void 0:ye.logout()),N.current=Qn,M(null)}catch(Le){console.warn("Unable to logout")}}),fe=O=>f(void 0,null,function*(){var Y,Q,te;if(!F||!z){g("Invalid WalletConnect setup");return}if(!O||!O.topic){g("Expired connection");return}try{if((N.current?Be(N.current):!1)!=="walletconnectv2"){yield Z();return}if(b(!0),yield ne(),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}_&&l.setLoginToken(_),yield Z(!1);let{approval:ye}=yield(Y=N.current)==null?void 0:Y.connect({topic:O.topic,methods:re});try{yield(Q=N.current)==null?void 0:Q.login({approval:ye,token:_})}catch(Le){console.error("User rejected existing connection proposal",Le),g("User rejected existing connection proposal"),b(!0),yield Z()}}catch(ge){console.error("Unable to connect to existing session",ge),g("Unable to connect to existing session")}finally{k((te=N.current)==null?void 0:te.pairings)}}),$=O=>f(void 0,null,function*(){var Y,Q;try{O&&(yield(Y=N.current)==null?void 0:Y.logout({topic:O}))}catch(te){console.error("Unable to remove existing pairing",te),g("Unable to remove existing pairing")}finally{let te=yield(Q=N.current)==null?void 0:Q.getPairings();k(te)}});function Z(O=!0){return f(this,null,function*(){var He,Yr,Qi;Me();let Y=yield B_({maxRetries:15});if(!Y){console.error("Invalid chainID"),g("Invalid chainID");return}if(!z||!F){console.error("Invalid WalletConnect setup"),g("Invalid WalletConnect setup");return}let Q=be(),te=B.current===!1&&!Q,ge=(Yr=(He=N.current)==null?void 0:He.isInitialized)==null?void 0:Yr.call(He);if(V.current||te||ge)return;if(V.current=!0,(Qi=N.current)!=null&&Qi.walletConnector){yield N.current.init(),M(N.current),V.current=!1,O&&(yield H());return}let ye={onClientLogin:Ce,onClientLogout:Ue,onClientEvent:Ge},Le=new Ir(ye,Y,F,z,ie);yield Le.init(),M(Le),N.current=Le,V.current=!1,O&&(k(Le.pairings),yield H())})}function H(){return f(this,null,function*(){var O,Y;if(!!N.current){if(!F||!z){g("Invalid WalletConnect setup");return}try{if(!B.current)return;let{uri:Q,approval:te}=yield(O=N.current)==null?void 0:O.connect({methods:re});if(!Boolean(Q))return;if(v(Q),(ie==null?void 0:ie.logger)==="debug"&&console.log("WalletConnect uri: ",Q),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}if(_&&l.setLoginToken(_),(N.current?Be(N.current):!1)!=="walletconnectv2"){b(!0),yield Z();return}try{yield(Y=N.current)==null?void 0:Y.login({approval:te,token:_})}catch(Le){console.error("User rejected connection proposal",Le),g("User rejected connection proposal"),b(!0)}}catch(Q){console.error("Unable to connect",Q)}}})}return ni(()=>{N.current=A},[A]),(0,Oe.useEffect)(()=>(B.current=!0,()=>{B.current=!1}),[]),(0,Oe.useEffect)(()=>{b(!T)},[T]),(0,Oe.useEffect)(()=>{if(!D)return;(Boolean(D.session)||J==="walletconnectv2")&&oe&&Ie(D)},[D,oe]),[Z,{error:u,loginFailed:G,isLoading:y&&!G,isLoggedIn:oe&&!G},{uriDeepLink:ue,walletConnectUri:T,cancelLogin:ne,connectExisting:fe,removeExistingPairing:$,wcPairings:S}]};t();var Ki=require("react"),cu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");to();me();ce();yo();ve();ve();var pu=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,p]=(0,Ki.useState)(""),[m,d]=(0,Ki.useState)(!1),l=n!=null,_=ke(n),u=o,g=K(),T=be();function v(){return f(this,null,function*(){if(T)throw new Error(we);Me(),d(!0);let b=cu.MetamaskProvider.getInstance();try{if(!(yield b.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let k=Xe(),D=encodeURIComponent(xo(e!=null?e:k));if(l&&!u&&(u=yield _.getNativeAuthLoginToken(),!u)){console.warn("Fetching block failed. Login cancelled.");return}u&&_.setLoginToken(u);let M=h({callbackUrl:D},u&&{token:u});yield b.login(M),Ie(b);let{signature:A,address:F}=b.account;if(!F){d(!1),console.warn("Login cancelled."),p("Login cancelled");return}A&&u&&_.setTokenLoginInfo({signature:A,address:F}),g(pe({address:F,loginMethod:"metamask"})),Ee({callbackRoute:e,onLoginRedirect:r,options:{signature:A,address:F}})}catch(S){console.error("error logging in",S),p("error logging in"+S.message)}finally{d(!1)}})}let y=Boolean(a);return[v,{loginFailed:y,error:a,isLoading:m&&!y,isLoggedIn:T&&!y}]};t();var Xi=require("react"),Yi=require("@multiversx/sdk-passkey-provider/out");to();me();ce();yo();ve();ve();var mu=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r})=>{let[a,p]=(0,Xi.useState)(""),[m,d]=(0,Xi.useState)(!1),l=n!=null,_=ke(n),u=o,g=K(),T=be();function v(){return f(this,null,function*(){if(T)throw new Error(we);Me(),d(!0);let S=Yi.PasskeyProvider.getInstance();try{if(!(yield S.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let D=Xe(),M=encodeURIComponent(xo(e!=null?e:D));if(l&&!u&&(u=yield _.getNativeAuthLoginToken(),!u)){console.warn("Fetching block failed. Login cancelled.");return}u&&_.setLoginToken(u);let A=h({callbackUrl:M},u&&{token:u});yield S.login(A),Ie(S);let{signature:F,address:z}=S.account;if(!z){d(!1),console.warn("Login cancelled."),p("Login cancelled");return}F&&u&&_.setTokenLoginInfo({signature:F,address:z}),g(pe({address:z,loginMethod:"passkey"})),Ee({callbackRoute:e,onLoginRedirect:r,options:{signature:F,address:z}})}catch(k){console.error("error logging in",k),p("Error logging in: "+k.message)}finally{d(!1)}})}let y=S=>f(void 0,null,function*(){let k=Yi.PasskeyProvider.getInstance();return yield k.init(),yield k.createAccount({walletName:S})}),b=Boolean(a);return[v,y,{loginFailed:b,error:a,isLoading:m&&!b,isLoggedIn:T&&!b}]};t();t();var yt=require("react");function tS(e){let[o,n]=(0,yt.useState)(),[r,a]=(0,yt.useState)();function p(){return f(this,null,function*(){try{let m=yield zr(e);n(m)}catch(m){a(m)}})}return(0,yt.useEffect)(()=>{p()},[]),{data:o,error:r,getUrl:p}}t();var Ji=require("react");t();var Wo=require("react"),_u=require("socket.io-client");ee();t();var Fe={current:null,status:"not_initialized"};var rS=3e3,aS=3,du=500,lu=1e3,iS="batchUpdated",sS="connect",cS="disconnect";function uu(){let e=(0,Wo.useRef)(null),o=(0,Wo.useRef)(null),{address:n}=lo(),r=K(),{network:a}=Jn(),p=_=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{r(_c(_))},lu)},m=_=>{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{r(uc(_))},lu)},d=()=>{var _;(_=Fe.current)==null||_.close(),Fe.current=null,Fe.status="not_initialized",e.current&&clearTimeout(e.current)},l=(0,Wo.useCallback)(Dr(()=>f(this,null,function*(){var u;if(!n)return;Fe.status="pending";let _=(u=a.websocketUrl)!=null?u:yield zr(a.apiAddress);if(_==null){console.warn("Can not get websocket url");return}Fe.current=(0,_u.io)(_,{forceNew:!0,reconnectionAttempts:aS,timeout:rS,query:{address:n}}),Fe.status="completed",Fe.current.onAny(p),Fe.current.on(iS,m),Fe.current.on(sS,()=>{console.log("Websocket connected.")}),Fe.current.on(cS,()=>{n&&(console.warn("Websocket disconnected. Trying to reconnect..."),setTimeout(()=>{var g;n&&(console.log("Websocket reconnecting..."),(g=Fe.current)==null||g.connect())},du))})}),{retries:2,delay:du}),[n]);(0,Wo.useEffect)(()=>{var _;if(n&&Fe.status==="not_initialized"&&!((_=Fe.current)!=null&&_.active)){l();return}n||d()},[n,l]),(0,Wo.useEffect)(()=>()=>{d()},[])}function pS(e,o){uu();let n=ki(),r=wi();(0,Ji.useEffect)(()=>{let a=n==null?void 0:n.message;a&&e(a)},[e,n]),(0,Ji.useEffect)(()=>{let a=r==null?void 0:r.data;a&&(o==null||o(a))},[o,r])}t();t();var Zi=require("react");le();var gu=()=>{let e=w(pr),o=w(Ga),{signedTransactions:n}=ot(),r=(0,Zi.useMemo)(()=>e.map(p=>{var d,l,_,u,g;let m=(d=n[p.toastId])==null?void 0:d.status;return{sessionId:p.toastId,baseTransactionsInfo:(l=o[p.toastId])!=null?l:{},customTransactionsInfo:(g=(u=(_=n[p.toastId])==null?void 0:_.customTransactionInformation)==null?void 0:u.sessionInformation)!=null?g:{},status:m,isPending:m!=="success"&&m!=="fail"&&m!=="cancelled"}}),[e,n,o]),a=(0,Zi.useMemo)(()=>r.filter(p=>p.isPending),[r]);return{transactionsToastsInfo:r,pendingTransactionsToastsInfo:a}};t();var fu=()=>{let e=w(Xp),o=w(pr);return{customToasts:e,transactionToasts:o}};t();t();var xu=C(require("swr"));t();t();t();t();var hu=C(require("axios"));function Tu(e=zn){let n=`${Yo()}/${e}`;return hu.default.get(n)}t();function mS(){let e=r=>Tu(r).then(a=>a.data),{data:o,error:n}=(0,xu.default)(zn,e);return{price:o==null?void 0:o.price,error:n}}0&&(module.exports={useCheckTransactionStatus,useCrossWindowLogin,useDebounce,useExtensionLogin,useGetAccount,useGetAccountInfo,useGetAccountProvider,useGetActiveTransactionsStatus,useGetBatchWebsocketEvent,useGetEgldPrice,useGetFailedTransactions,useGetIsLoggedIn,useGetIsWalletConnectV2Initialized,useGetLastPendingTransactionHash,useGetLoginInfo,useGetModalLoginMethods,useGetNetworkConfig,useGetNotification,useGetPendingTransactions,useGetPollingInterval,useGetSignTransactionsError,useGetSignedTransactions,useGetSuccessfulTransactions,useGetToasts,useGetTokenDetails,useGetTransactionDisplayInfo,useGetWebsocketEvent,useGetWebsocketUrl,useLedgerLogin,useMetamaskLogin,useOperaLogin,useParseMultiEsdtTransferData,useParseSignedTransactions,usePasskeyLogin,useRegisterWebsocketListener,useSignMultipleTransactions,useSignTransactions,useSignTransactionsCommonData,useSignTransactionsWithDevice,useSignTransactionsWithLedger,useTrackTransactionStatus,useTransactionsToasts,useUpdateEffect,useWalletConnectV2Login,useWebWalletLogin,useXaliasLogin});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
