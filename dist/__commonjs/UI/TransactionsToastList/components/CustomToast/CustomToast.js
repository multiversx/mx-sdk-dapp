"use strict";var L_=Object.create;var st=Object.defineProperty,C_=Object.defineProperties,P_=Object.getOwnPropertyDescriptor,N_=Object.getOwnPropertyDescriptors,E_=Object.getOwnPropertyNames,$t=Object.getOwnPropertySymbols,D_=Object.getPrototypeOf,lr=Object.prototype.hasOwnProperty,mi=Object.prototype.propertyIsEnumerable;var pi=(e,o,n)=>o in e?st(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,u=(e,o)=>{for(var n in o||(o={}))lr.call(o,n)&&pi(e,n,o[n]);if($t)for(var n of $t(o))mi.call(o,n)&&pi(e,n,o[n]);return e},v=(e,o)=>C_(e,N_(o));var Oe=(e,o)=>{var n={};for(var r in e)lr.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&$t)for(var r of $t(e))o.indexOf(r)<0&&mi.call(e,r)&&(n[r]=e[r]);return n};var x=(e,o)=>()=>(e&&(o=e(e=0)),o);var w=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),V=(e,o)=>{for(var n in o)st(e,n,{get:o[n],enumerable:!0})},di=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of E_(o))!lr.call(e,c)&&c!==n&&st(e,c,{get:()=>o[c],enumerable:!(r=P_(o,c))||r.enumerable});return e};var f=(e,o,n)=>(n=e!=null?L_(D_(e)):{},di(o||!e||!e.__esModule?st(n,"default",{value:e,enumerable:!0}):n,e)),E=e=>di(st({},"__esModule",{value:!0}),e);var y=(e,o,n)=>new Promise((r,c)=>{var p=l=>{try{d(n.next(l))}catch(_){c(_)}},m=l=>{try{d(n.throw(l))}catch(_){c(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var ui=w(qt=>{"use strict";t();qt.byteLength=M_;qt.toByteArray=F_;qt.fromByteArray=U_;var Ie=[],de=[],R_=typeof Uint8Array!="undefined"?Uint8Array:Array,_r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_o=0,li=_r.length;_o<li;++_o)Ie[_o]=_r[_o],de[_r.charCodeAt(_o)]=_o;var _o,li;de["-".charCodeAt(0)]=62;de["_".charCodeAt(0)]=63;function _i(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function M_(e){var o=_i(e),n=o[0],r=o[1];return(n+r)*3/4-r}function O_(e,o,n){return(o+n)*3/4-n}function F_(e){var o,n=_i(e),r=n[0],c=n[1],p=new R_(O_(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=de[e.charCodeAt(l)]<<18|de[e.charCodeAt(l+1)]<<12|de[e.charCodeAt(l+2)]<<6|de[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=de[e.charCodeAt(l)]<<2|de[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=de[e.charCodeAt(l)]<<10|de[e.charCodeAt(l+1)]<<4|de[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function B_(e){return Ie[e>>18&63]+Ie[e>>12&63]+Ie[e>>6&63]+Ie[e&63]}function W_(e,o,n){for(var r,c=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(B_(r));return c.join("")}function U_(e){for(var o,n=e.length,r=n%3,c=[],p=16383,m=0,d=n-r;m<d;m+=p)c.push(W_(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],c.push(Ie[o>>2]+Ie[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],c.push(Ie[o>>10]+Ie[o>>4&63]+Ie[o<<2&63]+"=")),c.join("")}});var gi=w(ur=>{t();ur.read=function(e,o,n,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,_=l>>1,T=-7,h=n?c-1:0,b=n?-1:1,L=e[o+h];for(h+=b,p=L&(1<<-T)-1,L>>=-T,T+=d;T>0;p=p*256+e[o+h],h+=b,T-=8);for(m=p&(1<<-T)-1,p>>=-T,T+=r;T>0;m=m*256+e[o+h],h+=b,T-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(L?-1:1)*m*Math.pow(2,p-r)};ur.write=function(e,o,n,r,c,p){var m,d,l,_=p*8-c-1,T=(1<<_)-1,h=T>>1,b=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=r?0:p-1,N=r?1:-1,D=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=T):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+h>=1?o+=b/l:o+=b*Math.pow(2,1-h),o*l>=2&&(m++,l/=2),m+h>=T?(d=0,m=T):m+h>=1?(d=(o*l-1)*Math.pow(2,c),m=m+h):(d=o*Math.pow(2,h-1)*Math.pow(2,c),m=0));c>=8;e[n+L]=d&255,L+=N,d/=256,c-=8);for(m=m<<c|d,_+=c;_>0;e[n+L]=m&255,L+=N,m/=256,_-=8);e[n+L-N]|=D*128}});var Li=w(Mo=>{"use strict";t();var gr=ui(),Ro=gi(),fi=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Mo.Buffer=g;Mo.SlowBuffer=j_;Mo.INSPECT_MAX_BYTES=50;var jt=2147483647;Mo.kMaxLength=jt;g.TYPED_ARRAY_SUPPORT=G_();!g.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function G_(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.buffer}});Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.byteOffset}});function Fe(e){if(e>jt)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,g.prototype),o}function g(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return xr(e)}return xi(e,o,n)}g.poolSize=8192;function xi(e,o,n){if(typeof e=="string")return H_(e,o);if(ArrayBuffer.isView(e))return $_(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ae(e,ArrayBuffer)||e&&Ae(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ae(e,SharedArrayBuffer)||e&&Ae(e.buffer,SharedArrayBuffer)))return Tr(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return g.from(r,o,n);var c=q_(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return g.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}g.from=function(e,o,n){return xi(e,o,n)};Object.setPrototypeOf(g.prototype,Uint8Array.prototype);Object.setPrototypeOf(g,Uint8Array);function yi(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function V_(e,o,n){return yi(e),e<=0?Fe(e):o!==void 0?typeof n=="string"?Fe(e).fill(o,n):Fe(e).fill(o):Fe(e)}g.alloc=function(e,o,n){return V_(e,o,n)};function xr(e){return yi(e),Fe(e<0?0:yr(e)|0)}g.allocUnsafe=function(e){return xr(e)};g.allocUnsafeSlow=function(e){return xr(e)};function H_(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!g.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=bi(e,o)|0,r=Fe(n),c=r.write(e,o);return c!==n&&(r=r.slice(0,c)),r}function fr(e){for(var o=e.length<0?0:yr(e.length)|0,n=Fe(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function $_(e){if(Ae(e,Uint8Array)){var o=new Uint8Array(e);return Tr(o.buffer,o.byteOffset,o.byteLength)}return fr(e)}function Tr(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,g.prototype),r}function q_(e){if(g.isBuffer(e)){var o=yr(e.length)|0,n=Fe(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||br(e.length)?Fe(0):fr(e);if(e.type==="Buffer"&&Array.isArray(e.data))return fr(e.data)}function yr(e){if(e>=jt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+jt.toString(16)+" bytes");return e|0}function j_(e){return+e!=e&&(e=0),g.alloc(+e)}g.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==g.prototype};g.compare=function(o,n){if(Ae(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),Ae(n,Uint8Array)&&(n=g.from(n,n.offset,n.byteLength)),!g.isBuffer(o)||!g.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,c=n.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==n[p]){r=o[p],c=n[p];break}return r<c?-1:c<r?1:0};g.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};g.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return g.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var c=g.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Ae(m,Uint8Array))p+m.length>c.length?g.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(g.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function bi(e,o){if(g.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ae(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return hr(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return ki(e).length;default:if(c)return r?-1:hr(e).length;o=(""+o).toLowerCase(),c=!0}}g.byteLength=bi;function z_(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return nu(this,o,n);case"utf8":case"utf-8":return wi(this,o,n);case"ascii":return ou(this,o,n);case"latin1":case"binary":return tu(this,o,n);case"base64":return Q_(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ru(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}g.prototype._isBuffer=!0;function uo(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}g.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)uo(this,n,n+1);return this};g.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)uo(this,n,n+3),uo(this,n+1,n+2);return this};g.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)uo(this,n,n+7),uo(this,n+1,n+6),uo(this,n+2,n+5),uo(this,n+3,n+4);return this};g.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?wi(this,0,o):z_.apply(this,arguments)};g.prototype.toLocaleString=g.prototype.toString;g.prototype.equals=function(o){if(!g.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:g.compare(this,o)===0};g.prototype.inspect=function(){var o="",n=Mo.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};fi&&(g.prototype[fi]=g.prototype.inspect);g.prototype.compare=function(o,n,r,c,p){if(Ae(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),!g.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),n<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&n>=r)return 0;if(c>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-n,l=Math.min(m,d),_=this.slice(c,p),T=o.slice(n,r),h=0;h<l;++h)if(_[h]!==T[h]){m=_[h],d=T[h];break}return m<d?-1:d<m?1:0};function Si(e,o,n,r,c){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,br(n)&&(n=c?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(c)return-1;n=e.length-1}else if(n<0)if(c)n=0;else return-1;if(typeof o=="string"&&(o=g.from(o,r)),g.isBuffer(o))return o.length===0?-1:Ti(e,o,n,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):Ti(e,[o],n,r,c);throw new TypeError("val must be string, number or Buffer")}function Ti(e,o,n,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(L,N){return p===1?L[N]:L.readUInt16BE(N*p)}var _;if(c){var T=-1;for(_=n;_<m;_++)if(l(e,_)===l(o,T===-1?0:_-T)){if(T===-1&&(T=_),_-T+1===d)return T*p}else T!==-1&&(_-=_-T),T=-1}else for(n+d>m&&(n=m-d),_=n;_>=0;_--){for(var h=!0,b=0;b<d;b++)if(l(e,_+b)!==l(o,b)){h=!1;break}if(h)return _}return-1}g.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};g.prototype.indexOf=function(o,n,r){return Si(this,o,n,r,!0)};g.prototype.lastIndexOf=function(o,n,r){return Si(this,o,n,r,!1)};function K_(e,o,n,r){n=Number(n)||0;var c=e.length-n;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(br(d))return m;e[n+m]=d}return m}function X_(e,o,n,r){return zt(hr(o,e.length-n),e,n,r)}function Y_(e,o,n,r){return zt(su(o),e,n,r)}function Z_(e,o,n,r){return zt(ki(o),e,n,r)}function J_(e,o,n,r){return zt(cu(o,e.length-n),e,n,r)}g.prototype.write=function(o,n,r,c){if(n===void 0)c="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")c=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return K_(this,o,n,r);case"utf8":case"utf-8":return X_(this,o,n,r);case"ascii":case"latin1":case"binary":return Y_(this,o,n,r);case"base64":return Z_(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return J_(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Q_(e,o,n){return o===0&&n===e.length?gr.fromByteArray(e):gr.fromByteArray(e.slice(o,n))}function wi(e,o,n){n=Math.min(e.length,n);for(var r=[],c=o;c<n;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=n){var l,_,T,h;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(h=(p&31)<<6|l&63,h>127&&(m=h));break;case 3:l=e[c+1],_=e[c+2],(l&192)===128&&(_&192)===128&&(h=(p&15)<<12|(l&63)<<6|_&63,h>2047&&(h<55296||h>57343)&&(m=h));break;case 4:l=e[c+1],_=e[c+2],T=e[c+3],(l&192)===128&&(_&192)===128&&(T&192)===128&&(h=(p&15)<<18|(l&63)<<12|(_&63)<<6|T&63,h>65535&&h<1114112&&(m=h))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return eu(r)}var hi=4096;function eu(e){var o=e.length;if(o<=hi)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=hi));return n}function ou(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]&127);return r}function tu(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]);return r}function nu(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var c="",p=o;p<n;++p)c+=pu[e[p]];return c}function ru(e,o,n){for(var r=e.slice(o,n),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}g.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var c=this.subarray(o,n);return Object.setPrototypeOf(c,g.prototype),c};function j(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||j(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return c};g.prototype.readUintBE=g.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||j(o,n,this.length);for(var c=this[o+--n],p=1;n>0&&(p*=256);)c+=this[o+--n]*p;return c};g.prototype.readUint8=g.prototype.readUInt8=function(o,n){return o=o>>>0,n||j(o,1,this.length),this[o]};g.prototype.readUint16LE=g.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||j(o,2,this.length),this[o]|this[o+1]<<8};g.prototype.readUint16BE=g.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||j(o,2,this.length),this[o]<<8|this[o+1]};g.prototype.readUint32LE=g.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||j(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};g.prototype.readUint32BE=g.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||j(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};g.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||j(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*n)),c};g.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||j(o,n,this.length);for(var c=n,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};g.prototype.readInt8=function(o,n){return o=o>>>0,n||j(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};g.prototype.readInt16LE=function(o,n){o=o>>>0,n||j(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};g.prototype.readInt16BE=function(o,n){o=o>>>0,n||j(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};g.prototype.readInt32LE=function(o,n){return o=o>>>0,n||j(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};g.prototype.readInt32BE=function(o,n){return o=o>>>0,n||j(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};g.prototype.readFloatLE=function(o,n){return o=o>>>0,n||j(o,4,this.length),Ro.read(this,o,!0,23,4)};g.prototype.readFloatBE=function(o,n){return o=o>>>0,n||j(o,4,this.length),Ro.read(this,o,!1,23,4)};g.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||j(o,8,this.length),Ro.read(this,o,!0,52,8)};g.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||j(o,8,this.length),Ro.read(this,o,!1,52,8)};function ee(e,o,n,r,c,p){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;ee(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};g.prototype.writeUintBE=g.prototype.writeUIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;ee(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};g.prototype.writeUint8=g.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,1,255,0),this[n]=o&255,n+1};g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};g.prototype.writeIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);ee(this,o,n,r,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};g.prototype.writeIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);ee(this,o,n,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};g.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};g.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};g.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};g.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};g.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||ee(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function vi(e,o,n,r,c,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ii(e,o,n,r,c){return o=+o,n=n>>>0,c||vi(e,o,n,4,34028234663852886e22,-34028234663852886e22),Ro.write(e,o,n,r,23,4),n+4}g.prototype.writeFloatLE=function(o,n,r){return Ii(this,o,n,!0,r)};g.prototype.writeFloatBE=function(o,n,r){return Ii(this,o,n,!1,r)};function Ai(e,o,n,r,c){return o=+o,n=n>>>0,c||vi(e,o,n,8,17976931348623157e292,-17976931348623157e292),Ro.write(e,o,n,r,52,8),n+8}g.prototype.writeDoubleLE=function(o,n,r){return Ai(this,o,n,!0,r)};g.prototype.writeDoubleBE=function(o,n,r){return Ai(this,o,n,!1,r)};g.prototype.copy=function(o,n,r,c){if(!g.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),n>=o.length&&(n=o.length),n||(n=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-n<c-r&&(c=o.length-n+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),n),p};g.prototype.fill=function(o,n,r,c){if(typeof o=="string"){if(typeof n=="string"?(c=n,n=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!g.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=g.isBuffer(o)?o:g.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var au=/[^+/0-9A-Za-z-_]/g;function iu(e){if(e=e.split("=")[0],e=e.trim().replace(au,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function hr(e,o){o=o||1/0;for(var n,r=e.length,c=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!c){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),c=n;continue}n=(c-55296<<10|n-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function su(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function cu(e,o){for(var n,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,c=n%256,p.push(c),p.push(r);return p}function ki(e){return gr.toByteArray(iu(e))}function zt(e,o,n,r){for(var c=0;c<r&&!(c+n>=o.length||c>=e.length);++c)o[c+n]=e[c];return c}function Ae(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function br(e){return e!==e}var pu=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,c=0;c<16;++c)o[r+c]=e[n]+e[c];return o}()});var Di=w((gS,Ei)=>{t();var U=Ei.exports={},ke,Le;function Sr(){throw new Error("setTimeout has not been defined")}function wr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ke=setTimeout:ke=Sr}catch(e){ke=Sr}try{typeof clearTimeout=="function"?Le=clearTimeout:Le=wr}catch(e){Le=wr}})();function Ci(e){if(ke===setTimeout)return setTimeout(e,0);if((ke===Sr||!ke)&&setTimeout)return ke=setTimeout,setTimeout(e,0);try{return ke(e,0)}catch(o){try{return ke.call(null,e,0)}catch(n){return ke.call(this,e,0)}}}function mu(e){if(Le===clearTimeout)return clearTimeout(e);if((Le===wr||!Le)&&clearTimeout)return Le=clearTimeout,clearTimeout(e);try{return Le(e)}catch(o){try{return Le.call(null,e)}catch(n){return Le.call(this,e)}}}var Be=[],Oo=!1,go,Kt=-1;function du(){!Oo||!go||(Oo=!1,go.length?Be=go.concat(Be):Kt=-1,Be.length&&Pi())}function Pi(){if(!Oo){var e=Ci(du);Oo=!0;for(var o=Be.length;o;){for(go=Be,Be=[];++Kt<o;)go&&go[Kt].run();Kt=-1,o=Be.length}go=null,Oo=!1,mu(e)}}U.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];Be.push(new Ni(e,o)),Be.length===1&&!Oo&&Ci(Pi)};function Ni(e,o){this.fun=e,this.array=o}Ni.prototype.run=function(){this.fun.apply(null,this.array)};U.title="browser";U.browser=!0;U.env={};U.argv=[];U.version="";U.versions={};function We(){}U.on=We;U.addListener=We;U.once=We;U.off=We;U.removeListener=We;U.removeAllListeners=We;U.emit=We;U.prependListener=We;U.prependOnceListener=We;U.listeners=function(e){return[]};U.binding=function(e){throw new Error("process.binding is not supported")};U.cwd=function(){return"/"};U.chdir=function(e){throw new Error("process.chdir is not supported")};U.umask=function(){return 0}});var a,s,lu,i,t=x(()=>{a=f(Li()),s=f(Di()),lu=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=lu});var vr=x(()=>{"use strict";t()});var Ri=x(()=>{"use strict";t()});var Mi=x(()=>{"use strict";t()});var fo,Fo,Ye=x(()=>{"use strict";t();fo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Fo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var le,re,Oi,yS,Fi,bS,M=x(()=>{"use strict";t();Ye();le=(d=>(d.pending="pending",d.fail="fail",d.invalid="invalid",d.success="success",d.executed="executed",d.notExecuted="not executed",d.rewardReverted="reward-reverted",d))(le||{}),re=(d=>(d.signed="signed",d.cancelled="cancelled",d.success="success",d.sent="sent",d.fail="fail",d.timedOut="timedOut",d.invalid="invalid",d))(re||{}),Oi=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(Oi||{}),yS=u(u({},Fo.WindowProviderRequestEnums),Oi),Fi=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Fi||{}),bS=u(u({},Fo.WindowProviderResponseEnums),Fi)});var Bi=x(()=>{"use strict";t()});var Wi=x(()=>{"use strict";t()});var Ir,oe=x(()=>{"use strict";t();Ir=(r=>(r.nft="nft",r.esdt="esdt",r.egld="egld",r))(Ir||{})});var Ui=x(()=>{"use strict";t()});var Gi=x(()=>{"use strict";t()});var Vi=x(()=>{"use strict";t()});var O=x(()=>{"use strict";t();vr();Ri();Mi();M();Bi();Wi();oe();Ui();Gi();Vi()});var Ue,To=x(()=>{"use strict";t();Ue=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Ar={};V(Ar,{css:()=>$i,default:()=>_u});var $i,_u,kr=x(()=>{"use strict";t();$i=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($i));_u={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ho,pt=x(()=>{"use strict";t();ho=()=>Date.now()/1e3});var ji,Cr=x(()=>{"use strict";t();ji=e=>new Date().setMilliseconds(new Date().getMilliseconds()+e)/1e3});var zi,Ki=x(()=>{"use strict";t();zi=e=>new Date().setSeconds(new Date().getSeconds()+e)});var Xt=x(()=>{"use strict";t();pt();Cr();Ki()});var Nr={};V(Nr,{clear:()=>bu,getItem:()=>xu,localStorageKeys:()=>Ze,removeItem:()=>yu,setItem:()=>hu});var Ze,Zt,hu,xu,yu,bu,Wo=x(()=>{"use strict";t();Xt();Ze={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Zt=typeof localStorage!="undefined",hu=({key:e,data:o,expires:n})=>{!Zt||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},xu=e=>{if(!Zt)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:ho()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},yu=e=>{!Zt||localStorage.removeItem(String(e))},bu=()=>{!Zt||localStorage.clear()}});var Er={};V(Er,{clear:()=>Qi,getItem:()=>Zi,removeItem:()=>Ji,setItem:()=>Yi,storage:()=>Su});var Yi,Zi,Ji,Qi,Su,es=x(()=>{"use strict";t();Yi=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Zi=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},Ji=e=>sessionStorage.removeItem(String(e)),Qi=()=>sessionStorage.clear(),Su={setItem:Yi,getItem:Zi,removeItem:Ji,clear:Qi}});var ae,xo=x(()=>{"use strict";t();Wo();es();ae={session:Er,local:Nr}});var Dr={};V(Dr,{css:()=>os,default:()=>wu});var os,wu,Rr=x(()=>{"use strict";t();os=`.dapp-core-component__progressStyles__progress {
  position: relative;
}
.dapp-core-component__progressStyles__progress .dapp-core-component__progressStyles__bar {
  position: absolute;
  pointer-events: none;
  left: -0.5rem;
  right: -0.5rem;
  bottom: -0.5rem;
  top: -0.5rem;
  background-color: #495057;
  opacity: 0.25;
  transition: width 0.6s ease;
  max-width: calc(100% + 1rem);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(os));wu={progress:"dapp-core-component__progressStyles__progress",bar:"dapp-core-component__progressStyles__bar"}});var rs=x(()=>{"use strict";t()});var Ce=x(()=>{"use strict";t()});var as=x(()=>{"use strict";t()});var Mr,is=x(()=>{"use strict";t();Mr=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(Mr||{})});var ss=x(()=>{"use strict";t()});var Or=x(()=>{"use strict";t()});var cs=x(()=>{"use strict";t()});var Uo,ps,h0,ms,x0,ds,y0,b0,Iu,Go=x(()=>{"use strict";t();O();Uo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ps,egldLabel:h0}=Uo["devnet"],{chainId:ms,egldLabel:x0}=Uo["testnet"],{chainId:ds,egldLabel:y0}=Uo["mainnet"],b0={["devnet"]:ps,["testnet"]:ms,["mainnet"]:ds},Iu={[ps]:"devnet",[ms]:"testnet",[ds]:"mainnet"}});var Jt=x(()=>{"use strict";t()});var Pe,ls=x(()=>{"use strict";t();Pe=require("@multiversx/sdk-web-wallet-provider")});var yo,dt=x(()=>{"use strict";t();yo=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var _s,us,Fr,k0,L0,Br=x(()=>{"use strict";t();dt();Fr=String((us=(_s=yo.safeWindow)==null?void 0:_s.navigator)==null?void 0:us.userAgent),k0=/^((?!chrome|android).)*safari/i.test(Fr),L0=/firefox/i.test(Fr)&&/windows/i.test(Fr)});var Qt,en,z,bo,gs,Wr,on,fs,Ne,Ts,k=x(()=>{"use strict";t();rs();Ce();as();is();ss();Or();cs();Go();Jt();ls();Br();Qt=5e4,en=1e9,z=18,bo=4,gs=1,Wr=4294967295,on="logout",fs="login",Ne="0",Ts="..."});var Gr,F,se,B=x(()=>{"use strict";t();Gr=require("@reduxjs/toolkit");k();F=(0,Gr.createAction)(on),se=(0,Gr.createAction)(fs,e=>({payload:e}))});var Hr,ys,bs,nn,Vr,Ss,rn,Au,$r,J0,ku,Lu,Q0,ew,ow,Cu,Pu,an,sn=x(()=>{"use strict";t();Hr=require("@multiversx/sdk-core"),ys=require("@reduxjs/toolkit"),bs=require("redux-persist");k();xo();Wo();B();nn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ne},Vr={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":nn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ss=(0,ys.createSlice)({name:"accountInfoSlice",initialState:Vr,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Hr.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:nn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(F,()=>(ae.local.removeItem(Ze.loginExpiresAt),Vr)),e.addCase(se,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new Hr.Address(r).hex()}),e.addCase(bs.REHYDRATE,(o,n)=>{var _;if(!((_=n.payload)!=null&&_.account))return;let{account:r}=n.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:Vr.accounts,o.publicKey=d})}}),{setAccount:rn,setAddress:Au,setAccountNonce:$r,setAccountShard:J0,setLedgerAccount:ku,updateLedgerAccount:Lu,setWalletConnectAccount:Q0,setIsAccountLoading:ew,setAccountLoadingError:ow,setWebsocketEvent:Cu,setWebsocketBatchEvent:Pu}=Ss.actions,an=Ss.reducer});function lt(){return new Date().setHours(new Date().getHours()+24)}function _t(e){ae.local.setItem({key:Ze.loginExpiresAt,data:e,expires:e})}var qr=x(()=>{"use strict";t();xo();Wo()});var vs,ws,Is,dw,Nu,Eu,As,lw,Du,ks,_w,uw,gw,cn,pn=x(()=>{"use strict";t();vs=require("@reduxjs/toolkit");qr();M();B();ws={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Is=(0,vs.createSlice)({name:"loginInfoSlice",initialState:ws,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(F,()=>ws),e.addCase(se,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,_t(lt())})}}),{setLoginMethod:dw,setWalletConnectLogin:Nu,setLedgerLogin:Eu,setTokenLogin:As,setTokenLoginSignature:lw,setWalletLogin:Du,invalidateLoginSession:ks,setLogoutRoute:_w,setIsWalletConnectV2Initialized:uw,setWebviewLogin:gw}=Is.actions,cn=Is.reducer});var Cs,Ls,Ps,xw,Ru,yw,Mu,mn,dn=x(()=>{"use strict";t();Cs=require("@reduxjs/toolkit");B();Ls={},Ps=(0,Cs.createSlice)({name:"modalsSlice",initialState:Ls,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(F,()=>Ls)}}),{setTxSubmittedModal:xw,setNotificationModal:Ru,clearTxSubmittedModal:yw,clearNotificationModal:Mu}=Ps.actions,mn=Ps.reducer});var H,Y=x(()=>{"use strict";t();To();H=()=>{if(!Ue())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:c,search:p}}=window;return{pathname:o,hash:n,origin:r,href:c,search:p}}});var Ns=x(()=>{"use strict";t();Y()});var Es=x(()=>{"use strict";t();J()});var Ds=x(()=>{"use strict";t();dt()});var J=x(()=>{"use strict";t();Ns();Es();Y();Ds()});var ut=x(()=>{"use strict";t();J()});var Ms=x(()=>{"use strict";t();ut()});function Os(e){return e[Math.floor(Math.random()*e.length)]}var Fs=x(()=>{"use strict";t()});var jr=x(()=>{"use strict";t();Or()});var Ge=x(()=>{"use strict";t();Ms();Fs();jr()});var Bs,Ws,Us,zr,Ou,Gs,Jw,Qw,Fu,_n,un=x(()=>{"use strict";t();Bs=require("@reduxjs/toolkit"),Ws=f(require("lodash.omit")),Us=require("redux-persist");Jt();B();Ge();zr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Ou={network:zr},Gs=(0,Bs.createSlice)({name:"appConfig",initialState:Ou,reducers:{initializeNetworkConfig:(e,o)=>{let n=Os(o.payload.walletConnectV2RelayAddresses),r=(0,Ws.default)(o.payload,"walletConnectV2RelayAddresses");e.network=v(u(u({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(F,o=>{o.network.customWalletAddress=void 0}),e.addCase(Us.REHYDRATE,(o,n)=>{var c,p;if(!((p=(c=n.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Jw,updateNetworkConfig:Qw,setCustomWalletAddress:Fu}=Gs.actions,_n=Gs.reducer});var Vs,Kr,Hs,av,iv,sv,gn,fn=x(()=>{"use strict";t();Vs=require("@reduxjs/toolkit");O();B();Kr={isSigning:!1,signedSessions:{}},Hs=(0,Vs.createSlice)({name:"signedMessageInfoSliceState",initialState:Kr,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[n]=u(u({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Kr},extraReducers:e=>{e.addCase(F,()=>Kr)}}),{setSignSession:av,clearSignedMessageInfo:iv,setSignSessionState:sv}=Hs.actions,gn=Hs.reducer});var qs,js,$s,zs,Bu,Wu,uv,Uu,Tn,hn=x(()=>{"use strict";t();qs=require("@reduxjs/toolkit"),js=require("redux-persist");O();pt();B();$s={customToasts:[],transactionToasts:[]},zs=(0,qs.createSlice)({name:"toastsSlice",initialState:$s,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===n);if(r!==-1){e.customToasts[r]=v(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(v(u({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:ho(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(F,()=>$s),e.addCase(js.REHYDRATE,(o,n)=>{var c,p;let r=(p=(c=n.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Bu,removeCustomToast:Wu,addTransactionToast:uv,removeTransactionToast:Uu}=zs.actions,Tn=zs.reducer});var Ks,Yr,Zr,Jr,Gu,Xr,Xs,hv,Vu,Qr,xn,yn=x(()=>{"use strict";t();Ks=require("@reduxjs/toolkit");B();Yr="Transaction failed",Zr="Transaction successful",Jr="Processing transaction",Gu="Transaction submitted",Xr={},Xs=(0,Ks.createSlice)({name:"transactionsInfo",initialState:Xr,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Yr,successMessage:(r==null?void 0:r.successMessage)||Zr,processingMessage:(r==null?void 0:r.processingMessage)||Jr,submittedMessage:(r==null?void 0:r.submittedMessage)||Gu,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Xr},extraReducers:e=>{e.addCase(F,()=>Xr)}}),{clearTransactionsInfo:hv,setTransactionsDisplayInfo:Vu,clearTransactionsInfoForSessionId:Qr}=Xs.actions,xn=Xs.reducer});function Qe(e){return e!=null&&(Ju(e)||bn(e))}function eo(e){return e!=null&&(Qu(e)||ng(e))}function oo(e){return e!=null&&(eg(e)||rg(e))}function Ys(e){return e!=null&&(og(e)||ag(e))}function gt(e){return e!=null&&tg(e)}function Ju(e){return e!=null&&Hu.includes(e)}function Qu(e){return e!=null&&$u.includes(e)}function eg(e){return e!=null&&qu.includes(e)}function og(e){return e!=null&&ju.includes(e)}function tg(e){return e!=null&&zu.includes(e)}function bn(e){return e!=null&&Ku.includes(e)}function ng(e){return e!=null&&Xu.includes(e)}function rg(e){return e!=null&&Yu.includes(e)}function ag(e){return e!=null&&Zu.includes(e)}var Hu,$u,qu,ju,zu,Ku,Xu,Yu,Zu,to=x(()=>{"use strict";t();M();Hu=["sent"],$u=["success"],qu=["fail","cancelled","timedOut"],ju=["invalid"],zu=["timedOut"],Ku=["pending"],Xu=["success"],Yu=["fail","invalid"],Zu=["not executed"]});var Zs,Js,ft,ig,Qs,ec,oc,sg,Sn,cg,pg,kv,mg,Tt,ea,Lv,wn,vn=x(()=>{"use strict";t();Zs=require("@reduxjs/toolkit"),Js=require("redux-persist");M();to();B();ft={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},ig={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Qs=(0,Zs.createSlice)({name:"transactionsSlice",initialState:ft,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:n,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=u(u(u({},ig),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===n&&(e.transactionsToSign=ft.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,c!=null&&(e.signedTransactions[n].errorMessage=c),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,T,h,b,L,N,D,W;let{sessionId:n,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(T=(_=e.signedTransactions)==null?void 0:_[n])==null?void 0:T.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(A=>A.hash===p?v(u(u({},m!=null?m:{}),A),{status:r,errorMessage:c,inTransit:d}):A);let ne=(b=(h=e.signedTransactions[n])==null?void 0:h.transactions)==null?void 0:b.every(A=>eo(A.status)),q=(N=(L=e.signedTransactions[n])==null?void 0:L.transactions)==null?void 0:N.some(A=>oo(A.status)),Z=(W=(D=e.signedTransactions[n])==null?void 0:D.transactions)==null?void 0:W.every(A=>Ys(A.status));ne&&(e.signedTransactions[n].status="success"),q&&(e.signedTransactions[n].status="fail"),Z&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=ft.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=ft.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=u(u({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(F,()=>ft),e.addCase(Js.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=n.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let T=new Date(l),h=new Date;return h.setHours(h.getHours()+5),h-T>0||(d[l]=_),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ec,updateSignedTransactions:oc,setTransactionsToSign:sg,clearAllTransactionsToSign:Sn,clearAllSignedTransactions:cg,clearSignedTransaction:pg,clearTransactionToSign:kv,setSignTransactionsError:mg,setSignTransactionsCancelMessage:Tt,moveTransactionsToSignedState:ea,updateSignedTransactionsCustomTransactionInformation:Lv}=Qs.actions,wn=Qs.reducer});var tc,oa,nc,Ev,Dv,dg,Rv,In,An=x(()=>{"use strict";t();tc=require("@reduxjs/toolkit");B();oa={},nc=(0,tc.createSlice)({name:"batchTransactionsSlice",initialState:oa,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>oa},extraReducers:e=>{e.addCase(F,()=>oa)}}),{setBatchTransactions:Ev,updateBatchTransactions:Dv,clearBatchTransactions:dg,clearAllBatchTransactions:Rv}=nc.actions,In=nc.reducer});var ac,rc,ic,Bv,sc,ta=x(()=>{"use strict";t();ac=require("@reduxjs/toolkit");B();rc={},ic=(0,ac.createSlice)({name:"dappConfigSlice",initialState:rc,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(F,()=>rc)}}),{setDappConfig:Bv}=ic.actions,sc=ic.reducer});var R=x(()=>{"use strict";t();sn();pn();dn();un();fn();hn();yn();vn();An();ta()});var na=x(()=>{"use strict";t()});var mc,gg,fg,So,Cn=x(()=>{"use strict";t();mc=require("@reduxjs/toolkit");na();sn();An();ta();pn();dn();un();fn();hn();yn();vn();gg={["account"]:an,["dappConfig"]:sc,["loginInfo"]:cn,["modals"]:mn,["networkConfig"]:_n,["signedMessageInfo"]:gn,["toasts"]:Tn,["transactionsInfo"]:xn,["transactions"]:wn,["batchTransactions"]:In},fg=(e={})=>(0,mc.combineReducers)(u(u({},gg),e)),So=fg});var uc={};V(uc,{default:()=>Eg,sessionStorageReducers:()=>ra});function Ve(e,o=[]){return{key:e,version:1,storage:lc.default,blacklist:o}}var te,dc,lc,Tg,ht,hg,xg,yg,bg,Sg,wg,vg,Ig,Ag,kg,_c,Lg,ra,Cg,Pg,Ng,Eg,gc=x(()=>{"use strict";t();te=require("redux-persist"),dc=f(require("redux-persist/lib/storage")),lc=f(require("redux-persist/lib/storage/session"));Cn();R();sn();An();pn();dn();un();fn();hn();yn();vn();na();Tg={persistReducersStorageType:"localStorage"},ht={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},hg=Ve(ht["account"]),xg=Ve(ht["loginInfo"]),yg=Ve(ht["modals"]),bg=Ve(ht["networkConfig"]),Sg={2:e=>v(u({},e),{networkConfig:zr})};wg=Ve("sdk-dapp-transactionsInfo"),vg=Ve("sdk-dapp-transactions",["transactionsToSign"]),Ig=Ve("sdk-dapp-batchTransactions",["batchTransactions"]),Ag=Ve("sdk-dapp-toasts"),kg=Ve("sdk-dapp-signedMessageInfo"),_c={key:"sdk-dapp-store",version:2,storage:dc.default,whitelist:Object.keys(ht),migrate:(0,te.createMigrate)(Sg,{debug:!1})},Lg=v(u({},_c),{whitelist:[]}),ra={["toasts"]:(0,te.persistReducer)(Ag,Tn),["transactions"]:(0,te.persistReducer)(vg,wn),["transactionsInfo"]:(0,te.persistReducer)(wg,xn),["batchTransactions"]:(0,te.persistReducer)(Ig,In),["signedMessageInfo"]:(0,te.persistReducer)(kg,gn)},Cg=v(u({},ra),{["account"]:(0,te.persistReducer)(hg,an),["loginInfo"]:(0,te.persistReducer)(xg,cn),["modals"]:(0,te.persistReducer)(yg,mn),["networkConfig"]:(0,te.persistReducer)(bg,_n)}),Pg=Tg.persistReducersStorageType==="localStorage",Ng=Pg?(0,te.persistReducer)(_c,So(ra)):(0,te.persistReducer)(Lg,So(Cg)),Eg=Ng});var fc={};V(fc,{default:()=>Dg});var Dg,Tc=x(()=>{"use strict";t();Cn();Dg=So()});var hc={};V(hc,{default:()=>Mg});var _e,Rg,Mg,xc=x(()=>{"use strict";t();_e=require("redux-persist"),Rg=[_e.FLUSH,_e.REHYDRATE,_e.PAUSE,_e.PERSIST,_e.PURGE,_e.REGISTER],Mg=Rg});var Sc={};V(Sc,{default:()=>bc});function bc(e){return(0,yc.persistStore)(e)}var yc,wc=x(()=>{"use strict";t();yc=require("redux-persist")});var ka={};V(ka,{css:()=>Up,default:()=>Jf});var Up,Jf,La=x(()=>{"use strict";t();Up=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Up));Jf={copy:"dapp-core-component__copyButton-styles__copy"}});var Pa={};V(Pa,{css:()=>Hp,default:()=>eT});var Hp,eT,Na=x(()=>{"use strict";t();Hp=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hp));eT={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var am=w((X5,rm)=>{t();var xT=typeof i=="object"&&i&&i.Object===Object&&i;rm.exports=xT});var kt=w((Y5,im)=>{t();var yT=am(),bT=typeof self=="object"&&self&&self.Object===Object&&self,ST=yT||bT||Function("return this")();im.exports=ST});var Ra=w((Z5,sm)=>{t();var wT=kt(),vT=wT.Symbol;sm.exports=vT});var dm=w((J5,mm)=>{t();var cm=Ra(),pm=Object.prototype,IT=pm.hasOwnProperty,AT=pm.toString,Lt=cm?cm.toStringTag:void 0;function kT(e){var o=IT.call(e,Lt),n=e[Lt];try{e[Lt]=void 0;var r=!0}catch(p){}var c=AT.call(e);return r&&(o?e[Lt]=n:delete e[Lt]),c}mm.exports=kT});var _m=w((Q5,lm)=>{t();var LT=Object.prototype,CT=LT.toString;function PT(e){return CT.call(e)}lm.exports=PT});var Ma=w((eO,fm)=>{t();var um=Ra(),NT=dm(),ET=_m(),DT="[object Null]",RT="[object Undefined]",gm=um?um.toStringTag:void 0;function MT(e){return e==null?e===void 0?RT:DT:gm&&gm in Object(e)?NT(e):ET(e)}fm.exports=MT});var hm=w((oO,Tm)=>{t();var OT=Array.isArray;Tm.exports=OT});var ym=w((tO,xm)=>{t();function FT(e){return e!=null&&typeof e=="object"}xm.exports=FT});var Sm=w((nO,bm)=>{t();var BT=Ma(),WT=hm(),UT=ym(),GT="[object String]";function VT(e){return typeof e=="string"||!WT(e)&&UT(e)&&BT(e)==GT}bm.exports=VT});var Jn=w((tF,km)=>{t();function sh(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}km.exports=sh});var Cm=w((nF,Lm)=>{t();var ch=Ma(),ph=Jn(),mh="[object AsyncFunction]",dh="[object Function]",lh="[object GeneratorFunction]",_h="[object Proxy]";function uh(e){if(!ph(e))return!1;var o=ch(e);return o==dh||o==lh||o==mh||o==_h}Lm.exports=uh});var Nm=w((rF,Pm)=>{t();var gh=kt(),fh=gh["__core-js_shared__"];Pm.exports=fh});var Rm=w((aF,Dm)=>{t();var Wa=Nm(),Em=function(){var e=/[^.]+$/.exec(Wa&&Wa.keys&&Wa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Th(e){return!!Em&&Em in e}Dm.exports=Th});var Om=w((iF,Mm)=>{t();var hh=Function.prototype,xh=hh.toString;function yh(e){if(e!=null){try{return xh.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Mm.exports=yh});var Bm=w((sF,Fm)=>{t();var bh=Cm(),Sh=Rm(),wh=Jn(),vh=Om(),Ih=/[\\^$.*+?()[\]{}|]/g,Ah=/^\[object .+?Constructor\]$/,kh=Function.prototype,Lh=Object.prototype,Ch=kh.toString,Ph=Lh.hasOwnProperty,Nh=RegExp("^"+Ch.call(Ph).replace(Ih,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Eh(e){if(!wh(e)||Sh(e))return!1;var o=bh(e)?Nh:Ah;return o.test(vh(e))}Fm.exports=Eh});var Um=w((cF,Wm)=>{t();function Dh(e,o){return e==null?void 0:e[o]}Wm.exports=Dh});var Qn=w((pF,Gm)=>{t();var Rh=Bm(),Mh=Um();function Oh(e,o){var n=Mh(e,o);return Rh(n)?n:void 0}Gm.exports=Oh});var Ct=w((mF,Vm)=>{t();var Fh=Qn(),Bh=Fh(Object,"create");Vm.exports=Bh});var qm=w((dF,$m)=>{t();var Hm=Ct();function Wh(){this.__data__=Hm?Hm(null):{},this.size=0}$m.exports=Wh});var zm=w((lF,jm)=>{t();function Uh(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}jm.exports=Uh});var Xm=w((_F,Km)=>{t();var Gh=Ct(),Vh="__lodash_hash_undefined__",Hh=Object.prototype,$h=Hh.hasOwnProperty;function qh(e){var o=this.__data__;if(Gh){var n=o[e];return n===Vh?void 0:n}return $h.call(o,e)?o[e]:void 0}Km.exports=qh});var Zm=w((uF,Ym)=>{t();var jh=Ct(),zh=Object.prototype,Kh=zh.hasOwnProperty;function Xh(e){var o=this.__data__;return jh?o[e]!==void 0:Kh.call(o,e)}Ym.exports=Xh});var Qm=w((gF,Jm)=>{t();var Yh=Ct(),Zh="__lodash_hash_undefined__";function Jh(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Yh&&o===void 0?Zh:o,this}Jm.exports=Jh});var od=w((fF,ed)=>{t();var Qh=qm(),ex=zm(),ox=Xm(),tx=Zm(),nx=Qm();function Yo(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Yo.prototype.clear=Qh;Yo.prototype.delete=ex;Yo.prototype.get=ox;Yo.prototype.has=tx;Yo.prototype.set=nx;ed.exports=Yo});var nd=w((TF,td)=>{t();function rx(){this.__data__=[],this.size=0}td.exports=rx});var ad=w((hF,rd)=>{t();function ax(e,o){return e===o||e!==e&&o!==o}rd.exports=ax});var Pt=w((xF,id)=>{t();var ix=ad();function sx(e,o){for(var n=e.length;n--;)if(ix(e[n][0],o))return n;return-1}id.exports=sx});var cd=w((yF,sd)=>{t();var cx=Pt(),px=Array.prototype,mx=px.splice;function dx(e){var o=this.__data__,n=cx(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():mx.call(o,n,1),--this.size,!0}sd.exports=dx});var md=w((bF,pd)=>{t();var lx=Pt();function _x(e){var o=this.__data__,n=lx(o,e);return n<0?void 0:o[n][1]}pd.exports=_x});var ld=w((SF,dd)=>{t();var ux=Pt();function gx(e){return ux(this.__data__,e)>-1}dd.exports=gx});var ud=w((wF,_d)=>{t();var fx=Pt();function Tx(e,o){var n=this.__data__,r=fx(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}_d.exports=Tx});var fd=w((vF,gd)=>{t();var hx=nd(),xx=cd(),yx=md(),bx=ld(),Sx=ud();function Zo(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Zo.prototype.clear=hx;Zo.prototype.delete=xx;Zo.prototype.get=yx;Zo.prototype.has=bx;Zo.prototype.set=Sx;gd.exports=Zo});var hd=w((IF,Td)=>{t();var wx=Qn(),vx=kt(),Ix=wx(vx,"Map");Td.exports=Ix});var bd=w((AF,yd)=>{t();var xd=od(),Ax=fd(),kx=hd();function Lx(){this.size=0,this.__data__={hash:new xd,map:new(kx||Ax),string:new xd}}yd.exports=Lx});var wd=w((kF,Sd)=>{t();function Cx(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Sd.exports=Cx});var Nt=w((LF,vd)=>{t();var Px=wd();function Nx(e,o){var n=e.__data__;return Px(o)?n[typeof o=="string"?"string":"hash"]:n.map}vd.exports=Nx});var Ad=w((CF,Id)=>{t();var Ex=Nt();function Dx(e){var o=Ex(this,e).delete(e);return this.size-=o?1:0,o}Id.exports=Dx});var Ld=w((PF,kd)=>{t();var Rx=Nt();function Mx(e){return Rx(this,e).get(e)}kd.exports=Mx});var Pd=w((NF,Cd)=>{t();var Ox=Nt();function Fx(e){return Ox(this,e).has(e)}Cd.exports=Fx});var Ed=w((EF,Nd)=>{t();var Bx=Nt();function Wx(e,o){var n=Bx(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}Nd.exports=Wx});var Rd=w((DF,Dd)=>{t();var Ux=bd(),Gx=Ad(),Vx=Ld(),Hx=Pd(),$x=Ed();function Jo(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Jo.prototype.clear=Ux;Jo.prototype.delete=Gx;Jo.prototype.get=Vx;Jo.prototype.has=Hx;Jo.prototype.set=$x;Dd.exports=Jo});var Od=w((RF,Md)=>{t();var qx="__lodash_hash_undefined__";function jx(e){return this.__data__.set(e,qx),this}Md.exports=jx});var Bd=w((MF,Fd)=>{t();function zx(e){return this.__data__.has(e)}Fd.exports=zx});var Ud=w((OF,Wd)=>{t();var Kx=Rd(),Xx=Od(),Yx=Bd();function er(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new Kx;++o<n;)this.add(e[o])}er.prototype.add=er.prototype.push=Xx;er.prototype.has=Yx;Wd.exports=er});var Vd=w((FF,Gd)=>{t();function Zx(e,o,n,r){for(var c=e.length,p=n+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Gd.exports=Zx});var $d=w((BF,Hd)=>{t();function Jx(e){return e!==e}Hd.exports=Jx});var jd=w((WF,qd)=>{t();function Qx(e,o,n){for(var r=n-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}qd.exports=Qx});var Kd=w((UF,zd)=>{t();var ey=Vd(),oy=$d(),ty=jd();function ny(e,o,n){return o===o?ty(e,o,n):ey(e,oy,n)}zd.exports=ny});var Yd=w((GF,Xd)=>{t();var ry=Kd();function ay(e,o){var n=e==null?0:e.length;return!!n&&ry(e,o,0)>-1}Xd.exports=ay});var Jd=w((VF,Zd)=>{t();function iy(e,o,n){for(var r=-1,c=e==null?0:e.length;++r<c;)if(n(o,e[r]))return!0;return!1}Zd.exports=iy});var el=w((HF,Qd)=>{t();function sy(e,o){return e.has(o)}Qd.exports=sy});var tl=w(($F,ol)=>{t();var cy=Qn(),py=kt(),my=cy(py,"Set");ol.exports=my});var rl=w((qF,nl)=>{t();function dy(){}nl.exports=dy});var Ua=w((jF,al)=>{t();function ly(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}al.exports=ly});var sl=w((zF,il)=>{t();var Ga=tl(),_y=rl(),uy=Ua(),gy=1/0,fy=Ga&&1/uy(new Ga([,-0]))[1]==gy?function(e){return new Ga(e)}:_y;il.exports=fy});var pl=w((KF,cl)=>{t();var Ty=Ud(),hy=Yd(),xy=Jd(),yy=el(),by=sl(),Sy=Ua(),wy=200;function vy(e,o,n){var r=-1,c=hy,p=e.length,m=!0,d=[],l=d;if(n)m=!1,c=xy;else if(p>=wy){var _=o?null:by(e);if(_)return Sy(_);m=!1,c=yy,l=new Ty}else l=o?[]:d;e:for(;++r<p;){var T=e[r],h=o?o(T):T;if(T=n||T!==0?T:0,m&&h===h){for(var b=l.length;b--;)if(l[b]===h)continue e;o&&l.push(h),d.push(T)}else c(l,h,n)||(l!==d&&l.push(h),d.push(T))}return d}cl.exports=vy});var dl=w((XF,ml)=>{t();var Iy=pl();function Ay(e){return e&&e.length?Iy(e):[]}ml.exports=Ay});var $e={};V($e,{css:()=>vl,default:()=>pb});var vl,pb,qe=x(()=>{"use strict";t();vl=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vl));pb={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Ya={};V(Ya,{css:()=>Ol,default:()=>Cb});var Ol,Cb,Za=x(()=>{"use strict";t();Ol=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ol));Cb={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var je={};V(je,{css:()=>Wl,default:()=>Nb});var Wl,Nb,ze=x(()=>{"use strict";t();Wl=`.dapp-core-component__transactionDetails-styles__title {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wl));Nb={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var be={};V(be,{css:()=>Vl,default:()=>Fb});var Vl,Fb,Se=x(()=>{"use strict";t();Vl=`.dapp-core-component__transactionToast-styles__content {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vl));Fb={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var No={};V(No,{css:()=>ql,default:()=>Wb});var ql,Wb,Eo=x(()=>{"use strict";t();ql=`.dapp-core-component__transactionsToastList-styles__toasts {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ql));Wb={toasts:"dapp-core-component__transactionsToastList-styles__toasts",toastWrapper:"dapp-core-component__transactionsToastList-styles__toastWrapper",loader:"dapp-core-component__transactionsToastList-styles__loader"}});var oi={};V(oi,{css:()=>Ql,default:()=>Hb});var Ql,Hb,ti=x(()=>{"use strict";t();Ql=`.dapp-core-component__customToast-styles__close {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ql));Hb={close:"dapp-core-component__customToast-styles__close"}});var ni={};V(ni,{css:()=>n_,default:()=>qb});var n_,qb,ri=x(()=>{"use strict";t();n_=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(n_));qb={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var Ot={};V(Ot,{css:()=>a_,default:()=>Yb});var a_,Yb,Ft=x(()=>{"use strict";t();a_=`.dapp-core-component__styles__transaction-action-collection {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(a_));Yb={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var Wt={};V(Wt,{css:()=>l_,default:()=>oS});var l_,oS,Ut=x(()=>{"use strict";t();l_=`.dapp-core-component__transactionsTable-styles__transactions-table {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(l_));oS={"transactions-table":"dapp-core-component__transactionsTable-styles__transactions-table",transactionsTable:"dapp-core-component__transactionsTable-styles__transactions-table","transactions-table-header":"dapp-core-component__transactionsTable-styles__transactions-table-header",transactionsTableHeader:"dapp-core-component__transactionsTable-styles__transactions-table-header","table-wrapper":"dapp-core-component__transactionsTable-styles__table-wrapper",tableWrapper:"dapp-core-component__transactionsTable-styles__table-wrapper",table:"dapp-core-component__transactionsTable-styles__table","transaction-cell":"dapp-core-component__transactionsTable-styles__transaction-cell",transactionCell:"dapp-core-component__transactionsTable-styles__transaction-cell","transaction-cell-margin":"dapp-core-component__transactionsTable-styles__transaction-cell-margin",transactionCellMargin:"dapp-core-component__transactionsTable-styles__transaction-cell-margin","transaction-cell-overflow":"dapp-core-component__transactionsTable-styles__transaction-cell-overflow",transactionCellOverflow:"dapp-core-component__transactionsTable-styles__transaction-cell-overflow","transaction-cell-link":"dapp-core-component__transactionsTable-styles__transaction-cell-link",transactionCellLink:"dapp-core-component__transactionsTable-styles__transaction-cell-link","transaction-cell-font-small":"dapp-core-component__transactionsTable-styles__transaction-cell-font-small",transactionCellFontSmall:"dapp-core-component__transactionsTable-styles__transaction-cell-font-small"}});var mS={};V(mS,{CustomToast:()=>pS});module.exports=E(mS);t();var Ht=f(require("react"));O();t();t();var rr=f(require("react"));t();var qi=f(require("react"));t();var ct=f(require("react"));t();To();var Hi=()=>!Ue();var uu=()=>y(void 0,null,function*(){return yield Promise.resolve().then(()=>(kr(),Ar))}),gu=()=>(kr(),E(Ar)).default,Lr=Hi();function Bo({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,c]=ct.default.useState(Lr?void 0:gu()),[p,m]=ct.default.useState(Lr||n==null?void 0:n()),d=()=>y(this,null,function*(){(e?e():uu()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,ct.useEffect)(()=>{Lr&&d()},[]),{globalStyles:r,styles:p}}function I(e,o){return n=>{let{globalStyles:r,styles:c}=Bo({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return qi.default.createElement(e,v(u({},n),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}t();var ie=f(require("react")),ts=f(require("classnames"));Xt();t();t();var Xi=e=>Math.exp(e/100);var fu=75,Tu=25,Yt=100,Pr=({remaining:e,totalSeconds:o,isCrossShard:n})=>{let r=n?Tu:fu,c=Yt/1e3,p=1/(o*c),m=Math.min(Xi(e)-1,p),d=e>=100-r?p:m;return e-d};xo();var mt="toastProgress",vu=({id:e,children:o,progress:n,done:r,expiresIn:c=10*60,className:p="dapp-progress",isCrossShard:m=!1,styles:d})=>{let{currentRemaining:l,totalSeconds:_}=(0,ie.useMemo)(()=>{let G=(ae.session.getItem(mt)||{})[e],K=n?n.endTime-n.startTime:0;return{currentRemaining:G||100,totalSeconds:K}},[]),T=(0,ie.useRef)(null),h=(0,ie.useRef)(),b=(0,ie.useRef)(l);(0,ie.useEffect)(()=>{if(n!=null)return r?W():ne(),()=>{clearInterval(h.current)}},[n,r]);function L(){let A=ae.session.getItem(mt);!Boolean(A==null?void 0:A[e])||(delete A[e],D(A))}function N(A){let G=ae.session.getItem(mt)||{};G[e]=A,D(G)}function D(A){ae.session.setItem({key:mt,data:A,expires:zi(c)})}function W(){if(b.current<100){q(0);return}h.current=setInterval(()=>{if(T.current==null)return;let G=b.current-1;G<=0?(clearInterval(h.current),L(),q(0)):(N(G),q(G))},Yt)}function ne(){if((ae.session.getItem(mt)||{})[e]===b.current){let K=Pr({remaining:b.current,totalSeconds:_,isCrossShard:m});q(K),N(K)}h.current=setInterval(()=>{if(T.current==null)return;let K=Pr({remaining:b.current,totalSeconds:_,isCrossShard:m});N(K),q(K)},Yt)}function q(A){b.current=A,Z()}function Z(){if(T.current==null)return;let A=b.current;T.current.style.width=`${A}%`,T.current.ariaValueNow=A}return n?ie.default.createElement("div",{className:(0,ts.default)(d==null?void 0:d.progress,p)},ie.default.createElement("div",{ref:T,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,className:d==null?void 0:d.bar}),o):ie.default.createElement(ie.default.Fragment,null,o)},ns=I(vu,{ssrStyles:()=>Promise.resolve().then(()=>(Rr(),Dr)),clientStyles:()=>(Rr(),E(Dr)).default});t();t();var Ur=f(require("react")),hs=require("@fortawesome/free-solid-svg-icons"),xs=require("@fortawesome/react-fontawesome");k();var tn=({className:e="dapp-default-toast-delete-button",onClick:o})=>Ur.default.createElement("button",{type:"button",className:e,onClick:o,"data-testid":"deleteToastButton"},Ur.default.createElement(xs.FontAwesomeIcon,{icon:hs.faTimes,size:"xs"}));t();var we=f(require("react")),Hl=require("@fortawesome/react-fontawesome"),ei=f(require("classnames"));k();t();t();var co=f(require("react"));t();t();var Cc=require("react"),Vo=require("react-redux");t();var aa=require("@reduxjs/toolkit"),kc=require("react-redux/lib/utils/Subscription");R();t();var cc=f(require("lodash.throttle"));k();R();qr();xo();Wo();var lg=[on],kn=!1,_g=(0,cc.default)(()=>{_t(lt())},5e3),pc=e=>o=>n=>{if(lg.includes(n.type))return o(n);let r=e.getState(),c=ae.local.getItem(Ze.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(c==null)return _t(lt());let m=Date.now();return c-m<0&&!kn?setTimeout(()=>{kn=!0,e.dispatch(ks())},1e3):(kn&&(kn=!1),_g()),o(n)};t();t();function Ln(){return typeof sessionStorage!="undefined"}var vc=Ln()?(gc(),E(uc)).default:(Tc(),E(fc)).default,Ic=Ln()?(xc(),E(hc)).default:[],Ac=Ln()?(wc(),E(Sc)).default:e=>e;Cn();var P=(0,aa.configureStore)({reducer:vc,middleware:e=>e({serializableCheck:{ignoredActions:[...Ic,$r.type,rn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(pc)}),Lc=(0,kc.createSubscription)(P),OI=Ac(P),FI=(0,aa.configureStore)({reducer:So});var Og={store:P,subscription:Lc},ia=(0,Cc.createContext)(Og),GI=(0,Vo.createStoreHook)(ia),Q=(0,Vo.createDispatchHook)(ia),C=(0,Vo.createSelectorHook)(ia);t();t();R();t();var Pc=f(require("lodash.isequal")),Pn=require("reselect"),S=(0,Pn.createSelectorCreator)(Pn.defaultMemoize,Pc.default);var Ee=e=>e.account,wo=S(Ee,e=>e.address),vo=S(Ee,wo,(e,o)=>o in e.accounts?e.accounts[o]:nn),Fg=S(Ee,vo,(e,o)=>{let c=e,{accounts:n}=c,r=Oe(c,["accounts"]);return v(u({},r),{address:o.address,account:o})}),jI=S(vo,e=>e.balance),Bg=S(vo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Nc=S(Ee,e=>e.shard),Wg=S(Ee,e=>e.ledgerAccount),zI=S(Ee,e=>e.walletConnectAccount),KI=S(Ee,e=>e.isAccountLoading),XI=S(Ee,e=>e.accountLoadingError),Ug=S(Ee,e=>e.websocketEvent),Gg=S(Ee,e=>e.websocketBatchEvent);t();var Ec=e=>e.dappConfig,JI=S(Ec,e=>e.shouldUseWebViewProvider);t();var ce=e=>e.loginInfo,Vg=S(ce,e=>e.loginMethod),Nn=S(ce,wo,(e,o)=>Boolean(o)),tA=S(ce,e=>e.walletConnectLogin),Hg=S(ce,e=>e.ledgerLogin),$g=S(ce,e=>e.walletLogin),nA=S(ce,e=>e.isLoginSessionInvalid),sa=S(ce,e=>e.tokenLogin),Dc=S(ce,e=>e.logoutRoute),qg=S(ce,e=>e.isWalletConnectV2Initialized);t();var Rc=e=>e.modals,iA=S(Rc,e=>e.txSubmittedModal),jg=S(Rc,e=>e.notificationModal);t();var fe=e=>e.networkConfig,En=S(fe,e=>e.network.chainId),zg=S(fe,e=>e.network.roundDuration),pA=S(fe,e=>e.network.walletConnectBridgeAddress),Kg=S(fe,e=>e.network.walletConnectV2RelayAddress),Xg=S(fe,e=>e.network.walletConnectV2ProjectId),Yg=S(fe,e=>e.network.walletConnectV2Options),Zg=S(fe,e=>e.network.walletConnectDeepLink),pe=S(fe,e=>e.network),Mc=S(pe,e=>e.apiAddress),Oc=S(pe,e=>e.explorerAddress),Fc=S(pe,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Jg=S(pe,e=>e.xAliasAddress),ca=S(pe,e=>e.egldLabel);t();var Dn=e=>e.signedMessageInfo,lA=S(Dn,e=>e.isSigning),_A=S(Dn,e=>e.errorMessage),uA=S(Dn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),gA=S(Dn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var Bc=e=>e.toasts,Qg=S(Bc,e=>e.customToasts),Wc=S(Bc,e=>e.transactionToasts);t();R();var Uc={errorMessage:Yr,successMessage:Zr,processingMessage:Jr},Gc=e=>e.transactionsInfo,Vc=S(Gc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Uc);t();t();var De=require("@multiversx/sdk-core");k();t();var ma=require("@multiversx/sdk-core/out");t();t();function xt(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function Rn(e){return xt(e)?atob(e):e}t();t();function pa(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}function Mn(e){let o=e;try{let n=a.Buffer.from(e,"hex").toString();pa(n)&&n.length>1&&(o=n)}catch(n){}return o}t();t();var Hc=e=>{let o=e!=null?e:"";return xt(o)?ma.TransactionPayload.fromEncoded(o):new ma.TransactionPayload(o)};t();k();var yt=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Mr).some(n=>e.startsWith(n)):!1;function Ho(e){var r,c,p;let o=u({},e);yt({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new De.Transaction(u(u(v(u(v(u({value:o.value.valueOf(),data:Hc(o.data),nonce:o.nonce.valueOf(),receiver:new De.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new De.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Qt,gasPrice:(c=o.gasPrice.valueOf())!=null?c:en,chainID:o.chainID.valueOf(),version:new De.TransactionVersion((p=o.version)!=null?p:gs)}),o.options?{options:new De.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new De.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();k();t();t();t();var la=require("@multiversx/sdk-core/out");t();k();var of=e=>{let o=a.Buffer.from([0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);if(e.slice(0,o.length).equals(o))return!0;let r=a.Buffer.alloc(32).fill(0);return e.equals(r)},da=e=>{try{let n=parseInt("11",2),r=parseInt("01",2),c=a.Buffer.from(e,"hex"),p=c[31];if(of(c))return Wr;let m=p&n;return m>3-1&&(m=p&r),m}catch(o){return-1}};function $c({receiverAddress:e,senderShard:o,senderAddress:n}){try{let r=new la.Address(e),c=da(r.pubkey());if(o==null&&n!=null){let p=new la.Address(n);return da(p)===c}return c===o}catch(r){return!1}}t();var bt=require("@multiversx/sdk-core");O();t();var qc=require("@multiversx/sdk-core");function tf(e){try{let o=new qc.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function $o(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&tf(e)}var nf=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function jc(e,o,n=""){if(!$o(e))return!1;if(new bt.Address(e).isContractAddress())return!0;let p=_a({receiver:e,data:n});return p?new bt.Address(p).isContractAddress()||sf(e,o,n):!1}var rf=e=>e.toLowerCase().match(/[0-9a-f]/g),af=e=>e.length%2===0;function sf(e,o,n){let r=n==null?void 0:n.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=nf.includes(c),l=p.every(_=>rf(_)&&af(_));return m&&d&&l}function _a({receiver:e,data:o}){try{if(!o)return e;let n=xt(o)?bt.TransactionPayload.fromEncoded(o).toString():o,r=cf(n),c=n.split("@");return r>-1?c[r]:e}catch(n){console.log(n);return}}function cf(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}var zc=(e,o=1)=>e!=null&&e.length?e.reduce((n,{receiver:r,data:c})=>{let p=_a({receiver:r,data:c!=null?c:""});return p==null?n:n&&$c({receiverAddress:p,senderShard:o})},!0):!0;t();t();t();var ga=require("@multiversx/sdk-core"),On=f(require("bignumber.js"));M();var ua={tokenId:"",amount:""},Kc=e=>e.split("@").map((p,m)=>[2,3].includes(m)?p:Mn(p));function fa(e){if(!e)return ua;let o=e.startsWith("ESDTTransfer"),n=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),r=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(o){let[,c,p]=e.split("@");try{let m=a.Buffer.from(c,"hex").toString("ascii");if(!m)return ua;let d=new On.default("0x"+p.replace("0x","")).toString(10);return{tokenId:m,amount:d}}catch(m){console.error("Error getting token from transaction data",m)}}if(n)try{let[,c,p,m,d]=Kc(e);if([c,p,m,d].every(l=>Boolean(l))&&$o(new ga.Address(d).bech32()))return{tokenId:`${c}-${p}`,amount:new On.default(m,16).toString(10),collection:c,nonce:p,receiver:new ga.Address(d).bech32()}}catch(c){}if(r)try{let[,c,p,m]=Kc(e);if([c,p,m].every(d=>Boolean(d)))return{tokenId:`${c}-${p}`,amount:new On.default(m,16).toString(10),collection:c,nonce:p}}catch(c){}return ua}t();t();t();var Te="accounts";var Fn="blocks",Yc="code",Zc="collections";var Jc="contracts";var Qc="identities";var ep="locked-accounts",op="logs",tp="miniblocks";var Bn="nfts",np="nodes",Ta="providers",rp="roles",ha="sc-results";var Io="tokens";var me="transactions";var ue={shard:e=>`/${Fn}?shard=${e}`,receiverShard:e=>`/${me}?receivershard=${e}`,senderShard:e=>`/${me}?sendershard=${e}`,transactionDetails:e=>`/${me}/${e}`,transactionDetailsScResults:e=>`/${me}/${e}/${ha}`,transactionDetailsLogs:e=>`/${me}/${e}/${op}`,nodeDetails:e=>`/${np}/${e}`,accountDetails:e=>`/${Te}/${e}`,accountDetailsContractCode:e=>`/${Te}/${e}/${Yc}`,accountDetailsTokens:e=>`/${Te}/${e}/${Io}`,accountDetailsNfts:e=>`/${Te}/${e}/${Bn}`,accountDetailsScResults:e=>`/${Te}/${e}/${ha}`,accountDetailsContracts:e=>`/${Te}/${e}/${Jc}`,identityDetails:e=>`/${Qc}/${e}`,tokenDetails:e=>`/${Io}/${e}`,tokenDetailsAccounts:e=>`/${Io}/${e}/${Te}`,tokenDetailsLockedAccounts:e=>`/${Io}/${e}/${ep}`,tokenDetailsRoles:e=>`/${Io}/${e}/${rp}`,collectionDetails:e=>`/${Zc}/${e}`,nftDetails:e=>`/${Bn}/${e}`,providerDetails:e=>`/${Ta}/${e}`,providerDetailsTransactions:e=>`/${Ta}/${e}/${me}`,miniblockDetails:e=>`/${tp}/${e}`};t();var Wn=e=>{var o,n,r,c;if(e.action){let p=[(o=e.action.arguments)==null?void 0:o.token,(n=e.action.arguments)==null?void 0:n.token1,(r=e.action.arguments)==null?void 0:r.token2,(c=e.action.arguments)==null?void 0:c.transfers].filter(d=>d!=null);return[].concat(...p)}return[]};t();t();function Un(e){var n,r;let o=e.receiver;return(r=(n=e.action)==null?void 0:n.arguments)!=null&&r.receiver&&(o=e.action.arguments.receiver),o}function ap(e){let o=Un(e);return e.receiver===o?e.receiverAssets:void 0}t();oe();var ip=e=>{var r,c,p,m,d,l;let o="Transaction";return((r=e.action)==null?void 0:r.name)&&((c=e.action)==null?void 0:c.category)&&(((p=e.action)==null?void 0:p.category)==="esdtNft"&&((m=e.action)==null?void 0:m.name)==="transfer"?o="Transaction":e.action&&(o=e.action.name),(l=(d=e.action)==null?void 0:d.arguments)!=null&&l.functionName&&(o=e.action.arguments.functionName)),o};t();var sp=!1;function mf(e){sp||(console.error(e),sp=!0)}function no({explorerAddress:e,to:o}){try{return new URL(o).href}catch(n){return o.startsWith("/")||(mf(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}t();oe();function pp(e,o,n){let r=e===o.sender,c=e===n,p=r&&c,m=(o==null?void 0:o.type)==="SmartContractResult";switch(!0){case m:return"Internal";case p:return"Self";case c:return"In";case r:default:return"Out"}}t();t();t();var df=f(require("bignumber.js"));k();t();var dp=require("@multiversx/sdk-core"),ro=f(require("bignumber.js"));k();t();var mp=f(require("bignumber.js")),St=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let r=new mp.default(n),c=o?0:-1;return r.toString(10)===n&&r.comparedTo(0)>=c};t();function He(e){return{if:function(o){return o?{then:n=>n instanceof Function?He(n(e)):He(n)}:{then:()=>He(e)}},then:o=>o instanceof Function?He(o(e)):He(o),valueOf:function(){return e}}}ro.default.config({ROUNDING_MODE:ro.default.ROUND_FLOOR});function he({input:e,decimals:o=z,digits:n=bo,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!St(e,!1))throw new Error("Invalid input");let m=new ro.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),He(d).then(()=>dp.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let _=new ro.default(l);if(_.isZero())return Ne;let T=_.toString(10),[h,b]=T.split("."),L=new ro.default(b||0),N=He(0).if(Boolean(b&&r)).then(()=>Math.max(b.length,n)).if(L.isZero()&&!r).then(0).if(Boolean(b&&!r)).then(()=>Math.min(b.length,n)).valueOf(),D=b&&n>=1&&n<=b.length&&L.isGreaterThan(0)&&new ro.default(b.substring(0,n)).isZero(),W=_.toFormat(N);return He(T).if(p).then(W).if(Boolean(D)).then(q=>{let Z=new ro.default(h).isZero(),[A,G]=q.split("."),K=new Array(n-1).fill(0),it=[...K,0].join(""),lo=[...K,1].join("");return Z?c?`<${A}.${lo}`:r?`${A}.${G}`:A:`${A}.${it}`}).if(Boolean(!D&&b)).then(q=>{let[Z]=q.split("."),A=b.substring(0,N);if(r){let G=n-A.length;if(G>0){let K=Array(G).fill(0).join("");return A=`${A}${K}`,`${Z}.${A}`}return q}return A?`${Z}.${A}`:Z}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}t();t();t();k();t();var wt=(r=>(r.NonFungibleESDT="NonFungibleESDT",r.SemiFungibleESDT="SemiFungibleESDT",r.MetaESDT="MetaESDT",r))(wt||{});t();t();t();k();t();k();t();var lf=require("@multiversx/sdk-core");k();t();var vt=require("@multiversx/sdk-core"),gf=f(require("bignumber.js"));k();t();t();var _f=f(require("bignumber.js"));k();t();k();t();var xa={isEsdt:!1,isNft:!1,isEgld:!1};function ya(e){let o=e==null?void 0:e.split("-").length;return o===2?v(u({},xa),{isEsdt:!0}):o===3?v(u({},xa),{isNft:!0}):v(u({},xa),{isEgld:!0})}t();t();t();t();t();k();t();k();function Vn({token:e,noValue:o,showLastNonZeroDecimal:n}){var _;let r=!o&&e.value&&e.type!=="NonFungibleESDT",c=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let m="";r&&c&&(m=c?he({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:n}):Number(e.value).toLocaleString("en"));let d=ue.nftDetails(String(e.identifier)),l=e.ticker===e.collection&&(_=e.identifier)!=null?_:e.ticker;return{badgeText:p,tokenFormattedAmount:r?m:null,tokenExplorerLink:d,tokenLinkText:l,token:e,noValue:o,showLastNonZeroDecimal:n}}t();k();function Hn({token:e,noValue:o,showLastNonZeroDecimal:n}){var d;let r=Boolean(!o&&e.value),c=r?he({input:e.value,decimals:(d=e.decimals)!=null?d:z,digits:2,showLastNonZeroDecimal:n,addCommas:!0}):null,p=ue.tokenDetails(String(e.token)),m=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:c,showFormattedAmount:r,tokenLinkText:m,token:e,showLastNonZeroDecimal:n}}t();oe();var lp=["reDelegateRewards","claimRewards","unBond"],_p=["wrapEgld","unwrapEgld"],up=["unStake"],gp=["unDelegate"];t();t();var fp=e=>{let o=e.map(r=>{let{isNft:c}=ya(r.type);if(c){let{badgeText:T,tokenFormattedAmount:h,tokenLinkText:b}=Vn({token:r});return`${T!=null?`(${T}) `:""}${h} ${b}`}let{tokenFormattedAmount:p,tokenLinkText:m,token:d}=Hn({token:r}),l=d.collection?d.identifier:d.token;return`${p} ${m} (${l})`});return decodeURI(o.join("%0A"))};t();k();var ge=e=>({egldValueData:{value:e,formattedValue:he({input:e}),decimals:z}});t();var hp=f(require("bignumber.js"));var Tp=!1;function xp(e){var o;try{let r=Rn(e.data).replace(`${(o=e.action)==null?void 0:o.name}@`,""),c=new hp.default(r,16);if(!c.isNaN())return ge(c.toString(10))}catch(n){Tp||(console.error(`Unable to extract value for txHash: ${e.txHash}`),Tp=!0)}return ge(e.value)}t();t();oe();var ba=e=>{var n,r;return(r=(n=e==null?void 0:e.operations)==null?void 0:n.filter(c=>Object.values(Ir).includes(c.type)))!=null?r:[]};var yp=!1,bp=e=>{yp||(console.error(`Operations field missing for txHash: ${e}.
        Unable to compute value field.`),yp=!0)};function Sp(e){try{if(e.operations){let[o]=ba(e);return ge(o==null?void 0:o.value)}else bp(e.txHash)}catch(o){bp(e.txHash)}return ge(e.value)}t();var vp=f(require("bignumber.js"));var wp=!1;function Ip(e){var n,r,c,p,m;return new vp.default((r=(n=e.action)==null?void 0:n.arguments)==null?void 0:r.value).isNaN()?(wp||(console.error(`Unable to interpret ${(m=e.action)==null?void 0:m.name} data for txHash: ${e.txHash}`),wp=!0),ge(e.value)):ge((p=(c=e.action)==null?void 0:c.arguments)==null?void 0:p.value)}var Ap=({transaction:e,hideMultipleBadge:o})=>{var n;if(e.action){if(_p.includes(e.action.name))return ge(e.value);if(up.includes(e.action.name))return xp(e);if(lp.includes(e.action.name))return Sp(e);if(gp.includes(e.action.name))return Ip(e);let r=Wn(e);if(r.length){let c=r[0],p=Object.values(wt).includes(c.type),d=!o&&r.length>1?fp(r):"";if(p){let{badgeText:L,tokenFormattedAmount:N,tokenExplorerLink:D,tokenLinkText:W}=Vn({token:c});return{nftValueData:{badgeText:L,tokenFormattedAmount:N,tokenExplorerLink:D,tokenLinkText:W,transactionTokens:r,token:c,value:N!=null?c.value:null,decimals:N!=null?c.decimals:null,titleText:d}}}let{tokenExplorerLink:l,showFormattedAmount:_,tokenFormattedAmount:T,tokenLinkText:h,token:b}=Hn({token:c});return{tokenValueData:{tokenExplorerLink:l,showFormattedAmount:_,tokenFormattedAmount:T,tokenLinkText:h,transactionTokens:r,token:b,value:c.value,decimals:(n=c.decimals)!=null?n:z,titleText:d}}}}return ge(e.value)};function kp({transaction:e,address:o,explorerAddress:n}){var D;let r=(D=e.tokenIdentifier)!=null?D:fa(e.data).tokenId,c=Un(e),p=ap(e),m=pp(o,e,c),d=ip(e),l=Wn(e),_=no({explorerAddress:n,to:ue.accountDetails(e.sender)}),T=no({explorerAddress:n,to:ue.accountDetails(c)}),h=no({explorerAddress:n,to:ue.senderShard(e.senderShard)}),b=no({explorerAddress:n,to:ue.receiverShard(e.receiverShard)}),L=e.originalTxHash?`${e.originalTxHash}#${e.txHash}`:e.txHash,N=no({explorerAddress:n,to:ue.transactionDetails(L)});return v(u({},e),{tokenIdentifier:r,receiver:c,receiverAssets:p,transactionDetails:{direction:m,method:d,transactionTokens:l,isContract:jc(e.sender)},links:{senderLink:_,receiverLink:T,senderShardLink:h,receiverShardLink:b,transactionLink:N}})}t();t();t();t();var ff=f(require("bignumber.js"));O();t();t();t();t();M();t();var yf=require("@multiversx/sdk-web-wallet-provider");k();t();var hf=f(require("qs"));t();J();To();t();To();var I1={search:Ue()?window.location.search:"",removeParams:[]};t();t();t();Y();t();oe();t();t();Y();t();var bf=f(require("linkifyjs"));t();k();t();var Sf=f(require("bignumber.js"));t();O();t();t();M();t();M();t();t();t();oe();t();oe();t();var wf=f(require("bignumber.js"));k();oe();t();oe();t();var Cp=require("react");O();t();t();oe();t();t();var vf=require("@multiversx/sdk-core/out"),If=f(require("bignumber.js"));oe();t();O();t();t();O();var fN=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var Pp=require("react");O();Y();t();var kf=require("react");oe();var vN=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];to();t();var $n=e=>e.transactions,qo=S($n,e=>e.signedTransactions),Lf=S($n,e=>e.signTransactionsError),Np=S($n,e=>e.signTransactionsCancelMessage),qn=e=>o=>Object.entries(o).reduce((n,[r,c])=>(e(c.status)&&(n[r]=c),n),{}),Ep=S(qo,qn(Qe)),Dp=S(qo,qn(eo)),Rp=S(qo,qn(oo)),Cf=S(qo,qn(gt)),Mp=S($n,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:v(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>Ho(n)))||[]})}),Pf=S(qo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var xe=()=>C(vo);O();to();t();t();var Po=f(require("react")),tt=require("@fortawesome/free-solid-svg-icons"),Ul=require("@fortawesome/react-fontawesome"),Qa=f(require("classnames"));t();t();t();var Nf=f(require("axios"));t();var Df=f(require("axios"));Go();t();k();t();var Rf=f(require("axios"));t();var Of=f(require("axios"));t();t();var Ff=f(require("axios"));t();var Bf=f(require("axios"));t();t();t();t();t();var Fp=require("@lifeomic/axios-fetch"),wa=f(require("axios")),va=(0,Fp.buildAxiosFetch)(wa.default),Ia=(e,o)=>y(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Wf(e,o,n){return y(this,null,function*(){try{let r=yield va(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return Ia(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function Uf(e,o){return y(this,null,function*(){try{let n=yield va(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return Ia(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function Gf(e,o,n){return y(this,null,function*(){try{let r=yield va(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Ia(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var jo=wa.default.create();jo.get=Uf;jo.post=Wf;jo.patch=Gf;t();t();var Vf=f(require("axios"));t();var Hf=f(require("swr"));t();t();t();t();t();Go();t();var jf=f(require("axios"));t();var Kf=f(require("axios"));t();Go();t();Go();t();t();t();t();var Yf=f(require("axios"));t();k();t();t();var zo=f(require("react")),zn=require("@fortawesome/free-solid-svg-icons"),Ca=require("@fortawesome/react-fontawesome"),Gp=f(require("classnames"));t();To();function Zf(e){let o=!1,n=document==null?void 0:document.createElement("textarea");n.value=e,n.style.position="fixed",document==null||document.body.appendChild(n),n.focus(),n.select();try{document==null||document.execCommand("copy"),o=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(n),o}function Wp(e){return y(this,null,function*(){if(!Ue())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):o=Zf(e),o})}var Qf=({text:e,className:o="dapp-copy-button",copyIcon:n=zn.faCopy,successIcon:r=zn.faCheck,styles:c})=>{let[p,m]=(0,zo.useState)({default:!0,success:!1});return zo.default.createElement("a",{href:"/#",onClick:l=>y(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let _=e&&e.trim();m({default:!1,success:yield Wp(_)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,Gp.default)(c==null?void 0:c.copy,o)},p.default||!p.success?zo.default.createElement(Ca.FontAwesomeIcon,{icon:n}):zo.default.createElement(Ca.FontAwesomeIcon,{icon:r}))},Vp=I(Qf,{ssrStyles:()=>Promise.resolve().then(()=>(La(),ka)),clientStyles:()=>(La(),E(ka)).default});t();t();var Ea=f(require("react")),$p=require("@fortawesome/free-solid-svg-icons"),qp=require("@fortawesome/react-fontawesome"),jp=f(require("classnames"));t();var Ko=()=>C(fe);var oT=l=>{var _=l,{page:e,text:o,className:n="dapp-explorer-link",children:r,globalStyles:c,customExplorerIcon:p,styles:m}=_,d=Oe(_,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:T}}=Ko(),h=o!=null?o:Ea.default.createElement(qp.FontAwesomeIcon,{icon:p!=null?p:$p.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),b=no({explorerAddress:String(T),to:e});return Ea.default.createElement("a",u({href:b,target:"_blank",className:(0,jp.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,n),rel:"noreferrer"},d),r!=null?r:h)},ao=I(oT,{ssrStyles:()=>Promise.resolve().then(()=>(Na(),Pa)),clientStyles:()=>(Na(),E(Pa)).default});t();t();var $=f(require("react")),Fl=f(require("classnames"));k();t();t();var zp=require("react");t();R();t();t();t();t();t();t();t();t();var nT=require("@multiversx/sdk-extension-provider"),rT=require("@multiversx/sdk-hw-provider"),aT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),iT=require("@multiversx/sdk-opera-provider"),sT=require("@multiversx/sdk-passkey-provider/out"),cT=require("@multiversx/sdk-web-wallet-provider");k();Ye();t();var Xo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Kp=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");M();t();var ye=e=>`Unable to perform ${e}, Provider not initialized`,Kn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ye("getAccount"))}setAccount(o){throw new Error(ye(`setAccount: ${o}`))}login(o){throw new Error(ye(`login with options: ${o}`))}logout(o){throw new Error(ye(`logout with options: ${o}`))}getAddress(){throw new Error(ye("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(ye(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(ye(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(ye(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(ye(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(ye(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(ye(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Xp=new Kn;R();t();t();M();t();t();t();Y();t();to();t();R();M();t();t();t();t();Y();t();B();O();t();R();t();var Jp=require("@multiversx/sdk-core");O();J();t();to();t();R();M();t();R();O();t();t();t();O();t();Jt();t();t();t();t();var dT=f(require("swr"));t();t();t();function Qp(e){return C(o=>Vc(o,e))}t();var em=require("react");t();t();var lT=require("react"),_T=require("@multiversx/sdk-web-wallet-provider"),uT=require("@multiversx/sdk-web-wallet-provider"),gT=f(require("qs"));k();R();M();vr();Y();var I5=H();t();var Am=require("react"),Ba=require("@multiversx/sdk-core");k();jr();t();t();t();t();t();t();t();t();t();t();var TT=require("@multiversx/sdk-opera-provider");t();var hT=require("@multiversx/sdk-extension-provider");t();Ye();t();t();t();t();var HT=f(Sm());t();var zT=require("@multiversx/sdk-native-auth-client");t();var Im=f(require("axios"));t();t();t();function wm(e){return y(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var vm=(e,o,n,r=0)=>y(void 0,null,function*(){try{return yield e(...n)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield wm(o.delay)),yield vm(e,o,n,r+1)):null}}),Oa=(e,o={retries:5,delay:500})=>(...n)=>y(void 0,null,function*(){return yield vm(e,o,n)});var $T=4;var gO=Oa((e,o,n)=>y(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield Im.default.get(`${e}/${Fn}?from=${$T}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));t();t();pt();t();t();Y();var IO={origin:H().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};t();var XT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();var YT=require("@multiversx/sdk-passkey-provider/out");k();Y();t();t();t();var th=require("react"),nh=require("@multiversx/sdk-hw-provider");t();B();O();t();ut();xo();Wo();J();t();t();var gl=require("react"),fl=require("@multiversx/sdk-core"),$y=require("@multiversx/sdk-extension-provider"),qy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),jy=require("@multiversx/sdk-passkey-provider/out"),zy=f(dl());k();t();t();t();t();t();t();t();t();t();var Et=f(require("react"));var cB=(0,Et.createContext)({}),pB=P.getState();t();var _l=f(require("react"));t();var Va=f(require("react")),ky=f(require("axios"));t();t();Ye();t();t();var Dy=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Ry=require("@multiversx/sdk-webview-provider/out/WebviewProvider");B();t();B();R();O();t();t();R();t();J();t();R();O();t();t();var Cy=require("@multiversx/sdk-core"),Py=f(require("bignumber.js"));k();t();var Ny=f(require("bignumber.js"));k();R();M();J();Y();t();var ul=require("react"),By=require("@multiversx/sdk-extension-provider"),Wy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Uy=require("@multiversx/sdk-passkey-provider/out");Ye();R();t();R();O();ut();Y();t();Ce();R();t();t();var Xy=require("react");t();t();M();to();t();var or=require("react"),Tl=(e,o)=>{let[n,r]=(0,or.useState)(e);return(0,or.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),n};t();t();var Zy=require("react"),Jy=require("@multiversx/sdk-extension-provider");Ce();B();M();t();Ge();J();J();t();t();Ye();O();t();var Yy=require("react"),hl=require("@multiversx/sdk-core");R();t();var Qy=require("react"),eb=require("@multiversx/sdk-opera-provider");Ce();B();M();Ge();J();Y();t();var ob=require("react");Br();Ce();Ye();B();R();M();Ge();Y();t();var sb=require("react");Ce();R();t();t();Xt();t();t();var tb=f(require("platform"));To();t();t();t();t();function xl(){return ca(P.getState())}t();t();dt();M();t();t();var nb=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();ut();xo();t();t();t();R();var rb={};var yl=e=>rb[e];t();t();var ab=f(require("axios"));J();t();t();var ib=f(Jn());dt();var bl,Sl,wl,XV=(wl=(Sl=(bl=yo.safeWindow)==null?void 0:bl.location)==null?void 0:Sl.origin)==null?void 0:wl.includes("localhost");t();Y();t();t();var fb=require("react");k();t();t();k();t();t();t();var cb=f(require("bignumber.js"));t();t();t();var so=f(require("react")),Pl=require("react"),Nl=require("react"),za=f(require("classnames")),El=require("react-dom");k();t();var Il=f(require("react")),Al=f(require("classnames"));var mb=({className:e,children:o,styles:n})=>Il.default.createElement("div",{className:(0,Al.default)(n==null?void 0:n.dappModalBody,e)},o),Ha=I(mb,{ssrStyles:()=>Promise.resolve().then(()=>(qe(),$e)),clientStyles:()=>(qe(),E($e)).default});t();var $a=f(require("react")),kl=f(require("classnames"));var db=({visible:e,customFooter:o,className:n,footerText:r,styles:c})=>e?$a.default.createElement("div",{className:(0,kl.default)(c==null?void 0:c.dappModalFooter,n)},o!=null?o:$a.default.createElement("div",null,r)):null,qa=I(db,{ssrStyles:()=>Promise.resolve().then(()=>(qe(),$e)),clientStyles:()=>(qe(),E($e)).default});t();var ot=f(require("react")),Ll=require("@fortawesome/free-solid-svg-icons"),Cl=require("@fortawesome/react-fontawesome"),Rt=f(require("classnames"));var lb=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?n?ot.default.createElement("div",{className:(0,Rt.default)(l==null?void 0:l.dappModalHeader,r)},n):ot.default.createElement("div",{className:(0,Rt.default)(l==null?void 0:l.dappModalHeader,r)},ot.default.createElement("div",{className:(0,Rt.default)(l==null?void 0:l.dappModalHeaderText,p)},o),ot.default.createElement("button",{onClick:m,className:(0,Rt.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},ot.default.createElement(Cl.FontAwesomeIcon,{size:"lg",icon:Ll.faTimes}))):null,ja=I(lb,{ssrStyles:()=>Promise.resolve().then(()=>(qe(),$e)),clientStyles:()=>(qe(),E($e)).default});var _b={showHeader:!0,showFooter:!1,headerText:"",footerText:""},ub=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=_b,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[T,h]=(0,Pl.useState)(!1);if((0,Nl.useEffect)(()=>{h(!0)},[]),!l)return null;let{showHeader:b,showFooter:L,headerText:N,footerText:D,modalDialogClassName:W="dapp-modal-dialog",modalContentClassName:ne="dapp-modal-dialog-content",modalHeaderClassName:q="dapp-modal-dialog-header",modalHeaderTextClassName:Z="dapp-modal-dialog-header-text",modalCloseButtonClassName:A="dapp-modal-dialog-close-button",modalBodyClassName:G="dapp-modal-dialog-content-body",modalFooterClassName:K="dapp-modal-dialog-footer",customModalHeader:it,customModalFooter:lo}=c,mr=dr=>{dr.key==="Escape"&&r&&(m==null||m())};return so.default.createElement(so.default.Fragment,null,T&&(0,El.createPortal)(so.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,za.default)(W,_==null?void 0:_.dappModal,n),"data-testid":e,onKeyDown:mr},so.default.createElement("div",{className:(0,za.default)(_==null?void 0:_.dappModalContent,ne)},so.default.createElement(ja,{visible:b,headerText:N,customHeader:it,className:q,headerTextClassName:Z,closeButtonClassName:A,onHide:m}),so.default.createElement(Ha,{className:G},o),so.default.createElement(qa,{visible:L,customFooter:lo,footerText:D,className:K}))),d!=null?d:document==null?void 0:document.body))},gb=I(ub,{ssrStyles:()=>Promise.resolve().then(()=>(qe(),$e)),clientStyles:()=>(qe(),E($e)).default});t();t();var Dl=require("react");t();t();var Rl=require("react"),hb=require("@multiversx/sdk-hw-provider");Ce();B();R();M();Ge();t();var Tb=require("react");t();t();var Ka=require("react");B();R();M();Ge();Y();t();var yb=require("react"),bb=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Ce();B();M();Ge();J();J();t();var Sb=require("react"),wb=require("@multiversx/sdk-passkey-provider/out");Ce();B();M();Ge();J();J();t();t();var Ml=require("react");t();var Ab=require("react");t();var Xa=require("react"),Ib=require("socket.io-client");R();t();t();t();var kb=require("react");O();t();t();t();var Lb=f(require("swr"));var Pb=({text:e,className:o="dapp-trim","data-testid":n="trim-text-component",color:r,styles:c})=>{let[p,m]=(0,$.useState)(0),[d,l]=(0,$.useState)(!1),_=(0,$.useRef)(document==null?void 0:document.createElement("span")),T=(0,$.useRef)(document==null?void 0:document.createElement("span")),h=Tl(p,300),b=()=>{if(_.current&&T.current){let D=T.current.offsetWidth-_.current.offsetWidth;l(D>1)}},L=()=>{m(p+1)};return(0,$.useEffect)(()=>(window==null||window.addEventListener("resize",L),()=>{window==null||window.removeEventListener("resize",L)})),(0,$.useEffect)(()=>{b()},[h]),$.default.createElement("span",{ref:_,className:(0,Fl.default)(c==null?void 0:c.trim,r,o,{overflow:d}),"data-testid":n},$.default.createElement("span",{ref:T,className:c==null?void 0:c.hiddenTextRef},e),d?$.default.createElement($.default.Fragment,null,$.default.createElement("span",{className:c==null?void 0:c.left},$.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),$.default.createElement("span",{className:c==null?void 0:c.ellipsis},Ts),$.default.createElement("span",{className:c==null?void 0:c.right},$.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):$.default.createElement("span",null,e))},Bl=I(Pb,{ssrStyles:()=>Promise.resolve().then(()=>(Za(),Ya)),clientStyles:()=>(Za(),E(Ya)).default});var Eb={icon:tt.faCheck},Ja={icon:tt.faTimes},Db={icon:tt.faCircleNotch},Rb={pending:Db,success:Eb,fail:Ja,invalid:Ja,timedOut:Ja},Mb=({className:e,hash:o,status:n,iconSrc:r,isTimedOut:c,globalStyles:p,styles:m})=>{var _;let d=n?Rb[n]:null,l=(_=r==null?void 0:r.icon)!=null?_:d==null?void 0:d.icon;return Po.default.createElement("div",{className:(0,Qa.default)(m==null?void 0:m.container,e),key:o,"data-testid":"transactionDetailsToastBody"},!c&&l!=null&&Po.default.createElement(Ul.FontAwesomeIcon,{icon:l,className:(0,Qa.default)(m==null?void 0:m.icon,{"fa-spin slow-spin":n==="pending"})}),Po.default.createElement("span",{className:m==null?void 0:m.trim},Po.default.createElement(Bl,{text:o})),Po.default.createElement(Vp,{text:o}),Po.default.createElement(ao,{page:`/${me}/${o}`,className:p==null?void 0:p.ml2}))},tr=I(Mb,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),je)),clientStyles:()=>(ze(),E(je)).default});var Ob=({title:e,transactions:o,isTimedOut:n=!1,className:r="dapp-transaction-details",styles:c})=>{if(o==null)return null;let{address:p}=xe(),m=(0,co.useMemo)(()=>{let l=o.filter(T=>!bn(le[T==null?void 0:T.status])).length,_=o.length;return _===1&&l===1?bn(le[o[0].status])?"Processing transaction":"Transaction processed":`${l} / ${_} transactions processed`},[o]),d=o.length===1&&o[0].sender!==p;return co.default.createElement(co.default.Fragment,null,e&&co.default.createElement("div",{className:c==null?void 0:c.title},e),!d&&co.default.createElement("div",{className:c==null?void 0:c.status},m),o.map(({hash:l,status:_})=>{let T={className:r,hash:l,status:le[_],isTimedOut:n};return co.default.createElement(tr,v(u({},T),{key:l}))}))},Gl=I(Ob,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),je)),clientStyles:()=>(ze(),E(je)).default});var Bb=({style:e,toastDataState:o,transactions:n,showCloseButton:r,onDeleteToast:c,toastTitle:p,isTimedOut:m,customElements:d={CustomCloseButton:tn,TransactionToastStatusIcon:Hl.FontAwesomeIcon,TransactionDetails:Gl},globalStyles:l,styles:_})=>{let T=d==null?void 0:d.TransactionDetails,h=d==null?void 0:d.TransactionToastStatusIcon,b=d==null?void 0:d.CustomCloseButton;return we.default.createElement("div",{className:e.content,"data-testid":"transactionToastContent"},we.default.createElement("div",{className:e.left},we.default.createElement("div",{className:(0,ei.default)(e.icon,o.iconClassName)},h&&we.default.createElement(h,{size:"5x",icon:o.icon,className:e.svg}))),we.default.createElement("div",{className:e.right},we.default.createElement("div",{className:e.heading},we.default.createElement("h5",{className:(0,ei.default)([l==null?void 0:l.h5,e.mb4]),"data-testid":"transactionToastTitle"},o.title),r&&b&&we.default.createElement(b,{className:_==null?void 0:_.close,onClick:c})),we.default.createElement("div",{className:e.footer},T&&we.default.createElement(T,{transactions:n,title:p,isTimedOut:m}))))},$l=I(Bb,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),E(be)).default});t();var jl=f(require("react")),zl=f(require("classnames"));var Ub=({className:e="dapp-transaction-toast-wrapper",children:o,id:n,styles:r})=>jl.default.createElement("div",{id:n,className:(0,zl.default)(r==null?void 0:r.toasts,r==null?void 0:r.toastWrapper,e)},o),nr=I(Ub,{ssrStyles:()=>Promise.resolve().then(()=>(Eo(),No)),clientStyles:()=>(Eo(),E(No)).default});t();var Do=require("react");k();pt();Cr();to();t();t();var Re=require("@fortawesome/free-solid-svg-icons");O();var Kl=({address:e,classes:o={success:"success",danger:"danger",warning:"warning"},sender:n,status:r,toastId:c,transactionDisplayInfo:p})=>{var b,L,N,D,W;let m={id:c,icon:Re.faCheck,expires:3e4,hasCloseButton:!0,title:(b=p==null?void 0:p.successMessage)!=null?b:"Transaction successful",iconClassName:o.success},d={id:c,icon:Re.faCheck,expires:3e4,hasCloseButton:!0,title:"Transaction received",iconClassName:o.success},l={id:c,expires:!1,icon:Re.faHourglass,hasCloseButton:!1,title:(L=p==null?void 0:p.processingMessage)!=null?L:"Processing transaction",iconClassName:o.warning},_={id:c,icon:Re.faTimes,title:(N=p==null?void 0:p.errorMessage)!=null?N:"Transaction failed",hasCloseButton:!0,iconClassName:o.danger},T={id:c,icon:Re.faBan,title:(D=p==null?void 0:p.invalidMessage)!=null?D:"Transaction invalid",hasCloseButton:!0,iconClassName:o==null?void 0:o.warning},h={id:c,icon:Re.faTimes,title:(W=p==null?void 0:p.timedOutMessage)!=null?W:"Transaction timed out",hasCloseButton:!0,iconClassName:o.warning};switch(r){case"signed":case"sent":return l;case"success":return n!==e?d:m;case"cancelled":case"fail":return _;case"timedOut":return h;case"invalid":return T;default:return l}};var Xl=({toastId:e,transactions:o,status:n,lifetimeAfterSuccess:r,startTimestamp:c,endTimeProgress:p,onDelete:m})=>{let{styles:d}=Bo({ssrImportCallback:()=>Promise.resolve().then(()=>(Se(),be)),clientImportCallback:()=>(Se(),E(be)).default}),l=Qp(e),_=C(Nc),{address:T}=xe(),h=(0,Do.useRef)(),b=(0,Do.useMemo)(()=>zc(o,_),[o,_]),L=b?6e3:5*6e3,N=(l==null?void 0:l.transactionDuration)||L,[D,W]=(0,Do.useMemo)(()=>{let mr=c||ho(),dr=p||ji(N);return[mr,dr]},[]),ne={startTime:D,endTime:W},q=Qe(n),Z=oo(n),A=eo(n),G=gt(n),K=Z||A||G,it=Kl({address:T,classes:d!=null?d:{},sender:(o==null?void 0:o[0].sender)||T,status:n,toastId:e,transactionDisplayInfo:l}),lo=()=>{m==null||m(e)};return(0,Do.useEffect)(()=>{if(!(!K||!r||h.current))return h.current=setTimeout(()=>{lo()},r),()=>{h.current&&(lo(),clearTimeout(h.current))}},[r,K]),{isCrossShard:!b,progress:ne,isPending:q,isTimedOut:G,toastDataState:it,handleDeleteToast:lo}};var Vb=({className:e="dapp-transaction-toast",customization:o,endTimeProgress:n,lifetimeAfterSuccess:r,onDelete:c,startTimestamp:p,status:m,styles:d,title:l="",toastId:_,transactions:T})=>{var Z,A;let{isCrossShard:h,progress:b,isPending:L,isTimedOut:N,toastDataState:D,handleDeleteToast:W}=Xl({toastId:_,transactions:T,status:m,lifetimeAfterSuccess:r,startTimestamp:p,endTimeProgress:n,onDelete:c}),ne=(Z=o==null?void 0:o.Progress)!=null?Z:ns,q=(A=o==null?void 0:o.TransactionToastContent)!=null?A:$l;return rr.default.createElement(nr,{className:e,id:`toast-${_}`},rr.default.createElement(ne,{key:_,id:_,progress:b,expiresIn:r,done:!L||N,isCrossShard:h},rr.default.createElement(q,{customElements:o==null?void 0:o.TransactionToastContentCustomElements,isTimedOut:N,onDeleteToast:W,showCloseButton:!L,style:d!=null?d:{},toastDataState:D,toastTitle:l,transactions:T!=null?T:[]})))},Yl=I(Vb,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),E(be)).default});t();t();var ar=f(require("react")),o_=f(require("classnames"));t();t();var Zl=require("react"),Jl=({duration:e,onDelete:o})=>{(0,Zl.useEffect)(()=>{let n;return e&&(n=setTimeout(o,e)),()=>{clearTimeout(n)}},[e])};t();var Mt=f(require("react"));var nt=({CustomCloseButton:e,onDelete:o})=>{let{styles:n}=Bo({ssrImportCallback:()=>Promise.resolve().then(()=>(ti(),oi)),clientImportCallback:()=>(ti(),E(oi)).default});return(0,Mt.useMemo)(()=>e?Mt.default.createElement(e,{onClick:o}):Mt.default.createElement(tn,{onClick:o,className:n==null?void 0:n.close}),[e,o,n])};t();function e_(e){var o;try{let n=e,r=Ho(v(u({},n),{chainID:(o=n.chainID)!=null?o:"D"}));return Boolean(r)}catch(n){return!1}}var $b=({onDelete:e,message:o,messageComponent:n,CustomCloseButton:r,className:c="dapp-custom-toast",toastId:p,styles:m})=>{let d=nt({onDelete:e,CustomCloseButton:r});return ar.default.createElement("div",{id:p,className:(0,o_.default)(m==null?void 0:m.toasts,m==null?void 0:m.toastWrapper,c)},ar.default.createElement(ar.default.Fragment,null,d,n||o))},t_=I($b,{ssrStyles:()=>Promise.resolve().then(()=>(Eo(),No)),clientStyles:()=>(Eo(),E(No)).default});t();t();var Me=f(require("react")),w_=require("@fortawesome/free-solid-svg-icons"),v_=require("@fortawesome/react-fontawesome"),ci=f(require("classnames"));t();t();var Vt=f(require("react"));t();t();var Gt=f(require("react"));t();t();var ve=f(require("react")),u_=require("@fortawesome/free-solid-svg-icons"),g_=require("@fortawesome/react-fontawesome"),ii=f(require("classnames"));k();t();t();var po=f(require("react")),r_=f(require("classnames"));k();var jb=e=>{var n;let o=(n=e.styles)!=null?n:{};return po.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},po.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},zb=(e,o)=>{var L,N,D;let{value:n,showLastNonZeroDecimal:r=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:bo,m=e.decimals!=null?e.decimals:z,d=(L=e.styles)!=null?L:{},l=(N=e.globalStyles)!=null?N:{},_=he({input:n,decimals:m,digits:p,showLastNonZeroDecimal:r,addCommas:!0}),T=_.split("."),h=T.length===1,b=_!==Ne;if(p>0&&h&&b){let W="";for(let ne=1;ne<=p;ne++)W=W+Ne;T.push(W)}return po.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},po.default.createElement("span",{className:d["int-amount"],"data-testid":"formatAmountInt"},T[0]),T.length>1&&po.default.createElement("span",{className:d.decimals,"data-testid":"formatAmountDecimals"},".",T[1]),c&&po.default.createElement("span",{className:(0,r_.default)(d.symbol,e.token&&l.textMuted),"data-testid":"formatAmountSymbol"},` ${(D=e.token)!=null?D:o}`))},Kb=e=>{let{value:o}=e;return St(o)?zb(e,e.egldLabel||""):jb(e)},Xb=e=>{let o=e.egldLabel||xl(),n=v(u({},e),{egldLabel:o});return po.default.createElement(Kb,u({},n))},rt=I(Xb,{ssrStyles:()=>Promise.resolve().then(()=>(ri(),ni)),clientStyles:()=>(ri(),E(ni)).default});t();t();t();var Bt=f(require("react")),ir=f(require("classnames"));var Zb=({token:e,globalStyles:o,styles:n})=>e.collection?Bt.default.createElement(ao,{page:ue.collectionDetails(e.collection),className:(0,ir.default)(n==null?void 0:n.transactionActionCollection)},Bt.default.createElement("div",{className:(0,ir.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter)},e.svgUrl&&Bt.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,ir.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1)}),Bt.default.createElement("span",null,e.ticker))):null,i_=I(Zb,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Ot)),clientStyles:()=>(Ft(),E(Ot)).default});t();var Ke=f(require("react")),at=f(require("classnames"));k();t();var s_=f(require("react")),c_=f(require("classnames"));var Jb=({text:e,className:o,"data-testid":n="nftBadge",globalStyles:r})=>s_.default.createElement("div",{"data-testid":n,className:(0,c_.default)(r==null?void 0:r.badge,r==null?void 0:r.badgeSecondary,r==null?void 0:r.badgePill,r==null?void 0:r.fontWeightLight,o)},e),p_=I(Jb,{});var Qb=({badgeText:e,tokenFormattedAmount:o,tokenExplorerLink:n,tokenLinkText:r,token:c,showLastNonZeroDecimal:p,globalStyles:m,styles:d})=>{var l,_,T,h,b;return c.identifier?Ke.default.createElement("div",{className:d==null?void 0:d.transactionActionNft},e!=null&&Ke.default.createElement(p_,{text:e,className:(0,at.default)(m==null?void 0:m.mr1,m==null?void 0:m.myAuto)}),o!=null&&Ke.default.createElement("div",{className:(0,at.default)(m==null?void 0:m.mr1,{[(l=m==null?void 0:m.textTruncate)!=null?l:""]:c.svgUrl})},Ke.default.createElement(rt,{value:c.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:c.decimals,"data-testid":"nftFormattedAmount"})),Ke.default.createElement(ao,{page:n,"data-testid":"nftExplorerLink",className:(0,at.default)(d==null?void 0:d.explorer,{[(_=m==null?void 0:m.sideLink)!=null?_:""]:c.svgUrl,[(T=m==null?void 0:m.dFlex)!=null?T:""]:c.svgUrl,[(h=m==null?void 0:m.textTruncate)!=null?h:""]:!c.svgUrl})},Ke.default.createElement("div",{className:d==null?void 0:d.data},c.svgUrl&&Ke.default.createElement("img",{src:c.svgUrl,alt:c.name,className:(0,at.default)(m==null?void 0:m.sideIcon,m==null?void 0:m.mr1)}),Ke.default.createElement("span",{className:(0,at.default)({[(b=d==null?void 0:d.truncate)!=null?b:""]:c.ticker===c.collection})},r)))):null},m_=I(Qb,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Ot)),clientStyles:()=>(Ft(),E(Ot)).default});t();var Xe=f(require("react")),sr=f(require("classnames"));k();var eS=({tokenExplorerLink:e,showFormattedAmount:o,tokenLinkText:n,token:r,showLastNonZeroDecimal:c,globalStyles:p})=>{var m,d;return r.token?Xe.default.createElement(Xe.default.Fragment,null,o&&Xe.default.createElement("div",{className:p==null?void 0:p.textTruncate},Xe.default.createElement(rt,{value:r.value,digits:2,showLabel:!1,decimals:(m=r.decimals)!=null?m:z,showLastNonZeroDecimal:c,"data-testid":"tokenFormattedAmount"})),Xe.default.createElement(ao,{page:e,"data-testid":"tokenExplorerLink",className:(0,sr.default)(p==null?void 0:p.dFlex,{[(d=p==null?void 0:p.sideLink)!=null?d:""]:r.svgUrl})},Xe.default.createElement("div",{className:(0,sr.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},r.svgUrl&&Xe.default.createElement("img",{src:r.svgUrl,alt:r.name,className:(0,sr.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),Xe.default.createElement("span",null,n)))):null},d_=I(eS,{});var ai={Collection:i_,Nft:m_,Token:d_};var tS=({children:e,titleText:o,globalStyles:n})=>ve.default.createElement("div",{className:(0,ii.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter),"data-testid":"transactionValue"},e,o&&ve.default.createElement(g_.FontAwesomeIcon,{icon:u_.faLayerGroup,"data-testid":"transactionValueIcon",className:(0,ii.default)(n==null?void 0:n.ml2,n==null?void 0:n.textSecondary),title:o})),__=I(tS,{ssrStyles:()=>Promise.resolve().then(()=>(Ut(),Wt)),clientStyles:()=>(Ut(),E(Wt)).default}),nS=({transaction:e,hideMultipleBadge:o,styles:n})=>{let{egldValueData:r,tokenValueData:c,nftValueData:p}=Ap({transaction:e,hideMultipleBadge:o});if(c)return ve.default.createElement("div",{className:n==null?void 0:n.transactionCell},ve.default.createElement(__,{titleText:c.titleText},ve.default.createElement(ai.Token,u({},c))));if(p){let d=p.token.type==="MetaESDT"?null:p.badgeText;return ve.default.createElement("div",{className:n==null?void 0:n.transactionCell},ve.default.createElement(__,{titleText:p.titleText},ve.default.createElement(ai.Nft,v(u({},p),{badgeText:d}))))}return r?ve.default.createElement("div",{className:n==null?void 0:n.transactionCell},ve.default.createElement(rt,{value:r.value,digits:2,"data-testid":"transactionValue"})):null},f_=I(nS,{ssrStyles:()=>Promise.resolve().then(()=>(Ut(),Wt)),clientStyles:()=>(Ut(),E(Wt)).default});t();var T_=f(require("react"));var rS=({children:e,styles:o})=>T_.default.createElement("div",{className:o==null?void 0:o.footer},e),mo=I(rS,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),E(be)).default});var aS=e=>{var m;let{className:o,transaction:n}=e,{address:r}=xe(),{network:{explorerAddress:c}}=Ko(),p=kp({transaction:n,address:r!=null?r:"",explorerAddress:c});return Gt.default.createElement(mo,null,Gt.default.createElement("div",{className:(m=e.styles)==null?void 0:m.status},Gt.default.createElement(f_,{transaction:p})),Gt.default.createElement(tr,{className:o,hash:p.txHash,status:p.status}))},h_=I(aS,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),je)),clientStyles:()=>(ze(),E(je)).default});t();var cr=f(require("react")),x_=f(require("classnames"));var iS=e=>{var c,p;let{className:o,message:n,status:r}=e;return cr.default.createElement(mo,null,r&&cr.default.createElement("div",{className:(c=e.styles)==null?void 0:c.status},r),cr.default.createElement("div",{className:(0,x_.default)((p=e.styles)==null?void 0:p.container,o)},n))},y_=I(iS,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),je)),clientStyles:()=>(ze(),E(je)).default});t();var si=f(require("react"));var b_=e=>{let o=yl(e.toastId);return si.default.createElement(mo,u({},e),o&&si.default.createElement(o,null))};var S_=e=>{let{transaction:o,message:n,component:r}=e;return o&&e_(o)?Vt.default.createElement(h_,u({},e)):n?Vt.default.createElement(y_,u({},e)):r!==void 0?Vt.default.createElement(b_,u({},e)):Vt.default.createElement(mo,null)};var sS=e=>{let{className:o="dapp-custom-toast",onDelete:n,icon:r=w_.faInfo,iconClassName:c,title:p="",toastId:m,CustomCloseButton:d,globalStyles:l,styles:_}=e,T=nt({onDelete:n,CustomCloseButton:d});return Me.default.createElement(nr,{className:o,id:m},Me.default.createElement("div",{className:_==null?void 0:_.content},Me.default.createElement("div",{className:_==null?void 0:_.left},Me.default.createElement("div",{className:(0,ci.default)(_==null?void 0:_.icon,c)},r&&Me.default.createElement(v_.FontAwesomeIcon,{size:"5x",icon:r,className:_==null?void 0:_.svg}))),Me.default.createElement("div",{className:_==null?void 0:_.right},Me.default.createElement("div",{className:_==null?void 0:_.heading},Me.default.createElement("h5",{className:(0,ci.default)([l==null?void 0:l.h5,_==null?void 0:_.mb4])},p),T),Me.default.createElement(S_,u({},e)))))},I_=I(sS,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),E(be)).default});t();var pr=f(require("react")),A_=f(require("classnames"));var cS=({onDelete:e,message:o,component:n,CustomCloseButton:r,className:c="dapp-custom-toast",toastId:p,styles:m})=>{let d=nt({onDelete:e,CustomCloseButton:r});return pr.default.createElement("div",{id:p,className:(0,A_.default)(m==null?void 0:m.toasts,m==null?void 0:m.toastWrapper,c)},pr.default.createElement(pr.default.Fragment,null,d,n?n():o))},k_=I(cS,{ssrStyles:()=>Promise.resolve().then(()=>(Eo(),No)),clientStyles:()=>(Eo(),E(No)).default});var pS=e=>{let{duration:o,onDelete:n}=e;if(Jl({duration:o,onDelete:n}),e.component)return Ht.default.createElement(k_,u({},e));if(e.transaction){let r=e.transaction,c=e.transaction,p=r.txHash||c.hash;return Ht.default.createElement(Yl,v(u({},e),{status:re[e.transaction.status],transactions:[v(u({},c),{hash:p})]}))}return e.icon?Ht.default.createElement(I_,u({},e)):Ht.default.createElement(t_,u({},e))};0&&(module.exports={CustomToast});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=CustomToast.js.map
