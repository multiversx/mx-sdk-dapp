"use strict";var sT=Object.create;var mt=Object.defineProperty,pT=Object.defineProperties,mT=Object.getOwnPropertyDescriptor,dT=Object.getOwnPropertyDescriptors,_T=Object.getOwnPropertyNames,er=Object.getOwnPropertySymbols,lT=Object.getPrototypeOf,Fa=Object.prototype.hasOwnProperty,Ks=Object.prototype.propertyIsEnumerable;var js=(e,o,n)=>o in e?mt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,g=(e,o)=>{for(var n in o||(o={}))Fa.call(o,n)&&js(e,n,o[n]);if(er)for(var n of er(o))Ks.call(o,n)&&js(e,n,o[n]);return e},I=(e,o)=>pT(e,dT(o));var Fe=(e,o)=>{var n={};for(var r in e)Fa.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&er)for(var r of er(e))o.indexOf(r)<0&&Ks.call(e,r)&&(n[r]=e[r]);return n};var w=(e,o)=>()=>(e&&(o=e(e=0)),o);var A=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),z=(e,o)=>{for(var n in o)mt(e,n,{get:o[n],enumerable:!0})},Xs=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of _T(o))!Fa.call(e,s)&&s!==n&&mt(e,s,{get:()=>o[s],enumerable:!(r=mT(o,s))||r.enumerable});return e};var T=(e,o,n)=>(n=e!=null?sT(lT(e)):{},Xs(o||!e||!e.__esModule?mt(n,"default",{value:e,enumerable:!0}):n,e)),H=e=>Xs(mt({},"__esModule",{value:!0}),e);var S=(e,o,n)=>new Promise((r,s)=>{var p=_=>{try{d(n.next(_))}catch(l){s(l)}},m=_=>{try{d(n.throw(_))}catch(l){s(l)}},d=_=>_.done?r(_.value):Promise.resolve(_.value).then(p,m);d((n=n.apply(e,o)).next())});var Js=A(or=>{"use strict";t();or.byteLength=fT;or.toByteArray=hT;or.fromByteArray=yT;var to=[],Be=[],uT=typeof Uint8Array!="undefined"?Uint8Array:Array,Ba="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(nn=0,Ys=Ba.length;nn<Ys;++nn)to[nn]=Ba[nn],Be[Ba.charCodeAt(nn)]=nn;var nn,Ys;Be["-".charCodeAt(0)]=62;Be["_".charCodeAt(0)]=63;function Zs(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function fT(e){var o=Zs(e),n=o[0],r=o[1];return(n+r)*3/4-r}function gT(e,o,n){return(o+n)*3/4-n}function hT(e){var o,n=Zs(e),r=n[0],s=n[1],p=new uT(gT(e,r,s)),m=0,d=s>0?r-4:r,_;for(_=0;_<d;_+=4)o=Be[e.charCodeAt(_)]<<18|Be[e.charCodeAt(_+1)]<<12|Be[e.charCodeAt(_+2)]<<6|Be[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return s===2&&(o=Be[e.charCodeAt(_)]<<2|Be[e.charCodeAt(_+1)]>>4,p[m++]=o&255),s===1&&(o=Be[e.charCodeAt(_)]<<10|Be[e.charCodeAt(_+1)]<<4|Be[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function TT(e){return to[e>>18&63]+to[e>>12&63]+to[e>>6&63]+to[e&63]}function xT(e,o,n){for(var r,s=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),s.push(TT(r));return s.join("")}function yT(e){for(var o,n=e.length,r=n%3,s=[],p=16383,m=0,d=n-r;m<d;m+=p)s.push(xT(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],s.push(to[o>>2]+to[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],s.push(to[o>>10]+to[o>>4&63]+to[o<<2&63]+"=")),s.join("")}});var Qs=A(Ua=>{t();Ua.read=function(e,o,n,r,s){var p,m,d=s*8-r-1,_=(1<<d)-1,l=_>>1,u=-7,f=n?s-1:0,x=n?-1:1,v=e[o+f];for(f+=x,p=v&(1<<-u)-1,v>>=-u,u+=d;u>0;p=p*256+e[o+f],f+=x,u-=8);for(m=p&(1<<-u)-1,p>>=-u,u+=r;u>0;m=m*256+e[o+f],f+=x,u-=8);if(p===0)p=1-l;else{if(p===_)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-l}return(v?-1:1)*m*Math.pow(2,p-r)};Ua.write=function(e,o,n,r,s,p){var m,d,_,l=p*8-s-1,u=(1<<l)-1,f=u>>1,x=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=r?0:p-1,h=r?1:-1,N=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=u):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+f>=1?o+=x/_:o+=x*Math.pow(2,1-f),o*_>=2&&(m++,_/=2),m+f>=u?(d=0,m=u):m+f>=1?(d=(o*_-1)*Math.pow(2,s),m=m+f):(d=o*Math.pow(2,f-1)*Math.pow(2,s),m=0));s>=8;e[n+v]=d&255,v+=h,d/=256,s-=8);for(m=m<<s|d,l+=s;l>0;e[n+v]=m&255,v+=h,m/=256,l-=8);e[n+v-h]|=N*128}});var _p=A(Dn=>{"use strict";t();var Ga=Js(),Ln=Qs(),ep=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Dn.Buffer=y;Dn.SlowBuffer=IT;Dn.INSPECT_MAX_BYTES=50;var nr=2147483647;Dn.kMaxLength=nr;y.TYPED_ARRAY_SUPPORT=ST();!y.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ST(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(y.prototype,"parent",{enumerable:!0,get:function(){if(!!y.isBuffer(this))return this.buffer}});Object.defineProperty(y.prototype,"offset",{enumerable:!0,get:function(){if(!!y.isBuffer(this))return this.byteOffset}});function So(e){if(e>nr)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,y.prototype),o}function y(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return qa(e)}return tp(e,o,n)}y.poolSize=8192;function tp(e,o,n){if(typeof e=="string")return wT(e,o);if(ArrayBuffer.isView(e))return bT(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ro(e,ArrayBuffer)||e&&ro(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ro(e,SharedArrayBuffer)||e&&ro(e.buffer,SharedArrayBuffer)))return Va(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return y.from(r,o,n);var s=AT(e);if(s)return s;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return y.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}y.from=function(e,o,n){return tp(e,o,n)};Object.setPrototypeOf(y.prototype,Uint8Array.prototype);Object.setPrototypeOf(y,Uint8Array);function rp(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function vT(e,o,n){return rp(e),e<=0?So(e):o!==void 0?typeof n=="string"?So(e).fill(o,n):So(e).fill(o):So(e)}y.alloc=function(e,o,n){return vT(e,o,n)};function qa(e){return rp(e),So(e<0?0:za(e)|0)}y.allocUnsafe=function(e){return qa(e)};y.allocUnsafeSlow=function(e){return qa(e)};function wT(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!y.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=ap(e,o)|0,r=So(n),s=r.write(e,o);return s!==n&&(r=r.slice(0,s)),r}function Ha(e){for(var o=e.length<0?0:za(e.length)|0,n=So(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function bT(e){if(ro(e,Uint8Array)){var o=new Uint8Array(e);return Va(o.buffer,o.byteOffset,o.byteLength)}return Ha(e)}function Va(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,y.prototype),r}function AT(e){if(y.isBuffer(e)){var o=za(e.length)|0,n=So(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||ja(e.length)?So(0):Ha(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Ha(e.data)}function za(e){if(e>=nr)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+nr.toString(16)+" bytes");return e|0}function IT(e){return+e!=e&&(e=0),y.alloc(+e)}y.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==y.prototype};y.compare=function(o,n){if(ro(o,Uint8Array)&&(o=y.from(o,o.offset,o.byteLength)),ro(n,Uint8Array)&&(n=y.from(n,n.offset,n.byteLength)),!y.isBuffer(o)||!y.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,s=n.length,p=0,m=Math.min(r,s);p<m;++p)if(o[p]!==n[p]){r=o[p],s=n[p];break}return r<s?-1:s<r?1:0};y.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};y.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return y.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var s=y.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(ro(m,Uint8Array))p+m.length>s.length?y.from(m).copy(s,p):Uint8Array.prototype.set.call(s,m,p);else if(y.isBuffer(m))m.copy(s,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return s};function ap(e,o){if(y.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ro(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var s=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return $a(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return dp(e).length;default:if(s)return r?-1:$a(e).length;o=(""+o).toLowerCase(),s=!0}}y.byteLength=ap;function kT(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return OT(this,o,n);case"utf8":case"utf-8":return cp(this,o,n);case"ascii":return WT(this,o,n);case"latin1":case"binary":return RT(this,o,n);case"base64":return ET(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return FT(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}y.prototype._isBuffer=!0;function tn(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}y.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)tn(this,n,n+1);return this};y.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)tn(this,n,n+3),tn(this,n+1,n+2);return this};y.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)tn(this,n,n+7),tn(this,n+1,n+6),tn(this,n+2,n+5),tn(this,n+3,n+4);return this};y.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?cp(this,0,o):kT.apply(this,arguments)};y.prototype.toLocaleString=y.prototype.toString;y.prototype.equals=function(o){if(!y.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:y.compare(this,o)===0};y.prototype.inspect=function(){var o="",n=Dn.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};ep&&(y.prototype[ep]=y.prototype.inspect);y.prototype.compare=function(o,n,r,s,p){if(ro(o,Uint8Array)&&(o=y.from(o,o.offset,o.byteLength)),!y.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),s===void 0&&(s=0),p===void 0&&(p=this.length),n<0||r>o.length||s<0||p>this.length)throw new RangeError("out of range index");if(s>=p&&n>=r)return 0;if(s>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,s>>>=0,p>>>=0,this===o)return 0;for(var m=p-s,d=r-n,_=Math.min(m,d),l=this.slice(s,p),u=o.slice(n,r),f=0;f<_;++f)if(l[f]!==u[f]){m=l[f],d=u[f];break}return m<d?-1:d<m?1:0};function ip(e,o,n,r,s){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,ja(n)&&(n=s?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(s)return-1;n=e.length-1}else if(n<0)if(s)n=0;else return-1;if(typeof o=="string"&&(o=y.from(o,r)),y.isBuffer(o))return o.length===0?-1:op(e,o,n,r,s);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):op(e,[o],n,r,s);throw new TypeError("val must be string, number or Buffer")}function op(e,o,n,r,s){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function _(v,h){return p===1?v[h]:v.readUInt16BE(h*p)}var l;if(s){var u=-1;for(l=n;l<m;l++)if(_(e,l)===_(o,u===-1?0:l-u)){if(u===-1&&(u=l),l-u+1===d)return u*p}else u!==-1&&(l-=l-u),u=-1}else for(n+d>m&&(n=m-d),l=n;l>=0;l--){for(var f=!0,x=0;x<d;x++)if(_(e,l+x)!==_(o,x)){f=!1;break}if(f)return l}return-1}y.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};y.prototype.indexOf=function(o,n,r){return ip(this,o,n,r,!0)};y.prototype.lastIndexOf=function(o,n,r){return ip(this,o,n,r,!1)};function CT(e,o,n,r){n=Number(n)||0;var s=e.length-n;r?(r=Number(r),r>s&&(r=s)):r=s;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(ja(d))return m;e[n+m]=d}return m}function NT(e,o,n,r){return tr($a(o,e.length-n),e,n,r)}function LT(e,o,n,r){return tr(GT(o),e,n,r)}function DT(e,o,n,r){return tr(dp(o),e,n,r)}function PT(e,o,n,r){return tr(HT(o,e.length-n),e,n,r)}y.prototype.write=function(o,n,r,s){if(n===void 0)s="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")s=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,s===void 0&&(s="utf8")):(s=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var m=!1;;)switch(s){case"hex":return CT(this,o,n,r);case"utf8":case"utf-8":return NT(this,o,n,r);case"ascii":case"latin1":case"binary":return LT(this,o,n,r);case"base64":return DT(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return PT(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),m=!0}};y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ET(e,o,n){return o===0&&n===e.length?Ga.fromByteArray(e):Ga.fromByteArray(e.slice(o,n))}function cp(e,o,n){n=Math.min(e.length,n);for(var r=[],s=o;s<n;){var p=e[s],m=null,d=p>239?4:p>223?3:p>191?2:1;if(s+d<=n){var _,l,u,f;switch(d){case 1:p<128&&(m=p);break;case 2:_=e[s+1],(_&192)===128&&(f=(p&31)<<6|_&63,f>127&&(m=f));break;case 3:_=e[s+1],l=e[s+2],(_&192)===128&&(l&192)===128&&(f=(p&15)<<12|(_&63)<<6|l&63,f>2047&&(f<55296||f>57343)&&(m=f));break;case 4:_=e[s+1],l=e[s+2],u=e[s+3],(_&192)===128&&(l&192)===128&&(u&192)===128&&(f=(p&15)<<18|(_&63)<<12|(l&63)<<6|u&63,f>65535&&f<1114112&&(m=f))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),s+=d}return MT(r)}var np=4096;function MT(e){var o=e.length;if(o<=np)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=np));return n}function WT(e,o,n){var r="";n=Math.min(e.length,n);for(var s=o;s<n;++s)r+=String.fromCharCode(e[s]&127);return r}function RT(e,o,n){var r="";n=Math.min(e.length,n);for(var s=o;s<n;++s)r+=String.fromCharCode(e[s]);return r}function OT(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var s="",p=o;p<n;++p)s+=VT[e[p]];return s}function FT(e,o,n){for(var r=e.slice(o,n),s="",p=0;p<r.length-1;p+=2)s+=String.fromCharCode(r[p]+r[p+1]*256);return s}y.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var s=this.subarray(o,n);return Object.setPrototypeOf(s,y.prototype),s};function ge(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}y.prototype.readUintLE=y.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||ge(o,n,this.length);for(var s=this[o],p=1,m=0;++m<n&&(p*=256);)s+=this[o+m]*p;return s};y.prototype.readUintBE=y.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||ge(o,n,this.length);for(var s=this[o+--n],p=1;n>0&&(p*=256);)s+=this[o+--n]*p;return s};y.prototype.readUint8=y.prototype.readUInt8=function(o,n){return o=o>>>0,n||ge(o,1,this.length),this[o]};y.prototype.readUint16LE=y.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||ge(o,2,this.length),this[o]|this[o+1]<<8};y.prototype.readUint16BE=y.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||ge(o,2,this.length),this[o]<<8|this[o+1]};y.prototype.readUint32LE=y.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||ge(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};y.prototype.readUint32BE=y.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||ge(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};y.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||ge(o,n,this.length);for(var s=this[o],p=1,m=0;++m<n&&(p*=256);)s+=this[o+m]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*n)),s};y.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||ge(o,n,this.length);for(var s=n,p=1,m=this[o+--s];s>0&&(p*=256);)m+=this[o+--s]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};y.prototype.readInt8=function(o,n){return o=o>>>0,n||ge(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};y.prototype.readInt16LE=function(o,n){o=o>>>0,n||ge(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};y.prototype.readInt16BE=function(o,n){o=o>>>0,n||ge(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};y.prototype.readInt32LE=function(o,n){return o=o>>>0,n||ge(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};y.prototype.readInt32BE=function(o,n){return o=o>>>0,n||ge(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};y.prototype.readFloatLE=function(o,n){return o=o>>>0,n||ge(o,4,this.length),Ln.read(this,o,!0,23,4)};y.prototype.readFloatBE=function(o,n){return o=o>>>0,n||ge(o,4,this.length),Ln.read(this,o,!1,23,4)};y.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||ge(o,8,this.length),Ln.read(this,o,!0,52,8)};y.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||ge(o,8,this.length),Ln.read(this,o,!1,52,8)};function Ie(e,o,n,r,s,p){if(!y.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>s||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}y.prototype.writeUintLE=y.prototype.writeUIntLE=function(o,n,r,s){if(o=+o,n=n>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;Ie(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};y.prototype.writeUintBE=y.prototype.writeUIntBE=function(o,n,r,s){if(o=+o,n=n>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;Ie(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};y.prototype.writeUint8=y.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,1,255,0),this[n]=o&255,n+1};y.prototype.writeUint16LE=y.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};y.prototype.writeUint16BE=y.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};y.prototype.writeUint32LE=y.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};y.prototype.writeUint32BE=y.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};y.prototype.writeIntLE=function(o,n,r,s){if(o=+o,n=n>>>0,!s){var p=Math.pow(2,8*r-1);Ie(this,o,n,r,p-1,-p)}var m=0,d=1,_=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&_===0&&this[n+m-1]!==0&&(_=1),this[n+m]=(o/d>>0)-_&255;return n+r};y.prototype.writeIntBE=function(o,n,r,s){if(o=+o,n=n>>>0,!s){var p=Math.pow(2,8*r-1);Ie(this,o,n,r,p-1,-p)}var m=r-1,d=1,_=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[n+m+1]!==0&&(_=1),this[n+m]=(o/d>>0)-_&255;return n+r};y.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};y.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};y.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};y.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};y.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||Ie(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function sp(e,o,n,r,s,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function pp(e,o,n,r,s){return o=+o,n=n>>>0,s||sp(e,o,n,4,34028234663852886e22,-34028234663852886e22),Ln.write(e,o,n,r,23,4),n+4}y.prototype.writeFloatLE=function(o,n,r){return pp(this,o,n,!0,r)};y.prototype.writeFloatBE=function(o,n,r){return pp(this,o,n,!1,r)};function mp(e,o,n,r,s){return o=+o,n=n>>>0,s||sp(e,o,n,8,17976931348623157e292,-17976931348623157e292),Ln.write(e,o,n,r,52,8),n+8}y.prototype.writeDoubleLE=function(o,n,r){return mp(this,o,n,!0,r)};y.prototype.writeDoubleBE=function(o,n,r){return mp(this,o,n,!1,r)};y.prototype.copy=function(o,n,r,s){if(!y.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!s&&s!==0&&(s=this.length),n>=o.length&&(n=o.length),n||(n=0),s>0&&s<r&&(s=r),s===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),o.length-n<s-r&&(s=o.length-n+r);var p=s-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,s):Uint8Array.prototype.set.call(o,this.subarray(r,s),n),p};y.prototype.fill=function(o,n,r,s){if(typeof o=="string"){if(typeof n=="string"?(s=n,n=0,r=this.length):typeof r=="string"&&(s=r,r=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!y.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(o.length===1){var p=o.charCodeAt(0);(s==="utf8"&&p<128||s==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=y.isBuffer(o)?o:y.from(o,s),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%_]}return this};var BT=/[^+/0-9A-Za-z-_]/g;function UT(e){if(e=e.split("=")[0],e=e.trim().replace(BT,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function $a(e,o){o=o||1/0;for(var n,r=e.length,s=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!s){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}s=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),s=n;continue}n=(s-55296<<10|n-56320)+65536}else s&&(o-=3)>-1&&p.push(239,191,189);if(s=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function GT(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function HT(e,o){for(var n,r,s,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,s=n%256,p.push(s),p.push(r);return p}function dp(e){return Ga.toByteArray(UT(e))}function tr(e,o,n,r){for(var s=0;s<r&&!(s+n>=o.length||s>=e.length);++s)o[s+n]=e[s];return s}function ro(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function ja(e){return e!==e}var VT=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,s=0;s<16;++s)o[r+s]=e[n]+e[s];return o}()});var hp=A((yI,gp)=>{t();var ce=gp.exports={},ao,io;function Ka(){throw new Error("setTimeout has not been defined")}function Xa(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ao=setTimeout:ao=Ka}catch(e){ao=Ka}try{typeof clearTimeout=="function"?io=clearTimeout:io=Xa}catch(e){io=Xa}})();function lp(e){if(ao===setTimeout)return setTimeout(e,0);if((ao===Ka||!ao)&&setTimeout)return ao=setTimeout,setTimeout(e,0);try{return ao(e,0)}catch(o){try{return ao.call(null,e,0)}catch(n){return ao.call(this,e,0)}}}function $T(e){if(io===clearTimeout)return clearTimeout(e);if((io===Xa||!io)&&clearTimeout)return io=clearTimeout,clearTimeout(e);try{return io(e)}catch(o){try{return io.call(null,e)}catch(n){return io.call(this,e)}}}var vo=[],Pn=!1,rn,rr=-1;function qT(){!Pn||!rn||(Pn=!1,rn.length?vo=rn.concat(vo):rr=-1,vo.length&&up())}function up(){if(!Pn){var e=lp(qT);Pn=!0;for(var o=vo.length;o;){for(rn=vo,vo=[];++rr<o;)rn&&rn[rr].run();rr=-1,o=vo.length}rn=null,Pn=!1,$T(e)}}ce.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];vo.push(new fp(e,o)),vo.length===1&&!Pn&&lp(up)};function fp(e,o){this.fun=e,this.array=o}fp.prototype.run=function(){this.fun.apply(null,this.array)};ce.title="browser";ce.browser=!0;ce.env={};ce.argv=[];ce.version="";ce.versions={};function wo(){}ce.on=wo;ce.addListener=wo;ce.once=wo;ce.off=wo;ce.removeListener=wo;ce.removeAllListeners=wo;ce.emit=wo;ce.prependListener=wo;ce.prependOnceListener=wo;ce.listeners=function(e){return[]};ce.binding=function(e){throw new Error("process.binding is not supported")};ce.cwd=function(){return"/"};ce.chdir=function(e){throw new Error("process.chdir is not supported")};ce.umask=function(){return 0}});var a,c,zT,i,t=w(()=>{a=T(_p()),c=T(hp()),zT=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=zT});var Ya=w(()=>{"use strict";t()});var Tp,bo,xp,Za,yp,Sp,dt,co=w(()=>{"use strict";t();Tp="error when signing",bo="Transaction canceled",xp="error signing transaction",Za="provider not initialized",yp="You need a signer/valid signer to send a transaction,use either WalletProvider, LedgerProvider or WalletConnect",Sp="Undefined transaction status",dt="You cannot sign transactions from a different account"});var vp=w(()=>{"use strict";t()});var Ja,wp=w(()=>{"use strict";t();Ja=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(Ja||{})});var Qa,ei,oi,ni,_t,ti,ri=w(()=>{"use strict";t();Qa="1.0.8",ei="1.0.11",oi="1.0.15",ni="1.0.17",_t="1.0.22",ti="1.0.23"});var ai,ii=w(()=>{"use strict";t();ai={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var bp=w(()=>{"use strict";t()});var ci,si=w(()=>{"use strict";t();ci=(s=>(s.signature="signature",s.sessionId="sessionId",s.status="status",s.address="address",s))(ci||{})});var Ap=w(()=>{"use strict";t()});var Ip=w(()=>{"use strict";t()});var we,En,Bo=w(()=>{"use strict";t();we=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),En=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var kp,PI,Cp,EI,J=w(()=>{"use strict";t();Bo();kp=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(kp||{}),PI=g(g({},En.WindowProviderRequestEnums),kp),Cp=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Cp||{}),EI=g(g({},En.WindowProviderResponseEnums),Cp)});var Np=w(()=>{"use strict";t()});var Lp=w(()=>{"use strict";t()});var so,ke=w(()=>{"use strict";t();so=(s=>(s.raw="raw",s.text="text",s.decimal="decimal",s.smart="smart",s))(so||{})});var Dp=w(()=>{"use strict";t()});var Pp=w(()=>{"use strict";t()});var Ep=w(()=>{"use strict";t()});var Q=w(()=>{"use strict";t();si();Ap();Ip();J();Np();Lp();ke();Dp();Pp();Ep()});var an,Mp,YI,Wp,ZI,Rp,JI,QI,Op,Mn=w(()=>{"use strict";t();Q();an={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Mp,egldLabel:YI}=an["devnet"],{chainId:Wp,egldLabel:ZI}=an["testnet"],{chainId:Rp,egldLabel:JI}=an["mainnet"],QI={["devnet"]:Mp,["testnet"]:Wp,["mainnet"]:Rp},Op={[Mp]:"devnet",[Wp]:"testnet",[Rp]:"mainnet"}});var Fp,ar=w(()=>{"use strict";t();Fp="cancel-transaction-toast"});var po,Bp=w(()=>{"use strict";t();po=require("@multiversx/sdk-web-wallet-provider")});var Ce,Wn=w(()=>{"use strict";t();Ce=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Up,Gp,pi,ak,ik,mi=w(()=>{"use strict";t();Wn();pi=String((Gp=(Up=Ce.safeWindow)==null?void 0:Up.navigator)==null?void 0:Gp.userAgent),ak=/^((?!chrome|android).)*safari/i.test(pi),ik=/firefox/i.test(pi)&&/windows/i.test(pi)});var di,ir,lt,_i,ut,Ue,cn,Hp,Vp,$p,mo,cr,sr,qp,zp,jp,Ge,Kp,Xp,M=w(()=>{"use strict";t();Ya();co();vp();wp();ri();ii();bp();Mn();ar();Bp();mi();di=.01,ir=1500,lt=5e4,_i=5e4,ut=1e9,Ue=18,cn=4,Hp=1,Vp=1,$p="/dapp/init",mo="signSession",cr="sdk-dapp-version",sr="logout",qp="login",zp="cancelSignTx",jp="N/A",Ge="0",Kp="...",Xp="EGLD-000000"});var ft,pr=w(()=>{"use strict";t();ft=()=>Date.now()/1e3});var Yp=w(()=>{"use strict";t()});var Zp=w(()=>{"use strict";t()});var li=w(()=>{"use strict";t();pr();Yp();Zp()});var ui={};z(ui,{clear:()=>YT,getItem:()=>KT,localStorageKeys:()=>qe,removeItem:()=>XT,setItem:()=>jT});var qe,mr,jT,KT,XT,YT,Rn=w(()=>{"use strict";t();li();qe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},mr=typeof localStorage!="undefined",jT=({key:e,data:o,expires:n})=>{!mr||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},KT=e=>{if(!mr)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:ft()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},XT=e=>{!mr||localStorage.removeItem(String(e))},YT=()=>{!mr||localStorage.clear()}});var fi={};z(fi,{clear:()=>om,getItem:()=>Qp,removeItem:()=>em,setItem:()=>Jp,storage:()=>ZT});var Jp,Qp,em,om,ZT,nm=w(()=>{"use strict";t();Jp=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Qp=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},em=e=>sessionStorage.removeItem(String(e)),om=()=>sessionStorage.clear(),ZT={setItem:Jp,getItem:Qp,removeItem:em,clear:om}});var _o,On=w(()=>{"use strict";t();Rn();nm();_o={session:fi,local:ui}});var gi,ee,Ne,ae=w(()=>{"use strict";t();gi=require("@reduxjs/toolkit");M();ee=(0,gi.createAction)(sr),Ne=(0,gi.createAction)(qp,e=>({payload:e}))});var Ti,tm,rm,dr,hi,am,_r,JT,xi,Ok,QT,ex,Fk,Bk,Uk,ox,nx,lr,ur=w(()=>{"use strict";t();Ti=require("@multiversx/sdk-core"),tm=require("@reduxjs/toolkit"),rm=require("redux-persist");M();On();Rn();ae();dr={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ge},hi={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":dr},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},am=(0,tm.createSlice)({name:"accountInfoSlice",initialState:hi,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Ti.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:dr},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(ee,()=>(_o.local.removeItem(qe.loginExpiresAt),hi)),e.addCase(Ne,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new Ti.Address(r).hex()}),e.addCase(rm.REHYDRATE,(o,n)=>{var l;if(!((l=n.payload)!=null&&l.account))return;let{account:r}=n.payload,{address:s,shard:p,accounts:m,publicKey:d}=r;o.address=s,o.shard=p;let _=m&&s in m;o.accounts=_?m:hi.accounts,o.publicKey=d})}}),{setAccount:_r,setAddress:JT,setAccountNonce:xi,setAccountShard:Ok,setLedgerAccount:QT,updateLedgerAccount:ex,setWalletConnectAccount:Fk,setIsAccountLoading:Bk,setAccountLoadingError:Uk,setWebsocketEvent:ox,setWebsocketBatchEvent:nx}=am.actions,lr=am.reducer});function gt(){return new Date().setHours(new Date().getHours()+24)}function ht(e){_o.local.setItem({key:qe.loginExpiresAt,data:e,expires:e})}var yi=w(()=>{"use strict";t();On();Rn()});var cm,im,sm,Yk,tx,rx,Si,Zk,ax,pm,Jk,Qk,eC,fr,gr=w(()=>{"use strict";t();cm=require("@reduxjs/toolkit");yi();J();ae();im={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},sm=(0,cm.createSlice)({name:"loginInfoSlice",initialState:im,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(ee,()=>im),e.addCase(Ne,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,ht(gt())})}}),{setLoginMethod:Yk,setWalletConnectLogin:tx,setLedgerLogin:rx,setTokenLogin:Si,setTokenLoginSignature:Zk,setWalletLogin:ax,invalidateLoginSession:pm,setLogoutRoute:Jk,setIsWalletConnectV2Initialized:Qk,setWebviewLogin:eC}=sm.actions,fr=sm.reducer});var dm,mm,_m,rC,ix,aC,cx,hr,Tr=w(()=>{"use strict";t();dm=require("@reduxjs/toolkit");ae();mm={},_m=(0,dm.createSlice)({name:"modalsSlice",initialState:mm,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(ee,()=>mm)}}),{setTxSubmittedModal:rC,setNotificationModal:ix,clearTxSubmittedModal:aC,clearNotificationModal:cx}=_m.actions,hr=_m.reducer});var ze,sn=w(()=>{"use strict";t();ze=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var V,Te=w(()=>{"use strict";t();sn();V=()=>{if(!ze())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:s,search:p}}=window;return{pathname:o,hash:n,origin:r,href:s,search:p}}});var Fn,lm=w(()=>{"use strict";t();Te();Fn=(e="")=>{let o=V(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var Ao,um=w(()=>{"use strict";t();xe();Ao=()=>{let{pathname:e,search:o,hash:n}=V();return`${e!=null?e:""}${o!=null?o:""}${n!=null?n:""}`}});var fm,gm=w(()=>{"use strict";t();Wn();fm=e=>{if(!Ce.safeWindow.location)return;if(!new URL(Ce.safeWindow.location.href).protocol.startsWith("http"))return Ce.safeWindow.location.reload();Ce.safeWindow.location.assign(e)}});var xe=w(()=>{"use strict";t();lm();um();Te();gm()});var hm,Tm,Tt,xt=w(()=>{"use strict";t();xe();hm=!1,Tm=(e=!0)=>{hm=e},Tt=({timeout:e=0,url:o})=>{hm||setTimeout(()=>{if(!!window)return fm(o)},e)}});var xm=w(()=>{"use strict";t();xt()});function ym(e){return e[Math.floor(Math.random()*e.length)]}var Sm=w(()=>{"use strict";t()});function vi(e){let o=null;if((e==null?void 0:e.statusCode)in ai){let n=e==null?void 0:e.statusCode,{message:r}=ai[n];o=mx.includes(n)?vm:r}return{errorMessage:o,defaultErrorMessage:vm}}var vm,sx,px,mx,wi=w(()=>{"use strict";t();ii();vm="Check if the MultiversX app is open on Ledger",sx=28161,px=28160,mx=[sx,px]});var Io=w(()=>{"use strict";t();xm();Sm();wi()});var wm,bm,Am,bi,_x,Im,RC,OC,lx,xr,yr=w(()=>{"use strict";t();wm=require("@reduxjs/toolkit"),bm=T(require("lodash.omit")),Am=require("redux-persist");ar();ae();Io();bi={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},_x={network:bi},Im=(0,wm.createSlice)({name:"appConfig",initialState:_x,reducers:{initializeNetworkConfig:(e,o)=>{let n=ym(o.payload.walletConnectV2RelayAddresses),r=(0,bm.default)(o.payload,"walletConnectV2RelayAddresses");e.network=I(g(g({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=g(g({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(ee,o=>{o.network.customWalletAddress=void 0}),e.addCase(Am.REHYDRATE,(o,n)=>{var s,p;if(!((p=(s=n.payload)==null?void 0:s.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:RC,updateNetworkConfig:OC,setCustomWalletAddress:lx}=Im.actions,xr=Im.reducer});var km,Ai,Cm,VC,$C,qC,Sr,vr=w(()=>{"use strict";t();km=require("@reduxjs/toolkit");Q();ae();Ai={isSigning:!1,signedSessions:{}},Cm=(0,km.createSlice)({name:"signedMessageInfoSliceState",initialState:Ai,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:s}=o.payload;s&&(e.errorMessage=s),e.isSigning=r.status==="pending",e.signedSessions[n]=g(g({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>g(g({},e),o.payload),clearSignedMessageInfo:()=>Ai},extraReducers:e=>{e.addCase(ee,()=>Ai)}}),{setSignSession:VC,clearSignedMessageInfo:$C,setSignSessionState:qC}=Cm.actions,Sr=Cm.reducer});var Lm,Dm,Nm,Pm,Ii,ux,JC,fx,wr,br=w(()=>{"use strict";t();Lm=require("@reduxjs/toolkit"),Dm=require("redux-persist");Q();pr();ae();Nm={customToasts:[],transactionToasts:[]},Pm=(0,Lm.createSlice)({name:"toastsSlice",initialState:Nm,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(s=>s.toastId===n);if(r!==-1){e.customToasts[r]=I(g(g({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(I(g({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:ft(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(ee,()=>Nm),e.addCase(Dm.REHYDRATE,(o,n)=>{var s,p;let r=(p=(s=n.customToasts)==null?void 0:s.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Ii,removeCustomToast:ux,addTransactionToast:JC,removeTransactionToast:fx}=Pm.actions,wr=Pm.reducer});var Em,Ci,Ni,Li,gx,ki,Mm,nN,hx,Bn,Ar,Ir=w(()=>{"use strict";t();Em=require("@reduxjs/toolkit");ae();Ci="Transaction failed",Ni="Transaction successful",Li="Processing transaction",gx="Transaction submitted",ki={},Mm=(0,Em.createSlice)({name:"transactionsInfo",initialState:ki,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Ci,successMessage:(r==null?void 0:r.successMessage)||Ni,processingMessage:(r==null?void 0:r.processingMessage)||Li,submittedMessage:(r==null?void 0:r.submittedMessage)||gx,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>ki},extraReducers:e=>{e.addCase(ee,()=>ki)}}),{clearTransactionsInfo:nN,setTransactionsDisplayInfo:hx,clearTransactionsInfoForSessionId:Bn}=Mm.actions,Ar=Mm.reducer});function Gn(e){return e!=null&&(kx(e)||Px(e))}function Hn(e){return e!=null&&(Cx(e)||Ex(e))}function Vn(e){return e!=null&&(Nx(e)||Mx(e))}function Wm(e){return e!=null&&(Lx(e)||Wx(e))}function Di(e){return e!=null&&Dx(e)}function kx(e){return e!=null&&Tx.includes(e)}function Cx(e){return e!=null&&xx.includes(e)}function Nx(e){return e!=null&&yx.includes(e)}function Lx(e){return e!=null&&Sx.includes(e)}function Dx(e){return e!=null&&vx.includes(e)}function Px(e){return e!=null&&wx.includes(e)}function Ex(e){return e!=null&&bx.includes(e)}function Mx(e){return e!=null&&Ax.includes(e)}function Wx(e){return e!=null&&Ix.includes(e)}var Tx,xx,yx,Sx,vx,wx,bx,Ax,Ix,$n=w(()=>{"use strict";t();J();Tx=["sent"],xx=["success"],yx=["fail","cancelled","timedOut"],Sx=["invalid"],vx=["timedOut"],wx=["pending"],bx=["success"],Ax=["fail","invalid"],Ix=["not executed"]});var Rm,Om,yt,Rx,Fm,Bm,Um,Ox,Go,Fx,Bx,dN,Gm,ko,lo,_N,kr,Cr=w(()=>{"use strict";t();Rm=require("@reduxjs/toolkit"),Om=require("redux-persist");J();$n();ae();yt={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Rx={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Fm=(0,Rm.createSlice)({name:"transactionsSlice",initialState:yt,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,l;let{sessionId:n,transactions:r,errorMessage:s,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=g(g(g({},Rx),((_=e.signedTransactions[n])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:s,redirectRoute:m,customTransactionInformation:g(g({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((l=e==null?void 0:e.transactionsToSign)==null?void 0:l.sessionId)===n&&(e.transactionsToSign=yt.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=g(g({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:s,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,s!=null&&(e.signedTransactions[n].errorMessage=s),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var l,u,f,x,v,h,N,b;let{sessionId:n,status:r,errorMessage:s,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,_=(u=(l=e.signedTransactions)==null?void 0:l[n])==null?void 0:u.transactions;if(_!=null){e.signedTransactions[n].transactions=_.map(P=>P.hash===p?I(g(g({},m!=null?m:{}),P),{status:r,errorMessage:s,inTransit:d}):P);let E=(x=(f=e.signedTransactions[n])==null?void 0:f.transactions)==null?void 0:x.every(P=>Hn(P.status)),R=(h=(v=e.signedTransactions[n])==null?void 0:v.transactions)==null?void 0:h.some(P=>Vn(P.status)),O=(b=(N=e.signedTransactions[n])==null?void 0:N.transactions)==null?void 0:b.every(P=>Wm(P.status));E&&(e.signedTransactions[n].status="success"),R&&(e.signedTransactions[n].status="fail"),O&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=yt.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=yt.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=g(g({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(ee,()=>yt),e.addCase(Om.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:s}=n.payload.transactions,p=Object.entries(r).reduce((d,[_,l])=>{let u=new Date(_),f=new Date;return f.setHours(f.getHours()+5),f-u>0||(d[_]=l),d},{});s!=null&&(o.customTransactionInformationForSessionId=s),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Bm,updateSignedTransactions:Um,setTransactionsToSign:Ox,clearAllTransactionsToSign:Go,clearAllSignedTransactions:Fx,clearSignedTransaction:Bx,clearTransactionToSign:dN,setSignTransactionsError:Gm,setSignTransactionsCancelMessage:ko,moveTransactionsToSignedState:lo,updateSignedTransactionsCustomTransactionInformation:_N}=Fm.actions,kr=Fm.reducer});var Hm,Pi,Vm,gN,hN,Ux,TN,Nr,Lr=w(()=>{"use strict";t();Hm=require("@reduxjs/toolkit");ae();Pi={},Vm=(0,Hm.createSlice)({name:"batchTransactionsSlice",initialState:Pi,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Pi},extraReducers:e=>{e.addCase(ee,()=>Pi)}}),{setBatchTransactions:gN,updateBatchTransactions:hN,clearBatchTransactions:Ux,clearAllBatchTransactions:TN}=Vm.actions,Nr=Vm.reducer});var qm,$m,zm,vN,jm,Ei=w(()=>{"use strict";t();qm=require("@reduxjs/toolkit");ae();$m={},zm=(0,qm.createSlice)({name:"dappConfigSlice",initialState:$m,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(ee,()=>$m)}}),{setDappConfig:vN}=zm.actions,jm=zm.reducer});var K=w(()=>{"use strict";t();ur();gr();Tr();yr();vr();br();Ir();Cr();Lr();Ei()});var Mi=w(()=>{"use strict";t()});var Ym,$x,qx,pn,Er=w(()=>{"use strict";t();Ym=require("@reduxjs/toolkit");Mi();ur();Lr();Ei();gr();Tr();yr();vr();br();Ir();Cr();$x={["account"]:lr,["dappConfig"]:jm,["loginInfo"]:fr,["modals"]:hr,["networkConfig"]:xr,["signedMessageInfo"]:Sr,["toasts"]:wr,["transactionsInfo"]:Ar,["transactions"]:kr,["batchTransactions"]:Nr},qx=(e={})=>(0,Ym.combineReducers)(g(g({},$x),e)),pn=qx});var ed={};z(ed,{default:()=>cy,sessionStorageReducers:()=>Wi});function Co(e,o=[]){return{key:e,version:1,storage:Jm.default,blacklist:o}}var Le,Zm,Jm,zx,St,jx,Kx,Xx,Yx,Zx,Jx,Qx,ey,oy,ny,Qm,ty,Wi,ry,ay,iy,cy,od=w(()=>{"use strict";t();Le=require("redux-persist"),Zm=T(require("redux-persist/lib/storage")),Jm=T(require("redux-persist/lib/storage/session"));Er();K();ur();Lr();gr();Tr();yr();vr();br();Ir();Cr();Mi();zx={persistReducersStorageType:"localStorage"},St={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},jx=Co(St["account"]),Kx=Co(St["loginInfo"]),Xx=Co(St["modals"]),Yx=Co(St["networkConfig"]),Zx={2:e=>I(g({},e),{networkConfig:bi})};Jx=Co("sdk-dapp-transactionsInfo"),Qx=Co("sdk-dapp-transactions",["transactionsToSign"]),ey=Co("sdk-dapp-batchTransactions",["batchTransactions"]),oy=Co("sdk-dapp-toasts"),ny=Co("sdk-dapp-signedMessageInfo"),Qm={key:"sdk-dapp-store",version:2,storage:Zm.default,whitelist:Object.keys(St),migrate:(0,Le.createMigrate)(Zx,{debug:!1})},ty=I(g({},Qm),{whitelist:[]}),Wi={["toasts"]:(0,Le.persistReducer)(oy,wr),["transactions"]:(0,Le.persistReducer)(Qx,kr),["transactionsInfo"]:(0,Le.persistReducer)(Jx,Ar),["batchTransactions"]:(0,Le.persistReducer)(ey,Nr),["signedMessageInfo"]:(0,Le.persistReducer)(ny,Sr)},ry=I(g({},Wi),{["account"]:(0,Le.persistReducer)(jx,lr),["loginInfo"]:(0,Le.persistReducer)(Kx,fr),["modals"]:(0,Le.persistReducer)(Xx,hr),["networkConfig"]:(0,Le.persistReducer)(Yx,xr)}),ay=zx.persistReducersStorageType==="localStorage",iy=ay?(0,Le.persistReducer)(Qm,pn(Wi)):(0,Le.persistReducer)(ty,pn(ry)),cy=iy});var nd={};z(nd,{default:()=>sy});var sy,td=w(()=>{"use strict";t();Er();sy=pn()});var rd={};z(rd,{default:()=>my});var He,py,my,ad=w(()=>{"use strict";t();He=require("redux-persist"),py=[He.FLUSH,He.REHYDRATE,He.PAUSE,He.PERSIST,He.PURGE,He.REGISTER],my=py});var sd={};z(sd,{default:()=>cd});function cd(e){return(0,id.persistStore)(e)}var id,pd=w(()=>{"use strict";t();id=require("redux-persist")});var K_=A((LF,j_)=>{t();var LS=typeof i=="object"&&i&&i.Object===Object&&i;j_.exports=LS});var Et=A((DF,X_)=>{t();var DS=K_(),PS=typeof self=="object"&&self&&self.Object===Object&&self,ES=DS||PS||Function("return this")();X_.exports=ES});var sa=A((PF,Y_)=>{t();var MS=Et(),WS=MS.Symbol;Y_.exports=WS});var el=A((EF,Q_)=>{t();var Z_=sa(),J_=Object.prototype,RS=J_.hasOwnProperty,OS=J_.toString,Mt=Z_?Z_.toStringTag:void 0;function FS(e){var o=RS.call(e,Mt),n=e[Mt];try{e[Mt]=void 0;var r=!0}catch(p){}var s=OS.call(e);return r&&(o?e[Mt]=n:delete e[Mt]),s}Q_.exports=FS});var nl=A((MF,ol)=>{t();var BS=Object.prototype,US=BS.toString;function GS(e){return US.call(e)}ol.exports=GS});var pa=A((WF,al)=>{t();var tl=sa(),HS=el(),VS=nl(),$S="[object Null]",qS="[object Undefined]",rl=tl?tl.toStringTag:void 0;function zS(e){return e==null?e===void 0?qS:$S:rl&&rl in Object(e)?HS(e):VS(e)}al.exports=zS});var uc=A((RF,il)=>{t();var jS=Array.isArray;il.exports=jS});var fc=A((OF,cl)=>{t();function KS(e){return e!=null&&typeof e=="object"}cl.exports=KS});var pl=A((FF,sl)=>{t();var XS=pa(),YS=uc(),ZS=fc(),JS="[object String]";function QS(e){return typeof e=="string"||!YS(e)&&ZS(e)&&XS(e)==JS}sl.exports=QS});var la=A((LU,vl)=>{t();function d0(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}vl.exports=d0});var bl=A((DU,wl)=>{t();var _0=pa(),l0=la(),u0="[object AsyncFunction]",f0="[object Function]",g0="[object GeneratorFunction]",h0="[object Proxy]";function T0(e){if(!l0(e))return!1;var o=_0(e);return o==f0||o==g0||o==u0||o==h0}wl.exports=T0});var Il=A((PU,Al)=>{t();var x0=Et(),y0=x0["__core-js_shared__"];Al.exports=y0});var Nl=A((EU,Cl)=>{t();var xc=Il(),kl=function(){var e=/[^.]+$/.exec(xc&&xc.keys&&xc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function S0(e){return!!kl&&kl in e}Cl.exports=S0});var Dl=A((MU,Ll)=>{t();var v0=Function.prototype,w0=v0.toString;function b0(e){if(e!=null){try{return w0.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Ll.exports=b0});var El=A((WU,Pl)=>{t();var A0=bl(),I0=Nl(),k0=la(),C0=Dl(),N0=/[\\^$.*+?()[\]{}|]/g,L0=/^\[object .+?Constructor\]$/,D0=Function.prototype,P0=Object.prototype,E0=D0.toString,M0=P0.hasOwnProperty,W0=RegExp("^"+E0.call(M0).replace(N0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function R0(e){if(!k0(e)||I0(e))return!1;var o=A0(e)?W0:L0;return o.test(C0(e))}Pl.exports=R0});var Wl=A((RU,Ml)=>{t();function O0(e,o){return e==null?void 0:e[o]}Ml.exports=O0});var ua=A((OU,Rl)=>{t();var F0=El(),B0=Wl();function U0(e,o){var n=B0(e,o);return F0(n)?n:void 0}Rl.exports=U0});var Rt=A((FU,Ol)=>{t();var G0=ua(),H0=G0(Object,"create");Ol.exports=H0});var Ul=A((BU,Bl)=>{t();var Fl=Rt();function V0(){this.__data__=Fl?Fl(null):{},this.size=0}Bl.exports=V0});var Hl=A((UU,Gl)=>{t();function $0(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Gl.exports=$0});var $l=A((GU,Vl)=>{t();var q0=Rt(),z0="__lodash_hash_undefined__",j0=Object.prototype,K0=j0.hasOwnProperty;function X0(e){var o=this.__data__;if(q0){var n=o[e];return n===z0?void 0:n}return K0.call(o,e)?o[e]:void 0}Vl.exports=X0});var zl=A((HU,ql)=>{t();var Y0=Rt(),Z0=Object.prototype,J0=Z0.hasOwnProperty;function Q0(e){var o=this.__data__;return Y0?o[e]!==void 0:J0.call(o,e)}ql.exports=Q0});var Kl=A((VU,jl)=>{t();var ev=Rt(),ov="__lodash_hash_undefined__";function nv(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ev&&o===void 0?ov:o,this}jl.exports=nv});var Yl=A(($U,Xl)=>{t();var tv=Ul(),rv=Hl(),av=$l(),iv=zl(),cv=Kl();function Yn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Yn.prototype.clear=tv;Yn.prototype.delete=rv;Yn.prototype.get=av;Yn.prototype.has=iv;Yn.prototype.set=cv;Xl.exports=Yn});var Jl=A((qU,Zl)=>{t();function sv(){this.__data__=[],this.size=0}Zl.exports=sv});var eu=A((zU,Ql)=>{t();function pv(e,o){return e===o||e!==e&&o!==o}Ql.exports=pv});var Ot=A((jU,ou)=>{t();var mv=eu();function dv(e,o){for(var n=e.length;n--;)if(mv(e[n][0],o))return n;return-1}ou.exports=dv});var tu=A((KU,nu)=>{t();var _v=Ot(),lv=Array.prototype,uv=lv.splice;function fv(e){var o=this.__data__,n=_v(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():uv.call(o,n,1),--this.size,!0}nu.exports=fv});var au=A((XU,ru)=>{t();var gv=Ot();function hv(e){var o=this.__data__,n=gv(o,e);return n<0?void 0:o[n][1]}ru.exports=hv});var cu=A((YU,iu)=>{t();var Tv=Ot();function xv(e){return Tv(this.__data__,e)>-1}iu.exports=xv});var pu=A((ZU,su)=>{t();var yv=Ot();function Sv(e,o){var n=this.__data__,r=yv(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}su.exports=Sv});var du=A((JU,mu)=>{t();var vv=Jl(),wv=tu(),bv=au(),Av=cu(),Iv=pu();function Zn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Zn.prototype.clear=vv;Zn.prototype.delete=wv;Zn.prototype.get=bv;Zn.prototype.has=Av;Zn.prototype.set=Iv;mu.exports=Zn});var lu=A((QU,_u)=>{t();var kv=ua(),Cv=Et(),Nv=kv(Cv,"Map");_u.exports=Nv});var gu=A((eG,fu)=>{t();var uu=Yl(),Lv=du(),Dv=lu();function Pv(){this.size=0,this.__data__={hash:new uu,map:new(Dv||Lv),string:new uu}}fu.exports=Pv});var Tu=A((oG,hu)=>{t();function Ev(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}hu.exports=Ev});var Ft=A((nG,xu)=>{t();var Mv=Tu();function Wv(e,o){var n=e.__data__;return Mv(o)?n[typeof o=="string"?"string":"hash"]:n.map}xu.exports=Wv});var Su=A((tG,yu)=>{t();var Rv=Ft();function Ov(e){var o=Rv(this,e).delete(e);return this.size-=o?1:0,o}yu.exports=Ov});var wu=A((rG,vu)=>{t();var Fv=Ft();function Bv(e){return Fv(this,e).get(e)}vu.exports=Bv});var Au=A((aG,bu)=>{t();var Uv=Ft();function Gv(e){return Uv(this,e).has(e)}bu.exports=Gv});var ku=A((iG,Iu)=>{t();var Hv=Ft();function Vv(e,o){var n=Hv(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}Iu.exports=Vv});var Nu=A((cG,Cu)=>{t();var $v=gu(),qv=Su(),zv=wu(),jv=Au(),Kv=ku();function Jn(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Jn.prototype.clear=$v;Jn.prototype.delete=qv;Jn.prototype.get=zv;Jn.prototype.has=jv;Jn.prototype.set=Kv;Cu.exports=Jn});var Du=A((sG,Lu)=>{t();var Xv="__lodash_hash_undefined__";function Yv(e){return this.__data__.set(e,Xv),this}Lu.exports=Yv});var Eu=A((pG,Pu)=>{t();function Zv(e){return this.__data__.has(e)}Pu.exports=Zv});var Wu=A((mG,Mu)=>{t();var Jv=Nu(),Qv=Du(),ew=Eu();function fa(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new Jv;++o<n;)this.add(e[o])}fa.prototype.add=fa.prototype.push=Qv;fa.prototype.has=ew;Mu.exports=fa});var Ou=A((dG,Ru)=>{t();function ow(e,o,n,r){for(var s=e.length,p=n+(r?1:-1);r?p--:++p<s;)if(o(e[p],p,e))return p;return-1}Ru.exports=ow});var Bu=A((_G,Fu)=>{t();function nw(e){return e!==e}Fu.exports=nw});var Gu=A((lG,Uu)=>{t();function tw(e,o,n){for(var r=n-1,s=e.length;++r<s;)if(e[r]===o)return r;return-1}Uu.exports=tw});var Vu=A((uG,Hu)=>{t();var rw=Ou(),aw=Bu(),iw=Gu();function cw(e,o,n){return o===o?iw(e,o,n):rw(e,aw,n)}Hu.exports=cw});var qu=A((fG,$u)=>{t();var sw=Vu();function pw(e,o){var n=e==null?0:e.length;return!!n&&sw(e,o,0)>-1}$u.exports=pw});var ju=A((gG,zu)=>{t();function mw(e,o,n){for(var r=-1,s=e==null?0:e.length;++r<s;)if(n(o,e[r]))return!0;return!1}zu.exports=mw});var Xu=A((hG,Ku)=>{t();function dw(e,o){return e.has(o)}Ku.exports=dw});var Zu=A((TG,Yu)=>{t();var _w=ua(),lw=Et(),uw=_w(lw,"Set");Yu.exports=uw});var Qu=A((xG,Ju)=>{t();function fw(){}Ju.exports=fw});var yc=A((yG,ef)=>{t();function gw(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}ef.exports=gw});var nf=A((SG,of)=>{t();var Sc=Zu(),hw=Qu(),Tw=yc(),xw=1/0,yw=Sc&&1/Tw(new Sc([,-0]))[1]==xw?function(e){return new Sc(e)}:hw;of.exports=yw});var rf=A((vG,tf)=>{t();var Sw=Wu(),vw=qu(),ww=ju(),bw=Xu(),Aw=nf(),Iw=yc(),kw=200;function Cw(e,o,n){var r=-1,s=vw,p=e.length,m=!0,d=[],_=d;if(n)m=!1,s=ww;else if(p>=kw){var l=o?null:Aw(e);if(l)return Iw(l);m=!1,s=bw,_=new Sw}else _=o?[]:d;e:for(;++r<p;){var u=e[r],f=o?o(u):u;if(u=n||u!==0?u:0,m&&f===f){for(var x=_.length;x--;)if(_[x]===f)continue e;o&&_.push(f),d.push(u)}else s(_,f,n)||(_!==d&&_.push(f),d.push(u))}return d}tf.exports=Cw});var cf=A((wG,af)=>{t();var Nw=rf();function Lw(e){return e&&e.length?Nw(e):[]}af.exports=Lw});var Dc={};z(Dc,{css:()=>Sf,default:()=>Jw});var Sf,Jw,Pc=w(()=>{"use strict";t();Sf=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sf));Jw={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Wo={};z(Wo,{css:()=>bf,default:()=>ob});var bf,ob,Ro=w(()=>{"use strict";t();bf=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bf));ob={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Vt={};z(Vt,{css:()=>Ff,default:()=>xb});var Ff,xb,$t=w(()=>{"use strict";t();Ff=`.dapp-core-component__transactionStatusToastStyles__transactions-status-toast {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ff));xb={"transactions-status-toast":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast",transactionsStatusToast:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast","transactions-status-toast-content":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content",transactionsStatusToastContent:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content","transactions-status-toast-icon":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",transactionsStatusToastIcon:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",svg:"dapp-core-component__transactionStatusToastStyles__svg",toasts:"dapp-core-component__transactionStatusToastStyles__toasts",toastWrapper:"dapp-core-component__transactionStatusToastStyles__toastWrapper"}});var zc={};z(zc,{css:()=>qf,default:()=>bb});var qf,bb,jc=w(()=>{"use strict";t();qf=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qf));bb={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var Kc={};z(Kc,{css:()=>jf,default:()=>Ib});var jf,Ib,Xc=w(()=>{"use strict";t();jf=`.dapp-core-component__signWaitingScreenModal-styles__extension-modal {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__modal-container {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__extension {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jf));Ib={"extension-modal":"dapp-core-component__signWaitingScreenModal-styles__extension-modal",extensionModal:"dapp-core-component__signWaitingScreenModal-styles__extension-modal","modal-container":"dapp-core-component__signWaitingScreenModal-styles__modal-container",modalContainer:"dapp-core-component__signWaitingScreenModal-styles__modal-container",extension:"dapp-core-component__signWaitingScreenModal-styles__extension"}});var cg=A(($X,ig)=>{t();function Nb(e,o){for(var n=-1,r=e==null?0:e.length,s=Array(r);++n<r;)s[n]=o(e[n],n,e);return s}ig.exports=Nb});var pg=A((qX,sg)=>{t();var Lb=pa(),Db=fc(),Pb="[object Symbol]";function Eb(e){return typeof e=="symbol"||Db(e)&&Lb(e)==Pb}sg.exports=Eb});var fg=A((zX,ug)=>{t();var mg=sa(),Mb=cg(),Wb=uc(),Rb=pg(),Ob=1/0,dg=mg?mg.prototype:void 0,_g=dg?dg.toString:void 0;function lg(e){if(typeof e=="string")return e;if(Wb(e))return Mb(e,lg)+"";if(Rb(e))return _g?_g.call(e):"";var o=e+"";return o=="0"&&1/e==-Ob?"-0":o}ug.exports=lg});var Jc=A((jX,gg)=>{t();var Fb=fg();function Bb(e){return e==null?"":Fb(e)}gg.exports=Bb});var Tg=A((KX,hg)=>{t();function Ub(e,o,n){var r=-1,s=e.length;o<0&&(o=-o>s?0:s+o),n=n>s?s:n,n<0&&(n+=s),s=o>n?0:n-o>>>0,o>>>=0;for(var p=Array(s);++r<s;)p[r]=e[r+o];return p}hg.exports=Ub});var yg=A((XX,xg)=>{t();var Gb=Tg();function Hb(e,o,n){var r=e.length;return n=n===void 0?r:n,!o&&n>=r?e:Gb(e,o,n)}xg.exports=Hb});var Qc=A((YX,Sg)=>{t();var Vb="\\ud800-\\udfff",$b="\\u0300-\\u036f",qb="\\ufe20-\\ufe2f",zb="\\u20d0-\\u20ff",jb=$b+qb+zb,Kb="\\ufe0e\\ufe0f",Xb="\\u200d",Yb=RegExp("["+Xb+Vb+jb+Kb+"]");function Zb(e){return Yb.test(e)}Sg.exports=Zb});var wg=A((ZX,vg)=>{t();function Jb(e){return e.split("")}vg.exports=Jb});var Dg=A((JX,Lg)=>{t();var bg="\\ud800-\\udfff",Qb="\\u0300-\\u036f",eA="\\ufe20-\\ufe2f",oA="\\u20d0-\\u20ff",nA=Qb+eA+oA,tA="\\ufe0e\\ufe0f",rA="["+bg+"]",es="["+nA+"]",os="\\ud83c[\\udffb-\\udfff]",aA="(?:"+es+"|"+os+")",Ag="[^"+bg+"]",Ig="(?:\\ud83c[\\udde6-\\uddff]){2}",kg="[\\ud800-\\udbff][\\udc00-\\udfff]",iA="\\u200d",Cg=aA+"?",Ng="["+tA+"]?",cA="(?:"+iA+"(?:"+[Ag,Ig,kg].join("|")+")"+Ng+Cg+")*",sA=Ng+Cg+cA,pA="(?:"+[Ag+es+"?",es,Ig,kg,rA].join("|")+")",mA=RegExp(os+"(?="+os+")|"+pA+sA,"g");function dA(e){return e.match(mA)||[]}Lg.exports=dA});var Eg=A((QX,Pg)=>{t();var _A=wg(),lA=Qc(),uA=Dg();function fA(e){return lA(e)?uA(e):_A(e)}Pg.exports=fA});var Wg=A((eY,Mg)=>{t();var gA=yg(),hA=Qc(),TA=Eg(),xA=Jc();function yA(e){return function(o){o=xA(o);var n=hA(o)?TA(o):void 0,r=n?n[0]:o.charAt(0),s=n?gA(n,1).join(""):o.slice(1);return r[e]()+s}}Mg.exports=yA});var Og=A((oY,Rg)=>{t();var SA=Wg(),vA=SA("toUpperCase");Rg.exports=vA});var Bg=A((nY,Fg)=>{t();var wA=Jc(),bA=Og();function AA(e){return bA(wA(e).toLowerCase())}Fg.exports=AA});var ts={};z(ts,{css:()=>qg,default:()=>kA});var qg,kA,rs=w(()=>{"use strict";t();qg=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qg));kA={copy:"dapp-core-component__copyButton-styles__copy"}});var is={};z(is,{css:()=>jg,default:()=>NA});var jg,NA,cs=w(()=>{"use strict";t();jg=`.dapp-core-component__TransactionDataStyles__transactionData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jg));NA={transactionData:"dapp-core-component__TransactionDataStyles__transactionData",transactionDataLabel:"dapp-core-component__TransactionDataStyles__transactionDataLabel",transactionDataValueWrapper:"dapp-core-component__TransactionDataStyles__transactionDataValueWrapper",transactionDataValue:"dapp-core-component__TransactionDataStyles__transactionDataValue",transactionDataValueText:"dapp-core-component__TransactionDataStyles__transactionDataValueText",transactionDataValueCopy:"dapp-core-component__TransactionDataStyles__transactionDataValueCopy"}});var ss={};z(ss,{css:()=>Zg,default:()=>PA});var Zg,PA,ps=w(()=>{"use strict";t();Zg=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zg));PA={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var ds={};z(ds,{css:()=>Jg,default:()=>MA});var Jg,MA,_s=w(()=>{"use strict";t();Jg=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jg));MA={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var ls={};z(ls,{css:()=>oh,default:()=>OA});var oh,OA,us=w(()=>{"use strict";t();oh=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oh));OA={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var gs={};z(gs,{css:()=>ah,default:()=>UA});var ah,UA,hs=w(()=>{"use strict";t();ah=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ah));UA={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var Ts={};z(Ts,{css:()=>mh,default:()=>HA});var mh,HA,xs=w(()=>{"use strict";t();mh=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mh));HA={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var ys={};z(ys,{css:()=>hh,default:()=>$A});var hh,$A,Ss=w(()=>{"use strict";t();hh=`.dapp-core-component__confirmAmountStyles__confirmAmount {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hh));$A={confirmAmount:"dapp-core-component__confirmAmountStyles__confirmAmount",confirmAmountWrapper:"dapp-core-component__confirmAmountStyles__confirmAmountWrapper",confirmAmountLoading:"dapp-core-component__confirmAmountStyles__confirmAmountLoading",confirmAmountLoadingVisible:"dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible",confirmAmountContent:"dapp-core-component__confirmAmountStyles__confirmAmountContent",confirmAmountContentHidden:"dapp-core-component__confirmAmountStyles__confirmAmountContentHidden"}});var ws={};z(ws,{css:()=>xh,default:()=>zA});var xh,zA,bs=w(()=>{"use strict";t();xh=`.dapp-core-component__confirmFeeStyles__confirmFee {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xh));zA={confirmFee:"dapp-core-component__confirmFeeStyles__confirmFee",confirmFeeLabel:"dapp-core-component__confirmFeeStyles__confirmFeeLabel",confirmFeeData:"dapp-core-component__confirmFeeStyles__confirmFeeData",confirmFeeDataPriceWrapper:"dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper",confirmFeeDataPrice:"dapp-core-component__confirmFeeStyles__confirmFeeDataPrice"}});var As={};z(As,{css:()=>vh,default:()=>KA});var vh,KA,Is=w(()=>{"use strict";t();vh=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vh));KA={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Cs={};z(Cs,{css:()=>kh,default:()=>YA});var kh,YA,Ns=w(()=>{"use strict";t();kh=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kh));YA={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Ls={};z(Ls,{css:()=>Lh,default:()=>JA});var Lh,JA,Ds=w(()=>{"use strict";t();Lh=`.dapp-core-component__confirmReceiverStyles__receiver {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lh));JA={receiver:"dapp-core-component__confirmReceiverStyles__receiver",receiverLabelWrapper:"dapp-core-component__confirmReceiverStyles__receiverLabelWrapper",receiverLabel:"dapp-core-component__confirmReceiverStyles__receiverLabel",receiverLabelScam:"dapp-core-component__confirmReceiverStyles__receiverLabelScam",receiverLabelScamIcon:"dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon",receiverWrapper:"dapp-core-component__confirmReceiverStyles__receiverWrapper",receiverData:"dapp-core-component__confirmReceiverStyles__receiverData",receiverDataIcon:"dapp-core-component__confirmReceiverStyles__receiverDataIcon",receiverCopy:"dapp-core-component__confirmReceiverStyles__receiverCopy",receiverExternal:"dapp-core-component__confirmReceiverStyles__receiverExternal"}});var Ps={};z(Ps,{css:()=>Wh,default:()=>eI});var Wh,eI,Es=w(()=>{"use strict";t();Wh=`.dapp-core-component__signStepBodyStyles__summary {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wh));eI={summary:"dapp-core-component__signStepBodyStyles__summary",fields:"dapp-core-component__signStepBodyStyles__fields",buttons:"dapp-core-component__signStepBodyStyles__buttons"}});var Ms={};z(Ms,{css:()=>Bh,default:()=>nI});var Bh,nI,Ws=w(()=>{"use strict";t();Bh=`.dapp-core-component__progressHeaderStyles__progress-steps {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bh));nI={"progress-steps":"dapp-core-component__progressHeaderStyles__progress-steps",progressSteps:"dapp-core-component__progressHeaderStyles__progress-steps","progress-step":"dapp-core-component__progressHeaderStyles__progress-step",progressStep:"dapp-core-component__progressHeaderStyles__progress-step","progress-step-wrapper":"dapp-core-component__progressHeaderStyles__progress-step-wrapper",progressStepWrapper:"dapp-core-component__progressHeaderStyles__progress-step-wrapper",detailed:"dapp-core-component__progressHeaderStyles__detailed",collapsible:"dapp-core-component__progressHeaderStyles__collapsible",completed:"dapp-core-component__progressHeaderStyles__completed",active:"dapp-core-component__progressHeaderStyles__active","progress-step-index":"dapp-core-component__progressHeaderStyles__progress-step-index",progressStepIndex:"dapp-core-component__progressHeaderStyles__progress-step-index","progress-step-check":"dapp-core-component__progressHeaderStyles__progress-step-check",progressStepCheck:"dapp-core-component__progressHeaderStyles__progress-step-check","progress-step-title":"dapp-core-component__progressHeaderStyles__progress-step-title",progressStepTitle:"dapp-core-component__progressHeaderStyles__progress-step-title","progress-step-title-text":"dapp-core-component__progressHeaderStyles__progress-step-title-text",progressStepTitleText:"dapp-core-component__progressHeaderStyles__progress-step-title-text"}});var Xt={};z(Xt,{css:()=>Vh,default:()=>rI});var Vh,rI,Yt=w(()=>{"use strict";t();Vh=`.dapp-core-component__signWithDeviceModalStyles__wallet-connect {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vh));rI={"wallet-connect":"dapp-core-component__signWithDeviceModalStyles__wallet-connect",walletConnect:"dapp-core-component__signWithDeviceModalStyles__wallet-connect","modal-container":"dapp-core-component__signWithDeviceModalStyles__modal-container",modalContainer:"dapp-core-component__signWithDeviceModalStyles__modal-container",formGroup:"dapp-core-component__signWithDeviceModalStyles__formGroup",title:"dapp-core-component__signWithDeviceModalStyles__title","modal-layout-content":"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",modalLayoutContent:"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",guarded:"dapp-core-component__signWithDeviceModalStyles__guarded",spaced:"dapp-core-component__signWithDeviceModalStyles__spaced","modal-layout-heading-icon":"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",modalLayoutHeadingIcon:"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",back:"dapp-core-component__signWithDeviceModalStyles__back",close:"dapp-core-component__signWithDeviceModalStyles__close",disabled:"dapp-core-component__signWithDeviceModalStyles__disabled","sign-buttons":"dapp-core-component__signWithDeviceModalStyles__sign-buttons",signButtons:"dapp-core-component__signWithDeviceModalStyles__sign-buttons","sign-button-submit":"dapp-core-component__signWithDeviceModalStyles__sign-button-submit",signButtonSubmit:"dapp-core-component__signWithDeviceModalStyles__sign-button-submit","sign-button-cancel":"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel",signButtonCancel:"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel"}});var Bs={};z(Bs,{css:()=>Yh,default:()=>cI});var Yh,cI,Us=w(()=>{"use strict";t();Yh=`.dapp-core-component__signWithOperaModalStyles__extension-modal {
  color: inherit;
}

.dapp-core-component__signWithOperaModalStyles__modal-container {
  color: inherit;
}

.dapp-core-component__signWithOperaModalStyles__extension {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yh));cI={"extension-modal":"dapp-core-component__signWithOperaModalStyles__extension-modal",extensionModal:"dapp-core-component__signWithOperaModalStyles__extension-modal","modal-container":"dapp-core-component__signWithOperaModalStyles__modal-container",modalContainer:"dapp-core-component__signWithOperaModalStyles__modal-container",extension:"dapp-core-component__signWithOperaModalStyles__extension"}});var Vs={};z(Vs,{css:()=>aT,default:()=>_I});var aT,_I,$s=w(()=>{"use strict";t();aT=`.dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal {
  color: inherit;
}

.dapp-core-component__signWithWalletConnectModalStyles__modal-container {
  color: inherit;
}

.dapp-core-component__signWithWalletConnectModalStyles__wallet-connect {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(aT));_I={"wallet-connect-modal":"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal",walletConnectModal:"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal","modal-container":"dapp-core-component__signWithWalletConnectModalStyles__modal-container",modalContainer:"dapp-core-component__signWithWalletConnectModalStyles__modal-container","wallet-connect":"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect",walletConnect:"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect"}});var fI={};z(fI,{SignTransactionsModals:()=>uI});module.exports=H(fI);t();t();var ct=T(require("react"));t();t();t();var fd=require("react"),qn=require("react-redux");t();var Ri=require("@reduxjs/toolkit"),ld=require("react-redux/lib/utils/Subscription");K();t();var Km=T(require("lodash.throttle"));M();K();yi();On();Rn();var Gx=[sr],Dr=!1,Hx=(0,Km.default)(()=>{ht(gt())},5e3),Xm=e=>o=>n=>{if(Gx.includes(n.type))return o(n);let r=e.getState(),s=_o.local.getItem(qe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(s==null)return ht(gt());let m=Date.now();return s-m<0&&!Dr?setTimeout(()=>{Dr=!0,e.dispatch(pm())},1e3):(Dr&&(Dr=!1),Hx()),o(n)};t();t();function Pr(){return typeof sessionStorage!="undefined"}var md=Pr()?(od(),H(ed)).default:(td(),H(nd)).default,dd=Pr()?(ad(),H(rd)).default:[],_d=Pr()?(pd(),H(sd)).default:e=>e;Er();var D=(0,Ri.configureStore)({reducer:md,middleware:e=>e({serializableCheck:{ignoredActions:[...dd,xi.type,_r.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Xm)}),ud=(0,ld.createSubscription)(D),yL=_d(D),SL=(0,Ri.configureStore)({reducer:pn});var dy={store:D,subscription:ud},Oi=(0,fd.createContext)(dy),AL=(0,qn.createStoreHook)(Oi),se=(0,qn.createDispatchHook)(Oi),L=(0,qn.createSelectorHook)(Oi);t();t();K();t();var gd=T(require("lodash.isequal")),Mr=require("reselect"),k=(0,Mr.createSelectorCreator)(Mr.defaultMemoize,gd.default);var uo=e=>e.account,No=k(uo,e=>e.address),mn=k(uo,No,(e,o)=>o in e.accounts?e.accounts[o]:dr),hd=k(uo,mn,(e,o)=>{let s=e,{accounts:n}=s,r=Fe(s,["accounts"]);return I(g({},r),{address:o.address,account:o})}),LL=k(mn,e=>e.balance),Td=k(mn,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),DL=k(uo,e=>e.shard),_y=k(uo,e=>e.ledgerAccount),PL=k(uo,e=>e.walletConnectAccount),EL=k(uo,e=>e.isAccountLoading),ML=k(uo,e=>e.accountLoadingError),ly=k(uo,e=>e.websocketEvent),uy=k(uo,e=>e.websocketBatchEvent);t();var vt=e=>e.dappConfig,OL=k(vt,e=>e.shouldUseWebViewProvider);t();var be=e=>e.loginInfo,fy=k(be,e=>e.loginMethod),dn=k(be,No,(e,o)=>Boolean(o)),GL=k(be,e=>e.walletConnectLogin),xd=k(be,e=>e.ledgerLogin),yd=k(be,e=>e.walletLogin),HL=k(be,e=>e.isLoginSessionInvalid),Fi=k(be,e=>e.tokenLogin),Bi=k(be,e=>e.logoutRoute),gy=k(be,e=>e.isWalletConnectV2Initialized);t();var Sd=e=>e.modals,qL=k(Sd,e=>e.txSubmittedModal),hy=k(Sd,e=>e.notificationModal);t();var Ve=e=>e.networkConfig,Wr=k(Ve,e=>e.network.chainId),Ty=k(Ve,e=>e.network.roundDuration),KL=k(Ve,e=>e.network.walletConnectBridgeAddress),xy=k(Ve,e=>e.network.walletConnectV2RelayAddress),yy=k(Ve,e=>e.network.walletConnectV2ProjectId),Sy=k(Ve,e=>e.network.walletConnectV2Options),vy=k(Ve,e=>e.network.walletConnectDeepLink),ye=k(Ve,e=>e.network),Ui=k(ye,e=>e.apiAddress),vd=k(ye,e=>e.explorerAddress),Rr=k(ye,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),wy=k(ye,e=>e.xAliasAddress),Or=k(ye,e=>e.egldLabel);t();var Fr=e=>e.signedMessageInfo,ZL=k(Fr,e=>e.isSigning),JL=k(Fr,e=>e.errorMessage),QL=k(Fr,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),eD=k(Fr,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var wd=e=>e.toasts,by=k(wd,e=>e.customToasts),bd=k(wd,e=>e.transactionToasts);t();K();var Ad={errorMessage:Ci,successMessage:Ni,processingMessage:Li},Id=e=>e.transactionsInfo,Ay=k(Id,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Ad);t();t();var fo=require("@multiversx/sdk-core");M();t();var Gi=require("@multiversx/sdk-core/out");t();t();function wt(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),s=a.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===s||s.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function _n(e){return wt(e)?atob(e):e}t();t();function Br(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}function ln(e){let o=e;try{let n=a.Buffer.from(e,"hex").toString();Br(n)&&n.length>1&&(o=n)}catch(n){}return o}t();t();var kd=e=>{let o=e!=null?e:"";return wt(o)?Gi.TransactionPayload.fromEncoded(o):new Gi.TransactionPayload(o)};t();M();var un=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Ja).some(n=>e.startsWith(n)):!1;function bt(e){var r,s,p;let o=g({},e);un({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new fo.Transaction(g(g(I(g(I(g({value:o.value.valueOf(),data:kd(o.data),nonce:o.nonce.valueOf(),receiver:new fo.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new fo.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:lt,gasPrice:(s=o.gasPrice.valueOf())!=null?s:ut,chainID:o.chainID.valueOf(),version:new fo.TransactionVersion((p=o.version)!=null?p:Hp)}),o.options?{options:new fo.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new fo.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();M();function Iy(e,o){let n=new URLSearchParams(e),r=Object.fromEntries(n);return{nextUrlParams:new URLSearchParams(g(g({},r),o)).toString(),params:r}}var ky="3.1.0";function Ur({callbackUrl:e,urlParams:o={}}){let n=e;if(Object.entries(o).length>0)try{let{search:r,origin:s,pathname:p,hash:m}=new URL(e),d=I(g({},o),{[cr]:ky}),{nextUrlParams:_}=Iy(r,d);n=`${s}${p}?${_}${m}`}catch(r){return console.error("Unable to construct URL from: ",e,r),n}return n}t();t();t();var Ny=require("@multiversx/sdk-core/out");t();M();t();var At=require("@multiversx/sdk-core");Q();t();var Cd=require("@multiversx/sdk-core");function Ly(e){try{let o=new Cd.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Ho(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Ly(e)}var Dy=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Hi(e,o,n=""){if(!Ho(e))return!1;if(new At.Address(e).isContractAddress())return!0;let p=Nd({receiver:e,data:n});return p?new At.Address(p).isContractAddress()||My(e,o,n):!1}var Py=e=>e.toLowerCase().match(/[0-9a-f]/g),Ey=e=>e.length%2===0;function My(e,o,n){let r=n==null?void 0:n.split("@");if(r==null)return!1;let[s,...p]=r,m=o!=null&&e!=null&&e===o,d=Dy.includes(s),_=p.every(l=>Py(l)&&Ey(l));return m&&d&&_}function Nd({receiver:e,data:o}){try{if(!o)return e;let n=wt(o)?At.TransactionPayload.fromEncoded(o).toString():o,r=Wy(n),s=n.split("@");return r>-1?s[r]:e}catch(n){console.log(n);return}}function Wy(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}t();t();t();var $i=require("@multiversx/sdk-core"),Gr=T(require("bignumber.js"));J();var Vi={tokenId:"",amount:""},Ld=e=>e.split("@").map((p,m)=>[2,3].includes(m)?p:ln(p));function qi(e){if(!e)return Vi;let o=e.startsWith("ESDTTransfer"),n=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),r=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(o){let[,s,p]=e.split("@");try{let m=a.Buffer.from(s,"hex").toString("ascii");if(!m)return Vi;let d=new Gr.default("0x"+p.replace("0x","")).toString(10);return{tokenId:m,amount:d}}catch(m){console.error("Error getting token from transaction data",m)}}if(n)try{let[,s,p,m,d]=Ld(e);if([s,p,m,d].every(_=>Boolean(_))&&Ho(new $i.Address(d).bech32()))return{tokenId:`${s}-${p}`,amount:new Gr.default(m,16).toString(10),collection:s,nonce:p,receiver:new $i.Address(d).bech32()}}catch(s){}if(r)try{let[,s,p,m]=Ld(e);if([s,p,m].every(d=>Boolean(d)))return{tokenId:`${s}-${p}`,amount:new Gr.default(m,16).toString(10),collection:s,nonce:p}}catch(s){}return Vi}t();t();t();var ve="accounts";var Hr="blocks",Pd="code",Ed="collections";var Md="contracts",It="economics",Wd="identities";var Rd="locked-accounts",Od="logs",Fd="miniblocks";var kt="nfts",Bd="nodes",zi="providers",Ud="roles",ji="sc-results";var Vo="tokens";var je="transactions";var Ct={shard:e=>`/${Hr}?shard=${e}`,receiverShard:e=>`/${je}?receivershard=${e}`,senderShard:e=>`/${je}?sendershard=${e}`,transactionDetails:e=>`/${je}/${e}`,transactionDetailsScResults:e=>`/${je}/${e}/${ji}`,transactionDetailsLogs:e=>`/${je}/${e}/${Od}`,nodeDetails:e=>`/${Bd}/${e}`,accountDetails:e=>`/${ve}/${e}`,accountDetailsContractCode:e=>`/${ve}/${e}/${Pd}`,accountDetailsTokens:e=>`/${ve}/${e}/${Vo}`,accountDetailsNfts:e=>`/${ve}/${e}/${kt}`,accountDetailsScResults:e=>`/${ve}/${e}/${ji}`,accountDetailsContracts:e=>`/${ve}/${e}/${Md}`,identityDetails:e=>`/${Wd}/${e}`,tokenDetails:e=>`/${Vo}/${e}`,tokenDetailsAccounts:e=>`/${Vo}/${e}/${ve}`,tokenDetailsLockedAccounts:e=>`/${Vo}/${e}/${Rd}`,tokenDetailsRoles:e=>`/${Vo}/${e}/${Ud}`,collectionDetails:e=>`/${Ed}/${e}`,nftDetails:e=>`/${kt}/${e}`,providerDetails:e=>`/${zi}/${e}`,providerDetailsTransactions:e=>`/${zi}/${e}/${je}`,miniblockDetails:e=>`/${Fd}/${e}`};t();t();t();t();ke();t();var Gd=!1;function Fy(e){Gd||(console.error(e),Gd=!0)}function Nt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(n){return o.startsWith("/")||(Fy(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}t();ke();t();t();t();var By=T(require("bignumber.js"));M();t();var $d=require("@multiversx/sdk-core"),$o=T(require("bignumber.js"));M();t();var Vd=T(require("bignumber.js")),$r=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let r=new Vd.default(n),s=o?0:-1;return r.toString(10)===n&&r.comparedTo(0)>=s};t();function Lo(e){return{if:function(o){return o?{then:n=>n instanceof Function?Lo(n(e)):Lo(n)}:{then:()=>Lo(e)}},then:o=>o instanceof Function?Lo(o(e)):Lo(o),valueOf:function(){return e}}}$o.default.config({ROUNDING_MODE:$o.default.ROUND_FLOOR});function Ke({input:e,decimals:o=Ue,digits:n=cn,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:s=!1,addCommas:p=!1}){if(!$r(e,!1))throw new Error("Invalid input");let m=new $o.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),Lo(d).then(()=>$d.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(_=>{let l=new $o.default(_);if(l.isZero())return Ge;let u=l.toString(10),[f,x]=u.split("."),v=new $o.default(x||0),h=Lo(0).if(Boolean(x&&r)).then(()=>Math.max(x.length,n)).if(v.isZero()&&!r).then(0).if(Boolean(x&&!r)).then(()=>Math.min(x.length,n)).valueOf(),N=x&&n>=1&&n<=x.length&&v.isGreaterThan(0)&&new $o.default(x.substring(0,n)).isZero(),b=l.toFormat(h);return Lo(u).if(p).then(b).if(Boolean(N)).then(R=>{let O=new $o.default(f).isZero(),[P,j]=R.split("."),X=new Array(n-1).fill(0),oe=[...X,0].join(""),W=[...X,1].join("");return O?s?`<${P}.${W}`:r?`${P}.${j}`:P:`${P}.${oe}`}).if(Boolean(!N&&x)).then(R=>{let[O]=R.split("."),P=x.substring(0,h);if(r){let j=n-P.length;if(j>0){let X=Array(j).fill(0).join("");return P=`${P}${X}`,`${O}.${P}`}return R}return P?`${O}.${P}`:O}).valueOf()}).if(m).then(_=>`-${_}`).valueOf()}t();t();t();M();t();t();t();t();M();t();M();t();var Uy=require("@multiversx/sdk-core");M();t();var Xe=require("@multiversx/sdk-core"),jd=T(require("bignumber.js"));M();t();t();var Ki=T(require("bignumber.js"));M();var qd=e=>{if(isNaN(e)||e==null||String(e).includes("Infinity"))return!1;let[o,n]=e.split("."),r=Ki.default.clone();if(n){let d=n.split("").every(_=>!isNaN(parseInt(_)));for(r.set({DECIMAL_PLACES:d?n.length:Ki.default.config().DECIMAL_PLACES});n.charAt(n.length-1)===Ge;)n=n.slice(0,-1)}let s=n?[o,n].join("."):o,p=r(s);return p.toString(10)===s&&p.comparedTo(0)>=0};t();M();t();var Xi={isEsdt:!1,isNft:!1,isEgld:!1};function Yi(e){let o=e==null?void 0:e.split("-").length;return o===2?I(g({},Xi),{isEsdt:!0}):o===3?I(g({},Xi),{isNft:!0}):I(g({},Xi),{isEgld:!0})}var zd={from:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",to:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"};function Zi({minGasLimit:e=String(lt),gasLimit:o,gasPrice:n,data:r,gasPerDataByte:s,gasPriceModifier:p,defaultGasPrice:m=String(ut),chainId:d}){let _=r||"",l=$r(o)?o:e,u=un({data:_})?_i:0,f=new jd.default(l).plus(u).toNumber(),x=qd(n)?n:m,v=new Xe.Transaction({nonce:0,value:Xe.TokenPayment.egldFromAmount("0"),receiver:new Xe.Address(zd.to),sender:new Xe.Address(zd.to),gasPrice:parseInt(x),gasLimit:f,data:new Xe.TransactionPayload(_.trim()),chainID:d,version:new Xe.TransactionVersion(1)});try{return v.computeFee({GasPerDataByte:parseInt(s),MinGasLimit:parseInt(e),GasPriceModifier:parseFloat(p),ChainID:d}).toString(10)}catch(h){return console.error(h),Ge}}t();var qr=({amount:e,usd:o,decimals:n=2,addEqualSign:r})=>{let s=(parseFloat(e)*o).toFixed(n),p=parseFloat(s).toLocaleString("en",{maximumFractionDigits:n,minimumFractionDigits:n}),m=parseFloat(e)>0?"\u2248":"=";return`${r?`${m} `:""}$${p}`};t();t();t();t();M();function Gy(e,o){let n,r,s=/(\.0+)+$/,p=e.replace(s,"").split("."),m=o.replace(s,"").split("."),d=Math.min(p.length,m.length);for(n=0;n<d;n++)if(r=parseInt(p[n],10)-parseInt(m[n],10),r)return r;return p.length-m.length}function Kd(e){let o=[Qa,ei,oi,ni,_t,ti,e].sort((l,u)=>Gy(l,u)),n=o.indexOf(Qa),r=o.indexOf(ei),s=o.indexOf(oi),p=o.indexOf(ni),m=o.indexOf(_t),d=o.indexOf(ti),_=o.indexOf(e);return{ledgerWithMultiAccount:_>=n,ledgerWithHashSign:_>=r,ledgerWithSignAuthToken:_>=s,ledgerWithWhitelistedTokens:_>=p,ledgerWithGuardians:_>=m,ledgerWithUsernames:_>=d}}t();M();var Xd=({feeLimit:e,egldPriceInUsd:o,hideEqualSign:n})=>{let r=Ke({input:e,decimals:Ue,digits:cn,showLastNonZeroDecimal:!0}),s=qr({amount:r,usd:o,decimals:cn});return n?s:`\u2248 ${s}`};t();M();t();ke();var Hy=["reDelegateRewards","claimRewards","unBond"],Vy=["wrapEgld","unwrapEgld"],$y=["unStake"],qy=["unDelegate"];t();t();t();M();t();var Ky=T(require("bignumber.js"));t();t();ke();t();var Yy=T(require("bignumber.js"));t();t();var Yd=({data:e,highlight:o,occurrences:n,transactionIndex:r})=>{let s=n[r]||e.indexOf(o),p=o.length,m=e.slice(0,s),d=e.slice(s+p);return{start:m,end:d}};t();function Zd({tokenId:e,erdLabel:o}){return Boolean(e&&e!==o)}t();var Qi=T(require("bignumber.js"));Q();t();var Jd=(e,o)=>{let n=[],r=e.indexOf(o,0);for(;r>=0;)n.push(r),r=e.indexOf(o,r+1);return n};function Qd(e){let o=[],n=0;try{if((e==null?void 0:e.startsWith("MultiESDTNFTTransfer"))&&(e==null?void 0:e.includes("@"))){let[,r,s,...p]=e==null?void 0:e.split("@");if(r){let m=new Qi.default(s,16).toNumber();if(m>=Number.MAX_SAFE_INTEGER)return[];let d=0;for(let f=0;f<m;f++){let x={type:"nftTransaction",data:"",receiver:r};for(let v=0;v<3;v++){switch(v){case 0:x.token=ln(p[d]),x.data=p[d];break;case 1:{let h=p[d]&&p[d].length?p[d]:"";h&&h!=="00"?x.nonce=h:x.type="esdtTransaction",x.data=`${x.data}@${p[d]}`;break}case 2:x.amount=new Qi.default(p[d],16).toString(10),x.data=`${x.data}@${p[d]}`;break;default:break}n=d+1,d++}o[f]=x}let _=o.length!==m,l=o.some(f=>Jd(f.data,"@").length!==2),u=o.some(f=>f.data.startsWith("@"));if(_||l||u)return[];if(p[n]){let f=p[n];for(let x=n+1;x<p.length;x++)f+="@"+p[x];o[m]={type:"scCall",data:f,receiver:r}}}}}catch(r){return console.error("failed parsing tx",r),o}return o}t();t();t();J();function qo(e){let n=Object.getPrototypeOf(e).toPlainObject!=null?e:bt(e),r=I(g({},n.toPlainObject()),{hash:n.getHash().hex(),senderUsername:n.getSenderUsername().valueOf(),receiverUsername:n.getReceiverUsername().valueOf(),status:"pending"});return un({data:r.data,onlySetGuardian:!0})&&(delete r.senderUsername,delete r.receiverUsername),r}t();var n_=require("@multiversx/sdk-web-wallet-provider");M();t();var o_=T(require("qs"));t();xe();var jr=e=>{let o=new URLSearchParams(e).toString(),{pathname:n,hash:r}=V(),s=o?`?${o}`:"",p=n?`${n}${s}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};sn();t();sn();var Jy={search:ze()?window.location.search:"",removeParams:[]},e_=(e,o=Jy)=>{var m;let n={},r=ze()?window.location.search:"",s=(m=o.search)!=null?m:r;if(s){let d=s?new URLSearchParams(s):[];n=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=n[d],delete n[d]}),o.removeParams!=null&&Object.keys(n).forEach(d=>{var l,u;let[_]=d.split("[");(((l=o.removeParams)==null?void 0:l.includes(d))||((u=o.removeParams)==null?void 0:u.includes(_)))&&delete n[d]}),{remainingParams:p,params:n,clearNavigationHistory:()=>jr(n)}};var Kr=({removeParams:e,search:o})=>{let n=ze()?window.location.search:"",r=o!=null?o:n;if(!r)return{};let s=o_.default.parse(r.replace("?","")),p=Object.keys(s).filter(d=>!e.includes(d)),{remainingParams:m}=e_(p,{search:o,removeParams:e});return jr(m),m};var t_=({transaction:e,search:o})=>Kr({removeParams:[...Object.keys(e),n_.WALLET_PROVIDER_CALLBACK_PARAM,mo,cr],search:o});t();t();t();Te();t();ke();t();t();Te();t();var Qy=T(require("linkifyjs"));t();M();t();var eS=T(require("bignumber.js"));t();Q();t();t();J();t();J();t();t();t();ke();t();ke();t();var oS=T(require("bignumber.js"));M();ke();t();ke();t();var c_=require("react");Q();t();t();ke();t();t();var r_=require("@multiversx/sdk-core/out"),ec=T(require("bignumber.js"));ke();var Do=(e,o,n)=>{switch(o){case"text":try{return a.Buffer.from(e,"hex").toString("utf8")}catch(r){}return e;case"decimal":return e!==""?new ec.default(e,16).toString(10):"";case"smart":try{let r=r_.Address.fromHex(e).toString();if(Ho(r))return r}catch(r){}try{let r=a.Buffer.from(e,"hex").toString("utf8");if(Br(r))return r;{if(n&&[...n.esdts,...n.nfts].some(m=>r.includes(m)))return r;let s=new ec.default(e,16);return s.isFinite()?s.toString(10):e}}catch(r){}return e;case"raw":default:return e}};t();Q();t();var nS=e=>e.toLowerCase().match(/^[0-9a-f]+$/i),tS=e=>e.length%2===0,a_=e=>{let o=[];return e&&!nS(e)&&o.push(`Invalid Hex characters on argument @${e}`),e&&!tS(e)&&o.push(`Odd number of Hex characters on argument @${e}`),o};t();Q();var Xr=({parts:e,decodedParts:o,identifier:n})=>{let r=[...o];if(e[0]==="ESDTNFTTransfer"&&e[2]&&(r[2]=Do(e[2],"decimal")),n==="ESDTNFTTransfer"&&e[1]){let s=a.Buffer.from(String(e[1]),"base64");r[1]=Do(s.toString("hex"),"decimal")}return r};var i_=({parts:e,decodeMethod:o,identifier:n,display:r})=>{let s=e.map((m,d)=>{if(e.length>=2&&(d===0&&m.length<64||d===1&&!e[0]))return/[^a-z0-9]/gi.test(m)?Do(m,o):m;{let _=a_(m);return _.length&&(r.validationWarnings=Array.from(new Set([...r.validationWarnings,..._]))),Do(m,o)}});return o==="smart"?Xr({parts:e,decodedParts:s,identifier:n}):s};var oc=({input:e,decodeMethod:o,identifier:n})=>{let r={displayValue:"",validationWarnings:[]};if(!e.includes("@")&&!e.includes(`
`))return r.displayValue=Do(e,o),r;if(e.includes("@")){let s=e.split("@"),p=i_({parts:s,identifier:n,decodeMethod:o,display:r});r.displayValue=p.join("@")}if(e.includes(`
`)){let s=e.split(`
`),p=s.map(d=>{let _=a.Buffer.from(d,"base64");return o==="raw"?d:Do(_.toString("hex"),o)}),m=o==="smart"?Xr({parts:s,decodedParts:p,identifier:n}):p;r.displayValue=m.join(`
`)}return r};var Z2=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var s_=require("react");Q();Te();t();var rS=require("react");ke();var aW=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];$n();t();var Yr=e=>e.transactions,zn=k(Yr,e=>e.signedTransactions),p_=k(Yr,e=>e.signTransactionsError),Zr=k(Yr,e=>e.signTransactionsCancelMessage),Jr=e=>o=>Object.entries(o).reduce((n,[r,s])=>(e(s.status)&&(n[r]=s),n),{}),m_=k(zn,Jr(Gn)),d_=k(zn,Jr(Hn)),__=k(zn,Jr(Vn)),aS=k(zn,Jr(Di)),Qr=k(Yr,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:I(g({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>bt(n)))||[]})}),iS=k(zn,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Po=()=>L(Ve);t();var l_=require("react");t();K();t();t();t();t();t();t();t();t();var f_=require("@multiversx/sdk-extension-provider"),g_=require("@multiversx/sdk-hw-provider"),h_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),T_=require("@multiversx/sdk-opera-provider"),x_=require("@multiversx/sdk-passkey-provider/out"),rc=require("@multiversx/sdk-web-wallet-provider");M();Bo();t();var Ye=require("@multiversx/sdk-web-wallet-iframe-provider/out"),u_=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");J();t();var nc={},tc=jn;var cS="/dapp/init",De=e=>{switch(e==null?void 0:e.constructor){case rc.WalletProvider:return"wallet";case tc:return"walletconnectv2";case g_.HWProvider:return"ledger";case f_.ExtensionProvider:return"extension";case x_.PasskeyProvider:return"passkey";case h_.MetamaskProvider:return"metamask";case T_.OperaProvider:return"opera";case we.CrossWindowProvider:return"crossWindow";case Ye.IframeProvider:return"iframe";case jn:return"";default:return"extra"}},ac=e=>new rc.WalletProvider(`${e}${cS}`),ic=e=>S(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:n,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:n===Vp}}),Ze=e=>`Unable to perform ${e}, Provider not initialized`,jn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Ze("getAccount"))}setAccount(o){throw new Error(Ze(`setAccount: ${o}`))}login(o){throw new Error(Ze(`login with options: ${o}`))}logout(o){throw new Error(Ze(`logout with options: ${o}`))}getAddress(){throw new Error(Ze("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(Ze(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(Ze(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(Ze(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(Ze(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(Ze(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(Ze(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},ea=new jn;var cc=ea,y_=null;function Eo(e){cc=e}function S_(){y_!=null&&(cc=y_)}function Pe(){return cc||ea}K();t();t();t();t();t();var v_=require("@lifeomic/axios-fetch"),sc=T(require("axios")),pc=(0,v_.buildAxiosFetch)(sc.default),mc=(e,o)=>S(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[s]=yield Promise.all([r]);return{data:s,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function sS(e,o,n){return S(this,null,function*(){try{let r=yield pc(e,g({method:"POST",body:o?JSON.stringify(o):void 0,headers:g({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return mc(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function pS(e,o){return S(this,null,function*(){try{let n=yield pc(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return mc(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function mS(e,o,n){return S(this,null,function*(){try{let r=yield pc(e,g({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return mc(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Mo=sc.default.create();Mo.get=pS;Mo.post=sS;Mo.patch=mS;var w_=e=>Mo.get(e).then(o=>o.data);t();var fn=e=>{let o=e!=null?e:Ui(D.getState());return o.endsWith("/")?o.slice(0,-1):o};t();var b_=T(require("axios"));function A_(e){return S(this,null,function*(){let{network:{apiAddress:o,apiTimeout:n}}=Ve(D.getState()),{data:r}=yield b_.default.get(`${o}/${ve}/${e}`,{timeout:Number(n)});return r})}t();var I_=T(require("swr"));var Kn=({apiEndpoint:e})=>{let o=fn(),n=e?`${o}/${e}`:null;return(0,I_.default)(n,w_)};var dS=e=>{let n=`${fn()}/${ve}/${e}?withGuardianInfo=true`;return Mo.get(n)},k_=e=>S(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield dS(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var Xn=e=>k_(e);t();J();t();t();function C_(){let e=Pe();return De(e)}function Je(e){return C_()===e}t();Te();var N_=()=>{let{search:e}=V(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return Ho(r)?r:null};function oa(){let e=D.getState(),o=Pe(),n=No(e),r=dn(e),s=yd(e);if(!o)throw"provider not initialized";return Je("ledger")&&r?new Promise(p=>{p(n)}):!Je("")&&!Je("wallet")&&!Je("extra")?o.getAddress():new Promise(p=>{let m=N_();s!=null&&m&&p(m),r&&p(n),p("")})}t();function Lt(e){let o=D.getState(),n=Td(o);return e?n&&!isNaN(n)?Math.max(n,e.nonce):e.nonce:n}$n();t();t();t();var _S=T(require("axios"));t();var uS=T(require("axios"));Mn();t();M();t();var fS=T(require("axios"));t();var hS=T(require("axios"));t();t();var TS=T(require("axios"));t();var xS=T(require("axios"));t();t();K();J();t();t();t();t();Te();var D_=()=>{let{search:e}=V(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var P_=()=>{var n;let e=D_(),o=be(D.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};t();ae();Q();t();K();t();var E_=require("@multiversx/sdk-core");Q();xe();t();$n();t();K();J();t();K();Q();t();t();t();Q();t();ar();t();var na=()=>L(p_);t();t();t();var W_=T(require("swr"));t();t();var ta={},dc={setItem:(e,o)=>S(void 0,null,function*(){try{ta[e]=JSON.stringify(o)}catch(n){console.error("tokenDataStorage unable to serialize",n)}}),getItem:e=>S(void 0,null,function*(){try{return JSON.parse(ta[e])}catch(o){console.error("tokenDataStorage unable to parse",o)}}),clear:()=>S(void 0,null,function*(){ta={}}),removeItem:e=>S(void 0,null,function*(){delete ta[e]})};function M_(e){return S(this,null,function*(){let{apiAddress:o,apiTimeout:n}=ye(D.getState()),r={baseURL:o,timeout:Number(n)},s=yield dc.getItem(e);if(s)return s;let p=yield Mo.get(e,r);return yield dc.setItem(e,p.data),p.data})}function R_({tokenId:e}){var f,x,v,h;let{network:o}=Po(),{isNft:n}=Yi(e),r=e,s=n?kt:Vo,{data:p,error:m,isLoading:d}=(0,W_.default)(Boolean(r)?`${o.apiAddress}/${s}/${r}`:null,M_);if(!r)return{tokenDecimals:Number(o.decimals),tokenLabel:"",tokenAvatar:""};let _=p?p==null?void 0:p.decimals:Number(o.decimals),l=p?p==null?void 0:p.name:"",u=p?(h=(f=p==null?void 0:p.assets)==null?void 0:f.svgUrl)!=null?h:(v=(x=p==null?void 0:p.media)==null?void 0:x[0])==null?void 0:v.thumbnailUrl:"";return{isLoading:d,tokenDecimals:_,tokenLabel:l,type:p==null?void 0:p.type,tokenAvatar:u,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}t();t();var Dt=require("react");t();function O_({parsedTransactionsByDataField:e,data:o,txInfo:n}){!e||(e[o]=n)}function F_({transactions:e}){let o={},n=[];return!e||e.length===0?{allTransactions:n,parsedTransactionsByDataField:o}:(e.forEach((r,s)=>{let p=r.getData().toString(),m=Qd(p);if(m.length>0)m.forEach((d,_)=>{let l={transaction:r,multiTxData:d.data,transactionIndex:_};O_({parsedTransactionsByDataField:o,data:d.data,txInfo:{tokenId:d.token?d.token:"",amount:d.amount?d.amount:"",type:d.type,nonce:d.nonce?d.nonce:"",multiTxData:d.data,receiver:d.receiver}}),n.push(l)});else{let d=r.getData().toString(),{tokenId:_,amount:l}=qi(d);_&&O_({parsedTransactionsByDataField:o,data:d,txInfo:{tokenId:_,amount:l,receiver:r.getReceiver().bech32()}}),n.push({transaction:r,transactionIndex:s,multiTxData:d})}}),{allTransactions:n,parsedTransactionsByDataField:o})}var B_={tokenId:"",amount:"",type:"",multiTxData:"",receiver:""};function U_({transactions:e}){let[o,n]=(0,Dt.useState)({}),[r,s]=(0,Dt.useState)([]);function p(d,_){return o==null?B_:d in o?o[d]:_!=null&&String(_)in o?o[_]:B_}function m(){let{allTransactions:d,parsedTransactionsByDataField:_}=F_({transactions:e});s(d),n(_)}return(0,Dt.useEffect)(()=>{m()},[e==null?void 0:e.length]),{parsedTransactionsByDataField:o,getTxInfoByDataField:p,allTransactions:r}}t();var G_=require("react"),H_=require("@multiversx/sdk-web-wallet-provider"),V_=require("@multiversx/sdk-web-wallet-provider"),$_=T(require("qs"));M();K();J();si();Te();var vS=V();function ra(e){let o=L(ye),n=se(),{shouldFetchWalletUrlOnLoad:r}=L(vt),{search:s}=r?vS:V();(0,G_.useEffect)(()=>{if(s!=null){let p=$_.default.parse(s.replace("?",""));if(p&&mo in p){let m=String(p[mo]),d=new H_.WalletProvider(`${o.walletAddress}${$p}`).getTransactionsFromWalletUrl(s);if(p.status==="cancelled"){n(lo({sessionId:m,status:"cancelled"})),e(),Kr({removeParams:[...Object.keys(ci),V_.WALLET_PROVIDER_CALLBACK_PARAM,mo,"address"],search:s}),n(ko(bo));return}if(d.length>0){n(lo({sessionId:m,status:"signed",transactions:d.map(l=>qo(l))}));let[_]=d;t_({transaction:_,search:s})}}}},[s])}t();var gn=require("react"),hn=require("@multiversx/sdk-core");t();var zo=e=>Kn({apiEndpoint:e?`${ve}/${e}?withGuardianInfo=true`:null});M();wi();t();t();var aa=(e,o)=>e?Array.isArray(o)?o.some(n=>e.address===n||e.activeGuardianAddress===n):e.address===o||e.activeGuardianAddress===o:!0;t();function ia(e){let o=Qr(D.getState()),n=Object.keys(e).length===(o==null?void 0:o.transactions.length);return e&&(e&&n)}t();t();t();var _c=({accountNonce:e,transactionNonce:o})=>o&&o>e?o:e;var q_=({latestNonce:e,transactions:o})=>o.length===0?o:o.map((n,r)=>{let s=e+r,p=n.getNonce().valueOf(),m=_c({accountNonce:s,transactionNonce:p});return n.setNonce(m),n});var ca=()=>{let e=L(No),{data:o}=zo(e);return n=>S(void 0,null,function*(){let r=o!=null?o:yield Xn(e),s=Lt(r);return q_({latestNonce:s,transactions:n})})};t();var Pt=({transactions:e,isGuarded:o})=>o?e.length===0?!1:e.every(n=>Boolean(n.getGuardianSignature().toString("hex"))):!0;t();t();t();Mn();t();var AS=T(require("axios"));t();var kS=T(require("axios"));t();Mn();t();Mn();function lc(e){return Op[e]}t();t();t();t();var CS=require("@multiversx/sdk-opera-provider");t();var NS=require("@multiversx/sdk-extension-provider");t();Bo();function z_(n){return S(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield we.CrossWindowProvider.getInstance().init(),s=we.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return s;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}t();t();t();t();var ml=T(pl());var Wt=e=>{if(!e||!(0,ml.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,s,p]=o,m=JSON.parse(_n(p)),d=_n(n);return{ttl:Number(s),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};t();var t0=require("@multiversx/sdk-native-auth-client");t();var ul=T(require("axios"));t();t();t();function dl(e){return S(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var _l=(e,o,n)=>S(void 0,null,function*(){let r;return Promise.race([e,new Promise((s,p)=>r=setTimeout(p,o,n))]).finally(()=>clearTimeout(r))});var ll=(e,o,n,r=0)=>S(void 0,null,function*(){try{return yield e(...n)}catch(s){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield dl(o.delay)),yield ll(e,o,n,r+1)):null}}),gc=(e,o={retries:5,delay:500})=>(...n)=>S(void 0,null,function*(){return yield ll(e,o,n)});var e0=4;var YF=gc((e,o,n)=>S(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield ul.default.get(`${e}/${Hr}?from=${e0}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[s]=r;return s}));t();t();pr();t();function o0(e){return Object.prototype.toString.call(e)==="[object String]"}var hc=e=>{var n;if(!e||!o0(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,s,p]=o,m=_n(r),d=_n(s),_=Wt(d);if(!_)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let l=I(g({},_),{address:m,body:d,signature:p});return(n=_.extraInfo)!=null&&n.timestamp||delete l.extraInfo,l}catch(r){return null}};t();Te();var iB={origin:V().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};t();var a0=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();var i0=require("@multiversx/sdk-passkey-provider/out");M();Te();var ma=({transactions:e,hasGuardianScreen:o,callbackRoute:n,sessionId:r,walletAddress:s,isGuarded:p})=>{let m=Pt({isGuarded:p,transactions:e}),d=e[0].getChainID().valueOf(),_=e[0].getSender().bech32().toString(),l=lc(d),u=s!=null?s:an[l].walletAddress;return{needs2FaSigning:p?!o&&!m&&r:!1,sendTransactionsToGuardian:()=>{let h=ac(u),N={[mo]:String(r)},{origin:b}=V(),E=window!=null&&window.location?`${b}${n}`:`${n}`,R=Ur({callbackUrl:E,urlParams:N});h.guardTransactions(e,{callbackUrl:encodeURIComponent(R)})},guardTransactions:()=>S(void 0,null,function*(){let h=yield z_({address:_,walletUrl:u});return h==null||h.setShouldShowConsentPopup(!0),yield h==null?void 0:h.guardTransactions(e)})}};t();t();t();var Tl=require("react"),Tc=require("@multiversx/sdk-hw-provider");t();ae();Q();t();function fl(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function gl(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=c0(e.path,e.caseSensitive,e.end),s=o.match(n);if(!s)return null;let p=s[0],m=p.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:r.reduce((l,u,f)=>{if(u==="*"){let x=d[f]||"";m=p.slice(0,p.length-x.length).replace(/(.)\/+$/,"$1")}return l[u]=s0(d[f]||"",u),l},{}),pathname:p,pathnameBase:m,pattern:e}}function c0(e,o=!1,n=!0){fl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(s,o?void 0:"i"),r]}function s0(e,o){try{return decodeURIComponent(e)}catch(n){return fl(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}xt();On();Rn();xe();var hl=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&Tt({url:e})},p0=e=>{let o=_o.local.getItem(qe.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&(_o.local.setItem({key:qe.logoutEvent,data:e,expires:0}),_o.local.removeItem(qe.logoutEvent))},m0=500;function da(s,p){return S(this,arguments,function*(e,o,n=Boolean(P_()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var h;let m="",d=Pe(),_=De(d),l=_==="wallet",u=((h=d==null?void 0:d.isInitialized)==null?void 0:h.call(d))===!0;if(n&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield oa(),p0(m)}catch(N){console.error("error fetching logout address",N)}let f=Fn(e),x=V(),v=new URL(decodeURIComponent(f)).pathname;if((gl(x.pathname,v)||l&&u)&&Tm(),!m&&!u)return hl({callbackUrl:f,onRedirect:o});try{if(D.dispatch(ee()),l)return setTimeout(()=>{d.logout({callbackUrl:f})},m0);r.hasConsentPopup&&_==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:f})}catch(N){console.error("Logging out error:",N)}finally{l||hl({callbackUrl:f,onRedirect:o})}})}var xl=()=>{let e=L(Bi),o=L(dn),n=L(xd),r=Pe(),[s,p]=(0,Tl.useState)(),m=()=>S(void 0,null,function*(){let _=(n==null?void 0:n.index)!=null;try{if(r instanceof Tc.HWProvider&&r.isInitialized())return _&&(yield r.setAddressIndex(n.index)),r;let l=new Tc.HWProvider;return(yield l.init())?(_&&(yield l.setAddressIndex(n.index)),l):null}catch(l){return console.error("Failed to initialise Ledger Provider"),null}});function d(_){return S(this,null,function*(){let l,u=o&&!(_!=null&&_.isRelogin);try{if(l=yield m(),!l){console.warn("Could not initialise ledger app"),u&&da(e);return}let f=yield ic(l);return Eo(l),p(f),l}catch(f){console.error("Could not initialise ledger app",f),u&&da(e)}return null})}return{setLedgerProvider:d,ledgerData:s}};t();var ue=()=>{let e=Pe(),o=De(e);return{provider:e,providerType:o}};var yl=()=>{let{provider:e}=ue(),{setLedgerProvider:o}=xl();return function(){return S(this,null,function*(){let r;try{let p=yield e.getAddress();r=Boolean(p)}catch(p){r=!1}if(r)return e;let s=yield o({isRelogin:!0});return s||e})}};var _a={},Sl=({isLedger:e=!1,transactionsToSign:o,egldLabel:n,address:r,activeGuardianAddress:s,hasGuardianScreen:p,onCancel:m,onSignTransaction:d,onTransactionsSignError:_,onTransactionsSignSuccess:l,onGetScamAddressData:u})=>{var oo,Oe,te,fe;let f=Boolean(s),[x,v]=(0,gn.useState)(0),[h,N]=(0,gn.useState)(),[b,E]=(0,gn.useState)(null),[R,O]=(0,gn.useState)(!1),{getTxInfoByDataField:P,allTransactions:j}=U_({transactions:s?o==null?void 0:o.map(B=>{B.setSender(hn.Address.fromBech32(r)),B.setVersion(hn.TransactionVersion.withTxOptions()),B.setGuardian(hn.Address.fromBech32(s));let re=g({guarded:!0},e?{hashSign:!0}:{});return B.setOptions(hn.TransactionOptions.withOptions(re)),B}):o}),X=x===j.length-1,oe=j[x],W=(oo=b==null?void 0:b.transaction)==null?void 0:oo.getSender().toString(),{data:G}=zo(!W||W===r?null:W),F=()=>S(void 0,null,function*(){var zs;if(oe==null)return;let{transaction:B,multiTxData:re,transactionIndex:Me}=oe,no=B.getData().toString(),le=P(B.getData().toString(),re),{tokenId:xo}=le,yo=B.getReceiver().toString();if(W&&W!==r&&!aa(G,r))return console.error(dt),m==null?void 0:m();let on=r!==yo,Oa=yo in _a;if(yo&&on&&!Oa&&u!=null){let pt=yield u(yo);_a=g(g({},_a),pt!=null&&pt.scamInfo?{[yo]:pt.scamInfo}:{})}let st=Boolean(xo&&Zd({tokenId:xo,erdLabel:n}));E({transaction:B,receiverScamInfo:((zs=_a[yo])==null?void 0:zs.info)||null,transactionTokenInfo:le,isTokenTransaction:st,dataField:no,transactionIndex:Me})});(0,gn.useEffect)(()=>{F()},[oe,G]);let $=()=>{v(0),N(void 0),O(!1)},Y=()=>S(void 0,null,function*(){let B=Object.values(h!=null?h:{}),re=Pt({isGuarded:f,transactions:B});if(f&&re){l(B),$();return}if(b==null)return;O(e);let Me;try{Me=yield d(b.transaction)}catch(on){console.error(on,"sign error");let{message:Oa}=on,st=e?vi(on).errorMessage:null;$(),_(st!=null?st:Oa);return}if(!Me)return;let no={[x]:Me},le=h?g(g({},h),no):no;if(N(le),!X){v(on=>on+1),O(!1);return}if(!le)return;let xo=Object.values(le);!Pt({isGuarded:f,transactions:xo})&&p||(l(xo),$())}),q=()=>S(void 0,null,function*(){try{if(b==null)return;if(b.transaction.getSignature().toString("hex")&&!X){v(re=>re+1);return}yield Y()}catch(B){console.error("Error during signing transaction"),yield Y()}}),ne=x===0,pe=()=>{ne?m==null||m():v(B=>B-1)},Se=Boolean(((Oe=b==null?void 0:b.transactionTokenInfo)==null?void 0:Oe.type)&&((te=b==null?void 0:b.transactionTokenInfo)==null?void 0:te.multiTxData)&&!(b!=null&&b.dataField.endsWith((fe=b==null?void 0:b.transactionTokenInfo)==null?void 0:fe.multiTxData)));return{allTransactions:j,onSignTransaction:()=>S(void 0,null,function*(){if(Se){v(B=>B+1);return}yield q()}),onNext:()=>{v(B=>{let re=B+1;return re>(j==null?void 0:j.length)?B:re})},onPrev:()=>{v(B=>{let re=B-1;return re<0?B:re})},waitingForDevice:R,onAbort:pe,isLastTransaction:X,isFirstTransaction:x===0,hasMultipleTransactions:j.length>1,shouldContinueWithoutSigning:Se,currentStep:x,signedTransactions:h,setSignedTransactions:N,currentTransaction:b}};t();var Ut=require("react"),Ta=require("@multiversx/sdk-core"),kc=require("@multiversx/sdk-extension-provider"),Cc=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Nc=require("@multiversx/sdk-passkey-provider/out"),_f=T(cf());M();t();t();var Qe=()=>L(mn);t();var ga=()=>L(hd);t();t();t();t();t();t();t();var Qn=T(require("react"));var Dw=(0,Qn.createContext)({}),BG=D.getState();function ha(){let e=(0,Qn.useContext)(Dw);if(e===void 0||Object.values(e).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return e}t();var sf=T(require("react"));t();var vc=T(require("react")),Pw=T(require("axios"));var Bt=()=>{try{let{loginInfo:e,isLoggedIn:o}=ha();return I(g({},e),{isLoggedIn:o})}catch(e){let o=L(be),n=L(dn);return I(g({},o),{isLoggedIn:n})}};t();t();Bo();t();t();var mf=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),df=require("@multiversx/sdk-webview-provider/out/WebviewProvider");ae();t();ae();K();Q();function pf(e,o=D.dispatch){let n=hc(e);if(n==null)return;let{signature:r,address:s}=n;r&&e&&s&&(o(Si({loginToken:e,signature:r,nativeAuthToken:e})),o(Ne({address:s,loginMethod:"extra"})))}t();t();K();function wc(){D.dispatch(Go())}t();xe();t();K();Q();t();t();var Ew=require("@multiversx/sdk-core"),Mw=T(require("bignumber.js"));M();t();var Ww=T(require("bignumber.js"));M();var We=class{constructor(){this.init=()=>S(this,null,function*(){return yield this._provider.init()});this.login=()=>S(this,null,function*(){var n;let o=yield this._provider.login();return{address:(n=o==null?void 0:o.address)!=null?n:""}});this.logout=()=>S(this,null,function*(){return D.dispatch(ee()),yield this._provider.logout()});this.relogin=()=>S(this,null,function*(){let o=yield this._provider.relogin();return o?(pf(o),S_(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>S(this,null,function*(){let n=yield this._provider.signTransactions(o);return n||(wc(),this._provider.cancelAction(),null)});this.signTransaction=o=>S(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>S(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>S(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>S(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,mf.providerNotInitializedError)("getAddress");this._provider=df.WebviewProvider.getInstance({resetStateCallback:()=>D.dispatch(ee())})}static getInstance(){return We._instance||(We._instance=new We),We._instance}getAccount(){var n;let o=this._provider.getAccount();return{address:(n=o==null?void 0:o.address)!=null?n:""}}setAccount(o){this._provider.setAccount(o)}};K();J();xe();Te();t();var et=require("react"),bc=require("@multiversx/sdk-extension-provider"),Ac=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Ic=require("@multiversx/sdk-passkey-provider/out");Bo();K();var ot=()=>{let e=se(),{provider:o}=ue(),{nonce:n}=Qe(),[r,s]=(0,et.useState)(null),[p,m]=(0,et.useState)(),[d,_]=(0,et.useState)([]),l=ca(),u=L(Qr),f=L(Zr),x=()=>S(void 0,null,function*(){var R,O;let b=Boolean(u==null?void 0:u.transactions),E=(R=u==null?void 0:u.transactions)!=null?R:[];if(b){let P=(O=u==null?void 0:u.customTransactionInformation)!=null&&O.skipUpdateNonces?E:yield l(E);_(P)}m(b)});(0,et.useEffect)(()=>{x()},[u,n]);let v=()=>{s(null),e(ko(null))},h=b=>{v(),N(b)};ra(h);function N(b){var oe,W,G,F,$,Y,q,ne,pe,Se,Z,me;let E=o instanceof bc.ExtensionProvider,R=o instanceof Ic.PasskeyProvider,O=o instanceof we.CrossWindowProvider,P=o instanceof Ye.IframeProvider,j=o instanceof Ac.MetamaskProvider,X=o instanceof We;e(Go()),e(Bn(b)),!(!E&&!O&&!P&&!R&&!j)&&(v(),E&&((W=(oe=bc.ExtensionProvider.getInstance())==null?void 0:oe.cancelAction)==null||W.call(oe)),R&&((F=(G=Ic.PasskeyProvider.getInstance())==null?void 0:G.cancelAction)==null||F.call(G)),j&&((Y=($=Ac.MetamaskProvider.getInstance())==null?void 0:$.cancelAction)==null||Y.call($)),O&&((ne=(q=we.CrossWindowProvider.getInstance())==null?void 0:q.cancelAction)==null||ne.call(q)),P&&((Se=(pe=Ye.IframeProvider.getInstance())==null?void 0:pe.cancelAction)==null||Se.call(pe)),X&&((me=(Z=We.getInstance())==null?void 0:Z.cancelAction)==null||me.call(Z)))}return{error:r,canceledTransactionsMessage:f,clearTransactionStatusMessage:v,onAbort:h,setError:s,hasTransactions:p,transactionsToSign:u&&I(g({},u),{transactions:d})}};var xa=()=>{let e=se(),o=(0,Ut.useRef)("/"),{provider:n}=ue(),r=L(Rr),s=De(n),p=(0,Ut.useRef)(!1),m=ca(),{isGuarded:d,address:_}=Qe(),l=L(Zr),{transactionsToSign:u,error:f,setError:x,hasTransactions:v,onAbort:h,clearTransactionStatusMessage:N}=ot();ra(h);let b=(0,_f.default)(u==null?void 0:u.transactions.map(W=>W.getSender().toString()).filter(W=>W)),E=b==null?void 0:b[0],{data:R}=zo(!E||E===_?null:E),O=W=>{var pe,Se,Z,me,Re,oo,Oe,te,fe,B,re,Me;let G=n instanceof kc.ExtensionProvider,F=n instanceof Nc.PasskeyProvider,$=n instanceof we.CrossWindowProvider,Y=n instanceof Ye.IframeProvider,q=n instanceof Cc.MetamaskProvider,ne=n instanceof We;e(Go()),e(Bn(W)),p.current=!1,!(!G&&!$&&!Y&&!F&&!q)&&(N(),G&&((Se=(pe=kc.ExtensionProvider.getInstance())==null?void 0:pe.cancelAction)==null||Se.call(pe)),F&&((me=(Z=Nc.PasskeyProvider.getInstance())==null?void 0:Z.cancelAction)==null||me.call(Z)),q&&((oo=(Re=Cc.MetamaskProvider.getInstance())==null?void 0:Re.cancelAction)==null||oo.call(Re)),$&&((te=(Oe=we.CrossWindowProvider.getInstance())==null?void 0:Oe.cancelAction)==null||te.call(Oe)),Y&&((B=(fe=Ye.IframeProvider.getInstance())==null?void 0:fe.cancelAction)==null||B.call(fe)),ne&&((Me=(re=We.getInstance())==null?void 0:re.cancelAction)==null||Me.call(re)))},P=(W,G)=>{s==="walletconnectv2"&&(W=bo);let $=W.includes(bo);if(O(G),$){e(ko(bo));return}x(W)},j=(W,G,F="")=>{let $={[mo]:G},Y=F;if(window!=null&&window.location){let{search:ne,origin:pe}=V(),Se=new URLSearchParams(ne);Y=`${pe}${F}`,Se.forEach((Z,me)=>{$[me]=Z})}let q=Ur({callbackUrl:Y,urlParams:$});n.signTransactions(W,{callbackUrl:encodeURIComponent(q)})},X=()=>S(void 0,null,function*(){var oo,Oe;if(p.current||!u)return;let{sessionId:W,transactions:G,callbackRoute:F,customTransactionInformation:$}=u,{redirectAfterSign:Y}=$,q=Ao(),ne=F||q,pe=q.includes(ne),Se=Y&&!pe;try{if(!(yield(oo=n==null?void 0:n.init)==null?void 0:oo.call(n)))return}catch(te){let fe=(te==null?void 0:te.message)||te||Za;console.error(fe),P(Za,W);return}let Z=!$.skipGuardian,me=$.hasConsentPopup,Re=n instanceof we.CrossWindowProvider;try{p.current=!0,Re&&me&&n.setShouldShowConsentPopup(!0);let te=(Oe=yield n.signTransactions(d&&Z?G==null?void 0:G.map(le=>(le.setVersion(Ta.TransactionVersion.withTxOptions()),le.setOptions(Ta.TransactionOptions.withOptions({guarded:!0})),le)):G))!=null?Oe:[];if(p.current=!1,!ia(te))return;let B=Object.values(te).map(le=>qo(le)),{needs2FaSigning:re,guardTransactions:Me}=ma({transactions:te,sessionId:W,callbackRoute:F,isGuarded:d&&Z,walletAddress:r});if(re){let le=yield Me();B=le?le.map(xo=>qo(xo)):[]}let no={sessionId:W,transactions:B,status:"signed"};Se&&(no.redirectRoute=ne),e(lo(no))}catch(te){p.current=!1;let fe=(te==null?void 0:te.message)||te||xp;console.error(fe),e(lo({sessionId:W,status:"cancelled"})),P(fe.includes("cancel")?bo:fe,W)}}),oe=()=>S(void 0,null,function*(){if(!u)return;N();let{sessionId:W,transactions:G,callbackRoute:F,customTransactionInformation:$}=u;if(!n){console.error(yp);return}if(b.length>1)throw new Error("Multiple senders are not allowed");if(E&&E!==_&&!aa(R,_))return console.error(dt),P(dt);o.current=F||V().pathname;try{let Y=s==="wallet",q=$.skipUpdateNonces?G:yield m(G);if(Y)return j(q,W,F);X()}catch(Y){let ne=(Y==null?void 0:Y.message)||Tp;console.error(ne),P(ne,W),e(lo({sessionId:W,status:"cancelled"})),console.error(ne,Y)}});return(0,Ut.useEffect)(()=>{v?oe():p.current=!1},[u,v,R]),{error:f,canceledTransactionsMessage:l,onAbort:h,hasTransactions:v,callbackRoute:o.current,sessionId:u==null?void 0:u.sessionId,transactions:u==null?void 0:u.transactions}};t();K();Q();xt();Te();t();co();K();function jo(){let e=se();return o=>{e(Go()),e(Bn(o)),e(ko(bo))}}function Lc(e){let{onCancel:o,verifyReceiverScam:n=!0,hasGuardianScreen:r}=e,{transactionsToSign:s,hasTransactions:p}=ot(),m=L(Rr),d=yl(),_=L(Or),{account:l}=ga(),{address:u,isGuarded:f,activeGuardianAddress:x}=l,{provider:v,providerType:h}=ue(),N=se(),b=jo(),{transactions:E,sessionId:R,callbackRoute:O,customTransactionInformation:P}=s||{};function j(q){R&&N(lo({sessionId:R,status:"cancelled"})),N(Gm(q))}let{pathname:X}=V(),oe=O!=null&&X.includes(O),W=!(P!=null&&P.skipGuardian);function G(q){return S(this,null,function*(){if(!ia(q))return;let{needs2FaSigning:pe,guardTransactions:Se}=ma({transactions:q,sessionId:R,callbackRoute:O,isGuarded:f&&W,walletAddress:m}),Z=q.map(me=>qo(me));if(pe){let me=yield Se();Z=me?me.map(Re=>qo(Re)):[]}!R||(N(lo({sessionId:R,status:"signed",transactions:Z})),O!=null&&(P==null?void 0:P.redirectAfterSign)&&!oe&&Tt({url:O}))})}function F(){o(),b(R)}function $(q){return S(this,null,function*(){let ne=h!=="ledger"?v:yield d();return q?yield ne.signTransaction(q):null})}let Y=Sl({address:u,egldLabel:_,activeGuardianAddress:f&&W?x:void 0,transactionsToSign:p?E:[],onGetScamAddressData:n?A_:null,isLedger:Je("ledger"),hasGuardianScreen:r,onCancel:F,onSignTransaction:$,onTransactionsSignError:j,onTransactionsSignSuccess:G});return I(g({},Y),{callbackRoute:O,waitingForDevice:Y.waitingForDevice})}t();t();var Ow=require("react");t();t();J();$n();t();var ya=require("react"),lf=(e,o)=>{let[n,r]=(0,ya.useState)(e);return(0,ya.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),n};t();t();var Bw=require("react"),Uw=require("@multiversx/sdk-extension-provider");co();ae();J();t();Io();xe();xe();t();t();Bo();Q();t();var Fw=require("react"),uf=require("@multiversx/sdk-core");K();t();var Gw=require("react"),Hw=require("@multiversx/sdk-opera-provider");co();ae();J();Io();xe();Te();t();var Vw=require("react");mi();co();Bo();ae();K();J();Io();Te();t();var Yw=require("react");co();K();t();t();li();t();t();var $w=T(require("platform"));sn();t();t();t();t();t();function ff(){return Or(D.getState())}t();t();Wn();J();t();t();var qw=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();xt();On();t();t();t();K();var zw={},jw={};var gf=e=>{if(e.component!=null){let o=e,{component:n,onClose:r}=o,s=Fe(o,["component","onClose"]),p=D.dispatch(Ii(I(g({},s),{component:null,onClose:void 0})));return zw[p==null?void 0:p.payload.toastId]=n,r&&(jw[p==null?void 0:p.payload.toastId]=r),p==null?void 0:p.payload}return D.dispatch(Ii(e)).payload};t();t();var Kw=T(require("axios"));xe();t();t();var Xw=T(la());Wn();var hf,Tf,xf,u$=(xf=(Tf=(hf=Ce.safeWindow)==null?void 0:hf.location)==null?void 0:Tf.origin)==null?void 0:xf.includes("localhost");t();Te();t();t();var cb=require("react");M();t();t();M();t();t();t();var Zw=T(require("bignumber.js"));t();t();t();var Ko=T(require("react")),Lf=require("react"),Df=require("react"),Fc=T(require("classnames")),Pf=require("react-dom");M();t();var wf=T(require("react"));t();var Gt=T(require("react"));t();sn();var yf=()=>!ze();var Qw=()=>S(void 0,null,function*(){return yield Promise.resolve().then(()=>(Pc(),Dc))}),eb=()=>(Pc(),H(Dc)).default,Ec=yf();function vf({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,s]=Gt.default.useState(Ec?void 0:eb()),[p,m]=Gt.default.useState(Ec||n==null?void 0:n()),d=()=>S(this,null,function*(){(e?e():Qw()).then(_=>s(_.default)),o==null||o().then(_=>m(_.default))});return(0,Gt.useEffect)(()=>{Ec&&d()},[]),{globalStyles:r,styles:p}}function C(e,o){return n=>{let{globalStyles:r,styles:s}=vf({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return wf.default.createElement(e,I(g({},n),{globalStyles:r!=null?r:{},styles:s!=null?s:{}}))}}t();var Af=T(require("react")),If=T(require("classnames"));var nb=({className:e,children:o,styles:n})=>Af.default.createElement("div",{className:(0,If.default)(n==null?void 0:n.dappModalBody,e)},o),Mc=C(nb,{ssrStyles:()=>Promise.resolve().then(()=>(Ro(),Wo)),clientStyles:()=>(Ro(),H(Wo)).default});t();var Wc=T(require("react")),kf=T(require("classnames"));var tb=({visible:e,customFooter:o,className:n,footerText:r,styles:s})=>e?Wc.default.createElement("div",{className:(0,kf.default)(s==null?void 0:s.dappModalFooter,n)},o!=null?o:Wc.default.createElement("div",null,r)):null,Rc=C(tb,{ssrStyles:()=>Promise.resolve().then(()=>(Ro(),Wo)),clientStyles:()=>(Ro(),H(Wo)).default});t();var rt=T(require("react")),Cf=require("@fortawesome/free-solid-svg-icons"),Nf=require("@fortawesome/react-fontawesome"),Ht=T(require("classnames"));var rb=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:s,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>e?n?rt.default.createElement("div",{className:(0,Ht.default)(_==null?void 0:_.dappModalHeader,r)},n):rt.default.createElement("div",{className:(0,Ht.default)(_==null?void 0:_.dappModalHeader,r)},rt.default.createElement("div",{className:(0,Ht.default)(_==null?void 0:_.dappModalHeaderText,p)},o),rt.default.createElement("button",{onClick:m,className:(0,Ht.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,s)},rt.default.createElement(Nf.FontAwesomeIcon,{size:"lg",icon:Cf.faTimes}))):null,Oc=C(rb,{ssrStyles:()=>Promise.resolve().then(()=>(Ro(),Wo)),clientStyles:()=>(Ro(),H(Wo)).default});var ab={showHeader:!0,showFooter:!1,headerText:"",footerText:""},ib=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:s=ab,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:l})=>{let[u,f]=(0,Lf.useState)(!1);if((0,Df.useEffect)(()=>{f(!0)},[]),!_)return null;let{showHeader:x,showFooter:v,headerText:h,footerText:N,modalDialogClassName:b="dapp-modal-dialog",modalContentClassName:E="dapp-modal-dialog-content",modalHeaderClassName:R="dapp-modal-dialog-header",modalHeaderTextClassName:O="dapp-modal-dialog-header-text",modalCloseButtonClassName:P="dapp-modal-dialog-close-button",modalBodyClassName:j="dapp-modal-dialog-content-body",modalFooterClassName:X="dapp-modal-dialog-footer",customModalHeader:oe,customModalFooter:W}=s,G=F=>{F.key==="Escape"&&r&&(m==null||m())};return Ko.default.createElement(Ko.default.Fragment,null,u&&(0,Pf.createPortal)(Ko.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Fc.default)(b,l==null?void 0:l.dappModal,n),"data-testid":e,onKeyDown:G},Ko.default.createElement("div",{className:(0,Fc.default)(l==null?void 0:l.dappModalContent,E)},Ko.default.createElement(Oc,{visible:x,headerText:h,customHeader:oe,className:R,headerTextClassName:O,closeButtonClassName:P,onHide:m}),Ko.default.createElement(Mc,{className:j},o),Ko.default.createElement(Rc,{visible:v,customFooter:W,footerText:N,className:X}))),d!=null?d:document==null?void 0:document.body))},Bc=C(ib,{ssrStyles:()=>Promise.resolve().then(()=>(Ro(),Wo)),clientStyles:()=>(Ro(),H(Wo)).default});t();t();var Sa=require("react"),Uc=e=>{let[o,n]=(0,Sa.useState)(!1),r=()=>{n(!0)},s=()=>{n(!1)};return(0,Sa.useEffect)(()=>{(e==null?void 0:e.visible)===!0?r():(e==null?void 0:e.visible)===!1&&s()},[e==null?void 0:e.visible]),{handleShowModal:r,handleHideModal:s,showModal:o}};t();t();var Ef=require("react"),pb=require("@multiversx/sdk-hw-provider");co();ae();K();J();Io();t();var sb=require("react");t();t();var Gc=require("react");ae();K();J();Io();Te();t();var db=require("react"),_b=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");co();ae();J();Io();xe();xe();t();var lb=require("react"),ub=require("@multiversx/sdk-passkey-provider/out");co();ae();J();Io();xe();xe();t();t();var Mf=require("react");t();var hb=require("react");t();var Hc=require("react"),gb=require("socket.io-client");K();t();t();t();var Tb=require("react");Q();t();t();t();var Of=T(require("swr"));t();t();t();t();var Wf=T(require("axios"));function Rf(e=It){let n=`${fn()}/${e}`;return Wf.default.get(n)}t();function va(){let e=r=>Rf(r).then(s=>s.data),{data:o,error:n}=(0,Of.default)(It,e);return{price:o==null?void 0:o.price,error:n}}Q();t();t();var $c=T(require("react"));t();var vn=T(require("react")),Gf=require("@fortawesome/free-solid-svg-icons");t();var Vc=T(require("react"));t();var Sn=T(require("react")),at=require("@fortawesome/free-solid-svg-icons"),wa=require("@fortawesome/react-fontawesome"),ba=T(require("classnames"));t();var Sb=({type:e,globalStyles:o,styles:n})=>{switch(e){case"info":return Sn.default.createElement("div",{className:(0,ba.default)(n==null?void 0:n.transactionsStatusToastIcon,o==null?void 0:o.success)},Sn.default.createElement(wa.FontAwesomeIcon,{icon:at.faInfo,className:n==null?void 0:n.svg,size:"5x"}));case"warning":return Sn.default.createElement("div",{className:(0,ba.default)(n==null?void 0:n.transactionsStatusToastIcon,o==null?void 0:o.warning,n==null?void 0:n.warningIcon)},Sn.default.createElement(wa.FontAwesomeIcon,{icon:at.faWarning,className:n==null?void 0:n.svg,size:"5x"}));case"error":return Sn.default.createElement("div",{className:(0,ba.default)(n==null?void 0:n.transactionsStatusToastIcon,o==null?void 0:o.danger,n==null?void 0:n.errorIcon)},Sn.default.createElement(wa.FontAwesomeIcon,{icon:at.faTimes,className:n==null?void 0:n.svg,size:"5x"}));default:return null}},Bf=C(Sb,{ssrStyles:()=>Promise.resolve().then(()=>($t(),Vt)),clientStyles:()=>($t(),H(Vt)).default});var vb=({type:e,message:o,styles:n})=>Vc.default.createElement("div",{className:n==null?void 0:n.transactionsStatusToastContent},Vc.default.createElement(Bf,{type:e}),o),Uf=C(vb,{ssrStyles:()=>Promise.resolve().then(()=>($t(),Vt)),clientStyles:()=>($t(),H(Vt)).default});M();var Aa=({signError:e,canceledTransactionsMessage:o,onDelete:n})=>{let r=L(vt),s=(0,vn.useMemo)(()=>e||o||Sp,[e,o]),p=(0,vn.useMemo)(()=>e?"error":o?"warning":"info",[e,o]);return(0,vn.useEffect)(()=>{var m;gf({toastId:`${Fp}-${Date.now()}`,title:"Transaction canceled",duration:(m=r.cancelTransactionToastDuration)!=null?m:2e4,component:()=>vn.default.createElement(Uf,{type:p,message:s}),onClose:()=>n==null?void 0:n(),icon:Gf.faWarning})},[]),null};var Hf=({Screen:e,verifyReceiverScam:o,className:n})=>{if(!e)return null;let{callbackRoute:r,transactions:s,error:p,sessionId:m,hasTransactions:d,onAbort:_,canceledTransactionsMessage:l}=xa(),u=na(),{providerType:f}=ue(),x=()=>{_(m)},v=p||u,h={handleClose:x,error:v,sessionId:m,transactions:s||[],providerType:f,callbackRoute:r,className:n,verifyReceiverScam:o},N={signError:v,canceledTransactionsMessage:l},b=Boolean(v)||Boolean(l);return!b&&!d?null:b?$c.default.createElement(Aa,g({},N)):$c.default.createElement(e,g({},h))};t();var qc=T(require("react"));xe();var Vf=({Screen:e,GuardianScreen:o,verifyReceiverScam:n,className:r})=>{var E;if(!e)return null;let{transactionsToSign:s,error:p,hasTransactions:m,onAbort:d,canceledTransactionsMessage:_}=ot(),l=na(),{providerType:u}=ue(),{isGuarded:f}=Qe(),x=()=>{d(s==null?void 0:s.sessionId)},v=p||l,h={handleClose:x,GuardianScreen:o,isGuarded:f,error:v,sessionId:s==null?void 0:s.sessionId,transactions:(E=s==null?void 0:s.transactions)!=null?E:[],providerType:u,callbackRoute:(s==null?void 0:s.callbackRoute)||Ao(),className:r,verifyReceiverScam:n},N={signError:v,canceledTransactionsMessage:_,onDelete:x},b=Boolean(v)||Boolean(_);return!b&&!m?null:b?qc.default.createElement(Aa,g({},N)):qc.default.createElement(e,g({},h))};t();t();t();var Ia=T(require("react")),Kf=require("@fortawesome/free-solid-svg-icons"),Yc=T(require("classnames"));M();t();var $f=T(require("react"));var Xo=e=>{let{showModal:o}=Uc({visible:e.visible}),n=()=>{var r;(r=e.onClose)==null||r.call(e)};return $f.default.createElement(Bc,{className:e.className,closeOnEscape:e.closeOnEscape,config:e.modalConfig,onHide:n,visible:o},e.children)};t();t();var Yo=T(require("react")),zf=require("@fortawesome/react-fontawesome"),qt=T(require("classnames"));var Ab=({icon:e,title:o,action:n,iconClass:r,"data-testid":s,description:p,iconBgClass:m,iconSize:d="5x",className:_="dapp-page-state",globalStyles:l,styles:u})=>{let f=(0,Yo.useMemo)(()=>({wrapper:(0,qt.default)(u==null?void 0:u.state,l==null?void 0:l.mAuto,l==null?void 0:l.p4,l==null?void 0:l.textCenter,_),iconContainer:(0,qt.default)(l==null?void 0:l.iconState,l==null?void 0:l.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,qt.default)(r!=null&&r),title:(0,qt.default)(l==null?void 0:l.h4,l==null?void 0:l.my4),description:l==null?void 0:l.mb3}),[l,u,_,m,r]);return Yo.default.createElement("div",{className:f.wrapper,"data-testid":s},e&&Yo.default.createElement("span",{className:f.iconContainer},Yo.default.createElement(zf.FontAwesomeIcon,{icon:e,className:f.iconClass,size:d})),o&&Yo.default.createElement("p",{className:f.title},o),p&&Yo.default.createElement("div",{className:f.description},p),n)},Zo=C(Ab,{ssrStyles:()=>Promise.resolve().then(()=>(jc(),zc)),clientStyles:()=>(jc(),H(zc)).default});var kb=({handleClose:e,error:o,title:n,description:r,sessionId:s,className:p="dapp-extension-modal",modalContentClassName:m,globalStyles:d,styles:_})=>{let l=jo(),u={wrapper:(0,Yc.default)(_==null?void 0:_.modalContainer,_==null?void 0:_.extension,p),icon:d==null?void 0:d.textWhite,closeBtn:(0,Yc.default)(d==null?void 0:d.btn,d==null?void 0:d.btnCloseLink,d==null?void 0:d.btnDark,d==null?void 0:d.textWhite,d==null?void 0:d.mt2)},f=x=>{x.preventDefault(),e(),l(s)};return Ia.default.createElement(Xo,{onClose:e,modalConfig:{modalDialogClassName:u.wrapper},visible:!0},Ia.default.createElement(Zo,{icon:o?Kf.faTimes:null,iconClass:u.icon,className:m,iconBgClass:o?d==null?void 0:d.bgDanger:d==null?void 0:d.bgWarning,iconSize:"3x",title:n,description:r,action:Ia.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:f,className:u.closeBtn},"Close")}))},go=C(kb,{ssrStyles:()=>Promise.resolve().then(()=>(Xc(),Kc)),clientStyles:()=>(Xc(),H(Kc)).default});t();t();var Xf=T(require("react"));var Yf=e=>{var s;let{walletAddress:o}=L(ye),n=e.error?e.error:((s=e.transactions)==null?void 0:s.length)>1?"Check your MultiversX Wallet to sign the transactions":"Check your MultiversX Wallet to sign the transaction",r=I(g({},e),{description:n,title:`Confirm on ${o}`});return Xf.default.createElement(go,g({},r))};t();t();var Zf=T(require("react"));var Jf=e=>{var r;let o=e.error?e.error:((r=e.transactions)==null?void 0:r.length)>1?"Check your MultiversX Wallet Extension to sign the transactions":"Check your MultiversX Wallet Extension to sign the transaction",n=I(g({},e),{description:o,title:"Confirm on MultiversX DeFi Wallet"});return Zf.default.createElement(go,g({},n))};t();t();var Zc=T(require("react"));function Qf(){return xa(),Zc.default.createElement(Zc.default.Fragment,null)}t();t();var eg=T(require("react"));var og=e=>{var r;let o=e.error?e.error:((r=e.transactions)==null?void 0:r.length)>1?"Check your Wallet Window to sign the transactions":"Check your Wallet Window to sign the transaction",n=I(g({},e),{description:o,title:"Confirm on your authenticated provider"});return eg.default.createElement(go,g({},n))};t();t();var Fs=T(require("react"));Q();t();t();var Zt=T(require("react")),Os=T(require("classnames"));t();t();var ng=T(require("react")),tg=require("@fortawesome/free-solid-svg-icons"),rg=T(require("classnames"));var Cb=({"data-testid":e="loader",noText:o=!1,className:n="dapp-loader",globalStyles:r})=>ng.default.createElement(Zo,{title:o?"":"Loading...",iconBgClass:(0,rg.default)(r==null?void 0:r.textPrimary,"fa-spin"),"data-testid":e,icon:tg.faCircleNotch,className:n}),ag=C(Cb,{});t();var _e=T(require("react")),Da=require("@fortawesome/free-solid-svg-icons"),Rs=require("@fortawesome/react-fontawesome"),kn=T(require("classnames"));M();t();t();var Jo=T(require("react")),Rh=require("@multiversx/sdk-core/out"),Oh=T(require("classnames"));t();t();t();var Oo=T(require("react")),Ug=require("@fortawesome/free-solid-svg-icons"),Gg=require("@fortawesome/react-fontawesome"),Hg=T(require("classnames")),ns=T(Bg());Ya();Q();var Vg=({className:e,data:o,onDecodeError:n,onDecode:r})=>{let s=(0,ns.default)("raw".toString()),[p,m]=(0,Oo.useState)({label:s,value:s}),d=Object.values(so).map(l=>{let u=l.toString();return{label:(0,ns.default)(u),value:u}}),_=l=>{let u=d.find(f=>f.value===l.target.value);u&&m(u)};return(0,Oo.useEffect)(()=>{let{displayValue:l,validationWarnings:u}=oc({input:o,decodeMethod:so[p.value]});r(l),u.length>0&&n(u)},[p,o]),Oo.default.createElement("div",{className:(0,Hg.default)("transaction-data-decode",e)},Oo.default.createElement("select",{className:"transaction-data-decode-select","data-testid":"transactionDataDecode",value:p.value,onChange:_},d.map(l=>Oo.default.createElement("option",{key:l.value,value:l.value},l.label))),Oo.default.createElement(Gg.FontAwesomeIcon,{icon:Ug.faChevronDown,className:"transaction-data-decode-select-icon"}))};t();var U=T(require("react")),wn=T(require("classnames"));M();t();t();var it=T(require("react")),ka=require("@fortawesome/free-solid-svg-icons"),as=require("@fortawesome/react-fontawesome"),zg=T(require("classnames"));t();sn();function IA(e){let o=!1,n=document==null?void 0:document.createElement("textarea");n.value=e,n.style.position="fixed",document==null||document.body.appendChild(n),n.focus(),n.select();try{document==null||document.execCommand("copy"),o=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(n),o}function $g(e){return S(this,null,function*(){if(!ze())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):o=IA(e),o})}var CA=({text:e,className:o="dapp-copy-button",copyIcon:n=ka.faCopy,successIcon:r=ka.faCheck,styles:s})=>{let[p,m]=(0,it.useState)({default:!0,success:!1});return it.default.createElement("a",{href:"/#",onClick:_=>S(void 0,null,function*(){_.preventDefault(),_.stopPropagation();let l=e&&e.trim();m({default:!1,success:yield $g(l)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,zg.default)(s==null?void 0:s.copy,o)},p.default||!p.success?it.default.createElement(as.FontAwesomeIcon,{icon:n}):it.default.createElement(as.FontAwesomeIcon,{icon:r}))},zt=C(CA,{ssrStyles:()=>Promise.resolve().then(()=>(rs(),ts)),clientStyles:()=>(rs(),H(ts)).default});var LA=(e,o)=>[...e.matchAll(new RegExp(o,"gi"))].map(r=>r.index).filter(r=>Number.isFinite(r)),DA=({className:e="dapp-transaction-data",customCopyIcon:o,data:n,globalStyles:r,highlight:s,innerTransactionDataClasses:p,isScCall:m,label:d,showCopyButton:_=!0,styles:l,showDataDecode:u,transactionIndex:f})=>{let[x,v]=(0,U.useState)(n),{transactionDataInputLabelClassName:h,transactionDataInputValueClassName:N}=p||{},b=U.default.createElement(U.default.Fragment,null,x),[E,...R]=s&&m?s.split("@"):[],O=x&&s,P=O?LA(x,s):[],j=O&&P.length>0,X=F=>{!F||F.scrollIntoView()},oe=F=>{v(F)},W=()=>{v(n)};if(j)switch(!0){case x.startsWith(s):{let[,F]=x.split(s);b=U.default.createElement(U.default.Fragment,null,U.default.createElement("span",{className:r==null?void 0:r.highlighted},s),U.default.createElement("span",{className:r==null?void 0:r.textMuted},F));break}case x.endsWith(s):{let[F]=x.split(s);b=U.default.createElement(U.default.Fragment,null,U.default.createElement("span",{className:r==null?void 0:r.textMuted},F),U.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:X},s));break}default:{let{start:F,end:$}=Yd({occurrences:P,transactionIndex:f,data:x,highlight:s});b=U.default.createElement(U.default.Fragment,null,U.default.createElement("span",{className:r==null?void 0:r.textMuted},F),U.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:X},s),U.default.createElement("span",{className:r==null?void 0:r.textMuted},$));break}}let G=[ln(E),...R].join("@");return U.default.createElement(U.default.Fragment,null,E&&U.default.createElement("div",{className:(0,wn.default)(l==null?void 0:l.transactionData,e)},U.default.createElement("span",{className:(0,wn.default)(l==null?void 0:l.transactionDataLabel,h)},"Smart Contract Call"),U.default.createElement("div",{className:l==null?void 0:l.transactionDataValueWrapper},U.default.createElement("div",{"data-testid":"confirmScCall",className:(0,wn.default)(l==null?void 0:l.transactionDataValue,N)},U.default.createElement("span",{className:l==null?void 0:l.transactionDataValueText},G),x&&U.default.createElement(zt,{text:G,className:l==null?void 0:l.transactionDataValueCopy})))),U.default.createElement("div",{className:(0,wn.default)(l==null?void 0:l.transactionData,e)},U.default.createElement("div",{className:(0,wn.default)(l==null?void 0:l.transactionDataLabel,h)},d!=null?d:"Data",u&&U.default.createElement(Vg,{data:n,onDecode:oe,onDecodeError:W})),U.default.createElement("div",{className:l==null?void 0:l.transactionDataValueWrapper},U.default.createElement("div",{"data-testid":"confirmData",className:(0,wn.default)(l==null?void 0:l.transactionDataValue,N)},U.default.createElement("span",{className:l==null?void 0:l.transactionDataValueText},x?b:jp),x&&_&&U.default.createElement(zt,{copyIcon:o,text:x,className:l==null?void 0:l.transactionDataValueCopy})))))},Kg=C(DA,{ssrStyles:()=>Promise.resolve().then(()=>(cs(),is)),clientStyles:()=>(cs(),H(is)).default});t();t();var Xg=require("react"),Ae=T(require("classnames")),Yg=(e=null,o)=>(0,Xg.useMemo)(()=>({formGroup:(0,Ae.default)(o==null?void 0:o.formGroup,o==null?void 0:o.textBreak,o==null?void 0:o.textLeft),formLabel:(0,Ae.default)(o==null?void 0:o.textBreak,o==null?void 0:o.textSecondary),icon:o==null?void 0:o.textWhite,contentWrapper:(0,Ae.default)(o==null?void 0:o.dFlex,o==null?void 0:o.flexColumn,o==null?void 0:o.justifyContentStart,o==null?void 0:o.flexRow,o==null?void 0:o.justifyContentBetween,o==null?void 0:o.mb3),tokenWrapper:(0,Ae.default)(o==null?void 0:o.mb3,o==null?void 0:o.mb0,o==null?void 0:o.dFlex,o==null?void 0:o.flexColumn,o==null?void 0:o.alignItemsStart),tokenLabel:(0,Ae.default)(o==null?void 0:o.textSecondary,o==null?void 0:o.textLeft),tokenValue:(0,Ae.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter),scamReport:o==null?void 0:o.textWarning,scamReportIcon:(0,Ae.default)(o==null?void 0:o.textWarning,o==null?void 0:o.mr1),tokenAmountLabel:(0,Ae.default)(o==null?void 0:o.textSecondary,o==null?void 0:o.textLeft),tokenAmountValue:(0,Ae.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter),dataFormGroup:(0,Ae.default)(o==null?void 0:o.formGroup,o==null?void 0:o.textLeft),errorMessage:(0,Ae.default)(o==null?void 0:o.textDanger,o==null?void 0:o.dFlex,o==null?void 0:o.justifyContentCenter,o==null?void 0:o.alignItemsCenter),buttonsWrapper:(0,Ae.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter,o==null?void 0:o.justifyContentEnd,o==null?void 0:o.mt1),cancelButton:(0,Ae.default)(o==null?void 0:o.btn,o==null?void 0:o.btnDark,o==null?void 0:o.textWhite,o==null?void 0:o.dFlex,o==null?void 0:o.mr2),signButton:(0,Ae.default)(o==null?void 0:o.btn,e?o==null?void 0:o.btnWarning:o==null?void 0:o.btnPrimary,o==null?void 0:o.dFlex,o==null?void 0:o.ml2)}),[e,o]);t();t();t();var To=T(require("react")),vs=T(require("classnames"));t();t();var Ca=T(require("react")),ms=T(require("classnames"));var EA=({className:e,styles:o})=>Ca.default.createElement("div",{className:(0,ms.default)(o==null?void 0:o.loadingDots,e)},Array.from({length:3}).map((n,r)=>Ca.default.createElement("span",{key:`loading-dot-${r}`,className:(0,ms.default)(o==null?void 0:o.loadingDot,o==null?void 0:o[`loadingDot-${r}`])})),Ca.default.createElement("span",null,"Loading...")),bn=C(EA,{ssrStyles:()=>Promise.resolve().then(()=>(ps(),ss)),clientStyles:()=>(ps(),H(ss)).default});t();t();t();var An=T(require("react")),Qg=T(require("bignumber.js"));M();var WA=({amount:e,styles:o,type:n,identifier:r})=>{let s=new Qg.default(e),p=s.isZero(),m=s.isEqualTo(1)?"SFT":"SFTs",d=s.toNumber().toLocaleString("en"),_=`${d} ${r}`;return p?An.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are using"):n==="NonFungibleESDT"?An.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending an NFT"):n==="SemiFungibleESDT"?An.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},An.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelText},"You are sending"),An.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":_},d," ",m)):An.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending")},eh=C(WA,{ssrStyles:()=>Promise.resolve().then(()=>(_s(),ds)),clientStyles:()=>(_s(),H(ds)).default});t();t();var ho=T(require("react")),ih=require("@fortawesome/free-solid-svg-icons"),ch=require("@fortawesome/react-fontawesome"),sh=T(require("classnames"));M();t();t();var In=T(require("react")),fs=T(require("classnames"));t();var Na=T(require("react")),RA=e=>Na.createElement("svg",g({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),Na.createElement("g",null,Na.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),La=RA;var FA=({amount:e,displayAsUsd:o,addEqualSign:n,egldIcon:r,className:s,showTokenLabel:p=!0,styles:m,tokenLabel:d,showTokenLabelSup:_,"data-testid":l})=>{let[u,f]=e.split("."),x=o&&u.indexOf("$")<0?`$${u}`:u,h=(()=>{let E={processedMainBalance:x};return n&&o&&(E.approximation="\u2248"),f&&(E.decimalBalance=`.${f}`),!o&&p&&(E.tokenLabel=` ${d}`),E})(),b=[h.approximation,h.processedMainBalance,h.decimalBalance,h.tokenLabel].reduce((E,R)=>R?E.concat(R):E,"");return In.default.createElement("div",{className:(0,fs.default)(m==null?void 0:m.balance,s),"data-testid":l,"data-value":b},r&&!o&&In.default.createElement(La,{className:m==null?void 0:m.balanceSymbol}),h.approximation&&In.default.createElement("span",{className:m==null?void 0:m.balanceApproximation},h.approximation),h.processedMainBalance&&In.default.createElement("span",{className:m==null?void 0:m.balanceMain},x),h.decimalBalance&&In.default.createElement("span",{className:m==null?void 0:m.balanceDecimals},h.decimalBalance),h.tokenLabel&&In.default.createElement("sup",{className:(0,fs.default)(m==null?void 0:m.balanceSuffix,{[m==null?void 0:m.balanceSuffixSup]:_})},h.tokenLabel))},jt=C(FA,{ssrStyles:()=>Promise.resolve().then(()=>(us(),ls)),clientStyles:()=>(us(),H(ls)).default});t();t();var nh=T(require("react")),th=T(require("classnames"));M();var BA=d=>{var _=d,{amount:e,usd:o,decimals:n,addEqualSign:r,className:s,globalStyles:p}=_,m=Fe(_,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let l=qr({amount:e,usd:o,decimals:n,addEqualSign:r!=null?r:!0}),f=`${e}`===Ge?`= $${Ge}`:l;return nh.default.createElement("small",g({className:(0,th.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,s!=null?s:"dapp-usd-value")},m),f)},rh=C(BA,{});var GA=({isEgld:e,styles:o,tokenPrice:n,isNftOrSft:r,handleReference:s,currentTransaction:p,amount:m,tokenDetails:d})=>{let{network:_}=Po(),{tokenAvatar:l,tokenDecimals:u,identifier:f}=d,x=({addCommas:b})=>Ke({input:e?p.transaction.getValue().toString():m,decimals:e?Number(_.decimals):u,digits:Number(_.digits),showLastNonZeroDecimal:!1,addCommas:b}),v=e||d.identifier===Xp,h=x({addCommas:!0}),N=x({addCommas:!1});return ho.default.createElement("div",{className:o==null?void 0:o.confirmAmountData},ho.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataWrapper},!v&&l&&ho.default.createElement("img",{src:l,className:o==null?void 0:o.confirmAmountDataIcon}),!v&&!l&&ho.default.createElement("div",{className:(0,sh.default)(o==null?void 0:o.confirmAmountDataIcon,o==null?void 0:o.confirmAmountDataIconDefault)},ho.default.createElement(ch.FontAwesomeIcon,{icon:ih.faCoins,className:o==null?void 0:o.confirmAmountDataIconDefaultIcon})),ho.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataBalanceWrapper,ref:s},ho.default.createElement(jt,{amount:h,egldIcon:v,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:v?_.egldLabel:f,className:o==null?void 0:o.confirmAmountDataBalance}))),!r&&n&&ho.default.createElement(rh,{amount:N,usd:n,"data-testid":"confirmUsdValue",className:o==null?void 0:o.confirmAmountDataPrice}),!r&&!n&&ho.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataPrice},"Price Unknown"))},ph=C(GA,{ssrStyles:()=>Promise.resolve().then(()=>(hs(),gs)),clientStyles:()=>(hs(),H(gs)).default});t();t();var eo=T(require("react")),dh=require("@fortawesome/free-solid-svg-icons"),_h=require("@fortawesome/react-fontawesome"),lh=T(require("classnames"));M();Wn();var VA=({styles:e,amount:o,type:n,tokenDetails:r})=>{let{network:s}=Po(),{identifier:p,tokenAvatar:m,name:d}=r,_="SemiFungibleESDT"===n,u=Array(Math.min(4,Number(o))).fill(null);return eo.default.createElement("div",{onClick:x=>{var h;if(!p)return;let v=Nt({explorerAddress:s.explorerAddress,to:Ct.nftDetails(p)});x.preventDefault(),x.stopPropagation(),(h=Ce.safeWindow)!=null&&h.open&&Ce.safeWindow.open(v)},className:e==null?void 0:e.confirmAmountNftSft},eo.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftWrapper},m?eo.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},u.map((x,v)=>eo.default.createElement("img",{src:m,alt:n,key:`nft-sft-avatar-${v}`,style:{opacity:1-.25*v,zIndex:u.length-v,marginLeft:(u.length-v-1)*4},className:(0,lh.default)(e==null?void 0:e.confirmAmountNftSftIcon,{[e==null?void 0:e.confirmAmountNftSftIconRelative]:v===0})}))):eo.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},eo.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconText},_?"SFT":"NFT")),eo.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftContent},eo.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftName,"data-testid":"nftLabel"},d),eo.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),eo.default.createElement(_h.FontAwesomeIcon,{icon:dh.faArrowUpRightFromSquare,className:e==null?void 0:e.confirmAmountNftSftIcon}))},uh=C(VA,{ssrStyles:()=>Promise.resolve().then(()=>(xs(),Ts)),clientStyles:()=>(xs(),H(Ts)).default});t();t();var fh=require("react"),gh=()=>{let[e,o]=(0,fh.useState)(!0),n=p=>p.getBoundingClientRect().width,r=p=>parseInt(getComputedStyle(p).getPropertyValue("font-size"));return{isFontSizeLoading:e,handleAmountReference:p=>{if(!p)return;let m=p.firstChild,d={parent:p.offsetWidth,firstChild:r(m)};if(!!m){for(;d.parent<n(m);){let _=d.firstChild-.1,l={fontSize:`${_}px`},u={firstChild:_};Object.assign(m.style,l),Object.assign(d,u)}o(!1)}}}};var qA=({styles:e,currentTransaction:o})=>{let{tokenId:n,nonce:r,amount:s}=o.transactionTokenInfo,{isFontSizeLoading:p,handleAmountReference:m}=gh(),d=r&&r.length>0?`${n}-${r}`:n,_=R_({tokenId:d}),{price:l}=va(),{type:u,esdtPrice:f,isLoading:x,identifier:v}=_,h=!n,N=h?l:f,b=u?["SemiFungibleESDT","NonFungibleESDT"].includes(u):!1;return To.default.createElement("div",{className:e==null?void 0:e.confirmAmount},To.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},x?To.default.createElement(bn,null):To.default.createElement(eh,{amount:s,type:u,identifier:v})),To.default.createElement("div",{className:e==null?void 0:e.confirmAmountWrapper},To.default.createElement(bn,{className:(0,vs.default)(e==null?void 0:e.confirmAmountLoading,{[e==null?void 0:e.confirmAmountLoadingVisible]:x||p})}),To.default.createElement("div",{className:(0,vs.default)(e==null?void 0:e.confirmAmountContent,{[e==null?void 0:e.confirmAmountContentHidden]:x||p})},b?To.default.createElement(uh,{amount:s,type:u,tokenDetails:_}):To.default.createElement(ph,{isNftOrSft:b,isEgld:h,amount:s,handleReference:m,currentTransaction:o,tokenDetails:_,tokenPrice:N}))))},Th=C(qA,{ssrStyles:()=>Promise.resolve().then(()=>(Ss(),ys)),clientStyles:()=>(Ss(),H(ys)).default});t();t();var Fo=T(require("react"));M();var jA=({transaction:e,styles:o})=>{let{price:n}=va(),r=ff(),s=Zi({gasPerDataByte:String(ir),gasPriceModifier:String(di),gasLimit:e.getGasLimit().valueOf().toString(),gasPrice:e.getGasPrice().valueOf().toString(),data:e.getData().toString(),chainId:e.getChainID().valueOf()}),p=Ke({input:s,showLastNonZeroDecimal:!0}),m=n?Xd({feeLimit:s,egldPriceInUsd:n,hideEqualSign:!0}):null;return Fo.default.createElement("div",{className:o==null?void 0:o.confirmFee},Fo.default.createElement("div",{className:o==null?void 0:o.confirmFeeLabel},"Transaction Fee"),Fo.default.createElement("div",{className:o==null?void 0:o.confirmFeeData},Fo.default.createElement(jt,{className:o==null?void 0:o.confirmFeeDataBalance,"data-testid":"confirmFee",egldIcon:!0,showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:r,amount:p}),m?Fo.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},"(",Fo.default.createElement(jt,{amount:m,displayAsUsd:!0,addEqualSign:!0,className:o==null?void 0:o.confirmFeeDataPrice}),")"):Fo.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},Fo.default.createElement(bn,null))))},yh=C(jA,{ssrStyles:()=>Promise.resolve().then(()=>(bs(),ws)),clientStyles:()=>(bs(),H(ws)).default});t();t();var he=T(require("react")),Dh=require("@fortawesome/free-solid-svg-icons"),Ph=require("@fortawesome/react-fontawesome"),Eh=T(require("bignumber.js"));M();t();t();var Sh=e=>e?e.lastIndexOf(".elrond")>0?e.substring(0,e.lastIndexOf(".")):e:void 0;t();t();var ks=T(require("react")),wh=require("@fortawesome/free-solid-svg-icons"),bh=require("@fortawesome/react-fontawesome"),Ah=T(require("classnames"));var XA=_=>{var l=_,{page:e,text:o,className:n="dapp-explorer-link",children:r,globalStyles:s,customExplorerIcon:p,styles:m}=l,d=Fe(l,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:u}}=Po(),f=o!=null?o:ks.default.createElement(bh.FontAwesomeIcon,{icon:p!=null?p:wh.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),x=Nt({explorerAddress:String(u),to:e});return ks.default.createElement("a",g({href:x,target:"_blank",className:(0,Ah.default)(m==null?void 0:m.link,s==null?void 0:s.ml2,n),rel:"noreferrer"},d),r!=null?r:f)},Ih=C(XA,{ssrStyles:()=>Promise.resolve().then(()=>(Is(),As)),clientStyles:()=>(Is(),H(As)).default});t();t();var de=T(require("react")),Ch=T(require("classnames"));M();var ZA=({text:e,className:o="dapp-trim","data-testid":n="trim-text-component",color:r,styles:s})=>{let[p,m]=(0,de.useState)(0),[d,_]=(0,de.useState)(!1),l=(0,de.useRef)(document==null?void 0:document.createElement("span")),u=(0,de.useRef)(document==null?void 0:document.createElement("span")),f=lf(p,300),x=()=>{if(l.current&&u.current){let N=u.current.offsetWidth-l.current.offsetWidth;_(N>1)}},v=()=>{m(p+1)};return(0,de.useEffect)(()=>(window==null||window.addEventListener("resize",v),()=>{window==null||window.removeEventListener("resize",v)})),(0,de.useEffect)(()=>{x()},[f]),de.default.createElement("span",{ref:l,className:(0,Ch.default)(s==null?void 0:s.trim,r,o,{overflow:d}),"data-testid":n},de.default.createElement("span",{ref:u,className:s==null?void 0:s.hiddenTextRef},e),d?de.default.createElement(de.default.Fragment,null,de.default.createElement("span",{className:s==null?void 0:s.left},de.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),de.default.createElement("span",{className:s==null?void 0:s.ellipsis},Kp),de.default.createElement("span",{className:s==null?void 0:s.right},de.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):de.default.createElement("span",null,e))},Nh=C(ZA,{ssrStyles:()=>Promise.resolve().then(()=>(Ns(),Cs)),clientStyles:()=>(Ns(),H(Cs)).default});var QA=({amount:e,label:o,receiver:n,customExplorerIcon:r,receiverUsername:s,customCopyIcon:p,scamReport:m,styles:d})=>{let _=Hi(n),l=Boolean(_||s),u=new Eh.default(e).isZero(),{data:f,isLoading:x,error:v}=zo(l?null:n),h=s!=null?s:f==null?void 0:f.username,N=h!=null?h:n,b=Boolean(n&&Boolean(h)&&!v),E=u?"To interact with":"To";return he.default.createElement("div",{className:d==null?void 0:d.receiver},he.default.createElement("div",{className:d==null?void 0:d.receiverLabelWrapper},he.default.createElement("div",{className:d==null?void 0:d.receiverLabel},o!=null?o:E),m&&he.default.createElement("div",{className:d==null?void 0:d.receiverLabelScam},he.default.createElement("span",{className:d==null?void 0:d.receiverLabelScamText,"data-testid":"confirmScamReport"},m),he.default.createElement(Ph.FontAwesomeIcon,{icon:Dh.faExclamationTriangle,className:d==null?void 0:d.receiverLabelScamIcon}))),x?he.default.createElement("div",{className:d==null?void 0:d.receiverWrapper},he.default.createElement(bn,{className:d==null?void 0:d.receiverLoading})):he.default.createElement("div",{className:d==null?void 0:d.receiverWrapper,"data-testid":"confirmReceiver"},he.default.createElement(Nh,{text:n,className:d==null?void 0:d.receiverTrim}),b&&!_&&he.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",he.default.createElement(La,{className:d==null?void 0:d.receiverDataIcon}),he.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},Sh(N)),")"),_&&he.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",he.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},"Smart Contract"),")"),he.default.createElement(zt,{text:n,className:d==null?void 0:d.receiverCopy,copyIcon:p}),he.default.createElement(Ih,{page:`/${ve}/${n}`,className:d==null?void 0:d.receiverExternal,customExplorerIcon:r})))},Mh=C(QA,{ssrStyles:()=>Promise.resolve().then(()=>(Ds(),Ls)),clientStyles:()=>(Ds(),H(Ls)).default});var oI=({currentTransaction:e,error:o,signStepInnerClasses:n,globalStyles:r,styles:s})=>{if(!e)return null;let{inputGroupClassName:p,inputLabelClassName:m,inputValueClassName:d,errorClassName:_}=n||{},{tokenId:l,multiTxData:u,receiver:f,amount:x}=e.transactionTokenInfo,v=u?new Rh.Address(f).bech32():e.transaction.getReceiver().toString(),h=e.receiverScamInfo,N=Yg(h,r),b=e.transaction.getData().toString();return Jo.default.createElement("div",{className:s==null?void 0:s.summary},Jo.default.createElement("div",{className:s==null?void 0:s.fields},Jo.default.createElement(Th,{currentTransaction:e}),Jo.default.createElement(Mh,{scamReport:h,receiver:v,amount:x}),Jo.default.createElement(yh,{transaction:e.transaction}),b&&Jo.default.createElement(Kg,{className:p,data:b,highlight:u,innerTransactionDataClasses:{transactionDataInputLabelClassName:m,transactionDataInputValueClassName:d},isScCall:!l,showDataDecode:!0,transactionIndex:e.transactionIndex}),o&&Jo.default.createElement("p",{className:(0,Oh.default)(N.errorMessage,_)},o)))},Fh=C(oI,{ssrStyles:()=>Promise.resolve().then(()=>(Es(),Ps)),clientStyles:()=>(Es(),H(Ps)).default});t();t();var Qo=T(require("react")),Uh=require("@fortawesome/free-solid-svg-icons"),Gh=require("@fortawesome/react-fontawesome"),Kt=T(require("classnames"));var tI=e=>{let{steps:o,size:n="large",type:r="simple",collapsible:s=!1,styles:p}=e,m=o.filter(u=>!u.hidden),d=m.findIndex(u=>u.active),_=n==="large"?650:450,l=33/100*_;return Qo.default.createElement("div",{className:p==null?void 0:p.progressSteps},m.map((u,f)=>Qo.default.createElement("div",{key:`progress-step-${f}`,style:{width:s?"auto":`${100/m.length}%`},className:(0,Kt.default)(p==null?void 0:p.progressStep,{[p==null?void 0:p.left]:r==="detailed"})},Qo.default.createElement("div",{style:{width:s?u.active?l:20:"auto"},className:(0,Kt.default)(p==null?void 0:p.progressStepWrapper,{[p==null?void 0:p.active]:u.active,[p==null?void 0:p.detailed]:r==="detailed",[p==null?void 0:p.completed]:f<d||u.completed,[p==null?void 0:p.collapsible]:s})},Qo.default.createElement("div",{className:(0,Kt.default)(p==null?void 0:p.progressStepIndex,{[p==null?void 0:p.active]:u.active})},f+1,r==="detailed"&&f<d&&Qo.default.createElement(Gh.FontAwesomeIcon,{icon:Uh.faCheck,className:p==null?void 0:p.progressStepCheck})),u.title&&r==="detailed"&&Qo.default.createElement("div",{className:(0,Kt.default)(p==null?void 0:p.progressStepTitle,{[p==null?void 0:p.active]:u.active,[p==null?void 0:p.collapsible]:s})},Qo.default.createElement("div",{className:p==null?void 0:p.progressStepTitleText},u.title))))))},Hh=C(tI,{ssrStyles:()=>Promise.resolve().then(()=>(Ws(),Ms)),clientStyles:()=>(Ws(),H(Ms)).default});t();Q();var aI=e=>{var no;let{allTransactions:o,className:n,currentStep:r,currentTransaction:s,GuardianScreen:p,error:m,globalStyles:d,handleClose:_,handleSubmit:l,isLastTransaction:u,onPrev:f,onSignTransaction:x,signStepInnerClasses:v,styles:h,title:N,waitingForDevice:b}=e,[E,R]=(0,_e.useState)(!1),[O,P]=(0,_e.useState)({});if(!s)return null;let X=`${s.transaction.getNonce().valueOf().toString()}_${s.transactionTokenInfo.multiTxData}_${s.transactionIndex}`;(0,_e.useEffect)(()=>{let le=Object.keys(O).includes(X),xo=Object.values(O).includes(r);le||xo||P(yo=>I(g({},yo),{[X]:r}))},[X,r]);let oe=s.transaction.getData().toString(),{buttonsWrapperClassName:W,buttonClassName:G}=v||{},{type:F,multiTxData:$}=s.transactionTokenInfo,Y=r===0,q=le=>{le.preventDefault(),Y?_():f()},ne=u&&!b,pe=()=>S(void 0,null,function*(){if(yield x(),ne&&p)return R(!0);ne&&l&&l()}),Se=F&&$&&!oe.endsWith($),Z="Sign & Continue";Z=b?"Check your Ledger":Z,Z=ne?"Sign & Submit":Z,Z=Se?"Continue":Z;let me={currentTransaction:s,error:m,allTransactions:o,currentStep:r,isGuarded:Boolean(p),signStepInnerClasses:v},Re=()=>{R(!1)},oo=o.length>1?"Sign Transactions":"Sign Transaction",Oe=o.length>1?"Confirm Transactions":"Confirm Transaction",te=o.length>1?`Signing Transaction ${r+1} of ${o.length}`:N||"Sign Transaction",fe=p&&E,B=fe?"Verify Guardian":te,re=[{title:oo,active:!E},{title:Oe,active:E,hidden:!me.isGuarded}],Me=O[X]===r;return _e.default.createElement("div",{className:(0,kn.default)(h==null?void 0:h.modalLayoutContent,h==null?void 0:h.spaced,n,{[(no=h==null?void 0:h.guarded)!=null?no:""]:me.isGuarded})},fe&&_e.default.createElement("div",{onClick:Re,className:(0,kn.default)(h==null?void 0:h.modalLayoutHeadingIcon,h==null?void 0:h.back)},_e.default.createElement(Rs.FontAwesomeIcon,{icon:Da.faArrowLeft})),_e.default.createElement("div",{onClick:q,className:(0,kn.default)(h==null?void 0:h.modalLayoutHeadingIcon,h==null?void 0:h.close)},_e.default.createElement(Rs.FontAwesomeIcon,{icon:Da.faTimes})),me.isGuarded&&_e.default.createElement(Hh,{steps:re,type:"detailed",size:"small"}),_e.default.createElement("div",{className:h==null?void 0:h.title,"data-testid":"signStepTitle"},B||"Confirm on Ledger"),fe?_e.default.createElement(p,I(g({},e),{onPrev:Re,guardianFormDescription:"Enter the code from your Authenticator app to verify this transaction."})):_e.default.createElement(_e.default.Fragment,null,_e.default.createElement(Fh,g({},me)),_e.default.createElement("div",{className:(0,kn.default)(h==null?void 0:h.signButtons,W)},_e.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:q,className:(0,kn.default)(h==null?void 0:h.signButtonCancel,G)},r===0?"Cancel":"Back"),_e.default.createElement("button",{type:"button",className:(0,kn.default)(d==null?void 0:d.btnPrimary,h==null?void 0:h.signButtonSubmit,G),id:"signBtn","data-testid":"signBtn",onClick:pe,disabled:b||!Me},Me?Z:"Loading..."))))},$h=C(aI,{ssrStyles:()=>Promise.resolve().then(()=>(Yt(),Xt)),clientStyles:()=>(Yt(),H(Xt)).default});var iI=({handleClose:e,handleSubmit:o,error:n,className:r="dapp-device-modal",verifyReceiverScam:s=!0,GuardianScreen:p,title:m="Confirm transaction",signStepInnerClasses:d,globalStyles:_,styles:l})=>{let{address:u}=Qe(),{onSignTransaction:f,onPrev:x,allTransactions:v,waitingForDevice:h,onAbort:N,isLastTransaction:b,signedTransactions:E,setSignedTransactions:R,currentStep:O,callbackRoute:P,currentTransaction:j}=Lc({onCancel:e,verifyReceiverScam:s,hasGuardianScreen:Boolean(p)}),X=j==null,oe={wrapper:(0,Os.default)(l==null?void 0:l.modalContainer,l==null?void 0:l.walletConnect,r),container:(0,Os.default)(_==null?void 0:_.card,_==null?void 0:_.container),cardBody:_==null?void 0:_.cardBody};return Zt.default.createElement(Xo,{onClose:e,modalConfig:{modalDialogClassName:oe.wrapper},visible:!0},Zt.default.createElement("div",{className:oe.cardBody},X?Zt.default.createElement(ag,null):Zt.default.createElement($h,{address:u,allTransactions:v,callbackRoute:P,currentStep:O,currentTransaction:j,error:n,GuardianScreen:p,handleClose:N,handleSubmit:o,isLastTransaction:b,onPrev:x,onSignTransaction:f,setSignedTransactions:R,signStepInnerClasses:d,signedTransactions:E,title:m,waitingForDevice:h})))},Pa=C(iI,{ssrStyles:()=>Promise.resolve().then(()=>(Yt(),Xt)),clientStyles:()=>(Yt(),H(Xt)).default});t();var qh=T(require("react"));ri();var zh=e=>{let o=I(g({},e),{description:`You need at least MultiversX app version ${_t}. Update MultiversX app to continue`,title:"Signing transactions unavailable"});return qh.default.createElement(go,g({},o))};var jh=e=>{var m;let{ledgerAccount:o,account:{isGuarded:n}}=ga(),{loginMethod:r}=Bt(),{ledgerWithGuardians:s}=Kd((m=o==null?void 0:o.version)!=null?m:""),p=r==="ledger"?s:!0;return n&&!p?Fs.default.createElement(zh,g({},e)):Fs.default.createElement(Pa,I(g({},e),{title:e.title||"Confirm on Ledger",className:e.className||"dapp-ledger-modal"}))};t();t();var Kh=T(require("react"));var Xh=e=>Kh.default.createElement(Pa,I(g({},e),{title:e.title||"Confirm on Metamask"}));t();t();var Ea=T(require("react")),Zh=require("@fortawesome/free-solid-svg-icons"),Gs=T(require("classnames"));M();var sI=({handleClose:e,error:o,transactions:n,sessionId:r,className:s="dapp-opera-modal",modalContentClassName:p,globalStyles:m,styles:d})=>{let _=jo(),l={wrapper:(0,Gs.default)(d==null?void 0:d.modalContainer,d==null?void 0:d.opera,s),icon:m==null?void 0:m.textWhite,closeBtn:(0,Gs.default)(m==null?void 0:m.btn,m==null?void 0:m.btnCloseLink,m==null?void 0:m.btnDark,m==null?void 0:m.textWhite,m==null?void 0:m.mt2)},u=o||(n&&n.length>1?"Check your Opera Crypto Wallet to sign the transactions":"Check your Opera Crypto Wallet to sign the transaction"),f=x=>{x.preventDefault(),e(),_(r)};return Ea.default.createElement(Xo,{onClose:e,modalConfig:{modalDialogClassName:l.wrapper},visible:!0},Ea.default.createElement(Zo,{icon:o?Zh.faTimes:null,iconClass:l.icon,className:p,iconBgClass:o?m==null?void 0:m.bgDanger:m==null?void 0:m.bgWarning,iconSize:"3x",title:"Confirm on Opera Crypto Wallet",description:u,action:Ea.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:f,className:l.closeBtn},"Close")}))},Jh=C(sI,{ssrStyles:()=>Promise.resolve().then(()=>(Us(),Bs)),clientStyles:()=>(Us(),H(Bs)).default});t();t();var Qh=T(require("react"));var eT=e=>{var r;let o=e.error?e.error:((r=e.transactions)==null?void 0:r.length)>1?"Please signin with your passkey in order to sign the transactions":"Please signin with your passkey in order to sign the transaction",n=I(g({},e),{description:o,title:"Confirm by signing in with passkey"});return Qh.default.createElement(go,g({},n))};t();t();var en=T(require("react")),iT=require("@fortawesome/free-solid-svg-icons"),qs=T(require("classnames"));M();t();Q();function oT(e){let{provider:o}=ue();function n(){return S(this,null,function*(){!o||Je("walletconnectv2")&&(yield r())})}function r(){return S(this,null,function*(){var s;try{if(!o||!Je("walletconnectv2"))return;yield(s=o==null?void 0:o.sendCustomRequest)==null?void 0:s.call(o,{request:{method:nc.CANCEL_ACTION,params:{action:e}}})}catch(p){console.warn("WalletConnectV2: Unable to send cancelAction event",p)}})}return{cancelActionV2:r,cancelWalletConnectAction:n}}J();t();t();var Ee=T(require("react")),Nn=require("@fortawesome/free-solid-svg-icons"),Cn=T(require("classnames"));J();t();var Ma=T(require("react")),nT=require("@fortawesome/react-fontawesome"),Wa=T(require("classnames"));var pI=({icon:e,iconClassName:o,description:n,details:r,className:s,globalStyles:p})=>{let m=(0,Wa.default)(p==null?void 0:p.dFlex,p==null?void 0:p.flexColumn,p==null?void 0:p.alignItemsCenter,p==null?void 0:p.justifyContentCenter,p==null?void 0:p.my3,s),d=(0,Wa.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter,p==null?void 0:p.mr2);return Ma.default.createElement("div",{className:m},Ma.default.createElement("div",{className:d},e&&Ma.default.createElement(nT.FontAwesomeIcon,{icon:e,className:(0,Wa.default)(p==null?void 0:p.mr2,o)}),n),r)},Jt=C(pI,{});t();var Qt=T(require("react")),tT=T(require("classnames"));var mI=({globalStyles:e})=>Qt.default.createElement("div",{className:(0,tT.default)(e==null?void 0:e.dFlex,e==null?void 0:e.flexColumn,e==null?void 0:e.alignItemsCenter,e==null?void 0:e.mt2)},Qt.default.createElement("small",{className:e==null?void 0:e.textSecondary},"Make sure that the phone is unlocked and the app is opened."),Qt.default.createElement("small",null,"Hint:"," ",Qt.default.createElement("span",{className:e==null?void 0:e.textSecondary},"Battery saving mode might have an effect on the connection quality."))),Hs=C(mI,{});var Ra=1e4;var dI=({description:e,className:o,globalStyles:n})=>{let{provider:r}=ue(),s=De(r),[p,m]=(0,Ee.useState)("pending"),[d,_]=(0,Ee.useState)(Ra),l=s==="walletconnectv2",u=()=>S(void 0,null,function*(){var x;let f=Symbol();try{(yield _l((x=r==null?void 0:r.ping)==null?void 0:x.call(r),Ra,f))?(m("success"),_(h=>h*1.5)):(m("error"),_(Ra))}catch(v){m(v===f?"waiting":"error"),_(Ra)}});if((0,Ee.useEffect)(()=>{u();let f=setInterval(()=>S(void 0,null,function*(){yield u()}),d);return()=>clearInterval(f)},[]),!l)return null;switch(p){case"pending":return Ee.default.createElement(Jt,{className:o,icon:Nn.faCircleNotch,iconClassName:(0,Cn.default)(n==null?void 0:n.textPrimary,"fa-spin","slow-spin"),description:"Checking the connection...",details:Ee.default.createElement("div",{className:(0,Cn.default)(n==null?void 0:n.mt3)},e)});case"waiting":return Ee.default.createElement(Jt,{className:o,icon:Nn.faCircleNotch,iconClassName:(0,Cn.default)(n==null?void 0:n.textPrimary,"fa-spin","slow-spin"),description:"Checking the connection...",details:Ee.default.createElement(Hs,null)});case"success":return Ee.default.createElement(Jt,{className:o,icon:Nn.faCheckCircle,iconClassName:(0,Cn.default)(n==null?void 0:n.textSuccess),description:"Connected",details:Ee.default.createElement("div",{className:(0,Cn.default)(n==null?void 0:n.mt3)},e)});default:case"error":return Ee.default.createElement(Jt,{className:o,icon:Nn.faTimes,iconClassName:(0,Cn.default)(n==null?void 0:n.textDanger),description:"Unable to establish a connection with the device.",details:Ee.default.createElement(Hs,null)})}},rT=C(dI,{});var lI=({error:e,handleClose:o,transactions:n,sessionId:r,className:s="dapp-wallet-connect-modal",modalContentClassName:p,globalStyles:m,styles:d})=>{let _=jo(),l={wrapper:(0,qs.default)(d==null?void 0:d.modalContainer,d==null?void 0:d.walletConnect,s),icon:m==null?void 0:m.textWhite,closeBtn:(0,qs.default)(m==null?void 0:m.btn,m==null?void 0:m.btnCloseLink,m==null?void 0:m.btnDark,m==null?void 0:m.textWhite,m==null?void 0:m.mt2)},{provider:u}=ue(),f=De(u),x=n&&(n==null?void 0:n.length)>1,v=f==="walletconnectv2",h=`Check your phone to sign the transaction${x?"s":""}`,{cancelWalletConnectAction:N}=oT(zp),b=()=>S(void 0,null,function*(){_(r),yield N(),o()}),E=()=>en.default.createElement(en.default.Fragment,null,v?en.default.createElement(rT,{description:h}):h);return en.default.createElement(Xo,{onClose:o,modalConfig:{modalDialogClassName:l.wrapper},visible:!0},en.default.createElement(Zo,{icon:e?iT.faTimes:null,iconClass:l.icon,className:p,iconBgClass:e?m==null?void 0:m.bgDanger:m==null?void 0:m.bgWarning,iconSize:"3x",title:"Confirm on the xPortal App",description:e||en.default.createElement(E,null),action:en.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:b,className:l.closeBtn},"Cancel")}))},cT=C(lI,{ssrStyles:()=>Promise.resolve().then(()=>($s(),Vs)),clientStyles:()=>($s(),H(Vs)).default});var uI=({className:e,CustomConfirmScreens:o,GuardianScreen:n,verifyReceiverScam:r=!0})=>{var d,_,l,u,f,x,v,h,N;let{loginMethod:s}=Bt(),p={Ledger:(d=o==null?void 0:o.Ledger)!=null?d:jh,WalletConnect:(_=o==null?void 0:o.WalletConnect)!=null?_:cT,Extension:(l=o==null?void 0:o.Extension)!=null?l:Jf,Passkey:(u=o==null?void 0:o.Passkey)!=null?u:eT,Metamask:(f=o==null?void 0:o.Metamask)!=null?f:Xh,Iframe:(x=o==null?void 0:o.Iframe)!=null?x:og,Opera:(v=o==null?void 0:o.Opera)!=null?v:Jh,CrossWindow:(h=o==null?void 0:o.CrossWindow)!=null?h:Yf,Wallet:()=>ct.default.createElement(ct.default.Fragment,null),Extra:(N=o==null?void 0:o.Extra)!=null?N:Qf},m=(0,ct.useCallback)(({Screen:b,isDevice:E})=>ct.default.createElement(E?Vf:Hf,{Screen:b,GuardianScreen:n,verifyReceiverScam:r,className:e}),[r,e]);switch(s){case"ledger":return m({Screen:p.Ledger,isDevice:!0});case"walletconnectv2":return m({Screen:p.WalletConnect});case"extension":return m({Screen:p.Extension});case"passkey":return m({Screen:p.Passkey,isDevice:!0});case"metamask":return m({Screen:p.Metamask,isDevice:!0});case"opera":return m({Screen:p.Opera});case"crossWindow":return m({Screen:p.CrossWindow});case"iframe":return m({Screen:p.Iframe});case"wallet":return m({Screen:p.Wallet});case"extra":return m({Screen:p.Extra,isDevice:!0});default:return null}};0&&(module.exports={SignTransactionsModals});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
