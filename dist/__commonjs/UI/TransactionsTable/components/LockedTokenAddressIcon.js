"use strict";var Ca=Object.create;var ye=Object.defineProperty,Da=Object.defineProperties,Pa=Object.getOwnPropertyDescriptor,Oa=Object.getOwnPropertyDescriptors,Ma=Object.getOwnPropertyNames,Pe=Object.getOwnPropertySymbols,Fa=Object.getPrototypeOf,vo=Object.prototype.hasOwnProperty,Pn=Object.prototype.propertyIsEnumerable;var Dn=(e,o,n)=>o in e?ye(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,u=(e,o)=>{for(var n in o||(o={}))vo.call(o,n)&&Dn(e,n,o[n]);if(Pe)for(var n of Pe(o))Pn.call(o,n)&&Dn(e,n,o[n]);return e},b=(e,o)=>Da(e,Oa(o));var On=(e,o)=>{var n={};for(var r in e)vo.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Pe)for(var r of Pe(e))o.indexOf(r)<0&&Pn.call(e,r)&&(n[r]=e[r]);return n};var g=(e,o)=>()=>(e&&(o=e(e=0)),o);var Oe=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Q=(e,o)=>{for(var n in o)ye(e,n,{get:o[n],enumerable:!0})},Mn=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Ma(o))!vo.call(e,a)&&a!==n&&ye(e,a,{get:()=>o[a],enumerable:!(r=Pa(o,a))||r.enumerable});return e};var T=(e,o,n)=>(n=e!=null?Ca(Fa(e)):{},Mn(o||!e||!e.__esModule?ye(n,"default",{value:e,enumerable:!0}):n,e)),pe=e=>Mn(ye({},"__esModule",{value:!0}),e);var E=(e,o,n)=>new Promise((r,a)=>{var c=d=>{try{l(n.next(d))}catch(x){a(x)}},m=d=>{try{l(n.throw(d))}catch(x){a(x)}},l=d=>d.done?r(d.value):Promise.resolve(d.value).then(c,m);l((n=n.apply(e,o)).next())});var Un=Oe(Me=>{"use strict";t();Me.byteLength=Ua;Me.toByteArray=Va;Me.fromByteArray=Ha;var F=[],D=[],Ba=typeof Uint8Array!="undefined"?Uint8Array:Array,Ao="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(oe=0,Fn=Ao.length;oe<Fn;++oe)F[oe]=Ao[oe],D[Ao.charCodeAt(oe)]=oe;var oe,Fn;D["-".charCodeAt(0)]=62;D["_".charCodeAt(0)]=63;function Bn(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function Ua(e){var o=Bn(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Wa(e,o,n){return(o+n)*3/4-n}function Va(e){var o,n=Bn(e),r=n[0],a=n[1],c=new Ba(Wa(e,r,a)),m=0,l=a>0?r-4:r,d;for(d=0;d<l;d+=4)o=D[e.charCodeAt(d)]<<18|D[e.charCodeAt(d+1)]<<12|D[e.charCodeAt(d+2)]<<6|D[e.charCodeAt(d+3)],c[m++]=o>>16&255,c[m++]=o>>8&255,c[m++]=o&255;return a===2&&(o=D[e.charCodeAt(d)]<<2|D[e.charCodeAt(d+1)]>>4,c[m++]=o&255),a===1&&(o=D[e.charCodeAt(d)]<<10|D[e.charCodeAt(d+1)]<<4|D[e.charCodeAt(d+2)]>>2,c[m++]=o>>8&255,c[m++]=o&255),c}function Ga(e){return F[e>>18&63]+F[e>>12&63]+F[e>>6&63]+F[e&63]}function $a(e,o,n){for(var r,a=[],c=o;c<n;c+=3)r=(e[c]<<16&16711680)+(e[c+1]<<8&65280)+(e[c+2]&255),a.push(Ga(r));return a.join("")}function Ha(e){for(var o,n=e.length,r=n%3,a=[],c=16383,m=0,l=n-r;m<l;m+=c)a.push($a(e,m,m+c>l?l:m+c));return r===1?(o=e[n-1],a.push(F[o>>2]+F[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],a.push(F[o>>10]+F[o>>4&63]+F[o<<2&63]+"=")),a.join("")}});var Wn=Oe(Io=>{t();Io.read=function(e,o,n,r,a){var c,m,l=a*8-r-1,d=(1<<l)-1,x=d>>1,y=-7,h=n?a-1:0,A=n?-1:1,v=e[o+h];for(h+=A,c=v&(1<<-y)-1,v>>=-y,y+=l;y>0;c=c*256+e[o+h],h+=A,y-=8);for(m=c&(1<<-y)-1,c>>=-y,y+=r;y>0;m=m*256+e[o+h],h+=A,y-=8);if(c===0)c=1-x;else{if(c===d)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,r),c=c-x}return(v?-1:1)*m*Math.pow(2,c-r)};Io.write=function(e,o,n,r,a,c){var m,l,d,x=c*8-a-1,y=(1<<x)-1,h=y>>1,A=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=r?0:c-1,C=r?1:-1,De=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(l=isNaN(o)?1:0,m=y):(m=Math.floor(Math.log(o)/Math.LN2),o*(d=Math.pow(2,-m))<1&&(m--,d*=2),m+h>=1?o+=A/d:o+=A*Math.pow(2,1-h),o*d>=2&&(m++,d/=2),m+h>=y?(l=0,m=y):m+h>=1?(l=(o*d-1)*Math.pow(2,a),m=m+h):(l=o*Math.pow(2,h-1)*Math.pow(2,a),m=0));a>=8;e[n+v]=l&255,v+=C,l/=256,a-=8);for(m=m<<a|l,x+=a;x>0;e[n+v]=m&255,v+=C,m/=256,x-=8);e[n+v-C]|=De*128}});var Qn=Oe(se=>{"use strict";t();var Eo=Un(),ce=Wn(),Vn=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;se.Buffer=_;se.SlowBuffer=Ya;se.INSPECT_MAX_BYTES=50;var Fe=2147483647;se.kMaxLength=Fe;_.TYPED_ARRAY_SUPPORT=ja();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ja(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function z(e){if(e>Fe)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Co(e)}return Hn(e,o,n)}_.poolSize=8192;function Hn(e,o,n){if(typeof e=="string")return qa(e,o);if(ArrayBuffer.isView(e))return Ka(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(B(e,ArrayBuffer)||e&&B(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(B(e,SharedArrayBuffer)||e&&B(e.buffer,SharedArrayBuffer)))return No(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return _.from(r,o,n);var a=Xa(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,n){return Hn(e,o,n)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function jn(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function za(e,o,n){return jn(e),e<=0?z(e):o!==void 0?typeof n=="string"?z(e).fill(o,n):z(e).fill(o):z(e)}_.alloc=function(e,o,n){return za(e,o,n)};function Co(e){return jn(e),z(e<0?0:Do(e)|0)}_.allocUnsafe=function(e){return Co(e)};_.allocUnsafeSlow=function(e){return Co(e)};function qa(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=zn(e,o)|0,r=z(n),a=r.write(e,o);return a!==n&&(r=r.slice(0,a)),r}function Lo(e){for(var o=e.length<0?0:Do(e.length)|0,n=z(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function Ka(e){if(B(e,Uint8Array)){var o=new Uint8Array(e);return No(o.buffer,o.byteOffset,o.byteLength)}return Lo(e)}function No(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,_.prototype),r}function Xa(e){if(_.isBuffer(e)){var o=Do(e.length)|0,n=z(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||Po(e.length)?z(0):Lo(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Lo(e.data)}function Do(e){if(e>=Fe)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Fe.toString(16)+" bytes");return e|0}function Ya(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,n){if(B(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),B(n,Uint8Array)&&(n=_.from(n,n.offset,n.byteLength)),!_.isBuffer(o)||!_.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,a=n.length,c=0,m=Math.min(r,a);c<m;++c)if(o[c]!==n[c]){r=o[c],a=n[c];break}return r<a?-1:a<r?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var a=_.allocUnsafe(n),c=0;for(r=0;r<o.length;++r){var m=o[r];if(B(m,Uint8Array))c+m.length>a.length?_.from(m).copy(a,c):Uint8Array.prototype.set.call(a,m,c);else if(_.isBuffer(m))m.copy(a,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=m.length}return a};function zn(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||B(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ro(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Jn(e).length;default:if(a)return r?-1:Ro(e).length;o=(""+o).toLowerCase(),a=!0}}_.byteLength=zn;function Za(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return pi(this,o,n);case"utf8":case"utf-8":return Kn(this,o,n);case"ascii":return ai(this,o,n);case"latin1":case"binary":return ii(this,o,n);case"base64":return ti(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ci(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function ne(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)ne(this,n,n+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)ne(this,n,n+3),ne(this,n+1,n+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)ne(this,n,n+7),ne(this,n+1,n+6),ne(this,n+2,n+5),ne(this,n+3,n+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Kn(this,0,o):Za.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",n=se.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};Vn&&(_.prototype[Vn]=_.prototype.inspect);_.prototype.compare=function(o,n,r,a,c){if(B(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),a===void 0&&(a=0),c===void 0&&(c=this.length),n<0||r>o.length||a<0||c>this.length)throw new RangeError("out of range index");if(a>=c&&n>=r)return 0;if(a>=c)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,a>>>=0,c>>>=0,this===o)return 0;for(var m=c-a,l=r-n,d=Math.min(m,l),x=this.slice(a,c),y=o.slice(n,r),h=0;h<d;++h)if(x[h]!==y[h]){m=x[h],l=y[h];break}return m<l?-1:l<m?1:0};function qn(e,o,n,r,a){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Po(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1;n=e.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof o=="string"&&(o=_.from(o,r)),_.isBuffer(o))return o.length===0?-1:Gn(e,o,n,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):Gn(e,[o],n,r,a);throw new TypeError("val must be string, number or Buffer")}function Gn(e,o,n,r,a){var c=1,m=e.length,l=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;c=2,m/=2,l/=2,n/=2}function d(v,C){return c===1?v[C]:v.readUInt16BE(C*c)}var x;if(a){var y=-1;for(x=n;x<m;x++)if(d(e,x)===d(o,y===-1?0:x-y)){if(y===-1&&(y=x),x-y+1===l)return y*c}else y!==-1&&(x-=x-y),y=-1}else for(n+l>m&&(n=m-l),x=n;x>=0;x--){for(var h=!0,A=0;A<l;A++)if(d(e,x+A)!==d(o,A)){h=!1;break}if(h)return x}return-1}_.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};_.prototype.indexOf=function(o,n,r){return qn(this,o,n,r,!0)};_.prototype.lastIndexOf=function(o,n,r){return qn(this,o,n,r,!1)};function Ja(e,o,n,r){n=Number(n)||0;var a=e.length-n;r?(r=Number(r),r>a&&(r=a)):r=a;var c=o.length;r>c/2&&(r=c/2);for(var m=0;m<r;++m){var l=parseInt(o.substr(m*2,2),16);if(Po(l))return m;e[n+m]=l}return m}function Qa(e,o,n,r){return Be(Ro(o,e.length-n),e,n,r)}function ei(e,o,n,r){return Be(_i(o),e,n,r)}function oi(e,o,n,r){return Be(Jn(o),e,n,r)}function ni(e,o,n,r){return Be(di(o,e.length-n),e,n,r)}_.prototype.write=function(o,n,r,a){if(n===void 0)a="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")a=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-n;if((r===void 0||r>c)&&(r=c),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var m=!1;;)switch(a){case"hex":return Ja(this,o,n,r);case"utf8":case"utf-8":return Qa(this,o,n,r);case"ascii":case"latin1":case"binary":return ei(this,o,n,r);case"base64":return oi(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ni(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ti(e,o,n){return o===0&&n===e.length?Eo.fromByteArray(e):Eo.fromByteArray(e.slice(o,n))}function Kn(e,o,n){n=Math.min(e.length,n);for(var r=[],a=o;a<n;){var c=e[a],m=null,l=c>239?4:c>223?3:c>191?2:1;if(a+l<=n){var d,x,y,h;switch(l){case 1:c<128&&(m=c);break;case 2:d=e[a+1],(d&192)===128&&(h=(c&31)<<6|d&63,h>127&&(m=h));break;case 3:d=e[a+1],x=e[a+2],(d&192)===128&&(x&192)===128&&(h=(c&15)<<12|(d&63)<<6|x&63,h>2047&&(h<55296||h>57343)&&(m=h));break;case 4:d=e[a+1],x=e[a+2],y=e[a+3],(d&192)===128&&(x&192)===128&&(y&192)===128&&(h=(c&15)<<18|(d&63)<<12|(x&63)<<6|y&63,h>65535&&h<1114112&&(m=h))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),a+=l}return ri(r)}var $n=4096;function ri(e){var o=e.length;if(o<=$n)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=$n));return n}function ai(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]&127);return r}function ii(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]);return r}function pi(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var a="",c=o;c<n;++c)a+=li[e[c]];return a}function ci(e,o,n){for(var r=e.slice(o,n),a="",c=0;c<r.length-1;c+=2)a+=String.fromCharCode(r[c]+r[c+1]*256);return a}_.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var a=this.subarray(o,n);return Object.setPrototypeOf(a,_.prototype),a};function I(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||I(o,n,this.length);for(var a=this[o],c=1,m=0;++m<n&&(c*=256);)a+=this[o+m]*c;return a};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||I(o,n,this.length);for(var a=this[o+--n],c=1;n>0&&(c*=256);)a+=this[o+--n]*c;return a};_.prototype.readUint8=_.prototype.readUInt8=function(o,n){return o=o>>>0,n||I(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||I(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||I(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||I(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||I(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||I(o,n,this.length);for(var a=this[o],c=1,m=0;++m<n&&(c*=256);)a+=this[o+m]*c;return c*=128,a>=c&&(a-=Math.pow(2,8*n)),a};_.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||I(o,n,this.length);for(var a=n,c=1,m=this[o+--a];a>0&&(c*=256);)m+=this[o+--a]*c;return c*=128,m>=c&&(m-=Math.pow(2,8*n)),m};_.prototype.readInt8=function(o,n){return o=o>>>0,n||I(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,n){o=o>>>0,n||I(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(o,n){o=o>>>0,n||I(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(o,n){return o=o>>>0,n||I(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,n){return o=o>>>0,n||I(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,n){return o=o>>>0,n||I(o,4,this.length),ce.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,n){return o=o>>>0,n||I(o,4,this.length),ce.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||I(o,8,this.length),ce.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||I(o,8,this.length),ce.read(this,o,!1,52,8)};function L(e,o,n,r,a,c){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<c)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var c=Math.pow(2,8*r)-1;L(this,o,n,r,c,0)}var m=1,l=0;for(this[n]=o&255;++l<r&&(m*=256);)this[n+l]=o/m&255;return n+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var c=Math.pow(2,8*r)-1;L(this,o,n,r,c,0)}var m=r-1,l=1;for(this[n+m]=o&255;--m>=0&&(l*=256);)this[n+m]=o/l&255;return n+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,1,255,0),this[n]=o&255,n+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};_.prototype.writeIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var c=Math.pow(2,8*r-1);L(this,o,n,r,c-1,-c)}var m=0,l=1,d=0;for(this[n]=o&255;++m<r&&(l*=256);)o<0&&d===0&&this[n+m-1]!==0&&(d=1),this[n+m]=(o/l>>0)-d&255;return n+r};_.prototype.writeIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var c=Math.pow(2,8*r-1);L(this,o,n,r,c-1,-c)}var m=r-1,l=1,d=0;for(this[n+m]=o&255;--m>=0&&(l*=256);)o<0&&d===0&&this[n+m+1]!==0&&(d=1),this[n+m]=(o/l>>0)-d&255;return n+r};_.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};_.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};_.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||L(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function Xn(e,o,n,r,a,c){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Yn(e,o,n,r,a){return o=+o,n=n>>>0,a||Xn(e,o,n,4,34028234663852886e22,-34028234663852886e22),ce.write(e,o,n,r,23,4),n+4}_.prototype.writeFloatLE=function(o,n,r){return Yn(this,o,n,!0,r)};_.prototype.writeFloatBE=function(o,n,r){return Yn(this,o,n,!1,r)};function Zn(e,o,n,r,a){return o=+o,n=n>>>0,a||Xn(e,o,n,8,17976931348623157e292,-17976931348623157e292),ce.write(e,o,n,r,52,8),n+8}_.prototype.writeDoubleLE=function(o,n,r){return Zn(this,o,n,!0,r)};_.prototype.writeDoubleBE=function(o,n,r){return Zn(this,o,n,!1,r)};_.prototype.copy=function(o,n,r,a){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),n>=o.length&&(n=o.length),n||(n=0),a>0&&a<r&&(a=r),a===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),o.length-n<a-r&&(a=o.length-n+r);var c=a-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,a):Uint8Array.prototype.set.call(o,this.subarray(r,a),n),c};_.prototype.fill=function(o,n,r,a){if(typeof o=="string"){if(typeof n=="string"?(a=n,n=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!_.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(o.length===1){var c=o.charCodeAt(0);(a==="utf8"&&c<128||a==="latin1")&&(o=c)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var l=_.isBuffer(o)?o:_.from(o,a),d=l.length;if(d===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=l[m%d]}return this};var si=/[^+/0-9A-Za-z-_]/g;function mi(e){if(e=e.split("=")[0],e=e.trim().replace(si,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Ro(e,o){o=o||1/0;for(var n,r=e.length,a=null,c=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!a){if(n>56319){(o-=3)>-1&&c.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&c.push(239,191,189);continue}a=n;continue}if(n<56320){(o-=3)>-1&&c.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(o-=3)>-1&&c.push(239,191,189);if(a=null,n<128){if((o-=1)<0)break;c.push(n)}else if(n<2048){if((o-=2)<0)break;c.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;c.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;c.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return c}function _i(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function di(e,o){for(var n,r,a,c=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,a=n%256,c.push(a),c.push(r);return c}function Jn(e){return Eo.toByteArray(mi(e))}function Be(e,o,n,r){for(var a=0;a<r&&!(a+n>=o.length||a>=e.length);++a)o[a+n]=e[a];return a}function B(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Po(e){return e!==e}var li=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,a=0;a<16;++a)o[r+a]=e[n]+e[a];return o}()});var rt=Oe((uc,tt)=>{t();var w=tt.exports={},U,W;function Oo(){throw new Error("setTimeout has not been defined")}function Mo(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?U=setTimeout:U=Oo}catch(e){U=Oo}try{typeof clearTimeout=="function"?W=clearTimeout:W=Mo}catch(e){W=Mo}})();function et(e){if(U===setTimeout)return setTimeout(e,0);if((U===Oo||!U)&&setTimeout)return U=setTimeout,setTimeout(e,0);try{return U(e,0)}catch(o){try{return U.call(null,e,0)}catch(n){return U.call(this,e,0)}}}function gi(e){if(W===clearTimeout)return clearTimeout(e);if((W===Mo||!W)&&clearTimeout)return W=clearTimeout,clearTimeout(e);try{return W(e)}catch(o){try{return W.call(null,e)}catch(n){return W.call(this,e)}}}var q=[],me=!1,te,Ue=-1;function ui(){!me||!te||(me=!1,te.length?q=te.concat(q):Ue=-1,q.length&&ot())}function ot(){if(!me){var e=et(ui);me=!0;for(var o=q.length;o;){for(te=q,q=[];++Ue<o;)te&&te[Ue].run();Ue=-1,o=q.length}te=null,me=!1,gi(e)}}w.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];q.push(new nt(e,o)),q.length===1&&!me&&et(ot)};function nt(e,o){this.fun=e,this.array=o}nt.prototype.run=function(){this.fun.apply(null,this.array)};w.title="browser";w.browser=!0;w.env={};w.argv=[];w.version="";w.versions={};function K(){}w.on=K;w.addListener=K;w.once=K;w.off=K;w.removeListener=K;w.removeAllListeners=K;w.emit=K;w.prependListener=K;w.prependOnceListener=K;w.listeners=function(e){return[]};w.binding=function(e){throw new Error("process.binding is not supported")};w.cwd=function(){return"/"};w.chdir=function(e){throw new Error("process.chdir is not supported")};w.umask=function(){return 0}});var i,p,fc,t=g(()=>{i=T(Qn()),p=T(rt()),fc=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object)});var _e,be=g(()=>{"use strict";t();_e=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Fo={};Q(Fo,{css:()=>it,default:()=>fi});var it,fi,Bo=g(()=>{"use strict";t();it=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(it));fi={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var lt=g(()=>{"use strict";t()});var gt=g(()=>{"use strict";t()});var ut=g(()=>{"use strict";t()});var jo,ft=g(()=>{"use strict";t();jo=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(jo||{})});var xt=g(()=>{"use strict";t()});var zo=g(()=>{"use strict";t()});var ht=g(()=>{"use strict";t()});var yt=g(()=>{"use strict";t()});var bt=g(()=>{"use strict";t()});var Tt=g(()=>{"use strict";t()});var Si,de,St=g(()=>{"use strict";t();Si=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),de=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var wt,es,kt,os,X=g(()=>{"use strict";t();St();wt=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(wt||{}),es=u(u({},de.WindowProviderRequestEnums),wt),kt=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(kt||{}),os=u(u({},de.WindowProviderResponseEnums),kt)});var vt=g(()=>{"use strict";t()});var At=g(()=>{"use strict";t()});var N=g(()=>{"use strict";t()});var It=g(()=>{"use strict";t()});var Et=g(()=>{"use strict";t()});var Lt=g(()=>{"use strict";t()});var O=g(()=>{"use strict";t();yt();bt();Tt();X();vt();At();N();It();Et();Lt()});var qo,Nt,hs,Rt,ys,Ct,bs,Ts,Ss,Dt=g(()=>{"use strict";t();O();qo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Nt,egldLabel:hs}=qo["devnet"],{chainId:Rt,egldLabel:ys}=qo["testnet"],{chainId:Ct,egldLabel:bs}=qo["mainnet"],Ts={["devnet"]:Nt,["testnet"]:Rt,["mainnet"]:Ct},Ss={[Nt]:"devnet",[Rt]:"testnet",[Ct]:"mainnet"}});var Ko=g(()=>{"use strict";t()});var G,Pt=g(()=>{"use strict";t();G=require("@multiversx/sdk-web-wallet-provider")});var Ve,Xo=g(()=>{"use strict";t();Ve=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ot,Mt,Yo,Es,Ls,Ft=g(()=>{"use strict";t();Xo();Yo=String((Mt=(Ot=Ve.safeWindow)==null?void 0:Ot.navigator)==null?void 0:Mt.userAgent),Es=/^((?!chrome|android).)*safari/i.test(Yo),Ls=/firefox/i.test(Yo)&&/windows/i.test(Yo)});var Zo,Jo,Bt,Ge,Ut,le,S=g(()=>{"use strict";t();lt();gt();ut();ft();xt();zo();ht();Dt();Ko();Pt();Ft();Zo=5e4,Jo=1e9,Bt=1,Ge="logout",Ut="login",le="0"});var $e,Qo=g(()=>{"use strict";t();$e=()=>Date.now()/1e3});var Wt=g(()=>{"use strict";t()});var Vt=g(()=>{"use strict";t()});var Gt=g(()=>{"use strict";t();Qo();Wt();Vt()});var en={};Q(en,{clear:()=>Ai,getItem:()=>ki,localStorageKeys:()=>ae,removeItem:()=>vi,setItem:()=>wi});var ae,He,wi,ki,vi,Ai,we=g(()=>{"use strict";t();Gt();ae={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},He=typeof localStorage!="undefined",wi=({key:e,data:o,expires:n})=>{!He||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},ki=e=>{if(!He)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:$e()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},vi=e=>{!He||localStorage.removeItem(String(e))},Ai=()=>{!He||localStorage.clear()}});var on={};Q(on,{clear:()=>zt,getItem:()=>Ht,removeItem:()=>jt,setItem:()=>$t,storage:()=>Ii});var $t,Ht,jt,zt,Ii,qt=g(()=>{"use strict";t();$t=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Ht=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},jt=e=>sessionStorage.removeItem(String(e)),zt=()=>sessionStorage.clear(),Ii={setItem:$t,getItem:Ht,removeItem:jt,clear:zt}});var ge,je=g(()=>{"use strict";t();we();qt();ge={session:on,local:en}});var nn,k,ze,M=g(()=>{"use strict";t();nn=require("@reduxjs/toolkit");S();k=(0,nn.createAction)(Ge),ze=(0,nn.createAction)(Ut,e=>({payload:e}))});var rn,Kt,Xt,qe,tn,Yt,Zt,im,Jt,pm,cm,sm,mm,_m,dm,lm,gm,Ke,Xe=g(()=>{"use strict";t();rn=require("@multiversx/sdk-core"),Kt=require("@reduxjs/toolkit"),Xt=require("redux-persist");S();je();we();M();qe={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:le},tn={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":qe},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Yt=(0,Kt.createSlice)({name:"accountInfoSlice",initialState:tn,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new rn.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:qe},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(k,()=>(ge.local.removeItem(ae.loginExpiresAt),tn)),e.addCase(ze,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new rn.Address(r).hex()}),e.addCase(Xt.REHYDRATE,(o,n)=>{var x;if(!((x=n.payload)!=null&&x.account))return;let{account:r}=n.payload,{address:a,shard:c,accounts:m,publicKey:l}=r;o.address=a,o.shard=c;let d=m&&a in m;o.accounts=d?m:tn.accounts,o.publicKey=l})}}),{setAccount:Zt,setAddress:im,setAccountNonce:Jt,setAccountShard:pm,setLedgerAccount:cm,updateLedgerAccount:sm,setWalletConnectAccount:mm,setIsAccountLoading:_m,setAccountLoadingError:dm,setWebsocketEvent:lm,setWebsocketBatchEvent:gm}=Yt.actions,Ke=Yt.reducer});function ke(){return new Date().setHours(new Date().getHours()+24)}function ve(e){ge.local.setItem({key:ae.loginExpiresAt,data:e,expires:e})}var an=g(()=>{"use strict";t();je();we()});var er,Qt,or,vm,Am,Im,Em,Lm,Nm,nr,Rm,Cm,Dm,Ye,Ze=g(()=>{"use strict";t();er=require("@reduxjs/toolkit");an();X();M();Qt={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},or=(0,er.createSlice)({name:"loginInfoSlice",initialState:Qt,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(k,()=>Qt),e.addCase(ze,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,ve(ke())})}}),{setLoginMethod:vm,setWalletConnectLogin:Am,setLedgerLogin:Im,setTokenLogin:Em,setTokenLoginSignature:Lm,setWalletLogin:Nm,invalidateLoginSession:nr,setLogoutRoute:Rm,setIsWalletConnectV2Initialized:Cm,setWebviewLogin:Dm}=or.actions,Ye=or.reducer});var rr,tr,ar,Fm,Bm,Um,Wm,Je,Qe=g(()=>{"use strict";t();rr=require("@reduxjs/toolkit");M();tr={},ar=(0,rr.createSlice)({name:"modalsSlice",initialState:tr,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(k,()=>tr)}}),{setTxSubmittedModal:Fm,setNotificationModal:Bm,clearTxSubmittedModal:Um,clearNotificationModal:Wm}=ar.actions,Je=ar.reducer});var ue=g(()=>{"use strict";t();be()});var ir=g(()=>{"use strict";t();ue()});var pr=g(()=>{"use strict";t();eo()});var cr=g(()=>{"use strict";t();Xo()});var eo=g(()=>{"use strict";t();ir();pr();ue();cr()});var sr=g(()=>{"use strict";t();eo()});var mr=g(()=>{"use strict";t();sr()});function _r(e){return e[Math.floor(Math.random()*e.length)]}var dr=g(()=>{"use strict";t()});var lr=g(()=>{"use strict";t();zo()});var gr=g(()=>{"use strict";t();mr();dr();lr()});var ur,fr,xr,pn,Li,hr,y_,b_,T_,oo,no=g(()=>{"use strict";t();ur=require("@reduxjs/toolkit"),fr=T(require("lodash.omit")),xr=require("redux-persist");Ko();M();gr();pn={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Li={network:pn},hr=(0,ur.createSlice)({name:"appConfig",initialState:Li,reducers:{initializeNetworkConfig:(e,o)=>{let n=_r(o.payload.walletConnectV2RelayAddresses),r=(0,fr.default)(o.payload,"walletConnectV2RelayAddresses");e.network=b(u(u({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(k,o=>{o.network.customWalletAddress=void 0}),e.addCase(xr.REHYDRATE,(o,n)=>{var a,c;if(!((c=(a=n.payload)==null?void 0:a.network)!=null&&c.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:y_,updateNetworkConfig:b_,setCustomWalletAddress:T_}=hr.actions,oo=hr.reducer});var yr,cn,br,I_,E_,L_,to,ro=g(()=>{"use strict";t();yr=require("@reduxjs/toolkit");O();M();cn={isSigning:!1,signedSessions:{}},br=(0,yr.createSlice)({name:"signedMessageInfoSliceState",initialState:cn,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:a}=o.payload;a&&(e.errorMessage=a),e.isSigning=r.status==="pending",e.signedSessions[n]=u(u({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>cn},extraReducers:e=>{e.addCase(k,()=>cn)}}),{setSignSession:I_,clearSignedMessageInfo:E_,setSignSessionState:L_}=br.actions,to=br.reducer});var Sr,wr,Tr,kr,M_,F_,B_,U_,ao,io=g(()=>{"use strict";t();Sr=require("@reduxjs/toolkit"),wr=require("redux-persist");O();Qo();M();Tr={customToasts:[],transactionToasts:[]},kr=(0,Sr.createSlice)({name:"toastsSlice",initialState:Tr,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(a=>a.toastId===n);if(r!==-1){e.customToasts[r]=b(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(b(u({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:$e(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(k,()=>Tr),e.addCase(wr.REHYDRATE,(o,n)=>{var a,c;let r=(c=(a=n.customToasts)==null?void 0:a.filter(m=>!("component"in m)))!=null?c:[];o.customToasts=r})}}),{addCustomToast:M_,removeCustomToast:F_,addTransactionToast:B_,removeTransactionToast:U_}=kr.actions,ao=kr.reducer});var vr,mn,_n,dn,Ni,sn,Ar,$_,H_,j_,po,co=g(()=>{"use strict";t();vr=require("@reduxjs/toolkit");M();mn="Transaction failed",_n="Transaction successful",dn="Processing transaction",Ni="Transaction submitted",sn={},Ar=(0,vr.createSlice)({name:"transactionsInfo",initialState:sn,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||mn,successMessage:(r==null?void 0:r.successMessage)||_n,processingMessage:(r==null?void 0:r.processingMessage)||dn,submittedMessage:(r==null?void 0:r.submittedMessage)||Ni,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>sn},extraReducers:e=>{e.addCase(k,()=>sn)}}),{clearTransactionsInfo:$_,setTransactionsDisplayInfo:H_,clearTransactionsInfoForSessionId:j_}=Ar.actions,po=Ar.reducer});function Ir(e){return e!=null&&(Vi(e)||zi(e))}function so(e){return e!=null&&(Gi(e)||qi(e))}function mo(e){return e!=null&&($i(e)||Ki(e))}function Er(e){return e!=null&&(Hi(e)||Xi(e))}function Lr(e){return e!=null&&ji(e)}function Vi(e){return e!=null&&Ci.includes(e)}function Gi(e){return e!=null&&Di.includes(e)}function $i(e){return e!=null&&Pi.includes(e)}function Hi(e){return e!=null&&Oi.includes(e)}function ji(e){return e!=null&&Mi.includes(e)}function zi(e){return e!=null&&Fi.includes(e)}function qi(e){return e!=null&&Bi.includes(e)}function Ki(e){return e!=null&&Ui.includes(e)}function Xi(e){return e!=null&&Wi.includes(e)}var Ci,Di,Pi,Oi,Mi,Fi,Bi,Ui,Wi,gn=g(()=>{"use strict";t();X();Ci=["sent"],Di=["success"],Pi=["fail","cancelled","timedOut"],Oi=["invalid"],Mi=["timedOut"],Fi=["pending"],Bi=["success"],Ui=["fail","invalid"],Wi=["not executed"]});var Nr,Rr,Ie,Yi,Cr,ed,od,nd,td,rd,ad,id,pd,cd,sd,md,_o,lo=g(()=>{"use strict";t();Nr=require("@reduxjs/toolkit"),Rr=require("redux-persist");X();gn();M();Ie={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Yi={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Cr=(0,Nr.createSlice)({name:"transactionsSlice",initialState:Ie,reducers:{moveTransactionsToSignedState:(e,o)=>{var d,x;let{sessionId:n,transactions:r,errorMessage:a,status:c,redirectRoute:m,customTransactionInformation:l}=o.payload;e.customTransactionInformationForSessionId[n]=u(u(u({},Yi),((d=e.signedTransactions[n])==null?void 0:d.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:c,errorMessage:a,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[n]),l!=null?l:{})},((x=e==null?void 0:e.transactionsToSign)==null?void 0:x.sessionId)===n&&(e.transactionsToSign=Ie.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:a,transactions:c}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,a!=null&&(e.signedTransactions[n].errorMessage=a),c!=null&&(e.signedTransactions[n].transactions=c))},updateSignedTransactionStatus:(e,o)=>{var x,y,h,A,v,C,De,Cn;let{sessionId:n,status:r,errorMessage:a,transactionHash:c,serverTransaction:m,inTransit:l}=o.payload,d=(y=(x=e.signedTransactions)==null?void 0:x[n])==null?void 0:y.transactions;if(d!=null){e.signedTransactions[n].transactions=d.map(j=>j.hash===c?b(u(u({},m!=null?m:{}),j),{status:r,errorMessage:a,inTransit:l}):j);let La=(A=(h=e.signedTransactions[n])==null?void 0:h.transactions)==null?void 0:A.every(j=>so(j.status)),Na=(C=(v=e.signedTransactions[n])==null?void 0:v.transactions)==null?void 0:C.some(j=>mo(j.status)),Ra=(Cn=(De=e.signedTransactions[n])==null?void 0:De.transactions)==null?void 0:Cn.every(j=>Er(j.status));La&&(e.signedTransactions[n].status="success"),Na&&(e.signedTransactions[n].status="fail"),Ra&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Ie.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Ie.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=u(u({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(k,()=>Ie),e.addCase(Rr.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:a}=n.payload.transactions,c=Object.entries(r).reduce((l,[d,x])=>{let y=new Date(d),h=new Date;return h.setHours(h.getHours()+5),h-y>0||(l[d]=x),l},{});a!=null&&(o.customTransactionInformationForSessionId=a),r!=null&&(o.signedTransactions=c)})}}),{updateSignedTransactionStatus:ed,updateSignedTransactions:od,setTransactionsToSign:nd,clearAllTransactionsToSign:td,clearAllSignedTransactions:rd,clearSignedTransaction:ad,clearTransactionToSign:id,setSignTransactionsError:pd,setSignTransactionsCancelMessage:cd,moveTransactionsToSignedState:sd,updateSignedTransactionsCustomTransactionInformation:md}=Cr.actions,_o=Cr.reducer});var Dr,un,Pr,gd,ud,fd,xd,go,uo=g(()=>{"use strict";t();Dr=require("@reduxjs/toolkit");M();un={},Pr=(0,Dr.createSlice)({name:"batchTransactionsSlice",initialState:un,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>un},extraReducers:e=>{e.addCase(k,()=>un)}}),{setBatchTransactions:gd,updateBatchTransactions:ud,clearBatchTransactions:fd,clearAllBatchTransactions:xd}=Pr.actions,go=Pr.reducer});var Mr,Or,Fr,Td,Br,fn=g(()=>{"use strict";t();Mr=require("@reduxjs/toolkit");M();Or={},Fr=(0,Mr.createSlice)({name:"dappConfigSlice",initialState:Or,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(k,()=>Or)}}),{setDappConfig:Td}=Fr.actions,Br=Fr.reducer});var fe=g(()=>{"use strict";t();Xe();Ze();Qe();no();ro();io();co();lo();uo();fn()});var xn=g(()=>{"use strict";t()});var Vr,ep,op,ie,ho=g(()=>{"use strict";t();Vr=require("@reduxjs/toolkit");xn();Xe();uo();fn();Ze();Qe();no();ro();io();co();lo();ep={["account"]:Ke,["dappConfig"]:Br,["loginInfo"]:Ye,["modals"]:Je,["networkConfig"]:oo,["signedMessageInfo"]:to,["toasts"]:ao,["transactionsInfo"]:po,["transactions"]:_o,["batchTransactions"]:go},op=(e={})=>(0,Vr.combineReducers)(u(u({},ep),e)),ie=op});var jr={};Q(jr,{default:()=>xp,sessionStorageReducers:()=>hn});function Y(e,o=[]){return{key:e,version:1,storage:$r.default,blacklist:o}}var R,Gr,$r,np,Ee,tp,rp,ap,ip,pp,cp,sp,mp,_p,dp,Hr,lp,hn,gp,up,fp,xp,zr=g(()=>{"use strict";t();R=require("redux-persist"),Gr=T(require("redux-persist/lib/storage")),$r=T(require("redux-persist/lib/storage/session"));ho();fe();Xe();uo();Ze();Qe();no();ro();io();co();lo();xn();np={persistReducersStorageType:"localStorage"},Ee={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},tp=Y(Ee["account"]),rp=Y(Ee["loginInfo"]),ap=Y(Ee["modals"]),ip=Y(Ee["networkConfig"]),pp={2:e=>b(u({},e),{networkConfig:pn})};cp=Y("sdk-dapp-transactionsInfo"),sp=Y("sdk-dapp-transactions",["transactionsToSign"]),mp=Y("sdk-dapp-batchTransactions",["batchTransactions"]),_p=Y("sdk-dapp-toasts"),dp=Y("sdk-dapp-signedMessageInfo"),Hr={key:"sdk-dapp-store",version:2,storage:Gr.default,whitelist:Object.keys(Ee),migrate:(0,R.createMigrate)(pp,{debug:!1})},lp=b(u({},Hr),{whitelist:[]}),hn={["toasts"]:(0,R.persistReducer)(_p,ao),["transactions"]:(0,R.persistReducer)(sp,_o),["transactionsInfo"]:(0,R.persistReducer)(cp,po),["batchTransactions"]:(0,R.persistReducer)(mp,go),["signedMessageInfo"]:(0,R.persistReducer)(dp,to)},gp=b(u({},hn),{["account"]:(0,R.persistReducer)(tp,Ke),["loginInfo"]:(0,R.persistReducer)(rp,Ye),["modals"]:(0,R.persistReducer)(ap,Je),["networkConfig"]:(0,R.persistReducer)(ip,oo)}),up=np.persistReducersStorageType==="localStorage",fp=up?(0,R.persistReducer)(Hr,ie(hn)):(0,R.persistReducer)(lp,ie(gp)),xp=fp});var qr={};Q(qr,{default:()=>hp});var hp,Kr=g(()=>{"use strict";t();ho();hp=ie()});var Xr={};Q(Xr,{default:()=>bp});var P,yp,bp,Yr=g(()=>{"use strict";t();P=require("redux-persist"),yp=[P.FLUSH,P.REHYDRATE,P.PAUSE,P.PERSIST,P.PURGE,P.REGISTER],bp=yp});var Qr={};Q(Qr,{default:()=>Jr});function Jr(e){return(0,Zr.persistStore)(e)}var Zr,ea=g(()=>{"use strict";t();Zr=require("redux-persist")});var mc={};Q(mc,{LockedTokenAddressIcon:()=>sc});module.exports=pe(mc);t();var va=T(require("react")),Aa=require("@fortawesome/free-solid-svg-icons/faLock"),Ia=require("@fortawesome/react-fontawesome"),Ea=T(require("classnames"));t();var ct=T(require("react"));t();var Te=T(require("react"));t();be();var at=()=>!_e();var xi=()=>E(void 0,null,function*(){return yield Promise.resolve().then(()=>(Bo(),Fo))}),hi=()=>(Bo(),pe(Fo)).default,Uo=at();function pt({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,a]=Te.default.useState(Uo?void 0:hi()),[c,m]=Te.default.useState(Uo||n==null?void 0:n()),l=()=>E(this,null,function*(){(e?e():xi()).then(d=>a(d.default)),o==null||o().then(d=>m(d.default))});return(0,Te.useEffect)(()=>{Uo&&l()},[]),{globalStyles:r,styles:c}}function st(e,o){return n=>{let{globalStyles:r,styles:a}=pt({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return ct.default.createElement(e,b(u({},n),{globalStyles:r!=null?r:{},styles:a!=null?a:{}}))}}t();var wa=T(require("swr"));t();var Wo="nfts";var Vo="tokens";t();t();var mt=require("@lifeomic/axios-fetch"),Go=T(require("axios")),$o=(0,mt.buildAxiosFetch)(Go.default),Ho=(e,o)=>E(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[a]=yield Promise.all([r]);return{data:a,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function yi(e,o,n){return E(this,null,function*(){try{let r=yield $o(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return Ho(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function bi(e,o){return E(this,null,function*(){try{let n=yield $o(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return Ho(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function Ti(e,o,n){return E(this,null,function*(){try{let r=yield $o(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Ho(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Se=Go.default.create();Se.get=bi;Se.post=yi;Se.patch=Ti;t();t();var _t=T(require("lodash.isequal")),We=require("reselect"),f=(0,We.createSelectorCreator)(We.defaultMemoize,_t.default);var V=e=>e.networkConfig,Cc=f(V,e=>e.network.chainId),Dc=f(V,e=>e.network.roundDuration),Pc=f(V,e=>e.network.walletConnectBridgeAddress),Oc=f(V,e=>e.network.walletConnectV2RelayAddress),Mc=f(V,e=>e.network.walletConnectV2ProjectId),Fc=f(V,e=>e.network.walletConnectV2Options),Bc=f(V,e=>e.network.walletConnectDeepLink),re=f(V,e=>e.network),Uc=f(re,e=>e.apiAddress),dt=f(re,e=>e.explorerAddress),Wc=f(re,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Vc=f(re,e=>e.xAliasAddress),Gc=f(re,e=>e.egldLabel);t();var yn=require("@reduxjs/toolkit"),ra=require("react-redux/lib/utils/Subscription");fe();t();var Ur=T(require("lodash.throttle"));S();fe();an();je();we();var Zi=[Ge],fo=!1,Ji=(0,Ur.default)(()=>{ve(ke())},5e3),Wr=e=>o=>n=>{if(Zi.includes(n.type))return o(n);let r=e.getState(),a=ge.local.getItem(ae.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(a==null)return ve(ke());let m=Date.now();return a-m<0&&!fo?setTimeout(()=>{fo=!0,e.dispatch(nr())},1e3):(fo&&(fo=!1),Ji()),o(n)};t();t();function xo(){return typeof sessionStorage!="undefined"}var oa=xo()?(zr(),pe(jr)).default:(Kr(),pe(qr)).default,na=xo()?(Yr(),pe(Xr)).default:[],ta=xo()?(ea(),pe(Qr)).default:e=>e;ho();var ee=(0,yn.configureStore)({reducer:oa,middleware:e=>e({serializableCheck:{ignoredActions:[...na,Jt.type,Zt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Wr)}),aa=(0,ra.createSubscription)(ee),yl=ta(ee),bl=(0,yn.configureStore)({reducer:ie});t();var yo={},bn={setItem:(e,o)=>E(void 0,null,function*(){try{yo[e]=JSON.stringify(o)}catch(n){console.error("tokenDataStorage unable to serialize",n)}}),getItem:e=>E(void 0,null,function*(){try{return JSON.parse(yo[e])}catch(o){console.error("tokenDataStorage unable to parse",o)}}),clear:()=>E(void 0,null,function*(){yo={}}),removeItem:e=>E(void 0,null,function*(){delete yo[e]})};function ia(e){return E(this,null,function*(){let{apiAddress:o,apiTimeout:n}=re(ee.getState()),r={baseURL:o,timeout:Number(n)},a=yield bn.getItem(e);if(a)return a;let c=yield Se.get(e,r);return yield bn.setItem(e,c.data),c.data})}t();t();var pa=require("react"),xe=require("react-redux");var Tp={store:ee,subscription:aa},Tn=(0,pa.createContext)(Tp),Nl=(0,xe.createStoreHook)(Tn),Rl=(0,xe.createDispatchHook)(Tn),ca=(0,xe.createSelectorHook)(Tn);t();t();fe();var $=e=>e.account,Sn=f($,e=>e.address),wn=f($,Sn,(e,o)=>o in e.accounts?e.accounts[o]:qe),Ol=f($,wn,(e,o)=>{let a=e,{accounts:n}=a,r=On(a,["accounts"]);return b(u({},r),{address:o.address,account:o})}),Ml=f(wn,e=>e.balance),Fl=f(wn,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Bl=f($,e=>e.shard),Ul=f($,e=>e.ledgerAccount),Wl=f($,e=>e.walletConnectAccount),Vl=f($,e=>e.isAccountLoading),Gl=f($,e=>e.accountLoadingError),$l=f($,e=>e.websocketEvent),Hl=f($,e=>e.websocketBatchEvent);t();var Sp=e=>e.dappConfig,ql=f(Sp,e=>e.shouldUseWebViewProvider);t();var Z=e=>e.loginInfo,Zl=f(Z,e=>e.loginMethod),Jl=f(Z,Sn,(e,o)=>Boolean(o)),Ql=f(Z,e=>e.walletConnectLogin),eg=f(Z,e=>e.ledgerLogin),og=f(Z,e=>e.walletLogin),ng=f(Z,e=>e.isLoginSessionInvalid),tg=f(Z,e=>e.tokenLogin),rg=f(Z,e=>e.logoutRoute),ag=f(Z,e=>e.isWalletConnectV2Initialized);t();var sa=e=>e.modals,cg=f(sa,e=>e.txSubmittedModal),sg=f(sa,e=>e.notificationModal);t();var bo=e=>e.signedMessageInfo,dg=f(bo,e=>e.isSigning),lg=f(bo,e=>e.errorMessage),gg=f(bo,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),ug=f(bo,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var ma=e=>e.toasts,hg=f(ma,e=>e.customToasts),yg=f(ma,e=>e.transactionToasts);t();fe();var _a={errorMessage:mn,successMessage:_n,processingMessage:dn},wp=e=>e.transactionsInfo,wg=f(wp,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||_a);t();t();var H=require("@multiversx/sdk-core");S();t();var vn=require("@multiversx/sdk-core/out");t();t();function kn(e){try{let o=atob(e),n=btoa(o),r=i.Buffer.from(e,"base64").toString(),a=i.Buffer.from(r).toString("base64"),c=e===n||n.startsWith(e),m=e===a||a.startsWith(e);if(c&&m)return!0}catch(o){return!1}return!1}t();t();t();t();var da=e=>{let o=e!=null?e:"";return kn(o)?vn.TransactionPayload.fromEncoded(o):new vn.TransactionPayload(o)};t();S();var To=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(jo).some(n=>e.startsWith(n)):!1;function An(e){var r,a,c;let o=u({},e);To({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new H.Transaction(u(u(b(u(b(u({value:o.value.valueOf(),data:da(o.data),nonce:o.nonce.valueOf(),receiver:new H.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new H.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Zo,gasPrice:(a=o.gasPrice.valueOf())!=null?a:Jo,chainID:o.chainID.valueOf(),version:new H.TransactionVersion((c=o.version)!=null?c:Bt)}),o.options?{options:new H.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new H.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(i.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(i.Buffer.from(o.signature,"hex")),n}t();t();S();t();t();t();var Ip=require("@multiversx/sdk-core/out");t();S();t();var ga=require("@multiversx/sdk-core");O();t();var la=require("@multiversx/sdk-core");function Ep(e){try{let o=new la.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function he(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Ep(e)}t();t();t();var Lp=require("@multiversx/sdk-core"),Np=T(require("bignumber.js"));X();t();t();t();t();t();t();N();t();t();N();t();t();t();var Mp=T(require("bignumber.js"));S();t();var Op=require("@multiversx/sdk-core"),In=T(require("bignumber.js"));S();t();var Dp=T(require("bignumber.js"));t();In.default.config({ROUNDING_MODE:In.default.ROUND_FLOOR});t();t();t();S();t();t();t();t();S();t();S();t();var Fp=require("@multiversx/sdk-core");S();t();var Ne=require("@multiversx/sdk-core"),Up=T(require("bignumber.js"));S();t();t();var Bp=T(require("bignumber.js"));S();t();S();t();var Ln={isEsdt:!1,isNft:!1,isEgld:!1};function Nn(e){let o=e==null?void 0:e.split("-").length;return o===2?b(u({},Ln),{isEsdt:!0}):o===3?b(u({},Ln),{isNft:!0}):b(u({},Ln),{isEgld:!0})}t();t();t();t();t();S();t();S();t();S();t();N();var Vp=["reDelegateRewards","claimRewards","unBond"],Gp=["wrapEgld","unwrapEgld"],$p=["unStake"],Hp=["unDelegate"];t();t();t();S();t();var qp=T(require("bignumber.js"));t();t();N();t();var Xp=T(require("bignumber.js"));t();t();t();t();var Zp=T(require("bignumber.js"));O();t();t();t();t();X();t();var ec=require("@multiversx/sdk-web-wallet-provider");S();t();var Qp=T(require("qs"));t();eo();be();t();be();var ay={search:_e()?window.location.search:"",removeParams:[]};t();t();t();ue();t();N();t();t();ue();t();var oc=T(require("linkifyjs"));t();S();t();var nc=T(require("bignumber.js"));t();O();t();t();X();t();X();t();t();t();N();t();N();t();var tc=T(require("bignumber.js"));S();N();t();N();t();var ba=require("react");O();t();t();N();t();t();var rc=require("@multiversx/sdk-core/out"),ac=T(require("bignumber.js"));N();t();O();t();t();O();var J0=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var Ta=require("react");O();ue();t();var pc=require("react");N();var ib=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];gn();t();var wo=e=>e.transactions,Ce=f(wo,e=>e.signedTransactions),Yb=f(wo,e=>e.signTransactionsError),Zb=f(wo,e=>e.signTransactionsCancelMessage),ko=e=>o=>Object.entries(o).reduce((n,[r,a])=>(e(a.status)&&(n[r]=a),n),{}),Jb=f(Ce,ko(Ir)),Qb=f(Ce,ko(so)),eT=f(Ce,ko(mo)),oT=f(Ce,ko(Lr)),nT=f(wo,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:b(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>An(n)))||[]})}),tT=f(Ce,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Sa=()=>ca(V);function ka({tokenId:e}){var h,A,v,C;let{network:o}=Sa(),{isNft:n}=Nn(e),r=e,a=n?Wo:Vo,{data:c,error:m,isLoading:l}=(0,wa.default)(Boolean(r)?`${o.apiAddress}/${a}/${r}`:null,ia);if(!r)return{tokenDecimals:Number(o.decimals),tokenLabel:"",tokenAvatar:""};let d=c?c==null?void 0:c.decimals:Number(o.decimals),x=c?c==null?void 0:c.name:"",y=c?(C=(h=c==null?void 0:c.assets)==null?void 0:h.svgUrl)!=null?C:(v=(A=c==null?void 0:c.media)==null?void 0:A[0])==null?void 0:v.thumbnailUrl:"";return{isLoading:l,tokenDecimals:d,tokenLabel:x,type:c==null?void 0:c.type,tokenAvatar:y,identifier:c==null?void 0:c.identifier,assets:c==null?void 0:c.assets,esdtPrice:c==null?void 0:c.price,ticker:c==null?void 0:c.ticker,name:c==null?void 0:c.name,error:m}}var cc=({address:e,tokenId:o,globalStyles:n})=>{var c,m,l;let r=ka({tokenId:o}),a=(c=r.assets)==null?void 0:c.lockedAccounts;if(a){let d=Object.keys(a).filter(y=>he(y)?y===e:he(a[y])?a[y]===e:!1),x=(l=(m=r.assets)==null?void 0:m.lockedAccounts)==null?void 0:l[d[0]];return x?va.default.createElement(Ia.FontAwesomeIcon,{title:x,icon:Aa.faLock,size:"xs",className:(0,Ea.default)(n==null?void 0:n.mr1,n==null?void 0:n.textSecondary)}):null}return null},sc=st(cc,{});0&&(module.exports={LockedTokenAddressIcon});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=LockedTokenAddressIcon.js.map
