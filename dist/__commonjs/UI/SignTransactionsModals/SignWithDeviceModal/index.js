"use strict";var Sg=Object.create;var $n=Object.defineProperty,bg=Object.defineProperties,vg=Object.getOwnPropertyDescriptor,wg=Object.getOwnPropertyDescriptors,Ag=Object.getOwnPropertyNames,Pt=Object.getOwnPropertySymbols,Ig=Object.getPrototypeOf,Kr=Object.prototype.hasOwnProperty,Hc=Object.prototype.propertyIsEnumerable;var Gc=(e,o,t)=>o in e?$n(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,T=(e,o)=>{for(var t in o||(o={}))Kr.call(o,t)&&Gc(e,t,o[t]);if(Pt)for(var t of Pt(o))Hc.call(o,t)&&Gc(e,t,o[t]);return e},k=(e,o)=>bg(e,wg(o));var Ne=(e,o)=>{var t={};for(var r in e)Kr.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Pt)for(var r of Pt(e))o.indexOf(r)<0&&Hc.call(e,r)&&(t[r]=e[r]);return t};var b=(e,o)=>()=>(e&&(o=e(e=0)),o);var w=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),V=(e,o)=>{for(var t in o)$n(e,t,{get:o[t],enumerable:!0})},Vc=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of Ag(o))!Kr.call(e,s)&&s!==t&&$n(e,s,{get:()=>o[s],enumerable:!(r=vg(o,s))||r.enumerable});return e};var S=(e,o,t)=>(t=e!=null?Sg(Ig(e)):{},Vc(o||!e||!e.__esModule?$n(t,"default",{value:e,enumerable:!0}):t,e)),U=e=>Vc($n({},"__esModule",{value:!0}),e);var y=(e,o,t)=>new Promise((r,s)=>{var p=l=>{try{d(t.next(l))}catch(_){s(_)}},m=l=>{try{d(t.throw(l))}catch(_){s(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var zc=w(Et=>{"use strict";n();Et.byteLength=Lg;Et.toByteArray=Cg;Et.fromByteArray=Eg;var He=[],ve=[],kg=typeof Uint8Array!="undefined"?Uint8Array:Array,Xr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Bo=0,$c=Xr.length;Bo<$c;++Bo)He[Bo]=Xr[Bo],ve[Xr.charCodeAt(Bo)]=Bo;var Bo,$c;ve["-".charCodeAt(0)]=62;ve["_".charCodeAt(0)]=63;function qc(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function Lg(e){var o=qc(e),t=o[0],r=o[1];return(t+r)*3/4-r}function Dg(e,o,t){return(o+t)*3/4-t}function Cg(e){var o,t=qc(e),r=t[0],s=t[1],p=new kg(Dg(e,r,s)),m=0,d=s>0?r-4:r,l;for(l=0;l<d;l+=4)o=ve[e.charCodeAt(l)]<<18|ve[e.charCodeAt(l+1)]<<12|ve[e.charCodeAt(l+2)]<<6|ve[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return s===2&&(o=ve[e.charCodeAt(l)]<<2|ve[e.charCodeAt(l+1)]>>4,p[m++]=o&255),s===1&&(o=ve[e.charCodeAt(l)]<<10|ve[e.charCodeAt(l+1)]<<4|ve[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Ng(e){return He[e>>18&63]+He[e>>12&63]+He[e>>6&63]+He[e&63]}function Pg(e,o,t){for(var r,s=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),s.push(Ng(r));return s.join("")}function Eg(e){for(var o,t=e.length,r=t%3,s=[],p=16383,m=0,d=t-r;m<d;m+=p)s.push(Pg(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],s.push(He[o>>2]+He[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],s.push(He[o>>10]+He[o>>4&63]+He[o<<2&63]+"=")),s.join("")}});var jc=w(Yr=>{n();Yr.read=function(e,o,t,r,s){var p,m,d=s*8-r-1,l=(1<<d)-1,_=l>>1,u=-7,f=t?s-1:0,x=t?-1:1,v=e[o+f];for(f+=x,p=v&(1<<-u)-1,v>>=-u,u+=d;u>0;p=p*256+e[o+f],f+=x,u-=8);for(m=p&(1<<-u)-1,p>>=-u,u+=r;u>0;m=m*256+e[o+f],f+=x,u-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(v?-1:1)*m*Math.pow(2,p-r)};Yr.write=function(e,o,t,r,s,p){var m,d,l,_=p*8-s-1,u=(1<<_)-1,f=u>>1,x=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=r?0:p-1,h=r?1:-1,N=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=u):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+f>=1?o+=x/l:o+=x*Math.pow(2,1-f),o*l>=2&&(m++,l/=2),m+f>=u?(d=0,m=u):m+f>=1?(d=(o*l-1)*Math.pow(2,s),m=m+f):(d=o*Math.pow(2,f-1)*Math.pow(2,s),m=0));s>=8;e[t+v]=d&255,v+=h,d/=256,s-=8);for(m=m<<s|d,_+=s;_>0;e[t+v]=m&255,v+=h,m/=256,_-=8);e[t+v-h]|=N*128}});var is=w(ln=>{"use strict";n();var Zr=zc(),_n=jc(),Kc=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ln.Buffer=g;ln.SlowBuffer=Bg;ln.INSPECT_MAX_BYTES=50;var Rt=2147483647;ln.kMaxLength=Rt;g.TYPED_ARRAY_SUPPORT=Rg();!g.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Rg(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.buffer}});Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.byteOffset}});function no(e){if(e>Rt)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,g.prototype),o}function g(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return oa(e)}return Zc(e,o,t)}g.poolSize=8192;function Zc(e,o,t){if(typeof e=="string")return Wg(e,o);if(ArrayBuffer.isView(e))return Og(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ve(e,ArrayBuffer)||e&&Ve(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ve(e,SharedArrayBuffer)||e&&Ve(e.buffer,SharedArrayBuffer)))return Qr(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return g.from(r,o,t);var s=Fg(e);if(s)return s;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return g.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}g.from=function(e,o,t){return Zc(e,o,t)};Object.setPrototypeOf(g.prototype,Uint8Array.prototype);Object.setPrototypeOf(g,Uint8Array);function Jc(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Mg(e,o,t){return Jc(e),e<=0?no(e):o!==void 0?typeof t=="string"?no(e).fill(o,t):no(e).fill(o):no(e)}g.alloc=function(e,o,t){return Mg(e,o,t)};function oa(e){return Jc(e),no(e<0?0:na(e)|0)}g.allocUnsafe=function(e){return oa(e)};g.allocUnsafeSlow=function(e){return oa(e)};function Wg(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!g.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Qc(e,o)|0,r=no(t),s=r.write(e,o);return s!==t&&(r=r.slice(0,s)),r}function Jr(e){for(var o=e.length<0?0:na(e.length)|0,t=no(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function Og(e){if(Ve(e,Uint8Array)){var o=new Uint8Array(e);return Qr(o.buffer,o.byteOffset,o.byteLength)}return Jr(e)}function Qr(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,g.prototype),r}function Fg(e){if(g.isBuffer(e)){var o=na(e.length)|0,t=no(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||ta(e.length)?no(0):Jr(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Jr(e.data)}function na(e){if(e>=Rt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Rt.toString(16)+" bytes");return e|0}function Bg(e){return+e!=e&&(e=0),g.alloc(+e)}g.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==g.prototype};g.compare=function(o,t){if(Ve(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),Ve(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(o)||!g.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,s=t.length,p=0,m=Math.min(r,s);p<m;++p)if(o[p]!==t[p]){r=o[p],s=t[p];break}return r<s?-1:s<r?1:0};g.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};g.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return g.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var s=g.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Ve(m,Uint8Array))p+m.length>s.length?g.from(m).copy(s,p):Uint8Array.prototype.set.call(s,m,p);else if(g.isBuffer(m))m.copy(s,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return s};function Qc(e,o){if(g.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ve(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var s=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ea(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return as(e).length;default:if(s)return r?-1:ea(e).length;o=(""+o).toLowerCase(),s=!0}}g.byteLength=Qc;function Ug(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Yg(this,o,t);case"utf8":case"utf-8":return os(this,o,t);case"ascii":return Kg(this,o,t);case"latin1":case"binary":return Xg(this,o,t);case"base64":return zg(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Zg(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}g.prototype._isBuffer=!0;function Uo(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}g.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Uo(this,t,t+1);return this};g.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Uo(this,t,t+3),Uo(this,t+1,t+2);return this};g.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Uo(this,t,t+7),Uo(this,t+1,t+6),Uo(this,t+2,t+5),Uo(this,t+3,t+4);return this};g.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?os(this,0,o):Ug.apply(this,arguments)};g.prototype.toLocaleString=g.prototype.toString;g.prototype.equals=function(o){if(!g.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:g.compare(this,o)===0};g.prototype.inspect=function(){var o="",t=ln.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Kc&&(g.prototype[Kc]=g.prototype.inspect);g.prototype.compare=function(o,t,r,s,p){if(Ve(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),!g.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),s===void 0&&(s=0),p===void 0&&(p=this.length),t<0||r>o.length||s<0||p>this.length)throw new RangeError("out of range index");if(s>=p&&t>=r)return 0;if(s>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,s>>>=0,p>>>=0,this===o)return 0;for(var m=p-s,d=r-t,l=Math.min(m,d),_=this.slice(s,p),u=o.slice(t,r),f=0;f<l;++f)if(_[f]!==u[f]){m=_[f],d=u[f];break}return m<d?-1:d<m?1:0};function es(e,o,t,r,s){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,ta(t)&&(t=s?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(s)return-1;t=e.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof o=="string"&&(o=g.from(o,r)),g.isBuffer(o))return o.length===0?-1:Xc(e,o,t,r,s);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Xc(e,[o],t,r,s);throw new TypeError("val must be string, number or Buffer")}function Xc(e,o,t,r,s){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(v,h){return p===1?v[h]:v.readUInt16BE(h*p)}var _;if(s){var u=-1;for(_=t;_<m;_++)if(l(e,_)===l(o,u===-1?0:_-u)){if(u===-1&&(u=_),_-u+1===d)return u*p}else u!==-1&&(_-=_-u),u=-1}else for(t+d>m&&(t=m-d),_=t;_>=0;_--){for(var f=!0,x=0;x<d;x++)if(l(e,_+x)!==l(o,x)){f=!1;break}if(f)return _}return-1}g.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};g.prototype.indexOf=function(o,t,r){return es(this,o,t,r,!0)};g.prototype.lastIndexOf=function(o,t,r){return es(this,o,t,r,!1)};function Gg(e,o,t,r){t=Number(t)||0;var s=e.length-t;r?(r=Number(r),r>s&&(r=s)):r=s;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(ta(d))return m;e[t+m]=d}return m}function Hg(e,o,t,r){return Mt(ea(o,e.length-t),e,t,r)}function Vg(e,o,t,r){return Mt(eh(o),e,t,r)}function $g(e,o,t,r){return Mt(as(o),e,t,r)}function qg(e,o,t,r){return Mt(oh(o,e.length-t),e,t,r)}g.prototype.write=function(o,t,r,s){if(t===void 0)s="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")s=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,s===void 0&&(s="utf8")):(s=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var m=!1;;)switch(s){case"hex":return Gg(this,o,t,r);case"utf8":case"utf-8":return Hg(this,o,t,r);case"ascii":case"latin1":case"binary":return Vg(this,o,t,r);case"base64":return $g(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qg(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),m=!0}};g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function zg(e,o,t){return o===0&&t===e.length?Zr.fromByteArray(e):Zr.fromByteArray(e.slice(o,t))}function os(e,o,t){t=Math.min(e.length,t);for(var r=[],s=o;s<t;){var p=e[s],m=null,d=p>239?4:p>223?3:p>191?2:1;if(s+d<=t){var l,_,u,f;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[s+1],(l&192)===128&&(f=(p&31)<<6|l&63,f>127&&(m=f));break;case 3:l=e[s+1],_=e[s+2],(l&192)===128&&(_&192)===128&&(f=(p&15)<<12|(l&63)<<6|_&63,f>2047&&(f<55296||f>57343)&&(m=f));break;case 4:l=e[s+1],_=e[s+2],u=e[s+3],(l&192)===128&&(_&192)===128&&(u&192)===128&&(f=(p&15)<<18|(l&63)<<12|(_&63)<<6|u&63,f>65535&&f<1114112&&(m=f))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),s+=d}return jg(r)}var Yc=4096;function jg(e){var o=e.length;if(o<=Yc)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=Yc));return t}function Kg(e,o,t){var r="";t=Math.min(e.length,t);for(var s=o;s<t;++s)r+=String.fromCharCode(e[s]&127);return r}function Xg(e,o,t){var r="";t=Math.min(e.length,t);for(var s=o;s<t;++s)r+=String.fromCharCode(e[s]);return r}function Yg(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var s="",p=o;p<t;++p)s+=nh[e[p]];return s}function Zg(e,o,t){for(var r=e.slice(o,t),s="",p=0;p<r.length-1;p+=2)s+=String.fromCharCode(r[p]+r[p+1]*256);return s}g.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var s=this.subarray(o,t);return Object.setPrototypeOf(s,g.prototype),s};function te(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||te(o,t,this.length);for(var s=this[o],p=1,m=0;++m<t&&(p*=256);)s+=this[o+m]*p;return s};g.prototype.readUintBE=g.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||te(o,t,this.length);for(var s=this[o+--t],p=1;t>0&&(p*=256);)s+=this[o+--t]*p;return s};g.prototype.readUint8=g.prototype.readUInt8=function(o,t){return o=o>>>0,t||te(o,1,this.length),this[o]};g.prototype.readUint16LE=g.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||te(o,2,this.length),this[o]|this[o+1]<<8};g.prototype.readUint16BE=g.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||te(o,2,this.length),this[o]<<8|this[o+1]};g.prototype.readUint32LE=g.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||te(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};g.prototype.readUint32BE=g.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||te(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};g.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||te(o,t,this.length);for(var s=this[o],p=1,m=0;++m<t&&(p*=256);)s+=this[o+m]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};g.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||te(o,t,this.length);for(var s=t,p=1,m=this[o+--s];s>0&&(p*=256);)m+=this[o+--s]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};g.prototype.readInt8=function(o,t){return o=o>>>0,t||te(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};g.prototype.readInt16LE=function(o,t){o=o>>>0,t||te(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};g.prototype.readInt16BE=function(o,t){o=o>>>0,t||te(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};g.prototype.readInt32LE=function(o,t){return o=o>>>0,t||te(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};g.prototype.readInt32BE=function(o,t){return o=o>>>0,t||te(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};g.prototype.readFloatLE=function(o,t){return o=o>>>0,t||te(o,4,this.length),_n.read(this,o,!0,23,4)};g.prototype.readFloatBE=function(o,t){return o=o>>>0,t||te(o,4,this.length),_n.read(this,o,!1,23,4)};g.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||te(o,8,this.length),_n.read(this,o,!0,52,8)};g.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||te(o,8,this.length),_n.read(this,o,!1,52,8)};function fe(e,o,t,r,s,p){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>s||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(o,t,r,s){if(o=+o,t=t>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;fe(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};g.prototype.writeUintBE=g.prototype.writeUIntBE=function(o,t,r,s){if(o=+o,t=t>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;fe(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};g.prototype.writeUint8=g.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,1,255,0),this[t]=o&255,t+1};g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};g.prototype.writeIntLE=function(o,t,r,s){if(o=+o,t=t>>>0,!s){var p=Math.pow(2,8*r-1);fe(this,o,t,r,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};g.prototype.writeIntBE=function(o,t,r,s){if(o=+o,t=t>>>0,!s){var p=Math.pow(2,8*r-1);fe(this,o,t,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};g.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};g.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};g.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};g.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};g.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||fe(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function ns(e,o,t,r,s,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ts(e,o,t,r,s){return o=+o,t=t>>>0,s||ns(e,o,t,4,34028234663852886e22,-34028234663852886e22),_n.write(e,o,t,r,23,4),t+4}g.prototype.writeFloatLE=function(o,t,r){return ts(this,o,t,!0,r)};g.prototype.writeFloatBE=function(o,t,r){return ts(this,o,t,!1,r)};function rs(e,o,t,r,s){return o=+o,t=t>>>0,s||ns(e,o,t,8,17976931348623157e292,-17976931348623157e292),_n.write(e,o,t,r,52,8),t+8}g.prototype.writeDoubleLE=function(o,t,r){return rs(this,o,t,!0,r)};g.prototype.writeDoubleBE=function(o,t,r){return rs(this,o,t,!1,r)};g.prototype.copy=function(o,t,r,s){if(!g.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!s&&s!==0&&(s=this.length),t>=o.length&&(t=o.length),t||(t=0),s>0&&s<r&&(s=r),s===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),o.length-t<s-r&&(s=o.length-t+r);var p=s-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,s):Uint8Array.prototype.set.call(o,this.subarray(r,s),t),p};g.prototype.fill=function(o,t,r,s){if(typeof o=="string"){if(typeof t=="string"?(s=t,t=0,r=this.length):typeof r=="string"&&(s=r,r=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!g.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(o.length===1){var p=o.charCodeAt(0);(s==="utf8"&&p<128||s==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=g.isBuffer(o)?o:g.from(o,s),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%l]}return this};var Jg=/[^+/0-9A-Za-z-_]/g;function Qg(e){if(e=e.split("=")[0],e=e.trim().replace(Jg,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ea(e,o){o=o||1/0;for(var t,r=e.length,s=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!s){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}s=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(o-=3)>-1&&p.push(239,191,189);if(s=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function eh(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function oh(e,o){for(var t,r,s,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,s=t%256,p.push(s),p.push(r);return p}function as(e){return Zr.toByteArray(Qg(e))}function Mt(e,o,t,r){for(var s=0;s<r&&!(s+t>=o.length||s>=e.length);++s)o[s+t]=e[s];return s}function Ve(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function ta(e){return e!==e}var nh=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,s=0;s<16;++s)o[r+s]=e[t]+e[s];return o}()});var ds=w((Sw,ms)=>{n();var Z=ms.exports={},$e,qe;function ra(){throw new Error("setTimeout has not been defined")}function aa(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?$e=setTimeout:$e=ra}catch(e){$e=ra}try{typeof clearTimeout=="function"?qe=clearTimeout:qe=aa}catch(e){qe=aa}})();function cs(e){if($e===setTimeout)return setTimeout(e,0);if(($e===ra||!$e)&&setTimeout)return $e=setTimeout,setTimeout(e,0);try{return $e(e,0)}catch(o){try{return $e.call(null,e,0)}catch(t){return $e.call(this,e,0)}}}function th(e){if(qe===clearTimeout)return clearTimeout(e);if((qe===aa||!qe)&&clearTimeout)return qe=clearTimeout,clearTimeout(e);try{return qe(e)}catch(o){try{return qe.call(null,e)}catch(t){return qe.call(this,e)}}}var to=[],un=!1,Go,Wt=-1;function rh(){!un||!Go||(un=!1,Go.length?to=Go.concat(to):Wt=-1,to.length&&ss())}function ss(){if(!un){var e=cs(rh);un=!0;for(var o=to.length;o;){for(Go=to,to=[];++Wt<o;)Go&&Go[Wt].run();Wt=-1,o=to.length}Go=null,un=!1,th(e)}}Z.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];to.push(new ps(e,o)),to.length===1&&!un&&cs(ss)};function ps(e,o){this.fun=e,this.array=o}ps.prototype.run=function(){this.fun.apply(null,this.array)};Z.title="browser";Z.browser=!0;Z.env={};Z.argv=[];Z.version="";Z.versions={};function ro(){}Z.on=ro;Z.addListener=ro;Z.once=ro;Z.off=ro;Z.removeListener=ro;Z.removeAllListeners=ro;Z.emit=ro;Z.prependListener=ro;Z.prependOnceListener=ro;Z.listeners=function(e){return[]};Z.binding=function(e){throw new Error("process.binding is not supported")};Z.cwd=function(){return"/"};Z.chdir=function(e){throw new Error("process.chdir is not supported")};Z.umask=function(){return 0}});var a,c,ah,i,n=b(()=>{a=S(is()),c=S(ds()),ah=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=ah});var Pe,Ho=b(()=>{"use strict";n();Pe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var ia={};V(ia,{css:()=>ls,default:()=>ih});var ls,ih,ca=b(()=>{"use strict";n();ls=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ls));ih={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var pa=b(()=>{"use strict";n()});var zn,ma,ze=b(()=>{"use strict";n();zn="Transaction canceled",ma="You cannot sign transactions from a different account"});var gs=b(()=>{"use strict";n()});var da,hs=b(()=>{"use strict";n();da=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(da||{})});var Ts=b(()=>{"use strict";n()});var _a,la=b(()=>{"use strict";n();_a={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var xs=b(()=>{"use strict";n()});var ua,fa=b(()=>{"use strict";n();ua=(s=>(s.signature="signature",s.sessionId="sessionId",s.status="status",s.address="address",s))(ua||{})});var ys=b(()=>{"use strict";n()});var Ss=b(()=>{"use strict";n()});var we,fn,vo=b(()=>{"use strict";n();we=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),fn=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var bs,Gw,vs,Hw,z=b(()=>{"use strict";n();vo();bs=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(bs||{}),Gw=T(T({},fn.WindowProviderRequestEnums),bs),vs=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(vs||{}),Hw=T(T({},fn.WindowProviderResponseEnums),vs)});var ws=b(()=>{"use strict";n()});var As=b(()=>{"use strict";n()});var je,ge=b(()=>{"use strict";n();je=(s=>(s.raw="raw",s.text="text",s.decimal="decimal",s.smart="smart",s))(je||{})});var Is=b(()=>{"use strict";n()});var ks=b(()=>{"use strict";n()});var Ls=b(()=>{"use strict";n()});var j=b(()=>{"use strict";n();fa();ys();Ss();z();ws();As();ge();Is();ks();Ls()});var Vo,Ds,aA,Cs,iA,Ns,cA,sA,Ps,gn=b(()=>{"use strict";n();j();Vo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ds,egldLabel:aA}=Vo["devnet"],{chainId:Cs,egldLabel:iA}=Vo["testnet"],{chainId:Ns,egldLabel:cA}=Vo["mainnet"],sA={["devnet"]:Ds,["testnet"]:Cs,["mainnet"]:Ns},Ps={[Ds]:"devnet",[Cs]:"testnet",[Ns]:"mainnet"}});var Ot=b(()=>{"use strict";n()});var Ke,Es=b(()=>{"use strict";n();Ke=require("@multiversx/sdk-web-wallet-provider")});var he,hn=b(()=>{"use strict";n();he=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Rs,Ms,ga,uA,fA,ha=b(()=>{"use strict";n();hn();ga=String((Ms=(Rs=he.safeWindow)==null?void 0:Rs.navigator)==null?void 0:Ms.userAgent),uA=/^((?!chrome|android).)*safari/i.test(ga),fA=/firefox/i.test(ga)&&/windows/i.test(ga)});var Ta,Ft,jn,xa,Kn,Ae,$o,Ws,Os,Fs,ao,Bt,Ut,Bs,Us,Ie,Gs,Hs,E=b(()=>{"use strict";n();pa();ze();gs();hs();Ts();la();xs();gn();Ot();Es();ha();Ta=.01,Ft=1500,jn=5e4,xa=5e4,Kn=1e9,Ae=18,$o=4,Ws=1,Os=1,Fs="/dapp/init",ao="signSession",Bt="sdk-dapp-version",Ut="logout",Bs="login",Us="N/A",Ie="0",Gs="...",Hs="EGLD-000000"});var Xn,Gt=b(()=>{"use strict";n();Xn=()=>Date.now()/1e3});var Vs=b(()=>{"use strict";n()});var $s=b(()=>{"use strict";n()});var ya=b(()=>{"use strict";n();Gt();Vs();$s()});var Sa={};V(Sa,{clear:()=>_h,getItem:()=>mh,localStorageKeys:()=>Ee,removeItem:()=>dh,setItem:()=>ph});var Ee,Ht,ph,mh,dh,_h,Tn=b(()=>{"use strict";n();ya();Ee={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Ht=typeof localStorage!="undefined",ph=({key:e,data:o,expires:t})=>{!Ht||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},mh=e=>{if(!Ht)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Xn()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},dh=e=>{!Ht||localStorage.removeItem(String(e))},_h=()=>{!Ht||localStorage.clear()}});var ba={};V(ba,{clear:()=>Ks,getItem:()=>zs,removeItem:()=>js,setItem:()=>qs,storage:()=>lh});var qs,zs,js,Ks,lh,Xs=b(()=>{"use strict";n();qs=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},zs=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},js=e=>sessionStorage.removeItem(String(e)),Ks=()=>sessionStorage.clear(),lh={setItem:qs,getItem:zs,removeItem:js,clear:Ks}});var Xe,xn=b(()=>{"use strict";n();Tn();Xs();Xe={session:ba,local:Sa}});var va,$,Te,K=b(()=>{"use strict";n();va=require("@reduxjs/toolkit");E();$=(0,va.createAction)(Ut),Te=(0,va.createAction)(Bs,e=>({payload:e}))});var Aa,Ys,Zs,Vt,wa,Js,$t,uh,Ia,zA,fh,gh,jA,KA,XA,hh,Th,qt,zt=b(()=>{"use strict";n();Aa=require("@multiversx/sdk-core"),Ys=require("@reduxjs/toolkit"),Zs=require("redux-persist");E();xn();Tn();K();Vt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ie},wa={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Vt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Js=(0,Ys.createSlice)({name:"accountInfoSlice",initialState:wa,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Aa.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Vt},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase($,()=>(Xe.local.removeItem(Ee.loginExpiresAt),wa)),e.addCase(Te,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new Aa.Address(r).hex()}),e.addCase(Zs.REHYDRATE,(o,t)=>{var _;if(!((_=t.payload)!=null&&_.account))return;let{account:r}=t.payload,{address:s,shard:p,accounts:m,publicKey:d}=r;o.address=s,o.shard=p;let l=m&&s in m;o.accounts=l?m:wa.accounts,o.publicKey=d})}}),{setAccount:$t,setAddress:uh,setAccountNonce:Ia,setAccountShard:zA,setLedgerAccount:fh,updateLedgerAccount:gh,setWalletConnectAccount:jA,setIsAccountLoading:KA,setAccountLoadingError:XA,setWebsocketEvent:hh,setWebsocketBatchEvent:Th}=Js.actions,qt=Js.reducer});function Yn(){return new Date().setHours(new Date().getHours()+24)}function Zn(e){Xe.local.setItem({key:Ee.loginExpiresAt,data:e,expires:e})}var ka=b(()=>{"use strict";n();xn();Tn()});var ep,Qs,op,aI,xh,yh,La,iI,Sh,np,cI,sI,pI,jt,Kt=b(()=>{"use strict";n();ep=require("@reduxjs/toolkit");ka();z();K();Qs={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},op=(0,ep.createSlice)({name:"loginInfoSlice",initialState:Qs,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase($,()=>Qs),e.addCase(Te,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Zn(Yn())})}}),{setLoginMethod:aI,setWalletConnectLogin:xh,setLedgerLogin:yh,setTokenLogin:La,setTokenLoginSignature:iI,setWalletLogin:Sh,invalidateLoginSession:np,setLogoutRoute:cI,setIsWalletConnectV2Initialized:sI,setWebviewLogin:pI}=op.actions,jt=op.reducer});var rp,tp,ap,lI,bh,uI,vh,Xt,Yt=b(()=>{"use strict";n();rp=require("@reduxjs/toolkit");K();tp={},ap=(0,rp.createSlice)({name:"modalsSlice",initialState:tp,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase($,()=>tp)}}),{setTxSubmittedModal:lI,setNotificationModal:bh,clearTxSubmittedModal:uI,clearNotificationModal:vh}=ap.actions,Xt=ap.reducer});var F,ce=b(()=>{"use strict";n();Ho();F=()=>{if(!Pe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:s,search:p}}=window;return{pathname:o,hash:t,origin:r,href:s,search:p}}});var yn,ip=b(()=>{"use strict";n();ce();yn=(e="")=>{let o=F(),t=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||t?e:`${o.origin}/${e.replace("/","")}`}});var cp=b(()=>{"use strict";n();pe()});var sp,pp=b(()=>{"use strict";n();hn();sp=e=>{if(!he.safeWindow.location)return;if(!new URL(he.safeWindow.location.href).protocol.startsWith("http"))return he.safeWindow.location.reload();he.safeWindow.location.assign(e)}});var pe=b(()=>{"use strict";n();ip();cp();ce();pp()});var mp,dp,Jn,Qn=b(()=>{"use strict";n();pe();mp=!1,dp=(e=!0)=>{mp=e},Jn=({timeout:e=0,url:o})=>{mp||setTimeout(()=>{if(!!window)return sp(o)},e)}});var _p=b(()=>{"use strict";n();Qn()});function lp(e){return e[Math.floor(Math.random()*e.length)]}var up=b(()=>{"use strict";n()});function Da(e){let o=null;if((e==null?void 0:e.statusCode)in _a){let t=e==null?void 0:e.statusCode,{message:r}=_a[t];o=Ih.includes(t)?fp:r}return{errorMessage:o,defaultErrorMessage:fp}}var fp,wh,Ah,Ih,Ca=b(()=>{"use strict";n();la();fp="Check if the MultiversX app is open on Ledger",wh=28161,Ah=28160,Ih=[wh,Ah]});var io=b(()=>{"use strict";n();_p();up();Ca()});var gp,hp,Tp,Na,Lh,xp,$I,qI,Dh,Zt,Jt=b(()=>{"use strict";n();gp=require("@reduxjs/toolkit"),hp=S(require("lodash.omit")),Tp=require("redux-persist");Ot();K();io();Na={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Lh={network:Na},xp=(0,gp.createSlice)({name:"appConfig",initialState:Lh,reducers:{initializeNetworkConfig:(e,o)=>{let t=lp(o.payload.walletConnectV2RelayAddresses),r=(0,hp.default)(o.payload,"walletConnectV2RelayAddresses");e.network=k(T(T({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=T(T({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase($,o=>{o.network.customWalletAddress=void 0}),e.addCase(Tp.REHYDRATE,(o,t)=>{var s,p;if(!((p=(s=t.payload)==null?void 0:s.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:$I,updateNetworkConfig:qI,setCustomWalletAddress:Dh}=xp.actions,Zt=xp.reducer});var yp,Pa,Sp,ZI,JI,QI,Qt,er=b(()=>{"use strict";n();yp=require("@reduxjs/toolkit");j();K();Pa={isSigning:!1,signedSessions:{}},Sp=(0,yp.createSlice)({name:"signedMessageInfoSliceState",initialState:Pa,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:s}=o.payload;s&&(e.errorMessage=s),e.isSigning=r.status==="pending",e.signedSessions[t]=T(T({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>T(T({},e),o.payload),clearSignedMessageInfo:()=>Pa},extraReducers:e=>{e.addCase($,()=>Pa)}}),{setSignSession:ZI,clearSignedMessageInfo:JI,setSignSessionState:QI}=Sp.actions,Qt=Sp.reducer});var vp,wp,bp,Ap,Ch,Nh,ik,Ph,or,nr=b(()=>{"use strict";n();vp=require("@reduxjs/toolkit"),wp=require("redux-persist");j();Gt();K();bp={customToasts:[],transactionToasts:[]},Ap=(0,vp.createSlice)({name:"toastsSlice",initialState:bp,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(s=>s.toastId===t);if(r!==-1){e.customToasts[r]=k(T(T({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(k(T({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Xn(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase($,()=>bp),e.addCase(wp.REHYDRATE,(o,t)=>{var s,p;let r=(p=(s=t.customToasts)==null?void 0:s.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Ch,removeCustomToast:Nh,addTransactionToast:ik,removeTransactionToast:Ph}=Ap.actions,or=Ap.reducer});var Ip,Ra,Ma,Wa,Eh,Ea,kp,mk,Rh,et,tr,rr=b(()=>{"use strict";n();Ip=require("@reduxjs/toolkit");K();Ra="Transaction failed",Ma="Transaction successful",Wa="Processing transaction",Eh="Transaction submitted",Ea={},kp=(0,Ip.createSlice)({name:"transactionsInfo",initialState:Ea,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||Ra,successMessage:(r==null?void 0:r.successMessage)||Ma,processingMessage:(r==null?void 0:r.processingMessage)||Wa,submittedMessage:(r==null?void 0:r.submittedMessage)||Eh,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ea},extraReducers:e=>{e.addCase($,()=>Ea)}}),{clearTransactionsInfo:mk,setTransactionsDisplayInfo:Rh,clearTransactionsInfoForSessionId:et}=kp.actions,tr=kp.reducer});function bn(e){return e!=null&&($h(e)||Xh(e))}function vn(e){return e!=null&&(qh(e)||Yh(e))}function wn(e){return e!=null&&(zh(e)||Zh(e))}function Lp(e){return e!=null&&(jh(e)||Jh(e))}function Oa(e){return e!=null&&Kh(e)}function $h(e){return e!=null&&Mh.includes(e)}function qh(e){return e!=null&&Wh.includes(e)}function zh(e){return e!=null&&Oh.includes(e)}function jh(e){return e!=null&&Fh.includes(e)}function Kh(e){return e!=null&&Bh.includes(e)}function Xh(e){return e!=null&&Uh.includes(e)}function Yh(e){return e!=null&&Gh.includes(e)}function Zh(e){return e!=null&&Hh.includes(e)}function Jh(e){return e!=null&&Vh.includes(e)}var Mh,Wh,Oh,Fh,Bh,Uh,Gh,Hh,Vh,An=b(()=>{"use strict";n();z();Mh=["sent"],Wh=["success"],Oh=["fail","cancelled","timedOut"],Fh=["invalid"],Bh=["timedOut"],Uh=["pending"],Gh=["success"],Hh=["fail","invalid"],Vh=["not executed"]});var Dp,Cp,ot,Qh,Np,Pp,Ep,eT,qo,oT,nT,xk,Rp,Ao,zo,yk,ar,ir=b(()=>{"use strict";n();Dp=require("@reduxjs/toolkit"),Cp=require("redux-persist");z();An();K();ot={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Qh={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Np=(0,Dp.createSlice)({name:"transactionsSlice",initialState:ot,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:t,transactions:r,errorMessage:s,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=T(T(T({},Qh),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:s,redirectRoute:m,customTransactionInformation:T(T({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===t&&(e.transactionsToSign=ot.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=T(T({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:s,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,s!=null&&(e.signedTransactions[t].errorMessage=s),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,u,f,x,v,h,N,I;let{sessionId:t,status:r,errorMessage:s,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(u=(_=e.signedTransactions)==null?void 0:_[t])==null?void 0:u.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(P=>P.hash===p?k(T(T({},m!=null?m:{}),P),{status:r,errorMessage:s,inTransit:d}):P);let R=(x=(f=e.signedTransactions[t])==null?void 0:f.transactions)==null?void 0:x.every(P=>vn(P.status)),M=(h=(v=e.signedTransactions[t])==null?void 0:v.transactions)==null?void 0:h.some(P=>wn(P.status)),W=(I=(N=e.signedTransactions[t])==null?void 0:N.transactions)==null?void 0:I.every(P=>Lp(P.status));R&&(e.signedTransactions[t].status="success"),M&&(e.signedTransactions[t].status="fail"),W&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=ot.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=ot.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=T(T({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase($,()=>ot),e.addCase(Cp.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:s}=t.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let u=new Date(l),f=new Date;return f.setHours(f.getHours()+5),f-u>0||(d[l]=_),d},{});s!=null&&(o.customTransactionInformationForSessionId=s),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Pp,updateSignedTransactions:Ep,setTransactionsToSign:eT,clearAllTransactionsToSign:qo,clearAllSignedTransactions:oT,clearSignedTransaction:nT,clearTransactionToSign:xk,setSignTransactionsError:Rp,setSignTransactionsCancelMessage:Ao,moveTransactionsToSignedState:zo,updateSignedTransactionsCustomTransactionInformation:yk}=Np.actions,ar=Np.reducer});var Mp,Fa,Wp,wk,Ak,tT,Ik,cr,sr=b(()=>{"use strict";n();Mp=require("@reduxjs/toolkit");K();Fa={},Wp=(0,Mp.createSlice)({name:"batchTransactionsSlice",initialState:Fa,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Fa},extraReducers:e=>{e.addCase($,()=>Fa)}}),{setBatchTransactions:wk,updateBatchTransactions:Ak,clearBatchTransactions:tT,clearAllBatchTransactions:Ik}=Wp.actions,cr=Wp.reducer});var Fp,Op,Bp,Ck,Up,Ba=b(()=>{"use strict";n();Fp=require("@reduxjs/toolkit");K();Op={},Bp=(0,Fp.createSlice)({name:"dappConfigSlice",initialState:Op,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase($,()=>Op)}}),{setDappConfig:Ck}=Bp.actions,Up=Bp.reducer});var G=b(()=>{"use strict";n();zt();Kt();Yt();Jt();er();nr();rr();ir();sr();Ba()});var Ua=b(()=>{"use strict";n()});var Vp,cT,sT,jo,dr=b(()=>{"use strict";n();Vp=require("@reduxjs/toolkit");Ua();zt();sr();Ba();Kt();Yt();Jt();er();nr();rr();ir();cT={["account"]:qt,["dappConfig"]:Up,["loginInfo"]:jt,["modals"]:Xt,["networkConfig"]:Zt,["signedMessageInfo"]:Qt,["toasts"]:or,["transactionsInfo"]:tr,["transactions"]:ar,["batchTransactions"]:cr},sT=(e={})=>(0,Vp.combineReducers)(T(T({},cT),e)),jo=sT});var jp={};V(jp,{default:()=>wT,sessionStorageReducers:()=>Ga});function co(e,o=[]){return{key:e,version:1,storage:qp.default,blacklist:o}}var xe,$p,qp,pT,nt,mT,dT,_T,lT,uT,fT,gT,hT,TT,xT,zp,yT,Ga,ST,bT,vT,wT,Kp=b(()=>{"use strict";n();xe=require("redux-persist"),$p=S(require("redux-persist/lib/storage")),qp=S(require("redux-persist/lib/storage/session"));dr();G();zt();sr();Kt();Yt();Jt();er();nr();rr();ir();Ua();pT={persistReducersStorageType:"localStorage"},nt={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},mT=co(nt["account"]),dT=co(nt["loginInfo"]),_T=co(nt["modals"]),lT=co(nt["networkConfig"]),uT={2:e=>k(T({},e),{networkConfig:Na})};fT=co("sdk-dapp-transactionsInfo"),gT=co("sdk-dapp-transactions",["transactionsToSign"]),hT=co("sdk-dapp-batchTransactions",["batchTransactions"]),TT=co("sdk-dapp-toasts"),xT=co("sdk-dapp-signedMessageInfo"),zp={key:"sdk-dapp-store",version:2,storage:$p.default,whitelist:Object.keys(nt),migrate:(0,xe.createMigrate)(uT,{debug:!1})},yT=k(T({},zp),{whitelist:[]}),Ga={["toasts"]:(0,xe.persistReducer)(TT,or),["transactions"]:(0,xe.persistReducer)(gT,ar),["transactionsInfo"]:(0,xe.persistReducer)(fT,tr),["batchTransactions"]:(0,xe.persistReducer)(hT,cr),["signedMessageInfo"]:(0,xe.persistReducer)(xT,Qt)},ST=k(T({},Ga),{["account"]:(0,xe.persistReducer)(mT,qt),["loginInfo"]:(0,xe.persistReducer)(dT,jt),["modals"]:(0,xe.persistReducer)(_T,Xt),["networkConfig"]:(0,xe.persistReducer)(lT,Zt)}),bT=pT.persistReducersStorageType==="localStorage",vT=bT?(0,xe.persistReducer)(zp,jo(Ga)):(0,xe.persistReducer)(yT,jo(ST)),wT=vT});var Xp={};V(Xp,{default:()=>AT});var AT,Yp=b(()=>{"use strict";n();dr();AT=jo()});var Zp={};V(Zp,{default:()=>kT});var ke,IT,kT,Jp=b(()=>{"use strict";n();ke=require("redux-persist"),IT=[ke.FLUSH,ke.REHYDRATE,ke.PAUSE,ke.PERSIST,ke.PURGE,ke.REGISTER],kT=IT});var om={};V(om,{default:()=>em});function em(e){return(0,Qp.persistStore)(e)}var Qp,nm=b(()=>{"use strict";n();Qp=require("redux-persist")});var Bd=w(($O,Fd)=>{n();var jx=typeof i=="object"&&i&&i.Object===Object&&i;Fd.exports=jx});var lt=w((qO,Ud)=>{n();var Kx=Bd(),Xx=typeof self=="object"&&self&&self.Object===Object&&self,Yx=Kx||Xx||Function("return this")();Ud.exports=Yx});var Pr=w((zO,Gd)=>{n();var Zx=lt(),Jx=Zx.Symbol;Gd.exports=Jx});var qd=w((jO,$d)=>{n();var Hd=Pr(),Vd=Object.prototype,Qx=Vd.hasOwnProperty,ey=Vd.toString,ut=Hd?Hd.toStringTag:void 0;function oy(e){var o=Qx.call(e,ut),t=e[ut];try{e[ut]=void 0;var r=!0}catch(p){}var s=ey.call(e);return r&&(o?e[ut]=t:delete e[ut]),s}$d.exports=oy});var jd=w((KO,zd)=>{n();var ny=Object.prototype,ty=ny.toString;function ry(e){return ty.call(e)}zd.exports=ry});var Er=w((XO,Yd)=>{n();var Kd=Pr(),ay=qd(),iy=jd(),cy="[object Null]",sy="[object Undefined]",Xd=Kd?Kd.toStringTag:void 0;function py(e){return e==null?e===void 0?sy:cy:Xd&&Xd in Object(e)?ay(e):iy(e)}Yd.exports=py});var ki=w((YO,Zd)=>{n();var my=Array.isArray;Zd.exports=my});var Li=w((ZO,Jd)=>{n();function dy(e){return e!=null&&typeof e=="object"}Jd.exports=dy});var e_=w((JO,Qd)=>{n();var _y=Er(),ly=ki(),uy=Li(),fy="[object String]";function gy(e){return typeof e=="string"||!ly(e)&&uy(e)&&_y(e)==fy}Qd.exports=gy});var Wr=w(($F,__)=>{n();function Ly(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}__.exports=Ly});var u_=w((qF,l_)=>{n();var Dy=Er(),Cy=Wr(),Ny="[object AsyncFunction]",Py="[object Function]",Ey="[object GeneratorFunction]",Ry="[object Proxy]";function My(e){if(!Cy(e))return!1;var o=Dy(e);return o==Py||o==Ey||o==Ny||o==Ry}l_.exports=My});var g_=w((zF,f_)=>{n();var Wy=lt(),Oy=Wy["__core-js_shared__"];f_.exports=Oy});var x_=w((jF,T_)=>{n();var Ei=g_(),h_=function(){var e=/[^.]+$/.exec(Ei&&Ei.keys&&Ei.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Fy(e){return!!h_&&h_ in e}T_.exports=Fy});var S_=w((KF,y_)=>{n();var By=Function.prototype,Uy=By.toString;function Gy(e){if(e!=null){try{return Uy.call(e)}catch(o){}try{return e+""}catch(o){}}return""}y_.exports=Gy});var v_=w((XF,b_)=>{n();var Hy=u_(),Vy=x_(),$y=Wr(),qy=S_(),zy=/[\\^$.*+?()[\]{}|]/g,jy=/^\[object .+?Constructor\]$/,Ky=Function.prototype,Xy=Object.prototype,Yy=Ky.toString,Zy=Xy.hasOwnProperty,Jy=RegExp("^"+Yy.call(Zy).replace(zy,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Qy(e){if(!$y(e)||Vy(e))return!1;var o=Hy(e)?Jy:jy;return o.test(qy(e))}b_.exports=Qy});var A_=w((YF,w_)=>{n();function eS(e,o){return e==null?void 0:e[o]}w_.exports=eS});var Or=w((ZF,I_)=>{n();var oS=v_(),nS=A_();function tS(e,o){var t=nS(e,o);return oS(t)?t:void 0}I_.exports=tS});var gt=w((JF,k_)=>{n();var rS=Or(),aS=rS(Object,"create");k_.exports=aS});var C_=w((QF,D_)=>{n();var L_=gt();function iS(){this.__data__=L_?L_(null):{},this.size=0}D_.exports=iS});var P_=w((eB,N_)=>{n();function cS(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}N_.exports=cS});var R_=w((oB,E_)=>{n();var sS=gt(),pS="__lodash_hash_undefined__",mS=Object.prototype,dS=mS.hasOwnProperty;function _S(e){var o=this.__data__;if(sS){var t=o[e];return t===pS?void 0:t}return dS.call(o,e)?o[e]:void 0}E_.exports=_S});var W_=w((nB,M_)=>{n();var lS=gt(),uS=Object.prototype,fS=uS.hasOwnProperty;function gS(e){var o=this.__data__;return lS?o[e]!==void 0:fS.call(o,e)}M_.exports=gS});var F_=w((tB,O_)=>{n();var hS=gt(),TS="__lodash_hash_undefined__";function xS(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=hS&&o===void 0?TS:o,this}O_.exports=xS});var U_=w((rB,B_)=>{n();var yS=C_(),SS=P_(),bS=R_(),vS=W_(),wS=F_();function En(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}En.prototype.clear=yS;En.prototype.delete=SS;En.prototype.get=bS;En.prototype.has=vS;En.prototype.set=wS;B_.exports=En});var H_=w((aB,G_)=>{n();function AS(){this.__data__=[],this.size=0}G_.exports=AS});var $_=w((iB,V_)=>{n();function IS(e,o){return e===o||e!==e&&o!==o}V_.exports=IS});var ht=w((cB,q_)=>{n();var kS=$_();function LS(e,o){for(var t=e.length;t--;)if(kS(e[t][0],o))return t;return-1}q_.exports=LS});var j_=w((sB,z_)=>{n();var DS=ht(),CS=Array.prototype,NS=CS.splice;function PS(e){var o=this.__data__,t=DS(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():NS.call(o,t,1),--this.size,!0}z_.exports=PS});var X_=w((pB,K_)=>{n();var ES=ht();function RS(e){var o=this.__data__,t=ES(o,e);return t<0?void 0:o[t][1]}K_.exports=RS});var Z_=w((mB,Y_)=>{n();var MS=ht();function WS(e){return MS(this.__data__,e)>-1}Y_.exports=WS});var Q_=w((dB,J_)=>{n();var OS=ht();function FS(e,o){var t=this.__data__,r=OS(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}J_.exports=FS});var ol=w((_B,el)=>{n();var BS=H_(),US=j_(),GS=X_(),HS=Z_(),VS=Q_();function Rn(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Rn.prototype.clear=BS;Rn.prototype.delete=US;Rn.prototype.get=GS;Rn.prototype.has=HS;Rn.prototype.set=VS;el.exports=Rn});var tl=w((lB,nl)=>{n();var $S=Or(),qS=lt(),zS=$S(qS,"Map");nl.exports=zS});var il=w((uB,al)=>{n();var rl=U_(),jS=ol(),KS=tl();function XS(){this.size=0,this.__data__={hash:new rl,map:new(KS||jS),string:new rl}}al.exports=XS});var sl=w((fB,cl)=>{n();function YS(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}cl.exports=YS});var Tt=w((gB,pl)=>{n();var ZS=sl();function JS(e,o){var t=e.__data__;return ZS(o)?t[typeof o=="string"?"string":"hash"]:t.map}pl.exports=JS});var dl=w((hB,ml)=>{n();var QS=Tt();function eb(e){var o=QS(this,e).delete(e);return this.size-=o?1:0,o}ml.exports=eb});var ll=w((TB,_l)=>{n();var ob=Tt();function nb(e){return ob(this,e).get(e)}_l.exports=nb});var fl=w((xB,ul)=>{n();var tb=Tt();function rb(e){return tb(this,e).has(e)}ul.exports=rb});var hl=w((yB,gl)=>{n();var ab=Tt();function ib(e,o){var t=ab(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}gl.exports=ib});var xl=w((SB,Tl)=>{n();var cb=il(),sb=dl(),pb=ll(),mb=fl(),db=hl();function Mn(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Mn.prototype.clear=cb;Mn.prototype.delete=sb;Mn.prototype.get=pb;Mn.prototype.has=mb;Mn.prototype.set=db;Tl.exports=Mn});var Sl=w((bB,yl)=>{n();var _b="__lodash_hash_undefined__";function lb(e){return this.__data__.set(e,_b),this}yl.exports=lb});var vl=w((vB,bl)=>{n();function ub(e){return this.__data__.has(e)}bl.exports=ub});var Al=w((wB,wl)=>{n();var fb=xl(),gb=Sl(),hb=vl();function Fr(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new fb;++o<t;)this.add(e[o])}Fr.prototype.add=Fr.prototype.push=gb;Fr.prototype.has=hb;wl.exports=Fr});var kl=w((AB,Il)=>{n();function Tb(e,o,t,r){for(var s=e.length,p=t+(r?1:-1);r?p--:++p<s;)if(o(e[p],p,e))return p;return-1}Il.exports=Tb});var Dl=w((IB,Ll)=>{n();function xb(e){return e!==e}Ll.exports=xb});var Nl=w((kB,Cl)=>{n();function yb(e,o,t){for(var r=t-1,s=e.length;++r<s;)if(e[r]===o)return r;return-1}Cl.exports=yb});var El=w((LB,Pl)=>{n();var Sb=kl(),bb=Dl(),vb=Nl();function wb(e,o,t){return o===o?vb(e,o,t):Sb(e,bb,t)}Pl.exports=wb});var Ml=w((DB,Rl)=>{n();var Ab=El();function Ib(e,o){var t=e==null?0:e.length;return!!t&&Ab(e,o,0)>-1}Rl.exports=Ib});var Ol=w((CB,Wl)=>{n();function kb(e,o,t){for(var r=-1,s=e==null?0:e.length;++r<s;)if(t(o,e[r]))return!0;return!1}Wl.exports=kb});var Bl=w((NB,Fl)=>{n();function Lb(e,o){return e.has(o)}Fl.exports=Lb});var Gl=w((PB,Ul)=>{n();var Db=Or(),Cb=lt(),Nb=Db(Cb,"Set");Ul.exports=Nb});var Vl=w((EB,Hl)=>{n();function Pb(){}Hl.exports=Pb});var Ri=w((RB,$l)=>{n();function Eb(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}$l.exports=Eb});var zl=w((MB,ql)=>{n();var Mi=Gl(),Rb=Vl(),Mb=Ri(),Wb=1/0,Ob=Mi&&1/Mb(new Mi([,-0]))[1]==Wb?function(e){return new Mi(e)}:Rb;ql.exports=Ob});var Kl=w((WB,jl)=>{n();var Fb=Al(),Bb=Ml(),Ub=Ol(),Gb=Bl(),Hb=zl(),Vb=Ri(),$b=200;function qb(e,o,t){var r=-1,s=Bb,p=e.length,m=!0,d=[],l=d;if(t)m=!1,s=Ub;else if(p>=$b){var _=o?null:Hb(e);if(_)return Vb(_);m=!1,s=Gb,l=new Fb}else l=o?[]:d;e:for(;++r<p;){var u=e[r],f=o?o(u):u;if(u=t||u!==0?u:0,m&&f===f){for(var x=l.length;x--;)if(l[x]===f)continue e;o&&l.push(f),d.push(u)}else s(l,f,t)||(l!==d&&l.push(f),d.push(u))}return d}jl.exports=qb});var Yl=w((OB,Xl)=>{n();var zb=Kl();function jb(e){return e&&e.length?zb(e):[]}Xl.exports=jb});var ho={};V(ho,{css:()=>_u,default:()=>g0});var _u,g0,To=b(()=>{"use strict";n();_u=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_u));g0={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Ji={};V(Ji,{css:()=>Lu,default:()=>R0});var Lu,R0,Qi=b(()=>{"use strict";n();Lu=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lu));R0={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var Wu=w((Yj,Mu)=>{n();function O0(e,o){for(var t=-1,r=e==null?0:e.length,s=Array(r);++t<r;)s[t]=o(e[t],t,e);return s}Mu.exports=O0});var Fu=w((Zj,Ou)=>{n();var F0=Er(),B0=Li(),U0="[object Symbol]";function G0(e){return typeof e=="symbol"||B0(e)&&F0(e)==U0}Ou.exports=G0});var $u=w((Jj,Vu)=>{n();var Bu=Pr(),H0=Wu(),V0=ki(),$0=Fu(),q0=1/0,Uu=Bu?Bu.prototype:void 0,Gu=Uu?Uu.toString:void 0;function Hu(e){if(typeof e=="string")return e;if(V0(e))return H0(e,Hu)+"";if($0(e))return Gu?Gu.call(e):"";var o=e+"";return o=="0"&&1/e==-q0?"-0":o}Vu.exports=Hu});var ec=w((Qj,qu)=>{n();var z0=$u();function j0(e){return e==null?"":z0(e)}qu.exports=j0});var ju=w((e9,zu)=>{n();function K0(e,o,t){var r=-1,s=e.length;o<0&&(o=-o>s?0:s+o),t=t>s?s:t,t<0&&(t+=s),s=o>t?0:t-o>>>0,o>>>=0;for(var p=Array(s);++r<s;)p[r]=e[r+o];return p}zu.exports=K0});var Xu=w((o9,Ku)=>{n();var X0=ju();function Y0(e,o,t){var r=e.length;return t=t===void 0?r:t,!o&&t>=r?e:X0(e,o,t)}Ku.exports=Y0});var oc=w((n9,Yu)=>{n();var Z0="\\ud800-\\udfff",J0="\\u0300-\\u036f",Q0="\\ufe20-\\ufe2f",ev="\\u20d0-\\u20ff",ov=J0+Q0+ev,nv="\\ufe0e\\ufe0f",tv="\\u200d",rv=RegExp("["+tv+Z0+ov+nv+"]");function av(e){return rv.test(e)}Yu.exports=av});var Ju=w((t9,Zu)=>{n();function iv(e){return e.split("")}Zu.exports=iv});var cf=w((r9,af)=>{n();var Qu="\\ud800-\\udfff",cv="\\u0300-\\u036f",sv="\\ufe20-\\ufe2f",pv="\\u20d0-\\u20ff",mv=cv+sv+pv,dv="\\ufe0e\\ufe0f",_v="["+Qu+"]",nc="["+mv+"]",tc="\\ud83c[\\udffb-\\udfff]",lv="(?:"+nc+"|"+tc+")",ef="[^"+Qu+"]",of="(?:\\ud83c[\\udde6-\\uddff]){2}",nf="[\\ud800-\\udbff][\\udc00-\\udfff]",uv="\\u200d",tf=lv+"?",rf="["+dv+"]?",fv="(?:"+uv+"(?:"+[ef,of,nf].join("|")+")"+rf+tf+")*",gv=rf+tf+fv,hv="(?:"+[ef+nc+"?",nc,of,nf,_v].join("|")+")",Tv=RegExp(tc+"(?="+tc+")|"+hv+gv,"g");function xv(e){return e.match(Tv)||[]}af.exports=xv});var pf=w((a9,sf)=>{n();var yv=Ju(),Sv=oc(),bv=cf();function vv(e){return Sv(e)?bv(e):yv(e)}sf.exports=vv});var df=w((i9,mf)=>{n();var wv=Xu(),Av=oc(),Iv=pf(),kv=ec();function Lv(e){return function(o){o=kv(o);var t=Av(o)?Iv(o):void 0,r=t?t[0]:o.charAt(0),s=t?wv(t,1).join(""):o.slice(1);return r[e]()+s}}mf.exports=Lv});var lf=w((c9,_f)=>{n();var Dv=df(),Cv=Dv("toUpperCase");_f.exports=Cv});var ff=w((s9,uf)=>{n();var Nv=ec(),Pv=lf();function Ev(e){return Pv(Nv(e).toLowerCase())}uf.exports=Ev});var ac={};V(ac,{css:()=>Sf,default:()=>Mv});var Sf,Mv,ic=b(()=>{"use strict";n();Sf=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sf));Mv={copy:"dapp-core-component__copyButton-styles__copy"}});var sc={};V(sc,{css:()=>vf,default:()=>Ov});var vf,Ov,pc=b(()=>{"use strict";n();vf=`.dapp-core-component__TransactionDataStyles__transactionData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vf));Ov={transactionData:"dapp-core-component__TransactionDataStyles__transactionData",transactionDataLabel:"dapp-core-component__TransactionDataStyles__transactionDataLabel",transactionDataValueWrapper:"dapp-core-component__TransactionDataStyles__transactionDataValueWrapper",transactionDataValue:"dapp-core-component__TransactionDataStyles__transactionDataValue",transactionDataValueText:"dapp-core-component__TransactionDataStyles__transactionDataValueText",transactionDataValueCopy:"dapp-core-component__TransactionDataStyles__transactionDataValueCopy"}});var mc={};V(mc,{css:()=>kf,default:()=>Uv});var kf,Uv,dc=b(()=>{"use strict";n();kf=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kf));Uv={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var lc={};V(lc,{css:()=>Lf,default:()=>Hv});var Lf,Hv,uc=b(()=>{"use strict";n();Lf=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lf));Hv={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var fc={};V(fc,{css:()=>Nf,default:()=>qv});var Nf,qv,gc=b(()=>{"use strict";n();Nf=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nf));qv={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var Tc={};V(Tc,{css:()=>Mf,default:()=>Kv});var Mf,Kv,xc=b(()=>{"use strict";n();Mf=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mf));Kv={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var yc={};V(yc,{css:()=>Uf,default:()=>Yv});var Uf,Yv,Sc=b(()=>{"use strict";n();Uf=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Uf));Yv={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var bc={};V(bc,{css:()=>jf,default:()=>Jv});var jf,Jv,vc=b(()=>{"use strict";n();jf=`.dapp-core-component__confirmAmountStyles__confirmAmount {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jf));Jv={confirmAmount:"dapp-core-component__confirmAmountStyles__confirmAmount",confirmAmountWrapper:"dapp-core-component__confirmAmountStyles__confirmAmountWrapper",confirmAmountLoading:"dapp-core-component__confirmAmountStyles__confirmAmountLoading",confirmAmountLoadingVisible:"dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible",confirmAmountContent:"dapp-core-component__confirmAmountStyles__confirmAmountContent",confirmAmountContentHidden:"dapp-core-component__confirmAmountStyles__confirmAmountContentHidden"}});var Ac={};V(Ac,{css:()=>Xf,default:()=>ew});var Xf,ew,Ic=b(()=>{"use strict";n();Xf=`.dapp-core-component__confirmFeeStyles__confirmFee {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xf));ew={confirmFee:"dapp-core-component__confirmFeeStyles__confirmFee",confirmFeeLabel:"dapp-core-component__confirmFeeStyles__confirmFeeLabel",confirmFeeData:"dapp-core-component__confirmFeeStyles__confirmFeeData",confirmFeeDataPriceWrapper:"dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper",confirmFeeDataPrice:"dapp-core-component__confirmFeeStyles__confirmFeeDataPrice"}});var kc={};V(kc,{css:()=>Jf,default:()=>nw});var Jf,nw,Lc=b(()=>{"use strict";n();Jf=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jf));nw={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Cc={};V(Cc,{css:()=>tg,default:()=>rw});var tg,rw,Nc=b(()=>{"use strict";n();tg=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tg));rw={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Pc={};V(Pc,{css:()=>ig,default:()=>iw});var ig,iw,Ec=b(()=>{"use strict";n();ig=`.dapp-core-component__confirmReceiverStyles__receiver {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ig));iw={receiver:"dapp-core-component__confirmReceiverStyles__receiver",receiverLabelWrapper:"dapp-core-component__confirmReceiverStyles__receiverLabelWrapper",receiverLabel:"dapp-core-component__confirmReceiverStyles__receiverLabel",receiverLabelScam:"dapp-core-component__confirmReceiverStyles__receiverLabelScam",receiverLabelScamIcon:"dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon",receiverWrapper:"dapp-core-component__confirmReceiverStyles__receiverWrapper",receiverData:"dapp-core-component__confirmReceiverStyles__receiverData",receiverDataIcon:"dapp-core-component__confirmReceiverStyles__receiverDataIcon",receiverCopy:"dapp-core-component__confirmReceiverStyles__receiverCopy",receiverExternal:"dapp-core-component__confirmReceiverStyles__receiverExternal"}});var Rc={};V(Rc,{css:()=>dg,default:()=>sw});var dg,sw,Mc=b(()=>{"use strict";n();dg=`.dapp-core-component__signStepBodyStyles__summary {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dg));sw={summary:"dapp-core-component__signStepBodyStyles__summary",fields:"dapp-core-component__signStepBodyStyles__fields",buttons:"dapp-core-component__signStepBodyStyles__buttons"}});var Wc={};V(Wc,{css:()=>fg,default:()=>mw});var fg,mw,Oc=b(()=>{"use strict";n();fg=`.dapp-core-component__progressHeaderStyles__progress-steps {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fg));mw={"progress-steps":"dapp-core-component__progressHeaderStyles__progress-steps",progressSteps:"dapp-core-component__progressHeaderStyles__progress-steps","progress-step":"dapp-core-component__progressHeaderStyles__progress-step",progressStep:"dapp-core-component__progressHeaderStyles__progress-step","progress-step-wrapper":"dapp-core-component__progressHeaderStyles__progress-step-wrapper",progressStepWrapper:"dapp-core-component__progressHeaderStyles__progress-step-wrapper",detailed:"dapp-core-component__progressHeaderStyles__detailed",collapsible:"dapp-core-component__progressHeaderStyles__collapsible",completed:"dapp-core-component__progressHeaderStyles__completed",active:"dapp-core-component__progressHeaderStyles__active","progress-step-index":"dapp-core-component__progressHeaderStyles__progress-step-index",progressStepIndex:"dapp-core-component__progressHeaderStyles__progress-step-index","progress-step-check":"dapp-core-component__progressHeaderStyles__progress-step-check",progressStepCheck:"dapp-core-component__progressHeaderStyles__progress-step-check","progress-step-title":"dapp-core-component__progressHeaderStyles__progress-step-title",progressStepTitle:"dapp-core-component__progressHeaderStyles__progress-step-title","progress-step-title-text":"dapp-core-component__progressHeaderStyles__progress-step-title-text",progressStepTitleText:"dapp-core-component__progressHeaderStyles__progress-step-title-text"}});var It={};V(It,{css:()=>xg,default:()=>_w});var xg,_w,kt=b(()=>{"use strict";n();xg=`.dapp-core-component__signWithDeviceModalStyles__wallet-connect {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xg));_w={"wallet-connect":"dapp-core-component__signWithDeviceModalStyles__wallet-connect",walletConnect:"dapp-core-component__signWithDeviceModalStyles__wallet-connect","modal-container":"dapp-core-component__signWithDeviceModalStyles__modal-container",modalContainer:"dapp-core-component__signWithDeviceModalStyles__modal-container",formGroup:"dapp-core-component__signWithDeviceModalStyles__formGroup",title:"dapp-core-component__signWithDeviceModalStyles__title","modal-layout-content":"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",modalLayoutContent:"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",guarded:"dapp-core-component__signWithDeviceModalStyles__guarded",spaced:"dapp-core-component__signWithDeviceModalStyles__spaced","modal-layout-heading-icon":"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",modalLayoutHeadingIcon:"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",back:"dapp-core-component__signWithDeviceModalStyles__back",close:"dapp-core-component__signWithDeviceModalStyles__close",disabled:"dapp-core-component__signWithDeviceModalStyles__disabled","sign-buttons":"dapp-core-component__signWithDeviceModalStyles__sign-buttons",signButtons:"dapp-core-component__signWithDeviceModalStyles__sign-buttons","sign-button-submit":"dapp-core-component__signWithDeviceModalStyles__sign-button-submit",signButtonSubmit:"dapp-core-component__signWithDeviceModalStyles__sign-button-submit","sign-button-cancel":"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel",signButtonCancel:"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel"}});var gw={};V(gw,{SignWithDeviceModal:()=>fw});module.exports=U(gw);n();n();var Lt=S(require("react")),Bc=S(require("classnames"));n();var fs=S(require("react"));n();var qn=S(require("react"));n();Ho();var _s=()=>!Pe();var ch=()=>y(void 0,null,function*(){return yield Promise.resolve().then(()=>(ca(),ia))}),sh=()=>(ca(),U(ia)).default,sa=_s();function us({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,s]=qn.default.useState(sa?void 0:sh()),[p,m]=qn.default.useState(sa||t==null?void 0:t()),d=()=>y(this,null,function*(){(e?e():ch()).then(l=>s(l.default)),o==null||o().then(l=>m(l.default))});return(0,qn.useEffect)(()=>{sa&&d()},[]),{globalStyles:r,styles:p}}function C(e,o){return t=>{let{globalStyles:r,styles:s}=us({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return fs.default.createElement(e,k(T({},t),{globalStyles:r!=null?r:{},styles:s!=null?s:{}}))}}n();n();n();var sm=require("react"),In=require("react-redux");n();var Ha=require("@reduxjs/toolkit"),im=require("react-redux/lib/utils/Subscription");G();n();var Gp=S(require("lodash.throttle"));E();G();ka();xn();Tn();var rT=[Ut],pr=!1,aT=(0,Gp.default)(()=>{Zn(Yn())},5e3),Hp=e=>o=>t=>{if(rT.includes(t.type))return o(t);let r=e.getState(),s=Xe.local.getItem(Ee.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(s==null)return Zn(Yn());let m=Date.now();return s-m<0&&!pr?setTimeout(()=>{pr=!0,e.dispatch(np())},1e3):(pr&&(pr=!1),aT()),o(t)};n();n();function mr(){return typeof sessionStorage!="undefined"}var tm=mr()?(Kp(),U(jp)).default:(Yp(),U(Xp)).default,rm=mr()?(Jp(),U(Zp)).default:[],am=mr()?(nm(),U(om)).default:e=>e;dr();var L=(0,Ha.configureStore)({reducer:tm,middleware:e=>e({serializableCheck:{ignoredActions:[...rm,Ia.type,$t.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Hp)}),cm=(0,im.createSubscription)(L),LL=am(L),DL=(0,Ha.configureStore)({reducer:jo});var LT={store:L,subscription:cm},Va=(0,sm.createContext)(LT),EL=(0,In.createStoreHook)(Va),J=(0,In.createDispatchHook)(Va),D=(0,In.createSelectorHook)(Va);n();n();G();n();var pm=S(require("lodash.isequal")),_r=require("reselect"),A=(0,_r.createSelectorCreator)(_r.defaultMemoize,pm.default);var Ye=e=>e.account,so=A(Ye,e=>e.address),Ko=A(Ye,so,(e,o)=>o in e.accounts?e.accounts[o]:Vt),mm=A(Ye,Ko,(e,o)=>{let s=e,{accounts:t}=s,r=Ne(s,["accounts"]);return k(T({},r),{address:o.address,account:o})}),FL=A(Ko,e=>e.balance),dm=A(Ko,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),BL=A(Ye,e=>e.shard),DT=A(Ye,e=>e.ledgerAccount),UL=A(Ye,e=>e.walletConnectAccount),GL=A(Ye,e=>e.isAccountLoading),HL=A(Ye,e=>e.accountLoadingError),CT=A(Ye,e=>e.websocketEvent),NT=A(Ye,e=>e.websocketBatchEvent);n();var $a=e=>e.dappConfig,qL=A($a,e=>e.shouldUseWebViewProvider);n();var ye=e=>e.loginInfo,PT=A(ye,e=>e.loginMethod),kn=A(ye,so,(e,o)=>Boolean(o)),XL=A(ye,e=>e.walletConnectLogin),_m=A(ye,e=>e.ledgerLogin),lm=A(ye,e=>e.walletLogin),YL=A(ye,e=>e.isLoginSessionInvalid),qa=A(ye,e=>e.tokenLogin),za=A(ye,e=>e.logoutRoute),ET=A(ye,e=>e.isWalletConnectV2Initialized);n();var um=e=>e.modals,QL=A(um,e=>e.txSubmittedModal),RT=A(um,e=>e.notificationModal);n();var Le=e=>e.networkConfig,lr=A(Le,e=>e.network.chainId),MT=A(Le,e=>e.network.roundDuration),nD=A(Le,e=>e.network.walletConnectBridgeAddress),WT=A(Le,e=>e.network.walletConnectV2RelayAddress),OT=A(Le,e=>e.network.walletConnectV2ProjectId),FT=A(Le,e=>e.network.walletConnectV2Options),BT=A(Le,e=>e.network.walletConnectDeepLink),le=A(Le,e=>e.network),ja=A(le,e=>e.apiAddress),fm=A(le,e=>e.explorerAddress),Ka=A(le,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),UT=A(le,e=>e.xAliasAddress),ur=A(le,e=>e.egldLabel);n();var fr=e=>e.signedMessageInfo,aD=A(fr,e=>e.isSigning),iD=A(fr,e=>e.errorMessage),cD=A(fr,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),sD=A(fr,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var gm=e=>e.toasts,GT=A(gm,e=>e.customToasts),hm=A(gm,e=>e.transactionToasts);n();G();var Tm={errorMessage:Ra,successMessage:Ma,processingMessage:Wa},xm=e=>e.transactionsInfo,HT=A(xm,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Tm);n();n();var Ze=require("@multiversx/sdk-core");E();n();var Xa=require("@multiversx/sdk-core/out");n();n();function tt(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),s=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===s||s.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function Xo(e){return tt(e)?atob(e):e}n();n();function gr(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}function Yo(e){let o=e;try{let t=a.Buffer.from(e,"hex").toString();gr(t)&&t.length>1&&(o=t)}catch(t){}return o}n();n();var ym=e=>{let o=e!=null?e:"";return tt(o)?Xa.TransactionPayload.fromEncoded(o):new Xa.TransactionPayload(o)};n();E();var Zo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(da).some(t=>e.startsWith(t)):!1;function rt(e){var r,s,p;let o=T({},e);Zo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new Ze.Transaction(T(T(k(T(k(T({value:o.value.valueOf(),data:ym(o.data),nonce:o.nonce.valueOf(),receiver:new Ze.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Ze.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:jn,gasPrice:(s=o.gasPrice.valueOf())!=null?s:Kn,chainID:o.chainID.valueOf(),version:new Ze.TransactionVersion((p=o.version)!=null?p:Ws)}),o.options?{options:new Ze.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Ze.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();E();function VT(e,o){let t=new URLSearchParams(e),r=Object.fromEntries(t);return{nextUrlParams:new URLSearchParams(T(T({},r),o)).toString(),params:r}}var $T="3.1.0";function Ya({callbackUrl:e,urlParams:o={}}){let t=e;if(Object.entries(o).length>0)try{let{search:r,origin:s,pathname:p,hash:m}=new URL(e),d=k(T({},o),{[Bt]:$T}),{nextUrlParams:l}=VT(r,d);t=`${s}${p}?${l}${m}`}catch(r){return console.error("Unable to construct URL from: ",e,r),t}return t}n();n();n();var zT=require("@multiversx/sdk-core/out");n();E();n();var at=require("@multiversx/sdk-core");j();n();var Sm=require("@multiversx/sdk-core");function jT(e){try{let o=new Sm.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Io(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&jT(e)}var KT=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Za(e,o,t=""){if(!Io(e))return!1;if(new at.Address(e).isContractAddress())return!0;let p=bm({receiver:e,data:t});return p?new at.Address(p).isContractAddress()||ZT(e,o,t):!1}var XT=e=>e.toLowerCase().match(/[0-9a-f]/g),YT=e=>e.length%2===0;function ZT(e,o,t){let r=t==null?void 0:t.split("@");if(r==null)return!1;let[s,...p]=r,m=o!=null&&e!=null&&e===o,d=KT.includes(s),l=p.every(_=>XT(_)&&YT(_));return m&&d&&l}function bm({receiver:e,data:o}){try{if(!o)return e;let t=tt(o)?at.TransactionPayload.fromEncoded(o).toString():o,r=JT(t),s=t.split("@");return r>-1?s[r]:e}catch(t){console.log(t);return}}function JT(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var Qa=require("@multiversx/sdk-core"),hr=S(require("bignumber.js"));z();var Ja={tokenId:"",amount:""},vm=e=>e.split("@").map((p,m)=>[2,3].includes(m)?p:Yo(p));function ei(e){if(!e)return Ja;let o=e.startsWith("ESDTTransfer"),t=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),r=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(o){let[,s,p]=e.split("@");try{let m=a.Buffer.from(s,"hex").toString("ascii");if(!m)return Ja;let d=new hr.default("0x"+p.replace("0x","")).toString(10);return{tokenId:m,amount:d}}catch(m){console.error("Error getting token from transaction data",m)}}if(t)try{let[,s,p,m,d]=vm(e);if([s,p,m,d].every(l=>Boolean(l))&&Io(new Qa.Address(d).bech32()))return{tokenId:`${s}-${p}`,amount:new hr.default(m,16).toString(10),collection:s,nonce:p,receiver:new Qa.Address(d).bech32()}}catch(s){}if(r)try{let[,s,p,m]=vm(e);if([s,p,m].every(d=>Boolean(d)))return{tokenId:`${s}-${p}`,amount:new hr.default(m,16).toString(10),collection:s,nonce:p}}catch(s){}return Ja}n();n();n();var me="accounts";var Tr="blocks",Am="code",Im="collections";var km="contracts",it="economics",Lm="identities";var Dm="locked-accounts",Cm="logs",Nm="miniblocks";var ct="nfts",Pm="nodes",oi="providers",Em="roles",ni="sc-results";var ko="tokens";var Re="transactions";var st={shard:e=>`/${Tr}?shard=${e}`,receiverShard:e=>`/${Re}?receivershard=${e}`,senderShard:e=>`/${Re}?sendershard=${e}`,transactionDetails:e=>`/${Re}/${e}`,transactionDetailsScResults:e=>`/${Re}/${e}/${ni}`,transactionDetailsLogs:e=>`/${Re}/${e}/${Cm}`,nodeDetails:e=>`/${Pm}/${e}`,accountDetails:e=>`/${me}/${e}`,accountDetailsContractCode:e=>`/${me}/${e}/${Am}`,accountDetailsTokens:e=>`/${me}/${e}/${ko}`,accountDetailsNfts:e=>`/${me}/${e}/${ct}`,accountDetailsScResults:e=>`/${me}/${e}/${ni}`,accountDetailsContracts:e=>`/${me}/${e}/${km}`,identityDetails:e=>`/${Lm}/${e}`,tokenDetails:e=>`/${ko}/${e}`,tokenDetailsAccounts:e=>`/${ko}/${e}/${me}`,tokenDetailsLockedAccounts:e=>`/${ko}/${e}/${Dm}`,tokenDetailsRoles:e=>`/${ko}/${e}/${Em}`,collectionDetails:e=>`/${Im}/${e}`,nftDetails:e=>`/${ct}/${e}`,providerDetails:e=>`/${oi}/${e}`,providerDetailsTransactions:e=>`/${oi}/${e}/${Re}`,miniblockDetails:e=>`/${Nm}/${e}`};n();n();n();n();ge();n();var Rm=!1;function ox(e){Rm||(console.error(e),Rm=!0)}function pt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(ox(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();ge();n();n();n();var nx=S(require("bignumber.js"));E();n();var Om=require("@multiversx/sdk-core"),Lo=S(require("bignumber.js"));E();n();var Wm=S(require("bignumber.js")),yr=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let r=new Wm.default(t),s=o?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=s};n();function po(e){return{if:function(o){return o?{then:t=>t instanceof Function?po(t(e)):po(t)}:{then:()=>po(e)}},then:o=>o instanceof Function?po(o(e)):po(o),valueOf:function(){return e}}}Lo.default.config({ROUNDING_MODE:Lo.default.ROUND_FLOOR});function Me({input:e,decimals:o=Ae,digits:t=$o,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:s=!1,addCommas:p=!1}){if(!yr(e,!1))throw new Error("Invalid input");let m=new Lo.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),po(d).then(()=>Om.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let _=new Lo.default(l);if(_.isZero())return Ie;let u=_.toString(10),[f,x]=u.split("."),v=new Lo.default(x||0),h=po(0).if(Boolean(x&&r)).then(()=>Math.max(x.length,t)).if(v.isZero()&&!r).then(0).if(Boolean(x&&!r)).then(()=>Math.min(x.length,t)).valueOf(),N=x&&t>=1&&t<=x.length&&v.isGreaterThan(0)&&new Lo.default(x.substring(0,t)).isZero(),I=_.toFormat(h);return po(u).if(p).then(I).if(Boolean(N)).then(M=>{let W=new Lo.default(f).isZero(),[P,H]=M.split("."),q=new Array(t-1).fill(0),X=[...q,0].join(""),oe=[...q,1].join("");return W?s?`<${P}.${oe}`:r?`${P}.${H}`:P:`${P}.${X}`}).if(Boolean(!N&&x)).then(M=>{let[W]=M.split("."),P=x.substring(0,h);if(r){let H=t-P.length;if(H>0){let q=Array(H).fill(0).join("");return P=`${P}${q}`,`${W}.${P}`}return M}return P?`${W}.${P}`:W}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}n();n();n();E();n();n();n();n();E();n();E();n();var tx=require("@multiversx/sdk-core");E();n();var We=require("@multiversx/sdk-core"),Um=S(require("bignumber.js"));E();n();n();var ti=S(require("bignumber.js"));E();var Fm=e=>{if(isNaN(e)||e==null||String(e).includes("Infinity"))return!1;let[o,t]=e.split("."),r=ti.default.clone();if(t){let d=t.split("").every(l=>!isNaN(parseInt(l)));for(r.set({DECIMAL_PLACES:d?t.length:ti.default.config().DECIMAL_PLACES});t.charAt(t.length-1)===Ie;)t=t.slice(0,-1)}let s=t?[o,t].join("."):o,p=r(s);return p.toString(10)===s&&p.comparedTo(0)>=0};n();E();n();var ri={isEsdt:!1,isNft:!1,isEgld:!1};function ai(e){let o=e==null?void 0:e.split("-").length;return o===2?k(T({},ri),{isEsdt:!0}):o===3?k(T({},ri),{isNft:!0}):k(T({},ri),{isEgld:!0})}var Bm={from:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",to:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"};function ii({minGasLimit:e=String(jn),gasLimit:o,gasPrice:t,data:r,gasPerDataByte:s,gasPriceModifier:p,defaultGasPrice:m=String(Kn),chainId:d}){let l=r||"",_=yr(o)?o:e,u=Zo({data:l})?xa:0,f=new Um.default(_).plus(u).toNumber(),x=Fm(t)?t:m,v=new We.Transaction({nonce:0,value:We.TokenPayment.egldFromAmount("0"),receiver:new We.Address(Bm.to),sender:new We.Address(Bm.to),gasPrice:parseInt(x),gasLimit:f,data:new We.TransactionPayload(l.trim()),chainID:d,version:new We.TransactionVersion(1)});try{return v.computeFee({GasPerDataByte:parseInt(s),MinGasLimit:parseInt(e),GasPriceModifier:parseFloat(p),ChainID:d}).toString(10)}catch(h){return console.error(h),Ie}}n();var Sr=({amount:e,usd:o,decimals:t=2,addEqualSign:r})=>{let s=(parseFloat(e)*o).toFixed(t),p=parseFloat(s).toLocaleString("en",{maximumFractionDigits:t,minimumFractionDigits:t}),m=parseFloat(e)>0?"\u2248":"=";return`${r?`${m} `:""}$${p}`};n();n();n();n();E();n();E();var Gm=({feeLimit:e,egldPriceInUsd:o,hideEqualSign:t})=>{let r=Me({input:e,decimals:Ae,digits:$o,showLastNonZeroDecimal:!0}),s=Sr({amount:r,usd:o,decimals:$o});return t?s:`\u2248 ${s}`};n();E();n();ge();var rx=["reDelegateRewards","claimRewards","unBond"],ax=["wrapEgld","unwrapEgld"],ix=["unStake"],cx=["unDelegate"];n();n();n();E();n();var mx=S(require("bignumber.js"));n();n();ge();n();var _x=S(require("bignumber.js"));n();n();var Hm=({data:e,highlight:o,occurrences:t,transactionIndex:r})=>{let s=t[r]||e.indexOf(o),p=o.length,m=e.slice(0,s),d=e.slice(s+p);return{start:m,end:d}};n();function Vm({tokenId:e,erdLabel:o}){return Boolean(e&&e!==o)}n();var si=S(require("bignumber.js"));j();n();var $m=(e,o)=>{let t=[],r=e.indexOf(o,0);for(;r>=0;)t.push(r),r=e.indexOf(o,r+1);return t};function qm(e){let o=[],t=0;try{if((e==null?void 0:e.startsWith("MultiESDTNFTTransfer"))&&(e==null?void 0:e.includes("@"))){let[,r,s,...p]=e==null?void 0:e.split("@");if(r){let m=new si.default(s,16).toNumber();if(m>=Number.MAX_SAFE_INTEGER)return[];let d=0;for(let f=0;f<m;f++){let x={type:"nftTransaction",data:"",receiver:r};for(let v=0;v<3;v++){switch(v){case 0:x.token=Yo(p[d]),x.data=p[d];break;case 1:{let h=p[d]&&p[d].length?p[d]:"";h&&h!=="00"?x.nonce=h:x.type="esdtTransaction",x.data=`${x.data}@${p[d]}`;break}case 2:x.amount=new si.default(p[d],16).toString(10),x.data=`${x.data}@${p[d]}`;break;default:break}t=d+1,d++}o[f]=x}let l=o.length!==m,_=o.some(f=>$m(f.data,"@").length!==2),u=o.some(f=>f.data.startsWith("@"));if(l||_||u)return[];if(p[t]){let f=p[t];for(let x=t+1;x<p.length;x++)f+="@"+p[x];o[m]={type:"scCall",data:f,receiver:r}}}}}catch(r){return console.error("failed parsing tx",r),o}return o}n();n();n();z();function Ln(e){let t=Object.getPrototypeOf(e).toPlainObject!=null?e:rt(e),r=k(T({},t.toPlainObject()),{hash:t.getHash().hex(),senderUsername:t.getSenderUsername().valueOf(),receiverUsername:t.getReceiverUsername().valueOf(),status:"pending"});return Zo({data:r.data,onlySetGuardian:!0})&&(delete r.senderUsername,delete r.receiverUsername),r}n();var Km=require("@multiversx/sdk-web-wallet-provider");E();n();var jm=S(require("qs"));n();pe();var vr=e=>{let o=new URLSearchParams(e).toString(),{pathname:t,hash:r}=F(),s=o?`?${o}`:"",p=t?`${t}${s}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};Ho();n();Ho();var ux={search:Pe()?window.location.search:"",removeParams:[]},zm=(e,o=ux)=>{var m;let t={},r=Pe()?window.location.search:"",s=(m=o.search)!=null?m:r;if(s){let d=s?new URLSearchParams(s):[];t=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=t[d],delete t[d]}),o.removeParams!=null&&Object.keys(t).forEach(d=>{var _,u;let[l]=d.split("[");(((_=o.removeParams)==null?void 0:_.includes(d))||((u=o.removeParams)==null?void 0:u.includes(l)))&&delete t[d]}),{remainingParams:p,params:t,clearNavigationHistory:()=>vr(t)}};var wr=({removeParams:e,search:o})=>{let t=Pe()?window.location.search:"",r=o!=null?o:t;if(!r)return{};let s=jm.default.parse(r.replace("?","")),p=Object.keys(s).filter(d=>!e.includes(d)),{remainingParams:m}=zm(p,{search:o,removeParams:e});return vr(m),m};var Xm=({transaction:e,search:o})=>wr({removeParams:[...Object.keys(e),Km.WALLET_PROVIDER_CALLBACK_PARAM,ao,Bt],search:o});n();n();n();ce();n();ge();n();n();ce();n();var fx=S(require("linkifyjs"));n();E();n();var gx=S(require("bignumber.js"));n();j();n();n();z();n();z();n();n();n();ge();n();ge();n();var hx=S(require("bignumber.js"));E();ge();n();ge();n();var Qm=require("react");j();n();n();ge();n();n();var Ym=require("@multiversx/sdk-core/out"),pi=S(require("bignumber.js"));ge();var mo=(e,o,t)=>{switch(o){case"text":try{return a.Buffer.from(e,"hex").toString("utf8")}catch(r){}return e;case"decimal":return e!==""?new pi.default(e,16).toString(10):"";case"smart":try{let r=Ym.Address.fromHex(e).toString();if(Io(r))return r}catch(r){}try{let r=a.Buffer.from(e,"hex").toString("utf8");if(gr(r))return r;{if(t&&[...t.esdts,...t.nfts].some(m=>r.includes(m)))return r;let s=new pi.default(e,16);return s.isFinite()?s.toString(10):e}}catch(r){}return e;case"raw":default:return e}};n();j();n();var Tx=e=>e.toLowerCase().match(/^[0-9a-f]+$/i),xx=e=>e.length%2===0,Zm=e=>{let o=[];return e&&!Tx(e)&&o.push(`Invalid Hex characters on argument @${e}`),e&&!xx(e)&&o.push(`Odd number of Hex characters on argument @${e}`),o};n();j();var Ar=({parts:e,decodedParts:o,identifier:t})=>{let r=[...o];if(e[0]==="ESDTNFTTransfer"&&e[2]&&(r[2]=mo(e[2],"decimal")),t==="ESDTNFTTransfer"&&e[1]){let s=a.Buffer.from(String(e[1]),"base64");r[1]=mo(s.toString("hex"),"decimal")}return r};var Jm=({parts:e,decodeMethod:o,identifier:t,display:r})=>{let s=e.map((m,d)=>{if(e.length>=2&&(d===0&&m.length<64||d===1&&!e[0]))return/[^a-z0-9]/gi.test(m)?mo(m,o):m;{let l=Zm(m);return l.length&&(r.validationWarnings=Array.from(new Set([...r.validationWarnings,...l]))),mo(m,o)}});return o==="smart"?Ar({parts:e,decodedParts:s,identifier:t}):s};var mi=({input:e,decodeMethod:o,identifier:t})=>{let r={displayValue:"",validationWarnings:[]};if(!e.includes("@")&&!e.includes(`
`))return r.displayValue=mo(e,o),r;if(e.includes("@")){let s=e.split("@"),p=Jm({parts:s,identifier:t,decodeMethod:o,display:r});r.displayValue=p.join("@")}if(e.includes(`
`)){let s=e.split(`
`),p=s.map(d=>{let l=a.Buffer.from(d,"base64");return o==="raw"?d:mo(l.toString("hex"),o)}),m=o==="smart"?Ar({parts:s,decodedParts:p,identifier:t}):p;r.displayValue=m.join(`
`)}return r};var d2=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var ed=require("react");j();ce();n();var yx=require("react");ge();var x2=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];An();n();var Ir=e=>e.transactions,Dn=A(Ir,e=>e.signedTransactions),Sx=A(Ir,e=>e.signTransactionsError),di=A(Ir,e=>e.signTransactionsCancelMessage),kr=e=>o=>Object.entries(o).reduce((t,[r,s])=>(e(s.status)&&(t[r]=s),t),{}),od=A(Dn,kr(bn)),nd=A(Dn,kr(vn)),td=A(Dn,kr(wn)),bx=A(Dn,kr(Oa)),Lr=A(Ir,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:k(T({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>rt(t)))||[]})}),vx=A(Dn,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var _o=()=>D(Le);n();var rd=require("react");n();G();n();n();n();n();n();n();n();n();var id=require("@multiversx/sdk-extension-provider"),cd=require("@multiversx/sdk-hw-provider"),sd=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),pd=require("@multiversx/sdk-opera-provider"),md=require("@multiversx/sdk-passkey-provider/out"),li=require("@multiversx/sdk-web-wallet-provider");E();vo();n();var lo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),ad=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");z();n();var _i=Cn;var wx="/dapp/init",uo=e=>{switch(e==null?void 0:e.constructor){case li.WalletProvider:return"wallet";case _i:return"walletconnectv2";case cd.HWProvider:return"ledger";case id.ExtensionProvider:return"extension";case md.PasskeyProvider:return"passkey";case sd.MetamaskProvider:return"metamask";case pd.OperaProvider:return"opera";case we.CrossWindowProvider:return"crossWindow";case lo.IframeProvider:return"iframe";case Cn:return"";default:return"extra"}},ui=e=>new li.WalletProvider(`${e}${wx}`),fi=e=>y(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=e.hwApp,{contractData:t,version:r}=yield o.getAppConfiguration();return{version:r,dataEnabled:t===Os}}),Oe=e=>`Unable to perform ${e}, Provider not initialized`,Cn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Oe("getAccount"))}setAccount(o){throw new Error(Oe(`setAccount: ${o}`))}login(o){throw new Error(Oe(`login with options: ${o}`))}logout(o){throw new Error(Oe(`logout with options: ${o}`))}getAddress(){throw new Error(Oe("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(Oe(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(Oe(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(Oe(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(Oe(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(Oe(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(Oe(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Dr=new Cn;var gi=Dr,dd=null;function fo(e){gi=e}function _d(){dd!=null&&(gi=dd)}function Se(){return gi||Dr}G();n();n();n();n();n();var ld=require("@lifeomic/axios-fetch"),hi=S(require("axios")),Ti=(0,ld.buildAxiosFetch)(hi.default),xi=(e,o)=>y(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[s]=yield Promise.all([r]);return{data:s,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Ax(e,o,t){return y(this,null,function*(){try{let r=yield Ti(e,T({method:"POST",body:o?JSON.stringify(o):void 0,headers:T({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return xi(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function Ix(e,o){return y(this,null,function*(){try{let t=yield Ti(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return xi(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function kx(e,o,t){return y(this,null,function*(){try{let r=yield Ti(e,T({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return xi(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var go=hi.default.create();go.get=Ix;go.post=Ax;go.patch=kx;var ud=e=>go.get(e).then(o=>o.data);n();var Jo=e=>{let o=e!=null?e:ja(L.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var fd=S(require("axios"));function gd(e){return y(this,null,function*(){let{network:{apiAddress:o,apiTimeout:t}}=Le(L.getState()),{data:r}=yield fd.default.get(`${o}/${me}/${e}`,{timeout:Number(t)});return r})}n();var hd=S(require("swr"));var Nn=({apiEndpoint:e})=>{let o=Jo(),t=e?`${o}/${e}`:null;return(0,hd.default)(t,ud)};var Lx=e=>{let t=`${Jo()}/${me}/${e}?withGuardianInfo=true`;return go.get(t)},Td=e=>y(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield Lx(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var Pn=e=>Td(e);n();z();n();n();function xd(){let e=Se();return uo(e)}function Do(e){return xd()===e}n();ce();var yd=()=>{let{search:e}=F(),o=new URLSearchParams(e),t=Object.fromEntries(o),r=t==null?void 0:t.address;return Io(r)?r:null};function Cr(){let e=L.getState(),o=Se(),t=so(e),r=kn(e),s=lm(e);if(!o)throw"provider not initialized";return Do("ledger")&&r?new Promise(p=>{p(t)}):!Do("")&&!Do("wallet")&&!Do("extra")?o.getAddress():new Promise(p=>{let m=yd();s!=null&&m&&p(m),r&&p(t),p("")})}n();function mt(e){let o=L.getState(),t=dm(o);return e?t&&!isNaN(t)?Math.max(t,e.nonce):e.nonce:t}An();n();n();n();var Dx=S(require("axios"));n();var Nx=S(require("axios"));gn();n();E();n();var Px=S(require("axios"));n();var Rx=S(require("axios"));n();n();var Mx=S(require("axios"));n();var Wx=S(require("axios"));n();n();G();z();n();n();n();n();ce();var bd=()=>{let{search:e}=F(),o=new URLSearchParams(e),t=Object.fromEntries(o);return t==null?void 0:t.accessToken};var vd=()=>{var t;let e=bd(),o=ye(L.getState());return e!=null?e:(t=o.webviewLogin)==null?void 0:t.data};n();K();j();n();G();n();var wd=require("@multiversx/sdk-core");j();pe();n();An();n();G();z();n();G();j();n();n();n();j();n();Ot();n();n();n();n();var Id=S(require("swr"));n();n();var Nr={},yi={setItem:(e,o)=>y(void 0,null,function*(){try{Nr[e]=JSON.stringify(o)}catch(t){console.error("tokenDataStorage unable to serialize",t)}}),getItem:e=>y(void 0,null,function*(){try{return JSON.parse(Nr[e])}catch(o){console.error("tokenDataStorage unable to parse",o)}}),clear:()=>y(void 0,null,function*(){Nr={}}),removeItem:e=>y(void 0,null,function*(){delete Nr[e]})};function Ad(e){return y(this,null,function*(){let{apiAddress:o,apiTimeout:t}=le(L.getState()),r={baseURL:o,timeout:Number(t)},s=yield yi.getItem(e);if(s)return s;let p=yield go.get(e,r);return yield yi.setItem(e,p.data),p.data})}function kd({tokenId:e}){var f,x,v,h;let{network:o}=_o(),{isNft:t}=ai(e),r=e,s=t?ct:ko,{data:p,error:m,isLoading:d}=(0,Id.default)(Boolean(r)?`${o.apiAddress}/${s}/${r}`:null,Ad);if(!r)return{tokenDecimals:Number(o.decimals),tokenLabel:"",tokenAvatar:""};let l=p?p==null?void 0:p.decimals:Number(o.decimals),_=p?p==null?void 0:p.name:"",u=p?(h=(f=p==null?void 0:p.assets)==null?void 0:f.svgUrl)!=null?h:(v=(x=p==null?void 0:p.media)==null?void 0:x[0])==null?void 0:v.thumbnailUrl:"";return{isLoading:d,tokenDecimals:l,tokenLabel:_,type:p==null?void 0:p.type,tokenAvatar:u,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}n();n();var dt=require("react");n();function Ld({parsedTransactionsByDataField:e,data:o,txInfo:t}){!e||(e[o]=t)}function Dd({transactions:e}){let o={},t=[];return!e||e.length===0?{allTransactions:t,parsedTransactionsByDataField:o}:(e.forEach((r,s)=>{let p=r.getData().toString(),m=qm(p);if(m.length>0)m.forEach((d,l)=>{let _={transaction:r,multiTxData:d.data,transactionIndex:l};Ld({parsedTransactionsByDataField:o,data:d.data,txInfo:{tokenId:d.token?d.token:"",amount:d.amount?d.amount:"",type:d.type,nonce:d.nonce?d.nonce:"",multiTxData:d.data,receiver:d.receiver}}),t.push(_)});else{let d=r.getData().toString(),{tokenId:l,amount:_}=ei(d);l&&Ld({parsedTransactionsByDataField:o,data:d,txInfo:{tokenId:l,amount:_,receiver:r.getReceiver().bech32()}}),t.push({transaction:r,transactionIndex:s,multiTxData:d})}}),{allTransactions:t,parsedTransactionsByDataField:o})}var Cd={tokenId:"",amount:"",type:"",multiTxData:"",receiver:""};function Nd({transactions:e}){let[o,t]=(0,dt.useState)({}),[r,s]=(0,dt.useState)([]);function p(d,l){return o==null?Cd:d in o?o[d]:l!=null&&String(l)in o?o[l]:Cd}function m(){let{allTransactions:d,parsedTransactionsByDataField:l}=Dd({transactions:e});s(d),t(l)}return(0,dt.useEffect)(()=>{m()},[e==null?void 0:e.length]),{parsedTransactionsByDataField:o,getTxInfoByDataField:p,allTransactions:r}}n();var Pd=require("react"),Ed=require("@multiversx/sdk-web-wallet-provider"),Rd=require("@multiversx/sdk-web-wallet-provider"),Md=S(require("qs"));E();G();z();fa();ce();var Bx=F();function Si(e){let o=D(le),t=J(),{shouldFetchWalletUrlOnLoad:r}=D($a),{search:s}=r?Bx:F();(0,Pd.useEffect)(()=>{if(s!=null){let p=Md.default.parse(s.replace("?",""));if(p&&ao in p){let m=String(p[ao]),d=new Ed.WalletProvider(`${o.walletAddress}${Fs}`).getTransactionsFromWalletUrl(s);if(p.status==="cancelled"){t(zo({sessionId:m,status:"cancelled"})),e(),wr({removeParams:[...Object.keys(ua),Rd.WALLET_PROVIDER_CALLBACK_PARAM,ao,"address"],search:s}),t(Ao(zn));return}if(d.length>0){t(zo({sessionId:m,status:"signed",transactions:d.map(_=>Ln(_))}));let[l]=d;Xm({transaction:l,search:s})}}}},[s])}n();var en=require("react"),on=require("@multiversx/sdk-core");n();var Qo=e=>Nn({apiEndpoint:e?`${me}/${e}?withGuardianInfo=true`:null});E();Ca();n();n();var bi=(e,o)=>e?Array.isArray(o)?o.some(t=>e.address===t||e.activeGuardianAddress===t):e.address===o||e.activeGuardianAddress===o:!0;n();function vi(e){let o=Lr(L.getState()),t=Object.keys(e).length===(o==null?void 0:o.transactions.length);return e&&(e&&t)}n();n();n();var wi=({accountNonce:e,transactionNonce:o})=>o&&o>e?o:e;var Wd=({latestNonce:e,transactions:o})=>o.length===0?o:o.map((t,r)=>{let s=e+r,p=t.getNonce().valueOf(),m=wi({accountNonce:s,transactionNonce:p});return t.setNonce(m),t});var Ai=()=>{let e=D(so),{data:o}=Qo(e);return t=>y(void 0,null,function*(){let r=o!=null?o:yield Pn(e),s=mt(r);return Wd({latestNonce:s,transactions:t})})};n();var _t=({transactions:e,isGuarded:o})=>o?e.length===0?!1:e.every(t=>Boolean(t.getGuardianSignature().toString("hex"))):!0;n();n();n();gn();n();var Hx=S(require("axios"));n();var $x=S(require("axios"));n();gn();n();gn();function Ii(e){return Ps[e]}n();n();n();n();var qx=require("@multiversx/sdk-opera-provider");n();var zx=require("@multiversx/sdk-extension-provider");n();vo();function Od(t){return y(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield we.CrossWindowProvider.getInstance().init(),s=we.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return s;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}n();n();n();n();var o_=S(e_());var ft=e=>{if(!e||!(0,o_.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,r,s,p]=o,m=JSON.parse(Xo(p)),d=Xo(t);return{ttl:Number(s),extraInfo:m,origin:d,blockHash:r}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var yy=require("@multiversx/sdk-native-auth-client");n();var r_=S(require("axios"));n();n();n();function n_(e){return y(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var t_=(e,o,t,r=0)=>y(void 0,null,function*(){try{return yield e(...t)}catch(s){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield n_(o.delay)),yield t_(e,o,t,r+1)):null}}),Di=(e,o={retries:5,delay:500})=>(...t)=>y(void 0,null,function*(){return yield t_(e,o,t)});var hy=4;var m6=Di((e,o,t)=>y(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield r_.default.get(`${e}/${Tr}?from=${hy}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[s]=r;return s}));n();n();Gt();n();function Ty(e){return Object.prototype.toString.call(e)==="[object String]"}var Ci=e=>{var t;if(!e||!Ty(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,s,p]=o,m=Xo(r),d=Xo(s),l=ft(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let _=k(T({},l),{address:m,body:d,signature:p});return(t=l.extraInfo)!=null&&t.timestamp||delete _.extraInfo,_}catch(r){return null}};n();ce();var y6={origin:F().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var by=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var vy=require("@multiversx/sdk-passkey-provider/out");E();ce();var Ni=({transactions:e,hasGuardianScreen:o,callbackRoute:t,sessionId:r,walletAddress:s,isGuarded:p})=>{let m=_t({isGuarded:p,transactions:e}),d=e[0].getChainID().valueOf(),l=e[0].getSender().bech32().toString(),_=Ii(d),u=s!=null?s:Vo[_].walletAddress;return{needs2FaSigning:p?!o&&!m&&r:!1,sendTransactionsToGuardian:()=>{let h=ui(u),N={[ao]:String(r)},{origin:I}=F(),R=window!=null&&window.location?`${I}${t}`:`${t}`,M=Ya({callbackUrl:R,urlParams:N});h.guardTransactions(e,{callbackUrl:encodeURIComponent(M)})},guardTransactions:()=>y(void 0,null,function*(){let h=yield Od({address:l,walletUrl:u});return h==null||h.setShouldShowConsentPopup(!0),yield h==null?void 0:h.guardTransactions(e)})}};n();n();n();var s_=require("react"),Pi=require("@multiversx/sdk-hw-provider");n();K();j();n();function a_(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(t){}}}function i_(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=wy(e.path,e.caseSensitive,e.end),s=o.match(t);if(!s)return null;let p=s[0],m=p.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:r.reduce((_,u,f)=>{if(u==="*"){let x=d[f]||"";m=p.slice(0,p.length-x.length).replace(/(.)\/+$/,"$1")}return _[u]=Ay(d[f]||"",u),_},{}),pathname:p,pathnameBase:m,pattern:e}}function wy(e,o=!1,t=!0){a_(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s+=t?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(s,o?void 0:"i"),r]}function Ay(e,o){try{return decodeURIComponent(e)}catch(t){return a_(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}Qn();xn();Tn();pe();var c_=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&Jn({url:e})},Iy=e=>{let o=Xe.local.getItem(Ee.logoutEvent),{data:t}=o?JSON.parse(o):{data:e};e===t&&(Xe.local.setItem({key:Ee.logoutEvent,data:e,expires:0}),Xe.local.removeItem(Ee.logoutEvent))},ky=500;function Rr(s,p){return y(this,arguments,function*(e,o,t=Boolean(vd()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var h;let m="",d=Se(),l=uo(d),_=l==="wallet",u=((h=d==null?void 0:d.isInitialized)==null?void 0:h.call(d))===!0;if(t&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield Cr(),Iy(m)}catch(N){console.error("error fetching logout address",N)}let f=yn(e),x=F(),v=new URL(decodeURIComponent(f)).pathname;if((i_(x.pathname,v)||_&&u)&&dp(),!m&&!u)return c_({callbackUrl:f,onRedirect:o});try{if(L.dispatch($()),_)return setTimeout(()=>{d.logout({callbackUrl:f})},ky);r.hasConsentPopup&&l==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:f})}catch(N){console.error("Logging out error:",N)}finally{_||c_({callbackUrl:f,onRedirect:o})}})}var p_=()=>{let e=D(za),o=D(kn),t=D(_m),r=Se(),[s,p]=(0,s_.useState)(),m=()=>y(void 0,null,function*(){let l=(t==null?void 0:t.index)!=null;try{if(r instanceof Pi.HWProvider&&r.isInitialized())return l&&(yield r.setAddressIndex(t.index)),r;let _=new Pi.HWProvider;return(yield _.init())?(l&&(yield _.setAddressIndex(t.index)),_):null}catch(_){return console.error("Failed to initialise Ledger Provider"),null}});function d(l){return y(this,null,function*(){let _,u=o&&!(l!=null&&l.isRelogin);try{if(_=yield m(),!_){console.warn("Could not initialise ledger app"),u&&Rr(e);return}let f=yield fi(_);return fo(_),p(f),_}catch(f){console.error("Could not initialise ledger app",f),u&&Rr(e)}return null})}return{setLedgerProvider:d,ledgerData:s}};n();var Co=()=>{let e=Se(),o=uo(e);return{provider:e,providerType:o}};var m_=()=>{let{provider:e}=Co(),{setLedgerProvider:o}=p_();return function(){return y(this,null,function*(){let r;try{let p=yield e.getAddress();r=Boolean(p)}catch(p){r=!1}if(r)return e;let s=yield o({isRelogin:!0});return s||e})}};var Mr={},d_=({isLedger:e=!1,transactionsToSign:o,egldLabel:t,address:r,activeGuardianAddress:s,hasGuardianScreen:p,onCancel:m,onSignTransaction:d,onTransactionsSignError:l,onTransactionsSignSuccess:_,onGetScamAddressData:u})=>{var Dt,Ct,Nt,dn;let f=Boolean(s),[x,v]=(0,en.useState)(0),[h,N]=(0,en.useState)(),[I,R]=(0,en.useState)(null),[M,W]=(0,en.useState)(!1),{getTxInfoByDataField:P,allTransactions:H}=Nd({transactions:s?o==null?void 0:o.map(B=>{B.setSender(on.Address.fromBech32(r)),B.setVersion(on.TransactionVersion.withTxOptions()),B.setGuardian(on.Address.fromBech32(s));let _e=T({guarded:!0},e?{hashSign:!0}:{});return B.setOptions(on.TransactionOptions.withOptions(_e)),B}):o}),q=x===H.length-1,X=H[x],oe=(Dt=I==null?void 0:I.transaction)==null?void 0:Dt.getSender().toString(),{data:ae}=Qo(!oe||oe===r?null:oe),Y=()=>y(void 0,null,function*(){var Uc;if(X==null)return;let{transaction:B,multiTxData:_e,transactionIndex:bo}=X,Wo=B.getData().toString(),Ge=P(B.getData().toString(),_e),{tokenId:Oo}=Ge,oo=B.getReceiver().toString();if(oe&&oe!==r&&!bi(ae,r))return console.error(ma),m==null?void 0:m();let Fo=r!==oo,jr=oo in Mr;if(oo&&Fo&&!jr&&u!=null){let Vn=yield u(oo);Mr=T(T({},Mr),Vn!=null&&Vn.scamInfo?{[oo]:Vn.scamInfo}:{})}let Hn=Boolean(Oo&&Vm({tokenId:Oo,erdLabel:t}));R({transaction:B,receiverScamInfo:((Uc=Mr[oo])==null?void 0:Uc.info)||null,transactionTokenInfo:Ge,isTokenTransaction:Hn,dataField:Wo,transactionIndex:bo})});(0,en.useEffect)(()=>{Y()},[X,ae]);let de=()=>{v(0),N(void 0),W(!1)},Ue=()=>y(void 0,null,function*(){let B=Object.values(h!=null?h:{}),_e=_t({isGuarded:f,transactions:B});if(f&&_e){_(B),de();return}if(I==null)return;W(e);let bo;try{bo=yield d(I.transaction)}catch(Fo){console.error(Fo,"sign error");let{message:jr}=Fo,Hn=e?Da(Fo).errorMessage:null;de(),l(Hn!=null?Hn:jr);return}if(!bo)return;let Wo={[x]:bo},Ge=h?T(T({},h),Wo):Wo;if(N(Ge),!q){v(Fo=>Fo+1),W(!1);return}if(!Ge)return;let Oo=Object.values(Ge);!_t({isGuarded:f,transactions:Oo})&&p||(_(Oo),de())}),ne=()=>y(void 0,null,function*(){try{if(I==null)return;if(I.transaction.getSignature().toString("hex")&&!q){v(_e=>_e+1);return}yield Ue()}catch(B){console.error("Error during signing transaction"),yield Ue()}}),De=x===0,Ce=()=>{De?m==null||m():v(B=>B-1)},eo=Boolean(((Ct=I==null?void 0:I.transactionTokenInfo)==null?void 0:Ct.type)&&((Nt=I==null?void 0:I.transactionTokenInfo)==null?void 0:Nt.multiTxData)&&!(I!=null&&I.dataField.endsWith((dn=I==null?void 0:I.transactionTokenInfo)==null?void 0:dn.multiTxData)));return{allTransactions:H,onSignTransaction:()=>y(void 0,null,function*(){if(eo){v(B=>B+1);return}yield ne()}),onNext:()=>{v(B=>{let _e=B+1;return _e>(H==null?void 0:H.length)?B:_e})},onPrev:()=>{v(B=>{let _e=B-1;return _e<0?B:_e})},waitingForDevice:M,onAbort:Ce,isLastTransaction:q,isFirstTransaction:x===0,hasMultipleTransactions:H.length>1,shouldContinueWithoutSigning:eo,currentStep:x,signedTransactions:h,setSignedTransactions:N,currentTransaction:I}};n();var tu=require("react"),ru=require("@multiversx/sdk-core"),Jb=require("@multiversx/sdk-extension-provider"),Qb=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),e0=require("@multiversx/sdk-passkey-provider/out"),o0=S(Yl());E();n();n();var No=()=>D(Ko);n();var Zl=()=>D(mm);n();n();n();n();n();n();n();var xt=S(require("react"));var QB=(0,xt.createContext)({}),eU=L.getState();n();var Ql=S(require("react"));n();var Wi=S(require("react")),Kb=S(require("axios"));n();n();vo();n();n();var ou=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),nu=require("@multiversx/sdk-webview-provider/out/WebviewProvider");K();n();K();G();j();function eu(e,o=L.dispatch){let t=Ci(e);if(t==null)return;let{signature:r,address:s}=t;r&&e&&s&&(o(La({loginToken:e,signature:r,nativeAuthToken:e})),o(Te({address:s,loginMethod:"extra"})))}n();n();G();function Oi(){L.dispatch(qo())}n();pe();n();G();j();n();n();var Xb=require("@multiversx/sdk-core"),Yb=S(require("bignumber.js"));E();n();var Zb=S(require("bignumber.js"));E();var Fe=class{constructor(){this.init=()=>y(this,null,function*(){return yield this._provider.init()});this.login=()=>y(this,null,function*(){var t;let o=yield this._provider.login();return{address:(t=o==null?void 0:o.address)!=null?t:""}});this.logout=()=>y(this,null,function*(){return L.dispatch($()),yield this._provider.logout()});this.relogin=()=>y(this,null,function*(){let o=yield this._provider.relogin();return o?(eu(o),_d(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>y(this,null,function*(){let t=yield this._provider.signTransactions(o);return t||(Oi(),this._provider.cancelAction(),null)});this.signTransaction=o=>y(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>y(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>y(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>y(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,ou.providerNotInitializedError)("getAddress");this._provider=nu.WebviewProvider.getInstance({resetStateCallback:()=>L.dispatch($())})}static getInstance(){return Fe._instance||(Fe._instance=new Fe),Fe._instance}getAccount(){var t;let o=this._provider.getAccount();return{address:(t=o==null?void 0:o.address)!=null?t:""}}setAccount(o){this._provider.setAccount(o)}};G();z();pe();ce();n();var Wn=require("react"),Fi=require("@multiversx/sdk-extension-provider"),Bi=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Ui=require("@multiversx/sdk-passkey-provider/out");vo();G();var Gi=()=>{let e=J(),{provider:o}=Co(),{nonce:t}=No(),[r,s]=(0,Wn.useState)(null),[p,m]=(0,Wn.useState)(),[d,l]=(0,Wn.useState)([]),_=Ai(),u=D(Lr),f=D(di),x=()=>y(void 0,null,function*(){var M,W;let I=Boolean(u==null?void 0:u.transactions),R=(M=u==null?void 0:u.transactions)!=null?M:[];if(I){let P=(W=u==null?void 0:u.customTransactionInformation)!=null&&W.skipUpdateNonces?R:yield _(R);l(P)}m(I)});(0,Wn.useEffect)(()=>{x()},[u,t]);let v=()=>{s(null),e(Ao(null))},h=I=>{v(),N(I)};Si(h);function N(I){var X,oe,ae,Y,de,Ue,ne,De,Ce,eo,se,be;let R=o instanceof Fi.ExtensionProvider,M=o instanceof Ui.PasskeyProvider,W=o instanceof we.CrossWindowProvider,P=o instanceof lo.IframeProvider,H=o instanceof Bi.MetamaskProvider,q=o instanceof Fe;e(qo()),e(et(I)),!(!R&&!W&&!P&&!M&&!H)&&(v(),R&&((oe=(X=Fi.ExtensionProvider.getInstance())==null?void 0:X.cancelAction)==null||oe.call(X)),M&&((Y=(ae=Ui.PasskeyProvider.getInstance())==null?void 0:ae.cancelAction)==null||Y.call(ae)),H&&((Ue=(de=Bi.MetamaskProvider.getInstance())==null?void 0:de.cancelAction)==null||Ue.call(de)),W&&((De=(ne=we.CrossWindowProvider.getInstance())==null?void 0:ne.cancelAction)==null||De.call(ne)),P&&((eo=(Ce=lo.IframeProvider.getInstance())==null?void 0:Ce.cancelAction)==null||eo.call(Ce)),q&&((be=(se=Fe.getInstance())==null?void 0:se.cancelAction)==null||be.call(se)))}return{error:r,canceledTransactionsMessage:f,clearTransactionStatusMessage:v,onAbort:h,setError:s,hasTransactions:p,transactionsToSign:u&&k(T({},u),{transactions:d})}};n();G();j();Qn();ce();n();ze();G();function au(){let e=J();return o=>{e(qo()),e(et(o)),e(Ao(zn))}}function Hi(e){let{onCancel:o,verifyReceiverScam:t=!0,hasGuardianScreen:r}=e,{transactionsToSign:s,hasTransactions:p}=Gi(),m=D(Ka),d=m_(),l=D(ur),{account:_}=Zl(),{address:u,isGuarded:f,activeGuardianAddress:x}=_,{provider:v,providerType:h}=Co(),N=J(),I=au(),{transactions:R,sessionId:M,callbackRoute:W,customTransactionInformation:P}=s||{};function H(ne){M&&N(zo({sessionId:M,status:"cancelled"})),N(Rp(ne))}let{pathname:q}=F(),X=W!=null&&q.includes(W),oe=!(P!=null&&P.skipGuardian);function ae(ne){return y(this,null,function*(){if(!vi(ne))return;let{needs2FaSigning:Ce,guardTransactions:eo}=Ni({transactions:ne,sessionId:M,callbackRoute:W,isGuarded:f&&oe,walletAddress:m}),se=ne.map(be=>Ln(be));if(Ce){let be=yield eo();se=be?be.map(Gn=>Ln(Gn)):[]}!M||(N(zo({sessionId:M,status:"signed",transactions:se})),W!=null&&(P==null?void 0:P.redirectAfterSign)&&!X&&Jn({url:W}))})}function Y(){o(),I(M)}function de(ne){return y(this,null,function*(){let De=h!=="ledger"?v:yield d();return ne?yield De.signTransaction(ne):null})}let Ue=d_({address:u,egldLabel:l,activeGuardianAddress:f&&oe?x:void 0,transactionsToSign:p?R:[],onGetScamAddressData:t?gd:null,isLedger:Do("ledger"),hasGuardianScreen:r,onCancel:Y,onSignTransaction:de,onTransactionsSignError:H,onTransactionsSignSuccess:ae});return k(T({},Ue),{callbackRoute:W,waitingForDevice:Ue.waitingForDevice})}n();n();var t0=require("react");n();n();z();An();n();var Br=require("react"),iu=(e,o)=>{let[t,r]=(0,Br.useState)(e);return(0,Br.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var a0=require("react"),i0=require("@multiversx/sdk-extension-provider");ze();K();z();n();io();pe();pe();n();n();vo();j();n();var r0=require("react"),cu=require("@multiversx/sdk-core");G();n();var c0=require("react"),s0=require("@multiversx/sdk-opera-provider");ze();K();z();io();pe();ce();n();var p0=require("react");ha();ze();vo();K();G();z();io();ce();n();var u0=require("react");ze();G();n();n();ya();n();n();var m0=S(require("platform"));Ho();n();n();n();n();n();function su(){return ur(L.getState())}n();n();hn();z();n();n();var d0=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Qn();xn();n();n();n();G();n();n();var _0=S(require("axios"));pe();n();n();var l0=S(Wr());hn();var pu,mu,du,R8=(du=(mu=(pu=he.safeWindow)==null?void 0:pu.location)==null?void 0:mu.origin)==null?void 0:du.includes("localhost");n();ce();n();n();var b0=require("react");E();n();n();E();n();n();n();var f0=S(require("bignumber.js"));n();n();n();var Po=S(require("react")),Tu=require("react"),xu=require("react"),ji=S(require("classnames")),yu=require("react-dom");E();n();var lu=S(require("react")),uu=S(require("classnames"));var h0=({className:e,children:o,styles:t})=>lu.default.createElement("div",{className:(0,uu.default)(t==null?void 0:t.dappModalBody,e)},o),Vi=C(h0,{ssrStyles:()=>Promise.resolve().then(()=>(To(),ho)),clientStyles:()=>(To(),U(ho)).default});n();var $i=S(require("react")),fu=S(require("classnames"));var T0=({visible:e,customFooter:o,className:t,footerText:r,styles:s})=>e?$i.default.createElement("div",{className:(0,fu.default)(s==null?void 0:s.dappModalFooter,t)},o!=null?o:$i.default.createElement("div",null,r)):null,qi=C(T0,{ssrStyles:()=>Promise.resolve().then(()=>(To(),ho)),clientStyles:()=>(To(),U(ho)).default});n();var Bn=S(require("react")),gu=require("@fortawesome/free-solid-svg-icons"),hu=require("@fortawesome/react-fontawesome"),St=S(require("classnames"));var x0=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:s,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?Bn.default.createElement("div",{className:(0,St.default)(l==null?void 0:l.dappModalHeader,r)},t):Bn.default.createElement("div",{className:(0,St.default)(l==null?void 0:l.dappModalHeader,r)},Bn.default.createElement("div",{className:(0,St.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Bn.default.createElement("button",{onClick:m,className:(0,St.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,s)},Bn.default.createElement(hu.FontAwesomeIcon,{size:"lg",icon:gu.faTimes}))):null,zi=C(x0,{ssrStyles:()=>Promise.resolve().then(()=>(To(),ho)),clientStyles:()=>(To(),U(ho)).default});var y0={showHeader:!0,showFooter:!1,headerText:"",footerText:""},S0=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:s=y0,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[u,f]=(0,Tu.useState)(!1);if((0,xu.useEffect)(()=>{f(!0)},[]),!l)return null;let{showHeader:x,showFooter:v,headerText:h,footerText:N,modalDialogClassName:I="dapp-modal-dialog",modalContentClassName:R="dapp-modal-dialog-content",modalHeaderClassName:M="dapp-modal-dialog-header",modalHeaderTextClassName:W="dapp-modal-dialog-header-text",modalCloseButtonClassName:P="dapp-modal-dialog-close-button",modalBodyClassName:H="dapp-modal-dialog-content-body",modalFooterClassName:q="dapp-modal-dialog-footer",customModalHeader:X,customModalFooter:oe}=s,ae=Y=>{Y.key==="Escape"&&r&&(m==null||m())};return Po.default.createElement(Po.default.Fragment,null,u&&(0,yu.createPortal)(Po.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,ji.default)(I,_==null?void 0:_.dappModal,t),"data-testid":e,onKeyDown:ae},Po.default.createElement("div",{className:(0,ji.default)(_==null?void 0:_.dappModalContent,R)},Po.default.createElement(zi,{visible:x,headerText:h,customHeader:X,className:M,headerTextClassName:W,closeButtonClassName:P,onHide:m}),Po.default.createElement(Vi,{className:H},o),Po.default.createElement(qi,{visible:v,customFooter:oe,footerText:N,className:q}))),d!=null?d:document==null?void 0:document.body))},Ki=C(S0,{ssrStyles:()=>Promise.resolve().then(()=>(To(),ho)),clientStyles:()=>(To(),U(ho)).default});n();n();var Ur=require("react"),Xi=e=>{let[o,t]=(0,Ur.useState)(!1),r=()=>{t(!0)},s=()=>{t(!1)};return(0,Ur.useEffect)(()=>{(e==null?void 0:e.visible)===!0?r():(e==null?void 0:e.visible)===!1&&s()},[e==null?void 0:e.visible]),{handleShowModal:r,handleHideModal:s,showModal:o}};n();n();var Su=require("react"),w0=require("@multiversx/sdk-hw-provider");ze();K();G();z();io();n();var v0=require("react");n();n();var Yi=require("react");K();G();z();io();ce();n();var I0=require("react"),k0=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ze();K();z();io();pe();pe();n();var L0=require("react"),D0=require("@multiversx/sdk-passkey-provider/out");ze();K();z();io();pe();pe();n();n();var bu=require("react");n();var P0=require("react");n();var Zi=require("react"),N0=require("socket.io-client");G();n();n();n();var E0=require("react");j();n();n();n();var Au=S(require("swr"));n();n();n();n();var vu=S(require("axios"));function wu(e=it){let t=`${Jo()}/${e}`;return vu.default.get(t)}n();function Gr(){let e=r=>wu(r).then(s=>s.data),{data:o,error:t}=(0,Au.default)(it,e);return{price:o==null?void 0:o.price,error:t}}n();var Iu=S(require("react"));var ku=e=>{let{showModal:o}=Xi({visible:e.visible}),t=()=>{var r;(r=e.onClose)==null||r.call(e)};return Iu.default.createElement(Ki,{className:e.className,closeOnEscape:e.closeOnEscape,config:e.modalConfig,onHide:t,visible:o},e.children)};n();n();var Nu=S(require("react")),Pu=require("@fortawesome/free-solid-svg-icons"),Eu=S(require("classnames"));n();n();var Eo=S(require("react")),Du=require("@fortawesome/react-fontawesome"),bt=S(require("classnames"));var M0=({icon:e,title:o,action:t,iconClass:r,"data-testid":s,description:p,iconBgClass:m,iconSize:d="5x",className:l="dapp-page-state",globalStyles:_,styles:u})=>{let f=(0,Eo.useMemo)(()=>({wrapper:(0,bt.default)(u==null?void 0:u.state,_==null?void 0:_.mAuto,_==null?void 0:_.p4,_==null?void 0:_.textCenter,l),iconContainer:(0,bt.default)(_==null?void 0:_.iconState,_==null?void 0:_.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,bt.default)(r!=null&&r),title:(0,bt.default)(_==null?void 0:_.h4,_==null?void 0:_.my4),description:_==null?void 0:_.mb3}),[_,u,l,m,r]);return Eo.default.createElement("div",{className:f.wrapper,"data-testid":s},e&&Eo.default.createElement("span",{className:f.iconContainer},Eo.default.createElement(Du.FontAwesomeIcon,{icon:e,className:f.iconClass,size:d})),o&&Eo.default.createElement("p",{className:f.title},o),p&&Eo.default.createElement("div",{className:f.description},p),t)},Cu=C(M0,{ssrStyles:()=>Promise.resolve().then(()=>(Qi(),Ji)),clientStyles:()=>(Qi(),U(Ji)).default});var W0=({"data-testid":e="loader",noText:o=!1,className:t="dapp-loader",globalStyles:r})=>Nu.default.createElement(Cu,{title:o?"":"Loading...",iconBgClass:(0,Eu.default)(r==null?void 0:r.textPrimary,"fa-spin"),"data-testid":e,icon:Pu.faCircleNotch,className:t}),Ru=C(W0,{});n();var ee=S(require("react")),zr=require("@fortawesome/free-solid-svg-icons"),Fc=require("@fortawesome/react-fontawesome"),mn=S(require("classnames"));E();n();n();var Ro=S(require("react")),_g=require("@multiversx/sdk-core/out"),lg=S(require("classnames"));n();n();n();var yo=S(require("react")),gf=require("@fortawesome/free-solid-svg-icons"),hf=require("@fortawesome/react-fontawesome"),Tf=S(require("classnames")),rc=S(ff());pa();j();var xf=({className:e,data:o,onDecodeError:t,onDecode:r})=>{let s=(0,rc.default)("raw".toString()),[p,m]=(0,yo.useState)({label:s,value:s}),d=Object.values(je).map(_=>{let u=_.toString();return{label:(0,rc.default)(u),value:u}}),l=_=>{let u=d.find(f=>f.value===_.target.value);u&&m(u)};return(0,yo.useEffect)(()=>{let{displayValue:_,validationWarnings:u}=mi({input:o,decodeMethod:je[p.value]});r(_),u.length>0&&t(u)},[p,o]),yo.default.createElement("div",{className:(0,Tf.default)("transaction-data-decode",e)},yo.default.createElement("select",{className:"transaction-data-decode-select","data-testid":"transactionDataDecode",value:p.value,onChange:l},d.map(_=>yo.default.createElement("option",{key:_.value,value:_.value},_.label))),yo.default.createElement(hf.FontAwesomeIcon,{icon:gf.faChevronDown,className:"transaction-data-decode-select-icon"}))};n();var O=S(require("react")),an=S(require("classnames"));E();n();n();var Un=S(require("react")),Hr=require("@fortawesome/free-solid-svg-icons"),cc=require("@fortawesome/react-fontawesome"),bf=S(require("classnames"));n();Ho();function Rv(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(t),o}function yf(e){return y(this,null,function*(){if(!Pe())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):o=Rv(e),o})}var Wv=({text:e,className:o="dapp-copy-button",copyIcon:t=Hr.faCopy,successIcon:r=Hr.faCheck,styles:s})=>{let[p,m]=(0,Un.useState)({default:!0,success:!1});return Un.default.createElement("a",{href:"/#",onClick:l=>y(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let _=e&&e.trim();m({default:!1,success:yield yf(_)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,bf.default)(s==null?void 0:s.copy,o)},p.default||!p.success?Un.default.createElement(cc.FontAwesomeIcon,{icon:t}):Un.default.createElement(cc.FontAwesomeIcon,{icon:r}))},vt=C(Wv,{ssrStyles:()=>Promise.resolve().then(()=>(ic(),ac)),clientStyles:()=>(ic(),U(ac)).default});var Fv=(e,o)=>[...e.matchAll(new RegExp(o,"gi"))].map(r=>r.index).filter(r=>Number.isFinite(r)),Bv=({className:e="dapp-transaction-data",customCopyIcon:o,data:t,globalStyles:r,highlight:s,innerTransactionDataClasses:p,isScCall:m,label:d,showCopyButton:l=!0,styles:_,showDataDecode:u,transactionIndex:f})=>{let[x,v]=(0,O.useState)(t),{transactionDataInputLabelClassName:h,transactionDataInputValueClassName:N}=p||{},I=O.default.createElement(O.default.Fragment,null,x),[R,...M]=s&&m?s.split("@"):[],W=x&&s,P=W?Fv(x,s):[],H=W&&P.length>0,q=Y=>{!Y||Y.scrollIntoView()},X=Y=>{v(Y)},oe=()=>{v(t)};if(H)switch(!0){case x.startsWith(s):{let[,Y]=x.split(s);I=O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:r==null?void 0:r.highlighted},s),O.default.createElement("span",{className:r==null?void 0:r.textMuted},Y));break}case x.endsWith(s):{let[Y]=x.split(s);I=O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:r==null?void 0:r.textMuted},Y),O.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:q},s));break}default:{let{start:Y,end:de}=Hm({occurrences:P,transactionIndex:f,data:x,highlight:s});I=O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:r==null?void 0:r.textMuted},Y),O.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:q},s),O.default.createElement("span",{className:r==null?void 0:r.textMuted},de));break}}let ae=[Yo(R),...M].join("@");return O.default.createElement(O.default.Fragment,null,R&&O.default.createElement("div",{className:(0,an.default)(_==null?void 0:_.transactionData,e)},O.default.createElement("span",{className:(0,an.default)(_==null?void 0:_.transactionDataLabel,h)},"Smart Contract Call"),O.default.createElement("div",{className:_==null?void 0:_.transactionDataValueWrapper},O.default.createElement("div",{"data-testid":"confirmScCall",className:(0,an.default)(_==null?void 0:_.transactionDataValue,N)},O.default.createElement("span",{className:_==null?void 0:_.transactionDataValueText},ae),x&&O.default.createElement(vt,{text:ae,className:_==null?void 0:_.transactionDataValueCopy})))),O.default.createElement("div",{className:(0,an.default)(_==null?void 0:_.transactionData,e)},O.default.createElement("div",{className:(0,an.default)(_==null?void 0:_.transactionDataLabel,h)},d!=null?d:"Data",u&&O.default.createElement(xf,{data:t,onDecode:X,onDecodeError:oe})),O.default.createElement("div",{className:_==null?void 0:_.transactionDataValueWrapper},O.default.createElement("div",{"data-testid":"confirmData",className:(0,an.default)(_==null?void 0:_.transactionDataValue,N)},O.default.createElement("span",{className:_==null?void 0:_.transactionDataValueText},x?I:Us),x&&l&&O.default.createElement(vt,{copyIcon:o,text:x,className:_==null?void 0:_.transactionDataValueCopy})))))},wf=C(Bv,{ssrStyles:()=>Promise.resolve().then(()=>(pc(),sc)),clientStyles:()=>(pc(),U(sc)).default});n();n();var Af=require("react"),ue=S(require("classnames")),If=(e=null,o)=>(0,Af.useMemo)(()=>({formGroup:(0,ue.default)(o==null?void 0:o.formGroup,o==null?void 0:o.textBreak,o==null?void 0:o.textLeft),formLabel:(0,ue.default)(o==null?void 0:o.textBreak,o==null?void 0:o.textSecondary),icon:o==null?void 0:o.textWhite,contentWrapper:(0,ue.default)(o==null?void 0:o.dFlex,o==null?void 0:o.flexColumn,o==null?void 0:o.justifyContentStart,o==null?void 0:o.flexRow,o==null?void 0:o.justifyContentBetween,o==null?void 0:o.mb3),tokenWrapper:(0,ue.default)(o==null?void 0:o.mb3,o==null?void 0:o.mb0,o==null?void 0:o.dFlex,o==null?void 0:o.flexColumn,o==null?void 0:o.alignItemsStart),tokenLabel:(0,ue.default)(o==null?void 0:o.textSecondary,o==null?void 0:o.textLeft),tokenValue:(0,ue.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter),scamReport:o==null?void 0:o.textWarning,scamReportIcon:(0,ue.default)(o==null?void 0:o.textWarning,o==null?void 0:o.mr1),tokenAmountLabel:(0,ue.default)(o==null?void 0:o.textSecondary,o==null?void 0:o.textLeft),tokenAmountValue:(0,ue.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter),dataFormGroup:(0,ue.default)(o==null?void 0:o.formGroup,o==null?void 0:o.textLeft),errorMessage:(0,ue.default)(o==null?void 0:o.textDanger,o==null?void 0:o.dFlex,o==null?void 0:o.justifyContentCenter,o==null?void 0:o.alignItemsCenter),buttonsWrapper:(0,ue.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter,o==null?void 0:o.justifyContentEnd,o==null?void 0:o.mt1),cancelButton:(0,ue.default)(o==null?void 0:o.btn,o==null?void 0:o.btnDark,o==null?void 0:o.textWhite,o==null?void 0:o.dFlex,o==null?void 0:o.mr2),signButton:(0,ue.default)(o==null?void 0:o.btn,e?o==null?void 0:o.btnWarning:o==null?void 0:o.btnPrimary,o==null?void 0:o.dFlex,o==null?void 0:o.ml2)}),[e,o]);n();n();n();var Qe=S(require("react")),wc=S(require("classnames"));n();n();var Vr=S(require("react")),_c=S(require("classnames"));var Gv=({className:e,styles:o})=>Vr.default.createElement("div",{className:(0,_c.default)(o==null?void 0:o.loadingDots,e)},Array.from({length:3}).map((t,r)=>Vr.default.createElement("span",{key:`loading-dot-${r}`,className:(0,_c.default)(o==null?void 0:o.loadingDot,o==null?void 0:o[`loadingDot-${r}`])})),Vr.default.createElement("span",null,"Loading...")),cn=C(Gv,{ssrStyles:()=>Promise.resolve().then(()=>(dc(),mc)),clientStyles:()=>(dc(),U(mc)).default});n();n();n();var sn=S(require("react")),Df=S(require("bignumber.js"));E();var Vv=({amount:e,styles:o,type:t,identifier:r})=>{let s=new Df.default(e),p=s.isZero(),m=s.isEqualTo(1)?"SFT":"SFTs",d=s.toNumber().toLocaleString("en"),l=`${d} ${r}`;return p?sn.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are using"):t==="NonFungibleESDT"?sn.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending an NFT"):t==="SemiFungibleESDT"?sn.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},sn.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelText},"You are sending"),sn.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":l},d," ",m)):sn.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending")},Cf=C(Vv,{ssrStyles:()=>Promise.resolve().then(()=>(uc(),lc)),clientStyles:()=>(uc(),U(lc)).default});n();n();var Je=S(require("react")),Wf=require("@fortawesome/free-solid-svg-icons"),Of=require("@fortawesome/react-fontawesome"),Ff=S(require("classnames"));E();n();n();var pn=S(require("react")),hc=S(require("classnames"));n();var $r=S(require("react")),$v=e=>$r.createElement("svg",T({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),$r.createElement("g",null,$r.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),qr=$v;var zv=({amount:e,displayAsUsd:o,addEqualSign:t,egldIcon:r,className:s,showTokenLabel:p=!0,styles:m,tokenLabel:d,showTokenLabelSup:l,"data-testid":_})=>{let[u,f]=e.split("."),x=o&&u.indexOf("$")<0?`$${u}`:u,h=(()=>{let R={processedMainBalance:x};return t&&o&&(R.approximation="\u2248"),f&&(R.decimalBalance=`.${f}`),!o&&p&&(R.tokenLabel=` ${d}`),R})(),I=[h.approximation,h.processedMainBalance,h.decimalBalance,h.tokenLabel].reduce((R,M)=>M?R.concat(M):R,"");return pn.default.createElement("div",{className:(0,hc.default)(m==null?void 0:m.balance,s),"data-testid":_,"data-value":I},r&&!o&&pn.default.createElement(qr,{className:m==null?void 0:m.balanceSymbol}),h.approximation&&pn.default.createElement("span",{className:m==null?void 0:m.balanceApproximation},h.approximation),h.processedMainBalance&&pn.default.createElement("span",{className:m==null?void 0:m.balanceMain},x),h.decimalBalance&&pn.default.createElement("span",{className:m==null?void 0:m.balanceDecimals},h.decimalBalance),h.tokenLabel&&pn.default.createElement("sup",{className:(0,hc.default)(m==null?void 0:m.balanceSuffix,{[m==null?void 0:m.balanceSuffixSup]:l})},h.tokenLabel))},wt=C(zv,{ssrStyles:()=>Promise.resolve().then(()=>(gc(),fc)),clientStyles:()=>(gc(),U(fc)).default});n();n();var Pf=S(require("react")),Ef=S(require("classnames"));E();var jv=d=>{var l=d,{amount:e,usd:o,decimals:t,addEqualSign:r,className:s,globalStyles:p}=l,m=Ne(l,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let _=Sr({amount:e,usd:o,decimals:t,addEqualSign:r!=null?r:!0}),f=`${e}`===Ie?`= $${Ie}`:_;return Pf.default.createElement("small",T({className:(0,Ef.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,s!=null?s:"dapp-usd-value")},m),f)},Rf=C(jv,{});var Xv=({isEgld:e,styles:o,tokenPrice:t,isNftOrSft:r,handleReference:s,currentTransaction:p,amount:m,tokenDetails:d})=>{let{network:l}=_o(),{tokenAvatar:_,tokenDecimals:u,identifier:f}=d,x=({addCommas:I})=>Me({input:e?p.transaction.getValue().toString():m,decimals:e?Number(l.decimals):u,digits:Number(l.digits),showLastNonZeroDecimal:!1,addCommas:I}),v=e||d.identifier===Hs,h=x({addCommas:!0}),N=x({addCommas:!1});return Je.default.createElement("div",{className:o==null?void 0:o.confirmAmountData},Je.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataWrapper},!v&&_&&Je.default.createElement("img",{src:_,className:o==null?void 0:o.confirmAmountDataIcon}),!v&&!_&&Je.default.createElement("div",{className:(0,Ff.default)(o==null?void 0:o.confirmAmountDataIcon,o==null?void 0:o.confirmAmountDataIconDefault)},Je.default.createElement(Of.FontAwesomeIcon,{icon:Wf.faCoins,className:o==null?void 0:o.confirmAmountDataIconDefaultIcon})),Je.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataBalanceWrapper,ref:s},Je.default.createElement(wt,{amount:h,egldIcon:v,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:v?l.egldLabel:f,className:o==null?void 0:o.confirmAmountDataBalance}))),!r&&t&&Je.default.createElement(Rf,{amount:N,usd:t,"data-testid":"confirmUsdValue",className:o==null?void 0:o.confirmAmountDataPrice}),!r&&!t&&Je.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataPrice},"Price Unknown"))},Bf=C(Xv,{ssrStyles:()=>Promise.resolve().then(()=>(xc(),Tc)),clientStyles:()=>(xc(),U(Tc)).default});n();n();var Be=S(require("react")),Gf=require("@fortawesome/free-solid-svg-icons"),Hf=require("@fortawesome/react-fontawesome"),Vf=S(require("classnames"));E();hn();var Zv=({styles:e,amount:o,type:t,tokenDetails:r})=>{let{network:s}=_o(),{identifier:p,tokenAvatar:m,name:d}=r,l="SemiFungibleESDT"===t,u=Array(Math.min(4,Number(o))).fill(null);return Be.default.createElement("div",{onClick:x=>{var h;if(!p)return;let v=pt({explorerAddress:s.explorerAddress,to:st.nftDetails(p)});x.preventDefault(),x.stopPropagation(),(h=he.safeWindow)!=null&&h.open&&he.safeWindow.open(v)},className:e==null?void 0:e.confirmAmountNftSft},Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftWrapper},m?Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},u.map((x,v)=>Be.default.createElement("img",{src:m,alt:t,key:`nft-sft-avatar-${v}`,style:{opacity:1-.25*v,zIndex:u.length-v,marginLeft:(u.length-v-1)*4},className:(0,Vf.default)(e==null?void 0:e.confirmAmountNftSftIcon,{[e==null?void 0:e.confirmAmountNftSftIconRelative]:v===0})}))):Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconText},l?"SFT":"NFT")),Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftContent},Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftName,"data-testid":"nftLabel"},d),Be.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),Be.default.createElement(Hf.FontAwesomeIcon,{icon:Gf.faArrowUpRightFromSquare,className:e==null?void 0:e.confirmAmountNftSftIcon}))},$f=C(Zv,{ssrStyles:()=>Promise.resolve().then(()=>(Sc(),yc)),clientStyles:()=>(Sc(),U(yc)).default});n();n();var qf=require("react"),zf=()=>{let[e,o]=(0,qf.useState)(!0),t=p=>p.getBoundingClientRect().width,r=p=>parseInt(getComputedStyle(p).getPropertyValue("font-size"));return{isFontSizeLoading:e,handleAmountReference:p=>{if(!p)return;let m=p.firstChild,d={parent:p.offsetWidth,firstChild:r(m)};if(!!m){for(;d.parent<t(m);){let l=d.firstChild-.1,_={fontSize:`${l}px`},u={firstChild:l};Object.assign(m.style,_),Object.assign(d,u)}o(!1)}}}};var Qv=({styles:e,currentTransaction:o})=>{let{tokenId:t,nonce:r,amount:s}=o.transactionTokenInfo,{isFontSizeLoading:p,handleAmountReference:m}=zf(),d=r&&r.length>0?`${t}-${r}`:t,l=kd({tokenId:d}),{price:_}=Gr(),{type:u,esdtPrice:f,isLoading:x,identifier:v}=l,h=!t,N=h?_:f,I=u?["SemiFungibleESDT","NonFungibleESDT"].includes(u):!1;return Qe.default.createElement("div",{className:e==null?void 0:e.confirmAmount},Qe.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},x?Qe.default.createElement(cn,null):Qe.default.createElement(Cf,{amount:s,type:u,identifier:v})),Qe.default.createElement("div",{className:e==null?void 0:e.confirmAmountWrapper},Qe.default.createElement(cn,{className:(0,wc.default)(e==null?void 0:e.confirmAmountLoading,{[e==null?void 0:e.confirmAmountLoadingVisible]:x||p})}),Qe.default.createElement("div",{className:(0,wc.default)(e==null?void 0:e.confirmAmountContent,{[e==null?void 0:e.confirmAmountContentHidden]:x||p})},I?Qe.default.createElement($f,{amount:s,type:u,tokenDetails:l}):Qe.default.createElement(Bf,{isNftOrSft:I,isEgld:h,amount:s,handleReference:m,currentTransaction:o,tokenDetails:l,tokenPrice:N}))))},Kf=C(Qv,{ssrStyles:()=>Promise.resolve().then(()=>(vc(),bc)),clientStyles:()=>(vc(),U(bc)).default});n();n();var So=S(require("react"));E();var ow=({transaction:e,styles:o})=>{let{price:t}=Gr(),r=su(),s=ii({gasPerDataByte:String(Ft),gasPriceModifier:String(Ta),gasLimit:e.getGasLimit().valueOf().toString(),gasPrice:e.getGasPrice().valueOf().toString(),data:e.getData().toString(),chainId:e.getChainID().valueOf()}),p=Me({input:s,showLastNonZeroDecimal:!0}),m=t?Gm({feeLimit:s,egldPriceInUsd:t,hideEqualSign:!0}):null;return So.default.createElement("div",{className:o==null?void 0:o.confirmFee},So.default.createElement("div",{className:o==null?void 0:o.confirmFeeLabel},"Transaction Fee"),So.default.createElement("div",{className:o==null?void 0:o.confirmFeeData},So.default.createElement(wt,{className:o==null?void 0:o.confirmFeeDataBalance,"data-testid":"confirmFee",egldIcon:!0,showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:r,amount:p}),m?So.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},"(",So.default.createElement(wt,{amount:m,displayAsUsd:!0,addEqualSign:!0,className:o==null?void 0:o.confirmFeeDataPrice}),")"):So.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},So.default.createElement(cn,null))))},Yf=C(ow,{ssrStyles:()=>Promise.resolve().then(()=>(Ic(),Ac)),clientStyles:()=>(Ic(),U(Ac)).default});n();n();var re=S(require("react")),cg=require("@fortawesome/free-solid-svg-icons"),sg=require("@fortawesome/react-fontawesome"),pg=S(require("bignumber.js"));E();n();n();var Zf=e=>e?e.lastIndexOf(".elrond")>0?e.substring(0,e.lastIndexOf(".")):e:void 0;n();n();var Dc=S(require("react")),Qf=require("@fortawesome/free-solid-svg-icons"),eg=require("@fortawesome/react-fontawesome"),og=S(require("classnames"));var tw=l=>{var _=l,{page:e,text:o,className:t="dapp-explorer-link",children:r,globalStyles:s,customExplorerIcon:p,styles:m}=_,d=Ne(_,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:u}}=_o(),f=o!=null?o:Dc.default.createElement(eg.FontAwesomeIcon,{icon:p!=null?p:Qf.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),x=pt({explorerAddress:String(u),to:e});return Dc.default.createElement("a",T({href:x,target:"_blank",className:(0,og.default)(m==null?void 0:m.link,s==null?void 0:s.ml2,t),rel:"noreferrer"},d),r!=null?r:f)},ng=C(tw,{ssrStyles:()=>Promise.resolve().then(()=>(Lc(),kc)),clientStyles:()=>(Lc(),U(kc)).default});n();n();var Q=S(require("react")),rg=S(require("classnames"));E();var aw=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:r,styles:s})=>{let[p,m]=(0,Q.useState)(0),[d,l]=(0,Q.useState)(!1),_=(0,Q.useRef)(document==null?void 0:document.createElement("span")),u=(0,Q.useRef)(document==null?void 0:document.createElement("span")),f=iu(p,300),x=()=>{if(_.current&&u.current){let N=u.current.offsetWidth-_.current.offsetWidth;l(N>1)}},v=()=>{m(p+1)};return(0,Q.useEffect)(()=>(window==null||window.addEventListener("resize",v),()=>{window==null||window.removeEventListener("resize",v)})),(0,Q.useEffect)(()=>{x()},[f]),Q.default.createElement("span",{ref:_,className:(0,rg.default)(s==null?void 0:s.trim,r,o,{overflow:d}),"data-testid":t},Q.default.createElement("span",{ref:u,className:s==null?void 0:s.hiddenTextRef},e),d?Q.default.createElement(Q.default.Fragment,null,Q.default.createElement("span",{className:s==null?void 0:s.left},Q.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),Q.default.createElement("span",{className:s==null?void 0:s.ellipsis},Gs),Q.default.createElement("span",{className:s==null?void 0:s.right},Q.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):Q.default.createElement("span",null,e))},ag=C(aw,{ssrStyles:()=>Promise.resolve().then(()=>(Nc(),Cc)),clientStyles:()=>(Nc(),U(Cc)).default});var cw=({amount:e,label:o,receiver:t,customExplorerIcon:r,receiverUsername:s,customCopyIcon:p,scamReport:m,styles:d})=>{let l=Za(t),_=Boolean(l||s),u=new pg.default(e).isZero(),{data:f,isLoading:x,error:v}=Qo(_?null:t),h=s!=null?s:f==null?void 0:f.username,N=h!=null?h:t,I=Boolean(t&&Boolean(h)&&!v),R=u?"To interact with":"To";return re.default.createElement("div",{className:d==null?void 0:d.receiver},re.default.createElement("div",{className:d==null?void 0:d.receiverLabelWrapper},re.default.createElement("div",{className:d==null?void 0:d.receiverLabel},o!=null?o:R),m&&re.default.createElement("div",{className:d==null?void 0:d.receiverLabelScam},re.default.createElement("span",{className:d==null?void 0:d.receiverLabelScamText,"data-testid":"confirmScamReport"},m),re.default.createElement(sg.FontAwesomeIcon,{icon:cg.faExclamationTriangle,className:d==null?void 0:d.receiverLabelScamIcon}))),x?re.default.createElement("div",{className:d==null?void 0:d.receiverWrapper},re.default.createElement(cn,{className:d==null?void 0:d.receiverLoading})):re.default.createElement("div",{className:d==null?void 0:d.receiverWrapper,"data-testid":"confirmReceiver"},re.default.createElement(ag,{text:t,className:d==null?void 0:d.receiverTrim}),I&&!l&&re.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",re.default.createElement(qr,{className:d==null?void 0:d.receiverDataIcon}),re.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},Zf(N)),")"),l&&re.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",re.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},"Smart Contract"),")"),re.default.createElement(vt,{text:t,className:d==null?void 0:d.receiverCopy,copyIcon:p}),re.default.createElement(ng,{page:`/${me}/${t}`,className:d==null?void 0:d.receiverExternal,customExplorerIcon:r})))},mg=C(cw,{ssrStyles:()=>Promise.resolve().then(()=>(Ec(),Pc)),clientStyles:()=>(Ec(),U(Pc)).default});var pw=({currentTransaction:e,error:o,signStepInnerClasses:t,globalStyles:r,styles:s})=>{if(!e)return null;let{inputGroupClassName:p,inputLabelClassName:m,inputValueClassName:d,errorClassName:l}=t||{},{tokenId:_,multiTxData:u,receiver:f,amount:x}=e.transactionTokenInfo,v=u?new _g.Address(f).bech32():e.transaction.getReceiver().toString(),h=e.receiverScamInfo,N=If(h,r),I=e.transaction.getData().toString();return Ro.default.createElement("div",{className:s==null?void 0:s.summary},Ro.default.createElement("div",{className:s==null?void 0:s.fields},Ro.default.createElement(Kf,{currentTransaction:e}),Ro.default.createElement(mg,{scamReport:h,receiver:v,amount:x}),Ro.default.createElement(Yf,{transaction:e.transaction}),I&&Ro.default.createElement(wf,{className:p,data:I,highlight:u,innerTransactionDataClasses:{transactionDataInputLabelClassName:m,transactionDataInputValueClassName:d},isScCall:!_,showDataDecode:!0,transactionIndex:e.transactionIndex}),o&&Ro.default.createElement("p",{className:(0,lg.default)(N.errorMessage,l)},o)))},ug=C(pw,{ssrStyles:()=>Promise.resolve().then(()=>(Mc(),Rc)),clientStyles:()=>(Mc(),U(Rc)).default});n();n();var Mo=S(require("react")),gg=require("@fortawesome/free-solid-svg-icons"),hg=require("@fortawesome/react-fontawesome"),At=S(require("classnames"));var dw=e=>{let{steps:o,size:t="large",type:r="simple",collapsible:s=!1,styles:p}=e,m=o.filter(u=>!u.hidden),d=m.findIndex(u=>u.active),l=t==="large"?650:450,_=33/100*l;return Mo.default.createElement("div",{className:p==null?void 0:p.progressSteps},m.map((u,f)=>Mo.default.createElement("div",{key:`progress-step-${f}`,style:{width:s?"auto":`${100/m.length}%`},className:(0,At.default)(p==null?void 0:p.progressStep,{[p==null?void 0:p.left]:r==="detailed"})},Mo.default.createElement("div",{style:{width:s?u.active?_:20:"auto"},className:(0,At.default)(p==null?void 0:p.progressStepWrapper,{[p==null?void 0:p.active]:u.active,[p==null?void 0:p.detailed]:r==="detailed",[p==null?void 0:p.completed]:f<d||u.completed,[p==null?void 0:p.collapsible]:s})},Mo.default.createElement("div",{className:(0,At.default)(p==null?void 0:p.progressStepIndex,{[p==null?void 0:p.active]:u.active})},f+1,r==="detailed"&&f<d&&Mo.default.createElement(hg.FontAwesomeIcon,{icon:gg.faCheck,className:p==null?void 0:p.progressStepCheck})),u.title&&r==="detailed"&&Mo.default.createElement("div",{className:(0,At.default)(p==null?void 0:p.progressStepTitle,{[p==null?void 0:p.active]:u.active,[p==null?void 0:p.collapsible]:s})},Mo.default.createElement("div",{className:p==null?void 0:p.progressStepTitleText},u.title))))))},Tg=C(dw,{ssrStyles:()=>Promise.resolve().then(()=>(Oc(),Wc)),clientStyles:()=>(Oc(),U(Wc)).default});n();j();var lw=e=>{var Wo;let{allTransactions:o,className:t,currentStep:r,currentTransaction:s,GuardianScreen:p,error:m,globalStyles:d,handleClose:l,handleSubmit:_,isLastTransaction:u,onPrev:f,onSignTransaction:x,signStepInnerClasses:v,styles:h,title:N,waitingForDevice:I}=e,[R,M]=(0,ee.useState)(!1),[W,P]=(0,ee.useState)({});if(!s)return null;let q=`${s.transaction.getNonce().valueOf().toString()}_${s.transactionTokenInfo.multiTxData}_${s.transactionIndex}`;(0,ee.useEffect)(()=>{let Ge=Object.keys(W).includes(q),Oo=Object.values(W).includes(r);Ge||Oo||P(oo=>k(T({},oo),{[q]:r}))},[q,r]);let X=s.transaction.getData().toString(),{buttonsWrapperClassName:oe,buttonClassName:ae}=v||{},{type:Y,multiTxData:de}=s.transactionTokenInfo,Ue=r===0,ne=Ge=>{Ge.preventDefault(),Ue?l():f()},De=u&&!I,Ce=()=>y(void 0,null,function*(){if(yield x(),De&&p)return M(!0);De&&_&&_()}),eo=Y&&de&&!X.endsWith(de),se="Sign & Continue";se=I?"Check your Ledger":se,se=De?"Sign & Submit":se,se=eo?"Continue":se;let be={currentTransaction:s,error:m,allTransactions:o,currentStep:r,isGuarded:Boolean(p),signStepInnerClasses:v},Gn=()=>{M(!1)},Dt=o.length>1?"Sign Transactions":"Sign Transaction",Ct=o.length>1?"Confirm Transactions":"Confirm Transaction",Nt=o.length>1?`Signing Transaction ${r+1} of ${o.length}`:N||"Sign Transaction",dn=p&&R,B=dn?"Verify Guardian":Nt,_e=[{title:Dt,active:!R},{title:Ct,active:R,hidden:!be.isGuarded}],bo=W[q]===r;return ee.default.createElement("div",{className:(0,mn.default)(h==null?void 0:h.modalLayoutContent,h==null?void 0:h.spaced,t,{[(Wo=h==null?void 0:h.guarded)!=null?Wo:""]:be.isGuarded})},dn&&ee.default.createElement("div",{onClick:Gn,className:(0,mn.default)(h==null?void 0:h.modalLayoutHeadingIcon,h==null?void 0:h.back)},ee.default.createElement(Fc.FontAwesomeIcon,{icon:zr.faArrowLeft})),ee.default.createElement("div",{onClick:ne,className:(0,mn.default)(h==null?void 0:h.modalLayoutHeadingIcon,h==null?void 0:h.close)},ee.default.createElement(Fc.FontAwesomeIcon,{icon:zr.faTimes})),be.isGuarded&&ee.default.createElement(Tg,{steps:_e,type:"detailed",size:"small"}),ee.default.createElement("div",{className:h==null?void 0:h.title,"data-testid":"signStepTitle"},B||"Confirm on Ledger"),dn?ee.default.createElement(p,k(T({},e),{onPrev:Gn,guardianFormDescription:"Enter the code from your Authenticator app to verify this transaction."})):ee.default.createElement(ee.default.Fragment,null,ee.default.createElement(ug,T({},be)),ee.default.createElement("div",{className:(0,mn.default)(h==null?void 0:h.signButtons,oe)},ee.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:ne,className:(0,mn.default)(h==null?void 0:h.signButtonCancel,ae)},r===0?"Cancel":"Back"),ee.default.createElement("button",{type:"button",className:(0,mn.default)(d==null?void 0:d.btnPrimary,h==null?void 0:h.signButtonSubmit,ae),id:"signBtn","data-testid":"signBtn",onClick:Ce,disabled:I||!bo},bo?se:"Loading..."))))},yg=C(lw,{ssrStyles:()=>Promise.resolve().then(()=>(kt(),It)),clientStyles:()=>(kt(),U(It)).default});var uw=({handleClose:e,handleSubmit:o,error:t,className:r="dapp-device-modal",verifyReceiverScam:s=!0,GuardianScreen:p,title:m="Confirm transaction",signStepInnerClasses:d,globalStyles:l,styles:_})=>{let{address:u}=No(),{onSignTransaction:f,onPrev:x,allTransactions:v,waitingForDevice:h,onAbort:N,isLastTransaction:I,signedTransactions:R,setSignedTransactions:M,currentStep:W,callbackRoute:P,currentTransaction:H}=Hi({onCancel:e,verifyReceiverScam:s,hasGuardianScreen:Boolean(p)}),q=H==null,X={wrapper:(0,Bc.default)(_==null?void 0:_.modalContainer,_==null?void 0:_.walletConnect,r),container:(0,Bc.default)(l==null?void 0:l.card,l==null?void 0:l.container),cardBody:l==null?void 0:l.cardBody};return Lt.default.createElement(ku,{onClose:e,modalConfig:{modalDialogClassName:X.wrapper},visible:!0},Lt.default.createElement("div",{className:X.cardBody},q?Lt.default.createElement(Ru,null):Lt.default.createElement(yg,{address:u,allTransactions:v,callbackRoute:P,currentStep:W,currentTransaction:H,error:t,GuardianScreen:p,handleClose:N,handleSubmit:o,isLastTransaction:I,onPrev:x,onSignTransaction:f,setSignedTransactions:M,signStepInnerClasses:d,signedTransactions:R,title:m,waitingForDevice:h})))},fw=C(uw,{ssrStyles:()=>Promise.resolve().then(()=>(kt(),It)),clientStyles:()=>(kt(),U(It)).default});0&&(module.exports={SignWithDeviceModal});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
