"use strict";var vu=Object.create;var zn=Object.defineProperty,Iu=Object.defineProperties,Au=Object.getOwnPropertyDescriptor,ku=Object.getOwnPropertyDescriptors,Lu=Object.getOwnPropertyNames,Lt=Object.getOwnPropertySymbols,Eu=Object.getPrototypeOf,Qr=Object.prototype.hasOwnProperty,Ki=Object.prototype.propertyIsEnumerable;var ji=(e,o,n)=>o in e?zn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,f=(e,o)=>{for(var n in o||(o={}))Qr.call(o,n)&&ji(e,n,o[n]);if(Lt)for(var n of Lt(o))Ki.call(o,n)&&ji(e,n,o[n]);return e},A=(e,o)=>Iu(e,ku(o));var ea=e=>typeof e=="symbol"?e:e+"",De=(e,o)=>{var n={};for(var r in e)Qr.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Lt)for(var r of Lt(e))o.indexOf(r)<0&&Ki.call(e,r)&&(n[r]=e[r]);return n};var b=(e,o)=>()=>(e&&(o=e(e=0)),o);var I=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Je=(e,o)=>{for(var n in o)zn(e,n,{get:o[n],enumerable:!0})},Xi=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Lu(o))!Qr.call(e,c)&&c!==n&&zn(e,c,{get:()=>o[c],enumerable:!(r=Au(o,c))||r.enumerable});return e};var w=(e,o,n)=>(n=e!=null?vu(Eu(e)):{},Xi(o||!e||!e.__esModule?zn(n,"default",{value:e,enumerable:!0}):n,e)),Me=e=>Xi(zn({},"__esModule",{value:!0}),e);var g=(e,o,n)=>new Promise((r,c)=>{var p=l=>{try{d(n.next(l))}catch(_){c(_)}},m=l=>{try{d(n.throw(l))}catch(_){c(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var Zi=I(Et=>{"use strict";t();Et.byteLength=Cu;Et.toByteArray=Ru;Et.fromByteArray=Ou;var Oe=[],ye=[],Pu=typeof Uint8Array!="undefined"?Uint8Array:Array,oa="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(No=0,Yi=oa.length;No<Yi;++No)Oe[No]=oa[No],ye[oa.charCodeAt(No)]=No;var No,Yi;ye["-".charCodeAt(0)]=62;ye["_".charCodeAt(0)]=63;function Ji(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function Cu(e){var o=Ji(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Nu(e,o,n){return(o+n)*3/4-n}function Ru(e){var o,n=Ji(e),r=n[0],c=n[1],p=new Pu(Nu(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=ye[e.charCodeAt(l)]<<18|ye[e.charCodeAt(l+1)]<<12|ye[e.charCodeAt(l+2)]<<6|ye[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ye[e.charCodeAt(l)]<<2|ye[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ye[e.charCodeAt(l)]<<10|ye[e.charCodeAt(l+1)]<<4|ye[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Du(e){return Oe[e>>18&63]+Oe[e>>12&63]+Oe[e>>6&63]+Oe[e&63]}function Mu(e,o,n){for(var r,c=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Du(r));return c.join("")}function Ou(e){for(var o,n=e.length,r=n%3,c=[],p=16383,m=0,d=n-r;m<d;m+=p)c.push(Mu(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],c.push(Oe[o>>2]+Oe[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],c.push(Oe[o>>10]+Oe[o>>4&63]+Oe[o<<2&63]+"=")),c.join("")}});var Qi=I(na=>{t();na.read=function(e,o,n,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,_=l>>1,h=-7,u=n?c-1:0,x=n?-1:1,L=e[o+u];for(u+=x,p=L&(1<<-h)-1,L>>=-h,h+=d;h>0;p=p*256+e[o+u],u+=x,h-=8);for(m=p&(1<<-h)-1,p>>=-h,h+=r;h>0;m=m*256+e[o+u],u+=x,h-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(L?-1:1)*m*Math.pow(2,p-r)};na.write=function(e,o,n,r,c,p){var m,d,l,_=p*8-c-1,h=(1<<_)-1,u=h>>1,x=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=r?0:p-1,k=r?1:-1,E=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=h):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+u>=1?o+=x/l:o+=x*Math.pow(2,1-u),o*l>=2&&(m++,l/=2),m+u>=h?(d=0,m=h):m+u>=1?(d=(o*l-1)*Math.pow(2,c),m=m+u):(d=o*Math.pow(2,u-1)*Math.pow(2,c),m=0));c>=8;e[n+L]=d&255,L+=k,d/=256,c-=8);for(m=m<<c|d,_+=c;_>0;e[n+L]=m&255,L+=k,m/=256,_-=8);e[n+L-k]|=E*128}});var ls=I(on=>{"use strict";t();var ta=Zi(),en=Qi(),es=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;on.Buffer=T;on.SlowBuffer=Hu;on.INSPECT_MAX_BYTES=50;var Pt=2147483647;on.kMaxLength=Pt;T.TYPED_ARRAY_SUPPORT=Bu();!T.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Bu(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(T.prototype,"parent",{enumerable:!0,get:function(){if(!!T.isBuffer(this))return this.buffer}});Object.defineProperty(T.prototype,"offset",{enumerable:!0,get:function(){if(!!T.isBuffer(this))return this.byteOffset}});function Ze(e){if(e>Pt)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,T.prototype),o}function T(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return sa(e)}return ts(e,o,n)}T.poolSize=8192;function ts(e,o,n){if(typeof e=="string")return Uu(e,o);if(ArrayBuffer.isView(e))return Wu(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Be(e,ArrayBuffer)||e&&Be(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Be(e,SharedArrayBuffer)||e&&Be(e.buffer,SharedArrayBuffer)))return aa(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return T.from(r,o,n);var c=Gu(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return T.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}T.from=function(e,o,n){return ts(e,o,n)};Object.setPrototypeOf(T.prototype,Uint8Array.prototype);Object.setPrototypeOf(T,Uint8Array);function rs(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Fu(e,o,n){return rs(e),e<=0?Ze(e):o!==void 0?typeof n=="string"?Ze(e).fill(o,n):Ze(e).fill(o):Ze(e)}T.alloc=function(e,o,n){return Fu(e,o,n)};function sa(e){return rs(e),Ze(e<0?0:ca(e)|0)}T.allocUnsafe=function(e){return sa(e)};T.allocUnsafeSlow=function(e){return sa(e)};function Uu(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!T.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=as(e,o)|0,r=Ze(n),c=r.write(e,o);return c!==n&&(r=r.slice(0,c)),r}function ra(e){for(var o=e.length<0?0:ca(e.length)|0,n=Ze(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function Wu(e){if(Be(e,Uint8Array)){var o=new Uint8Array(e);return aa(o.buffer,o.byteOffset,o.byteLength)}return ra(e)}function aa(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,T.prototype),r}function Gu(e){if(T.isBuffer(e)){var o=ca(e.length)|0,n=Ze(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||pa(e.length)?Ze(0):ra(e);if(e.type==="Buffer"&&Array.isArray(e.data))return ra(e.data)}function ca(e){if(e>=Pt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Pt.toString(16)+" bytes");return e|0}function Hu(e){return+e!=e&&(e=0),T.alloc(+e)}T.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==T.prototype};T.compare=function(o,n){if(Be(o,Uint8Array)&&(o=T.from(o,o.offset,o.byteLength)),Be(n,Uint8Array)&&(n=T.from(n,n.offset,n.byteLength)),!T.isBuffer(o)||!T.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,c=n.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==n[p]){r=o[p],c=n[p];break}return r<c?-1:c<r?1:0};T.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};T.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return T.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var c=T.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Be(m,Uint8Array))p+m.length>c.length?T.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(T.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function as(e,o){if(T.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Be(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ia(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return ds(e).length;default:if(c)return r?-1:ia(e).length;o=(""+o).toLowerCase(),c=!0}}T.byteLength=as;function Vu(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Qu(this,o,n);case"utf8":case"utf-8":return ss(this,o,n);case"ascii":return Ju(this,o,n);case"latin1":case"binary":return Zu(this,o,n);case"base64":return Xu(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return eg(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}T.prototype._isBuffer=!0;function Ro(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}T.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)Ro(this,n,n+1);return this};T.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)Ro(this,n,n+3),Ro(this,n+1,n+2);return this};T.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)Ro(this,n,n+7),Ro(this,n+1,n+6),Ro(this,n+2,n+5),Ro(this,n+3,n+4);return this};T.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ss(this,0,o):Vu.apply(this,arguments)};T.prototype.toLocaleString=T.prototype.toString;T.prototype.equals=function(o){if(!T.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:T.compare(this,o)===0};T.prototype.inspect=function(){var o="",n=on.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};es&&(T.prototype[es]=T.prototype.inspect);T.prototype.compare=function(o,n,r,c,p){if(Be(o,Uint8Array)&&(o=T.from(o,o.offset,o.byteLength)),!T.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),n<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&n>=r)return 0;if(c>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-n,l=Math.min(m,d),_=this.slice(c,p),h=o.slice(n,r),u=0;u<l;++u)if(_[u]!==h[u]){m=_[u],d=h[u];break}return m<d?-1:d<m?1:0};function is(e,o,n,r,c){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,pa(n)&&(n=c?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(c)return-1;n=e.length-1}else if(n<0)if(c)n=0;else return-1;if(typeof o=="string"&&(o=T.from(o,r)),T.isBuffer(o))return o.length===0?-1:os(e,o,n,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):os(e,[o],n,r,c);throw new TypeError("val must be string, number or Buffer")}function os(e,o,n,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(L,k){return p===1?L[k]:L.readUInt16BE(k*p)}var _;if(c){var h=-1;for(_=n;_<m;_++)if(l(e,_)===l(o,h===-1?0:_-h)){if(h===-1&&(h=_),_-h+1===d)return h*p}else h!==-1&&(_-=_-h),h=-1}else for(n+d>m&&(n=m-d),_=n;_>=0;_--){for(var u=!0,x=0;x<d;x++)if(l(e,_+x)!==l(o,x)){u=!1;break}if(u)return _}return-1}T.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};T.prototype.indexOf=function(o,n,r){return is(this,o,n,r,!0)};T.prototype.lastIndexOf=function(o,n,r){return is(this,o,n,r,!1)};function $u(e,o,n,r){n=Number(n)||0;var c=e.length-n;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(pa(d))return m;e[n+m]=d}return m}function qu(e,o,n,r){return Ct(ia(o,e.length-n),e,n,r)}function zu(e,o,n,r){return Ct(tg(o),e,n,r)}function ju(e,o,n,r){return Ct(ds(o),e,n,r)}function Ku(e,o,n,r){return Ct(rg(o,e.length-n),e,n,r)}T.prototype.write=function(o,n,r,c){if(n===void 0)c="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")c=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return $u(this,o,n,r);case"utf8":case"utf-8":return qu(this,o,n,r);case"ascii":case"latin1":case"binary":return zu(this,o,n,r);case"base64":return ju(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ku(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};T.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Xu(e,o,n){return o===0&&n===e.length?ta.fromByteArray(e):ta.fromByteArray(e.slice(o,n))}function ss(e,o,n){n=Math.min(e.length,n);for(var r=[],c=o;c<n;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=n){var l,_,h,u;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(u=(p&31)<<6|l&63,u>127&&(m=u));break;case 3:l=e[c+1],_=e[c+2],(l&192)===128&&(_&192)===128&&(u=(p&15)<<12|(l&63)<<6|_&63,u>2047&&(u<55296||u>57343)&&(m=u));break;case 4:l=e[c+1],_=e[c+2],h=e[c+3],(l&192)===128&&(_&192)===128&&(h&192)===128&&(u=(p&15)<<18|(l&63)<<12|(_&63)<<6|h&63,u>65535&&u<1114112&&(m=u))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return Yu(r)}var ns=4096;function Yu(e){var o=e.length;if(o<=ns)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=ns));return n}function Ju(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]&127);return r}function Zu(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]);return r}function Qu(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var c="",p=o;p<n;++p)c+=ag[e[p]];return c}function eg(e,o,n){for(var r=e.slice(o,n),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}T.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var c=this.subarray(o,n);return Object.setPrototypeOf(c,T.prototype),c};function ne(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}T.prototype.readUintLE=T.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return c};T.prototype.readUintBE=T.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o+--n],p=1;n>0&&(p*=256);)c+=this[o+--n]*p;return c};T.prototype.readUint8=T.prototype.readUInt8=function(o,n){return o=o>>>0,n||ne(o,1,this.length),this[o]};T.prototype.readUint16LE=T.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||ne(o,2,this.length),this[o]|this[o+1]<<8};T.prototype.readUint16BE=T.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||ne(o,2,this.length),this[o]<<8|this[o+1]};T.prototype.readUint32LE=T.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};T.prototype.readUint32BE=T.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};T.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*n)),c};T.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||ne(o,n,this.length);for(var c=n,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};T.prototype.readInt8=function(o,n){return o=o>>>0,n||ne(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};T.prototype.readInt16LE=function(o,n){o=o>>>0,n||ne(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};T.prototype.readInt16BE=function(o,n){o=o>>>0,n||ne(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};T.prototype.readInt32LE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};T.prototype.readInt32BE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};T.prototype.readFloatLE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),en.read(this,o,!0,23,4)};T.prototype.readFloatBE=function(o,n){return o=o>>>0,n||ne(o,4,this.length),en.read(this,o,!1,23,4)};T.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||ne(o,8,this.length),en.read(this,o,!0,52,8)};T.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||ne(o,8,this.length),en.read(this,o,!1,52,8)};function de(e,o,n,r,c,p){if(!T.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}T.prototype.writeUintLE=T.prototype.writeUIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;de(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};T.prototype.writeUintBE=T.prototype.writeUIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;de(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};T.prototype.writeUint8=T.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,1,255,0),this[n]=o&255,n+1};T.prototype.writeUint16LE=T.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};T.prototype.writeUint16BE=T.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};T.prototype.writeUint32LE=T.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};T.prototype.writeUint32BE=T.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};T.prototype.writeIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);de(this,o,n,r,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};T.prototype.writeIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);de(this,o,n,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};T.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};T.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};T.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};T.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};T.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||de(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function cs(e,o,n,r,c,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function ps(e,o,n,r,c){return o=+o,n=n>>>0,c||cs(e,o,n,4,34028234663852886e22,-34028234663852886e22),en.write(e,o,n,r,23,4),n+4}T.prototype.writeFloatLE=function(o,n,r){return ps(this,o,n,!0,r)};T.prototype.writeFloatBE=function(o,n,r){return ps(this,o,n,!1,r)};function ms(e,o,n,r,c){return o=+o,n=n>>>0,c||cs(e,o,n,8,17976931348623157e292,-17976931348623157e292),en.write(e,o,n,r,52,8),n+8}T.prototype.writeDoubleLE=function(o,n,r){return ms(this,o,n,!0,r)};T.prototype.writeDoubleBE=function(o,n,r){return ms(this,o,n,!1,r)};T.prototype.copy=function(o,n,r,c){if(!T.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),n>=o.length&&(n=o.length),n||(n=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-n<c-r&&(c=o.length-n+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),n),p};T.prototype.fill=function(o,n,r,c){if(typeof o=="string"){if(typeof n=="string"?(c=n,n=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!T.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=T.isBuffer(o)?o:T.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var og=/[^+/0-9A-Za-z-_]/g;function ng(e){if(e=e.split("=")[0],e=e.trim().replace(og,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ia(e,o){o=o||1/0;for(var n,r=e.length,c=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!c){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),c=n;continue}n=(c-55296<<10|n-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function tg(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function rg(e,o){for(var n,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,c=n%256,p.push(c),p.push(r);return p}function ds(e){return ta.toByteArray(ng(e))}function Ct(e,o,n,r){for(var c=0;c<r&&!(c+n>=o.length||c>=e.length);++c)o[c+n]=e[c];return c}function Be(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function pa(e){return e!==e}var ag=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,c=0;c<16;++c)o[r+c]=e[n]+e[c];return o}()});var Ts=I((ob,fs)=>{t();var $=fs.exports={},Fe,Ue;function ma(){throw new Error("setTimeout has not been defined")}function da(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Fe=setTimeout:Fe=ma}catch(e){Fe=ma}try{typeof clearTimeout=="function"?Ue=clearTimeout:Ue=da}catch(e){Ue=da}})();function _s(e){if(Fe===setTimeout)return setTimeout(e,0);if((Fe===ma||!Fe)&&setTimeout)return Fe=setTimeout,setTimeout(e,0);try{return Fe(e,0)}catch(o){try{return Fe.call(null,e,0)}catch(n){return Fe.call(this,e,0)}}}function ig(e){if(Ue===clearTimeout)return clearTimeout(e);if((Ue===da||!Ue)&&clearTimeout)return Ue=clearTimeout,clearTimeout(e);try{return Ue(e)}catch(o){try{return Ue.call(null,e)}catch(n){return Ue.call(this,e)}}}var Qe=[],nn=!1,Do,Nt=-1;function sg(){!nn||!Do||(nn=!1,Do.length?Qe=Do.concat(Qe):Nt=-1,Qe.length&&us())}function us(){if(!nn){var e=_s(sg);nn=!0;for(var o=Qe.length;o;){for(Do=Qe,Qe=[];++Nt<o;)Do&&Do[Nt].run();Nt=-1,o=Qe.length}Do=null,nn=!1,ig(e)}}$.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];Qe.push(new gs(e,o)),Qe.length===1&&!nn&&_s(us)};function gs(e,o){this.fun=e,this.array=o}gs.prototype.run=function(){this.fun.apply(null,this.array)};$.title="browser";$.browser=!0;$.env={};$.argv=[];$.version="";$.versions={};function eo(){}$.on=eo;$.addListener=eo;$.once=eo;$.off=eo;$.removeListener=eo;$.removeAllListeners=eo;$.emit=eo;$.prependListener=eo;$.prependOnceListener=eo;$.listeners=function(e){return[]};$.binding=function(e){throw new Error("process.binding is not supported")};$.cwd=function(){return"/"};$.chdir=function(e){throw new Error("process.chdir is not supported")};$.umask=function(){return 0}});var a,s,cg,i,t=b(()=>{a=w(ls()),s=w(Ts()),cg=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=cg});var hs=b(()=>{"use strict";t()});var We=b(()=>{"use strict";t()});var xs=b(()=>{"use strict";t()});var la,ys=b(()=>{"use strict";t();la=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(la||{})});var Ss=b(()=>{"use strict";t()});var _a=b(()=>{"use strict";t()});var bs=b(()=>{"use strict";t()});var ua=b(()=>{"use strict";t()});var ws=b(()=>{"use strict";t()});var vs=b(()=>{"use strict";t()});var Ae,tn,go=b(()=>{"use strict";t();Ae=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),tn=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var q,Is,_b,As,ub,U=b(()=>{"use strict";t();go();q=(x=>(x.ledger="ledger",x.walletconnect="walletconnect",x.walletconnectv2="walletconnectv2",x.wallet="wallet",x.crossWindow="crossWindow",x.iframe="iframe",x.extension="extension",x.passkey="passkey",x.metamask="metamask",x.opera="opera",x.extra="extra",x.none="",x))(q||{}),Is=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(Is||{}),_b=f(f({},tn.WindowProviderRequestEnums),Is),As=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(As||{}),ub=f(f({},tn.WindowProviderResponseEnums),As)});var ks=b(()=>{"use strict";t()});var Ls=b(()=>{"use strict";t()});var le=b(()=>{"use strict";t()});var Es=b(()=>{"use strict";t()});var Ps=b(()=>{"use strict";t()});var Cs=b(()=>{"use strict";t()});var F=b(()=>{"use strict";t();ua();ws();vs();U();ks();Ls();le();Es();Ps();Cs()});var oo,Rt,Cb,Dt,Nb,Mt,Rb,Db,pg,Ot,fo=b(()=>{"use strict";t();F();oo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Rt,egldLabel:Cb}=oo["devnet"],{chainId:Dt,egldLabel:Nb}=oo["testnet"],{chainId:Mt,egldLabel:Rb}=oo["mainnet"],Db={["devnet"]:Rt,["testnet"]:Dt,["mainnet"]:Mt},pg={[Rt]:"devnet",[Dt]:"testnet",[Mt]:"mainnet"},Ot=3e3});var rn=b(()=>{"use strict";t()});var Ge,Ns=b(()=>{"use strict";t();Ge=require("@multiversx/sdk-web-wallet-provider")});var ke,jn=b(()=>{"use strict";t();ke=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Rs,Ds,ga,Wb,Gb,fa=b(()=>{"use strict";t();jn();ga=String((Ds=(Rs=ke.safeWindow)==null?void 0:Rs.navigator)==null?void 0:Ds.userAgent),Wb=/^((?!chrome|android).)*safari/i.test(ga),Gb=/firefox/i.test(ga)&&/windows/i.test(ga)});var Bt,Ft,Ms,Os,Kn,Ta,Ut,Bs,an,Wt,C=b(()=>{"use strict";t();hs();We();xs();ys();Ss();_a();bs();fo();rn();Ns();fa();Bt=5e4,Ft=1e9,Ms=1,Os=1,Kn="signSession",Ta="sdk-dapp-version",Ut="logout",Bs="login",an="0",Wt="-"});var sn,Gt=b(()=>{"use strict";t();sn=()=>Date.now()/1e3});var Fs=b(()=>{"use strict";t()});var Us=b(()=>{"use strict";t()});var ha=b(()=>{"use strict";t();Gt();Fs();Us()});var xa={};Je(xa,{clear:()=>_g,getItem:()=>dg,localStorageKeys:()=>ge,removeItem:()=>lg,setItem:()=>mg});var ge,Ht,mg,dg,lg,_g,Mo=b(()=>{"use strict";t();ha();ge={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Ht=typeof localStorage!="undefined",mg=({key:e,data:o,expires:n})=>{!Ht||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},dg=e=>{if(!Ht)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:sn()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},lg=e=>{!Ht||localStorage.removeItem(String(e))},_g=()=>{!Ht||localStorage.clear()}});var ya={};Je(ya,{clear:()=>Vs,getItem:()=>Gs,removeItem:()=>Hs,setItem:()=>Ws,storage:()=>ug});var Ws,Gs,Hs,Vs,ug,$s=b(()=>{"use strict";t();Ws=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Gs=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},Hs=e=>sessionStorage.removeItem(String(e)),Vs=()=>sessionStorage.clear(),ug={setItem:Ws,getItem:Gs,removeItem:Hs,clear:Vs}});var He,cn=b(()=>{"use strict";t();Mo();$s();He={session:ya,local:xa}});var Sa,G,re,H=b(()=>{"use strict";t();Sa=require("@reduxjs/toolkit");C();G=(0,Sa.createAction)(Ut),re=(0,Sa.createAction)(Bs,e=>({payload:e}))});var wa,qs,zs,Vt,ba,js,To,$t,qt,h0,va,gg,x0,pn,Ks,Xs,Ys,zt,jt=b(()=>{"use strict";t();wa=require("@multiversx/sdk-core"),qs=require("@reduxjs/toolkit"),zs=require("redux-persist");C();cn();Mo();H();Vt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:an},ba={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Vt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},js=(0,qs.createSlice)({name:"accountInfoSlice",initialState:ba,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new wa.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:Vt},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(G,()=>(He.local.removeItem(ge.loginExpiresAt),ba)),e.addCase(re,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new wa.Address(r).hex()}),e.addCase(zs.REHYDRATE,(o,n)=>{var _;if(!((_=n.payload)!=null&&_.account))return;let{account:r}=n.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:ba.accounts,o.publicKey=d})}}),{setAccount:To,setAddress:$t,setAccountNonce:qt,setAccountShard:h0,setLedgerAccount:va,updateLedgerAccount:gg,setWalletConnectAccount:x0,setIsAccountLoading:pn,setAccountLoadingError:Ks,setWebsocketEvent:Xs,setWebsocketBatchEvent:Ys}=js.actions,zt=js.reducer});function Xn(){return new Date().setHours(new Date().getHours()+24)}function Yn(e){He.local.setItem({key:ge.loginExpiresAt,data:e,expires:e})}var Ia=b(()=>{"use strict";t();cn();Mo()});var Zs,Js,Qs,E0,ec,fg,ho,P0,Kt,oc,nc,Aa,tc,Xt,Jn=b(()=>{"use strict";t();Zs=require("@reduxjs/toolkit");Ia();U();H();Js={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Qs=(0,Zs.createSlice)({name:"loginInfoSlice",initialState:Js,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(G,()=>Js),e.addCase(re,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,Yn(Xn())})}}),{setLoginMethod:E0,setWalletConnectLogin:ec,setLedgerLogin:fg,setTokenLogin:ho,setTokenLoginSignature:P0,setWalletLogin:Kt,invalidateLoginSession:oc,setLogoutRoute:nc,setIsWalletConnectV2Initialized:Aa,setWebviewLogin:tc}=Qs.actions,Xt=Qs.reducer});var ac,rc,ic,sc,Tg,D0,hg,Yt,Jt=b(()=>{"use strict";t();ac=require("@reduxjs/toolkit");H();rc={},ic=(0,ac.createSlice)({name:"modalsSlice",initialState:rc,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(G,()=>rc)}}),{setTxSubmittedModal:sc,setNotificationModal:Tg,clearTxSubmittedModal:D0,clearNotificationModal:hg}=ic.actions,Yt=ic.reducer});var no,mn=b(()=>{"use strict";t();no=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var W,ae=b(()=>{"use strict";t();mn();W=()=>{if(!no())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:c,search:p}}=window;return{pathname:o,hash:n,origin:r,href:c,search:p}}});var dn,cc=b(()=>{"use strict";t();ae();dn=(e="")=>{let o=W(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var pc=b(()=>{"use strict";t();se()});var mc,dc=b(()=>{"use strict";t();jn();mc=e=>{if(!ke.safeWindow.location)return;if(!new URL(ke.safeWindow.location.href).protocol.startsWith("http"))return ke.safeWindow.location.reload();ke.safeWindow.location.assign(e)}});var se=b(()=>{"use strict";t();cc();pc();ae();dc()});var lc,_c,Oo,ln=b(()=>{"use strict";t();se();lc=!1,_c=(e=!0)=>{lc=e},Oo=({timeout:e=0,url:o})=>{lc||setTimeout(()=>{if(!!window)return mc(o)},e)}});function xo({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),c=typeof o=="function";if(r&&e!=null){if(c)return o(e,n);Oo({url:e,timeout:xg})}}var xg,uc=b(()=>{"use strict";t();ln();xg=200});function gc(e){return e[Math.floor(Math.random()*e.length)]}var fc=b(()=>{"use strict";t()});var ka=b(()=>{"use strict";t();_a()});var to=b(()=>{"use strict";t();uc();fc();ka()});var Tc,hc,xc,Zn,Sg,yc,La,Sc,bg,Zt,Qn=b(()=>{"use strict";t();Tc=require("@reduxjs/toolkit"),hc=w(require("lodash.omit")),xc=require("redux-persist");rn();H();to();Zn={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Sg={network:Zn},yc=(0,Tc.createSlice)({name:"appConfig",initialState:Sg,reducers:{initializeNetworkConfig:(e,o)=>{let n=gc(o.payload.walletConnectV2RelayAddresses),r=(0,hc.default)(o.payload,"walletConnectV2RelayAddresses");e.network=A(f(f({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=f(f({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(G,o=>{o.network.customWalletAddress=void 0}),e.addCase(xc.REHYDRATE,(o,n)=>{var c,p;if(!((p=(c=n.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:La,updateNetworkConfig:Sc,setCustomWalletAddress:bg}=yc.actions,Zt=yc.reducer});var bc,Ea,wc,Tw,hw,xw,Qt,er=b(()=>{"use strict";t();bc=require("@reduxjs/toolkit");F();H();Ea={isSigning:!1,signedSessions:{}},wc=(0,bc.createSlice)({name:"signedMessageInfoSliceState",initialState:Ea,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[n]=f(f({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>f(f({},e),o.payload),clearSignedMessageInfo:()=>Ea},extraReducers:e=>{e.addCase(G,()=>Ea)}}),{setSignSession:Tw,clearSignedMessageInfo:hw,setSignSessionState:xw}=wc.actions,Qt=wc.reducer});var Ic,Ac,vc,kc,Pa,wg,Aw,vg,or,nr=b(()=>{"use strict";t();Ic=require("@reduxjs/toolkit"),Ac=require("redux-persist");F();Gt();H();vc={customToasts:[],transactionToasts:[]},kc=(0,Ic.createSlice)({name:"toastsSlice",initialState:vc,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===n);if(r!==-1){e.customToasts[r]=A(f(f({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(A(f({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:sn(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(G,()=>vc),e.addCase(Ac.REHYDRATE,(o,n)=>{var c,p;let r=(p=(c=n.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Pa,removeCustomToast:wg,addTransactionToast:Aw,removeTransactionToast:vg}=kc.actions,or=kc.reducer});var Lc,Na,Ra,Da,Ig,Ca,Ec,Pw,Ag,Ma,tr,rr=b(()=>{"use strict";t();Lc=require("@reduxjs/toolkit");H();Na="Transaction failed",Ra="Transaction successful",Da="Processing transaction",Ig="Transaction submitted",Ca={},Ec=(0,Lc.createSlice)({name:"transactionsInfo",initialState:Ca,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Na,successMessage:(r==null?void 0:r.successMessage)||Ra,processingMessage:(r==null?void 0:r.processingMessage)||Da,submittedMessage:(r==null?void 0:r.submittedMessage)||Ig,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ca},extraReducers:e=>{e.addCase(G,()=>Ca)}}),{clearTransactionsInfo:Pw,setTransactionsDisplayInfo:Ag,clearTransactionsInfoForSessionId:Ma}=Ec.actions,tr=Ec.reducer});function ro(e){return e!=null&&(Og(e)||Gg(e))}function Bo(e){return e!=null&&(Bg(e)||Hg(e))}function Fo(e){return e!=null&&(Fg(e)||Vg(e))}function Pc(e){return e!=null&&(Ug(e)||$g(e))}function Oa(e){return e!=null&&Wg(e)}function Og(e){return e!=null&&kg.includes(e)}function Bg(e){return e!=null&&Lg.includes(e)}function Fg(e){return e!=null&&Eg.includes(e)}function Ug(e){return e!=null&&Pg.includes(e)}function Wg(e){return e!=null&&Cg.includes(e)}function Gg(e){return e!=null&&Ng.includes(e)}function Hg(e){return e!=null&&Rg.includes(e)}function Vg(e){return e!=null&&Dg.includes(e)}function $g(e){return e!=null&&Mg.includes(e)}var kg,Lg,Eg,Pg,Cg,Ng,Rg,Dg,Mg,_n=b(()=>{"use strict";t();U();kg=["sent"],Lg=["success"],Eg=["fail","cancelled","timedOut"],Pg=["invalid"],Cg=["timedOut"],Ng=["pending"],Rg=["success"],Dg=["fail","invalid"],Mg=["not executed"]});var Cc,Nc,et,qg,Rc,$e,qe,zg,Uo,jg,Kg,Uw,Xg,ot,Ba,Ww,ar,ir=b(()=>{"use strict";t();Cc=require("@reduxjs/toolkit"),Nc=require("redux-persist");U();_n();H();et={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},qg={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Rc=(0,Cc.createSlice)({name:"transactionsSlice",initialState:et,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:n,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=f(f(f({},qg),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:f(f({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===n&&(e.transactionsToSign=et.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=f(f({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,c!=null&&(e.signedTransactions[n].errorMessage=c),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,h,u,x,L,k,E,V;let{sessionId:n,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(h=(_=e.signedTransactions)==null?void 0:_[n])==null?void 0:h.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(D=>D.hash===p?A(f(f({},m!=null?m:{}),D),{status:r,errorMessage:c,inTransit:d}):D);let M=(x=(u=e.signedTransactions[n])==null?void 0:u.transactions)==null?void 0:x.every(D=>Bo(D.status)),P=(k=(L=e.signedTransactions[n])==null?void 0:L.transactions)==null?void 0:k.some(D=>Fo(D.status)),j=(V=(E=e.signedTransactions[n])==null?void 0:E.transactions)==null?void 0:V.every(D=>Pc(D.status));M&&(e.signedTransactions[n].status="success"),P&&(e.signedTransactions[n].status="fail"),j&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=et.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=et.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=f(f({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(G,()=>et),e.addCase(Nc.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=n.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let h=new Date(l),u=new Date;return u.setHours(u.getHours()+5),u-h>0||(d[l]=_),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:$e,updateSignedTransactions:qe,setTransactionsToSign:zg,clearAllTransactionsToSign:Uo,clearAllSignedTransactions:jg,clearSignedTransaction:Kg,clearTransactionToSign:Uw,setSignTransactionsError:Xg,setSignTransactionsCancelMessage:ot,moveTransactionsToSignedState:Ba,updateSignedTransactionsCustomTransactionInformation:Ww}=Rc.actions,ar=Rc.reducer});var Dc,Fa,Mc,Oc,Bc,Fc,$w,sr,cr=b(()=>{"use strict";t();Dc=require("@reduxjs/toolkit");H();Fa={},Mc=(0,Dc.createSlice)({name:"batchTransactionsSlice",initialState:Fa,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Fa},extraReducers:e=>{e.addCase(G,()=>Fa)}}),{setBatchTransactions:Oc,updateBatchTransactions:Bc,clearBatchTransactions:Fc,clearAllBatchTransactions:$w}=Mc.actions,sr=Mc.reducer});var Wc,Uc,Gc,Hc,Vc,Ua=b(()=>{"use strict";t();Wc=require("@reduxjs/toolkit");H();Uc={},Gc=(0,Wc.createSlice)({name:"dappConfigSlice",initialState:Uc,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(G,()=>Uc)}}),{setDappConfig:Hc}=Gc.actions,Vc=Gc.reducer});var N=b(()=>{"use strict";t();jt();Jn();Jt();Qn();er();nr();rr();ir();cr();Ua()});var Ha=b(()=>{"use strict";t()});var gp,af,sf,Ho,fr=b(()=>{"use strict";t();gp=require("@reduxjs/toolkit");Ha();jt();cr();Ua();Jn();Jt();Qn();er();nr();rr();ir();af={["account"]:zt,["dappConfig"]:Vc,["loginInfo"]:Xt,["modals"]:Yt,["networkConfig"]:Zt,["signedMessageInfo"]:Qt,["toasts"]:or,["transactionsInfo"]:tr,["transactions"]:ar,["batchTransactions"]:sr},sf=(e={})=>(0,gp.combineReducers)(f(f({},af),e)),Ho=sf});var xp={};Je(xp,{default:()=>wf,sessionStorageReducers:()=>Va});function so(e,o=[]){return{key:e,version:1,storage:Tp.default,blacklist:o}}var _e,fp,Tp,cf,at,pf,mf,df,lf,_f,uf,gf,ff,Tf,hf,hp,xf,Va,yf,Sf,bf,wf,yp=b(()=>{"use strict";t();_e=require("redux-persist"),fp=w(require("redux-persist/lib/storage")),Tp=w(require("redux-persist/lib/storage/session"));fr();N();jt();cr();Jn();Jt();Qn();er();nr();rr();ir();Ha();cf={persistReducersStorageType:"localStorage"},at={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},pf=so(at["account"]),mf=so(at["loginInfo"]),df=so(at["modals"]),lf=so(at["networkConfig"]),_f={2:e=>A(f({},e),{networkConfig:Zn})};uf=so("sdk-dapp-transactionsInfo"),gf=so("sdk-dapp-transactions",["transactionsToSign"]),ff=so("sdk-dapp-batchTransactions",["batchTransactions"]),Tf=so("sdk-dapp-toasts"),hf=so("sdk-dapp-signedMessageInfo"),hp={key:"sdk-dapp-store",version:2,storage:fp.default,whitelist:Object.keys(at),migrate:(0,_e.createMigrate)(_f,{debug:!1})},xf=A(f({},hp),{whitelist:[]}),Va={["toasts"]:(0,_e.persistReducer)(Tf,or),["transactions"]:(0,_e.persistReducer)(gf,ar),["transactionsInfo"]:(0,_e.persistReducer)(uf,tr),["batchTransactions"]:(0,_e.persistReducer)(ff,sr),["signedMessageInfo"]:(0,_e.persistReducer)(hf,Qt)},yf=A(f({},Va),{["account"]:(0,_e.persistReducer)(pf,zt),["loginInfo"]:(0,_e.persistReducer)(mf,Xt),["modals"]:(0,_e.persistReducer)(df,Yt),["networkConfig"]:(0,_e.persistReducer)(lf,Zt)}),Sf=cf.persistReducersStorageType==="localStorage",bf=Sf?(0,_e.persistReducer)(hp,Ho(Va)):(0,_e.persistReducer)(xf,Ho(yf)),wf=bf});var Sp={};Je(Sp,{default:()=>vf});var vf,bp=b(()=>{"use strict";t();fr();vf=Ho()});var wp={};Je(wp,{default:()=>Af});var be,If,Af,vp=b(()=>{"use strict";t();be=require("redux-persist"),If=[be.FLUSH,be.REHYDRATE,be.PAUSE,be.PERSIST,be.PURGE,be.REGISTER],Af=If});var kp={};Je(kp,{default:()=>Ap});function Ap(e){return(0,Ip.persistStore)(e)}var Ip,Lp=b(()=>{"use strict";t();Ip=require("redux-persist")});var vm=I((B2,wm)=>{t();var OT=typeof i=="object"&&i&&i.Object===Object&&i;wm.exports=OT});var gt=I((F2,Im)=>{t();var BT=vm(),FT=typeof self=="object"&&self&&self.Object===Object&&self,UT=BT||FT||Function("return this")();Im.exports=UT});var li=I((U2,Am)=>{t();var WT=gt(),GT=WT.Symbol;Am.exports=GT});var Pm=I((W2,Em)=>{t();var km=li(),Lm=Object.prototype,HT=Lm.hasOwnProperty,VT=Lm.toString,ft=km?km.toStringTag:void 0;function $T(e){var o=HT.call(e,ft),n=e[ft];try{e[ft]=void 0;var r=!0}catch(p){}var c=VT.call(e);return r&&(o?e[ft]=n:delete e[ft]),c}Em.exports=$T});var Nm=I((G2,Cm)=>{t();var qT=Object.prototype,zT=qT.toString;function jT(e){return zT.call(e)}Cm.exports=jT});var _i=I((H2,Mm)=>{t();var Rm=li(),KT=Pm(),XT=Nm(),YT="[object Null]",JT="[object Undefined]",Dm=Rm?Rm.toStringTag:void 0;function ZT(e){return e==null?e===void 0?JT:YT:Dm&&Dm in Object(e)?KT(e):XT(e)}Mm.exports=ZT});var Bm=I((V2,Om)=>{t();var QT=Array.isArray;Om.exports=QT});var Um=I(($2,Fm)=>{t();function eh(e){return e!=null&&typeof e=="object"}Fm.exports=eh});var Gm=I((q2,Wm)=>{t();var oh=_i(),nh=Bm(),th=Um(),rh="[object String]";function ah(e){return typeof e=="string"||!nh(e)&&th(e)&&oh(e)==rh}Wm.exports=ah});var Dr=I((yM,zm)=>{t();function ch(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}zm.exports=ch});var Md=I((UU,Dd)=>{t();var Ch=_i(),Nh=Dr(),Rh="[object AsyncFunction]",Dh="[object Function]",Mh="[object GeneratorFunction]",Oh="[object Proxy]";function Bh(e){if(!Nh(e))return!1;var o=Ch(e);return o==Dh||o==Mh||o==Rh||o==Oh}Dd.exports=Bh});var Bd=I((WU,Od)=>{t();var Fh=gt(),Uh=Fh["__core-js_shared__"];Od.exports=Uh});var Wd=I((GU,Ud)=>{t();var Ei=Bd(),Fd=function(){var e=/[^.]+$/.exec(Ei&&Ei.keys&&Ei.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Wh(e){return!!Fd&&Fd in e}Ud.exports=Wh});var Hd=I((HU,Gd)=>{t();var Gh=Function.prototype,Hh=Gh.toString;function Vh(e){if(e!=null){try{return Hh.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Gd.exports=Vh});var $d=I((VU,Vd)=>{t();var $h=Md(),qh=Wd(),zh=Dr(),jh=Hd(),Kh=/[\\^$.*+?()[\]{}|]/g,Xh=/^\[object .+?Constructor\]$/,Yh=Function.prototype,Jh=Object.prototype,Zh=Yh.toString,Qh=Jh.hasOwnProperty,ex=RegExp("^"+Zh.call(Qh).replace(Kh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ox(e){if(!zh(e)||qh(e))return!1;var o=$h(e)?ex:Xh;return o.test(jh(e))}Vd.exports=ox});var zd=I(($U,qd)=>{t();function nx(e,o){return e==null?void 0:e[o]}qd.exports=nx});var Fr=I((qU,jd)=>{t();var tx=$d(),rx=zd();function ax(e,o){var n=rx(e,o);return tx(n)?n:void 0}jd.exports=ax});var St=I((zU,Kd)=>{t();var ix=Fr(),sx=ix(Object,"create");Kd.exports=sx});var Jd=I((jU,Yd)=>{t();var Xd=St();function cx(){this.__data__=Xd?Xd(null):{},this.size=0}Yd.exports=cx});var Qd=I((KU,Zd)=>{t();function px(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Zd.exports=px});var ol=I((XU,el)=>{t();var mx=St(),dx="__lodash_hash_undefined__",lx=Object.prototype,_x=lx.hasOwnProperty;function ux(e){var o=this.__data__;if(mx){var n=o[e];return n===dx?void 0:n}return _x.call(o,e)?o[e]:void 0}el.exports=ux});var tl=I((YU,nl)=>{t();var gx=St(),fx=Object.prototype,Tx=fx.hasOwnProperty;function hx(e){var o=this.__data__;return gx?o[e]!==void 0:Tx.call(o,e)}nl.exports=hx});var al=I((JU,rl)=>{t();var xx=St(),yx="__lodash_hash_undefined__";function Sx(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=xx&&o===void 0?yx:o,this}rl.exports=Sx});var sl=I((ZU,il)=>{t();var bx=Jd(),wx=Qd(),vx=ol(),Ix=tl(),Ax=al();function Pn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Pn.prototype.clear=bx;Pn.prototype.delete=wx;Pn.prototype.get=vx;Pn.prototype.has=Ix;Pn.prototype.set=Ax;il.exports=Pn});var pl=I((QU,cl)=>{t();function kx(){this.__data__=[],this.size=0}cl.exports=kx});var dl=I((eW,ml)=>{t();function Lx(e,o){return e===o||e!==e&&o!==o}ml.exports=Lx});var bt=I((oW,ll)=>{t();var Ex=dl();function Px(e,o){for(var n=e.length;n--;)if(Ex(e[n][0],o))return n;return-1}ll.exports=Px});var ul=I((nW,_l)=>{t();var Cx=bt(),Nx=Array.prototype,Rx=Nx.splice;function Dx(e){var o=this.__data__,n=Cx(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():Rx.call(o,n,1),--this.size,!0}_l.exports=Dx});var fl=I((tW,gl)=>{t();var Mx=bt();function Ox(e){var o=this.__data__,n=Mx(o,e);return n<0?void 0:o[n][1]}gl.exports=Ox});var hl=I((rW,Tl)=>{t();var Bx=bt();function Fx(e){return Bx(this.__data__,e)>-1}Tl.exports=Fx});var yl=I((aW,xl)=>{t();var Ux=bt();function Wx(e,o){var n=this.__data__,r=Ux(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}xl.exports=Wx});var bl=I((iW,Sl)=>{t();var Gx=pl(),Hx=ul(),Vx=fl(),$x=hl(),qx=yl();function Cn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Cn.prototype.clear=Gx;Cn.prototype.delete=Hx;Cn.prototype.get=Vx;Cn.prototype.has=$x;Cn.prototype.set=qx;Sl.exports=Cn});var vl=I((sW,wl)=>{t();var zx=Fr(),jx=gt(),Kx=zx(jx,"Map");wl.exports=Kx});var kl=I((cW,Al)=>{t();var Il=sl(),Xx=bl(),Yx=vl();function Jx(){this.size=0,this.__data__={hash:new Il,map:new(Yx||Xx),string:new Il}}Al.exports=Jx});var El=I((pW,Ll)=>{t();function Zx(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Ll.exports=Zx});var wt=I((mW,Pl)=>{t();var Qx=El();function ey(e,o){var n=e.__data__;return Qx(o)?n[typeof o=="string"?"string":"hash"]:n.map}Pl.exports=ey});var Nl=I((dW,Cl)=>{t();var oy=wt();function ny(e){var o=oy(this,e).delete(e);return this.size-=o?1:0,o}Cl.exports=ny});var Dl=I((lW,Rl)=>{t();var ty=wt();function ry(e){return ty(this,e).get(e)}Rl.exports=ry});var Ol=I((_W,Ml)=>{t();var ay=wt();function iy(e){return ay(this,e).has(e)}Ml.exports=iy});var Fl=I((uW,Bl)=>{t();var sy=wt();function cy(e,o){var n=sy(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}Bl.exports=cy});var Wl=I((gW,Ul)=>{t();var py=kl(),my=Nl(),dy=Dl(),ly=Ol(),_y=Fl();function Nn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Nn.prototype.clear=py;Nn.prototype.delete=my;Nn.prototype.get=dy;Nn.prototype.has=ly;Nn.prototype.set=_y;Ul.exports=Nn});var Hl=I((fW,Gl)=>{t();var uy="__lodash_hash_undefined__";function gy(e){return this.__data__.set(e,uy),this}Gl.exports=gy});var $l=I((TW,Vl)=>{t();function fy(e){return this.__data__.has(e)}Vl.exports=fy});var zl=I((hW,ql)=>{t();var Ty=Wl(),hy=Hl(),xy=$l();function Ur(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new Ty;++o<n;)this.add(e[o])}Ur.prototype.add=Ur.prototype.push=hy;Ur.prototype.has=xy;ql.exports=Ur});var Kl=I((xW,jl)=>{t();function yy(e,o,n,r){for(var c=e.length,p=n+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}jl.exports=yy});var Yl=I((yW,Xl)=>{t();function Sy(e){return e!==e}Xl.exports=Sy});var Zl=I((SW,Jl)=>{t();function by(e,o,n){for(var r=n-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Jl.exports=by});var e_=I((bW,Ql)=>{t();var wy=Kl(),vy=Yl(),Iy=Zl();function Ay(e,o,n){return o===o?Iy(e,o,n):wy(e,vy,n)}Ql.exports=Ay});var n_=I((wW,o_)=>{t();var ky=e_();function Ly(e,o){var n=e==null?0:e.length;return!!n&&ky(e,o,0)>-1}o_.exports=Ly});var r_=I((vW,t_)=>{t();function Ey(e,o,n){for(var r=-1,c=e==null?0:e.length;++r<c;)if(n(o,e[r]))return!0;return!1}t_.exports=Ey});var i_=I((IW,a_)=>{t();function Py(e,o){return e.has(o)}a_.exports=Py});var c_=I((AW,s_)=>{t();var Cy=Fr(),Ny=gt(),Ry=Cy(Ny,"Set");s_.exports=Ry});var m_=I((kW,p_)=>{t();function Dy(){}p_.exports=Dy});var Pi=I((LW,d_)=>{t();function My(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}d_.exports=My});var __=I((EW,l_)=>{t();var Ci=c_(),Oy=m_(),By=Pi(),Fy=1/0,Uy=Ci&&1/By(new Ci([,-0]))[1]==Fy?function(e){return new Ci(e)}:Oy;l_.exports=Uy});var g_=I((PW,u_)=>{t();var Wy=zl(),Gy=n_(),Hy=r_(),Vy=i_(),$y=__(),qy=Pi(),zy=200;function jy(e,o,n){var r=-1,c=Gy,p=e.length,m=!0,d=[],l=d;if(n)m=!1,c=Hy;else if(p>=zy){var _=o?null:$y(e);if(_)return qy(_);m=!1,c=Vy,l=new Wy}else l=o?[]:d;e:for(;++r<p;){var h=e[r],u=o?o(h):h;if(h=n||h!==0?h:0,m&&u===u){for(var x=l.length;x--;)if(l[x]===u)continue e;o&&l.push(u),d.push(h)}else c(l,u,n)||(l!==d&&l.push(u),d.push(h))}return d}u_.exports=jy});var T_=I((CW,f_)=>{t();var Ky=g_();function Xy(e){return e&&e.length?Ky(e):[]}f_.exports=Xy});var Ri={};Je(Ri,{css:()=>I_,default:()=>xS});var I_,xS,Di=b(()=>{"use strict";t();I_=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(I_));xS={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var _o={};Je(_o,{css:()=>L_,default:()=>bS});var L_,bS,uo=b(()=>{"use strict";t();L_=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(L_));bS={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var YS={};Je(YS,{DappProvider:()=>XS});module.exports=Me(YS);t();var Gn=w(require("react")),bu=require("react-redux"),wu=require("redux-persist/integration/react");t();var vo=require("react");t();t();t();var Jp=w(require("axios"));t();t();N();t();var $c=w(require("lodash.isequal")),pr=require("reselect"),v=(0,pr.createSelectorCreator)(pr.defaultMemoize,$c.default);var ze=e=>e.account,Le=v(ze,e=>e.address),ao=v(ze,Le,(e,o)=>o in e.accounts?e.accounts[o]:Vt),qc=v(ze,ao,(e,o)=>{let c=e,{accounts:n}=c,r=De(c,["accounts"]);return A(f({},r),{address:o.address,account:o})}),pv=v(ao,e=>e.balance),zc=v(ao,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),mv=v(ze,e=>e.shard),Wa=v(ze,e=>e.ledgerAccount),dv=v(ze,e=>e.walletConnectAccount),lv=v(ze,e=>e.isAccountLoading),_v=v(ze,e=>e.accountLoadingError),jc=v(ze,e=>e.websocketEvent),Kc=v(ze,e=>e.websocketBatchEvent);t();var Xc=e=>e.dappConfig,Yc=v(Xc,e=>e.shouldUseWebViewProvider);t();var X=e=>e.loginInfo,Jc=v(X,e=>e.loginMethod),io=v(X,Le,(e,o)=>Boolean(o)),Zc=v(X,e=>e.walletConnectLogin),mr=v(X,e=>e.ledgerLogin),dr=v(X,e=>e.walletLogin),Qc=v(X,e=>e.isLoginSessionInvalid),un=v(X,e=>e.tokenLogin),yo=v(X,e=>e.logoutRoute),Yg=v(X,e=>e.isWalletConnectV2Initialized);t();var ep=e=>e.modals,Sv=v(ep,e=>e.txSubmittedModal),Jg=v(ep,e=>e.notificationModal);t();var Ee=e=>e.networkConfig,Wo=v(Ee,e=>e.network.chainId),op=v(Ee,e=>e.network.roundDuration),vv=v(Ee,e=>e.network.walletConnectBridgeAddress),np=v(Ee,e=>e.network.walletConnectV2RelayAddress),tp=v(Ee,e=>e.network.walletConnectV2ProjectId),rp=v(Ee,e=>e.network.walletConnectV2Options),ap=v(Ee,e=>e.network.walletConnectDeepLink),Y=v(Ee,e=>e.network),nt=v(Y,e=>e.apiAddress),ip=v(Y,e=>e.explorerAddress),lr=v(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Zg=v(Y,e=>e.xAliasAddress),sp=v(Y,e=>e.egldLabel);t();var _r=e=>e.signedMessageInfo,kv=v(_r,e=>e.isSigning),Lv=v(_r,e=>e.errorMessage),Ev=v(_r,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),Pv=v(_r,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var cp=e=>e.toasts,Qg=v(cp,e=>e.customToasts),pp=v(cp,e=>e.transactionToasts);t();N();var mp={errorMessage:Na,successMessage:Ra,processingMessage:Da},dp=e=>e.transactionsInfo,ef=v(dp,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||mp);t();t();var je=require("@multiversx/sdk-core");C();t();var Ga=require("@multiversx/sdk-core/out");t();t();function tt(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function Go(e){return tt(e)?atob(e):e}t();t();t();t();var lp=e=>{let o=e!=null?e:"";return tt(o)?Ga.TransactionPayload.fromEncoded(o):new Ga.TransactionPayload(o)};t();C();var rt=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(la).some(n=>e.startsWith(n)):!1;function gn(e){var r,c,p;let o=f({},e);rt({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new je.Transaction(f(f(A(f(A(f({value:o.value.valueOf(),data:lp(o.data),nonce:o.nonce.valueOf(),receiver:new je.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new je.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Bt,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Ft,chainID:o.chainID.valueOf(),version:new je.TransactionVersion((p=o.version)!=null?p:Ms)}),o.options?{options:new je.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new je.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();C();t();t();var $a=require("@reduxjs/toolkit"),Np=require("react-redux/lib/utils/Subscription");N();t();var _p=w(require("lodash.throttle"));C();N();Ia();cn();Mo();var nf=[Ut],ur=!1,tf=(0,_p.default)(()=>{Yn(Xn())},5e3),up=e=>o=>n=>{if(nf.includes(n.type))return o(n);let r=e.getState(),c=He.local.getItem(ge.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(c==null)return Yn(Xn());let m=Date.now();return c-m<0&&!ur?setTimeout(()=>{ur=!0,e.dispatch(oc())},1e3):(ur&&(ur=!1),tf()),o(n)};t();t();function gr(){return typeof sessionStorage!="undefined"}var Ep=gr()?(yp(),Me(xp)).default:(bp(),Me(Sp)).default,Pp=gr()?(vp(),Me(wp)).default:[],Cp=gr()?(Lp(),Me(kp)).default:e=>e;fr();var S=(0,$a.configureStore)({reducer:Ep,middleware:e=>e({serializableCheck:{ignoredActions:[...Pp,qt.type,To.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(up)}),Rp=(0,Np.createSubscription)(S),Dp=Cp(S),$I=(0,$a.configureStore)({reducer:Ho});t();t();var Lf=require("@multiversx/sdk-core/out");t();C();t();var it=require("@multiversx/sdk-core");F();t();var Mp=require("@multiversx/sdk-core");function Ef(e){try{let o=new Mp.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function fn(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Ef(e)}var Pf=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function qa(e,o,n=""){if(!fn(e))return!1;if(new it.Address(e).isContractAddress())return!0;let p=Op({receiver:e,data:n});return p?new it.Address(p).isContractAddress()||Rf(e,o,n):!1}var Cf=e=>e.toLowerCase().match(/[0-9a-f]/g),Nf=e=>e.length%2===0;function Rf(e,o,n){let r=n==null?void 0:n.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=Pf.includes(c),l=p.every(_=>Cf(_)&&Nf(_));return m&&d&&l}function Op({receiver:e,data:o}){try{if(!o)return e;let n=tt(o)?it.TransactionPayload.fromEncoded(o).toString():o,r=Df(n),c=n.split("@");return r>-1?c[r]:e}catch(n){console.log(n);return}}function Df(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}t();t();t();var Mf=require("@multiversx/sdk-core"),Of=w(require("bignumber.js"));U();t();t();t();var Tn="accounts";var za="blocks";var ja="dapp/config";var Ka="network/config";var Tr="batch",hn="transactions";t();t();t();t();le();t();t();le();t();t();t();var Hf=w(require("bignumber.js"));C();t();var Gf=require("@multiversx/sdk-core"),Xa=w(require("bignumber.js"));C();t();var Wp=w(require("bignumber.js")),xr=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let r=new Wp.default(n),c=o?0:-1;return r.toString(10)===n&&r.comparedTo(0)>=c};t();Xa.default.config({ROUNDING_MODE:Xa.default.ROUND_FLOOR});t();t();t();C();t();t();t();t();C();t();C();t();var Vf=require("@multiversx/sdk-core");C();t();var ct=require("@multiversx/sdk-core"),zf=w(require("bignumber.js"));C();t();t();var $f=w(require("bignumber.js"));C();t();C();t();t();t();t();t();t();C();t();C();t();C();t();le();var Kf=["reDelegateRewards","claimRewards","unBond"],Xf=["wrapEgld","unwrapEgld"],Yf=["unStake"],Jf=["unDelegate"];t();t();t();C();t();var oT=w(require("bignumber.js"));t();t();le();t();var tT=w(require("bignumber.js"));t();t();t();t();var iT=w(require("bignumber.js"));F();t();t();t();t();U();t();var Vp=require("@multiversx/sdk-web-wallet-provider");C();t();var Hp=w(require("qs"));t();se();var yr=e=>{let o=new URLSearchParams(e).toString(),{pathname:n,hash:r}=W(),c=o?`?${o}`:"",p=n?`${n}${c}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};mn();t();mn();var sT={search:no()?window.location.search:"",removeParams:[]},pt=(e,o=sT)=>{var m;let n={},r=no()?window.location.search:"",c=(m=o.search)!=null?m:r;if(c){let d=c?new URLSearchParams(c):[];n=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=n[d],delete n[d]}),o.removeParams!=null&&Object.keys(n).forEach(d=>{var _,h;let[l]=d.split("[");(((_=o.removeParams)==null?void 0:_.includes(d))||((h=o.removeParams)==null?void 0:h.includes(l)))&&delete n[d]}),{remainingParams:p,params:n,clearNavigationHistory:()=>yr(n)}};var Za=({removeParams:e,search:o})=>{let n=no()?window.location.search:"",r=o!=null?o:n;if(!r)return{};let c=Hp.default.parse(r.replace("?","")),p=Object.keys(c).filter(d=>!e.includes(d)),{remainingParams:m}=pt(p,{search:o,removeParams:e});return yr(m),m};var Qa=({transaction:e,search:o})=>Za({removeParams:[...Object.keys(e),Vp.WALLET_PROVIDER_CALLBACK_PARAM,Kn,Ta],search:o});t();t();t();ae();t();le();t();t();ae();t();var cT=w(require("linkifyjs"));t();C();t();var pT=w(require("bignumber.js"));t();F();t();t();U();t();U();t();t();t();le();t();le();t();var mT=w(require("bignumber.js"));C();le();t();le();t();var qp=require("react");F();t();t();le();t();t();var dT=require("@multiversx/sdk-core/out"),lT=w(require("bignumber.js"));le();t();F();t();t();F();var U1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var zp=require("react");F();ae();t();var uT=require("react");le();var j1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];_n();t();var Sr=e=>e.transactions,po=v(Sr,e=>e.signedTransactions),gT=v(Sr,e=>e.signTransactionsError),jp=v(Sr,e=>e.signTransactionsCancelMessage),br=e=>o=>Object.entries(o).reduce((n,[r,c])=>(e(c.status)&&(n[r]=c),n),{}),ei=v(po,br(ro)),Kp=v(po,br(Bo)),Xp=v(po,br(Fo)),fT=v(po,br(Oa)),Yp=v(Sr,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:A(f({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>gn(n)))||[]})}),TT=v(po,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});function wr(e){return g(this,null,function*(){let{apiAddress:o,apiTimeout:n}=Y(S.getState()),r=e.map(p=>Jp.default.post(`${o}/transactions`,p.toPlainObject(),{timeout:parseInt(n)}));return(yield Promise.all(r)).map(({data:p})=>p.txHash)})}t();var Zp=w(require("axios"));fo();t();C();var dt=({sessionId:e,address:o})=>`${e}${Wt}${o}`;function vr(n){return g(this,arguments,function*({transactions:e,sessionId:o}){var m;let r=Le(S.getState()),{apiAddress:c,apiTimeout:p}=Y(S.getState());if(!r)return{error:"Invalid address provided. You need to be logged in to send transactions",batchId:null};try{let d=dt({sessionId:o,address:r}),l={transactions:e,id:d},_=yield Zp.default.post(`${c}/${Tr}`,l,{timeout:Number(p!=null?p:Ot)});return{batchId:d,data:_.data}}catch(d){return console.error("error sending batch transactions",d),{error:(m=d==null?void 0:d.message)!=null?m:"error sending batch transactions",batchId:null}}})}t();var oi=w(require("axios"));var Ir=e=>g(void 0,null,function*(){let o=nt(S.getState()),n=e.map(c=>c.hash),{data:r}=yield oi.default.get(`${o}/${hn}`,{params:{hashes:n.join(","),withScResults:!0}});return e.map(({hash:c,previousStatus:p})=>{let m=r.find(d=>(d==null?void 0:d.txHash)===c);return{hash:c,data:m==null?void 0:m.data,invalidTransaction:m==null,status:m==null?void 0:m.status,results:m==null?void 0:m.results,sender:m==null?void 0:m.sender,receiver:m==null?void 0:m.receiver,previousStatus:p,hasStatusChanged:m&&m.status!==p}})}),Qp=e=>{let o=nt(S.getState());return oi.default.get(`${o}/transactions/${e}`,{timeout:1e4})};t();var xT=w(require("axios"));t();t();var yT=w(require("axios"));t();var ST=w(require("axios"));t();t();t();t();t();var om=require("@lifeomic/axios-fetch"),ni=w(require("axios")),ti=(0,om.buildAxiosFetch)(ni.default),ri=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function bT(e,o,n){return g(this,null,function*(){try{let r=yield ti(e,f({method:"POST",body:o?JSON.stringify(o):void 0,headers:f({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return ri(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function wT(e,o){return g(this,null,function*(){try{let n=yield ti(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return ri(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function vT(e,o,n){return g(this,null,function*(){try{let r=yield ti(e,f({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return ri(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var So=ni.default.create();So.get=wT;So.post=bT;So.patch=vT;var nm=e=>So.get(e).then(o=>o.data);t();var Vo=e=>{let o=e!=null?e:nt(S.getState());return o.endsWith("/")?o.slice(0,-1):o};t();var IT=w(require("axios"));t();var tm=w(require("swr"));var xn=({apiEndpoint:e})=>{let o=Vo(),n=e?`${o}/${e}`:null;return(0,tm.default)(n,nm)};t();t();var AT=e=>{let n=`${Vo()}/${Tn}/${e}?withGuardianInfo=true`;return So.get(n)},rm=e=>g(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield AT(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});t();var lt=e=>xn({apiEndpoint:e?`${Tn}/${e}?withGuardianInfo=true`:null});t();t();fo();t();var am=w(require("axios"));function ai(e){return g(this,null,function*(){let o=`${e}/${ja}`;try{let{data:r}=yield am.default.get(o);if(r!=null){let c="egldDenomination";if(c in r){let n=r,{[c]:p,decimals:m}=n,d=De(n,[ea(c),"decimals"]);return A(f({},d),{decimals:p,digits:m})}return r}}catch(r){console.error("error fetching configuration for ",o)}return null})}t();var im=w(require("axios"));var kT=e=>{try{return Boolean(new URL(e))}catch(o){return!1}};function sm(){return g(this,null,function*(){var n;let e=Vo();if(!kT(e))return null;let o=`${e}/${Ka}`;try{let{data:r}=yield im.default.get(o);if(r!=null)return(n=r==null?void 0:r.data)==null?void 0:n.config}catch(r){console.error("error fetching configuration for ",o)}return null})}t();fo();t();fo();t();t();t();t();var ET=w(require("axios"));t();C();t();var $m=require("react"),Nr=require("@multiversx/sdk-core");t();t();t();var pm=require("react"),yn=require("react-redux");var PT={store:S,subscription:Rp},_t=(0,pm.createContext)(PT),eD=(0,yn.createStoreHook)(_t),R=(0,yn.createDispatchHook)(_t),y=(0,yn.createSelectorHook)(_t);var fe=()=>y(ao);t();var mo=()=>y(qc);t();t();t();t();var mm=require("@multiversx/sdk-extension-provider"),dm=require("@multiversx/sdk-hw-provider"),lm=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),_m=require("@multiversx/sdk-opera-provider"),um=require("@multiversx/sdk-passkey-provider/out"),ii=require("@multiversx/sdk-web-wallet-provider");C();go();t();var lo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Sn=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");U();t();var Ar={},kr=bn;var CT="/dapp/init",we=e=>{switch(e==null?void 0:e.constructor){case ii.WalletProvider:return"wallet";case kr:return"walletconnectv2";case dm.HWProvider:return"ledger";case mm.ExtensionProvider:return"extension";case um.PasskeyProvider:return"passkey";case lm.MetamaskProvider:return"metamask";case _m.OperaProvider:return"opera";case Ae.CrossWindowProvider:return"crossWindow";case lo.IframeProvider:return"iframe";case bn:return"";default:return"extra"}},Lr=e=>new ii.WalletProvider(`${e}${CT}`),si=e=>g(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:n,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:n===Os}}),Pe=e=>`Unable to perform ${e}, Provider not initialized`,bn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Pe("getAccount"))}setAccount(o){throw new Error(Pe(`setAccount: ${o}`))}login(o){throw new Error(Pe(`login with options: ${o}`))}logout(o){throw new Error(Pe(`logout with options: ${o}`))}getAddress(){throw new Error(Pe("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(Pe(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(Pe(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(Pe(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(Pe(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(Pe(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(Pe(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},$o=new bn;var pi=$o,ci=null;function ee(e){pi=e}function mi(e){ci=e}function Er(){ci!=null&&(pi=ci)}function pe(){return pi||$o}var wn=()=>{let e=pe(),o=we(e);return{provider:e,providerType:o}};t();var gm=()=>y(Kc);t();t();t();t();t();t();var ut=w(require("react"));var MD=(0,ut.createContext)({}),OD=S.getState();t();var Tm=w(require("react"));t();var di=w(require("react")),NT=w(require("axios"));t();t();var hm=()=>y(jc);N();t();t();var Vm=require("@multiversx/sdk-native-auth-client");t();var Sm=w(require("axios"));t();t();t();function xm(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var ym=(e,o,n,r=0)=>g(void 0,null,function*(){try{return yield e(...n)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield xm(o.delay)),yield ym(e,o,n,r+1)):null}}),Pr=(e,o={retries:5,delay:500})=>(...n)=>g(void 0,null,function*(){return yield ym(e,o,n)});var RT=4,DT=3e4,Cr={current:null},qo={current:null},MT=Pr((e,o,n)=>g(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield Sm.default.get(`${e}/${za}?from=${RT}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));function bm(e,o,n,r){return g(this,null,function*(){if(e==null)throw new Error("missing api url");let c=Date.now();if(Cr.current!=null&&c<Cr.current.timestamp*1e3+DT&&!r)return Cr.current;if(qo.current!=null)return yield qo.current;qo.current=MT(e,o,n);try{let p=yield qo.current;if(p==null)throw qo.current=null,new Error("could not get block hash");return Cr.current={hash:p.hash,timestamp:p.timestamp},qo.current=null,p}catch(p){return qo.current=null,null}})}t();t();Gt();t();t();var Hm=w(Gm());var vn=e=>{if(!e||!(0,Hm.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,c,p]=o,m=JSON.parse(Go(p)),d=Go(n);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};function ih(e){return Object.prototype.toString.call(e)==="[object String]"}var In=e=>{var n;if(!e||!ih(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,c,p]=o,m=Go(r),d=Go(c),l=vn(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let _=A(f({},l),{address:m,body:d,signature:p});return(n=l.extraInfo)!=null&&n.timestamp||delete _.extraInfo,_}catch(r){return null}};var ui={isExpired:!1},An=e=>{if(!e)return ui;let o=In(e);if(!o)return ui;let n=sn(),{ttl:r,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return ui;let m=p+r,d=n>m,l=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};t();ae();var Tt={origin:W().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},ht=e=>{var n,r,c,p,m,d;return e===!0?Tt:{origin:(n=e==null?void 0:e.origin)!=null?n:Tt.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:Tt.expirySeconds,apiAddress:(c=e==null?void 0:e.apiAddress)!=null?c:Tt.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:Tt.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var xt=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:c,extraInfo:p,gatewayUrl:m,extraRequestHeaders:d}=ht(e),l=new Vm.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:c,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:ht,initialize:u=>g(void 0,null,function*(){var L,k;if(!n||!o)return"";let x=()=>l.getCurrentBlockHash();try{let E=(L=u==null?void 0:u.latestBlockInfo)!=null?L:yield bm(n,c,x,u==null?void 0:u.noCache);if(!E)return"";let{hash:V,timestamp:M}=E,P=l.encodeValue(JSON.stringify(f(f({},(k=u==null?void 0:u.extraInfo)!=null?k:p),M?{timestamp:M}:{})));return`${l.encodeValue(o)}.${V}.${r}.${P}`}catch(E){return console.error("Error getting native auth token: ",E.toString()),""}}),getToken:({address:u,token:x,signature:L})=>l.getToken(u,x,L),getTokenExpiration:An}};var sh=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},Ce=e=>{let o=y(Y),n=y(un),r=(0,$m.useRef)(n==null?void 0:n.loginToken),c=sh(o.apiAddress,e),p=ht(f(f({},e===!0?{}:e),c?{apiAddress:c}:{})),m=Boolean(e),d=xt(p),{address:l}=fe(),_=R(),h=k=>{r.current=k,_(ho(f(A(f({},n),{loginToken:k}),c?{nativeAuthConfig:p}:{})))},u=()=>{try{return d.initialize()}catch(k){console.error("Unable to get block. Login failed.",k);return}},x=({address:k,signature:E})=>{let V=r.current;if(!V)throw"Token not found. Call `setLoginToken` first.";if(!m){_(ho({loginToken:V,signature:E}));return}let M=d.getToken({address:k,token:V,signature:E});return _(ho(f({loginToken:V,signature:E,nativeAuthToken:M},c?{nativeAuthConfig:p}:{}))),M};return{configuration:p,setLoginToken:h,getNativeAuthLoginToken:u,setTokenLoginInfo:x,refreshNativeAuthTokenLogin:V=>g(void 0,[V],function*({signMessageCallback:k,nativeAuthClientConfig:E}){let P=yield xt(E||p).initialize({noCache:Boolean(E)});if(r.current=P,!P)return;let j=new Nr.Message({address:new Nr.Address(l),data:a.Buffer.from(`${l}${P}`)}),D=yield k(j,{});if(!(D!=null&&D.signature))throw"Message not signed";return x({address:l,signature:a.Buffer.from(D.signature).toString("hex")})})}};t();var ue=require("react");t();var Rr=require("react");function qm(e,o=[]){let n=(0,Rr.useRef)(!0);(0,Rr.useEffect)(()=>{n.current?n.current=!1:e()},o)}H();N();U();t();t();var Ym=w(Dr());jn();var jm,Km,Xm,ph=(Xm=(Km=(jm=ke.safeWindow)==null?void 0:jm.location)==null?void 0:Km.origin)==null?void 0:Xm.includes("localhost"),Jm=e=>{if(!(0,Ym.default)(e))return Boolean(e);let n=f({},e);return Boolean(ph)&&delete n.origin,Object.keys(n).length>0};t();function Ke(){return io(S.getState())}to();t();H();F();t();function Zm(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function Qm(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mh(e.path,e.caseSensitive,e.end),c=o.match(n);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),d=c.slice(1);return{params:r.reduce((_,h,u)=>{if(h==="*"){let x=d[u]||"";m=p.slice(0,p.length-x.length).replace(/(.)\/+$/,"$1")}return _[h]=dh(d[u]||"",h),_},{}),pathname:p,pathnameBase:m,pattern:e}}function mh(e,o=!1,n=!0){Zm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),r]}function dh(e,o){try{return decodeURIComponent(e)}catch(n){return Zm(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}t();t();ae();var ed=()=>{let{search:e}=W(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return fn(r)?r:null};t();var zo=e=>rm(e);t();t();function od(){let e=pe();return we(e)}t();U();t();function jo(e){return od()===e}function Te(){let e=S.getState(),o=pe(),n=Le(e),r=io(e),c=dr(e);if(!o)throw"provider not initialized";return jo("ledger")&&r?new Promise(p=>{p(n)}):!jo("")&&!jo("wallet")&&!jo("extra")?o.getAddress():new Promise(p=>{let m=ed();c!=null&&m&&p(m),r&&p(n),p("")})}t();function Ko(e){let o=S.getState(),n=zc(o);return e?n&&!isNaN(n)?Math.max(n,e.nonce):e.nonce:n}t();t();ae();var Mr=()=>{let{search:e}=W(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var kn=()=>{var n;let e=Mr(),o=X(S.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};t();H();F();t();N();var nd=()=>g(void 0,null,function*(){try{let e=yield Te();try{let o=yield zo(e);if(o!=null){let n=A(f({},o),{nonce:Ko(o)});return S.dispatch(To(n)),n}}catch(o){console.error("Failed getting account ",o)}}catch(e){console.error("Failed getting address ",e)}return null});function bo(){return g(this,null,function*(){let e=pe();if(e==null)throw"Provider not initialized";if(!e.isInitialized||e.isInitialized())return nd();try{if(!e.init)throw"Current provider does not have init() function";return(yield e.init())?nd():void 0}catch(o){console.error("Failed initializing provider ",o)}})}t();N();function td(e){S.dispatch(qt(e))}t();var rd=require("@multiversx/sdk-core");F();se();ln();cn();Mo();se();var ad=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&Oo({url:e})},lh=e=>{let o=He.local.getItem(ge.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&(He.local.setItem({key:ge.logoutEvent,data:e,expires:0}),He.local.removeItem(ge.logoutEvent))},_h=500;function he(c,p){return g(this,arguments,function*(e,o,n=Boolean(kn()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var k;let m="",d=pe(),l=we(d),_=l==="wallet",h=((k=d==null?void 0:d.isInitialized)==null?void 0:k.call(d))===!0;if(n&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield Te(),lh(m)}catch(E){console.error("error fetching logout address",E)}let u=dn(e),x=W(),L=new URL(decodeURIComponent(u)).pathname;if((Qm(x.pathname,L)||_&&h)&&_c(),!m&&!h)return ad({callbackUrl:u,onRedirect:o});try{if(S.dispatch(G()),_)return setTimeout(()=>{d.logout({callbackUrl:u})},_h);r.hasConsentPopup&&l==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:u})}catch(E){console.error("Logging out error:",E)}finally{_||ad({callbackUrl:u,onRedirect:o})}})}t();var id=({maxRetries:e})=>new Promise((o,n)=>{let r=0,c=()=>{let p=Wo(S.getState());if(p){o(p);return}if(r<e){r++,setTimeout(c,1e3);return}n(null)};c()});ae();t();t();go();F();var wo=e=>(Object.values(q).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=Ae.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=lo.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);var gi=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,logoutRoute:c,customRequestMethods:p=[]})=>{var Co;let m=R(),d=Jm(n),l=Ce(d?n:!1),_=o,[h,u]=(0,ue.useState)(""),[x,L]=(0,ue.useState)(""),[k,E]=(0,ue.useState)(!0),[V,M]=(0,ue.useState)([]),[P,j]=(0,ue.useState)(null),{provider:D}=wn(),te=y(np),oe=y(tp),ve=y(rp),Ye=y(ap),Hn=y(yo),Vn=y(Jc),O=(0,ue.useRef)(D),Lo=(0,ue.useRef)(!1),Eo=(0,ue.useRef)(!1),At=(Co=c!=null?c:Hn)!=null?Co:"/",Zo=[Ar.CANCEL_ACTION,...p];o&&Zo.push(Ar.SIGN_LOGIN_TOKEN),d&&Zo.push(Ar.SIGN_NATIVE_AUTH_TOKEN);let Xr=k?"":`${Ye}?wallet-connect=${encodeURIComponent(x)}`,$n=Boolean(h),qn=Ke(),Yr=()=>{he(At)},Jr=J=>{console.log("WalletConnect Session Event: ",J)},K=()=>g(void 0,null,function*(){var J,Z,Q,ie;try{if(Lo.current||O.current==null)return;if(!Eo.current){try{yield(J=O.current)==null?void 0:J.logout()}catch(Zr){console.warn("Unable to logout")}return}let ce=yield(Q=(Z=O.current)==null?void 0:Z.getAddress)==null?void 0:Q.call(Z);if(!ce){console.warn("Login cancelled.");return}let Ie=yield(ie=O.current)==null?void 0:ie.getSignature(),xe={address:ce,loginMethod:"walletconnectv2"},Qo={logoutRoute:At,loginType:"walletconnectv2",callbackRoute:e!=null?e:W().href};m(ec(Qo)),Ie&&l.setTokenLoginInfo({signature:Ie,address:ce}),m(re(xe)),xo({callbackRoute:e,onLoginRedirect:r,options:{address:ce,signature:Ie}})}catch(ce){u("User rejected connection proposal"),console.error(ce)}}),B=()=>g(void 0,null,function*(){var Z,Q,ie,ce,Ie;if(we(O.current)==="walletconnectv2")try{((ce=(ie=(Q=(Z=O.current)==null?void 0:Z.walletConnector)==null?void 0:Q.session)==null?void 0:ie.getAll())!=null?ce:[]).length>0&&(yield(Ie=O.current)==null?void 0:Ie.logout()),O.current=$o,j(null)}catch(xe){console.warn("Unable to logout")}}),me=J=>g(void 0,null,function*(){var Z,Q,ie;if(!te||!oe){u("Invalid WalletConnect setup");return}if(!J||!J.topic){u("Expired connection");return}try{if((O.current?we(O.current):!1)!=="walletconnectv2"){yield Po();return}if(E(!0),yield B(),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}_&&l.setLoginToken(_),yield Po(!1);let{approval:Ie}=yield(Z=O.current)==null?void 0:Z.connect({topic:J.topic,methods:Zo});try{yield(Q=O.current)==null?void 0:Q.login({approval:Ie,token:_})}catch(xe){console.error("User rejected existing connection proposal",xe),u("User rejected existing connection proposal"),E(!0),yield Po()}}catch(ce){console.error("Unable to connect to existing session",ce),u("Unable to connect to existing session")}finally{M((ie=O.current)==null?void 0:ie.pairings)}}),Re=J=>g(void 0,null,function*(){var Z,Q;try{J&&(yield(Z=O.current)==null?void 0:Z.logout({topic:J}))}catch(ie){console.error("Unable to remove existing pairing",ie),u("Unable to remove existing pairing")}finally{let ie=yield(Q=O.current)==null?void 0:Q.getPairings();M(ie)}});function Po(J=!0){return g(this,null,function*(){var Qo,Zr,zi;wo();let Z=yield id({maxRetries:15});if(!Z){console.error("Invalid chainID"),u("Invalid chainID");return}if(!oe||!te){console.error("Invalid WalletConnect setup"),u("Invalid WalletConnect setup");return}let Q=Ke(),ie=Eo.current===!1&&!Q,ce=(Zr=(Qo=O.current)==null?void 0:Qo.isInitialized)==null?void 0:Zr.call(Qo);if(Lo.current||ie||ce)return;if(Lo.current=!0,(zi=O.current)!=null&&zi.walletConnector){yield O.current.init(),j(O.current),Lo.current=!1,J&&(yield kt());return}let Ie={onClientLogin:K,onClientLogout:Yr,onClientEvent:Jr},xe=new kr(Ie,Z,te,oe,ve);yield xe.init(),j(xe),O.current=xe,Lo.current=!1,J&&(M(xe.pairings),yield kt())})}function kt(){return g(this,null,function*(){var J,Z;if(!!O.current){if(!te||!oe){u("Invalid WalletConnect setup");return}try{if(!Eo.current)return;let{uri:Q,approval:ie}=yield(J=O.current)==null?void 0:J.connect({methods:Zo});if(!Boolean(Q))return;if(L(Q),(ve==null?void 0:ve.logger)==="debug"&&console.log("WalletConnect uri: ",Q),d&&!_&&(_=yield l.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}if(_&&l.setLoginToken(_),(O.current?we(O.current):!1)!=="walletconnectv2"){E(!0),yield Po();return}try{yield(Z=O.current)==null?void 0:Z.login({approval:ie,token:_})}catch(xe){console.error("User rejected connection proposal",xe),u("User rejected connection proposal"),E(!0)}}catch(Q){console.error("Unable to connect",Q)}}})}return qm(()=>{O.current=D},[D]),(0,ue.useEffect)(()=>(Eo.current=!0,()=>{Eo.current=!1}),[]),(0,ue.useEffect)(()=>{E(!x)},[x]),(0,ue.useEffect)(()=>{if(!P)return;(Boolean(P.session)||Vn==="walletconnectv2")&&qn&&ee(P)},[P,qn]),[Po,{error:h,loginFailed:$n,isLoading:k&&!$n,isLoggedIn:qn&&!$n},{uriDeepLink:Xr,walletConnectUri:x,cancelLogin:B,connectExisting:me,removeExistingPairing:Re,wcPairings:V}]};t();var sd=require("react");t();H();N();F();function Or(e,o=S.dispatch){let n=In(e);if(n==null)return;let{signature:r,address:c}=n;r&&e&&c&&(o(ho({loginToken:e,signature:r,nativeAuthToken:e})),o(re({address:c,loginMethod:"extra"})))}function cd(){let e=R(),o=y(Yc),n=kn();(0,sd.useEffect)(()=>{!o||!n||Or(n,e)},[n,o])}H();N();t();t();C();t();t();t();var Xo=w(require("bignumber.js")),fi=e=>{let o=new Xo.default(e).dividedBy(1e3).integerValue(Xo.default.ROUND_FLOOR),n=new Xo.default(o).dividedBy(60).integerValue(Xo.default.ROUND_FLOOR),r=new Xo.default(n).dividedBy(60).integerValue(Xo.default.ROUND_FLOOR),c=r.modulo(60).isGreaterThan(1),p=n.modulo(60).isGreaterThan(1),m=n.modulo(60).isLessThan(1);return c?`${r} hours`:p?`${n} minutes`:m?"less than 1 minute":`${n} minute`};U();t();t();var pd=require("@multiversx/sdk-opera-provider");function md(e){return g(this,null,function*(){try{let o=pd.OperaProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise opera crypto wallet, make sure that opera crypto wallet is installed.")}catch(o){console.error("Unable to login to OperaProvider",o)}return null})}t();var dd=require("@multiversx/sdk-extension-provider");function ld(e){return g(this,null,function*(){try{let o=dd.ExtensionProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise extension, make sure MultiversX wallet extension is installed.")}catch(o){console.error("Unable to login to ExtensionProvider",o)}return null})}t();go();function Ti(n){return g(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield Ae.CrossWindowProvider.getInstance().init(),c=Ae.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return c;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}t();function _d(r){return g(this,arguments,function*({address:e,walletUrl:o,loginType:n}){try{let c=lo.IframeProvider.getInstance();if(c.isInitialized())return c;switch(n){case Sn.IframeLoginTypes.passkey:c.setLoginType(Sn.IframeLoginTypes.passkey);break;case Sn.IframeLoginTypes.metamask:c.setLoginType(Sn.IframeLoginTypes.metamask);break;default:break}if(c.setAddress(e).setWalletUrl(o),yield c.init())return c;console.error("Could not initialise IframeProvider")}catch(c){console.error("Unable to login to IframeProvider",c)}return null})}t();t();var ud=n=>g(void 0,[n],function*({loginToken:e,extraInfoData:o}){if(e==null||Object.keys(o).length===0)return null;let r=vn(String(e)),_=(r==null?void 0:r.extraInfo)||{},{timestamp:c}=_,p=De(_,["timestamp"]);if(!(r&&c!=null))return null;let d={hash:String(r==null?void 0:r.blockHash),timestamp:Number(c)};return yield xt({extraInfo:f(f({},p),o),expirySeconds:r==null?void 0:r.ttl,origin:r==null?void 0:r.origin}).initialize({latestBlockInfo:d})});var hi=p=>g(void 0,[p],function*({loginToken:e,extraInfoData:o,address:n,signature:r,loginService:c}){let m=yield ud({loginToken:e,extraInfoData:o}),d=o.multisig||o.impersonate||n,l=m!=null?d:n;return m!=null&&c.setLoginToken(m),r&&c.setTokenLoginInfo({signature:r,address:n}),yield zo(l)});t();var gd=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");function fd(e){return g(this,null,function*(){try{let o=gd.MetamaskProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise metamask, make suremetamask flask is installed.")}catch(o){console.error("Unable to login to MetamaskProvider",o)}return null})}t();var Td=require("@multiversx/sdk-passkey-provider/out");function hd(e){return g(this,null,function*(){try{let o=Td.PasskeyProvider.getInstance().setAddress(e);if(yield o.init())return o;console.error("Could not initialise passkey provider")}catch(o){console.error("Unable to login to PasskeyProvider",o)}return null})}t();t();var xd=require("react"),xi=require("@multiversx/sdk-hw-provider");var yi=()=>{let e=y(yo),o=y(io),n=y(mr),r=pe(),[c,p]=(0,xd.useState)(),m=()=>g(void 0,null,function*(){let l=(n==null?void 0:n.index)!=null;try{if(r instanceof xi.HWProvider&&r.isInitialized())return l&&(yield r.setAddressIndex(n.index)),r;let _=new xi.HWProvider;return(yield _.init())?(l&&(yield _.setAddressIndex(n.index)),_):null}catch(_){return console.error("Failed to initialise Ledger Provider"),null}});function d(l){return g(this,null,function*(){let _,h=o&&!(l!=null&&l.isRelogin);try{if(_=yield m(),!_){console.warn("Could not initialise ledger app"),h&&he(e);return}let u=yield si(_);return ee(_),p(u),_}catch(u){console.error("Could not initialise ledger app",u),h&&he(e)}return null})}return{setLedgerProvider:d,ledgerData:c}};var Si=!1;function yd(){let e=y(Y),o=y(lr),n=y(Zc),{loginMethod:r,iframeLoginType:c}=y(X),p=y(dr),m=y(Le),d=y(Wa),l=y(mr),_=y(io),h=y(Wo),u=y(un),x=u==null?void 0:u.nativeAuthConfig,L=Ce(x||!1),{data:k,isLoading:E,error:V}=lt(m),M=(0,vo.useRef)(!1),P=R(),{setLedgerProvider:j,ledgerData:D}=yi();cd();let{callbackRoute:te,logoutRoute:oe}=n||{callbackRoute:"",logoutRoute:""},[ve]=gi({callbackRoute:te,logoutRoute:oe});(0,vo.useEffect)(()=>{Ye()},[e]),(0,vo.useEffect)(()=>{Jr()},[m,r,h]),(0,vo.useEffect)(()=>{Vn()},[u==null?void 0:u.nativeAuthToken,m]),(0,vo.useEffect)(()=>{O()},[k,E]),(0,vo.useEffect)(()=>{Hn()},[d,_,D]);function Ye(){return g(this,null,function*(){let K=e.chainId&&![Rt,Dt,Mt].includes(e.chainId)&&!e.roundDuration;if(!!(!e.chainId||K))try{let me=yield sm();me&&(e.chainId!==me.erd_chain_id||e.roundDuration!==me.erd_round_duration)&&P(Sc({chainId:me.erd_chain_id,roundDuration:me.erd_round_duration}))}catch(me){console.error("failed refreshing chainId ",me)}})}function Hn(){d==null&&l!=null&&D&&P(va({index:l.index,address:m,hasContractDataEnabled:D.dataEnabled,version:D.version}))}function Vn(){return g(this,null,function*(){let{remainingParams:{impersonate:K,multisig:B}}=pt(["impersonate"]),me=qa(m);if(!(u!=null&&u.nativeAuthToken)||K||B||me)return;let Re=In(u==null?void 0:u.nativeAuthToken);(Re==null?void 0:Re.address)&&Re.address!==m&&(P($t(Re.address)),yield bo())})}function O(){return g(this,null,function*(){if(E){P(pn(!0));return}if(V){P(Ks("Failed getting account")),console.error("Failed getting account ",V);return}if(M.current){M.current=!1,P(pn(!1));return}k?P(To(A(f({},k),{address:m,nonce:k.nonce.valueOf()}))):_||P($t("")),P(pn(!1))})}function Lo(){return g(this,null,function*(){let K=Lr(o);if(ee(K),p!=null){try{let B=yield Te(),{clearNavigationHistory:me,remainingParams:{signature:Re,multisig:Po,impersonate:kt}}=pt(["signature","loginToken","address","multisig","impersonate"]);if(!B)return ee($o),P(ho(null)),P(Kt(null)),me();let Co=yield hi({loginToken:u==null?void 0:u.loginToken,extraInfoData:{multisig:Po,impersonate:kt},address:B,signature:Re,loginService:L});Co&&(M.current=!0,P(pn(!0)),P(re({address:Co.address,loginMethod:"wallet"})),P(To(A(f({},Co),{nonce:Ko(Co)}))),P(pn(!1))),me()}catch(B){console.error("Failed authenticating wallet user ",B)}P(Kt(null))}})}function Eo(){return g(this,null,function*(){let K=yield Te(),B=yield ld(K);B&&ee(B)})}function At(){return g(this,null,function*(){let K=yield Te(),B=yield hd(K);B&&ee(B)})}function Zo(){return g(this,null,function*(){let K=yield Te(),B=yield fd(K);B&&ee(B)})}function Xr(){return g(this,null,function*(){let K=yield Te(),B=yield md(K);B&&ee(B)})}function $n(){return g(this,null,function*(){let K=yield Te(),B=yield Ti({address:K,walletUrl:e.walletAddress});B&&ee(B)})}function qn(){return g(this,null,function*(){let K=yield Te();if(!e.metamaskSnapWalletAddress)throw new Error("Metamask snap wallet URL is not set.");let B=yield _d({address:K,walletUrl:e.metamaskSnapWalletAddress,loginType:c});B&&ee(B)})}function Yr(){return g(this,null,function*(){try{P(Aa(!0)),yield ve(!1)}catch(K){console.error("Could not initialize WalletConnect")}finally{P(Aa(!1))}})}function Jr(){return g(this,null,function*(){if(!(r==null||Si))switch(r){case"ledger":{Si=!0,yield j(),Si=!1;break}case"walletconnectv2":{Yr();break}case"extension":{Eo();break}case"passkey":{At();break}case"metamask":{Zo();break}case"opera":{Xr();break}case"crossWindow":{$n();break}case"iframe":qn();break;case"extra":{Er();break}case"wallet":case"":{Lo();break}default:return}})}return null}t();var bd=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),wd=require("@multiversx/sdk-webview-provider/out/WebviewProvider");H();t();t();N();function bi(){S.dispatch(Uo())}function Sd(e){S.dispatch(Fc({batchId:e}))}t();se();t();N();F();t();t();var fh=require("@multiversx/sdk-core"),Th=w(require("bignumber.js"));C();t();t();var hh=w(require("bignumber.js"));C();var Ne=class{constructor(){this.init=()=>g(this,null,function*(){return yield this._provider.init()});this.login=()=>g(this,null,function*(){var n;let o=yield this._provider.login();return{address:(n=o==null?void 0:o.address)!=null?n:""}});this.logout=()=>g(this,null,function*(){return S.dispatch(G()),yield this._provider.logout()});this.relogin=()=>g(this,null,function*(){let o=yield this._provider.relogin();return o?(Or(o),Er(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>g(this,null,function*(){let n=yield this._provider.signTransactions(o);return n||(bi(),this._provider.cancelAction(),null)});this.signTransaction=o=>g(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>g(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>g(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>g(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,bd.providerNotInitializedError)("getAddress");this._provider=wd.WebviewProvider.getInstance({resetStateCallback:()=>S.dispatch(G())})}static getInstance(){return Ne._instance||(Ne._instance=new Ne),Ne._instance}getAccount(){var n;let o=this._provider.getAccount();return{address:(n=o==null?void 0:o.address)!=null?n:""}}setAccount(o){this._provider.setAccount(o)}};N();F();t();var Xe=require("react"),vd=require("@multiversx/sdk-core/out");fo();N();Jn();Qn();var xh=({customNetworkConfig:e={},environment:o,dappConfig:n})=>{let[r,c]=(0,Xe.useState)(!1),p=mo(),m=y(Qc),d=(0,Xe.useMemo)(()=>n,[]),l=d==null?void 0:d.logoutRoute,{address:_,publicKey:h}=p,u=R();function x(){return g(this,null,function*(){let k=!(e!=null&&e.skipFetchFromServer),E=e==null?void 0:e.apiAddress,M=o in oo?oo[o]:{},P=f(f(f({},Zn),M),e),j=A(f({},P),{apiTimeout:String(P.apiTimeout),walletConnectBridgeAddresses:P.walletConnectBridgeAddresses||[],walletConnectV2RelayAddresses:"walletConnectV2RelayAddresses"in P?P.walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"]});if(k){let D="apiAddress"in M?M.apiAddress:"",te=yield ai(E||D);if(te!=null){let oe=f(f(f({},j),te),e);u(La(A(f({},oe),{apiTimeout:String(oe.apiTimeout)})));return}}u(La(j))})}function L(){return g(this,null,function*(){d&&u(Hc(d)),u(nc(l)),yield x(),c(!0)})}return(0,Xe.useEffect)(()=>{_&&new vd.Address(_).hex()!==h&&he(l)},[_,h,l]),(0,Xe.useEffect)(()=>{L()},[e,o,d]),(0,Xe.useEffect)(()=>{p.address&&m&&he(l)},[m,p.address,l]),{initialized:r}};function Id({customNetworkConfig:e={},children:o,environment:n,dappConfig:r}){let[c,p]=(0,Xe.useState)(!(r!=null&&r.isSSR)),{initialized:m}=xh({customNetworkConfig:e,environment:n,dappConfig:r});return(0,Xe.useEffect)(()=>{p(!0)},[]),c?m?o:null:o}t();var Wn=w(require("react"));t();t();t();t();var q_=require("react");t();t();var wi=()=>y(Ee);t();N();t();t();t();t();function vi(){let e=y(ei),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{pendingTransactions:e,pendingTransactionsArray:o,hasPendingTransactions:n}}_n();t();N();U();t();_n();function Ad(e,o){return e.reduce((r,{status:c,hash:p})=>(p!=null&&!o.includes(p)&&ro(c)&&r.push({hash:p,previousStatus:c}),r),[])}t();N();U();function kd({results:e,hash:o,sessionId:n}){let r=e==null?void 0:e.find(c=>(c==null?void 0:c.returnMessage)!=="");S.dispatch($e({transactionHash:o,sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage,inTransit:!1,serverTransaction:r})),S.dispatch(qe({sessionId:n,status:"fail",errorMessage:r==null?void 0:r.returnMessage}))}t();N();F();function Ii(e){S.dispatch(qe({sessionId:e,status:"timedOut"}))}var Br={},Ai=[];function yh({serverTransaction:e,sessionId:o,customTransactionInformation:n,shouldRefreshBalance:r,isSequential:c}){let{hash:p,status:m,inTransit:d,results:l,invalidTransaction:_,hasStatusChanged:h}=e;try{if(Ai.includes(p))return;if(Br[p]>30){Ii(o);return}if(_&&!c||ro(m)){Br[p]=Br[p]?Br[p]+1:1;return}if(c&&!m){S.dispatch($e({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}));return}h&&(Bo(m)&&(n==null?void 0:n.completedTransactionsDelay)!=null?(Ai.push(p),setTimeout(()=>S.dispatch($e({sessionId:o,status:"success",transactionHash:p,inTransit:d,serverTransaction:e})),n==null?void 0:n.completedTransactionsDelay)):S.dispatch($e({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}))),r||bo(),Fo(m)&&kd({sessionId:o,hash:p,results:l})}catch(u){console.error(u),Ii(o)}}function Ld(l){return g(this,arguments,function*({sessionId:e,transactionBatch:{transactions:o,customTransactionInformation:n},getTransactionsByHash:r=Ir,shouldRefreshBalance:c,isSequential:p,onSuccess:m,onFail:d}){try{if(o==null)return;let _=Ad(o,Ai),h=yield r(_);for(let x of h)yh({serverTransaction:x,sessionId:e,customTransactionInformation:n,shouldRefreshBalance:c,isSequential:p});if(h.every(x=>x.status!=="pending")&&!(n!=null&&n.grouping)){if(h.every(k=>k.status==="success"))return m==null?void 0:m(e);if(h.some(k=>k.status==="fail"))return d==null?void 0:d(e)}}catch(_){console.error(_)}})}function Ed(){let{pendingTransactionsArray:e}=vi();function o(n){return g(this,null,function*(){let r=e.filter(([,c])=>{var p;return!((p=c==null?void 0:c.customTransactionInformation)!=null&&p.grouping)}).filter(([c,p])=>c!=null&&ro(p.status));if(r.length>0)for(let[c,p]of r)yield Ld(f({sessionId:c,transactionBatch:p},n));n.shouldRefreshBalance&&(yield bo())})}return o}t();t();t();F();t();rn();var Ln=()=>{let e=y(op);return e?Math.max(1e3,e/2):9e4};t();t();function En(){let e=y(po),o=Object.entries(e),n=(o==null?void 0:o.length)>0;return{signedTransactions:e,signedTransactionsArray:o,hasSignedTransactions:n}}t();t();var Sh=w(require("swr"));t();t();t();t();var Pd=require("react");t();t();var bh=require("react"),wh=require("@multiversx/sdk-web-wallet-provider"),vh=require("@multiversx/sdk-web-wallet-provider"),Ih=w(require("qs"));C();N();U();ua();ae();var KF=W();t();var Rd=require("react"),Li=require("@multiversx/sdk-core");C();ka();t();t();t();t();t();t();t();C();ae();t();t();var x_=require("react"),y_=require("@multiversx/sdk-core"),rS=require("@multiversx/sdk-extension-provider"),aS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),iS=require("@multiversx/sdk-passkey-provider/out"),sS=w(T_());C();go();t();N();U();se();ae();t();var h_=require("react"),Zy=require("@multiversx/sdk-extension-provider"),Qy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),eS=require("@multiversx/sdk-passkey-provider/out");go();N();t();N();F();ln();ae();t();We();N();t();t();var cS=require("react");t();U();_n();t();var S_=require("react");t();t();var pS=require("react"),mS=require("@multiversx/sdk-extension-provider");We();H();U();to();se();se();t();var dS=require("react"),lS=require("@multiversx/sdk-opera-provider");We();H();U();to();se();ae();t();var _S=require("react");fa();We();go();H();N();U();to();ae();t();var hS=require("react");We();N();t();t();ha();t();t();var uS=w(require("platform"));mn();t();t();t();t();t();t();t();jn();U();t();t();var gS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();ln();cn();t();t();t();N();var fS={},TS={};var b_=e=>{if(e.component!=null){let o=e,{component:n,onClose:r}=o,c=De(o,["component","onClose"]),p=S.dispatch(Pa(A(f({},c),{component:null,onClose:void 0})));return fS[p==null?void 0:p.payload.toastId]=n,r&&(TS[p==null?void 0:p.payload.toastId]=r),p==null?void 0:p.payload}return S.dispatch(Pa(e)).payload};t();t();var w_=w(require("axios"));function Ni(e){return g(this,null,function*(){try{let{data:o}=yield w_.default.get(`${e}/websocket/config`);return`wss://${o.url}`}catch(o){throw console.error(o),new Error("Can not get websocket url")}})}se();ae();t();t();var ES=require("react");C();t();t();t();var Ao=w(require("react")),D_=require("react"),M_=require("react"),Wi=w(require("classnames")),O_=require("react-dom");C();t();var k_=w(require("react"));t();var vt=w(require("react"));t();mn();var v_=()=>!no();var yS=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(Di(),Ri))}),SS=()=>(Di(),Me(Ri)).default,Mi=v_();function A_({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,c]=vt.default.useState(Mi?void 0:SS()),[p,m]=vt.default.useState(Mi||n==null?void 0:n()),d=()=>g(this,null,function*(){(e?e():yS()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,vt.useEffect)(()=>{Mi&&d()},[]),{globalStyles:r,styles:p}}function Io(e,o){return n=>{let{globalStyles:r,styles:c}=A_({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return k_.default.createElement(e,A(f({},n),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}t();var E_=w(require("react")),P_=w(require("classnames"));var wS=({className:e,children:o,styles:n})=>E_.default.createElement("div",{className:(0,P_.default)(n==null?void 0:n.dappModalBody,e)},o),Oi=Io(wS,{ssrStyles:()=>Promise.resolve().then(()=>(uo(),_o)),clientStyles:()=>(uo(),Me(_o)).default});t();var Bi=w(require("react")),C_=w(require("classnames"));var vS=({visible:e,customFooter:o,className:n,footerText:r,styles:c})=>e?Bi.default.createElement("div",{className:(0,C_.default)(c==null?void 0:c.dappModalFooter,n)},o!=null?o:Bi.default.createElement("div",null,r)):null,Fi=Io(vS,{ssrStyles:()=>Promise.resolve().then(()=>(uo(),_o)),clientStyles:()=>(uo(),Me(_o)).default});t();var Rn=w(require("react")),N_=require("@fortawesome/free-solid-svg-icons"),R_=require("@fortawesome/react-fontawesome"),It=w(require("classnames"));var IS=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?n?Rn.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeader,r)},n):Rn.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeader,r)},Rn.default.createElement("div",{className:(0,It.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Rn.default.createElement("button",{onClick:m,className:(0,It.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Rn.default.createElement(R_.FontAwesomeIcon,{size:"lg",icon:N_.faTimes}))):null,Ui=Io(IS,{ssrStyles:()=>Promise.resolve().then(()=>(uo(),_o)),clientStyles:()=>(uo(),Me(_o)).default});var AS={showHeader:!0,showFooter:!1,headerText:"",footerText:""},kS=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=AS,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[h,u]=(0,D_.useState)(!1);if((0,M_.useEffect)(()=>{u(!0)},[]),!l)return null;let{showHeader:x,showFooter:L,headerText:k,footerText:E,modalDialogClassName:V="dapp-modal-dialog",modalContentClassName:M="dapp-modal-dialog-content",modalHeaderClassName:P="dapp-modal-dialog-header",modalHeaderTextClassName:j="dapp-modal-dialog-header-text",modalCloseButtonClassName:D="dapp-modal-dialog-close-button",modalBodyClassName:te="dapp-modal-dialog-content-body",modalFooterClassName:oe="dapp-modal-dialog-footer",customModalHeader:ve,customModalFooter:Ye}=c,Hn=Vn=>{Vn.key==="Escape"&&r&&(m==null||m())};return Ao.default.createElement(Ao.default.Fragment,null,h&&(0,O_.createPortal)(Ao.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Wi.default)(V,_==null?void 0:_.dappModal,n),"data-testid":e,onKeyDown:Hn},Ao.default.createElement("div",{className:(0,Wi.default)(_==null?void 0:_.dappModalContent,M)},Ao.default.createElement(Ui,{visible:x,headerText:k,customHeader:ve,className:P,headerTextClassName:j,closeButtonClassName:D,onHide:m}),Ao.default.createElement(Oi,{className:te},o),Ao.default.createElement(Fi,{visible:L,customFooter:Ye,footerText:E,className:oe}))),d!=null?d:document==null?void 0:document.body))},LS=Io(kS,{ssrStyles:()=>Promise.resolve().then(()=>(uo(),_o)),clientStyles:()=>(uo(),Me(_o)).default});t();t();var B_=require("react");t();t();var F_=require("react"),CS=require("@multiversx/sdk-hw-provider");We();H();N();U();to();t();var PS=require("react");t();t();var RS=require("react"),DS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");We();H();U();to();se();se();t();var MS=require("react"),OS=require("@multiversx/sdk-passkey-provider/out");We();H();U();to();se();se();t();t();var U_=require("react");t();var Hi=require("react");t();var ko=require("react"),H_=require("socket.io-client");N();t();var z={current:null,status:"not_initialized"};var BS=3e3,FS=3,W_=500,G_=1e3,US="batchUpdated",WS="connect",GS="disconnect";function V_(){let e=(0,ko.useRef)(null),o=(0,ko.useRef)(null),{address:n}=fe(),r=R(),{network:c}=wi(),p=_=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{r(Xs(_))},G_)},m=_=>{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{r(Ys(_))},G_)},d=()=>{var _;(_=z.current)==null||_.close(),z.current=null,z.status="not_initialized",e.current&&clearTimeout(e.current)},l=(0,ko.useCallback)(Pr(()=>g(this,null,function*(){var h;if(!n)return;z.status="pending";let _=(h=c.websocketUrl)!=null?h:yield Ni(c.apiAddress);if(_==null){console.warn("Can not get websocket url");return}z.current=(0,H_.io)(_,{forceNew:!0,reconnectionAttempts:FS,timeout:BS,query:{address:n}}),z.status="completed",z.current.onAny(p),z.current.on(US,m),z.current.on(WS,()=>{console.log("Websocket connected.")}),z.current.on(GS,()=>{n&&(console.warn("Websocket disconnected. Trying to reconnect..."),setTimeout(()=>{var u;n&&(console.log("Websocket reconnecting..."),(u=z.current)==null||u.connect())},W_))})}),{retries:2,delay:W_}),[n]);(0,ko.useEffect)(()=>{var _;if(n&&z.status==="not_initialized"&&!((_=z.current)!=null&&_.active)){l();return}n||d()},[n,l]),(0,ko.useEffect)(()=>()=>{d()},[])}function Wr(e,o){V_();let n=hm(),r=gm();(0,Hi.useEffect)(()=>{let c=n==null?void 0:n.message;c&&e(c)},[e,n]),(0,Hi.useEffect)(()=>{let c=r==null?void 0:r.data;c&&(o==null||o(c))},[o,r])}t();t();var HS=require("react");F();t();t();t();var VS=w(require("swr"));Mo();var{logoutEvent:$S}=ge,$_="storage",z_=()=>{let{address:e}=mo(),o=y(yo);(0,q_.useEffect)(()=>{let n=r=>{if(!(r.key!==$S||!r.newValue))try{let{data:c}=JSON.parse(r.newValue);c===e&&he(o)}catch(c){return}};return window==null||window.addEventListener($_,n),()=>{window==null||window.removeEventListener($_,n)}},[e,o])};t();t();var Gr=require("react"),j_=require("@fortawesome/free-solid-svg-icons"),Vi=w(require("bignumber.js"));var K_=()=>{let{address:e}=mo(),{tokenLogin:o}=y(X),{secondsUntilExpires:n,expiresAt:r}=An(o==null?void 0:o.nativeAuthToken),c=(0,Gr.useRef)();return(0,Gr.useEffect)(()=>{var d;let p=new Vi.default(String(n)),m=p.times(1e3);if(!(!n||p.isLessThanOrEqualTo(0))){if((d=o==null?void 0:o.nativeAuthConfig)!=null&&d.tokenExpirationToastWarningSeconds){clearTimeout(c.current);let _=new Vi.default(o.nativeAuthConfig.tokenExpirationToastWarningSeconds).times(1e3),h=p.times(1e3).minus(_),u=fi(m.toNumber()),x=h.isLessThanOrEqualTo(0)?0:h.toNumber();c.current=setTimeout(()=>{b_({toastId:"nativeAuthTokenExpiration",type:"custom",title:"Session Expiration Warning",icon:j_.faRefresh,message:`Your token will expire in ${u}!`})},x)}return()=>{clearTimeout(c.current)}}},[r,e,o==null?void 0:o.nativeAuthConfig]),null};t();var Dn=require("react"),X_=w(require("bignumber.js"));var Y_=()=>{let{address:e}=mo(),{tokenLogin:o}=y(X),n=y(yo),{isExpired:r,secondsUntilExpires:c,expiresAt:p}=An(o==null?void 0:o.nativeAuthToken),m=(0,Dn.useRef)(""),d=(0,Dn.useRef)();return(0,Dn.useEffect)(()=>{e&&r&&he(n)},[r,e,n]),(0,Dn.useEffect)(()=>{let l=Boolean(kn());if(!e||l)return;let _=new X_.default(String(c)),h=`${e}_${p}`,u=m.current===h;if(!(c&&_.isGreaterThan(0))||u)return;m.current=h,clearTimeout(d.current);let L=_.times(1e3);return d.current=setTimeout(()=>{he(n)},L.toNumber()),()=>{clearTimeout(d.current)}},[p,e,n]),null};var J_=()=>(K_(),z_(),Y_(),null);t();t();var Jo=require("react");N();U();ln();t();N();t();t();function Z_({transactions:e}){return e==null?void 0:e.some(o=>Array.isArray(o))}function Hr({transactions:e=[]}){return Z_({transactions:e})?e.flat():e}t();N();F();var $i=({errorMessage:e,sessionId:o,transactions:n,clearSignInfo:r})=>{console.error("Unable to send transactions",e),S.dispatch(qe({sessionId:o,status:"fail",errorMessage:e,transactions:n.map(c=>A(f({},c),{status:"not executed"}))})),r==null||r()};t();N();F();var Q_=({errorMessage:e,sessionId:o,clearSignInfo:n})=>{console.error("Unable to send transactions",e),S.dispatch(qe({sessionId:o,status:"fail",errorMessage:e})),n==null||n()};var qS=c=>g(void 0,[c],function*({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r}){var h,u;let{transactions:p}=e;if(!p)return;let m=(h=e.customTransactionInformation)==null?void 0:h.grouping;if(!m)return;let d=p.reduce((x,L,k)=>{let E=m.findIndex(V=>V.includes(k));return x[E]||(x[E]=[]),x[E].push(L),x},[]);if(d.length===0)return;let l=yield r({transactions:d,sessionId:o}),_=l==null?void 0:l.data;if((l==null?void 0:l.error)||!_){$i({errorMessage:(u=l==null?void 0:l.error)!=null?u:"Send batch error",sessionId:o,transactions:p,clearSignInfo:n});return}return _&&S.dispatch(Oc(_)),Hr({transactions:_==null?void 0:_.transactions}).map(x=>x.hash)}),eu=p=>g(void 0,[p],function*({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r=vr,sendSignedTransactionsAsync:c=wr}){var l,_,h;let{transactions:m}=e;if(!m)return;if((l=e.customTransactionInformation)==null?void 0:l.grouping)try{return yield qS({session:e,sessionId:o,clearSignInfo:n,sendSignedBatchTransactionsAsync:r})}catch(u){return $i({errorMessage:u.message,sessionId:o,transactions:m}),null}try{let u=m.map(x=>gn(x));return yield c(u)}catch(u){let x=(_=u.response)==null?void 0:_.data;return Q_({errorMessage:(h=x==null?void 0:x.message)!=null?h:u.message,sessionId:o,clearSignInfo:n}),null}});var ou=e=>{let o=e.redirectRoute;o&&Oo({url:o})},nu=({sendSignedTransactionsAsync:e=wr,sendSignedBatchTransactionsAsync:o=vr})=>{let n=R(),{nonce:r}=y(ao),c=y(po),p=(0,Jo.useRef)(!1),m=(0,Jo.useRef)([]),d=()=>{n(Uo()),p.current=!1},l=(0,Jo.useCallback)(()=>g(void 0,null,function*(){var h;let _=Object.keys(c);for(let u of _){let x=c[u],L=(h=x==null?void 0:x.customTransactionInformation)==null?void 0:h.signWithoutSending;if(!x||!u||L){ou(x);continue}if(m.current.includes(u))continue;let{transactions:k}=x;if(!k||!(x.status==="signed"&&!p.current))continue;p.current=!0,m.current.push(u);let M=yield eu({session:x,sessionId:u,clearSignInfo:d,sendSignedTransactionsAsync:e,sendSignedBatchTransactionsAsync:o}),P="pending",j=k.map(oe=>M!=null&&M.includes(oe.hash)?A(f({},oe),{status:P}):oe);n(sc({sessionId:u,submittedMessage:"submitted"})),n(qe({sessionId:u,status:"sent",transactions:j})),d(),td(r+k.length),ou(x);let[te]=k;Qa({transaction:te}),p.current=!1}}),[c,r]);return(0,Jo.useEffect)(()=>{l()},[c,l]),null};t();t();t();var Tu=require("react");t();var ru=require("react");t();var zS=e=>e.batchTransactions,tu=v(zS,e=>{let o=f({},e);return delete o._persist,o});function Mn(){let e=y(tu),o=(0,ru.useMemo)(()=>Object.entries(e).map(([n,r])=>({batchId:n,transactions:r.transactions})),[e]);return{batches:e,batchTransactionsArray:o}}F();t();var Fn=require("react");rn();t();C();var On=e=>{if(!e||typeof e!="string")return null;let o=e.split(Wt)[0];return xr(o)?parseInt(o,10):null};t();var Vr=(e,o)=>new Date().getTime()-e>o;t();var uu=require("react");t();var pu=require("react");F();t();var su=require("react");t();var au=w(require("axios"));fo();function iu(n){return g(this,arguments,function*({batchId:e,address:o}){let{apiAddress:r,apiTimeout:c}=Y(S.getState()),{data:p}=yield au.default.get(`${r}/${Tr}/${o}/${e}`,{timeout:Number(c!=null?c:Ot)});return p})}var cu=()=>{let{address:e}=fe();return(0,su.useCallback)(o=>g(void 0,null,function*(){try{return yield iu({batchId:o,address:e})}catch(n){return console.error(n),null}}),[e])};var $r=()=>{let e=cu();return(0,pu.useCallback)(n=>g(void 0,[n],function*({batchId:o}){let r=yield e(o);return r?{statusResponse:r,isBatchSuccessful:r.status==="success",isBatchFailed:r.status==="fail"||r.status==="invalid"||r.status==="dropped",isBatchNotFound:Boolean(r.statusCode)&&Boolean(r.message)}:{statusResponse:r,isBatchSuccessful:!1,isBatchFailed:!0,isBatchNotFound:!1}}),[e])};t();F();var qr=({transactions:e,hasUnrelatedTransactions:o})=>{let n=e.every(({status:l})=>l==="fail"),r=e.some(({status:l})=>l==="fail"),c=e.some(({status:l})=>l==="pending"),p=e.every(({status:l})=>l==="success"),m=o&&Boolean(!c&&!n&&r);return{isPending:c,isSuccessful:p,isFailed:o?m?!1:n:r,isIncompleteFailed:m}};t();var mu=require("react");N();function du(){let e=R(),o=$r();return(0,mu.useCallback)(r=>g(this,[r],function*({batchId:n}){let c=yield o({batchId:n});return c.statusResponse&&e(Bc(c.statusResponse)),c}),[e,o])}t();var qi=require("react");N();t();t();var Bn=class{constructor(o){this.status=(o||"").toLowerCase()}static createUnknown(){return new Bn("unknown")}isPending(){return this.status=="received"||this.status=="pending"}isExecuted(){return this.isSuccessful()||this.isFailed()||this.isInvalid()}isSuccessful(){return this.status=="executed"||this.status=="success"||this.status=="successful"}isFailed(){return this.status=="fail"||this.status=="failed"||this.status=="unsuccessful"||this.isInvalid()}isInvalid(){return this.status=="invalid"}toString(){return this.status}valueOf(){return this.status}equals(o){return o?this.status==o.status:!1}};t();function lu(e){return new Promise(o=>setTimeout(o,e))}var _u=e=>g(void 0,null,function*(){let n=4,r;if(e.length===0)return{data:r,success:!1};for(;r===void 0&&n>0;)try{yield lu(3e3);let p=(yield Promise.allSettled(e.map(d=>Qp(d)))).map(d=>d.status==="fulfilled"?d.value.data:void 0).filter(d=>d!==void 0);if(p.length>0){let d=p.length===e.length,l=p.some(_=>new Bn(_.status).isPending());d&&!l||n===1?(r=p,n=0):n-=1}else n-=1}catch(c){n-=1}return{data:r,success:r!==void 0}});F();function zr(){let e=R(),{address:o}=fe(),n=(0,qi.useCallback)(({sessionId:r,dropUnprocessedTransactions:c,serverTransactions:p,batchTransactions:m})=>{for(let d of m){let l=p.find(_=>_.txHash===d.hash);if(!l){c&&e($e({sessionId:r,status:"fail",transactionHash:d.hash}));continue}e($e({sessionId:r,status:l.status,transactionHash:d.hash,serverTransaction:l}))}},[e]);return(0,qi.useCallback)(r=>g(this,null,function*(){if(!r)return;let{transactions:c,isBatchFailed:p,sessionId:m}=r;if(!c||c.length===0)return;if(p){for(let _ of c)e($e({sessionId:m,status:"fail",transactionHash:_.hash}));return}let{data:d,success:l}=yield _u(c.map(({hash:_})=>_).filter(_=>Boolean(_)));l&&d&&n({sessionId:m,dropUnprocessedTransactions:r.dropUnprocessedTransactions,serverTransactions:d,batchTransactions:c}),r.shouldRefreshBalance&&(yield bo())}),[e,o,n])}var jr=e=>{let o=R(),{signedTransactions:n}=En(),r=du(),c=zr(),p=$r(),m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail;return{verifyBatchStatus:(0,uu.useCallback)(h=>g(void 0,[h],function*({batchId:_}){var j,D,te,oe,ve;let u=(D=(j=On(_))==null?void 0:j.toString())!=null?D:"",x=n[u];if(!x||!((te=x.customTransactionInformation)==null?void 0:te.grouping))return;let k=(ve=(oe=n[u])==null?void 0:oe.transactions)!=null?ve:[],{isSuccessful:E,isFailed:V,isPending:M}=qr({transactions:k});if(!M)E&&(m==null||m(u)),V&&(d==null||d(u,"Error processing batch transactions."));else{let Ye=yield r({batchId:_});yield c({sessionId:u.toString(),isBatchFailed:Ye==null?void 0:Ye.isBatchFailed,shouldRefreshBalance:!0,transactions:k})}}),[o,p,c,n,r,m,d])}};var gu=e=>{let{batchTransactionsArray:o}=Mn(),{verifyBatchStatus:n}=jr(e),r=Ln(),c=(0,Fn.useRef)(null),p=z.status==="completed",m=(0,Fn.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:d}of o){let l=On(d);!l||!Vr(l,9e4)||(yield n({batchId:d}))}}),[o,n]);(0,Fn.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{m()},r),()=>{c.current&&clearInterval(c.current)}},[m])};t();var Un=require("react");rn();var fu=e=>{let{batchTransactionsArray:o}=Mn(),n=Ln(),r=zr(),c=(0,Un.useRef)(null),p=z.status==="completed",m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail,l=(0,Un.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:_,transactions:h}of o){let u=On(_);if(!u||!Vr(u,6e5))continue;yield r({sessionId:u.toString(),shouldRefreshBalance:!0,dropUnprocessedTransactions:!0});let x=Hr({transactions:h}),{isPending:L,isSuccessful:k,isFailed:E}=qr({transactions:x});L||(Sd(_),k&&(m==null||m(u.toString())),E&&(d==null||d(u.toString(),"Error processing batch transactions. Status: failed")))}}),[o,r,m,d]);(0,Un.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{l()},n),()=>{c.current&&clearInterval(c.current)}},[l])};var hu=({onSuccess:e,onFail:o})=>{let{batches:n}=Mn(),{signedTransactionsArray:r}=En(),{address:c}=fe(),{verifyBatchStatus:p}=jr({onSuccess:e,onFail:o}),m=()=>{},d=_=>g(void 0,null,function*(){yield p({batchId:_.batchId})}),l=()=>g(void 0,null,function*(){for(let[_,h]of r){let u=dt({sessionId:_,address:c}),x=!Boolean(n[u]);!(h.status!=="sent")||x||(yield p({batchId:u}))}});Wr(m,d),gu({onSuccess:e,onFail:o}),fu({onSuccess:e,onFail:o}),(0,Tu.useEffect)(()=>{l()},[])};t();var Kr=require("react");function xu(e){var d;let o=Ed(),n=Ln(),r=(0,Kr.useRef)(null),c=z.status==="completed",p=(d=e==null?void 0:e.getTransactionsByHash)!=null?d:Ir,m=()=>{o(f({getTransactionsByHash:p},e))};Wr(m),(0,Kr.useEffect)(()=>{if(c){r.current&&clearInterval(r.current);return}if(!r.current)return r.current=setInterval(m,n),()=>{r.current&&clearInterval(r.current)}},[m,z])}function yu(e){return xu(e),hu(e),null}function Su({customComponents:e}){var d,l,_;let o=e==null?void 0:e.transactionSender,n=e==null?void 0:e.transactionTracker,r=e==null?void 0:e.logoutListener,c=(d=o==null?void 0:o.component)!=null?d:nu,p=(l=n==null?void 0:n.component)!=null?l:yu,m=(_=r==null?void 0:r.component)!=null?_:J_;return Wn.default.createElement(Wn.default.Fragment,null,Wn.default.createElement(c,f({},o==null?void 0:o.props)),Wn.default.createElement(p,f({},n==null?void 0:n.props)),Wn.default.createElement(m,null))}var KS=()=>{var n;let e=Ne.getInstance(),o=Mr();tc({data:o}),(n=e.init)==null||n.call(e),mi(e)},XS=({children:e,customNetworkConfig:o={},externalProvider:n,environment:r,customComponents:c,dappConfig:p})=>{if(!r)throw new Error("missing environment flag");return n!=null?mi(n):p!=null&&p.shouldUseWebViewProvider&&KS(),Gn.default.createElement(bu.Provider,{context:_t,store:S},Gn.default.createElement(wu.PersistGate,{persistor:Dp,loading:null},()=>Gn.default.createElement(Id,{environment:r,customNetworkConfig:o,dappConfig:p},Gn.default.createElement(yd,null),Gn.default.createElement(Su,{customComponents:c}),e)))};0&&(module.exports={DappProvider});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=DappProvider.js.map
