"use strict";var Du=Object.create;var Yn=Object.defineProperty,Mu=Object.defineProperties,Ou=Object.getOwnPropertyDescriptor,Bu=Object.getOwnPropertyDescriptors,Fu=Object.getOwnPropertyNames,Rt=Object.getOwnPropertySymbols,Uu=Object.getPrototypeOf,ia=Object.prototype.hasOwnProperty,rs=Object.prototype.propertyIsEnumerable;var ts=(e,o,n)=>o in e?Yn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,f=(e,o)=>{for(var n in o||(o={}))ia.call(o,n)&&ts(e,n,o[n]);if(Rt)for(var n of Rt(o))rs.call(o,n)&&ts(e,n,o[n]);return e},A=(e,o)=>Mu(e,Bu(o));var sa=e=>typeof e=="symbol"?e:e+"",Oe=(e,o)=>{var n={};for(var r in e)ia.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Rt)for(var r of Rt(e))o.indexOf(r)<0&&rs.call(e,r)&&(n[r]=e[r]);return n};var b=(e,o)=>()=>(e&&(o=e(e=0)),o);var I=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Qe=(e,o)=>{for(var n in o)Yn(e,n,{get:o[n],enumerable:!0})},as=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Fu(o))!ia.call(e,c)&&c!==n&&Yn(e,c,{get:()=>o[c],enumerable:!(r=Ou(o,c))||r.enumerable});return e};var w=(e,o,n)=>(n=e!=null?Du(Uu(e)):{},as(o||!e||!e.__esModule?Yn(n,"default",{value:e,enumerable:!0}):n,e)),Be=e=>as(Yn({},"__esModule",{value:!0}),e);var g=(e,o,n)=>new Promise((r,c)=>{var p=l=>{try{d(n.next(l))}catch(_){c(_)}},m=l=>{try{d(n.throw(l))}catch(_){c(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var cs=I(Dt=>{"use strict";t();Dt.byteLength=Gu;Dt.toByteArray=Hu;Dt.fromByteArray=zu;var Fe=[],ye=[],Wu=typeof Uint8Array!="undefined"?Uint8Array:Array,ca="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Mo=0,is=ca.length;Mo<is;++Mo)Fe[Mo]=ca[Mo],ye[ca.charCodeAt(Mo)]=Mo;var Mo,is;ye["-".charCodeAt(0)]=62;ye["_".charCodeAt(0)]=63;function ss(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function Gu(e){var o=ss(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Vu(e,o,n){return(o+n)*3/4-n}function Hu(e){var o,n=ss(e),r=n[0],c=n[1],p=new Wu(Vu(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=ye[e.charCodeAt(l)]<<18|ye[e.charCodeAt(l+1)]<<12|ye[e.charCodeAt(l+2)]<<6|ye[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ye[e.charCodeAt(l)]<<2|ye[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ye[e.charCodeAt(l)]<<10|ye[e.charCodeAt(l+1)]<<4|ye[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function $u(e){return Fe[e>>18&63]+Fe[e>>12&63]+Fe[e>>6&63]+Fe[e&63]}function qu(e,o,n){for(var r,c=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push($u(r));return c.join("")}function zu(e){for(var o,n=e.length,r=n%3,c=[],p=16383,m=0,d=n-r;m<d;m+=p)c.push(qu(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],c.push(Fe[o>>2]+Fe[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],c.push(Fe[o>>10]+Fe[o>>4&63]+Fe[o<<2&63]+"=")),c.join("")}});var ps=I(pa=>{t();pa.read=function(e,o,n,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,_=l>>1,T=-7,u=n?c-1:0,x=n?-1:1,L=e[o+u];for(u+=x,p=L&(1<<-T)-1,L>>=-T,T+=d;T>0;p=p*256+e[o+u],u+=x,T-=8);for(m=p&(1<<-T)-1,p>>=-T,T+=r;T>0;m=m*256+e[o+u],u+=x,T-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(L?-1:1)*m*Math.pow(2,p-r)};pa.write=function(e,o,n,r,c,p){var m,d,l,_=p*8-c-1,T=(1<<_)-1,u=T>>1,x=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=r?0:p-1,k=r?1:-1,P=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=T):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+u>=1?o+=x/l:o+=x*Math.pow(2,1-u),o*l>=2&&(m++,l/=2),m+u>=T?(d=0,m=T):m+u>=1?(d=(o*l-1)*Math.pow(2,c),m=m+u):(d=o*Math.pow(2,u-1)*Math.pow(2,c),m=0));c>=8;e[n+L]=d&255,L+=k,d/=256,c-=8);for(m=m<<c|d,_+=c;_>0;e[n+L]=m&255,L+=k,m/=256,_-=8);e[n+L-k]|=P*128}});var bs=I(sn=>{"use strict";t();var ma=cs(),an=ps(),ms=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;sn.Buffer=h;sn.SlowBuffer=Zu;sn.INSPECT_MAX_BYTES=50;var Mt=2147483647;sn.kMaxLength=Mt;h.TYPED_ARRAY_SUPPORT=ju();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ju(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function eo(e){if(e>Mt)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,h.prototype),o}function h(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ua(e)}return _s(e,o,n)}h.poolSize=8192;function _s(e,o,n){if(typeof e=="string")return Xu(e,o);if(ArrayBuffer.isView(e))return Yu(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ue(e,ArrayBuffer)||e&&Ue(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ue(e,SharedArrayBuffer)||e&&Ue(e.buffer,SharedArrayBuffer)))return la(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return h.from(r,o,n);var c=Ju(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return h.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}h.from=function(e,o,n){return _s(e,o,n)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function us(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Ku(e,o,n){return us(e),e<=0?eo(e):o!==void 0?typeof n=="string"?eo(e).fill(o,n):eo(e).fill(o):eo(e)}h.alloc=function(e,o,n){return Ku(e,o,n)};function ua(e){return us(e),eo(e<0?0:ga(e)|0)}h.allocUnsafe=function(e){return ua(e)};h.allocUnsafeSlow=function(e){return ua(e)};function Xu(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!h.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=gs(e,o)|0,r=eo(n),c=r.write(e,o);return c!==n&&(r=r.slice(0,c)),r}function da(e){for(var o=e.length<0?0:ga(e.length)|0,n=eo(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function Yu(e){if(Ue(e,Uint8Array)){var o=new Uint8Array(e);return la(o.buffer,o.byteOffset,o.byteLength)}return da(e)}function la(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,h.prototype),r}function Ju(e){if(h.isBuffer(e)){var o=ga(e.length)|0,n=eo(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||fa(e.length)?eo(0):da(e);if(e.type==="Buffer"&&Array.isArray(e.data))return da(e.data)}function ga(e){if(e>=Mt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Mt.toString(16)+" bytes");return e|0}function Zu(e){return+e!=e&&(e=0),h.alloc(+e)}h.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==h.prototype};h.compare=function(o,n){if(Ue(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),Ue(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),!h.isBuffer(o)||!h.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,c=n.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==n[p]){r=o[p],c=n[p];break}return r<c?-1:c<r?1:0};h.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return h.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var c=h.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Ue(m,Uint8Array))p+m.length>c.length?h.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(h.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function gs(e,o){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ue(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return _a(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Ss(e).length;default:if(c)return r?-1:_a(e).length;o=(""+o).toLowerCase(),c=!0}}h.byteLength=gs;function Qu(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return pg(this,o,n);case"utf8":case"utf-8":return hs(this,o,n);case"ascii":return sg(this,o,n);case"latin1":case"binary":return cg(this,o,n);case"base64":return ag(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mg(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}h.prototype._isBuffer=!0;function Oo(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}h.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)Oo(this,n,n+1);return this};h.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)Oo(this,n,n+3),Oo(this,n+1,n+2);return this};h.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)Oo(this,n,n+7),Oo(this,n+1,n+6),Oo(this,n+2,n+5),Oo(this,n+3,n+4);return this};h.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?hs(this,0,o):Qu.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(o){if(!h.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:h.compare(this,o)===0};h.prototype.inspect=function(){var o="",n=sn.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};ms&&(h.prototype[ms]=h.prototype.inspect);h.prototype.compare=function(o,n,r,c,p){if(Ue(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),!h.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),n<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&n>=r)return 0;if(c>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-n,l=Math.min(m,d),_=this.slice(c,p),T=o.slice(n,r),u=0;u<l;++u)if(_[u]!==T[u]){m=_[u],d=T[u];break}return m<d?-1:d<m?1:0};function fs(e,o,n,r,c){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,fa(n)&&(n=c?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(c)return-1;n=e.length-1}else if(n<0)if(c)n=0;else return-1;if(typeof o=="string"&&(o=h.from(o,r)),h.isBuffer(o))return o.length===0?-1:ds(e,o,n,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):ds(e,[o],n,r,c);throw new TypeError("val must be string, number or Buffer")}function ds(e,o,n,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(L,k){return p===1?L[k]:L.readUInt16BE(k*p)}var _;if(c){var T=-1;for(_=n;_<m;_++)if(l(e,_)===l(o,T===-1?0:_-T)){if(T===-1&&(T=_),_-T+1===d)return T*p}else T!==-1&&(_-=_-T),T=-1}else for(n+d>m&&(n=m-d),_=n;_>=0;_--){for(var u=!0,x=0;x<d;x++)if(l(e,_+x)!==l(o,x)){u=!1;break}if(u)return _}return-1}h.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};h.prototype.indexOf=function(o,n,r){return fs(this,o,n,r,!0)};h.prototype.lastIndexOf=function(o,n,r){return fs(this,o,n,r,!1)};function eg(e,o,n,r){n=Number(n)||0;var c=e.length-n;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(fa(d))return m;e[n+m]=d}return m}function og(e,o,n,r){return Ot(_a(o,e.length-n),e,n,r)}function ng(e,o,n,r){return Ot(_g(o),e,n,r)}function tg(e,o,n,r){return Ot(Ss(o),e,n,r)}function rg(e,o,n,r){return Ot(ug(o,e.length-n),e,n,r)}h.prototype.write=function(o,n,r,c){if(n===void 0)c="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")c=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return eg(this,o,n,r);case"utf8":case"utf-8":return og(this,o,n,r);case"ascii":case"latin1":case"binary":return ng(this,o,n,r);case"base64":return tg(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rg(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ag(e,o,n){return o===0&&n===e.length?ma.fromByteArray(e):ma.fromByteArray(e.slice(o,n))}function hs(e,o,n){n=Math.min(e.length,n);for(var r=[],c=o;c<n;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=n){var l,_,T,u;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(u=(p&31)<<6|l&63,u>127&&(m=u));break;case 3:l=e[c+1],_=e[c+2],(l&192)===128&&(_&192)===128&&(u=(p&15)<<12|(l&63)<<6|_&63,u>2047&&(u<55296||u>57343)&&(m=u));break;case 4:l=e[c+1],_=e[c+2],T=e[c+3],(l&192)===128&&(_&192)===128&&(T&192)===128&&(u=(p&15)<<18|(l&63)<<12|(_&63)<<6|T&63,u>65535&&u<1114112&&(m=u))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return ig(r)}var ls=4096;function ig(e){var o=e.length;if(o<=ls)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=ls));return n}function sg(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]&127);return r}function cg(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]);return r}function pg(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var c="",p=o;p<n;++p)c+=gg[e[p]];return c}function mg(e,o,n){for(var r=e.slice(o,n),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}h.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var c=this.subarray(o,n);return Object.setPrototypeOf(c,h.prototype),c};function ne(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return c};h.prototype.readUintBE=h.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o+--n],p=1;n>0&&(p*=256);)c+=this[o+--n]*p;return c};h.prototype.readUint8=h.prototype.readUInt8=function(o,n){return o=o>>>0,n||ne(o,1,this.length),this[o]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||ne(o,2,this.length),this[o]|this[o+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||ne(o,2,this.length),this[o]<<8|this[o+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};h.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*n)),c};h.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=n,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};h.prototype.readInt8=function(o,n){return o=o>>>0,n||ne(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};h.prototype.readInt16LE=function(o,n){o=o>>>0,n||ne(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};h.prototype.readInt16BE=function(o,n){o=o>>>0,n||ne(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};h.prototype.readInt32LE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};h.prototype.readInt32BE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};h.prototype.readFloatLE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),an.read(this,o,!0,23,4)};h.prototype.readFloatBE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),an.read(this,o,!1,23,4)};h.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||ne(o,8,this.length),an.read(this,o,!0,52,8)};h.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||ne(o,8,this.length),an.read(this,o,!1,52,8)};function de(e,o,n,r,c,p){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;de(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;de(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};h.prototype.writeUint8=h.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,1,255,0),this[n]=o&255,n+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};h.prototype.writeIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);de(this,o,n,r,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};h.prototype.writeIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);de(this,o,n,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};h.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};h.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};h.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};h.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};h.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function Ts(e,o,n,r,c,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function xs(e,o,n,r,c){return o=+o,n=n>>>0,c||Ts(e,o,n,4,34028234663852886e22,-34028234663852886e22),an.write(e,o,n,r,23,4),n+4}h.prototype.writeFloatLE=function(o,n,r){return xs(this,o,n,!0,r)};h.prototype.writeFloatBE=function(o,n,r){return xs(this,o,n,!1,r)};function ys(e,o,n,r,c){return o=+o,n=n>>>0,c||Ts(e,o,n,8,17976931348623157e292,-17976931348623157e292),an.write(e,o,n,r,52,8),n+8}h.prototype.writeDoubleLE=function(o,n,r){return ys(this,o,n,!0,r)};h.prototype.writeDoubleBE=function(o,n,r){return ys(this,o,n,!1,r)};h.prototype.copy=function(o,n,r,c){if(!h.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),n>=o.length&&(n=o.length),n||(n=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-n<c-r&&(c=o.length-n+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),n),p};h.prototype.fill=function(o,n,r,c){if(typeof o=="string"){if(typeof n=="string"?(c=n,n=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!h.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=h.isBuffer(o)?o:h.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var dg=/[^+/0-9A-Za-z-_]/g;function lg(e){if(e=e.split("=")[0],e=e.trim().replace(dg,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function _a(e,o){o=o||1/0;for(var n,r=e.length,c=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!c){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),c=n;continue}n=(c-55296<<10|n-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function _g(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function ug(e,o){for(var n,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,c=n%256,p.push(c),p.push(r);return p}function Ss(e){return ma.toByteArray(lg(e))}function Ot(e,o,n,r){for(var c=0;c<r&&!(c+n>=o.length||c>=e.length);++c)o[c+n]=e[c];return c}function Ue(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function fa(e){return e!==e}var gg=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,c=0;c<16;++c)o[r+c]=e[n]+e[c];return o}()});var ks=I((db,As)=>{t();var q=As.exports={},We,Ge;function ha(){throw new Error("setTimeout has not been defined")}function Ta(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?We=setTimeout:We=ha}catch(e){We=ha}try{typeof clearTimeout=="function"?Ge=clearTimeout:Ge=Ta}catch(e){Ge=Ta}})();function ws(e){if(We===setTimeout)return setTimeout(e,0);if((We===ha||!We)&&setTimeout)return We=setTimeout,setTimeout(e,0);try{return We(e,0)}catch(o){try{return We.call(null,e,0)}catch(n){return We.call(this,e,0)}}}function fg(e){if(Ge===clearTimeout)return clearTimeout(e);if((Ge===Ta||!Ge)&&clearTimeout)return Ge=clearTimeout,clearTimeout(e);try{return Ge(e)}catch(o){try{return Ge.call(null,e)}catch(n){return Ge.call(this,e)}}}var oo=[],cn=!1,Bo,Bt=-1;function hg(){!cn||!Bo||(cn=!1,Bo.length?oo=Bo.concat(oo):Bt=-1,oo.length&&vs())}function vs(){if(!cn){var e=ws(hg);cn=!0;for(var o=oo.length;o;){for(Bo=oo,oo=[];++Bt<o;)Bo&&Bo[Bt].run();Bt=-1,o=oo.length}Bo=null,cn=!1,fg(e)}}q.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];oo.push(new Is(e,o)),oo.length===1&&!cn&&ws(vs)};function Is(e,o){this.fun=e,this.array=o}Is.prototype.run=function(){this.fun.apply(null,this.array)};q.title="browser";q.browser=!0;q.env={};q.argv=[];q.version="";q.versions={};function no(){}q.on=no;q.addListener=no;q.once=no;q.off=no;q.removeListener=no;q.removeAllListeners=no;q.emit=no;q.prependListener=no;q.prependOnceListener=no;q.listeners=function(e){return[]};q.binding=function(e){throw new Error("process.binding is not supported")};q.cwd=function(){return"/"};q.chdir=function(e){throw new Error("process.chdir is not supported")};q.umask=function(){return 0}});var a,s,Tg,i,t=b(()=>{a=w(bs()),s=w(ks()),Tg=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=Tg});var Ls=b(()=>{"use strict";t()});var Ve=b(()=>{"use strict";t()});var Ps=b(()=>{"use strict";t()});var xa,Es=b(()=>{"use strict";t();xa=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(xa||{})});var Cs=b(()=>{"use strict";t()});var ya=b(()=>{"use strict";t()});var Ns=b(()=>{"use strict";t()});var Sa=b(()=>{"use strict";t()});var Rs=b(()=>{"use strict";t()});var Ds=b(()=>{"use strict";t()});var Ae,pn,ho=b(()=>{"use strict";t();Ae=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),pn=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var z,Ms,wb,Os,vb,U=b(()=>{"use strict";t();ho();z=(x=>(x.ledger="ledger",x.walletconnect="walletconnect",x.walletconnectv2="walletconnectv2",x.wallet="wallet",x.crossWindow="crossWindow",x.iframe="iframe",x.extension="extension",x.passkey="passkey",x.metamask="metamask",x.opera="opera",x.extra="extra",x.none="",x))(z||{}),Ms=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(Ms||{}),wb=f(f({},pn.WindowProviderRequestEnums),Ms),Os=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Os||{}),vb=f(f({},pn.WindowProviderResponseEnums),Os)});var Bs=b(()=>{"use strict";t()});var Fs=b(()=>{"use strict";t()});var le=b(()=>{"use strict";t()});var Us=b(()=>{"use strict";t()});var Ws=b(()=>{"use strict";t()});var Gs=b(()=>{"use strict";t()});var F=b(()=>{"use strict";t();Sa();Rs();Ds();U();Bs();Fs();le();Us();Ws();Gs()});var to,Ft,Gb,Ut,Vb,Wt,Hb,$b,xg,Gt,To=b(()=>{"use strict";t();F();to={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ft,egldLabel:Gb}=to["devnet"],{chainId:Ut,egldLabel:Vb}=to["testnet"],{chainId:Wt,egldLabel:Hb}=to["mainnet"],$b={["devnet"]:Ft,["testnet"]:Ut,["mainnet"]:Wt},xg={[Ft]:"devnet",[Ut]:"testnet",[Wt]:"mainnet"},Gt=3e3});var mn=b(()=>{"use strict";t()});var He,Vs=b(()=>{"use strict";t();He=require("@multiversx/sdk-web-wallet-provider")});var ke,Jn=b(()=>{"use strict";t();ke=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Hs,$s,ba,Yb,Jb,wa=b(()=>{"use strict";t();Jn();ba=String(($s=(Hs=ke.safeWindow)==null?void 0:Hs.navigator)==null?void 0:$s.userAgent),Yb=/^((?!chrome|android).)*safari/i.test(ba),Jb=/firefox/i.test(ba)&&/windows/i.test(ba)});var Vt,Ht,qs,zs,Zn,va,$t,js,dn,qt,C=b(()=>{"use strict";t();Ls();Ve();Ps();Es();Cs();ya();Ns();To();mn();Vs();wa();Vt=5e4,Ht=1e9,qs=1,zs=1,Zn="signSession",va="sdk-dapp-version",$t="logout",js="login",dn="0",qt="-"});var ln,zt=b(()=>{"use strict";t();ln=()=>Date.now()/1e3});var Ks=b(()=>{"use strict";t()});var Xs=b(()=>{"use strict";t()});var Ia=b(()=>{"use strict";t();zt();Ks();Xs()});var Aa={};Qe(Aa,{clear:()=>wg,getItem:()=>Sg,localStorageKeys:()=>fe,removeItem:()=>bg,setItem:()=>yg});var fe,jt,yg,Sg,bg,wg,Fo=b(()=>{"use strict";t();Ia();fe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},jt=typeof localStorage!="undefined",yg=({key:e,data:o,expires:n})=>{!jt||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Sg=e=>{if(!jt)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:ln()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},bg=e=>{!jt||localStorage.removeItem(String(e))},wg=()=>{!jt||localStorage.clear()}});var ka={};Qe(ka,{clear:()=>Qs,getItem:()=>Js,removeItem:()=>Zs,setItem:()=>Ys,storage:()=>vg});var Ys,Js,Zs,Qs,vg,ec=b(()=>{"use strict";t();Ys=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Js=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},Zs=e=>sessionStorage.removeItem(String(e)),Qs=()=>sessionStorage.clear(),vg={setItem:Ys,getItem:Js,removeItem:Zs,clear:Qs}});var $e,_n=b(()=>{"use strict";t();Fo();ec();$e={session:ka,local:Aa}});var La,G,re,V=b(()=>{"use strict";t();La=require("@reduxjs/toolkit");C();G=(0,La.createAction)($t),re=(0,La.createAction)(js,e=>({payload:e}))});var Ea,oc,nc,Kt,Pa,tc,xo,Xt,Yt,L0,Ca,Ig,P0,un,rc,ac,ic,Jt,Zt=b(()=>{"use strict";t();Ea=require("@multiversx/sdk-core"),oc=require("@reduxjs/toolkit"),nc=require("redux-persist");C();_n();Fo();V();Kt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:dn},Pa={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Kt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},tc=(0,oc.createSlice)({name:"accountInfoSlice",initialState:Pa,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Ea.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:Kt},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(G,()=>($e.local.removeItem(fe.loginExpiresAt),Pa)),e.addCase(re,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new Ea.Address(r).hex()}),e.addCase(nc.REHYDRATE,(o,n)=>{var _;if(!((_=n.payload)!=null&&_.account))return;let{account:r}=n.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:Pa.accounts,o.publicKey=d})}}),{setAccount:xo,setAddress:Xt,setAccountNonce:Yt,setAccountShard:L0,setLedgerAccount:Ca,updateLedgerAccount:Ig,setWalletConnectAccount:P0,setIsAccountLoading:un,setAccountLoadingError:rc,setWebsocketEvent:ac,setWebsocketBatchEvent:ic}=tc.actions,Jt=tc.reducer});function Qn(){return new Date().setHours(new Date().getHours()+24)}function et(e){$e.local.setItem({key:fe.loginExpiresAt,data:e,expires:e})}var Na=b(()=>{"use strict";t();_n();Fo()});var cc,sc,pc,U0,mc,Ag,yo,W0,Qt,dc,lc,Ra,_c,er,ot=b(()=>{"use strict";t();cc=require("@reduxjs/toolkit");Na();U();V();sc={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},pc=(0,cc.createSlice)({name:"loginInfoSlice",initialState:sc,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(G,()=>sc),e.addCase(re,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,et(Qn())})}}),{setLoginMethod:U0,setWalletConnectLogin:mc,setLedgerLogin:Ag,setTokenLogin:yo,setTokenLoginSignature:W0,setWalletLogin:Qt,invalidateLoginSession:dc,setLogoutRoute:lc,setIsWalletConnectV2Initialized:Ra,setWebviewLogin:_c}=pc.actions,er=pc.reducer});var gc,uc,fc,hc,kg,$0,Lg,or,nr=b(()=>{"use strict";t();gc=require("@reduxjs/toolkit");V();uc={},fc=(0,gc.createSlice)({name:"modalsSlice",initialState:uc,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(G,()=>uc)}}),{setTxSubmittedModal:hc,setNotificationModal:kg,clearTxSubmittedModal:$0,clearNotificationModal:Lg}=fc.actions,or=fc.reducer});var Le,Uo=b(()=>{"use strict";t();Le=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var W,ae=b(()=>{"use strict";t();Uo();W=()=>{if(!Le())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:c,search:p}}=window;return{pathname:o,hash:n,origin:r,href:c,search:p}}});var gn,Tc=b(()=>{"use strict";t();ae();gn=(e="")=>{let o=W(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var xc=b(()=>{"use strict";t();se()});var yc,Sc=b(()=>{"use strict";t();Jn();yc=e=>{if(!ke.safeWindow.location)return;if(!new URL(ke.safeWindow.location.href).protocol.startsWith("http"))return ke.safeWindow.location.reload();ke.safeWindow.location.assign(e)}});var se=b(()=>{"use strict";t();Tc();xc();ae();Sc()});var bc,wc,ro,Wo=b(()=>{"use strict";t();se();bc=!1,wc=(e=!0)=>{bc=e},ro=({timeout:e=0,url:o})=>{bc||setTimeout(()=>{if(!!window)return yc(o)},e)}});function So({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),c=typeof o=="function";if(r&&e!=null){if(c)return o(e,n);ro({url:e,timeout:Pg})}}var Pg,vc=b(()=>{"use strict";t();Wo();Pg=200});function Ic(e){return e[Math.floor(Math.random()*e.length)]}var Ac=b(()=>{"use strict";t()});var Da=b(()=>{"use strict";t();ya()});var ao=b(()=>{"use strict";t();vc();Ac();Da()});var kc,Lc,Pc,nt,Cg,Ec,Ma,Cc,Ng,tr,tt=b(()=>{"use strict";t();kc=require("@reduxjs/toolkit"),Lc=w(require("lodash.omit")),Pc=require("redux-persist");mn();V();ao();nt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Cg={network:nt},Ec=(0,kc.createSlice)({name:"appConfig",initialState:Cg,reducers:{initializeNetworkConfig:(e,o)=>{let n=Ic(o.payload.walletConnectV2RelayAddresses),r=(0,Lc.default)(o.payload,"walletConnectV2RelayAddresses");e.network=A(f(f({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=f(f({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(G,o=>{o.network.customWalletAddress=void 0}),e.addCase(Pc.REHYDRATE,(o,n)=>{var c,p;if(!((p=(c=n.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Ma,updateNetworkConfig:Cc,setCustomWalletAddress:Ng}=Ec.actions,tr=Ec.reducer});var Nc,Oa,Rc,kw,Lw,Pw,rr,ar=b(()=>{"use strict";t();Nc=require("@reduxjs/toolkit");F();V();Oa={isSigning:!1,signedSessions:{}},Rc=(0,Nc.createSlice)({name:"signedMessageInfoSliceState",initialState:Oa,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[n]=f(f({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>f(f({},e),o.payload),clearSignedMessageInfo:()=>Oa},extraReducers:e=>{e.addCase(G,()=>Oa)}}),{setSignSession:kw,clearSignedMessageInfo:Lw,setSignSessionState:Pw}=Rc.actions,rr=Rc.reducer});var Mc,Oc,Dc,Bc,Ba,Rg,Ow,Dg,ir,sr=b(()=>{"use strict";t();Mc=require("@reduxjs/toolkit"),Oc=require("redux-persist");F();zt();V();Dc={customToasts:[],transactionToasts:[]},Bc=(0,Mc.createSlice)({name:"toastsSlice",initialState:Dc,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===n);if(r!==-1){e.customToasts[r]=A(f(f({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(A(f({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:ln(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(G,()=>Dc),e.addCase(Oc.REHYDRATE,(o,n)=>{var c,p;let r=(p=(c=n.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Ba,removeCustomToast:Rg,addTransactionToast:Ow,removeTransactionToast:Dg}=Bc.actions,ir=Bc.reducer});var Fc,Ua,Wa,Ga,Mg,Fa,Uc,Ww,Og,Va,cr,pr=b(()=>{"use strict";t();Fc=require("@reduxjs/toolkit");V();Ua="Transaction failed",Wa="Transaction successful",Ga="Processing transaction",Mg="Transaction submitted",Fa={},Uc=(0,Fc.createSlice)({name:"transactionsInfo",initialState:Fa,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Ua,successMessage:(r==null?void 0:r.successMessage)||Wa,processingMessage:(r==null?void 0:r.processingMessage)||Ga,submittedMessage:(r==null?void 0:r.submittedMessage)||Mg,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Fa},extraReducers:e=>{e.addCase(G,()=>Fa)}}),{clearTransactionsInfo:Ww,setTransactionsDisplayInfo:Og,clearTransactionsInfoForSessionId:Va}=Uc.actions,cr=Uc.reducer});function io(e){return e!=null&&(zg(e)||Jg(e))}function Go(e){return e!=null&&(jg(e)||Zg(e))}function Vo(e){return e!=null&&(Kg(e)||Qg(e))}function Wc(e){return e!=null&&(Xg(e)||ef(e))}function Ha(e){return e!=null&&Yg(e)}function zg(e){return e!=null&&Bg.includes(e)}function jg(e){return e!=null&&Fg.includes(e)}function Kg(e){return e!=null&&Ug.includes(e)}function Xg(e){return e!=null&&Wg.includes(e)}function Yg(e){return e!=null&&Gg.includes(e)}function Jg(e){return e!=null&&Vg.includes(e)}function Zg(e){return e!=null&&Hg.includes(e)}function Qg(e){return e!=null&&$g.includes(e)}function ef(e){return e!=null&&qg.includes(e)}var Bg,Fg,Ug,Wg,Gg,Vg,Hg,$g,qg,fn=b(()=>{"use strict";t();U();Bg=["sent"],Fg=["success"],Ug=["fail","cancelled","timedOut"],Wg=["invalid"],Gg=["timedOut"],Vg=["pending"],Hg=["success"],$g=["fail","invalid"],qg=["not executed"]});var Gc,Vc,rt,of,Hc,ze,je,nf,Ho,tf,rf,Xw,af,at,$a,Yw,mr,dr=b(()=>{"use strict";t();Gc=require("@reduxjs/toolkit"),Vc=require("redux-persist");U();fn();V();rt={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},of={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Hc=(0,Gc.createSlice)({name:"transactionsSlice",initialState:rt,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:n,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=f(f(f({},of),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:f(f({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===n&&(e.transactionsToSign=rt.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=f(f({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,c!=null&&(e.signedTransactions[n].errorMessage=c),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,T,u,x,L,k,P,H;let{sessionId:n,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(T=(_=e.signedTransactions)==null?void 0:_[n])==null?void 0:T.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(D=>D.hash===p?A(f(f({},m!=null?m:{}),D),{status:r,errorMessage:c,inTransit:d}):D);let M=(x=(u=e.signedTransactions[n])==null?void 0:u.transactions)==null?void 0:x.every(D=>Go(D.status)),E=(k=(L=e.signedTransactions[n])==null?void 0:L.transactions)==null?void 0:k.some(D=>Vo(D.status)),K=(H=(P=e.signedTransactions[n])==null?void 0:P.transactions)==null?void 0:H.every(D=>Wc(D.status));M&&(e.signedTransactions[n].status="success"),E&&(e.signedTransactions[n].status="fail"),K&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=rt.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=rt.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=f(f({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(G,()=>rt),e.addCase(Vc.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=n.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let T=new Date(l),u=new Date;return u.setHours(u.getHours()+5),u-T>0||(d[l]=_),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ze,updateSignedTransactions:je,setTransactionsToSign:nf,clearAllTransactionsToSign:Ho,clearAllSignedTransactions:tf,clearSignedTransaction:rf,clearTransactionToSign:Xw,setSignTransactionsError:af,setSignTransactionsCancelMessage:at,moveTransactionsToSignedState:$a,updateSignedTransactionsCustomTransactionInformation:Yw}=Hc.actions,mr=Hc.reducer});var $c,qa,qc,zc,jc,Kc,ev,lr,_r=b(()=>{"use strict";t();$c=require("@reduxjs/toolkit");V();qa={},qc=(0,$c.createSlice)({name:"batchTransactionsSlice",initialState:qa,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>qa},extraReducers:e=>{e.addCase(G,()=>qa)}}),{setBatchTransactions:zc,updateBatchTransactions:jc,clearBatchTransactions:Kc,clearAllBatchTransactions:ev}=qc.actions,lr=qc.reducer});var Yc,Xc,Jc,Zc,Qc,za=b(()=>{"use strict";t();Yc=require("@reduxjs/toolkit");V();Xc={},Jc=(0,Yc.createSlice)({name:"dappConfigSlice",initialState:Xc,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(G,()=>Xc)}}),{setDappConfig:Zc}=Jc.actions,Qc=Jc.reducer});var N=b(()=>{"use strict";t();Zt();ot();nr();tt();ar();sr();pr();dr();_r();za()});var ja=b(()=>{"use strict";t()});var np,mf,df,$o,fr=b(()=>{"use strict";t();np=require("@reduxjs/toolkit");ja();Zt();_r();za();ot();nr();tt();ar();sr();pr();dr();mf={["account"]:Jt,["dappConfig"]:Qc,["loginInfo"]:er,["modals"]:or,["networkConfig"]:tr,["signedMessageInfo"]:rr,["toasts"]:ir,["transactionsInfo"]:cr,["transactions"]:mr,["batchTransactions"]:lr},df=(e={})=>(0,np.combineReducers)(f(f({},mf),e)),$o=df});var ip={};Qe(ip,{default:()=>kf,sessionStorageReducers:()=>Ka});function so(e,o=[]){return{key:e,version:1,storage:rp.default,blacklist:o}}var _e,tp,rp,lf,it,_f,uf,gf,ff,hf,Tf,xf,yf,Sf,bf,ap,wf,Ka,vf,If,Af,kf,sp=b(()=>{"use strict";t();_e=require("redux-persist"),tp=w(require("redux-persist/lib/storage")),rp=w(require("redux-persist/lib/storage/session"));fr();N();Zt();_r();ot();nr();tt();ar();sr();pr();dr();ja();lf={persistReducersStorageType:"localStorage"},it={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},_f=so(it["account"]),uf=so(it["loginInfo"]),gf=so(it["modals"]),ff=so(it["networkConfig"]),hf={2:e=>A(f({},e),{networkConfig:nt})};Tf=so("sdk-dapp-transactionsInfo"),xf=so("sdk-dapp-transactions",["transactionsToSign"]),yf=so("sdk-dapp-batchTransactions",["batchTransactions"]),Sf=so("sdk-dapp-toasts"),bf=so("sdk-dapp-signedMessageInfo"),ap={key:"sdk-dapp-store",version:2,storage:tp.default,whitelist:Object.keys(it),migrate:(0,_e.createMigrate)(hf,{debug:!1})},wf=A(f({},ap),{whitelist:[]}),Ka={["toasts"]:(0,_e.persistReducer)(Sf,ir),["transactions"]:(0,_e.persistReducer)(xf,mr),["transactionsInfo"]:(0,_e.persistReducer)(Tf,cr),["batchTransactions"]:(0,_e.persistReducer)(yf,lr),["signedMessageInfo"]:(0,_e.persistReducer)(bf,rr)},vf=A(f({},Ka),{["account"]:(0,_e.persistReducer)(_f,Jt),["loginInfo"]:(0,_e.persistReducer)(uf,er),["modals"]:(0,_e.persistReducer)(gf,or),["networkConfig"]:(0,_e.persistReducer)(ff,tr)}),If=lf.persistReducersStorageType==="localStorage",Af=If?(0,_e.persistReducer)(ap,$o(Ka)):(0,_e.persistReducer)(wf,$o(vf)),kf=Af});var cp={};Qe(cp,{default:()=>Lf});var Lf,pp=b(()=>{"use strict";t();fr();Lf=$o()});var mp={};Qe(mp,{default:()=>Ef});var be,Pf,Ef,dp=b(()=>{"use strict";t();be=require("redux-persist"),Pf=[be.FLUSH,be.REHYDRATE,be.PAUSE,be.PERSIST,be.PURGE,be.REGISTER],Ef=Pf});var up={};Qe(up,{default:()=>_p});function _p(e){return(0,lp.persistStore)(e)}var lp,gp=b(()=>{"use strict";t();lp=require("redux-persist")});var $m=I((N3,Hm)=>{t();var Jh=typeof i=="object"&&i&&i.Object===Object&&i;Hm.exports=Jh});var yt=I((R3,qm)=>{t();var Zh=$m(),Qh=typeof self=="object"&&self&&self.Object===Object&&self,eT=Zh||Qh||Function("return this")();qm.exports=eT});var bi=I((D3,zm)=>{t();var oT=yt(),nT=oT.Symbol;zm.exports=nT});var Ym=I((M3,Xm)=>{t();var jm=bi(),Km=Object.prototype,tT=Km.hasOwnProperty,rT=Km.toString,St=jm?jm.toStringTag:void 0;function aT(e){var o=tT.call(e,St),n=e[St];try{e[St]=void 0;var r=!0}catch(p){}var c=rT.call(e);return r&&(o?e[St]=n:delete e[St]),c}Xm.exports=aT});var Zm=I((O3,Jm)=>{t();var iT=Object.prototype,sT=iT.toString;function cT(e){return sT.call(e)}Jm.exports=cT});var wi=I((B3,od)=>{t();var Qm=bi(),pT=Ym(),mT=Zm(),dT="[object Null]",lT="[object Undefined]",ed=Qm?Qm.toStringTag:void 0;function _T(e){return e==null?e===void 0?lT:dT:ed&&ed in Object(e)?pT(e):mT(e)}od.exports=_T});var td=I((F3,nd)=>{t();var uT=Array.isArray;nd.exports=uT});var ad=I((U3,rd)=>{t();function gT(e){return e!=null&&typeof e=="object"}rd.exports=gT});var sd=I((W3,id)=>{t();var fT=wi(),hT=td(),TT=ad(),xT="[object String]";function yT(e){return typeof e=="string"||!hT(e)&&TT(e)&&fT(e)==xT}id.exports=yT});var Vr=I((gO,ld)=>{t();function wT(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}ld.exports=wT});var qd=I((nW,$d)=>{t();var GT=wi(),VT=Vr(),HT="[object AsyncFunction]",$T="[object Function]",qT="[object GeneratorFunction]",zT="[object Proxy]";function jT(e){if(!VT(e))return!1;var o=GT(e);return o==$T||o==qT||o==HT||o==zT}$d.exports=jT});var jd=I((tW,zd)=>{t();var KT=yt(),XT=KT["__core-js_shared__"];zd.exports=XT});var Yd=I((rW,Xd)=>{t();var Ui=jd(),Kd=function(){var e=/[^.]+$/.exec(Ui&&Ui.keys&&Ui.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function YT(e){return!!Kd&&Kd in e}Xd.exports=YT});var Zd=I((aW,Jd)=>{t();var JT=Function.prototype,ZT=JT.toString;function QT(e){if(e!=null){try{return ZT.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Jd.exports=QT});var el=I((iW,Qd)=>{t();var ex=qd(),ox=Yd(),nx=Vr(),tx=Zd(),rx=/[\\^$.*+?()[\]{}|]/g,ax=/^\[object .+?Constructor\]$/,ix=Function.prototype,sx=Object.prototype,cx=ix.toString,px=sx.hasOwnProperty,mx=RegExp("^"+cx.call(px).replace(rx,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dx(e){if(!nx(e)||ox(e))return!1;var o=ex(e)?mx:ax;return o.test(tx(e))}Qd.exports=dx});var nl=I((sW,ol)=>{t();function lx(e,o){return e==null?void 0:e[o]}ol.exports=lx});var qr=I((cW,tl)=>{t();var _x=el(),ux=nl();function gx(e,o){var n=ux(e,o);return _x(n)?n:void 0}tl.exports=gx});var At=I((pW,rl)=>{t();var fx=qr(),hx=fx(Object,"create");rl.exports=hx});var sl=I((mW,il)=>{t();var al=At();function Tx(){this.__data__=al?al(null):{},this.size=0}il.exports=Tx});var pl=I((dW,cl)=>{t();function xx(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}cl.exports=xx});var dl=I((lW,ml)=>{t();var yx=At(),Sx="__lodash_hash_undefined__",bx=Object.prototype,wx=bx.hasOwnProperty;function vx(e){var o=this.__data__;if(yx){var n=o[e];return n===Sx?void 0:n}return wx.call(o,e)?o[e]:void 0}ml.exports=vx});var _l=I((_W,ll)=>{t();var Ix=At(),Ax=Object.prototype,kx=Ax.hasOwnProperty;function Lx(e){var o=this.__data__;return Ix?o[e]!==void 0:kx.call(o,e)}ll.exports=Lx});var gl=I((uW,ul)=>{t();var Px=At(),Ex="__lodash_hash_undefined__";function Cx(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Px&&o===void 0?Ex:o,this}ul.exports=Cx});var hl=I((gW,fl)=>{t();var Nx=sl(),Rx=pl(),Dx=dl(),Mx=_l(),Ox=gl();function Dn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Dn.prototype.clear=Nx;Dn.prototype.delete=Rx;Dn.prototype.get=Dx;Dn.prototype.has=Mx;Dn.prototype.set=Ox;fl.exports=Dn});var xl=I((fW,Tl)=>{t();function Bx(){this.__data__=[],this.size=0}Tl.exports=Bx});var Sl=I((hW,yl)=>{t();function Fx(e,o){return e===o||e!==e&&o!==o}yl.exports=Fx});var kt=I((TW,bl)=>{t();var Ux=Sl();function Wx(e,o){for(var n=e.length;n--;)if(Ux(e[n][0],o))return n;return-1}bl.exports=Wx});var vl=I((xW,wl)=>{t();var Gx=kt(),Vx=Array.prototype,Hx=Vx.splice;function $x(e){var o=this.__data__,n=Gx(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():Hx.call(o,n,1),--this.size,!0}wl.exports=$x});var Al=I((yW,Il)=>{t();var qx=kt();function zx(e){var o=this.__data__,n=qx(o,e);return n<0?void 0:o[n][1]}Il.exports=zx});var Ll=I((SW,kl)=>{t();var jx=kt();function Kx(e){return jx(this.__data__,e)>-1}kl.exports=Kx});var El=I((bW,Pl)=>{t();var Xx=kt();function Yx(e,o){var n=this.__data__,r=Xx(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}Pl.exports=Yx});var Nl=I((wW,Cl)=>{t();var Jx=xl(),Zx=vl(),Qx=Al(),ey=Ll(),oy=El();function Mn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Mn.prototype.clear=Jx;Mn.prototype.delete=Zx;Mn.prototype.get=Qx;Mn.prototype.has=ey;Mn.prototype.set=oy;Cl.exports=Mn});var Dl=I((vW,Rl)=>{t();var ny=qr(),ty=yt(),ry=ny(ty,"Map");Rl.exports=ry});var Bl=I((IW,Ol)=>{t();var Ml=hl(),ay=Nl(),iy=Dl();function sy(){this.size=0,this.__data__={hash:new Ml,map:new(iy||ay),string:new Ml}}Ol.exports=sy});var Ul=I((AW,Fl)=>{t();function cy(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Fl.exports=cy});var Lt=I((kW,Wl)=>{t();var py=Ul();function my(e,o){var n=e.__data__;return py(o)?n[typeof o=="string"?"string":"hash"]:n.map}Wl.exports=my});var Vl=I((LW,Gl)=>{t();var dy=Lt();function ly(e){var o=dy(this,e).delete(e);return this.size-=o?1:0,o}Gl.exports=ly});var $l=I((PW,Hl)=>{t();var _y=Lt();function uy(e){return _y(this,e).get(e)}Hl.exports=uy});var zl=I((EW,ql)=>{t();var gy=Lt();function fy(e){return gy(this,e).has(e)}ql.exports=fy});var Kl=I((CW,jl)=>{t();var hy=Lt();function Ty(e,o){var n=hy(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}jl.exports=Ty});var Yl=I((NW,Xl)=>{t();var xy=Bl(),yy=Vl(),Sy=$l(),by=zl(),wy=Kl();function On(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}On.prototype.clear=xy;On.prototype.delete=yy;On.prototype.get=Sy;On.prototype.has=by;On.prototype.set=wy;Xl.exports=On});var Zl=I((RW,Jl)=>{t();var vy="__lodash_hash_undefined__";function Iy(e){return this.__data__.set(e,vy),this}Jl.exports=Iy});var e_=I((DW,Ql)=>{t();function Ay(e){return this.__data__.has(e)}Ql.exports=Ay});var n_=I((MW,o_)=>{t();var ky=Yl(),Ly=Zl(),Py=e_();function zr(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new ky;++o<n;)this.add(e[o])}zr.prototype.add=zr.prototype.push=Ly;zr.prototype.has=Py;o_.exports=zr});var r_=I((OW,t_)=>{t();function Ey(e,o,n,r){for(var c=e.length,p=n+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}t_.exports=Ey});var i_=I((BW,a_)=>{t();function Cy(e){return e!==e}a_.exports=Cy});var c_=I((FW,s_)=>{t();function Ny(e,o,n){for(var r=n-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}s_.exports=Ny});var m_=I((UW,p_)=>{t();var Ry=r_(),Dy=i_(),My=c_();function Oy(e,o,n){return o===o?My(e,o,n):Ry(e,Dy,n)}p_.exports=Oy});var l_=I((WW,d_)=>{t();var By=m_();function Fy(e,o){var n=e==null?0:e.length;return!!n&&By(e,o,0)>-1}d_.exports=Fy});var u_=I((GW,__)=>{t();function Uy(e,o,n){for(var r=-1,c=e==null?0:e.length;++r<c;)if(n(o,e[r]))return!0;return!1}__.exports=Uy});var f_=I((VW,g_)=>{t();function Wy(e,o){return e.has(o)}g_.exports=Wy});var T_=I((HW,h_)=>{t();var Gy=qr(),Vy=yt(),Hy=Gy(Vy,"Set");h_.exports=Hy});var y_=I(($W,x_)=>{t();function $y(){}x_.exports=$y});var Wi=I((qW,S_)=>{t();function qy(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}S_.exports=qy});var w_=I((zW,b_)=>{t();var Gi=T_(),zy=y_(),jy=Wi(),Ky=1/0,Xy=Gi&&1/jy(new Gi([,-0]))[1]==Ky?function(e){return new Gi(e)}:zy;b_.exports=Xy});var I_=I((jW,v_)=>{t();var Yy=n_(),Jy=l_(),Zy=u_(),Qy=f_(),eS=w_(),oS=Wi(),nS=200;function tS(e,o,n){var r=-1,c=Jy,p=e.length,m=!0,d=[],l=d;if(n)m=!1,c=Zy;else if(p>=nS){var _=o?null:eS(e);if(_)return oS(_);m=!1,c=Qy,l=new Yy}else l=o?[]:d;e:for(;++r<p;){var T=e[r],u=o?o(T):T;if(T=n||T!==0?T:0,m&&u===u){for(var x=l.length;x--;)if(l[x]===u)continue e;o&&l.push(u),d.push(T)}else c(l,u,n)||(l!==d&&l.push(u),d.push(T))}return d}v_.exports=tS});var k_=I((KW,A_)=>{t();var rS=I_();function aS(e){return e&&e.length?rS(e):[]}A_.exports=aS});var Hi={};Qe(Hi,{css:()=>M_,default:()=>PS});var M_,PS,$i=b(()=>{"use strict";t();M_=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(M_));PS={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var go={};Qe(go,{css:()=>F_,default:()=>NS});var F_,NS,fo=b(()=>{"use strict";t();F_=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(F_));NS={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var ib={};Qe(ib,{AppInitializer:()=>Ti,AuthenticatedRoutesWrapper:()=>dm,AxiosInterceptor:()=>Si,AxiosInterceptorContext:()=>jh,AxiosInterceptorContextProvider:()=>xi,DappProvider:()=>ab,LoginInfoListener:()=>yi,useAppInitializer:()=>Mm,useAxiosInterceptorContext:()=>Ln});module.exports=Be(ib);t();t();t();var ft=w(require("react"));t();var bp=require("react"),hn=require("react-redux");t();var Xa=require("@reduxjs/toolkit"),xp=require("react-redux/lib/utils/Subscription");N();t();var ep=w(require("lodash.throttle"));C();N();Na();_n();Fo();var sf=[$t],ur=!1,cf=(0,ep.default)(()=>{et(Qn())},5e3),op=e=>o=>n=>{if(sf.includes(n.type))return o(n);let r=e.getState(),c=$e.local.getItem(fe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(c==null)return et(Qn());let m=Date.now();return c-m<0&&!ur?setTimeout(()=>{ur=!0,e.dispatch(dc())},1e3):(ur&&(ur=!1),cf()),o(n)};t();t();function gr(){return typeof sessionStorage!="undefined"}var fp=gr()?(sp(),Be(ip)).default:(pp(),Be(cp)).default,hp=gr()?(dp(),Be(mp)).default:[],Tp=gr()?(gp(),Be(up)).default:e=>e;fr();var S=(0,Xa.configureStore)({reducer:fp,middleware:e=>e({serializableCheck:{ignoredActions:[...hp,Yt.type,xo.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(op)}),yp=(0,xp.createSubscription)(S),Sp=Tp(S),oI=(0,Xa.configureStore)({reducer:$o});var Cf={store:S,subscription:yp},st=(0,bp.createContext)(Cf),aI=(0,hn.createStoreHook)(st),R=(0,hn.createDispatchHook)(st),y=(0,hn.createSelectorHook)(st);t();t();N();t();var wp=w(require("lodash.isequal")),hr=require("reselect"),v=(0,hr.createSelectorCreator)(hr.defaultMemoize,wp.default);var Ke=e=>e.account,Pe=v(Ke,e=>e.address),co=v(Ke,Pe,(e,o)=>o in e.accounts?e.accounts[o]:Kt),vp=v(Ke,co,(e,o)=>{let c=e,{accounts:n}=c,r=Oe(c,["accounts"]);return A(f({},r),{address:o.address,account:o})}),mI=v(co,e=>e.balance),Ip=v(co,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),dI=v(Ke,e=>e.shard),Ya=v(Ke,e=>e.ledgerAccount),lI=v(Ke,e=>e.walletConnectAccount),Ap=v(Ke,e=>e.isAccountLoading),_I=v(Ke,e=>e.accountLoadingError),kp=v(Ke,e=>e.websocketEvent),Lp=v(Ke,e=>e.websocketBatchEvent);t();var Pp=e=>e.dappConfig,Ep=v(Pp,e=>e.shouldUseWebViewProvider);t();var $=e=>e.loginInfo,Cp=v($,e=>e.loginMethod),Ee=v($,Pe,(e,o)=>Boolean(o)),Np=v($,e=>e.walletConnectLogin),Tr=v($,e=>e.ledgerLogin),Tn=v($,e=>e.walletLogin),Rp=v($,e=>e.isLoginSessionInvalid),xn=v($,e=>e.tokenLogin),bo=v($,e=>e.logoutRoute),Nf=v($,e=>e.isWalletConnectV2Initialized);t();var Dp=e=>e.modals,SI=v(Dp,e=>e.txSubmittedModal),Rf=v(Dp,e=>e.notificationModal);t();var Ce=e=>e.networkConfig,qo=v(Ce,e=>e.network.chainId),Mp=v(Ce,e=>e.network.roundDuration),vI=v(Ce,e=>e.network.walletConnectBridgeAddress),Op=v(Ce,e=>e.network.walletConnectV2RelayAddress),Bp=v(Ce,e=>e.network.walletConnectV2ProjectId),Fp=v(Ce,e=>e.network.walletConnectV2Options),Up=v(Ce,e=>e.network.walletConnectDeepLink),Y=v(Ce,e=>e.network),ct=v(Y,e=>e.apiAddress),Wp=v(Y,e=>e.explorerAddress),xr=v(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Df=v(Y,e=>e.xAliasAddress),Gp=v(Y,e=>e.egldLabel);t();var yr=e=>e.signedMessageInfo,kI=v(yr,e=>e.isSigning),LI=v(yr,e=>e.errorMessage),PI=v(yr,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),EI=v(yr,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var Vp=e=>e.toasts,Mf=v(Vp,e=>e.customToasts),Hp=v(Vp,e=>e.transactionToasts);t();N();var $p={errorMessage:Ua,successMessage:Wa,processingMessage:Ga},qp=e=>e.transactionsInfo,Of=v(qp,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||$p);t();t();var Xe=require("@multiversx/sdk-core");C();t();var Ja=require("@multiversx/sdk-core/out");t();t();function pt(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function zo(e){return pt(e)?atob(e):e}t();t();t();t();var zp=e=>{let o=e!=null?e:"";return pt(o)?Ja.TransactionPayload.fromEncoded(o):new Ja.TransactionPayload(o)};t();C();var mt=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(xa).some(n=>e.startsWith(n)):!1;function yn(e){var r,c,p;let o=f({},e);mt({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new Xe.Transaction(f(f(A(f(A(f({value:o.value.valueOf(),data:zp(o.data),nonce:o.nonce.valueOf(),receiver:new Xe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Xe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Vt,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Ht,chainID:o.chainID.valueOf(),version:new Xe.TransactionVersion((p=o.version)!=null?p:qs)}),o.options?{options:new Xe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Xe.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();C();t();t();t();var Uf=require("@multiversx/sdk-core/out");t();C();t();var dt=require("@multiversx/sdk-core");F();t();var jp=require("@multiversx/sdk-core");function Wf(e){try{let o=new jp.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Sn(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Wf(e)}var Gf=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Za(e,o,n=""){if(!Sn(e))return!1;if(new dt.Address(e).isContractAddress())return!0;let p=Kp({receiver:e,data:n});return p?new dt.Address(p).isContractAddress()||$f(e,o,n):!1}var Vf=e=>e.toLowerCase().match(/[0-9a-f]/g),Hf=e=>e.length%2===0;function $f(e,o,n){let r=n==null?void 0:n.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=Gf.includes(c),l=p.every(_=>Vf(_)&&Hf(_));return m&&d&&l}function Kp({receiver:e,data:o}){try{if(!o)return e;let n=pt(o)?dt.TransactionPayload.fromEncoded(o).toString():o,r=qf(n),c=n.split("@");return r>-1?c[r]:e}catch(n){console.log(n);return}}function qf(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}t();t();t();var zf=require("@multiversx/sdk-core"),jf=w(require("bignumber.js"));U();t();t();t();var bn="accounts";var Qa="blocks";var ei="dapp/config";var oi="network/config";var Sr="batch",wn="transactions";t();t();t();t();le();t();t();le();t();t();t();var Qf=w(require("bignumber.js"));C();t();var Zf=require("@multiversx/sdk-core"),ni=w(require("bignumber.js"));C();t();var Zp=w(require("bignumber.js")),wr=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let r=new Zp.default(n),c=o?0:-1;return r.toString(10)===n&&r.comparedTo(0)>=c};t();ni.default.config({ROUNDING_MODE:ni.default.ROUND_FLOOR});t();t();t();C();t();t();t();t();C();t();C();t();var eh=require("@multiversx/sdk-core");C();t();var _t=require("@multiversx/sdk-core"),th=w(require("bignumber.js"));C();t();t();var oh=w(require("bignumber.js"));C();t();C();t();t();t();t();t();t();C();t();C();t();C();t();le();var ah=["reDelegateRewards","claimRewards","unBond"],ih=["wrapEgld","unwrapEgld"],sh=["unStake"],ch=["unDelegate"];t();t();t();C();t();var lh=w(require("bignumber.js"));t();t();le();t();var uh=w(require("bignumber.js"));t();t();t();t();var hh=w(require("bignumber.js"));F();t();t();t();t();U();t();var om=require("@multiversx/sdk-web-wallet-provider");C();t();var em=w(require("qs"));t();se();var vr=e=>{let o=new URLSearchParams(e).toString(),{pathname:n,hash:r}=W(),c=o?`?${o}`:"",p=n?`${n}${c}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};Uo();t();Uo();var Th={search:Le()?window.location.search:"",removeParams:[]},ut=(e,o=Th)=>{var m;let n={},r=Le()?window.location.search:"",c=(m=o.search)!=null?m:r;if(c){let d=c?new URLSearchParams(c):[];n=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=n[d],delete n[d]}),o.removeParams!=null&&Object.keys(n).forEach(d=>{var _,T;let[l]=d.split("[");(((_=o.removeParams)==null?void 0:_.includes(d))||((T=o.removeParams)==null?void 0:T.includes(l)))&&delete n[d]}),{remainingParams:p,params:n,clearNavigationHistory:()=>vr(n)}};var ai=({removeParams:e,search:o})=>{let n=Le()?window.location.search:"",r=o!=null?o:n;if(!r)return{};let c=em.default.parse(r.replace("?","")),p=Object.keys(c).filter(d=>!e.includes(d)),{remainingParams:m}=ut(p,{search:o,removeParams:e});return vr(m),m};var ii=({transaction:e,search:o})=>ai({removeParams:[...Object.keys(e),om.WALLET_PROVIDER_CALLBACK_PARAM,Zn,va],search:o});t();t();t();ae();t();le();t();t();ae();t();var xh=w(require("linkifyjs"));t();C();t();var yh=w(require("bignumber.js"));t();F();t();t();U();t();U();t();t();t();le();t();le();t();var Sh=w(require("bignumber.js"));C();le();t();le();t();var tm=require("react");F();t();t();le();t();t();var bh=require("@multiversx/sdk-core/out"),wh=w(require("bignumber.js"));le();t();F();t();t();F();var Z1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var rm=require("react");F();ae();t();var Ih=require("react");le();var iC=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];fn();t();var Ir=e=>e.transactions,mo=v(Ir,e=>e.signedTransactions),Ah=v(Ir,e=>e.signTransactionsError),am=v(Ir,e=>e.signTransactionsCancelMessage),Ar=e=>o=>Object.entries(o).reduce((n,[r,c])=>(e(c.status)&&(n[r]=c),n),{}),si=v(mo,Ar(io)),im=v(mo,Ar(Go)),sm=v(mo,Ar(Vo)),kh=v(mo,Ar(Ha)),cm=v(Ir,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:A(f({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>yn(n)))||[]})}),Lh=v(mo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});t();ae();var kr=()=>{let{search:e}=W(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return Sn(r)?r:null};t();t();ae();var Lr=()=>{let{search:e}=W(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var wo=()=>{var n;let e=Lr(),o=$(S.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};Uo();Wo();t();t();function pm(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function Pr(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ph(e.path,e.caseSensitive,e.end),c=o.match(n);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),d=c.slice(1);return{params:r.reduce((_,T,u)=>{if(T==="*"){let x=d[u]||"";m=p.slice(0,p.length-x.length).replace(/(.)\/+$/,"$1")}return _[T]=Eh(d[u]||"",T),_},{}),pathname:p,pathnameBase:m,pattern:e}}function Ph(e,o=!1,n=!0){pm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),r]}function Eh(e,o){try{return decodeURIComponent(e)}catch(n){return pm(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}var mm=(e,o)=>e.filter(({authenticatedRoute:c})=>Boolean(c)).some(({path:c})=>Pr(c,o)!==null);var dm=({children:e,routes:o,pathName:n,unlockRoute:r,onRedirect:c})=>{let p=kr(),m=y(Ee),d=y(Ap),l=y(Tn),_=Boolean(wo()),T=()=>Le()?window.location.pathname:"",x=mm(o,n!=null?n:T())&&!m&&l==null&&!_;(0,ft.useEffect)(()=>{if(!!x){if(c)return c(r);ro({url:r})}},[x,r]);let L=l!=null&&p;return d||L?null:ft.default.createElement(ft.default.Fragment,null,e)};t();var Ye=require("react"),Dm=require("@multiversx/sdk-core/out");t();t();t();var lm=w(require("axios"));function Er(e){return g(this,null,function*(){let{apiAddress:o,apiTimeout:n}=Y(S.getState()),r=e.map(p=>lm.default.post(`${o}/transactions`,p.toPlainObject(),{timeout:parseInt(n)}));return(yield Promise.all(r)).map(({data:p})=>p.txHash)})}t();var _m=w(require("axios"));To();t();C();var ht=({sessionId:e,address:o})=>`${e}${qt}${o}`;function Cr(n){return g(this,arguments,function*({transactions:e,sessionId:o}){var m;let r=Pe(S.getState()),{apiAddress:c,apiTimeout:p}=Y(S.getState());if(!r)return{error:"Invalid address provided. You need to be logged in to send transactions",batchId:null};try{let d=ht({sessionId:o,address:r}),l={transactions:e,id:d},_=yield _m.default.post(`${c}/${Sr}`,l,{timeout:Number(p!=null?p:Gt)});return{batchId:d,data:_.data}}catch(d){return console.error("error sending batch transactions",d),{error:(m=d==null?void 0:d.message)!=null?m:"error sending batch transactions",batchId:null}}})}t();var ci=w(require("axios"));var Nr=e=>g(void 0,null,function*(){let o=ct(S.getState()),n=e.map(c=>c.hash),{data:r}=yield ci.default.get(`${o}/${wn}`,{params:{hashes:n.join(","),withScResults:!0}});return e.map(({hash:c,previousStatus:p})=>{let m=r.find(d=>(d==null?void 0:d.txHash)===c);return{hash:c,data:m==null?void 0:m.data,invalidTransaction:m==null,status:m==null?void 0:m.status,results:m==null?void 0:m.results,sender:m==null?void 0:m.sender,receiver:m==null?void 0:m.receiver,previousStatus:p,hasStatusChanged:m&&m.status!==p}})}),um=e=>{let o=ct(S.getState());return ci.default.get(`${o}/transactions/${e}`,{timeout:1e4})};t();var Nh=w(require("axios"));t();t();var Rh=w(require("axios"));t();var Dh=w(require("axios"));t();t();t();t();t();var fm=require("@lifeomic/axios-fetch"),pi=w(require("axios")),mi=(0,fm.buildAxiosFetch)(pi.default),di=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Mh(e,o,n){return g(this,null,function*(){try{let r=yield mi(e,f({method:"POST",body:o?JSON.stringify(o):void 0,headers:f({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return di(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function Oh(e,o){return g(this,null,function*(){try{let n=yield mi(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return di(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function Bh(e,o,n){return g(this,null,function*(){try{let r=yield mi(e,f({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return di(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var vo=pi.default.create();vo.get=Oh;vo.post=Mh;vo.patch=Bh;var hm=e=>vo.get(e).then(o=>o.data);t();var jo=e=>{let o=e!=null?e:ct(S.getState());return o.endsWith("/")?o.slice(0,-1):o};t();var Fh=w(require("axios"));t();var Tm=w(require("swr"));var vn=({apiEndpoint:e})=>{let o=jo(),n=e?`${o}/${e}`:null;return(0,Tm.default)(n,hm)};t();t();var Uh=e=>{let n=`${jo()}/${bn}/${e}?withGuardianInfo=true`;return vo.get(n)},xm=e=>g(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield Uh(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});t();var Tt=e=>vn({apiEndpoint:e?`${bn}/${e}?withGuardianInfo=true`:null});t();t();To();t();var ym=w(require("axios"));function li(e){return g(this,null,function*(){let o=`${e}/${ei}`;try{let{data:r}=yield ym.default.get(o);if(r!=null){let c="egldDenomination";if(c in r){let n=r,{[c]:p,decimals:m}=n,d=Oe(n,[sa(c),"decimals"]);return A(f({},d),{decimals:p,digits:m})}return r}}catch(r){console.error("error fetching configuration for ",o)}return null})}t();var Sm=w(require("axios"));var Wh=e=>{try{return Boolean(new URL(e))}catch(o){return!1}};function bm(){return g(this,null,function*(){var n;let e=jo();if(!Wh(e))return null;let o=`${e}/${oi}`;try{let{data:r}=yield Sm.default.get(o);if(r!=null)return(n=r==null?void 0:r.data)==null?void 0:n.config}catch(r){console.error("error fetching configuration for ",o)}return null})}t();To();t();To();t();t();t();t();var Vh=w(require("axios"));t();To();t();var lo=()=>y(vp);N();ot();tt();t();t();t();t();var vm=require("@multiversx/sdk-extension-provider"),Im=require("@multiversx/sdk-hw-provider"),Am=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),km=require("@multiversx/sdk-opera-provider"),Lm=require("@multiversx/sdk-passkey-provider/out"),_i=require("@multiversx/sdk-web-wallet-provider");C();ho();t();var _o=require("@multiversx/sdk-web-wallet-iframe-provider/out"),In=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");U();t();var Rr={},Dr=An;var Hh="/dapp/init",we=e=>{switch(e==null?void 0:e.constructor){case _i.WalletProvider:return"wallet";case Dr:return"walletconnectv2";case Im.HWProvider:return"ledger";case vm.ExtensionProvider:return"extension";case Lm.PasskeyProvider:return"passkey";case Am.MetamaskProvider:return"metamask";case km.OperaProvider:return"opera";case Ae.CrossWindowProvider:return"crossWindow";case _o.IframeProvider:return"iframe";case An:return"";default:return"extra"}},Mr=e=>new _i.WalletProvider(`${e}${Hh}`),ui=e=>g(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:n,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:n===zs}}),Ne=e=>`Unable to perform ${e}, Provider not initialized`,An=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Ne("getAccount"))}setAccount(o){throw new Error(Ne(`setAccount: ${o}`))}login(o){throw new Error(Ne(`login with options: ${o}`))}logout(o){throw new Error(Ne(`logout with options: ${o}`))}getAddress(){throw new Error(Ne("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(Ne(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(Ne(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(Ne(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(Ne(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(Ne(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(Ne(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Ko=new An;var fi=Ko,gi=null;function ee(e){fi=e}function hi(e){gi=e}function Or(){gi!=null&&(fi=gi)}function pe(){return fi||Ko}V();F();t();t();var Xo=e=>xm(e);t();t();function Pm(){let e=pe();return we(e)}t();U();t();function Yo(e){return Pm()===e}function he(){let e=S.getState(),o=pe(),n=Pe(e),r=Ee(e),c=Tn(e);if(!o)throw"provider not initialized";return Yo("ledger")&&r?new Promise(p=>{p(n)}):!Yo("")&&!Yo("wallet")&&!Yo("extra")?o.getAddress():new Promise(p=>{let m=kr();c!=null&&m&&p(m),r&&p(n),p("")})}t();function Jo(e){let o=S.getState(),n=Ip(o);return e?n&&!isNaN(n)?Math.max(n,e.nonce):e.nonce:n}t();V();F();t();N();var Em=()=>g(void 0,null,function*(){try{let e=yield he();try{let o=yield Xo(e);if(o!=null){let n=A(f({},o),{nonce:Jo(o)});return S.dispatch(xo(n)),n}}catch(o){console.error("Failed getting account ",o)}}catch(e){console.error("Failed getting address ",e)}return null});function Io(){return g(this,null,function*(){let e=pe();if(e==null)throw"Provider not initialized";if(!e.isInitialized||e.isInitialized())return Em();try{if(!e.init)throw"Current provider does not have init() function";return(yield e.init())?Em():void 0}catch(o){console.error("Failed initializing provider ",o)}})}t();N();function Cm(e){S.dispatch(Yt(e))}t();var Nm=require("@multiversx/sdk-core");F();se();Wo();_n();Fo();se();var Rm=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&ro({url:e})},$h=e=>{let o=$e.local.getItem(fe.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&($e.local.setItem({key:fe.logoutEvent,data:e,expires:0}),$e.local.removeItem(fe.logoutEvent))},qh=500;function Te(c,p){return g(this,arguments,function*(e,o,n=Boolean(wo()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var k;let m="",d=pe(),l=we(d),_=l==="wallet",T=((k=d==null?void 0:d.isInitialized)==null?void 0:k.call(d))===!0;if(n&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield he(),$h(m)}catch(P){console.error("error fetching logout address",P)}let u=gn(e),x=W(),L=new URL(decodeURIComponent(u)).pathname;if((Pr(x.pathname,L)||_&&T)&&wc(),!m&&!T)return Rm({callbackUrl:u,onRedirect:o});try{if(S.dispatch(G()),_)return setTimeout(()=>{d.logout({callbackUrl:u})},qh);r.hasConsentPopup&&l==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:u})}catch(P){console.error("Logging out error:",P)}finally{_||Rm({callbackUrl:u,onRedirect:o})}})}var Mm=({customNetworkConfig:e={},environment:o,dappConfig:n})=>{let[r,c]=(0,Ye.useState)(!1),p=lo(),m=y(Rp),d=(0,Ye.useMemo)(()=>n,[]),l=d==null?void 0:d.logoutRoute,{address:_,publicKey:T}=p,u=R();function x(){return g(this,null,function*(){let k=!(e!=null&&e.skipFetchFromServer),P=e==null?void 0:e.apiAddress,M=o in to?to[o]:{},E=f(f(f({},nt),M),e),K=A(f({},E),{apiTimeout:String(E.apiTimeout),walletConnectBridgeAddresses:E.walletConnectBridgeAddresses||[],walletConnectV2RelayAddresses:"walletConnectV2RelayAddresses"in E?E.walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"]});if(k){let D="apiAddress"in M?M.apiAddress:"",te=yield li(P||D);if(te!=null){let oe=f(f(f({},K),te),e);u(Ma(A(f({},oe),{apiTimeout:String(oe.apiTimeout)})));return}}u(Ma(K))})}function L(){return g(this,null,function*(){d&&u(Zc(d)),u(lc(l)),yield x(),c(!0)})}return(0,Ye.useEffect)(()=>{_&&new Dm.Address(_).hex()!==T&&Te(l)},[_,T,l]),(0,Ye.useEffect)(()=>{L()},[e,o,d]),(0,Ye.useEffect)(()=>{p.address&&m&&Te(l)},[m,p.address,l]),{initialized:r}};function Ti({customNetworkConfig:e={},children:o,environment:n,dappConfig:r}){let[c,p]=(0,Ye.useState)(!(r!=null&&r.isSSR)),{initialized:m}=Mm({customNetworkConfig:e,environment:n,dappConfig:r});return(0,Ye.useEffect)(()=>{p(!0)},[]),c?m?o:null:o}t();t();var qn=w(require("react")),Nu=require("react-redux"),Ru=require("redux-persist/integration/react");t();var ko=require("react");C();t();var md=require("react"),Wr=require("@multiversx/sdk-core");t();t();var ue=()=>y(co);t();var kn=()=>{let e=pe(),o=we(e);return{provider:e,providerType:o}};t();var Om=()=>y(Lp);t();t();t();t();t();t();var uo=w(require("react"));var Bm=(0,uo.createContext)({}),zh=S.getState();function xi({children:e}){let[o,n]=(0,uo.useState)(),[r,c]=(0,uo.useState)($(zh)),p={address:o,setAddress:n,isLoggedIn:Boolean(o),loginInfo:r,setLoginInfo:m=>c(m)};return uo.default.createElement(Bm.Provider,{value:p},e)}function Ln(){let e=(0,uo.useContext)(Bm);if(e===void 0||Object.values(e).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return e}t();var xt=w(require("react"));var yi=({children:e=null})=>{let{address:o}=ue(),n=y($),{setLoginInfo:r,setAddress:c}=Ln();return(0,xt.useEffect)(()=>{c(o),r(n)},[n,o]),xt.default.createElement(xt.default.Fragment,null,e)};t();var Zo=w(require("react")),Br=w(require("axios"));var Si=({children:e,authenticatedDomains:o})=>{var p;let{loginInfo:n}=Ln(),r=(p=n==null?void 0:n.tokenLogin)==null?void 0:p.nativeAuthToken,c=(0,Zo.useRef)(-1);return c.current=(0,Zo.useMemo)(()=>(Br.default.interceptors.response.use(m=>m,m=>{var l,_;let d=(l=m.config)==null?void 0:l.url;return(_=m.config)!=null&&_.params&&(d+=`?${new URLSearchParams(m.config.params).toString()}`),console.error("Axios error for: ",d),Promise.reject(m)}),Br.default.interceptors.request.eject(c.current),Br.default.interceptors.request.use(m=>g(void 0,null,function*(){return o.includes(String(m==null?void 0:m.baseURL))&&r&&(m.headers.Authorization=`Bearer ${r}`),m}),m=>{Promise.reject(m)})),[r,o]),Zo.default.createElement(Zo.default.Fragment,null,e)};var jh={Interceptor:Si,Listener:yi,Provider:xi};t();t();var Fm=()=>y(kp);N();t();t();var pd=require("@multiversx/sdk-native-auth-client");t();var Gm=w(require("axios"));t();t();t();function Um(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var Wm=(e,o,n,r=0)=>g(void 0,null,function*(){try{return yield e(...n)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Um(o.delay)),yield Wm(e,o,n,r+1)):null}}),Fr=(e,o={retries:5,delay:500})=>(...n)=>g(void 0,null,function*(){return yield Wm(e,o,n)});var Kh=4,Xh=3e4,Ur={current:null},Qo={current:null},Yh=Fr((e,o,n)=>g(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield Gm.default.get(`${e}/${Qa}?from=${Kh}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));function Vm(e,o,n,r){return g(this,null,function*(){if(e==null)throw new Error("missing api url");let c=Date.now();if(Ur.current!=null&&c<Ur.current.timestamp*1e3+Xh&&!r)return Ur.current;if(Qo.current!=null)return yield Qo.current;Qo.current=Yh(e,o,n);try{let p=yield Qo.current;if(p==null)throw Qo.current=null,new Error("could not get block hash");return Ur.current={hash:p.hash,timestamp:p.timestamp},Qo.current=null,p}catch(p){return Qo.current=null,null}})}t();t();zt();t();t();var cd=w(sd());var Pn=e=>{if(!e||!(0,cd.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,c,p]=o,m=JSON.parse(zo(p)),d=zo(n);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};function ST(e){return Object.prototype.toString.call(e)==="[object String]"}var En=e=>{var n;if(!e||!ST(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,c,p]=o,m=zo(r),d=zo(c),l=Pn(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let _=A(f({},l),{address:m,body:d,signature:p});return(n=l.extraInfo)!=null&&n.timestamp||delete _.extraInfo,_}catch(r){return null}};var vi={isExpired:!1},Cn=e=>{if(!e)return vi;let o=En(e);if(!o)return vi;let n=ln(),{ttl:r,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return vi;let m=p+r,d=n>m,l=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};t();ae();var bt={origin:W().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},wt=e=>{var n,r,c,p,m,d;return e===!0?bt:{origin:(n=e==null?void 0:e.origin)!=null?n:bt.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:bt.expirySeconds,apiAddress:(c=e==null?void 0:e.apiAddress)!=null?c:bt.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:bt.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var vt=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:c,extraInfo:p,gatewayUrl:m,extraRequestHeaders:d}=wt(e),l=new pd.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:c,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:wt,initialize:u=>g(void 0,null,function*(){var L,k;if(!n||!o)return"";let x=()=>l.getCurrentBlockHash();try{let P=(L=u==null?void 0:u.latestBlockInfo)!=null?L:yield Vm(n,c,x,u==null?void 0:u.noCache);if(!P)return"";let{hash:H,timestamp:M}=P,E=l.encodeValue(JSON.stringify(f(f({},(k=u==null?void 0:u.extraInfo)!=null?k:p),M?{timestamp:M}:{})));return`${l.encodeValue(o)}.${H}.${r}.${E}`}catch(P){return console.error("Error getting native auth token: ",P.toString()),""}}),getToken:({address:u,token:x,signature:L})=>l.getToken(u,x,L),getTokenExpiration:Cn}};var bT=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},Re=e=>{let o=y(Y),n=y(xn),r=(0,md.useRef)(n==null?void 0:n.loginToken),c=bT(o.apiAddress,e),p=wt(f(f({},e===!0?{}:e),c?{apiAddress:c}:{})),m=Boolean(e),d=vt(p),{address:l}=ue(),_=R(),T=k=>{r.current=k,_(yo(f(A(f({},n),{loginToken:k}),c?{nativeAuthConfig:p}:{})))},u=()=>{try{return d.initialize()}catch(k){console.error("Unable to get block. Login failed.",k);return}},x=({address:k,signature:P})=>{let H=r.current;if(!H)throw"Token not found. Call `setLoginToken` first.";if(!m){_(yo({loginToken:H,signature:P}));return}let M=d.getToken({address:k,token:H,signature:P});return _(yo(f({loginToken:H,signature:P,nativeAuthToken:M},c?{nativeAuthConfig:p}:{}))),M};return{configuration:p,setLoginToken:T,getNativeAuthLoginToken:u,setTokenLoginInfo:x,refreshNativeAuthTokenLogin:H=>g(void 0,[H],function*({signMessageCallback:k,nativeAuthClientConfig:P}){let E=yield vt(P||p).initialize({noCache:Boolean(P)});if(r.current=E,!E)return;let K=new Wr.Message({address:new Wr.Address(l),data:a.Buffer.from(`${l}${E}`)}),D=yield k(K,{});if(!(D!=null&&D.signature))throw"Message not signed";return x({address:l,signature:a.Buffer.from(D.signature).toString("hex")})})}};t();var ge=require("react");t();var Gr=require("react");function dd(e,o=[]){let n=(0,Gr.useRef)(!0);(0,Gr.useEffect)(()=>{n.current?n.current=!1:e()},o)}V();N();U();t();t();var fd=w(Vr());Jn();var _d,ud,gd,vT=(gd=(ud=(_d=ke.safeWindow)==null?void 0:_d.location)==null?void 0:ud.origin)==null?void 0:gd.includes("localhost"),hd=e=>{if(!(0,fd.default)(e))return Boolean(e);let n=f({},e);return Boolean(vT)&&delete n.origin,Object.keys(n).length>0};t();function Je(){return Ee(S.getState())}ao();t();var Td=({maxRetries:e})=>new Promise((o,n)=>{let r=0,c=()=>{let p=qo(S.getState());if(p){o(p);return}if(r<e){r++,setTimeout(c,1e3);return}n(null)};c()});ae();t();t();ho();F();var Ao=e=>(Object.values(z).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=Ae.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=_o.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);var Ii=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,logoutRoute:c,customRequestMethods:p=[]})=>{var Do;let m=R(),d=hd(n),l=Re(d?n:!1),_=o,[T,u]=(0,ge.useState)(""),[x,L]=(0,ge.useState)(""),[k,P]=(0,ge.useState)(!0),[H,M]=(0,ge.useState)([]),[E,K]=(0,ge.useState)(null),{provider:D}=kn(),te=y(Op),oe=y(Bp),ve=y(Fp),Ze=y(Up),zn=y(bo),jn=y(Cp),O=(0,ge.useRef)(D),Co=(0,ge.useRef)(!1),No=(0,ge.useRef)(!1),Ct=(Do=c!=null?c:zn)!=null?Do:"/",tn=[Rr.CANCEL_ACTION,...p];o&&tn.push(Rr.SIGN_LOGIN_TOKEN),d&&tn.push(Rr.SIGN_NATIVE_AUTH_TOKEN);let na=k?"":`${Ze}?wallet-connect=${encodeURIComponent(x)}`,Kn=Boolean(T),Xn=Je(),ta=()=>{Te(Ct)},ra=J=>{console.log("WalletConnect Session Event: ",J)},X=()=>g(void 0,null,function*(){var J,Z,Q,ie;try{if(Co.current||O.current==null)return;if(!No.current){try{yield(J=O.current)==null?void 0:J.logout()}catch(aa){console.warn("Unable to logout")}return}let ce=yield(Q=(Z=O.current)==null?void 0:Z.getAddress)==null?void 0:Q.call(Z);if(!ce){console.warn("Login cancelled.");return}let Ie=yield(ie=O.current)==null?void 0:ie.getSignature(),xe={address:ce,loginMethod:"walletconnectv2"},rn={logoutRoute:Ct,loginType:"walletconnectv2",callbackRoute:e!=null?e:W().href};m(mc(rn)),Ie&&l.setTokenLoginInfo({signature:Ie,address:ce}),m(re(xe)),So({callbackRoute:e,onLoginRedirect:r,options:{address:ce,signature:Ie}})}catch(ce){u("User rejected connection proposal"),console.error(ce)}}),B=()=>g(void 0,null,function*(){var Z,Q,ie,ce,Ie;if(we(O.current)==="walletconnectv2")try{((ce=(ie=(Q=(Z=O.current)==null?void 0:Z.walletConnector)==null?void 0:Q.session)==null?void 0:ie.getAll())!=null?ce:[]).length>0&&(yield(Ie=O.current)==null?void 0:Ie.logout()),O.current=Ko,K(null)}catch(xe){console.warn("Unable to logout")}}),me=J=>g(void 0,null,function*(){var Z,Q,ie;if(!te||!oe){u("Invalid WalletConnect setup");return}if(!J||!J.topic){u("Expired connection");return}try{if((O.current?we(O.current):!1)!=="walletconnectv2"){yield Ro();return}if(P(!0),yield B(),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}_&&l.setLoginToken(_),yield Ro(!1);let{approval:Ie}=yield(Z=O.current)==null?void 0:Z.connect({topic:J.topic,methods:tn});try{yield(Q=O.current)==null?void 0:Q.login({approval:Ie,token:_})}catch(xe){console.error("User rejected existing connection proposal",xe),u("User rejected existing connection proposal"),P(!0),yield Ro()}}catch(ce){console.error("Unable to connect to existing session",ce),u("Unable to connect to existing session")}finally{M((ie=O.current)==null?void 0:ie.pairings)}}),Me=J=>g(void 0,null,function*(){var Z,Q;try{J&&(yield(Z=O.current)==null?void 0:Z.logout({topic:J}))}catch(ie){console.error("Unable to remove existing pairing",ie),u("Unable to remove existing pairing")}finally{let ie=yield(Q=O.current)==null?void 0:Q.getPairings();M(ie)}});function Ro(J=!0){return g(this,null,function*(){var rn,aa,ns;Ao();let Z=yield Td({maxRetries:15});if(!Z){console.error("Invalid chainID"),u("Invalid chainID");return}if(!oe||!te){console.error("Invalid WalletConnect setup"),u("Invalid WalletConnect setup");return}let Q=Je(),ie=No.current===!1&&!Q,ce=(aa=(rn=O.current)==null?void 0:rn.isInitialized)==null?void 0:aa.call(rn);if(Co.current||ie||ce)return;if(Co.current=!0,(ns=O.current)!=null&&ns.walletConnector){yield O.current.init(),K(O.current),Co.current=!1,J&&(yield Nt());return}let Ie={onClientLogin:X,onClientLogout:ta,onClientEvent:ra},xe=new Dr(Ie,Z,te,oe,ve);yield xe.init(),K(xe),O.current=xe,Co.current=!1,J&&(M(xe.pairings),yield Nt())})}function Nt(){return g(this,null,function*(){var J,Z;if(!!O.current){if(!te||!oe){u("Invalid WalletConnect setup");return}try{if(!No.current)return;let{uri:Q,approval:ie}=yield(J=O.current)==null?void 0:J.connect({methods:tn});if(!Boolean(Q))return;if(L(Q),(ve==null?void 0:ve.logger)==="debug"&&console.log("WalletConnect uri: ",Q),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}if(_&&l.setLoginToken(_),(O.current?we(O.current):!1)!=="walletconnectv2"){P(!0),yield Ro();return}try{yield(Z=O.current)==null?void 0:Z.login({approval:ie,token:_})}catch(xe){console.error("User rejected connection proposal",xe),u("User rejected connection proposal"),P(!0)}}catch(Q){console.error("Unable to connect",Q)}}})}return dd(()=>{O.current=D},[D]),(0,ge.useEffect)(()=>(No.current=!0,()=>{No.current=!1}),[]),(0,ge.useEffect)(()=>{P(!x)},[x]),(0,ge.useEffect)(()=>{if(!E)return;(Boolean(E.session)||jn==="walletconnectv2")&&Xn&&ee(E)},[E,Xn]),[Ro,{error:T,loginFailed:Kn,isLoading:k&&!Kn,isLoggedIn:Xn&&!Kn},{uriDeepLink:na,walletConnectUri:x,cancelLogin:B,connectExisting:me,removeExistingPairing:Me,wcPairings:H}]};t();var xd=require("react");t();V();N();F();function Hr(e,o=S.dispatch){let n=En(e);if(n==null)return;let{signature:r,address:c}=n;r&&e&&c&&(o(yo({loginToken:e,signature:r,nativeAuthToken:e})),o(re({address:c,loginMethod:"extra"})))}function yd(){let e=R(),o=y(Ep),n=wo();(0,xd.useEffect)(()=>{!o||!n||Hr(n,e)},[n,o])}V();N();t();t();C();t();t();t();var en=w(require("bignumber.js")),Ai=e=>{let o=new en.default(e).dividedBy(1e3).integerValue(en.default.ROUND_FLOOR),n=new en.default(o).dividedBy(60).integerValue(en.default.ROUND_FLOOR),r=new en.default(n).dividedBy(60).integerValue(en.default.ROUND_FLOOR),c=r.modulo(60).isGreaterThan(1),p=n.modulo(60).isGreaterThan(1),m=n.modulo(60).isLessThan(1);return c?`${r} hours`:p?`${n} minutes`:m?"less than 1 minute":`${n} minute`};U();t();t();var Sd=require("@multiversx/sdk-opera-provider");function bd(e){return g(this,null,function*(){try{let o=Sd.OperaProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise opera crypto wallet, make sure that opera crypto wallet is installed.")}catch(o){console.error("Unable to login to OperaProvider",o)}return null})}t();var wd=require("@multiversx/sdk-extension-provider");function vd(e){return g(this,null,function*(){try{let o=wd.ExtensionProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise extension, make sure MultiversX wallet extension is installed.")}catch(o){console.error("Unable to login to ExtensionProvider",o)}return null})}t();ho();function ki(n){return g(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield Ae.CrossWindowProvider.getInstance().init(),c=Ae.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return c;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}t();function Id(r){return g(this,arguments,function*({address:e,walletUrl:o,loginType:n}){try{let c=_o.IframeProvider.getInstance();if(c.isInitialized())return c;switch(n){case In.IframeLoginTypes.passkey:c.setLoginType(In.IframeLoginTypes.passkey);break;case In.IframeLoginTypes.metamask:c.setLoginType(In.IframeLoginTypes.metamask);break;default:break}if(c.setAddress(e).setWalletUrl(o),yield c.init())return c;console.error("Could not initialise IframeProvider")}catch(c){console.error("Unable to login to IframeProvider",c)}return null})}t();t();var Ad=n=>g(void 0,[n],function*({loginToken:e,extraInfoData:o}){if(e==null||Object.keys(o).length===0)return null;let r=Pn(String(e)),_=(r==null?void 0:r.extraInfo)||{},{timestamp:c}=_,p=Oe(_,["timestamp"]);if(!(r&&c!=null))return null;let d={hash:String(r==null?void 0:r.blockHash),timestamp:Number(c)};return yield vt({extraInfo:f(f({},p),o),expirySeconds:r==null?void 0:r.ttl,origin:r==null?void 0:r.origin}).initialize({latestBlockInfo:d})});var Li=p=>g(void 0,[p],function*({loginToken:e,extraInfoData:o,address:n,signature:r,loginService:c}){let m=yield Ad({loginToken:e,extraInfoData:o}),d=o.multisig||o.impersonate||n,l=m!=null?d:n;return m!=null&&c.setLoginToken(m),r&&c.setTokenLoginInfo({signature:r,address:n}),yield Xo(l)});t();var kd=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");function Ld(e){return g(this,null,function*(){try{let o=kd.MetamaskProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise metamask, make suremetamask flask is installed.")}catch(o){console.error("Unable to login to MetamaskProvider",o)}return null})}t();var Pd=require("@multiversx/sdk-passkey-provider/out");function Ed(e){return g(this,null,function*(){try{let o=Pd.PasskeyProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise passkey provider")}catch(o){console.error("Unable to login to PasskeyProvider",o)}return null})}t();t();var Cd=require("react"),Pi=require("@multiversx/sdk-hw-provider");var Ei=()=>{let e=y(bo),o=y(Ee),n=y(Tr),r=pe(),[c,p]=(0,Cd.useState)(),m=()=>g(void 0,null,function*(){let l=(n==null?void 0:n.index)!=null;try{if(r instanceof Pi.HWProvider&&r.isInitialized())return l&&(yield r.setAddressIndex(n.index)),r;let _=new Pi.HWProvider;return(yield _.init())?(l&&(yield _.setAddressIndex(n.index)),_):null}catch(_){return console.error("Failed to initialise Ledger Provider"),null}});function d(l){return g(this,null,function*(){let _,T=o&&!(l!=null&&l.isRelogin);try{if(_=yield m(),!_){console.warn("Could not initialise ledger app"),T&&Te(e);return}let u=yield ui(_);return ee(_),p(u),_}catch(u){console.error("Could not initialise ledger app",u),T&&Te(e)}return null})}return{setLedgerProvider:d,ledgerData:c}};var Ci=!1;function Nd(){let e=y(Y),o=y(xr),n=y(Np),{loginMethod:r,iframeLoginType:c}=y($),p=y(Tn),m=y(Pe),d=y(Ya),l=y(Tr),_=y(Ee),T=y(qo),u=y(xn),x=u==null?void 0:u.nativeAuthConfig,L=Re(x||!1),{data:k,isLoading:P,error:H}=Tt(m),M=(0,ko.useRef)(!1),E=R(),{setLedgerProvider:K,ledgerData:D}=Ei();yd();let{callbackRoute:te,logoutRoute:oe}=n||{callbackRoute:"",logoutRoute:""},[ve]=Ii({callbackRoute:te,logoutRoute:oe});(0,ko.useEffect)(()=>{Ze()},[e]),(0,ko.useEffect)(()=>{ra()},[m,r,T]),(0,ko.useEffect)(()=>{jn()},[u==null?void 0:u.nativeAuthToken,m]),(0,ko.useEffect)(()=>{O()},[k,P]),(0,ko.useEffect)(()=>{zn()},[d,_,D]);function Ze(){return g(this,null,function*(){let X=e.chainId&&![Ft,Ut,Wt].includes(e.chainId)&&!e.roundDuration;if(!!(!e.chainId||X))try{let me=yield bm();me&&(e.chainId!==me.erd_chain_id||e.roundDuration!==me.erd_round_duration)&&E(Cc({chainId:me.erd_chain_id,roundDuration:me.erd_round_duration}))}catch(me){console.error("failed refreshing chainId ",me)}})}function zn(){d==null&&l!=null&&D&&E(Ca({index:l.index,address:m,hasContractDataEnabled:D.dataEnabled,version:D.version}))}function jn(){return g(this,null,function*(){let{remainingParams:{impersonate:X,multisig:B}}=ut(["impersonate"]),me=Za(m);if(!(u!=null&&u.nativeAuthToken)||X||B||me)return;let Me=En(u==null?void 0:u.nativeAuthToken);(Me==null?void 0:Me.address)&&Me.address!==m&&(E(Xt(Me.address)),yield Io())})}function O(){return g(this,null,function*(){if(P){E(un(!0));return}if(H){E(rc("Failed getting account")),console.error("Failed getting account ",H);return}if(M.current){M.current=!1,E(un(!1));return}k?E(xo(A(f({},k),{address:m,nonce:k.nonce.valueOf()}))):_||E(Xt("")),E(un(!1))})}function Co(){return g(this,null,function*(){let X=Mr(o);if(ee(X),p!=null){try{let B=yield he(),{clearNavigationHistory:me,remainingParams:{signature:Me,multisig:Ro,impersonate:Nt}}=ut(["signature","loginToken","address","multisig","impersonate"]);if(!B)return ee(Ko),E(yo(null)),E(Qt(null)),me();let Do=yield Li({loginToken:u==null?void 0:u.loginToken,extraInfoData:{multisig:Ro,impersonate:Nt},address:B,signature:Me,loginService:L});Do&&(M.current=!0,E(un(!0)),E(re({address:Do.address,loginMethod:"wallet"})),E(xo(A(f({},Do),{nonce:Jo(Do)}))),E(un(!1))),me()}catch(B){console.error("Failed authenticating wallet user ",B)}E(Qt(null))}})}function No(){return g(this,null,function*(){let X=yield he(),B=yield vd(X);B&&ee(B)})}function Ct(){return g(this,null,function*(){let X=yield he(),B=yield Ed(X);B&&ee(B)})}function tn(){return g(this,null,function*(){let X=yield he(),B=yield Ld(X);B&&ee(B)})}function na(){return g(this,null,function*(){let X=yield he(),B=yield bd(X);B&&ee(B)})}function Kn(){return g(this,null,function*(){let X=yield he(),B=yield ki({address:X,walletUrl:e.walletAddress});B&&ee(B)})}function Xn(){return g(this,null,function*(){let X=yield he();if(!e.metamaskSnapWalletAddress)throw new Error("Metamask snap wallet URL is not set.");let B=yield Id({address:X,walletUrl:e.metamaskSnapWalletAddress,loginType:c});B&&ee(B)})}function ta(){return g(this,null,function*(){try{E(Ra(!0)),yield ve(!1)}catch(X){console.error("Could not initialize WalletConnect")}finally{E(Ra(!1))}})}function ra(){return g(this,null,function*(){if(!(r==null||Ci))switch(r){case"ledger":{Ci=!0,yield K(),Ci=!1;break}case"walletconnectv2":{ta();break}case"extension":{No();break}case"passkey":{Ct();break}case"metamask":{tn();break}case"opera":{na();break}case"crossWindow":{Kn();break}case"iframe":Xn();break;case"extra":{Or();break}case"wallet":case"":{Co();break}default:return}})}return null}t();var Dd=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Md=require("@multiversx/sdk-webview-provider/out/WebviewProvider");V();t();t();N();function Ni(){S.dispatch(Ho())}function Rd(e){S.dispatch(Kc({batchId:e}))}t();se();t();N();F();t();t();var kT=require("@multiversx/sdk-core"),LT=w(require("bignumber.js"));C();t();t();var PT=w(require("bignumber.js"));C();var De=class{constructor(){this.init=()=>g(this,null,function*(){return yield this._provider.init()});this.login=()=>g(this,null,function*(){var n;let o=yield this._provider.login();return{address:(n=o==null?void 0:o.address)!=null?n:""}});this.logout=()=>g(this,null,function*(){return S.dispatch(G()),yield this._provider.logout()});this.relogin=()=>g(this,null,function*(){let o=yield this._provider.relogin();return o?(Hr(o),Or(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>g(this,null,function*(){let n=yield this._provider.signTransactions(o);return n||(Ni(),this._provider.cancelAction(),null)});this.signTransaction=o=>g(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>g(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>g(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>g(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,Dd.providerNotInitializedError)("getAddress");this._provider=Md.WebviewProvider.getInstance({resetStateCallback:()=>S.dispatch(G())})}static getInstance(){return De._instance||(De._instance=new De),De._instance}getAccount(){var n;let o=this._provider.getAccount();return{address:(n=o==null?void 0:o.address)!=null?n:""}}setAccount(o){this._provider.setAccount(o)}};N();F();t();var $n=w(require("react"));t();t();t();t();var ou=require("react");t();t();var Ri=()=>y(Ce);t();N();t();t();t();t();function Di(){let e=y(si),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{pendingTransactions:e,pendingTransactionsArray:o,hasPendingTransactions:n}}fn();t();N();U();t();fn();function Od(e,o){return e.reduce((r,{status:c,hash:p})=>(p!=null&&!o.includes(p)&&io(c)&&r.push({hash:p,previousStatus:c}),r),[])}t();N();U();function Bd({results:e,hash:o,sessionId:n}){let r=e==null?void 0:e.find(c=>(c==null?void 0:c.returnMessage)!=="");S.dispatch(ze({transactionHash:o,sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage,inTransit:!1,serverTransaction:r})),S.dispatch(je({sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage}))}t();N();F();function Mi(e){S.dispatch(je({sessionId:e,status:"timedOut"}))}var $r={},Oi=[];function ET({serverTransaction:e,sessionId:o,customTransactionInformation:n,shouldRefreshBalance:r,isSequential:c}){let{hash:p,status:m,inTransit:d,results:l,invalidTransaction:_,hasStatusChanged:T}=e;try{if(Oi.includes(p))return;if($r[p]>30){Mi(o);return}if(_&&!c||io(m)){$r[p]=$r[p]?$r[p]+1:1;return}if(c&&!m){S.dispatch(ze({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}));return}T&&(Go(m)&&(n==null?void 0:n.completedTransactionsDelay)!=null?(Oi.push(p),setTimeout(()=>S.dispatch(ze({sessionId:o,status:"success",transactionHash:p,inTransit:d,serverTransaction:e})),n==null?void 0:n.completedTransactionsDelay)):S.dispatch(ze({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}))),r||Io(),Vo(m)&&Bd({sessionId:o,hash:p,results:l})}catch(u){console.error(u),Mi(o)}}function Fd(l){return g(this,arguments,function*({sessionId:e,transactionBatch:{transactions:o,customTransactionInformation:n},getTransactionsByHash:r=Nr,shouldRefreshBalance:c,isSequential:p,onSuccess:m,onFail:d}){try{if(o==null)return;let _=Od(o,Oi),T=yield r(_);for(let x of T)ET({serverTransaction:x,sessionId:e,customTransactionInformation:n,shouldRefreshBalance:c,isSequential:p});if(T.every(x=>x.status!=="pending")&&!(n!=null&&n.grouping)){if(T.every(k=>k.status==="success"))return m==null?void 0:m(e);if(T.some(k=>k.status==="fail"))return d==null?void 0:d(e)}}catch(_){console.error(_)}})}function Ud(){let{pendingTransactionsArray:e}=Di();function o(n){return g(this,null,function*(){let r=e.filter(([,c])=>{var p;return!((p=c==null?void 0:c.customTransactionInformation)!=null&&p.grouping)}).filter(([c,p])=>c!=null&&io(p.status));if(r.length>0)for(let[c,p]of r)yield Fd(f({sessionId:c,transactionBatch:p},n));n.shouldRefreshBalance&&(yield Io())})}return o}t();t();t();F();t();mn();var Nn=()=>{let e=y(Mp);return e?Math.max(1e3,e/2):9e4};t();t();function Rn(){let e=y(mo),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{signedTransactions:e,signedTransactionsArray:o,hasSignedTransactions:n}}t();t();var CT=w(require("swr"));t();t();t();t();var Wd=require("react");t();t();var NT=require("react"),RT=require("@multiversx/sdk-web-wallet-provider"),DT=require("@multiversx/sdk-web-wallet-provider"),MT=w(require("qs"));C();N();U();Sa();ae();var dU=W();t();var Hd=require("react"),Fi=require("@multiversx/sdk-core");C();Da();t();t();t();t();t();t();t();C();ae();t();t();var P_=require("react"),E_=require("@multiversx/sdk-core"),uS=require("@multiversx/sdk-extension-provider"),gS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),fS=require("@multiversx/sdk-passkey-provider/out"),hS=w(k_());C();ho();t();N();U();se();ae();t();var L_=require("react"),cS=require("@multiversx/sdk-extension-provider"),pS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),mS=require("@multiversx/sdk-passkey-provider/out");ho();N();t();N();F();Wo();ae();t();Ve();N();t();t();var TS=require("react");t();U();fn();t();var C_=require("react");t();t();var xS=require("react"),yS=require("@multiversx/sdk-extension-provider");Ve();V();U();ao();se();se();t();var SS=require("react"),bS=require("@multiversx/sdk-opera-provider");Ve();V();U();ao();se();ae();t();var wS=require("react");wa();Ve();ho();V();N();U();ao();ae();t();var LS=require("react");Ve();N();t();t();Ia();t();t();var vS=w(require("platform"));Uo();t();t();t();t();t();t();t();Jn();U();t();t();var IS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();Wo();_n();t();t();t();N();var AS={},kS={};var N_=e=>{if(e.component!=null){let o=e,{component:n,onClose:r}=o,c=Oe(o,["component","onClose"]),p=S.dispatch(Ba(A(f({},c),{component:null,onClose:void 0})));return AS[p==null?void 0:p.payload.toastId]=n,r&&(kS[p==null?void 0:p.payload.toastId]=r),p==null?void 0:p.payload}return S.dispatch(Ba(e)).payload};t();t();var R_=w(require("axios"));function Vi(e){return g(this,null,function*(){try{let{data:o}=yield R_.default.get(`${e}/websocket/config`);return`wss://${o.url}`}catch(o){throw console.error(o),new Error("Can not get websocket url")}})}se();ae();t();t();var US=require("react");C();t();t();t();var Po=w(require("react")),$_=require("react"),q_=require("react"),Yi=w(require("classnames")),z_=require("react-dom");C();t();var B_=w(require("react"));t();var Pt=w(require("react"));t();Uo();var D_=()=>!Le();var ES=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>($i(),Hi))}),CS=()=>($i(),Be(Hi)).default,qi=D_();function O_({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,c]=Pt.default.useState(qi?void 0:CS()),[p,m]=Pt.default.useState(qi||n==null?void 0:n()),d=()=>g(this,null,function*(){(e?e():ES()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Pt.useEffect)(()=>{qi&&d()},[]),{globalStyles:r,styles:p}}function Lo(e,o){return n=>{let{globalStyles:r,styles:c}=O_({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return B_.default.createElement(e,A(f({},n),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}t();var U_=w(require("react")),W_=w(require("classnames"));var RS=({className:e,children:o,styles:n})=>U_.default.createElement("div",{className:(0,W_.default)(n==null?void 0:n.dappModalBody,e)},o),zi=Lo(RS,{ssrStyles:()=>Promise.resolve().then(()=>(fo(),go)),clientStyles:()=>(fo(),Be(go)).default});t();var ji=w(require("react")),G_=w(require("classnames"));var DS=({visible:e,customFooter:o,className:n,footerText:r,styles:c})=>e?ji.default.createElement("div",{className:(0,G_.default)(c==null?void 0:c.dappModalFooter,n)},o!=null?o:ji.default.createElement("div",null,r)):null,Ki=Lo(DS,{ssrStyles:()=>Promise.resolve().then(()=>(fo(),go)),clientStyles:()=>(fo(),Be(go)).default});t();var Bn=w(require("react")),V_=require("@fortawesome/free-solid-svg-icons"),H_=require("@fortawesome/react-fontawesome"),Et=w(require("classnames"));var MS=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?n?Bn.default.createElement("div",{className:(0,Et.default)(l==null?void 0:l.dappModalHeader,r)},n):Bn.default.createElement("div",{className:(0,Et.default)(l==null?void 0:l.dappModalHeader,r)},Bn.default.createElement("div",{className:(0,Et.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Bn.default.createElement("button",{onClick:m,className:(0,Et.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Bn.default.createElement(H_.FontAwesomeIcon,{size:"lg",icon:V_.faTimes}))):null,Xi=Lo(MS,{ssrStyles:()=>Promise.resolve().then(()=>(fo(),go)),clientStyles:()=>(fo(),Be(go)).default});var OS={showHeader:!0,showFooter:!1,headerText:"",footerText:""},BS=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=OS,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[T,u]=(0,$_.useState)(!1);if((0,q_.useEffect)(()=>{u(!0)},[]),!l)return null;let{showHeader:x,showFooter:L,headerText:k,footerText:P,modalDialogClassName:H="dapp-modal-dialog",modalContentClassName:M="dapp-modal-dialog-content",modalHeaderClassName:E="dapp-modal-dialog-header",modalHeaderTextClassName:K="dapp-modal-dialog-header-text",modalCloseButtonClassName:D="dapp-modal-dialog-close-button",modalBodyClassName:te="dapp-modal-dialog-content-body",modalFooterClassName:oe="dapp-modal-dialog-footer",customModalHeader:ve,customModalFooter:Ze}=c,zn=jn=>{jn.key==="Escape"&&r&&(m==null||m())};return Po.default.createElement(Po.default.Fragment,null,T&&(0,z_.createPortal)(Po.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Yi.default)(H,_==null?void 0:_.dappModal,n),"data-testid":e,onKeyDown:zn},Po.default.createElement("div",{className:(0,Yi.default)(_==null?void 0:_.dappModalContent,M)},Po.default.createElement(Xi,{visible:x,headerText:k,customHeader:ve,className:E,headerTextClassName:K,closeButtonClassName:D,onHide:m}),Po.default.createElement(zi,{className:te},o),Po.default.createElement(Ki,{visible:L,customFooter:Ze,footerText:P,className:oe}))),d!=null?d:document==null?void 0:document.body))},FS=Lo(BS,{ssrStyles:()=>Promise.resolve().then(()=>(fo(),go)),clientStyles:()=>(fo(),Be(go)).default});t();t();var j_=require("react");t();t();var K_=require("react"),GS=require("@multiversx/sdk-hw-provider");Ve();V();N();U();ao();t();var WS=require("react");t();t();var HS=require("react"),$S=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Ve();V();U();ao();se();se();t();var qS=require("react"),zS=require("@multiversx/sdk-passkey-provider/out");Ve();V();U();ao();se();se();t();t();var X_=require("react");t();var Zi=require("react");t();var Eo=require("react"),Z_=require("socket.io-client");N();t();var j={current:null,status:"not_initialized"};var jS=3e3,KS=3,Y_=500,J_=1e3,XS="batchUpdated",YS="connect",JS="disconnect";function Q_(){let e=(0,Eo.useRef)(null),o=(0,Eo.useRef)(null),{address:n}=ue(),r=R(),{network:c}=Ri(),p=_=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{r(ac(_))},J_)},m=_=>{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{r(ic(_))},J_)},d=()=>{var _;(_=j.current)==null||_.close(),j.current=null,j.status="not_initialized",e.current&&clearTimeout(e.current)},l=(0,Eo.useCallback)(Fr(()=>g(this,null,function*(){var T;if(!n)return;j.status="pending";let _=(T=c.websocketUrl)!=null?T:yield Vi(c.apiAddress);if(_==null){console.warn("Can not get websocket url");return}j.current=(0,Z_.io)(_,{forceNew:!0,reconnectionAttempts:KS,timeout:jS,query:{address:n}}),j.status="completed",j.current.onAny(p),j.current.on(XS,m),j.current.on(YS,()=>{console.log("Websocket connected.")}),j.current.on(JS,()=>{n&&(console.warn("Websocket disconnected. Trying to reconnect..."),setTimeout(()=>{var u;n&&(console.log("Websocket reconnecting..."),(u=j.current)==null||u.connect())},Y_))})}),{retries:2,delay:Y_}),[n]);(0,Eo.useEffect)(()=>{var _;if(n&&j.status==="not_initialized"&&!((_=j.current)!=null&&_.active)){l();return}n||d()},[n,l]),(0,Eo.useEffect)(()=>()=>{d()},[])}function jr(e,o){Q_();let n=Fm(),r=Om();(0,Zi.useEffect)(()=>{let c=n==null?void 0:n.message;c&&e(c)},[e,n]),(0,Zi.useEffect)(()=>{let c=r==null?void 0:r.data;c&&(o==null||o(c))},[o,r])}t();t();var ZS=require("react");F();t();t();t();var QS=w(require("swr"));Fo();var{logoutEvent:eb}=fe,eu="storage",nu=()=>{let{address:e}=lo(),o=y(bo);(0,ou.useEffect)(()=>{let n=r=>{if(!(r.key!==eb||!r.newValue))try{let{data:c}=JSON.parse(r.newValue);c===e&&Te(o)}catch(c){return}};return window==null||window.addEventListener(eu,n),()=>{window==null||window.removeEventListener(eu,n)}},[e,o])};t();t();var Kr=require("react"),tu=require("@fortawesome/free-solid-svg-icons"),Qi=w(require("bignumber.js"));var ru=()=>{let{address:e}=lo(),{tokenLogin:o}=y($),{secondsUntilExpires:n,expiresAt:r}=Cn(o==null?void 0:o.nativeAuthToken),c=(0,Kr.useRef)();return(0,Kr.useEffect)(()=>{var d;let p=new Qi.default(String(n)),m=p.times(1e3);if(!(!n||p.isLessThanOrEqualTo(0))){if((d=o==null?void 0:o.nativeAuthConfig)!=null&&d.tokenExpirationToastWarningSeconds){clearTimeout(c.current);let _=new Qi.default(o.nativeAuthConfig.tokenExpirationToastWarningSeconds).times(1e3),T=p.times(1e3).minus(_),u=Ai(m.toNumber()),x=T.isLessThanOrEqualTo(0)?0:T.toNumber();c.current=setTimeout(()=>{N_({toastId:"nativeAuthTokenExpiration",type:"custom",title:"Session Expiration Warning",icon:tu.faRefresh,message:`Your token will expire in ${u}!`})},x)}return()=>{clearTimeout(c.current)}}},[r,e,o==null?void 0:o.nativeAuthConfig]),null};t();var Fn=require("react"),au=w(require("bignumber.js"));var iu=()=>{let{address:e}=lo(),{tokenLogin:o}=y($),n=y(bo),{isExpired:r,secondsUntilExpires:c,expiresAt:p}=Cn(o==null?void 0:o.nativeAuthToken),m=(0,Fn.useRef)(""),d=(0,Fn.useRef)();return(0,Fn.useEffect)(()=>{e&&r&&Te(n)},[r,e,n]),(0,Fn.useEffect)(()=>{let l=Boolean(wo());if(!e||l)return;let _=new au.default(String(c)),T=`${e}_${p}`,u=m.current===T;if(!(c&&_.isGreaterThan(0))||u)return;m.current=T,clearTimeout(d.current);let L=_.times(1e3);return d.current=setTimeout(()=>{Te(n)},L.toNumber()),()=>{clearTimeout(d.current)}},[p,e,n]),null};var su=()=>(ru(),nu(),iu(),null);t();t();var nn=require("react");N();U();Wo();t();N();t();t();function cu({transactions:e}){return e==null?void 0:e.some(o=>Array.isArray(o))}function Xr({transactions:e=[]}){return cu({transactions:e})?e.flat():e}t();N();F();var es=({errorMessage:e,sessionId:o,transactions:n,clearSignInfo:r})=>{console.error("Unable to send transactions",e),S.dispatch(je({sessionId:o,status:"fail",errorMessage:e,transactions:n.map(c=>A(f({},c),{status:"not executed"}))})),r==null||r()};t();N();F();var pu=({errorMessage:e,sessionId:o,clearSignInfo:n})=>{console.error("Unable to send transactions",e),S.dispatch(je({sessionId:o,status:"fail",errorMessage:e})),n==null||n()};var ob=c=>g(void 0,[c],function*({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r}){var T,u;let{transactions:p}=e;if(!p)return;let m=(T=e.customTransactionInformation)==null?void 0:T.grouping;if(!m)return;let d=p.reduce((x,L,k)=>{let P=m.findIndex(H=>H.includes(k));return x[P]||(x[P]=[]),x[P].push(L),x},[]);if(d.length===0)return;let l=yield r({transactions:d,sessionId:o}),_=l==null?void 0:l.data;if((l==null?void 0:l.error)||!_){es({errorMessage:(u=l==null?void 0:l.error)!=null?u:"Send batch error",sessionId:o,transactions:p,clearSignInfo:n});return}return _&&S.dispatch(zc(_)),Xr({transactions:_==null?void 0:_.transactions}).map(x=>x.hash)}),mu=p=>g(void 0,[p],function*({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r=Cr,sendSignedTransactionsAsync:c=Er}){var l,_,T;let{transactions:m}=e;if(!m)return;if((l=e.customTransactionInformation)==null?void 0:l.grouping)try{return yield ob({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r})}catch(u){return es({errorMessage:u.message,sessionId:o,transactions:m}),null}try{let u=m.map(x=>yn(x));return yield c(u)}catch(u){let x=(_=u.response)==null?void 0:_.data;return pu({errorMessage:(T=x==null?void 0:x.message)!=null?T:u.message,sessionId:o,clearSignInfo:n}),null}});var du=e=>{let o=e.redirectRoute;o&&ro({url:o})},lu=({sendSignedTransactionsAsync:e=Er,sendSignedBatchTransactionsAsync:o=Cr})=>{let n=R(),{nonce:r}=y(co),c=y(mo),p=(0,nn.useRef)(!1),m=(0,nn.useRef)([]),d=()=>{n(Ho()),p.current=!1},l=(0,nn.useCallback)(()=>g(void 0,null,function*(){var T;let _=Object.keys(c);for(let u of _){let x=c[u],L=(T=x==null?void 0:x.customTransactionInformation)==null?void 0:T.signWithoutSending;if(!x||!u||L){du(x);continue}if(m.current.includes(u))continue;let{transactions:k}=x;if(!k||!(x.status==="signed"&&!p.current))continue;p.current=!0,m.current.push(u);let M=yield mu({session:x,sessionId:u,clearSignInfo:d,sendSignedTransactionsAsync:e,sendSignedBatchTransactionsAsync:o}),E="pending",K=k.map(oe=>M!=null&&M.includes(oe.hash)?A(f({},oe),{status:E}):oe);n(hc({sessionId:u,submittedMessage:"submitted"})),n(je({sessionId:u,status:"sent",transactions:K})),d(),Cm(r+k.length),du(x);let[te]=k;ii({transaction:te}),p.current=!1}}),[c,r]);return(0,nn.useEffect)(()=>{l()},[c,l]),null};t();t();t();var ku=require("react");t();var uu=require("react");t();var nb=e=>e.batchTransactions,_u=v(nb,e=>{let o=f({},e);return delete o._persist,o});function Un(){let e=y(_u),o=(0,uu.useMemo)(()=>Object.entries(e).map(([n,r])=>({batchId:n,transactions:r.transactions})),[e]);return{batches:e,batchTransactionsArray:o}}F();t();var Vn=require("react");mn();t();C();var Wn=e=>{if(!e||typeof e!="string")return null;let o=e.split(qt)[0];return wr(o)?parseInt(o,10):null};t();var Yr=(e,o)=>new Date().getTime()-e>o;t();var vu=require("react");t();var xu=require("react");F();t();var hu=require("react");t();var gu=w(require("axios"));To();function fu(n){return g(this,arguments,function*({batchId:e,address:o}){let{apiAddress:r,apiTimeout:c}=Y(S.getState()),{data:p}=yield gu.default.get(`${r}/${Sr}/${o}/${e}`,{timeout:Number(c!=null?c:Gt)});return p})}var Tu=()=>{let{address:e}=ue();return(0,hu.useCallback)(o=>g(void 0,null,function*(){try{return yield fu({batchId:o,address:e})}catch(n){return console.error(n),null}}),[e])};var Jr=()=>{let e=Tu();return(0,xu.useCallback)(n=>g(void 0,[n],function*({batchId:o}){let r=yield e(o);return r?{statusResponse:r,isBatchSuccessful:r.status==="success",isBatchFailed:r.status==="fail"||r.status==="invalid"||r.status==="dropped",isBatchNotFound:Boolean(r.statusCode)&&Boolean(r.message)}:{statusResponse:r,isBatchSuccessful:!1,isBatchFailed:!0,isBatchNotFound:!1}}),[e])};t();F();var Zr=({transactions:e,hasUnrelatedTransactions:o})=>{let n=e.every(({status:l})=>l==="fail"),r=e.some(({status:l})=>l==="fail"),c=e.some(({status:l})=>l==="pending"),p=e.every(({status:l})=>l==="success"),m=o&&Boolean(!c&&!n&&r);return{isPending:c,isSuccessful:p,isFailed:o?m?!1:n:r,isIncompleteFailed:m}};t();var yu=require("react");N();function Su(){let e=R(),o=Jr();return(0,yu.useCallback)(r=>g(this,[r],function*({batchId:n}){let c=yield o({batchId:n});return c.statusResponse&&e(jc(c.statusResponse)),c}),[e,o])}t();var os=require("react");N();t();t();var Gn=class{constructor(o){this.status=(o||"").toLowerCase()}static createUnknown(){return new Gn("unknown")}isPending(){return this.status=="received"||this.status=="pending"}isExecuted(){return this.isSuccessful()||this.isFailed()||this.isInvalid()}isSuccessful(){return this.status=="executed"||this.status=="success"||this.status=="successful"}isFailed(){return this.status=="fail"||this.status=="failed"||this.status=="unsuccessful"||this.isInvalid()}isInvalid(){return this.status=="invalid"}toString(){return this.status}valueOf(){return this.status}equals(o){return o?this.status==o.status:!1}};t();function bu(e){return new Promise(o=>setTimeout(o,e))}var wu=e=>g(void 0,null,function*(){let n=4,r;if(e.length===0)return{data:r,success:!1};for(;r===void 0&&n>0;)try{yield bu(3e3);let p=(yield Promise.allSettled(e.map(d=>um(d)))).map(d=>d.status==="fulfilled"?d.value.data:void 0).filter(d=>d!==void 0);if(p.length>0){let d=p.length===e.length,l=p.some(_=>new Gn(_.status).isPending());d&&!l||n===1?(r=p,n=0):n-=1}else n-=1}catch(c){n-=1}return{data:r,success:r!==void 0}});F();function Qr(){let e=R(),{address:o}=ue(),n=(0,os.useCallback)(({sessionId:r,dropUnprocessedTransactions:c,serverTransactions:p,batchTransactions:m})=>{for(let d of m){let l=p.find(_=>_.txHash===d.hash);if(!l){c&&e(ze({sessionId:r,status:"fail",transactionHash:d.hash}));continue}e(ze({sessionId:r,status:l.status,transactionHash:d.hash,serverTransaction:l}))}},[e]);return(0,os.useCallback)(r=>g(this,null,function*(){if(!r)return;let{transactions:c,isBatchFailed:p,sessionId:m}=r;if(!c||c.length===0)return;if(p){for(let _ of c)e(ze({sessionId:m,status:"fail",transactionHash:_.hash}));return}let{data:d,success:l}=yield wu(c.map(({hash:_})=>_).filter(_=>Boolean(_)));l&&d&&n({sessionId:m,dropUnprocessedTransactions:r.dropUnprocessedTransactions,serverTransactions:d,batchTransactions:c}),r.shouldRefreshBalance&&(yield Io())}),[e,o,n])}var ea=e=>{let o=R(),{signedTransactions:n}=Rn(),r=Su(),c=Qr(),p=Jr(),m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail;return{verifyBatchStatus:(0,vu.useCallback)(T=>g(void 0,[T],function*({batchId:_}){var K,D,te,oe,ve;let u=(D=(K=Wn(_))==null?void 0:K.toString())!=null?D:"",x=n[u];if(!x||!((te=x.customTransactionInformation)==null?void 0:te.grouping))return;let k=(ve=(oe=n[u])==null?void 0:oe.transactions)!=null?ve:[],{isSuccessful:P,isFailed:H,isPending:M}=Zr({transactions:k});if(!M)P&&(m==null||m(u)),H&&(d==null||d(u,"Error processing batch transactions."));else{let Ze=yield r({batchId:_});yield c({sessionId:u.toString(),isBatchFailed:Ze==null?void 0:Ze.isBatchFailed,shouldRefreshBalance:!0,transactions:k})}}),[o,p,c,n,r,m,d])}};var Iu=e=>{let{batchTransactionsArray:o}=Un(),{verifyBatchStatus:n}=ea(e),r=Nn(),c=(0,Vn.useRef)(null),p=j.status==="completed",m=(0,Vn.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:d}of o){let l=Wn(d);!l||!Yr(l,9e4)||(yield n({batchId:d}))}}),[o,n]);(0,Vn.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{m()},r),()=>{c.current&&clearInterval(c.current)}},[m])};t();var Hn=require("react");mn();var Au=e=>{let{batchTransactionsArray:o}=Un(),n=Nn(),r=Qr(),c=(0,Hn.useRef)(null),p=j.status==="completed",m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail,l=(0,Hn.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:_,transactions:T}of o){let u=Wn(_);if(!u||!Yr(u,6e5))continue;yield r({sessionId:u.toString(),shouldRefreshBalance:!0,dropUnprocessedTransactions:!0});let x=Xr({transactions:T}),{isPending:L,isSuccessful:k,isFailed:P}=Zr({transactions:x});L||(Rd(_),k&&(m==null||m(u.toString())),P&&(d==null||d(u.toString(),"Error processing batch transactions. Status: failed")))}}),[o,r,m,d]);(0,Hn.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{l()},n),()=>{c.current&&clearInterval(c.current)}},[l])};var Lu=({onSuccess:e,onFail:o})=>{let{batches:n}=Un(),{signedTransactionsArray:r}=Rn(),{address:c}=ue(),{verifyBatchStatus:p}=ea({onSuccess:e,onFail:o}),m=()=>{},d=_=>g(void 0,null,function*(){yield p({batchId:_.batchId})}),l=()=>g(void 0,null,function*(){for(let[_,T]of r){let u=ht({sessionId:_,address:c}),x=!Boolean(n[u]);!(T.status!=="sent")||x||(yield p({batchId:u}))}});jr(m,d),Iu({onSuccess:e,onFail:o}),Au({onSuccess:e,onFail:o}),(0,ku.useEffect)(()=>{l()},[])};t();var oa=require("react");function Pu(e){var d;let o=Ud(),n=Nn(),r=(0,oa.useRef)(null),c=j.status==="completed",p=(d=e==null?void 0:e.getTransactionsByHash)!=null?d:Nr,m=()=>{o(f({getTransactionsByHash:p},e))};jr(m),(0,oa.useEffect)(()=>{if(c){r.current&&clearInterval(r.current);return}if(!r.current)return r.current=setInterval(m,n),()=>{r.current&&clearInterval(r.current)}},[m,j])}function Eu(e){return Pu(e),Lu(e),null}function Cu({customComponents:e}){var d,l,_;let o=e==null?void 0:e.transactionSender,n=e==null?void 0:e.transactionTracker,r=e==null?void 0:e.logoutListener,c=(d=o==null?void 0:o.component)!=null?d:lu,p=(l=n==null?void 0:n.component)!=null?l:Eu,m=(_=r==null?void 0:r.component)!=null?_:su;return $n.default.createElement($n.default.Fragment,null,$n.default.createElement(c,f({},o==null?void 0:o.props)),$n.default.createElement(p,f({},n==null?void 0:n.props)),$n.default.createElement(m,null))}var rb=()=>{var n;let e=De.getInstance(),o=Lr();_c({data:o}),(n=e.init)==null||n.call(e),hi(e)},ab=({children:e,customNetworkConfig:o={},externalProvider:n,environment:r,customComponents:c,dappConfig:p})=>{if(!r)throw new Error("missing environment flag");return n!=null?hi(n):p!=null&&p.shouldUseWebViewProvider&&rb(),qn.default.createElement(Nu.Provider,{context:st,store:S},qn.default.createElement(Ru.PersistGate,{persistor:Sp,loading:null},()=>qn.default.createElement(Ti,{environment:r,customNetworkConfig:o,dappConfig:p},qn.default.createElement(Nd,null),qn.default.createElement(Cu,{customComponents:c}),e)))};0&&(module.exports={AppInitializer,AuthenticatedRoutesWrapper,AxiosInterceptor,AxiosInterceptorContext,AxiosInterceptorContextProvider,DappProvider,LoginInfoListener,useAppInitializer,useAxiosInterceptorContext});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
