"use strict";var Lu=Object.create;var qn=Object.defineProperty,Pu=Object.defineProperties,Eu=Object.getOwnPropertyDescriptor,Cu=Object.getOwnPropertyDescriptors,Nu=Object.getOwnPropertyNames,Lt=Object.getOwnPropertySymbols,Ru=Object.getPrototypeOf,ea=Object.prototype.hasOwnProperty,Xi=Object.prototype.propertyIsEnumerable;var Ki=(e,o,n)=>o in e?qn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,f=(e,o)=>{for(var n in o||(o={}))ea.call(o,n)&&Ki(e,n,o[n]);if(Lt)for(var n of Lt(o))Xi.call(o,n)&&Ki(e,n,o[n]);return e},I=(e,o)=>Pu(e,Cu(o));var oa=e=>typeof e=="symbol"?e:e+"",De=(e,o)=>{var n={};for(var r in e)ea.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Lt)for(var r of Lt(e))o.indexOf(r)<0&&Xi.call(e,r)&&(n[r]=e[r]);return n};var b=(e,o)=>()=>(e&&(o=e(e=0)),o);var A=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Je=(e,o)=>{for(var n in o)qn(e,n,{get:o[n],enumerable:!0})},Yi=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Nu(o))!ea.call(e,c)&&c!==n&&qn(e,c,{get:()=>o[c],enumerable:!(r=Eu(o,c))||r.enumerable});return e};var w=(e,o,n)=>(n=e!=null?Lu(Ru(e)):{},Yi(o||!e||!e.__esModule?qn(n,"default",{value:e,enumerable:!0}):n,e)),Me=e=>Yi(qn({},"__esModule",{value:!0}),e);var g=(e,o,n)=>new Promise((r,c)=>{var p=l=>{try{d(n.next(l))}catch(_){c(_)}},m=l=>{try{d(n.throw(l))}catch(_){c(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var Qi=A(Pt=>{"use strict";t();Pt.byteLength=Mu;Pt.toByteArray=Bu;Pt.fromByteArray=Wu;var Oe=[],ye=[],Du=typeof Uint8Array!="undefined"?Uint8Array:Array,na="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(No=0,Ji=na.length;No<Ji;++No)Oe[No]=na[No],ye[na.charCodeAt(No)]=No;var No,Ji;ye["-".charCodeAt(0)]=62;ye["_".charCodeAt(0)]=63;function Zi(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function Mu(e){var o=Zi(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Ou(e,o,n){return(o+n)*3/4-n}function Bu(e){var o,n=Zi(e),r=n[0],c=n[1],p=new Du(Ou(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=ye[e.charCodeAt(l)]<<18|ye[e.charCodeAt(l+1)]<<12|ye[e.charCodeAt(l+2)]<<6|ye[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ye[e.charCodeAt(l)]<<2|ye[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ye[e.charCodeAt(l)]<<10|ye[e.charCodeAt(l+1)]<<4|ye[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Fu(e){return Oe[e>>18&63]+Oe[e>>12&63]+Oe[e>>6&63]+Oe[e&63]}function Uu(e,o,n){for(var r,c=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Fu(r));return c.join("")}function Wu(e){for(var o,n=e.length,r=n%3,c=[],p=16383,m=0,d=n-r;m<d;m+=p)c.push(Uu(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],c.push(Oe[o>>2]+Oe[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],c.push(Oe[o>>10]+Oe[o>>4&63]+Oe[o<<2&63]+"=")),c.join("")}});var es=A(ta=>{t();ta.read=function(e,o,n,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,_=l>>1,T=-7,u=n?c-1:0,x=n?-1:1,L=e[o+u];for(u+=x,p=L&(1<<-T)-1,L>>=-T,T+=d;T>0;p=p*256+e[o+u],u+=x,T-=8);for(m=p&(1<<-T)-1,p>>=-T,T+=r;T>0;m=m*256+e[o+u],u+=x,T-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(L?-1:1)*m*Math.pow(2,p-r)};ta.write=function(e,o,n,r,c,p){var m,d,l,_=p*8-c-1,T=(1<<_)-1,u=T>>1,x=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=r?0:p-1,k=r?1:-1,P=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=T):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+u>=1?o+=x/l:o+=x*Math.pow(2,1-u),o*l>=2&&(m++,l/=2),m+u>=T?(d=0,m=T):m+u>=1?(d=(o*l-1)*Math.pow(2,c),m=m+u):(d=o*Math.pow(2,u-1)*Math.pow(2,c),m=0));c>=8;e[n+L]=d&255,L+=k,d/=256,c-=8);for(m=m<<c|d,_+=c;_>0;e[n+L]=m&255,L+=k,m/=256,_-=8);e[n+L-k]|=P*128}});var _s=A(on=>{"use strict";t();var ra=Qi(),en=es(),os=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;on.Buffer=h;on.SlowBuffer=qu;on.INSPECT_MAX_BYTES=50;var Et=2147483647;on.kMaxLength=Et;h.TYPED_ARRAY_SUPPORT=Gu();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Gu(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function Ze(e){if(e>Et)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,h.prototype),o}function h(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ca(e)}return rs(e,o,n)}h.poolSize=8192;function rs(e,o,n){if(typeof e=="string")return Vu(e,o);if(ArrayBuffer.isView(e))return $u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Be(e,ArrayBuffer)||e&&Be(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Be(e,SharedArrayBuffer)||e&&Be(e.buffer,SharedArrayBuffer)))return ia(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return h.from(r,o,n);var c=ju(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return h.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}h.from=function(e,o,n){return rs(e,o,n)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function as(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Hu(e,o,n){return as(e),e<=0?Ze(e):o!==void 0?typeof n=="string"?Ze(e).fill(o,n):Ze(e).fill(o):Ze(e)}h.alloc=function(e,o,n){return Hu(e,o,n)};function ca(e){return as(e),Ze(e<0?0:pa(e)|0)}h.allocUnsafe=function(e){return ca(e)};h.allocUnsafeSlow=function(e){return ca(e)};function Vu(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!h.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=is(e,o)|0,r=Ze(n),c=r.write(e,o);return c!==n&&(r=r.slice(0,c)),r}function aa(e){for(var o=e.length<0?0:pa(e.length)|0,n=Ze(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function $u(e){if(Be(e,Uint8Array)){var o=new Uint8Array(e);return ia(o.buffer,o.byteOffset,o.byteLength)}return aa(e)}function ia(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,h.prototype),r}function ju(e){if(h.isBuffer(e)){var o=pa(e.length)|0,n=Ze(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||ma(e.length)?Ze(0):aa(e);if(e.type==="Buffer"&&Array.isArray(e.data))return aa(e.data)}function pa(e){if(e>=Et)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Et.toString(16)+" bytes");return e|0}function qu(e){return+e!=e&&(e=0),h.alloc(+e)}h.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==h.prototype};h.compare=function(o,n){if(Be(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),Be(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),!h.isBuffer(o)||!h.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,c=n.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==n[p]){r=o[p],c=n[p];break}return r<c?-1:c<r?1:0};h.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return h.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var c=h.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Be(m,Uint8Array))p+m.length>c.length?h.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(h.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function is(e,o){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Be(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return sa(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return ls(e).length;default:if(c)return r?-1:sa(e).length;o=(""+o).toLowerCase(),c=!0}}h.byteLength=is;function zu(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return tg(this,o,n);case"utf8":case"utf-8":return cs(this,o,n);case"ascii":return og(this,o,n);case"latin1":case"binary":return ng(this,o,n);case"base64":return Qu(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rg(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}h.prototype._isBuffer=!0;function Ro(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}h.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)Ro(this,n,n+1);return this};h.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)Ro(this,n,n+3),Ro(this,n+1,n+2);return this};h.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)Ro(this,n,n+7),Ro(this,n+1,n+6),Ro(this,n+2,n+5),Ro(this,n+3,n+4);return this};h.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?cs(this,0,o):zu.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(o){if(!h.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:h.compare(this,o)===0};h.prototype.inspect=function(){var o="",n=on.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};os&&(h.prototype[os]=h.prototype.inspect);h.prototype.compare=function(o,n,r,c,p){if(Be(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),!h.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),n<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&n>=r)return 0;if(c>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-n,l=Math.min(m,d),_=this.slice(c,p),T=o.slice(n,r),u=0;u<l;++u)if(_[u]!==T[u]){m=_[u],d=T[u];break}return m<d?-1:d<m?1:0};function ss(e,o,n,r,c){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,ma(n)&&(n=c?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(c)return-1;n=e.length-1}else if(n<0)if(c)n=0;else return-1;if(typeof o=="string"&&(o=h.from(o,r)),h.isBuffer(o))return o.length===0?-1:ns(e,o,n,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):ns(e,[o],n,r,c);throw new TypeError("val must be string, number or Buffer")}function ns(e,o,n,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(L,k){return p===1?L[k]:L.readUInt16BE(k*p)}var _;if(c){var T=-1;for(_=n;_<m;_++)if(l(e,_)===l(o,T===-1?0:_-T)){if(T===-1&&(T=_),_-T+1===d)return T*p}else T!==-1&&(_-=_-T),T=-1}else for(n+d>m&&(n=m-d),_=n;_>=0;_--){for(var u=!0,x=0;x<d;x++)if(l(e,_+x)!==l(o,x)){u=!1;break}if(u)return _}return-1}h.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};h.prototype.indexOf=function(o,n,r){return ss(this,o,n,r,!0)};h.prototype.lastIndexOf=function(o,n,r){return ss(this,o,n,r,!1)};function Ku(e,o,n,r){n=Number(n)||0;var c=e.length-n;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(ma(d))return m;e[n+m]=d}return m}function Xu(e,o,n,r){return Ct(sa(o,e.length-n),e,n,r)}function Yu(e,o,n,r){return Ct(sg(o),e,n,r)}function Ju(e,o,n,r){return Ct(ls(o),e,n,r)}function Zu(e,o,n,r){return Ct(cg(o,e.length-n),e,n,r)}h.prototype.write=function(o,n,r,c){if(n===void 0)c="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")c=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Ku(this,o,n,r);case"utf8":case"utf-8":return Xu(this,o,n,r);case"ascii":case"latin1":case"binary":return Yu(this,o,n,r);case"base64":return Ju(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Zu(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Qu(e,o,n){return o===0&&n===e.length?ra.fromByteArray(e):ra.fromByteArray(e.slice(o,n))}function cs(e,o,n){n=Math.min(e.length,n);for(var r=[],c=o;c<n;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=n){var l,_,T,u;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(u=(p&31)<<6|l&63,u>127&&(m=u));break;case 3:l=e[c+1],_=e[c+2],(l&192)===128&&(_&192)===128&&(u=(p&15)<<12|(l&63)<<6|_&63,u>2047&&(u<55296||u>57343)&&(m=u));break;case 4:l=e[c+1],_=e[c+2],T=e[c+3],(l&192)===128&&(_&192)===128&&(T&192)===128&&(u=(p&15)<<18|(l&63)<<12|(_&63)<<6|T&63,u>65535&&u<1114112&&(m=u))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return eg(r)}var ts=4096;function eg(e){var o=e.length;if(o<=ts)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=ts));return n}function og(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]&127);return r}function ng(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]);return r}function tg(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var c="",p=o;p<n;++p)c+=pg[e[p]];return c}function rg(e,o,n){for(var r=e.slice(o,n),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}h.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var c=this.subarray(o,n);return Object.setPrototypeOf(c,h.prototype),c};function ne(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return c};h.prototype.readUintBE=h.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o+--n],p=1;n>0&&(p*=256);)c+=this[o+--n]*p;return c};h.prototype.readUint8=h.prototype.readUInt8=function(o,n){return o=o>>>0,n||ne(o,1,this.length),this[o]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||ne(o,2,this.length),this[o]|this[o+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||ne(o,2,this.length),this[o]<<8|this[o+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};h.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*n)),c};h.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=n,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};h.prototype.readInt8=function(o,n){return o=o>>>0,n||ne(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};h.prototype.readInt16LE=function(o,n){o=o>>>0,n||ne(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};h.prototype.readInt16BE=function(o,n){o=o>>>0,n||ne(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};h.prototype.readInt32LE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};h.prototype.readInt32BE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};h.prototype.readFloatLE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),en.read(this,o,!0,23,4)};h.prototype.readFloatBE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),en.read(this,o,!1,23,4)};h.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||ne(o,8,this.length),en.read(this,o,!0,52,8)};h.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||ne(o,8,this.length),en.read(this,o,!1,52,8)};function de(e,o,n,r,c,p){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;de(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;de(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};h.prototype.writeUint8=h.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,1,255,0),this[n]=o&255,n+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};h.prototype.writeIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);de(this,o,n,r,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};h.prototype.writeIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);de(this,o,n,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};h.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};h.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};h.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};h.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};h.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function ps(e,o,n,r,c,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function ms(e,o,n,r,c){return o=+o,n=n>>>0,c||ps(e,o,n,4,34028234663852886e22,-34028234663852886e22),en.write(e,o,n,r,23,4),n+4}h.prototype.writeFloatLE=function(o,n,r){return ms(this,o,n,!0,r)};h.prototype.writeFloatBE=function(o,n,r){return ms(this,o,n,!1,r)};function ds(e,o,n,r,c){return o=+o,n=n>>>0,c||ps(e,o,n,8,17976931348623157e292,-17976931348623157e292),en.write(e,o,n,r,52,8),n+8}h.prototype.writeDoubleLE=function(o,n,r){return ds(this,o,n,!0,r)};h.prototype.writeDoubleBE=function(o,n,r){return ds(this,o,n,!1,r)};h.prototype.copy=function(o,n,r,c){if(!h.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),n>=o.length&&(n=o.length),n||(n=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-n<c-r&&(c=o.length-n+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),n),p};h.prototype.fill=function(o,n,r,c){if(typeof o=="string"){if(typeof n=="string"?(c=n,n=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!h.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=h.isBuffer(o)?o:h.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var ag=/[^+/0-9A-Za-z-_]/g;function ig(e){if(e=e.split("=")[0],e=e.trim().replace(ag,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function sa(e,o){o=o||1/0;for(var n,r=e.length,c=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!c){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),c=n;continue}n=(c-55296<<10|n-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function sg(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function cg(e,o){for(var n,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,c=n%256,p.push(c),p.push(r);return p}function ls(e){return ra.toByteArray(ig(e))}function Ct(e,o,n,r){for(var c=0;c<r&&!(c+n>=o.length||c>=e.length);++c)o[c+n]=e[c];return c}function Be(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function ma(e){return e!==e}var pg=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,c=0;c<16;++c)o[r+c]=e[n]+e[c];return o}()});var Ts=A((cb,hs)=>{t();var $=hs.exports={},Fe,Ue;function da(){throw new Error("setTimeout has not been defined")}function la(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Fe=setTimeout:Fe=da}catch(e){Fe=da}try{typeof clearTimeout=="function"?Ue=clearTimeout:Ue=la}catch(e){Ue=la}})();function us(e){if(Fe===setTimeout)return setTimeout(e,0);if((Fe===da||!Fe)&&setTimeout)return Fe=setTimeout,setTimeout(e,0);try{return Fe(e,0)}catch(o){try{return Fe.call(null,e,0)}catch(n){return Fe.call(this,e,0)}}}function mg(e){if(Ue===clearTimeout)return clearTimeout(e);if((Ue===la||!Ue)&&clearTimeout)return Ue=clearTimeout,clearTimeout(e);try{return Ue(e)}catch(o){try{return Ue.call(null,e)}catch(n){return Ue.call(this,e)}}}var Qe=[],nn=!1,Do,Nt=-1;function dg(){!nn||!Do||(nn=!1,Do.length?Qe=Do.concat(Qe):Nt=-1,Qe.length&&gs())}function gs(){if(!nn){var e=us(dg);nn=!0;for(var o=Qe.length;o;){for(Do=Qe,Qe=[];++Nt<o;)Do&&Do[Nt].run();Nt=-1,o=Qe.length}Do=null,nn=!1,mg(e)}}$.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];Qe.push(new fs(e,o)),Qe.length===1&&!nn&&us(gs)};function fs(e,o){this.fun=e,this.array=o}fs.prototype.run=function(){this.fun.apply(null,this.array)};$.title="browser";$.browser=!0;$.env={};$.argv=[];$.version="";$.versions={};function eo(){}$.on=eo;$.addListener=eo;$.once=eo;$.off=eo;$.removeListener=eo;$.removeAllListeners=eo;$.emit=eo;$.prependListener=eo;$.prependOnceListener=eo;$.listeners=function(e){return[]};$.binding=function(e){throw new Error("process.binding is not supported")};$.cwd=function(){return"/"};$.chdir=function(e){throw new Error("process.chdir is not supported")};$.umask=function(){return 0}});var a,s,lg,i,t=b(()=>{a=w(_s()),s=w(Ts()),lg=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=lg});var _a=b(()=>{"use strict";t()});var xs=b(()=>{"use strict";t()});var ys=b(()=>{"use strict";t()});var Ae,tn,go=b(()=>{"use strict";t();Ae=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),tn=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var j,Ss,_b,bs,ub,U=b(()=>{"use strict";t();go();j=(x=>(x.ledger="ledger",x.walletconnect="walletconnect",x.walletconnectv2="walletconnectv2",x.wallet="wallet",x.crossWindow="crossWindow",x.iframe="iframe",x.extension="extension",x.passkey="passkey",x.metamask="metamask",x.opera="opera",x.extra="extra",x.none="",x))(j||{}),Ss=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(Ss||{}),_b=f(f({},tn.WindowProviderRequestEnums),Ss),bs=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(bs||{}),ub=f(f({},tn.WindowProviderResponseEnums),bs)});var ws=b(()=>{"use strict";t()});var vs=b(()=>{"use strict";t()});var le=b(()=>{"use strict";t()});var Is=b(()=>{"use strict";t()});var As=b(()=>{"use strict";t()});var ks=b(()=>{"use strict";t()});var M=b(()=>{"use strict";t();_a();xs();ys();U();ws();vs();le();Is();As();ks()});var Ls=b(()=>{"use strict";t()});var We=b(()=>{"use strict";t()});var Ps=b(()=>{"use strict";t()});var ua,Es=b(()=>{"use strict";t();ua=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(ua||{})});var Cs=b(()=>{"use strict";t()});var ga=b(()=>{"use strict";t()});var Ns=b(()=>{"use strict";t()});var oo,Rt,Bb,Dt,Fb,Mt,Ub,Wb,ug,Ot,fo=b(()=>{"use strict";t();M();oo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Rt,egldLabel:Bb}=oo["devnet"],{chainId:Dt,egldLabel:Fb}=oo["testnet"],{chainId:Mt,egldLabel:Ub}=oo["mainnet"],Wb={["devnet"]:Rt,["testnet"]:Dt,["mainnet"]:Mt},ug={[Rt]:"devnet",[Dt]:"testnet",[Mt]:"mainnet"},Ot=3e3});var rn=b(()=>{"use strict";t()});var Ge,Rs=b(()=>{"use strict";t();Ge=require("@multiversx/sdk-web-wallet-provider")});var ke,zn=b(()=>{"use strict";t();ke=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ds,Ms,fa,qb,zb,ha=b(()=>{"use strict";t();zn();fa=String((Ms=(Ds=ke.safeWindow)==null?void 0:Ds.navigator)==null?void 0:Ms.userAgent),qb=/^((?!chrome|android).)*safari/i.test(fa),zb=/firefox/i.test(fa)&&/windows/i.test(fa)});var Bt,Ft,Os,Bs,Kn,Ta,Ut,Fs,an,Wt,C=b(()=>{"use strict";t();Ls();We();Ps();Es();Cs();ga();Ns();fo();rn();Rs();ha();Bt=5e4,Ft=1e9,Os=1,Bs=1,Kn="signSession",Ta="sdk-dapp-version",Ut="logout",Fs="login",an="0",Wt="-"});var sn,Gt=b(()=>{"use strict";t();sn=()=>Date.now()/1e3});var Us=b(()=>{"use strict";t()});var Ws=b(()=>{"use strict";t()});var xa=b(()=>{"use strict";t();Gt();Us();Ws()});var ya={};Je(ya,{clear:()=>Tg,getItem:()=>fg,localStorageKeys:()=>ge,removeItem:()=>hg,setItem:()=>gg});var ge,Ht,gg,fg,hg,Tg,Mo=b(()=>{"use strict";t();xa();ge={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Ht=typeof localStorage!="undefined",gg=({key:e,data:o,expires:n})=>{!Ht||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},fg=e=>{if(!Ht)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:sn()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},hg=e=>{!Ht||localStorage.removeItem(String(e))},Tg=()=>{!Ht||localStorage.clear()}});var Sa={};Je(Sa,{clear:()=>$s,getItem:()=>Hs,removeItem:()=>Vs,setItem:()=>Gs,storage:()=>xg});var Gs,Hs,Vs,$s,xg,js=b(()=>{"use strict";t();Gs=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Hs=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},Vs=e=>sessionStorage.removeItem(String(e)),$s=()=>sessionStorage.clear(),xg={setItem:Gs,getItem:Hs,removeItem:Vs,clear:$s}});var He,cn=b(()=>{"use strict";t();Mo();js();He={session:Sa,local:ya}});var ba,G,re,H=b(()=>{"use strict";t();ba=require("@reduxjs/toolkit");C();G=(0,ba.createAction)(Ut),re=(0,ba.createAction)(Fs,e=>({payload:e}))});var va,qs,zs,Vt,wa,Ks,ho,$t,jt,v0,Ia,yg,I0,pn,Xs,Ys,Js,qt,zt=b(()=>{"use strict";t();va=require("@multiversx/sdk-core"),qs=require("@reduxjs/toolkit"),zs=require("redux-persist");C();cn();Mo();H();Vt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:an},wa={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Vt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ks=(0,qs.createSlice)({name:"accountInfoSlice",initialState:wa,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new va.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:Vt},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(G,()=>(He.local.removeItem(ge.loginExpiresAt),wa)),e.addCase(re,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new va.Address(r).hex()}),e.addCase(zs.REHYDRATE,(o,n)=>{var _;if(!((_=n.payload)!=null&&_.account))return;let{account:r}=n.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:wa.accounts,o.publicKey=d})}}),{setAccount:ho,setAddress:$t,setAccountNonce:jt,setAccountShard:v0,setLedgerAccount:Ia,updateLedgerAccount:yg,setWalletConnectAccount:I0,setIsAccountLoading:pn,setAccountLoadingError:Xs,setWebsocketEvent:Ys,setWebsocketBatchEvent:Js}=Ks.actions,qt=Ks.reducer});function Xn(){return new Date().setHours(new Date().getHours()+24)}function Yn(e){He.local.setItem({key:ge.loginExpiresAt,data:e,expires:e})}var Aa=b(()=>{"use strict";t();cn();Mo()});var Qs,Zs,ec,M0,oc,Sg,To,O0,Kt,nc,tc,ka,rc,Xt,Jn=b(()=>{"use strict";t();Qs=require("@reduxjs/toolkit");Aa();U();H();Zs={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},ec=(0,Qs.createSlice)({name:"loginInfoSlice",initialState:Zs,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(G,()=>Zs),e.addCase(re,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,Yn(Xn())})}}),{setLoginMethod:M0,setWalletConnectLogin:oc,setLedgerLogin:Sg,setTokenLogin:To,setTokenLoginSignature:O0,setWalletLogin:Kt,invalidateLoginSession:nc,setLogoutRoute:tc,setIsWalletConnectV2Initialized:ka,setWebviewLogin:rc}=ec.actions,Xt=ec.reducer});var ic,ac,sc,cc,bg,W0,wg,Yt,Jt=b(()=>{"use strict";t();ic=require("@reduxjs/toolkit");H();ac={},sc=(0,ic.createSlice)({name:"modalsSlice",initialState:ac,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(G,()=>ac)}}),{setTxSubmittedModal:cc,setNotificationModal:bg,clearTxSubmittedModal:W0,clearNotificationModal:wg}=sc.actions,Yt=sc.reducer});var no,mn=b(()=>{"use strict";t();no=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var W,ae=b(()=>{"use strict";t();mn();W=()=>{if(!no())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:c,search:p}}=window;return{pathname:o,hash:n,origin:r,href:c,search:p}}});var dn,pc=b(()=>{"use strict";t();ae();dn=(e="")=>{let o=W(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var mc=b(()=>{"use strict";t();se()});var dc,lc=b(()=>{"use strict";t();zn();dc=e=>{if(!ke.safeWindow.location)return;if(!new URL(ke.safeWindow.location.href).protocol.startsWith("http"))return ke.safeWindow.location.reload();ke.safeWindow.location.assign(e)}});var se=b(()=>{"use strict";t();pc();mc();ae();lc()});var _c,uc,Oo,ln=b(()=>{"use strict";t();se();_c=!1,uc=(e=!0)=>{_c=e},Oo=({timeout:e=0,url:o})=>{_c||setTimeout(()=>{if(!!window)return dc(o)},e)}});function xo({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),c=typeof o=="function";if(r&&e!=null){if(c)return o(e,n);Oo({url:e,timeout:vg})}}var vg,gc=b(()=>{"use strict";t();ln();vg=200});function fc(e){return e[Math.floor(Math.random()*e.length)]}var hc=b(()=>{"use strict";t()});var La=b(()=>{"use strict";t();ga()});var to=b(()=>{"use strict";t();gc();hc();La()});var Tc,xc,yc,Zn,Ag,Sc,Pa,bc,kg,Zt,Qn=b(()=>{"use strict";t();Tc=require("@reduxjs/toolkit"),xc=w(require("lodash.omit")),yc=require("redux-persist");rn();H();to();Zn={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Ag={network:Zn},Sc=(0,Tc.createSlice)({name:"appConfig",initialState:Ag,reducers:{initializeNetworkConfig:(e,o)=>{let n=fc(o.payload.walletConnectV2RelayAddresses),r=(0,xc.default)(o.payload,"walletConnectV2RelayAddresses");e.network=I(f(f({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=f(f({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(G,o=>{o.network.customWalletAddress=void 0}),e.addCase(yc.REHYDRATE,(o,n)=>{var c,p;if(!((p=(c=n.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Pa,updateNetworkConfig:bc,setCustomWalletAddress:kg}=Sc.actions,Zt=Sc.reducer});var wc,Ea,vc,ww,vw,Iw,Qt,er=b(()=>{"use strict";t();wc=require("@reduxjs/toolkit");M();H();Ea={isSigning:!1,signedSessions:{}},vc=(0,wc.createSlice)({name:"signedMessageInfoSliceState",initialState:Ea,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[n]=f(f({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>f(f({},e),o.payload),clearSignedMessageInfo:()=>Ea},extraReducers:e=>{e.addCase(G,()=>Ea)}}),{setSignSession:ww,clearSignedMessageInfo:vw,setSignSessionState:Iw}=vc.actions,Qt=vc.reducer});var Ac,kc,Ic,Lc,Ca,Lg,Nw,Pg,or,nr=b(()=>{"use strict";t();Ac=require("@reduxjs/toolkit"),kc=require("redux-persist");M();Gt();H();Ic={customToasts:[],transactionToasts:[]},Lc=(0,Ac.createSlice)({name:"toastsSlice",initialState:Ic,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===n);if(r!==-1){e.customToasts[r]=I(f(f({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(I(f({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:sn(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(G,()=>Ic),e.addCase(kc.REHYDRATE,(o,n)=>{var c,p;let r=(p=(c=n.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Ca,removeCustomToast:Lg,addTransactionToast:Nw,removeTransactionToast:Pg}=Lc.actions,or=Lc.reducer});var Pc,Ra,Da,Ma,Eg,Na,Ec,Ow,Cg,Oa,tr,rr=b(()=>{"use strict";t();Pc=require("@reduxjs/toolkit");H();Ra="Transaction failed",Da="Transaction successful",Ma="Processing transaction",Eg="Transaction submitted",Na={},Ec=(0,Pc.createSlice)({name:"transactionsInfo",initialState:Na,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Ra,successMessage:(r==null?void 0:r.successMessage)||Da,processingMessage:(r==null?void 0:r.processingMessage)||Ma,submittedMessage:(r==null?void 0:r.submittedMessage)||Eg,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Na},extraReducers:e=>{e.addCase(G,()=>Na)}}),{clearTransactionsInfo:Ow,setTransactionsDisplayInfo:Cg,clearTransactionsInfoForSessionId:Oa}=Ec.actions,tr=Ec.reducer});function ro(e){return e!=null&&(Gg(e)||qg(e))}function Bo(e){return e!=null&&(Hg(e)||zg(e))}function Fo(e){return e!=null&&(Vg(e)||Kg(e))}function Cc(e){return e!=null&&($g(e)||Xg(e))}function Ba(e){return e!=null&&jg(e)}function Gg(e){return e!=null&&Ng.includes(e)}function Hg(e){return e!=null&&Rg.includes(e)}function Vg(e){return e!=null&&Dg.includes(e)}function $g(e){return e!=null&&Mg.includes(e)}function jg(e){return e!=null&&Og.includes(e)}function qg(e){return e!=null&&Bg.includes(e)}function zg(e){return e!=null&&Fg.includes(e)}function Kg(e){return e!=null&&Ug.includes(e)}function Xg(e){return e!=null&&Wg.includes(e)}var Ng,Rg,Dg,Mg,Og,Bg,Fg,Ug,Wg,_n=b(()=>{"use strict";t();U();Ng=["sent"],Rg=["success"],Dg=["fail","cancelled","timedOut"],Mg=["invalid"],Og=["timedOut"],Bg=["pending"],Fg=["success"],Ug=["fail","invalid"],Wg=["not executed"]});var Nc,Rc,et,Yg,Dc,$e,je,Jg,Uo,Zg,Qg,jw,ef,ot,Fa,qw,ar,ir=b(()=>{"use strict";t();Nc=require("@reduxjs/toolkit"),Rc=require("redux-persist");U();_n();H();et={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Yg={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Dc=(0,Nc.createSlice)({name:"transactionsSlice",initialState:et,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:n,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=f(f(f({},Yg),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:f(f({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===n&&(e.transactionsToSign=et.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=f(f({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,c!=null&&(e.signedTransactions[n].errorMessage=c),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,T,u,x,L,k,P,V;let{sessionId:n,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(T=(_=e.signedTransactions)==null?void 0:_[n])==null?void 0:T.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(D=>D.hash===p?I(f(f({},m!=null?m:{}),D),{status:r,errorMessage:c,inTransit:d}):D);let O=(x=(u=e.signedTransactions[n])==null?void 0:u.transactions)==null?void 0:x.every(D=>Bo(D.status)),E=(k=(L=e.signedTransactions[n])==null?void 0:L.transactions)==null?void 0:k.some(D=>Fo(D.status)),z=(V=(P=e.signedTransactions[n])==null?void 0:P.transactions)==null?void 0:V.every(D=>Cc(D.status));O&&(e.signedTransactions[n].status="success"),E&&(e.signedTransactions[n].status="fail"),z&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=et.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=et.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=f(f({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(G,()=>et),e.addCase(Rc.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=n.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let T=new Date(l),u=new Date;return u.setHours(u.getHours()+5),u-T>0||(d[l]=_),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:$e,updateSignedTransactions:je,setTransactionsToSign:Jg,clearAllTransactionsToSign:Uo,clearAllSignedTransactions:Zg,clearSignedTransaction:Qg,clearTransactionToSign:jw,setSignTransactionsError:ef,setSignTransactionsCancelMessage:ot,moveTransactionsToSignedState:Fa,updateSignedTransactionsCustomTransactionInformation:qw}=Dc.actions,ar=Dc.reducer});var Mc,Ua,Oc,Bc,Fc,Uc,Yw,sr,cr=b(()=>{"use strict";t();Mc=require("@reduxjs/toolkit");H();Ua={},Oc=(0,Mc.createSlice)({name:"batchTransactionsSlice",initialState:Ua,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ua},extraReducers:e=>{e.addCase(G,()=>Ua)}}),{setBatchTransactions:Bc,updateBatchTransactions:Fc,clearBatchTransactions:Uc,clearAllBatchTransactions:Yw}=Oc.actions,sr=Oc.reducer});var Gc,Wc,Hc,Vc,$c,Wa=b(()=>{"use strict";t();Gc=require("@reduxjs/toolkit");H();Wc={},Hc=(0,Gc.createSlice)({name:"dappConfigSlice",initialState:Wc,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(G,()=>Wc)}}),{setDappConfig:Vc}=Hc.actions,$c=Hc.reducer});var N=b(()=>{"use strict";t();zt();Jn();Jt();Qn();er();nr();rr();ir();cr();Wa()});var Va=b(()=>{"use strict";t()});var fp,df,lf,Ho,fr=b(()=>{"use strict";t();fp=require("@reduxjs/toolkit");Va();zt();cr();Wa();Jn();Jt();Qn();er();nr();rr();ir();df={["account"]:qt,["dappConfig"]:$c,["loginInfo"]:Xt,["modals"]:Yt,["networkConfig"]:Zt,["signedMessageInfo"]:Qt,["toasts"]:or,["transactionsInfo"]:tr,["transactions"]:ar,["batchTransactions"]:sr},lf=(e={})=>(0,fp.combineReducers)(f(f({},df),e)),Ho=lf});var yp={};Je(yp,{default:()=>Lf,sessionStorageReducers:()=>$a});function so(e,o=[]){return{key:e,version:1,storage:Tp.default,blacklist:o}}var _e,hp,Tp,_f,at,uf,gf,ff,hf,Tf,xf,yf,Sf,bf,wf,xp,vf,$a,If,Af,kf,Lf,Sp=b(()=>{"use strict";t();_e=require("redux-persist"),hp=w(require("redux-persist/lib/storage")),Tp=w(require("redux-persist/lib/storage/session"));fr();N();zt();cr();Jn();Jt();Qn();er();nr();rr();ir();Va();_f={persistReducersStorageType:"localStorage"},at={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},uf=so(at["account"]),gf=so(at["loginInfo"]),ff=so(at["modals"]),hf=so(at["networkConfig"]),Tf={2:e=>I(f({},e),{networkConfig:Zn})};xf=so("sdk-dapp-transactionsInfo"),yf=so("sdk-dapp-transactions",["transactionsToSign"]),Sf=so("sdk-dapp-batchTransactions",["batchTransactions"]),bf=so("sdk-dapp-toasts"),wf=so("sdk-dapp-signedMessageInfo"),xp={key:"sdk-dapp-store",version:2,storage:hp.default,whitelist:Object.keys(at),migrate:(0,_e.createMigrate)(Tf,{debug:!1})},vf=I(f({},xp),{whitelist:[]}),$a={["toasts"]:(0,_e.persistReducer)(bf,or),["transactions"]:(0,_e.persistReducer)(yf,ar),["transactionsInfo"]:(0,_e.persistReducer)(xf,tr),["batchTransactions"]:(0,_e.persistReducer)(Sf,sr),["signedMessageInfo"]:(0,_e.persistReducer)(wf,Qt)},If=I(f({},$a),{["account"]:(0,_e.persistReducer)(uf,qt),["loginInfo"]:(0,_e.persistReducer)(gf,Xt),["modals"]:(0,_e.persistReducer)(ff,Yt),["networkConfig"]:(0,_e.persistReducer)(hf,Zt)}),Af=_f.persistReducersStorageType==="localStorage",kf=Af?(0,_e.persistReducer)(xp,Ho($a)):(0,_e.persistReducer)(vf,Ho(If)),Lf=kf});var bp={};Je(bp,{default:()=>Pf});var Pf,wp=b(()=>{"use strict";t();fr();Pf=Ho()});var vp={};Je(vp,{default:()=>Cf});var be,Ef,Cf,Ip=b(()=>{"use strict";t();be=require("redux-persist"),Ef=[be.FLUSH,be.REHYDRATE,be.PAUSE,be.PERSIST,be.PURGE,be.REGISTER],Cf=Ef});var Lp={};Je(Lp,{default:()=>kp});function kp(e){return(0,Ap.persistStore)(e)}var Ap,Pp=b(()=>{"use strict";t();Ap=require("redux-persist")});var Im=A((V2,vm)=>{t();var Gh=typeof i=="object"&&i&&i.Object===Object&&i;vm.exports=Gh});var gt=A(($2,Am)=>{t();var Hh=Im(),Vh=typeof self=="object"&&self&&self.Object===Object&&self,$h=Hh||Vh||Function("return this")();Am.exports=$h});var _i=A((j2,km)=>{t();var jh=gt(),qh=jh.Symbol;km.exports=qh});var Cm=A((q2,Em)=>{t();var Lm=_i(),Pm=Object.prototype,zh=Pm.hasOwnProperty,Kh=Pm.toString,ft=Lm?Lm.toStringTag:void 0;function Xh(e){var o=zh.call(e,ft),n=e[ft];try{e[ft]=void 0;var r=!0}catch(p){}var c=Kh.call(e);return r&&(o?e[ft]=n:delete e[ft]),c}Em.exports=Xh});var Rm=A((z2,Nm)=>{t();var Yh=Object.prototype,Jh=Yh.toString;function Zh(e){return Jh.call(e)}Nm.exports=Zh});var ui=A((K2,Om)=>{t();var Dm=_i(),Qh=Cm(),eT=Rm(),oT="[object Null]",nT="[object Undefined]",Mm=Dm?Dm.toStringTag:void 0;function tT(e){return e==null?e===void 0?nT:oT:Mm&&Mm in Object(e)?Qh(e):eT(e)}Om.exports=tT});var Fm=A((X2,Bm)=>{t();var rT=Array.isArray;Bm.exports=rT});var Wm=A((Y2,Um)=>{t();function aT(e){return e!=null&&typeof e=="object"}Um.exports=aT});var Hm=A((J2,Gm)=>{t();var iT=ui(),sT=Fm(),cT=Wm(),pT="[object String]";function mT(e){return typeof e=="string"||!sT(e)&&cT(e)&&iT(e)==pT}Gm.exports=mT});var Dr=A((AM,zm)=>{t();function _T(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}zm.exports=_T});var Od=A((jU,Md)=>{t();var OT=ui(),BT=Dr(),FT="[object AsyncFunction]",UT="[object Function]",WT="[object GeneratorFunction]",GT="[object Proxy]";function HT(e){if(!BT(e))return!1;var o=OT(e);return o==UT||o==WT||o==FT||o==GT}Md.exports=HT});var Fd=A((qU,Bd)=>{t();var VT=gt(),$T=VT["__core-js_shared__"];Bd.exports=$T});var Gd=A((zU,Wd)=>{t();var Ei=Fd(),Ud=function(){var e=/[^.]+$/.exec(Ei&&Ei.keys&&Ei.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function jT(e){return!!Ud&&Ud in e}Wd.exports=jT});var Vd=A((KU,Hd)=>{t();var qT=Function.prototype,zT=qT.toString;function KT(e){if(e!=null){try{return zT.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Hd.exports=KT});var jd=A((XU,$d)=>{t();var XT=Od(),YT=Gd(),JT=Dr(),ZT=Vd(),QT=/[\\^$.*+?()[\]{}|]/g,ex=/^\[object .+?Constructor\]$/,ox=Function.prototype,nx=Object.prototype,tx=ox.toString,rx=nx.hasOwnProperty,ax=RegExp("^"+tx.call(rx).replace(QT,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ix(e){if(!JT(e)||YT(e))return!1;var o=XT(e)?ax:ex;return o.test(ZT(e))}$d.exports=ix});var zd=A((YU,qd)=>{t();function sx(e,o){return e==null?void 0:e[o]}qd.exports=sx});var Fr=A((JU,Kd)=>{t();var cx=jd(),px=zd();function mx(e,o){var n=px(e,o);return cx(n)?n:void 0}Kd.exports=mx});var St=A((ZU,Xd)=>{t();var dx=Fr(),lx=dx(Object,"create");Xd.exports=lx});var Zd=A((QU,Jd)=>{t();var Yd=St();function _x(){this.__data__=Yd?Yd(null):{},this.size=0}Jd.exports=_x});var el=A((eW,Qd)=>{t();function ux(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Qd.exports=ux});var nl=A((oW,ol)=>{t();var gx=St(),fx="__lodash_hash_undefined__",hx=Object.prototype,Tx=hx.hasOwnProperty;function xx(e){var o=this.__data__;if(gx){var n=o[e];return n===fx?void 0:n}return Tx.call(o,e)?o[e]:void 0}ol.exports=xx});var rl=A((nW,tl)=>{t();var yx=St(),Sx=Object.prototype,bx=Sx.hasOwnProperty;function wx(e){var o=this.__data__;return yx?o[e]!==void 0:bx.call(o,e)}tl.exports=wx});var il=A((tW,al)=>{t();var vx=St(),Ix="__lodash_hash_undefined__";function Ax(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=vx&&o===void 0?Ix:o,this}al.exports=Ax});var cl=A((rW,sl)=>{t();var kx=Zd(),Lx=el(),Px=nl(),Ex=rl(),Cx=il();function En(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}En.prototype.clear=kx;En.prototype.delete=Lx;En.prototype.get=Px;En.prototype.has=Ex;En.prototype.set=Cx;sl.exports=En});var ml=A((aW,pl)=>{t();function Nx(){this.__data__=[],this.size=0}pl.exports=Nx});var ll=A((iW,dl)=>{t();function Rx(e,o){return e===o||e!==e&&o!==o}dl.exports=Rx});var bt=A((sW,_l)=>{t();var Dx=ll();function Mx(e,o){for(var n=e.length;n--;)if(Dx(e[n][0],o))return n;return-1}_l.exports=Mx});var gl=A((cW,ul)=>{t();var Ox=bt(),Bx=Array.prototype,Fx=Bx.splice;function Ux(e){var o=this.__data__,n=Ox(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():Fx.call(o,n,1),--this.size,!0}ul.exports=Ux});var hl=A((pW,fl)=>{t();var Wx=bt();function Gx(e){var o=this.__data__,n=Wx(o,e);return n<0?void 0:o[n][1]}fl.exports=Gx});var xl=A((mW,Tl)=>{t();var Hx=bt();function Vx(e){return Hx(this.__data__,e)>-1}Tl.exports=Vx});var Sl=A((dW,yl)=>{t();var $x=bt();function jx(e,o){var n=this.__data__,r=$x(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}yl.exports=jx});var wl=A((lW,bl)=>{t();var qx=ml(),zx=gl(),Kx=hl(),Xx=xl(),Yx=Sl();function Cn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Cn.prototype.clear=qx;Cn.prototype.delete=zx;Cn.prototype.get=Kx;Cn.prototype.has=Xx;Cn.prototype.set=Yx;bl.exports=Cn});var Il=A((_W,vl)=>{t();var Jx=Fr(),Zx=gt(),Qx=Jx(Zx,"Map");vl.exports=Qx});var Ll=A((uW,kl)=>{t();var Al=cl(),ey=wl(),oy=Il();function ny(){this.size=0,this.__data__={hash:new Al,map:new(oy||ey),string:new Al}}kl.exports=ny});var El=A((gW,Pl)=>{t();function ty(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Pl.exports=ty});var wt=A((fW,Cl)=>{t();var ry=El();function ay(e,o){var n=e.__data__;return ry(o)?n[typeof o=="string"?"string":"hash"]:n.map}Cl.exports=ay});var Rl=A((hW,Nl)=>{t();var iy=wt();function sy(e){var o=iy(this,e).delete(e);return this.size-=o?1:0,o}Nl.exports=sy});var Ml=A((TW,Dl)=>{t();var cy=wt();function py(e){return cy(this,e).get(e)}Dl.exports=py});var Bl=A((xW,Ol)=>{t();var my=wt();function dy(e){return my(this,e).has(e)}Ol.exports=dy});var Ul=A((yW,Fl)=>{t();var ly=wt();function _y(e,o){var n=ly(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}Fl.exports=_y});var Gl=A((SW,Wl)=>{t();var uy=Ll(),gy=Rl(),fy=Ml(),hy=Bl(),Ty=Ul();function Nn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Nn.prototype.clear=uy;Nn.prototype.delete=gy;Nn.prototype.get=fy;Nn.prototype.has=hy;Nn.prototype.set=Ty;Wl.exports=Nn});var Vl=A((bW,Hl)=>{t();var xy="__lodash_hash_undefined__";function yy(e){return this.__data__.set(e,xy),this}Hl.exports=yy});var jl=A((wW,$l)=>{t();function Sy(e){return this.__data__.has(e)}$l.exports=Sy});var zl=A((vW,ql)=>{t();var by=Gl(),wy=Vl(),vy=jl();function Ur(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new by;++o<n;)this.add(e[o])}Ur.prototype.add=Ur.prototype.push=wy;Ur.prototype.has=vy;ql.exports=Ur});var Xl=A((IW,Kl)=>{t();function Iy(e,o,n,r){for(var c=e.length,p=n+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Kl.exports=Iy});var Jl=A((AW,Yl)=>{t();function Ay(e){return e!==e}Yl.exports=Ay});var Ql=A((kW,Zl)=>{t();function ky(e,o,n){for(var r=n-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Zl.exports=ky});var o_=A((LW,e_)=>{t();var Ly=Xl(),Py=Jl(),Ey=Ql();function Cy(e,o,n){return o===o?Ey(e,o,n):Ly(e,Py,n)}e_.exports=Cy});var t_=A((PW,n_)=>{t();var Ny=o_();function Ry(e,o){var n=e==null?0:e.length;return!!n&&Ny(e,o,0)>-1}n_.exports=Ry});var a_=A((EW,r_)=>{t();function Dy(e,o,n){for(var r=-1,c=e==null?0:e.length;++r<c;)if(n(o,e[r]))return!0;return!1}r_.exports=Dy});var s_=A((CW,i_)=>{t();function My(e,o){return e.has(o)}i_.exports=My});var p_=A((NW,c_)=>{t();var Oy=Fr(),By=gt(),Fy=Oy(By,"Set");c_.exports=Fy});var d_=A((RW,m_)=>{t();function Uy(){}m_.exports=Uy});var Ci=A((DW,l_)=>{t();function Wy(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}l_.exports=Wy});var u_=A((MW,__)=>{t();var Ni=p_(),Gy=d_(),Hy=Ci(),Vy=1/0,$y=Ni&&1/Hy(new Ni([,-0]))[1]==Vy?function(e){return new Ni(e)}:Gy;__.exports=$y});var f_=A((OW,g_)=>{t();var jy=zl(),qy=t_(),zy=a_(),Ky=s_(),Xy=u_(),Yy=Ci(),Jy=200;function Zy(e,o,n){var r=-1,c=qy,p=e.length,m=!0,d=[],l=d;if(n)m=!1,c=zy;else if(p>=Jy){var _=o?null:Xy(e);if(_)return Yy(_);m=!1,c=Ky,l=new jy}else l=o?[]:d;e:for(;++r<p;){var T=e[r],u=o?o(T):T;if(T=n||T!==0?T:0,m&&u===u){for(var x=l.length;x--;)if(l[x]===u)continue e;o&&l.push(u),d.push(T)}else c(l,u,n)||(l!==d&&l.push(u),d.push(T))}return d}g_.exports=Zy});var T_=A((BW,h_)=>{t();var Qy=f_();function eS(e){return e&&e.length?Qy(e):[]}h_.exports=eS});var Di={};Je(Di,{css:()=>A_,default:()=>vS});var A_,vS,Mi=b(()=>{"use strict";t();A_=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(A_));vS={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var _o={};Je(_o,{css:()=>P_,default:()=>kS});var P_,kS,uo=b(()=>{"use strict";t();P_=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(P_));kS={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var tb={};Je(tb,{mockWindowHistory:()=>nb,mockWindowLocation:()=>ob,renderWithProvider:()=>eb});module.exports=Me(tb);t();t();var Xr=w(require("react")),Au=require("@testing-library/react"),ku=require("history");M();t();t();var Gn=w(require("react")),wu=require("react-redux"),vu=require("redux-persist/integration/react");t();var vo=require("react");t();t();t();var Zp=w(require("axios"));t();t();N();t();var jc=w(require("lodash.isequal")),pr=require("reselect"),v=(0,pr.createSelectorCreator)(pr.defaultMemoize,jc.default);var qe=e=>e.account,Le=v(qe,e=>e.address),ao=v(qe,Le,(e,o)=>o in e.accounts?e.accounts[o]:Vt),qc=v(qe,ao,(e,o)=>{let c=e,{accounts:n}=c,r=De(c,["accounts"]);return I(f({},r),{address:o.address,account:o})}),gv=v(ao,e=>e.balance),zc=v(ao,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),fv=v(qe,e=>e.shard),Ga=v(qe,e=>e.ledgerAccount),hv=v(qe,e=>e.walletConnectAccount),Tv=v(qe,e=>e.isAccountLoading),xv=v(qe,e=>e.accountLoadingError),Kc=v(qe,e=>e.websocketEvent),Xc=v(qe,e=>e.websocketBatchEvent);t();var Yc=e=>e.dappConfig,Jc=v(Yc,e=>e.shouldUseWebViewProvider);t();var X=e=>e.loginInfo,Zc=v(X,e=>e.loginMethod),io=v(X,Le,(e,o)=>Boolean(o)),Qc=v(X,e=>e.walletConnectLogin),mr=v(X,e=>e.ledgerLogin),dr=v(X,e=>e.walletLogin),ep=v(X,e=>e.isLoginSessionInvalid),un=v(X,e=>e.tokenLogin),yo=v(X,e=>e.logoutRoute),of=v(X,e=>e.isWalletConnectV2Initialized);t();var op=e=>e.modals,kv=v(op,e=>e.txSubmittedModal),nf=v(op,e=>e.notificationModal);t();var Pe=e=>e.networkConfig,Wo=v(Pe,e=>e.network.chainId),np=v(Pe,e=>e.network.roundDuration),Ev=v(Pe,e=>e.network.walletConnectBridgeAddress),tp=v(Pe,e=>e.network.walletConnectV2RelayAddress),rp=v(Pe,e=>e.network.walletConnectV2ProjectId),ap=v(Pe,e=>e.network.walletConnectV2Options),ip=v(Pe,e=>e.network.walletConnectDeepLink),Y=v(Pe,e=>e.network),nt=v(Y,e=>e.apiAddress),sp=v(Y,e=>e.explorerAddress),lr=v(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),tf=v(Y,e=>e.xAliasAddress),cp=v(Y,e=>e.egldLabel);t();var _r=e=>e.signedMessageInfo,Rv=v(_r,e=>e.isSigning),Dv=v(_r,e=>e.errorMessage),Mv=v(_r,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),Ov=v(_r,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var pp=e=>e.toasts,rf=v(pp,e=>e.customToasts),mp=v(pp,e=>e.transactionToasts);t();N();var dp={errorMessage:Ra,successMessage:Da,processingMessage:Ma},lp=e=>e.transactionsInfo,af=v(lp,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||dp);t();t();var ze=require("@multiversx/sdk-core");C();t();var Ha=require("@multiversx/sdk-core/out");t();t();function tt(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function Go(e){return tt(e)?atob(e):e}t();t();t();t();var _p=e=>{let o=e!=null?e:"";return tt(o)?Ha.TransactionPayload.fromEncoded(o):new Ha.TransactionPayload(o)};t();C();var rt=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ua).some(n=>e.startsWith(n)):!1;function gn(e){var r,c,p;let o=f({},e);rt({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new ze.Transaction(f(f(I(f(I(f({value:o.value.valueOf(),data:_p(o.data),nonce:o.nonce.valueOf(),receiver:new ze.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ze.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Bt,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Ft,chainID:o.chainID.valueOf(),version:new ze.TransactionVersion((p=o.version)!=null?p:Os)}),o.options?{options:new ze.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ze.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();C();t();t();var ja=require("@reduxjs/toolkit"),Rp=require("react-redux/lib/utils/Subscription");N();t();var up=w(require("lodash.throttle"));C();N();Aa();cn();Mo();var cf=[Ut],ur=!1,pf=(0,up.default)(()=>{Yn(Xn())},5e3),gp=e=>o=>n=>{if(cf.includes(n.type))return o(n);let r=e.getState(),c=He.local.getItem(ge.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(c==null)return Yn(Xn());let m=Date.now();return c-m<0&&!ur?setTimeout(()=>{ur=!0,e.dispatch(nc())},1e3):(ur&&(ur=!1),pf()),o(n)};t();t();function gr(){return typeof sessionStorage!="undefined"}var Ep=gr()?(Sp(),Me(yp)).default:(wp(),Me(bp)).default,Cp=gr()?(Ip(),Me(vp)).default:[],Np=gr()?(Pp(),Me(Lp)).default:e=>e;fr();var S=(0,ja.configureStore)({reducer:Ep,middleware:e=>e({serializableCheck:{ignoredActions:[...Cp,jt.type,ho.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(gp)}),Dp=(0,Rp.createSubscription)(S),Mp=Np(S),YI=(0,ja.configureStore)({reducer:Ho});t();t();var Rf=require("@multiversx/sdk-core/out");t();C();t();var it=require("@multiversx/sdk-core");M();t();var Op=require("@multiversx/sdk-core");function Df(e){try{let o=new Op.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function fn(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Df(e)}var Mf=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function qa(e,o,n=""){if(!fn(e))return!1;if(new it.Address(e).isContractAddress())return!0;let p=Bp({receiver:e,data:n});return p?new it.Address(p).isContractAddress()||Ff(e,o,n):!1}var Of=e=>e.toLowerCase().match(/[0-9a-f]/g),Bf=e=>e.length%2===0;function Ff(e,o,n){let r=n==null?void 0:n.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=Mf.includes(c),l=p.every(_=>Of(_)&&Bf(_));return m&&d&&l}function Bp({receiver:e,data:o}){try{if(!o)return e;let n=tt(o)?it.TransactionPayload.fromEncoded(o).toString():o,r=Uf(n),c=n.split("@");return r>-1?c[r]:e}catch(n){console.log(n);return}}function Uf(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}t();t();t();var Wf=require("@multiversx/sdk-core"),Gf=w(require("bignumber.js"));U();t();t();t();var hn="accounts";var za="blocks";var Ka="dapp/config";var Xa="network/config";var hr="batch",Tn="transactions";t();t();t();t();le();t();t();le();t();t();t();var zf=w(require("bignumber.js"));C();t();var qf=require("@multiversx/sdk-core"),Ya=w(require("bignumber.js"));C();t();var Gp=w(require("bignumber.js")),xr=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let r=new Gp.default(n),c=o?0:-1;return r.toString(10)===n&&r.comparedTo(0)>=c};t();Ya.default.config({ROUNDING_MODE:Ya.default.ROUND_FLOOR});t();t();t();C();t();t();t();t();C();t();C();t();var Kf=require("@multiversx/sdk-core");C();t();var ct=require("@multiversx/sdk-core"),Jf=w(require("bignumber.js"));C();t();t();var Xf=w(require("bignumber.js"));C();t();C();t();t();t();t();t();t();C();t();C();t();C();t();le();var Qf=["reDelegateRewards","claimRewards","unBond"],eh=["wrapEgld","unwrapEgld"],oh=["unStake"],nh=["unDelegate"];t();t();t();C();t();var ih=w(require("bignumber.js"));t();t();le();t();var ch=w(require("bignumber.js"));t();t();t();t();var dh=w(require("bignumber.js"));M();t();t();t();t();U();t();var $p=require("@multiversx/sdk-web-wallet-provider");C();t();var Vp=w(require("qs"));t();se();var yr=e=>{let o=new URLSearchParams(e).toString(),{pathname:n,hash:r}=W(),c=o?`?${o}`:"",p=n?`${n}${c}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};mn();t();mn();var lh={search:no()?window.location.search:"",removeParams:[]},pt=(e,o=lh)=>{var m;let n={},r=no()?window.location.search:"",c=(m=o.search)!=null?m:r;if(c){let d=c?new URLSearchParams(c):[];n=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=n[d],delete n[d]}),o.removeParams!=null&&Object.keys(n).forEach(d=>{var _,T;let[l]=d.split("[");(((_=o.removeParams)==null?void 0:_.includes(d))||((T=o.removeParams)==null?void 0:T.includes(l)))&&delete n[d]}),{remainingParams:p,params:n,clearNavigationHistory:()=>yr(n)}};var Qa=({removeParams:e,search:o})=>{let n=no()?window.location.search:"",r=o!=null?o:n;if(!r)return{};let c=Vp.default.parse(r.replace("?","")),p=Object.keys(c).filter(d=>!e.includes(d)),{remainingParams:m}=pt(p,{search:o,removeParams:e});return yr(m),m};var ei=({transaction:e,search:o})=>Qa({removeParams:[...Object.keys(e),$p.WALLET_PROVIDER_CALLBACK_PARAM,Kn,Ta],search:o});t();t();t();ae();t();le();t();t();ae();t();var _h=w(require("linkifyjs"));t();C();t();var uh=w(require("bignumber.js"));t();M();t();t();U();t();U();t();t();t();le();t();le();t();var gh=w(require("bignumber.js"));C();le();t();le();t();var qp=require("react");M();t();t();le();t();t();var fh=require("@multiversx/sdk-core/out"),hh=w(require("bignumber.js"));le();t();M();t();t();M();var j1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var zp=require("react");M();ae();t();var xh=require("react");le();var Q1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];_n();t();var Sr=e=>e.transactions,po=v(Sr,e=>e.signedTransactions),yh=v(Sr,e=>e.signTransactionsError),Kp=v(Sr,e=>e.signTransactionsCancelMessage),br=e=>o=>Object.entries(o).reduce((n,[r,c])=>(e(c.status)&&(n[r]=c),n),{}),oi=v(po,br(ro)),Xp=v(po,br(Bo)),Yp=v(po,br(Fo)),Sh=v(po,br(Ba)),Jp=v(Sr,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:I(f({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>gn(n)))||[]})}),bh=v(po,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});function wr(e){return g(this,null,function*(){let{apiAddress:o,apiTimeout:n}=Y(S.getState()),r=e.map(p=>Zp.default.post(`${o}/transactions`,p.toPlainObject(),{timeout:parseInt(n)}));return(yield Promise.all(r)).map(({data:p})=>p.txHash)})}t();var Qp=w(require("axios"));fo();t();C();var dt=({sessionId:e,address:o})=>`${e}${Wt}${o}`;function vr(n){return g(this,arguments,function*({transactions:e,sessionId:o}){var m;let r=Le(S.getState()),{apiAddress:c,apiTimeout:p}=Y(S.getState());if(!r)return{error:"Invalid address provided. You need to be logged in to send transactions",batchId:null};try{let d=dt({sessionId:o,address:r}),l={transactions:e,id:d},_=yield Qp.default.post(`${c}/${hr}`,l,{timeout:Number(p!=null?p:Ot)});return{batchId:d,data:_.data}}catch(d){return console.error("error sending batch transactions",d),{error:(m=d==null?void 0:d.message)!=null?m:"error sending batch transactions",batchId:null}}})}t();var ni=w(require("axios"));var Ir=e=>g(void 0,null,function*(){let o=nt(S.getState()),n=e.map(c=>c.hash),{data:r}=yield ni.default.get(`${o}/${Tn}`,{params:{hashes:n.join(","),withScResults:!0}});return e.map(({hash:c,previousStatus:p})=>{let m=r.find(d=>(d==null?void 0:d.txHash)===c);return{hash:c,data:m==null?void 0:m.data,invalidTransaction:m==null,status:m==null?void 0:m.status,results:m==null?void 0:m.results,sender:m==null?void 0:m.sender,receiver:m==null?void 0:m.receiver,previousStatus:p,hasStatusChanged:m&&m.status!==p}})}),em=e=>{let o=nt(S.getState());return ni.default.get(`${o}/transactions/${e}`,{timeout:1e4})};t();var vh=w(require("axios"));t();t();var Ih=w(require("axios"));t();var Ah=w(require("axios"));t();t();t();t();t();var nm=require("@lifeomic/axios-fetch"),ti=w(require("axios")),ri=(0,nm.buildAxiosFetch)(ti.default),ai=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function kh(e,o,n){return g(this,null,function*(){try{let r=yield ri(e,f({method:"POST",body:o?JSON.stringify(o):void 0,headers:f({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return ai(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function Lh(e,o){return g(this,null,function*(){try{let n=yield ri(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return ai(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function Ph(e,o,n){return g(this,null,function*(){try{let r=yield ri(e,f({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return ai(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var So=ti.default.create();So.get=Lh;So.post=kh;So.patch=Ph;var tm=e=>So.get(e).then(o=>o.data);t();var Vo=e=>{let o=e!=null?e:nt(S.getState());return o.endsWith("/")?o.slice(0,-1):o};t();var Eh=w(require("axios"));t();var rm=w(require("swr"));var xn=({apiEndpoint:e})=>{let o=Vo(),n=e?`${o}/${e}`:null;return(0,rm.default)(n,tm)};t();t();var Ch=e=>{let n=`${Vo()}/${hn}/${e}?withGuardianInfo=true`;return So.get(n)},am=e=>g(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield Ch(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});t();var lt=e=>xn({apiEndpoint:e?`${hn}/${e}?withGuardianInfo=true`:null});t();t();fo();t();var im=w(require("axios"));function ii(e){return g(this,null,function*(){let o=`${e}/${Ka}`;try{let{data:r}=yield im.default.get(o);if(r!=null){let c="egldDenomination";if(c in r){let n=r,{[c]:p,decimals:m}=n,d=De(n,[oa(c),"decimals"]);return I(f({},d),{decimals:p,digits:m})}return r}}catch(r){console.error("error fetching configuration for ",o)}return null})}t();var sm=w(require("axios"));var Nh=e=>{try{return Boolean(new URL(e))}catch(o){return!1}};function cm(){return g(this,null,function*(){var n;let e=Vo();if(!Nh(e))return null;let o=`${e}/${Xa}`;try{let{data:r}=yield sm.default.get(o);if(r!=null)return(n=r==null?void 0:r.data)==null?void 0:n.config}catch(r){console.error("error fetching configuration for ",o)}return null})}t();fo();t();fo();t();t();t();t();var Dh=w(require("axios"));t();C();t();var jm=require("react"),Nr=require("@multiversx/sdk-core");t();t();t();var mm=require("react"),yn=require("react-redux");var Mh={store:S,subscription:Dp},_t=(0,mm.createContext)(Mh),iD=(0,yn.createStoreHook)(_t),R=(0,yn.createDispatchHook)(_t),y=(0,yn.createSelectorHook)(_t);var fe=()=>y(ao);t();var mo=()=>y(qc);t();t();t();t();var dm=require("@multiversx/sdk-extension-provider"),lm=require("@multiversx/sdk-hw-provider"),_m=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),um=require("@multiversx/sdk-opera-provider"),gm=require("@multiversx/sdk-passkey-provider/out"),si=require("@multiversx/sdk-web-wallet-provider");C();go();t();var lo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Sn=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");U();t();var Ar={},kr=bn;var Oh="/dapp/init",we=e=>{switch(e==null?void 0:e.constructor){case si.WalletProvider:return"wallet";case kr:return"walletconnectv2";case lm.HWProvider:return"ledger";case dm.ExtensionProvider:return"extension";case gm.PasskeyProvider:return"passkey";case _m.MetamaskProvider:return"metamask";case um.OperaProvider:return"opera";case Ae.CrossWindowProvider:return"crossWindow";case lo.IframeProvider:return"iframe";case bn:return"";default:return"extra"}},Lr=e=>new si.WalletProvider(`${e}${Oh}`),ci=e=>g(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:n,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:n===Bs}}),Ee=e=>`Unable to perform ${e}, Provider not initialized`,bn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Ee("getAccount"))}setAccount(o){throw new Error(Ee(`setAccount: ${o}`))}login(o){throw new Error(Ee(`login with options: ${o}`))}logout(o){throw new Error(Ee(`logout with options: ${o}`))}getAddress(){throw new Error(Ee("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(Ee(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(Ee(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(Ee(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(Ee(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(Ee(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(Ee(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},$o=new bn;var mi=$o,pi=null;function ee(e){mi=e}function di(e){pi=e}function Pr(){pi!=null&&(mi=pi)}function pe(){return mi||$o}var wn=()=>{let e=pe(),o=we(e);return{provider:e,providerType:o}};t();var fm=()=>y(Xc);t();t();t();t();t();t();var ut=w(require("react"));var GD=(0,ut.createContext)({}),HD=S.getState();t();var Tm=w(require("react"));t();var li=w(require("react")),Bh=w(require("axios"));t();t();var xm=()=>y(Kc);N();t();t();var $m=require("@multiversx/sdk-native-auth-client");t();var bm=w(require("axios"));t();t();t();function ym(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var Sm=(e,o,n,r=0)=>g(void 0,null,function*(){try{return yield e(...n)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield ym(o.delay)),yield Sm(e,o,n,r+1)):null}}),Er=(e,o={retries:5,delay:500})=>(...n)=>g(void 0,null,function*(){return yield Sm(e,o,n)});var Fh=4,Uh=3e4,Cr={current:null},jo={current:null},Wh=Er((e,o,n)=>g(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield bm.default.get(`${e}/${za}?from=${Fh}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));function wm(e,o,n,r){return g(this,null,function*(){if(e==null)throw new Error("missing api url");let c=Date.now();if(Cr.current!=null&&c<Cr.current.timestamp*1e3+Uh&&!r)return Cr.current;if(jo.current!=null)return yield jo.current;jo.current=Wh(e,o,n);try{let p=yield jo.current;if(p==null)throw jo.current=null,new Error("could not get block hash");return Cr.current={hash:p.hash,timestamp:p.timestamp},jo.current=null,p}catch(p){return jo.current=null,null}})}t();t();Gt();t();t();var Vm=w(Hm());var vn=e=>{if(!e||!(0,Vm.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,c,p]=o,m=JSON.parse(Go(p)),d=Go(n);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};function dT(e){return Object.prototype.toString.call(e)==="[object String]"}var In=e=>{var n;if(!e||!dT(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,c,p]=o,m=Go(r),d=Go(c),l=vn(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let _=I(f({},l),{address:m,body:d,signature:p});return(n=l.extraInfo)!=null&&n.timestamp||delete _.extraInfo,_}catch(r){return null}};var gi={isExpired:!1},An=e=>{if(!e)return gi;let o=In(e);if(!o)return gi;let n=sn(),{ttl:r,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return gi;let m=p+r,d=n>m,l=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};t();ae();var ht={origin:W().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},Tt=e=>{var n,r,c,p,m,d;return e===!0?ht:{origin:(n=e==null?void 0:e.origin)!=null?n:ht.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:ht.expirySeconds,apiAddress:(c=e==null?void 0:e.apiAddress)!=null?c:ht.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:ht.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var xt=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:c,extraInfo:p,gatewayUrl:m,extraRequestHeaders:d}=Tt(e),l=new $m.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:c,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:Tt,initialize:u=>g(void 0,null,function*(){var L,k;if(!n||!o)return"";let x=()=>l.getCurrentBlockHash();try{let P=(L=u==null?void 0:u.latestBlockInfo)!=null?L:yield wm(n,c,x,u==null?void 0:u.noCache);if(!P)return"";let{hash:V,timestamp:O}=P,E=l.encodeValue(JSON.stringify(f(f({},(k=u==null?void 0:u.extraInfo)!=null?k:p),O?{timestamp:O}:{})));return`${l.encodeValue(o)}.${V}.${r}.${E}`}catch(P){return console.error("Error getting native auth token: ",P.toString()),""}}),getToken:({address:u,token:x,signature:L})=>l.getToken(u,x,L),getTokenExpiration:An}};var lT=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},Ce=e=>{let o=y(Y),n=y(un),r=(0,jm.useRef)(n==null?void 0:n.loginToken),c=lT(o.apiAddress,e),p=Tt(f(f({},e===!0?{}:e),c?{apiAddress:c}:{})),m=Boolean(e),d=xt(p),{address:l}=fe(),_=R(),T=k=>{r.current=k,_(To(f(I(f({},n),{loginToken:k}),c?{nativeAuthConfig:p}:{})))},u=()=>{try{return d.initialize()}catch(k){console.error("Unable to get block. Login failed.",k);return}},x=({address:k,signature:P})=>{let V=r.current;if(!V)throw"Token not found. Call `setLoginToken` first.";if(!m){_(To({loginToken:V,signature:P}));return}let O=d.getToken({address:k,token:V,signature:P});return _(To(f({loginToken:V,signature:P,nativeAuthToken:O},c?{nativeAuthConfig:p}:{}))),O};return{configuration:p,setLoginToken:T,getNativeAuthLoginToken:u,setTokenLoginInfo:x,refreshNativeAuthTokenLogin:V=>g(void 0,[V],function*({signMessageCallback:k,nativeAuthClientConfig:P}){let E=yield xt(P||p).initialize({noCache:Boolean(P)});if(r.current=E,!E)return;let z=new Nr.Message({address:new Nr.Address(l),data:a.Buffer.from(`${l}${E}`)}),D=yield k(z,{});if(!(D!=null&&D.signature))throw"Message not signed";return x({address:l,signature:a.Buffer.from(D.signature).toString("hex")})})}};t();var ue=require("react");t();var Rr=require("react");function qm(e,o=[]){let n=(0,Rr.useRef)(!0);(0,Rr.useEffect)(()=>{n.current?n.current=!1:e()},o)}H();N();U();t();t();var Jm=w(Dr());zn();var Km,Xm,Ym,uT=(Ym=(Xm=(Km=ke.safeWindow)==null?void 0:Km.location)==null?void 0:Xm.origin)==null?void 0:Ym.includes("localhost"),Zm=e=>{if(!(0,Jm.default)(e))return Boolean(e);let n=f({},e);return Boolean(uT)&&delete n.origin,Object.keys(n).length>0};t();function Ke(){return io(S.getState())}to();t();H();M();t();function Qm(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function ed(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gT(e.path,e.caseSensitive,e.end),c=o.match(n);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),d=c.slice(1);return{params:r.reduce((_,T,u)=>{if(T==="*"){let x=d[u]||"";m=p.slice(0,p.length-x.length).replace(/(.)\/+$/,"$1")}return _[T]=fT(d[u]||"",T),_},{}),pathname:p,pathnameBase:m,pattern:e}}function gT(e,o=!1,n=!0){Qm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),r]}function fT(e,o){try{return decodeURIComponent(e)}catch(n){return Qm(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}t();t();ae();var od=()=>{let{search:e}=W(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return fn(r)?r:null};t();var qo=e=>am(e);t();t();function nd(){let e=pe();return we(e)}t();U();t();function zo(e){return nd()===e}function he(){let e=S.getState(),o=pe(),n=Le(e),r=io(e),c=dr(e);if(!o)throw"provider not initialized";return zo("ledger")&&r?new Promise(p=>{p(n)}):!zo("")&&!zo("wallet")&&!zo("extra")?o.getAddress():new Promise(p=>{let m=od();c!=null&&m&&p(m),r&&p(n),p("")})}t();function Ko(e){let o=S.getState(),n=zc(o);return e?n&&!isNaN(n)?Math.max(n,e.nonce):e.nonce:n}t();t();ae();var Mr=()=>{let{search:e}=W(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var kn=()=>{var n;let e=Mr(),o=X(S.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};t();H();M();t();N();var td=()=>g(void 0,null,function*(){try{let e=yield he();try{let o=yield qo(e);if(o!=null){let n=I(f({},o),{nonce:Ko(o)});return S.dispatch(ho(n)),n}}catch(o){console.error("Failed getting account ",o)}}catch(e){console.error("Failed getting address ",e)}return null});function bo(){return g(this,null,function*(){let e=pe();if(e==null)throw"Provider not initialized";if(!e.isInitialized||e.isInitialized())return td();try{if(!e.init)throw"Current provider does not have init() function";return(yield e.init())?td():void 0}catch(o){console.error("Failed initializing provider ",o)}})}t();N();function rd(e){S.dispatch(jt(e))}t();var ad=require("@multiversx/sdk-core");M();se();ln();cn();Mo();se();var id=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&Oo({url:e})},hT=e=>{let o=He.local.getItem(ge.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&(He.local.setItem({key:ge.logoutEvent,data:e,expires:0}),He.local.removeItem(ge.logoutEvent))},TT=500;function Te(c,p){return g(this,arguments,function*(e,o,n=Boolean(kn()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var k;let m="",d=pe(),l=we(d),_=l==="wallet",T=((k=d==null?void 0:d.isInitialized)==null?void 0:k.call(d))===!0;if(n&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield he(),hT(m)}catch(P){console.error("error fetching logout address",P)}let u=dn(e),x=W(),L=new URL(decodeURIComponent(u)).pathname;if((ed(x.pathname,L)||_&&T)&&uc(),!m&&!T)return id({callbackUrl:u,onRedirect:o});try{if(S.dispatch(G()),_)return setTimeout(()=>{d.logout({callbackUrl:u})},TT);r.hasConsentPopup&&l==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:u})}catch(P){console.error("Logging out error:",P)}finally{_||id({callbackUrl:u,onRedirect:o})}})}t();var sd=({maxRetries:e})=>new Promise((o,n)=>{let r=0,c=()=>{let p=Wo(S.getState());if(p){o(p);return}if(r<e){r++,setTimeout(c,1e3);return}n(null)};c()});ae();t();t();go();M();var wo=e=>(Object.values(j).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=Ae.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=lo.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);var fi=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,logoutRoute:c,customRequestMethods:p=[]})=>{var Co;let m=R(),d=Zm(n),l=Ce(d?n:!1),_=o,[T,u]=(0,ue.useState)(""),[x,L]=(0,ue.useState)(""),[k,P]=(0,ue.useState)(!0),[V,O]=(0,ue.useState)([]),[E,z]=(0,ue.useState)(null),{provider:D}=wn(),te=y(tp),oe=y(rp),ve=y(ap),Ye=y(ip),Hn=y(yo),Vn=y(Zc),B=(0,ue.useRef)(D),Lo=(0,ue.useRef)(!1),Po=(0,ue.useRef)(!1),At=(Co=c!=null?c:Hn)!=null?Co:"/",Zo=[Ar.CANCEL_ACTION,...p];o&&Zo.push(Ar.SIGN_LOGIN_TOKEN),d&&Zo.push(Ar.SIGN_NATIVE_AUTH_TOKEN);let Yr=k?"":`${Ye}?wallet-connect=${encodeURIComponent(x)}`,$n=Boolean(T),jn=Ke(),Jr=()=>{Te(At)},Zr=J=>{console.log("WalletConnect Session Event: ",J)},K=()=>g(void 0,null,function*(){var J,Z,Q,ie;try{if(Lo.current||B.current==null)return;if(!Po.current){try{yield(J=B.current)==null?void 0:J.logout()}catch(Qr){console.warn("Unable to logout")}return}let ce=yield(Q=(Z=B.current)==null?void 0:Z.getAddress)==null?void 0:Q.call(Z);if(!ce){console.warn("Login cancelled.");return}let Ie=yield(ie=B.current)==null?void 0:ie.getSignature(),xe={address:ce,loginMethod:"walletconnectv2"},Qo={logoutRoute:At,loginType:"walletconnectv2",callbackRoute:e!=null?e:W().href};m(oc(Qo)),Ie&&l.setTokenLoginInfo({signature:Ie,address:ce}),m(re(xe)),xo({callbackRoute:e,onLoginRedirect:r,options:{address:ce,signature:Ie}})}catch(ce){u("User rejected connection proposal"),console.error(ce)}}),F=()=>g(void 0,null,function*(){var Z,Q,ie,ce,Ie;if(we(B.current)==="walletconnectv2")try{((ce=(ie=(Q=(Z=B.current)==null?void 0:Z.walletConnector)==null?void 0:Q.session)==null?void 0:ie.getAll())!=null?ce:[]).length>0&&(yield(Ie=B.current)==null?void 0:Ie.logout()),B.current=$o,z(null)}catch(xe){console.warn("Unable to logout")}}),me=J=>g(void 0,null,function*(){var Z,Q,ie;if(!te||!oe){u("Invalid WalletConnect setup");return}if(!J||!J.topic){u("Expired connection");return}try{if((B.current?we(B.current):!1)!=="walletconnectv2"){yield Eo();return}if(P(!0),yield F(),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}_&&l.setLoginToken(_),yield Eo(!1);let{approval:Ie}=yield(Z=B.current)==null?void 0:Z.connect({topic:J.topic,methods:Zo});try{yield(Q=B.current)==null?void 0:Q.login({approval:Ie,token:_})}catch(xe){console.error("User rejected existing connection proposal",xe),u("User rejected existing connection proposal"),P(!0),yield Eo()}}catch(ce){console.error("Unable to connect to existing session",ce),u("Unable to connect to existing session")}finally{O((ie=B.current)==null?void 0:ie.pairings)}}),Re=J=>g(void 0,null,function*(){var Z,Q;try{J&&(yield(Z=B.current)==null?void 0:Z.logout({topic:J}))}catch(ie){console.error("Unable to remove existing pairing",ie),u("Unable to remove existing pairing")}finally{let ie=yield(Q=B.current)==null?void 0:Q.getPairings();O(ie)}});function Eo(J=!0){return g(this,null,function*(){var Qo,Qr,zi;wo();let Z=yield sd({maxRetries:15});if(!Z){console.error("Invalid chainID"),u("Invalid chainID");return}if(!oe||!te){console.error("Invalid WalletConnect setup"),u("Invalid WalletConnect setup");return}let Q=Ke(),ie=Po.current===!1&&!Q,ce=(Qr=(Qo=B.current)==null?void 0:Qo.isInitialized)==null?void 0:Qr.call(Qo);if(Lo.current||ie||ce)return;if(Lo.current=!0,(zi=B.current)!=null&&zi.walletConnector){yield B.current.init(),z(B.current),Lo.current=!1,J&&(yield kt());return}let Ie={onClientLogin:K,onClientLogout:Jr,onClientEvent:Zr},xe=new kr(Ie,Z,te,oe,ve);yield xe.init(),z(xe),B.current=xe,Lo.current=!1,J&&(O(xe.pairings),yield kt())})}function kt(){return g(this,null,function*(){var J,Z;if(!!B.current){if(!te||!oe){u("Invalid WalletConnect setup");return}try{if(!Po.current)return;let{uri:Q,approval:ie}=yield(J=B.current)==null?void 0:J.connect({methods:Zo});if(!Boolean(Q))return;if(L(Q),(ve==null?void 0:ve.logger)==="debug"&&console.log("WalletConnect uri: ",Q),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}if(_&&l.setLoginToken(_),(B.current?we(B.current):!1)!=="walletconnectv2"){P(!0),yield Eo();return}try{yield(Z=B.current)==null?void 0:Z.login({approval:ie,token:_})}catch(xe){console.error("User rejected connection proposal",xe),u("User rejected connection proposal"),P(!0)}}catch(Q){console.error("Unable to connect",Q)}}})}return qm(()=>{B.current=D},[D]),(0,ue.useEffect)(()=>(Po.current=!0,()=>{Po.current=!1}),[]),(0,ue.useEffect)(()=>{P(!x)},[x]),(0,ue.useEffect)(()=>{if(!E)return;(Boolean(E.session)||Vn==="walletconnectv2")&&jn&&ee(E)},[E,jn]),[Eo,{error:T,loginFailed:$n,isLoading:k&&!$n,isLoggedIn:jn&&!$n},{uriDeepLink:Yr,walletConnectUri:x,cancelLogin:F,connectExisting:me,removeExistingPairing:Re,wcPairings:V}]};t();var cd=require("react");t();H();N();M();function Or(e,o=S.dispatch){let n=In(e);if(n==null)return;let{signature:r,address:c}=n;r&&e&&c&&(o(To({loginToken:e,signature:r,nativeAuthToken:e})),o(re({address:c,loginMethod:"extra"})))}function pd(){let e=R(),o=y(Jc),n=kn();(0,cd.useEffect)(()=>{!o||!n||Or(n,e)},[n,o])}H();N();t();t();C();t();t();t();var Xo=w(require("bignumber.js")),hi=e=>{let o=new Xo.default(e).dividedBy(1e3).integerValue(Xo.default.ROUND_FLOOR),n=new Xo.default(o).dividedBy(60).integerValue(Xo.default.ROUND_FLOOR),r=new Xo.default(n).dividedBy(60).integerValue(Xo.default.ROUND_FLOOR),c=r.modulo(60).isGreaterThan(1),p=n.modulo(60).isGreaterThan(1),m=n.modulo(60).isLessThan(1);return c?`${r} hours`:p?`${n} minutes`:m?"less than 1 minute":`${n} minute`};U();t();t();var md=require("@multiversx/sdk-opera-provider");function dd(e){return g(this,null,function*(){try{let o=md.OperaProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise opera crypto wallet, make sure that opera crypto wallet is installed.")}catch(o){console.error("Unable to login to OperaProvider",o)}return null})}t();var ld=require("@multiversx/sdk-extension-provider");function _d(e){return g(this,null,function*(){try{let o=ld.ExtensionProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise extension, make sure MultiversX wallet extension is installed.")}catch(o){console.error("Unable to login to ExtensionProvider",o)}return null})}t();go();function Ti(n){return g(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield Ae.CrossWindowProvider.getInstance().init(),c=Ae.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return c;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}t();function ud(r){return g(this,arguments,function*({address:e,walletUrl:o,loginType:n}){try{let c=lo.IframeProvider.getInstance();if(c.isInitialized())return c;switch(n){case Sn.IframeLoginTypes.passkey:c.setLoginType(Sn.IframeLoginTypes.passkey);break;case Sn.IframeLoginTypes.metamask:c.setLoginType(Sn.IframeLoginTypes.metamask);break;default:break}if(c.setAddress(e).setWalletUrl(o),yield c.init())return c;console.error("Could not initialise IframeProvider")}catch(c){console.error("Unable to login to IframeProvider",c)}return null})}t();t();var gd=n=>g(void 0,[n],function*({loginToken:e,extraInfoData:o}){if(e==null||Object.keys(o).length===0)return null;let r=vn(String(e)),_=(r==null?void 0:r.extraInfo)||{},{timestamp:c}=_,p=De(_,["timestamp"]);if(!(r&&c!=null))return null;let d={hash:String(r==null?void 0:r.blockHash),timestamp:Number(c)};return yield xt({extraInfo:f(f({},p),o),expirySeconds:r==null?void 0:r.ttl,origin:r==null?void 0:r.origin}).initialize({latestBlockInfo:d})});var xi=p=>g(void 0,[p],function*({loginToken:e,extraInfoData:o,address:n,signature:r,loginService:c}){let m=yield gd({loginToken:e,extraInfoData:o}),d=o.multisig||o.impersonate||n,l=m!=null?d:n;return m!=null&&c.setLoginToken(m),r&&c.setTokenLoginInfo({signature:r,address:n}),yield qo(l)});t();var fd=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");function hd(e){return g(this,null,function*(){try{let o=fd.MetamaskProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise metamask, make suremetamask flask is installed.")}catch(o){console.error("Unable to login to MetamaskProvider",o)}return null})}t();var Td=require("@multiversx/sdk-passkey-provider/out");function xd(e){return g(this,null,function*(){try{let o=Td.PasskeyProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise passkey provider")}catch(o){console.error("Unable to login to PasskeyProvider",o)}return null})}t();t();var yd=require("react"),yi=require("@multiversx/sdk-hw-provider");var Si=()=>{let e=y(yo),o=y(io),n=y(mr),r=pe(),[c,p]=(0,yd.useState)(),m=()=>g(void 0,null,function*(){let l=(n==null?void 0:n.index)!=null;try{if(r instanceof yi.HWProvider&&r.isInitialized())return l&&(yield r.setAddressIndex(n.index)),r;let _=new yi.HWProvider;return(yield _.init())?(l&&(yield _.setAddressIndex(n.index)),_):null}catch(_){return console.error("Failed to initialise Ledger Provider"),null}});function d(l){return g(this,null,function*(){let _,T=o&&!(l!=null&&l.isRelogin);try{if(_=yield m(),!_){console.warn("Could not initialise ledger app"),T&&Te(e);return}let u=yield ci(_);return ee(_),p(u),_}catch(u){console.error("Could not initialise ledger app",u),T&&Te(e)}return null})}return{setLedgerProvider:d,ledgerData:c}};var bi=!1;function Sd(){let e=y(Y),o=y(lr),n=y(Qc),{loginMethod:r,iframeLoginType:c}=y(X),p=y(dr),m=y(Le),d=y(Ga),l=y(mr),_=y(io),T=y(Wo),u=y(un),x=u==null?void 0:u.nativeAuthConfig,L=Ce(x||!1),{data:k,isLoading:P,error:V}=lt(m),O=(0,vo.useRef)(!1),E=R(),{setLedgerProvider:z,ledgerData:D}=Si();pd();let{callbackRoute:te,logoutRoute:oe}=n||{callbackRoute:"",logoutRoute:""},[ve]=fi({callbackRoute:te,logoutRoute:oe});(0,vo.useEffect)(()=>{Ye()},[e]),(0,vo.useEffect)(()=>{Zr()},[m,r,T]),(0,vo.useEffect)(()=>{Vn()},[u==null?void 0:u.nativeAuthToken,m]),(0,vo.useEffect)(()=>{B()},[k,P]),(0,vo.useEffect)(()=>{Hn()},[d,_,D]);function Ye(){return g(this,null,function*(){let K=e.chainId&&![Rt,Dt,Mt].includes(e.chainId)&&!e.roundDuration;if(!!(!e.chainId||K))try{let me=yield cm();me&&(e.chainId!==me.erd_chain_id||e.roundDuration!==me.erd_round_duration)&&E(bc({chainId:me.erd_chain_id,roundDuration:me.erd_round_duration}))}catch(me){console.error("failed refreshing chainId ",me)}})}function Hn(){d==null&&l!=null&&D&&E(Ia({index:l.index,address:m,hasContractDataEnabled:D.dataEnabled,version:D.version}))}function Vn(){return g(this,null,function*(){let{remainingParams:{impersonate:K,multisig:F}}=pt(["impersonate"]),me=qa(m);if(!(u!=null&&u.nativeAuthToken)||K||F||me)return;let Re=In(u==null?void 0:u.nativeAuthToken);(Re==null?void 0:Re.address)&&Re.address!==m&&(E($t(Re.address)),yield bo())})}function B(){return g(this,null,function*(){if(P){E(pn(!0));return}if(V){E(Xs("Failed getting account")),console.error("Failed getting account ",V);return}if(O.current){O.current=!1,E(pn(!1));return}k?E(ho(I(f({},k),{address:m,nonce:k.nonce.valueOf()}))):_||E($t("")),E(pn(!1))})}function Lo(){return g(this,null,function*(){let K=Lr(o);if(ee(K),p!=null){try{let F=yield he(),{clearNavigationHistory:me,remainingParams:{signature:Re,multisig:Eo,impersonate:kt}}=pt(["signature","loginToken","address","multisig","impersonate"]);if(!F)return ee($o),E(To(null)),E(Kt(null)),me();let Co=yield xi({loginToken:u==null?void 0:u.loginToken,extraInfoData:{multisig:Eo,impersonate:kt},address:F,signature:Re,loginService:L});Co&&(O.current=!0,E(pn(!0)),E(re({address:Co.address,loginMethod:"wallet"})),E(ho(I(f({},Co),{nonce:Ko(Co)}))),E(pn(!1))),me()}catch(F){console.error("Failed authenticating wallet user ",F)}E(Kt(null))}})}function Po(){return g(this,null,function*(){let K=yield he(),F=yield _d(K);F&&ee(F)})}function At(){return g(this,null,function*(){let K=yield he(),F=yield xd(K);F&&ee(F)})}function Zo(){return g(this,null,function*(){let K=yield he(),F=yield hd(K);F&&ee(F)})}function Yr(){return g(this,null,function*(){let K=yield he(),F=yield dd(K);F&&ee(F)})}function $n(){return g(this,null,function*(){let K=yield he(),F=yield Ti({address:K,walletUrl:e.walletAddress});F&&ee(F)})}function jn(){return g(this,null,function*(){let K=yield he();if(!e.metamaskSnapWalletAddress)throw new Error("Metamask snap wallet URL is not set.");let F=yield ud({address:K,walletUrl:e.metamaskSnapWalletAddress,loginType:c});F&&ee(F)})}function Jr(){return g(this,null,function*(){try{E(ka(!0)),yield ve(!1)}catch(K){console.error("Could not initialize WalletConnect")}finally{E(ka(!1))}})}function Zr(){return g(this,null,function*(){if(!(r==null||bi))switch(r){case"ledger":{bi=!0,yield z(),bi=!1;break}case"walletconnectv2":{Jr();break}case"extension":{Po();break}case"passkey":{At();break}case"metamask":{Zo();break}case"opera":{Yr();break}case"crossWindow":{$n();break}case"iframe":jn();break;case"extra":{Pr();break}case"wallet":case"":{Lo();break}default:return}})}return null}t();var wd=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),vd=require("@multiversx/sdk-webview-provider/out/WebviewProvider");H();t();t();N();function wi(){S.dispatch(Uo())}function bd(e){S.dispatch(Uc({batchId:e}))}t();se();t();N();M();t();t();var ST=require("@multiversx/sdk-core"),bT=w(require("bignumber.js"));C();t();t();var wT=w(require("bignumber.js"));C();var Ne=class{constructor(){this.init=()=>g(this,null,function*(){return yield this._provider.init()});this.login=()=>g(this,null,function*(){var n;let o=yield this._provider.login();return{address:(n=o==null?void 0:o.address)!=null?n:""}});this.logout=()=>g(this,null,function*(){return S.dispatch(G()),yield this._provider.logout()});this.relogin=()=>g(this,null,function*(){let o=yield this._provider.relogin();return o?(Or(o),Pr(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>g(this,null,function*(){let n=yield this._provider.signTransactions(o);return n||(wi(),this._provider.cancelAction(),null)});this.signTransaction=o=>g(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>g(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>g(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>g(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,wd.providerNotInitializedError)("getAddress");this._provider=vd.WebviewProvider.getInstance({resetStateCallback:()=>S.dispatch(G())})}static getInstance(){return Ne._instance||(Ne._instance=new Ne),Ne._instance}getAccount(){var n;let o=this._provider.getAccount();return{address:(n=o==null?void 0:o.address)!=null?n:""}}setAccount(o){this._provider.setAccount(o)}};N();M();t();var Xe=require("react"),Id=require("@multiversx/sdk-core/out");fo();N();Jn();Qn();var vT=({customNetworkConfig:e={},environment:o,dappConfig:n})=>{let[r,c]=(0,Xe.useState)(!1),p=mo(),m=y(ep),d=(0,Xe.useMemo)(()=>n,[]),l=d==null?void 0:d.logoutRoute,{address:_,publicKey:T}=p,u=R();function x(){return g(this,null,function*(){let k=!(e!=null&&e.skipFetchFromServer),P=e==null?void 0:e.apiAddress,O=o in oo?oo[o]:{},E=f(f(f({},Zn),O),e),z=I(f({},E),{apiTimeout:String(E.apiTimeout),walletConnectBridgeAddresses:E.walletConnectBridgeAddresses||[],walletConnectV2RelayAddresses:"walletConnectV2RelayAddresses"in E?E.walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"]});if(k){let D="apiAddress"in O?O.apiAddress:"",te=yield ii(P||D);if(te!=null){let oe=f(f(f({},z),te),e);u(Pa(I(f({},oe),{apiTimeout:String(oe.apiTimeout)})));return}}u(Pa(z))})}function L(){return g(this,null,function*(){d&&u(Vc(d)),u(tc(l)),yield x(),c(!0)})}return(0,Xe.useEffect)(()=>{_&&new Id.Address(_).hex()!==T&&Te(l)},[_,T,l]),(0,Xe.useEffect)(()=>{L()},[e,o,d]),(0,Xe.useEffect)(()=>{p.address&&m&&Te(l)},[m,p.address,l]),{initialized:r}};function Ad({customNetworkConfig:e={},children:o,environment:n,dappConfig:r}){let[c,p]=(0,Xe.useState)(!(r!=null&&r.isSSR)),{initialized:m}=vT({customNetworkConfig:e,environment:n,dappConfig:r});return(0,Xe.useEffect)(()=>{p(!0)},[]),c?m?o:null:o}t();var Wn=w(require("react"));t();t();t();t();var q_=require("react");t();t();var vi=()=>y(Pe);t();N();t();t();t();t();function Ii(){let e=y(oi),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{pendingTransactions:e,pendingTransactionsArray:o,hasPendingTransactions:n}}_n();t();N();U();t();_n();function kd(e,o){return e.reduce((r,{status:c,hash:p})=>(p!=null&&!o.includes(p)&&ro(c)&&r.push({hash:p,previousStatus:c}),r),[])}t();N();U();function Ld({results:e,hash:o,sessionId:n}){let r=e==null?void 0:e.find(c=>(c==null?void 0:c.returnMessage)!=="");S.dispatch($e({transactionHash:o,sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage,inTransit:!1,serverTransaction:r})),S.dispatch(je({sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage}))}t();N();M();function Ai(e){S.dispatch(je({sessionId:e,status:"timedOut"}))}var Br={},ki=[];function IT({serverTransaction:e,sessionId:o,customTransactionInformation:n,shouldRefreshBalance:r,isSequential:c}){let{hash:p,status:m,inTransit:d,results:l,invalidTransaction:_,hasStatusChanged:T}=e;try{if(ki.includes(p))return;if(Br[p]>30){Ai(o);return}if(_&&!c||ro(m)){Br[p]=Br[p]?Br[p]+1:1;return}if(c&&!m){S.dispatch($e({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}));return}T&&(Bo(m)&&(n==null?void 0:n.completedTransactionsDelay)!=null?(ki.push(p),setTimeout(()=>S.dispatch($e({sessionId:o,status:"success",transactionHash:p,inTransit:d,serverTransaction:e})),n==null?void 0:n.completedTransactionsDelay)):S.dispatch($e({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}))),r||bo(),Fo(m)&&Ld({sessionId:o,hash:p,results:l})}catch(u){console.error(u),Ai(o)}}function Pd(l){return g(this,arguments,function*({sessionId:e,transactionBatch:{transactions:o,customTransactionInformation:n},getTransactionsByHash:r=Ir,shouldRefreshBalance:c,isSequential:p,onSuccess:m,onFail:d}){try{if(o==null)return;let _=kd(o,ki),T=yield r(_);for(let x of T)IT({serverTransaction:x,sessionId:e,customTransactionInformation:n,shouldRefreshBalance:c,isSequential:p});if(T.every(x=>x.status!=="pending")&&!(n!=null&&n.grouping)){if(T.every(k=>k.status==="success"))return m==null?void 0:m(e);if(T.some(k=>k.status==="fail"))return d==null?void 0:d(e)}}catch(_){console.error(_)}})}function Ed(){let{pendingTransactionsArray:e}=Ii();function o(n){return g(this,null,function*(){let r=e.filter(([,c])=>{var p;return!((p=c==null?void 0:c.customTransactionInformation)!=null&&p.grouping)}).filter(([c,p])=>c!=null&&ro(p.status));if(r.length>0)for(let[c,p]of r)yield Pd(f({sessionId:c,transactionBatch:p},n));n.shouldRefreshBalance&&(yield bo())})}return o}t();t();t();M();t();rn();var Ln=()=>{let e=y(np);return e?Math.max(1e3,e/2):9e4};t();t();function Pn(){let e=y(po),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{signedTransactions:e,signedTransactionsArray:o,hasSignedTransactions:n}}t();t();var AT=w(require("swr"));t();t();t();t();var Cd=require("react");t();t();var kT=require("react"),LT=require("@multiversx/sdk-web-wallet-provider"),PT=require("@multiversx/sdk-web-wallet-provider"),ET=w(require("qs"));C();N();U();_a();ae();var eU=W();t();var Dd=require("react"),Pi=require("@multiversx/sdk-core");C();La();t();t();t();t();t();t();t();C();ae();t();t();var y_=require("react"),S_=require("@multiversx/sdk-core"),pS=require("@multiversx/sdk-extension-provider"),mS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),dS=require("@multiversx/sdk-passkey-provider/out"),lS=w(T_());C();go();t();N();U();se();ae();t();var x_=require("react"),tS=require("@multiversx/sdk-extension-provider"),rS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),aS=require("@multiversx/sdk-passkey-provider/out");go();N();t();N();M();ln();ae();t();We();N();t();t();var _S=require("react");t();U();_n();t();var b_=require("react");t();t();var uS=require("react"),gS=require("@multiversx/sdk-extension-provider");We();H();U();to();se();se();t();var fS=require("react"),hS=require("@multiversx/sdk-opera-provider");We();H();U();to();se();ae();t();var TS=require("react");ha();We();go();H();N();U();to();ae();t();var wS=require("react");We();N();t();t();xa();t();t();var xS=w(require("platform"));mn();t();t();t();t();t();t();t();zn();U();t();t();var yS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();ln();cn();t();t();t();N();var SS={},bS={};var w_=e=>{if(e.component!=null){let o=e,{component:n,onClose:r}=o,c=De(o,["component","onClose"]),p=S.dispatch(Ca(I(f({},c),{component:null,onClose:void 0})));return SS[p==null?void 0:p.payload.toastId]=n,r&&(bS[p==null?void 0:p.payload.toastId]=r),p==null?void 0:p.payload}return S.dispatch(Ca(e)).payload};t();t();var v_=w(require("axios"));function Ri(e){return g(this,null,function*(){try{let{data:o}=yield v_.default.get(`${e}/websocket/config`);return`wss://${o.url}`}catch(o){throw console.error(o),new Error("Can not get websocket url")}})}se();ae();t();t();var DS=require("react");C();t();t();t();var Ao=w(require("react")),M_=require("react"),O_=require("react"),Gi=w(require("classnames")),B_=require("react-dom");C();t();var L_=w(require("react"));t();var vt=w(require("react"));t();mn();var I_=()=>!no();var IS=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(Mi(),Di))}),AS=()=>(Mi(),Me(Di)).default,Oi=I_();function k_({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,c]=vt.default.useState(Oi?void 0:AS()),[p,m]=vt.default.useState(Oi||n==null?void 0:n()),d=()=>g(this,null,function*(){(e?e():IS()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,vt.useEffect)(()=>{Oi&&d()},[]),{globalStyles:r,styles:p}}function Io(e,o){return n=>{let{globalStyles:r,styles:c}=k_({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return L_.default.createElement(e,I(f({},n),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}t();var E_=w(require("react")),C_=w(require("classnames"));var LS=({className:e,children:o,styles:n})=>E_.default.createElement("div",{className:(0,C_.default)(n==null?void 0:n.dappModalBody,e)},o),Bi=Io(LS,{ssrStyles:()=>Promise.resolve().then(()=>(uo(),_o)),clientStyles:()=>(uo(),Me(_o)).default});t();var Fi=w(require("react")),N_=w(require("classnames"));var PS=({visible:e,customFooter:o,className:n,footerText:r,styles:c})=>e?Fi.default.createElement("div",{className:(0,N_.default)(c==null?void 0:c.dappModalFooter,n)},o!=null?o:Fi.default.createElement("div",null,r)):null,Ui=Io(PS,{ssrStyles:()=>Promise.resolve().then(()=>(uo(),_o)),clientStyles:()=>(uo(),Me(_o)).default});t();var Rn=w(require("react")),R_=require("@fortawesome/free-solid-svg-icons"),D_=require("@fortawesome/react-fontawesome"),It=w(require("classnames"));var ES=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?n?Rn.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeader,r)},n):Rn.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeader,r)},Rn.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Rn.default.createElement("button",{onClick:m,className:(0,It.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Rn.default.createElement(D_.FontAwesomeIcon,{size:"lg",icon:R_.faTimes}))):null,Wi=Io(ES,{ssrStyles:()=>Promise.resolve().then(()=>(uo(),_o)),clientStyles:()=>(uo(),Me(_o)).default});var CS={showHeader:!0,showFooter:!1,headerText:"",footerText:""},NS=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=CS,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[T,u]=(0,M_.useState)(!1);if((0,O_.useEffect)(()=>{u(!0)},[]),!l)return null;let{showHeader:x,showFooter:L,headerText:k,footerText:P,modalDialogClassName:V="dapp-modal-dialog",modalContentClassName:O="dapp-modal-dialog-content",modalHeaderClassName:E="dapp-modal-dialog-header",modalHeaderTextClassName:z="dapp-modal-dialog-header-text",modalCloseButtonClassName:D="dapp-modal-dialog-close-button",modalBodyClassName:te="dapp-modal-dialog-content-body",modalFooterClassName:oe="dapp-modal-dialog-footer",customModalHeader:ve,customModalFooter:Ye}=c,Hn=Vn=>{Vn.key==="Escape"&&r&&(m==null||m())};return Ao.default.createElement(Ao.default.Fragment,null,T&&(0,B_.createPortal)(Ao.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Gi.default)(V,_==null?void 0:_.dappModal,n),"data-testid":e,onKeyDown:Hn},Ao.default.createElement("div",{className:(0,Gi.default)(_==null?void 0:_.dappModalContent,O)},Ao.default.createElement(Wi,{visible:x,headerText:k,customHeader:ve,className:E,headerTextClassName:z,closeButtonClassName:D,onHide:m}),Ao.default.createElement(Bi,{className:te},o),Ao.default.createElement(Ui,{visible:L,customFooter:Ye,footerText:P,className:oe}))),d!=null?d:document==null?void 0:document.body))},RS=Io(NS,{ssrStyles:()=>Promise.resolve().then(()=>(uo(),_o)),clientStyles:()=>(uo(),Me(_o)).default});t();t();var F_=require("react");t();t();var U_=require("react"),OS=require("@multiversx/sdk-hw-provider");We();H();N();U();to();t();var MS=require("react");t();t();var FS=require("react"),US=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");We();H();U();to();se();se();t();var WS=require("react"),GS=require("@multiversx/sdk-passkey-provider/out");We();H();U();to();se();se();t();t();var W_=require("react");t();var Vi=require("react");t();var ko=require("react"),V_=require("socket.io-client");N();t();var q={current:null,status:"not_initialized"};var HS=3e3,VS=3,G_=500,H_=1e3,$S="batchUpdated",jS="connect",qS="disconnect";function $_(){let e=(0,ko.useRef)(null),o=(0,ko.useRef)(null),{address:n}=fe(),r=R(),{network:c}=vi(),p=_=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{r(Ys(_))},H_)},m=_=>{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{r(Js(_))},H_)},d=()=>{var _;(_=q.current)==null||_.close(),q.current=null,q.status="not_initialized",e.current&&clearTimeout(e.current)},l=(0,ko.useCallback)(Er(()=>g(this,null,function*(){var T;if(!n)return;q.status="pending";let _=(T=c.websocketUrl)!=null?T:yield Ri(c.apiAddress);if(_==null){console.warn("Can not get websocket url");return}q.current=(0,V_.io)(_,{forceNew:!0,reconnectionAttempts:VS,timeout:HS,query:{address:n}}),q.status="completed",q.current.onAny(p),q.current.on($S,m),q.current.on(jS,()=>{console.log("Websocket connected.")}),q.current.on(qS,()=>{n&&(console.warn("Websocket disconnected. Trying to reconnect..."),setTimeout(()=>{var u;n&&(console.log("Websocket reconnecting..."),(u=q.current)==null||u.connect())},G_))})}),{retries:2,delay:G_}),[n]);(0,ko.useEffect)(()=>{var _;if(n&&q.status==="not_initialized"&&!((_=q.current)!=null&&_.active)){l();return}n||d()},[n,l]),(0,ko.useEffect)(()=>()=>{d()},[])}function Wr(e,o){$_();let n=xm(),r=fm();(0,Vi.useEffect)(()=>{let c=n==null?void 0:n.message;c&&e(c)},[e,n]),(0,Vi.useEffect)(()=>{let c=r==null?void 0:r.data;c&&(o==null||o(c))},[o,r])}t();t();var zS=require("react");M();t();t();t();var KS=w(require("swr"));Mo();var{logoutEvent:XS}=ge,j_="storage",z_=()=>{let{address:e}=mo(),o=y(yo);(0,q_.useEffect)(()=>{let n=r=>{if(!(r.key!==XS||!r.newValue))try{let{data:c}=JSON.parse(r.newValue);c===e&&Te(o)}catch(c){return}};return window==null||window.addEventListener(j_,n),()=>{window==null||window.removeEventListener(j_,n)}},[e,o])};t();t();var Gr=require("react"),K_=require("@fortawesome/free-solid-svg-icons"),$i=w(require("bignumber.js"));var X_=()=>{let{address:e}=mo(),{tokenLogin:o}=y(X),{secondsUntilExpires:n,expiresAt:r}=An(o==null?void 0:o.nativeAuthToken),c=(0,Gr.useRef)();return(0,Gr.useEffect)(()=>{var d;let p=new $i.default(String(n)),m=p.times(1e3);if(!(!n||p.isLessThanOrEqualTo(0))){if((d=o==null?void 0:o.nativeAuthConfig)!=null&&d.tokenExpirationToastWarningSeconds){clearTimeout(c.current);let _=new $i.default(o.nativeAuthConfig.tokenExpirationToastWarningSeconds).times(1e3),T=p.times(1e3).minus(_),u=hi(m.toNumber()),x=T.isLessThanOrEqualTo(0)?0:T.toNumber();c.current=setTimeout(()=>{w_({toastId:"nativeAuthTokenExpiration",type:"custom",title:"Session Expiration Warning",icon:K_.faRefresh,message:`Your token will expire in ${u}!`})},x)}return()=>{clearTimeout(c.current)}}},[r,e,o==null?void 0:o.nativeAuthConfig]),null};t();var Dn=require("react"),Y_=w(require("bignumber.js"));var J_=()=>{let{address:e}=mo(),{tokenLogin:o}=y(X),n=y(yo),{isExpired:r,secondsUntilExpires:c,expiresAt:p}=An(o==null?void 0:o.nativeAuthToken),m=(0,Dn.useRef)(""),d=(0,Dn.useRef)();return(0,Dn.useEffect)(()=>{e&&r&&Te(n)},[r,e,n]),(0,Dn.useEffect)(()=>{let l=Boolean(kn());if(!e||l)return;let _=new Y_.default(String(c)),T=`${e}_${p}`,u=m.current===T;if(!(c&&_.isGreaterThan(0))||u)return;m.current=T,clearTimeout(d.current);let L=_.times(1e3);return d.current=setTimeout(()=>{Te(n)},L.toNumber()),()=>{clearTimeout(d.current)}},[p,e,n]),null};var Z_=()=>(X_(),z_(),J_(),null);t();t();var Jo=require("react");N();U();ln();t();N();t();t();function Q_({transactions:e}){return e==null?void 0:e.some(o=>Array.isArray(o))}function Hr({transactions:e=[]}){return Q_({transactions:e})?e.flat():e}t();N();M();var ji=({errorMessage:e,sessionId:o,transactions:n,clearSignInfo:r})=>{console.error("Unable to send transactions",e),S.dispatch(je({sessionId:o,status:"fail",errorMessage:e,transactions:n.map(c=>I(f({},c),{status:"not executed"}))})),r==null||r()};t();N();M();var eu=({errorMessage:e,sessionId:o,clearSignInfo:n})=>{console.error("Unable to send transactions",e),S.dispatch(je({sessionId:o,status:"fail",errorMessage:e})),n==null||n()};var YS=c=>g(void 0,[c],function*({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r}){var T,u;let{transactions:p}=e;if(!p)return;let m=(T=e.customTransactionInformation)==null?void 0:T.grouping;if(!m)return;let d=p.reduce((x,L,k)=>{let P=m.findIndex(V=>V.includes(k));return x[P]||(x[P]=[]),x[P].push(L),x},[]);if(d.length===0)return;let l=yield r({transactions:d,sessionId:o}),_=l==null?void 0:l.data;if((l==null?void 0:l.error)||!_){ji({errorMessage:(u=l==null?void 0:l.error)!=null?u:"Send batch error",sessionId:o,transactions:p,clearSignInfo:n});return}return _&&S.dispatch(Bc(_)),Hr({transactions:_==null?void 0:_.transactions}).map(x=>x.hash)}),ou=p=>g(void 0,[p],function*({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r=vr,sendSignedTransactionsAsync:c=wr}){var l,_,T;let{transactions:m}=e;if(!m)return;if((l=e.customTransactionInformation)==null?void 0:l.grouping)try{return yield YS({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r})}catch(u){return ji({errorMessage:u.message,sessionId:o,transactions:m}),null}try{let u=m.map(x=>gn(x));return yield c(u)}catch(u){let x=(_=u.response)==null?void 0:_.data;return eu({errorMessage:(T=x==null?void 0:x.message)!=null?T:u.message,sessionId:o,clearSignInfo:n}),null}});var nu=e=>{let o=e.redirectRoute;o&&Oo({url:o})},tu=({sendSignedTransactionsAsync:e=wr,sendSignedBatchTransactionsAsync:o=vr})=>{let n=R(),{nonce:r}=y(ao),c=y(po),p=(0,Jo.useRef)(!1),m=(0,Jo.useRef)([]),d=()=>{n(Uo()),p.current=!1},l=(0,Jo.useCallback)(()=>g(void 0,null,function*(){var T;let _=Object.keys(c);for(let u of _){let x=c[u],L=(T=x==null?void 0:x.customTransactionInformation)==null?void 0:T.signWithoutSending;if(!x||!u||L){nu(x);continue}if(m.current.includes(u))continue;let{transactions:k}=x;if(!k||!(x.status==="signed"&&!p.current))continue;p.current=!0,m.current.push(u);let O=yield ou({session:x,sessionId:u,clearSignInfo:d,sendSignedTransactionsAsync:e,sendSignedBatchTransactionsAsync:o}),E="pending",z=k.map(oe=>O!=null&&O.includes(oe.hash)?I(f({},oe),{status:E}):oe);n(cc({sessionId:u,submittedMessage:"submitted"})),n(je({sessionId:u,status:"sent",transactions:z})),d(),rd(r+k.length),nu(x);let[te]=k;ei({transaction:te}),p.current=!1}}),[c,r]);return(0,Jo.useEffect)(()=>{l()},[c,l]),null};t();t();t();var Tu=require("react");t();var au=require("react");t();var JS=e=>e.batchTransactions,ru=v(JS,e=>{let o=f({},e);return delete o._persist,o});function Mn(){let e=y(ru),o=(0,au.useMemo)(()=>Object.entries(e).map(([n,r])=>({batchId:n,transactions:r.transactions})),[e]);return{batches:e,batchTransactionsArray:o}}M();t();var Fn=require("react");rn();t();C();var On=e=>{if(!e||typeof e!="string")return null;let o=e.split(Wt)[0];return xr(o)?parseInt(o,10):null};t();var Vr=(e,o)=>new Date().getTime()-e>o;t();var gu=require("react");t();var mu=require("react");M();t();var cu=require("react");t();var iu=w(require("axios"));fo();function su(n){return g(this,arguments,function*({batchId:e,address:o}){let{apiAddress:r,apiTimeout:c}=Y(S.getState()),{data:p}=yield iu.default.get(`${r}/${hr}/${o}/${e}`,{timeout:Number(c!=null?c:Ot)});return p})}var pu=()=>{let{address:e}=fe();return(0,cu.useCallback)(o=>g(void 0,null,function*(){try{return yield su({batchId:o,address:e})}catch(n){return console.error(n),null}}),[e])};var $r=()=>{let e=pu();return(0,mu.useCallback)(n=>g(void 0,[n],function*({batchId:o}){let r=yield e(o);return r?{statusResponse:r,isBatchSuccessful:r.status==="success",isBatchFailed:r.status==="fail"||r.status==="invalid"||r.status==="dropped",isBatchNotFound:Boolean(r.statusCode)&&Boolean(r.message)}:{statusResponse:r,isBatchSuccessful:!1,isBatchFailed:!0,isBatchNotFound:!1}}),[e])};t();M();var jr=({transactions:e,hasUnrelatedTransactions:o})=>{let n=e.every(({status:l})=>l==="fail"),r=e.some(({status:l})=>l==="fail"),c=e.some(({status:l})=>l==="pending"),p=e.every(({status:l})=>l==="success"),m=o&&Boolean(!c&&!n&&r);return{isPending:c,isSuccessful:p,isFailed:o?m?!1:n:r,isIncompleteFailed:m}};t();var du=require("react");N();function lu(){let e=R(),o=$r();return(0,du.useCallback)(r=>g(this,[r],function*({batchId:n}){let c=yield o({batchId:n});return c.statusResponse&&e(Fc(c.statusResponse)),c}),[e,o])}t();var qi=require("react");N();t();t();var Bn=class{constructor(o){this.status=(o||"").toLowerCase()}static createUnknown(){return new Bn("unknown")}isPending(){return this.status=="received"||this.status=="pending"}isExecuted(){return this.isSuccessful()||this.isFailed()||this.isInvalid()}isSuccessful(){return this.status=="executed"||this.status=="success"||this.status=="successful"}isFailed(){return this.status=="fail"||this.status=="failed"||this.status=="unsuccessful"||this.isInvalid()}isInvalid(){return this.status=="invalid"}toString(){return this.status}valueOf(){return this.status}equals(o){return o?this.status==o.status:!1}};t();function _u(e){return new Promise(o=>setTimeout(o,e))}var uu=e=>g(void 0,null,function*(){let n=4,r;if(e.length===0)return{data:r,success:!1};for(;r===void 0&&n>0;)try{yield _u(3e3);let p=(yield Promise.allSettled(e.map(d=>em(d)))).map(d=>d.status==="fulfilled"?d.value.data:void 0).filter(d=>d!==void 0);if(p.length>0){let d=p.length===e.length,l=p.some(_=>new Bn(_.status).isPending());d&&!l||n===1?(r=p,n=0):n-=1}else n-=1}catch(c){n-=1}return{data:r,success:r!==void 0}});M();function qr(){let e=R(),{address:o}=fe(),n=(0,qi.useCallback)(({sessionId:r,dropUnprocessedTransactions:c,serverTransactions:p,batchTransactions:m})=>{for(let d of m){let l=p.find(_=>_.txHash===d.hash);if(!l){c&&e($e({sessionId:r,status:"fail",transactionHash:d.hash}));continue}e($e({sessionId:r,status:l.status,transactionHash:d.hash,serverTransaction:l}))}},[e]);return(0,qi.useCallback)(r=>g(this,null,function*(){if(!r)return;let{transactions:c,isBatchFailed:p,sessionId:m}=r;if(!c||c.length===0)return;if(p){for(let _ of c)e($e({sessionId:m,status:"fail",transactionHash:_.hash}));return}let{data:d,success:l}=yield uu(c.map(({hash:_})=>_).filter(_=>Boolean(_)));l&&d&&n({sessionId:m,dropUnprocessedTransactions:r.dropUnprocessedTransactions,serverTransactions:d,batchTransactions:c}),r.shouldRefreshBalance&&(yield bo())}),[e,o,n])}var zr=e=>{let o=R(),{signedTransactions:n}=Pn(),r=lu(),c=qr(),p=$r(),m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail;return{verifyBatchStatus:(0,gu.useCallback)(T=>g(void 0,[T],function*({batchId:_}){var z,D,te,oe,ve;let u=(D=(z=On(_))==null?void 0:z.toString())!=null?D:"",x=n[u];if(!x||!((te=x.customTransactionInformation)==null?void 0:te.grouping))return;let k=(ve=(oe=n[u])==null?void 0:oe.transactions)!=null?ve:[],{isSuccessful:P,isFailed:V,isPending:O}=jr({transactions:k});if(!O)P&&(m==null||m(u)),V&&(d==null||d(u,"Error processing batch transactions."));else{let Ye=yield r({batchId:_});yield c({sessionId:u.toString(),isBatchFailed:Ye==null?void 0:Ye.isBatchFailed,shouldRefreshBalance:!0,transactions:k})}}),[o,p,c,n,r,m,d])}};var fu=e=>{let{batchTransactionsArray:o}=Mn(),{verifyBatchStatus:n}=zr(e),r=Ln(),c=(0,Fn.useRef)(null),p=q.status==="completed",m=(0,Fn.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:d}of o){let l=On(d);!l||!Vr(l,9e4)||(yield n({batchId:d}))}}),[o,n]);(0,Fn.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{m()},r),()=>{c.current&&clearInterval(c.current)}},[m])};t();var Un=require("react");rn();var hu=e=>{let{batchTransactionsArray:o}=Mn(),n=Ln(),r=qr(),c=(0,Un.useRef)(null),p=q.status==="completed",m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail,l=(0,Un.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:_,transactions:T}of o){let u=On(_);if(!u||!Vr(u,6e5))continue;yield r({sessionId:u.toString(),shouldRefreshBalance:!0,dropUnprocessedTransactions:!0});let x=Hr({transactions:T}),{isPending:L,isSuccessful:k,isFailed:P}=jr({transactions:x});L||(bd(_),k&&(m==null||m(u.toString())),P&&(d==null||d(u.toString(),"Error processing batch transactions. Status: failed")))}}),[o,r,m,d]);(0,Un.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{l()},n),()=>{c.current&&clearInterval(c.current)}},[l])};var xu=({onSuccess:e,onFail:o})=>{let{batches:n}=Mn(),{signedTransactionsArray:r}=Pn(),{address:c}=fe(),{verifyBatchStatus:p}=zr({onSuccess:e,onFail:o}),m=()=>{},d=_=>g(void 0,null,function*(){yield p({batchId:_.batchId})}),l=()=>g(void 0,null,function*(){for(let[_,T]of r){let u=dt({sessionId:_,address:c}),x=!Boolean(n[u]);!(T.status!=="sent")||x||(yield p({batchId:u}))}});Wr(m,d),fu({onSuccess:e,onFail:o}),hu({onSuccess:e,onFail:o}),(0,Tu.useEffect)(()=>{l()},[])};t();var Kr=require("react");function yu(e){var d;let o=Ed(),n=Ln(),r=(0,Kr.useRef)(null),c=q.status==="completed",p=(d=e==null?void 0:e.getTransactionsByHash)!=null?d:Ir,m=()=>{o(f({getTransactionsByHash:p},e))};Wr(m),(0,Kr.useEffect)(()=>{if(c){r.current&&clearInterval(r.current);return}if(!r.current)return r.current=setInterval(m,n),()=>{r.current&&clearInterval(r.current)}},[m,q])}function Su(e){return yu(e),xu(e),null}function bu({customComponents:e}){var d,l,_;let o=e==null?void 0:e.transactionSender,n=e==null?void 0:e.transactionTracker,r=e==null?void 0:e.logoutListener,c=(d=o==null?void 0:o.component)!=null?d:tu,p=(l=n==null?void 0:n.component)!=null?l:Su,m=(_=r==null?void 0:r.component)!=null?_:Z_;return Wn.default.createElement(Wn.default.Fragment,null,Wn.default.createElement(c,f({},o==null?void 0:o.props)),Wn.default.createElement(p,f({},n==null?void 0:n.props)),Wn.default.createElement(m,null))}var QS=()=>{var n;let e=Ne.getInstance(),o=Mr();rc({data:o}),(n=e.init)==null||n.call(e),di(e)},Iu=({children:e,customNetworkConfig:o={},externalProvider:n,environment:r,customComponents:c,dappConfig:p})=>{if(!r)throw new Error("missing environment flag");return n!=null?di(n):p!=null&&p.shouldUseWebViewProvider&&QS(),Gn.default.createElement(wu.Provider,{context:_t,store:S},Gn.default.createElement(vu.PersistGate,{persistor:Mp,loading:null},()=>Gn.default.createElement(Ad,{environment:r,customNetworkConfig:o,dappConfig:p},Gn.default.createElement(Sd,null),Gn.default.createElement(bu,{customComponents:c}),e)))};var eb=({children:e,route:o="/"})=>{let n=(0,ku.createMemoryHistory)({initialEntries:[o]});return I(f({},(0,Au.render)(Xr.default.createElement(Iu,{environment:"devnet"},Xr.default.createElement(Xr.default.Fragment,null,e)))),{history:n})};t();var ob=()=>{if(!window)return;let e=window.location;delete window.location,window.location=Object.defineProperties({},I(f({},Object.getOwnPropertyDescriptors(e)),{assign:{configurable:!0,value:jest.fn()}}))};t();var nb=()=>{if(!window)return;let e=window.history;delete window.history,window.history=Object.defineProperties({},I(f({},Object.getOwnPropertyDescriptors(e)),{pushState:{configurable:!0,value:jest.fn()}}))};0&&(module.exports={mockWindowHistory,mockWindowLocation,renderWithProvider});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
