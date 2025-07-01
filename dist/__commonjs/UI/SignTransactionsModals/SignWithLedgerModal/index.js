"use strict";var Yg=Object.create;var Kn=Object.defineProperty,Zg=Object.defineProperties,Jg=Object.getOwnPropertyDescriptor,Qg=Object.getOwnPropertyDescriptors,eh=Object.getOwnPropertyNames,Ot=Object.getOwnPropertySymbols,oh=Object.getPrototypeOf,pa=Object.prototype.hasOwnProperty,us=Object.prototype.propertyIsEnumerable;var ls=(e,o,t)=>o in e?Kn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))pa.call(o,t)&&ls(e,t,o[t]);if(Ot)for(var t of Ot(o))us.call(o,t)&&ls(e,t,o[t]);return e},k=(e,o)=>Zg(e,Qg(o));var Ne=(e,o)=>{var t={};for(var r in e)pa.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Ot)for(var r of Ot(e))o.indexOf(r)<0&&us.call(e,r)&&(t[r]=e[r]);return t};var b=(e,o)=>()=>(e&&(o=e(e=0)),o);var w=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),G=(e,o)=>{for(var t in o)Kn(e,t,{get:o[t],enumerable:!0})},fs=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of eh(o))!pa.call(e,s)&&s!==t&&Kn(e,s,{get:()=>o[s],enumerable:!(r=Jg(o,s))||r.enumerable});return e};var x=(e,o,t)=>(t=e!=null?Yg(oh(e)):{},fs(o||!e||!e.__esModule?Kn(t,"default",{value:e,enumerable:!0}):t,e)),F=e=>fs(Kn({},"__esModule",{value:!0}),e);var S=(e,o,t)=>new Promise((r,s)=>{var p=_=>{try{d(t.next(_))}catch(l){s(l)}},m=_=>{try{d(t.throw(_))}catch(l){s(l)}},d=_=>_.done?r(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(e,o)).next())});var Ts=w(Ft=>{"use strict";n();Ft.byteLength=th;Ft.toByteArray=ah;Ft.fromByteArray=sh;var He=[],ve=[],nh=typeof Uint8Array!="undefined"?Uint8Array:Array,ma="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Bo=0,gs=ma.length;Bo<gs;++Bo)He[Bo]=ma[Bo],ve[ma.charCodeAt(Bo)]=Bo;var Bo,gs;ve["-".charCodeAt(0)]=62;ve["_".charCodeAt(0)]=63;function hs(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function th(e){var o=hs(e),t=o[0],r=o[1];return(t+r)*3/4-r}function rh(e,o,t){return(o+t)*3/4-t}function ah(e){var o,t=hs(e),r=t[0],s=t[1],p=new nh(rh(e,r,s)),m=0,d=s>0?r-4:r,_;for(_=0;_<d;_+=4)o=ve[e.charCodeAt(_)]<<18|ve[e.charCodeAt(_+1)]<<12|ve[e.charCodeAt(_+2)]<<6|ve[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return s===2&&(o=ve[e.charCodeAt(_)]<<2|ve[e.charCodeAt(_+1)]>>4,p[m++]=o&255),s===1&&(o=ve[e.charCodeAt(_)]<<10|ve[e.charCodeAt(_+1)]<<4|ve[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function ih(e){return He[e>>18&63]+He[e>>12&63]+He[e>>6&63]+He[e&63]}function ch(e,o,t){for(var r,s=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),s.push(ih(r));return s.join("")}function sh(e){for(var o,t=e.length,r=t%3,s=[],p=16383,m=0,d=t-r;m<d;m+=p)s.push(ch(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],s.push(He[o>>2]+He[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],s.push(He[o>>10]+He[o>>4&63]+He[o<<2&63]+"=")),s.join("")}});var xs=w(da=>{n();da.read=function(e,o,t,r,s){var p,m,d=s*8-r-1,_=(1<<d)-1,l=_>>1,u=-7,f=t?s-1:0,y=t?-1:1,v=e[o+f];for(f+=y,p=v&(1<<-u)-1,v>>=-u,u+=d;u>0;p=p*256+e[o+f],f+=y,u-=8);for(m=p&(1<<-u)-1,p>>=-u,u+=r;u>0;m=m*256+e[o+f],f+=y,u-=8);if(p===0)p=1-l;else{if(p===_)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-l}return(v?-1:1)*m*Math.pow(2,p-r)};da.write=function(e,o,t,r,s,p){var m,d,_,l=p*8-s-1,u=(1<<l)-1,f=u>>1,y=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=r?0:p-1,T=r?1:-1,P=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=u):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+f>=1?o+=y/_:o+=y*Math.pow(2,1-f),o*_>=2&&(m++,_/=2),m+f>=u?(d=0,m=u):m+f>=1?(d=(o*_-1)*Math.pow(2,s),m=m+f):(d=o*Math.pow(2,f-1)*Math.pow(2,s),m=0));s>=8;e[t+v]=d&255,v+=T,d/=256,s-=8);for(m=m<<s|d,l+=s;l>0;e[t+v]=m&255,v+=T,m/=256,l-=8);e[t+v-T]|=P*128}});var Ps=w(fn=>{"use strict";n();var _a=Ts(),un=xs(),ys=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;fn.Buffer=h;fn.SlowBuffer=uh;fn.INSPECT_MAX_BYTES=50;var Bt=2147483647;fn.kMaxLength=Bt;h.TYPED_ARRAY_SUPPORT=ph();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ph(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function ro(e){if(e>Bt)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,h.prototype),o}function h(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ga(e)}return vs(e,o,t)}h.poolSize=8192;function vs(e,o,t){if(typeof e=="string")return dh(e,o);if(ArrayBuffer.isView(e))return _h(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ve(e,ArrayBuffer)||e&&Ve(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ve(e,SharedArrayBuffer)||e&&Ve(e.buffer,SharedArrayBuffer)))return ua(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return h.from(r,o,t);var s=lh(e);if(s)return s;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return h.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}h.from=function(e,o,t){return vs(e,o,t)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function ws(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function mh(e,o,t){return ws(e),e<=0?ro(e):o!==void 0?typeof t=="string"?ro(e).fill(o,t):ro(e).fill(o):ro(e)}h.alloc=function(e,o,t){return mh(e,o,t)};function ga(e){return ws(e),ro(e<0?0:ha(e)|0)}h.allocUnsafe=function(e){return ga(e)};h.allocUnsafeSlow=function(e){return ga(e)};function dh(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!h.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=As(e,o)|0,r=ro(t),s=r.write(e,o);return s!==t&&(r=r.slice(0,s)),r}function la(e){for(var o=e.length<0?0:ha(e.length)|0,t=ro(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function _h(e){if(Ve(e,Uint8Array)){var o=new Uint8Array(e);return ua(o.buffer,o.byteOffset,o.byteLength)}return la(e)}function ua(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,h.prototype),r}function lh(e){if(h.isBuffer(e)){var o=ha(e.length)|0,t=ro(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Ta(e.length)?ro(0):la(e);if(e.type==="Buffer"&&Array.isArray(e.data))return la(e.data)}function ha(e){if(e>=Bt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Bt.toString(16)+" bytes");return e|0}function uh(e){return+e!=e&&(e=0),h.alloc(+e)}h.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==h.prototype};h.compare=function(o,t){if(Ve(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),Ve(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(o)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,s=t.length,p=0,m=Math.min(r,s);p<m;++p)if(o[p]!==t[p]){r=o[p],s=t[p];break}return r<s?-1:s<r?1:0};h.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return h.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var s=h.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Ve(m,Uint8Array))p+m.length>s.length?h.from(m).copy(s,p):Uint8Array.prototype.set.call(s,m,p);else if(h.isBuffer(m))m.copy(s,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return s};function As(e,o){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ve(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var s=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fa(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ns(e).length;default:if(s)return r?-1:fa(e).length;o=(""+o).toLowerCase(),s=!0}}h.byteLength=As;function fh(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ah(this,o,t);case"utf8":case"utf-8":return ks(this,o,t);case"ascii":return vh(this,o,t);case"latin1":case"binary":return wh(this,o,t);case"base64":return Sh(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ih(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}h.prototype._isBuffer=!0;function Uo(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}h.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Uo(this,t,t+1);return this};h.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Uo(this,t,t+3),Uo(this,t+1,t+2);return this};h.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Uo(this,t,t+7),Uo(this,t+1,t+6),Uo(this,t+2,t+5),Uo(this,t+3,t+4);return this};h.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ks(this,0,o):fh.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(o){if(!h.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:h.compare(this,o)===0};h.prototype.inspect=function(){var o="",t=fn.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};ys&&(h.prototype[ys]=h.prototype.inspect);h.prototype.compare=function(o,t,r,s,p){if(Ve(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),!h.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),s===void 0&&(s=0),p===void 0&&(p=this.length),t<0||r>o.length||s<0||p>this.length)throw new RangeError("out of range index");if(s>=p&&t>=r)return 0;if(s>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,s>>>=0,p>>>=0,this===o)return 0;for(var m=p-s,d=r-t,_=Math.min(m,d),l=this.slice(s,p),u=o.slice(t,r),f=0;f<_;++f)if(l[f]!==u[f]){m=l[f],d=u[f];break}return m<d?-1:d<m?1:0};function Is(e,o,t,r,s){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Ta(t)&&(t=s?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(s)return-1;t=e.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof o=="string"&&(o=h.from(o,r)),h.isBuffer(o))return o.length===0?-1:Ss(e,o,t,r,s);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Ss(e,[o],t,r,s);throw new TypeError("val must be string, number or Buffer")}function Ss(e,o,t,r,s){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(v,T){return p===1?v[T]:v.readUInt16BE(T*p)}var l;if(s){var u=-1;for(l=t;l<m;l++)if(_(e,l)===_(o,u===-1?0:l-u)){if(u===-1&&(u=l),l-u+1===d)return u*p}else u!==-1&&(l-=l-u),u=-1}else for(t+d>m&&(t=m-d),l=t;l>=0;l--){for(var f=!0,y=0;y<d;y++)if(_(e,l+y)!==_(o,y)){f=!1;break}if(f)return l}return-1}h.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};h.prototype.indexOf=function(o,t,r){return Is(this,o,t,r,!0)};h.prototype.lastIndexOf=function(o,t,r){return Is(this,o,t,r,!1)};function gh(e,o,t,r){t=Number(t)||0;var s=e.length-t;r?(r=Number(r),r>s&&(r=s)):r=s;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(Ta(d))return m;e[t+m]=d}return m}function hh(e,o,t,r){return Ut(fa(o,e.length-t),e,t,r)}function Th(e,o,t,r){return Ut(Ch(o),e,t,r)}function xh(e,o,t,r){return Ut(Ns(o),e,t,r)}function yh(e,o,t,r){return Ut(Dh(o,e.length-t),e,t,r)}h.prototype.write=function(o,t,r,s){if(t===void 0)s="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")s=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,s===void 0&&(s="utf8")):(s=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var m=!1;;)switch(s){case"hex":return gh(this,o,t,r);case"utf8":case"utf-8":return hh(this,o,t,r);case"ascii":case"latin1":case"binary":return Th(this,o,t,r);case"base64":return xh(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yh(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),m=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Sh(e,o,t){return o===0&&t===e.length?_a.fromByteArray(e):_a.fromByteArray(e.slice(o,t))}function ks(e,o,t){t=Math.min(e.length,t);for(var r=[],s=o;s<t;){var p=e[s],m=null,d=p>239?4:p>223?3:p>191?2:1;if(s+d<=t){var _,l,u,f;switch(d){case 1:p<128&&(m=p);break;case 2:_=e[s+1],(_&192)===128&&(f=(p&31)<<6|_&63,f>127&&(m=f));break;case 3:_=e[s+1],l=e[s+2],(_&192)===128&&(l&192)===128&&(f=(p&15)<<12|(_&63)<<6|l&63,f>2047&&(f<55296||f>57343)&&(m=f));break;case 4:_=e[s+1],l=e[s+2],u=e[s+3],(_&192)===128&&(l&192)===128&&(u&192)===128&&(f=(p&15)<<18|(_&63)<<12|(l&63)<<6|u&63,f>65535&&f<1114112&&(m=f))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),s+=d}return bh(r)}var bs=4096;function bh(e){var o=e.length;if(o<=bs)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=bs));return t}function vh(e,o,t){var r="";t=Math.min(e.length,t);for(var s=o;s<t;++s)r+=String.fromCharCode(e[s]&127);return r}function wh(e,o,t){var r="";t=Math.min(e.length,t);for(var s=o;s<t;++s)r+=String.fromCharCode(e[s]);return r}function Ah(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var s="",p=o;p<t;++p)s+=Nh[e[p]];return s}function Ih(e,o,t){for(var r=e.slice(o,t),s="",p=0;p<r.length-1;p+=2)s+=String.fromCharCode(r[p]+r[p+1]*256);return s}h.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var s=this.subarray(o,t);return Object.setPrototypeOf(s,h.prototype),s};function te(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||te(o,t,this.length);for(var s=this[o],p=1,m=0;++m<t&&(p*=256);)s+=this[o+m]*p;return s};h.prototype.readUintBE=h.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||te(o,t,this.length);for(var s=this[o+--t],p=1;t>0&&(p*=256);)s+=this[o+--t]*p;return s};h.prototype.readUint8=h.prototype.readUInt8=function(o,t){return o=o>>>0,t||te(o,1,this.length),this[o]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||te(o,2,this.length),this[o]|this[o+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||te(o,2,this.length),this[o]<<8|this[o+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||te(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||te(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};h.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||te(o,t,this.length);for(var s=this[o],p=1,m=0;++m<t&&(p*=256);)s+=this[o+m]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};h.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||te(o,t,this.length);for(var s=t,p=1,m=this[o+--s];s>0&&(p*=256);)m+=this[o+--s]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};h.prototype.readInt8=function(o,t){return o=o>>>0,t||te(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};h.prototype.readInt16LE=function(o,t){o=o>>>0,t||te(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};h.prototype.readInt16BE=function(o,t){o=o>>>0,t||te(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};h.prototype.readInt32LE=function(o,t){return o=o>>>0,t||te(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};h.prototype.readInt32BE=function(o,t){return o=o>>>0,t||te(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};h.prototype.readFloatLE=function(o,t){return o=o>>>0,t||te(o,4,this.length),un.read(this,o,!0,23,4)};h.prototype.readFloatBE=function(o,t){return o=o>>>0,t||te(o,4,this.length),un.read(this,o,!1,23,4)};h.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||te(o,8,this.length),un.read(this,o,!0,52,8)};h.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||te(o,8,this.length),un.read(this,o,!1,52,8)};function ge(e,o,t,r,s,p){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>s||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(o,t,r,s){if(o=+o,t=t>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;ge(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(o,t,r,s){if(o=+o,t=t>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;ge(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};h.prototype.writeUint8=h.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,1,255,0),this[t]=o&255,t+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};h.prototype.writeIntLE=function(o,t,r,s){if(o=+o,t=t>>>0,!s){var p=Math.pow(2,8*r-1);ge(this,o,t,r,p-1,-p)}var m=0,d=1,_=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+r};h.prototype.writeIntBE=function(o,t,r,s){if(o=+o,t=t>>>0,!s){var p=Math.pow(2,8*r-1);ge(this,o,t,r,p-1,-p)}var m=r-1,d=1,_=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+r};h.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};h.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};h.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};h.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};h.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||ge(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Ls(e,o,t,r,s,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Cs(e,o,t,r,s){return o=+o,t=t>>>0,s||Ls(e,o,t,4,34028234663852886e22,-34028234663852886e22),un.write(e,o,t,r,23,4),t+4}h.prototype.writeFloatLE=function(o,t,r){return Cs(this,o,t,!0,r)};h.prototype.writeFloatBE=function(o,t,r){return Cs(this,o,t,!1,r)};function Ds(e,o,t,r,s){return o=+o,t=t>>>0,s||Ls(e,o,t,8,17976931348623157e292,-17976931348623157e292),un.write(e,o,t,r,52,8),t+8}h.prototype.writeDoubleLE=function(o,t,r){return Ds(this,o,t,!0,r)};h.prototype.writeDoubleBE=function(o,t,r){return Ds(this,o,t,!1,r)};h.prototype.copy=function(o,t,r,s){if(!h.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!s&&s!==0&&(s=this.length),t>=o.length&&(t=o.length),t||(t=0),s>0&&s<r&&(s=r),s===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),o.length-t<s-r&&(s=o.length-t+r);var p=s-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,s):Uint8Array.prototype.set.call(o,this.subarray(r,s),t),p};h.prototype.fill=function(o,t,r,s){if(typeof o=="string"){if(typeof t=="string"?(s=t,t=0,r=this.length):typeof r=="string"&&(s=r,r=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!h.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(o.length===1){var p=o.charCodeAt(0);(s==="utf8"&&p<128||s==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=h.isBuffer(o)?o:h.from(o,s),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%_]}return this};var kh=/[^+/0-9A-Za-z-_]/g;function Lh(e){if(e=e.split("=")[0],e=e.trim().replace(kh,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fa(e,o){o=o||1/0;for(var t,r=e.length,s=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!s){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}s=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(o-=3)>-1&&p.push(239,191,189);if(s=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Ch(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Dh(e,o){for(var t,r,s,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,s=t%256,p.push(s),p.push(r);return p}function Ns(e){return _a.toByteArray(Lh(e))}function Ut(e,o,t,r){for(var s=0;s<r&&!(s+t>=o.length||s>=e.length);++s)o[s+t]=e[s];return s}function Ve(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Ta(e){return e!==e}var Nh=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,s=0;s<16;++s)o[r+s]=e[t]+e[s];return o}()});var Os=w((mA,Ws)=>{n();var Z=Ws.exports={},$e,qe;function xa(){throw new Error("setTimeout has not been defined")}function ya(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?$e=setTimeout:$e=xa}catch(e){$e=xa}try{typeof clearTimeout=="function"?qe=clearTimeout:qe=ya}catch(e){qe=ya}})();function Es(e){if($e===setTimeout)return setTimeout(e,0);if(($e===xa||!$e)&&setTimeout)return $e=setTimeout,setTimeout(e,0);try{return $e(e,0)}catch(o){try{return $e.call(null,e,0)}catch(t){return $e.call(this,e,0)}}}function Ph(e){if(qe===clearTimeout)return clearTimeout(e);if((qe===ya||!qe)&&clearTimeout)return qe=clearTimeout,clearTimeout(e);try{return qe(e)}catch(o){try{return qe.call(null,e)}catch(t){return qe.call(this,e)}}}var ao=[],gn=!1,Go,Gt=-1;function Eh(){!gn||!Go||(gn=!1,Go.length?ao=Go.concat(ao):Gt=-1,ao.length&&Ms())}function Ms(){if(!gn){var e=Es(Eh);gn=!0;for(var o=ao.length;o;){for(Go=ao,ao=[];++Gt<o;)Go&&Go[Gt].run();Gt=-1,o=ao.length}Go=null,gn=!1,Ph(e)}}Z.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ao.push(new Rs(e,o)),ao.length===1&&!gn&&Es(Ms)};function Rs(e,o){this.fun=e,this.array=o}Rs.prototype.run=function(){this.fun.apply(null,this.array)};Z.title="browser";Z.browser=!0;Z.env={};Z.argv=[];Z.version="";Z.versions={};function io(){}Z.on=io;Z.addListener=io;Z.once=io;Z.off=io;Z.removeListener=io;Z.removeAllListeners=io;Z.emit=io;Z.prependListener=io;Z.prependOnceListener=io;Z.listeners=function(e){return[]};Z.binding=function(e){throw new Error("process.binding is not supported")};Z.cwd=function(){return"/"};Z.chdir=function(e){throw new Error("process.chdir is not supported")};Z.umask=function(){return 0}});var a,c,Mh,i,n=b(()=>{a=x(Ps()),c=x(Os()),Mh=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=Mh});var Sa=b(()=>{"use strict";n()});var Xn,ba,ze=b(()=>{"use strict";n();Xn="Transaction canceled",ba="You cannot sign transactions from a different account"});var Fs=b(()=>{"use strict";n()});var va,Bs=b(()=>{"use strict";n();va=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(va||{})});var wa,Aa,Ia,ka,Yn,La,Ca=b(()=>{"use strict";n();wa="1.0.8",Aa="1.0.11",Ia="1.0.15",ka="1.0.17",Yn="1.0.22",La="1.0.23"});var Da,Na=b(()=>{"use strict";n();Da={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var Us=b(()=>{"use strict";n()});var Pa,Ea=b(()=>{"use strict";n();Pa=(s=>(s.signature="signature",s.sessionId="sessionId",s.status="status",s.address="address",s))(Pa||{})});var Gs=b(()=>{"use strict";n()});var Hs=b(()=>{"use strict";n()});var we,hn,Ao=b(()=>{"use strict";n();we=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),hn=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Vs,bA,$s,vA,z=b(()=>{"use strict";n();Ao();Vs=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Vs||{}),bA=g(g({},hn.WindowProviderRequestEnums),Vs),$s=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))($s||{}),vA=g(g({},hn.WindowProviderResponseEnums),$s)});var qs=b(()=>{"use strict";n()});var zs=b(()=>{"use strict";n()});var je,he=b(()=>{"use strict";n();je=(s=>(s.raw="raw",s.text="text",s.decimal="decimal",s.smart="smart",s))(je||{})});var js=b(()=>{"use strict";n()});var Ks=b(()=>{"use strict";n()});var Xs=b(()=>{"use strict";n()});var j=b(()=>{"use strict";n();Ea();Gs();Hs();z();qs();zs();he();js();Ks();Xs()});var Ho,Ys,UA,Zs,GA,Js,HA,VA,Qs,Tn=b(()=>{"use strict";n();j();Ho={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ys,egldLabel:UA}=Ho["devnet"],{chainId:Zs,egldLabel:GA}=Ho["testnet"],{chainId:Js,egldLabel:HA}=Ho["mainnet"],VA={["devnet"]:Ys,["testnet"]:Zs,["mainnet"]:Js},Qs={[Ys]:"devnet",[Zs]:"testnet",[Js]:"mainnet"}});var Ht=b(()=>{"use strict";n()});var Ke,ep=b(()=>{"use strict";n();Ke=require("@multiversx/sdk-web-wallet-provider")});var Te,xn=b(()=>{"use strict";n();Te=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var op,np,Ma,XA,YA,Ra=b(()=>{"use strict";n();xn();Ma=String((np=(op=Te.safeWindow)==null?void 0:op.navigator)==null?void 0:np.userAgent),XA=/^((?!chrome|android).)*safari/i.test(Ma),YA=/firefox/i.test(Ma)&&/windows/i.test(Ma)});var Wa,Vt,Zn,Oa,Jn,Ae,Vo,tp,rp,ap,co,$t,qt,ip,cp,Ie,sp,pp,N=b(()=>{"use strict";n();Sa();ze();Fs();Bs();Ca();Na();Us();Tn();Ht();ep();Ra();Wa=.01,Vt=1500,Zn=5e4,Oa=5e4,Jn=1e9,Ae=18,Vo=4,tp=1,rp=1,ap="/dapp/init",co="signSession",$t="sdk-dapp-version",qt="logout",ip="login",cp="N/A",Ie="0",sp="...",pp="EGLD-000000"});var Qn,zt=b(()=>{"use strict";n();Qn=()=>Date.now()/1e3});var mp=b(()=>{"use strict";n()});var dp=b(()=>{"use strict";n()});var Fa=b(()=>{"use strict";n();zt();mp();dp()});var Ba={};G(Ba,{clear:()=>Fh,getItem:()=>Wh,localStorageKeys:()=>Pe,removeItem:()=>Oh,setItem:()=>Rh});var Pe,jt,Rh,Wh,Oh,Fh,yn=b(()=>{"use strict";n();Fa();Pe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},jt=typeof localStorage!="undefined",Rh=({key:e,data:o,expires:t})=>{!jt||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Wh=e=>{if(!jt)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Qn()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Oh=e=>{!jt||localStorage.removeItem(String(e))},Fh=()=>{!jt||localStorage.clear()}});var Ua={};G(Ua,{clear:()=>fp,getItem:()=>lp,removeItem:()=>up,setItem:()=>_p,storage:()=>Bh});var _p,lp,up,fp,Bh,gp=b(()=>{"use strict";n();_p=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},lp=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},up=e=>sessionStorage.removeItem(String(e)),fp=()=>sessionStorage.clear(),Bh={setItem:_p,getItem:lp,removeItem:up,clear:fp}});var Xe,Sn=b(()=>{"use strict";n();yn();gp();Xe={session:Ua,local:Ba}});var Ga,$,xe,K=b(()=>{"use strict";n();Ga=require("@reduxjs/toolkit");N();$=(0,Ga.createAction)(qt),xe=(0,Ga.createAction)(ip,e=>({payload:e}))});var Va,hp,Tp,Kt,Ha,xp,Xt,Uh,$a,kI,Gh,Hh,LI,CI,DI,Vh,$h,Yt,Zt=b(()=>{"use strict";n();Va=require("@multiversx/sdk-core"),hp=require("@reduxjs/toolkit"),Tp=require("redux-persist");N();Sn();yn();K();Kt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ie},Ha={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Kt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},xp=(0,hp.createSlice)({name:"accountInfoSlice",initialState:Ha,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Va.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Kt},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase($,()=>(Xe.local.removeItem(Pe.loginExpiresAt),Ha)),e.addCase(xe,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new Va.Address(r).hex()}),e.addCase(Tp.REHYDRATE,(o,t)=>{var l;if(!((l=t.payload)!=null&&l.account))return;let{account:r}=t.payload,{address:s,shard:p,accounts:m,publicKey:d}=r;o.address=s,o.shard=p;let _=m&&s in m;o.accounts=_?m:Ha.accounts,o.publicKey=d})}}),{setAccount:Xt,setAddress:Uh,setAccountNonce:$a,setAccountShard:kI,setLedgerAccount:Gh,updateLedgerAccount:Hh,setWalletConnectAccount:LI,setIsAccountLoading:CI,setAccountLoadingError:DI,setWebsocketEvent:Vh,setWebsocketBatchEvent:$h}=xp.actions,Yt=xp.reducer});function et(){return new Date().setHours(new Date().getHours()+24)}function ot(e){Xe.local.setItem({key:Pe.loginExpiresAt,data:e,expires:e})}var qa=b(()=>{"use strict";n();Sn();yn()});var Sp,yp,bp,UI,qh,zh,za,GI,jh,vp,HI,VI,$I,Jt,Qt=b(()=>{"use strict";n();Sp=require("@reduxjs/toolkit");qa();z();K();yp={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},bp=(0,Sp.createSlice)({name:"loginInfoSlice",initialState:yp,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase($,()=>yp),e.addCase(xe,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,ot(et())})}}),{setLoginMethod:UI,setWalletConnectLogin:qh,setLedgerLogin:zh,setTokenLogin:za,setTokenLoginSignature:GI,setWalletLogin:jh,invalidateLoginSession:vp,setLogoutRoute:HI,setIsWalletConnectV2Initialized:VI,setWebviewLogin:$I}=bp.actions,Jt=bp.reducer});var Ap,wp,Ip,KI,Kh,XI,Xh,er,or=b(()=>{"use strict";n();Ap=require("@reduxjs/toolkit");K();wp={},Ip=(0,Ap.createSlice)({name:"modalsSlice",initialState:wp,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase($,()=>wp)}}),{setTxSubmittedModal:KI,setNotificationModal:Kh,clearTxSubmittedModal:XI,clearNotificationModal:Xh}=Ip.actions,er=Ip.reducer});var Ee,$o=b(()=>{"use strict";n();Ee=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var B,ce=b(()=>{"use strict";n();$o();B=()=>{if(!Ee())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:s,search:p}}=window;return{pathname:o,hash:t,origin:r,href:s,search:p}}});var bn,kp=b(()=>{"use strict";n();ce();bn=(e="")=>{let o=B(),t=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||t?e:`${o.origin}/${e.replace("/","")}`}});var Lp=b(()=>{"use strict";n();se()});var Cp,Dp=b(()=>{"use strict";n();xn();Cp=e=>{if(!Te.safeWindow.location)return;if(!new URL(Te.safeWindow.location.href).protocol.startsWith("http"))return Te.safeWindow.location.reload();Te.safeWindow.location.assign(e)}});var se=b(()=>{"use strict";n();kp();Lp();ce();Dp()});var Np,Pp,nt,tt=b(()=>{"use strict";n();se();Np=!1,Pp=(e=!0)=>{Np=e},nt=({timeout:e=0,url:o})=>{Np||setTimeout(()=>{if(!!window)return Cp(o)},e)}});var Ep=b(()=>{"use strict";n();tt()});function Mp(e){return e[Math.floor(Math.random()*e.length)]}var Rp=b(()=>{"use strict";n()});function ja(e){let o=null;if((e==null?void 0:e.statusCode)in Da){let t=e==null?void 0:e.statusCode,{message:r}=Da[t];o=Jh.includes(t)?Wp:r}return{errorMessage:o,defaultErrorMessage:Wp}}var Wp,Yh,Zh,Jh,Ka=b(()=>{"use strict";n();Na();Wp="Check if the MultiversX app is open on Ledger",Yh=28161,Zh=28160,Jh=[Yh,Zh]});var so=b(()=>{"use strict";n();Ep();Rp();Ka()});var Op,Fp,Bp,Xa,eT,Up,Ik,kk,oT,nr,tr=b(()=>{"use strict";n();Op=require("@reduxjs/toolkit"),Fp=x(require("lodash.omit")),Bp=require("redux-persist");Ht();K();so();Xa={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},eT={network:Xa},Up=(0,Op.createSlice)({name:"appConfig",initialState:eT,reducers:{initializeNetworkConfig:(e,o)=>{let t=Mp(o.payload.walletConnectV2RelayAddresses),r=(0,Fp.default)(o.payload,"walletConnectV2RelayAddresses");e.network=k(g(g({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=g(g({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase($,o=>{o.network.customWalletAddress=void 0}),e.addCase(Bp.REHYDRATE,(o,t)=>{var s,p;if(!((p=(s=t.payload)==null?void 0:s.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Ik,updateNetworkConfig:kk,setCustomWalletAddress:oT}=Up.actions,nr=Up.reducer});var Gp,Ya,Hp,Ek,Mk,Rk,rr,ar=b(()=>{"use strict";n();Gp=require("@reduxjs/toolkit");j();K();Ya={isSigning:!1,signedSessions:{}},Hp=(0,Gp.createSlice)({name:"signedMessageInfoSliceState",initialState:Ya,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:s}=o.payload;s&&(e.errorMessage=s),e.isSigning=r.status==="pending",e.signedSessions[t]=g(g({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>g(g({},e),o.payload),clearSignedMessageInfo:()=>Ya},extraReducers:e=>{e.addCase($,()=>Ya)}}),{setSignSession:Ek,clearSignedMessageInfo:Mk,setSignSessionState:Rk}=Hp.actions,rr=Hp.reducer});var $p,qp,Vp,zp,nT,tT,Hk,rT,ir,cr=b(()=>{"use strict";n();$p=require("@reduxjs/toolkit"),qp=require("redux-persist");j();zt();K();Vp={customToasts:[],transactionToasts:[]},zp=(0,$p.createSlice)({name:"toastsSlice",initialState:Vp,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(s=>s.toastId===t);if(r!==-1){e.customToasts[r]=k(g(g({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(k(g({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Qn(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase($,()=>Vp),e.addCase(qp.REHYDRATE,(o,t)=>{var s,p;let r=(p=(s=t.customToasts)==null?void 0:s.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:nT,removeCustomToast:tT,addTransactionToast:Hk,removeTransactionToast:rT}=zp.actions,ir=zp.reducer});var jp,Ja,Qa,ei,aT,Za,Kp,zk,iT,rt,sr,pr=b(()=>{"use strict";n();jp=require("@reduxjs/toolkit");K();Ja="Transaction failed",Qa="Transaction successful",ei="Processing transaction",aT="Transaction submitted",Za={},Kp=(0,jp.createSlice)({name:"transactionsInfo",initialState:Za,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||Ja,successMessage:(r==null?void 0:r.successMessage)||Qa,processingMessage:(r==null?void 0:r.processingMessage)||ei,submittedMessage:(r==null?void 0:r.submittedMessage)||aT,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Za},extraReducers:e=>{e.addCase($,()=>Za)}}),{clearTransactionsInfo:zk,setTransactionsDisplayInfo:iT,clearTransactionsInfoForSessionId:rt}=Kp.actions,sr=Kp.reducer});function wn(e){return e!=null&&(gT(e)||ST(e))}function An(e){return e!=null&&(hT(e)||bT(e))}function In(e){return e!=null&&(TT(e)||vT(e))}function Xp(e){return e!=null&&(xT(e)||wT(e))}function oi(e){return e!=null&&yT(e)}function gT(e){return e!=null&&cT.includes(e)}function hT(e){return e!=null&&sT.includes(e)}function TT(e){return e!=null&&pT.includes(e)}function xT(e){return e!=null&&mT.includes(e)}function yT(e){return e!=null&&dT.includes(e)}function ST(e){return e!=null&&_T.includes(e)}function bT(e){return e!=null&&lT.includes(e)}function vT(e){return e!=null&&uT.includes(e)}function wT(e){return e!=null&&fT.includes(e)}var cT,sT,pT,mT,dT,_T,lT,uT,fT,kn=b(()=>{"use strict";n();z();cT=["sent"],sT=["success"],pT=["fail","cancelled","timedOut"],mT=["invalid"],dT=["timedOut"],_T=["pending"],lT=["success"],uT=["fail","invalid"],fT=["not executed"]});var Yp,Zp,at,AT,Jp,Qp,em,IT,qo,kT,LT,oL,om,ko,zo,nL,mr,dr=b(()=>{"use strict";n();Yp=require("@reduxjs/toolkit"),Zp=require("redux-persist");z();kn();K();at={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},AT={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Jp=(0,Yp.createSlice)({name:"transactionsSlice",initialState:at,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,l;let{sessionId:t,transactions:r,errorMessage:s,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=g(g(g({},AT),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:s,redirectRoute:m,customTransactionInformation:g(g({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((l=e==null?void 0:e.transactionsToSign)==null?void 0:l.sessionId)===t&&(e.transactionsToSign=at.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=g(g({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:s,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,s!=null&&(e.signedTransactions[t].errorMessage=s),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var l,u,f,y,v,T,P,I;let{sessionId:t,status:r,errorMessage:s,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,_=(u=(l=e.signedTransactions)==null?void 0:l[t])==null?void 0:u.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(E=>E.hash===p?k(g(g({},m!=null?m:{}),E),{status:r,errorMessage:s,inTransit:d}):E);let M=(y=(f=e.signedTransactions[t])==null?void 0:f.transactions)==null?void 0:y.every(E=>An(E.status)),R=(T=(v=e.signedTransactions[t])==null?void 0:v.transactions)==null?void 0:T.some(E=>In(E.status)),W=(I=(P=e.signedTransactions[t])==null?void 0:P.transactions)==null?void 0:I.every(E=>Xp(E.status));M&&(e.signedTransactions[t].status="success"),R&&(e.signedTransactions[t].status="fail"),W&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=at.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=at.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=g(g({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase($,()=>at),e.addCase(Zp.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:s}=t.payload.transactions,p=Object.entries(r).reduce((d,[_,l])=>{let u=new Date(_),f=new Date;return f.setHours(f.getHours()+5),f-u>0||(d[_]=l),d},{});s!=null&&(o.customTransactionInformationForSessionId=s),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Qp,updateSignedTransactions:em,setTransactionsToSign:IT,clearAllTransactionsToSign:qo,clearAllSignedTransactions:kT,clearSignedTransaction:LT,clearTransactionToSign:oL,setSignTransactionsError:om,setSignTransactionsCancelMessage:ko,moveTransactionsToSignedState:zo,updateSignedTransactionsCustomTransactionInformation:nL}=Jp.actions,mr=Jp.reducer});var nm,ni,tm,iL,cL,CT,sL,_r,lr=b(()=>{"use strict";n();nm=require("@reduxjs/toolkit");K();ni={},tm=(0,nm.createSlice)({name:"batchTransactionsSlice",initialState:ni,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>ni},extraReducers:e=>{e.addCase($,()=>ni)}}),{setBatchTransactions:iL,updateBatchTransactions:cL,clearBatchTransactions:CT,clearAllBatchTransactions:sL}=tm.actions,_r=tm.reducer});var am,rm,im,_L,cm,ti=b(()=>{"use strict";n();am=require("@reduxjs/toolkit");K();rm={},im=(0,am.createSlice)({name:"dappConfigSlice",initialState:rm,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase($,()=>rm)}}),{setDappConfig:_L}=im.actions,cm=im.reducer});var H=b(()=>{"use strict";n();Zt();Qt();or();tr();ar();cr();pr();dr();lr();ti()});var ri=b(()=>{"use strict";n()});var mm,ET,MT,jo,gr=b(()=>{"use strict";n();mm=require("@reduxjs/toolkit");ri();Zt();lr();ti();Qt();or();tr();ar();cr();pr();dr();ET={["account"]:Yt,["dappConfig"]:cm,["loginInfo"]:Jt,["modals"]:er,["networkConfig"]:nr,["signedMessageInfo"]:rr,["toasts"]:ir,["transactionsInfo"]:sr,["transactions"]:mr,["batchTransactions"]:_r},MT=(e={})=>(0,mm.combineReducers)(g(g({},ET),e)),jo=MT});var um={};G(um,{default:()=>YT,sessionStorageReducers:()=>ai});function po(e,o=[]){return{key:e,version:1,storage:_m.default,blacklist:o}}var ye,dm,_m,RT,it,WT,OT,FT,BT,UT,GT,HT,VT,$T,qT,lm,zT,ai,jT,KT,XT,YT,fm=b(()=>{"use strict";n();ye=require("redux-persist"),dm=x(require("redux-persist/lib/storage")),_m=x(require("redux-persist/lib/storage/session"));gr();H();Zt();lr();Qt();or();tr();ar();cr();pr();dr();ri();RT={persistReducersStorageType:"localStorage"},it={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},WT=po(it["account"]),OT=po(it["loginInfo"]),FT=po(it["modals"]),BT=po(it["networkConfig"]),UT={2:e=>k(g({},e),{networkConfig:Xa})};GT=po("sdk-dapp-transactionsInfo"),HT=po("sdk-dapp-transactions",["transactionsToSign"]),VT=po("sdk-dapp-batchTransactions",["batchTransactions"]),$T=po("sdk-dapp-toasts"),qT=po("sdk-dapp-signedMessageInfo"),lm={key:"sdk-dapp-store",version:2,storage:dm.default,whitelist:Object.keys(it),migrate:(0,ye.createMigrate)(UT,{debug:!1})},zT=k(g({},lm),{whitelist:[]}),ai={["toasts"]:(0,ye.persistReducer)($T,ir),["transactions"]:(0,ye.persistReducer)(HT,mr),["transactionsInfo"]:(0,ye.persistReducer)(GT,sr),["batchTransactions"]:(0,ye.persistReducer)(VT,_r),["signedMessageInfo"]:(0,ye.persistReducer)(qT,rr)},jT=k(g({},ai),{["account"]:(0,ye.persistReducer)(WT,Yt),["loginInfo"]:(0,ye.persistReducer)(OT,Jt),["modals"]:(0,ye.persistReducer)(FT,er),["networkConfig"]:(0,ye.persistReducer)(BT,nr)}),KT=RT.persistReducersStorageType==="localStorage",XT=KT?(0,ye.persistReducer)(lm,jo(ai)):(0,ye.persistReducer)(zT,jo(jT)),YT=XT});var gm={};G(gm,{default:()=>ZT});var ZT,hm=b(()=>{"use strict";n();gr();ZT=jo()});var Tm={};G(Tm,{default:()=>QT});var ke,JT,QT,xm=b(()=>{"use strict";n();ke=require("redux-persist"),JT=[ke.FLUSH,ke.REHYDRATE,ke.PAUSE,ke.PERSIST,ke.PURGE,ke.REGISTER],QT=JT});var bm={};G(bm,{default:()=>Sm});function Sm(e){return(0,ym.persistStore)(e)}var ym,vm=b(()=>{"use strict";n();ym=require("redux-persist")});var c_=w((y6,i_)=>{n();var yy=typeof i=="object"&&i&&i.Object===Object&&i;i_.exports=yy});var ht=w((S6,s_)=>{n();var Sy=c_(),by=typeof self=="object"&&self&&self.Object===Object&&self,vy=Sy||by||Function("return this")();s_.exports=vy});var Fr=w((b6,p_)=>{n();var wy=ht(),Ay=wy.Symbol;p_.exports=Ay});var l_=w((v6,__)=>{n();var m_=Fr(),d_=Object.prototype,Iy=d_.hasOwnProperty,ky=d_.toString,Tt=m_?m_.toStringTag:void 0;function Ly(e){var o=Iy.call(e,Tt),t=e[Tt];try{e[Tt]=void 0;var r=!0}catch(p){}var s=ky.call(e);return r&&(o?e[Tt]=t:delete e[Tt]),s}__.exports=Ly});var f_=w((w6,u_)=>{n();var Cy=Object.prototype,Dy=Cy.toString;function Ny(e){return Dy.call(e)}u_.exports=Ny});var Br=w((A6,T_)=>{n();var g_=Fr(),Py=l_(),Ey=f_(),My="[object Null]",Ry="[object Undefined]",h_=g_?g_.toStringTag:void 0;function Wy(e){return e==null?e===void 0?Ry:My:h_&&h_ in Object(e)?Py(e):Ey(e)}T_.exports=Wy});var $i=w((I6,x_)=>{n();var Oy=Array.isArray;x_.exports=Oy});var qi=w((k6,y_)=>{n();function Fy(e){return e!=null&&typeof e=="object"}y_.exports=Fy});var b_=w((L6,S_)=>{n();var By=Br(),Uy=$i(),Gy=qi(),Hy="[object String]";function Vy(e){return typeof e=="string"||!Uy(e)&&Gy(e)&&By(e)==Hy}S_.exports=Vy});var Hr=w((yB,M_)=>{n();function oS(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}M_.exports=oS});var W_=w((SB,R_)=>{n();var nS=Br(),tS=Hr(),rS="[object AsyncFunction]",aS="[object Function]",iS="[object GeneratorFunction]",cS="[object Proxy]";function sS(e){if(!tS(e))return!1;var o=nS(e);return o==aS||o==iS||o==rS||o==cS}R_.exports=sS});var F_=w((bB,O_)=>{n();var pS=ht(),mS=pS["__core-js_shared__"];O_.exports=mS});var G_=w((vB,U_)=>{n();var Yi=F_(),B_=function(){var e=/[^.]+$/.exec(Yi&&Yi.keys&&Yi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function dS(e){return!!B_&&B_ in e}U_.exports=dS});var V_=w((wB,H_)=>{n();var _S=Function.prototype,lS=_S.toString;function uS(e){if(e!=null){try{return lS.call(e)}catch(o){}try{return e+""}catch(o){}}return""}H_.exports=uS});var q_=w((AB,$_)=>{n();var fS=W_(),gS=G_(),hS=Hr(),TS=V_(),xS=/[\\^$.*+?()[\]{}|]/g,yS=/^\[object .+?Constructor\]$/,SS=Function.prototype,bS=Object.prototype,vS=SS.toString,wS=bS.hasOwnProperty,AS=RegExp("^"+vS.call(wS).replace(xS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function IS(e){if(!hS(e)||gS(e))return!1;var o=fS(e)?AS:yS;return o.test(TS(e))}$_.exports=IS});var j_=w((IB,z_)=>{n();function kS(e,o){return e==null?void 0:e[o]}z_.exports=kS});var Vr=w((kB,K_)=>{n();var LS=q_(),CS=j_();function DS(e,o){var t=CS(e,o);return LS(t)?t:void 0}K_.exports=DS});var yt=w((LB,X_)=>{n();var NS=Vr(),PS=NS(Object,"create");X_.exports=PS});var J_=w((CB,Z_)=>{n();var Y_=yt();function ES(){this.__data__=Y_?Y_(null):{},this.size=0}Z_.exports=ES});var el=w((DB,Q_)=>{n();function MS(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Q_.exports=MS});var nl=w((NB,ol)=>{n();var RS=yt(),WS="__lodash_hash_undefined__",OS=Object.prototype,FS=OS.hasOwnProperty;function BS(e){var o=this.__data__;if(RS){var t=o[e];return t===WS?void 0:t}return FS.call(o,e)?o[e]:void 0}ol.exports=BS});var rl=w((PB,tl)=>{n();var US=yt(),GS=Object.prototype,HS=GS.hasOwnProperty;function VS(e){var o=this.__data__;return US?o[e]!==void 0:HS.call(o,e)}tl.exports=VS});var il=w((EB,al)=>{n();var $S=yt(),qS="__lodash_hash_undefined__";function zS(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=$S&&o===void 0?qS:o,this}al.exports=zS});var sl=w((MB,cl)=>{n();var jS=J_(),KS=el(),XS=nl(),YS=rl(),ZS=il();function Mn(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Mn.prototype.clear=jS;Mn.prototype.delete=KS;Mn.prototype.get=XS;Mn.prototype.has=YS;Mn.prototype.set=ZS;cl.exports=Mn});var ml=w((RB,pl)=>{n();function JS(){this.__data__=[],this.size=0}pl.exports=JS});var _l=w((WB,dl)=>{n();function QS(e,o){return e===o||e!==e&&o!==o}dl.exports=QS});var St=w((OB,ll)=>{n();var eb=_l();function ob(e,o){for(var t=e.length;t--;)if(eb(e[t][0],o))return t;return-1}ll.exports=ob});var fl=w((FB,ul)=>{n();var nb=St(),tb=Array.prototype,rb=tb.splice;function ab(e){var o=this.__data__,t=nb(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():rb.call(o,t,1),--this.size,!0}ul.exports=ab});var hl=w((BB,gl)=>{n();var ib=St();function cb(e){var o=this.__data__,t=ib(o,e);return t<0?void 0:o[t][1]}gl.exports=cb});var xl=w((UB,Tl)=>{n();var sb=St();function pb(e){return sb(this.__data__,e)>-1}Tl.exports=pb});var Sl=w((GB,yl)=>{n();var mb=St();function db(e,o){var t=this.__data__,r=mb(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}yl.exports=db});var vl=w((HB,bl)=>{n();var _b=ml(),lb=fl(),ub=hl(),fb=xl(),gb=Sl();function Rn(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Rn.prototype.clear=_b;Rn.prototype.delete=lb;Rn.prototype.get=ub;Rn.prototype.has=fb;Rn.prototype.set=gb;bl.exports=Rn});var Al=w((VB,wl)=>{n();var hb=Vr(),Tb=ht(),xb=hb(Tb,"Map");wl.exports=xb});var Ll=w(($B,kl)=>{n();var Il=sl(),yb=vl(),Sb=Al();function bb(){this.size=0,this.__data__={hash:new Il,map:new(Sb||yb),string:new Il}}kl.exports=bb});var Dl=w((qB,Cl)=>{n();function vb(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Cl.exports=vb});var bt=w((zB,Nl)=>{n();var wb=Dl();function Ab(e,o){var t=e.__data__;return wb(o)?t[typeof o=="string"?"string":"hash"]:t.map}Nl.exports=Ab});var El=w((jB,Pl)=>{n();var Ib=bt();function kb(e){var o=Ib(this,e).delete(e);return this.size-=o?1:0,o}Pl.exports=kb});var Rl=w((KB,Ml)=>{n();var Lb=bt();function Cb(e){return Lb(this,e).get(e)}Ml.exports=Cb});var Ol=w((XB,Wl)=>{n();var Db=bt();function Nb(e){return Db(this,e).has(e)}Wl.exports=Nb});var Bl=w((YB,Fl)=>{n();var Pb=bt();function Eb(e,o){var t=Pb(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}Fl.exports=Eb});var Gl=w((ZB,Ul)=>{n();var Mb=Ll(),Rb=El(),Wb=Rl(),Ob=Ol(),Fb=Bl();function Wn(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Wn.prototype.clear=Mb;Wn.prototype.delete=Rb;Wn.prototype.get=Wb;Wn.prototype.has=Ob;Wn.prototype.set=Fb;Ul.exports=Wn});var Vl=w((JB,Hl)=>{n();var Bb="__lodash_hash_undefined__";function Ub(e){return this.__data__.set(e,Bb),this}Hl.exports=Ub});var ql=w((QB,$l)=>{n();function Gb(e){return this.__data__.has(e)}$l.exports=Gb});var jl=w((eU,zl)=>{n();var Hb=Gl(),Vb=Vl(),$b=ql();function $r(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Hb;++o<t;)this.add(e[o])}$r.prototype.add=$r.prototype.push=Vb;$r.prototype.has=$b;zl.exports=$r});var Xl=w((oU,Kl)=>{n();function qb(e,o,t,r){for(var s=e.length,p=t+(r?1:-1);r?p--:++p<s;)if(o(e[p],p,e))return p;return-1}Kl.exports=qb});var Zl=w((nU,Yl)=>{n();function zb(e){return e!==e}Yl.exports=zb});var Ql=w((tU,Jl)=>{n();function jb(e,o,t){for(var r=t-1,s=e.length;++r<s;)if(e[r]===o)return r;return-1}Jl.exports=jb});var ou=w((rU,eu)=>{n();var Kb=Xl(),Xb=Zl(),Yb=Ql();function Zb(e,o,t){return o===o?Yb(e,o,t):Kb(e,Xb,t)}eu.exports=Zb});var tu=w((aU,nu)=>{n();var Jb=ou();function Qb(e,o){var t=e==null?0:e.length;return!!t&&Jb(e,o,0)>-1}nu.exports=Qb});var au=w((iU,ru)=>{n();function e0(e,o,t){for(var r=-1,s=e==null?0:e.length;++r<s;)if(t(o,e[r]))return!0;return!1}ru.exports=e0});var cu=w((cU,iu)=>{n();function o0(e,o){return e.has(o)}iu.exports=o0});var pu=w((sU,su)=>{n();var n0=Vr(),t0=ht(),r0=n0(t0,"Set");su.exports=r0});var du=w((pU,mu)=>{n();function a0(){}mu.exports=a0});var Zi=w((mU,_u)=>{n();function i0(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}_u.exports=i0});var uu=w((dU,lu)=>{n();var Ji=pu(),c0=du(),s0=Zi(),p0=1/0,m0=Ji&&1/s0(new Ji([,-0]))[1]==p0?function(e){return new Ji(e)}:c0;lu.exports=m0});var gu=w((_U,fu)=>{n();var d0=jl(),_0=tu(),l0=au(),u0=cu(),f0=uu(),g0=Zi(),h0=200;function T0(e,o,t){var r=-1,s=_0,p=e.length,m=!0,d=[],_=d;if(t)m=!1,s=l0;else if(p>=h0){var l=o?null:f0(e);if(l)return g0(l);m=!1,s=u0,_=new d0}else _=o?[]:d;e:for(;++r<p;){var u=e[r],f=o?o(u):u;if(u=t||u!==0?u:0,m&&f===f){for(var y=_.length;y--;)if(_[y]===f)continue e;o&&_.push(f),d.push(u)}else s(_,f,t)||(_!==d&&_.push(f),d.push(u))}return d}fu.exports=T0});var Tu=w((lU,hu)=>{n();var x0=gu();function y0(e){return e&&e.length?x0(e):[]}hu.exports=y0});var ic={};G(ic,{css:()=>Pu,default:()=>$0});var Pu,$0,cc=b(()=>{"use strict";n();Pu=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pu));$0={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var yo={};G(yo,{css:()=>Ru,default:()=>j0});var Ru,j0,So=b(()=>{"use strict";n();Ru=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ru));j0={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Tc={};G(Tc,{css:()=>Yu,default:()=>dv});var Yu,dv,xc=b(()=>{"use strict";n();Yu=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yu));dv={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var tf=w((N9,nf)=>{n();function uv(e,o){for(var t=-1,r=e==null?0:e.length,s=Array(r);++t<r;)s[t]=o(e[t],t,e);return s}nf.exports=uv});var af=w((P9,rf)=>{n();var fv=Br(),gv=qi(),hv="[object Symbol]";function Tv(e){return typeof e=="symbol"||gv(e)&&fv(e)==hv}rf.exports=Tv});var _f=w((E9,df)=>{n();var cf=Fr(),xv=tf(),yv=$i(),Sv=af(),bv=1/0,sf=cf?cf.prototype:void 0,pf=sf?sf.toString:void 0;function mf(e){if(typeof e=="string")return e;if(yv(e))return xv(e,mf)+"";if(Sv(e))return pf?pf.call(e):"";var o=e+"";return o=="0"&&1/e==-bv?"-0":o}df.exports=mf});var yc=w((M9,lf)=>{n();var vv=_f();function wv(e){return e==null?"":vv(e)}lf.exports=wv});var ff=w((R9,uf)=>{n();function Av(e,o,t){var r=-1,s=e.length;o<0&&(o=-o>s?0:s+o),t=t>s?s:t,t<0&&(t+=s),s=o>t?0:t-o>>>0,o>>>=0;for(var p=Array(s);++r<s;)p[r]=e[r+o];return p}uf.exports=Av});var hf=w((W9,gf)=>{n();var Iv=ff();function kv(e,o,t){var r=e.length;return t=t===void 0?r:t,!o&&t>=r?e:Iv(e,o,t)}gf.exports=kv});var Sc=w((O9,Tf)=>{n();var Lv="\\ud800-\\udfff",Cv="\\u0300-\\u036f",Dv="\\ufe20-\\ufe2f",Nv="\\u20d0-\\u20ff",Pv=Cv+Dv+Nv,Ev="\\ufe0e\\ufe0f",Mv="\\u200d",Rv=RegExp("["+Mv+Lv+Pv+Ev+"]");function Wv(e){return Rv.test(e)}Tf.exports=Wv});var yf=w((F9,xf)=>{n();function Ov(e){return e.split("")}xf.exports=Ov});var Lf=w((B9,kf)=>{n();var Sf="\\ud800-\\udfff",Fv="\\u0300-\\u036f",Bv="\\ufe20-\\ufe2f",Uv="\\u20d0-\\u20ff",Gv=Fv+Bv+Uv,Hv="\\ufe0e\\ufe0f",Vv="["+Sf+"]",bc="["+Gv+"]",vc="\\ud83c[\\udffb-\\udfff]",$v="(?:"+bc+"|"+vc+")",bf="[^"+Sf+"]",vf="(?:\\ud83c[\\udde6-\\uddff]){2}",wf="[\\ud800-\\udbff][\\udc00-\\udfff]",qv="\\u200d",Af=$v+"?",If="["+Hv+"]?",zv="(?:"+qv+"(?:"+[bf,vf,wf].join("|")+")"+If+Af+")*",jv=If+Af+zv,Kv="(?:"+[bf+bc+"?",bc,vf,wf,Vv].join("|")+")",Xv=RegExp(vc+"(?="+vc+")|"+Kv+jv,"g");function Yv(e){return e.match(Xv)||[]}kf.exports=Yv});var Df=w((U9,Cf)=>{n();var Zv=yf(),Jv=Sc(),Qv=Lf();function ew(e){return Jv(e)?Qv(e):Zv(e)}Cf.exports=ew});var Pf=w((G9,Nf)=>{n();var ow=hf(),nw=Sc(),tw=Df(),rw=yc();function aw(e){return function(o){o=rw(o);var t=nw(o)?tw(o):void 0,r=t?t[0]:o.charAt(0),s=t?ow(t,1).join(""):o.slice(1);return r[e]()+s}}Nf.exports=aw});var Mf=w((H9,Ef)=>{n();var iw=Pf(),cw=iw("toUpperCase");Ef.exports=cw});var Wf=w((V9,Rf)=>{n();var sw=yc(),pw=Mf();function mw(e){return pw(sw(e).toLowerCase())}Rf.exports=mw});var Ac={};G(Ac,{css:()=>Hf,default:()=>_w});var Hf,_w,Ic=b(()=>{"use strict";n();Hf=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hf));_w={copy:"dapp-core-component__copyButton-styles__copy"}});var Lc={};G(Lc,{css:()=>$f,default:()=>uw});var $f,uw,Cc=b(()=>{"use strict";n();$f=`.dapp-core-component__TransactionDataStyles__transactionData {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataLabel {
  align-items: center;
  color: #a3a3a3;
  display: flex;
  justify-content: space-between;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper {
  border-radius: 8px;
  border: 1px solid #262626;
  padding: 4px;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue {
  min-height: 60px;
  line-height: 1.25;
  max-height: 60px;
  overflow-y: auto;
  word-break: break-all;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  padding: 4px;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-track, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-track:hover, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-corner {
  background-color: transparent;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar {
  width: calc(0.5rem + 8px);
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-track, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-track:hover {
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: transparent;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-thumb, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-thumb:hover {
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: #404040;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue .dapp-core-component__TransactionDataStyles__transactionDataValueText {
  flex: 1;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue .dapp-core-component__TransactionDataStyles__transactionDataValueCopy {
  position: sticky;
  min-width: 1rem;
  max-width: 1rem;
  top: 0;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue .dapp-core-component__TransactionDataStyles__transactionDataValueCopy:hover path {
  color: #0ac2ae;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue .dapp-core-component__TransactionDataStyles__transactionDataValueCopy path {
  color: #737373;
  transition: all 200ms ease;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($f));uw={transactionData:"dapp-core-component__TransactionDataStyles__transactionData",transactionDataLabel:"dapp-core-component__TransactionDataStyles__transactionDataLabel",transactionDataValueWrapper:"dapp-core-component__TransactionDataStyles__transactionDataValueWrapper",transactionDataValue:"dapp-core-component__TransactionDataStyles__transactionDataValue",transactionDataValueText:"dapp-core-component__TransactionDataStyles__transactionDataValueText",transactionDataValueCopy:"dapp-core-component__TransactionDataStyles__transactionDataValueCopy"}});var Dc={};G(Dc,{css:()=>Kf,default:()=>hw});var Kf,hw,Nc=b(()=>{"use strict";n();Kf=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
  0% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.5;
  }
}
.dapp-core-component__loadingDotsStyle__loadingDots {
  display: flex;
  align-items: center;
  gap: 4px;
  color: transparent;
  position: relative;
  text-indent: -9999px;
}
.dapp-core-component__loadingDotsStyle__loadingDots .dapp-core-component__loadingDotsStyle__loadingDot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #737373;
  font-size: inherit;
  animation: dapp-core-component__loadingDotsStyle__dot-flashing 500ms infinite linear alternate;
}
.dapp-core-component__loadingDotsStyle__loadingDots .dapp-core-component__loadingDotsStyle__loadingDot.dapp-core-component__loadingDotsStyle__loadingDot-0 {
  animation-delay: calc(1 * 250ms);
}
.dapp-core-component__loadingDotsStyle__loadingDots .dapp-core-component__loadingDotsStyle__loadingDot.dapp-core-component__loadingDotsStyle__loadingDot-1 {
  animation-delay: calc(2 * 250ms);
}
.dapp-core-component__loadingDotsStyle__loadingDots .dapp-core-component__loadingDotsStyle__loadingDot.dapp-core-component__loadingDotsStyle__loadingDot-2 {
  animation-delay: calc(3 * 250ms);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Kf));hw={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var Ec={};G(Ec,{css:()=>Xf,default:()=>xw});var Xf,xw,Mc=b(()=>{"use strict";n();Xf=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xf));xw={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var Rc={};G(Rc,{css:()=>Jf,default:()=>bw});var Jf,bw,Wc=b(()=>{"use strict";n();Jf=`.dapp-core-component__balanceStyles__balance {
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 4px;
}
.dapp-core-component__balanceStyles__balance .dapp-core-component__balanceStyles__balanceApproximation {
  opacity: 0.75;
}
.dapp-core-component__balanceStyles__balance .dapp-core-component__balanceStyles__balanceSymbol {
  width: auto;
  height: 0.666em;
  position: relative;
  top: 0.05em;
}
.dapp-core-component__balanceStyles__balance .dapp-core-component__balanceStyles__balanceSymbol path {
  fill: currentColor;
}
.dapp-core-component__balanceStyles__balance .dapp-core-component__balanceStyles__balanceDecimals {
  opacity: 0.75;
  margin-left: -4px;
}
.dapp-core-component__balanceStyles__balance .dapp-core-component__balanceStyles__balanceSuffix {
  opacity: 0.75;
}
.dapp-core-component__balanceStyles__balance .dapp-core-component__balanceStyles__balanceSuffix.dapp-core-component__balanceStyles__balanceSuffixSup {
  font-size: 66%;
  position: relative;
  top: -0.125em;
  vertical-align: unset;
  white-space: nowrap;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jf));bw={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var Fc={};G(Fc,{css:()=>ng,default:()=>Aw});var ng,Aw,Bc=b(()=>{"use strict";n();ng=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: space-between;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon {
  width: 32px;
  height: 32px;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon.dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #737373;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon .dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon {
  color: #ffffff;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper {
  flex: 1;
  min-width: 0;
  display: flex;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance {
  display: inline-flex;
  color: #0ac2ae;
  font-weight: 500;
  font-size: 32px;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice {
  color: #737373;
  font-size: 1rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ng));Aw={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var Uc={};G(Uc,{css:()=>cg,default:()=>kw});var cg,kw,Gc=b(()=>{"use strict";n();cg=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft:hover .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon {
  color: #0ac2ae;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper {
  gap: 8px;
  display: flex;
  align-items: center;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper {
  position: relative;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon {
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  overflow: hidden;
  border-radius: 8px;
  height: 48px;
  border: 1px solid #2e2e2e;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative {
  position: relative;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #737373;
  color: #ffffff;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName {
  font-size: 16px;
  color: #e5e5e5;
  line-height: 1;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker {
  color: #525252;
  font-size: 10px;
}
.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft .dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon {
  color: #525252;
  transition: all 200ms ease-out;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cg));kw={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var Hc={};G(Hc,{css:()=>ug,default:()=>Cw});var ug,Cw,Vc=b(()=>{"use strict";n();ug=`.dapp-core-component__confirmAmountStyles__confirmAmount {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper {
  height: 48px;
  position: relative;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper .dapp-core-component__confirmAmountStyles__confirmAmountLoading {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper .dapp-core-component__confirmAmountStyles__confirmAmountLoading.dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible {
  opacity: 1;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper .dapp-core-component__confirmAmountStyles__confirmAmountContent {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper .dapp-core-component__confirmAmountStyles__confirmAmountContent.dapp-core-component__confirmAmountStyles__confirmAmountContentHidden {
  pointer-events: none;
  opacity: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ug));Cw={confirmAmount:"dapp-core-component__confirmAmountStyles__confirmAmount",confirmAmountWrapper:"dapp-core-component__confirmAmountStyles__confirmAmountWrapper",confirmAmountLoading:"dapp-core-component__confirmAmountStyles__confirmAmountLoading",confirmAmountLoadingVisible:"dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible",confirmAmountContent:"dapp-core-component__confirmAmountStyles__confirmAmountContent",confirmAmountContentHidden:"dapp-core-component__confirmAmountStyles__confirmAmountContentHidden"}});var qc={};G(qc,{css:()=>gg,default:()=>Nw});var gg,Nw,zc=b(()=>{"use strict";n();gg=`.dapp-core-component__confirmFeeStyles__confirmFee {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeLabel {
  color: #a3a3a3;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeData {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeData .dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper {
  display: flex;
  align-items: center;
  color: #737373;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeData .dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper .dapp-core-component__confirmFeeStyles__confirmFeeDataPrice {
  color: #737373;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeData .dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper .dapp-core-component__confirmFeeStyles__confirmFeeDataPrice * {
  opacity: 1 !important;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gg));Nw={confirmFee:"dapp-core-component__confirmFeeStyles__confirmFee",confirmFeeLabel:"dapp-core-component__confirmFeeStyles__confirmFeeLabel",confirmFeeData:"dapp-core-component__confirmFeeStyles__confirmFeeData",confirmFeeDataPriceWrapper:"dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper",confirmFeeDataPrice:"dapp-core-component__confirmFeeStyles__confirmFeeDataPrice"}});var jc={};G(jc,{css:()=>xg,default:()=>Ew});var xg,Ew,Kc=b(()=>{"use strict";n();xg=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xg));Ew={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Yc={};G(Yc,{css:()=>wg,default:()=>Rw});var wg,Rw,Zc=b(()=>{"use strict";n();wg=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wg));Rw={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Jc={};G(Jc,{css:()=>kg,default:()=>Ow});var kg,Ow,Qc=b(()=>{"use strict";n();kg=`.dapp-core-component__confirmReceiverStyles__receiver {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper {
  display: flex;
  gap: 8px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper .dapp-core-component__confirmReceiverStyles__receiverLabel {
  color: #a3a3a3;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper .dapp-core-component__confirmReceiverStyles__receiverLabelScam {
  color: #d9534f;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  padding-left: 16px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper .dapp-core-component__confirmReceiverStyles__receiverLabelScam:before {
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 10px;
  content: "";
  position: absolute;
  height: 1px;
  background-color: #a3a3a3;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper .dapp-core-component__confirmReceiverStyles__receiverLabelScam .dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon {
  color: #d9534f;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper {
  display: flex;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  gap: 8px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverData {
  color: #737373;
  display: flex;
  gap: 2px;
  align-items: center;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverData .dapp-core-component__confirmReceiverStyles__receiverDataIcon {
  width: 10px;
  height: auto;
  margin-bottom: -2px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverCopy {
  color: #737373;
  min-width: 1rem;
  max-height: 1rem;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverExternal {
  margin: 0;
  max-height: 1rem;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverExternal:hover * {
  color: #0ac2ae !important;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverExternal * {
  transition: all 200ms ease;
  color: #737373 !important;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kg));Ow={receiver:"dapp-core-component__confirmReceiverStyles__receiver",receiverLabelWrapper:"dapp-core-component__confirmReceiverStyles__receiverLabelWrapper",receiverLabel:"dapp-core-component__confirmReceiverStyles__receiverLabel",receiverLabelScam:"dapp-core-component__confirmReceiverStyles__receiverLabelScam",receiverLabelScamIcon:"dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon",receiverWrapper:"dapp-core-component__confirmReceiverStyles__receiverWrapper",receiverData:"dapp-core-component__confirmReceiverStyles__receiverData",receiverDataIcon:"dapp-core-component__confirmReceiverStyles__receiverDataIcon",receiverCopy:"dapp-core-component__confirmReceiverStyles__receiverCopy",receiverExternal:"dapp-core-component__confirmReceiverStyles__receiverExternal"}});var es={};G(es,{css:()=>Pg,default:()=>Bw});var Pg,Bw,os=b(()=>{"use strict";n();Pg=`.dapp-core-component__signStepBodyStyles__summary {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
}
.dapp-core-component__signStepBodyStyles__summary .dapp-core-component__signStepBodyStyles__fields {
  gap: 32px;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__signStepBodyStyles__summary .dapp-core-component__signStepBodyStyles__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__signStepBodyStyles__summary .dapp-core-component__signStepBodyStyles__buttons {
    margin-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pg));Bw={summary:"dapp-core-component__signStepBodyStyles__summary",fields:"dapp-core-component__signStepBodyStyles__fields",buttons:"dapp-core-component__signStepBodyStyles__buttons"}});var ns={};G(ns,{css:()=>Wg,default:()=>Gw});var Wg,Gw,ts=b(()=>{"use strict";n();Wg=`.dapp-core-component__progressHeaderStyles__progress-steps {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
  margin-top: 16px;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step {
  text-align: left;
  display: flex;
  flex: 1;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step:last-child .dapp-core-component__progressHeaderStyles__progress-step-wrapper::after {
  content: none !important;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-wrapper {
  transition: all 200ms ease-out;
  position: relative;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-wrapper.dapp-core-component__progressHeaderStyles__detailed.dapp-core-component__progressHeaderStyles__collapsible:not(.dapp-core-component__progressHeaderStyles__completed):after {
  content: "";
  position: absolute;
  top: 9px;
  right: -20px;
  left: 28px;
  height: 2px;
  background-color: #737373;
  transition: all 200ms ease-out;
  border-radius: 2px;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-wrapper.dapp-core-component__progressHeaderStyles__detailed.dapp-core-component__progressHeaderStyles__collapsible:not(.dapp-core-component__progressHeaderStyles__completed).dapp-core-component__progressHeaderStyles__active:after {
  background-color: #e5e5e5;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-index {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: 900;
  font-family: "Roobert Heavy", "Inter", Roboto, sans-serif;
  color: black;
  background-color: #737373;
  transition: all 200ms ease-out;
  position: relative;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-index.dapp-core-component__progressHeaderStyles__active {
  background-color: #e5e5e5;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-index .dapp-core-component__progressHeaderStyles__progress-step-check {
  color: #4ade80;
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title {
  margin-top: 8px;
  line-height: 1;
  position: relative;
  padding-bottom: 8px;
  color: #737373;
  font-size: 12px;
  flex: 1;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__active {
  color: #e5e5e5;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__active:after {
  background-color: #737373;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__collapsible {
  height: 12px;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__collapsible .dapp-core-component__progressHeaderStyles__progress-step-title-text {
  transition: all 200ms ease-out;
  transform-origin: top left;
  font-size: 0px;
  display: block;
  position: relative;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__collapsible.dapp-core-component__progressHeaderStyles__active .dapp-core-component__progressHeaderStyles__progress-step-title-text {
  font-size: 14px;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__collapsible::after {
  content: none;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title:after {
  width: 100%;
  height: 1px;
  transition: all 200ms ease-out;
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  background-color: #262626;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wg));Gw={"progress-steps":"dapp-core-component__progressHeaderStyles__progress-steps",progressSteps:"dapp-core-component__progressHeaderStyles__progress-steps","progress-step":"dapp-core-component__progressHeaderStyles__progress-step",progressStep:"dapp-core-component__progressHeaderStyles__progress-step","progress-step-wrapper":"dapp-core-component__progressHeaderStyles__progress-step-wrapper",progressStepWrapper:"dapp-core-component__progressHeaderStyles__progress-step-wrapper",detailed:"dapp-core-component__progressHeaderStyles__detailed",collapsible:"dapp-core-component__progressHeaderStyles__collapsible",completed:"dapp-core-component__progressHeaderStyles__completed",active:"dapp-core-component__progressHeaderStyles__active","progress-step-index":"dapp-core-component__progressHeaderStyles__progress-step-index",progressStepIndex:"dapp-core-component__progressHeaderStyles__progress-step-index","progress-step-check":"dapp-core-component__progressHeaderStyles__progress-step-check",progressStepCheck:"dapp-core-component__progressHeaderStyles__progress-step-check","progress-step-title":"dapp-core-component__progressHeaderStyles__progress-step-title",progressStepTitle:"dapp-core-component__progressHeaderStyles__progress-step-title","progress-step-title-text":"dapp-core-component__progressHeaderStyles__progress-step-title-text",progressStepTitleText:"dapp-core-component__progressHeaderStyles__progress-step-title-text"}});var Ct={};G(Ct,{css:()=>Ug,default:()=>Vw});var Ug,Vw,Dt=b(()=>{"use strict";n();Ug=`.dapp-core-component__signWithDeviceModalStyles__wallet-connect {
  color: inherit;
}

.dapp-core-component__signWithDeviceModalStyles__modal-container {
  color: inherit;
}

.dapp-core-component__signWithDeviceModalStyles__formGroup {
  color: inherit;
}

.dapp-core-component__signWithDeviceModalStyles__title {
  margin-bottom: 32px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  color: #d4d4d4;
  line-height: 1.25;
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__title {
    margin-bottom: 40px;
  }
}

.dapp-core-component__signWithDeviceModalStyles__modal-layout-content {
  --modal-offset: calc(100vh - 32px);
  padding: 0 16px 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-top: 48px !important;
  min-height: min(820px, var(--modal-offset));
}
@media (min-width: 576px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content {
    min-height: min(680px, var(--modal-offset));
  }
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content {
    --modal-offset: calc(100vh - 64px);
    min-height: min(720px, var(--modal-offset));
    padding: 0 40px 40px;
  }
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__guarded {
  min-height: min(920px, var(--modal-offset));
}
@media (min-width: 576px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__guarded {
    min-height: min(775px, var(--modal-offset));
  }
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__guarded {
    min-height: min(800px, var(--modal-offset));
  }
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__spaced {
  padding: 16px 16px 32px;
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__spaced {
    padding: 40px;
  }
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  border-radius: 50%;
  cursor: pointer;
  width: 32px;
  height: 32px;
  color: #d4d4d4;
  transition: all 200ms ease-out;
  position: absolute;
  top: 16px;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon.dapp-core-component__signWithDeviceModalStyles__back {
  margin-right: auto;
  left: 16px;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon.dapp-core-component__signWithDeviceModalStyles__close {
  margin-left: auto;
  right: 16px;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon.dapp-core-component__signWithDeviceModalStyles__disabled {
  opacity: 0.5;
  pointer-events: none;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon svg path {
  transition: all 200ms ease-out;
  fill: #737373;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon:hover {
  background-color: #262626;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon:hover svg path {
  fill: #23f7dd;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons {
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  margin-top: auto;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons .dapp-core-component__signWithDeviceModalStyles__sign-button-submit {
  transition: all 200ms ease-out;
  margin: 32px auto 0;
  align-self: center;
  line-height: 1;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  order: -1;
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons .dapp-core-component__signWithDeviceModalStyles__sign-button-submit {
    margin-top: 40px;
  }
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons .dapp-core-component__signWithDeviceModalStyles__sign-button-cancel {
  background: transparent;
  transition: all 200ms ease-out;
  border: none;
  color: #23f7dd;
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  text-align: center;
  padding: 0;
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons .dapp-core-component__signWithDeviceModalStyles__sign-button-cancel {
    margin-top: 32px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ug));Vw={"wallet-connect":"dapp-core-component__signWithDeviceModalStyles__wallet-connect",walletConnect:"dapp-core-component__signWithDeviceModalStyles__wallet-connect","modal-container":"dapp-core-component__signWithDeviceModalStyles__modal-container",modalContainer:"dapp-core-component__signWithDeviceModalStyles__modal-container",formGroup:"dapp-core-component__signWithDeviceModalStyles__formGroup",title:"dapp-core-component__signWithDeviceModalStyles__title","modal-layout-content":"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",modalLayoutContent:"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",guarded:"dapp-core-component__signWithDeviceModalStyles__guarded",spaced:"dapp-core-component__signWithDeviceModalStyles__spaced","modal-layout-heading-icon":"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",modalLayoutHeadingIcon:"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",back:"dapp-core-component__signWithDeviceModalStyles__back",close:"dapp-core-component__signWithDeviceModalStyles__close",disabled:"dapp-core-component__signWithDeviceModalStyles__disabled","sign-buttons":"dapp-core-component__signWithDeviceModalStyles__sign-buttons",signButtons:"dapp-core-component__signWithDeviceModalStyles__sign-buttons","sign-button-submit":"dapp-core-component__signWithDeviceModalStyles__sign-button-submit",signButtonSubmit:"dapp-core-component__signWithDeviceModalStyles__sign-button-submit","sign-button-cancel":"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel",signButtonCancel:"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel"}});var Pt={};G(Pt,{css:()=>Vg,default:()=>zw});var Vg,zw,Et=b(()=>{"use strict";n();Vg=`.dapp-core-component__transactionStatusToastStyles__transactions-status-toast {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
}

.dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: left;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.75rem;
}

.dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
}
.dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon .dapp-core-component__transactionStatusToastStyles__svg {
  height: auto;
  width: 40px;
}
.dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon .dapp-core-component__transactionStatusToastStyles__svg path {
  fill: #fff;
}

.dapp-core-component__transactionStatusToastStyles__toasts {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 9999;
  font-family: "Helvetica", sans-serif;
}
.dapp-core-component__transactionStatusToastStyles__toasts.dapp-core-component__transactionStatusToastStyles__toastWrapper {
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  background-color: #fff;
  position: relative;
}
@media (min-width: 768px) {
  .dapp-core-component__transactionStatusToastStyles__toasts {
    right: 2rem;
    bottom: 2rem;
    width: 22.5rem;
    left: auto;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vg));zw={"transactions-status-toast":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast",transactionsStatusToast:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast","transactions-status-toast-content":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content",transactionsStatusToastContent:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content","transactions-status-toast-icon":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",transactionsStatusToastIcon:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",svg:"dapp-core-component__transactionStatusToastStyles__svg",toasts:"dapp-core-component__transactionStatusToastStyles__toasts",toastWrapper:"dapp-core-component__transactionStatusToastStyles__toastWrapper"}});var ss={};G(ss,{css:()=>qg,default:()=>nA});var qg,nA,ps=b(()=>{"use strict";n();qg=`.dapp-core-component__signWaitingScreenModal-styles__extension-modal {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__modal-container {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__extension {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qg));nA={"extension-modal":"dapp-core-component__signWaitingScreenModal-styles__extension-modal",extensionModal:"dapp-core-component__signWaitingScreenModal-styles__extension-modal","modal-container":"dapp-core-component__signWaitingScreenModal-styles__modal-container",modalContainer:"dapp-core-component__signWaitingScreenModal-styles__modal-container",extension:"dapp-core-component__signWaitingScreenModal-styles__extension"}});var aA={};G(aA,{SignWithLedgerModal:()=>rA});module.exports=F(aA);n();n();var ds=x(require("react"));n();n();n();var Cm=require("react"),Ln=require("react-redux");n();var ii=require("@reduxjs/toolkit"),km=require("react-redux/lib/utils/Subscription");H();n();var sm=x(require("lodash.throttle"));N();H();qa();Sn();yn();var DT=[qt],ur=!1,NT=(0,sm.default)(()=>{ot(et())},5e3),pm=e=>o=>t=>{if(DT.includes(t.type))return o(t);let r=e.getState(),s=Xe.local.getItem(Pe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(s==null)return ot(et());let m=Date.now();return s-m<0&&!ur?setTimeout(()=>{ur=!0,e.dispatch(vp())},1e3):(ur&&(ur=!1),NT()),o(t)};n();n();function fr(){return typeof sessionStorage!="undefined"}var wm=fr()?(fm(),F(um)).default:(hm(),F(gm)).default,Am=fr()?(xm(),F(Tm)).default:[],Im=fr()?(vm(),F(bm)).default:e=>e;gr();var C=(0,ii.configureStore)({reducer:wm,middleware:e=>e({serializableCheck:{ignoredActions:[...Am,$a.type,Xt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(pm)}),Lm=(0,km.createSubscription)(C),mC=Im(C),dC=(0,ii.configureStore)({reducer:jo});var ex={store:C,subscription:Lm},ci=(0,Cm.createContext)(ex),fC=(0,Ln.createStoreHook)(ci),J=(0,Ln.createDispatchHook)(ci),D=(0,Ln.createSelectorHook)(ci);n();n();H();n();var Dm=x(require("lodash.isequal")),hr=require("reselect"),A=(0,hr.createSelectorCreator)(hr.defaultMemoize,Dm.default);var Ye=e=>e.account,mo=A(Ye,e=>e.address),Ko=A(Ye,mo,(e,o)=>o in e.accounts?e.accounts[o]:Kt),Nm=A(Ye,Ko,(e,o)=>{let s=e,{accounts:t}=s,r=Ne(s,["accounts"]);return k(g({},r),{address:o.address,account:o})}),yC=A(Ko,e=>e.balance),Pm=A(Ko,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),SC=A(Ye,e=>e.shard),ox=A(Ye,e=>e.ledgerAccount),bC=A(Ye,e=>e.walletConnectAccount),vC=A(Ye,e=>e.isAccountLoading),wC=A(Ye,e=>e.accountLoadingError),nx=A(Ye,e=>e.websocketEvent),tx=A(Ye,e=>e.websocketBatchEvent);n();var Tr=e=>e.dappConfig,kC=A(Tr,e=>e.shouldUseWebViewProvider);n();var le=e=>e.loginInfo,rx=A(le,e=>e.loginMethod),Xo=A(le,mo,(e,o)=>Boolean(o)),NC=A(le,e=>e.walletConnectLogin),Em=A(le,e=>e.ledgerLogin),Mm=A(le,e=>e.walletLogin),PC=A(le,e=>e.isLoginSessionInvalid),si=A(le,e=>e.tokenLogin),pi=A(le,e=>e.logoutRoute),ax=A(le,e=>e.isWalletConnectV2Initialized);n();var Rm=e=>e.modals,RC=A(Rm,e=>e.txSubmittedModal),ix=A(Rm,e=>e.notificationModal);n();var Le=e=>e.networkConfig,xr=A(Le,e=>e.network.chainId),cx=A(Le,e=>e.network.roundDuration),FC=A(Le,e=>e.network.walletConnectBridgeAddress),sx=A(Le,e=>e.network.walletConnectV2RelayAddress),px=A(Le,e=>e.network.walletConnectV2ProjectId),mx=A(Le,e=>e.network.walletConnectV2Options),dx=A(Le,e=>e.network.walletConnectDeepLink),ue=A(Le,e=>e.network),mi=A(ue,e=>e.apiAddress),Wm=A(ue,e=>e.explorerAddress),di=A(ue,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),_x=A(ue,e=>e.xAliasAddress),yr=A(ue,e=>e.egldLabel);n();var Sr=e=>e.signedMessageInfo,GC=A(Sr,e=>e.isSigning),HC=A(Sr,e=>e.errorMessage),VC=A(Sr,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),$C=A(Sr,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Om=e=>e.toasts,lx=A(Om,e=>e.customToasts),Fm=A(Om,e=>e.transactionToasts);n();H();var Bm={errorMessage:Ja,successMessage:Qa,processingMessage:ei},Um=e=>e.transactionsInfo,ux=A(Um,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Bm);n();n();var Ze=require("@multiversx/sdk-core");N();n();var _i=require("@multiversx/sdk-core/out");n();n();function ct(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),s=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===s||s.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function Yo(e){return ct(e)?atob(e):e}n();n();function br(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}function Zo(e){let o=e;try{let t=a.Buffer.from(e,"hex").toString();br(t)&&t.length>1&&(o=t)}catch(t){}return o}n();n();var Gm=e=>{let o=e!=null?e:"";return ct(o)?_i.TransactionPayload.fromEncoded(o):new _i.TransactionPayload(o)};n();N();var Jo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(va).some(t=>e.startsWith(t)):!1;function st(e){var r,s,p;let o=g({},e);Jo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new Ze.Transaction(g(g(k(g(k(g({value:o.value.valueOf(),data:Gm(o.data),nonce:o.nonce.valueOf(),receiver:new Ze.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Ze.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Zn,gasPrice:(s=o.gasPrice.valueOf())!=null?s:Jn,chainID:o.chainID.valueOf(),version:new Ze.TransactionVersion((p=o.version)!=null?p:tp)}),o.options?{options:new Ze.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Ze.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();N();function fx(e,o){let t=new URLSearchParams(e),r=Object.fromEntries(t);return{nextUrlParams:new URLSearchParams(g(g({},r),o)).toString(),params:r}}var gx="3.1.0";function li({callbackUrl:e,urlParams:o={}}){let t=e;if(Object.entries(o).length>0)try{let{search:r,origin:s,pathname:p,hash:m}=new URL(e),d=k(g({},o),{[$t]:gx}),{nextUrlParams:_}=fx(r,d);t=`${s}${p}?${_}${m}`}catch(r){return console.error("Unable to construct URL from: ",e,r),t}return t}n();n();n();var Tx=require("@multiversx/sdk-core/out");n();N();n();var pt=require("@multiversx/sdk-core");j();n();var Hm=require("@multiversx/sdk-core");function xx(e){try{let o=new Hm.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Lo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&xx(e)}var yx=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function ui(e,o,t=""){if(!Lo(e))return!1;if(new pt.Address(e).isContractAddress())return!0;let p=Vm({receiver:e,data:t});return p?new pt.Address(p).isContractAddress()||vx(e,o,t):!1}var Sx=e=>e.toLowerCase().match(/[0-9a-f]/g),bx=e=>e.length%2===0;function vx(e,o,t){let r=t==null?void 0:t.split("@");if(r==null)return!1;let[s,...p]=r,m=o!=null&&e!=null&&e===o,d=yx.includes(s),_=p.every(l=>Sx(l)&&bx(l));return m&&d&&_}function Vm({receiver:e,data:o}){try{if(!o)return e;let t=ct(o)?pt.TransactionPayload.fromEncoded(o).toString():o,r=wx(t),s=t.split("@");return r>-1?s[r]:e}catch(t){console.log(t);return}}function wx(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var gi=require("@multiversx/sdk-core"),vr=x(require("bignumber.js"));z();var fi={tokenId:"",amount:""},$m=e=>e.split("@").map((p,m)=>[2,3].includes(m)?p:Zo(p));function hi(e){if(!e)return fi;let o=e.startsWith("ESDTTransfer"),t=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),r=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(o){let[,s,p]=e.split("@");try{let m=a.Buffer.from(s,"hex").toString("ascii");if(!m)return fi;let d=new vr.default("0x"+p.replace("0x","")).toString(10);return{tokenId:m,amount:d}}catch(m){console.error("Error getting token from transaction data",m)}}if(t)try{let[,s,p,m,d]=$m(e);if([s,p,m,d].every(_=>Boolean(_))&&Lo(new gi.Address(d).bech32()))return{tokenId:`${s}-${p}`,amount:new vr.default(m,16).toString(10),collection:s,nonce:p,receiver:new gi.Address(d).bech32()}}catch(s){}if(r)try{let[,s,p,m]=$m(e);if([s,p,m].every(d=>Boolean(d)))return{tokenId:`${s}-${p}`,amount:new vr.default(m,16).toString(10),collection:s,nonce:p}}catch(s){}return fi}n();n();n();var me="accounts";var wr="blocks",zm="code",jm="collections";var Km="contracts",mt="economics",Xm="identities";var Ym="locked-accounts",Zm="logs",Jm="miniblocks";var dt="nfts",Qm="nodes",Ti="providers",ed="roles",xi="sc-results";var Co="tokens";var Me="transactions";var _t={shard:e=>`/${wr}?shard=${e}`,receiverShard:e=>`/${Me}?receivershard=${e}`,senderShard:e=>`/${Me}?sendershard=${e}`,transactionDetails:e=>`/${Me}/${e}`,transactionDetailsScResults:e=>`/${Me}/${e}/${xi}`,transactionDetailsLogs:e=>`/${Me}/${e}/${Zm}`,nodeDetails:e=>`/${Qm}/${e}`,accountDetails:e=>`/${me}/${e}`,accountDetailsContractCode:e=>`/${me}/${e}/${zm}`,accountDetailsTokens:e=>`/${me}/${e}/${Co}`,accountDetailsNfts:e=>`/${me}/${e}/${dt}`,accountDetailsScResults:e=>`/${me}/${e}/${xi}`,accountDetailsContracts:e=>`/${me}/${e}/${Km}`,identityDetails:e=>`/${Xm}/${e}`,tokenDetails:e=>`/${Co}/${e}`,tokenDetailsAccounts:e=>`/${Co}/${e}/${me}`,tokenDetailsLockedAccounts:e=>`/${Co}/${e}/${Ym}`,tokenDetailsRoles:e=>`/${Co}/${e}/${ed}`,collectionDetails:e=>`/${jm}/${e}`,nftDetails:e=>`/${dt}/${e}`,providerDetails:e=>`/${Ti}/${e}`,providerDetailsTransactions:e=>`/${Ti}/${e}/${Me}`,miniblockDetails:e=>`/${Jm}/${e}`};n();n();n();n();he();n();var od=!1;function kx(e){od||(console.error(e),od=!0)}function lt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(kx(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();he();n();n();n();var Lx=x(require("bignumber.js"));N();n();var rd=require("@multiversx/sdk-core"),Do=x(require("bignumber.js"));N();n();var td=x(require("bignumber.js")),Ir=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let r=new td.default(t),s=o?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=s};n();function _o(e){return{if:function(o){return o?{then:t=>t instanceof Function?_o(t(e)):_o(t)}:{then:()=>_o(e)}},then:o=>o instanceof Function?_o(o(e)):_o(o),valueOf:function(){return e}}}Do.default.config({ROUNDING_MODE:Do.default.ROUND_FLOOR});function Re({input:e,decimals:o=Ae,digits:t=Vo,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:s=!1,addCommas:p=!1}){if(!Ir(e,!1))throw new Error("Invalid input");let m=new Do.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),_o(d).then(()=>rd.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(_=>{let l=new Do.default(_);if(l.isZero())return Ie;let u=l.toString(10),[f,y]=u.split("."),v=new Do.default(y||0),T=_o(0).if(Boolean(y&&r)).then(()=>Math.max(y.length,t)).if(v.isZero()&&!r).then(0).if(Boolean(y&&!r)).then(()=>Math.min(y.length,t)).valueOf(),P=y&&t>=1&&t<=y.length&&v.isGreaterThan(0)&&new Do.default(y.substring(0,t)).isZero(),I=l.toFormat(T);return _o(u).if(p).then(I).if(Boolean(P)).then(R=>{let W=new Do.default(f).isZero(),[E,V]=R.split("."),q=new Array(t-1).fill(0),X=[...q,0].join(""),oe=[...q,1].join("");return W?s?`<${E}.${oe}`:r?`${E}.${V}`:E:`${E}.${X}`}).if(Boolean(!P&&y)).then(R=>{let[W]=R.split("."),E=y.substring(0,T);if(r){let V=t-E.length;if(V>0){let q=Array(V).fill(0).join("");return E=`${E}${q}`,`${W}.${E}`}return R}return E?`${W}.${E}`:W}).valueOf()}).if(m).then(_=>`-${_}`).valueOf()}n();n();n();N();n();n();n();n();N();n();N();n();var Cx=require("@multiversx/sdk-core");N();n();var We=require("@multiversx/sdk-core"),cd=x(require("bignumber.js"));N();n();n();var yi=x(require("bignumber.js"));N();var ad=e=>{if(isNaN(e)||e==null||String(e).includes("Infinity"))return!1;let[o,t]=e.split("."),r=yi.default.clone();if(t){let d=t.split("").every(_=>!isNaN(parseInt(_)));for(r.set({DECIMAL_PLACES:d?t.length:yi.default.config().DECIMAL_PLACES});t.charAt(t.length-1)===Ie;)t=t.slice(0,-1)}let s=t?[o,t].join("."):o,p=r(s);return p.toString(10)===s&&p.comparedTo(0)>=0};n();N();n();var Si={isEsdt:!1,isNft:!1,isEgld:!1};function bi(e){let o=e==null?void 0:e.split("-").length;return o===2?k(g({},Si),{isEsdt:!0}):o===3?k(g({},Si),{isNft:!0}):k(g({},Si),{isEgld:!0})}var id={from:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",to:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"};function vi({minGasLimit:e=String(Zn),gasLimit:o,gasPrice:t,data:r,gasPerDataByte:s,gasPriceModifier:p,defaultGasPrice:m=String(Jn),chainId:d}){let _=r||"",l=Ir(o)?o:e,u=Jo({data:_})?Oa:0,f=new cd.default(l).plus(u).toNumber(),y=ad(t)?t:m,v=new We.Transaction({nonce:0,value:We.TokenPayment.egldFromAmount("0"),receiver:new We.Address(id.to),sender:new We.Address(id.to),gasPrice:parseInt(y),gasLimit:f,data:new We.TransactionPayload(_.trim()),chainID:d,version:new We.TransactionVersion(1)});try{return v.computeFee({GasPerDataByte:parseInt(s),MinGasLimit:parseInt(e),GasPriceModifier:parseFloat(p),ChainID:d}).toString(10)}catch(T){return console.error(T),Ie}}n();var kr=({amount:e,usd:o,decimals:t=2,addEqualSign:r})=>{let s=(parseFloat(e)*o).toFixed(t),p=parseFloat(s).toLocaleString("en",{maximumFractionDigits:t,minimumFractionDigits:t}),m=parseFloat(e)>0?"\u2248":"=";return`${r?`${m} `:""}$${p}`};n();n();n();n();N();function Dx(e,o){let t,r,s=/(\.0+)+$/,p=e.replace(s,"").split("."),m=o.replace(s,"").split("."),d=Math.min(p.length,m.length);for(t=0;t<d;t++)if(r=parseInt(p[t],10)-parseInt(m[t],10),r)return r;return p.length-m.length}function sd(e){let o=[wa,Aa,Ia,ka,Yn,La,e].sort((l,u)=>Dx(l,u)),t=o.indexOf(wa),r=o.indexOf(Aa),s=o.indexOf(Ia),p=o.indexOf(ka),m=o.indexOf(Yn),d=o.indexOf(La),_=o.indexOf(e);return{ledgerWithMultiAccount:_>=t,ledgerWithHashSign:_>=r,ledgerWithSignAuthToken:_>=s,ledgerWithWhitelistedTokens:_>=p,ledgerWithGuardians:_>=m,ledgerWithUsernames:_>=d}}n();N();var pd=({feeLimit:e,egldPriceInUsd:o,hideEqualSign:t})=>{let r=Re({input:e,decimals:Ae,digits:Vo,showLastNonZeroDecimal:!0}),s=kr({amount:r,usd:o,decimals:Vo});return t?s:`\u2248 ${s}`};n();N();n();he();var Nx=["reDelegateRewards","claimRewards","unBond"],Px=["wrapEgld","unwrapEgld"],Ex=["unStake"],Mx=["unDelegate"];n();n();n();N();n();var Ox=x(require("bignumber.js"));n();n();he();n();var Bx=x(require("bignumber.js"));n();n();var md=({data:e,highlight:o,occurrences:t,transactionIndex:r})=>{let s=t[r]||e.indexOf(o),p=o.length,m=e.slice(0,s),d=e.slice(s+p);return{start:m,end:d}};n();function dd({tokenId:e,erdLabel:o}){return Boolean(e&&e!==o)}n();var Ai=x(require("bignumber.js"));j();n();var _d=(e,o)=>{let t=[],r=e.indexOf(o,0);for(;r>=0;)t.push(r),r=e.indexOf(o,r+1);return t};function ld(e){let o=[],t=0;try{if((e==null?void 0:e.startsWith("MultiESDTNFTTransfer"))&&(e==null?void 0:e.includes("@"))){let[,r,s,...p]=e==null?void 0:e.split("@");if(r){let m=new Ai.default(s,16).toNumber();if(m>=Number.MAX_SAFE_INTEGER)return[];let d=0;for(let f=0;f<m;f++){let y={type:"nftTransaction",data:"",receiver:r};for(let v=0;v<3;v++){switch(v){case 0:y.token=Zo(p[d]),y.data=p[d];break;case 1:{let T=p[d]&&p[d].length?p[d]:"";T&&T!=="00"?y.nonce=T:y.type="esdtTransaction",y.data=`${y.data}@${p[d]}`;break}case 2:y.amount=new Ai.default(p[d],16).toString(10),y.data=`${y.data}@${p[d]}`;break;default:break}t=d+1,d++}o[f]=y}let _=o.length!==m,l=o.some(f=>_d(f.data,"@").length!==2),u=o.some(f=>f.data.startsWith("@"));if(_||l||u)return[];if(p[t]){let f=p[t];for(let y=t+1;y<p.length;y++)f+="@"+p[y];o[m]={type:"scCall",data:f,receiver:r}}}}}catch(r){return console.error("failed parsing tx",r),o}return o}n();n();n();z();function Cn(e){let t=Object.getPrototypeOf(e).toPlainObject!=null?e:st(e),r=k(g({},t.toPlainObject()),{hash:t.getHash().hex(),senderUsername:t.getSenderUsername().valueOf(),receiverUsername:t.getReceiverUsername().valueOf(),status:"pending"});return Jo({data:r.data,onlySetGuardian:!0})&&(delete r.senderUsername,delete r.receiverUsername),r}n();var gd=require("@multiversx/sdk-web-wallet-provider");N();n();var fd=x(require("qs"));n();se();var Cr=e=>{let o=new URLSearchParams(e).toString(),{pathname:t,hash:r}=B(),s=o?`?${o}`:"",p=t?`${t}${s}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};$o();n();$o();var Gx={search:Ee()?window.location.search:"",removeParams:[]},ud=(e,o=Gx)=>{var m;let t={},r=Ee()?window.location.search:"",s=(m=o.search)!=null?m:r;if(s){let d=s?new URLSearchParams(s):[];t=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=t[d],delete t[d]}),o.removeParams!=null&&Object.keys(t).forEach(d=>{var l,u;let[_]=d.split("[");(((l=o.removeParams)==null?void 0:l.includes(d))||((u=o.removeParams)==null?void 0:u.includes(_)))&&delete t[d]}),{remainingParams:p,params:t,clearNavigationHistory:()=>Cr(t)}};var Dr=({removeParams:e,search:o})=>{let t=Ee()?window.location.search:"",r=o!=null?o:t;if(!r)return{};let s=fd.default.parse(r.replace("?","")),p=Object.keys(s).filter(d=>!e.includes(d)),{remainingParams:m}=ud(p,{search:o,removeParams:e});return Cr(m),m};var hd=({transaction:e,search:o})=>Dr({removeParams:[...Object.keys(e),gd.WALLET_PROVIDER_CALLBACK_PARAM,co,$t],search:o});n();n();n();ce();n();he();n();n();ce();n();var Hx=x(require("linkifyjs"));n();N();n();var Vx=x(require("bignumber.js"));n();j();n();n();z();n();z();n();n();n();he();n();he();n();var $x=x(require("bignumber.js"));N();he();n();he();n();var Sd=require("react");j();n();n();he();n();n();var Td=require("@multiversx/sdk-core/out"),Ii=x(require("bignumber.js"));he();var lo=(e,o,t)=>{switch(o){case"text":try{return a.Buffer.from(e,"hex").toString("utf8")}catch(r){}return e;case"decimal":return e!==""?new Ii.default(e,16).toString(10):"";case"smart":try{let r=Td.Address.fromHex(e).toString();if(Lo(r))return r}catch(r){}try{let r=a.Buffer.from(e,"hex").toString("utf8");if(br(r))return r;{if(t&&[...t.esdts,...t.nfts].some(m=>r.includes(m)))return r;let s=new Ii.default(e,16);return s.isFinite()?s.toString(10):e}}catch(r){}return e;case"raw":default:return e}};n();j();n();var qx=e=>e.toLowerCase().match(/^[0-9a-f]+$/i),zx=e=>e.length%2===0,xd=e=>{let o=[];return e&&!qx(e)&&o.push(`Invalid Hex characters on argument @${e}`),e&&!zx(e)&&o.push(`Odd number of Hex characters on argument @${e}`),o};n();j();var Nr=({parts:e,decodedParts:o,identifier:t})=>{let r=[...o];if(e[0]==="ESDTNFTTransfer"&&e[2]&&(r[2]=lo(e[2],"decimal")),t==="ESDTNFTTransfer"&&e[1]){let s=a.Buffer.from(String(e[1]),"base64");r[1]=lo(s.toString("hex"),"decimal")}return r};var yd=({parts:e,decodeMethod:o,identifier:t,display:r})=>{let s=e.map((m,d)=>{if(e.length>=2&&(d===0&&m.length<64||d===1&&!e[0]))return/[^a-z0-9]/gi.test(m)?lo(m,o):m;{let _=xd(m);return _.length&&(r.validationWarnings=Array.from(new Set([...r.validationWarnings,..._]))),lo(m,o)}});return o==="smart"?Nr({parts:e,decodedParts:s,identifier:t}):s};var ki=({input:e,decodeMethod:o,identifier:t})=>{let r={displayValue:"",validationWarnings:[]};if(!e.includes("@")&&!e.includes(`
`))return r.displayValue=lo(e,o),r;if(e.includes("@")){let s=e.split("@"),p=yd({parts:s,identifier:t,decodeMethod:o,display:r});r.displayValue=p.join("@")}if(e.includes(`
`)){let s=e.split(`
`),p=s.map(d=>{let _=a.Buffer.from(d,"base64");return o==="raw"?d:lo(_.toString("hex"),o)}),m=o==="smart"?Nr({parts:s,decodedParts:p,identifier:t}):p;r.displayValue=m.join(`
`)}return r};var G2=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var bd=require("react");j();ce();n();var jx=require("react");he();var X2=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];kn();n();var Pr=e=>e.transactions,Dn=A(Pr,e=>e.signedTransactions),Kx=A(Pr,e=>e.signTransactionsError),Li=A(Pr,e=>e.signTransactionsCancelMessage),Er=e=>o=>Object.entries(o).reduce((t,[r,s])=>(e(s.status)&&(t[r]=s),t),{}),vd=A(Dn,Er(wn)),wd=A(Dn,Er(An)),Ad=A(Dn,Er(In)),Xx=A(Dn,Er(oi)),Mr=A(Pr,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:k(g({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>st(t)))||[]})}),Yx=A(Dn,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var uo=()=>D(Le);n();var Id=require("react");n();H();n();n();n();n();n();n();n();n();var Ld=require("@multiversx/sdk-extension-provider"),Cd=require("@multiversx/sdk-hw-provider"),Dd=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Nd=require("@multiversx/sdk-opera-provider"),Pd=require("@multiversx/sdk-passkey-provider/out"),Di=require("@multiversx/sdk-web-wallet-provider");N();Ao();n();var fo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),kd=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");z();n();var Ci=Nn;var Zx="/dapp/init",go=e=>{switch(e==null?void 0:e.constructor){case Di.WalletProvider:return"wallet";case Ci:return"walletconnectv2";case Cd.HWProvider:return"ledger";case Ld.ExtensionProvider:return"extension";case Pd.PasskeyProvider:return"passkey";case Dd.MetamaskProvider:return"metamask";case Nd.OperaProvider:return"opera";case we.CrossWindowProvider:return"crossWindow";case fo.IframeProvider:return"iframe";case Nn:return"";default:return"extra"}},Ni=e=>new Di.WalletProvider(`${e}${Zx}`),Pi=e=>S(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:t,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:t===rp}}),Oe=e=>`Unable to perform ${e}, Provider not initialized`,Nn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Oe("getAccount"))}setAccount(o){throw new Error(Oe(`setAccount: ${o}`))}login(o){throw new Error(Oe(`login with options: ${o}`))}logout(o){throw new Error(Oe(`logout with options: ${o}`))}getAddress(){throw new Error(Oe("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(Oe(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(Oe(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(Oe(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(Oe(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(Oe(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(Oe(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Rr=new Nn;var Ei=Rr,Ed=null;function ho(e){Ei=e}function Md(){Ed!=null&&(Ei=Ed)}function Se(){return Ei||Rr}H();n();n();n();n();n();var Rd=require("@lifeomic/axios-fetch"),Mi=x(require("axios")),Ri=(0,Rd.buildAxiosFetch)(Mi.default),Wi=(e,o)=>S(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[s]=yield Promise.all([r]);return{data:s,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Jx(e,o,t){return S(this,null,function*(){try{let r=yield Ri(e,g({method:"POST",body:o?JSON.stringify(o):void 0,headers:g({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Wi(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function Qx(e,o){return S(this,null,function*(){try{let t=yield Ri(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Wi(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function ey(e,o,t){return S(this,null,function*(){try{let r=yield Ri(e,g({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Wi(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var To=Mi.default.create();To.get=Qx;To.post=Jx;To.patch=ey;var Wd=e=>To.get(e).then(o=>o.data);n();var Qo=e=>{let o=e!=null?e:mi(C.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var Od=x(require("axios"));function Fd(e){return S(this,null,function*(){let{network:{apiAddress:o,apiTimeout:t}}=Le(C.getState()),{data:r}=yield Od.default.get(`${o}/${me}/${e}`,{timeout:Number(t)});return r})}n();var Bd=x(require("swr"));var Pn=({apiEndpoint:e})=>{let o=Qo(),t=e?`${o}/${e}`:null;return(0,Bd.default)(t,Wd)};var oy=e=>{let t=`${Qo()}/${me}/${e}?withGuardianInfo=true`;return To.get(t)},Ud=e=>S(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield oy(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var En=e=>Ud(e);n();z();n();n();function Gd(){let e=Se();return go(e)}function No(e){return Gd()===e}n();ce();var Hd=()=>{let{search:e}=B(),o=new URLSearchParams(e),t=Object.fromEntries(o),r=t==null?void 0:t.address;return Lo(r)?r:null};function Wr(){let e=C.getState(),o=Se(),t=mo(e),r=Xo(e),s=Mm(e);if(!o)throw"provider not initialized";return No("ledger")&&r?new Promise(p=>{p(t)}):!No("")&&!No("wallet")&&!No("extra")?o.getAddress():new Promise(p=>{let m=Hd();s!=null&&m&&p(m),r&&p(t),p("")})}n();function ut(e){let o=C.getState(),t=Pm(o);return e?t&&!isNaN(t)?Math.max(t,e.nonce):e.nonce:t}kn();n();n();n();var ny=x(require("axios"));n();var ry=x(require("axios"));Tn();n();N();n();var ay=x(require("axios"));n();var cy=x(require("axios"));n();n();var sy=x(require("axios"));n();var py=x(require("axios"));n();n();H();z();n();n();n();n();ce();var $d=()=>{let{search:e}=B(),o=new URLSearchParams(e),t=Object.fromEntries(o);return t==null?void 0:t.accessToken};var qd=()=>{var t;let e=$d(),o=le(C.getState());return e!=null?e:(t=o.webviewLogin)==null?void 0:t.data};n();K();j();n();H();n();var zd=require("@multiversx/sdk-core");j();se();n();kn();n();H();z();n();H();j();n();n();n();j();n();Ht();n();n();n();n();var Kd=x(require("swr"));n();n();var Or={},Oi={setItem:(e,o)=>S(void 0,null,function*(){try{Or[e]=JSON.stringify(o)}catch(t){console.error("tokenDataStorage unable to serialize",t)}}),getItem:e=>S(void 0,null,function*(){try{return JSON.parse(Or[e])}catch(o){console.error("tokenDataStorage unable to parse",o)}}),clear:()=>S(void 0,null,function*(){Or={}}),removeItem:e=>S(void 0,null,function*(){delete Or[e]})};function jd(e){return S(this,null,function*(){let{apiAddress:o,apiTimeout:t}=ue(C.getState()),r={baseURL:o,timeout:Number(t)},s=yield Oi.getItem(e);if(s)return s;let p=yield To.get(e,r);return yield Oi.setItem(e,p.data),p.data})}function Xd({tokenId:e}){var f,y,v,T;let{network:o}=uo(),{isNft:t}=bi(e),r=e,s=t?dt:Co,{data:p,error:m,isLoading:d}=(0,Kd.default)(Boolean(r)?`${o.apiAddress}/${s}/${r}`:null,jd);if(!r)return{tokenDecimals:Number(o.decimals),tokenLabel:"",tokenAvatar:""};let _=p?p==null?void 0:p.decimals:Number(o.decimals),l=p?p==null?void 0:p.name:"",u=p?(T=(f=p==null?void 0:p.assets)==null?void 0:f.svgUrl)!=null?T:(v=(y=p==null?void 0:p.media)==null?void 0:y[0])==null?void 0:v.thumbnailUrl:"";return{isLoading:d,tokenDecimals:_,tokenLabel:l,type:p==null?void 0:p.type,tokenAvatar:u,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}n();n();var ft=require("react");n();function Yd({parsedTransactionsByDataField:e,data:o,txInfo:t}){!e||(e[o]=t)}function Zd({transactions:e}){let o={},t=[];return!e||e.length===0?{allTransactions:t,parsedTransactionsByDataField:o}:(e.forEach((r,s)=>{let p=r.getData().toString(),m=ld(p);if(m.length>0)m.forEach((d,_)=>{let l={transaction:r,multiTxData:d.data,transactionIndex:_};Yd({parsedTransactionsByDataField:o,data:d.data,txInfo:{tokenId:d.token?d.token:"",amount:d.amount?d.amount:"",type:d.type,nonce:d.nonce?d.nonce:"",multiTxData:d.data,receiver:d.receiver}}),t.push(l)});else{let d=r.getData().toString(),{tokenId:_,amount:l}=hi(d);_&&Yd({parsedTransactionsByDataField:o,data:d,txInfo:{tokenId:_,amount:l,receiver:r.getReceiver().bech32()}}),t.push({transaction:r,transactionIndex:s,multiTxData:d})}}),{allTransactions:t,parsedTransactionsByDataField:o})}var Jd={tokenId:"",amount:"",type:"",multiTxData:"",receiver:""};function Qd({transactions:e}){let[o,t]=(0,ft.useState)({}),[r,s]=(0,ft.useState)([]);function p(d,_){return o==null?Jd:d in o?o[d]:_!=null&&String(_)in o?o[_]:Jd}function m(){let{allTransactions:d,parsedTransactionsByDataField:_}=Zd({transactions:e});s(d),t(_)}return(0,ft.useEffect)(()=>{m()},[e==null?void 0:e.length]),{parsedTransactionsByDataField:o,getTxInfoByDataField:p,allTransactions:r}}n();var e_=require("react"),o_=require("@multiversx/sdk-web-wallet-provider"),n_=require("@multiversx/sdk-web-wallet-provider"),t_=x(require("qs"));N();H();z();Ea();ce();var _y=B();function Fi(e){let o=D(ue),t=J(),{shouldFetchWalletUrlOnLoad:r}=D(Tr),{search:s}=r?_y:B();(0,e_.useEffect)(()=>{if(s!=null){let p=t_.default.parse(s.replace("?",""));if(p&&co in p){let m=String(p[co]),d=new o_.WalletProvider(`${o.walletAddress}${ap}`).getTransactionsFromWalletUrl(s);if(p.status==="cancelled"){t(zo({sessionId:m,status:"cancelled"})),e(),Dr({removeParams:[...Object.keys(Pa),n_.WALLET_PROVIDER_CALLBACK_PARAM,co,"address"],search:s}),t(ko(Xn));return}if(d.length>0){t(zo({sessionId:m,status:"signed",transactions:d.map(l=>Cn(l))}));let[_]=d;hd({transaction:_,search:s})}}}},[s])}n();var on=require("react"),nn=require("@multiversx/sdk-core");n();var en=e=>Pn({apiEndpoint:e?`${me}/${e}?withGuardianInfo=true`:null});N();Ka();n();n();var Bi=(e,o)=>e?Array.isArray(o)?o.some(t=>e.address===t||e.activeGuardianAddress===t):e.address===o||e.activeGuardianAddress===o:!0;n();function Ui(e){let o=Mr(C.getState()),t=Object.keys(e).length===(o==null?void 0:o.transactions.length);return e&&(e&&t)}n();n();n();var Gi=({accountNonce:e,transactionNonce:o})=>o&&o>e?o:e;var r_=({latestNonce:e,transactions:o})=>o.length===0?o:o.map((t,r)=>{let s=e+r,p=t.getNonce().valueOf(),m=Gi({accountNonce:s,transactionNonce:p});return t.setNonce(m),t});var Hi=()=>{let e=D(mo),{data:o}=en(e);return t=>S(void 0,null,function*(){let r=o!=null?o:yield En(e),s=ut(r);return r_({latestNonce:s,transactions:t})})};n();var gt=({transactions:e,isGuarded:o})=>o?e.length===0?!1:e.every(t=>Boolean(t.getGuardianSignature().toString("hex"))):!0;n();n();n();Tn();n();var fy=x(require("axios"));n();var hy=x(require("axios"));n();Tn();n();Tn();function Vi(e){return Qs[e]}n();n();n();n();var Ty=require("@multiversx/sdk-opera-provider");n();var xy=require("@multiversx/sdk-extension-provider");n();Ao();function a_(t){return S(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield we.CrossWindowProvider.getInstance().init(),s=we.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return s;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}n();n();n();n();var v_=x(b_());var xt=e=>{if(!e||!(0,v_.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,r,s,p]=o,m=JSON.parse(Yo(p)),d=Yo(t);return{ttl:Number(s),extraInfo:m,origin:d,blockHash:r}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var jy=require("@multiversx/sdk-native-auth-client");n();var I_=x(require("axios"));n();n();n();function w_(e){return S(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var A_=(e,o,t,r=0)=>S(void 0,null,function*(){try{return yield e(...t)}catch(s){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield w_(o.delay)),yield A_(e,o,t,r+1)):null}}),zi=(e,o={retries:5,delay:500})=>(...t)=>S(void 0,null,function*(){return yield A_(e,o,t)});var $y=4;var U6=zi((e,o,t)=>S(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield I_.default.get(`${e}/${wr}?from=${$y}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[s]=r;return s}));n();n();zt();n();function qy(e){return Object.prototype.toString.call(e)==="[object String]"}var ji=e=>{var t;if(!e||!qy(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,s,p]=o,m=Yo(r),d=Yo(s),_=xt(d);if(!_)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let l=k(g({},_),{address:m,body:d,signature:p});return(t=_.extraInfo)!=null&&t.timestamp||delete l.extraInfo,l}catch(r){return null}};n();ce();var Y6={origin:B().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Xy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Yy=require("@multiversx/sdk-passkey-provider/out");N();ce();var Ki=({transactions:e,hasGuardianScreen:o,callbackRoute:t,sessionId:r,walletAddress:s,isGuarded:p})=>{let m=gt({isGuarded:p,transactions:e}),d=e[0].getChainID().valueOf(),_=e[0].getSender().bech32().toString(),l=Vi(d),u=s!=null?s:Ho[l].walletAddress;return{needs2FaSigning:p?!o&&!m&&r:!1,sendTransactionsToGuardian:()=>{let T=Ni(u),P={[co]:String(r)},{origin:I}=B(),M=window!=null&&window.location?`${I}${t}`:`${t}`,R=li({callbackUrl:M,urlParams:P});T.guardTransactions(e,{callbackUrl:encodeURIComponent(R)})},guardTransactions:()=>S(void 0,null,function*(){let T=yield a_({address:_,walletUrl:u});return T==null||T.setShouldShowConsentPopup(!0),yield T==null?void 0:T.guardTransactions(e)})}};n();n();n();var D_=require("react"),Xi=require("@multiversx/sdk-hw-provider");n();K();j();n();function k_(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(t){}}}function L_(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Zy(e.path,e.caseSensitive,e.end),s=o.match(t);if(!s)return null;let p=s[0],m=p.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:r.reduce((l,u,f)=>{if(u==="*"){let y=d[f]||"";m=p.slice(0,p.length-y.length).replace(/(.)\/+$/,"$1")}return l[u]=Jy(d[f]||"",u),l},{}),pathname:p,pathnameBase:m,pattern:e}}function Zy(e,o=!1,t=!0){k_(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s+=t?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(s,o?void 0:"i"),r]}function Jy(e,o){try{return decodeURIComponent(e)}catch(t){return k_(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}tt();Sn();yn();se();var C_=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&nt({url:e})},Qy=e=>{let o=Xe.local.getItem(Pe.logoutEvent),{data:t}=o?JSON.parse(o):{data:e};e===t&&(Xe.local.setItem({key:Pe.logoutEvent,data:e,expires:0}),Xe.local.removeItem(Pe.logoutEvent))},eS=500;function Ur(s,p){return S(this,arguments,function*(e,o,t=Boolean(qd()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var T;let m="",d=Se(),_=go(d),l=_==="wallet",u=((T=d==null?void 0:d.isInitialized)==null?void 0:T.call(d))===!0;if(t&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield Wr(),Qy(m)}catch(P){console.error("error fetching logout address",P)}let f=bn(e),y=B(),v=new URL(decodeURIComponent(f)).pathname;if((L_(y.pathname,v)||l&&u)&&Pp(),!m&&!u)return C_({callbackUrl:f,onRedirect:o});try{if(C.dispatch($()),l)return setTimeout(()=>{d.logout({callbackUrl:f})},eS);r.hasConsentPopup&&_==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:f})}catch(P){console.error("Logging out error:",P)}finally{l||C_({callbackUrl:f,onRedirect:o})}})}var N_=()=>{let e=D(pi),o=D(Xo),t=D(Em),r=Se(),[s,p]=(0,D_.useState)(),m=()=>S(void 0,null,function*(){let _=(t==null?void 0:t.index)!=null;try{if(r instanceof Xi.HWProvider&&r.isInitialized())return _&&(yield r.setAddressIndex(t.index)),r;let l=new Xi.HWProvider;return(yield l.init())?(_&&(yield l.setAddressIndex(t.index)),l):null}catch(l){return console.error("Failed to initialise Ledger Provider"),null}});function d(_){return S(this,null,function*(){let l,u=o&&!(_!=null&&_.isRelogin);try{if(l=yield m(),!l){console.warn("Could not initialise ledger app"),u&&Ur(e);return}let f=yield Pi(l);return ho(l),p(f),l}catch(f){console.error("Could not initialise ledger app",f),u&&Ur(e)}return null})}return{setLedgerProvider:d,ledgerData:s}};n();var Je=()=>{let e=Se(),o=go(e);return{provider:e,providerType:o}};var P_=()=>{let{provider:e}=Je(),{setLedgerProvider:o}=N_();return function(){return S(this,null,function*(){let r;try{let p=yield e.getAddress();r=Boolean(p)}catch(p){r=!1}if(r)return e;let s=yield o({isRelogin:!0});return s||e})}};var Gr={},E_=({isLedger:e=!1,transactionsToSign:o,egldLabel:t,address:r,activeGuardianAddress:s,hasGuardianScreen:p,onCancel:m,onSignTransaction:d,onTransactionsSignError:_,onTransactionsSignSuccess:l,onGetScamAddressData:u})=>{var Mt,Rt,Wt,ln;let f=Boolean(s),[y,v]=(0,on.useState)(0),[T,P]=(0,on.useState)(),[I,M]=(0,on.useState)(null),[R,W]=(0,on.useState)(!1),{getTxInfoByDataField:E,allTransactions:V}=Qd({transactions:s?o==null?void 0:o.map(U=>{U.setSender(nn.Address.fromBech32(r)),U.setVersion(nn.TransactionVersion.withTxOptions()),U.setGuardian(nn.Address.fromBech32(s));let _e=g({guarded:!0},e?{hashSign:!0}:{});return U.setOptions(nn.TransactionOptions.withOptions(_e)),U}):o}),q=y===V.length-1,X=V[y],oe=(Mt=I==null?void 0:I.transaction)==null?void 0:Mt.getSender().toString(),{data:ie}=en(!oe||oe===r?null:oe),Y=()=>S(void 0,null,function*(){var _s;if(X==null)return;let{transaction:U,multiTxData:_e,transactionIndex:wo}=X,Wo=U.getData().toString(),Ge=E(U.getData().toString(),_e),{tokenId:Oo}=Ge,to=U.getReceiver().toString();if(oe&&oe!==r&&!Bi(ie,r))return console.error(ba),m==null?void 0:m();let Fo=r!==to,sa=to in Gr;if(to&&Fo&&!sa&&u!=null){let jn=yield u(to);Gr=g(g({},Gr),jn!=null&&jn.scamInfo?{[to]:jn.scamInfo}:{})}let zn=Boolean(Oo&&dd({tokenId:Oo,erdLabel:t}));M({transaction:U,receiverScamInfo:((_s=Gr[to])==null?void 0:_s.info)||null,transactionTokenInfo:Ge,isTokenTransaction:zn,dataField:Wo,transactionIndex:wo})});(0,on.useEffect)(()=>{Y()},[X,ie]);let de=()=>{v(0),P(void 0),W(!1)},Ue=()=>S(void 0,null,function*(){let U=Object.values(T!=null?T:{}),_e=gt({isGuarded:f,transactions:U});if(f&&_e){l(U),de();return}if(I==null)return;W(e);let wo;try{wo=yield d(I.transaction)}catch(Fo){console.error(Fo,"sign error");let{message:sa}=Fo,zn=e?ja(Fo).errorMessage:null;de(),_(zn!=null?zn:sa);return}if(!wo)return;let Wo={[y]:wo},Ge=T?g(g({},T),Wo):Wo;if(P(Ge),!q){v(Fo=>Fo+1),W(!1);return}if(!Ge)return;let Oo=Object.values(Ge);!gt({isGuarded:f,transactions:Oo})&&p||(l(Oo),de())}),ne=()=>S(void 0,null,function*(){try{if(I==null)return;if(I.transaction.getSignature().toString("hex")&&!q){v(_e=>_e+1);return}yield Ue()}catch(U){console.error("Error during signing transaction"),yield Ue()}}),Ce=y===0,De=()=>{Ce?m==null||m():v(U=>U-1)},no=Boolean(((Rt=I==null?void 0:I.transactionTokenInfo)==null?void 0:Rt.type)&&((Wt=I==null?void 0:I.transactionTokenInfo)==null?void 0:Wt.multiTxData)&&!(I!=null&&I.dataField.endsWith((ln=I==null?void 0:I.transactionTokenInfo)==null?void 0:ln.multiTxData)));return{allTransactions:V,onSignTransaction:()=>S(void 0,null,function*(){if(no){v(U=>U+1);return}yield ne()}),onNext:()=>{v(U=>{let _e=U+1;return _e>(V==null?void 0:V.length)?U:_e})},onPrev:()=>{v(U=>{let _e=U-1;return _e<0?U:_e})},waitingForDevice:R,onAbort:De,isLastTransaction:q,isFirstTransaction:y===0,hasMultipleTransactions:V.length>1,shouldContinueWithoutSigning:no,currentStep:y,signedTransactions:T,setSignedTransactions:P,currentTransaction:I}};n();var vu=require("react"),wu=require("@multiversx/sdk-core"),I0=require("@multiversx/sdk-extension-provider"),k0=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),L0=require("@multiversx/sdk-passkey-provider/out"),C0=x(Tu());N();n();n();var xo=()=>D(Ko);n();var qr=()=>D(Nm);n();n();n();n();n();n();n();var On=x(require("react"));var S0=(0,On.createContext)({}),CU=C.getState();function zr(){let e=(0,On.useContext)(S0);if(e===void 0||Object.values(e).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return e}n();var xu=x(require("react"));n();var Qi=x(require("react")),b0=x(require("axios"));var ec=()=>{try{let{loginInfo:e,isLoggedIn:o}=zr();return k(g({},e),{isLoggedIn:o})}catch(e){let o=D(le),t=D(Xo);return k(g({},o),{isLoggedIn:t})}};n();n();Ao();n();n();var Su=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),bu=require("@multiversx/sdk-webview-provider/out/WebviewProvider");K();n();K();H();j();function yu(e,o=C.dispatch){let t=ji(e);if(t==null)return;let{signature:r,address:s}=t;r&&e&&s&&(o(za({loginToken:e,signature:r,nativeAuthToken:e})),o(xe({address:s,loginMethod:"extra"})))}n();n();H();function oc(){C.dispatch(qo())}n();se();n();H();j();n();n();var v0=require("@multiversx/sdk-core"),w0=x(require("bignumber.js"));N();n();var A0=x(require("bignumber.js"));N();var Fe=class{constructor(){this.init=()=>S(this,null,function*(){return yield this._provider.init()});this.login=()=>S(this,null,function*(){var t;let o=yield this._provider.login();return{address:(t=o==null?void 0:o.address)!=null?t:""}});this.logout=()=>S(this,null,function*(){return C.dispatch($()),yield this._provider.logout()});this.relogin=()=>S(this,null,function*(){let o=yield this._provider.relogin();return o?(yu(o),Md(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>S(this,null,function*(){let t=yield this._provider.signTransactions(o);return t||(oc(),this._provider.cancelAction(),null)});this.signTransaction=o=>S(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>S(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>S(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>S(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,Su.providerNotInitializedError)("getAddress");this._provider=bu.WebviewProvider.getInstance({resetStateCallback:()=>C.dispatch($())})}static getInstance(){return Fe._instance||(Fe._instance=new Fe),Fe._instance}getAccount(){var t;let o=this._provider.getAccount();return{address:(t=o==null?void 0:o.address)!=null?t:""}}setAccount(o){this._provider.setAccount(o)}};H();z();se();ce();n();var Bn=require("react"),nc=require("@multiversx/sdk-extension-provider"),tc=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),rc=require("@multiversx/sdk-passkey-provider/out");Ao();H();var jr=()=>{let e=J(),{provider:o}=Je(),{nonce:t}=xo(),[r,s]=(0,Bn.useState)(null),[p,m]=(0,Bn.useState)(),[d,_]=(0,Bn.useState)([]),l=Hi(),u=D(Mr),f=D(Li),y=()=>S(void 0,null,function*(){var R,W;let I=Boolean(u==null?void 0:u.transactions),M=(R=u==null?void 0:u.transactions)!=null?R:[];if(I){let E=(W=u==null?void 0:u.customTransactionInformation)!=null&&W.skipUpdateNonces?M:yield l(M);_(E)}m(I)});(0,Bn.useEffect)(()=>{y()},[u,t]);let v=()=>{s(null),e(ko(null))},T=I=>{v(),P(I)};Fi(T);function P(I){var X,oe,ie,Y,de,Ue,ne,Ce,De,no,pe,be;let M=o instanceof nc.ExtensionProvider,R=o instanceof rc.PasskeyProvider,W=o instanceof we.CrossWindowProvider,E=o instanceof fo.IframeProvider,V=o instanceof tc.MetamaskProvider,q=o instanceof Fe;e(qo()),e(rt(I)),!(!M&&!W&&!E&&!R&&!V)&&(v(),M&&((oe=(X=nc.ExtensionProvider.getInstance())==null?void 0:X.cancelAction)==null||oe.call(X)),R&&((Y=(ie=rc.PasskeyProvider.getInstance())==null?void 0:ie.cancelAction)==null||Y.call(ie)),V&&((Ue=(de=tc.MetamaskProvider.getInstance())==null?void 0:de.cancelAction)==null||Ue.call(de)),W&&((Ce=(ne=we.CrossWindowProvider.getInstance())==null?void 0:ne.cancelAction)==null||Ce.call(ne)),E&&((no=(De=fo.IframeProvider.getInstance())==null?void 0:De.cancelAction)==null||no.call(De)),q&&((be=(pe=Fe.getInstance())==null?void 0:pe.cancelAction)==null||be.call(pe)))}return{error:r,canceledTransactionsMessage:f,clearTransactionStatusMessage:v,onAbort:T,setError:s,hasTransactions:p,transactionsToSign:u&&k(g({},u),{transactions:d})}};n();H();j();tt();ce();n();ze();H();function Kr(){let e=J();return o=>{e(qo()),e(rt(o)),e(ko(Xn))}}function ac(e){let{onCancel:o,verifyReceiverScam:t=!0,hasGuardianScreen:r}=e,{transactionsToSign:s,hasTransactions:p}=jr(),m=D(di),d=P_(),_=D(yr),{account:l}=qr(),{address:u,isGuarded:f,activeGuardianAddress:y}=l,{provider:v,providerType:T}=Je(),P=J(),I=Kr(),{transactions:M,sessionId:R,callbackRoute:W,customTransactionInformation:E}=s||{};function V(ne){R&&P(zo({sessionId:R,status:"cancelled"})),P(om(ne))}let{pathname:q}=B(),X=W!=null&&q.includes(W),oe=!(E!=null&&E.skipGuardian);function ie(ne){return S(this,null,function*(){if(!Ui(ne))return;let{needs2FaSigning:De,guardTransactions:no}=Ki({transactions:ne,sessionId:R,callbackRoute:W,isGuarded:f&&oe,walletAddress:m}),pe=ne.map(be=>Cn(be));if(De){let be=yield no();pe=be?be.map(qn=>Cn(qn)):[]}!R||(P(zo({sessionId:R,status:"signed",transactions:pe})),W!=null&&(E==null?void 0:E.redirectAfterSign)&&!X&&nt({url:W}))})}function Y(){o(),I(R)}function de(ne){return S(this,null,function*(){let Ce=T!=="ledger"?v:yield d();return ne?yield Ce.signTransaction(ne):null})}let Ue=E_({address:u,egldLabel:_,activeGuardianAddress:f&&oe?y:void 0,transactionsToSign:p?M:[],onGetScamAddressData:t?Fd:null,isLedger:No("ledger"),hasGuardianScreen:r,onCancel:Y,onSignTransaction:de,onTransactionsSignError:V,onTransactionsSignSuccess:ie});return k(g({},Ue),{callbackRoute:W,waitingForDevice:Ue.waitingForDevice})}n();n();var N0=require("react");n();n();z();kn();n();var Xr=require("react"),Au=(e,o)=>{let[t,r]=(0,Xr.useState)(e);return(0,Xr.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var E0=require("react"),M0=require("@multiversx/sdk-extension-provider");ze();K();z();n();so();se();se();n();n();Ao();j();n();var P0=require("react"),Iu=require("@multiversx/sdk-core");H();n();var R0=require("react"),W0=require("@multiversx/sdk-opera-provider");ze();K();z();so();se();ce();n();var O0=require("react");Ra();ze();Ao();K();H();z();so();ce();n();var H0=require("react");ze();H();n();n();Fa();n();n();var F0=x(require("platform"));$o();n();n();n();n();n();function ku(){return yr(C.getState())}n();n();xn();z();n();n();var B0=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();tt();Sn();n();n();n();H();n();n();var U0=x(require("axios"));se();n();n();var G0=x(Hr());xn();var Lu,Cu,Du,s7=(Du=(Cu=(Lu=Te.safeWindow)==null?void 0:Lu.location)==null?void 0:Cu.origin)==null?void 0:Du.includes("localhost");n();ce();n();n();var Q0=require("react");N();n();n();N();n();n();n();var V0=x(require("bignumber.js"));n();n();n();var Po=x(require("react")),Gu=require("react"),Hu=require("react"),lc=x(require("classnames")),Vu=require("react-dom");N();n();var Mu=x(require("react"));n();var vt=x(require("react"));n();$o();var Nu=()=>!Ee();var q0=()=>S(void 0,null,function*(){return yield Promise.resolve().then(()=>(cc(),ic))}),z0=()=>(cc(),F(ic)).default,sc=Nu();function Eu({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,s]=vt.default.useState(sc?void 0:z0()),[p,m]=vt.default.useState(sc||t==null?void 0:t()),d=()=>S(this,null,function*(){(e?e():q0()).then(_=>s(_.default)),o==null||o().then(_=>m(_.default))});return(0,vt.useEffect)(()=>{sc&&d()},[]),{globalStyles:r,styles:p}}function L(e,o){return t=>{let{globalStyles:r,styles:s}=Eu({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Mu.default.createElement(e,k(g({},t),{globalStyles:r!=null?r:{},styles:s!=null?s:{}}))}}n();var Wu=x(require("react")),Ou=x(require("classnames"));var K0=({className:e,children:o,styles:t})=>Wu.default.createElement("div",{className:(0,Ou.default)(t==null?void 0:t.dappModalBody,e)},o),pc=L(K0,{ssrStyles:()=>Promise.resolve().then(()=>(So(),yo)),clientStyles:()=>(So(),F(yo)).default});n();var mc=x(require("react")),Fu=x(require("classnames"));var X0=({visible:e,customFooter:o,className:t,footerText:r,styles:s})=>e?mc.default.createElement("div",{className:(0,Fu.default)(s==null?void 0:s.dappModalFooter,t)},o!=null?o:mc.default.createElement("div",null,r)):null,dc=L(X0,{ssrStyles:()=>Promise.resolve().then(()=>(So(),yo)),clientStyles:()=>(So(),F(yo)).default});n();var Hn=x(require("react")),Bu=require("@fortawesome/free-solid-svg-icons"),Uu=require("@fortawesome/react-fontawesome"),wt=x(require("classnames"));var Y0=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:s,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>e?t?Hn.default.createElement("div",{className:(0,wt.default)(_==null?void 0:_.dappModalHeader,r)},t):Hn.default.createElement("div",{className:(0,wt.default)(_==null?void 0:_.dappModalHeader,r)},Hn.default.createElement("div",{className:(0,wt.default)(_==null?void 0:_.dappModalHeaderText,p)},o),Hn.default.createElement("button",{onClick:m,className:(0,wt.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,s)},Hn.default.createElement(Uu.FontAwesomeIcon,{size:"lg",icon:Bu.faTimes}))):null,_c=L(Y0,{ssrStyles:()=>Promise.resolve().then(()=>(So(),yo)),clientStyles:()=>(So(),F(yo)).default});var Z0={showHeader:!0,showFooter:!1,headerText:"",footerText:""},J0=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:s=Z0,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:l})=>{let[u,f]=(0,Gu.useState)(!1);if((0,Hu.useEffect)(()=>{f(!0)},[]),!_)return null;let{showHeader:y,showFooter:v,headerText:T,footerText:P,modalDialogClassName:I="dapp-modal-dialog",modalContentClassName:M="dapp-modal-dialog-content",modalHeaderClassName:R="dapp-modal-dialog-header",modalHeaderTextClassName:W="dapp-modal-dialog-header-text",modalCloseButtonClassName:E="dapp-modal-dialog-close-button",modalBodyClassName:V="dapp-modal-dialog-content-body",modalFooterClassName:q="dapp-modal-dialog-footer",customModalHeader:X,customModalFooter:oe}=s,ie=Y=>{Y.key==="Escape"&&r&&(m==null||m())};return Po.default.createElement(Po.default.Fragment,null,u&&(0,Vu.createPortal)(Po.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,lc.default)(I,l==null?void 0:l.dappModal,t),"data-testid":e,onKeyDown:ie},Po.default.createElement("div",{className:(0,lc.default)(l==null?void 0:l.dappModalContent,M)},Po.default.createElement(_c,{visible:y,headerText:T,customHeader:X,className:R,headerTextClassName:W,closeButtonClassName:E,onHide:m}),Po.default.createElement(pc,{className:V},o),Po.default.createElement(dc,{visible:v,customFooter:oe,footerText:P,className:q}))),d!=null?d:document==null?void 0:document.body))},uc=L(J0,{ssrStyles:()=>Promise.resolve().then(()=>(So(),yo)),clientStyles:()=>(So(),F(yo)).default});n();n();var Yr=require("react"),fc=e=>{let[o,t]=(0,Yr.useState)(!1),r=()=>{t(!0)},s=()=>{t(!1)};return(0,Yr.useEffect)(()=>{(e==null?void 0:e.visible)===!0?r():(e==null?void 0:e.visible)===!1&&s()},[e==null?void 0:e.visible]),{handleShowModal:r,handleHideModal:s,showModal:o}};n();n();var $u=require("react"),ov=require("@multiversx/sdk-hw-provider");ze();K();H();z();so();n();var ev=require("react");n();n();var gc=require("react");K();H();z();so();ce();n();var tv=require("react"),rv=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ze();K();z();so();se();se();n();var av=require("react"),iv=require("@multiversx/sdk-passkey-provider/out");ze();K();z();so();se();se();n();n();var qu=require("react");n();var pv=require("react");n();var hc=require("react"),sv=require("socket.io-client");H();n();n();n();var mv=require("react");j();n();n();n();var Ku=x(require("swr"));n();n();n();n();var zu=x(require("axios"));function ju(e=mt){let t=`${Qo()}/${e}`;return zu.default.get(t)}n();function Zr(){let e=r=>ju(r).then(s=>s.data),{data:o,error:t}=(0,Ku.default)(mt,e);return{price:o==null?void 0:o.price,error:t}}j();n();n();var Nt=x(require("react")),as=x(require("classnames"));n();var Xu=x(require("react"));var Jr=e=>{let{showModal:o}=fc({visible:e.visible}),t=()=>{var r;(r=e.onClose)==null||r.call(e)};return Xu.default.createElement(uc,{className:e.className,closeOnEscape:e.closeOnEscape,config:e.modalConfig,onHide:t,visible:o},e.children)};n();n();var Ju=x(require("react")),Qu=require("@fortawesome/free-solid-svg-icons"),ef=x(require("classnames"));n();n();var Eo=x(require("react")),Zu=require("@fortawesome/react-fontawesome"),At=x(require("classnames"));var _v=({icon:e,title:o,action:t,iconClass:r,"data-testid":s,description:p,iconBgClass:m,iconSize:d="5x",className:_="dapp-page-state",globalStyles:l,styles:u})=>{let f=(0,Eo.useMemo)(()=>({wrapper:(0,At.default)(u==null?void 0:u.state,l==null?void 0:l.mAuto,l==null?void 0:l.p4,l==null?void 0:l.textCenter,_),iconContainer:(0,At.default)(l==null?void 0:l.iconState,l==null?void 0:l.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,At.default)(r!=null&&r),title:(0,At.default)(l==null?void 0:l.h4,l==null?void 0:l.my4),description:l==null?void 0:l.mb3}),[l,u,_,m,r]);return Eo.default.createElement("div",{className:f.wrapper,"data-testid":s},e&&Eo.default.createElement("span",{className:f.iconContainer},Eo.default.createElement(Zu.FontAwesomeIcon,{icon:e,className:f.iconClass,size:d})),o&&Eo.default.createElement("p",{className:f.title},o),p&&Eo.default.createElement("div",{className:f.description},p),t)},Qr=L(_v,{ssrStyles:()=>Promise.resolve().then(()=>(xc(),Tc)),clientStyles:()=>(xc(),F(Tc)).default});var lv=({"data-testid":e="loader",noText:o=!1,className:t="dapp-loader",globalStyles:r})=>Ju.default.createElement(Qr,{title:o?"":"Loading...",iconBgClass:(0,ef.default)(r==null?void 0:r.textPrimary,"fa-spin"),"data-testid":e,icon:Qu.faCircleNotch,className:t}),of=L(lv,{});n();var ee=x(require("react")),ra=require("@fortawesome/free-solid-svg-icons"),rs=require("@fortawesome/react-fontawesome"),dn=x(require("classnames"));N();n();n();var Mo=x(require("react")),Eg=require("@multiversx/sdk-core/out"),Mg=x(require("classnames"));n();n();n();var bo=x(require("react")),Of=require("@fortawesome/free-solid-svg-icons"),Ff=require("@fortawesome/react-fontawesome"),Bf=x(require("classnames")),wc=x(Wf());Sa();j();var Uf=({className:e,data:o,onDecodeError:t,onDecode:r})=>{let s=(0,wc.default)("raw".toString()),[p,m]=(0,bo.useState)({label:s,value:s}),d=Object.values(je).map(l=>{let u=l.toString();return{label:(0,wc.default)(u),value:u}}),_=l=>{let u=d.find(f=>f.value===l.target.value);u&&m(u)};return(0,bo.useEffect)(()=>{let{displayValue:l,validationWarnings:u}=ki({input:o,decodeMethod:je[p.value]});r(l),u.length>0&&t(u)},[p,o]),bo.default.createElement("div",{className:(0,Bf.default)("transaction-data-decode",e)},bo.default.createElement("select",{className:"transaction-data-decode-select","data-testid":"transactionDataDecode",value:p.value,onChange:_},d.map(l=>bo.default.createElement("option",{key:l.value,value:l.value},l.label))),bo.default.createElement(Ff.FontAwesomeIcon,{icon:Of.faChevronDown,className:"transaction-data-decode-select-icon"}))};n();var O=x(require("react")),cn=x(require("classnames"));N();n();n();var Vn=x(require("react")),ea=require("@fortawesome/free-solid-svg-icons"),kc=require("@fortawesome/react-fontawesome"),Vf=x(require("classnames"));n();$o();function dw(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(t),o}function Gf(e){return S(this,null,function*(){if(!Ee())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):o=dw(e),o})}var lw=({text:e,className:o="dapp-copy-button",copyIcon:t=ea.faCopy,successIcon:r=ea.faCheck,styles:s})=>{let[p,m]=(0,Vn.useState)({default:!0,success:!1});return Vn.default.createElement("a",{href:"/#",onClick:_=>S(void 0,null,function*(){_.preventDefault(),_.stopPropagation();let l=e&&e.trim();m({default:!1,success:yield Gf(l)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,Vf.default)(s==null?void 0:s.copy,o)},p.default||!p.success?Vn.default.createElement(kc.FontAwesomeIcon,{icon:t}):Vn.default.createElement(kc.FontAwesomeIcon,{icon:r}))},It=L(lw,{ssrStyles:()=>Promise.resolve().then(()=>(Ic(),Ac)),clientStyles:()=>(Ic(),F(Ac)).default});var fw=(e,o)=>[...e.matchAll(new RegExp(o,"gi"))].map(r=>r.index).filter(r=>Number.isFinite(r)),gw=({className:e="dapp-transaction-data",customCopyIcon:o,data:t,globalStyles:r,highlight:s,innerTransactionDataClasses:p,isScCall:m,label:d,showCopyButton:_=!0,styles:l,showDataDecode:u,transactionIndex:f})=>{let[y,v]=(0,O.useState)(t),{transactionDataInputLabelClassName:T,transactionDataInputValueClassName:P}=p||{},I=O.default.createElement(O.default.Fragment,null,y),[M,...R]=s&&m?s.split("@"):[],W=y&&s,E=W?fw(y,s):[],V=W&&E.length>0,q=Y=>{!Y||Y.scrollIntoView()},X=Y=>{v(Y)},oe=()=>{v(t)};if(V)switch(!0){case y.startsWith(s):{let[,Y]=y.split(s);I=O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:r==null?void 0:r.highlighted},s),O.default.createElement("span",{className:r==null?void 0:r.textMuted},Y));break}case y.endsWith(s):{let[Y]=y.split(s);I=O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:r==null?void 0:r.textMuted},Y),O.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:q},s));break}default:{let{start:Y,end:de}=md({occurrences:E,transactionIndex:f,data:y,highlight:s});I=O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:r==null?void 0:r.textMuted},Y),O.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:q},s),O.default.createElement("span",{className:r==null?void 0:r.textMuted},de));break}}let ie=[Zo(M),...R].join("@");return O.default.createElement(O.default.Fragment,null,M&&O.default.createElement("div",{className:(0,cn.default)(l==null?void 0:l.transactionData,e)},O.default.createElement("span",{className:(0,cn.default)(l==null?void 0:l.transactionDataLabel,T)},"Smart Contract Call"),O.default.createElement("div",{className:l==null?void 0:l.transactionDataValueWrapper},O.default.createElement("div",{"data-testid":"confirmScCall",className:(0,cn.default)(l==null?void 0:l.transactionDataValue,P)},O.default.createElement("span",{className:l==null?void 0:l.transactionDataValueText},ie),y&&O.default.createElement(It,{text:ie,className:l==null?void 0:l.transactionDataValueCopy})))),O.default.createElement("div",{className:(0,cn.default)(l==null?void 0:l.transactionData,e)},O.default.createElement("div",{className:(0,cn.default)(l==null?void 0:l.transactionDataLabel,T)},d!=null?d:"Data",u&&O.default.createElement(Uf,{data:t,onDecode:X,onDecodeError:oe})),O.default.createElement("div",{className:l==null?void 0:l.transactionDataValueWrapper},O.default.createElement("div",{"data-testid":"confirmData",className:(0,cn.default)(l==null?void 0:l.transactionDataValue,P)},O.default.createElement("span",{className:l==null?void 0:l.transactionDataValueText},y?I:cp),y&&_&&O.default.createElement(It,{copyIcon:o,text:y,className:l==null?void 0:l.transactionDataValueCopy})))))},qf=L(gw,{ssrStyles:()=>Promise.resolve().then(()=>(Cc(),Lc)),clientStyles:()=>(Cc(),F(Lc)).default});n();n();var zf=require("react"),fe=x(require("classnames")),jf=(e=null,o)=>(0,zf.useMemo)(()=>({formGroup:(0,fe.default)(o==null?void 0:o.formGroup,o==null?void 0:o.textBreak,o==null?void 0:o.textLeft),formLabel:(0,fe.default)(o==null?void 0:o.textBreak,o==null?void 0:o.textSecondary),icon:o==null?void 0:o.textWhite,contentWrapper:(0,fe.default)(o==null?void 0:o.dFlex,o==null?void 0:o.flexColumn,o==null?void 0:o.justifyContentStart,o==null?void 0:o.flexRow,o==null?void 0:o.justifyContentBetween,o==null?void 0:o.mb3),tokenWrapper:(0,fe.default)(o==null?void 0:o.mb3,o==null?void 0:o.mb0,o==null?void 0:o.dFlex,o==null?void 0:o.flexColumn,o==null?void 0:o.alignItemsStart),tokenLabel:(0,fe.default)(o==null?void 0:o.textSecondary,o==null?void 0:o.textLeft),tokenValue:(0,fe.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter),scamReport:o==null?void 0:o.textWarning,scamReportIcon:(0,fe.default)(o==null?void 0:o.textWarning,o==null?void 0:o.mr1),tokenAmountLabel:(0,fe.default)(o==null?void 0:o.textSecondary,o==null?void 0:o.textLeft),tokenAmountValue:(0,fe.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter),dataFormGroup:(0,fe.default)(o==null?void 0:o.formGroup,o==null?void 0:o.textLeft),errorMessage:(0,fe.default)(o==null?void 0:o.textDanger,o==null?void 0:o.dFlex,o==null?void 0:o.justifyContentCenter,o==null?void 0:o.alignItemsCenter),buttonsWrapper:(0,fe.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter,o==null?void 0:o.justifyContentEnd,o==null?void 0:o.mt1),cancelButton:(0,fe.default)(o==null?void 0:o.btn,o==null?void 0:o.btnDark,o==null?void 0:o.textWhite,o==null?void 0:o.dFlex,o==null?void 0:o.mr2),signButton:(0,fe.default)(o==null?void 0:o.btn,e?o==null?void 0:o.btnWarning:o==null?void 0:o.btnPrimary,o==null?void 0:o.dFlex,o==null?void 0:o.ml2)}),[e,o]);n();n();n();var oo=x(require("react")),$c=x(require("classnames"));n();n();var oa=x(require("react")),Pc=x(require("classnames"));var Tw=({className:e,styles:o})=>oa.default.createElement("div",{className:(0,Pc.default)(o==null?void 0:o.loadingDots,e)},Array.from({length:3}).map((t,r)=>oa.default.createElement("span",{key:`loading-dot-${r}`,className:(0,Pc.default)(o==null?void 0:o.loadingDot,o==null?void 0:o[`loadingDot-${r}`])})),oa.default.createElement("span",null,"Loading...")),sn=L(Tw,{ssrStyles:()=>Promise.resolve().then(()=>(Nc(),Dc)),clientStyles:()=>(Nc(),F(Dc)).default});n();n();n();var pn=x(require("react")),Yf=x(require("bignumber.js"));N();var yw=({amount:e,styles:o,type:t,identifier:r})=>{let s=new Yf.default(e),p=s.isZero(),m=s.isEqualTo(1)?"SFT":"SFTs",d=s.toNumber().toLocaleString("en"),_=`${d} ${r}`;return p?pn.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are using"):t==="NonFungibleESDT"?pn.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending an NFT"):t==="SemiFungibleESDT"?pn.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},pn.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelText},"You are sending"),pn.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":_},d," ",m)):pn.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending")},Zf=L(yw,{ssrStyles:()=>Promise.resolve().then(()=>(Mc(),Ec)),clientStyles:()=>(Mc(),F(Ec)).default});n();n();var eo=x(require("react")),tg=require("@fortawesome/free-solid-svg-icons"),rg=require("@fortawesome/react-fontawesome"),ag=x(require("classnames"));N();n();n();var mn=x(require("react")),Oc=x(require("classnames"));n();var na=x(require("react")),Sw=e=>na.createElement("svg",g({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),na.createElement("g",null,na.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),ta=Sw;var vw=({amount:e,displayAsUsd:o,addEqualSign:t,egldIcon:r,className:s,showTokenLabel:p=!0,styles:m,tokenLabel:d,showTokenLabelSup:_,"data-testid":l})=>{let[u,f]=e.split("."),y=o&&u.indexOf("$")<0?`$${u}`:u,T=(()=>{let M={processedMainBalance:y};return t&&o&&(M.approximation="\u2248"),f&&(M.decimalBalance=`.${f}`),!o&&p&&(M.tokenLabel=` ${d}`),M})(),I=[T.approximation,T.processedMainBalance,T.decimalBalance,T.tokenLabel].reduce((M,R)=>R?M.concat(R):M,"");return mn.default.createElement("div",{className:(0,Oc.default)(m==null?void 0:m.balance,s),"data-testid":l,"data-value":I},r&&!o&&mn.default.createElement(ta,{className:m==null?void 0:m.balanceSymbol}),T.approximation&&mn.default.createElement("span",{className:m==null?void 0:m.balanceApproximation},T.approximation),T.processedMainBalance&&mn.default.createElement("span",{className:m==null?void 0:m.balanceMain},y),T.decimalBalance&&mn.default.createElement("span",{className:m==null?void 0:m.balanceDecimals},T.decimalBalance),T.tokenLabel&&mn.default.createElement("sup",{className:(0,Oc.default)(m==null?void 0:m.balanceSuffix,{[m==null?void 0:m.balanceSuffixSup]:_})},T.tokenLabel))},kt=L(vw,{ssrStyles:()=>Promise.resolve().then(()=>(Wc(),Rc)),clientStyles:()=>(Wc(),F(Rc)).default});n();n();var Qf=x(require("react")),eg=x(require("classnames"));N();var ww=d=>{var _=d,{amount:e,usd:o,decimals:t,addEqualSign:r,className:s,globalStyles:p}=_,m=Ne(_,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let l=kr({amount:e,usd:o,decimals:t,addEqualSign:r!=null?r:!0}),f=`${e}`===Ie?`= $${Ie}`:l;return Qf.default.createElement("small",g({className:(0,eg.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,s!=null?s:"dapp-usd-value")},m),f)},og=L(ww,{});var Iw=({isEgld:e,styles:o,tokenPrice:t,isNftOrSft:r,handleReference:s,currentTransaction:p,amount:m,tokenDetails:d})=>{let{network:_}=uo(),{tokenAvatar:l,tokenDecimals:u,identifier:f}=d,y=({addCommas:I})=>Re({input:e?p.transaction.getValue().toString():m,decimals:e?Number(_.decimals):u,digits:Number(_.digits),showLastNonZeroDecimal:!1,addCommas:I}),v=e||d.identifier===pp,T=y({addCommas:!0}),P=y({addCommas:!1});return eo.default.createElement("div",{className:o==null?void 0:o.confirmAmountData},eo.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataWrapper},!v&&l&&eo.default.createElement("img",{src:l,className:o==null?void 0:o.confirmAmountDataIcon}),!v&&!l&&eo.default.createElement("div",{className:(0,ag.default)(o==null?void 0:o.confirmAmountDataIcon,o==null?void 0:o.confirmAmountDataIconDefault)},eo.default.createElement(rg.FontAwesomeIcon,{icon:tg.faCoins,className:o==null?void 0:o.confirmAmountDataIconDefaultIcon})),eo.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataBalanceWrapper,ref:s},eo.default.createElement(kt,{amount:T,egldIcon:v,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:v?_.egldLabel:f,className:o==null?void 0:o.confirmAmountDataBalance}))),!r&&t&&eo.default.createElement(og,{amount:P,usd:t,"data-testid":"confirmUsdValue",className:o==null?void 0:o.confirmAmountDataPrice}),!r&&!t&&eo.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataPrice},"Price Unknown"))},ig=L(Iw,{ssrStyles:()=>Promise.resolve().then(()=>(Bc(),Fc)),clientStyles:()=>(Bc(),F(Fc)).default});n();n();var Be=x(require("react")),sg=require("@fortawesome/free-solid-svg-icons"),pg=require("@fortawesome/react-fontawesome"),mg=x(require("classnames"));N();xn();var Lw=({styles:e,amount:o,type:t,tokenDetails:r})=>{let{network:s}=uo(),{identifier:p,tokenAvatar:m,name:d}=r,_="SemiFungibleESDT"===t,u=Array(Math.min(4,Number(o))).fill(null);return Be.default.createElement("div",{onClick:y=>{var T;if(!p)return;let v=lt({explorerAddress:s.explorerAddress,to:_t.nftDetails(p)});y.preventDefault(),y.stopPropagation(),(T=Te.safeWindow)!=null&&T.open&&Te.safeWindow.open(v)},className:e==null?void 0:e.confirmAmountNftSft},Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftWrapper},m?Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},u.map((y,v)=>Be.default.createElement("img",{src:m,alt:t,key:`nft-sft-avatar-${v}`,style:{opacity:1-.25*v,zIndex:u.length-v,marginLeft:(u.length-v-1)*4},className:(0,mg.default)(e==null?void 0:e.confirmAmountNftSftIcon,{[e==null?void 0:e.confirmAmountNftSftIconRelative]:v===0})}))):Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconText},_?"SFT":"NFT")),Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftContent},Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftName,"data-testid":"nftLabel"},d),Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),Be.default.createElement(pg.FontAwesomeIcon,{icon:sg.faArrowUpRightFromSquare,className:e==null?void 0:e.confirmAmountNftSftIcon}))},dg=L(Lw,{ssrStyles:()=>Promise.resolve().then(()=>(Gc(),Uc)),clientStyles:()=>(Gc(),F(Uc)).default});n();n();var _g=require("react"),lg=()=>{let[e,o]=(0,_g.useState)(!0),t=p=>p.getBoundingClientRect().width,r=p=>parseInt(getComputedStyle(p).getPropertyValue("font-size"));return{isFontSizeLoading:e,handleAmountReference:p=>{if(!p)return;let m=p.firstChild,d={parent:p.offsetWidth,firstChild:r(m)};if(!!m){for(;d.parent<t(m);){let _=d.firstChild-.1,l={fontSize:`${_}px`},u={firstChild:_};Object.assign(m.style,l),Object.assign(d,u)}o(!1)}}}};var Dw=({styles:e,currentTransaction:o})=>{let{tokenId:t,nonce:r,amount:s}=o.transactionTokenInfo,{isFontSizeLoading:p,handleAmountReference:m}=lg(),d=r&&r.length>0?`${t}-${r}`:t,_=Xd({tokenId:d}),{price:l}=Zr(),{type:u,esdtPrice:f,isLoading:y,identifier:v}=_,T=!t,P=T?l:f,I=u?["SemiFungibleESDT","NonFungibleESDT"].includes(u):!1;return oo.default.createElement("div",{className:e==null?void 0:e.confirmAmount},oo.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},y?oo.default.createElement(sn,null):oo.default.createElement(Zf,{amount:s,type:u,identifier:v})),oo.default.createElement("div",{className:e==null?void 0:e.confirmAmountWrapper},oo.default.createElement(sn,{className:(0,$c.default)(e==null?void 0:e.confirmAmountLoading,{[e==null?void 0:e.confirmAmountLoadingVisible]:y||p})}),oo.default.createElement("div",{className:(0,$c.default)(e==null?void 0:e.confirmAmountContent,{[e==null?void 0:e.confirmAmountContentHidden]:y||p})},I?oo.default.createElement(dg,{amount:s,type:u,tokenDetails:_}):oo.default.createElement(ig,{isNftOrSft:I,isEgld:T,amount:s,handleReference:m,currentTransaction:o,tokenDetails:_,tokenPrice:P}))))},fg=L(Dw,{ssrStyles:()=>Promise.resolve().then(()=>(Vc(),Hc)),clientStyles:()=>(Vc(),F(Hc)).default});n();n();var vo=x(require("react"));N();var Pw=({transaction:e,styles:o})=>{let{price:t}=Zr(),r=ku(),s=vi({gasPerDataByte:String(Vt),gasPriceModifier:String(Wa),gasLimit:e.getGasLimit().valueOf().toString(),gasPrice:e.getGasPrice().valueOf().toString(),data:e.getData().toString(),chainId:e.getChainID().valueOf()}),p=Re({input:s,showLastNonZeroDecimal:!0}),m=t?pd({feeLimit:s,egldPriceInUsd:t,hideEqualSign:!0}):null;return vo.default.createElement("div",{className:o==null?void 0:o.confirmFee},vo.default.createElement("div",{className:o==null?void 0:o.confirmFeeLabel},"Transaction Fee"),vo.default.createElement("div",{className:o==null?void 0:o.confirmFeeData},vo.default.createElement(kt,{className:o==null?void 0:o.confirmFeeDataBalance,"data-testid":"confirmFee",egldIcon:!0,showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:r,amount:p}),m?vo.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},"(",vo.default.createElement(kt,{amount:m,displayAsUsd:!0,addEqualSign:!0,className:o==null?void 0:o.confirmFeeDataPrice}),")"):vo.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},vo.default.createElement(sn,null))))},hg=L(Pw,{ssrStyles:()=>Promise.resolve().then(()=>(zc(),qc)),clientStyles:()=>(zc(),F(qc)).default});n();n();var ae=x(require("react")),Lg=require("@fortawesome/free-solid-svg-icons"),Cg=require("@fortawesome/react-fontawesome"),Dg=x(require("bignumber.js"));N();n();n();var Tg=e=>e?e.lastIndexOf(".elrond")>0?e.substring(0,e.lastIndexOf(".")):e:void 0;n();n();var Xc=x(require("react")),yg=require("@fortawesome/free-solid-svg-icons"),Sg=require("@fortawesome/react-fontawesome"),bg=x(require("classnames"));var Mw=_=>{var l=_,{page:e,text:o,className:t="dapp-explorer-link",children:r,globalStyles:s,customExplorerIcon:p,styles:m}=l,d=Ne(l,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:u}}=uo(),f=o!=null?o:Xc.default.createElement(Sg.FontAwesomeIcon,{icon:p!=null?p:yg.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),y=lt({explorerAddress:String(u),to:e});return Xc.default.createElement("a",g({href:y,target:"_blank",className:(0,bg.default)(m==null?void 0:m.link,s==null?void 0:s.ml2,t),rel:"noreferrer"},d),r!=null?r:f)},vg=L(Mw,{ssrStyles:()=>Promise.resolve().then(()=>(Kc(),jc)),clientStyles:()=>(Kc(),F(jc)).default});n();n();var Q=x(require("react")),Ag=x(require("classnames"));N();var Ww=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:r,styles:s})=>{let[p,m]=(0,Q.useState)(0),[d,_]=(0,Q.useState)(!1),l=(0,Q.useRef)(document==null?void 0:document.createElement("span")),u=(0,Q.useRef)(document==null?void 0:document.createElement("span")),f=Au(p,300),y=()=>{if(l.current&&u.current){let P=u.current.offsetWidth-l.current.offsetWidth;_(P>1)}},v=()=>{m(p+1)};return(0,Q.useEffect)(()=>(window==null||window.addEventListener("resize",v),()=>{window==null||window.removeEventListener("resize",v)})),(0,Q.useEffect)(()=>{y()},[f]),Q.default.createElement("span",{ref:l,className:(0,Ag.default)(s==null?void 0:s.trim,r,o,{overflow:d}),"data-testid":t},Q.default.createElement("span",{ref:u,className:s==null?void 0:s.hiddenTextRef},e),d?Q.default.createElement(Q.default.Fragment,null,Q.default.createElement("span",{className:s==null?void 0:s.left},Q.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),Q.default.createElement("span",{className:s==null?void 0:s.ellipsis},sp),Q.default.createElement("span",{className:s==null?void 0:s.right},Q.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):Q.default.createElement("span",null,e))},Ig=L(Ww,{ssrStyles:()=>Promise.resolve().then(()=>(Zc(),Yc)),clientStyles:()=>(Zc(),F(Yc)).default});var Fw=({amount:e,label:o,receiver:t,customExplorerIcon:r,receiverUsername:s,customCopyIcon:p,scamReport:m,styles:d})=>{let _=ui(t),l=Boolean(_||s),u=new Dg.default(e).isZero(),{data:f,isLoading:y,error:v}=en(l?null:t),T=s!=null?s:f==null?void 0:f.username,P=T!=null?T:t,I=Boolean(t&&Boolean(T)&&!v),M=u?"To interact with":"To";return ae.default.createElement("div",{className:d==null?void 0:d.receiver},ae.default.createElement("div",{className:d==null?void 0:d.receiverLabelWrapper},ae.default.createElement("div",{className:d==null?void 0:d.receiverLabel},o!=null?o:M),m&&ae.default.createElement("div",{className:d==null?void 0:d.receiverLabelScam},ae.default.createElement("span",{className:d==null?void 0:d.receiverLabelScamText,"data-testid":"confirmScamReport"},m),ae.default.createElement(Cg.FontAwesomeIcon,{icon:Lg.faExclamationTriangle,className:d==null?void 0:d.receiverLabelScamIcon}))),y?ae.default.createElement("div",{className:d==null?void 0:d.receiverWrapper},ae.default.createElement(sn,{className:d==null?void 0:d.receiverLoading})):ae.default.createElement("div",{className:d==null?void 0:d.receiverWrapper,"data-testid":"confirmReceiver"},ae.default.createElement(Ig,{text:t,className:d==null?void 0:d.receiverTrim}),I&&!_&&ae.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",ae.default.createElement(ta,{className:d==null?void 0:d.receiverDataIcon}),ae.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},Tg(P)),")"),_&&ae.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",ae.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},"Smart Contract"),")"),ae.default.createElement(It,{text:t,className:d==null?void 0:d.receiverCopy,copyIcon:p}),ae.default.createElement(vg,{page:`/${me}/${t}`,className:d==null?void 0:d.receiverExternal,customExplorerIcon:r})))},Ng=L(Fw,{ssrStyles:()=>Promise.resolve().then(()=>(Qc(),Jc)),clientStyles:()=>(Qc(),F(Jc)).default});var Uw=({currentTransaction:e,error:o,signStepInnerClasses:t,globalStyles:r,styles:s})=>{if(!e)return null;let{inputGroupClassName:p,inputLabelClassName:m,inputValueClassName:d,errorClassName:_}=t||{},{tokenId:l,multiTxData:u,receiver:f,amount:y}=e.transactionTokenInfo,v=u?new Eg.Address(f).bech32():e.transaction.getReceiver().toString(),T=e.receiverScamInfo,P=jf(T,r),I=e.transaction.getData().toString();return Mo.default.createElement("div",{className:s==null?void 0:s.summary},Mo.default.createElement("div",{className:s==null?void 0:s.fields},Mo.default.createElement(fg,{currentTransaction:e}),Mo.default.createElement(Ng,{scamReport:T,receiver:v,amount:y}),Mo.default.createElement(hg,{transaction:e.transaction}),I&&Mo.default.createElement(qf,{className:p,data:I,highlight:u,innerTransactionDataClasses:{transactionDataInputLabelClassName:m,transactionDataInputValueClassName:d},isScCall:!l,showDataDecode:!0,transactionIndex:e.transactionIndex}),o&&Mo.default.createElement("p",{className:(0,Mg.default)(P.errorMessage,_)},o)))},Rg=L(Uw,{ssrStyles:()=>Promise.resolve().then(()=>(os(),es)),clientStyles:()=>(os(),F(es)).default});n();n();var Ro=x(require("react")),Og=require("@fortawesome/free-solid-svg-icons"),Fg=require("@fortawesome/react-fontawesome"),Lt=x(require("classnames"));var Hw=e=>{let{steps:o,size:t="large",type:r="simple",collapsible:s=!1,styles:p}=e,m=o.filter(u=>!u.hidden),d=m.findIndex(u=>u.active),_=t==="large"?650:450,l=33/100*_;return Ro.default.createElement("div",{className:p==null?void 0:p.progressSteps},m.map((u,f)=>Ro.default.createElement("div",{key:`progress-step-${f}`,style:{width:s?"auto":`${100/m.length}%`},className:(0,Lt.default)(p==null?void 0:p.progressStep,{[p==null?void 0:p.left]:r==="detailed"})},Ro.default.createElement("div",{style:{width:s?u.active?l:20:"auto"},className:(0,Lt.default)(p==null?void 0:p.progressStepWrapper,{[p==null?void 0:p.active]:u.active,[p==null?void 0:p.detailed]:r==="detailed",[p==null?void 0:p.completed]:f<d||u.completed,[p==null?void 0:p.collapsible]:s})},Ro.default.createElement("div",{className:(0,Lt.default)(p==null?void 0:p.progressStepIndex,{[p==null?void 0:p.active]:u.active})},f+1,r==="detailed"&&f<d&&Ro.default.createElement(Fg.FontAwesomeIcon,{icon:Og.faCheck,className:p==null?void 0:p.progressStepCheck})),u.title&&r==="detailed"&&Ro.default.createElement("div",{className:(0,Lt.default)(p==null?void 0:p.progressStepTitle,{[p==null?void 0:p.active]:u.active,[p==null?void 0:p.collapsible]:s})},Ro.default.createElement("div",{className:p==null?void 0:p.progressStepTitleText},u.title))))))},Bg=L(Hw,{ssrStyles:()=>Promise.resolve().then(()=>(ts(),ns)),clientStyles:()=>(ts(),F(ns)).default});n();j();var $w=e=>{var Wo;let{allTransactions:o,className:t,currentStep:r,currentTransaction:s,GuardianScreen:p,error:m,globalStyles:d,handleClose:_,handleSubmit:l,isLastTransaction:u,onPrev:f,onSignTransaction:y,signStepInnerClasses:v,styles:T,title:P,waitingForDevice:I}=e,[M,R]=(0,ee.useState)(!1),[W,E]=(0,ee.useState)({});if(!s)return null;let q=`${s.transaction.getNonce().valueOf().toString()}_${s.transactionTokenInfo.multiTxData}_${s.transactionIndex}`;(0,ee.useEffect)(()=>{let Ge=Object.keys(W).includes(q),Oo=Object.values(W).includes(r);Ge||Oo||E(to=>k(g({},to),{[q]:r}))},[q,r]);let X=s.transaction.getData().toString(),{buttonsWrapperClassName:oe,buttonClassName:ie}=v||{},{type:Y,multiTxData:de}=s.transactionTokenInfo,Ue=r===0,ne=Ge=>{Ge.preventDefault(),Ue?_():f()},Ce=u&&!I,De=()=>S(void 0,null,function*(){if(yield y(),Ce&&p)return R(!0);Ce&&l&&l()}),no=Y&&de&&!X.endsWith(de),pe="Sign & Continue";pe=I?"Check your Ledger":pe,pe=Ce?"Sign & Submit":pe,pe=no?"Continue":pe;let be={currentTransaction:s,error:m,allTransactions:o,currentStep:r,isGuarded:Boolean(p),signStepInnerClasses:v},qn=()=>{R(!1)},Mt=o.length>1?"Sign Transactions":"Sign Transaction",Rt=o.length>1?"Confirm Transactions":"Confirm Transaction",Wt=o.length>1?`Signing Transaction ${r+1} of ${o.length}`:P||"Sign Transaction",ln=p&&M,U=ln?"Verify Guardian":Wt,_e=[{title:Mt,active:!M},{title:Rt,active:M,hidden:!be.isGuarded}],wo=W[q]===r;return ee.default.createElement("div",{className:(0,dn.default)(T==null?void 0:T.modalLayoutContent,T==null?void 0:T.spaced,t,{[(Wo=T==null?void 0:T.guarded)!=null?Wo:""]:be.isGuarded})},ln&&ee.default.createElement("div",{onClick:qn,className:(0,dn.default)(T==null?void 0:T.modalLayoutHeadingIcon,T==null?void 0:T.back)},ee.default.createElement(rs.FontAwesomeIcon,{icon:ra.faArrowLeft})),ee.default.createElement("div",{onClick:ne,className:(0,dn.default)(T==null?void 0:T.modalLayoutHeadingIcon,T==null?void 0:T.close)},ee.default.createElement(rs.FontAwesomeIcon,{icon:ra.faTimes})),be.isGuarded&&ee.default.createElement(Bg,{steps:_e,type:"detailed",size:"small"}),ee.default.createElement("div",{className:T==null?void 0:T.title,"data-testid":"signStepTitle"},U||"Confirm on Ledger"),ln?ee.default.createElement(p,k(g({},e),{onPrev:qn,guardianFormDescription:"Enter the code from your Authenticator app to verify this transaction."})):ee.default.createElement(ee.default.Fragment,null,ee.default.createElement(Rg,g({},be)),ee.default.createElement("div",{className:(0,dn.default)(T==null?void 0:T.signButtons,oe)},ee.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:ne,className:(0,dn.default)(T==null?void 0:T.signButtonCancel,ie)},r===0?"Cancel":"Back"),ee.default.createElement("button",{type:"button",className:(0,dn.default)(d==null?void 0:d.btnPrimary,T==null?void 0:T.signButtonSubmit,ie),id:"signBtn","data-testid":"signBtn",onClick:De,disabled:I||!wo},wo?pe:"Loading..."))))},Gg=L($w,{ssrStyles:()=>Promise.resolve().then(()=>(Dt(),Ct)),clientStyles:()=>(Dt(),F(Ct)).default});var qw=({handleClose:e,handleSubmit:o,error:t,className:r="dapp-device-modal",verifyReceiverScam:s=!0,GuardianScreen:p,title:m="Confirm transaction",signStepInnerClasses:d,globalStyles:_,styles:l})=>{let{address:u}=xo(),{onSignTransaction:f,onPrev:y,allTransactions:v,waitingForDevice:T,onAbort:P,isLastTransaction:I,signedTransactions:M,setSignedTransactions:R,currentStep:W,callbackRoute:E,currentTransaction:V}=ac({onCancel:e,verifyReceiverScam:s,hasGuardianScreen:Boolean(p)}),q=V==null,X={wrapper:(0,as.default)(l==null?void 0:l.modalContainer,l==null?void 0:l.walletConnect,r),container:(0,as.default)(_==null?void 0:_.card,_==null?void 0:_.container),cardBody:_==null?void 0:_.cardBody};return Nt.default.createElement(Jr,{onClose:e,modalConfig:{modalDialogClassName:X.wrapper},visible:!0},Nt.default.createElement("div",{className:X.cardBody},q?Nt.default.createElement(of,null):Nt.default.createElement(Gg,{address:u,allTransactions:v,callbackRoute:E,currentStep:W,currentTransaction:V,error:t,GuardianScreen:p,handleClose:P,handleSubmit:o,isLastTransaction:I,onPrev:y,onSignTransaction:f,setSignedTransactions:R,signStepInnerClasses:d,signedTransactions:M,title:m,waitingForDevice:T})))},Hg=L(qw,{ssrStyles:()=>Promise.resolve().then(()=>(Dt(),Ct)),clientStyles:()=>(Dt(),F(Ct)).default});n();var Kg=x(require("react"));Ca();n();n();var eA=x(require("react"));n();var cs=x(require("react")),Zw=require("@fortawesome/free-solid-svg-icons");n();var is=x(require("react"));n();var _n=x(require("react")),$n=require("@fortawesome/free-solid-svg-icons"),aa=require("@fortawesome/react-fontawesome"),ia=x(require("classnames"));n();var Kw=({type:e,globalStyles:o,styles:t})=>{switch(e){case"info":return _n.default.createElement("div",{className:(0,ia.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.success)},_n.default.createElement(aa.FontAwesomeIcon,{icon:$n.faInfo,className:t==null?void 0:t.svg,size:"5x"}));case"warning":return _n.default.createElement("div",{className:(0,ia.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.warning,t==null?void 0:t.warningIcon)},_n.default.createElement(aa.FontAwesomeIcon,{icon:$n.faWarning,className:t==null?void 0:t.svg,size:"5x"}));case"error":return _n.default.createElement("div",{className:(0,ia.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.danger,t==null?void 0:t.errorIcon)},_n.default.createElement(aa.FontAwesomeIcon,{icon:$n.faTimes,className:t==null?void 0:t.svg,size:"5x"}));default:return null}},$g=L(Kw,{ssrStyles:()=>Promise.resolve().then(()=>(Et(),Pt)),clientStyles:()=>(Et(),F(Pt)).default});var Xw=({type:e,message:o,styles:t})=>is.default.createElement("div",{className:t==null?void 0:t.transactionsStatusToastContent},is.default.createElement($g,{type:e}),o),Yw=L(Xw,{ssrStyles:()=>Promise.resolve().then(()=>(Et(),Pt)),clientStyles:()=>(Et(),F(Pt)).default});N();n();var oA=x(require("react"));se();n();n();n();var ca=x(require("react")),zg=require("@fortawesome/free-solid-svg-icons"),ms=x(require("classnames"));N();var tA=({handleClose:e,error:o,title:t,description:r,sessionId:s,className:p="dapp-extension-modal",modalContentClassName:m,globalStyles:d,styles:_})=>{let l=Kr(),u={wrapper:(0,ms.default)(_==null?void 0:_.modalContainer,_==null?void 0:_.extension,p),icon:d==null?void 0:d.textWhite,closeBtn:(0,ms.default)(d==null?void 0:d.btn,d==null?void 0:d.btnCloseLink,d==null?void 0:d.btnDark,d==null?void 0:d.textWhite,d==null?void 0:d.mt2)},f=y=>{y.preventDefault(),e(),l(s)};return ca.default.createElement(Jr,{onClose:e,modalConfig:{modalDialogClassName:u.wrapper},visible:!0},ca.default.createElement(Qr,{icon:o?zg.faTimes:null,iconClass:u.icon,className:m,iconBgClass:o?d==null?void 0:d.bgDanger:d==null?void 0:d.bgWarning,iconSize:"3x",title:t,description:r,action:ca.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:f,className:u.closeBtn},"Close")}))},jg=L(tA,{ssrStyles:()=>Promise.resolve().then(()=>(ps(),ss)),clientStyles:()=>(ps(),F(ss)).default});var Xg=e=>{let o=k(g({},e),{description:`You need at least MultiversX app version ${Yn}. Update MultiversX app to continue`,title:"Signing transactions unavailable"});return Kg.default.createElement(jg,g({},o))};var rA=e=>{var m;let{ledgerAccount:o,account:{isGuarded:t}}=qr(),{loginMethod:r}=ec(),{ledgerWithGuardians:s}=sd((m=o==null?void 0:o.version)!=null?m:""),p=r==="ledger"?s:!0;return t&&!p?ds.default.createElement(Xg,g({},e)):ds.default.createElement(Hg,k(g({},e),{title:e.title||"Confirm on Ledger",className:e.className||"dapp-ledger-modal"}))};0&&(module.exports={SignWithLedgerModal});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
