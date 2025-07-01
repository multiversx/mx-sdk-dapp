"use strict";var Kl=Object.create;var et=Object.defineProperty,Xl=Object.defineProperties,Yl=Object.getOwnPropertyDescriptor,Zl=Object.getOwnPropertyDescriptors,Jl=Object.getOwnPropertyNames,Rt=Object.getOwnPropertySymbols,Ql=Object.getPrototypeOf,Qn=Object.prototype.hasOwnProperty,qa=Object.prototype.propertyIsEnumerable;var $a=(e,o,n)=>o in e?et(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,g=(e,o)=>{for(var n in o||(o={}))Qn.call(o,n)&&$a(e,n,o[n]);if(Rt)for(var n of Rt(o))qa.call(o,n)&&$a(e,n,o[n]);return e},w=(e,o)=>Xl(e,Zl(o));var Ie=(e,o)=>{var n={};for(var r in e)Qn.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Rt)for(var r of Rt(e))o.indexOf(r)<0&&qa.call(e,r)&&(n[r]=e[r]);return n};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var S=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),V=(e,o)=>{for(var n in o)et(e,n,{get:o[n],enumerable:!0})},za=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Jl(o))!Qn.call(e,c)&&c!==n&&et(e,c,{get:()=>o[c],enumerable:!(r=Yl(o,c))||r.enumerable});return e};var f=(e,o,n)=>(n=e!=null?Kl(Ql(e)):{},za(o||!e||!e.__esModule?et(n,"default",{value:e,enumerable:!0}):n,e)),P=e=>za(et({},"__esModule",{value:!0}),e);var x=(e,o,n)=>new Promise((r,c)=>{var p=l=>{try{d(n.next(l))}catch(_){c(_)}},m=l=>{try{d(n.throw(l))}catch(_){c(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var Xa=S(Mt=>{"use strict";t();Mt.byteLength=o_;Mt.toByteArray=n_;Mt.fromByteArray=i_;var ue=[],ne=[],e_=typeof Uint8Array!="undefined"?Uint8Array:Array,er="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(eo=0,ja=er.length;eo<ja;++eo)ue[eo]=er[eo],ne[er.charCodeAt(eo)]=eo;var eo,ja;ne["-".charCodeAt(0)]=62;ne["_".charCodeAt(0)]=63;function Ka(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function o_(e){var o=Ka(e),n=o[0],r=o[1];return(n+r)*3/4-r}function t_(e,o,n){return(o+n)*3/4-n}function n_(e){var o,n=Ka(e),r=n[0],c=n[1],p=new e_(t_(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=ne[e.charCodeAt(l)]<<18|ne[e.charCodeAt(l+1)]<<12|ne[e.charCodeAt(l+2)]<<6|ne[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ne[e.charCodeAt(l)]<<2|ne[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ne[e.charCodeAt(l)]<<10|ne[e.charCodeAt(l+1)]<<4|ne[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function r_(e){return ue[e>>18&63]+ue[e>>12&63]+ue[e>>6&63]+ue[e&63]}function a_(e,o,n){for(var r,c=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(r_(r));return c.join("")}function i_(e){for(var o,n=e.length,r=n%3,c=[],p=16383,m=0,d=n-r;m<d;m+=p)c.push(a_(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],c.push(ue[o>>2]+ue[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],c.push(ue[o>>10]+ue[o>>4&63]+ue[o<<2&63]+"=")),c.join("")}});var Ya=S(or=>{t();or.read=function(e,o,n,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,_=l>>1,T=-7,y=n?c-1:0,v=n?-1:1,C=e[o+y];for(y+=v,p=C&(1<<-T)-1,C>>=-T,T+=d;T>0;p=p*256+e[o+y],y+=v,T-=8);for(m=p&(1<<-T)-1,p>>=-T,T+=r;T>0;m=m*256+e[o+y],y+=v,T-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(C?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(C?-1:1)*m*Math.pow(2,p-r)};or.write=function(e,o,n,r,c,p){var m,d,l,_=p*8-c-1,T=(1<<_)-1,y=T>>1,v=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,C=r?0:p-1,E=r?1:-1,G=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=T):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+y>=1?o+=v/l:o+=v*Math.pow(2,1-y),o*l>=2&&(m++,l/=2),m+y>=T?(d=0,m=T):m+y>=1?(d=(o*l-1)*Math.pow(2,c),m=m+y):(d=o*Math.pow(2,y-1)*Math.pow(2,c),m=0));c>=8;e[n+C]=d&255,C+=E,d/=256,c-=8);for(m=m<<c|d,_+=c;_>0;e[n+C]=m&255,C+=E,m/=256,_-=8);e[n+C-E]|=G*128}});var pi=S(Ao=>{"use strict";t();var tr=Xa(),Io=Ya(),Za=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ao.Buffer=u;Ao.SlowBuffer=l_;Ao.INSPECT_MAX_BYTES=50;var Ot=2147483647;Ao.kMaxLength=Ot;u.TYPED_ARRAY_SUPPORT=s_();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function s_(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function Ae(e){if(e>Ot)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,u.prototype),o}function u(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ir(e)}return ei(e,o,n)}u.poolSize=8192;function ei(e,o,n){if(typeof e=="string")return p_(e,o);if(ArrayBuffer.isView(e))return m_(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ge(e,ArrayBuffer)||e&&ge(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ge(e,SharedArrayBuffer)||e&&ge(e.buffer,SharedArrayBuffer)))return rr(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return u.from(r,o,n);var c=d_(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return u.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}u.from=function(e,o,n){return ei(e,o,n)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function oi(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function c_(e,o,n){return oi(e),e<=0?Ae(e):o!==void 0?typeof n=="string"?Ae(e).fill(o,n):Ae(e).fill(o):Ae(e)}u.alloc=function(e,o,n){return c_(e,o,n)};function ir(e){return oi(e),Ae(e<0?0:sr(e)|0)}u.allocUnsafe=function(e){return ir(e)};u.allocUnsafeSlow=function(e){return ir(e)};function p_(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!u.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=ti(e,o)|0,r=Ae(n),c=r.write(e,o);return c!==n&&(r=r.slice(0,c)),r}function nr(e){for(var o=e.length<0?0:sr(e.length)|0,n=Ae(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function m_(e){if(ge(e,Uint8Array)){var o=new Uint8Array(e);return rr(o.buffer,o.byteOffset,o.byteLength)}return nr(e)}function rr(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,u.prototype),r}function d_(e){if(u.isBuffer(e)){var o=sr(e.length)|0,n=Ae(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||cr(e.length)?Ae(0):nr(e);if(e.type==="Buffer"&&Array.isArray(e.data))return nr(e.data)}function sr(e){if(e>=Ot)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ot.toString(16)+" bytes");return e|0}function l_(e){return+e!=e&&(e=0),u.alloc(+e)}u.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==u.prototype};u.compare=function(o,n){if(ge(o,Uint8Array)&&(o=u.from(o,o.offset,o.byteLength)),ge(n,Uint8Array)&&(n=u.from(n,n.offset,n.byteLength)),!u.isBuffer(o)||!u.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,c=n.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==n[p]){r=o[p],c=n[p];break}return r<c?-1:c<r?1:0};u.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return u.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var c=u.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(ge(m,Uint8Array))p+m.length>c.length?u.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(u.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function ti(e,o){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ge(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ar(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return ci(e).length;default:if(c)return r?-1:ar(e).length;o=(""+o).toLowerCase(),c=!0}}u.byteLength=ti;function __(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return w_(this,o,n);case"utf8":case"utf-8":return ri(this,o,n);case"ascii":return b_(this,o,n);case"latin1":case"binary":return S_(this,o,n);case"base64":return x_(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return v_(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}u.prototype._isBuffer=!0;function oo(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}u.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)oo(this,n,n+1);return this};u.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)oo(this,n,n+3),oo(this,n+1,n+2);return this};u.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)oo(this,n,n+7),oo(this,n+1,n+6),oo(this,n+2,n+5),oo(this,n+3,n+4);return this};u.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ri(this,0,o):__.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(o){if(!u.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:u.compare(this,o)===0};u.prototype.inspect=function(){var o="",n=Ao.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};Za&&(u.prototype[Za]=u.prototype.inspect);u.prototype.compare=function(o,n,r,c,p){if(ge(o,Uint8Array)&&(o=u.from(o,o.offset,o.byteLength)),!u.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),n<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&n>=r)return 0;if(c>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-n,l=Math.min(m,d),_=this.slice(c,p),T=o.slice(n,r),y=0;y<l;++y)if(_[y]!==T[y]){m=_[y],d=T[y];break}return m<d?-1:d<m?1:0};function ni(e,o,n,r,c){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,cr(n)&&(n=c?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(c)return-1;n=e.length-1}else if(n<0)if(c)n=0;else return-1;if(typeof o=="string"&&(o=u.from(o,r)),u.isBuffer(o))return o.length===0?-1:Ja(e,o,n,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):Ja(e,[o],n,r,c);throw new TypeError("val must be string, number or Buffer")}function Ja(e,o,n,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(C,E){return p===1?C[E]:C.readUInt16BE(E*p)}var _;if(c){var T=-1;for(_=n;_<m;_++)if(l(e,_)===l(o,T===-1?0:_-T)){if(T===-1&&(T=_),_-T+1===d)return T*p}else T!==-1&&(_-=_-T),T=-1}else for(n+d>m&&(n=m-d),_=n;_>=0;_--){for(var y=!0,v=0;v<d;v++)if(l(e,_+v)!==l(o,v)){y=!1;break}if(y)return _}return-1}u.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};u.prototype.indexOf=function(o,n,r){return ni(this,o,n,r,!0)};u.prototype.lastIndexOf=function(o,n,r){return ni(this,o,n,r,!1)};function u_(e,o,n,r){n=Number(n)||0;var c=e.length-n;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(cr(d))return m;e[n+m]=d}return m}function g_(e,o,n,r){return Ft(ar(o,e.length-n),e,n,r)}function f_(e,o,n,r){return Ft(k_(o),e,n,r)}function T_(e,o,n,r){return Ft(ci(o),e,n,r)}function h_(e,o,n,r){return Ft(L_(o,e.length-n),e,n,r)}u.prototype.write=function(o,n,r,c){if(n===void 0)c="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")c=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return u_(this,o,n,r);case"utf8":case"utf-8":return g_(this,o,n,r);case"ascii":case"latin1":case"binary":return f_(this,o,n,r);case"base64":return T_(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h_(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function x_(e,o,n){return o===0&&n===e.length?tr.fromByteArray(e):tr.fromByteArray(e.slice(o,n))}function ri(e,o,n){n=Math.min(e.length,n);for(var r=[],c=o;c<n;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=n){var l,_,T,y;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(y=(p&31)<<6|l&63,y>127&&(m=y));break;case 3:l=e[c+1],_=e[c+2],(l&192)===128&&(_&192)===128&&(y=(p&15)<<12|(l&63)<<6|_&63,y>2047&&(y<55296||y>57343)&&(m=y));break;case 4:l=e[c+1],_=e[c+2],T=e[c+3],(l&192)===128&&(_&192)===128&&(T&192)===128&&(y=(p&15)<<18|(l&63)<<12|(_&63)<<6|T&63,y>65535&&y<1114112&&(m=y))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return y_(r)}var Qa=4096;function y_(e){var o=e.length;if(o<=Qa)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=Qa));return n}function b_(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]&127);return r}function S_(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]);return r}function w_(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var c="",p=o;p<n;++p)c+=C_[e[p]];return c}function v_(e,o,n){for(var r=e.slice(o,n),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}u.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var c=this.subarray(o,n);return Object.setPrototypeOf(c,u.prototype),c};function H(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return c};u.prototype.readUintBE=u.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var c=this[o+--n],p=1;n>0&&(p*=256);)c+=this[o+--n]*p;return c};u.prototype.readUint8=u.prototype.readUInt8=function(o,n){return o=o>>>0,n||H(o,1,this.length),this[o]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||H(o,2,this.length),this[o]|this[o+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||H(o,2,this.length),this[o]<<8|this[o+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||H(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};u.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*n)),c};u.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var c=n,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};u.prototype.readInt8=function(o,n){return o=o>>>0,n||H(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};u.prototype.readInt16LE=function(o,n){o=o>>>0,n||H(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};u.prototype.readInt16BE=function(o,n){o=o>>>0,n||H(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};u.prototype.readInt32LE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};u.prototype.readInt32BE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};u.prototype.readFloatLE=function(o,n){return o=o>>>0,n||H(o,4,this.length),Io.read(this,o,!0,23,4)};u.prototype.readFloatBE=function(o,n){return o=o>>>0,n||H(o,4,this.length),Io.read(this,o,!1,23,4)};u.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||H(o,8,this.length),Io.read(this,o,!0,52,8)};u.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||H(o,8,this.length),Io.read(this,o,!1,52,8)};function X(e,o,n,r,c,p){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;X(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;X(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};u.prototype.writeUint8=u.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,1,255,0),this[n]=o&255,n+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};u.prototype.writeIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);X(this,o,n,r,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};u.prototype.writeIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);X(this,o,n,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};u.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};u.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};u.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};u.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};u.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function ai(e,o,n,r,c,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function ii(e,o,n,r,c){return o=+o,n=n>>>0,c||ai(e,o,n,4,34028234663852886e22,-34028234663852886e22),Io.write(e,o,n,r,23,4),n+4}u.prototype.writeFloatLE=function(o,n,r){return ii(this,o,n,!0,r)};u.prototype.writeFloatBE=function(o,n,r){return ii(this,o,n,!1,r)};function si(e,o,n,r,c){return o=+o,n=n>>>0,c||ai(e,o,n,8,17976931348623157e292,-17976931348623157e292),Io.write(e,o,n,r,52,8),n+8}u.prototype.writeDoubleLE=function(o,n,r){return si(this,o,n,!0,r)};u.prototype.writeDoubleBE=function(o,n,r){return si(this,o,n,!1,r)};u.prototype.copy=function(o,n,r,c){if(!u.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),n>=o.length&&(n=o.length),n||(n=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-n<c-r&&(c=o.length-n+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),n),p};u.prototype.fill=function(o,n,r,c){if(typeof o=="string"){if(typeof n=="string"?(c=n,n=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!u.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=u.isBuffer(o)?o:u.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var I_=/[^+/0-9A-Za-z-_]/g;function A_(e){if(e=e.split("=")[0],e=e.trim().replace(I_,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ar(e,o){o=o||1/0;for(var n,r=e.length,c=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!c){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),c=n;continue}n=(c-55296<<10|n-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function k_(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function L_(e,o){for(var n,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,c=n%256,p.push(c),p.push(r);return p}function ci(e){return tr.toByteArray(A_(e))}function Ft(e,o,n,r){for(var c=0;c<r&&!(c+n>=o.length||c>=e.length);++c)o[c+n]=e[c];return c}function ge(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function cr(e){return e!==e}var C_=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,c=0;c<16;++c)o[r+c]=e[n]+e[c];return o}()});var ui=S((Mb,_i)=>{t();var B=_i.exports={},fe,Te;function pr(){throw new Error("setTimeout has not been defined")}function mr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?fe=setTimeout:fe=pr}catch(e){fe=pr}try{typeof clearTimeout=="function"?Te=clearTimeout:Te=mr}catch(e){Te=mr}})();function mi(e){if(fe===setTimeout)return setTimeout(e,0);if((fe===pr||!fe)&&setTimeout)return fe=setTimeout,setTimeout(e,0);try{return fe(e,0)}catch(o){try{return fe.call(null,e,0)}catch(n){return fe.call(this,e,0)}}}function P_(e){if(Te===clearTimeout)return clearTimeout(e);if((Te===mr||!Te)&&clearTimeout)return Te=clearTimeout,clearTimeout(e);try{return Te(e)}catch(o){try{return Te.call(null,e)}catch(n){return Te.call(this,e)}}}var ke=[],ko=!1,to,Bt=-1;function N_(){!ko||!to||(ko=!1,to.length?ke=to.concat(ke):Bt=-1,ke.length&&di())}function di(){if(!ko){var e=mi(N_);ko=!0;for(var o=ke.length;o;){for(to=ke,ke=[];++Bt<o;)to&&to[Bt].run();Bt=-1,o=ke.length}to=null,ko=!1,P_(e)}}B.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];ke.push(new li(e,o)),ke.length===1&&!ko&&mi(di)};function li(e,o){this.fun=e,this.array=o}li.prototype.run=function(){this.fun.apply(null,this.array)};B.title="browser";B.browser=!0;B.env={};B.argv=[];B.version="";B.versions={};function Le(){}B.on=Le;B.addListener=Le;B.once=Le;B.off=Le;B.removeListener=Le;B.removeAllListeners=Le;B.emit=Le;B.prependListener=Le;B.prependOnceListener=Le;B.listeners=function(e){return[]};B.binding=function(e){throw new Error("process.binding is not supported")};B.cwd=function(){return"/"};B.chdir=function(e){throw new Error("process.chdir is not supported")};B.umask=function(){return 0}});var a,s,E_,i,t=h(()=>{a=f(pi()),s=f(ui()),E_=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=E_});var Ce,no=h(()=>{"use strict";t();Ce=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var dr={};V(dr,{css:()=>fi,default:()=>D_});var fi,D_,lr=h(()=>{"use strict";t();fi=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fi));D_={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var hi=h(()=>{"use strict";t()});var he=h(()=>{"use strict";t()});var xi=h(()=>{"use strict";t()});var ur,yi=h(()=>{"use strict";t();ur=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(ur||{})});var bi=h(()=>{"use strict";t()});var gr=h(()=>{"use strict";t()});var Si=h(()=>{"use strict";t()});var fr=h(()=>{"use strict";t()});var wi=h(()=>{"use strict";t()});var vi=h(()=>{"use strict";t()});var ro,Lo,Ge=h(()=>{"use strict";t();ro=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Lo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var re,Ii,tS,Ai,nS,D=h(()=>{"use strict";t();Ge();re=(d=>(d.pending="pending",d.fail="fail",d.invalid="invalid",d.success="success",d.executed="executed",d.notExecuted="not executed",d.rewardReverted="reward-reverted",d))(re||{}),Ii=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(Ii||{}),tS=g(g({},Lo.WindowProviderRequestEnums),Ii),Ai=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ai||{}),nS=g(g({},Lo.WindowProviderResponseEnums),Ai)});var ki=h(()=>{"use strict";t()});var Li=h(()=>{"use strict";t()});var Tr,Y=h(()=>{"use strict";t();Tr=(r=>(r.nft="nft",r.esdt="esdt",r.egld="egld",r))(Tr||{})});var Ci=h(()=>{"use strict";t()});var Pi=h(()=>{"use strict";t()});var Ni=h(()=>{"use strict";t()});var M=h(()=>{"use strict";t();fr();wi();vi();D();ki();Li();Y();Ci();Pi();Ni()});var Co,Ei,yS,Di,bS,Ri,SS,wS,F_,Po=h(()=>{"use strict";t();M();Co={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ei,egldLabel:yS}=Co["devnet"],{chainId:Di,egldLabel:bS}=Co["testnet"],{chainId:Ri,egldLabel:SS}=Co["mainnet"],wS={["devnet"]:Ei,["testnet"]:Di,["mainnet"]:Ri},F_={[Ei]:"devnet",[Di]:"testnet",[Ri]:"mainnet"}});var Ut=h(()=>{"use strict";t()});var xe,Mi=h(()=>{"use strict";t();xe=require("@multiversx/sdk-web-wallet-provider")});var ao,tt=h(()=>{"use strict";t();ao=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Oi,Fi,hr,CS,PS,xr=h(()=>{"use strict";t();tt();hr=String((Fi=(Oi=ao.safeWindow)==null?void 0:Oi.navigator)==null?void 0:Fi.userAgent),CS=/^((?!chrome|android).)*safari/i.test(hr),PS=/firefox/i.test(hr)&&/windows/i.test(hr)});var Gt,Vt,$,io,Bi,Ht,Wi,ye,Ui,A=h(()=>{"use strict";t();hi();he();xi();yi();bi();gr();Si();Po();Ut();Mi();xr();Gt=5e4,Vt=1e9,$=18,io=4,Bi=1,Ht="logout",Wi="login",ye="0",Ui="..."});var nt,qt=h(()=>{"use strict";t();nt=()=>Date.now()/1e3});var Hi=h(()=>{"use strict";t()});var $i=h(()=>{"use strict";t()});var br=h(()=>{"use strict";t();qt();Hi();$i()});var Sr={};V(Sr,{clear:()=>G_,getItem:()=>W_,localStorageKeys:()=>He,removeItem:()=>U_,setItem:()=>B_});var He,zt,B_,W_,U_,G_,No=h(()=>{"use strict";t();br();He={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},zt=typeof localStorage!="undefined",B_=({key:e,data:o,expires:n})=>{!zt||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},W_=e=>{if(!zt)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:nt()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},U_=e=>{!zt||localStorage.removeItem(String(e))},G_=()=>{!zt||localStorage.clear()}});var wr={};V(wr,{clear:()=>Ki,getItem:()=>zi,removeItem:()=>ji,setItem:()=>qi,storage:()=>V_});var qi,zi,ji,Ki,V_,Xi=h(()=>{"use strict";t();qi=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},zi=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},ji=e=>sessionStorage.removeItem(String(e)),Ki=()=>sessionStorage.clear(),V_={setItem:qi,getItem:zi,removeItem:ji,clear:Ki}});var so,Eo=h(()=>{"use strict";t();No();Xi();so={session:wr,local:Sr}});var vr,O,J,F=h(()=>{"use strict";t();vr=require("@reduxjs/toolkit");A();O=(0,vr.createAction)(Ht),J=(0,vr.createAction)(Wi,e=>({payload:e}))});var Ar,Yi,Zi,jt,Ir,Ji,Kt,H_,kr,p0,$_,q_,m0,d0,l0,z_,j_,Xt,Yt=h(()=>{"use strict";t();Ar=require("@multiversx/sdk-core"),Yi=require("@reduxjs/toolkit"),Zi=require("redux-persist");A();Eo();No();F();jt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ye},Ir={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":jt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ji=(0,Yi.createSlice)({name:"accountInfoSlice",initialState:Ir,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Ar.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:jt},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(O,()=>(so.local.removeItem(He.loginExpiresAt),Ir)),e.addCase(J,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new Ar.Address(r).hex()}),e.addCase(Zi.REHYDRATE,(o,n)=>{var _;if(!((_=n.payload)!=null&&_.account))return;let{account:r}=n.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:Ir.accounts,o.publicKey=d})}}),{setAccount:Kt,setAddress:H_,setAccountNonce:kr,setAccountShard:p0,setLedgerAccount:$_,updateLedgerAccount:q_,setWalletConnectAccount:m0,setIsAccountLoading:d0,setAccountLoadingError:l0,setWebsocketEvent:z_,setWebsocketBatchEvent:j_}=Ji.actions,Xt=Ji.reducer});function rt(){return new Date().setHours(new Date().getHours()+24)}function at(e){so.local.setItem({key:He.loginExpiresAt,data:e,expires:e})}var Lr=h(()=>{"use strict";t();Eo();No()});var es,Qi,os,S0,K_,X_,ts,w0,Y_,ns,v0,I0,A0,Zt,Jt=h(()=>{"use strict";t();es=require("@reduxjs/toolkit");Lr();D();F();Qi={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},os=(0,es.createSlice)({name:"loginInfoSlice",initialState:Qi,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(O,()=>Qi),e.addCase(J,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,at(rt())})}}),{setLoginMethod:S0,setWalletConnectLogin:K_,setLedgerLogin:X_,setTokenLogin:ts,setTokenLoginSignature:w0,setWalletLogin:Y_,invalidateLoginSession:ns,setLogoutRoute:v0,setIsWalletConnectV2Initialized:I0,setWebviewLogin:A0}=os.actions,Zt=os.reducer});var as,rs,is,P0,Z_,N0,J_,Qt,en=h(()=>{"use strict";t();as=require("@reduxjs/toolkit");F();rs={},is=(0,as.createSlice)({name:"modalsSlice",initialState:rs,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(O,()=>rs)}}),{setTxSubmittedModal:P0,setNotificationModal:Z_,clearTxSubmittedModal:N0,clearNotificationModal:J_}=is.actions,Qt=is.reducer});var W,z=h(()=>{"use strict";t();no();W=()=>{if(!Ce())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:c,search:p}}=window;return{pathname:o,hash:n,origin:r,href:c,search:p}}});var ss=h(()=>{"use strict";t();z()});var cs=h(()=>{"use strict";t();j()});var ps=h(()=>{"use strict";t();tt()});var j=h(()=>{"use strict";t();ss();cs();z();ps()});var it=h(()=>{"use strict";t();j()});var ds=h(()=>{"use strict";t();it()});function ls(e){return e[Math.floor(Math.random()*e.length)]}var _s=h(()=>{"use strict";t()});var Cr=h(()=>{"use strict";t();gr()});var Pe=h(()=>{"use strict";t();ds();_s();Cr()});var us,gs,fs,Pr,eu,Ts,pw,mw,ou,on,tn=h(()=>{"use strict";t();us=require("@reduxjs/toolkit"),gs=f(require("lodash.omit")),fs=require("redux-persist");Ut();F();Pe();Pr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},eu={network:Pr},Ts=(0,us.createSlice)({name:"appConfig",initialState:eu,reducers:{initializeNetworkConfig:(e,o)=>{let n=ls(o.payload.walletConnectV2RelayAddresses),r=(0,gs.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(g(g({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=g(g({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(O,o=>{o.network.customWalletAddress=void 0}),e.addCase(fs.REHYDRATE,(o,n)=>{var c,p;if(!((p=(c=n.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:pw,updateNetworkConfig:mw,setCustomWalletAddress:ou}=Ts.actions,on=Ts.reducer});var hs,Nr,xs,fw,Tw,hw,nn,rn=h(()=>{"use strict";t();hs=require("@reduxjs/toolkit");M();F();Nr={isSigning:!1,signedSessions:{}},xs=(0,hs.createSlice)({name:"signedMessageInfoSliceState",initialState:Nr,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[n]=g(g({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>g(g({},e),o.payload),clearSignedMessageInfo:()=>Nr},extraReducers:e=>{e.addCase(O,()=>Nr)}}),{setSignSession:fw,clearSignedMessageInfo:Tw,setSignSessionState:hw}=xs.actions,nn=xs.reducer});var bs,Ss,ys,ws,tu,nu,Iw,ru,an,sn=h(()=>{"use strict";t();bs=require("@reduxjs/toolkit"),Ss=require("redux-persist");M();qt();F();ys={customToasts:[],transactionToasts:[]},ws=(0,bs.createSlice)({name:"toastsSlice",initialState:ys,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===n);if(r!==-1){e.customToasts[r]=w(g(g({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(w(g({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:nt(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(O,()=>ys),e.addCase(Ss.REHYDRATE,(o,n)=>{var c,p;let r=(p=(c=n.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:tu,removeCustomToast:nu,addTransactionToast:Iw,removeTransactionToast:ru}=ws.actions,an=ws.reducer});var vs,Dr,Rr,Mr,au,Er,Is,Cw,iu,Or,cn,pn=h(()=>{"use strict";t();vs=require("@reduxjs/toolkit");F();Dr="Transaction failed",Rr="Transaction successful",Mr="Processing transaction",au="Transaction submitted",Er={},Is=(0,vs.createSlice)({name:"transactionsInfo",initialState:Er,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Dr,successMessage:(r==null?void 0:r.successMessage)||Rr,processingMessage:(r==null?void 0:r.processingMessage)||Mr,submittedMessage:(r==null?void 0:r.submittedMessage)||au,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Er},extraReducers:e=>{e.addCase(O,()=>Er)}}),{clearTransactionsInfo:Cw,setTransactionsDisplayInfo:iu,clearTransactionsInfoForSessionId:Or}=Is.actions,cn=Is.reducer});function Do(e){return e!=null&&(fu(e)||mn(e))}function Ro(e){return e!=null&&(Tu(e)||bu(e))}function Mo(e){return e!=null&&(hu(e)||Su(e))}function As(e){return e!=null&&(xu(e)||wu(e))}function Fr(e){return e!=null&&yu(e)}function fu(e){return e!=null&&su.includes(e)}function Tu(e){return e!=null&&cu.includes(e)}function hu(e){return e!=null&&pu.includes(e)}function xu(e){return e!=null&&mu.includes(e)}function yu(e){return e!=null&&du.includes(e)}function mn(e){return e!=null&&lu.includes(e)}function bu(e){return e!=null&&_u.includes(e)}function Su(e){return e!=null&&uu.includes(e)}function wu(e){return e!=null&&gu.includes(e)}var su,cu,pu,mu,du,lu,_u,uu,gu,co=h(()=>{"use strict";t();D();su=["sent"],cu=["success"],pu=["fail","cancelled","timedOut"],mu=["invalid"],du=["timedOut"],lu=["pending"],_u=["success"],uu=["fail","invalid"],gu=["not executed"]});var ks,Ls,st,vu,Cs,Ps,Ns,Iu,dn,Au,ku,Bw,Lu,ct,Br,Ww,ln,_n=h(()=>{"use strict";t();ks=require("@reduxjs/toolkit"),Ls=require("redux-persist");D();co();F();st={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},vu={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Cs=(0,ks.createSlice)({name:"transactionsSlice",initialState:st,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:n,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=g(g(g({},vu),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:g(g({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===n&&(e.transactionsToSign=st.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=g(g({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,c!=null&&(e.signedTransactions[n].errorMessage=c),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,T,y,v,C,E,G,te;let{sessionId:n,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(T=(_=e.signedTransactions)==null?void 0:_[n])==null?void 0:T.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(R=>R.hash===p?w(g(g({},m!=null?m:{}),R),{status:r,errorMessage:c,inTransit:d}):R);let Qe=(v=(y=e.signedTransactions[n])==null?void 0:y.transactions)==null?void 0:v.every(R=>Ro(R.status)),Ue=(E=(C=e.signedTransactions[n])==null?void 0:C.transactions)==null?void 0:E.some(R=>Mo(R.status)),ve=(te=(G=e.signedTransactions[n])==null?void 0:G.transactions)==null?void 0:te.every(R=>As(R.status));Qe&&(e.signedTransactions[n].status="success"),Ue&&(e.signedTransactions[n].status="fail"),ve&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=st.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=st.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=g(g({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(O,()=>st),e.addCase(Ls.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=n.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let T=new Date(l),y=new Date;return y.setHours(y.getHours()+5),y-T>0||(d[l]=_),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Ps,updateSignedTransactions:Ns,setTransactionsToSign:Iu,clearAllTransactionsToSign:dn,clearAllSignedTransactions:Au,clearSignedTransaction:ku,clearTransactionToSign:Bw,setSignTransactionsError:Lu,setSignTransactionsCancelMessage:ct,moveTransactionsToSignedState:Br,updateSignedTransactionsCustomTransactionInformation:Ww}=Cs.actions,ln=Cs.reducer});var Es,Wr,Ds,Hw,$w,Cu,qw,un,gn=h(()=>{"use strict";t();Es=require("@reduxjs/toolkit");F();Wr={},Ds=(0,Es.createSlice)({name:"batchTransactionsSlice",initialState:Wr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Wr},extraReducers:e=>{e.addCase(O,()=>Wr)}}),{setBatchTransactions:Hw,updateBatchTransactions:$w,clearBatchTransactions:Cu,clearAllBatchTransactions:qw}=Ds.actions,un=Ds.reducer});var Ms,Rs,Os,Xw,Fs,Ur=h(()=>{"use strict";t();Ms=require("@reduxjs/toolkit");F();Rs={},Os=(0,Ms.createSlice)({name:"dappConfigSlice",initialState:Rs,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(O,()=>Rs)}}),{setDappConfig:Xw}=Os.actions,Fs=Os.reducer});var N=h(()=>{"use strict";t();Yt();Jt();en();tn();rn();sn();pn();_n();gn();Ur()});var Gr=h(()=>{"use strict";t()});var Us,Du,Ru,po,hn=h(()=>{"use strict";t();Us=require("@reduxjs/toolkit");Gr();Yt();gn();Ur();Jt();en();tn();rn();sn();pn();_n();Du={["account"]:Xt,["dappConfig"]:Fs,["loginInfo"]:Zt,["modals"]:Qt,["networkConfig"]:on,["signedMessageInfo"]:nn,["toasts"]:an,["transactionsInfo"]:cn,["transactions"]:ln,["batchTransactions"]:un},Ru=(e={})=>(0,Us.combineReducers)(g(g({},Du),e)),po=Ru});var $s={};V($s,{default:()=>Yu,sessionStorageReducers:()=>Vr});function Ne(e,o=[]){return{key:e,version:1,storage:Vs.default,blacklist:o}}var Z,Gs,Vs,Mu,pt,Ou,Fu,Bu,Wu,Uu,Gu,Vu,Hu,$u,qu,Hs,zu,Vr,ju,Ku,Xu,Yu,qs=h(()=>{"use strict";t();Z=require("redux-persist"),Gs=f(require("redux-persist/lib/storage")),Vs=f(require("redux-persist/lib/storage/session"));hn();N();Yt();gn();Jt();en();tn();rn();sn();pn();_n();Gr();Mu={persistReducersStorageType:"localStorage"},pt={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Ou=Ne(pt["account"]),Fu=Ne(pt["loginInfo"]),Bu=Ne(pt["modals"]),Wu=Ne(pt["networkConfig"]),Uu={2:e=>w(g({},e),{networkConfig:Pr})};Gu=Ne("sdk-dapp-transactionsInfo"),Vu=Ne("sdk-dapp-transactions",["transactionsToSign"]),Hu=Ne("sdk-dapp-batchTransactions",["batchTransactions"]),$u=Ne("sdk-dapp-toasts"),qu=Ne("sdk-dapp-signedMessageInfo"),Hs={key:"sdk-dapp-store",version:2,storage:Gs.default,whitelist:Object.keys(pt),migrate:(0,Z.createMigrate)(Uu,{debug:!1})},zu=w(g({},Hs),{whitelist:[]}),Vr={["toasts"]:(0,Z.persistReducer)($u,an),["transactions"]:(0,Z.persistReducer)(Vu,ln),["transactionsInfo"]:(0,Z.persistReducer)(Gu,cn),["batchTransactions"]:(0,Z.persistReducer)(Hu,un),["signedMessageInfo"]:(0,Z.persistReducer)(qu,nn)},ju=w(g({},Vr),{["account"]:(0,Z.persistReducer)(Ou,Xt),["loginInfo"]:(0,Z.persistReducer)(Fu,Zt),["modals"]:(0,Z.persistReducer)(Bu,Qt),["networkConfig"]:(0,Z.persistReducer)(Wu,on)}),Ku=Mu.persistReducersStorageType==="localStorage",Xu=Ku?(0,Z.persistReducer)(Hs,po(Vr)):(0,Z.persistReducer)(zu,po(ju)),Yu=Xu});var zs={};V(zs,{default:()=>Zu});var Zu,js=h(()=>{"use strict";t();hn();Zu=po()});var Ks={};V(Ks,{default:()=>Qu});var ae,Ju,Qu,Xs=h(()=>{"use strict";t();ae=require("redux-persist"),Ju=[ae.FLUSH,ae.REHYDRATE,ae.PAUSE,ae.PERSIST,ae.PURGE,ae.REGISTER],Qu=Ju});var Js={};V(Js,{default:()=>Zs});function Zs(e){return(0,Ys.persistStore)(e)}var Ys,Qs=h(()=>{"use strict";t();Ys=require("redux-persist")});var ca={};V(ca,{css:()=>_p,default:()=>hf});var _p,hf,pa=h(()=>{"use strict";t();_p=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_p));hf={copy:"dapp-core-component__copyButton-styles__copy"}});var da={};V(da,{css:()=>fp,default:()=>yf});var fp,yf,la=h(()=>{"use strict";t();fp=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fp));yf={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Np=S((p5,Pp)=>{t();var Wf=typeof i=="object"&&i&&i.Object===Object&&i;Pp.exports=Wf});var ht=S((m5,Ep)=>{t();var Uf=Np(),Gf=typeof self=="object"&&self&&self.Object===Object&&self,Vf=Uf||Gf||Function("return this")();Ep.exports=Vf});var ga=S((d5,Dp)=>{t();var Hf=ht(),$f=Hf.Symbol;Dp.exports=$f});var Fp=S((l5,Op)=>{t();var Rp=ga(),Mp=Object.prototype,qf=Mp.hasOwnProperty,zf=Mp.toString,xt=Rp?Rp.toStringTag:void 0;function jf(e){var o=qf.call(e,xt),n=e[xt];try{e[xt]=void 0;var r=!0}catch(p){}var c=zf.call(e);return r&&(o?e[xt]=n:delete e[xt]),c}Op.exports=jf});var Wp=S((_5,Bp)=>{t();var Kf=Object.prototype,Xf=Kf.toString;function Yf(e){return Xf.call(e)}Bp.exports=Yf});var fa=S((u5,Vp)=>{t();var Up=ga(),Zf=Fp(),Jf=Wp(),Qf="[object Null]",eT="[object Undefined]",Gp=Up?Up.toStringTag:void 0;function oT(e){return e==null?e===void 0?eT:Qf:Gp&&Gp in Object(e)?Zf(e):Jf(e)}Vp.exports=oT});var $p=S((g5,Hp)=>{t();var tT=Array.isArray;Hp.exports=tT});var zp=S((f5,qp)=>{t();function nT(e){return e!=null&&typeof e=="object"}qp.exports=nT});var Kp=S((T5,jp)=>{t();var rT=fa(),aT=$p(),iT=zp(),sT="[object String]";function cT(e){return typeof e=="string"||!aT(e)&&iT(e)&&rT(e)==sT}jp.exports=cT});var Gn=S((f6,Qp)=>{t();function kT(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Qp.exports=kT});var om=S((T6,em)=>{t();var LT=fa(),CT=Gn(),PT="[object AsyncFunction]",NT="[object Function]",ET="[object GeneratorFunction]",DT="[object Proxy]";function RT(e){if(!CT(e))return!1;var o=LT(e);return o==NT||o==ET||o==PT||o==DT}em.exports=RT});var nm=S((h6,tm)=>{t();var MT=ht(),OT=MT["__core-js_shared__"];tm.exports=OT});var im=S((x6,am)=>{t();var ya=nm(),rm=function(){var e=/[^.]+$/.exec(ya&&ya.keys&&ya.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function FT(e){return!!rm&&rm in e}am.exports=FT});var cm=S((y6,sm)=>{t();var BT=Function.prototype,WT=BT.toString;function UT(e){if(e!=null){try{return WT.call(e)}catch(o){}try{return e+""}catch(o){}}return""}sm.exports=UT});var mm=S((b6,pm)=>{t();var GT=om(),VT=im(),HT=Gn(),$T=cm(),qT=/[\\^$.*+?()[\]{}|]/g,zT=/^\[object .+?Constructor\]$/,jT=Function.prototype,KT=Object.prototype,XT=jT.toString,YT=KT.hasOwnProperty,ZT=RegExp("^"+XT.call(YT).replace(qT,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function JT(e){if(!HT(e)||VT(e))return!1;var o=GT(e)?ZT:zT;return o.test($T(e))}pm.exports=JT});var lm=S((S6,dm)=>{t();function QT(e,o){return e==null?void 0:e[o]}dm.exports=QT});var Vn=S((w6,_m)=>{t();var eh=mm(),oh=lm();function th(e,o){var n=oh(e,o);return eh(n)?n:void 0}_m.exports=th});var yt=S((v6,um)=>{t();var nh=Vn(),rh=nh(Object,"create");um.exports=rh});var Tm=S((I6,fm)=>{t();var gm=yt();function ah(){this.__data__=gm?gm(null):{},this.size=0}fm.exports=ah});var xm=S((A6,hm)=>{t();function ih(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}hm.exports=ih});var bm=S((k6,ym)=>{t();var sh=yt(),ch="__lodash_hash_undefined__",ph=Object.prototype,mh=ph.hasOwnProperty;function dh(e){var o=this.__data__;if(sh){var n=o[e];return n===ch?void 0:n}return mh.call(o,e)?o[e]:void 0}ym.exports=dh});var wm=S((L6,Sm)=>{t();var lh=yt(),_h=Object.prototype,uh=_h.hasOwnProperty;function gh(e){var o=this.__data__;return lh?o[e]!==void 0:uh.call(o,e)}Sm.exports=gh});var Im=S((C6,vm)=>{t();var fh=yt(),Th="__lodash_hash_undefined__";function hh(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fh&&o===void 0?Th:o,this}vm.exports=hh});var km=S((P6,Am)=>{t();var xh=Tm(),yh=xm(),bh=bm(),Sh=wm(),wh=Im();function $o(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}$o.prototype.clear=xh;$o.prototype.delete=yh;$o.prototype.get=bh;$o.prototype.has=Sh;$o.prototype.set=wh;Am.exports=$o});var Cm=S((N6,Lm)=>{t();function vh(){this.__data__=[],this.size=0}Lm.exports=vh});var Nm=S((E6,Pm)=>{t();function Ih(e,o){return e===o||e!==e&&o!==o}Pm.exports=Ih});var bt=S((D6,Em)=>{t();var Ah=Nm();function kh(e,o){for(var n=e.length;n--;)if(Ah(e[n][0],o))return n;return-1}Em.exports=kh});var Rm=S((R6,Dm)=>{t();var Lh=bt(),Ch=Array.prototype,Ph=Ch.splice;function Nh(e){var o=this.__data__,n=Lh(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():Ph.call(o,n,1),--this.size,!0}Dm.exports=Nh});var Om=S((M6,Mm)=>{t();var Eh=bt();function Dh(e){var o=this.__data__,n=Eh(o,e);return n<0?void 0:o[n][1]}Mm.exports=Dh});var Bm=S((O6,Fm)=>{t();var Rh=bt();function Mh(e){return Rh(this.__data__,e)>-1}Fm.exports=Mh});var Um=S((F6,Wm)=>{t();var Oh=bt();function Fh(e,o){var n=this.__data__,r=Oh(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}Wm.exports=Fh});var Vm=S((B6,Gm)=>{t();var Bh=Cm(),Wh=Rm(),Uh=Om(),Gh=Bm(),Vh=Um();function qo(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}qo.prototype.clear=Bh;qo.prototype.delete=Wh;qo.prototype.get=Uh;qo.prototype.has=Gh;qo.prototype.set=Vh;Gm.exports=qo});var $m=S((W6,Hm)=>{t();var Hh=Vn(),$h=ht(),qh=Hh($h,"Map");Hm.exports=qh});var jm=S((U6,zm)=>{t();var qm=km(),zh=Vm(),jh=$m();function Kh(){this.size=0,this.__data__={hash:new qm,map:new(jh||zh),string:new qm}}zm.exports=Kh});var Xm=S((G6,Km)=>{t();function Xh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Km.exports=Xh});var St=S((V6,Ym)=>{t();var Yh=Xm();function Zh(e,o){var n=e.__data__;return Yh(o)?n[typeof o=="string"?"string":"hash"]:n.map}Ym.exports=Zh});var Jm=S((H6,Zm)=>{t();var Jh=St();function Qh(e){var o=Jh(this,e).delete(e);return this.size-=o?1:0,o}Zm.exports=Qh});var ed=S(($6,Qm)=>{t();var ex=St();function ox(e){return ex(this,e).get(e)}Qm.exports=ox});var td=S((q6,od)=>{t();var tx=St();function nx(e){return tx(this,e).has(e)}od.exports=nx});var rd=S((z6,nd)=>{t();var rx=St();function ax(e,o){var n=rx(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}nd.exports=ax});var id=S((j6,ad)=>{t();var ix=jm(),sx=Jm(),cx=ed(),px=td(),mx=rd();function zo(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}zo.prototype.clear=ix;zo.prototype.delete=sx;zo.prototype.get=cx;zo.prototype.has=px;zo.prototype.set=mx;ad.exports=zo});var cd=S((K6,sd)=>{t();var dx="__lodash_hash_undefined__";function lx(e){return this.__data__.set(e,dx),this}sd.exports=lx});var md=S((X6,pd)=>{t();function _x(e){return this.__data__.has(e)}pd.exports=_x});var ld=S((Y6,dd)=>{t();var ux=id(),gx=cd(),fx=md();function Hn(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new ux;++o<n;)this.add(e[o])}Hn.prototype.add=Hn.prototype.push=gx;Hn.prototype.has=fx;dd.exports=Hn});var ud=S((Z6,_d)=>{t();function Tx(e,o,n,r){for(var c=e.length,p=n+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}_d.exports=Tx});var fd=S((J6,gd)=>{t();function hx(e){return e!==e}gd.exports=hx});var hd=S((Q6,Td)=>{t();function xx(e,o,n){for(var r=n-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Td.exports=xx});var yd=S((eF,xd)=>{t();var yx=ud(),bx=fd(),Sx=hd();function wx(e,o,n){return o===o?Sx(e,o,n):yx(e,bx,n)}xd.exports=wx});var Sd=S((oF,bd)=>{t();var vx=yd();function Ix(e,o){var n=e==null?0:e.length;return!!n&&vx(e,o,0)>-1}bd.exports=Ix});var vd=S((tF,wd)=>{t();function Ax(e,o,n){for(var r=-1,c=e==null?0:e.length;++r<c;)if(n(o,e[r]))return!0;return!1}wd.exports=Ax});var Ad=S((nF,Id)=>{t();function kx(e,o){return e.has(o)}Id.exports=kx});var Ld=S((rF,kd)=>{t();var Lx=Vn(),Cx=ht(),Px=Lx(Cx,"Set");kd.exports=Px});var Pd=S((aF,Cd)=>{t();function Nx(){}Cd.exports=Nx});var ba=S((iF,Nd)=>{t();function Ex(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}Nd.exports=Ex});var Dd=S((sF,Ed)=>{t();var Sa=Ld(),Dx=Pd(),Rx=ba(),Mx=1/0,Ox=Sa&&1/Rx(new Sa([,-0]))[1]==Mx?function(e){return new Sa(e)}:Dx;Ed.exports=Ox});var Md=S((cF,Rd)=>{t();var Fx=ld(),Bx=Sd(),Wx=vd(),Ux=Ad(),Gx=Dd(),Vx=ba(),Hx=200;function $x(e,o,n){var r=-1,c=Bx,p=e.length,m=!0,d=[],l=d;if(n)m=!1,c=Wx;else if(p>=Hx){var _=o?null:Gx(e);if(_)return Vx(_);m=!1,c=Ux,l=new Fx}else l=o?[]:d;e:for(;++r<p;){var T=e[r],y=o?o(T):T;if(T=n||T!==0?T:0,m&&y===y){for(var v=l.length;v--;)if(l[v]===y)continue e;o&&l.push(y),d.push(T)}else c(l,y,n)||(l!==d&&l.push(y),d.push(T))}return d}Rd.exports=$x});var Fd=S((pF,Od)=>{t();var qx=Md();function zx(e){return e&&e.length?qx(e):[]}Od.exports=zx});var Re={};V(Re,{css:()=>Yd,default:()=>Cy});var Yd,Cy,Me=h(()=>{"use strict";t();Yd=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yd));Cy={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Na={};V(Na,{css:()=>cl,default:()=>Xy});var cl,Xy,Ea=h(()=>{"use strict";t();cl=`.dapp-core-component__trim-styles__trim {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  /* IE fix */
  /* SAFARI fix */
}
.dapp-core-component__trim-styles__trim.dapp-core-component__trim-styles__overflow .dapp-core-component__trim-styles__ellipsis {
  display: block;
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__left {
  flex-shrink: 1;
  font-size: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right {
  flex-shrink: 1;
  font-size: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: rtl;
  text-align: right;
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__left span,
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right span {
  font-size: 0.875rem;
  pointer-events: none;
  user-select: none;
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__ellipsis {
  flex-shrink: 0;
  display: none;
  pointer-events: none;
  user-select: none;
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right {
    text-overflow: clip;
  }
}
@supports (-webkit-hyphens: none) {
  .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right,
  .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__left {
    letter-spacing: -0.001em;
  }
  .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right {
    text-overflow: clip;
  }
}
.dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__hidden-text-ref {
  position: absolute;
  display: block;
  color: transparent;
}
@media (max-width: 1199.98px) {
  .dapp-core-component__trim-styles__trim {
    max-width: 26rem;
  }
}
@media (max-width: 991.98px) {
  .dapp-core-component__trim-styles__trim {
    max-width: 12rem;
  }
}
@media (max-width: 768px) {
  .dapp-core-component__trim-styles__trim {
    max-width: 8rem;
  }
}

.dapp-core-component__trim-styles__trim-wrapper {
  display: flex;
  max-width: 100%;
  overflow: hidden;
}

a:hover > .dapp-core-component__trim-styles__trim span {
  color: rgb(0, 86.1, 178.5);
}
a:hover > .dapp-core-component__trim-styles__trim span.dapp-core-component__trim-styles__hidden-text-ref {
  color: transparent;
}

a > .dapp-core-component__trim-styles__trim span,
.dapp-core-component__trim-styles__text-primary > .dapp-core-component__trim-styles__trim span {
  color: #1b46c2;
}
a > .dapp-core-component__trim-styles__trim span.dapp-core-component__trim-styles__hidden-text-ref,
.dapp-core-component__trim-styles__text-primary > .dapp-core-component__trim-styles__trim span.dapp-core-component__trim-styles__hidden-text-ref {
  color: transparent;
}

.dapp-core-component__trim-styles__table .dapp-core-component__trim-styles__trim {
  max-width: 10rem;
}

.dapp-core-component__trim-styles__table .dapp-core-component__trim-styles__trim-only-sm .dapp-core-component__trim-styles__trim {
  max-width: none;
}
@media (max-width: 768px) {
  .dapp-core-component__trim-styles__table .dapp-core-component__trim-styles__trim-only-sm .dapp-core-component__trim-styles__trim {
    max-width: 13rem;
  }
}

.dapp-core-component__trim-styles__trim-fs-sm .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__left span,
.dapp-core-component__trim-styles__trim-fs-sm .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__right span,
.dapp-core-component__trim-styles__trim-fs-sm .dapp-core-component__trim-styles__trim .dapp-core-component__trim-styles__ellipsis {
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .dapp-core-component__trim-styles__table .dapp-core-component__trim-styles__trim-size-xl .dapp-core-component__trim-styles__trim {
    max-width: 13rem;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cl));Xy={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Oe={};V(Oe,{css:()=>dl,default:()=>Zy});var dl,Zy,Fe=h(()=>{"use strict";t();dl=`.dapp-core-component__transactionDetails-styles__title {
  margin-bottom: 0;
}

.dapp-core-component__transactionDetails-styles__status {
  font-size: 0.875rem;
  margin: 0.25rem 0 0.5rem;
  line-height: 1.5;
}

.dapp-core-component__transactionDetails-styles__container {
  line-height: 1.5;
  font-size: 0.875rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
}
.dapp-core-component__transactionDetails-styles__container .dapp-core-component__transactionDetails-styles__icon {
  font-size: 0.875rem;
  color: #6c757d;
  margin-right: 0.25rem;
}
.dapp-core-component__transactionDetails-styles__container .dapp-core-component__transactionDetails-styles__trim {
  width: 11rem;
  white-space: nowrap;
  margin-right: 1rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dl));Zy={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var xo={};V(xo,{css:()=>ul,default:()=>nb});var ul,nb,yo=h(()=>{"use strict";t();ul=`.dapp-core-component__transactionToast-styles__content {
  display: flex;
  align-items: center;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 0.5rem;
  padding-right: 0.75rem;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__warning {
  background-color: #f0ad4e;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__danger {
  background-color: #d9534f;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__success {
  background-color: #5cb85c;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__icon .dapp-core-component__transactionToast-styles__svg {
  height: auto;
  width: 20px;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__icon .dapp-core-component__transactionToast-styles__svg path {
  fill: #fff;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right {
  display: block;
  overflow: hidden;
  width: 100%;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right .dapp-core-component__transactionToast-styles__heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right .dapp-core-component__transactionToast-styles__heading .dapp-core-component__transactionToast-styles__title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  font-weight: 400;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right .dapp-core-component__transactionToast-styles__heading .dapp-core-component__transactionToast-styles__close {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right .dapp-core-component__transactionToast-styles__heading .dapp-core-component__transactionToast-styles__footer {
  display: block;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ul));nb={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var bo={};V(bo,{css:()=>fl,default:()=>ab});var fl,ab,So=h(()=>{"use strict";t();fl=`.dapp-core-component__transactionsToastList-styles__toasts {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 9999;
  font-family: "Helvetica", sans-serif;
}
.dapp-core-component__transactionsToastList-styles__toasts.dapp-core-component__transactionsToastList-styles__toastWrapper {
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  background-color: #fff;
  position: relative;
}
@media (min-width: 768px) {
  .dapp-core-component__transactionsToastList-styles__toasts {
    right: 2rem;
    bottom: 2rem;
    width: 22.5rem;
    left: auto;
  }
}

@keyframes dapp-core-component__transactionsToastList-styles__loader {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fl));ab={toasts:"dapp-core-component__transactionsToastList-styles__toasts",toastWrapper:"dapp-core-component__transactionsToastList-styles__toastWrapper",loader:"dapp-core-component__transactionsToastList-styles__loader"}});var Oa={};V(Oa,{css:()=>yl,default:()=>sb});var yl,sb,Fa=h(()=>{"use strict";t();yl=`.dapp-core-component__customToast-styles__close {
  position: absolute;
  top: 0.75rem;
  right: 0.4rem;
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yl));sb={close:"dapp-core-component__customToast-styles__close"}});var Ba={};V(Ba,{css:()=>wl,default:()=>mb});var wl,mb,Wa=h(()=>{"use strict";t();wl=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wl));mb={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var kt={};V(kt,{css:()=>Il,default:()=>gb});var Il,gb,Lt=h(()=>{"use strict";t();Il=`.dapp-core-component__styles__transaction-action-collection {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Il));gb={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var Pt={};V(Pt,{css:()=>El,default:()=>yb});var El,yb,Nt=h(()=>{"use strict";t();El=`.dapp-core-component__transactionsTable-styles__transactions-table {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(El));yb={"transactions-table":"dapp-core-component__transactionsTable-styles__transactions-table",transactionsTable:"dapp-core-component__transactionsTable-styles__transactions-table","transactions-table-header":"dapp-core-component__transactionsTable-styles__transactions-table-header",transactionsTableHeader:"dapp-core-component__transactionsTable-styles__transactions-table-header","table-wrapper":"dapp-core-component__transactionsTable-styles__table-wrapper",tableWrapper:"dapp-core-component__transactionsTable-styles__table-wrapper",table:"dapp-core-component__transactionsTable-styles__table","transaction-cell":"dapp-core-component__transactionsTable-styles__transaction-cell",transactionCell:"dapp-core-component__transactionsTable-styles__transaction-cell","transaction-cell-margin":"dapp-core-component__transactionsTable-styles__transaction-cell-margin",transactionCellMargin:"dapp-core-component__transactionsTable-styles__transaction-cell-margin","transaction-cell-overflow":"dapp-core-component__transactionsTable-styles__transaction-cell-overflow",transactionCellOverflow:"dapp-core-component__transactionsTable-styles__transaction-cell-overflow","transaction-cell-link":"dapp-core-component__transactionsTable-styles__transaction-cell-link",transactionCellLink:"dapp-core-component__transactionsTable-styles__transaction-cell-link","transaction-cell-font-small":"dapp-core-component__transactionsTable-styles__transaction-cell-font-small",transactionCellFontSmall:"dapp-core-component__transactionsTable-styles__transaction-cell-font-small"}});var Pb={};V(Pb,{CustomComponentToast:()=>Cb,IconToast:()=>kb,SimpleToast:()=>pb});module.exports=P(Pb);t();t();var zn=f(require("react")),Sl=f(require("classnames"));t();var Ti=f(require("react"));t();var ot=f(require("react"));t();no();var gi=()=>!Ce();var R_=()=>x(void 0,null,function*(){return yield Promise.resolve().then(()=>(lr(),dr))}),M_=()=>(lr(),P(dr)).default,_r=gi();function Wt({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,c]=ot.default.useState(_r?void 0:M_()),[p,m]=ot.default.useState(_r||n==null?void 0:n()),d=()=>x(this,null,function*(){(e?e():R_()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,ot.useEffect)(()=>{_r&&d()},[]),{globalStyles:r,styles:p}}function I(e,o){return n=>{let{globalStyles:r,styles:c}=Wt({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Ti.default.createElement(e,w(g({},n),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}t();t();var O_=require("react");t();var At=f(require("react"));t();t();var yr=f(require("react")),Gi=require("@fortawesome/free-solid-svg-icons"),Vi=require("@fortawesome/react-fontawesome");A();var $t=({className:e="dapp-default-toast-delete-button",onClick:o})=>yr.default.createElement("button",{type:"button",className:e,onClick:o,"data-testid":"deleteToastButton"},yr.default.createElement(Vi.FontAwesomeIcon,{icon:Gi.faTimes,size:"xs"}));t();var le=f(require("react")),gl=require("@fortawesome/react-fontawesome"),Ma=f(require("classnames"));A();t();t();var Ye=f(require("react"));t();t();var ac=require("react"),Oo=require("react-redux");t();var Hr=require("@reduxjs/toolkit"),nc=require("react-redux/lib/utils/Subscription");N();t();var Bs=f(require("lodash.throttle"));A();N();Lr();Eo();No();var Pu=[Ht],fn=!1,Nu=(0,Bs.default)(()=>{at(rt())},5e3),Ws=e=>o=>n=>{if(Pu.includes(n.type))return o(n);let r=e.getState(),c=so.local.getItem(He.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(c==null)return at(rt());let m=Date.now();return c-m<0&&!fn?setTimeout(()=>{fn=!0,e.dispatch(ns())},1e3):(fn&&(fn=!1),Nu()),o(n)};t();t();function Tn(){return typeof sessionStorage!="undefined"}var ec=Tn()?(qs(),P($s)).default:(js(),P(zs)).default,oc=Tn()?(Xs(),P(Ks)).default:[],tc=Tn()?(Qs(),P(Js)).default:e=>e;hn();var k=(0,Hr.configureStore)({reducer:ec,middleware:e=>e({serializableCheck:{ignoredActions:[...oc,kr.type,Kt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ws)}),rc=(0,nc.createSubscription)(k),jv=tc(k),Kv=(0,Hr.configureStore)({reducer:po});var eg={store:k,subscription:rc},$r=(0,ac.createContext)(eg),Jv=(0,Oo.createStoreHook)($r),K=(0,Oo.createDispatchHook)($r),L=(0,Oo.createSelectorHook)($r);t();t();N();t();var ic=f(require("lodash.isequal")),xn=require("reselect"),b=(0,xn.createSelectorCreator)(xn.defaultMemoize,ic.default);var be=e=>e.account,mo=b(be,e=>e.address),lo=b(be,mo,(e,o)=>o in e.accounts?e.accounts[o]:jt),og=b(be,lo,(e,o)=>{let c=e,{accounts:n}=c,r=Ie(c,["accounts"]);return w(g({},r),{address:o.address,account:o})}),nI=b(lo,e=>e.balance),tg=b(lo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),rI=b(be,e=>e.shard),ng=b(be,e=>e.ledgerAccount),aI=b(be,e=>e.walletConnectAccount),iI=b(be,e=>e.isAccountLoading),sI=b(be,e=>e.accountLoadingError),rg=b(be,e=>e.websocketEvent),ag=b(be,e=>e.websocketBatchEvent);t();var sc=e=>e.dappConfig,mI=b(sc,e=>e.shouldUseWebViewProvider);t();var Q=e=>e.loginInfo,ig=b(Q,e=>e.loginMethod),yn=b(Q,mo,(e,o)=>Boolean(o)),uI=b(Q,e=>e.walletConnectLogin),sg=b(Q,e=>e.ledgerLogin),cg=b(Q,e=>e.walletLogin),gI=b(Q,e=>e.isLoginSessionInvalid),qr=b(Q,e=>e.tokenLogin),cc=b(Q,e=>e.logoutRoute),pg=b(Q,e=>e.isWalletConnectV2Initialized);t();var pc=e=>e.modals,hI=b(pc,e=>e.txSubmittedModal),mg=b(pc,e=>e.notificationModal);t();var ce=e=>e.networkConfig,bn=b(ce,e=>e.network.chainId),dg=b(ce,e=>e.network.roundDuration),bI=b(ce,e=>e.network.walletConnectBridgeAddress),lg=b(ce,e=>e.network.walletConnectV2RelayAddress),_g=b(ce,e=>e.network.walletConnectV2ProjectId),ug=b(ce,e=>e.network.walletConnectV2Options),gg=b(ce,e=>e.network.walletConnectDeepLink),ee=b(ce,e=>e.network),mc=b(ee,e=>e.apiAddress),dc=b(ee,e=>e.explorerAddress),lc=b(ee,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),fg=b(ee,e=>e.xAliasAddress),zr=b(ee,e=>e.egldLabel);t();var Sn=e=>e.signedMessageInfo,vI=b(Sn,e=>e.isSigning),II=b(Sn,e=>e.errorMessage),AI=b(Sn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),kI=b(Sn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var _c=e=>e.toasts,Tg=b(_c,e=>e.customToasts),uc=b(_c,e=>e.transactionToasts);t();N();var gc={errorMessage:Dr,successMessage:Rr,processingMessage:Mr},fc=e=>e.transactionsInfo,hg=b(fc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||gc);t();t();var Se=require("@multiversx/sdk-core");A();t();var Kr=require("@multiversx/sdk-core/out");t();t();function mt(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function wn(e){return mt(e)?atob(e):e}t();t();function jr(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}function vn(e){let o=e;try{let n=a.Buffer.from(e,"hex").toString();jr(n)&&n.length>1&&(o=n)}catch(n){}return o}t();t();var Tc=e=>{let o=e!=null?e:"";return mt(o)?Kr.TransactionPayload.fromEncoded(o):new Kr.TransactionPayload(o)};t();A();var dt=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ur).some(n=>e.startsWith(n)):!1;function Fo(e){var r,c,p;let o=g({},e);dt({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new Se.Transaction(g(g(w(g(w(g({value:o.value.valueOf(),data:Tc(o.data),nonce:o.nonce.valueOf(),receiver:new Se.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Se.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Gt,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Vt,chainID:o.chainID.valueOf(),version:new Se.TransactionVersion((p=o.version)!=null?p:Bi)}),o.options?{options:new Se.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Se.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();A();t();t();t();var bg=require("@multiversx/sdk-core/out");t();A();t();var lt=require("@multiversx/sdk-core");M();t();var hc=require("@multiversx/sdk-core");function Sg(e){try{let o=new hc.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Bo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Sg(e)}var wg=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function xc(e,o,n=""){if(!Bo(e))return!1;if(new lt.Address(e).isContractAddress())return!0;let p=yc({receiver:e,data:n});return p?new lt.Address(p).isContractAddress()||Ag(e,o,n):!1}var vg=e=>e.toLowerCase().match(/[0-9a-f]/g),Ig=e=>e.length%2===0;function Ag(e,o,n){let r=n==null?void 0:n.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=wg.includes(c),l=p.every(_=>vg(_)&&Ig(_));return m&&d&&l}function yc({receiver:e,data:o}){try{if(!o)return e;let n=mt(o)?lt.TransactionPayload.fromEncoded(o).toString():o,r=kg(n),c=n.split("@");return r>-1?c[r]:e}catch(n){console.log(n);return}}function kg(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}t();t();t();var Yr=require("@multiversx/sdk-core"),In=f(require("bignumber.js"));D();var Xr={tokenId:"",amount:""},bc=e=>e.split("@").map((p,m)=>[2,3].includes(m)?p:vn(p));function Zr(e){if(!e)return Xr;let o=e.startsWith("ESDTTransfer"),n=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),r=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(o){let[,c,p]=e.split("@");try{let m=a.Buffer.from(c,"hex").toString("ascii");if(!m)return Xr;let d=new In.default("0x"+p.replace("0x","")).toString(10);return{tokenId:m,amount:d}}catch(m){console.error("Error getting token from transaction data",m)}}if(n)try{let[,c,p,m,d]=bc(e);if([c,p,m,d].every(l=>Boolean(l))&&Bo(new Yr.Address(d).bech32()))return{tokenId:`${c}-${p}`,amount:new In.default(m,16).toString(10),collection:c,nonce:p,receiver:new Yr.Address(d).bech32()}}catch(c){}if(r)try{let[,c,p,m]=bc(e);if([c,p,m].every(d=>Boolean(d)))return{tokenId:`${c}-${p}`,amount:new In.default(m,16).toString(10),collection:c,nonce:p}}catch(c){}return Xr}t();t();t();var pe="accounts";var An="blocks",wc="code",vc="collections";var Ic="contracts";var Ac="identities";var kc="locked-accounts",Lc="logs",Cc="miniblocks";var kn="nfts",Pc="nodes",Jr="providers",Nc="roles",Qr="sc-results";var _o="tokens";var oe="transactions";var ie={shard:e=>`/${An}?shard=${e}`,receiverShard:e=>`/${oe}?receivershard=${e}`,senderShard:e=>`/${oe}?sendershard=${e}`,transactionDetails:e=>`/${oe}/${e}`,transactionDetailsScResults:e=>`/${oe}/${e}/${Qr}`,transactionDetailsLogs:e=>`/${oe}/${e}/${Lc}`,nodeDetails:e=>`/${Pc}/${e}`,accountDetails:e=>`/${pe}/${e}`,accountDetailsContractCode:e=>`/${pe}/${e}/${wc}`,accountDetailsTokens:e=>`/${pe}/${e}/${_o}`,accountDetailsNfts:e=>`/${pe}/${e}/${kn}`,accountDetailsScResults:e=>`/${pe}/${e}/${Qr}`,accountDetailsContracts:e=>`/${pe}/${e}/${Ic}`,identityDetails:e=>`/${Ac}/${e}`,tokenDetails:e=>`/${_o}/${e}`,tokenDetailsAccounts:e=>`/${_o}/${e}/${pe}`,tokenDetailsLockedAccounts:e=>`/${_o}/${e}/${kc}`,tokenDetailsRoles:e=>`/${_o}/${e}/${Nc}`,collectionDetails:e=>`/${vc}/${e}`,nftDetails:e=>`/${kn}/${e}`,providerDetails:e=>`/${Jr}/${e}`,providerDetailsTransactions:e=>`/${Jr}/${e}/${oe}`,miniblockDetails:e=>`/${Cc}/${e}`};t();var Ln=e=>{var o,n,r,c;if(e.action){let p=[(o=e.action.arguments)==null?void 0:o.token,(n=e.action.arguments)==null?void 0:n.token1,(r=e.action.arguments)==null?void 0:r.token2,(c=e.action.arguments)==null?void 0:c.transfers].filter(d=>d!=null);return[].concat(...p)}return[]};t();t();function Cn(e){var n,r;let o=e.receiver;return(r=(n=e.action)==null?void 0:n.arguments)!=null&&r.receiver&&(o=e.action.arguments.receiver),o}function Ec(e){let o=Cn(e);return e.receiver===o?e.receiverAssets:void 0}t();Y();var Dc=e=>{var r,c,p,m,d,l;let o="Transaction";return((r=e.action)==null?void 0:r.name)&&((c=e.action)==null?void 0:c.category)&&(((p=e.action)==null?void 0:p.category)==="esdtNft"&&((m=e.action)==null?void 0:m.name)==="transfer"?o="Transaction":e.action&&(o=e.action.name),(l=(d=e.action)==null?void 0:d.arguments)!=null&&l.functionName&&(o=e.action.arguments.functionName)),o};t();var Rc=!1;function Cg(e){Rc||(console.error(e),Rc=!0)}function qe({explorerAddress:e,to:o}){try{return new URL(o).href}catch(n){return o.startsWith("/")||(Cg(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}t();Y();function Oc(e,o,n){let r=e===o.sender,c=e===n,p=r&&c,m=(o==null?void 0:o.type)==="SmartContractResult";switch(!0){case m:return"Internal";case p:return"Self";case c:return"In";case r:default:return"Out"}}t();t();t();var Pg=f(require("bignumber.js"));A();t();var Bc=require("@multiversx/sdk-core"),ze=f(require("bignumber.js"));A();t();var Fc=f(require("bignumber.js")),_t=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let r=new Fc.default(n),c=o?0:-1;return r.toString(10)===n&&r.comparedTo(0)>=c};t();function Ee(e){return{if:function(o){return o?{then:n=>n instanceof Function?Ee(n(e)):Ee(n)}:{then:()=>Ee(e)}},then:o=>o instanceof Function?Ee(o(e)):Ee(o),valueOf:function(){return e}}}ze.default.config({ROUNDING_MODE:ze.default.ROUND_FLOOR});function me({input:e,decimals:o=$,digits:n=io,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!_t(e,!1))throw new Error("Invalid input");let m=new ze.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),Ee(d).then(()=>Bc.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let _=new ze.default(l);if(_.isZero())return ye;let T=_.toString(10),[y,v]=T.split("."),C=new ze.default(v||0),E=Ee(0).if(Boolean(v&&r)).then(()=>Math.max(v.length,n)).if(C.isZero()&&!r).then(0).if(Boolean(v&&!r)).then(()=>Math.min(v.length,n)).valueOf(),G=v&&n>=1&&n<=v.length&&C.isGreaterThan(0)&&new ze.default(v.substring(0,n)).isZero(),te=_.toFormat(E);return Ee(T).if(p).then(te).if(Boolean(G)).then(Ue=>{let ve=new ze.default(y).isZero(),[R,wo]=Ue.split("."),vo=new Array(n-1).fill(0),Zn=[...vo,0].join(""),Jn=[...vo,1].join("");return ve?c?`<${R}.${Jn}`:r?`${R}.${wo}`:R:`${R}.${Zn}`}).if(Boolean(!G&&v)).then(Ue=>{let[ve]=Ue.split("."),R=v.substring(0,E);if(r){let wo=n-R.length;if(wo>0){let vo=Array(wo).fill(0).join("");return R=`${R}${vo}`,`${ve}.${R}`}return Ue}return R?`${ve}.${R}`:ve}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}t();t();t();A();t();var ut=(r=>(r.NonFungibleESDT="NonFungibleESDT",r.SemiFungibleESDT="SemiFungibleESDT",r.MetaESDT="MetaESDT",r))(ut||{});t();t();t();A();t();A();t();var Ng=require("@multiversx/sdk-core");A();t();var gt=require("@multiversx/sdk-core"),Rg=f(require("bignumber.js"));A();t();t();var Eg=f(require("bignumber.js"));A();t();A();t();var ea={isEsdt:!1,isNft:!1,isEgld:!1};function oa(e){let o=e==null?void 0:e.split("-").length;return o===2?w(g({},ea),{isEsdt:!0}):o===3?w(g({},ea),{isNft:!0}):w(g({},ea),{isEgld:!0})}t();t();t();t();t();A();t();A();function Nn({token:e,noValue:o,showLastNonZeroDecimal:n}){var _;let r=!o&&e.value&&e.type!=="NonFungibleESDT",c=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let m="";r&&c&&(m=c?me({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:n}):Number(e.value).toLocaleString("en"));let d=ie.nftDetails(String(e.identifier)),l=e.ticker===e.collection&&(_=e.identifier)!=null?_:e.ticker;return{badgeText:p,tokenFormattedAmount:r?m:null,tokenExplorerLink:d,tokenLinkText:l,token:e,noValue:o,showLastNonZeroDecimal:n}}t();A();function En({token:e,noValue:o,showLastNonZeroDecimal:n}){var d;let r=Boolean(!o&&e.value),c=r?me({input:e.value,decimals:(d=e.decimals)!=null?d:$,digits:2,showLastNonZeroDecimal:n,addCommas:!0}):null,p=ie.tokenDetails(String(e.token)),m=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:c,showFormattedAmount:r,tokenLinkText:m,token:e,showLastNonZeroDecimal:n}}t();Y();var Wc=["reDelegateRewards","claimRewards","unBond"],Uc=["wrapEgld","unwrapEgld"],Gc=["unStake"],Vc=["unDelegate"];t();t();var Hc=e=>{let o=e.map(r=>{let{isNft:c}=oa(r.type);if(c){let{badgeText:T,tokenFormattedAmount:y,tokenLinkText:v}=Nn({token:r});return`${T!=null?`(${T}) `:""}${y} ${v}`}let{tokenFormattedAmount:p,tokenLinkText:m,token:d}=En({token:r}),l=d.collection?d.identifier:d.token;return`${p} ${m} (${l})`});return decodeURI(o.join("%0A"))};t();A();var se=e=>({egldValueData:{value:e,formattedValue:me({input:e}),decimals:$}});t();var qc=f(require("bignumber.js"));var $c=!1;function zc(e){var o;try{let r=wn(e.data).replace(`${(o=e.action)==null?void 0:o.name}@`,""),c=new qc.default(r,16);if(!c.isNaN())return se(c.toString(10))}catch(n){$c||(console.error(`Unable to extract value for txHash: ${e.txHash}`),$c=!0)}return se(e.value)}t();t();Y();var ta=e=>{var n,r;return(r=(n=e==null?void 0:e.operations)==null?void 0:n.filter(c=>Object.values(Tr).includes(c.type)))!=null?r:[]};var jc=!1,Kc=e=>{jc||(console.error(`Operations field missing for txHash: ${e}.
        Unable to compute value field.`),jc=!0)};function Xc(e){try{if(e.operations){let[o]=ta(e);return se(o==null?void 0:o.value)}else Kc(e.txHash)}catch(o){Kc(e.txHash)}return se(e.value)}t();var Zc=f(require("bignumber.js"));var Yc=!1;function Jc(e){var n,r,c,p,m;return new Zc.default((r=(n=e.action)==null?void 0:n.arguments)==null?void 0:r.value).isNaN()?(Yc||(console.error(`Unable to interpret ${(m=e.action)==null?void 0:m.name} data for txHash: ${e.txHash}`),Yc=!0),se(e.value)):se((p=(c=e.action)==null?void 0:c.arguments)==null?void 0:p.value)}var Qc=({transaction:e,hideMultipleBadge:o})=>{var n;if(e.action){if(Uc.includes(e.action.name))return se(e.value);if(Gc.includes(e.action.name))return zc(e);if(Wc.includes(e.action.name))return Xc(e);if(Vc.includes(e.action.name))return Jc(e);let r=Ln(e);if(r.length){let c=r[0],p=Object.values(ut).includes(c.type),d=!o&&r.length>1?Hc(r):"";if(p){let{badgeText:C,tokenFormattedAmount:E,tokenExplorerLink:G,tokenLinkText:te}=Nn({token:c});return{nftValueData:{badgeText:C,tokenFormattedAmount:E,tokenExplorerLink:G,tokenLinkText:te,transactionTokens:r,token:c,value:E!=null?c.value:null,decimals:E!=null?c.decimals:null,titleText:d}}}let{tokenExplorerLink:l,showFormattedAmount:_,tokenFormattedAmount:T,tokenLinkText:y,token:v}=En({token:c});return{tokenValueData:{tokenExplorerLink:l,showFormattedAmount:_,tokenFormattedAmount:T,tokenLinkText:y,transactionTokens:r,token:v,value:c.value,decimals:(n=c.decimals)!=null?n:$,titleText:d}}}}return se(e.value)};function ep({transaction:e,address:o,explorerAddress:n}){var G;let r=(G=e.tokenIdentifier)!=null?G:Zr(e.data).tokenId,c=Cn(e),p=Ec(e),m=Oc(o,e,c),d=Dc(e),l=Ln(e),_=qe({explorerAddress:n,to:ie.accountDetails(e.sender)}),T=qe({explorerAddress:n,to:ie.accountDetails(c)}),y=qe({explorerAddress:n,to:ie.senderShard(e.senderShard)}),v=qe({explorerAddress:n,to:ie.receiverShard(e.receiverShard)}),C=e.originalTxHash?`${e.originalTxHash}#${e.txHash}`:e.txHash,E=qe({explorerAddress:n,to:ie.transactionDetails(C)});return w(g({},e),{tokenIdentifier:r,receiver:c,receiverAssets:p,transactionDetails:{direction:m,method:d,transactionTokens:l,isContract:xc(e.sender)},links:{senderLink:_,receiverLink:T,senderShardLink:y,receiverShardLink:v,transactionLink:E}})}t();t();t();t();var Mg=f(require("bignumber.js"));M();t();t();t();t();D();t();var Wg=require("@multiversx/sdk-web-wallet-provider");A();t();var Fg=f(require("qs"));t();j();no();t();no();var WC={search:Ce()?window.location.search:"",removeParams:[]};t();t();t();z();t();Y();t();t();z();t();var Ug=f(require("linkifyjs"));t();A();t();var Gg=f(require("bignumber.js"));t();M();t();t();D();t();D();t();t();t();Y();t();Y();t();var Vg=f(require("bignumber.js"));A();Y();t();Y();t();var tp=require("react");M();t();t();Y();t();t();var Hg=require("@multiversx/sdk-core/out"),$g=f(require("bignumber.js"));Y();t();M();t();t();M();var PP=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var np=require("react");M();z();t();var zg=require("react");Y();var BP=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];co();t();var Dn=e=>e.transactions,Wo=b(Dn,e=>e.signedTransactions),jg=b(Dn,e=>e.signTransactionsError),rp=b(Dn,e=>e.signTransactionsCancelMessage),Rn=e=>o=>Object.entries(o).reduce((n,[r,c])=>(e(c.status)&&(n[r]=c),n),{}),ap=b(Wo,Rn(Do)),ip=b(Wo,Rn(Ro)),sp=b(Wo,Rn(Mo)),Kg=b(Wo,Rn(Fr)),cp=b(Dn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(g({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>Fo(n)))||[]})}),Xg=b(Wo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var De=()=>L(lo);M();co();t();t();var ho=f(require("react")),Yo=require("@fortawesome/free-solid-svg-icons"),ll=require("@fortawesome/react-fontawesome"),Ra=f(require("classnames"));t();t();t();var Yg=f(require("axios"));t();var Jg=f(require("axios"));Po();t();A();t();var Qg=f(require("axios"));t();var of=f(require("axios"));t();t();var tf=f(require("axios"));t();var nf=f(require("axios"));t();t();t();t();t();var mp=require("@lifeomic/axios-fetch"),ra=f(require("axios")),aa=(0,mp.buildAxiosFetch)(ra.default),ia=(e,o)=>x(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function rf(e,o,n){return x(this,null,function*(){try{let r=yield aa(e,g({method:"POST",body:o?JSON.stringify(o):void 0,headers:g({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return ia(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function af(e,o){return x(this,null,function*(){try{let n=yield aa(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return ia(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function sf(e,o,n){return x(this,null,function*(){try{let r=yield aa(e,g({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return ia(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Uo=ra.default.create();Uo.get=af;Uo.post=rf;Uo.patch=sf;t();t();var cf=f(require("axios"));t();var pf=f(require("swr"));t();t();t();t();t();Po();t();var lf=f(require("axios"));t();var uf=f(require("axios"));t();Po();t();Po();t();t();t();t();var ff=f(require("axios"));t();A();t();t();var Go=f(require("react")),On=require("@fortawesome/free-solid-svg-icons"),ma=require("@fortawesome/react-fontawesome"),up=f(require("classnames"));t();no();function Tf(e){let o=!1,n=document==null?void 0:document.createElement("textarea");n.value=e,n.style.position="fixed",document==null||document.body.appendChild(n),n.focus(),n.select();try{document==null||document.execCommand("copy"),o=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(n),o}function lp(e){return x(this,null,function*(){if(!Ce())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):o=Tf(e),o})}var xf=({text:e,className:o="dapp-copy-button",copyIcon:n=On.faCopy,successIcon:r=On.faCheck,styles:c})=>{let[p,m]=(0,Go.useState)({default:!0,success:!1});return Go.default.createElement("a",{href:"/#",onClick:l=>x(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let _=e&&e.trim();m({default:!1,success:yield lp(_)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,up.default)(c==null?void 0:c.copy,o)},p.default||!p.success?Go.default.createElement(ma.FontAwesomeIcon,{icon:n}):Go.default.createElement(ma.FontAwesomeIcon,{icon:r}))},gp=I(xf,{ssrStyles:()=>Promise.resolve().then(()=>(pa(),ca)),clientStyles:()=>(pa(),P(ca)).default});t();t();var _a=f(require("react")),Tp=require("@fortawesome/free-solid-svg-icons"),hp=require("@fortawesome/react-fontawesome"),xp=f(require("classnames"));t();var Vo=()=>L(ce);var bf=l=>{var _=l,{page:e,text:o,className:n="dapp-explorer-link",children:r,globalStyles:c,customExplorerIcon:p,styles:m}=_,d=Ie(_,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:T}}=Vo(),y=o!=null?o:_a.default.createElement(hp.FontAwesomeIcon,{icon:p!=null?p:Tp.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),v=qe({explorerAddress:String(T),to:e});return _a.default.createElement("a",g({href:v,target:"_blank",className:(0,xp.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,n),rel:"noreferrer"},d),r!=null?r:y)},je=I(bf,{ssrStyles:()=>Promise.resolve().then(()=>(la(),da)),clientStyles:()=>(la(),P(da)).default});t();t();var U=f(require("react")),pl=f(require("classnames"));A();t();t();var yp=require("react");t();N();t();t();t();t();t();t();t();t();var wf=require("@multiversx/sdk-extension-provider"),vf=require("@multiversx/sdk-hw-provider"),If=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Af=require("@multiversx/sdk-opera-provider"),kf=require("@multiversx/sdk-passkey-provider/out"),Lf=require("@multiversx/sdk-web-wallet-provider");A();Ge();t();var Ho=require("@multiversx/sdk-web-wallet-iframe-provider/out"),bp=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");D();t();var de=e=>`Unable to perform ${e}, Provider not initialized`,Fn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(de("getAccount"))}setAccount(o){throw new Error(de(`setAccount: ${o}`))}login(o){throw new Error(de(`login with options: ${o}`))}logout(o){throw new Error(de(`logout with options: ${o}`))}getAddress(){throw new Error(de("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(de(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(de(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(de(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(de(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(de(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(de(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Sp=new Fn;N();t();t();D();t();t();t();z();t();co();t();N();D();t();t();t();t();z();t();F();M();t();N();t();var Ip=require("@multiversx/sdk-core");M();j();t();co();t();N();D();t();N();M();t();t();t();M();t();Ut();t();t();t();t();var Nf=f(require("swr"));t();t();t();t();var Ap=require("react");t();t();var Ef=require("react"),Df=require("@multiversx/sdk-web-wallet-provider"),Rf=require("@multiversx/sdk-web-wallet-provider"),Mf=f(require("qs"));A();N();D();fr();z();var WM=W();t();var Jp=require("react"),xa=require("@multiversx/sdk-core");A();Cr();t();t();t();t();t();t();t();t();t();t();var Ff=require("@multiversx/sdk-opera-provider");t();var Bf=require("@multiversx/sdk-extension-provider");t();Ge();t();t();t();t();var pT=f(Kp());t();var _T=require("@multiversx/sdk-native-auth-client");t();var Zp=f(require("axios"));t();t();t();function Xp(e){return x(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var Yp=(e,o,n,r=0)=>x(void 0,null,function*(){try{return yield e(...n)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Xp(o.delay)),yield Yp(e,o,n,r+1)):null}}),Ta=(e,o={retries:5,delay:500})=>(...n)=>x(void 0,null,function*(){return yield Yp(e,o,n)});var mT=4;var C5=Ta((e,o,n)=>x(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield Zp.default.get(`${e}/${An}?from=${mT}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));t();t();qt();t();t();z();var W5={origin:W().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};t();var gT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();var fT=require("@multiversx/sdk-passkey-provider/out");A();z();t();t();t();var ST=require("react"),wT=require("@multiversx/sdk-hw-provider");t();F();M();t();it();Eo();No();j();t();t();var Gd=require("react"),Vd=require("@multiversx/sdk-core"),my=require("@multiversx/sdk-extension-provider"),dy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),ly=require("@multiversx/sdk-passkey-provider/out"),_y=f(Fd());A();t();t();t();t();t();t();t();t();t();var wt=f(require("react"));var SF=(0,wt.createContext)({}),wF=k.getState();t();var Wd=f(require("react"));t();var wa=f(require("react")),jx=f(require("axios"));t();t();Ge();t();t();var Qx=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),ey=require("@multiversx/sdk-webview-provider/out/WebviewProvider");F();t();F();N();M();t();t();N();t();j();t();N();M();t();t();var Xx=require("@multiversx/sdk-core"),Yx=f(require("bignumber.js"));A();t();var Zx=f(require("bignumber.js"));A();N();D();j();z();t();var Ud=require("react"),ry=require("@multiversx/sdk-extension-provider"),ay=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),iy=require("@multiversx/sdk-passkey-provider/out");Ge();N();t();N();M();it();z();t();he();N();t();t();var gy=require("react");t();t();D();co();t();var $n=require("react"),Hd=(e,o)=>{let[n,r]=(0,$n.useState)(e);return(0,$n.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),n};t();t();var Ty=require("react"),hy=require("@multiversx/sdk-extension-provider");he();F();D();t();Pe();j();j();t();t();Ge();M();t();var fy=require("react"),$d=require("@multiversx/sdk-core");N();t();var xy=require("react"),yy=require("@multiversx/sdk-opera-provider");he();F();D();Pe();j();z();t();var by=require("react");xr();he();Ge();F();N();D();Pe();z();t();var ky=require("react");he();N();t();t();br();t();t();var Sy=f(require("platform"));no();t();t();t();t();t();function qd(){return zr(k.getState())}t();t();tt();D();t();t();var wy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();it();Eo();t();t();t();N();var vy={};var zd=e=>vy[e];t();t();var Iy=f(require("axios"));j();t();t();var Ay=f(Gn());tt();var jd,Kd,Xd,_V=(Xd=(Kd=(jd=ao.safeWindow)==null?void 0:jd.location)==null?void 0:Kd.origin)==null?void 0:Xd.includes("localhost");t();z();t();t();var Oy=require("react");A();t();t();A();t();t();t();var Ly=f(require("bignumber.js"));t();t();t();var Xe=f(require("react")),tl=require("react"),nl=require("react"),La=f(require("classnames")),rl=require("react-dom");A();t();var Zd=f(require("react")),Jd=f(require("classnames"));var Py=({className:e,children:o,styles:n})=>Zd.default.createElement("div",{className:(0,Jd.default)(n==null?void 0:n.dappModalBody,e)},o),va=I(Py,{ssrStyles:()=>Promise.resolve().then(()=>(Me(),Re)),clientStyles:()=>(Me(),P(Re)).default});t();var Ia=f(require("react")),Qd=f(require("classnames"));var Ny=({visible:e,customFooter:o,className:n,footerText:r,styles:c})=>e?Ia.default.createElement("div",{className:(0,Qd.default)(c==null?void 0:c.dappModalFooter,n)},o!=null?o:Ia.default.createElement("div",null,r)):null,Aa=I(Ny,{ssrStyles:()=>Promise.resolve().then(()=>(Me(),Re)),clientStyles:()=>(Me(),P(Re)).default});t();var Xo=f(require("react")),el=require("@fortawesome/free-solid-svg-icons"),ol=require("@fortawesome/react-fontawesome"),It=f(require("classnames"));var Ey=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?n?Xo.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeader,r)},n):Xo.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeader,r)},Xo.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Xo.default.createElement("button",{onClick:m,className:(0,It.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Xo.default.createElement(ol.FontAwesomeIcon,{size:"lg",icon:el.faTimes}))):null,ka=I(Ey,{ssrStyles:()=>Promise.resolve().then(()=>(Me(),Re)),clientStyles:()=>(Me(),P(Re)).default});var Dy={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Ry=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=Dy,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[T,y]=(0,tl.useState)(!1);if((0,nl.useEffect)(()=>{y(!0)},[]),!l)return null;let{showHeader:v,showFooter:C,headerText:E,footerText:G,modalDialogClassName:te="dapp-modal-dialog",modalContentClassName:Qe="dapp-modal-dialog-content",modalHeaderClassName:Ue="dapp-modal-dialog-header",modalHeaderTextClassName:ve="dapp-modal-dialog-header-text",modalCloseButtonClassName:R="dapp-modal-dialog-close-button",modalBodyClassName:wo="dapp-modal-dialog-content-body",modalFooterClassName:vo="dapp-modal-dialog-footer",customModalHeader:Zn,customModalFooter:Jn}=c,zl=jl=>{jl.key==="Escape"&&r&&(m==null||m())};return Xe.default.createElement(Xe.default.Fragment,null,T&&(0,rl.createPortal)(Xe.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,La.default)(te,_==null?void 0:_.dappModal,n),"data-testid":e,onKeyDown:zl},Xe.default.createElement("div",{className:(0,La.default)(_==null?void 0:_.dappModalContent,Qe)},Xe.default.createElement(ka,{visible:v,headerText:E,customHeader:Zn,className:Ue,headerTextClassName:ve,closeButtonClassName:R,onHide:m}),Xe.default.createElement(va,{className:wo},o),Xe.default.createElement(Aa,{visible:C,customFooter:Jn,footerText:G,className:vo}))),d!=null?d:document==null?void 0:document.body))},My=I(Ry,{ssrStyles:()=>Promise.resolve().then(()=>(Me(),Re)),clientStyles:()=>(Me(),P(Re)).default});t();t();var al=require("react");t();t();var il=require("react"),By=require("@multiversx/sdk-hw-provider");he();F();N();D();Pe();t();var Fy=require("react");t();t();var Ca=require("react");F();N();D();Pe();z();t();var Uy=require("react"),Gy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");he();F();D();Pe();j();j();t();var Vy=require("react"),Hy=require("@multiversx/sdk-passkey-provider/out");he();F();D();Pe();j();j();t();t();var sl=require("react");t();var zy=require("react");t();var Pa=require("react"),qy=require("socket.io-client");N();t();t();t();var jy=require("react");M();t();t();t();var Ky=f(require("swr"));var Yy=({text:e,className:o="dapp-trim","data-testid":n="trim-text-component",color:r,styles:c})=>{let[p,m]=(0,U.useState)(0),[d,l]=(0,U.useState)(!1),_=(0,U.useRef)(document==null?void 0:document.createElement("span")),T=(0,U.useRef)(document==null?void 0:document.createElement("span")),y=Hd(p,300),v=()=>{if(_.current&&T.current){let G=T.current.offsetWidth-_.current.offsetWidth;l(G>1)}},C=()=>{m(p+1)};return(0,U.useEffect)(()=>(window==null||window.addEventListener("resize",C),()=>{window==null||window.removeEventListener("resize",C)})),(0,U.useEffect)(()=>{v()},[y]),U.default.createElement("span",{ref:_,className:(0,pl.default)(c==null?void 0:c.trim,r,o,{overflow:d}),"data-testid":n},U.default.createElement("span",{ref:T,className:c==null?void 0:c.hiddenTextRef},e),d?U.default.createElement(U.default.Fragment,null,U.default.createElement("span",{className:c==null?void 0:c.left},U.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),U.default.createElement("span",{className:c==null?void 0:c.ellipsis},Ui),U.default.createElement("span",{className:c==null?void 0:c.right},U.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):U.default.createElement("span",null,e))},ml=I(Yy,{ssrStyles:()=>Promise.resolve().then(()=>(Ea(),Na)),clientStyles:()=>(Ea(),P(Na)).default});var Jy={icon:Yo.faCheck},Da={icon:Yo.faTimes},Qy={icon:Yo.faCircleNotch},eb={pending:Qy,success:Jy,fail:Da,invalid:Da,timedOut:Da},ob=({className:e,hash:o,status:n,iconSrc:r,isTimedOut:c,globalStyles:p,styles:m})=>{var _;let d=n?eb[n]:null,l=(_=r==null?void 0:r.icon)!=null?_:d==null?void 0:d.icon;return ho.default.createElement("div",{className:(0,Ra.default)(m==null?void 0:m.container,e),key:o,"data-testid":"transactionDetailsToastBody"},!c&&l!=null&&ho.default.createElement(ll.FontAwesomeIcon,{icon:l,className:(0,Ra.default)(m==null?void 0:m.icon,{"fa-spin slow-spin":n==="pending"})}),ho.default.createElement("span",{className:m==null?void 0:m.trim},ho.default.createElement(ml,{text:o})),ho.default.createElement(gp,{text:o}),ho.default.createElement(je,{page:`/${oe}/${o}`,className:p==null?void 0:p.ml2}))},qn=I(ob,{ssrStyles:()=>Promise.resolve().then(()=>(Fe(),Oe)),clientStyles:()=>(Fe(),P(Oe)).default});var tb=({title:e,transactions:o,isTimedOut:n=!1,className:r="dapp-transaction-details",styles:c})=>{if(o==null)return null;let{address:p}=De(),m=(0,Ye.useMemo)(()=>{let l=o.filter(T=>!mn(re[T==null?void 0:T.status])).length,_=o.length;return _===1&&l===1?mn(re[o[0].status])?"Processing transaction":"Transaction processed":`${l} / ${_} transactions processed`},[o]),d=o.length===1&&o[0].sender!==p;return Ye.default.createElement(Ye.default.Fragment,null,e&&Ye.default.createElement("div",{className:c==null?void 0:c.title},e),!d&&Ye.default.createElement("div",{className:c==null?void 0:c.status},m),o.map(({hash:l,status:_})=>{let T={className:r,hash:l,status:re[_],isTimedOut:n};return Ye.default.createElement(qn,w(g({},T),{key:l}))}))},_l=I(tb,{ssrStyles:()=>Promise.resolve().then(()=>(Fe(),Oe)),clientStyles:()=>(Fe(),P(Oe)).default});var rb=({style:e,toastDataState:o,transactions:n,showCloseButton:r,onDeleteToast:c,toastTitle:p,isTimedOut:m,customElements:d={CustomCloseButton:$t,TransactionToastStatusIcon:gl.FontAwesomeIcon,TransactionDetails:_l},globalStyles:l,styles:_})=>{let T=d==null?void 0:d.TransactionDetails,y=d==null?void 0:d.TransactionToastStatusIcon,v=d==null?void 0:d.CustomCloseButton;return le.default.createElement("div",{className:e.content,"data-testid":"transactionToastContent"},le.default.createElement("div",{className:e.left},le.default.createElement("div",{className:(0,Ma.default)(e.icon,o.iconClassName)},y&&le.default.createElement(y,{size:"5x",icon:o.icon,className:e.svg}))),le.default.createElement("div",{className:e.right},le.default.createElement("div",{className:e.heading},le.default.createElement("h5",{className:(0,Ma.default)([l==null?void 0:l.h5,e.mb4]),"data-testid":"transactionToastTitle"},o.title),r&&v&&le.default.createElement(v,{className:_==null?void 0:_.close,onClick:c})),le.default.createElement("div",{className:e.footer},T&&le.default.createElement(T,{transactions:n,title:p,isTimedOut:m}))))},Pq=I(rb,{ssrStyles:()=>Promise.resolve().then(()=>(yo(),xo)),clientStyles:()=>(yo(),P(xo)).default});t();var Tl=f(require("react")),hl=f(require("classnames"));var ib=({className:e="dapp-transaction-toast-wrapper",children:o,id:n,styles:r})=>Tl.default.createElement("div",{id:n,className:(0,hl.default)(r==null?void 0:r.toasts,r==null?void 0:r.toastWrapper,e)},o),xl=I(ib,{ssrStyles:()=>Promise.resolve().then(()=>(So(),bo)),clientStyles:()=>(So(),P(bo)).default});var Zo=({CustomCloseButton:e,onDelete:o})=>{let{styles:n}=Wt({ssrImportCallback:()=>Promise.resolve().then(()=>(Fa(),Oa)),clientImportCallback:()=>(Fa(),P(Oa)).default});return(0,At.useMemo)(()=>e?At.default.createElement(e,{onClick:o}):At.default.createElement($t,{onClick:o,className:n==null?void 0:n.close}),[e,o,n])};t();function bl(e){var o;try{let n=e,r=Fo(w(g({},n),{chainID:(o=n.chainID)!=null?o:"D"}));return Boolean(r)}catch(n){return!1}}var cb=({onDelete:e,message:o,messageComponent:n,CustomCloseButton:r,className:c="dapp-custom-toast",toastId:p,styles:m})=>{let d=Zo({onDelete:e,CustomCloseButton:r});return zn.default.createElement("div",{id:p,className:(0,Sl.default)(m==null?void 0:m.toasts,m==null?void 0:m.toastWrapper,c)},zn.default.createElement(zn.default.Fragment,null,d,n||o))},pb=I(cb,{ssrStyles:()=>Promise.resolve().then(()=>(So(),bo)),clientStyles:()=>(So(),P(bo)).default});t();t();var we=f(require("react")),Hl=require("@fortawesome/free-solid-svg-icons"),$l=require("@fortawesome/react-fontawesome"),Ha=f(require("classnames"));t();t();var Dt=f(require("react"));t();t();var Et=f(require("react"));t();t();var _e=f(require("react")),Rl=require("@fortawesome/free-solid-svg-icons"),Ml=require("@fortawesome/react-fontawesome"),Ga=f(require("classnames"));A();t();t();var Ze=f(require("react")),vl=f(require("classnames"));A();var db=e=>{var n;let o=(n=e.styles)!=null?n:{};return Ze.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ze.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},lb=(e,o)=>{var C,E,G;let{value:n,showLastNonZeroDecimal:r=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:io,m=e.decimals!=null?e.decimals:$,d=(C=e.styles)!=null?C:{},l=(E=e.globalStyles)!=null?E:{},_=me({input:n,decimals:m,digits:p,showLastNonZeroDecimal:r,addCommas:!0}),T=_.split("."),y=T.length===1,v=_!==ye;if(p>0&&y&&v){let te="";for(let Qe=1;Qe<=p;Qe++)te=te+ye;T.push(te)}return Ze.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ze.default.createElement("span",{className:d["int-amount"],"data-testid":"formatAmountInt"},T[0]),T.length>1&&Ze.default.createElement("span",{className:d.decimals,"data-testid":"formatAmountDecimals"},".",T[1]),c&&Ze.default.createElement("span",{className:(0,vl.default)(d.symbol,e.token&&l.textMuted),"data-testid":"formatAmountSymbol"},` ${(G=e.token)!=null?G:o}`))},_b=e=>{let{value:o}=e;return _t(o)?lb(e,e.egldLabel||""):db(e)},ub=e=>{let o=e.egldLabel||qd(),n=w(g({},e),{egldLabel:o});return Ze.default.createElement(_b,g({},n))},Jo=I(ub,{ssrStyles:()=>Promise.resolve().then(()=>(Wa(),Ba)),clientStyles:()=>(Wa(),P(Ba)).default});t();t();t();var Ct=f(require("react")),jn=f(require("classnames"));var fb=({token:e,globalStyles:o,styles:n})=>e.collection?Ct.default.createElement(je,{page:ie.collectionDetails(e.collection),className:(0,jn.default)(n==null?void 0:n.transactionActionCollection)},Ct.default.createElement("div",{className:(0,jn.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter)},e.svgUrl&&Ct.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,jn.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1)}),Ct.default.createElement("span",null,e.ticker))):null,Al=I(fb,{ssrStyles:()=>Promise.resolve().then(()=>(Lt(),kt)),clientStyles:()=>(Lt(),P(kt)).default});t();var Be=f(require("react")),Qo=f(require("classnames"));A();t();var kl=f(require("react")),Ll=f(require("classnames"));var Tb=({text:e,className:o,"data-testid":n="nftBadge",globalStyles:r})=>kl.default.createElement("div",{"data-testid":n,className:(0,Ll.default)(r==null?void 0:r.badge,r==null?void 0:r.badgeSecondary,r==null?void 0:r.badgePill,r==null?void 0:r.fontWeightLight,o)},e),Cl=I(Tb,{});var hb=({badgeText:e,tokenFormattedAmount:o,tokenExplorerLink:n,tokenLinkText:r,token:c,showLastNonZeroDecimal:p,globalStyles:m,styles:d})=>{var l,_,T,y,v;return c.identifier?Be.default.createElement("div",{className:d==null?void 0:d.transactionActionNft},e!=null&&Be.default.createElement(Cl,{text:e,className:(0,Qo.default)(m==null?void 0:m.mr1,m==null?void 0:m.myAuto)}),o!=null&&Be.default.createElement("div",{className:(0,Qo.default)(m==null?void 0:m.mr1,{[(l=m==null?void 0:m.textTruncate)!=null?l:""]:c.svgUrl})},Be.default.createElement(Jo,{value:c.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:c.decimals,"data-testid":"nftFormattedAmount"})),Be.default.createElement(je,{page:n,"data-testid":"nftExplorerLink",className:(0,Qo.default)(d==null?void 0:d.explorer,{[(_=m==null?void 0:m.sideLink)!=null?_:""]:c.svgUrl,[(T=m==null?void 0:m.dFlex)!=null?T:""]:c.svgUrl,[(y=m==null?void 0:m.textTruncate)!=null?y:""]:!c.svgUrl})},Be.default.createElement("div",{className:d==null?void 0:d.data},c.svgUrl&&Be.default.createElement("img",{src:c.svgUrl,alt:c.name,className:(0,Qo.default)(m==null?void 0:m.sideIcon,m==null?void 0:m.mr1)}),Be.default.createElement("span",{className:(0,Qo.default)({[(v=d==null?void 0:d.truncate)!=null?v:""]:c.ticker===c.collection})},r)))):null},Pl=I(hb,{ssrStyles:()=>Promise.resolve().then(()=>(Lt(),kt)),clientStyles:()=>(Lt(),P(kt)).default});t();var We=f(require("react")),Kn=f(require("classnames"));A();var xb=({tokenExplorerLink:e,showFormattedAmount:o,tokenLinkText:n,token:r,showLastNonZeroDecimal:c,globalStyles:p})=>{var m,d;return r.token?We.default.createElement(We.default.Fragment,null,o&&We.default.createElement("div",{className:p==null?void 0:p.textTruncate},We.default.createElement(Jo,{value:r.value,digits:2,showLabel:!1,decimals:(m=r.decimals)!=null?m:$,showLastNonZeroDecimal:c,"data-testid":"tokenFormattedAmount"})),We.default.createElement(je,{page:e,"data-testid":"tokenExplorerLink",className:(0,Kn.default)(p==null?void 0:p.dFlex,{[(d=p==null?void 0:p.sideLink)!=null?d:""]:r.svgUrl})},We.default.createElement("div",{className:(0,Kn.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},r.svgUrl&&We.default.createElement("img",{src:r.svgUrl,alt:r.name,className:(0,Kn.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),We.default.createElement("span",null,n)))):null},Nl=I(xb,{});var Ua={Collection:Al,Nft:Pl,Token:Nl};var bb=({children:e,titleText:o,globalStyles:n})=>_e.default.createElement("div",{className:(0,Ga.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter),"data-testid":"transactionValue"},e,o&&_e.default.createElement(Ml.FontAwesomeIcon,{icon:Rl.faLayerGroup,"data-testid":"transactionValueIcon",className:(0,Ga.default)(n==null?void 0:n.ml2,n==null?void 0:n.textSecondary),title:o})),Dl=I(bb,{ssrStyles:()=>Promise.resolve().then(()=>(Nt(),Pt)),clientStyles:()=>(Nt(),P(Pt)).default}),Sb=({transaction:e,hideMultipleBadge:o,styles:n})=>{let{egldValueData:r,tokenValueData:c,nftValueData:p}=Qc({transaction:e,hideMultipleBadge:o});if(c)return _e.default.createElement("div",{className:n==null?void 0:n.transactionCell},_e.default.createElement(Dl,{titleText:c.titleText},_e.default.createElement(Ua.Token,g({},c))));if(p){let d=p.token.type==="MetaESDT"?null:p.badgeText;return _e.default.createElement("div",{className:n==null?void 0:n.transactionCell},_e.default.createElement(Dl,{titleText:p.titleText},_e.default.createElement(Ua.Nft,w(g({},p),{badgeText:d}))))}return r?_e.default.createElement("div",{className:n==null?void 0:n.transactionCell},_e.default.createElement(Jo,{value:r.value,digits:2,"data-testid":"transactionValue"})):null},Ol=I(Sb,{ssrStyles:()=>Promise.resolve().then(()=>(Nt(),Pt)),clientStyles:()=>(Nt(),P(Pt)).default});t();var Fl=f(require("react"));var wb=({children:e,styles:o})=>Fl.default.createElement("div",{className:o==null?void 0:o.footer},e),Je=I(wb,{ssrStyles:()=>Promise.resolve().then(()=>(yo(),xo)),clientStyles:()=>(yo(),P(xo)).default});var vb=e=>{var m;let{className:o,transaction:n}=e,{address:r}=De(),{network:{explorerAddress:c}}=Vo(),p=ep({transaction:n,address:r!=null?r:"",explorerAddress:c});return Et.default.createElement(Je,null,Et.default.createElement("div",{className:(m=e.styles)==null?void 0:m.status},Et.default.createElement(Ol,{transaction:p})),Et.default.createElement(qn,{className:o,hash:p.txHash,status:p.status}))},Bl=I(vb,{ssrStyles:()=>Promise.resolve().then(()=>(Fe(),Oe)),clientStyles:()=>(Fe(),P(Oe)).default});t();var Xn=f(require("react")),Wl=f(require("classnames"));var Ib=e=>{var c,p;let{className:o,message:n,status:r}=e;return Xn.default.createElement(Je,null,r&&Xn.default.createElement("div",{className:(c=e.styles)==null?void 0:c.status},r),Xn.default.createElement("div",{className:(0,Wl.default)((p=e.styles)==null?void 0:p.container,o)},n))},Ul=I(Ib,{ssrStyles:()=>Promise.resolve().then(()=>(Fe(),Oe)),clientStyles:()=>(Fe(),P(Oe)).default});t();var Va=f(require("react"));var Gl=e=>{let o=zd(e.toastId);return Va.default.createElement(Je,g({},e),o&&Va.default.createElement(o,null))};var Vl=e=>{let{transaction:o,message:n,component:r}=e;return o&&bl(o)?Dt.default.createElement(Bl,g({},e)):n?Dt.default.createElement(Ul,g({},e)):r!==void 0?Dt.default.createElement(Gl,g({},e)):Dt.default.createElement(Je,null)};var Ab=e=>{let{className:o="dapp-custom-toast",onDelete:n,icon:r=Hl.faInfo,iconClassName:c,title:p="",toastId:m,CustomCloseButton:d,globalStyles:l,styles:_}=e,T=Zo({onDelete:n,CustomCloseButton:d});return we.default.createElement(xl,{className:o,id:m},we.default.createElement("div",{className:_==null?void 0:_.content},we.default.createElement("div",{className:_==null?void 0:_.left},we.default.createElement("div",{className:(0,Ha.default)(_==null?void 0:_.icon,c)},r&&we.default.createElement($l.FontAwesomeIcon,{size:"5x",icon:r,className:_==null?void 0:_.svg}))),we.default.createElement("div",{className:_==null?void 0:_.right},we.default.createElement("div",{className:_==null?void 0:_.heading},we.default.createElement("h5",{className:(0,Ha.default)([l==null?void 0:l.h5,_==null?void 0:_.mb4])},p),T),we.default.createElement(Vl,g({},e)))))},kb=I(Ab,{ssrStyles:()=>Promise.resolve().then(()=>(yo(),xo)),clientStyles:()=>(yo(),P(xo)).default});t();var Yn=f(require("react")),ql=f(require("classnames"));var Lb=({onDelete:e,message:o,component:n,CustomCloseButton:r,className:c="dapp-custom-toast",toastId:p,styles:m})=>{let d=Zo({onDelete:e,CustomCloseButton:r});return Yn.default.createElement("div",{id:p,className:(0,ql.default)(m==null?void 0:m.toasts,m==null?void 0:m.toastWrapper,c)},Yn.default.createElement(Yn.default.Fragment,null,d,n?n():o))},Cb=I(Lb,{ssrStyles:()=>Promise.resolve().then(()=>(So(),bo)),clientStyles:()=>(So(),P(bo)).default});0&&(module.exports={CustomComponentToast,IconToast,SimpleToast});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
