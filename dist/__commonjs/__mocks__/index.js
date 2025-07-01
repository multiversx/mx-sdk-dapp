"use strict";var Wu=Object.create;var Xn=Object.defineProperty,Gu=Object.defineProperties,Hu=Object.getOwnPropertyDescriptor,Vu=Object.getOwnPropertyDescriptors,$u=Object.getOwnPropertyNames,Ct=Object.getOwnPropertySymbols,qu=Object.getPrototypeOf,ta=Object.prototype.hasOwnProperty,es=Object.prototype.propertyIsEnumerable;var Qi=(e,o,n)=>o in e?Xn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,f=(e,o)=>{for(var n in o||(o={}))ta.call(o,n)&&Qi(e,n,o[n]);if(Ct)for(var n of Ct(o))es.call(o,n)&&Qi(e,n,o[n]);return e},I=(e,o)=>Gu(e,Vu(o));var ra=e=>typeof e=="symbol"?e:e+"",Me=(e,o)=>{var n={};for(var r in e)ta.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Ct)for(var r of Ct(e))o.indexOf(r)<0&&es.call(e,r)&&(n[r]=e[r]);return n};var b=(e,o)=>()=>(e&&(o=e(e=0)),o);var A=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Ze=(e,o)=>{for(var n in o)Xn(e,n,{get:o[n],enumerable:!0})},os=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of $u(o))!ta.call(e,c)&&c!==n&&Xn(e,c,{get:()=>o[c],enumerable:!(r=Hu(o,c))||r.enumerable});return e};var w=(e,o,n)=>(n=e!=null?Wu(qu(e)):{},os(o||!e||!e.__esModule?Xn(n,"default",{value:e,enumerable:!0}):n,e)),Oe=e=>os(Xn({},"__esModule",{value:!0}),e);var g=(e,o,n)=>new Promise((r,c)=>{var p=l=>{try{d(n.next(l))}catch(_){c(_)}},m=l=>{try{d(n.throw(l))}catch(_){c(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var rs=A(Nt=>{"use strict";t();Nt.byteLength=zu;Nt.toByteArray=Xu;Nt.fromByteArray=Zu;var Be=[],ye=[],ju=typeof Uint8Array!="undefined"?Uint8Array:Array,aa="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ro=0,ns=aa.length;Ro<ns;++Ro)Be[Ro]=aa[Ro],ye[aa.charCodeAt(Ro)]=Ro;var Ro,ns;ye["-".charCodeAt(0)]=62;ye["_".charCodeAt(0)]=63;function ts(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function zu(e){var o=ts(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Ku(e,o,n){return(o+n)*3/4-n}function Xu(e){var o,n=ts(e),r=n[0],c=n[1],p=new ju(Ku(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=ye[e.charCodeAt(l)]<<18|ye[e.charCodeAt(l+1)]<<12|ye[e.charCodeAt(l+2)]<<6|ye[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ye[e.charCodeAt(l)]<<2|ye[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ye[e.charCodeAt(l)]<<10|ye[e.charCodeAt(l+1)]<<4|ye[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Ju(e){return Be[e>>18&63]+Be[e>>12&63]+Be[e>>6&63]+Be[e&63]}function Yu(e,o,n){for(var r,c=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Ju(r));return c.join("")}function Zu(e){for(var o,n=e.length,r=n%3,c=[],p=16383,m=0,d=n-r;m<d;m+=p)c.push(Yu(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],c.push(Be[o>>2]+Be[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],c.push(Be[o>>10]+Be[o>>4&63]+Be[o<<2&63]+"=")),c.join("")}});var as=A(ia=>{t();ia.read=function(e,o,n,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,_=l>>1,T=-7,u=n?c-1:0,x=n?-1:1,P=e[o+u];for(u+=x,p=P&(1<<-T)-1,P>>=-T,T+=d;T>0;p=p*256+e[o+u],u+=x,T-=8);for(m=p&(1<<-T)-1,p>>=-T,T+=r;T>0;m=m*256+e[o+u],u+=x,T-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(P?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(P?-1:1)*m*Math.pow(2,p-r)};ia.write=function(e,o,n,r,c,p){var m,d,l,_=p*8-c-1,T=(1<<_)-1,u=T>>1,x=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,P=r?0:p-1,k=r?1:-1,E=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=T):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+u>=1?o+=x/l:o+=x*Math.pow(2,1-u),o*l>=2&&(m++,l/=2),m+u>=T?(d=0,m=T):m+u>=1?(d=(o*l-1)*Math.pow(2,c),m=m+u):(d=o*Math.pow(2,u-1)*Math.pow(2,c),m=0));c>=8;e[n+P]=d&255,P+=k,d/=256,c-=8);for(m=m<<c|d,_+=c;_>0;e[n+P]=m&255,P+=k,m/=256,_-=8);e[n+P-k]|=E*128}});var Ts=A(rn=>{"use strict";t();var sa=rs(),tn=as(),is=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;rn.Buffer=h;rn.SlowBuffer=rg;rn.INSPECT_MAX_BYTES=50;var Rt=2147483647;rn.kMaxLength=Rt;h.TYPED_ARRAY_SUPPORT=Qu();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Qu(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function Qe(e){if(e>Rt)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,h.prototype),o}function h(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return da(e)}return ps(e,o,n)}h.poolSize=8192;function ps(e,o,n){if(typeof e=="string")return og(e,o);if(ArrayBuffer.isView(e))return ng(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Fe(e,ArrayBuffer)||e&&Fe(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Fe(e,SharedArrayBuffer)||e&&Fe(e.buffer,SharedArrayBuffer)))return pa(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return h.from(r,o,n);var c=tg(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return h.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}h.from=function(e,o,n){return ps(e,o,n)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function ms(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function eg(e,o,n){return ms(e),e<=0?Qe(e):o!==void 0?typeof n=="string"?Qe(e).fill(o,n):Qe(e).fill(o):Qe(e)}h.alloc=function(e,o,n){return eg(e,o,n)};function da(e){return ms(e),Qe(e<0?0:la(e)|0)}h.allocUnsafe=function(e){return da(e)};h.allocUnsafeSlow=function(e){return da(e)};function og(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!h.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=ds(e,o)|0,r=Qe(n),c=r.write(e,o);return c!==n&&(r=r.slice(0,c)),r}function ca(e){for(var o=e.length<0?0:la(e.length)|0,n=Qe(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function ng(e){if(Fe(e,Uint8Array)){var o=new Uint8Array(e);return pa(o.buffer,o.byteOffset,o.byteLength)}return ca(e)}function pa(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,h.prototype),r}function tg(e){if(h.isBuffer(e)){var o=la(e.length)|0,n=Qe(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||_a(e.length)?Qe(0):ca(e);if(e.type==="Buffer"&&Array.isArray(e.data))return ca(e.data)}function la(e){if(e>=Rt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Rt.toString(16)+" bytes");return e|0}function rg(e){return+e!=e&&(e=0),h.alloc(+e)}h.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==h.prototype};h.compare=function(o,n){if(Fe(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),Fe(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),!h.isBuffer(o)||!h.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,c=n.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==n[p]){r=o[p],c=n[p];break}return r<c?-1:c<r?1:0};h.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return h.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var c=h.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Fe(m,Uint8Array))p+m.length>c.length?h.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(h.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function ds(e,o){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Fe(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ma(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return hs(e).length;default:if(c)return r?-1:ma(e).length;o=(""+o).toLowerCase(),c=!0}}h.byteLength=ds;function ag(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return gg(this,o,n);case"utf8":case"utf-8":return _s(this,o,n);case"ascii":return _g(this,o,n);case"latin1":case"binary":return ug(this,o,n);case"base64":return dg(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fg(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}h.prototype._isBuffer=!0;function Do(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}h.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)Do(this,n,n+1);return this};h.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)Do(this,n,n+3),Do(this,n+1,n+2);return this};h.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)Do(this,n,n+7),Do(this,n+1,n+6),Do(this,n+2,n+5),Do(this,n+3,n+4);return this};h.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?_s(this,0,o):ag.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(o){if(!h.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:h.compare(this,o)===0};h.prototype.inspect=function(){var o="",n=rn.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};is&&(h.prototype[is]=h.prototype.inspect);h.prototype.compare=function(o,n,r,c,p){if(Fe(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),!h.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),n<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&n>=r)return 0;if(c>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-n,l=Math.min(m,d),_=this.slice(c,p),T=o.slice(n,r),u=0;u<l;++u)if(_[u]!==T[u]){m=_[u],d=T[u];break}return m<d?-1:d<m?1:0};function ls(e,o,n,r,c){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,_a(n)&&(n=c?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(c)return-1;n=e.length-1}else if(n<0)if(c)n=0;else return-1;if(typeof o=="string"&&(o=h.from(o,r)),h.isBuffer(o))return o.length===0?-1:ss(e,o,n,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):ss(e,[o],n,r,c);throw new TypeError("val must be string, number or Buffer")}function ss(e,o,n,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(P,k){return p===1?P[k]:P.readUInt16BE(k*p)}var _;if(c){var T=-1;for(_=n;_<m;_++)if(l(e,_)===l(o,T===-1?0:_-T)){if(T===-1&&(T=_),_-T+1===d)return T*p}else T!==-1&&(_-=_-T),T=-1}else for(n+d>m&&(n=m-d),_=n;_>=0;_--){for(var u=!0,x=0;x<d;x++)if(l(e,_+x)!==l(o,x)){u=!1;break}if(u)return _}return-1}h.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};h.prototype.indexOf=function(o,n,r){return ls(this,o,n,r,!0)};h.prototype.lastIndexOf=function(o,n,r){return ls(this,o,n,r,!1)};function ig(e,o,n,r){n=Number(n)||0;var c=e.length-n;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(_a(d))return m;e[n+m]=d}return m}function sg(e,o,n,r){return Dt(ma(o,e.length-n),e,n,r)}function cg(e,o,n,r){return Dt(xg(o),e,n,r)}function pg(e,o,n,r){return Dt(hs(o),e,n,r)}function mg(e,o,n,r){return Dt(yg(o,e.length-n),e,n,r)}h.prototype.write=function(o,n,r,c){if(n===void 0)c="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")c=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return ig(this,o,n,r);case"utf8":case"utf-8":return sg(this,o,n,r);case"ascii":case"latin1":case"binary":return cg(this,o,n,r);case"base64":return pg(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mg(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function dg(e,o,n){return o===0&&n===e.length?sa.fromByteArray(e):sa.fromByteArray(e.slice(o,n))}function _s(e,o,n){n=Math.min(e.length,n);for(var r=[],c=o;c<n;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=n){var l,_,T,u;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(u=(p&31)<<6|l&63,u>127&&(m=u));break;case 3:l=e[c+1],_=e[c+2],(l&192)===128&&(_&192)===128&&(u=(p&15)<<12|(l&63)<<6|_&63,u>2047&&(u<55296||u>57343)&&(m=u));break;case 4:l=e[c+1],_=e[c+2],T=e[c+3],(l&192)===128&&(_&192)===128&&(T&192)===128&&(u=(p&15)<<18|(l&63)<<12|(_&63)<<6|T&63,u>65535&&u<1114112&&(m=u))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return lg(r)}var cs=4096;function lg(e){var o=e.length;if(o<=cs)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=cs));return n}function _g(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]&127);return r}function ug(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]);return r}function gg(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var c="",p=o;p<n;++p)c+=Sg[e[p]];return c}function fg(e,o,n){for(var r=e.slice(o,n),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}h.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var c=this.subarray(o,n);return Object.setPrototypeOf(c,h.prototype),c};function te(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||te(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return c};h.prototype.readUintBE=h.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||te(o,n,this.length);for(var c=this[o+--n],p=1;n>0&&(p*=256);)c+=this[o+--n]*p;return c};h.prototype.readUint8=h.prototype.readUInt8=function(o,n){return o=o>>>0,n||te(o,1,this.length),this[o]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||te(o,2,this.length),this[o]|this[o+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||te(o,2,this.length),this[o]<<8|this[o+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||te(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||te(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};h.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||te(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*n)),c};h.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||te(o,n,this.length);for(var c=n,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};h.prototype.readInt8=function(o,n){return o=o>>>0,n||te(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};h.prototype.readInt16LE=function(o,n){o=o>>>0,n||te(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};h.prototype.readInt16BE=function(o,n){o=o>>>0,n||te(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};h.prototype.readInt32LE=function(o,n){return o=o>>>0,n||te(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};h.prototype.readInt32BE=function(o,n){return o=o>>>0,n||te(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};h.prototype.readFloatLE=function(o,n){return o=o>>>0,n||te(o,4,this.length),tn.read(this,o,!0,23,4)};h.prototype.readFloatBE=function(o,n){return o=o>>>0,n||te(o,4,this.length),tn.read(this,o,!1,23,4)};h.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||te(o,8,this.length),tn.read(this,o,!0,52,8)};h.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||te(o,8,this.length),tn.read(this,o,!1,52,8)};function de(e,o,n,r,c,p){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;de(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;de(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};h.prototype.writeUint8=h.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,1,255,0),this[n]=o&255,n+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};h.prototype.writeIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);de(this,o,n,r,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};h.prototype.writeIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);de(this,o,n,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};h.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};h.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};h.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};h.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};h.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function us(e,o,n,r,c,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function gs(e,o,n,r,c){return o=+o,n=n>>>0,c||us(e,o,n,4,34028234663852886e22,-34028234663852886e22),tn.write(e,o,n,r,23,4),n+4}h.prototype.writeFloatLE=function(o,n,r){return gs(this,o,n,!0,r)};h.prototype.writeFloatBE=function(o,n,r){return gs(this,o,n,!1,r)};function fs(e,o,n,r,c){return o=+o,n=n>>>0,c||us(e,o,n,8,17976931348623157e292,-17976931348623157e292),tn.write(e,o,n,r,52,8),n+8}h.prototype.writeDoubleLE=function(o,n,r){return fs(this,o,n,!0,r)};h.prototype.writeDoubleBE=function(o,n,r){return fs(this,o,n,!1,r)};h.prototype.copy=function(o,n,r,c){if(!h.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),n>=o.length&&(n=o.length),n||(n=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-n<c-r&&(c=o.length-n+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),n),p};h.prototype.fill=function(o,n,r,c){if(typeof o=="string"){if(typeof n=="string"?(c=n,n=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!h.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=h.isBuffer(o)?o:h.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var hg=/[^+/0-9A-Za-z-_]/g;function Tg(e){if(e=e.split("=")[0],e=e.trim().replace(hg,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ma(e,o){o=o||1/0;for(var n,r=e.length,c=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!c){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),c=n;continue}n=(c-55296<<10|n-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function xg(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function yg(e,o){for(var n,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,c=n%256,p.push(c),p.push(r);return p}function hs(e){return sa.toByteArray(Tg(e))}function Dt(e,o,n,r){for(var c=0;c<r&&!(c+n>=o.length||c>=e.length);++c)o[c+n]=e[c];return c}function Fe(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function _a(e){return e!==e}var Sg=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,c=0;c<16;++c)o[r+c]=e[n]+e[c];return o}()});var ws=A((wb,bs)=>{t();var j=bs.exports={},Ue,We;function ua(){throw new Error("setTimeout has not been defined")}function ga(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Ue=setTimeout:Ue=ua}catch(e){Ue=ua}try{typeof clearTimeout=="function"?We=clearTimeout:We=ga}catch(e){We=ga}})();function xs(e){if(Ue===setTimeout)return setTimeout(e,0);if((Ue===ua||!Ue)&&setTimeout)return Ue=setTimeout,setTimeout(e,0);try{return Ue(e,0)}catch(o){try{return Ue.call(null,e,0)}catch(n){return Ue.call(this,e,0)}}}function bg(e){if(We===clearTimeout)return clearTimeout(e);if((We===ga||!We)&&clearTimeout)return We=clearTimeout,clearTimeout(e);try{return We(e)}catch(o){try{return We.call(null,e)}catch(n){return We.call(this,e)}}}var eo=[],an=!1,Mo,Mt=-1;function wg(){!an||!Mo||(an=!1,Mo.length?eo=Mo.concat(eo):Mt=-1,eo.length&&ys())}function ys(){if(!an){var e=xs(wg);an=!0;for(var o=eo.length;o;){for(Mo=eo,eo=[];++Mt<o;)Mo&&Mo[Mt].run();Mt=-1,o=eo.length}Mo=null,an=!1,bg(e)}}j.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];eo.push(new Ss(e,o)),eo.length===1&&!an&&xs(ys)};function Ss(e,o){this.fun=e,this.array=o}Ss.prototype.run=function(){this.fun.apply(null,this.array)};j.title="browser";j.browser=!0;j.env={};j.argv=[];j.version="";j.versions={};function oo(){}j.on=oo;j.addListener=oo;j.once=oo;j.off=oo;j.removeListener=oo;j.removeAllListeners=oo;j.emit=oo;j.prependListener=oo;j.prependOnceListener=oo;j.listeners=function(e){return[]};j.binding=function(e){throw new Error("process.binding is not supported")};j.cwd=function(){return"/"};j.chdir=function(e){throw new Error("process.chdir is not supported")};j.umask=function(){return 0}});var a,s,vg,i,t=b(()=>{a=w(Ts()),s=w(ws()),vg=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=vg});var fa=b(()=>{"use strict";t()});var vs=b(()=>{"use strict";t()});var Is=b(()=>{"use strict";t()});var Ae,sn,fo=b(()=>{"use strict";t();Ae=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),sn=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var z,As,Lb,ks,Pb,H=b(()=>{"use strict";t();fo();z=(x=>(x.ledger="ledger",x.walletconnect="walletconnect",x.walletconnectv2="walletconnectv2",x.wallet="wallet",x.crossWindow="crossWindow",x.iframe="iframe",x.extension="extension",x.passkey="passkey",x.metamask="metamask",x.opera="opera",x.extra="extra",x.none="",x))(z||{}),As=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(As||{}),Lb=f(f({},sn.WindowProviderRequestEnums),As),ks=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ks||{}),Pb=f(f({},sn.WindowProviderResponseEnums),ks)});var Ls=b(()=>{"use strict";t()});var Ps=b(()=>{"use strict";t()});var le=b(()=>{"use strict";t()});var Es=b(()=>{"use strict";t()});var Cs=b(()=>{"use strict";t()});var Ns=b(()=>{"use strict";t()});var F=b(()=>{"use strict";t();fa();vs();Is();H();Ls();Ps();le();Es();Cs();Ns()});var ke,Ot,qb,Bt,jb,Ft,zb,Kb,Ig,Ut,no=b(()=>{"use strict";t();F();ke={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ot,egldLabel:qb}=ke["devnet"],{chainId:Bt,egldLabel:jb}=ke["testnet"],{chainId:Ft,egldLabel:zb}=ke["mainnet"],Kb={["devnet"]:Ot,["testnet"]:Bt,["mainnet"]:Ft},Ig={[Ot]:"devnet",[Bt]:"testnet",[Ft]:"mainnet"},Ut=3e3});var Ws=b(()=>{"use strict";t()});var Ge=b(()=>{"use strict";t()});var Gs=b(()=>{"use strict";t()});var xa,Hs=b(()=>{"use strict";t();xa=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(xa||{})});var Vs=b(()=>{"use strict";t()});var ya=b(()=>{"use strict";t()});var $s=b(()=>{"use strict";t()});var cn=b(()=>{"use strict";t()});var He,qs=b(()=>{"use strict";t();He=require("@multiversx/sdk-web-wallet-provider")});var Le,Jn=b(()=>{"use strict";t();Le=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var js,zs,Sa,M0,O0,ba=b(()=>{"use strict";t();Jn();Sa=String((zs=(js=Le.safeWindow)==null?void 0:js.navigator)==null?void 0:zs.userAgent),M0=/^((?!chrome|android).)*safari/i.test(Sa),O0=/firefox/i.test(Sa)&&/windows/i.test(Sa)});var Wt,Gt,Ks,Xs,Yn,wa,Ht,Js,pn,Vt,N=b(()=>{"use strict";t();Ws();Ge();Gs();Hs();Vs();ya();$s();no();cn();qs();ba();Wt=5e4,Gt=1e9,Ks=1,Xs=1,Yn="signSession",wa="sdk-dapp-version",Ht="logout",Js="login",pn="0",Vt="-"});var mn,$t=b(()=>{"use strict";t();mn=()=>Date.now()/1e3});var Ys=b(()=>{"use strict";t()});var Zs=b(()=>{"use strict";t()});var va=b(()=>{"use strict";t();$t();Ys();Zs()});var Ia={};Ze(Ia,{clear:()=>Rg,getItem:()=>Cg,localStorageKeys:()=>ge,removeItem:()=>Ng,setItem:()=>Eg});var ge,qt,Eg,Cg,Ng,Rg,Fo=b(()=>{"use strict";t();va();ge={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},qt=typeof localStorage!="undefined",Eg=({key:e,data:o,expires:n})=>{!qt||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Cg=e=>{if(!qt)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:mn()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},Ng=e=>{!qt||localStorage.removeItem(String(e))},Rg=()=>{!qt||localStorage.clear()}});var Aa={};Ze(Aa,{clear:()=>nc,getItem:()=>ec,removeItem:()=>oc,setItem:()=>Qs,storage:()=>Dg});var Qs,ec,oc,nc,Dg,tc=b(()=>{"use strict";t();Qs=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},ec=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},oc=e=>sessionStorage.removeItem(String(e)),nc=()=>sessionStorage.clear(),Dg={setItem:Qs,getItem:ec,removeItem:oc,clear:nc}});var Ve,dn=b(()=>{"use strict";t();Fo();tc();Ve={session:Aa,local:Ia}});var ka,$,re,q=b(()=>{"use strict";t();ka=require("@reduxjs/toolkit");N();$=(0,ka.createAction)(Ht),re=(0,ka.createAction)(Js,e=>({payload:e}))});var Pa,rc,ac,jt,La,ic,To,zt,Kt,_w,Ea,Mg,uw,ln,sc,cc,pc,Xt,Jt=b(()=>{"use strict";t();Pa=require("@multiversx/sdk-core"),rc=require("@reduxjs/toolkit"),ac=require("redux-persist");N();dn();Fo();q();jt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:pn},La={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":jt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},ic=(0,rc.createSlice)({name:"accountInfoSlice",initialState:La,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Pa.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:jt},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase($,()=>(Ve.local.removeItem(ge.loginExpiresAt),La)),e.addCase(re,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new Pa.Address(r).hex()}),e.addCase(ac.REHYDRATE,(o,n)=>{var _;if(!((_=n.payload)!=null&&_.account))return;let{account:r}=n.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:La.accounts,o.publicKey=d})}}),{setAccount:To,setAddress:zt,setAccountNonce:Kt,setAccountShard:_w,setLedgerAccount:Ea,updateLedgerAccount:Mg,setWalletConnectAccount:uw,setIsAccountLoading:ln,setAccountLoadingError:sc,setWebsocketEvent:cc,setWebsocketBatchEvent:pc}=ic.actions,Xt=ic.reducer});function Zn(){return new Date().setHours(new Date().getHours()+24)}function Qn(e){Ve.local.setItem({key:ge.loginExpiresAt,data:e,expires:e})}var Ca=b(()=>{"use strict";t();dn();Fo()});var dc,mc,lc,vw,_c,Og,xo,Iw,Yt,uc,gc,Na,fc,Zt,et=b(()=>{"use strict";t();dc=require("@reduxjs/toolkit");Ca();H();q();mc={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},lc=(0,dc.createSlice)({name:"loginInfoSlice",initialState:mc,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase($,()=>mc),e.addCase(re,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,Qn(Zn())})}}),{setLoginMethod:vw,setWalletConnectLogin:_c,setLedgerLogin:Og,setTokenLogin:xo,setTokenLoginSignature:Iw,setWalletLogin:Yt,invalidateLoginSession:uc,setLogoutRoute:gc,setIsWalletConnectV2Initialized:Na,setWebviewLogin:fc}=lc.actions,Zt=lc.reducer});var Tc,hc,xc,yc,Bg,Pw,Fg,Qt,er=b(()=>{"use strict";t();Tc=require("@reduxjs/toolkit");q();hc={},xc=(0,Tc.createSlice)({name:"modalsSlice",initialState:hc,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase($,()=>hc)}}),{setTxSubmittedModal:yc,setNotificationModal:Bg,clearTxSubmittedModal:Pw,clearNotificationModal:Fg}=xc.actions,Qt=xc.reducer});var to,_n=b(()=>{"use strict";t();to=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var V,ae=b(()=>{"use strict";t();_n();V=()=>{if(!to())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:c,search:p}}=window;return{pathname:o,hash:n,origin:r,href:c,search:p}}});var un,Sc=b(()=>{"use strict";t();ae();un=(e="")=>{let o=V(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var bc=b(()=>{"use strict";t();se()});var wc,vc=b(()=>{"use strict";t();Jn();wc=e=>{if(!Le.safeWindow.location)return;if(!new URL(Le.safeWindow.location.href).protocol.startsWith("http"))return Le.safeWindow.location.reload();Le.safeWindow.location.assign(e)}});var se=b(()=>{"use strict";t();Sc();bc();ae();vc()});var Ic,Ac,Uo,gn=b(()=>{"use strict";t();se();Ic=!1,Ac=(e=!0)=>{Ic=e},Uo=({timeout:e=0,url:o})=>{Ic||setTimeout(()=>{if(!!window)return wc(o)},e)}});function yo({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),c=typeof o=="function";if(r&&e!=null){if(c)return o(e,n);Uo({url:e,timeout:Ug})}}var Ug,kc=b(()=>{"use strict";t();gn();Ug=200});function Lc(e){return e[Math.floor(Math.random()*e.length)]}var Pc=b(()=>{"use strict";t()});var Ra=b(()=>{"use strict";t();ya()});var ro=b(()=>{"use strict";t();kc();Pc();Ra()});var Ec,Cc,Nc,ot,Gg,Rc,Da,Dc,Hg,or,nt=b(()=>{"use strict";t();Ec=require("@reduxjs/toolkit"),Cc=w(require("lodash.omit")),Nc=require("redux-persist");cn();q();ro();ot={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Gg={network:ot},Rc=(0,Ec.createSlice)({name:"appConfig",initialState:Gg,reducers:{initializeNetworkConfig:(e,o)=>{let n=Lc(o.payload.walletConnectV2RelayAddresses),r=(0,Cc.default)(o.payload,"walletConnectV2RelayAddresses");e.network=I(f(f({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=f(f({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase($,o=>{o.network.customWalletAddress=void 0}),e.addCase(Nc.REHYDRATE,(o,n)=>{var c,p;if(!((p=(c=n.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Da,updateNetworkConfig:Dc,setCustomWalletAddress:Hg}=Rc.actions,or=Rc.reducer});var Mc,Ma,Oc,lv,_v,uv,nr,tr=b(()=>{"use strict";t();Mc=require("@reduxjs/toolkit");F();q();Ma={isSigning:!1,signedSessions:{}},Oc=(0,Mc.createSlice)({name:"signedMessageInfoSliceState",initialState:Ma,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[n]=f(f({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>f(f({},e),o.payload),clearSignedMessageInfo:()=>Ma},extraReducers:e=>{e.addCase($,()=>Ma)}}),{setSignSession:lv,clearSignedMessageInfo:_v,setSignSessionState:uv}=Oc.actions,nr=Oc.reducer});var Fc,Uc,Bc,Wc,Oa,Vg,Sv,$g,rr,ar=b(()=>{"use strict";t();Fc=require("@reduxjs/toolkit"),Uc=require("redux-persist");F();$t();q();Bc={customToasts:[],transactionToasts:[]},Wc=(0,Fc.createSlice)({name:"toastsSlice",initialState:Bc,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===n);if(r!==-1){e.customToasts[r]=I(f(f({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(I(f({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:mn(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase($,()=>Bc),e.addCase(Uc.REHYDRATE,(o,n)=>{var c,p;let r=(p=(c=n.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Oa,removeCustomToast:Vg,addTransactionToast:Sv,removeTransactionToast:$g}=Wc.actions,rr=Wc.reducer});var Gc,Fa,Ua,Wa,qg,Ba,Hc,Iv,jg,Ga,ir,sr=b(()=>{"use strict";t();Gc=require("@reduxjs/toolkit");q();Fa="Transaction failed",Ua="Transaction successful",Wa="Processing transaction",qg="Transaction submitted",Ba={},Hc=(0,Gc.createSlice)({name:"transactionsInfo",initialState:Ba,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Fa,successMessage:(r==null?void 0:r.successMessage)||Ua,processingMessage:(r==null?void 0:r.processingMessage)||Wa,submittedMessage:(r==null?void 0:r.submittedMessage)||qg,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ba},extraReducers:e=>{e.addCase($,()=>Ba)}}),{clearTransactionsInfo:Iv,setTransactionsDisplayInfo:jg,clearTransactionsInfoForSessionId:Ga}=Hc.actions,ir=Hc.reducer});function ao(e){return e!=null&&(nf(e)||cf(e))}function Wo(e){return e!=null&&(tf(e)||pf(e))}function Go(e){return e!=null&&(rf(e)||mf(e))}function Vc(e){return e!=null&&(af(e)||df(e))}function Ha(e){return e!=null&&sf(e)}function nf(e){return e!=null&&zg.includes(e)}function tf(e){return e!=null&&Kg.includes(e)}function rf(e){return e!=null&&Xg.includes(e)}function af(e){return e!=null&&Jg.includes(e)}function sf(e){return e!=null&&Yg.includes(e)}function cf(e){return e!=null&&Zg.includes(e)}function pf(e){return e!=null&&Qg.includes(e)}function mf(e){return e!=null&&ef.includes(e)}function df(e){return e!=null&&of.includes(e)}var zg,Kg,Xg,Jg,Yg,Zg,Qg,ef,of,fn=b(()=>{"use strict";t();H();zg=["sent"],Kg=["success"],Xg=["fail","cancelled","timedOut"],Jg=["invalid"],Yg=["timedOut"],Zg=["pending"],Qg=["success"],ef=["fail","invalid"],of=["not executed"]});var $c,qc,tt,lf,jc,qe,je,_f,Ho,uf,gf,Dv,ff,rt,Va,Mv,cr,pr=b(()=>{"use strict";t();$c=require("@reduxjs/toolkit"),qc=require("redux-persist");H();fn();q();tt={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},lf={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},jc=(0,$c.createSlice)({name:"transactionsSlice",initialState:tt,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:n,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=f(f(f({},lf),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:f(f({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===n&&(e.transactionsToSign=tt.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=f(f({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,c!=null&&(e.signedTransactions[n].errorMessage=c),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,T,u,x,P,k,E,U;let{sessionId:n,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(T=(_=e.signedTransactions)==null?void 0:_[n])==null?void 0:T.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(C=>C.hash===p?I(f(f({},m!=null?m:{}),C),{status:r,errorMessage:c,inTransit:d}):C);let D=(x=(u=e.signedTransactions[n])==null?void 0:u.transactions)==null?void 0:x.every(C=>Wo(C.status)),L=(k=(P=e.signedTransactions[n])==null?void 0:P.transactions)==null?void 0:k.some(C=>Go(C.status)),O=(U=(E=e.signedTransactions[n])==null?void 0:E.transactions)==null?void 0:U.every(C=>Vc(C.status));D&&(e.signedTransactions[n].status="success"),L&&(e.signedTransactions[n].status="fail"),O&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=tt.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=tt.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=f(f({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase($,()=>tt),e.addCase(qc.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=n.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let T=new Date(l),u=new Date;return u.setHours(u.getHours()+5),u-T>0||(d[l]=_),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:qe,updateSignedTransactions:je,setTransactionsToSign:_f,clearAllTransactionsToSign:Ho,clearAllSignedTransactions:uf,clearSignedTransaction:gf,clearTransactionToSign:Dv,setSignTransactionsError:ff,setSignTransactionsCancelMessage:rt,moveTransactionsToSignedState:Va,updateSignedTransactionsCustomTransactionInformation:Mv}=jc.actions,cr=jc.reducer});var zc,$a,Kc,Xc,Jc,Yc,Uv,mr,dr=b(()=>{"use strict";t();zc=require("@reduxjs/toolkit");q();$a={},Kc=(0,zc.createSlice)({name:"batchTransactionsSlice",initialState:$a,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>$a},extraReducers:e=>{e.addCase($,()=>$a)}}),{setBatchTransactions:Xc,updateBatchTransactions:Jc,clearBatchTransactions:Yc,clearAllBatchTransactions:Uv}=Kc.actions,mr=Kc.reducer});var Qc,Zc,ep,op,np,qa=b(()=>{"use strict";t();Qc=require("@reduxjs/toolkit");q();Zc={},ep=(0,Qc.createSlice)({name:"dappConfigSlice",initialState:Zc,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase($,()=>Zc)}}),{setDappConfig:op}=ep.actions,np=ep.reducer});var R=b(()=>{"use strict";t();Jt();et();er();nt();tr();ar();sr();pr();dr();qa()});var Ka=b(()=>{"use strict";t()});var Lp,Af,kf,qo,xr=b(()=>{"use strict";t();Lp=require("@reduxjs/toolkit");Ka();Jt();dr();qa();et();er();nt();tr();ar();sr();pr();Af={["account"]:Xt,["dappConfig"]:np,["loginInfo"]:Zt,["modals"]:Qt,["networkConfig"]:or,["signedMessageInfo"]:nr,["toasts"]:rr,["transactionsInfo"]:ir,["transactions"]:cr,["batchTransactions"]:mr},kf=(e={})=>(0,Lp.combineReducers)(f(f({},Af),e)),qo=kf});var Np={};Ze(Np,{default:()=>Vf,sessionStorageReducers:()=>Xa});function co(e,o=[]){return{key:e,version:1,storage:Ep.default,blacklist:o}}var _e,Pp,Ep,Lf,ct,Pf,Ef,Cf,Nf,Rf,Df,Mf,Of,Bf,Ff,Cp,Uf,Xa,Wf,Gf,Hf,Vf,Rp=b(()=>{"use strict";t();_e=require("redux-persist"),Pp=w(require("redux-persist/lib/storage")),Ep=w(require("redux-persist/lib/storage/session"));xr();R();Jt();dr();et();er();nt();tr();ar();sr();pr();Ka();Lf={persistReducersStorageType:"localStorage"},ct={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Pf=co(ct["account"]),Ef=co(ct["loginInfo"]),Cf=co(ct["modals"]),Nf=co(ct["networkConfig"]),Rf={2:e=>I(f({},e),{networkConfig:ot})};Df=co("sdk-dapp-transactionsInfo"),Mf=co("sdk-dapp-transactions",["transactionsToSign"]),Of=co("sdk-dapp-batchTransactions",["batchTransactions"]),Bf=co("sdk-dapp-toasts"),Ff=co("sdk-dapp-signedMessageInfo"),Cp={key:"sdk-dapp-store",version:2,storage:Pp.default,whitelist:Object.keys(ct),migrate:(0,_e.createMigrate)(Rf,{debug:!1})},Uf=I(f({},Cp),{whitelist:[]}),Xa={["toasts"]:(0,_e.persistReducer)(Bf,rr),["transactions"]:(0,_e.persistReducer)(Mf,cr),["transactionsInfo"]:(0,_e.persistReducer)(Df,ir),["batchTransactions"]:(0,_e.persistReducer)(Of,mr),["signedMessageInfo"]:(0,_e.persistReducer)(Ff,nr)},Wf=I(f({},Xa),{["account"]:(0,_e.persistReducer)(Pf,Xt),["loginInfo"]:(0,_e.persistReducer)(Ef,Zt),["modals"]:(0,_e.persistReducer)(Cf,Qt),["networkConfig"]:(0,_e.persistReducer)(Nf,or)}),Gf=Lf.persistReducersStorageType==="localStorage",Hf=Gf?(0,_e.persistReducer)(Cp,qo(Xa)):(0,_e.persistReducer)(Uf,qo(Wf)),Vf=Hf});var Dp={};Ze(Dp,{default:()=>$f});var $f,Mp=b(()=>{"use strict";t();xr();$f=qo()});var Op={};Ze(Op,{default:()=>jf});var be,qf,jf,Bp=b(()=>{"use strict";t();be=require("redux-persist"),qf=[be.FLUSH,be.REHYDRATE,be.PAUSE,be.PERSIST,be.PURGE,be.REGISTER],jf=qf});var Wp={};Ze(Wp,{default:()=>Up});function Up(e){return(0,Fp.persistStore)(e)}var Fp,Gp=b(()=>{"use strict";t();Fp=require("redux-persist")});var Bm=A((NM,Om)=>{t();var nT=typeof i=="object"&&i&&i.Object===Object&&i;Om.exports=nT});var Tt=A((RM,Fm)=>{t();var tT=Bm(),rT=typeof self=="object"&&self&&self.Object===Object&&self,aT=tT||rT||Function("return this")();Fm.exports=aT});var Ti=A((DM,Um)=>{t();var iT=Tt(),sT=iT.Symbol;Um.exports=sT});var Vm=A((MM,Hm)=>{t();var Wm=Ti(),Gm=Object.prototype,cT=Gm.hasOwnProperty,pT=Gm.toString,xt=Wm?Wm.toStringTag:void 0;function mT(e){var o=cT.call(e,xt),n=e[xt];try{e[xt]=void 0;var r=!0}catch(p){}var c=pT.call(e);return r&&(o?e[xt]=n:delete e[xt]),c}Hm.exports=mT});var qm=A((OM,$m)=>{t();var dT=Object.prototype,lT=dT.toString;function _T(e){return lT.call(e)}$m.exports=_T});var xi=A((BM,Km)=>{t();var jm=Ti(),uT=Vm(),gT=qm(),fT="[object Null]",hT="[object Undefined]",zm=jm?jm.toStringTag:void 0;function TT(e){return e==null?e===void 0?hT:fT:zm&&zm in Object(e)?uT(e):gT(e)}Km.exports=TT});var Jm=A((FM,Xm)=>{t();var xT=Array.isArray;Xm.exports=xT});var Zm=A((UM,Ym)=>{t();function yT(e){return e!=null&&typeof e=="object"}Ym.exports=yT});var ed=A((WM,Qm)=>{t();var ST=xi(),bT=Jm(),wT=Zm(),vT="[object String]";function IT(e){return typeof e=="string"||!bT(e)&&wT(e)&&ST(e)==vT}Qm.exports=IT});var Br=A((g3,ad)=>{t();function LT(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}ad.exports=LT});var Kd=A((DW,zd)=>{t();var YT=xi(),ZT=Br(),QT="[object AsyncFunction]",ex="[object Function]",ox="[object GeneratorFunction]",nx="[object Proxy]";function tx(e){if(!ZT(e))return!1;var o=YT(e);return o==ex||o==ox||o==QT||o==nx}zd.exports=tx});var Jd=A((MW,Xd)=>{t();var rx=Tt(),ax=rx["__core-js_shared__"];Xd.exports=ax});var Qd=A((OW,Zd)=>{t();var Mi=Jd(),Yd=function(){var e=/[^.]+$/.exec(Mi&&Mi.keys&&Mi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ix(e){return!!Yd&&Yd in e}Zd.exports=ix});var ol=A((BW,el)=>{t();var sx=Function.prototype,cx=sx.toString;function px(e){if(e!=null){try{return cx.call(e)}catch(o){}try{return e+""}catch(o){}}return""}el.exports=px});var tl=A((FW,nl)=>{t();var mx=Kd(),dx=Qd(),lx=Br(),_x=ol(),ux=/[\\^$.*+?()[\]{}|]/g,gx=/^\[object .+?Constructor\]$/,fx=Function.prototype,hx=Object.prototype,Tx=fx.toString,xx=hx.hasOwnProperty,yx=RegExp("^"+Tx.call(xx).replace(ux,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Sx(e){if(!lx(e)||dx(e))return!1;var o=mx(e)?yx:gx;return o.test(_x(e))}nl.exports=Sx});var al=A((UW,rl)=>{t();function bx(e,o){return e==null?void 0:e[o]}rl.exports=bx});var Gr=A((WW,il)=>{t();var wx=tl(),vx=al();function Ix(e,o){var n=vx(e,o);return wx(n)?n:void 0}il.exports=Ix});var vt=A((GW,sl)=>{t();var Ax=Gr(),kx=Ax(Object,"create");sl.exports=kx});var ml=A((HW,pl)=>{t();var cl=vt();function Lx(){this.__data__=cl?cl(null):{},this.size=0}pl.exports=Lx});var ll=A((VW,dl)=>{t();function Px(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}dl.exports=Px});var ul=A(($W,_l)=>{t();var Ex=vt(),Cx="__lodash_hash_undefined__",Nx=Object.prototype,Rx=Nx.hasOwnProperty;function Dx(e){var o=this.__data__;if(Ex){var n=o[e];return n===Cx?void 0:n}return Rx.call(o,e)?o[e]:void 0}_l.exports=Dx});var fl=A((qW,gl)=>{t();var Mx=vt(),Ox=Object.prototype,Bx=Ox.hasOwnProperty;function Fx(e){var o=this.__data__;return Mx?o[e]!==void 0:Bx.call(o,e)}gl.exports=Fx});var Tl=A((jW,hl)=>{t();var Ux=vt(),Wx="__lodash_hash_undefined__";function Gx(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ux&&o===void 0?Wx:o,this}hl.exports=Gx});var yl=A((zW,xl)=>{t();var Hx=ml(),Vx=ll(),$x=ul(),qx=fl(),jx=Tl();function Rn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Rn.prototype.clear=Hx;Rn.prototype.delete=Vx;Rn.prototype.get=$x;Rn.prototype.has=qx;Rn.prototype.set=jx;xl.exports=Rn});var bl=A((KW,Sl)=>{t();function zx(){this.__data__=[],this.size=0}Sl.exports=zx});var vl=A((XW,wl)=>{t();function Kx(e,o){return e===o||e!==e&&o!==o}wl.exports=Kx});var It=A((JW,Il)=>{t();var Xx=vl();function Jx(e,o){for(var n=e.length;n--;)if(Xx(e[n][0],o))return n;return-1}Il.exports=Jx});var kl=A((YW,Al)=>{t();var Yx=It(),Zx=Array.prototype,Qx=Zx.splice;function ey(e){var o=this.__data__,n=Yx(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():Qx.call(o,n,1),--this.size,!0}Al.exports=ey});var Pl=A((ZW,Ll)=>{t();var oy=It();function ny(e){var o=this.__data__,n=oy(o,e);return n<0?void 0:o[n][1]}Ll.exports=ny});var Cl=A((QW,El)=>{t();var ty=It();function ry(e){return ty(this.__data__,e)>-1}El.exports=ry});var Rl=A((eG,Nl)=>{t();var ay=It();function iy(e,o){var n=this.__data__,r=ay(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}Nl.exports=iy});var Ml=A((oG,Dl)=>{t();var sy=bl(),cy=kl(),py=Pl(),my=Cl(),dy=Rl();function Dn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Dn.prototype.clear=sy;Dn.prototype.delete=cy;Dn.prototype.get=py;Dn.prototype.has=my;Dn.prototype.set=dy;Dl.exports=Dn});var Bl=A((nG,Ol)=>{t();var ly=Gr(),_y=Tt(),uy=ly(_y,"Map");Ol.exports=uy});var Wl=A((tG,Ul)=>{t();var Fl=yl(),gy=Ml(),fy=Bl();function hy(){this.size=0,this.__data__={hash:new Fl,map:new(fy||gy),string:new Fl}}Ul.exports=hy});var Hl=A((rG,Gl)=>{t();function Ty(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Gl.exports=Ty});var At=A((aG,Vl)=>{t();var xy=Hl();function yy(e,o){var n=e.__data__;return xy(o)?n[typeof o=="string"?"string":"hash"]:n.map}Vl.exports=yy});var ql=A((iG,$l)=>{t();var Sy=At();function by(e){var o=Sy(this,e).delete(e);return this.size-=o?1:0,o}$l.exports=by});var zl=A((sG,jl)=>{t();var wy=At();function vy(e){return wy(this,e).get(e)}jl.exports=vy});var Xl=A((cG,Kl)=>{t();var Iy=At();function Ay(e){return Iy(this,e).has(e)}Kl.exports=Ay});var Yl=A((pG,Jl)=>{t();var ky=At();function Ly(e,o){var n=ky(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}Jl.exports=Ly});var Ql=A((mG,Zl)=>{t();var Py=Wl(),Ey=ql(),Cy=zl(),Ny=Xl(),Ry=Yl();function Mn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Mn.prototype.clear=Py;Mn.prototype.delete=Ey;Mn.prototype.get=Cy;Mn.prototype.has=Ny;Mn.prototype.set=Ry;Zl.exports=Mn});var o_=A((dG,e_)=>{t();var Dy="__lodash_hash_undefined__";function My(e){return this.__data__.set(e,Dy),this}e_.exports=My});var t_=A((lG,n_)=>{t();function Oy(e){return this.__data__.has(e)}n_.exports=Oy});var a_=A((_G,r_)=>{t();var By=Ql(),Fy=o_(),Uy=t_();function Hr(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new By;++o<n;)this.add(e[o])}Hr.prototype.add=Hr.prototype.push=Fy;Hr.prototype.has=Uy;r_.exports=Hr});var s_=A((uG,i_)=>{t();function Wy(e,o,n,r){for(var c=e.length,p=n+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}i_.exports=Wy});var p_=A((gG,c_)=>{t();function Gy(e){return e!==e}c_.exports=Gy});var d_=A((fG,m_)=>{t();function Hy(e,o,n){for(var r=n-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}m_.exports=Hy});var __=A((hG,l_)=>{t();var Vy=s_(),$y=p_(),qy=d_();function jy(e,o,n){return o===o?qy(e,o,n):Vy(e,$y,n)}l_.exports=jy});var g_=A((TG,u_)=>{t();var zy=__();function Ky(e,o){var n=e==null?0:e.length;return!!n&&zy(e,o,0)>-1}u_.exports=Ky});var h_=A((xG,f_)=>{t();function Xy(e,o,n){for(var r=-1,c=e==null?0:e.length;++r<c;)if(n(o,e[r]))return!0;return!1}f_.exports=Xy});var x_=A((yG,T_)=>{t();function Jy(e,o){return e.has(o)}T_.exports=Jy});var S_=A((SG,y_)=>{t();var Yy=Gr(),Zy=Tt(),Qy=Yy(Zy,"Set");y_.exports=Qy});var w_=A((bG,b_)=>{t();function eS(){}b_.exports=eS});var Oi=A((wG,v_)=>{t();function oS(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}v_.exports=oS});var A_=A((vG,I_)=>{t();var Bi=S_(),nS=w_(),tS=Oi(),rS=1/0,aS=Bi&&1/tS(new Bi([,-0]))[1]==rS?function(e){return new Bi(e)}:nS;I_.exports=aS});var L_=A((IG,k_)=>{t();var iS=a_(),sS=g_(),cS=h_(),pS=x_(),mS=A_(),dS=Oi(),lS=200;function _S(e,o,n){var r=-1,c=sS,p=e.length,m=!0,d=[],l=d;if(n)m=!1,c=cS;else if(p>=lS){var _=o?null:mS(e);if(_)return dS(_);m=!1,c=pS,l=new iS}else l=o?[]:d;e:for(;++r<p;){var T=e[r],u=o?o(T):T;if(T=n||T!==0?T:0,m&&u===u){for(var x=l.length;x--;)if(l[x]===u)continue e;o&&l.push(u),d.push(T)}else c(l,u,n)||(l!==d&&l.push(u),d.push(T))}return d}k_.exports=_S});var E_=A((AG,P_)=>{t();var uS=L_();function gS(e){return e&&e.length?uS(e):[]}P_.exports=gS});var Ui={};Ze(Ui,{css:()=>F_,default:()=>US});var F_,US,Wi=b(()=>{"use strict";t();F_=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(F_));US={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var uo={};Ze(uo,{css:()=>G_,default:()=>HS});var G_,HS,go=b(()=>{"use strict";t();G_=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(G_));HS={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Tb={};Ze(Tb,{createSubscription:()=>kg,mockResponse:()=>Bo,mockWindowHistory:()=>hb,mockWindowLocation:()=>fb,renderWithProvider:()=>gb,rest:()=>ho.rest,server:()=>Pg,testAddress:()=>ha,testNetwork:()=>Oo,testReceiver:()=>Ag});module.exports=Oe(Tb);t();t();no();F();var ha="erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3",Oo=ke["devnet"],Ag="erd1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqyc44rx";t();t();var kg=(e,o)=>{function n(U){U()}let r=n,c=()=>r;function p(){let U=c(),D=null,L=null;return{clear(){D=null,L=null},notify(){U(()=>{let O=D;for(;O;)O.callback(),O=O.next})},get(){let O=[],C=D;for(;C;)O.push(C),C=C.next;return O},subscribe(O){let C=!0,B=L={callback:O,next:null,prev:L};return B.prev?B.prev.next=B:D=B,function(){!C||D===null||(C=!1,B.next?B.next.prev=B.prev:L=B.prev,B.prev?B.prev.next=B.next:D=B.next)}}}}let m={notify:()=>({}),get:()=>[]},d,l=m;function _(U){return P(),l.subscribe(U)}function T(){l.notify()}function u(){E.onStateChange&&E.onStateChange()}function x(){return Boolean(d)}function P(){d||(d=o?o.addNestedSub(u):e.subscribe(u),l=p())}function k(){d&&(d(),d=void 0,l.clear(),l=m)}let E={addNestedSub:_,notifyNestedSubs:T,handleChangeWrapper:u,isSubscribed:x,trySubscribe:P,tryUnsubscribe:k,getListeners:()=>l};return E};t();var ho=require("msw"),Us=require("msw/node");t();t();var Ds={address:"erd1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqzu66jx",balance:"116893786890813785912",nonce:12320,shard:0,rootHash:"wICKVeNpCg/TsBRyRyZMMMhcW1KENpAbopfinRVyENQ=",txCount:12655,scrCount:14084,developerReward:"0"};t();var Ms=[{hash:"fff67d31476ad920d53093a3a4c2178e198179b35656eeefa419107fa718b780",timestamp:1671204768}];t();var Os={data:{config:{erd_adaptivity:"false",erd_chain_id:"D",erd_denomination:18,erd_gas_per_data_byte:1500,erd_gas_price_modifier:"0.01",erd_hysteresis:"0.200000",erd_latest_tag_software_version:"D1.3.50.0-hf01",erd_max_gas_per_transaction:6e8,erd_meta_consensus_group_size:58,erd_min_gas_limit:5e4,erd_min_gas_price:1e9,erd_min_transaction_version:1,erd_num_metachain_nodes:58,erd_num_nodes_in_shard:58,erd_num_shards_without_meta:3,erd_rewards_top_up_gradient_point:"2000000000000000000000000",erd_round_duration:6e3,erd_rounds_per_epoch:1200,erd_shard_consensus_group_size:21,erd_start_time:1648551600,erd_top_up_factor:"0.500000"}},code:"successful"};t();var Bs={id:"devnet",name:"Devnet",egldLabel:"xEGLD",decimals:"4",egldDenomination:"18",gasPerDataByte:"1500",apiTimeout:"4000",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletAddress:"https://devnet-wallet.multiversx.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",chainId:"D"};t();var Fs={sid:"RlV7upxKjiJRyIhRAKb5",upgrades:["websocket"],pingInterval:25e3,pingTimeout:2e4,maxPayload:1e6};t();var Ta={url:"devnet-socket-api.multiversx.com"};var Bo=e=>(o,n,r)=>n(r.status(200),r.json(e)),Lg=[ho.rest.get(`${Oo.apiAddress}/dapp/config`,Bo(Bs)),ho.rest.get(`${Oo.apiAddress}/network/config`,Bo(Os)),ho.rest.get(`https://${Ta.url}/socket.io/`,Bo(Fs)),ho.rest.get(`${Oo.apiAddress}/websocket/config`,Bo(Ta)),ho.rest.get(`${Oo.apiAddress}/accounts/${ha}`,Bo(Ds)),ho.rest.get(`${Oo.apiAddress}/blocks`,Bo(Ms))],Pg=(0,Us.setupServer)(...Lg);t();t();var Zr=w(require("react")),Fu=require("@testing-library/react"),Uu=require("history");F();t();t();var $n=w(require("react")),Mu=require("react-redux"),Ou=require("redux-persist/integration/react");t();var Io=require("react");t();t();t();var mm=w(require("axios"));t();t();R();t();var tp=w(require("lodash.isequal")),lr=require("reselect"),v=(0,lr.createSelectorCreator)(lr.defaultMemoize,tp.default);var ze=e=>e.account,Pe=v(ze,e=>e.address),io=v(ze,Pe,(e,o)=>o in e.accounts?e.accounts[o]:jt),rp=v(ze,io,(e,o)=>{let c=e,{accounts:n}=c,r=Me(c,["accounts"]);return I(f({},r),{address:o.address,account:o})}),rI=v(io,e=>e.balance),ap=v(io,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),aI=v(ze,e=>e.shard),ja=v(ze,e=>e.ledgerAccount),iI=v(ze,e=>e.walletConnectAccount),sI=v(ze,e=>e.isAccountLoading),cI=v(ze,e=>e.accountLoadingError),ip=v(ze,e=>e.websocketEvent),sp=v(ze,e=>e.websocketBatchEvent);t();var cp=e=>e.dappConfig,pp=v(cp,e=>e.shouldUseWebViewProvider);t();var J=e=>e.loginInfo,mp=v(J,e=>e.loginMethod),so=v(J,Pe,(e,o)=>Boolean(o)),dp=v(J,e=>e.walletConnectLogin),_r=v(J,e=>e.ledgerLogin),ur=v(J,e=>e.walletLogin),lp=v(J,e=>e.isLoginSessionInvalid),hn=v(J,e=>e.tokenLogin),So=v(J,e=>e.logoutRoute),hf=v(J,e=>e.isWalletConnectV2Initialized);t();var _p=e=>e.modals,fI=v(_p,e=>e.txSubmittedModal),Tf=v(_p,e=>e.notificationModal);t();var Ee=e=>e.networkConfig,Vo=v(Ee,e=>e.network.chainId),up=v(Ee,e=>e.network.roundDuration),xI=v(Ee,e=>e.network.walletConnectBridgeAddress),gp=v(Ee,e=>e.network.walletConnectV2RelayAddress),fp=v(Ee,e=>e.network.walletConnectV2ProjectId),hp=v(Ee,e=>e.network.walletConnectV2Options),Tp=v(Ee,e=>e.network.walletConnectDeepLink),Y=v(Ee,e=>e.network),at=v(Y,e=>e.apiAddress),xp=v(Y,e=>e.explorerAddress),gr=v(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),xf=v(Y,e=>e.xAliasAddress),yp=v(Y,e=>e.egldLabel);t();var fr=e=>e.signedMessageInfo,bI=v(fr,e=>e.isSigning),wI=v(fr,e=>e.errorMessage),vI=v(fr,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),II=v(fr,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var Sp=e=>e.toasts,yf=v(Sp,e=>e.customToasts),bp=v(Sp,e=>e.transactionToasts);t();R();var wp={errorMessage:Fa,successMessage:Ua,processingMessage:Wa},vp=e=>e.transactionsInfo,Sf=v(vp,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||wp);t();t();var Ke=require("@multiversx/sdk-core");N();t();var za=require("@multiversx/sdk-core/out");t();t();function it(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function $o(e){return it(e)?atob(e):e}t();t();t();t();var Ip=e=>{let o=e!=null?e:"";return it(o)?za.TransactionPayload.fromEncoded(o):new za.TransactionPayload(o)};t();N();var st=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(xa).some(n=>e.startsWith(n)):!1;function Tn(e){var r,c,p;let o=f({},e);st({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new Ke.Transaction(f(f(I(f(I(f({value:o.value.valueOf(),data:Ip(o.data),nonce:o.nonce.valueOf(),receiver:new Ke.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Ke.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Wt,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Gt,chainID:o.chainID.valueOf(),version:new Ke.TransactionVersion((p=o.version)!=null?p:Ks)}),o.options?{options:new Ke.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Ke.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();N();t();t();var Ja=require("@reduxjs/toolkit"),qp=require("react-redux/lib/utils/Subscription");R();t();var Ap=w(require("lodash.throttle"));N();R();Ca();dn();Fo();var wf=[Ht],hr=!1,vf=(0,Ap.default)(()=>{Qn(Zn())},5e3),kp=e=>o=>n=>{if(wf.includes(n.type))return o(n);let r=e.getState(),c=Ve.local.getItem(ge.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(c==null)return Qn(Zn());let m=Date.now();return c-m<0&&!hr?setTimeout(()=>{hr=!0,e.dispatch(uc())},1e3):(hr&&(hr=!1),vf()),o(n)};t();t();function Tr(){return typeof sessionStorage!="undefined"}var Hp=Tr()?(Rp(),Oe(Np)).default:(Mp(),Oe(Dp)).default,Vp=Tr()?(Bp(),Oe(Op)).default:[],$p=Tr()?(Gp(),Oe(Wp)).default:e=>e;xr();var S=(0,Ja.configureStore)({reducer:Hp,middleware:e=>e({serializableCheck:{ignoredActions:[...Vp,Kt.type,To.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(kp)}),jp=(0,qp.createSubscription)(S),zp=$p(S),UA=(0,Ja.configureStore)({reducer:qo});t();t();var Kf=require("@multiversx/sdk-core/out");t();N();t();var pt=require("@multiversx/sdk-core");F();t();var Kp=require("@multiversx/sdk-core");function Xf(e){try{let o=new Kp.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function xn(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Xf(e)}var Jf=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Ya(e,o,n=""){if(!xn(e))return!1;if(new pt.Address(e).isContractAddress())return!0;let p=Xp({receiver:e,data:n});return p?new pt.Address(p).isContractAddress()||Qf(e,o,n):!1}var Yf=e=>e.toLowerCase().match(/[0-9a-f]/g),Zf=e=>e.length%2===0;function Qf(e,o,n){let r=n==null?void 0:n.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=Jf.includes(c),l=p.every(_=>Yf(_)&&Zf(_));return m&&d&&l}function Xp({receiver:e,data:o}){try{if(!o)return e;let n=it(o)?pt.TransactionPayload.fromEncoded(o).toString():o,r=eh(n),c=n.split("@");return r>-1?c[r]:e}catch(n){console.log(n);return}}function eh(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}t();t();t();var oh=require("@multiversx/sdk-core"),nh=w(require("bignumber.js"));H();t();t();t();var yn="accounts";var Za="blocks";var Qa="dapp/config";var ei="network/config";var yr="batch",Sn="transactions";t();t();t();t();le();t();t();le();t();t();t();var ch=w(require("bignumber.js"));N();t();var sh=require("@multiversx/sdk-core"),oi=w(require("bignumber.js"));N();t();var Qp=w(require("bignumber.js")),br=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let r=new Qp.default(n),c=o?0:-1;return r.toString(10)===n&&r.comparedTo(0)>=c};t();oi.default.config({ROUNDING_MODE:oi.default.ROUND_FLOOR});t();t();t();N();t();t();t();t();N();t();N();t();var ph=require("@multiversx/sdk-core");N();t();var dt=require("@multiversx/sdk-core"),lh=w(require("bignumber.js"));N();t();t();var mh=w(require("bignumber.js"));N();t();N();t();t();t();t();t();t();N();t();N();t();N();t();le();var uh=["reDelegateRewards","claimRewards","unBond"],gh=["wrapEgld","unwrapEgld"],fh=["unStake"],hh=["unDelegate"];t();t();t();N();t();var Sh=w(require("bignumber.js"));t();t();le();t();var wh=w(require("bignumber.js"));t();t();t();t();var Ah=w(require("bignumber.js"));F();t();t();t();t();H();t();var nm=require("@multiversx/sdk-web-wallet-provider");N();t();var om=w(require("qs"));t();se();var wr=e=>{let o=new URLSearchParams(e).toString(),{pathname:n,hash:r}=V(),c=o?`?${o}`:"",p=n?`${n}${c}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};_n();t();_n();var kh={search:to()?window.location.search:"",removeParams:[]},lt=(e,o=kh)=>{var m;let n={},r=to()?window.location.search:"",c=(m=o.search)!=null?m:r;if(c){let d=c?new URLSearchParams(c):[];n=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=n[d],delete n[d]}),o.removeParams!=null&&Object.keys(n).forEach(d=>{var _,T;let[l]=d.split("[");(((_=o.removeParams)==null?void 0:_.includes(d))||((T=o.removeParams)==null?void 0:T.includes(l)))&&delete n[d]}),{remainingParams:p,params:n,clearNavigationHistory:()=>wr(n)}};var ri=({removeParams:e,search:o})=>{let n=to()?window.location.search:"",r=o!=null?o:n;if(!r)return{};let c=om.default.parse(r.replace("?","")),p=Object.keys(c).filter(d=>!e.includes(d)),{remainingParams:m}=lt(p,{search:o,removeParams:e});return wr(m),m};var ai=({transaction:e,search:o})=>ri({removeParams:[...Object.keys(e),nm.WALLET_PROVIDER_CALLBACK_PARAM,Yn,wa],search:o});t();t();t();ae();t();le();t();t();ae();t();var Lh=w(require("linkifyjs"));t();N();t();var Ph=w(require("bignumber.js"));t();F();t();t();H();t();H();t();t();t();le();t();le();t();var Eh=w(require("bignumber.js"));N();le();t();le();t();var rm=require("react");F();t();t();le();t();t();var Ch=require("@multiversx/sdk-core/out"),Nh=w(require("bignumber.js"));le();t();F();t();t();F();var DC=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var am=require("react");F();ae();t();var Dh=require("react");le();var HC=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];fn();t();var vr=e=>e.transactions,mo=v(vr,e=>e.signedTransactions),Mh=v(vr,e=>e.signTransactionsError),im=v(vr,e=>e.signTransactionsCancelMessage),Ir=e=>o=>Object.entries(o).reduce((n,[r,c])=>(e(c.status)&&(n[r]=c),n),{}),ii=v(mo,Ir(ao)),sm=v(mo,Ir(Wo)),cm=v(mo,Ir(Go)),Oh=v(mo,Ir(Ha)),pm=v(vr,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:I(f({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>Tn(n)))||[]})}),Bh=v(mo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});function Ar(e){return g(this,null,function*(){let{apiAddress:o,apiTimeout:n}=Y(S.getState()),r=e.map(p=>mm.default.post(`${o}/transactions`,p.toPlainObject(),{timeout:parseInt(n)}));return(yield Promise.all(r)).map(({data:p})=>p.txHash)})}t();var dm=w(require("axios"));no();t();N();var ut=({sessionId:e,address:o})=>`${e}${Vt}${o}`;function kr(n){return g(this,arguments,function*({transactions:e,sessionId:o}){var m;let r=Pe(S.getState()),{apiAddress:c,apiTimeout:p}=Y(S.getState());if(!r)return{error:"Invalid address provided. You need to be logged in to send transactions",batchId:null};try{let d=ut({sessionId:o,address:r}),l={transactions:e,id:d},_=yield dm.default.post(`${c}/${yr}`,l,{timeout:Number(p!=null?p:Ut)});return{batchId:d,data:_.data}}catch(d){return console.error("error sending batch transactions",d),{error:(m=d==null?void 0:d.message)!=null?m:"error sending batch transactions",batchId:null}}})}t();var si=w(require("axios"));var Lr=e=>g(void 0,null,function*(){let o=at(S.getState()),n=e.map(c=>c.hash),{data:r}=yield si.default.get(`${o}/${Sn}`,{params:{hashes:n.join(","),withScResults:!0}});return e.map(({hash:c,previousStatus:p})=>{let m=r.find(d=>(d==null?void 0:d.txHash)===c);return{hash:c,data:m==null?void 0:m.data,invalidTransaction:m==null,status:m==null?void 0:m.status,results:m==null?void 0:m.results,sender:m==null?void 0:m.sender,receiver:m==null?void 0:m.receiver,previousStatus:p,hasStatusChanged:m&&m.status!==p}})}),lm=e=>{let o=at(S.getState());return si.default.get(`${o}/transactions/${e}`,{timeout:1e4})};t();var Uh=w(require("axios"));t();t();var Wh=w(require("axios"));t();var Gh=w(require("axios"));t();t();t();t();t();var um=require("@lifeomic/axios-fetch"),ci=w(require("axios")),pi=(0,um.buildAxiosFetch)(ci.default),mi=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Hh(e,o,n){return g(this,null,function*(){try{let r=yield pi(e,f({method:"POST",body:o?JSON.stringify(o):void 0,headers:f({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return mi(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function Vh(e,o){return g(this,null,function*(){try{let n=yield pi(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return mi(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function $h(e,o,n){return g(this,null,function*(){try{let r=yield pi(e,f({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return mi(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var bo=ci.default.create();bo.get=Vh;bo.post=Hh;bo.patch=$h;var gm=e=>bo.get(e).then(o=>o.data);t();var jo=e=>{let o=e!=null?e:at(S.getState());return o.endsWith("/")?o.slice(0,-1):o};t();var qh=w(require("axios"));t();var fm=w(require("swr"));var bn=({apiEndpoint:e})=>{let o=jo(),n=e?`${o}/${e}`:null;return(0,fm.default)(n,gm)};t();t();var jh=e=>{let n=`${jo()}/${yn}/${e}?withGuardianInfo=true`;return bo.get(n)},hm=e=>g(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield jh(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});t();var gt=e=>bn({apiEndpoint:e?`${yn}/${e}?withGuardianInfo=true`:null});t();t();no();t();var Tm=w(require("axios"));function di(e){return g(this,null,function*(){let o=`${e}/${Qa}`;try{let{data:r}=yield Tm.default.get(o);if(r!=null){let c="egldDenomination";if(c in r){let n=r,{[c]:p,decimals:m}=n,d=Me(n,[ra(c),"decimals"]);return I(f({},d),{decimals:p,digits:m})}return r}}catch(r){console.error("error fetching configuration for ",o)}return null})}t();var xm=w(require("axios"));var zh=e=>{try{return Boolean(new URL(e))}catch(o){return!1}};function ym(){return g(this,null,function*(){var n;let e=jo();if(!zh(e))return null;let o=`${e}/${ei}`;try{let{data:r}=yield xm.default.get(o);if(r!=null)return(n=r==null?void 0:r.data)==null?void 0:n.config}catch(r){console.error("error fetching configuration for ",o)}return null})}t();no();t();no();t();t();t();t();var Xh=w(require("axios"));t();N();t();var td=require("react"),Mr=require("@multiversx/sdk-core");t();t();t();var bm=require("react"),wn=require("react-redux");var Jh={store:S,subscription:jp},ft=(0,bm.createContext)(Jh),XD=(0,wn.createStoreHook)(ft),M=(0,wn.createDispatchHook)(ft),y=(0,wn.createSelectorHook)(ft);var fe=()=>y(io);t();var lo=()=>y(rp);t();t();t();t();var wm=require("@multiversx/sdk-extension-provider"),vm=require("@multiversx/sdk-hw-provider"),Im=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Am=require("@multiversx/sdk-opera-provider"),km=require("@multiversx/sdk-passkey-provider/out"),li=require("@multiversx/sdk-web-wallet-provider");N();fo();t();var _o=require("@multiversx/sdk-web-wallet-iframe-provider/out"),vn=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");H();t();var Pr={},Er=In;var Yh="/dapp/init",we=e=>{switch(e==null?void 0:e.constructor){case li.WalletProvider:return"wallet";case Er:return"walletconnectv2";case vm.HWProvider:return"ledger";case wm.ExtensionProvider:return"extension";case km.PasskeyProvider:return"passkey";case Im.MetamaskProvider:return"metamask";case Am.OperaProvider:return"opera";case Ae.CrossWindowProvider:return"crossWindow";case _o.IframeProvider:return"iframe";case In:return"";default:return"extra"}},Cr=e=>new li.WalletProvider(`${e}${Yh}`),_i=e=>g(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:n,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:n===Xs}}),Ce=e=>`Unable to perform ${e}, Provider not initialized`,In=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Ce("getAccount"))}setAccount(o){throw new Error(Ce(`setAccount: ${o}`))}login(o){throw new Error(Ce(`login with options: ${o}`))}logout(o){throw new Error(Ce(`logout with options: ${o}`))}getAddress(){throw new Error(Ce("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(Ce(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(Ce(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(Ce(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(Ce(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(Ce(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(Ce(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},zo=new In;var gi=zo,ui=null;function ne(e){gi=e}function fi(e){ui=e}function Nr(){ui!=null&&(gi=ui)}function pe(){return gi||zo}var An=()=>{let e=pe(),o=we(e);return{provider:e,providerType:o}};t();var Lm=()=>y(sp);t();t();t();t();t();t();var ht=w(require("react"));var E2=(0,ht.createContext)({}),C2=S.getState();t();var Em=w(require("react"));t();var hi=w(require("react")),Zh=w(require("axios"));t();t();var Cm=()=>y(ip);R();t();t();var nd=require("@multiversx/sdk-native-auth-client");t();var Dm=w(require("axios"));t();t();t();function Nm(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var Rm=(e,o,n,r=0)=>g(void 0,null,function*(){try{return yield e(...n)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Nm(o.delay)),yield Rm(e,o,n,r+1)):null}}),Rr=(e,o={retries:5,delay:500})=>(...n)=>g(void 0,null,function*(){return yield Rm(e,o,n)});var Qh=4,eT=3e4,Dr={current:null},Ko={current:null},oT=Rr((e,o,n)=>g(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield Dm.default.get(`${e}/${Za}?from=${Qh}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));function Mm(e,o,n,r){return g(this,null,function*(){if(e==null)throw new Error("missing api url");let c=Date.now();if(Dr.current!=null&&c<Dr.current.timestamp*1e3+eT&&!r)return Dr.current;if(Ko.current!=null)return yield Ko.current;Ko.current=oT(e,o,n);try{let p=yield Ko.current;if(p==null)throw Ko.current=null,new Error("could not get block hash");return Dr.current={hash:p.hash,timestamp:p.timestamp},Ko.current=null,p}catch(p){return Ko.current=null,null}})}t();t();$t();t();t();var od=w(ed());var kn=e=>{if(!e||!(0,od.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,c,p]=o,m=JSON.parse($o(p)),d=$o(n);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};function AT(e){return Object.prototype.toString.call(e)==="[object String]"}var Ln=e=>{var n;if(!e||!AT(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,c,p]=o,m=$o(r),d=$o(c),l=kn(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let _=I(f({},l),{address:m,body:d,signature:p});return(n=l.extraInfo)!=null&&n.timestamp||delete _.extraInfo,_}catch(r){return null}};var yi={isExpired:!1},Pn=e=>{if(!e)return yi;let o=Ln(e);if(!o)return yi;let n=mn(),{ttl:r,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return yi;let m=p+r,d=n>m,l=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};t();ae();var yt={origin:V().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},St=e=>{var n,r,c,p,m,d;return e===!0?yt:{origin:(n=e==null?void 0:e.origin)!=null?n:yt.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:yt.expirySeconds,apiAddress:(c=e==null?void 0:e.apiAddress)!=null?c:yt.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:yt.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var bt=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:c,extraInfo:p,gatewayUrl:m,extraRequestHeaders:d}=St(e),l=new nd.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:c,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:St,initialize:u=>g(void 0,null,function*(){var P,k;if(!n||!o)return"";let x=()=>l.getCurrentBlockHash();try{let E=(P=u==null?void 0:u.latestBlockInfo)!=null?P:yield Mm(n,c,x,u==null?void 0:u.noCache);if(!E)return"";let{hash:U,timestamp:D}=E,L=l.encodeValue(JSON.stringify(f(f({},(k=u==null?void 0:u.extraInfo)!=null?k:p),D?{timestamp:D}:{})));return`${l.encodeValue(o)}.${U}.${r}.${L}`}catch(E){return console.error("Error getting native auth token: ",E.toString()),""}}),getToken:({address:u,token:x,signature:P})=>l.getToken(u,x,P),getTokenExpiration:Pn}};var kT=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},Ne=e=>{let o=y(Y),n=y(hn),r=(0,td.useRef)(n==null?void 0:n.loginToken),c=kT(o.apiAddress,e),p=St(f(f({},e===!0?{}:e),c?{apiAddress:c}:{})),m=Boolean(e),d=bt(p),{address:l}=fe(),_=M(),T=k=>{r.current=k,_(xo(f(I(f({},n),{loginToken:k}),c?{nativeAuthConfig:p}:{})))},u=()=>{try{return d.initialize()}catch(k){console.error("Unable to get block. Login failed.",k);return}},x=({address:k,signature:E})=>{let U=r.current;if(!U)throw"Token not found. Call `setLoginToken` first.";if(!m){_(xo({loginToken:U,signature:E}));return}let D=d.getToken({address:k,token:U,signature:E});return _(xo(f({loginToken:U,signature:E,nativeAuthToken:D},c?{nativeAuthConfig:p}:{}))),D};return{configuration:p,setLoginToken:T,getNativeAuthLoginToken:u,setTokenLoginInfo:x,refreshNativeAuthTokenLogin:U=>g(void 0,[U],function*({signMessageCallback:k,nativeAuthClientConfig:E}){let L=yield bt(E||p).initialize({noCache:Boolean(E)});if(r.current=L,!L)return;let O=new Mr.Message({address:new Mr.Address(l),data:a.Buffer.from(`${l}${L}`)}),C=yield k(O,{});if(!(C!=null&&C.signature))throw"Message not signed";return x({address:l,signature:a.Buffer.from(C.signature).toString("hex")})})}};t();var ue=require("react");t();var Or=require("react");function rd(e,o=[]){let n=(0,Or.useRef)(!0);(0,Or.useEffect)(()=>{n.current?n.current=!1:e()},o)}q();R();H();t();t();var pd=w(Br());Jn();var id,sd,cd,PT=(cd=(sd=(id=Le.safeWindow)==null?void 0:id.location)==null?void 0:sd.origin)==null?void 0:cd.includes("localhost"),md=e=>{if(!(0,pd.default)(e))return Boolean(e);let n=f({},e);return Boolean(PT)&&delete n.origin,Object.keys(n).length>0};t();function Xe(){return so(S.getState())}ro();t();q();F();t();function dd(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function ld(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ET(e.path,e.caseSensitive,e.end),c=o.match(n);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),d=c.slice(1);return{params:r.reduce((_,T,u)=>{if(T==="*"){let x=d[u]||"";m=p.slice(0,p.length-x.length).replace(/(.)\/+$/,"$1")}return _[T]=CT(d[u]||"",T),_},{}),pathname:p,pathnameBase:m,pattern:e}}function ET(e,o=!1,n=!0){dd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),r]}function CT(e,o){try{return decodeURIComponent(e)}catch(n){return dd(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}t();t();ae();var _d=()=>{let{search:e}=V(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return xn(r)?r:null};t();var Xo=e=>hm(e);t();t();function ud(){let e=pe();return we(e)}t();H();t();function Jo(e){return ud()===e}function he(){let e=S.getState(),o=pe(),n=Pe(e),r=so(e),c=ur(e);if(!o)throw"provider not initialized";return Jo("ledger")&&r?new Promise(p=>{p(n)}):!Jo("")&&!Jo("wallet")&&!Jo("extra")?o.getAddress():new Promise(p=>{let m=_d();c!=null&&m&&p(m),r&&p(n),p("")})}t();function Yo(e){let o=S.getState(),n=ap(o);return e?n&&!isNaN(n)?Math.max(n,e.nonce):e.nonce:n}t();t();ae();var Fr=()=>{let{search:e}=V(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var En=()=>{var n;let e=Fr(),o=J(S.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};t();q();F();t();R();var gd=()=>g(void 0,null,function*(){try{let e=yield he();try{let o=yield Xo(e);if(o!=null){let n=I(f({},o),{nonce:Yo(o)});return S.dispatch(To(n)),n}}catch(o){console.error("Failed getting account ",o)}}catch(e){console.error("Failed getting address ",e)}return null});function wo(){return g(this,null,function*(){let e=pe();if(e==null)throw"Provider not initialized";if(!e.isInitialized||e.isInitialized())return gd();try{if(!e.init)throw"Current provider does not have init() function";return(yield e.init())?gd():void 0}catch(o){console.error("Failed initializing provider ",o)}})}t();R();function fd(e){S.dispatch(Kt(e))}t();var hd=require("@multiversx/sdk-core");F();se();gn();dn();Fo();se();var Td=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&Uo({url:e})},NT=e=>{let o=Ve.local.getItem(ge.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&(Ve.local.setItem({key:ge.logoutEvent,data:e,expires:0}),Ve.local.removeItem(ge.logoutEvent))},RT=500;function Te(c,p){return g(this,arguments,function*(e,o,n=Boolean(En()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var k;let m="",d=pe(),l=we(d),_=l==="wallet",T=((k=d==null?void 0:d.isInitialized)==null?void 0:k.call(d))===!0;if(n&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield he(),NT(m)}catch(E){console.error("error fetching logout address",E)}let u=un(e),x=V(),P=new URL(decodeURIComponent(u)).pathname;if((ld(x.pathname,P)||_&&T)&&Ac(),!m&&!T)return Td({callbackUrl:u,onRedirect:o});try{if(S.dispatch($()),_)return setTimeout(()=>{d.logout({callbackUrl:u})},RT);r.hasConsentPopup&&l==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:u})}catch(E){console.error("Logging out error:",E)}finally{_||Td({callbackUrl:u,onRedirect:o})}})}t();var xd=({maxRetries:e})=>new Promise((o,n)=>{let r=0,c=()=>{let p=Vo(S.getState());if(p){o(p);return}if(r<e){r++,setTimeout(c,1e3);return}n(null)};c()});ae();t();t();fo();F();var vo=e=>(Object.values(z).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=Ae.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=_o.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);var Si=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,logoutRoute:c,customRequestMethods:p=[]})=>{var No;let m=M(),d=md(n),l=Ne(d?n:!1),_=o,[T,u]=(0,ue.useState)(""),[x,P]=(0,ue.useState)(""),[k,E]=(0,ue.useState)(!0),[U,D]=(0,ue.useState)([]),[L,O]=(0,ue.useState)(null),{provider:C}=An(),B=y(gp),Z=y(fp),ve=y(hp),Ye=y(Tp),qn=y(So),jn=y(mp),W=(0,ue.useRef)(C),Po=(0,ue.useRef)(!1),Eo=(0,ue.useRef)(!1),Pt=(No=c!=null?c:qn)!=null?No:"/",on=[Pr.CANCEL_ACTION,...p];o&&on.push(Pr.SIGN_LOGIN_TOKEN),d&&on.push(Pr.SIGN_NATIVE_AUTH_TOKEN);let Qr=k?"":`${Ye}?wallet-connect=${encodeURIComponent(x)}`,zn=Boolean(T),Kn=Xe(),ea=()=>{Te(Pt)},oa=Q=>{console.log("WalletConnect Session Event: ",Q)},X=()=>g(void 0,null,function*(){var Q,ee,oe,ie;try{if(Po.current||W.current==null)return;if(!Eo.current){try{yield(Q=W.current)==null?void 0:Q.logout()}catch(na){console.warn("Unable to logout")}return}let ce=yield(oe=(ee=W.current)==null?void 0:ee.getAddress)==null?void 0:oe.call(ee);if(!ce){console.warn("Login cancelled.");return}let Ie=yield(ie=W.current)==null?void 0:ie.getSignature(),xe={address:ce,loginMethod:"walletconnectv2"},nn={logoutRoute:Pt,loginType:"walletconnectv2",callbackRoute:e!=null?e:V().href};m(_c(nn)),Ie&&l.setTokenLoginInfo({signature:Ie,address:ce}),m(re(xe)),yo({callbackRoute:e,onLoginRedirect:r,options:{address:ce,signature:Ie}})}catch(ce){u("User rejected connection proposal"),console.error(ce)}}),G=()=>g(void 0,null,function*(){var ee,oe,ie,ce,Ie;if(we(W.current)==="walletconnectv2")try{((ce=(ie=(oe=(ee=W.current)==null?void 0:ee.walletConnector)==null?void 0:oe.session)==null?void 0:ie.getAll())!=null?ce:[]).length>0&&(yield(Ie=W.current)==null?void 0:Ie.logout()),W.current=zo,O(null)}catch(xe){console.warn("Unable to logout")}}),me=Q=>g(void 0,null,function*(){var ee,oe,ie;if(!B||!Z){u("Invalid WalletConnect setup");return}if(!Q||!Q.topic){u("Expired connection");return}try{if((W.current?we(W.current):!1)!=="walletconnectv2"){yield Co();return}if(E(!0),yield G(),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}_&&l.setLoginToken(_),yield Co(!1);let{approval:Ie}=yield(ee=W.current)==null?void 0:ee.connect({topic:Q.topic,methods:on});try{yield(oe=W.current)==null?void 0:oe.login({approval:Ie,token:_})}catch(xe){console.error("User rejected existing connection proposal",xe),u("User rejected existing connection proposal"),E(!0),yield Co()}}catch(ce){console.error("Unable to connect to existing session",ce),u("Unable to connect to existing session")}finally{D((ie=W.current)==null?void 0:ie.pairings)}}),De=Q=>g(void 0,null,function*(){var ee,oe;try{Q&&(yield(ee=W.current)==null?void 0:ee.logout({topic:Q}))}catch(ie){console.error("Unable to remove existing pairing",ie),u("Unable to remove existing pairing")}finally{let ie=yield(oe=W.current)==null?void 0:oe.getPairings();D(ie)}});function Co(Q=!0){return g(this,null,function*(){var nn,na,Zi;vo();let ee=yield xd({maxRetries:15});if(!ee){console.error("Invalid chainID"),u("Invalid chainID");return}if(!Z||!B){console.error("Invalid WalletConnect setup"),u("Invalid WalletConnect setup");return}let oe=Xe(),ie=Eo.current===!1&&!oe,ce=(na=(nn=W.current)==null?void 0:nn.isInitialized)==null?void 0:na.call(nn);if(Po.current||ie||ce)return;if(Po.current=!0,(Zi=W.current)!=null&&Zi.walletConnector){yield W.current.init(),O(W.current),Po.current=!1,Q&&(yield Et());return}let Ie={onClientLogin:X,onClientLogout:ea,onClientEvent:oa},xe=new Er(Ie,ee,B,Z,ve);yield xe.init(),O(xe),W.current=xe,Po.current=!1,Q&&(D(xe.pairings),yield Et())})}function Et(){return g(this,null,function*(){var Q,ee;if(!!W.current){if(!B||!Z){u("Invalid WalletConnect setup");return}try{if(!Eo.current)return;let{uri:oe,approval:ie}=yield(Q=W.current)==null?void 0:Q.connect({methods:on});if(!Boolean(oe))return;if(P(oe),(ve==null?void 0:ve.logger)==="debug"&&console.log("WalletConnect uri: ",oe),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}if(_&&l.setLoginToken(_),(W.current?we(W.current):!1)!=="walletconnectv2"){E(!0),yield Co();return}try{yield(ee=W.current)==null?void 0:ee.login({approval:ie,token:_})}catch(xe){console.error("User rejected connection proposal",xe),u("User rejected connection proposal"),E(!0)}}catch(oe){console.error("Unable to connect",oe)}}})}return rd(()=>{W.current=C},[C]),(0,ue.useEffect)(()=>(Eo.current=!0,()=>{Eo.current=!1}),[]),(0,ue.useEffect)(()=>{E(!x)},[x]),(0,ue.useEffect)(()=>{if(!L)return;(Boolean(L.session)||jn==="walletconnectv2")&&Kn&&ne(L)},[L,Kn]),[Co,{error:T,loginFailed:zn,isLoading:k&&!zn,isLoggedIn:Kn&&!zn},{uriDeepLink:Qr,walletConnectUri:x,cancelLogin:G,connectExisting:me,removeExistingPairing:De,wcPairings:U}]};t();var yd=require("react");t();q();R();F();function Ur(e,o=S.dispatch){let n=Ln(e);if(n==null)return;let{signature:r,address:c}=n;r&&e&&c&&(o(xo({loginToken:e,signature:r,nativeAuthToken:e})),o(re({address:c,loginMethod:"extra"})))}function Sd(){let e=M(),o=y(pp),n=En();(0,yd.useEffect)(()=>{!o||!n||Ur(n,e)},[n,o])}q();R();t();t();N();t();t();t();var Zo=w(require("bignumber.js")),bi=e=>{let o=new Zo.default(e).dividedBy(1e3).integerValue(Zo.default.ROUND_FLOOR),n=new Zo.default(o).dividedBy(60).integerValue(Zo.default.ROUND_FLOOR),r=new Zo.default(n).dividedBy(60).integerValue(Zo.default.ROUND_FLOOR),c=r.modulo(60).isGreaterThan(1),p=n.modulo(60).isGreaterThan(1),m=n.modulo(60).isLessThan(1);return c?`${r} hours`:p?`${n} minutes`:m?"less than 1 minute":`${n} minute`};H();t();t();var bd=require("@multiversx/sdk-opera-provider");function wd(e){return g(this,null,function*(){try{let o=bd.OperaProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise opera crypto wallet, make sure that opera crypto wallet is installed.")}catch(o){console.error("Unable to login to OperaProvider",o)}return null})}t();var vd=require("@multiversx/sdk-extension-provider");function Id(e){return g(this,null,function*(){try{let o=vd.ExtensionProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise extension, make sure MultiversX wallet extension is installed.")}catch(o){console.error("Unable to login to ExtensionProvider",o)}return null})}t();fo();function wi(n){return g(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield Ae.CrossWindowProvider.getInstance().init(),c=Ae.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return c;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}t();function Ad(r){return g(this,arguments,function*({address:e,walletUrl:o,loginType:n}){try{let c=_o.IframeProvider.getInstance();if(c.isInitialized())return c;switch(n){case vn.IframeLoginTypes.passkey:c.setLoginType(vn.IframeLoginTypes.passkey);break;case vn.IframeLoginTypes.metamask:c.setLoginType(vn.IframeLoginTypes.metamask);break;default:break}if(c.setAddress(e).setWalletUrl(o),yield c.init())return c;console.error("Could not initialise IframeProvider")}catch(c){console.error("Unable to login to IframeProvider",c)}return null})}t();t();var kd=n=>g(void 0,[n],function*({loginToken:e,extraInfoData:o}){if(e==null||Object.keys(o).length===0)return null;let r=kn(String(e)),_=(r==null?void 0:r.extraInfo)||{},{timestamp:c}=_,p=Me(_,["timestamp"]);if(!(r&&c!=null))return null;let d={hash:String(r==null?void 0:r.blockHash),timestamp:Number(c)};return yield bt({extraInfo:f(f({},p),o),expirySeconds:r==null?void 0:r.ttl,origin:r==null?void 0:r.origin}).initialize({latestBlockInfo:d})});var vi=p=>g(void 0,[p],function*({loginToken:e,extraInfoData:o,address:n,signature:r,loginService:c}){let m=yield kd({loginToken:e,extraInfoData:o}),d=o.multisig||o.impersonate||n,l=m!=null?d:n;return m!=null&&c.setLoginToken(m),r&&c.setTokenLoginInfo({signature:r,address:n}),yield Xo(l)});t();var Ld=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");function Pd(e){return g(this,null,function*(){try{let o=Ld.MetamaskProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise metamask, make suremetamask flask is installed.")}catch(o){console.error("Unable to login to MetamaskProvider",o)}return null})}t();var Ed=require("@multiversx/sdk-passkey-provider/out");function Cd(e){return g(this,null,function*(){try{let o=Ed.PasskeyProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise passkey provider")}catch(o){console.error("Unable to login to PasskeyProvider",o)}return null})}t();t();var Nd=require("react"),Ii=require("@multiversx/sdk-hw-provider");var Ai=()=>{let e=y(So),o=y(so),n=y(_r),r=pe(),[c,p]=(0,Nd.useState)(),m=()=>g(void 0,null,function*(){let l=(n==null?void 0:n.index)!=null;try{if(r instanceof Ii.HWProvider&&r.isInitialized())return l&&(yield r.setAddressIndex(n.index)),r;let _=new Ii.HWProvider;return(yield _.init())?(l&&(yield _.setAddressIndex(n.index)),_):null}catch(_){return console.error("Failed to initialise Ledger Provider"),null}});function d(l){return g(this,null,function*(){let _,T=o&&!(l!=null&&l.isRelogin);try{if(_=yield m(),!_){console.warn("Could not initialise ledger app"),T&&Te(e);return}let u=yield _i(_);return ne(_),p(u),_}catch(u){console.error("Could not initialise ledger app",u),T&&Te(e)}return null})}return{setLedgerProvider:d,ledgerData:c}};var ki=!1;function Rd(){let e=y(Y),o=y(gr),n=y(dp),{loginMethod:r,iframeLoginType:c}=y(J),p=y(ur),m=y(Pe),d=y(ja),l=y(_r),_=y(so),T=y(Vo),u=y(hn),x=u==null?void 0:u.nativeAuthConfig,P=Ne(x||!1),{data:k,isLoading:E,error:U}=gt(m),D=(0,Io.useRef)(!1),L=M(),{setLedgerProvider:O,ledgerData:C}=Ai();Sd();let{callbackRoute:B,logoutRoute:Z}=n||{callbackRoute:"",logoutRoute:""},[ve]=Si({callbackRoute:B,logoutRoute:Z});(0,Io.useEffect)(()=>{Ye()},[e]),(0,Io.useEffect)(()=>{oa()},[m,r,T]),(0,Io.useEffect)(()=>{jn()},[u==null?void 0:u.nativeAuthToken,m]),(0,Io.useEffect)(()=>{W()},[k,E]),(0,Io.useEffect)(()=>{qn()},[d,_,C]);function Ye(){return g(this,null,function*(){let X=e.chainId&&![Ot,Bt,Ft].includes(e.chainId)&&!e.roundDuration;if(!!(!e.chainId||X))try{let me=yield ym();me&&(e.chainId!==me.erd_chain_id||e.roundDuration!==me.erd_round_duration)&&L(Dc({chainId:me.erd_chain_id,roundDuration:me.erd_round_duration}))}catch(me){console.error("failed refreshing chainId ",me)}})}function qn(){d==null&&l!=null&&C&&L(Ea({index:l.index,address:m,hasContractDataEnabled:C.dataEnabled,version:C.version}))}function jn(){return g(this,null,function*(){let{remainingParams:{impersonate:X,multisig:G}}=lt(["impersonate"]),me=Ya(m);if(!(u!=null&&u.nativeAuthToken)||X||G||me)return;let De=Ln(u==null?void 0:u.nativeAuthToken);(De==null?void 0:De.address)&&De.address!==m&&(L(zt(De.address)),yield wo())})}function W(){return g(this,null,function*(){if(E){L(ln(!0));return}if(U){L(sc("Failed getting account")),console.error("Failed getting account ",U);return}if(D.current){D.current=!1,L(ln(!1));return}k?L(To(I(f({},k),{address:m,nonce:k.nonce.valueOf()}))):_||L(zt("")),L(ln(!1))})}function Po(){return g(this,null,function*(){let X=Cr(o);if(ne(X),p!=null){try{let G=yield he(),{clearNavigationHistory:me,remainingParams:{signature:De,multisig:Co,impersonate:Et}}=lt(["signature","loginToken","address","multisig","impersonate"]);if(!G)return ne(zo),L(xo(null)),L(Yt(null)),me();let No=yield vi({loginToken:u==null?void 0:u.loginToken,extraInfoData:{multisig:Co,impersonate:Et},address:G,signature:De,loginService:P});No&&(D.current=!0,L(ln(!0)),L(re({address:No.address,loginMethod:"wallet"})),L(To(I(f({},No),{nonce:Yo(No)}))),L(ln(!1))),me()}catch(G){console.error("Failed authenticating wallet user ",G)}L(Yt(null))}})}function Eo(){return g(this,null,function*(){let X=yield he(),G=yield Id(X);G&&ne(G)})}function Pt(){return g(this,null,function*(){let X=yield he(),G=yield Cd(X);G&&ne(G)})}function on(){return g(this,null,function*(){let X=yield he(),G=yield Pd(X);G&&ne(G)})}function Qr(){return g(this,null,function*(){let X=yield he(),G=yield wd(X);G&&ne(G)})}function zn(){return g(this,null,function*(){let X=yield he(),G=yield wi({address:X,walletUrl:e.walletAddress});G&&ne(G)})}function Kn(){return g(this,null,function*(){let X=yield he();if(!e.metamaskSnapWalletAddress)throw new Error("Metamask snap wallet URL is not set.");let G=yield Ad({address:X,walletUrl:e.metamaskSnapWalletAddress,loginType:c});G&&ne(G)})}function ea(){return g(this,null,function*(){try{L(Na(!0)),yield ve(!1)}catch(X){console.error("Could not initialize WalletConnect")}finally{L(Na(!1))}})}function oa(){return g(this,null,function*(){if(!(r==null||ki))switch(r){case"ledger":{ki=!0,yield O(),ki=!1;break}case"walletconnectv2":{ea();break}case"extension":{Eo();break}case"passkey":{Pt();break}case"metamask":{on();break}case"opera":{Qr();break}case"crossWindow":{zn();break}case"iframe":Kn();break;case"extra":{Nr();break}case"wallet":case"":{Po();break}default:return}})}return null}t();var Md=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Od=require("@multiversx/sdk-webview-provider/out/WebviewProvider");q();t();t();R();function Li(){S.dispatch(Ho())}function Dd(e){S.dispatch(Yc({batchId:e}))}t();se();t();R();F();t();t();var OT=require("@multiversx/sdk-core"),BT=w(require("bignumber.js"));N();t();t();var FT=w(require("bignumber.js"));N();var Re=class{constructor(){this.init=()=>g(this,null,function*(){return yield this._provider.init()});this.login=()=>g(this,null,function*(){var n;let o=yield this._provider.login();return{address:(n=o==null?void 0:o.address)!=null?n:""}});this.logout=()=>g(this,null,function*(){return S.dispatch($()),yield this._provider.logout()});this.relogin=()=>g(this,null,function*(){let o=yield this._provider.relogin();return o?(Ur(o),Nr(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>g(this,null,function*(){let n=yield this._provider.signTransactions(o);return n||(Li(),this._provider.cancelAction(),null)});this.signTransaction=o=>g(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>g(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>g(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>g(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,Md.providerNotInitializedError)("getAddress");this._provider=Od.WebviewProvider.getInstance({resetStateCallback:()=>S.dispatch($())})}static getInstance(){return Re._instance||(Re._instance=new Re),Re._instance}getAccount(){var n;let o=this._provider.getAccount();return{address:(n=o==null?void 0:o.address)!=null?n:""}}setAccount(o){this._provider.setAccount(o)}};R();F();t();var Je=require("react"),Bd=require("@multiversx/sdk-core/out");no();R();et();nt();var UT=({customNetworkConfig:e={},environment:o,dappConfig:n})=>{let[r,c]=(0,Je.useState)(!1),p=lo(),m=y(lp),d=(0,Je.useMemo)(()=>n,[]),l=d==null?void 0:d.logoutRoute,{address:_,publicKey:T}=p,u=M();function x(){return g(this,null,function*(){let k=!(e!=null&&e.skipFetchFromServer),E=e==null?void 0:e.apiAddress,D=o in ke?ke[o]:{},L=f(f(f({},ot),D),e),O=I(f({},L),{apiTimeout:String(L.apiTimeout),walletConnectBridgeAddresses:L.walletConnectBridgeAddresses||[],walletConnectV2RelayAddresses:"walletConnectV2RelayAddresses"in L?L.walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"]});if(k){let C="apiAddress"in D?D.apiAddress:"",B=yield di(E||C);if(B!=null){let Z=f(f(f({},O),B),e);u(Da(I(f({},Z),{apiTimeout:String(Z.apiTimeout)})));return}}u(Da(O))})}function P(){return g(this,null,function*(){d&&u(op(d)),u(gc(l)),yield x(),c(!0)})}return(0,Je.useEffect)(()=>{_&&new Bd.Address(_).hex()!==T&&Te(l)},[_,T,l]),(0,Je.useEffect)(()=>{P()},[e,o,d]),(0,Je.useEffect)(()=>{p.address&&m&&Te(l)},[m,p.address,l]),{initialized:r}};function Fd({customNetworkConfig:e={},children:o,environment:n,dappConfig:r}){let[c,p]=(0,Je.useState)(!(r!=null&&r.isSSR)),{initialized:m}=UT({customNetworkConfig:e,environment:n,dappConfig:r});return(0,Je.useEffect)(()=>{p(!0)},[]),c?m?o:null:o}t();var Vn=w(require("react"));t();t();t();t();var ru=require("react");t();t();var Pi=()=>y(Ee);t();R();t();t();t();t();function Ei(){let e=y(ii),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{pendingTransactions:e,pendingTransactionsArray:o,hasPendingTransactions:n}}fn();t();R();H();t();fn();function Ud(e,o){return e.reduce((r,{status:c,hash:p})=>(p!=null&&!o.includes(p)&&ao(c)&&r.push({hash:p,previousStatus:c}),r),[])}t();R();H();function Wd({results:e,hash:o,sessionId:n}){let r=e==null?void 0:e.find(c=>(c==null?void 0:c.returnMessage)!=="");S.dispatch(qe({transactionHash:o,sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage,inTransit:!1,serverTransaction:r})),S.dispatch(je({sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage}))}t();R();F();function Ci(e){S.dispatch(je({sessionId:e,status:"timedOut"}))}var Wr={},Ni=[];function WT({serverTransaction:e,sessionId:o,customTransactionInformation:n,shouldRefreshBalance:r,isSequential:c}){let{hash:p,status:m,inTransit:d,results:l,invalidTransaction:_,hasStatusChanged:T}=e;try{if(Ni.includes(p))return;if(Wr[p]>30){Ci(o);return}if(_&&!c||ao(m)){Wr[p]=Wr[p]?Wr[p]+1:1;return}if(c&&!m){S.dispatch(qe({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}));return}T&&(Wo(m)&&(n==null?void 0:n.completedTransactionsDelay)!=null?(Ni.push(p),setTimeout(()=>S.dispatch(qe({sessionId:o,status:"success",transactionHash:p,inTransit:d,serverTransaction:e})),n==null?void 0:n.completedTransactionsDelay)):S.dispatch(qe({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}))),r||wo(),Go(m)&&Wd({sessionId:o,hash:p,results:l})}catch(u){console.error(u),Ci(o)}}function Gd(l){return g(this,arguments,function*({sessionId:e,transactionBatch:{transactions:o,customTransactionInformation:n},getTransactionsByHash:r=Lr,shouldRefreshBalance:c,isSequential:p,onSuccess:m,onFail:d}){try{if(o==null)return;let _=Ud(o,Ni),T=yield r(_);for(let x of T)WT({serverTransaction:x,sessionId:e,customTransactionInformation:n,shouldRefreshBalance:c,isSequential:p});if(T.every(x=>x.status!=="pending")&&!(n!=null&&n.grouping)){if(T.every(k=>k.status==="success"))return m==null?void 0:m(e);if(T.some(k=>k.status==="fail"))return d==null?void 0:d(e)}}catch(_){console.error(_)}})}function Hd(){let{pendingTransactionsArray:e}=Ei();function o(n){return g(this,null,function*(){let r=e.filter(([,c])=>{var p;return!((p=c==null?void 0:c.customTransactionInformation)!=null&&p.grouping)}).filter(([c,p])=>c!=null&&ao(p.status));if(r.length>0)for(let[c,p]of r)yield Gd(f({sessionId:c,transactionBatch:p},n));n.shouldRefreshBalance&&(yield wo())})}return o}t();t();t();F();t();cn();var Cn=()=>{let e=y(up);return e?Math.max(1e3,e/2):9e4};t();t();function Nn(){let e=y(mo),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{signedTransactions:e,signedTransactionsArray:o,hasSignedTransactions:n}}t();t();var GT=w(require("swr"));t();t();t();t();var Vd=require("react");t();t();var HT=require("react"),VT=require("@multiversx/sdk-web-wallet-provider"),$T=require("@multiversx/sdk-web-wallet-provider"),qT=w(require("qs"));N();R();H();fa();ae();var VU=V();t();var jd=require("react"),Di=require("@multiversx/sdk-core");N();Ra();t();t();t();t();t();t();t();N();ae();t();t();var N_=require("react"),R_=require("@multiversx/sdk-core"),vS=require("@multiversx/sdk-extension-provider"),IS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),AS=require("@multiversx/sdk-passkey-provider/out"),kS=w(E_());N();fo();t();R();H();se();ae();t();var C_=require("react"),TS=require("@multiversx/sdk-extension-provider"),xS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),yS=require("@multiversx/sdk-passkey-provider/out");fo();R();t();R();F();gn();ae();t();Ge();R();t();t();var LS=require("react");t();H();fn();t();var D_=require("react");t();t();var PS=require("react"),ES=require("@multiversx/sdk-extension-provider");Ge();q();H();ro();se();se();t();var CS=require("react"),NS=require("@multiversx/sdk-opera-provider");Ge();q();H();ro();se();ae();t();var RS=require("react");ba();Ge();fo();q();R();H();ro();ae();t();var FS=require("react");Ge();R();t();t();va();t();t();var DS=w(require("platform"));_n();t();t();t();t();t();t();t();Jn();H();t();t();var MS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();gn();dn();t();t();t();R();var OS={},BS={};var M_=e=>{if(e.component!=null){let o=e,{component:n,onClose:r}=o,c=Me(o,["component","onClose"]),p=S.dispatch(Oa(I(f({},c),{component:null,onClose:void 0})));return OS[p==null?void 0:p.payload.toastId]=n,r&&(BS[p==null?void 0:p.payload.toastId]=r),p==null?void 0:p.payload}return S.dispatch(Oa(e)).payload};t();t();var O_=w(require("axios"));function Fi(e){return g(this,null,function*(){try{let{data:o}=yield O_.default.get(`${e}/websocket/config`);return`wss://${o.url}`}catch(o){throw console.error(o),new Error("Can not get websocket url")}})}se();ae();t();t();var XS=require("react");N();t();t();t();var ko=w(require("react")),z_=require("react"),K_=require("react"),ji=w(require("classnames")),X_=require("react-dom");N();t();var W_=w(require("react"));t();var kt=w(require("react"));t();_n();var B_=()=>!to();var WS=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(Wi(),Ui))}),GS=()=>(Wi(),Oe(Ui)).default,Gi=B_();function U_({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,c]=kt.default.useState(Gi?void 0:GS()),[p,m]=kt.default.useState(Gi||n==null?void 0:n()),d=()=>g(this,null,function*(){(e?e():WS()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,kt.useEffect)(()=>{Gi&&d()},[]),{globalStyles:r,styles:p}}function Ao(e,o){return n=>{let{globalStyles:r,styles:c}=U_({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return W_.default.createElement(e,I(f({},n),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}t();var H_=w(require("react")),V_=w(require("classnames"));var VS=({className:e,children:o,styles:n})=>H_.default.createElement("div",{className:(0,V_.default)(n==null?void 0:n.dappModalBody,e)},o),Hi=Ao(VS,{ssrStyles:()=>Promise.resolve().then(()=>(go(),uo)),clientStyles:()=>(go(),Oe(uo)).default});t();var Vi=w(require("react")),$_=w(require("classnames"));var $S=({visible:e,customFooter:o,className:n,footerText:r,styles:c})=>e?Vi.default.createElement("div",{className:(0,$_.default)(c==null?void 0:c.dappModalFooter,n)},o!=null?o:Vi.default.createElement("div",null,r)):null,$i=Ao($S,{ssrStyles:()=>Promise.resolve().then(()=>(go(),uo)),clientStyles:()=>(go(),Oe(uo)).default});t();var On=w(require("react")),q_=require("@fortawesome/free-solid-svg-icons"),j_=require("@fortawesome/react-fontawesome"),Lt=w(require("classnames"));var qS=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?n?On.default.createElement("div",{className:(0,Lt.default)(l==null?void 0:l.dappModalHeader,r)},n):On.default.createElement("div",{className:(0,Lt.default)(l==null?void 0:l.dappModalHeader,r)},On.default.createElement("div",{className:(0,Lt.default)(l==null?void 0:l.dappModalHeaderText,p)},o),On.default.createElement("button",{onClick:m,className:(0,Lt.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},On.default.createElement(j_.FontAwesomeIcon,{size:"lg",icon:q_.faTimes}))):null,qi=Ao(qS,{ssrStyles:()=>Promise.resolve().then(()=>(go(),uo)),clientStyles:()=>(go(),Oe(uo)).default});var jS={showHeader:!0,showFooter:!1,headerText:"",footerText:""},zS=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=jS,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[T,u]=(0,z_.useState)(!1);if((0,K_.useEffect)(()=>{u(!0)},[]),!l)return null;let{showHeader:x,showFooter:P,headerText:k,footerText:E,modalDialogClassName:U="dapp-modal-dialog",modalContentClassName:D="dapp-modal-dialog-content",modalHeaderClassName:L="dapp-modal-dialog-header",modalHeaderTextClassName:O="dapp-modal-dialog-header-text",modalCloseButtonClassName:C="dapp-modal-dialog-close-button",modalBodyClassName:B="dapp-modal-dialog-content-body",modalFooterClassName:Z="dapp-modal-dialog-footer",customModalHeader:ve,customModalFooter:Ye}=c,qn=jn=>{jn.key==="Escape"&&r&&(m==null||m())};return ko.default.createElement(ko.default.Fragment,null,T&&(0,X_.createPortal)(ko.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,ji.default)(U,_==null?void 0:_.dappModal,n),"data-testid":e,onKeyDown:qn},ko.default.createElement("div",{className:(0,ji.default)(_==null?void 0:_.dappModalContent,D)},ko.default.createElement(qi,{visible:x,headerText:k,customHeader:ve,className:L,headerTextClassName:O,closeButtonClassName:C,onHide:m}),ko.default.createElement(Hi,{className:B},o),ko.default.createElement($i,{visible:P,customFooter:Ye,footerText:E,className:Z}))),d!=null?d:document==null?void 0:document.body))},KS=Ao(zS,{ssrStyles:()=>Promise.resolve().then(()=>(go(),uo)),clientStyles:()=>(go(),Oe(uo)).default});t();t();var J_=require("react");t();t();var Y_=require("react"),YS=require("@multiversx/sdk-hw-provider");Ge();q();R();H();ro();t();var JS=require("react");t();t();var QS=require("react"),eb=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Ge();q();H();ro();se();se();t();var ob=require("react"),nb=require("@multiversx/sdk-passkey-provider/out");Ge();q();H();ro();se();se();t();t();var Z_=require("react");t();var Ki=require("react");t();var Lo=require("react"),ou=require("socket.io-client");R();t();var K={current:null,status:"not_initialized"};var tb=3e3,rb=3,Q_=500,eu=1e3,ab="batchUpdated",ib="connect",sb="disconnect";function nu(){let e=(0,Lo.useRef)(null),o=(0,Lo.useRef)(null),{address:n}=fe(),r=M(),{network:c}=Pi(),p=_=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{r(cc(_))},eu)},m=_=>{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{r(pc(_))},eu)},d=()=>{var _;(_=K.current)==null||_.close(),K.current=null,K.status="not_initialized",e.current&&clearTimeout(e.current)},l=(0,Lo.useCallback)(Rr(()=>g(this,null,function*(){var T;if(!n)return;K.status="pending";let _=(T=c.websocketUrl)!=null?T:yield Fi(c.apiAddress);if(_==null){console.warn("Can not get websocket url");return}K.current=(0,ou.io)(_,{forceNew:!0,reconnectionAttempts:rb,timeout:tb,query:{address:n}}),K.status="completed",K.current.onAny(p),K.current.on(ab,m),K.current.on(ib,()=>{console.log("Websocket connected.")}),K.current.on(sb,()=>{n&&(console.warn("Websocket disconnected. Trying to reconnect..."),setTimeout(()=>{var u;n&&(console.log("Websocket reconnecting..."),(u=K.current)==null||u.connect())},Q_))})}),{retries:2,delay:Q_}),[n]);(0,Lo.useEffect)(()=>{var _;if(n&&K.status==="not_initialized"&&!((_=K.current)!=null&&_.active)){l();return}n||d()},[n,l]),(0,Lo.useEffect)(()=>()=>{d()},[])}function Vr(e,o){nu();let n=Cm(),r=Lm();(0,Ki.useEffect)(()=>{let c=n==null?void 0:n.message;c&&e(c)},[e,n]),(0,Ki.useEffect)(()=>{let c=r==null?void 0:r.data;c&&(o==null||o(c))},[o,r])}t();t();var cb=require("react");F();t();t();t();var pb=w(require("swr"));Fo();var{logoutEvent:mb}=ge,tu="storage",au=()=>{let{address:e}=lo(),o=y(So);(0,ru.useEffect)(()=>{let n=r=>{if(!(r.key!==mb||!r.newValue))try{let{data:c}=JSON.parse(r.newValue);c===e&&Te(o)}catch(c){return}};return window==null||window.addEventListener(tu,n),()=>{window==null||window.removeEventListener(tu,n)}},[e,o])};t();t();var $r=require("react"),iu=require("@fortawesome/free-solid-svg-icons"),Xi=w(require("bignumber.js"));var su=()=>{let{address:e}=lo(),{tokenLogin:o}=y(J),{secondsUntilExpires:n,expiresAt:r}=Pn(o==null?void 0:o.nativeAuthToken),c=(0,$r.useRef)();return(0,$r.useEffect)(()=>{var d;let p=new Xi.default(String(n)),m=p.times(1e3);if(!(!n||p.isLessThanOrEqualTo(0))){if((d=o==null?void 0:o.nativeAuthConfig)!=null&&d.tokenExpirationToastWarningSeconds){clearTimeout(c.current);let _=new Xi.default(o.nativeAuthConfig.tokenExpirationToastWarningSeconds).times(1e3),T=p.times(1e3).minus(_),u=bi(m.toNumber()),x=T.isLessThanOrEqualTo(0)?0:T.toNumber();c.current=setTimeout(()=>{M_({toastId:"nativeAuthTokenExpiration",type:"custom",title:"Session Expiration Warning",icon:iu.faRefresh,message:`Your token will expire in ${u}!`})},x)}return()=>{clearTimeout(c.current)}}},[r,e,o==null?void 0:o.nativeAuthConfig]),null};t();var Bn=require("react"),cu=w(require("bignumber.js"));var pu=()=>{let{address:e}=lo(),{tokenLogin:o}=y(J),n=y(So),{isExpired:r,secondsUntilExpires:c,expiresAt:p}=Pn(o==null?void 0:o.nativeAuthToken),m=(0,Bn.useRef)(""),d=(0,Bn.useRef)();return(0,Bn.useEffect)(()=>{e&&r&&Te(n)},[r,e,n]),(0,Bn.useEffect)(()=>{let l=Boolean(En());if(!e||l)return;let _=new cu.default(String(c)),T=`${e}_${p}`,u=m.current===T;if(!(c&&_.isGreaterThan(0))||u)return;m.current=T,clearTimeout(d.current);let P=_.times(1e3);return d.current=setTimeout(()=>{Te(n)},P.toNumber()),()=>{clearTimeout(d.current)}},[p,e,n]),null};var mu=()=>(su(),au(),pu(),null);t();t();var en=require("react");R();H();gn();t();R();t();t();function du({transactions:e}){return e==null?void 0:e.some(o=>Array.isArray(o))}function qr({transactions:e=[]}){return du({transactions:e})?e.flat():e}t();R();F();var Ji=({errorMessage:e,sessionId:o,transactions:n,clearSignInfo:r})=>{console.error("Unable to send transactions",e),S.dispatch(je({sessionId:o,status:"fail",errorMessage:e,transactions:n.map(c=>I(f({},c),{status:"not executed"}))})),r==null||r()};t();R();F();var lu=({errorMessage:e,sessionId:o,clearSignInfo:n})=>{console.error("Unable to send transactions",e),S.dispatch(je({sessionId:o,status:"fail",errorMessage:e})),n==null||n()};var db=c=>g(void 0,[c],function*({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r}){var T,u;let{transactions:p}=e;if(!p)return;let m=(T=e.customTransactionInformation)==null?void 0:T.grouping;if(!m)return;let d=p.reduce((x,P,k)=>{let E=m.findIndex(U=>U.includes(k));return x[E]||(x[E]=[]),x[E].push(P),x},[]);if(d.length===0)return;let l=yield r({transactions:d,sessionId:o}),_=l==null?void 0:l.data;if((l==null?void 0:l.error)||!_){Ji({errorMessage:(u=l==null?void 0:l.error)!=null?u:"Send batch error",sessionId:o,transactions:p,clearSignInfo:n});return}return _&&S.dispatch(Xc(_)),qr({transactions:_==null?void 0:_.transactions}).map(x=>x.hash)}),_u=p=>g(void 0,[p],function*({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r=kr,sendSignedTransactionsAsync:c=Ar}){var l,_,T;let{transactions:m}=e;if(!m)return;if((l=e.customTransactionInformation)==null?void 0:l.grouping)try{return yield db({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r})}catch(u){return Ji({errorMessage:u.message,sessionId:o,transactions:m}),null}try{let u=m.map(x=>Tn(x));return yield c(u)}catch(u){let x=(_=u.response)==null?void 0:_.data;return lu({errorMessage:(T=x==null?void 0:x.message)!=null?T:u.message,sessionId:o,clearSignInfo:n}),null}});var uu=e=>{let o=e.redirectRoute;o&&Uo({url:o})},gu=({sendSignedTransactionsAsync:e=Ar,sendSignedBatchTransactionsAsync:o=kr})=>{let n=M(),{nonce:r}=y(io),c=y(mo),p=(0,en.useRef)(!1),m=(0,en.useRef)([]),d=()=>{n(Ho()),p.current=!1},l=(0,en.useCallback)(()=>g(void 0,null,function*(){var T;let _=Object.keys(c);for(let u of _){let x=c[u],P=(T=x==null?void 0:x.customTransactionInformation)==null?void 0:T.signWithoutSending;if(!x||!u||P){uu(x);continue}if(m.current.includes(u))continue;let{transactions:k}=x;if(!k||!(x.status==="signed"&&!p.current))continue;p.current=!0,m.current.push(u);let D=yield _u({session:x,sessionId:u,clearSignInfo:d,sendSignedTransactionsAsync:e,sendSignedBatchTransactionsAsync:o}),L="pending",O=k.map(Z=>D!=null&&D.includes(Z.hash)?I(f({},Z),{status:L}):Z);n(yc({sessionId:u,submittedMessage:"submitted"})),n(je({sessionId:u,status:"sent",transactions:O})),d(),fd(r+k.length),uu(x);let[B]=k;ai({transaction:B}),p.current=!1}}),[c,r]);return(0,en.useEffect)(()=>{l()},[c,l]),null};t();t();t();var Eu=require("react");t();var hu=require("react");t();var lb=e=>e.batchTransactions,fu=v(lb,e=>{let o=f({},e);return delete o._persist,o});function Fn(){let e=y(fu),o=(0,hu.useMemo)(()=>Object.entries(e).map(([n,r])=>({batchId:n,transactions:r.transactions})),[e]);return{batches:e,batchTransactionsArray:o}}F();t();var Gn=require("react");cn();t();N();var Un=e=>{if(!e||typeof e!="string")return null;let o=e.split(Vt)[0];return br(o)?parseInt(o,10):null};t();var jr=(e,o)=>new Date().getTime()-e>o;t();var ku=require("react");t();var bu=require("react");F();t();var yu=require("react");t();var Tu=w(require("axios"));no();function xu(n){return g(this,arguments,function*({batchId:e,address:o}){let{apiAddress:r,apiTimeout:c}=Y(S.getState()),{data:p}=yield Tu.default.get(`${r}/${yr}/${o}/${e}`,{timeout:Number(c!=null?c:Ut)});return p})}var Su=()=>{let{address:e}=fe();return(0,yu.useCallback)(o=>g(void 0,null,function*(){try{return yield xu({batchId:o,address:e})}catch(n){return console.error(n),null}}),[e])};var zr=()=>{let e=Su();return(0,bu.useCallback)(n=>g(void 0,[n],function*({batchId:o}){let r=yield e(o);return r?{statusResponse:r,isBatchSuccessful:r.status==="success",isBatchFailed:r.status==="fail"||r.status==="invalid"||r.status==="dropped",isBatchNotFound:Boolean(r.statusCode)&&Boolean(r.message)}:{statusResponse:r,isBatchSuccessful:!1,isBatchFailed:!0,isBatchNotFound:!1}}),[e])};t();F();var Kr=({transactions:e,hasUnrelatedTransactions:o})=>{let n=e.every(({status:l})=>l==="fail"),r=e.some(({status:l})=>l==="fail"),c=e.some(({status:l})=>l==="pending"),p=e.every(({status:l})=>l==="success"),m=o&&Boolean(!c&&!n&&r);return{isPending:c,isSuccessful:p,isFailed:o?m?!1:n:r,isIncompleteFailed:m}};t();var wu=require("react");R();function vu(){let e=M(),o=zr();return(0,wu.useCallback)(r=>g(this,[r],function*({batchId:n}){let c=yield o({batchId:n});return c.statusResponse&&e(Jc(c.statusResponse)),c}),[e,o])}t();var Yi=require("react");R();t();t();var Wn=class{constructor(o){this.status=(o||"").toLowerCase()}static createUnknown(){return new Wn("unknown")}isPending(){return this.status=="received"||this.status=="pending"}isExecuted(){return this.isSuccessful()||this.isFailed()||this.isInvalid()}isSuccessful(){return this.status=="executed"||this.status=="success"||this.status=="successful"}isFailed(){return this.status=="fail"||this.status=="failed"||this.status=="unsuccessful"||this.isInvalid()}isInvalid(){return this.status=="invalid"}toString(){return this.status}valueOf(){return this.status}equals(o){return o?this.status==o.status:!1}};t();function Iu(e){return new Promise(o=>setTimeout(o,e))}var Au=e=>g(void 0,null,function*(){let n=4,r;if(e.length===0)return{data:r,success:!1};for(;r===void 0&&n>0;)try{yield Iu(3e3);let p=(yield Promise.allSettled(e.map(d=>lm(d)))).map(d=>d.status==="fulfilled"?d.value.data:void 0).filter(d=>d!==void 0);if(p.length>0){let d=p.length===e.length,l=p.some(_=>new Wn(_.status).isPending());d&&!l||n===1?(r=p,n=0):n-=1}else n-=1}catch(c){n-=1}return{data:r,success:r!==void 0}});F();function Xr(){let e=M(),{address:o}=fe(),n=(0,Yi.useCallback)(({sessionId:r,dropUnprocessedTransactions:c,serverTransactions:p,batchTransactions:m})=>{for(let d of m){let l=p.find(_=>_.txHash===d.hash);if(!l){c&&e(qe({sessionId:r,status:"fail",transactionHash:d.hash}));continue}e(qe({sessionId:r,status:l.status,transactionHash:d.hash,serverTransaction:l}))}},[e]);return(0,Yi.useCallback)(r=>g(this,null,function*(){if(!r)return;let{transactions:c,isBatchFailed:p,sessionId:m}=r;if(!c||c.length===0)return;if(p){for(let _ of c)e(qe({sessionId:m,status:"fail",transactionHash:_.hash}));return}let{data:d,success:l}=yield Au(c.map(({hash:_})=>_).filter(_=>Boolean(_)));l&&d&&n({sessionId:m,dropUnprocessedTransactions:r.dropUnprocessedTransactions,serverTransactions:d,batchTransactions:c}),r.shouldRefreshBalance&&(yield wo())}),[e,o,n])}var Jr=e=>{let o=M(),{signedTransactions:n}=Nn(),r=vu(),c=Xr(),p=zr(),m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail;return{verifyBatchStatus:(0,ku.useCallback)(T=>g(void 0,[T],function*({batchId:_}){var O,C,B,Z,ve;let u=(C=(O=Un(_))==null?void 0:O.toString())!=null?C:"",x=n[u];if(!x||!((B=x.customTransactionInformation)==null?void 0:B.grouping))return;let k=(ve=(Z=n[u])==null?void 0:Z.transactions)!=null?ve:[],{isSuccessful:E,isFailed:U,isPending:D}=Kr({transactions:k});if(!D)E&&(m==null||m(u)),U&&(d==null||d(u,"Error processing batch transactions."));else{let Ye=yield r({batchId:_});yield c({sessionId:u.toString(),isBatchFailed:Ye==null?void 0:Ye.isBatchFailed,shouldRefreshBalance:!0,transactions:k})}}),[o,p,c,n,r,m,d])}};var Lu=e=>{let{batchTransactionsArray:o}=Fn(),{verifyBatchStatus:n}=Jr(e),r=Cn(),c=(0,Gn.useRef)(null),p=K.status==="completed",m=(0,Gn.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:d}of o){let l=Un(d);!l||!jr(l,9e4)||(yield n({batchId:d}))}}),[o,n]);(0,Gn.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{m()},r),()=>{c.current&&clearInterval(c.current)}},[m])};t();var Hn=require("react");cn();var Pu=e=>{let{batchTransactionsArray:o}=Fn(),n=Cn(),r=Xr(),c=(0,Hn.useRef)(null),p=K.status==="completed",m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail,l=(0,Hn.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:_,transactions:T}of o){let u=Un(_);if(!u||!jr(u,6e5))continue;yield r({sessionId:u.toString(),shouldRefreshBalance:!0,dropUnprocessedTransactions:!0});let x=qr({transactions:T}),{isPending:P,isSuccessful:k,isFailed:E}=Kr({transactions:x});P||(Dd(_),k&&(m==null||m(u.toString())),E&&(d==null||d(u.toString(),"Error processing batch transactions. Status: failed")))}}),[o,r,m,d]);(0,Hn.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{l()},n),()=>{c.current&&clearInterval(c.current)}},[l])};var Cu=({onSuccess:e,onFail:o})=>{let{batches:n}=Fn(),{signedTransactionsArray:r}=Nn(),{address:c}=fe(),{verifyBatchStatus:p}=Jr({onSuccess:e,onFail:o}),m=()=>{},d=_=>g(void 0,null,function*(){yield p({batchId:_.batchId})}),l=()=>g(void 0,null,function*(){for(let[_,T]of r){let u=ut({sessionId:_,address:c}),x=!Boolean(n[u]);!(T.status!=="sent")||x||(yield p({batchId:u}))}});Vr(m,d),Lu({onSuccess:e,onFail:o}),Pu({onSuccess:e,onFail:o}),(0,Eu.useEffect)(()=>{l()},[])};t();var Yr=require("react");function Nu(e){var d;let o=Hd(),n=Cn(),r=(0,Yr.useRef)(null),c=K.status==="completed",p=(d=e==null?void 0:e.getTransactionsByHash)!=null?d:Lr,m=()=>{o(f({getTransactionsByHash:p},e))};Vr(m),(0,Yr.useEffect)(()=>{if(c){r.current&&clearInterval(r.current);return}if(!r.current)return r.current=setInterval(m,n),()=>{r.current&&clearInterval(r.current)}},[m,K])}function Ru(e){return Nu(e),Cu(e),null}function Du({customComponents:e}){var d,l,_;let o=e==null?void 0:e.transactionSender,n=e==null?void 0:e.transactionTracker,r=e==null?void 0:e.logoutListener,c=(d=o==null?void 0:o.component)!=null?d:gu,p=(l=n==null?void 0:n.component)!=null?l:Ru,m=(_=r==null?void 0:r.component)!=null?_:mu;return Vn.default.createElement(Vn.default.Fragment,null,Vn.default.createElement(c,f({},o==null?void 0:o.props)),Vn.default.createElement(p,f({},n==null?void 0:n.props)),Vn.default.createElement(m,null))}var ub=()=>{var n;let e=Re.getInstance(),o=Fr();fc({data:o}),(n=e.init)==null||n.call(e),fi(e)},Bu=({children:e,customNetworkConfig:o={},externalProvider:n,environment:r,customComponents:c,dappConfig:p})=>{if(!r)throw new Error("missing environment flag");return n!=null?fi(n):p!=null&&p.shouldUseWebViewProvider&&ub(),$n.default.createElement(Mu.Provider,{context:ft,store:S},$n.default.createElement(Ou.PersistGate,{persistor:zp,loading:null},()=>$n.default.createElement(Fd,{environment:r,customNetworkConfig:o,dappConfig:p},$n.default.createElement(Rd,null),$n.default.createElement(Du,{customComponents:c}),e)))};var gb=({children:e,route:o="/"})=>{let n=(0,Uu.createMemoryHistory)({initialEntries:[o]});return I(f({},(0,Fu.render)(Zr.default.createElement(Bu,{environment:"devnet"},Zr.default.createElement(Zr.default.Fragment,null,e)))),{history:n})};t();var fb=()=>{if(!window)return;let e=window.location;delete window.location,window.location=Object.defineProperties({},I(f({},Object.getOwnPropertyDescriptors(e)),{assign:{configurable:!0,value:jest.fn()}}))};t();var hb=()=>{if(!window)return;let e=window.history;delete window.history,window.history=Object.defineProperties({},I(f({},Object.getOwnPropertyDescriptors(e)),{pushState:{configurable:!0,value:jest.fn()}}))};0&&(module.exports={createSubscription,mockResponse,mockWindowHistory,mockWindowLocation,renderWithProvider,rest,server,testAddress,testNetwork,testReceiver});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
